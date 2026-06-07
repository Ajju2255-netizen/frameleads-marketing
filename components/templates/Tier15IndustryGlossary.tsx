import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { TLDRBlock } from "./TLDRBlock";
import { DefinitionBlock } from "./DefinitionBlock";
import { FormulaCard } from "./FormulaCard";
import { ListBlock } from "./ListBlock";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { RelatedTerms } from "./RelatedTerms";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { TimestampStamp } from "./TimestampStamp";
import { Breadcrumb } from "./Breadcrumb";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import type { GlossaryEntry } from "@/lib/data/glossary";
import type { Industry } from "@/lib/data";

const PUBLISHED_AT = "2025-12-01";

type Props = {
	entry: GlossaryEntry;
	industry: Industry;
	url: string;
	relatedTermsInIndustry: CellLink[];
	relatedIndustriesForTerm: CellLink[];
};

function buildIndustryFaqs(entry: GlossaryEntry, industry: Industry): FAQItem[] {
	const term = entry.term;
	return [
		{
			question: `What's a typical ${term} for ${industry.label}?`,
			answer: `${industry.label} ${term} runs in the band ${industry.avgCpcInr} ₹ CPC / ${industry.avgCacInr} ₹ CAC. ${entry.indiaBenchmarks && entry.indiaBenchmarks.length ? `Wider India benchmarks: ${entry.indiaBenchmarks.slice(0, 2).join("; ")}.` : ""} ${industry.name}-specific drivers: ${industry.topPainPoints.slice(0, 2).join(", ")}.`,
		},
		{
			question: `How does ${industry.name} change how you optimize ${term}?`,
			answer: `${industry.name} businesses optimize ${term} via ${industry.primaryServices.slice(0, 3).join(", ")} primarily. The category's unit economics — average CAC ${industry.avgCacInr} ₹, repeat-purchase dynamics, and ${industry.topPainPoints[0]} — constrain which levers move ${term} fastest. Generic ${term} advice ignores these constraints.`,
		},
		{
			question: `Which ${industry.name} ${term} mistakes does Frameleads see most?`,
			answer: `Across ${industry.label} engagements, the top recurring mistakes are: ${entry.commonMistakes && entry.commonMistakes.length ? entry.commonMistakes.slice(0, 2).join("; ") + "; " : ""}and treating ${term} as an isolated number rather than connecting it to ${entry.relatedTerms.slice(0, 2).map((t) => t.toUpperCase()).join(" and ")}.`,
		},
		{
			question: `What's the fastest way to improve ${term} for a ${industry.name} business?`,
			answer: `Three levers move ${term} for ${industry.name}: (1) tighter ICP definition so paid spend hits the right audience; (2) creative supply pipelines tuned to ${industry.name}-specific buyer norms; (3) retention plumbing so each acquired customer compounds the metric. The 30-min audit identifies which of these three is the bottleneck in your specific funnel.`,
		},
	];
}

export function Tier15IndustryGlossary({
	entry,
	industry,
	url,
	relatedTermsInIndustry,
	relatedIndustriesForTerm,
}: Props) {
	const faqs = buildIndustryFaqs(entry, industry);
	const dateModified = new Date().toISOString().slice(0, 10);

	const heroTitle = `${entry.term} for ${industry.label}`;
	const heroSubhead = `${entry.expansion} — applied to ${industry.label}. ${industry.tagline}`;

	const tldr = [
		...(entry.tldr || []).slice(0, 2),
		`${industry.label} band: CPC ${industry.avgCpcInr} ₹ · CAC ${industry.avgCacInr} ₹.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "DefinedTerm",
			name: entry.term,
			alternateName: entry.expansion,
			description: entry.definition,
			inDefinedTermSet: { "@type": "DefinedTermSet", name: "Frameleads Glossary", url: "https://frameleads.com/glossary" },
			url,
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: heroTitle,
			description: entry.definition,
			url,
			datePublished: PUBLISHED_AT,
			dateModified,
			inLanguage: "en-IN",
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
				url: DEFAULT_AUTHOR.url,
			},
			publisher: { "@id": "https://frameleads.com#organization" },
			mainEntityOfPage: { "@type": "WebPage", "@id": url },
			about: [{ "@type": "Audience", name: industry.label }],
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
				{ "@type": "ListItem", position: 2, name: industry.label, item: `https://frameleads.com/${industry.id}-marketing` },
				{ "@type": "ListItem", position: 3, name: "Glossary", item: "https://frameleads.com/glossary" },
				{ "@type": "ListItem", position: 4, name: heroTitle, item: url },
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
			<Navbar />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_280px_at_75%_-30%,rgba(255,107,53,0.18),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: industry.label, href: `/${industry.id}-marketing` },
								{ label: "Glossary", href: "/glossary" },
								{ label: heroTitle },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Definition · {industry.label}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{heroTitle}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{heroSubhead}
						</p>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				<DefinitionBlock>
					{entry.definition} For {industry.label} specifically, this metric sits inside the unit-economics envelope of CPC {industry.avgCpcInr} ₹ and CAC {industry.avgCacInr} ₹, constrained by {industry.topPainPoints.slice(0, 2).join(" and ")}.
				</DefinitionBlock>

				{entry.formula ? (
					<FormulaCard
						formula={entry.formula}
						prose={entry.formulaProse}
						exampleInput={entry.exampleInput}
						exampleOutput={entry.exampleOutput}
					/>
				) : null}

				{entry.indiaBenchmarks && entry.indiaBenchmarks.length ? (
					<ListBlock
						heading={`India ${entry.term} benchmarks`}
						items={entry.indiaBenchmarks}
					/>
				) : null}

				{entry.commonMistakes && entry.commonMistakes.length ? (
					<ListBlock
						heading={`Common ${entry.term} mistakes (${industry.name} edition)`}
						items={entry.commonMistakes}
					/>
				) : null}

				<CTABlock
					variant="audit"
					headline={`Want this ${entry.term} review scoped to your ${industry.name} business?`}
					body={`30 minutes, no slides. We'll examine your ${entry.term.toLowerCase()} setup against ${industry.name}-specific benchmarks and tell you the highest-leverage move to make first.`}
					primaryHref={`/free-marketing-audit?industry=${industry.id}&cta=tier15-mid`}
					primaryLabel={`Book a ${industry.name} audit`}
				/>

				<FAQBlock items={faqs} />

				{entry.relatedTerms.length > 0 ? (
					<RelatedTerms terms={entry.relatedTerms} basePath={`/${industry.id}`} />
				) : null}

				{relatedTermsInIndustry.length > 0 ? (
					<RelatedCells
						heading={`More ${industry.label} metrics & definitions`}
						links={relatedTermsInIndustry}
					/>
				) : null}

				{relatedIndustriesForTerm.length > 0 ? (
					<RelatedCells
						heading={`${entry.term} for other industries`}
						links={relatedIndustriesForTerm}
					/>
				) : null}

				<ReferencesBlock references={referencesFor({ industryId: industry.id })} />

				<TimestampStamp
					updatedAt={dateModified}
					reviewedBy={DEFAULT_AUTHOR.name}
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This page applies ${entry.term} to ${industry.label}; numbers cited come from live client data refreshed quarterly.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
			<Footer />
		</>
	);
}
