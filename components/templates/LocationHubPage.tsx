/**
 * LocationHubPage — canonical layout for every /digital-marketing-in-{X} page.
 *
 * Takes a location slug and renders the full hub from location-depth seed +
 * cross-references services.json + industries.json for service / industry
 * grids. Server-rendered, schema-rich, accessibility-graded.
 */

import Link from "next/link";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { EmbeddedLeadForm } from "./EmbeddedLeadForm";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { TimestampStamp } from "./TimestampStamp";
import { AuthorCard } from "./AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { services, industries, type Service } from "@/lib/data";
import { getLocationDepth, type LocationDepth } from "@/lib/data/location-depth";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

type Props = { slug: string };

function svcLabel(id: string): string {
	const s = services.find((sv) => sv.id === id);
	return s ? s.label : id;
}

function indLabel(id: string): string {
	const i = industries.find((ind) => ind.id === id);
	return i ? i.label : id;
}

function buildSchema(loc: LocationDepth, url: string, dateModified: string, faqs: FAQItem[]) {
	const placeType = loc.type === "country" ? "Country" : loc.type === "city-state" ? "Country" : "City";
	return [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"@id": `${url}#service`,
			name: `Digital marketing in ${loc.name}`,
			description: loc.summary,
			url,
			provider: { "@id": `${SITE_URL}#organization` },
			areaServed: {
				"@type": placeType,
				name: loc.name,
				...(loc.iso ? { addressCountry: loc.iso } : {}),
			},
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `Digital marketing in ${loc.name} — Frameleads`,
			description: loc.summary,
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
			about: [
				{
					"@type": "Place",
					name: loc.name,
					...(loc.iso ? { containedInPlace: loc.iso } : {}),
				},
			],
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
				{ "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
				{ "@type": "ListItem", position: 3, name: loc.name, item: url },
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

function NotFound({ slug }: { slug: string }) {
	return (
		<>
			<main id="main" className="mx-auto max-w-3xl px-6 py-16">
				<h1 className="font-poppins text-3xl font-bold">Location not found</h1>
				<p className="mt-4 text-[#5A5A5A]">
					{slug} isn't currently in our covered-locations list.{" "}
					<Link href="/locations" className="text-[#FF6B35] underline">
						Browse all locations →
					</Link>
				</p>
			</main>
		</>
	);
}

export function LocationHubPage({ slug }: Props) {
	const loc = getLocationDepth(slug);
	if (!loc) return <NotFound slug={slug} />;

	const url = `${SITE_URL}/digital-marketing-in-${loc.slug}`;
	const dateModified = new Date().toISOString().slice(0, 10);

	const tldr = [
		loc.summary,
		`Currency: ${loc.currency}. Languages used in advertising: ${loc.languages.join(", ")}.`,
		`Top channels: ${loc.channelMix
			.slice(0, 3)
			.map((c) => c.channel)
			.join(", ")}.`,
		`Free 30-min audit gives an honest read against ${loc.name}-specific benchmarks.`,
	];

	const faqs: FAQItem[] = loc.faqs.map((f) => ({
		question: f.question,
		answer: f.answer,
	}));

	const schema = buildSchema(loc, url, dateModified, faqs);

	const typeBadge =
		loc.type === "country" ? "Country" : loc.type === "city-state" ? "City-State" : "City";

	const placeContextLabel =
		loc.type === "country"
			? "Marketing in"
			: loc.type === "city-state"
				? "Marketing in"
				: `${loc.parentCountry ?? "Marketing"} · `;

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
								{ label: "Locations", href: "/locations" },
								{ label: loc.name },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{typeBadge}
							{loc.parentCountry ? ` · ${loc.parentCountry}` : ""}
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<span>{loc.currency}</span>
							{loc.population ? (
								<>
									<span aria-hidden className="text-[#FFE4D6]">·</span>
									<span>{loc.population}</span>
								</>
							) : null}
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Digital marketing in {loc.name}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{loc.summary}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link
								href={`/free-marketing-audit?geo=${loc.slug}&cta=location-${loc.slug}-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free {loc.name} audit
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

				{/* ─── Market context ─── */}
				<section
					aria-labelledby="market-context-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Market context
					</div>
					<h2
						id="market-context-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						What you're operating against in {loc.name}
					</h2>
					<p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90">
						{loc.marketContext}
					</p>
				</section>

				{/* ─── Services we run here ─── */}
				<section
					aria-labelledby="services-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Services
					</div>
					<h2
						id="services-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Services we run in {loc.name}
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						The services below have the deepest portfolio depth + best fit for {loc.name}'s
						market dynamics. Each links to the service hub.
					</p>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2">
						{loc.topServiceIds.map((sid) => {
							const svc = services.find((s) => s.id === sid);
							if (!svc) return null;
							return (
								<li key={sid}>
									<Link
										href={`/${sid}-in-${loc.slug}`}
										className="block rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(45,55,72,0.06)] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
									>
										<div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B35]">
											{svc.label}
										</div>
										<div className="mt-1 font-poppins text-[15px] font-semibold text-[#2D3748]">
											{svc.label} in {loc.name}
										</div>
										<div className="mt-1 text-[12.5px] text-[#5A5A5A]">
											{svc.tagline}
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</section>

				{/* ─── Channel mix ─── */}
				<section
					aria-labelledby="channel-mix-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Channel mix
					</div>
					<h2
						id="channel-mix-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Channel mix that works in {loc.name}
					</h2>
					<div className="mt-6 overflow-x-auto rounded-2xl border border-[#FFE4D6]">
						<table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
							<thead>
								<tr className="bg-[#FDF8F5] text-[#2D3748]">
									<th scope="col" className="border-b border-[#FFE4D6] p-3 font-semibold">
										Channel
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
								{loc.channelMix.map((row) => (
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
				</section>

				{/* ─── Industries ─── */}
				<section
					aria-labelledby="industries-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Industries
					</div>
					<h2
						id="industries-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Industries dominant in {loc.name}
					</h2>
					<ul className="mt-6 flex flex-wrap gap-2">
						{loc.topIndustryIds.map((iid) => {
							const ind = industries.find((i) => i.id === iid);
							if (!ind) {
								// Industry like "luxury" might not be in industries.json
								return (
									<li key={iid}>
										<span className="inline-flex rounded-full border border-[#FFE4D6] bg-[#FDF8F5] px-3 py-1 text-[12.5px] text-[#5A5A5A]">
											{iid.replace(/-/g, " ")}
										</span>
									</li>
								);
							}
							return (
								<li key={iid}>
									<Link
										href={
											loc.type === "country" && !loc.parentCountry
												? `/${ind.id}-marketing`
												: `/${ind.id}-marketing-in-${loc.slug}`
										}
										className="inline-flex rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[12.5px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
									>
										{ind.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</section>

				{/* ─── Compliance + regulatory ─── */}
				<section
					aria-labelledby="compliance-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Compliance
					</div>
					<h2
						id="compliance-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						Regulatory + compliance in {loc.name}
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						The rules below shape how we run paid + organic campaigns in {loc.name}.
						Compliance is built into every engagement; see /editorial-policy for our
						sourcing posture.
					</p>
					<ul className="mt-6 space-y-3">
						{loc.compliance.map((c) => (
							<li
								key={c.name}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">
									{c.href ? (
										<a
											href={c.href}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-[#FF6B35]"
										>
											{c.name}
											<span aria-hidden className="ml-1 text-[11px] text-[#5A5A5A]">↗</span>
										</a>
									) : (
										c.name
									)}
								</div>
								<p className="mt-1 text-[13.5px] leading-relaxed text-[#2D3748]/85">
									{c.description}
								</p>
							</li>
						))}
					</ul>
				</section>

				{/* ─── Sub-locations ─── */}
				{loc.subLocations && loc.subLocations.length > 0 ? (
					<section
						aria-labelledby="sub-locations-heading"
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							Sub-{loc.type === "country" ? "regions" : "districts"}
						</div>
						<h2
							id="sub-locations-heading"
							className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
						>
							{loc.type === "country" ? "Cities" : "Districts"} in {loc.name}
						</h2>
						<ul className="mt-6 grid gap-3 sm:grid-cols-2">
							{loc.subLocations.map((s) => (
								<li
									key={s.name}
									className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">
										{s.name}
									</div>
									<p className="mt-1 text-[13px] leading-relaxed text-[#5A5A5A]">
										{s.note}
									</p>
								</li>
							))}
						</ul>
					</section>
				) : null}

				{/* ─── Market nuances ─── */}
				<section
					aria-labelledby="nuances-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Market nuances
					</div>
					<h2
						id="nuances-heading"
						className="mt-2 font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]"
					>
						What to know before running campaigns in {loc.name}
					</h2>
					<ul className="mt-6 list-disc space-y-2 pl-6 text-[15px] leading-[1.7] text-[#2D3748]/90">
						{loc.marketNuances.map((n, idx) => (
							<li key={idx}>{n}</li>
						))}
					</ul>
				</section>

				<EmbeddedLeadForm
					source={`location-${loc.slug}-mid`}
					service={loc.topServiceIds[0]}
					headline={`Get a free audit scoped to ${loc.name}`}
					body={`Fill in the form below to book a free 30-min audit. We'll review your current setup against ${loc.name}-specific benchmarks + channel-mix expectations + compliance posture, then hand you the three highest-leverage moves — even if you don't engage us.`}
				/>

				<FAQBlock items={faqs} />

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp updatedAt={dateModified} reviewedBy={DEFAULT_AUTHOR.name} />

				<CTABlock
					variant="audit"
					headline={`Run growth marketing in ${loc.name} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current marketing against the ${loc.name} benchmarks above and tell you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?geo=${loc.slug}&cta=location-${loc.slug}-bottom`}
					primaryLabel={`Get a free ${loc.name} audit`}
				/>

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} A senior operator reviews ${loc.name} campaigns at the Scale + Enterprise tiers; channel-mix recommendations on this page reflect Frameleads' live operating data from ${loc.name}-targeted engagements.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
		</>
	);
}
