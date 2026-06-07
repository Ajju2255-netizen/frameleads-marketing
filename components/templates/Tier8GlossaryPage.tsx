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
				<RelatedTerms terms={related} />
				<TimestampStamp
					updatedAt={new Date().toISOString().slice(0, 10)}
					reviewedBy="Frameleads Editorial Team"
				/>
				<CTABlock variant={entry.ctaVariant} />
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads writes glossary entries from operator experience across 80+ live D2C, SaaS, healthcare, and SMB engagements. Numbers cited are refreshed quarterly.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={new Date().toISOString().slice(0, 10)}
				/>
				<InboundLinksHint count={related.length} />
			</main>
			<Footer />
		</>
	);
}
