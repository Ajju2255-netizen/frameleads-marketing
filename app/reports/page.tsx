import type { Metadata } from "next";
import Link from "next/link";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/reports`;

export const metadata: Metadata = {
	title:
		"Reports — original Frameleads research on Indian marketing benchmarks | Frameleads",
	description:
		"Original Frameleads data studies and benchmark reports on Indian D2C, SaaS, real-estate, healthcare, fintech, and edtech marketing. Methodology documented.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Reports — Frameleads",
		description:
			"Original Frameleads data studies and benchmark reports.",
		url: URL,
		type: "website",
	},
};

const REPORTS = [
	{
		slug: "cac-benchmarks-india-2026",
		title: "CAC Benchmarks for Indian Brands — 2026",
		summary:
			"25th-75th percentile CAC bands across 12 Indian industries, by stage. Drawn from 247 Frameleads engagements. CC-BY licensed for citation.",
		datePublished: "2026-04-15",
		dateModified: "2026-06-07",
		tag: "Benchmark study",
	},
];

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Frameleads Reports",
		description:
			"Original Frameleads data studies and benchmark reports on Indian marketing economics.",
		url: URL,
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Reports", item: URL },
		],
	},
];

export default function ReportsPage() {
	return (
		<>
			<SchemaInjector schema={SCHEMA} />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_280px_at_75%_-30%,rgba(255,107,53,0.18),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Reports" }]} />
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Original research
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Reports
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Original Frameleads data studies on Indian marketing economics. All reports document methodology, sample size, and limitations. CC-BY licensed for citation.
						</p>
					</div>
				</header>

				<section className="mx-auto max-w-3xl px-6 py-10">
					<ul className="space-y-4">
						{REPORTS.map((r) => (
							<li key={r.slug}>
								<Link
									href={`/reports/${r.slug}`}
									className="group block rounded-2xl border border-[#FFE4D6] bg-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(45,55,72,0.08)]"
								>
									<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
										{r.tag}
									</div>
									<h2 className="mt-2 font-poppins text-[22px] font-semibold leading-snug tracking-tight text-[#2D3748] group-hover:text-[#FF6B35]">
										{r.title}
									</h2>
									<p className="mt-3 text-[14.5px] leading-relaxed text-[#5A5A5A]">
										{r.summary}
									</p>
									<div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#5A5A5A]">
										<time dateTime={r.datePublished}>Published {r.datePublished}</time>
										<span aria-hidden className="text-[#FFE4D6]">·</span>
										<time dateTime={r.dateModified}>Updated {r.dateModified}</time>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}
