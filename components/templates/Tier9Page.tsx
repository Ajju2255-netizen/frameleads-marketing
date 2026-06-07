import Link from "next/link";
import { TLDRBlock } from "./TLDRBlock";
import { ScorecardTable } from "./ScorecardTable";
import { ListBlock } from "./ListBlock";
import { Prose } from "./Prose";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { comparisons, type ComparisonEntry } from "@/lib/data/comparisons";
import { glossary } from "@/lib/data/glossary";

type Props = {
	entry: ComparisonEntry;
	url: string;
};

const COMPARISON_MISTAKES = [
	"Forcing a winner when the honest answer is 'hybrid' — pure-A or pure-B engagements rarely beat thoughtfully mixed ones at scale.",
	"Comparing on a single criterion (price, speed, ROAS) instead of the full scorecard — single-criterion calls misweight what actually drives outcomes.",
	"Importing a comparison verdict from a different stage or category — what's right for pre-PMF often inverts post-PMF, and B2B verdicts rarely transfer to D2C.",
	"Letting the decision rest on a vendor's marketing claim instead of an independent reference call + scope comparison + free audit.",
	"Locking the choice for too long — comparisons are time-sensitive. Quarterly re-evaluation is the responsible cadence at Scale tier.",
];

const COMPARISON_METRICS = [
	"Decision-quality score — weighted criteria × confidence. Use this to decide before vibes.",
	"Reversibility — how easy is it to switch later? Reversible decisions get more bias to act.",
	"Cost-of-wrong — fee + media + opportunity-cost if the call fails. Pre-mortem before committing.",
	"Time-to-rerun-comparison — how long before the underlying market shifts? Bake in the next checkpoint.",
];

function adjacentComparisons(entry: ComparisonEntry): ComparisonEntry[] {
	const tokens = entry.slug.toLowerCase().split("-vs-").flatMap((s) => s.split("-"));
	return comparisons
		.filter((c) => c.slug !== entry.slug)
		.map((c) => ({
			c,
			score: tokens.reduce(
				(acc, t) => acc + (c.slug.toLowerCase().includes(t) || c.audienceLabel.toLowerCase().includes(t) ? 1 : 0),
				0,
			),
		}))
		.sort((a, b) => b.score - a.score)
		.slice(0, 6)
		.map((s) => s.c);
}

function relatedGlossaryForComparison(entry: ComparisonEntry): { id: string; term: string }[] {
	const blob = `${entry.intent} ${entry.tldr.join(" ")} ${entry.deepDiveA} ${entry.deepDiveB} ${entry.hybrid}`.toLowerCase();
	const matches = (glossary as any[])
		.filter((g) => {
			const t = (g.term || g.id || "").toLowerCase();
			return blob.includes(t);
		})
		.slice(0, 6);
	// Fallback set
	if (matches.length < 4) {
		const fb = ["cac", "roas", "ltv", "ltv-cac", "cpc", "cpm"];
		fb.forEach((id) => {
			const g = (glossary as any[]).find((x) => x.id === id);
			if (g && !matches.find((m) => m.id === g.id)) matches.push(g);
		});
	}
	return matches.slice(0, 6).map((g) => ({ id: g.id, term: g.term || g.id }));
}

export function Tier9Page({ entry, url }: Props) {
	const today = new Date().toISOString().slice(0, 10);
	const headline = `${entry.a.label} vs ${entry.b.label}`;
	const adjacent = adjacentComparisons(entry);
	const relatedGlossary = relatedGlossaryForComparison(entry);

	// Extended FAQs — entry FAQs + 4 universal comparison FAQs
	const universalFaqs: FAQItem[] = [
		{
			question: `Can I avoid choosing and just run both ${entry.a.shortName} and ${entry.b.shortName}?`,
			answer: `Yes — that's the hybrid scenario laid out above. Most operator-grade engagements run both; the question is the ratio, not the binary. The hybrid section gives the typical mix; the audit will calibrate to your specific stage + unit economics.`,
		},
		{
			question: `What's the cost of choosing wrong?`,
			answer: `Depends on reversibility. Reversible decisions (channel rebalancing, agency change) cost 30-90 days of pipeline. Irreversible decisions (multi-year contract lock-in, organisational restructure) cost much more — score reversibility before committing.`,
		},
		{
			question: `How often should we revisit this comparison?`,
			answer: `Quarterly for fast-moving variables (paid-channel CPM shifts, creative-fatigue cycles, market saturation); annually for slow ones (brand position, product-market fit, strategic priorities). Every comparison has time-sensitivity baked in — re-read the verdict 90 days from now and you may flip.`,
		},
		{
			question: `Is Frameleads biased toward one side of this comparison?`,
			answer: `We disclose where our engagement bias sits — our scoreboard is published in the comparison above. We work on both sides for clients across stages, so the comparison is calibrated against real outcomes, not against an internal sales agenda.`,
		},
	];
	const faqs: FAQItem[] = [...entry.faqs, ...universalFaqs].slice(0, 12);

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${headline} — Frameleads Decision Guide`,
			description: entry.intent,
			url,
			mainEntityOfPage: url,
			datePublished: "2025-12-01",
			dateModified: today,
			inLanguage: "en-IN",
			image: "https://frameleads.com/og-default.png",
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
				url: DEFAULT_AUTHOR.url,
			},
			publisher: { "@id": "https://frameleads.com#organization" },
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: `${headline} comparison criteria`,
			numberOfItems: entry.scorecard.length,
			itemListElement: entry.scorecard.map((row, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: row.criterion,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.question,
				acceptedAnswer: { "@type": "Answer", text: f.answer },
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://frameleads.com" },
				{ "@type": "ListItem", position: 2, name: "Comparisons", item: "https://frameleads.com/vs" },
				{ "@type": "ListItem", position: 3, name: headline, item: url },
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".tldr", ".faq-answer", ".direct-answer"],
			},
		},
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1000px_300px_at_25%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<nav aria-label="Breadcrumb" className="mb-4 text-sm text-[#5A5A5A]">
							<ol className="flex items-center gap-2">
								<li><Link href="/" className="hover:text-[#FF6B35] transition-colors">Home</Link></li>
								<li aria-hidden>/</li>
								<li><Link href="/vs" className="hover:text-[#FF6B35] transition-colors">Comparisons</Link></li>
								<li aria-hidden>/</li>
								<li className="text-[#2D3748]">{entry.a.shortName} vs {entry.b.shortName}</li>
							</ol>
						</nav>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Decision guide
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">{headline}</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{entry.intent} <span className="text-[#2D3748]/80">Built for {entry.audienceLabel}.</span>
						</p>
					</div>
				</header>
				<TLDRBlock bullets={entry.tldr} />
				<ScorecardTable aLabel={entry.a.label} bLabel={entry.b.label} rows={entry.scorecard} />
				<Prose>
					<h2>{entry.a.label} — when it wins</h2>
					<p>{entry.deepDiveA}</p>
					<h2>{entry.b.label} — when it wins</h2>
					<p>{entry.deepDiveB}</p>
				</Prose>
				<ListBlock heading="Decision flow" items={entry.decisionFlow} />
				<Prose>
					<h2>Hybrid — why most operators run both</h2>
					<p>{entry.hybrid}</p>
				</Prose>

				{/* Common mistakes */}
				<section aria-labelledby="vs-mistakes" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Common mistakes</div>
					<h2 id="vs-mistakes" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">What goes wrong in this kind of decision</h2>
					<ul className="mt-5 space-y-3">
						{COMPARISON_MISTAKES.map((m, idx) => (
							<li key={idx} className="flex items-start gap-3 rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-4">
								<span aria-hidden className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#FF6B35]">{idx + 1}</span>
								<span className="text-[14.5px] leading-relaxed text-[#2D3748]/90">{m}</span>
							</li>
						))}
					</ul>
				</section>

				{/* Metrics for decision quality */}
				<section aria-labelledby="vs-metrics" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Decision metrics</div>
					<h2 id="vs-metrics" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">How to score the decision</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2">
						{COMPARISON_METRICS.map((m, idx) => (
							<li key={idx} className="rounded-2xl border border-[#FFE4D6] bg-white p-4 text-[14px] leading-relaxed text-[#2D3748]/85">{m}</li>
						))}
					</ul>
				</section>

				{/* Related glossary */}
				{relatedGlossary.length > 0 && (
					<section aria-labelledby="vs-glossary" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Related glossary</div>
						<h2 id="vs-glossary" className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]">Terms used in this comparison</h2>
						<ul className="mt-5 flex flex-wrap gap-2">
							{relatedGlossary.map((g) => (
								<li key={g.id}>
									<Link href={`/glossary/${g.id}`} className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">{g.term} <span aria-hidden>→</span></Link>
								</li>
							))}
						</ul>
					</section>
				)}

				<FAQBlock items={faqs} />

				{/* Adjacent comparisons */}
				{adjacent.length > 0 && (
					<section aria-labelledby="vs-adj" className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Adjacent comparisons</div>
						<h2 id="vs-adj" className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]">More like this</h2>
						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{adjacent.map((c) => (
								<li key={c.slug}>
									<Link href={`/vs/${c.slug}`} className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">
										{c.a.label} vs {c.b.label}
										<div className="mt-1 text-[12px] text-[#5A5A5A]">For {c.audienceLabel}</div>
									</Link>
								</li>
							))}
						</ul>
					</section>
				)}

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />

				<CTABlock variant="audit" headline={entry.ctaText} body={`We'll give you a 30-minute, no-slides read on whether ${entry.a.shortName} or ${entry.b.shortName} (or a hybrid) fits your stage and unit economics. Even if you don't engage us.`} primaryHref={entry.primaryHref} primaryLabel="Book a free 30-min audit" />

				<AuthorCard person={DEFAULT_AUTHOR} name={DEFAULT_AUTHOR.name} role={DEFAULT_AUTHOR.role} bio={`${DEFAULT_AUTHOR.bio} Frameleads has run ${entry.a.label.toLowerCase()} and ${entry.b.label.toLowerCase()} engagements across India and global priority markets.`} linkedin={DEFAULT_AUTHOR.linkedin} updatedAt={today} />

				<InboundLinksHint count={adjacent.length + relatedGlossary.length} />
			</main>
		</>
	);
}
