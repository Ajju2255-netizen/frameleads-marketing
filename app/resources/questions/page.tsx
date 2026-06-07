import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";
import { questions } from "@/lib/data/questions";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Question hubs — what-is, how-to, how-much, why, best, is-it | Frameleads Resources",
	description:
		"2,046+ programmatic questions across 6 intent kinds: what-is (definitions), how-to (process), how-much (pricing), why (rationale), best (curated lists), is-it (qualifiers). Each question cross-references industries and geos.",
	alternates: { canonical: "https://frameleads.com/resources/questions" },
};

export default function Page() {
	const byKind: Record<string, number> = {};
	(questions as any[]).forEach((q) => {
		byKind[q.kind] = (byKind[q.kind] || 0) + 1;
	});

	const groups: ResourceGroup[] = [
		{
			heading: "Question hubs by intent",
			description: "Each hub aggregates programmatic question pages. Drill in for the full list.",
			items: [
				{ label: "What is — definitions", href: "/what-is", count: byKind["what-is"] || 0, description: "Plain-English definitions of marketing terms, channels, and concepts." },
				{ label: "How to — process guides", href: "/how-to", count: byKind["how-to"] || 0, description: "Step-by-step process answers." },
				{ label: "How much — pricing answers", href: "/how-much", count: byKind["how-much"] || 0, description: "Pricing bands, with context per industry / geo." },
				{ label: "Why — rationale + reasoning", href: "/why", count: byKind["why"] || 0, description: "Reasoning behind common marketing decisions." },
				{ label: "Best — curated lists", href: "/best", count: byKind["best"] || 0, description: "Curated 'best X' lists across tools, channels, agencies." },
				{ label: "Is it — qualifier answers", href: "/is-it", count: byKind["is-it"] || 0, description: "Direct yes/no qualifier answers." },
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources/questions"
			title="Question hubs"
			dek={`${questions.length}+ programmatic questions across 6 intent kinds. Each question links to industry-specific and geo-specific deep answers.`}
			tldr={[
				`${questions.length} base questions across 6 intent kinds.`,
				`Question × Industry cross-cells: ${questions.length} × 31 industries = ${questions.length * 31} programmatic answers (Tier 12).`,
				`Question × Geo cross-cells across 12 priority cities (Tier 14).`,
				`Built for AI-overview citation — each answer leads with a direct response in the first 80 words.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
