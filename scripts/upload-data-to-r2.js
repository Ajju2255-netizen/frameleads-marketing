#!/usr/bin/env node
/**
 * Sync local `data/*.json` to the `frameleads-pseo` R2 bucket.
 *
 * Bucket layout (see vault NEW 16/16.05 — Naming & Directory Conventions):
 *   v1/services.json
 *   v1/industries.json
 *   v1/geos/india.json
 *   v1/geos/global.json
 *   v1/glossary.json
 *   v1/comparisons.json
 *   _meta/schema-version
 *   _meta/uploaded-at
 *
 * Idempotent — uses sha256 hash comparison to skip unchanged files.
 *   npm run cf:upload-data            # sync everything
 *   npm run cf:upload-data -- --force # bypass hash check
 *
 * IMPORTANT: always passes `--remote` to wrangler. Without it, wrangler 4.x
 * silently writes to local miniflare state, NOT real R2.
 */

const { spawnSync, execSync } = require("node:child_process");
const { readFileSync, statSync, existsSync, writeFileSync, mkdirSync } = require("node:fs");
const { createHash } = require("node:crypto");
const { join, dirname } = require("node:path");

const BUCKET = "frameleads-pseo";
const REPO_ROOT = join(__dirname, "..");

/** local path (relative to repo root) → remote key in R2. */
const SYNC_MAP = [
	{ local: "data/services.json", remote: "v1/services.json" },
	{ local: "data/industries.json", remote: "v1/industries.json" },
	{ local: "data/geos-india.json", remote: "v1/geos/india.json" },
	{ local: "data/geos-global.json", remote: "v1/geos/global.json" },
	{ local: "data/glossary.json", remote: "v1/glossary.json" },
	{ local: "data/comparisons.json", remote: "v1/comparisons.json" },
];

const FORCE = process.argv.includes("--force");

function sha256(buf) {
	return createHash("sha256").update(buf).digest("hex");
}

function remoteHash(remoteKey) {
	try {
		const out = execSync(
			`wrangler r2 object get ${BUCKET}/${remoteKey} --pipe --remote 2>/dev/null`,
			{ stdio: ["ignore", "pipe", "ignore"] },
		);
		return sha256(out);
	} catch {
		return null;
	}
}

function uploadOne(entry) {
	const localPath = join(REPO_ROOT, entry.local);
	if (!existsSync(localPath)) {
		console.log(`  ! ${entry.local.padEnd(28)} missing locally — skipping`);
		return { ...entry, status: "missing" };
	}
	const stat = statSync(localPath);
	const buf = readFileSync(localPath);
	const localSha = sha256(buf);

	if (!FORCE) {
		const remote = remoteHash(entry.remote);
		if (remote === localSha) {
			console.log(
				`  · ${entry.local.padEnd(28)} → ${entry.remote.padEnd(28)} skip (unchanged)`,
			);
			return { ...entry, status: "skip" };
		}
	}

	const result = spawnSync(
		"wrangler",
		[
			"r2",
			"object",
			"put",
			`${BUCKET}/${entry.remote}`,
			"--file",
			localPath,
			"--content-type",
			"application/json",
			"--remote",
		],
		{ stdio: ["ignore", "pipe", "pipe"] },
	);

	if (result.status !== 0) {
		console.error(`  ✗ ${entry.local.padEnd(28)} FAILED`);
		console.error(result.stderr.toString());
		return { ...entry, status: "fail" };
	}
	const sizeKb = (stat.size / 1024).toFixed(1);
	console.log(
		`  ✓ ${entry.local.padEnd(28)} → ${entry.remote.padEnd(28)} ${sizeKb.padStart(7)} KB`,
	);
	return { ...entry, status: "uploaded" };
}

function bumpUploadedAt() {
	const meta = JSON.stringify(
		{ at: new Date().toISOString(), files: SYNC_MAP.length },
		null,
		2,
	);
	const tmp = join(REPO_ROOT, ".wrangler", "tmp-uploaded-at.json");
	mkdirSync(dirname(tmp), { recursive: true });
	writeFileSync(tmp, meta);
	spawnSync(
		"wrangler",
		[
			"r2",
			"object",
			"put",
			`${BUCKET}/_meta/uploaded-at`,
			"--file",
			tmp,
			"--content-type",
			"application/json",
			"--remote",
		],
		{ stdio: "ignore" },
	);
}

function main() {
	console.log(
		`\nSync ${SYNC_MAP.length} files → r2://${BUCKET}/${FORCE ? "  [FORCE]" : ""}\n`,
	);

	const results = SYNC_MAP.map(uploadOne);
	const counts = { uploaded: 0, skip: 0, fail: 0, missing: 0 };
	for (const r of results) counts[r.status]++;

	console.log(
		`\n${counts.uploaded} uploaded · ${counts.skip} unchanged · ${counts.missing} missing · ${counts.fail} failed\n`,
	);

	if (counts.uploaded > 0) {
		bumpUploadedAt();

		const tags = results
			.filter((r) => r.status === "uploaded")
			.map((r) => {
				const stem = r.remote
					.replace(/^v1\//, "")
					.replace(/\.json$/, "")
					.replaceAll("/", ":");
				return `pseo:${stem}`;
			})
			.join('","');
		console.log("Hint: invalidate ISR cache for changed slices —");
		console.log(
			`  curl -X POST $SITE_URL/api/revalidate -H 'authorization: Bearer $REVALIDATE_TOKEN' -d '{"tags":["${tags}"]}'`,
		);
	}

	process.exit(counts.fail > 0 ? 1 : 0);
}

main();
