// OpenNext for Cloudflare config — bridges Next.js ISR onto Workers + R2 + KV.
// Bindings consumed: NEXT_INC_CACHE_R2_BUCKET, NEXT_TAG_CACHE_KV — declared in wrangler.toml.

import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import kvTagCache from "@opennextjs/cloudflare/overrides/tag-cache/kv-next-tag-cache";

export default defineCloudflareConfig({
	// Page bodies + fetch-cache responses live in R2.
	incrementalCache: r2IncrementalCache,

	// Tag/path index for revalidateTag() and revalidatePath() — KV.
	// KV is eventually consistent (~60s); fine for 24h revalidate windows.
	tagCache: kvTagCache,
});
