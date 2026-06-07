import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/templates/GuidePage";
import { parseGuideSlug } from "@/lib/data/slugs";
import {
	buildServiceGuide,
	buildIndustryGuide,
	buildGeoGuide,
	buildServiceIndustryGuide,
	buildServiceGeoGuide,
	buildIndustryGeoGuide,
} from "@/lib/data/resources";

// ISR — first hit renders on the worker, R2 caches, subsequent hits served
// from R2. Build does not pre-render any cells; cache fills lazily as crawled.
export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
	return [];
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({
	params,
}: {
	params: RouteParams;
}): Promise<Metadata> {
	const { slug } = await params;
	const match = parseGuideSlug(slug);
	if (!match) return {};
	const url = `https://frameleads.com/resources/guides/${slug}`;

	let title = "";
	let description = "";

	switch (match.tier) {
		case "guide-service": {
			const s = match.service;
			const short = s.label.replace(/\s+Services?$/i, "").trim();
			title = `${short} — the full guide (2026) | Frameleads Resources`;
			description = `An advanced, in-depth guide to ${short.toLowerCase()}. Channel mix, deliverables, process, metrics, common mistakes, pricing, fit-check. Built for operators who want the long version, not a sales page.`;
			break;
		}
		case "guide-industry": {
			const i = match.industry;
			title = `${i.label} marketing — the full guide (2026) | Frameleads Resources`;
			description = `Operator-grade guide to marketing for ${i.label.toLowerCase()}. Buyer behaviour, channel mix, playbook, mistakes, metrics. CAC band ${i.avgCacInr} ₹.`;
			break;
		}
		case "guide-geo": {
			const g = match.geo;
			title = `Digital marketing in ${g.name} — the full guide (2026) | Frameleads Resources`;
			description = `Advanced guide to digital marketing in ${g.name}. Buyer mix, channel preferences, regulatory framework, playbook.`;
			break;
		}
		case "guide-service-industry": {
			const short = match.service.label.replace(/\s+Services?$/i, "").trim();
			title = `${short} for ${match.industry.label} — the full guide (2026) | Frameleads Resources`;
			description = `Advanced guide to running ${short.toLowerCase()} for ${match.industry.label.toLowerCase()}. Channel mix, deliverables, process, metrics.`;
			break;
		}
		case "guide-service-geo": {
			const short = match.service.label.replace(/\s+Services?$/i, "").trim();
			title = `${short} in ${match.geo.name} — the full guide (2026) | Frameleads Resources`;
			description = `Advanced guide to ${short.toLowerCase()} for ${match.geo.name} businesses. Channel mix, compliance, process, common mistakes.`;
			break;
		}
		case "guide-industry-geo": {
			title = `${match.industry.label} marketing in ${match.geo.name} — the full guide (2026) | Frameleads Resources`;
			description = `Advanced guide to ${match.industry.label.toLowerCase()} marketing in ${match.geo.name}. Category fit, channel mix, compliance, playbook.`;
			break;
		}
	}

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: { title, description, url, type: "article" },
	};
}

export default async function ResourceGuidePage({
	params,
}: {
	params: RouteParams;
}) {
	const { slug } = await params;
	const match = parseGuideSlug(slug);
	if (!match) notFound();

	let content;
	switch (match.tier) {
		case "guide-service":
			content = buildServiceGuide(match.service);
			break;
		case "guide-industry":
			content = buildIndustryGuide(match.industry);
			break;
		case "guide-geo":
			content = buildGeoGuide(match.geo);
			break;
		case "guide-service-industry":
			content = buildServiceIndustryGuide(match.service, match.industry);
			break;
		case "guide-service-geo":
			content = buildServiceGeoGuide(match.service, match.geo);
			break;
		case "guide-industry-geo":
			content = buildIndustryGeoGuide(match.industry, match.geo);
			break;
	}

	return <GuidePage slug={slug} content={content} />;
}
