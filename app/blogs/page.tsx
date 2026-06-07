import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { sortedBlogPosts, POST_TYPE_LABELS } from "@/lib/data/blogs";

const SITE_URL = "https://frameleads.com";

export const metadata: Metadata = {
	title: "Blog — operator-grade marketing playbooks | Frameleads",
	description:
		"Frameleads' blog: opinionated, India-specific marketing playbooks for SEO, performance, content, and CRO. Reviewed quarterly against live client data.",
	alternates: { canonical: `${SITE_URL}/blogs` },
	openGraph: {
		title: "Blog — operator-grade marketing playbooks | Frameleads",
		description:
			"Opinionated marketing playbooks for SEO, performance, content, and CRO. Reviewed quarterly.",
		url: `${SITE_URL}/blogs`,
		type: "website",
	},
};

export default function BlogsListingPage() {
	const posts = sortedBlogPosts();
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
			<Navbar />
			<main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
				<header className="mb-10 sm:mb-12">
					<p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Frameleads · Blog
					</p>
					<h1 className="mt-3 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
						Actionable marketing playbooks
					</h1>
					<p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
						No fluff. Frameleads' senior operators publish what we use on retainers — channel-mix math, hiring frameworks, and category-specific playbooks for Indian and global brands.
					</p>
				</header>

				<ul className="grid gap-5 sm:grid-cols-2">
					{posts.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/blogs/${post.slug}`}
								className="group block h-full rounded-2xl border border-[#FFE4D6] bg-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(45,55,72,0.08)]"
							>
								<div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									<span
										aria-hidden
										className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
									/>
									{POST_TYPE_LABELS[post.type]}
									<span aria-hidden className="text-[#FFE4D6]">·</span>
									<span className="text-[#5A5A5A]">{post.category}</span>
								</div>
								<h2 className="mt-3 font-poppins text-[20px] sm:text-[22px] font-semibold leading-snug tracking-tight text-[#2D3748] group-hover:text-[#FF6B35]">
									{post.title}
								</h2>
								<p className="mt-3 text-[14.5px] leading-relaxed text-[#5A5A5A]">
									{post.description}
								</p>
								<div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#5A5A5A]">
									<time dateTime={post.datePublished}>{post.datePublished}</time>
									<span aria-hidden className="text-[#FFE4D6]">·</span>
									<span>{post.readTime} read</span>
								</div>
							</Link>
						</li>
					))}
				</ul>

				{posts.length === 0 ? (
					<p className="mt-10 text-[15px] text-[#5A5A5A]">
						No posts yet. Check back soon.
					</p>
				) : null}
			</main>
			<Footer />
		</div>
	);
}
