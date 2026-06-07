import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier6Page } from "@/components/templates/Tier6Page";
import { getQuestion, questions } from "@/lib/data/questions";
import type { CellLink } from "@/components/templates/RelatedCells";

// Strict ISR — render on first hit, cache in R2.
export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
	return [];
}

type RouteParams = Promise<{ topic: string }>;

export async function generateMetadata({
	params,
}: {
	params: RouteParams;
}): Promise<Metadata> {
	const { topic } = await params;
	const entry = getQuestion(topic);
	if (!entry) return {};
	const url = `https://frameleads.com/how-to/${topic}`;
	return {
		title: `${entry.title} — ${entry.year} | Frameleads`,
		description: entry.intent,
		alternates: { canonical: url },
		openGraph: {
			title: entry.title,
			description: entry.intent,
			url,
			type: "article",
		},
	};
}

function urlForKind(kind: string, slug: string): string {
	const base = "https://frameleads.com";
	if (kind === "what-is") return `${base}/what-is/${slug}`;
	if (kind === "why") return `${base}/why/${slug}`;
	if (kind === "is-it") return `${base}/is-it/${slug}`;
	return `${base}/how-to/${slug}`;
}

function pathForKind(kind: string, slug: string): string {
	if (kind === "what-is") return `/what-is/${slug}`;
	if (kind === "why") return `/why/${slug}`;
	if (kind === "is-it") return `/is-it/${slug}`;
	return `/how-to/${slug}`;
}

function pickRelated(currentSlug: string, currentTags: string[]): CellLink[] {
	const tagSet = new Set(currentTags);
	const scored = questions
		.filter((q) => q.slug !== currentSlug)
		.map((q) => {
			const overlap = q.tags.filter((t) => tagSet.has(t)).length;
			return { q, overlap };
		})
		.sort((a, b) => b.overlap - a.overlap);
	return scored.slice(0, 6).map(({ q }) => ({
		href: pathForKind(q.kind, q.slug),
		label: q.title,
		sublabel: q.audience,
	}));
}

export default async function HowToPage({
	params,
}: {
	params: RouteParams;
}) {
	const { topic } = await params;
	const entry = getQuestion(topic);
	if (!entry) notFound();
	if (entry.kind !== "how-to") notFound();
	const url = urlForKind(entry.kind, entry.slug);
	const related = pickRelated(entry.slug, entry.tags);
	return <Tier6Page entry={entry} url={url} related={related} />;
}
