
import * as Post1 from "./bangalore-marketing-benchmarks-2025"
import * as Post2 from "./saas-churn-reduction-performance-marketing"
import * as Post3 from "./bangalore-real-estate-neighborhood-marketing"
import * as Post4 from "./seo-vs-geo-future-of-search-bangalore"

export const allPosts = [Post1, Post2, Post3, Post4]

export const getPostBySlug = (slug: string) => {
    // Basic slug matching
    return allPosts.find((p) => p.post.slug === slug)
}
