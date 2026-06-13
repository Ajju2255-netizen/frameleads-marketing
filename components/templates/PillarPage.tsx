/**
 * PillarPage — canonical template for the 8 editorial pillar pages.
 *
 * Renders at /blogs/pillars/{slug}. Composed of: hero + TLDR + curated body
 * sections + auto-grouped spoke posts by sub-theme + FAQs + references +
 * author + 6-type schema stack (Article + CollectionPage + ItemList +
 * FAQPage + BreadcrumbList + Person + WebPage(speakable) + Organization).
 *
 * Reuses BlogPostPage's section renderer indirectly via shared Section type.
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { FAQBlock } from "./FAQBlock";
import { ReferencesBlock } from "./ReferencesBlock";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { EmbeddedLeadForm } from "./EmbeddedLeadForm";
import type { Section } from "@/lib/data/blogs";
import { postsByPillar, POST_TYPE_LABELS } from "@/lib/data/blogs";
import { AUTHORS, personJsonLd } from "@/lib/data/authors";
import type { Pillar, SubTheme } from "@/lib/data/pillars";

const SITE_URL = "https://frameleads.com";

// ─────────── Inline markdown renderer (mirrors BlogPostPage) ───────────

type InlineToken =
	| { type: "text"; value: string }
	| { type: "bold"; value: string }
	| { type: "italic"; value: string }
	| { type: "code"; value: string }
	| { type: "link"; label: string; href: string };

const INLINE_RE =
	/(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;

function tokenizeInline(text: string): InlineToken[] {
	const tokens: InlineToken[] = [];
	let cursor = 0;
	for (const match of text.matchAll(INLINE_RE)) {
		const start = match.index ?? 0;
		if (start > cursor) tokens.push({ type: "text", value: text.slice(cursor, start) });
		if (match[2] != null) tokens.push({ type: "bold", value: match[2] });
		else if (match[3] != null) tokens.push({ type: "italic", value: match[3] });
		else if (match[4] != null) tokens.push({ type: "code", value: match[4] });
		else if (match[5] != null && match[6] != null) {
			tokens.push({ type: "link", label: match[5], href: match[6] });
		}
		cursor = start + match[0].length;
	}
	if (cursor < text.length) tokens.push({ type: "text", value: text.slice(cursor) });
	return tokens;
}

function Inline({ text }: { text: string }): ReactNode {
	const tokens = tokenizeInline(text);
	return (
		<>
			{tokens.map((t, idx) => {
				switch (t.type) {
					case "bold":
						return <strong key={idx} className="font-semibold text-[#2D3748]">{t.value}</strong>;
					case "italic":
						return <em key={idx} className="italic">{t.value}</em>;
					case "code":
						return (
							<code key={idx} className="rounded bg-[#FFE4D6]/40 px-1.5 py-0.5 font-mono text-[0.9em] text-[#2D3748]">
								{t.value}
							</code>
						);
					case "link":
						return t.href.startsWith("/") ? (
							<Link key={idx} href={t.href} className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]">
								{t.label}
							</Link>
						) : (
							<a key={idx} href={t.href} target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]">
								{t.label}
							</a>
						);
					default:
						return <span key={idx}>{t.value}</span>;
				}
			})}
		</>
	);
}

function slugify(text: string): string {
	return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);
}

function SectionView({ section }: { section: Section }) {
	switch (section.type) {
		case "h2": {
			const id = section.id ?? slugify(section.text);
			return (
				<h2 id={id} className="mt-12 scroll-mt-24 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
					{section.text}
				</h2>
			);
		}
		case "h3": {
			const id = section.id ?? slugify(section.text);
			return (
				<h3 id={id} className="mt-8 scroll-mt-24 font-poppins text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#2D3748]">
					{section.text}
				</h3>
			);
		}
		case "p":
			return <p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90"><Inline text={section.text} /></p>;
		case "ul":
			return (
				<ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
					{section.items.map((it, idx) => <li key={idx}><Inline text={it} /></li>)}
				</ul>
			);
		case "ol":
			return (
				<ol className="mt-4 list-decimal space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
					{section.items.map((it, idx) => <li key={idx}><Inline text={it} /></li>)}
				</ol>
			);
		case "callout": {
			const palette =
				section.tone === "warn" ? "border-[#FFCAB0] bg-[#FFE4D6]/40"
					: section.tone === "tldr" ? "border-[#FFE4D6] bg-white"
						: "border-[#FFE4D6] bg-[#FDF8F5]";
			const label =
				section.tone === "warn" ? "Heads-up"
					: section.tone === "tldr" ? "Key point"
						: "Note";
			return (
				<aside className={`mt-6 rounded-2xl border ${palette} px-5 py-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]`}>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">{section.title ?? label}</div>
					<p className="mt-2 text-[15px] leading-[1.7] text-[#2D3748]/90"><Inline text={section.text} /></p>
				</aside>
			);
		}
		case "quote":
			return (
				<blockquote className="mt-6 border-l-4 border-[#FF6B35] bg-[#FDF8F5] px-5 py-4 italic text-[#2D3748]/90">
					<Inline text={section.text} />
					{section.attribution ? <footer className="mt-2 text-[13px] not-italic text-[#5A5A5A]">— {section.attribution}</footer> : null}
				</blockquote>
			);
		case "stat-bar":
			return (
				<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
					{section.stats.map((s, idx) => (
						<div key={idx} className="rounded-xl border border-[#FFE4D6] bg-white p-4 text-center shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
							<div className="font-poppins text-[22px] font-bold text-[#FF6B35]">{s.value}</div>
							<div className="mt-1 text-[12px] text-[#5A5A5A]">{s.label}</div>
						</div>
					))}
				</div>
			);
		case "code":
			return (
				<pre className="mt-6 overflow-x-auto rounded-xl border border-[#FFE4D6] bg-[#2D3748] p-4 text-[13px] leading-[1.6] text-[#FFE4D6]">
					<code>{section.text}</code>
				</pre>
			);
		case "divider":
			return <hr className="my-10 border-[#FFE4D6]" />;
	}
}

// ─────────────────────── Main template ───────────────────────

type Props = { pillar: Pillar };

export function PillarPage({ pillar }: Props) {
	const url = `${SITE_URL}/blogs/pillars/${pillar.slug}`;
	const author = AUTHORS["frameleads-editorial-team"];
	const dateModified = pillar.dateModified ?? pillar.datePublished;
	const spokes = postsByPillar(pillar.slug);

	// Group spoke posts by sub-theme (a spoke can match multiple sub-themes;
	// we fall back to "Other operator playbooks" for un-themed spokes).
	const themedBuckets: Record<string, typeof spokes> = {};
	const unbucketed: typeof spokes = [];
	for (const sp of spokes) {
		const matchedThemes = pillar.subThemes.filter((st) =>
			st.spokeSlugs?.includes(sp.slug),
		);
		if (matchedThemes.length === 0) unbucketed.push(sp);
		else
			for (const t of matchedThemes) {
				(themedBuckets[t.slug] = themedBuckets[t.slug] ?? []).push(sp);
			}
	}

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: pillar.title,
			description: pillar.description,
			url,
			datePublished: pillar.datePublished,
			dateModified,
			inLanguage: "en-IN",
			image: `${SITE_URL}/og-default.png`,
			author: {
				"@type": "Person",
				"@id": `${author.url}#person`,
				name: author.name,
				url: author.url,
			},
			publisher: { "@id": `${SITE_URL}#organization` },
			mainEntityOfPage: { "@type": "WebPage", "@id": url },
			keywords: pillar.primaryKeyword,
			articleSection: pillar.title,
		},
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			url,
			name: pillar.title,
			description: pillar.description,
			hasPart: spokes.map((s) => ({
				"@type": "Article",
				headline: s.title,
				url: `${SITE_URL}/blogs/${s.slug}`,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			itemListElement: spokes.map((s, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				url: `${SITE_URL}/blogs/${s.slug}`,
				name: s.title,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: pillar.faqs.map((f) => ({
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
				{ "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
				{ "@type": "ListItem", position: 3, name: "Pillars", item: `${SITE_URL}/blogs/pillars` },
				{ "@type": "ListItem", position: 4, name: pillar.title, item: url },
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
			<SchemaInjector schema={personJsonLd(author)} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]" />
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "Blog", href: "/blogs" },
								{ label: "Pillars", href: "/blogs" },
								{ label: pillar.title },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Pillar · {spokes.length} spoke{spokes.length === 1 ? "" : "s"}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{pillar.title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{pillar.heroDek}
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#5A5A5A]">
							<span>
								By{" "}
								<Link href={author.url.startsWith("http") ? author.url : "/about"} className="text-[#2D3748] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:text-[#FF6B35] hover:decoration-[#FF6B35]">
									{author.name}
								</Link>
							</span>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<time dateTime={pillar.datePublished}>{pillar.datePublished}</time>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<span>{pillar.readTime} read</span>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={pillar.tldr} />

				<article className="mx-auto max-w-3xl px-6 py-10">
					{pillar.body.map((section, idx) => <SectionView key={idx} section={section} />)}
				</article>

				{/* ─── Sub-themes + spoke posts auto-grouped ─── */}
				<section className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Cluster spokes
					</div>
					<h2 className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Read the cluster — {spokes.length} operator playbooks
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						The {spokes.length} posts below sit under this pillar. Read in order or jump to the sub-theme that matches your situation.
					</p>
					<div className="mt-6 space-y-8">
						{pillar.subThemes.map((theme: SubTheme) => {
							const themePosts = themedBuckets[theme.slug] ?? [];
							if (themePosts.length === 0) return null;
							return (
								<div key={theme.slug}>
									<h3 className="font-poppins text-[18px] font-semibold tracking-tight text-[#2D3748]">
										{theme.name}
									</h3>
									<p className="mt-1 text-[13.5px] text-[#5A5A5A]">{theme.description}</p>
									<ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
										{themePosts.map((sp) => (
											<li key={sp.slug} className="rounded-xl border border-[#FFE4D6] bg-white p-3.5">
												<Link href={`/blogs/${sp.slug}`} className="block">
													<div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
														{POST_TYPE_LABELS[sp.type]}
													</div>
													<div className="mt-1 font-poppins text-[14px] font-semibold leading-snug text-[#2D3748]">
														{sp.title}
													</div>
												</Link>
											</li>
										))}
									</ul>
								</div>
							);
						})}
						{unbucketed.length > 0 ? (
							<div>
								<h3 className="font-poppins text-[18px] font-semibold tracking-tight text-[#2D3748]">
									Other operator playbooks
								</h3>
								<p className="mt-1 text-[13.5px] text-[#5A5A5A]">
									Additional posts in the cluster that don't yet have a sub-theme assignment.
								</p>
								<ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
									{unbucketed.map((sp) => (
										<li key={sp.slug} className="rounded-xl border border-[#FFE4D6] bg-white p-3.5">
											<Link href={`/blogs/${sp.slug}`} className="block">
												<div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
													{POST_TYPE_LABELS[sp.type]}
												</div>
												<div className="mt-1 font-poppins text-[14px] font-semibold leading-snug text-[#2D3748]">
													{sp.title}
												</div>
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</section>

				<EmbeddedLeadForm
					source={`pillar-${pillar.slug}-mid`}
					headline={`Get a free audit scoped to ${pillar.title.split(" — ")[0]}`}
					body={`Fill the form below to book a free 30-minute audit. We'll score your current setup against the framework above and tell you the three highest-leverage moves — even if you don't engage us.`}
				/>

				<FAQBlock items={pillar.faqs} />

				{pillar.references && pillar.references.length > 0 ? (
					<ReferencesBlock references={pillar.references} />
				) : null}

				<TimestampStamp updatedAt={dateModified} reviewedBy={author.name} />

				<CTABlock
					variant="audit"
					headline="Want this applied to your business?"
					body="30 minutes, no slides. We'll review your current setup against the pillar framework above and hand you the three highest-leverage moves to make next."
					primaryHref={`/free-marketing-audit?cta=pillar-${pillar.slug}-bottom`}
					primaryLabel="Book a free audit"
				/>

				<AuthorCard
					person={author}
					name={author.name}
					role={author.role}
					bio={author.bio}
					linkedin={author.linkedin}
					updatedAt={dateModified}
				/>
			</main>
		</>
	);
}
