/**
 * ServiceDepthSection — composite content block for any page anchored to a
 * Service (Tier 3 / 4 / 5, service hubs). Renders 5 sub-sections in order:
 *
 *   1. Service deliverables (what we ship)
 *   2. Channel-mix recommendation
 *   3. Process timeline (Discovery → Foundation → Acceleration → Compound)
 *   4. Pricing engagement tiers (Starter / Scale / Enterprise)
 *   5. Who it's for / who it's not for
 *
 * All content is sourced from lib/data/service-depth.ts. Optional Industry /
 * Geo props add a contextual headline + a one-line industry-or-geo flavour
 * underneath the main section heading — no fabricated industry/geo content.
 */

import Link from "next/link";
import { getServiceDepth } from "@/lib/data/service-depth";
import type { Service, Industry, Geo } from "@/lib/data";

type Props = {
	service: Service;
	industry?: Industry;
	geo?: Geo;
};

function contextSuffix(industry?: Industry, geo?: Geo): string {
	if (industry && geo) return ` — for ${industry.label} in ${geo.name}`;
	if (industry) return ` — for ${industry.label}`;
	if (geo) return ` — in ${geo.name}`;
	return "";
}

export function ServiceDepthSection({ service, industry, geo }: Props) {
	const depth = getServiceDepth(service);
	const ctx = contextSuffix(industry, geo);

	return (
		<>
			{/* ─────────── 1. Deliverables ─────────── */}
			<section
				id="deliverables"
				aria-labelledby="deliverables-heading"
				className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
			>
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					What we deliver
				</div>
				<h2
					id="deliverables-heading"
					className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
				>
					{service.label} deliverables{ctx}
				</h2>
				<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
					{depth.summary}
				</p>
				<ul className="mt-6 grid gap-3 sm:grid-cols-2">
					{depth.deliverables.map((d, idx) => (
						<li
							key={idx}
							className="flex items-start gap-3 rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
						>
							<span
								aria-hidden
								className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6] text-[12px] font-bold text-[#FF6B35]"
							>
								{idx + 1}
							</span>
							<span className="text-[14.5px] leading-relaxed text-[#2D3748]/90">
								{d}
							</span>
						</li>
					))}
				</ul>
			</section>

			{/* ─────────── 2. Channel mix ─────────── */}
			<section
				id="channel-mix"
				aria-labelledby="channel-mix-heading"
				className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
			>
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Channel mix
				</div>
				<h2
					id="channel-mix-heading"
					className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
				>
					How we structure {service.label.toLowerCase()}{ctx}
				</h2>
				{industry || geo ? (
					<p className="mt-3 text-[14px] italic text-[#5A5A5A]">
						{industry
							? `Adapted to ${industry.label} unit economics: CPC ${industry.avgCpcInr} ₹, CAC ${industry.avgCacInr} ₹.`
							: null}
						{industry && geo ? " " : ""}
						{geo
							? `Calibrated to ${geo.name}'s industry mix and competitive intensity.`
							: null}
					</p>
				) : null}
				<div className="mt-6 overflow-x-auto rounded-2xl border border-[#FFE4D6]">
					<table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
						<thead>
							<tr className="bg-[#FDF8F5] text-[#2D3748]">
								<th
									scope="col"
									className="border-b border-[#FFE4D6] p-3 font-semibold"
								>
									Channel / surface
								</th>
								<th
									scope="col"
									className="border-b border-[#FFE4D6] p-3 font-semibold"
								>
									Weight
								</th>
								<th
									scope="col"
									className="border-b border-[#FFE4D6] p-3 font-semibold"
								>
									Why
								</th>
							</tr>
						</thead>
						<tbody>
							{depth.channelMix.map((row) => (
								<tr
									key={row.channel}
									className="even:bg-white odd:bg-[#FEFEFE]"
								>
									<th
										scope="row"
										className="border-b border-[#FFE4D6]/60 p-3 font-medium text-[#2D3748]"
									>
										{row.channel}
									</th>
									<td className="border-b border-[#FFE4D6]/60 p-3">
										<span className="inline-flex rounded-full bg-[#FFE4D6]/60 px-2 py-0.5 text-[12px] font-medium text-[#2D3748]">
											{row.weight}
										</span>
									</td>
									<td className="border-b border-[#FFE4D6]/60 p-3 text-[13.5px] text-[#5A5A5A]">
										{row.note}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* ─────────── 3. Process timeline ─────────── */}
			<section
				id="process"
				aria-labelledby="process-heading"
				className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
			>
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Process · {service.timeToResults} to first signal
				</div>
				<h2
					id="process-heading"
					className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
				>
					How we run {service.label.toLowerCase()}{ctx}
				</h2>
				<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
					Four phases, each anchored to a stage of the{" "}
					<Link
						href="/frameleads-growth-system"
						className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
					>
						Frameleads Growth System™
					</Link>
					. Outputs below are what gets shipped at each phase — not promises about
					revenue, which depend on your unit economics, runway, and execution
					velocity.
				</p>
				<ol className="mt-6 space-y-4">
					{depth.processPhases.map((phase, idx) => (
						<li
							key={phase.label}
							className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
						>
							<div className="flex items-baseline gap-3">
								<span className="font-poppins text-[20px] font-bold leading-none text-[#FF6B35]">
									{String(idx + 1).padStart(2, "0")}
								</span>
								<div>
									<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
										{phase.label}
									</div>
									<h3 className="mt-0.5 font-poppins text-[17px] font-semibold text-[#2D3748]">
										{phase.heading}
									</h3>
								</div>
							</div>
							<ul className="mt-3 list-disc space-y-1 pl-6 text-[14.5px] leading-relaxed text-[#2D3748]/90">
								{phase.outputs.map((o, j) => (
									<li key={j}>{o}</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</section>

			{/* ─────────── 4. Pricing engagement tiers ─────────── */}
			<section
				id="pricing"
				aria-labelledby="pricing-heading"
				className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
			>
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Investment + engagement
				</div>
				<h2
					id="pricing-heading"
					className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
				>
					{service.label} pricing{ctx}
				</h2>
				<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
					Bands below are agency fees, exclusive of media spend. The exact tier
					depends on the scope, the channels in play, and the cadence you want.
					Every engagement begins with a free 30-min audit; we recommend the
					right tier (or recommend you don't engage us yet) after reviewing your
					current setup. See the{" "}
					<Link
						href="/reports/cac-benchmarks-india-2026"
						className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
					>
						CAC benchmarks report
					</Link>{" "}
					for category-specific cost context.
				</p>
				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{depth.pricingTiers.map((tier) => (
						<article
							key={tier.name}
							className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)]"
							aria-labelledby={`tier-${tier.name}-heading`}
						>
							<h3
								id={`tier-${tier.name}-heading`}
								className="font-poppins text-[18px] font-bold text-[#2D3748]"
							>
								{tier.name}
							</h3>
							<div className="mt-2 font-poppins text-[20px] font-semibold text-[#FF6B35]">
								{tier.monthlyBand}
							</div>
							<p className="mt-1 text-[12px] italic text-[#5A5A5A]">
								{tier.mediaContext}
							</p>
							<p className="mt-3 text-[13.5px] text-[#2D3748]/90">
								<strong className="font-semibold">Best for:</strong> {tier.bestFor}
							</p>
							<ul className="mt-3 list-disc space-y-1 pl-5 text-[13.5px] leading-relaxed text-[#2D3748]/85">
								{tier.includes.map((it, idx) => (
									<li key={idx}>{it}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>

			{/* ─────────── 5. Who it's for / not for ─────────── */}
			<section
				id="who-for"
				aria-labelledby="who-for-heading"
				className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
			>
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Fit check
				</div>
				<h2
					id="who-for-heading"
					className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
				>
					Is {service.label} a fit for you{ctx}?
				</h2>
				<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
					Honesty on fit before pricing. We turn down ~30% of inbound audits
					because the timing, runway, or product situation doesn't match the
					service. Better to read this section than to discover the mismatch
					three months in.
				</p>
				<div className="mt-6 grid gap-4 md:grid-cols-2">
					<div className="rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-5">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Built for
						</div>
						<ul className="mt-3 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-[#2D3748]/90">
							{depth.whoFor.map((w, idx) => (
								<li key={idx}>{w}</li>
							))}
						</ul>
					</div>
					<div className="rounded-2xl border border-[#FFE4D6] bg-white p-5">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5A5A5A]">
							Not the right fit
						</div>
						<ul className="mt-3 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-[#5A5A5A]">
							{depth.whoNotFor.map((w, idx) => (
								<li key={idx}>{w}</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
