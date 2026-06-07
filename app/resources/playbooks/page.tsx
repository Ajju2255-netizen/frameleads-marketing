import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { services, industries, geosAll } from "@/lib/data";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Playbooks — service × industry × geo commercial cells | Frameleads Resources",
	description:
		"The complete Frameleads playbook library: service hubs (12), industry pillars (31), location hubs (14 hand-curated), service × geo cells, service × industry cells, service × industry × geo cells. ~127k commercial pages cross-indexed.",
	alternates: { canonical: "https://frameleads.com/resources/playbooks" },
};

export default function Page() {
	const indianGeos = geosAll.filter((g) => g.country === undefined || g.country === "India");
	const globalGeos = geosAll.filter((g) => g.country !== undefined && g.country !== "India");

	const groups: ResourceGroup[] = [
		{
			heading: "Service hubs",
			description: "12 hand-curated commercial service hubs — deliverables, channel mix, process, pricing, fit.",
			items: services.map((s) => ({
				label: s.label,
				href: `/${s.id}`,
				description: s.tagline,
			})),
		},
		{
			heading: "Industry pillars",
			description: "31 industry pillar pages — channel mix, playbook, case-mix per industry.",
			items: industries.slice(0, 20).map((i) => ({
				label: i.label,
				href: `/${i.id}`,
				description: `${i.tagline} CAC band ${i.avgCacInr} ₹.`,
			})),
		},
		{
			heading: "Location hubs (hand-curated)",
			description: "14 hand-curated country / city hubs with market context, compliance, sub-locations.",
			items: [
				{ label: "Digital marketing in India", href: "/digital-marketing-in-india", description: "India — DPDP, ASCI, sector regulators." },
				{ label: "Digital marketing in UAE", href: "/digital-marketing-in-uae", description: "UAE — PDPL." },
				{ label: "Digital marketing in Dubai", href: "/digital-marketing-in-dubai", description: "Dubai — DIFC + UAE PDPL." },
				{ label: "Digital marketing in Singapore", href: "/digital-marketing-in-singapore", description: "Singapore — PDPA + MAS." },
				{ label: "Digital marketing in UK", href: "/digital-marketing-in-unitedkingdom", description: "UK — UK-GDPR + ICO + ASA." },
				{ label: "Digital marketing in USA", href: "/digital-marketing-in-unitedstates", description: "USA — CCPA + state laws + FTC." },
				{ label: "Digital marketing in Saudi Arabia", href: "/digital-marketing-in-saudi-arabia", description: "KSA — PDPL + SAMA." },
				{ label: "Digital marketing in Australia", href: "/digital-marketing-in-australia", description: "AU — Privacy Act + ACMA + ACCC." },
				{ label: "Digital marketing in Canada", href: "/digital-marketing-in-canada", description: "Canada — PIPEDA + Law 25 + CASL." },
				{ label: "Digital marketing in Germany", href: "/digital-marketing-in-germany", description: "Germany — DSGVO + UWG." },
				{ label: "Digital marketing in France", href: "/digital-marketing-in-france", description: "France — GDPR + CNIL." },
				{ label: "Digital marketing in Brazil", href: "/digital-marketing-in-brazil", description: "Brazil — LGPD + CONAR." },
				{ label: "Digital marketing in China", href: "/digital-marketing-in-china", description: "China — PIPL + ICP + CAC." },
				{ label: "Digital marketing in Bangalore", href: "/digital-marketing-in-bangalore", description: "Bangalore — Frameleads HQ market." },
			],
		},
		{
			heading: "Money pages — Service × Geo (sample)",
			description: "Service × Geo commercial cells: /{service}-company-in-{geo}. Sample shown; ~1,536 cells programmatic.",
			items: [
				{ label: "SEO Company in Bangalore", href: "/seo-company-in-bangalore", description: "Hand-curated." },
				{ label: "SEO Company in Mumbai", href: "/seo-company-in-mumbai", description: "Hand-curated." },
				{ label: "SEO Company in Dubai", href: "/seo-company-in-dubai", description: "Hand-curated." },
				{ label: "Performance Marketing Company in Bangalore", href: "/performance-marketing-company-in-bangalore", description: "Hand-curated." },
				{ label: "Performance Marketing Company in Mumbai", href: "/performance-marketing-company-in-mumbai", description: "Hand-curated." },
				{ label: "Performance Marketing Company in Dubai", href: "/performance-marketing-company-in-dubai", description: "Hand-curated." },
				{ label: "Google Ads Company in Delhi NCR", href: "/google-ads-company-in-delhi-ncr", description: "Programmatic." },
				{ label: "Meta Ads Company in Mumbai", href: "/meta-ads-company-in-mumbai", description: "Programmatic." },
				{ label: "LinkedIn Ads Company in Singapore", href: "/linkedin-ads-company-in-singapore", description: "Programmatic." },
			],
		},
		{
			heading: "Money pages — Industry × Geo (sample)",
			description: "Industry × Geo commercial cells: /{industry}-marketing-company-in-{geo}. Sample shown; ~3,968 cells programmatic.",
			items: [
				{ label: "Real Estate Marketing Company in Bangalore", href: "/real-estate-marketing-company-in-bangalore", description: "Hand-curated K-RERA playbook." },
				{ label: "Real Estate Marketing Company in Mumbai", href: "/real-estate-marketing-company-in-mumbai", description: "M-RERA-aware." },
				{ label: "Healthcare Marketing Company in Bangalore", href: "/healthcare-marketing-company-in-bangalore", description: "Programmatic." },
				{ label: "B2B SaaS Marketing Company in Pune", href: "/b2b-saas-marketing-company-in-pune", description: "Programmatic." },
				{ label: "D2C Marketing Company in Bangalore", href: "/d2c-marketing-company-in-bangalore", description: "Programmatic." },
				{ label: "Fintech Marketing Company in Singapore", href: "/fintech-marketing-company-in-singapore", description: "Programmatic." },
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources/playbooks"
			title="Playbooks — service × industry × geo cells"
			dek={`The complete commercial playbook library: ${services.length} service hubs, ${industries.length} industry pillars, ${indianGeos.length + globalGeos.length} geographies, plus ~5.5k money pages and ~3.3k service-industry-geo cells.`}
			tldr={[
				`${services.length} service hubs (commercial intent, hand-curated).`,
				`${industries.length} industry pillars.`,
				`14 country/city location hubs with regulatory framework.`,
				`5,506 money pages — every service × every geo + every industry × every geo.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
