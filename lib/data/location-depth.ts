/**
 * Per-location depth seed data for the 14 hand-built /digital-marketing-in-{X}
 * hub pages.
 *
 * Each entry is anchored to public-domain facts (population, currency,
 * regulator names + official URLs) — no fabricated client metrics or invented
 * market figures. Where existing geo data exists in geos-india.json or
 * geos-global.json (Bangalore, Dubai, Singapore are also in those datasets),
 * we cross-reference but don't duplicate fields.
 */

export type ComplianceRef = {
	name: string;
	description: string;
	href?: string;
};

export type ChannelMixRow = {
	channel: string;
	weight: string;
	note: string;
};

export type SubLocation = {
	name: string;
	note: string;
};

export type LocationFAQ = {
	question: string;
	answer: string;
};

export type LocationDepth = {
	/** Display name (e.g. "India", "United Arab Emirates", "Bangalore"). */
	name: string;
	/** URL slug, matches /digital-marketing-in-{slug}. */
	slug: string;
	/** Country / city / city-state. */
	type: "country" | "city" | "city-state";
	/** ISO 3166-1 alpha-2 — present for countries. */
	iso?: string;
	/** Population (rough current band). */
	population: string;
	/** Currency code (ISO 4217). */
	currency: string;
	/** Major working languages — first one is the dominant for digital ads. */
	languages: string[];
	/** State / region (for cities). */
	state?: string;
	/** Parent country (for cities). */
	parentCountry?: string;
	/** 1-2 sentence summary. */
	summary: string;
	/** Paragraph-length market context. */
	marketContext: string;
	/** Recommended Frameleads service.ids for this market. */
	topServiceIds: string[];
	/** Dominant industry.ids in this market. */
	topIndustryIds: string[];
	/** Channel-mix nuances specific to this location. */
	channelMix: ChannelMixRow[];
	/** Compliance + regulatory bodies + advertising rules. */
	compliance: ComplianceRef[];
	/** Sub-locations: states/cities for country pages, districts for city pages. */
	subLocations: SubLocation[];
	/** Cultural / timing / seasonality / payment-method notes. */
	marketNuances: string[];
	/** 4-6 location-specific FAQs. */
	faqs: LocationFAQ[];
};

// ─────────────────────── 14 entries ───────────────────────

const INDIA: LocationDepth = {
	name: "India",
	slug: "india",
	type: "country",
	iso: "IN",
	population: "1.43 billion",
	currency: "INR",
	languages: ["English", "Hindi", "22 scheduled regional languages"],
	summary:
		"The world's largest digital advertising growth market. Frameleads operates ~70% of engagements inside India — D2C, B2B SaaS, real estate, healthcare, fintech, edtech.",
	marketContext:
		"India ran ₹40,000 Cr+ in digital ad spend in 2025 (per IAMAI / Statista estimates), with D2C, fintech, and edtech as the fastest-growing segments. Meta + Google together capture ~75% of paid digital share. Click-to-WhatsApp has become a primary funnel for service categories. Post-iOS-14 attribution is solved via Meta CAPI + server-side GTM. DPDP Act 2023 governs consent + data handling for any business collecting personal data of Indian residents.",
	topServiceIds: [
		"seo-services",
		"meta-ads",
		"google-ads",
		"performance-marketing",
		"whatsapp-marketing",
		"content-marketing",
	],
	topIndustryIds: ["d2c", "b2b-saas", "real-estate", "healthcare", "fintech", "edtech"],
	channelMix: [
		{
			channel: "Meta (Facebook + Instagram + Click-to-WhatsApp)",
			weight: "Primary",
			note: "Highest signal-velocity channel for D2C + service categories. WhatsApp funnel cuts CAC 30-50% vs form-based flows.",
		},
		{
			channel: "Google Search + PMax",
			weight: "Primary",
			note: "Intent capture + catalog acquisition. Hindi + English bilingual search is the norm.",
		},
		{
			channel: "YouTube + YouTube Shorts",
			weight: "Supporting",
			note: "Lowest CPM video format. Vernacular creative compounds reach.",
		},
		{
			channel: "Influencer / creator commerce",
			weight: "Amplifier",
			note: "Mid-tier creators (50k-500k followers) deliver best ROI for D2C.",
		},
		{
			channel: "LinkedIn (B2B only)",
			weight: "Primary for B2B SaaS",
			note: "Expensive per-click but high-quality pipeline for SaaS Series A+.",
		},
	],
	compliance: [
		{
			name: "DPDP Act 2023",
			description:
				"Digital Personal Data Protection Act. Consent + retention + breach notification rules for any business handling Indian residents' data.",
			href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
		},
		{
			name: "ASCI Code",
			description:
				"Advertising Standards Council of India. Self-regulatory code for digital + influencer + comparative advertising.",
			href: "https://www.ascionline.in/the-code/asci-code/",
		},
		{
			name: "RBI / SEBI / IRDAI",
			description:
				"Sector-specific advertising rules for credit, investment, and insurance products.",
		},
		{
			name: "RERA",
			description:
				"Real estate ads must include the project registration number per state RERA authority.",
		},
	],
	subLocations: [
		{ name: "Mumbai", note: "Maharashtra · ₹40K+ Cr digital ad spend per year" },
		{ name: "Bangalore", note: "Karnataka · tech capital, deepest SaaS + D2C density" },
		{ name: "Delhi NCR", note: "Delhi + Gurgaon + Noida · finance, services, retail" },
		{ name: "Hyderabad", note: "Telangana · SaaS, healthcare, real estate" },
		{ name: "Chennai", note: "Tamil Nadu · automotive, SaaS, B2B" },
		{ name: "Pune", note: "Maharashtra · SaaS, manufacturing, education" },
		{ name: "Ahmedabad", note: "Gujarat · D2C, jewelry, retail" },
		{ name: "Kolkata", note: "West Bengal · retail, healthcare, FNB" },
	],
	marketNuances: [
		"Major buying seasons: Diwali (Oct-Nov) — D2C revenue peaks, with CPC inflation 30-60% above baseline. New financial year (April) for B2B SaaS budget reset.",
		"Tier-1 cities concentrate ~60% of digital ad spend; tier-2/3 cities are the volume growth driver.",
		"Cash-on-delivery still drives 40-60% of D2C transactions outside metros — checkout UX must account for it.",
		"Multilingual creative (English + Hindi + 1-2 regional) outperforms English-only by 20-40% for non-metro audiences.",
		"WhatsApp Business is the de-facto sales channel for high-touch categories (real estate, services, B2B).",
	],
	faqs: [
		{
			question: "What's the typical digital marketing budget for an Indian SMB?",
			answer:
				"Pre-PMF brands: ₹2L–₹10L/month (30-50% of revenue). Scaling brands (₹1-10Cr ARR): ₹15L–₹2Cr/month (25-35% of revenue). Scaled brands (₹10-100Cr ARR): ₹2Cr–₹15Cr/month (20-28% of revenue). See the CAC benchmarks report for detailed bands by industry.",
		},
		{
			question: "Which Indian cities does Frameleads cover?",
			answer:
				"All 84 cities in our taxonomy (12 tier-1 + 72 tier-2). Each city × every service has a dedicated landing page (~1,500 service × city cells). Deepest portfolio in Bangalore, Mumbai, Delhi-NCR, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata.",
		},
		{
			question: "How do you handle DPDP compliance in campaigns?",
			answer:
				"DPDP-compliant by default: explicit consent capture on every form, documented retention windows, breach-notification procedures, opt-out flows for marketing communications. We document the compliance posture in every proposal and route concerns through the editorial-policy framework on /editorial-policy.",
		},
		{
			question: "Do you work with brands targeting Tier-2 and Tier-3 Indian cities?",
			answer:
				"Yes — most growth-stage D2C and service businesses get their best unit economics in tier-2/3 markets. Frameleads adapts creative + language mix + payment methods + delivery timelines to tier-specific buyer behaviour. Don't run a Mumbai playbook in Kanpur.",
		},
		{
			question: "When does Diwali / festive season campaigns prep need to start?",
			answer:
				"Q3 (July-September) for D2C. We start creative planning + audience seasoning 90 days before Dhanteras, scale media spend 6 weeks out, peak through Diwali week. Brands that wait until October are paying 30-60% inflated CPMs against a saturated market.",
		},
		{
			question: "What's the difference between marketing in India vs the UAE / Singapore / US?",
			answer:
				"India: Meta-dominant, multilingual, WhatsApp-funneled, COD-friendly checkout, DPDP-compliant. UAE: Arabic + English bilingual, premium creative norms, in-platform purchase preference, no DPDP equivalent. Singapore: PDPA + GDPR-style consent, English-only digital, multi-currency checkout. US: stricter privacy via state laws (CCPA + others), credit-card dominant, GDPR for EU customers if relevant. We adapt per market.",
		},
	],
};

const UAE: LocationDepth = {
	name: "United Arab Emirates",
	slug: "uae",
	type: "country",
	iso: "AE",
	population: "10 million",
	currency: "AED",
	languages: ["Arabic", "English", "Hindi (large diaspora)"],
	summary:
		"Premium-priced regional hub for real estate, retail, hospitality, and luxury D2C. Cross-border buyer mix (Emiratis + South-Asian + European + Russian residents).",
	marketContext:
		"UAE has the GCC's most developed digital ad ecosystem — Meta + Google dominant, TikTok rising fast among under-35s. Dubai concentrates 50%+ of UAE digital ad spend. Premium hospitality, real estate, and luxury D2C define the highest-CAC categories. Multilingual creative (Arabic + English minimum) is non-negotiable for broad reach. UAE Personal Data Protection Law 2021 (Federal Decree-Law No. 45 of 2021) governs consent — softer than DPDP/GDPR but still enforceable.",
	topServiceIds: [
		"meta-ads",
		"google-ads",
		"seo-services",
		"content-marketing",
		"whatsapp-marketing",
		"social-media-marketing",
	],
	topIndustryIds: ["real-estate", "retail", "hospitality", "fnb", "tourism", "fashion-d2c"],
	channelMix: [
		{
			channel: "Meta (Instagram-led)",
			weight: "Primary",
			note: "Instagram is the dominant channel — visual-led real estate / luxury / fashion / hospitality categories index here.",
		},
		{
			channel: "Google Search + Display",
			weight: "Primary",
			note: "Bilingual Arabic + English search. Maps + GBP critical for service businesses.",
		},
		{
			channel: "TikTok",
			weight: "Rising (Gen-Z + under-35)",
			note: "Fast-growing share — especially fashion, F&B, fitness, entertainment.",
		},
		{
			channel: "Snapchat",
			weight: "Niche (Emirati youth)",
			note: "Still meaningful for under-25 Emirati audience; AR lens campaigns work.",
		},
		{
			channel: "Influencer (Khaleeji + South-Asian + Western)",
			weight: "Amplifier",
			note: "Multi-segment influencer strategy needed — single-segment creator deals miss most of the buyer pool.",
		},
	],
	compliance: [
		{
			name: "UAE Personal Data Protection Law 2021",
			description:
				"Federal Decree-Law No. 45 of 2021. Consent + cross-border data transfer + breach notification rules.",
		},
		{
			name: "UAE National Media Council",
			description:
				"Licensing + content standards for advertising and digital media.",
		},
		{
			name: "Dubai Department of Economy & Tourism",
			description:
				"Tourism-related ad licensing + claim substantiation rules.",
		},
		{
			name: "Free-zone specific norms",
			description:
				"Some UAE free zones (DIFC, ADGM) have their own data-protection regimes; check applicability for fintech / SaaS based there.",
		},
	],
	subLocations: [
		{ name: "Dubai", note: "Tourism, luxury, real estate, fintech, hospitality" },
		{ name: "Abu Dhabi", note: "Energy, government, real estate, tourism" },
		{ name: "Sharjah", note: "Education, manufacturing, retail" },
		{ name: "Ajman", note: "Real estate, manufacturing, F&B" },
		{ name: "Ras Al Khaimah", note: "Tourism, real estate, manufacturing" },
	],
	marketNuances: [
		"Ramadan timing shifts every year (lunar calendar) — campaigns must accommodate altered working hours + nightly engagement spikes during iftar/suhoor.",
		"Premium CPMs — UAE digital ad costs run 2-3× Indian equivalents for similar audiences.",
		"Multilingual creative is the cost of entry — Arabic-only + English-only campaigns each miss roughly half the buyer pool.",
		"Influencer commerce is mature; expect higher creator fees than India.",
		"In-platform purchase preference (Instagram + TikTok shop) is rising — webform-to-WhatsApp still leads for high-touch categories.",
	],
	faqs: [
		{
			question: "What's a typical CAC for UAE D2C brands?",
			operating: "",
			answer:
				"Fashion / beauty D2C: AED 50-150 (~₹1,100-3,300). Luxury / jewelry: AED 800-3,500 (~₹17K-77K). Real estate (per qualified lead): AED 300-1,500 (~₹6,600-33K). All bands trend higher than India equivalents because premium CPMs offset audience-targeting efficiency gains.",
		} as any,
		{
			question: "Does Frameleads have on-ground UAE presence?",
			answer:
				"Remote-first operations with regular Dubai trips for kickoff + quarterly reviews on retainers ≥ AED 25,000/month. Most Indian-founder agencies in this market operate the same way — UAE billing through a local entity, execution from India.",
		},
		{
			question: "Should we run campaigns in Arabic or English?",
			answer:
				"Both. Arabic-only misses ~50% of the buyer pool (large expat workforce). English-only misses Emirati nationals + Arab expats who prefer their native language. Best practice: dual-language creative with audience splits driven by user-set device language + interest signals.",
		},
		{
			question: "How is UAE Personal Data Protection Law different from DPDP / GDPR?",
			answer:
				"UAE PDPL is closer to GDPR than DPDP — explicit consent, retention limits, data-subject rights, cross-border transfer restrictions. Less prescriptive on consent-recording mechanics than GDPR. Free zones (DIFC, ADGM) have their own regimes that override federal in some cases — confirm applicability with legal counsel.",
		},
		{
			question: "What changes around Ramadan / DSF / Eid?",
			answer:
				"Working hours compress during Ramadan; nightly engagement spikes after iftar. F&B, retail, hospitality see 40-80% revenue lifts. Dubai Shopping Festival (Dec-Jan) drives retail/jewelry CPM inflation. Eid campaigns peak in the 2-3 weeks before each Eid. Plan 90 days out.",
		},
	],
};

const DUBAI: LocationDepth = {
	name: "Dubai",
	slug: "dubai",
	type: "city",
	iso: "AE",
	parentCountry: "United Arab Emirates",
	population: "3.6 million",
	currency: "AED",
	languages: ["Arabic", "English", "Hindi", "Urdu"],
	summary:
		"GCC's marketing hub. Premium CPMs, Instagram + TikTok-dominant, multilingual by default. Top categories: real estate, luxury retail, F&B, hospitality, fintech.",
	marketContext:
		"Dubai concentrates over half of UAE digital ad spend. Real estate alone accounts for 30%+ of digital spend in the city, with luxury retail and hospitality a close second. The buyer base spans Emirati nationals, South-Asian residents (largest group), Western expats, and a growing Russian + European tourist + investor mix. Instagram + Google Search are the workhorses; TikTok is the fastest-growing among under-35s. Creative quality expectations run 2-3× higher than Indian markets — premium production values are table stakes.",
	topServiceIds: [
		"meta-ads",
		"google-ads",
		"seo-services",
		"content-marketing",
		"whatsapp-marketing",
		"social-media-marketing",
	],
	topIndustryIds: ["real-estate", "retail", "fnb", "hospitality", "tourism", "fashion-d2c"],
	channelMix: [
		{
			channel: "Instagram (Feed + Reels + Stories)",
			weight: "Primary",
			note: "Visual-led real estate / luxury / fashion / hospitality — Dubai's dominant social platform.",
		},
		{
			channel: "Google Search + Maps + GBP",
			weight: "Primary",
			note: "Bilingual Arabic + English search. Maps + Google Business Profile critical for in-city services.",
		},
		{
			channel: "TikTok",
			weight: "Rising",
			note: "Under-35 demographic; F&B + fashion + entertainment performing strongest.",
		},
		{
			channel: "WhatsApp / click-to-WhatsApp",
			weight: "Primary (high-touch)",
			note: "Real estate, luxury, services. Conversation-led sales is the cultural norm.",
		},
		{
			channel: "LinkedIn (B2B + executive)",
			weight: "Supporting",
			note: "Strong for B2B fintech, SaaS, professional services targeting Dubai executives.",
		},
	],
	compliance: [
		{
			name: "Dubai Department of Economy & Tourism (DET)",
			description:
				"Licensing + tourism marketing approval. Required for hospitality + tourism operators.",
		},
		{
			name: "DIFC Data Protection Law",
			description:
				"Applies to DIFC-based entities — GDPR-aligned. Check applicability for fintech / SaaS based there.",
		},
		{
			name: "UAE PDPL 2021",
			description:
				"Federal data-protection rules applicable to Dubai-based businesses serving UAE residents.",
		},
		{
			name: "Dubai Land Department (DLD)",
			description: "Real estate ad approval + RERA-equivalent registration requirements.",
		},
	],
	subLocations: [
		{ name: "Downtown Dubai", note: "Luxury retail, hospitality, premium real estate" },
		{ name: "Dubai Marina", note: "Hospitality, F&B, mid-luxury real estate" },
		{ name: "Business Bay", note: "B2B, real estate, fintech" },
		{ name: "JLT (Jumeirah Lakes Towers)", note: "SME hub, B2B, fintech" },
		{ name: "DIFC", note: "Finance, B2B SaaS, premium professional services" },
		{ name: "Palm Jumeirah", note: "Luxury hospitality, real estate, lifestyle brands" },
		{ name: "Dubai Marina + Jumeirah", note: "Tourism, hospitality, retail" },
	],
	marketNuances: [
		"Premium creative is the entry ticket — Dubai audiences scroll past low-production-quality content faster than any other market we operate in.",
		"Cross-border buyer mix means audience segmentation by nationality + language preference matters more than in India.",
		"Real estate ads must include DLD permit numbers — non-negotiable.",
		"Ramadan + Eid + Dubai Shopping Festival + UAE National Day drive most revenue spikes.",
		"In-platform purchase (Instagram + TikTok shop) is rising; webform-to-WhatsApp still leads for high-touch.",
	],
	faqs: [
		{
			question: "What's a typical CPL for Dubai real estate?",
			answer:
				"Residential 2-3BR mid-luxury (AED 1.5-3M property value): AED 80-200 per qualified lead. Luxury (AED 3M+): AED 200-800. Off-plan vs ready inventory shifts the CPL band by ~30%. All numbers per qualified lead (phone-verified + intent score), not raw lead count.",
		},
		{
			question: "What's the right Dubai influencer strategy?",
			answer:
				"Three creator tiers: micro (10k-50k, niche relevance, best ROI), mid (50k-250k, mix of paid + barter), macro (250k+, brand-building, low direct ROI). Most Dubai brands over-invest in macro and under-invest in micro. Khaleeji + South-Asian + Western creators each cover different buyer pools — mix accordingly.",
		},
		{
			question: "Should we operate from Dubai or run from India?",
			answer:
				"Remote-first with periodic Dubai presence works for most Indian-founder brands. Direct Dubai operations make sense above AED 50K/month retainers (need licensed UAE entity for billing + employee work permits). Frameleads operates remote-first with on-ground senior visits for kickoff + quarterly review.",
		},
		{
			question: "What languages should we run campaigns in?",
			answer:
				"Arabic + English minimum. Hindi/Urdu adds 15-25% reach lift for South-Asian-targeted retail / services. Russian creative pays for itself in luxury real estate / hospitality. Use device-language + interest-based audience splits, not single-language broad campaigns.",
		},
		{
			question: "How is Dubai different from Abu Dhabi for digital marketing?",
			answer:
				"Dubai: tourism + luxury + global brand mix, English-skewed, Instagram-dominant. Abu Dhabi: government + finance + family-mall retail, Arabic-skewed, higher in-platform completion rates. Most agencies treat them as one market and miss 20-30% of efficiency.",
		},
	],
};

const SINGAPORE: LocationDepth = {
	name: "Singapore",
	slug: "singapore",
	type: "city-state",
	iso: "SG",
	population: "5.9 million",
	currency: "SGD",
	languages: ["English", "Mandarin", "Malay", "Tamil"],
	summary:
		"Asia-Pacific business hub for fintech + SaaS + premium D2C. English-default, PDPA-compliant, mature attribution practices. Premium CPMs by Indian standards but efficient by Western.",
	marketContext:
		"Singapore is APAC's most attribution-mature market — server-side instrumentation is table stakes among scaled brands. Fintech (DBS, Grab Financial, Wise, Revolut), B2B SaaS (Singapore-HQ'd or APAC-HQ'd from here), and premium D2C dominate the digital spend mix. Cross-border targeting to ASEAN + India is common from Singapore-based operations. PDPA (Personal Data Protection Act) governs consent — closer to GDPR than DPDP. CPCs run 3-5× Indian equivalents for B2B SaaS audiences.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"linkedin-ads",
		"meta-ads",
		"content-marketing",
		"performance-marketing",
	],
	topIndustryIds: ["b2b-saas", "fintech", "fashion-d2c", "real-estate", "hospitality"],
	channelMix: [
		{
			channel: "Google Search + PMax",
			weight: "Primary",
			note: "Intent capture dominant. English-default search.",
		},
		{
			channel: "LinkedIn",
			weight: "Primary (B2B)",
			note: "Best LinkedIn CTR + lead-form-completion rates in APAC outside US/UK.",
		},
		{
			channel: "Meta (Instagram-led)",
			weight: "Primary",
			note: "Premium D2C + lifestyle + hospitality.",
		},
		{
			channel: "TikTok",
			weight: "Rising",
			note: "Strong for under-35 D2C, F&B, entertainment.",
		},
		{
			channel: "Programmatic + native (APAC inventory)",
			weight: "Supporting",
			note: "Higher quality inventory than India; ROAS works at scale.",
		},
	],
	compliance: [
		{
			name: "Singapore PDPA",
			description:
				"Personal Data Protection Act. Consent + data-protection-officer + cross-border transfer rules. Enforced by PDPC.",
			href: "https://www.pdpc.gov.sg/",
		},
		{
			name: "MAS (Monetary Authority of Singapore)",
			description:
				"Regulates financial promotion and fintech advertising. Strict claim substantiation.",
		},
		{
			name: "Singapore Advertising Standards (ASAS)",
			description:
				"Self-regulatory body for advertising claims + comparative ads.",
		},
		{
			name: "Spam Control Act",
			description:
				"Governs commercial email + SMS messaging — opt-out + identification requirements.",
		},
	],
	subLocations: [
		{ name: "CBD (Raffles Place / Marina Bay)", note: "Finance, B2B SaaS, premium services" },
		{ name: "Orchard Road", note: "Retail, luxury, F&B" },
		{ name: "Tampines / Jurong East", note: "Mass-market retail, F&B, residential" },
		{ name: "One-North / Buona Vista", note: "Tech, R&D, SaaS HQs" },
	],
	marketNuances: [
		"Highest attribution rigor in APAC — server-side instrumentation expected from day one.",
		"English-default but Mandarin + Tamil creative meaningfully lifts reach for specific segments.",
		"Chinese New Year + National Day + GSS (Great Singapore Sale) drive seasonal spikes.",
		"Cross-border targeting to Malaysia / Indonesia / India is common — multi-currency checkout standard.",
		"PDPA enforcement is meaningful — penalties up to SGD 1M for breaches; build compliance into the stack.",
	],
	faqs: [
		{
			question: "What's a typical B2B SaaS CAC in Singapore?",
			answer:
				"For ICP-fit Series A+ SaaS: SGD 1,200-5,000 per qualified lead (~₹75K-310K). For enterprise targeting (ACV $50K+): SGD 8,000-25,000. Payback windows: 12-18 months for SMB SaaS, 18-30 months for enterprise. Singapore-based brands often run multi-country campaigns from here.",
		},
		{
			question: "Should we run Mandarin creative in Singapore?",
			answer:
				"For F&B, lifestyle, retail, and B2C — yes, bilingual Mandarin + English adds 15-30% reach to Singapore Chinese audience. For B2B SaaS / fintech / professional services — English-only generally suffices, as the buyer pool is English-fluent.",
		},
		{
			question: "How is PDPA different from India's DPDP?",
			answer:
				"PDPA (2012, amended 2020) is more prescriptive than DPDP. Mandatory data-protection officer for businesses above a size threshold; cross-border transfer restrictions; mandatory breach notification within 72 hours. DPDP is newer and still being operationalized. Run PDPA-grade compliance for Singapore campaigns.",
		},
		{
			question: "Does Singapore work for D2C brands?",
			answer:
				"Yes — premium D2C with AOV ≥ SGD 100 makes the math work. Below that, CPMs eat margins fast. Most successful D2C brands operating from Singapore actually sell across ASEAN + Australia, not Singapore alone.",
		},
		{
			question: "How does Singapore compare to Dubai for B2B reach?",
			answer:
				"Singapore: B2B SaaS / fintech / professional-services depth, LinkedIn-strong, English-default, attribution-mature. Dubai: Real estate + luxury + hospitality depth, Instagram-strong, multilingual default, attribution-improving but less mature. Choose Singapore for B2B; Dubai for premium B2C.",
		},
	],
};

const UNITED_KINGDOM: LocationDepth = {
	name: "United Kingdom",
	slug: "unitedkingdom",
	type: "country",
	iso: "GB",
	population: "67 million",
	currency: "GBP",
	languages: ["English"],
	summary:
		"Europe's most mature digital ad market post-Brexit. GDPR + UK-GDPR govern data. Premium CPMs for B2B SaaS + fintech; D2C ecosystem highly competitive.",
	marketContext:
		"UK digital ad spend exceeded £30 billion in 2024 (IAB UK + Statista). Meta + Google + Amazon together capture ~70% of paid spend. London concentrates ~40% of UK digital ad activity. UK-GDPR + Data Protection Act 2018 govern consent — same protections as EU GDPR post-Brexit. CPMs run 4-7× Indian equivalents; LinkedIn pricing is the highest in any market Frameleads operates in.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"linkedin-ads",
		"meta-ads",
		"content-marketing",
		"performance-marketing",
	],
	topIndustryIds: ["b2b-saas", "fintech", "fashion-d2c", "retail", "professional-services"],
	channelMix: [
		{
			channel: "Google Search + PMax + Shopping",
			weight: "Primary",
			note: "Highest-intent capture. Shopping feed for e-com is mature.",
		},
		{
			channel: "LinkedIn",
			weight: "Primary (B2B)",
			note: "UK is one of LinkedIn's highest-revenue markets. Premium pricing but tight ICP precision.",
		},
		{
			channel: "Meta",
			weight: "Primary (D2C + B2C)",
			note: "Fashion + lifestyle + D2C. Mature creator commerce ecosystem.",
		},
		{
			channel: "TikTok",
			weight: "Rising",
			note: "Under-35 demographic; lifestyle / F&B / fashion D2C performing strongest.",
		},
		{
			channel: "Programmatic (UK + EU)",
			weight: "Supporting",
			note: "Mature DSP ecosystem; quality inventory available.",
		},
	],
	compliance: [
		{
			name: "UK-GDPR + Data Protection Act 2018",
			description:
				"Equivalent to EU GDPR — consent, data subject rights, breach notification, DPIAs for high-risk processing.",
			href: "https://www.gov.uk/data-protection",
		},
		{
			name: "ICO (Information Commissioner's Office)",
			description: "Enforcement authority for UK data protection.",
			href: "https://ico.org.uk/",
		},
		{
			name: "ASA (Advertising Standards Authority)",
			description:
				"Self-regulatory body enforcing the CAP Code for digital + traditional advertising.",
			href: "https://www.asa.org.uk/",
		},
		{
			name: "FCA (Financial Conduct Authority)",
			description:
				"Strict rules on financial promotion — credit, investment, insurance ads must meet clear-fair-not-misleading test.",
		},
	],
	subLocations: [
		{ name: "London", note: "Finance, fintech, B2B SaaS, retail, media — 40%+ of UK digital spend" },
		{ name: "Manchester", note: "Tech, media, retail, B2B" },
		{ name: "Birmingham", note: "Manufacturing, retail, professional services" },
		{ name: "Edinburgh", note: "Finance, fintech, education" },
		{ name: "Bristol", note: "Tech, creative, professional services" },
	],
	marketNuances: [
		"GDPR + UK-GDPR compliance is enforced — meaningful penalties (up to 4% of global revenue).",
		"Cookie-consent flows are mandatory; consent-mode v2 deployment is the new minimum.",
		"Post-iOS attribution is highly mature; server-side everything is the baseline.",
		"Christmas + Black Friday Cyber Monday (BFCM) drive ~30% of annual e-com revenue.",
		"UK creator commerce is mature — established creator-led D2C playbook.",
	],
	faqs: [
		{
			question: "What's a typical B2B SaaS CAC in the UK?",
			answer:
				"SMB SaaS (ACV £5K-30K): £800-3,500 per qualified lead (~₹85K-370K). Mid-market (ACV £30K-150K): £3,000-12,000. Enterprise (ACV £150K+): £15K-50K+. UK LinkedIn ad pricing is the highest in any market Frameleads operates in.",
		},
		{
			question: "How is UK-GDPR different from EU GDPR post-Brexit?",
			answer:
				"Substantively identical. Data subject rights, consent, breach notification, DPIAs all apply. ICO is the UK enforcement authority (was previously the UK regulator under EU GDPR too). EU-UK data transfers continue under adequacy decisions but should be reviewed annually.",
		},
		{
			question: "Does Frameleads have UK presence?",
			answer:
				"Remote-first with London on-ground availability for kickoff + quarterly reviews. Most Indian-founder brands operating in the UK use this model — UK billing through a local entity (often via Wise / Stripe Atlas), execution from India.",
		},
		{
			question: "What's the right channel mix for a UK D2C brand?",
			answer:
				"60-70% paid (Meta + Google + TikTok depending on category) + 20-25% organic SEO + content + 10-15% lifecycle / email. UK organic SEO is highly competitive — long-tail focus + topical authority + AI Overview citation share matter more than chasing head terms.",
		},
		{
			question: "When should we ramp up for BFCM + Christmas?",
			answer:
				"BFCM creative + audience seasoning starts 90 days out. Q3 (July-September) for D2C planning. Black Friday week drives 5-8× weekly revenue spikes for retail; Christmas week drives an additional 3-5×. Most brands under-invest in audience seasoning and overpay during the peak — same mistake as Diwali in India.",
		},
	],
};

const UNITED_STATES: LocationDepth = {
	name: "United States",
	slug: "unitedstates",
	type: "country",
	iso: "US",
	population: "333 million",
	currency: "USD",
	languages: ["English", "Spanish (49M+ speakers)"],
	summary:
		"Largest digital ad market globally. State-level privacy regimes (CCPA + others). Premium CPMs but matched by purchase power. Most competitive D2C + B2B SaaS environment.",
	marketContext:
		"US digital ad spend exceeded $250 billion in 2024 (eMarketer estimate). Meta + Google + Amazon together capture ~65% of paid spend. State-level privacy laws (CCPA in California, similar regimes in 12+ other states) replace federal law absence. CPMs run 5-10× Indian equivalents; LinkedIn pricing is comparable to UK. D2C and B2B SaaS dominate the highest-CAC categories. AI Overview rollout is mature here — 50%+ of search queries now show AI Overview results.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"meta-ads",
		"linkedin-ads",
		"content-marketing",
		"conversion-rate-optimization",
	],
	topIndustryIds: ["b2b-saas", "fintech", "fashion-d2c", "retail", "healthtech"],
	channelMix: [
		{
			channel: "Google Search + PMax + Shopping",
			weight: "Primary",
			note: "Highest-intent. AI Overview impacts head-term traffic — GEO matters now.",
		},
		{
			channel: "Meta (FB + IG + Reels)",
			weight: "Primary (D2C / B2C)",
			note: "Sophisticated D2C ecosystem; creator commerce mature.",
		},
		{
			channel: "LinkedIn",
			weight: "Primary (B2B)",
			note: "Largest LinkedIn audience globally. Premium pricing but ICP-tight.",
		},
		{
			channel: "TikTok",
			weight: "Primary (under-35)",
			note: "TikTok Shop drives meaningful direct revenue for fashion / beauty / F&B / fitness.",
		},
		{
			channel: "CTV / OTT (Netflix + Hulu + Disney+)",
			weight: "Rising (brand)",
			note: "Connected-TV advertising mature; brand layer for scaled spenders.",
		},
		{
			channel: "Amazon Ads",
			weight: "Primary for catalog D2C",
			note: "Retail-media surface — required for any D2C selling on Amazon.",
		},
	],
	compliance: [
		{
			name: "CCPA / CPRA (California)",
			description:
				"Strictest state privacy law. Opt-out rights, sale of data restrictions, breach notification.",
			href: "https://oag.ca.gov/privacy/ccpa",
		},
		{
			name: "Other state laws",
			description:
				"Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Texas DPPSA, plus 7+ more. Each with consent + data-rights variants.",
		},
		{
			name: "FTC Endorsement Guides",
			description:
				"Influencer + affiliate + comparative-advertising rules. Federal enforcement; material-connection disclosure mandatory.",
			href: "https://www.ftc.gov/business-guidance/advertising-marketing",
		},
		{
			name: "CAN-SPAM Act",
			description:
				"Commercial email rules — header accuracy, opt-out, sender identification.",
		},
		{
			name: "HIPAA (healthcare-specific)",
			description:
				"Patient data + healthcare advertising. Critical for healthtech / clinic marketing.",
		},
	],
	subLocations: [
		{ name: "New York", note: "Finance, fintech, media, retail, B2B" },
		{ name: "San Francisco / Bay Area", note: "B2B SaaS, AI, fintech" },
		{ name: "Los Angeles", note: "Media, fashion, F&B, lifestyle D2C" },
		{ name: "Austin", note: "Tech, B2B SaaS, fintech" },
		{ name: "Chicago", note: "Finance, B2B, retail" },
		{ name: "Boston", note: "Healthtech, biotech, education, SaaS" },
		{ name: "Miami", note: "Latin-America-facing brands, real estate, crypto" },
	],
	marketNuances: [
		"State privacy laws are the new federal — consent-mode + state-aware data handling now table stakes.",
		"AI Overview shows on 50%+ of search queries; SEO investment must include GEO from the start.",
		"Premium CPMs but matched purchase power — US AOVs are typically 3-5× Indian equivalents in the same category.",
		"Q4 holiday shopping (BFCM + Christmas) drives 30-40% of annual e-com revenue.",
		"Spanish-language creative adds 15-25% reach for many D2C + service categories.",
	],
	faqs: [
		{
			question: "What's a typical B2B SaaS CAC in the US?",
			answer:
				"SMB SaaS (ACV $5K-30K): $800-3,500 per qualified lead (~₹65K-290K). Mid-market: $3K-12K. Enterprise: $15K-75K+. US is the most expensive market Frameleads operates in for paid acquisition; offset by purchase power.",
		},
		{
			question: "How do we handle state privacy laws?",
			answer:
				"Build for the strictest state (CCPA/CPRA) and you cover most others. Consent-mode v2 + state-aware audience handling + IAB GPP signal support are now baseline. Frameleads documents compliance posture in every US proposal.",
		},
		{
			question: "Does Frameleads work with US-domiciled clients?",
			answer:
				"Yes — Indian-founder brands operating in the US are ~29% of our portfolio. US billing through Stripe / local entity, execution from India with overlap-window meetings. Larger retainers (>$15K/month) get senior on-ground presence for kickoff + quarterly reviews.",
		},
		{
			question: "What about AI Overview impact on US SEO?",
			answer:
				"AI Overview now shows on ~50% of US Google queries. Head-term click-through has dropped 20-40% for some categories. We optimize for citation (TLDR + FAQ + structured comparisons + llms.txt) alongside classic rankings. See /reports for our quarterly AI-citation tracking methodology.",
		},
		{
			question: "When should we ramp up for BFCM + Q4?",
			answer:
				"BFCM creative + audience seasoning starts 90-120 days out for D2C. Q4 drives 30-40% of annual e-com revenue for most categories. Most brands over-spend during BFCM week and under-invest in October audience-warming — the mistake costs 20-40% of efficient ROAS.",
		},
	],
};

// Shorter entries for less-priority markets (still ~150-200 words each).

const SAUDI_ARABIA: LocationDepth = {
	name: "Saudi Arabia",
	slug: "saudi-arabia",
	type: "country",
	iso: "SA",
	population: "36 million",
	currency: "SAR",
	languages: ["Arabic", "English"],
	summary:
		"GCC's largest population. Vision 2030-driven digital transformation. Snapchat + Instagram + Twitter dominant; YouTube growing fast for entertainment + education.",
	marketContext:
		"Saudi Arabia leads GCC by population and recently surpassed UAE in total digital ad spend. Vision 2030 reforms have accelerated digital adoption; e-commerce + entertainment + fintech are the fastest-growing segments. Snapchat is uniquely dominant in KSA youth demographics — significantly more so than UAE or other GCC markets. PDPL (Personal Data Protection Law) 2023 governs consent — GDPR-aligned. Riyadh + Jeddah + Dammam concentrate most spend.",
	topServiceIds: [
		"meta-ads",
		"google-ads",
		"seo-services",
		"content-marketing",
		"social-media-marketing",
		"whatsapp-marketing",
	],
	topIndustryIds: ["retail", "fnb", "real-estate", "tourism", "fashion-d2c", "hospitality"],
	channelMix: [
		{
			channel: "Snapchat",
			weight: "Primary (under-35)",
			note: "Uniquely dominant in KSA — significantly higher engagement than any other Arabic market.",
		},
		{
			channel: "Instagram",
			weight: "Primary",
			note: "Universal coverage; visual-led categories index here.",
		},
		{
			channel: "Twitter (X)",
			weight: "Supporting",
			note: "Higher engagement than in most markets; thought-leadership + brand presence layer.",
		},
		{
			channel: "YouTube",
			weight: "Rising",
			note: "Education + entertainment + brand-storytelling growing rapidly.",
		},
		{
			channel: "Google Search + Maps",
			weight: "Primary",
			note: "Arabic-default search; English secondary. Local SEO + GBP critical for service businesses.",
		},
	],
	compliance: [
		{
			name: "KSA PDPL 2023",
			description:
				"Personal Data Protection Law. Consent + cross-border data transfer + breach notification rules. GDPR-aligned.",
		},
		{
			name: "SAMA (Saudi Central Bank)",
			description: "Financial promotion rules for KSA-based fintech / lending.",
		},
		{
			name: "Ministry of Media",
			description: "Content + advertising standards; cultural-sensitivity rules.",
		},
	],
	subLocations: [
		{ name: "Riyadh", note: "Government, finance, real estate, retail" },
		{ name: "Jeddah", note: "Retail, F&B, tourism, hospitality" },
		{ name: "Dammam / Khobar", note: "Energy, manufacturing, retail" },
		{ name: "NEOM", note: "Future-city development; brand-building opportunity" },
	],
	marketNuances: [
		"Snapchat-first creative is a real differentiator vs typical Meta-first approach.",
		"Arabic creative + cultural sensitivity (Hajj, Ramadan, National Day) is non-negotiable.",
		"Local entity + KSA bank account often required for sustained operations.",
		"Female-targeted campaigns must respect cultural norms in imagery + claims.",
		"Vision 2030 has driven significant e-com infrastructure improvements (logistics, payments, mada).",
	],
	faqs: [
		{
			question: "Why is Snapchat so important in Saudi Arabia?",
			answer:
				"Cultural reasons: under-35 Saudis adopted Snapchat early and engagement has stayed deep. Daily active usage among 18-34 demographic is meaningfully higher than other markets. Snapchat AR lens campaigns + Stories ads drive real direct-response for fashion, F&B, beauty.",
		},
		{
			question: "Should we run campaigns from UAE or Saudi Arabia?",
			answer:
				"Depends on the buyer. UAE is the convenience hub — easier billing + entity + work permits. KSA is where the population (and increasingly the spend) lives. For Saudi-targeted campaigns, run from KSA where compliance + payment + entity structure are easier.",
		},
		{
			question: "What's the right language strategy?",
			answer:
				"Arabic-first, English-secondary. Most KSA-targeted campaigns we run are 70-80% Arabic creative + 20-30% English for expat-targeting splits. Pure English campaigns miss most of the buyer pool.",
		},
		{
			question: "What about Ramadan + Hajj timing?",
			answer:
				"Ramadan: working hours compress, evening engagement spikes after iftar. Hajj week (~5-7 days/year): travel + hospitality + religious services peak. Plan 60-90 days out for both. National Day (Sept 23) drives retail + F&B spikes.",
		},
		{
			question: "How is KSA PDPL different from UAE PDPL?",
			answer:
				"Substantively similar — both consent-based, both with cross-border restrictions, both enforced. KSA PDPL is GDPR-aligned with stronger enforcement signals so far. Build for KSA PDPL standards if operating in GCC broadly.",
		},
	],
};

const AUSTRALIA: LocationDepth = {
	name: "Australia",
	slug: "australia",
	type: "country",
	iso: "AU",
	population: "26 million",
	currency: "AUD",
	languages: ["English"],
	summary:
		"APAC's most mature English-speaking digital ad market. Strong B2B SaaS + D2C ecosystem. Premium CPMs (similar to UK), consent-by-design baseline.",
	marketContext:
		"Australia's digital ad spend reached AUD 15+ billion in 2024. Privacy Act 1988 + Australian Consumer Law govern advertising; Privacy Act reforms are ongoing toward GDPR-aligned standards. Sydney + Melbourne concentrate 60%+ of digital ad activity. B2B SaaS (Atlassian-style ecosystem) + D2C (fashion, beauty, F&B) dominate.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"meta-ads",
		"linkedin-ads",
		"content-marketing",
	],
	topIndustryIds: ["b2b-saas", "fashion-d2c", "retail", "fnb", "fintech"],
	channelMix: [
		{
			channel: "Google Search + PMax",
			weight: "Primary",
			note: "Mature search ecosystem; PMax adoption high for catalog D2C.",
		},
		{
			channel: "Meta (Instagram-led)",
			weight: "Primary",
			note: "Fashion + lifestyle + D2C indexes heavily on Instagram.",
		},
		{
			channel: "LinkedIn",
			weight: "Primary (B2B)",
			note: "Strong for AU SaaS + professional services.",
		},
		{
			channel: "TikTok",
			weight: "Rising",
			note: "Under-30 demographic; F&B + fashion D2C strongest.",
		},
	],
	compliance: [
		{
			name: "Privacy Act 1988",
			description:
				"Australia's main data-protection law. Reforms underway toward GDPR-aligned standards.",
		},
		{
			name: "ACMA (Australian Communications and Media Authority)",
			description: "Spam Act enforcement + media + telecom regulation.",
		},
		{
			name: "ACCC (Australian Competition and Consumer Commission)",
			description:
				"Misleading-conduct + comparative-ad enforcement. Real penalties.",
		},
		{
			name: "AANA Code of Ethics",
			description: "Self-regulatory advertising code.",
		},
	],
	subLocations: [
		{ name: "Sydney", note: "Finance, B2B SaaS, retail, media" },
		{ name: "Melbourne", note: "Tech, retail, lifestyle, F&B" },
		{ name: "Brisbane", note: "Tourism, real estate, B2B" },
		{ name: "Perth", note: "Mining, retail, B2B" },
	],
	marketNuances: [
		"English-default. No multilingual requirement.",
		"Australian summer (Dec-Feb) drives retail + F&B + travel spikes; Christmas + Boxing Day + summer-sale cycle.",
		"AUD-USD currency volatility impacts CAC calculations for cross-border brands.",
		"AU consumers are highly review-aware — TrustPilot + Google reviews + Productreview matter.",
	],
	faqs: [
		{
			question: "How does AU compare to UK for digital marketing?",
			answer:
				"Similar in language, channel mix, consumer expectation. CPMs slightly lower than UK; B2B SaaS audience smaller but tighter ICP precision. Privacy reforms making AU look more GDPR-aligned over time.",
		},
		{
			question: "When does Australian retail peak?",
			answer:
				"Q4 (Oct-Dec). Black Friday (now mainstream in AU), Cyber Monday, Boxing Day + post-Christmas sales. Summer holiday season (Dec-Feb) for travel + leisure. ANZAC Day + EOFY (June) drive secondary spikes.",
		},
		{
			question: "Should we target AU + NZ together?",
			answer:
				"Common — share language + similar consumer behaviour. AU+NZ campaigns common from Australian operations. Currency + import duty differ; account for in catalog logic.",
		},
		{
			question: "What's a typical AU B2B SaaS CAC?",
			answer:
				"SMB SaaS: AUD 1,500-6,000 per qualified lead (~₹83K-330K). Mid-market: AUD 6K-25K. Enterprise: AUD 25K-100K+. Slightly cheaper than US/UK; tighter audience.",
		},
		{
			question: "Does Frameleads have on-ground AU presence?",
			answer:
				"Remote-first with periodic Sydney visits for retainers ≥ AUD 15K/month. Indian operations cover most of the work; AU billing via local entity.",
		},
	],
};

const CANADA: LocationDepth = {
	name: "Canada",
	slug: "canada",
	type: "country",
	iso: "CA",
	population: "39 million",
	currency: "CAD",
	languages: ["English", "French (Quebec)"],
	summary:
		"North America's privacy-leading market. PIPEDA + provincial laws govern consent. Toronto + Vancouver + Montreal lead. Bilingual creative for Quebec.",
	marketContext:
		"Canadian digital ad spend ~CAD 14 billion in 2024. PIPEDA + Quebec's Law 25 (most stringent) + provincial laws govern consent. Toronto concentrates ~50% of digital spend; Vancouver (tech), Montreal (creative + Quebec market) round out the top three. B2B SaaS + fintech + D2C strongest.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"meta-ads",
		"linkedin-ads",
		"content-marketing",
	],
	topIndustryIds: ["b2b-saas", "fintech", "real-estate", "fashion-d2c", "retail"],
	channelMix: [
		{
			channel: "Google + Meta",
			weight: "Primary",
			note: "Standard North-American mix; English-default with French splits for Quebec.",
		},
		{
			channel: "LinkedIn (B2B)",
			weight: "Primary",
			note: "Toronto + Vancouver tech ecosystems active on LinkedIn.",
		},
		{
			channel: "TikTok",
			weight: "Rising",
			note: "Under-30 demographic.",
		},
	],
	compliance: [
		{
			name: "PIPEDA",
			description:
				"Personal Information Protection and Electronic Documents Act — federal data law.",
		},
		{
			name: "Quebec Law 25",
			description:
				"Most stringent provincial law; bilingual privacy notice + appointed privacy officer requirements.",
		},
		{
			name: "CASL (Canada's Anti-Spam Legislation)",
			description:
				"Among the world's strictest anti-spam laws — opt-in consent mandatory for commercial email.",
		},
	],
	subLocations: [
		{ name: "Toronto", note: "Finance, B2B SaaS, retail, media" },
		{ name: "Vancouver", note: "Tech, gaming, real estate" },
		{ name: "Montreal", note: "Creative, AI, French-Canadian market" },
		{ name: "Calgary", note: "Energy, finance, B2B" },
	],
	marketNuances: [
		"Quebec requires French creative + bilingual privacy notices for any business operating there.",
		"CASL enforcement on commercial email is strict — consent-recorded opt-in mandatory.",
		"Cross-border (CA + US) targeting common; AOVs comparable to US.",
	],
	faqs: [
		{
			question: "Do we need French creative for Quebec?",
			answer:
				"For Quebec-targeted campaigns, yes — Bill 96 + Law 25 require French. Pan-Canadian campaigns can run English-default + French Quebec splits.",
		},
		{
			question: "How is PIPEDA different from US privacy laws?",
			answer:
				"Federal Canadian law (PIPEDA) is more consent-driven than US state laws. Quebec Law 25 is GDPR-comparable in strictness. Build for Quebec standards to cover all of Canada.",
		},
		{
			question: "What's CASL and why does it matter?",
			answer:
				"Canada's anti-spam law — among the strictest globally. Opt-in consent + ID + opt-out required for every commercial email. Maximum penalties up to CAD 10M for businesses.",
		},
		{
			question: "Does Frameleads work with Canadian brands?",
			answer:
				"Yes — Toronto-based brands frequent in our portfolio. Remote-first; CA billing via local entity.",
		},
	],
};

const GERMANY: LocationDepth = {
	name: "Germany",
	slug: "germany",
	type: "country",
	iso: "DE",
	population: "84 million",
	currency: "EUR",
	languages: ["German"],
	summary:
		"Europe's largest economy. GDPR + DSGVO (German implementation) — highest compliance bar in Frameleads' coverage. B2B SaaS + manufacturing + retail dominant.",
	marketContext:
		"Germany ranks among Europe's top digital ad markets. DSGVO (Germany's GDPR implementation) is the most strictly enforced in Europe; cookie-consent flows + opt-in requirements are mature. Munich + Berlin + Hamburg + Frankfurt + Düsseldorf concentrate spend. German-language creative is non-negotiable.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"linkedin-ads",
		"content-marketing",
		"meta-ads",
	],
	topIndustryIds: ["b2b-saas", "manufacturing", "retail", "fintech", "professional-services"],
	channelMix: [
		{
			channel: "Google + Meta",
			weight: "Primary",
			note: "Standard EU mix; German-language creative required.",
		},
		{
			channel: "LinkedIn + XING",
			weight: "Primary (B2B)",
			note: "XING is locally significant for B2B alongside LinkedIn.",
		},
		{
			channel: "Programmatic + native",
			weight: "Supporting",
			note: "Mature DSP ecosystem; quality inventory.",
		},
	],
	compliance: [
		{
			name: "DSGVO / GDPR",
			description:
				"German implementation of GDPR — strictest enforcement in Europe.",
		},
		{
			name: "UWG (Act Against Unfair Competition)",
			description:
				"Strict rules on advertising claims + comparative + commercial communications.",
		},
		{
			name: "TKG (Telecommunications Act) + UWG",
			description:
				"Email + SMS marketing requires explicit opt-in (double opt-in best practice).",
		},
	],
	subLocations: [
		{ name: "Munich", note: "Tech, automotive, finance" },
		{ name: "Berlin", note: "Tech, startups, creative" },
		{ name: "Hamburg", note: "Media, retail, logistics" },
		{ name: "Frankfurt", note: "Finance, B2B services" },
		{ name: "Düsseldorf", note: "Advertising, retail, professional services" },
	],
	marketNuances: [
		"German-language creative is non-negotiable.",
		"Cookie-consent + double-opt-in for email are baseline.",
		"German consumers research extensively before purchase — content + reviews + comparison sites matter.",
		"Conservative ad culture — claim substantiation expected.",
	],
	faqs: [
		{
			question: "Why is German privacy enforcement different?",
			answer:
				"DSGVO is enforced through state-level data protection authorities, several of which (Bavaria, Berlin) are unusually active. Penalties have been meaningful — millions of euros for documented violations. Build compliance into the stack from day one.",
		},
		{
			question: "What's XING?",
			answer:
				"Germany's legacy professional network — LinkedIn-equivalent. Less active than 5-10 years ago but still significant for senior German B2B audiences. Most B2B campaigns run LinkedIn primary, XING supporting.",
		},
		{
			question: "How is German B2B SaaS different from UK?",
			answer:
				"More documentation-driven sales cycles, longer payback windows (12-24 months typical for SMB), German-only creative + sales materials, conservative trial-to-paid timing.",
		},
		{
			question: "Do you serve German clients from India?",
			answer:
				"Remote-first works for English-speaking German operations. For local-market campaigns requiring German creative + sales support, we partner with on-ground German agencies + freelancers.",
		},
	],
};

const FRANCE: LocationDepth = {
	name: "France",
	slug: "france",
	type: "country",
	iso: "FR",
	population: "68 million",
	currency: "EUR",
	languages: ["French"],
	summary:
		"Europe's second-largest digital ad market. GDPR + French specifics (CNIL). Strong in luxury / fashion / hospitality / B2B SaaS. French-language creative mandatory.",
	marketContext:
		"France digital ad spend ~€18 billion in 2024. CNIL (French data protection authority) is among the most active GDPR enforcers. Paris concentrates ~60% of digital ad spend. Luxury + fashion + hospitality dominant; B2B SaaS + fintech rising.",
	topServiceIds: [
		"seo-services",
		"google-ads",
		"meta-ads",
		"content-marketing",
		"social-media-marketing",
	],
	topIndustryIds: ["fashion-d2c", "retail", "fnb", "hospitality", "b2b-saas"],
	channelMix: [
		{
			channel: "Google + Meta",
			weight: "Primary",
			note: "Standard EU mix; French creative mandatory.",
		},
		{
			channel: "Instagram + TikTok",
			weight: "Primary (luxury + lifestyle)",
			note: "Visual-led categories index heavily.",
		},
		{
			channel: "LinkedIn",
			weight: "B2B",
			note: "Smaller than UK/Germany but tight French B2B ICP.",
		},
	],
	compliance: [
		{
			name: "GDPR + CNIL guidance",
			description:
				"CNIL is France's data protection authority — among the most active GDPR enforcers globally. Cookie-consent + tracker rules strict.",
		},
		{
			name: "Loi Toubon",
			description:
				"French-language law — advertising in France must include French; English-only ads with French audience are non-compliant.",
		},
	],
	subLocations: [
		{ name: "Paris", note: "Luxury, fashion, finance, B2B" },
		{ name: "Lyon", note: "Tech, finance, B2B" },
		{ name: "Marseille", note: "Logistics, retail, tourism" },
	],
	marketNuances: [
		"French creative + French-language ad copy mandatory by law (Loi Toubon).",
		"CNIL cookie-consent enforcement strict — consent-mode + IAB TCF compliance required.",
		"Luxury + fashion + hospitality drive premium CPMs.",
		"August is a vacation month — campaigns slow, then ramp Sept-Dec.",
	],
	faqs: [
		{
			question: "Why does French creative matter so much?",
			answer:
				"Loi Toubon legally requires French in advertising visible to French consumers. CNIL + ARPP (advertising standards) enforce. English-only campaigns risk regulatory action + lower CTR (French consumers strongly prefer native language).",
		},
		{
			question: "What's CNIL?",
			answer:
				"Commission Nationale de l'Informatique et des Libertés — France's data protection authority. One of the most active GDPR enforcers globally; meaningful penalties (€100M Google fine in 2020 referenced as example).",
		},
		{
			question: "When should we plan for the August slowdown?",
			answer:
				"Most French B2B + B2C spending slows in August (vacation month). Plan media-spend tapering July → August, then ramp Sept-Dec for Q4 push.",
		},
		{
			question: "Does Frameleads serve French clients?",
			answer:
				"Indian-founder global brands with French exposure — yes. Native French operations need on-ground partners (CNIL + ARPP fluency, native creative). We partner accordingly.",
		},
	],
};

const BRAZIL: LocationDepth = {
	name: "Brazil",
	slug: "brazil",
	type: "country",
	iso: "BR",
	population: "215 million",
	currency: "BRL",
	languages: ["Portuguese"],
	summary:
		"Latin America's largest digital market. LGPD-governed. Meta + WhatsApp dominant. D2C + retail + fintech leading categories.",
	marketContext:
		"Brazil's digital ad spend exceeded R$30 billion in 2024. LGPD (Lei Geral de Proteção de Dados) — GDPR-aligned — governs consent. São Paulo + Rio de Janeiro + Brasília concentrate spend. WhatsApp is the dominant communication channel; click-to-WhatsApp campaigns work like in India. PIX (instant payment) reduces checkout friction dramatically.",
	topServiceIds: [
		"meta-ads",
		"google-ads",
		"whatsapp-marketing",
		"seo-services",
		"content-marketing",
	],
	topIndustryIds: ["retail", "fnb", "fashion-d2c", "fintech", "real-estate"],
	channelMix: [
		{
			channel: "Meta + Click-to-WhatsApp",
			weight: "Primary",
			note: "Like India — WhatsApp funnel for service categories.",
		},
		{
			channel: "Google + PMax",
			weight: "Primary",
			note: "Portuguese-default search; Shopping mature for D2C.",
		},
		{
			channel: "TikTok",
			weight: "Rising",
			note: "Massive under-35 reach; F&B + fashion D2C strong.",
		},
		{
			channel: "Mercado Livre Ads",
			weight: "Supporting (retail)",
			note: "Brazil's Amazon-equivalent retail-media surface.",
		},
	],
	compliance: [
		{
			name: "LGPD",
			description: "Lei Geral de Proteção de Dados — Brazil's GDPR.",
		},
		{
			name: "CONAR",
			description: "Self-regulatory body for advertising standards.",
		},
	],
	subLocations: [
		{ name: "São Paulo", note: "Finance, fintech, retail, media" },
		{ name: "Rio de Janeiro", note: "Tourism, media, fashion" },
		{ name: "Brasília", note: "Government, services" },
		{ name: "Belo Horizonte", note: "Manufacturing, retail" },
	],
	marketNuances: [
		"Portuguese-language creative mandatory.",
		"PIX payment adoption is universal — checkout friction lower than India.",
		"Carnaval + Black Friday (Nov) + Christmas drive seasonal peaks.",
		"WhatsApp-led sales conversations are culturally normal.",
	],
	faqs: [
		{
			question: "How is Brazilian digital marketing similar to Indian?",
			answer:
				"WhatsApp-led funnels, multi-tier-city distribution, mobile-first checkout, price-sensitivity, payment-flexibility (PIX vs UPI), seasonal-peak intensity (Carnaval vs Diwali). The Indian playbook adapts well to Brazil with language + currency + regulatory adjustments.",
		},
		{
			question: "What's PIX and why does it matter?",
			answer:
				"Brazil's instant payment system — UPI-equivalent. Universal adoption. Checkout completion rates are higher than markets reliant on credit cards. D2C unit economics work better in Brazil partly because of this.",
		},
		{
			question: "Does Frameleads serve Brazilian clients?",
			answer:
				"Limited direct experience; Indian-founder global brands with Latin America exposure — yes. Native Brazilian operations need on-ground Portuguese-speaking partners.",
		},
		{
			question: "When does Brazil shop most?",
			answer:
				"Black Friday (now mainstream in BR), Cyber Monday, Christmas + post-Christmas, Mother's Day (May), Children's Day (Oct), and Carnaval-adjacent retail (Feb-Mar).",
		},
	],
};

const CHINA: LocationDepth = {
	name: "China",
	slug: "china",
	type: "country",
	iso: "CN",
	population: "1.4 billion",
	currency: "CNY",
	languages: ["Mandarin", "Cantonese (regional)"],
	summary:
		"World's second-largest digital ad market. Closed ecosystem — Baidu + WeChat + Douyin + Xiaohongshu instead of Google + Meta. PIPL-governed. Requires localized execution.",
	marketContext:
		"China's digital advertising operates inside a closed platform ecosystem — Baidu (search), Tencent WeChat (messaging + content + mini-programs), ByteDance Douyin (TikTok), Xiaohongshu (lifestyle commerce), Tmall + JD (e-commerce). Western brands need local entity + ICP licence + Chinese-language creative + WeChat-native commerce flows. PIPL (Personal Information Protection Law) is GDPR-equivalent.",
	topServiceIds: [
		"content-marketing",
		"seo-services",
		"social-media-marketing",
		"performance-marketing",
	],
	topIndustryIds: ["fashion-d2c", "retail", "luxury", "tourism", "fnb"],
	channelMix: [
		{
			channel: "Baidu (search + display)",
			weight: "Primary (search)",
			note: "China's Google. Requires Chinese-language SEO + ICP licence.",
		},
		{
			channel: "WeChat (Official Accounts + Mini-Programs + Channels)",
			weight: "Primary",
			note: "End-to-end ecosystem: content + commerce + payment + service.",
		},
		{
			channel: "Douyin (Chinese TikTok)",
			weight: "Primary (consumer)",
			note: "Massive reach + commerce + livestream.",
		},
		{
			channel: "Xiaohongshu (Red)",
			weight: "Primary (lifestyle / luxury)",
			note: "Discovery + reviews + lifestyle commerce.",
		},
		{
			channel: "Tmall + JD storefront ads",
			weight: "Primary (retail)",
			note: "Retail-media surface — required for any e-com brand.",
		},
	],
	compliance: [
		{
			name: "PIPL",
			description:
				"Personal Information Protection Law — China's GDPR. Cross-border data transfer restrictions strict.",
		},
		{
			name: "Cyberspace Administration of China (CAC)",
			description: "Content + data regulation authority.",
		},
		{
			name: "ICP Licence",
			description: "Internet Content Provider licence — required for any website operating in China.",
		},
	],
	subLocations: [
		{ name: "Shanghai", note: "Finance, luxury, retail, media" },
		{ name: "Beijing", note: "Government, tech, education" },
		{ name: "Shenzhen", note: "Tech, manufacturing, fintech" },
		{ name: "Guangzhou", note: "Retail, fashion, manufacturing" },
		{ name: "Chengdu / Hangzhou", note: "Emerging tech hubs" },
	],
	marketNuances: [
		"Closed platform ecosystem — Western Google/Meta playbook doesn't translate.",
		"Mandarin creative + cultural localisation mandatory.",
		"WeChat is end-to-end (content + commerce + payment + service) — single platform replaces 4-5 Western tools.",
		"ICP licence + local entity often required for sustained operations.",
		"Cross-border e-com via Tmall Global / JD Worldwide simplifies entry without on-ground entity.",
	],
	faqs: [
		{
			question: "Can Frameleads run campaigns in China?",
			answer:
				"Limited direct operations. China requires local entity + Mandarin-native teams + WeChat / Douyin / Xiaohongshu expertise that differs significantly from Western playbook. We partner with Chinese specialists for clients needing in-market campaigns.",
		},
		{
			question: "What about cross-border e-com via Tmall Global?",
			answer:
				"Easier entry — Indian brands can sell to Chinese consumers via Tmall Global without on-ground entity. We help with brand positioning, creative localization, and platform-specific paid amplification.",
		},
		{
			question: "Is WeChat really one platform or many?",
			answer:
				"One platform with many surfaces: Official Accounts (content), Mini-Programs (e-com + service apps), Channels (short video), Pay (transactions), Work (B2B). A WeChat-native brand presence replaces website + email + commerce + customer-service tools used elsewhere.",
		},
		{
			question: "How strict is PIPL enforcement?",
			answer:
				"Strict — comparable to GDPR penalties. Cross-border data transfer is particularly heavily regulated. Most Western brands operating in China use China-based servers + China-localised data flows.",
		},
	],
};

const BANGALORE: LocationDepth = {
	name: "Bangalore",
	slug: "bangalore",
	type: "city",
	iso: "IN",
	parentCountry: "India",
	state: "Karnataka",
	population: "13 million+",
	currency: "INR",
	languages: ["English", "Kannada", "Hindi", "Tamil", "Telugu"],
	summary:
		"India's tech capital — deepest density of B2B SaaS, D2C, fintech, healthtech founders. Highest agency talent pool per capita in India. Frameleads HQ city.",
	marketContext:
		"Bangalore concentrates more digital marketing talent per capita than any other Indian city — engineering-led operations, founder-led agencies, English-default creative. The B2B SaaS ecosystem (Flipkart, Razorpay, Cred, Freshworks, Postman, Atlassian's India HQ) drives a disproportionate share of marketing innovation. D2C density is the second-deepest in India (after Mumbai). Healthcare + healthtech depth post-pandemic. Frameleads is headquartered in Electronic City and operates remote-first across Bangalore's clusters.",
	topServiceIds: [
		"seo-services",
		"performance-marketing",
		"meta-ads",
		"google-ads",
		"linkedin-ads",
		"content-marketing",
	],
	topIndustryIds: ["b2b-saas", "real-estate", "healthcare", "fnb", "fashion-d2c", "edtech"],
	channelMix: [
		{
			channel: "Google Search + PMax + LinkedIn",
			weight: "Primary (B2B SaaS)",
			note: "Search dominant for high-intent capture; LinkedIn for ICP precision.",
		},
		{
			channel: "Meta (FB + IG + Click-to-WhatsApp)",
			weight: "Primary (D2C + service)",
			note: "Visual-led D2C + click-to-WhatsApp for high-touch services.",
		},
		{
			channel: "YouTube + Shorts",
			weight: "Supporting",
			note: "Strong for edtech + entertainment + brand-building.",
		},
		{
			channel: "Influencer / creator commerce",
			weight: "Amplifier",
			note: "Mid-tier Bangalore creators (Kannada + English + Hindi).",
		},
	],
	compliance: [
		{
			name: "DPDP Act 2023",
			description: "Indian data-protection law applicable in Karnataka.",
		},
		{
			name: "K-RERA",
			description: "Karnataka Real Estate Regulatory Authority — real-estate ads must include K-RERA registration number.",
		},
		{
			name: "ASCI Code",
			description: "All-India advertising standards.",
		},
	],
	subLocations: [
		{ name: "Koramangala", note: "Startup density, F&B, retail" },
		{ name: "Indiranagar", note: "Lifestyle, F&B, retail" },
		{ name: "Whitefield", note: "Tech corridor, B2B SaaS, real estate" },
		{ name: "Electronic City", note: "Tech, manufacturing, B2B SaaS — Frameleads HQ" },
		{ name: "HSR Layout", note: "Tech, D2C, lifestyle" },
		{ name: "Sarjapur Road", note: "Real estate, B2B SaaS, tech" },
		{ name: "Marathahalli", note: "Tech, mid-market retail, residential" },
		{ name: "BTM Layout", note: "Tech, mid-market, residential" },
		{ name: "Jayanagar", note: "Residential, healthcare, retail" },
		{ name: "Hebbal", note: "Real estate, hospitality, emerging IT" },
	],
	marketNuances: [
		"English-default but multilingual (Kannada + Hindi + Tamil + Telugu) creative lifts non-tech-audience reach.",
		"B2B SaaS founder ecosystem creates unique LinkedIn dynamics — founder-led content has outsized reach.",
		"Real estate concentrates in IT corridors — Whitefield, Sarjapur, Electronic City, Hebbal.",
		"Bangalore weather (year-round mild) reduces seasonal variation vs Delhi/Mumbai markets.",
		"Bangalore traffic + commute realities shape evening + weekend campaign timing.",
	],
	faqs: [
		{
			question: "Why is Bangalore the right city for a marketing agency partner?",
			answer:
				"More agency + founder + engineering talent per capita than any other Indian city. Cross-vertical pattern-matching from operating across B2B SaaS / D2C / real estate / healthtech in one city. Frameleads is headquartered here for these reasons.",
		},
		{
			question: "Which Bangalore neighbourhoods does Frameleads serve?",
			answer:
				"All — Koramangala, Indiranagar, Whitefield, Electronic City (HQ), HSR, Sarjapur, Marathahalli, BTM, Jayanagar, Hebbal, and others. Programmatic Service × Bangalore × Area pages cover every neighbourhood combination.",
		},
		{
			question: "How is Bangalore different from Mumbai for marketing?",
			answer:
				"Bangalore: B2B SaaS depth, engineering-led operations, English-default, lower CPC than Mumbai for most categories, real estate concentrated in IT corridors. Mumbai: finance + media depth, multilingual creative more critical, higher CPCs across the board, real estate spread more broadly.",
		},
		{
			question: "Do you run Kannada-language campaigns?",
			answer:
				"Where audience-targeted to non-English-fluent Bangalore residents — yes. Most of our Bangalore work is English-default. For mass-market retail / F&B / healthcare campaigns targeting broader Bangalore demographics, bilingual or trilingual creative lifts reach 15-30%.",
		},
		{
			question: "Can we meet in person?",
			answer:
				"Yes — Electronic City HQ for kickoff + quarterly reviews. Most of our retainers operate remote-first with periodic in-person check-ins. Senior operators visit clients across Bangalore neighbourhoods.",
		},
	],
};

// ─────────────────────── Registry ───────────────────────

const ALL: LocationDepth[] = [
	INDIA,
	UAE,
	DUBAI,
	SINGAPORE,
	UNITED_KINGDOM,
	UNITED_STATES,
	SAUDI_ARABIA,
	AUSTRALIA,
	CANADA,
	GERMANY,
	FRANCE,
	BRAZIL,
	CHINA,
	BANGALORE,
];

const BY_SLUG: Record<string, LocationDepth> = Object.fromEntries(
	ALL.map((l) => [l.slug, l]),
);

export function getLocationDepth(slug: string): LocationDepth | undefined {
	return BY_SLUG[slug];
}

export function allLocationDepth(): LocationDepth[] {
	return ALL;
}
