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
 * principle. The `genericDepth` fallback reads from each Service's own
 * fields so even non-hand-crafted entries stay cell-unique.
 */
import type { Service } from "./index";

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

// Generic fallback that takes the Service object so every fallback page still
// gets unique content (driven by service.topUseCases, primaryKpi, etc.).
function genericDepth(s: Service): ServiceDepth {
	const useCases = s.topUseCases || [];
	const lcLabel = s.label.toLowerCase();
	return {
		summary: `${s.shortDescription} We run ${lcLabel} as a five-stage Frameleads Growth System™ engagement — calibrated to your unit economics, instrumented end-to-end, reported weekly.`,
		deliverables: [
			`${s.label} audit + ICP-fit assessment with documented findings`,
			useCases[0]
				? `${useCases[0]} — set up + first measurable outputs`
				: `Channel-mix recommendation backed by category benchmarks`,
			useCases[1]
				? `${useCases[1]} — production pipeline with weekly cadence`
				: `Creative / asset supply pipeline with structured testing taxonomy`,
			useCases[2]
				? `${useCases[2]} — instrumented for attribution + iteration`
				: `Attribution + reporting stack with weekly review cadence`,
			`90-day operator roadmap tied to ${s.primaryKpi} as the leading indicator`,
			`Kill-rules per experiment so wasted spend is bounded by design`,
		],
		channelMix: [
			{
				channel: useCases[0] ?? `${s.label} primary channel`,
				weight: "Primary",
				note: `Where ${lcLabel} delivers the highest signal velocity for your ICP.`,
			},
			{
				channel: useCases[1] ?? `${s.label} supporting channel`,
				weight: "Supporting",
				note: `Acts as a creative-test harness + retargeting layer.`,
			},
			{
				channel: useCases[2] ?? `${s.label} compound channel`,
				weight: "Compounding",
				note: `Slow to start, dominant by month 6. Compounds without proportional spend increase.`,
			},
			{
				channel: useCases[3] ?? `Lifecycle (email + WhatsApp + SMS)`,
				weight: "Retention",
				note: `The cheapest 1% revenue uplift in most businesses — almost no brand spends enough here.`,
			},
		],
		processPhases: [
			{
				label: "Week 1–2",
				heading: `${s.label} discovery + Map`,
				outputs: [
					"ICP + JTBD documentation with category-specific buying triggers",
					`Unit-economics ceiling: max viable CAC (vs current ${s.avgCacInr} ₹ band)`,
					`${s.label}-specific tooling + attribution gap analysis`,
					"Channel-mix hypothesis with rationale + documented test plan",
				],
			},
			{
				label: "Week 3–8",
				heading: "Foundation",
				outputs: [
					`${s.label} foundation built (account/asset setup, tracking, baseline)`,
					"Production pipeline live with kill-rules + weekly review cadence",
					"Attribution stack instrumented (CAPI / server-side / GA4 / post-purchase survey)",
					`First leading-indicator readout against ${s.primaryKpi}`,
				],
			},
			{
				label: `Month 2-${s.timeToResults.includes("14") ? "4" : "6"}`,
				heading: "Acceleration",
				outputs: [
					"Winning experiments scaled; under-performers retired against kill-criteria",
					"Creative / content supply pipeline running at sustainable cadence",
					"Cross-channel attribution reconciliation monthly",
					`${s.primaryKpi} trending toward stage-appropriate target`,
				],
			},
			{
				label: "Month 6+",
				heading: "Compound",
				outputs: [
					"Channel-mix diversified beyond original two channels",
					"Retention + organic layers active; LTV / CAC ratio compounding",
					"Quarterly review + strategic re-baseline against north-star metric",
					"AI-citation share (where applicable to channel) tracked monthly",
				],
			},
		],
		whoFor: [
			`Founders or marketing leads with a clear north-star metric tied to ${s.primaryKpi}`,
			`Businesses ready for the ${s.timeToResults} timeline ${lcLabel} typically needs`,
			"Teams ready to share data + ad-account access from day one",
			"Companies that value attribution rigor over vanity dashboards",
		],
		whoNotFor: [
			"Brands looking for a fixed-ROAS guarantee in writing — that's a sales tactic, not a forecast",
			`Sub-₹1L/month total marketing budgets where ${lcLabel} can't get enough signal to learn`,
			"Pre-product situations where the bottleneck is product-market fit, not acquisition",
		],
		pricingTiers: [
			{
				name: "Starter",
				monthlyBand: "₹1.5L–₹3L/mo",
				mediaContext: "Excludes media spend. Most brands spend 3-5× fees on media for paid services.",
				bestFor: `Pre-PMF brands + small businesses validating ${lcLabel}`,
				includes: [
					"One senior strategist + one execution lead",
					`Focused ${lcLabel} program — 1-2 sub-channels`,
					"Weekly review + monthly strategic call",
					"Standard attribution + reporting stack",
				],
			},
			{
				name: "Scale",
				monthlyBand: "₹3L–₹8L/mo",
				mediaContext: "Excludes media spend. Typical multiplier 3-5×.",
				bestFor: `Scaling brands (₹1-10Cr ARR) running multi-channel ${lcLabel}`,
				includes: [
					"Senior strategist + dedicated execution team",
					"3-5 channel / format program",
					"Weekly reviews + bi-weekly strategy + quarterly business review",
					"Full attribution + creative / content supply system",
				],
			},
			{
				name: "Enterprise",
				monthlyBand: "₹8L+/mo",
				mediaContext: "Excludes media. Typical multiplier 2-4× at scale.",
				bestFor: `Scaled brands (₹10Cr+ ARR) running ${lcLabel} across multi-geo + multi-segment programs`,
				includes: [
					"Embedded team across strategy, execution, analytics",
					"5+ channels including emerging + brand layer",
					"Embedded weekly cadence + quarterly executive readout",
					"Custom dashboarding + AI-citation tracking where channel supports",
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
		"AI Overview / Perplexity / ChatGPT citation engineering — direct-answer summaries, FAQ schemas, structured comparisons, llms.txt curation",
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
				"First pillar pages live with AI-citable structure (summary + FAQ + entity-rich body)",
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
		"AI-citable formatting: direct-answer summaries, FAQ schemas, structured comparisons, definitions",
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

// ─────────────────────── Additional hand-crafted entries (Phase 7B) ───────────────────────

const LINKEDIN_ADS_DEPTH: ServiceDepth = {
	summary:
		"LinkedIn Ads for B2B SaaS, fintech, professional services — ABM, conversation ads, document ads, and lead-gen forms operated against pipeline metrics, not vanity CPMs.",
	deliverables: [
		"ICP-fit campaign architecture (Sponsored Content + Conversation + Document + Message + Lead-Gen Forms)",
		"Account-based-marketing (ABM) target-account list + tiering + bid logic",
		"Creative + copy production tuned to LinkedIn's professional context (no broTok hooks)",
		"Lead-gen form fields + qualifying logic + CRM routing (HubSpot / Salesforce / Pipedrive)",
		"LinkedIn Insights Tag + GTM + GA4 + offline-conversion-import wiring",
		"Weekly review cohort'd by job title × company size × campaign × creative",
	],
	channelMix: [
		{
			channel: "Sponsored Content (single-image + carousel)",
			weight: "Primary",
			note: "Bread-and-butter B2B reach + lead capture.",
		},
		{
			channel: "Conversation + Message Ads",
			weight: "Supporting",
			note: "Higher-intent, lower-volume; pair with retargeting tier.",
		},
		{
			channel: "Document Ads (PDF / data study)",
			weight: "High-intent",
			note: "Lower CPL than form ads for technical buyers; mid-funnel sweet spot.",
		},
		{
			channel: "Lead-Gen Forms",
			weight: "Conversion",
			note: "Pre-filled fields → 2-4× higher conversion than off-platform forms.",
		},
		{
			channel: "Audience-Network display",
			weight: "Optional",
			note: "Useful for retargeting; weak for prospecting.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "ICP + targeting",
			outputs: [
				"ABM target-account list (top 200-500 named accounts)",
				"Audience matrix: title × seniority × function × company size",
				"Insights-Tag + conversion-tracking sanity check",
				"Creative brief based on past winning LinkedIn examples",
			],
		},
		{
			label: "Week 3–6",
			heading: "Launch",
			outputs: [
				"Sponsored Content + Lead-Gen Forms live across 3-5 audiences",
				"Daily CPL monitoring + bid tuning",
				"First lead quality review (sales-team feedback by day 14)",
				"Week-4 review: kill loss, scale wins, prep document/conversation tests",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + diversify",
			outputs: [
				"Document Ads + Conversation Ads launched for warm + cold cohorts",
				"Offline conversion import live (Closed-Won feedback loop)",
				"ABM tier-2 + tier-3 retargeting layers active",
				"Monthly pipeline reconciliation: leads → MQLs → SQLs → pipeline → revenue",
			],
		},
		{
			label: "Month 4+",
			heading: "Optimise pipeline",
			outputs: [
				"CAC payback against B2B norms (8-14 months India / 12-18 global)",
				"Audience exhaustion identified; new ICP wedges tested",
				"Brand-layer campaigns added (video reach for top-of-funnel mind-share)",
				"Quarterly review against pipeline-influenced revenue target",
			],
		},
	],
	whoFor: [
		"B2B SaaS Series A+ with documented ICP and ACV ≥ $10k",
		"Professional services + fintech + B2B fintech with named-account targeting",
		"Brands with a sales motion ready to handle LinkedIn-sourced leads (not consumer)",
		"Teams with CRM + offline-conversion-import set up (or willing to set up)",
	],
	whoNotFor: [
		"B2C / D2C — LinkedIn CPM is the highest in India; ROI rarely works",
		"Brands without a sales team — leads will rot without follow-up",
		"Sub-₹2L/month media budget — LinkedIn's algos need volume to learn",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "Media ₹3-10L/mo typical",
			bestFor: "B2B brands launching LinkedIn for the first time",
			includes: [
				"Sponsored Content + Lead-Gen Forms",
				"CRM routing + Insights Tag setup",
				"Weekly review + monthly pipeline reconciliation",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹8L/mo",
			mediaContext: "Media ₹10-50L/mo typical",
			bestFor: "Scaling B2B brands across ABM + multi-format LinkedIn",
			includes: [
				"Everything in Starter",
				"ABM tiering + Document + Conversation Ads",
				"Offline conversion import + closed-won loop",
				"Bi-weekly strategy + quarterly business review",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "Media ₹50L+/mo",
			bestFor: "Multi-geo + multi-segment B2B programs",
			includes: [
				"Everything in Scale",
				"Dedicated paid-ops + RevOps integration",
				"Multi-language LinkedIn programs",
				"Executive quarterly pipeline readout",
			],
		},
	],
};

const YOUTUBE_ADS_DEPTH: ServiceDepth = {
	summary:
		"YouTube Ads for awareness, mid-funnel, and Performance Max video — instrumented for view-through, not just direct conversion.",
	deliverables: [
		"Campaign architecture across In-Stream + Shorts + Discovery + Demand Gen + Action campaigns",
		"Video creative briefs with hook + payoff + CTA structure documented",
		"Audience build-out: in-market + affinity + custom-intent + remarketing tiers",
		"GA4 + YouTube Analytics + view-through attribution stack",
		"Brand-suitability + placement-exclusion lists configured",
		"Weekly performance review with view-through conversion analysis",
	],
	channelMix: [
		{
			channel: "In-Stream skippable",
			weight: "Primary (cost-efficient reach)",
			note: "Pays only after 30 seconds or click; CPM efficient.",
		},
		{
			channel: "YouTube Shorts",
			weight: "Primary (Gen-Z + mobile reach)",
			note: "Lowest CPM format; vertical 9:16 creative required.",
		},
		{
			channel: "Demand Gen",
			weight: "Conversion-focused",
			note: "Goal-based optimization for purchase / lead / signup.",
		},
		{
			channel: "Discovery (formerly TrueView Discovery)",
			weight: "Supporting",
			note: "Surfaces in Watch Next + Home feed; mid-funnel.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audience + creative brief",
			outputs: [
				"Audience matrix: in-market + affinity + custom-intent + remarketing",
				"Creative brief: hook (0-5s) + payoff (5-30s) + CTA structure",
				"YouTube Analytics + GA4 attribution wiring",
				"Brand-suitability + placement-exclusion list",
			],
		},
		{
			label: "Week 3–6",
			heading: "Launch + iterate creative",
			outputs: [
				"In-Stream + Shorts campaigns live across 3-5 audiences",
				"3-5 video variants tested per audience",
				"Daily monitoring of view rate + cost-per-view",
				"Week-4 review: kill low view-rate, scale winners, prep Demand Gen tests",
			],
		},
		{
			label: "Month 2–4",
			heading: "Add conversion + mid-funnel",
			outputs: [
				"Demand Gen + remarketing campaigns launched",
				"View-through conversion analysis monthly",
				"Creative variants expanded to 5-8 per audience",
				"Cross-channel attribution: YouTube assist + last-click reconciliation",
			],
		},
		{
			label: "Month 4+",
			heading: "Scale",
			outputs: [
				"Winning audiences expanded; under-performers de-prioritised",
				"Brand-layer campaigns added (skippable + non-skippable reach)",
				"Creative-supply rhythm stable at 8-12 new variants/month",
				"Quarterly review against blended ROAS + brand-lift signals",
			],
		},
	],
	whoFor: [
		"D2C brands with video creative capability (or willing to build it)",
		"Brands ready to instrument view-through + last-click in parallel",
		"Categories where storytelling + demonstration matter (apparel, food, education, fitness)",
		"Mid-to-large media budgets where YouTube earns its place in the mix (₹3L+ media monthly)",
	],
	whoNotFor: [
		"Brands without video creative supply — image-only ads don't run on YouTube",
		"Sub-₹3L/mo media budgets — view-rates need volume to optimise",
		"Categories where TrueView's skippable model misses the buying moment (high-urgency, search-led)",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "Media ₹3-10L/mo typical",
			bestFor: "Brands adding YouTube to an existing paid mix",
			includes: [
				"In-Stream + Shorts campaigns",
				"Video creative brief support",
				"Weekly review + monthly performance",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹8L/mo",
			mediaContext: "Media ₹10-50L/mo typical",
			bestFor: "Scaling brands across multi-format YouTube",
			includes: [
				"Everything in Starter",
				"Demand Gen + Discovery + remarketing tiers",
				"View-through attribution + brand-lift analysis",
				"Bi-weekly creative reviews",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "Media ₹50L+/mo",
			bestFor: "Multi-geo + multi-language YouTube programs",
			includes: [
				"Everything in Scale",
				"In-house video production retainer or studio partnership",
				"Multi-language creative + dub/subtitle workflow",
				"Executive quarterly brand-lift + ROAS readout",
			],
		},
	],
};

const WHATSAPP_MARKETING_DEPTH: ServiceDepth = {
	summary:
		"WhatsApp Business marketing — click-to-WhatsApp ads, broadcast automation, conversation flows, and CRM integration for high-intent lead capture.",
	deliverables: [
		"WhatsApp Business API setup + verification (Meta Business Manager)",
		"Click-to-WhatsApp campaign architecture on Meta + Google",
		"Broadcast list segmentation + opt-in compliance + DPDP-aware data handling",
		"Conversation flows: welcome + lead-qualifying + handoff to sales / booking",
		"CRM integration: leads route to HubSpot / Pipedrive / Zoho / custom",
		"Compliance check: WhatsApp policy + DPDP consent + opt-out flows",
		"Weekly review by campaign × creative × audience × conversation completion rate",
	],
	channelMix: [
		{
			channel: "Click-to-WhatsApp (Meta ads)",
			weight: "Primary",
			note: "30-50% lower CAC than website-form flows for service categories.",
		},
		{
			channel: "Click-to-WhatsApp (Google ads)",
			weight: "Supporting",
			note: "Higher intent capture; pairs with Search campaigns for service businesses.",
		},
		{
			channel: "WhatsApp broadcast / re-engagement",
			weight: "Retention",
			note: "Opt-in lists are the highest-engagement direct channel in India.",
		},
		{
			channel: "Conversation flow automation",
			weight: "Foundation",
			note: "Without good flow design, lead quality drops fast.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Setup + compliance",
			outputs: [
				"WhatsApp Business API verified (BSP setup if required)",
				"DPDP-aware consent + opt-out flow documented",
				"Conversation flow design: welcome → qualify → handoff",
				"CRM routing tested end-to-end",
			],
		},
		{
			label: "Week 3–6",
			heading: "Launch",
			outputs: [
				"Click-to-WhatsApp campaigns live across Meta (and Google if relevant)",
				"3-5 audiences tested with 4-6 creative variants each",
				"Conversation-completion rate monitored daily",
				"Week-4 review: sales-team feedback on lead quality + flow tuning",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + broadcast layer",
			outputs: [
				"Winning audiences scaled; conversation flows refined",
				"Broadcast list segmentation live for repeat-purchase categories",
				"Re-engagement campaigns for cold leads (compliant + opt-in)",
				"Monthly lead-quality reconciliation with sales pipeline",
			],
		},
		{
			label: "Month 4+",
			heading: "Optimise",
			outputs: [
				"Conversation-to-conversion benchmarks established",
				"Sales-team workflow integrated end-to-end",
				"Cross-channel attribution: WhatsApp assist + closed-won tracking",
				"Quarterly review against blended CAC + LTV / repeat-rate",
			],
		},
	],
	whoFor: [
		"Real estate / services / D2C with high-touch sales conversations",
		"Categories where Indian buyers prefer WhatsApp over forms / phone",
		"Brands with a sales team that operates inside WhatsApp Business",
		"Founders willing to invest in opt-in list growth (long-term LTV play)",
	],
	whoNotFor: [
		"Pure self-serve digital products (sales conversation not needed)",
		"Categories where DPDP compliance friction outweighs WhatsApp's intimacy advantage",
		"Brands without a sales operator who can handle WhatsApp inbound",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹1.5L–₹3L/mo",
			mediaContext: "Media ₹2-10L/mo + WhatsApp BSP costs",
			bestFor: "Service businesses + real-estate launching click-to-WhatsApp",
			includes: [
				"Click-to-WhatsApp setup + 1-2 campaigns",
				"Conversation flow design",
				"Weekly review + monthly recap",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹3L–₹6L/mo",
			mediaContext: "Media ₹10-50L/mo + WhatsApp BSP",
			bestFor: "Scaling brands across click-to-WhatsApp + broadcast + automation",
			includes: [
				"Everything in Starter",
				"Multi-campaign click-to-WhatsApp + broadcast layer",
				"CRM integration + sales-team workflow",
				"Bi-weekly strategy + quarterly pipeline review",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹6L+/mo",
			mediaContext: "Media ₹50L+/mo + enterprise BSP",
			bestFor: "Multi-brand / multi-region WhatsApp programs",
			includes: [
				"Everything in Scale",
				"Custom conversation-flow engineering",
				"AI-assisted message routing (where compliant)",
				"Executive quarterly readout",
			],
		},
	],
};

const EMAIL_MARKETING_DEPTH: ServiceDepth = {
	summary:
		"Email + lifecycle automation that compounds — welcome series, transactional, lifecycle, win-back, post-purchase. Built for LTV expansion, not blast-and-pray.",
	deliverables: [
		"ESP audit + migration (Klaviyo / Iterable / Customer.io / Mailchimp) where relevant",
		"Lifecycle map: welcome → engagement → conversion → retention → win-back",
		"Transactional email + receipt + shipping flows (revenue-protected, brand-consistent)",
		"Segmentation logic: RFM + behaviour + product-affinity",
		"Deliverability + DKIM/SPF/DMARC + domain warmup where needed",
		"A/B testing rhythm on subject line + CTA + creative + send time",
		"Monthly LTV-attribution reporting against email-influenced revenue",
	],
	channelMix: [
		{
			channel: "Transactional + post-purchase",
			weight: "Foundation",
			note: "Highest-opened email category; revenue-protected if you instrument it.",
		},
		{
			channel: "Welcome / onboarding series",
			weight: "Primary",
			note: "5-12 email sequence that converts free→paid or first-purchase.",
		},
		{
			channel: "Lifecycle (RFM-segmented)",
			weight: "Retention",
			note: "The compounding asset; LTV expansion lever.",
		},
		{
			channel: "Win-back + reactivation",
			weight: "Recovery",
			note: "Cheapest 5-15% revenue reclaim opportunity in most brands.",
		},
		{
			channel: "Newsletter / content",
			weight: "Brand",
			note: "Optional; useful if you have editorial cadence to support it.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audit + map",
			outputs: [
				"ESP audit + deliverability check (DKIM/SPF/DMARC + sender reputation)",
				"Lifecycle map documenting all touchpoints (existing + planned)",
				"Segmentation logic + initial RFM scoring",
				"Brand voice + email-template system",
			],
		},
		{
			label: "Week 3–8",
			heading: "Flows live",
			outputs: [
				"Welcome series + transactional + post-purchase shipped",
				"First lifecycle automations live (abandoned cart, browse abandonment, repeat-purchase)",
				"A/B test framework operating (subject line + CTA + send time)",
				"Deliverability monitoring + warmup if needed",
			],
		},
		{
			label: "Month 2–4",
			heading: "Expand + retention",
			outputs: [
				"RFM-segmented lifecycle flows active across all customer states",
				"Win-back + reactivation flows live for cold cohorts",
				"Cross-channel attribution: email assist + last-click reconciliation",
				"Monthly LTV-attribution reporting",
			],
		},
		{
			label: "Month 4+",
			heading: "Compound",
			outputs: [
				"Repeat-purchase rate uplift (typical band: +5-15 points over 6 months)",
				"Newsletter / content layer added if editorial cadence supports",
				"Quarterly content + creative refresh based on engagement data",
				"Executive quarterly review against blended LTV / CAC",
			],
		},
	],
	whoFor: [
		"D2C / SaaS / services with a transactional layer that needs lifecycle treatment",
		"Brands with ≥5,000 contacts (enough volume for segmentation + A/B)",
		"Teams ready to share customer data + product analytics for segmentation",
		"Founders who understand LTV expansion is cheaper than acquisition spend",
	],
	whoNotFor: [
		"Sub-1,000-contact lists (do acquisition first; lifecycle later)",
		"Brands without a transactional event (one-time purchase only, no retention)",
		"Categories with single-shot business models (no LTV to expand)",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹1.5L–₹3L/mo",
			mediaContext: "ESP costs separate (₹15k-1L/mo typical for Indian D2C)",
			bestFor: "Early-scale brands launching lifecycle",
			includes: [
				"Welcome + transactional + 3-5 lifecycle flows",
				"Weekly review + monthly LTV reporting",
				"Standard A/B testing rhythm",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹3L–₹6L/mo",
			mediaContext: "ESP costs separate (₹1-5L/mo typical at scale)",
			bestFor: "Scaling D2C / SaaS with multi-flow lifecycle programs",
			includes: [
				"Everything in Starter",
				"Full RFM lifecycle map + win-back + post-purchase",
				"Deliverability monitoring + dedicated IP if needed",
				"Bi-weekly strategy + quarterly LTV review",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹6L+/mo",
			mediaContext: "ESP + CDP costs separate",
			bestFor: "Multi-brand / multi-product lifecycle programs",
			includes: [
				"Everything in Scale",
				"Custom segmentation via CDP integration",
				"AI-assisted send-time + content optimisation",
				"Executive quarterly LTV readout",
			],
		},
	],
};

const PPC_MANAGEMENT_DEPTH: ServiceDepth = {
	summary:
		"Performance-led paid acquisition with margin discipline — Google + Bing + Meta + the right niche channels operated as a single P&L.",
	deliverables: [
		"PPC account audit + restructure (campaign architecture, quality scores, negatives, conversion tracking)",
		"Cross-platform attribution (CAPI / server-side / GTM SS / GA4 / post-purchase survey)",
		"Bid-strategy choice per campaign (manual / tCPA / tROAS / Max Conv / Max Conv Value)",
		"Search-term hygiene + negative-keyword + audience-exclusion sweeps weekly",
		"Creative + landing-page experiment roadmap with ICE-scored hypotheses",
		"Weekly review with budget reallocation logic + kill rules",
		"Monthly attribution reconciliation against blended business metric",
	],
	channelMix: [
		{
			channel: "Google Search + Performance Max",
			weight: "Primary",
			note: "Intent capture + catalog acquisition; the backbone of most PPC programs.",
		},
		{
			channel: "Meta (Facebook + Instagram)",
			weight: "Primary",
			note: "Highest creative-test velocity; complements Google's intent capture.",
		},
		{
			channel: "Microsoft / Bing Ads",
			weight: "Supporting",
			note: "Underpriced for B2B + older-demographic categories.",
		},
		{
			channel: "Niche networks (TikTok / Pinterest / Snap)",
			weight: "Tactical",
			note: "Add when ICP overlap justifies; rarely standalone.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Audit + restructure",
			outputs: [
				"Multi-platform account audit (campaign structure, QS, conversion integrity)",
				"Conversion-tracking sanity check across all platforms",
				"Keyword + negative-keyword + audience-exclusion baseline",
				"Bid-strategy decision per campaign (with rationale)",
			],
		},
		{
			label: "Week 3–8",
			heading: "Foundation + launch",
			outputs: [
				"Restructured campaigns live across primary channels",
				"Creative + landing-page experiments queued + first round launched",
				"Daily monitoring + budget tuning by campaign × channel",
				"Week-4 review: kill low performers, scale winners",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + budget rebalance",
			outputs: [
				"Budget reallocated across channels based on marginal CAC",
				"Audience expansion + new campaign types tested (Shopping, Demand Gen, etc.)",
				"Landing-page A/B tests live for high-traffic campaigns",
				"Monthly attribution reconciliation",
			],
		},
		{
			label: "Month 4+",
			heading: "Diversify + compound",
			outputs: [
				"New channels added (Bing, niche networks where ROI proves out)",
				"Brand-defense + retargeting tiers stable",
				"Quarterly P&L review of paid program against business growth target",
			],
		},
	],
	whoFor: [
		"Brands with PMF running 2+ paid channels needing single-program operating discipline",
		"Teams that want a single P&L view of PPC, not channel-by-channel silos",
		"Businesses with budgets above ₹5L/month total media",
		"Founders willing to share data + ad-account access from day one",
	],
	whoNotFor: [
		"Single-channel businesses (hire a Google or Meta specialist instead)",
		"Sub-₹2L/month media (too little to sustain cross-channel experimentation)",
		"Brands without ICP clarity — PPC doesn't fix product-market-fit issues",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "Media ₹5-30L/mo typical",
			bestFor: "Multi-channel programs in early-scale phase",
			includes: [
				"2-3 channel program",
				"Weekly cross-channel review",
				"Monthly attribution reconciliation",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹8L/mo",
			mediaContext: "Media ₹30L-2Cr/mo typical",
			bestFor: "Scaled brands across 4-5 channels",
			includes: [
				"Everything in Starter",
				"Custom dashboards + offline conversion import",
				"Landing-page CRO collaboration",
				"Bi-weekly strategy + quarterly business review",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "Media ₹2Cr+/mo",
			bestFor: "Multi-brand / multi-geo programs",
			includes: [
				"Everything in Scale",
				"Embedded team across paid ops + creative + analytics",
				"Multi-geo programs with localised creative",
				"Executive quarterly readout",
			],
		},
	],
};

const SOCIAL_MEDIA_MARKETING_DEPTH: ServiceDepth = {
	summary:
		"Organic social + creator partnerships + paid social — operated as one program so brand-building and acquisition compound each other.",
	deliverables: [
		"Channel-priority recommendation (Instagram + LinkedIn + YouTube Shorts + TikTok + niche)",
		"Content calendar + production pipeline (10-25 posts/month minimum for visibility)",
		"Creator + influencer strategy (organic + paid + CPS deals where category fits)",
		"Community management + comment / DM response SLAs",
		"Paid amplification of top organic posts (best-converting media buy in 2026)",
		"Brand-voice + visual-identity guide for cross-channel consistency",
		"Monthly performance review across reach + engagement + share-of-voice + conversion-assist",
	],
	channelMix: [
		{
			channel: "Instagram (Feed + Reels + Stories)",
			weight: "Primary for B2C",
			note: "Visual-led categories: fashion / beauty / F&B / real estate / wellness / D2C.",
		},
		{
			channel: "LinkedIn",
			weight: "Primary for B2B",
			note: "Brand-building + thought leadership + organic lead-gen.",
		},
		{
			channel: "YouTube Shorts + TikTok",
			weight: "Reach",
			note: "Gen-Z + mid-market reach; vertical video assets.",
		},
		{
			channel: "Creator partnerships",
			weight: "Amplifier",
			note: "Mix of macro / mid / nano based on category economics.",
		},
		{
			channel: "X (Twitter)",
			weight: "Optional",
			note: "Strong for SaaS founder-led; weak for most B2C categories.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Channel + content strategy",
			outputs: [
				"Channel-priority recommendation based on ICP + category",
				"Content calendar (first 30 days)",
				"Brand voice + visual identity documented",
				"Creator-strategy outline (where applicable)",
			],
		},
		{
			label: "Week 3–8",
			heading: "Production rhythm",
			outputs: [
				"Daily / 3x-weekly posting cadence established",
				"Engagement + DM response SLAs operating",
				"First creator collaborations live",
				"Paid-amplification budget activated on top organic posts",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + creator network",
			outputs: [
				"Creator network expanded (3-10 active partners depending on tier)",
				"Top-performing content formats identified + scaled",
				"Cross-channel content repurposing pipeline running",
				"Share-of-voice tracking + competitor benchmarking monthly",
			],
		},
		{
			label: "Month 4+",
			heading: "Compound",
			outputs: [
				"Brand mention growth quarter-over-quarter",
				"Organic reach + engagement compounding without proportional content increase",
				"Creator program ROI proven + scaled where economics work",
				"Quarterly review against blended brand-lift + assist-conversion metrics",
			],
		},
	],
	whoFor: [
		"Brands willing to commit to a content cadence (10+ posts/month minimum)",
		"Founders / spokespeople willing to be face-of-brand on at least one channel",
		"Categories where organic social compounds (lifestyle / consumer / SaaS founder-led)",
		"Teams with creative-supply capacity (in-house or studio retainer)",
	],
	whoNotFor: [
		"Brands looking for guaranteed direct-conversion ROI from organic social",
		"Categories with no plausible organic-social hook (deep B2B utility software)",
		"Teams unable to sustain 10+ posts/month — under that, the algos don't optimize for you",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "Paid amplification ₹1-5L/mo + creator costs separate",
			bestFor: "Brands launching social with 1-2 priority channels",
			includes: [
				"Channel strategy + brand-voice guide",
				"10-15 posts/month",
				"Community management",
				"Monthly performance review",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹8L/mo",
			mediaContext: "Paid amplification ₹5-25L/mo + creator costs",
			bestFor: "Scaling brands across 3-5 channels with creator program",
			includes: [
				"Everything in Starter",
				"3-5 channel program + creator network",
				"15-25 posts/month + paid amplification",
				"Bi-weekly content reviews",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "Paid amplification ₹25L+/mo + dedicated creator budget",
			bestFor: "Multi-brand / multi-geo social programs",
			includes: [
				"Everything in Scale",
				"In-house content studio retainer",
				"Multi-language / multi-region social",
				"Executive quarterly brand-lift readout",
			],
		},
	],
};

// ─────────────────────── Phase 14 — branding / website-dev / analytics-and-automations ───────────────────────

const BRANDING_DEPTH: ServiceDepth = {
	summary:
		"Brand identity, visual systems, and creative direction — built so every paid + organic asset that follows pulls from one coherent source.",
	deliverables: [
		"Brand strategy: positioning, audience archetypes, message house, tone of voice",
		"Visual identity system: logo, type, colour, motion, photography direction",
		"Design system + component library (Figma) ready for product, web, and marketing reuse",
		"Brand guidelines document covering print, digital, social, packaging, and AV",
		"Asset library: hero illustrations, iconography, presentation templates, social templates",
		"Rollout support across marketing site, sales collateral, ad creative templates, packaging",
		"Quarterly brand-consistency audit + refresh recommendations",
	],
	channelMix: [
		{
			channel: "Brand strategy + positioning",
			weight: "Foundation",
			note: "Done first. Every visual + creative decision downstream traces back to the documented positioning.",
		},
		{
			channel: "Visual identity system",
			weight: "Primary",
			note: "Logo + type + colour + motion + photography direction; the assets every other team pulls from.",
		},
		{
			channel: "Design system in Figma",
			weight: "Compounding",
			note: "Components reused across web, ad creative, sales collateral; saves 30–60% of asset-production hours over 12 months.",
		},
		{
			channel: "Rollout + guidelines",
			weight: "Supporting",
			note: "Brand guidelines document + on-call asset support during rollout. Prevents brand drift from in-house teams executing without strategic context.",
		},
	],
	processPhases: [
		{
			label: "Week 1–3",
			heading: "Discovery + strategy",
			outputs: [
				"Stakeholder + customer interviews (8–15)",
				"Competitive + category audit",
				"Positioning territory exploration → recommended positioning",
				"Message house: primary value prop + supporting pillars + proof",
			],
		},
		{
			label: "Week 4–8",
			heading: "Visual identity design",
			outputs: [
				"Logo + wordmark exploration → final marks",
				"Type + colour + motion + photography direction defined",
				"Design system foundations in Figma (components, tokens, spacing scale)",
				"Sample applications: marketing site hero, social post, ad creative, packaging",
			],
		},
		{
			label: "Week 9–14",
			heading: "Rollout + handover",
			outputs: [
				"Brand guidelines document delivered (PDF + web)",
				"Marketing site refresh (when in scope) shipped",
				"Sales collateral templates: deck, one-pagers, email signatures",
				"On-call asset support during in-house team rollout",
			],
		},
		{
			label: "Month 4+",
			heading: "Refresh cadence",
			outputs: [
				"Quarterly brand-consistency audit",
				"Asset library expansions for new product lines / campaigns",
				"Annual creative refresh against fatigue + market evolution",
				"Hand-off documentation maintained for in-house design team continuity",
			],
		},
	],
	whoFor: [
		"Brands at inflection points: rebrands, category repositioning, post-funding refreshes",
		"Founders who recognise that fragmented brand expression is leaking conversion + trust",
		"Companies with multi-product / multi-region rollout where consistency matters",
		"Brands ready to invest in a system, not a one-off logo or social asset",
	],
	whoNotFor: [
		"Brands looking for a logo for ₹50k — that's a freelancer brief, not a system engagement",
		"Pre-PMF startups where positioning is still moving every 30 days — brand work compounds only on stable positioning",
		"Companies unwilling to commit to a 8–14 week strategy + design timeline",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹4L–₹8L one-time + ₹50k/mo retainer",
			mediaContext: "Project fee for the system build + optional monthly retainer for asset support",
			bestFor: "Early-stage brands rebranding for the first proper time",
			includes: [
				"Brand strategy + positioning",
				"Visual identity (logo, type, colour)",
				"Brand guidelines PDF",
				"5–10 launch assets (social, web hero, business cards)",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹10L–₹25L one-time + ₹1L/mo retainer",
			mediaContext: "Project fee for full system + ongoing retainer for rollout + refresh",
			bestFor: "Funded brands or scaled D2C undergoing meaningful rebrand or category repositioning",
			includes: [
				"Everything in Starter",
				"Design system in Figma (components + tokens)",
				"Marketing site design (build separate)",
				"Sales collateral templates (deck, one-pagers, email signatures)",
				"Quarterly brand consistency audit",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹25L+ one-time + ₹2L+/mo retainer",
			mediaContext: "Multi-brand / multi-region engagements",
			bestFor: "Enterprise brands with sub-brand systems, multi-region rollout, or category-creation positioning",
			includes: [
				"Everything in Scale",
				"Sub-brand / family-brand system architecture",
				"Motion + AV + photography direction at scale",
				"On-call senior creative director embedded with in-house team",
				"Annual creative review + market-evolution refresh",
			],
		},
	],
};

const WEBSITE_DEVELOPMENT_DEPTH: ServiceDepth = {
	summary:
		"Fast, conversion-engineered marketing sites + commerce stores — Next.js, Webflow, Shopify, or headless depending on the use case.",
	deliverables: [
		"Technology recommendation: Next.js vs Webflow vs Shopify vs headless, anchored to your team's maintenance capacity + SEO needs",
		"Information architecture + content modelling for marketing or commerce",
		"Design-system implementation (Tailwind / shadcn / Figma tokens)",
		"Front-end build with Core Web Vitals as a hard gate (LCP < 2.0s, INP < 200ms, CLS < 0.1)",
		"SEO foundations: schema injection, sitemap automation, breadcrumb logic, semantic HTML",
		"Programmatic SEO scaffolding (when the data + intent support it)",
		"CMS integration (Sanity, Contentful, Strapi, Storyblok, or Shopify-native)",
		"Analytics + tag-management wired (GA4, GTM, server-side via dedicated route)",
		"Hand-off documentation + 30-day post-launch support",
	],
	channelMix: [
		{
			channel: "Next.js (App Router + RSC)",
			weight: "Primary",
			note: "Default for content-heavy marketing sites, programmatic SEO at scale, and headless commerce. Deploys to Vercel or Cloudflare Workers.",
		},
		{
			channel: "Webflow",
			weight: "Supporting",
			note: "Best when in-house marketing team will own the CMS and dev capacity is constrained. Trade-off: less control over performance + custom logic.",
		},
		{
			channel: "Shopify (Plus or standard)",
			weight: "Primary",
			note: "D2C commerce default. Shopify-native vs Shopify Hydrogen (headless) chosen against catalog complexity + custom-UX needs.",
		},
		{
			channel: "Headless (Next.js + Sanity / Shopify)",
			weight: "Compounding",
			note: "For brands where marketing site + commerce + content need shared design system and editorial workflows. Higher upfront build, lower long-term content velocity.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Discovery + architecture",
			outputs: [
				"Stakeholder interviews + technical audit of current stack",
				"Technology recommendation (Next.js / Webflow / Shopify / headless)",
				"Information architecture + content model",
				"Performance + SEO baseline measurement",
			],
		},
		{
			label: "Week 3–8",
			heading: "Design + build foundations",
			outputs: [
				"Design system implementation (Figma → code)",
				"Component library built (Tailwind + shadcn or framework equivalent)",
				"Core page templates shipped: home, service, money page, blog index",
				"CMS integrated; content team onboarded to authoring flow",
			],
		},
		{
			label: "Week 9–12",
			heading: "Scale + ship",
			outputs: [
				"All remaining page templates built",
				"Programmatic SEO scaffolding live (if scoped)",
				"Analytics + GTM + server-side wired",
				"Core Web Vitals certified across templates",
			],
		},
		{
			label: "Week 13+",
			heading: "Launch + iterate",
			outputs: [
				"Soft launch + monitoring",
				"30-day post-launch support (bugs + analytics validation)",
				"Hand-off documentation delivered",
				"Quarterly performance + SEO review cadence",
			],
		},
	],
	whoFor: [
		"Funded brands or scaled D2C with marketing site that's bottlenecking SEO or conversion",
		"Brands moving from Wix / Squarespace / WordPress to a performance-engineered modern stack",
		"D2C brands building Shopify Plus or headless commerce builds",
		"Companies investing in programmatic SEO at 1,000+ page scale",
	],
	whoNotFor: [
		"Brands looking for a 5-page brochure site for ₹50k — that's a freelancer brief",
		"Companies unwilling to commit to a 8–14 week build + soft-launch cycle",
		"Brands without a marketing or content owner who can keep the CMS populated post-launch",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹4L–₹10L project fee + ₹30k/mo support",
			mediaContext: "Project fee for build + optional monthly support retainer",
			bestFor: "Marketing site rebuilds for early-stage brands (≤10 pages)",
			includes: [
				"Next.js or Webflow build",
				"Design-system implementation",
				"5–10 core pages",
				"GA4 + GTM wired",
				"30-day post-launch support",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹10L–₹30L project fee + ₹75k/mo support",
			mediaContext: "Project fee for build + ongoing iteration retainer",
			bestFor: "Funded brands or scaled D2C with content-heavy or programmatic-SEO sites",
			includes: [
				"Everything in Starter",
				"Programmatic SEO scaffolding (1k–10k pages)",
				"Headless CMS integration",
				"Server-side GTM + Meta CAPI wired",
				"Quarterly performance + SEO review",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹30L+ project fee + ₹1.5L+/mo support",
			mediaContext: "Multi-locale / multi-brand engagements; Shopify Plus + headless commerce",
			bestFor: "Enterprise brands building commerce or content platforms at scale",
			includes: [
				"Everything in Scale",
				"Multi-locale / multi-language architecture",
				"Shopify Plus + Hydrogen headless build",
				"Custom CMS workflows + editorial automations",
				"Embedded engineering + design ops",
			],
		},
	],
};

const ANALYTICS_AUTOMATIONS_DEPTH: ServiceDepth = {
	summary:
		"GA4 + GTM server-side + Meta CAPI + Google Ads server-side conversions + lifecycle automations — attribution + automation infrastructure that holds up post-iOS.",
	deliverables: [
		"Attribution audit: current pixel + tag setup, attribution gaps, signal loss measurement",
		"GA4 implementation: enhanced ecommerce, custom events, consent mode v2, audience definitions",
		"Google Tag Manager: client-side + server-side container builds; data-layer engineering",
		"Meta Conversions API (CAPI) wired server-to-server with deduplication",
		"Google Ads enhanced + offline conversions wired for full-funnel attribution",
		"CRM + warehouse pipeline (Segment, RudderStack, or custom) where relevant",
		"Lifecycle automation builds: Klaviyo (email), Customer.io (cross-channel), Wati (WhatsApp), Salesforce / HubSpot (CRM)",
		"Dashboarding: Looker Studio, custom warehouse + Metabase, or BI-tool of choice",
		"Quarterly attribution audit + signal-quality review",
	],
	channelMix: [
		{
			channel: "GA4 + GTM (client + server-side)",
			weight: "Foundation",
			note: "Required baseline. Server-side GTM hosted on Cloudflare Workers or Google Cloud Run for first-party domain ownership of pixel + event data.",
		},
		{
			channel: "Meta CAPI + Google Ads server-side conversions",
			weight: "Primary",
			note: "Server-to-server event API for post-iOS attribution rigor. Deduplicated against client-side pixel events.",
		},
		{
			channel: "Lifecycle automations (Klaviyo / Customer.io / Wati)",
			weight: "Compounding",
			note: "Email + WhatsApp + SMS lifecycle flows triggered from CRM + warehouse data. Highest-leverage retention investment in most businesses.",
		},
		{
			channel: "CRM + warehouse pipeline",
			weight: "Supporting",
			note: "Segment / RudderStack / Snowplow into warehouse → reverse-ETL back to ad platforms. Required for cohort-level attribution + LTV-based bidding.",
		},
	],
	processPhases: [
		{
			label: "Week 1–2",
			heading: "Attribution + automation audit",
			outputs: [
				"Current pixel + tag inventory; signal-loss quantified",
				"Attribution gap analysis (Meta + Google + GA4 reconciliation)",
				"Lifecycle automation audit + journey mapping",
				"Recommendation: build sequence prioritised by leverage",
			],
		},
		{
			label: "Week 3–6",
			heading: "Foundation: GA4 + GTM + CAPI",
			outputs: [
				"GA4 enhanced ecommerce / custom events live",
				"GTM client-side + server-side containers deployed",
				"Meta CAPI wired with deduplication",
				"Google Ads enhanced + offline conversions live",
				"Consent mode v2 + DPDP-compliant cookie consent layer",
			],
		},
		{
			label: "Week 7–10",
			heading: "Automation builds",
			outputs: [
				"Welcome + onboarding flows live (email + WhatsApp where applicable)",
				"Abandoned-cart + browse-abandonment flows live",
				"Post-purchase + win-back flows live",
				"CRM + sales-team automation triggers wired",
			],
		},
		{
			label: "Month 3+",
			heading: "Compound + iterate",
			outputs: [
				"Quarterly attribution audit + signal-quality review",
				"Lifecycle flow optimisation against revenue / repeat-purchase data",
				"Warehouse + reverse-ETL pipelines extended (cohort-based audience activation)",
				"Hand-off documentation maintained for in-house ops continuity",
			],
		},
	],
	whoFor: [
		"Brands running paid acquisition at ≥₹3L/month media spend who need post-iOS attribution rigor",
		"D2C brands with email + WhatsApp + SMS lifecycle that's under-built",
		"SaaS brands wanting product-led automation + CRM-integrated lifecycle flows",
		"Funded brands building the attribution + automation infrastructure for the next 12–24 months",
	],
	whoNotFor: [
		"Brands at sub-₹50k/month media spend — attribution rigor matters less than just running the channel",
		"Companies unwilling to wire server-side endpoints + own a tag-management workflow",
		"Brands looking for a 'set up GA4 once and forget' engagement — this is ongoing infrastructure",
	],
	pricingTiers: [
		{
			name: "Starter",
			monthlyBand: "₹2L–₹4L/mo",
			mediaContext: "Fees only; tool subscriptions billed separately",
			bestFor: "Brands wiring server-side attribution + 2–3 lifecycle flows for the first time",
			includes: [
				"GA4 + GTM client-side setup",
				"Meta CAPI + Google Ads server-side conversions",
				"2–3 lifecycle automation flows live",
				"Looker Studio dashboard",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹4L–₹10L/mo",
			mediaContext: "Fees only; tool subscriptions billed separately",
			bestFor: "Scaling brands running multi-channel paid + multi-channel lifecycle",
			includes: [
				"Everything in Starter",
				"GTM server-side (Cloudflare Workers / Google Cloud Run)",
				"Klaviyo + Wati + CRM integration",
				"5–10 lifecycle flows live",
				"Quarterly attribution + signal-quality audit",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹10L+/mo",
			mediaContext: "Multi-product / multi-region engagements",
			bestFor: "Enterprise brands with warehouse + reverse-ETL + custom BI requirements",
			includes: [
				"Everything in Scale",
				"Warehouse + reverse-ETL pipelines (Segment / RudderStack / Hightouch)",
				"Custom BI + dashboarding",
				"Cohort-based audience activation across paid + lifecycle",
				"Embedded analytics + automation engineer",
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
	"linkedin-ads": LINKEDIN_ADS_DEPTH,
	"youtube-ads": YOUTUBE_ADS_DEPTH,
	"whatsapp-marketing": WHATSAPP_MARKETING_DEPTH,
	"email-marketing": EMAIL_MARKETING_DEPTH,
	"ppc-management": PPC_MANAGEMENT_DEPTH,
	"social-media-marketing": SOCIAL_MEDIA_MARKETING_DEPTH,
	branding: BRANDING_DEPTH,
	"website-development": WEBSITE_DEVELOPMENT_DEPTH,
	"analytics-and-automations": ANALYTICS_AUTOMATIONS_DEPTH,
};

/**
 * Returns the depth seed for a service. Falls back to a Service-driven generic
 * template when no hand-crafted entry exists — the generic still reads each
 * service's own topUseCases / primaryKpi / timeToResults / avgCpc / avgCac so
 * output stays cell-unique even without a hand-crafted record.
 */
export function getServiceDepth(service: Service): ServiceDepth {
	return SERVICE_DEPTH_BY_ID[service.id] ?? genericDepth(service);
}
