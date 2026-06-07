import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier2Page } from "@/components/templates/Tier2Page";
import { getSubService } from "@/lib/data/sub-services";
import { services } from "@/lib/data";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
	return [];
}

type RouteParams = Promise<{ slug: string; sub: string }>;

// Hand-coded labels for service pages not in the services.json data file
// (these have static app/<slug>/page.tsx pages but aren't part of the 12 programmatic services).
const HAND_CODED_PARENT_LABELS: Record<string, string> = {
	"branding": "Branding",
	"website-development": "Website Development",
	"analytics-and-automations": "Analytics & Automations",
	"email-marketing-and-automation-services": "Email Marketing & Automation",
};

function getParentLabel(slug: string): string | null {
	const svc = services.find((s) => s.id === slug);
	if (svc) return svc.label;
	return HAND_CODED_PARENT_LABELS[slug] ?? null;
}

export async function generateMetadata({
	params,
}: {
	params: RouteParams;
}): Promise<Metadata> {
	const { slug, sub } = await params;
	const entry = getSubService(slug, sub);
	if (!entry) return {};
	const parentLabel = getParentLabel(slug) ?? slug;
	const url = `https://frameleads.com/${slug}/${sub}`;
	return {
		title: `${entry.label} for Indian SMBs (2026) | Frameleads`,
		description: entry.direct_answer.slice(0, 155),
		alternates: { canonical: url },
		openGraph: {
			title: `${entry.label} — ${parentLabel}`,
			description: entry.direct_answer.slice(0, 155),
			url,
			type: "website",
		},
	};
}

export default async function SubServicePage({
	params,
}: {
	params: RouteParams;
}) {
	const { slug, sub } = await params;
	const entry = getSubService(slug, sub);
	if (!entry) notFound();
	const parentLabel = getParentLabel(slug);
	if (!parentLabel) notFound();
	const url = `https://frameleads.com/${slug}/${sub}`;
	return <Tier2Page entry={entry} parentLabel={parentLabel} url={url} />;
}
