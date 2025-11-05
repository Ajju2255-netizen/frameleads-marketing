import Link from "next/link"

export const metadata = {
  title: "Blog Categories | Frameleads",
  description: "Browse blog posts by category such as Performance Marketing, SEO, and Paid Social.",
}

const categories = [
  { slug: "performance-marketing", name: "Performance Marketing", description: "Acquisition frameworks, media buying, and measurement", count: 1 },
  { slug: "seo", name: "SEO", description: "Technical SEO, content strategy, and entity optimization", count: 1 },
  { slug: "paid-social", name: "Paid Social", description: "Creative strategy, hooks, and platform insights", count: 1 },
]

export default function BlogCategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-[#FFF6F2] to-white border-b border-[#FFE4D6]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">Blog Categories</h1>
          <p className="text-[#5A5A5A] mt-4 text-base max-w-2xl">
            Explore topics by category and dive deeper into the areas that matter most to your growth.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/blogs/categories/${cat.slug}`} className="block border border-[#FFE4D6] rounded-xl p-6 hover:shadow-lg hover:shadow-[#FF6B35]/10 transition-all bg-white">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#2D2D2D]">{cat.name}</h2>
                <span className="text-xs text-[#5A5A5A] bg-[#FF6B35]/10 text-[#FF6B35] px-2 py-1 rounded-full">{cat.count}</span>
              </div>
              <p className="text-[#5A5A5A] mt-2 text-sm">{cat.description}</p>
              <span className="inline-block mt-3 text-[#FF6B35] font-semibold">View posts →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}


