import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier6Page } from "@/components/templates/Tier6Page";
import { getQuestion, questions } from "@/lib/data/questions";
import type { CellLink } from "@/components/templates/RelatedCells";

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
	if (!entry || entry.kind !== "how-much") return {};
	const url = `https://frameleads.com/how-much/${topic}`;
	return {
		title: `${entry.title} — ${entry.year} | Frameleads`,
		description: entry.intent,
		alternates: { canonical: url },
		openGraph: { title: entry.title, description: entry.intent, url, type: "article" },
	};
}

function pathForKind(kind: string, slug: string): string {
	if (kind === "what-is") return `/what-is/${slug}`;
	if (kind === "why") return `/why/${slug}`;
	if (kind === "is-it") return `/is-it/${slug}`;
	if (kind === "best") return `/best/${slug}`;
	if (kind === "how-much") return `/how-much/${slug}`;
	return `/how-to/${slug}`;
}

function pickRelated(currentSlug: string, currentTags: string[]): CellLink[] {
	const tagSet = new Set(currentTags);
	const scored = questions
		.filter((q) => q.slug !== currentSlug)
		.map((q) => ({ q, overlap: q.tags.filter((t) => tagSet.has(t)).length }))
		.sort((a, b) => b.overlap - a.overlap);
	return scored.slice(0, 6).map(({ q }) => ({
		href: pathForKind(q.kind, q.slug),
		label: q.title,
		sublabel: q.audience,
	}));
}

export default async function HowMuchPage({ params }: { params: RouteParams }) {
	const { topic } = await params;
	const entry = getQuestion(topic);
	if (!entry) notFound();
	if (entry.kind !== "how-much") notFound();
	const url = `https://frameleads.com/how-much/${topic}`;
	const related = pickRelated(entry.slug, entry.tags);
	return <Tier6Page entry={entry} url={url} related={related} />;
}
