import type { BlogPost } from "@/lib/data/blogs";

export const post: BlogPost = {
	slug: "email-automation-flows-d2c-2026",
	title: "Email Automation Flows for Indian D2C — The 2026 Operator's Reference",
	description:
		"The 4 core email lifecycle flows every Indian D2C brand should ship — welcome, cart abandonment, post-purchase, win-back. Klaviyo + DPDP + segment strategy.",
	authorId: "ajsal-abbas",
	datePublished: "2026-06-08",
	type: "definitive-guide",
	category: "Lifecycle & Retention",
	categorySlug: "lifecycle-and-retention",
	primaryKeyword: "email automation flows d2c india 2026",
	cluster: "Lifecycle & Retention",
	tldr: [
		"4 core flows for Indian D2C: welcome (5-7 emails), cart abandonment (3-5 emails), post-purchase (5-8 emails), win-back (4-6 emails). All 4 should ship in Q1 of any lifecycle engagement.",
		"Klaviyo is the default tooling for D2C — strongest Shopify integration + segmentation + deliverability. Mailchimp under-powered for D2C.",
		"DPDP-compliant opt-in mandatory in India — explicit checkbox at checkout, audit logs, right-to-unsubscribe at every send.",
		"Typical revenue lift from 4-core-flow program: 15-30% within 90 days; compounds 2-3 years post-launch.",
		"Segmentation strategy: by purchase recency × frequency × AOV — not by demographic. Behavioural segments outperform demographic 3-5x.",
	],
	readTime: "9 min",
	body: [
		{
			type: "p",
			text: "Email automation is the cheapest 1% revenue uplift in most D2C businesses — payback typically under 30 days, compounds for years. This is the Frameleads operator reference for the 4 core flows every Indian D2C brand should ship.",
		},
		{
			type: "p",
			text: "Anchored to the [Lifecycle & Retention pillar](/blogs/pillars/lifecycle-and-retention).",
		},
		{
			type: "h2",
			text: "The 4 core flows — in priority order",
		},
		{
			type: "h3",
			text: "1. Welcome flow (5-7 emails over 2-3 weeks)",
		},
		{
			type: "p",
			text: "Triggered on email opt-in (any source). Typical sequence: Email 1 (immediate) — welcome + brand story + discount code. Email 2 (day 2) — best-sellers + social proof. Email 3 (day 4) — founder story + product education. Email 4 (day 7) — customer reviews + UGC. Email 5 (day 10) — discount reminder if not converted. Email 6 (day 14) — final offer expiration. Email 7 (day 21) — soft re-engagement if still cold.",
		},
		{
			type: "p",
			text: "Welcome flow typically accounts for 30-50% of total lifecycle revenue for D2C brands. First-impression + first-purchase nudge. Worth the most attention in initial setup.",
		},
		{
			type: "h3",
			text: "2. Cart abandonment flow (3-5 emails)",
		},
		{
			type: "p",
			text: "Triggered on cart abandoned 1-4 hours ago. Email 1 (1 hour) — gentle reminder + cart link. Email 2 (24 hours) — social proof + cart link + objection handling. Email 3 (3 days) — one-time discount or free shipping offer. Optional Email 4 (7 days) — final offer expiration. Optional Email 5 (14 days) — soft re-engagement / browse-abandonment fallback.",
		},
		{
			type: "p",
			text: "Conversion rates 8-25% for Indian D2C with 4-email sequences. Pair with WhatsApp cart-abandonment (Email 1 + WhatsApp Message 1 at 1 hour) for compound effect — typically lifts cart-recovery rates another 10-15%.",
		},
		{
			type: "h3",
			text: "3. Post-purchase flow (5-8 emails over 6-8 weeks)",
		},
		{
			type: "p",
			text: "Triggered on order placed. Sequence: Email 1 (immediate) — order confirmation. Email 2 (shipped) — tracking + delivery ETA. Email 3 (delivered) — 'how it works' product education. Email 4 (3 days post-delivery) — review request. Email 5 (1 week post-delivery) — cross-sell complementary products. Email 6 (3 weeks) — replenishment reminder (if applicable). Email 7 (4-6 weeks) — UGC request + community invitation. Email 8 (8 weeks) — repeat-purchase trigger with personalised discount.",
		},
		{
			type: "h3",
			text: "4. Win-back flow (4-6 emails over 2 months)",
		},
		{
			type: "p",
			text: "Triggered on lapsed customer (60-120 days no purchase). Email 1 — 'we miss you' soft re-engagement + new product launches. Email 2 (week later) — personalised offer based on past purchase category. Email 3 (week later) — testimonial + social proof. Email 4 (week later) — final offer with expiration. Optional Email 5 (1 month later) — graceful exit + permission to unsubscribe.",
		},
		{
			type: "h2",
			text: "Segmentation strategy",
		},
		{
			type: "p",
			text: "Behavioural segments outperform demographic segments 3-5x. The 5 essential D2C segments:",
		},
		{
			type: "ol",
			items: [
				"**New leads (no purchase)** — receive welcome flow + soft nurture",
				"**First-time buyers** — receive full post-purchase + cross-sell sequences",
				"**Repeat buyers (2-5 purchases)** — receive replenishment + loyalty nurture",
				"**VIP buyers (6+ purchases or top 20% AOV)** — receive early-access launches + premium service",
				"**Lapsed (60+ days no purchase)** — receive win-back flow with offer escalation",
			],
		},
		{
			type: "h2",
			text: "Tooling — Klaviyo is the D2C default",
		},
		{
			type: "ul",
			items: [
				"**Klaviyo** — D2C default. Best Shopify integration, strongest segmentation, best D2C deliverability. ~$20-1,500/mo depending on list size.",
				"**Customer.io** — best for SaaS + cross-channel orchestration. Stronger API ergonomics; weaker D2C templates.",
				"**Mailchimp** — under-powered for D2C lifecycle. Use only for small-business newsletters.",
				"**Sendinblue / Brevo** — budget-tier with reasonable lifecycle features. ~$25-150/mo. OK for sub-₹50L revenue brands.",
				"**Wati / Interakt** (WhatsApp BSPs) — pair with Klaviyo for omni-channel lifecycle. WhatsApp for time-sensitive triggers, email for everything else.",
			],
		},
		{
			type: "h2",
			text: "DPDP compliance for email in India",
		},
		{
			type: "p",
			text: "Mandatory under DPDP Act 2023: explicit opt-in (checkbox unchecked by default at checkout), named purpose for collection ('promotional offers + product updates'), right-to-unsubscribe at every send, audit logs for consent decisions. Klaviyo + Customer.io handle most of this natively; verify before launching lifecycle programs.",
		},
		{
			type: "p",
			text: "Frameleads ships the 4-core-flow Klaviyo build as a standard 90-day engagement at [Email & Marketing Automation Scale tier](/email-marketing-and-automation-services). Read the [Lifecycle & Retention pillar](/blogs/pillars/lifecycle-and-retention) for the broader framework.",
		},
	],
	faqs: [
		{
			question: "How long does it take to ship all 4 core flows?",
			answer:
				"60-90 days for a typical Indian D2C brand. Week 1-2: Klaviyo setup + Shopify integration + DPDP consent layer. Week 3-6: welcome + cart-abandonment flows live. Week 7-10: post-purchase + win-back flows live. Week 11-12: segmentation refinement + reporting setup.",
		},
		{
			question: "What's the typical revenue lift from a 4-core-flow program?",
			answer:
				"15-30% revenue lift within 90 days for Indian D2C. Welcome flow contributes 30-50% of lifecycle revenue. Cart-abandonment contributes 20-35%. Post-purchase + win-back contribute the rest. Compounds 2-3 years post-launch with minimal incremental work.",
		},
		{
			question: "Should I use Klaviyo or Mailchimp for Indian D2C?",
			answer:
				"Klaviyo. Stronger Shopify integration, better segmentation, better D2C deliverability, more native templates. Mailchimp's strength is small-business newsletters — under-powered for D2C lifecycle work.",
		},
		{
			question: "How do I get DPDP-compliant opt-in?",
			answer:
				"Checkbox at checkout, UNCHECKED by default, with explicit consent language: 'Yes, send me promotional offers and product updates via email.' Audit log the consent decision. Klaviyo + Customer.io capture this natively when configured properly.",
		},
		{
			question: "Does Frameleads work on lifecycle without paid acquisition engagements?",
			answer:
				"Yes — lifecycle-only engagements available at all tiers. The highest ROI compound effect is lifecycle + paid acquisition under one operator team (Frameleads Growth System™ Multiply phase), but standalone lifecycle programs work for brands with existing paid acquisition partners.",
		},
	],
	references: [
		{
			label: "DPDP Act 2023 — Digital Personal Data Protection",
			href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
			publisher: "Ministry of Electronics & IT, Government of India",
		},
		{
			label: "Klaviyo — Shopify integration documentation",
			href: "https://help.klaviyo.com/hc/en-us/articles/115005078647",
			publisher: "Klaviyo",
		},
		{
			label: "Customer.io documentation",
			href: "https://customer.io/docs/",
			publisher: "Customer.io",
		},
		{
			label: "Shopify — email marketing best practices",
			href: "https://www.shopify.com/blog/email-marketing",
			publisher: "Shopify",
		},
	],
	serviceRefs: ["email-marketing", "performance-marketing"],
	industryRefs: ["d2c"],
	pillarSlug: "lifecycle-and-retention",
	relatedSlugs: ["whatsapp-business-api-india-lifecycle"],
};
