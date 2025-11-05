import Link from "next/link"

interface CategoryPageProps {
  params: { category: string }
}

const allPosts = [
  {
    slug: "high-roi-performance-marketing",
    title: "How to Build a High-ROI Performance Marketing Engine",
    summary:
      "A practical framework to scale acquisition with data-driven campaigns and creative testing.",
    category: "performance-marketing",
    readTime: "6 min read",
  },
  {
    slug: "seo-in-2025",
    title: "SEO in 2025: What Actually Moves the Needle",
    summary:
      "From topical authority to entity SEO, here’s what matters now—without the fluff.",
    category: "seo",
    readTime: "7 min read",
  },
  {
    slug: "creative-strategy-paid-social",
    title: "The Creative Strategy Behind Winning Paid Social",
    summary:
      "Break down high-performing ad structures, hooks, and offers for Meta and TikTok.",
    category: "paid-social",
    readTime: "5 min read",
  },
]

const categoryMeta: Record<string, { name: string; description: string }> = {
  "performance-marketing": {
    name: "Performance Marketing",
    description: "Acquisition frameworks, media buying, and measurement",
  },
  seo: {
    name: "SEO",
    description: "Technical SEO, content strategy, and entity optimization",
  },
  "paid-social": {
    name: "Paid Social",
    description: "Creative strategy, hooks, and platform insights",
  },
}

export function generateStaticParams() {
  return [
    { category: "performance-marketing" },
    { category: "seo" },
    { category: "paid-social" },
  ]
}

export default function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  const meta = categoryMeta[category]
  const posts = allPosts.filter((p) => p.category === category)

  if (!meta) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-[#2D2D2D]">Category not found</h1>
          <p className="text-[#5A5A5A] mt-2">The category you are looking for does not exist.</p>
          <Link href="/blogs/categories" className="text-[#FF6B35] font-semibold inline-block mt-4">Back to categories</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-[#FFF6F2] to-white border-b border-[#FFE4D6]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-[#FF6B35] font-semibold mb-3">Category</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">{meta.name}</h1>
          <p className="text-[#5A5A5A] mt-4 text-base max-w-2xl">{meta.description}</p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length === 0 ? (
            <p className="text-[#5A5A5A]">No posts yet in this category.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="group border border-[#FFE4D6] rounded-xl p-6 hover:shadow-lg hover:shadow-[#FF6B35]/10 transition-all bg-white">
                  <div className="flex items-center gap-2 text-xs text-[#5A5A5A]">
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-[#2D2D2D] group-hover:text-[#FF6B35] transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-[#5A5A5A] text-sm leading-relaxed">{post.summary}</p>
                  <div className="mt-4">
                    <Link href={`/blogs/${post.slug}`} className="text-[#FF6B35] hover:text-[#FF8A50] font-semibold text-sm">Read article →</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
          <div className="mt-10">
            <Link href="/blogs" className="text-[#FF6B35] font-semibold">← Back to all blogs</Link>
          </div>
        </div>
      </section>
    </main>
  )
}



