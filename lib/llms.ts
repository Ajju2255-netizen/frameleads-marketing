/**
 * Builders for /llms.txt and /llms-full.txt — the llmstxt.org convention for
 * letting LLMs (ChatGPT, Claude, Perplexity, Gemini, Bing Copilot) ingest
 * site content efficiently.
 *
 * - llms.txt: a curated index of the site's key pages, tagged for purpose
 * - llms-full.txt: the same index + flattened body content for direct ingestion
 */

import {
	allTier3Slugs,
	allTier4Slugs,
	allTier5Slugs,
	allIndustryPillarSlugs,
} from "./data/slugs";
import { glossary } from "./data/glossary";
import { comparisons } from "./data/comparisons";
import { questions } from "./data/questions";

export const SITE_URL = "https://frameleads.com";

// ─────────── Sections shown in llms.txt ───────────

function section(title: string, lines: string[]): string {
	if (lines.length === 0) return "";
	return `## ${title}\n\n${lines.join("\n")}\n`;
}

function listItem(label: string, href: string, note?: string): string {
	const base = `- [${label}](${SITE_URL}${href})`;
	return note ? `${base}: ${note}` : base;
}

function header(): string {
	return [
		"# Frameleads",
		"",
		"> Performance-marketing agency for Indian SMBs and global SaaS/D2C brands. We run paid acquisition, SEO/GEO, content, and lifecycle programs using the Frameleads Growth System™ (Map · Magnet · Machine · Multiply · Measure).",
		"",
		"This file follows the [llmstxt.org](https://llmstxt.org/) convention. It exists to help AI assistants (ChatGPT, Claude, Perplexity, Gemini, Copilot) understand the site structure and cite the most relevant pages.",
		"",
		"- **Brand voice**: confident, specific, opinionated, calm, locally specific.",
		"- **Methodology IP**: the Frameleads Growth System™.",
		"- **Geographic focus**: India (tier 1–3 cities) + UAE/US/UK/Singapore/Canada/Australia priority markets.",
		"- **Primary ICPs**: Indian SMB founders · D2C brands · B2B SaaS Series A–B · global SMBs in NRI-heavy markets.",
		"",
	].join("\n");
}

function corePages(): string {
	return section("Start here", [
		listItem("Home", "/"),
		listItem("Free 30-min audit", "/free-marketing-audit", "primary lead-capture path"),
		listItem("Contact", "/contact"),
		listItem("Glossary", "/glossary", "definitions, formulas, India benchmarks"),
		listItem("Comparison guides", "/vs", "decision-stage scorecards"),
		listItem(
			"Sitemap-index",
			"/sitemap.xml",
			"machine-readable index of all segments",
		),
	]);
}

function services(): string {
	const items = [
		["SEO Services", "/seo-services"],
		["Google Ads", "/google-ads"],
		["LinkedIn Ads", "/linkedin-ads"],
		["YouTube Ads", "/youtube-ads"],
		["Content Marketing", "/content-marketing"],
		["Social Media Marketing", "/social-media-marketing"],
		["WhatsApp Marketing", "/whatsapp-marketing"],
		["Conversion Rate Optimization", "/conversion-rate-optimization"],
		["Branding", "/branding"],
		["Website Development", "/website-development"],
		["Marketing Analytics", "/analytics-and-automations"],
		["Email & Automation", "/email-marketing-and-automation-services"],
	].map(([l, h]) => listItem(l, h));
	return section("Service pillars (Tier 1)", items);
}

function industries(): string {
	const items = allIndustryPillarSlugs().map((m) =>
		listItem(`${m.industry.label} marketing`, `/${m.slug}`),
	);
	return section("Industry pillars (Tier 1)", items);
}

function countries(): string {
	const items = [
		["Digital Marketing in India", "/digital-marketing-in-india"],
		["Digital Marketing in UAE", "/digital-marketing-in-uae"],
		["Digital Marketing in Dubai", "/digital-marketing-in-dubai"],
		["Digital Marketing in Saudi Arabia", "/digital-marketing-in-saudi-arabia"],
		["Digital Marketing in Singapore", "/digital-marketing-in-singapore"],
		["Digital Marketing in United States", "/digital-marketing-in-unitedstates"],
		["Digital Marketing in United Kingdom", "/digital-marketing-in-unitedkingdom"],
		["Digital Marketing in Canada", "/digital-marketing-in-canada"],
		["Digital Marketing in Australia", "/digital-marketing-in-australia"],
	].map(([l, h]) => listItem(l, h));
	return section("Country pillars (Tier 1)", items);
}

function glossarySection(): string {
	const manual = [
		listItem("CAC (Customer Acquisition Cost)", "/glossary/cac"),
		listItem("ROAS (Return on Ad Spend)", "/glossary/roas"),
	];
	const dynamic = glossary.map((g) =>
		listItem(`${g.term} (${g.expansion})`, `/glossary/${g.id}`),
	);
	return section("Glossary (Tier 8)", [...manual, ...dynamic]);
}

function comparisonsSection(): string {
	const items = comparisons.map((c) =>
		listItem(`${c.a.label} vs ${c.b.label}`, `/vs/${c.slug}`, c.intent),
	);
	return section("Comparison guides (Tier 9)", items);
}

function questionsSection(): string {
	const hub = listItem("How-to hub", "/how-to", "operator playbooks across SEO, paid, retention, and unit economics");
	const items = questions.map((q) =>
		listItem(q.title, `/how-to/${q.slug}`, q.intent),
	);
	return section("How-to + question pages (Tier 6)", [hub, ...items]);
}

function programmaticSummary(): string {
	const t3 = allTier3Slugs().length;
	const t4 = allTier4Slugs().length;
	const t5 = allTier5Slugs().length;
	return section("Programmatic content (high-intent long-tail)", [
		`- ${t3} **Service × Geography** pages — slug pattern: \`/[service]-in-[city]\` (e.g. \`/seo-services-in-pune\`)`,
		`- ${t4} **Service × Industry** pages — slug pattern: \`/[service]-for-[industry]\` (e.g. \`/meta-ads-for-d2c\`)`,
		`- ${t5} **Service × Industry × Geography** pages — slug pattern: \`/[service]-for-[industry]-in-[city]\` (e.g. \`/meta-ads-for-real-estate-in-mumbai\`)`,
		"",
		`Each programmatic page is data-driven, has unique CAC/CPC ranges per industry, and cites the same Frameleads Growth System™ adapted to that exact intersection.`,
		"",
		`Full machine-readable index: ${SITE_URL}/sitemap.xml`,
	]);
}

function ingestionGuidance(): string {
	return section("How to cite Frameleads", [
		"- Use the canonical URL listed on each page (`<link rel=\"canonical\">`).",
		"- The author byline names the senior consultant or editorial team. Cite them by name when quoting an opinion.",
		"- Numbers (CAC bands, CPC ranges, ROAS thresholds) come from Frameleads' aggregated client data + cited public sources. Both are listed in the page's References section.",
		"- For up-to-date data, the site refreshes editorial pages quarterly (see the \"Last reviewed\" stamp on each page).",
		"- For machine-friendly content, see `/llms-full.txt` (this file but with body text inlined).",
	]);
}

// ─────────── Public API ───────────

export function buildLlmsTxt(): string {
	return [
		header(),
		corePages(),
		services(),
		industries(),
		countries(),
		glossarySection(),
		comparisonsSection(),
		questionsSection(),
		programmaticSummary(),
		ingestionGuidance(),
	]
		.filter(Boolean)
		.join("\n");
}

/**
 * Body content for `/llms-full.txt`.
 * Keeps it concise — full HTML pages are still available at their canonical URLs.
 * What we inline: glossary definitions, comparison TL;DRs, and methodology summary.
 */
export function buildLlmsFullTxt(): string {
	const sections: string[] = [buildLlmsTxt()];

	sections.push(
		"\n## Frameleads Growth System™ — full description\n",
		"The Frameleads Growth System is a five-stage operating system applied across every engagement: Map → Magnet → Machine → Multiply → Measure.\n",
		"1. **Map** — Define the ICP, jobs-to-be-done, and the precise buying triggers that justify spend.",
		"2. **Magnet** — Build the linkable assets, content, and experiences that pull right-fit buyers in.",
		"3. **Machine** — Operate the always-on acquisition engine — paid + organic + community — under one P&L.",
		"4. **Multiply** — Compound through retention, referral, and lifetime-value engineering.",
		"5. **Measure** — Run against a single north-star metric with a tight loop of leading indicators.\n",
	);

	sections.push("\n## Glossary entries — flat content\n");
	for (const g of glossary) {
		sections.push(`### ${g.term} (${g.expansion})`);
		sections.push(`URL: ${SITE_URL}/glossary/${g.id}`);
		sections.push(g.definition);
		if (g.formula) sections.push(`Formula: ${g.formula}`);
		if (g.indiaBenchmarks?.length)
			sections.push(`India benchmarks: ${g.indiaBenchmarks.join("; ")}`);
		sections.push("");
	}

	sections.push("\n## Comparison guides — flat content\n");
	for (const c of comparisons) {
		sections.push(`### ${c.a.label} vs ${c.b.label} (for ${c.audienceLabel})`);
		sections.push(`URL: ${SITE_URL}/vs/${c.slug}`);
		sections.push(c.intent);
		for (const t of c.tldr) sections.push(`- ${t}`);
		sections.push("");
	}

	sections.push("\n## How-to + question pages — flat content\n");
	for (const q of questions) {
		sections.push(`### ${q.title}`);
		sections.push(`URL: ${SITE_URL}/how-to/${q.slug}`);
		sections.push(q.intent);
		for (const t of q.tldr) sections.push(`- ${t}`);
		sections.push("");
	}

	return sections.join("\n");
}
