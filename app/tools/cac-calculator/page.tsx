import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;

const URL = "https://frameleads.com/tools/cac-calculator";

export const metadata: Metadata = {
	title: "CAC Calculator (Fully-Loaded) — India 2026 | Frameleads",
	description:
		"Calculate fully-loaded Customer Acquisition Cost — media + agency + tooling + creative + influencer divided by new customers. India-specific CAC bands included.",
	alternates: { canonical: URL },
};

export default function CacCalculatorPage() {
	return (
		<ToolChrome
			slug="cac-calculator"
			title="CAC Calculator"
			directAnswer="Fully-loaded Customer Acquisition Cost equals total acquisition cost (media + agency + tooling + creative + influencer) divided by new customers in the same period. Indian D2C beauty CAC bands sit between ₹350–₹1,200; B2B SaaS SMB ₹15,000–₹80,000. Add 7–12% on top for COD-return-adjusted CAC."
			tldr={[
				"Fully-loaded CAC = (media + agency + tooling + creative + influencer) ÷ new customers.",
				"Most founders underreport CAC by 25–35% by tracking media only.",
				"Pair with gross-margin LTV; LTV/CAC ≥ 3 is healthy.",
			]}
			faqs={[
				{
					question: "Why is fully-loaded CAC different from CPA?",
					answer: "CPA is platform-reported (Meta CPA, Google CPA) and excludes agency, tooling, creative production, and influencer cost. Fully-loaded CAC includes everything. CAC is typically 25–35% higher than CPA for honest accounting.",
				},
				{
					question: "Should I include reactivated lapsed customers?",
					answer: "No. Count only first-purchase customers in the period. Reactivated lapsed customers are retention, not new acquisition.",
				},
				{
					question: "What's a healthy CAC for Indian D2C beauty?",
					answer: "₹350–₹1,200 depending on AOV. Anything above 60% of AOV needs urgent attention. Track LTV/CAC alongside — LTV/CAC ≥ 2.5 by month 12 is the goal.",
				},
				{
					question: "How do I adjust for COD return cost?",
					answer: "If 40% of orders are COD with 18% return rate, multiply media-CAC by (1 / (1 − 0.4 × 0.18)) ≈ 1.072. Effective CAC is typically 7–12% higher than reported.",
				},
			]}
			relatedLinks={[
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
				{ href: "/tools/cac-payback-calculator", label: "CAC Payback Calculator" },
				{ href: "/tools/ltv-cac-ratio-calculator", label: "LTV/CAC Ratio Calculator" },
				{ href: "/tools/roas-calculator", label: "ROAS Calculator" },
			]}
		>
			<ToolCalculator
				toolId="cac-calculator"
				inputs={[
					{ id: "media", label: "Media spend (monthly)", type: "number", default: 600000, prefix: "₹", min: 0, step: 5000 },
					{ id: "agency", label: "Agency / consultant fees", type: "number", default: 100000, prefix: "₹", min: 0, step: 5000 },
					{ id: "tooling", label: "Tooling / software", type: "number", default: 40000, prefix: "₹", min: 0, step: 1000 },
					{ id: "creative", label: "Creative production", type: "number", default: 50000, prefix: "₹", min: 0, step: 1000 },
					{ id: "influencer", label: "Influencer / UGC payments", type: "number", default: 30000, prefix: "₹", min: 0, step: 1000 },
					{ id: "customers", label: "New customers acquired", type: "number", default: 700, min: 1, step: 1, help: "First-purchase only — exclude reactivated lapsed customers." },
					{ id: "codShare", label: "COD share (%)", type: "number", default: 40, suffix: "%", min: 0, max: 100, step: 1, help: "Indian D2C COD share. Set 0 for non-COD businesses." },
					{ id: "rtoRate", label: "RTO rate on COD (%)", type: "number", default: 18, suffix: "%", min: 0, max: 100, step: 1, help: "Return-to-origin rate on COD orders." },
				]}
				outputs={[
					{ id: "totalCost", label: "Total acquisition cost", format: "inr" },
					{ id: "rawCac", label: "Raw CAC (media-only)", format: "inr", help: "What most reports show" },
					{ id: "loadedCac", label: "Fully-loaded CAC", format: "inr", help: "What you should optimize" },
					{ id: "effectiveCac", label: "Effective CAC (COD-adjusted)", format: "inr", help: "After COD return cost", band: { good: 600, warning: 1200, bad: 2000, direction: "lower-better" } },
				]}
				formula="CAC = (Media + Agency + Tooling + Creative + Influencer) ÷ New Customers · Effective = CAC × (1 / (1 − COD% × RTO%))"
				howToUse={[
					"Enter monthly acquisition costs across all five categories.",
					"Use first-purchase customer count only (not reactivated lapsed).",
					"Set COD share + RTO rate for India-specific drag adjustment.",
					"Compare Effective CAC to your gross-margin LTV — target LTV/CAC ≥ 3.",
				]}
			/>
		</ToolChrome>
	);
}
