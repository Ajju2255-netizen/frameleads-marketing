
import { getPostBySlug } from "../app/blogs/posts/index";

const slug = "meta-conversions-api-capi-setup-guide-2025";
const post = getPostBySlug(slug);

if (post) {
    console.log("✅ Post found:");
    console.log("Title:", post.post.title);
    console.log("Slug:", post.post.slug);
} else {
    console.error("❌ Post NOT found for slug:", slug);
    process.exit(1);
}
