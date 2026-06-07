import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/burn-runway-calculator";
export const metadata: Metadata = {
	title: "Burn & Runway Calculator | Frameleads",
	description: "Calculate runway months given current cash, monthly revenue, monthly burn. Marketing-spend impact on runway visibility.",
	alternates: { canonical: URL },
};

export default function BurnRunwayPage() {
	return (
		<ToolChrome
			slug="burn-runway-calculator"
			title="Burn & Runway Calculator"
			directAnswer="Runway = Cash ÷ Net Monthly Burn. Net burn = Monthly Operating Cost − Monthly Gross Profit. Healthy SaaS targets 18+ months runway. Below 12 months: focus burn reduction or fundraising. Marketing spend changes runway directly — every ₹1L/month change shifts runway by months."
			tldr={[
				"Runway = Cash ÷ Net Monthly Burn.",
				"Net burn = expenses minus gross profit.",
				"18+ months: healthy. 12-18: monitor. Below 12: act.",
			]}
			faqs={[
				{ question: "Should I use gross or net burn?", answer: "Net burn — operating expenses minus gross profit (revenue × gross margin). Gross burn ignores revenue offset and overstates runway need." },
				{ question: "How does marketing spend affect runway?", answer: "Marketing is a major operating expense. ₹1L/month increase in marketing reduces runway by ~Cash÷₹1L months. Plan marketing as % of cash, not just % of revenue." },
				{ question: "When is short runway acceptable?", answer: "Pre-Series A startups commonly run 6-12 month runway expecting next round. Below 6 months: close that round or stop spending. Above 24 months: possibly under-investing in growth." },
				{ question: "Should I include reserved cash?", answer: "Yes if reserved for known liabilities (taxes, vendor payables). Don't include if reserved 'just in case' — that's psychological reserve, not actual liability." },
			]}
			relatedLinks={[
				{ href: "/tools/marketing-budget-calculator", label: "Marketing Budget Calculator" },
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
			]}
		>
			<ToolCalculator
				toolId="burn-runway-calculator"
				inputs={[
					{ id: "cash", label: "Current cash", type: "number", default: 50000000, prefix: "₹", min: 0, step: 100000 },
					{ id: "monthlyRev", label: "Monthly revenue", type: "number", default: 3000000, prefix: "₹", min: 0, step: 100000 },
					{ id: "margin", label: "Gross margin (%)", type: "number", default: 50, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "opex", label: "Monthly operating cost", type: "number", default: 4000000, prefix: "₹", min: 0, step: 100000, help: "Salaries + tooling + ops + marketing" },
					{ id: "marketingShare", label: "Marketing % of opex", type: "number", default: 25, suffix: "%", min: 0, max: 100, step: 1 },
				]}
				outputs={[
					{ id: "grossProfit", label: "Monthly gross profit", format: "inr" },
					{ id: "netBurn", label: "Net monthly burn", format: "inr" },
					{ id: "runwayMonths", label: "Runway", format: "months", band: { good: 18, warning: 12, bad: 6, direction: "higher-better" } },
					{ id: "marketingMonthly", label: "Current monthly marketing", format: "inr" },
					{ id: "runwayMinusMarketing", label: "Runway if marketing = 0", format: "months", help: "Theoretical floor" },
				]}
				formula="Net Burn = Opex − (Revenue × Gross Margin) · Runway = Cash ÷ Net Burn"
				howToUse={["Use net burn (after gross profit), not gross burn.", "Marketing-zero runway shows the floor — useful for crisis planning.", "Below 12 months: cut burn or close funding round.", "Above 24 months: consider deploying more into growth."]}
			/>
		</ToolChrome>
	);
}
