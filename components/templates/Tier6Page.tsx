import Link from "next/link";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { Breadcrumb } from "./Breadcrumb";
import { KeyPointsBlock } from "./KeyPointsBlock";
import { DefinitionBlock } from "./DefinitionBlock";
import { FAQBlock } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { SchemaInjector } from "./SchemaInjector";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { ReferencesBlock } from "./ReferencesBlock";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import type { QuestionEntry } from "@/lib/data/questions";
import { buildQuestionContent } from "@/lib/data/question-content";

type Props = {
	entry: QuestionEntry;
	url: string;
	related: CellLink[];
};

const KIND_BREADCRUMB: Record<string, { href: string; label: string }> = {
	"how-to": { href: "/how-to", label: "How-to guides" },
	"what-is": { href: "/what-is", label: "What-is definitions" },
	why: { href: "/why", label: "Why-rationale guides" },
	"is-it": { href: "/is-it", label: "Is-it decision guides" },
	best: { href: "/best", label: "Best-of guides" },
	"how-much": { href: "/how-much", label: "How-much pricing guides" },
};

const KIND_BADGE: Record<string, string> = {
	"how-to": "How-to",
	"what-is": "What is",
	why: "Why",
	"is-it": "Is it",
	best: "Best",
	"how-much": "How much",
};

export function Tier6Page({ entry, url, related }: Props) {
	const today = new Date().toISOString().slice(0, 10);
	const content = buildQuestionContent(entry);
	const crumb = KIND_BREADCRUMB[entry.kind] ?? KIND_BREADCRUMB["how-to"];
	const badge = KIND_BADGE[entry.kind] ?? entry.kind;

	const schema: Record<string, unknown>[] = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: entry.title,
			description: entry.intent,
			mainEntityOfPage: url,
			datePublished: `${entry.year}-01-15`,
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
			about: entry.tags.map((t) => ({ "@type": "Thing", name: t })),
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: content.extendedFaqs.map((f) => ({
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
				{ "@type": "ListItem", position: 2, name: crumb.label, item: `https://frameleads.com${crumb.href}` },
				{ "@type": "ListItem", position: 3, name: entry.title, item: url },
			],
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

	if (entry.kind === "how-to" && entry.steps.length > 0) {
		schema.push({
			"@context": "https://schema.org",
			"@type": "HowTo",
			name: entry.title,
			description: entry.intent,
			url,
			step: entry.steps.map((s, idx) => ({
				"@type": "HowToStep",
				position: idx + 1,
				name: s.name,
				text: s.text,
			})),
		});
	}

	if (entry.kind === "what-is") {
		schema.push({
			"@context": "https://schema.org",
			"@type": "DefinedTerm",
			name: entry.title,
			description: entry.intent,
			inDefinedTermSet: "https://frameleads.com/glossary",
		});
	}

	if (entry.kind === "best") {
		schema.push({
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: entry.title,
			numberOfItems: entry.steps.length,
			itemListElement: entry.steps.map((s, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: s.name,
			})),
		});
	}

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main id="main">
				{/* ─── Hero ─── */}
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1000px_300px_at_25%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-8 pb-10 sm:pt-12 sm:pb-14">
						<Breadcrumb
							items={[
								{ href: "/", label: "Home" },
								crumb,
								{ label: entry.title },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{badge}
						</div>
						<h1 className="mt-4 font-poppins text-[32px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{entry.title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{content.leadParagraph}{" "}
							<span className="text-[#2D3748]/80">Built for {entry.audience}.</span>
						</p>
					</div>
				</header>

				<DefinitionBlock>{entry.intent}</DefinitionBlock>
				<KeyPointsBlock bullets={content.extendedTldr} />

				{/* ─── Extended context ─── */}
				<section
					aria-labelledby="context-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-9"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Context
					</div>
					<h2
						id="context-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						What this page is, and how to use it
					</h2>
					<div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#2D3748]/90">
						{content.contextParagraphs.map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
				</section>

				{/* ─── Why this matters ─── */}
				<section
					aria-labelledby="why-matters-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-9"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Why this matters
					</div>
					<h2
						id="why-matters-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Why this matters in 2026
					</h2>
					<div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#2D3748]/90">
						{content.whyItMatters.map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
				</section>

				{/* ─── Main section (kind-specific) ─── */}
				<section
					id="main"
					aria-labelledby="main-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						{badge} · core
					</div>
					<h2
						id="main-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						{content.mainHeading}
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">{content.mainIntro}</p>
					<div className="mt-6 space-y-4">
						{content.mainRows.map((row, idx) => (
							<article
								key={idx}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">
									{row.heading}
								</h3>
								{row.body && (
									<p className="mt-2 text-[14.5px] leading-relaxed text-[#2D3748]/85">
										{row.body}
									</p>
								)}
								{row.bullets && row.bullets.length > 0 && (
									<ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-[#2D3748]/85">
										{row.bullets.map((b, j) => (
											<li key={j}>{b}</li>
										))}
									</ul>
								)}
							</article>
						))}
					</div>
				</section>

				{/* ─── Common mistakes ─── */}
				<section
					aria-labelledby="mistakes-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Common mistakes
					</div>
					<h2
						id="mistakes-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						What goes wrong — and how to spot it early
					</h2>
					<ul className="mt-5 space-y-3">
						{content.commonMistakes.map((m, idx) => (
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
					aria-labelledby="metrics-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Metrics
					</div>
					<h2
						id="metrics-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						What to actually track
					</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2">
						{content.metrics.map((m, idx) => (
							<li
								key={idx}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-4 text-[14px] leading-relaxed text-[#2D3748]/85"
							>
								{m}
							</li>
						))}
					</ul>
				</section>

				{/* ─── Tools / stack ─── */}
				<section
					aria-labelledby="tools-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Stack
					</div>
					<h2
						id="tools-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Tools + channels we use here
					</h2>
					<ul className="mt-5 space-y-3">
						{content.tools.map((t, idx) => (
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

				{/* ─── Industry adaptations ─── */}
				{content.industryAdaptations.length > 0 && (
					<section
						aria-labelledby="industry-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Industry adaptations
						</div>
						<h2
							id="industry-heading"
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							How this changes per industry
						</h2>
						<ul className="mt-5 space-y-3">
							{content.industryAdaptations.map((a, idx) => (
								<li
									key={idx}
									className="rounded-2xl border border-[#FFE4D6] bg-white p-4"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">
										{a.href ? (
											<Link href={a.href} className="hover:text-[#FF6B35]">
												{a.label} <span aria-hidden>→</span>
											</Link>
										) : (
											a.label
										)}
									</div>
									<div className="mt-1 text-[14px] leading-relaxed text-[#5A5A5A]">{a.body}</div>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* ─── Geo adaptations ─── */}
				{content.geoAdaptations.length > 0 && (
					<section
						aria-labelledby="geo-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Geo adaptations
						</div>
						<h2
							id="geo-heading"
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							How this changes per location
						</h2>
						<ul className="mt-5 space-y-3">
							{content.geoAdaptations.map((a, idx) => (
								<li
									key={idx}
									className="rounded-2xl border border-[#FFE4D6] bg-white p-4"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">
										{a.href ? (
											<Link href={a.href} className="hover:text-[#FF6B35]">
												{a.label} <span aria-hidden>→</span>
											</Link>
										) : (
											a.label
										)}
									</div>
									<div className="mt-1 text-[14px] leading-relaxed text-[#5A5A5A]">{a.body}</div>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* ─── Related glossary ─── */}
				{content.relatedGlossary.length > 0 && (
					<section
						aria-labelledby="glossary-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Related glossary terms
						</div>
						<h2
							id="glossary-heading"
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							Terms used on this page
						</h2>
						<ul className="mt-5 flex flex-wrap gap-2">
							{content.relatedGlossary.map((g) => (
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

				<FAQBlock items={content.extendedFaqs} />

				{/* ─── Adjacent questions ─── */}
				{content.adjacentQuestions.length > 0 && (
					<section
						aria-labelledby="adjacent-q-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Adjacent questions
						</div>
						<h2
							id="adjacent-q-heading"
							className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
						>
							Continue along this thread
						</h2>
						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{content.adjacentQuestions.map((q) => (
								<li key={q.href}>
									<Link
										href={q.href}
										className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
									>
										{q.label} <span aria-hidden>→</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* ─── Adjacent guides ─── */}
				{content.adjacentGuides.length > 0 && (
					<section
						aria-labelledby="adjacent-g-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Deeper reading
						</div>
						<h2
							id="adjacent-g-heading"
							className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
						>
							Long-form guides on related topics
						</h2>
						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{content.adjacentGuides.map((g) => (
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

				<RelatedCells heading="Related programmatic cells" links={related} />

				<ReferencesBlock references={content.references} />

				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />

				<CTABlock
					variant="audit"
					headline={`Want help executing this for your business?`}
					body={`Frameleads runs this playbook for live clients. Free 30-min audit — three concrete moves for your specific stage, even if you don't engage us.`}
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This page is part of the open Frameleads operator library.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={today}
				/>

				<InboundLinksHint count={related.length} />
			</main>
			<Footer />
		</>
	);
}
