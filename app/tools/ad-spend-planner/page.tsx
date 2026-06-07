import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/ad-spend-planner";
export const metadata: Metadata = {
	title: "Ad Spend Planner — India 2026 | Frameleads",
	description: "Plan monthly ad spend backwards from a revenue target. Inputs: target revenue, target CAC, gross margin. Output: required spend.",
	alternates: { canonical: URL },
};

export default function AdSpendPlannerPage() {
	return (
		<ToolChrome
			slug="ad-spend-planner"
			title="Ad Spend Planner"
			directAnswer="Plan monthly ad spend by working backwards from a revenue target. Required spend = (target revenue ÷ AOV) × target CAC. The plan compares required spend against your gross-margin envelope to surface whether the target is sustainable."
			tldr={[
				"Required spend = (target revenue ÷ AOV) × target CAC.",
				"Sustainable spend ≤ revenue × gross margin.",
				"Most Indian D2C plans break at the AOV × CAC math, not at channel availability.",
			]}
			faqs={[
				{ question: "What if required spend exceeds my gross margin envelope?", answer: "Either lower the revenue target, or lower CAC (creative + funnel work), or raise AOV (bundles, upsells). Without one of those, the plan is unsustainable." },
				{ question: "How do I know my target CAC is realistic?", answer: "Pull historical CAC by channel from the last 90 days. Set target = current × 0.85 if expecting improvement, current × 1.10 if expecting CPM inflation. Don't assume best-case." },
				{ question: "Should I plan paid + organic together?", answer: "No. Plan paid by paid CAC; organic compounds separately. Blended planning hides paid-channel weakness." },
				{ question: "How does seasonality affect this?", answer: "Indian Diwali week CPMs rise 50–80%; plan 1.5x normal spend for same impressions. Off-season (Jan-Mar) often has 20-30% lower CPMs." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/marketing-budget-calculator", label: "Marketing Budget Calculator" },
				{ href: "/tools/burn-runway-calculator", label: "Burn Runway Calculator" },
			]}
		>
			<ToolCalculator
				toolId="ad-spend-planner"
				inputs={[
					{ id: "targetRev", label: "Monthly revenue target", type: "number", default: 5000000, prefix: "₹", min: 0, step: 100000 },
					{ id: "aov", label: "AOV", type: "number", default: 1200, prefix: "₹", min: 1, step: 50 },
					{ id: "targetCac", label: "Target CAC (paid)", type: "number", default: 800, prefix: "₹", min: 0, step: 50 },
					{ id: "margin", label: "Gross margin (%)", type: "number", default: 50, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "organicShare", label: "Expected organic revenue share (%)", type: "number", default: 25, suffix: "%", min: 0, max: 100, step: 5, help: "Organic doesn't need ad spend" },
				]}
				outputs={[
					{ id: "paidRev", label: "Paid revenue needed", format: "inr" },
					{ id: "newCustomers", label: "New customers needed", format: "number" },
					{ id: "requiredSpend", label: "Required ad spend", format: "inr" },
					{ id: "spendShare", label: "Spend as % of revenue", format: "percent", band: { good: 0.20, warning: 0.40, bad: 0.60, direction: "lower-better" } },
					{ id: "marginAfterAds", label: "Margin remaining after ads", format: "inr", band: { good: 100000, warning: 0, bad: -100000, direction: "higher-better" } },
				]}
				formula="Required Spend = (Paid Revenue ÷ AOV) × Target CAC · Sustainability = Margin − Required Spend"
				howToUse={["Set realistic revenue + CAC + AOV based on last 90 days.", "Subtract organic share to focus on paid-only math.", "If margin remaining is negative, target is unsustainable — adjust before launch.", "Plan monthly; revisit quarterly as CPM environment shifts."]}
			/>
		</ToolChrome>
	);
}
