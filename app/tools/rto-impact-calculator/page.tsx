import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/rto-impact-calculator";
export const metadata: Metadata = {
	title: "COD RTO Impact Calculator — Indian D2C 2026 | Frameleads",
	description: "Quantify the margin tax on Indian D2C COD orders from RTO returns. Each RTO costs 8-15% of AOV.",
	alternates: { canonical: URL },
};

export default function RtoImpactPage() {
	return (
		<ToolChrome
			slug="rto-impact-calculator"
			title="COD RTO Impact Calculator"
			directAnswer="Each Return-To-Origin (RTO) order costs 8-15% of order value (outbound shipping × 2 + payment fee + damaged-goods cost). Indian D2C COD RTO rates: 12-25% across categories. A brand with 18% RTO on 60% COD orders pays a 6% margin tax on every dispatch — destroying profitable cohorts."
			tldr={[
				"Each RTO costs 8-15% of AOV.",
				"Indian COD RTO: 12-25% (tier-1 lower, tier-2/3 higher).",
				"Tier-3 pin-codes can hit 50%+ RTO; ship prepaid-only.",
			]}
			faqs={[
				{ question: "Why does RTO destroy margin?", answer: "Outbound shipping (₹40-80) + return shipping (₹30-60) + payment failure fee (₹10-20) + damaged-goods 5-8% × AOV. Sum: 8-15% of AOV per RTO." },
				{ question: "How do I reduce RTO?", answer: "Address verification at checkout, OTP confirmation before dispatch, prepaid discount nudge, RTO-prediction by pin code, progressive trust-building (smaller first orders for new buyers)." },
				{ question: "Should I disable COD entirely?", answer: "Tier-1 cities yes for select categories. Tier-2/3 buyers strongly prefer COD; disabling kills conversion. Selective disable by pin code is the right move." },
				{ question: "Is prepaid discount worth it?", answer: "Yes. 5-10% prepaid discount converts 30-45% of COD orders to prepaid. The discount cost is less than the RTO margin tax it saves." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
			]}
		>
			<ToolCalculator
				toolId="rto-impact-calculator"
				inputs={[
					{ id: "monthlyOrders", label: "Monthly shipped orders", type: "number", default: 5500, min: 0, step: 100 },
					{ id: "aov", label: "AOV", type: "number", default: 999, prefix: "₹", min: 0, step: 50 },
					{ id: "codShare", label: "COD share (%)", type: "number", default: 60, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "rtoRate", label: "RTO rate on COD (%)", type: "number", default: 18, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "rtoCostPct", label: "RTO cost as % of AOV", type: "number", default: 12, suffix: "%", min: 0, max: 100, step: 1, help: "Shipping × 2 + fees + damage" },
				]}
				outputs={[
					{ id: "codOrders", label: "Monthly COD orders", format: "number" },
					{ id: "rtoOrders", label: "Monthly RTO orders", format: "number" },
					{ id: "rtoCostMonthly", label: "Monthly RTO cost", format: "inr" },
					{ id: "marginTax", label: "Margin tax % of revenue", format: "percent", band: { good: 0.02, warning: 0.05, bad: 0.10, direction: "lower-better" } },
					{ id: "annualRtoCost", label: "Annual RTO cost", format: "inr" },
					{ id: "effectiveCacUplift", label: "Effective CAC uplift", format: "percent", help: "How much CAC rises due to RTO drag" },
				]}
				formula="Margin tax = COD share × RTO rate × RTO-cost% · CAC uplift = 1/(1 − COD% × RTO%) − 1"
				howToUse={["Use shipped order count (after-checkout, before-RTO).", "RTO cost % conservative: 8-12% (shipping-heavy categories); 10-15% (heavy SKUs).", "Compare margin tax to CAC: 6% margin tax = 6% CAC efficiency loss.", "Tier-3 pin-code segmentation often surfaces 30-50% RTO concentrations to fix."]}
			/>
		</ToolChrome>
	);
}
