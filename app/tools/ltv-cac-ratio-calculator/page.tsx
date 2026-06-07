import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/ltv-cac-ratio-calculator";
export const metadata: Metadata = {
	title: "LTV/CAC Ratio Calculator — India 2026 | Frameleads",
	description: "Calculate LTV/CAC ratio. Target 3+ for healthy unit economics. India D2C year 1 typically 1.5–3.5x.",
	alternates: { canonical: URL },
};

export default function LtvCacRatioPage() {
	return (
		<ToolChrome
			slug="ltv-cac-ratio-calculator"
			title="LTV/CAC Ratio Calculator"
			directAnswer="LTV/CAC ratio equals gross-margin LTV divided by fully-loaded CAC. Target ≥ 3 for healthy unit economics. Below 1: each customer loses money. 1–3: marginal. 3–5: healthy. 5+: usually under-investing in growth."
			tldr={[
				"LTV/CAC ≥ 3 is the healthy threshold; ≥ 5 in mature SaaS.",
				"Use Gross Margin LTV and fully-loaded CAC for honest calculation.",
				"India D2C year 1: 1.5–3.5x; year 3: 4x+.",
			]}
			faqs={[
				{ question: "Why is below-1 ratio a death zone?", answer: "Each customer loses money. Scale = bigger losses. Either fix LTV (retention, AOV) or fix CAC (creative, channels) before scaling further." },
				{ question: "What if my ratio is over 5?", answer: "Often means under-investing in growth — could deploy more capital into acquisition. Some categories (gaming, viral PLG) sustainably run 5+ but most should ramp spend." },
				{ question: "Why use gross-margin LTV?", answer: "Gross-revenue LTV inflates ratios 2-3×. Investors and CFOs require gross-margin LTV; using anything else breaks unit-economics decisions." },
				{ question: "Should I track this monthly?", answer: "Cohort-by-cohort monthly. Blended LTV/CAC hides regressions for 6+ months." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
				{ href: "/tools/cac-payback-calculator", label: "CAC Payback Calculator" },
			]}
		>
			<ToolCalculator
				toolId="ltv-cac-ratio-calculator"
				inputs={[
					{ id: "ltv", label: "Gross-Margin LTV", type: "number", default: 3253, prefix: "₹", min: 0, step: 100 },
					{ id: "cac", label: "Fully-loaded CAC", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
				]}
				outputs={[
					{ id: "ratio", label: "LTV/CAC Ratio", format: "ratio", band: { good: 3, warning: 1.5, bad: 1, direction: "higher-better" } },
					{ id: "cushion", label: "Margin cushion", format: "inr", help: "Gross margin per customer above CAC" },
				]}
				formula="LTV/CAC = Gross-Margin LTV ÷ Fully-loaded CAC"
				howToUse={["Get LTV from the LTV Calculator.", "Get CAC from the CAC Calculator.", "Below 1: stop scaling. 1-3: fix unit economics. 3-5: scale. 5+: ramp spend."]}
			/>
		</ToolChrome>
	);
}
