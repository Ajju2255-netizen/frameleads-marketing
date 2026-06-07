/**
 * GuidePage — canonical long-form layout for /resources/guides/{slug}.
 *
 * Educational intent (distinct from Tier 3/5/11/Money-page commercial intent).
 * Server-rendered, schema-rich, accessibility-graded.
 *
 * Renders a GuideContent object (built in lib/data/resources.ts):
 *   - Hero: breadcrumb + h1 + dek + dual CTAs
 *   - TLDR
 *   - Table of contents (auto-built from sections)
 *   - Long-form sections: prose + bullets + tables + subsections
 *   - FAQs
 *   - Related links
 *   - References + Timestamp + AuthorCard
 *   - Bottom CTA
 *
 * Schema stack:
 *   Article (educational, Person author + dates)
 *   HowTo (when sections include process steps — captured via guideType)
 *   FAQPage
 *   BreadcrumbList
 *   WebPage(speakable)
 */

import Link from "next/link";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { TimestampStamp } from "./TimestampStamp";
import { AuthorCard } from "./AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import type { GuideContent } from "@/lib/data/resources";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

type Props = {
	slug: string;
	content: GuideContent;
};

function buildSchema(content: GuideContent, slug: string, dateModified: string, faqs: FAQItem[]) {
	const url = `${SITE_URL}/resources/guides/${slug}`;
	const schema: object[] = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: content.title,
			description: content.dek,
			url,
			datePublished: PUBLISHED_AT,
			dateModified,
			inLanguage: "en-IN",
			image: `${SITE_URL}/og-default.png`,
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
				url: DEFAULT_AUTHOR.url,
			},
			publisher: { "@id": `${SITE_URL}#organization` },
			mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				{
					"@type": "ListItem",
					position: 2,
					name: "Resources",
					item: `${SITE_URL}/resources`,
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "Guides",
					item: `${SITE_URL}/resources/guides`,
				},
				{ "@type": "ListItem", position: 4, name: content.title, item: url },
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

	// HowTo schema when the guide includes a process section (any guideType that
	// pulls service-depth process phases — service, service-industry, service-geo).
	if (
		content.guideType === "service" ||
		content.guideType === "service-industry" ||
		content.guideType === "service-geo"
	) {
		const processSection = content.sections.find((s) => s.id === "process");
		if (processSection && processSection.subsections && processSection.subsections.length > 0) {
			schema.push({
				"@context": "https://schema.org",
				"@type": "HowTo",
				name: `${content.title} — process`,
				description: processSection.intro || content.dek,
				step: processSection.subsections.map((sub, idx) => ({
					"@type": "HowToStep",
					position: idx + 1,
					name: sub.heading,
					text: sub.body,
				})),
			});
		}
	}

	return schema;
}

export function GuidePage({ slug, content }: Props) {
	const dateModified = new Date().toISOString().slice(0, 10);
	const faqs: FAQItem[] = content.faqs;
	const schema = buildSchema(content, slug, dateModified, faqs);

	// Pull references seed based on guideType — service-anchored guides get
	// service-specific references; industry-anchored get industry; geo-only
	// get the generic India / global pool.
	const refsServiceId =
		content.guideType === "service" || content.guideType === "service-industry" || content.guideType === "service-geo"
			? slug.split("-")[0] === "seo"
				? "seo-services"
				: slug.split("-for-")[0].split("-in-")[0]
			: undefined;
	const refsIndustryId =
		content.guideType === "industry"
			? slug.replace(/-marketing$/, "")
			: content.guideType === "industry-geo"
				? slug.split("-marketing-in-")[0]
				: content.guideType === "service-industry"
					? slug.split("-for-")[1]
					: undefined;

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main id="main">
				{/* ─── Hero ─── */}
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "Resources", href: "/resources" },
								{ label: "Guides", href: "/resources/guides" },
								{ label: content.title },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Guide · Frameleads Resources
						</div>
						<h1 className="mt-4 font-poppins text-[32px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{content.title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{content.dek}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link
								href={`/free-marketing-audit?source=guide&slug=${slug}&cta=guide-${slug}-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free 30-min audit
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/frameleads-growth-system"
								className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								See our methodology
							</Link>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={content.tldr} />

				{/* ─── Table of Contents ─── */}
				<nav
					aria-labelledby="toc-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-8"
				>
					<div
						id="toc-heading"
						className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]"
					>
						In this guide
					</div>
					<ol className="mt-3 grid gap-2 sm:grid-cols-2 list-decimal list-inside text-[14.5px] text-[#2D3748]/85">
						{content.sections.map((s) => (
							<li key={s.id}>
								<Link
									href={`#${s.id}`}
									className="text-[#2D3748]/85 underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35] hover:text-[#FF6B35]"
								>
									{s.heading}
								</Link>
							</li>
						))}
					</ol>
				</nav>

				{/* ─── Sections ─── */}
				{content.sections.map((section) => (
					<section
						key={section.id}
						id={section.id}
						aria-labelledby={`heading-${section.id}`}
						className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<h2
							id={`heading-${section.id}`}
							className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
						>
							{section.heading}
						</h2>
						{section.intro && (
							<p className="mt-3 text-[15.5px] leading-relaxed text-[#5A5A5A]">
								{section.intro}
							</p>
						)}
						{section.paragraphs && section.paragraphs.length > 0 && (
							<div className="mt-4 space-y-4">
								{section.paragraphs.map((p, idx) => (
									<p key={idx} className="text-[15px] leading-relaxed text-[#2D3748]/90">
										{p}
									</p>
								))}
							</div>
						)}
						{section.bullets && section.bullets.length > 0 && (
							<ul className="mt-5 space-y-3">
								{section.bullets.map((b, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3 rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
									>
										<span
											aria-hidden
											className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6] text-[12px] font-bold text-[#FF6B35]"
										>
											{idx + 1}
										</span>
										<span className="text-[14.5px] leading-relaxed text-[#2D3748]/90">
											{b}
										</span>
									</li>
								))}
							</ul>
						)}
						{section.subsections && section.subsections.length > 0 && (
							<div className="mt-6 space-y-4">
								{section.subsections.map((sub, idx) => (
									<article
										key={idx}
										className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
									>
										<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">
											{sub.heading}
										</h3>
										<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">
											{sub.body}
										</p>
									</article>
								))}
							</div>
						)}
						{section.table && (
							<div className="mt-6 overflow-x-auto rounded-2xl border border-[#FFE4D6]">
								<table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
									<caption className="px-3 py-2 text-left text-[12px] italic text-[#5A5A5A]">
										{section.table.caption}
									</caption>
									<thead>
										<tr className="bg-[#FDF8F5] text-[#2D3748]">
											{section.table.columns.map((c) => (
												<th
													key={c}
													scope="col"
													className="border-b border-[#FFE4D6] p-3 font-semibold"
												>
													{c}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{section.table.rows.map((row, idx) => (
											<tr key={idx} className="even:bg-white odd:bg-[#FEFEFE]">
												{row.map((cell, j) => (
													<td
														key={j}
														className="border-b border-[#FFE4D6]/60 p-3 text-[13.5px] text-[#2D3748]/85 align-top"
													>
														{cell}
													</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</section>
				))}

				{/* ─── Mid CTA ─── */}
				<CTABlock
					variant="audit"
					headline={`Want this guide applied to your business?`}
					body={`30 minutes, no slides. We'll diagnose where the leverage is for your specific situation and hand you the three highest-leverage moves — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?source=guide&slug=${slug}&cta=guide-${slug}-mid`}
					primaryLabel="Book a free audit"
				/>

				<FAQBlock items={faqs} />

				{/* ─── Related ─── */}
				{content.related.length > 0 && (
					<section
						aria-labelledby="related-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Continue reading
						</div>
						<h2
							id="related-heading"
							className="mt-2 font-poppins text-[22px] sm:text-[26px] font-bold tracking-tight text-[#2D3748]"
						>
							Related guides + commercial pages
						</h2>
						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{content.related.map((r) => (
								<li key={r.href}>
									<Link
										href={r.href}
										className="block rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 text-[14px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
									>
										{r.label} <span aria-hidden>→</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				)}

				<ReferencesBlock
					references={referencesFor({
						serviceId: refsServiceId,
						industryId: refsIndustryId,
					})}
				/>

				<TimestampStamp updatedAt={dateModified} reviewedBy={DEFAULT_AUTHOR.name} />

				<CTABlock
					variant="audit"
					headline={`Stop reading. Start fixing.`}
					body={`This guide is the long version. The short version is the audit. Book a free 30-minute audit and we'll diagnose your specific situation.`}
					primaryHref={`/free-marketing-audit?source=guide&slug=${slug}&cta=guide-${slug}-bottom`}
					primaryLabel="Get a free audit"
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This guide is part of the open Frameleads Resources library — built for operators, not for SEO churn.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
			<Footer />
		</>
	);
}
