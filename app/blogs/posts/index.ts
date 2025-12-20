
import * as Post1 from "./bangalore-marketing-benchmarks-2025"
import * as Post2 from "./seo-in-2025"
import * as Post3 from "./creative-strategy-paid-social"

export const allPosts = [Post1, Post2, Post3]

export const getPostBySlug = (slug: string) => {
    return allPosts.find((p) => p.post.slug === slug)
}
