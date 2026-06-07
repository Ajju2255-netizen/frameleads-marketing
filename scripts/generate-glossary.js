#!/usr/bin/env node
/**
 * Generates data/glossary.json — the Tier 8 glossary corpus.
 * Run: node scripts/generate-glossary.js
 *
 * Each entry is operator-grade: India-specific benchmarks, formula, worked
 * example, related-terms graph, common mistakes. Schema mirrors what
 * Tier8GlossaryPage already consumes.
 */

const fs = require("node:fs");
const path = require("node:path");

const OUT = path.join(__dirname, "..", "data", "glossary.json");

const entries = [];
const seen = new Set();

function add(e) {
	if (seen.has(e.id)) return;
	seen.add(e.id);
	entries.push({
		id: e.id,
		term: e.term,
		expansion: e.expansion,
		definition: e.definition,
		formulaProse: e.formulaProse ?? "",
		formula: e.formula ?? "",
		exampleInput: e.exampleInput ?? "",
		exampleOutput: e.exampleOutput ?? "",
		tldr: e.tldr,
		extendedExplanation: e.extendedExplanation,
		indiaBenchmarks: e.indiaBenchmarks ?? [],
		commonMistakes: e.commonMistakes ?? [],
		relatedTerms: e.relatedTerms ?? [],
		ctaVariant: e.ctaVariant ?? "audit",
	});
}

// ─────────────────────────────────────────────────────────────────
// Section 1 — Unit economics (already-shipped + new)
// ─────────────────────────────────────────────────────────────────

add({
	id: "ltv",
	term: "LTV",
	expansion: "Lifetime Value",
	definition: "LTV, or Lifetime Value, is the total revenue a business expects from one customer over the entire relationship. It is calculated as average order value multiplied by purchase frequency multiplied by average customer lifespan, then adjusted for gross margin to compute Gross Margin LTV.",
	formulaProse: "LTV equals average order value multiplied by repeat-purchase frequency multiplied by average customer lifespan. For unit-economics decisions, multiply that by gross margin percentage to get Gross Margin LTV.",
	formula: "LTV = AOV × Purchase Frequency × Customer Lifespan × Gross Margin %",
	exampleInput: "AOV ₹1,200 · 3.4 purchases/yr · 2.1 years lifespan · 38% margin",
	exampleOutput: "Gross Margin LTV ≈ ₹3,253",
	tldr: [
		"LTV = AOV × purchase frequency × lifespan × gross margin %.",
		"Pair with CAC; LTV/CAC ≥ 3 is the healthy threshold.",
		"Indian D2C beauty LTV bands: ₹1,500–₹6,000 depending on category.",
	],
	extendedExplanation: "LTV is the second half of unit economics. Without LTV, CAC tells you nothing — a ₹500 CAC is great if LTV is ₹3,000 and terrible if LTV is ₹600. The trap most D2C founders fall into: tracking gross-revenue LTV, which inflates the number 2-3× compared to honest gross-margin LTV. Use the latter when discussing acquisition spend with a CFO. For SaaS, the equivalent is Customer Lifetime Value calculated from MRR / churn, then margin-adjusted.",
	indiaBenchmarks: [
		"D2C beauty: ₹1,500–₹6,000 (Gross Margin LTV)",
		"D2C fashion: ₹1,200–₹4,500",
		"D2C wellness/subscription: ₹3,000–₹15,000",
		"B2B SaaS (SMB): ₹40,000–₹3,00,000 ARR/customer",
		"Enterprise SaaS: ₹6,00,000+",
	],
	commonMistakes: [
		"Using gross-revenue LTV instead of gross-margin LTV.",
		"Ignoring refunds and 30-day churn.",
		"Treating LTV as static instead of cohort-evolving.",
		"Forgetting that improving LTV (retention, AOV) is often higher-leverage than lowering CAC.",
	],
	relatedTerms: ["cac", "roas", "cac-payback", "arpu"],
	ctaVariant: "consultation",
});

add({
	id: "ltv-cac",
	term: "LTV/CAC",
	expansion: "Lifetime Value to Customer Acquisition Cost ratio",
	definition: "LTV/CAC is the ratio of customer lifetime value to customer acquisition cost. It tells a business whether the cost of acquiring a customer is justified by the value they bring. A healthy ratio sits at 3 or above; below 1 means the business is unprofitable per acquisition.",
	formulaProse: "LTV/CAC equals lifetime value of a customer divided by the cost of acquiring that customer. Use Gross Margin LTV (not gross revenue) for a true reading.",
	formula: "LTV/CAC = Gross Margin LTV ÷ Fully-loaded CAC",
	exampleInput: "Gross Margin LTV ₹3,253 · Fully-loaded CAC ₹1,200",
	exampleOutput: "LTV/CAC ≈ 2.7x",
	tldr: [
		"LTV/CAC ≥ 3 is the healthy threshold; ≥ 5 in mature SaaS.",
		"Use Gross Margin LTV and fully-loaded CAC.",
		"India D2C usually 1.5–3.5x in years 1–2; 4x+ by year 3.",
	],
	extendedExplanation: "LTV/CAC compresses unit economics into one number. Investors live by it. Below 1: every customer loses money. 1–3: marginal — works only if you can drive LTV up rapidly. 3–5: healthy. 5+: usually means under-investing in growth. The key trap: people use gross-revenue LTV (inflated) and media-only CAC (under-counted). Always strip to honest numbers — gross margin × fully-loaded CAC including agency fees, tooling, creative cost.",
	indiaBenchmarks: [
		"Indian D2C beauty year 1: 1.4–2.2x",
		"Indian D2C beauty year 3: 3.5–5x",
		"B2B SaaS SMB year 2: 3–4.5x",
		"B2B SaaS Enterprise year 3: 4–6x",
		"Real estate (single-transaction): 4–8x but volume-constrained",
	],
	commonMistakes: [
		"Using gross-revenue LTV inflates ratio 2–3×.",
		"Excluding agency / tooling / creative cost from CAC underprices acquisition.",
		"Treating LTV/CAC as static — it should evolve cohort-over-cohort.",
		"Optimizing LTV/CAC by cutting growth (artificially high ratio with no scale).",
	],
	relatedTerms: ["ltv", "cac", "cac-payback", "gross-margin", "roas"],
	ctaVariant: "consultation",
});

add({
	id: "cac-payback",
	term: "CAC Payback",
	expansion: "Customer Acquisition Cost Payback Period",
	definition: "CAC Payback is the number of months it takes to earn back the cost of acquiring a customer through their gross-margin contribution. It is calculated as fully-loaded CAC divided by monthly gross profit per customer. Lower is better; under 12 months is healthy for D2C, under 18 months for SaaS.",
	formulaProse: "CAC Payback equals fully-loaded customer acquisition cost divided by the average monthly gross profit per customer.",
	formula: "CAC Payback (months) = Fully-loaded CAC ÷ (AOV × Gross Margin × Monthly Purchase Frequency)",
	exampleInput: "CAC ₹1,200 · AOV ₹999 · GM 45% · 0.6 purchases/month",
	exampleOutput: "Payback ≈ 4.4 months",
	tldr: [
		"CAC Payback = CAC ÷ monthly gross profit per customer.",
		"D2C target: under 12 months. SaaS SMB: under 18. Enterprise: under 24.",
		"Drives runway math; faster payback means you can scale spend faster.",
	],
	extendedExplanation: "Payback period is the most CFO-friendly metric for marketing investment. It directly answers 'how fast does my spend recycle?' Faster payback = faster reinvestment = exponential growth math. Slow payback (24+ months) starves growth — every rupee of spend takes 2 years to recover, so doubling spend means doubling cash needs. Indian D2C with 6–9 month payback can scale aggressively; SaaS with 18–24 month payback needs serious capital reserves.",
	indiaBenchmarks: [
		"Indian D2C beauty: 4–9 months (healthy)",
		"Indian D2C fashion: 5–12 months",
		"Indian D2C subscription/wellness: 3–7 months",
		"Indian B2B SaaS SMB: 9–18 months",
		"Indian B2B SaaS Enterprise: 14–24 months",
	],
	commonMistakes: [
		"Using contribution margin instead of gross margin (overstates payback speed).",
		"Excluding refunds + COD return cost (Indian D2C effective payback is 10–18% slower).",
		"Treating payback as static — early cohorts often pay back faster than later as competition rises.",
		"Optimizing for short payback at the cost of LTV (low-quality customers churn fast).",
	],
	relatedTerms: ["cac", "ltv", "ltv-cac", "gross-margin", "contribution-margin"],
	ctaVariant: "consultation",
});

add({
	id: "arpu",
	term: "ARPU",
	expansion: "Average Revenue Per User",
	definition: "ARPU is the average revenue earned from one user (or customer) over a defined period, typically monthly. It is calculated by dividing total revenue by the number of users in that period. ARPU is most useful for subscription businesses where it tracks pricing-power and expansion-revenue trends.",
	formulaProse: "ARPU equals total revenue in a period divided by the number of users (or paying customers) in that period.",
	formula: "ARPU = Total Revenue ÷ Number of Users",
	exampleInput: "Monthly revenue ₹50L · 5,000 paying customers",
	exampleOutput: "ARPU = ₹1,000/month",
	tldr: [
		"ARPU = total revenue ÷ users for the period.",
		"For SaaS, monthly ARPU is the canonical version (also called ARPA).",
		"Track ARPPU (paying users only) separately from ARPU (all users) for freemium models.",
	],
	extendedExplanation: "ARPU is most useful as a trend metric, not an absolute one. Rising ARPU usually signals successful upsell, pricing increases, or shift to higher-value plans. Falling ARPU may mean discounting, churn of high-value customers, or expansion into lower-tier segments. For freemium SaaS, distinguish ARPU (all users) from ARPPU (only paying users) — the gap shows monetization headroom.",
	indiaBenchmarks: [
		"Indian B2B SaaS SMB: ₹2,000–₹15,000/month ARPU",
		"Indian B2B SaaS mid-market: ₹15,000–₹80,000/month",
		"Indian B2B SaaS Enterprise: ₹80,000–₹6,00,000/month",
		"Indian D2C beauty (subscription): ₹400–₹1,200/month",
		"Indian consumer SaaS: ₹150–₹800/month",
	],
	commonMistakes: [
		"Mixing free and paid users in the denominator without segmenting (lowers reported ARPU artificially).",
		"Using one-time revenue in subscription ARPU (skews trend).",
		"Comparing ARPU across price tiers without normalizing.",
		"Ignoring expansion revenue (upgrades, add-ons) in ARPU calculations.",
	],
	relatedTerms: ["mrr", "arr", "ltv", "nrr"],
	ctaVariant: "consultation",
});

add({
	id: "mrr",
	term: "MRR",
	expansion: "Monthly Recurring Revenue",
	definition: "MRR is the predictable revenue a subscription business expects each month from active subscribers. It is calculated as the sum of all monthly contract values for active customers. MRR strips out one-time payments and surfaces the underlying recurring engine.",
	formulaProse: "MRR equals the sum of monthly subscription values across all active customers. Annual contracts are normalized by dividing by 12.",
	formula: "MRR = Σ (Monthly contract value) across active customers",
	exampleInput: "120 customers × ₹4,000/mo + 30 customers × ₹15,000/mo",
	exampleOutput: "MRR = ₹9,30,000/month",
	tldr: [
		"MRR is the SaaS heartbeat — predictability of revenue.",
		"Decompose into: New, Expansion, Contraction, Churn (each tracked separately).",
		"India SaaS MRR cohorts of ₹50L+ are usually post-Series A.",
	],
	extendedExplanation: "MRR's power is in its decomposition. Net New MRR = New + Expansion - Contraction - Churn. If net new is positive and growing, the engine compounds. If churn + contraction outpaces new + expansion, you are in revenue debt. Indian SaaS founders often track gross MRR but ignore expansion vs contraction — a fatal blind spot when annual renewals come due. ARR (Annual Recurring Revenue) is just MRR × 12 with cleanup for ramp deals.",
	indiaBenchmarks: [
		"Pre-seed B2B SaaS: ₹0–₹2L MRR",
		"Seed B2B SaaS: ₹2L–₹10L MRR",
		"Series A B2B SaaS: ₹10L–₹50L MRR",
		"Series B+: ₹50L–₹3Cr MRR",
		"Late-stage SaaS: ₹3Cr+ MRR",
	],
	commonMistakes: [
		"Including one-time setup fees in MRR.",
		"Counting annual contracts at full value rather than normalizing to monthly.",
		"Not distinguishing gross MRR from net new MRR (hides churn).",
		"Treating MRR forecasts as commitments — they're probabilistic until billed.",
	],
	relatedTerms: ["arr", "arpu", "nrr", "churn-rate", "ltv"],
	ctaVariant: "consultation",
});

add({
	id: "arr",
	term: "ARR",
	expansion: "Annual Recurring Revenue",
	definition: "ARR is the annualized value of recurring subscription revenue, typically calculated as MRR multiplied by 12. ARR is the primary headline metric for SaaS valuation and is reported to investors as the company's run-rate.",
	formulaProse: "ARR equals monthly recurring revenue multiplied by 12, with adjustments for annual contracts and ramp deals.",
	formula: "ARR = MRR × 12",
	exampleInput: "MRR ₹9,30,000",
	exampleOutput: "ARR = ₹1.116 Cr",
	tldr: [
		"ARR = MRR × 12; the SaaS valuation headline.",
		"Investors evaluate growth by ARR multiples (5–25× ARR for healthy SaaS).",
		"Distinguish committed ARR (signed contracts) from forecasted.",
	],
	extendedExplanation: "ARR is the single most-quoted SaaS metric in fundraising. Series A typically requires ₹10L–₹40L ARR with healthy growth; Series B requires ₹3–10Cr ARR. The trap: ARR can be inflated by one-time deals signed as 'annual subscriptions' that won't renew. Use NRR alongside ARR — ARR growing while NRR < 100% means churn is masking underlying weakness. cARR (committed ARR) excludes ramp deals and trials; iARR (implied) projects forward.",
	indiaBenchmarks: [
		"Pre-Seed: ₹0–₹25L ARR",
		"Seed: ₹25L–₹1.5Cr ARR",
		"Series A: ₹1.5Cr–₹8Cr ARR",
		"Series B: ₹8Cr–₹40Cr ARR",
		"Series C+: ₹40Cr+ ARR",
	],
	commonMistakes: [
		"Calling one-time revenue 'ARR'.",
		"Ignoring contraction in ARR growth math.",
		"Reporting iARR (implied / projected) as cARR (committed) to investors.",
		"Treating ARR as cash — it's contracted future revenue, not bank balance.",
	],
	relatedTerms: ["mrr", "arpu", "nrr", "ltv", "churn-rate"],
	ctaVariant: "consultation",
});

add({
	id: "nrr",
	term: "NRR",
	expansion: "Net Revenue Retention",
	definition: "NRR measures how much revenue a cohort of customers generates today compared to one year ago, accounting for upgrades, downgrades, and churn. It is calculated as starting MRR plus expansion minus contraction minus churn, divided by starting MRR. NRR above 100% means the cohort grew without any new customers.",
	formulaProse: "NRR equals starting cohort revenue plus expansion revenue minus contraction revenue minus churn, divided by starting cohort revenue, expressed as a percentage.",
	formula: "NRR = (Starting MRR + Expansion - Contraction - Churn) ÷ Starting MRR",
	exampleInput: "Starting ₹50L · Expansion ₹15L · Contraction ₹4L · Churn ₹6L",
	exampleOutput: "NRR = 110%",
	tldr: [
		"NRR > 100% means existing cohort grows without new customers (best-in-class).",
		"NRR 90–100% is acceptable; below 90% means leaky bucket.",
		"India B2B SaaS top quartile: 110–130% NRR.",
	],
	extendedExplanation: "NRR is the SaaS efficiency metric investors care about most after ARR. NRR > 120% indicates the product is hooking customers and they expand spend over time — that compounds. NRR < 90% means the company is replacing churned revenue rather than building on it; that's a leaky bucket no amount of new sales fills profitably. Indian SaaS often optimizes for new-logo growth and ignores NRR — until the renewal cycle hits and churn is structural.",
	indiaBenchmarks: [
		"Top quartile Indian B2B SaaS: 110–130% NRR",
		"Median: 95–105%",
		"Bottom quartile: 80–90%",
		"PLG/freemium NRR is usually lower (more churn): 95–110%",
		"Vertical / sticky SaaS: 115–140%",
	],
	commonMistakes: [
		"Confusing NRR with GRR (NRR includes expansion; GRR doesn't).",
		"Calculating NRR cohort-by-cohort instead of company-wide and missing pattern shifts.",
		"Excluding price-increase impact (counts as expansion).",
		"Ignoring the time-window definition — NRR over 12 months vs trailing 30 days reveals different dynamics.",
	],
	relatedTerms: ["grr", "mrr", "churn-rate", "expansion-revenue"],
	ctaVariant: "consultation",
});

add({
	id: "grr",
	term: "GRR",
	expansion: "Gross Revenue Retention",
	definition: "GRR measures how much of a cohort's starting revenue is retained after subtracting churn and contraction, ignoring expansion. It is calculated as starting MRR minus churn minus contraction, divided by starting MRR. GRR is always less than or equal to NRR and surfaces the underlying retention without expansion masking.",
	formulaProse: "GRR equals starting cohort revenue minus contraction minus churn, divided by starting cohort revenue, expressed as a percentage. Expansion is excluded.",
	formula: "GRR = (Starting MRR - Contraction - Churn) ÷ Starting MRR",
	exampleInput: "Starting ₹50L · Contraction ₹4L · Churn ₹6L",
	exampleOutput: "GRR = 80%",
	tldr: [
		"GRR strips expansion to show core retention.",
		"GRR ≥ 90% is healthy SaaS; ≥ 95% is best-in-class.",
		"Compare GRR with NRR to see expansion contribution: NRR - GRR = expansion %.",
	],
	extendedExplanation: "GRR is the honest retention number. NRR can mask weakness if upsell drives the headline number while churn underneath bleeds. GRR exposes that. Indian B2B SaaS frequently has GRR in the 80–90% range while NRR is 100–115% — meaning expansion is plugging a leaky retention base. The strategic fix is upstream — improve onboarding, reduce time-to-value, fix the product-market-fit gap that drives churn.",
	indiaBenchmarks: [
		"Best-in-class Indian B2B SaaS: 92–97% GRR",
		"Median: 85–90%",
		"Bottom quartile: 75–85%",
		"PLG/freemium: lower (75–88%)",
		"Vertical / sticky SaaS: 90–96%",
	],
	commonMistakes: [
		"Using NRR as a proxy for GRR — they tell different stories.",
		"Reporting only NRR to investors when GRR is significantly weaker.",
		"Calculating GRR over too short a window (under 12 months hides delayed churn).",
		"Treating GRR as a fixed property rather than a quarterly-tracked operating metric.",
	],
	relatedTerms: ["nrr", "mrr", "churn-rate", "contraction"],
	ctaVariant: "consultation",
});

add({
	id: "churn-rate",
	term: "Churn Rate",
	expansion: "Customer or Revenue Churn Rate",
	definition: "Churn Rate is the percentage of customers (or revenue) lost in a period. Customer churn = customers lost ÷ customers at period start. Revenue churn = MRR lost ÷ MRR at period start. Churn is measured monthly for SaaS, quarterly for D2C, and is the inverse of retention.",
	formulaProse: "Customer churn rate equals number of customers lost in a period divided by customers at period start. Revenue churn divides lost MRR by starting MRR.",
	formula: "Churn Rate = Customers Lost ÷ Customers at Period Start",
	exampleInput: "5,000 customers at start · 150 churned in month",
	exampleOutput: "Monthly churn = 3.0%",
	tldr: [
		"Customer churn measures account loss; revenue churn measures MRR loss.",
		"Healthy B2B SaaS monthly churn: under 1.5%; D2C subscription: under 5%.",
		"Annual churn ≈ monthly × 12 (compounding small effects matter).",
	],
	extendedExplanation: "Churn is the cancer of subscription businesses. 5% monthly churn looks small until you see 46% annual churn — the company replaces nearly half its customer base every year just to stand still. The fix is upstream: better onboarding, time-to-value, customer-success investment, product fit. Reducing churn by 1% absolute (from 5% to 4% monthly) changes annual retention from 54% to 61% — that's the difference between a leaky and a sustainable engine.",
	indiaBenchmarks: [
		"Indian B2B SaaS Enterprise monthly churn: 0.5–1.5%",
		"Indian B2B SaaS SMB monthly churn: 2–5%",
		"Indian D2C subscription monthly churn: 4–10%",
		"Indian consumer SaaS monthly churn: 5–15%",
		"Indian PLG freemium monthly churn (paid): 3–8%",
	],
	commonMistakes: [
		"Confusing customer churn with revenue churn — they tell different stories.",
		"Reporting gross churn but ignoring contraction (also a form of revenue loss).",
		"Calculating churn over too short a window (monthly variance is high).",
		"Optimizing churn at the cost of product simplicity (over-engineered retention features).",
	],
	relatedTerms: ["nrr", "grr", "mrr", "retention-rate"],
	ctaVariant: "consultation",
});

add({
	id: "aov",
	term: "AOV",
	expansion: "Average Order Value",
	definition: "AOV is the average revenue per order in a defined period. It is calculated by dividing total revenue by total orders. AOV is the primary lever for scaling D2C economics — increasing AOV directly improves CAC payback without needing to lower acquisition cost.",
	formulaProse: "AOV equals total revenue divided by total number of orders in the same period.",
	formula: "AOV = Total Revenue ÷ Total Orders",
	exampleInput: "Monthly revenue ₹50L · 5,500 orders",
	exampleOutput: "AOV = ₹909",
	tldr: [
		"AOV = revenue ÷ orders; the simplest unit-economics lever.",
		"D2C strategies: bundle, free-shipping threshold, cross-sell at checkout.",
		"India D2C beauty AOV: ₹600–₹1,800; fashion: ₹800–₹3,500.",
	],
	extendedExplanation: "AOV is more powerful than CAC reduction in many D2C scenarios. A 20% AOV increase improves CAC payback and LTV proportionally, with no media-cost change. The classic levers: bundles (3-product instead of 1), free-shipping threshold above natural AOV, post-add-to-cart cross-sell, subscription discount nudging single → recurring. Indian D2C especially benefits because COD and ad CPM headwinds make CAC reduction hard; AOV growth bypasses both.",
	indiaBenchmarks: [
		"Indian D2C beauty: ₹600–₹1,800",
		"Indian D2C fashion: ₹800–₹3,500",
		"Indian D2C wellness/supplements: ₹500–₹1,500",
		"Indian D2C food/snacks: ₹400–₹1,200",
		"Indian D2C jewelry: ₹2,500–₹15,000",
	],
	commonMistakes: [
		"Pursuing AOV at the cost of conversion rate (over-bundled checkouts hurt CR).",
		"Treating AOV as fixed by category instead of as a design variable.",
		"Including refunds in revenue but not in order count (overstates AOV).",
		"Not segmenting AOV by acquisition channel (paid vs organic AOV often differs 20%+).",
	],
	relatedTerms: ["ltv", "purchase-frequency", "cac", "conversion-rate"],
	ctaVariant: "consultation",
});

add({
	id: "purchase-frequency",
	term: "Purchase Frequency",
	expansion: "Purchase Frequency",
	definition: "Purchase Frequency is the average number of times a customer purchases in a defined period (typically annually). It is calculated by dividing total orders by unique customers. Frequency drives LTV directly — doubling frequency doubles revenue per customer at the same AOV.",
	formulaProse: "Purchase Frequency equals total orders divided by unique customers in the period.",
	formula: "Purchase Frequency = Total Orders ÷ Unique Customers",
	exampleInput: "Annual orders 60,000 · 18,000 unique customers",
	exampleOutput: "Frequency = 3.3 orders/customer/year",
	tldr: [
		"Frequency is one of three LTV inputs (with AOV and lifespan).",
		"D2C beauty 2.5–4×/yr is healthy; subscriptions push 12+×/yr.",
		"Improve via post-purchase flow, replenishment cadence, loyalty.",
	],
	extendedExplanation: "Purchase frequency is the most under-invested LTV lever in Indian D2C. Most brands track first-purchase metrics obsessively but ignore second-purchase rate — yet second purchase rate is the predictor of which cohorts will compound and which will plateau. The 30-day post-purchase email + WhatsApp cadence is the single highest-ROI investment for frequency. Replenishment products (skincare, food, supplements) can structurally lock in 4+×/yr if onboarding nudges to subscription.",
	indiaBenchmarks: [
		"Indian D2C beauty: 2.5–4×/yr",
		"Indian D2C fashion: 1.5–2.8×/yr",
		"Indian D2C food/snacks: 4–8×/yr",
		"Indian D2C subscription (replenishment): 8–12×/yr",
		"Indian D2C jewelry: 1.2–2×/yr (low-frequency category)",
	],
	commonMistakes: [
		"Treating frequency as fixed by category instead of designable via post-purchase flows.",
		"Ignoring cohort-level frequency (first-90-day predicts annual).",
		"Confusing frequency with repeat-purchase rate (different metrics).",
		"Not segmenting by acquisition channel (organic customers buy 1.5× more often than paid).",
	],
	relatedTerms: ["ltv", "aov", "repeat-purchase-rate", "subscription"],
	ctaVariant: "consultation",
});

add({
	id: "repeat-purchase-rate",
	term: "Repeat Purchase Rate",
	expansion: "Repeat Purchase Rate",
	definition: "Repeat Purchase Rate is the percentage of customers who purchase more than once in a defined period. It is calculated by dividing customers with 2+ orders by total customers. RPR is the binary version of frequency and a leading indicator of LTV cohort health.",
	formulaProse: "Repeat Purchase Rate equals customers with two or more orders divided by total customers in the period.",
	formula: "RPR = Customers with 2+ Orders ÷ Total Customers",
	exampleInput: "Total customers 18,000 · Customers with 2+ orders 5,400",
	exampleOutput: "RPR = 30%",
	tldr: [
		"RPR is the simplest leading indicator for LTV cohort health.",
		"D2C beauty target: 30–45%; subscription: 60%+.",
		"Watch RPR by acquisition month — best predictor of cohort LTV.",
	],
	extendedExplanation: "Repeat Purchase Rate is the early-warning system for LTV. By month 4 you can already tell whether a cohort will hit healthy LTV — RPR by 90 days correlates strongly with annualized cohort LTV. If RPR < 20% by 90 days, the cohort is dead weight; double down on post-purchase flow. RPR is also segmentable by acquisition channel: organic + WhatsApp-acquired customers typically have 40%+ RPR vs 20–25% for cold paid traffic.",
	indiaBenchmarks: [
		"Indian D2C beauty (90-day RPR): 25–35%",
		"Indian D2C beauty (12-month RPR): 35–55%",
		"Indian D2C subscription (90-day RPR): 50–75%",
		"Indian D2C fashion (12-month RPR): 25–40%",
		"Indian D2C food/snacks (12-month RPR): 45–65%",
	],
	commonMistakes: [
		"Calculating RPR over too long a window (12-month RPR conflates cohort effects).",
		"Not segmenting by acquisition channel (loses signal).",
		"Confusing RPR with frequency (RPR is binary, frequency is count).",
		"Optimizing RPR at the cost of average-order-value (cheap repeat customers).",
	],
	relatedTerms: ["purchase-frequency", "ltv", "retention-rate", "post-purchase-flow"],
	ctaVariant: "consultation",
});

add({
	id: "retention-rate",
	term: "Retention Rate",
	expansion: "Customer Retention Rate",
	definition: "Retention Rate is the percentage of customers retained from one period to the next. It is calculated as customers at period end (excluding new acquisitions) divided by customers at period start. Retention is the inverse of churn — 100% minus churn rate.",
	formulaProse: "Retention Rate equals customers at period end minus new customers acquired, divided by customers at period start.",
	formula: "Retention Rate = (End Customers − New Customers) ÷ Start Customers",
	exampleInput: "Start customers 5,000 · End customers 5,200 · New 350",
	exampleOutput: "Retention = (5,200 − 350) ÷ 5,000 = 97%",
	tldr: [
		"Retention Rate = 100% − Churn Rate.",
		"Track monthly for SaaS; quarterly for D2C non-subscription.",
		"Cohort retention curves matter more than single-period retention.",
	],
	extendedExplanation: "Retention is the inverse framing of churn — same data, different mental model. Many operators prefer retention because it surfaces compounding gains: improving from 92% to 95% retention is a 38% improvement in survival rate over 12 months. The cohort retention curve (% remaining at month 1, 2, 3, ... 12) is the single most useful chart in subscription analytics. Flat tail = sticky product; steep early drop = onboarding problem.",
	indiaBenchmarks: [
		"Indian B2B SaaS Enterprise monthly retention: 98.5–99.5%",
		"Indian B2B SaaS SMB monthly retention: 95–98%",
		"Indian D2C subscription monthly retention: 90–96%",
		"Indian consumer SaaS monthly retention: 85–95%",
		"Indian D2C 12-month retention: 25–55%",
	],
	commonMistakes: [
		"Reporting retention without cohort segmentation (averages mask dynamics).",
		"Confusing logo retention with revenue retention.",
		"Using too-short windows (monthly for slow-cycle businesses).",
		"Optimizing retention by retention features instead of fixing root product issues.",
	],
	relatedTerms: ["churn-rate", "nrr", "grr", "ltv"],
	ctaVariant: "consultation",
});

add({
	id: "gross-margin",
	term: "Gross Margin",
	expansion: "Gross Margin",
	definition: "Gross Margin is the percentage of revenue retained after subtracting Cost of Goods Sold (COGS). It is calculated as revenue minus COGS divided by revenue. Gross margin determines how much of each rupee of revenue is available to fund growth, operations, and profit.",
	formulaProse: "Gross Margin equals revenue minus cost of goods sold, divided by revenue, expressed as a percentage.",
	formula: "Gross Margin = (Revenue − COGS) ÷ Revenue",
	exampleInput: "Revenue ₹50L · COGS ₹22L",
	exampleOutput: "Gross Margin = 56%",
	tldr: [
		"Gross Margin = (Revenue − COGS) ÷ Revenue.",
		"D2C target: 60%+ for sustainable growth.",
		"SaaS target: 75%+ — anything lower hides COGS that should be opex.",
	],
	extendedExplanation: "Gross margin is the structural ceiling on a business's marketing spend. A D2C brand with 40% gross margin can never sustainably spend more than 40% of revenue on customer acquisition (and that's break-even — for growth, you need higher margin or LTV beyond first purchase). SaaS gross margin should structurally be 75%+ — if it's lower, COGS likely hides items that belong in opex (CSM cost, hosting cost). Honest gross margin discussions force CFO-level marketing-budget decisions.",
	indiaBenchmarks: [
		"Indian D2C beauty: 55–70%",
		"Indian D2C fashion: 45–65%",
		"Indian D2C food/snacks: 35–50%",
		"Indian B2B SaaS: 70–85%",
		"Indian D2C subscription/wellness: 55–75%",
	],
	commonMistakes: [
		"Excluding fulfillment / shipping cost from COGS (overstates gross margin).",
		"Excluding payment gateway fees (1.5–2.5% in India).",
		"Including marketing in COGS (it's opex; don't conflate).",
		"Using contribution margin and calling it gross margin.",
	],
	relatedTerms: ["contribution-margin", "cogs", "ltv", "cac-payback"],
	ctaVariant: "consultation",
});

add({
	id: "contribution-margin",
	term: "Contribution Margin",
	expansion: "Contribution Margin",
	definition: "Contribution Margin is the revenue per unit minus all variable costs per unit, including COGS, marketing CAC, fulfillment, and payment fees. It tells the business how much each new sale contributes toward fixed costs and profit.",
	formulaProse: "Contribution Margin equals revenue per unit minus all variable costs per unit (COGS, CAC, fulfillment, payment fees, refund cost).",
	formula: "Contribution Margin = Revenue/unit − Variable Costs/unit",
	exampleInput: "AOV ₹999 · COGS ₹350 · CAC ₹250 · Fulfillment ₹80 · Payment ₹20 · Refund cost ₹40",
	exampleOutput: "Contribution Margin = ₹259/order (26%)",
	tldr: [
		"Contribution margin = revenue minus all variable costs (COGS + CAC + fulfillment + fees).",
		"Below 0: each sale loses money. Above ₹0: every sale funds fixed costs.",
		"Track at order level — averages hide loss-making segments.",
	],
	extendedExplanation: "Contribution margin is the most operator-relevant unit economics metric. Gross margin only counts COGS; contribution margin counts everything variable, including CAC. A negative contribution margin means each sale loses money — common in early D2C scaling but unsustainable. Indian D2C with high COD return rates (10–20%) often has positive gross margin but negative contribution margin once return cost flows through. Track at SKU and channel level — averages hide loss-making segments.",
	indiaBenchmarks: [
		"Indian D2C beauty contribution margin: 18–35%",
		"Indian D2C fashion contribution margin: 12–28%",
		"Indian D2C subscription (mature): 35–55%",
		"Indian B2B SaaS contribution margin: 60–80%",
		"Indian D2C food/snacks: 5–20% (margin pressure)",
	],
	commonMistakes: [
		"Excluding CAC from variable cost (overstates contribution margin).",
		"Not factoring in COD return cost (typical 8–15% drag in Indian D2C).",
		"Aggregating across channels (paid vs organic contribution margin differs sharply).",
		"Treating contribution margin as static — it shifts with scale, channel mix, and seasonality.",
	],
	relatedTerms: ["gross-margin", "cogs", "cac", "ltv", "rto-rate"],
	ctaVariant: "consultation",
});

add({
	id: "cogs",
	term: "COGS",
	expansion: "Cost of Goods Sold",
	definition: "COGS is the direct cost of producing or acquiring the goods or services sold by a business. It includes raw materials, manufacturing labor, packaging, and inbound shipping. COGS does not include marketing, sales, or operational overhead — those are opex.",
	formulaProse: "COGS equals the sum of direct costs to produce or acquire goods sold in a period: raw materials, manufacturing, packaging, inbound shipping.",
	formula: "COGS = Materials + Manufacturing + Packaging + Inbound Shipping",
	exampleInput: "Materials ₹150 · Manufacturing ₹100 · Packaging ₹40 · Inbound shipping ₹20 (per unit)",
	exampleOutput: "COGS per unit = ₹310",
	tldr: [
		"COGS = direct cost to make + ship-in goods.",
		"Excludes marketing, sales, ops overhead (those are opex).",
		"Indian D2C COGS as % of AOV: 30–50% depending on category.",
	],
	extendedExplanation: "COGS is the most-misclassified line item on Indian D2C P&Ls. Founders often include outbound fulfillment (shipping to customer), which belongs in fulfillment cost not COGS. They also exclude packaging or branded inserts, understating COGS. Honest COGS discipline matters because it determines gross margin, which structurally caps marketing spend. Renegotiating COGS via supplier consolidation is a 5–15% margin lever Indian brands underuse.",
	indiaBenchmarks: [
		"Indian D2C beauty COGS as % AOV: 30–45%",
		"Indian D2C fashion COGS as % AOV: 35–55%",
		"Indian D2C food/snacks COGS as % AOV: 50–65%",
		"Indian D2C jewelry COGS as % AOV: 50–70% (high-material)",
		"Indian D2C wellness/supplements: 25–40%",
	],
	commonMistakes: [
		"Including outbound shipping/fulfillment in COGS.",
		"Excluding branded packaging or inserts.",
		"Not allocating manufacturing overhead to per-unit COGS.",
		"Using purchase cost instead of landed cost (excludes import duty + inbound shipping).",
	],
	relatedTerms: ["gross-margin", "contribution-margin", "aov", "ltv"],
	ctaVariant: "consultation",
});

add({
	id: "rto-rate",
	term: "RTO Rate",
	expansion: "Return To Origin Rate",
	definition: "RTO Rate is the percentage of orders that fail delivery and return to the seller. It is most relevant in Indian D2C where COD orders have RTO rates of 10–25%. Each RTO consumes outbound shipping, return shipping, payment fees, and damaged-goods cost — typically 8–15% of order value.",
	formulaProse: "RTO Rate equals number of orders returned to origin divided by total orders shipped, expressed as a percentage.",
	formula: "RTO Rate = Orders Returned ÷ Orders Shipped",
	exampleInput: "Monthly orders 5,500 · RTO orders 880",
	exampleOutput: "RTO Rate = 16%",
	tldr: [
		"RTO Rate = % of shipped orders that fail delivery and return.",
		"India COD RTO: 10–25%; prepaid RTO: 1–4%.",
		"Each RTO costs 8–15% of AOV (shipping × 2 + payment + damage).",
	],
	extendedExplanation: "RTO is the silent margin killer of Indian D2C. A brand with 18% RTO on COD orders effectively pays a 12% margin tax on every shipment — destroying profitable cohorts. The structural fix is to shift order mix toward prepaid (UPI / Razorpay), but Indian buyers strongly prefer COD. Mitigations: address verification at checkout, OTP confirmation before dispatch, RTO-prediction models, and progressive trust-building (smaller first orders for new buyers). Top Indian D2C brands have driven RTO from 25% to 12% via these tactics.",
	indiaBenchmarks: [
		"Indian D2C beauty COD RTO: 12–20%",
		"Indian D2C fashion COD RTO: 18–25%",
		"Indian D2C jewelry COD RTO: 8–15%",
		"Indian D2C prepaid RTO: 1–4%",
		"Tier-1 cities COD RTO: 8–15%; tier-2/3: 18–25%",
	],
	commonMistakes: [
		"Not segmenting RTO by city / pin code (some pins are 50%+ RTO).",
		"Ignoring the cost of damaged returns (5–8% of RTOs are unsellable).",
		"Treating RTO as static instead of as a tactical optimization area.",
		"Not building RTO-prediction into checkout / fulfillment workflow.",
	],
	relatedTerms: ["cod", "contribution-margin", "aov", "fulfillment-cost"],
	ctaVariant: "consultation",
});

add({
	id: "cod",
	term: "COD",
	expansion: "Cash On Delivery",
	definition: "COD is a payment mode where the customer pays for goods at delivery rather than upfront. COD is dominant in Indian D2C (40–70% of orders depending on category) but carries higher RTO rates and slower cash conversion versus prepaid orders.",
	formulaProse: "COD share equals orders paid on delivery divided by total orders.",
	formula: "COD Share = COD Orders ÷ Total Orders",
	exampleInput: "Total orders 5,500 · COD orders 3,300",
	exampleOutput: "COD Share = 60%",
	tldr: [
		"COD is dominant in Indian D2C (40–70% of orders).",
		"Higher RTO (10–25%) vs prepaid (1–4%).",
		"Strategies: prepaid discount, OTP confirmation, partial COD restrict.",
	],
	extendedExplanation: "COD is a uniquely-Indian challenge. Buyers prefer it because it preserves trust on first-purchase from unknown brands, but the seller bears 15–25% of orders failing delivery. Tier-1 cities (Mumbai, Bangalore) have lower COD share and lower RTO; tier-2/3 cities have higher COD share and higher RTO. The right strategy is segmented: offer prepaid-only for tier-3 high-RTO pins, COD with verification for tier-1, and progressive trust-building (small orders first, larger orders unlocked).",
	indiaBenchmarks: [
		"Indian D2C beauty COD share: 50–70%",
		"Indian D2C fashion COD share: 55–75%",
		"Indian D2C food/snacks COD share: 40–60%",
		"Indian D2C jewelry COD share: 25–45%",
		"Indian D2C subscription COD share: 15–35%",
	],
	commonMistakes: [
		"Treating COD as binary (offer or don't) instead of pin-level segmented.",
		"Not pricing the COD margin tax into AOV / ad spend math.",
		"Ignoring prepaid-discount as a profitable conversion lever.",
		"Letting tier-3 high-RTO COD orders ship without verification.",
	],
	relatedTerms: ["rto-rate", "aov", "contribution-margin", "kyc"],
	ctaVariant: "consultation",
});

// ─────────────────────────────────────────────────────────────────
// Section 2 — Performance / Paid
// ─────────────────────────────────────────────────────────────────

add({
	id: "cpc",
	term: "CPC",
	expansion: "Cost Per Click",
	definition: "CPC, or Cost Per Click, is the average price a business pays each time a user clicks on a paid ad. It is calculated by dividing total ad spend by the number of clicks received over the same period. CPC is a tactical channel-efficiency metric, not a profitability metric.",
	formulaProse: "CPC equals total ad spend divided by total clicks received over the same period.",
	formula: "CPC = Total Ad Spend ÷ Number of Clicks",
	exampleInput: "Spend ₹2,40,000 · 12,000 clicks",
	exampleOutput: "CPC = ₹20",
	tldr: [
		"CPC = ad spend ÷ clicks.",
		"Lower isn't always better — high-intent CPCs (insurance, legal) can be ₹500+ and still profitable.",
		"Compare CPC to category benchmarks, not generic averages.",
	],
	extendedExplanation: "CPC is the most-quoted ad metric and the one most often misused. A low CPC on a poorly-targeted audience is worse than a high CPC on a high-intent audience that converts. The right CPC range depends on category, search intent, and the quality score of your campaigns. Bid strategy (manual vs target CPA vs maximize conversions) significantly changes the CPC distribution Google produces.",
	indiaBenchmarks: [
		"D2C beauty (Meta/Google): ₹15–₹80",
		"D2C fashion: ₹10–₹55",
		"B2B SaaS (LinkedIn/Google): ₹50–₹600",
		"Insurance / financial services (Google): ₹100–₹800",
		"Legal services (Google): ₹150–₹1,200",
	],
	commonMistakes: [
		"Optimizing CPC at the cost of conversion rate.",
		"Comparing CPC across networks without normalizing for intent.",
		"Ignoring quality score impact on CPC.",
		"Treating CPC as the goal rather than CAC or ROAS.",
	],
	relatedTerms: ["cpm", "ctr", "cpa", "roas"],
	ctaVariant: "audit",
});

add({
	id: "cpm",
	term: "CPM",
	expansion: "Cost Per Mille (Per 1,000 Impressions)",
	definition: "CPM is the cost to deliver 1,000 ad impressions, regardless of clicks or conversions. It is calculated as ad spend divided by impressions, multiplied by 1,000. CPM is the upstream cost driver — when CPM rises, CPC and CAC follow unless creative quality compensates.",
	formulaProse: "CPM equals total ad spend divided by impressions, multiplied by one thousand.",
	formula: "CPM = (Total Ad Spend ÷ Impressions) × 1,000",
	exampleInput: "Spend ₹4,00,000 · 50,00,000 impressions",
	exampleOutput: "CPM = ₹80",
	tldr: [
		"CPM = ad spend per 1,000 impressions; the auction-pressure metric.",
		"Indian Meta CPMs in 2026: ₹60–₹250 (D2C); ₹100–₹500 (B2B).",
		"CPM rises 30–80% during festivals (Diwali, Ramadan, Black Friday).",
	],
	extendedExplanation: "CPM is the upstream input to all paid economics. When CPM rises (auction pressure, more advertisers), CPC and CAC rise unless you offset with better targeting, creative, or conversion rate. Indian CPMs spike sharply during Diwali (October–November), Ramadan (in UAE/KSA markets), and Black Friday — plan budget accordingly. CPM also varies by placement: Reels CPM is typically 30% lower than Feed; Stories sit between.",
	indiaBenchmarks: [
		"Indian Meta CPM (D2C): ₹60–₹250",
		"Indian Meta CPM (B2B): ₹100–₹500",
		"Indian Google Display CPM: ₹25–₹150",
		"Indian YouTube CPV: ₹0.30–₹2 (per view, not impression)",
		"Festival CPM uplift: 30–80%",
	],
	commonMistakes: [
		"Optimizing CPM at the cost of audience quality.",
		"Ignoring placement-level CPM variance (Feed vs Reels vs Stories).",
		"Not accounting for festival CPM spikes in budget planning.",
		"Treating CPM as a control lever (it's mostly a market-determined input).",
	],
	relatedTerms: ["cpc", "ctr", "frequency", "reach"],
	ctaVariant: "audit",
});

add({
	id: "ctr",
	term: "CTR",
	expansion: "Click-Through Rate",
	definition: "CTR is the percentage of users who click an ad after seeing it. It is calculated as clicks divided by impressions. CTR is a creative-quality signal — high CTR usually means relevant audience + compelling creative; low CTR means one of those is broken.",
	formulaProse: "CTR equals clicks divided by impressions, expressed as a percentage.",
	formula: "CTR = Clicks ÷ Impressions × 100",
	exampleInput: "Clicks 12,000 · Impressions 8,00,000",
	exampleOutput: "CTR = 1.5%",
	tldr: [
		"CTR = clicks ÷ impressions, the creative-quality signal.",
		"Healthy Meta D2C CTR: 1–2.5%; Google search D2C CTR: 4–10%.",
		"Low CTR + low conversion = audience problem; high CTR + low conversion = landing-page problem.",
	],
	extendedExplanation: "CTR is the diagnostic that tells you where the funnel is bleeding. Low CTR + low conversion = wrong audience seeing your ad. High CTR + low conversion = right audience but landing page kills them. High CTR + high conversion = creative + audience + LP all aligned. Use CTR as a kill criterion: kill ads with CTR below 50% of account average within 4 days at 20+ impressions of statistical confidence.",
	indiaBenchmarks: [
		"Indian Meta D2C CTR: 1–2.5%",
		"Indian Meta B2B CTR: 0.6–1.5%",
		"Indian Google search D2C CTR: 4–10%",
		"Indian Google search B2B CTR: 2–5%",
		"Indian Google Display CTR: 0.3–0.8%",
	],
	commonMistakes: [
		"Treating CTR as a vanity metric rather than a diagnostic.",
		"Not segmenting CTR by placement or audience.",
		"Killing low-CTR ads that have high conversion (they're still profitable).",
		"Comparing CTR across platforms without normalizing.",
	],
	relatedTerms: ["cpc", "cpm", "conversion-rate", "ad-rank"],
	ctaVariant: "audit",
});

add({
	id: "cpa",
	term: "CPA",
	expansion: "Cost Per Acquisition (or Action)",
	definition: "CPA is the cost paid by advertiser to acquire one conversion (purchase, signup, lead, etc.). It is calculated as ad spend divided by conversions. CPA is platform-reported and channel-specific — distinct from CAC, which is fully-loaded across all costs.",
	formulaProse: "CPA equals total ad spend divided by total conversions in the same period.",
	formula: "CPA = Total Ad Spend ÷ Conversions",
	exampleInput: "Spend ₹4,80,000 · 600 conversions",
	exampleOutput: "CPA = ₹800",
	tldr: [
		"CPA = ad spend ÷ conversions on one platform.",
		"Different from CAC, which is fully-loaded (all costs ÷ new customers).",
		"Use CPA for in-platform optimization; CAC for unit-economics decisions.",
	],
	extendedExplanation: "CPA and CAC are often confused. CPA is platform-specific (Meta CPA, Google CPA), uses platform-reported conversions (which include view-through and over-attribute), and excludes agency / tooling / creative costs. CAC is honest: total media + agency + tooling + creative spend, divided by truly-new buyers (deduplicated across channels). For optimization within a platform, use CPA. For business decisions about whether to scale, use CAC.",
	indiaBenchmarks: [
		"Indian Meta D2C CPA (purchase): ₹400–₹1,500",
		"Indian Google search D2C CPA: ₹600–₹2,500",
		"Indian Meta B2B CPA (lead): ₹500–₹3,000",
		"Indian LinkedIn B2B CPA (lead): ₹800–₹5,000",
		"Indian Google search B2B CPA (demo): ₹1,500–₹15,000",
	],
	commonMistakes: [
		"Equating CPA with CAC (CAC is fully-loaded).",
		"Trusting platform-reported CPA without server-side validation (Meta over-reports 25–40%).",
		"Optimizing for CPA at the cost of LTV (cheap conversions ≠ profitable customers).",
		"Not segmenting CPA by audience or campaign objective.",
	],
	relatedTerms: ["cac", "cpc", "cpl", "roas"],
	ctaVariant: "audit",
});

add({
	id: "cpl",
	term: "CPL",
	expansion: "Cost Per Lead",
	definition: "CPL is the cost paid to acquire one lead — typically a form-fill, demo request, or contact-info submission. It is calculated as ad spend divided by leads. CPL is the primary metric for B2B and high-consideration B2C (real estate, financial services, healthcare).",
	formulaProse: "CPL equals total ad spend divided by total leads captured in the same period.",
	formula: "CPL = Total Ad Spend ÷ Leads",
	exampleInput: "Spend ₹3,00,000 · 600 leads",
	exampleOutput: "CPL = ₹500",
	tldr: [
		"CPL = ad spend ÷ leads (form-fills, demos, contact submissions).",
		"India B2B SaaS CPL: ₹400–₹3,000; real estate: ₹350–₹1,500.",
		"Lead quality varies 3–5× by source; track downstream conversion.",
	],
	extendedExplanation: "CPL is meaningful only when paired with downstream conversion rates (lead → SQL → close). A ₹300 CPL with 3% close rate beats a ₹150 CPL with 0.5% close rate. Indian real estate especially: portal leads (99acres, MagicBricks) often have CPL ₹600–₹1,500 but lead-to-site-visit rates of 8–18%. Meta lead-gen forms have lower CPL but 30% lower lead quality. Always tie CPL to a CAC view that adjusts for quality.",
	indiaBenchmarks: [
		"Indian B2B SaaS CPL (LinkedIn/Google): ₹400–₹3,000",
		"Indian real estate CPL (Meta/Google): ₹350–₹1,500",
		"Indian healthcare CPL: ₹250–₹1,200",
		"Indian education / edtech CPL: ₹150–₹800",
		"Indian financial services CPL: ₹200–₹1,500",
	],
	commonMistakes: [
		"Optimizing for CPL without lead-quality scoring.",
		"Using lead-gen forms exclusively (lower friction but lower quality).",
		"Not segmenting CPL by lead source (portal vs paid vs organic).",
		"Treating CPL as the goal rather than as a step toward CAC.",
	],
	relatedTerms: ["cpa", "cac", "lead-quality", "cpm"],
	ctaVariant: "audit",
});

// CAC and ROAS have hand-coded static pages at /glossary/cac and /glossary/roas
// They're listed in MANUAL_ENTRIES on the /glossary hub. Skipping JSON duplicates.

if (false) add({
	id: "roas",
	term: "ROAS",
	expansion: "Return on Ad Spend",
	definition: "ROAS is the ratio of revenue generated to advertising spend. It is calculated as revenue divided by ad spend. ROAS measures channel-level efficiency but is not a profitability measure — break-even ROAS depends on margin.",
	formulaProse: "ROAS equals revenue attributed to advertising divided by total advertising spend.",
	formula: "ROAS = Revenue ÷ Ad Spend",
	exampleInput: "Revenue ₹12,00,000 · Ad spend ₹4,00,000",
	exampleOutput: "ROAS = 3.0x",
	tldr: [
		"ROAS = revenue ÷ ad spend; the channel-efficiency headline.",
		"Break-even ROAS depends on gross margin (60% margin → 1.67x break-even).",
		"Track blended ROAS, not just platform-reported (Meta over-reports 25–40%).",
	],
	extendedExplanation: "ROAS is the most-misused metric in performance marketing. A 5x ROAS sounds great until you realize the brand has 35% gross margin — break-even is 2.86x; 5x is profitable but barely. Calculate break-even ROAS as 1 ÷ gross margin: 60% margin = 1.67x break-even, 50% = 2.0x, 40% = 2.5x, 30% = 3.33x. Anything below break-even ROAS loses money on every sale before considering CAC payback.",
	indiaBenchmarks: [
		"Indian D2C beauty Meta ROAS: 1.8–4.5x",
		"Indian D2C fashion Meta ROAS: 1.5–3.5x",
		"Indian D2C subscription ROAS: 2.5–6x (over LTV)",
		"Indian B2B SaaS Google ROAS: tracked as pipeline-ROAS, 5–20x",
		"Indian e-commerce on Google PMax: 3–8x",
	],
	commonMistakes: [
		"Reporting platform ROAS without view-through adjustment.",
		"Comparing ROAS across margin profiles without normalizing.",
		"Targeting ROAS without considering volume (high ROAS often means low scale).",
		"Treating blended ROAS as channel ROAS (or vice versa).",
	],
	relatedTerms: ["cac", "ltv", "gross-margin", "blended-roas"],
	ctaVariant: "consultation",
});

if (false) add({
	id: "cac",
	term: "CAC",
	expansion: "Customer Acquisition Cost",
	definition: "CAC is the total cost to acquire one new paying customer. Fully-loaded CAC includes media spend, agency fees, creative production, tooling, and influencer payments — divided by truly-new (deduplicated) customers in the period. Distinct from CPA.",
	formulaProse: "Fully-loaded CAC equals total acquisition cost (media + agency + tooling + creative + influencer) divided by number of new customers in the same period.",
	formula: "CAC = (Media + Agency + Tooling + Creative + Influencer) ÷ New Customers",
	exampleInput: "Media ₹6L · Agency ₹1L · Tooling ₹40k · Creative ₹50k · 700 new customers",
	exampleOutput: "CAC ≈ ₹1,128",
	tldr: [
		"Fully-loaded CAC includes media + agency + tooling + creative + influencer.",
		"For Indian D2C COD, add 7–12% effective uplift for return-adjusted CAC.",
		"LTV/CAC ≥ 3 is the healthy threshold.",
	],
	extendedExplanation: "Most founders underreport CAC by 25–35% by tracking only media spend. Honest CAC includes agency retainer (often 10–15% of media), tooling stack (Klaviyo, Triple Whale, Shopify apps), creative production cost, and influencer / UGC payments. For Indian D2C, layer in COD return adjustment — if 40% of orders are COD with 18% RTO, effective CAC is media-CAC × 1.072. Track CAC by cohort and channel, never blended only — paid-CAC vs organic-CAC tells different stories.",
	indiaBenchmarks: [
		"Indian D2C beauty CAC: ₹350–₹1,200",
		"Indian D2C fashion CAC: ₹400–₹1,500",
		"Indian D2C subscription CAC: ₹500–₹2,500 (justified by LTV)",
		"Indian B2B SaaS SMB CAC: ₹15,000–₹80,000",
		"Indian B2B SaaS Enterprise CAC: ₹2L–₹15L",
	],
	commonMistakes: [
		"Tracking media CAC and calling it CAC.",
		"Including reactivated lapsed customers in 'new customer' count.",
		"Ignoring view-through credit inflation.",
		"Not segmenting paid vs organic CAC.",
	],
	relatedTerms: ["ltv", "ltv-cac", "cpa", "cac-payback", "blended-cac"],
	ctaVariant: "consultation",
});

add({
	id: "blended-cac",
	term: "Blended CAC",
	expansion: "Blended Customer Acquisition Cost",
	definition: "Blended CAC is the total acquisition cost divided by total new customers — both paid and organic. It tells the business the true average cost to acquire a customer including the dilution effect of organic acquisition.",
	formulaProse: "Blended CAC equals total marketing spend divided by all new customers acquired (paid + organic).",
	formula: "Blended CAC = Total Marketing Spend ÷ All New Customers",
	exampleInput: "Total marketing spend ₹9L · 1,200 new customers (700 paid + 500 organic)",
	exampleOutput: "Blended CAC = ₹750",
	tldr: [
		"Blended CAC = total marketing spend ÷ all new customers.",
		"Lower than paid CAC because organic dilutes the average.",
		"Use blended CAC for company-level health; paid CAC for channel decisions.",
	],
	extendedExplanation: "Blended CAC is the honest company-level acquisition cost. Investors and CFOs care about it. As organic / referral / direct grow, blended CAC falls below paid CAC — the gap is the value of brand. Indian brands with strong founder personal brand or referral programs often have blended CAC 30–50% below paid CAC. The strategic move is to invest in brand + referral specifically to drive blended CAC down without lowering paid spend.",
	indiaBenchmarks: [
		"Indian D2C beauty blended CAC: ₹250–₹900",
		"Indian D2C fashion blended CAC: ₹300–₹1,100",
		"Indian B2B SaaS SMB blended CAC: ₹10,000–₹60,000",
		"Indian D2C with strong organic: paid CAC × 0.55–0.75",
		"Indian D2C without organic: paid CAC × 0.95+ (no dilution)",
	],
	commonMistakes: [
		"Comparing blended CAC across companies without owning the organic split.",
		"Using blended CAC for paid-channel optimization (use paid CAC instead).",
		"Including reactivation revenue in 'new customers' (should be tracked separately).",
		"Not adjusting for COD return cost (Indian D2C uplift).",
	],
	relatedTerms: ["cac", "ltv", "ltv-cac", "paid-cac"],
	ctaVariant: "consultation",
});

add({
	id: "conversion-rate",
	term: "Conversion Rate",
	expansion: "Conversion Rate (CR)",
	definition: "Conversion Rate is the percentage of users who complete a desired action (purchase, signup, lead) out of those who saw the opportunity. It is calculated as conversions divided by sessions or impressions. CR is the primary CRO metric.",
	formulaProse: "Conversion Rate equals conversions divided by sessions (or visitors), expressed as a percentage.",
	formula: "Conversion Rate = Conversions ÷ Sessions",
	exampleInput: "Sessions 50,000 · Purchases 1,400",
	exampleOutput: "CR = 2.8%",
	tldr: [
		"CR = conversions ÷ sessions, the CRO headline.",
		"Indian D2C beauty PDP CR (cold paid): 1.5–4%; warm: 4–8%.",
		"1% CR lift on PDP ≈ 8% CAC reduction (mathematical equivalence).",
	],
	extendedExplanation: "Conversion rate is the highest-leverage CRO target. A 1% absolute CR lift (e.g., 2.8% to 3.8%) is mathematically equivalent to an 8% CAC reduction at the same ad spend. The biggest CR levers in Indian D2C: page-load time below 2.0s, above-fold trust strip, COD button placement, payment-method visibility (UPI, Razorpay, BNPL), and social proof in checkout flow.",
	indiaBenchmarks: [
		"Indian D2C beauty PDP CR (cold paid): 1.5–4%",
		"Indian D2C beauty PDP CR (warm/retargeting): 4–8%",
		"Indian D2C fashion PDP CR: 1.2–3%",
		"Indian B2B SaaS landing CR (demo signup): 2–8%",
		"Indian e-commerce checkout CR: 60–80%",
	],
	commonMistakes: [
		"Not segmenting CR by traffic source (cold vs warm vs organic differ 3×).",
		"Optimizing CR at the cost of AOV (cheap conversions hurt unit econ).",
		"Ignoring mobile-vs-desktop CR variance (mobile typically 30% lower).",
		"A/B testing without statistical significance discipline.",
	],
	relatedTerms: ["aov", "cac", "cpa", "ctr", "cro"],
	ctaVariant: "audit",
});

add({
	id: "quality-score",
	term: "Quality Score",
	expansion: "Google Ads Quality Score",
	definition: "Quality Score is Google's 1–10 rating of the relevance and quality of ad keywords, ad creative, and landing page experience. Higher Quality Score lowers CPC and improves Ad Rank. It is calculated per keyword based on expected CTR, ad relevance, and landing-page relevance.",
	formulaProse: "Quality Score is a composite 1–10 metric based on expected CTR, ad-keyword relevance, and landing-page relevance. Higher scores reduce CPC and lift Ad Rank.",
	formula: "Quality Score = f(Expected CTR, Ad Relevance, LP Relevance)",
	exampleInput: "Expected CTR Above Average · Ad Rel Average · LP Rel Above Average",
	exampleOutput: "Quality Score ≈ 8/10",
	tldr: [
		"Quality Score 1–10 per keyword; higher = lower CPC + better Ad Rank.",
		"3 inputs: expected CTR, ad relevance, landing-page relevance.",
		"Quality Score 7+ saves 25–40% on CPC vs 3–4 score.",
	],
	extendedExplanation: "Quality Score is Google's lever to reward relevance and punish spam. A 9 Quality Score keyword pays 30–50% less CPC than a 4 Quality Score keyword for the same auction position. The three inputs: expected CTR (driven by ad copy + ad-keyword match), ad relevance (driven by keyword in ad copy + landing-page H1), and landing-page relevance (driven by landing-page H1 + content matching keyword). Optimize all three together; siloed optimization rarely lifts QS.",
	indiaBenchmarks: [
		"India Google Ads QS distribution: typical 5–7 average",
		"Top quartile QS: 8–10 (saves 30–40% CPC)",
		"Bottom quartile QS: 1–4 (pays 50–80% premium)",
		"Branded keywords typically QS 9–10",
		"Generic head terms typically QS 5–7",
	],
	commonMistakes: [
		"Optimizing QS for the sake of the score, not the resulting cost.",
		"Treating QS as account-wide instead of per-keyword.",
		"Not pruning low-QS keywords aggressively.",
		"Ignoring LP-relevance (focusing only on ad copy).",
	],
	relatedTerms: ["cpc", "ad-rank", "ctr", "expected-ctr"],
	ctaVariant: "audit",
});

add({
	id: "ad-rank",
	term: "Ad Rank",
	expansion: "Google Ads Ad Rank",
	definition: "Ad Rank is the score Google uses to determine ad position in SERPs. It is calculated as bid multiplied by Quality Score, with adjustments for ad extensions, format relevance, and search context. Ad Rank determines whether and where an ad shows.",
	formulaProse: "Ad Rank equals bid amount multiplied by Quality Score, adjusted for ad extensions, format relevance, and search context.",
	formula: "Ad Rank ≈ Bid × Quality Score (× format & extension adjustments)",
	exampleInput: "Bid ₹50 · QS 8/10",
	exampleOutput: "Ad Rank ≈ 400 (relative to other auction entrants)",
	tldr: [
		"Ad Rank = bid × Quality Score; determines ad position.",
		"High QS lets you rank above competitors at lower bids.",
		"Below threshold Ad Rank means no ad shows at all.",
	],
	extendedExplanation: "Ad Rank is Google's auction-stage ranking. Two ads with the same bid show in different positions based on Quality Score — that's why QS matters so much. Ad Rank also has a minimum threshold below which no ad shows; low-bid + low-QS combinations may simply not enter the auction. Understanding Ad Rank lets you compete via QS rather than pure bid escalation.",
	indiaBenchmarks: [
		"Top-of-page Ad Rank threshold (India brand-new accounts): typically 6–10",
		"Top-3 position requires Ad Rank ~30 in mid-competitive markets",
		"#1 position usually requires Ad Rank 50+",
		"Display Network Ad Rank threshold differs (lower QS impact)",
		"Brand-keyword Ad Rank for owners: typically dominant due to QS 9+",
	],
	commonMistakes: [
		"Bidding up without addressing low QS (expensive for the same position).",
		"Not knowing the Ad Rank threshold below which ads don't show.",
		"Treating Ad Rank as static — it shifts auction-by-auction.",
		"Ignoring extension impact on Ad Rank.",
	],
	relatedTerms: ["quality-score", "cpc", "impression-share", "bid-strategy"],
	ctaVariant: "audit",
});

add({
	id: "impression-share",
	term: "Impression Share",
	expansion: "Impression Share (IS)",
	definition: "Impression Share is the percentage of available impressions an ad won out of all impressions it was eligible for. It is calculated as impressions received divided by total eligible impressions. IS surfaces budget and Ad-Rank gaps.",
	formulaProse: "Impression Share equals impressions received divided by total eligible impressions, expressed as a percentage.",
	formula: "Impression Share = Impressions Received ÷ Total Eligible Impressions",
	exampleInput: "Impressions received 60,000 · Total eligible 100,000",
	exampleOutput: "Impression Share = 60%",
	tldr: [
		"Impression Share = % of eligible impressions captured.",
		"Lost IS to budget = increase budget; lost IS to rank = improve QS or bid.",
		"Brand-keyword IS should be 90%+ — otherwise competitors are stealing clicks.",
	],
	extendedExplanation: "Impression Share is the most diagnostic Google Ads metric. Lost IS due to budget tells you the ceiling — you'd capture more if you spent more. Lost IS due to rank tells you the auction is rejecting you — bid up or improve QS. For branded keywords (your own brand), IS should be 90%+ to prevent competitors from intercepting your branded searches.",
	indiaBenchmarks: [
		"Brand-keyword IS target: 90%+",
		"Generic head-term IS: typically 20–60% (budget-constrained)",
		"Long-tail KW IS: 70–95% (lower competition)",
		"Mid-competitive niche IS: 30–60%",
		"Lost-to-rank IS > 30% means QS issue",
	],
	commonMistakes: [
		"Aiming for 100% IS on broad terms (extremely expensive).",
		"Not splitting lost-IS-to-budget vs lost-IS-to-rank.",
		"Ignoring brand-keyword IS gap (competitors stealing clicks).",
		"Optimizing IS without checking conversion impact.",
	],
	relatedTerms: ["ad-rank", "quality-score", "cpc", "search-volume"],
	ctaVariant: "audit",
});

add({
	id: "frequency",
	term: "Frequency",
	expansion: "Ad Frequency",
	definition: "Frequency is the average number of times the same user saw an ad in a given period. It is calculated as total impressions divided by reach (unique users). High frequency drives ad fatigue; low frequency suggests under-saturation.",
	formulaProse: "Frequency equals total impressions divided by reach (unique users) in the same period.",
	formula: "Frequency = Impressions ÷ Reach",
	exampleInput: "Impressions 5,00,000 · Reach 1,25,000",
	exampleOutput: "Frequency = 4.0",
	tldr: [
		"Frequency = impressions ÷ reach; tracks ad fatigue.",
		"D2C target: 3–6 / week. Above 8 = fatigue.",
		"Retargeting: cap at 4–6/day for cart-abandon flows.",
	],
	extendedExplanation: "Frequency is the early warning system for ad fatigue. CTR and conversion drop sharply as frequency rises beyond 6–8 per week — same audience, same creative, less response. The fix is creative refresh: introduce 5–10 new variants weekly to keep audience seeing fresh content. For retargeting, frequency cap at 4–6 per day prevents harassment that hurts brand. Track frequency per audience segment, not just account-wide.",
	indiaBenchmarks: [
		"Indian Meta D2C optimal frequency: 3–6/week",
		"Retargeting frequency cap: 4–6/day",
		"Brand awareness campaigns: 5–8 per month",
		"Above frequency 8/week: fatigue typically detectable",
		"Above frequency 12/week: significant CTR drop",
	],
	commonMistakes: [
		"Not capping frequency on retargeting (creates ad spam).",
		"Optimizing reach without tracking frequency growth.",
		"Treating frequency as a fixed property instead of a creative-refresh signal.",
		"Aggregating frequency across audience segments (hides over-targeted segments).",
	],
	relatedTerms: ["reach", "cpm", "ctr", "creative-fatigue"],
	ctaVariant: "audit",
});

add({
	id: "reach",
	term: "Reach",
	expansion: "Ad Reach",
	definition: "Reach is the total number of unique users who saw an ad in a given period. It is the upper bound of ad exposure (each user counted once). Reach × Frequency = Impressions.",
	formulaProse: "Reach equals the total unique users exposed to an ad in a defined period.",
	formula: "Reach = Unique Users Exposed",
	exampleInput: "Audience size 5L · Daily reach 1L",
	exampleOutput: "Reach = 1,00,000 unique users/day",
	tldr: [
		"Reach = unique users seeing the ad.",
		"Reach × Frequency = Impressions.",
		"Reach is the addressable-market lever; frequency is the saturation lever.",
	],
	extendedExplanation: "Reach defines the ceiling of your ad exposure. Once reach saturates the available audience, additional spend goes into frequency growth, not new exposure — quickly hitting fatigue. The strategic move when reach saturates is to expand audience (lookalikes, broader interest layers) rather than just spend more. Reach is also the metric for brand awareness campaigns; performance campaigns optimize for conversion within the reachable audience.",
	indiaBenchmarks: [
		"Indian Meta D2C broad reach: typical 5L–50L unique users/month per audience",
		"Lookalike 1% audience reach: 30–50L unique users",
		"Tier-1 city reach (Mumbai/Bangalore): 1–3Cr addressable on Meta",
		"Tier-2 city reach: 50L–2Cr",
		"Reach saturation (CPM rise > 30%): typically 30–50% of audience",
	],
	commonMistakes: [
		"Not tracking reach saturation (CPM will spike).",
		"Confusing reach with impressions.",
		"Optimizing for reach at the cost of conversion-rate audiences.",
		"Treating reach as a goal in performance campaigns (it's a brand-awareness metric).",
	],
	relatedTerms: ["frequency", "cpm", "audience", "lookalike-audience"],
	ctaVariant: "audit",
});

add({
	id: "lookalike-audience",
	term: "Lookalike Audience",
	expansion: "Lookalike Audience",
	definition: "Lookalike Audience is a Meta or Google audience targeting feature that finds new users similar to a seed audience (e.g., existing customers, high-value users). The seed audience defines the pattern; the platform expands to similar profiles within a defined size percentage (1%, 5%, 10% of country).",
	formulaProse: "Lookalike Audiences are built by selecting a seed audience (existing customers or high-value users) and a similarity tier (1%, 5%, or 10% of population). The platform algorithm finds users matching the seed pattern.",
	formula: "Lookalike = Seed Audience × Similarity Tier (1% to 10%)",
	exampleInput: "Seed: 5,000 high-AOV customers · Tier: 1% LAL of India",
	exampleOutput: "Audience size ~ 50–60L unique users",
	tldr: [
		"Lookalike Audiences expand seed → similar new audiences.",
		"Tighter LAL (1%) = higher quality, lower volume; looser (10%) = lower quality, higher volume.",
		"Best seed: 1,000+ recent high-LTV customers, not generic email list.",
	],
	extendedExplanation: "Lookalike audiences work only if the seed is high-quality. Common mistake: seeding off generic email-list with mixed-quality contacts. Best seed = top 20% AOV or top-LTV cohort customers from the last 90 days. Use 1% LAL for quality (smaller, sharper); 5–10% for volume after 1% saturates. Refresh seed monthly — stale seeds train on old patterns.",
	indiaBenchmarks: [
		"India 1% LAL audience size: 50–80L unique users",
		"India 5% LAL: 2.5Cr–4Cr",
		"Minimum seed for stable LAL: 1,000+ matched users",
		"LAL CTR vs broad: typically 30–60% higher",
		"LAL conversion rate vs broad: typically 40–80% higher",
	],
	commonMistakes: [
		"Using a generic email list as seed (low quality).",
		"Building LAL from anyone-who-engaged (purity matters).",
		"Not refreshing LAL seed monthly.",
		"Stacking too many LALs in one ad set (defeats algorithm clarity).",
	],
	relatedTerms: ["audience", "retargeting", "cpa", "frequency"],
	ctaVariant: "audit",
});

add({
	id: "retargeting",
	term: "Retargeting",
	expansion: "Retargeting (Remarketing)",
	definition: "Retargeting is the practice of showing ads to users who previously interacted with a brand — visited the website, viewed a product, abandoned cart, etc. Retargeting audiences typically convert at 3–10× the rate of cold prospecting audiences but at much smaller volume.",
	formulaProse: "Retargeting audiences are built from website visitors, cart abandoners, video viewers, or list uploads. Ads are shown specifically to these warm audiences.",
	formula: "Retargeting Audience = Website Visitors / Cart Abandoners / Video Viewers / Customer List",
	exampleInput: "Website visitors last 30 days: 50,000 · Cart abandoners 5,000",
	exampleOutput: "Combined retargeting audience: 50,000 (cart abandoners as priority)",
	tldr: [
		"Retargeting reaches warm audiences (prior interaction).",
		"Conversion rate 3–10× cold; volume usually 5–20% of cold reach.",
		"Stack: cart abandoners (highest intent) > product viewers > general visitors.",
	],
	extendedExplanation: "Retargeting is the highest-ROI Meta/Google budget allocation, but capped by audience size. Build a layered retargeting strategy: cart abandoners 0–7 days (high intent, high spend), product viewers 8–30 days (medium intent), general visitors 31–60 days (low intent, brand reminder). Frequency-cap each layer separately. Don't show all visitors the same creative — segment by intent stage.",
	indiaBenchmarks: [
		"Indian D2C cart-abandon retargeting CR: 8–25%",
		"Indian D2C product-viewer retargeting CR: 3–10%",
		"Indian D2C general-visitor retargeting CR: 1–4%",
		"Retargeting share of total Meta budget (D2C): typically 15–30%",
		"Retargeting CPM vs cold: typically 30–60% lower",
	],
	commonMistakes: [
		"Same creative for all retargeting layers.",
		"Not frequency-capping retargeting (becomes harassment).",
		"Including cold-list buyers in retargeting (dilutes intent signal).",
		"Treating retargeting as primary growth (it's a layer, not a strategy).",
	],
	relatedTerms: ["lookalike-audience", "cart-abandon", "frequency", "audience"],
	ctaVariant: "audit",
});

add({
	id: "asc-plus",
	term: "ASC+",
	expansion: "Advantage+ Shopping Campaigns (Meta)",
	definition: "ASC+ is Meta's machine-learning-driven shopping campaign type that automates audience, placement, and creative selection. ASC+ replaced manual audience targeting for D2C in 2023 and is now the workhorse of high-volume Meta D2C campaigns.",
	formulaProse: "ASC+ campaigns combine all targeting and creative inputs into a single campaign. The Meta algorithm dynamically selects audience, placement, creative, and bid for each user.",
	formula: "ASC+ = Single campaign with all creative variants + minimal targeting input",
	exampleInput: "Daily budget ₹50k · 30 creative variants · audience signal: 'similar to past purchasers'",
	exampleOutput: "Campaign optimizes algorithmically across all variables",
	tldr: [
		"ASC+ is Meta's automated campaign type for D2C shopping.",
		"Replaced manual audience targeting; algorithm picks audience.",
		"Best practices: high creative volume (30+ ads), broad targeting, ROAS bid strategy.",
	],
	extendedExplanation: "ASC+ outperformed traditional ABO/CBO campaigns by 25–40% on CAC for most D2C brands by 2024. The shift requires letting go of granular audience control — Meta's algorithm finds the audience. Operator role moves from 'audience hacking' to 'creative production' + 'feed quality'. Best results: 30+ active creatives, broad audience signal, target ROAS bid strategy, and weekly creative refresh.",
	indiaBenchmarks: [
		"Indian D2C ASC+ CAC vs traditional CBO: typically 20–40% lower",
		"Recommended creative variants: 30+ active",
		"Daily budget floor for stable optimization: ₹15,000+",
		"Optimization period: 7 days minimum learning",
		"Indian D2C ROAS on ASC+: 2.0–4.5x typical",
	],
	commonMistakes: [
		"Running too few creatives (algorithm starved).",
		"Over-targeting (negates ASC+ value).",
		"Killing campaigns before learning period completes.",
		"Not feeding creative learnings back into ASC+ refresh cycle.",
	],
	relatedTerms: ["meta-ads", "performance-max", "creative-volume", "roas"],
	ctaVariant: "audit",
});

add({
	id: "performance-max",
	term: "Performance Max",
	expansion: "Performance Max (Google PMax)",
	definition: "Performance Max is Google's automated cross-channel campaign type that runs across Search, Shopping, Display, YouTube, and Discover from a single campaign. The algorithm allocates budget across channels based on conversion probability, using audience signals and asset groups.",
	formulaProse: "Performance Max campaigns combine asset groups (text, image, video, signal, audience) and let Google allocate spend across Search, Display, Shopping, YouTube, and Discover channels.",
	formula: "PMax = Single campaign × Asset Groups × Audience Signals across all Google surfaces",
	exampleInput: "Daily budget ₹40k · 5 asset groups · 3 audience signals · Target ROAS 3x",
	exampleOutput: "Campaign optimizes across Search/Display/Shopping/YouTube",
	tldr: [
		"Google PMax = automated cross-channel campaign type.",
		"Replaced Smart Shopping in 2022; now standard for D2C Google Ads.",
		"Best practices: clean shopping feed, 5 asset groups, audience signals included.",
	],
	extendedExplanation: "PMax replaced Smart Shopping and works as a 'single campaign rules them all' approach to Google. Strengths: works well with shopping feed, captures all-channel intent. Weaknesses: black-box optimization, hard to attribute by channel, can waste spend on Display when Search would convert better. Best results: feed quality (no missing GTINs, accurate prices), 5+ asset groups with text/image/video, customer-match + lookalike audience signals as input.",
	indiaBenchmarks: [
		"Indian D2C PMax ROAS: 3–8x typical",
		"Indian D2C PMax CAC vs Search-only: usually 20–40% lower at scale",
		"Recommended audience signals: customer match + LAL + intent",
		"Asset group count for stable optimization: 5+",
		"Daily budget floor: ₹10k+",
	],
	commonMistakes: [
		"Poor shopping feed quality (kills PMax performance).",
		"No audience signals input (algorithm starved).",
		"Layered with Search campaigns on same KWs (cannibalization).",
		"Over-targeting via signals (defeats algorithm).",
	],
	relatedTerms: ["google-ads", "shopping-feed", "asc-plus", "roas"],
	ctaVariant: "audit",
});

add({
	id: "view-through-conversion",
	term: "View-Through Conversion",
	expansion: "View-Through Conversion (VTC)",
	definition: "View-Through Conversion is a conversion attributed to an ad the user saw but did not click. Meta and Google count VTC under specific attribution windows (typically 1-day or 7-day view). VTC inflates platform-reported ROAS and CPA versus click-only attribution.",
	formulaProse: "View-Through Conversion is a conversion that occurred within the attribution window after the user saw an ad without clicking it.",
	formula: "VTC = Conversion attributed to ad view (no click) within attribution window",
	exampleInput: "User sees Meta ad → does not click → buys 4 days later via direct → counted as VTC if window is 7-day",
	exampleOutput: "VTC adds to platform-reported revenue beyond click-attributed",
	tldr: [
		"VTC = conversion credited to ad view, no click required.",
		"Meta inflates ROAS 25–40% via VTC vs click-only.",
		"Strip VTC for honest attribution; include for platform-reported optimization.",
	],
	extendedExplanation: "VTC is the most common cause of ROAS inflation in platform reporting. Meta's default 7-day-click + 1-day-view attribution claims credit for conversions that would have happened anyway via direct or organic. For honest unit economics, look at click-only ROAS. For platform optimization, the algorithm needs the VTC signal to bid efficiently — don't disable, but interpret with skepticism. Triple Whale, NorthBeam, and similar tools normalize this gap.",
	indiaBenchmarks: [
		"Meta default VTC inflation: 25–40% above click-only",
		"Google Display VTC inflation: 15–25%",
		"Click-only attribution window recommendation: 7-day click",
		"Brand campaign VTC: typically high (60%+) due to existing intent",
		"Cold prospecting VTC: typically lower (15–25%)",
	],
	commonMistakes: [
		"Using platform ROAS at face value for unit-economics decisions.",
		"Disabling VTC entirely (algorithm needs the signal).",
		"Not separating click-only ROAS from blended for CFO reporting.",
		"Over-attributing to brand campaigns where VTC is highest.",
	],
	relatedTerms: ["roas", "attribution-window", "blended-roas", "cpa"],
	ctaVariant: "audit",
});

add({
	id: "attribution-window",
	term: "Attribution Window",
	expansion: "Attribution Window",
	definition: "Attribution Window is the time period after an ad interaction during which a conversion is credited to that ad. Common windows: 1-day click, 7-day click, 7-day click + 1-day view, 28-day click. Shorter windows give more conservative attribution; longer give more credit to ads.",
	formulaProse: "Attribution Window defines how many days after an ad click or view a conversion is credited to that ad.",
	formula: "Attribution Window = N days post-interaction during which conversions are credited",
	exampleInput: "User clicks ad on day 1 → buys on day 5 → credited if window is 7-day click",
	exampleOutput: "Conversion credited to ad",
	tldr: [
		"Attribution window decides how late after ad interaction a conversion still counts.",
		"Default Meta: 7-day click + 1-day view. Default Google: 30-day click (data-driven).",
		"Shorter windows = more conservative reported ROAS.",
	],
	extendedExplanation: "The attribution window choice is one of the biggest variables in reported ROAS. A 28-day click attribution claims credit for a conversion that happened 27 days after the last ad click — when many other touches occurred between. For honest attribution, prefer 7-day click + no view. For platform optimization, defaults work but interpret reported numbers with the window in mind.",
	indiaBenchmarks: [
		"Recommended attribution: 7-day click for honesty",
		"Meta default: 7-day click + 1-day view (inflates ROAS)",
		"Google default: 30-day click data-driven (inflates further)",
		"Click-only difference: typically 25–50% lower reported ROAS",
		"Attribution windows for B2B SaaS (long sales cycle): 28-day click reasonable",
	],
	commonMistakes: [
		"Using default attribution and treating reported numbers as honest.",
		"Comparing ROAS across platforms with different attribution windows.",
		"Not documenting the chosen window in reporting (changes interpretation).",
		"Switching windows mid-campaign (breaks trend analysis).",
	],
	relatedTerms: ["view-through-conversion", "roas", "cpa", "blended-roas"],
	ctaVariant: "audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 3 — SEO
// ─────────────────────────────────────────────────────────────────

add({
	id: "dr",
	term: "DR",
	expansion: "Domain Rating (Ahrefs)",
	definition: "Domain Rating is Ahrefs' 0–100 score of a domain's backlink profile strength. Higher DR correlates with higher organic ranking potential. DR is calculated from quantity and quality of referring domains, with logarithmic weighting.",
	formulaProse: "Domain Rating is Ahrefs' proprietary 0–100 score derived from backlink profile size and quality.",
	formula: "DR = f(Referring Domains × Quality × Recency) on 0–100 logarithmic scale",
	exampleInput: "Site with 1,500 referring domains across mixed quality",
	exampleOutput: "DR ≈ 45 (mid-tier domain)",
	tldr: [
		"DR = Ahrefs 0–100 backlink-strength score.",
		"DR 30–50 typical for early-stage SaaS / D2C; 60+ for established.",
		"DR is correlation with rankings, not causation — invest in topical authority too.",
	],
	extendedExplanation: "DR is the most-cited domain metric, but not perfectly predictive. A DR-50 site can outrank a DR-70 site on long-tail queries with better content. Use DR as a directional signal, not a hard target. Indian B2B SaaS at Series A typically has DR 25–45; D2C brands DR 15–35. The fastest DR lifts come from earned media (PR mentions, original research like T26 reports), guest posts on DR-50+ publications, and broken-link reclamation.",
	indiaBenchmarks: [
		"Indian D2C early-stage DR: 15–35",
		"Indian D2C established (5+ years): 40–65",
		"Indian B2B SaaS Series A DR: 25–45",
		"Indian B2B SaaS Series B+ DR: 50–70",
		"Indian agencies / publishers DR: 50–80",
	],
	commonMistakes: [
		"Optimizing for DR by buying low-quality links (penalty risk).",
		"Treating DR as a fixed property instead of a slow-moving asset.",
		"Comparing DR across categories without normalizing.",
		"Ignoring topical authority in favor of DR alone.",
	],
	relatedTerms: ["da", "backlinks", "referring-domains", "topical-authority"],
	ctaVariant: "audit",
});

add({
	id: "da",
	term: "DA",
	expansion: "Domain Authority (Moz)",
	definition: "Domain Authority is Moz's 0–100 score of a domain's likelihood to rank in search. DA is calculated from backlink quantity, quality, and other signals. DA is comparable to Ahrefs' DR but uses different weighting.",
	formulaProse: "Domain Authority is Moz's proprietary 0–100 score combining backlink profile strength with linking-domain signals.",
	formula: "DA = f(Linking Root Domains × Quality × MozTrust) on 0–100 logarithmic scale",
	exampleInput: "Site with 1,200 linking root domains, mixed quality",
	exampleOutput: "DA ≈ 42",
	tldr: [
		"DA = Moz's 0–100 ranking-likelihood score.",
		"Comparable to Ahrefs DR; not always equal due to different algorithms.",
		"Useful for competitor analysis; less directly actionable than DR.",
	],
	extendedExplanation: "DA was the dominant domain metric pre-Ahrefs but Ahrefs' DR has overtaken in operator usage. DA still matters for legacy SEO tools and some agency reporting. Track DA only if your tool stack uses it; otherwise prefer DR for consistency. Indian SEO operators in 2026 mostly track DR; DA is residual.",
	indiaBenchmarks: [
		"Same patterns as DR — Indian D2C DA: 20–55, B2B SaaS DA: 25–60",
		"DA correlates ~0.85 with DR for most Indian sites",
		"DA tends to be 5–10 points lower than DR for the same domain",
		"DA-30+ minimum for ranking on competitive head terms",
		"DA-50+ for top-3 rankings on most commercial queries",
	],
	commonMistakes: [
		"Tracking both DA and DR redundantly without choosing one.",
		"Treating DA as updates-frequently — Moz updates monthly.",
		"Using DA as the only ranking signal.",
		"Comparing DA across very different niche categories.",
	],
	relatedTerms: ["dr", "backlinks", "referring-domains", "moztrust"],
	ctaVariant: "audit",
});

add({
	id: "backlinks",
	term: "Backlinks",
	expansion: "Backlinks (Inbound Links)",
	definition: "Backlinks are inbound hyperlinks from other websites pointing to a page on your site. Backlinks are Google's primary off-page ranking signal. Quality matters more than quantity — a single link from a DR-80 publication outweighs 100 links from DR-20 directories.",
	formulaProse: "Backlinks are inbound hyperlinks from external sites. Each backlink carries weight based on the source domain authority and link context.",
	formula: "Backlink Value = Source DR × Topical Relevance × Anchor Quality × Position",
	exampleInput: "Single link from DR-80 publication with relevant anchor",
	exampleOutput: "High-value backlink; equivalent to 100+ DR-20 directory links",
	tldr: [
		"Backlinks = inbound links from other sites; Google's primary off-page signal.",
		"Quality > quantity. DR-50+ links carry 10–100× the weight of DR-15 directory links.",
		"Indian SaaS / D2C backlink-engine targets: 8–15 quality backlinks/month.",
	],
	extendedExplanation: "Backlinks remain the strongest off-page ranking signal in 2026 despite Google's claims of de-prioritizing. The strategic targets: editorial mentions in DR-50+ publications, guest posts in topical authority sites, original-research reports (T26) that earn citations naturally, HARO / Qwoted contributions where journalists need expert quotes, and broken-link reclamation.",
	indiaBenchmarks: [
		"Indian D2C average backlink count: 200–2,000",
		"Indian B2B SaaS Series A: 500–3,000 backlinks",
		"Indian agency target: 8–15 quality backlinks/month",
		"Spam-free quality threshold: <30% nofollow share, <5% spam-tier",
		"Recovered broken-link backlinks: typically 5–10/month in mature sites",
	],
	commonMistakes: [
		"Buying backlinks from PBNs (penalty risk).",
		"Tracking backlink count without quality segmentation.",
		"Ignoring lost backlinks (links break or get removed).",
		"Pursuing backlinks in non-relevant niches.",
	],
	relatedTerms: ["dr", "referring-domains", "anchor-text", "topical-authority"],
	ctaVariant: "audit",
});

add({
	id: "referring-domains",
	term: "Referring Domains",
	expansion: "Referring Domains",
	definition: "Referring Domains is the count of unique domains linking to your site. Multiple backlinks from one domain count as one referring domain. Referring domain count is a stronger signal than raw backlink count because it indicates breadth of endorsement.",
	formulaProse: "Referring Domains is the count of unique external domains pointing at least one backlink to your site.",
	formula: "Referring Domains = COUNT(DISTINCT source_domain across all backlinks)",
	exampleInput: "Site has 5,000 backlinks from 1,200 unique domains",
	exampleOutput: "Referring Domains = 1,200",
	tldr: [
		"Referring Domains = unique domains linking to you.",
		"Stronger signal than raw backlink count.",
		"Quality + diversity > quantity from few sources.",
	],
	extendedExplanation: "10 backlinks from 1 domain = 1 referring domain (medium signal). 10 backlinks from 10 different domains = 10 referring domains (high signal). Google's algorithm rewards diversity. The fastest referring-domain growth: guest-post engine (1 RD per post), HARO contributions (1 RD per pickup), original-research (5–20 RDs per report), and tools that earn RDs as they're shared (calculators, generators).",
	indiaBenchmarks: [
		"Indian D2C early-stage RD count: 50–500",
		"Indian D2C established: 500–3,000",
		"Indian B2B SaaS Series A: 200–1,500",
		"Indian B2B SaaS Series B+: 1,500–8,000",
		"Top-tier Indian publishers: 10,000–50,000+ RDs",
	],
	commonMistakes: [
		"Optimizing for backlink count over RD diversity.",
		"Not segmenting RDs by quality (DR tier).",
		"Ignoring lost RDs (links break or sites die).",
		"Pursuing RDs in unrelated topical neighborhoods.",
	],
	relatedTerms: ["backlinks", "dr", "anchor-text", "link-velocity"],
	ctaVariant: "audit",
});

add({
	id: "anchor-text",
	term: "Anchor Text",
	expansion: "Anchor Text",
	definition: "Anchor Text is the visible, clickable text of a hyperlink. Google uses anchor text as a relevance signal for the linked page. Diverse, natural anchor text helps; over-optimized exact-match anchors trigger penalty.",
	formulaProse: "Anchor Text is the clickable text of a hyperlink, used by Google as a relevance signal for the destination page.",
	formula: "Anchor Text → Relevance Signal for Destination Page",
	exampleInput: "Link text: 'best D2C marketing agency in India'",
	exampleOutput: "Anchor signals destination page is about that topic",
	tldr: [
		"Anchor Text is link text; Google relevance signal.",
		"Diversify: branded, exact-match, partial-match, generic.",
		"Over-optimization (50%+ exact-match) triggers Penguin-style penalty.",
	],
	extendedExplanation: "Healthy anchor text distribution: 40–50% branded ('Frameleads'), 15–25% partial-match ('Frameleads' performance marketing'), 10–15% exact-match ('performance marketing agency'), 10–15% generic ('click here', 'read more'), 10–15% naked URL. If exact-match exceeds 30% of inbound anchors, Google's algorithm treats it as manipulation. Audit anchor distribution quarterly via Ahrefs.",
	indiaBenchmarks: [
		"Healthy branded anchor share: 40–50%",
		"Healthy exact-match anchor share: 5–15%",
		"Penalty-risk exact-match share: 30%+",
		"Generic + naked URL share: 15–25%",
		"Image alt text counts as anchor when image is linked",
	],
	commonMistakes: [
		"Optimizing all guest-post anchors as exact-match (penalty risk).",
		"Not tracking anchor distribution sitewide.",
		"Ignoring image-alt-text anchors.",
		"Using brand-spammy anchors (Frameleads agency Frameleads).",
	],
	relatedTerms: ["backlinks", "topical-authority", "guest-post", "penalty"],
	ctaVariant: "audit",
});

add({
	id: "schema-markup",
	term: "Schema Markup",
	expansion: "Schema.org Structured Data",
	definition: "Schema Markup is structured data added to HTML using schema.org vocabulary, typically as JSON-LD. It tells search engines explicitly what a page is about, enabling rich results, AIO citations, and entity recognition. Required for AIO/GEO optimization in 2026.",
	formulaProse: "Schema Markup is structured data added to a page using schema.org vocabulary, typically in JSON-LD format inside a script tag.",
	formula: "Schema = JSON-LD with @context and @type fields per schema.org spec",
	exampleInput: "Page about CAC formula",
	exampleOutput: "JSON-LD with @type: DefinedTerm + Article + FAQPage + Speakable",
	tldr: [
		"Schema Markup = JSON-LD structured data for search engines.",
		"Required for AIO citations + rich results in 2026.",
		"Validate via Schema Markup Validator + Google Rich Results Test.",
	],
	extendedExplanation: "Schema markup transformed from nice-to-have (2022) to required (2026) as AIO citation logic relies heavily on it. Pages without schema rarely earn AIO citation. Pages with rich schema (Article + FAQPage + DefinedTerm + Speakable for definitional content) get cited 3–5× more often. Frameleads tier templates already emit appropriate schema; ongoing work is per-page validation + refresh.",
	indiaBenchmarks: [
		"Indian SaaS / D2C with schema: typically 30–50% of pages",
		"Schema-coverage target: 100% of indexed pages",
		"AIO citation rate with schema vs without: 3–5× higher",
		"Validation tools: Schema Markup Validator (schema.org), Rich Results Test (Google)",
		"Common schema types: Article, FAQPage, HowTo, Service, LocalBusiness, Product",
	],
	commonMistakes: [
		"Adding schema not relevant to page content (validation fails).",
		"Using outdated schema vocabulary (deprecated types).",
		"Not validating after every page edit.",
		"Stuffing schema (multiple FAQPages on same page).",
	],
	relatedTerms: ["faq-schema", "structured-data", "aio", "speakable-schema"],
	ctaVariant: "audit",
});

add({
	id: "faq-schema",
	term: "FAQ Schema",
	expansion: "FAQPage Schema",
	definition: "FAQ Schema (FAQPage type) is structured data marking up question-and-answer content. Google can display FAQ schema as rich results in SERPs and uses it as a primary AIO citation source. Each FAQ entry has Question and Answer sub-types.",
	formulaProse: "FAQPage schema marks up Q&A content with mainEntity array containing Question objects, each with acceptedAnswer.",
	formula: "FAQPage > mainEntity > Question (name) + acceptedAnswer (Answer.text)",
	exampleInput: "5 FAQs on a service page",
	exampleOutput: "JSON-LD FAQPage with 5 mainEntity items",
	tldr: [
		"FAQPage schema marks up Q&A; powerful for AIO citation.",
		"Limit to 6–10 questions per page; over-stuffing dilutes signal.",
		"AI engines lift FAQ answers verbatim 40%+ of the time.",
	],
	extendedExplanation: "FAQ schema is the most-cited schema type in AIO. Each Q&A becomes a candidate citation. Best practices: 6–10 FAQs per page, questions match real user phrasing (mine from PAA + AlsoAsked), answers are 50–100 words with named entities, answers wrapped in `.faq-answer` class for Speakable cssSelector. Frameleads tier templates already emit FAQ schema; expansion is per-page Q quality.",
	indiaBenchmarks: [
		"AI citation lift from FAQ schema: 40%+ verbatim quote rate",
		"Optimal FAQ count per page: 6–10",
		"FAQ word count optimal: 50–100 words per answer",
		"Schema validation pass rate target: 100%",
		"PAA-mined questions feed-rate to FAQ: 60–80% match real user queries",
	],
	commonMistakes: [
		"Stuffing 20+ FAQs (signal dilution).",
		"Using leading questions (don't naturally appear in PAA).",
		"Generic answers without named entities or numbers.",
		"Not validating FAQ schema after edits.",
	],
	relatedTerms: ["schema-markup", "structured-data", "speakable-schema", "aio"],
	ctaVariant: "audit",
});

add({
	id: "core-web-vitals",
	term: "Core Web Vitals",
	expansion: "Core Web Vitals (CWV)",
	definition: "Core Web Vitals are Google's set of three metrics measuring real-world user experience: LCP (Largest Contentful Paint), INP (Interaction to Next Paint, replacing FID), and CLS (Cumulative Layout Shift). CWV is a Google ranking factor — passing all three lifts rankings.",
	formulaProse: "Core Web Vitals = three metrics: LCP (loading), INP (interactivity), CLS (visual stability). All measured by Google Chrome User Experience Report.",
	formula: "CWV Pass = LCP < 2.5s AND INP < 200ms AND CLS < 0.1",
	exampleInput: "LCP 1.8s · INP 120ms · CLS 0.05",
	exampleOutput: "CWV: Pass (all three within 'Good' thresholds)",
	tldr: [
		"Core Web Vitals = LCP + INP + CLS thresholds.",
		"All three must hit 'Good' for ranking benefit.",
		"Measured via Chrome UX Report (CrUX) on real users, not synthetic.",
	],
	extendedExplanation: "CWV thresholds: LCP < 2.5s = Good, < 4s = Needs Improvement, > 4s = Poor. INP < 200ms = Good, < 500ms = NI, > 500ms = Poor. CLS < 0.1 = Good, < 0.25 = NI, > 0.25 = Poor. Google measures via real-user data (CrUX), not Lighthouse synthetic. Indian sites often fail LCP due to slow mobile networks; mitigate via Cloudflare R2 cache + image optimization + critical-CSS inlining.",
	indiaBenchmarks: [
		"Indian Tier-1 city CWV: typically pass when site is well-built",
		"Indian Tier-2/3 city CWV: harder due to slower networks",
		"Mobile network share: 4G dominant, 5G rising 2026",
		"Cloudflare-cached site CWV improvement: typically 30–60% LCP",
		"Indian D2C / SaaS CWV pass rate target: 90%+ pages",
	],
	commonMistakes: [
		"Optimizing Lighthouse score, not CrUX-measured field data.",
		"Ignoring mobile-specific CWV (mobile is the priority signal).",
		"Lazy-loading hero images (worsens LCP).",
		"Not monitoring CWV trend (regressions go unnoticed).",
	],
	relatedTerms: ["lcp", "inp", "cls", "page-speed"],
	ctaVariant: "audit",
});

add({
	id: "lcp",
	term: "LCP",
	expansion: "Largest Contentful Paint",
	definition: "LCP is the time from page load start until the largest content element (image, video, or block-level text) becomes visible. LCP under 2.5s is 'Good'. LCP measures perceived loading speed and is part of Core Web Vitals.",
	formulaProse: "LCP equals the time from page navigation start until the largest content element renders within the viewport.",
	formula: "LCP = Time to render largest visible element from page navigation start",
	exampleInput: "Hero image renders 1.8s after page load",
	exampleOutput: "LCP = 1.8s (Good)",
	tldr: [
		"LCP < 2.5s = Good. The 'page feels fast' metric.",
		"Optimize: Cloudflare cache, image compression, font-display swap, no render-blocking JS.",
		"Indian mobile networks make LCP harder; cache + CDN are critical.",
	],
	extendedExplanation: "LCP is the user-perceived load metric. Hero images, large H1s, or main video typically becomes the LCP element. Common LCP killers: render-blocking JavaScript, large unoptimized hero images, late-loading fonts. Fixes: serve from R2 / CDN edge, compress images (WebP/AVIF), inline critical CSS, defer non-critical JS, use font-display: swap.",
	indiaBenchmarks: [
		"Indian site median LCP: 2.5–4.0s typical",
		"Optimized site LCP: under 2.0s",
		"Tier-1 city mobile LCP gap: 0.3–0.6s slower than desktop",
		"Tier-3 city mobile LCP gap: 0.8–1.5s slower than desktop",
		"Cloudflare R2 cache LCP improvement: 30–60% reduction",
	],
	commonMistakes: [
		"Lazy-loading hero images (worsens LCP).",
		"Not preconnecting to font / API origins.",
		"Render-blocking JS in head.",
		"Over-large hero image not optimized (>200KB).",
	],
	relatedTerms: ["core-web-vitals", "inp", "cls", "page-speed"],
	ctaVariant: "audit",
});

add({
	id: "topic-cluster",
	term: "Topic Cluster",
	expansion: "Topic Cluster (Pillar-Cluster Model)",
	definition: "Topic Cluster is an SEO content strategy where a 'pillar page' covers a broad topic and links to multiple 'cluster pages' each covering a sub-topic in depth. The pillar links to all clusters; clusters link back to the pillar. This signals topical authority to Google.",
	formulaProse: "Topic Cluster = one pillar page + multiple cluster pages, all bidirectionally linked, on related sub-topics under one umbrella topic.",
	formula: "Topical Authority = Pillar × Σ(Quality Cluster Pages × Bidirectional Links)",
	exampleInput: "Pillar 'Performance Marketing' + 25 cluster pages on sub-topics",
	exampleOutput: "Strong topical authority signal for 'performance marketing'",
	tldr: [
		"Topic Cluster = pillar page + cluster pages, bidirectionally linked.",
		"Signal Google you own the topic; lifts ranking across the cluster.",
		"Frameleads tier model already implements cluster structure (T1 → T2/T3/T4/T6).",
	],
	extendedExplanation: "Topic clusters are the strategic foundation of modern SEO. Google evaluates not just the page but the topical context. A page on 'Meta CAPI setup' that sits inside a 50-page cluster about Meta ads ranks better than the same page in isolation. Frameleads' tier hierarchy IS a topic cluster system: T1 service pillars → T2 sub-services + T6 how-tos + T3/T4/T5 cells. Each tier links UP to its pillar and laterally to siblings.",
	indiaBenchmarks: [
		"Indian SaaS topic cluster size: 20–80 pages per pillar typical",
		"Indian publisher cluster size: 100–500 pages per topic",
		"Cluster-driven ranking lift: 30–80% improvement over standalone pages",
		"Time to compound: 6–12 months from cluster launch",
		"Cluster ROI: 5–15× page-by-page approach over 12 months",
	],
	commonMistakes: [
		"Building clusters without pillar bidirectional linking.",
		"Cluster too narrow (10 pages on one topic dilutes individual ranking).",
		"Cluster too broad (200 pages without pillar — Google sees as scattered).",
		"Pillar without internal anchor text matching cluster topics.",
	],
	relatedTerms: ["pillar-page", "internal-links", "topical-authority", "schema-markup"],
	ctaVariant: "consultation",
});

add({
	id: "keyword-difficulty",
	term: "Keyword Difficulty",
	expansion: "Keyword Difficulty (KD)",
	definition: "Keyword Difficulty is a 0–100 score from SEO tools (Ahrefs, Semrush) estimating how hard it is to rank a page in the top-10 for a given keyword. KD is calculated from the backlink profiles of currently-ranking pages. Lower KD = easier to rank.",
	formulaProse: "Keyword Difficulty estimates ranking difficulty from the backlink profiles of pages currently ranking in the top-10 for the keyword.",
	formula: "KD = f(Avg DR of top-10 ranking pages × Avg Referring Domains × Other signals)",
	exampleInput: "Top-10 ranking pages avg DR 65 with 2,000+ RDs each",
	exampleOutput: "KD ≈ 78 (Hard)",
	tldr: [
		"KD = 0–100 score; estimates ranking difficulty.",
		"KD < 40 = realistic for new sites; KD > 70 = needs significant DR.",
		"KD is a starting filter, not a deterministic predictor.",
	],
	extendedExplanation: "KD is a useful starting filter for keyword selection but not deterministic. A KD-30 keyword may still be hard if SERP intent is different from your content. A KD-70 keyword may be reachable if you have unique content angle and strong topical authority. Indian SaaS / D2C should target KD < 40 for first 12 months, then graduate to KD 40–60 once domain authority builds.",
	indiaBenchmarks: [
		"KD < 20: Easy — most new sites can rank",
		"KD 20–40: Medium — needs some DR + good content",
		"KD 40–60: Hard — needs DR-50+ or strong topical authority",
		"KD 60–80: Very hard — needs DR-65+ + competitive content",
		"KD 80+: Extreme — usually reserved for established players",
	],
	commonMistakes: [
		"Ignoring search intent in KD assessment.",
		"Treating KD as static; SERP composition shifts.",
		"Pursuing high-KD keywords as a new site.",
		"Avoiding all high-KD keywords; some are reachable via long-tail.",
	],
	relatedTerms: ["search-volume", "dr", "kgr", "topical-authority"],
	ctaVariant: "audit",
});

add({
	id: "search-volume",
	term: "Search Volume",
	expansion: "Search Volume",
	definition: "Search Volume is the average number of times a keyword is searched per month in Google. It is reported by SEO tools (Ahrefs, Semrush, Google Keyword Planner) and used to prioritize keyword targeting. Higher volume = more traffic potential; lower volume often = less competition.",
	formulaProse: "Search Volume is the average monthly search count for a keyword, typically 12-month average.",
	formula: "Search Volume (monthly) = Average monthly search count over trailing 12 months",
	exampleInput: "Keyword 'CAC calculator' searched ~2,400 times/month in India",
	exampleOutput: "Search Volume = 2,400/month (India)",
	tldr: [
		"Search Volume = avg monthly searches for a keyword.",
		"Long-tail KWs have low volume but lower competition + higher intent.",
		"Volume × CTR × CR = traffic-to-conversion projection.",
	],
	extendedExplanation: "Search volume is the most-quoted but most-misused KW metric. High-volume KWs (100k+/mo) are often saturated; low-volume KWs (50–500/mo) often have higher commercial intent and easier ranking. The strategy is volume × intent × difficulty — not pure volume. Indian B2B SaaS often finds best ROI in long-tail KWs (100–1,000/mo) with KD < 30 and clear commercial intent.",
	indiaBenchmarks: [
		"Indian D2C head-term volume: 1k–100k/mo",
		"Indian D2C long-tail volume: 30–500/mo",
		"Indian B2B SaaS head-term volume: 500–10k/mo",
		"Indian B2B SaaS long-tail volume: 30–500/mo",
		"India-specific KW volume: typically 30–50% of US/UK equivalents",
	],
	commonMistakes: [
		"Pursuing only high-volume KWs (saturated, hard to rank).",
		"Ignoring search intent (volume without commercial intent = vanity).",
		"Treating tool-reported volume as exact (margins of 30–50%).",
		"Not mapping volume to KW universe holistically.",
	],
	relatedTerms: ["keyword-difficulty", "intent", "cpc", "long-tail"],
	ctaVariant: "audit",
});

add({
	id: "canonical",
	term: "Canonical",
	expansion: "Canonical URL (rel='canonical')",
	definition: "Canonical URL is the rel='canonical' tag (or HTTP header) telling Google which URL is the master version when duplicate or similar content exists at multiple URLs. Prevents duplicate-content issues and consolidates ranking signals.",
	formulaProse: "Canonical URL is a meta tag (rel='canonical') in HTML head pointing to the preferred version of a page when duplicates or near-duplicates exist.",
	formula: "<link rel='canonical' href='https://example.com/canonical-url' />",
	exampleInput: "Page accessible at /product/x and /product/x?utm=fb",
	exampleOutput: "Canonical: https://example.com/product/x (the clean version)",
	tldr: [
		"Canonical URL = master version when duplicates exist.",
		"Always self-reference unless intentionally pointing elsewhere.",
		"Frameleads tier templates already emit canonical via Next.js metadata.",
	],
	extendedExplanation: "Canonical tags consolidate ranking signal across duplicate URL paths (UTM parameters, sort orders, filter combinations, www vs non-www, http vs https). Without canonical, Google may split signal across multiple URLs and rank none well. Each Frameleads page emits `alternates.canonical` in `generateMetadata`; verify per page during quality gate.",
	indiaBenchmarks: [
		"Pages without canonical risk: 30–50% lower ranking on duplicates",
		"Self-referencing canonical share target: 100% of indexed pages",
		"Cross-domain canonical use case: syndicated content + guest posts",
		"www vs non-www canonical: pick one, redirect the other",
		"http vs https canonical: always https",
	],
	commonMistakes: [
		"Canonical pointing to a 404 page.",
		"Canonical chains (A → B → C; should be A → C directly).",
		"Cross-domain canonical to a domain you don't control.",
		"Mismatched canonical and self-referencing (A's canonical is B; B's canonical is A).",
	],
	relatedTerms: ["duplicate-content", "schema-markup", "redirect", "url-structure"],
	ctaVariant: "audit",
});

add({
	id: "robots-txt",
	term: "robots.txt",
	expansion: "robots.txt",
	definition: "robots.txt is a plain-text file at the root of a domain that tells web crawlers which paths they can access. It's the first request crawlers make. robots.txt does not prevent indexing (use noindex meta for that) — it controls crawl behavior.",
	formulaProse: "robots.txt is a text file at /robots.txt with User-agent and Allow/Disallow directives controlling crawler access.",
	formula: "robots.txt: User-agent: <bot> + Allow/Disallow: <path>",
	exampleInput: "User-agent: GPTBot\\nAllow: /\\nUser-agent: *\\nDisallow: /admin/",
	exampleOutput: "GPTBot can crawl all; others blocked from /admin/",
	tldr: [
		"robots.txt controls crawler access.",
		"Doesn't prevent indexing — use noindex meta tag for that.",
		"Frameleads robots.txt explicitly allows 21 LLM bots (already shipped).",
	],
	extendedExplanation: "robots.txt is the gatekeeper for crawler access. Common pattern: Disallow /api/ and /_next/ to prevent bot waste; Allow / for everything else. Per-bot rules let you allow LLM crawlers (GPTBot, ClaudeBot, PerplexityBot) while controlling lower-value bots. Important: robots.txt is publicly visible — anyone can read it. Don't put sensitive paths there (use auth + noindex instead).",
	indiaBenchmarks: [
		"Frameleads robots.txt allows: 21 LLM/AI crawlers explicitly",
		"Disallow patterns: /api/, /_next/ (build artifacts)",
		"Sitemap reference: required (helps crawlers find sitemap)",
		"Crawl-delay: rarely used in 2026 (modern crawlers self-throttle)",
		"Per-bot directives: Most effective for LLM-bot routing",
	],
	commonMistakes: [
		"Putting sensitive paths in robots.txt (publicly visible).",
		"Confusing robots.txt with noindex (different mechanisms).",
		"Disallow / accidentally (kills entire site indexing).",
		"Not updating after adding new bot user-agents.",
	],
	relatedTerms: ["sitemap", "noindex", "crawl-budget", "llms-txt"],
	ctaVariant: "audit",
});

add({
	id: "sitemap",
	term: "Sitemap",
	expansion: "XML Sitemap",
	definition: "An XML Sitemap is a file listing all URLs on a site that you want search engines to crawl and index. Sitemaps include lastmod, changefreq, and priority hints. Large sites use sitemap-index files referencing multiple sub-sitemaps (max 50,000 URLs each).",
	formulaProse: "XML Sitemap is an XML file with <urlset> root element listing <url> children, each with <loc>, <lastmod>, <changefreq>, <priority>.",
	formula: "Sitemap structure: urlset > url > [loc, lastmod, changefreq, priority]",
	exampleInput: "Site with 100,000 URLs",
	exampleOutput: "Sitemap-index referencing 3 sub-sitemaps (40k + 35k + 25k URLs)",
	tldr: [
		"XML Sitemap = list of URLs for search engines.",
		"Max 50,000 URLs per file; use sitemap-index for larger sites.",
		"Frameleads sitemap-index already implements this pattern.",
	],
	extendedExplanation: "Sitemaps help crawlers discover URLs they might miss via internal links alone. Critical for large programmatic sites (100k pages) where crawl budget matters. Submit sitemap to Google Search Console for indexing priority. lastmod is the most-respected hint; changefreq and priority are largely ignored by modern Google.",
	indiaBenchmarks: [
		"Sitemap submission target: weekly (auto via deploy hook)",
		"Crawl coverage from sitemap: 70–90% of submitted URLs typically",
		"Sitemap-index sub-sitemap split target: per-tier or per-50k batches",
		"Frameleads sitemap segments: 17 active, growing to 30",
		"GSC indexing latency from sitemap: 1–14 days typical",
	],
	commonMistakes: [
		"Submitting sitemap with broken URLs (hurts trust).",
		"Not splitting at 50k URL threshold (sitemap rejected).",
		"Including noindex pages in sitemap (signal mismatch).",
		"Not updating sitemap after URL changes (stale data).",
	],
	relatedTerms: ["robots-txt", "crawl-budget", "indexing", "schema-markup"],
	ctaVariant: "audit",
});

add({
	id: "noindex",
	term: "noindex",
	expansion: "noindex meta tag",
	definition: "noindex is a meta tag or HTTP header telling search engines NOT to include a page in their index. Use for thin pages, private pages, duplicate pages, or staging environments. Different from robots.txt (which controls crawl, not indexing).",
	formulaProse: "noindex is a meta tag <meta name='robots' content='noindex'> or X-Robots-Tag HTTP header preventing search engines from indexing a page.",
	formula: "<meta name='robots' content='noindex' />",
	exampleInput: "Page is for internal use only",
	exampleOutput: "Add noindex meta; page won't appear in Google search results",
	tldr: [
		"noindex = don't index this page in search results.",
		"Use for thin pages, staging, private content.",
		"For noindex to work, the bot must crawl the page; don't block via robots.txt.",
	],
	extendedExplanation: "noindex is the right tool for keeping pages out of search results. Common use: filter pages, sort variations, internal admin pages, staging environments. Important: don't disallow noindex pages in robots.txt — Google needs to crawl them to see the noindex tag. Once Google has noindexed a page, it removes it from index in 1–7 days.",
	indiaBenchmarks: [
		"Recommended noindex use: <5% of total pages",
		"Time to deindex: 1–7 days for established sites",
		"GSC reports noindex pages under Indexing > Pages > Noindexed",
		"Common noindex pages: cart, checkout, account, search results",
		"Don't noindex: blog posts, service pages, programmatic cells",
	],
	commonMistakes: [
		"noindex + robots.txt disallow (Google can't see the noindex).",
		"Accidentally noindexing entire site after staging deploy.",
		"Not removing noindex when page becomes ready for indexing.",
		"noindexing pages that should rank (over-application).",
	],
	relatedTerms: ["robots-txt", "canonical", "indexing", "crawl-budget"],
	ctaVariant: "audit",
});

add({
	id: "internal-links",
	term: "Internal Links",
	expansion: "Internal Links",
	definition: "Internal Links are hyperlinks from one page on a domain to another page on the same domain. Internal linking distributes ranking signal across the site, helps crawlers discover pages, and signals topical relationships. Anchor text + position determines weight.",
	formulaProse: "Internal Links are bidirectional hyperlinks between pages of the same domain, weighted by anchor text and link position (above-fold > body > footer).",
	formula: "Internal Link Weight = Source Page Authority × Anchor Relevance × Position",
	exampleInput: "Pillar page links to 30 cluster pages with descriptive anchors",
	exampleOutput: "Strong topical-authority signal for the topic",
	tldr: [
		"Internal Links distribute authority within a site.",
		"Anchor text + position determines weight.",
		"Frameleads tier templates already implement RelatedCells, sibling clustering.",
	],
	extendedExplanation: "Internal linking is the most under-invested SEO area for most operators. Three principles: (1) Bidirectional — pillars link to clusters, clusters link back. (2) Descriptive anchors — vary anchor text by 30%, prefer keyword-rich. (3) Above-fold > below-fold — Reasonable Surfer model weighs link position. Frameleads tier templates implement this via RelatedCells, sibling clustering, breadcrumbs, and CTA links.",
	indiaBenchmarks: [
		"Recommended internal links per page: 5–10 outbound, 3+ inbound",
		"Pillar page outbound to clusters: 25–80 links typical",
		"Cluster page inbound from pillar: 1 (always)",
		"Anchor diversity target: 30%+ variation per target page",
		"Orphan pages tolerance: 0",
	],
	commonMistakes: [
		"Same anchor text for every link to a target (looks manipulative).",
		"Not bidirectionally linking pillar ↔ cluster.",
		"Burying important links in footer.",
		"Orphan pages (0 internal inbound).",
	],
	relatedTerms: ["topic-cluster", "anchor-text", "pillar-page", "breadcrumb"],
	ctaVariant: "audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 4 — AIO / GEO / LLM
// ─────────────────────────────────────────────────────────────────

add({
	id: "aio",
	term: "AIO",
	expansion: "AI Overviews (Google)",
	definition: "AIO is Google's generative answer block at the top of search results, powered by Gemini. AIO appears for 40–70% of how/what/why/best/compare queries in 2026. AIO cites 2–6 sources per answer; cited brands gain visibility while top-3 rankers may lose 18–35% of clicks.",
	formulaProse: "AIO is Google's AI Overview, a generative answer block citing 2–6 sources, displayed at the top of Search results for AIO-triggering queries.",
	formula: "AIO presence = SERP triggers Gemini answer block with 2–6 source citations",
	exampleInput: "Query 'how to reduce CAC in D2C'",
	exampleOutput: "AIO block with 4-paragraph answer + 5 source citations",
	tldr: [
		"AIO = Google's AI Overview block at top of SERP.",
		"Triggers on 40–70% of how/what/why/best/compare queries.",
		"Cited brands gain visibility; top-3 rankers may lose 18–35% of clicks.",
	],
	extendedExplanation: "AIO is the most disruptive SERP change since the introduction of featured snippets. Two outcomes: (1) Top-3 rankers on AIO-triggering queries lose meaningful clicks. (2) Pages cited inside AIO retain or gain visibility. The strategic move: become the cited source. Optimize via direct-answer block under H1, schema (Article + FAQPage + DefinedTerm + Speakable), entity grounding, and named-author authority signals. AIO citation share is the new top-3 ranking equivalent.",
	indiaBenchmarks: [
		"Indian SERP AIO trigger rate (commercial queries): 40–70%",
		"AIO citation count per answer: 2–6 sources",
		"Click-through rate impact on top-3 rankers: -18% to -35%",
		"AIO citation share for established Indian SaaS: 8–15% (50-KW sample)",
		"Frameleads target by Q2 2027: 25% AIO citation share",
	],
	commonMistakes: [
		"Treating AIO as a threat instead of an opportunity.",
		"Not adding direct-answer block under H1.",
		"Missing schema stack (Article + FAQPage + Speakable).",
		"No entity grounding (sameAs, Wikidata).",
	],
	relatedTerms: ["geo", "direct-answer", "speakable-schema", "schema-markup"],
	ctaVariant: "consultation",
});

add({
	id: "geo",
	term: "GEO",
	expansion: "Generative Engine Optimization",
	definition: "GEO is the practice of optimizing content for citation in LLM-generated answers (ChatGPT, Claude, Perplexity, Gemini, Copilot). GEO differs from SEO: LLMs don't have rankings; they have citation likelihood based on training data, RAG retrieval, and entity strength.",
	formulaProse: "GEO is content optimization aimed at being cited in LLM-generated answers across ChatGPT, Claude, Perplexity, Gemini, Copilot.",
	formula: "Citation Likelihood = Source Authority × Citation Density × Entity Grounding × FAQ Saturation",
	exampleInput: "Frameleads' 2026 D2C Benchmark Report",
	exampleOutput: "Cited by Perplexity, Claude, ChatGPT for 'D2C CAC benchmarks 2026' queries",
	tldr: [
		"GEO ≠ SEO. Optimize for LLM citation, not ranking.",
		"Levers: llms.txt, citation density, entity grounding, FAQ saturation.",
		"Frameleads target: 5%+ organic traffic from LLM referrals by Q2 2027.",
	],
	extendedExplanation: "GEO is rapidly emerging as a discrete discipline. The mechanics: (1) Crawler access via robots.txt + llms.txt. (2) Authoritative source signals — named author, last-reviewed, references. (3) Citation density — be the named source of benchmarks. (4) Entity grounding via sameAs schema linking to Wikidata, Crunchbase, LinkedIn. (5) FAQ saturation. Each LLM has citation conventions; optimize for all five.",
	indiaBenchmarks: [
		"LLM-driven traffic share growing 3–4× YoY in 2026",
		"Indian B2B SaaS LLM-referral share: 1–5% of organic 2026",
		"Frameleads target Q2 2027: 5%+ LLM referrals",
		"Top GEO sources: Perplexity (highest cite rate) > Claude > ChatGPT > Gemini",
		"GEO investment vs SEO investment: 20–30% allocation reasonable",
	],
	commonMistakes: [
		"Conflating GEO with SEO (different mechanics).",
		"Not implementing llms.txt convention.",
		"Missing entity grounding (no Wikidata Q-entry).",
		"Citation-thin content (LLMs cite citation-dense pages).",
	],
	relatedTerms: ["aio", "llms-txt", "entity-grounding", "rag"],
	ctaVariant: "consultation",
});

add({
	id: "llms-txt",
	term: "llms.txt",
	expansion: "llms.txt (LLM ingestion convention)",
	definition: "llms.txt is a file at /llms.txt following llmstxt.org convention — a Markdown index of a site's high-value pages, designed for LLM crawlers. Helps AI engines understand site structure and find canonical sources without scraping HTML. Frameleads ships /llms.txt + /llms-full.txt.",
	formulaProse: "llms.txt is a Markdown file at site root indexing key pages with H2 sections per topic, used by LLM crawlers to understand site structure.",
	formula: "/llms.txt: H1 brand + H2 sections per topic + bullet links to canonical pages",
	exampleInput: "Frameleads site with 5,000+ pages",
	exampleOutput: "/llms.txt with curated 200 high-priority links across topics",
	tldr: [
		"llms.txt = Markdown index for LLM crawlers, per llmstxt.org.",
		"Curate top pages per topic; cap at 5,000 lines.",
		"Frameleads ships both /llms.txt and /llms-full.txt.",
	],
	extendedExplanation: "llms.txt is the emerging standard for LLM-friendly indexing. /llms.txt is the curated index; /llms-full.txt inlines content for direct ingestion. Beyond 5,000 lines, split into per-tier sub-indices (/llms/services.txt, /llms/glossary.txt, etc.). LLM crawlers respect llms.txt voluntarily — Anthropic, Perplexity adoption growing fast in 2026. Frameleads' /llms.txt and /llms-full.txt are already shipped.",
	indiaBenchmarks: [
		"llms.txt cap: 5,000 lines per file",
		"Sub-indices recommended at 80%+ of cap",
		"Adoption rate (LLM crawlers respecting): 40–60% in 2026",
		"Frameleads /llms.txt monthly fetch count: tracked via Cloudflare logs",
		"Cited brands per /llms.txt index entry: typically 1–3 LLMs",
	],
	commonMistakes: [
		"Stuffing /llms.txt with low-value pages (signal dilution).",
		"Not maintaining freshness (stale entries).",
		"No /llms-full.txt to complement (loses RAG opportunity).",
		"Wrong character set or encoding.",
	],
	relatedTerms: ["geo", "robots-txt", "entity-grounding", "rag"],
	ctaVariant: "consultation",
});

add({
	id: "direct-answer",
	term: "Direct Answer",
	expansion: "Direct Answer Block",
	definition: "Direct Answer Block is a 40–60 word paragraph directly under H1, written to be citation-quality for AIO and LLM answers. It leads with the entity, defines or answers crisply, and includes a benchmark. Wrapped in `.direct-answer` class for Speakable schema.",
	formulaProse: "Direct Answer Block is a 40–60 word paragraph under H1 starting with the entity, providing the direct answer or definition, and ending with a benchmark or action.",
	formula: "Direct Answer = Sentence 1 (entity definition) + Sentence 2 (formula or method) + Sentence 3 (benchmark) + Sentence 4 (action)",
	exampleInput: "Question: 'What is CAC?'",
	exampleOutput: "'CAC is total acquisition cost divided by new buyers... [formula]... [India benchmark]... [action implication].' (52 words)",
	tldr: [
		"Direct Answer = 40–60 words under H1; AIO citation target.",
		"Lead with entity; include formula + benchmark + action.",
		"Wrap in `.direct-answer` class for Speakable cssSelector.",
	],
	extendedExplanation: "Direct Answer Block is the single highest-leverage AIO optimization. AIO lifts 40–60 word paragraphs that match query intent verbatim. Format: Sentence 1 leads with entity ('CAC is...' not 'In today's competitive landscape...'). Sentence 2 gives formula or method. Sentence 3 anchors with India-specific benchmark. Sentence 4 is action. Frameleads tier templates already wire `.direct-answer` class to Speakable schema cssSelector.",
	indiaBenchmarks: [
		"AIO citation lift from direct-answer block: 3–5× cite rate",
		"Optimal length: 40–60 words; sentences 50–90 chars each",
		"Class wiring: `.direct-answer` (Speakable cssSelector)",
		"AI engines cite verbatim 30–50% of the time when format is followed",
		"Frameleads sitewide direct-answer coverage: 100% on tier pages",
	],
	commonMistakes: [
		"Lead with throat-clearing ('In this article...').",
		"Repeat the question in sentence 1 (waste citation-relevant words).",
		"Conditional language ('it depends').",
		"Length over 90 words (AIO summarizes rather than cites).",
	],
	relatedTerms: ["aio", "speakable-schema", "schema-markup", "geo"],
	ctaVariant: "audit",
});

add({
	id: "speakable-schema",
	term: "Speakable Schema",
	expansion: "Speakable Specification",
	definition: "Speakable Schema is a schema.org property identifying which parts of a page are most suitable for text-to-speech and LLM citation. Defined via cssSelector pointing to high-value content blocks. Frameleads uses '.direct-answer', '.tldr', '.faq-answer'.",
	formulaProse: "Speakable Schema is a SpeakableSpecification property added to WebPage schema, with cssSelector array pointing to citation-quality content blocks.",
	formula: "WebPage > speakable > SpeakableSpecification > cssSelector: ['.direct-answer', '.tldr', '.faq-answer']",
	exampleInput: "Page with .direct-answer + .tldr + .faq-answer divs",
	exampleOutput: "Speakable schema marks all three as citation candidates",
	tldr: [
		"Speakable Schema = schema.org cssSelector for AIO + voice citation targets.",
		"Use `.direct-answer`, `.tldr`, `.faq-answer` classes.",
		"Frameleads tier templates emit Speakable on every content page.",
	],
	extendedExplanation: "Speakable Schema is one of the most under-used schema types but increasingly important for AIO citation logic. Google Assistant + AIO use Speakable cssSelector to identify high-value content blocks. Frameleads wires `.direct-answer`, `.tldr`, `.faq-answer` classes — every tier template emits SpeakableSpecification with these selectors. Verify post-deploy via Schema Markup Validator.",
	indiaBenchmarks: [
		"Speakable schema adoption: <5% of Indian sites in 2026",
		"AIO citation lift from Speakable + matching classes: 2–4×",
		"Recommended classes: 3+ (direct-answer + tldr + faq-answer)",
		"Frameleads Speakable coverage: 100% of tier pages",
		"Validation pass rate target: 100%",
	],
	commonMistakes: [
		"Defining Speakable cssSelector without matching DOM classes.",
		"Multiple Speakable on one page (validation fails).",
		"Pointing to over-broad selectors (e.g., 'p').",
		"Not refreshing after class renames in templates.",
	],
	relatedTerms: ["schema-markup", "aio", "direct-answer", "structured-data"],
	ctaVariant: "audit",
});

add({
	id: "entity-grounding",
	term: "Entity Grounding",
	expansion: "Entity Grounding (sameAs Graph)",
	definition: "Entity Grounding is the practice of linking a brand or topic entity to authoritative reference points (Wikidata, Crunchbase, LinkedIn, Wikipedia) so AI engines can disambiguate it. Implemented via schema.org sameAs property with array of authoritative URLs.",
	formulaProse: "Entity Grounding equals adding sameAs schema property linking a brand entity to authoritative references on Wikidata, Crunchbase, LinkedIn, etc.",
	formula: "Organization > sameAs > [LinkedIn URL, Crunchbase URL, Wikidata URL, ...]",
	exampleInput: "Frameleads brand entity",
	exampleOutput: "sameAs: [LinkedIn, Crunchbase, Twitter, YouTube, G2, Clutch]",
	tldr: [
		"Entity Grounding = sameAs links to authoritative references.",
		"AI engines use this to disambiguate brand mentions.",
		"Frameleads target: Wikidata Q-entry once 50+ third-party citations exist.",
	],
	extendedExplanation: "Entity grounding helps AI engines correctly identify a brand and link mentions across the web. Without grounding, 'Frameleads' is just a string — possibly confused with similar names. With grounding (sameAs to LinkedIn, Crunchbase, etc.), AI engines tie all mentions to one canonical entity. Wikidata Q-entry is the gold standard but requires 50+ verifiable third-party citations to merit notability. Pursue once T26 reports + earned media establishes that base.",
	indiaBenchmarks: [
		"Recommended sameAs entries: 5–10 authoritative URLs",
		"Wikidata Q-entry threshold: 50+ third-party citations",
		"Indian brand entity recognition rate (LLMs in 2026): 30–60% accuracy without grounding",
		"With grounding: 75–95% accuracy",
		"Indian B2B SaaS Wikidata adoption: <10% of established brands",
	],
	commonMistakes: [
		"sameAs to non-authoritative URLs (dilutes signal).",
		"sameAs to URLs you don't control (404 risk).",
		"Inconsistent NAP across sameAs entries.",
		"Pursuing Wikidata before notability is established.",
	],
	relatedTerms: ["geo", "schema-markup", "wikidata", "knowledge-graph"],
	ctaVariant: "consultation",
});

add({
	id: "rag",
	term: "RAG",
	expansion: "Retrieval-Augmented Generation",
	definition: "RAG is the technique where an LLM retrieves relevant documents from an external corpus before generating an answer, allowing the LLM to cite up-to-date sources beyond its training cutoff. Perplexity, Claude (web search), ChatGPT (browse) all use RAG.",
	formulaProse: "RAG is a technique combining LLM generation with retrieval from a fresh corpus. The LLM queries an external index, fetches relevant documents, and conditions its answer on those documents.",
	formula: "RAG Answer = LLM(Query + Retrieved Documents from Corpus)",
	exampleInput: "User asks Perplexity: 'What is Frameleads' Q1 2026 D2C report?'",
	exampleOutput: "Perplexity retrieves Frameleads' report URL via web search, generates answer citing it",
	tldr: [
		"RAG = LLM retrieves fresh content + generates answer.",
		"Perplexity, Claude (web), ChatGPT (browse) use RAG.",
		"GEO optimization makes Frameleads pages retrievable by RAG.",
	],
	extendedExplanation: "RAG is the mechanism through which LLM citations of fresh content happen. The LLM searches an external index (often Bing or its own crawler index), retrieves top-N documents, and generates an answer conditioned on those documents. For brands, this means: (1) Be in the LLM's index. (2) Have schema-rich pages. (3) Have authoritative content. (4) Use llms.txt to surface canonical pages. Pages optimized for RAG are usually also good for traditional SEO.",
	indiaBenchmarks: [
		"Perplexity RAG retrieval depth: typically top 5–15 documents",
		"Claude web-search RAG depth: top 3–10",
		"ChatGPT browse RAG depth: top 3–5",
		"Indian site retrieval rate via RAG: 40–70% if well-optimized",
		"GEO investment ROI on RAG: 5–10× standard SEO over 12 months",
	],
	commonMistakes: [
		"Optimizing only for training-data inclusion (RAG matters more for fresh content).",
		"Ignoring llms.txt (signals canonical pages to RAG).",
		"Slow page load (RAG retrieval timeouts).",
		"JavaScript-rendered content (RAG can't always parse).",
	],
	relatedTerms: ["geo", "aio", "llms-txt", "knowledge-graph"],
	ctaVariant: "consultation",
});

add({
	id: "knowledge-graph",
	term: "Knowledge Graph",
	expansion: "Knowledge Graph (KG)",
	definition: "Knowledge Graph is Google's database of entities and their relationships — people, places, organizations, concepts. KG powers entity recall in search and AI answers. Pages with strong entity grounding (sameAs, schema, Wikidata) feed into KG; KG mentions improve search visibility.",
	formulaProse: "Knowledge Graph is Google's structured database of entities and relationships, used for SERP knowledge panels, AI answers, and entity disambiguation.",
	formula: "KG Entry = Entity + Properties + Relationships (sameAs, parentOrganization, etc.)",
	exampleInput: "Frameleads brand entity establishes presence",
	exampleOutput: "KG entry with logo, description, sameAs, founder, location",
	tldr: [
		"Knowledge Graph = Google's entity database; powers knowledge panels + AI answers.",
		"Get into KG via: Wikidata, schema.org Organization, sameAs graph, consistent NAP.",
		"KG presence lifts branded SERP CTR + AI citation rate.",
	],
	extendedExplanation: "Knowledge Graph is the structured backbone of modern Google. Entities in KG appear in knowledge panels, get cited in AIO, and benefit from disambiguation. Path to KG entry: (1) Wikidata Q-entry (Wikipedia stub helps). (2) Schema.org Organization markup with sameAs across LinkedIn, Crunchbase, etc. (3) Consistent NAP (Name, Address, Phone) across the web. (4) Earned mentions on authoritative sites. Indian B2B SaaS often invests in KG presence at Series B / C stage.",
	indiaBenchmarks: [
		"Indian B2B SaaS KG entry rate at Series A: <30%",
		"At Series C+: 80%+",
		"KG presence CTR lift on branded SERPs: 15–35%",
		"Wikidata adoption among Indian SaaS: <15%",
		"Time from launch to KG entry (median): 18–36 months",
	],
	commonMistakes: [
		"Pursuing KG before notability (won't be accepted).",
		"Inconsistent NAP across sites (KG can't disambiguate).",
		"No sameAs graph (KG can't tie entity to references).",
		"Treating KG as one-time achievement (it requires ongoing maintenance).",
	],
	relatedTerms: ["entity-grounding", "wikidata", "geo", "aio"],
	ctaVariant: "consultation",
});

add({
	id: "gptbot",
	term: "GPTBot",
	expansion: "GPTBot (OpenAI Crawler)",
	definition: "GPTBot is OpenAI's web crawler that indexes content for ChatGPT training and search. Site owners can allow or block GPTBot via robots.txt. Allowing GPTBot enables ChatGPT to cite the site; blocking removes the site from training data.",
	formulaProse: "GPTBot is OpenAI's web crawler with user-agent 'GPTBot'. Controlled via robots.txt directives.",
	formula: "robots.txt: User-agent: GPTBot + Allow: / (or Disallow: /)",
	exampleInput: "Allow GPTBot full site access",
	exampleOutput: "User-agent: GPTBot\\nAllow: /",
	tldr: [
		"GPTBot = OpenAI's web crawler.",
		"Allow for ChatGPT citations; disallow to block training.",
		"Frameleads explicitly allows GPTBot in robots.txt.",
	],
	extendedExplanation: "GPTBot indexes content for ChatGPT training and (via SearchGPT) for search-style answers. Allowing GPTBot means Frameleads content can be cited in ChatGPT answers and used for model improvement. Blocking GPTBot removes Frameleads from training data going forward. Companies with proprietary moats may block; Frameleads (whose moat is methodology + brand) benefits from being indexed and cited. Frameleads' robots.txt explicitly allows GPTBot.",
	indiaBenchmarks: [
		"GPTBot crawl frequency for active sites: 1–4 visits/day",
		"India robots.txt explicit GPTBot allow rate: 40–60%",
		"Block rate among large publishers: 30–50% (NYT, Reuters etc. blocked GPTBot)",
		"ChatGPT citation share for sites that allow vs block: 8–15× higher",
		"Frameleads policy: explicit Allow",
	],
	commonMistakes: [
		"Blocking GPTBot reflexively without considering citation upside.",
		"Allowing GPTBot but not other LLM crawlers (signal mismatch).",
		"Not monitoring GPTBot crawl behavior.",
		"Blocking via robots.txt but expecting ChatGPT citations.",
	],
	relatedTerms: ["robots-txt", "claudebot", "perplexitybot", "geo"],
	ctaVariant: "consultation",
});

add({
	id: "claudebot",
	term: "ClaudeBot",
	expansion: "ClaudeBot (Anthropic Crawler)",
	definition: "ClaudeBot is Anthropic's web crawler that indexes content for Claude training and answers. Site owners can allow or block ClaudeBot via robots.txt. Allowing ClaudeBot enables Claude to cite the site in web-search answers.",
	formulaProse: "ClaudeBot is Anthropic's web crawler with user-agent 'ClaudeBot' (also Claude-Web, anthropic-ai). Controlled via robots.txt.",
	formula: "robots.txt: User-agent: ClaudeBot + Allow: / (or Disallow: /)",
	exampleInput: "Allow ClaudeBot full site access",
	exampleOutput: "User-agent: ClaudeBot\\nAllow: /",
	tldr: [
		"ClaudeBot = Anthropic's web crawler.",
		"Allow for Claude citations; disallow to block.",
		"Frameleads explicitly allows ClaudeBot in robots.txt.",
	],
	extendedExplanation: "ClaudeBot serves Claude's training and Claude's web-search RAG. Allowing means Frameleads content can be cited verbatim in Claude answers. Anthropic's stance is permissive — ClaudeBot respects robots.txt and uses content responsibly. Frameleads explicitly allows ClaudeBot, Claude-Web, and anthropic-ai user-agents.",
	indiaBenchmarks: [
		"ClaudeBot crawl frequency for active sites: 0.5–2 visits/day",
		"India explicit ClaudeBot allow rate: 50–70% (more permissive than GPTBot)",
		"Claude citation rate for allowed sites: typically high with verbatim quotes",
		"Block rate among large publishers: lower than GPTBot block rate",
		"Frameleads policy: explicit Allow for ClaudeBot, Claude-Web, anthropic-ai",
	],
	commonMistakes: [
		"Treating ClaudeBot like GPTBot (different stance, different policies).",
		"Blocking only ClaudeBot but allowing GPTBot (asymmetric strategy).",
		"Not allowing all three Anthropic UAs (ClaudeBot, Claude-Web, anthropic-ai).",
		"Not monitoring ClaudeBot crawl behavior.",
	],
	relatedTerms: ["robots-txt", "gptbot", "perplexitybot", "geo"],
	ctaVariant: "consultation",
});

add({
	id: "perplexitybot",
	term: "PerplexityBot",
	expansion: "PerplexityBot (Perplexity Crawler)",
	definition: "PerplexityBot is Perplexity's web crawler that indexes content for Perplexity's RAG-based search-engine. Perplexity always cites sources with explicit numbered citations [1] [2]. Allowing PerplexityBot is essential to be cited in Perplexity answers.",
	formulaProse: "PerplexityBot is Perplexity's web crawler with user-agent 'PerplexityBot' (also Perplexity-User). Controlled via robots.txt.",
	formula: "robots.txt: User-agent: PerplexityBot + Allow: / (or Disallow: /)",
	exampleInput: "Allow PerplexityBot full site access",
	exampleOutput: "User-agent: PerplexityBot\\nAllow: /",
	tldr: [
		"PerplexityBot = Perplexity's RAG crawler.",
		"Highest citation rate among LLMs for allowed sites.",
		"Frameleads explicitly allows PerplexityBot in robots.txt.",
	],
	extendedExplanation: "Perplexity is the most aggressive citer among LLM-based search engines. Every answer has 5–20 numbered citations, and the citation UI is prominent. Sites that allow PerplexityBot AND have schema-rich content are cited frequently. Sites blocking PerplexityBot are entirely absent from Perplexity. Frameleads' GEO strategy prioritizes Perplexity due to citation prominence.",
	indiaBenchmarks: [
		"PerplexityBot crawl frequency: 1–5 visits/day for active sites",
		"Perplexity citations per answer: typically 5–20",
		"India explicit PerplexityBot allow rate: 60–80%",
		"Citation share for allowed sites: typically 3–5× more visible than GPT/Claude",
		"Frameleads policy: explicit Allow for PerplexityBot + Perplexity-User",
	],
	commonMistakes: [
		"Blocking PerplexityBot (loses highest-citation LLM source).",
		"Schema-poor pages allowed but not cited (need rich schema).",
		"Slow page load timing out PerplexityBot RAG retrieval.",
		"Not monitoring Perplexity referrals in GA4.",
	],
	relatedTerms: ["robots-txt", "gptbot", "claudebot", "rag"],
	ctaVariant: "consultation",
});

add({
	id: "google-extended",
	term: "Google-Extended",
	expansion: "Google-Extended (AI Training Crawler)",
	definition: "Google-Extended is the user-agent token Google uses for fetching content used in training Bard/Gemini and AI products, separate from Googlebot for Search. Allowing Google-Extended permits AI training; blocking it doesn't affect Search ranking.",
	formulaProse: "Google-Extended is Google's AI-training user-agent. Controlled via robots.txt as a separate directive from Googlebot.",
	formula: "robots.txt: User-agent: Google-Extended + Allow: / (or Disallow: /)",
	exampleInput: "Allow Google-Extended full site access",
	exampleOutput: "User-agent: Google-Extended\\nAllow: /",
	tldr: [
		"Google-Extended = Google AI-training crawler.",
		"Separate from Googlebot for Search.",
		"Allow for AI citation upside; block doesn't affect SEO.",
	],
	extendedExplanation: "Google-Extended is the granular control Google introduced for AI training opt-out. Blocking Google-Extended removes content from Bard/Gemini training but keeps the site in Google Search. Most publishers block Google-Extended (NYT, Reuters); brands allow it for citation upside. Frameleads explicitly allows Google-Extended — citation upside outweighs training-data concern.",
	indiaBenchmarks: [
		"India explicit Google-Extended allow rate: 50–70% (mixed)",
		"Block rate among large publishers: 60–80%",
		"Block rate among B2B SaaS / D2C brands: 20–40%",
		"AIO citation rate impact (allow vs block): minor (AIO uses Search index)",
		"Frameleads policy: explicit Allow",
	],
	commonMistakes: [
		"Confusing Google-Extended with Googlebot (different bots).",
		"Blocking both (Search ranking suffers).",
		"Allowing only Googlebot, blocking Google-Extended (citation gap).",
		"Not monitoring Google-Extended traffic.",
	],
	relatedTerms: ["robots-txt", "gptbot", "claudebot", "perplexitybot"],
	ctaVariant: "consultation",
});

// ─────────────────────────────────────────────────────────────────
// Section 5 — India-specific
// ─────────────────────────────────────────────────────────────────

add({
	id: "dpdp-act",
	term: "DPDP Act",
	expansion: "Digital Personal Data Protection Act 2023",
	definition: "DPDP Act 2023 is India's privacy law governing collection, processing, and storage of digital personal data. It applies to any business processing data of Indian residents. Penalties for non-compliance reach ₹250 crore per violation. Marketers must obtain explicit consent + provide opt-out + minimize data collection.",
	formulaProse: "DPDP Act compliance requires explicit consent, purpose limitation, data minimization, and operational consent-management infrastructure for businesses processing data of Indian residents.",
	formula: "DPDP Compliance = Consent + Purpose Limitation + Data Minimization + Right to Erasure",
	exampleInput: "Indian D2C brand collecting email + phone for marketing",
	exampleOutput: "Required: explicit consent checkbox + purpose disclosure + opt-out + data deletion on request",
	tldr: [
		"DPDP Act 2023 = India's privacy law for digital data.",
		"Penalty: ₹250 crore per violation.",
		"Marketing compliance: explicit consent, purpose, opt-out, deletion.",
	],
	extendedExplanation: "DPDP Act came into effect in 2023 with phased implementation through 2024–2025. By 2026, full enforcement is active. Marketers must: (1) Obtain explicit consent (opt-in checkboxes, not pre-ticked). (2) Disclose purpose at collection. (3) Provide opt-out + erasure. (4) Minimize collection (only what's needed). (5) Implement breach notification. WhatsApp, email, SMS marketing all require explicit consent. Frameleads recommends Consent Management Platforms for any client at scale.",
	indiaBenchmarks: [
		"DPDP penalty cap: ₹250 crore per violation",
		"Compliance rate among Indian D2C: 50–70% as of 2026",
		"Consent capture rate for compliant flows: 70–85%",
		"Consent Management Platform adoption: 30–50% of mid-market",
		"Data Protection Officer requirement: businesses processing significant data",
	],
	commonMistakes: [
		"Pre-ticked consent checkboxes (non-compliant).",
		"Bundled consent for multiple purposes.",
		"Not implementing data deletion on request.",
		"Treating DPDP as one-time compliance vs ongoing.",
	],
	relatedTerms: ["gdpr", "kyc", "compliance", "wabba"],
	ctaVariant: "consultation",
});

add({
	id: "rera",
	term: "RERA",
	expansion: "Real Estate Regulatory Authority Act",
	definition: "RERA is India's real estate regulatory framework requiring developers to register projects, disclose timelines, and meet construction commitments. Marketing compliance: every real estate ad must include RERA registration number; making unregistered claims is a penalty offense.",
	formulaProse: "RERA compliance for real estate marketing requires displaying the project's RERA registration number in all ads and complying with disclosure requirements.",
	formula: "RERA Marketing Compliance = Registration No. in ad + Carpet Area disclosure + No misleading claims",
	exampleInput: "Pune real estate developer launching new project",
	exampleOutput: "All ads must include 'RERA Reg. P52100023456' + carpet area + delivery timeline",
	tldr: [
		"RERA = real estate regulatory framework; mandatory project registration.",
		"All real estate ads must show RERA registration number.",
		"Penalty for non-compliant ads: 10% of project cost or imprisonment.",
	],
	extendedExplanation: "RERA fundamentally changed Indian real estate marketing. Pre-RERA (before 2017), developers commonly over-promised on amenities, timelines, square footage. Post-RERA, every ad requires registration number, carpet-area disclosure (not super-built-up), and accurate timeline commitments. Penalty: 10% of project cost or imprisonment up to 3 years for misleading ads. Per-state RERA authority handles disputes; Maharashtra (MahaRERA) is most active.",
	indiaBenchmarks: [
		"Per-state RERA: 28 state authorities (some pending)",
		"Most active: Maharashtra (MahaRERA), Tamil Nadu, Karnataka",
		"Compliance rate for digital ads: 70–85% (gaps remain)",
		"Penalty for non-compliance: 10% of project cost or imprisonment",
		"Indian real estate marketing compliance audit cost: ₹50,000–₹2L per project",
	],
	commonMistakes: [
		"Running ads without RERA registration number.",
		"Marketing super-built-up area instead of carpet area.",
		"Promising amenities not in approved plan.",
		"Promising delivery timelines outside RERA registration.",
	],
	relatedTerms: ["compliance", "real-estate", "dpdp-act", "asci"],
	ctaVariant: "consultation",
});

add({
	id: "wabba",
	term: "WABA",
	expansion: "WhatsApp Business Account",
	definition: "WABA is a verified WhatsApp business account that uses the WhatsApp Business API to send marketing, utility, and authentication templates. WABA requires a Facebook Business Manager + verified domain + display name approval. Templates must be pre-approved by Meta before sending at scale.",
	formulaProse: "WABA is a Meta-verified business WhatsApp account using WhatsApp Business API for scaled customer messaging via approved templates.",
	formula: "WABA Setup = Facebook BM + Domain Verification + Display Name + Phone Number + Template Approval",
	exampleInput: "Indian D2C brand wants to send 10k WhatsApp marketing messages/month",
	exampleOutput: "Setup WABA with BSP (Wati / Interakt / Gallabox) + approved templates",
	tldr: [
		"WABA = verified WhatsApp Business Account using API.",
		"Requires BSP (Business Solution Provider) for most brands.",
		"Templates must be pre-approved by Meta.",
	],
	extendedExplanation: "WABA is the foundation of any scaled WhatsApp marketing. Self-serve setup is possible but most brands use BSPs (Business Solution Providers) like Wati, Interakt, Gallabox for tooling, dashboard, and template approval. Indian WhatsApp marketing template cost (2026): ₹0.85 per marketing message; utility messages ~₹0.30; authentication ~₹0.35. Opt-in is mandatory under DPDP Act for marketing templates.",
	indiaBenchmarks: [
		"India WhatsApp marketing template cost: ₹0.85/message (2026)",
		"India WhatsApp utility template cost: ₹0.30/message",
		"India WhatsApp authentication cost: ₹0.35/message",
		"Top BSPs in India: Wati, Interakt, Gallabox, Twilio",
		"WABA setup time: 3–7 days (Meta verification)",
	],
	commonMistakes: [
		"Sending without opt-in (DPDP non-compliance).",
		"Using single template for all use cases.",
		"Not refreshing templates (rejected after 6 months of inactivity).",
		"Ignoring 24-hour conversation window rules.",
	],
	relatedTerms: ["dpdp-act", "whatsapp-marketing", "bsp", "marketing-template"],
	ctaVariant: "consultation",
});

add({
	id: "upi",
	term: "UPI",
	expansion: "Unified Payments Interface",
	definition: "UPI is India's instant payment system enabling real-time bank-to-bank transfers via mobile. UPI is dominant in Indian D2C — typically 30–55% of prepaid orders. UPI offers faster checkout (one-click) and lower payment-gateway fees vs cards (~0.5% vs 2%).",
	formulaProse: "UPI is India's real-time payment infrastructure operated by NPCI, allowing instant bank transfers via mobile apps without card details.",
	formula: "UPI Payment = Customer App + UPI ID/QR + Instant Bank Transfer",
	exampleInput: "Indian D2C checkout with UPI option",
	exampleOutput: "30–55% of prepaid orders via UPI, lower gateway fees",
	tldr: [
		"UPI = India's instant payment system; dominant in D2C prepaid.",
		"Lower gateway fees (~0.5%) vs cards (~2%).",
		"30–55% of Indian D2C prepaid orders use UPI.",
	],
	extendedExplanation: "UPI transformed Indian D2C economics. Pre-UPI (before 2016), card adoption was low and COD dominated. Post-UPI, prepaid share rose 30–50% in many categories due to UPI convenience. Top UPI apps: PhonePe, Google Pay, Paytm, BHIM. Indian D2C should always offer UPI alongside cards + COD; UPI checkouts complete 15–25% faster than card checkouts. Razorpay, Cashfree, PhonePe Business handle UPI integration.",
	indiaBenchmarks: [
		"UPI share of Indian D2C prepaid: 30–55%",
		"UPI gateway fee: ~0.5–1% (vs 2% cards)",
		"UPI checkout speed: 15–25% faster than cards",
		"Indian UPI transactions per month (2026): 12–15 billion",
		"UPI adoption among urban Indian buyers: 80%+",
	],
	commonMistakes: [
		"Not offering UPI as a payment option.",
		"Hiding UPI behind 'Other payment methods'.",
		"Not testing UPI failure flows.",
		"Pricing assumption based only on card gateway fees.",
	],
	relatedTerms: ["razorpay", "cod", "payment-gateway", "checkout"],
	ctaVariant: "audit",
});

add({
	id: "razorpay",
	term: "Razorpay",
	expansion: "Razorpay (Payment Gateway)",
	definition: "Razorpay is India's leading payment gateway, supporting cards, UPI, netbanking, wallets, BNPL, COD, and EMI. Razorpay is dominant in Indian D2C (40–60% market share). Standard fees: 2% for cards, ~0.5% for UPI. Setup is fast; integration with Shopify, WooCommerce, custom carts is well-supported.",
	formulaProse: "Razorpay is an Indian payment gateway processing card, UPI, netbanking, wallet, BNPL, COD, and EMI transactions for online businesses.",
	formula: "Razorpay Fee = ~2% (cards) + ~0.5% (UPI) + GST",
	exampleInput: "Indian D2C using Razorpay for ₹50L/month gross sales",
	exampleOutput: "Gateway fees: ~₹50,000–₹1,00,000/month (varies by mix)",
	tldr: [
		"Razorpay = India's leading payment gateway.",
		"Fee: 2% cards / 0.5% UPI + GST.",
		"Dominant in Indian D2C (40–60% share).",
	],
	extendedExplanation: "Razorpay is the default choice for Indian D2C in 2026. Setup takes 1–3 days post-KYC. Beyond payments, Razorpay offers: Razorpay Capital (working capital loans), Razorpay X (business banking), Magic Checkout (one-click checkout), Smart Routing (best-cost gateway selection). Compare to Cashfree (similar fees, slightly more developer-friendly) and PayU (more enterprise-focused). For most Indian D2C, Razorpay is the right default.",
	indiaBenchmarks: [
		"Razorpay market share India D2C: 40–60%",
		"Standard fees: 2% (cards), 0.5% (UPI), 1.95% (netbanking)",
		"Setup time: 1–3 days post-KYC",
		"Indian D2C alternatives: Cashfree, PayU, PhonePe Business",
		"Magic Checkout conversion lift vs standard: 15–25%",
	],
	commonMistakes: [
		"Not negotiating fee at scale (custom rates from ₹50L/month volume).",
		"Not enabling UPI to reduce fees.",
		"Ignoring Smart Routing for fee optimization.",
		"Not implementing magic checkout for AOV / CR optimization.",
	],
	relatedTerms: ["upi", "cod", "checkout", "payment-gateway"],
	ctaVariant: "audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 6 — B2B / SaaS GTM
// ─────────────────────────────────────────────────────────────────

add({
	id: "icp",
	term: "ICP",
	expansion: "Ideal Customer Profile",
	definition: "ICP is the precise description of the customer type a B2B business is built to serve — by company size, industry, role, geography, technology stack, and behavioral signals. Tight ICP definition drives 3–5× pipeline efficiency vs broad targeting.",
	formulaProse: "ICP equals the specific customer attributes (firmographic + behavioral + technographic) that define the highest-fit segment for a B2B product.",
	formula: "ICP = Industry + Company Size + Role + Geography + Tech Stack + Trigger Signals",
	exampleInput: "B2B SaaS GTM targeting product-led companies",
	exampleOutput: "ICP: Indian B2B SaaS, 50–500 employees, Head of Growth role, post-Series A, Shopify Plus or Klaviyo users",
	tldr: [
		"ICP = precise customer-fit definition: industry, size, role, geo, tech.",
		"Tighter ICP = 3–5× pipeline efficiency.",
		"Most B2B brands have too-broad ICP; tighten ruthlessly.",
	],
	extendedExplanation: "ICP is the foundation of B2B GTM. Without sharp ICP, sales calls everyone, marketing spreads thin, content lacks resonance. With sharp ICP, every campaign targets the right firmographic + behavioral signals; every page speaks to known pains; every demo feels relevant. The trap: founders use 'all SaaS in India' as ICP. Real ICP is 'B2B SaaS, 50–500 employees, in Bangalore/Mumbai, with Head of Growth role, using Shopify Plus + Klaviyo'.",
	indiaBenchmarks: [
		"Indian B2B SaaS Series A typical ICP definition: industry + size + role",
		"Tightening ICP impact: 3–5× pipeline efficiency",
		"Time to refine ICP: 6–12 months from product launch",
		"Number of segments inside ICP: 3–8 typical",
		"Lookalike audiences from sharp ICP: 4–8× conversion vs broad",
	],
	commonMistakes: [
		"Using ICP as 'anyone who could buy' (too broad).",
		"Not refreshing ICP as product evolves.",
		"Ignoring behavioral signals (only firmographic).",
		"Not segmenting ICP by deal-size tier.",
	],
	relatedTerms: ["jtbd", "cac", "abm", "lead-quality"],
	ctaVariant: "consultation",
});

add({
	id: "jtbd",
	term: "JTBD",
	expansion: "Jobs to Be Done",
	definition: "JTBD is a framework defining what 'job' a customer hires a product to do — not just what features they buy, but what underlying outcome they need. JTBD analysis surfaces the functional, emotional, and social dimensions of customer hiring decisions.",
	formulaProse: "JTBD analysis maps the functional, emotional, and social jobs a customer is trying to accomplish, the situation triggering the hire, and the alternatives being compared.",
	formula: "JTBD = Functional Job + Emotional Job + Social Job + Situation + Alternatives",
	exampleInput: "Indian D2C founder buys Klaviyo",
	exampleOutput: "Job: 'Build a recurring revenue engine' (functional) + 'Feel professional vs DIY' (emotional) + 'Be seen as serious by team' (social)",
	tldr: [
		"JTBD = functional + emotional + social outcomes a customer hires for.",
		"Better than feature-focused thinking for product positioning.",
		"Maps to copy + targeting + product roadmap.",
	],
	extendedExplanation: "JTBD reframes product positioning. Instead of 'we have feature X', say 'we help you accomplish job Y in situation Z when alternative A fails'. Indian B2B SaaS often slips into feature-listing copy; JTBD-driven copy converts 30–50% better. The framework: identify the job (what's being hired), the trigger (what made the customer notice), the alternatives (what else they considered), and the obstacles (what made existing solutions fail).",
	indiaBenchmarks: [
		"JTBD-driven copy conversion lift: 30–50% on landing pages",
		"Indian B2B SaaS JTBD adoption: <30% of GTM teams",
		"Common Indian D2C JTBD: 'Look professional + drive repeat sales'",
		"Common Indian B2B SaaS JTBD: 'Replace ops chaos with system'",
		"JTBD audit per ICP segment: 6–12 jobs typical",
	],
	commonMistakes: [
		"Treating JTBD as 'use cases' (too tactical).",
		"Ignoring emotional + social dimensions.",
		"One JTBD per product (real customers have multiple jobs).",
		"Not refreshing JTBD as customer base evolves.",
	],
	relatedTerms: ["icp", "positioning", "messaging-framework", "abm"],
	ctaVariant: "consultation",
});

add({
	id: "mql",
	term: "MQL",
	expansion: "Marketing Qualified Lead",
	definition: "MQL is a lead that marketing has scored as fitting the ICP and showing buying-signal behavior — typically meeting criteria like company size, role, intent indicators, or content engagement. MQLs hand off to sales for qualification (SQL).",
	formulaProse: "Marketing Qualified Lead is a lead scored against ICP + behavior criteria, indicating fit and intent enough to warrant sales conversation.",
	formula: "MQL = Lead × ICP-fit Score × Behavior Score above threshold",
	exampleInput: "Lead from an Indian B2B SaaS, Head of Growth role, downloaded 2 reports + attended webinar",
	exampleOutput: "MQL — qualified for sales handoff",
	tldr: [
		"MQL = marketing-qualified lead; meets ICP + behavior threshold.",
		"Hand off to sales for SQL qualification.",
		"Healthy MQL → SQL conversion: 30–60%; SQL → close: 15–35%.",
	],
	extendedExplanation: "MQL is the handoff point between marketing and sales. Without clear MQL criteria, marketing spreads leads of mixed quality; sales wastes time on poor fit. With clear criteria, both teams aligned on what 'good' means. Indian B2B SaaS typical scoring: ICP-fit (industry + size + role) gets 60%, behavior (content engagement, demo signup, pricing-page visit) gets 40%. Threshold typically 60–80 of 100.",
	indiaBenchmarks: [
		"MQL → SQL conversion rate: 30–60%",
		"SQL → close conversion rate: 15–35%",
		"MQL volume per month for Indian B2B SaaS Series A: 100–500",
		"MQL CAC: ₹500–₹3,000",
		"MQL handoff SLA: 2–24 hours typical",
	],
	commonMistakes: [
		"Treating any form-fill as MQL (mixed quality).",
		"Not refreshing MQL criteria as product evolves.",
		"Marketing & sales disagreement on MQL definition.",
		"No SLA for MQL handoff.",
	],
	relatedTerms: ["sql", "pql", "icp", "lead-scoring"],
	ctaVariant: "consultation",
});

add({
	id: "sql",
	term: "SQL",
	expansion: "Sales Qualified Lead",
	definition: "SQL is a lead that has been confirmed by sales as having genuine buying intent, budget, authority, and timing for purchase. SQLs progress to demo → opportunity → closed-won. SQL definition typically includes BANT (Budget, Authority, Need, Timing) or MEDDIC qualifying questions.",
	formulaProse: "Sales Qualified Lead is a lead that passed sales discovery and confirms BANT or MEDDIC qualification criteria.",
	formula: "SQL = MQL × Sales Discovery Confirmation (BANT or MEDDIC criteria met)",
	exampleInput: "MQL completed sales discovery call",
	exampleOutput: "SQL — confirmed budget ₹10L+, decision authority, 6-month timeline",
	tldr: [
		"SQL = sales-qualified after discovery confirms BANT/MEDDIC.",
		"SQL → close conversion: 15–35%.",
		"SQL count is the most accurate predictor of pipeline health.",
	],
	extendedExplanation: "SQL is the most CFO-meaningful pipeline metric. SQL count × close rate × deal size = revenue forecast. Indian B2B SaaS Series A: typically 30–100 SQLs/month with 20–30% close rate. Below 30 SQLs/month at Series A indicates lead-gen weakness or sales over-qualification. Above 100 SQLs/month with low close rate indicates sales lacks discipline. Track ratio SQL → opp → won-lost-reasons monthly.",
	indiaBenchmarks: [
		"Indian B2B SaaS Series A SQLs/month: 30–100",
		"SQL → opportunity conversion: 60–80%",
		"Opportunity → closed-won: 20–40%",
		"SQL CAC (fully-loaded): ₹3,000–₹15,000",
		"Time from MQL to SQL: 3–14 days typical",
	],
	commonMistakes: [
		"Sales declining to formally qualify (calls everyone 'opportunity').",
		"Not tracking lost-reasons by SQL.",
		"Treating all SQLs equally (deal-size segmentation matters).",
		"No SLA from MQL to SQL.",
	],
	relatedTerms: ["mql", "pql", "icp", "pipeline"],
	ctaVariant: "consultation",
});

add({
	id: "pql",
	term: "PQL",
	expansion: "Product Qualified Lead",
	definition: "PQL is a free or trial user who has demonstrated meaningful product engagement — completing key actions, hitting feature milestones, or reaching usage thresholds — indicating intent to convert to paid. PQL is the central metric for product-led growth (PLG) GTM motions.",
	formulaProse: "Product Qualified Lead is a free or trial user demonstrating engagement above threshold via key product actions (the 'aha' actions).",
	formula: "PQL = Free/Trial User × Key Activation Actions Met × Usage Threshold",
	exampleInput: "Free user activated 3 features + invited 2 teammates within 14 days",
	exampleOutput: "PQL — high-intent for paid upgrade conversation",
	tldr: [
		"PQL = product-qualified lead from free/trial showing buying signals.",
		"Central metric for PLG GTM motions.",
		"PQL → paid conversion: 8–25% typical for healthy PLG.",
	],
	extendedExplanation: "PQL emerged as PLG GTM rose to dominance. Unlike MQL (form-fill + score), PQL requires actual product usage signals. Best PQL definitions identify the 1–3 key activation actions that correlate with paid conversion (e.g., for Notion: 'Created 3 docs + invited 1 teammate'; for Klaviyo: 'Sent first campaign'). Indian B2B SaaS adopting PQL alongside MQL: 30–50% of PLG-led companies in 2026.",
	indiaBenchmarks: [
		"PQL → paid conversion: 8–25% for healthy PLG",
		"Indian B2B SaaS PQL adoption: 30–50% (PLG-only)",
		"Time to PQL milestone: 3–14 days for healthy onboarding",
		"PQL reach for Series A SaaS: 200–800/month",
		"PQL volume × conversion: best Series A PLG indicator",
	],
	commonMistakes: [
		"Defining PQL too leniently (anyone who logs in).",
		"Not iterating PQL definition with product changes.",
		"PQL handoff without contextual product data to sales.",
		"Treating MQL and PQL as identical (different motions).",
	],
	relatedTerms: ["mql", "sql", "plg", "activation"],
	ctaVariant: "consultation",
});

add({
	id: "abm",
	term: "ABM",
	expansion: "Account-Based Marketing",
	definition: "ABM is a B2B GTM motion where marketing targets specific named accounts (companies) rather than broad audiences. Key contacts at target accounts receive personalized content + outbound + paid ads, all coordinated. Best for high-ACV deals (₹20L+ ACV).",
	formulaProse: "Account-Based Marketing focuses marketing and sales effort on a specific named-account list, with personalized content + outbound + paid ads coordinated per account.",
	formula: "ABM = Target Account List × Personalized Multi-Channel Engagement × Sales Coordination",
	exampleInput: "Indian B2B SaaS targeting 200 named D2C brands",
	exampleOutput: "Each account gets personalized LinkedIn ads + outbound sequence + custom landing page",
	tldr: [
		"ABM = focused B2B GTM on specific named accounts.",
		"Best for high-ACV (₹20L+) deals; not for SMB SaaS.",
		"Multi-channel coordination: LinkedIn ads + outbound + content + sales.",
	],
	extendedExplanation: "ABM is the right GTM for high-ACV B2B (Indian B2B SaaS Enterprise tier, ₹20L+ ACV). For SMB SaaS, broader inbound + PLG works better — ABM's per-account cost is too high. ABM mechanics: tier accounts (Tier 1 = 50 accounts highly customized; Tier 2 = 200 accounts segment-customized; Tier 3 = 1,000 accounts programmatic). Each tier gets matched investment level. Indian B2B SaaS Enterprise ABM typically ₹50L–₹2Cr/year programs.",
	indiaBenchmarks: [
		"ABM minimum ACV for ROI: ₹10–20L+",
		"Indian Enterprise SaaS ABM program budget: ₹50L–₹2Cr/year",
		"Tier 1 accounts (highly customized): 30–80 typical",
		"Tier 2 accounts (segment-customized): 150–400",
		"Tier 3 (programmatic): 800–3,000",
	],
	commonMistakes: [
		"Running ABM for SMB SaaS (too expensive per account).",
		"No sales-marketing alignment (ABM requires daily coordination).",
		"Tier 1 accounts without true customization.",
		"Not measuring ABM impact at account level.",
	],
	relatedTerms: ["icp", "outbound", "linkedin-ads", "intent-data"],
	ctaVariant: "consultation",
});

add({
	id: "plg",
	term: "PLG",
	expansion: "Product-Led Growth",
	definition: "PLG is a GTM motion where the product itself is the primary acquisition, conversion, and expansion engine. Users sign up for free or freemium, experience value, and self-convert to paid. PLG companies have shorter sales cycles, higher gross margins, and typically larger user-funnels.",
	formulaProse: "Product-Led Growth is a GTM motion centered on the product driving acquisition, conversion, and expansion through self-service flows.",
	formula: "PLG = Free/Freemium → Activation → Paid Conversion → Expansion (all product-driven)",
	exampleInput: "Indian B2B SaaS launching freemium model",
	exampleOutput: "PLG funnel: signup → activation → paid trigger → upgrade",
	tldr: [
		"PLG = product drives acquisition, conversion, expansion.",
		"Faster sales cycles, larger funnels, lower CAC for the right products.",
		"Best for self-serve products with quick time-to-value.",
	],
	extendedExplanation: "PLG works for products with: (1) Quick time-to-value (under 1 hour to first 'aha'). (2) Self-service onboarding. (3) Viral or team-extension hooks (invite teammates). Examples: Notion, Linear, Figma. Doesn't work for: enterprise products with long deployment, regulated products (healthcare, finance), products requiring heavy customization. Indian B2B SaaS PLG adoption growing: 30–50% of new launches in 2026.",
	indiaBenchmarks: [
		"PLG adoption Indian B2B SaaS new launches: 30–50% (2026)",
		"PLG CAC vs sales-led CAC: 30–50% lower typical",
		"PLG free-to-paid conversion: 2–8%",
		"PLG payback period: 6–12 months typical",
		"PLG NRR: usually 105–140% (expansion-friendly model)",
	],
	commonMistakes: [
		"Choosing PLG for products that don't fit (long deployment, regulated).",
		"PLG without paid tier (no monetization path).",
		"PLG with poor onboarding (low activation).",
		"Treating PLG as 'no sales' (PLG-Led Sales is real).",
	],
	relatedTerms: ["pql", "activation", "saas", "self-serve"],
	ctaVariant: "consultation",
});

// ─────────────────────────────────────────────────────────────────
// Section 7 — Email / WhatsApp / Lifecycle
// ─────────────────────────────────────────────────────────────────

add({
	id: "welcome-flow",
	term: "Welcome Flow",
	expansion: "Welcome Flow (Email + WhatsApp)",
	definition: "Welcome Flow is a sequenced series of automated messages sent to new subscribers, customers, or users immediately after opt-in or first purchase. Welcome flows drive 25–40% of email/WhatsApp revenue for D2C brands and have the highest open + conversion rates of any flow.",
	formulaProse: "Welcome Flow is an automated sequence of 3–6 messages sent over 7–14 days post-signup or first-purchase, designed to onboard, build brand familiarity, and drive second purchase.",
	formula: "Welcome Flow = Trigger (signup/purchase) + 3–6 messages over 7–14 days",
	exampleInput: "New subscriber signs up for newsletter",
	exampleOutput: "Day 0: brand intro + 10% off · Day 2: bestsellers · Day 5: founder story · Day 9: discount expiring · Day 14: customer reviews",
	tldr: [
		"Welcome Flow = 3–6 messages over 7–14 days.",
		"Drives 25–40% of D2C lifecycle revenue.",
		"Highest open + conversion rates of any flow.",
	],
	extendedExplanation: "Welcome flow is the most under-invested lifecycle asset for new D2C brands. Most launch with a single welcome email; mature brands run 5–8 message sequences. Optimal cadence: Message 1 immediate (intro + offer), Message 2 day 2 (bestseller showcase), Message 3 day 4 (founder voice), Message 4 day 7 (urgency on discount), Message 5 day 12 (social proof), Message 6 day 21 (re-engage if no purchase). Indian D2C welcome-flow ROI: 8–15× cost over 6 months.",
	indiaBenchmarks: [
		"Indian D2C welcome flow share of email revenue: 25–40%",
		"Welcome flow open rate: 45–70% (highest of any flow)",
		"Welcome flow conversion rate: 5–18% (highest of any flow)",
		"Optimal message count: 5–8 over 14–21 days",
		"WhatsApp welcome flow ROI: 12–20× cost",
	],
	commonMistakes: [
		"Single welcome message (massively under-built).",
		"Discount-heavy without brand-build (price-sensitive customers).",
		"Welcome flow with same offer on every message.",
		"No segmentation (all welcomes treated identically).",
	],
	relatedTerms: ["abandoned-cart-flow", "post-purchase-flow", "win-back-flow", "wabba"],
	ctaVariant: "audit",
});

add({
	id: "abandoned-cart-flow",
	term: "Cart Abandonment Flow",
	expansion: "Abandoned Cart Flow",
	definition: "Abandoned Cart Flow is an automated sequence of messages sent to users who added products to cart but did not complete purchase. Typically 3 messages over 24–72 hours. Recovers 8–25% of abandoned carts in Indian D2C and is the highest-ROI lifecycle program.",
	formulaProse: "Abandoned Cart Flow is an automated sequence of 3 reminder messages sent at 1h, 24h, and 48h after cart abandonment.",
	formula: "Cart Abandonment Flow = Trigger (cart abandon) + 3 messages at 1h, 24h, 48h",
	exampleInput: "User adds ₹1,200 worth to cart, doesn't buy",
	exampleOutput: "1h: 'Forgot something?' · 24h: 'Last chance + 5% off' · 48h: 'Sold-out warning'",
	tldr: [
		"Cart Abandonment Flow = 3 messages at 1h / 24h / 48h.",
		"Recovers 8–25% of abandoned carts in Indian D2C.",
		"Highest ROI lifecycle program (15–30× cost).",
	],
	extendedExplanation: "Cart abandonment is the highest-leverage lifecycle moment. Indian D2C cart abandonment rates: 65–80% (high due to COD friction). Recovery: 8–25% with 3-message flow. Each message escalates: Message 1 friendly reminder (low friction), Message 2 light incentive (5% off, urgency), Message 3 urgency / social proof (running low, others bought). WhatsApp recovery rates 30–50% higher than email in India due to instant attention.",
	indiaBenchmarks: [
		"Indian D2C cart abandonment rate: 65–80%",
		"Cart recovery rate (3-message flow): 8–25%",
		"Recovery flow ROI: 15–30× cost",
		"WhatsApp vs email recovery rate: 30–50% higher",
		"Optimal cadence: 1h / 24h / 48h",
	],
	commonMistakes: [
		"Single message (leaves recovery on the table).",
		"Discount on Message 1 (trains customers to abandon for discount).",
		"Same message + offer on every send.",
		"Not segmenting by cart value (high-AOV needs different approach).",
	],
	relatedTerms: ["welcome-flow", "post-purchase-flow", "wabba", "cart-recovery"],
	ctaVariant: "audit",
});

add({
	id: "post-purchase-flow",
	term: "Post-Purchase Flow",
	expansion: "Post-Purchase Flow",
	definition: "Post-Purchase Flow is the lifecycle messaging sent after a customer's purchase, including order confirmation, shipping updates, delivery confirmation, review request, cross-sell, and replenishment reminders. Drives second purchase and long-term LTV.",
	formulaProse: "Post-Purchase Flow is the multi-message sequence following a purchase: confirmation, shipping, delivery, review, cross-sell, replenishment.",
	formula: "Post-Purchase = Confirmation + Shipping + Delivery + Review (D+4) + Cross-sell (D+10) + Replenishment (D+45)",
	exampleInput: "Indian D2C customer completes purchase",
	exampleOutput: "Confirmation immediate · Shipping day 1 · Delivery day 3 · Review request day 7 · Cross-sell day 14 · Replenishment day 45",
	tldr: [
		"Post-Purchase Flow = confirmation through replenishment.",
		"Drives second-purchase rate + LTV.",
		"Indian D2C 30-day repeat-purchase lift: 15–35% from post-purchase flow.",
	],
	extendedExplanation: "Post-purchase flow is the bridge from first purchase to second. The biggest LTV lever in D2C. Components: (1) Order confirmation (immediate, transactional). (2) Shipping update. (3) Delivery confirmation. (4) Review request day 4–7. (5) Cross-sell day 10–14 (related products). (6) Replenishment reminder day 45–90 (consumables). Indian D2C with post-purchase WhatsApp: 30-day repeat rate +20–40% absolute.",
	indiaBenchmarks: [
		"Post-purchase flow 30-day repeat lift: 15–35% absolute",
		"Review request response rate: 8–18% in India",
		"Cross-sell flow conversion: 4–12%",
		"Replenishment reminder conversion: 15–30% for consumables",
		"WhatsApp post-purchase engagement vs email: 3–5× higher",
	],
	commonMistakes: [
		"Only transactional messages (no review, cross-sell, replenishment).",
		"Discount-heavy cross-sell (commoditizes brand).",
		"Same flow for first vs repeat customers.",
		"No replenishment reminder for consumables.",
	],
	relatedTerms: ["welcome-flow", "abandoned-cart-flow", "win-back-flow", "wabba"],
	ctaVariant: "audit",
});

add({
	id: "win-back-flow",
	term: "Win-Back Flow",
	expansion: "Win-Back Flow",
	definition: "Win-Back Flow is the lifecycle sequence sent to customers who haven't purchased in 60+ days, designed to re-engage and recover lapsed buyers. Typically 3–4 messages over 30–60 days with progressive incentives.",
	formulaProse: "Win-Back Flow is a sequence of 3–4 re-engagement messages sent to customers inactive for 60+ days, with progressive incentives.",
	formula: "Win-Back = Inactive 60d Trigger + 3–4 messages over 30–60 days with progressive offers",
	exampleInput: "Customer hasn't purchased in 75 days",
	exampleOutput: "Day 0: 'We miss you + 10% off' · Day 14: '15% off expires' · Day 30: 'Last chance + bestseller showcase' · Day 60: brand reactivation message",
	tldr: [
		"Win-Back Flow = 3–4 messages over 30–60 days for inactive customers.",
		"Recovers 5–15% of lapsed customers.",
		"Cap attempts; some customers won't return.",
	],
	extendedExplanation: "Win-back is the last-chance lifecycle program. Customers inactive 60+ days are unlikely to return organically; structured win-back recovers 5–15%. Progressive offers: Message 1 light incentive (10% off + brand reminder), Message 2 escalated (15–20% off + urgency), Message 3 final (last chance + product showcase), Message 4 brand-build (without offer). After 4 attempts without response, move to a 'cold list' for less-frequent contact.",
	indiaBenchmarks: [
		"Win-back recovery rate: 5–15%",
		"Optimal message count: 3–4 over 30–60 days",
		"Discount escalation: 10% → 15% → 20%",
		"WhatsApp win-back vs email: 2–3× recovery rate",
		"Cap attempts: 4 messages (avoid harassment)",
	],
	commonMistakes: [
		"Discount-only win-back (trains customers to wait).",
		"Too many attempts (looks desperate).",
		"Same offer on every message.",
		"No segmentation by past purchase value.",
	],
	relatedTerms: ["welcome-flow", "post-purchase-flow", "abandoned-cart-flow", "wabba"],
	ctaVariant: "audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 8 — Analytics / Measurement
// ─────────────────────────────────────────────────────────────────

add({
	id: "ga4",
	term: "GA4",
	expansion: "Google Analytics 4",
	definition: "GA4 is Google Analytics version 4, the current analytics platform replacing Universal Analytics (sunset 2023). GA4 is event-based (not session-based), supports cross-platform tracking, and integrates with BigQuery for raw data export. Required for any modern web analytics setup.",
	formulaProse: "GA4 is event-based analytics: every user interaction is an event with parameters, supporting cross-platform (web + app) tracking and BigQuery export.",
	formula: "GA4 Tracking = Events with parameters → reported across user journeys",
	exampleInput: "Indian D2C site with GA4 + GTM",
	exampleOutput: "Tracks: page_view, view_item, add_to_cart, begin_checkout, purchase events with full parameter detail",
	tldr: [
		"GA4 = Google Analytics 4 (event-based, current platform).",
		"Required for modern web analytics.",
		"Pair with GTM + server-side tagging for accurate attribution.",
	],
	extendedExplanation: "GA4 replaces Universal Analytics (sunset July 2023). Key differences: event-based (not session), supports apps natively, BigQuery export free, less retention by default (14 months unless extended). Setup: GTM container → GA4 config tag → ecommerce events. Indian D2C should pair GA4 with server-side tagging (sGTM) and Meta Conversions API to recover 30–45% of events lost to ad blockers + iOS.",
	indiaBenchmarks: [
		"GA4 + GTM setup time: 1–2 weeks for D2C",
		"GA4 event accuracy without server-side: 60–75%",
		"With server-side tagging: 90–95%",
		"BigQuery data export: free up to 1M events/day",
		"Indian GA4 adoption: 90%+ post-UA sunset",
	],
	commonMistakes: [
		"Treating GA4 like UA (session-based mental model).",
		"No server-side tagging (loses 25–40% events).",
		"Default 14-month retention without extending.",
		"No BigQuery export (loses raw data).",
	],
	relatedTerms: ["server-side-tagging", "capi", "gtm", "attribution"],
	ctaVariant: "audit",
});

add({
	id: "capi",
	term: "CAPI",
	expansion: "Conversions API (Meta)",
	definition: "CAPI is Meta's server-to-server tracking API that sends conversion events directly from server to Meta, bypassing browser-based tracking that's increasingly blocked by iOS, ad blockers, and cookie restrictions. CAPI recovers 25–40% of attribution accuracy lost to client-side tracking gaps.",
	formulaProse: "Conversions API is Meta's server-side event-tracking endpoint. Server sends conversion events directly to Meta, complementing or replacing browser Pixel.",
	formula: "CAPI Event = Server → Meta API (no browser dependency)",
	exampleInput: "Indian D2C with iOS users + ad blockers",
	exampleOutput: "CAPI recovers 25–40% of events lost client-side",
	tldr: [
		"CAPI = Meta's server-side tracking API.",
		"Recovers 25–40% of events lost to iOS / ad blockers.",
		"EMQ (Event Match Quality) score above 8.0 is the target.",
	],
	extendedExplanation: "CAPI is essential for Indian D2C in 2026. iOS 14+ + ad blockers block 25–40% of Meta Pixel events. CAPI sends events server-side, bypassing browser entirely. Setup: GTM Server in Cloud Run, Meta CAPI tag, hashed PII (email, phone, fbp, fbc, IP, user agent). EMQ (Event Match Quality) score 8.0+ is the target — Meta's algorithm degrades optimization without high EMQ. Pair with Pixel for deduplication.",
	indiaBenchmarks: [
		"CAPI event recovery: 25–40% above Pixel-only",
		"Target EMQ score: 8.0+",
		"Indian D2C CAPI adoption: 50–70% of mature brands",
		"CAPI setup cost: ₹50K-₹2L (one-time + tooling)",
		"Meta optimization improvement post-CAPI: 15–35% CAC reduction",
	],
	commonMistakes: [
		"Pixel-only without CAPI (loses 25–40% events).",
		"CAPI without proper deduplication (double-counts events).",
		"Low EMQ score (Meta degrades optimization).",
		"Not hashing PII (privacy violation).",
	],
	relatedTerms: ["ga4", "server-side-tagging", "pixel", "emq"],
	ctaVariant: "audit",
});

add({
	id: "server-side-tagging",
	term: "Server-Side Tagging",
	expansion: "Server-Side Tagging (sGTM)",
	definition: "Server-Side Tagging (sGTM) routes all marketing tracking through a server you control before sending to ad platforms (Meta, Google, etc.). It dramatically improves event accuracy by bypassing browser limits, allows hashed PII transmission for ad-platform optimization, and gives full control over tracking data.",
	formulaProse: "Server-Side Tagging routes tracking events through a customer-controlled server (typically GTM Server in Cloud Run) before sending to ad platforms, recovering events lost to browser limitations.",
	formula: "Browser Event → sGTM Server → Multiple Ad Platforms (with full PII for matching)",
	exampleInput: "Indian D2C with iOS user buying ₹1,500 worth",
	exampleOutput: "sGTM captures + sends to Meta CAPI + Google + GA4 with full match quality",
	tldr: [
		"sGTM = Server-Side Tagging via GTM Server.",
		"Recovers 30–45% of events lost client-side.",
		"Setup cost: ₹50k–₹2L; ROI: 25–40% CAC reduction.",
	],
	extendedExplanation: "Server-side tagging is the modern standard for accurate attribution in a privacy-restricted world. iOS 14+, ad blockers, third-party cookie deprecation all hit browser tracking. sGTM moves tracking server-side, where you have control and can fully hash + send PII to ad platforms. Setup: GTM Server container → deploy to Google Cloud Run → connect to GA4 + Meta CAPI + Google Ads. One-time cost ₹50k–₹2L; payback typically within 1–3 months via CAC reduction.",
	indiaBenchmarks: [
		"sGTM event recovery: 30–45% above client-side only",
		"Indian D2C adoption: 30–50% of mid-market+",
		"Setup cost: ₹50k–₹2L (Cloud Run + tooling + integration)",
		"Monthly Cloud Run cost: ₹3,000–₹15,000",
		"CAC reduction post-sGTM: 25–40% typical",
	],
	commonMistakes: [
		"Cheap free sGTM (low reliability, hits limits).",
		"sGTM without proper deduplication.",
		"Server-side only without browser fallback.",
		"Not implementing for both Meta and Google (single platform leaves gaps).",
	],
	relatedTerms: ["capi", "ga4", "gtm", "attribution"],
	ctaVariant: "audit",
});

// ─────────────────────────────────────────────────────────────────
// Section 9 — Content / Strategy
// ─────────────────────────────────────────────────────────────────

add({
	id: "intent",
	term: "Search Intent",
	expansion: "Search Intent",
	definition: "Search Intent is the underlying goal a user has when typing a query — informational (learn), navigational (find a specific site), transactional (buy or take action), or commercial (compare before buying). Match content to intent for ranking and conversion.",
	formulaProse: "Search Intent classifies queries by user goal: informational, navigational, transactional, or commercial-investigation.",
	formula: "Intent = Informational | Navigational | Transactional | Commercial-Investigation",
	exampleInput: "Query: 'best email tool for D2C'",
	exampleOutput: "Commercial-Investigation intent (compare before buying)",
	tldr: [
		"Intent = user's underlying goal (info / nav / transact / commercial).",
		"Match content type to intent: blog for info, listing for commercial, etc.",
		"Mismatched intent = poor ranking + low conversion.",
	],
	extendedExplanation: "Search intent is the most-overlooked SEO signal. Many sites publish blog posts targeting commercial-intent KWs (e.g., 'best CRM') — they rank poorly because Google expects a comparison page, not a how-to. Match content type to intent: 'how to' / 'what is' = informational (blog/glossary). 'best/top/vs/alternatives' = commercial (listicle/comparison). 'buy/pricing/order' = transactional (product/landing). 'brand name' = navigational (homepage).",
	indiaBenchmarks: [
		"Indian SERP intent distribution: 50% informational, 25% commercial, 15% transactional, 10% navigational",
		"Intent match impact on ranking: 30–60% lift",
		"Intent match impact on conversion: 2–5× difference",
		"Mismatched intent dwell time: <30 sec (high bounce)",
		"Tools to classify intent: Ahrefs SERP overview, Semrush Intent labels",
	],
	commonMistakes: [
		"Same content for different intents (long-form blog for commercial KW).",
		"Not classifying intent before content brief.",
		"Treating intent as static (some KWs have shifting intent).",
		"Optimizing only for high-volume KWs without considering intent fit.",
	],
	relatedTerms: ["keyword-difficulty", "search-volume", "topic-cluster", "buyer-journey"],
	ctaVariant: "audit",
});

add({
	id: "buyer-journey",
	term: "Buyer Journey",
	expansion: "Buyer Journey (Awareness → Consideration → Decision)",
	definition: "Buyer Journey is the path a potential customer takes from problem awareness through consideration to purchase decision. Each stage requires different content: awareness (educational), consideration (comparative), decision (proof + offer). Mapping content to journey stage drives conversion.",
	formulaProse: "Buyer Journey is a 3-stage model: Awareness (problem recognition) → Consideration (solution evaluation) → Decision (vendor selection). Each stage requires distinct content.",
	formula: "Buyer Journey = Awareness → Consideration → Decision (each ~40% / 35% / 25% of content effort)",
	exampleInput: "Indian B2B SaaS GTM building content engine",
	exampleOutput: "Awareness: 'How to reduce CAC' · Consideration: 'CAC tracking tools comparison' · Decision: 'Frameleads vs Competitor pricing'",
	tldr: [
		"Buyer Journey = Awareness → Consideration → Decision.",
		"Each stage needs different content type.",
		"Most brands over-invest in Awareness, under-invest in Decision.",
	],
	extendedExplanation: "Buyer Journey mapping aligns content with where prospects are in their thinking. Awareness stage (problem recognition): educational content, glossary, frameworks. Consideration stage (solution evaluation): comparison guides, alternatives pages, case studies. Decision stage (vendor selection): pricing pages, demo CTAs, free audits, ROI calculators. Indian B2B SaaS commonly over-invests in awareness blog content (Tier 6 how-to) and under-invests in decision content (Tier 9 comparisons, Tier 13 pricing).",
	indiaBenchmarks: [
		"Recommended content investment split: 40% Awareness / 35% Consideration / 25% Decision",
		"Conversion rate by stage content: Awareness 0.5–2% / Consideration 3–8% / Decision 8–25%",
		"Indian B2B SaaS typical imbalance: 60% Awareness / 25% Consideration / 15% Decision",
		"Optimal rebalance: shift to spec above by 12 months",
		"Decision content ROI vs Awareness: 3–8× per page",
	],
	commonMistakes: [
		"Over-investing in Awareness (blog only).",
		"No Consideration-stage content (compares, alternatives).",
		"No Decision-stage content (pricing, demo).",
		"Mismatched intent + journey stage (informational page for decision query).",
	],
	relatedTerms: ["intent", "icp", "topic-cluster", "funnel"],
	ctaVariant: "consultation",
});

add({
	id: "topical-authority",
	term: "Topical Authority",
	expansion: "Topical Authority",
	definition: "Topical Authority is Google's signal of how comprehensively a site covers a topic. Built via dense pillar-cluster content, internal linking, and entity coverage. Topical Authority lifts rankings across the entire topic, not just individual pages.",
	formulaProse: "Topical Authority equals comprehensive coverage of a topic via pillar pages, cluster pages, internal linking, and entity recognition.",
	formula: "Topical Authority = Pillar × Σ(Cluster Pages × Internal Links × Entity Coverage)",
	exampleInput: "Frameleads' coverage of 'D2C marketing'",
	exampleOutput: "Topical authority for 'D2C marketing' from 30+ interconnected pages",
	tldr: [
		"Topical Authority = comprehensive topic coverage signal.",
		"Built via pillar + cluster + internal links + entity coverage.",
		"Lifts rankings across the topic, not just individual pages.",
	],
	extendedExplanation: "Topical Authority became Google's dominant ranking factor in 2024–2026 through E-E-A-T evolution. Single pages no longer rank in vacuum — Google assesses 'does this site own this topic?' Implementation: 1 pillar page + 20–80 cluster pages + bidirectional internal linking + entity grounding + named author. Indian B2B SaaS achieving Topical Authority on 1–3 topics typically dominates SERP for those topics; without it, individual pages compete one-by-one.",
	indiaBenchmarks: [
		"Pillar + cluster pages for Topical Authority: 20–80",
		"Time to compound: 6–12 months",
		"Ranking lift on cluster pages from authority: 30–80%",
		"Indian B2B SaaS achieving Topical Authority: <20% of brands in 2026",
		"ROI vs page-by-page approach: 5–15× over 12 months",
	],
	commonMistakes: [
		"Pillar without enough cluster pages.",
		"Cluster without bidirectional linking to pillar.",
		"Single isolated topic (need 1–3 deep topics, not 10 shallow).",
		"No entity grounding or named author.",
	],
	relatedTerms: ["topic-cluster", "pillar-page", "internal-links", "schema-markup"],
	ctaVariant: "consultation",
});

fs.writeFileSync(OUT, JSON.stringify(entries, null, 2));
console.log(`Wrote ${entries.length} glossary entries → ${OUT}`);
