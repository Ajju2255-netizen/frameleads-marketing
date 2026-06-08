/**
 * Pillar registry — 8 editorial clusters that anchor the blog topic graph.
 *
 * Each pillar is a long-form curated reference for its topical cluster:
 *   - Renders at `/blogs/pillars/{slug}` via PillarPage template
 *   - Surfaces all spoke posts grouped by sub-theme
 *   - Lists in llms.txt as a preferred citation asset
 *   - Indexed in sitemap with priority 0.9
 *
 * Pillar content shares the Section[] body format with regular blog posts
 * (so PillarPage reuses BlogPostPage's section renderer).
 */

import type { Section, PillarSlug } from "./blogs";
import type { Reference } from "@/components/templates/ReferencesBlock";
import type { FAQItem } from "@/components/templates/FAQBlock";

export type SubTheme = {
	slug: string;
	name: string;
	description: string;
	/** Spoke post slugs that fall under this sub-theme. Spokes may belong to multiple. */
	spokeSlugs?: string[];
};

export type Pillar = {
	slug: PillarSlug;
	title: string;
	description: string;
	heroDek: string;
	primaryKeyword: string;
	datePublished: string;
	dateModified?: string;
	readTime: string;
	tldr: string[];
	body: Section[];
	subThemes: SubTheme[];
	faqs: FAQItem[];
	references: Reference[];
};

const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-08";

// ─────────────────────────────────────────────────────────────────
// 1. AI Search / AIO / GEO / LLM Optimization
// ─────────────────────────────────────────────────────────────────

const AI_SEARCH_AND_GEO: Pillar = {
	slug: "ai-search-and-geo",
	title: "AI Search & GEO — The 2026 Operator's Pillar",
	description:
		"The Frameleads canonical reference for winning AI Overviews, Perplexity, ChatGPT, Claude, and Gemini citations. Schema strategy, llms.txt curation, speakable content, measurement.",
	heroDek:
		"AI search is no longer a future bet. AI Overviews surface on 50%+ of commercial Indian SERPs in 2026, Perplexity has crossed mainstream usage, and ChatGPT browsing now drives meaningful purchase research. The operators winning AI-citation share are the ones who treated this as a content + schema + entity discipline from 2024 onwards.",
	primaryKeyword: "AI search optimization 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "14 min",
	tldr: [
		"AI Overviews + Perplexity + ChatGPT browsing collectively capture 25-45% of commercial-intent search traffic in India by mid-2026.",
		"Winning AI citation share requires named-author + structured-schema + llms.txt + speakable + direct-answer content patterns — none of these are optional.",
		"Measurement framework: track citation share monthly across Google AI Overviews, Perplexity Pro, ChatGPT Search, Gemini, and Microsoft Copilot via sampled query batches.",
		"GEO (Generative Engine Optimization) is the discipline name; AIO (AI Overview Optimization) is the Google-specific subset.",
		"Frameleads runs GEO as a standard layer of every SEO + content engagement — not as an add-on.",
	],
	body: [
		{
			type: "p",
			text: "If you've been running SEO programs in India in 2024-2025, you've watched the SERP morph in real time. AI Overviews replaced featured snippets on commercial queries. Perplexity grew from curiosity to default research tool for many founders. ChatGPT's search browsing started returning citation-rich answers that outranked the underlying source pages for many information queries.",
		},
		{
			type: "p",
			text: "This pillar is the canonical Frameleads reference for the GEO (Generative Engine Optimization) discipline as of mid-2026. It anchors every spoke post in the AI-search cluster and is the URL we point clients to when they ask 'how do I win AI citations?'",
		},
		{
			type: "h2",
			text: "What is GEO and how is it different from SEO?",
			id: "what-is-geo",
		},
		{
			type: "p",
			text: "GEO is the practice of optimising content + schema + entity-graph signals so AI engines (Google AI Overviews, Perplexity, ChatGPT, Claude, Gemini, Microsoft Copilot) cite your URL when answering user queries. SEO targets ten blue links + featured snippets; GEO targets AI-generated answers + their cited sources.",
		},
		{
			type: "callout",
			tone: "tldr",
			text: "Working definition: GEO = engineering content + schema + entity signals so AI engines cite your URL as a source. The signals overlap with SEO (E-E-A-T, schema, internal linking, authority) but the optimization targets are different — citations vs rankings, snippet inclusion vs blue-link clicks.",
		},
		{
			type: "h2",
			text: "The 5 GEO disciplines every operator should run",
			id: "five-disciplines",
		},
		{
			type: "ol",
			items: [
				"**Named-author + entity signals.** AI engines prefer attributed content. Every page needs a named human author with Person schema + sameAs links to LinkedIn / authoritative profiles. Generic Org bylines under-perform measurably.",
				"**Schema density.** Minimum 5-6 schema types per page: Article + FAQPage + BreadcrumbList + Person + WebPage(speakable) + Organization. Speakable selectors targeting `.tldr`, `.faq-answer`, `.direct-answer` blocks specifically.",
				"**Direct-answer structure.** Every page needs a 2-3 sentence direct answer above the first H2 — the AI Overview extraction layer prefers contiguous answer paragraphs over fragmented bullet lists.",
				"**llms.txt + llms-full.txt.** The llmstxt.org convention surfaces curated canonical URLs + body content for AI engines that prefer markdown over HTML. Auto-grown from the site's content registry.",
				"**Citation-share measurement.** Monthly query-batch sampling: pick 50-200 commercial queries × 5 AI engines, measure citation share, track week-over-week.",
			],
		},
		{
			type: "h2",
			text: "Sub-themes covered in this cluster",
			id: "sub-themes",
		},
		{
			type: "p",
			text: "The AI-search cluster spans 10 spoke posts grouped into 4 sub-themes. Each spoke is a 1,200-2,000-word operator deep-dive on one specific GEO discipline. The list below auto-grows as new spokes ship.",
		},
		{
			type: "h2",
			text: "How Frameleads runs GEO inside SEO engagements",
			id: "frameleads-geo",
		},
		{
			type: "p",
			text: "GEO is not a separate engagement at Frameleads — it's a standard layer of every SEO + content retainer at Scale tier and above. The Frameleads SEO + GEO weekly review tracks: keyword rankings (legacy), AI Overview citation share (GEO), Perplexity citation share, ChatGPT citation share, Gemini citation share, and Microsoft Copilot citation share. Quarterly executive reviews show citation share trend lines alongside organic traffic.",
		},
		{
			type: "p",
			text: "Read the operator playbooks below for specific tactics. Or [book a free 30-min audit](/free-marketing-audit?cta=pillar-ai-search) — we'll score your current site's GEO readiness on the 5 disciplines above and tell you the three highest-leverage moves.",
		},
	],
	subThemes: [
		{
			slug: "ai-engines-and-tactics",
			name: "AI engines — engine-by-engine playbooks",
			description: "Perplexity, ChatGPT, Google AI Overviews, Gemini, Microsoft Copilot — each engine has distinct ranking + citation dynamics.",
		},
		{
			slug: "schema-and-content-structure",
			name: "Schema strategy + content structure for AI engines",
			description: "Schema density, speakable selectors, direct-answer structure, llms.txt curation, named-author signals.",
		},
		{
			slug: "measurement-and-tooling",
			name: "Measurement + tooling",
			description: "Citation share measurement, query batching, weekly review cadence, BI dashboard integration.",
		},
		{
			slug: "operator-context",
			name: "Operator context — why GEO matters now",
			description: "AI Overviews adoption curves, Perplexity user base, AI-engine creator economy, first-party data signals.",
		},
	],
	faqs: [
		{
			question: "Is GEO different from SEO or just SEO repackaged?",
			answer:
				"GEO targets AI-engine citations; SEO targets ten blue links + featured snippets. The underlying signals (E-E-A-T, schema, internal linking, authority) overlap heavily — but the optimization targets and measurement frameworks are distinct. Most agencies calling 'GEO' a separate service are repackaging SEO; the few operators who actually measure citation share monthly are doing genuine GEO.",
		},
		{
			question: "What's the most diagnostic GEO measurement?",
			answer:
				"Citation share across 5 engines (Google AI Overviews, Perplexity, ChatGPT, Gemini, Microsoft Copilot) measured monthly on a fixed batch of 50-200 commercial-intent queries for your category. Track week-over-week trends, not absolute numbers — the baseline shifts as engines update their algorithms.",
		},
		{
			question: "Do I need llms.txt if I already have a sitemap.xml?",
			answer:
				"Yes — they serve different audiences. Sitemap.xml is for traditional crawlers (Googlebot, Bingbot). llms.txt is for AI engines that prefer curated canonical lists + markdown summaries over crawling HTML. Frameleads ships both on every client engagement that includes content + SEO scope.",
		},
		{
			question: "How long until GEO investment shows in citation share?",
			answer:
				"3-6 months for first-engine signals (typically Perplexity moves fastest, ChatGPT second). 6-12 months for Google AI Overviews citation share. The discipline compounds — Q3-Q4 of every engagement shows accelerating returns versus Q1.",
		},
		{
			question: "Does Frameleads run GEO as a standalone service?",
			answer:
				"No. GEO is a standard layer of every Frameleads SEO + content engagement at Scale tier (₹3L+/mo) and above. Standalone GEO consulting available at Enterprise tier for in-house teams that need methodology + measurement framework setup.",
		},
	],
	references: [
		{
			label: "Google AI Overviews + SGE documentation",
			href: "https://blog.google/products/search/generative-ai-search/",
			publisher: "Google",
			note: "Primary source for AI Overview behaviour, citation logic, and SGE rollout updates.",
		},
		{
			label: "llmstxt.org — the llms.txt convention",
			href: "https://llmstxt.org/",
			publisher: "llmstxt.org",
			note: "Specification for the /llms.txt + /llms-full.txt files surfaced to AI engines.",
		},
		{
			label: "Schema.org — Speakable Specification",
			href: "https://schema.org/SpeakableSpecification",
			publisher: "Schema.org",
			note: "Speakable schema documentation for marking AI-extractable content blocks.",
		},
		{
			label: "Perplexity — citation behaviour documentation",
			href: "https://www.perplexity.ai/hub/blog",
			publisher: "Perplexity",
			note: "Engineering blog covering citation logic + algorithm updates.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 2. Performance Marketing Operations
// ─────────────────────────────────────────────────────────────────

const PERFORMANCE_MARKETING_OPERATIONS: Pillar = {
	slug: "performance-marketing-operations",
	title: "Performance Marketing Operations — The 2026 Pillar",
	description:
		"The Frameleads canonical reference for running performance marketing at scale in India + global markets. Channel-mix design, creative supply, attribution, kill-rules, cohort reporting.",
	heroDek:
		"Performance marketing in 2026 is creative-bottlenecked, attribution-fragmented, and increasingly post-channel-specific. The operators winning are the ones running creative supply systems, server-side attribution, kill-rule frameworks, and cohort-level reporting as first-class disciplines — not as add-ons.",
	primaryKeyword: "performance marketing operations 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "16 min",
	tldr: [
		"Performance marketing in 2026 is creative-bottlenecked — operators shipping 15-40+ creative variants/month outperform peers by 30-80% on blended CAC.",
		"Server-side attribution (CAPI + GTM Server-Side + GA4) is table stakes post-iOS — Meta-Pixel-only operators are reporting 30-60% inflated ROAS.",
		"Cohort-level reporting > campaign-level ROAS. Reconcile in-platform metrics against post-purchase truth monthly.",
		"Kill-rule frameworks bound wasted spend by design — every ad set + creative has documented kill criteria from day one.",
		"Frameleads runs performance marketing on the [Frameleads Growth System™](/frameleads-growth-system) — Map · Magnet · Machine · Multiply · Measure.",
	],
	body: [
		{
			type: "p",
			text: "Performance marketing in 2026 looks nothing like it did in 2021. iOS 14 broke pixel-only attribution. Meta and Google moved most of their optimisation logic into ML black-boxes (Advantage+ Shopping, Performance Max). Creative supply became the single highest-leverage variable. AI-generated creative entered the supply pipeline. Attribution moved from last-click to multi-touch + media-mix modelling.",
		},
		{
			type: "p",
			text: "This pillar is the Frameleads canonical reference for running performance marketing at scale across paid social, paid search, video, B2B paid, and emerging ad surfaces. Anchors every spoke post in the performance cluster.",
		},
		{
			type: "h2",
			text: "The 5 disciplines of modern performance ops",
			id: "five-disciplines",
		},
		{
			type: "ol",
			items: [
				"**Creative supply systems.** Production pipelines that ship 15-40 variants/month at Scale tier. In-house or tight on-retainer studio, never fully outsourced.",
				"**Server-side attribution.** CAPI + GTM Server-Side + GA4 + post-purchase survey reconciled monthly. Eliminates pixel-loss + iOS-driven measurement gaps.",
				"**Cohort-level reporting.** Campaign-level ROAS averages hide cohort-level decay. Healthy ops report by cohort (week / month / quarter of acquisition) and reconcile against LTV trajectory.",
				"**Kill-rule frameworks.** Every ad set + creative variant has documented kill criteria at launch (e.g. 'kill at ₹X CPL after Y conversions if CVR < Z%'). Bounds wasted spend by design.",
				"**Channel-mix dynamics.** Modern paid funnels span 3-5 channels minimum. Cross-channel attribution + budget pacing weekly is non-optional.",
			],
		},
		{
			type: "h2",
			text: "Why creative supply is the #1 performance lever in 2026",
			id: "creative-supply",
		},
		{
			type: "p",
			text: "Five years ago, audience targeting was the highest-leverage performance variable. Advantage+ Shopping + Performance Max changed that — both platforms internalised most audience decisions. What's left for operators to control: creative variety + creative quality + landing page experience.",
		},
		{
			type: "p",
			text: "Brands shipping 15+ creative variants/month consistently outperform peers on blended CAC. The bottleneck moved from media-buying skill to production capacity. Best operators in 2026 either run in-house creative teams or partner with on-retainer studios with shared OKRs.",
		},
		{
			type: "callout",
			tone: "info",
			text: "Practical implication: when evaluating a performance marketing agency, the single most diagnostic question is 'who builds the creative?' Outsourced creative = ceiling on outcomes regardless of media-buying skill.",
		},
		{
			type: "h2",
			text: "Channel-mix patterns by category",
			id: "channel-mix",
		},
		{
			type: "ul",
			items: [
				"**D2C (₹2,000+ AOV):** Meta primary (60-70%), Google Shopping + Search (20-25%), YouTube + creator (5-15%). CAPI + Shopify Audiences + cross-channel feed deployment.",
				"**B2B SaaS:** LinkedIn primary (40-55%), Google Search (25-35%), YouTube DemandGen (10-15%), Meta retargeting only (5-10%). LinkedIn CAPI + enhanced conversions in Google Ads.",
				"**Real estate / high-ticket lead-gen:** Meta primary (50-60%), Google Search (25-35%), Click-to-WhatsApp (10-15%). RERA-compliant creative + sub-locality ad sets.",
				"**Premium / luxury:** Meta + Google + Pinterest mix. Heavy creative emphasis; smaller media volume; longer attribution windows (60-90 days).",
			],
		},
		{
			type: "h2",
			text: "Frameleads' performance ops",
			id: "frameleads-ops",
		},
		{
			type: "p",
			text: "Frameleads runs performance marketing on the [Frameleads Growth System™](/frameleads-growth-system) — Map · Magnet · Machine · Multiply · Measure. Senior operator weekly load capped at 3-4 active retainers. CAPI + GTM Server-Side from day one. Creative supply pipeline shipping 15-40 variants/month at Scale tier. Kill-rule frameworks documented at launch. Cohort-level reporting reconciled monthly against post-purchase truth.",
		},
	],
	subThemes: [
		{
			slug: "channel-deep-dives",
			name: "Channel deep-dives",
			description: "Meta CAPI, PMax architecture, LinkedIn ABM, YouTube DemandGen, TikTok Spark Ads, emerging channels.",
		},
		{
			slug: "creative-supply",
			name: "Creative supply systems",
			description: "Production pipelines, variant testing, kill-rule design, AI-assisted creative ops.",
		},
		{
			slug: "attribution-ops",
			name: "Attribution + reporting ops",
			description: "Cohort reporting, blended CAC, ROAS reconciliation, MMM intro, cross-channel attribution.",
		},
		{
			slug: "operator-disciplines",
			name: "Operator disciplines",
			description: "Budget pacing, bid-strategy resets, weekly review cadence, escalation frameworks.",
		},
	],
	faqs: [
		{
			question: "What's the single highest-leverage performance marketing variable in 2026?",
			answer:
				"Creative supply — production pipelines that ship 15-40 variants/month at Scale tier. ML-driven platforms (Advantage+ Shopping, Performance Max) have internalised most audience decisions, so what's left for operators to control is creative variety + creative quality + landing page experience.",
		},
		{
			question: "Is Meta Pixel still relevant in 2026 or just CAPI?",
			answer:
				"Both — but CAPI is the source of truth. Run pixel + CAPI in parallel with event deduplication. Pixel covers signal for browser-attribution; CAPI covers post-iOS attribution loss. Without CAPI, you're reporting 30-60% inflated ROAS for any iOS-heavy audience.",
		},
		{
			question: "How many creative variants/month should we be shipping?",
			answer:
				"Starter tier: 5-10/month. Scale tier: 15-40/month. Enterprise: 40+ per major brand. The variant count depends on category — D2C + entertainment need higher creative velocity; B2B SaaS + premium can run lower volume with higher production value per variant.",
		},
		{
			question: "What's the right channel mix for an Indian D2C brand?",
			answer:
				"For ₹2,000+ AOV D2C, typical 2026 mix: Meta 60-70% (CAPI + Advantage+ Shopping primary), Google Shopping + Search 20-25%, YouTube + creator 5-15%. Below ₹2,000 AOV brands skew even more Meta-heavy. Above ₹5,000 AOV pivots more toward Google Search + content layers.",
		},
		{
			question: "How does Frameleads structure performance reporting?",
			answer:
				"Weekly cohort-level review (campaign × creative × audience × cohort), monthly cross-channel attribution reconciliation (in-platform vs server-side vs post-purchase survey), quarterly executive review (blended CAC + LTV trajectory + payback period + contribution margin). All reports include next-week actions at the top.",
		},
	],
	references: [
		{
			label: "Meta — advertising policies + Conversions API documentation",
			href: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
			publisher: "Meta",
			note: "CAPI implementation reference + event deduplication.",
		},
		{
			label: "Google Ads — best practices + enhanced conversions",
			href: "https://support.google.com/google-ads/answer/9888656",
			publisher: "Google",
			note: "Enhanced + offline conversions for full-funnel attribution.",
		},
		{
			label: "LinkedIn — advertising guidelines + CAPI",
			href: "https://learn.microsoft.com/en-us/linkedin/marketing/conversions-api",
			publisher: "LinkedIn / Microsoft",
			note: "LinkedIn CAPI for B2B server-side attribution.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 3. SEO Operations
// ─────────────────────────────────────────────────────────────────

const SEO_OPERATIONS: Pillar = {
	slug: "seo-operations",
	title: "SEO Operations — Technical + Programmatic + Content + Local (2026)",
	description:
		"Frameleads' canonical reference for SEO at operator scale — technical SEO, programmatic SEO, content engines, local SEO, and GEO integration.",
	heroDek:
		"SEO in 2026 is no longer a content + backlinks discipline. It's a technical + programmatic + content + GEO + local discipline run by senior operators with attribution rigor. The brands compounding organic traffic in 2026 treat SEO as infrastructure, not a content function.",
	primaryKeyword: "SEO operations 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "15 min",
	tldr: [
		"SEO in 2026 spans 5 disciplines: technical (CWV, schema, indexation), programmatic (pSEO at scale), content (pillar-cluster), local (GBP + multi-location), GEO (AI Overview citation).",
		"Core Web Vitals remain a ranking signal; INP replaced FID in 2024 and tightened in 2025-2026.",
		"Programmatic SEO at 10k+ pages is the highest-ROI organic channel for service businesses with city × service or industry × service taxonomies.",
		"GEO is now a standard layer of SEO engagements — not a separate service.",
		"Frameleads SEO retainers: ₹1.5-3L Starter, ₹3-8L Scale, ₹8L+ Enterprise (fees only).",
	],
	body: [
		{
			type: "p",
			text: "If you're running SEO in 2026 the way you ran it in 2020, you're losing share. The five disciplines below are non-negotiable for any brand serious about organic growth.",
		},
		{
			type: "h2",
			text: "The 5 SEO disciplines",
			id: "five-disciplines",
		},
		{
			type: "ol",
			items: [
				"**Technical SEO.** Core Web Vitals (LCP < 2.0s, INP < 200ms, CLS < 0.1), schema architecture, indexation strategy, JS rendering, Edge SEO.",
				"**Programmatic SEO.** Multi-thousand-page taxonomies (Service × Geo, Industry × Geo, Service × Industry × Geo) rendered via Tier templates with seed-data-driven uniqueness per cell.",
				"**Content engines.** Pillar-cluster architecture, topical authority, AI-citation content engineering, named-author signals.",
				"**Local SEO.** GBP optimization, multi-location SEO, sub-locality landing pages, citation building.",
				"**GEO integration.** AI Overview + Perplexity + ChatGPT citation share measurement and engineering. See the [AI Search pillar](/blogs/pillars/ai-search-and-geo).",
			],
		},
		{
			type: "h2",
			text: "Why programmatic SEO is the highest-ROI SEO channel for service businesses",
			id: "programmatic",
		},
		{
			type: "p",
			text: "If your business has a Service × Geo or Industry × Geo taxonomy (most B2B services + most local/multi-location businesses do), programmatic SEO at 1,000-10,000+ pages is the highest-ROI organic investment available. Frameleads has built site architectures with 100k+ programmatic pages that compound organic traffic for years after the initial build.",
		},
		{
			type: "callout",
			tone: "info",
			text: "The Frameleads marketing site itself is the case study — 127k programmatic pages rendered via 12 Tier templates with seed-data-driven content per cell. The same architecture pattern applies to any service business with a multi-dimensional taxonomy.",
		},
		{
			type: "h2",
			text: "Technical SEO in 2026 — what's actually changed",
			id: "technical",
		},
		{
			type: "ul",
			items: [
				"**INP (Interaction to Next Paint)** replaced FID in March 2024 and tightened thresholds through 2025-2026. Sub-200ms INP is now table stakes for any commercial site.",
				"**Schema density** matters more than ever for AI-engine extraction. Minimum 5-6 schema types per page (Article, FAQPage, BreadcrumbList, Person, WebPage(speakable), Organization).",
				"**JS rendering** still under-performs server-side rendering for SEO. React SPAs without proper SSR/SSG continue to under-index in Google + Perplexity vs equivalent SSR setups.",
				"**Indexation budget** is increasingly important at scale. Sites with 10k+ pages need explicit canonical strategy, sitemap segmentation, and IndexNow integration.",
				"**Edge SEO** (Cloudflare Workers, Vercel Edge) is now mainstream for dynamic SEO operations — A/B testing, geo-personalisation, schema injection at the CDN layer.",
			],
		},
		{
			type: "h2",
			text: "Frameleads SEO engagement model",
			id: "frameleads",
		},
		{
			type: "p",
			text: "[Frameleads SEO retainers](/seo-services): ₹1.5-3L Starter, ₹3-8L Scale, ₹8L+ Enterprise. Excludes media + tooling. Every engagement includes technical baseline + on-page + content engine + local (where applicable) + GEO. Programmatic SEO is a separate add-on scope at Scale and Enterprise tiers.",
		},
	],
	subThemes: [
		{
			slug: "technical-seo",
			name: "Technical SEO",
			description: "Core Web Vitals, schema, indexation, JS rendering, Edge SEO.",
		},
		{
			slug: "programmatic-seo",
			name: "Programmatic SEO at scale",
			description: "Multi-thousand-page taxonomies, Tier templates, seed-data uniqueness, sitemap segmentation.",
		},
		{
			slug: "content-engines",
			name: "Content engines",
			description: "Pillar-cluster architecture, topical authority, AI-citation content, named-author signals.",
		},
		{
			slug: "local-seo",
			name: "Local + multi-location",
			description: "GBP optimization, multi-location, sub-locality landing pages.",
		},
	],
	faqs: [
		{
			question: "Is SEO still worth investing in given AI Overviews?",
			answer:
				"Yes — but the discipline has changed. AI Overviews capture more upper-funnel traffic, but commercial-intent + decision-stage traffic still favours organic blue links + AI Overview citations. The brands compounding organic traffic in 2026 invest in SEO + GEO as one combined discipline.",
		},
		{
			question: "What's the minimum site size to make programmatic SEO worthwhile?",
			answer:
				"Programmatic SEO becomes meaningfully ROI-positive at 500-1,000 pages and compounds rapidly past 5,000. Below 500, hand-crafted content typically delivers better ROI per hour. Above 10,000, programmatic infrastructure investment pays back in months.",
		},
		{
			question: "Do we need a separate agency for technical SEO vs content SEO?",
			answer:
				"Not in 2026. The disciplines have converged — technical decisions (schema architecture, internal linking, indexation) directly affect content performance, and content decisions (depth, structure, references) directly affect technical ranking signals. Hire one full-stack SEO operator.",
		},
		{
			question: "How long until SEO investment shows results?",
			answer:
				"4-9 months for compounding organic + AI Overview citation share. Technical wins (Core Web Vitals, schema fixes, indexation cleanup) can show in 4-8 weeks. Content engine + programmatic SEO compound over 9-18 months. Local SEO can show in 4-6 weeks with proper GBP work.",
		},
		{
			question: "How much should I budget for SEO in India 2026?",
			answer:
				"Starter ₹1.5-3L/mo for early-stage brands or single-location businesses. Scale ₹3-8L/mo for funded brands or multi-location operations. Enterprise ₹8L+/mo for programmatic SEO at scale or multi-brand programs. Fees only — media + tooling separate.",
		},
	],
	references: [
		{
			label: "Google Search Central — technical SEO documentation",
			href: "https://developers.google.com/search/docs/essentials",
			publisher: "Google",
			note: "Primary reference for technical SEO, indexing, ranking signals.",
		},
		{
			label: "Google — Core Web Vitals + INP",
			href: "https://web.dev/articles/inp",
			publisher: "Google",
			note: "INP measurement + optimization patterns.",
		},
		{
			label: "Schema.org documentation",
			href: "https://schema.org/",
			publisher: "Schema.org",
			note: "Schema type definitions + JSON-LD examples.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 4. Attribution + Measurement
// ─────────────────────────────────────────────────────────────────

const ATTRIBUTION_AND_MEASUREMENT: Pillar = {
	slug: "attribution-and-measurement",
	title: "Attribution & Measurement — The 2026 Operator's Pillar",
	description:
		"GA4 + GTM server-side + Meta CAPI + Google enhanced + LinkedIn CAPI + MMM + DPDP compliance. Frameleads' canonical reference for post-iOS attribution.",
	heroDek:
		"Post-iOS-14, attribution has fragmented. Pixel-only operators are reporting 30-60% inflated ROAS for any iOS-heavy audience. The operators winning are running CAPI + GTM Server-Side + GA4 + post-purchase survey as a unified stack — reconciled monthly against business truth.",
	primaryKeyword: "attribution measurement 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "13 min",
	tldr: [
		"Pixel-only attribution is broken post-iOS — operators relying on Meta/Google in-platform numbers alone are over-reporting ROAS by 30-60%.",
		"The 2026 attribution stack: GA4 + GTM client + GTM server-side + Meta CAPI + Google enhanced/offline conversions + LinkedIn CAPI + post-purchase survey.",
		"Cohort-level reconciliation monthly: in-platform reported × server-side actual × post-purchase truth. Spread reveals attribution accuracy.",
		"DPDP-compliant tracking in India requires explicit consent capture + audit trails — not optional after 2025.",
		"MMM (Marketing Mix Modelling) is becoming accessible at SMB scale via open-source tools (Robyn, LightweightMMM) — Frameleads runs MMM for Enterprise-tier engagements.",
	],
	body: [
		{
			type: "p",
			text: "Attribution is the discipline most operators get wrong in 2026. Default Meta/Google in-platform numbers are sales tools, not measurement tools. Post-iOS, both platforms inflate reported conversions via modelled attribution + view-through windows that don't reflect business reality.",
		},
		{
			type: "h2",
			text: "The 2026 attribution stack",
			id: "stack",
		},
		{
			type: "ol",
			items: [
				"**GA4** — baseline analytics + audience engineering. Enhanced ecommerce + custom events + consent mode v2.",
				"**GTM client + server-side** — server-side container hosted on Cloudflare Workers or Google Cloud Run for first-party domain ownership of pixel + event data.",
				"**Meta CAPI** — server-to-server event API deduplicated against client-side pixel. Post-iOS attribution rigor.",
				"**Google enhanced + offline conversions** — server-to-server conversion uploads for full-funnel attribution including phone calls + CRM events.",
				"**LinkedIn CAPI** — server-to-server for B2B engagements. LinkedIn's pixel coverage is the worst of the major platforms.",
				"**Post-purchase survey** — single-question post-checkout survey ('How did you hear about us?') is the cheapest cohort-attribution signal available.",
				"**MMM (Marketing Mix Modelling)** — at Enterprise scale, top-down attribution reconciliation via Robyn / LightweightMMM / commercial tools.",
			],
		},
		{
			type: "h2",
			text: "Why pixel-only reporting is broken",
			id: "why-broken",
		},
		{
			type: "p",
			text: "Post-iOS-14, Apple's App Tracking Transparency reduced trackable Meta conversions on iOS audiences by 30-60%. Meta's in-platform numbers compensate via modelled attribution — but the model is optimised to show advertisers high ROAS, not to reflect business reality. Operators relying on in-platform numbers alone over-spend on under-performing campaigns.",
		},
		{
			type: "callout",
			tone: "warn",
			text: "Practical test: compare Meta-reported revenue vs Shopify-reported attributed revenue for the same date range. Spread above 20% indicates attribution loss. Spread above 40% indicates major pixel-only over-reporting.",
		},
		{
			type: "h2",
			text: "DPDP compliance — non-optional after 2025",
			id: "dpdp",
		},
		{
			type: "p",
			text: "India's Digital Personal Data Protection Act (DPDP) 2023 became enforceable in 2025. DPDP-compliant tracking requires: explicit consent capture before pixel firing, named purpose for data collection, audit trails for consent decisions, and right-to-deletion workflows. Default GA4 + Meta Pixel deployments do NOT meet DPDP requirements out-of-the-box.",
		},
		{
			type: "h2",
			text: "Frameleads' attribution model",
			id: "frameleads",
		},
		{
			type: "p",
			text: "Every Frameleads engagement at Scale tier and above ships with: GA4 + GTM client + GTM server-side + Meta CAPI + Google enhanced/offline + LinkedIn CAPI (for B2B) + post-purchase survey + DPDP-compliant consent layer. Monthly attribution reconciliation report: in-platform vs server-side vs business-truth, with spread analysis + recommendations. Read the spoke posts below for specific implementation playbooks.",
		},
	],
	subThemes: [
		{
			slug: "stack-implementation",
			name: "Stack implementation",
			description: "GA4, GTM server-side, Meta CAPI, Google enhanced, LinkedIn CAPI — implementation playbooks.",
		},
		{
			slug: "reconciliation-and-cohorts",
			name: "Reconciliation + cohort reporting",
			description: "Monthly reconciliation, cohort-level reporting, MMM intro, spread analysis.",
		},
		{
			slug: "compliance",
			name: "DPDP + GDPR compliance",
			description: "Consent layers, audit trails, right-to-deletion, regulator-facing categories.",
		},
		{
			slug: "advanced",
			name: "Advanced attribution",
			description: "MMM, data warehouse + reverse-ETL, custom BI, LTV-based bidding.",
		},
	],
	faqs: [
		{
			question: "Do I really need server-side GTM if I have client-side GTM working?",
			answer:
				"Yes for any commercial site running paid acquisition. Client-side GTM still loses signal to ad blockers + iOS-driven pixel loss. Server-side GTM captures events at your domain edge before they're affected by browser-level restrictions. The 30-60% signal recovery is well worth the implementation cost.",
		},
		{
			question: "What's the difference between Meta CAPI and Meta Pixel?",
			answer:
				"Pixel is client-side (browser fires events to Meta). CAPI is server-side (your backend fires events to Meta directly). CAPI captures conversions Pixel loses to iOS / ad blockers / browser restrictions. Best practice: run both with event deduplication so Meta's algorithm gets the most complete signal possible.",
		},
		{
			question: "Is MMM worth it for an SMB?",
			answer:
				"Generally not until ₹2-3Cr+ annual media spend. Below that, deterministic attribution (CAPI + GA4 + post-purchase survey) is sufficient. Above ₹3Cr media + multi-channel mix, MMM via Robyn / LightweightMMM becomes ROI-positive for top-down budget allocation decisions.",
		},
		{
			question: "What's the cheapest cohort-attribution signal available?",
			answer:
				"Post-purchase survey — a single-question prompt at checkout ('How did you hear about us?'). Manual selection from a fixed list of channels gives clean cohort data with zero technical investment. 30-60% response rates typical for Indian D2C.",
		},
		{
			question: "How does Frameleads handle DPDP compliance?",
			answer:
				"Every Frameleads attribution stack ships with a DPDP-compliant consent layer (consent mode v2 + explicit purpose-named consent capture + audit logs). Right-to-deletion workflows wired via Segment / RudderStack at Scale tier. Documented compliance for regulator-facing categories (BFSI, healthcare, edtech) at Enterprise tier.",
		},
	],
	references: [
		{
			label: "Meta — Conversions API (CAPI) documentation",
			href: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
			publisher: "Meta",
			note: "Implementation reference + event deduplication.",
		},
		{
			label: "Google Tag Manager Server-Side documentation",
			href: "https://developers.google.com/tag-platform/tag-manager/server-side",
			publisher: "Google",
			note: "GTM server-side architecture + deployment patterns.",
		},
		{
			label: "DPDP Act 2023 — Digital Personal Data Protection",
			href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
			publisher: "Ministry of Electronics & IT, Government of India",
			note: "DPDP Act primary source + implementation requirements.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 5. Lifecycle & Retention
// ─────────────────────────────────────────────────────────────────

const LIFECYCLE_AND_RETENTION: Pillar = {
	slug: "lifecycle-and-retention",
	title: "Lifecycle & Retention — The 2026 Operator's Pillar",
	description:
		"Email + WhatsApp + SMS + CRM automation playbooks. Lifecycle ops that turn first-purchase into LTV — the cheapest 1% revenue uplift in most businesses.",
	heroDek:
		"Retention compounds. Most brands obsess over CAC but under-invest in lifecycle — the cheapest revenue uplift available. Welcome flows, cart-abandonment, post-purchase, win-back, and retention loops pay back faster than any paid channel.",
	primaryKeyword: "lifecycle marketing automation 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "12 min",
	tldr: [
		"Email + WhatsApp + SMS lifecycle is the cheapest 1% revenue uplift in most businesses — payback typically <30 days.",
		"India-specific channel mix: WhatsApp is the highest-converting lifecycle channel (3-5x email open rates), but requires WhatsApp Business API + template approval.",
		"Welcome + cart-abandonment + post-purchase + win-back are the 4 core flows — every D2C brand should ship all 4 within Q1 of any lifecycle engagement.",
		"CRM + warehouse + reverse-ETL is the Enterprise pattern — cohort-level audience activation across paid + lifecycle.",
		"Frameleads lifecycle retainers: ₹1.5L Starter, ₹3-6L Scale, ₹6L+ Enterprise (Klaviyo + Wati + Customer.io tooling).",
	],
	body: [
		{
			type: "p",
			text: "Lifecycle is the discipline most brands under-invest in. Acquisition gets all the attention, but retention compounds. A welcome flow + cart-abandonment + post-purchase + win-back program typically pays back in <30 days and continues compounding for years.",
		},
		{
			type: "h2",
			text: "The 4 core lifecycle flows",
			id: "four-flows",
		},
		{
			type: "ol",
			items: [
				"**Welcome / onboarding (5-7 emails over 2-3 weeks).** First-impression + product education + first-purchase nudge. Typically 30-50% of total lifecycle revenue.",
				"**Cart-abandonment (3-5 emails + 1-2 WhatsApp).** Browse-abandonment + checkout-abandonment with social proof + objection handling.",
				"**Post-purchase (5-8 emails over 6-8 weeks).** Order confirmation → shipping → delivery → product education → review → repeat-purchase trigger.",
				"**Win-back (4-6 emails over 2 months).** Lapsed-customer reactivation with offer escalation + brand story refresher.",
			],
		},
		{
			type: "h2",
			text: "Why WhatsApp is the highest-converting lifecycle channel in India",
			id: "whatsapp",
		},
		{
			type: "p",
			text: "WhatsApp open rates in India consistently run 3-5x email. The trade-off: WhatsApp Business API requires template approval + per-message billing. Best operators run a hybrid stack — email for long-form education, WhatsApp for time-sensitive triggers (cart abandonment, shipping updates, retention offers).",
		},
		{
			type: "callout",
			tone: "info",
			text: "Practical model: use email for the 'always-on' lifecycle layer (welcome flow, post-purchase education, monthly newsletter). Use WhatsApp for the 'high-impact' moments (cart abandonment, shipping confirmation, win-back offer). Don't try to run everything through one channel.",
		},
		{
			type: "h2",
			text: "Tooling stack — what to use in 2026",
			id: "tooling",
		},
		{
			type: "ul",
			items: [
				"**Klaviyo** — D2C default for email + SMS. Best Shopify integration; strongest segmentation; weakest WhatsApp coverage.",
				"**Wati** — India-default for WhatsApp Business API. Strong template management; good Shopify + custom integrations; weaker email.",
				"**Customer.io** — Best for SaaS + cross-channel orchestration. Strong webhook + API ergonomics; weaker out-of-the-box D2C templates.",
				"**Segment / RudderStack** — Required for CRM + warehouse + reverse-ETL at Scale + Enterprise tiers. Reverse-ETL = activating warehouse cohorts back into Klaviyo / Wati / Meta / Google.",
				"**Salesforce / HubSpot** — CRM defaults for B2B engagements where lifecycle includes sales-team handoff.",
			],
		},
		{
			type: "h2",
			text: "Frameleads lifecycle model",
			id: "frameleads",
		},
		{
			type: "p",
			text: "[Frameleads lifecycle retainers](/email-marketing-and-automation-services): ₹1.5L Starter (2-3 flows live), ₹3-6L Scale (5-10 flows + WhatsApp + Klaviyo deep integration), ₹6L+ Enterprise (CRM + warehouse + reverse-ETL + cohort activation). Every engagement includes the 4 core flows as Q1 priority before custom flows.",
		},
	],
	subThemes: [
		{
			slug: "core-flows",
			name: "Core lifecycle flows",
			description: "Welcome, cart-abandonment, post-purchase, win-back — implementation playbooks.",
		},
		{
			slug: "whatsapp-india",
			name: "WhatsApp Business API for India",
			description: "Template strategy, send-pacing, opt-in flows, India-specific patterns.",
		},
		{
			slug: "retention-economics",
			name: "Retention economics",
			description: "LTV/CAC, repeat-purchase optimization, payback-period analysis.",
		},
		{
			slug: "enterprise-orchestration",
			name: "Enterprise orchestration",
			description: "CRM + warehouse + reverse-ETL + cohort activation across paid + lifecycle.",
		},
	],
	faqs: [
		{
			question: "Should I use Klaviyo or Mailchimp for Indian D2C?",
			answer:
				"Klaviyo. Stronger Shopify integration, better segmentation, better deliverability for D2C senders, more native templates for ecommerce flows. Mailchimp's strength is small-business newsletters — under-powered for D2C lifecycle work.",
		},
		{
			question: "Is WhatsApp Business API hard to set up?",
			answer:
				"Moderately — 1-3 weeks for verification + template approval. Easiest via established BSPs (Business Solution Providers) like Wati, Interakt, or Gupshup. DIY API integration takes longer; not recommended unless you're sending 100k+ messages/month and pricing is a meaningful concern.",
		},
		{
			question: "What's a realistic ROI for lifecycle automation?",
			answer:
				"4-core-flow programs typically lift D2C revenue 15-30% within 90 days of going live. Payback period <30 days for the engagement fee. Compounding effect over years — well-run lifecycle programs continue lifting revenue 2-3 years post-launch with minimal incremental work.",
		},
		{
			question: "Do I need a CRM or is Klaviyo + Wati enough?",
			answer:
				"For pure D2C transactional businesses, Klaviyo + Wati is often sufficient. For businesses with sales-team handoff (B2B, high-ticket lead-gen, real estate), you need a CRM (Salesforce, HubSpot, Pipedrive) that lifecycle tooling integrates into. Decision is driven by sales motion, not channel choice.",
		},
		{
			question: "How does Frameleads structure lifecycle engagements?",
			answer:
				"Discovery + audit (week 1-2) → 4 core flows live (week 3-8) → custom flows + segmentation (week 9-14) → CRM + warehouse + reverse-ETL where applicable (month 4+). Monthly review against revenue-from-lifecycle metric + repeat-purchase rate trend.",
		},
	],
	references: [
		{
			label: "DPDP Act 2023 — Digital Personal Data Protection",
			href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
			publisher: "Ministry of Electronics & IT, Government of India",
			note: "Lifecycle messaging compliance requirements in India.",
		},
		{
			label: "Meta — WhatsApp Business Platform documentation",
			href: "https://developers.facebook.com/docs/whatsapp",
			publisher: "Meta",
			note: "WhatsApp Business API reference + template policies.",
		},
		{
			label: "TRAI — telecom regulatory authority of India: commercial communications",
			href: "https://www.trai.gov.in/",
			publisher: "TRAI",
			note: "SMS + voice commercial communications regulations including DLT registration.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 6. Vertical Playbooks
// ─────────────────────────────────────────────────────────────────

const VERTICAL_PLAYBOOKS: Pillar = {
	slug: "vertical-playbooks",
	title: "Vertical Playbooks — Industry-Specific Marketing Operator Reference (2026)",
	description:
		"Industry-specific marketing playbooks: healthcare, BFSI, B2B SaaS, D2C, real estate, edtech, fintech, hospitality, manufacturing.",
	heroDek:
		"Generic 'India marketing' playbooks under-perform for verticals with regulatory + cultural + buying-cycle specificity. The 14 vertical playbooks in this cluster anchor Frameleads' canonical references for marketing operations in India's most active categories.",
	primaryKeyword: "industry marketing playbooks india 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "11 min",
	tldr: [
		"Vertical playbooks anchor 14 industries: healthcare, BFSI, B2B SaaS, D2C fashion/beauty/food, real estate, edtech (K12/upskilling), fintech (lending/wealth), hospitality, manufacturing, professional services.",
		"Each playbook covers: regulatory overlay, ICP definition, channel mix, attribution specifics, compliance, hiring framework.",
		"Frameleads vertical specialisation: healthcare, BFSI, real estate, B2B SaaS, D2C — proven track record in regulator-heavy categories.",
		"Generic 'India marketing' agencies typically under-perform in regulator-heavy verticals due to compliance + creative-review overhead.",
	],
	body: [
		{
			type: "p",
			text: "India's marketing landscape is not one market. Healthcare, BFSI, real estate, B2B SaaS, D2C, edtech, fintech, hospitality, manufacturing — each operates under distinct regulatory + cultural + buying-cycle dynamics. Generic 'India marketing' playbooks under-perform because they ignore these vertical-specific operator realities.",
		},
		{
			type: "p",
			text: "This pillar anchors 14 vertical playbooks. Each covers: industry-specific regulatory overlay, ICP + buying-cycle definition, channel-mix patterns, attribution specifics, compliance requirements, hiring framework. Pick the playbook that matches your vertical.",
		},
		{
			type: "h2",
			text: "Why vertical specialisation matters",
			id: "why-vertical",
		},
		{
			type: "ol",
			items: [
				"**Regulatory overlay.** RBI / SEBI / IRDAI / RERA / NMC / DPDP — each vertical operates under distinct regulators with creative-review + claim-substantiation requirements that generic agencies miss.",
				"**Buying-cycle specificity.** Healthcare = 60-180 day cycles. Real estate = 90-300+ day cycles. B2B SaaS = 30-120 day cycles. D2C = 7-30 day cycles. Channel + attribution + lifecycle dynamics differ accordingly.",
				"**Channel-mix patterns.** Optimal channel mix varies dramatically by vertical — Healthcare leans LinkedIn + Google Search + content. D2C leans Meta + Google Shopping + creator. Real estate leans Meta + Click-to-WhatsApp + sub-locality.",
				"**Compliance + creative review.** Regulator-heavy categories need named compliance leads + documented review processes + legal-partner relationships. Generic agencies often skip these.",
				"**ICP literacy.** Sub-segment vocabulary differs (e.g. 'PE-track' vs 'family-office' for wealth-tech; 'Tier 1 OEM' vs 'Tier 2 supplier' for manufacturing). Operators without ICP literacy under-perform.",
			],
		},
		{
			type: "h2",
			text: "The 14 verticals covered",
			id: "verticals",
		},
		{
			type: "ul",
			items: [
				"**Healthcare** — Dental, Aesthetics, Multispeciality hospitals, Diagnostics, Healthtech. NMC + DPDP regulatory overlay.",
				"**BFSI** — Banks, NBFCs, Insurance, Wealthtech. RBI / SEBI / IRDAI regulatory overlay.",
				"**B2B SaaS** — Vertical SaaS, Horizontal SaaS, PLG vs Sales-led. ABM-grade targeting + 30-120 day cycles.",
				"**D2C Fashion** — Apparel, Footwear, Accessories. Meta + Google Shopping + creator partnerships.",
				"**D2C Beauty** — Skincare, Haircare, Color cosmetics. Heavy creative + influencer + lifecycle.",
				"**D2C Food** — Packaged foods, Snacks, Beverages. FSSAI compliance + cold-chain + WhatsApp.",
				"**Real estate** — Residential, Commercial. RERA project disclosure + sub-locality + Click-to-WhatsApp.",
				"**Edtech K12** — Schools, Test prep, Coaching. Parent-buyer + 30-90 day cycles + Tier-2 city expansion.",
				"**Edtech upskilling** — Career programs, Certifications. Working-professional buyer + LinkedIn + Google Search.",
				"**Fintech lending** — NBFC, Digital lending, P2P. RBI compliance + creative review + responsible-lending positioning.",
				"**Fintech wealth** — Mutual funds, PMS, Wealthtech. SEBI compliance + risk-disclaimer creative + LinkedIn primary.",
				"**Hospitality** — Hotels, Resorts, Restaurants. Booking-window + seasonality + Google Hotel Ads + lifecycle.",
				"**Manufacturing** — B2B industrial, OEM, Components. LinkedIn + Google Search + trade-show integration + long sales cycles.",
				"**Professional services** — Legal, Consulting, Accounting. LinkedIn primary + content authority + referral lifecycle.",
			],
		},
		{
			type: "h2",
			text: "Frameleads vertical specialisation",
			id: "frameleads-specialisation",
		},
		{
			type: "p",
			text: "Frameleads runs proven engagements across healthcare, BFSI, real estate, B2B SaaS, and D2C verticals. Read the specific vertical playbook below for the operator reference Frameleads applies. [Book a free 30-min audit](/free-marketing-audit?cta=pillar-vertical) scoped to your specific vertical — we'll share the playbook on the call.",
		},
	],
	subThemes: [
		{
			slug: "regulator-heavy",
			name: "Regulator-heavy verticals",
			description: "Healthcare, BFSI, fintech, real estate, edtech — compliance + creative review.",
		},
		{
			slug: "d2c",
			name: "D2C playbooks",
			description: "Fashion, beauty, food, wellness — creative + Meta + Shopping + lifecycle.",
		},
		{
			slug: "b2b",
			name: "B2B playbooks",
			description: "SaaS, professional services, manufacturing — LinkedIn + ABM + long cycles.",
		},
		{
			slug: "consumer",
			name: "Consumer + hospitality",
			description: "Hospitality, edtech K12, consumer services — buyer cycle + lifecycle patterns.",
		},
	],
	faqs: [
		{
			question: "Why can't a generic India marketing agency run my vertical?",
			answer:
				"Generic agencies typically lack: (1) regulatory literacy for compliance-heavy categories, (2) vertical-specific ICP + sub-segment vocabulary, (3) creative-review processes for regulator-facing creatives, (4) named legal-partner relationships. Cross-category agencies handle generic D2C + ecommerce well; they struggle with healthcare / BFSI / real estate / fintech where vertical literacy is a hard requirement.",
		},
		{
			question: "Does Frameleads work outside the 14 listed verticals?",
			answer:
				"Yes — for verticals where the underlying disciplines (Meta + Google + SEO + lifecycle + attribution) apply cleanly. Frameleads declines engagements in highly-regulated verticals where we don't have prior compliance experience (e.g. pharma direct-to-patient marketing, regulated financial advisory).",
		},
		{
			question: "How is vertical pricing different from generic pricing?",
			answer:
				"Regulator-heavy verticals (healthcare, BFSI, real estate, fintech) typically run 20-40% above generic pricing — driven by additional senior time for compliance review + creative-review cycles + legal-partner coordination. D2C + B2B SaaS price similarly to generic.",
		},
		{
			question: "Can I run multi-vertical campaigns (e.g. healthcare + wellness)?",
			answer:
				"Yes — but each vertical needs its own ad-set structure, creative direction, and landing pages. Mixed-vertical campaigns at the ad-set level dilute audience signal + ML optimisation. Frameleads runs multi-vertical engagements for diversified brands but builds them as parallel single-vertical programs.",
		},
		{
			question: "How does Frameleads handle vertical-specific compliance?",
			answer:
				"Named compliance lead per regulator-heavy engagement, documented creative review process, legal-partner relationship for regulator-facing categories. Compliance review built into the standard creative production cycle — not bolted on at the end.",
		},
	],
	references: [
		{
			label: "Reserve Bank of India — regulations & circulars",
			href: "https://www.rbi.org.in/Scripts/BS_RegulationsListView.aspx",
			publisher: "RBI",
		},
		{
			label: "SEBI — Securities & Exchange Board of India: advertising code",
			href: "https://www.sebi.gov.in/legal/regulations.html",
			publisher: "SEBI",
		},
		{
			label: "IRDAI — Insurance Regulatory and Development Authority of India",
			href: "https://www.irdai.gov.in/",
			publisher: "IRDAI",
		},
		{
			label: "RERA — Real Estate (Regulation and Development) Act",
			href: "https://maharera.maharashtra.gov.in/",
			publisher: "MahaRERA",
		},
		{
			label: "DPDP Act 2023 — Digital Personal Data Protection",
			href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
			publisher: "Ministry of Electronics & IT, Government of India",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 7. Geo / City Operator Playbooks
// ─────────────────────────────────────────────────────────────────

const GEO_AND_CITY_PLAYBOOKS: Pillar = {
	slug: "geo-and-city-playbooks",
	title: "City Operator Playbooks — India + Global Marketing Reference (2026)",
	description:
		"City-by-city operator playbooks for marketing in India's top metros + global anchor markets. Sub-locality patterns, channel mix, vertical-density specifics.",
	heroDek:
		"India isn't one market. Bangalore D2C buyer ≠ Mumbai D2C buyer ≠ Chennai D2C buyer. Sub-locality dynamics, vertical density, language overlay, and competitive intensity vary city-by-city. The 13 city playbooks in this cluster are Frameleads' canonical operator references for each major market.",
	primaryKeyword: "city marketing playbooks india 2026",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "10 min",
	tldr: [
		"India isn't one market — channel mix + sub-locality dynamics + vertical density vary city-by-city.",
		"13 cities covered: Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Kochi, Gurgaon, Noida + Dubai (global anchor).",
		"Each playbook covers: sub-locality buyer profiles, dominant verticals, channel-mix patterns, language overlay, competitive intensity, realistic CPC/CAC bands.",
		"Tier-1 vs Tier-2 city dynamics: Tier-1 = higher CPCs + senior-operator availability; Tier-2 = lower CPCs + tougher senior sourcing.",
	],
	body: [
		{
			type: "p",
			text: "India's commercial landscape is sub-locality-specific. Bangalore's Whitefield-vs-Indiranagar D2C buyer differences, Mumbai's Bandra-vs-BKC-vs-Worli vertical density, Delhi NCR's Gurgaon-vs-Noida-vs-Connaught Place sub-market patterns — these matter for paid creative, landing pages, and channel-mix decisions.",
		},
		{
			type: "p",
			text: "This pillar anchors 13 city operator playbooks. Each is the Frameleads canonical reference for running marketing operations in that specific metro.",
		},
		{
			type: "h2",
			text: "The 13 cities covered",
			id: "cities",
		},
		{
			type: "ul",
			items: [
				"**Bangalore** — B2B SaaS + D2C + real estate. Engineering-led agency density. Whitefield + Indiranagar + HSR + Sarjapur sub-markets.",
				"**Mumbai** — Real estate + BFSI + D2C beauty. Heavy compliance overlay. Bandra + BKC + Worli + Lower Parel + Thane sub-markets.",
				"**Delhi NCR** — Finance + real estate + B2B. Sprawl across Gurgaon + Noida + Connaught Place + Saket. 30M+ population.",
				"**Hyderabad** — B2B SaaS + healthcare. Gachibowli + HiTec City IT corridor; Banjara/Jubilee Hills premium retail.",
				"**Chennai** — Manufacturing + automotive + B2B SaaS. Anna Salai + OMR IT corridor + Adyar premium.",
				"**Pune** — B2B SaaS + manufacturing + education. Hinjewadi IT + Koregaon Park premium + Wagholi growth corridors.",
				"**Kolkata** — F&B + retail + finance. Salt Lake IT + Park Street premium retail.",
				"**Ahmedabad** — D2C + real estate + manufacturing. SG Highway commercial + Bopal residential.",
				"**Jaipur** — Fashion D2C + jewelry + tourism. C-Scheme commercial + Malviya Nagar premium.",
				"**Kochi** — B2B SaaS + tourism + real estate. Infopark IT corridor.",
				"**Gurgaon** — B2B SaaS + fintech + real estate. Cyber City + MG Road + Golf Course Road sub-markets.",
				"**Noida** — B2B SaaS + ecommerce + media. Sector 18 + Sector 62 + Greater Noida sub-markets.",
				"**Dubai** — Real estate + retail + hospitality. UAE anchor for international expansion playbooks.",
			],
		},
		{
			type: "h2",
			text: "Tier-1 vs Tier-2 city dynamics",
			id: "tier-dynamics",
		},
		{
			type: "ul",
			items: [
				"**Tier-1 cities** (Bangalore / Mumbai / Delhi NCR / Hyderabad / Chennai / Pune / Kolkata): Higher CPCs (10-25% above Tier-2), stronger senior-operator availability, more competitive verticals, longer sales cycles in regulator-heavy categories.",
				"**Tier-2 cities** (Indore / Coimbatore / Visakhapatnam / Kochi / Jaipur): Lower CPCs, harder senior-operator sourcing (often run from Tier-1 city remote), emerging vertical density in IT (Coimbatore, Kochi, Indore) + manufacturing (Coimbatore, Ludhiana, Surat).",
			],
		},
		{
			type: "h2",
			text: "Frameleads city-specific engagement model",
			id: "frameleads",
		},
		{
			type: "p",
			text: "Frameleads runs city-specific engagements remote-with-travel for most engagements. City-resident model available at Enterprise tier when daily in-person coordination is required (premium concierge marketing, BFSI relationships, real estate). Read the specific city playbook below for sub-locality dynamics + channel-mix patterns + Frameleads' track record in that market.",
		},
	],
	subThemes: [
		{
			slug: "tier-1-india",
			name: "Tier-1 India",
			description: "Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, Kolkata.",
		},
		{
			slug: "growth-tier-1",
			name: "Growth + emerging Tier-1",
			description: "Ahmedabad, Jaipur, Kochi, Gurgaon, Noida.",
		},
		{
			slug: "global-anchors",
			name: "Global anchor markets",
			description: "Dubai, Singapore, London, New York — international expansion playbooks.",
		},
	],
	faqs: [
		{
			question: "Why does sub-locality matter for paid creative?",
			answer:
				"Sub-locality buyer profiles diverge sharply within Indian metros. Bandra D2C buyer ≠ BKC SaaS buyer ≠ Worli real-estate buyer. Generic city-level creative under-performs sub-locality-specific creative by 20-50% on CTR + CVR. Sub-locality landing pages with locality-specific social proof typically lift CVR another 15-30%.",
		},
		{
			question: "Should I hire a Bangalore agency to run Mumbai campaigns?",
			answer:
				"Yes if the agency has documented Mumbai sub-locality literacy + IST-overlap working hours + travels for kick-off + quarterly reviews. Generic Bangalore agencies running Mumbai campaigns without sub-locality awareness typically under-perform. Verify sub-locality literacy on the discovery call.",
		},
		{
			question: "Are Tier-2 cities worth the CPC discount?",
			answer:
				"Depends on category. For D2C + retail + edtech expansion, yes — Tier-2 cities offer 15-30% CPC discount with growing buyer density. For B2B SaaS + professional services, Tier-2 buyer concentration is too thin to scale; stick to Tier-1.",
		},
		{
			question: "What's the right entry city for an international brand expanding to India?",
			answer:
				"Depends on vertical. B2B SaaS / fintech → Bangalore (talent + ICP density). D2C → Mumbai + Delhi (creative + buyer concentration). Real estate → Mumbai + Bangalore + Delhi simultaneously. Hospitality / luxury → Mumbai + Delhi. Most international brands pilot in 1-2 cities for 6 months before national rollout.",
		},
		{
			question: "Does Frameleads have on-the-ground presence in all 13 cities?",
			answer:
				"Frameleads is HQ'd in Bangalore with documented multi-city engagement experience across all listed metros. We run remote-with-travel for most engagements; city-resident model available at Enterprise tier where daily in-person coordination is required.",
		},
	],
	references: [
		{
			label: "IBEF — India Brand Equity Foundation: City + State Industry Reports",
			href: "https://www.ibef.org/states-of-india",
			publisher: "IBEF (Ministry of Commerce & Industry)",
			note: "State + city-level commercial data + sector concentration.",
		},
		{
			label: "MoSPI — Ministry of Statistics: Urban household consumption",
			href: "https://www.mospi.gov.in/",
			publisher: "Government of India",
			note: "Tier-1 / Tier-2 / Tier-3 city consumption + income distribution data.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// 8. Frameleads Methodology
// ─────────────────────────────────────────────────────────────────

const FRAMELEADS_METHODOLOGY: Pillar = {
	slug: "frameleads-methodology",
	title: "Frameleads Methodology — The Frameleads Growth System™ (2026)",
	description:
		"The Frameleads Growth System™ — Map · Magnet · Machine · Multiply · Measure. The five-stage operating system applied across every Frameleads engagement.",
	heroDek:
		"The Frameleads Growth System™ is the five-stage operating system that anchors every Frameleads engagement. Documented openly so clients can grade us against the framework. No proprietary black-box.",
	primaryKeyword: "frameleads growth system methodology",
	datePublished: PUBLISHED,
	dateModified: MODIFIED,
	readTime: "12 min",
	tldr: [
		"The Frameleads Growth System™ is a five-stage operating system: Map · Magnet · Machine · Multiply · Measure.",
		"Documented openly — clients can grade us against the framework. No proprietary black-box.",
		"Each stage has documented deliverables, named KPIs, and review cadence.",
		"Map = ICP discovery. Magnet = linkable assets. Machine = always-on acquisition. Multiply = retention + LTV. Measure = single north-star metric.",
		"Read the [Frameleads Growth System™ pillar page](/frameleads-growth-system) for the full methodology reference.",
	],
	body: [
		{
			type: "p",
			text: "The Frameleads Growth System™ is the operating system that anchors every Frameleads engagement. We document it openly so clients can grade us against the framework — no proprietary black-box. The five stages: Map · Magnet · Machine · Multiply · Measure.",
		},
		{
			type: "h2",
			text: "The 5 stages",
			id: "five-stages",
		},
		{
			type: "ol",
			items: [
				"**Map.** ICP discovery, jobs-to-be-done, buying triggers, unit-economics ceiling. The foundation every other stage builds on. Typical duration: 2-4 weeks at engagement kickoff; re-baselined annually.",
				"**Magnet.** Linkable assets, content engines, free tools, original research that pull right-fit buyers in. Compounds over months. Includes pillar-cluster SEO + AI-citation content + free tools + original-data reports.",
				"**Machine.** Always-on acquisition engine — paid + organic + lifecycle + community — operated under one P&L. Cohort-level reporting, attribution rigor, kill-rule frameworks.",
				"**Multiply.** Compound through retention, referral, lifetime-value engineering. Email + WhatsApp + SMS lifecycle, post-purchase optimization, referral program design.",
				"**Measure.** Single north-star metric with tight loop of leading indicators. Weekly review cadence, monthly executive readout, quarterly strategic re-baseline.",
			],
		},
		{
			type: "h2",
			text: "Why open methodology beats black-box",
			id: "why-open",
		},
		{
			type: "p",
			text: "Most agencies pitch proprietary methodology as a moat. We disagree. Open methodology is a stronger moat — clients can grade execution against documented criteria, which means we earn retention through execution quality rather than information asymmetry. The framework is publishable; the execution discipline is what compounds.",
		},
		{
			type: "callout",
			tone: "info",
			text: "Practical implication: when evaluating any marketing agency, ask for their documented operating methodology. If they decline 'because it's proprietary', walk away — that's information asymmetry, not a moat.",
		},
		{
			type: "h2",
			text: "Stage-by-stage deep dives",
			id: "stages",
		},
		{
			type: "p",
			text: "Each stage has a dedicated spoke post with operator deliverables, named KPIs, and review cadence. Read the spoke posts below — or [book a free 30-min audit](/free-marketing-audit?cta=pillar-methodology) and we'll walk through the framework applied to your specific situation.",
		},
	],
	subThemes: [
		{
			slug: "map",
			name: "Map — ICP discovery + unit economics",
			description: "ICP discovery, jobs-to-be-done, buying triggers, max viable CAC.",
		},
		{
			slug: "magnet",
			name: "Magnet — Linkable assets + content engines",
			description: "Pillar-cluster SEO, AI-citation content, free tools, original-data reports.",
		},
		{
			slug: "machine",
			name: "Machine — Always-on acquisition",
			description: "Paid + organic + lifecycle + community under one P&L. Cohort reporting + kill-rules.",
		},
		{
			slug: "multiply",
			name: "Multiply — Retention + LTV engineering",
			description: "Email + WhatsApp + SMS lifecycle, post-purchase, referral program design.",
		},
		{
			slug: "measure",
			name: "Measure — Single north-star + leading indicators",
			description: "Weekly review cadence, monthly executive readout, quarterly re-baseline.",
		},
	],
	faqs: [
		{
			question: "Why does Frameleads publish the methodology openly?",
			answer:
				"Two reasons: (1) clients can grade us against documented criteria, which forces execution discipline. (2) Open methodology is a content asset — pillar pages anchored to the Frameleads Growth System™ rank for methodology-related queries and earn AI Overview citations. Information asymmetry is a weak moat; execution quality is the durable moat.",
		},
		{
			question: "Is the Frameleads Growth System™ trademarked?",
			answer:
				"Yes. The name + the five-stage framework are Frameleads' intellectual property. The methodology is shareable; the brand is protected.",
		},
		{
			question: "Can I implement the Frameleads Growth System™ in-house without hiring Frameleads?",
			answer:
				"Yes — that's the point. The methodology is publishable. Most clients eventually move parts of the system in-house as they grow internal capacity; we shift to a smaller retainer for strategy + creative + special launches. Healthy outcome — we expect clients to outgrow us in 18-24 months.",
		},
		{
			question: "Which stage is most often skipped by other agencies?",
			answer:
				"Map. Most agencies start at Machine (running media) and skip the Map phase (ICP + unit economics + buying triggers). Result: campaigns optimised against the wrong audience or wrong CAC ceiling. The first Frameleads engagement always starts with Map even if the brand thinks they have it documented.",
		},
		{
			question: "Where do I read the full methodology reference?",
			answer:
				"The canonical reference is the [Frameleads Growth System™ pillar page](/frameleads-growth-system). The spoke posts below cover each stage in operator depth.",
		},
	],
	references: [
		{
			label: "Frameleads Growth System™ — canonical pillar",
			href: "https://frameleads.com/frameleads-growth-system",
			publisher: "Frameleads",
			note: "Five-stage methodology reference: Map · Magnet · Machine · Multiply · Measure.",
		},
		{
			label: "Editorial Policy",
			href: "https://frameleads.com/editorial-policy",
			publisher: "Frameleads",
			note: "How Frameleads sources, refreshes, and discloses content. Useful for assessing E-E-A-T.",
		},
		{
			label: "How We Audit",
			href: "https://frameleads.com/how-we-audit",
			publisher: "Frameleads",
			note: "The methodology behind the free 30-minute audit referenced across the site.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// Registry
// ─────────────────────────────────────────────────────────────────

export const PILLARS: Pillar[] = [
	AI_SEARCH_AND_GEO,
	PERFORMANCE_MARKETING_OPERATIONS,
	SEO_OPERATIONS,
	ATTRIBUTION_AND_MEASUREMENT,
	LIFECYCLE_AND_RETENTION,
	VERTICAL_PLAYBOOKS,
	GEO_AND_CITY_PLAYBOOKS,
	FRAMELEADS_METHODOLOGY,
];

export function getPillar(slug: string): Pillar | undefined {
	return PILLARS.find((p) => p.slug === slug);
}

export function pillarSlugs(): string[] {
	return PILLARS.map((p) => p.slug);
}
