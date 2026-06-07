/**
 * Curated authoritative citation library.
 *
 * Each tier template picks a subset (by industry + service + region) so the
 * ReferencesBlock surfaces ~4–6 sources relevant to that exact page rather than
 * a generic global list. Primary regulators and recognized analyst firms are
 * weighted heaviest by AI engines and Google quality raters.
 */

import type { Reference } from "@/components/templates/ReferencesBlock";

// ─────────────────────────────────────────────────────────────────
// Source pools, grouped semantically
// ─────────────────────────────────────────────────────────────────

const GENERAL_INDIA: Reference[] = [
	{
		label: "IBEF — India Brand Equity Foundation: Indian Industry Reports",
		href: "https://www.ibef.org/industry",
		publisher: "IBEF (Ministry of Commerce & Industry)",
		note: "Sector-level market size, growth, and policy context for Indian industries.",
	},
	{
		label: "IAMAI — Internet & Mobile Association of India",
		href: "https://www.iamai.in/",
		publisher: "IAMAI",
		note: "Digital advertising industry body; reports on India internet user base, ad spend, and platform shares.",
	},
	{
		label: "MoSPI — Ministry of Statistics and Programme Implementation",
		href: "https://www.mospi.gov.in/",
		publisher: "Government of India",
		note: "Primary source for India macro-economic indicators (CPI, GDP, household consumption).",
	},
	{
		label: "ASCI Code for Self-Regulation of Advertising in India",
		href: "https://www.ascionline.in/the-code/asci-code/",
		publisher: "Advertising Standards Council of India",
		note: "Mandatory baseline for all advertising claims in India — including digital, influencer, and comparative ads.",
	},
];

const FINANCIAL_SERVICES: Reference[] = [
	{
		label: "Reserve Bank of India — regulations & circulars",
		href: "https://www.rbi.org.in/Scripts/BS_RegulationsListView.aspx",
		publisher: "RBI",
		note: "Authoritative for any advertising of credit, lending, NBFCs, payment products.",
	},
	{
		label: "SEBI — Securities & Exchange Board of India: advertising code",
		href: "https://www.sebi.gov.in/legal/regulations.html",
		publisher: "SEBI",
		note: "Mandatory for investment, mutual fund, wealth management ads.",
	},
	{
		label: "IRDAI — Insurance Regulatory and Development Authority of India",
		href: "https://www.irdai.gov.in/",
		publisher: "IRDAI",
		note: "Insurance product advertising and intermediary regulations.",
	},
];

const HEALTHCARE: Reference[] = [
	{
		label: "DPDP Act 2023 — Digital Personal Data Protection",
		href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
		publisher: "Ministry of Electronics & IT, Government of India",
		note: "Patient data, consent flows, and lead handling for healthcare and healthtech.",
	},
	{
		label: "NMC — National Medical Commission: code of medical ethics & advertising",
		href: "https://www.nmc.org.in/",
		publisher: "NMC",
		note: "Doctor and clinic advertising rules; testimonial and claim substantiation.",
	},
];

const REAL_ESTATE: Reference[] = [
	{
		label: "RERA — Real Estate (Regulation and Development) Act",
		href: "https://maharera.maharashtra.gov.in/",
		publisher: "MahaRERA (representative state authority)",
		note: "Project-registration disclosure rules for every real-estate ad in India.",
	},
	{
		label: "CREDAI — Confederation of Real Estate Developers' Associations of India",
		href: "https://www.credai.org/",
		publisher: "CREDAI",
		note: "Industry body data on residential and commercial real-estate dynamics by city.",
	},
];

const TECH_SAAS: Reference[] = [
	{
		label: "NASSCOM — Technology Sector Industry Reports",
		href: "https://www.nasscom.in/knowledge-center",
		publisher: "NASSCOM",
		note: "India IT/SaaS market size, talent supply, exports, and segment-level analysis.",
	},
	{
		label: "G2 — verified B2B software reviews",
		href: "https://www.g2.com/",
		publisher: "G2",
		note: "Recognized review/citation source for B2B SaaS category positioning and competitor mapping.",
	},
	{
		label: "DPDP Act 2023 — Digital Personal Data Protection",
		href: "https://www.meity.gov.in/digital-personal-data-protection-act-2023",
		publisher: "Ministry of Electronics & IT, Government of India",
		note: "Mandatory consent + lead-handling rules for any India SaaS collecting personal data.",
	},
];

const ECOMMERCE: Reference[] = [
	{
		label: "Consumer Protection (E-Commerce) Rules, 2020",
		href: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce%20rules.pdf",
		publisher: "Ministry of Consumer Affairs",
		note: "Mandatory disclosures, return policies, and grievance officer requirements for India e-commerce.",
	},
	{
		label: "Statista — India E-commerce market data",
		href: "https://www.statista.com/markets/413/topic/463/e-commerce/",
		publisher: "Statista",
		note: "Quantitative market data for India D2C, marketplace, and category-level growth.",
	},
];

const EDUCATION: Reference[] = [
	{
		label: "UGC — University Grants Commission",
		href: "https://www.ugc.gov.in/",
		publisher: "UGC",
		note: "Higher-education accreditation and advertising rules.",
	},
	{
		label: "AICTE — All India Council for Technical Education",
		href: "https://www.aicte-india.org/",
		publisher: "AICTE",
		note: "Technical-program approvals and disclosure requirements.",
	},
];

const PERFORMANCE_PLATFORMS: Reference[] = [
	{
		label: "Google Ads — best practices and policy center",
		href: "https://support.google.com/google-ads/answer/6167123",
		publisher: "Google",
		note: "Authoritative on PPC + Performance Max + Shopping campaign norms.",
	},
	{
		label: "Meta — advertising policies",
		href: "https://www.facebook.com/business/help/487853672216692",
		publisher: "Meta",
		note: "Facebook + Instagram + Audience Network advertising eligibility and creative rules.",
	},
	{
		label: "LinkedIn — advertising guidelines",
		href: "https://www.linkedin.com/help/lms/answer/advertising-guidelines",
		publisher: "LinkedIn",
		note: "Approved formats, prohibited categories, and content review for B2B ads.",
	},
];

const SEO_GENERAL: Reference[] = [
	{
		label: "Google Search — Search Essentials",
		href: "https://developers.google.com/search/docs/essentials",
		publisher: "Google",
		note: "Primary source for technical SEO requirements, indexing, and Search ranking signals.",
	},
	{
		label: "Google — AI Overviews and SGE documentation",
		href: "https://blog.google/products/search/generative-ai-search/",
		publisher: "Google",
		note: "How Google's AI Overviews source and cite content — informs GEO strategy.",
	},
];

// ─────────────────────────────────────────────────────────────────
// Selector — pick references for a given context
// ─────────────────────────────────────────────────────────────────

type Context = {
	serviceId?: string;
	industryId?: string;
};

const INDUSTRY_POOLS: Record<string, Reference[]> = {
	finance: FINANCIAL_SERVICES,
	"financial-services": FINANCIAL_SERVICES,
	insurance: FINANCIAL_SERVICES,
	fintech: FINANCIAL_SERVICES,
	healthcare: HEALTHCARE,
	healthtech: HEALTHCARE,
	"real-estate": REAL_ESTATE,
	"b2b-saas": TECH_SAAS,
	"saas-vertical": TECH_SAAS,
	d2c: ECOMMERCE,
	"fashion-d2c": ECOMMERCE,
	"beauty-d2c": ECOMMERCE,
	retail: ECOMMERCE,
	jewelry: ECOMMERCE,
	education: EDUCATION,
	edtech: EDUCATION,
};

const SERVICE_POOLS: Record<string, Reference[]> = {
	"seo-services": SEO_GENERAL,
	"content-marketing": SEO_GENERAL,
	"google-ads": PERFORMANCE_PLATFORMS.slice(0, 1),
	"meta-ads": PERFORMANCE_PLATFORMS.slice(1, 2),
	"linkedin-ads": PERFORMANCE_PLATFORMS.slice(2, 3),
	"ppc-management": PERFORMANCE_PLATFORMS,
	"performance-marketing": PERFORMANCE_PLATFORMS,
};

/**
 * Returns up to ~6 deduped references relevant to the given context. Order:
 *   1) industry-specific regulators (if any)
 *   2) service/platform-specific docs (if any)
 *   3) general India macro sources (always)
 */
export function referencesFor(ctx: Context): Reference[] {
	const seen = new Set<string>();
	const out: Reference[] = [];

	const add = (refs: Reference[]) => {
		for (const r of refs) {
			if (seen.has(r.href)) continue;
			seen.add(r.href);
			out.push(r);
			if (out.length >= 6) return;
		}
	};

	if (ctx.industryId && INDUSTRY_POOLS[ctx.industryId]) {
		add(INDUSTRY_POOLS[ctx.industryId]);
	}
	if (ctx.serviceId && SERVICE_POOLS[ctx.serviceId]) {
		add(SERVICE_POOLS[ctx.serviceId]);
	}
	add(GENERAL_INDIA);

	return out.slice(0, 6);
}
