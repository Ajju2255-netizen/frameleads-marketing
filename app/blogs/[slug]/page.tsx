
import Link from "next/link"
import Image from "next/image"
import { allPosts, getPostBySlug } from "../posts"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.post.slug }))
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params
  const { slug } = params

  const postData = getPostBySlug(slug)

  if (!postData) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-[#2D2D2D]">Post not found</h1>
          <p className="text-[#5A5A5A] mt-2">The blog you are looking for does not exist.</p>
          <Link href="/blogs" className="text-[#FF6B35] font-semibold inline-block mt-4">
            Back to blogs
          </Link>
        </div>
      </main>
    )
  }

  // @ts-ignore - jsonLd might not exist on all posts
  const { post, Content, jsonLd } = postData

  return (
    <main className="min-h-screen bg-white">
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

          <div className="mt-8 relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[#FFE4D6]">
            <Image
              src="/blogs/banner.jpg"
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
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

      <section className="bg-[#FAF9F6] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {allPosts
              .filter((p) => p.post.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.post.slug}
                  href={`/blogs/${p.post.slug}`}
                  className="group bg-white border border-[#FFE4D6] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider">
                    {p.post.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[#2D2D2D] group-hover:text-[#FF6B35] transition-colors">
                    {p.post.title}
                  </h3>
                  <p className="mt-2 text-[#5A5A5A] text-sm line-clamp-2">
                    {p.post.summary}
                  </p>
                  <span className="inline-block mt-4 text-[#FF6B35] font-semibold text-sm">
                    Read more →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </main>
  )
}
