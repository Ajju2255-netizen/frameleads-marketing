import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/ltv-calculator";
export const metadata: Metadata = {
	title: "LTV Calculator (Gross Margin) — India 2026 | Frameleads",
	description: "Calculate Gross Margin Lifetime Value — AOV × purchase frequency × lifespan × gross margin. India D2C beauty bands ₹1,500–₹6,000.",
	alternates: { canonical: URL },
};

export default function LtvCalculatorPage() {
	return (
		<ToolChrome
			slug="ltv-calculator"
			title="LTV Calculator"
			directAnswer="Gross-Margin LTV equals AOV multiplied by purchase frequency × customer lifespan × gross margin %. Indian D2C beauty Gross Margin LTV bands sit between ₹1,500–₹6,000; subscription D2C reaches ₹3,000–₹15,000. Use Gross Margin LTV (not gross-revenue) when discussing acquisition spend with a CFO."
			tldr={[
				"Gross-Margin LTV = AOV × purchase frequency × lifespan × gross margin %.",
				"Pair with CAC; LTV/CAC ≥ 3 is the healthy threshold.",
				"Don't use gross-revenue LTV — it inflates 2-3× over honest gross-margin LTV.",
			]}
			faqs={[
				{ question: "Why use gross-margin LTV instead of gross-revenue LTV?", answer: "Gross-revenue LTV ignores the cost to deliver the product. The number you'll spend acquiring customers comes from gross profit, not revenue. Using gross-revenue LTV inflates LTV/CAC 2-3× and breaks unit-economics decisions." },
				{ question: "What's a typical lifespan for Indian D2C beauty?", answer: "1.5–2.5 years for repeat-purchase categories. Subscription D2C reaches 3–5 years for healthy retention. Cohort analysis is the best way to verify." },
				{ question: "Should I include refund costs?", answer: "Yes — subtract refund costs from revenue when calculating AOV-net-of-refunds. Indian D2C refund rates of 5–12% are common." },
				{ question: "How do I forecast lifespan if I'm pre-PMF?", answer: "Use cohort retention curves at 90 days as the leading indicator. If 30%+ of customers repeat at 90 days, lifespan typically lands at 2+ years. Below 15% repeat at 90 days, lifespan is structurally short." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ltv-cac-ratio-calculator", label: "LTV/CAC Ratio Calculator" },
				{ href: "/tools/cac-payback-calculator", label: "CAC Payback Calculator" },
				{ href: "/tools/email-list-value-calculator", label: "Email List Value Calculator" },
			]}
		>
			<ToolCalculator
				toolId="ltv-calculator"
				inputs={[
					{ id: "aov", label: "Average Order Value", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
					{ id: "frequency", label: "Purchase frequency / year", type: "number", default: 3.4, min: 0, step: 0.1, help: "Total orders ÷ unique customers per year" },
					{ id: "lifespan", label: "Customer lifespan (years)", type: "number", default: 2.1, min: 0, step: 0.1 },
					{ id: "margin", label: "Gross margin (%)", type: "number", default: 38, suffix: "%", min: 0, max: 100, step: 1 },
				]}
				outputs={[
					{ id: "grossRevenue", label: "Gross-revenue LTV (don't use)", format: "inr", help: "Inflates the picture" },
					{ id: "grossMarginLtv", label: "Gross-margin LTV (use this)", format: "inr", band: { good: 3000, warning: 1500, bad: 800, direction: "higher-better" } },
				]}
				formula="Gross-Margin LTV = AOV × Purchase Frequency × Customer Lifespan × Gross Margin %"
				howToUse={[
					"AOV: net of refunds + COD adjustments.",
					"Purchase frequency: orders ÷ unique customers per year.",
					"Lifespan: how long the average customer stays active (cohort-derived).",
					"Gross margin: revenue minus COGS, divided by revenue.",
				]}
			/>
		</ToolChrome>
	);
}
