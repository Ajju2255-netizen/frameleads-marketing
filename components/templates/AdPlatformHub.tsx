/**
 * AdPlatformHub — canonical layout for every /{platform}-ads hub page.
 *
 * Renders a complete, schema-rich, server-side hub for an ad-platform record
 * from lib/data/ad-platforms.ts. Replaces the legacy hand-built ad-platform
 * pages (taboola, snapchat, pinterest, shopify, tiktok, baidu, yandex) with
 * one canonical template — same design DNA as ServiceHubPage / MoneyPage.
 *
 * Used by app/{platform}-ads/page.tsx files as a one-line wrapper:
 *
 *   import { AdPlatformHub } from "@/components/templates/AdPlatformHub";
 *   import { getAdPlatform } from "@/lib/data/ad-platforms";
 *   export default function Page() {
 *     const platform = getAdPlatform("taboola-ads");
 *     if (!platform) notFound();
 *     return <AdPlatformHub platform={platform} url="..." />;
 *   }
 */

import Link from "next/link";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { FAQBlock } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { EmbeddedLeadForm } from "./EmbeddedLeadForm";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { TimestampStamp } from "./TimestampStamp";
import { AuthorCard } from "./AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import type { AdPlatform } from "@/lib/data/ad-platforms";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

type Props = {
	platform: AdPlatform;
	url: string;
};

export function AdPlatformHub({ platform: p, url }: Props) {
	const dateModified = new Date().toISOString().slice(0, 10);
	const lc = p.label.toLowerCase();

	const tldr = [
		p.tagline,
		`Audience: ${p.audience}`,
		`Typical CPC ${p.cpcBand}; cohort CAC ${p.cacBand}. Time to first signal: ${p.timeToFirstSignal}.`,
		`Same senior operator weekly. CAPI / server-side attribution from day one. Free 30-min audit shows whether ${p.label} earns a place in your paid mix.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"@id": `${url}#service`,
			name: `${p.label} Management`,
			alternateName: p.label,
			description: p.summary,
			url,
			serviceType: p.label,
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
			headline: `${p.label} — Frameleads Operator Playbook`,
			description: p.summary,
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
			mainEntity: p.faqs.map((f) => ({
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
				{ "@type": "ListItem", position: 3, name: p.label, item: url },
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
								{ label: p.label },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Ad Platform · {p.network}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{p.label}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{p.heroDek}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link
								href={`/free-marketing-audit?service=${p.id}&cta=adplatform-${p.id}-top`}
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

				{/* ─── Quick-stats strip ─── */}
				<section
					aria-labelledby="quickstats-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-8"
				>
					<h2 id="quickstats-heading" className="sr-only">
						{p.label} at a glance
					</h2>
					<dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
						{[
							{ k: "Network", v: p.network },
							{ k: "Geo focus", v: p.geoFocus },
							{ k: "Typical CPC", v: p.cpcBand },
							{ k: "First signal", v: p.timeToFirstSignal },
						].map((row) => (
							<div
								key={row.k}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-3.5"
							>
								<dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									{row.k}
								</dt>
								<dd className="mt-1 text-[13px] leading-snug text-[#2D3748]">
									{row.v}
								</dd>
							</div>
						))}
					</dl>
				</section>

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
						Three operational differences running {lc}
					</h2>
					<ul className="mt-6 grid gap-4 sm:grid-cols-3">
						{[
							{
								n: "01",
								h: "Senior-operator weekly load",
								t: `The senior operator who runs the audit stays on your account. We cap senior load at 3-4 active retainers, so the person who diagnosed your ${p.label} fit is the one running campaigns.`,
							},
							{
								n: "02",
								h: "CAPI / server-side from day one",
								t: `${p.label} Conversion API wired server-to-server before scaling, plus GA4 + cross-channel reconciliation monthly. No pixel-only attribution.`,
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
										is documented end-to-end. You can grade us against the framework. No black-box.
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

				{/* ─── Primary use cases ─── */}
				<section
					aria-labelledby="usecases-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Primary use cases
					</div>
					<h2
						id="usecases-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Where {p.label} earns its place in the mix
					</h2>
					<ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
						{p.primaryUseCases.map((u) => (
							<li
								key={u}
								className="flex gap-3 rounded-xl border border-[#FFE4D6] bg-white p-3.5 text-[14px] text-[#2D3748]"
							>
								<span aria-hidden className="text-[#FF6B35]">
									→
								</span>
								<span>{u}</span>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Format / channel mix ─── */}
				<section
					aria-labelledby="channelmix-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Channel + format mix
					</div>
					<h2
						id="channelmix-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						How we weight {p.label} formats
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						No platform is a single channel. The mix below shows how Frameleads typically weights {p.label} formats inside a Scale-tier engagement — adjusted to your category + creative supply.
					</p>
					<div className="mt-5 overflow-hidden rounded-2xl border border-[#FFE4D6] bg-white">
						<table className="w-full text-left text-[14px]">
							<thead className="bg-[#FFF7F2] text-[12px] uppercase tracking-wide text-[#FF6B35]">
								<tr>
									<th className="px-4 py-3 font-semibold">Format</th>
									<th className="px-4 py-3 font-semibold">Weight</th>
									<th className="px-4 py-3 font-semibold">Note</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#FFE4D6]">
								{p.channelMix.map((row) => (
									<tr key={row.format}>
										<td className="px-4 py-3 font-semibold text-[#2D3748]">{row.format}</td>
										<td className="px-4 py-3 text-[#FF6B35]">{row.weight}</td>
										<td className="px-4 py-3 text-[#5A5A5A]">{row.note}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* ─── Process timeline ─── */}
				<section
					aria-labelledby="process-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						How the engagement runs
					</div>
					<h2
						id="process-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Four phases — Discovery → Foundation → Scale → Compound
					</h2>
					<ol className="mt-6 space-y-4">
						{p.processPhases.map((phase, idx) => (
							<li
								key={phase.label}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5"
							>
								<div className="flex items-baseline gap-3">
									<span className="font-poppins text-[20px] font-bold text-[#FF6B35]">
										{String(idx + 1).padStart(2, "0")}
									</span>
									<div>
										<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
											{phase.label}
										</div>
										<h3 className="mt-1 font-poppins text-[16px] font-semibold text-[#2D3748]">
											{phase.heading}
										</h3>
									</div>
								</div>
								<ul className="mt-3 grid gap-1.5 text-[13.5px] text-[#2D3748]/85">
									{phase.outputs.map((o) => (
										<li key={o} className="flex gap-2">
											<span aria-hidden className="text-[#FF6B35]">
												·
											</span>
											<span>{o}</span>
										</li>
									))}
								</ul>
							</li>
						))}
					</ol>
				</section>

				{/* ─── Pricing tiers ─── */}
				<section
					aria-labelledby="pricing-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Engagement tiers
					</div>
					<h2
						id="pricing-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						{p.label} pricing — three tiers, no lock-in
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						Monthly fees only — media spend is separate. Most brands run 3–5× fees on media at the Starter + Scale tiers. 30-day exit notice in either direction.
					</p>
					<div className="mt-5 grid gap-4 sm:grid-cols-3">
						{p.pricingTiers.map((tier) => (
							<div
								key={tier.name}
								className="flex flex-col rounded-2xl border border-[#FFE4D6] bg-white p-5"
							>
								<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									{tier.name}
								</div>
								<div className="mt-2 font-poppins text-[20px] font-bold text-[#2D3748]">
									{tier.monthlyBand}
								</div>
								<p className="mt-2 text-[12.5px] leading-snug text-[#5A5A5A]">
									{tier.mediaContext}
								</p>
								<p className="mt-3 text-[13.5px] font-semibold text-[#2D3748]">
									{tier.bestFor}
								</p>
								<ul className="mt-3 flex flex-1 flex-col gap-1.5 text-[13px] text-[#2D3748]/85">
									{tier.includes.map((inc) => (
										<li key={inc} className="flex gap-2">
											<span aria-hidden className="text-[#FF6B35]">
												✓
											</span>
											<span>{inc}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* ─── Fit check ─── */}
				<section
					aria-labelledby="fit-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Fit check — the honest version
					</div>
					<h2
						id="fit-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Is {p.label} right for your business right now?
					</h2>
					<div className="mt-5 grid gap-4 sm:grid-cols-2">
						<div className="rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-5">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								Built for
							</div>
							<ul className="mt-3 flex flex-col gap-2 text-[13.5px] text-[#2D3748]/85">
								{p.whoFor.map((w) => (
									<li key={w} className="flex gap-2">
										<span aria-hidden className="text-[#FF6B35]">
											✓
										</span>
										<span>{w}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-2xl border border-[#FFE4D6] bg-white p-5">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5A5A5A]">
								Not the right fit
							</div>
							<ul className="mt-3 flex flex-col gap-2 text-[13.5px] text-[#2D3748]/85">
								{p.whoNotFor.map((w) => (
									<li key={w} className="flex gap-2">
										<span aria-hidden className="text-[#5A5A5A]">
											—
										</span>
										<span>{w}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* ─── Embedded mid-page lead form ─── */}
				<EmbeddedLeadForm
					source={`adplatform-${p.id}-mid`}
					service={p.id}
					headline={`Get a free audit scoped to ${p.label}`}
					body={`Fill in the form below to book a free 30-minute audit. We'll review whether ${p.label} earns a place in your current paid mix, and what the realistic CAC band looks like for your category — even if you don't engage us.`}
				/>

				<FAQBlock items={p.faqs} />

				<ReferencesBlock references={referencesFor({ serviceId: "performance-marketing" })} />

				<TimestampStamp updatedAt={dateModified} reviewedBy={DEFAULT_AUTHOR.name} />

				{/* ─── Bottom CTA ─── */}
				<CTABlock
					variant="audit"
					headline={`Run ${lc} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review whether ${p.label} fits your current funnel, what realistic CAC looks like for your category, and the three highest-leverage moves to make — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?service=${p.id}&cta=adplatform-${p.id}-bottom`}
					primaryLabel="Get a free audit"
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} Ajsal is the senior operator on most ${p.label} engagements at the Scale and Enterprise tiers.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
		</>
	);
}
