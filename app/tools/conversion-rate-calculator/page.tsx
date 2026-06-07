import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/conversion-rate-calculator";
export const metadata: Metadata = {
	title: "Conversion Rate Calculator + CR Lift Impact | Frameleads",
	description: "Calculate conversion rate and the CAC reduction equivalent of a 1% CR lift. Indian D2C PDP CR benchmarks.",
	alternates: { canonical: URL },
};

export default function ConversionRatePage() {
	return (
		<ToolChrome
			slug="conversion-rate-calculator"
			title="Conversion Rate Calculator"
			directAnswer="Conversion rate equals conversions divided by sessions. A 1% absolute CR lift on PDP is mathematically equivalent to ~8% CAC reduction at the same ad spend. Indian D2C beauty PDP CR cold paid: 1.5-4%; warm/retargeting: 4-8%. Top quartile: 6%+."
			tldr={[
				"CR = conversions ÷ sessions; segment by source.",
				"1% absolute CR lift ≈ 8% CAC reduction at same ad spend.",
				"Indian D2C PDP CR: 1.5-4% cold; 4-8% warm.",
			]}
			faqs={[
				{ question: "What's a 'good' D2C conversion rate?", answer: "Cold paid traffic: 1.5-4% PDP CR. Warm retargeting: 4-8%. Email/WhatsApp: 5-15%. Branded search: 6-12%. Segment by source — averaging is misleading." },
				{ question: "Why is CR optimization more leverage than CAC?", answer: "CR sits on the conversion funnel after ad spend; lifting CR doesn't change ad spend but changes outcomes. CAC reduction requires ad-side changes (creative, audience). CR is operationally simpler at scale." },
				{ question: "What lifts D2C CR fastest?", answer: "Page-load < 2.0s, above-fold trust strip, COD button visibility, payment-method icons, social proof in checkout. Each 0.5s LCP reduction = 5-10% CR lift." },
				{ question: "How do I A/B test CR?", answer: "Need 95% statistical significance: typically 5,000+ sessions per variant for D2C. VWO / Optimizely / Convert.com handle the math; don't eyeball significance." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
			]}
		>
			<ToolCalculator
				toolId="conversion-rate-calculator"
				inputs={[
					{ id: "sessions", label: "Monthly sessions", type: "number", default: 50000, min: 0, step: 1000 },
					{ id: "conversions", label: "Conversions", type: "number", default: 1400, min: 0, step: 10 },
					{ id: "aov", label: "AOV", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
					{ id: "currentCac", label: "Current CAC", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
					{ id: "crLift", label: "CR lift target (% absolute)", type: "number", default: 1, suffix: "%", min: 0, max: 100, step: 0.5 },
				]}
				outputs={[
					{ id: "currentCr", label: "Current CR", format: "percent", band: { good: 0.04, warning: 0.02, bad: 0.01, direction: "higher-better" } },
					{ id: "currentRevenue", label: "Current monthly revenue", format: "inr" },
					{ id: "newCr", label: "Lifted CR", format: "percent" },
					{ id: "newRevenue", label: "Revenue at lifted CR", format: "inr" },
					{ id: "revenueIncrease", label: "Monthly revenue lift", format: "inr" },
					{ id: "cacEquivalent", label: "CAC reduction equivalent", format: "percent", help: "Same ad spend, this CR lift = this CAC drop" },
				]}
				formula="CR = Conversions ÷ Sessions · 1% lift ≈ 1/(CR+1%) CAC reduction"
				howToUse={["Pull sessions + conversions from GA4 (last 28 days).", "Segment by source (cold paid, warm retargeting, organic) for accurate read.", "1% lift is realistic per CRO sprint; don't assume 5% jumps.", "Use the equivalent metric to justify CRO investment to CFO."]}
			/>
		</ToolChrome>
	);
}
