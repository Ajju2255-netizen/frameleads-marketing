/**
 * ServiceHubPage — canonical layout for every /[service] hub page.
 *
 * Takes a serviceId and renders the full hub layout entirely from taxonomy +
 * the service-depth seed. Replaces the original hand-built hub pages
 * (heroes, animations, testimonial blocks, case-study cards) with a clean,
 * server-rendered, schema-rich, accessibility-graded equivalent.
 *
 * Used by app/[service]/page.tsx files as a one-line wrapper:
 *
 *   import { ServiceHubPage } from "@/components/templates/ServiceHubPage";
 *   export default function Page() {
 *     return <ServiceHubPage serviceId="seo-services" />;
 *   }
 */

import Link from "next/link";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { ServiceDepthSection } from "./ServiceDepthSection";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { EmbeddedLeadForm } from "./EmbeddedLeadForm";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { TimestampStamp } from "./TimestampStamp";
import { AuthorCard } from "./AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { services, type Service } from "@/lib/data";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

type Props = {
	/** Must match a service.id in services.json. */
	serviceId: string;
	/**
	 * Optional URL override — defaults to `/<serviceId>`. Use when the route
	 * URL differs from the service.id (e.g. /email-marketing-and-automation-services
	 * for service.id "email-marketing").
	 */
	urlPath?: string;
};

function buildServiceFaqs(s: Service): FAQItem[] {
	const lc = s.label.toLowerCase();
	return [
		{
			question: `How much does ${lc} cost in India in 2026?`,
			answer: `Frameleads ${lc} runs in three tiers — Starter (₹1.5L–₹3L/mo), Scale (₹3L–₹8L/mo), Enterprise (₹8L+/mo) — exclusive of media spend. Total monthly investment (fees + media) typically runs 3–5× fees for paid services and 1× for organic/lifecycle services. The right tier depends on your stage, the channels in play, and the cadence you want. Average CAC for this category sits in the ${s.avgCacInr} ₹ band; see the pricing breakdown below for what each tier includes.`,
		},
		{
			question: `How long until ${lc} shows results?`,
			answer: `${s.timeToResults}. Performance-channel signal arrives fastest; organic and compounding loops take 4-9 months. We track ${s.primaryKpi} as the leading indicator from week 2 so direction-of-travel is visible before quarterly reviews. Anyone promising you significant returns in week 1 is selling, not forecasting.`,
		},
		{
			question: `Is ${lc} right for my business right now?`,
			answer: `See the fit-check section below — it's the honest answer for ${lc}. About 30% of inbound audits don't proceed because the timing, runway, or product situation doesn't match the service. We tell prospects that openly. The five-minute version: ${lc} is a fit when you have proven product-market fit, ≥6 months of runway, and a clear north-star metric. Read the full criteria below before booking.`,
		},
		{
			question: `What's different about Frameleads' ${lc}?`,
			answer: `Three operational differences: (1) the same senior operator works on your account weekly, not just at kickoff — junior media buyers run execution under senior supervision. (2) Attribution stack always includes server-side instrumentation (CAPI / GTM Server-Side / GA4) — no Meta-Pixel-only reporting. (3) Creative supply pipeline ships 20-50 variants/month minimum at Scale tier — the highest-leverage variable in paid media in 2026. The full methodology is documented openly on the Frameleads Growth System™ pillar.`,
		},
		{
			question: `Do you guarantee ROAS, lead volume, or revenue?`,
			answer: `No. ROAS depends on product, AOV, audience, market dynamics, and creative execution — none of which the agency fully controls. We commit to execution standards (creative variants per month, attribution rigor, reporting cadence, transparency on ad accounts) — not specific outcomes. Anyone in this category promising you a specific future ROAS in writing is selling, not forecasting. Walk away from guarantees.`,
		},
		{
			question: `What happens if we want to leave?`,
			answer: `30 days written notice, in either direction. On exit we transfer ad accounts + creative source files + analytics dashboards + documented SOPs to your in-house team. We expect clients to outgrow us in 18-24 months and move ${lc} in-house — that's healthy, not a failure mode. Lock-in contracts signal weak operators. See /how-we-audit for the engagement onboarding + exit flow.`,
		},
		{
			question: `Will the senior operator I meet at the audit actually run my account?`,
			answer: `Yes — that's a policy, not a sales line. The audit is run by a senior Frameleads operator (typically Ajsal Abbas for high-priority categories, otherwise a senior strategist). The same person stays on the account through the engagement, with junior media buyers / content producers handling execution under their direction. We hold senior-operator load at 3-4 active retainers per person so attention scales.`,
		},
	];
}

export function ServiceHubPage({ serviceId, urlPath }: Props) {
	const service = services.find((s) => s.id === serviceId);
	if (!service) {
		// Defensive: page is statically rendered against a known taxonomy, so
		// this branch should never hit in production. Returns a minimal layout
		// rather than throwing so the build doesn't break on a typo.
		return (
			<>
				<main id="main" className="mx-auto max-w-3xl px-6 py-16">
					<h1 className="font-poppins text-3xl font-bold">Service not found</h1>
					<p className="mt-4 text-[#5A5A5A]">
						This service couldn't be loaded. <Link href="/digital-marketing-services" className="text-[#FF6B35] underline">Browse all services →</Link>
					</p>
				</main>
			</>
		);
	}

	const lc = service.label.toLowerCase();
	const path = urlPath ?? `/${service.id}`;
	const url = `${SITE_URL}${path}`;
	const dateModified = new Date().toISOString().slice(0, 10);

	const tldr = [
		service.tagline,
		`Average CPC ${service.avgCpcInr} ₹, typical CAC ${service.avgCacInr} ₹ — the bands ${lc} engagements run inside.`,
		`Typical time to first signal: ${service.timeToResults}. Primary leading indicator: ${service.primaryKpi}.`,
		`Same senior operator weekly. Server-side attribution from day one. Free 30-min audit shows where the next move should land.`,
	];

	const faqs = buildServiceFaqs(service);

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"@id": `${url}#service`,
			name: service.label,
			alternateName: service.displayName,
			description: service.shortDescription,
			url,
			serviceType: service.label,
			provider: { "@id": `${SITE_URL}#organization` },
			areaServed: [
				{ "@type": "Country", name: "India" },
				{ "@type": "Country", name: "United Arab Emirates" },
				{ "@type": "Country", name: "Singapore" },
				{ "@type": "Country", name: "United Kingdom" },
				{ "@type": "Country", name: "United States" },
			],
			offers: {
				"@type": "AggregateOffer",
				priceCurrency: "INR",
				lowPrice: "150000",
				highPrice: "800000",
				offerCount: "3",
				availability: "https://schema.org/InStock",
			},
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${service.label} — Frameleads Growth System™`,
			description: service.shortDescription,
			url,
			datePublished: PUBLISHED_AT,
			dateModified,
			inLanguage: "en-IN",
			image: `${SITE_URL}/og-default.png`,
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
				url: DEFAULT_AUTHOR.url,
			},
			publisher: { "@id": `${SITE_URL}#organization` },
			mainEntityOfPage: { "@type": "WebPage", "@id": url },
			about: [{ "@type": "Service", "@id": `${url}#service` }],
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
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
					name: "Services",
					item: `${SITE_URL}/digital-marketing-services`,
				},
				{ "@type": "ListItem", position: 3, name: service.label, item: url },
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".tldr", ".faq-answer", ".direct-answer"],
			},
		},
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				{/* ─── Hero ─── */}
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "Services", href: "/digital-marketing-services" },
								{ label: service.label },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Service · Frameleads Growth System™
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{service.label}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{service.shortDescription}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link
								href={`/free-marketing-audit?service=${service.id}&cta=hub-${service.id}-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free 30-min audit
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/frameleads-growth-system"
								className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								See our methodology
							</Link>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				{/* ─── Why Frameleads — three-up differentiation ─── */}
				<section
					aria-labelledby="why-frameleads-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Why Frameleads
					</div>
					<h2
						id="why-frameleads-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Three operational differences in our {lc}
					</h2>
					<ul className="mt-6 grid gap-4 sm:grid-cols-3">
						{[
							{
								n: "01",
								h: "Senior-operator weekly load",
								t: `The senior operator who runs the audit stays on your account. We cap senior load at 3-4 active retainers, so the person who diagnosed your ${lc} program is the one running it.`,
							},
							{
								n: "02",
								h: "Server-side attribution from day one",
								t: `CAPI / GTM Server-Side / GA4 wired before campaigns scale. No Meta-Pixel-only reporting; cohort-level ROAS reconciled monthly against post-purchase truth.`,
							},
							{
								n: "03",
								h: "Methodology published openly",
								t: (
									<>
										The{" "}
										<Link
											href="/frameleads-growth-system"
											className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
										>
											Frameleads Growth System™
										</Link>{" "}
										is documented end-to-end. You can grade us against the framework. No proprietary black-box.
									</>
								),
							},
						].map((item) => (
							<li
								key={item.n}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<div className="font-poppins text-[20px] font-bold leading-none text-[#FF6B35]">
									{item.n}
								</div>
								<h3 className="mt-2 font-poppins text-[15px] font-semibold text-[#2D3748]">
									{item.h}
								</h3>
								<p className="mt-2 text-[13.5px] leading-relaxed text-[#2D3748]/85">
									{item.t}
								</p>
							</li>
						))}
					</ul>
				</section>

				<ServiceDepthSection service={service} />

				{/* ─── Embedded mid-page lead form ─── */}
				<EmbeddedLeadForm
					source={`hub-${service.id}-mid`}
					service={service.id}
					headline={`Get a free audit scoped to ${lc}`}
					body={`Fill in the form below to book a free 30-minute audit. We'll review your current ${lc} setup against the benchmarks above and tell you the three highest-leverage moves — even if you don't engage us.`}
				/>

				<FAQBlock items={faqs} />

				<ReferencesBlock references={referencesFor({ serviceId: service.id })} />

				<TimestampStamp updatedAt={dateModified} reviewedBy={DEFAULT_AUTHOR.name} />

				{/* ─── Bottom CTA ─── */}
				<CTABlock
					variant="audit"
					headline={`Run ${lc} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${lc} setup against the benchmarks above and tell you the three highest-leverage moves to make — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?service=${service.id}&cta=hub-${service.id}-bottom`}
					primaryLabel="Get a free audit"
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} Ajsal leads the ${lc} practice and is the senior operator on most engagements at the Scale and Enterprise tiers.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
		</>
	);
}
