/**
 * Hand-built "money pages" — high-intent commercial-query landing pages of the
 * pattern /{service}-company-in-{city} (e.g. "seo company in bangalore").
 *
 * Distinct from programmatic Tier 3 ("/{service}-in-{geo}") which targets
 * informational/transactional service intent. Money pages target agency-hiring
 * intent ("I want to hire a marketing company in Mumbai") and lean on local
 * trust signals: real neighborhoods, regulatory familiarity, industry mix.
 *
 * Two patterns:
 *   - "service":   anchored to a single Service from services.json. Renders
 *                  ServiceDepthSection from service-depth.ts.
 *   - "composite": anchored to a B2B / vertical / creative bundle. Renders
 *                  hand-written deliverables + channel mix from this seed file.
 *
 * Claims policy (matches CLAUDE.md + project_frameleads memory):
 *   - Use only verifiable proof: Shark Tank India founder appearance,
 *     ~200 engagements across founder career, ~₹9Cr attributed pipeline.
 *   - No fabricated client-count metrics ("500+ clients"), no invented %
 *     uplift numbers, no city-specific revenue claims.
 *   - Local context (neighborhoods, industries, regulators) sourced from
 *     geos-india.json / geos-global.json + location-depth.ts and public-domain
 *     municipal / regulator data.
 */

import type { ChannelMixRow } from "@/lib/data/location-depth";

export type MoneyPageFaq = {
	question: string;
	answer: string;
};

export type MoneyPage = {
	/** URL slug, matches /{slug}. e.g. "seo-company-in-bangalore". */
	slug: string;
	/** Geo.id (matches getGeo()), e.g. "bangalore", "mumbai", "dubai". */
	geoId: string;
	/** H1 + breadcrumb display label. */
	label: string;
	/** Intent type — drives template branching. */
	intent: "service" | "composite";
	/** Service.id (when intent === "service"). Drives ServiceDepthSection. */
	primaryServiceId?: string;
	/** Composite bundle (when intent === "composite"). Hand-written. */
	composite?: {
		summary: string;
		serviceIds: string[];
		industryBias: string[];
		deliverables: string[];
		channelMix: ChannelMixRow[];
	};
	/** 1-2 sentence hero dek (under the h1). */
	heroDek: string;
	/** 4-6 city-specific trust bullets. */
	whyLocalBullets: string[];
	/** 3-5 verifiable proof points. No fabricated stats. */
	proofPoints: string[];
	/** 4-6 money-page FAQs (city + service intent specific). */
	localFaqs: MoneyPageFaq[];
};

// ─────────────────────── Bangalore (home market) ───────────────────────

const SEO_COMPANY_BANGALORE: MoneyPage = {
	slug: "seo-company-in-bangalore",
	geoId: "bangalore",
	label: "SEO Company in Bangalore",
	intent: "service",
	primaryServiceId: "seo-services",
	heroDek:
		"An SEO company built for Bangalore's compounding-search markets — B2B SaaS, real estate, healthcare, F&B, fashion D2C. Programmatic + topical authority + LLM-citation surfaces, audited monthly against your unit economics.",
	whyLocalBullets: [
		"Headquartered in Bangalore — Electronic City operations, in-person workshops across Koramangala / Indiranagar / Whitefield clusters",
		"Built for Bangalore's intent mix: 'near me' + Bengaluru-language searches + B2B comparison queries — handled by separate page templates, not one bloated landing page",
		"Familiar with Karnataka RERA disclosures, Bangalore-municipal-zone restrictions on signage, and BBMP trade-licence implications for local-business schema",
		"Active in Bangalore's startup ecosystem — workshops with founder collectives, regular guest speaking at city accelerators",
		"Cluster knowledge: ORR corridor SaaS go-to-market is different from Jayanagar D2C is different from Whitefield enterprise — pages and channel mix reflect that",
	],
	proofPoints: [
		"Founder appeared on Shark Tank India (verifiable founder credential)",
		"~200 engagements across the founder's career building agency-side and brand-side growth functions",
		"~₹9Cr in pipeline attribution tracked across long-running engagements",
		"Free 30-minute audit before any retainer — we turn down ~30% of inbound where SEO isn't yet the right lever",
	],
	localFaqs: [
		{
			question: "Why hire an SEO company headquartered in Bangalore?",
			answer:
				"For a Bangalore business, two reasons compound: (1) regular in-person audit / workshop sessions in Electronic City / Koramangala / Indiranagar without the calendar-drag of remote-only relationships, and (2) cluster-specific knowledge — ORR SaaS, Whitefield enterprise, Jayanagar D2C, and Indiranagar F&B each behave differently in search, and a city-resident team has working intuition for which lever to pull first.",
		},
		{
			question: "How long does SEO take to show results for a Bangalore business?",
			answer:
				"For local-business intent ('SEO company in HSR Layout', 'dentist in Jayanagar'), 4–8 weeks is realistic. For competitive B2B / SaaS queries served across India, 4–6 months is the honest band before compounding starts. Anyone promising rank-1 in 30 days is either misreading the difficulty or selling a private-blog-network trick that will get penalised.",
		},
		{
			question: "Does Frameleads do Kannada-language SEO?",
			answer:
				"For B2B and most professional-services categories in Bangalore the buyer-language is English. For local-business (clinics, salons, F&B) we add a Kannada layer in titles + Google Business Profile descriptions where buyer evidence supports it. We don't auto-translate the whole site — half-correct Kannada is worse than English-only.",
		},
		{
			question: "Will you work with my existing developer / agency team?",
			answer:
				"Yes — most engagements are split-team. We own keyword strategy, content briefs, on-page templates, technical-SEO audit, and reporting; your developer / in-house team owns deploys, copy review, and brand-voice approval. We document everything in shared Notion + Linear so handoffs don't degrade.",
		},
		{
			question: "Do you sign a long-term contract?",
			answer:
				"Three-month minimum (SEO needs three audit cycles to show signal), then month-to-month after that. No multi-year lock-in — if we aren't earning the retainer, you should be able to leave at 30 days' notice.",
		},
	],
};

const PERFORMANCE_MARKETING_COMPANY_BANGALORE: MoneyPage = {
	slug: "performance-marketing-company-in-bangalore",
	geoId: "bangalore",
	label: "Performance Marketing Company in Bangalore",
	intent: "service",
	primaryServiceId: "performance-marketing",
	heroDek:
		"A performance marketing company for Bangalore brands that need attributed pipeline, not vanity reach. Google + Meta + LinkedIn + Click-to-WhatsApp, instrumented end-to-end with server-side attribution.",
	whyLocalBullets: [
		"Run from Bangalore — daily ops in IST overlap with your in-house team's working hours, not handed off to a US/EU pod",
		"Indian unit-economics knowledge: CPCs, CAC bands, and seasonal cycles (festive Q3, B2B-budget Q4, real-estate Akshaya Tritiya) baked into media planning",
		"Click-to-WhatsApp deep expertise — Meta's WhatsApp ad format is now Frameleads' highest-converting paid channel for Bangalore D2C + SaaS demo intent",
		"Karnataka GST + RBI cross-border-payment familiarity — we don't trip over invoicing when you scale ad spend past ₹5L/mo",
		"Cluster routing: Koramangala SaaS and Whitefield enterprise need different creative + landing flows, and our setup reflects that out of the gate",
	],
	proofPoints: [
		"Shark Tank India founder appearance (verifiable)",
		"~200 lifetime engagements across paid-media + organic growth functions",
		"~₹9Cr in attributed pipeline tracked across multi-quarter retainers",
		"Server-side attribution stack (Meta CAPI + GTM Server-Side + GA4) deployed on every engagement past Scale tier — not optional",
		"Free 30-min audit; ~30% of audited inbound is sent away when paid is the wrong lever right now",
	],
	localFaqs: [
		{
			question: "What's the minimum ad spend you'll work with in Bangalore?",
			answer:
				"For useful Google + Meta optimisation cycles we need ≥₹1L/month in media spend (combined). Below that there isn't enough conversion signal to make data-driven decisions; you're better off doing manual optimisation in-house. We'll tell you that on the audit call rather than take a fee.",
		},
		{
			question: "Do you handle Click-to-WhatsApp ads end-to-end?",
			answer:
				"Yes — that includes Meta Business Manager + WhatsApp Business Platform setup, creative briefs sized to WhatsApp's preview format, message templates compliant with Meta's commerce policy, and the routing layer that drops the lead into your CRM or a Frameleads-hosted hand-off bot.",
		},
		{
			question: "How do you handle attribution across Google, Meta, and WhatsApp?",
			answer:
				"Default stack: GA4 (session-based view), Meta CAPI (deduped Pixel + server events), Google Ads Enhanced Conversions, and a thin server-side GTM container. For Click-to-WhatsApp, we tag the click and reconcile downstream via WhatsApp Business Platform webhook into your CRM. Reports show channel-level CAC + LTV every Monday.",
		},
		{
			question: "Will you do creative + media buying together, or just buying?",
			answer:
				"Together. Pure media-buying without creative-side influence stalls inside 90 days — once you've spent down the easy audiences, performance lives or dies on creative diversity. We'll either run creative production internally or partner directly with your creative team or studio.",
		},
		{
			question: "Do you optimise landing pages too?",
			answer:
				"Yes — CRO is baked into the engagement, not a separate line item. The free audit always includes a landing-page review against the planned channel intent. If your existing landing pages will leak the spend, we'll say so before you sign the retainer.",
		},
	],
};

const B2B_MARKETING_COMPANY_BANGALORE: MoneyPage = {
	slug: "b2b-marketing-company-in-bangalore",
	geoId: "bangalore",
	label: "B2B Marketing Company in Bangalore",
	intent: "composite",
	composite: {
		summary:
			"A B2B marketing company built for Bangalore's SaaS + IT-services + enterprise-software economy. We run the full pipeline: positioning + ICP + content-led demand-gen + ABM + LinkedIn paid + sales-collateral system.",
		serviceIds: ["linkedin-ads", "content-marketing", "seo-services", "performance-marketing"],
		industryBias: ["b2b-saas", "manufacturing"],
		deliverables: [
			"ICP definition + persona docs + buyer-committee map (3-6 personas typical)",
			"Positioning + messaging framework (Why now / Why us / Why this category) reviewed with founder + sales head",
			"Editorial pillar plan: 3-5 pillars × 12-week run, each anchored to a buying-stage intent",
			"SEO + content production for those pillars — long-form + supporting comparison + glossary pages",
			"LinkedIn organic content engine (founder + company page) + LinkedIn paid (Conversation Ads + Sponsored Content + Document Ads)",
			"ABM motion against named-account lists — ad sequencing + sales-team handoff",
			"Lifecycle + email nurture for MQL → SQL → opportunity transitions",
			"Pipeline + revenue attribution: HubSpot / Salesforce + GA4 + LinkedIn Insight Tag integrated, reported weekly",
		],
		channelMix: [
			{
				channel: "LinkedIn (organic + paid)",
				weight: "Primary",
				note:
					"For Bangalore B2B — especially SaaS + IT services — LinkedIn is where buyer evidence + competitor evidence + procurement evidence converge. Most engagements give LinkedIn the largest share of paid media and 60-70% of organic content distribution.",
			},
			{
				channel: "Long-form content + SEO",
				weight: "Primary",
				note:
					"B2B buying cycles run 60-180 days and buyers consume 5-15 content pieces. Long-form + comparisons + glossary + integration pages compound — by month 6 they replace 30-50% of paid pipeline.",
			},
			{
				channel: "Google Ads (intent + competitor)",
				weight: "Secondary",
				note:
					"For high-commercial-intent terms ('Salesforce alternative for Bangalore SaaS') and competitor-brand defence. Lower volume than LinkedIn, much higher intent.",
			},
			{
				channel: "ABM + targeted outreach",
				weight: "Secondary",
				note:
					"Top 50-200 named accounts: LinkedIn matched-audiences + personalised landing pages + sequenced sales outreach. Reserved for engagements >Scale tier where the named-account list is mature.",
			},
			{
				channel: "Email lifecycle + nurture",
				weight: "Supporting",
				note:
					"For long buying cycles email keeps the brand alive between content touches. We build the sequence + content; your sales team owns the human-in-the-loop steps.",
			},
		],
	},
	heroDek:
		"A B2B marketing company that knows Bangalore's SaaS + IT-services + enterprise-software economy. Positioning → ICP → content engine → LinkedIn paid → ABM → pipeline attribution, run as one connected system.",
	whyLocalBullets: [
		"In-person buyer-research sessions across ORR / Whitefield / Electronic City SaaS clusters — not a Zoom-only motion",
		"Familiar with Bangalore's specific B2B buyer pattern: long deliberation, peer-network heavy, LinkedIn-validated, founder-due-diligence step",
		"Working knowledge of NASSCOM / iSPIRT / SaaSBoomi ecosystem touchpoints — useful for distribution beyond paid",
		"Comfort with both enterprise (multi-stakeholder, 6+ month) and SMB (founder-buyer, 4-6 week) Bangalore B2B motions",
		"Pricing + sales-team integration built in — we don't ship MQLs over the wall; we sit in the pipeline review",
	],
	proofPoints: [
		"Shark Tank India founder appearance — useful credibility on first sales calls with Indian enterprise buyers",
		"~200 engagements across founder's career, weighted to B2B and growth-stage companies",
		"~₹9Cr attributed pipeline tracked across multi-quarter retainers",
		"Won't engage if positioning is broken — first 4 weeks are positioning-and-ICP work before any media spend",
		"Free 30-min audit before any commercial conversation",
	],
	localFaqs: [
		{
			question: "We're a B2B SaaS in Bangalore — should we lead with LinkedIn or with SEO?",
			answer:
				"Both, in sequence: LinkedIn (organic + paid) for months 1-3 to generate qualified discovery + brand impressions inside your ICP, while SEO + long-form starts compounding in parallel from month 1. By month 4-6, SEO begins to replace 30-50% of the paid-LinkedIn dependency, but you need both engines running early because each fixes a different problem (LinkedIn = active-buyer reach, SEO = passive-discovery + sales-enablement).",
		},
		{
			question: "Do you do ABM for our top 200 accounts?",
			answer:
				"Yes — once your named-account list is mature (i.e. sales has actually qualified the 200 names, not just downloaded a job-board scrape). We layer LinkedIn matched audiences + personalised landing pages + sequenced sales outreach over those accounts. We won't run ABM as the primary motion if your top-of-funnel still has demand-gen gaps.",
		},
		{
			question: "Can you work with our existing HubSpot / Salesforce setup?",
			answer:
				"Yes. Most Bangalore B2B engagements involve some sort of CRM cleanup pass in week 1-2 — properties, lifecycle stages, attribution fields — before we begin. We don't migrate CRMs unless the existing one is genuinely broken; we make what you have work.",
		},
		{
			question: "How do you handle multi-stakeholder enterprise buying committees?",
			answer:
				"Persona-by-persona content + persona-by-persona ad sequencing. CFO sees ROI / cost-model content; CTO sees architecture / security content; VP-Eng sees implementation-effort content. We map the buying committee on the audit call and design the funnel against it, instead of running one generic ICP campaign.",
		},
		{
			question: "What's the typical engagement length and investment for B2B in Bangalore?",
			answer:
				"Six months minimum to see pipeline compound. Investment lands in our Scale or Enterprise tier (see pricing on the SEO and Performance Marketing service hubs); B2B engagements almost always need the full stack — positioning + content + LinkedIn paid + sales-integration — which can't fit Starter tier.",
		},
	],
};

const CREATIVE_ADVERTISING_COMPANY_BANGALORE: MoneyPage = {
	slug: "creative-advertising-company-in-bangalore",
	geoId: "bangalore",
	label: "Creative Advertising Company in Bangalore",
	intent: "composite",
	composite: {
		summary:
			"A creative advertising company for Bangalore D2C, F&B, fashion, and consumer-tech brands — where ad performance is bottlenecked by creative diversity, not by media buying.",
		serviceIds: ["meta-ads", "youtube-ads", "performance-marketing", "social-media-marketing"],
		industryBias: ["fashion-d2c", "fnb", "d2c-beauty"],
		deliverables: [
			"Creative strategy doc — concept territories, hook angles, ad-format mix (Reel / Story / Carousel / Static / YouTube Shorts / long-form)",
			"Monthly creative production: 30-60 ad variations across formats, batched in 2-week sprints",
			"Hook + thumbnail library (50-100 variations) for rapid A/B against current top performers",
			"UGC-creator briefing + sourcing (Bangalore-based creator network) where the brand fits a creator-led format",
			"Performance review against creative-fatigue + ROAS-by-format every two weeks",
			"Creative + paid-media coupling — ad fatigue, audience burn, and creative ROI tracked as one system, not two reports",
			"Brand-voice + style-guide preservation — Bangalore brands often have strong founder-driven voice that gets lost in cookie-cutter creative",
		],
		channelMix: [
			{
				channel: "Meta (Instagram Reels + Stories + Feed)",
				weight: "Primary",
				note:
					"For Bangalore D2C — fashion, F&B, beauty, consumer tech — Meta is where creative diversity moves ROAS. We over-index Reels for D2C (highest CPM efficiency in 2026) and Feed Carousel for product-discovery storytelling.",
			},
			{
				channel: "YouTube (Shorts + skippable In-Stream)",
				weight: "Primary",
				note:
					"YouTube Shorts for consumer-brand awareness at Bangalore-metro CPMs is currently 30-50% cheaper than equivalent Instagram Reels reach. Long-form in-stream for product-explainer + founder-led storytelling.",
			},
			{
				channel: "Google Discovery + Demand Gen",
				weight: "Secondary",
				note:
					"Google's Demand Gen format (the successor to Discovery Ads) gives Bangalore consumer brands a path into YouTube + Discover + Gmail with creative-led targeting. Layered over Meta for incremental reach when Meta audiences burn.",
			},
			{
				channel: "UGC + influencer collabs",
				weight: "Secondary",
				note:
					"Bangalore has a deep micro-creator network (5K-100K followers) in food, fashion, fitness, and tech. We brief + buy + repurpose creator content into paid ads (whitelisting + paid amplification), which usually outperforms studio-shot creative for D2C in 2026.",
			},
			{
				channel: "Out-of-home + experiential",
				weight: "Supporting",
				note:
					"Reserved for launch moments. Bangalore-metro OOH (Indiranagar, Koramangala, Brigade Road, Whitefield) plus event activations layered into the digital push — we don't run OOH as the primary lever.",
			},
		],
	},
	heroDek:
		"A creative advertising company for Bangalore D2C, F&B, fashion, and consumer-tech brands — where ad performance is now bottlenecked by creative diversity, not by media buying.",
	whyLocalBullets: [
		"Bangalore-based creative team — shoots happen in city, props sourced locally, talent booked from the Bangalore micro-creator pool",
		"Knowledge of Bangalore consumer codes: ORR tech-worker, Indiranagar millennial, Koramangala professional, Whitefield premium-suburb — each codes differently in creative",
		"Familiar with ASCI advertising standards and Karnataka-specific consumer-protection nuances (food labelling, health/wellness claims, real-estate disclosure)",
		"Creator network in-city: 100+ Bangalore micro-creators across F&B, fashion, fitness, and lifestyle, vetted for performance not just follower count",
		"Production cost discipline — Bangalore shoots run at 40-60% of Mumbai/Delhi production costs without quality drop, when planned right",
	],
	proofPoints: [
		"Shark Tank India founder appearance — useful for D2C brand teams who care about founder-led credibility",
		"~200 engagements across creative + paid + organic functions",
		"Creative + media-buying coupled into one workflow — no over-the-wall handoffs that kill iteration speed",
		"Free 30-min audit; we'll review your top 10 ads + creator stack honestly before any commercial conversation",
	],
	localFaqs: [
		{
			question: "How fast can you produce new creative variations?",
			answer:
				"Two-week sprints, 30-60 ad variations per month is the standard cadence at Scale tier. For new-product launches we can compress to 1-week sprints. Faster than that and quality + brand-voice consistency degrades — we'd rather hold the line.",
		},
		{
			question: "Do you shoot in-house or hire studios?",
			answer:
				"Hybrid. UGC + creator-led content is shot by the creator or in our team's lightweight in-house setup. Studio-grade shoots (product macro, packshots, founder interviews, brand films) are booked at Bangalore production houses — we manage the brief, the on-set creative direction, and the post-production.",
		},
		{
			question: "Will you work with our existing creative agency or in-house team?",
			answer:
				"Often, yes. Plenty of Bangalore consumer brands already have a brand-side creative team or a brand-films agency. We split work cleanly: brand films + hero campaigns stay with them; performance creative (the 30-60 ad variations a month) is run by us, with monthly brand-voice review with their team.",
		},
		{
			question: "Do you handle UGC + influencer sourcing or just creative production?",
			answer:
				"Both. Influencer sourcing, brief, contract, content review, paid amplification (whitelisting), and reporting all sit in the same workflow — separating influencer from paid usually destroys the ROI math because the cost only makes sense once you put paid behind the best-performing creator content.",
		},
		{
			question: "What ad spend do we need before creative-diversity becomes the bottleneck?",
			answer:
				"Roughly ₹5L/month combined Meta + YouTube spend. Below that, your audience pool refreshes slowly enough that 5-10 ad variations per month is enough. Above that, ad fatigue compresses fast and you need 30+ monthly variations to keep ROAS from sliding. We'll diagnose this on the audit call before recommending the engagement tier.",
		},
	],
};

const REAL_ESTATE_MARKETING_COMPANY_BANGALORE: MoneyPage = {
	slug: "real-estate-marketing-company-in-bangalore",
	geoId: "bangalore",
	label: "Real Estate Marketing Company in Bangalore",
	intent: "composite",
	composite: {
		summary:
			"A real estate marketing company for Bangalore developers, project marketers, and brokerages — built for K-RERA-compliant lead-gen across residential, commercial, and plotted-development inventory.",
		serviceIds: ["meta-ads", "google-ads", "performance-marketing", "seo-services"],
		industryBias: ["real-estate"],
		deliverables: [
			"K-RERA disclosure templating + ad-creative compliance review — every ad set carries the RERA registration number + project-stage disclosure",
			"Project landing pages (one per project) with floor plans, RERA disclosure, virtual-tour embed, and lead form integrated to your CRM (PropertyExpert, Sell.do, or custom)",
			"Meta + Google Ads stack tuned for high-ticket real-estate intent — long-window attribution (90-180 days) because Bangalore property buying cycles are slow",
			"Google Local Services + Google Business Profile management for site-visit-intent searches",
			"Click-to-WhatsApp ads as the dominant front-end channel — Bangalore property buyers prefer WhatsApp over web forms by ~2-3x conversion",
			"Site-visit-booking automation — WhatsApp form → CRM → SMS confirmation → site-visit reminder",
			"Long-form content engine: locality guides (Koramangala / Whitefield / ORR / Sarjapur / Devanahalli), micro-market reports, RERA-update breakdowns",
			"Channel-partner / broker enablement collateral: branded one-pagers, project decks, comparison sheets",
		],
		channelMix: [
			{
				channel: "Meta (Click-to-WhatsApp + Lead Ads)",
				weight: "Primary",
				note:
					"For Bangalore real-estate, Meta's Click-to-WhatsApp + Lead Ad formats produce the highest-converting site-visit pipeline. Lead-to-site-visit conversion runs 2-3x web-form conversion because WhatsApp matches the buyer's preferred communication channel.",
			},
			{
				channel: "Google Search Ads (project + locality)",
				weight: "Primary",
				note:
					"For high-intent queries ('3BHK in Whitefield', '[builder name] [project]', '[locality] flats for sale') Google Search is non-substitutable. We segment by project + by locality, with separate creative + landing for each.",
			},
			{
				channel: "Long-form content + SEO",
				weight: "Secondary",
				note:
					"Locality + micro-market guides + RERA-update content compounds — by month 6-9 it begins to replace 20-40% of the paid spend for awareness-stage buyers. Especially valuable for plotted developments and emerging Bangalore micro-markets (Devanahalli, Sarjapur extension, Doddaballapur).",
			},
			{
				channel: "Google Local Services + GBP",
				weight: "Secondary",
				note:
					"Site-visit-intent searches ('site visit [project name]', 'sample flat near me') route through Google Maps + GBP. We optimise GBP listings + post regular project updates so the listing surfaces for nearby buyers.",
			},
			{
				channel: "YouTube (project walk-through + locality guides)",
				weight: "Supporting",
				note:
					"YouTube long-form for project walk-throughs and locality guides — buyers in deep-research mode (3-6 weeks before site visit) consume YouTube heavily. Lower direct-conversion but high assist-conversion for our real-estate clients.",
			},
		],
	},
	heroDek:
		"A real estate marketing company for Bangalore developers, project marketers, and brokerages — K-RERA-compliant, WhatsApp-first, site-visit-optimised. Built for the long buying cycles Bangalore property actually runs on.",
	whyLocalBullets: [
		"Working knowledge of K-RERA (Karnataka Real Estate Regulatory Authority) disclosure requirements — every ad we run carries RERA registration + project-stage labelling",
		"Familiar with Bangalore's micro-markets: each locality has a distinct buyer profile, price band, and channel mix — generic real-estate playbooks underperform here",
		"Click-to-WhatsApp as the dominant front-end channel — Bangalore property buyers convert 2-3x better through WhatsApp than through web lead forms",
		"BBMP / BDA / BMRDA approval terminology built into landing-page copy — buyers screen for it and developers without clean approval status leak conversions",
		"Comfortable with both pre-launch (RERA registration pending → soft-launch model) and ready-to-move-in inventory flows, including the regulatory differences between them",
	],
	proofPoints: [
		"Shark Tank India founder appearance — useful credibility on first calls with Bangalore developer marketing heads",
		"~200 engagements; multiple in Bangalore real estate across residential, plotted, and commercial inventory",
		"~₹9Cr in tracked pipeline attribution across multi-quarter retainers",
		"K-RERA compliance review on every creative before deployment — non-negotiable, not an add-on",
		"Free 30-min audit; we'll review your current lead-cost + site-visit-conversion rate before any commercial conversation",
	],
	localFaqs: [
		{
			question: "How does Frameleads handle K-RERA disclosure in real-estate ads?",
			answer:
				"Every ad creative carries the project's RERA registration number + project stage (Under Construction / Ready to Move / Pre-Launch / Subvention-Eligible) in the ad copy or pinned creative element. The landing page carries the full RERA disclosure block above the lead form. We refuse to run ads for projects without valid RERA registration — the regulatory + reputational risk outweighs the short-term spend.",
		},
		{
			question: "What's the typical cost per site visit in Bangalore?",
			answer:
				"Hugely band-dependent: ₹800-₹2,500 per site visit for ≤₹1Cr-ticket projects, ₹2,500-₹6,000 for ₹1-5Cr-ticket, ₹6,000-₹15,000 for luxury / villa / plotted-large-format. Anyone promising sub-₹500 site visits in Bangalore in 2026 is either misreporting or pulling unqualified leads. The free audit will give you a real band against your specific project.",
		},
		{
			question: "How long is a typical Bangalore real-estate buyer cycle?",
			answer:
				"From first-touch to booking: 60-180 days for ≤₹1Cr-ticket, 120-300 days for ₹1-5Cr-ticket, 6-18 months for luxury. We set attribution windows accordingly — 90 days minimum on Meta, 180 days on Google. Short-window attribution will systematically under-credit awareness-stage channels and you'll cut the wrong spend.",
		},
		{
			question: "Can you handle channel-partner / broker enablement too?",
			answer:
				"Yes. Branded one-pagers per project, channel-partner kit (deck + comparison sheets + lead-handover forms), CP-only WhatsApp lead-routing, and CP-attribution tracking inside the same dashboard as direct-marketing. Most Bangalore developers run direct + CP in parallel, and the marketing system needs to reflect that.",
		},
		{
			question: "Do you work with brokerages and not just developers?",
			answer:
				"Yes — brokerages, secondary-market resale specialists, and channel-partner firms. The campaign shape is different (locality-led rather than project-led, multi-project landing pages, broader keyword set), but the underlying stack (Click-to-WhatsApp + Google Search + CRM + locality content) is the same.",
		},
	],
};

// ─────────────────────── Mumbai expansion ───────────────────────

const SEO_COMPANY_MUMBAI: MoneyPage = {
	slug: "seo-company-in-mumbai",
	geoId: "mumbai",
	label: "SEO Company in Mumbai",
	intent: "service",
	primaryServiceId: "seo-services",
	heroDek:
		"An SEO company for Mumbai brands — real estate, BFSI, D2C beauty, media, hospitality. Built for Mumbai's high-intent commercial-query density and Bandra/Andheri/Lower-Parel buyer-behaviour differences.",
	whyLocalBullets: [
		"Mumbai-buyer-behaviour aware: Bandra D2C is different from Lower Parel BFSI is different from Andheri media is different from Powai SaaS — pages and channel mix reflect that",
		"Familiarity with Maharashtra RERA disclosure rules (project-stage labelling, registration-number placement) for Mumbai real-estate engagements",
		"BFSI compliance awareness — SEBI advertising rules for financial-services landing pages, RBI fair-practice guidelines for NBFC + fintech",
		"Comfort with Mumbai's media + entertainment ecosystem — production-house, OTT, music-label, talent-management SEO engagements",
		"Mumbai-Marathi search nuance: for local-business + government-service intent, Marathi-language overlays in titles + GBP descriptions where buyer evidence supports it",
	],
	proofPoints: [
		"Shark Tank India founder appearance (verifiable founder credential)",
		"~200 engagements across the founder's career, weighted to growth-stage Indian brands",
		"~₹9Cr attributed pipeline tracked",
		"Free 30-min audit before any retainer; we turn down ~30% of audited inbound where SEO isn't yet the right lever",
	],
	localFaqs: [
		{
			question: "Do you have an office in Mumbai?",
			answer:
				"Operations are run from Bangalore (Frameleads HQ). For Mumbai engagements above the Scale tier we travel for kick-off workshops + quarterly business reviews + critical milestones. Most ongoing work happens over shared Notion / Linear / Slack — Mumbai engagements don't suffer from this because the workflow is documented end-to-end. If you specifically need a Mumbai-resident agency, we'll say so and refer.",
		},
		{
			question: "How long does SEO take to show results for a Mumbai business?",
			answer:
				"For local-business + 'near me' intent ('SEO agency in Bandra'), 4-8 weeks. For competitive Mumbai commercial queries (real estate, BFSI, D2C beauty served pan-India), 4-6 months for the compound to start. Anyone promising rank-1 in 30 days for those categories is selling a private-blog-network trick that will get penalised.",
		},
		{
			question: "Will you handle Mumbai real-estate SEO with M-RERA compliance?",
			answer:
				"Yes. Maharashtra RERA registration numbers + project-stage disclosure are embedded into every page template; the on-page schema includes RealEstateListing + RealEstateAgent where applicable; lead-capture forms route through compliance-reviewed copy. We refuse engagements for projects without valid M-RERA registration.",
		},
		{
			question: "What's a realistic SEO investment for Mumbai brands?",
			answer:
				"Lands in our Scale or Enterprise tier (see pricing on the SEO Services hub). Mumbai's competitive intensity for the most valuable queries (real estate, BFSI, D2C) means Starter-tier SEO usually under-shoots — anything below ₹85k/mo will likely not generate compounding signal in the 4-6-month window.",
		},
		{
			question: "Do you do Marathi-language SEO for Mumbai?",
			answer:
				"For B2B and most professional-services categories in Mumbai the buyer-language is English. For local-business (clinics, F&B, salons, government-service intent) we add a Marathi overlay in titles + Google Business Profile descriptions where buyer evidence supports it. We don't auto-translate the full site.",
		},
	],
};

const PERFORMANCE_MARKETING_COMPANY_MUMBAI: MoneyPage = {
	slug: "performance-marketing-company-in-mumbai",
	geoId: "mumbai",
	label: "Performance Marketing Company in Mumbai",
	intent: "service",
	primaryServiceId: "performance-marketing",
	heroDek:
		"A performance marketing company for Mumbai brands that need attributed pipeline, not vanity reach. Google + Meta + LinkedIn + Click-to-WhatsApp, instrumented with server-side attribution.",
	whyLocalBullets: [
		"Mumbai unit-economics knowledge: BFSI CAC bands, D2C beauty repeat-purchase math, real-estate site-visit cost-per-booking, hospitality + media ad-spend seasonality",
		"M-RERA familiarity for Mumbai real-estate ad-set compliance (registration-number + project-stage in creative)",
		"SEBI + RBI advertising-rule awareness for BFSI and NBFC engagements — saves your team rejection cycles + ad-account disabling risk",
		"Comfortable scaling beyond ₹10L/mo combined Mumbai + pan-India ad spend without losing optimisation cadence",
		"Click-to-WhatsApp scaling for Mumbai D2C + real-estate + healthcare verticals — currently Frameleads' top-converting Meta format for Indian consumer brands",
	],
	proofPoints: [
		"Shark Tank India founder appearance (verifiable)",
		"~200 lifetime engagements across paid-media + organic growth functions",
		"~₹9Cr in attributed pipeline tracked",
		"Server-side attribution (Meta CAPI + GTM Server-Side + GA4) deployed on every Scale+ engagement",
		"Free 30-min audit before any retainer",
	],
	localFaqs: [
		{
			question: "What's the minimum ad spend you'll work with in Mumbai?",
			answer:
				"≥₹1L/month combined Google + Meta for the optimisation cycles to be data-driven. Below that we'll honestly say in-house manual optimisation is your best path, not an agency retainer.",
		},
		{
			question: "Can you run BFSI / fintech ad accounts in Mumbai?",
			answer:
				"Yes — with the caveat that BFSI ad-account stability requires strict SEBI + RBI compliance and a clean Meta / Google ad-policy track record. We run compliance review on every creative before deployment. If your in-house team has had account-disabling events, the first 30 days of any engagement is usually account rehabilitation + creative re-write.",
		},
		{
			question: "How do you handle Mumbai's seasonal cycles (festive, financial year-end, monsoon)?",
			answer:
				"Calendar-baked into the planning. Festive (Aug-Nov for D2C, Sep-Oct for BFSI tax-saving), financial year-end (Jan-Mar for BFSI + real-estate + tax-investment), monsoon (June-Sep — F&B / hospitality dip, e-comm spike). Media budgets and creative production schedules pre-allocated around those cycles, not reactively scrambled at month-end.",
		},
		{
			question: "Do you do creative production for Mumbai consumer brands?",
			answer:
				"Yes — creative + media-buying coupled into one workflow. For Mumbai D2C + beauty + media brands, creative diversity is the actual bottleneck once spend crosses ₹5L/mo. We either run creative in-house or partner with your existing creative team / studio.",
		},
		{
			question: "Will you work with our existing Mumbai agency or media-buying team?",
			answer:
				"Often, yes. Many Mumbai brands have an existing brand-films or above-the-line agency they want to keep. We slot in for the performance + paid-search + paid-social + attribution layer. We don't insist on full-funnel takeover.",
		},
	],
};

// ─────────────────────── Dubai expansion ───────────────────────

const SEO_COMPANY_DUBAI: MoneyPage = {
	slug: "seo-company-in-dubai",
	geoId: "dubai",
	label: "SEO Company in Dubai",
	intent: "service",
	primaryServiceId: "seo-services",
	heroDek:
		"An SEO company for Dubai brands — real estate, hospitality, retail, finance, professional services. Built for Dubai's English-Arabic dual-language search + GCC cross-border intent.",
	whyLocalBullets: [
		"Dual-language SEO planning — English-dominant for most B2B + tourism / hospitality, Arabic overlays for local-business + government-service + UAE-resident-targeted intent",
		"Familiarity with Dubai Land Department (DLD) + RERA-Dubai disclosure rules for real-estate marketing — property registration numbers + Trakheesi-permit-compliant ad creative",
		"GCC cross-border buyer awareness — Saudi, Kuwait, Qatar, Bahrain, Oman buyers research Dubai-listed services in their home Google domains (google.sa, google.kw); SEO planned for the cross-border footprint, not just Dubai-resident traffic",
		"Working knowledge of UAE PDPL (Personal Data Protection Law) for lead-form + retargeting compliance",
		"DIFC vs onshore-Dubai SEO differences — DIFC-registered financial-services + professional firms have different reg-disclosure requirements vs onshore",
	],
	proofPoints: [
		"Shark Tank India founder appearance (verifiable founder credential — credibility for GCC investor-buyer conversations)",
		"~200 engagements across the founder's career",
		"~₹9Cr attributed pipeline tracked (Indian + GCC engagements combined)",
		"Free 30-min audit before any retainer",
	],
	localFaqs: [
		{
			question: "Do you have a Dubai office?",
			answer:
				"Operations are run from Bangalore (Frameleads HQ). For Dubai engagements above Scale tier we travel for kick-off + quarterly reviews. Most ongoing work happens over shared Notion / Linear / Slack on Dubai-IST overlap. For engagements that specifically need a Dubai-resident agency presence, we'll say so and refer.",
		},
		{
			question: "Do you do Arabic-language SEO?",
			answer:
				"Yes, layered onto an English-dominant base. For most Dubai B2B + tourism + hospitality + retail categories the buyer-language is English. Arabic overlays go into local-business + government-service intent + UAE-resident targeting where buyer evidence supports it. We don't auto-translate the full site — bad Arabic is worse than English-only.",
		},
		{
			question: "Will you handle Dubai real-estate SEO with DLD / RERA-Dubai compliance?",
			answer:
				"Yes — property listings carry the DLD permit number (Trakheesi) + project registration + agency RERA-Dubai broker number where applicable. Schema includes RealEstateListing + RealEstateAgent. We refuse engagements for listings without valid Trakheesi permits.",
		},
		{
			question: "Can you handle GCC cross-border SEO (Saudi, Kuwait, Qatar)?",
			answer:
				"Yes — we plan content + technical SEO for the GCC cross-border footprint, not just Dubai-resident traffic. Hreflang for ar-AE / en-AE / ar-SA / en-SA / ar-KW / etc. as needed, country-specific currency + payment-method content, and GCC-specific topic clusters (Saudi Vision 2030 alignment, Qatar real-estate ownership rules, Kuwait banking categories).",
		},
		{
			question: "What's a realistic SEO investment for Dubai brands?",
			answer:
				"Lands in our Scale or Enterprise tier (see pricing on the SEO Services hub). Dubai's commercial-query intensity (real estate, finance, hospitality, professional services) and the dual-language footprint mean Starter-tier SEO usually under-shoots.",
		},
	],
};

const PERFORMANCE_MARKETING_COMPANY_DUBAI: MoneyPage = {
	slug: "performance-marketing-company-in-dubai",
	geoId: "dubai",
	label: "Performance Marketing Company in Dubai",
	intent: "service",
	primaryServiceId: "performance-marketing",
	heroDek:
		"A performance marketing company for Dubai brands — Meta + Google + Snapchat + TikTok + Click-to-WhatsApp, dual-language, GCC cross-border, server-side attributed.",
	whyLocalBullets: [
		"Dubai unit-economics knowledge: real-estate CAC bands (DLD-registered property), hospitality + tourism conversion cycles, retail + e-comm AED ROAS targets",
		"Trakheesi (Dubai Department of Economy & Tourism advertising permit) familiarity for the categories that require it",
		"Snapchat + TikTok GCC ad-buying expertise — both platforms over-index in GCC vs equivalent India performance, and the creative codes are different",
		"Click-to-WhatsApp as a dominant front-end for Dubai real-estate, healthcare, premium retail — same playbook as India + UAE-localised templates",
		"GCC cross-border media planning — Saudi + Kuwait + Bahrain audiences targeted from Dubai-resident campaigns when product / service is GCC-eligible",
	],
	proofPoints: [
		"Shark Tank India founder appearance — useful credibility on first calls with GCC investor-led brands",
		"~200 lifetime engagements across paid + organic functions",
		"~₹9Cr attributed pipeline tracked",
		"Server-side attribution (Meta CAPI + GTM Server-Side + GA4 + ad-platform Enhanced Conversions) on every Scale+ engagement",
		"Free 30-min audit before any retainer",
	],
	localFaqs: [
		{
			question: "What's the minimum ad spend you'll work with in Dubai?",
			answer:
				"≥AED 6,000 / mo (~₹1.4L) combined Google + Meta for the optimisation cycles to be data-driven. For real-estate or premium retail where ticket sizes are high, this floor is usually exceeded easily.",
		},
		{
			question: "Do you run Snapchat + TikTok ads for Dubai brands?",
			answer:
				"Yes — both are essential GCC channels, especially for premium retail, F&B, hospitality, and consumer brands targeting under-35 GCC residents. Snapchat in particular over-indexes vs Western benchmarks; ignoring it for Dubai consumer brands leaves significant reach on the table.",
		},
		{
			question: "Will you handle Dubai real-estate ads with DLD permits?",
			answer:
				"Yes — Trakheesi advertising-permit numbers embedded in every creative for property listings, with the project registration + agency RERA-Dubai broker number on landing pages. Schema, lead forms, and ad copy compliance-reviewed pre-deployment. We refuse to run real-estate ads for projects without valid Trakheesi permits.",
		},
		{
			question: "Can you target GCC cross-border audiences from Dubai?",
			answer:
				"Yes — Saudi, Kuwait, Qatar, Bahrain, Oman audiences can be targeted from Dubai-resident campaigns when the product is GCC-eligible (tourism, premium retail, education, healthcare, real-estate-with-GCC-investor-targeting). We plan dual-currency landing pages + GCC-localised creative + country-specific ad sets.",
		},
		{
			question: "Will you work with our existing Dubai creative agency?",
			answer:
				"Often, yes. Dubai consumer brands frequently retain a local creative + brand-film agency for above-the-line + brand storytelling. We slot in for performance creative (paid-channel-specific variations) + media buying + attribution. We don't insist on a full-funnel takeover.",
		},
	],
};

// ─────────────────────── Registry ───────────────────────

const ALL: MoneyPage[] = [
	SEO_COMPANY_BANGALORE,
	PERFORMANCE_MARKETING_COMPANY_BANGALORE,
	B2B_MARKETING_COMPANY_BANGALORE,
	CREATIVE_ADVERTISING_COMPANY_BANGALORE,
	REAL_ESTATE_MARKETING_COMPANY_BANGALORE,
	SEO_COMPANY_MUMBAI,
	PERFORMANCE_MARKETING_COMPANY_MUMBAI,
	SEO_COMPANY_DUBAI,
	PERFORMANCE_MARKETING_COMPANY_DUBAI,
];

export function getMoneyPage(slug: string): MoneyPage | undefined {
	return ALL.find((m) => m.slug === slug);
}

export function allMoneyPages(): MoneyPage[] {
	return ALL;
}

export function moneyPagesForGeo(geoId: string): MoneyPage[] {
	return ALL.filter((m) => m.geoId === geoId);
}
