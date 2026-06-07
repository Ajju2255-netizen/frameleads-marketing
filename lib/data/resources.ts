/**
 * Resources content engine — programmatic long-form guides (educational
 * intent, distinct from Tier 3 / 4 / 5 / 11 / Money pages which are
 * commercial intent).
 *
 * URL pattern: /resources/guides/{slug}
 *
 * Six guide shapes:
 *   - guide-service             →  /resources/guides/{service.id}
 *   - guide-industry            →  /resources/guides/{industry.id}-marketing
 *   - guide-geo                 →  /resources/guides/digital-marketing-in-{geo.id}
 *   - guide-service-industry    →  /resources/guides/{service.id}-for-{industry.id}
 *   - guide-service-geo         →  /resources/guides/{service.id}-in-{geo.id}
 *   - guide-industry-geo        →  /resources/guides/{industry.id}-marketing-in-{geo.id}
 *
 * Each guide produces a `GuideContent` object with a stable section vocabulary:
 *   tldr, sections[], faqs[], related[]
 * That `GuideContent` feeds GuidePage.tsx which renders the full long-form
 * layout + Article + HowTo + FAQPage + BreadcrumbList JSON-LD.
 *
 * All content is taxonomy-derived: nothing fabricated. Where service-depth.ts
 * or location-depth.ts has hand-curated data, we surface it; otherwise we
 * derive a competent baseline from services.json + industries.json + geos.
 */

import type { Service, Industry, Geo } from "@/lib/data";
import { getService, getIndustry, services } from "@/lib/data";
import { getServiceDepth } from "@/lib/data/service-depth";
import { getLocationDepth } from "@/lib/data/location-depth";

// ─────────────────────── Content shape ───────────────────────

export type GuideSection = {
	id: string; // anchor id, e.g. "what-is"
	heading: string;
	intro?: string;
	bullets?: string[];
	paragraphs?: string[];
	subsections?: {
		heading: string;
		body: string;
	}[];
	table?: {
		caption: string;
		columns: string[];
		rows: string[][];
	};
};

export type GuideFaq = { question: string; answer: string };

export type GuideRelated = {
	label: string;
	href: string;
};

export type GuideContent = {
	/** H1 + breadcrumb label */
	title: string;
	/** Two-three sentence dek */
	dek: string;
	/** 4-line TLDR */
	tldr: string[];
	/** Long-form sections (rendered in order with TOC built from these). */
	sections: GuideSection[];
	/** 8-12 FAQ pairs (FAQPage JSON-LD source). */
	faqs: GuideFaq[];
	/** 4-8 cross-links to related routes. */
	related: GuideRelated[];
	/** Type used for schema selection (Article vs HowTo emphasis). */
	guideType: "service" | "industry" | "geo" | "service-industry" | "service-geo" | "industry-geo";
};

// ─────────────────────── Helpers ───────────────────────

function svcShort(s: Service): string {
	return s.label.replace(/\s+Services?$/i, "").trim();
}

function geoIsIndia(geo: Geo): boolean {
	return geo.country === undefined || geo.country === "India";
}

function complianceLineForGeo(geo: Geo): string | null {
	const loc = getLocationDepth(geo.id);
	if (loc && loc.compliance.length > 0) {
		return loc.compliance
			.slice(0, 3)
			.map((c) => c.name)
			.join(" + ");
	}
	if (geoIsIndia(geo)) return "DPDP Act 2023 + ASCI + sector regulators (RBI / SEBI / IRDAI / RERA / MCI as applicable)";
	if (geo.country === "UAE") return "UAE PDPL + DLD + Trakheesi where applicable";
	if (geo.country === "Singapore") return "PDPA + MAS for financial";
	if (geo.country === "UK" || geo.country === "United Kingdom") return "UK-GDPR + ICO + ASA";
	if (geo.country === "USA" || geo.country === "United States") return "CCPA + state laws + FTC + HIPAA where applicable";
	if (geo.country === "Saudi Arabia") return "KSA PDPL + SAMA";
	if (geo.country === "Australia") return "Privacy Act 1988 + ACMA + ACCC";
	if (geo.country === "Canada") return "PIPEDA + Quebec Law 25 + CASL";
	return null;
}

function industriesUsingService(service: Service): Industry[] {
	const { industries } = require("@/lib/data");
	return (industries as Industry[]).filter((i) =>
		i.primaryServices.includes(service.id),
	);
}

function servicesForIndustry(industry: Industry): Service[] {
	return industry.primaryServices
		.map((id) => getService(id))
		.filter((s): s is Service => Boolean(s));
}

// ─────────────────────── Service guide ───────────────────────

export function buildServiceGuide(service: Service): GuideContent {
	const depth = getServiceDepth(service);
	const sLabel = service.label;
	const shortLabel = svcShort(service);
	const usingInds = industriesUsingService(service).slice(0, 8);

	const sections: GuideSection[] = [
		{
			id: "what-is",
			heading: `What is ${sLabel}?`,
			intro: `${depth.summary}`,
			paragraphs: [
				`${sLabel} sits inside the broader Frameleads Growth System™ as ${
					service.tagline
				}. The primary KPI we track is ${service.primaryKpi.toLowerCase()}; typical time to first signal is ${service.timeToResults}. Average CPC for this category sits in the ${service.avgCpcInr} ₹ band; typical CAC in the ${service.avgCacInr} ₹ band — both used as gates on whether ${shortLabel.toLowerCase()} is the right next move for your business.`,
				`This guide is intentionally educational, not a sales page. If you want the commercial version with engagement tiers and pricing, see the ${sLabel} hub. If you want it adapted to a specific industry, see the service-for-industry guides below.`,
			],
		},
		{
			id: "why-it-matters",
			heading: `Why ${shortLabel.toLowerCase()} matters in 2026`,
			paragraphs: [
				`${shortLabel} is currently one of the leverage points for businesses operating at any scale because: (a) attention is fragmented across channels, (b) AI-driven discovery is reshaping the funnel, (c) competitive bidding has compressed margins, which means execution quality matters more than spend. Buyers in 2026 expect content + ads + landing pages to align with their intent stage, and ${shortLabel.toLowerCase()} sits at the centre of that alignment.`,
			],
			bullets: [
				`Top use cases: ${service.topUseCases.slice(0, 4).join("; ")}.`,
				`Industries that lean heavily on ${shortLabel.toLowerCase()}: ${usingInds.slice(0, 6).map((i) => i.label).join(", ")}.`,
				`Time-to-results: ${service.timeToResults}. Primary leading indicator: ${service.primaryKpi}.`,
			],
		},
		{
			id: "deliverables",
			heading: `What gets shipped`,
			intro: `Standard ${shortLabel.toLowerCase()} engagement deliverables — what comes out the other end:`,
			bullets: depth.deliverables,
		},
		{
			id: "channel-mix",
			heading: `Channel mix`,
			intro: `How we weight channels for ${shortLabel.toLowerCase()}. Each row carries its own rationale; the mix shifts when adapted to a specific industry or geo.`,
			table: {
				caption: `${sLabel} channel mix`,
				columns: ["Channel / surface", "Weight", "Why it carries the weight"],
				rows: depth.channelMix.map((row) => [row.channel, row.weight, row.note]),
			},
		},
		{
			id: "process",
			heading: `How we run ${shortLabel.toLowerCase()}`,
			intro: `Four phases. The phase you start in depends on what's already in place when we audit.`,
			subsections: depth.processPhases.map((phase, idx) => ({
				heading: `${String(idx + 1).padStart(2, "0")} · ${phase.label} — ${phase.heading}`,
				body: phase.outputs.join(" · "),
			})),
		},
		{
			id: "metrics",
			heading: `What to measure`,
			intro: `${shortLabel} engagements that look successful on shallow metrics often collapse under scrutiny. Track these and you'll see the truth.`,
			bullets: [
				`Leading: ${service.primaryKpi}, weekly cohort cadence (signal direction is visible from week two).`,
				`Lagging: blended CAC, channel-attributed pipeline, contribution margin per paid customer.`,
				`Counter-metrics: creative fatigue per ad set, audience burn rate, share of impression on branded queries (for paid), search-console impressions vs CTR (for organic).`,
				`Diagnostic: cohort retention at d30 / d90 / d180; if retention is broken, ${shortLabel.toLowerCase()} spend just amplifies churn.`,
			],
		},
		{
			id: "common-mistakes",
			heading: `Common mistakes`,
			bullets: [
				`Treating ${shortLabel.toLowerCase()} as a one-time campaign instead of a compounding system — ${service.timeToResults} to first signal does not mean ${service.timeToResults} to full impact.`,
				`Measuring against the wrong primary KPI (vanity reach instead of ${service.primaryKpi.toLowerCase()}).`,
				`Hiring junior-only execution to save on retainer; junior creative / media buying ships visible work but cannot diagnose attribution faults at the system level.`,
				`Running ${shortLabel.toLowerCase()} without server-side attribution in 2026 — third-party cookies are gone in practice and Meta/Google's APIs are the only reliable signal source.`,
				`Cutting ${shortLabel.toLowerCase()} spend on a single month's noise — minimum quarterly review windows are the responsible cadence.`,
			],
		},
		{
			id: "pricing",
			heading: `Pricing & engagement tiers`,
			intro: `${sLabel} engagement runs in three tiers. Numbers are agency fees and exclude media spend; see the ${sLabel} hub for the canonical commercial detail.`,
			table: {
				caption: `${sLabel} engagement tiers`,
				columns: ["Tier", "Monthly band", "Best for", "What's included"],
				rows: depth.pricingTiers.map((tier) => [
					tier.name,
					tier.monthlyBand,
					tier.bestFor,
					tier.includes.slice(0, 3).join("; "),
				]),
			},
		},
		{
			id: "is-it-for-you",
			heading: `Is ${shortLabel.toLowerCase()} a fit for your business?`,
			intro: `Honesty on fit before pricing.`,
			subsections: [
				{
					heading: "Built for",
					body: depth.whoFor.join(" · "),
				},
				{
					heading: "Not the right fit",
					body: depth.whoNotFor.join(" · "),
				},
			],
		},
	];

	const faqs: GuideFaq[] = [
		{
			question: `How long does ${shortLabel.toLowerCase()} take to produce real results?`,
			answer: `${service.timeToResults} to first signal. Compounding loops continue maturing for 4–9 months. We track ${service.primaryKpi} weekly so direction-of-travel is visible far earlier than headline KPIs would show.`,
		},
		{
			question: `What does ${shortLabel.toLowerCase()} cost?`,
			answer: `Three engagement tiers — Starter / Scale / Enterprise — with monthly bands set out in the pricing section above. Fees exclude media spend. Total monthly investment (fees + media) typically runs 3–5× fees for paid services and 1× fees for organic / lifecycle services.`,
		},
		{
			question: `Can we run ${shortLabel.toLowerCase()} in-house instead of with an agency?`,
			answer: `Yes, eventually — most clients outgrow agency ${shortLabel.toLowerCase()} in 18–24 months and move it in-house. The role of the agency is to compress the learning curve, deploy attribution and creative pipelines, and document SOPs so the handover is clean. If you already have the in-house talent + attribution stack + cadence, you don't need an agency.`,
		},
		{
			question: `Do we need ${shortLabel.toLowerCase()} if our product is pre-launch?`,
			answer: `No. ${shortLabel} amplifies what's working; if you don't yet have product-market fit signal, spend goes against you. The honest answer at audit is usually "delay ${shortLabel.toLowerCase()}, work on positioning + onboarding first."`,
		},
		{
			question: `What's the difference between ${shortLabel.toLowerCase()} and performance marketing?`,
			answer:
				service.id === "performance-marketing"
					? `${shortLabel} IS the discipline that orchestrates paid acquisition across Meta, Google, LinkedIn, YouTube, and adjacent channels — measured strictly on attributed pipeline and ROAS. Other services (SEO, content, CRO) sit alongside it, often within the same engagement, but performance marketing is the bucket where the paid-channel work concentrates.`
					: `${shortLabel} is a specialised discipline (${service.tagline.toLowerCase()}); performance marketing is the broader paid-channel orchestration. Most full-stack engagements include both, with ${shortLabel.toLowerCase()} as a lever inside the broader performance-marketing motion.`,
		},
		{
			question: `Do we need separate creative for ${shortLabel.toLowerCase()}?`,
			answer: `Yes — performance creative is purpose-built for each channel and intent stage; brand creative does not translate one-to-one. At Scale tier we ship 20–50 ad variants per month for paid channels, briefed against current performance signal, not a brand book in isolation.`,
		},
		{
			question: `How do we measure ${shortLabel.toLowerCase()} attribution honestly?`,
			answer: `Server-side from day one: CAPI for Meta, GTM Server-Side, Google Ads Enhanced Conversions, and GA4 as the unified view. Reconcile against post-purchase cohort truth monthly. Anything less than this is leaving signal on the table in 2026.`,
		},
		{
			question: `Will you guarantee ${service.primaryKpi.toLowerCase()} numbers in writing?`,
			answer: `No. Outcomes depend on product, audience, AOV, market dynamics, and creative execution — none of which the agency fully controls. We commit to execution standards (cadence, creative variants per month, attribution rigor, reporting transparency) — not specific outcomes. Anyone in this category promising a specific future ROAS is selling, not forecasting.`,
		},
	];

	const related: GuideRelated[] = [
		{ label: `${sLabel} — commercial hub`, href: `/${service.id}` },
		{ label: `${sLabel} pricing in India`, href: `/${service.id}-pricing` },
		...usingInds
			.slice(0, 4)
			.map((i) => ({
				label: `${sLabel} for ${i.label}`,
				href: `/resources/guides/${service.id}-for-${i.id}`,
			})),
	];

	return {
		title: `${sLabel} — the full guide (2026)`,
		dek: `An advanced, in-depth guide to ${sLabel.toLowerCase()}. Channel mix, deliverables, process, metrics, common mistakes, pricing, fit-check — built for operators who want the long version, not a sales page.`,
		tldr: [
			`${service.tagline}.`,
			`${service.shortDescription}`,
			`Average CPC ${service.avgCpcInr} ₹, CAC ${service.avgCacInr} ₹. Time to first signal: ${service.timeToResults}.`,
			`This guide is the full, honest version — no padding, no upsell — for operators evaluating ${sLabel.toLowerCase()} as a lever in 2026.`,
		],
		sections,
		faqs,
		related,
		guideType: "service",
	};
}

// ─────────────────────── Industry guide ───────────────────────

export function buildIndustryGuide(industry: Industry): GuideContent {
	const iLabel = industry.label;
	const primaryServices = servicesForIndustry(industry);

	const sections: GuideSection[] = [
		{
			id: "what-is",
			heading: `Marketing for ${iLabel.toLowerCase()} — the operator's view`,
			intro: `${industry.tagline}.`,
			paragraphs: [
				`${iLabel} marketing operates inside specific unit economics: CPC sits in the ${industry.avgCpcInr} ₹ band, CAC in the ${industry.avgCacInr} ₹ band. The category is currently in the ${industry.tier === "A" ? "high-priority" : industry.tier === "B" ? "established" : "long-tail"} tier in 2026 — which affects competitive intensity, creative novelty pressure, and channel-saturation expectations.`,
				`This guide explains how ${iLabel.toLowerCase()} actually behaves: where the leverage points are, which channels carry weight, what pain points the category routinely runs into, and how to evaluate whether your team is set up to scale.`,
			],
		},
		{
			id: "buyer-behaviour",
			heading: `Buyer behaviour in ${iLabel.toLowerCase()}`,
			intro: `What's actually happening in the buyer's head when they encounter a ${iLabel.toLowerCase()} brand:`,
			bullets: industry.topPainPoints && industry.topPainPoints.length > 0
				? industry.topPainPoints.map((p) => `Pain point that drives the search: ${p}.`)
				: [`Generic discovery-to-conversion flow; refer to channel-specific guides for the detail.`],
		},
		{
			id: "channel-mix",
			heading: `Channel mix for ${iLabel.toLowerCase()}`,
			intro: `How ${iLabel.toLowerCase()} engagements typically allocate attention across channels. Order matches industry.primaryServices weighting.`,
			table: {
				caption: `${iLabel} channel weighting`,
				columns: ["Channel / surface", "Weight", "Why it carries the weight"],
				rows: primaryServices.map((s, idx) => {
					const weight = idx === 0 ? "Primary" : idx === 1 ? "Primary" : idx === 2 ? "Secondary" : "Supporting";
					return [
						s.label,
						weight,
						`${s.tagline}. For ${iLabel.toLowerCase()}, ${s.label.toLowerCase()} typically lands at CAC ${s.avgCacInr} ₹.`,
					];
				}),
			},
		},
		{
			id: "where-it-works",
			heading: `Geographies where ${iLabel.toLowerCase()} concentrates`,
			intro: `${industry.geoConcentration && industry.geoConcentration.length > 0 ? `Markets where ${iLabel.toLowerCase()} demand is densest:` : `${iLabel} is distributed broadly — no single geographic concentration drives the category.`}`,
			bullets: (industry.geoConcentration || []).slice(0, 8).map((g) => `${g.charAt(0).toUpperCase()}${g.slice(1).replace(/-/g, " ")} — material ${iLabel.toLowerCase()} concentration; marketing competition is heavier here.`),
		},
		{
			id: "playbook",
			heading: `The ${iLabel.toLowerCase()} marketing playbook`,
			intro: `What a serious ${iLabel.toLowerCase()} marketing engagement actually ships:`,
			bullets: [
				`Discovery + audit phase: ICP definition, current-state CAC review, channel attribution honesty check.`,
				`Channel build: ${primaryServices
					.slice(0, 3)
					.map((s) => s.label.toLowerCase())
					.join(" → ")}, instrumented end-to-end.`,
				`Creative + content engine: 20-50 variants per month for paid channels at Scale; long-form + comparisons + glossary for organic.`,
				`Lifecycle + nurture: email + WhatsApp + retargeting orchestrated against the buyer journey.`,
				`Attribution stack: server-side from day one (CAPI / GTM SS / GA4 / Ads Enhanced Conversions).`,
				`Reporting + cadence: weekly dashboards, monthly business reviews, quarterly strategy adjustments.`,
			],
		},
		{
			id: "common-mistakes",
			heading: `Common mistakes in ${iLabel.toLowerCase()} marketing`,
			bullets: [
				`Treating ${iLabel.toLowerCase()} like a generic e-commerce category and missing the buyer-specific signal cues.`,
				`Over-indexing on the top-of-funnel channel and starving the lifecycle / nurture layer — buyers stall mid-cycle and revenue compresses.`,
				`Running ${iLabel.toLowerCase()} on platform-default attribution; categories with longer buying cycles need extended attribution windows.`,
				`Hiring generalists to run ${iLabel.toLowerCase()} growth without category-specific channel literacy — the agency or in-house team needs to understand the regulatory + buyer-journey nuances.`,
			],
		},
		{
			id: "metrics",
			heading: `What ${iLabel.toLowerCase()} should measure`,
			bullets: [
				`Acquisition: CAC band ${industry.avgCacInr} ₹ — sustainable below, problematic above.`,
				`Unit economics: LTV / CAC > 3 for healthy ${iLabel.toLowerCase()} brands.`,
				`Channel attribution: weekly view of channel-level CAC + paid + organic mix shift.`,
				`Conversion velocity: time-to-first-action, time-to-conversion, attribution-window length matched to the actual ${iLabel.toLowerCase()} buying cycle.`,
				`Retention: cohort-level retention (d30 / d90 / d180) — paid acquisition does not solve retention problems.`,
			],
		},
	];

	const faqs: GuideFaq[] = [
		{
			question: `What's the typical CAC for ${iLabel.toLowerCase()}?`,
			answer: `Band sits at ${industry.avgCacInr} ₹. Above the band means there's likely a leak somewhere in the funnel (creative fatigue, landing-page conversion, lifecycle gap); below means you've found a leverage point worth exploiting fast.`,
		},
		{
			question: `Which channels work best for ${iLabel.toLowerCase()}?`,
			answer: `Primary channels in order: ${primaryServices
				.slice(0, 3)
				.map((s) => s.label)
				.join(", ")}. See the channel-mix table above for the full weighting and rationale.`,
		},
		{
			question: `How long is a typical ${iLabel.toLowerCase()} marketing engagement?`,
			answer: `Three months minimum for paid channels to optimise through 2–3 reporting cycles; six months minimum for organic + content engines to begin compounding. Most ${iLabel.toLowerCase()} brands settle at 6–12 month retainers, then move to month-to-month.`,
		},
		{
			question: `Do we need separate ${iLabel.toLowerCase()} creative?`,
			answer: `Yes — ${iLabel.toLowerCase()} buyers expect category-fluent creative. Generic templated ads under-perform at Scale tier.`,
		},
		{
			question: `Can we DIY ${iLabel.toLowerCase()} marketing?`,
			answer: `Yes if you have: (a) in-house creative + media-buying talent, (b) server-side attribution already deployed, (c) the cadence discipline to run weekly + monthly cycles. If any of those are missing, an agency compresses the learning curve materially in the first 6 months.`,
		},
		{
			question: `When is ${iLabel.toLowerCase()} a bad fit for a Frameleads-style engagement?`,
			answer: `When product-market fit isn't yet established; when monthly addressable spend is below the threshold for data-driven optimisation (₹1L/mo combined); when there's no in-house owner who can execute on briefs we produce; when the brand is uncomfortable with the level of attribution transparency Frameleads runs by default.`,
		},
	];

	const related: GuideRelated[] = [
		{ label: `${iLabel} — industry pillar`, href: `/${industry.id}` },
		...primaryServices.slice(0, 4).map((s) => ({
			label: `${s.label} for ${iLabel}`,
			href: `/resources/guides/${s.id}-for-${industry.id}`,
		})),
	];

	return {
		title: `${iLabel} marketing — the full guide (2026)`,
		dek: `An advanced, operator-grade guide to marketing for ${iLabel.toLowerCase()}. Buyer behaviour, channel mix, playbook, common mistakes, metrics. Built for leaders evaluating how to scale ${iLabel.toLowerCase()} growth.`,
		tldr: [
			industry.tagline,
			`CPC ${industry.avgCpcInr} ₹, CAC ${industry.avgCacInr} ₹.`,
			`Top channels: ${primaryServices
				.slice(0, 3)
				.map((s) => s.label)
				.join(" + ")}.`,
			`This guide is the full operator playbook — channel mix, playbook, mistakes, metrics — no padding, no upsell.`,
		],
		sections,
		faqs,
		related,
		guideType: "industry",
	};
}

// ─────────────────────── Geo guide ───────────────────────

export function buildGeoGuide(geo: Geo): GuideContent {
	const loc = getLocationDepth(geo.id);
	const compliance = complianceLineForGeo(geo);
	const topIndIds = geo.topIndustries.slice(0, 6);

	const sections: GuideSection[] = [
		{
			id: "the-market",
			heading: `Digital marketing in ${geo.name} — the market view`,
			intro: loc ? loc.summary : `${geo.name} is a ${geoIsIndia(geo) ? "key Indian" : "global"} commercial market with its own buyer behaviour, channel preferences, and regulatory framework.`,
			paragraphs: loc ? [loc.marketContext] : [
				`${geo.name} runs on its own commercial dynamics. ${geo.population ? `Population: ${geo.population}.` : ""} ${geo.state ? `State: ${geo.state}.` : ""} Industry concentration favours ${topIndIds.map((id) => getIndustry(id)?.label || id).filter(Boolean).slice(0, 4).join(", ")}.`,
			],
		},
		{
			id: "top-industries",
			heading: `Industries that drive ${geo.name}`,
			intro: `Industries with the densest commercial activity in ${geo.name} — these are where marketing competition is heaviest and benchmarks are deepest:`,
			bullets: topIndIds.map((id) => {
				const ind = getIndustry(id);
				if (ind) return `${ind.label} — CAC band ${ind.avgCacInr} ₹, CPC band ${ind.avgCpcInr} ₹.`;
				return id;
			}),
		},
		{
			id: "channel-mix",
			heading: `Channel mix that wins in ${geo.name}`,
			intro: loc ? `${geo.name} has its own channel preferences. Order matters — try to inherit a Tier-1 metro's playbook unchanged and you'll over-pay on the wrong surfaces.` : `Generic global channel weighting; for ${geo.name} apply the standard performance + organic stack.`,
			table: loc
				? {
						caption: `${geo.name} channel weighting`,
						columns: ["Channel / surface", "Weight", "Why"],
						rows: loc.channelMix.slice(0, 6).map((c) => [c.channel, c.weight, c.note]),
					}
				: undefined,
			bullets: loc
				? undefined
				: [
						`Google Search Ads + Meta as primary paid channels.`,
						`Long-form content + SEO as the compounding organic layer.`,
						`Email + lifecycle as the retention multiplier.`,
				  ],
		},
		{
			id: "compliance",
			heading: `Regulatory + compliance framework`,
			intro: compliance ? `Marketing in ${geo.name} runs inside a specific compliance perimeter. Get this wrong and the cost is not just fines — it's account-disablings, ad-network bans, and customer-trust damage.` : `Standard global advertising standards apply; for industry-specific compliance see the relevant industry pillar.`,
			bullets: compliance
				? [
						`Applicable framework: ${compliance}.`,
						`Every paid creative reviewed against the framework before deployment.`,
						`Landing-page disclosure + lead-capture forms designed to clear the disclosure bar by default.`,
						`Industry overlays where applicable (financial / healthcare / real-estate carry additional regulatory requirements in ${geo.name}).`,
				  ]
				: [],
		},
		{
			id: "playbook",
			heading: `${geo.name} marketing playbook`,
			intro: `What a serious ${geo.name}-targeted marketing engagement actually ships:`,
			bullets: [
				`Audit + ICP definition with ${geo.name}-specific buyer journey + competitor benchmarking.`,
				`Channel build prioritised against ${geo.name}'s top buyer industries: ${topIndIds.slice(0, 3).map((id) => getIndustry(id)?.label || id).join(", ")}.`,
				`Creative production with ${geo.name} buyer codes — ${geo.landmarks && geo.landmarks.length > 0 ? `cluster-specific (${geo.landmarks.slice(0, 4).join(" / ")})` : "city-coded"}.`,
				`Attribution + reporting on ${geo.name}-time-zone cadence so the in-house team isn't waking up to overnight reports.`,
				`Quarterly business reviews adjusted to ${geo.name}'s commercial calendar (festive cycles, financial year-end, regulatory cycles).`,
			],
		},
	];

	if (loc && loc.subLocations && loc.subLocations.length > 0) {
		sections.push({
			id: "sub-locations",
			heading: `${geo.name} clusters / sub-locations`,
			intro: `${geo.name} is not one market — each sub-location has its own buyer mix and channel preferences:`,
			bullets: loc.subLocations.slice(0, 8).map((sl) => `${sl.name} — ${sl.note}`),
		});
	}

	const faqs: GuideFaq[] = loc && loc.faqs.length > 0
		? loc.faqs.slice(0, 8).map((f) => ({ question: f.question, answer: f.answer }))
		: [
				{
					question: `What makes ${geo.name} different for digital marketing?`,
					answer: `${geo.name} has its own buyer mix (${topIndIds.slice(0, 3).map((id) => getIndustry(id)?.label || id).join(", ")}), channel preferences, and ${compliance ? `compliance framework (${compliance})` : "regulatory environment"}. Generic global playbooks under-perform here.`,
				},
				{
					question: `Which industries should I target marketing efforts in ${geo.name}?`,
					answer: `Top industries: ${topIndIds.slice(0, 4).map((id) => getIndustry(id)?.label || id).join(", ")}. See the industry guides below for the channel-specific playbook.`,
				},
				{
					question: `Do you have a ${geo.name} office?`,
					answer:
						geo.id === "bangalore"
							? `Yes — Frameleads is headquartered in Bangalore (Electronic City).`
							: `Operations are run from Bangalore. For ${geo.name} engagements above the Scale tier we travel for kick-off + quarterly business reviews + critical milestones. Most ongoing work happens over shared Notion / Linear / Slack.`,
				},
				{
					question: `Can you do ${geo.name}-localised content?`,
					answer: `Yes — language overlays and culture-aware creative are part of the standard Scale-tier deliverable for ${geo.name} engagements.`,
				},
		  ];

	const related: GuideRelated[] = [
		{ label: `Digital marketing in ${geo.name} — commercial hub`, href: `/digital-marketing-in-${geo.id}` },
		{ label: `SEO company in ${geo.name}`, href: `/seo-company-in-${geo.id}` },
		{ label: `Performance marketing company in ${geo.name}`, href: `/performance-marketing-company-in-${geo.id}` },
		...topIndIds.slice(0, 3).map((id) => {
			const ind = getIndustry(id);
			return {
				label: `${ind?.label || id} marketing in ${geo.name}`,
				href: `/resources/guides/${id}-marketing-in-${geo.id}`,
			};
		}),
	];

	return {
		title: `Digital marketing in ${geo.name} — the full guide (2026)`,
		dek: `${
			loc?.summary || `An advanced guide to digital marketing in ${geo.name}. Buyer mix, channel preferences, regulatory framework, playbook — built for operators serious about ${geo.name} growth.`
		}`,
		tldr: [
			`${geo.name} ${geo.state ? `(${geo.state}) ` : ""}— ${geo.population ? `population ${geo.population}, ` : ""}industry mix favours ${topIndIds.slice(0, 3).map((id) => getIndustry(id)?.label || id).join(", ")}.`,
			compliance ? `Compliance framework: ${compliance}.` : `Standard global advertising standards apply.`,
			`Channel mix shifts vs Tier-1 metro defaults; see the channel-mix table below.`,
			`This guide is the full operator playbook for ${geo.name} marketing — no padding, no upsell.`,
		],
		sections,
		faqs,
		related,
		guideType: "geo",
	};
}

// ─────────────────────── Service × Industry guide ───────────────────────

export function buildServiceIndustryGuide(
	service: Service,
	industry: Industry,
): GuideContent {
	const depth = getServiceDepth(service);
	const shortLabel = svcShort(service);
	const inThisIndustry = industry.primaryServices.includes(service.id);

	const sections: GuideSection[] = [
		{
			id: "what-is",
			heading: `${shortLabel} for ${industry.label} — overview`,
			paragraphs: [
				`${shortLabel} for ${industry.label.toLowerCase()} adapts the generic ${shortLabel.toLowerCase()} playbook to ${industry.label.toLowerCase()}'s buyer behaviour, CAC band (${industry.avgCacInr} ₹), and channel preferences. ${
					inThisIndustry
						? `${shortLabel} is one of ${industry.label.toLowerCase()}'s primary services — high category fit, deep benchmark data, well-understood unit economics.`
						: `${shortLabel} is a secondary / supporting service for ${industry.label.toLowerCase()} — useful when integrated with the category's primary channels, but rarely the lead lever.`
				}`,
				`This guide is informational + advanced. For the commercial version with engagement tiers, see the ${shortLabel} hub or the ${shortLabel} for ${industry.label} commercial cell.`,
			],
		},
		{
			id: "fit",
			heading: `Is ${shortLabel.toLowerCase()} a fit for ${industry.label.toLowerCase()}?`,
			intro: inThisIndustry
				? `Yes — and the audit can usually confirm specifics in the first call.`
				: `${shortLabel} can be a useful supporting channel; whether it's worth leading with depends on your specific stage and existing channel mix.`,
			bullets: [
				`${industry.label}'s CAC band: ${industry.avgCacInr} ₹.`,
				`Primary services for ${industry.label}: ${industry.primaryServices.map((id) => getService(id)?.label || id).filter(Boolean).slice(0, 3).join(", ")}.`,
				`${industry.label}'s key pain points: ${(industry.topPainPoints || []).slice(0, 2).join("; ") || "general category dynamics"}.`,
			],
		},
		{
			id: "channel-mix",
			heading: `Channel mix — ${shortLabel} adapted to ${industry.label.toLowerCase()}`,
			intro: `Generic ${shortLabel.toLowerCase()} channel mix shifts when applied to ${industry.label.toLowerCase()}. The table below shows the relevant surfaces with industry-specific weighting.`,
			table: {
				caption: `${shortLabel} channel mix for ${industry.label}`,
				columns: ["Channel / surface", "Weight", "Industry-specific rationale"],
				rows: depth.channelMix.map((row) => [
					row.channel,
					row.weight,
					`${row.note} For ${industry.label.toLowerCase()}, weight ${inThisIndustry ? "is reinforced" : "is moderated"} given the category's CAC band of ${industry.avgCacInr} ₹.`,
				]),
			},
		},
		{
			id: "deliverables",
			heading: `What gets shipped — ${shortLabel} × ${industry.label}`,
			intro: `Standard deliverables adapted to ${industry.label.toLowerCase()}:`,
			bullets: depth.deliverables,
		},
		{
			id: "process",
			heading: `Process`,
			intro: `${depth.processPhases.length}-phase process; outputs adapt to ${industry.label.toLowerCase()} category nuances.`,
			subsections: depth.processPhases.map((phase, idx) => ({
				heading: `${String(idx + 1).padStart(2, "0")} · ${phase.label} — ${phase.heading}`,
				body: phase.outputs.join(" · "),
			})),
		},
		{
			id: "common-mistakes",
			heading: `Common mistakes when running ${shortLabel.toLowerCase()} for ${industry.label.toLowerCase()}`,
			bullets: [
				`Importing a generic ${shortLabel.toLowerCase()} playbook without adapting creative + landing pages to ${industry.label.toLowerCase()}'s buyer language.`,
				`Setting attribution windows shorter than ${industry.label.toLowerCase()}'s actual buying cycle — categories with longer cycles get systematically under-credited.`,
				`Pricing engagement against the wrong AOV / LTV — ${industry.label.toLowerCase()} unit economics dictate what's affordable as agency fee.`,
				`Optimising the wrong KPI for the category — ${shortLabel}'s default primary KPI is ${service.primaryKpi.toLowerCase()}; for ${industry.label.toLowerCase()} that often needs translating into a category-specific metric.`,
			],
		},
		{
			id: "metrics",
			heading: `Metrics specific to ${shortLabel.toLowerCase()} × ${industry.label.toLowerCase()}`,
			bullets: [
				`Acquisition: CAC band ${industry.avgCacInr} ₹ (industry); ${shortLabel}-attributed CAC reported separately.`,
				`Quality: ${shortLabel}-driven lead quality vs other-channel-driven quality; conversion velocity to closed-won.`,
				`Compounding signal: ${service.primaryKpi.toLowerCase()} trended week-over-week.`,
				`Counter-metric: creative fatigue + audience burn for paid ${shortLabel.toLowerCase()}.`,
			],
		},
	];

	const faqs: GuideFaq[] = [
		{
			question: `Is ${shortLabel.toLowerCase()} effective for ${industry.label.toLowerCase()}?`,
			answer: inThisIndustry
				? `Yes — ${shortLabel} is in ${industry.label.toLowerCase()}'s primary service mix. Direct category fit, deep benchmark data.`
				: `${shortLabel} works as a supporting / secondary channel for ${industry.label.toLowerCase()}. Whether to lead with it depends on your stage and existing channel mix. The audit can give the honest answer.`,
		},
		{
			question: `What's the typical CAC for ${shortLabel.toLowerCase()} in ${industry.label.toLowerCase()}?`,
			answer: `${industry.label} category CAC band sits at ${industry.avgCacInr} ₹; ${shortLabel}-attributed CAC depends on channel weighting + creative + offer quality. The audit benchmarks your specific position before any commercial conversation.`,
		},
		{
			question: `How long until ${shortLabel.toLowerCase()} shows results for a ${industry.label.toLowerCase()} brand?`,
			answer: `${service.timeToResults} to first signal. Compounding loops take 4–9 months. The category's buying-cycle length amplifies this for ${industry.label.toLowerCase()} — set quarterly review cadences accordingly.`,
		},
		{
			question: `What ad spend do we need for ${shortLabel.toLowerCase()} in ${industry.label.toLowerCase()}?`,
			answer: `Minimum ₹1L/month combined paid spend for optimisation cycles to be data-driven. For ${industry.label.toLowerCase()} specifically, the AOV / LTV math usually supports higher spend; the engagement tier reflects this.`,
		},
		{
			question: `Will you work with our existing ${industry.label.toLowerCase()} team?`,
			answer: `Yes — split-team is default. We own ${shortLabel.toLowerCase()} strategy + execution + attribution; in-house team owns brand voice + sales follow-through.`,
		},
	];

	const related: GuideRelated[] = [
		{ label: `${service.label} — hub`, href: `/${service.id}` },
		{ label: `${industry.label} — industry pillar`, href: `/${industry.id}` },
		{ label: `${service.label} for ${industry.label} — commercial cell`, href: `/${service.id}-for-${industry.id}` },
		{ label: `${shortLabel} guide`, href: `/resources/guides/${service.id}` },
		{ label: `${industry.label} marketing guide`, href: `/resources/guides/${industry.id}-marketing` },
	];

	return {
		title: `${shortLabel} for ${industry.label} — the full guide (2026)`,
		dek: `An advanced guide to running ${shortLabel.toLowerCase()} for ${industry.label.toLowerCase()}. Fit-check, channel mix, deliverables, process, metrics — built for operators who want the long form before they engage.`,
		tldr: [
			`${shortLabel} is ${inThisIndustry ? "a primary" : "a supporting"} service for ${industry.label.toLowerCase()}.`,
			`Category CAC band ${industry.avgCacInr} ₹; CPC band ${industry.avgCpcInr} ₹.`,
			`Time to first signal: ${service.timeToResults}. Primary KPI: ${service.primaryKpi}.`,
			`This guide explains how ${shortLabel.toLowerCase()} adapts to ${industry.label.toLowerCase()} — what changes from the generic playbook.`,
		],
		sections,
		faqs,
		related,
		guideType: "service-industry",
	};
}

// ─────────────────────── Service × Geo guide ───────────────────────

export function buildServiceGeoGuide(service: Service, geo: Geo): GuideContent {
	const depth = getServiceDepth(service);
	const shortLabel = svcShort(service);
	const compliance = complianceLineForGeo(geo);
	const topInds = geo.topIndustries.slice(0, 4);
	const loc = getLocationDepth(geo.id);

	const sections: GuideSection[] = [
		{
			id: "overview",
			heading: `${shortLabel} in ${geo.name} — overview`,
			paragraphs: [
				`${shortLabel} in ${geo.name} adapts the generic ${shortLabel.toLowerCase()} playbook to ${geo.name}'s buyer mix (${topInds.map((id) => getIndustry(id)?.label || id).join(", ")}), channel preferences, and ${compliance ? `compliance framework (${compliance})` : "regulatory environment"}.`,
				loc?.marketContext || `${geo.name}'s ${geoIsIndia(geo) ? "Indian-market" : "global"} dynamics — including competitor density, creative novelty pressure, and language-overlay needs — all shape how ${shortLabel.toLowerCase()} engagements run here.`,
			],
		},
		{
			id: "channel-mix",
			heading: `${shortLabel} channel mix in ${geo.name}`,
			intro: `Generic ${shortLabel.toLowerCase()} channel mix shifts when applied to ${geo.name} — buyer behaviour and platform efficiency differ.`,
			table: {
				caption: `${shortLabel} channel mix for ${geo.name}`,
				columns: ["Channel / surface", "Weight", "${geo.name}-specific rationale"],
				rows: depth.channelMix.map((row) => [
					row.channel,
					row.weight,
					`${row.note} In ${geo.name}, this channel's weight is ${geoIsIndia(geo) ? "calibrated to Indian buyer behaviour and CPC bands" : "calibrated to the local CPM / CAC bands and buyer behaviour"}.`,
				]),
			},
		},
		{
			id: "industries",
			heading: `${geo.name}'s top industries × ${shortLabel.toLowerCase()}`,
			intro: `${geo.name} concentrates in a handful of industries. ${shortLabel}'s impact depends on category-channel fit.`,
			bullets: topInds.map((id) => {
				const ind = getIndustry(id);
				const inMix = ind?.primaryServices.includes(service.id);
				if (!ind) return id;
				return `${ind.label} — CAC ${ind.avgCacInr} ₹. ${shortLabel} is ${inMix ? "a primary service" : "a supporting service"} for this category. ${inMix ? "Strong category fit." : "Useful in combination with category's primary channels."}`;
			}),
		},
		{
			id: "compliance",
			heading: `${geo.name} regulatory + compliance framework`,
			intro: compliance ? `${shortLabel} ads + landing pages reviewed against:` : `Standard global advertising standards apply.`,
			bullets: compliance
				? [
						`Applicable framework: ${compliance}.`,
						`Every creative reviewed for compliance before deployment.`,
						`Landing-page disclosures designed to clear regulatory bar by default.`,
						`Industry-specific overlays where applicable (financial / healthcare / real-estate have additional disclosure requirements).`,
				  ]
				: [],
		},
		{
			id: "process",
			heading: `Process`,
			intro: `${depth.processPhases.length}-phase process, adapted to ${geo.name}'s timezone and commercial calendar.`,
			subsections: depth.processPhases.map((phase, idx) => ({
				heading: `${String(idx + 1).padStart(2, "0")} · ${phase.label} — ${phase.heading}`,
				body: phase.outputs.join(" · "),
			})),
		},
		{
			id: "common-mistakes",
			heading: `Common mistakes — ${shortLabel.toLowerCase()} in ${geo.name}`,
			bullets: [
				`Treating ${geo.name} like a Tier-1-metro default and missing the local channel preferences.`,
				`Running creative in the wrong language overlay for ${geo.name} — generic English / Hindi creative under-performs against localised alternatives.`,
				`Missing ${compliance ? compliance.split(" + ")[0] : "local compliance"} requirements and triggering ad-account disabling.`,
				`Setting attribution windows on platform defaults — ${geo.name}'s buying cycles often need extended windows.`,
				`Hiring an agency with no in-country presence or working timezone overlap — slows iteration cadence by 50-70%.`,
			],
		},
	];

	const faqs: GuideFaq[] = [
		{
			question: `How does ${shortLabel.toLowerCase()} differ in ${geo.name} vs other markets?`,
			answer: `${geo.name}'s buyer mix (${topInds.map((id) => getIndustry(id)?.label || id).slice(0, 3).join(", ")}), channel preferences, and ${compliance ? `compliance framework (${compliance})` : "regulatory environment"} all shift the generic playbook. Specifics in the channel-mix and compliance sections above.`,
		},
		{
			question: `What's a realistic ${shortLabel.toLowerCase()} investment for a ${geo.name} business?`,
			answer: `Three tiers — Starter / Scale / Enterprise — agency fees exclusive of media. See the ${service.label} hub for the canonical bands.`,
		},
		{
			question: `How long until ${shortLabel.toLowerCase()} shows results in ${geo.name}?`,
			answer: `${service.timeToResults} to first signal. ${geo.name}'s competitive intensity in top categories (${topInds.slice(0, 2).map((id) => getIndustry(id)?.label || id).join(", ")}) may push that to the higher end of the band.`,
		},
		{
			question: `Do you have a ${geo.name} office?`,
			answer: geo.id === "bangalore"
				? `Yes — Frameleads is headquartered in Bangalore (Electronic City).`
				: `Operations are run from Bangalore. For ${geo.name} engagements above Scale tier we travel for kick-offs + quarterly reviews. Most ongoing work happens over shared Notion / Linear / Slack.`,
		},
		{
			question: `Can you do ${geo.name}-localised content?`,
			answer: `Yes — language overlays + culture-aware creative are part of Scale-tier ${geo.name} engagements.`,
		},
	];

	const related: GuideRelated[] = [
		{ label: `${service.label} — hub`, href: `/${service.id}` },
		{ label: `${service.label} in ${geo.name} — commercial`, href: `/${service.id}-in-${geo.id}` },
		{ label: `${shortLabel} company in ${geo.name}`, href: `/${service.id === "seo-services" ? "seo" : service.id}-company-in-${geo.id}` },
		{ label: `${shortLabel} guide`, href: `/resources/guides/${service.id}` },
		{ label: `Digital marketing in ${geo.name} guide`, href: `/resources/guides/digital-marketing-in-${geo.id}` },
	];

	return {
		title: `${shortLabel} in ${geo.name} — the full guide (2026)`,
		dek: `An advanced guide to running ${shortLabel.toLowerCase()} for ${geo.name} businesses. Channel mix, compliance, process, common mistakes — adapted to ${geo.name}'s buyer mix and regulatory environment.`,
		tldr: [
			`${shortLabel} adapted to ${geo.name}'s buyer mix: ${topInds.slice(0, 3).map((id) => getIndustry(id)?.label || id).join(", ")}.`,
			compliance ? `Compliance: ${compliance}.` : `Standard global advertising standards apply.`,
			`Time to first signal: ${service.timeToResults}. Primary KPI: ${service.primaryKpi}.`,
			`Channel mix shifts vs the generic playbook — see table below.`,
		],
		sections,
		faqs,
		related,
		guideType: "service-geo",
	};
}

// ─────────────────────── Industry × Geo guide ───────────────────────

export function buildIndustryGeoGuide(industry: Industry, geo: Geo): GuideContent {
	const primaryServices = servicesForIndustry(industry);
	const compliance = complianceLineForGeo(geo);
	const isTopHere = geo.topIndustries.includes(industry.id);
	const loc = getLocationDepth(geo.id);

	const sections: GuideSection[] = [
		{
			id: "overview",
			heading: `${industry.label} marketing in ${geo.name} — overview`,
			paragraphs: [
				`${industry.label} marketing in ${geo.name} ${isTopHere ? `is a high-priority market — ${industry.label.toLowerCase()} is one of ${geo.name}'s dominant buyer industries, with deep local benchmark data and intense competitive activity` : `is an active but secondary market — ${industry.label.toLowerCase()} is not in ${geo.name}'s top industry concentration, which affects competitor density and benchmark availability`}.`,
				loc?.marketContext || `${geo.name}'s commercial dynamics shape how ${industry.label.toLowerCase()} marketing runs — buyer behaviour, channel preferences, and ${compliance ? `compliance (${compliance})` : "regulatory environment"} all factor in.`,
			],
		},
		{
			id: "category-fit",
			heading: `${industry.label} × ${geo.name} category fit`,
			bullets: [
				`${industry.label}'s CAC band: ${industry.avgCacInr} ₹; CPC band: ${industry.avgCpcInr} ₹.`,
				`Is ${industry.label.toLowerCase()} in ${geo.name}'s top concentration? ${isTopHere ? "Yes — high category fit, deep benchmarks." : "No — secondary fit; benchmarks lighter."}`,
				`Top ${industry.label.toLowerCase()} services: ${primaryServices.slice(0, 3).map((s) => s.label).join(", ")}.`,
				`Pain points: ${(industry.topPainPoints || []).slice(0, 2).join("; ") || "general category dynamics"}.`,
			],
		},
		{
			id: "channel-mix",
			heading: `Channel mix — ${industry.label.toLowerCase()} in ${geo.name}`,
			intro: `${industry.label} channel mix adapted to ${geo.name}'s local buyer behaviour.`,
			table: {
				caption: `${industry.label} channel weighting in ${geo.name}`,
				columns: ["Channel / surface", "Weight", "Rationale"],
				rows: primaryServices.slice(0, 5).map((s, idx) => {
					const weight = idx === 0 ? "Primary" : idx === 1 ? "Primary" : idx === 2 ? "Secondary" : "Supporting";
					return [
						s.label,
						weight,
						`${s.tagline} For ${industry.label.toLowerCase()} in ${geo.name}, ${s.label.toLowerCase()} ${isTopHere ? "carries reinforced weight given the category's dominance here" : "is moderated by ${industry.label.toLowerCase()}'s secondary status in ${geo.name}"}.`,
					];
				}),
			},
		},
		{
			id: "compliance",
			heading: `${geo.name} + ${industry.label} compliance overlay`,
			intro: compliance ? `${industry.label} marketing in ${geo.name} runs inside two compliance layers:` : `Standard global advertising standards apply.`,
			bullets: compliance
				? [
						`Geo framework: ${compliance}.`,
						`Industry overlay: ${industry.id === "real-estate" ? "RERA disclosure requirements + project-stage labelling" : industry.id === "finance" || industry.id === "fintech" || industry.id === "insurance" ? "financial-services regulator advertising rules (SEBI / RBI / IRDAI in India; SAMA in KSA; FCA in UK; MAS in Singapore as applicable)" : industry.id === "healthcare" || industry.id === "healthtech" ? "medical-advertising standards + claims compliance" : "category-specific compliance requirements as applicable"}.`,
						`Every creative reviewed against both layers before deployment.`,
				  ]
				: [],
		},
		{
			id: "playbook",
			heading: `${industry.label} × ${geo.name} marketing playbook`,
			intro: `What a serious engagement actually ships:`,
			bullets: [
				`Audit phase: ICP + competitor + creative + attribution review specific to ${industry.label.toLowerCase()} in ${geo.name}.`,
				`Channel build: ${primaryServices.slice(0, 3).map((s) => s.label.toLowerCase()).join(" → ")}, with ${geo.name}-localised creative.`,
				`Creative production: ${industry.label.toLowerCase()}-fluent + ${geo.name}-coded creative; 20–50 variants/month at Scale tier.`,
				`Lifecycle: email + WhatsApp + retargeting orchestrated against ${industry.label.toLowerCase()}'s typical buying cycle in ${geo.name}.`,
				`Attribution: server-side from day one with cycle-appropriate windows.`,
			],
		},
	];

	const faqs: GuideFaq[] = [
		{
			question: `What's the typical CAC for ${industry.label.toLowerCase()} in ${geo.name}?`,
			answer: `Category band sits at ${industry.avgCacInr} ₹ (industry-level). For ${geo.name} specifically the band shifts ${isTopHere ? "slightly tighter (competitive intensity is higher)" : "slightly wider (lower competitor density)"}. The audit benchmarks your specific position.`,
		},
		{
			question: `What channels work best for ${industry.label.toLowerCase()} in ${geo.name}?`,
			answer: `Primary channels: ${primaryServices.slice(0, 3).map((s) => s.label).join(", ")}. See the channel-mix table above for ${geo.name}-specific weighting.`,
		},
		{
			question: `Do you have ${industry.label.toLowerCase()} experience in ${geo.name} specifically?`,
			answer: isTopHere
				? `Yes — ${industry.label} is one of ${geo.name}'s dominant industries, which means our engagement count + benchmark data is meaningfully higher for this combination.`
				: `${industry.label} engagements happen across geographies. For ${geo.name} specifically, the playbook adapts to local market context. The audit shares what we can disclose about prior ${industry.label.toLowerCase()} engagements.`,
		},
		{
			question: `How long is a typical ${industry.label.toLowerCase()} × ${geo.name} engagement?`,
			answer: `Three months minimum for paid; six months minimum for organic / content compounding. Most engagements settle at 6–12 month retainers.`,
		},
		{
			question: `Will you handle ${industry.label.toLowerCase()} compliance in ${geo.name}?`,
			answer: compliance
				? `Yes — every creative reviewed against ${compliance} and any industry-specific overlays before deployment.`
				: `Standard advertising compliance applies; industry-specific overlays handled as applicable.`,
		},
	];

	const related: GuideRelated[] = [
		{ label: `${industry.label} — industry pillar`, href: `/${industry.id}` },
		{ label: `${industry.label} marketing in ${geo.name} — commercial`, href: `/${industry.id}-marketing-in-${geo.id}` },
		{ label: `${industry.label} marketing company in ${geo.name}`, href: `/${industry.id}-marketing-company-in-${geo.id}` },
		{ label: `${industry.label} marketing guide`, href: `/resources/guides/${industry.id}-marketing` },
		{ label: `Digital marketing in ${geo.name} guide`, href: `/resources/guides/digital-marketing-in-${geo.id}` },
	];

	return {
		title: `${industry.label} marketing in ${geo.name} — the full guide (2026)`,
		dek: `An advanced guide to ${industry.label.toLowerCase()} marketing in ${geo.name}. Category fit, channel mix, compliance, playbook — built for operators serious about ${industry.label.toLowerCase()} growth in ${geo.name}.`,
		tldr: [
			`${industry.label}'s CAC band ${industry.avgCacInr} ₹; ${isTopHere ? `top concentration in ${geo.name}` : `secondary concentration in ${geo.name}`}.`,
			compliance ? `${geo.name} compliance: ${compliance}.` : `Standard global advertising standards apply.`,
			`Top channels: ${primaryServices.slice(0, 3).map((s) => s.label).join(" + ")}.`,
			`This guide explains how ${industry.label.toLowerCase()} marketing adapts to ${geo.name} specifically.`,
		],
		sections,
		faqs,
		related,
		guideType: "industry-geo",
	};
}
