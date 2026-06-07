/**
 * ComparisonsHub — canonical layout for /vs (the comparisons master index).
 *
 *   Hero (Breadcrumb + h1 + dek + dual CTAs)
 *   TLDR (4 bullets)
 *   Why comparisons exist (1 paragraph)
 *   Featured (top 12 comparisons)
 *   By category (paid-vs-paid, channel-vs-channel, agency-related, methodology-vs-methodology, etc.)
 *   Methodology (how comparisons are scored)
 *   Full A-Z list
 *   Cross-links to other hubs
 *   References + Timestamp + AuthorCard + CTAs
 *
 * Schema: CollectionPage + ItemList + BreadcrumbList + WebPage(speakable).
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
import { comparisons, type ComparisonEntry } from "@/lib/data/comparisons";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

/**
 * Heuristic category buckets — assign comparisons to one of these based on
 * tokens in the slug. Keeps the hub useful even as the comparison list grows.
 */
function categorize(c: ComparisonEntry): string {
	const s = c.slug.toLowerCase();
	if (s.includes("agency") || s.includes("in-house") || s.includes("frameleads")) return "Agency / build vs buy";
	if (s.includes("seo") && s.includes("ppc")) return "Organic vs paid";
	if (s.includes("seo") && (s.includes("ads") || s.includes("ppc"))) return "Organic vs paid";
	if (s.includes("performance-marketing") || s.includes("brand-marketing")) return "Performance vs brand";
	if (s.includes("meta-ads") && s.includes("google-ads")) return "Paid channel vs paid channel";
	if (s.includes("linkedin") && (s.includes("meta") || s.includes("google"))) return "Paid channel vs paid channel";
	if (s.includes("ads") || s.includes("ppc")) return "Paid channel vs paid channel";
	if (s.includes("organic") || s.includes("seo")) return "Organic strategy";
	if (s.includes("d2c") || s.includes("b2b") || s.includes("saas")) return "Business model";
	if (s.includes("local")) return "Local vs national";
	return "Other";
}

export function ComparisonsHub() {
	const all = comparisons;
	const today = new Date().toISOString().slice(0, 10);
	const url = `${SITE_URL}/vs`;

	const featured = all.slice(0, 12);

	const byCategory: Record<string, ComparisonEntry[]> = {};
	all.forEach((c) => {
		const cat = categorize(c);
		(byCategory[cat] ||= []).push(c);
	});
	const orderedCats = ["Organic vs paid", "Paid channel vs paid channel", "Performance vs brand", "Agency / build vs buy", "Business model", "Local vs national", "Organic strategy", "Other"].filter((k) => byCategory[k]);

	const tldr = [
		`${all.length} side-by-side comparisons across channels, tools, agencies, and approaches.`,
		`Each comparison has a scorecard + when-to-pick + when-to-avoid + a hybrid case.`,
		`No affiliate fees, no paid placement, no false equivalence. Operator-grade reasoning.`,
		`Updated quarterly from live engagement data.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Frameleads Comparisons Library",
			description: "Honest side-by-side comparisons of marketing channels, tools, agencies, and approaches.",
			url,
			datePublished: PUBLISHED_AT,
			dateModified: today,
			inLanguage: "en-IN",
			author: { "@type": "Person", "@id": `${DEFAULT_AUTHOR.url}#person`, name: DEFAULT_AUTHOR.name },
			publisher: { "@id": `${SITE_URL}#organization` },
			hasPart: featured.map((c) => ({
				"@type": "Article",
				name: `${c.a.label} vs ${c.b.label}`,
				url: `${SITE_URL}/vs/${c.slug}`,
				description: c.intent,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Featured comparisons",
			numberOfItems: featured.length,
			itemListElement: featured.map((c, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: `${c.a.label} vs ${c.b.label}`,
				url: `${SITE_URL}/vs/${c.slug}`,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				{ "@type": "ListItem", position: 2, name: "Comparisons", item: url },
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
		{ heading: "How comparisons are scored", body: "Every comparison ships a scorecard of 5-8 criteria with both sides graded against the same rubric. The criteria are listed before the verdict — no hidden weighting." },
		{ heading: "Why hybrid is the honest default", body: "Most operator-grade calls aren't 'A vs B' — they're 'how much of each, in what order'. Every comparison includes a hybrid scenario with the typical mix ratio." },
		{ heading: "When the comparison stops applying", body: "Comparisons are time- and stage-sensitive. We mark which stage / category / runway window each comparison applies to. Outside those conditions, the verdict can flip." },
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Comparisons" }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Comparisons · {all.length} entries
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Comparisons — honest side-by-sides
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{all.length}+ comparisons across platforms, tools, agencies, and approaches. Operator-grade reasoning, scorecard + decision flow + hybrid case for every entry. No affiliate fees, no paid placement.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link href="/free-marketing-audit?source=vs-hub&cta=vs-hub-top" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]">Get a free 30-min audit<span aria-hidden>→</span></Link>
							<Link href="/resources" className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">See full resources library</Link>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				{/* Why comparisons exist */}
				<section aria-labelledby="why-vs" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Purpose</div>
					<h2 id="why-vs" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Why this hub exists</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#2D3748]/90">
						Most "X vs Y" content on the web is affiliate-fee-driven, false-balance, or generated against a sales agenda. This hub is the opposite: each comparison is structured the same way (criteria → scorecard → verdict → hybrid), Frameleads' position is disclosed transparently, and there's no paid placement anywhere in the library.
					</p>
				</section>

				{/* Featured */}
				<section aria-labelledby="featured-vs" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Featured</div>
					<h2 id="featured-vs" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Most-read comparisons</h2>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2">
						{featured.map((c) => (
							<li key={c.slug}>
								<Link href={`/vs/${c.slug}`} className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40">
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">{c.a.label} vs {c.b.label}</div>
									<p className="mt-2 text-[13.5px] leading-relaxed text-[#5A5A5A]">{c.intent.slice(0, 140)}</p>
									<div className="mt-3 text-[12px] text-[#5A5A5A]">For {c.audienceLabel}</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* By category */}
				<section aria-labelledby="vs-by-cat" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">By category</div>
					<h2 id="vs-by-cat" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Comparisons by category</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">Categorised by the structural type of the decision — channel-vs-channel, paid-vs-organic, build-vs-buy, etc.</p>
					<div className="mt-6 space-y-6">
						{orderedCats.map((cat) => (
							<div key={cat}>
								<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">
									{cat}
									<span className="ml-2 text-[12px] font-normal text-[#5A5A5A]">({byCategory[cat].length})</span>
								</h3>
								<ul className="mt-3 grid gap-2 sm:grid-cols-2">
									{byCategory[cat].map((c) => (
										<li key={c.slug}>
											<Link href={`/vs/${c.slug}`} className="block rounded-xl border border-[#FFE4D6] bg-white px-3 py-2 text-[13.5px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">
												{c.a.label} vs {c.b.label} — for {c.audienceLabel}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Methodology */}
				<section aria-labelledby="vs-methodology" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Methodology</div>
					<h2 id="vs-methodology" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">How we structure comparisons</h2>
					<div className="mt-5 space-y-4">
						{methodologyCards.map((m, idx) => (
							<article key={idx} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
								<h3 className="font-poppins text-[16px] font-semibold text-[#2D3748]">{m.heading}</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">{m.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* Full A-Z */}
				<section aria-labelledby="vs-az" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Full list</div>
					<h2 id="vs-az" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">All {all.length} comparisons</h2>
					<ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
						{[...all].sort((a, b) => `${a.a.label} vs ${a.b.label}`.localeCompare(`${b.a.label} vs ${b.b.label}`)).map((c) => (
							<li key={c.slug}>
								<Link href={`/vs/${c.slug}`} className="block rounded-lg border border-[#FFE4D6] bg-white px-3 py-2 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">
									{c.a.shortName} vs {c.b.shortName}
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* Cross-links */}
				<section aria-labelledby="vs-cross" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Other hubs</div>
					<h2 id="vs-cross" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">Continue exploring</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						<li><Link href="/resources/guides" className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"><div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Long-form guides</div><p className="mt-1 text-[13px] text-[#5A5A5A]">Service / industry / location / cross-cell guides.</p></Link></li>
						<li><Link href="/glossary" className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"><div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Glossary</div><p className="mt-1 text-[13px] text-[#5A5A5A]">87 plain-English definitions.</p></Link></li>
						<li><Link href="/best" className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"><div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Best-of lists</div><p className="mt-1 text-[13px] text-[#5A5A5A]">Criteria-first curated lists.</p></Link></li>
					</ul>
				</section>

				<CTABlock variant="audit" headline="Not sure which side to pick?" body="The comparison is the framework. The audit is the answer for your specific stage. Free 30 minutes, no slides — we'll tell you what to choose and why." primaryHref="/free-marketing-audit?source=vs-hub&cta=vs-hub-bottom" primaryLabel="Book a free 30-min audit" />
				<ReferencesBlock references={referencesFor({})} />
				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />
				<AuthorCard person={DEFAULT_AUTHOR} name={DEFAULT_AUTHOR.name} role={DEFAULT_AUTHOR.role} bio={`${DEFAULT_AUTHOR.bio} Comparisons curated from live engagement experience across categories.`} linkedin={DEFAULT_AUTHOR.linkedin} updatedAt={today} />
			</main>
		</>
	);
}
