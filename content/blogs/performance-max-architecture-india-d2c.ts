import type { BlogPost } from "@/lib/data/blogs";

export const post: BlogPost = {
	slug: "performance-max-architecture-india-d2c",
	title: "Performance Max Architecture for Indian D2C — 2026 Operator's Guide",
	description:
		"How to structure Google Performance Max campaigns for Indian D2C brands — asset group design, audience signals, exclusions, budget pacing, reporting.",
	authorId: "ajsal-abbas",
	datePublished: "2026-06-08",
	type: "definitive-guide",
	category: "Performance Marketing",
	categorySlug: "performance-marketing",
	primaryKeyword: "performance max india d2c 2026",
	cluster: "Performance Marketing",
	tldr: [
		"PMax is Google's most powerful D2C surface in 2026 — but only with disciplined asset-group structure + audience signals + exclusions.",
		"Asset-group structure: separate groups per product category (or hero SKU bundle). Mixing categories dilutes ML optimisation.",
		"Audience signals: feed Google your best-converting customer audiences (Shopify Audiences, GA4 first-party, customer-list audiences). Signals are hints, not targeting — but they speed up learning by weeks.",
		"Exclusions: brand keyword negatives (cannibalises Search), low-margin SKUs, placement exclusions for low-quality content sites.",
		"Reporting: use Search Terms Insights + Asset Reports + Audience Insights — the only ways to inspect PMax's black-box optimisation.",
	],
	readTime: "10 min",
	body: [
		{
			type: "p",
			text: "Performance Max replaced Smart Shopping + Discovery + most Display campaign types in 2022-2023, and by 2026 it's the default Google surface for Indian D2C brands. The catch: PMax is a black-box ML optimiser, which means structure + audience signals + exclusions matter more than ever.",
		},
		{
			type: "p",
			text: "This is the Frameleads PMax architecture playbook for Indian D2C as of mid-2026. Anchored to the [Performance Marketing Operations pillar](/blogs/pillars/performance-marketing-operations).",
		},
		{
			type: "h2",
			text: "PMax structure that actually works for Indian D2C",
		},
		{
			type: "ol",
			items: [
				"**One asset group per product category** (or per hero SKU bundle). Mixing categories (e.g. apparel + accessories) confuses the ML optimiser and dilutes performance.",
				"**Separate campaigns by funnel stage** — Brand-defense (branded queries only), Prospecting (new customer acquisition), Retargeting (existing audience re-engagement).",
				"**Use Final URL Expansion sparingly.** Off by default for D2C; on for content-heavy sites where Google can find topical depth.",
				"**Set tROAS / tCPA targets aligned with Shopify-actual margins**, not in-platform-reported ROAS. PMax's reported ROAS over-reports by 20-40% — adjust targets accordingly.",
				"**Lock customer-list audiences to Customer Acquisition Goal** — tells PMax to prioritise new customers over existing ones. Critical for D2C where existing-customer re-acquisition kills incremental CAC.",
			],
		},
		{
			type: "h2",
			text: "Asset signals — what to feed PMax",
		},
		{
			type: "ul",
			items: [
				"**Audience signals:** customer-match lists, Shopify Audiences, GA4 first-party audiences (purchasers / high-AOV), Lookalike-equivalents.",
				"**Creative assets:** 15-30 images, 5-10 videos (vertical + horizontal), 5-10 headlines, 5-10 descriptions per asset group. PMax tests combinations.",
				"**Product feed:** clean Merchant Center feed with rich attributes (color, size, gender, age_group, custom_label_0-4). Custom labels enable inventory segmentation.",
				"**Conversion signals:** Enhanced Conversions + Offline Conversions (purchase events from CRM/Shopify with order value). Without these, PMax optimises on signal-loss inflated data.",
				"**Final URLs:** product page URLs (not category pages) so PMax can attribute conversions to specific products.",
			],
		},
		{
			type: "h2",
			text: "Exclusions that protect margin",
		},
		{
			type: "ol",
			items: [
				"**Brand keyword negatives at the account level** — prevents PMax from cannibalising your branded Search campaigns. Add `[your brand name]`, `[brand misspellings]`, `[brand + variant]` as account-level negatives.",
				"**Low-margin SKU exclusions** via custom_label_0 in the feed — flag products with margin <25% and exclude from PMax (run them via Standard Shopping instead).",
				"**Placement exclusions** for YouTube + Display surfaces — exclude obvious low-quality categories (made-for-kids content, low-quality content sites).",
				"**Geographic exclusions** — exclude geos you don't ship to, and exclude geos with consistently poor CAC (typically Tier-3 / Tier-4 cities for premium D2C).",
				"**Demographic exclusions** rarely — PMax restricts demographic exclusions, and over-exclusion hurts more than it helps.",
			],
		},
		{
			type: "h2",
			text: "Reporting — inspecting the black box",
		},
		{
			type: "ul",
			items: [
				"**Search Terms Insights** — shows search themes PMax matched against. Mine this weekly; convert high-performers into Standard Search campaigns where you can control bids precisely.",
				"**Asset Reports** — tells you which creative assets PMax is showing most + their performance. Pause low-performers; ship more variants of high-performers.",
				"**Audience Insights** — shows which audience segments PMax found valuable. Use to inform Lookalike + customer-list audience expansion.",
				"**Brand-defense overlap report** — quarterly check on whether PMax is cannibalising branded Search (despite account-level negatives, some leakage occurs).",
				"**Shopify-actual reconciliation monthly** — compare PMax-reported conversions vs Shopify-actual orders. Spread above 30% signals attribution issues or modelled-conversion inflation.",
			],
		},
		{
			type: "h2",
			text: "Common PMax mistakes in Indian D2C",
		},
		{
			type: "ul",
			items: [
				"Running PMax without Enhanced Conversions wired — under-attributes 30-60% of conversions.",
				"Setting tROAS targets based on PMax-reported ROAS instead of Shopify-actual.",
				"Mixing product categories in one asset group (apparel + accessories + footwear in one group).",
				"Not excluding brand keywords at account level (PMax cannibalises Search).",
				"Setting Customer Acquisition Goal to OFF (PMax over-spends on existing customers, kills incremental CAC).",
				"Skipping Search Terms Insights mining (missing the chance to harvest winning themes into Standard Search).",
			],
		},
		{
			type: "p",
			text: "Frameleads runs PMax architecture as a standard part of [Google Ads engagements](/google-ads) at Scale tier. [Book a free audit](/free-marketing-audit?service=google-ads&cta=blog-pmax-india-d2c) — we'll score your current PMax structure against the framework above on the call.",
		},
	],
	faqs: [
		{
			question: "Should I use PMax or Standard Shopping for Indian D2C?",
			answer:
				"Both. PMax for new-customer acquisition + brand exploration. Standard Shopping for branded queries + high-margin SKUs where you want bid control. Run them in parallel with proper segmentation (Customer Acquisition Goal + brand-keyword negatives in PMax).",
		},
		{
			question: "How many asset groups should I run per campaign?",
			answer:
				"1-5 asset groups per campaign. One per product category or hero SKU bundle. More than 5 dilutes ML optimisation; fewer than 1 wastes the campaign-level budget pacing benefits.",
		},
		{
			question: "What's the minimum budget to run PMax effectively?",
			answer:
				"₹500-1,000/day per asset group as a floor — below that, PMax struggles to exit learning phase. At ₹3,000+/day per asset group, optimisation accelerates meaningfully.",
		},
		{
			question: "How long until PMax exits learning phase?",
			answer:
				"2-4 weeks typically, longer for categories with low conversion volume. PMax needs 30-50 conversions per asset group within a 4-week window to optimise reliably. Below that, performance is noisy.",
		},
		{
			question: "Does PMax replace Search campaigns entirely?",
			answer:
				"No. Run PMax + branded Search + non-branded Search for high-value terms in parallel. PMax handles exploratory + long-tail discovery; branded Search defends brand queries; non-branded Search handles known high-intent themes you want bid control over.",
		},
	],
	references: [
		{
			label: "Google Ads — Performance Max documentation",
			href: "https://support.google.com/google-ads/answer/10724817",
			publisher: "Google",
		},
		{
			label: "Google Ads — Enhanced Conversions",
			href: "https://support.google.com/google-ads/answer/9888656",
			publisher: "Google",
		},
		{
			label: "Google Merchant Center — feed specification",
			href: "https://support.google.com/merchants/answer/7052112",
			publisher: "Google",
		},
		{
			label: "Shopify Audiences documentation",
			href: "https://help.shopify.com/en/manual/marketing/shopify-audiences",
			publisher: "Shopify",
		},
	],
	serviceRefs: ["google-ads", "performance-marketing"],
	industryRefs: ["d2c"],
	pillarSlug: "performance-marketing-operations",
	relatedSlugs: [
		"meta-capi-2026-setup-guide",
		"gtm-server-side-architecture-2026",
	],
};
