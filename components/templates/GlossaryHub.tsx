/**
 * GlossaryHub — canonical layout for /glossary master index.
 *
 *   Hero (Breadcrumb + h1 + dek + dual CTAs)
 *   TLDR (4 bullets)
 *   Why glossary exists (1 paragraph)
 *   Featured 12 terms (acquisition + retention + paid bias)
 *   By category (Acquisition / Retention / Paid / Organic / Unit-economics / SaaS-specific / Compliance)
 *   Methodology (how entries are structured)
 *   Full A-Z list (all 87 terms)
 *   Cross-links to other hubs
 *   References + Timestamp + AuthorCard + CTAs
 *
 * Schema: CollectionPage + ItemList + BreadcrumbList + WebPage(speakable) +
 *         DefinedTermSet anchoring the glossary entity.
 */

import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { CTABlock } from "./CTABlock";
import { SchemaInjector } from "./SchemaInjector";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { glossary, type GlossaryEntry } from "@/lib/data/glossary";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

function categorize(e: GlossaryEntry): string {
	const id = e.id;
	const acq = ["cac", "cpc", "cpm", "cpa", "cpl", "cvr", "ctr", "impressions", "reach", "frequency", "cac-payback", "blended-cac", "paid-cac"];
	const ret = ["churn-rate", "retention-rate", "repeat-purchase-rate", "purchase-frequency", "nrr", "grr", "ltv", "ltv-cac", "arpu"];
	const paidChannels = ["roas", "blended-roas", "marginal-roas", "acos", "mer", "ad-spend", "creative-fatigue", "audience-saturation"];
	const saas = ["mrr", "arr", "nrr", "grr", "ltv-cac", "cac-payback"];
	const ue = ["aov", "gross-margin", "contribution-margin", "cogs", "rto-rate", "cod"];
	const tech = ["attribution", "capi", "gtm", "ga4", "first-touch", "last-touch", "multi-touch"];
	if (acq.includes(id)) return "Acquisition metrics";
	if (ret.includes(id)) return "Retention + lifecycle";
	if (paidChannels.includes(id)) return "Paid-channel performance";
	if (saas.includes(id)) return "SaaS-specific";
	if (ue.includes(id)) return "Unit economics";
	if (tech.includes(id)) return "Attribution + tracking";
	return "Other";
}

export function GlossaryHub() {
	const all = glossary;
	const today = new Date().toISOString().slice(0, 10);
	const url = `${SITE_URL}/glossary`;

	const featuredIds = ["cac", "ltv", "roas", "ltv-cac", "mrr", "arr", "cac-payback", "churn-rate", "aov", "gross-margin", "contribution-margin", "rto-rate"];
	const featured = featuredIds
		.map((id) => all.find((g) => g.id === id))
		.filter((g): g is GlossaryEntry => Boolean(g));

	const byCategory: Record<string, GlossaryEntry[]> = {};
	all.forEach((g) => {
		const cat = categorize(g);
		(byCategory[cat] ||= []).push(g);
	});
	const orderedCats = [
		"Acquisition metrics",
		"Retention + lifecycle",
		"Paid-channel performance",
		"Unit economics",
		"SaaS-specific",
		"Attribution + tracking",
		"Other",
	].filter((k) => byCategory[k]);

	const tldr = [
		`${all.length} plain-English definitions of marketing terms.`,
		`Each entry: definition + formula + example + India benchmarks + common mistakes.`,
		`Cross-linked to ${all.length * 31} industry-adapted cells (Tier 15) + question hubs.`,
		`Built for operators making real budget decisions, not for SEO definitions-of-the-day.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "DefinedTermSet",
			"@id": `${url}#glossary`,
			name: "Frameleads Marketing Glossary",
			description: "Plain-English definitions of marketing terms, formulas, and benchmarks.",
			url,
			inLanguage: "en-IN",
			hasDefinedTerm: featured.map((e) => ({ "@type": "DefinedTerm", name: e.term, alternateName: e.expansion, url: `${SITE_URL}/glossary/${e.id}` })),
		},
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Frameleads Glossary",
			description: "Marketing terms in plain English — formulas, examples, benchmarks, common mistakes.",
			url,
			datePublished: PUBLISHED_AT,
			dateModified: today,
			inLanguage: "en-IN",
			author: { "@type": "Person", "@id": `${DEFAULT_AUTHOR.url}#person`, name: DEFAULT_AUTHOR.name },
			publisher: { "@id": `${SITE_URL}#organization` },
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Featured glossary terms",
			numberOfItems: featured.length,
			itemListElement: featured.map((e, idx) => ({ "@type": "ListItem", position: idx + 1, name: e.term, url: `${SITE_URL}/glossary/${e.id}` })),
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				{ "@type": "ListItem", position: 2, name: "Glossary", item: url },
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: { "@type": "SpeakableSpecification", cssSelector: [".tldr", ".direct-answer"] },
		},
	];

	const methodologyCards = [
		{ heading: "How each entry is structured", body: "Plain-English definition (≤80 words) — formula where applicable — example with concrete inputs/outputs — India benchmark band — common mistakes — related terms." },
		{ heading: "Why bands not single numbers", body: "Benchmark bands account for category variance. A single benchmark misleads more often than it informs. The band is honest; the right number for you sits inside it." },
		{ heading: "When entries don't apply", body: "Edge cases are listed in each entry — categories where the standard formula breaks down (subscription LTV, marketplace dual-side CAC, B2B long-cycle attribution)." },
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Glossary" }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Glossary · {all.length} terms
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">Marketing glossary — plain English</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{all.length} marketing terms with definition + formula + example + India benchmark + common mistakes. Cross-linked to {all.length * 31} industry-adapted cells. Built for operators making real budget decisions.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link href="/free-marketing-audit?source=glossary-hub&cta=glossary-hub-top" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]">Get a free 30-min audit<span aria-hidden>→</span></Link>
							<Link href="/resources" className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">See full resources library</Link>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				<section aria-labelledby="why-glossary" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Purpose</div>
					<h2 id="why-glossary" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Why this glossary exists</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#2D3748]/90">Most marketing teams share a 60-term operational vocabulary but disagree on definitions for half of it. CAC means different things to Finance vs Performance vs Founder. ROAS varies by attribution window. LTV calculated on revenue vs gross margin is off by 2-3×. This glossary is the shared reference — when your CFO, your Performance lead, and your CEO use the same definitions, decisions get faster.</p>
				</section>

				<section aria-labelledby="featured-terms" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Featured</div>
					<h2 id="featured-terms" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Most-referenced terms</h2>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{featured.map((e) => (
							<li key={e.id}>
								<Link href={`/glossary/${e.id}`} className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40">
									<div className="font-poppins text-[16px] font-semibold text-[#2D3748]">{e.term}</div>
									<div className="text-[12px] text-[#FF6B35]">{e.expansion}</div>
									<p className="mt-2 text-[13px] leading-relaxed text-[#5A5A5A]">{(e.definition || "").slice(0, 140)}</p>
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section aria-labelledby="glossary-by-cat" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">By category</div>
					<h2 id="glossary-by-cat" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Terms by category</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">Grouped by functional area. Each term links to its full page with formula, example, benchmarks, and mistakes.</p>
					<div className="mt-6 space-y-6">
						{orderedCats.map((cat) => (
							<div key={cat}>
								<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">{cat}<span className="ml-2 text-[12px] font-normal text-[#5A5A5A]">({byCategory[cat].length})</span></h3>
								<ul className="mt-3 grid gap-2 sm:grid-cols-3">
									{byCategory[cat].map((e) => (
										<li key={e.id}>
											<Link href={`/glossary/${e.id}`} className="block rounded-xl border border-[#FFE4D6] bg-white px-3 py-2 text-[13.5px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">{e.term}<span className="ml-2 text-[11px] text-[#5A5A5A]">{e.expansion}</span></Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section aria-labelledby="glossary-methodology" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Methodology</div>
					<h2 id="glossary-methodology" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">How entries are structured</h2>
					<div className="mt-5 space-y-4">
						{methodologyCards.map((m, idx) => (
							<article key={idx} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
								<h3 className="font-poppins text-[16px] font-semibold text-[#2D3748]">{m.heading}</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">{m.body}</p>
							</article>
						))}
					</div>
				</section>

				<section aria-labelledby="glossary-az" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Full list</div>
					<h2 id="glossary-az" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">All {all.length} terms (A-Z)</h2>
					<ul className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
						{[...all].sort((a, b) => a.term.localeCompare(b.term)).map((e) => (
							<li key={e.id}>
								<Link href={`/glossary/${e.id}`} className="block rounded-lg border border-[#FFE4D6] bg-white px-3 py-2 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">{e.term}</Link>
							</li>
						))}
					</ul>
				</section>

				<section aria-labelledby="glossary-cross" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Other hubs</div>
					<h2 id="glossary-cross" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Continue exploring</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						<li><Link href="/resources/guides" className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"><div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Long-form guides</div><p className="mt-1 text-[13px] text-[#5A5A5A]">Service / industry / location guides + every cross-combination.</p></Link></li>
						<li><Link href="/what-is" className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"><div className="font-poppins text-[15px] font-semibold text-[#2D3748]">What-is hub</div><p className="mt-1 text-[13px] text-[#5A5A5A]">Definitions as answer-first articles.</p></Link></li>
						<li><Link href="/tools" className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"><div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Calculators</div><p className="mt-1 text-[13px] text-[#5A5A5A]">19 free interactive tools.</p></Link></li>
					</ul>
				</section>

				<CTABlock variant="audit" headline="Glossary gives definitions. The audit gives the answer." body="Free 30 minutes, no slides — we'll review your specific metrics against the bands and tell you which lever to move next." primaryHref="/free-marketing-audit?source=glossary-hub&cta=glossary-hub-bottom" primaryLabel="Book a free 30-min audit" />
				<ReferencesBlock references={referencesFor({})} />
				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />
				<AuthorCard person={DEFAULT_AUTHOR} name={DEFAULT_AUTHOR.name} role={DEFAULT_AUTHOR.role} bio={`${DEFAULT_AUTHOR.bio} Glossary entries are reviewed quarterly against live engagement data.`} linkedin={DEFAULT_AUTHOR.linkedin} updatedAt={today} />
			</main>
		</>
	);
}
