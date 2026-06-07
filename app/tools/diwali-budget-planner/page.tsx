import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/diwali-budget-planner";
export const metadata: Metadata = {
	title: "Diwali Budget Planner — Indian D2C 2026 | Frameleads",
	description: "Plan Diwali campaign budget across 5-week peak. Pre-Dussehra, Dhanteras, Diwali week, post-Eid recovery curve.",
	alternates: { canonical: URL },
};

export default function DiwaliBudgetPage() {
	return (
		<ToolChrome
			slug="diwali-budget-planner"
			title="Diwali Budget Planner"
			directAnswer="Diwali drives 15-25% of annual revenue for Indian D2C in a 5-week window. Plan budget: 20% pre-Dussehra (audience build), 35% Diwali week (peak conversion + Dhanteras), 30% sustaining mid-Diwali, 10% Eid recovery, 5% buffer. CPMs rise 50-80% during peak."
			tldr={[
				"Diwali = 15-25% of Indian D2C annual revenue.",
				"5-week window: Dussehra → Diwali → Bhai Dooj.",
				"CPMs rise 50-80% during peak — plan budget accordingly.",
			]}
			faqs={[
				{ question: "When should I start Diwali planning?", answer: "8-10 weeks before Diwali. Inventory locked by week -8, creative production by week -6, paid budget locked by week -4, audience builds week -8 to -2." },
				{ question: "How does Diwali compare to Black Friday for Indian D2C?", answer: "For Indian-only audiences, Diwali revenue is typically 1.5-2.5× Black Friday. For brands serving NRIs / global, both matter; allocate budget proportional to audience split." },
				{ question: "Should I discount aggressively?", answer: "Strategic discounting yes; aggressive no. Indian D2C buyers expect Diwali offers but over-discounting trains them to wait. Bundle offers + free gifts often outperform pure discount." },
				{ question: "What's a sustainable peak-spend?", answer: "1.5-2× normal monthly spend during Diwali week. Above 3×, audience saturates and CAC doubles." },
			]}
			relatedLinks={[
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
			]}
		>
			<ToolCalculator
				toolId="diwali-budget-planner"
				inputs={[
					{ id: "annualBudget", label: "Annual marketing budget", type: "number", default: 24000000, prefix: "₹", min: 0, step: 500000 },
					{ id: "diwaliShare", label: "% of annual to Diwali (5 weeks)", type: "number", default: 25, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "cpmInflation", label: "Expected CPM inflation (%)", type: "number", default: 60, suffix: "%", min: 0, max: 200, step: 5, help: "Indian Diwali Meta CPMs typically +50-80%" },
				]}
				outputs={[
					{ id: "diwaliBudget", label: "Total Diwali budget", format: "inr" },
					{ id: "preDussehra", label: "Pre-Dussehra (week -2)", format: "inr", help: "Audience build, low CPM" },
					{ id: "dussehraWeek", label: "Dussehra week", format: "inr" },
					{ id: "preDhanteras", label: "Pre-Dhanteras", format: "inr" },
					{ id: "diwaliWeek", label: "Diwali week (peak)", format: "inr" },
					{ id: "postDiwali", label: "Bhai Dooj + post-Diwali", format: "inr", help: "Retention spike" },
					{ id: "effectiveCpmRise", label: "Effective CPM during peak", format: "ratio", help: "Multiplier vs normal" },
				]}
				formula="Diwali = Annual × 25% (typical) split across 5 weeks: 10/20/20/35/15"
				howToUse={["Annual budget = paid media only.", "Adjust % based on category — gifting / fashion: 30%, tech / replenishment: 15%.", "Pre-build audience cheap; convert during peak; recover post.", "Track week-by-week and rebalance if CPM exceeds projection."]}
			/>
		</ToolChrome>
	);
}
