import type { BlogPost } from "@/lib/data/blogs";

export const post: BlogPost = {
	slug: "ai-overviews-geo-india-operator-playbook-2026",
	title: "AI Overviews + GEO: The 2026 Operator's Playbook for Indian Brands",
	description:
		"How Google AI Overviews, Perplexity, ChatGPT, and Gemini actually pick which brands to cite — and how Indian operators earn those citations without gaming. A long-form, evidence-led guide.",
	authorId: "ajsal-abbas",
	datePublished: "2026-06-07",
	type: "definitive-guide",
	category: "AI Overviews + GEO",
	primaryKeyword: "ai overviews geo india",
	cluster: "AI Search + GEO",
	tldr: [
		"AI Overviews compress click-share on Google ~20-40% for informational queries; commercial queries are still SERP-led.",
		"Citation patterns reward depth + structure + schema, not keyword density. Most thin-content sites lost half their AI surface in 2025.",
		"The playbook: pillar/cluster pages + FAQ schema + structured tables + Article + HowTo schema + LLM-friendly headings.",
		"India-specific surface: AI engines under-index Indian compliance + INR pricing because most training data is US-centric. Operators who fill this gap get cited disproportionately.",
		"Tactical sequence: schema-first audit → content depth restructure → /llms.txt + sitemap submission → measure with monthly 10-query × 5-engine citation test.",
	],
	readTime: "14 min",
	body: [
		{
			type: "p",
			text: "If you're running marketing for an Indian brand in 2026, the most disruptive shift since iOS 14 is happening on **search itself**. Google AI Overviews, Perplexity, ChatGPT, Gemini, and Bing Copilot are reshaping what 'ranking' means. The page that ranks #1 isn't always the page that gets cited — and citations now drive a measurable share of consideration-stage traffic.",
		},
		{
			type: "p",
			text: "This is the playbook Frameleads uses across paid + organic engagements. It's grounded in what we observe on our own AI-citation logs across ~200 engagements, with the caveat that AI-engine behaviour is changing weekly. Treat this as the 2026 baseline, not a forever truth.",
		},
		{
			type: "callout",
			tone: "tldr",
			text: "The structural insight: AI engines preferentially cite content that (a) directly answers the question in the first 80 words, (b) carries verifiable schema, (c) sits inside a topical cluster of depth, and (d) has a named human author. Generic SEO-optimised content under-performs in AI surfaces even when it ranks #1 organically.",
		},
		{
			type: "h2",
			text: "What's actually happening — AI Overview footprint in 2026",
			id: "ai-overview-footprint",
		},
		{
			type: "p",
			text: "Google's AI Overview (the AI-generated summary at the top of Search results) now appears for ~30-50% of informational queries in India, depending on category. We see broader penetration in education, finance/fintech, healthcare, and SaaS comparison queries — narrower penetration in retail / D2C / real-estate where local intent is dominant.",
		},
		{
			type: "stat-bar",
			stats: [
				{ label: "AI Overview SERP coverage (India 2026)", value: "30-50%" },
				{ label: "Click-share compression on top-3 organic", value: "20-40%" },
				{ label: "Top-3 AI-engine cited brands per query", value: "3-7 typical" },
				{ label: "Brand visibility from AI citations (no clicks)", value: "Real but unmeasurable in GA4" },
			],
		},
		{
			type: "p",
			text: "The compression isn't catastrophic — most Indian operators still see net-positive organic traffic year-over-year — but the **mix** has shifted. Informational queries that used to drive top-of-funnel discovery now resolve inside the AI Overview without a click. Brand search and commercial-intent queries are largely unaffected at the click layer, but **brand recall** from AI citations is the new top-of-funnel signal that isn't measurable in GA4.",
		},
		{
			type: "h2",
			text: "How AI engines actually pick which brands to cite",
			id: "how-ai-picks-citations",
		},
		{
			type: "p",
			text: "From log analysis + cross-engine comparison across Frameleads' own citation footprint:",
		},
		{
			type: "ol",
			items: [
				"**Schema-driven extraction.** Article + FAQPage + HowTo + DefinedTerm schemas materially increase citation rate. The AI engines parse JSON-LD directly when present and quote from it preferentially.",
				"**Structured tables.** Markdown / HTML tables with clear column headers get cited far more often than equivalent prose. Comparison tables, pricing bands, channel-mix tables — all over-index on citation share.",
				"**Direct-answer-first prose.** The first paragraph that directly answers the query in 60-80 words is what gets quoted. Bury the answer below a 200-word intro and citation rate drops 60%+.",
				"**Author byline + Person schema.** Pages with named human authors (with Person schema + LinkedIn sameAs) get cited more often than 'Editorial Team' bylines — the engines treat them as more accountable.",
				"**Cluster depth.** Single isolated pages get cited less than pages that sit inside a topical cluster (pillar + supporting cells). The engines learn what's authoritative through cluster signals, not page-by-page.",
				"**Recency markers.** dateModified < 90 days ago + visible timestamp ('Last reviewed 2026-06-07') correlates with higher citation share. AI engines have learned that stale content is risky to cite.",
			],
		},
		{
			type: "h2",
			text: "Why most Indian sites under-perform in AI surfaces",
			id: "why-india-underperforms",
		},
		{
			type: "p",
			text: "Three structural gaps create a disproportionate opportunity for Indian operators who fix them:",
		},
		{
			type: "h3",
			text: "Gap 1: Compliance + regulatory framing missing",
		},
		{
			type: "p",
			text: "AI training data is heavily US/EU-skewed. When a user asks 'how to run real-estate ads in India', the engines often cite generic 'how to advertise property' content because the India-specific RERA + state-RERA + Trakheesi-equivalent overlays simply aren't in their training set. A page that explicitly cites K-RERA, M-RERA, RERA-Tamil Nadu disclosure requirements with the right schema gets cited 3-5x more often than a generic property-marketing page.",
		},
		{
			type: "h3",
			text: "Gap 2: INR pricing bands underrepresented",
		},
		{
			type: "p",
			text: "Most pricing content in training data is in USD. 'How much does SEO cost' returns USD bands by default. Explicit INR pricing bands with category context (D2C SEO ₹1.5-6L/mo; Real estate ₹3-12L/mo) — published in structured tables with PriceSpecification schema — earn disproportionate AI citation share for India-specific queries.",
		},
		{
			type: "h3",
			text: "Gap 3: City-level granularity missing",
		},
		{
			type: "p",
			text: "AI engines often default to national-level answers when asked city-specific questions. 'Best SEO agency in Mumbai' often returns a generic 'best SEO agencies in India' summary. Cities with rich locally-authored content (Bangalore + Mumbai + Delhi NCR) get disproportionately better AI surface than cities without (Pune, Hyderabad, Chennai — opportunity zones).",
		},
		{
			type: "h2",
			text: "The 5-stage GEO playbook for 2026",
			id: "geo-playbook",
		},
		{
			type: "p",
			text: "This is the sequence we run on every Frameleads engagement that includes a GEO/AIO mandate. It works whether you're starting from zero or retrofitting an existing site.",
		},
		{
			type: "h3",
			text: "Stage 1: Schema-first audit",
		},
		{
			type: "p",
			text: "Before touching content, audit what schema your pages currently emit. Most Indian sites we audit have BreadcrumbList + WebPage and nothing else. Target state: every content page emits **at least** Article + FAQPage + BreadcrumbList + WebPage (with speakable specification). Comparison pages add ItemList. Definition pages add DefinedTerm. Process pages add HowTo. Run rich-results test on 10 sample pages — anything below 4 schema types per page is leaving citation share on the table.",
		},
		{
			type: "h3",
			text: "Stage 2: Content depth restructure",
		},
		{
			type: "ul",
			items: [
				"Move the direct answer into the first paragraph (60-80 words). Add a `.direct-answer` CSS class for Speakable schema targeting.",
				"Build a 4-bullet TLDR after the hero. AI engines preferentially quote TLDRs.",
				"Convert every list of comparable items into a table with column headers. Plain bullet lists get cited less than equivalent tables.",
				"Add a 'common mistakes' section to every long-form page. AI engines specifically search for anti-patterns when answering 'how to do X correctly'.",
				"Add a references block with outbound links to authoritative sources (regulators, government bodies, peer-reviewed data). Outbound citation density correlates with inbound citation rate.",
			],
		},
		{
			type: "h3",
			text: "Stage 3: Cluster build-out",
		},
		{
			type: "p",
			text: "AI engines reward topical authority. A single deep page on 'CAC for D2C in India' gets cited some of the time; a cluster of 20 supporting pages (CAC × industry, CAC × geo, CAC vs LTV, CAC payback, CAC + retention, etc.) with internal cross-links gets cited consistently. Programmatic generation is your friend here — but the cells need genuine differentiation, not template-derived thin content.",
		},
		{
			type: "h3",
			text: "Stage 4: LLM-friendly index files",
		},
		{
			type: "ul",
			items: [
				"Publish `/llms.txt` per the llmstxt.org convention — a curated index of your site's key pages, tagged for purpose.",
				"Publish `/llms-full.txt` — the same index with body content inlined. ChatGPT + Perplexity ingestion happens via these files preferentially when present.",
				"Add explicit AI-crawler allow-rules in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) — gating these crawlers is one of the worst SEO mistakes of 2025-2026.",
				"Add an IndexNow key + submission for Bing — Bing Chat / Copilot heavily index from Bing's crawl, and IndexNow accelerates that to near-real-time.",
			],
		},
		{
			type: "h3",
			text: "Stage 5: Measurement loop",
		},
		{
			type: "p",
			text: "AI citations are largely invisible in GA4. Build a monthly citation-test protocol:",
		},
		{
			type: "ol",
			items: [
				"Pick 10 high-priority queries (mix of brand + category + question intent).",
				"Run each across 5 engines: Google AI Overviews, Perplexity, ChatGPT Search, Gemini, Bing Copilot.",
				"Log whether your brand appears in the cited sources (Y/N) + position (1-N).",
				"Track citation-share over time. Healthy baseline by month 6: ≥3 of 10 queries cite your brand in at least 1 engine. Strong baseline by month 12: ≥6 of 10.",
				"When citation share moves, correlate with what changed (new schema, new cluster, new pillar) — that's your causal signal.",
			],
		},
		{
			type: "h2",
			text: "What we won't do — anti-patterns to avoid",
			id: "anti-patterns",
		},
		{
			type: "ul",
			items: [
				"**Keyword-stuffing for AI engines.** They detect it, deprecate the page, and (in our logs) cite competitors more often as a consequence.",
				"**Adversarial prompt injection in page content.** Tempting and ineffective. Adversarial-content detectors are already deployed across Google + OpenAI + Anthropic.",
				"**AI-generated content with no human review.** Token-soup content gets ranked + cited less than honest prose. The detectors don't care about provenance, they care about depth.",
				"**Blocking AI crawlers.** A small minority of publishers do this. They're getting de-cited as collateral damage; reversing the block usually takes 6-12 months to recover citation share.",
				"**Spammy structured data.** False schema (claiming HowTo when the page isn't a how-to) gets pages demoted in citation graphs.",
			],
		},
		{
			type: "h2",
			text: "Frameleads' approach — the published methodology",
			id: "frameleads-approach",
		},
		{
			type: "p",
			text: "We document the methodology openly at /frameleads-growth-system. The GEO playbook above is part of the broader Frameleads Growth System™. Cross-engagement, we measure citation share monthly across 10 fixed queries × 5 engines and publish the cohort-level results in our quarterly reports. Citation strategy isn't separate from SEO strategy — it's the 2026 evolution of SEO, and the operators who treat it that way win disproportionately during the transition.",
		},
		{
			type: "callout",
			tone: "info",
			title: "Want this applied to your site?",
			text: "Book a free 30-minute audit at /free-marketing-audit. We'll run your top 10 priority queries across 5 AI engines and tell you exactly which 3 levers move your citation share fastest — even if you don't engage us.",
		},
	],
	faqs: [
		{
			question: "Is GEO different from SEO?",
			answer:
				"GEO (Generative Engine Optimization) is a subset of SEO that specifically targets citation share in AI-generated answers (Google AI Overviews, Perplexity, ChatGPT, Gemini, Copilot). The fundamentals are the same as classical SEO — depth, authority, schema, structure — but the optimisation targets are different. A page can rank #1 organically and get cited zero times in AI Overviews if the structure isn't right.",
		},
		{
			question: "Will GEO replace SEO?",
			answer:
				"No. They complement each other. AI Overviews compress click-share on informational queries but not on commercial-intent queries. Both surfaces matter — and pages that win in one tend to win in the other when the underlying content quality is high.",
		},
		{
			question: "How long until GEO changes show in citation share?",
			answer:
				"Schema changes: 2-6 weeks. Content depth restructure: 6-12 weeks. New topical clusters: 4-9 months. Recovery from blocked AI crawlers: 6-12 months. AI engines are slower to update citation graphs than classical SEO is to update rankings — the lag is real.",
		},
		{
			question: "Should we block AI crawlers to protect our content?",
			answer:
				"No. Blocking AI crawlers is one of the most expensive mistakes of 2025-2026. Your competitors who allow crawling will absorb your category's citation share. Protecting content from AI training is a separate problem that should be solved with licensing + paywalls, not with crawler blocks.",
		},
		{
			question: "Does AI-generated content rank or get cited?",
			answer:
				"Depends entirely on quality. Token-soup AI content under-performs both in rankings and in citation graphs — the detectors don't care about provenance, they evaluate depth + structure + factual density. AI-assisted content with strong human editorial review can rank and get cited as well as fully human-written content.",
		},
		{
			question: "What's the single highest-leverage GEO move for an Indian brand?",
			answer:
				"Adding explicit INR pricing bands + Indian regulatory framework (RERA, SEBI, IRDAI, etc.) to category content with proper schema. Most pages on these topics under-serve the India-specific framing, and the AI engines reward filling that gap with disproportionate citation share.",
		},
	],
	references: [
		{
			label: "llms.txt convention — Answer.AI",
			href: "https://llmstxt.org/",
			note: "Canonical spec for /llms.txt + /llms-full.txt site index files for LLM ingestion.",
		},
		{
			label: "IndexNow protocol — Bing + Yandex",
			href: "https://www.indexnow.org/documentation",
			note: "Near-real-time URL submission protocol — critical for Bing Copilot citation latency.",
		},
		{
			label: "Google Search Central — AI Overview guidelines",
			href: "https://developers.google.com/search/docs/appearance/ai-features",
			note: "Google's official guidance on what content qualifies for AI Overview snippets.",
		},
		{
			label: "Schema.org — Article + FAQPage + HowTo",
			href: "https://schema.org/docs/full.html",
			note: "Canonical schema vocabulary. The Article + FAQPage + HowTo triad is the floor for AI-citation eligibility.",
		},
	],
	relatedSlugs: [
		"seo-vs-performance-marketing-indian-d2c",
		"10-questions-to-ask-performance-marketing-agency-india",
	],
};
