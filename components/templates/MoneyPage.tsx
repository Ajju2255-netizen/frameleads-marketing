/**
 * MoneyPage — canonical layout for high-intent "company-in-{city}" landing
 * pages (e.g. /seo-company-in-bangalore, /b2b-marketing-company-in-mumbai).
 *
 * Takes a money-page slug and renders:
 *   - Hero + dual CTAs (audit + phone)
 *   - TLDR
 *   - Why hire us locally — hand-written city-specific trust bullets
 *   - Proof points — verifiable founder + agency credentials
 *   - Service depth OR composite bundle (depending on intent)
 *       * intent === "service":    full ServiceDepthSection (deliverables /
 *                                  channel mix / process / pricing / fit) for
 *                                  the primaryServiceId, with geo context
 *       * intent === "composite":  hand-written deliverables + channel-mix
 *                                  table from money-pages.ts (no pricing —
 *                                  pricing lives on the individual service
 *                                  hubs that the composite links into)
 *   - Neighborhoods grid (from geo.landmarks)
 *   - City-specific FAQs
 *   - References + Timestamp + AuthorCard + bottom CTA
 *
 * Schema stack: LocalBusiness + Service + Article + FAQPage + BreadcrumbList
 *             + WebPage(speakable) + Place.
 *
 * Used by app/{slug}/page.tsx as a one-line wrapper:
 *
 *   import { MoneyPage } from "@/components/templates/MoneyPage";
 *   export default function Page() {
 *     return <MoneyPage slug="seo-company-in-bangalore" />;
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
import { services, getGeo, type Service, type Geo, type Industry } from "@/lib/data";
import {
	getMoneyPage,
	buildProgrammaticServiceMoneyPage,
	buildProgrammaticIndustryMoneyPage,
	type MoneyPage as MoneyPageData,
} from "@/lib/data/money-pages";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

/**
 * Three input modes:
 *   - { slug }                — look up hand-curated MoneyPage from money-pages.ts
 *   - { service, geo }        — programmatic Service × Geo (taxonomy-derived)
 *   - { industry, geo }       — programmatic Industry × Geo (taxonomy-derived)
 *
 * Internally all three resolve to the same MoneyPageData shape and feed the
 * same render path, so layout / schema / SEO remain identical across the
 * curated and programmatic surfaces.
 */
type Props =
	| { slug: string; service?: undefined; industry?: undefined; geo?: undefined }
	| { slug?: undefined; service: Service; industry?: undefined; geo: Geo }
	| { slug?: undefined; service?: undefined; industry: Industry; geo: Geo };

function buildFaqs(m: MoneyPageData): FAQItem[] {
	return m.localFaqs.map((f) => ({ question: f.question, answer: f.answer }));
}

function buildSchema(
	m: MoneyPageData,
	geo: Geo,
	url: string,
	dateModified: string,
	faqs: FAQItem[],
	service?: Service,
) {
	const placeType = geo.country ? "City" : "City";
	return [
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"@id": `${url}#localbusiness`,
			name: `Frameleads — ${m.label}`,
			description: m.heroDek,
			url,
			image: `${SITE_URL}/og-default.png`,
			areaServed: { "@type": placeType, name: geo.name },
			parentOrganization: { "@id": `${SITE_URL}#organization` },
		},
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"@id": `${url}#service`,
			name: m.label,
			description: m.heroDek,
			url,
			...(service ? { serviceType: service.label } : {}),
			provider: { "@id": `${SITE_URL}#organization` },
			areaServed: { "@type": placeType, name: geo.name },
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${m.label} — Frameleads`,
			description: m.heroDek,
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
			about: [{ "@type": "Place", name: geo.name }],
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
					name: `Digital marketing in ${geo.name}`,
					item: `${SITE_URL}/digital-marketing-in-${geo.id}`,
				},
				{ "@type": "ListItem", position: 3, name: m.label, item: url },
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
}

export function MoneyPage(props: Props) {
	// ─── Mode resolution ──────────────────────────────────────────────
	let money: MoneyPageData | undefined;
	let geo: Geo | undefined;

	if (props.slug) {
		money = getMoneyPage(props.slug);
		geo = money ? getGeo(money.geoId) : undefined;
	} else if (props.service && props.geo) {
		// Service × Geo programmatic
		geo = props.geo;
		// Check for hand-curated overlay first; fall back to programmatic build.
		const overlaySlug = `${props.service.id === "seo-services" ? "seo" : props.service.id}-company-in-${props.geo.id}`;
		money = getMoneyPage(overlaySlug) ?? buildProgrammaticServiceMoneyPage(props.service, props.geo);
	} else if (props.industry && props.geo) {
		// Industry × Geo programmatic
		geo = props.geo;
		const overlaySlug = `${props.industry.id}-marketing-company-in-${props.geo.id}`;
		money = getMoneyPage(overlaySlug) ?? buildProgrammaticIndustryMoneyPage(props.industry, props.geo);
	}

	if (!money) {
		return (
			<>
				<main id="main" className="mx-auto max-w-3xl px-6 py-16">
					<h1 className="font-poppins text-3xl font-bold">Page not found</h1>
					<p className="mt-4 text-[#5A5A5A]">
						This money page couldn't be loaded.{" "}
						<Link href="/" className="text-[#FF6B35] underline">
							Return home →
						</Link>
					</p>
				</main>
			</>
		);
	}

	if (!geo) {
		return (
			<>
				<main id="main" className="mx-auto max-w-3xl px-6 py-16">
					<h1 className="font-poppins text-3xl font-bold">City not configured</h1>
					<p className="mt-4 text-[#5A5A5A]">
						The geo for this page is missing.{" "}
						<Link href="/" className="text-[#FF6B35] underline">
							Return home →
						</Link>
					</p>
				</main>
			</>
		);
	}

	const service =
		money.intent === "service" && money.primaryServiceId
			? services.find((s) => s.id === money.primaryServiceId)
			: undefined;

	const url = `${SITE_URL}/${money.slug}`;
	const dateModified = new Date().toISOString().slice(0, 10);
	const faqs = buildFaqs(money);
	const schema = buildSchema(money, geo, url, dateModified, faqs, service);

	const tldr = [
		money.heroDek,
		service
			? `Average CPC ${service.avgCpcInr} ₹, typical CAC ${service.avgCacInr} ₹ — bands ${service.label.toLowerCase()} engagements for ${geo.name} usually run inside.`
			: money.composite
				? `Composite engagement across ${money.composite.serviceIds.length} services — see channel-mix table below for how the spend is structured.`
				: `Anchored to ${geo.name}'s buyer behaviour, regulatory framework, and industry mix.`,
		service
			? `Typical time to first signal: ${service.timeToResults}. Primary leading indicator: ${service.primaryKpi}.`
			: `Buying cycles in ${geo.name} run long — we structure attribution windows accordingly (90-180 days minimum where intent is high-ticket).`,
		`Free 30-min audit before any retainer. We turn down ~30% of audited inbound when timing or fit isn't right.`,
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
								{ label: geo.name, href: `/digital-marketing-in-${geo.id}` },
								{ label: money.label },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{geo.name}
							{geo.state ? <span className="text-[#5A5A5A]">· {geo.state}</span> : null}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{money.label}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{money.heroDek}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link
								href={`/free-marketing-audit?source=money&slug=${money.slug}&cta=money-${money.slug}-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free 30-min audit
								<span aria-hidden>→</span>
							</Link>
							<a
								href="tel:+916362821368"
								className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								Call +91 63628 21368
							</a>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				{/* ─── Why hire us locally ─── */}
				<section
					aria-labelledby="why-local-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Why Frameleads · {geo.name}
					</div>
					<h2
						id="why-local-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						What we bring to {geo.name} specifically
					</h2>
					<ul className="mt-6 space-y-3">
						{money.whyLocalBullets.map((b, idx) => (
							<li
								key={idx}
								className="flex items-start gap-3 rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<span
									aria-hidden
									className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6] text-[12px] font-bold text-[#FF6B35]"
								>
									{idx + 1}
								</span>
								<span className="text-[14.5px] leading-relaxed text-[#2D3748]/90">{b}</span>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Proof points ─── */}
				<section
					aria-labelledby="proof-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Proof
					</div>
					<h2
						id="proof-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						What you can verify before booking
					</h2>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2">
						{money.proofPoints.map((p, idx) => (
							<li
								key={idx}
								className="rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-4 text-[14px] leading-relaxed text-[#2D3748]/90"
							>
								{p}
							</li>
						))}
					</ul>
				</section>

				{/* ─── Service depth (when intent === "service") ─── */}
				{money.intent === "service" && service ? (
					<ServiceDepthSection service={service} geo={geo} />
				) : null}

				{/* ─── Composite bundle (when intent === "composite") ─── */}
				{money.intent === "composite" && money.composite ? (
					<>
						{/* Composite deliverables */}
						<section
							id="deliverables"
							aria-labelledby="composite-deliverables-heading"
							className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
						>
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								What we deliver
							</div>
							<h2
								id="composite-deliverables-heading"
								className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
							>
								{money.label} deliverables
							</h2>
							<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
								{money.composite.summary}
							</p>
							<ul className="mt-6 grid gap-3 sm:grid-cols-2">
								{money.composite.deliverables.map((d, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3 rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
									>
										<span
											aria-hidden
											className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6] text-[12px] font-bold text-[#FF6B35]"
										>
											{idx + 1}
										</span>
										<span className="text-[14.5px] leading-relaxed text-[#2D3748]/90">
											{d}
										</span>
									</li>
								))}
							</ul>
						</section>

						{/* Composite channel mix */}
						<section
							id="channel-mix"
							aria-labelledby="composite-channels-heading"
							className="mx-auto max-w-3xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-6 py-10"
						>
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								Channel mix
							</div>
							<h2
								id="composite-channels-heading"
								className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
							>
								How we structure {money.label.toLowerCase()} in {geo.name}
							</h2>
							<div className="mt-6 overflow-x-auto rounded-2xl border border-[#FFE4D6]">
								<table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
									<thead>
										<tr className="bg-[#FDF8F5] text-[#2D3748]">
											<th scope="col" className="border-b border-[#FFE4D6] p-3 font-semibold">
												Channel / surface
											</th>
											<th scope="col" className="border-b border-[#FFE4D6] p-3 font-semibold">
												Weight
											</th>
											<th scope="col" className="border-b border-[#FFE4D6] p-3 font-semibold">
												Why
											</th>
										</tr>
									</thead>
									<tbody>
										{money.composite.channelMix.map((row) => (
											<tr key={row.channel} className="even:bg-white odd:bg-[#FEFEFE]">
												<th
													scope="row"
													className="border-b border-[#FFE4D6]/60 p-3 font-medium text-[#2D3748]"
												>
													{row.channel}
												</th>
												<td className="border-b border-[#FFE4D6]/60 p-3">
													<span className="inline-flex rounded-full bg-[#FFE4D6]/60 px-2 py-0.5 text-[12px] font-medium text-[#2D3748]">
														{row.weight}
													</span>
												</td>
												<td className="border-b border-[#FFE4D6]/60 p-3 text-[13.5px] text-[#5A5A5A]">
													{row.note}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							{/* Services that compose this engagement */}
							<div className="mt-6">
								<div className="text-[12px] font-semibold text-[#5A5A5A]">
									Services that compose this engagement
								</div>
								<div className="mt-3 flex flex-wrap gap-2">
									{money.composite.serviceIds.map((sid) => {
										const s = services.find((x) => x.id === sid);
										if (!s) return null;
										return (
											<Link
												key={sid}
												href={`/${sid}`}
												className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
											>
												{s.label} <span aria-hidden>→</span>
											</Link>
										);
									})}
								</div>
							</div>
						</section>
					</>
				) : null}

				{/* ─── Neighborhoods grid (when geo.landmarks present) ─── */}
				{geo.landmarks && geo.landmarks.length > 0 ? (
					<section
						aria-labelledby="neighborhoods-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							{geo.name} coverage
						</div>
						<h2
							id="neighborhoods-heading"
							className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
						>
							{geo.name} clusters we work across
						</h2>
						<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
							{geo.name} is not one market — each cluster has a distinct buyer
							profile, search behaviour, and channel mix. Our planning reflects that
							from the audit forward.
						</p>
						<ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
							{geo.landmarks.map((l) => (
								<li
									key={l}
									className="rounded-xl border border-[#FFE4D6] bg-white px-3 py-2 text-[13.5px] font-medium text-[#2D3748]/90 shadow-[0_1px_6px_rgba(45,55,72,0.03)]"
								>
									{l}
								</li>
							))}
						</ul>
					</section>
				) : null}

				{/* ─── Embedded mid-page lead form ─── */}
				<EmbeddedLeadForm
					source={`money-${money.slug}-mid`}
					service={service?.id ?? money.composite?.serviceIds[0]}
					headline={`Get an audit scoped to ${money.label.toLowerCase()}`}
					body={`Fill in the form below to book a free 30-minute audit. We'll review your current setup against the benchmarks on this page and hand you the three highest-leverage moves — even if you don't engage us.`}
				/>

				<FAQBlock items={faqs} />

				<ReferencesBlock
					references={referencesFor({
						serviceId: service?.id ?? money.composite?.serviceIds[0],
					})}
				/>

				<TimestampStamp updatedAt={dateModified} reviewedBy={DEFAULT_AUTHOR.name} />

				{/* ─── Bottom CTA ─── */}
				<CTABlock
					variant="audit"
					headline={`Hire ${money.label.toLowerCase()} that ships, not slides.`}
					body={`Book a free 30-minute audit. We'll review your current setup against the benchmarks above and tell you the three highest-leverage moves to make — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?source=money&slug=${money.slug}&cta=money-${money.slug}-bottom`}
					primaryLabel="Get a free audit"
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} Ajsal personally runs the audit + first 90 days on ${geo.name} engagements at the Scale and Enterprise tiers.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
		</>
	);
}
