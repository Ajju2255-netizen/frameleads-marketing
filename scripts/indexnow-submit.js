#!/usr/bin/env node

/**
 * IndexNow submission — Bing + Yandex near-real-time indexing.
 *
 * Reads the live sitemap-index, traverses all sub-sitemaps, and submits the
 * full URL set to api.indexnow.org. No daily quota (unlike Google's Indexing
 * API), batches of up to 10,000 URLs per request.
 *
 * Usage:
 *   node scripts/indexnow-submit.js                       # submit all
 *   node scripts/indexnow-submit.js --segment 1-services  # submit one sub-sitemap
 *   node scripts/indexnow-submit.js --priority high       # only priority ≥ 0.85
 *
 * Env vars (optional):
 *   SITE_URL              defaults to https://frameleads.com
 *   INDEXNOW_KEY          defaults to the value in public/<key>.txt
 *   INDEXNOW_ENDPOINT     defaults to https://api.indexnow.org/indexnow
 *
 * Reference: https://www.indexnow.org/documentation
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const SITE_URL = process.env.SITE_URL || "https://frameleads.com";
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const HOST = new URL(SITE_URL).host;

function findIndexNowKey() {
	if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY;
	const publicDir = path.join(process.cwd(), "public");
	if (!fs.existsSync(publicDir)) {
		throw new Error("public/ directory not found — run from repo root.");
	}
	const file = fs.readdirSync(publicDir).find((f) => /^[a-f0-9]{32,64}\.txt$/i.test(f));
	if (!file) {
		throw new Error(
			"IndexNow key file not found. Place a <key>.txt in public/ where filename matches the key contents.",
		);
	}
	return path.basename(file, ".txt");
}

const KEY = findIndexNowKey();

// ─────────────────────── HTTP helpers ───────────────────────

function fetchText(url) {
	return new Promise((resolve, reject) => {
		https
			.get(url, (res) => {
				if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
					return resolve(fetchText(res.headers.location));
				}
				if (res.statusCode !== 200) {
					return reject(new Error(`GET ${url} → ${res.statusCode}`));
				}
				let data = "";
				res.on("data", (chunk) => (data += chunk));
				res.on("end", () => resolve(data));
			})
			.on("error", reject);
	});
}

function postJson(endpoint, body) {
	return new Promise((resolve, reject) => {
		const u = new URL(endpoint);
		const payload = JSON.stringify(body);
		const req = https.request(
			{
				method: "POST",
				hostname: u.hostname,
				port: u.port || 443,
				path: u.pathname + (u.search || ""),
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Content-Length": Buffer.byteLength(payload),
				},
			},
			(res) => {
				let data = "";
				res.on("data", (chunk) => (data += chunk));
				res.on("end", () => resolve({ status: res.statusCode, body: data }));
			},
		);
		req.on("error", reject);
		req.write(payload);
		req.end();
	});
}

// ─────────────────────── Sitemap traversal ───────────────────────

function extractTagText(xml, tag) {
	const out = [];
	const re = new RegExp(`<${tag}>([^<]+)<\\/${tag}>`, "g");
	let m;
	while ((m = re.exec(xml)) !== null) {
		out.push(m[1].trim());
	}
	return out;
}

async function fetchAllUrls() {
	console.log(`📡 Fetching sitemap-index from ${SITE_URL}/sitemap.xml`);
	const indexXml = await fetchText(`${SITE_URL}/sitemap.xml`);
	const subSitemaps = extractTagText(indexXml, "loc");
	console.log(`   Found ${subSitemaps.length} sub-sitemaps in the index.`);

	const all = [];
	for (const sub of subSitemaps) {
		try {
			const xml = await fetchText(sub);
			const urls = extractTagText(xml, "loc");
			console.log(`   • ${sub.split("/sitemaps/")[1] || sub}: ${urls.length} URLs`);
			all.push(...urls);
		} catch (err) {
			console.warn(`   ✗ failed ${sub}: ${err.message}`);
		}
	}
	return all;
}

// ─────────────────────── Submit in chunks ───────────────────────

function chunk(arr, size) {
	const out = [];
	for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
	return out;
}

async function submit(urlList) {
	const batches = chunk(urlList, 10_000);
	console.log(`\n📤 Submitting ${urlList.length} URLs to IndexNow in ${batches.length} batch(es).`);
	let okCount = 0;
	let failCount = 0;
	for (let i = 0; i < batches.length; i++) {
		const batch = batches[i];
		const body = {
			host: HOST,
			key: KEY,
			keyLocation: `${SITE_URL}/${KEY}.txt`,
			urlList: batch,
		};
		const { status, body: respBody } = await postJson(INDEXNOW_ENDPOINT, body);
		const okStatus = status === 200 || status === 202;
		console.log(
			`   batch ${i + 1}/${batches.length} (${batch.length} URLs) → ${status}${
				!okStatus ? ` :: ${respBody?.slice(0, 200)}` : ""
			}`,
		);
		if (okStatus) okCount += batch.length;
		else failCount += batch.length;
		// brief breather between batches (IndexNow throttles aggressive callers)
		await new Promise((r) => setTimeout(r, 1500));
	}
	console.log(`\n✅ Done — accepted: ${okCount}, failed: ${failCount}`);
	return { okCount, failCount };
}

// ─────────────────────── Main ───────────────────────

async function main() {
	const args = process.argv.slice(2);
	const segmentIdx = args.indexOf("--segment");
	const segment = segmentIdx >= 0 ? args[segmentIdx + 1] : null;

	let urls;
	if (segment) {
		console.log(`📡 Targeted submission for sub-sitemap: ${segment}`);
		const xml = await fetchText(`${SITE_URL}/sitemaps/${segment}.xml`);
		urls = extractTagText(xml, "loc");
		console.log(`   ${urls.length} URLs in segment.`);
	} else {
		urls = await fetchAllUrls();
	}

	// De-duplicate just in case the same URL appears in multiple sub-sitemaps
	urls = Array.from(new Set(urls));
	console.log(`\n📊 Total unique URLs to submit: ${urls.length}`);

	if (urls.length === 0) {
		console.log("Nothing to submit. Exiting.");
		return;
	}

	await submit(urls);
}

main().catch((err) => {
	console.error("✗ Fatal:", err.message);
	process.exit(1);
});
