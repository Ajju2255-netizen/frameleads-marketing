import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Marketing calculators — free interactive tools | Frameleads Resources",
	description:
		"19 free interactive calculators for marketing operators: CAC, LTV, ROAS, ROI, channel mix, marketing budget, CAC payback, AOV uplift, burn / runway, RTO impact, SaaS pipeline, SEO traffic, WhatsApp ROI, influencer ROI, email-list value, and more.",
	alternates: { canonical: "https://frameleads.com/resources/calculators" },
};

const CALCULATORS = [
	{ slug: "cac-calculator", label: "CAC Calculator", description: "Calculate blended + paid-only Customer Acquisition Cost." },
	{ slug: "ltv-calculator", label: "LTV Calculator", description: "Calculate Customer Lifetime Value with retention modelling." },
	{ slug: "ltv-cac-ratio-calculator", label: "LTV/CAC Ratio", description: "Healthy unit economics target: LTV/CAC ≥ 3." },
	{ slug: "roas-calculator", label: "ROAS Calculator", description: "Return on Ad Spend across channels — gross + blended." },
	{ slug: "roi-calculator", label: "ROI Calculator", description: "Return on Investment for marketing programs." },
	{ slug: "cac-payback-calculator", label: "CAC Payback", description: "Months to recoup CAC — critical for SaaS / subscription." },
	{ slug: "channel-mix-calculator", label: "Channel Mix Calculator", description: "Optimal channel allocation against marginal CAC." },
	{ slug: "marketing-budget-calculator", label: "Marketing Budget Calculator", description: "Annual budget against revenue + growth targets." },
	{ slug: "ad-spend-planner", label: "Ad Spend Planner", description: "Plan monthly ad spend against channel attribution windows." },
	{ slug: "aov-uplift-calculator", label: "AOV Uplift Calculator", description: "Model impact of AOV uplift on CAC ratios." },
	{ slug: "burn-runway-calculator", label: "Burn / Runway Calculator", description: "Burn-rate, runway, and capital efficiency math." },
	{ slug: "rto-impact-calculator", label: "RTO Impact Calculator", description: "Return-to-origin impact on D2C unit economics." },
	{ slug: "conversion-rate-calculator", label: "Conversion Rate Calculator", description: "Calculate + compare conversion rates with confidence intervals." },
	{ slug: "saas-pipeline-projector", label: "SaaS Pipeline Projector", description: "Project SaaS pipeline + ARR at different acquisition velocities." },
	{ slug: "seo-traffic-projector", label: "SEO Traffic Projector", description: "Project organic traffic at different investment levels." },
	{ slug: "whatsapp-roi-calculator", label: "WhatsApp ROI Calculator", description: "ROI on Click-to-WhatsApp campaigns + message templates." },
	{ slug: "email-list-value-calculator", label: "Email List Value Calculator", description: "Value your email list against revenue-per-subscriber." },
	{ slug: "influencer-roi-calculator", label: "Influencer ROI Calculator", description: "ROI on influencer / creator campaigns with paid amplification." },
	{ slug: "diwali-budget-planner", label: "Diwali Budget Planner", description: "Festive Q3/Q4 budget planning for Indian commerce." },
];

export default function Page() {
	const groups: ResourceGroup[] = [
		{
			heading: "Browse all calculators",
			items: [
				{
					label: "Full calculator index",
					href: "/tools",
					count: 19,
					description: "Free, no-signup-required interactive calculators for marketing operators.",
				},
			],
		},
		{
			heading: "All 19 calculators",
			description: "Each tool runs in-browser, no data leaves your machine, no signup required.",
			items: CALCULATORS.map((c) => ({
				label: c.label,
				href: `/tools/${c.slug}`,
				description: c.description,
			})),
		},
	];

	return (
		<ResourcesHub
			slug="resources/calculators"
			title="Calculators & tools"
			dek="19 free interactive marketing calculators — CAC, LTV, ROAS, ROI, channel mix, budget planning, retention math, RTO impact, festive planners, WhatsApp ROI, and more."
			tldr={[
				`19 calculators across acquisition, retention, channel mix, and budget planning.`,
				`In-browser; no signup, no data collection.`,
				`Each tool ships with interpretation + benchmark bands per category.`,
				`Designed for operators making real budget decisions, not for lead capture.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
