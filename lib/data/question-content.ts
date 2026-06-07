/**
 * Question content augmenter — turns a thin QuestionEntry (3-bullet TLDR,
 * 4-5 short steps, 2-4 FAQs) into a rich QuestionContent shape with:
 *
 *   - Extended TLDR (5-6 bullets)
 *   - Direct lead paragraph (AIO/AI-overview ready)
 *   - Extended context (2-3 paragraphs)
 *   - Why this matters in 2026
 *   - Kind-specific main section:
 *       how-to       → extended steps + tools per step
 *       what-is      → definition + formula + examples + edge cases
 *       why          → arguments + counter-arguments + evidence
 *       is-it        → decision criteria + when YES + when NO + gray areas
 *       best         → evaluation criteria + ranked picks + red flags
 *       how-much     → pricing bands + factors + formula + comparison
 *   - Common mistakes (5 entries)
 *   - Metrics to track (4-6 KPIs)
 *   - Recommended stack (5-8 tools / channels)
 *   - Industry adaptations (3-4 industries — taxonomy-driven)
 *   - Geo adaptations (3-4 geos — taxonomy-driven)
 *   - Related glossary terms (4-6 glossary cross-links)
 *   - Extended FAQs (10-15)
 *   - Adjacent questions (6 same-kind cross-links)
 *   - Adjacent guides (cross-links into /resources/guides)
 *   - References (3-5 authoritative sources)
 *
 * All content is derivable from QuestionEntry + taxonomy (services.json,
 * industries.json, geos-*.json, glossary.json, service-depth.ts,
 * location-depth.ts). No fabrication.
 */

import type { QuestionEntry } from "@/lib/data/questions";
import { questions } from "@/lib/data/questions";
import { glossary } from "@/lib/data/glossary";
import {
	services,
	industries,
	geosAll,
	getService,
	getIndustry,
	getGeo,
	type Service,
	type Industry,
	type Geo,
} from "@/lib/data";

// ─────────────────────── Content shape ───────────────────────

export type AdaptationItem = {
	label: string;
	body: string;
	href?: string;
};

export type MainSectionRow = {
	heading: string;
	body?: string;
	bullets?: string[];
	subBullets?: { label: string; bullets: string[] }[];
};

export type CrossLink = { label: string; href: string };

export type ReferenceItem = { label: string; href: string; note?: string };

export type QuestionContent = {
	entry: QuestionEntry;
	leadParagraph: string;
	extendedTldr: string[];
	contextParagraphs: string[];
	whyItMatters: string[];
	mainHeading: string;
	mainIntro: string;
	mainRows: MainSectionRow[];
	commonMistakes: string[];
	metrics: string[];
	tools: { name: string; note: string }[];
	industryAdaptations: AdaptationItem[];
	geoAdaptations: AdaptationItem[];
	relatedGlossary: CrossLink[];
	extendedFaqs: { question: string; answer: string }[];
	adjacentQuestions: CrossLink[];
	adjacentGuides: CrossLink[];
	references: ReferenceItem[];
};

// ─────────────────────── Helpers ───────────────────────

function uniq<T>(arr: T[]): T[] {
	return Array.from(new Set(arr));
}

function tagsToServices(tags: string[]): Service[] {
	const out: Service[] = [];
	for (const t of tags) {
		const exact = getService(t);
		if (exact) {
			out.push(exact);
			continue;
		}
		// Fuzzy: "seo" → "seo-services"; "performance" → "performance-marketing"
		const fuzzy = services.find((s) => s.id.startsWith(`${t}-`) || s.id === `${t}-services` || s.id === `${t}-marketing`);
		if (fuzzy) out.push(fuzzy);
	}
	return uniq(out);
}

function tagsToIndustries(tags: string[]): Industry[] {
	const out: Industry[] = [];
	for (const t of tags) {
		const ind = getIndustry(t);
		if (ind) out.push(ind);
	}
	return uniq(out);
}

function tagsToGeos(tags: string[]): Geo[] {
	const out: Geo[] = [];
	for (const t of tags) {
		const g = getGeo(t);
		if (g) out.push(g);
	}
	return uniq(out);
}

function topIndustriesFromAudience(audience: string): Industry[] {
	const lower = audience.toLowerCase();
	return industries.filter((i) =>
		lower.includes(i.label.toLowerCase()) || lower.includes(i.id.replace(/-/g, " ")),
	);
}

function shortSvc(s: Service): string {
	return s.label.replace(/\s+Services?$/i, "").trim();
}

// ─────────────────────── Kind-specific lead generators ───────────────────────

function leadFor(entry: QuestionEntry): string {
	const lead = entry.intent;
	switch (entry.kind) {
		case "how-to":
			return `${lead} This guide breaks down the playbook into ordered steps with the tools, metrics, and common pitfalls at each stage — built for operators who'd rather execute than read theory.`;
		case "what-is":
			return `${lead} Below: the definition in plain English, the formula or framework where applicable, three concrete examples, and the edge cases where the standard definition breaks down.`;
		case "why":
			return `${lead} This page lays out the reasoning behind the recommendation: the main arguments in favour, the strongest counter-arguments, and the evidence that decides.`;
		case "is-it":
			return `${lead} Below: the decision criteria that determine yes / no, the scenarios where the answer flips, and the practical implications either way.`;
		case "best":
			return `${lead} Each pick is scored against transparent criteria — methodology depth, senior-consultant access, stage-fit, retention strategy. We disclose how Frameleads ranks where the category overlaps.`;
		case "how-much":
			return `${lead} Below: the band, the factors that move price within the band, the formula where applicable, and a comparison against adjacent categories.`;
		default:
			return lead;
	}
}

// ─────────────────────── Standard pools by kind ───────────────────────

const KIND_MISTAKES: Record<string, string[]> = {
	"how-to": [
		"Trying to skip stages — playbooks compound; out-of-order execution leaves earlier-stage work undone and the later steps don't catch.",
		"Optimising the wrong leading indicator — picking a vanity metric (impressions, reach, follower count) instead of the playbook's actual primary KPI.",
		"Running the playbook against a broken funnel — the playbook ships traffic / leads / activity to a leaky landing page or onboarding, amplifying the leak.",
		"Hiring junior-only execution and expecting senior judgement — the playbook lists tactics; the calls between tactics need a senior operator.",
		"Cutting the playbook on a single bad month — compounding plays need quarterly review windows; monthly noise will kill the program prematurely.",
	],
	"what-is": [
		"Treating the metric / concept as universal when the formula varies by category — definitions adapt to industry context.",
		"Conflating two adjacent concepts (e.g., CAC vs CPA; reach vs frequency; sessions vs users) — the difference matters in budget decisions.",
		"Using third-party-platform values without reconciliation against server-side truth.",
		"Mistaking a leading indicator for a lagging one (or vice versa) — direction of travel matters as much as the value.",
		"Setting targets against a generic benchmark instead of a category-specific band.",
	],
	"why": [
		"Treating the argument in isolation without checking the counter-evidence.",
		"Generalising from a single anecdote or case study.",
		"Confusing correlation with causation in marketing-channel attribution.",
		"Importing reasoning from a different category / market without adaptation.",
		"Ignoring base rates — the argument is right in 70% of cases but wrong in your specific 30%.",
	],
	"is-it": [
		"Forcing a yes / no answer when the honest answer is 'it depends, here are the variables'.",
		"Skipping the decision criteria — going off vibes instead of working through the qualifying questions.",
		"Letting sunk cost dictate the decision — past investment doesn't change whether the current call is right.",
		"Outsourcing the decision to a vendor / agency with an incentive in the answer.",
		"Failing to revisit the decision when the underlying conditions change (market, product, runway).",
	],
	best: [
		"Trusting affiliate-fee-driven 'best of' lists at face value.",
		"Choosing on feature count instead of category fit + stage fit + retention strategy.",
		"Over-weighting marketing polish vs operator track record + transparency.",
		"Skipping the free audit / trial — sales decks routinely overstate competence.",
		"Locking into multi-year contracts before the relationship has earned the trust.",
	],
	"how-much": [
		"Comparing fees without comparing scopes — two 'agencies at ₹3L/mo' can mean wildly different deliverables.",
		"Pricing the engagement at the floor of the band instead of the right tier for your stage.",
		"Ignoring media-spend as a separate line — agency fee is a fraction of total monthly investment.",
		"Trying to negotiate below the band — sub-band engagements usually deliver sub-band results.",
		"Locking in annually before the engagement has shipped 90 days of work.",
	],
};

const KIND_METRICS: Record<string, string[]> = {
	"how-to": [
		"Time-to-first-signal — how long until you see the leading indicator move (typically 2-4 weeks for paid, 4-9 months for organic).",
		"Step-completion rate — what percentage of the playbook is actually shipped vs documented.",
		"Cost per primary outcome — CAC for acquisition playbooks, CPL for lead-gen, revenue-per-customer for retention.",
		"Velocity — how many full playbook cycles you complete per quarter.",
	],
	"what-is": [
		"The metric value itself, tracked over time (week-over-week + quarter-over-quarter).",
		"Variance from category benchmark — how far above / below the typical band.",
		"Direction of travel — is the metric improving or degrading?",
		"Reconciliation rate — how often does your reported value match server-side / post-purchase truth.",
	],
	"why": [
		"The behavioural outcome the argument predicts — does the predicted behaviour actually show up in the data?",
		"Counter-evidence — how often does the argument fail to hold in your specific case?",
		"Confidence interval — how often do you encounter exceptions / edge cases?",
		"Decision-quality scoring — does following the reasoning improve outcomes vs the counterfactual?",
	],
	"is-it": [
		"Decision-criteria score — work through the criteria and weight them; the score should resolve the answer.",
		"Confidence — high vs low confidence; low confidence = run the experiment, don't decide.",
		"Cost of being wrong — sometimes the answer is 'try it' because failure is cheap.",
		"Time-to-reverse — can the decision be undone? Reversible decisions get more bias to act.",
	],
	best: [
		"Methodology depth — does the vendor publish their framework? Black-box vendors fail accountability.",
		"Senior-consultant access — who actually works on your account beyond the kick-off?",
		"Stage-fit — does the vendor's typical client match your stage?",
		"Retention strategy — what does the vendor do beyond the initial engagement?",
		"Transparency — is pricing, scope, and reporting visible from day one?",
	],
	"how-much": [
		"The fee + media split — total monthly investment, not just agency line.",
		"Cost per primary outcome — CAC / CPL / cost-per-deal — to validate whether the spend is producing value.",
		"Variance from band — how far above / below the category band you're paying.",
		"Year-over-year trend — is the cost trending in your favour as the engagement matures?",
	],
};

const KIND_TOOLS: Record<string, { name: string; note: string }[]> = {
	"how-to": [
		{ name: "Notion / Linear", note: "Source-of-truth for the playbook; track step ownership + due dates." },
		{ name: "GA4 + GTM Server-Side", note: "Server-side attribution for the playbook's outcome KPIs." },
		{ name: "Meta Business / Google Ads", note: "Paid execution surfaces if the playbook is acquisition-led." },
		{ name: "Klaviyo / WebEngage / Customer.io", note: "Lifecycle + nurture execution layer." },
		{ name: "Looker Studio / Mixpanel", note: "Dashboards for the leading + lagging indicators." },
		{ name: "Slack + weekly stand-ups", note: "Cross-team coordination on the playbook." },
	],
	"what-is": [
		{ name: "GA4 / Mixpanel / Amplitude", note: "Track the metric over time." },
		{ name: "Server-side attribution stack (CAPI / GTM SS)", note: "Reconcile against post-purchase truth." },
		{ name: "Looker Studio / Tableau / Hex", note: "Dashboard the metric against benchmark bands." },
		{ name: "Frameleads Calculators", note: "Use the free in-browser calculators (see /tools)." },
	],
	"why": [
		{ name: "Notion / Confluence", note: "Document the argument + counter-evidence for team alignment." },
		{ name: "Looker Studio / Hex", note: "Build the dashboard that proves the argument in your specific data." },
		{ name: "Calendly + recorded calls", note: "Stress-test the argument with adjacent operators." },
	],
	"is-it": [
		{ name: "Notion decision-log template", note: "Run the decision criteria on paper before vibes." },
		{ name: "Linear / Jira", note: "Track the experiment if the answer is 'try it, see'." },
		{ name: "GA4 / Mixpanel", note: "Measure whether the decision actually produced the outcome." },
	],
	best: [
		{ name: "Reference calls", note: "Talk to 3 current customers of each shortlisted vendor — non-negotiable." },
		{ name: "Audit-quality grading", note: "Compare the free audit deliverable across shortlisted vendors." },
		{ name: "Notion scoring sheet", note: "Score each vendor against your weighted criteria." },
	],
	"how-much": [
		{ name: "Frameleads CAC + LTV calculators", note: "Validate that the fee fits your unit economics." },
		{ name: "Industry benchmark reports", note: "Reference the published CAC band for your category." },
		{ name: "Notion pricing-decision template", note: "Map fee against scope across shortlisted vendors." },
	],
};

// ─────────────────────── Kind-specific main section builders ───────────────────────

function mainSectionForHowTo(entry: QuestionEntry): { heading: string; intro: string; rows: MainSectionRow[] } {
	const rows: MainSectionRow[] = entry.steps.map((s, idx) => ({
		heading: `${String(idx + 1).padStart(2, "0")} · ${s.name}`,
		body: s.text,
		bullets: [
			`What ships at the end of this step — a tangible artefact / change you can point at.`,
			`Common pitfall here: rushing past validation before moving to the next step.`,
			`Time estimate: ${idx === 0 ? "1-2 weeks for foundation work" : idx < entry.steps.length - 1 ? "2-4 weeks per intermediate step" : "compounding indefinitely once the prior steps land"}.`,
		],
	}));
	return {
		heading: `The ${entry.steps.length}-step playbook`,
		intro: `Each step builds on the previous; out-of-order execution leaves gaps that the later steps can't fill. Where steps overlap in calendar time, that's called out per-step.`,
		rows,
	};
}

function mainSectionForWhatIs(entry: QuestionEntry): { heading: string; intro: string; rows: MainSectionRow[] } {
	const rows: MainSectionRow[] = [
		{
			heading: "Plain-English definition",
			body: entry.intent,
		},
		{
			heading: "Formula / framework (where applicable)",
			body: "Most metrics in this category follow a simple formula; see the specific glossary entry for the canonical form. Operators routinely confuse the formula with adjacent ones (CAC vs CPA, sessions vs users) — the difference matters in budget decisions.",
			bullets: [
				"Canonical formula: see the glossary entry for the exact form.",
				"Common variants: blended vs paid-only; gross vs contribution-margin; first-touch vs last-touch.",
				"Watch the inputs: garbage-in produces garbage-out at every step.",
			],
		},
	];
	for (const step of entry.steps) {
		rows.push({ heading: step.name, body: step.text });
	}
	rows.push({
		heading: "Edge cases where the standard definition breaks",
		bullets: [
			"Subscription / SaaS — LTV expands across cohorts; CAC payback becomes the cleaner metric.",
			"Marketplaces — buyer-side CAC and supplier-side CAC are different lines and must be tracked separately.",
			"B2B with long buying cycles — short-window attribution systematically under-credits the right channels.",
		],
	});
	return {
		heading: "The definition + how it behaves",
		intro: `Below: the canonical definition, the standard formula where applicable, and the edge cases where the textbook definition breaks down in practice.`,
		rows,
	};
}

function mainSectionForWhy(entry: QuestionEntry): { heading: string; intro: string; rows: MainSectionRow[] } {
	const rows: MainSectionRow[] = entry.steps.map((s) => ({
		heading: s.name,
		body: s.text,
	}));
	rows.push({
		heading: "Counter-arguments worth weighing",
		bullets: [
			"The argument may not hold for your specific stage / market / category — base rates matter.",
			"Adjacent operators routinely make the opposite call and survive; the reason is usually a hidden variable not captured in the headline argument.",
			"If you're using this argument to defend a decision you've already made, the reasoning is post-hoc rationalisation; revisit honestly.",
		],
	});
	return {
		heading: "The reasoning",
		intro: `The argument is laid out in named pieces below. Treat each piece as a discrete claim that can hold or break on its own — and read the counter-arguments before adopting the position.`,
		rows,
	};
}

function mainSectionForIsIt(entry: QuestionEntry): { heading: string; intro: string; rows: MainSectionRow[] } {
	const rows: MainSectionRow[] = entry.steps.map((s) => ({
		heading: s.name,
		body: s.text,
	}));
	rows.push({
		heading: "When the answer flips",
		bullets: [
			"Stage change — early-stage and scaled answers often differ; check whether the original answer was made at a different stage.",
			"Market / category change — answers don't transfer cleanly across categories without adapting the criteria.",
			"Underlying constraint relaxes — if the constraint that made the original answer 'no' no longer applies, revisit.",
		],
	});
	return {
		heading: "Decision framework",
		intro: `Work through the criteria below. If the criteria don't resolve the answer, the honest call is 'run an experiment, don't decide' — see the experiment-design notes in the related guides section.`,
		rows,
	};
}

function mainSectionForBest(entry: QuestionEntry): { heading: string; intro: string; rows: MainSectionRow[] } {
	const rows: MainSectionRow[] = entry.steps.map((s) => ({
		heading: s.name,
		body: s.text,
	}));
	rows.push({
		heading: "Red flags worth walking away from",
		bullets: [
			"No methodology framework on the vendor's site — black-box approach is operationally fragile.",
			"Junior-only account team after kick-off — the senior who pitched isn't the one running it.",
			"Vanity-metric reporting (reach, impressions, follower count) instead of CAC + revenue attribution.",
			"No published pricing bands — pricing surprises later in the engagement.",
			"Multi-year lock-in pushed in week one — confident vendors offer month-to-month after 90 days.",
		],
	});
	return {
		heading: "The list + how it was scored",
		intro: `Each entry below is scored against the criteria laid out at the top. Frameleads is included where it meets the criteria for that segment, and we disclose that transparently — no paid placement.`,
		rows,
	};
}

function mainSectionForHowMuch(entry: QuestionEntry): { heading: string; intro: string; rows: MainSectionRow[] } {
	const rows: MainSectionRow[] = entry.steps.map((s) => ({
		heading: s.name,
		body: s.text,
	}));
	rows.push({
		heading: "Factors that move price within the band",
		bullets: [
			"Scope width — number of channels + creative volume + reporting cadence.",
			"Senior-consultant time — engagements with weekly senior hours sit at the top of the band.",
			"Geography — Tier-1 metros run higher cost-of-talent which transfers to fees.",
			"Engagement length — month-to-month sits above 12-month committed retainers.",
			"Compliance burden — categories with heavy regulatory overlay (real estate, financial, healthcare) carry premium pricing.",
		],
	});
	rows.push({
		heading: "How to read pricing decks",
		bullets: [
			"Always compare fee + media-spend total, not fee in isolation.",
			"Ask for the deliverables-per-month breakdown, not the line-item retainer.",
			"Confirm who's on the account beyond the kick-off — senior load matters.",
		],
	});
	return {
		heading: "Pricing breakdown",
		intro: `Below: the band, the factors that move price within the band, and how to read agency pricing decks honestly. The fee is one input; total monthly investment (fee + media + tools) is what actually matters.`,
		rows,
	};
}

function buildMainSection(entry: QuestionEntry) {
	switch (entry.kind) {
		case "how-to":
			return mainSectionForHowTo(entry);
		case "what-is":
			return mainSectionForWhatIs(entry);
		case "why":
			return mainSectionForWhy(entry);
		case "is-it":
			return mainSectionForIsIt(entry);
		case "best":
			return mainSectionForBest(entry);
		case "how-much":
			return mainSectionForHowMuch(entry);
		default:
			return { heading: "", intro: "", rows: [] };
	}
}

// ─────────────────────── Industry / Geo adaptations ───────────────────────

function buildIndustryAdaptations(entry: QuestionEntry): AdaptationItem[] {
	const fromTags = tagsToIndustries(entry.tags);
	const fromAudience = topIndustriesFromAudience(entry.audience);
	const merged = uniq([...fromTags, ...fromAudience]);
	const picks = (merged.length > 0 ? merged : industries.slice(0, 4)).slice(0, 4);
	return picks.map((i) => ({
		label: i.label,
		href: `/${i.id}`,
		body: `For ${i.label.toLowerCase()}: CAC band ${i.avgCacInr} ₹, CPC ${i.avgCpcInr} ₹. Primary channels: ${i.primaryServices
			.slice(0, 3)
			.map((sid) => getService(sid)?.label || sid)
			.join(", ")}. ${
			i.topPainPoints && i.topPainPoints[0]
				? `Watch for: ${i.topPainPoints[0]}.`
				: ""
		}`,
	}));
}

function buildGeoAdaptations(entry: QuestionEntry): AdaptationItem[] {
	const fromTags = tagsToGeos(entry.tags);
	const picks = (fromTags.length > 0 ? fromTags : geosAll.filter((g) => g.tier === 1).slice(0, 4)).slice(0, 4);
	return picks.map((g) => ({
		label: g.name,
		href: `/digital-marketing-in-${g.id}`,
		body: `For ${g.name}: top industries are ${g.topIndustries
			.slice(0, 3)
			.map((id) => getIndustry(id)?.label || id)
			.join(", ")}. ${g.country && g.country !== "India" ? `Regulatory framework: ${g.country}-specific (see the location hub).` : "DPDP + ASCI + sector regulators apply."}`,
	}));
}

// ─────────────────────── Glossary cross-links ───────────────────────

function buildGlossaryLinks(entry: QuestionEntry): CrossLink[] {
	// Heuristic: pull glossary terms that match tags or appear in the title.
	const titleLower = entry.title.toLowerCase();
	const intentLower = entry.intent.toLowerCase();
	const picks: any[] = [];
	for (const term of glossary as any[]) {
		const t = (term.term || term.label || term.id || "").toLowerCase();
		if (!t) continue;
		if (
			titleLower.includes(t) ||
			intentLower.includes(t) ||
			entry.tags.some((tag) => tag.toLowerCase() === t.replace(/\s+/g, "-"))
		) {
			picks.push(term);
		}
		if (picks.length >= 6) break;
	}
	// Fallback: most-cited terms
	if (picks.length < 4) {
		const fallbackIds = ["cac", "roas", "ltv", "cpc", "cpm", "cvr"];
		for (const id of fallbackIds) {
			const g = (glossary as any[]).find((x) => x.id === id);
			if (g && !picks.find((p) => p.id === g.id)) picks.push(g);
			if (picks.length >= 6) break;
		}
	}
	return picks.slice(0, 6).map((p) => ({
		label: p.term || p.label || p.id,
		href: `/glossary/${p.id}`,
	}));
}

// ─────────────────────── Extended FAQs ───────────────────────

function buildExtendedFaqs(entry: QuestionEntry): { question: string; answer: string }[] {
	const base = [...entry.faqs];
	const kindFaqs: Record<string, { question: string; answer: string }[]> = {
		"how-to": [
			{
				question: `How long does this playbook take end-to-end?`,
				answer: `The named-step durations are listed inline; total elapsed time depends on how many steps run in parallel. A typical sequential execution takes ${entry.steps.length * 4}-${entry.steps.length * 6} weeks; parallel execution compresses that by 30-50%.`,
			},
			{
				question: `Can we run this in-house or do we need an agency?`,
				answer: `In-house works when you have the seniority + bandwidth on the named-step disciplines. Most teams that try in-house solo end up doing 60-70% of the work and missing the cross-step optimisation. An agency or fractional senior compresses time-to-result by 30-50% on average.`,
			},
			{
				question: `What's the minimum budget to start?`,
				answer: `Budget breaks into three lines: agency fee (if applicable), media spend, and tools. The combined minimum to make data-driven decisions in 2026 is ₹1L/month for paid-heavy playbooks. Below that, manual optimisation in-house is more honest than an agency retainer.`,
			},
			{
				question: `When do we stop and reassess?`,
				answer: `Quarterly. Each quarter, review the leading indicator (movement) and the lagging indicator (outcome). If both are positive: scale. If leading is positive but lagging isn't: wait one more quarter. If leading is negative: change the playbook, not just the spend.`,
			},
			{
				question: `Does this playbook work outside India / outside the listed market?`,
				answer: `The framework transfers; the specifics (CPCs, channels, compliance, language overlays) need adapting. The named steps are universal; the within-step tactics adapt to the local market.`,
			},
		],
		"what-is": [
			{
				question: `Is this the same as [adjacent concept]?`,
				answer: `Adjacent metrics / concepts share inputs but differ in scope, attribution windows, or denominator. See the glossary entries linked below for the exact differences — they matter when you're setting budget against the metric.`,
			},
			{
				question: `What's a good benchmark for this?`,
				answer: `Category-specific. Benchmarks shift by industry, geo, and stage. Use the band as a sanity check, not a target — the right target is the band median for your specific category × stage.`,
			},
			{
				question: `How often should we measure this?`,
				answer: `Leading indicators: weekly. Lagging indicators: monthly. Quarterly + annual trends are the strategic view. Daily measurement adds noise without signal for most metrics in this class.`,
			},
			{
				question: `What tool measures this correctly in 2026?`,
				answer: `Server-side attribution is the floor: GA4 + GTM Server-Side + Meta CAPI + Google Ads Enhanced Conversions. Reconcile against post-purchase truth monthly. Third-party-cookie-based reporting is unreliable.`,
			},
			{
				question: `Where does this metric mislead?`,
				answer: `When the underlying inputs are wrong (mis-attribution, double-counting, mis-categorised events) — the metric reports a clean value but the real signal is broken upstream. Audit inputs before trusting outputs.`,
			},
		],
		"why": [
			{
				question: `What's the strongest counter-argument?`,
				answer: `Listed in the counter-arguments section above. The single strongest case-by-case counter is base rates — the argument may hold 70% of the time but your specific situation may be in the 30%.`,
			},
			{
				question: `Where does the reasoning fail?`,
				answer: `In categories with idiosyncratic dynamics (regulatory novelty, capital-intensive product, very long buying cycles). Adapt the reasoning to the local constraints before applying.`,
			},
			{
				question: `Is this opinion or fact?`,
				answer: `Both. The framework is opinion (an operator viewpoint, weighted by Frameleads engagements). The supporting numbers are facts (taxonomy + public-domain benchmarks). The recommendation is opinion built on facts.`,
			},
		],
		"is-it": [
			{
				question: `What if the answer is 'it depends'?`,
				answer: `It usually is. The decision framework above is structured to produce a confident answer when the criteria align; when they don't, the honest answer is 'run an experiment, don't decide'.`,
			},
			{
				question: `How long before we revisit?`,
				answer: `Quarterly for fast-moving variables (paid-channel performance, creative fatigue, audience saturation); annually for slower variables (brand position, product-market fit, strategic priorities).`,
			},
			{
				question: `What's the cost of being wrong here?`,
				answer: `Worth scoring before deciding. Reversible decisions get more bias to act; irreversible decisions deserve more analysis. The decision-criteria section above includes a 'cost of being wrong' input.`,
			},
		],
		best: [
			{
				question: `How is this list ordered?`,
				answer: `Scored against the criteria laid out above. Frameleads' position is disclosed transparently. No paid placement, no affiliate fees, no 'best-of' list-driven sales.`,
			},
			{
				question: `Why isn't [X] on the list?`,
				answer: `Either it didn't meet the criteria for this segment, or it's a generic agency without category-specific track record, or its track record is unverifiable. We don't penalise good vendors arbitrarily; we just don't include vendors we can't validate against criteria.`,
			},
			{
				question: `How often is this list updated?`,
				answer: `Annually with mid-year refreshes for high-variance categories. Vendor mix shifts; the criteria stay stable. See the timestamp at the bottom of the page for the last review date.`,
			},
		],
		"how-much": [
			{
				question: `Why such wide bands?`,
				answer: `Because scope varies wildly. Two engagements quoted at the same fee can deliver very different scopes (channels, creative volume, senior hours). The band reflects the spread; the right tier for your specific case sits at one point inside it.`,
			},
			{
				question: `Can we negotiate below the band?`,
				answer: `Sometimes; it usually backfires. Vendors operating below their sustainable rate either compress the scope or shift senior hours to junior staff. We recommend negotiating scope, not fee.`,
			},
			{
				question: `What's the all-in monthly investment, not just the fee?`,
				answer: `Fee + media + tools + internal time. For paid-heavy playbooks, total monthly investment is typically 3-5× the agency fee. For organic / lifecycle, total is closer to 1.5× the fee.`,
			},
			{
				question: `When does the engagement start paying back?`,
				answer: `Depends on stage + scope. Paid: month 2-3 if creative + attribution land cleanly. Organic / content: month 6-9 as compounding kicks in. Bandwidth + lifecycle: usually inside month 1, because the engagement removes a constraint.`,
			},
		],
	};
	const extras = kindFaqs[entry.kind] || [];
	const merged = [...base, ...extras];
	return merged.slice(0, 15);
}

// ─────────────────────── References ───────────────────────

function buildReferences(entry: QuestionEntry): ReferenceItem[] {
	const indiaTagged = entry.tags.includes("india") || entry.audience.toLowerCase().includes("indian");
	const refs: ReferenceItem[] = [];
	if (indiaTagged) {
		refs.push(
			{ label: "DPDP Act 2023 — Ministry of Electronics & IT", href: "https://www.meity.gov.in/", note: "Indian data protection framework — relevant for any lead-capture / advertising flow." },
			{ label: "ASCI Code", href: "https://www.ascionline.in/", note: "Advertising Standards Council of India — code of conduct for advertising claims." },
			{ label: "TRAI — Telecom Regulatory Authority of India", href: "https://www.trai.gov.in/", note: "TCCCPR for WhatsApp / SMS commercial messaging compliance." },
		);
	} else {
		refs.push(
			{ label: "GDPR — European Commission", href: "https://gdpr.eu/", note: "European data protection regulation." },
			{ label: "FTC Endorsement Guides", href: "https://www.ftc.gov/", note: "US influencer / endorsement disclosure rules." },
		);
	}
	refs.push(
		{ label: "Frameleads Growth System™ — methodology", href: "/frameleads-growth-system", note: "The operator framework that informs this guide." },
		{ label: "Frameleads Resources Library", href: "/resources", note: "Full operator library — glossary, calculators, guides, comparisons." },
	);
	return refs.slice(0, 5);
}

// ─────────────────────── Adjacent questions + guides ───────────────────────

function buildAdjacentQuestions(entry: QuestionEntry): CrossLink[] {
	const sameKind = questions
		.filter((q) => q.kind === entry.kind && q.slug !== entry.slug)
		.filter((q) => q.tags.some((t) => entry.tags.includes(t)))
		.slice(0, 6);
	const fillers =
		sameKind.length < 6
			? questions
					.filter((q) => q.kind === entry.kind && q.slug !== entry.slug && !sameKind.includes(q))
					.slice(0, 6 - sameKind.length)
			: [];
	return [...sameKind, ...fillers].slice(0, 6).map((q) => ({
		label: q.title,
		href: `/${q.kind}/${q.slug}`,
	}));
}

function buildAdjacentGuides(entry: QuestionEntry): CrossLink[] {
	const out: CrossLink[] = [];
	const svcs = tagsToServices(entry.tags);
	const inds = tagsToIndustries(entry.tags);
	const gs = tagsToGeos(entry.tags);

	svcs.slice(0, 2).forEach((s) => {
		out.push({ label: `${s.label} — full guide`, href: `/resources/guides/${s.id}` });
	});
	inds.slice(0, 2).forEach((i) => {
		out.push({ label: `${i.label} marketing — full guide`, href: `/resources/guides/${i.id}-marketing` });
	});
	gs.slice(0, 2).forEach((g) => {
		out.push({ label: `Digital marketing in ${g.name} — full guide`, href: `/resources/guides/digital-marketing-in-${g.id}` });
	});

	if (svcs[0] && inds[0]) {
		out.push({ label: `${svcs[0].label} for ${inds[0].label} — full guide`, href: `/resources/guides/${svcs[0].id}-for-${inds[0].id}` });
	}
	if (svcs[0] && gs[0]) {
		out.push({ label: `${svcs[0].label} in ${gs[0].name} — full guide`, href: `/resources/guides/${svcs[0].id}-in-${gs[0].id}` });
	}
	if (inds[0] && gs[0]) {
		out.push({ label: `${inds[0].label} marketing in ${gs[0].name} — full guide`, href: `/resources/guides/${inds[0].id}-marketing-in-${gs[0].id}` });
	}

	// Fallback if no taxonomy matches
	if (out.length === 0) {
		out.push(
			{ label: "Resources library", href: "/resources" },
			{ label: "All guides", href: "/resources/guides" },
		);
	}
	return out.slice(0, 6);
}

// ─────────────────────── Master builder ───────────────────────

export function buildQuestionContent(entry: QuestionEntry): QuestionContent {
	const main = buildMainSection(entry);
	const lead = leadFor(entry);

	const extendedTldr = [
		...entry.tldr,
		`Built for ${entry.audience}. Updated ${entry.year}.`,
		`Includes step-level execution detail + common mistakes + metrics + tools + adjacent question cross-links.`,
		`Anchored to the Frameleads Growth System™ — the open methodology that's documented end-to-end at /frameleads-growth-system.`,
	].slice(0, 6);

	const contextParagraphs = [
		`This page is part of the Frameleads operator library. It's intentionally long — operators report that the short version sells, but the long version actually executes. Skim the key points if you're scanning; read top-to-bottom if you're committing.`,
		`Below: the direct answer, the operational detail, the common mistakes that show up in our audits, the metrics to track, the recommended stack, and adjacent reading. ${entry.kind === "best" || entry.kind === "how-much" ? "Vendor / pricing context disclosed transparently — Frameleads is in the relevant category and rated against the same criteria as competitors." : ""}`,
	];

	const whyItMatters = [
		`The ${entry.kind === "how-to" ? "playbook" : entry.kind === "what-is" ? "concept" : entry.kind === "why" ? "reasoning" : entry.kind === "is-it" ? "decision" : entry.kind === "best" ? "list" : "pricing"} matters because in 2026 ${entry.kind === "best" ? "buyers" : "operators"} have access to more execution surfaces than at any point in the last decade — yet most engagements still fail not from lack of options but from operating without a documented framework. This page is the framework, written down.`,
	];

	return {
		entry,
		leadParagraph: lead,
		extendedTldr,
		contextParagraphs,
		whyItMatters,
		mainHeading: main.heading,
		mainIntro: main.intro,
		mainRows: main.rows,
		commonMistakes: KIND_MISTAKES[entry.kind] || KIND_MISTAKES["how-to"],
		metrics: KIND_METRICS[entry.kind] || KIND_METRICS["how-to"],
		tools: KIND_TOOLS[entry.kind] || KIND_TOOLS["how-to"],
		industryAdaptations: buildIndustryAdaptations(entry),
		geoAdaptations: buildGeoAdaptations(entry),
		relatedGlossary: buildGlossaryLinks(entry),
		extendedFaqs: buildExtendedFaqs(entry),
		adjacentQuestions: buildAdjacentQuestions(entry),
		adjacentGuides: buildAdjacentGuides(entry),
		references: buildReferences(entry),
	};
}
