import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier9Page } from "@/components/templates/Tier9Page";
import { getComparison } from "@/lib/data/comparisons";

// Strict ISR.
export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
	return [];
}

type RouteParams = Promise<{ comparison: string }>;

export async function generateMetadata({
	params,
}: {
	params: RouteParams;
}): Promise<Metadata> {
	const { comparison } = await params;
	const entry = getComparison(comparison);
	if (!entry) return {};
	const url = `https://frameleads.com/vs/${comparison}`;
	const title = `${entry.a.label} vs ${entry.b.label} — Decision Guide for ${entry.audienceLabel} | Frameleads`;
	const description = `${entry.intent} Scorecard, decision flow, and the hybrid case — built for ${entry.audienceLabel}. Free 30-min audit.`;
	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: { title, description, url, type: "article" },
	};
}

export default async function ComparisonPage({
	params,
}: {
	params: RouteParams;
}) {
	const { comparison } = await params;
	const entry = getComparison(comparison);
	if (!entry) notFound();
	const url = `https://frameleads.com/vs/${comparison}`;
	return <Tier9Page entry={entry} url={url} />;
}
