import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tier2Page } from "@/components/templates/Tier2Page";
import { Tier12QuestionIndustry } from "@/components/templates/Tier12QuestionIndustry";
import { Tier14QuestionGeo } from "@/components/templates/Tier14QuestionGeo";
import { Tier15IndustryGlossary } from "@/components/templates/Tier15IndustryGlossary";
import { getSubService } from "@/lib/data/sub-services";
import {
	services,
	industries,
	getGeo,
	getIndustry,
} from "@/lib/data";
import {
	parseTwoSegmentSlug,
	TIER14_GEO_IDS,
	type Tier12Match,
	type Tier14Match,
	type Tier15Match,
} from "@/lib/data/slugs";
import { questions, getQuestion } from "@/lib/data/questions";
import { glossary } from "@/lib/data/glossary";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
	return [];
}

type RouteParams = Promise<{ slug: string; sub: string }>;

// Hand-coded labels for service pages not in the services.json data file.
const HAND_CODED_PARENT_LABELS: Record<string, string> = {
	branding: "Branding",
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
	const url = `https://frameleads.com/${slug}/${sub}`;

	// 1) Tier 2 sub-service (highest priority because it's a real product
	//    surface; takes precedence over programmatic two-segment matches).
	const subEntry = getSubService(slug, sub);
	if (subEntry) {
		const parentLabel = getParentLabel(slug) ?? slug;
		return {
			title: `${subEntry.label} for Indian SMBs (2026) | Frameleads`,
			description: subEntry.direct_answer.slice(0, 155),
			alternates: { canonical: url },
			openGraph: {
				title: `${subEntry.label} — ${parentLabel}`,
				description: subEntry.direct_answer.slice(0, 155),
				url,
				type: "website",
			},
		};
	}

	// 2) Programmatic two-segment tiers.
	const match = parseTwoSegmentSlug(slug, sub);
	if (!match) return {};

	if (match.tier === 12) {
		const { question, industry } = match;
		const title = `${question.title} — for ${industry.label} | Frameleads`;
		const description = `${question.intent} Calibrated to ${industry.name} unit economics (CAC ${industry.avgCacInr} ₹). Free 30-min audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "article" },
		};
	}

	if (match.tier === 14) {
		const { question, geo } = match;
		const title = `${question.title} — in ${geo.name} | Frameleads`;
		const description = `${question.intent} Local angle for ${geo.name}: industry mix ${geo.topIndustries.slice(0, 3).join(", ")}. Free 30-min audit.`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "article" },
		};
	}

	if (match.tier === 15) {
		const { entry, industry } = match;
		const title = `${entry.term} for ${industry.label} — definition + benchmarks | Frameleads`;
		const description = `${entry.expansion} for ${industry.label}. ${entry.definition.slice(0, 110)}…`;
		return {
			title,
			description,
			alternates: { canonical: url },
			openGraph: { title, description, url, type: "article" },
		};
	}

	return {};
}

function buildTier12Related(match: Tier12Match) {
	// Same question for other industries — top 5 alphabetical
	const relatedIndustriesForQuestion = industries
		.filter((i) => i.id !== match.industry.id)
		.slice(0, 6)
		.map((i) => ({
			href: `/${match.question.slug}/${i.id}`,
			label: `${match.question.title} — ${i.label}`,
		}));
	// Other questions for same industry — pick first 6 of same kind
	const relatedQuestionsInIndustry = questions
		.filter((q) => q.slug !== match.question.slug && q.kind === match.question.kind)
		.slice(0, 6)
		.map((q) => ({
			href: `/${q.slug}/${match.industry.id}`,
			label: `${q.title} — ${match.industry.label}`,
		}));
	return { relatedIndustriesForQuestion, relatedQuestionsInIndustry };
}

function buildTier14Related(match: Tier14Match) {
	const relatedGeosForQuestion = TIER14_GEO_IDS.filter((id) => id !== match.geo.id)
		.slice(0, 6)
		.map((id) => {
			const g = getGeo(id);
			return g
				? {
						href: `/${match.question.slug}/${id}`,
						label: `${match.question.title} — ${g.name}`,
					}
				: null;
		})
		.filter((x): x is { href: string; label: string } => Boolean(x));
	const relatedQuestionsInGeo = questions
		.filter((q) => q.slug !== match.question.slug && q.kind === match.question.kind)
		.slice(0, 6)
		.map((q) => ({
			href: `/${q.slug}/${match.geo.id}`,
			label: `${q.title} — ${match.geo.name}`,
		}));
	return { relatedGeosForQuestion, relatedQuestionsInGeo };
}

function buildTier15Related(match: Tier15Match) {
	const relatedIndustriesForTerm = industries
		.filter((i) => i.id !== match.industry.id)
		.slice(0, 6)
		.map((i) => ({
			href: `/${i.id}/${match.entry.id}`,
			label: `${match.entry.term} for ${i.label}`,
		}));
	const relatedTermsInIndustry = glossary
		.filter((g) => g.id !== match.entry.id)
		.slice(0, 6)
		.map((g) => ({
			href: `/${match.industry.id}/${g.id}`,
			label: `${g.term} for ${match.industry.label}`,
		}));
	return { relatedIndustriesForTerm, relatedTermsInIndustry };
}

export default async function SubServicePage({
	params,
}: {
	params: RouteParams;
}) {
	const { slug, sub } = await params;
	const url = `https://frameleads.com/${slug}/${sub}`;

	// 1) Tier 2 sub-service (existing product-surface route).
	const subEntry = getSubService(slug, sub);
	if (subEntry) {
		const parentLabel = getParentLabel(slug);
		if (!parentLabel) notFound();
		return <Tier2Page entry={subEntry} parentLabel={parentLabel} url={url} />;
	}

	// 2) Programmatic two-segment tiers.
	const match = parseTwoSegmentSlug(slug, sub);
	if (!match) notFound();

	if (match.tier === 12) {
		const related = buildTier12Related(match);
		return (
			<Tier12QuestionIndustry
				question={match.question}
				industry={match.industry}
				url={url}
				{...related}
			/>
		);
	}

	if (match.tier === 14) {
		const related = buildTier14Related(match);
		return (
			<Tier14QuestionGeo
				question={match.question}
				geo={match.geo}
				url={url}
				{...related}
			/>
		);
	}

	if (match.tier === 15) {
		const related = buildTier15Related(match);
		return (
			<Tier15IndustryGlossary
				entry={match.entry}
				industry={match.industry}
				url={url}
				{...related}
			/>
		);
	}

	notFound();
}
