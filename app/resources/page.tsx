import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { services, industries, geosAll } from "@/lib/data";
import { glossary } from "@/lib/data/glossary";
import { questions } from "@/lib/data/questions";
import { comparisons } from "@/lib/data/comparisons";
import { subServices } from "@/lib/data/sub-services";
import { BLOG_POSTS } from "@/lib/data/blogs";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Resources — guides, glossary, calculators, comparisons | Frameleads",
	description:
		"The full Frameleads operator library: long-form guides across every service, industry, and location; 87-entry glossary; 50 comparisons; 19 calculators; 2,000+ question hubs; data reports. In-depth, advanced, SEO/AIO/GEO/LLM-optimised.",
	alternates: { canonical: "https://frameleads.com/resources" },
	openGraph: {
		title: "Resources — the full Frameleads operator library",
		description:
			"Long-form guides across every service × industry × location. Glossary, comparisons, calculators, question hubs, data reports. Built for operators, not for SEO churn.",
		url: "https://frameleads.com/resources",
		type: "website",
	},
};

export default function Page() {
	const servicesCount = services.length;
	const industriesCount = industries.length;
	const geosCount = geosAll.length;

	const groups: ResourceGroup[] = [
		{
			heading: "Long-form guides",
			description:
				"Educational, in-depth guides — distinct from the commercial hubs. Built for operators evaluating a discipline / industry / market before engaging.",
			items: [
				{
					label: "All guides",
					href: "/resources/guides",
					count: servicesCount + industriesCount + geosCount + servicesCount * industriesCount + servicesCount * geosCount + industriesCount * geosCount,
					description: "Service guides, industry guides, location guides, plus every combination — programmatic but taxonomy-grounded.",
				},
				{
					label: "Service guides",
					href: "/resources/guides",
					count: servicesCount,
					description: "Long-form guides for every Frameleads service: SEO, Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, Performance Marketing, and more.",
				},
				{
					label: "Industry guides",
					href: "/resources/guides",
					count: industriesCount,
					description: "Long-form marketing playbooks for 31 industries: real estate, healthcare, SaaS, D2C, finance, hospitality, edtech, fintech, and more.",
				},
				{
					label: "Location guides",
					href: "/resources/guides",
					count: geosCount,
					description: "Digital marketing guides for 128 geographies — every Indian metro + global priority markets. Includes compliance + channel mix.",
				},
				{
					label: "Service × Industry combinations",
					href: "/resources/guides",
					count: servicesCount * industriesCount,
					description: "Cross-cell guides: how a specific service adapts to a specific industry. Channel mix shifts, CAC bands, common mistakes.",
				},
				{
					label: "Service × Geo combinations",
					href: "/resources/guides",
					count: servicesCount * geosCount,
					description: "Cross-cell guides: how a service adapts to a specific geography. Buyer mix, compliance, language overlays.",
				},
				{
					label: "Industry × Geo combinations",
					href: "/resources/guides",
					count: industriesCount * geosCount,
					description: "Cross-cell guides: how an industry's marketing playbook adapts to a specific geography.",
				},
			],
		},
		{
			heading: "Glossary",
			description: "Plain-English definitions of marketing terms. Industry-adapted variants link out from each entry.",
			items: [
				{
					label: "Glossary index",
					href: "/glossary",
					count: glossary.length,
					description: "87 marketing terms — CAC, ROAS, LTV, MQL/SQL, attribution, and more. Each entry includes formula, examples, common mistakes.",
				},
				{
					label: "CAC — the deep dive",
					href: "/glossary/cac",
					description: "Customer Acquisition Cost — formula, blended vs paid-only, target bands per category, common attribution mistakes.",
				},
				{
					label: "ROAS — the deep dive",
					href: "/glossary/roas",
					description: "Return on Ad Spend — formula, attribution windows, channel-specific benchmarks, when ROAS misleads.",
				},
				{
					label: "Industry × Glossary cells",
					href: "/glossary",
					count: industriesCount * glossary.length,
					description: "Every glossary term reframed for every industry's unit economics. Programmatic Tier 15 surface.",
				},
			],
		},
		{
			heading: "Comparisons",
			description: "Honest side-by-side comparisons of tools, channels, and approaches.",
			items: [
				{
					label: "All comparisons",
					href: "/vs",
					count: comparisons.length,
					description: "50+ comparisons across platforms, tools, and approaches — Google vs Meta, Webflow vs WordPress, HubSpot vs Salesforce, and more.",
				},
			],
		},
		{
			heading: "Calculators & tools",
			description: "Free interactive tools for operators — CAC, LTV, ROAS, ROI, channel mix, budget planning, retention math.",
			items: [
				{ label: "All calculators", href: "/tools", count: 19, description: "19 free interactive calculators for marketing operators." },
				{ label: "CAC calculator", href: "/tools/cac-calculator", description: "Calculate customer acquisition cost (blended + paid-only)." },
				{ label: "LTV calculator", href: "/tools/ltv-calculator", description: "Calculate customer lifetime value." },
				{ label: "ROAS calculator", href: "/tools/roas-calculator", description: "Calculate return on ad spend across channels." },
				{ label: "Channel mix calculator", href: "/tools/channel-mix-calculator", description: "Optimise your channel-mix allocation." },
				{ label: "Marketing budget calculator", href: "/tools/marketing-budget-calculator", description: "Set your annual marketing budget against revenue + growth targets." },
				{ label: "SaaS pipeline projector", href: "/tools/saas-pipeline-projector", description: "Project SaaS pipeline + ARR at different acquisition velocities." },
				{ label: "SEO traffic projector", href: "/tools/seo-traffic-projector", description: "Project organic traffic + cost-of-traffic at different SEO investment levels." },
				{ label: "WhatsApp ROI calculator", href: "/tools/whatsapp-roi-calculator", description: "Calculate ROI on Click-to-WhatsApp campaigns." },
			],
		},
		{
			heading: "Question hubs",
			description: "Programmatic question-style content across every industry + geo + topic.",
			items: [
				{ label: "What is — definitions", href: "/what-is", count: 203, description: "203 'what is X?' definitions across marketing terms, channels, and concepts." },
				{ label: "How to — process guides", href: "/how-to", count: 495, description: "495 step-by-step 'how to' guides." },
				{ label: "How much — pricing answers", href: "/how-much", count: 500, description: "500 'how much does X cost?' answers with bands + context." },
				{ label: "Why — rationale + reasoning", href: "/why", count: 103, description: "Reasoning + rationale behind common marketing decisions." },
				{ label: "Best — curated lists", href: "/best", count: 643, description: "Curated 'best X' lists across tools, channels, agencies." },
				{ label: "Is it — qualifier answers", href: "/is-it", count: 102, description: "Direct yes/no qualifier answers." },
			],
		},
		{
			heading: "Playbooks (commercial cells)",
			description: "Service × Industry × Geo commercial playbooks — direct links into the Tier 5 cell library.",
			items: [
				{
					label: "Industry pillars",
					href: "/industries",
					count: industriesCount,
					description: "31 industry pillar pages — each with channel mix, playbook, case-mix.",
				},
				{
					label: "Service hubs",
					href: "/digital-marketing-services",
					count: servicesCount,
					description: "12 service hub pages — deliverables, channel mix, process, pricing, fit.",
				},
				{
					label: "Location hubs",
					href: "/locations",
					count: 14,
					description: "14 country / city hub pages with market context + compliance.",
				},
				{
					label: "Money pages (Service × Geo)",
					href: "/seo-company-in-bangalore",
					count: 1536,
					description: "Service × Geo commercial cells: /{service}-company-in-{geo} for every combination.",
				},
				{
					label: "Money pages (Industry × Geo)",
					href: "/real-estate-marketing-company-in-mumbai",
					count: 3968,
					description: "Industry × Geo commercial cells: /{industry}-marketing-company-in-{geo} for every combination.",
				},
			],
		},
		{
			heading: "Benchmarks & pricing",
			description: "Pricing + CAC bands per service × geography, sourced from real engagement data + public-domain benchmarks.",
			items: [
				{
					label: "Service pricing per geo",
					href: "/seo-services-pricing",
					count: 338,
					description: "Tier 13 — pricing pages per service × geo with engagement tiers + market context.",
				},
				{
					label: "CAC benchmarks (industry × geo)",
					href: "/reports",
					description: "Industry CAC bands cross-referenced with geo competitive intensity. Annual report series.",
				},
			],
		},
		{
			heading: "Reports & data studies",
			description: "Original research and data studies — citable, dated, methodology-documented.",
			items: [
				{
					label: "Reports library",
					href: "/reports",
					description: "Original research: CAC benchmarks, channel-mix benchmarks, retention benchmarks across industries.",
				},
			],
		},
		{
			heading: "Blog",
			description: "Frameleads editorial — operator essays, case-study breakdowns, behind-the-engagement notes.",
			items: [
				{
					label: "Blog index",
					href: "/blogs",
					count: BLOG_POSTS.length,
					description: "Editorial cohort of operator-grade essays. Bangalore-first; growing weekly.",
				},
			],
		},
		{
			heading: "Sub-services",
			description: "Drill-down service variants — Tier 6 catalog covering 53 sub-services across the 12 primary services.",
			items: [
				{
					label: "All sub-services",
					href: "/digital-marketing-services",
					count: subServices.length,
					description: "53 sub-services across the 12 primary services — finer-grained engagement scopes.",
				},
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources"
			title="Resources — the full Frameleads operator library"
			dek="Long-form guides across every service × industry × location. Glossary, comparisons, calculators, question hubs, data reports. Built for operators, not for SEO churn."
			tldr={[
				`${servicesCount} services × ${industriesCount} industries × ${geosCount} geographies = exhaustive cross-cell coverage.`,
				`${questions.length} programmatic questions across 6 intent kinds (what-is, how-to, how-much, why, best, is-it).`,
				`${glossary.length} glossary entries + ${comparisons.length} comparisons + 19 calculators + data reports + the blog.`,
				`Every guide is taxonomy-grounded — channel mix, CAC bands, compliance, common mistakes — no fabricated metrics, no padded fluff.`,
			]}
			groups={groups}
			breadcrumbAncestors={[{ label: "Home", href: "/" }]}
		/>
	);
}
