import type { Metadata } from "next";
import Link from "next/link";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/editorial-policy`;
const PUBLISHED_AT = "2025-12-01";
const DATE_MODIFIED = "2026-06-07";

export const metadata: Metadata = {
	title: "Editorial Policy — how Frameleads researches, sources, and refreshes content | Frameleads",
	description:
		"How Frameleads' editorial team produces and maintains content: research methodology, data sourcing, refresh cadence, fact-checking, and conflict-of-interest disclosure.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Editorial Policy | Frameleads",
		description:
			"Research methodology, data sourcing, refresh cadence, fact-checking, and disclosure norms for Frameleads content.",
		url: URL,
		type: "article",
		publishedTime: PUBLISHED_AT,
		modifiedTime: DATE_MODIFIED,
		authors: [DEFAULT_AUTHOR.name],
	},
};

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Editorial Policy — Frameleads",
		description:
			"Research methodology, data sourcing, refresh cadence, fact-checking, and conflict-of-interest disclosure for Frameleads content.",
		url: URL,
		datePublished: PUBLISHED_AT,
		dateModified: DATE_MODIFIED,
		inLanguage: "en-IN",
		author: {
			"@type": "Person",
			"@id": `${DEFAULT_AUTHOR.url}#person`,
			name: DEFAULT_AUTHOR.name,
			url: DEFAULT_AUTHOR.url,
		},
		publisher: { "@id": `${SITE_URL}#organization` },
		mainEntityOfPage: { "@type": "WebPage", "@id": URL },
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Editorial Policy", item: URL },
		],
	},
];

export default function EditorialPolicyPage() {
	return (
		<>
			<SchemaInjector schema={SCHEMA} />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_280px_at_75%_-30%,rgba(255,107,53,0.16),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "Editorial Policy" },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Trust · E-E-A-T
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							Editorial Policy
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							How Frameleads researches, sources, and refreshes the content on this site. Published openly so prospects, AI engines, and search quality raters can verify our process.
						</p>
					</div>
				</header>

				<article className="mx-auto max-w-3xl px-6 py-10">
					<h2 className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						Who writes here
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						All editorial content on frameleads.com is written or reviewed by the Frameleads editorial team, with{" "}
						<Link
							href="/about"
							className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
						>
							Frameleads editorial team
						</Link>{" "}
						 — senior performance and organic operators with 10+ years running SEO, paid acquisition, and CRO programs. We do not use ghost-writers, content mills, or generic AI-generated content. Where AI assists a draft (e.g. for outlines, fact-checks against our internal data, copy editing), the senior editor reviews every paragraph and signs off before publish.
					</p>

					<h2 className="mt-12 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						How we research
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						Every benchmark, CPC band, CAC range, ROAS figure, or timeline cited on this site is sourced from one of three places:
					</p>
					<ol className="mt-3 list-decimal space-y-2.5 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
						<li>
							<strong>Live Frameleads client data</strong> — aggregated across 200+ engagements over five years. We never disclose individual client numbers; aggregated bands carry sample-size context where it materially changes confidence.
						</li>
						<li>
							<strong>Cited public sources</strong> — regulators (RBI, SEBI, IRDAI, RERA, NMC, MEITY DPDP), industry bodies (NASSCOM, IAMAI, IBEF, ASCI, CREDAI), and recognized analyst firms (Statista, Knight Frank, G2). Every page with cited numbers lists its sources in a Sources &amp; References block.
						</li>
						<li>
							<strong>Original Frameleads research</strong> — periodic data studies (see{" "}
							<Link
								href="/reports/cac-benchmarks-india-2026"
								className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
							>
								/reports
							</Link>
							) with documented methodology, sample size, and limitations.
						</li>
					</ol>

					<h2 className="mt-12 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						Refresh cadence
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						Editorial pages are reviewed quarterly against live client data. Pages where benchmarks have shifted by &gt; 10% are rewritten and re-dated. The "Last reviewed" timestamp at the bottom of each page reflects the most recent review — not just the original publish date. Pages that fail the quarterly review and can't be re-validated are removed from the index, not silently left to decay.
					</p>

					<h2 className="mt-12 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						Fact-checking and corrections
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						Before publish, every claim with a number, year, or named entity is checked against at least one of the source categories above. When we get something wrong and a reader, partner, or competitor flags it, the correction is made within five working days and the page is re-dated. We do not silently edit out errors — material corrections are noted at the bottom of the affected page.
					</p>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						To flag a factual issue, email{" "}
						<a
							href="mailto:editorial@frameleads.com"
							className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
						>
							editorial@frameleads.com
						</a>{" "}
						with the URL and the specific claim you're contesting.
					</p>

					<h2 className="mt-12 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						Conflict-of-interest disclosure
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						Frameleads is a paid services company. Most editorial content references Frameleads' own offerings, methodology (the{" "}
						<Link
							href="/frameleads-growth-system"
							className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
						>
							Frameleads Growth System™
						</Link>
						), or audit process. We disclose this openly:
					</p>
					<ul className="mt-3 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
						<li>
							<strong>We are not a neutral analyst firm.</strong> Our content is informed by the engagements we've run, which is a non-random sample of Indian + global marketing programs.
						</li>
						<li>
							<strong>We do not accept paid placement or sponsored content.</strong> Every URL on frameleads.com is published because we want it there, not because a vendor paid for it. We don't run affiliate programs that could bias coverage.
						</li>
						<li>
							<strong>When we recommend or compare tools</strong> (e.g. CAPI vs Pixel, Shopify vs WooCommerce), we name them based on the recommendation an in-house senior marketer would make to a friend. We will note if we have a commercial relationship with a vendor.
						</li>
						<li>
							<strong>The "best [X] agency in [Y]" posts on this site are buyer's frameworks, not paid rankings.</strong> We mention Frameleads explicitly where relevant, and we publish the same evaluation criteria a prospect should use to score us against competitors.
						</li>
					</ul>

					<h2 className="mt-12 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						AI assistance disclosure
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						We use AI tools (Claude, ChatGPT, GitHub Copilot) for outlining, fact-checking, copy-editing, code generation, and structured-data tagging. Every piece of editorial content carries a human author byline, and the senior editor reviews every paragraph before publish. We do not publish content that is purely AI-generated and unedited. Pages that exist primarily for AI-engine discovery (programmatic Tier cells, glossary entries) are still written against a documented Frameleads template — they're not random AI output.
					</p>

					<h2 className="mt-12 font-poppins text-[24px] sm:text-[28px] font-bold text-[#2D3748]">
						How to verify
					</h2>
					<p className="mt-3 text-[16px] leading-[1.75] text-[#2D3748]/90">
						Every editorial page on frameleads.com carries:
					</p>
					<ul className="mt-3 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#2D3748]/90">
						<li>A named author with LinkedIn verification.</li>
						<li>A "Last reviewed" timestamp (not just the original publish date).</li>
						<li>A Sources &amp; References block where external data is cited.</li>
						<li>JSON-LD Article schema with author, publisher, and dates.</li>
						<li>A canonical URL that doesn't change without a documented 301.</li>
					</ul>
					<p className="mt-4 text-[16px] leading-[1.75] text-[#2D3748]/90">
						If any page is missing these, we consider that a quality bug. Flag it to{" "}
						<a
							href="mailto:editorial@frameleads.com"
							className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
						>
							editorial@frameleads.com
						</a>
						.
					</p>
				</article>

				<TimestampStamp updatedAt={DATE_MODIFIED} reviewedBy={DEFAULT_AUTHOR.name} />
				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} A senior editor is the final reviewer on every editorial page before publish.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={DATE_MODIFIED}
				/>
			</main>
		</>
	);
}
