import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { industries, services, getServicesForIndustry, getGeosForIndustry } from "@/lib/data";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/industries`;

export const metadata: Metadata = {
	title:
		"Industries — every vertical Frameleads runs marketing for | Frameleads",
	description:
		"31 industry verticals — from D2C to B2B SaaS, real estate to fintech. Each pillar has channel benchmarks, primary services, and city-level coverage across India + global priority markets.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Industries — Frameleads",
		description:
			"31 industry verticals with channel benchmarks, primary services, and city-level coverage.",
		url: URL,
		type: "website",
	},
};

function industryHref(id: string): string {
	return `/${id}-marketing`;
}

const SERVICE_LABEL_MAP: Record<string, string> = Object.fromEntries(
	services.map((s) => [s.id, s.label]),
);

function serviceLabel(id: string): string {
	return SERVICE_LABEL_MAP[id] ?? id;
}

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Industries — Frameleads",
		description:
			"31 industry verticals Frameleads runs marketing for, with channel benchmarks and city-level coverage.",
		url: URL,
		hasPart: industries.map((i) => ({
			"@type": "Service",
			name: `${i.label} marketing`,
			url: `${SITE_URL}${industryHref(i.id)}`,
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Industries", item: URL },
		],
	},
];

export default function IndustriesPage() {
	const tierA = industries.filter((i) => i.tier === "A");
	const tierB = industries.filter((i) => i.tier === "B");

	const renderCard = (i: (typeof industries)[number]) => {
		const geos = getGeosForIndustry(i.id).slice(0, 4);
		const svcs = getServicesForIndustry(i.id).slice(0, 4);
		const pillarHref = industryHref(i.id);
		return (
			<li key={i.id}>
				<article
					aria-labelledby={`ind-${i.id}-title`}
					className="group h-full rounded-2xl border border-[#FFE4D6] bg-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(45,55,72,0.08)]"
				>
					<div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
						{i.tier === "A" ? "Tier A · priority" : "Tier B"}
					</div>
					<h2
						id={`ind-${i.id}-title`}
						className="mt-2 font-poppins text-[20px] font-semibold leading-snug tracking-tight text-[#2D3748]"
					>
						<Link
							href={pillarHref}
							className="hover:text-[#FF6B35] focus-visible:outline-none focus-visible:underline focus-visible:decoration-[#FF6B35] focus-visible:decoration-2 focus-visible:underline-offset-4"
						>
							{i.label} marketing
						</Link>
					</h2>
					<p className="mt-2 text-[14px] leading-relaxed text-[#5A5A5A]">{i.tagline}</p>
					<dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
						<div>
							<dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A5A5A]">
								Avg CAC
							</dt>
							<dd className="text-[#2D3748]">{i.avgCacInr} ₹</dd>
						</div>
						<div>
							<dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A5A5A]">
								Avg CPC
							</dt>
							<dd className="text-[#2D3748]">{i.avgCpcInr} ₹</dd>
						</div>
					</dl>
					{svcs.length > 0 ? (
						<div className="mt-4">
							<div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A5A5A]">
								Services we run
							</div>
							<ul className="mt-1 flex flex-wrap gap-1.5">
								{svcs.map((s) => (
									<li key={s.id}>
										<Link
											href={`/${s.id}-for-${i.id}`}
											className="inline-flex rounded-full border border-[#FFE4D6] bg-[#FDF8F5] px-2.5 py-1 text-[11px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
										>
											{s.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					) : null}
					{geos.length > 0 ? (
						<div className="mt-3">
							<div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A5A5A]">
								Top cities
							</div>
							<ul className="mt-1 flex flex-wrap gap-1.5">
								{geos.map((g) => (
									<li key={g.id}>
										<Link
											href={`/${i.id}-marketing-in-${g.id}`}
											className="inline-flex rounded-full border border-[#FFE4D6] bg-white px-2.5 py-1 text-[11px] text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
										>
											{g.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					) : null}
					<div className="mt-5">
						<Link
							href={pillarHref}
							className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#FF6B35] hover:underline focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4"
							aria-label={`Open ${i.label} marketing pillar`}
						>
							Open pillar
							<span aria-hidden>→</span>
						</Link>
					</div>
				</article>
			</li>
		);
	};

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
						<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							{industries.length} industry verticals
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Industries we run marketing for
						</h1>
						<p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Every vertical has its own unit-economics envelope, regulatory norms, and channel mix. Below: {industries.length} industries Frameleads operates in, ranked Tier A (priority) and Tier B (where we have category depth). Each links to a full pillar page with services, cities, and benchmarks.
						</p>
					</div>
				</header>

				<section
					aria-labelledby="tier-a-heading"
					className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
				>
					<h2
						id="tier-a-heading"
						className="font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Tier A · priority verticals
					</h2>
					<p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-[#5A5A5A]">
						Industries where Frameleads has the deepest portfolio, the tightest unit-economics benchmarks, and the most cross-city + cross-service coverage.
					</p>
					<ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tierA.map(renderCard)}</ul>
				</section>

				<section
					aria-labelledby="tier-b-heading"
					className="mx-auto max-w-6xl border-t border-[#FFE4D6]/60 px-4 py-12 sm:px-6 lg:px-8"
				>
					<h2
						id="tier-b-heading"
						className="font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
					>
						Tier B verticals
					</h2>
					<p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-[#5A5A5A]">
						Categories where Frameleads has live engagements + documented playbooks but a smaller sample than Tier A.
					</p>
					<ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tierB.map(renderCard)}</ul>
				</section>

				<section className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-4 py-12 sm:px-6 lg:px-8">
					<h2 className="font-poppins text-[22px] font-bold text-[#2D3748]">
						Not seeing your category?
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						If your vertical isn't listed but you operate in India or one of our priority global markets, we likely have adjacent portfolio depth. {" "}
						<Link
							href="/free-marketing-audit?cta=industries-hub"
							className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
						>
							Book a free 30-min audit
						</Link>{" "}
						and we'll tell you honestly whether we're the right fit.
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
}
