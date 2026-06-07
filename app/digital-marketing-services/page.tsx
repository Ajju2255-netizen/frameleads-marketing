import type { Metadata } from "next";
import Link from "next/link";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { KeyPointsBlock } from "@/components/templates/KeyPointsBlock";
import { CTABlock } from "@/components/templates/CTABlock";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { ReferencesBlock } from "@/components/templates/ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { services, industries, geosAll } from "@/lib/data";

export const revalidate = 86400;

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/digital-marketing-services`;

export const metadata: Metadata = {
	title: "Digital Marketing Services — Frameleads Service Catalog",
	description:
		"Every Frameleads service in one place: SEO, Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, performance marketing, content, social, WhatsApp, email, CRO. Channel mix + pricing tiers + audit-first engagement.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Digital Marketing Services — Frameleads",
		description: "Every Frameleads service in one place. Channel mix + pricing tiers + audit-first engagement.",
		url: URL,
		type: "website",
	},
};

const today = new Date().toISOString().slice(0, 10);

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Frameleads — Digital Marketing Services",
		description: "Catalog of every Frameleads service with channel mix + pricing tiers + audit-first engagement model.",
		url: URL,
		datePublished: "2025-12-01",
		dateModified: today,
		inLanguage: "en-IN",
		isPartOf: { "@id": `${SITE_URL}#website` },
		author: { "@type": "Person", "@id": `${DEFAULT_AUTHOR.url}#person`, name: DEFAULT_AUTHOR.name },
		publisher: { "@id": `${SITE_URL}#organization` },
		hasPart: services.map((s) => ({
			"@type": "Service",
			name: s.label,
			url: `${SITE_URL}/${s.id}`,
			description: s.shortDescription,
			provider: { "@id": `${SITE_URL}#organization` },
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Frameleads service catalog",
		numberOfItems: services.length,
		itemListElement: services.map((s, idx) => ({
			"@type": "ListItem",
			position: idx + 1,
			name: s.label,
			url: `${SITE_URL}/${s.id}`,
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Digital Marketing Services", item: URL },
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: URL,
		speakable: { "@type": "SpeakableSpecification", cssSelector: [".tldr", ".direct-answer"] },
	},
];

const PRIORITY_LOCATIONS = [
	{ id: "bangalore", label: "Bangalore" },
	{ id: "mumbai", label: "Mumbai" },
	{ id: "delhi-ncr", label: "Delhi NCR" },
	{ id: "pune", label: "Pune" },
	{ id: "hyderabad", label: "Hyderabad" },
	{ id: "chennai", label: "Chennai" },
	{ id: "dubai", label: "Dubai" },
	{ id: "singapore", label: "Singapore" },
	{ id: "london", label: "London" },
	{ id: "new-york", label: "New York" },
];

function moneySlugFor(serviceId: string): string {
	return serviceId === "seo-services" ? "seo" : serviceId;
}

export default function Page() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-5xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Digital Marketing Services" }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Services Catalog · {services.length} services
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Digital marketing services — the full Frameleads catalog
						</h1>
						<p className="direct-answer mt-4 max-w-3xl text-[17px] leading-relaxed text-[#5A5A5A]">
							Every service Frameleads runs, in one place. Each service hub lists deliverables, channel mix, process, pricing tiers, and fit-check. All engagements start with a free 30-minute audit before any commercial conversation.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link href="/free-marketing-audit?source=services-catalog&cta=services-catalog-top" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5">Book a free 30-min audit<span aria-hidden>→</span></Link>
							<Link href="/frameleads-growth-system" className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">See the methodology</Link>
						</div>
					</div>
				</header>

				<KeyPointsBlock
					bullets={[
						`${services.length} services across paid + organic + lifecycle + analytics, all running on the published Frameleads Growth System™ methodology.`,
						`Every engagement starts with a free 30-minute audit. ~30% of audited inbound is sent away when the timing or fit isn't right.`,
						`Same senior operator weekly. Server-side attribution from day one. No ranking / ROAS guarantees in writing.`,
						`Covered across ${industries.length} industries × ${geosAll.length} geographies — see the cross-cuts at the bottom of this page.`,
					]}
				/>

				{/* Service grid */}
				<section
					aria-labelledby="services-grid"
					className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-12"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">All services</div>
					<h2 id="services-grid" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						The full {services.length}-service catalog
					</h2>
					<p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5A5A5A]">
						Each card links into the service hub with deliverables, channel mix, process, pricing tiers, fit-check, and a free-audit CTA.
					</p>
					<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((s) => (
							<li key={s.id}>
								<Link
									href={`/${s.id}`}
									className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-5 transition-colors hover:border-[#FF6B35]/40 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
								>
									<div className="font-poppins text-[17px] font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">
										{s.label}
									</div>
									<p className="mt-2 text-[13.5px] leading-relaxed text-[#5A5A5A]">
										{s.shortDescription}
									</p>
									<div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A5A5A]">
										<span className="rounded-full bg-[#FFE4D6]/60 px-2 py-0.5">
											CPC {s.avgCpcInr}₹
										</span>
										<span className="rounded-full bg-[#FFE4D6]/60 px-2 py-0.5">
											CAC {s.avgCacInr}₹
										</span>
										<span className="rounded-full bg-[#FFE4D6]/60 px-2 py-0.5">
											{s.timeToResults}
										</span>
									</div>
									<div className="mt-4 text-[12px] font-semibold text-[#FF6B35]">
										Open service hub <span aria-hidden>→</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* Browse by city / money pages */}
				<section
					aria-labelledby="by-location"
					className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-12"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">By location</div>
					<h2 id="by-location" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Browse services by city
					</h2>
					<p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5A5A5A]">
						Sample priority cities. Every service is also available across ~{geosAll.length} Indian + global geographies — see the full sitemap or browse the location hub for any city.
					</p>
					<div className="mt-6 space-y-6">
						{PRIORITY_LOCATIONS.map((loc) => (
							<div key={loc.id}>
								<h3 className="font-poppins text-[16px] font-semibold text-[#2D3748]">
									<Link href={`/digital-marketing-in-${loc.id}`} className="hover:text-[#FF6B35]">
										{loc.label}
									</Link>
								</h3>
								<ul className="mt-3 flex flex-wrap gap-2">
									{services.slice(0, 6).map((s) => (
										<li key={`${loc.id}-${s.id}`}>
											<Link
												href={`/${moneySlugFor(s.id)}-company-in-${loc.id}`}
												className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[12.5px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
											>
												{s.label.replace(/\s+Services?$/, "").trim()} in {loc.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Browse by industry */}
				<section
					aria-labelledby="by-industry"
					className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-12"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">By industry</div>
					<h2 id="by-industry" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Browse by industry — {industries.length} industry pillars
					</h2>
					<p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5A5A5A]">
						Each industry pillar carries channel mix, CAC band, primary services, and pain-point framing — adapted to that category's unit economics.
					</p>
					<ul className="mt-6 flex flex-wrap gap-2">
						{industries.map((i) => (
							<li key={i.id}>
								<Link
									href={`/${i.id}`}
									className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[13px] font-medium text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
								>
									{i.label}
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* How an engagement runs */}
				<section
					aria-labelledby="engagement-shape"
					className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-12"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Engagement model</div>
					<h2 id="engagement-shape" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						How a Frameleads engagement actually runs
					</h2>
					<ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{ h: "Audit-first", b: "Every engagement starts with a free 30-minute audit. We turn down ~30% of inbound where timing or fit isn't right — better than billing for an engagement that won't compound." },
							{ h: "Same senior operator", b: "The senior operator who runs the audit stays on the account. Junior media buyers / content producers execute under their direction. Senior load is capped at 3-4 active retainers per person." },
							{ h: "Server-side attribution", b: "CAPI / GTM Server-Side / GA4 / platform Enhanced Conversions wired on every Scale+ engagement. No Meta-Pixel-only reporting; cohort-level ROAS reconciled monthly against post-purchase truth." },
							{ h: "Published methodology", b: "The Frameleads Growth System™ is documented openly at /frameleads-growth-system. You can grade us against the framework. No proprietary black-box." },
							{ h: "Month-to-month after 90 days", b: "Three-month initial commitment, then month-to-month with 30 days' notice in either direction. Multi-year lock-ins signal weak operators — we don't offer them." },
							{ h: "Verifiable claims only", b: "Founder appeared on Shark Tank India. ~200 lifetime engagements; ~₹9Cr attributed pipeline tracked. No fabricated client counts, no invented uplift %, no industry-leading hyperbole." },
						].map((item) => (
							<li key={item.h} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
								<h3 className="font-poppins text-[16px] font-semibold text-[#2D3748]">{item.h}</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">{item.b}</p>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline="Want this scoped to your business?"
					body="Free 30 minutes, no slides. We'll review your current setup against the Frameleads Growth System™ and hand you the three highest-leverage moves to take next — even if you don't engage us."
					primaryHref="/free-marketing-audit?source=services-catalog&cta=services-catalog-bottom"
					primaryLabel="Book a free 30-min audit"
				/>

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard person={DEFAULT_AUTHOR} name={DEFAULT_AUTHOR.name} role={DEFAULT_AUTHOR.role} bio={DEFAULT_AUTHOR.bio} linkedin={DEFAULT_AUTHOR.linkedin} updatedAt={today} />
			</main>
		</>
	);
}
