import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier3Page } from "@/components/templates/Tier3Page";
import { Tier4Page } from "@/components/templates/Tier4Page";
import { Tier5Page } from "@/components/templates/Tier5Page";
import { Tier11Page } from "@/components/templates/Tier11Page";
import { Tier13Page } from "@/components/templates/Tier13Page";
import { IndustryPillarPage } from "@/components/templates/IndustryPillarPage";
import { MoneyPage } from "@/components/templates/MoneyPage";
import { parseProgrammaticSlug } from "@/lib/data/slugs";

// Strict ISR — first hit renders on the worker, R2 caches the response,
// subsequent hits served from R2 (frameleads-isr-cache). Build does NOT
// pre-render any of the ~5,000 cells; cache fills lazily as URLs are crawled.
export const revalidate = 86400;

// Allow any slug at runtime; we validate via parseProgrammaticSlug → notFound().
export const dynamicParams = true;

// Empty static-params list: nothing pre-rendered at build, build stays fast.
// The sitemap (lib/sitemap.ts) is the source of truth for crawlers, not this fn.
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
	const match = parseProgrammaticSlug(slug);
	if (!match) return {};
	const url = `https://frameleads.com/${slug}`;

	if (match.tier === 1) {
		const { industry } = match;
		const title = `${industry.label} Marketing — A 2026 Operator's Playbook | Frameleads`;
		const description = `${industry.label} marketing — channel mix, CAC ${industry.avgCacInr} ₹, and the Frameleads Growth System adapted to ${industry.name}. Free audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "article" },
		};
	}

	if (match.tier === 3) {
		const { service, geo } = match;
		const title = `${service.label} in ${geo.name} — Frameleads Growth System™`;
		const description = `${service.label} agency in ${geo.name}. Frameleads runs ${service.label.toLowerCase()} for ${geo.topIndustries.slice(0, 3).join(", ")} businesses with the Frameleads Growth System™. Free audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "website" },
		};
	}

	if (match.tier === 4) {
		const { service, industry } = match;
		const title = `${service.label} for ${industry.label} — Frameleads Growth System™`;
		const description = `${service.label} for ${industry.label}. Frameleads adapts ${service.label.toLowerCase()} to ${industry.name}-specific unit economics — CAC ${industry.avgCacInr} ₹. Free 30-min audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "website" },
		};
	}

	if (match.tier === 11) {
		const { industry, geo } = match;
		const title = `${industry.label} marketing in ${geo.name} — Frameleads Growth System™`;
		const description = `${industry.label} marketing services in ${geo.name}. Channel mix + CAC ${industry.avgCacInr} ₹ + city-specific playbook. Free 30-min audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "website" },
		};
	}

	if (match.tier === 13) {
		const { service, geo } = match;
		const where = geo ? ` in ${geo.name}` : " in India";
		const title = `${service.label} pricing${where} (2026) | Frameleads`;
		const description = `${service.label} retainer tiers${where} — Starter, Scale, Enterprise. No setup fees, no hidden costs. Get an exact quote in a free 30-min audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "website" },
		};
	}

	if (match.tier === "money-service") {
		const { service, geo } = match;
		const shortLabel = service.label.replace(/\s+Services?$/i, "").trim();
		const title = `${shortLabel} Company in ${geo.name} — Frameleads`;
		const description = `${shortLabel} company in ${geo.name}. ${shortLabel} tuned to ${geo.name}'s buyer mix, CPC ${service.avgCpcInr} ₹, CAC ${service.avgCacInr} ₹. Free 30-min audit before any retainer.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "website" },
		};
	}

	if (match.tier === "money-industry") {
		const { industry, geo } = match;
		const title = `${industry.label} Marketing Company in ${geo.name} — Frameleads`;
		const description = `${industry.label} marketing company for ${geo.name} brands. CPC ${industry.avgCpcInr} ₹, CAC ${industry.avgCacInr} ₹, full-funnel engagement. Free 30-min audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "website" },
		};
	}

	const { service, industry, geo } = match;
	const title = `${service.label} for ${industry.label} in ${geo.name} — Frameleads Growth System™`;
	const description = `${service.label} for ${industry.label} in ${geo.name}. Local-economic + category-specific playbook. CAC ${industry.avgCacInr} ₹. Free audit.`;
	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: { title, description, url, type: "website" },
	};
}

export default async function ProgrammaticSlugPage({
	params,
}: {
	params: RouteParams;
}) {
	const { slug } = await params;
	const match = parseProgrammaticSlug(slug);
	if (!match) notFound();
	const url = `https://frameleads.com/${slug}`;

	switch (match.tier) {
		case 1:
			return <IndustryPillarPage industry={match.industry} url={url} />;
		case 3:
			return <Tier3Page service={match.service} geo={match.geo} url={url} />;
		case 4:
			return (
				<Tier4Page
					service={match.service}
					industry={match.industry}
					url={url}
				/>
			);
		case 5:
			return (
				<Tier5Page
					service={match.service}
					industry={match.industry}
					geo={match.geo}
					url={url}
				/>
			);
		case 11:
			return (
				<Tier11Page
					industry={match.industry}
					geo={match.geo}
					url={url}
				/>
			);
		case 13:
			return (
				<Tier13Page
					service={match.service}
					geo={match.geo}
					url={url}
				/>
			);
		case "money-service":
			return <MoneyPage service={match.service} geo={match.geo} />;
		case "money-industry":
			return <MoneyPage industry={match.industry} geo={match.geo} />;
	}
}
