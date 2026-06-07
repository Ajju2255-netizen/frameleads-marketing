import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/saas-pipeline-projector";
export const metadata: Metadata = {
	title: "SaaS Pipeline Projector — Indian B2B 2026 | Frameleads",
	description: "Project Indian B2B SaaS pipeline: MQL volume × MQL→SQL × SQL→close × ACV. Healthy MQL→SQL: 30-60%. SQL→close: 15-35%.",
	alternates: { canonical: URL },
};

export default function SaaSPipelineProjectorPage() {
	return (
		<ToolChrome
			slug="saas-pipeline-projector"
			title="SaaS Pipeline Projector"
			directAnswer="B2B SaaS pipeline = MQL volume × MQL→SQL conversion × SQL→close conversion × ACV. Healthy Indian B2B SaaS conversions: MQL→SQL 30-60%, SQL→close 15-35%, sales cycle 60-180 days. Series A SaaS typically need 30-100 SQLs/month for sustainable growth."
			tldr={[
				"Pipeline = MQL × MQL→SQL × SQL→close × ACV.",
				"Indian SaaS Series A: 30-100 SQLs/month healthy.",
				"Sales cycle 60-180 days — plan revenue lag accordingly.",
			]}
			faqs={[
				{ question: "What's a healthy MQL→SQL conversion?", answer: "30-60% for B2B SaaS. Below 30%: MQL definition too lenient or sales over-qualifying. Above 60%: probably under-counting MQLs or sales pulling everyone into SQL." },
				{ question: "What's the typical sales cycle?", answer: "Indian SMB SaaS: 30-60 days. Mid-market: 60-120 days. Enterprise: 120-360 days. Plan pipeline-to-revenue lag based on cycle." },
				{ question: "Should I track MQL or SQL volume?", answer: "Both. MQL volume measures top-funnel; SQL volume is the most accurate predictor of revenue. Track ratio MQL→SQL to ensure quality." },
				{ question: "What's the ACV threshold for SDRs?", answer: "₹50k+ ACV. Below that, SDR cost (~₹6L/year fully-loaded) usually exceeds SDR-attributable revenue." },
			]}
			relatedLinks={[
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
			]}
		>
			<ToolCalculator
				toolId="saas-pipeline-projector"
				inputs={[
					{ id: "mqlsPerMonth", label: "MQLs / month", type: "number", default: 200, min: 0, step: 10 },
					{ id: "mqlToSql", label: "MQL → SQL conversion (%)", type: "number", default: 40, suffix: "%", min: 0, max: 100, step: 5 },
					{ id: "sqlToClose", label: "SQL → close (%)", type: "number", default: 25, suffix: "%", min: 0, max: 100, step: 5 },
					{ id: "avgAcv", label: "Average ACV", type: "number", default: 200000, prefix: "₹", min: 0, step: 10000 },
					{ id: "salesCycleDays", label: "Sales cycle (days)", type: "number", default: 90, min: 0, step: 15 },
				]}
				outputs={[
					{ id: "sqlsPerMonth", label: "SQLs / month", format: "number" },
					{ id: "closesPerMonth", label: "Closed deals / month", format: "number" },
					{ id: "monthlyARR", label: "ARR added / month", format: "inr" },
					{ id: "annualARR", label: "Annual ARR run-rate", format: "inr" },
					{ id: "pipelineCoverage", label: "Required pipeline coverage", format: "ratio", help: "Pipeline / target close × 1.5x typical" },
					{ id: "revenueLagWeeks", label: "Revenue lag from MQL", format: "number", help: "weeks" },
				]}
				formula="ARR = MQLs × MQL→SQL × SQL→close × ACV"
				howToUse={["MQL definition consistent across team — match-quality + behavior + intent.", "MQL→SQL: 30-60% healthy. SQL→close: 15-35% healthy.", "Sales cycle: median, not average — outliers distort.", "Layer pipeline coverage 1.5-2x target to cover variance."]}
			/>
		</ToolChrome>
	);
}
