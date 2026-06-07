import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CTABlock } from "@/components/templates/CTABlock";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { questions } from "@/lib/data/questions";

export const revalidate = 86400;

const URL = "https://frameleads.com/how-to";

export const metadata: Metadata = {
	title: "How-to Guides — Operator Playbooks for Indian + Global Marketers | Frameleads",
	description:
		"Step-by-step how-to guides on D2C launches, CAC reduction, AIO/GEO, local SEO, Ramadan campaigns, and more. Each guide ships with named steps, FAQs, and India-specific benchmarks.",
	alternates: { canonical: URL },
};

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Frameleads How-to Guides",
		url: URL,
		hasPart: questions
			.filter((q) => q.kind === "how-to")
			.map((q) => ({
				"@type": "Article",
				name: q.title,
				url: `${URL}/${q.slug}`,
				description: q.intent,
			})),
	},
];

const howToItems = questions.filter((q) => q.kind === "how-to");

export default function HowToHubPage() {
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
					<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb
							items={[
								{ href: "/", label: "Home" },
								{ label: "How-to guides" },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span
								aria-hidden
								className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
							/>
							How-to guides
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Operator playbooks
						</h1>
						<p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Step-by-step guides built from live client engagements. Named
							steps, India-specific benchmarks, schema-tagged FAQs, and the
							Frameleads Growth System™ adapted to each scenario.
						</p>
					</div>
				</header>

				<section className="mx-auto max-w-3xl px-6 py-8">
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						{howToItems.map((q) => (
							<li key={q.slug}>
								<Link
									href={`/how-to/${q.slug}`}
									className="group block h-full rounded-2xl border border-[#FFE4D6] bg-white p-5 transition-colors hover:border-[#FF6B35]/40 hover:bg-[#FFF7F2]/60"
								>
									<div className="font-poppins text-[15px] font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">
										{q.title}
									</div>
									<div className="mt-1 text-[12px] uppercase tracking-wider text-[#FF6B35]">
										{q.kind}
									</div>
									<p className="mt-2 text-[13.5px] text-[#2D3748]/80">
										{q.intent}
									</p>
									<div className="mt-3 text-[12px] text-[#5A5A5A]">
										For {q.audience}
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline="Need this applied to your business?"
					body="The guides cover the system. The audit covers your specific stage, ICP, and unit economics. Free 30 minutes — no slides."
					primaryHref="/free-marketing-audit"
					primaryLabel="Book a free 30-min audit"
				/>
			</main>
			<Footer />
		</>
	);
}
