import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/seo-traffic-projector";
export const metadata: Metadata = {
	title: "SEO Traffic Projector | Frameleads",
	description: "Project monthly SEO traffic from KW universe × target rank × CTR by rank. Plan content investment against realistic outcomes.",
	alternates: { canonical: URL },
};

export default function SeoTrafficProjectorPage() {
	return (
		<ToolChrome
			slug="seo-traffic-projector"
			title="SEO Traffic Projector"
			directAnswer="Project monthly organic traffic = sum of (search volume × CTR-by-rank) across all targeted KWs. Top-3 ranks capture 40-65% of clicks; top-10 captures 80%; below-10 captures 20% combined. AIO compresses top-3 click share by 18-35% in 2026."
			tldr={[
				"Top-3 CTR: 25-30% (rank 1), 12-15% (rank 2), 8-10% (rank 3).",
				"AIO compresses top-3 by 18-35% on AIO-triggering queries.",
				"Realistic 12-month SEO program: target 60% of KW universe at top-10.",
			]}
			faqs={[
				{ question: "Why does CTR vary so much by rank?", answer: "Position 1 captures most clicks. Position 4-10 share what's left. Below 10, clicks fall off cliff. AIO addition compresses top-3 further by intercepting clicks." },
				{ question: "How accurate is search volume from tools?", answer: "Ahrefs/Semrush volumes are ±30% accurate. Use for relative prioritization, not absolute traffic forecasts." },
				{ question: "What rank should I target for new sites?", answer: "Top-10 is realistic for low-difficulty KWs (KD<30) within 4-9 months. Top-3 takes 9-18 months and requires DR 30+. Don't target top-3 on KD>50 without backlink budget." },
				{ question: "How do I account for AIO compression?", answer: "On AIO-triggering queries (how/what/why/best/compare), reduce projected CTR by 25-35% for top-3 ranks. AIO citation gets back ~50% of lost clicks." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/marketing-budget-calculator", label: "Marketing Budget Calculator" },
			]}
		>
			<ToolCalculator
				toolId="seo-traffic-projector"
				inputs={[
					{ id: "kwCount", label: "Targeted KW count", type: "number", default: 200, min: 1, step: 10 },
					{ id: "avgVolume", label: "Avg monthly search volume / KW", type: "number", default: 500, min: 0, step: 50 },
					{
						id: "targetRank",
						label: "Target rank position",
						type: "select",
						default: "top-10",
						options: [
							{ label: "#1 (best case)", value: "1" },
							{ label: "Top-3", value: "top-3" },
							{ label: "Top-10", value: "top-10" },
							{ label: "Top-20", value: "top-20" },
						],
					},
					{ id: "rankShare", label: "% of KWs achieving target rank", type: "number", default: 60, suffix: "%", min: 0, max: 100, step: 5 },
					{ id: "aioImpact", label: "AIO click compression (%)", type: "number", default: 20, suffix: "%", min: 0, max: 100, step: 5, help: "% of top-3 clicks lost to AIO" },
					{ id: "leadConversion", label: "Visitor → lead conversion (%)", type: "number", default: 2, suffix: "%", min: 0, max: 100, step: 0.5 },
				]}
				outputs={[
					{ id: "totalVolume", label: "Total addressable volume / month", format: "number" },
					{ id: "avgCtr", label: "Avg CTR (rank-weighted)", format: "percent" },
					{ id: "projectedTraffic", label: "Projected monthly traffic", format: "number" },
					{ id: "projectedLeads", label: "Projected monthly leads", format: "number" },
				]}
				formula="Traffic = KW count × Volume × Rank-share × CTR-by-rank × (1 − AIO compression)"
				howToUse={["Build KW list from Ahrefs / Semrush.", "Avg volume from tool data; ignore zero-volume tail.", "Realistic rank-share: 60% top-10 in year 1, 80% in year 2.", "AIO compression: 20% conservative; some queries 40%."]}
			/>
		</ToolChrome>
	);
}
