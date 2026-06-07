import type { Metadata } from "next";
import Link from "next/link";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { CTABlock } from "@/components/templates/CTABlock";
import { FAQBlock } from "@/components/templates/FAQBlock";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/how-we-audit`;
const PUBLISHED_AT = "2025-12-01";
const DATE_MODIFIED = "2026-06-07";

export const metadata: Metadata = {
	title:
		"How We Audit — the Frameleads 30-min free audit methodology | Frameleads",
	description:
		"What actually happens in a Frameleads free marketing audit: the inputs we ask for, the seven things we inspect, and the deliverable you walk away with.",
	alternates: { canonical: URL },
	openGraph: {
		title: "How We Audit — Frameleads",
		description:
			"Methodology for the Frameleads 30-min free marketing audit.",
		url: URL,
		type: "article",
		publishedTime: PUBLISHED_AT,
		modifiedTime: DATE_MODIFIED,
		authors: [DEFAULT_AUTHOR.name],
	},
};

const STEPS = [
	{
		name: "Send us your access (or 24-hour-old screenshots)",
		text: "Before the call, you grant viewer access (or share screenshots) for: Google Analytics, Meta Ads Manager, Google Ads, your CRM lead view, your top 3 landing pages. We don't ask for write access; we don't need it. If you can't share access for compliance reasons, screenshots dated within 24 hours work.",
	},
	{
		name: "30-min audit call — we drive the structure",
		text: "We open with five questions: what's your north-star metric, what's your current monthly spend + revenue, what's the top constraint you'd most want fixed, what have you tried that didn't work, who else are you talking to. Then we share-screen through the access you sent and inspect the seven areas below.",
	},
	{
		name: "Same-day written summary",
		text: "Within 24 hours of the call, you receive a written summary: the three highest-leverage moves we'd recommend, the budget shape each requires, and how Frameleads would or wouldn't fit (sometimes we're not the right partner — we'll say so).",
	},
];

const INSPECTION_AREAS = [
	{
		area: "Unit economics",
		check:
			"Current blended CAC, AOV, LTV (gross-margin), payback window, LTV/CAC ratio. We flag if the math doesn't sustain the implied spend.",
	},
	{
		area: "Attribution stack",
		check:
			"What's instrumented (Pixel, CAPI, server-side GTM, GA4 custom dimensions, post-purchase survey). We flag the biggest signal gap.",
	},
	{
		area: "Creative supply",
		check:
			"Recent 30-day creative variants, kill-rate, winning angles, format diversity. We flag if you're under 10 variants/month for paid scale.",
	},
	{
		area: "Audience + campaign structure",
		check:
			"Meta + Google account hygiene: ad-set granularity, audience overlap, bid strategy, budget allocation. We flag structural issues that distort ROAS.",
	},
	{
		area: "Landing-page conversion",
		check:
			"Top 3 landing pages — hero, value-prop, CTA position, mobile load time, form-completion friction. We flag CRO opportunities worth >5% lift.",
	},
	{
		area: "Lifecycle + retention",
		check:
			"Email + WhatsApp + SMS flow coverage, win-back logic, repeat-purchase rate at 30/60/90 days. We flag if retention is the highest-leverage move.",
	},
	{
		area: "Organic + content surface",
		check:
			"Domain authority, content cluster coverage, AI-citation surface (TLDRs, FAQ schemas, llms.txt). We flag if SEO + GEO is the missing pillar.",
	},
];

const FAQS = [
	{
		question: "Is the audit really free?",
		answer:
			"Yes — no card required, no follow-up sales harassment if you say no. We run free audits because they're our highest-converting top-of-funnel asset and because a small percentage of audited prospects become great retainer clients. The audit pays for itself across the funnel.",
	},
	{
		question: "What if I'm already working with another agency?",
		answer:
			"Many of our audits are second-opinion requests from brands working with another agency. We respect that — we won't trash-talk the incumbent. We'll just tell you what we'd do differently. Sometimes the right move is to stick with the incumbent and re-scope the brief; sometimes it's not.",
	},
	{
		question: "Do I have to share login credentials?",
		answer:
			"No. We ask for viewer-level access via Google's standard share flow (which you revoke any time) or for dated screenshots if access-sharing isn't possible. We never ask for passwords, MFA codes, or write access.",
	},
	{
		question: "How is this different from agency 'free audits' that are just sales pitches?",
		answer:
			"The deliverable is the difference. Our written summary lists the three highest-leverage moves whether they involve Frameleads or not. About 30% of post-audit prospects don't engage us — usually because their bottleneck is internal (org structure, product, supply chain) or because their unit economics need fixing before any marketing spend matters. We tell them that.",
	},
	{
		question: "How quickly can we get on a call?",
		answer:
			"Usually within 5-7 working days of your free-audit request. Faster if you mention urgency in the form — we keep a short slot open for time-sensitive situations (launch deadlines, board-meeting prep, churning agency relationships).",
	},
];

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "How We Audit — Frameleads",
		description:
			"Methodology for the Frameleads 30-min free marketing audit: inputs, inspection areas, and deliverable.",
		url: URL,
		datePublished: PUBLISHED_AT,
		dateModified: DATE_MODIFIED,
		inLanguage: "en-IN",
		author: {
			"@type": "Person",
			"@id": `${DEFAULT_AUTHOR.url}#person`,
			name: DEFAULT_AUTHOR.name,
			url: DEFAULT_AUTHOR.url,
		},
		publisher: { "@id": `${SITE_URL}#organization` },
		mainEntityOfPage: { "@type": "WebPage", "@id": URL },
	},
	{
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How a Frameleads free marketing audit runs",
		description:
			"Three-step process for the 30-minute free audit: pre-call access, the call itself, written deliverable.",
		step: STEPS.map((s, idx) => ({
			"@type": "HowToStep",
			position: idx + 1,
			name: s.name,
			text: s.text,
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
			{ "@type": "ListItem", position: 2, name: "How We Audit", item: URL },
		],
	},
];

export default function HowWeAuditPage() {
	return (
		<>
			<SchemaInjector schema={SCHEMA} />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_280px_at_75%_-30%,rgba(255,107,53,0.16),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "How We Audit" },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Methodology · Free audit
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							How we audit
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							The actual mechanics of the Frameleads 30-minute free audit — what we ask for, what we inspect, and what you walk away with. Published openly so prospects know exactly what to expect.
						</p>
					</div>
				</header>

				<article className="mx-auto max-w-3xl px-6 py-10">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						The three steps
					</h2>
					<ol className="mt-6 space-y-4">
						{STEPS.map((s, idx) => (
							<li
								key={s.name}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Step {String(idx + 1).padStart(2, "0")}
								</div>
								<h3 className="mt-1 font-poppins text-[18px] font-semibold text-[#2D3748]">
									{s.name}
								</h3>
								<p className="mt-2 text-[15px] leading-relaxed text-[#2D3748]/85">
									{s.text}
								</p>
							</li>
						))}
					</ol>

					<h2 className="mt-12 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						The seven things we inspect
					</h2>
					<p className="mt-3 text-[16px] leading-[1.7] text-[#5A5A5A]">
						We don't try to cover everything in 30 minutes. We cover the seven areas where bottlenecks usually hide — and we flag the one or two that matter most for your business.
					</p>
					<ul className="mt-6 space-y-3">
						{INSPECTION_AREAS.map((a, idx) => (
							<li
								key={a.area}
								className="rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-5"
							>
								<div className="font-poppins text-[16px] font-semibold text-[#2D3748]">
									{String(idx + 1).padStart(2, "0")}. {a.area}
								</div>
								<p className="mt-2 text-[14.5px] leading-relaxed text-[#2D3748]/85">
									{a.check}
								</p>
							</li>
						))}
					</ul>

					<h2 className="mt-12 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						The deliverable
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						You walk away with a written summary, delivered within 24 hours, containing:
					</p>
					<ul className="mt-3 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
						<li>The three highest-leverage moves we'd make in your next 90 days.</li>
						<li>The budget shape required for each — including a no-spend variant where the move is operational rather than budget-driven.</li>
						<li>An honest read of whether Frameleads is the right partner for the next 90 days, or whether a different agency / in-house build / "do nothing yet" is the better call.</li>
						<li>References to the relevant Frameleads playbook pages (the{" "}
							<Link
								href="/frameleads-growth-system"
								className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
							>
								Growth System™
							</Link>
							, glossary entries, benchmark reports) so you can self-validate our reasoning.
						</li>
					</ul>
					<p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90">
						That's it. No 40-slide deck, no template recommendations, no scope-creep proposals attached. If you want to engage Frameleads, the next step is a 60-min scoping call. If not, you have a written record of three concrete recommendations to act on.
					</p>
				</article>

				<CTABlock
					variant="audit"
					headline="Book a free 30-min audit."
					body="No card, no follow-up sales harassment if you pass. The same methodology described above, applied to your specific business."
					primaryHref="/free-marketing-audit?cta=how-we-audit"
					primaryLabel="Request the audit"
				/>

				<FAQBlock items={FAQS} />

				<TimestampStamp updatedAt={DATE_MODIFIED} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} Ajsal personally runs ~25% of Frameleads' audits; the rest are run by the senior team using the same methodology described on this page.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={DATE_MODIFIED}
				/>
			</main>
		</>
	);
}
