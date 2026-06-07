import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/templates/BlogPostPage";
import {
	getBlogPost,
	getBlogAuthor,
	allBlogSlugs,
	POST_TYPE_LABELS,
} from "@/lib/data/blogs";

const SITE_URL = "https://frameleads.com";

type RouteParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
	return allBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: RouteParams;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = getBlogPost(slug);
	if (!post) return {};
	const url = `${SITE_URL}/blogs/${post.slug}`;
	const author = getBlogAuthor(post);
	return {
		title: `${post.title} | Frameleads`,
		description: post.description,
		alternates: { canonical: url },
		authors: [{ name: author.name, url: author.url }],
		openGraph: {
			title: post.title,
			description: post.description,
			url,
			type: "article",
			publishedTime: post.datePublished,
			modifiedTime: post.dateModified ?? post.datePublished,
			authors: [author.name],
			tags: [post.primaryKeyword, post.cluster, POST_TYPE_LABELS[post.type]],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
		},
	};
}

export default async function BlogPostRoute({
	params,
}: {
	params: RouteParams;
}) {
	const { slug } = await params;
	const post = getBlogPost(slug);
	if (!post) notFound();
	return <BlogPostPage post={post} />;
}
