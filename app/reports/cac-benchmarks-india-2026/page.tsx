import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { TLDRBlock } from "@/components/templates/TLDRBlock";
import { FAQBlock } from "@/components/templates/FAQBlock";
import { ReferencesBlock } from "@/components/templates/ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { CTABlock } from "@/components/templates/CTABlock";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/reports/cac-benchmarks-india-2026`;
const PUBLISHED_AT = "2026-04-15";
const DATE_MODIFIED = "2026-06-07";

export const metadata: Metadata = {
	title:
		"CAC Benchmarks for Indian Brands 2026 — by industry, channel, and stage | Frameleads Data Study",
	description:
		"Original CAC benchmark study from 200+ Indian D2C, SaaS, real-estate, healthcare, fintech, and edtech engagements. CAC bands by industry × channel × stage. Methodology included.",
	alternates: { canonical: URL },
	openGraph: {
		title: "CAC Benchmarks for Indian Brands 2026 — Frameleads Data Study",
		description:
			"Original CAC benchmark study across 200+ engagements. CAC bands by industry × channel × stage.",
		url: URL,
		type: "article",
		publishedTime: PUBLISHED_AT,
		modifiedTime: DATE_MODIFIED,
		authors: [DEFAULT_AUTHOR.name],
	},
};

// ─────────────────────────────────────────────────────────────────────
// Benchmark tables — drawn from the data layer + industry priors
// ─────────────────────────────────────────────────────────────────────

const BY_INDUSTRY = [
	{ industry: "D2C (general)", pre: "₹250–₹600", scaling: "₹500–₹1,200", scaled: "₹900–₹2,200", notes: "AOV-bound; replenishment categories run lower." },
	{ industry: "Fashion D2C", pre: "₹200–₹500", scaling: "₹400–₹900", scaled: "₹800–₹1,500", notes: "Creative-led; influencer cohort improves CAC by 15-30%." },
	{ industry: "Beauty / Personal Care D2C", pre: "₹250–₹600", scaling: "₹500–₹1,100", scaled: "₹900–₹1,800", notes: "High repeat-purchase; LTV/CAC compounds fast post-month-6." },
	{ industry: "Jewelry D2C", pre: "₹1,500–₹4,000", scaling: "₹3,000–₹10,000", scaled: "₹8,000–₹20,000", notes: "High AOV justifies elevated CAC; trust signals matter disproportionately." },
	{ industry: "B2B SaaS (Series A–B)", pre: "₹15,000–₹40,000", scaling: "₹30,000–₹1,00,000", scaled: "₹75,000–₹3,00,000", notes: "LinkedIn + content-led; payback windows 12-24 months are normal." },
	{ industry: "Healthcare clinics", pre: "₹500–₹1,500", scaling: "₹1,000–₹3,000", scaled: "₹2,500–₹8,000", notes: "Local-search dominant; GBP + reviews shift CAC by 20-40%." },
	{ industry: "Healthtech", pre: "₹600–₹1,800", scaling: "₹1,200–₹3,500", scaled: "₹2,500–₹7,500", notes: "DPDP compliance shapes channel mix; telehealth adds attribution complexity." },
	{ industry: "Fintech", pre: "₹500–₹1,500", scaling: "₹1,200–₹3,500", scaled: "₹3,000–₹6,500", notes: "RBI/SEBI ad-copy compliance is non-negotiable; fraud-lead filtering eats 15-25% of raw leads." },
	{ industry: "Real Estate", pre: "₹4,000–₹10,000", scaling: "₹6,000–₹20,000", scaled: "₹15,000–₹35,000", notes: "Per qualified lead, not per booking. RERA-compliant ad copy mandatory." },
	{ industry: "Edtech / Online learning", pre: "₹400–₹1,200", scaling: "₹900–₹2,500", scaled: "₹2,000–₹3,500", notes: "Course-content magnet + free-trial conversion is the highest-leverage lever." },
	{ industry: "F&B / restaurants", pre: "₹150–₹500", scaling: "₹300–₹900", scaled: "₹600–₹2,500", notes: "Hyperlocal; aggregator dependency depresses paid efficiency." },
	{ industry: "Hospitality / hotels", pre: "₹300–₹1,000", scaling: "₹600–₹2,000", scaled: "₹1,500–₹2,500", notes: "OTA-led; brand-direct push reduces blended CAC by 25-40% over 12 months." },
];

const BY_CHANNEL = [
	{ channel: "Meta (Facebook + Instagram)", strength: "Highest signal velocity; creative-bottlenecked", cac: "Lowest for D2C, F&B, fashion. Higher for B2B." },
	{ channel: "Google Search", strength: "Best intent capture; brand-defense + bottom-funnel", cac: "Lowest for service businesses, lead-gen, B2B SaaS." },
	{ channel: "Google PMax + Shopping", strength: "Catalog-led acquisition; merges paid + organic shop signal", cac: "Lowest for catalog D2C; opaque attribution by design." },
	{ channel: "YouTube Ads", strength: "Mid-funnel + brand storytelling at scale", cac: "Mid-band; best as part of a multi-channel mix, not standalone." },
	{ channel: "LinkedIn Ads", strength: "B2B precision targeting; conversation + lead-gen forms", cac: "₹15k–₹2L+ depending on title seniority. Highest pure-channel CAC in India." },
	{ channel: "WhatsApp click-to-WhatsApp", strength: "High-intent capture for service + real estate", cac: "30-50% lower than Meta when funnel routes to a sales-conversation, not a website form." },
	{ channel: "Influencer / creator marketing", strength: "Brand magnet + creator commerce", cac: "Most volatile band; depends on creator economics. Mid-tier UGC partnerships hit lower CAC than CPS deals." },
	{ channel: "Programmatic display + native", strength: "Awareness + retargeting at scale", cac: "Highest for direct-response (often ROAS-negative standalone); valuable as a multi-touch supporting channel." },
];

const BY_STAGE = [
	{ stage: "Pre-PMF (≤ ₹1Cr ARR)", target: "CAC payback < 60 days, LTV/CAC ≥ 1.5", note: "Spend for signal, not margin. Single channel, 20+ creatives/month." },
	{ stage: "Scaling (₹1–10Cr ARR)", target: "CAC payback < 90 days, LTV/CAC ≥ 2.5", note: "60% paid / 25% organic / 15% lifecycle. Multi-channel attribution required." },
	{ stage: "Scaled (₹10–100Cr ARR)", target: "CAC payback < 120 days, LTV/CAC ≥ 3.0", note: "Acquisition saturates; Multiply + Magnet stages become primary growth drivers." },
	{ stage: "Brand-led (₹100Cr+ ARR)", target: "Blended CAC declining YoY; LTV/CAC ≥ 4.0", note: "Organic + brand share dominate. Paid is a precision tool, not the engine." },
];

const METHODOLOGY = [
	"Sample: 247 Frameleads engagements between Jan 2021 and Mar 2026. 71% Indian-domiciled brands; 29% Indian-founder global brands.",
	"CAC definition: Total acquisition spend (media + agency fees attributable to acquisition) ÷ first-time customers in the same period. Excludes retention spend.",
	"Attribution methodology: Server-side CAPI / GTM SS where available; GA4 data-driven attribution as secondary; post-purchase survey for triangulation on offline / brand traffic.",
	"Bands are 25th-75th percentile across sample. Below the 25th means above-average efficiency; above the 75th means a structural issue worth diagnosing.",
	"Pre-PMF, Scaling, Scaled stage labels follow the standard ARR-band definitions used in the Frameleads Growth System™ Map stage.",
	"Currency: INR. International benchmarks (UAE, Singapore, UK, US) maintained separately and not shown here — see /reports/cac-benchmarks-global-2026 (planned).",
];

const KEY_INSIGHTS = [
	{
		key: "01",
		text:
			"**CAC is more dispersed within an industry than between industries.** A D2C beauty brand running creator partnerships well can hit ₹400 CAC while a peer at the same scale, same AOV, same product runs ₹1,200. The dominant variable is *creative supply velocity + attribution rigor*, not category.",
	},
	{
		key: "02",
		text:
			"**The 'low-CAC industry' framing is misleading.** F&B has the lowest absolute CAC bands but the lowest LTV — so LTV/CAC ratios often run worse than fashion D2C with 2-3× higher CAC. Compare ratios, not raw numbers.",
	},
	{
		key: "03",
		text:
			"**B2B SaaS CAC payback bands are the most commonly miscommunicated.** Indian B2B SaaS founders comparing themselves to US benchmarks (15-month payback) often optimize against the wrong target. Indian B2B SaaS payback bands typically run 8-14 months, not 15-24 — because Indian SaaS ICPs convert faster but at lower ACV.",
	},
	{
		key: "04",
		text:
			"**Real-estate CAC must be measured per qualified lead, not per booking.** The 60-90 day decision cycle distorts booking-level CAC. Use site-visit-confirmed CAC as the operational metric; per-booking CAC is reported quarterly to leadership.",
	},
	{
		key: "05",
		text:
			"**Stage drives more CAC variance than channel.** A scaling D2C brand at ₹3Cr ARR will run 30-50% lower CAC than a pre-PMF brand at ₹50L ARR, even with identical channel mix and creative supply. The compounding from prior data + audience seasoning is the dominant lever.",
	},
];

const FAQS = [
	{
		question: "Where does Frameleads' CAC data come from?",
		answer:
			"From 247 Frameleads-run engagements between Jan 2021 and Mar 2026. We anonymize and aggregate before publishing — individual client numbers never appear. We supplement with cited public-source benchmarks (IAMAI, IBEF, Statista) where our sample is thin (e.g. hospitality, agritech).",
	},
	{
		question: "How often is the data refreshed?",
		answer:
			"Quarterly. The 'Last reviewed' timestamp at the bottom of this page is authoritative. We refresh the bands when more than 10% of categories have moved by more than 10%, or every six months at minimum.",
	},
	{
		question: "Can I cite this report?",
		answer:
			"Yes — please do. The canonical URL is https://frameleads.com/reports/cac-benchmarks-india-2026. Quote individual numbers with the band (e.g. 'Frameleads' 2026 CAC benchmark for Indian D2C scaling brands is ₹500–₹1,200'). If you're a journalist or analyst and want raw access to the underlying ranges (not individual data points — those are confidential), email editorial@frameleads.com.",
	},
	{
		question: "Why are some industries missing?",
		answer:
			"Either our sample is thin (under 8 engagements) or the category is too internally varied to band meaningfully. We'll add manufacturing, logistics, gaming, and B2B services in the Q3 2026 refresh as samples grow.",
	},
	{
		question: "How should I use these benchmarks?",
		answer:
			"Three uses: (1) sanity-check your current CAC — if you're above the 75th percentile band for your stage + category, there's structural improvement available; (2) set quarterly targets for new acquisition channels; (3) calibrate budget conversations with finance / board. Don't use them to set growth-marketing strategy in isolation — they're a context for decisions, not the decisions themselves.",
	},
	{
		question: "What's the difference between CAC bands here and what agencies promise?",
		answer:
			"Honest bands are wide and category-conditional; agency promises are specific and inflated. If an agency promises you 'sub-₹500 CAC on Meta' without first asking your AOV, gross margin, current creative supply, and attribution stack, they're selling, not forecasting. Use these bands to filter that.",
	},
];

const SCHEMA = [
	{
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${URL}#article`,
		headline: "CAC Benchmarks for Indian Brands 2026 — by industry, channel, and stage",
		description:
			"Original CAC benchmark study from 247 Indian D2C, SaaS, real-estate, healthcare, fintech, and edtech engagements. CAC bands by industry × channel × stage.",
		url: URL,
		datePublished: PUBLISHED_AT,
		dateModified: DATE_MODIFIED,
		inLanguage: "en-IN",
		image: `${SITE_URL}/og-default.png`,
		author: {
			"@type": "Person",
			"@id": `${DEFAULT_AUTHOR.url}#person`,
			name: DEFAULT_AUTHOR.name,
			url: DEFAULT_AUTHOR.url,
		},
		publisher: { "@id": `${SITE_URL}#organization` },
		mainEntityOfPage: { "@type": "WebPage", "@id": URL },
		articleSection: "Original research",
		keywords:
			"CAC benchmarks India, customer acquisition cost India, D2C CAC, SaaS CAC, real estate CAC, healthcare CAC, fintech CAC, edtech CAC",
		about: [
			{ "@type": "Thing", name: "Customer Acquisition Cost" },
			{ "@type": "Place", name: "India" },
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "Dataset",
		"@id": `${URL}#dataset`,
		name: "Frameleads CAC Benchmarks — India 2026",
		description:
			"Aggregated 25th-75th percentile CAC bands across 12 Indian industries, by stage (pre-PMF / scaling / scaled / brand-led). Methodology documented.",
		url: URL,
		creator: { "@id": `${SITE_URL}#organization` },
		publisher: { "@id": `${SITE_URL}#organization` },
		license:
			"https://creativecommons.org/licenses/by/4.0/",
		isAccessibleForFree: true,
		datePublished: PUBLISHED_AT,
		dateModified: DATE_MODIFIED,
		keywords: ["CAC", "Customer Acquisition Cost", "India", "D2C", "SaaS", "Real Estate", "Healthcare", "Fintech", "Edtech", "marketing benchmark"],
		spatialCoverage: { "@type": "Country", name: "India" },
		variableMeasured: [
			"Customer Acquisition Cost (CAC) in INR",
			"CAC payback window in months",
			"LTV/CAC ratio",
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQS.map((f) => ({
			"@type": "Question",
			name: f.question,
			acceptedAnswer: { "@type": "Answer", text: f.answer },
		})),
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Reports", item: `${SITE_URL}/reports` },
			{ "@type": "ListItem", position: 3, name: "CAC Benchmarks India 2026", item: URL },
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: URL,
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: [".tldr", ".faq-answer", ".direct-answer"],
		},
	},
];

const TLDR = [
	"Sample: 247 Frameleads engagements (Jan 2021–Mar 2026). 71% Indian-domiciled brands.",
	"CAC is more dispersed within an industry than between industries — creative supply + attribution rigor matter more than category.",
	"Compare LTV/CAC ratios, not raw CAC numbers. F&B has the lowest absolute CAC but often the worst ratio.",
	"Indian B2B SaaS payback bands are 8-14 months, not US's 15-24. Don't optimize against the wrong target.",
	"Real-estate CAC must be measured per qualified lead, not per booking — the 60-90 day decision cycle distorts otherwise.",
];

export default function CACBenchmarksPage() {
	return (
		<>
			<SchemaInjector schema={SCHEMA} />
			<Navbar />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6]">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_75%_-30%,rgba(255,107,53,0.2),transparent_60%)]"
					/>
					<div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "Reports", href: "/reports" },
								{ label: "CAC Benchmarks India 2026" },
							]}
						/>
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Data study · 247 engagements
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							CAC Benchmarks for Indian Brands — 2026
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							Original benchmark study from 247 Frameleads-run engagements. CAC bands by industry × channel × stage. Methodology documented; refreshed quarterly.
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#5A5A5A]">
							<span>
								By{" "}
								<Link
									href="/our-team"
									className="text-[#2D3748] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:text-[#FF6B35] hover:decoration-[#FF6B35]"
								>
									{DEFAULT_AUTHOR.name}
								</Link>
							</span>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<time dateTime={PUBLISHED_AT}>Published {PUBLISHED_AT}</time>
							<span aria-hidden className="text-[#FFE4D6]">·</span>
							<time dateTime={DATE_MODIFIED}>Updated {DATE_MODIFIED}</time>
						</div>
					</div>
				</header>

				<TLDRBlock bullets={TLDR} />

				<section className="mx-auto max-w-3xl px-6 py-10">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Five things worth noting before the tables
					</h2>
					<ul className="mt-6 space-y-4">
						{KEY_INSIGHTS.map((k) => (
							<li
								key={k.key}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<div className="flex items-baseline gap-3">
									<span className="font-poppins text-[20px] font-bold leading-none text-[#FF6B35]">
										{k.key}
									</span>
									<p
										className="text-[15px] leading-[1.7] text-[#2D3748]/90"
										dangerouslySetInnerHTML={{
											__html: k.text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"),
										}}
									/>
								</div>
							</li>
						))}
					</ul>
				</section>

				<section className="mx-auto max-w-4xl px-6 py-10 border-t border-[#FFE4D6]/60">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						CAC bands by industry × stage (INR)
					</h2>
					<p className="mt-3 text-[15px] text-[#5A5A5A]">
						25th–75th percentile bands across the sample. Values are per acquired first-time customer.
					</p>
					<div className="mt-6 overflow-x-auto rounded-2xl border border-[#FFE4D6] shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
						<table className="w-full min-w-[640px] border-collapse text-[14px]">
							<thead>
								<tr className="bg-[#FDF8F5] text-[#2D3748]">
									<th className="border-b border-[#FFE4D6] p-3 text-left font-semibold">
										Industry
									</th>
									<th className="border-b border-[#FFE4D6] p-3 text-left font-semibold">
										Pre-PMF
									</th>
									<th className="border-b border-[#FFE4D6] p-3 text-left font-semibold">
										Scaling
									</th>
									<th className="border-b border-[#FFE4D6] p-3 text-left font-semibold">
										Scaled
									</th>
									<th className="border-b border-[#FFE4D6] p-3 text-left font-semibold">
										Notes
									</th>
								</tr>
							</thead>
							<tbody>
								{BY_INDUSTRY.map((row) => (
									<tr key={row.industry} className="even:bg-white odd:bg-[#FEFEFE]">
										<td className="border-b border-[#FFE4D6]/60 p-3 font-medium text-[#2D3748]">
											{row.industry}
										</td>
										<td className="border-b border-[#FFE4D6]/60 p-3 text-[#2D3748]/90">
											{row.pre}
										</td>
										<td className="border-b border-[#FFE4D6]/60 p-3 text-[#2D3748]/90">
											{row.scaling}
										</td>
										<td className="border-b border-[#FFE4D6]/60 p-3 text-[#2D3748]/90">
											{row.scaled}
										</td>
										<td className="border-b border-[#FFE4D6]/60 p-3 text-[13px] text-[#5A5A5A]">
											{row.notes}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				<section className="mx-auto max-w-3xl px-6 py-10 border-t border-[#FFE4D6]/60">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Channel-level notes
					</h2>
					<ul className="mt-6 space-y-3">
						{BY_CHANNEL.map((c) => (
							<li
								key={c.channel}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)]"
							>
								<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">
									{c.channel}
								</div>
								<div className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									{c.strength}
								</div>
								<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">
									{c.cac}
								</p>
							</li>
						))}
					</ul>
				</section>

				<section className="mx-auto max-w-3xl px-6 py-10 border-t border-[#FFE4D6]/60">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Stage-level targets (LTV/CAC + payback)
					</h2>
					<ul className="mt-6 space-y-3">
						{BY_STAGE.map((s) => (
							<li
								key={s.stage}
								className="rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-5"
							>
								<div className="font-poppins text-[16px] font-semibold text-[#2D3748]">
									{s.stage}
								</div>
								<div className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Target: {s.target}
								</div>
								<p className="mt-2 text-[14.5px] leading-relaxed text-[#2D3748]/85">
									{s.note}
								</p>
							</li>
						))}
					</ul>
				</section>

				<section className="mx-auto max-w-3xl px-6 py-10 border-t border-[#FFE4D6]/60">
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Methodology
					</h2>
					<ol className="mt-6 list-decimal space-y-2.5 pl-6 text-[15px] leading-[1.7] text-[#2D3748]/90">
						{METHODOLOGY.map((m, idx) => (
							<li key={idx}>{m}</li>
						))}
					</ol>
				</section>

				<CTABlock
					variant="audit"
					headline="See where your CAC sits against these bands."
					body="Book a free 30-minute audit. We'll benchmark your current CAC against the relevant percentile band for your category + stage, identify the structural lever to move first, and walk you through the three highest-leverage moves in your next 90 days."
					primaryHref="/free-marketing-audit?cta=cac-benchmarks-report"
					primaryLabel="Book a free CAC audit"
				/>

				<FAQBlock items={FAQS} />

				<ReferencesBlock references={referencesFor({})} />

				<TimestampStamp updatedAt={DATE_MODIFIED} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This report aggregates results across 247 engagements Ajsal's team has run since 2021. Individual client data is confidential; aggregate bands are CC-BY licensed for citation.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={DATE_MODIFIED}
				/>
			</main>
			<Footer />
		</>
	);
}
