import Link from "next/link"

interface BlogPostPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return [
    { slug: "high-roi-performance-marketing" },
    { slug: "seo-in-2025" },
    { slug: "creative-strategy-paid-social" },
  ]
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params

  const content: Record<string, { title: string; summary: string; tag: string; readTime: string }> = {
    "high-roi-performance-marketing": {
      title: "How to Build a High-ROI Performance Marketing Engine",
      summary:
        "A practical framework to scale acquisition with data-driven campaigns and creative testing.",
      tag: "Performance Marketing",
      readTime: "6 min read",
    },
    "seo-in-2025": {
      title: "SEO in 2025: What Actually Moves the Needle",
      summary:
        "From topical authority to entity SEO, here’s what matters now—without the fluff.",
      tag: "SEO",
      readTime: "7 min read",
    },
    "creative-strategy-paid-social": {
      title: "The Creative Strategy Behind Winning Paid Social",
      summary:
        "Break down high-performing ad structures, hooks, and offers for Meta and TikTok.",
      tag: "Paid Social",
      readTime: "5 min read",
    },
  }

  const post = content[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-[#2D2D2D]">Post not found</h1>
          <p className="text-[#5A5A5A] mt-2">The blog you are looking for does not exist.</p>
          <Link href="/blogs" className="text-[#FF6B35] font-semibold inline-block mt-4">Back to blogs</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-[#FFF6F2] to-white border-b border-[#FFE4D6]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 text-xs text-[#FF6B35] font-medium">
            <span className="px-2 py-1 bg-[#FF6B35]/10 rounded-full">{post.tag}</span>
            <span className="text-[#5A5A5A]">•</span>
            <span className="text-[#5A5A5A]">{post.readTime}</span>
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
            {post.title}
          </h1>
          <p className="text-[#5A5A5A] mt-4 text-base max-w-3xl">{post.summary}</p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-orange">
          <p>
            This is a placeholder post. Replace this content with your article body. You can
            structure your blogs using MDX or fetch content from a CMS later.
          </p>
          <p>
            Meanwhile, this template provides consistent styling and routing at <code>/blogs/[slug]</code>.
          </p>
          <p>
            <Link href="/blogs" className="text-[#FF6B35] font-semibold">← Back to all blogs</Link>
          </p>
        </div>
      </section>
    </main>
  )
}


