import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier8GlossaryPage } from "@/components/templates/Tier8GlossaryPage";
import { getGlossaryEntry } from "@/lib/data/glossary";

// Strict ISR — first hit renders, R2 caches, subsequent hits served from R2.
export const revalidate = 86400;
export const dynamicParams = true;

const STATIC_GLOSSARY_OVERRIDES = new Set(["cac", "roas"]);

export async function generateStaticParams() {
	return [];
}

type RouteParams = Promise<{ term: string }>;

export async function generateMetadata({
	params,
}: {
	params: RouteParams;
}): Promise<Metadata> {
	const { term } = await params;
	const entry = getGlossaryEntry(term);
	if (!entry) return {};
	const url = `https://frameleads.com/glossary/${term}`;
	const title = `What is ${entry.term} (${entry.expansion})? Definition, Formula & India Benchmarks | Frameleads`;
	const description = `${entry.term} is ${entry.expansion}. Definition, formula, India benchmarks, common mistakes, and how it relates to other unit-economics metrics.`;
	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: { title, description, url, type: "article" },
	};
}

export default async function GlossaryDynamicPage({
	params,
}: {
	params: RouteParams;
}) {
	const { term } = await params;
	if (STATIC_GLOSSARY_OVERRIDES.has(term)) notFound();
	const entry = getGlossaryEntry(term);
	if (!entry) notFound();
	const url = `https://frameleads.com/glossary/${term}`;
	return <Tier8GlossaryPage entry={entry} url={url} />;
}
