import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { HeroGlossary } from "./HeroGlossary";
import { TLDRBlock } from "./TLDRBlock";
import { DefinitionBlock } from "./DefinitionBlock";
import { FormulaCard } from "./FormulaCard";
import { ListBlock } from "./ListBlock";
import { Prose } from "./Prose";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedTerms } from "./RelatedTerms";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { getGlossaryEntry, type GlossaryEntry } from "@/lib/data/glossary";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { industries } from "@/lib/data";
import { questions } from "@/lib/data/questions";
import Link from "next/link";

type Props = {
	entry: GlossaryEntry;
	url: string;
};

function buildFaqs(entry: GlossaryEntry): FAQItem[] {
	const faqs: FAQItem[] = [];
	const term = entry.term;
	if (entry.indiaBenchmarks && entry.indiaBenchmarks.length) {
		faqs.push({
			question: `What's a typical ${term} value in India?`,
			answer: `India 2026 benchmarks vary by category: ${entry.indiaBenchmarks.slice(0, 3).join("; ")}. Bands compress in saturated CPM regimes and widen as products move from impulse to considered. The right benchmark for your business depends on stage, gross margin, and channel mix.`,
		});
	}
	if (entry.commonMistakes && entry.commonMistakes.length) {
		faqs.push({
			question: `What are the most common mistakes when tracking ${term}?`,
			answer: `Three mistakes recur most often: ${entry.commonMistakes.slice(0, 3).join("; ")}. The simplest defense is to define each metric explicitly in your reporting playbook and avoid mixing definitions across teams.`,
		});
	}
	faqs.push({
		question: `How does ${term} relate to other unit-economics metrics?`,
		answer: `${term} is most useful in context. Pair it with ${entry.relatedTerms.slice(0, 2).map((t) => t.toUpperCase()).join(" and ")} to build a complete picture. ${term} alone can mislead — the relationship between metrics matters more than any single number.`,
	});
	faqs.push({
		question: `Should I optimize ${term} or accept industry-standard values?`,
		answer: `Optimization depends on your stage. Early-stage businesses often have ${term} values outside healthy bands and need to fix structural issues (audience, creative, retention) before chasing the metric. Established businesses can compound through marginal improvements. Frameleads' Growth System maps which lever moves which metric in your specific category.`,
	});
	return faqs;
}

export function Tier8GlossaryPage({ entry, url }: Props) {
	const faqs = buildFaqs(entry);
	const related = entry.relatedTerms
		.map((id) => {
			const e = getGlossaryEntry(id);
			if (!e) return null;
			return { slug: e.id, label: e.term };
		})
		.filter((x): x is { slug: string; label: string } => x !== null);

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "DefinedTerm",
			name: entry.term,
			alternateName: entry.expansion,
			description: entry.definition,
			inDefinedTermSet: "https://frameleads.com/glossary",
			url,
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `What is ${entry.term} (${entry.expansion})?`,
			mainEntityOfPage: url,
			datePublished: new Date().toISOString().slice(0, 10),
			dateModified: new Date().toISOString().slice(0, 10),
			author: {
				"@type": "Person",
				name: "Frameleads Editorial Team",
				url: "https://frameleads.com/our-team",
			},
			publisher: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
				logo: {
					"@type": "ImageObject",
					url: "https://frameleads.com/favicon.png",
				},
			},
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
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".direct-answer", ".tldr", ".faq-answer"],
			},
		},
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main id="main">
				<HeroGlossary
					term={entry.term}
					expansion={entry.expansion}
					subhead="Definition, formula, India benchmarks, and the operator-grade nuance behind it."
				/>
				<DefinitionBlock>{entry.definition}</DefinitionBlock>
				<TLDRBlock bullets={entry.tldr} />
				{entry.formula ? (
					<FormulaCard
						prose={entry.formulaProse ?? ""}
						formula={entry.formula}
						example={
							entry.exampleInput && entry.exampleOutput
								? { input: entry.exampleInput, output: entry.exampleOutput }
								: undefined
						}
					/>
				) : null}
				<Prose>
					<h2>The operator's read on {entry.term}</h2>
					<p>{entry.extendedExplanation}</p>
				</Prose>
				{entry.indiaBenchmarks ? (
					<ListBlock
						heading={`India 2026 benchmarks — ${entry.term}`}
						items={entry.indiaBenchmarks}
					/>
				) : null}
				{entry.commonMistakes ? (
					<ListBlock
						heading="Common mistakes to avoid"
						items={entry.commonMistakes}
					/>
				) : null}
				<FAQBlock items={faqs} />

				{/* Industry adaptations grid — links to Tier 15 cells */}
				<section
					aria-labelledby="gloss-industries"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Industry adaptations
					</div>
					<h2
						id="gloss-industries"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						How {entry.term} behaves per industry
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						{entry.term} is a universal metric, but its band, drivers, and optimisation levers vary by category. Drill into the industry-specific version below for the deep view.
					</p>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{industries.slice(0, 12).map((ind) => (
							<li key={ind.id}>
								<Link
									href={`/${ind.id}/${entry.id}`}
									className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"
								>
									<div className="font-poppins text-[14px] font-semibold text-[#2D3748]">
										{entry.term} for {ind.label}
									</div>
									<div className="mt-1 text-[12px] text-[#5A5A5A]">CAC {ind.avgCacInr} ₹ · CPC {ind.avgCpcInr} ₹</div>
									<div className="mt-2 text-[12px] font-semibold text-[#FF6B35]">
										Open <span aria-hidden>→</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* Adjacent questions */}
				{(() => {
					const termLower = entry.term.toLowerCase();
					const adjacentQs = questions
						.filter(
							(q) =>
								q.title.toLowerCase().includes(termLower) ||
								q.intent.toLowerCase().includes(termLower) ||
								q.tags.includes(entry.id),
						)
						.slice(0, 8);
					if (adjacentQs.length === 0) return null;
					return (
						<section
							aria-labelledby="gloss-adj-q"
							className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
						>
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								Adjacent questions
							</div>
							<h2
								id="gloss-adj-q"
								className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
							>
								Questions about {entry.term}
							</h2>
							<ul className="mt-5 grid gap-2 sm:grid-cols-2">
								{adjacentQs.map((q) => (
									<li key={q.slug}>
										<Link
											href={`/${q.kind}/${q.slug}`}
											className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
										>
											{q.title}
										</Link>
									</li>
								))}
							</ul>
						</section>
					);
				})()}

				{/* Adjacent guides */}
				<section
					aria-labelledby="gloss-adj-g"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Deeper reading
					</div>
					<h2
						id="gloss-adj-g"
						className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
					>
						Long-form guides on related topics
					</h2>
					<ul className="mt-5 grid gap-2 sm:grid-cols-2">
						<li>
							<Link
								href={`/what-is/what-is-${entry.id}`}
								className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								What is {entry.term}? (long-form definition page) <span aria-hidden>→</span>
							</Link>
						</li>
						<li>
							<Link
								href="/resources/guides/performance-marketing"
								className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								Performance marketing — full guide <span aria-hidden>→</span>
							</Link>
						</li>
						<li>
							<Link
								href="/tools"
								className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								Calculator that uses this metric <span aria-hidden>→</span>
							</Link>
						</li>
						<li>
							<Link
								href="/resources"
								className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								Full resources library <span aria-hidden>→</span>
							</Link>
						</li>
					</ul>
				</section>

				<RelatedTerms terms={related} />
				<ReferencesBlock references={referencesFor({})} />
				<TimestampStamp
					updatedAt={new Date().toISOString().slice(0, 10)}
					reviewedBy={DEFAULT_AUTHOR.name}
				/>
				<CTABlock variant={entry.ctaVariant} />
				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} Glossary entries reviewed quarterly against live engagement data.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={new Date().toISOString().slice(0, 10)}
				/>
				<InboundLinksHint count={related.length} />
			</main>
			<Footer />
		</>
	);
}
