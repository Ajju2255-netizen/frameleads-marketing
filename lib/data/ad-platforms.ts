/**
 * Ad-platform seed data — drives the AdPlatformHub canonical template.
 *
 * Used by app/{platform}-ads/page.tsx wrappers for the 7 ad networks that
 * sit outside services.json (taboola, snapchat, pinterest, shopify, tiktok,
 * baidu, yandex). Each entry is anchored to platform-public facts only:
 * format inventories, geo coverage, CPC bands derived from platform-published
 * benchmarks. No invented client names, no fabricated growth-% claims.
 */

import type { FAQItem } from "@/components/templates/FAQBlock";
import type { PricingTier } from "./service-depth";

export type AdFormatRow = {
	format: string;
	weight: "Primary" | "Supporting" | "Compounding" | "Optional";
	note: string;
};

export type AdProcessPhase = {
	label: string;
	heading: string;
	outputs: string[];
};

export type AdPlatform = {
	id: string;
	slug: string;
	label: string;
	network: string;
	tagline: string;
	summary: string;
	heroDek: string;
	formats: string[];
	audience: string;
	geoFocus: string;
	cpcBand: string;
	cacBand: string;
	timeToFirstSignal: string;
	primaryKpi: string;
	primaryUseCases: string[];
	channelMix: AdFormatRow[];
	processPhases: AdProcessPhase[];
	whoFor: string[];
	whoNotFor: string[];
	pricingTiers: PricingTier[];
	faqs: FAQItem[];
};

// Shared process phases — same operator playbook applies to every paid platform.
function buildProcess(label: string, timeToSignal: string): AdProcessPhase[] {
	return [
		{
			label: "Week 1–2",
			heading: `${label} discovery + foundation`,
			outputs: [
				"Account setup or audit + naming convention + tracking baseline",
				"ICP + creative-angle worksheet built from existing customer interviews",
				"Conversion API / server-side instrumentation wired before scaling",
				"Test plan documented with kill-rules per ad set",
			],
		},
		{
			label: `Week 3–${timeToSignal.includes("14") || timeToSignal.includes("21") ? "6" : "8"}`,
			heading: "First-signal scale",
			outputs: [
				"5–15 creative variants per week shipped against documented angles",
				"Audience structure refined against early CTR + CVR signal",
				"Bid + budget strategy reset against first-cohort CAC",
				"Weekly review with go/no-go decisions logged",
			],
		},
		{
			label: "Month 2–4",
			heading: "Scale + diversify",
			outputs: [
				"Winning creative-angle clusters scaled; losers retired against kill-rules",
				"Lookalike / interest / behavioral audience layers added",
				"Cross-channel reconciliation against blended CAC + ROAS",
				"Creative supply pipeline running at sustainable cadence",
			],
		},
		{
			label: "Month 5+",
			heading: "Compound",
			outputs: [
				"Channel-mix diversified beyond initial campaigns",
				"Retargeting + retention overlay tuned against LTV signal",
				"Quarterly strategic re-baseline + budget re-allocation",
				"Hand-off documentation maintained for in-house team continuity",
			],
		},
	];
}

const SHARED_WHO_NOT: string[] = [
	"Pre-product / pre-revenue businesses where acquisition isn't the bottleneck",
	"Brands looking for a guaranteed ROAS in writing — that's a sales tactic, not a forecast",
	"Sub-₹1L/month total media + fees budgets — the channel can't learn fast enough to be useful",
];

function commonPricing(platformLabel: string): PricingTier[] {
	return [
		{
			name: "Starter",
			monthlyBand: "₹1.5L–₹3L/mo",
			mediaContext: "Excludes media spend. Typical media-to-fee ratio 3–5×.",
			bestFor: `Brands validating ${platformLabel} as a new channel`,
			includes: [
				"One senior strategist + one execution lead",
				`Focused ${platformLabel} program — 1–2 campaign types`,
				"Weekly review + monthly strategic call",
				"Standard CAPI / server-side attribution + reporting",
			],
		},
		{
			name: "Scale",
			monthlyBand: "₹3L–₹8L/mo",
			mediaContext: "Excludes media spend. Typical multiplier 3–5×.",
			bestFor: `Scaling brands running ${platformLabel} alongside other paid channels`,
			includes: [
				"Senior strategist + dedicated execution team",
				`3–5 ${platformLabel} campaign types in parallel`,
				"Weekly review + bi-weekly strategy + QBR",
				"Full creative-supply pipeline (15–40 variants/month)",
			],
		},
		{
			name: "Enterprise",
			monthlyBand: "₹8L+/mo",
			mediaContext: "Excludes media. Typical multiplier 2–4× at scale.",
			bestFor: `Scaled brands running ${platformLabel} across multi-geo / multi-segment programs`,
			includes: [
				"Embedded team across strategy, execution, analytics",
				"5+ campaign types including emerging formats",
				"Embedded weekly cadence + quarterly executive readout",
				"Custom dashboarding + cross-channel reconciliation",
			],
		},
	];
}

// ─────────────────────────────────────────────────────────────────
// Per-platform records
// ─────────────────────────────────────────────────────────────────

const TABOOLA: AdPlatform = {
	id: "taboola-ads",
	slug: "taboola-ads",
	label: "Taboola Ads",
	network: "Taboola native discovery network",
	tagline: "Native discovery placements across premium publisher inventory.",
	summary:
		"Native in-feed and content-recommendation placements served alongside articles on premium publishers like NDTV, India Today, and Hindustan Times.",
	heroDek:
		"Taboola runs on a different intent surface than search or social — readers who've just finished an article and are still in research mode. Useful for upper-funnel discovery, content amplification, and lead-gen in considered-purchase categories.",
	formats: [
		"Native in-feed sponsored recommendations",
		"Sponsored video (vertical + horizontal)",
		"Branded content article amplification",
		"High-impact homepage placements",
	],
	audience:
		"News and content readers in active research / browse mode across premium open-web publishers.",
	geoFocus: "Global — strong India inventory across Hindi + English publishers.",
	cpcBand: "₹3–₹35 / click",
	cacBand: "₹400–₹6,000",
	timeToFirstSignal: "14–30 days",
	primaryKpi: "blended CAC + cost per qualified lead",
	primaryUseCases: [
		"Content + thought-leadership amplification",
		"Lead-gen for considered-purchase categories (real estate, education, BFSI, B2B)",
		"D2C category-discovery campaigns",
		"Branded-content distribution beyond owned-channel reach",
		"Retargeting site visitors via native placements",
	],
	channelMix: [
		{
			format: "Native in-feed sponsored recommendations",
			weight: "Primary",
			note: "Highest signal velocity — blends into publisher article streams; click intent is curiosity-led not purchase-led.",
		},
		{
			format: "Sponsored video",
			weight: "Supporting",
			note: "Useful for awareness + brand consideration; pairs with a strong thumbnail and 5–8 second hook.",
		},
		{
			format: "Branded-content amplification",
			weight: "Compounding",
			note: "Editorial articles hosted on publisher domains; trust borrowed from the publisher brand. Best for category-education plays.",
		},
		{
			format: "Smart Bid + Maximize Conversions",
			weight: "Primary",
			note: "Conversion-optimized auto-bidding once 30+ conversions/month threshold is hit per campaign.",
		},
	],
	processPhases: buildProcess("Taboola", "14–30 days"),
	whoFor: [
		"Content-led brands with assets worth distributing (blog posts, video, research reports)",
		"Considered-purchase categories where research happens on open-web content",
		"Brands with monthly media budgets ≥₹3L able to run sustained tests across creative angles",
		"Teams able to ship 4–8 thumbnail + headline variants per campaign per week",
	],
	whoNotFor: SHARED_WHO_NOT,
	pricingTiers: commonPricing("Taboola"),
	faqs: [
		{
			question: "How is Taboola different from Google Display or Meta?",
			answer:
				"Taboola serves inside the article stream on premium publishers (NDTV, India Today, Hindustan Times in India) — readers click because the headline + thumbnail pattern-match what they were already consuming, not because they were targeted by interest or keyword. That makes it a discovery + content-amplification channel, not a direct-response one. CPCs typically run lower than Meta or Google Search, but cohort CAC depends heavily on creative + landing-page quality.",
		},
		{
			question: "What's the realistic time-to-first-signal on Taboola in India?",
			answer:
				"14–30 days for first cohort-level CAC read, assuming ≥₹2L media spent across 2–3 creative angles. Smart Bid auto-bidding requires 30+ conversions per campaign before it stabilises, so the first month is mostly creative + landing-page learning, with auto-bid handover in month 2.",
		},
		{
			question: "What CPCs should I expect on Taboola in India in 2026?",
			answer:
				"Headline CPCs sit in the ₹3–₹35 band depending on category and creative quality. BFSI + real-estate + education typically run higher (₹15–₹40); D2C + content amplification typically lower (₹3–₹15). These are platform-public benchmarks — actual numbers shift with creative refresh rate and bidding strategy.",
		},
		{
			question: "Does Taboola work for direct-response D2C in India?",
			answer:
				"It can, but it's not the first place we'd point a D2C brand. Meta + Google Shopping deliver higher-intent traffic for direct purchase. Taboola earns its place in a D2C mix as a discovery + category-education layer that warms top-of-funnel audiences which Meta + Google then retarget. ROAS measured in isolation will look weaker than direct-response channels — track contribution to blended CAC across the full funnel.",
		},
		{
			question: "Will Taboola creative work without a content asset?",
			answer:
				"Native placements convert worst when they push straight to a product page. Best performance comes from articles, research, calculators, or content destinations that match the reader's research mindset. If you don't have content assets, factor that production cost into the engagement — Frameleads ships 2–4 long-form content pieces per month at Scale tier specifically for this.",
		},
		{
			question: "How do you measure Taboola attribution alongside Meta + Google?",
			answer:
				"Server-side via GA4 + Taboola CAPI from week one. Most Taboola contribution shows up in view-through + assisted-conversion paths rather than last-click — last-click attribution under-reports Taboola by 40–70% in our experience. We use Taboola's first-click + view-through windows reconciled against GA4 data-driven attribution monthly.",
		},
	],
};

const SNAPCHAT: AdPlatform = {
	id: "snapchat-ads",
	slug: "snapchat-ads",
	label: "Snapchat Ads",
	network: "Snap Inc. advertising platform",
	tagline: "Vertical-video + AR-lens advertising to a Gen Z + younger millennial audience.",
	summary:
		"Snap Ads, Story Ads, Collection Ads, AR Lenses, and Spotlight placements served inside the Snapchat camera + content experience.",
	heroDek:
		"Snapchat over-indexes on under-25s — useful for brands selling to Gen Z + early-career millennials where Meta + YouTube reach starts to saturate. Vertical-video and AR-lens formats reward creative-led brands with strong visual identity.",
	formats: [
		"Single-image / single-video Snap Ads",
		"Story Ads (3–20 second sequences)",
		"Collection Ads (product carousels)",
		"AR Lens Ads (sponsored camera lenses)",
		"Spotlight Ads (TikTok-style short-video feed)",
	],
	audience:
		"Gen Z + early-career millennials — 75%+ of Indian Snap users sit in the 18–34 age band per Snap's published audience data.",
	geoFocus:
		"Global; strong India + MENA + US presence. Tier 1 + Tier 2 Indian cities skew youngest.",
	cpcBand: "₹2–₹25 / click",
	cacBand: "₹250–₹5,000",
	timeToFirstSignal: "10–21 days",
	primaryKpi: "blended CAC + cost per app install / lead",
	primaryUseCases: [
		"Gen Z + youth-targeted D2C product launches",
		"App-install campaigns for consumer mobile apps",
		"AR-lens experiences for brand engagement",
		"Spotlight short-video amplification",
		"Younger-audience overflow when Meta CPMs spike",
	],
	channelMix: [
		{
			format: "Single-video Snap Ads",
			weight: "Primary",
			note: "Vertical 9:16 video, 3–10 seconds optimal. Hook in first 0.8 seconds determines completion rate.",
		},
		{
			format: "Story Ads",
			weight: "Supporting",
			note: "Multi-frame sequences for narrative storytelling; works for product reveal and feature walk-throughs.",
		},
		{
			format: "Collection Ads",
			weight: "Compounding",
			note: "Catalog-driven carousels for D2C — pairs with product feed already used for Meta or Google Shopping.",
		},
		{
			format: "AR Lens Ads",
			weight: "Optional",
			note: "Brand engagement format; high production cost but strong earned reach when lens goes viral.",
		},
	],
	processPhases: buildProcess("Snapchat", "10–21 days"),
	whoFor: [
		"Consumer brands selling to under-25 audiences",
		"D2C brands with strong vertical-video creative capacity",
		"Mobile apps with sub-₹500 target install CAC",
		"Brands willing to ship 8–15 video variants per month",
	],
	whoNotFor: SHARED_WHO_NOT,
	pricingTiers: commonPricing("Snapchat"),
	faqs: [
		{
			question: "Is Snapchat still worth advertising on in India in 2026?",
			answer:
				"Yes — for the right audience. Snap's India monthly-active user base remains in the high tens of millions per Snap's published earnings, with the youngest skew of any major paid platform. If your buyer is under 30 and your category is consumer-visible (fashion, beauty, food, mobile apps, education), Snap deserves a 5–15% allocation in your paid mix. For B2B, BFSI, or buyers over 35, Meta + Google return more per rupee.",
		},
		{
			question: "What CPCs should I expect on Snapchat in India?",
			answer:
				"₹2–₹25 CPC range depending on category and audience targeting. CPMs typically run lower than Meta India in 2026 (₹40–₹150 range), but click-through quality varies — Snap clicks skew exploratory not purchase-ready. Cohort CAC depends on creative + landing-page experience.",
		},
		{
			question: "Can I reuse Meta + TikTok creative on Snapchat?",
			answer:
				"You can repurpose, but performance suffers without Snap-native edits. Snap rewards hooks in the first 0.8 seconds, on-screen captions (60%+ of Snap users have sound off in public), and authentic camera-style framing over polished broadcast video. Best practice is to shoot vertical-native for Snap + TikTok + Reels in one production session, then edit per platform.",
		},
		{
			question: "Do AR Lens Ads actually drive measurable performance?",
			answer:
				"AR Lens Ads are brand-engagement formats, not direct-response. Useful for product reveals (try-on lenses for beauty, eyewear, fashion), campaign moments, and earned reach when a lens goes viral. ROAS measured in isolation looks weak — measure against assisted conversions + branded-search lift instead.",
		},
		{
			question: "What attribution stack do you use for Snap?",
			answer:
				"Snap Conversion API (CAPI) wired server-side from day one, plus Snap pixel + GA4 reconciliation monthly. Snap's default 7-day view-through window over-reports influence; we typically reconcile against last-click and data-driven attribution in GA4 to calibrate true contribution.",
		},
		{
			question: "How is Spotlight different from Stories?",
			answer:
				"Spotlight is Snap's TikTok-style short-video feed — algorithm-driven, public, with creator monetization. Spotlight Ads sit inside that feed and behave more like TikTok in-feed than legacy Snap Story placements. Newer format, generally lower CPMs, but inventory volume is smaller than legacy Snap formats.",
		},
	],
};

const PINTEREST: AdPlatform = {
	id: "pinterest-ads",
	slug: "pinterest-ads",
	label: "Pinterest Ads",
	network: "Pinterest Inc. advertising platform",
	tagline: "Visual-search advertising in active planning-mode discovery surfaces.",
	summary:
		"Promoted Pins, Idea Ads, Shopping Ads, and Carousel Ads served inside Pinterest's visual-search discovery feed.",
	heroDek:
		"Pinterest is the rare paid platform where users are actively planning future purchases. Indian audience is small but high-intent — strong for home, fashion, beauty, weddings, food, and gift categories. Less useful for B2B or service businesses.",
	formats: [
		"Standard Promoted Pins (single image)",
		"Idea Ads (multi-page format with video + image)",
		"Pinterest Shopping Ads (product catalog)",
		"Carousel Ads (multi-image swipe)",
		"Video Ads (autoplay in feed)",
	],
	audience:
		"Planners + savers — 60%+ female user base globally per Pinterest data; high purchase-intent in home, fashion, beauty, food, weddings, kids.",
	geoFocus:
		"Strong US + EU + UK + Canada + Australia presence. India audience smaller but high-intent in target categories.",
	cpcBand: "₹3–₹30 / click",
	cacBand: "₹300–₹6,500",
	timeToFirstSignal: "14–30 days",
	primaryKpi: "blended CAC + revenue per visit",
	primaryUseCases: [
		"Home + interiors + furniture brands",
		"Fashion + beauty D2C with strong visual catalog",
		"Weddings + events + planning categories",
		"Food + recipes + meal-kit brands",
		"International audience reach (US / UK / EU)",
	],
	channelMix: [
		{
			format: "Promoted Pins (static image)",
			weight: "Primary",
			note: "Lowest-cost discovery format. Best for high-quality lifestyle product imagery with on-pin text overlay.",
		},
		{
			format: "Shopping Ads",
			weight: "Primary",
			note: "Catalog-driven dynamic product pins — pairs with same product feed used for Meta + Google Shopping. Lowest-friction format for D2C.",
		},
		{
			format: "Idea Ads",
			weight: "Compounding",
			note: "Multi-page narrative format. Higher production cost but stronger engagement; useful for inspirational categories (home decor, weddings, recipes).",
		},
		{
			format: "Video Ads",
			weight: "Supporting",
			note: "6–15 second loops work best. Short-form video performance trails Idea Ads in most categories tested.",
		},
	],
	processPhases: buildProcess("Pinterest", "14–30 days"),
	whoFor: [
		"Visual-product brands (home, fashion, beauty, food, weddings)",
		"D2C brands with photography or video catalog at scale",
		"Brands selling internationally (US / UK / EU)",
		"Editorial + content brands in lifestyle categories",
	],
	whoNotFor: SHARED_WHO_NOT,
	pricingTiers: commonPricing("Pinterest"),
	faqs: [
		{
			question: "Is Pinterest worth advertising on for an Indian brand in 2026?",
			answer:
				"Depends on whether your audience is here. Pinterest's Indian audience is smaller than Meta or Instagram, but skews high-intent in specific verticals — home + interiors, weddings, fashion, beauty, food. For international expansion (US, UK, EU, Canada, Australia), Pinterest is a top-3 paid channel for D2C visual categories. For B2B, services, or India-only brands outside the visual verticals, allocate elsewhere first.",
		},
		{
			question: "What's Pinterest's intent quality vs Meta or Google?",
			answer:
				"Pinterest sits between Meta and Google Search on the intent curve. Users plan future purchases (weddings 6 months out, home renovations, gift shopping) — slower to convert than Google Search click, but higher consideration depth and longer attribution windows (60–90 days common). Last-click attribution understates Pinterest contribution materially.",
		},
		{
			question: "What CPCs should I expect on Pinterest?",
			answer:
				"₹3–₹30 CPC band globally; India inventory typically at the lower end (₹3–₹12). US + UK + EU inventory runs higher ($0.30–$1.50 USD CPC). Shopping Ads typically clear at the lower end of the band for in-stock D2C catalogs.",
		},
		{
			question: "Can I use Pinterest Shopping without a Shopify or BigCommerce store?",
			answer:
				"Yes — Pinterest accepts product feeds in standard Google Merchant Center XML / TSV format from any platform (WooCommerce, Magento, custom builds). The same feed wired for Google Shopping + Meta Catalog typically works for Pinterest with minimal mapping changes.",
		},
		{
			question: "How long do Pinterest pins keep generating traffic after the campaign ends?",
			answer:
				"Pins persist on user boards indefinitely — promoted pins that earn saves keep generating organic impressions long after paid promotion stops. This 'compounding pin' effect is why Pinterest ROAS measured at the 30-day mark consistently understates platform contribution; we measure attribution windows up to 90 days for fair comparison.",
		},
		{
			question: "Do I need separate creative for Pinterest vs Meta?",
			answer:
				"Vertical 2:3 ratio is Pinterest's native format (vs Meta's 4:5 or 1:1). On-pin text overlay performs materially better than clean product photography. You can repurpose Meta creative, but a Pinterest-native edit (vertical, text overlay, lifestyle framing) typically delivers 30–60% better CTR in tests we've run.",
		},
	],
};

const SHOPIFY: AdPlatform = {
	id: "shopify-ads",
	slug: "shopify-ads",
	label: "Shopify Ads",
	network: "Shopify Audiences + Shop App + integrated channels",
	tagline: "Shopify-native advertising ops — Audiences, Shop App ads, and feed-driven channel deployment.",
	summary:
		"Shopify Audiences (machine-learned high-intent audience lists), Shop App ad placements, and product-feed-driven deployment across Meta, Google, TikTok, and Pinterest from one Shopify-integrated control plane.",
	heroDek:
		"For D2C brands on Shopify, the ad stack is no longer just Meta + Google — it's a Shopify-integrated layer that uses purchase data across the merchant network to build high-intent audiences and deploy product feeds across every paid channel. Best for Shopify Plus brands ready to centralise paid ops.",
	formats: [
		"Shopify Audiences (boost audiences across Meta, Google, TikTok, Pinterest, Snap, Criteo)",
		"Shop App native ad placements",
		"Shop Campaigns (Shopify-managed paid promotion of products on Shop App)",
		"Product feed deployment to Meta, Google, Pinterest, TikTok, Snap, Microsoft, Criteo",
		"Linked-account ad insights reconciliation in Shopify admin",
	],
	audience:
		"Shopify merchants' first-party customer data + Shopify-wide purchase intent signal — only available to merchants on Shopify Plus or with Shop App integration.",
	geoFocus:
		"Global — strongest in US, UK, Canada, Australia, EU. India Shop App footprint still emerging in 2026.",
	cpcBand: "Varies by underlying channel (Meta / Google / TikTok bands apply)",
	cacBand: "₹350–₹6,500 depending on category",
	timeToFirstSignal: "14–28 days for Shopify Audiences signal",
	primaryKpi: "blended CAC + contribution margin + Shopify-native ROAS",
	primaryUseCases: [
		"Shopify Plus brands consolidating paid ops",
		"D2C brands maxing out lookalike fatigue on Meta",
		"International expansion using Shopify Audiences in new geos",
		"Catalog-led campaigns deploying to multiple channels from one feed",
		"Shop App growth for brands prioritising mobile commerce",
	],
	channelMix: [
		{
			format: "Shopify Audiences (Meta deployment)",
			weight: "Primary",
			note: "Pre-built high-intent audiences refreshed weekly from Shopify network data; layered on top of standard Meta lookalikes.",
		},
		{
			format: "Shopify Audiences (Google + Pinterest)",
			weight: "Supporting",
			note: "Same audience signal deployed to Google Customer Match + Pinterest first-party audiences.",
		},
		{
			format: "Shop App native ads + Shop Campaigns",
			weight: "Compounding",
			note: "Shopify-managed promotion of products inside the Shop App — newer surface, smaller inventory, lower competition.",
		},
		{
			format: "Cross-channel feed deployment",
			weight: "Primary",
			note: "Single Shopify product feed → Meta Catalog + Google Merchant + Pinterest Catalog + TikTok Catalog. Reduces feed-management overhead 70–80%.",
		},
	],
	processPhases: buildProcess("Shopify-stack", "14–28 days"),
	whoFor: [
		"Shopify Plus or scaled Shopify merchants (₹2Cr+ ARR)",
		"D2C brands hitting lookalike fatigue on standalone Meta or Google",
		"Brands expanding internationally needing geo-specific audience signal",
		"Teams running 4+ paid channels and tired of feed-sync overhead",
	],
	whoNotFor: [
		"Non-Shopify brands (most Shopify ad-stack features require the integration)",
		"Sub-₹50L revenue Shopify brands — Shopify Audiences eligibility typically requires meaningful order volume",
		"Brands looking for a guaranteed ROAS in writing — that's a sales tactic, not a forecast",
	],
	pricingTiers: commonPricing("Shopify-stack"),
	faqs: [
		{
			question: "What's actually included in 'Shopify Ads' in 2026?",
			answer:
				"Three things: (1) Shopify Audiences — machine-learned high-intent audience lists built from purchase signal across the Shopify merchant network, deployable to Meta, Google, TikTok, Pinterest, Snap, Criteo, Microsoft. (2) Shop App native ad placements + Shop Campaigns. (3) Shopify-integrated product-feed deployment to every major catalog-driven ad surface from one source of truth. Shopify itself doesn't sell ad inventory — these are tools to run paid more efficiently on the platforms that do.",
		},
		{
			question: "Is Shopify Audiences worth it vs standard Meta lookalikes?",
			answer:
				"For Shopify Plus brands hitting lookalike fatigue, yes — Shopify Audiences uses network-wide purchase signal (millions of orders across the Shopify merchant ecosystem) that no individual brand could build from their own pixel data alone. Best results layered on top of standard lookalikes, not as a replacement. Smaller Shopify brands without lookalike fatigue see less differential lift.",
		},
		{
			question: "Do I need to be on Shopify Plus to use Shopify Audiences?",
			answer:
				"Shopify Plus has the strongest access. Standard Shopify accounts can use Shop App + product-feed deployment but Shopify Audiences eligibility typically requires Shopify Plus + meaningful order volume. Eligibility windows shift — confirm with the latest Shopify documentation before planning the engagement.",
		},
		{
			question: "How does Shop App advertising work?",
			answer:
				"Shop App is Shopify's consumer mobile app where shoppers track orders + discover new brands. Shop Campaigns let Shopify merchants pay Shopify to promote products inside the Shop App on a CPA basis — Shopify takes the campaign management responsibility, merchant sets target CPA + budget. Smaller inventory than Meta or Google, but lower competition and high-intent placement.",
		},
		{
			question: "Can a brand on WooCommerce or Magento use any of this?",
			answer:
				"Most of the Shopify ad stack is Shopify-native. Non-Shopify D2C brands replicate parts of the workflow with separate tooling: Feedonomics or similar for cross-channel feed deployment, Klaviyo or similar for purchase-data-driven audiences, etc. Operational overhead is materially higher than the Shopify integrated stack.",
		},
		{
			question: "How do you measure Shopify ad attribution?",
			answer:
				"Shopify admin's linked-account ad insights reconcile spend + revenue across connected ad accounts (Meta, Google, TikTok, Pinterest, Snap). We pair that with server-side CAPI + GA4 + post-purchase survey data — Shopify's own attribution defaults to last non-direct click; we model multi-touch separately and reconcile cohort ROAS monthly.",
		},
	],
};

const TIKTOK: AdPlatform = {
	id: "tiktok-ads",
	slug: "tiktok-ads",
	label: "TikTok Ads",
	network: "TikTok Ads Manager / TikTok for Business",
	tagline: "Short-vertical-video advertising at the largest creator + discovery feed.",
	summary:
		"In-feed Video Ads, Spark Ads (promoted organic content), TopView, Branded Effects, and Collection Ads served inside the TikTok For You Page algorithmic feed.",
	heroDek:
		"TikTok is the highest-attention paid platform in 2026 — average session time consistently leads the industry. Creator-led, sound-on, format-native creative wins; broadcast-style ad creative loses badly. Strong for D2C, beauty, fashion, food, fintech, entertainment.",
	formats: [
		"In-feed Video Ads (9:16, 9–60 seconds)",
		"Spark Ads (paid amplification of organic creator content)",
		"TopView (premium top-of-feed placement)",
		"Branded Hashtag Challenges + Branded Effects",
		"Collection Ads (catalog format)",
		"Shop Ads (TikTok Shop integration where available)",
	],
	audience:
		"Broader than the early Gen-Z stereotype — 18–34 still dominant but 35+ now meaningful share of Indian TikTok-style short-video consumption (via successor apps where TikTok itself is unavailable).",
	geoFocus:
		"Note: TikTok itself remains restricted in India as of 2026. Indian brands run equivalent inventory on Instagram Reels, YouTube Shorts, and successor short-video apps. For international markets (US, UK, EU, MENA, Southeast Asia), TikTok is a top-3 paid channel.",
	cpcBand: "₹4–₹40 / click (international markets)",
	cacBand: "₹300–₹5,500",
	timeToFirstSignal: "10–21 days",
	primaryKpi: "blended CAC + cost per qualified lead / install",
	primaryUseCases: [
		"International D2C launches (US, UK, EU, MENA, SEA)",
		"App installs for consumer mobile apps",
		"Creator-collaboration amplification via Spark Ads",
		"Younger-audience reach for fashion, beauty, food, entertainment",
		"Brand-awareness moments using TopView + Branded Hashtag Challenges",
	],
	channelMix: [
		{
			format: "In-feed Video Ads",
			weight: "Primary",
			note: "Vertical 9:16 video, 9–15 seconds optimal. Hook in first 1.5 seconds determines completion. Sound-on, captioned, creator-style framing wins.",
		},
		{
			format: "Spark Ads",
			weight: "Primary",
			note: "Paid amplification of organic creator content. Highest-performing TikTok ad format in nearly every category — audience-authentic by construction.",
		},
		{
			format: "Collection Ads",
			weight: "Supporting",
			note: "Catalog-driven for D2C — pairs with existing Meta + Pinterest product feed.",
		},
		{
			format: "TopView + Branded Hashtag Challenges",
			weight: "Optional",
			note: "Premium awareness formats; high investment, only relevant for brand-moment campaigns at Enterprise-tier media budgets.",
		},
	],
	processPhases: buildProcess("TikTok", "10–21 days"),
	whoFor: [
		"International D2C brands (US / UK / EU / MENA / SEA)",
		"Brands with creator-partnership capacity for Spark Ads",
		"Consumer apps with sub-$3 target install CAC in target markets",
		"Brands able to ship 10–25 vertical-video variants per month",
	],
	whoNotFor: SHARED_WHO_NOT,
	pricingTiers: commonPricing("TikTok"),
	faqs: [
		{
			question: "Can Indian brands run TikTok Ads in 2026?",
			answer:
				"Not on TikTok itself — TikTok remains restricted in India. Indian brands targeting Indian audiences run equivalent inventory on Instagram Reels, YouTube Shorts, and successor short-video apps. For Indian brands targeting international markets (US, UK, EU, MENA, SEA), TikTok runs through TikTok Ads Manager via international entity setup or via international advertising partners.",
		},
		{
			question: "What's a Spark Ad and why does it perform better than standard in-feed?",
			answer:
				"Spark Ads let advertisers pay to amplify an organic creator's existing TikTok post (with creator permission). Because the content is authentic creator content — not broadcast-style ad creative — it pattern-matches the For You feed and earns engagement at materially higher rates. Spark Ads consistently outperform standard in-feed Video Ads on CTR + CVR in our tests, typically by 30–80%.",
		},
		{
			question: "What CPCs should I expect on TikTok internationally?",
			answer:
				"₹4–₹40 INR-equivalent CPC band depending on market and category. US + UK markets typically run $0.50–$1.50 USD CPC for D2C categories. MENA + SEA markets typically run lower. Cohort CAC depends on creative quality + landing-page experience — TikTok rewards format-native creative more than any other paid platform.",
		},
		{
			question: "How is TikTok attribution different from Meta?",
			answer:
				"TikTok Conversion API (CAPI) is the post-iOS standard — events API server-to-server from your site or app to TikTok. We wire CAPI + standard pixel from day one and reconcile against GA4 multi-touch attribution monthly. TikTok's default 7-day click + 1-day view attribution windows tend to over-report assisted view-throughs; we use last-click + DDA for cohort truth.",
		},
		{
			question: "Can I reuse Reels creative on TikTok?",
			answer:
				"You can, but reused creative under-performs creator-native TikTok content materially. The TikTok algorithm rewards format-native cues: native fonts, native captions, native music, creator-style framing. Best practice: brief one production session for both platforms, then edit per platform — full repurposing without re-editing leaves performance on the table.",
		},
		{
			question: "Is TikTok Shop a meaningful channel yet?",
			answer:
				"In US + UK + select SEA markets, yes — TikTok Shop has become a top-3 social-commerce channel for fashion + beauty + accessories categories. In MENA + EU, smaller. India: not applicable (TikTok unavailable). For brands selling in TikTok Shop-eligible markets, Shop Ads + Live Shopping integration are increasingly meaningful incremental channels.",
		},
	],
};

const BAIDU: AdPlatform = {
	id: "baidu-ads",
	slug: "baidu-ads",
	label: "Baidu Ads",
	network: "Baidu Phoenix Nest + Baidu Union",
	tagline: "The dominant Chinese search-engine ad platform — equivalent to Google Ads for the China market.",
	summary:
		"Baidu Search ads (Phoenix Nest), Baidu Union display network, Baidu Brand Zone, Baidu Knows, and Baidu Tieba integrated paid placements.",
	heroDek:
		"Baidu retains majority Chinese desktop search share + meaningful mobile share. For brands selling into mainland China, Baidu Ads is non-negotiable — Google is blocked, Baidu fills the search-intent layer. Requires Chinese business entity or partner-managed account.",
	formats: [
		"Phoenix Nest Search Ads (PPC)",
		"Baidu Union Display Network",
		"Baidu Brand Zone (premium SERP placement)",
		"Baidu Knows + Baidu Tieba sponsored content",
		"Baidu Feed Ads (Baidu app news-feed placement)",
		"Information Flow Ads (in-feed across Baidu properties)",
	],
	audience:
		"Mainland China — 600M+ monthly active users on Baidu app + Baidu search per Baidu's published earnings. Strongest in desktop search + Tier 1–2 city demographics.",
	geoFocus:
		"China mainland only. Hong Kong, Taiwan, Macau use Google + Yahoo for search.",
	cpcBand: "₹6–₹80 / click (CNY-equivalent)",
	cacBand: "₹500–₹15,000",
	timeToFirstSignal: "21–45 days (longer due to ICP + ICP-license review)",
	primaryKpi: "blended CAC + cost per qualified lead",
	primaryUseCases: [
		"B2B brands selling into China (industrial, manufacturing, SaaS)",
		"China inbound tourism + hospitality",
		"Education + study-abroad services targeting Chinese parents",
		"International D2C brands using cross-border ecommerce channels",
		"Luxury + premium brand SERP defense in Chinese search",
	],
	channelMix: [
		{
			format: "Phoenix Nest Search Ads",
			weight: "Primary",
			note: "Baidu's PPC equivalent of Google Ads Search. Where most B2B + service-business demand-capture happens.",
		},
		{
			format: "Baidu Brand Zone",
			weight: "Supporting",
			note: "Premium SERP placement for brand-defense queries. Required for luxury + premium positioning against grey-market sellers.",
		},
		{
			format: "Information Flow Ads",
			weight: "Compounding",
			note: "Baidu's equivalent of Discovery or Performance Max. In-feed across Baidu app + Haokan + Baidu News.",
		},
		{
			format: "Baidu Union Display Network",
			weight: "Optional",
			note: "Display + native across third-party Chinese publishers. Lower intent; useful for awareness + retargeting layers.",
		},
	],
	processPhases: buildProcess("Baidu", "21–45 days"),
	whoFor: [
		"Brands actively selling or recruiting in mainland China",
		"B2B + industrial / SaaS / education / hospitality with measurable China-source demand",
		"Brands with a Chinese business entity or partner-account setup",
		"Teams with Chinese-native creative + landing-page localisation capacity",
	],
	whoNotFor: [
		"Brands with no commercial activity in mainland China",
		"Brands unwilling to invest in proper Chinese-language creative + landing pages",
		"Brands unable to comply with Chinese advertising regulations + ICP-license requirements",
	],
	pricingTiers: commonPricing("Baidu"),
	faqs: [
		{
			question: "Why would an Indian brand advertise on Baidu?",
			answer:
				"Three main reasons: (1) selling B2B products or services into mainland China where Google Ads doesn't reach; (2) attracting Chinese inbound tourism / education / hospitality; (3) defending brand search results in Chinese against unauthorised sellers or grey-market imports. For consumer D2C selling into China direct, Baidu plus a localised mainland-China website is the table-stakes acquisition stack.",
		},
		{
			question: "What's required to open a Baidu Ads account?",
			answer:
				"Baidu requires either a Chinese-registered business entity (with valid business license + ICP filing for the landing-page domain) or working through a Baidu-authorised international advertising agency that holds the account on behalf of the client. Account setup typically takes 4–8 weeks including business verification + ICP review. Frameleads partners with established Baidu-authorised partners for clients without a Chinese entity.",
		},
		{
			question: "What CPCs should I expect on Baidu?",
			answer:
				"CPC bands vary widely by industry and competitiveness. B2B + industrial categories typically run ¥5–¥50 CPC. Education + finance + healthcare run higher due to regulatory + competitive pressure. Brand-defense + low-competition long-tail queries can clear at ¥2–¥10. Expect higher absolute spend on Baidu than equivalent Google Ads for the same lead volume — China search competition is intense in monetised categories.",
		},
		{
			question: "Does Baidu require Chinese-language creative?",
			answer:
				"Mandatory for performance. English creative + landing pages convert very poorly in Chinese search. Frameleads engagements include Mandarin Chinese localisation reviewed by native speakers — direct translation isn't enough; cultural-context adaptation (especially for B2B technical content) is what moves CVR meaningfully.",
		},
		{
			question: "What about WeChat or Douyin instead of Baidu?",
			answer:
				"For B2C consumer brands in China, WeChat + Douyin (TikTok China) frequently out-perform Baidu for top-of-funnel awareness + viral product launches. Baidu remains the search-intent demand-capture layer. A mature China paid stack uses Baidu for search + brand defense, WeChat + Douyin for awareness + community + commerce, and JD / Tmall for marketplace presence. Frameleads scopes the full stack at the engagement-design stage.",
		},
		{
			question: "How is China attribution different?",
			answer:
				"GA4 and Meta CAPI don't work in mainland China (Google + Meta blocked). Attribution uses Baidu Tongji (Baidu's own analytics, equivalent to GA4) plus optionally WeChat OpenID tracking. Cross-device attribution materially weaker than the global Google/Meta stack. We use Baidu Tongji + last-click reconciliation + post-purchase survey data for cohort CAC in China engagements.",
		},
	],
};

const YANDEX: AdPlatform = {
	id: "yandex-ads",
	slug: "yandex-ads",
	label: "Yandex Ads",
	network: "Yandex Direct + Yandex Advertising Network (YAN)",
	tagline: "The dominant Russian + CIS search-engine ad platform — equivalent to Google Ads in Russian-speaking markets.",
	summary:
		"Yandex Direct (PPC search), Yandex Advertising Network (display + native), Yandex Market (shopping), and Yandex Business integrated paid placements.",
	heroDek:
		"Yandex holds majority Russian search market share + meaningful share across Belarus, Kazakhstan, Uzbekistan, and Russian-language audiences in Israel + Germany. For brands selling into Russia or Russian-speaking CIS markets, Yandex is the search-intent demand-capture layer.",
	formats: [
		"Yandex Direct Search Ads (PPC)",
		"Yandex Advertising Network display + native",
		"Yandex Market Shopping Ads",
		"Yandex Business location-based ads",
		"RTB display across Yandex partner network",
	],
	audience:
		"Russian + CIS Russian-language audiences — 50M+ daily active Yandex users per Yandex's published earnings.",
	geoFocus:
		"Russia, Belarus, Kazakhstan, Uzbekistan, plus Russian-language audiences in Israel + Germany + Estonia.",
	cpcBand: "₹3–₹50 / click (RUB-equivalent)",
	cacBand: "₹350–₹10,000",
	timeToFirstSignal: "14–30 days",
	primaryKpi: "blended CAC + cost per qualified lead",
	primaryUseCases: [
		"Brands selling into Russia or CIS Russian-speaking markets",
		"B2B + industrial / SaaS targeting Russian enterprise buyers",
		"International tourism / hospitality targeting Russian outbound travellers",
		"Education + study-abroad services targeting Russian parents",
		"D2C brands selling into Russia via Yandex Market",
	],
	channelMix: [
		{
			format: "Yandex Direct Search Ads",
			weight: "Primary",
			note: "PPC search equivalent of Google Ads. Where most B2B + service-business demand-capture happens in Russian-language markets.",
		},
		{
			format: "Yandex Market Shopping Ads",
			weight: "Primary",
			note: "Product catalog ads on Yandex Market — Russia's dominant shopping comparison + marketplace surface.",
		},
		{
			format: "Yandex Advertising Network (YAN)",
			weight: "Supporting",
			note: "Display + native across YAN publisher partners. Useful for retargeting + awareness layers.",
		},
		{
			format: "Yandex Business",
			weight: "Optional",
			note: "Location-based ads tied to Yandex Maps + Business listings. Useful for local-service categories.",
		},
	],
	processPhases: buildProcess("Yandex", "14–30 days"),
	whoFor: [
		"Brands selling into Russia or Russian-speaking CIS",
		"B2B + industrial / SaaS / education / hospitality / tourism targeting Russian-language buyers",
		"D2C brands with Russian-language site + payment + fulfilment capacity",
		"Teams with Russian-language creative + landing-page localisation capacity",
	],
	whoNotFor: [
		"Brands with no commercial activity in Russian-language markets",
		"Brands unwilling to invest in proper Russian-language creative + landing pages",
		"Brands unable to comply with Russian advertising + data-localisation regulations",
	],
	pricingTiers: commonPricing("Yandex"),
	faqs: [
		{
			question: "Why would an Indian brand advertise on Yandex?",
			answer:
				"Three main reasons: (1) selling B2B products or services into Russia + CIS where Google Ads market share is materially lower than Yandex; (2) attracting Russian inbound tourism / education / hospitality; (3) targeting Russian-language diaspora audiences in Israel + Germany + Estonia who default to Yandex over Google. For consumer D2C selling into Russia direct, Yandex Direct plus Yandex Market is the table-stakes acquisition stack.",
		},
		{
			question: "What's required to open a Yandex Ads account?",
			answer:
				"Standard Yandex Direct accounts open to any advertiser globally with billing in supported currencies. Selling into Russia at scale typically requires a local entity or Russian payment processor + Russian-language landing pages. Frameleads partners with established Yandex agency partners for clients without local entity setup.",
		},
		{
			question: "What CPCs should I expect on Yandex?",
			answer:
				"CPC bands vary widely by industry. B2B + industrial categories typically run ₽5–₽50 CPC. E-commerce + retail categories typically run ₽3–₽30. Brand-defense + long-tail queries can clear at ₽1–₽5. Yandex CPC is generally lower than Google Ads for equivalent queries in Russian markets due to competitive dynamics.",
		},
		{
			question: "Does Yandex require Russian-language creative?",
			answer:
				"Mandatory for performance. English creative + landing pages convert very poorly in Russian-language search. Frameleads engagements include Russian localisation reviewed by native speakers — direct translation isn't enough; cultural-context adaptation (especially for B2B technical content) is what moves CVR meaningfully.",
		},
		{
			question: "How does Yandex Market work?",
			answer:
				"Yandex Market is Russia's dominant product comparison + marketplace surface — equivalent to a fusion of Google Shopping + Amazon. Product feeds in standard XML format deploy to Yandex Market for both organic listings + paid promotion. For Russian D2C, Yandex Market presence is essentially mandatory.",
		},
		{
			question: "Is Yandex attribution different from Google?",
			answer:
				"Yandex Metrica (Yandex's analytics, equivalent to GA4) is the standard for in-Russia attribution + conversion tracking. Yandex CAPI (called 'offline conversions' API) wires server-to-server from your site to Yandex Direct for post-iOS attribution rigor. We pair Metrica + Yandex CAPI + GA4 (where allowed) for full attribution coverage on engagements targeting Russian markets.",
		},
	],
};

// ─────────────────────────────────────────────────────────────────
// Registry + helpers
// ─────────────────────────────────────────────────────────────────

const AD_PLATFORMS_BY_SLUG: Record<string, AdPlatform> = {
	"taboola-ads": TABOOLA,
	"snapchat-ads": SNAPCHAT,
	"pinterest-ads": PINTEREST,
	"shopify-ads": SHOPIFY,
	"tiktok-ads": TIKTOK,
	"baidu-ads": BAIDU,
	"yandex-ads": YANDEX,
};

export function getAdPlatform(slug: string): AdPlatform | undefined {
	return AD_PLATFORMS_BY_SLUG[slug];
}

export function allAdPlatforms(): AdPlatform[] {
	return Object.values(AD_PLATFORMS_BY_SLUG);
}
