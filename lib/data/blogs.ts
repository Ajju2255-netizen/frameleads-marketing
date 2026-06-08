/**
 * Blog content loader + types.
 *
 * Each post is a TypeScript file under `content/blogs/` that exports a typed
 * BlogPost value. We register them explicitly here so the bundler can tree-
 * shake unused posts and TypeScript catches typos at build time. Posts use a
 * structured section array for body content so:
 *
 *   1. AI engines can extract individual sections cleanly for citation.
 *   2. Renderers can apply consistent typography + spacing per section type.
 *   3. We can swap to MDX later without rewriting post content (the section
 *      schema is a strict subset of what MDX gives us).
 */

import type { Reference } from "@/components/templates/ReferencesBlock";
import type { FAQItem } from "@/components/templates/FAQBlock";
import { AUTHORS, type Author } from "./authors";

// Body sections — strict union so the renderer can branch exhaustively.
export type Section =
	| { type: "h2"; text: string; id?: string }
	| { type: "h3"; text: string; id?: string }
	| { type: "p"; text: string }
	| { type: "ul"; items: string[] }
	| { type: "ol"; items: string[] }
	| { type: "callout"; tone: "info" | "warn" | "tldr"; title?: string; text: string }
	| { type: "quote"; text: string; attribution?: string }
	| { type: "stat-bar"; stats: { label: string; value: string }[] }
	| { type: "code"; lang?: string; text: string }
	| { type: "divider" };

export type BlogPostType =
	| "best-in-city"
	| "cost-in-city"
	| "how-to-hire"
	| "vs"
	| "questions-to-ask"
	| "definitive-guide"
	| "city-context"
	| "pillar";

/** Pillar slugs — the 8 editorial clusters. Used in `pillarSlug` to anchor spokes. */
export type PillarSlug =
	| "ai-search-and-geo"
	| "performance-marketing-operations"
	| "seo-operations"
	| "attribution-and-measurement"
	| "lifecycle-and-retention"
	| "vertical-playbooks"
	| "geo-and-city-playbooks"
	| "frameleads-methodology";

export type BlogPost = {
	slug: string;
	/** Human-readable title (used as <h1> and meta title) */
	title: string;
	/** ≤ 160 chars; meta description + card subtitle */
	description: string;
	/** Author id; must exist in AUTHORS registry */
	authorId: string;
	/** ISO date `YYYY-MM-DD` */
	datePublished: string;
	/** ISO date `YYYY-MM-DD`; defaults to datePublished if absent */
	dateModified?: string;
	/** One of the 8 post types in our editorial system */
	type: BlogPostType;
	/** Free-text category used in the card UI (e.g. "Performance Marketing") */
	category: string;
	/** Slugified category for /blogs/categories/[slug] routing (e.g. "performance-marketing") */
	categorySlug?: string;
	/** Primary keyword target for SEO */
	primaryKeyword: string;
	/** Topical cluster this post belongs to (for internal linking) */
	cluster: string;
	/** 3-5 short bullets shown at the top of the post */
	tldr: string[];
	/** Approximate reading time, e.g. "8 min" */
	readTime: string;
	/** Hero image path (defaults to /og-default.png) */
	hero?: string;
	/** Structured body content */
	body: Section[];
	/** Standalone FAQs at end of post — included in FAQPage schema */
	faqs: FAQItem[];
	/** External citations for E-E-A-T */
	references: Reference[];
	/** Related post slugs (must exist in the registry) */
	relatedSlugs?: string[];
	/** Optional explicit CTA override — defaults to free-marketing-audit */
	ctaHref?: string;
	ctaLabel?: string;

	// ─── Cross-linking fields (Workstream F) ───
	/** Service IDs from services.json this post is most relevant to (1-3) */
	serviceRefs?: string[];
	/** Industry IDs this post is most relevant to (0-2) */
	industryRefs?: string[];
	/** Geo slug (e.g. "mumbai", "bangalore") if post is city-specific */
	cityTag?: string;
	/** Pillar this post belongs to. When set, post renders pillar breadcrumb + back-link. */
	pillarSlug?: PillarSlug;
};

// ───────────────────────────── Registry ─────────────────────────────
// Each post is imported explicitly below. To add a post:
//   1. Create content/blogs/<slug>.ts exporting `post: BlogPost`.
//   2. Add it to BLOG_POSTS here.
// Order in this array is irrelevant — the list page sorts by datePublished.

import { post as performanceBangalore2026 } from "@/content/blogs/best-performance-marketing-agency-bangalore-2026";
import { post as d2cMarketingBudget2026 } from "@/content/blogs/marketing-budget-indian-d2c-2026";
import { post as hireRealEstateBangalore } from "@/content/blogs/how-to-hire-real-estate-marketing-agency-bangalore";
import { post as seoVsPerformance } from "@/content/blogs/seo-vs-performance-marketing-indian-d2c";
import { post as questionsToAskAgency } from "@/content/blogs/10-questions-to-ask-performance-marketing-agency-india";
import { post as aiOverviewsGeoPlaybook2026 } from "@/content/blogs/ai-overviews-geo-india-operator-playbook-2026";
import { post as mumbaiPerformancePlaybook2026 } from "@/content/blogs/mumbai-performance-marketing-operator-playbook-2026";
import { post as bestSeoAgencyMumbai2026 } from "@/content/blogs/best-seo-agency-mumbai-2026";

// ── Workstream D — 16 starter spokes (2 per pillar) ──
import { post as perplexitySeoPlaybook } from "@/content/blogs/perplexity-seo-operator-playbook-2026";
import { post as aiOverviewsCitationMeasurement } from "@/content/blogs/google-ai-overviews-citation-share-measurement";
import { post as metaCapiSetupGuide } from "@/content/blogs/meta-capi-2026-setup-guide";
import { post as performanceMaxIndiaD2c } from "@/content/blogs/performance-max-architecture-india-d2c";
import { post as coreWebVitals2026 } from "@/content/blogs/core-web-vitals-2026-operator-guide";
import { post as programmaticSeoArchitecture } from "@/content/blogs/programmatic-seo-10k-pages-architecture";
import { post as gtmServerSideArchitecture } from "@/content/blogs/gtm-server-side-architecture-2026";
import { post as postIosAttribution } from "@/content/blogs/post-ios-attribution-survival-guide-2026";
import { post as whatsappBusinessApiLifecycle } from "@/content/blogs/whatsapp-business-api-india-lifecycle";
import { post as emailAutomationFlowsD2c } from "@/content/blogs/email-automation-flows-d2c-2026";
import { post as healthcareMarketingIndia } from "@/content/blogs/healthcare-marketing-india-2026";
import { post as b2bSaasMarketingIndia } from "@/content/blogs/b2b-saas-marketing-india-2026";
import { post as delhiNcrPerformance } from "@/content/blogs/delhi-ncr-performance-marketing-2026";
import { post as hyderabadMarketingPlaybook } from "@/content/blogs/hyderabad-marketing-operator-playbook-2026";
import { post as frameleadsMapPhase } from "@/content/blogs/frameleads-map-phase-icp-discovery";
import { post as frameleadsMachinePhase } from "@/content/blogs/frameleads-machine-phase-acquisition-engine";

export const BLOG_POSTS: BlogPost[] = [
	// 8 existing structured posts
	performanceBangalore2026,
	d2cMarketingBudget2026,
	hireRealEstateBangalore,
	seoVsPerformance,
	questionsToAskAgency,
	aiOverviewsGeoPlaybook2026,
	mumbaiPerformancePlaybook2026,
	bestSeoAgencyMumbai2026,
	// 16 starter spokes
	perplexitySeoPlaybook,
	aiOverviewsCitationMeasurement,
	metaCapiSetupGuide,
	performanceMaxIndiaD2c,
	coreWebVitals2026,
	programmaticSeoArchitecture,
	gtmServerSideArchitecture,
	postIosAttribution,
	whatsappBusinessApiLifecycle,
	emailAutomationFlowsD2c,
	healthcareMarketingIndia,
	b2bSaasMarketingIndia,
	delhiNcrPerformance,
	hyderabadMarketingPlaybook,
	frameleadsMapPhase,
	frameleadsMachinePhase,
];

// ───────────────────────── Programmatic blog union ─────────────────────────
// Programmatic generators live in `./programmatic-blogs.ts`. They produce
// BlogPost objects from seed data (services × cities). Imported here so the
// registry-level helpers (getBlogPost / sortedBlogPosts / generateStaticParams)
// see them as first-class posts.

import {
	allProgrammaticBlogs,
	getProgrammaticBlog,
	programmaticBlogSlugs,
} from "./programmatic-blogs";

/** Editorial posts only — does NOT include programmatic. Used by llms.txt curation. */
export function editorialBlogPosts(): BlogPost[] {
	return BLOG_POSTS;
}

/** Editorial + programmatic. Used by sitemap + dynamic route + hub. */
export function allBlogPosts(): BlogPost[] {
	return [...BLOG_POSTS, ...allProgrammaticBlogs()];
}

// ───────────────────────────── Helpers ─────────────────────────────

export function getBlogPost(slug: string): BlogPost | undefined {
	return BLOG_POSTS.find((p) => p.slug === slug) ?? getProgrammaticBlog(slug);
}

export function getBlogAuthor(post: BlogPost): Author {
	return AUTHORS[post.authorId] ?? AUTHORS["ajsal-abbas"];
}

/** All editorial slugs only — programmatic excluded. Used for related-post fallback. */
export function allBlogSlugs(): string[] {
	return BLOG_POSTS.map((p) => p.slug);
}

/** Every slug including programmatic — for `generateStaticParams` on `/blogs/[slug]`. */
export function allBlogSlugsIncludingProgrammatic(): string[] {
	return [...allBlogSlugs(), ...programmaticBlogSlugs()];
}

/** Sorted descending by datePublished so the list page is reverse-chronological. */
export function sortedBlogPosts(): BlogPost[] {
	return [...BLOG_POSTS].sort((a, b) =>
		(b.datePublished || "").localeCompare(a.datePublished || ""),
	);
}

/** Includes programmatic — used by hub for full count + filtering. */
export function sortedAllBlogPosts(): BlogPost[] {
	return [...allBlogPosts()].sort((a, b) =>
		(b.datePublished || "").localeCompare(a.datePublished || ""),
	);
}

/** Pulls related posts by slug, dropping nulls. */
export function resolveRelated(post: BlogPost): BlogPost[] {
	const ids = post.relatedSlugs ?? [];
	return ids
		.map((s) => getBlogPost(s))
		.filter((p): p is BlogPost => Boolean(p));
}

// ───────────────────────── Filtering helpers (Workstream F) ─────────────────────────

/** Returns posts filtered by serviceId (most recent first). Editorial preferred. */
export function postsByService(serviceId: string, limit = 3): BlogPost[] {
	const matches = sortedBlogPosts().filter((p) =>
		p.serviceRefs?.includes(serviceId),
	);
	return matches.slice(0, limit);
}

/** Returns posts filtered by industryId (most recent first). */
export function postsByIndustry(industryId: string, limit = 3): BlogPost[] {
	const matches = sortedBlogPosts().filter((p) =>
		p.industryRefs?.includes(industryId),
	);
	return matches.slice(0, limit);
}

/** Returns posts filtered by cityTag — used by money pages. */
export function postsByCity(cityTag: string, limit = 3): BlogPost[] {
	const matches = sortedBlogPosts().filter((p) => p.cityTag === cityTag);
	return matches.slice(0, limit);
}

/** Returns posts filtered by city × service — money page operator notes. */
export function postsByCityAndService(
	cityTag: string,
	serviceId: string,
	limit = 2,
): BlogPost[] {
	const editorialMatches = sortedBlogPosts().filter(
		(p) => p.cityTag === cityTag && p.serviceRefs?.includes(serviceId),
	);
	if (editorialMatches.length >= limit) return editorialMatches.slice(0, limit);
	// Fall back to programmatic city × service posts for fresher coverage
	const programmaticMatches = allProgrammaticBlogs().filter(
		(p) => p.cityTag === cityTag && p.serviceRefs?.includes(serviceId),
	);
	return [...editorialMatches, ...programmaticMatches].slice(0, limit);
}

/** Returns posts filtered by pillar — used by pillar pages. */
export function postsByPillar(pillarSlug: PillarSlug, limit?: number): BlogPost[] {
	const matches = sortedBlogPosts().filter((p) => p.pillarSlug === pillarSlug);
	return limit ? matches.slice(0, limit) : matches;
}

// ───────────────────────── Category routing helpers ─────────────────────────

/** Deterministic slug for a free-text category. */
export function categoryToSlug(category: string): string {
	return category
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-");
}

/** Resolves a post's category slug. Prefers explicit `categorySlug` field. */
export function postCategorySlug(post: BlogPost): string {
	return post.categorySlug ?? categoryToSlug(post.category);
}

/** Unique category slugs across the editorial registry. */
export function categorySlugs(): string[] {
	const slugs = new Set(BLOG_POSTS.map((p) => postCategorySlug(p)));
	return Array.from(slugs);
}

/** Returns the display name + first-matching post's category for a slug. */
export function categoryMetaFor(slug: string): { name: string; description: string } | null {
	const post = BLOG_POSTS.find((p) => postCategorySlug(p) === slug);
	if (!post) return null;
	return {
		name: post.category,
		description: `Frameleads operator playbooks on ${post.category.toLowerCase()}.`,
	};
}

/** Returns editorial posts in a given category slug, most recent first. */
export function postsByCategorySlug(slug: string): BlogPost[] {
	return sortedBlogPosts().filter((p) => postCategorySlug(p) === slug);
}

export const POST_TYPE_LABELS: Record<BlogPostType, string> = {
	"best-in-city": "Best of",
	"cost-in-city": "Cost guide",
	"how-to-hire": "How to hire",
	vs: "Comparison",
	"questions-to-ask": "Buyer's checklist",
	"definitive-guide": "Definitive guide",
	"city-context": "City context",
	pillar: "Pillar",
};
