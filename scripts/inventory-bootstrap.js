#!/usr/bin/env node
/**
 * Bootstraps data/inventory/master-pages.json from current sitemap segments.
 *
 * Reads lib/sitemap.ts SEGMENTS, expands each segment, and emits one row per URL
 * with tier inferred from segment ID. Idempotent: running twice does not
 * duplicate rows; merges by `url` key, preserves manual edits to `priority`,
 * `notes`, `quality_gate_passed`, etc.
 *
 * Run via: node scripts/inventory-bootstrap.js  (or via tsx if needed)
 */

const fs = require("node:fs");
const path = require("node:path");
const cp = require("node:child_process");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "data", "inventory", "master-pages.json");

const SITE_URL = "https://frameleads.com";
const TODAY = new Date().toISOString().slice(0, 10);
function inDays(d) {
	const dt = new Date();
	dt.setDate(dt.getDate() + d);
	return dt.toISOString().slice(0, 10);
}

const TIER_FROM_SEGMENT = {
	"0-pillars": "T0",
	"1-services": "T1a",
	"1-industries": "T1b-static",
	"1-countries": "T1c",
	"1-industry-pillars": "T1b",
	"3-service-geo-india": "T3",
	"3-service-geo-global": "T3",
	"4-service-industry": "T4",
	"5-service-industry-geo": "T5",
	"11-industry-geo": "T11",
	"13-pricing": "T13",
	"2-sub-services": "T2",
	"6-questions": "T6a",
	"6a-how-to": "T6a",
	"6b-what-is": "T6b",
	"6c-why": "T6c",
	"6d-is-it": "T6d",
	"6e-best": "T6e",
	"6f-how-much": "T6f",
	"7-tools": "T7",
	"8-glossary": "T8",
	"9-comparison": "T9",
	"10-case-studies": "T10",
	"ad-platforms": "T1a",
	academy: "academy",
	legal: "legal",
};

const TEMPLATE_FROM_SEGMENT = {
	"0-pillars": "hand-coded",
	"1-services": "hand-coded",
	"1-industries": "hand-coded",
	"1-countries": "hand-coded",
	"1-industry-pillars": "IndustryPillarPage",
	"3-service-geo-india": "Tier3Page",
	"3-service-geo-global": "Tier3Page",
	"4-service-industry": "Tier4Page",
	"5-service-industry-geo": "Tier5Page",
	"11-industry-geo": "Tier11Page",
	"13-pricing": "Tier13Page",
	"2-sub-services": "Tier2Page",
	"6-questions": "Tier6Page",
	"6a-how-to": "Tier6Page",
	"6b-what-is": "Tier6Page",
	"6c-why": "Tier6Page",
	"6d-is-it": "Tier6Page",
	"6e-best": "Tier6Page",
	"6f-how-much": "Tier6Page",
	"7-tools": "hand-coded",
	"8-glossary": "Tier8GlossaryPage",
	"9-comparison": "Tier9Page",
	"ad-platforms": "hand-coded",
	academy: "hand-coded",
	legal: "hand-coded",
};

const PRIORITY_FROM_SEGMENT = {
	"0-pillars": 0.9,
	"1-services": 0.9,
	"1-industries": 0.9,
	"1-countries": 0.9,
	"1-industry-pillars": 0.85,
	"3-service-geo-india": 0.7,
	"3-service-geo-global": 0.7,
	"4-service-industry": 0.7,
	"5-service-industry-geo": 0.6,
	"11-industry-geo": 0.7,
	"13-pricing": 0.75,
	"2-sub-services": 0.75,
	"6-questions": 0.7,
	"6a-how-to": 0.7,
	"6b-what-is": 0.7,
	"6c-why": 0.7,
	"6d-is-it": 0.7,
	"6e-best": 0.7,
	"6f-how-much": 0.7,
	"7-tools": 0.8,
	"8-glossary": 0.7,
	"9-comparison": 0.7,
	"ad-platforms": 0.7,
	academy: 0.6,
	legal: 0.3,
};

const REVIEW_DAYS_FROM_TIER = {
	T0: 30,
	T1a: 90,
	T1b: 90,
	"T1b-static": 90,
	T1c: 90,
	T3: 180,
	T4: 180,
	T5: 180,
	T11: 180,
	T13: 180,
	T2: 180,
	T6a: 90,
	T6b: 90,
	T6c: 90,
	T6d: 90,
	T6e: 90,
	T6f: 90,
	T7: 30,
	T8: 90,
	T9: 90,
	T10: 90,
	academy: 365,
	legal: 365,
};

function fetchSegmentsFromTsx() {
	// Use tsx to evaluate lib/sitemap.ts and dump segments
	const evalScript = `
		import { SEGMENTS } from "../lib/sitemap";
		const out = SEGMENTS.map(s => ({ id: s.id, urls: s.urls() }));
		process.stdout.write(JSON.stringify(out));
	`;
	const tmpFile = path.join(ROOT, "scripts", "_inventory-eval.ts");
	fs.writeFileSync(tmpFile, evalScript);
	try {
		const result = cp.execSync(`npx tsx ${tmpFile}`, {
			cwd: ROOT,
			encoding: "utf8",
			maxBuffer: 200 * 1024 * 1024,
		});
		return JSON.parse(result);
	} finally {
		fs.unlinkSync(tmpFile);
	}
}

function buildRows(segments) {
	const rows = [];
	for (const seg of segments) {
		const tier = TIER_FROM_SEGMENT[seg.id] ?? "unknown";
		const template = TEMPLATE_FROM_SEGMENT[seg.id] ?? "hand-coded";
		const reviewDays = REVIEW_DAYS_FROM_TIER[tier] ?? 180;
		const defaultPriority = PRIORITY_FROM_SEGMENT[seg.id] ?? 0.5;

		for (const u of seg.urls) {
			const url = u.loc;
			const slug = url.replace(SITE_URL, "").replace(/^\//, "") || "/";
			rows.push({
				url,
				slug,
				tier,
				template,
				status: "live",
				priority: u.priority ?? defaultPriority,
				primary_keyword: null,
				secondary_keywords: [],
				search_intent: null,
				search_volume_monthly: null,
				kw_difficulty: null,
				schema_types: [],
				data_inputs: {},
				internal_links_in: null,
				internal_links_out: null,
				external_citations: null,
				last_reviewed: u.lastmod ?? TODAY,
				next_review_due: inDays(reviewDays),
				author: "Frameleads Editorial Team",
				reviewer: "Frameleads Editorial Team",
				quality_gate_passed: null,
				in_sitemap: true,
				in_llms_txt: ["1-services", "1-industries", "1-industry-pillars", "1-countries", "8-glossary", "9-comparison", "6-questions"].includes(seg.id),
				ga4_pageviews_28d: null,
				search_console_clicks_28d: null,
				aio_cited: null,
				notes: "",
				_segment: seg.id,
			});
		}
	}
	return rows;
}

function mergeWithExisting(newRows) {
	if (!fs.existsSync(OUT)) return newRows;
	const existing = JSON.parse(fs.readFileSync(OUT, "utf8"));
	const byUrl = new Map(existing.map((r) => [r.url, r]));
	const merged = [];
	const PRESERVED_KEYS = [
		"primary_keyword",
		"secondary_keywords",
		"search_intent",
		"search_volume_monthly",
		"kw_difficulty",
		"priority",
		"author",
		"reviewer",
		"quality_gate_passed",
		"notes",
		"ga4_pageviews_28d",
		"search_console_clicks_28d",
		"aio_cited",
	];
	for (const newRow of newRows) {
		const old = byUrl.get(newRow.url);
		if (!old) {
			merged.push(newRow);
		} else {
			const m = { ...newRow };
			for (const k of PRESERVED_KEYS) {
				if (
					old[k] !== null &&
					old[k] !== undefined &&
					old[k] !== "" &&
					!(Array.isArray(old[k]) && old[k].length === 0)
				) {
					m[k] = old[k];
				}
			}
			merged.push(m);
			byUrl.delete(newRow.url);
		}
	}
	// rows that were in old but not new = pages no longer in sitemap; mark as removed
	for (const [, old] of byUrl) {
		if (old.status !== "removed") {
			merged.push({ ...old, status: "removed", _segment: null });
		}
	}
	return merged;
}

function main() {
	console.log("Fetching segments via tsx...");
	const segments = fetchSegmentsFromTsx();
	console.log(`Got ${segments.length} segments`);
	const newRows = buildRows(segments);
	console.log(`Built ${newRows.length} candidate rows`);
	const merged = mergeWithExisting(newRows);
	const liveCount = merged.filter((r) => r.status === "live").length;
	const removedCount = merged.filter((r) => r.status === "removed").length;
	fs.writeFileSync(OUT, JSON.stringify(merged, null, 2));
	console.log(
		`Wrote ${OUT} — ${merged.length} total rows (${liveCount} live, ${removedCount} removed)`,
	);

	// Per-tier breakdown
	const byTier = {};
	for (const r of merged) {
		if (r.status !== "live") continue;
		byTier[r.tier] = (byTier[r.tier] || 0) + 1;
	}
	console.log("Per-tier breakdown:");
	for (const [tier, count] of Object.entries(byTier).sort()) {
		console.log(`  ${tier.padEnd(15)} ${String(count).padStart(6)}`);
	}
}

main();
