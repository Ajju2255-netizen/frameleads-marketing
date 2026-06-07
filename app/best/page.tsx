import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CTABlock } from "@/components/templates/CTABlock";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { questions } from "@/lib/data/questions";

export const revalidate = 86400;
const URL = "https://frameleads.com/best";

export const metadata: Metadata = {
	title: "Best-of Guides — Top Tools, Channels, and Strategies for Operators | Frameleads",
	description:
		"Best-of guides ranking tools, channels, and strategies — with India benchmarks, scorecards, and operator-grade nuance.",
	alternates: { canonical: URL },
};

const items = questions.filter((q) => q.kind === "best");

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Frameleads Best-of Guides",
		url: URL,
		hasPart: items.map((q) => ({
			"@type": "Article",
			name: q.title,
			url: `${URL}/${q.slug}`,
			description: q.intent,
		})),
	},
];

export default function BestHubPage() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Best" }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Best · Tier 6e
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Best-of guides
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Top tools, channels, agencies, and strategies — ranked, scored, and explained. Each guide ships with criteria + scorecard + India benchmarks.
						</p>
						<p className="mt-2 text-sm text-[#5A5A5A]/80">{items.length} guides live · refreshed quarterly.</p>
					</div>
				</header>

				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						{items.map((q) => (
							<li key={q.slug}>
								<Link href={`/best/${q.slug}`} className="group block h-full rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6B35]/40 hover:bg-[#FFF7F2]/60 hover:shadow-md">
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">{q.title}</div>
									<p className="mt-2 text-[13.5px] text-[#2D3748]/80">{q.intent}</p>
									<div className="mt-3 text-[12px] text-[#5A5A5A]">For {q.audience}</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline="Picking among options?"
					body="A 30-min audit gives a sharper read against your specific stage and unit economics."
					primaryHref="/free-marketing-audit"
					primaryLabel="Book a free 30-min audit"
				/>
			</main>
			<Footer />
		</>
	);
}
