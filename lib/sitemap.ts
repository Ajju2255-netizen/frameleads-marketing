import {
	allTier3Slugs,
	allTier4Slugs,
	allTier5Slugs,
	allTier11Slugs,
	allTier13Slugs,
	allIndustryPillarSlugs,
} from "./data/slugs";
import { glossary } from "./data/glossary";
import { comparisons } from "./data/comparisons";
import { questions } from "./data/questions";
import { subServices } from "./data/sub-services";

export const SITE_URL = "https://frameleads.com";

export type SitemapEntry = {
	loc: string;
	lastmod?: string;
	changefreq?:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never";
	priority?: number;
};

export type SitemapSegment = {
	id: string;
	tier: number | string;
	name: string;
	description: string;
	urls: () => SitemapEntry[];
};

const today = () => new Date().toISOString().slice(0, 10);

// ─────────────────────────────────────────────────────────────────
// Segment URL builders
// ─────────────────────────────────────────────────────────────────

const STATIC_PILLAR_SERVICE_SLUGS = [
	"seo-services",
	"google-ads",
	"linkedin-ads",
	"youtube-ads",
	"content-marketing",
	"social-media-marketing",
	"whatsapp-marketing",
	"conversion-rate-optimization",
	"branding",
	"website-development",
	"analytics-and-automations",
	"email-marketing-and-automation-services",
	"digital-marketing-services",
	"performance-marketing",
];

const STATIC_PILLAR_INDUSTRY_SLUGS = [
	"healthcare-and-medical",
	"technology-and-saas",
	"ecommerce",
	"financial-services",
	"digital-marketing-for-technology-and-saas",
	"real-estate-marketing-company-in-bangalore",
	"b2b-marketing-company-in-bangalore",
	"creative-advertising-company-in-bangalore",
	"seo-company-in-bangalore",
];

const STATIC_PILLAR_COUNTRY_SLUGS = [
	"digital-marketing-in-india",
	"digital-marketing-in-uae",
	"digital-marketing-in-dubai",
	"digital-marketing-in-saudi-arabia",
	"digital-marketing-in-singapore",
	"digital-marketing-in-canada",
	"digital-marketing-in-australia",
	"digital-marketing-in-unitedkingdom",
	"digital-marketing-in-unitedstates",
	"digital-marketing-in-brazil",
	"digital-marketing-in-france",
	"digital-marketing-in-germany",
	"digital-marketing-in-china",
];

const STATIC_HOME_AND_MISC = [
	{ slug: "", changefreq: "weekly", priority: 1.0 } as const,
	{ slug: "about", changefreq: "monthly", priority: 0.7 } as const,
	{ slug: "our-team", changefreq: "monthly", priority: 0.6 } as const,
	{ slug: "careers", changefreq: "monthly", priority: 0.5 } as const,
	{ slug: "contact", changefreq: "monthly", priority: 0.7 } as const,
	{ slug: "free-marketing-audit", changefreq: "monthly", priority: 0.9 } as const,
	{ slug: "blogs", changefreq: "weekly", priority: 0.7 } as const,
	{ slug: "industries", changefreq: "monthly", priority: 0.7 } as const,
	{ slug: "locations", changefreq: "monthly", priority: 0.7 } as const,
];

const STATIC_LEGAL = [
	{ slug: "privacy", changefreq: "yearly", priority: 0.3 } as const,
	{ slug: "terms", changefreq: "yearly", priority: 0.3 } as const,
	{ slug: "cookies", changefreq: "yearly", priority: 0.3 } as const,
];

const STATIC_TOOLS = [
	{ slug: "tools/roi-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/cac-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/ltv-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/cac-payback-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/ltv-cac-ratio-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/roas-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/ad-spend-planner", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/marketing-budget-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/burn-runway-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/email-list-value-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/whatsapp-roi-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/influencer-roi-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/seo-traffic-projector", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/channel-mix-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/diwali-budget-planner", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/conversion-rate-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/aov-uplift-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/rto-impact-calculator", changefreq: "monthly", priority: 0.8 } as const,
	{ slug: "tools/saas-pipeline-projector", changefreq: "monthly", priority: 0.8 } as const,
];

const STATIC_GLOSSARY_HUB = [
	{ slug: "glossary", changefreq: "weekly", priority: 0.8 } as const,
	{ slug: "glossary/cac", changefreq: "monthly", priority: 0.7 } as const,
	{ slug: "glossary/roas", changefreq: "monthly", priority: 0.7 } as const,
];

const STATIC_AD_PLATFORM_PAGES = [
	"meta-ads",
	"baidu-ads",
	"pinterest-ads",
	"shopify-ads",
	"snapchat-ads",
	"taboola-ads",
	"tiktok-ads",
	"yandex-ads",
];

const STATIC_ACADEMY = [
	"academy",
	"academy/about",
	"academy/contact",
	"academy/return-policy",
	"academy/terms",
	"academy/thank-you",
];

// Path-hygiene Phase 0 complete: legacy malformed routes (Meta-ads, Social-media-marketing,
// perforamance-marketing, ppc management) renamed to canonical lower-kebab with 301
// redirects wired in next.config.mjs. Sitemap now lists only canonical slugs.

function withDate(items: ReadonlyArray<{ slug: string; changefreq?: string; priority?: number }>): SitemapEntry[] {
	return items.map((it) => ({
		loc: `${SITE_URL}/${it.slug}`.replace(/\/$/, "") || `${SITE_URL}/`,
		lastmod: today(),
		changefreq: (it.changefreq as SitemapEntry["changefreq"]) ?? "monthly",
		priority: it.priority ?? 0.6,
	}));
}

// ─────────────────────────────────────────────────────────────────
// Segments — listed in order they appear in /sitemap.xml index
// ─────────────────────────────────────────────────────────────────

export const SEGMENTS: SitemapSegment[] = [
	{
		id: "0-pillars",
		tier: 0,
		name: "Brand pillars + reports",
		description: "Manifesto, methodology, and Tier-0 reports.",
		urls: () => withDate(STATIC_HOME_AND_MISC),
	},
	{
		id: "1-services",
		tier: 1,
		name: "Service pillars",
		description: "One per service.",
		urls: () =>
			withDate(
				STATIC_PILLAR_SERVICE_SLUGS.map((slug) => ({
					slug,
					changefreq: "monthly",
					priority: 0.9,
				})),
			),
	},
	{
		id: "1-industries",
		tier: 1,
		name: "Industry pillars",
		description: "One per industry vertical.",
		urls: () =>
			withDate(
				STATIC_PILLAR_INDUSTRY_SLUGS.map((slug) => ({
					slug,
					changefreq: "monthly",
					priority: 0.9,
				})),
			),
	},
	{
		id: "1-countries",
		tier: 1,
		name: "Country pillars",
		description: "Digital marketing in each priority country.",
		urls: () =>
			withDate(
				STATIC_PILLAR_COUNTRY_SLUGS.map((slug) => ({
					slug,
					changefreq: "monthly",
					priority: 0.9,
				})),
			),
	},
	{
		id: "3-service-geo-india",
		tier: 3,
		name: "Service × Geo (India)",
		description: "Programmatic — one per Service × Indian city intersection.",
		urls: () => {
			const cells = allTier3Slugs().filter(
				(c) => c.geo.country === undefined || c.geo.country === "India",
			);
			return cells.map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.7,
			}));
		},
	},
	{
		id: "3-service-geo-global",
		tier: 3,
		name: "Service × Geo (Global)",
		description: "Programmatic — one per Service × global city intersection.",
		urls: () => {
			const cells = allTier3Slugs().filter(
				(c) => c.geo.country !== undefined && c.geo.country !== "India",
			);
			return cells.map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.7,
			}));
		},
	},
	{
		id: "7-tools",
		tier: 7,
		name: "Tools / Calculators",
		description: "Free interactive tools.",
		urls: () => withDate(STATIC_TOOLS),
	},
	{
		id: "1-industry-pillars",
		tier: 1,
		name: "Industry pillars (programmatic)",
		description: "Programmatic — one per industry vertical (e.g. /real-estate-marketing).",
		urls: () =>
			allIndustryPillarSlugs().map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.85,
			})),
	},
	{
		id: "4-service-industry",
		tier: 4,
		name: "Service × Industry",
		description: "Programmatic — one per Service × Industry intersection.",
		urls: () =>
			allTier4Slugs().map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.7,
			})),
	},
	{
		id: "5-service-industry-geo",
		tier: 5,
		name: "Service × Industry × Geography",
		description:
			"Programmatic long-tail — one per Service × Industry × Geo intersection passing the demand gate.",
		urls: () =>
			allTier5Slugs().map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.6,
			})),
	},
	{
		id: "11-industry-geo",
		tier: 11,
		name: "Industry × Geography hubs",
		description: "Programmatic — one per Industry × Geo intersection (industry-marketing-in-city).",
		urls: () =>
			allTier11Slugs().map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.7,
			})),
	},
	{
		id: "13-pricing",
		tier: 13,
		name: "Service pricing pages",
		description: "Pricing pages: <service>-pricing and <service>-pricing-in-<city>.",
		urls: () =>
			allTier13Slugs().map((c) => ({
				loc: `${SITE_URL}/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.75,
			})),
	},
	{
		id: "2-sub-services",
		tier: 2,
		name: "Service deep-dives (sub-services)",
		description: "Sub-service detail pages at /[service]/[sub-service].",
		urls: () =>
			subServices.map((s) => ({
				loc: `${SITE_URL}/${s.parent_service}/${s.id}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.75,
			})),
	},
	{
		id: "6a-how-to",
		tier: 6,
		name: "How-to playbooks",
		description: "How-to playbooks targeting AIO + GEO citations.",
		urls: () => {
			const hub = withDate([
				{ slug: "how-to", changefreq: "weekly", priority: 0.8 },
			]);
			const items = questions
				.filter((q) => q.kind === "how-to")
				.map((q) => ({
					loc: `${SITE_URL}/how-to/${q.slug}`,
					lastmod: today(),
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return [...hub, ...items];
		},
	},
	{
		id: "6b-what-is",
		tier: 6,
		name: "What-is definitions",
		description: "Definitional explainers for marketing concepts and frameworks.",
		urls: () => {
			const hub = withDate([
				{ slug: "what-is", changefreq: "weekly", priority: 0.8 },
			]);
			const items = questions
				.filter((q) => q.kind === "what-is")
				.map((q) => ({
					loc: `${SITE_URL}/what-is/${q.slug}`,
					lastmod: today(),
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return [...hub, ...items];
		},
	},
	{
		id: "6c-why",
		tier: 6,
		name: "Why-rationale guides",
		description: "Strategic reasoning behind marketing decisions.",
		urls: () => {
			const hub = withDate([
				{ slug: "why", changefreq: "weekly", priority: 0.8 },
			]);
			const items = questions
				.filter((q) => q.kind === "why")
				.map((q) => ({
					loc: `${SITE_URL}/why/${q.slug}`,
					lastmod: today(),
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return [...hub, ...items];
		},
	},
	{
		id: "6d-is-it",
		tier: 6,
		name: "Is-it decision guides",
		description: "Decision-stage guides on whether a tactic, channel, or tool is worth it.",
		urls: () => {
			const hub = withDate([
				{ slug: "is-it", changefreq: "weekly", priority: 0.8 },
			]);
			const items = questions
				.filter((q) => q.kind === "is-it")
				.map((q) => ({
					loc: `${SITE_URL}/is-it/${q.slug}`,
					lastmod: today(),
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return [...hub, ...items];
		},
	},
	{
		id: "6e-best",
		tier: 6,
		name: "Best-of guides",
		description: "Best-of rankings of tools, channels, agencies, strategies.",
		urls: () => {
			const hub = withDate([
				{ slug: "best", changefreq: "weekly", priority: 0.8 },
			]);
			const items = questions
				.filter((q) => q.kind === "best")
				.map((q) => ({
					loc: `${SITE_URL}/best/${q.slug}`,
					lastmod: today(),
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return [...hub, ...items];
		},
	},
	{
		id: "6f-how-much",
		tier: 6,
		name: "How-much pricing guides",
		description: "Pricing-intent guides — cost bands and factors that move price.",
		urls: () => {
			const hub = withDate([
				{ slug: "how-much", changefreq: "weekly", priority: 0.8 },
			]);
			const items = questions
				.filter((q) => q.kind === "how-much")
				.map((q) => ({
					loc: `${SITE_URL}/how-much/${q.slug}`,
					lastmod: today(),
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return [...hub, ...items];
		},
	},
	{
		id: "8-glossary",
		tier: 8,
		name: "Glossary",
		description: "Definitions, formulas, India benchmarks.",
		urls: () => {
			const dynamic = glossary
				.filter((g) => g.id !== "cac" && g.id !== "roas")
				.map((g) => ({
					slug: `glossary/${g.id}`,
					changefreq: "monthly" as const,
					priority: 0.7,
				}));
			return withDate([...STATIC_GLOSSARY_HUB, ...dynamic]);
		},
	},
	{
		id: "9-comparison",
		tier: 9,
		name: "Comparison (vs)",
		description: "Decision-stage comparisons.",
		urls: () => {
			const hub = withDate([
				{ slug: "vs", changefreq: "weekly", priority: 0.7 },
			]);
			const items = comparisons.map((c) => ({
				loc: `${SITE_URL}/vs/${c.slug}`,
				lastmod: today(),
				changefreq: "monthly" as const,
				priority: 0.7,
			}));
			return [...hub, ...items];
		},
	},
	{
		id: "10-case-studies",
		tier: 10,
		name: "Case studies",
		description: "Client outcomes.",
		urls: () => [], // populated when /case-studies/ ships
	},
	{
		id: "ad-platforms",
		tier: "1b",
		name: "Ad platform pages",
		description: "Existing ad-platform-specific service pages.",
		urls: () =>
			withDate(
				STATIC_AD_PLATFORM_PAGES.map((slug) => ({
					slug,
					changefreq: "monthly",
					priority: 0.7,
				})),
			),
	},
	{
		id: "academy",
		tier: "x",
		name: "Academy",
		description: "Frameleads Academy product pages (separate funnel).",
		urls: () =>
			withDate(
				STATIC_ACADEMY.map((slug) => ({
					slug,
					changefreq: "monthly",
					priority: 0.6,
				})),
			),
	},
	{
		id: "legal",
		tier: "x",
		name: "Legal",
		description: "Privacy, terms, cookies.",
		urls: () => withDate(STATIC_LEGAL),
	},
];

// ─────────────────────────────────────────────────────────────────
// XML emitters
// ─────────────────────────────────────────────────────────────────

function escapeXml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export function urlsetXml(entries: SitemapEntry[]): string {
	const urls = entries
		.map(
			(e) =>
				`  <url>\n    <loc>${escapeXml(e.loc)}</loc>${
					e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ""
				}${
					e.changefreq ? `\n    <changefreq>${e.changefreq}</changefreq>` : ""
				}${
					e.priority !== undefined
						? `\n    <priority>${e.priority.toFixed(1)}</priority>`
						: ""
				}\n  </url>`,
		)
		.join("\n");
	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function sitemapIndexXml(): string {
	const items = SEGMENTS.filter((s) => s.urls().length > 0)
		.map(
			(s) =>
				`  <sitemap>\n    <loc>${SITE_URL}/sitemaps/${s.id}.xml</loc>\n    <lastmod>${today()}T00:00:00+00:00</lastmod>\n  </sitemap>`,
		)
		.join("\n");
	return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function getSegment(id: string): SitemapSegment | undefined {
	return SEGMENTS.find((s) => s.id === id);
}
