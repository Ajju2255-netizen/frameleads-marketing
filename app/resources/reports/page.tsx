import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Reports & data studies | Frameleads Resources",
	description:
		"Original research from Frameleads: CAC benchmarks, channel-mix benchmarks, retention benchmarks across industries. Citable, dated, methodology-documented.",
	alternates: { canonical: "https://frameleads.com/resources/reports" },
};

export default function Page() {
	const groups: ResourceGroup[] = [
		{
			heading: "Reports library",
			description: "Original research and data studies. Each report includes methodology, sample size, dates, and citable data.",
			items: [
				{
					label: "Reports index",
					href: "/reports",
					description: "Full index of Frameleads data studies + benchmark reports.",
				},
				{
					label: "CAC Benchmarks India 2026",
					href: "/reports/cac-benchmarks-india-2026",
					description: "Category-level CAC bands across 31 Indian industries, with channel-mix attribution + competitive intensity analysis.",
				},
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources/reports"
			title="Reports & data studies"
			dek="Original Frameleads research — methodology-documented, citable, dated. CAC benchmarks, channel-mix benchmarks, retention benchmarks across industries."
			tldr={[
				`Original data studies — not aggregator content.`,
				`Each report carries methodology + sample size + date.`,
				`Citable: every report has stable URLs + Dataset schema.`,
				`Annual cadence with mid-year updates for high-variance categories.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
