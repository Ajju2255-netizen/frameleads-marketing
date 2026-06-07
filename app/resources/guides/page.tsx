import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { services, industries, geosAll } from "@/lib/data";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Guides — every service × industry × location | Frameleads Resources",
	description:
		"Long-form educational guides across every Frameleads service, every industry, every supported geography, plus every cross-combination. Channel mix, deliverables, process, compliance, metrics, common mistakes. In-depth, advanced, taxonomy-grounded.",
	alternates: { canonical: "https://frameleads.com/resources/guides" },
	openGraph: {
		title: "Frameleads Guides — every combination, fully briefed",
		description:
			"Long-form operator guides across services × industries × locations. Channel mix, deliverables, process, compliance, metrics, common mistakes.",
		url: "https://frameleads.com/resources/guides",
		type: "website",
	},
};

function indianGeos() {
	return geosAll.filter((g) => g.country === undefined || g.country === "India");
}

function globalGeos() {
	return geosAll.filter((g) => g.country !== undefined && g.country !== "India");
}

export default function Page() {
	const inGeos = indianGeos();
	const glGeos = globalGeos();

	const groups: ResourceGroup[] = [
		{
			heading: "Service guides",
			description: "One guide per Frameleads service — full operator playbook.",
			items: services.map((s) => ({
				label: `${s.label} — the full guide`,
				href: `/resources/guides/${s.id}`,
				description: `${s.tagline}`,
			})),
		},
		{
			heading: "Industry guides",
			description: "One guide per industry — buyer behaviour, channel mix, playbook, metrics.",
			items: industries.map((i) => ({
				label: `${i.label} marketing — the full guide`,
				href: `/resources/guides/${i.id}-marketing`,
				description: `${i.tagline}`,
			})),
		},
		{
			heading: "Location guides — India",
			description: "Digital marketing guides for every Indian metro + tier-2 city.",
			items: inGeos.slice(0, 60).map((g) => ({
				label: `Digital marketing in ${g.name}`,
				href: `/resources/guides/digital-marketing-in-${g.id}`,
				description: g.population ? `${g.population} population${g.state ? `; ${g.state}` : ""}` : g.state || "Indian metro / city",
			})),
		},
		{
			heading: "Location guides — Global",
			description: "Digital marketing guides for global priority markets.",
			items: glGeos.map((g) => ({
				label: `Digital marketing in ${g.name}`,
				href: `/resources/guides/digital-marketing-in-${g.id}`,
				description: `${g.country}${g.state ? ` · ${g.state}` : ""}`,
			})),
		},
		{
			heading: "Service × Industry — featured",
			description: "Cross-cell guides: how a specific service adapts to a specific industry. Sample shown; every combination renders programmatically.",
			items: [
				{ label: "SEO for Real Estate", href: "/resources/guides/seo-services-for-real-estate", description: "Adapted SEO playbook for real estate developers." },
				{ label: "SEO for B2B SaaS", href: "/resources/guides/seo-services-for-b2b-saas", description: "Adapted SEO playbook for B2B SaaS." },
				{ label: "Performance Marketing for D2C", href: "/resources/guides/performance-marketing-for-d2c", description: "Performance marketing playbook for D2C brands." },
				{ label: "Meta Ads for Fashion D2C", href: "/resources/guides/meta-ads-for-fashion-d2c", description: "Meta ads playbook for fashion D2C." },
				{ label: "LinkedIn Ads for B2B SaaS", href: "/resources/guides/linkedin-ads-for-b2b-saas", description: "LinkedIn ads playbook for B2B SaaS." },
				{ label: "Google Ads for Real Estate", href: "/resources/guides/google-ads-for-real-estate", description: "Google ads playbook for real estate." },
				{ label: "Content Marketing for Education", href: "/resources/guides/content-marketing-for-education", description: "Content playbook for education brands." },
				{ label: "WhatsApp Marketing for D2C", href: "/resources/guides/whatsapp-marketing-for-d2c", description: "Click-to-WhatsApp playbook for D2C." },
				{ label: "All Service × Industry combinations", href: "/resources/guides", description: `${services.length * industries.length} total — every service × every industry.` },
			],
		},
		{
			heading: "Service × Geo — featured",
			description: "Cross-cell guides: how a service adapts to a specific geography.",
			items: [
				{ label: "SEO in Mumbai", href: "/resources/guides/seo-services-in-mumbai", description: "SEO adapted to Mumbai market." },
				{ label: "SEO in Bangalore", href: "/resources/guides/seo-services-in-bangalore", description: "SEO adapted to Bangalore market." },
				{ label: "SEO in Dubai", href: "/resources/guides/seo-services-in-dubai", description: "SEO adapted to Dubai market + Arabic + GCC." },
				{ label: "Performance Marketing in Delhi NCR", href: "/resources/guides/performance-marketing-in-delhi-ncr", description: "Performance marketing in Delhi NCR." },
				{ label: "LinkedIn Ads in Singapore", href: "/resources/guides/linkedin-ads-in-singapore", description: "LinkedIn ads adapted to Singapore B2B." },
				{ label: "Meta Ads in London", href: "/resources/guides/meta-ads-in-london", description: "Meta ads adapted to UK / London market." },
				{ label: "Google Ads in New York", href: "/resources/guides/google-ads-in-new-york", description: "Google ads adapted to NY / US East Coast market." },
				{ label: "All Service × Geo combinations", href: "/resources/guides", description: `${services.length * geosAll.length} total — every service × every geography.` },
			],
		},
		{
			heading: "Industry × Geo — featured",
			description: "Cross-cell guides: how an industry's marketing adapts to a specific geography.",
			items: [
				{ label: "Real Estate marketing in Mumbai", href: "/resources/guides/real-estate-marketing-in-mumbai", description: "M-RERA-aware real estate marketing playbook for Mumbai." },
				{ label: "Real Estate marketing in Dubai", href: "/resources/guides/real-estate-marketing-in-dubai", description: "Trakheesi + DLD-compliant Dubai real estate playbook." },
				{ label: "B2B SaaS marketing in Bangalore", href: "/resources/guides/b2b-saas-marketing-in-bangalore", description: "B2B SaaS playbook for Bangalore's SaaS ecosystem." },
				{ label: "Healthcare marketing in Delhi NCR", href: "/resources/guides/healthcare-marketing-in-delhi-ncr", description: "Healthcare playbook for Delhi NCR." },
				{ label: "D2C marketing in Mumbai", href: "/resources/guides/d2c-marketing-in-mumbai", description: "D2C playbook for Mumbai consumer brands." },
				{ label: "Fintech marketing in Singapore", href: "/resources/guides/fintech-marketing-in-singapore", description: "MAS-aware fintech playbook for Singapore." },
				{ label: "All Industry × Geo combinations", href: "/resources/guides", description: `${industries.length * geosAll.length} total — every industry × every geography.` },
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources/guides"
			title="Guides — every service × industry × location"
			dek="Long-form educational guides across the full Frameleads taxonomy. Service guides, industry guides, location guides, plus every cross-combination. Channel mix, deliverables, process, compliance, common mistakes, metrics."
			tldr={[
				`Service guides (${services.length}), industry guides (${industries.length}), location guides (${geosAll.length}).`,
				`Service × Industry combinations: ${services.length * industries.length}. Service × Geo: ${services.length * geosAll.length}. Industry × Geo: ${industries.length * geosAll.length}.`,
				`Every guide is taxonomy-grounded — no fabricated metrics, no thin templated content.`,
				`Educational intent (distinct from the commercial Tier surfaces). Use these to learn before you engage.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
