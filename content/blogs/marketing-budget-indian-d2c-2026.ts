import type { BlogPost } from "@/lib/data/blogs";

export const post: BlogPost = {
	slug: "marketing-budget-indian-d2c-2026",
	title: "What's a Realistic Marketing Budget for an Indian D2C Brand in 2026?",
	description:
		"Honest budget bands by D2C stage — from pre-launch to ₹10Cr+ ARR. Channel-mix splits, CAC payback windows, and what to spend on what.",
	authorId: "ajsal-abbas",
	datePublished: "2026-06-05",
	type: "cost-in-city",
	category: "D2C",
	primaryKeyword: "d2c marketing budget india",
	cluster: "D2C Marketing",
	tldr: [
		"Pre-PMF D2C should cap monthly marketing at 30–50% of revenue and 100% of gross margin.",
		"Scaling D2C (₹1Cr–₹10Cr ARR) typically runs 25–35% of revenue on marketing, split 60% paid / 25% organic / 15% lifecycle.",
		"CAC payback window for healthy Indian D2C: <90 days. Beyond 120 days, the cash burn breaks the model.",
		"Don't budget against an industry-average — budget against your CAC × repeat-purchase math.",
	],
	readTime: "10 min",
	body: [
		{
			type: "p",
			text: "Every D2C founder I talk to asks the same question in the first 15 minutes: **what should I be spending on marketing?**",
		},
		{
			type: "p",
			text: "The honest answer is: the wrong question. The right question is *what's my CAC payback at the spend level required to hit my growth target?* If the math works, you can spend as much as your working capital tolerates. If it doesn't, no industry-average budget will save you.",
		},
		{
			type: "p",
			text: "But you came here for a number, so here's the framework — by stage, with real bands from the Frameleads portfolio of Indian D2C brands.",
		},
		{
			type: "callout",
			tone: "tldr",
			text: "Budget is a derivative of unit economics, not a cause. If CAC × payback × your repeat-purchase rate doesn't work, increasing budget makes the problem worse, not better. Always solve the unit economics first.",
		},
		{
			type: "h2",
			text: "Stage 0 — Pre-PMF (₹0–₹1Cr ARR)",
		},
		{
			type: "stat-bar",
			stats: [
				{ label: "Monthly marketing", value: "₹2L–₹10L" },
				{ label: "% of revenue", value: "30–50%" },
				{ label: "Channels", value: "1–2" },
				{ label: "Target CAC payback", value: "<60 days" },
			],
		},
		{
			type: "p",
			text: "At this stage, **don't optimize for ROAS — optimize for learning velocity.** Your goal is to find what works, not to hit a margin target. The 30–50% of revenue band sounds high; it is, deliberately. You're paying for signal, not margin.",
		},
		{
			type: "p",
			text: "Channel mix at pre-PMF:",
		},
		{
			type: "ul",
			items: [
				"**80% Meta** (Facebook + Instagram). Highest signal velocity, lowest entry cost, best creative-feedback loop.",
				"**15% Google Search** for brand + category-defining keywords. Don't chase generic terms yet.",
				"**5% organic/content** — start the SEO + content engine, but don't expect ROI in this stage.",
			],
		},
		{
			type: "p",
			text: "Most pre-PMF D2C brands burn this stage chasing 'good ROAS' on Meta and never escape — they cap creative testing at 4-5 variants and discover one winning angle that works for 6 months, then plateaus. Spend the signal money. Run 20+ creative variants the first month. The ones that don't work tell you what your customer doesn't care about, which is at least as valuable.",
		},
		{
			type: "h2",
			text: "Stage 1 — Scaling (₹1Cr–₹10Cr ARR)",
		},
		{
			type: "stat-bar",
			stats: [
				{ label: "Monthly marketing", value: "₹15L–₹2Cr" },
				{ label: "% of revenue", value: "25–35%" },
				{ label: "Channels", value: "3–5" },
				{ label: "Target CAC payback", value: "<90 days" },
			],
		},
		{
			type: "p",
			text: "Once you've validated the product (LTV/CAC > 2.5, repeat-purchase rate >15% in 90 days), the budget shape changes. You're no longer paying for signal — you're paying for scale.",
		},
		{
			type: "p",
			text: "Channel split:",
		},
		{
			type: "ol",
			items: [
				"**60% paid (Meta + Google + emerging channels).** Meta 35%, Google Search + PMax 20%, YouTube/Shopping/TikTok 5%.",
				"**25% organic.** SEO (content + technical), influencer partnerships, owned community. This is where compounding starts.",
				"**15% lifecycle (email, WhatsApp, SMS, retention).** The cheapest 1% revenue uplift in your business; almost no brand spends enough here.",
			],
		},
		{
			type: "callout",
			tone: "info",
			title: "The retention math most D2C founders miss",
			text: "If your 90-day repeat-purchase rate moves from 18% to 25%, your effective CAC drops by ~30% even if acquisition spend stays flat. Budget for the lifecycle work *before* expanding paid spend at scale.",
		},
		{
			type: "h2",
			text: "Stage 2 — Scaled (₹10Cr–₹100Cr ARR)",
		},
		{
			type: "stat-bar",
			stats: [
				{ label: "Monthly marketing", value: "₹2Cr–₹15Cr" },
				{ label: "% of revenue", value: "20–28%" },
				{ label: "Channels", value: "6–10" },
				{ label: "Target CAC payback", value: "<120 days" },
			],
		},
		{
			type: "p",
			text: "At scale, the marketing budget shifts from *acquisition-led* to *brand + retention-led*. The math: Meta + Google saturate at some spend level (typically ₹3–6Cr/month for a single-category D2C). Above that, marginal ROAS collapses unless you add new channels or expand the brand.",
		},
		{
			type: "p",
			text: "Channel split at scale:",
		},
		{
			type: "ul",
			items: [
				"**45% paid acquisition** across Meta, Google, YouTube, programmatic, OTT, podcast — diversified to avoid platform dependence.",
				"**25% brand + organic** — content marketing, PR, influencer partnerships, community. Compounding becomes the dominant growth driver.",
				"**20% lifecycle + retention** — email, WhatsApp, SMS, push, loyalty programs, win-back flows.",
				"**10% experiments + new channels** — CTV, performance creator commerce, new geographies, B2B/wholesale, retail integration.",
			],
		},
		{
			type: "h2",
			text: "What kills D2C marketing budgets",
		},
		{
			type: "h3",
			text: "Mistake 1 — Spending against revenue, not gross margin",
		},
		{
			type: "p",
			text: "If your gross margin is 40% and you're spending 35% of revenue on marketing, you're spending 87% of gross margin to acquire. That leaves nothing for ops, salaries, R&D, or profit. **Budget against gross margin, not topline.** Healthy bands: 50–70% of gross margin to marketing for scaling brands, 35–50% for scaled.",
		},
		{
			type: "h3",
			text: "Mistake 2 — Treating Meta ROAS as ground truth",
		},
		{
			type: "p",
			text: "Post-iOS-14, Meta's in-platform ROAS is biased upward by 30–60% for iOS-heavy audiences. If your Meta dashboard says 4x ROAS, your *real* blended ROAS is probably 2.5–3x. Make budget decisions on a triangulated source — server-side attribution + GA4 + post-purchase survey, weighted to last-click ≠ last-view.",
		},
		{
			type: "h3",
			text: "Mistake 3 — Underspending on creative",
		},
		{
			type: "p",
			text: "Most D2C brands spend <5% of paid budget on creative production. The winners spend 15–25%. Creative is the highest-leverage variable in 2026 — Meta's ASC+ and Google's PMax both reward creative variety, and ad fatigue cycles are now measured in 2–4 weeks. If your creative budget can't sustain 30+ new variants per month, your media budget is over-leveraged.",
		},
		{
			type: "h2",
			text: "The budget calculation you should actually run",
		},
		{
			type: "p",
			text: "Skip industry averages. Compute it this way:",
		},
		{
			type: "ol",
			items: [
				"**Target customers/month** = your revenue goal ÷ AOV.",
				"**Budget per customer** = LTV × your target LTV/CAC ratio. Healthy D2C target: LTV/CAC ≥ 3.",
				"**Acquisition spend** = target customers × budget per customer.",
				"**Total marketing spend** = acquisition spend ÷ 0.6 (acquisition is typically 60% of total marketing).",
				"**Sanity check** = total marketing ÷ revenue. Should land in stage-appropriate bands above.",
			],
		},
		{
			type: "p",
			text: "Run this calc with our [LTV/CAC ratio calculator](/tools/ltv-cac-ratio-calculator) and our [CAC payback calculator](/tools/cac-payback-calculator) before signing any agency retainer. If the math doesn't work at the spend level required for your growth target, the answer is *not* to lower the agency fee — it's to fix the unit economics first.",
		},
		{
			type: "h2",
			text: "Where Frameleads helps",
		},
		{
			type: "p",
			text: "We run [performance marketing for Indian D2C brands](/performance-marketing) across all three stages above. The free 30-min audit produces a stage-specific budget recommendation against your current CAC, LTV, and growth targets — no slides, no retainer pitch unless you ask for one.",
		},
	],
	faqs: [
		{
			question: "What percentage of revenue should an Indian D2C brand spend on marketing?",
			answer:
				"Pre-PMF (₹0–₹1Cr ARR): 30–50% of revenue. Scaling (₹1–10Cr ARR): 25–35%. Scaled (₹10–100Cr ARR): 20–28%. These bands are sanity checks, not targets — budget against your CAC × LTV math first.",
		},
		{
			question: "What's a healthy CAC payback for D2C in India?",
			answer:
				"Sub-90 days for scaling brands, sub-120 days for scaled. Anything beyond that breaks the working-capital model unless you have strong external financing.",
		},
		{
			question: "How much should I spend on creative production?",
			answer:
				"15–25% of paid media budget. Most D2C brands spend under 5% and wonder why their ad accounts fatigue every 2 weeks. Creative supply is the highest-leverage variable in 2026.",
		},
		{
			question: "Should I spend more on Meta or Google?",
			answer:
				"Pre-PMF and scaling: 60–80% Meta, 20–35% Google. Scaled: 35–45% Meta, 25–35% Google + the rest diversified. Meta is better for discovery and creative learning; Google is better for intent capture and retention re-acquisition.",
		},
		{
			question: "How do I know if I'm overspending on marketing?",
			answer:
				"Three signs: (1) marketing spend exceeds 70% of gross margin; (2) CAC payback is over 120 days for scaling brands; (3) your blended LTV/CAC ratio is under 2.5. If two of three are true, you're overspending — and the fix is unit-economics improvement, not budget cuts.",
		},
		{
			question: "Should I budget for influencer/creator marketing separately?",
			answer:
				"Yes — treat creator marketing as a separate line item, typically 5–12% of total marketing budget for D2C. Mix should be 60% performance creators (paid + CPS deals), 30% mid-tier brand creators, 10% experimental. Don't blend creator spend into Meta/Google reporting — it has fundamentally different attribution dynamics.",
		},
	],
	references: [
		{
			label: "IBEF — India D2C industry report",
			href: "https://www.ibef.org/industry/retail-india",
			publisher: "IBEF",
			note: "Market sizing + growth rates referenced for stage bands.",
		},
		{
			label: "Statista — India E-commerce market data",
			href: "https://www.statista.com/markets/413/topic/463/e-commerce/",
			publisher: "Statista",
		},
		{
			label: "Consumer Protection (E-Commerce) Rules, 2020",
			href: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce%20rules.pdf",
			publisher: "Ministry of Consumer Affairs",
		},
	],
	relatedSlugs: [
		"best-performance-marketing-agency-bangalore-2026",
		"seo-vs-performance-marketing-indian-d2c",
		"10-questions-to-ask-performance-marketing-agency-india",
	],
};
