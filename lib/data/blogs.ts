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
	| "city-context";

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
	/** One of the 7 post types in our editorial system */
	type: BlogPostType;
	/** Free-text category used in the card UI (e.g. "Performance Marketing") */
	category: string;
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

export const BLOG_POSTS: BlogPost[] = [
	performanceBangalore2026,
	d2cMarketingBudget2026,
	hireRealEstateBangalore,
	seoVsPerformance,
	questionsToAskAgency,
];

// ───────────────────────────── Helpers ─────────────────────────────

export function getBlogPost(slug: string): BlogPost | undefined {
	return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogAuthor(post: BlogPost): Author {
	return AUTHORS[post.authorId] ?? AUTHORS["ajsal-abbas"];
}

export function allBlogSlugs(): string[] {
	return BLOG_POSTS.map((p) => p.slug);
}

/** Sorted descending by datePublished so the list page is reverse-chronological. */
export function sortedBlogPosts(): BlogPost[] {
	return [...BLOG_POSTS].sort((a, b) =>
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

export const POST_TYPE_LABELS: Record<BlogPostType, string> = {
	"best-in-city": "Best of",
	"cost-in-city": "Cost guide",
	"how-to-hire": "How to hire",
	vs: "Comparison",
	"questions-to-ask": "Buyer's checklist",
	"definitive-guide": "Definitive guide",
	"city-context": "City context",
};
