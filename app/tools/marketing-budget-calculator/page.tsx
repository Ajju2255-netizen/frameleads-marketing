import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/marketing-budget-calculator";
export const metadata: Metadata = {
	title: "Marketing Budget Calculator (% of Revenue) | Frameleads",
	description: "Calculate recommended marketing spend as % of revenue based on stage. Pre-PMF / post-PMF / scale benchmarks for Indian D2C and SaaS.",
	alternates: { canonical: URL },
};

export default function MarketingBudgetPage() {
	return (
		<ToolChrome
			slug="marketing-budget-calculator"
			title="Marketing Budget Calculator"
			directAnswer="Recommended marketing spend as % of revenue depends on stage. Pre-PMF: 25–60% revenue (acquisition-heavy). Post-PMF: 15–30%. Scale: 10–20%. SaaS averages 10–20% lower than D2C. The right number depends on growth target and runway."
			tldr={[
				"Pre-PMF: 25–60% of revenue.",
				"Post-PMF: 15–30%.",
				"Scale-stage: 10–20%.",
			]}
			faqs={[
				{ question: "Why does pre-PMF need more spend as % of revenue?", answer: "Pre-PMF revenue is small; absolute spend stays similar to post-PMF but as % of revenue is higher. The math reflects the discovery cost." },
				{ question: "Should I include all marketing or only ad spend?", answer: "All marketing — including team salaries, tooling, content, agencies, paid. % of revenue makes most sense as fully-loaded marketing spend, not just media." },
				{ query: "Are SaaS and D2C ratios different?", answer: "Yes. SaaS has higher gross margin (75%+), so % of revenue can be higher without breaking unit economics. D2C with 35-50% gross margin is more constrained." },
				{ question: "How does stage shift over time?", answer: "Pre-PMF lasts 12-24 months typically. Post-PMF transition signals: 30%+ organic growth, repeat-purchase signals (D2C) or NRR > 100% (SaaS). Scale stage: predictable acquisition + sustainable unit economics." },
			]}
			relatedLinks={[
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
				{ href: "/tools/burn-runway-calculator", label: "Burn Runway Calculator" },
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
			]}
		>
			<ToolCalculator
				toolId="marketing-budget-calculator"
				inputs={[
					{ id: "monthlyRevenue", label: "Monthly revenue", type: "number", default: 5000000, prefix: "₹", min: 0, step: 100000 },
					{
						id: "stage",
						label: "Business stage",
						type: "select",
						default: "post-pmf",
						options: [
							{ label: "Pre-PMF (testing)", value: "pre-pmf" },
							{ label: "Post-PMF (growing)", value: "post-pmf" },
							{ label: "Scale (predictable)", value: "scale" },
						],
					},
					{
						id: "businessType",
						label: "Business type",
						type: "select",
						default: "d2c",
						options: [
							{ label: "D2C", value: "d2c" },
							{ label: "B2B SaaS", value: "saas" },
							{ label: "B2B Services", value: "services" },
						],
					},
					{
						id: "growthTarget",
						label: "Growth target",
						type: "select",
						default: "moderate",
						options: [
							{ label: "Maintain (low growth)", value: "low" },
							{ label: "Moderate growth", value: "moderate" },
							{ label: "Aggressive (3x/year)", value: "aggressive" },
						],
					},
				]}
				outputs={[
					{ id: "recommendedPct", label: "Recommended marketing %", format: "percent" },
					{ id: "recommendedSpend", label: "Recommended monthly spend", format: "inr" },
					{ id: "lowEnd", label: "Floor (conservative)", format: "inr" },
					{ id: "highEnd", label: "Ceiling (aggressive)", format: "inr" },
				]}
				formula="Spend = Revenue × Stage% × Type-adjustment × Growth-adjustment"
				howToUse={["Pick your business stage honestly.", "Type adjusts for gross-margin reality.", "Growth target shifts within the stage band.", "Revisit quarterly as you transition between stages."]}
			/>
		</ToolChrome>
	);
}
