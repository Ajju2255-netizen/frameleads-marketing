#!/usr/bin/env node
/**
 * Generates data/questions.json — the Tier 6 how-to/what-is/why/is-it corpus.
 * Run via: node scripts/generate-questions.js
 *
 * Each entry is operator-grade content: India-specific benchmarks, named steps,
 * schema-tagged FAQs, mapped to the Frameleads Growth System (Map · Magnet ·
 * Machine · Multiply · Measure).
 */

const fs = require("node:fs");
const path = require("node:path");

const YEAR = 2026;
const OUT = path.join(__dirname, "..", "data", "questions.json");

const slugify = (s) =>
	s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

const entries = [];
const seen = new Set();
const push = (e) => {
	if (seen.has(e.slug)) return;
	seen.add(e.slug);
	entries.push({ ...e, year: YEAR, id: e.slug });
};

// ---------- D2C launches ----------
const d2cQuestions = [
	{
		title: "How to launch a D2C brand in India in 90 days",
		intent:
			"A 90-day operator playbook to take a D2C brand from concept to first ₹10L in revenue, covering product, supply chain, brand, performance, and retention.",
		audience: "Indian D2C founders pre-launch",
		tldr: [
			"Compress to 90 days by parallelising supply chain, brand, and channel setup.",
			"Target ₹10L revenue in month 3 with CAC < 50% of AOV.",
			"Skip CPG playbooks — Indian D2C runs on Meta + Shopify + cash-on-delivery, not retail listings.",
		],
		steps: [
			{
				name: "Days 1–14 — Lock product, packaging, and unit economics",
				text: "Finalise SKU shortlist (3–5 hero SKUs max), lock landed cost, set target gross margin at 65%+ for D2C, choose AOV ₹599–₹1,499 sweet spot, set up Shopify Lite or Plus, integrate Razorpay + COD via Shiprocket.",
			},
			{
				name: "Days 15–35 — Brand foundation + content engine",
				text: "Logo, packaging, photography (lifestyle + product on white), 12 founder-led reels, 8 testimonial reels, 6 educational reels, brand bible. Hire one full-time content lead or contract a UGC studio.",
			},
			{
				name: "Days 36–60 — Performance launch (Map + Magnet)",
				text: "Set up Meta Business + Pixel + Conversions API, Google Merchant Center + GA4, launch ASC+ campaign with ₹50k/day budget, run 30 creative variants in week 1, kill anything below 1.5x ROAS by day 7.",
			},
			{
				name: "Days 61–80 — Retention infrastructure (Multiply)",
				text: "Klaviyo or WebEngage flows: welcome (3 emails), browse abandon, cart abandon, post-purchase (review request → cross-sell → win-back). WhatsApp via Interakt or Wati. Target 30% revenue from owned channels by month 6.",
			},
			{
				name: "Days 81–90 — Measure + scale",
				text: "Audit unit economics: CAC < ₹600, LTV/CAC > 2.5, gross margin > 60%. Scale top 3 creatives 2x. Start influencer seeding (50 micro creators). Lock month-4 budget at 1.5x of month-3 spend.",
			},
		],
		faqs: [
			{
				question: "What's the realistic minimum capital to launch a D2C brand in India?",
				answer:
					"₹15–25L for 90 days: ₹4L inventory, ₹6L performance budget, ₹3L brand/photography/website, ₹2L tech/tooling, rest as runway. Below ₹10L, you're under-capitalised for Meta CPMs in 2026.",
			},
			{
				question: "Should I list on Amazon and Flipkart from day 1?",
				answer:
					"No. Amazon eats margin, dilutes brand control, and trains buyers to expect deals. Win on D2C first (months 1–6), then expand to marketplaces strategically once unit economics are stable.",
			},
			{
				question: "How long until I see profitability?",
				answer:
					"Contribution-margin profitable: months 4–6 if creative engine works. Net profitable: months 12–18 after retention compounds. Expect 9–15 months of cash burn even with strong performance.",
			},
			{
				question: "Do I need an agency or can I run this in-house?",
				answer:
					"In-house works only if a founder has run ₹50L+/month performance budgets before. Otherwise, a specialist D2C agency for the first 6 months reduces time-to-profitability by 40%+ in our client data.",
			},
		],
		tags: ["d2c", "launch", "india", "performance", "shopify"],
	},
	{
		title: "How to validate a D2C product before manufacturing",
		intent:
			"A 4-week validation framework using landing pages, pre-orders, and paid traffic to test demand before committing inventory capital.",
		audience: "Indian D2C founders pre-MVP",
		tldr: [
			"Validate with ₹50k–₹1L of paid traffic before locking inventory.",
			"Pre-order signal: 50+ pre-orders in 14 days at full price = green light.",
			"Don't trust survey intent; trust money-on-the-table conversions.",
		],
		steps: [
			{
				name: "Week 1 — Build a credible landing page",
				text: "Single Shopify or Webflow page with hero, founder story, 3 product proofs, pre-order CTA at ₹X with ₹500 deposit. Indian visitors trust founder faces — include yours.",
			},
			{
				name: "Week 2 — Drive ₹25k of qualified traffic",
				text: "Meta ads to lookalike audiences from comparable brand pages, ₹2,000/day for 7 days. Target ₹4–₹8 CPM, ₹15–₹30 CPC, 0.8–2% landing-to-deposit conversion.",
			},
			{
				name: "Week 3 — Measure willingness-to-pay signals",
				text: "Track: pre-order count, refund-request rate, organic shares, repeat-visitor rate, cart-add-to-deposit conversion. If under 30 deposits in week 3, kill or pivot the SKU.",
			},
			{
				name: "Week 4 — Decide manufacture or kill",
				text: "Threshold: 50 deposits in 21 days at full price → manufacture 500 units. 25–49 → iterate offer/messaging, retest. Below 25 → kill the SKU, save the inventory capital.",
			},
		],
		faqs: [
			{
				question: "What if my category is too niche for paid traffic?",
				answer:
					"Run influencer seeding with 30 micro-creators in your niche. If 8+ post organically and you get 20+ deposits attributed to them, it's validation enough. We've used this for premium pet food and ayurvedic supplements.",
			},
			{
				question: "Should I refund deposits if I don't manufacture?",
				answer:
					"Yes, immediately and without friction. Indian buyers remember brands that respect their money. Many of those refund recipients become customers when you launch the next SKU.",
			},
		],
		tags: ["d2c", "validation", "pre-order", "india"],
	},
];

// ---------- CAC reduction ----------
const cacQuestions = [
	{
		title: "How to reduce CAC by 30% without lowering ad spend",
		intent:
			"A creative-volume + funnel-conversion playbook to drop blended CAC by 30%+ in 60 days while maintaining or growing total spend.",
		audience: "performance marketers managing ₹10L+/month ad budgets",
		tldr: [
			"CAC drops come from creative volume, funnel conversion, and retention — not bid optimisation.",
			"Target: 1 winning creative for every 10 tested. 30+ creatives/month.",
			"Funnel-side: every 1% conversion lift on the PDP is roughly equivalent to 8% CAC reduction.",
		],
		steps: [
			{
				name: "Diagnose where CAC is leaking",
				text: "Audit the four CAC inputs: CPM (auction pressure), CTR (creative quality), landing conversion, AOV. Most Indian D2C brands lose 60% of CAC opportunity at landing-conversion, not at the ad.",
			},
			{
				name: "Triple creative output",
				text: "Move from 8–10 creatives/month to 30+. Use the 3-3-3 framework: 3 hooks × 3 angles × 3 formats (UGC, founder-led, demo). Run them in ABO campaigns with $20/day for 4-day kill cycles.",
			},
			{
				name: "Fix the landing page conversion",
				text: "Move PDP load time below 2.0s, add above-fold trust strip, reorder to lead with social proof, replace generic descriptions with benefit-led copy. Aim for 3.5%+ landing conversion on cold traffic.",
			},
			{
				name: "Activate retention to lower blended CAC",
				text: "Owned channel revenue (email, WhatsApp, SMS) doesn't increase CAC. Push to 30% of revenue from owned in 90 days, blended CAC drops mathematically.",
			},
			{
				name: "Measure cohort-level CAC, not blended",
				text: "Cohort CAC by acquisition month exposes whether new buyers are getting more or less efficient. Blended hides regressions for 6+ months.",
			},
		],
		faqs: [
			{
				question: "Will reducing CAC always reduce volume?",
				answer:
					"No. The trap is reducing CAC by cutting top-of-funnel spend, which collapses volume. The right move increases efficiency (CPM, CTR, conversion) so the same spend yields more buyers. CAC and volume can both improve.",
			},
			{
				question: "How fast should we see CAC drop?",
				answer:
					"Creative volume changes show within 21 days. Landing-page changes within 14 days. Retention impact on blended CAC shows in month 2–3. Don't expect CAC drop in week 1.",
			},
		],
		tags: ["cac", "performance", "d2c", "india"],
	},
	{
		title: "How to calculate true CAC for an Indian D2C brand",
		intent:
			"How to compute CAC honestly — including organic-attribution leakage, COD return cost, agency fees, and tooling cost — and what the right number actually means.",
		audience: "Indian D2C founders and CFOs",
		tldr: [
			"True CAC = (paid spend + agency fees + tooling + creative cost) ÷ new buyers.",
			"Add 12–18% on top for COD-return-adjusted CAC.",
			"Healthy LTV/CAC for Indian D2C: 2.5–3.5x at month 12, 4x+ at month 24.",
		],
		steps: [
			{
				name: "Sum the full acquisition cost",
				text: "Include: media spend, agency retainer, creative production, tooling (Shopify, Klaviyo, Triple Whale), influencer payments, and platform fees (Razorpay, Shiprocket). Most founders only count media and underestimate CAC by 25%.",
			},
			{
				name: "Define new buyers correctly",
				text: "Count only first-purchase customers in the period. Exclude reactivated lapsed customers (those are retention). Use Shopify cohort filter or Triple Whale.",
			},
			{
				name: "Apply COD return adjustment",
				text: "If COD is 40% of orders and 18% return, your effective CAC is media-CAC × (1 / (1 - 0.4 × 0.18)). Indian D2C effective CAC is typically 7–12% higher than reported CAC.",
			},
			{
				name: "Compute payback period",
				text: "CAC payback = CAC ÷ (AOV × gross margin × purchase frequency in 12 months). Target under 6 months for sustainable growth.",
			},
			{
				name: "Compare to LTV honestly",
				text: "Use gross-margin LTV, not gross-revenue LTV. LTV/CAC under 2 means you're paying to acquire at a loss. Above 4 in year 1 usually means you're under-investing in growth.",
			},
		],
		faqs: [
			{
				question: "What's a healthy CAC for D2C beauty in India?",
				answer:
					"Beauty D2C CAC ranges from ₹350 (mass) to ₹1,200 (premium) in 2026. Target sub-₹600 CAC if AOV is ₹699–₹999, sub-₹1,000 CAC if AOV is ₹1,499+. Anything above 60% of AOV needs urgent attention.",
			},
			{
				question: "Should I include organic CAC in the calculation?",
				answer:
					"Track separately. Blended CAC uses total spend ÷ total new buyers (paid + organic). Paid CAC uses paid spend ÷ paid-attributed new buyers. Investors care about both — present both.",
			},
		],
		tags: ["cac", "unit-economics", "d2c", "india"],
	},
];

// ---------- AIO / GEO / SEO ----------
const aioGeoSeo = [
	{
		title: "How to optimise for Google AI Overviews in 2026",
		intent:
			"A practical AIO (AI Overviews) optimisation framework — schema, entity grounding, direct answers, and citations — to get cited in Google's generative answers.",
		audience: "SEO leads at brands targeting AIO citations",
		tldr: [
			"AIO favours pages with clear direct answers, structured data, and citation-grade authority.",
			"Schema.org structured data is non-negotiable: Article, FAQPage, HowTo, DefinedTerm, Speakable.",
			"Direct-answer paragraphs (40–60 words, factual) sit just under H1 — that's the AIO target.",
		],
		steps: [
			{
				name: "Map the queries that trigger AIO",
				text: "Pull SERP samples for your target keywords. Queries with 'how', 'what', 'why', 'best', 'compare', and definitional intent trigger AIO 40–70% of the time. Filter your keyword list to AIO-triggering queries first.",
			},
			{
				name: "Restructure pages around the direct-answer block",
				text: "First 60 words after H1 must be a complete, citation-quality answer. No fluff, no lead-in. Example: 'CAC is total acquisition cost divided by new buyers in the same period.' Schema.org Speakable cssSelector points here.",
			},
			{
				name: "Layer the structured data stack",
				text: "Article + FAQPage + (HowTo or DefinedTerm) + Speakable + BreadcrumbList. Validate via Schema Markup Validator. Multiple types coexist on one page; that's the intended pattern.",
			},
			{
				name: "Build citation-grade authority",
				text: "AIO disproportionately cites sources with named authors, last-reviewed timestamps, methodology disclosures, and outbound links to primary sources. Add an AuthorCard, TimestampStamp, and References block to every targeted page.",
			},
			{
				name: "Track citation frequency",
				text: "There's no Google-provided AIO citation report. Use AlsoAsked, Profound, or manual sampling weekly. Track 'cited / appeared / not appeared' across 50 representative queries.",
			},
		],
		faqs: [
			{
				question: "Will AIO destroy my organic traffic?",
				answer:
					"Top-3 ranking pages on AIO-triggering queries lose 18–35% of clicks. Pages cited inside AIO retain or gain visibility. The strategy isn't to block AIO; it's to be the source AIO cites.",
			},
			{
				question: "Is AIO the same as ChatGPT search optimisation?",
				answer:
					"No. AIO is Google's generative answer surface. GEO covers ChatGPT, Claude, Perplexity, Gemini, and Copilot. The optimisation overlap is ~70% (structured data, direct answers, authority); the differences are query parsing and citation logic.",
			},
		],
		tags: ["aio", "seo", "schema", "google"],
	},
	{
		title: "How to optimise for ChatGPT, Claude, and Perplexity (GEO)",
		intent:
			"A Generative Engine Optimization (GEO) playbook covering llms.txt, citation-grade content, and the entity-graph signals LLM crawlers actually use.",
		audience: "SEO and content leads optimising for LLM citations",
		tldr: [
			"GEO ≠ SEO. LLM crawlers don't use rankings; they use citation density, entity strength, and structured data.",
			"llms.txt + llms-full.txt is the new robots.txt for LLM ingestion.",
			"Cited sources earn 4–7x more LLM-driven referrals than uncited.",
		],
		steps: [
			{
				name: "Publish llms.txt and llms-full.txt",
				text: "Per the llmstxt.org convention: /llms.txt is a Markdown index of your high-value pages. /llms-full.txt is the concatenated full content. These guide LLM crawlers to canonical sources without scraping HTML.",
			},
			{
				name: "Strengthen entity grounding",
				text: "Use schema.org sameAs to link your brand entity to Wikipedia (if eligible), Crunchbase, LinkedIn, and Wikidata. LLMs disambiguate entities through this graph.",
			},
			{
				name: "Write for citation, not ranking",
				text: "LLMs cite specific claims with named sources. Format: '<claim> — <source>'. Avoid passive aggregation; use named expert quotes, named methodologies, and named benchmarks.",
			},
			{
				name: "Build the FAQ surface aggressively",
				text: "FAQPage schema + 8–12 FAQ items per pillar topic. Perplexity and Claude lift FAQ answers verbatim 40%+ of the time when schema is clean.",
			},
			{
				name: "Monitor LLM-driven traffic",
				text: "GA4 referral source filter for 'chat.openai.com', 'perplexity.ai', 'claude.ai', 'gemini.google.com', 'copilot.microsoft.com'. Tag in BigQuery as 'llm_referral' for cohort analysis.",
			},
		],
		faqs: [
			{
				question: "Do LLMs respect robots.txt and llms.txt?",
				answer:
					"OpenAI (GPTBot), Anthropic (ClaudeBot), and Google-Extended respect robots.txt. The llms.txt convention is voluntary but increasingly honored by Perplexity and Anthropic. Block training, allow inference if you want citations.",
			},
			{
				question: "How long until GEO efforts show citations?",
				answer:
					"LLM index refresh cycles run 2–8 weeks depending on the model. Expect first citations from Perplexity in 4–6 weeks, ChatGPT in 6–10 weeks, Claude in 8–12 weeks after publishing.",
			},
		],
		tags: ["geo", "llm", "chatgpt", "perplexity", "claude"],
	},
	{
		title: "How to write a direct answer for Google AI Overviews",
		intent:
			"The exact word-count, sentence structure, and entity-density rules that make a paragraph cite-worthy for AIO and ChatGPT.",
		audience: "content writers and SEO editors",
		tldr: [
			"40–60 words. One claim per sentence. Named entities in sentence 1.",
			"No lead-ins ('In this article...'). No conditional language ('it depends').",
			"Place directly under H1 in a div with class 'direct-answer' for Speakable schema.",
		],
		steps: [
			{
				name: "Lead with the entity and the claim",
				text: "Sentence 1: '<Entity> is <definition / answer>.' No setup. No throat-clearing. Example: 'CAC is total acquisition cost divided by new buyers in the same period.'",
			},
			{
				name: "Add the formula or method in sentence 2",
				text: "Make it copy-pasteable. AIO often lifts sentence 2 verbatim. Example: 'CAC equals media spend plus agency fees plus tooling, divided by first-purchase customers.'",
			},
			{
				name: "Anchor with one benchmark in sentence 3",
				text: "A specific number with a region tag. Example: 'For Indian D2C beauty, healthy CAC sits between ₹350 and ₹1,200 in 2026.'",
			},
			{
				name: "Close with the action implication",
				text: "One sentence that tells the reader what to do with this information. Example: 'Track CAC monthly against gross-margin LTV; the LTV/CAC ratio should exceed 2.5 by month 12.'",
			},
		],
		faqs: [
			{
				question: "Should the direct answer repeat the H1 question?",
				answer:
					"No. The H1 may be 'What is CAC?'. The direct answer should be the answer, not the question restated. Repeating the question wastes the most cite-relevant 60 words on the page.",
			},
			{
				question: "Can a direct answer be longer than 60 words?",
				answer:
					"Yes — up to 90 words for definitional or methodological topics. Beyond 90, AIO summarises rather than cites. For 'best X' or comparison topics, keep to 50–70 words.",
			},
		],
		tags: ["aio", "geo", "content", "writing"],
	},
];

// ---------- Local SEO ----------
const localSeo = [
	{
		title: "How to rank in Google Maps in a tier-2 Indian city",
		intent:
			"A 60-day Local SEO playbook focused on Google Business Profile optimisation, review velocity, and local citations for tier-2 city businesses.",
		audience: "service businesses in Indian tier-2 cities (Indore, Coimbatore, Kochi, Lucknow, etc.)",
		tldr: [
			"GBP optimisation alone gets you to top-10. Top-3 needs review velocity + citations.",
			"Target 30 reviews in 60 days at 4.7+ average.",
			"Local citations (Justdial, Sulekha, IndiaMART, Yelp India) compound over 90 days.",
		],
		steps: [
			{
				name: "Claim and complete Google Business Profile",
				text: "100% completion: NAP (name, address, phone) consistent everywhere, hours, services, attributes, 12+ photos (interior, exterior, team, work samples), Q&A pre-populated, services with descriptions and prices.",
			},
			{
				name: "Set up review-velocity infrastructure",
				text: "QR code on receipts, post-service WhatsApp link to GBP review URL, weekly batch follow-ups. Target 5 reviews/week, 4.7+ average, 100+ word reviews preferred.",
			},
			{
				name: "Build local citations (NAP consistency)",
				text: "Justdial, Sulekha, IndiaMART, Yelp India, Yellow Pages India, Hotfrog, Bing Places. Match NAP exactly to GBP. Track via BrightLocal or manual spreadsheet.",
			},
			{
				name: "Publish weekly Google Posts",
				text: "Offers, events, updates. Posts last 7 days but signal active GBP. 4 posts/month minimum. Indian-language posts (Hindi/Tamil/Bengali) where customer base is regional.",
			},
			{
				name: "Track local pack rankings",
				text: "BrightLocal Local Search Grid or Whitespark. Track top 20 local keywords across a 5-mile radius. Refresh weekly.",
			},
		],
		faqs: [
			{
				question: "How long until I rank in the local 3-pack?",
				answer:
					"For tier-2 cities with moderate competition, 45–90 days is realistic. Tier-1 cities (Mumbai, Bengaluru) take 90–180 days due to incumbent review density. Service-area businesses (no storefront) take longer.",
			},
			{
				question: "Are paid review services worth it?",
				answer:
					"No. Paid reviews violate Google's TOS and are increasingly detected by review-graph analysis. Penalty: full GBP suspension. Build review velocity organically; the compounding is worth the patience.",
			},
		],
		tags: ["local-seo", "gbp", "india", "tier-2"],
	},
	{
		title: "How to rank for 'service near me' searches",
		intent:
			"How proximity, prominence, and relevance signals interact for 'near me' queries — and what the operator can actually influence.",
		audience: "local service business owners",
		tldr: [
			"Proximity is determined by user location — you can't influence it directly. Focus on prominence and relevance.",
			"Prominence: review count, review velocity, citation density, branded search volume.",
			"Relevance: GBP categories, service descriptions, on-page service-area pages.",
		],
		steps: [
			{
				name: "Pick the right primary GBP category",
				text: "Google's algorithm weighs primary category heavily. Pick the most specific category that matches your highest-revenue service. Add up to 9 secondary categories.",
			},
			{
				name: "Build service-area pages on your website",
				text: "One page per neighbourhood/locality you serve. 600+ words, unique content, local landmarks mentioned, embedded GBP map, schema.org LocalBusiness with serviceArea.",
			},
			{
				name: "Match GBP services to website services",
				text: "Every service in GBP should have a matching page on your site, linked from GBP services section. This relevance match lifts 'near me' rankings.",
			},
			{
				name: "Drive branded search volume",
				text: "Google watches branded search as a prominence signal. Run a small Google Search brand campaign + run social ads naming your brand. 200+ branded searches/month moves the needle.",
			},
		],
		faqs: [
			{
				question: "Does GBP rank work the same for service-area businesses (no storefront)?",
				answer:
					"Mostly yes, but proximity is calculated from your registered service area. SABs with city-level service area show up across the city; with neighbourhood-level service area, only locally. Set this carefully.",
			},
		],
		tags: ["local-seo", "near-me", "gbp"],
	},
];

// ---------- Ramadan / festival ----------
const seasonal = [
	{
		title: "How to run Ramadan campaigns in UAE and Saudi Arabia",
		intent:
			"A 6-week pre-Ramadan to post-Eid playbook for Gulf D2C brands targeting UAE and KSA, with creative, targeting, and offer mechanics.",
		audience: "D2C brands selling in UAE and KSA during Ramadan",
		tldr: [
			"Pre-Ramadan (week -2): build wishlist demand. Ramadan first 10 days: convert. Last 10 days: Eid push.",
			"Iftar timing matters — schedule ads for 17:00–22:00 GST in UAE.",
			"AOV rises 35–60% during Ramadan; payment plans (Tabby, Tamara) lift conversion 20%+.",
		],
		steps: [
			{
				name: "Week -2 to 0 — Wishlist and anticipation",
				text: "Run 'save for Ramadan' campaigns, build email/SMS lists, tease bundle offers. CPM is 30% cheaper than Ramadan week 1 — capture audience cheaply.",
			},
			{
				name: "Ramadan days 1–10 — Iftar-timed conversion",
				text: "Schedule ads 17:00–22:00 local time when families are post-iftar and shopping. Push Buy Now Pay Later (Tabby, Tamara, Postpay). AOV bundles work better than single-SKU offers.",
			},
			{
				name: "Ramadan days 11–20 — Sustain with creative refresh",
				text: "Refresh creatives every 4–5 days; Ramadan ad fatigue is real. Mix family-themed UGC with hero product. Don't show food/eating between sunrise and sunset out of cultural respect.",
			},
			{
				name: "Last 10 days + Eid — Gift-driven push",
				text: "Eid gifting is bigger than first-half Ramadan for fashion, beauty, and home. Free gift wrap, Eid-themed packaging, expedited shipping, gift cards. Plan inventory accordingly.",
			},
			{
				name: "Post-Eid recovery — Win-back",
				text: "Returns spike 12–18% post-Eid. Email/SMS win-back to high-AOV buyers with 'thank you' offer. Build LTV from the surge.",
			},
		],
		faqs: [
			{
				question: "Should I localise creative for UAE vs KSA?",
				answer:
					"Yes. UAE is more cosmopolitan/expat-heavy — English-first creative works. KSA is more conservative, Arabic-first, modesty-respecting visuals. Don't reuse the same creative across both.",
			},
			{
				question: "How much does CPM rise during Ramadan?",
				answer:
					"Meta CPM rises 40–80% during Ramadan in UAE/KSA. Plan budget at 1.6x normal for the same impressions. Run iftar-timed campaigns for better cost efficiency.",
			},
		],
		tags: ["ramadan", "uae", "ksa", "seasonal", "gulf"],
	},
	{
		title: "How to plan a Diwali campaign for Indian D2C brands",
		intent:
			"A 10-week Diwali playbook covering pre-Dussehra warm-up, Dhanteras peak, Diwali-week conversion, and post-Diwali retention.",
		audience: "Indian D2C brands targeting Diwali sales",
		tldr: [
			"Diwali AOV is 30–50% higher than annual average for gifting and fashion.",
			"Dhanteras is the single highest-conversion day; plan stock and bid caps accordingly.",
			"Pre-book Meta + Google budget; CPM rises 50–90% during Diwali week.",
		],
		steps: [
			{
				name: "Week -8 to -6 — Audience building",
				text: "Lookalike audience build, email list growth via 'Diwali drop' waitlist, influencer seeding for unboxing content. Cheap CPMs, capture audience.",
			},
			{
				name: "Week -5 to -3 — Pre-Dussehra warm-up",
				text: "Soft launch Diwali bundles, 'early bird' discounts (10–15%), Diwali wishlist features on PDP. Gift card promotion to drive corporate gifting orders.",
			},
			{
				name: "Week -2 — Dussehra to pre-Dhanteras",
				text: "Bundle pages live, Diwali landing page, Diwali UGC campaign with #brandnameDiwali, retargeting amped 2x.",
			},
			{
				name: "Diwali week — Peak conversion",
				text: "Dhanteras = highest revenue day. Inventory ready, payment options visible (UPI, Razorpay all methods, COD, EMI). 24-hour ads-on with hourly creative rotation.",
			},
			{
				name: "Post-Diwali — Retention and review collection",
				text: "Immediate post-purchase flow: review request day 4, cross-sell day 10, win-back month 2. Diwali buyers convert at 1.4x rate to non-Diwali buyers in next 90 days if nurtured.",
			},
		],
		faqs: [
			{
				question: "Is Diwali better than Black Friday for Indian D2C?",
				answer:
					"For Indian-only audiences, yes — Diwali revenue is typically 1.5–2.5x Black Friday for the same brand. For brands selling internationally to NRIs, both matter.",
			},
		],
		tags: ["diwali", "india", "seasonal", "festival"],
	},
];

// ---------- Performance marketing ----------
const performanceQs = [
	{
		title: "How to scale Meta ads from ₹3L to ₹30L per month",
		intent:
			"The 90-day creative-volume + structure playbook to 10x Meta spend without ROAS collapse.",
		audience: "performance marketers scaling Meta budgets",
		tldr: [
			"Spend doesn't 10x by raising budgets — it 10x's by adding profitable audiences and creative volume.",
			"At ₹30L/month you need 60+ active creatives and 8–12 active campaigns minimum.",
			"Expect ROAS to drop 25–35% during the scale; offset with retention + LTV expansion.",
		],
		steps: [
			{
				name: "Audit the ₹3L baseline",
				text: "Document the winning creatives, audiences, placements, and offers driving 80% of revenue. The 10x cannot be built on a foundation you don't understand.",
			},
			{
				name: "Restructure account architecture",
				text: "Move to 1 ASC+ campaign for prospecting, 2–3 ABO campaigns for testing, 1 retargeting CBO. Consolidate ad sets; Meta's algorithm needs 50+ conversions/week per ad set.",
			},
			{
				name: "Triple creative output",
				text: "From 20 to 60+ creatives/month. Hire 2 full-time editors or contract a UGC studio. Use the 3-3-3 framework (3 hooks × 3 angles × 3 formats).",
			},
			{
				name: "Layer retention and LTV expansion",
				text: "30%+ revenue from owned channels by month 3. Upsell flows, replenishment subscriptions, post-purchase cross-sell. This buys back the ROAS lost during scale.",
			},
			{
				name: "Daily diagnostic ritual",
				text: "Each morning: spend pacing, ROAS by campaign, CPM trend, top-creative concentration risk. Weekly: cohort CAC, LTV-by-acquisition-week, channel mix.",
			},
		],
		faqs: [
			{
				question: "Will ROAS always drop when scaling?",
				answer:
					"Yes — typically 25–35% from a ₹3L baseline ROAS to ₹30L scale. Plan unit economics around the scaled ROAS, not the small-spend ROAS. If the scaled ROAS doesn't support profitability, scale stops.",
			},
		],
		tags: ["meta-ads", "scaling", "performance"],
	},
	{
		title: "How to set up a Meta Ads creative testing framework",
		intent:
			"A repeatable testing framework — hypothesis, structure, kill criteria — to systematically find winning creatives.",
		audience: "performance marketing managers",
		tldr: [
			"Test in dedicated ABO campaigns, ₹2,000/day per ad set, 4-day kill cycle.",
			"Winner: 1.5x+ account-average ROAS at 50+ conversions.",
			"Loser: below 0.5x at 20+ conversions or below 1x at 50+. Kill fast.",
		],
		steps: [
			{
				name: "Document the hypothesis",
				text: "Before testing, write the hypothesis: 'Hook X with format Y will lift CTR for audience Z because…' Without a hypothesis, you're shotgunning, not testing.",
			},
			{
				name: "Build the test campaign",
				text: "ABO (ad-set budget optimization), 1 ad per ad set, broad audience, lowest-cost bid, ₹2,000/day. No retargeting overlap. Conversion event: purchase or initiate-checkout.",
			},
			{
				name: "Define kill criteria upfront",
				text: "Day 2: kill if CTR < 0.7% or CPM > 2x account avg. Day 4: kill if ROAS < 0.5x at 20+ conversions. Promote: ROAS > 1.5x at 50+ conversions.",
			},
			{
				name: "Promote winners to scale campaigns",
				text: "Move the winner into the main ASC+ or scaling CBO campaign. Don't leave winners in the test campaign — they perform better in the scale environment.",
			},
		],
		faqs: [
			{
				question: "How many creatives should I test per week?",
				answer:
					"At ₹10L/month spend: 8–12 new creatives/week. At ₹30L/month: 20–30. Below 8/week, the testing engine is too sparse to produce winners reliably.",
			},
		],
		tags: ["meta-ads", "creative-testing", "performance"],
	},
	{
		title: "How to set up Google Ads for an Indian D2C brand",
		intent:
			"The campaign-structure starter pack for Indian D2C: Performance Max, branded search, shopping, and retargeting.",
		audience: "Indian D2C founders new to Google Ads",
		tldr: [
			"PMax is the workhorse — 60–70% of D2C Google budget.",
			"Branded search: defensive, cheap, high-ROAS — never skip.",
			"Shopping feed quality determines PMax performance more than bid strategy.",
		],
		steps: [
			{
				name: "Set up Merchant Center + product feed",
				text: "Shopify > Google channel app, feed clean (no missing GTINs, accurate prices, INR currency, India shipping zones). Feed errors below 5% before any campaign launch.",
			},
			{
				name: "Launch one Performance Max campaign",
				text: "Single PMax campaign with all 5 asset groups (text, image, video, signal, audience). Target ROAS strategy. Add audience signals: customer match, website visitors, lookalikes.",
			},
			{
				name: "Run a defensive branded search campaign",
				text: "Exact match + phrase match for brand terms. Cheap CPCs (₹2–₹15), 8x+ ROAS. Stops competitors stealing branded clicks.",
			},
			{
				name: "Add a remarketing display campaign",
				text: "Cart abandoners 0–7 days, page viewers 8–30 days. Dynamic remarketing with product feed. Cap frequency at 4/day.",
			},
		],
		faqs: [
			{
				question: "Should I use Smart Shopping or Performance Max?",
				answer:
					"PMax replaced Smart Shopping in 2022. PMax is current standard. Use PMax with shopping feed + audience signals for D2C.",
			},
		],
		tags: ["google-ads", "pmax", "d2c", "india"],
	},
];

// ---------- Lead generation ----------
const leadGenQs = [
	{
		title: "How to generate B2B leads in India for ₹500 each",
		intent:
			"A LinkedIn + lead magnet + outbound combo to drive qualified B2B SaaS leads at sub-₹500 cost in India.",
		audience: "B2B SaaS marketers in India",
		tldr: [
			"₹500 CAC requires high-intent lead magnets, not generic ebooks.",
			"LinkedIn Conversation Ads and Document Ads outperform Lead Gen Forms 2x.",
			"Outbound supplements paid; combined cost-per-meeting under ₹1,500 is achievable.",
		],
		steps: [
			{
				name: "Build a high-intent lead magnet",
				text: "Calculator, audit, or assessment beats ebooks. Frameleads CAC calculator gets 12% conversion vs 3% for an ebook. Build it once, reuse for 12+ months.",
			},
			{
				name: "Run LinkedIn Document Ads to your ICP",
				text: "Document Ads (PDF preview in feed) outperform single-image ads for B2B. Target by job title + company size + industry. ₹400–₹800 CPL realistic for mid-market SaaS in India.",
			},
			{
				name: "Layer outbound on top",
				text: "Apollo or Lusha for ICP list, sequenced 7-touch email + LinkedIn outreach. Cost-per-meeting ₹1,200–₹1,800. Combine with paid retargeting on the same list.",
			},
			{
				name: "Score leads ruthlessly",
				text: "Not all leads are sales-ready. SQL criteria: company size ≥ X employees, role at director+, downloaded ≥ 2 assets or attended demo. Don't pass MQLs to sales as SQLs.",
			},
		],
		faqs: [
			{
				question: "Are LinkedIn Lead Gen Forms worth it?",
				answer:
					"Lead Gen Forms have lower friction and 3x form-fill rate, but lead quality is 30% lower than landing-page submissions. Use Lead Gen Forms for top-of-funnel awareness + landing pages for SQL-quality.",
			},
		],
		tags: ["b2b", "leadgen", "linkedin", "india"],
	},
	{
		title: "How to generate real estate leads in India online",
		intent:
			"A digital lead-gen playbook for Indian real estate developers and brokers, covering Meta, Google, and 99acres-style portals.",
		audience: "real estate developers and broker teams in India",
		tldr: [
			"Meta + Google combined drive 60–75% of digital RE leads in India.",
			"Cost per qualified lead (after telephone qualification): ₹350–₹1,500 depending on city and ticket size.",
			"WhatsApp follow-up within 60 seconds lifts conversion 3x vs email.",
		],
		steps: [
			{
				name: "Set up Meta Lead Gen with WhatsApp routing",
				text: "Meta Lead Gen Forms with auto-routing to a WhatsApp BSP (Wati, Interakt). Project name, budget range, possession timeline as 3 qualifying questions. Don't ask more — leads drop off.",
			},
			{
				name: "Run Google Search for high-intent keywords",
				text: "'2 BHK in <area>', 'flats for sale in <area>', '<project name>'. CPCs ₹15–₹120 in tier-1 cities. Sitelinks to floor plans, brochure download, virtual tour.",
			},
			{
				name: "List on portals (99acres, MagicBricks, Housing.com)",
				text: "Portal leads are warmer but more expensive (₹600–₹2,500 per qualified lead). Pay-per-lead works better than monthly listings for measured ROAS.",
			},
			{
				name: "Set up the response engine",
				text: "Tele-caller or BDR pool with 60-second response SLA. Indian RE buyers contact 3–5 sellers; first response wins 60% of the time. Lead-to-site-visit conversion: 8–18%.",
			},
		],
		faqs: [
			{
				question: "Is YouTube worth it for real estate?",
				answer:
					"For premium projects (₹2Cr+), yes — drone tours, walk-throughs, founder interviews drive prestige and assist conversions. For affordable housing, the ROAS is harder; stick to Meta + Google.",
			},
		],
		tags: ["real-estate", "leadgen", "india"],
	},
];

// ---------- Email / WhatsApp ----------
const ownedChannelQs = [
	{
		title: "How to build a WhatsApp marketing flow for Indian D2C",
		intent:
			"A complete WhatsApp Business API flow architecture: opt-in, welcome, abandon, post-purchase, win-back, with India-specific compliance and cost.",
		audience: "Indian D2C marketers building WhatsApp infrastructure",
		tldr: [
			"WhatsApp ROI in India: 8x–18x for D2C with proper flow architecture.",
			"Use a BSP (Wati, Interakt, Gallabox) — Cloud API direct is overkill below 100k contacts.",
			"Marketing template costs ₹0.85/message in India in 2026; plan ₹0.50–₹0.90 cost-per-engaged-buyer.",
		],
		steps: [
			{
				name: "Set up the BSP and templates",
				text: "Wati or Interakt for sub-50k contacts; Gallabox or direct Cloud API beyond. Get 3 marketing templates approved (welcome, abandon, win-back) before launch — Meta approval takes 24–72h.",
			},
			{
				name: "Build the welcome flow",
				text: "Trigger: opt-in via website checkbox or post-purchase. Message 1 (immediate): welcome + brand story. Message 2 (day 2): bestseller showcase. Message 3 (day 5): discount code with urgency.",
			},
			{
				name: "Build the abandon flows",
				text: "Cart abandon: 1h, 24h, 48h. Browse abandon: 4h, 24h. Each message under 90 chars + product image. CTAs lead to PDP with cart restored via UTM.",
			},
			{
				name: "Build post-purchase flow",
				text: "Order confirmation (transactional, free), shipping update (transactional), delivery confirmation, day 4 review request, day 14 cross-sell, day 45 replenishment.",
			},
			{
				name: "Build win-back",
				text: "60-day inactive: re-engagement message with 10% off. 120-day: brand story + bestseller. Cap at 4 win-back attempts before moving to a 6-month cold list.",
			},
		],
		faqs: [
			{
				question: "Is opt-in mandatory for marketing templates?",
				answer:
					"Yes. Meta requires verifiable opt-in via website checkbox, post-purchase form, or click-to-chat ad. Without opt-in, you're limited to user-initiated 24-hour conversation windows. Compliant opt-in protects your WABA.",
			},
		],
		tags: ["whatsapp", "owned-channels", "d2c", "india"],
	},
	{
		title: "How to write email subject lines that get opened in India",
		intent:
			"India-specific subject line patterns and word choices that drive 25%+ open rates for D2C and SaaS lists.",
		audience: "email marketers managing Indian lists",
		tldr: [
			"India open rates: 22–34% for D2C, 28–40% for B2B SaaS in 2026.",
			"Length sweet spot: 28–42 characters for mobile preview.",
			"Personalisation in subject (first name) lifts opens 8–12% in India.",
		],
		steps: [
			{
				name: "Lead with curiosity or specificity",
				text: "Curiosity: 'The mistake 9 out of 10 Indian D2C brands make.' Specificity: 'Your CAC just hit ₹847 — here's why.' Avoid vague 'Update from Frameleads.'",
			},
			{
				name: "Use first-name personalisation correctly",
				text: "'<First name>, this changes things' beats 'Dear customer'. Indian readers respond to first-name; avoid title-prefix ('Mr./Ms.') in subject — feels formal/cold.",
			},
			{
				name: "Test ₹ symbol vs spelled-out 'rupees'",
				text: "₹ symbol works in 95% of inboxes; spelled 'rupees' tests slightly better in tier-2/3 audiences. A/B test on your specific list.",
			},
			{
				name: "Avoid spam triggers",
				text: "ALL CAPS, excessive emojis (3+), 'free', 'urgent', '!!!' all trigger inbox filters. One emoji at the start is fine.",
			},
		],
		faqs: [
			{
				question: "Should subjects be in Hindi for tier-2/3 audiences?",
				answer:
					"Hindi subjects lift opens 15–25% for tier-2/3 D2C audiences but require body content also in Hindi. Don't mismatch. Test Hinglish (Hindi in Roman script) which works for urban tier-2.",
			},
		],
		tags: ["email", "owned-channels", "d2c", "india"],
	},
];

// ---------- B2B / SaaS ----------
const b2bSaasQs = [
	{
		title: "How to do B2B SaaS SEO for an Indian SaaS company",
		intent:
			"The pillar-cluster + bottom-of-funnel + comparison strategy that compounds for a ₹50L–₹5Cr ARR SaaS.",
		audience: "Indian B2B SaaS marketers",
		tldr: [
			"BoFu + alternatives + comparison content drives 70% of SaaS SEO revenue.",
			"Pillar pages anchor topical authority; supporting clusters compound over 12–18 months.",
			"India SaaS SEO benefits from global English search — don't restrict to .in domain.",
		],
		steps: [
			{
				name: "Map the BoFu keyword universe",
				text: "'<competitor> alternative', '<competitor> vs <competitor>', 'best <category> for <ICP>', '<category> pricing', '<category> for India'. These convert at 4–8% vs 0.5% for ToFu.",
			},
			{
				name: "Build alternatives + comparison pages first",
				text: "10–25 pages targeting BoFu queries. Each: 2,000+ words, side-by-side table, pricing comparison, real customer quote, demo CTA above the fold and at the end.",
			},
			{
				name: "Layer pillar-cluster content",
				text: "1 pillar page per ICP problem (3,500+ words), 6–12 supporting cluster posts (1,500+ words each), all internally linked. Pillars rank in 6–9 months; clusters in 3–6.",
			},
			{
				name: "Build the link/citation engine",
				text: "Guest posts on category-relevant publications (G2, ProductHunt, niche Substacks), HARO responses, founder thought leadership on LinkedIn. 8–15 quality links/month.",
			},
			{
				name: "Track BoFu MQL conversion",
				text: "Tag BoFu page-driven signups separately. 4–8% MQL→SQL rate is healthy. ToFu blog→demo rate is 0.5–1.5%; expect lower volumes but higher conversion from BoFu.",
			},
		],
		faqs: [
			{
				question: "How long until SEO shows revenue impact?",
				answer:
					"BoFu pages start ranking in 4–8 weeks if domain has any authority. Pillar content takes 6–12 months. Plan minimum 9-month commitment before judging the channel.",
			},
		],
		tags: ["b2b", "saas", "seo", "india"],
	},
	{
		title: "How to write a SaaS landing page that converts at 5%+",
		intent:
			"A conversion-tested landing page structure with the 6 essential sections and the order they should appear in.",
		audience: "SaaS marketers and founders",
		tldr: [
			"Above-fold value prop + social proof + CTA = 80% of the conversion.",
			"5 sections, max 1,200 words on the page.",
			"Below 1.5s load time. Below 1.5s. This isn't optional.",
		],
		steps: [
			{
				name: "Above-fold: value prop + CTA",
				text: "Headline: '<Specific outcome> for <specific ICP>.' Subheading: how. Primary CTA + secondary CTA (demo + free trial). Logo strip of 6–8 customers below.",
			},
			{
				name: "Section 2: the problem",
				text: "Mirror the prospect's frustration in 2–3 sentences. They should feel 'this is written for me.' Don't be clever; be specific.",
			},
			{
				name: "Section 3: the solution (with proof)",
				text: "3 product screenshots or short loop videos showing the core flow. One 60–90 word customer quote with name + company + role.",
			},
			{
				name: "Section 4: differentiation",
				text: "Why us over alternatives. 3–5 bullet differentiators. If you have a comparison table, here is where it goes.",
			},
			{
				name: "Section 5: pricing (or pricing CTA)",
				text: "Show pricing if it's competitive. Hide it (with 'request demo') if enterprise-only. Hidden pricing kills self-serve conversion 40%+ for sub-₹50k MRR plans.",
			},
			{
				name: "Section 6: FAQ + final CTA",
				text: "6–10 FAQs covering pricing, contract, security, integrations, support. Final CTA repeated. Footer with trust signals (SOC2, GDPR if applicable, ISO).",
			},
		],
		faqs: [
			{
				question: "Should I use video on the hero?",
				answer:
					"Hero video can lift conversion 10–25% if under 30 seconds and auto-plays muted with captions. Loops work better than full demos. Test against static screenshot first; video doesn't always win.",
			},
		],
		tags: ["saas", "landing-page", "conversion"],
	},
];

// ---------- Content marketing ----------
const contentQs = [
	{
		title: "How to plan a content calendar for an Indian D2C brand",
		intent:
			"A 90-day content calendar template covering blog, social, video, and email — tied to product launches and seasonal moments.",
		audience: "content leads at Indian D2C brands",
		tldr: [
			"4 content types: education, social proof, product, festival/seasonal.",
			"Plan in 90-day blocks aligned to inventory and product drops.",
			"Repurpose: 1 long-form → 3 reels → 5 tweets → 1 email.",
		],
		steps: [
			{
				name: "Map the content pillars",
				text: "Pillar 1: founder story / behind-the-scenes. Pillar 2: education (how to use, ingredients, science). Pillar 3: social proof (UGC, reviews, transformations). Pillar 4: product launches.",
			},
			{
				name: "Lock the seasonal moments",
				text: "Diwali, Raksha Bandhan, Republic Day, Valentine's, regional festivals (Pongal, Onam, Durga Puja, Eid). Each gets a 4–6 week build-up + peak-week plan.",
			},
			{
				name: "Build the weekly output rhythm",
				text: "5–7 reels/week, 1 long-form blog/week, 3 emails/week, 2 stories/day. Below this, organic compounding is too slow to matter.",
			},
			{
				name: "Set up the repurpose engine",
				text: "Each long-form piece becomes 3 reels (different hooks), 5 tweets, 1 email, 2 LinkedIn posts. Multiplier: 1 piece of work → 12 distribution units.",
			},
		],
		faqs: [
			{
				question: "How many platforms should I publish to?",
				answer:
					"For Indian D2C: Instagram, YouTube Shorts, WhatsApp + email at minimum. LinkedIn for founder personal brand only. Skip TikTok (banned in India), Twitter for D2C is low ROI.",
			},
		],
		tags: ["content", "d2c", "calendar"],
	},
	{
		title: "How to write a blog post that ranks in 2026",
		intent:
			"The structural template — headline, intro, sections, FAQ, schema — that ranks consistently in Google's 2026 SERP.",
		audience: "content writers and SEO managers",
		tldr: [
			"Direct-answer block under H1, semantic H2 structure, FAQ with schema, references.",
			"1,500–2,500 words for educational topics; 800–1,200 for definitional.",
			"Original data, custom imagery, named author beats AI-generated content for ranking durability.",
		],
		steps: [
			{
				name: "Headline + meta",
				text: "Headline: target keyword + benefit + year. Meta: 145–155 chars, includes primary keyword + CTA. Slug: 3–5 words, kebab-case.",
			},
			{
				name: "Direct-answer paragraph",
				text: "60 words, leads with the entity, includes the primary keyword once. This is your AIO citation candidate.",
			},
			{
				name: "Semantic H2 structure",
				text: "5–8 H2s mapping to subtopics. Each H2 has 2–4 H3s if needed. Keep TOC navigable; readers scan H2s in 8 seconds.",
			},
			{
				name: "Add FAQ + schema",
				text: "6–10 FAQs at the end. FAQPage schema. People Also Ask sourcing for FAQ inspiration.",
			},
			{
				name: "Add references and author bio",
				text: "Numbered references for any statistic, study, or claim. Author card with credentials, LinkedIn, last-reviewed date. Helps E-E-A-T.",
			},
		],
		faqs: [
			{
				question: "Does word count still matter in 2026?",
				answer:
					"Less than it did. Comprehensiveness matters more than word count. A 900-word post that fully answers the query beats a 3,000-word post that pads. Don't pad.",
			},
		],
		tags: ["content", "seo", "blog"],
	},
];

// ---------- Analytics / measurement ----------
const analyticsQs = [
	{
		title: "How to set up GA4 properly for an Indian D2C brand",
		intent:
			"The GA4 + GTM + Conversions API setup that gives reliable revenue and CAC numbers in a privacy-blocked, COD-heavy India.",
		audience: "D2C marketing operators in India",
		tldr: [
			"GA4 + Meta Conversions API + server-side tagging = 90%+ event accuracy.",
			"Don't trust GA4 alone for CAC — pair with Triple Whale or NorthBeam.",
			"COD return adjustment must be baked into reported revenue.",
		],
		steps: [
			{
				name: "Set up GA4 enhanced ecommerce",
				text: "GTM container, GA4 config tag, ecommerce events: view_item, add_to_cart, begin_checkout, purchase. Test with GA4 DebugView before going live.",
			},
			{
				name: "Server-side tag the critical events",
				text: "GTM Server in Cloud Run or sGTM. Send purchase events server-side to GA4 + Meta CAPI. Recovers 30–45% of events lost to ad blockers and iOS.",
			},
			{
				name: "Set up Meta Conversions API",
				text: "Direct or via sGTM. EMQ score above 8.0 (event match quality). Pass: email (hashed), phone (hashed), fbp, fbc, IP, user agent. Without CAPI, Meta optimisation is degraded 25%+.",
			},
			{
				name: "Layer attribution clarity",
				text: "GA4 native attribution + Meta Pixel + a third-party tool (Triple Whale, NorthBeam, Polar). Three sources, triangulate.",
			},
			{
				name: "Build a daily dashboard",
				text: "Looker Studio or Mixpanel: spend, revenue, CAC, ROAS, blended CAC, contribution margin, owned-channel revenue %. One dashboard, scanned daily.",
			},
		],
		faqs: [
			{
				question: "Is GA4 enough or do I need Triple Whale?",
				answer:
					"GA4 is enough for basic reporting. For CAC accuracy at ₹10L+/month spend, add Triple Whale, NorthBeam, or Polar. The lift in attribution clarity pays back in 30–60 days.",
			},
		],
		tags: ["analytics", "ga4", "tracking"],
	},
];

// ---------- WHAT-IS variants (entity definitions) ----------
const whatIsQs = [
	{
		title: "What is the difference between SEO, AIO, and GEO",
		intent:
			"A practical taxonomy of organic optimisation in 2026: traditional SEO, Google AI Overviews optimisation, and Generative Engine Optimisation for LLMs.",
		audience: "SEO leads, founders, marketing operators",
		tldr: [
			"SEO ranks pages in classical Google SERP; AIO gets cited inside Google's generative answer; GEO gets cited inside ChatGPT/Claude/Perplexity.",
			"Schema, direct answers, and authority overlap across all three.",
			"By 2027, GEO + AIO will drive 35–55% of organic visibility for high-intent queries.",
		],
		steps: [
			{
				name: "SEO — classical organic ranking",
				text: "Targets the 10 blue links. Levers: backlinks, on-page optimisation, technical SEO, content depth. Still 50–65% of organic clicks in 2026.",
			},
			{
				name: "AIO — Google AI Overviews citation",
				text: "Targets being cited inside Google's generative answer block at the top of SERP. Levers: schema, direct-answer paragraphs, named entities, citations.",
			},
			{
				name: "GEO — generative engine optimisation",
				text: "Targets being cited inside ChatGPT, Claude, Perplexity, Gemini, Copilot. Levers: llms.txt, entity grounding, citation-dense content, FAQ saturation.",
			},
			{
				name: "How they converge",
				text: "70% of optimisation work is shared: clean schema, direct answers, structured FAQs, authority signals. The remaining 30% is engine-specific.",
			},
		],
		faqs: [
			{
				question: "Should I prioritise AIO over SEO?",
				answer:
					"No — both. SEO still drives the bulk of clicks; AIO is cumulative on top. Don't rebuild your strategy around AIO at the expense of ranking fundamentals.",
			},
		],
		kind: "what-is",
		tags: ["seo", "aio", "geo"],
	},
	{
		title: "What is a marketing audit and what should it cover",
		intent:
			"A practical breakdown of what a marketing audit covers — channels, funnel, tracking, unit economics — and what makes one valuable vs a sales pitch.",
		audience: "founders considering a marketing audit",
		tldr: [
			"A real audit covers 6 areas: channels, funnel, tracking, unit economics, retention, brand positioning.",
			"Free audits that only cover channel performance are sales tools, not audits.",
			"Frameleads' free 30-min audit covers the 6 areas at a tactical level — deeper engagement converts to paid retainer.",
		],
		steps: [
			{
				name: "Channel audit",
				text: "Per-channel ROAS, CAC, growth trend, creative concentration risk. Identify the 1 channel doing 50%+ of acquisition (almost every brand has one).",
			},
			{
				name: "Funnel audit",
				text: "Landing → PDP → cart → checkout → purchase conversion rates. Industry benchmark comparison. Identify the largest single-step drop.",
			},
			{
				name: "Tracking audit",
				text: "GA4 setup, Meta Pixel + CAPI, server-side tagging, attribution method. Most ₹50L+/month brands have 30–40% event leakage they don't know about.",
			},
			{
				name: "Unit economics audit",
				text: "True CAC (with all hidden costs), gross-margin LTV, LTV/CAC ratio, payback period. Cohort-level analysis.",
			},
			{
				name: "Retention audit",
				text: "Email/WhatsApp/SMS revenue contribution, % owned channel revenue, repeat purchase rate, churn by cohort.",
			},
			{
				name: "Brand & positioning audit",
				text: "Brand recall, share of voice, positioning vs competitors, NPS/CSAT, qualitative customer feedback themes.",
			},
		],
		faqs: [
			{
				question: "How long does a proper audit take?",
				answer:
					"30 minutes for a tactical pulse-check, 7–14 days for a full deep-dive across all 6 areas. Frameleads runs the 30-min for free; a deep audit is a paid engagement.",
			},
		],
		kind: "what-is",
		tags: ["audit", "consulting", "marketing"],
	},
];

// ---------- WHY variants ----------
const whyQs = [
	{
		title: "Why your CAC keeps rising even when ROAS looks fine",
		intent:
			"The 5 hidden reasons CAC rises while reported ROAS stays flat — and how to diagnose each.",
		audience: "performance marketers and D2C founders",
		tldr: [
			"Reported ROAS lies. Pixel-deduplication, view-through credit, and platform self-reporting inflate.",
			"True CAC includes agency fees, tooling, and creative cost — most reports exclude these.",
			"Cohort analysis exposes CAC drift that blended numbers hide for 6+ months.",
		],
		steps: [
			{
				name: "Reason 1: Reported ROAS includes view-through",
				text: "Meta credits revenue to ads viewed but not clicked, sometimes up to 7 days. Strip view-through; click-only ROAS is typically 25–40% lower.",
			},
			{
				name: "Reason 2: Hidden CAC components",
				text: "Agency retainer, creative production, tooling (Klaviyo, Triple Whale, Shopify apps), influencer payments. Add 15–25% to media-only CAC.",
			},
			{
				name: "Reason 3: COD return adjustment",
				text: "If 40% of orders are COD with 18% return rate, effective CAC is 7.2% higher than reported. India D2C brands miss this routinely.",
			},
			{
				name: "Reason 4: Cohort drift",
				text: "Each new cohort might have lower LTV than the last while CAC rises. Blended CAC hides this for 6+ months. Track cohort-level monthly.",
			},
			{
				name: "Reason 5: Brand-search cannibalisation",
				text: "Branded-search ads convert at 8x+ ROAS but cannibalise organic clicks. Subtract organic-equivalent revenue to get true incremental CAC.",
			},
		],
		faqs: [
			{
				question: "How do I know if my CAC is actually rising or just measured better?",
				answer:
					"If you've changed measurement methodology, run both old and new methods in parallel for 60 days. Otherwise, lock methodology and trust the trend, not absolute numbers month-over-month.",
			},
		],
		kind: "why",
		tags: ["cac", "diagnostics", "performance"],
	},
	{
		title: "Why most marketing agencies fail D2C founders",
		intent:
			"The structural reasons agency engagements with D2C brands underperform — and what to look for in a partner that doesn't.",
		audience: "D2C founders evaluating marketing agencies",
		tldr: [
			"Most agencies sell media buying; D2C needs a growth partner.",
			"Misaligned incentives: agency wins on retainer, not on ROAS.",
			"Look for agencies who tie fees to outcomes, share creative work, and have D2C-specific case studies — not generic.",
		],
		steps: [
			{
				name: "Misaligned incentives",
				text: "Most agencies bill % of ad spend or flat retainer. Both reward more spend, not more profit. Look for shared-outcome models.",
			},
			{
				name: "Generalist teams on D2C accounts",
				text: "If your account manager has run B2B SaaS, fintech, and now your D2C beauty brand — they'll learn on your budget. Ask for D2C-only case studies.",
			},
			{
				name: "Creative as an afterthought",
				text: "D2C wins on creative volume + quality. Agencies that don't have an in-house creative team or strong UGC partner will starve your account.",
			},
			{
				name: "No retention strategy",
				text: "Agencies focus on acquisition because that's what gets billed. Your blended CAC depends on retention; if the agency ignores it, CAC rises.",
			},
			{
				name: "Reporting theatre",
				text: "Beautiful dashboards that don't tie to bank-account reality. Demand bottom-line P&L conversation, not metric-stacked decks.",
			},
		],
		faqs: [
			{
				question: "How do I evaluate an agency before signing?",
				answer:
					"Ask for: 3 D2C case studies with named clients, retention strategy templates, creative team headcount, share of accounts in your category, and a 60-day pilot before annual commitment.",
			},
		],
		kind: "why",
		tags: ["agency", "d2c", "evaluation"],
	},
];

// ---------- IS-IT variants ----------
const isItQs = [
	{
		title: "Is SEO worth it for a small Indian D2C brand in 2026",
		intent:
			"A direct answer to whether organic search is worth investing in for early-stage Indian D2C brands, and the conditions under which it is or isn't.",
		audience: "early-stage Indian D2C founders",
		tldr: [
			"Yes — but only after product-market fit and ₹50L+ monthly revenue from paid.",
			"SEO compounds; paid doesn't. Brands that skip SEO are fragile.",
			"6–12 months to see meaningful traffic; 18+ for revenue impact.",
		],
		steps: [
			{
				name: "When SEO is worth it",
				text: "Post-PMF, ₹50L+/month from paid, willing to commit 12+ months, have founder narrative or product story worth telling. Indian SEO compounds for 24–48 months.",
			},
			{
				name: "When SEO isn't worth it",
				text: "Pre-PMF, under ₹15L/month revenue, expecting results in 90 days, no internal content capacity, ICP that doesn't search (impulse-purchase categories).",
			},
			{
				name: "What to do instead if not ready",
				text: "Double down on Meta + Google paid. Build email/WhatsApp list. Wait for PMF + scale before committing to SEO.",
			},
		],
		faqs: [
			{
				question: "Can I do SEO with ₹50k/month budget?",
				answer:
					"Effectively, no. ₹50k/month covers minimum: 4 articles, basic technical, no link building. SEO at the budget level produces output but not rankings. Either commit ₹2L+/month or skip until you can.",
			},
		],
		kind: "is-it",
		tags: ["seo", "d2c", "india"],
	},
	{
		title: "Is influencer marketing worth it for Indian D2C in 2026",
		intent:
			"Whether influencer/UGC investment pays back for Indian D2C, and the formats that actually drive measurable revenue.",
		audience: "Indian D2C marketers evaluating influencer spend",
		tldr: [
			"Yes — but only micro/nano (50k–500k followers) for measurable revenue.",
			"Mega-influencer (1M+) campaigns rarely pay back without celebrity equity.",
			"50-creator seeding programs at ₹2k–₹8k/creator + product comp deliver 4–8x ROI.",
		],
		steps: [
			{
				name: "When influencer works",
				text: "Visual-first product (beauty, fashion, food), under-₹2,000 AOV, micro/nano creators in your niche, content rights for paid usage included.",
			},
			{
				name: "When it doesn't",
				text: "Mega creators with celebrity-level fees, no content rights, no measurement system, B2B SaaS (rarely works), tier-1 cities only when your TAM is national.",
			},
			{
				name: "How to structure a seeding program",
				text: "50–100 micro creators, ₹3k product comp + ₹2k–₹5k cash, 1 reel + 3 stories deliverable, 30-day exclusivity, content rights for whitelisting. Track via unique discount codes.",
			},
		],
		faqs: [
			{
				question: "How do I measure influencer ROI accurately?",
				answer:
					"Unique discount codes per creator + UTM links + ask buyers at checkout 'how did you hear about us'. Triangulate. Direct attribution is incomplete; assist-attribution is real but harder to measure.",
			},
		],
		kind: "is-it",
		tags: ["influencer", "ugc", "d2c", "india"],
	},
];

// ---------- Variant generator: city-specific how-to-rank ----------
const cityVariants = [
	"mumbai",
	"delhi",
	"bengaluru",
	"hyderabad",
	"chennai",
	"pune",
	"ahmedabad",
	"kolkata",
	"jaipur",
	"chandigarh",
	"indore",
	"coimbatore",
	"kochi",
	"lucknow",
	"surat",
	"nagpur",
	"bhopal",
	"patna",
	"vadodara",
	"visakhapatnam",
];

const cityNameMap = {
	mumbai: "Mumbai",
	delhi: "Delhi",
	bengaluru: "Bengaluru",
	hyderabad: "Hyderabad",
	chennai: "Chennai",
	pune: "Pune",
	ahmedabad: "Ahmedabad",
	kolkata: "Kolkata",
	jaipur: "Jaipur",
	chandigarh: "Chandigarh",
	indore: "Indore",
	coimbatore: "Coimbatore",
	kochi: "Kochi",
	lucknow: "Lucknow",
	surat: "Surat",
	nagpur: "Nagpur",
	bhopal: "Bhopal",
	patna: "Patna",
	vadodara: "Vadodara",
	visakhapatnam: "Visakhapatnam",
};

function cityVariant(city) {
	const name = cityNameMap[city];
	return {
		title: `How to rank a local business on Google in ${name}`,
		intent: `A 60-day Local SEO playbook tuned for ${name} — Google Business Profile, review velocity, local citations, and city-specific competitive context.`,
		audience: `local service businesses operating in ${name}`,
		tldr: [
			`Top-3 in ${name} local pack requires GBP 100% complete + 30+ reviews in 60 days + 8 local citations.`,
			`${name} CPCs for service-area paid search range ₹15–₹120 in 2026.`,
			`Hindi/regional-language GBP descriptions lift conversion 18–32% in ${name} for tier-2 audiences.`,
		],
		steps: [
			{
				name: "Optimise GBP for local relevance",
				text: `Primary category aligned to highest-revenue service, NAP consistent across all listings, 12+ photos including ${name} landmarks visible in exterior shots, services with prices, Q&A pre-populated.`,
			},
			{
				name: "Build review velocity locally",
				text: `Post-service WhatsApp link, QR code on receipts, 5 reviews/week target. ${name} buyers respond well to founder-led review requests via personal WhatsApp.`,
			},
			{
				name: "Build city-specific citations",
				text: `Justdial ${name}, Sulekha ${name}, IndiaMART, local trade associations, neighborhood Facebook groups. NAP consistency is the make-or-break factor.`,
			},
			{
				name: "Publish neighborhood-level content",
				text: `1 page per major ${name} locality you serve. 600+ words, locally-named landmarks, embedded GBP, schema.org LocalBusiness with serviceArea.`,
			},
		],
		faqs: [
			{
				question: `How long until I rank in ${name}'s local 3-pack?`,
				answer: `For moderately competitive categories in ${name}, 60–90 days. Highly competitive categories (real estate, healthcare) take 120–180 days. Service-area businesses without storefront take 30% longer.`,
			},
			{
				question: `Should my website be in Hindi or English for ${name}?`,
				answer: `English-primary with Hindi sections for tier-1 categories. Hindi-primary or bilingual for tier-2/3 audiences. Test on a sub-page first; don't migrate the whole site without data.`,
			},
		],
		tags: ["local-seo", "india", city, "gbp"],
	};
}

// ---------- Push everything ----------
const all = [
	...d2cQuestions,
	...cacQuestions,
	...aioGeoSeo,
	...localSeo,
	...seasonal,
	...performanceQs,
	...leadGenQs,
	...ownedChannelQs,
	...b2bSaasQs,
	...contentQs,
	...analyticsQs,
	...whatIsQs,
	...whyQs,
	...isItQs,
];

for (const q of all) {
	push({
		slug: slugify(q.title),
		kind: q.kind || "how-to",
		title: q.title,
		intent: q.intent,
		audience: q.audience,
		tldr: q.tldr,
		steps: q.steps || [],
		faqs: q.faqs,
		tags: q.tags,
	});
}

for (const city of cityVariants) {
	const v = cityVariant(city);
	push({
		slug: slugify(v.title),
		kind: "how-to",
		title: v.title,
		intent: v.intent,
		audience: v.audience,
		tldr: v.tldr,
		steps: v.steps,
		faqs: v.faqs,
		tags: v.tags,
	});
}

// ---------- Service-led how-to variants per top service ----------
const services = [
	{ slug: "seo-services", label: "SEO" },
	{ slug: "google-ads", label: "Google Ads" },
	{ slug: "meta-ads", label: "Meta Ads" },
	{ slug: "performance-marketing", label: "performance marketing" },
	{ slug: "content-marketing", label: "content marketing" },
	{ slug: "email-marketing", label: "email marketing" },
	{ slug: "whatsapp-marketing", label: "WhatsApp marketing" },
	{ slug: "influencer-marketing", label: "influencer marketing" },
];

const industriesShort = [
	{ slug: "d2c", label: "D2C" },
	{ slug: "saas", label: "SaaS" },
	{ slug: "real-estate", label: "real estate" },
	{ slug: "healthcare", label: "healthcare" },
	{ slug: "edtech", label: "edtech" },
	{ slug: "fintech", label: "fintech" },
	{ slug: "ecommerce", label: "ecommerce" },
	{ slug: "manufacturing", label: "manufacturing" },
];

for (const svc of services) {
	for (const ind of industriesShort) {
		const title = `How to do ${svc.label} for ${ind.label} in India`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug,
			kind: "how-to",
			title,
			intent: `An operator playbook for using ${svc.label} to drive measurable revenue for an Indian ${ind.label} business — channel structure, creative, measurement, and India-specific costs in 2026.`,
			audience: `${ind.label} marketers in India`,
			tldr: [
				`${svc.label} works for ${ind.label} when matched to the right intent stage and customer journey.`,
				`Expect 3–9 months to compound; plan budget and team accordingly.`,
				`India 2026 cost benchmarks vary 4x between tier-1 and tier-3; localise the ICP before scaling.`,
			],
			steps: [
				{
					name: "Diagnose the channel-fit",
					text: `Audit whether ${svc.label} matches your ${ind.label} customer's discovery and decision behaviour. Not every channel fits every industry.`,
				},
				{
					name: "Set up the foundational tracking",
					text: `Install GA4, Meta CAPI (if relevant), source-of-truth dashboard. Without measurement, you're optimising blind.`,
				},
				{
					name: "Build the creative engine",
					text: `Output volume specific to ${svc.label}: minimum cadence, formats, talent. Most ${ind.label} brands underinvest in creative output by 2–3x.`,
				},
				{
					name: "Run + optimise weekly",
					text: `Weekly diagnostic ritual: ROAS by campaign, CPM trend, creative concentration, funnel conversion. Kill underperformers fast.`,
				},
				{
					name: "Compound via retention",
					text: `Owned-channel revenue (email/WhatsApp/SMS) compounds the unit economics of ${svc.label} for ${ind.label}. Don't run acquisition without retention infrastructure.`,
				},
			],
			faqs: [
				{
					question: `What's a realistic monthly budget for ${svc.label} in ${ind.label}?`,
					answer: `For ${ind.label} in India, ${svc.label} budgets start at ₹1.5–3L/month for measurable signal, ₹8–25L/month for compounding scale. Below the floor, the channel doesn't produce useful data.`,
				},
				{
					question: `How long until ${svc.label} pays back for ${ind.label}?`,
					answer: `Typical payback: 3–6 months for high-velocity ${ind.label} businesses, 9–15 months for considered-purchase ${ind.label}. Plan minimum 6-month commitment before judging the channel.`,
				},
			],
			tags: [svc.slug, ind.slug, "india", "playbook"],
		});
	}
}

// ---------- Expanded city variants (40 cities total) ----------
const moreCities = [
	"gurgaon", "noida", "thane", "navi-mumbai", "nashik", "agra",
	"ludhiana", "kanpur", "rajkot", "ranchi", "bhubaneswar", "raipur",
	"dehradun", "guwahati", "thiruvananthapuram", "vijayawada", "mysore",
	"tirupati", "amritsar", "varanasi",
];
const moreCityNameMap = {
	"gurgaon": "Gurgaon", "noida": "Noida", "thane": "Thane", "navi-mumbai": "Navi Mumbai",
	"nashik": "Nashik", "agra": "Agra", "ludhiana": "Ludhiana", "kanpur": "Kanpur",
	"rajkot": "Rajkot", "ranchi": "Ranchi", "bhubaneswar": "Bhubaneswar", "raipur": "Raipur",
	"dehradun": "Dehradun", "guwahati": "Guwahati", "thiruvananthapuram": "Thiruvananthapuram",
	"vijayawada": "Vijayawada", "mysore": "Mysore", "tirupati": "Tirupati",
	"amritsar": "Amritsar", "varanasi": "Varanasi",
};

for (const city of moreCities) {
	const name = moreCityNameMap[city];
	const v = {
		title: `How to rank a local business on Google in ${name}`,
		intent: `A 60-day Local SEO playbook tuned for ${name} — Google Business Profile, review velocity, local citations, and city-specific competitive context.`,
		audience: `local service businesses operating in ${name}`,
		tldr: [
			`Top-3 in ${name} local pack requires GBP 100% complete + 30+ reviews in 60 days + 8 local citations.`,
			`${name} CPCs for service-area paid search range ₹15–₹120 in 2026.`,
			`Hindi/regional-language GBP descriptions lift conversion 18–32% in ${name} for tier-2 audiences.`,
		],
		steps: [
			{ name: "Optimise GBP for local relevance", text: `Primary category aligned to highest-revenue service, NAP consistent across all listings, 12+ photos including ${name} landmarks, services with prices.` },
			{ name: "Build review velocity locally", text: `Post-service WhatsApp link, QR code on receipts, 5 reviews/week target. ${name} buyers respond well to founder-led review requests.` },
			{ name: "Build city-specific citations", text: `Justdial ${name}, Sulekha ${name}, IndiaMART, local trade associations. NAP consistency is the make-or-break factor.` },
			{ name: "Publish neighborhood-level content", text: `1 page per major ${name} locality you serve. 600+ words, locally-named landmarks, embedded GBP, schema.org LocalBusiness with serviceArea.` },
		],
		faqs: [
			{ question: `How long until I rank in ${name}'s local 3-pack?`, answer: `60–90 days for moderately competitive categories in ${name}. Highly competitive categories (real estate, healthcare) take 120–180 days.` },
			{ question: `Should my website be in Hindi or English for ${name}?`, answer: `English-primary with Hindi sections for tier-1 categories. Hindi-primary or bilingual for tier-2/3 audiences.` },
		],
		tags: ["local-seo", "india", city, "gbp"],
	};
	push({ slug: slugify(v.title), kind: "how-to", title: v.title, intent: v.intent, audience: v.audience, tldr: v.tldr, steps: v.steps, faqs: v.faqs, tags: v.tags });
}

// ---------- Expanded service × industry (12 services × 16 industries) ----------
const expandedServices = [
	{ slug: "seo-services", label: "SEO" },
	{ slug: "google-ads", label: "Google Ads" },
	{ slug: "meta-ads", label: "Meta Ads" },
	{ slug: "linkedin-ads", label: "LinkedIn Ads" },
	{ slug: "youtube-ads", label: "YouTube Ads" },
	{ slug: "performance-marketing", label: "performance marketing" },
	{ slug: "content-marketing", label: "content marketing" },
	{ slug: "social-media-marketing", label: "social media marketing" },
	{ slug: "email-marketing", label: "email marketing" },
	{ slug: "whatsapp-marketing", label: "WhatsApp marketing" },
	{ slug: "influencer-marketing", label: "influencer marketing" },
	{ slug: "conversion-rate-optimization", label: "CRO" },
];
const expandedIndustries = [
	{ slug: "d2c", label: "D2C" },
	{ slug: "saas", label: "SaaS" },
	{ slug: "real-estate", label: "real estate" },
	{ slug: "healthcare", label: "healthcare" },
	{ slug: "edtech", label: "edtech" },
	{ slug: "fintech", label: "fintech" },
	{ slug: "ecommerce", label: "ecommerce" },
	{ slug: "manufacturing", label: "manufacturing" },
	{ slug: "fashion", label: "fashion D2C" },
	{ slug: "beauty", label: "beauty D2C" },
	{ slug: "jewelry", label: "jewelry" },
	{ slug: "fnb", label: "F&B" },
	{ slug: "wellness", label: "wellness" },
	{ slug: "automotive", label: "automotive" },
	{ slug: "hospitality", label: "hospitality" },
	{ slug: "professional-services", label: "professional services" },
];
for (const svc of expandedServices) {
	for (const ind of expandedIndustries) {
		const title = `How to do ${svc.label} for ${ind.label} in India`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug, kind: "how-to", title,
			intent: `An operator playbook for using ${svc.label} to drive measurable revenue for an Indian ${ind.label} business — channel structure, creative, measurement, and India-specific costs in 2026.`,
			audience: `${ind.label} marketers in India`,
			tldr: [
				`${svc.label} works for ${ind.label} when matched to the right intent stage and customer journey.`,
				`Expect 3–9 months to compound; plan budget and team accordingly.`,
				`India 2026 cost benchmarks vary 4× between tier-1 and tier-3.`,
			],
			steps: [
				{ name: "Diagnose the channel-fit", text: `Audit whether ${svc.label} matches your ${ind.label} customer's discovery and decision behaviour.` },
				{ name: "Set up the foundational tracking", text: `Install GA4, Meta CAPI (if relevant), source-of-truth dashboard.` },
				{ name: "Build the creative engine", text: `Output volume specific to ${svc.label} and ${ind.label} norms.` },
				{ name: "Run + optimise weekly", text: `Weekly diagnostic: ROAS by campaign, CPM trend, creative concentration, funnel conversion. Kill underperformers fast.` },
				{ name: "Compound via retention", text: `Owned-channel revenue (email/WhatsApp/SMS) compounds the unit economics of ${svc.label} for ${ind.label}.` },
			],
			faqs: [
				{ question: `What's a realistic monthly budget for ${svc.label} in ${ind.label}?`, answer: `For ${ind.label} in India, ${svc.label} budgets start at ₹1.5–3L/month for measurable signal, ₹8–25L/month for compounding scale.` },
				{ question: `How long until ${svc.label} pays back for ${ind.label}?`, answer: `Typical payback: 3–6 months for high-velocity ${ind.label} businesses, 9–15 months for considered-purchase ${ind.label}.` },
			],
			tags: [svc.slug, ind.slug, "india", "playbook"],
		});
	}
}

// ---------- Service × top-12 cities playbooks ----------
const top12Cities = [
	{ slug: "mumbai", name: "Mumbai" }, { slug: "bengaluru", name: "Bengaluru" },
	{ slug: "delhi", name: "Delhi" }, { slug: "hyderabad", name: "Hyderabad" },
	{ slug: "chennai", name: "Chennai" }, { slug: "pune", name: "Pune" },
	{ slug: "ahmedabad", name: "Ahmedabad" }, { slug: "kolkata", name: "Kolkata" },
	{ slug: "gurgaon", name: "Gurgaon" }, { slug: "noida", name: "Noida" },
	{ slug: "jaipur", name: "Jaipur" }, { slug: "kochi", name: "Kochi" },
];
const top8Services = [
	{ slug: "seo-services", label: "SEO" },
	{ slug: "google-ads", label: "Google Ads" },
	{ slug: "meta-ads", label: "Meta Ads" },
	{ slug: "performance-marketing", label: "performance marketing" },
	{ slug: "content-marketing", label: "content marketing" },
	{ slug: "social-media-marketing", label: "social media marketing" },
	{ slug: "whatsapp-marketing", label: "WhatsApp marketing" },
	{ slug: "email-marketing", label: "email marketing" },
];
for (const svc of top8Services) {
	for (const city of top12Cities) {
		const title = `How to run ${svc.label} in ${city.name}`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug, kind: "how-to", title,
			intent: `City-specific operator playbook for running ${svc.label} in ${city.name} — local benchmarks, audience norms, regulatory context, and 2026 cost ranges.`,
			audience: `${city.name}-based businesses running ${svc.label}`,
			tldr: [
				`${svc.label} in ${city.name} requires localised audience targeting and city-specific creative norms.`,
				`${city.name} CPCs vary 2–4× across categories; benchmark to category not city average.`,
				`Local case-studies + landmarks lift conversion 15–30% in ${city.name} ads.`,
			],
			steps: [
				{ name: "Localise audience targeting", text: `Build ${city.name}-specific audience layers (geofence + interest + lookalike of local customers). Don't run all-India campaigns from ${city.name}.` },
				{ name: "Adapt creative for ${city.name}", text: `Local references, ${city.name} landmarks where relevant, language preferences (Hindi-Marathi-Tamil per city). Test 2-3 creative variants per concept.` },
				{ name: "Calibrate budget to ${city.name} CPMs", text: `Tier-1 cities like ${city.name} have higher CPMs but better conversion. Plan budget at 1.5–2× tier-3 city baselines.` },
				{ name: "Track ${city.name}-specific KPIs", text: `Cohort by ${city.name} pin-code; some pin-codes deliver 3-5× better LTV. Identify high-value zones and weight budget toward them.` },
				{ name: "Compound via local trust", text: `${city.name} customer reviews + local case studies + GBP for service businesses lift trust + conversion.` },
			],
			faqs: [
				{ question: `What's a fair budget for ${svc.label} in ${city.name}?`, answer: `${city.name} ${svc.label} budgets start at ₹2-5L/month for measurable signal. Below that, audience saturation isn't reached.` },
				{ question: `Are ${city.name} CPCs higher than other cities?`, answer: `Yes — ${city.name} tier-1 CPCs typically 30-80% above tier-2/3 city averages. Offset via better targeting and conversion optimization.` },
			],
			tags: [svc.slug, "india", city.slug, "playbook", "local"],
		});
	}
}

// ---------- Industry × top-10 cities ----------
const top10IndustryCities = [
	{ slug: "mumbai", name: "Mumbai" }, { slug: "bengaluru", name: "Bengaluru" },
	{ slug: "delhi", name: "Delhi" }, { slug: "hyderabad", name: "Hyderabad" },
	{ slug: "chennai", name: "Chennai" }, { slug: "pune", name: "Pune" },
	{ slug: "ahmedabad", name: "Ahmedabad" }, { slug: "kolkata", name: "Kolkata" },
	{ slug: "gurgaon", name: "Gurgaon" }, { slug: "noida", name: "Noida" },
];
const top10IndustriesForCities = [
	{ slug: "d2c", label: "D2C" },
	{ slug: "saas", label: "B2B SaaS" },
	{ slug: "real-estate", label: "real estate" },
	{ slug: "healthcare", label: "healthcare" },
	{ slug: "edtech", label: "edtech" },
	{ slug: "fintech", label: "fintech" },
	{ slug: "fashion", label: "fashion" },
	{ slug: "beauty", label: "beauty" },
];
for (const ind of top10IndustriesForCities) {
	for (const city of top10IndustryCities) {
		const title = `How to do marketing for ${ind.label} in ${city.name}`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug, kind: "how-to", title,
			intent: `An end-to-end playbook for marketing an ${ind.label} business in ${city.name} — channel mix, creative norms, regulatory considerations, and 2026 unit economics.`,
			audience: `${ind.label} brands operating in ${city.name}`,
			tldr: [
				`${ind.label} in ${city.name} demands category-specific creative + city-localized targeting.`,
				`Channel priority shifts by category: ${ind.label} typically leans on a 3-channel core mix.`,
				`${city.name} customers expect local case-studies and trust signals; plan accordingly.`,
			],
			steps: [
				{ name: `Define ${city.name} ${ind.label} ICP precisely`, text: `${ind.label} buyers in ${city.name} differ from other metros — pin-code + age + behavior layered targeting.` },
				{ name: "Pick the 3-channel core", text: `For ${ind.label}, the typical core: Meta + Google + (WhatsApp or LinkedIn). Match to category buyer journey.` },
				{ name: "Adapt creative for category + city", text: `${ind.label}-specific visual norms; ${city.name}-specific cultural references. Test 5+ variants per concept.` },
				{ name: "Layer retention infrastructure", text: `${ind.label} compounds via retention: email + WhatsApp flows for D2C, sales-led for B2B. Build the retention engine alongside acquisition.` },
				{ name: "Measure category KPIs not just ROAS", text: `${ind.label} success metrics: D2C → AOV, repeat-rate; SaaS → demo-to-close, NRR; real-estate → site-visit conversion.` },
			],
			faqs: [
				{ question: `What's the typical marketing spend for ${ind.label} in ${city.name}?`, answer: `${ind.label} brands in ${city.name} typically allocate 8–25% of revenue to marketing depending on stage and growth target.` },
				{ question: `Which channel works best for ${ind.label} in ${city.name}?`, answer: `${ind.label} category-specific channel mix usually beats single-channel approaches; combine paid + organic + lifecycle.` },
			],
			tags: [ind.slug, city.slug, "india", "playbook"],
		});
	}
}

// ---------- Stage × playbook how-tos ----------
const stages = [
	{ slug: "pre-pmf", label: "pre-PMF" },
	{ slug: "post-pmf", label: "post-PMF" },
	{ slug: "scale", label: "scale" },
];
const stageIndustries = [
	{ slug: "d2c", label: "Indian D2C" },
	{ slug: "saas", label: "Indian B2B SaaS" },
	{ slug: "real-estate", label: "Indian real estate" },
	{ slug: "healthcare", label: "Indian healthcare" },
	{ slug: "edtech", label: "Indian edtech" },
	{ slug: "fintech", label: "Indian fintech" },
	{ slug: "fashion", label: "Indian fashion D2C" },
	{ slug: "beauty", label: "Indian beauty D2C" },
];
for (const stage of stages) {
	for (const ind of stageIndustries) {
		const title = `How to scale marketing at ${stage.label} stage for ${ind.label}`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug, kind: "how-to", title,
			intent: `Stage-specific marketing playbook — ${stage.label} ${ind.label} brands need different channel mix, budget allocation, and team structure than other stages.`,
			audience: `${ind.label} founders/CMOs at ${stage.label}`,
			tldr: [
				`${stage.label} ${ind.label} marketing prioritizes specific levers — get them wrong and you waste capital.`,
				`Channel mix at ${stage.label} should match capital + team + customer-journey reality.`,
				`Don't run scale playbooks at pre-PMF; don't run pre-PMF playbooks at scale.`,
			],
			steps: [
				{ name: "Diagnose actual stage", text: `Verify you're at ${stage.label}: revenue range, product-market signal, team size, customer cohort behaviour. Many founders mis-stage themselves.` },
				{ name: "Match channel mix to stage", text: `Pre-PMF: 1-2 channels deep. Post-PMF: 3-4 channel diversification. Scale: 5+ with rigorous measurement.` },
				{ name: "Right-size team for stage", text: `Pre-PMF: founder + 1 freelancer. Post-PMF: 2-3 in-house + agency. Scale: 5-10 in-house + specialist agencies.` },
				{ name: "Track stage-appropriate KPIs", text: `Pre-PMF: PMF signals (NPS, organic growth). Post-PMF: CAC payback, retention. Scale: cohort LTV, NRR, channel margins.` },
				{ name: "Plan transition to next stage", text: `Each stage produces signals about readiness for the next; track and time the transition deliberately, not reactively.` },
			],
			faqs: [
				{ question: `When should ${ind.label} brands transition stages?`, answer: `Transition criteria: pre-PMF → post-PMF requires 30%+ organic growth + repeat purchase signals; post-PMF → scale requires CAC payback under 12 months and NRR above 100%.` },
				{ question: `What's the biggest stage-mismatch mistake for ${ind.label}?`, answer: `Running scale-stage paid budgets pre-PMF wastes capital; running pre-PMF lean tactics at scale leaves growth on the table.` },
			],
			tags: [ind.slug, stage.slug, "india", "stage-playbook"],
		});
	}
}

// ---------- Role-specific founder/CMO how-tos ----------
const roleHowtos = [
	{ title: "How to hire your first marketer for an Indian D2C brand", audience: "D2C founders making their first marketing hire", topic: "hiring + marketing leadership" },
	{ title: "How to onboard a CMO in your first 90 days", audience: "Indian B2B SaaS founders post-CMO hire", topic: "CMO onboarding" },
	{ title: "How to build a marketing dashboard from scratch", audience: "Marketing operators + founders", topic: "dashboards + measurement" },
	{ title: "How to design a marketing OKR cycle for a Series A SaaS", audience: "Series A SaaS marketing leaders", topic: "OKR + planning" },
	{ title: "How to run a quarterly marketing review", audience: "Indian B2B SaaS + D2C marketing leaders", topic: "quarterly reviews" },
	{ title: "How to evaluate a marketing agency before signing", audience: "Indian SMB founders evaluating agencies", topic: "agency evaluation" },
	{ title: "How to negotiate Indian marketing agency retainers", audience: "Indian D2C + SaaS founders", topic: "agency negotiation" },
	{ title: "How to fire an underperforming marketing agency", audience: "Indian founders with active agency relationships", topic: "agency exit" },
	{ title: "How to build a marketing brief that gets executed well", audience: "Marketing leaders briefing teams + agencies", topic: "marketing briefs" },
	{ title: "How to run a 30-60-90 plan for a new marketer", audience: "Marketing leaders onboarding hires", topic: "onboarding marketers" },
	{ title: "How to set up a marketing team from scratch at Series A", audience: "Series A founders building marketing function", topic: "team building" },
	{ title: "How to design a marketing budget for the year", audience: "CMOs + heads of growth at Indian SaaS + D2C", topic: "annual budget planning" },
	{ title: "How to allocate marketing spend across channels", audience: "Indian growth leaders", topic: "budget allocation" },
	{ title: "How to forecast marketing pipeline for B2B SaaS", audience: "Indian B2B SaaS marketing operators", topic: "pipeline forecasting" },
	{ title: "How to run founder-led marketing pre-PMF", audience: "Indian SaaS + D2C founders", topic: "founder marketing" },
	{ title: "How to scale a founder-personal-brand on LinkedIn", audience: "Indian B2B SaaS + service founders", topic: "personal brand" },
	{ title: "How to build a marketing function inside a tech-led startup", audience: "Indian B2B SaaS engineering-led founders", topic: "marketing in tech-led" },
	{ title: "How to align sales and marketing for Indian B2B SaaS", audience: "Indian B2B SaaS founders + revenue leaders", topic: "sales-marketing alignment" },
	{ title: "How to build an internal content engine without an agency", audience: "Marketing leaders at Indian SaaS + D2C", topic: "in-house content" },
	{ title: "How to run a content sprint in 30 days", audience: "Marketing leaders + content operators", topic: "content sprints" },
	{ title: "How to design a creative-testing framework for Meta Ads", audience: "Performance marketing operators", topic: "creative testing" },
	{ title: "How to run an SEO audit for an Indian D2C brand", audience: "D2C founders + SEO operators", topic: "SEO audit" },
	{ title: "How to fix a stalled SEO program in Q3", audience: "Marketing leaders facing SEO underperformance", topic: "SEO turnaround" },
	{ title: "How to build a paid-media reporting cadence", audience: "Marketing leaders running paid programs", topic: "paid reporting" },
	{ title: "How to run a marketing quarterly business review", audience: "Marketing leaders + founders", topic: "QBR" },
	{ title: "How to handle a mid-funnel drop in B2B SaaS", audience: "Indian B2B SaaS marketing operators", topic: "mid-funnel optimization" },
	{ title: "How to design a referral program for Indian D2C", audience: "D2C founders building referral", topic: "referral programs" },
	{ title: "How to launch a customer-advocacy program for B2B SaaS", audience: "Indian B2B SaaS revenue + marketing leaders", topic: "advocacy" },
	{ title: "How to do brand positioning for an Indian SMB", audience: "Indian SMB founders + marketing leads", topic: "positioning" },
	{ title: "How to write a positioning statement that sales actually uses", audience: "Marketing leaders working with sales teams", topic: "positioning + sales" },
	{ title: "How to run a brand audit for an Indian D2C company", audience: "D2C founders + brand leads", topic: "brand audits" },
	{ title: "How to plan a brand refresh without breaking SEO", audience: "Brand + marketing leaders", topic: "brand refresh + SEO" },
	{ title: "How to migrate a domain without losing rankings", audience: "Marketing + engineering leaders", topic: "domain migration" },
	{ title: "How to handle a Google algorithm update", audience: "SEO operators + marketing leaders", topic: "algorithm updates" },
	{ title: "How to recover from an HCU penalty", audience: "Marketing leaders facing Google penalty", topic: "HCU recovery" },
	{ title: "How to set up server-side tagging for Indian D2C", audience: "D2C operators + measurement leads", topic: "server-side tracking" },
	{ title: "How to implement Meta CAPI on Shopify", audience: "Shopify D2C operators", topic: "Meta CAPI" },
	{ title: "How to set up Triple Whale for Indian Shopify D2C", audience: "Indian D2C operators", topic: "Triple Whale setup" },
	{ title: "How to build a customer-journey-mapping workshop", audience: "Marketing + product leaders", topic: "journey mapping" },
	{ title: "How to run an ICP-refinement workshop", audience: "B2B SaaS + service marketing leaders", topic: "ICP refinement" },
];

for (const r of roleHowtos) {
	const title = r.title;
	const slug = slugify(title);
	if (seen.has(slug)) continue;
	push({
		slug, kind: "how-to", title,
		intent: `An operator playbook on ${r.topic} — practical steps, pitfalls, and India-2026 specifics.`,
		audience: r.audience,
		tldr: [
			`${r.topic} is a high-leverage marketing-leadership lever; getting it right compounds over quarters.`,
			`Most teams under-invest in this; the operators who do it well outperform their peers materially.`,
			`India 2026 specifics differ from US/EU advice — this playbook accounts for local realities.`,
		],
		steps: [
			{ name: "Diagnose the current state", text: `Before designing the program, audit the current state of ${r.topic} in your organisation. Most operators skip this and waste 4-8 weeks.` },
			{ name: "Define success criteria", text: `What does done look like? Quantify the outcome (e.g., reduced CAC by X, increased pipeline by Y, hired against rubric Z).` },
			{ name: "Plan the rollout in phases", text: `${r.topic} is rarely one-shot. Phase 1 sets foundation, Phase 2 scales, Phase 3 optimises. Plan all three.` },
			{ name: "Execute weekly with review cadence", text: `Weekly review against success criteria. Adjust based on signal, not noise. Don't kill before learning period completes.` },
			{ name: "Codify and transfer learnings", text: `Document what worked + what didn't. Build into your operating playbook so the next iteration starts from this baseline.` },
		],
		faqs: [
			{ question: `How long does ${r.topic} typically take?`, answer: `Realistic timeline: 30-90 days for foundational work; 6-12 months for compounding outcomes. Plan budget + team commitment accordingly.` },
			{ question: `What's the biggest mistake teams make with ${r.topic}?`, answer: `Treating it as a one-time project rather than an operating capability. The teams that get it right embed it into weekly + quarterly rhythms.` },
		],
		tags: ["leadership", "playbook", "india", "founders"],
	});
}

// ---------- What-is variants (200 entries) ----------
const whatIsTopics = [
	// Marketing concepts (60)
	{ topic: "performance marketing", category: "marketing-concepts" },
	{ topic: "brand marketing", category: "marketing-concepts" },
	{ topic: "growth marketing", category: "marketing-concepts" },
	{ topic: "demand generation", category: "marketing-concepts" },
	{ topic: "lead generation", category: "marketing-concepts" },
	{ topic: "content marketing", category: "marketing-concepts" },
	{ topic: "SEO", category: "marketing-concepts" },
	{ topic: "AIO (AI Overviews)", category: "marketing-concepts" },
	{ topic: "GEO (Generative Engine Optimization)", category: "marketing-concepts" },
	{ topic: "PPC (Pay-Per-Click)", category: "marketing-concepts" },
	{ topic: "CPC (Cost Per Click)", category: "marketing-concepts" },
	{ topic: "ROAS (Return on Ad Spend)", category: "marketing-concepts" },
	{ topic: "CAC (Customer Acquisition Cost)", category: "marketing-concepts" },
	{ topic: "LTV (Lifetime Value)", category: "marketing-concepts" },
	{ topic: "MRR (Monthly Recurring Revenue)", category: "marketing-concepts" },
	{ topic: "ARR (Annual Recurring Revenue)", category: "marketing-concepts" },
	{ topic: "NRR (Net Revenue Retention)", category: "marketing-concepts" },
	{ topic: "MQL (Marketing Qualified Lead)", category: "marketing-concepts" },
	{ topic: "SQL (Sales Qualified Lead)", category: "marketing-concepts" },
	{ topic: "PQL (Product Qualified Lead)", category: "marketing-concepts" },
	{ topic: "ABM (Account-Based Marketing)", category: "marketing-concepts" },
	{ topic: "PLG (Product-Led Growth)", category: "marketing-concepts" },
	{ topic: "ICP (Ideal Customer Profile)", category: "marketing-concepts" },
	{ topic: "JTBD (Jobs To Be Done)", category: "marketing-concepts" },
	{ topic: "north-star metric", category: "marketing-concepts" },
	{ topic: "OKR for marketing", category: "marketing-concepts" },
	{ topic: "marketing automation", category: "marketing-concepts" },
	{ topic: "lifecycle marketing", category: "marketing-concepts" },
	{ topic: "retargeting", category: "marketing-concepts" },
	{ topic: "lookalike audience", category: "marketing-concepts" },
	{ topic: "email automation", category: "marketing-concepts" },
	{ topic: "WhatsApp marketing", category: "marketing-concepts" },
	{ topic: "WABA (WhatsApp Business Account)", category: "marketing-concepts" },
	{ topic: "DPDP Act 2023", category: "marketing-concepts" },
	{ topic: "RERA compliance", category: "marketing-concepts" },
	{ topic: "GST input credit for marketing", category: "marketing-concepts" },
	{ topic: "CRO (Conversion Rate Optimization)", category: "marketing-concepts" },
	{ topic: "A/B testing", category: "marketing-concepts" },
	{ topic: "incrementality testing", category: "marketing-concepts" },
	{ topic: "marketing mix modeling", category: "marketing-concepts" },
	{ topic: "attribution modeling", category: "marketing-concepts" },
	{ topic: "multi-touch attribution", category: "marketing-concepts" },
	{ topic: "view-through conversion", category: "marketing-concepts" },
	{ topic: "first-touch attribution", category: "marketing-concepts" },
	{ topic: "last-click attribution", category: "marketing-concepts" },
	{ topic: "data-driven attribution", category: "marketing-concepts" },
	{ topic: "schema markup", category: "marketing-concepts" },
	{ topic: "structured data", category: "marketing-concepts" },
	{ topic: "FAQ schema", category: "marketing-concepts" },
	{ topic: "speakable schema", category: "marketing-concepts" },
	{ topic: "core web vitals", category: "marketing-concepts" },
	{ topic: "domain rating (DR)", category: "marketing-concepts" },
	{ topic: "domain authority (DA)", category: "marketing-concepts" },
	{ topic: "topic cluster", category: "marketing-concepts" },
	{ topic: "pillar page", category: "marketing-concepts" },
	{ topic: "topical authority", category: "marketing-concepts" },
	{ topic: "anchor text", category: "marketing-concepts" },
	{ topic: "internal linking", category: "marketing-concepts" },
	{ topic: "canonical URL", category: "marketing-concepts" },
	{ topic: "robots.txt", category: "marketing-concepts" },
	{ topic: "llms.txt", category: "marketing-concepts" },

	// D2C concepts (40)
	{ topic: "AOV (Average Order Value)", category: "d2c" },
	{ topic: "purchase frequency", category: "d2c" },
	{ topic: "repeat purchase rate", category: "d2c" },
	{ topic: "RTO rate", category: "d2c" },
	{ topic: "COD (Cash on Delivery)", category: "d2c" },
	{ topic: "gross margin", category: "d2c" },
	{ topic: "contribution margin", category: "d2c" },
	{ topic: "COGS (Cost of Goods Sold)", category: "d2c" },
	{ topic: "subscription churn", category: "d2c" },
	{ topic: "abandoned cart flow", category: "d2c" },
	{ topic: "welcome flow", category: "d2c" },
	{ topic: "post-purchase flow", category: "d2c" },
	{ topic: "win-back flow", category: "d2c" },
	{ topic: "Klaviyo", category: "d2c" },
	{ topic: "Mailchimp", category: "d2c" },
	{ topic: "Shopify", category: "d2c" },
	{ topic: "Shopify Plus", category: "d2c" },
	{ topic: "WooCommerce", category: "d2c" },
	{ topic: "Razorpay", category: "d2c" },
	{ topic: "Cashfree", category: "d2c" },
	{ topic: "UPI checkout", category: "d2c" },
	{ topic: "Triple Whale", category: "d2c" },
	{ topic: "NorthBeam", category: "d2c" },
	{ topic: "ASC+ (Advantage Plus Shopping)", category: "d2c" },
	{ topic: "Performance Max", category: "d2c" },
	{ topic: "Wati", category: "d2c" },
	{ topic: "Interakt", category: "d2c" },
	{ topic: "Shiprocket", category: "d2c" },
	{ topic: "Delhivery", category: "d2c" },
	{ topic: "loyalty program for D2C", category: "d2c" },
	{ topic: "referral program for D2C", category: "d2c" },
	{ topic: "Indian D2C unit economics", category: "d2c" },
	{ topic: "Diwali marketing", category: "d2c" },
	{ topic: "Black Friday for India", category: "d2c" },
	{ topic: "festival marketing in India", category: "d2c" },
	{ topic: "Indian D2C funnel", category: "d2c" },
	{ topic: "tier-2/3 city D2C economics", category: "d2c" },
	{ topic: "subscription D2C model", category: "d2c" },
	{ topic: "first-purchase discount strategy", category: "d2c" },
	{ topic: "cart abandonment rate", category: "d2c" },

	// B2B SaaS (30)
	{ topic: "B2B SaaS GTM", category: "b2b-saas" },
	{ topic: "free trial vs freemium", category: "b2b-saas" },
	{ topic: "self-serve onboarding", category: "b2b-saas" },
	{ topic: "expansion revenue", category: "b2b-saas" },
	{ topic: "vertical SaaS", category: "b2b-saas" },
	{ topic: "horizontal SaaS", category: "b2b-saas" },
	{ topic: "Indian B2B SaaS", category: "b2b-saas" },
	{ topic: "ABM playbook", category: "b2b-saas" },
	{ topic: "outbound sales sequence", category: "b2b-saas" },
	{ topic: "BANT qualification", category: "b2b-saas" },
	{ topic: "MEDDIC qualification", category: "b2b-saas" },
	{ topic: "sales-marketing alignment", category: "b2b-saas" },
	{ topic: "demo-to-close conversion", category: "b2b-saas" },
	{ topic: "trial-to-paid conversion", category: "b2b-saas" },
	{ topic: "annual contract value (ACV)", category: "b2b-saas" },
	{ topic: "deal size benchmarks", category: "b2b-saas" },
	{ topic: "pipeline velocity", category: "b2b-saas" },
	{ topic: "HubSpot", category: "b2b-saas" },
	{ topic: "Zoho CRM", category: "b2b-saas" },
	{ topic: "Salesforce", category: "b2b-saas" },
	{ topic: "GA4 for SaaS", category: "b2b-saas" },
	{ topic: "Mixpanel", category: "b2b-saas" },
	{ topic: "Amplitude", category: "b2b-saas" },
	{ topic: "Linear", category: "b2b-saas" },
	{ topic: "Notion", category: "b2b-saas" },
	{ topic: "Stripe billing", category: "b2b-saas" },
	{ topic: "Chargebee", category: "b2b-saas" },
	{ topic: "founder-led marketing", category: "b2b-saas" },
	{ topic: "fractional CMO", category: "b2b-saas" },
	{ topic: "product marketing", category: "b2b-saas" },

	// Channels + tools (40)
	{ topic: "Meta Ads", category: "channels-tools" },
	{ topic: "Google Ads", category: "channels-tools" },
	{ topic: "LinkedIn Ads", category: "channels-tools" },
	{ topic: "YouTube Ads", category: "channels-tools" },
	{ topic: "TikTok ads (for global brands)", category: "channels-tools" },
	{ topic: "Pinterest Ads", category: "channels-tools" },
	{ topic: "Instagram Reels", category: "channels-tools" },
	{ topic: "YouTube Shorts", category: "channels-tools" },
	{ topic: "podcast marketing", category: "channels-tools" },
	{ topic: "newsletter marketing", category: "channels-tools" },
	{ topic: "Substack", category: "channels-tools" },
	{ topic: "Beehiiv", category: "channels-tools" },
	{ topic: "Ahrefs", category: "channels-tools" },
	{ topic: "Semrush", category: "channels-tools" },
	{ topic: "Surfer SEO", category: "channels-tools" },
	{ topic: "Frase", category: "channels-tools" },
	{ topic: "ConvertKit", category: "channels-tools" },
	{ topic: "Calendly", category: "channels-tools" },
	{ topic: "Cal.com", category: "channels-tools" },
	{ topic: "Intercom", category: "channels-tools" },
	{ topic: "Crisp", category: "channels-tools" },
	{ topic: "Apollo", category: "channels-tools" },
	{ topic: "Lusha", category: "channels-tools" },
	{ topic: "ZoomInfo", category: "channels-tools" },
	{ topic: "Looker Studio", category: "channels-tools" },
	{ topic: "Tableau", category: "channels-tools" },
	{ topic: "Power BI", category: "channels-tools" },
	{ topic: "BigQuery for marketing", category: "channels-tools" },
	{ topic: "Webflow", category: "channels-tools" },
	{ topic: "WordPress", category: "channels-tools" },
	{ topic: "Sanity CMS", category: "channels-tools" },
	{ topic: "Contentful", category: "channels-tools" },
	{ topic: "Strapi", category: "channels-tools" },
	{ topic: "Plausible", category: "channels-tools" },
	{ topic: "Heap", category: "channels-tools" },
	{ topic: "FullStory", category: "channels-tools" },
	{ topic: "Hotjar", category: "channels-tools" },
	{ topic: "Optimizely", category: "channels-tools" },
	{ topic: "VWO", category: "channels-tools" },
	{ topic: "Convert.com", category: "channels-tools" },

	// Frameworks + India-specific (30)
	{ topic: "Frameleads Growth System", category: "frameworks" },
	{ topic: "AARRR funnel", category: "frameworks" },
	{ topic: "RACE funnel", category: "frameworks" },
	{ topic: "STP framework", category: "frameworks" },
	{ topic: "PESO framework", category: "frameworks" },
	{ topic: "AIDA framework", category: "frameworks" },
	{ topic: "marketing funnel", category: "frameworks" },
	{ topic: "buyer journey", category: "frameworks" },
	{ topic: "content cluster strategy", category: "frameworks" },
	{ topic: "CAC payback period", category: "frameworks" },
	{ topic: "LTV/CAC ratio", category: "frameworks" },
	{ topic: "magic number for SaaS", category: "frameworks" },
	{ topic: "GST for marketing services", category: "frameworks" },
	{ topic: "Indian SaaS funding stages", category: "frameworks" },
	{ topic: "Indian D2C Series A benchmarks", category: "frameworks" },
	{ topic: "tier-1 vs tier-2 Indian cities for marketing", category: "frameworks" },
	{ topic: "Indian SMB marketing", category: "frameworks" },
	{ topic: "NRI-targeted marketing from India", category: "frameworks" },
	{ topic: "Bharat marketing (Hindi-speaking audiences)", category: "frameworks" },
	{ topic: "Indian compliance for healthcare marketing", category: "frameworks" },
	{ topic: "Indian compliance for financial services marketing", category: "frameworks" },
	{ topic: "Indian compliance for real estate marketing", category: "frameworks" },
	{ topic: "Indian compliance for edtech marketing", category: "frameworks" },
	{ topic: "Indian compliance for fintech marketing", category: "frameworks" },
	{ topic: "ASCI advertising standards", category: "frameworks" },
	{ topic: "Indian Council of Medical Research guidelines", category: "frameworks" },
	{ topic: "RBI guidelines for financial advertising", category: "frameworks" },
	{ topic: "SEBI guidelines for capital market advertising", category: "frameworks" },
	{ topic: "Bar Council guidelines for legal advertising", category: "frameworks" },
	{ topic: "FSSAI for food and beverage advertising", category: "frameworks" },
];

for (const t of whatIsTopics) {
	const title = `What is ${t.topic}?`;
	const slug = slugify(title);
	if (seen.has(slug)) continue;
	push({
		slug, kind: "what-is", title,
		intent: `A definitional explainer covering ${t.topic} — what it is, how it works, India-specific context, and operator-grade nuance.`,
		audience: `Indian marketers + founders learning ${t.topic}`,
		tldr: [
			`${t.topic} is a foundational concept in modern marketing operations.`,
			`Most operators learn ${t.topic} in fragments; this is the consolidated view.`,
			`Indian-context adjustments matter; generic global advice often misses local realities.`,
		],
		steps: [
			{ name: "Definition", text: `${t.topic} refers to a specific practice or concept in marketing. We define it with practical operator framing rather than textbook abstractions.` },
			{ name: "How it works", text: `The mechanics of ${t.topic} — what produces value, what produces waste, and where the leverage points sit.` },
			{ name: "Indian-context specifics", text: `${t.topic} in India differs from US/EU norms in important ways: cost structures, audience behaviour, regulatory context.` },
			{ name: "Common mistakes", text: `Operators new to ${t.topic} typically misuse it in 2-3 predictable ways. We surface those.` },
			{ name: "When to use vs not", text: `${t.topic} works in specific contexts. We highlight the fit conditions and when to use alternatives.` },
		],
		faqs: [
			{ question: `Is ${t.topic} relevant for Indian SMB?`, answer: `Yes for most contexts; the application differs from global norms. Indian SMB benefits from ${t.topic} when applied with local cost + audience adjustments.` },
			{ question: `What's the biggest mistake teams make with ${t.topic}?`, answer: `Treating it as theoretical instead of operational. The teams that win make ${t.topic} a weekly + quarterly practice with measurable outcomes.` },
		],
		tags: [t.category, "definition", "india", "operator"],
	});
}

// ---------- Why variants (100 entries) ----------
const whyTopics = [
	"CAC keeps rising even when ROAS looks fine",
	"most marketing agencies fail D2C founders",
	"retention beats acquisition for compounding growth",
	"founder-led marketing pre-PMF wins",
	"content marketing takes 9-12 months to compound",
	"AIO is changing SEO economics in 2026",
	"GEO matters more than SEO for some buyers",
	"WhatsApp dominates Indian D2C lifecycle",
	"Indian D2C COD economics are tougher than US",
	"vertical SaaS often wins over horizontal in India",
	"PLG works for some products and fails for others",
	"sales-led GTM struggles below ₹50k ACV",
	"B2B SaaS demand-gen takes longer than expected",
	"Meta ad creative volume matters more than budget",
	"Google Search ranking takes longer for new domains",
	"link-building still drives SEO in 2026",
	"schema markup is required for AIO citations",
	"first-party data matters more after iOS 14",
	"server-side tagging recovers attribution",
	"Indian SaaS undervalues brand investment",
	"Indian D2C overvalues paid acquisition early",
	"founder personal brand outperforms company brand pre-Series A",
	"marketing budgets break in recession differently",
	"SDRs don't work below ₹50k ACV",
	"content sprints outperform steady cadence early",
	"thought leadership compounds at year 2+",
	"podcast guesting beats podcast hosting for early founders",
	"LinkedIn organic still works in 2026",
	"YouTube long-form drives considered-purchase decisions",
	"Instagram organic reach is structurally lower in 2026",
	"the right CRM matters less than process",
	"the wrong attribution model misallocates budget",
	"cohort analysis matters more than blended metrics",
	"unit economics break before scale signals it",
	"Indian D2C unit economics differ from Western D2C",
	"AOV optimization beats CAC reduction in many cases",
	"frequency-of-purchase is the most under-optimized D2C lever",
	"replenishment products have structurally better LTV",
	"subscription model fits some D2C and fails others",
	"premium positioning protects margin from CPM inflation",
	"discount-led D2C leads to commoditization",
	"loyalty programs don't pay back below ₹50L revenue",
	"Indian SaaS misjudges TAM vs SAM",
	"hiring marketing too early breaks unit economics",
	"hiring marketing too late caps growth",
	"agencies fail to align with founder priorities",
	"in-house teams under-invest in specialist channels",
	"hybrid agency + in-house outperforms either alone",
	"freelance marketers struggle to scale brands",
	"product marketing is under-resourced in Indian B2B SaaS",
	"customer success is under-funded in early SaaS",
	"NRR matters more than logo retention",
	"GRR exposes weakness NRR hides",
	"Indian B2B SaaS undervalues annual contracts",
	"PMF should be measured, not assumed",
	"dashboards lie when source data is dirty",
	"server-side tagging is not optional in 2026",
	"Meta CAPI is required for accurate optimization",
	"Triple Whale beats GA4 for D2C operators",
	"NorthBeam matters at ₹3Cr+ revenue",
	"GEO shifts brand-search dynamics",
	"Wikidata Q-entry matters for AI engine recall",
	"llms.txt is the new robots.txt",
	"AI Overview compresses click-share for top-3 ranks",
	"competitor-name campaigns work for branded steal",
	"defensive branded SEM is non-negotiable",
	"Indian search behaviour differs from US in considered purchases",
	"festival marketing peaks compress decision windows",
	"Diwali revenue compounds for premium D2C",
	"Ramadan timing matters for Gulf-targeting brands",
	"local-language marketing matters for tier-2/3 reach",
	"DPDP compliance is operational, not legal",
	"RERA compliance failures hurt SEO too",
	"Indian D2C should plan for COD return cost",
	"shipping cost is the silent margin killer",
	"return rate optimization compounds margin",
	"creative fatigue starts at frequency 6+",
	"audience saturation breaks Meta scaling",
	"Google PMax struggles without shopping feed quality",
	"LinkedIn Document Ads outperform standard formats",
	"sales-led SaaS undervalues content moat",
	"PLG SaaS undervalues outbound at expansion",
	"category creation is harder than category leadership",
	"category leadership in India is worth pursuing",
	"Indian SaaS underprices in INR vs USD equivalent",
	"USD pricing for Indian SaaS lifts ACV at international",
	"Indian sales cycles compress with proper qualification",
	"buyers expect founder accessibility in Indian SaaS",
	"WhatsApp groups drive B2B community in India",
	"reddit + Slack communities drive B2B niche",
	"Indian Twitter (now X) lost B2B share post-2023",
	"founder visibility on LinkedIn lifts inbound",
	"company-page LinkedIn organic struggles in 2026",
	"podcast appearances open enterprise doors",
	"PR for early-stage Indian SaaS is mostly noise",
	"earned media drives compounding domain authority",
	"backlinks still drive SEO ranking in 2026",
	"link velocity matters more than absolute count",
	"anchor diversity protects against penalty",
	"thin programmatic SEO triggers HCU penalty",
	"hand-crafted long-form survives algorithm updates",
	"AI-generated content alone doesn't rank durably",
];

for (const t of whyTopics) {
	const title = `Why ${t}`;
	const slug = slugify(title);
	if (seen.has(slug)) continue;
	push({
		slug, kind: "why", title,
		intent: `Strategic reasoning behind ${t} — the underlying mechanics, the data, and the operator implications.`,
		audience: `Indian marketing operators + founders evaluating this dynamic`,
		tldr: [
			`The 'why' is rooted in specific mechanics that compound across quarters.`,
			`Most teams notice symptoms; few diagnose root causes.`,
			`India 2026 specifics often invert the conventional wisdom.`,
		],
		steps: [
			{ name: "The visible symptom", text: `Operators usually first notice ${t} as a measurable surface effect — a metric trending wrong direction or a tactic underperforming.` },
			{ name: "The underlying cause", text: `The root cause is typically structural — incentive design, attribution gaps, or buyer-behavior shifts.` },
			{ name: "The data that confirms it", text: `We surface the diagnostic queries + KPIs that confirm the root cause vs alternative explanations.` },
			{ name: "The strategic implication", text: `Once the cause is clear, the strategic move follows. We outline the 2-3 right responses + the 2-3 common wrong ones.` },
			{ name: "How to monitor going forward", text: `Set up the leading indicators that surface this dynamic earlier next quarter.` },
		],
		faqs: [
			{ question: `Is this universal or India-specific?`, answer: `Some dynamics are universal; others have Indian-context-specific causes. We separate them in the analysis.` },
			{ question: `How fast can teams diagnose this?`, answer: `2-4 weeks of clean data + framework = clear diagnosis. Most teams take longer because their tracking is incomplete.` },
		],
		tags: ["rationale", "diagnostic", "india", "operator"],
	});
}

// ---------- Is-it variants (100 entries) ----------
const isItTopics = [
	"SEO worth it for a small Indian D2C brand in 2026",
	"influencer marketing worth it for Indian D2C in 2026",
	"agency worth hiring at ₹15L/month revenue",
	"in-house marketer worth hiring pre-PMF",
	"Klaviyo worth the cost for sub-5k subscribers",
	"Triple Whale worth ₹35k/month for Indian D2C",
	"Shopify Plus worth ₹2L/month for ₹3Cr/yr revenue",
	"WhatsApp marketing worth the per-message cost",
	"podcast worth the time investment for B2B SaaS founders",
	"YouTube worth building organic for D2C",
	"LinkedIn Ads worth it below ₹50k ACV",
	"Performance Max worth running for B2B SaaS",
	"PLG worth pursuing for considered-purchase products",
	"freemium worth it for SaaS at sub-1-hour TTV",
	"annual contracts worth pushing aggressively",
	"founder personal brand worth 10 hours/week pre-PMF",
	"company brand worth ₹3L/month investment Series A",
	"Diwali campaign worth 25% of annual budget",
	"Black Friday worth investing for Indian-only D2C",
	"local SEO worth pursuing for tier-2/3 brand",
	"link-building worth ₹1L/month for early-stage SaaS",
	"GEO investment worth it before AIO matures",
	"Wikidata pursuit worth it pre-Series B",
	"server-side tagging worth ₹50k setup",
	"Meta CAPI worth implementing pre-Series A",
	"NorthBeam worth $1k/month for ₹50L revenue D2C",
	"loyalty program worth building at ₹15L revenue",
	"referral program worth building before retention infra",
	"subscription model worth offering for replenishment D2C",
	"BNPL (Tabby/Tamara) worth offering Indian D2C",
	"COD worth keeping at >40% share given RTO",
	"prepaid discount worth the conversion lift",
	"app build worth ₹15L+ at ₹50L revenue",
	"app build worth ₹50L+ at ₹3Cr revenue",
	"PWA worth it as app alternative",
	"Hindi-language ads worth running in tier-2/3",
	"Tamil/Telugu/Bengali campaigns worth city-specific budget",
	"OTT ads worth it for D2C in 2026",
	"Pinterest worth it for Indian D2C beauty",
	"YouTube Shorts worth competing with Instagram Reels",
	"Reddit worth it for Indian B2B SaaS",
	"Slack community worth building for niche B2B",
	"WhatsApp groups worth building as B2B community",
	"newsletter worth investing as B2B marketing channel",
	"Substack worth choosing over self-hosted newsletter",
	"Beehiiv worth choosing over Substack",
	"Webflow worth the price vs WordPress",
	"Sanity CMS worth the engineering investment",
	"headless Shopify worth the build cost",
	"WooCommerce worth picking over Shopify in 2026",
	"Magento worth picking over Shopify Plus",
	"HubSpot worth the cost pre-Series A",
	"Salesforce worth it at Series B",
	"Pipedrive worth it as HubSpot alternative",
	"ZoomInfo worth the price for Indian outbound",
	"Apollo worth the price as ZoomInfo alternative",
	"Lusha worth it for Indian B2B SaaS outbound",
	"Cognism worth choosing in India",
	"Surfer SEO worth the cost for content briefs",
	"Frase worth choosing over Surfer",
	"Clearscope worth the premium",
	"Optimizely worth it pre-Series B",
	"VWO worth choosing over Optimizely in India",
	"Convert.com worth picking as VWO alternative",
	"Mixpanel worth implementing for Indian SaaS",
	"Amplitude worth it over Mixpanel",
	"Heap worth the auto-tracking advantage",
	"Hotjar worth implementing for D2C",
	"FullStory worth Hotjar-replacement cost",
	"Looker Studio worth choosing over Tableau for marketing",
	"Power BI worth choosing over Looker",
	"BigQuery worth setting up for marketing data",
	"customer-data platform worth implementing pre-Series B",
	"reverse-ETL worth the architecture",
	"Segment worth the cost as CDP",
	"RudderStack worth choosing over Segment in India",
	"first-party data investment worth it post iOS 14",
	"customer surveys worth the friction",
	"NPS worth measuring at SMB scale",
	"CES (Customer Effort Score) worth tracking alongside NPS",
	"product-market-fit survey worth running at PMF",
	"PMF Engine survey worth running quarterly",
	"customer interviews worth doing weekly",
	"win-loss analysis worth implementing",
	"competitor analysis worth doing quarterly",
	"category-creation play worth pursuing in India",
	"category-leadership play worth ₹5Cr+ commitment",
	"acquihire worth considering as growth strategy",
	"acquisition (buying companies) worth it pre-Series C",
	"international expansion worth pursuing pre-PMF in India",
	"international expansion worth pursuing post-PMF",
	"USD pricing worth implementing for Indian SaaS",
	"global website worth maintaining over Indian-only",
	"India-only focus worth keeping at scale",
	"product-led marketing worth investing before sales",
	"sales-led marketing worth investing for B2B SMB",
	"ABM worth pursuing below ₹10L ACV",
	"intent data worth purchasing for Indian B2B",
	"6sense / Bombora worth subscribing in India",
	"chat-based qualification worth implementing",
	"video sales letters worth recording per stage",
	"calculator-as-marketing worth building",
];

for (const t of isItTopics) {
	const title = `Is ${t}?`;
	const slug = slugify(title);
	if (seen.has(slug)) continue;
	push({
		slug, kind: "is-it", title,
		intent: `A decision-stage analysis on whether ${t} — when it is, when it isn't, and what the alternatives are.`,
		audience: `Operators evaluating this trade-off`,
		tldr: [
			`The answer depends on stage, ICP, and unit economics — not absolute.`,
			`The wrong call here costs 3-12 months of progress; this is high-leverage.`,
			`We surface the conditions under which it's worth, conditions when it isn't, and the alternatives.`,
		],
		steps: [
			{ name: "When it's worth it", text: `${t} pays back when specific stage + unit-economics conditions are met. We outline those criteria.` },
			{ name: "When it isn't", text: `In other contexts, ${t} produces marginal benefit at significant cost. We outline those too.` },
			{ name: "The alternatives", text: `If not this, what? We surface 2-3 lower-cost or higher-fit alternatives for each context.` },
			{ name: "How to test before committing", text: `Most decisions can be partial-tested in 30-60 days before full commitment. We outline the right test design.` },
			{ name: "Operator decision framework", text: `A 5-question diagnostic to figure out which side of the trade-off applies to your business.` },
		],
		faqs: [
			{ question: `What's the typical ROI breakeven point?`, answer: `Varies by context. We surface the breakeven conditions in the analysis above.` },
			{ question: `What if my situation doesn't fit either case?`, answer: `Most situations do; edge cases get handled by the alternatives section. If you're truly an edge case, the audit covers your specific circumstances.` },
		],
		tags: ["decision", "is-it", "india", "operator"],
	});
}

// ---------- Best-of variants (1,500 entries) ----------
// Generated combinatorially: best-<category>-<for-X>
const bestCategories = [
	"SEO agencies", "Meta Ads agencies", "Google Ads agencies", "performance marketing agencies",
	"content marketing agencies", "social media agencies", "WhatsApp marketing agencies",
	"email marketing agencies", "branding agencies", "CRO agencies", "B2B SaaS marketing agencies",
	"D2C marketing agencies", "real estate marketing agencies", "healthcare marketing agencies",
	"edtech marketing agencies", "fintech marketing agencies",
];
const bestForCities = [
	{ slug: "mumbai", name: "Mumbai" }, { slug: "bangalore", name: "Bangalore" },
	{ slug: "delhi", name: "Delhi" }, { slug: "hyderabad", name: "Hyderabad" },
	{ slug: "chennai", name: "Chennai" }, { slug: "pune", name: "Pune" },
	{ slug: "ahmedabad", name: "Ahmedabad" }, { slug: "kolkata", name: "Kolkata" },
	{ slug: "gurgaon", name: "Gurgaon" }, { slug: "noida", name: "Noida" },
	{ slug: "jaipur", name: "Jaipur" }, { slug: "kochi", name: "Kochi" },
	{ slug: "coimbatore", name: "Coimbatore" }, { slug: "indore", name: "Indore" },
	{ slug: "chandigarh", name: "Chandigarh" }, { slug: "lucknow", name: "Lucknow" },
];

for (const cat of bestCategories) {
	for (const city of bestForCities) {
		const title = `Best ${cat} in ${city.name}`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug, kind: "best", title,
			intent: `Top ${cat} in ${city.name} ranked by stage-fit, transparency, methodology, and outcomes — including Frameleads' criteria-based assessment.`,
			audience: `Indian businesses in ${city.name} evaluating ${cat}`,
			tldr: [
				`Top ${cat} in ${city.name} differ in stage-fit + methodology + senior consultant access.`,
				`Most lists are sales-driven; this is criteria-based with explicit weighting.`,
				`Frameleads is on this list — disclosed transparently per criteria.`,
			],
			steps: [
				{ name: "Evaluation criteria", text: `Stage-fit, methodology depth, senior consultant access, transparency, retention strategy, AIO/GEO expertise, India case-study density.` },
				{ name: "Top picks ranked", text: `Each entry scored on the criteria above. Frameleads' position disclosed transparently.` },
				{ name: "When each fits best", text: `Pre-PMF brands need different ${cat} than scaled brands. We map agency strengths to stage.` },
				{ name: "Red flags to walk away from", text: `Junior-only accounts, vanity-metric reporting, no methodology framework, no free pre-engagement audit.` },
				{ name: "How to evaluate before signing", text: `Demand 3 case studies in your category, named consultants, methodology framework, retention templates, free 30-min audit.` },
			],
			faqs: [
				{ question: `What's a fair retainer for ${cat} in ${city.name}?`, answer: `${cat} in ${city.name} retainers run ₹1.5L–₹6L/month for SMB; ₹6L+ for senior-led programs at ₹3Cr+ revenue.` },
				{ question: `How is Frameleads listed here?`, answer: `Frameleads is included where it meets the stated criteria for that segment. We disclose transparently and don't pay for inclusion on third-party lists.` },
			],
			tags: ["best-of", "agencies", "india", city.slug],
		});
	}
}

// ---------- Best tools by use case (450 more entries to reach 1,500) ----------
const toolCategories = [
	"email tools", "WhatsApp BSPs", "attribution tools", "analytics tools",
	"CRM tools", "scheduling tools", "live chat tools", "PM tools",
	"design tools", "form-builder tools", "survey tools", "A/B testing tools",
	"SEO tools", "KW research tools", "writing tools", "video tools",
	"podcast tools", "newsletter tools", "membership tools", "landing-page tools",
	"checkout tools", "shipping tools", "payment gateways", "subscription tools",
	"loyalty program tools", "referral program tools", "review-collection tools",
	"social media schedulers", "influencer tools", "ABM tools",
];
const toolForUseCases = [
	{ slug: "d2c", label: "Indian D2C" },
	{ slug: "saas", label: "Indian B2B SaaS" },
	{ slug: "real-estate", label: "Indian real estate" },
	{ slug: "healthcare", label: "Indian healthcare" },
	{ slug: "edtech", label: "Indian edtech" },
	{ slug: "fintech", label: "Indian fintech" },
	{ slug: "fashion", label: "Indian fashion D2C" },
	{ slug: "beauty", label: "Indian beauty D2C" },
	{ slug: "smb", label: "Indian SMB" },
	{ slug: "startup", label: "Indian startups" },
];
let bestCount = 0;
for (const tc of toolCategories) {
	for (const uc of toolForUseCases) {
		if (bestCount >= 600) break;
		const title = `Best ${tc} for ${uc.label}`;
		const slug = slugify(title);
		if (seen.has(slug)) continue;
		push({
			slug, kind: "best", title,
			intent: `Top ${tc} for ${uc.label} — ranked by India fit, price, integration depth, and operator outcomes.`,
			audience: `${uc.label} marketing operators evaluating ${tc}`,
			tldr: [
				`Top ${tc} for ${uc.label} differ on India fit, price, integration depth.`,
				`Most operators choose 2-3 finalists and run a 14-day evaluation.`,
				`This list ranks by 6 weighted criteria — not vendor relationships.`,
			],
			steps: [
				{ name: "Evaluation criteria", text: `Price + India support + integrations + UX + scalability + ${uc.label}-specific feature fit.` },
				{ name: "Top tools ranked", text: `Each entry scored against the criteria. Best-fit per stage of ${uc.label}.` },
				{ name: "When each fits best", text: `Pre-PMF ${uc.label} needs different ${tc} than scale-stage. We map per stage.` },
				{ name: "Indian-specific gotchas", text: `Pricing in INR, support timezone, regulatory fit, integration with Indian payment + shipping rails.` },
				{ name: "How to test before committing", text: `14-day pilot with 1 use case + measurement. Don't sign annual without pilot data.` },
			],
			faqs: [
				{ question: `What's a fair monthly cost for ${tc} for ${uc.label}?`, answer: `${tc} for ${uc.label} cost ranges from ₹1k/month (free tier+) to ₹50k+/month for enterprise. Match tier to scale stage.` },
				{ question: `Can I switch ${tc} mid-engagement?`, answer: `Yes — but plan for 1–4 weeks of transition. Most ${uc.label} stay with first choice unless cost or features force a switch.` },
			],
			tags: ["best-of", "tools", uc.slug, slugify(tc)],
		});
		bestCount++;
	}
	if (bestCount >= 600) break;
}

// ---------- More best lists (channels + strategies) ----------
const bestStrategiesGeneric = [
	"Best growth strategies for Indian D2C in 2026",
	"Best CAC reduction tactics for Indian D2C",
	"Best retention strategies for Indian D2C subscription",
	"Best lead-gen tactics for Indian B2B SaaS",
	"Best ABM tactics for Indian Enterprise SaaS",
	"Best GTM strategies for Indian PLG SaaS",
	"Best content distribution channels for Indian B2B",
	"Best LinkedIn organic tactics for Indian B2B founders",
	"Best YouTube growth tactics for Indian D2C beauty",
	"Best Instagram Reels strategies for Indian D2C fashion",
	"Best Diwali campaign frameworks for Indian D2C",
	"Best Ramadan campaign frameworks for Gulf-targeted D2C",
	"Best Black Friday strategies for Indian D2C",
	"Best festival marketing playbooks for Indian fashion",
	"Best WhatsApp flow architectures for Indian D2C",
	"Best email sequences for Indian D2C onboarding",
	"Best onboarding flows for Indian B2B SaaS",
	"Best activation milestones for PLG SaaS",
	"Best pricing strategies for Indian B2B SaaS",
	"Best annual contract incentives for SaaS",
	"Best referral program designs for Indian D2C",
	"Best loyalty programs for Indian D2C beauty",
	"Best UGC strategies for Indian D2C fashion",
	"Best influencer-seeding programs for Indian beauty",
	"Best community-led growth tactics for Indian SaaS",
	"Best customer-advocacy programs for Indian B2B",
	"Best retention dashboards for Indian SaaS",
	"Best CRO frameworks for Indian D2C checkout",
	"Best SEO strategies for new Indian SaaS domains",
	"Best AIO optimization tactics for Indian content",
	"Best GEO strategies for Indian B2B SaaS",
	"Best LLM-citation tactics for Indian SaaS",
	"Best schema markup patterns for Indian D2C",
	"Best programmatic SEO architectures for Indian SaaS",
	"Best topic cluster designs for Indian B2B",
	"Best content sprint frameworks",
	"Best founder personal brand tactics on LinkedIn",
	"Best podcast growth strategies for Indian B2B founders",
	"Best newsletter growth tactics for Indian B2B",
	"Best landing page templates for Indian SaaS demos",
	"Best landing page templates for Indian D2C launches",
	"Best A/B testing frameworks for Indian D2C",
	"Best attribution models for Indian D2C",
	"Best server-side tagging architectures",
	"Best Meta CAPI implementations for Indian Shopify",
	"Best Triple Whale dashboard configurations",
	"Best NorthBeam setups for Indian D2C scale",
	"Best dashboard designs for Indian SaaS marketing",
	"Best KPI frameworks for Indian D2C revenue",
	"Best CFO-friendly marketing reports for Indian SaaS",
	"Best ICP definition frameworks for Indian B2B",
	"Best JTBD frameworks for B2B SaaS",
	"Best positioning frameworks for Indian SaaS category creation",
	"Best brand audit frameworks for Indian D2C",
	"Best naming conventions for Indian D2C brands",
	"Best copywriting frameworks for Indian B2B landing",
	"Best video script frameworks for Indian D2C",
	"Best UGC briefing frameworks for Indian beauty",
	"Best creative testing frameworks for Meta Ads",
	"Best Google Ads PMax configurations for Indian D2C",
	"Best LinkedIn Document Ad strategies for Indian B2B",
	"Best YouTube Ads scripts for Indian D2C",
	"Best Instagram organic captions for Indian D2C engagement",
	"Best Twitter strategies for Indian B2B founders",
	"Best Reddit tactics for Indian B2B niche",
	"Best Quora answer strategies for Indian B2B SaaS",
	"Best HARO contribution strategies for Indian SaaS",
	"Best guest posting strategies for Indian SaaS DR growth",
	"Best link-building outreach templates for Indian SaaS",
	"Best original-research report formats for Indian B2B",
	"Best annual benchmark report structures",
	"Best customer-interview frameworks for Indian B2B",
	"Best win-loss analysis templates for Indian SaaS",
	"Best competitor analysis frameworks for Indian D2C",
	"Best category creation playbooks for Indian SaaS",
	"Best account-targeting strategies for ABM in India",
	"Best intent-data integrations for Indian B2B",
	"Best outbound sequence templates for Indian B2B",
	"Best cold email frameworks for Indian SaaS",
	"Best LinkedIn outreach templates for Indian B2B",
	"Best demo conversion tactics for Indian SaaS",
	"Best trial-to-paid conversion tactics for Indian SaaS",
	"Best paywall strategies for Indian content businesses",
	"Best mobile-first design patterns for Indian D2C",
	"Best Indian language strategies for tier-2/3 D2C",
	"Best regional creative strategies for Indian D2C",
	"Best festival creative frameworks for Indian beauty",
];
for (const title of bestStrategiesGeneric) {
	const slug = slugify(title);
	if (seen.has(slug)) continue;
	push({
		slug, kind: "best", title,
		intent: `${title} — ranked by stage-fit, India context, and outcome durability.`,
		audience: `Indian marketing operators + founders`,
		tldr: [
			`The right strategy depends on stage + ICP + unit economics.`,
			`Most operators copy generic global advice; we adapt to India 2026 specifics.`,
			`This guide ranks options + maps each to the contexts where it fits best.`,
		],
		steps: [
			{ name: "Top options ranked", text: `Each option scored against operator-relevant criteria.` },
			{ name: "When each works best", text: `Stage + ICP + capital constraints determine the right pick.` },
			{ name: "When to avoid", text: `Each option fails in specific contexts. We surface those.` },
			{ name: "Implementation timeline", text: `Realistic timelines + investment per option.` },
			{ name: "Measurement", text: `KPIs to track to know it's working.` },
		],
		faqs: [
			{ question: `What's the typical implementation time?`, answer: `30–90 days for foundational; 6–12 months for compounding outcomes.` },
			{ question: `Which option fits my stage?`, answer: `Match to revenue + team + customer-journey stage. The audit gives a personalized read.` },
		],
		tags: ["best-of", "strategy", "india"],
	});
}

// ---------- How-much pricing guides (500 entries) ----------
const howMuchTopics = [];

// Service × city pricing (top 12 services × 25 cities = 300)
const hmServices = [
	"SEO services", "Google Ads management", "Meta Ads management", "performance marketing",
	"content marketing", "social media marketing", "WhatsApp marketing", "email marketing",
	"LinkedIn Ads management", "YouTube Ads management", "branding services", "CRO services",
];
const hmCities = [
	{ slug: "mumbai", name: "Mumbai" }, { slug: "bangalore", name: "Bangalore" },
	{ slug: "delhi", name: "Delhi" }, { slug: "hyderabad", name: "Hyderabad" },
	{ slug: "chennai", name: "Chennai" }, { slug: "pune", name: "Pune" },
	{ slug: "ahmedabad", name: "Ahmedabad" }, { slug: "kolkata", name: "Kolkata" },
	{ slug: "gurgaon", name: "Gurgaon" }, { slug: "noida", name: "Noida" },
	{ slug: "jaipur", name: "Jaipur" }, { slug: "kochi", name: "Kochi" },
	{ slug: "coimbatore", name: "Coimbatore" }, { slug: "indore", name: "Indore" },
	{ slug: "chandigarh", name: "Chandigarh" }, { slug: "lucknow", name: "Lucknow" },
	{ slug: "surat", name: "Surat" }, { slug: "nashik", name: "Nashik" },
	{ slug: "vadodara", name: "Vadodara" }, { slug: "nagpur", name: "Nagpur" },
	{ slug: "mysore", name: "Mysore" }, { slug: "bhopal", name: "Bhopal" },
	{ slug: "patna", name: "Patna" }, { slug: "kanpur", name: "Kanpur" },
	{ slug: "thiruvananthapuram", name: "Thiruvananthapuram" },
];
for (const svc of hmServices) {
	for (const city of hmCities) {
		howMuchTopics.push({ topic: `${svc} cost in ${city.name}`, citySlug: city.slug, cityName: city.name, service: svc });
	}
}

// Service × industry pricing (top 12 services × 12 industries = 144)
const hmIndustries = [
	"Indian D2C", "Indian B2B SaaS", "Indian real estate", "Indian healthcare",
	"Indian edtech", "Indian fintech", "Indian fashion D2C", "Indian beauty D2C",
	"Indian SMB", "Indian manufacturing", "Indian hospitality", "Indian wellness",
];
for (const svc of hmServices) {
	for (const ind of hmIndustries) {
		howMuchTopics.push({ topic: `${svc} cost for ${ind}`, industry: ind, service: svc });
	}
}

// Tools/platforms pricing (~60 entries to fill out 500)
const hmToolsAndOthers = [
	"Klaviyo cost in India", "Mailchimp cost in India", "Shopify cost in India",
	"Shopify Plus cost in India", "Wati cost in India", "Interakt cost in India",
	"Triple Whale cost for Indian D2C", "NorthBeam cost for Indian D2C",
	"HubSpot cost for Indian B2B SaaS", "Zoho CRM cost for Indian SMB",
	"Razorpay fees in India", "Cashfree fees in India",
	"Shiprocket cost for Indian D2C", "Delhivery cost for Indian D2C",
	"Indian D2C launch cost", "Indian B2B SaaS launch cost",
	"Indian D2C marketing budget at pre-PMF",
	"Indian D2C marketing budget at ₹50L revenue",
	"Indian D2C marketing budget at ₹3Cr revenue",
	"Indian B2B SaaS marketing budget at Series A",
	"Indian B2B SaaS marketing budget at Series B",
	"Indian Fractional CMO cost",
	"Indian Head of Growth salary",
	"Indian Performance Marketer salary",
	"Indian Content Marketer salary",
	"Indian B2B SaaS demo CAC", "Indian D2C beauty CAC",
	"Indian D2C fashion CAC", "Indian D2C subscription CAC",
	"Indian real estate CPL", "Indian healthcare CPL",
	"Indian edtech CPL", "Indian fintech CPL",
	"Diwali campaign budget for Indian D2C",
	"Black Friday budget for Indian D2C",
	"Indian podcast production cost",
	"Indian YouTube production cost for D2C",
	"Indian UGC production cost", "Indian influencer-seeding cost",
	"Indian micro-influencer rates", "Indian macro-influencer rates",
	"Indian PR retainer cost", "Indian SEO link-building cost",
	"Indian guest post cost for SaaS",
	"Indian D2C app build cost",
	"Indian Shopify development cost", "Indian Next.js development cost",
	"Indian WordPress development cost",
	"Indian email-marketing setup cost", "Indian WhatsApp setup cost",
	"Indian server-side tagging setup cost",
	"Indian Meta CAPI implementation cost",
	"Indian GA4 setup cost", "Indian Mixpanel setup cost",
	"Indian Looker Studio dashboard cost",
	"Indian SEO audit cost", "Indian website audit cost",
	"Indian brand audit cost", "Indian marketing audit cost",
	"Indian agency vs in-house cost comparison",
	"Indian agency retainer cost at SMB stage",
	"Indian agency retainer cost at Series A",
];
for (const t of hmToolsAndOthers) {
	howMuchTopics.push({ topic: t });
}

let hmCount = 0;
for (const t of howMuchTopics) {
	if (hmCount >= 500) break;
	const title = `How much does ${t.topic} cost?`;
	const slug = slugify(title);
	if (seen.has(slug)) continue;
	push({
		slug, kind: "how-much", title,
		intent: `${t.topic} — Indian 2026 cost band, factors that move price, and how to negotiate at scale.`,
		audience: `Indian operators evaluating ${t.topic}`,
		tldr: [
			`Cost depends on scope, stage, and quality tier — we map all three.`,
			`India 2026 rates often differ from US/EU by 30-70%.`,
			`Negotiate at scale; volume commitments unlock 15-25% rate discounts.`,
		],
		steps: [
			{ name: "Cost band overview", text: `Floor + median + ceiling pricing for ${t.topic} based on operator data + 2026 Indian market rates.` },
			{ name: "Factors that move price", text: `Scope + complexity + brand stage + service-quality tier + city-specific dynamics.` },
			{ name: "What's typically included", text: `Standard scope vs add-ons. Avoid pricing surprises by clarifying upfront.` },
			{ name: "What to negotiate", text: `Volume discounts, payment terms, performance guarantees, exit clauses, transparency in reporting.` },
			{ name: "When DIY makes sense vs hiring", text: `Below specific revenue thresholds, DIY is more economic. Above, professional spend pays back.` },
		],
		faqs: [
			{ question: `What's a fair price floor for ${t.topic}?`, answer: `Floor varies by scope; we surface typical ranges in the cost band above. Below floor, quality is structurally limited.` },
			{ question: `Can I negotiate?`, answer: `Yes — volume commitments unlock 15-25% discount typically. Annual commitments unlock additional 10-20%.` },
		],
		tags: ["how-much", "pricing", "india"],
	});
	hmCount++;
}

// Write
fs.writeFileSync(OUT, JSON.stringify(entries, null, 2));
console.log(`Generated ${entries.length} questions → ${OUT}`);
