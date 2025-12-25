
import * as Post1 from "./bangalore-marketing-benchmarks-2025"
import * as Post2 from "./saas-churn-reduction-performance-marketing"
import * as Post3 from "./bangalore-real-estate-neighborhood-marketing"
import * as Post4 from "./seo-vs-geo-future-of-search-bangalore"
import * as Post5 from "./vernacular-marketing-bangalore-hinglish-kannada"
import * as Post6 from "./bangalore-ad-scheduling-salary-cycle-strategy"

import * as Post7 from "./ai-predictive-lead-scoring-bangalore"
import * as Post8 from "./bangalore-d2c-logistics-marketing-synergy"
import * as Post9 from "./privacy-first-lead-generation-dpdp-compliance"
import * as Post10 from "./meta-conversions-api-capi-setup-guide-2025"
import * as Post11 from "./meta-advantage-plus-vs-manual-targeting-2025"
import * as Post12 from "./meta-ads-creative-velocity-testing-framework"


export const allPosts = [Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, Post11, Post12]

export const getPostBySlug = (slug: string) => {
    // Basic slug matching
    return allPosts.find((p) => p.post.slug === slug)
}
