#!/usr/bin/env node
/**
 * Generates data/sub-services.json — Tier 2 sub-service entries.
 * Run: node scripts/generate-sub-services.js
 */

const fs = require("node:fs");
const path = require("node:path");

const OUT = path.join(__dirname, "..", "data", "sub-services.json");
const entries = [];
const seen = new Set();
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function add(parent, label, deliverables, processSteps, faqs, costBand, primaryKw) {
	const id = slugify(label);
	const key = `${parent}/${id}`;
	if (seen.has(key)) return;
	seen.add(key);
	entries.push({
		id,
		parent_service: parent,
		label,
		h1: `${label} for Indian SMBs (2026)`,
		direct_answer: `${label} is the engineering work that ${deliverables[0].toLowerCase()}. Frameleads' ${label.toLowerCase()} retainers ${costBand} are scoped per stage + ICP, with weekly diagnostics and quarterly strategic reviews.`,
		deliverables,
		process_steps: processSteps,
		faqs,
		cost_band: costBand,
		primary_keyword: primaryKw,
		secondary_keywords: [`${label.toLowerCase()} services`, `${label.toLowerCase()} agency India`, `${label.toLowerCase()} retainer`],
		tags: [parent, slugify(label), "india", "sub-service"],
	});
}

// Standard process steps + FAQs reused across sub-services
const stdProcess = (label) => [
	{ name: "Audit current state", text: `Audit your existing ${label.toLowerCase()} setup against 6 dimensions: tracking, channel mix, creative, audience, conversion, retention. Surface the 3 highest-leverage gaps.` },
	{ name: "Set up foundational tracking", text: `GA4 + Meta CAPI + server-side tagging for ${label.toLowerCase()}. Without measurement, optimization is blind.` },
	{ name: "Build the engine", text: `Channel mix + creative cadence + retention infrastructure. ${label} engagements need 30-90 days of compounding before plateau.` },
	{ name: "Optimize weekly", text: `Weekly diagnostic ritual: ROAS, CPM trend, creative concentration, funnel conversion. Kill underperformers fast.` },
	{ name: "Compound via retention", text: `${label} acquisition is half the equation; retention via email/WhatsApp doubles LTV/CAC over 12 months.` },
];

const stdFaqs = (label, costBand) => [
	{ question: `What's a realistic monthly retainer for ${label.toLowerCase()}?`, answer: `${label} retainers in India ${costBand}. Below the floor, signal is too thin. Above the ceiling, scope expands beyond standard sub-service work.` },
	{ question: `How long until ${label.toLowerCase()} shows results?`, answer: `Performance signals: 14-60 days. Compounding outcomes: 4-9 months. Plan minimum 6-month commitment.` },
	{ question: `Do I need ${label.toLowerCase()} if I already have full-service marketing?`, answer: `Sub-service depth differs from full-service breadth. ${label} as a specialist engagement makes sense when your full-service team lacks that specific capability.` },
	{ question: `Can ${label.toLowerCase()} run alongside in-house team?`, answer: `Yes — most engagements augment internal teams. Frameleads handles the specialist execution while in-house owns brand + strategy.` },
	{ question: `What's NOT included in a standard ${label.toLowerCase()} retainer?`, answer: `Media spend, third-party tooling licenses, custom video production. All scoped explicitly during onboarding.` },
];

// SEO Services sub-services
add("seo-services", "Technical SEO",
	["Diagnose Core Web Vitals + crawlability", "Schema markup audit + implementation", "Site architecture redesign", "Sitemap + robots.txt optimization", "Indexability + canonical tag review"],
	stdProcess("Technical SEO"),
	stdFaqs("Technical SEO", "₹50,000–₹3,00,000/month"),
	"₹50,000–₹3,00,000/month",
	"technical seo services india");

add("seo-services", "On-Page SEO",
	["Title + meta optimization at scale", "Internal linking architecture", "Content gap + briefs", "Schema enrichment per page type", "AIO direct-answer block engineering"],
	stdProcess("On-Page SEO"),
	stdFaqs("On-Page SEO", "₹40,000–₹2,50,000/month"),
	"₹40,000–₹2,50,000/month",
	"on-page seo services india");

add("seo-services", "Off-Page SEO",
	["Backlink audit + reclamation", "Guest post + HARO outreach", "Digital PR for link earning", "Brand mention monitoring", "Link velocity + anchor diversity tracking"],
	stdProcess("Off-Page SEO"),
	stdFaqs("Off-Page SEO", "₹60,000–₹4,00,000/month"),
	"₹60,000–₹4,00,000/month",
	"off-page seo backlink services india");

add("seo-services", "Local SEO",
	["GBP optimization + verification", "Review velocity engine", "Local citations + NAP consistency", "Service-area page builds", "Local-pack ranking tracking"],
	stdProcess("Local SEO"),
	stdFaqs("Local SEO", "₹30,000–₹1,50,000/month"),
	"₹30,000–₹1,50,000/month",
	"local seo services india");

add("seo-services", "Programmatic SEO",
	["Demand-gated programmatic page architecture", "Data-driven content templates", "Schema + Speakable wiring", "Sitemap segmentation + crawl-budget optimization", "Cannibalization detection + fixes"],
	stdProcess("Programmatic SEO"),
	stdFaqs("Programmatic SEO", "₹1,50,000–₹8,00,000/month"),
	"₹1,50,000–₹8,00,000/month",
	"programmatic seo agency india");

// Google Ads sub-services
add("google-ads", "Search Campaigns",
	["KW research + intent mapping", "Ad copy + extensions", "Quality Score optimization", "Bid strategy + budget pacing", "Negative keyword refinement"],
	stdProcess("Search Campaigns"),
	stdFaqs("Google Search Campaigns", "₹40,000–₹3,00,000/month"),
	"₹40,000–₹3,00,000/month",
	"google search ads agency india");

add("google-ads", "Performance Max",
	["Asset group structure", "Audience signal layering", "Shopping feed quality", "Customer-match + LAL integration", "Channel-level attribution"],
	stdProcess("Performance Max"),
	stdFaqs("Performance Max", "₹50,000–₹4,00,000/month"),
	"₹50,000–₹4,00,000/month",
	"google performance max management");

add("google-ads", "Shopping Ads",
	["Merchant Center setup + feed optimization", "GTIN + product attribute compliance", "Bid + budget strategy", "Shopping feed audit + diagnostics", "Promotions + sale events"],
	stdProcess("Shopping Ads"),
	stdFaqs("Google Shopping Ads", "₹40,000–₹3,00,000/month"),
	"₹40,000–₹3,00,000/month",
	"google shopping ads agency india");

add("google-ads", "YouTube Ads Management",
	["TrueView + In-stream + Bumper strategy", "Audience + intent targeting", "Creative direction + production briefs", "Frequency + CPV optimization", "Brand-lift + view-completion tracking"],
	stdProcess("YouTube Ads"),
	stdFaqs("YouTube Ads Management", "₹50,000–₹4,00,000/month"),
	"₹50,000–₹4,00,000/month",
	"youtube ads agency india");

add("google-ads", "Remarketing",
	["Audience segmentation by intent stage", "Dynamic remarketing setup", "Frequency capping + creative refresh", "List-based exclusions", "Cross-platform retargeting orchestration"],
	stdProcess("Google Remarketing"),
	stdFaqs("Google Remarketing", "₹30,000–₹1,50,000/month"),
	"₹30,000–₹1,50,000/month",
	"google remarketing services india");

// Meta Ads sub-services
add("meta-ads", "Advantage+ Shopping",
	["Single-campaign architecture", "30+ creative variants", "Audience signal optimization", "ROAS-bid strategy + learning", "Creative-fatigue detection + refresh"],
	stdProcess("ASC+"),
	stdFaqs("ASC+ Management", "₹50,000–₹4,00,000/month"),
	"₹50,000–₹4,00,000/month",
	"asc+ meta advantage shopping management india");

add("meta-ads", "Lead Generation",
	["Lead Gen Forms + Document Ads", "Hashed PII for matching", "CRM integration + lead routing", "Lead-quality scoring", "Cost-per-MQL optimization"],
	stdProcess("Meta Lead Gen"),
	stdFaqs("Meta Lead Generation", "₹40,000–₹2,50,000/month"),
	"₹40,000–₹2,50,000/month",
	"meta lead generation ads agency india");

add("meta-ads", "Conversions API",
	["sGTM + CAPI implementation", "Hashed PII for high EMQ", "Pixel deduplication", "Server-side event quality monitoring", "Privacy compliance (DPDP + iOS)"],
	stdProcess("Meta CAPI"),
	stdFaqs("Meta Conversions API", "₹50,000–₹3,00,000 setup + ₹15,000+/month"),
	"₹50,000–₹3,00,000 setup + ₹15,000+/month",
	"meta capi conversions api setup india");

add("meta-ads", "Dynamic Product Ads",
	["Catalog-feed setup + optimization", "Audience-stage matching", "Creative variants per product", "Out-of-stock + price-change handling", "Cross-sell + upsell flows"],
	stdProcess("DPA"),
	stdFaqs("Dynamic Product Ads", "₹40,000–₹3,00,000/month"),
	"₹40,000–₹3,00,000/month",
	"dynamic product ads meta agency india");

add("meta-ads", "Creative Testing Framework",
	["3-3-3 test architecture (3 hooks × 3 angles × 3 formats)", "ABO test campaigns with kill criteria", "Creative cadence + briefs", "Hook-rate + thumb-stop tracking", "Winning-creative graduation to scale"],
	stdProcess("Creative Testing"),
	stdFaqs("Creative Testing Framework", "₹50,000–₹3,00,000/month"),
	"₹50,000–₹3,00,000/month",
	"meta creative testing framework agency india");

// Performance Marketing sub-services
add("performance-marketing", "CAC Reduction",
	["Multi-channel CAC audit", "Creative-volume scaling", "Funnel-conversion lift", "Landing-page optimization", "Attribution accuracy improvements"],
	stdProcess("CAC Reduction"),
	stdFaqs("CAC Reduction", "₹1,00,000–₹6,00,000/month"),
	"₹1,00,000–₹6,00,000/month",
	"cac reduction agency india");

add("performance-marketing", "Full-Funnel Performance",
	["Top-funnel awareness + retargeting + lifecycle in single P&L", "Cross-channel orchestration", "Cohort-level attribution", "Owned-channel integration", "CFO-ready reporting"],
	stdProcess("Full-Funnel"),
	stdFaqs("Full-Funnel Performance", "₹2,00,000–₹15,00,000/month"),
	"₹2,00,000–₹15,00,000/month",
	"full funnel performance marketing agency india");

add("performance-marketing", "LTV Engineering",
	["Retention flow + replenishment cadence", "Subscription model design", "AOV uplift via bundles", "Purchase-frequency optimization", "Cohort-tracking + loyalty programs"],
	stdProcess("LTV Engineering"),
	stdFaqs("LTV Engineering", "₹1,00,000–₹5,00,000/month"),
	"₹1,00,000–₹5,00,000/month",
	"ltv engineering retention agency india");

add("performance-marketing", "Incrementality Testing",
	["Holdout test design + execution", "Geo + audience-split experiments", "MMM (Marketing Mix Modeling) for >₹3Cr/mo brands", "Attribution + incrementality reconciliation", "Lift estimation + budget reallocation"],
	stdProcess("Incrementality Testing"),
	stdFaqs("Incrementality Testing", "₹1,50,000–₹8,00,000/month"),
	"₹1,50,000–₹8,00,000/month",
	"incrementality testing mmm agency india");

add("performance-marketing", "Multi-channel Orchestration",
	["Cross-channel attribution + budget allocation", "Channel-mix optimization quarterly", "Creative-asset reuse + adaptation", "Unified dashboard + reporting cadence", "ABM-style coordination for B2B"],
	stdProcess("Multi-channel Orchestration"),
	stdFaqs("Multi-channel Orchestration", "₹2,00,000–₹10,00,000/month"),
	"₹2,00,000–₹10,00,000/month",
	"multi channel marketing orchestration india");

// Content Marketing sub-services
add("content-marketing", "SEO Content",
	["Pillar + cluster content strategy", "Keyword + topic gap analysis", "Editorial brief + production cadence", "AIO direct-answer engineering", "Performance tracking + refresh cycles"],
	stdProcess("SEO Content"),
	stdFaqs("SEO Content", "₹80,000–₹4,00,000/month"),
	"₹80,000–₹4,00,000/month",
	"seo content writing agency india");

add("content-marketing", "Long-form Blogs",
	["Deep-dive 2,000+ word articles", "Operator-grade research + sources", "Editorial review + named author byline", "Distribution + amplification", "Quarterly refresh + evergreen optimization"],
	stdProcess("Long-form Blogs"),
	stdFaqs("Long-form Blogs", "₹50,000–₹3,00,000/month"),
	"₹50,000–₹3,00,000/month",
	"long form blog writing agency india");

add("content-marketing", "Case Study Writing",
	["Client interviews + outcome quantification", "Anonymization where required", "Quote + data validation", "Visual + chart production", "Distribution across LinkedIn + sales enablement"],
	stdProcess("Case Studies"),
	stdFaqs("Case Study Writing", "₹50,000–₹2,00,000 per case study"),
	"₹50,000–₹2,00,000 per case study",
	"b2b case study writing agency india");

add("content-marketing", "Founder Thought Leadership",
	["Founder voice extraction + ghostwriting", "LinkedIn + Twitter post cadence", "Long-form essay support", "Podcast appearance booking + briefing", "Press + industry-event positioning"],
	stdProcess("Founder Thought Leadership"),
	stdFaqs("Founder Thought Leadership", "₹1,00,000–₹4,00,000/month"),
	"₹1,00,000–₹4,00,000/month",
	"founder thought leadership ghostwriting india");

add("content-marketing", "Content Strategy Audit",
	["End-to-end content stack audit", "Topic + ICP + funnel mapping", "Editorial team + workflow review", "Distribution + amplification audit", "Quarterly strategy roadmap"],
	stdProcess("Content Strategy"),
	stdFaqs("Content Strategy Audit", "₹50,000–₹3,00,000 (one-time)"),
	"₹50,000–₹3,00,000 (one-time)",
	"content marketing strategy audit india");

// Social Media Marketing sub-services
add("social-media-marketing", "Instagram Management",
	["Reels + Stories + Feed cadence", "UGC briefing + collection", "Founder personality integration", "Hashtag + trend monitoring", "Engagement + community management"],
	stdProcess("Instagram Management"),
	stdFaqs("Instagram Management", "₹40,000–₹2,00,000/month"),
	"₹40,000–₹2,00,000/month",
	"instagram management agency india");

add("social-media-marketing", "LinkedIn Organic",
	["Founder + employee post cadence", "Document + carousel production", "Comment + DM engagement strategy", "Profile + page optimization", "Advocacy + employee program"],
	stdProcess("LinkedIn Organic"),
	stdFaqs("LinkedIn Organic", "₹50,000–₹2,50,000/month"),
	"₹50,000–₹2,50,000/month",
	"linkedin organic agency india b2b");

add("social-media-marketing", "YouTube Channel Management",
	["Long-form + Shorts production cadence", "Thumbnail + title optimization", "Audience + retention analytics", "Community + comments engagement", "Cross-platform clip distribution"],
	stdProcess("YouTube Channel Management"),
	stdFaqs("YouTube Channel Management", "₹80,000–₹4,00,000/month"),
	"₹80,000–₹4,00,000/month",
	"youtube channel management india");

add("social-media-marketing", "Founder Personal Brand",
	["Voice + niche definition", "Multi-platform cadence (LinkedIn primary)", "Ghostwriting + editorial review", "Engagement strategy + community building", "Press + speaking opportunity sourcing"],
	stdProcess("Founder Personal Brand"),
	stdFaqs("Founder Personal Brand", "₹1,00,000–₹4,00,000/month"),
	"₹1,00,000–₹4,00,000/month",
	"founder personal brand agency india");

add("social-media-marketing", "Community Building",
	["Slack/Discord/WhatsApp community setup", "Content + ritual cadence", "Member onboarding + activation", "Moderator + community-manager hiring", "Member-led content sourcing"],
	stdProcess("Community Building"),
	stdFaqs("Community Building", "₹80,000–₹3,00,000/month"),
	"₹80,000–₹3,00,000/month",
	"community building agency india b2b saas");

// WhatsApp Marketing sub-services
add("whatsapp-marketing", "Business API Setup",
	["WABA + BSP selection + onboarding", "Display name + verification", "Phone number + opt-in capture", "Domain + Facebook BM verification", "Initial template approval workflow"],
	stdProcess("WhatsApp Business API"),
	stdFaqs("WhatsApp Business API Setup", "₹50,000–₹2,00,000 setup"),
	"₹50,000–₹2,00,000 setup",
	"whatsapp business api setup india");

add("whatsapp-marketing", "Template Design",
	["Marketing + utility + auth template architecture", "Meta-approval workflow management", "Compliance + DPDP-aligned copy", "A/B variant testing", "Template performance monitoring"],
	stdProcess("WhatsApp Template Design"),
	stdFaqs("WhatsApp Template Design", "₹30,000–₹1,50,000/month"),
	"₹30,000–₹1,50,000/month",
	"whatsapp template design agency india");

add("whatsapp-marketing", "Abandoned Cart Flow",
	["3-message cadence at 1h / 24h / 48h", "Cart-restoration deep-link integration", "Recovery-rate tracking + optimization", "Discount-strategy testing", "Channel-blend with email backup"],
	stdProcess("WhatsApp Cart Recovery"),
	stdFaqs("WhatsApp Abandoned Cart", "₹40,000–₹2,00,000/month"),
	"₹40,000–₹2,00,000/month",
	"whatsapp cart recovery agency india");

add("whatsapp-marketing", "Welcome Flow",
	["3-6 message sequence over 7-14 days", "Brand voice + offer integration", "Personalization via tags + segments", "Conversion-tracking + flow optimization", "Cross-channel handoff to email"],
	stdProcess("WhatsApp Welcome Flow"),
	stdFaqs("WhatsApp Welcome Flow", "₹40,000–₹2,00,000/month"),
	"₹40,000–₹2,00,000/month",
	"whatsapp welcome flow agency india");

add("whatsapp-marketing", "Win-back Flow",
	["Inactive-customer segmentation (60+ day)", "Progressive-incentive sequence", "Multi-attempt cap + cold-list move", "Reactivation analytics + reporting", "Cross-channel coordination with email"],
	stdProcess("WhatsApp Win-back"),
	stdFaqs("WhatsApp Win-back Flow", "₹30,000–₹1,50,000/month"),
	"₹30,000–₹1,50,000/month",
	"whatsapp win back flow agency india");

// CRO sub-services
add("conversion-rate-optimization", "Landing Page CRO",
	["Above-fold trust + offer architecture", "Mobile-first responsive design", "A/B test framework setup", "Heatmap + scroll analysis", "Conversion-rate uplift attribution"],
	stdProcess("Landing Page CRO"),
	stdFaqs("Landing Page CRO", "₹80,000–₹4,00,000/month"),
	"₹80,000–₹4,00,000/month",
	"landing page cro agency india");

add("conversion-rate-optimization", "Checkout Optimization",
	["Multi-step → single-page checkout testing", "Payment-method visibility + UPI", "Trust-strip + social-proof injection", "Cart-abandonment recovery integration", "Mobile checkout speed optimization"],
	stdProcess("Checkout Optimization"),
	stdFaqs("Checkout Optimization", "₹1,00,000–₹4,00,000/month"),
	"₹1,00,000–₹4,00,000/month",
	"checkout optimization shopify india");

add("conversion-rate-optimization", "Cart Recovery",
	["Email + WhatsApp + retargeting recovery flows", "Cart-restoration deep-links", "Discount + urgency strategy testing", "Recovery-rate attribution by channel", "Lifetime cart-recovery measurement"],
	stdProcess("Cart Recovery"),
	stdFaqs("Cart Recovery", "₹50,000–₹2,00,000/month"),
	"₹50,000–₹2,00,000/month",
	"cart recovery agency india d2c");

add("conversion-rate-optimization", "AB Testing",
	["Hypothesis design + significance testing", "Test-velocity framework (5+ tests/quarter)", "Multi-variant + sequential testing", "Statistical-significance gates", "Win-rate + lift attribution"],
	stdProcess("A/B Testing"),
	stdFaqs("A/B Testing", "₹80,000–₹3,00,000/month"),
	"₹80,000–₹3,00,000/month",
	"ab testing agency india");

add("conversion-rate-optimization", "CRO Audit",
	["Funnel + cohort analysis", "Heatmap + session-replay review", "Friction + drop-off identification", "Quick-win + roadmap prioritization", "Quarterly strategic review"],
	stdProcess("CRO Audit"),
	stdFaqs("CRO Audit", "₹50,000–₹3,00,000 (one-time)"),
	"₹50,000–₹3,00,000 (one-time)",
	"cro audit agency india");

// Email & Automation sub-services
add("email-marketing-and-automation-services", "Klaviyo Setup",
	["Account + integration + flow architecture", "Welcome + abandon + post-purchase + win-back flow design", "Segmentation + tagging strategy", "List health + deliverability monitoring", "Quarterly performance review"],
	stdProcess("Klaviyo Setup"),
	stdFaqs("Klaviyo Setup", "₹1,00,000–₹4,00,000 setup + ₹40,000+/month"),
	"₹1,00,000–₹4,00,000 setup + ₹40,000+/month",
	"klaviyo setup agency india");

add("email-marketing-and-automation-services", "Welcome Series",
	["3-6 message sequence over 7-14 days", "Brand voice + offer + product showcase", "Personalization + dynamic content", "Conversion tracking + revenue attribution", "Cross-channel coordination with WhatsApp"],
	stdProcess("Email Welcome Series"),
	stdFaqs("Email Welcome Series", "₹40,000–₹1,50,000/month"),
	"₹40,000–₹1,50,000/month",
	"email welcome series design india");

add("email-marketing-and-automation-services", "Cart Abandon Flow",
	["3-message recovery sequence", "Discount + urgency strategy", "Cart-restoration deep-links", "Email + WhatsApp blended recovery", "Lifetime recovery-rate measurement"],
	stdProcess("Email Cart Abandon"),
	stdFaqs("Email Cart Abandon Flow", "₹40,000–₹1,50,000/month"),
	"₹40,000–₹1,50,000/month",
	"email cart abandon flow india");

add("email-marketing-and-automation-services", "Migration Services",
	["Mailchimp/Brevo → Klaviyo migration", "List + segment + flow rebuild", "Integration testing + verification", "Deliverability monitoring during transition", "Performance baseline + post-migration review"],
	stdProcess("Email Migration"),
	stdFaqs("Email Tool Migration", "₹50,000–₹3,00,000 (project)"),
	"₹50,000–₹3,00,000 (project)",
	"klaviyo migration mailchimp brevo india");

add("email-marketing-and-automation-services", "Newsletter Strategy",
	["Editorial calendar + cadence design", "Subject-line + preview-text optimization", "Segmentation + personalization", "List-growth + landing-page integration", "Performance dashboards + monthly review"],
	stdProcess("Newsletter Strategy"),
	stdFaqs("Newsletter Strategy", "₹50,000–₹2,00,000/month"),
	"₹50,000–₹2,00,000/month",
	"newsletter strategy agency india");

// Branding sub-services (3)
add("branding", "Brand Identity Design",
	["Logo + visual system", "Typography + color palette", "Photography + illustration guidelines", "Print + digital application", "Brand bible documentation"],
	stdProcess("Brand Identity Design"),
	stdFaqs("Brand Identity Design", "₹2,00,000–₹15,00,000 (project)"),
	"₹2,00,000–₹15,00,000 (project)",
	"brand identity design agency india");

add("branding", "Positioning Strategy",
	["Category + competitor analysis", "ICP + JTBD definition", "Positioning statement + messaging framework", "Internal alignment + rollout", "Quarterly review + iteration"],
	stdProcess("Positioning Strategy"),
	stdFaqs("Positioning Strategy", "₹2,00,000–₹10,00,000 (project)"),
	"₹2,00,000–₹10,00,000 (project)",
	"positioning strategy agency india b2b");

add("branding", "Rebranding",
	["Audit + recommendation", "New visual + verbal identity", "Migration plan (SEO-preserving)", "Internal + external rollout", "Post-launch monitoring"],
	stdProcess("Rebranding"),
	stdFaqs("Rebranding", "₹5,00,000–₹50,00,000 (project)"),
	"₹5,00,000–₹50,00,000 (project)",
	"rebranding agency india");

// Website Development sub-services (2)
add("website-development", "Shopify Development",
	["Theme customization or headless build", "App ecosystem integration", "Performance + Core Web Vitals optimization", "Razorpay + Shiprocket integration", "Migration from other platforms"],
	stdProcess("Shopify Development"),
	stdFaqs("Shopify Development", "₹2,00,000–₹15,00,000 (project)"),
	"₹2,00,000–₹15,00,000 (project)",
	"shopify development agency india");

add("website-development", "NextJS Development",
	["Next.js 15 App Router architecture", "Headless commerce (Shopify Hydrogen + Sanity)", "ISR + Cloudflare Workers deployment", "AIO/GEO/SEO baked into stack", "Performance + accessibility audit"],
	stdProcess("Next.js Development"),
	stdFaqs("Next.js Development", "₹3,00,000–₹40,00,000 (project)"),
	"₹3,00,000–₹40,00,000 (project)",
	"nextjs development agency india");

// Analytics sub-services (3)
add("analytics-and-automations", "GA4 Setup",
	["GA4 + GTM container + ecommerce events", "Enhanced conversions + EMQ optimization", "BigQuery export + retention extension", "Looker Studio dashboards", "Quarterly tracking audit"],
	stdProcess("GA4 Setup"),
	stdFaqs("GA4 Setup", "₹50,000–₹3,00,000 setup + ₹15,000+/month"),
	"₹50,000–₹3,00,000 setup + ₹15,000+/month",
	"ga4 setup agency india");

add("analytics-and-automations", "Server-Side Tagging",
	["GTM Server in Cloud Run deployment", "Meta CAPI + Google Ads + GA4 routing", "Hashed PII + privacy compliance", "EMQ score monitoring + optimization", "Cross-platform deduplication"],
	stdProcess("Server-Side Tagging"),
	stdFaqs("Server-Side Tagging (sGTM)", "₹1,00,000–₹4,00,000 setup + ₹20,000+/month"),
	"₹1,00,000–₹4,00,000 setup + ₹20,000+/month",
	"server side tagging sgtm agency india");

add("analytics-and-automations", "Triple Whale Setup",
	["Account + integration + dashboard configuration", "Pixel + sGTM coordination", "Custom event + report setup", "Onboarding + team training", "Quarterly optimization"],
	stdProcess("Triple Whale Setup"),
	stdFaqs("Triple Whale Setup", "₹50,000–₹2,00,000 setup + ₹15,000+/month"),
	"₹50,000–₹2,00,000 setup + ₹15,000+/month",
	"triple whale setup agency india d2c");

fs.writeFileSync(OUT, JSON.stringify(entries, null, 2));
console.log(`Generated ${entries.length} sub-services → ${OUT}`);
