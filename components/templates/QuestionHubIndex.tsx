/**
 * QuestionHubIndex — shared canonical template for the 6 question hub indexes:
 *   /how-to, /what-is, /how-much, /why, /best, /is-it
 *
 * Each hub takes a `kind` and renders:
 *   - Hero (breadcrumb + h1 + dek)
 *   - TLDR (4 bullets about what this hub covers)
 *   - Why this hub exists (1 paragraph)
 *   - Featured 12 questions (sample of high-priority questions for this kind)
 *   - Grouped by industry (top 8 industries with relevant questions)
 *   - Grouped by geo (top priority geos with relevant questions)
 *   - Grouped by service (top services with relevant questions)
 *   - Methodology (what makes a "good" {kind} guide in 2026)
 *   - Full A-Z question list (collapsible categories, all questions)
 *   - Cross-links to other 5 question kinds
 *   - Adjacent /resources/guides cross-links
 *   - References + Timestamp + AuthorCard + CTAs
 *
 * Schema: CollectionPage + ItemList (top featured) + BreadcrumbList + WebPage(speakable).
 */

import Link from "next/link";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { CTABlock } from "./CTABlock";
import { SchemaInjector } from "./SchemaInjector";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { questions, type QuestionEntry } from "@/lib/data/questions";
import { services, industries, geosAll, type Industry, type Geo, type Service } from "@/lib/data";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

const KIND_CONFIG: Record<
	string,
	{
		title: string;
		dek: string;
		tldr: string[];
		methodology: { heading: string; body: string }[];
		why: string;
		intent: string;
	}
> = {
	"how-to": {
		title: "How-to guides — operator playbooks",
		dek: "Step-by-step playbooks built from live engagements. Named steps, India-specific benchmarks, common mistakes per step, schema-tagged FAQs. For operators who'd rather execute than read theory.",
		tldr: [
			"Step-by-step process guides — not blog posts.",
			"Each guide ships named steps + tools + time estimates + common mistakes per step.",
			"India + global benchmarks where applicable.",
			"All grounded in the Frameleads Growth System™ methodology.",
		],
		methodology: [
			{ heading: "What makes a good how-to guide", body: "Named steps in order. Time estimate per step. Tools at each step. Common pitfall at each step. Outcomes specified, not just activities." },
			{ heading: "When to follow vs adapt", body: "Follow the playbook to the letter for first execution; adapt only after at least one cycle. Premature adaptation is how playbooks fail to compound." },
			{ heading: "How long execution takes", body: "Median how-to guide: 4-12 weeks end-to-end. Compounding plays continue maturing for 6-18 months after the named steps complete." },
		],
		why: "How-to content is the highest-leverage discovery surface in 2026 — Google's AI Overview, Perplexity, and ChatGPT all heavily cite step-structured content. Our how-to guides are designed to be both followable in practice and citable in AI answers.",
		intent: "process",
	},
	"what-is": {
		title: "What-is definitions — plain-English glossary",
		dek: "Plain-English definitions of marketing terms, channels, frameworks, and concepts. Each entry includes formula where applicable, examples, edge cases, and adjacent terms.",
		tldr: [
			"Definitions that an operator can actually use, not textbook prose.",
			"Formula + example + edge case for every quantitative term.",
			"Cross-linked to glossary (87 terms) + industry adaptations (2,697 cells).",
			"Built for AI Overview and LLM citation — direct-answer first, depth below.",
		],
		methodology: [
			{ heading: "How definitions are structured", body: "Lead with the plain-English answer in 80 words. Add formula. Add 3 examples. Add edge cases. Add adjacent terms." },
			{ heading: "How they differ from glossary", body: "Glossary entries are reference cards. What-is pages are answer-first articles — same definition, different structural emphasis (story + benchmarks vs spec + formula)." },
			{ heading: "Why AIO-optimised matters", body: "AI Overview and chatbot citations now drive ~15-25% of inbound for B2B content in 2026 (Frameleads internal data). The structure of the answer determines whether you get cited or not." },
		],
		why: "Definitions are the foundation. If your team doesn't share a common vocabulary on CAC, ROAS, MRR, attribution windows, etc., every marketing conversation runs into translation overhead. This hub is the anchor.",
		intent: "definition",
	},
	"how-much": {
		title: "How-much pricing answers",
		dek: "Honest pricing bands across services, industries, geographies, and engagement tiers. Factors that move price within the band. Total cost (fee + media + tools), not just sticker price.",
		tldr: [
			"Pricing bands — not single prices — for everything in marketing.",
			"Factors that move price within the band (scope, seniority, cadence, geography).",
			"Total monthly investment (fee + media + tools), not headline retainer.",
			"India + global figures; tier-specific.",
		],
		methodology: [
			{ heading: "Why bands not single numbers", body: "Two agencies quoted at the same fee can deliver dramatically different scopes. Pricing only makes sense as a band against a defined scope." },
			{ heading: "What moves price within the band", body: "Scope width, senior-consultant time, geography (Tier-1 vs Tier-2), engagement length, compliance overlay, channel mix complexity." },
			{ heading: "How to read agency decks", body: "Ask for deliverables-per-month, not line-item retainer. Compare fee + media-spend total, not fee in isolation." },
		],
		why: "Pricing is the area where buyers report the least trust — half the bands quoted publicly are inflated for SEO, the other half are floor-anchored for lead capture. This hub gives the honest middle.",
		intent: "pricing",
	},
	why: {
		title: "Why guides — operator reasoning",
		dek: "Honest reasoning behind common marketing decisions. The main arguments in favour, the strongest counter-arguments, and the evidence that decides. Not opinion pieces.",
		tldr: [
			"Reasoning behind common operator decisions.",
			"Main arguments + strongest counter-arguments + evidence.",
			"Not 'X is best' — 'X is best when these conditions hold; here's when they don't'.",
			"Built for operators making decisions, not for SEO.",
		],
		methodology: [
			{ heading: "How a why-guide is structured", body: "Argument → evidence → counter-argument → when the argument breaks. Honest base rates, not anecdotes." },
			{ heading: "Where reasoning fails", body: "When the argument is taken outside its applicable conditions (stage, market, category). The applicable conditions are part of the argument." },
			{ heading: "When to revisit a why-decision", body: "Quarterly for fast-moving variables; annually for slow ones." },
		],
		why: "Marketing has more 'best practices' than working practices. The why-guides are where Frameleads documents what holds and what doesn't — with the conditions attached.",
		intent: "reasoning",
	},
	"is-it": {
		title: "Is-it decision guides",
		dek: "Yes/no decision guides with explicit criteria. Where the answer flips, the implications either way, and the cost of being wrong. For operators making real calls.",
		tldr: [
			"Decision guides — work through the criteria to reach the answer.",
			"Each guide names the variables that change the answer.",
			"Implications either way + cost of being wrong.",
			"When 'it depends' is honest, we say so + give the variables.",
		],
		methodology: [
			{ heading: "How a decision guide works", body: "List the criteria. Score each. Sum to confidence. High confidence resolves the call; low confidence means 'run an experiment, don't decide'." },
			{ heading: "Cost of being wrong", body: "Reversible decisions get more bias to act; irreversible deserve analysis. We score reversibility in every guide." },
			{ heading: "When to revisit", body: "Quarterly for fast variables (paid performance, creative fatigue); annually for slow ones (brand position, product-market fit)." },
		],
		why: "Most decisions in marketing are made on vibes and reverse-engineered with logic. These guides invert that: criteria first, decision second, vibes last.",
		intent: "decision",
	},
	best: {
		title: "Best-of guides — curated lists with criteria",
		dek: "Curated 'best X' lists with transparent scoring criteria. Frameleads' position disclosed where applicable. No affiliate fees, no paid placement.",
		tldr: [
			"Curated 'best X' lists — criteria-first, list-second.",
			"Each entry scored against the same criteria, transparently.",
			"Frameleads' position disclosed where it overlaps the category.",
			"No affiliate fees, no paid placement, no false equivalence.",
		],
		methodology: [
			{ heading: "How entries are scored", body: "Methodology depth, senior-consultant access, stage-fit, retention strategy, transparency, category-specific track record. Each weighted; total is the score." },
			{ heading: "Why Frameleads is included where relevant", body: "We participate in the same scoring as competitors. We disclose how we rank. If we don't meet criteria for a segment, we're not on that list." },
			{ heading: "When to ignore the list and audit independently", body: "Always. Lists are a starting point. Reference calls + free audits + scope comparison are the real screen." },
		],
		why: "Most 'best of' lists are sales decks dressed as SEO content. The criteria-first approach is what separates an honest list from a paid one.",
		intent: "curated-list",
	},
};

type Props = {
	kind: "how-to" | "what-is" | "how-much" | "why" | "is-it" | "best";
};

function kindLabel(k: string): string {
	const map: Record<string, string> = {
		"how-to": "How-to",
		"what-is": "What is",
		"how-much": "How much",
		why: "Why",
		"is-it": "Is it",
		best: "Best",
	};
	return map[k] || k;
}

function entriesForIndustry(kindList: QuestionEntry[], industry: Industry): QuestionEntry[] {
	return kindList.filter((q) => q.tags.includes(industry.id)).slice(0, 6);
}

function entriesForGeo(kindList: QuestionEntry[], geo: Geo): QuestionEntry[] {
	return kindList.filter((q) => q.tags.includes(geo.id)).slice(0, 6);
}

function entriesForService(kindList: QuestionEntry[], service: Service): QuestionEntry[] {
	const shortId = service.id === "seo-services" ? "seo" : service.id;
	return kindList
		.filter(
			(q) =>
				q.tags.includes(service.id) ||
				q.tags.includes(shortId) ||
				q.tags.some((t) => service.id.startsWith(t)),
		)
		.slice(0, 6);
}

export function QuestionHubIndex({ kind }: Props) {
	const cfg = KIND_CONFIG[kind];
	const url = `${SITE_URL}/${kind}`;
	const today = new Date().toISOString().slice(0, 10);

	const all = questions.filter((q) => q.kind === kind);
	const featured = all.slice(0, 12);

	// Group: industries with the most questions of this kind
	const indCounts = industries
		.map((i) => ({ ind: i, list: entriesForIndustry(all, i) }))
		.filter((g) => g.list.length > 0)
		.sort((a, b) => b.list.length - a.list.length)
		.slice(0, 8);

	// Group: priority geos (tier-1 India + global commercial-priority)
	const priorityGeoIds = ["mumbai", "bangalore", "delhi-ncr", "pune", "hyderabad", "chennai", "dubai", "singapore", "london", "new-york"];
	const geoGroups = priorityGeoIds
		.map((id) => geosAll.find((g) => g.id === id))
		.filter((g): g is Geo => Boolean(g))
		.map((g) => ({ geo: g, list: entriesForGeo(all, g) }))
		.filter((g) => g.list.length > 0)
		.slice(0, 6);

	// Group: services with relevant questions
	const svcGroups = services
		.map((s) => ({ svc: s, list: entriesForService(all, s) }))
		.filter((g) => g.list.length > 0)
		.sort((a, b) => b.list.length - a.list.length)
		.slice(0, 6);

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: cfg.title,
			description: cfg.dek,
			url,
			datePublished: PUBLISHED_AT,
			dateModified: today,
			inLanguage: "en-IN",
			isPartOf: { "@id": `${SITE_URL}#website` },
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
			},
			publisher: { "@id": `${SITE_URL}#organization` },
			hasPart: featured.map((q) => ({
				"@type": "Article",
				name: q.title,
				url: `${SITE_URL}/${q.kind}/${q.slug}`,
				description: q.intent,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: `${cfg.title} — featured`,
			numberOfItems: featured.length,
			itemListElement: featured.map((q, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: q.title,
				url: `${SITE_URL}/${q.kind}/${q.slug}`,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				{ "@type": "ListItem", position: 2, name: kindLabel(kind), item: url },
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".tldr", ".direct-answer"],
			},
		},
	];

	const otherKinds: Array<{ k: string; label: string; desc: string }> = [
		{ k: "how-to", label: "How-to guides", desc: "Step-by-step process playbooks." },
		{ k: "what-is", label: "What-is definitions", desc: "Plain-English glossary." },
		{ k: "how-much", label: "How-much pricing", desc: "Honest pricing bands + factors." },
		{ k: "why", label: "Why-rationale", desc: "Reasoning behind decisions." },
		{ k: "is-it", label: "Is-it decisions", desc: "Yes/no decision frameworks." },
		{ k: "best", label: "Best-of lists", desc: "Criteria-first curated lists." },
	].filter((o) => o.k !== kind);

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main id="main">
				{/* Hero */}
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: cfg.title }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{kindLabel(kind)} · {all.length} {all.length === 1 ? "entry" : "entries"}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{cfg.title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{cfg.dek}
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link
								href={`/free-marketing-audit?source=hub&kind=${kind}&cta=hub-${kind}-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free 30-min audit
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/resources"
								className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								See full resources library
							</Link>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={cfg.tldr} />

				{/* Why this hub exists */}
				<section
					aria-labelledby="why-hub"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Purpose
					</div>
					<h2
						id="why-hub"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Why this hub exists
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#2D3748]/90">{cfg.why}</p>
				</section>

				{/* Featured questions */}
				<section
					aria-labelledby="featured-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Featured
					</div>
					<h2
						id="featured-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Featured {kindLabel(kind).toLowerCase()} guides
					</h2>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2">
						{featured.map((q) => (
							<li key={q.slug}>
								<Link
									href={`/${kind}/${q.slug}`}
									className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">
										{q.title}
									</div>
									<p className="mt-2 text-[13.5px] leading-relaxed text-[#5A5A5A]">{q.intent.slice(0, 140)}</p>
									<div className="mt-3 text-[12px] text-[#5A5A5A]">For {q.audience}</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* Grouped by industry */}
				{indCounts.length > 0 && (
					<section
						aria-labelledby="by-industry"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							By industry
						</div>
						<h2
							id="by-industry"
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							{kindLabel(kind)} by industry
						</h2>
						<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
							Industry-flagged questions in this kind. Each entry is also accessible at /{kind}/{`{slug}`}/{`{industry-id}`} for the industry-specific deep version.
						</p>
						<div className="mt-6 space-y-6">
							{indCounts.map(({ ind, list }) => (
								<div key={ind.id}>
									<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">
										<Link href={`/${ind.id}`} className="hover:text-[#FF6B35]">
											{ind.label}
										</Link>
										<span className="ml-2 text-[12px] font-normal text-[#5A5A5A]">
											({list.length} {list.length === 1 ? "entry" : "entries"})
										</span>
									</h3>
									<ul className="mt-3 grid gap-2 sm:grid-cols-2">
										{list.map((q) => (
											<li key={q.slug}>
												<Link
													href={`/${kind}/${q.slug}`}
													className="block rounded-xl border border-[#FFE4D6] bg-white px-3 py-2 text-[13.5px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
												>
													{q.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Grouped by geo */}
				{geoGroups.length > 0 && (
					<section
						aria-labelledby="by-geo"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							By location
						</div>
						<h2
							id="by-geo"
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							{kindLabel(kind)} by location
						</h2>
						<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
							Geo-flagged questions in this kind, across priority Indian + global markets.
						</p>
						<div className="mt-6 space-y-6">
							{geoGroups.map(({ geo, list }) => (
								<div key={geo.id}>
									<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">
										<Link href={`/digital-marketing-in-${geo.id}`} className="hover:text-[#FF6B35]">
											{geo.name}
										</Link>
										<span className="ml-2 text-[12px] font-normal text-[#5A5A5A]">
											({list.length} {list.length === 1 ? "entry" : "entries"})
										</span>
									</h3>
									<ul className="mt-3 grid gap-2 sm:grid-cols-2">
										{list.map((q) => (
											<li key={q.slug}>
												<Link
													href={`/${kind}/${q.slug}`}
													className="block rounded-xl border border-[#FFE4D6] bg-white px-3 py-2 text-[13.5px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
												>
													{q.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Grouped by service */}
				{svcGroups.length > 0 && (
					<section
						aria-labelledby="by-service"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							By service
						</div>
						<h2
							id="by-service"
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							{kindLabel(kind)} by service
						</h2>
						<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
							Service-flagged questions. Cross-link to service hubs + service guides.
						</p>
						<div className="mt-6 space-y-6">
							{svcGroups.map(({ svc, list }) => (
								<div key={svc.id}>
									<h3 className="font-poppins text-[16.5px] font-semibold text-[#2D3748]">
										<Link href={`/${svc.id}`} className="hover:text-[#FF6B35]">
											{svc.label}
										</Link>
										<span className="ml-2 text-[12px] font-normal text-[#5A5A5A]">
											({list.length} {list.length === 1 ? "entry" : "entries"})
										</span>
									</h3>
									<ul className="mt-3 grid gap-2 sm:grid-cols-2">
										{list.map((q) => (
											<li key={q.slug}>
												<Link
													href={`/${kind}/${q.slug}`}
													className="block rounded-xl border border-[#FFE4D6] bg-white px-3 py-2 text-[13.5px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
												>
													{q.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Methodology */}
				<section
					aria-labelledby="methodology-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Methodology
					</div>
					<h2
						id="methodology-heading"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						How we structure {kindLabel(kind).toLowerCase()} content
					</h2>
					<div className="mt-5 space-y-4">
						{cfg.methodology.map((m, idx) => (
							<article
								key={idx}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<h3 className="font-poppins text-[16px] font-semibold text-[#2D3748]">{m.heading}</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">{m.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* Full A-Z list */}
				<section
					aria-labelledby="all-list"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Full list
					</div>
					<h2
						id="all-list"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						All {all.length} {kindLabel(kind).toLowerCase()} entries
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						Complete list, alphabetical. Each entry links to its full page.
					</p>
					<ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
						{[...all]
							.sort((a, b) => a.title.localeCompare(b.title))
							.map((q) => (
								<li key={q.slug}>
									<Link
										href={`/${kind}/${q.slug}`}
										className="block rounded-lg border border-[#FFE4D6] bg-white px-3 py-2 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
									>
										{q.title}
									</Link>
								</li>
							))}
					</ul>
				</section>

				{/* Cross-links to other kinds */}
				<section
					aria-labelledby="other-kinds"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Other question hubs
					</div>
					<h2
						id="other-kinds"
						className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Continue across other intents
					</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{otherKinds.map((o) => (
							<li key={o.k}>
								<Link
									href={`/${o.k}`}
									className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">{o.label}</div>
									<p className="mt-1 text-[13px] text-[#5A5A5A]">{o.desc}</p>
									<div className="mt-2 text-[12px] font-semibold text-[#FF6B35]">
										Open <span aria-hidden>→</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline={`Want this applied to your business?`}
					body={`The guides cover the system. The audit covers your specific stage, ICP, and unit economics. Free 30 minutes, no slides — three concrete moves to take next even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?source=hub&kind=${kind}&cta=hub-${kind}-bottom`}
					primaryLabel="Book a free 30-min audit"
				/>

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This hub is part of the open Frameleads Resources library — operator-grade content, no padding.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={today}
				/>
			</main>
			<Footer />
		</>
	);
}
