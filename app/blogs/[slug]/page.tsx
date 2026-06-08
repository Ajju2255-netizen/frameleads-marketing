import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BlogPostPage } from "@/components/templates/BlogPostPage";
import {
	getBlogPost,
	allBlogSlugsIncludingProgrammatic,
} from "@/lib/data/blogs";
import { allPosts, getPostBySlug } from "../posts";

export const revalidate = 86400;

interface PageProps {
	params: Promise<{ slug: string }>;
}

function legacySlugs(): string[] {
	return allPosts
		.filter((p) => p && p.post && p.post.slug)
		.map((p) => p.post.slug.trim());
}

export function generateStaticParams() {
	const structured = allBlogSlugsIncludingProgrammatic();
	const legacy = legacySlugs();
	// Dedup (some structured posts share slugs with legacy ones)
	const all = Array.from(new Set([...structured, ...legacy]));
	return all.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const structured = getBlogPost(slug);
	if (structured) {
		const url = `https://frameleads.com/blogs/${structured.slug}`;
		return {
			title: `${structured.title} | Frameleads`,
			description: structured.description,
			alternates: { canonical: url },
			openGraph: {
				title: structured.title,
				description: structured.description,
				url,
				type: "article",
				publishedTime: structured.datePublished,
				modifiedTime: structured.dateModified ?? structured.datePublished,
			},
			twitter: {
				card: "summary_large_image",
				title: structured.title,
				description: structured.description,
			},
		};
	}
	const legacy = getPostBySlug(slug);
	if (!legacy) return { title: "Post Not Found | Frameleads" };
	return {
		title: `${legacy.post.title} | Frameleads`,
		description: legacy.post.summary,
		alternates: { canonical: `https://frameleads.com/blogs/${legacy.post.slug}` },
		openGraph: {
			title: legacy.post.title,
			description: legacy.post.summary,
			url: `https://frameleads.com/blogs/${legacy.post.slug}`,
			type: "article",
		},
	};
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const structured = getBlogPost(slug);
	if (structured) return <BlogPostPage post={structured} />;

	// Legacy fallback — render the original JSX content shipped in app/blogs/posts/*.tsx
	const legacy = getPostBySlug(slug);
	if (!legacy) notFound();

	// @ts-ignore — banner is optional on legacy posts
	const { post, Content, jsonLd } = legacy as {
		post: { title: string; tag: string; readTime: string; summary: string; banner?: string };
		Content: any;
		jsonLd: any;
	};

	return (
		<main id="main" className="min-h-screen bg-white">
			{jsonLd && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			)}
			<section className="bg-gradient-to-b from-[#FFF6F2] to-white border-b border-[#FFE4D6]/60">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
					<div className="flex items-center gap-2 text-xs text-[#FF6B35] font-medium">
						<span className="px-2 py-1 bg-[#FF6B35]/10 rounded-full">{post.tag}</span>
						<span className="text-[#5A5A5A]">•</span>
						<span className="text-[#5A5A5A]">{post.readTime}</span>
					</div>
					<h1 className="mt-3 text-3xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
						{post.title}
					</h1>
					<p className="text-[#5A5A5A] mt-4 text-base max-w-3xl">{post.summary}</p>
					{post.banner && (
						<div className="mt-8 relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[#FFE4D6]">
							<Image src={post.banner} alt={post.title} fill className="object-cover" priority />
						</div>
					)}
				</div>
			</section>
			<section>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-orange">
					<Content />
					<p className="mt-8">
						<Link href="/blogs" className="text-[#FF6B35] font-semibold">
							← Back to all blogs
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
