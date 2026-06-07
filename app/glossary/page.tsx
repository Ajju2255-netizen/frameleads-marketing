import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CTABlock } from "@/components/templates/CTABlock";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { glossary } from "@/lib/data/glossary";

export const revalidate = 86400;

const URL = "https://frameleads.com/glossary";

export const metadata: Metadata = {
	title:
		"Marketing Glossary — 200 Terms Every Operator Should Know | Frameleads",
	description:
		"The Frameleads Marketing Glossary — definitions, formulas, India benchmarks, and worked examples for every term we use on the site.",
	alternates: { canonical: URL },
};

type ManualEntry = {
	id: string;
	term: string;
	expansion: string;
	blurb: string;
};

// Hand-curated entries that have their own dedicated static pages.
const MANUAL_ENTRIES: ManualEntry[] = [
	{
		id: "cac",
		term: "CAC",
		expansion: "Customer Acquisition Cost",
		blurb:
			"Total marketing + sales spend per new paying customer. Pair with LTV.",
	},
	{
		id: "roas",
		term: "ROAS",
		expansion: "Return on Ad Spend",
		blurb:
			"Revenue per rupee of ad spend. Channel reports inflate; track blended.",
	},
];

const allEntries = [
	...MANUAL_ENTRIES,
	...glossary.map((g) => ({
		id: g.id,
		term: g.term,
		expansion: g.expansion,
		blurb: g.tldr[0] ?? g.definition.slice(0, 110) + "…",
	})),
];

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "DefinedTermSet",
		name: "Frameleads Marketing Glossary",
		url: URL,
		hasDefinedTerm: allEntries.map((t) => ({
			"@type": "DefinedTerm",
			name: t.term,
			alternateName: t.expansion,
			url: `${URL}/${t.id}`,
			description: t.blurb,
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://frameleads.com",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Glossary",
				item: URL,
			},
		],
	},
];

export default function GlossaryIndexPage() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<Breadcrumb
							items={[
								{ href: "/", label: "Home" },
								{ label: "Glossary" },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Glossary · Tier 8
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Marketing glossary
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Definitions, formulas, and India-specific benchmarks for every
							marketing term we use on the site. Each entry is short, sourced,
							and structured for AI-engine citation.
						</p>
						<p className="mt-2 text-sm text-[#5A5A5A]/80">
							{allEntries.length} entries live · refreshed quarterly.
						</p>
					</div>
				</header>

				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						{allEntries.map((t) => (
							<li key={t.id}>
								<Link
									href={`/glossary/${t.id}`}
									className="group block h-full rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6B35]/40 hover:bg-[#FFF7F2]/60 hover:shadow-md"
								>
									<div className="flex items-baseline justify-between gap-2">
										<span className="font-poppins text-lg font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">
											{t.term}
										</span>
										<span className="text-[11px] uppercase tracking-wider text-[#FF6B35]">
											{t.expansion}
										</span>
									</div>
									<p className="mt-2 text-[13.5px] text-[#2D3748]/80 leading-relaxed">{t.blurb}</p>
									<span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FF6B35]">
										Read definition <span aria-hidden>→</span>
									</span>
								</Link>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline="Bridging the gap between glossary and growth?"
					body="Definitions are step one. The Frameleads team applies these metrics on real D2C, SaaS, and SMB engagements. Bring your numbers — we'll show you which lever moves the dial first."
					primaryHref="/free-marketing-audit"
					primaryLabel="Get a free marketing audit"
				/>
			</main>
			<Footer />
		</>
	);
}
