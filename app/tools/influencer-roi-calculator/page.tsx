import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/influencer-roi-calculator";
export const metadata: Metadata = {
	title: "Influencer Marketing ROI Calculator | Frameleads",
	description: "Project ROI on Indian influencer / UGC programs. Reach × engagement × conversion vs total program cost.",
	alternates: { canonical: URL },
};

export default function InfluencerROIPage() {
	return (
		<ToolChrome
			slug="influencer-roi-calculator"
			title="Influencer ROI Calculator"
			directAnswer="Influencer program ROI equals revenue (reach × engagement × conversion × AOV) divided by total cost (cash + product comp). Indian micro-influencer (50k-500k followers): typical ₹2-8k cash + ₹3k product, 1-3% engagement, 0.5-1.5% conversion. ROI commonly 3-8× for seeded micro programs."
			tldr={[
				"Indian micro-influencers: ₹2-8k cash + ₹3k product, 1-3% engagement, 0.5-1.5% conversion.",
				"Macro-influencers (1M+): ₹50k-5L cash, lower engagement, harder to attribute.",
				"Seeded micro programs: 3-8× ROI typical for D2C beauty + fashion.",
			]}
			faqs={[
				{ question: "What's a fair Indian influencer rate?", answer: "Nano (10-50k): ₹500-3k. Micro (50-500k): ₹2-8k cash + product. Macro (500k-1M): ₹15-50k. Mega (1M+): ₹50k-5L. Rates rise during festivals + categories with high commercial intent." },
				{ question: "How do I attribute revenue to influencers?", answer: "Unique discount codes per creator + UTM links + post-purchase 'how did you hear about us' question. Triangulate. Direct attribution understates by 30-50%." },
				{ question: "Should I run paid + organic mix?", answer: "Yes — whitelist top-performing organic posts as paid ads (Spark Ads / branded content). Often delivers 30-50% lower CPM than brand-owned ads." },
				{ question: "Are mega-influencers worth it?", answer: "Rarely for direct ROI. Mega programs work for brand-building + category awareness, not last-touch revenue. ROI math usually breaks below 0.5x direct." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/marketing-budget-calculator", label: "Marketing Budget Calculator" },
			]}
		>
			<ToolCalculator
				toolId="influencer-roi-calculator"
				inputs={[
					{ id: "creators", label: "Number of creators", type: "number", default: 50, min: 1, step: 1 },
					{ id: "cashPerCreator", label: "Cash payment / creator", type: "number", default: 4000, prefix: "₹", min: 0, step: 500 },
					{ id: "productCostPerCreator", label: "Product comp / creator", type: "number", default: 3000, prefix: "₹", min: 0, step: 500 },
					{ id: "avgReach", label: "Avg reach / creator", type: "number", default: 30000, min: 0, step: 1000 },
					{ id: "engagementRate", label: "Engagement rate (%)", type: "number", default: 2, suffix: "%", min: 0, max: 100, step: 0.5 },
					{ id: "conversionRate", label: "Conversion rate of engaged (%)", type: "number", default: 1, suffix: "%", min: 0, max: 100, step: 0.5 },
					{ id: "aov", label: "AOV", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
				]}
				outputs={[
					{ id: "totalCash", label: "Total cash spend", format: "inr" },
					{ id: "totalProductComp", label: "Total product comp", format: "inr" },
					{ id: "totalProgramCost", label: "Total program cost", format: "inr" },
					{ id: "totalReach", label: "Total reach", format: "number" },
					{ id: "totalRevenue", label: "Projected revenue", format: "inr" },
					{ id: "roi", label: "Program ROI", format: "ratio", band: { good: 4, warning: 2, bad: 1, direction: "higher-better" } },
					{ id: "cac", label: "Effective CAC", format: "inr" },
				]}
				formula="Revenue = Creators × Reach × Engagement% × Conversion% × AOV · ROI = Revenue ÷ Program Cost"
				howToUse={["50-100 micro-creators is the sweet spot for Indian D2C seeding programs.", "Track via unique discount codes per creator.", "Engagement varies by category — beauty 2-3%, fashion 1-2%, jewelry 0.5-1%.", "Post-program: keep top 20% creators as long-term partners."]}
			/>
		</ToolChrome>
	);
}
