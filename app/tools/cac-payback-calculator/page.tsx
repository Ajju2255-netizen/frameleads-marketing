import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/cac-payback-calculator";
export const metadata: Metadata = {
	title: "CAC Payback Calculator — India 2026 | Frameleads",
	description: "Calculate months to recover CAC through gross-margin contribution. D2C target under 6 months; SaaS SMB under 18.",
	alternates: { canonical: URL },
};

export default function CacPaybackPage() {
	return (
		<ToolChrome
			slug="cac-payback-calculator"
			title="CAC Payback Calculator"
			directAnswer="CAC Payback equals fully-loaded CAC divided by monthly gross profit per customer. D2C target: under 6 months. SaaS SMB: under 18 months. Faster payback = faster reinvestment = exponential growth math; slow payback starves growth."
			tldr={[
				"CAC Payback = CAC ÷ (AOV × gross margin × monthly purchase frequency).",
				"D2C target: under 6 months. SaaS SMB: under 18.",
				"Below 12 months, you can scale spend aggressively.",
			]}
			faqs={[
				{ question: "Why does payback period matter more than CAC?", answer: "Payback directly answers 'how fast does my spend recycle?' Faster payback = faster reinvestment = exponential growth. CAC alone tells you nothing without LTV + payback context." },
				{ question: "What's a healthy SaaS payback?", answer: "Under 12 months for SMB SaaS; under 18 for mid-market; under 24 for Enterprise. Above 24 months, growth requires significant capital reserves." },
				{ question: "How does COD return cost affect payback?", answer: "Indian D2C with 18% COD RTO sees effective payback 7-12% slower than reported. Adjust by multiplying payback by (1 / (1 - COD% × RTO%))." },
				{ question: "Is contribution margin the same as gross margin?", answer: "No. Contribution margin includes variable costs beyond COGS — fulfillment, payment fees, refund cost. For honest payback, use gross margin (COGS-only). Contribution margin overstates payback speed." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
				{ href: "/tools/ltv-cac-ratio-calculator", label: "LTV/CAC Ratio Calculator" },
			]}
		>
			<ToolCalculator
				toolId="cac-payback-calculator"
				inputs={[
					{ id: "cac", label: "Fully-loaded CAC", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
					{ id: "aov", label: "AOV", type: "number", default: 999, prefix: "₹", min: 0, step: 50 },
					{ id: "margin", label: "Gross margin (%)", type: "number", default: 45, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "monthlyFreq", label: "Purchase frequency / month", type: "number", default: 0.6, min: 0, step: 0.1, help: "Annual frequency ÷ 12" },
				]}
				outputs={[
					{ id: "monthlyGrossProfit", label: "Monthly gross profit / customer", format: "inr" },
					{ id: "paybackMonths", label: "CAC Payback period", format: "months", band: { good: 6, warning: 12, bad: 18, direction: "lower-better" } },
				]}
				formula="Payback (months) = Fully-loaded CAC ÷ (AOV × Gross Margin × Monthly Purchase Frequency)"
				howToUse={["Use fully-loaded CAC, not media-only.", "Use gross margin (COGS-only), not contribution margin.", "Divide annual frequency by 12 to get monthly.", "Below 6 months: scale aggressively. 6-12: scale carefully. 12+: rethink unit economics."]}
			/>
		</ToolChrome>
	);
}
