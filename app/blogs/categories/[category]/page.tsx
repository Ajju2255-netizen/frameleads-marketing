import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
	categorySlugs,
	categoryMetaFor,
	postsByCategorySlug,
	POST_TYPE_LABELS,
} from "@/lib/data/blogs";
import { SchemaInjector } from "@/components/templates/SchemaInjector";

export const revalidate = 86400;

interface PageProps {
	params: Promise<{ category: string }>;
}

export function generateStaticParams() {
	return categorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { category } = await params;
	const meta = categoryMetaFor(category);
	if (!meta) return { title: "Category Not Found | Frameleads" };
	return {
		title: `${meta.name} — Frameleads Blog`,
		description: meta.description,
		alternates: { canonical: `https://frameleads.com/blogs/categories/${category}` },
		openGraph: {
			title: `${meta.name} — Frameleads Blog`,
			description: meta.description,
			url: `https://frameleads.com/blogs/categories/${category}`,
			type: "website",
		},
	};
}

export default async function Page({ params }: PageProps) {
	const { category } = await params;
	const meta = categoryMetaFor(category);
	if (!meta) notFound();
	const posts = postsByCategorySlug(category);

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: "https://frameleads.com" },
			{ "@type": "ListItem", position: 2, name: "Blog", item: "https://frameleads.com/blogs" },
			{ "@type": "ListItem", position: 3, name: meta.name, item: `https://frameleads.com/blogs/categories/${category}` },
		],
	};

	return (
		<>
			<SchemaInjector schema={breadcrumbSchema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]" />
					<div className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
						<nav aria-label="Breadcrumb" className="mb-5 text-[13px] text-[#5A5A5A]">
							<ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
								<li>
									<Link href="/" className="hover:text-[#FF6B35]">Home</Link>
								</li>
								<li aria-hidden className="text-[#FFE4D6]">/</li>
								<li>
									<Link href="/blogs" className="hover:text-[#FF6B35]">Blog</Link>
								</li>
								<li aria-hidden className="text-[#FFE4D6]">/</li>
								<li className="text-[#2D3748]">{meta.name}</li>
							</ol>
						</nav>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Category · {posts.length} post{posts.length === 1 ? "" : "s"}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{meta.name}
						</h1>
						<p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{meta.description}
						</p>
					</div>
				</header>

				<section className="mx-auto max-w-5xl px-6 py-10">
					{posts.length === 0 ? (
						<p className="text-[#5A5A5A]">No posts yet in this category.</p>
					) : (
						<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{posts.map((p) => (
								<li key={p.slug} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)] transition-shadow hover:shadow-[0_4px_16px_rgba(45,55,72,0.08)]">
									<Link href={`/blogs/${p.slug}`} className="block">
										<div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
											{POST_TYPE_LABELS[p.type]}
										</div>
										<h2 className="mt-2 font-poppins text-[15.5px] font-semibold leading-snug text-[#2D3748]">
											{p.title}
										</h2>
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
					)}
					<div className="mt-10">
						<Link href="/blogs" className="text-[#FF6B35] font-semibold">
							← Back to all blogs
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
