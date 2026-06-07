import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { industries, services } from "@/lib/data";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Benchmarks — CAC, CPC, channel-mix bands per industry × geo | Frameleads Resources",
	description:
		"CAC and CPC benchmarks across 31 industries × 128 geographies. Channel-mix bands. Engagement-tier pricing per service × geo. Sourced from real engagement data + public-domain benchmarks.",
	alternates: { canonical: "https://frameleads.com/resources/benchmarks" },
};

export default function Page() {
	const groups: ResourceGroup[] = [
		{
			heading: "Industry CAC + CPC bands",
			description: "Per-industry CAC + CPC bands. Click into each industry pillar for the full breakdown.",
			items: industries.slice(0, 20).map((i) => ({
				label: i.label,
				href: `/${i.id}`,
				description: `CAC band ${i.avgCacInr} ₹; CPC band ${i.avgCpcInr} ₹. ${i.topPainPoints?.[0] || ""}`,
			})),
		},
		{
			heading: "Service pricing bands per geo",
			description: "Engagement-tier pricing per service × geo. Tier 13 commercial surface.",
			items: services.slice(0, 12).map((s) => ({
				label: `${s.label} pricing`,
				href: `/${s.id}-pricing`,
				description: `Three engagement tiers — Starter / Scale / Enterprise. CPC band ${s.avgCpcInr} ₹; CAC band ${s.avgCacInr} ₹.`,
			})),
		},
		{
			heading: "Annual benchmark reports",
			items: [
				{ label: "CAC Benchmarks India 2026", href: "/reports/cac-benchmarks-india-2026", description: "Category-level CAC bands across 31 Indian industries." },
				{ label: "All reports", href: "/reports", description: "Frameleads data-study library." },
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources/benchmarks"
			title="Benchmarks — CAC, CPC, channel-mix"
			dek={`CAC and CPC benchmarks across ${industries.length} industries × 128 geographies. Channel-mix bands. Engagement-tier pricing per service × geo.`}
			tldr={[
				`${industries.length} industries × 128 geographies = full coverage of buyer unit-economics bands.`,
				`Sourced from real engagement data + public-domain benchmarks.`,
				`Annual update cadence with mid-year refresh for high-variance categories.`,
				`Use for: budget setting, engagement-tier diagnosis, agency-pitch sanity check.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
