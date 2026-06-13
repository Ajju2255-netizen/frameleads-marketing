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
import {
	type BlogPost,
	type Section,
	POST_TYPE_LABELS,
	getBlogAuthor,
	resolveRelated,
} from "@/lib/data/blogs";
import { personJsonLd } from "@/lib/data/authors";

const SITE_URL = "https://frameleads.com";

// ─────────────────────────── Inline markdown renderer ───────────────────────
//
// Supports `**bold**`, `*italic*`, `` `code` ``, and `[label](href)`. Built as
// a tiny tokenizer because we ship to a Cloudflare Worker — no extra deps for
// what amounts to ~40 lines of text transformation.

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
		if (start > cursor) {
			tokens.push({ type: "text", value: text.slice(cursor, start) });
		}
		if (match[2] != null) tokens.push({ type: "bold", value: match[2] });
		else if (match[3] != null) tokens.push({ type: "italic", value: match[3] });
		else if (match[4] != null) tokens.push({ type: "code", value: match[4] });
		else if (match[5] != null && match[6] != null) {
			tokens.push({ type: "link", label: match[5], href: match[6] });
		}
		cursor = start + match[0].length;
	}
	if (cursor < text.length) {
		tokens.push({ type: "text", value: text.slice(cursor) });
	}
	return tokens;
}

function Inline({ text }: { text: string }): ReactNode {
	const tokens = tokenizeInline(text);
	return (
		<>
			{tokens.map((t, idx) => {
				switch (t.type) {
					case "bold":
						return (
							<strong key={idx} className="font-semibold text-[#2D3748]">
								{t.value}
							</strong>
						);
					case "italic":
						return (
							<em key={idx} className="italic">
								{t.value}
							</em>
						);
					case "code":
						return (
							<code
								key={idx}
								className="rounded bg-[#FFE4D6]/40 px-1.5 py-0.5 font-mono text-[0.9em] text-[#2D3748]"
							>
								{t.value}
							</code>
						);
					case "link":
						return t.href.startsWith("/") ? (
							<Link
								key={idx}
								href={t.href}
								className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
							>
								{t.label}
							</Link>
						) : (
							<a
								key={idx}
								href={t.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
							>
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

// ─────────────────────────── Section renderer ────────────────────────

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-")
		.slice(0, 80);
}

function SectionView({ section }: { section: Section }) {
	switch (section.type) {
		case "h2": {
			const id = section.id ?? slugify(section.text);
			return (
				<h2
					id={id}
					className="mt-12 scroll-mt-24 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
				>
					{section.text}
				</h2>
			);
		}
		case "h3": {
			const id = section.id ?? slugify(section.text);
			return (
				<h3
					id={id}
					className="mt-8 scroll-mt-24 font-poppins text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#2D3748]"
				>
					{section.text}
				</h3>
			);
		}
		case "p":
			return (
				<p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90">
					<Inline text={section.text} />
				</p>
			);
		case "ul":
			return (
				<ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
					{section.items.map((it, idx) => (
						<li key={idx}>
							<Inline text={it} />
						</li>
					))}
				</ul>
			);
		case "ol":
			return (
				<ol className="mt-4 list-decimal space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
					{section.items.map((it, idx) => (
						<li key={idx}>
							<Inline text={it} />
						</li>
					))}
				</ol>
			);
		case "callout": {
			const palette =
				section.tone === "warn"
					? "border-[#FFCAB0] bg-[#FFE4D6]/40"
					: section.tone === "tldr"
						? "border-[#FFE4D6] bg-white"
						: "border-[#FFE4D6] bg-[#FDF8F5]";
			const label =
				section.tone === "warn"
					? "Heads-up"
					: section.tone === "tldr"
						? "Key point"
						: "Note";
			return (
				<aside
					className={`mt-6 rounded-2xl border ${palette} px-5 py-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]`}
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						{section.title ?? label}
					</div>
					<p className="mt-2 text-[15px] leading-[1.7] text-[#2D3748]/90">
						<Inline text={section.text} />
					</p>
				</aside>
			);
		}
		case "quote":
			return (
				<blockquote className="mt-6 border-l-4 border-[#FF6B35] bg-[#FDF8F5] px-5 py-4 italic text-[#2D3748]/90">
					<Inline text={section.text} />
					{section.attribution ? (
						<footer className="mt-2 text-[13px] not-italic text-[#5A5A5A]">
							— {section.attribution}
						</footer>
					) : null}
				</blockquote>
			);
		case "stat-bar":
			return (
				<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
					{section.stats.map((s, idx) => (
						<div
							key={idx}
							className="rounded-xl border border-[#FFE4D6] bg-white p-4 text-center shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
						>
							<div className="font-poppins text-[22px] font-bold text-[#FF6B35]">
								{s.value}
							</div>
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

// ─────────────────────────── Main template ───────────────────────────

type Props = { post: BlogPost };

export function BlogPostPage({ post }: Props) {
	const url = `${SITE_URL}/blogs/${post.slug}`;
	const author = getBlogAuthor(post);
	const related = resolveRelated(post);
	const dateModified = post.dateModified ?? post.datePublished;
	const typeLabel = POST_TYPE_LABELS[post.type];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: post.title,
			description: post.description,
			url,
			datePublished: post.datePublished,
			dateModified,
			inLanguage: "en-IN",
			image: post.hero ?? `${SITE_URL}/og-default.png`,
			author: {
				"@type": "Person",
				"@id": `${author.url}#person`,
				name: author.name,
				url: author.url,
			},
			publisher: { "@id": `${SITE_URL}#organization` },
			mainEntityOfPage: { "@type": "WebPage", "@id": url },
			keywords: [post.primaryKeyword, post.cluster, post.category].join(", "),
			articleSection: post.cluster,
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: post.faqs.map((f) => ({
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
				{ "@type": "ListItem", position: 3, name: post.title, item: url },
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
								{ label: "Blog", href: "/blogs" },
								{ label: post.title },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{typeLabel} · {post.category}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{post.title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{post.description}
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#5A5A5A]">
							<span>
								By{" "}
								<Link
									href={author.url.startsWith("http") ? author.url : `/about`}
									className="text-[#2D3748] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:text-[#FF6B35] hover:decoration-[#FF6B35]"
								>
									{author.name}
								</Link>
							</span>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<time dateTime={post.datePublished}>{post.datePublished}</time>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<span>{post.readTime} read</span>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={post.tldr} />

				<article className="mx-auto max-w-3xl px-6 py-10">
					{post.body.map((section, idx) => (
						<SectionView key={idx} section={section} />
					))}
				</article>

				<CTABlock
					variant="audit"
					headline={`Want this applied to your business?`}
					body={`30 minutes, no slides. We'll review your current setup against the benchmarks above and hand you the three highest-leverage moves.`}
					primaryHref={post.ctaHref ?? `/free-marketing-audit?cta=blog-${post.slug}`}
					primaryLabel={post.ctaLabel ?? `Book a free audit`}
				/>

				<FAQBlock items={post.faqs} />

				{post.references && post.references.length > 0 ? (
					<ReferencesBlock references={post.references} />
				) : null}

				<TimestampStamp updatedAt={dateModified} reviewedBy={author.name} />

				<AuthorCard
					person={author}
					name={author.name}
					role={author.role}
					bio={author.bio}
					linkedin={author.linkedin}
					updatedAt={dateModified}
				/>

				{related.length > 0 ? (
					<section className="mx-auto max-w-3xl px-6 py-10">
						<h2 className="font-poppins text-[22px] font-bold text-[#2D3748]">
							Related reading
						</h2>
						<ul className="mt-4 grid gap-3 sm:grid-cols-2">
							{related.map((r) => (
								<li
									key={r.slug}
									className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)] transition-shadow hover:shadow-[0_4px_16px_rgba(45,55,72,0.08)]"
								>
									<Link href={`/blogs/${r.slug}`} className="block">
										<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
											{POST_TYPE_LABELS[r.type]}
										</div>
										<div className="mt-1 font-poppins text-[15px] font-semibold text-[#2D3748]">
											{r.title}
										</div>
										<div className="mt-1 text-[13px] text-[#5A5A5A]">
											{r.description}
										</div>
									</Link>
								</li>
							))}
						</ul>
					</section>
				) : null}
			</main>
			{/* Hidden Person JSON-LD via AuthorCard already covers this — no extra schema here. */}
			{author ? <SchemaInjector schema={personJsonLd(author)} /> : null}
		</>
	);
}
