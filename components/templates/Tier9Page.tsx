import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
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
import type { ComparisonEntry } from "@/lib/data/comparisons";

type Props = {
	entry: ComparisonEntry;
	url: string;
};

export function Tier9Page({ entry, url }: Props) {
	const faqs: FAQItem[] = entry.faqs;
	const headline = `${entry.a.label} vs ${entry.b.label}`;

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${headline} — Frameleads Decision Guide`,
			mainEntityOfPage: url,
			datePublished: new Date().toISOString().slice(0, 10),
			dateModified: new Date().toISOString().slice(0, 10),
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
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: `${headline} comparison`,
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
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "https://frameleads.com",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Comparisons",
					item: "https://frameleads.com/vs",
				},
				{
					"@type": "ListItem",
					position: 3,
					name: headline,
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
				cssSelector: [".tldr", ".faq-answer"],
			},
		},
	];

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
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<nav
							aria-label="Breadcrumb"
							className="mb-4 text-sm text-[#5A5A5A]"
						>
							<ol className="flex items-center gap-2">
								<li>
									<a
										href="/"
										className="hover:text-[#FF6B35] transition-colors"
									>
										Home
									</a>
								</li>
								<li aria-hidden>/</li>
								<li>
									<a
										href="/vs"
										className="hover:text-[#FF6B35] transition-colors"
									>
										Comparisons
									</a>
								</li>
								<li aria-hidden>/</li>
								<li className="text-[#2D3748]">
									{entry.a.shortName} vs {entry.b.shortName}
								</li>
							</ol>
						</nav>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Decision guide
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{headline}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{entry.intent}{" "}
							<span className="text-[#2D3748]/80">
								Built for {entry.audienceLabel}.
							</span>
						</p>
					</div>
				</header>
				<TLDRBlock bullets={entry.tldr} />
				<ScorecardTable
					aLabel={entry.a.label}
					bLabel={entry.b.label}
					rows={entry.scorecard}
				/>
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
				<FAQBlock items={faqs} />
				<TimestampStamp
					updatedAt={new Date().toISOString().slice(0, 10)}
					reviewedBy="Frameleads Editorial Team"
				/>
				<CTABlock
					variant="audit"
					headline={entry.ctaText}
					body={`We'll give you a 30-minute, no-slides read on whether ${entry.a.shortName} or ${entry.b.shortName} (or a hybrid) fits your stage and unit economics. Even if you don't engage us.`}
					primaryHref={entry.primaryHref}
					primaryLabel="Book a free 30-min audit"
				/>
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads has run ${entry.a.label.toLowerCase()} and ${entry.b.label.toLowerCase()} engagements across India and global priority markets. Comparison data refreshed quarterly from live client benchmarks.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={new Date().toISOString().slice(0, 10)}
				/>
				<InboundLinksHint count={6} />
			</main>
			<Footer />
		</>
	);
}
