import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { glossary } from "@/lib/data/glossary";
import { industries } from "@/lib/data";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Marketing glossary — definitions, formulas, benchmarks | Frameleads Resources",
	description:
		"87-entry plain-English marketing glossary: CAC, ROAS, LTV, MQL/SQL, attribution, ad-platform terms. Each entry has a formula, examples, common mistakes. Plus industry-adapted variants for every term across 31 industries.",
	alternates: { canonical: "https://frameleads.com/resources/glossary" },
};

export default function Page() {
	const groups: ResourceGroup[] = [
		{
			heading: "Browse the full glossary",
			items: [
				{
					label: "Full glossary index",
					href: "/glossary",
					count: glossary.length,
					description: "All 87 entries A–Z with definitions, formulas, examples, common mistakes.",
				},
				{
					label: "CAC — the deep dive",
					href: "/glossary/cac",
					description: "Customer Acquisition Cost — blended vs paid-only, target bands per category, common attribution mistakes.",
				},
				{
					label: "ROAS — the deep dive",
					href: "/glossary/roas",
					description: "Return on Ad Spend — formula, attribution windows, channel benchmarks, when ROAS misleads.",
				},
			],
		},
		{
			heading: "Featured terms",
			description: "The terms operators look up most frequently.",
			items: glossary.slice(0, 30).map((entry: any) => ({
				label: entry.term || entry.label || entry.id,
				href: `/glossary/${entry.id}`,
				description: entry.definition?.slice(0, 120) || entry.summary?.slice(0, 120) || "Plain-English definition + formula + examples.",
			})),
		},
		{
			heading: "Industry-adapted glossary cells",
			description: "Every glossary term reframed for a specific industry's unit economics. Programmatic Tier 15 surface — sample shown.",
			items: industries.slice(0, 12).map((i) => ({
				label: `${i.label} × glossary`,
				href: `/${i.id}`,
				count: glossary.length,
				description: `Every glossary term adapted to ${i.label.toLowerCase()}'s CAC band (${i.avgCacInr} ₹), CPC band (${i.avgCpcInr} ₹), and channel preferences.`,
			})),
		},
	];

	return (
		<ResourcesHub
			slug="resources/glossary"
			title="Marketing glossary"
			dek="87-entry plain-English glossary. Every term has a definition, formula, example, and common mistake. Plus industry-adapted variants across 31 industries (~2,697 total cells)."
			tldr={[
				`${glossary.length} base terms; each with formula + example + common mistake.`,
				`${industries.length * glossary.length} industry-adapted cells across 31 industries.`,
				`Use these as both reference and as discovery surface — every term links to deeper guides and commercial pages.`,
				`Plain-English. Operator-grade. No padded prose.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
