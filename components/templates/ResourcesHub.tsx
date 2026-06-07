/**
 * ResourcesHub — single canonical layout shared by:
 *   /resources                        (master index)
 *   /resources/guides                 (guides hub)
 *   /resources/glossary               (glossary hub)
 *   /resources/comparisons            (comparisons hub)
 *   /resources/calculators            (calculators hub)
 *   /resources/reports                (reports hub)
 *   /resources/questions              (question hubs index)
 *   /resources/playbooks              (playbook directory)
 *   /resources/benchmarks             (benchmark directory)
 *   /resources/templates              (templates / checklists directory)
 *
 * Renders: Hero + TLDR + group sections (categories) + featured items + CTAs.
 * Schema: CollectionPage + ItemList + BreadcrumbList + WebPage(speakable).
 */

import Link from "next/link";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { TLDRBlock } from "./TLDRBlock";
import { CTABlock } from "./CTABlock";
import { TimestampStamp } from "./TimestampStamp";
import { AuthorCard } from "./AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const SITE_URL = "https://frameleads.com";
const PUBLISHED_AT = "2025-12-01";

export type ResourceCategory = {
	label: string;
	href: string;
	count?: number;
	description: string;
	icon?: string;
};

export type ResourceGroup = {
	heading: string;
	description?: string;
	items: ResourceCategory[];
};

type Props = {
	/** Page slug like "resources", "resources/guides", etc. */
	slug: string;
	/** H1 + breadcrumb leaf */
	title: string;
	dek: string;
	tldr: string[];
	/** Grouped resource categories. Each group renders as a section. */
	groups: ResourceGroup[];
	/** Breadcrumb above the leaf — typically ["Home"] for /resources, ["Home","Resources"] for /resources/* */
	breadcrumbAncestors: { label: string; href: string }[];
};

function buildSchema(slug: string, title: string, dek: string, groups: ResourceGroup[], dateModified: string) {
	const url = `${SITE_URL}/${slug}`;
	const allItems = groups.flatMap((g) => g.items);
	return [
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: title,
			description: dek,
			url,
			datePublished: PUBLISHED_AT,
			dateModified,
			inLanguage: "en-IN",
			isPartOf: { "@id": `${SITE_URL}#website` },
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
			},
			publisher: { "@id": `${SITE_URL}#organization` },
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: `${title} — items`,
			numberOfItems: allItems.length,
			itemListElement: allItems.slice(0, 100).map((item, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: item.label,
				url: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				...(slug.includes("/")
					? [
							{ "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
							{ "@type": "ListItem", position: 3, name: title, item: url },
						]
					: [{ "@type": "ListItem", position: 2, name: title, item: url }]),
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".tldr", ".direct-answer"],
			},
		},
	];
}

export function ResourcesHub({ slug, title, dek, tldr, groups, breadcrumbAncestors }: Props) {
	const dateModified = new Date().toISOString().slice(0, 10);
	const schema = buildSchema(slug, title, dek, groups, dateModified);

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main id="main">
				{/* ─── Hero ─── */}
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[...breadcrumbAncestors, { label: title }]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Resources Library
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							{dek}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link
								href={`/free-marketing-audit?source=resources&cta=resources-${slug.replace(/\//g, "-")}-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free 30-min audit
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

				{/* ─── Groups ─── */}
				{groups.map((group, gIdx) => (
					<section
						key={gIdx}
						aria-labelledby={`group-${gIdx}`}
						className="mx-auto max-w-5xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							{group.heading}
						</div>
						<h2
							id={`group-${gIdx}`}
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							{group.heading}{group.items.length > 0 && (
								<span className="ml-2 inline-block rounded-full bg-[#FFE4D6]/60 px-2 py-0.5 text-[12px] font-semibold text-[#5A5A5A] align-middle">
									{group.items.length} {group.items.length === 1 ? "item" : "items"}
								</span>
							)}
						</h2>
						{group.description && (
							<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
								{group.description}
							</p>
						)}
						<ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{group.items.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="block h-full rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)] transition-colors hover:border-[#FF6B35]/40"
									>
										<div className="flex items-baseline justify-between gap-2">
											<h3 className="font-poppins text-[15px] font-semibold text-[#2D3748]">
												{item.label}
											</h3>
											{item.count != null && (
												<span className="shrink-0 rounded-full bg-[#FFE4D6]/60 px-2 py-0.5 text-[11px] font-semibold text-[#5A5A5A]">
													{item.count}
												</span>
											)}
										</div>
										<p className="mt-2 text-[13px] leading-relaxed text-[#5A5A5A]">
											{item.description}
										</p>
										<div className="mt-3 text-[12px] font-semibold text-[#FF6B35]">
											Explore <span aria-hidden>→</span>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</section>
				))}

				<CTABlock
					variant="audit"
					headline="Want to apply this to your business?"
					body="Reading is the easy part. The audit is where the work is. 30 minutes, no slides, three concrete moves to take next — even if you don't engage us."
					primaryHref={`/free-marketing-audit?source=resources&cta=resources-${slug.replace(/\//g, "-")}-bottom`}
					primaryLabel="Book a free 30-min audit"
				/>

				<TimestampStamp updatedAt={dateModified} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={DEFAULT_AUTHOR.bio}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
			</main>
			<Footer />
		</>
	);
}
