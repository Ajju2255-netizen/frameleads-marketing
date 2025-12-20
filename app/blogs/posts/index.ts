
import * as Post1 from "./bangalore-marketing-benchmarks-2025"
import * as Post2 from "./seo-in-2025"
import * as Post3 from "./bangalore-real-estate-neighborhood-marketing"

export const allPosts = [Post1, Post2, Post3]

export const getPostBySlug = (slug: string) => {
    // Basic slug matching
    return allPosts.find((p) => p.post.slug === slug)
}
