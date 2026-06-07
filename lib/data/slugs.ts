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
	"free-marketing-audit",
	"glossary",
	"google-ads",
	"healthcare-and-medical",
	"industries",
	"linkedin-ads",
	"locations",
	"meta-ads",
	"our-team",
	"performance-marketing",
	"pinterest-ads",
	"ppc-management",
	"privacy",
	"real-estate-marketing-company-in-bangalore",
	"resources",
	"reports",
	"seo-company-in-bangalore",
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

export type Tier13Match = {
	tier: 13;
	service: Service;
	geo?: Geo;
	slug: string;
};

export type ProgrammaticMatch =
	| Tier3Match
	| Tier4Match
	| Tier5Match
	| Tier1IndustryMatch
	| Tier11Match
	| Tier13Match;

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

export function parseProgrammaticSlug(slug: string): ProgrammaticMatch | null {
	return (
		parseTier13Slug(slug) ??
		parseTier5Slug(slug) ??
		parseTier11Slug(slug) ??
		parseTier4Slug(slug) ??
		parseTier3Slug(slug) ??
		parseTier1IndustrySlug(slug)
	);
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
