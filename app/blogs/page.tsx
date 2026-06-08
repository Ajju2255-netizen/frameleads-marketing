import Link from "next/link";
import type { Metadata } from "next";
import {
	sortedBlogPosts,
	categorySlugs,
	categoryMetaFor,
	postCategorySlug,
	POST_TYPE_LABELS,
	editorialBlogPosts,
} from "@/lib/data/blogs";
import { PILLARS } from "@/lib/data/pillars";
import { SchemaInjector } from "@/components/templates/SchemaInjector";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Frameleads Blog — Operator playbooks for SEO, paid, GEO, lifecycle",
	description:
		"Operator-grade marketing playbooks on SEO, performance, AI Overviews + GEO, attribution, lifecycle, and vertical-specific playbooks. Reviewed quarterly.",
	alternates: { canonical: "https://frameleads.com/blogs" },
	openGraph: {
		title: "Frameleads Blog — Operator playbooks",
		description:
			"Operator-grade marketing playbooks on SEO, performance, AI Overviews + GEO, attribution, lifecycle, and vertical-specific playbooks.",
		url: "https://frameleads.com/blogs",
		type: "website",
	},
};

const SITE_URL = "https://frameleads.com";

export default function Page() {
	const editorial = editorialBlogPosts();
	const recent = sortedBlogPosts().slice(0, 12);
	const cats = categorySlugs();

	const blogSchema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Frameleads Blog",
		url: `${SITE_URL}/blogs`,
		description:
			"Operator-grade marketing playbooks on SEO, performance, AI Overviews + GEO, attribution, lifecycle, and vertical-specific playbooks.",
		publisher: { "@id": `${SITE_URL}#organization` },
		blogPost: editorial.slice(0, 50).map((p) => ({
			"@type": "BlogPosting",
			headline: p.title,
			url: `${SITE_URL}/blogs/${p.slug}`,
			datePublished: p.datePublished,
			dateModified: p.dateModified ?? p.datePublished,
		})),
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
		],
	};

	return (
		<>
			<SchemaInjector schema={[blogSchema, breadcrumbSchema]} />
			<main id="main">
				{/* ─── Hero ─── */}
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]" />
					<div className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Blog · Operator playbooks
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Frameleads Blog
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							Operator-grade marketing playbooks on SEO, performance, AI Overviews + GEO, attribution, lifecycle, and vertical-specific operations. Reviewed quarterly against live client data.
						</p>
					</div>
				</header>

				{/* ─── Pillars ─── */}
				<section className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Start here · 8 editorial pillars
					</div>
					<h2 className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Pick the pillar that matches what you're working on
					</h2>
					<ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{PILLARS.map((p) => (
							<li key={p.slug} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
								<Link href={`/blogs/pillars/${p.slug}`} className="block">
									<div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Pillar</div>
									<h3 className="mt-2 font-poppins text-[15px] font-semibold leading-snug text-[#2D3748]">
										{p.title.split(" — ")[0]}
									</h3>
									<p className="mt-2 text-[12.5px] leading-relaxed text-[#5A5A5A] line-clamp-3">
										{p.description}
									</p>
									<div className="mt-3 text-[12px] font-semibold text-[#FF6B35]">
										Explore →
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Latest editorial posts ─── */}
				<section className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="flex items-baseline justify-between">
						<div>
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								Latest from the field
							</div>
							<h2 className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
								{editorial.length} editorial playbooks, sorted by recency
							</h2>
						</div>
					</div>
					<ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{recent.map((p) => (
							<li key={p.slug} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)] transition-shadow hover:shadow-[0_4px_16px_rgba(45,55,72,0.08)]">
								<Link href={`/blogs/${p.slug}`} className="block">
									<div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
										{POST_TYPE_LABELS[p.type]} · {p.category}
									</div>
									<h3 className="mt-2 font-poppins text-[15.5px] font-semibold leading-snug text-[#2D3748]">
										{p.title}
									</h3>
									<p className="mt-2 text-[12.5px] leading-relaxed text-[#5A5A5A] line-clamp-3">
										{p.description}
									</p>
									<div className="mt-3 flex items-center justify-between">
										<span className="text-[12px] text-[#5A5A5A]">{p.readTime}</span>
										<span className="text-[12px] font-semibold text-[#FF6B35]">Read →</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Categories ─── */}
				<section className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-10">
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Browse by category
					</div>
					<h2 className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						{cats.length} categories — {editorial.length} editorial posts + 600 service × city playbooks
					</h2>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{cats.map((slug) => {
							const meta = categoryMetaFor(slug);
							if (!meta) return null;
							const count = editorial.filter((p) => postCategorySlug(p) === slug).length;
							return (
								<li key={slug}>
									<Link
										href={`/blogs/categories/${slug}`}
										className="block rounded-xl border border-[#FFE4D6] bg-white p-4 transition-all hover:border-[#FF6B35]/40"
									>
										<div className="font-poppins text-[14.5px] font-semibold text-[#2D3748]">
											{meta.name}
										</div>
										<div className="mt-1 text-[12px] text-[#5A5A5A]">
											{count} editorial post{count === 1 ? "" : "s"}
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</section>

				{/* ─── CTA ─── */}
				<section className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-12">
					<div className="relative overflow-hidden rounded-3xl border border-[#FFE4D6] bg-[#2D3748] p-8 sm:p-10 shadow-[0_16px_44px_rgba(45,55,72,0.18)]">
						<div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_85%_-10%,rgba(255,107,53,0.30),transparent_60%)]" />
						<div className="relative">
							<h2 className="font-poppins text-[24px] sm:text-[30px] font-bold tracking-tight text-white">
								Want this applied to your business?
							</h2>
							<p className="mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-white/80">
								Book a free 30-minute marketing audit. We'll review your current setup against the frameworks above and hand you the three highest-leverage moves to make next.
							</p>
							<div className="mt-6">
								<Link
									href="/free-marketing-audit?cta=blog-hub-bottom"
									className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(255,107,53,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#FF7E50]"
								>
									Book a free 30-min audit →
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
