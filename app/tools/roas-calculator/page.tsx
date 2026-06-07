import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/roas-calculator";
export const metadata: Metadata = {
	title: "ROAS Calculator + Break-even Threshold — India 2026 | Frameleads",
	description: "Calculate ROAS, break-even ROAS for your gross margin, and the gap between platform-reported and click-only ROAS.",
	alternates: { canonical: URL },
};

export default function RoasCalculatorPage() {
	return (
		<ToolChrome
			slug="roas-calculator"
			title="ROAS Calculator"
			directAnswer="ROAS equals revenue divided by ad spend. Break-even ROAS = 1 ÷ gross margin. 60% margin → 1.67x break-even; 40% → 2.5x; 30% → 3.33x. Below break-even, every sale loses money before considering CAC payback. Strip view-through credit for honest reporting."
			tldr={[
				"ROAS = revenue ÷ ad spend.",
				"Break-even ROAS = 1 ÷ gross margin %.",
				"Platform-reported ROAS over-states by 25–40% via view-through credit.",
			]}
			faqs={[
				{ question: "Why is break-even ROAS not always 1?", answer: "ROAS of 1 means revenue equals spend — but the goods + delivery cost money. Break-even = revenue covers COGS too. At 40% gross margin, you need 2.5x ROAS to break even on COGS. CAC payback layers on top of that." },
				{ question: "How do I strip view-through credit?", answer: "In Meta Ads Manager: switch attribution window to '7-day click' only (no view). In Google: data-driven attribution defaults to multi-touch which can over-credit. Compare platform numbers to GA4 (server-side) for honest ROAS." },
				{ question: "What's a healthy D2C ROAS?", answer: "Indian D2C beauty: 1.8–4.5x typical. Fashion: 1.5–3.5x. Subscription (over LTV): 2.5–6x. The right target depends on your gross margin." },
				{ question: "Should I optimize for ROAS or CAC?", answer: "CAC. ROAS is a channel-efficiency metric; CAC is a unit-economics metric. Use ROAS for in-channel optimization; CAC for business decisions." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
			]}
		>
			<ToolCalculator
				toolId="roas-calculator"
				inputs={[
					{ id: "revenue", label: "Revenue from ads", type: "number", default: 1200000, prefix: "₹", min: 0, step: 10000 },
					{ id: "spend", label: "Ad spend", type: "number", default: 400000, prefix: "₹", min: 0, step: 5000 },
					{ id: "margin", label: "Gross margin (%)", type: "number", default: 60, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "vtcShare", label: "Estimated view-through inflation (%)", type: "number", default: 30, suffix: "%", min: 0, max: 100, step: 5, help: "Meta default ≈ 30% inflation; Google ≈ 20%" },
				]}
				outputs={[
					{ id: "roas", label: "Reported ROAS", format: "ratio" },
					{ id: "clickOnlyRoas", label: "Click-only ROAS", format: "ratio", help: "VTC stripped" },
					{ id: "breakeven", label: "Break-even ROAS", format: "ratio", help: "1 ÷ gross margin" },
					{ id: "verdict", label: "Margin contribution / ad ₹", format: "inr", band: { good: 1, warning: 0, bad: -1, direction: "higher-better" } },
				]}
				formula="ROAS = Revenue ÷ Ad Spend · Break-even ROAS = 1 ÷ Gross Margin · Click-only = Reported × (1 − VTC%)"
				howToUse={["Pull revenue + spend from your platform.", "Estimate VTC inflation: Meta ~30%, Google ~20%.", "Compare click-only ROAS against break-even at your gross margin.", "Margin contribution / ad ₹ above ₹1 means each ad rupee returns >₹1 in margin."]}
			/>
		</ToolChrome>
	);
}
