import type { BlogPost } from "@/lib/data/blogs";

export const post: BlogPost = {
	slug: "core-web-vitals-2026-operator-guide",
	title: "Core Web Vitals 2026 — The Operator's Optimization Guide",
	description:
		"INP, LCP, CLS thresholds + optimization patterns for 2026. Edge SEO, image strategy, JS hydration, third-party tag management.",
	authorId: "ajsal-abbas",
	datePublished: "2026-06-08",
	type: "definitive-guide",
	category: "SEO",
	categorySlug: "seo",
	primaryKeyword: "core web vitals 2026 optimization",
	cluster: "SEO Operations",
	tldr: [
		"2026 thresholds: LCP < 2.0s (tightened from 2.5s), INP < 200ms, CLS < 0.1. Sub-thresholds increasingly required for AI Overview citation.",
		"INP (replaced FID in 2024) is the hardest to fix — driven by JS hydration cost + third-party tags.",
		"Edge SEO via Cloudflare Workers / Vercel Edge is now the default optimization pattern — A/B test + schema injection + geo-personalization at the CDN layer.",
		"Image strategy: AVIF or WebP, sized correctly, lazy-loaded, with proper width/height attributes.",
		"Third-party tags are the single biggest INP killer. Server-side GTM moves tag execution off the main thread.",
	],
	readTime: "9 min",
	body: [
		{
			type: "p",
			text: "Core Web Vitals are no longer a 'tech SEO' concern — they're a ranking signal AND an AI Overview citation signal. Sites with poor CWV lose ground on both fronts. This is the Frameleads 2026 CWV optimization reference.",
		},
		{
			type: "h2",
			text: "The 2026 thresholds",
		},
		{
			type: "stat-bar",
			stats: [
				{ label: "LCP (Good)", value: "< 2.0s" },
				{ label: "INP (Good)", value: "< 200ms" },
				{ label: "CLS (Good)", value: "< 0.1" },
				{ label: "TTFB (target)", value: "< 600ms" },
			],
		},
		{
			type: "p",
			text: "LCP threshold tightened from 2.5s to 2.0s in 2025 for the 'Good' band. INP replaced FID in March 2024 and tightened from 250ms to 200ms in late 2025. Sites in the 'Needs Improvement' or 'Poor' bands lose ranking + AI Overview citation share progressively.",
		},
		{
			type: "h2",
			text: "Why INP is the hardest to fix in 2026",
		},
		{
			type: "p",
			text: "INP measures the latency between user interaction (click, tap, keypress) and the next paint. Driven by main-thread blocking — typically JS hydration cost on React/Vue/Next.js sites + third-party tag execution. Most sites that fail INP do so because their analytics + ad tags + chat widgets + A/B test SDKs all execute synchronously on the main thread.",
		},
		{
			type: "h2",
			text: "The 5 optimization disciplines",
		},
		{
			type: "h3",
			text: "1. Server-side rendering + selective hydration",
		},
		{
			type: "p",
			text: "Next.js App Router with React Server Components is the 2026 default. Server-render everything that doesn't need client interactivity. Hydrate only client-island components (forms, interactive widgets). Saves 60-80% of JS bundle size + execution time.",
		},
		{
			type: "h3",
			text: "2. Move third-party tags to server-side GTM",
		},
		{
			type: "p",
			text: "GTM Server-Side container hosted on Cloudflare Workers or Google Cloud Run becomes the single endpoint for analytics + pixel + ad tag firing. Removes 5-15 third-party scripts from the client-side bundle. Single biggest INP improvement available.",
		},
		{
			type: "h3",
			text: "3. Image strategy",
		},
		{
			type: "ul",
			items: [
				"**Format:** AVIF for hero images (smallest), WebP for everything else. JPEG/PNG only as fallback.",
				"**Sizing:** never serve larger than displayed size. Use Next.js Image / responsive `srcset` with breakpoints.",
				"**Lazy-load** everything below the fold. Use native `loading=\"lazy\"` + Next.js Image's built-in lazy loading.",
				"**Width/height attributes mandatory** — prevents CLS from images loading after layout calculation.",
				"**Hero image preload:** add `<link rel=\"preload\" as=\"image\">` for the LCP element so it starts downloading before parser reaches the `<img>`.",
			],
		},
		{
			type: "h3",
			text: "4. Font loading",
		},
		{
			type: "p",
			text: "Web fonts cause CLS unless loaded with `font-display: optional` or `swap` + `<link rel=\"preload\">`. Use `next/font/google` or `next/font/local` — handles font CSS injection + subsetting automatically. Self-host fonts where possible (avoid Google Fonts CDN round-trip).",
		},
		{
			type: "h3",
			text: "5. Edge SEO at the CDN layer",
		},
		{
			type: "p",
			text: "Cloudflare Workers / Vercel Edge let you inject schema, run A/B tests, geo-personalise, and rewrite responses at the CDN edge — without main-thread JS execution. Schema injection at the edge is faster than React-rendered schema (no JS parse cost). A/B test code at the edge eliminates client-side flicker.",
		},
		{
			type: "h2",
			text: "Measurement — CrUX + Lighthouse + RUM",
		},
		{
			type: "ul",
			items: [
				"**Chrome User Experience Report (CrUX)** — real-user metrics, 28-day rolling window, used by Google for ranking. Source of truth for 'how Google sees your CWV'.",
				"**Lighthouse** — synthetic lab metrics. Useful for catching regressions on specific page types pre-deploy. Don't optimise against Lighthouse if CrUX disagrees.",
				"**Real User Monitoring (RUM)** via SpeedCurve / Calibre / DebugBear — page-level + user-cohort-level CWV in real-time. Required for sites with 100k+ monthly visits.",
				"**Web Vitals JS library** — first-party RUM measurement via Google's official library. Send to your warehouse for custom slicing (by page type, country, device).",
			],
		},
		{
			type: "p",
			text: "Frameleads CWV optimization is bundled into every [SEO engagement](/seo-services) at Scale tier. Read the [SEO Operations pillar](/blogs/pillars/seo-operations) for the broader SEO operator framework.",
		},
	],
	faqs: [
		{
			question: "Is CWV still a Google ranking signal in 2026?",
			answer:
				"Yes — confirmed by Google. Page Experience signal incorporates CWV as one of several inputs. Magnitude of impact varies by query type (more impact on commercial queries, less on navigational queries).",
		},
		{
			question: "Does CWV affect AI Overview citation share?",
			answer:
				"Yes, indirectly. AI Overview citation favours pages that load fast (because the AI engine's crawler can index more of the page). Poor CWV correlates with thin indexation, which correlates with lower citation share.",
		},
		{
			question: "What's the fastest CWV win available?",
			answer:
				"Moving analytics + ad pixels + chat widgets to server-side GTM. Removes 5-15 third-party scripts from the client. Typically 100-300ms INP improvement in 1-2 weeks of work.",
		},
		{
			question: "Should I use Next.js or stay on WordPress for CWV?",
			answer:
				"WordPress can hit CWV thresholds with disciplined optimisation (good hosting, minimal plugins, image optimization, server-side cache). But Next.js App Router gives you a 2-3x easier path to sub-200ms INP. For new sites, Next.js. For existing WordPress sites, optimise before migrating.",
		},
		{
			question: "How long does CWV optimization typically take?",
			answer:
				"4-12 weeks depending on starting point. LCP + CLS fixes typically ship in 2-4 weeks. INP fixes require deeper engineering (server-side GTM, hydration optimisation) — 6-12 weeks. Marketing site rebuilds via Next.js: 8-14 weeks.",
		},
	],
	references: [
		{
			label: "Google — Core Web Vitals + INP documentation",
			href: "https://web.dev/articles/inp",
			publisher: "Google",
		},
		{
			label: "Chrome User Experience Report (CrUX)",
			href: "https://developer.chrome.com/docs/crux",
			publisher: "Google",
		},
		{
			label: "web.dev — performance optimization guides",
			href: "https://web.dev/performance/",
			publisher: "Google",
		},
		{
			label: "Next.js — Performance documentation",
			href: "https://nextjs.org/docs/app/building-your-application/optimizing",
			publisher: "Vercel",
		},
	],
	serviceRefs: ["seo-services", "website-development"],
	pillarSlug: "seo-operations",
	relatedSlugs: ["programmatic-seo-10k-pages-architecture"],
};
