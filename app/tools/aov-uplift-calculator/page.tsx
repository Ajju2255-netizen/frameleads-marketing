import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/aov-uplift-calculator";
export const metadata: Metadata = {
	title: "AOV Uplift Calculator — D2C Bundle / Cross-sell Impact | Frameleads",
	description: "Project AOV uplift from bundle / free-shipping threshold / cross-sell. India D2C beauty AOV ₹600-1,800.",
	alternates: { canonical: URL },
};

export default function AOVUpliftPage() {
	return (
		<ToolChrome
			slug="aov-uplift-calculator"
			title="AOV Uplift Calculator"
			directAnswer="A 20% AOV uplift improves both CAC payback and LTV proportionally with no media-cost change. The classic levers: bundles (3-product instead of 1), free-shipping threshold above natural AOV, post-add-to-cart cross-sell. Indian D2C beauty AOV: ₹600-1,800; ₹200-400 uplift typical via bundle + cross-sell."
			tldr={[
				"20% AOV uplift = 20% LTV uplift at same purchase frequency.",
				"Bundles outperform discounts on margin.",
				"Free-shipping threshold at AOV × 1.5 lifts AOV 15-25%.",
			]}
			faqs={[
				{ question: "Why is AOV more powerful than CAC reduction?", answer: "AOV is operational + design-controlled; CAC reduction depends on auction dynamics + creative. AOV lift requires no media change — purely funnel + bundle work. Mathematically same impact as CAC reduction at same percentage." },
				{ question: "What's a realistic bundle attach rate?", answer: "Indian D2C beauty: 25-45% of carts attach a bundle when offered. Fashion: 15-30%. Food/snacks: 30-55%. Test specific bundles vs single products." },
				{ question: "Does a free-shipping threshold reduce conversion?", answer: "Slight reduction in CR (2-5%) for visitors below threshold. AOV lift typically 3-5× the CR loss in absolute revenue. Net positive." },
				{ question: "Should I include post-purchase cross-sell?", answer: "Yes. 30-day post-purchase cross-sell flow lifts second-order AOV by 15-30% via complementary products." },
			]}
			relatedLinks={[
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
				{ href: "/tools/conversion-rate-calculator", label: "Conversion Rate Calculator" },
			]}
		>
			<ToolCalculator
				toolId="aov-uplift-calculator"
				inputs={[
					{ id: "currentAov", label: "Current AOV", type: "number", default: 999, prefix: "₹", min: 0, step: 50 },
					{ id: "monthlyOrders", label: "Monthly orders", type: "number", default: 5000, min: 0, step: 100 },
					{ id: "bundleAttachRate", label: "Bundle attach rate (%)", type: "number", default: 30, suffix: "%", min: 0, max: 100, step: 5 },
					{ id: "bundleUplift", label: "Bundle AOV uplift (%)", type: "number", default: 40, suffix: "%", min: 0, max: 200, step: 5, help: "vs single-product order" },
					{ id: "freeShipThreshold", label: "Free-shipping threshold AOV (%)", type: "number", default: 12, suffix: "%", min: 0, max: 100, step: 1, help: "% of orders that bump to threshold" },
				]}
				outputs={[
					{ id: "currentRevenue", label: "Current monthly revenue", format: "inr" },
					{ id: "newAov", label: "New blended AOV", format: "inr" },
					{ id: "newRevenue", label: "New monthly revenue", format: "inr" },
					{ id: "monthlyLift", label: "Monthly revenue lift", format: "inr" },
					{ id: "annualLift", label: "Annual revenue lift", format: "inr" },
					{ id: "aovLiftPct", label: "AOV uplift %", format: "percent", band: { good: 0.15, warning: 0.05, bad: 0.0, direction: "higher-better" } },
				]}
				formula="New AOV = (1 − attach) × AOV + attach × (AOV × bundle-uplift) × (1 + threshold-effect)"
				howToUse={["Bundle attach rate from your checkout data; 25-40% is typical when bundles are offered.", "Bundle uplift: how much MORE the bundle AOV is vs single product (40% common).", "Free-ship threshold: % of single-AOV orders that buy more to hit free-ship.", "Stack both for full uplift; segment by paid vs organic for accurate read."]}
			/>
		</ToolChrome>
	);
}
