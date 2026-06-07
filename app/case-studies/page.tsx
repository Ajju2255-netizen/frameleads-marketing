import type { Metadata } from "next";
import Link from "next/link";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { TLDRBlock } from "@/components/templates/TLDRBlock";
import { CTABlock } from "@/components/templates/CTABlock";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";
import { industries, services } from "@/lib/data";

export const revalidate = 86400;

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/case-studies`;

export const metadata: Metadata = {
	title: "Case studies — Frameleads engagements across industries × services | Frameleads",
	description:
		"Anonymised Frameleads engagement breakdowns: starting state, intervention, channel mix, attribution rigour, outcome. Categorised by industry × service. Updated as engagements complete their first 6-month cycle.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Case studies — Frameleads",
		description: "Anonymised engagement breakdowns categorised by industry × service.",
		url: URL,
		type: "website",
	},
};

const today = new Date().toISOString().slice(0, 10);

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Frameleads Case Studies",
		description: "Anonymised engagement breakdowns across industries × services.",
		url: URL,
		datePublished: "2025-12-01",
		dateModified: today,
		inLanguage: "en-IN",
		author: { "@type": "Person", "@id": `${DEFAULT_AUTHOR.url}#person`, name: DEFAULT_AUTHOR.name },
		publisher: { "@id": `${SITE_URL}#organization` },
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Case studies", item: URL },
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: URL,
		speakable: { "@type": "SpeakableSpecification", cssSelector: [".tldr", ".direct-answer"] },
	},
];

// Categorised case-study scaffold — entries get published as engagements
// complete a 6-month cycle and the client approves anonymised disclosure.
// Cards link into the industry pillar + service hub for now; full anonymised
// case studies replace these inline as they're written.
const CATEGORIES: Array<{
	heading: string;
	description: string;
	picks: Array<{ industryId: string; serviceId: string; angle: string }>;
}> = [
	{
		heading: "D2C + e-commerce",
		description: "Performance-led D2C growth — Meta + Google + Click-to-WhatsApp + retention + RTO management.",
		picks: [
			{ industryId: "d2c", serviceId: "meta-ads", angle: "Meta-led D2C scale-up with creative-pipeline discipline" },
			{ industryId: "fashion-d2c", serviceId: "performance-marketing", angle: "Festive Q3/Q4 scaling with seasonal creative rotation" },
			{ industryId: "beauty-d2c", serviceId: "social-media-marketing", angle: "Creator-led beauty acquisition with paid amplification" },
		],
	},
	{
		heading: "B2B SaaS",
		description: "Compound organic growth + LinkedIn ABM + content-driven pipeline.",
		picks: [
			{ industryId: "b2b-saas", serviceId: "seo-services", angle: "SEO + AI Overview citation strategy for B2B SaaS" },
			{ industryId: "b2b-saas", serviceId: "linkedin-ads", angle: "LinkedIn ABM with persona-by-persona sequencing" },
			{ industryId: "saas-vertical", serviceId: "content-marketing", angle: "Vertical-SaaS pillar + cluster build-out" },
		],
	},
	{
		heading: "Real estate + property",
		description: "K-RERA / M-RERA-compliant lead-gen with Click-to-WhatsApp + site-visit attribution.",
		picks: [
			{ industryId: "real-estate", serviceId: "meta-ads", angle: "Click-to-WhatsApp lead-gen with RERA-aware creative" },
			{ industryId: "real-estate", serviceId: "google-ads", angle: "Project + locality Search Ads with channel-partner attribution" },
		],
	},
	{
		heading: "Healthcare + healthtech",
		description: "Compliance-first acquisition for clinics, hospitals, and healthtech apps.",
		picks: [
			{ industryId: "healthcare", serviceId: "google-ads", angle: "Local-intent Search Ads for clinic / hospital chains" },
			{ industryId: "healthtech", serviceId: "performance-marketing", angle: "App-install + activation funnel for healthtech" },
		],
	},
	{
		heading: "Finance + fintech + insurance",
		description: "SEBI / RBI / IRDAI-compliant performance marketing with strict creative review.",
		picks: [
			{ industryId: "finance", serviceId: "google-ads", angle: "Search Ads with SEBI-disclosure-compliant creative" },
			{ industryId: "fintech", serviceId: "meta-ads", angle: "Fintech app acquisition with KYC-funnel optimisation" },
			{ industryId: "insurance", serviceId: "performance-marketing", angle: "Insurance lead-gen with IRDAI-compliant landing pages" },
		],
	},
	{
		heading: "Hospitality + travel + tourism",
		description: "Seasonal booking flows + creator-led discovery + locality SEO.",
		picks: [
			{ industryId: "hospitality", serviceId: "social-media-marketing", angle: "Hotel-chain creator collaborations + paid amplification" },
			{ industryId: "tourism", serviceId: "google-ads", angle: "Destination-intent Search Ads with seasonal bidding" },
		],
	},
];

export default function CaseStudiesPage() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Case studies" }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Case studies
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">Case studies</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							Anonymised Frameleads engagement breakdowns categorised by industry × service. Each entry walks through the starting state, the intervention, the channel mix, the attribution rigour, and the outcome — operator-grade detail, no vanity metrics.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<Link href="/free-marketing-audit?source=case-studies&cta=case-studies-top" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5">Get a free audit<span aria-hidden>→</span></Link>
							<Link href="/frameleads-growth-system" className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">See the methodology</Link>
						</div>
					</div>
				</header>

				<TLDRBlock
					bullets={[
						"Engagements categorised by industry × service.",
						"Each entry: starting state → intervention → channel mix → attribution → outcome.",
						"Anonymised by default. Named studies published as clients approve.",
						"Operator-grade detail, no vanity metrics — bands not single numbers.",
					]}
				/>

				{/* Methodology */}
				<section
					aria-labelledby="cs-methodology"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">How we write case studies</div>
					<h2 id="cs-methodology" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Case-study structure (and what we won't write)
					</h2>
					<ul className="mt-5 space-y-3">
						{[
							{ heading: "Starting state — diagnosed honestly", body: "Real CAC band, real bottleneck (creative / attribution / lifecycle / runway), real constraint (compliance / budget / team / market). Vanity-metric starting points get omitted; if the leverage point isn't clear, there's no case study." },
							{ heading: "Intervention — named tactics, not platitudes", body: "Specific tactics deployed in named phases (Discovery / Foundation / Acceleration / Compound). Same vocabulary as the Frameleads Growth System™ pillar so readers can map this to their own engagement scope." },
							{ heading: "Channel mix — weighted with rationale", body: "Channel allocations with per-channel rationale, mirroring the channel-mix tables on the service hubs. Generic media-buying isn't a channel mix; this is the operator-grade version." },
							{ heading: "Attribution rigour — server-side or it didn't count", body: "Every case study discloses the attribution stack (CAPI / GTM SS / GA4 / platform Enhanced Conversions). Numbers attributed via Meta Pixel-only or last-touch get demoted to 'indicative'." },
							{ heading: "Outcome — bands, not single numbers", body: "Outcomes reported as bands with confidence indicators. 'CAC fell from ₹X to ₹Y band' rather than 'CAC fell 47%'. Single-decimal precision is sales fiction." },
							{ heading: "What we won't write", body: "Numbers we can't reproduce. Outcomes we can't attribute server-side. Client names without explicit approval. 'Industry-leading' / 'best-in-class' / other unverifiable hyperbole. If we wouldn't put it in front of the client's CFO, we don't publish it." },
						].map((m) => (
							<li key={m.heading} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
								<h3 className="font-poppins text-[16px] font-semibold text-[#2D3748]">{m.heading}</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">{m.body}</p>
							</li>
						))}
					</ul>
				</section>

				{/* Category sections */}
				{CATEGORIES.map((cat) => (
					<section
						key={cat.heading}
						aria-labelledby={`cs-${cat.heading.replace(/\s+/g, "-").toLowerCase()}`}
						className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
					>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">{cat.heading}</div>
						<h2
							id={`cs-${cat.heading.replace(/\s+/g, "-").toLowerCase()}`}
							className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
						>
							{cat.heading} engagements
						</h2>
						<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">{cat.description}</p>
						<ul className="mt-5 space-y-3">
							{cat.picks.map((p, idx) => {
								const ind = industries.find((i) => i.id === p.industryId);
								const svc = services.find((s) => s.id === p.serviceId);
								return (
									<li key={idx} className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_1px_8px_rgba(45,55,72,0.04)]">
										<div className="flex items-baseline justify-between gap-3">
											<div className="font-poppins text-[16px] font-semibold text-[#2D3748]">
												{ind?.label || p.industryId} × {svc?.label || p.serviceId}
											</div>
											<div className="shrink-0 rounded-full bg-[#FFE4D6]/60 px-2 py-0.5 text-[11px] font-semibold text-[#5A5A5A]">
												Engagement scope
											</div>
										</div>
										<p className="mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">{p.angle}</p>
										<div className="mt-3 flex flex-wrap gap-2 text-[12px]">
											<Link href={`/${p.industryId}`} className="text-[#FF6B35] underline decoration-[#FFE4D6] underline-offset-4 hover:decoration-[#FF6B35]">
												{ind?.label || p.industryId} industry pillar →
											</Link>
											<span aria-hidden className="text-[#FFE4D6]">·</span>
											<Link href={`/${p.serviceId}`} className="text-[#FF6B35] underline decoration-[#FFE4D6] underline-offset-4 hover:decoration-[#FF6B35]">
												{svc?.label || p.serviceId} service hub →
											</Link>
											<span aria-hidden className="text-[#FFE4D6]">·</span>
											<Link
												href={`/resources/guides/${p.serviceId}-for-${p.industryId}`}
												className="text-[#FF6B35] underline decoration-[#FFE4D6] underline-offset-4 hover:decoration-[#FF6B35]"
											>
												Full {svc?.label || p.serviceId} for {ind?.label || p.industryId} guide →
											</Link>
										</div>
									</li>
								);
							})}
						</ul>
					</section>
				))}

				{/* Anonymisation policy */}
				<section
					aria-labelledby="cs-anon"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Anonymisation</div>
					<h2 id="cs-anon" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Anonymisation + disclosure policy
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#2D3748]/90">
						Default mode is anonymised: industry + stage + scope + outcome bands disclosed; client identity withheld. We move to named only after explicit client approval — and most of our clients don't approve, because naming an agency relationship sometimes hurts their own brand positioning. We respect that. Named studies are the exception, not the default.
					</p>
				</section>

				<CTABlock
					variant="audit"
					headline="Want a case-study-grade audit of your current setup?"
					body="Free 30 minutes, no slides. We'll diagnose your specific bottleneck against the same starting-state + intervention + attribution framework these case studies use. Even if you don't engage us."
					primaryHref="/free-marketing-audit?source=case-studies&cta=case-studies-bottom"
					primaryLabel="Book a free audit"
				/>

				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard person={DEFAULT_AUTHOR} name={DEFAULT_AUTHOR.name} role={DEFAULT_AUTHOR.role} bio={DEFAULT_AUTHOR.bio} linkedin={DEFAULT_AUTHOR.linkedin} updatedAt={today} />
			</main>
		</>
	);
}
