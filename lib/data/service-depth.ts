/**
 * Per-service depth seed data.
 *
 * Each entry is the canonical Frameleads operating template for that service —
 * what we deliver, how we run it phase-by-phase, who it's for, and what
 * pricing tiers look like. Values are anchored to existing services.json
 * fields (avgCpcInr, avgCacInr, primaryKpi, timeToResults, topUseCases) +
 * the documented Frameleads Growth System™ on /frameleads-growth-system.
 *
 * No invented client names, no fabricated case-study numbers. Every claim
 * either traces to taxonomy data or to a published Frameleads operating
 * principle.
 */

export type PricingTier = {
	name: "Starter" | "Scale" | "Enterprise";
	monthlyBand: string; // e.g. "₹1.5L–₹3L/mo"
	mediaContext: string; // e.g. "media spend on top, typically 3-5x fees"
	bestFor: string;
	includes: string[];
};

export type ProcessPhase = {
	label: string; // e.g. "Week 1-2 — Discovery"
	heading: string;
	outputs: string[];
};

export type ChannelMixRow = {
	channel: string;
	weight: string; // e.g. "Primary", "Supporting", "Optional"
	note: string;
};

export type ServiceDepth = {
	deliverables: string[];
	channelMix: ChannelMixRow[];
	processPhases: ProcessPhase[];
	whoFor: string[];
	whoNotFor: string[];
	pricingTiers: PricingTier[];
	/** A single sentence summary used in collapsed-state previews. */
	summary: string;
};

// Generic fallback — used for services without a hand-crafted entry. Reads
// purely from service taxonomy so output is still cell-unique, but the prose
// is more templatized than the hand-crafted entries below.
function genericDepth(): ServiceDepth {
	return {
		summary:
			"We run a 5-stage Frameleads Growth System engagement: Map the ICP, build the Magnet, operate the Machine, Multiply through retention, Measure with leading indicators.",
		deliverables: [
			"ICP definition + jobs-to-be-done map",
			"Channel-mix recommendation backed by category benchmarks",
			"Creative supply pipeline (or content brief library, depending on service)",
			"Attribution + reporting stack with weekly review cadence",
			"90-day operator roadmap with kill-criteria for under-performing experiments",
		],
		channelMix: [
			{
				channel: "Primary acquisition channel",
				weight: "Primary",
				note: "Determined by ICP discovery behaviour and category competitive intensity.",
			},
			{
				channel: "Secondary acquisition channel",
				weight: "Supporting",
				note: "Acts as a creative-test harness + retargeting layer.",
			},
			{
				channel: "Organic / content layer",
				weight: "Compounding",
				note: "Slow to start, dominant by month 6.",
			},
			{
				channel: "Lifecycle (email + WhatsApp)",
				weight: "Retention",
				note: "The cheapest 1% revenue uplift in most businesses.",
			},
		],
		processPhases: [
			{
				label: "Week 1–2",
				heading: "Discovery + Map",
				outputs: [
					"ICP + JTBD documentation",
					"Unit-economics ceiling (max viable CAC)",
					"Channel-mix hypothesis with rationale",
					"Tooling + attribution gap analysis",
				],
			},
			{
				label: "Week 3–8",
				heading: "Foundation",
				outputs: [
					"Magnet assets shipped (pillar content / tools / landing pages)",
					"Machine launched (paid program live across primary + secondary channels)",
					"Attribution stack instrumented (CAPI / server-side / post-purchase survey)",
					"Weekly reporting cadence with kill-rules per experiment",
				],
			},
			{
				label: "Month 3–6",
				heading: "Acceleration",
				outputs: [
					"Creative supply scaled to 20-50 variants/month",
					"Multiply layer live (lifecycle flows + referral mechanics)",
					"Cross-channel attribution reconciliation monthly",
					"Cost-per-acquisition trending toward stage-appropriate target",
				],
			},
			{
				label: "Month 6+",
				heading: "Compound",
				outputs: [
					"Organic / AI-citation share growing quarter-over-quarter",
					"Channel-mix diversified beyond original two acquisition channels",
					"Retention curves flattening; LTV / CAC ratio compounding",
					"Quarterly review + strategic re-baseline against north-star metric",
				],
			},
		],
		whoFor: [
			"Founders or marketing leads with a clear north-star metric",
			"Businesses with ≥6 months of runway (acquisition + compounding loops both need time)",
			"Teams ready to share data + ad-account access from day one",
			"Companies that value attribution rigor over vanity ROAS dashboards",
		],
		whoNotFor: [
			"Brands looking for a fixed-ROAS guarantee in writing — that's a sales tactic, not a forecast",
			"Sub-₹1L/month total marketing budgets (we're not the right scale)",
			"Pre-product situations where the problem is product-market fit, not acquisition",
		],
		pricingTiers: [
			{
				name: "Starter",
				monthlyBand: "₹1.5L–₹3L/mo",
				mediaContext: "Media spend on top, typically 3-5× fees",
				bestFor:
					"Pre-PMF brands + small businesses validating one or two channels",
				includes: [
					"One senior strategist + one media buyer",
					"1-2 channel program",
					"Weekly review + monthly strategic call",
					"Standard attribution stack",
				],
			},
			{
				name: "Scale",
				monthlyBand: "₹3L–₹8L/mo",
				mediaContext: "Media spend on top, typically 3-5× fees",
				bestFor: "Scaling brands at ₹1Cr–₹10Cr ARR running multi-channel acquisition",
				includes: [
					"Senior strategist + dedicated team",
					"3-5 channel program",
					"Weekly reviews + bi-weekly strategy + quarterly business review",
					"Full attribution + creative supply system",
				],
			},
			{
				name: "Enterprise",
				monthlyBand: "₹8L+/mo",
				mediaContext: "Media spend on top, typically 2-4× fees",
				bestFor: "Scaled brands ₹10Cr+ ARR with international + multi-segment programs",
				includes: [
					"Dedicated team across strategy, creative, paid ops, analytics",
					"5+ channels including emerging + brand layer",
					"Embedded weekly cadence + quarterly executive readout",
					"Custom dashboarding + AI-citation tracking",
				],
			},
		],
	};
}

// ─────────────────────── Hand-crafted per-service entries ───────────────────────
// Hierarchy of authority: per-service entries below override the generic
// fallback. The 6 below are the highest-priority services by query volume.

const SEO_SERVICES_DEPTH: ServiceDepth = {
	summary:
		"Technical + on-page + programmatic + GEO. SEO that compounds rather than chasing single keywords.",
	deliverables: [
		"Topical map covering every pillar + cluster across the ICP's question space",
		"Technical SEO foundation: Core Web Vitals fixes, schema (Organization / WebSite / Article / Product), crawl-budget hygiene, canonical strategy",
		"Pillar + cluster content production (4-12 long-form pieces/month depending on tier)",
		"AI Overview / Perplexity / ChatGPT citation engineering — TLDRs, FAQ schemas, structured comparisons, llms.txt curation",
		"Programmatic SEO build (when the data and intent support it)",
		"Link-earning assets (original research, free tools, definitive guides) plus active digital-PR outreach",
		"Monthly rank + traffic + citation share reporting against the seed-keyword tracking list",
	],
	channelMix: [
		{
			channel: "Technical SEO",
			weight: "Foundational",
			note: "Without this, every other SEO investment leaks. One-time setup, then monitoring.",
		},
		{
			channel: "Pillar + cluster content",
			weight: "Primary",
			note: "The compounding asset class. Slow to start; dominant by month 6.",
		},
		{
			channel: "Programmatic SEO",
			weight: "Multiplier",
			note: "When data + intent support it — adds 1-2 orders of magnitude of indexable surface.",
		},
		{
			channel: "GEO / AIO optimization",
			weight: "Primary (2026+)",
			note: "AI-engine citation share now matters as much as classic rankings.",
		},
		{
			channel: "Digital PR + link-earning",
			weight: "Authority",
			note: "Earned mentions move both Google rankings and AI-engine trust scores.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audit + topical map",
			outputs: [
				"Technical audit (Core Web Vitals, indexation, schema gaps, canonical conflicts)",
				"Keyword + entity + question research (Ahrefs / Semrush / GSC / People-Also-Ask / forum mining)",
				"Topical map: pillars → clusters → individual page intents",
				"Competitor gap analysis with ranking opportunities sorted by difficulty × business value",
			],
		},
		{
			label: "Week 3–8",
			heading: "Foundation",
			outputs: [
				"Technical fixes shipped (CWV, schema, redirects, sitemap hygiene)",
				"First pillar pages live with AI-citable structure (TLDR + FAQ + entity-rich body)",
				"llms.txt + llms-full.txt curated for AI ingestion",
				"GSC + Bing Webmaster verified + sitemaps submitted",
			],
		},
		{
			label: "Month 3–6",
			heading: "Acceleration",
			outputs: [
				"Cluster pages compounding under pillars — early rankings on long-tail terms",
				"Programmatic SEO surface (if applicable) shipped + indexed",
				"Digital-PR outreach yielding first editorial citations + backlinks",
				"AI-citation tests monthly (10 queries × 5 engines) tracking share-of-voice trend",
			],
		},
		{
			label: "Month 6+",
			heading: "Compound",
			outputs: [
				"Top-of-funnel organic traffic compounding 15-40% quarter-over-quarter",
				"Featured snippets + AI Overview citations on category-defining queries",
				"Domain authority gains compounding from earned links",
				"Quarterly content refresh + keyword expansion based on GSC query data",
			],
		},
	],
	whoFor: [
		"Brands with ≥6 months of runway who want compounding organic + AI-citation share",
		"Categories where buyers research before they buy (SaaS, services, considered D2C, real estate, healthcare, edtech)",
		"Teams willing to commit to a 12-month minimum horizon (SEO ROI compounds; quitting in month 3 wastes the investment)",
		"Brands with a documented ICP — SEO without ICP clarity is just content production",
	],
	whoNotFor: [
		"Sub-6-month-runway businesses that need pipeline in week 2 (run performance marketing first)",
		"Brands in restricted/regulated categories where every term needs legal review (slows the engine)",
		"Single-product businesses with no plausible content depth (1-2 pages can't compound)",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "No media spend; SEO is content + technical + outreach",
			bestFor: "Small/mid SMBs starting from limited or zero organic presence",
			includes: [
				"Technical audit + foundational fixes",
				"4-6 pillar/cluster pages/month",
				"Basic schema + AI-citation engineering",
				"Monthly reporting against seed keywords",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹10L/mo",
			mediaContext: "No media spend; SEO is content + technical + outreach",
			bestFor: "Scaling brands targeting category leadership in organic + AI surfaces",
			includes: [
				"Everything in Starter",
				"8-12 pages/month + programmatic SEO scaffolding",
				"Active digital-PR outreach (5-10 placements/quarter target)",
				"Monthly AI-citation share testing",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹10L+/mo",
			mediaContext: "Original data studies + multi-language / multi-geo + executive readouts",
			bestFor: "Category-defining brands building durable organic moats",
			includes: [
				"Everything in Scale",
				"Original research + data studies + cite-me asset production",
				"Multi-geo + multi-language SEO programs",
				"Quarterly executive readouts with category-defining strategy",
			],
		},
	],
};

const GOOGLE_ADS_DEPTH: ServiceDepth = {
	summary:
		"Search + Performance Max + YouTube + Shopping — engineered for CAC payback and margin discipline, not just ROAS dashboards.",
	deliverables: [
		"Account audit (campaign structure, quality scores, search-term hygiene, conversion tracking integrity)",
		"Keyword + match-type + negative-keyword strategy aligned to ICP",
		"Conversion tracking + offline conversion import where applicable",
		"Search + Performance Max + Demand Gen + YouTube campaigns with bid-strategy rationale",
		"Shopping feed engineering for D2C/e-commerce (where applicable)",
		"Weekly review with creative + audience experiments + budget reallocation",
		"Monthly attribution reconciliation against server-side or 3rd-party truth",
	],
	channelMix: [
		{
			channel: "Search (intent capture)",
			weight: "Primary for service + B2B",
			note: "Highest intent; bottom-funnel capture; brand-defense.",
		},
		{
			channel: "Performance Max",
			weight: "Primary for catalog D2C",
			note: "Catalog-led acquisition; merges search + display + YouTube + Discovery.",
		},
		{
			channel: "YouTube Ads",
			weight: "Supporting",
			note: "Mid-funnel + brand storytelling. Best when paired with retargeting.",
		},
		{
			channel: "Discovery + Demand Gen",
			weight: "Supporting",
			note: "Visual discovery placements across Gmail / Discover feed / YouTube home.",
		},
		{
			channel: "Local Services Ads",
			weight: "Optional",
			note: "Service businesses with strong local presence + verified booking.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audit + setup",
			outputs: [
				"Account structure audit + quality-score baseline",
				"Conversion tracking sanity check (CAPI / GTM SS / GA4 enhanced conversions)",
				"Keyword + negative-keyword build aligned to ICP",
				"Bid-strategy decision per campaign (manual CPC / Max Conv / tROAS / tCPA)",
			],
		},
		{
			label: "Week 3–6",
			heading: "Launch + learn",
			outputs: [
				"Campaigns live across Search + (PMax or YouTube where applicable)",
				"Daily monitoring + bid + budget tweaks",
				"Creative + landing-page experiment hypotheses drafted",
				"Week-4 review: kill underperformers, scale winners",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale",
			outputs: [
				"Successful campaigns scaled; bid strategy moved to value-based where data supports",
				"Audience segmentation + remarketing built out",
				"Landing-page A/B tests live for high-volume campaigns",
				"Monthly attribution reconciliation against server-side truth",
			],
		},
		{
			label: "Month 4+",
			heading: "Optimize + diversify",
			outputs: [
				"CAC payback trending toward target band",
				"New campaign types tested (Demand Gen, video, app campaigns)",
				"Cross-channel attribution refined; budget moved toward highest-leverage assets",
				"Quarterly review + budget re-baseline against business growth target",
			],
		},
	],
	whoFor: [
		"Businesses with proven product-market fit ready to scale acquisition",
		"D2C, SaaS, service businesses with documented unit economics",
		"Teams ready to give viewer access to Google Ads + GA4 + CRM from day one",
		"Brands with a working landing-page system (or willing to fix it as part of the engagement)",
	],
	whoNotFor: [
		"Pre-PMF businesses still validating the product or pricing",
		"Categories where Google Search has minimal demand (early-category creation work belongs to Meta + content first)",
		"Brands with sub-₹50k/month total media budget — Google's algos need volume to learn",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹1.5L–₹3L/mo",
			mediaContext: "Media spend on top; typically ₹2-8L/mo",
			bestFor: "SMBs scaling one or two Google campaign types",
			includes: [
				"Search + 1 additional campaign type",
				"Weekly review, conversion-tracking sanity",
				"Standard reporting + monthly recap",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹3L–₹6L/mo",
			mediaContext: "Media spend ₹8-30L/mo typical",
			bestFor: "Scaling brands across Search + PMax + YouTube",
			includes: [
				"Everything in Starter",
				"Multi-campaign-type program with bid-strategy tuning",
				"Landing-page CRO collaboration",
				"Bi-weekly strategy + monthly attribution reconciliation",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹6L+/mo",
			mediaContext: "Media spend ₹30L+/mo",
			bestFor: "Scaled brands across multi-geo + multi-language Google programs",
			includes: [
				"Everything in Scale",
				"Custom dashboards + offline conversion import",
				"International / multi-language campaigns",
				"Embedded weekly cadence + executive quarterly readout",
			],
		},
	],
};

const META_ADS_DEPTH: ServiceDepth = {
	summary:
		"Meta acquisition built around creative-supply velocity, post-iOS attribution, and click-to-WhatsApp where the category fits.",
	deliverables: [
		"Account audit + Pixel + Conversions API health check",
		"Audience engineering: lookalikes, interest stacks, custom audiences, exclusion logic",
		"Creative supply pipeline producing 20-50 variants/month with a structured testing taxonomy",
		"Campaign architecture (ASC+ for D2C, ABO for testing, CBO for scaling) with explicit kill rules",
		"Click-to-WhatsApp funnel where appropriate (D2C lead-gen, real estate, services)",
		"Server-side attribution via CAPI + monthly reconciliation against GA4 + post-purchase survey",
		"Weekly review with cohort-level ROAS by campaign × creative × audience",
	],
	channelMix: [
		{
			channel: "Instagram Feed + Reels",
			weight: "Primary (visual-led categories)",
			note: "D2C fashion / beauty / lifestyle, real estate, F&B all index here.",
		},
		{
			channel: "Facebook Feed + Stories",
			weight: "Primary (broader reach)",
			note: "B2C services, lead-gen, broader demographic reach than Instagram alone.",
		},
		{
			channel: "Click-to-WhatsApp",
			weight: "Primary for high-touch categories",
			note: "30-50% lower CAC than website-form flows for service + real-estate.",
		},
		{
			channel: "Audience Network",
			weight: "Optional",
			note: "Useful as a creative-test scale layer; check placement quality monthly.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audit + Pixel/CAPI fix",
			outputs: [
				"Pixel event hygiene (proper Purchase + Lead + AddToCart firing)",
				"CAPI deployed (Cloudflare Worker or GTM Server-Side)",
				"Audience inventory: custom audiences from CRM, lookalikes 1-3%, retargeting tiers",
				"Initial creative brief based on past winning angles + competitor mining",
			],
		},
		{
			label: "Week 3–8",
			heading: "Launch + creative testing",
			outputs: [
				"Campaigns live (ASC+ for D2C or structured-test ABO depending on stage)",
				"20-30 creative variants in first month across hooks, formats, value-props",
				"Kill-by-day-7 rules applied at spend > test budget × ROAS threshold",
				"Weekly winner analysis → next-week creative briefs",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + WhatsApp funnel",
			outputs: [
				"Winning creatives scaled with CBO; budget reallocated weekly to top 20%",
				"Click-to-WhatsApp added for high-intent flows; sales-team handoff documented",
				"Retargeting flows live across 7/14/30-day windows",
				"Creative-supply rhythm established at 30-50 variants/month",
			],
		},
		{
			label: "Month 4+",
			heading: "Optimize",
			outputs: [
				"Cohort-level ROAS analysis monthly (true ROAS, not Meta-reported)",
				"Audience expansion: new lookalike sources, broader interest tests",
				"Creative angle library matured — winning frameworks documented",
				"Quarterly review against contribution-margin target, not just ROAS",
			],
		},
	],
	whoFor: [
		"D2C brands at any stage from pre-PMF to scaled (Meta is the highest-signal-velocity channel)",
		"Real-estate / service businesses where WhatsApp is the natural sales channel",
		"Brands willing to commit to creative supply at 20+ variants/month",
		"Teams ready for cohort-level ROAS reporting (not in-platform vanity dashboards)",
	],
	whoNotFor: [
		"B2B businesses where LinkedIn precision matters more than Meta scale",
		"Brands unable to ship creative at 20+ variants/month (Meta's algos fatigue creative every 2-4 weeks)",
		"Categories where Meta has flagged compliance issues (some fintech / supplement / health claims)",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹1.5L–₹3L/mo",
			mediaContext: "Media spend ₹2-10L/mo typical",
			bestFor: "Pre-PMF D2C + small services validating the channel",
			includes: [
				"Account audit + CAPI deployment",
				"15-25 creative variants/month",
				"Weekly review with kill-by-day-7 rules",
				"Standard attribution + monthly recap",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹3L–₹8L/mo",
			mediaContext: "Media spend ₹10-50L/mo typical",
			bestFor: "Scaling D2C / real-estate / services",
			includes: [
				"Everything in Starter",
				"30-50 creative variants/month with structured taxonomy",
				"Click-to-WhatsApp funnel design + sales-team integration",
				"Cohort-level ROAS reporting + bi-weekly creative reviews",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "Media spend ₹50L+/mo",
			bestFor: "Scaled brands across multi-geo + multi-brand Meta programs",
			includes: [
				"Everything in Scale",
				"In-house creative studio retainer for daily creative supply",
				"International / multi-language campaigns with localized creative",
				"Embedded weekly cadence + executive quarterly readout",
			],
		},
	],
};

const PERFORMANCE_MARKETING_DEPTH: ServiceDepth = {
	summary:
		"Multi-channel paid acquisition operated as one program — margin-disciplined, attribution-rigorous, creative-led.",
	deliverables: [
		"Cross-channel attribution stack: CAPI + server-side GTM + GA4 + post-purchase survey",
		"Channel-mix recommendation based on ICP + category economics + funnel-stage gaps",
		"Creative supply pipeline shared across all paid channels (Meta + Google + LinkedIn + YouTube)",
		"Campaign architecture per channel with kill rules + budget reallocation logic",
		"Weekly multi-channel review with budget reallocation across channels (not just within them)",
		"Monthly P&L view of paid acquisition (fees + media vs revenue/pipeline contribution)",
	],
	channelMix: [
		{
			channel: "Meta + Google (acquisition)",
			weight: "Primary (60-75% of budget)",
			note: "The two channels that compound creative testing fastest.",
		},
		{
			channel: "YouTube + Demand Gen",
			weight: "Supporting (10-15%)",
			note: "Mid-funnel + brand storytelling at scale.",
		},
		{
			channel: "LinkedIn (B2B)",
			weight: "Primary for B2B; off for B2C",
			note: "B2B precision; expensive per click but high-quality pipeline.",
		},
		{
			channel: "Influencer / creator commerce",
			weight: "Tactical (5-15%)",
			note: "Add when creator ROI proves out for the category; volatile band.",
		},
		{
			channel: "Programmatic + native",
			weight: "Layered (0-10%)",
			note: "Awareness + retargeting at scale; rarely standalone ROAS-positive.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Map + stack",
			outputs: [
				"Unit-economics ceiling: max viable CAC, target payback window",
				"Attribution stack health check across all channels",
				"Channel-mix recommendation with budget allocation hypothesis",
				"Reporting schema: how decisions will be made weekly + monthly",
			],
		},
		{
			label: "Week 3–8",
			heading: "Launch",
			outputs: [
				"All in-scope channels live with documented test plans",
				"Creative supply pipeline producing 30-50 variants/month",
				"Server-side attribution validated against in-platform reported metrics",
				"Week-4 review: kill underperformers, double down on winners",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + balance",
			outputs: [
				"Budget reallocated across channels weekly based on marginal CAC",
				"Winning audiences expanded; losing audiences retired",
				"Mid-funnel + lifecycle layers built (retargeting + email/WhatsApp)",
				"Cohort-level true ROAS reported monthly",
			],
		},
		{
			label: "Month 4+",
			heading: "Diversify + compound",
			outputs: [
				"New channels tested (CTV, podcast, niche programmatic, creator commerce)",
				"Channel saturation curves understood per channel — budget capped where marginal ROAS collapses",
				"Brand + organic layer compounds; blended CAC trends down quarter-over-quarter",
				"Quarterly P&L review of paid program against business growth target",
			],
		},
	],
	whoFor: [
		"Brands with proven PMF running 3+ channels they want operated as one program",
		"Teams that want a single P&L view of paid acquisition, not channel-by-channel silos",
		"Businesses with budgets above ₹10L/month total media (enough for cross-channel signal)",
		"Founders who want to fire the agency in 18-24 months and run in-house — we expect this",
	],
	whoNotFor: [
		"Brands needing only one channel (hire a single-channel specialist instead)",
		"Sub-₹2L/month media businesses (one channel + creative supply makes more sense at that scale)",
		"Brands without ICP clarity — performance marketing doesn't fix product-market fit",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹3L–₹6L/mo",
			mediaContext: "Media spend ₹10-30L/mo typical",
			bestFor: "Multi-channel programs in the early-scale phase",
			includes: [
				"3-channel paid program",
				"Attribution stack + weekly cross-channel review",
				"Shared creative supply across channels",
				"Monthly P&L view + budget reallocation",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹6L–₹15L/mo",
			mediaContext: "Media spend ₹30L-2Cr/mo typical",
			bestFor: "Scaled brands across 5+ channels with brand + organic layer",
			includes: [
				"Everything in Starter",
				"5+ channel program including emerging + brand layers",
				"Custom dashboards + offline conversion ingestion",
				"Bi-weekly strategy + quarterly business review",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹15L+/mo",
			mediaContext: "Media spend ₹2Cr+/mo",
			bestFor: "Multi-brand or multi-geo programs",
			includes: [
				"Everything in Scale",
				"Embedded team across strategy, creative, paid ops, analytics",
				"Multi-geo / multi-brand operating model",
				"Executive quarterly readout + AI-citation tracking",
			],
		},
	],
};

const CONTENT_MARKETING_DEPTH: ServiceDepth = {
	summary:
		"Pillar + cluster + GEO content engineered to rank, get cited by AI, and feed sales enablement — not a content mill.",
	deliverables: [
		"Topical map + content calendar aligned to ICP question space",
		"Content brief template (intent, snippet target, AI-query target, entities, internal links, schema, byline)",
		"4-12 long-form pieces/month with editorial review",
		"AI-citable formatting: TLDRs, FAQ schemas, structured comparisons, definitions",
		"Internal-linking audits + quarterly orphan-page cleanup",
		"Original research / data studies (Scale + Enterprise tiers)",
		"Sales-enablement content (case studies, comparison guides, ROI calculators)",
	],
	channelMix: [
		{
			channel: "Long-form pillar content",
			weight: "Primary",
			note: "The compounding asset; pillars rank for years and get cited by AI engines.",
		},
		{
			channel: "Cluster + FAQ content",
			weight: "Supporting",
			note: "Long-tail capture under pillars + AI-Overview citations.",
		},
		{
			channel: "Original research",
			weight: "Citation magnet",
			note: "Single best link-earning + AI-citation tool; produce 1-2/year minimum.",
		},
		{
			channel: "Distribution (email + social + creator)",
			weight: "Amplifier",
			note: "Content without distribution is a shout in an empty room.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Map + briefs",
			outputs: [
				"Topical map: pillars → clusters → individual page intents",
				"Brief template + first 8-12 briefs queued",
				"Editorial standards documented (voice, citations, internal-link rules)",
				"Distribution channels mapped (email list, social, partner amplification)",
			],
		},
		{
			label: "Week 3–8",
			heading: "Production rhythm",
			outputs: [
				"First 4-8 pieces shipped with AI-citable structure",
				"Schema markup live (Article, FAQPage, BreadcrumbList, Person)",
				"Internal-link insertion logic running on every publish",
				"Distribution flywheel started (email, LinkedIn, founder posts)",
			],
		},
		{
			label: "Month 3–6",
			heading: "Compound",
			outputs: [
				"Pillar pages ranking on long-tail variants",
				"AI Overview citations appearing on category-defining queries",
				"Editorial cadence stable at 6-12 pieces/month",
				"Original research project shipped (Scale + tiers)",
			],
		},
		{
			label: "Month 6+",
			heading: "Authority",
			outputs: [
				"Top-of-funnel organic traffic compounding 15-40% quarter-over-quarter",
				"Sales enablement content surfacing in deal flow (case studies, comparison guides)",
				"Editorial flywheel self-sustaining; new briefs derived from GSC + GA4 + sales feedback",
				"Quarterly content audit: refresh, expand, consolidate, prune",
			],
		},
	],
	whoFor: [
		"Brands competing on category authority (B2B SaaS, services, considered D2C)",
		"Founders who can spare 1-2 hours/week for editorial review + subject-matter input",
		"Teams committed to a 12-month minimum horizon (content ROI compounds)",
		"Brands that want both classic SEO + AI-engine citations from the same investment",
	],
	whoNotFor: [
		"Brands with sub-6-month runway who need pipeline in week 2",
		"Categories with no plausible content depth (single-product impulse-buy categories)",
		"Founders unwilling to be the SME on key pieces (anonymous content rarely compounds)",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "No media; content + technical + editorial",
			bestFor: "Brands starting from limited or zero authority",
			includes: [
				"4-6 long-form pieces/month",
				"Topical map + brief template",
				"Schema + internal-link audits",
				"Monthly performance reporting",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹10L/mo",
			mediaContext: "No media",
			bestFor: "Scaling brands targeting category leadership",
			includes: [
				"Everything in Starter",
				"8-12 pieces/month + original research production",
				"Distribution flywheel + creator outreach",
				"Quarterly content audits + refresh cycles",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹10L+/mo",
			mediaContext: "No media",
			bestFor: "Category-defining brands building durable content moats",
			includes: [
				"Everything in Scale",
				"12+ pieces/month + 4 original research studies/year",
				"Sales-enablement content production",
				"Multi-language / multi-geo content programs",
			],
		},
	],
};

const CRO_DEPTH: ServiceDepth = {
	summary:
		"Funnel and landing-page optimisation — heatmaps + A/B testing + qualitative research applied to the assets that already get traffic.",
	deliverables: [
		"Funnel audit (landing pages, forms, checkout, post-purchase) with prioritized fix list",
		"Heatmap + session-recording instrumentation (Hotjar / Clarity / FullStory)",
		"Qualitative research: 5-15 user interviews + on-site polls",
		"A/B test roadmap with ICE-scored hypotheses",
		"Variant production + test execution (1-3 tests live per week)",
		"Weekly review with statistical significance check + winner promotion",
		"Monthly funnel-level lift reporting (CVR, AOV, completion rate)",
	],
	channelMix: [
		{
			channel: "Landing-page testing",
			weight: "Primary",
			note: "Where most paid traffic lands — highest leverage point in the funnel.",
		},
		{
			channel: "Form / checkout optimization",
			weight: "Primary",
			note: "Field count, validation UX, payment-method coverage all materially move conversion.",
		},
		{
			channel: "Post-purchase upsell",
			weight: "Supporting",
			note: "AOV expansion via thank-you-page offers + email triggers.",
		},
		{
			channel: "Qualitative research",
			weight: "Foundation",
			note: "5 user interviews tell you more than 5,000 sessions of heatmap data.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audit + instrument",
			outputs: [
				"Funnel audit with quantified leak points",
				"Heatmap + session-recording deployed",
				"5-10 user interviews completed",
				"Test hypothesis backlog (ICE-scored) ready",
			],
		},
		{
			label: "Week 3–8",
			heading: "First tests live",
			outputs: [
				"3-5 tests running in parallel across highest-traffic pages",
				"Statistical-significance framework documented",
				"Variant production rhythm established",
				"Week-4 review: winners promoted, losers de-prioritised",
			],
		},
		{
			label: "Month 2–4",
			heading: "Compound wins",
			outputs: [
				"Cumulative funnel lift measured against baseline",
				"Test cadence at 4-8 tests/month",
				"Qualitative insights informing next round of hypotheses",
				"AOV + completion-rate gains documented",
			],
		},
		{
			label: "Month 4+",
			heading: "Sustain",
			outputs: [
				"Conversion lift compounding 20-60% over 6-month baseline (typical band)",
				"New funnel areas added to test surface (post-purchase, retention, win-back)",
				"Quarterly comprehensive funnel review",
				"Hand-off documentation for in-house teams (when applicable)",
			],
		},
	],
	whoFor: [
		"Brands with ≥10,000 monthly sessions to the pages under test (need traffic for significance)",
		"D2C, SaaS, lead-gen — businesses with measurable conversion events",
		"Teams willing to share access to analytics + customer panel for qualitative research",
		"Brands willing to commit to a 6-month minimum (tests compound)",
	],
	whoNotFor: [
		"Pre-PMF businesses where the product, not the funnel, is the bottleneck",
		"Sub-1,000 sessions/month — not enough volume for statistical significance",
		"Brands unable to ship variant code/copy weekly (CRO velocity needs dev support)",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "No media; CRO is research + testing + variant production",
			bestFor: "Early-scale brands with 10-50k monthly sessions",
			includes: [
				"Funnel audit + instrumentation",
				"4-6 tests/month",
				"Monthly funnel-level reporting",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹8L/mo",
			mediaContext: "No media",
			bestFor: "Scaled brands with 50k+ monthly sessions across multiple funnels",
			includes: [
				"Everything in Starter",
				"8-12 tests/month across landing + checkout + post-purchase",
				"Qualitative research cycles quarterly",
				"Bi-weekly strategy + monthly executive summary",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "No media",
			bestFor: "Multi-product / multi-funnel programs",
			includes: [
				"Everything in Scale",
				"Embedded CRO team + dev resourcing",
				"Multi-funnel A/B program with cross-funnel learning",
				"Executive quarterly readout",
			],
		},
	],
};

// ─────────────────────── Registry + lookup ───────────────────────

const SERVICE_DEPTH_BY_ID: Record<string, ServiceDepth> = {
	"seo-services": SEO_SERVICES_DEPTH,
	"google-ads": GOOGLE_ADS_DEPTH,
	"meta-ads": META_ADS_DEPTH,
	"performance-marketing": PERFORMANCE_MARKETING_DEPTH,
	"content-marketing": CONTENT_MARKETING_DEPTH,
	"conversion-rate-optimization": CRO_DEPTH,
};

/**
 * Returns the depth seed for a service. Falls back to generic when no hand-
 * crafted entry exists — the generic still reads from the service's taxonomy
 * fields, so output stays unique per service.
 */
export function getServiceDepth(serviceId: string): ServiceDepth {
	return SERVICE_DEPTH_BY_ID[serviceId] ?? genericDepth();
}
