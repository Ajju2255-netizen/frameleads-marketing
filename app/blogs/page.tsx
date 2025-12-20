import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blogs | Frameleads",
  description:
    "Insights, guides, and strategies on digital marketing, SEO, PPC, content, and growth.",
}

import { allPosts } from "./posts"

const posts = allPosts.map((p) => p.post) as Array<{
  slug: string;
  title: string;
  tag: string;
  summary: string;
  readTime: string;
  banner?: string;
}>

export default function BlogsListingPage() {
  const getCategorySlug = (tag: string) => {
    switch (tag) {
      case "Performance Marketing":
        return "performance-marketing"
      case "SEO":
        return "seo"
      case "Paid Social":
        return "paid-social"
      default:
        return ""
    }
  }
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-[#FFF6F2] to-white border-b border-[#FFE4D6]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-[#FF6B35] font-semibold mb-3">Blogs</p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
              Actionable marketing insights without the fluff
            </h1>
            <p className="text-[#5A5A5A] mt-4 text-base">
              Fresh strategies, playbooks, and case studies on growth, performance marketing, SEO,
              and creative that you can implement today.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border border-[#FFE4D6] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#FF6B35]/10 transition-all duration-300 bg-white"
              >
                <Link href={`/blogs/${post.slug}`} className="relative aspect-video w-full overflow-hidden block">
                  <Image
                    src={post.banner || "/blogs/banner.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#FF6B35] font-medium">
                    <Link
                      href={`/blogs/categories/${getCategorySlug(post.tag)}`}
                      className="px-2 py-1 bg-[#FF6B35]/10 rounded-full hover:bg-[#FF6B35]/20 transition-colors"
                    >
                      {post.tag}
                    </Link>
                    <span className="text-[#5A5A5A]">•</span>
                    <span className="text-[#5A5A5A]">{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-[#2D2D2D] group-hover:text-[#FF6B35] transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-[#5A5A5A] text-sm leading-relaxed">{post.summary}</p>
                  <div className="mt-4">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-[#FF6B35] hover:text-[#FF8A50] font-semibold text-sm"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#5A5A5A]">
              Looking for something specific? Reach out and we’ll write about it.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-3 text-white bg-[#FF6B35] hover:bg-[#FF8A50] px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              Suggest a topic
            </Link>
          </div>
        </div>
      </section>

    </main >
  )
}


