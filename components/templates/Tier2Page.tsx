import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { MethodologyCard } from "./MethodologyCard";
import { FAQBlock } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { SchemaInjector } from "./SchemaInjector";
import type { SubServiceEntry } from "@/lib/data/sub-services";
import { getSubServicesForParent } from "@/lib/data/sub-services";

type Props = {
	entry: SubServiceEntry;
	parentLabel: string;
	url: string;
};

export function Tier2Page({ entry, parentLabel, url }: Props) {
	const today = new Date().toISOString().slice(0, 10);

	const siblings = getSubServicesForParent(entry.parent_service)
		.filter((s) => s.id !== entry.id)
		.slice(0, 6);
	const siblingLinks: CellLink[] = siblings.map((s) => ({
		href: `/${s.parent_service}/${s.id}`,
		label: s.label,
	}));

	const tldr = [
		`${entry.label} retainers ${entry.cost_band}.`,
		`Indian SMB engagements typically 3-9 months to compounding outcomes.`,
		`Free 30-min audit before any commitment — no slides, just an honest read.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: entry.label,
			provider: { "@type": "Organization", name: "Frameleads", url: "https://frameleads.com" },
			areaServed: { "@type": "Country", name: "India" },
			url,
			description: entry.direct_answer,
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: entry.h1,
			mainEntityOfPage: url,
			datePublished: today,
			dateModified: today,
			author: { "@type": "Organization", name: "Frameleads", url: "https://frameleads.com" },
			publisher: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
				logo: { "@type": "ImageObject", url: "https://frameleads.com/favicon.png" },
			},
		},
		{
			"@context": "https://schema.org",
			"@type": "HowTo",
			name: `How Frameleads runs ${entry.label.toLowerCase()}`,
			step: entry.process_steps.map((s, idx) => ({
				"@type": "HowToStep",
				position: idx + 1,
				name: s.name,
				text: s.text,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: entry.faqs.map((f) => ({
				"@type": "Question",
				name: f.question,
				acceptedAnswer: { "@type": "Answer", text: f.answer },
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://frameleads.com" },
				{ "@type": "ListItem", position: 2, name: parentLabel, item: `https://frameleads.com/${entry.parent_service}` },
				{ "@type": "ListItem", position: 3, name: entry.label, item: url },
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".direct-answer", ".tldr", ".faq-answer"],
			},
		},
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<Breadcrumb
							items={[
								{ href: "/", label: "Home" },
								{ href: `/${entry.parent_service}`, label: parentLabel },
								{ label: entry.label },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Sub-service · Tier 2
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{entry.h1}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{entry.direct_answer}
						</p>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						What's included
					</div>
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Standard {entry.label.toLowerCase()} scope
					</h2>
					<ul className="mt-4 space-y-2 text-[15px] text-[#2D3748]/90">
						{entry.deliverables.map((d) => (
							<li key={d} className="flex gap-2">
								<span aria-hidden className="text-[#FF6B35] font-semibold">▸</span>
								<span>{d}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Process
					</div>
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						How we run {entry.label.toLowerCase()}
					</h2>
					<ol className="mt-6 space-y-3">
						{entry.process_steps.map((s, idx) => (
							<li
								key={s.name}
								className="relative flex gap-4 rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)]"
							>
								<span
									aria-hidden
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB088] font-poppins text-[13px] font-bold text-white shadow-[0_3px_10px_rgba(255,107,53,0.30)]"
								>
									{idx + 1}
								</span>
								<div className="min-w-0 flex-1">
									<h3 className="font-poppins text-[16px] sm:text-[17px] font-semibold text-[#2D3748]">
										{s.name}
									</h3>
									<p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-[#2D3748]/85">
										{s.text}
									</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				<MethodologyCard contextLabel={entry.label} />

				<section className="mx-auto max-w-3xl px-6 py-8">
					<div className="rounded-2xl border border-[#FFE4D6] bg-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-2">
							Cost band
						</div>
						<div className="font-poppins text-[22px] font-bold text-[#2D3748]">{entry.cost_band}</div>
						<p className="mt-2 text-[14px] text-[#5A5A5A]">
							Sized to scope + stage. Get an exact quote in a free 30-min audit.
						</p>
					</div>
				</section>

				<FAQBlock items={entry.faqs} />

				<RelatedCells heading={`Other ${parentLabel} sub-services`} links={siblingLinks} />

				<TimestampStamp updatedAt={today} reviewedBy="Frameleads Editorial Team" />

				<CTABlock
					variant="audit"
					headline={`Run ${entry.label.toLowerCase()} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${entry.label.toLowerCase()} setup against the benchmarks above and tell you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?service=${entry.parent_service}&sub=${entry.id}`}
					primaryLabel="Get a free 30-min audit"
				/>

				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads runs ${entry.label.toLowerCase()} engagements for Indian SMBs across D2C, B2B SaaS, and services. Numbers cited come from live client data refreshed quarterly.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={today}
				/>

				<InboundLinksHint count={siblingLinks.length} />
			</main>
		</>
	);
}
