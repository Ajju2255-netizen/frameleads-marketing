import {
	services,
	industries,
	geosAll,
	getIndustry,
	getGeo,
	type Service,
	type Industry,
	type Geo,
} from "./index";
import { questions, getQuestion, type QuestionEntry } from "./questions";
import { glossary, getGlossaryEntry, type GlossaryEntry } from "./glossary";

/**
 * Existing static routes that should NOT be intercepted by the
 * programmatic [slug] catchall. Listing them here lets us filter
 * generateStaticParams cleanly. Keep in sync with `app/`.
 */
export const RESERVED_SLUGS = new Set<string>([
	"about",
	"academy",
	"analytics-and-automations",
	"api",
	"b2b-marketing-company-in-bangalore",
	"baidu-ads",
	"blogs",
	"branding",
	"careers",
	"components",
	"contact",
	"content-marketing",
	"conversion-rate-optimization",
	"cookies",
	"creative-advertising-company-in-bangalore",
	"digital-marketing-for-technology-and-saas",
	"digital-marketing-services",
	"ecommerce",
	"email-marketing-and-automation-services",
	"financial-services",
	"editorial-policy",
	"frameleads-growth-system",
	"free-marketing-audit",
	"glossary",
	"how-we-audit",
	"reports",
	"google-ads",
	"healthcare-and-medical",
	"industries",
	"linkedin-ads",
	"locations",
	"meta-ads",
	"our-team",
	"performance-marketing",
	"performance-marketing-company-in-bangalore",
	"performance-marketing-company-in-dubai",
	"performance-marketing-company-in-mumbai",
	"pinterest-ads",
	"ppc-management",
	"privacy",
	"real-estate-marketing-company-in-bangalore",
	"resources",
	"reports",
	"seo-company-in-bangalore",
	"seo-company-in-dubai",
	"seo-company-in-mumbai",
	"seo-services",
	"shopify-ads",
	"sitemap",
	"sitemaps",
	"snapchat-ads",
	"social-media-marketing",
	"taboola-ads",
	"technology-and-saas",
	"terms",
	"tiktok-ads",
	"tools",
	"vs",
	"website-development",
	"whatsapp-marketing",
	"yandex-ads",
	"youtube-ads",
	"how-to",
	"what-is",
	"why",
	"is-it",
	"best",
	"how-much",
	"digital-marketing-in-australia",
	"digital-marketing-in-bangalore",
	"digital-marketing-in-brazil",
	"digital-marketing-in-canada",
	"digital-marketing-in-china",
	"digital-marketing-in-dubai",
	"digital-marketing-in-france",
	"digital-marketing-in-germany",
	"digital-marketing-in-india",
	"digital-marketing-in-saudi-arabia",
	"digital-marketing-in-singapore",
	"digital-marketing-in-uae",
	"digital-marketing-in-unitedkingdom",
	"digital-marketing-in-unitedstates",
]);

export type Tier3Match = {
	tier: 3;
	service: Service;
	geo: Geo;
	slug: string;
};

export type Tier4Match = {
	tier: 4;
	service: Service;
	industry: Industry;
	slug: string;
};

export type Tier5Match = {
	tier: 5;
	service: Service;
	industry: Industry;
	geo: Geo;
	slug: string;
};

export type Tier1IndustryMatch = {
	tier: 1;
	industry: Industry;
	slug: string;
};

export type Tier11Match = {
	tier: 11;
	industry: Industry;
	geo: Geo;
	slug: string;
};

/**
 * Money-page Service × Geo match.
 * URL pattern: /{service-money-slug}-company-in-{geo-id}
 * where service-money-slug strips trailing "-services" from service.id.
 */
export type MoneyServiceMatch = {
	tier: "money-service";
	service: Service;
	geo: Geo;
	slug: string;
};

/**
 * Money-page Industry × Geo match.
 * URL pattern: /{industry-id}-marketing-company-in-{geo-id}
 */
export type MoneyIndustryMatch = {
	tier: "money-industry";
	industry: Industry;
	geo: Geo;
	slug: string;
};

export type Tier13Match = {
	tier: 13;
	service: Service;
	geo?: Geo;
	slug: string;
};

export type Tier12Match = {
	tier: 12;
	question: QuestionEntry;
	industry: Industry;
	slug: string;
	sub: string;
};

export type Tier14Match = {
	tier: 14;
	question: QuestionEntry;
	geo: Geo;
	slug: string;
	sub: string;
};

export type Tier15Match = {
	tier: 15;
	industry: Industry;
	entry: GlossaryEntry;
	slug: string;
	sub: string;
};

export type ProgrammaticMatch =
	| Tier3Match
	| Tier4Match
	| Tier5Match
	| Tier1IndustryMatch
	| Tier11Match
	| Tier13Match
	| MoneyServiceMatch
	| MoneyIndustryMatch;

export type TwoSegmentMatch = Tier12Match | Tier14Match | Tier15Match;

/**
 * Commercial-priority cities for Tier 14 (Question × Geo). Capped at 12 to keep
 * cell count workable for first-pass content quality reviews; expand later by
 * adding to this list.
 */
export const TIER14_GEO_IDS: ReadonlyArray<string> = [
	// India tier-1 (8)
	"mumbai",
	"bangalore",
	"delhi-ncr",
	"chennai",
	"hyderabad",
	"pune",
	"ahmedabad",
	"kolkata",
	// Global commercial-priority (4)
	"dubai",
	"singapore",
	"london",
	"new-york",
];

const sortedServicesDesc = () =>
	[...services].sort((a, b) => b.id.length - a.id.length);
const sortedIndustriesDesc = () =>
	[...industries].sort((a, b) => b.id.length - a.id.length);

/**
 * Parse `[service]-for-[industry]-in-[city]` → Tier 5.
 */
export function parseTier5Slug(slug: string): Tier5Match | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-for-")) return null;
	if (!slug.includes("-in-")) return null;

	for (const svc of sortedServicesDesc()) {
		const svcPrefix = `${svc.id}-for-`;
		if (!slug.startsWith(svcPrefix)) continue;
		const afterSvc = slug.slice(svcPrefix.length);

		for (const ind of sortedIndustriesDesc()) {
			const indWithIn = `${ind.id}-in-`;
			if (!afterSvc.startsWith(indWithIn)) continue;
			const geoSlug = afterSvc.slice(indWithIn.length);
			const geo = getGeo(geoSlug);
			if (geo) {
				return { tier: 5, service: svc, industry: ind, geo, slug };
			}
		}
	}
	return null;
}

/**
 * Parse `[service]-in-[city]` → Tier 3 (Service × Geo).
 */
export function parseTier3Slug(slug: string): Tier3Match | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-in-")) return null;
	if (slug.includes("-for-")) return null; // Tier 4/5 territory
	if (slug.includes("-marketing-in-")) return null; // Tier 11 territory
	if (slug.includes("-pricing-in-")) return null; // Tier 13 territory

	for (const svc of sortedServicesDesc()) {
		const prefix = `${svc.id}-in-`;
		if (slug.startsWith(prefix)) {
			const geoSlug = slug.slice(prefix.length);
			const geo = getGeo(geoSlug);
			if (geo) {
				return { tier: 3, service: svc, geo, slug };
			}
		}
	}

	return null;
}

/**
 * Parse `[service]-for-[industry]` → Tier 4 (Service × Industry).
 */
export function parseTier4Slug(slug: string): Tier4Match | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-for-")) return null;
	if (slug.includes("-in-")) return null; // Tier 5 territory

	for (const svc of sortedServicesDesc()) {
		const prefix = `${svc.id}-for-`;
		if (slug.startsWith(prefix)) {
			const industrySlug = slug.slice(prefix.length);
			const industry = getIndustry(industrySlug);
			if (industry) {
				return { tier: 4, service: svc, industry, slug };
			}
		}
	}

	return null;
}

/**
 * Parse `[industry]-marketing` → Tier 1 industry pillar.
 */
export function parseTier1IndustrySlug(
	slug: string,
): Tier1IndustryMatch | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.endsWith("-marketing")) return null;
	const industryId = slug.slice(0, -"-marketing".length);
	const industry = getIndustry(industryId);
	if (!industry) return null;
	return { tier: 1, industry, slug };
}

/**
 * Parse `[service]-pricing` or `[service]-pricing-in-[city]` → Tier 13.
 * Must be parsed BEFORE Tier 3 since pricing-in-city has -in-.
 */
export function parseTier13Slug(slug: string): Tier13Match | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-pricing")) return null;
	if (slug.includes("-for-")) return null;
	if (slug.includes("-marketing-in-")) return null;

	for (const svc of sortedServicesDesc()) {
		// City variant: <service>-pricing-in-<city>
		const cityPrefix = `${svc.id}-pricing-in-`;
		if (slug.startsWith(cityPrefix)) {
			const geoSlug = slug.slice(cityPrefix.length);
			const geo = getGeo(geoSlug);
			if (geo) return { tier: 13, service: svc, geo, slug };
		}
		// Plain variant: <service>-pricing
		const plain = `${svc.id}-pricing`;
		if (slug === plain) {
			return { tier: 13, service: svc, slug };
		}
	}
	return null;
}

/**
 * Parse `[industry]-marketing-in-[city]` → Tier 11 (Industry × Geo hub).
 * Must be parsed BEFORE Tier 3 since the slug pattern overlaps:
 *   "real-estate-marketing-in-mumbai" should match T11 not T3.
 */
export function parseTier11Slug(slug: string): Tier11Match | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-marketing-in-")) return null;
	if (slug.includes("-for-")) return null;

	for (const ind of sortedIndustriesDesc()) {
		const prefix = `${ind.id}-marketing-in-`;
		if (slug.startsWith(prefix)) {
			const geoSlug = slug.slice(prefix.length);
			const geo = getGeo(geoSlug);
			if (geo) {
				return { tier: 11, industry: ind, geo, slug };
			}
		}
	}
	return null;
}

/**
 * Service money-slug helper. Service.id "seo-services" → "seo" for the
 * money-page URL pattern (we use the shorter form because that's what buyers
 * type into Google: "seo company in mumbai", not "seo services company in
 * mumbai"). All other service.ids pass through unchanged.
 */
export function serviceMoneySlug(s: Service): string {
	if (s.id === "seo-services") return "seo";
	return s.id;
}

/**
 * Parse `/{service-money-slug}-company-in-{geo-id}` → Money × Service × Geo.
 *
 * Examples:
 *   seo-company-in-mumbai               → seo-services × Mumbai
 *   google-ads-company-in-delhi-ncr     → google-ads  × Delhi NCR
 *   performance-marketing-company-in-pune → performance-marketing × Pune
 */
export function parseMoneyServiceSlug(slug: string): MoneyServiceMatch | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-company-in-")) return null;

	// Order-sensitive: try longer service prefixes first so e.g.
	// "performance-marketing-company-in-..." matches "performance-marketing"
	// before the (non-existent) "performance" service.
	for (const svc of sortedServicesDesc()) {
		const moneySlug = serviceMoneySlug(svc);
		const prefix = `${moneySlug}-company-in-`;
		if (slug.startsWith(prefix)) {
			const geoSlug = slug.slice(prefix.length);
			const geo = getGeo(geoSlug);
			if (geo) {
				return { tier: "money-service", service: svc, geo, slug };
			}
		}
	}
	return null;
}

/**
 * Parse `/{industry-id}-marketing-company-in-{geo-id}` → Money × Industry × Geo.
 *
 * Examples:
 *   real-estate-marketing-company-in-mumbai   → real-estate × Mumbai
 *   healthcare-marketing-company-in-bangalore → healthcare  × Bangalore
 *   b2b-saas-marketing-company-in-pune        → b2b-saas    × Pune
 */
export function parseMoneyIndustrySlug(slug: string): MoneyIndustryMatch | null {
	if (RESERVED_SLUGS.has(slug)) return null;
	if (!slug.includes("-marketing-company-in-")) return null;

	for (const ind of sortedIndustriesDesc()) {
		const prefix = `${ind.id}-marketing-company-in-`;
		if (slug.startsWith(prefix)) {
			const geoSlug = slug.slice(prefix.length);
			const geo = getGeo(geoSlug);
			if (geo) {
				return { tier: "money-industry", industry: ind, geo, slug };
			}
		}
	}
	return null;
}

export function parseProgrammaticSlug(slug: string): ProgrammaticMatch | null {
	return (
		// Money pages win over generic Tier 11 / Tier 3 because their URL
		// pattern is strictly more specific (contains "-company-in-").
		parseMoneyIndustrySlug(slug) ??
		parseMoneyServiceSlug(slug) ??
		parseTier13Slug(slug) ??
		parseTier5Slug(slug) ??
		parseTier11Slug(slug) ??
		parseTier4Slug(slug) ??
		parseTier3Slug(slug) ??
		parseTier1IndustrySlug(slug)
	);
}

/**
 * Money page generators — enumerate Service × Geo and Industry × Geo cells.
 *
 * Each generator opens every service / industry to every supported geo. The
 * canonical MoneyPage template demand-filters within (e.g., FAQs surface
 * only the most relevant top industries per geo). The breadth is intentional
 * for organic capture across the agency-hiring SERP cohort.
 */
export function allMoneyServiceSlugs(): MoneyServiceMatch[] {
	const out: MoneyServiceMatch[] = [];
	for (const svc of services) {
		const moneySlug = serviceMoneySlug(svc);
		for (const geo of geosAll) {
			const slug = `${moneySlug}-company-in-${geo.id}`;
			if (RESERVED_SLUGS.has(slug)) continue;
			out.push({ tier: "money-service", service: svc, geo, slug });
		}
	}
	return out;
}

export function allMoneyIndustrySlugs(): MoneyIndustryMatch[] {
	const out: MoneyIndustryMatch[] = [];
	for (const ind of industries) {
		for (const geo of geosAll) {
			const slug = `${ind.id}-marketing-company-in-${geo.id}`;
			if (RESERVED_SLUGS.has(slug)) continue;
			out.push({ tier: "money-industry", industry: ind, geo, slug });
		}
	}
	return out;
}

/**
 * Tier 3 generator — Service × Geo.
 *
 * Opens every service to every supported geo. Page templates demand-filter
 * within (e.g., FAQs surface only relevant industries per city). The breadth
 * is intentional for organic capture across India + global priority markets.
 */
export function allTier3Slugs(): Tier3Match[] {
	const out: Tier3Match[] = [];
	for (const svc of services) {
		for (const geo of geosAll) {
			const slug = `${svc.id}-in-${geo.id}`;
			if (RESERVED_SLUGS.has(slug)) continue;
			out.push({ tier: 3, service: svc, geo, slug });
		}
	}
	return out;
}

/**
 * Tier 4 generator — Service × Industry.
 */
export function allTier4Slugs(): Tier4Match[] {
	const out: Tier4Match[] = [];
	for (const svc of services) {
		for (const ind of industries) {
			if (!ind.primaryServices.includes(svc.id)) continue;
			const slug = `${svc.id}-for-${ind.id}`;
			if (RESERVED_SLUGS.has(slug)) continue;
			out.push({ tier: 4, service: svc, industry: ind, slug });
		}
	}
	return out;
}

/**
 * Tier 5 generator — Service × Industry × Geo.
 *
 * Demand gate:
 *   1. Service must be in industry's primaryServices (Tier 4 fit).
 *   2. Geo: industry's explicit geoConcentration list. For tier-A (high-priority
 *      Indian) industries, every Indian tier-1 city joins as a fallback — the
 *      category demonstrably has demand across all metros even when not in the
 *      original concentration list.
 */
export function allTier5Slugs(): Tier5Match[] {
	const out: Tier5Match[] = [];
	const seen = new Set<string>();
	const indianTier1: string[] = geosAll
		.filter(
			(g) => (g.country === undefined || g.country === "India") && g.tier === 1,
		)
		.map((g) => g.id);
	const indianTier12: string[] = geosAll
		.filter(
			(g) => (g.country === undefined || g.country === "India") && g.tier <= 2,
		)
		.map((g) => g.id);
	const globalTier1: string[] = geosAll
		.filter((g) => g.country !== undefined && g.country !== "India" && g.tier === 1)
		.map((g) => g.id);
	const globalTier12: string[] = geosAll
		.filter((g) => g.country !== undefined && g.country !== "India" && g.tier <= 2)
		.map((g) => g.id);
	for (const ind of industries) {
		for (const sid of ind.primaryServices) {
			const svc = services.find((s) => s.id === sid);
			if (!svc) continue;
			const concentrationIds = new Set<string>(ind.geoConcentration);
			// All industries: include Indian tier-1+2 metros (loosened gate B5).
			for (const gid of indianTier12) concentrationIds.add(gid);
			// Tier-A industries (D2C, SaaS, healthcare, real-estate, edtech, fintech,
			// healthtech, jewelry) also include global tier-1+2 — these categories sell
			// to global ICPs and warrant city-level long-tail.
			if (ind.tier === "A") {
				for (const gid of globalTier12) concentrationIds.add(gid);
			} else if (ind.tier === "B") {
				// Tier-B industries: global tier-1 only.
				for (const gid of globalTier1) concentrationIds.add(gid);
			}
			for (const gid of concentrationIds) {
				const geo = getGeo(gid);
				if (!geo) continue;
				const slug = `${svc.id}-for-${ind.id}-in-${geo.id}`;
				if (RESERVED_SLUGS.has(slug)) continue;
				if (seen.has(slug)) continue;
				seen.add(slug);
				out.push({ tier: 5, service: svc, industry: ind, geo, slug });
			}
		}
	}
	return out;
}

/**
 * Tier 1 industry pillar generator.
 * One per industry at /[industry-id]-marketing.
 */
export function allIndustryPillarSlugs(): Tier1IndustryMatch[] {
	const out: Tier1IndustryMatch[] = [];
	for (const ind of industries) {
		const slug = `${ind.id}-marketing`;
		if (RESERVED_SLUGS.has(slug)) continue;
		out.push({ tier: 1, industry: ind, slug });
	}
	return out;
}

/**
 * Tier 13 generator — Pricing pages.
 * Slug: `/[service]-pricing` (12 cells) and `/[service]-pricing-in-[city]` (~480 cells).
 */
export function allTier13Slugs(): Tier13Match[] {
	const out: Tier13Match[] = [];
	const seen = new Set<string>();

	// Plain pricing per service
	for (const svc of services) {
		const slug = `${svc.id}-pricing`;
		if (RESERVED_SLUGS.has(slug)) continue;
		if (seen.has(slug)) continue;
		seen.add(slug);
		out.push({ tier: 13, service: svc, slug });
	}

	// Top-25 cities × top-services pricing
	const top25Cities: string[] = [
		"mumbai", "bangalore", "delhi-ncr", "hyderabad", "chennai", "pune",
		"ahmedabad", "kolkata", "gurgaon", "noida", "jaipur", "kochi",
		"coimbatore", "indore", "chandigarh", "lucknow", "surat", "nashik",
		"vadodara", "nagpur", "mysore", "bhopal", "patna", "kanpur",
		"thiruvananthapuram",
	];
	for (const svc of services) {
		for (const cityId of top25Cities) {
			const geo = getGeo(cityId);
			if (!geo) continue;
			const slug = `${svc.id}-pricing-in-${cityId}`;
			if (RESERVED_SLUGS.has(slug)) continue;
			if (seen.has(slug)) continue;
			seen.add(slug);
			out.push({ tier: 13, service: svc, geo, slug });
		}
	}

	return out;
}

/**
 * Tier 11 generator — Industry × Geo hubs.
 * Slug: `/[industry-id]-marketing-in-[city]`
 *
 * Demand gate:
 *   1. All industries × Indian tier-1+2 cities.
 *   2. Tier-A industries × global tier-1+2 cities additionally.
 */
export function allTier11Slugs(): Tier11Match[] {
	const out: Tier11Match[] = [];
	const seen = new Set<string>();
	const indianTier12: string[] = geosAll
		.filter(
			(g) => (g.country === undefined || g.country === "India") && g.tier <= 2,
		)
		.map((g) => g.id);
	const globalTier12: string[] = geosAll
		.filter((g) => g.country !== undefined && g.country !== "India" && g.tier <= 2)
		.map((g) => g.id);
	for (const ind of industries) {
		const concentrationIds = new Set<string>(ind.geoConcentration);
		for (const gid of indianTier12) concentrationIds.add(gid);
		if (ind.tier === "A") {
			for (const gid of globalTier12) concentrationIds.add(gid);
		}
		for (const gid of concentrationIds) {
			const geo = getGeo(gid);
			if (!geo) continue;
			const slug = `${ind.id}-marketing-in-${geo.id}`;
			if (RESERVED_SLUGS.has(slug)) continue;
			if (seen.has(slug)) continue;
			seen.add(slug);
			out.push({ tier: 11, industry: ind, geo, slug });
		}
	}
	return out;
}

export function allProgrammaticSlugs(): ProgrammaticMatch[] {
	return [
		...allIndustryPillarSlugs(),
		...allTier3Slugs(),
		...allTier4Slugs(),
		...allTier5Slugs(),
	];
}

// ───────────────────────────────────────────────────────────────────────────
// Two-segment programmatic tiers (12, 14, 15)
// Routed via app/[slug]/[sub]/page.tsx. The parser distinguishes based on
// whether the head slug matches a question-id / industry-id and the sub
// matches an industry-id / geo-id / glossary-term-id.
// ───────────────────────────────────────────────────────────────────────────

/**
 * Parse `/{question-slug}/{industry-id}` → Tier 12 (Question × Industry).
 */
export function parseTier12(slug: string, sub: string): Tier12Match | null {
	const question = getQuestion(slug);
	if (!question) return null;
	const industry = getIndustry(sub);
	if (!industry) return null;
	return { tier: 12, question, industry, slug, sub };
}

/**
 * Parse `/{question-slug}/{geo-id}` → Tier 14 (Question × Geo).
 * Restricted to TIER14_GEO_IDS so the URL space stays commercial-priority.
 */
export function parseTier14(slug: string, sub: string): Tier14Match | null {
	const question = getQuestion(slug);
	if (!question) return null;
	if (!TIER14_GEO_IDS.includes(sub)) return null;
	const geo = getGeo(sub);
	if (!geo) return null;
	return { tier: 14, question, geo, slug, sub };
}

/**
 * Parse `/{industry-id}/{glossary-term}` → Tier 15 (Industry × Glossary).
 */
export function parseTier15(slug: string, sub: string): Tier15Match | null {
	const industry = getIndustry(slug);
	if (!industry) return null;
	const entry = getGlossaryEntry(sub);
	if (!entry) return null;
	return { tier: 15, industry, entry, slug, sub };
}

/**
 * Two-segment dispatcher. Resolution order:
 *   1. Tier 15 (industry head × glossary sub) — disambiguates first because
 *      industry ids and question slugs cannot collide today.
 *   2. Tier 12 (question head × industry sub)
 *   3. Tier 14 (question head × priority-geo sub)
 * Sub-services (Tier 2) are still handled by app/[slug]/[sub]/page.tsx
 * before this function is called for non-service heads.
 */
export function parseTwoSegmentSlug(
	slug: string,
	sub: string,
): TwoSegmentMatch | null {
	return (
		parseTier15(slug, sub) ?? parseTier12(slug, sub) ?? parseTier14(slug, sub)
	);
}

/**
 * Tier 12 generator — Question × Industry. Full cross-product (~2,046 × 33).
 */
export function allTier12Slugs(): Tier12Match[] {
	const out: Tier12Match[] = [];
	for (const q of questions) {
		for (const ind of industries) {
			out.push({
				tier: 12,
				question: q,
				industry: ind,
				slug: q.slug,
				sub: ind.id,
			});
		}
	}
	return out;
}

/**
 * Tier 14 generator — Question × Geo across TIER14_GEO_IDS (~2,046 × 12).
 */
export function allTier14Slugs(): Tier14Match[] {
	const out: Tier14Match[] = [];
	for (const q of questions) {
		for (const gid of TIER14_GEO_IDS) {
			const geo = getGeo(gid);
			if (!geo) continue;
			out.push({
				tier: 14,
				question: q,
				geo,
				slug: q.slug,
				sub: gid,
			});
		}
	}
	return out;
}

/**
 * Tier 15 generator — Industry × Glossary (~33 × 87).
 */
export function allTier15Slugs(): Tier15Match[] {
	const out: Tier15Match[] = [];
	for (const ind of industries) {
		for (const entry of glossary) {
			out.push({
				tier: 15,
				industry: ind,
				entry,
				slug: ind.id,
				sub: entry.id,
			});
		}
	}
	return out;
}
