import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import {
	geosIndia,
	geosGlobal,
	services,
	industries,
	getIndustry,
	type Geo,
} from "@/lib/data";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/locations`;

export const metadata: Metadata = {
	title:
		"Locations — every city Frameleads runs marketing in | Frameleads",
	description:
		"84 Indian cities + 35+ global cities. Each location has dedicated Service × City and Industry × City pages with local benchmarks, channel mix, and regulatory context.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Locations — Frameleads",
		description:
			"84 Indian cities + 35+ global cities with localized marketing playbooks.",
		url: URL,
		type: "website",
	},
};

const COUNTRY_PAGE_BY_COUNTRY: Record<string, string> = {
	UAE: "/digital-marketing-in-uae",
	"Saudi Arabia": "/digital-marketing-in-saudi-arabia",
	Singapore: "/digital-marketing-in-singapore",
	UK: "/digital-marketing-in-unitedkingdom",
	USA: "/digital-marketing-in-unitedstates",
	Canada: "/digital-marketing-in-canada",
	Australia: "/digital-marketing-in-australia",
	Brazil: "/digital-marketing-in-brazil",
	China: "/digital-marketing-in-china",
	France: "/digital-marketing-in-france",
	Germany: "/digital-marketing-in-germany",
};

const FEATURED_SERVICES = [
	"seo-services",
	"meta-ads",
	"google-ads",
	"performance-marketing",
];

function serviceLabel(id: string): string {
	return services.find((s) => s.id === id)?.label ?? id;
}

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Locations — Frameleads",
		description:
			"84 Indian cities + 35+ global cities Frameleads runs marketing programs in.",
		url: URL,
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Locations", item: URL },
		],
	},
];

function CityCard({ geo }: { geo: Geo }) {
	const country = geo.country ?? "India";
	const countryHref = COUNTRY_PAGE_BY_COUNTRY[country];
	const topIndustries = (geo.topIndustries || []).slice(0, 3);
	const topServices = FEATURED_SERVICES;
	return (
		<li>
			<article
				aria-labelledby={`geo-${geo.id}-title`}
				className="group h-full rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(45,55,72,0.08)]"
			>
				<div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
					{country}
					{geo.tier ? (
						<>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<span>Tier {geo.tier}</span>
						</>
					) : null}
				</div>
				<h3
					id={`geo-${geo.id}-title`}
					className="mt-2 font-poppins text-[18px] font-semibold tracking-tight text-[#2D3748]"
				>
					{geo.name}
				</h3>
				{geo.state ? (
					<p className="text-[12px] text-[#5A5A5A]">
						{geo.state}
						{geo.population ? ` · ${geo.population}` : ""}
					</p>
				) : geo.population ? (
					<p className="text-[12px] text-[#5A5A5A]">{geo.population}</p>
				) : null}

				<div className="mt-4">
					<div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A5A5A]">
						Services in {geo.name}
					</div>
					<ul className="mt-1 flex flex-wrap gap-1.5">
						{topServices.map((sid) => (
							<li key={sid}>
								<Link
									href={`/${sid}-in-${geo.id}`}
									className="inline-flex rounded-full border border-[#FFE4D6] bg-[#FDF8F5] px-2.5 py-1 text-[11px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
								>
									{serviceLabel(sid)}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{topIndustries.length > 0 ? (
					<div className="mt-3">
						<div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A5A5A]">
							Industries in {geo.name}
						</div>
						<ul className="mt-1 flex flex-wrap gap-1.5">
							{topIndustries.map((iid) => {
								const ind = getIndustry(iid);
								if (!ind) return null;
								return (
									<li key={iid}>
										<Link
											href={`/${iid}-marketing-in-${geo.id}`}
											className="inline-flex rounded-full border border-[#FFE4D6] bg-white px-2.5 py-1 text-[11px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
										>
											{ind.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				) : null}

				{countryHref ? (
					<div className="mt-4">
						<Link
							href={countryHref}
							className="text-[12px] font-semibold text-[#FF6B35] hover:underline focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4"
						>
							All {country} marketing →
						</Link>
					</div>
				) : null}
			</article>
		</li>
	);
}

function CitySection({
	id,
	title,
	subtitle,
	cities,
}: {
	id: string;
	title: string;
	subtitle: string;
	cities: Geo[];
}) {
	if (cities.length === 0) return null;
	return (
		<section
			id={id}
			aria-labelledby={`${id}-heading`}
			className="mx-auto max-w-6xl scroll-mt-24 border-t border-[#FFE4D6]/60 px-4 py-12 sm:px-6 lg:px-8"
		>
			<h2
				id={`${id}-heading`}
				className="font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
			>
				{title}
				<span className="ml-2 text-[16px] font-normal text-[#5A5A5A]">
					({cities.length})
				</span>
			</h2>
			<p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-[#5A5A5A]">{subtitle}</p>
			<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{cities.map((g) => (
					<CityCard key={g.id} geo={g} />
				))}
			</ul>
		</section>
	);
}

export default function LocationsPage() {
	const indiaT1 = geosIndia.filter((g) => g.tier === 1);
	const indiaT2 = geosIndia.filter((g) => g.tier === 2);
	const indiaT3 = geosIndia.filter((g) => g.tier === 3);
	const globalT1 = geosGlobal.filter((g) => g.tier === 1);
	const globalT2 = geosGlobal.filter((g) => g.tier === 2);

	const totalCities = geosIndia.length + geosGlobal.length;
	const totalIndia = geosIndia.length;

	return (
		<>
			<SchemaInjector schema={SCHEMA} />
			<Navbar />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_280px_at_75%_-30%,rgba(255,107,53,0.16),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
						<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{totalCities} cities · {totalIndia} in India
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Locations we run marketing in
						</h1>
						<p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Every city links to {services.length} service-specific pages and {industries.length} industry-specific pages — calibrated to local CPC bands, regulatory context, and channel mix. {totalIndia} Indian cities + {geosGlobal.length} global priority markets.
						</p>
						<nav aria-label="Jump to region" className="mt-6 flex flex-wrap gap-2">
							{indiaT1.length > 0 ? (
								<a
									href="#india-tier-1"
									className="rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[12px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
								>
									India tier-1 ({indiaT1.length})
								</a>
							) : null}
							{indiaT2.length > 0 ? (
								<a
									href="#india-tier-2"
									className="rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[12px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
								>
									India tier-2 ({indiaT2.length})
								</a>
							) : null}
							{indiaT3.length > 0 ? (
								<a
									href="#india-tier-3"
									className="rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[12px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
								>
									India tier-3 ({indiaT3.length})
								</a>
							) : null}
							{globalT1.length > 0 ? (
								<a
									href="#global-tier-1"
									className="rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[12px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
								>
									Global tier-1 ({globalT1.length})
								</a>
							) : null}
							{globalT2.length > 0 ? (
								<a
									href="#global-tier-2"
									className="rounded-full border border-[#FFE4D6] bg-white px-3 py-1.5 text-[12px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
								>
									Global tier-2 ({globalT2.length})
								</a>
							) : null}
						</nav>
					</div>
				</header>

				<CitySection
					id="india-tier-1"
					title="India · tier 1"
					subtitle="The metros that anchor most Frameleads engagements. Highest population, deepest competitive intensity, broadest service coverage."
					cities={indiaT1}
				/>
				<CitySection
					id="india-tier-2"
					title="India · tier 2"
					subtitle="High-growth Indian cities with documented unit-economics for D2C, real estate, healthcare, edtech, and B2B SaaS."
					cities={indiaT2}
				/>
				<CitySection
					id="india-tier-3"
					title="India · tier 3"
					subtitle="Emerging Indian markets with rising digital ad spend."
					cities={indiaT3}
				/>
				<CitySection
					id="global-tier-1"
					title="Global · tier 1"
					subtitle="Priority international markets for Indian-founder global brands + cross-border D2C/SaaS engagements."
					cities={globalT1}
				/>
				<CitySection
					id="global-tier-2"
					title="Global · tier 2"
					subtitle="Secondary global markets covered through dedicated Service × City pages on first crawl."
					cities={globalT2}
				/>

				<section className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-4 py-12 sm:px-6 lg:px-8">
					<h2 className="font-poppins text-[22px] font-bold text-[#2D3748]">
						Not seeing your city?
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						Frameleads operates remote-first — we run engagements outside listed cities regularly. {" "}
						<Link
							href="/free-marketing-audit?cta=locations-hub"
							className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
						>
							Book a free 30-min audit
						</Link>{" "}
						and we'll calibrate to your specific market.
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
}
