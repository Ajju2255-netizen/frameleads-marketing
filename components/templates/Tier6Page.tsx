import Link from "next/link";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { Breadcrumb } from "./Breadcrumb";
import { KeyPointsBlock } from "./KeyPointsBlock";
import { DefinitionBlock } from "./DefinitionBlock";
import { Prose } from "./Prose";
import { ListBlock } from "./ListBlock";
import { FAQBlock } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { SchemaInjector } from "./SchemaInjector";
import { RelatedCells, type CellLink } from "./RelatedCells";
import type { QuestionEntry } from "@/lib/data/questions";

type Props = {
	entry: QuestionEntry;
	url: string;
	related: CellLink[];
};

export function Tier6Page({ entry, url, related }: Props) {
	const today = new Date().toISOString().slice(0, 10);
	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: entry.title,
			mainEntityOfPage: url,
			datePublished: today,
			dateModified: today,
			author: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
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
		entry.kind === "how-to"
			? {
					"@context": "https://schema.org",
					"@type": "HowTo",
					name: entry.title,
					url,
					step: entry.steps.map((s, idx) => ({
						"@type": "HowToStep",
						position: idx + 1,
						name: s.name,
						text: s.text,
					})),
				}
			: null,
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: entry.faqs.map((f) => ({
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
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://frameleads.com" },
				{ "@type": "ListItem", position: 2, name: "How-to guides", item: "https://frameleads.com/how-to" },
				{ "@type": "ListItem", position: 3, name: entry.title, item: url },
			],
		},
	].filter(Boolean) as Record<string, unknown>[];

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1000px_300px_at_25%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-8 pb-10 sm:pt-12 sm:pb-14">
						<Breadcrumb
							items={[
								{ href: "/", label: "Home" },
								entry.kind === "what-is"
									? { href: "/what-is", label: "What-is definitions" }
									: entry.kind === "why"
										? { href: "/why", label: "Why-rationale guides" }
										: entry.kind === "is-it"
											? { href: "/is-it", label: "Is-it decision guides" }
											: entry.kind === "best"
												? { href: "/best", label: "Best-of guides" }
												: entry.kind === "how-much"
													? { href: "/how-much", label: "How-much pricing guides" }
													: { href: "/how-to", label: "How-to guides" },
								{ label: entry.title },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span
								aria-hidden
								className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
							/>
							{entry.kind === "how-to"
								? "How-to"
								: entry.kind === "what-is"
									? "What is"
									: entry.kind === "why"
										? "Why"
										: entry.kind === "is-it"
											? "Is it"
											: entry.kind === "best"
												? "Best"
												: entry.kind === "how-much"
													? "How much"
													: entry.kind}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{entry.title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{entry.intent}{" "}
							<span className="text-[#2D3748]/80">
								Built for {entry.audience}.
							</span>
						</p>
					</div>
				</header>

				<DefinitionBlock>{entry.intent}</DefinitionBlock>
				<KeyPointsBlock bullets={entry.tldr} />

				{entry.steps.length > 0 ? (
					<section className="mx-auto max-w-3xl px-6 py-9">
						<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Step-by-step
						</div>
						<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
							The {entry.steps.length}-step playbook
						</h2>
						<ol className="mt-6 space-y-3">
							{entry.steps.map((s, idx) => (
								<li
									key={s.name}
									className="relative flex gap-4 rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)]"
								>
									<span
										aria-hidden
										className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB088] font-poppins text-[13px] font-bold text-white shadow-[0_3px_10px_rgba(255,107,53,0.30)]"
									>
										{idx + 1}
									</span>
									<div className="min-w-0 flex-1">
										<h3 className="font-poppins text-[16px] sm:text-[17px] font-semibold text-[#2D3748]">
											{s.name}
										</h3>
										<p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-[#2D3748]/85">
											{s.text}
										</p>
									</div>
								</li>
							))}
						</ol>
					</section>
				) : null}

				<FAQBlock items={entry.faqs} />

				<RelatedCells heading="Related guides" links={related} />

				<TimestampStamp updatedAt={today} reviewedBy="Frameleads Editorial Team" />

				<CTABlock
					variant="audit"
					headline={`Want help executing this for your business?`}
					body={`Frameleads runs the playbook above for live clients. Get a free 30-minute audit — we'll point at the three highest-leverage moves for your specific stage.`}
				/>

				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads has executed this playbook across multiple ${entry.audience} engagements. Numbers cited come from live client data refreshed quarterly.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={today}
				/>

				<InboundLinksHint count={related.length} />
			</main>
			<Footer />
		</>
	);
}
