import { TLDRBlock } from "./TLDRBlock";
import { LocalContextBlock } from "./LocalContextBlock";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { TimestampStamp } from "./TimestampStamp";
import { Breadcrumb } from "./Breadcrumb";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import type { QuestionEntry } from "@/lib/data/questions";
import type { Geo } from "@/lib/data";
import { buildQuestionContent } from "@/lib/data/question-content";
import Link from "next/link";

const PUBLISHED_AT = "2025-12-01";

type Props = {
	question: QuestionEntry;
	geo: Geo;
	url: string;
	relatedQuestionsInGeo: CellLink[];
	relatedGeosForQuestion: CellLink[];
};

function buildGeoFaqs(question: QuestionEntry, geo: Geo): FAQItem[] {
	const tail: FAQItem[] = [
		{
			question: `Anything specific about ${geo.name} that changes this?`,
			answer: `${geo.name}'s industry mix concentrates around ${geo.topIndustries.slice(0, 3).join(", ")}, which shifts both search demand and channel-mix economics. ${geo.landmarks.length ? `Key corridors in ${geo.name}: ${geo.landmarks.slice(0, 3).join(", ")}.` : ""} Apply the playbook above with these local realities in mind — bidding norms, language preferences, and competitor density vary by city.`,
		},
		{
			question: `Where in ${geo.name} should we focus first?`,
			answer: `${geo.landmarks.length ? `Concentrate first on ${geo.landmarks.slice(0, 2).join(" and ")} — these corridors have the highest concentration of ${geo.topIndustries.slice(0, 2).join(" and ")} businesses, which dominate ${geo.name}'s economic mix.` : `Concentrate on the city's primary business corridor first; expand to suburbs once you've validated demand.`} Map your ICP to the corridor density before media planning.`,
		},
	];
	const baseFaqs = (question.faqs || []).slice(0, 4);
	return [...baseFaqs, ...tail];
}

export function Tier14QuestionGeo({
	question,
	geo,
	url,
	relatedQuestionsInGeo,
	relatedGeosForQuestion,
}: Props) {
	const augmented = buildQuestionContent(question);
	const geoFaqs = buildGeoFaqs(question, geo);
	const faqs = [...geoFaqs.slice(0, 2), ...augmented.extendedFaqs].slice(0, 15);
	const dateModified = new Date().toISOString().slice(0, 10);

	const heroTitle = `${question.title} — in ${geo.name}`;
	const heroSubhead = `${question.intent} Calibrated to ${geo.name} — local industry mix: ${geo.topIndustries.slice(0, 3).join(", ")}.`;

	const tldr = [
		...(question.tldr || []).slice(0, 2),
		`Local angle for ${geo.name}: ${geo.topIndustries.slice(0, 2).join(" + ")}.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: heroTitle,
			description: question.intent,
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
			about: [
				{ "@type": "Place", name: geo.name, ...(geo.country ? { containedInPlace: geo.country } : {}) },
			],
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
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "https://frameleads.com",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: question.kind === "what-is" ? "Definitions" : question.kind === "how-to" ? "How-to" : question.kind === "best" ? "Best of" : question.kind === "why" ? "Why" : question.kind === "how-much" ? "Cost" : "Decision guides",
					item: `https://frameleads.com/${question.kind}`,
				},
				{
					"@type": "ListItem",
					position: 3,
					name: geo.name,
					item: `https://frameleads.com/digital-marketing-in-${geo.id}`,
				},
				{
					"@type": "ListItem",
					position: 4,
					name: heroTitle,
					item: url,
				},
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
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_280px_at_75%_-30%,rgba(255,107,53,0.18),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{
									label:
										question.kind === "what-is"
											? "What is"
											: question.kind === "how-to"
												? "How to"
												: question.kind === "best"
													? "Best"
													: question.kind === "why"
														? "Why"
														: question.kind === "how-much"
															? "How much"
															: "Is it",
									href: `/${question.kind}`,
								},
								{ label: geo.name, href: `/digital-marketing-in-${geo.id}` },
								{ label: question.title },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{question.kind === "what-is" ? "Definition" : question.kind === "how-to" ? "Playbook" : question.kind === "best" ? "Comparison" : question.kind === "why" ? "Rationale" : question.kind === "how-much" ? "Cost guide" : "Decision"} · {geo.name}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{heroTitle}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{heroSubhead}
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href={`/free-marketing-audit?geo=${geo.id}&cta=tier14-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free {geo.name} audit
								<span aria-hidden>→</span>
							</a>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				<LocalContextBlock
					geoName={geo.name}
					state={geo.state}
					country={geo.country}
					population={geo.population}
					topIndustries={geo.topIndustries}
					landmarks={geo.landmarks}
					intro={`This guide applies the playbook to ${geo.name}. Local economic mix: ${geo.topIndustries.slice(0, 4).join(", ")}.`}
				/>

				{question.steps && question.steps.length > 0 ? (
					<section className="mx-auto max-w-3xl px-6 py-10">
						<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
							{question.kind === "how-to" ? `Step-by-step in ${geo.name}` : `Inside this topic in ${geo.name}`}
						</h2>
						<ol className="mt-6 space-y-4">
							{question.steps.map((s, idx) => (
								<li
									key={`${s.name}-${idx}`}
									className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)]"
								>
									<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
										Step {String(idx + 1).padStart(2, "0")}
									</div>
									<h3 className="mt-1 font-poppins text-[18px] font-semibold text-[#2D3748]">
										{s.name}
									</h3>
									<p className="mt-2 text-[15px] leading-relaxed text-[#2D3748]/85">
										{s.text}
									</p>
								</li>
							))}
						</ol>
					</section>
				) : null}

				{/* ─── Common mistakes ─── */}
				<section
					aria-labelledby="t14-mistakes-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Common mistakes
					</div>
					<h2
						id="t14-mistakes-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						What goes wrong in {geo.name}
					</h2>
					<ul className="mt-5 space-y-3">
						{augmented.commonMistakes.map((m, idx) => (
							<li
								key={idx}
								className="flex items-start gap-3 rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-4"
							>
								<span
									aria-hidden
									className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#FF6B35]"
								>
									{idx + 1}
								</span>
								<span className="text-[14.5px] leading-relaxed text-[#2D3748]/90">{m}</span>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Metrics ─── */}
				<section
					aria-labelledby="t14-metrics-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Metrics
					</div>
					<h2
						id="t14-metrics-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						What to track for {geo.name}
					</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2">
						{augmented.metrics.map((m, idx) => (
							<li
								key={idx}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-4 text-[14px] leading-relaxed text-[#2D3748]/85"
							>
								{m}
							</li>
						))}
					</ul>
				</section>

				{/* ─── Tools ─── */}
				<section
					aria-labelledby="t14-tools-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Stack
					</div>
					<h2
						id="t14-tools-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Tools + channels we use here
					</h2>
					<ul className="mt-5 space-y-3">
						{augmented.tools.map((t, idx) => (
							<li
								key={idx}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-4"
							>
								<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">{t.name}</div>
								<div className="mt-1 text-[14px] leading-relaxed text-[#5A5A5A]">{t.note}</div>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Related glossary ─── */}
				{augmented.relatedGlossary.length > 0 && (
					<section
						aria-labelledby="t14-glossary-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Related glossary terms
						</div>
						<h2
							id="t14-glossary-heading"
							className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
						>
							Terms used on this page
						</h2>
						<ul className="mt-5 flex flex-wrap gap-2">
							{augmented.relatedGlossary.map((g) => (
								<li key={g.href}>
									<Link
										href={g.href}
										className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
									>
										{g.label} <span aria-hidden>→</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				)}

				<CTABlock
					variant="audit"
					headline={`Want this scoped to ${geo.name}?`}
					body={`30 minutes, no slides. We'll review your setup against ${geo.name}-specific search demand, competitor density, and channel mix — and hand you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?geo=${geo.id}&cta=tier14-mid`}
					primaryLabel={`Book a ${geo.name} audit`}
				/>

				<FAQBlock items={faqs} />

				{/* ─── Adjacent guides ─── */}
				{augmented.adjacentGuides.length > 0 && (
					<section
						aria-labelledby="t14-adj-guides"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Deeper reading
						</div>
						<h2
							id="t14-adj-guides"
							className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
						>
							Long-form guides on related topics
						</h2>
						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{augmented.adjacentGuides.map((g) => (
								<li key={g.href}>
									<Link
										href={g.href}
										className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
									>
										{g.label} <span aria-hidden>→</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				)}

				{relatedQuestionsInGeo.length > 0 ? (
					<RelatedCells
						heading={`Other guides for ${geo.name}`}
						links={relatedQuestionsInGeo}
					/>
				) : null}

				{relatedGeosForQuestion.length > 0 ? (
					<RelatedCells
						heading={`This guide for other cities`}
						links={relatedGeosForQuestion}
					/>
				) : null}

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp
					updatedAt={dateModified}
					reviewedBy={DEFAULT_AUTHOR.name}
				/>

				<CTABlock
					variant="audit"
					headline={`Run growth marketing in ${geo.name} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current marketing against the ${geo.name} benchmarks above and tell you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?geo=${geo.id}&cta=tier14-bottom`}
					primaryLabel={`Get a free ${geo.name} audit`}
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This page applies the question "${question.title}" to ${geo.name}; numbers cited come from live client data refreshed quarterly.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
		</>
	);
}
