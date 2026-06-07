import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { TLDRBlock } from "@/components/templates/TLDRBlock";
import { FAQBlock } from "@/components/templates/FAQBlock";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { CTABlock } from "@/components/templates/CTABlock";
import { ReferencesBlock } from "@/components/templates/ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/frameleads-growth-system`;
const PUBLISHED_AT = "2025-12-01";
const DATE_MODIFIED = "2026-06-07";

export const metadata: Metadata = {
	title:
		"Frameleads Growth System™ — Map · Magnet · Machine · Multiply · Measure | Frameleads",
	description:
		"The five-stage methodology Frameleads runs across every paid + organic engagement. ICP discovery, demand creation, acquisition machinery, retention compounding, measurement rigor.",
	alternates: { canonical: URL },
	openGraph: {
		title:
			"Frameleads Growth System™ — Map · Magnet · Machine · Multiply · Measure",
		description:
			"The five-stage methodology Frameleads runs across every paid + organic engagement.",
		url: URL,
		type: "article",
		publishedTime: PUBLISHED_AT,
		modifiedTime: DATE_MODIFIED,
		authors: [DEFAULT_AUTHOR.name],
	},
};

const STAGES = [
	{
		num: "01",
		key: "map",
		name: "Map",
		tagline: "Pin the ICP, the JTBD, the unit economics.",
		what: "Define the ideal customer profile with enough precision that you can recognize them in a 30-second ad view. Map the jobs-to-be-done (functional + emotional + social), the buying triggers, and the unit economics ceiling (max viable CAC = LTV × payback × margin headroom).",
		why: "Most marketing failures are mis-Mapped, not mis-executed. Spending against the wrong ICP, with the wrong angle, at a CAC level the unit economics can't sustain, is structural — not a creative-optimization problem.",
		outputs: [
			"ICP definition document (firmographic + behavioural + psychographic)",
			"JTBD framework with 3-5 core jobs",
			"Unit economics ceiling: max viable CAC, target LTV/CAC, payback window",
			"Channel-mix hypothesis (which channels match this ICP's discovery behaviour)",
		],
		metrics: ["Time to ICP clarity: 7–14 days", "Hypothesis confidence: ≥75%"],
	},
	{
		num: "02",
		key: "magnet",
		name: "Magnet",
		tagline: "Build linkable, citable, durable demand creators.",
		what: "Create the assets that pull right-fit buyers in: pillar content, original research, free tools, definitive guides, opinion pieces. These are the long-half-life investments — pages that rank for years, get cited by AI engines, and earn backlinks without active outreach.",
		why: "Performance marketing buys time. Magnets buy compounding. A category-defining data study published in month 3 is still earning citations in month 36. The cost of attention drops every quarter you compound an organic + AI-discoverable surface.",
		outputs: [
			"Pillar pages for each ICP-relevant cluster",
			"Original research / data studies (citation magnets)",
			"Free tools / calculators (link magnets)",
			"AI-citable formats: TLDRs, FAQ schemas, structured comparisons",
		],
		metrics: [
			"Time to first citation: 60–120 days",
			"Backlinks earned (DR ≥ 40): 8–25 per quarter at scale",
			"AI Overview / Perplexity citation share: tracked monthly",
		],
	},
	{
		num: "03",
		key: "machine",
		name: "Machine",
		tagline: "Operate the always-on acquisition engine.",
		what: "Run paid acquisition (Meta, Google, LinkedIn, programmatic), creative supply pipelines, attribution stack, and weekly optimisation. The Machine is what most agencies sell as their whole offer — but it's only durable when stages 1, 2 above sit underneath it.",
		why: "A well-built Machine compounds the magnets and accelerates the map. Poorly built (no attribution rigor, no creative cycles, no audience engineering), it burns cash on the wrong audiences with the wrong creative.",
		outputs: [
			"Multi-channel paid program (Meta + Google + niche channels)",
			"Creative supply: 20-50 variants/month with structured testing taxonomy",
			"Attribution stack: CAPI + server-side GTM + GA4 + post-purchase survey",
			"Weekly reporting cadence with next-week experiment plan",
		],
		metrics: [
			"Creative-supply velocity: 20–50 variants/month",
			"Blended CAC payback: < 90 days for D2C, < 12 months for B2B SaaS",
			"Attribution reconciliation: monthly, multi-source",
		],
	},
	{
		num: "04",
		key: "multiply",
		name: "Multiply",
		tagline: "Compound through retention, referral, and LTV engineering.",
		what: "Once acquisition produces, the next leverage is retention. Email + WhatsApp + SMS lifecycle, loyalty programs, referral mechanics, subscription/replenishment design, win-back flows. Multiply is where margin headroom actually grows.",
		why: "A 5-point lift in 90-day repeat-purchase rate reduces effective CAC by ~25% — without changing acquisition spend. Most brands chase acquisition optimisation when Multiply is the higher-leverage lever.",
		outputs: [
			"Lifecycle program (email + WhatsApp + SMS) with documented flows",
			"Referral mechanic with measurable virality coefficient",
			"Replenishment / subscription design where category permits",
			"Win-back + reactivation flows for cold customers",
		],
		metrics: [
			"90-day repeat-purchase rate uplift: +5 to +15 points",
			"LTV expansion: +20 to +60% over baseline",
			"Effective CAC reduction (without acquisition cuts): -15 to -30%",
		],
	},
	{
		num: "05",
		key: "measure",
		name: "Measure",
		tagline: "Run against a single north-star with a tight loop of leading indicators.",
		what: "Define the north-star metric (typically qualified pipeline for B2B or contribution-margin revenue for D2C). Instrument it cleanly. Build leading-indicator dashboards (creative velocity, attribution variance, retention cohort curves) so decisions don't lag the outcome by 60 days.",
		why: "Marketing decisions made on lagging metrics are 6-8 weeks behind reality. The Machine moves too fast for monthly reviews. Measure is the operating system that lets the previous four stages compound rather than drift.",
		outputs: [
			"North-star metric definition + dashboard",
			"Leading indicators tracked weekly (creative variants, ROAS variance, cohort retention)",
			"Monthly review template + quarterly strategic re-baseline",
			"AIO/GEO citation tracking — manual + tool-assisted",
		],
		metrics: [
			"Decision lag: < 7 days",
			"Forecast accuracy on quarterly revenue: ± 15%",
			"Cohort-level reporting: weekly",
		],
	},
];

const INDUSTRY_NOTES = [
	{
		industry: "D2C",
		emphasis: "Heavy on Machine + Multiply.",
		note: "Meta-led acquisition + WhatsApp/email lifecycle + Shopify-native retention. Multiply is where the unit economics actually win.",
	},
	{
		industry: "B2B SaaS",
		emphasis: "Heavy on Magnet + Measure.",
		note: "LinkedIn + SEO + content moats compound for years. Measure rigor matters because sales cycles obscure short-window attribution.",
	},
	{
		industry: "Real Estate",
		emphasis: "Heavy on Map + Machine.",
		note: "Micro-market ICP definition + creative segmentation + 60-day nurture flows. Multiply is bounded by purchase frequency (one home, not subscriptions).",
	},
	{
		industry: "Healthcare / Healthtech",
		emphasis: "Heavy on Map + Magnet.",
		note: "DPDP + NMC compliance shapes everything. Authority content (clinician bios, condition guides) is the primary trust mechanism.",
	},
	{
		industry: "Fintech",
		emphasis: "Heavy on Machine + Measure.",
		note: "Compliance-aware paid acquisition + cohort-based ROAS tracking. RBI / SEBI ad copy rigor is non-negotiable.",
	},
	{
		industry: "Edtech",
		emphasis: "Heavy on Magnet + Multiply.",
		note: "Course content as the magnet; lifecycle to convert free → paid → renew. Performance is the accelerant, not the engine.",
	},
];

const TLDR = [
	"The Frameleads Growth System™ is a five-stage operating model: Map → Magnet → Machine → Multiply → Measure.",
	"Each stage has defined outputs, leading metrics, and a typical timeline to first signal.",
	"The methodology is applied across D2C, B2B SaaS, real estate, healthcare, fintech, and edtech — with industry-specific weighting.",
	"It's the same system Frameleads runs on retainers; the only difference between this page and our engagement playbook is detail depth, not direction.",
];

const FAQS = [
	{
		question: "Is the Frameleads Growth System™ proprietary?",
		answer:
			"The methodology is trademarked, the application is what's billable. The framework itself — Map → Magnet → Machine → Multiply → Measure — is published openly here for the same reason most operator-led shops publish their methodology: it filters wrong-fit clients out and builds trust with right-fit ones. The proprietary IP is the data we've collected applying it across 200+ engagements.",
	},
	{
		question: "How is this different from other marketing frameworks?",
		answer:
			"Most marketing frameworks are either (a) sales-funnel oriented (AIDA, AARRR), (b) channel-specific playbooks (the SaaS GTM motion, the D2C playbook), or (c) operating-system layers (RACE, LSI). The Growth System integrates all three — sequenced by stage, channel-agnostic, and instrumented top to bottom. The biggest practical difference: it explicitly schedules the Multiply work, which most marketing-led frameworks underweight.",
	},
	{
		question: "How long does it take to run a full Growth System engagement?",
		answer:
			"Map: 7-14 days. Magnet: 60-120 days for first cited assets, compounding from month 3. Machine: signal in 14-60 days, blended ROAS stabilises by month 3-6. Multiply: lifecycle flows in 30-60 days, compounding from month 6. Measure: dashboard live by week 2, leading-indicator discipline takes 90 days to internalise. Most engagements run the full system through months 1-9 then stabilise into an always-on Machine + Multiply with quarterly Magnet investments and ongoing Measure rigor.",
	},
	{
		question: "Can a small business apply the Growth System?",
		answer:
			"Yes — the stages compress, the principles don't. Pre-PMF or sub-₹50L revenue businesses run a lighter version: tighter Map (single ICP, single channel), narrower Magnet (3-5 pillar pages, no original research yet), lean Machine (one paid channel + one organic), basic Multiply (email lifecycle only), and instrumented Measure from week 1. Most of the benefit comes from the sequencing — don't run Machine without first Mapping.",
	},
	{
		question: "Why publish the methodology if it's your billable IP?",
		answer:
			"Because the methodology isn't the moat. The execution depth, the data we've collected across categories, the senior operators running it, and the velocity of creative supply / attribution iteration are the moat. Publishing the system openly attracts the operators who already think this way and filters out prospects looking for a magic-bullet vendor.",
	},
];

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Frameleads Growth System™ — the five-stage methodology",
		description:
			"The five-stage methodology Frameleads runs across every paid + organic engagement: Map → Magnet → Machine → Multiply → Measure.",
		url: URL,
		datePublished: PUBLISHED_AT,
		dateModified: DATE_MODIFIED,
		inLanguage: "en-IN",
		image: `${SITE_URL}/og-default.png`,
		author: {
			"@type": "Person",
			"@id": `${DEFAULT_AUTHOR.url}#person`,
			name: DEFAULT_AUTHOR.name,
			url: DEFAULT_AUTHOR.url,
		},
		publisher: { "@id": `${SITE_URL}#organization` },
		mainEntityOfPage: { "@type": "WebPage", "@id": URL },
		articleSection: "Methodology",
		keywords:
			"Frameleads Growth System, performance marketing methodology, SEO methodology, marketing operating system, India agency methodology",
	},
	{
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "Apply the Frameleads Growth System",
		description:
			"The five-stage methodology — Map → Magnet → Machine → Multiply → Measure — applied across paid and organic marketing engagements.",
		step: STAGES.map((s, idx) => ({
			"@type": "HowToStep",
			position: idx + 1,
			name: s.name,
			text: s.what,
			url: `${URL}#${s.key}`,
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQS.map((f) => ({
			"@type": "Question",
			name: f.question,
			acceptedAnswer: { "@type": "Answer", text: f.answer },
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{
				"@type": "ListItem",
				position: 2,
				name: "Frameleads Growth System",
				item: URL,
			},
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: URL,
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: [".tldr", ".faq-answer", ".direct-answer"],
		},
	},
];

export default function FrameleadsGrowthSystemPage() {
	return (
		<>
			<SchemaInjector schema={SCHEMA} />
			<Navbar />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "Frameleads Growth System" },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Methodology · Trademarked IP
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							The Frameleads Growth System™
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							A five-stage operating system for paid + organic marketing. Map → Magnet → Machine → Multiply → Measure. Applied across 200+ engagements; published openly so prospects know what they're hiring.
						</p>
					</div>
				</header>

				<TLDRBlock bullets={TLDR} />

				<section className="mx-auto max-w-3xl px-6 py-10">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Why a system, not a playbook?
					</h2>
					<p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90">
						Playbooks are channel-specific recipes. A system is the operating model that decides <em>which</em> playbook applies, in what sequence, and at what budget weight. Most marketing failures aren't bad playbooks — they're misordered ones. The Growth System sequences five stages so each compounds the previous, and so the same five stages can be applied to a ₹50L D2C startup or a ₹50Cr B2B SaaS company without changing direction, only weighting.
					</p>
					<p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90">
						The shorthand for the five stages — <strong>Map · Magnet · Machine · Multiply · Measure</strong> — is intentional. Every word starts with M so the sequence is recallable in a 30-second client conversation, and every word names a verb the team owns rather than a metric they report. Verbs survive market changes; metrics drift.
					</p>
				</section>

				{STAGES.map((stage) => (
					<section
						key={stage.key}
						id={stage.key}
						className="mx-auto max-w-3xl scroll-mt-24 px-6 py-10 border-t border-[#FFE4D6]/60"
					>
						<div className="flex items-baseline gap-4">
							<span className="font-poppins text-[44px] font-bold leading-none text-[#FF6B35]">
								{stage.num}
							</span>
							<div>
								<h2 className="font-poppins text-[28px] sm:text-[32px] font-bold tracking-tight text-[#2D3748]">
									{stage.name}
								</h2>
								<p className="mt-1 text-[15px] italic text-[#5A5A5A]">
									{stage.tagline}
								</p>
							</div>
						</div>
						<p className="mt-5 text-[16px] leading-[1.75] text-[#2D3748]/90">
							<strong className="font-semibold text-[#2D3748]">What:</strong>{" "}
							{stage.what}
						</p>
						<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
							<strong className="font-semibold text-[#2D3748]">Why:</strong>{" "}
							{stage.why}
						</p>
						<div className="mt-6 rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								Outputs
							</div>
							<ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-[#2D3748]/90">
								{stage.outputs.map((o, idx) => (
									<li key={idx}>{o}</li>
								))}
							</ul>
						</div>
						<div className="mt-4 rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-5">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								Typical metrics
							</div>
							<ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-[#2D3748]/90">
								{stage.metrics.map((m, idx) => (
									<li key={idx}>{m}</li>
								))}
							</ul>
						</div>
					</section>
				))}

				<section className="mx-auto max-w-3xl px-6 py-12 border-t border-[#FFE4D6]/60">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						How the system adapts by industry
					</h2>
					<p className="mt-3 text-[16px] leading-[1.7] text-[#5A5A5A]">
						The five stages are universal. Their weighting changes by category — here's how Frameleads tunes the system across the verticals we operate in most.
					</p>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2">
						{INDUSTRY_NOTES.map((n) => (
							<li
								key={n.industry}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<div className="font-poppins text-[16px] font-semibold text-[#2D3748]">
									{n.industry}
								</div>
								<div className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									{n.emphasis}
								</div>
								<p className="mt-2 text-[14.5px] leading-relaxed text-[#2D3748]/85">
									{n.note}
								</p>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline="See the Growth System applied to your business."
					body="30-minute free audit. We'll Map your ICP, identify which stage is the current bottleneck, and walk through the three highest-leverage moves to make in the next 90 days."
					primaryHref="/free-marketing-audit?cta=growth-system-pillar"
					primaryLabel="Book a free 30-min audit"
				/>

				<FAQBlock items={FAQS} />

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp updatedAt={DATE_MODIFIED} reviewedBy={DEFAULT_AUTHOR.name} />

				<section className="mx-auto max-w-3xl px-6 py-10 border-t border-[#FFE4D6]/60">
					<h2 className="font-poppins text-[22px] font-bold text-[#2D3748]">
						Related reading
					</h2>
					<ul className="mt-4 grid gap-3 sm:grid-cols-2">
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<Link
								href="/blogs/best-performance-marketing-agency-bangalore-2026"
								className="block"
							>
								<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Best of
								</div>
								<div className="mt-1 font-poppins text-[15px] font-semibold text-[#2D3748]">
									Best Performance Marketing Agency in Bangalore (2026 Guide)
								</div>
							</Link>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<Link
								href="/blogs/seo-vs-performance-marketing-indian-d2c"
								className="block"
							>
								<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Comparison
								</div>
								<div className="mt-1 font-poppins text-[15px] font-semibold text-[#2D3748]">
									SEO vs Performance Marketing for Indian D2C
								</div>
							</Link>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<Link
								href="/reports/cac-benchmarks-india-2026"
								className="block"
							>
								<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Data study
								</div>
								<div className="mt-1 font-poppins text-[15px] font-semibold text-[#2D3748]">
									CAC Benchmarks for Indian D2C — 2026 Report
								</div>
							</Link>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<Link href="/editorial-policy" className="block">
								<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Trust
								</div>
								<div className="mt-1 font-poppins text-[15px] font-semibold text-[#2D3748]">
									Editorial policy & how we audit
								</div>
							</Link>
						</li>
					</ul>
				</section>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} The Frameleads Growth System™ is the working operating model documented here — the same system the team runs across paid + organic engagements.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={DATE_MODIFIED}
				/>
			</main>
			<Footer />
		</>
	);
}
