import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { comparisons } from "@/lib/data/comparisons";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Comparisons — honest side-by-side breakdowns | Frameleads Resources",
	description:
		"50+ honest comparisons across platforms, tools, and approaches: Google vs Meta, Webflow vs WordPress, HubSpot vs Salesforce, SEO vs Ads, B2B vs D2C, and more. Operator-grade reasoning, not affiliate hype.",
	alternates: { canonical: "https://frameleads.com/resources/comparisons" },
};

export default function Page() {
	const items = (comparisons as any[]).slice(0, 50).map((c) => ({
		label: c.title || `${c.itemA} vs ${c.itemB}`,
		href: `/vs/${c.slug || c.id}`,
		description: c.description?.slice(0, 140) || c.summary?.slice(0, 140) || "Honest side-by-side comparison with operator reasoning.",
	}));

	const groups: ResourceGroup[] = [
		{
			heading: "Browse all comparisons",
			items: [
				{
					label: "Full comparisons index",
					href: "/vs",
					count: comparisons.length,
					description: "All comparisons indexed alphabetically with intent + when-to-pick guidance.",
				},
			],
		},
		{
			heading: "All comparisons",
			description: "Operator-grade side-by-side breakdowns. No affiliate hype, no false equivalence.",
			items,
		},
	];

	return (
		<ResourcesHub
			slug="resources/comparisons"
			title="Comparisons — honest side-by-sides"
			dek={`${comparisons.length}+ comparisons across platforms, tools, and approaches. Operator-grade reasoning, not affiliate hype. Each comparison includes when-to-pick logic + the failure modes for each side.`}
			tldr={[
				`${comparisons.length} comparison entries.`,
				`Platforms (Google vs Meta), tools (Webflow vs WordPress), approaches (SEO vs Ads), markets (B2B vs D2C).`,
				`Each entry: side-by-side feature matrix + when-to-pick + failure modes.`,
				`No false-balance, no affiliate-driven choices.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
