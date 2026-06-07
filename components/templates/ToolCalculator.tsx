"use client";

import { useState } from "react";

export type InputDef = {
	id: string;
	label: string;
	type: "number" | "select";
	default: number | string;
	min?: number;
	max?: number;
	step?: number;
	suffix?: string;
	prefix?: string;
	options?: { label: string; value: string | number }[];
	help?: string;
};

export type OutputDef = {
	id: string;
	label: string;
	format?: "inr" | "ratio" | "percent" | "months" | "number";
	help?: string;
	band?: { good?: number; warning?: number; bad?: number; direction?: "higher-better" | "lower-better" };
};

type Props = {
	toolId: string;
	inputs: InputDef[];
	outputs: OutputDef[];
	howToUse?: string[];
	formula?: string;
};

function fmt(n: number, format?: string): string {
	if (Number.isNaN(n) || !Number.isFinite(n)) return "—";
	if (format === "inr") {
		if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)}Cr`;
		if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
		if (n >= 1000) return `₹${(n / 1000).toFixed(1)}k`;
		return `₹${Math.round(n).toLocaleString("en-IN")}`;
	}
	if (format === "ratio") return `${n.toFixed(2)}x`;
	if (format === "percent") return `${(n * 100).toFixed(1)}%`;
	if (format === "months") return `${n.toFixed(1)} months`;
	return n.toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

function bandColor(value: number, band?: OutputDef["band"]): string {
	if (!band) return "text-[#2D3748]";
	const dir = band.direction ?? "higher-better";
	if (dir === "higher-better") {
		if (band.good !== undefined && value >= band.good) return "text-[#1F8A50]";
		if (band.bad !== undefined && value < band.bad) return "text-[#E53E3E]";
		return "text-[#FF6B35]";
	}
	if (band.good !== undefined && value <= band.good) return "text-[#1F8A50]";
	if (band.bad !== undefined && value > band.bad) return "text-[#E53E3E]";
	return "text-[#FF6B35]";
}

function compute(toolId: string, v: Record<string, number | string>): Record<string, number> {
	const num = (k: string) => +v[k] || 0;
	const str = (k: string) => String(v[k]);
	switch (toolId) {
		case "cac-calculator": {
			const totalCost = num("media") + num("agency") + num("tooling") + num("creative") + num("influencer");
			const customers = Math.max(num("customers"), 1);
			const codShare = num("codShare") / 100;
			const rtoRate = num("rtoRate") / 100;
			const rawCac = num("media") / customers;
			const loadedCac = totalCost / customers;
			const codDrag = 1 / Math.max(1 - codShare * rtoRate, 0.01);
			return { totalCost, rawCac, loadedCac, effectiveCac: loadedCac * codDrag };
		}
		case "ltv-calculator": {
			const grossRevenue = num("aov") * num("frequency") * num("lifespan");
			const grossMarginLtv = grossRevenue * (num("margin") / 100);
			return { grossRevenue, grossMarginLtv };
		}
		case "cac-payback-calculator": {
			const monthlyGrossProfit = num("aov") * (num("margin") / 100) * num("monthlyFreq");
			const paybackMonths = monthlyGrossProfit > 0 ? num("cac") / monthlyGrossProfit : 0;
			return { monthlyGrossProfit, paybackMonths };
		}
		case "ltv-cac-ratio-calculator": {
			const cac = Math.max(num("cac"), 1);
			return { ratio: num("ltv") / cac, cushion: num("ltv") - cac };
		}
		case "roas-calculator": {
			const spend = Math.max(num("spend"), 1);
			const margin = num("margin") / 100;
			const vtcShare = num("vtcShare") / 100;
			const roas = num("revenue") / spend;
			const clickOnlyRoas = roas * (1 - vtcShare);
			const breakeven = margin > 0 ? 1 / margin : 0;
			return { roas, clickOnlyRoas, breakeven, verdict: clickOnlyRoas * margin - 1 };
		}
		case "ad-spend-planner": {
			const targetRev = num("targetRev");
			const aov = Math.max(num("aov"), 1);
			const targetCac = num("targetCac");
			const margin = num("margin") / 100;
			const organicShare = num("organicShare") / 100;
			const paidRev = targetRev * (1 - organicShare);
			const newCustomers = paidRev / aov;
			const requiredSpend = newCustomers * targetCac;
			return {
				paidRev, newCustomers, requiredSpend,
				spendShare: targetRev > 0 ? requiredSpend / targetRev : 0,
				marginAfterAds: targetRev * margin - requiredSpend,
			};
		}
		case "marketing-budget-calculator": {
			const revenue = num("monthlyRevenue");
			const stage = str("stage");
			const type = str("businessType");
			const growth = str("growthTarget");
			const stageMatrix: Record<string, [number, number]> = {
				"pre-pmf": [0.25, 0.6],
				"post-pmf": [0.15, 0.3],
				scale: [0.10, 0.20],
			};
			const typeAdjust: Record<string, number> = { d2c: 1.0, saas: 0.85, services: 0.7 };
			const growthAdjust: Record<string, number> = { low: 0.7, moderate: 1.0, aggressive: 1.3 };
			const [lowPct, highPct] = stageMatrix[stage] || [0.15, 0.3];
			const adjusted = (lowPct + highPct) / 2 * (typeAdjust[type] || 1) * (growthAdjust[growth] || 1);
			return {
				recommendedPct: adjusted,
				recommendedSpend: revenue * adjusted,
				lowEnd: revenue * lowPct * (typeAdjust[type] || 1),
				highEnd: revenue * highPct * (typeAdjust[type] || 1) * 1.3,
			};
		}
		case "burn-runway-calculator": {
			const grossProfit = num("monthlyRev") * (num("margin") / 100);
			const netBurn = num("opex") - grossProfit;
			const runwayMonths = netBurn > 0 ? num("cash") / netBurn : 999;
			const marketingMonthly = num("opex") * (num("marketingShare") / 100);
			const burnNoMarketing = num("opex") - marketingMonthly - grossProfit;
			const runwayMinusMarketing = burnNoMarketing > 0 ? num("cash") / burnNoMarketing : 999;
			return { grossProfit, netBurn, runwayMonths, marketingMonthly, runwayMinusMarketing };
		}
		case "email-list-value-calculator": {
			const listSize = num("listSize");
			const open = num("openRate") / 100;
			const ctr = num("ctr") / 100;
			const cr = num("conversionRate") / 100;
			const aov = num("aov");
			const sends = num("sendsPerMonth");
			const openersPerSend = listSize * open;
			const buyersPerSend = openersPerSend * ctr * cr;
			const monthlyValue = buyersPerSend * aov * sends;
			const annualValue = monthlyValue * 12;
			return {
				openersPerSend, buyersPerSend, monthlyValue, annualValue,
				perSubscriber: listSize > 0 ? annualValue / listSize : 0,
			};
		}
		case "whatsapp-roi-calculator": {
			const volume = num("monthlyVolume");
			const monthlyMsgCost = volume * num("costPerMsg");
			const totalMonthlyCost = monthlyMsgCost + num("bspMonthly");
			const buyers = volume * (num("conversionRate") / 100);
			const monthlyRevenue = buyers * num("aov");
			return {
				monthlyMsgCost, totalMonthlyCost, monthlyRevenue,
				roi: totalMonthlyCost > 0 ? monthlyRevenue / totalMonthlyCost : 0,
				costPerCustomer: buyers > 0 ? totalMonthlyCost / buyers : 0,
			};
		}
		case "influencer-roi-calculator": {
			const creators = num("creators");
			const totalCash = creators * num("cashPerCreator");
			const totalProductComp = creators * num("productCostPerCreator");
			const totalProgramCost = totalCash + totalProductComp;
			const totalReach = creators * num("avgReach");
			const buyers = totalReach * (num("engagementRate") / 100) * (num("conversionRate") / 100);
			const totalRevenue = buyers * num("aov");
			return {
				totalCash, totalProductComp, totalProgramCost, totalReach, totalRevenue,
				roi: totalProgramCost > 0 ? totalRevenue / totalProgramCost : 0,
				cac: buyers > 0 ? totalProgramCost / buyers : 0,
			};
		}
		case "seo-traffic-projector": {
			const kwCount = num("kwCount");
			const volume = num("avgVolume");
			const rank = str("targetRank");
			const rankShare = num("rankShare") / 100;
			const aioImpact = num("aioImpact") / 100;
			const leadCr = num("leadConversion") / 100;
			const ctrByRank: Record<string, number> = { "1": 0.30, "top-3": 0.18, "top-10": 0.07, "top-20": 0.02 };
			const baseCtr = ctrByRank[rank] || 0.07;
			const compressedCtr = rank === "top-3" || rank === "1" ? baseCtr * (1 - aioImpact) : baseCtr;
			const totalVolume = kwCount * volume;
			const ranking = totalVolume * rankShare;
			const projectedTraffic = ranking * compressedCtr;
			return { totalVolume, avgCtr: compressedCtr, projectedTraffic, projectedLeads: projectedTraffic * leadCr };
		}
		case "channel-mix-calculator": {
			const budget = num("totalBudget");
			const type = str("businessType");
			const allocations: Record<string, number[]> = {
				"d2c-pre-pmf": [0.65, 0.15, 0, 0, 0.05, 0.05, 0.10],
				"d2c-post-pmf": [0.45, 0.20, 0, 0.05, 0.10, 0.05, 0.15],
				"d2c-scale": [0.35, 0.25, 0, 0.10, 0.10, 0.05, 0.15],
				"saas-pre-pmf": [0.10, 0.50, 0.10, 0, 0, 0.05, 0.25],
				"saas-post-pmf": [0.10, 0.45, 0.25, 0.05, 0, 0.05, 0.10],
				"saas-scale": [0.10, 0.35, 0.30, 0.10, 0, 0.05, 0.10],
				"real-estate": [0.50, 0.30, 0, 0.05, 0.10, 0.0, 0.05],
				healthcare: [0.30, 0.40, 0, 0.05, 0.10, 0.05, 0.10],
			};
			const a = allocations[type] || allocations["d2c-post-pmf"];
			return {
				meta: budget * a[0], google: budget * a[1], linkedin: budget * a[2],
				youtube: budget * a[3], whatsapp: budget * a[4], email: budget * a[5], seo: budget * a[6],
			};
		}
		case "diwali-budget-planner": {
			const annual = num("annualBudget");
			const share = num("diwaliShare") / 100;
			const cpmInflation = num("cpmInflation") / 100;
			const diwaliBudget = annual * share;
			return {
				diwaliBudget,
				preDussehra: diwaliBudget * 0.10,
				dussehraWeek: diwaliBudget * 0.20,
				preDhanteras: diwaliBudget * 0.20,
				diwaliWeek: diwaliBudget * 0.35,
				postDiwali: diwaliBudget * 0.15,
				effectiveCpmRise: 1 + cpmInflation,
			};
		}
		case "conversion-rate-calculator": {
			const sessions = num("sessions");
			const conversions = num("conversions");
			const aov = num("aov");
			const lift = num("crLift") / 100;
			const currentCr = sessions > 0 ? conversions / sessions : 0;
			const currentRevenue = conversions * aov;
			const newCr = currentCr + lift;
			const newRevenue = sessions * newCr * aov;
			return {
				currentCr, currentRevenue, newCr, newRevenue,
				revenueIncrease: newRevenue - currentRevenue,
				cacEquivalent: currentCr + lift > 0 ? lift / (currentCr + lift) : 0,
			};
		}
		case "aov-uplift-calculator": {
			const aov = num("currentAov");
			const orders = num("monthlyOrders");
			const attachRate = num("bundleAttachRate") / 100;
			const bundleUplift = num("bundleUplift") / 100;
			const freeShipBump = num("freeShipThreshold") / 100;
			const currentRevenue = aov * orders;
			const bundleAvgAov = aov * (1 + bundleUplift);
			const blendedFromBundle = aov * (1 - attachRate) + bundleAvgAov * attachRate;
			const newAov = blendedFromBundle * (1 + freeShipBump * 0.15);
			const newRevenue = newAov * orders;
			return {
				currentRevenue, newAov, newRevenue,
				monthlyLift: newRevenue - currentRevenue,
				annualLift: (newRevenue - currentRevenue) * 12,
				aovLiftPct: aov > 0 ? (newAov - aov) / aov : 0,
			};
		}
		case "rto-impact-calculator": {
			const orders = num("monthlyOrders");
			const aov = num("aov");
			const codShare = num("codShare") / 100;
			const rtoRate = num("rtoRate") / 100;
			const rtoCostPct = num("rtoCostPct") / 100;
			const codOrders = orders * codShare;
			const rtoOrders = codOrders * rtoRate;
			const rtoCostMonthly = rtoOrders * aov * rtoCostPct;
			const monthlyRevenue = orders * aov;
			return {
				codOrders, rtoOrders, rtoCostMonthly,
				marginTax: monthlyRevenue > 0 ? rtoCostMonthly / monthlyRevenue : 0,
				annualRtoCost: rtoCostMonthly * 12,
				effectiveCacUplift: 1 / Math.max(1 - codShare * rtoRate, 0.01) - 1,
			};
		}
		case "saas-pipeline-projector": {
			const mqls = num("mqlsPerMonth");
			const m2s = num("mqlToSql") / 100;
			const s2c = num("sqlToClose") / 100;
			const acv = num("avgAcv");
			const sqlsPerMonth = mqls * m2s;
			const closesPerMonth = sqlsPerMonth * s2c;
			const monthlyARR = closesPerMonth * acv;
			return {
				sqlsPerMonth, closesPerMonth, monthlyARR,
				annualARR: monthlyARR * 12,
				pipelineCoverage: 1.5,
				revenueLagWeeks: num("salesCycleDays") / 7,
			};
		}
		default:
			return {};
	}
}

export function ToolCalculator({ toolId, inputs, outputs, howToUse, formula }: Props) {
	const initial: Record<string, number | string> = {};
	for (const inp of inputs) initial[inp.id] = inp.default;
	const [values, setValues] = useState<Record<string, number | string>>(initial);
	const computed = compute(toolId, values);

	return (
		<div className="space-y-6">
			<div className="rounded-2xl border border-[#FFE4D6] bg-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-3">
					Inputs
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{inputs.map((inp) => (
						<div key={inp.id}>
							<label htmlFor={inp.id} className="block text-[13px] font-medium text-[#2D3748] mb-1.5">
								{inp.label}
							</label>
							{inp.type === "number" ? (
								<div className="relative">
									{inp.prefix ? (
										<span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5A5A5A] text-[14px]">
											{inp.prefix}
										</span>
									) : null}
									<input
										id={inp.id}
										type="number"
										min={inp.min}
										max={inp.max}
										step={inp.step ?? 1}
										value={values[inp.id] as number}
										onChange={(e) =>
											setValues({ ...values, [inp.id]: parseFloat(e.target.value) || 0 })
										}
										className={`w-full rounded-lg border border-[#FFE4D6] bg-white text-[15px] py-2.5 ${inp.prefix ? "pl-7" : "pl-3"} ${inp.suffix ? "pr-12" : "pr-3"} text-[#2D3748] focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20`}
									/>
									{inp.suffix ? (
										<span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A5A5A] text-[13px]">
											{inp.suffix}
										</span>
									) : null}
								</div>
							) : (
								<select
									id={inp.id}
									value={values[inp.id] as string}
									onChange={(e) => setValues({ ...values, [inp.id]: e.target.value })}
									className="w-full rounded-lg border border-[#FFE4D6] bg-white text-[15px] py-2.5 px-3 text-[#2D3748] focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
								>
									{(inp.options || []).map((o) => (
										<option key={String(o.value)} value={o.value}>
											{o.label}
										</option>
									))}
								</select>
							)}
							{inp.help ? <p className="mt-1 text-[12px] text-[#5A5A5A]">{inp.help}</p> : null}
						</div>
					))}
				</div>
			</div>

			<div className="rounded-2xl border border-[#FFE4D6] bg-gradient-to-br from-[#FFF7F2]/60 to-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-3">
					Results
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{outputs.map((out) => {
						const v = computed[out.id] ?? 0;
						return (
							<div key={out.id} className="rounded-xl border border-[#FFE4D6] bg-white p-4">
								<div className="text-[12px] uppercase tracking-wider text-[#FF6B35]">
									{out.label}
								</div>
								<div className={`mt-1 font-poppins text-[24px] font-bold ${bandColor(v, out.band)}`}>
									{fmt(v, out.format)}
								</div>
								{out.help ? <p className="mt-1 text-[12px] text-[#5A5A5A]">{out.help}</p> : null}
							</div>
						);
					})}
				</div>
			</div>

			{formula ? (
				<div className="rounded-2xl border border-[#FFE4D6] bg-white p-5 text-[14px] text-[#2D3748]/90">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-2">
						Formula
					</div>
					<code className="font-mono text-[13px] text-[#2D3748]">{formula}</code>
				</div>
			) : null}

			{howToUse && howToUse.length > 0 ? (
				<div className="rounded-2xl border border-[#FFE4D6] bg-white p-5">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-2">
						How to use this
					</div>
					<ol className="space-y-2 text-[14px] text-[#2D3748]/90 list-decimal list-inside">
						{howToUse.map((s) => (
							<li key={s}>{s}</li>
						))}
					</ol>
				</div>
			) : null}
		</div>
	);
}
