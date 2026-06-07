import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CTABlock } from "@/components/templates/CTABlock";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { comparisons } from "@/lib/data/comparisons";

export const revalidate = 86400;

const URL = "https://frameleads.com/vs";

export const metadata: Metadata = {
	title: "Marketing Decision Comparisons — SEO vs PPC, Meta vs Google, In-house vs Agency | Frameleads",
	description:
		"Operator-grade decision guides for marketing channel and team-shape choices. Each comparison ships with a scorecard, decision flow, and a hybrid case.",
	alternates: { canonical: URL },
};

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Frameleads Marketing Comparisons",
		url: URL,
		hasPart: comparisons.map((c) => ({
			"@type": "Article",
			name: `${c.a.label} vs ${c.b.label}`,
			url: `${URL}/${c.slug}`,
			description: c.intent,
		})),
	},
];

export default function ComparisonsIndexPage() {
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
								{ label: "Comparisons" },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Compare · Tier 9
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Marketing decision comparisons
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							When you're choosing between two channels, two team shapes, or
							two strategies — operator-grade scorecards, decision flows, and
							the hybrid case for each.
						</p>
						<p className="mt-2 text-sm text-[#5A5A5A]/80">
							{comparisons.length} guides live · refreshed quarterly.
						</p>
					</div>
				</header>
				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						{comparisons.map((c) => (
							<li key={c.slug}>
								<Link
									href={`/vs/${c.slug}`}
									className="group block h-full rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6B35]/40 hover:bg-[#FFF7F2]/60 hover:shadow-md"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">
										{c.a.label} vs {c.b.label}
									</div>
									<div className="mt-1 text-[12px] uppercase tracking-wider text-[#FF6B35]">
										For {c.audienceLabel}
									</div>
									<p className="mt-2 text-[13.5px] text-[#2D3748]/80 leading-relaxed">{c.intent}</p>
									<span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FF6B35]">
										Read scorecard <span aria-hidden>→</span>
									</span>
								</Link>
							</li>
						))}
					</ul>
				</section>
				<CTABlock
					variant="audit"
					headline="Decision still unclear after the read?"
					body="A 30-minute audit will give you a sharper read against your specific stage, ICP, and unit economics. No pitch — even if we don't engage."
					primaryHref="/free-marketing-audit"
					primaryLabel="Book a free 30-min audit"
				/>
			</main>
			<Footer />
		</>
	);
}
