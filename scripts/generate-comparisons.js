#!/usr/bin/env node
/**
 * Generates data/comparisons.json — Tier 9 vs guides.
 * Run: node scripts/generate-comparisons.js
 *
 * Preserves existing entries; adds new ones defined here. Idempotent.
 * Schema mirrors what Tier9Page already consumes.
 */

const fs = require("node:fs");
const path = require("node:path");

const OUT = path.join(__dirname, "..", "data", "comparisons.json");

const existing = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : [];
const byId = new Map(existing.map((e) => [e.id ?? e.slug, e]));

function add(e) {
	const id = e.id ?? e.slug;
	byId.set(id, {
		id,
		slug: e.slug,
		a: e.a,
		b: e.b,
		audienceLabel: e.audienceLabel,
		intent: e.intent,
		tldr: e.tldr,
		scorecard: e.scorecard,
		deepDiveA: e.deepDiveA,
		deepDiveB: e.deepDiveB,
		decisionFlow: e.decisionFlow,
		hybrid: e.hybrid,
		faqs: e.faqs,
		ctaText: e.ctaText,
		primaryHref: e.primaryHref,
	});
}

// ─────────────────────────────────────────────────────────────────
// Section 1 — Channel × Channel
// ─────────────────────────────────────────────────────────────────

add({
	slug: "seo-vs-ppc-for-d2c",
	a: { label: "SEO", shortName: "SEO" },
	b: { label: "PPC (Meta + Google)", shortName: "PPC" },
	audienceLabel: "Indian D2C brands",
	intent: "Which channel does an Indian D2C brand invest in first — and when does the other join?",
	tldr: [
		"PPC drives 70%+ of Indian D2C revenue in months 1–9 — speed wins early.",
		"SEO compounds month 12 onward and lifts blended CAC by 30–50%.",
		"Most healthy Indian D2C brands run 70/30 PPC/SEO in year 1, shift toward 50/50 in year 2.",
	],
	scorecard: [
		{ criterion: "Time to first revenue", a: "4–9 months", b: "7–30 days" },
		{ criterion: "Compounding effect", a: "Strong (asset)", b: "Linear with spend" },
		{ criterion: "Cost band (Indian D2C)", a: "₹1.5L–₹8L/mo", b: "₹3L–₹50L/mo" },
		{ criterion: "Predictability", a: "Lower in year 1", b: "Higher; performance-tied" },
		{ criterion: "Brand trust signal", a: "High (organic)", b: "Lower (ad)" },
		{ criterion: "iOS / cookie risk", a: "None", b: "High; needs CAPI + sGTM" },
	],
	deepDiveA: "SEO for Indian D2C in 2026 means programmatic city-product pages, AI-Overview-engineered category pages, glossary, comparison guides, and review pages. Indian D2C brands at DR 30+ start ranking long-tail queries within 4–6 months; head terms compound by month 12. The biggest win is blended-CAC reduction — every organic customer doesn't increase paid spend. A Pune skincare brand reached 35% organic revenue share in 14 months by building 1,200 city-product pages + 200 how-to playbooks.",
	deepDiveB: "PPC for Indian D2C is Meta + Google Performance Max + WhatsApp Ads + retargeting. Meta typically does 60–75% of paid spend, Google 20–30%, WhatsApp 5–10%. The strength is speed — campaigns can produce revenue within hours of launch. Weakness: CPM rises every quarter, iOS attribution is fuzzy, COD return rates eat margin. A Bangalore beauty brand reached ₹50L/month run-rate in 90 days from PPC alone; layering SEO at month 6 brought blended CAC down 40%.",
	decisionFlow: [
		"Pre-PMF or under ₹15L/mo revenue? → 90 PPC / 10 SEO foundation.",
		"₹15L–₹50L/mo revenue, 6+ months runway? → 80 PPC / 20 SEO build.",
		"₹50L+/mo revenue, year 2+? → Shift to 50/50 PPC/SEO.",
		"High AOV (₹2,000+) considered-purchase D2C? → SEO weight earlier.",
		"Impulse-buy D2C (food, snacks)? → PPC-heavy throughout.",
	],
	hybrid: "Most Indian D2C brands need both. PPC for the cash-flow engine; SEO for the moat. The right sequence: launch with PPC + WhatsApp lifecycle, build SEO foundation in parallel (Tier 1 + Tier 6), expand SEO to programmatic (Tier 3 + Tier 4) by month 6–9. By year 2, SEO contributes 30–40% of revenue and protects against Meta CPM inflation. Blended-CAC math drives the rebalance.",
	faqs: [
		{ question: "Can a small Indian D2C brand afford SEO + PPC together?", answer: "Below ₹2L/month total budget, focus 100% PPC. Above ₹3L/month, allocate 20% to SEO foundation. Above ₹8L/month, the SEO investment fully justifies itself in 9–12 months." },
		{ question: "Which is cheaper long-term for D2C?", answer: "SEO. After year 2, the same content keeps producing customers without marginal spend. PPC requires constant fuel. Indian D2C brands at year 3+ commonly see SEO blended CAC at 30–40% of paid CAC." },
		{ question: "Will AI Overviews kill SEO for D2C?", answer: "No. AIO redistributes clicks. Brands that show up in AIO citations gain entity recognition that lifts both organic + brand-search performance. The right SEO strategy in 2026 includes AIO + GEO optimization, not just rank-#1 chase." },
		{ question: "Is Meta or Google better for D2C PPC?", answer: "Meta first for awareness + cold-traffic conversion (60–75% of D2C paid). Google PMax for high-intent (20–30%). Indian D2C running Meta-only leaves bottom-funnel demand on the table; Google-only misses top-of-funnel." },
		{ question: "How long until SEO matches PPC revenue contribution?", answer: "Month 12–24 for most Indian D2C brands. Earlier with strong content velocity and topical depth; later with thin programmatic. The compounding curve is exponential — months 1–6 produce 5%, months 12–18 produce 25%, months 24+ produce 40%+." },
	],
	ctaText: "Choosing between SEO and PPC for your D2C? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "meta-ads-vs-google-ads-for-saas",
	a: { label: "Meta Ads", shortName: "Meta" },
	b: { label: "Google Ads", shortName: "Google" },
	audienceLabel: "Indian B2B SaaS",
	intent: "Which paid platform delivers better B2B SaaS pipeline — Meta or Google?",
	tldr: [
		"Google wins for B2B SaaS by 2–3× CAC efficiency on bottom-funnel intent.",
		"Meta works for top-funnel awareness + retargeting; rarely for direct demos.",
		"Most healthy SaaS spend 70% Google + 20% LinkedIn + 10% Meta retargeting.",
	],
	scorecard: [
		{ criterion: "Buyer intent capture", a: "Low (broadcast)", b: "High (search query)" },
		{ criterion: "Demo CAC (Indian SaaS)", a: "₹3,000–₹15,000", b: "₹1,500–₹8,000" },
		{ criterion: "Audience precision", a: "Demographic", b: "Intent-led" },
		{ criterion: "Decision-stage capture", a: "Weak", b: "Strong" },
		{ criterion: "Awareness building", a: "Strong", b: "Limited" },
		{ criterion: "Retargeting use", a: "Strong", b: "Moderate" },
	],
	deepDiveA: "Meta for B2B SaaS in India works for: (1) top-funnel awareness with founder-led video content, (2) retargeting site visitors who didn't convert, (3) lookalike audiences seeded from existing customers. The trap is treating Meta as a direct-response engine for SaaS demos — it rarely works because B2B buyers don't make purchase decisions in-feed. Indian B2B SaaS Meta CAC for demo: typically ₹3,000–₹15,000, often 2–3× Google's CAC.",
	deepDiveB: "Google Ads for B2B SaaS captures the moment a buyer searches for the solution: 'best CRM for Indian SMBs', 'WhatsApp BSP comparison', 'Razorpay alternatives'. The intent signal is unbeatable. Indian SaaS Google demo CAC typically ₹1,500–₹8,000, with Search + branded campaigns delivering 60–75% of paid pipeline. The weakness: limited reach beyond search-intent moments. Layer Performance Max for shopping/list-building when relevant.",
	decisionFlow: [
		"Need bottom-funnel demos in 30 days? → Google Search 100%.",
		"Awareness + cold-list building? → Meta video + retargeting.",
		"PLG SaaS with self-serve trial? → Google Search + branded Meta.",
		"Enterprise SaaS with ABM? → LinkedIn primary, Google branded secondary, Meta retargeting only.",
		"SMB SaaS, broad ICP? → Google primary, Meta retargeting + lookalike.",
	],
	hybrid: "The right SaaS paid stack is Google Search (50–70% budget) + LinkedIn Ads (15–30%) + Meta Retargeting (5–15%). Google captures bottom-funnel; LinkedIn covers ABM and account-based outreach; Meta retargets website visitors and runs awareness. Treating Meta and Google as either-or wastes both — they serve different funnel stages.",
	faqs: [
		{ question: "Why is Meta worse than Google for SaaS?", answer: "B2B buying decisions don't happen in social feed. Buyers researching SaaS use search ('best X for Y industry'). Meta works for top-of-funnel awareness but rarely converts directly to demos. The rare exception: founder-personality-driven SaaS where Meta builds founder brand." },
		{ question: "Should I run LinkedIn Ads instead of Meta for SaaS?", answer: "Yes, often. LinkedIn audience targeting (job-title, company-size) is more relevant for B2B than Meta interest targeting. Indian LinkedIn ad CPM is high (₹400–₹1,500) but lead quality justifies it for ACV ₹50k+. Meta retargeting still has a role." },
		{ question: "Is Performance Max worth it for B2B SaaS?", answer: "For SaaS without a shopping feed, PMax struggles vs Search-only. For SaaS with downloadable resources or trial sign-ups treated as 'products', PMax can work but typically delivers lower-quality MQLs vs Search." },
		{ question: "What's the typical SaaS Google budget split?", answer: "Branded search (own brand): 10–20% of Google budget at 8x+ ROAS (defensive). Generic head terms ('CRM India'): 30–50%. Long-tail commercial intent ('best CRM for D2C in India'): 30–50%. The long-tail produces best demo CAC for most Indian SaaS." },
		{ question: "How does AI Overview change Google for SaaS?", answer: "Negative for top-3 organic; neutral for paid. AIO compresses click real estate; Google ads still rank above AIO. Brands cited inside AIO retain visibility. Strategy: optimize for both AIO citation + paid Search dominance on key commercial KWs." },
	],
	ctaText: "Designing your SaaS paid stack? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "email-vs-whatsapp-for-d2c",
	a: { label: "Email Marketing", shortName: "Email" },
	b: { label: "WhatsApp Marketing", shortName: "WhatsApp" },
	audienceLabel: "Indian D2C brands",
	intent: "Email or WhatsApp — which owned channel deserves the bigger investment in Indian D2C?",
	tldr: [
		"WhatsApp wins on engagement (open rate 70%+ vs email 22–34%) but caps at higher cost per message.",
		"Email wins on cost-per-touch and long-form storytelling; WhatsApp wins on conversion rate.",
		"Indian D2C brands at scale run both — email for newsletters + flows, WhatsApp for cart recovery + lifecycle.",
	],
	scorecard: [
		{ criterion: "Open rate (Indian D2C)", a: "22–34%", b: "65–85%" },
		{ criterion: "Cost per message", a: "₹0.05–₹0.15", b: "₹0.85 (marketing template)" },
		{ criterion: "Conversion rate (lifecycle)", a: "1–4%", b: "5–18%" },
		{ criterion: "Long-form content", a: "Strong", b: "Limited (90 char body)" },
		{ criterion: "Customer preference (India)", a: "Tier-1 cities", b: "Tier-1+2+3, all ages" },
		{ criterion: "Compliance (DPDP)", a: "Required (opt-in)", b: "Required (opt-in + WABA verified)" },
	],
	deepDiveA: "Email marketing in Indian D2C remains foundational — cheapest cost per touch (₹0.05–₹0.15 vs WhatsApp ₹0.85), best for long-form storytelling, founder voice, educational content. Indian D2C email open rates: 22–34% for D2C, 28–40% for B2B SaaS. The tooling is mature: Klaviyo dominates D2C, Mailchimp covers SMB, Brevo and Iterable cover scale. Email's strength is the breadth — newsletters reach all subscribers; templated flows handle abandoned cart, win-back, post-purchase systematically.",
	deepDiveB: "WhatsApp marketing for Indian D2C delivers 3–5× the conversion rate of email at 5–10× the per-message cost. The math works because WhatsApp users actually read messages — 65–85% open rates, instant attention. India is WhatsApp-first; consumers tier-1 through tier-3 prefer it for both transactional and marketing. The constraint: marketing template approval friction + DPDP-compliant opt-in. Best-in-class Indian D2C brands route 30–50% of lifecycle revenue through WhatsApp.",
	decisionFlow: [
		"Sub-₹2L/mo D2C revenue? → Email-only. WhatsApp comes later.",
		"₹2L–₹15L/mo? → Email primary, WhatsApp for cart-abandonment + post-purchase.",
		"₹15L+/mo? → Both at scale; WhatsApp for high-intent moments, email for breadth.",
		"Tier-2/3 city audience? → WhatsApp-heavier; email opens are lower.",
		"Founder-led content brand? → Email for storytelling; WhatsApp for transactional + welcome.",
	],
	hybrid: "Best practice: email for awareness + nurture + storytelling; WhatsApp for transactional + lifecycle moments. Newsletter via email (weekly). Welcome flow split: first 2 messages on email, day-3 + day-7 on WhatsApp. Cart abandonment: WhatsApp first (high recovery), email backup. Post-purchase: order confirmation on WhatsApp, review request on email, replenishment reminder on either. Stack the channels by moment, not as alternatives.",
	faqs: [
		{ question: "Is WhatsApp marketing more expensive than email?", answer: "Per message yes — ₹0.85 vs ₹0.05 marketing template. But per converted customer, WhatsApp is often 30–50% cheaper because conversion rates are 3–5× higher. Calculate cost-per-conversion, not cost-per-send." },
		{ question: "Do I need a separate tool for WhatsApp marketing?", answer: "Yes — WhatsApp Business API requires a BSP (Wati, Interakt, Gallabox in India). Email tools (Klaviyo, Mailchimp) don't natively send via WhatsApp Business API. Some integrations exist (Klaviyo + Wati), but full functionality requires a BSP." },
		{ question: "Will WhatsApp marketing replace email entirely?", answer: "No. Email is structurally cheaper for breadth-channel (newsletters, weekly nurture). WhatsApp is structurally better for moments (cart, post-purchase, win-back). Both have permanent roles in Indian D2C lifecycle." },
		{ question: "What's DPDP compliance for email vs WhatsApp?", answer: "Both require explicit opt-in under DPDP Act 2023. WhatsApp also requires WABA verification + Meta template approval. Email needs unsubscribe link + sender address transparency. Frameleads recommends a Consent Management Platform when scale exceeds 10k contacts." },
		{ question: "Can I run cart abandonment on WhatsApp without buying a BSP?", answer: "Below ~500 messages/month, you can use WhatsApp Business App (free) but it's manual + non-compliant for marketing. Above that, BSP is required for templates + automation. Wati/Interakt start at ~₹2,500/month." },
	],
	ctaText: "Designing your owned-channel stack? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "linkedin-ads-vs-google-ads-for-b2b-saas",
	a: { label: "LinkedIn Ads", shortName: "LinkedIn" },
	b: { label: "Google Ads", shortName: "Google" },
	audienceLabel: "Indian B2B SaaS targeting Series A+ ICPs",
	intent: "LinkedIn or Google for B2B SaaS pipeline — when does each win?",
	tldr: [
		"LinkedIn wins for ABM + ICP-precise targeting at higher CPM.",
		"Google wins for buyer-intent capture (search) at lower CPL but less audience precision.",
		"Most enterprise SaaS run both — Google for inbound intent, LinkedIn for account-based outbound.",
	],
	scorecard: [
		{ criterion: "Audience precision", a: "Job title + company size", b: "Search query intent" },
		{ criterion: "CPL (Indian SaaS)", a: "₹800–₹5,000", b: "₹400–₹3,000" },
		{ criterion: "ABM capability", a: "Strong", b: "Limited" },
		{ criterion: "Buyer-intent moment", a: "Disrupt-led", b: "Pull-led" },
		{ criterion: "CPM (India)", a: "₹400–₹1,500", b: "₹50–₹500" },
		{ criterion: "Lead quality (Enterprise)", a: "High", b: "Variable" },
	],
	deepDiveA: "LinkedIn Ads for Indian B2B SaaS work when the ICP is precisely defined (job title + company size + industry). The CPM is high (₹400–₹1,500 in India) but lead quality justifies it for ACV ₹50k+. Best formats: Document Ads (PDF preview), Conversation Ads (sequenced DMs), Lead Gen Forms. LinkedIn Sponsored Content rarely beats Google Search on CPL but wins on lead quality. Indian B2B SaaS Series B+ commonly runs LinkedIn ABM at ₹15L–₹50L/month.",
	deepDiveB: "Google Search for B2B SaaS captures the precise moment a buyer is researching. Indian SaaS demo CAC via Search: typically ₹1,500–₹8,000. The strength: high-intent capture, low cost relative to LinkedIn. Weakness: limited audience reach (only intent moments), long-tail keyword competition increasing. Pair with LinkedIn for full coverage — Google catches inbound, LinkedIn drives outbound + ABM.",
	decisionFlow: [
		"ACV under ₹50k? → Google Search primary, LinkedIn secondary.",
		"ACV ₹50k–₹5L? → 60 Google / 40 LinkedIn.",
		"ACV ₹5L+? → 30 Google / 50 LinkedIn / 20 Meta retargeting.",
		"Tight ICP (named accounts)? → LinkedIn ABM heavy.",
		"Broad ICP (SMB SaaS)? → Google heavy.",
	],
	hybrid: "Most Indian B2B SaaS Series A+ run both. Typical split: 50–70% Google (Search + branded + remarketing), 20–40% LinkedIn (Sponsored Content + ABM), 5–15% Meta (retargeting). Funnel logic: LinkedIn discovers → Google captures → Meta retargets. ABM-led SaaS lean LinkedIn-heavy; SMB SaaS lean Google-heavy. Track CAC per platform separately.",
	faqs: [
		{ question: "Is LinkedIn worth it for Indian B2B SaaS?", answer: "Yes if ACV ₹50k+. Below that, LinkedIn CAC structurally exceeds LTV. Above ₹50k ACV, LinkedIn ABM commonly delivers better lead quality than Google despite higher CPL." },
		{ question: "What's the minimum LinkedIn budget that makes sense?", answer: "₹1.5L/month for stable optimization. Below that, audience size is too small for algorithm to learn, CPL fluctuates wildly. Recommend starting LinkedIn at ₹2L+/month or not at all." },
		{ question: "Document Ads vs Conversation Ads on LinkedIn?", answer: "Document Ads (PDF preview) win for top-of-funnel content (whitepapers, reports). Conversation Ads (sequenced DMs) win for ABM with personalization. Lead Gen Forms work for quick MQL capture. Mix all three for full coverage." },
		{ question: "Does Google PMax work for B2B SaaS?", answer: "Less than for D2C. PMax struggles without a shopping feed. For SaaS, prefer Search + Display Remarketing + YouTube In-stream. Some SaaS treat trial signups as 'products' for PMax with mixed results." },
		{ question: "How fast does LinkedIn produce demos?", answer: "Slower than Google. LinkedIn typically 14–60 days for first qualified demo at scale; Google can produce demos in 7–14 days. LinkedIn payback is longer but ABM-quality is harder to replicate." },
	],
	ctaText: "Building B2B SaaS paid? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "performance-vs-organic-for-d2c",
	a: { label: "Performance Marketing", shortName: "Paid" },
	b: { label: "Organic (SEO + Content)", shortName: "Organic" },
	audienceLabel: "Indian D2C brands across stages",
	intent: "When should D2C brands tilt from paid to organic — and what's the right sequence?",
	tldr: [
		"Performance gets you to first ₹50L/month run-rate; organic gets you to ₹5Cr/month sustainably.",
		"Organic compounds; performance resets.",
		"Most healthy D2C brands run 75/25 paid/organic year 1, shift to 50/50 by year 2+, 35/65 by year 4.",
	],
	scorecard: [
		{ criterion: "Time to first ₹10L revenue", a: "30–90 days", b: "9–24 months" },
		{ criterion: "Predictability", a: "High", b: "Low year 1, high year 2+" },
		{ criterion: "Defensibility", a: "Resets per campaign", b: "Compounds" },
		{ criterion: "Cost trend over time", a: "Rising (CPM inflation)", b: "Falling (asset compounds)" },
		{ criterion: "Brand trust signal", a: "Lower", b: "Higher" },
		{ criterion: "iOS / cookie risk", a: "High", b: "None" },
	],
	deepDiveA: "Performance marketing — Meta + Google + WhatsApp Ads + retargeting + influencer paid — is the cash-flow engine of Indian D2C. Speed is unmatched: a brand can go from launch to ₹15L MRR in 60 days with the right product + creative + offer. The challenge is that CPMs rise every quarter and creative output requirements compound. ASC+ + PMax automate audience selection but demand 30+ active creatives. CAC payback under 6 months is the sustainability bar.",
	deepDiveB: "Organic marketing — SEO + content + community + earned media — is the moat. Year 1 returns are modest (5–15% of revenue). Year 2 hits 25–35%. Year 3+ commonly 40–60%. Indian D2C brands at year 3 with mature SEO operate blended CAC 30–50% lower than paid-only competitors. The investment compounds across pillar/cluster pages, glossary, comparison guides, and AIO/GEO citation share.",
	decisionFlow: [
		"Pre-launch or pre-PMF? → 95 paid / 5 organic foundation.",
		"₹2L–₹15L/mo run-rate? → 85 paid / 15 organic build.",
		"₹15L–₹50L/mo? → 75 paid / 25 organic scale.",
		"₹50L–₹3Cr/mo? → 50 paid / 50 organic.",
		"₹3Cr+/mo, year 4+? → 35 paid / 65 organic.",
	],
	hybrid: "Performance and organic aren't alternatives — they're sequential investments. Year 1: paid drives revenue, organic builds the asset. Year 2: paid maintains baseline, organic compounds. Year 3+: organic carries 50–60% of revenue at structurally lower CAC, paid handles new launches + spike moments. The mature D2C brand uses paid for optionality and organic for resilience.",
	faqs: [
		{ question: "Can I skip performance and go organic-only for D2C?", answer: "No. Indian D2C requires paid for first 6–18 months — organic compounding takes that long. Going organic-only delays revenue by 12+ months and risks running out of capital before traction." },
		{ question: "When should I cut paid spend if organic is working?", answer: "Cut only if blended CAC starts rising and incremental paid spend produces marginal CAC above LTV/3. Otherwise scale both — organic compounds without zero-summing paid." },
		{ question: "Does AI Overview hurt organic for D2C?", answer: "Less than for editorial sites. D2C product pages and category pages aren't typical AIO targets. Educational content (blog) loses some clicks; product/category pages largely unaffected. The strategic move: optimize blog for AIO citation, optimize product/category for transactional intent." },
		{ question: "What's the right organic content investment as % of revenue?", answer: "1–3% at scale. Below ₹50L/mo, focus paid; above that, allocate ₹3L–₹15L/mo on organic. Year 3+ commonly 1.5–2.5% of revenue funds organic infrastructure." },
		{ question: "Will WhatsApp + email replace organic for D2C?", answer: "No. WhatsApp/email retain existing customers; organic acquires new. Both are needed. Treating owned channels as 'organic' is a category error — they're retention, not acquisition." },
	],
	ctaText: "Sequencing paid vs organic for D2C? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "instagram-vs-youtube-for-d2c",
	a: { label: "Instagram", shortName: "Instagram" },
	b: { label: "YouTube", shortName: "YouTube" },
	audienceLabel: "Indian D2C brands building organic presence",
	intent: "Instagram or YouTube for D2C organic discovery in India?",
	tldr: [
		"Instagram wins for fashion + beauty + lifestyle in tier-1; faster discovery cycles.",
		"YouTube wins for high-AOV considered purchases + tutorial-driven categories.",
		"Most D2C brands need both; Instagram for awareness, YouTube for considered.",
	],
	scorecard: [
		{ criterion: "Discovery speed", a: "Fast (Reels)", b: "Slow (Search-led)" },
		{ criterion: "Audience age skew (India)", a: "18–34 dominant", b: "All ages" },
		{ criterion: "Tier-2/3 reach", a: "Moderate", b: "Strong" },
		{ criterion: "AOV fit", a: "Under ₹3,000", b: "₹3,000+" },
		{ criterion: "Production cost per piece", a: "₹3k–₹40k", b: "₹15k–₹2L" },
		{ criterion: "Compounding effect", a: "Low (decay)", b: "High (search-led)" },
	],
	deepDiveA: "Instagram for Indian D2C in 2026 = Reels first, Stories second, Feed third. Reels drive 60–80% of organic discovery; the algorithm pushes high-completion-rate Reels to non-followers. Tier-1 audiences (Mumbai, Bangalore, Delhi) skew 25–40 with 70%+ female buyers in beauty/fashion. Production sweet spot: 5–7 Reels/week + 1–2 Stories/day + 2 Feed posts/week. Discovery cycle is fast — 24–72 hours for a Reel to show full reach.",
	deepDiveB: "YouTube for Indian D2C is search-led organic — buyers search 'best X for Y', 'how to use Z', 'review of W'. Long-form tutorials, comparison videos, and unboxings drive considered-purchase decisions. Higher production cost (₹15k–₹2L per video) but compounding effect: a strong YouTube video can drive traffic for 3+ years. Best for AOV ₹3,000+ where buyers research before buying — fashion premium, beauty premium, electronics, jewelry, home.",
	decisionFlow: [
		"AOV under ₹1,000, impulse-buy? → Instagram primary.",
		"AOV ₹1,000–₹3,000, considered + impulse? → Instagram heavy + YouTube light.",
		"AOV ₹3,000–₹15,000, considered? → YouTube primary, Instagram secondary.",
		"AOV ₹15,000+, deeply considered (jewelry, electronics)? → YouTube heavy.",
		"Tier-2/3 audience? → YouTube reach is broader.",
	],
	hybrid: "Use Instagram for top-funnel + brand voice + product launches; YouTube for considered-purchase content + tutorials + reviews. Repurpose: 1 YouTube video → 3–5 Instagram Reels (clip + recut). Indian D2C brands at ₹50L+/month run-rate commonly maintain both channels with 5+ pieces/week per channel.",
	faqs: [
		{ question: "Should I post on Instagram and YouTube simultaneously?", answer: "Yes if budget allows. Each channel reaches different audience moments. Repurposing reduces marginal production cost — film YouTube long-form, clip 3–5 Instagram Reels from it." },
		{ question: "What's the right YouTube production budget?", answer: "₹15k–₹40k per video for D2C where founder is on camera + simple b-roll. ₹50k–₹2L for higher-production tutorials with multiple cameras + editing. Quality matters less than consistency for first 50 videos." },
		{ question: "How long until YouTube starts driving D2C revenue?", answer: "9–18 months for compounding. Before that, expect modest direct conversions. Sweet-spot test: 50 videos posted with consistent quality — organic search traffic should noticeably grow by month 12." },
		{ question: "Is TikTok a viable alternative in India?", answer: "TikTok is banned in India. Instagram Reels filled that gap. YouTube Shorts is also a growing alternative for short-form video that competes with Reels." },
		{ question: "Can I run Instagram Ads on top of organic?", answer: "Yes — and most D2C brands do. Organic builds brand voice + audience; ads drive direct conversion. The two amplify each other. Best practice: whitelist top-performing organic Reels as ads (lower CPMs, higher trust)." },
	],
	ctaText: "Designing your social presence? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

// ─────────────────────────────────────────────────────────────────
// Section 2 — Tool × Tool
// ─────────────────────────────────────────────────────────────────

add({
	slug: "klaviyo-vs-mailchimp-for-d2c",
	a: { label: "Klaviyo", shortName: "Klaviyo" },
	b: { label: "Mailchimp", shortName: "Mailchimp" },
	audienceLabel: "Indian D2C brands",
	intent: "Klaviyo or Mailchimp — which email tool fits Indian D2C scale?",
	tldr: [
		"Klaviyo wins on segmentation depth, Shopify integration, and lifecycle automation.",
		"Mailchimp wins on price for sub-5k subscribers and simpler send workflows.",
		"Most Indian D2C brands at ₹15L+/mo revenue migrate from Mailchimp → Klaviyo within 12 months.",
	],
	scorecard: [
		{ criterion: "Pricing (5k subscribers)", a: "$45/mo (~₹3,750)", b: "$13/mo (~₹1,100)" },
		{ criterion: "Pricing (50k subscribers)", a: "$700/mo (~₹58,000)", b: "$300/mo (~₹25,000)" },
		{ criterion: "Shopify integration depth", a: "Native + deep", b: "Native + shallow" },
		{ criterion: "Segmentation engine", a: "Best-in-class", b: "Basic" },
		{ criterion: "Lifecycle automation", a: "Powerful (Flows)", b: "Limited (Customer Journeys)" },
		{ criterion: "WhatsApp integration", a: "Via Wati / direct API", b: "Limited" },
	],
	deepDiveA: "Klaviyo dominates Indian D2C at scale. Native Shopify integration captures all events (viewed product, added to cart, started checkout, placed order, etc.) and exposes them as segmentation criteria. Lifecycle Flows handle welcome, abandoned cart, browse abandon, post-purchase, win-back, replenishment with sophisticated branching. SMS + WhatsApp (via integration) extend the reach. Indian D2C brands at ₹15L+/month revenue commonly attribute 25–35% of revenue to Klaviyo Flows alone.",
	deepDiveB: "Mailchimp is the right starting tool — affordable at sub-5k subscribers, simple to use, recognizable brand. The strength is broadcast newsletters and basic automation. The limitation: segmentation engine is shallow vs Klaviyo, ecommerce integration is decent but not sophisticated, lifecycle automation features are catching up but lag. Below 10k subscribers and AOV under ₹2,000, Mailchimp is fine — beyond that, the segmentation gap costs revenue.",
	decisionFlow: [
		"Sub-5k subscribers, AOV under ₹1,000? → Mailchimp.",
		"5k–25k subscribers, AOV ₹1,000–₹3,000? → Mailchimp acceptable; Klaviyo better.",
		"25k+ subscribers OR AOV ₹2,000+? → Klaviyo.",
		"Subscription / replenishment business? → Klaviyo.",
		"B2B SaaS? → Neither — use HubSpot, Customer.io, or Brevo.",
	],
	hybrid: "There's no real hybrid here — pick one. Migration from Mailchimp to Klaviyo takes 4–8 weeks at scale (subscriber export, flow rebuild, integration verification, list cleanup). Cost of migration: ₹50k–₹3L depending on automation depth. Most Indian D2C brands cross the migration threshold around ₹15L/month revenue or 25k subscribers.",
	faqs: [
		{ question: "Is Klaviyo too expensive for Indian D2C?", answer: "Below 5k subscribers, yes. Above 25k subscribers + ₹15L revenue, Klaviyo's incremental revenue (typically +15–25% of email revenue from better segmentation) more than pays for itself." },
		{ question: "Does Mailchimp work with Shopify?", answer: "Yes, via native integration. The integration captures basic events but is shallower than Klaviyo's. For complex segmentation (e.g., 'abandoned cart with AOV >₹2,000 in last 7 days'), Klaviyo's data model is materially better." },
		{ question: "What about Brevo (Sendinblue) as a third option?", answer: "Brevo is competitive on price (often cheaper than Mailchimp) and offers basic ecommerce automation. For Indian D2C above 50k subscribers, neither Mailchimp nor Brevo match Klaviyo's depth. Brevo can work as a Mailchimp alternative." },
		{ question: "How long does Mailchimp → Klaviyo migration take?", answer: "4–8 weeks for full migration with all flows rebuilt. Subscriber export + import is 1 day; flow rebuild + testing takes the rest. Plan for revenue dip in week 2–3 as flows transition." },
		{ question: "Should I use Klaviyo for SMS too?", answer: "Yes if Indian SMS makes economic sense (rare; WhatsApp dominates). For most Indian D2C, Klaviyo Email + WhatsApp BSP (Wati/Interakt) is the stack. Klaviyo SMS works abroad but Indian SMS DLT compliance complicates it." },
	],
	ctaText: "Migrating email tools? Get a free 30-min D2C audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "wati-vs-interakt-for-whatsapp",
	a: { label: "Wati", shortName: "Wati" },
	b: { label: "Interakt", shortName: "Interakt" },
	audienceLabel: "Indian D2C + SMB businesses on WhatsApp Business API",
	intent: "Wati or Interakt — which BSP for Indian WhatsApp marketing?",
	tldr: [
		"Wati wins on UI polish, support quality, and team-management features.",
		"Interakt wins on price for Indian SMB and faster setup.",
		"Below ₹15k/month WhatsApp budget, Interakt; above, Wati commonly chosen.",
	],
	scorecard: [
		{ criterion: "Starter pricing (India)", a: "~₹2,500/mo + per-message", b: "~₹2,000/mo + per-message" },
		{ criterion: "UI / UX polish", a: "Stronger", b: "Functional" },
		{ criterion: "Setup time", a: "5–7 days", b: "3–5 days" },
		{ criterion: "Team / agent management", a: "Strong", b: "Adequate" },
		{ criterion: "Shopify / ecom integration", a: "Native + deep", b: "Native" },
		{ criterion: "Indian SMB market fit", a: "Mid-market+", b: "SMB+ to mid-market" },
	],
	deepDiveA: "Wati is the polished choice for Indian D2C and B2B SMB on WhatsApp. The UI is cleaner, the team-collaboration features are stronger, the support response time is faster. Native Shopify integration handles abandoned cart, post-purchase, and review flows with templates Wati pre-approves. Best for brands at ₹15k+/month WhatsApp marketing budget where the polish + reliability justifies the price premium.",
	deepDiveB: "Interakt is the value-priced choice for Indian SMB. Functional UI, faster setup, integrated with Indian ecom platforms. The trade-off: support occasionally slower; some features lag Wati by 1–2 release cycles. For most Indian SMB at sub-₹15k/month WhatsApp spend, Interakt delivers the same core functionality at lower TCO.",
	decisionFlow: [
		"Sub-₹15k/mo WhatsApp budget? → Interakt.",
		"₹15k–₹50k/mo? → Either; Wati if team workflow matters.",
		"₹50k+/mo + team of 3+ agents? → Wati.",
		"Pure transactional (no marketing)? → Either; Interakt for value.",
		"International expansion (UAE/Singapore)? → Wati typically.",
	],
	hybrid: "These are alternatives — pick one. Migration between Wati and Interakt is feasible (export contacts + recreate templates) but disruptive (1–2 weeks downtime risk). Most brands stay with their first BSP unless support quality drives a switch.",
	faqs: [
		{ question: "Can I use WhatsApp Business API directly without a BSP?", answer: "Technically yes via Meta Cloud API. Practically no — direct API requires significant engineering (template approval workflow, message routing, billing integration). 95%+ of Indian businesses use a BSP. Direct API only at 100k+ messages/month scale." },
		{ question: "Are Wati and Interakt the only options in India?", answer: "No. Other Indian BSPs: Gallabox, Doubletick, AiSensy, BotPenguin. Internationally: Twilio, Sinch, MessageBird. Wati and Interakt have the largest Indian SMB market share." },
		{ question: "What about WhatsApp Cloud API direct for cost savings?", answer: "Cloud API direct removes BSP markup but requires building or buying middleware for templates, dashboards, automation, agent inboxes. The all-in cost vs Wati/Interakt is rarely lower until 200k+ messages/month." },
		{ question: "How fast can I migrate between BSPs?", answer: "1–2 weeks for full migration. Steps: export contacts, recreate templates (each requires Meta re-approval, 24–72h), rebuild flows in new BSP, switch BSP at Meta level. Plan for marketing pause during transition." },
		{ question: "Do Wati and Interakt support DPDP compliance?", answer: "Both offer opt-in capture mechanisms and consent logs. DPDP compliance ultimately depends on the brand's broader consent management — BSPs provide tooling but not compliance guarantees." },
	],
	ctaText: "Choosing a WhatsApp BSP? Get a free 30-min D2C audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "razorpay-vs-cashfree-for-payments",
	a: { label: "Razorpay", shortName: "Razorpay" },
	b: { label: "Cashfree", shortName: "Cashfree" },
	audienceLabel: "Indian D2C + B2B businesses",
	intent: "Razorpay or Cashfree — which Indian payment gateway?",
	tldr: [
		"Razorpay wins on market share, ecosystem (banking + lending), and dashboard polish.",
		"Cashfree wins on developer experience, payout flexibility, and slightly lower fees at scale.",
		"Most Indian D2C default to Razorpay; B2B + payouts-heavy lean Cashfree.",
	],
	scorecard: [
		{ criterion: "Standard fees (cards)", a: "~2% + GST", b: "~1.95% + GST" },
		{ criterion: "Standard fees (UPI)", a: "~0.5% + GST (often free)", b: "~0.5% + GST" },
		{ criterion: "Developer docs", a: "Good", b: "Best-in-class" },
		{ criterion: "Magic Checkout / one-click", a: "Magic Checkout (paid)", b: "Cashfree Checkout (paid)" },
		{ criterion: "Payouts / disbursements", a: "RazorpayX (good)", b: "Cashfree Payouts (deeper)" },
		{ criterion: "Indian D2C market share", a: "40–60%", b: "15–25%" },
	],
	deepDiveA: "Razorpay is the default Indian payment gateway in 2026 — 40–60% D2C market share. Beyond payments, the ecosystem (RazorpayX banking, Razorpay Capital lending, Magic Checkout, Smart Routing) creates lock-in. Standard 2% card + 0.5% UPI fees + GST. Setup 1–3 days. Best for Indian D2C brands wanting one-stack payments + banking + capital.",
	deepDiveB: "Cashfree is the developer-first alternative. Documentation is best-in-class for Indian gateways; APIs are clean. Slightly lower card fees (~1.95% vs 2%). The strength is payouts (B2B + creator economy + marketplace use cases) — Cashfree Payouts handles bank transfers, UPI disbursements, and payout flow design more flexibly than RazorpayX. Indian D2C using Cashfree typically have engineering-led teams or payouts-heavy workflows.",
	decisionFlow: [
		"Generic Indian D2C? → Razorpay (path of least resistance).",
		"Engineering-led D2C? → Cashfree (better docs).",
		"Marketplace / payouts-heavy? → Cashfree.",
		"Need integrated banking + lending? → Razorpay.",
		"₹50L+/mo volume — both? → Negotiate custom rates with both, pick on relationship.",
	],
	hybrid: "Some D2C brands use both — Razorpay primary, Cashfree as backup or for payouts. Smart Routing (Razorpay's feature) can also direct UPI to Cashfree if rates are better. Most stay with one provider; switching costs are real (re-integration, settlement-flow disruption).",
	faqs: [
		{ question: "What's the actual fee difference at scale?", answer: "At ₹50L/month volume with mixed UPI/card mix, Cashfree typically 0.05–0.10% lower all-in. Both negotiable; rates vary by industry, ticket size, and volume commitment." },
		{ question: "Are Razorpay or Cashfree better for Shopify?", answer: "Both have native Shopify plugins. Razorpay's plugin is slightly more polished and includes Magic Checkout integration. Cashfree's plugin is functional. Plugin parity in 2026; choose on broader factors." },
		{ question: "What about PayU as a third option?", answer: "PayU is enterprise-focused with stronger international support. For Indian-only D2C/B2B, Razorpay or Cashfree typically win on pricing + tooling. PayU makes sense for brands with international payment processing needs." },
		{ question: "Are EMI options different between them?", answer: "Both offer EMI on debit + credit cards via partner banks. Razorpay's EMI flow has slightly higher conversion in Indian D2C testing (better UX). Cashfree's EMI works similarly with marginal differences." },
		{ question: "Can I use both gateways with Smart Routing?", answer: "Yes — Razorpay's Smart Routing can direct UPI traffic to Cashfree if it offers better effective rate. Cashfree similarly supports multi-gateway routing. Worth implementing at ₹1Cr+/month volume; below that, complexity exceeds savings." },
	],
	ctaText: "Choosing your payment gateway? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "shopify-vs-woocommerce-for-d2c",
	a: { label: "Shopify", shortName: "Shopify" },
	b: { label: "WooCommerce", shortName: "WooCommerce" },
	audienceLabel: "Indian D2C brands choosing ecommerce platform",
	intent: "Shopify or WooCommerce — which platform should an Indian D2C brand build on?",
	tldr: [
		"Shopify wins on speed-to-launch, app ecosystem, and Indian-stack support (Razorpay, Shiprocket, etc.).",
		"WooCommerce wins on ownership, customization, and total cost at scale.",
		"Most Indian D2C launch on Shopify; some migrate to headless or WooCommerce post-Series A.",
	],
	scorecard: [
		{ criterion: "Setup time", a: "2–7 days", b: "2–4 weeks" },
		{ criterion: "Indian payment integration", a: "Native (Razorpay, Cashfree, PayU)", b: "Plugin-based (varies)" },
		{ criterion: "App ecosystem", a: "Best-in-class (Indian D2C apps abundant)", b: "WordPress plugins (broad but uneven)" },
		{ criterion: "Monthly cost (early-stage)", a: "$29 Basic to $79 Standard", b: "Hosting ₹500–₹3,000 + plugins" },
		{ criterion: "Customization ceiling", a: "Theme + Liquid + App Bridge", b: "PHP + WP code; high ceiling" },
		{ criterion: "Performance / speed", a: "Strong out-of-box", b: "Depends on hosting + plugins" },
	],
	deepDiveA: "Shopify dominates Indian D2C launches in 2026. The reasons: native Razorpay/Cashfree integration, Indian shipping integrations (Shiprocket, Delhivery), Shopify Plus partnerships with Indian fulfillment, mature app ecosystem (Klaviyo, Wati, CleverTap, Triple Whale all integrate). Total cost of ownership at sub-₹5Cr/year is lower than WooCommerce when you account for engineering time. Indian D2C brands at Series A commonly run on Shopify Plus ($2,300/month).",
	deepDiveB: "WooCommerce is the right choice when ownership matters — open-source, hosted by you, customizable to PHP-level depth. Lower out-of-pocket cost (₹500–₹3,000/mo hosting vs Shopify $29–$2,300). Trade-off: engineering required for performance optimization, security patches, and integration upkeep. Best for brands with engineering team or specific customization needs Shopify can't handle.",
	decisionFlow: [
		"Pre-launch or under ₹5L/mo revenue? → Shopify (speed wins).",
		"₹5L–₹50L/mo + no engineering team? → Shopify.",
		"₹50L–₹3Cr/mo, considering scale? → Shopify Plus or evaluate headless.",
		"Have engineering team + need deep customization? → WooCommerce or headless (Next.js + Sanity, Shopify Hydrogen).",
		"₹3Cr+/mo + brand-specific UX? → Headless (often Shopify backend + Next.js frontend).",
	],
	hybrid: "The 2026 enterprise Indian D2C pattern: Shopify backend (catalog, orders, payments) + Next.js custom frontend (brand experience, performance). 'Headless Shopify' or 'Shopify Hydrogen' captures Shopify's reliability + custom UX. WooCommerce → Shopify migration is common; Shopify → WooCommerce rare. Migration takes 6–12 weeks for ₹50L+/mo brand.",
	faqs: [
		{ question: "What's the real cost of Shopify vs WooCommerce for Indian D2C?", answer: "At sub-₹50L/mo, Shopify is ₹4k–₹15k/month all-in; WooCommerce is ₹2k–₹8k but requires engineering time. Engineering cost typically tips total in Shopify's favor below this revenue." },
		{ question: "Does Shopify work well with Razorpay?", answer: "Yes, native integration. Indian Shopify stores commonly run Razorpay as primary + COD as alternative. Razorpay handles UPI, cards, netbanking, BNPL, EMI through one integration." },
		{ question: "Should I move to headless Shopify (Hydrogen)?", answer: "Only if brand-specific UX or performance demands justify the engineering cost. Most Indian D2C at ₹50L–₹3Cr/mo don't need headless — Shopify's standard themes deliver adequate performance + customization." },
		{ question: "What about Indian-built platforms like Storehippo or Zopstart?", answer: "Niche options for specific Indian use cases (B2B catalog, multi-vendor). For mainstream D2C, Shopify's ecosystem advantage is overwhelming. Niche Indian platforms make sense for niche use cases (e.g., B2B with credit terms)." },
		{ question: "Can I migrate from WooCommerce to Shopify?", answer: "Yes, common path. Migration tools handle catalog + customers + orders. Plan 6–12 weeks for full migration with theme rebuild + integration replacement. Cost: ₹2L–₹10L depending on customization depth." },
	],
	ctaText: "Building or replatforming D2C? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "triple-whale-vs-northbeam-for-attribution",
	a: { label: "Triple Whale", shortName: "Triple Whale" },
	b: { label: "NorthBeam", shortName: "NorthBeam" },
	audienceLabel: "Indian D2C brands at ₹15L+/month spend",
	intent: "Triple Whale or NorthBeam — which attribution tool fits Indian D2C scale?",
	tldr: [
		"Triple Whale wins on D2C-specific dashboards + creative analytics.",
		"NorthBeam wins on attribution-modeling sophistication + MMM lift.",
		"Most Indian D2C at ₹15L+/mo run Triple Whale; ₹50L+/mo evaluate NorthBeam for MMM.",
	],
	scorecard: [
		{ criterion: "Pricing (Indian D2C ₹50L/mo)", a: "$300–$600/mo", b: "$500–$1,500/mo" },
		{ criterion: "D2C-specific dashboards", a: "Best-in-class", b: "Generic" },
		{ criterion: "Attribution model depth", a: "Multi-touch + LTV", b: "Multi-touch + MMM" },
		{ criterion: "Creative analytics", a: "Strong", b: "Basic" },
		{ criterion: "Indian timezone + currency", a: "Supported", b: "Supported" },
		{ criterion: "Setup time", a: "1–3 days", b: "1–2 weeks" },
	],
	deepDiveA: "Triple Whale was built for Shopify D2C. Strengths: Sonar (creative-level analytics), Pixel (server-side tracking), CFO Dashboard (unit-economics view), Total Impact (paid + organic + email blended attribution). Indian D2C brands at ₹15L–₹3Cr/mo commonly default to Triple Whale because the dashboards align with how D2C founders think — channel attribution, creative ROI, AOV trends, blended CAC. Setup is fast (1–3 days).",
	deepDiveB: "NorthBeam emphasizes attribution sophistication. Multi-touch attribution + Marketing Mix Modeling (MMM) for incrementality. Strength: separating correlation from causation in spend (e.g., 'is Meta really driving revenue or just intercepting buyers who would have bought anyway?'). Setup more involved (1–2 weeks for MMM training). Best for Indian D2C brands at ₹50L+/mo who need rigorous incrementality testing alongside attribution.",
	decisionFlow: [
		"Sub-₹15L/mo D2C? → Neither — use Shopify + GA4 free first.",
		"₹15L–₹50L/mo D2C? → Triple Whale (D2C-fit + price).",
		"₹50L+/mo D2C? → Triple Whale OR NorthBeam (deeper analysis).",
		"₹3Cr+/mo with rigorous incrementality testing? → NorthBeam.",
		"Want both? → Triple Whale for daily operations, NorthBeam for quarterly MMM.",
	],
	hybrid: "Some Indian D2C brands at scale run both — Triple Whale for daily creative + channel decisions, NorthBeam for quarterly attribution + MMM. Total cost ~$1,000/month combined; justified at ₹3Cr+/mo revenue with sophisticated attribution maturity.",
	faqs: [
		{ question: "Is Triple Whale worth it for Indian D2C?", answer: "Above ₹15L/mo paid spend, yes. Below that, Shopify + GA4 free + Meta/Google native reporting cover the basics. Triple Whale's incremental value comes from creative-level + blended-CAC dashboards, which matter at scale." },
		{ question: "Does NorthBeam work for Indian timezones + currency?", answer: "Yes, fully. Both tools support INR currency, IST timezone, and Indian D2C-specific event tracking. No regional limitations." },
		{ question: "Can I run a free attribution stack instead?", answer: "Below ₹15L/mo, yes — GA4 + Meta CAPI + GTM + Looker Studio dashboards. The free stack works but requires more manual analysis. Above ₹15L/mo, the time savings of paid tools justify the cost." },
		{ question: "What about Polar as an alternative to both?", answer: "Polar is the budget alternative ($150–$400/mo). Less mature than Triple Whale but improving fast. Good fit for Indian D2C at ₹15L–₹30L/mo wanting a Triple Whale-like dashboard at lower price." },
		{ question: "How long do these tools take to set up?", answer: "Triple Whale: 1–3 days for full setup. NorthBeam: 1–2 weeks (MMM training requires historical data ingestion). Polar: 1–2 days. Plan for setup overhead in budget timing." },
	],
	ctaText: "Setting up attribution? Get a free 30-min D2C audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "hubspot-vs-zoho-crm-for-india",
	a: { label: "HubSpot", shortName: "HubSpot" },
	b: { label: "Zoho CRM", shortName: "Zoho" },
	audienceLabel: "Indian B2B SaaS + service businesses",
	intent: "HubSpot or Zoho — which CRM fits Indian B2B?",
	tldr: [
		"HubSpot wins on UX, marketing-CRM integration, and ecosystem.",
		"Zoho wins on price (often 50–70% cheaper) + Indian-specific features.",
		"Most Indian B2B SaaS Series A+ choose HubSpot; SMB + price-sensitive choose Zoho.",
	],
	scorecard: [
		{ criterion: "Starter pricing (5 users)", a: "$50–$120/mo (~₹4k–₹10k)", b: "₹800–₹2,500/user/mo" },
		{ criterion: "Indian INR billing", a: "Available", b: "Native" },
		{ criterion: "Marketing automation", a: "Best-in-class (Marketing Hub)", b: "Functional (Zoho Marketing Plus)" },
		{ criterion: "Sales pipeline UX", a: "Polished", b: "Functional" },
		{ criterion: "Indian timezone + holidays", a: "Supported", b: "Native" },
		{ criterion: "Ecosystem integrations", a: "1,000+", b: "500+ (Zoho-first)" },
	],
	deepDiveA: "HubSpot is the gold standard for Indian B2B SaaS Series A+. The full-stack appeal: Marketing Hub + Sales Hub + Service Hub + Operations Hub on one platform. Marketing automation integrates with sales pipeline natively — lead scoring, MQL→SQL handoff, attribution. Pricing scales aggressively ($800/mo for 5 users on Marketing+Sales Pro+). Best for brands ready to invest in marketing-sales alignment infrastructure.",
	deepDiveB: "Zoho CRM is the value-priced Indian B2B option. Native INR billing, Indian-language support, deep Zoho ecosystem (Books accounting, Desk support, Campaigns marketing, Forms, Projects). Per-user pricing is 50–70% lower than HubSpot. UX functional, less polished than HubSpot. Best for Indian SMB + B2B services that don't need marketing-automation depth and prioritize cost.",
	decisionFlow: [
		"Indian B2B SaaS pre-Series A or Indian SMB? → Zoho (price wins).",
		"Indian B2B SaaS Series A+ with marketing team? → HubSpot.",
		"Service business (consulting, agencies)? → Zoho (Books + CRM combined).",
		"PLG SaaS with self-serve? → HubSpot (marketing automation depth).",
		"Need marketing-automation + sales pipeline tightly integrated? → HubSpot.",
	],
	hybrid: "Hard to run both — pick one. Migration HubSpot ↔ Zoho is feasible (export contacts/deals/pipelines, re-import) but disruptive (1–2 weeks). Most Indian B2B stay with their first CRM unless costs or features force a switch. Common path: start Zoho at SMB stage → migrate to HubSpot at Series A+ when marketing automation matters.",
	faqs: [
		{ question: "Is HubSpot too expensive for Indian SMB?", answer: "Yes for sub-Series A. Marketing+Sales Pro at $1,600/month is hard to justify below ₹50L/month revenue. HubSpot's free tier (CRM only, no marketing automation) is competitive but lacks the value HubSpot brings." },
		{ question: "Does Zoho work for B2B SaaS?", answer: "Up to Series A yes. The marketing automation gap shows around Series A when MQL/SQL handoff + attribution + nurture sequences become critical. HubSpot's depth is materially better in those areas." },
		{ question: "What about Salesforce as a third option?", answer: "Salesforce is enterprise-focused; rarely fits Indian SaaS pre-Series B. Below that, HubSpot + Zoho cover the ground. Salesforce starts to make sense at Series C+ with complex multi-product sales motions." },
		{ question: "Can I integrate Zoho with HubSpot?", answer: "Limited; mostly via Zapier or custom integration. They're not designed to coexist. Pick one as primary." },
		{ question: "Is Pipedrive better than both?", answer: "Pipedrive is sales-pipeline-only; lacks marketing automation. Good for sales-first Indian B2B services + agencies. Not a HubSpot replacement; closer to a Zoho CRM-only alternative." },
	],
	ctaText: "Choosing CRM for Indian B2B? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "ahrefs-vs-semrush-for-seo",
	a: { label: "Ahrefs", shortName: "Ahrefs" },
	b: { label: "Semrush", shortName: "Semrush" },
	audienceLabel: "Indian SaaS + agencies running SEO at scale",
	intent: "Ahrefs or Semrush — which SEO tool deserves the budget?",
	tldr: [
		"Ahrefs wins on backlink data depth + Site Explorer.",
		"Semrush wins on keyword research + competitor analysis breadth.",
		"Most agencies + SaaS SEO teams choose one as primary; some run both at $400+/month combined.",
	],
	scorecard: [
		{ criterion: "Pricing (Lite tier)", a: "$129/mo", b: "$140/mo" },
		{ criterion: "Backlink index size", a: "Largest in industry", b: "Strong second" },
		{ criterion: "Keyword research", a: "Strong", b: "Best-in-class" },
		{ criterion: "SERP feature tracking", a: "Good", b: "Best-in-class" },
		{ criterion: "Site audit", a: "Good", b: "Strong" },
		{ criterion: "Indian KW data accuracy", a: "Good", b: "Strong" },
	],
	deepDiveA: "Ahrefs has the largest backlink index in the industry — Site Explorer reveals the deepest competitor link profile. Best for technical SEO + link-building research. Indian SaaS / agency teams choose Ahrefs when backlink intelligence matters most. The KW research is good but Semrush's is slightly deeper.",
	deepDiveB: "Semrush has broader competitive analysis — paid + organic + content + social all in one. Strongest KW research engine, especially for Indian-language keyword variants. SERP feature tracking is best-in-class. Best for agencies + brands prioritizing competitor + KW research over backlink depth.",
	decisionFlow: [
		"Backlink-research heavy? → Ahrefs.",
		"Competitor-analysis heavy? → Semrush.",
		"Indian KW research priority? → Semrush slightly better.",
		"Agency with multiple clients? → Either; many run both.",
		"Budget constrained? → Ubersuggest or Surfer SEO as alternatives.",
	],
	hybrid: "Some agencies + serious SaaS SEO teams run both — Ahrefs for backlinks + technical, Semrush for KW + competitor. Combined cost ~$300/month. Worth it at scale where SEO investment exceeds ₹5L/month and tool ROI is clear.",
	faqs: [
		{ question: "Is Ahrefs or Semrush better for Indian SEO?", answer: "Both work for Indian markets. Semrush has slightly better Indian KW database; Ahrefs has slightly better Indian backlink index. Either delivers 90%+ of needed insights for Indian SaaS / D2C SEO." },
		{ question: "What's the cheaper alternative?", answer: "Ubersuggest ($29/month) for basics. Surfer SEO ($89/month) for content briefs. Free Google Search Console for ranking + KW signal. None replace Ahrefs/Semrush at scale, but viable for sub-₹2L/month SEO investment." },
		{ question: "Can I get away with just Search Console?", answer: "For sites under DR 30 with low traffic, yes. Once you're optimizing for top-10 ranks across 100+ KWs, Ahrefs or Semrush surface insights Search Console can't (competitor backlinks, KW gaps, SERP feature triggers)." },
		{ question: "Is Moz worth considering?", answer: "Less than 5 years ago. Moz lost share to Ahrefs and Semrush. Useful only if your team already uses Moz tools or you need DA tracking specifically." },
	],
	ctaText: "Building SEO at scale? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "notion-vs-obsidian-for-content-ops",
	a: { label: "Notion", shortName: "Notion" },
	b: { label: "Obsidian", shortName: "Obsidian" },
	audienceLabel: "Marketing teams + content operators",
	intent: "Notion or Obsidian for content + knowledge management?",
	tldr: [
		"Notion wins for team collaboration, structured databases, and shareable docs.",
		"Obsidian wins for solo deep-thinking, markdown ownership, and graph view.",
		"Most teams use Notion for team workflows + Obsidian for solo content thinking.",
	],
	scorecard: [
		{ criterion: "Pricing", a: "Free tier; $10/user/mo team", b: "Free; $50/year sync" },
		{ criterion: "Team collaboration", a: "Best-in-class", b: "Limited (no real-time)" },
		{ criterion: "Database functionality", a: "Strong", b: "Plugin-based" },
		{ criterion: "Markdown ownership", a: "No (proprietary)", b: "Yes (local files)" },
		{ criterion: "Graph view", a: "No", b: "Yes" },
		{ criterion: "Offline support", a: "Limited", b: "Full" },
	],
	deepDiveA: "Notion is the team workspace standard. Pages + databases + shared workflows. Marketing teams use it for content calendars, brief templates, project management, brand guidelines. Real-time collaboration is best-in-class. The trade-off: data is in Notion's cloud (not your markdown), proprietary format.",
	deepDiveB: "Obsidian is the solo thinker's tool. Markdown files in your local folder. Graph view shows note relationships. Best for deep-research, content brainstorming, second-brain workflows. Limited team collaboration. Indian content operators commonly use Obsidian for personal knowledge work + Notion for team workflows.",
	decisionFlow: [
		"Team workflows + collaboration? → Notion.",
		"Solo thinking + research? → Obsidian.",
		"Content vault with backlinks? → Obsidian.",
		"Project management + tasks? → Notion (or Linear).",
		"Both? → Most operators use both for different jobs.",
	],
	hybrid: "Use Notion for team + project management + briefs; Obsidian for solo content thinking + knowledge graph. Frameleads itself maintains the Frameleads vault in Obsidian for content strategy + planning. Notion handles team workflows.",
	faqs: [
		{ question: "Can Notion replace Obsidian for solo work?", answer: "For most users, yes. Obsidian's edge is markdown ownership + graph view. If you don't need those, Notion alone works. Solo writers + researchers benefit from Obsidian's deeper thinking workflows." },
		{ question: "Does Obsidian work for teams?", answer: "Limited. Obsidian Sync supports collaborative vaults but lacks real-time editing and granular permissions. Most teams add Notion or Linear for collaboration alongside Obsidian." },
		{ question: "What about Roam Research, Logseq, or Reflect?", answer: "Roam declined post-2022 issues. Logseq is free + open-source, Obsidian alternative for markdown bullet-thinking. Reflect is paid + cloud-based. Obsidian remains the dominant knowledge-management tool in 2026." },
		{ question: "Should our marketing team standardize on one?", answer: "Yes for primary tool — Notion for most teams. Allow individual tools (Obsidian, Reflect) for personal workflow. Don't fragment team-wide workflows across tools." },
	],
	ctaText: "Setting up content ops? Get a free 30-min audit.",
	primaryHref: "/contact",
});

// ─────────────────────────────────────────────────────────────────
// Section 3 — Methodology × Methodology
// ─────────────────────────────────────────────────────────────────

add({
	slug: "inbound-vs-outbound-for-b2b",
	a: { label: "Inbound Marketing", shortName: "Inbound" },
	b: { label: "Outbound Marketing", shortName: "Outbound" },
	audienceLabel: "Indian B2B SaaS GTM teams",
	intent: "Inbound or outbound — which GTM motion drives Indian B2B SaaS pipeline?",
	tldr: [
		"Inbound compounds; outbound scales fast.",
		"Both have permanent roles in modern Indian B2B SaaS GTM.",
		"Most healthy SaaS run 60–70% inbound + 30–40% outbound after Series A.",
	],
	scorecard: [
		{ criterion: "Time to first pipeline", a: "6–18 months (compounds)", b: "30–90 days" },
		{ criterion: "Cost per qualified lead", a: "₹500–₹3,000", b: "₹2,000–₹10,000" },
		{ criterion: "Lead intent (warm vs cold)", a: "Warm (sought us out)", b: "Cold (we sought them)" },
		{ criterion: "Scalability ceiling", a: "Compounds; no ceiling", b: "Linear with team size" },
		{ criterion: "Defensibility", a: "Becomes a moat", b: "Resets each quarter" },
		{ criterion: "Best for ACV", a: "All ranges", b: "₹50k+ ACV" },
	],
	deepDiveA: "Inbound for Indian B2B SaaS = SEO + content + community + product-led + thought leadership + AIO/GEO citations. Buyers find you when they're researching solutions. Higher conversion because intent is built-in. The compounding effect: every published asset keeps producing leads. Indian B2B SaaS Series A+ commonly drive 60–80% of pipeline from inbound by year 3.",
	deepDiveB: "Outbound for Indian B2B SaaS = SDR teams + cold email + LinkedIn outreach + ABM + paid LinkedIn. You initiate the conversation. Faster to first pipeline (30–90 days) but lower conversion because cold-list quality varies. Best for ACV ₹50k+ where SDR cost (~₹6L/year fully loaded) is justified by deal-size economics.",
	decisionFlow: [
		"Pre-Series A, ACV under ₹50k? → Inbound primary, SDR not yet.",
		"Series A+, ACV ₹50k–₹2L? → 60 inbound / 40 outbound.",
		"Series B+, ACV ₹2L+? → 70 inbound / 30 outbound + ABM.",
		"Need pipeline in 90 days? → Outbound spike; build inbound in parallel.",
		"Vertical SaaS niche ICP? → Outbound + ABM heavy.",
	],
	hybrid: "Most successful Indian B2B SaaS run both. Inbound builds the foundation (60–80% of pipeline at maturity); outbound captures named accounts + accelerates pipeline + handles non-searcher buyers. Treating them as either-or wastes the synergy — outbound effectiveness multiplies when inbound builds brand recognition first.",
	faqs: [
		{ question: "When should I add SDRs to my SaaS GTM?", answer: "When ACV exceeds ₹50k and product-market fit is established. Below ₹50k ACV, SDR cost (~₹6L/year fully loaded) usually exceeds SDR-attributable revenue. Pre-PMF, founder-led outbound is cheaper than SDR investment." },
		{ question: "Can outbound work without inbound foundation?", answer: "Yes for the first year of GTM. After that, brand recognition matters — recipients of cold outreach who recognize the brand from inbound respond 3–5× more often. Outbound + inbound is the durable answer." },
		{ question: "What's a healthy inbound:outbound ratio for Indian B2B SaaS?", answer: "Series A: 70 outbound / 30 inbound (urgency wins). Series B: 50/50. Series C+: 60–80% inbound. The shift reflects compounding inbound + diminishing outbound efficiency at scale." },
		{ question: "Does AI Overview hurt inbound for B2B?", answer: "Some categories yes; most no. AIO impacts editorial-style blog posts more than commercial-intent comparison + alternative pages. The strategic move: optimize for AIO citation alongside ranking; treat AIO as a discovery surface that complements Google search." },
	],
	ctaText: "Designing SaaS GTM? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "plg-vs-sales-led-for-saas",
	a: { label: "Product-Led Growth (PLG)", shortName: "PLG" },
	b: { label: "Sales-Led Growth", shortName: "Sales-Led" },
	audienceLabel: "Indian B2B SaaS founders choosing GTM motion",
	intent: "PLG or Sales-Led — which GTM motion fits your SaaS?",
	tldr: [
		"PLG works for self-serve, quick-time-to-value products at SMB ACV.",
		"Sales-Led works for considered-purchase, high-ACV, complex products.",
		"PLG-Led Sales (PLG bottom-up + sales for expansion) is the modern hybrid.",
	],
	scorecard: [
		{ criterion: "Best ACV range", a: "Under ₹2L/year", b: "₹2L+/year" },
		{ criterion: "Sales cycle", a: "Days to weeks", b: "60–180+ days" },
		{ criterion: "CAC magnitude", a: "Low (₹3k–₹15k)", b: "High (₹50k–₹5L+)" },
		{ criterion: "Product fit requirement", a: "Self-serve, fast TTV", b: "Considered, multi-stakeholder" },
		{ criterion: "Marketing investment", a: "Content + SEO heavy", b: "ABM + sales enablement heavy" },
		{ criterion: "NRR potential", a: "100–140%", b: "100–130%" },
	],
	deepDiveA: "PLG works when (1) the product can demonstrate value within 1 hour of signup, (2) onboarding is self-serve, (3) the buyer can use the product without IT/security review. Examples: Notion, Linear, Figma, Slack. Indian PLG SaaS commonly target individual users + small teams; conversion to paid happens organically through usage + collaboration features.",
	deepDiveB: "Sales-Led works when (1) ACV exceeds ₹2L/year, (2) buying decision involves multiple stakeholders, (3) implementation requires services or customization. Examples: Salesforce, Workday, ServiceNow. Indian Sales-Led SaaS need SDR + AE + CSM teams; the sales cycle is 60–180+ days; ABM + paid LinkedIn dominate marketing investment.",
	decisionFlow: [
		"Time-to-value <1 hour? → PLG.",
		"Time-to-value 1+ days requiring services? → Sales-Led.",
		"ACV under ₹2L? → PLG (sales economics break above that).",
		"ACV ₹2L+ with multi-stakeholder buying? → Sales-Led.",
		"PLG + ACV ₹2L+? → PLG-Led Sales hybrid (e.g., Notion, Linear).",
	],
	hybrid: "PLG-Led Sales is the 2026 standard for SaaS that fits PLG criteria but has expansion ACV ₹2L+. Bottom-up adoption via PLG; expansion + enterprise via sales. Notion, Linear, Slack all evolved this way. Indian SaaS adopting PLG-Led Sales: 30–50% of new launches in 2026.",
	faqs: [
		{ question: "Can I do both PLG and Sales-Led from launch?", answer: "Hard to execute well as a young company. Pick the primary motion based on product fit + ACV; layer the other as you scale. PLG-Led Sales emerges naturally as PLG-acquired customers expand to enterprise scale." },
		{ question: "Is PLG cheaper than Sales-Led?", answer: "CAC is lower in PLG (₹3k–₹15k vs ₹50k–₹5L). But total marketing + product-development cost can be higher in PLG (because product itself is the marketing engine). Cost-per-customer is lower; cost-per-engineer is higher." },
		{ question: "Does PLG work for Indian B2B?", answer: "Yes for the right products. Indian B2B SaaS PLG examples: Refrens, Zapscale (now), Razorpay's Magic Checkout. The Indian SMB market is large; PLG SaaS scaling to mid-market via self-serve is achievable." },
		{ question: "What about freemium for PLG?", answer: "Most PLG SaaS use freemium or free trial. Freemium gives unlimited users with usage caps; trial gives unlimited usage with time caps. The right choice depends on what produces 'aha' faster — features (use trial) or scale (use freemium)." },
	],
	ctaText: "Picking GTM motion? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

// ─────────────────────────────────────────────────────────────────
// Section 4 — Strategy × Strategy
// ─────────────────────────────────────────────────────────────────

add({
	slug: "in-house-vs-agency-for-d2c",
	a: { label: "In-house Team", shortName: "In-house" },
	b: { label: "Marketing Agency", shortName: "Agency" },
	audienceLabel: "Indian D2C founders evaluating team structure",
	intent: "In-house or agency — which fits Indian D2C marketing?",
	tldr: [
		"In-house wins for brand control + long-term cost at ₹50L+ revenue.",
		"Agency wins for senior expertise on tap + faster execution + flexibility.",
		"Most successful Indian D2C run hybrid — in-house for brand + retention, agency for performance + SEO.",
	],
	scorecard: [
		{ criterion: "Cost (Indian, ₹50L revenue D2C)", a: "₹4L–₹10L/mo (3-4 hires)", b: "₹2L–₹6L/mo retainer" },
		{ criterion: "Speed to start", a: "3–6 months hiring", b: "2 weeks to engagement" },
		{ criterion: "Senior-level expertise", a: "Hard to attract early", b: "Available immediately" },
		{ criterion: "Brand consistency", a: "Strong (full attention)", b: "Variable (multiple clients)" },
		{ criterion: "Scaling flexibility", a: "Fixed cost; scaling is hire-led", b: "Flexible retainer scope" },
		{ criterion: "Loyalty / care", a: "Highest", b: "Variable per agency" },
	],
	deepDiveA: "In-house teams win at scale. Brand intimacy, undivided attention, retention compounding. Indian D2C in-house team at ₹50L+/mo revenue typically: 1 head of growth + 1 performance marketer + 1 content/social manager + 1 designer = ₹4L–₹10L/mo fully loaded. Below ₹50L revenue, in-house economics break — junior hires deliver less than senior agency teams.",
	deepDiveB: "Agencies win for early-stage + scale. Senior-level expertise on tap. Faster execution. Lower fixed-cost commitment. Indian D2C agency retainers: ₹1.5L–₹6L/mo typical. Trade-off: agency spreads attention across clients; brand voice can drift; learnings don't fully transfer when contract ends.",
	decisionFlow: [
		"Pre-PMF or sub-₹15L revenue? → Agency only (in-house economics don't work).",
		"₹15L–₹50L revenue? → Agency primary; first in-house hire (head of growth or performance lead).",
		"₹50L–₹3Cr revenue? → Build in-house core (3-4 people) + retain agency for specialist work.",
		"₹3Cr+ revenue? → In-house team primary; agencies for project-based specialty (e.g., new-channel launch).",
		"Need senior expertise but can't afford full hire? → Fractional CMO + agency.",
	],
	hybrid: "Most successful Indian D2C at ₹50L+/mo run hybrid: in-house brand + retention + creative direction; agency for performance media + SEO + influencer. The hybrid optimizes — agencies bring channel expertise, in-house owns brand voice. Pure in-house at sub-₹50L revenue underperforms; pure agency at ₹3Cr+ revenue under-invests in brand depth.",
	faqs: [
		{ question: "When does in-house make economic sense?", answer: "₹15L+/mo revenue for first hire (head of growth). ₹50L+/mo for full team build-out. Below ₹15L, in-house cost ≥ revenue — agency is the right answer." },
		{ question: "What's a typical agency retainer for Indian D2C?", answer: "₹1.5L–₹3L/mo for performance-only at sub-₹50L revenue. ₹3L–₹6L for full-funnel (performance + SEO + email). ₹6L+ for senior-led, multi-channel programs at ₹3Cr+ revenue." },
		{ question: "How do I evaluate an agency?", answer: "Ask for: 3 D2C case studies in your category, named consultants who'll work on your account, retention strategy templates, creative team headcount, share of accounts in your industry. Walk if they can't show specifics." },
		{ question: "What if my in-house team isn't performing?", answer: "Audit: (1) Are senior + junior responsibilities clear? (2) Is the head of growth a true growth person or just a marketer? (3) Are tools + tracking enabling them? (4) Are KPIs tied to revenue? If yes to all, the issue is hiring quality. Replace; don't add." },
	],
	ctaText: "Designing your team? Get a free 30-min D2C audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "founder-led-vs-hired-marketer-for-early-stage",
	a: { label: "Founder-Led Marketing", shortName: "Founder-Led" },
	b: { label: "Hired First Marketer", shortName: "Hired" },
	audienceLabel: "Indian D2C + B2B SaaS pre-PMF or early-PMF founders",
	intent: "Should the founder run marketing or hire a first marketer?",
	tldr: [
		"Founder-led wins pre-PMF — founder voice + speed of iteration + lowest cost.",
		"Hired marketer wins post-PMF when complexity exceeds founder bandwidth.",
		"Don't hire first marketer until founder has run marketing for 6–12 months.",
	],
	scorecard: [
		{ criterion: "Cost", a: "Founder time (free)", b: "₹6L–₹25L/year" },
		{ criterion: "Brand voice authenticity", a: "Highest", b: "Variable" },
		{ criterion: "Speed of iteration", a: "Same-day decisions", b: "Process + alignment delays" },
		{ criterion: "Scalability ceiling", a: "Founder bandwidth", b: "Higher with right hire" },
		{ criterion: "Risk of bad hire", a: "None", b: "Real (₹5L+ in salary + opportunity cost)" },
		{ criterion: "Learning compounding", a: "Founder learns marketing", b: "Marketer learns; may leave" },
	],
	deepDiveA: "Founder-led marketing pre-PMF is non-negotiable for Indian SaaS + D2C. The founder owns the customer conversation, the brand voice, and the iteration speed. Hiring a first marketer pre-PMF often produces dilution — the marketer doesn't have founder context, can't iterate fast, and creates process overhead. Most successful Indian SaaS founders run marketing solo until ₹15L+/mo revenue.",
	deepDiveB: "Hired first marketer makes sense post-PMF when founder bandwidth becomes the constraint. Right profile: 5–8 years experience, hands-on (not management-track), category-relevant (D2C marketer for D2C; B2B for B2B). Wrong profile: junior generalists or senior management track. Indian first-marketer comp range: ₹15L–₹25L CTC + equity.",
	decisionFlow: [
		"Pre-PMF / under ₹5L revenue? → Founder-led 100%.",
		"PMF + ₹5L–₹25L revenue? → Founder-led primary, agency support for performance.",
		"₹25L–₹75L revenue? → First marketing hire (head of growth or performance lead).",
		"₹75L+/mo revenue? → Marketing team build-out (3-5 people).",
		"Founder hates marketing? → Hire earlier; otherwise continue founder-led.",
	],
	hybrid: "Sequence matters. Founder runs marketing → hires first marketer to scale → builds team → hires VP/CMO. Skipping founder-led phase risks hiring before knowing what to hire for. Most successful Indian SaaS founders ran marketing for 12+ months before first hire.",
	faqs: [
		{ question: "What if founder doesn't have marketing background?", answer: "Still founder-led pre-PMF. Founder learns through doing — Frameleads' Growth System gives the framework; execution builds intuition. Marketing is too central to outsource pre-PMF." },
		{ question: "When is the right time for first marketing hire?", answer: "When founder is the bottleneck on at least 2 of: content production, paid execution, analytics, brand voice. If founder still has bandwidth, delay the hire — the cost of premature hiring is high." },
		{ question: "Should the first hire be a head of growth or a specialist?", answer: "For Indian D2C, performance-marketing specialist first (someone who can run Meta + Google daily). For Indian B2B SaaS, head-of-growth (someone who can build inbound + outbound + product marketing). Match hire to your bottleneck." },
		{ question: "What's a fair founder-led marketing time investment?", answer: "20–40 hours/week pre-PMF; 10–20 hours/week post-PMF. Below 10 hours, marketing under-invests; above 40, founder ignores other critical work. Track founder hours like an investment." },
	],
	ctaText: "Sequencing your team? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "long-form-blogs-vs-short-form-content",
	a: { label: "Long-form Blog Posts", shortName: "Long-form" },
	b: { label: "Short-form Content (Reels, Tweets)", shortName: "Short-form" },
	audienceLabel: "Marketing teams allocating content investment",
	intent: "Long-form blogs or short-form content — where should content investment go?",
	tldr: [
		"Long-form compounds via SEO + LLM citation; short-form drives discovery + brand resonance.",
		"Both are needed; ratio depends on category + buyer journey length.",
		"Most B2B SaaS lean long-form; D2C lean short-form for awareness.",
	],
	scorecard: [
		{ criterion: "Compounding effect", a: "Strong (SEO assets)", b: "Decay-prone" },
		{ criterion: "Discovery speed", a: "Slow (months)", b: "Fast (days)" },
		{ criterion: "Production cost", a: "₹5k–₹50k per piece", b: "₹500–₹15k per piece" },
		{ criterion: "Best for awareness", a: "Limited", b: "Strong" },
		{ criterion: "Best for SEO + AIO", a: "Strong", b: "Limited" },
		{ criterion: "Best for brand voice", a: "Editorial", b: "Personality-led" },
	],
	deepDiveA: "Long-form blogs (1,500+ words) compound via SEO + AIO citation. Indian B2B SaaS commonly lean 70–80% long-form; D2C commonly 40–60%. Each piece is an asset that keeps producing leads as it ranks. The investment is upfront — research, draft, edit, schema-tag — but the return runs for years.",
	deepDiveB: "Short-form content (Reels, Tweets, LinkedIn posts, Stories) drives top-of-funnel discovery + brand resonance. Indian D2C beauty + fashion lean 60–80% short-form to capture impulse-purchase audience. The investment per-piece is lower but cumulative production effort is higher (5–10 pieces/week to maintain presence).",
	decisionFlow: [
		"Indian B2B SaaS? → 70 long-form / 30 short-form.",
		"Indian D2C beauty/fashion? → 40 long-form / 60 short-form.",
		"Indian D2C considered (jewelry, electronics)? → 60 long-form / 40 short-form.",
		"Founder-led brand? → Short-form for personal brand + long-form for thought leadership.",
		"Pre-launch / pre-PMF? → Lean short-form (faster signal).",
	],
	hybrid: "The repurposing model: 1 long-form blog → 3–5 short-form clips. Atomize a 2,000-word blog post into Reels, Tweets, LinkedIn posts. Multiplier: 1 piece of editorial work → 12 distribution units. Indian D2C + B2B SaaS at scale all use repurposing engines; pure-format teams underperform.",
	faqs: [
		{ question: "Will AI Overview kill long-form content?", answer: "It compresses click traffic on top-3 ranking pages but doesn't kill long-form. Pages cited in AIO retain visibility. The strategic shift: optimize long-form for AIO citation alongside ranking. Long-form remains the primary asset." },
		{ question: "How many short-form posts per week?", answer: "Indian D2C: 5–7 Reels + 3–5 Stories/day. Indian B2B SaaS: 3–5 LinkedIn posts/week + occasional Reels. Below this, organic algorithm reduces reach. Above this, quality drops." },
		{ question: "Should I focus on YouTube or Instagram for short-form?", answer: "Both have value. Instagram dominates D2C tier-1; YouTube Shorts has broader Indian reach across tiers. Most brands publish to both with cross-posted content." },
		{ question: "Can I use AI to produce long-form?", answer: "AI assists drafting; human editing required. Pure AI long-form ranks poorly + isn't cited by LLMs. Frameleads' content uses AI for drafting + research, with editorial review on every piece. The 90/10 split: AI does 70%, human edits 30% — but the 30% is what makes it worth ranking." },
	],
	ctaText: "Designing content investment? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 5 — Provider × Provider + Misc strategy
// ─────────────────────────────────────────────────────────────────

add({
	slug: "frameleads-vs-other-agencies",
	a: { label: "Frameleads", shortName: "Frameleads" },
	b: { label: "Other Indian Agencies", shortName: "Other Agencies" },
	audienceLabel: "Indian D2C + B2B SaaS evaluating agencies",
	intent: "How does Frameleads compare to typical Indian marketing agencies?",
	tldr: [
		"Frameleads runs the Growth System™ — Map → Magnet → Machine → Multiply → Measure — across every engagement.",
		"Most Indian agencies sell media buying; Frameleads is a growth partner.",
		"Senior-led, India-grounded, AIO/GEO-native. Free 30-min audit before any commitment.",
	],
	scorecard: [
		{ criterion: "Engagement model", a: "Growth Partner (full-funnel)", b: "Media Buyer (channel-only) typical" },
		{ criterion: "Senior consultant access", a: "Direct (no juniors-only)", b: "Variable (often juniors)" },
		{ criterion: "AIO/GEO/LLM expertise", a: "Native — built into every engagement", b: "Rarely available" },
		{ criterion: "Methodology IP", a: "Frameleads Growth System™", b: "Tactic-led (no framework)" },
		{ criterion: "Pre-engagement free audit", a: "Yes — 30 min, no slides", b: "Rare; usually sales-led" },
		{ criterion: "Reporting honesty", a: "P&L-tied; no vanity metrics", b: "Often vanity-metric reports" },
	],
	deepDiveA: "Frameleads operates as a growth partner, not a media buyer. Every engagement runs the Growth System™ — five stages applied to your specific stage, ICP, and unit economics. Senior consultants on every account; no offshore juniors. AIO/GEO/LLM optimization is native (this is how the Frameleads vault is built). Free 30-min audit before any commitment, with no sales pressure.",
	deepDiveB: "Indian agencies vary widely. Most sell media buying — manage your Meta + Google ad spend, optimize for ROAS. Few sell growth strategy — fewer still tie work to P&L. Junior-staffed accounts are common. AIO/GEO is rarely an explicit specialty. The trap: agency wins on retainer, not your outcomes; incentives misalign over time.",
	decisionFlow: [
		"Need media buying only at sub-₹5L/mo? → Most agencies fit; pick on price.",
		"Need full-funnel growth strategy? → Frameleads or specialist agencies.",
		"Need AIO/GEO/LLM expertise? → Limited options; Frameleads + a few peers.",
		"Need senior consultant on account? → Demand it explicitly; many won't.",
		"Want free audit before commitment? → Frameleads gives this; many require sales call.",
	],
	hybrid: "Some brands run multiple agencies — one for media buying, one for SEO, one for content. The hybrid works at scale (₹3Cr+/mo revenue) where specialists outperform generalists. Below that, single growth partner is more efficient than multiple agency coordination overhead.",
	faqs: [
		{ question: "How do I evaluate agencies?", answer: "Ask for: 3 case studies in your category, named consultants on your account, methodology framework (not just tactics), retention strategy templates, and a free audit before commitment. Walk if any are absent." },
		{ question: "What's a fair retainer for Indian D2C agency?", answer: "₹1.5L–₹3L/mo for performance-only at sub-₹50L revenue. ₹3L–₹6L/mo for full-funnel. ₹6L+/mo for senior-led multi-channel programs at ₹3Cr+. Frameleads' retainers fall in line with these ranges, scoped to outcomes." },
		{ question: "How is Frameleads different from Indian SaaS-focused agencies?", answer: "Frameleads serves both D2C + SaaS + service businesses; the Growth System adapts to all. Specialty agencies (B2B-only or D2C-only) may have narrower depth in one but lack cross-pollination — many Frameleads insights come from cross-category pattern recognition." },
		{ question: "Can I switch from another agency to Frameleads?", answer: "Yes — common path. Audit is free; transition typically 30–60 days. Frameleads doesn't poach; we ask the previous agency for handoff documentation when client requests it. Clean transitions matter for the client." },
	],
	ctaText: "Evaluating Frameleads? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "agency-vs-fractional-cmo",
	a: { label: "Marketing Agency", shortName: "Agency" },
	b: { label: "Fractional CMO", shortName: "Fractional CMO" },
	audienceLabel: "Indian D2C + B2B SaaS at ₹50L+/mo evaluating senior leadership",
	intent: "Agency or Fractional CMO — which fills senior marketing leadership?",
	tldr: [
		"Agency provides execution; Fractional CMO provides strategy + leadership.",
		"Most growing brands need both — Fractional CMO directs, agency executes.",
		"Don't substitute one for the other; they solve different problems.",
	],
	scorecard: [
		{ criterion: "Cost (Indian)", a: "₹2L–₹6L/mo retainer", b: "₹2.5L–₹8L/mo (1–2 days/week)" },
		{ criterion: "Strategic leadership", a: "Limited", b: "Primary value" },
		{ criterion: "Channel execution", a: "Primary value", b: "Limited (advisory)" },
		{ criterion: "Team coaching", a: "Limited", b: "Strong" },
		{ criterion: "Time commitment", a: "Continuous", b: "1–2 days/week typical" },
		{ criterion: "Best for stage", a: "All stages", b: "₹50L+/mo with team" },
	],
	deepDiveA: "Agencies execute marketing — paid media, content production, lifecycle automation, SEO. Most don't lead strategy. Hiring an agency without senior leadership often produces tactical execution without strategic direction. Indian D2C + B2B SaaS at scale need both.",
	deepDiveB: "Fractional CMO = senior marketer (₹50L+ career experience) working 1–2 days/week. Provides strategic direction, hire/fire decisions, agency oversight, board-level marketing voice. Indian Fractional CMOs charge ₹2.5L–₹8L/month for 8–16 hours/week. Best as the strategic counterpart to execution-focused team or agency.",
	decisionFlow: [
		"No marketing leader? → Fractional CMO + agency.",
		"Have head of growth + need execution? → Agency primary.",
		"Have execution team + lack strategy? → Fractional CMO.",
		"Pre-PMF or sub-₹15L revenue? → Agency only; founder leads strategy.",
		"₹3Cr+/mo revenue? → Likely time for full-time CMO + in-house team.",
	],
	hybrid: "The most common Indian D2C scaling pattern: founder leads → hire fractional CMO at ₹50L revenue → add agency execution → eventually hire full-time CMO at ₹3Cr+ revenue + retain agency for specialty work. Treating these as alternatives wastes the synergy.",
	faqs: [
		{ question: "Can I find good Fractional CMOs in India?", answer: "Yes, growing market. Look for: 12+ years experience, 2+ exits or scaled engagements, category fit (D2C vs SaaS vs services). Indian Fractional CMOs commonly cost ₹3L–₹8L/month for 1–2 days/week." },
		{ question: "How do agency + Fractional CMO coordinate?", answer: "Fractional CMO sets strategy + KPIs + briefs; agency executes. Weekly sync for tactical decisions. Monthly review of metrics. Quarterly strategic review. Clear scope prevents overlap." },
		{ question: "Is Fractional CMO worth ₹3L+/month?", answer: "If brand revenue is ₹50L+/mo and lacks senior marketing leadership, yes. The right CMO drives 20–40% revenue lift via prioritization + team upgrades. Below ₹50L revenue, the cost-benefit math is harder." },
		{ question: "Can Frameleads provide both?", answer: "Frameleads' senior consultants serve in a Fractional CMO role on some engagements. Standard retainers are agency-style execution; Strategic engagements layer in fractional advisory. Discussed during the free audit." },
	],
	ctaText: "Designing senior marketing? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 6 — More Tool comparisons
// ─────────────────────────────────────────────────────────────────

add({
	slug: "shopify-vs-shopify-plus",
	a: { label: "Shopify (Standard)", shortName: "Shopify" },
	b: { label: "Shopify Plus", shortName: "Shopify Plus" },
	audienceLabel: "Indian D2C brands evaluating upgrade",
	intent: "Should an Indian D2C brand upgrade from Shopify to Shopify Plus?",
	tldr: [
		"Plus delivers value at ₹3Cr+/yr revenue — multi-store, B2B, headless, dedicated support.",
		"Standard Shopify covers most needs up to ₹10–15Cr/yr.",
		"Don't upgrade prematurely — Plus is $2,300/mo vs $79/mo Standard.",
	],
	scorecard: [
		{ criterion: "Pricing", a: "$79/mo", b: "$2,300/mo (~₹1.9L)" },
		{ criterion: "Multi-store / brands", a: "1 store per plan", b: "Up to 10 stores" },
		{ criterion: "B2B / wholesale capabilities", a: "Limited", b: "Native B2B platform" },
		{ criterion: "Headless / Hydrogen support", a: "Limited", b: "Full Hydrogen" },
		{ criterion: "Checkout customization", a: "Limited", b: "Full Checkout Extensibility" },
		{ criterion: "Dedicated launch manager", a: "No", b: "Yes" },
	],
	deepDiveA: "Shopify Standard handles 90% of Indian D2C use cases. Up to ₹10–15Cr/yr revenue, Standard's app ecosystem + integrations + checkout works fine. The Standard tier ($79/mo) is right for 95% of Indian D2C launches.",
	deepDiveB: "Shopify Plus unlocks at scale: multi-brand portfolio (single account, 10 stores), B2B + wholesale flows, full Checkout Extensibility, Hydrogen headless. Pricing ($2,300/mo) makes it economic only above ₹3Cr/yr revenue. Indian D2C unicorns + scale brands run Plus; smaller brands rarely need it.",
	decisionFlow: [
		"Sub-₹3Cr/yr revenue? → Standard.",
		"₹3Cr–₹10Cr/yr + single brand? → Standard with apps.",
		"₹3Cr+/yr + multiple brands? → Plus (multi-store).",
		"₹10Cr+/yr or B2B-heavy? → Plus.",
		"Headless / Hydrogen ambition? → Plus required.",
	],
	hybrid: "Some brands run Standard for D2C + Plus for separate B2B store. Pure Standard works up to surprising scale; Plus's ROI emerges only with specific use cases (multi-brand, B2B, headless).",
	faqs: [
		{ question: "Can I migrate Standard → Plus mid-scale?", answer: "Yes, painless. Migration is mostly billing change + new-features-unlock. Plan for 1–2 weeks if reconfiguring multi-store or B2B flows." },
		{ question: "What about Magento Commerce as Plus alternative?", answer: "Magento (now Adobe Commerce) is more enterprise-grade but engineering-heavy. For Indian D2C, Shopify Plus typically wins on TCO unless heavy customization required." },
		{ question: "Does Plus give better Indian payment integrations?", answer: "Same payment integrations as Standard (Razorpay, Cashfree). Plus's value is in checkout customization + multi-store + B2B, not payments per se." },
		{ question: "When is the upgrade clearly worth it?", answer: "When you need: 2+ brands, B2B store, headless frontend, or checkout customization beyond Standard's app limits. If none of those, stay Standard." },
	],
	ctaText: "Evaluating Shopify Plus? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "ga4-vs-mixpanel-for-saas",
	a: { label: "Google Analytics 4 (GA4)", shortName: "GA4" },
	b: { label: "Mixpanel", shortName: "Mixpanel" },
	audienceLabel: "Indian B2B SaaS analytics teams",
	intent: "GA4 or Mixpanel for SaaS product analytics?",
	tldr: [
		"GA4 is free and broad — best for marketing attribution + acquisition tracking.",
		"Mixpanel is paid and deep — best for product analytics + cohort analysis.",
		"Most SaaS run both — GA4 for marketing, Mixpanel for product engagement.",
	],
	scorecard: [
		{ criterion: "Pricing", a: "Free (with limits)", b: "$25/mo for 100k MTUs+" },
		{ criterion: "Marketing attribution", a: "Strong", b: "Limited" },
		{ criterion: "Product analytics", a: "Limited", b: "Best-in-class" },
		{ criterion: "Cohort analysis", a: "Functional", b: "Strong" },
		{ criterion: "Funnel analysis", a: "Functional", b: "Best-in-class" },
		{ criterion: "Setup complexity", a: "Medium", b: "Higher (event taxonomy)" },
	],
	deepDiveA: "GA4 is the standard for marketing analytics — acquisition channels, attribution, conversion paths. Free with BigQuery export at 1M events/day. Best for SaaS marketing teams tracking signup → conversion. Limitations show in product analytics (cohort retention, feature usage, user journeys inside the app).",
	deepDiveB: "Mixpanel is built for product analytics. Event taxonomy + funnel analysis + cohort retention + feature flags. Paid (free tier exists but limited). Best for SaaS product teams optimizing onboarding, activation, feature adoption. Marketing attribution is weaker than GA4.",
	decisionFlow: [
		"Marketing-focused? → GA4 only.",
		"Product analytics priority? → Mixpanel + GA4.",
		"Free + good enough? → GA4 + Looker Studio dashboards.",
		"PLG SaaS scaling? → Mixpanel essential.",
		"Both? → Most SaaS at Series A+ run both.",
	],
	hybrid: "Most Indian B2B SaaS Series A+ run both. GA4 for marketing-acquisition; Mixpanel for product + activation + retention. Some replace Mixpanel with Amplitude or Heap. The pattern is: marketing tool for top of funnel, product analytics tool for in-product behavior.",
	faqs: [
		{ question: "Can GA4 replace Mixpanel?", answer: "For basic product analytics, GA4 + BigQuery + custom queries can. For native product-team workflows (funnel + cohort + retention dashboards), Mixpanel's UX is materially better." },
		{ question: "What about Amplitude as alternative to Mixpanel?", answer: "Amplitude is competitive — slightly better at advanced analytics, slightly more expensive. For Indian SaaS, Mixpanel wins on price + simpler setup. Amplitude wins for sophisticated product teams." },
		{ question: "Is Heap a viable alternative?", answer: "Heap auto-tracks all events without taxonomy setup — fast onboarding. Pricing is enterprise-only ($3k/mo+). Less budget-friendly for Indian B2B SaaS Series A." },
		{ question: "How long does Mixpanel setup take?", answer: "1–3 weeks for proper event taxonomy + dashboards. The faster you do this, the more value you extract. Skipping taxonomy creates messy data that's hard to fix later." },
	],
	ctaText: "Setting up SaaS analytics? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "looker-studio-vs-tableau-for-marketing",
	a: { label: "Looker Studio", shortName: "Looker Studio" },
	b: { label: "Tableau", shortName: "Tableau" },
	audienceLabel: "Marketing teams building dashboards",
	intent: "Looker Studio or Tableau for marketing dashboards?",
	tldr: [
		"Looker Studio is free + integrates GA4 + GSC natively — sufficient for most marketing teams.",
		"Tableau is paid + powerful — best for complex multi-source analytics.",
		"Below ₹3Cr/yr revenue, Looker Studio fits 95% of marketing dashboard needs.",
	],
	scorecard: [
		{ criterion: "Pricing", a: "Free", b: "$70/user/mo" },
		{ criterion: "Native Google integrations", a: "Best (GA4, GSC, Sheets)", b: "Connector-based" },
		{ criterion: "Visualization breadth", a: "Functional", b: "Best-in-class" },
		{ criterion: "Multi-source consolidation", a: "Functional", b: "Strong" },
		{ criterion: "Learning curve", a: "Low", b: "Medium-high" },
		{ criterion: "Best for marketing", a: "Yes", b: "Overkill" },
	],
	deepDiveA: "Looker Studio (formerly Data Studio) is Google's free dashboarding tool. Native GA4, GSC, Google Ads, BigQuery, Sheets connectors. Most marketing dashboards possible. Free + fast. Limitations: visualization options narrower than Tableau, large-data performance issues at 1M+ rows.",
	deepDiveB: "Tableau is enterprise-grade BI — broader visualization options, faster on large data, more sophisticated analytics. Pricing per user makes it expensive ($70/user/month). Best for analytics teams needing depth beyond marketing.",
	decisionFlow: [
		"Marketing-only dashboards? → Looker Studio.",
		"Cross-functional BI (marketing + product + finance)? → Tableau or Looker.",
		"Sub-₹3Cr/yr? → Looker Studio.",
		"Enterprise + analytics team? → Tableau or Power BI.",
		"Need real-time + complex blending? → Tableau.",
	],
	hybrid: "Most Indian SaaS + D2C teams run Looker Studio for marketing + Tableau (or Power BI) for finance/product. Marketing teams shouldn't need Tableau-level depth — Looker Studio + Sheets covers it.",
	faqs: [
		{ question: "Is Looker Studio limited compared to Tableau?", answer: "For marketing use cases, mostly no. The gaps emerge at >1M rows or complex multi-source blending. Most marketing dashboards stay within Looker's strengths." },
		{ question: "What about Power BI?", answer: "Power BI is competitive with Tableau, often cheaper. Microsoft-stack-friendly. For Indian B2B SaaS already on Microsoft, Power BI is a fine alternative to Tableau." },
		{ question: "Can I build the same dashboards in both?", answer: "Mostly yes for marketing dashboards. Tableau has more visualization flexibility but Looker Studio handles 95% of marketing needs." },
		{ question: "How long does dashboard setup take?", answer: "Looker Studio: 2–5 days for marketing dashboard suite. Tableau: 1–3 weeks (more setup overhead). Time-to-insight matters; Looker wins for fast iteration." },
	],
	ctaText: "Building marketing dashboards? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "calendly-vs-cal-com-for-scheduling",
	a: { label: "Calendly", shortName: "Calendly" },
	b: { label: "Cal.com", shortName: "Cal.com" },
	audienceLabel: "Indian B2B SaaS + agencies + service businesses",
	intent: "Calendly or Cal.com for booking pages?",
	tldr: [
		"Calendly is the established player with deep ecosystem.",
		"Cal.com is open-source + customizable + cheaper.",
		"Both work; choose on team-pricing economics + customization needs.",
	],
	scorecard: [
		{ criterion: "Free tier", a: "Yes (limited)", b: "Yes (more generous)" },
		{ criterion: "Team pricing", a: "$8–$16/user/mo", b: "$12/user/mo (Teams)" },
		{ criterion: "Open-source option", a: "No", b: "Yes (self-hostable)" },
		{ criterion: "Customization", a: "Limited", b: "Strong" },
		{ criterion: "Indian payment routing", a: "Limited", b: "Stripe-native" },
		{ criterion: "Integration ecosystem", a: "Best-in-class", b: "Growing" },
	],
	deepDiveA: "Calendly is the standard. Polished UX, deep integrations (Salesforce, HubSpot, Slack, etc.), reliable. Best for teams that want plug-and-play scheduling. Pricing ($8–$16/user/mo) is fair for what you get.",
	deepDiveB: "Cal.com is open-source + customizable. Self-hostable for full control. Cheaper at scale. Slightly less polished than Calendly. Best for engineering-led teams or brands wanting custom booking experiences.",
	decisionFlow: [
		"Plug-and-play simplicity? → Calendly.",
		"Open-source / self-hosted? → Cal.com.",
		"Custom booking flow? → Cal.com.",
		"Integration-heavy setup? → Calendly (more mature).",
		"Cost-sensitive at scale? → Cal.com (cheaper)."
	],
	hybrid: "Pick one — coexistence rare. Migration Calendly → Cal.com (or vice versa) is straightforward (export bookings, recreate flows). Most teams stay with their first choice unless cost or features force a switch.",
	faqs: [
		{ question: "Is Cal.com really open-source?", answer: "Yes, AGPL license. Self-hostable on your own infrastructure. Most Indian users use Cal.com hosted version (similar pricing to Calendly) rather than self-hosting." },
		{ question: "What about HubSpot Meetings?", answer: "HubSpot Meetings is bundled with HubSpot CRM. Works for HubSpot users; standalone capability is weaker than Calendly/Cal.com." },
		{ question: "Can I take payments via these tools?", answer: "Yes — both integrate with Stripe for paid bookings (consultations, services). Calendly slightly easier setup; Cal.com more flexible payment workflows." },
		{ question: "Which integrates better with Indian CRMs (Zoho)?", answer: "Calendly has Zoho integration via Zapier. Cal.com has Zoho integration native. For Zoho users, Cal.com slightly easier. For HubSpot users, Calendly slightly easier." },
	],
	ctaText: "Setting up booking ops? Get a free 30-min audit.",
	primaryHref: "/contact",
});

// ─────────────────────────────────────────────────────────────────
// Section 7 — Strategy comparisons
// ─────────────────────────────────────────────────────────────────

add({
	slug: "abm-vs-broad-based-for-b2b",
	a: { label: "Account-Based Marketing (ABM)", shortName: "ABM" },
	b: { label: "Broad-Based Marketing", shortName: "Broad-Based" },
	audienceLabel: "Indian B2B SaaS GTM teams",
	intent: "ABM or broad-based marketing for Indian B2B SaaS?",
	tldr: [
		"ABM works at ₹10L+ ACV with named-account focus.",
		"Broad-based works for SMB/lower ACV with high lead volume.",
		"Most Series B+ Indian SaaS run both — broad for SMB, ABM for enterprise.",
	],
	scorecard: [
		{ criterion: "Best ACV range", a: "₹10L+", b: "Under ₹2L" },
		{ criterion: "Account count", a: "50–500 named", b: "Open / unbounded" },
		{ criterion: "Investment per account", a: "₹50k+/account/year", b: "₹500–₹3,000 CPL" },
		{ criterion: "Sales-marketing alignment", a: "Critical (daily)", b: "Moderate (weekly)" },
		{ criterion: "Conversion rate", a: "5–15% account-level", b: "1–5% lead-level" },
		{ criterion: "Time to first deal", a: "60–180 days", b: "30–90 days" },
	],
	deepDiveA: "ABM concentrates GTM effort on a defined named-account list. LinkedIn ads + outbound sequences + custom landing pages + content + sales calls — all coordinated per account. Indian Enterprise SaaS at Series B+ commonly runs ABM at ₹50L–₹2Cr/year programs targeting 200–500 named accounts.",
	deepDiveB: "Broad-based marketing casts a wider net via SEO + paid + content + email. Optimizes for lead volume + automation. Works for SMB/Mid-Market SaaS with ACV under ₹2L — economics break above that without ABM-style account focus.",
	decisionFlow: [
		"ACV under ₹2L? → Broad-based.",
		"ACV ₹2L–₹10L? → Mixed — broad-based for inbound + targeted ABM for top accounts.",
		"ACV ₹10L+? → ABM primary.",
		"PLG SaaS? → Broad-based.",
		"Vertical SaaS niche ICP? → ABM works at lower ACV due to TAM concentration.",
	],
	hybrid: "Most Series B+ Indian SaaS run hybrid: broad-based capture for SMB self-serve + ABM for named-account enterprise. The two motions don't compete — they target different buyer segments at different ACV.",
	faqs: [
		{ question: "How do I tier accounts for ABM?", answer: "Tier 1 (50–80 accounts): hyper-customized landing pages + 1:1 outreach. Tier 2 (150–400): segment-customized content. Tier 3 (800–3,000): programmatic ABM (display + LinkedIn). Match investment to tier." },
		{ question: "Is ABM worth ₹50L+/year program cost?", answer: "If average ACV is ₹50L+, yes — closing 1 account/month covers program cost. Below ₹10L ACV, ABM economics struggle." },
		{ question: "Can ABM work without sales team?", answer: "No. ABM requires daily sales-marketing coordination. Without an SDR/AE team, ABM produces awareness but no conversion." },
		{ question: "What tools enable ABM?", answer: "LinkedIn Sales Navigator + Apollo/Lusha for prospect data; HubSpot or Salesforce for account orchestration; LinkedIn Ads for matched audiences. Stack cost: ₹2L–₹10L/month additional to base CRM." },
	],
	ctaText: "Building B2B SaaS GTM? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "demand-gen-vs-lead-gen",
	a: { label: "Demand Generation", shortName: "Demand Gen" },
	b: { label: "Lead Generation", shortName: "Lead Gen" },
	audienceLabel: "Indian B2B marketing teams",
	intent: "Demand gen or lead gen — which builds B2B pipeline?",
	tldr: [
		"Demand gen creates awareness; lead gen captures conversions.",
		"Both are needed; over-investing in lead gen alone produces low-quality leads.",
		"Most B2B teams allocate 40% demand / 60% lead gen as a healthy default.",
	],
	scorecard: [
		{ criterion: "Goal", a: "Awareness + intent", b: "Form-fill + MQL" },
		{ criterion: "Channel mix", a: "Content + social + PR", b: "Paid forms + landing pages" },
		{ criterion: "Time horizon", a: "6+ months", b: "Immediate" },
		{ criterion: "Lead quality", a: "Higher (warm)", b: "Variable (cold)" },
		{ criterion: "Cost per qualified lead", a: "Lower at scale", b: "Higher (paid forms)" },
		{ criterion: "Compounding effect", a: "Strong", b: "Linear" },
	],
	deepDiveA: "Demand generation builds market awareness + buyer intent before they fill a form. Long-form content, podcast appearances, founder-led thought leadership, free tools, community building. The signal: branded search volume + direct traffic + 'inbound from referral' attribution.",
	deepDiveB: "Lead generation captures the conversion moment — paid LinkedIn forms, gated content, demo CTAs, paid Search. Optimizes for form-fill volume. Risk: high-volume / low-quality leads if demand gen is weak (no warm-up before form).",
	decisionFlow: [
		"Need pipeline in 30 days? → Lead gen primary.",
		"Have 6+ months runway? → Demand gen primary.",
		"Series A+ with sales team? → 40 demand / 60 lead gen.",
		"Series C+ established brand? → 60 demand / 40 lead gen.",
		"Pre-PMF? → 90 lead gen / 10 demand foundation.",
	],
	hybrid: "Demand gen + lead gen are sequential investments. Demand gen creates the warm audience; lead gen converts them. Brands that under-invest in demand gen produce low-quality leads. Over-invest in demand gen without lead gen and pipeline doesn't materialize.",
	faqs: [
		{ question: "Can I track demand gen ROI?", answer: "Indirectly. Branded search volume (rising) + direct traffic (rising) + lead quality (rising MQL→SQL conversion) signal demand gen working. Direct ROI per channel is harder to measure than lead gen." },
		{ question: "How long until demand gen produces results?", answer: "6–12 months for first signal. 12–24 months for compounding. Below 12 months, demand gen looks unproductive — that's the time-to-impact reality." },
		{ question: "Should I cut demand gen in a recession?", answer: "Counter-intuitively no. Cutting demand gen first hurts long-term pipeline. Cut lead gen waste (low-converting paid sources) before demand gen investments." },
		{ question: "Is content marketing demand gen or lead gen?", answer: "Both. SEO-content = demand gen (awareness). Gated content with form = lead gen. Most content has both functions; track both signals." },
	],
	ctaText: "Designing B2B GTM? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "founder-personal-brand-vs-company-brand",
	a: { label: "Founder Personal Brand", shortName: "Founder Brand" },
	b: { label: "Company Brand", shortName: "Company Brand" },
	audienceLabel: "Indian SaaS + D2C founders evaluating brand investment",
	intent: "Should you invest in founder personal brand or company brand?",
	tldr: [
		"Founder brand drives faster awareness + trust at low cost.",
		"Company brand is durable, scalable, and not founder-dependent.",
		"Most successful Indian SaaS run both — founder leads, company brand catches up.",
	],
	scorecard: [
		{ criterion: "Setup speed", a: "Days", b: "Months" },
		{ criterion: "Cost", a: "Founder time only", b: "₹3L+/mo content + design" },
		{ criterion: "Trust signal", a: "Highest (real human)", b: "Strong but slower" },
		{ criterion: "Scalability ceiling", a: "Founder bandwidth", b: "Unlimited" },
		{ criterion: "Founder-leave risk", a: "High", b: "None" },
		{ criterion: "Best for stage", a: "Pre-Series B", b: "All stages" },
	],
	deepDiveA: "Founder personal brand on LinkedIn + Twitter + YouTube + podcasts is the cheapest, fastest brand signal. Indian SaaS founders investing 5–10 hours/week in personal brand commonly drive 30–50% of inbound from referrals + direct mention. The trap: founder fatigue at scale; brand can't easily transfer.",
	deepDiveB: "Company brand is the durable asset — visual identity, voice, consistent presence on company channels. Slower to build but doesn't depend on founder time. Indian SaaS at Series B+ typically build company brand to reduce founder-dependency for go-to-market.",
	decisionFlow: [
		"Pre-PMF / pre-Series A? → Founder brand primary.",
		"Series A? → Founder + company in parallel (60/40).",
		"Series B+? → Company brand primary, founder brand secondary (40/60).",
		"PLG SaaS? → Founder brand throughout.",
		"Sales-led SaaS? → Company brand throughout.",
	],
	hybrid: "Founder brand seeds; company brand harvests. Founder LinkedIn + Twitter + podcast appearances; company website + content + social channels. Frameleads' approach: founder thought leadership amplifies + company channels deliver consistent brand experience.",
	faqs: [
		{ question: "What if founder hates social media?", answer: "Then minimize founder brand investment; double down on company brand. Forced founder content reads inauthentic and underperforms. Find founders who genuinely enjoy thought-leadership writing/speaking." },
		{ question: "How much time should founder spend on personal brand?", answer: "5–15 hours/week for best ROI. Below 5 hours, posts irregular — algorithm punishes. Above 15 hours, founder ignores other critical work." },
		{ question: "Can I outsource founder brand to a ghostwriter?", answer: "Partially. Ideas + voice from founder; drafting from ghostwriter; editing + posting from founder. Pure ghostwriting reads inauthentic. Indian SaaS founders commonly use this hybrid (Frameleads' founder included)." },
		{ question: "Should I personal-brand on multiple platforms?", answer: "No — pick 1–2 (LinkedIn always; Twitter or YouTube secondary). Spreading thin produces weak presence on all. Better to dominate one platform than be average on five." },
	],
	ctaText: "Designing brand investment? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "long-form-blogs-vs-podcasts",
	a: { label: "Long-form Blogs", shortName: "Blogs" },
	b: { label: "Podcasts", shortName: "Podcasts" },
	audienceLabel: "B2B + thought-leadership-driven founders",
	intent: "Blogs or podcasts for thought leadership?",
	tldr: [
		"Blogs win on SEO + AIO citation.",
		"Podcasts win on relationship-building + audience intimacy.",
		"Both have permanent roles; most successful operators run both.",
	],
	scorecard: [
		{ criterion: "SEO compounding", a: "Strong", b: "Limited (no transcript = no SEO)" },
		{ criterion: "Production cost", a: "₹3k–₹40k per piece", b: "₹15k–₹1L per episode" },
		{ criterion: "Audience intimacy", a: "Lower", b: "Highest" },
		{ criterion: "Network effect", a: "Limited", b: "Strong (guest network)" },
		{ criterion: "AIO/GEO citation", a: "Strong", b: "Limited (without transcript)" },
		{ criterion: "Founder-time per week", a: "5–10 hours", b: "10–20 hours" },
	],
	deepDiveA: "Long-form blogs are the SEO + AIO + GEO asset class. They rank, get cited, compound. Indian B2B SaaS thought leadership commonly produces 4–8 long-form pieces/month (founder + ghostwriter assist + editorial). Blogs win on durability — a 2026 piece still drives traffic in 2030.",
	deepDiveB: "Podcasts build relationships at scale. Founder + 1 guest per episode = 100+ relationships per year. Indian B2B SaaS founders running weekly podcasts commonly cite the network effect as primary value (sales conversations, partnerships, hiring) — direct revenue is secondary.",
	decisionFlow: [
		"SEO + AIO priority? → Blogs primary.",
		"Network + relationships priority? → Podcasts.",
		"Founder loves writing? → Blogs.",
		"Founder loves talking? → Podcasts.",
		"Both? → Many do; podcasts get transcribed for SEO secondary effect.",
	],
	hybrid: "Pair them: podcast transcripts become long-form blogs (SEO + AIO citation). Indian B2B SaaS founders running weekly podcasts + transcribing each into 2,500-word blog posts get both benefits at minimal extra effort.",
	faqs: [
		{ question: "Can I rank a podcast page on SEO?", answer: "Only with full transcript + structured data (PodcastEpisode schema). Without transcript, podcast pages don't rank well." },
		{ question: "Should I do video podcast or audio-only?", answer: "Video for YouTube + Reels clips; audio for Spotify + Apple. Video has higher upfront cost, more downstream distribution. Most successful 2026 podcasts are video-first." },
		{ question: "What's the realistic frequency?", answer: "Weekly is sustainable for podcasts (1 episode/week × 1 hour record). Monthly works for long-form blogs at 2,500+ words. Below these frequencies, audience growth stalls." },
		{ question: "Should I outsource production?", answer: "Yes, mostly. Founder records + curates; production team edits + posts + transcribes + clips. ₹15k–₹40k/episode for production. Founder time: 1.5–3 hours/week per podcast at this setup." },
	],
	ctaText: "Building thought leadership? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 8 — More tool comparisons (analytics + ops)
// ─────────────────────────────────────────────────────────────────

add({
	slug: "intercom-vs-crisp-for-customer-support",
	a: { label: "Intercom", shortName: "Intercom" },
	b: { label: "Crisp", shortName: "Crisp" },
	audienceLabel: "Indian B2B SaaS + D2C choosing live chat",
	intent: "Intercom or Crisp for customer messaging?",
	tldr: [
		"Intercom wins on automation depth + customer-success workflows.",
		"Crisp wins on price + simplicity for SMB.",
		"Indian B2B SaaS at Series A+ choose Intercom; SMB + early-stage choose Crisp.",
	],
	scorecard: [
		{ criterion: "Pricing (5 seats)", a: "$74+/mo", b: "$25–$95/mo" },
		{ criterion: "Bot / automation depth", a: "Best-in-class", b: "Functional" },
		{ criterion: "Onboarding tours", a: "Strong (Product Tours)", b: "Limited" },
		{ criterion: "Ecosystem integrations", a: "Best-in-class", b: "Solid" },
		{ criterion: "Setup time", a: "1–2 weeks", b: "Days" },
		{ criterion: "Indian timezone + currency", a: "Supported", b: "Supported" },
	],
	deepDiveA: "Intercom is the polished choice for SaaS scale. Workflows, bots, onboarding tours, customer-success automation, NPS surveys, knowledge base. Pricing rises fast at scale ($500+/mo at 10 seats). Best for SaaS Series A+ ready to invest in customer-success infrastructure.",
	deepDiveB: "Crisp is the SMB-friendly alternative. Live chat + email + chatbot + knowledge base at $25–$95/mo for 5 seats. Less feature depth than Intercom but covers core use cases. Indian SMB + early-stage SaaS commonly start with Crisp.",
	decisionFlow: [
		"Pre-Series A SaaS / SMB? → Crisp.",
		"Series A+ with customer success priority? → Intercom.",
		"D2C with simple chat needs? → Crisp.",
		"Need product onboarding tours? → Intercom.",
		"Bot-heavy support? → Intercom.",
	],
	hybrid: "Pick one. Migration Crisp → Intercom common at Series A. Avoid running both; fragments customer history.",
	faqs: [
		{ question: "What about Zendesk?", answer: "Zendesk is enterprise-focused — broader ticketing/support feature set, more expensive. For B2B SaaS, Intercom typically wins on customer-success integration. For larger support orgs, Zendesk wins." },
		{ question: "Is HubSpot's chat sufficient?", answer: "For HubSpot users, yes for basic live chat. Lacks Intercom's automation depth. Many HubSpot users add Intercom for chat + automation." },
		{ question: "Does Crisp work for D2C?", answer: "Yes — Crisp's simpler model fits D2C live chat + post-purchase support. Most Indian D2C don't need Intercom's depth; Crisp delivers value at much lower cost." },
		{ question: "What's the realistic Intercom monthly bill at scale?", answer: "₹25k–₹2L/mo at 10–30 seats. Pricing model includes per-seat + active-people fees that scale fast. Plan for 2–3× expected cost as company scales." },
	],
	ctaText: "Setting up customer messaging? Get a free 30-min audit.",
	primaryHref: "/contact",
});

add({
	slug: "linear-vs-jira-for-product-teams",
	a: { label: "Linear", shortName: "Linear" },
	b: { label: "Jira", shortName: "Jira" },
	audienceLabel: "Indian SaaS + tech teams",
	intent: "Linear or Jira for product/engineering project management?",
	tldr: [
		"Linear wins on UX + speed for modern startups.",
		"Jira wins on enterprise + complex workflows + Atlassian ecosystem.",
		"Most Indian SaaS startups choose Linear; large enterprise + Atlassian-heavy stacks stay Jira.",
	],
	scorecard: [
		{ criterion: "Pricing (10 users)", a: "$80–$140/mo", b: "$78+/mo (Standard)" },
		{ criterion: "UX speed", a: "Best-in-class", b: "Functional" },
		{ criterion: "Customizable workflows", a: "Limited", b: "Strong" },
		{ criterion: "Roadmap features", a: "Strong (Cycles)", b: "Strong (Roadmaps)" },
		{ criterion: "Atlassian ecosystem", a: "No", b: "Yes (Confluence, Bitbucket)" },
		{ criterion: "Best for team size", a: "Up to 50–100", b: "Any size" },
	],
	deepDiveA: "Linear is the modern PM tool — keyboard-driven UX, fast issue creation, GitHub native integration, opinionated workflows. Indian SaaS Series A startups commonly default to Linear. Strengths: speed, opinionated structure, Cycles for sprint cadence.",
	deepDiveB: "Jira is the enterprise standard. Customizable workflows, deep ecosystem (Confluence, Bitbucket), reporting depth. Slower UX. Best for enterprise teams that need workflow customization or already use Atlassian stack.",
	decisionFlow: [
		"Indian SaaS Series A startup? → Linear.",
		"Engineering team under 30? → Linear.",
		"Already on Confluence + Bitbucket? → Jira.",
		"Need custom workflows + reporting? → Jira.",
		"PM hates clicking? → Linear (keyboard-first).",
	],
	hybrid: "Pick one. Migration Jira → Linear (or vice versa) is feasible but disruptive. Most teams stay with their first choice unless explicit pain forces a switch.",
	faqs: [
		{ question: "Can Linear scale to 200+ engineers?", answer: "Yes, but Jira's reporting + customization advantages emerge above ~100. Linear works at scale; some enterprises prefer Jira's depth." },
		{ question: "What about Asana / ClickUp / Monday?", answer: "Asana is general PM, less engineering-focused. ClickUp has feature breadth but UX inconsistency. Monday targets non-engineering teams. For Indian engineering teams, Linear or Jira lead." },
		{ question: "Is Linear's pricing fair vs Jira?", answer: "Comparable at base ($8–$14/user). Linear's value-per-dollar is higher for Indian SaaS startups due to UX speed; Jira's value emerges at enterprise scale." },
		{ question: "Do they integrate with GitHub?", answer: "Both yes. Linear's integration is faster (auto-link branches, auto-close issues). Jira's integration via plugin works but slower." },
	],
	ctaText: "Setting up product ops? Get a free 30-min audit.",
	primaryHref: "/contact",
});

add({
	slug: "stripe-vs-razorpay-for-international",
	a: { label: "Stripe", shortName: "Stripe" },
	b: { label: "Razorpay", shortName: "Razorpay" },
	audienceLabel: "Indian SaaS + D2C with international customers",
	intent: "Stripe or Razorpay for Indian businesses with international customers?",
	tldr: [
		"Stripe wins for international SaaS billing + global payment methods.",
		"Razorpay wins for Indian + South Asian customers (UPI, COD, Indian cards).",
		"Most Indian SaaS with global customers use Stripe + Razorpay together.",
	],
	scorecard: [
		{ criterion: "Indian payment methods", a: "Limited (cards only)", b: "Full (UPI, cards, COD)" },
		{ criterion: "International payment methods", a: "Best-in-class (135+)", b: "Limited" },
		{ criterion: "Subscription billing", a: "Best-in-class", b: "Functional" },
		{ criterion: "Indian regulatory fit", a: "Limited (FEMA + RBI complications)", b: "Native" },
		{ criterion: "Setup ease (India)", a: "Complex (Stripe Atlas etc.)", b: "Simple (Indian KYC)" },
		{ criterion: "Fee structure", a: "2.9% + $0.30", b: "2% + GST" },
	],
	deepDiveA: "Stripe is the international SaaS billing standard. Subscription management, dunning, tax compliance, 135+ payment methods, multi-currency. For Indian SaaS selling globally, Stripe + a US/UK entity (via Stripe Atlas) is the standard path. Indian-only Stripe has limitations.",
	deepDiveB: "Razorpay covers Indian + South Asian customers natively. UPI, all Indian cards, COD, EMI, BNPL. International payment methods limited. Best for Indian-first businesses with selective international.",
	decisionFlow: [
		"Indian-only customers? → Razorpay.",
		"Global SaaS with subscription billing? → Stripe.",
		"Indian + global mixed? → Both (Razorpay for India, Stripe for international).",
		"Need UPI? → Razorpay required.",
		"Need 135+ payment methods? → Stripe required.",
	],
	hybrid: "Many Indian SaaS use both — Razorpay for Indian customers, Stripe for international. Requires routing logic at checkout (detect customer location, route accordingly). Complexity worth it at ₹50L+ revenue with mixed customer base.",
	faqs: [
		{ question: "Can Indian SaaS use Stripe directly?", answer: "Limited — Stripe India has restricted features. Most Indian SaaS using Stripe set up via Stripe Atlas (US entity) or use a Delaware C-Corp parent. Adds compliance overhead." },
		{ question: "What about PayPal?", answer: "Lower trust + higher fees. Used as backup payment option, not primary. Most Indian SaaS pair Razorpay + Stripe rather than adding PayPal." },
		{ question: "Are subscription tools different?", answer: "Yes. Stripe Billing is best-in-class for SaaS subscriptions. Razorpay Subscriptions is functional but less mature. SaaS-heavy Indian businesses commonly use Stripe for subscriptions even with Razorpay for India." },
		{ question: "What about Chargebee or Recurly?", answer: "These add subscription management on top of payment gateways. Worth it for SaaS with complex billing (proration, multi-currency, plan changes). For simple subscription, Stripe Billing or Razorpay Subscriptions suffice." },
	],
	ctaText: "Setting up payments for international? Get a free 30-min audit.",
	primaryHref: "/contact",
});

add({
	slug: "shiprocket-vs-delhivery-for-d2c-fulfillment",
	a: { label: "Shiprocket", shortName: "Shiprocket" },
	b: { label: "Delhivery", shortName: "Delhivery" },
	audienceLabel: "Indian D2C brands choosing fulfillment",
	intent: "Shiprocket or Delhivery for Indian D2C fulfillment?",
	tldr: [
		"Shiprocket wins for SMB D2C — multi-courier aggregator with discounted rates.",
		"Delhivery wins for direct-courier engagement + tier-1 quality + scale brands.",
		"Most Indian D2C up to ₹3Cr/year use Shiprocket; ₹3Cr+ evaluate Delhivery direct.",
	],
	scorecard: [
		{ criterion: "Pricing model", a: "Multi-courier aggregator (rates negotiated)", b: "Direct courier (volume-tied rates)" },
		{ criterion: "Pricing (D2C ₹50L revenue)", a: "₹35–₹70 per package", b: "₹40–₹80 per package" },
		{ criterion: "Tier-2/3 city coverage", a: "Strong (multiple couriers)", b: "Strong (own network)" },
		{ criterion: "Self-serve onboarding", a: "1 day", b: "2–3 weeks" },
		{ criterion: "RTO management", a: "Built-in dashboard", b: "Direct integration" },
		{ criterion: "Best for stage", a: "SMB D2C", b: "Mid-market+ D2C" },
	],
	deepDiveA: "Shiprocket aggregates 17+ couriers under one dashboard. Indian D2C brands ship via Bluedart, Delhivery, FedEx, DTDC, Ekart, Xpressbees through Shiprocket — getting volume-discounted rates. Best for SMB D2C (sub-₹3Cr/yr) where direct courier negotiation is hard.",
	deepDiveB: "Delhivery is India's largest standalone courier. Direct integration delivers cheaper rates at scale + better service-quality control. Onboarding is slower (3-week negotiation + integration). Best for ₹3Cr+/yr brands wanting direct-courier relationship.",
	decisionFlow: [
		"Sub-₹50L/yr revenue? → Shiprocket (aggregator economics win).",
		"₹50L–₹3Cr/yr? → Shiprocket primary; evaluate Delhivery for tier-1 deliveries.",
		"₹3Cr+/yr? → Delhivery direct + Shiprocket as backup.",
		"Tier-2/3 dominant audience? → Shiprocket (multi-courier reach).",
		"Need RTO automation? → Shiprocket.",
	],
	hybrid: "Many ₹3Cr+ D2C brands use both — Delhivery for tier-1 metro deliveries, Shiprocket for tier-2/3 + backup. Or split: Shiprocket for prepaid orders, Delhivery for COD. Test and optimize per brand.",
	faqs: [
		{ question: "What's the realistic shipping cost in Indian D2C?", answer: "₹35–₹80/package depending on weight, distance, courier. Average across Indian D2C: ₹50–₹65/package. Negotiate at scale; rates drop 15–25% above 5,000 packages/month." },
		{ question: "Are there other aggregators?", answer: "Yes — iThink Logistics, ClickPost, Pickrr (now part of Shiprocket). Shiprocket has dominant share. Pickrr was popular for tier-2/3 but acquisition + integration choices favor Shiprocket today." },
		{ question: "How do I reduce RTO?", answer: "Address verification at checkout, OTP confirmation before dispatch, prepaid discount nudge, RTO-prediction by pin code. Both Shiprocket + Delhivery support these. Shiprocket's dashboard is more friendly for SMB." },
		{ question: "Should I use Bluedart or FedEx for premium D2C?", answer: "Premium D2C with high AOV + tier-1 audience: yes for Bluedart (premium service). Most D2C use cheaper couriers via Shiprocket; Bluedart adds 30–50% cost premium for service-quality lift." },
	],
	ctaText: "Optimizing D2C fulfillment? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "google-ads-vs-bing-ads",
	a: { label: "Google Ads", shortName: "Google" },
	b: { label: "Bing Ads (Microsoft Advertising)", shortName: "Bing" },
	audienceLabel: "Indian advertisers evaluating search reach",
	intent: "Should Indian advertisers use Bing Ads alongside Google?",
	tldr: [
		"Google captures 95%+ of Indian search traffic.",
		"Bing reach in India is small but cheaper CPCs.",
		"Most Indian B2B SaaS skip Bing; some D2C add Bing for incremental volume at low cost.",
	],
	scorecard: [
		{ criterion: "Indian search market share", a: "95–96%", b: "2–3%" },
		{ criterion: "CPC vs Google", a: "Baseline", b: "30–50% lower" },
		{ criterion: "Audience demographics", a: "Broad", b: "Slightly older + desktop-skewed" },
		{ criterion: "Setup ease", a: "Standard", b: "Easy (auto-import from Google Ads)" },
		{ criterion: "Tooling depth", a: "Best-in-class", b: "Functional" },
		{ criterion: "ROI for B2B SaaS", a: "Primary", b: "Marginal" },
	],
	deepDiveA: "Google Ads is the only meaningful search ad platform in India. 95%+ search market share. Tooling depth (PMax, Search, Display, YouTube) is unmatched. Indian SaaS + D2C build paid Search on Google primarily.",
	deepDiveB: "Bing Ads in India is a small platform — 2–3% search share. CPCs are 30–50% lower than Google. Best as a layered add-on for incremental volume (5–10% of paid traffic) — not a replacement for Google.",
	decisionFlow: [
		"Indian-only audience, all stages? → Google primary.",
		"Indian B2B SaaS? → Google only; Bing not worth the operational overhead.",
		"Indian D2C with extra budget? → Google primary + Bing 5–10% supplement.",
		"International audience (US/UK)? → Bing more relevant (15–20% search share).",
		"Auto-import Google → Bing? → Cheap experiment at low setup cost.",
	],
	hybrid: "Run both for incremental volume — but Bing as 5–10% of paid budget, not primary. Bing's auto-import-from-Google feature makes setup minimal. Worth the experiment for D2C above ₹15L/mo paid spend; rarely worth for B2B SaaS in India.",
	faqs: [
		{ question: "Why is Bing's market share so low in India?", answer: "Android (Google default) dominates Indian smartphones. Default search = Google. Bing's share concentrated in older + desktop-using audiences." },
		{ question: "Can I get away with Bing-only?", answer: "No. Indian search demand is on Google. Bing alone leaves 95%+ traffic uncaptured. Even at lower CPCs, total volume is too small." },
		{ question: "Are CPCs really lower on Bing?", answer: "Yes — 30–50% lower for the same query. The math: lower CPC × lower volume = small absolute impact for most Indian advertisers." },
		{ question: "What about Yandex or Baidu?", answer: "Yandex (Russia) + Baidu (China) — irrelevant for Indian advertisers unless explicitly targeting those markets." },
	],
	ctaText: "Optimizing paid search? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 9 — Closing comparisons (10 to fill remaining)
// ─────────────────────────────────────────────────────────────────

add({
	slug: "youtube-vs-linkedin-for-b2b-content",
	a: { label: "YouTube", shortName: "YouTube" },
	b: { label: "LinkedIn", shortName: "LinkedIn" },
	audienceLabel: "Indian B2B SaaS thought leadership",
	intent: "YouTube or LinkedIn for B2B content distribution?",
	tldr: [
		"LinkedIn dominates B2B reach + decision-maker access in India.",
		"YouTube wins on long-form depth + searchable discovery.",
		"Most Indian B2B SaaS lean LinkedIn; YouTube as long-form companion.",
	],
	scorecard: [
		{ criterion: "B2B reach (India)", a: "Smaller", b: "Largest" },
		{ criterion: "Decision-maker access", a: "Limited", b: "Direct" },
		{ criterion: "Content lifespan", a: "Years (search-led)", b: "Days–weeks (feed)" },
		{ criterion: "Production cost", a: "₹15k–₹2L per video", b: "₹500–₹5k per post" },
		{ criterion: "SEO/discovery", a: "Strong", b: "Limited" },
		{ criterion: "Founder time per piece", a: "2–6 hours", b: "30–90 minutes" },
	],
	deepDiveA: "YouTube for B2B SaaS = long-form thought leadership + tutorials + customer interviews. Compounds via search. Higher production cost. Best as the deep-content asset that LinkedIn + Twitter clip from. Indian B2B SaaS commonly produce 2–4 videos/month.",
	deepDiveB: "LinkedIn is the B2B distribution king in India. Decision-makers active daily. Posts decay in days but reach is direct. Indian B2B SaaS founders posting 3–5x/week on LinkedIn commonly drive 30–50% of inbound + most ABM warming.",
	decisionFlow: [
		"Indian B2B SaaS prioritizing reach? → LinkedIn primary.",
		"Founder loves long-form thinking? → YouTube + LinkedIn.",
		"Need SEO discovery? → YouTube (transcripts + descriptions).",
		"Limited founder time? → LinkedIn (lower per-piece cost).",
		"PLG SaaS with educational content? → YouTube tutorials + LinkedIn promotion.",
	],
	hybrid: "Repurposing model: 1 YouTube video → 5–7 LinkedIn posts (clips + carousel + text). Both channels benefit. Indian B2B SaaS founders running this model produce 12+ distribution units per recording session.",
	faqs: [
		{ question: "Should B2B founders be on YouTube?", answer: "If you have something to say in long-form (tutorials, frameworks, deep takes), yes. If your value is short hot takes, LinkedIn alone is enough. Don't force YouTube without long-form content fit." },
		{ question: "What's a realistic LinkedIn frequency?", answer: "3–5 posts/week. Below 3, algorithm reduces reach. Above 5, audience fatigue. Mix: 2 thought-leadership posts, 2 tactical posts, 1 personal/reflection." },
		{ question: "Does LinkedIn organic still work in 2026?", answer: "Yes — algorithm favors content over connections. Founders + employees with consistent posting + comment engagement see 5–10× organic reach vs sporadic posters." },
		{ question: "Can I outsource LinkedIn posts?", answer: "Partially — voice-aligned ghostwriter drafts; founder edits + posts. Pure outsourced posts read inauthentic; algorithm + audience punish." },
	],
	ctaText: "Distributing B2B content? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "diwali-vs-black-friday-for-indian-d2c",
	a: { label: "Diwali", shortName: "Diwali" },
	b: { label: "Black Friday / Cyber Monday", shortName: "BFCM" },
	audienceLabel: "Indian D2C brands planning festival campaigns",
	intent: "Diwali or Black Friday — which festival drives more Indian D2C revenue?",
	tldr: [
		"Diwali revenue is typically 1.5–2.5× Black Friday for Indian-only D2C.",
		"For brands serving NRIs / global, BFCM matters too.",
		"Most Indian D2C should over-invest in Diwali; treat BFCM as supplementary.",
	],
	scorecard: [
		{ criterion: "Indian D2C revenue lift", a: "1.5–2.5× Q4 baseline", b: "0.7–1.5× Q4 baseline" },
		{ criterion: "AOV uplift", a: "30–50% (gifting)", b: "10–25%" },
		{ criterion: "CPM during festival", a: "+50–80%", b: "+30–50%" },
		{ criterion: "Campaign duration", a: "5 weeks (Dussehra to Bhai Dooj)", b: "1 week (Wednesday to Cyber Monday)" },
		{ criterion: "Best for category", a: "All D2C", b: "Tech-heavy + global D2C" },
		{ criterion: "Pre-event lead time", a: "8 weeks build", b: "4 weeks build" },
	],
	deepDiveA: "Diwali is the largest commerce moment in Indian D2C — gifting + family-centric + AOV uplift. Indian D2C brands commonly drive 15–25% of annual revenue in the 5-week Diwali window. Plan 8 weeks ahead: pre-Dussehra audience build → Dhanteras peak conversion → post-Diwali retention.",
	deepDiveB: "Black Friday / Cyber Monday is significant for Indian D2C with global / NRI audiences. For Indian-only brands, BFCM reach is smaller. Some Indian D2C brands run BFCM as a discount-led volume push but often at the cost of margin without Diwali-style lift.",
	decisionFlow: [
		"Indian-only audience? → Diwali primary; BFCM secondary or skip.",
		"Indian + NRI audience? → Both; allocate budget proportional to audience split.",
		"Global audience? → BFCM primary; Diwali for India market.",
		"Premium D2C (high AOV gifting)? → Diwali heavily; lighter BFCM.",
		"Tech / electronics D2C? → BFCM matters more than for fashion / beauty.",
	],
	hybrid: "Run both with appropriate weighting. Indian D2C beauty + fashion: 80% Diwali / 20% BFCM. Indian D2C electronics: 50/50. Global D2C: 30% Diwali / 70% BFCM. Match investment to audience composition.",
	faqs: [
		{ question: "When should I start Diwali planning?", answer: "8–10 weeks before Diwali. Inventory by week -8, creative production by week -6, paid budget locked by week -4, audience builds week -8 to -2, peak campaigns weeks 0 to +2." },
		{ question: "Does Indian D2C see iCafe or Eid spikes?", answer: "Eid matters for D2C with Muslim audience (Hyderabad, parts of UP, Gulf NRI). Onam matters for Kerala D2C. Pongal for Tamil Nadu. Local festivals matter; national + global events still dominate." },
		{ question: "Should I discount aggressively at Diwali?", answer: "Strategic discounting yes; aggressive no. Indian D2C buyers expect Diwali offers but over-discounting trains them to wait. Bundle offers + free gifts + tiered cashback often outperform pure discount." },
		{ question: "How much should I allocate to Diwali?", answer: "20–30% of annual paid budget concentrated in 5 weeks. Some brands go higher (40%) for years where Diwali is critical (turnaround year, new launch year). Don't underspend — Diwali is the biggest concentrated revenue moment." },
	],
	ctaText: "Planning Diwali campaigns? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "first-purchase-discount-vs-loyalty-program",
	a: { label: "First-Purchase Discount", shortName: "First-Discount" },
	b: { label: "Loyalty Program", shortName: "Loyalty" },
	audienceLabel: "Indian D2C brands designing customer economics",
	intent: "First-purchase discount or loyalty program — which drives D2C unit economics?",
	tldr: [
		"First-purchase discount drives acquisition; loyalty program drives retention.",
		"Both have permanent roles; sequence them at brand maturity.",
		"Don't run loyalty pre-PMF; don't skip first-discount post-PMF.",
	],
	scorecard: [
		{ criterion: "Function", a: "Acquisition trigger", b: "Retention multiplier" },
		{ criterion: "Best for stage", a: "Pre-PMF + early-PMF", b: "Post-PMF, year 2+" },
		{ criterion: "Margin impact", a: "10–25% margin sacrifice", b: "Engineered to be margin-neutral" },
		{ criterion: "Operational complexity", a: "Low", b: "Medium-high" },
		{ criterion: "LTV impact", a: "Limited", b: "Direct (10–30% lift)" },
		{ criterion: "Setup time", a: "Days", b: "4–8 weeks" },
	],
	deepDiveA: "First-purchase discount (10–20% off first order) is the standard D2C acquisition lever. Reduces friction for first purchase + offsets COD risk. Indian D2C brands commonly run 10% first-purchase discounts; deeper (20%) for premium AOV. The trap: training customers to expect discount on every purchase if not paired with loyalty.",
	deepDiveB: "Loyalty program (points + tiers + perks) compounds retention. Indian D2C brands at year 2+ commonly add loyalty programs to drive 15–30% LTV lift. Examples: Mamaearth's Mamaland, Boat's Boat Vibe, Sugar Cosmetics' Sugar Pop. Operational complexity is real (program design, fraud prevention, redemption flows).",
	decisionFlow: [
		"Pre-launch / pre-PMF? → First-discount only; no loyalty yet.",
		"Year 1 PMF? → First-discount + simple welcome-flow incentive.",
		"Year 2+ post-PMF? → Both; loyalty program for repeat customers.",
		"Subscription business? → Loyalty in form of subscription discount.",
		"Premium positioning? → Skip first-discount; tiered loyalty only.",
	],
	hybrid: "Sequence both. First-discount drives acquisition (year 1); loyalty program drives retention (year 2+). The combo: first-time buyers get 10% off + 100 loyalty points; loyalty program multiplies retention thereafter.",
	faqs: [
		{ question: "Does first-purchase discount hurt brand?", answer: "Premium brands skip it (luxury positioning). Mass + mid-market brands need it for friction reduction. Discount magnitude depends on positioning; 10% rarely hurts; 30%+ commoditizes." },
		{ question: "Are loyalty programs worth the operational cost?", answer: "At ₹50L+/mo revenue with 25%+ repeat purchase rate, yes. Below that, the operational complexity often exceeds the LTV lift. Most Indian D2C add loyalty post ₹50L/mo." },
		{ question: "What about referral programs?", answer: "Different lever — referral drives acquisition via existing customers. Best paired with loyalty (existing customers earn loyalty points for referrals). Indian D2C referral programs typically 5–10% of new customer acquisition at year 2+." },
		{ question: "Tools for Indian D2C loyalty?", answer: "Smile.io (Shopify-native, popular), LoyaltyLion (deeper customization), Yotpo Loyalty (combines with reviews). Most Indian D2C use Smile.io for first program." },
	],
	ctaText: "Designing customer economics? Get a free 30-min D2C audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

// ─────────────────────────────────────────────────────────────────
// Section 10 — Final 8 to reach 50
// ─────────────────────────────────────────────────────────────────

add({
	slug: "wati-vs-cloud-api-direct",
	a: { label: "WhatsApp BSP (Wati / Interakt)", shortName: "BSP" },
	b: { label: "WhatsApp Cloud API Direct", shortName: "Cloud API" },
	audienceLabel: "Indian businesses scaling WhatsApp marketing",
	intent: "BSP or Cloud API direct for WhatsApp at scale?",
	tldr: [
		"BSP wins for SMB + speed-to-launch + dashboard tooling.",
		"Cloud API direct wins for engineering-led teams at 200k+ messages/month.",
		"Most Indian D2C use BSPs; some scale-stage move to Cloud API direct.",
	],
	scorecard: [
		{ criterion: "Setup time", a: "5–7 days", b: "3–6 weeks" },
		{ criterion: "Per-message markup", a: "15–30% over Meta cost", b: "Meta cost only" },
		{ criterion: "Dashboard / agent inbox", a: "Built-in", b: "Build yourself" },
		{ criterion: "Custom workflows", a: "Limited", b: "Unlimited" },
		{ criterion: "Best for monthly volume", a: "Up to 200k", b: "200k+ messages/month" },
		{ criterion: "Engineering required", a: "Light", b: "Significant" },
	],
	deepDiveA: "BSPs (Wati, Interakt, Gallabox) abstract Meta's WhatsApp API behind a clean dashboard. Approval workflow + agent inbox + automation are pre-built. Pay 15–30% markup over Meta's per-message cost. Best for Indian D2C up to 200k messages/month — operational simplicity wins.",
	deepDiveB: "Cloud API direct: integrate WhatsApp Cloud API directly into your stack. Zero markup on per-message cost (Meta's rates only). Trade-off: build everything yourself — agent inbox, template management, automation, compliance. Engineering investment ₹15L+; payoff at 200k+ messages/month.",
	decisionFlow: [
		"Sub-50k messages/month? → BSP (operational simplicity).",
		"50k–200k messages/month? → BSP still wins on TCO.",
		"200k+ messages/month + engineering team? → Cloud API direct.",
		"Need custom workflows BSP can't deliver? → Cloud API direct.",
		"Indian SMB with under ₹15k/mo budget? → BSP.",
	],
	hybrid: "Most Indian D2C stay on BSP through scale. Cloud API direct makes sense only for top brands (Mamaearth, Boat tier) or specific engineering-driven use cases. Migration BSP → Cloud API takes 6–12 weeks and disrupts marketing operations.",
	faqs: [
		{ question: "What's the actual cost saving moving to Cloud API direct?", answer: "15–30% on per-message cost (BSP markup). At 100k messages/month, that's ₹12k–₹25k/month saved — usually less than the engineering cost of building + maintaining direct integration." },
		{ question: "Can I switch BSPs easily?", answer: "1–2 weeks transition. Export contacts + recreate templates (each requires Meta re-approval). Plan for marketing pause during transition. More common than Cloud API migration." },
		{ question: "What about hybrid — BSP for marketing + Cloud API for transactional?", answer: "Possible but complex. Most brands stick with one for simplicity. Cloud API direct typically only adopted when going all-in." },
		{ question: "Are BSPs DPDP-compliant?", answer: "BSPs provide tooling for DPDP compliance (opt-in capture, consent logs) but ultimate compliance is the brand's responsibility. Both BSP and Cloud API direct require explicit opt-in for marketing templates." },
	],
	ctaText: "Scaling WhatsApp ops? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "monthly-vs-annual-billing-for-saas",
	a: { label: "Monthly Billing", shortName: "Monthly" },
	b: { label: "Annual Billing (with discount)", shortName: "Annual" },
	audienceLabel: "Indian B2B SaaS designing pricing model",
	intent: "Should B2B SaaS push monthly or annual billing?",
	tldr: [
		"Annual billing improves cash flow + reduces churn risk.",
		"Monthly billing increases trial-to-paid + reduces commitment friction.",
		"Most Indian B2B SaaS offer both with 15–25% annual discount; track mix carefully.",
	],
	scorecard: [
		{ criterion: "Cash flow impact", a: "Stretched", b: "Front-loaded (12-month upfront)" },
		{ criterion: "Trial-to-paid friction", a: "Lower", b: "Higher" },
		{ criterion: "Churn risk", a: "Higher (monthly decision)", b: "Lower (locked in 12 months)" },
		{ criterion: "Standard discount for annual", a: "0%", b: "15–25% off" },
		{ criterion: "Indian B2B SaaS annual mix", a: "30–60%", b: "40–70%" },
		{ criterion: "Forecast predictability", a: "Lower", b: "Higher" },
	],
	deepDiveA: "Monthly billing is the friction-light option — easier trial-to-paid conversion, customer can cancel anytime. Trade-off: higher churn, less predictable revenue, slower cash flow. Indian B2B SaaS pre-Series A often skew monthly to maximize early conversions.",
	deepDiveB: "Annual billing locks in 12-month commitment. Standard 15–25% discount incentive. Better cash flow, lower churn, more predictable forecast. Trade-off: higher trial-to-paid friction. Indian B2B SaaS Series A+ commonly push annual via 20% discount + onboarding bonuses.",
	decisionFlow: [
		"Pre-Series A SaaS? → Both with 15% annual discount.",
		"Series A+? → Both with 20–25% annual discount + sales push for annual.",
		"PLG self-serve? → Monthly default with annual upsell.",
		"Sales-led SaaS? → Annual primary; monthly only on request.",
		"Cash-strapped SaaS? → Push annual aggressively.",
	],
	hybrid: "Offer both. Default to annual in pricing display; monthly available on request or via toggle. Standard 20% annual discount. Track mix monthly — healthy SaaS should see annual mix grow over time as customer trust builds.",
	faqs: [
		{ question: "What's the typical annual discount?", answer: "15–25% off monthly equivalent. 20% is the standard. Below 15%, customers feel insufficient value; above 25%, monthly becomes uneconomic for the business." },
		{ question: "Will pushing annual hurt conversion?", answer: "Yes by 10–25% on first-touch conversion. Offset: lower churn + better cash flow + better forecast. Net economic impact usually positive at scale." },
		{ question: "Should I offer multi-year deals?", answer: "Enterprise yes (with deeper discount, e.g., 30% for 3 years). SMB rarely; complexity exceeds benefit." },
		{ question: "Can I auto-renew annual contracts?", answer: "Yes — most Indian B2B SaaS auto-renew with 30-day notice. Compliant with consumer protection laws if disclosed at signup. Don't auto-renew without clear disclosure." },
	],
	ctaText: "Designing SaaS pricing? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "seo-content-vs-paid-content-distribution",
	a: { label: "SEO Content", shortName: "SEO" },
	b: { label: "Paid Content Distribution", shortName: "Paid Distribution" },
	audienceLabel: "Content marketing teams",
	intent: "SEO content or paid distribution — which builds organic content reach?",
	tldr: [
		"SEO compounds; paid distribution amplifies fast but resets.",
		"Both have permanent roles in content marketing.",
		"Most B2B SaaS allocate 70% SEO + 30% paid distribution.",
	],
	scorecard: [
		{ criterion: "Time to first reach", a: "Months", b: "Days" },
		{ criterion: "Compounding effect", a: "Strong", b: "Linear" },
		{ criterion: "Cost per content piece", a: "Production cost only", b: "Production + ongoing distribution" },
		{ criterion: "Audience precision", a: "Search-intent led", b: "Demographic targeting" },
		{ criterion: "Best for content type", a: "Long-form + decision-stage", b: "Awareness + thought leadership" },
		{ criterion: "Long-tail capture", a: "Strong", b: "Limited" },
	],
	deepDiveA: "SEO content is the compounding asset. Each piece ranks → keeps producing traffic. India B2B SaaS with mature SEO: each long-form blog drives 200–2,000 monthly visits at year 2+. Investment is upfront (research + draft + editorial); return runs for years.",
	deepDiveB: "Paid content distribution = LinkedIn Sponsored Content + Meta promoted posts + Twitter Ads + native ads (Outbrain, Taboola). Amplifies content reach immediately. Useful for hot-take posts, time-sensitive content, ABM-tied awareness. Doesn't compound.",
	decisionFlow: [
		"Long-form decision-stage content? → SEO primary.",
		"Time-sensitive announcements? → Paid distribution.",
		"Top-of-funnel thought leadership? → Both; SEO + paid LinkedIn.",
		"Niche ABM-targeted content? → Paid LinkedIn (precision).",
		"Limited budget? → SEO (production cost only).",
	],
	hybrid: "Use both. SEO is the asset class; paid is the amplification. Each long-form post: SEO-engineer for ranking + amplify via LinkedIn for first-week reach. Paid distribution gives the post a head start; SEO carries it long-term.",
	faqs: [
		{ question: "Should I pay for content distribution if SEO works?", answer: "Yes for time-sensitive content + ABM. Skip for evergreen long-form (SEO carries it). The right mix depends on time-to-revenue urgency." },
		{ question: "What's a fair paid distribution budget?", answer: "20–30% of content marketing budget. Below 20%, paid is too thin to test; above 40%, dependence shifts away from organic compounding." },
		{ question: "Are LinkedIn promoted posts worth it?", answer: "For B2B yes, especially when paired with SEO. Promoted posts to relevant ICP audiences amplify reach 3–10× organic. Cost: ₹500–₹2,000 per 1k impressions in India." },
		{ question: "Does AI Overview hurt SEO content?", answer: "Compresses click traffic to top-3 ranks. But AIO citations preserve visibility. Strategy: optimize for AIO citation alongside ranking." },
	],
	ctaText: "Distributing content effectively? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

add({
	slug: "vertical-saas-vs-horizontal-saas",
	a: { label: "Vertical SaaS", shortName: "Vertical" },
	b: { label: "Horizontal SaaS", shortName: "Horizontal" },
	audienceLabel: "Indian SaaS founders evaluating market positioning",
	intent: "Should I build vertical (industry-specific) or horizontal (cross-industry) SaaS?",
	tldr: [
		"Vertical SaaS wins on retention + ACV in narrow markets.",
		"Horizontal SaaS wins on TAM + scale potential.",
		"Indian SaaS landscape favors vertical for category leadership; horizontal for global ambition.",
	],
	scorecard: [
		{ criterion: "TAM (typical)", a: "Smaller (₹100Cr–₹5,000Cr)", b: "Larger (₹5,000Cr+)" },
		{ criterion: "Customer retention", a: "Higher (deep fit)", b: "Lower" },
		{ criterion: "ACV potential", a: "Higher per customer", b: "Lower per customer" },
		{ criterion: "Marketing efficiency", a: "Sharper ICP", b: "Broader audience" },
		{ criterion: "Go-to-market motion", a: "ABM + community", b: "PLG + content" },
		{ criterion: "Indian examples", a: "DarwinBox (HR), KhataBook (kirana)", b: "Notion-clones (productivity)" },
	],
	deepDiveA: "Vertical SaaS targets one industry deeply. Examples: DarwinBox (HR for India + APAC), KhataBook (kirana shop ops), TymeStack (real estate). Strengths: deep fit drives retention + ACV; community network effect; sharper marketing ICP. Constraint: TAM bounded by industry size.",
	deepDiveB: "Horizontal SaaS works across industries. Examples: Notion (productivity), Linear (project mgmt), Razorpay (payments). Strengths: large TAM + scale potential. Constraint: weaker fit per industry → higher churn; broader marketing message; tougher ABM.",
	decisionFlow: [
		"Indian-only TAM target? → Vertical SaaS (clearer category leadership).",
		"Global TAM ambition? → Horizontal SaaS (scale matters).",
		"Niche industry expertise (founder background)? → Vertical SaaS.",
		"Broad use case (productivity, comms)? → Horizontal SaaS.",
		"Want category-king positioning? → Vertical SaaS.",
	],
	hybrid: "Some SaaS launch vertical and expand horizontal at scale. Razorpay started as payments-for-online (horizontal-ish) and added vertical depth (BFSI, retail, B2B). DarwinBox started HR-vertical and expanded geo-horizontal. Don't try to be both at launch.",
	faqs: [
		{ question: "Which has better unit economics?", answer: "Vertical typically — higher ACV + lower CAC due to sharper ICP. Horizontal SaaS economics work at scale via volume; per-customer economics tighter." },
		{ question: "Is the Indian market deep enough for vertical SaaS?", answer: "Yes for major industries (BFSI, retail, healthcare, real estate, edtech). Smaller verticals require global expansion early." },
		{ question: "What about category-creation horizontal SaaS?", answer: "Hardest path; high failure rate. Examples that worked: Slack, Notion. For Indian market, category creation is even harder due to smaller TAM." },
		{ question: "Can I pivot vertical → horizontal?", answer: "Possible but rare. More common: vertical → adjacent vertical (e.g., HR for IT → HR for retail). Pure horizontal pivot from vertical risks losing original moat." },
	],
	ctaText: "Positioning your SaaS? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "free-trial-vs-freemium-for-saas",
	a: { label: "Free Trial (time-limited)", shortName: "Free Trial" },
	b: { label: "Freemium (feature/usage-limited)", shortName: "Freemium" },
	audienceLabel: "Indian SaaS designing acquisition funnel",
	intent: "Free trial or freemium for SaaS conversion?",
	tldr: [
		"Free trial drives urgency-led conversion at higher rates.",
		"Freemium drives larger top-funnel + viral expansion.",
		"Choose based on time-to-value: <1 hour = freemium, 1+ days = free trial.",
	],
	scorecard: [
		{ criterion: "Top-funnel volume", a: "Smaller", b: "Largest" },
		{ criterion: "Trial-to-paid conversion", a: "10–25%", b: "2–8%" },
		{ criterion: "Time-to-paid", a: "14–30 days", b: "30–180+ days" },
		{ criterion: "Best for time-to-value", a: "1+ days", b: "Under 1 hour" },
		{ criterion: "Viral expansion", a: "Limited", b: "Strong (free users invite)" },
		{ criterion: "Revenue per top-funnel signup", a: "Higher", b: "Lower (in absolute INR)" },
	],
	deepDiveA: "Free trial gives time-limited full access (typically 14 days). Forces urgency-led decision. Higher conversion rate (10–25%). Best for products where time-to-value is 1+ days — needs evaluation period to demonstrate value.",
	deepDiveB: "Freemium gives forever-free with feature/usage limits. Larger top-funnel; viral expansion via free-user network effects (invite teammates). Lower per-user conversion (2–8%) but absolute volumes higher. Best for products with under-1-hour time-to-value + collaborative use cases.",
	decisionFlow: [
		"Time-to-value <1 hour + collaborative? → Freemium.",
		"Time-to-value 1+ days requiring evaluation? → Free trial.",
		"PLG with viral team-extension? → Freemium.",
		"Sales-led SaaS? → Free trial or no free option.",
		"Indian SMB SaaS? → Free trial (urgency drives conversion).",
	],
	hybrid: "Some SaaS run both — freemium tier for free users + free trial for higher tiers. Notion: freemium personal + 14-day trial Plus/Business. Slack: freemium team + sales-led Enterprise. The hybrid optimizes both top-funnel + conversion.",
	faqs: [
		{ question: "Can I switch from free trial to freemium (or vice versa)?", answer: "Possible but disruptive. Free trial → freemium usually expands top-funnel but tanks conversion rate. Freemium → free trial usually contracts top-funnel but lifts conversion. Test on segments before full switch." },
		{ question: "What's a healthy trial-to-paid conversion?", answer: "10–20% for time-limited free trial, 2–6% for freemium. Below these, top-funnel quality issues; above, possibly under-investing in growth (excessive qualification)." },
		{ question: "Should I require credit card for free trial?", answer: "Reduces top-funnel 30–50%; increases trial-to-paid conversion 1.5–2×. Net economic impact usually mildly positive but increases friction. Test for your audience." },
		{ question: "How long should free trial be?", answer: "14 days standard. Shorter (7) increases urgency; longer (30) reduces. Most Indian SaaS standardize on 14 days. Enterprise products sometimes 30 days for proper evaluation." },
	],
	ctaText: "Designing SaaS acquisition? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit?industry=b2b-saas",
});

add({
	slug: "open-source-vs-proprietary-tools",
	a: { label: "Open Source Tools", shortName: "Open Source" },
	b: { label: "Proprietary Tools", shortName: "Proprietary" },
	audienceLabel: "Engineering + marketing ops teams",
	intent: "Open source or proprietary tools for marketing tech stack?",
	tldr: [
		"Open source wins on cost + customization at engineering-led teams.",
		"Proprietary wins on time-to-value + support at scale.",
		"Most teams use proprietary for marketing core + open source for engineering-adjacent.",
	],
	scorecard: [
		{ criterion: "Cost", a: "Free / hosting only", b: "Subscription" },
		{ criterion: "Time-to-value", a: "Slow (setup)", b: "Fast (turnkey)" },
		{ criterion: "Customization", a: "Unlimited", b: "Limited" },
		{ criterion: "Support quality", a: "Community-driven", b: "Paid support" },
		{ criterion: "Total cost of ownership", a: "Engineering-heavy", b: "Subscription-heavy" },
		{ criterion: "Compliance + security", a: "Self-managed", b: "Vendor-managed" },
	],
	deepDiveA: "Open source examples in marketing: Mautic (marketing automation), Strapi (CMS), Plausible (analytics), Cal.com (scheduling). Strengths: free + customizable + data-ownership. Trade-offs: hosting + maintenance + slower velocity. Best for engineering-led teams.",
	deepDiveB: "Proprietary: HubSpot, Klaviyo, Calendly, Webflow. Strengths: turnkey + paid support + faster time-to-value. Trade-offs: cost + vendor lock-in + customization limits. Best for marketing-led teams without engineering.",
	decisionFlow: [
		"Marketing-led team without engineers? → Proprietary.",
		"Engineering-led team with bandwidth? → Open source where appropriate.",
		"Compliance / data-residency critical? → Open source (self-hosted).",
		"Speed-to-launch priority? → Proprietary.",
		"At scale with custom workflows? → Mixed (proprietary core + open source extensions).",
	],
	hybrid: "Most successful teams use proprietary for core marketing operations (HubSpot, Klaviyo) + open source for engineering-adjacent tooling (Strapi for content, Plausible for analytics). The mix optimizes time-to-value + customization.",
	faqs: [
		{ question: "Is open source really cheaper at scale?", answer: "Cheaper in subscription cost; more expensive in engineering time. Calculate fully-loaded — at small scale, proprietary almost always wins TCO. At large scale, open source can win if engineering team has bandwidth." },
		{ question: "What about hybrid like WordPress?", answer: "WordPress is open source but typically used with hosted services (Pantheon, WP Engine) and paid plugins. Practically a hybrid model. Most Indian businesses fall into this 'managed open source' pattern." },
		{ question: "Are open source tools secure?", answer: "Depends on maintenance. Active projects (Strapi, Cal.com, Plausible) get security updates. Abandoned projects become risk. Verify project health before adopting." },
		{ question: "Can I switch from proprietary to open source?", answer: "Possible but disruptive. Migrations from HubSpot to Mautic, Klaviyo to Sendgrid + Mautic, etc. require 4–8 weeks engineering. Benefit emerges over years; weigh carefully." },
	],
	ctaText: "Designing marketing stack? Get a free 30-min audit.",
	primaryHref: "/contact",
});

add({
	slug: "mobile-app-vs-mobile-web-for-d2c",
	a: { label: "Mobile App", shortName: "App" },
	b: { label: "Mobile Web", shortName: "Mobile Web" },
	audienceLabel: "Indian D2C brands evaluating channel investment",
	intent: "Mobile app or mobile web for Indian D2C?",
	tldr: [
		"App wins on retention + repeat-purchase economics at scale.",
		"Mobile web wins on first-purchase acquisition + reach.",
		"Most Indian D2C brands launch web-first; app investment after ₹5Cr+ revenue.",
	],
	scorecard: [
		{ criterion: "Time to first purchase", a: "Slower (install friction)", b: "Faster" },
		{ criterion: "Repeat-purchase rate uplift", a: "+25–60%", b: "Baseline" },
		{ criterion: "AOV uplift", a: "+15–30%", b: "Baseline" },
		{ criterion: "Build cost", a: "₹15L–₹2Cr+", b: "Already built" },
		{ criterion: "Marketing dependency", a: "App store + push", b: "Web ad ecosystem" },
		{ criterion: "Best for stage", a: "₹5Cr+/yr revenue", b: "All stages" },
	],
	deepDiveA: "Mobile apps lift D2C economics significantly post-PMF. Push notifications drive 30–60% higher repeat-purchase rate. AOV often 15–30% higher (smoother checkout). The build cost is real (₹15L–₹2Cr depending on complexity); maintenance ongoing (₹50k–₹3L/month).",
	deepDiveB: "Mobile web is the always-on D2C channel — Shopify mobile-first themes, fast-loading (<2.5s LCP), full Razorpay integration. First-purchase acquisition through web is more efficient than app (no install friction). All Indian D2C should optimize mobile web first.",
	decisionFlow: [
		"Pre-launch / sub-₹50L revenue? → Mobile web only.",
		"₹50L–₹3Cr revenue? → Mobile web + start app planning.",
		"₹3Cr–₹15Cr revenue + 30%+ repeat-rate? → Build app.",
		"₹15Cr+ revenue subscription D2C? → App essential.",
		"Premium D2C with white-glove experience? → App at lower revenue threshold.",
	],
	hybrid: "Web for first-purchase + app for repeat. Most Indian D2C unicorns run both with web carrying acquisition + app driving retention. The app investment pays back via repeat-purchase economics — useful only after first-purchase volume justifies the build.",
	faqs: [
		{ question: "What's the realistic build cost for D2C app?", answer: "₹15L–₹40L for basic Shopify-app-ish (Tapcart, Vajro). ₹50L–₹2Cr for custom React Native or Flutter. Maintenance ₹50k–₹3L/month. Tapcart-style is fastest for Indian D2C." },
		{ question: "Should I use Tapcart or similar app builders?", answer: "Yes for first app — ₹3L–₹15L cost, 4-week launch, Shopify-native. Limitations: less customization than fully custom apps. Indian D2C using Tapcart commonly see 20–40% repeat-rate lift." },
		{ question: "How do I drive app installs cheaply?", answer: "Post-purchase install nudges (highest install rate); WhatsApp message with deep-link; on-website install banner; loyalty program tier requires app. Avoid paid install ads — Indian app-install CPI is ₹40–₹200 with poor LTV." },
		{ question: "Are PWAs (Progressive Web Apps) a substitute?", answer: "Partially. PWAs offer installability + push (on Android) without app-store distribution. Less polish than native apps. Some Indian D2C use PWAs as cheaper alternative; native apps still drive better retention." },
	],
	ctaText: "Designing app strategy? Get a free 30-min D2C audit.",
	primaryHref: "/free-marketing-audit?industry=d2c",
});

add({
	slug: "indian-only-vs-global-go-to-market",
	a: { label: "Indian-Only GTM", shortName: "India-Only" },
	b: { label: "Global GTM (Indian + International)", shortName: "Global" },
	audienceLabel: "Indian SaaS + D2C founders deciding market scope",
	intent: "Indian-only or global GTM — which fits your business?",
	tldr: [
		"India-only wins on focus + local-fit at smaller TAM.",
		"Global wins on TAM + premium pricing at higher CAC.",
		"Most Indian SaaS post-Series A consider global; D2C usually stays Indian-led.",
	],
	scorecard: [
		{ criterion: "TAM", a: "₹50Cr–₹10,000Cr", b: "₹10,000Cr+" },
		{ criterion: "ACV / AOV", a: "Lower (Indian pricing)", b: "Higher (USD pricing)" },
		{ criterion: "CAC", a: "Lower", b: "Higher (international ads expensive)" },
		{ criterion: "Operational complexity", a: "Simpler", b: "Multi-currency, multi-timezone" },
		{ criterion: "Compliance burden", a: "DPDP + GST", b: "DPDP + GDPR + CCPA + ..." },
		{ criterion: "Time to first dollar (international)", a: "n/a", b: "6–18 months" },
	],
	deepDiveA: "India-only GTM works when product fit + market size + capital align. Indian SaaS examples staying domestic-focused: KhataBook, Vyapar (kirana). D2C examples: Sugar Cosmetics, Mamaearth (started India, expanded later). Strengths: focus + local-fit. Constraint: TAM ceiling.",
	deepDiveB: "Global GTM = US + UK + Singapore + Gulf + Indian-NRI + others. Higher ACV (USD pricing 5–10× INR pricing for similar SaaS). Higher CAC (international ads). Examples: Postman (Indian-built, US-focused), Razorpay (India-only payments + global SaaS layers), DarwinBox (India + APAC).",
	decisionFlow: [
		"Indian SMB vertical SaaS? → India-only.",
		"Indian B2B SaaS with global product fit? → Global.",
		"D2C with Indian-cultural product? → India-led + selective NRI markets.",
		"D2C with global-relevant product? → Global possible (rare for Indian D2C).",
		"Pre-PMF? → India-only first; global after PMF proven.",
	],
	hybrid: "Most Indian SaaS go global only after India-PMF proven. The hybrid: Indian market provides revenue baseline + fast iteration; global market provides growth + premium pricing. Time global expansion to year 2–3 of revenue, not earlier.",
	faqs: [
		{ question: "Is global GTM practical for Indian D2C?", answer: "Hard for product D2C (shipping economics + brand recognition). Easier for digital-product D2C (e-courses, software-adjacent). Some Indian D2C brands serve NRI markets (US/Gulf) successfully." },
		{ question: "What's the realistic CAC gap (India vs US)?", answer: "US CAC for B2B SaaS commonly 5–10× Indian. Offsetting factor: ACV also 5–10× higher. Net unit economics often comparable or better in US — but higher absolute spend required." },
		{ question: "Should I incorporate Delaware C-Corp early?", answer: "If global GTM is the plan, yes — pre-Series A. Delaware structure simplifies global fundraising + Stripe + payroll. Adds compliance + cost ($5k–$15k/year)." },
		{ question: "How does Indian SaaS price for global?", answer: "USD pricing slightly below US-equivalent competitors (10–25% discount). E.g., $39/mo where US competitor is $49. Volume from Indian + global blend supports better margins than India-only." },
	],
	ctaText: "Planning global GTM? Get a free 30-min audit.",
	primaryHref: "/free-marketing-audit",
});

const all = Array.from(byId.values());
fs.writeFileSync(OUT, JSON.stringify(all, null, 2));
console.log(`Wrote ${all.length} comparison entries → ${OUT}`);
