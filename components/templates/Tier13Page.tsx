import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { TLDRBlock } from "./TLDRBlock";
import { MethodologyCard } from "./MethodologyCard";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { EmbeddedLeadForm } from "./EmbeddedLeadForm";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { SchemaInjector } from "./SchemaInjector";
import { Breadcrumb } from "./Breadcrumb";
import { geosAll, type Service, type Geo } from "@/lib/data";

type Props = {
	service: Service;
	geo?: Geo;
	url: string;
};

type Tier = {
	name: string;
	priceMin: number;
	priceMax: number;
	deliverables: string[];
	bestFor: string;
};

function buildTiers(service: Service, geoMultiplier: number): Tier[] {
	// Base tiers in INR per month — derived from service.avgCacInr band loosely.
	const base = {
		starter: { min: 50000, max: 150000 },
		scale: { min: 150000, max: 400000 },
		enterprise: { min: 400000, max: 1500000 },
	};
	return [
		{
			name: "Starter",
			priceMin: Math.round(base.starter.min * geoMultiplier),
			priceMax: Math.round(base.starter.max * geoMultiplier),
			deliverables: [
				`${service.label} foundational setup + tracking + reporting`,
				"1–2 channels active with weekly optimization",
				"Quarterly business review",
				"Editorial-team-supported (no junior-only accounts)",
			],
			bestFor: "Pre-PMF + early-PMF brands at sub-₹50L/month revenue testing the channel",
		},
		{
			name: "Scale",
			priceMin: Math.round(base.scale.min * geoMultiplier),
			priceMax: Math.round(base.scale.max * geoMultiplier),
			deliverables: [
				`${service.label} full-funnel — 3–5 channels coordinated`,
				"Senior consultant on account + dedicated PM",
				"Monthly QBR + weekly diagnostic",
				"Creative production + lifecycle integration",
				"Attribution + dashboard ownership",
			],
			bestFor: "Post-PMF brands at ₹50L–₹3Cr/month revenue scaling",
		},
		{
			name: "Enterprise",
			priceMin: Math.round(base.enterprise.min * geoMultiplier),
			priceMax: Math.round(base.enterprise.max * geoMultiplier),
			deliverables: [
				`${service.label} full-stack — 5+ channels with multi-team coordination`,
				"Senior partner on account + executive sponsor",
				"Weekly QBR + monthly strategic review",
				"Original-research + thought-leadership pipeline",
				"Custom dashboard + attribution + cohort analysis",
				"On-site quarterly meetings",
			],
			bestFor: "₹3Cr+/month revenue brands or category-leadership investments",
		},
	];
}

function fmtINR(n: number): string {
	if (n >= 100000) {
		return `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`;
	}
	return `₹${(n / 1000).toFixed(0)}k`;
}

function buildFaqs(service: Service, geo?: Geo): FAQItem[] {
	const inLocation = geo ? `in ${geo.name}` : "in India";
	return [
		{
			question: `What's the typical ${service.label} retainer ${inLocation}?`,
			answer: `${service.label} retainers ${inLocation} range from ₹50k/month (starter) to ₹15L+/month (enterprise) depending on scope, channels, and stage. Most Indian SMB engagements fall in the ₹1.5L–₹6L/month band. ${geo ? `${geo.name}-specific dynamics shift retainers ±15-25% versus all-India averages.` : ""}`,
		},
		{
			question: `Are there hidden fees?`,
			answer: `No. Frameleads retainers include strategy + execution + reporting + creative direction. Add-ons (paid creative production, third-party tools, original research) are explicitly scoped + priced upfront. No setup fees, no per-creative fees on standard scope.`,
		},
		{
			question: `What's the minimum contract length?`,
			answer: `90-day pilot for new engagements; quarterly continuation thereafter. We don't do 12-month lock-ins — performance + relationship justify continuation, not contract terms.`,
		},
		{
			question: `Are pricing tiers performance-tied?`,
			answer: `Standard retainers are scope-priced, not performance-tied. We can structure performance-based engagements (revenue-share or CPA bonuses) for specific use cases — discussed during the audit.`,
		},
		{
			question: `Can I scale up or down mid-engagement?`,
			answer: `Yes. Scope changes happen at month boundaries with 30-day notice. Most clients adjust scope every 6–9 months as their stage shifts.`,
		},
		{
			question: `What's not included?`,
			answer: `Media spend (paid ads, influencer fees) is separate from retainer. Third-party tooling cost (Klaviyo, Triple Whale, etc.) is separate. Custom video production and original-research reports are scoped per project.`,
		},
	];
}

function buildRelated(service: Service, geo?: Geo): { related: CellLink[]; otherCities: CellLink[] } {
	const related: CellLink[] = [
		{
			href: `/${service.id}`,
			label: `${service.label} (service overview)`,
		},
		{
			href: `/${service.id}-pricing${geo ? "" : "-in-mumbai"}`,
			label: geo ? `${service.label} pricing (all-India)` : `${service.label} pricing in Mumbai`,
		},
		{
			href: `/free-marketing-audit?service=${service.id}`,
			label: `Get free ${service.label} audit`,
		},
	];
	const otherCities: CellLink[] = geo
		? geosAll
				.filter((g) => (g.country === undefined || g.country === "India") && g.tier === 1 && g.id !== geo.id)
				.slice(0, 6)
				.map((g) => ({
					href: `/${service.id}-pricing-in-${g.id}`,
					label: `${service.label} pricing in ${g.name}`,
				}))
		: [];
	return { related, otherCities };
}

export function Tier13Page({ service, geo, url }: Props) {
	const today = new Date().toISOString().slice(0, 10);
	// City CPC density loosely shifts pricing — use service.avgCpcInr-band-aware multiplier.
	const geoMultiplier = !geo ? 1 : geo.tier === 1 ? 1.15 : geo.tier === 2 ? 0.9 : 0.75;
	const tiers = buildTiers(service, geoMultiplier);
	const faqs = buildFaqs(service, geo);
	const { related, otherCities } = buildRelated(service, geo);

	const headline = geo
		? `${service.label} pricing in ${geo.name} (2026)`
		: `${service.label} pricing in India (2026)`;
	const inLocation = geo ? `in ${geo.name}` : "in India";

	const directAnswer = `${service.label} ${inLocation} typically costs ${fmtINR(tiers[0].priceMin)}–${fmtINR(tiers[2].priceMax)} per month depending on scope and stage. Three retainer tiers: Starter (${fmtINR(tiers[0].priceMin)}–${fmtINR(tiers[0].priceMax)}/mo) for testing, Scale (${fmtINR(tiers[1].priceMin)}–${fmtINR(tiers[1].priceMax)}/mo) for active growth, Enterprise (${fmtINR(tiers[2].priceMin)}+/mo) for category-leadership investments. Below the floor, quality is structurally limited; above the ceiling, customization replaces tier pricing.`;

	const tldr = [
		`${service.label} ${inLocation} ranges ${fmtINR(tiers[0].priceMin)}–${fmtINR(tiers[2].priceMax)} per month.`,
		`Three tiers: Starter (test), Scale (grow), Enterprise (category-lead).`,
		`No setup fees, no hidden costs. 90-day pilot, quarterly continuation.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: headline,
			provider: { "@type": "Organization", name: "Frameleads", url: "https://frameleads.com" },
			...(geo
				? {
						areaServed: {
							"@type": "City",
							name: geo.name,
							...(geo.country ? { containedIn: geo.country } : {}),
						},
					}
				: { areaServed: { "@type": "Country", name: "India" } }),
			url,
			description: `${service.label} pricing tiers ${inLocation} — Starter, Scale, Enterprise — with deliverables, included scope, and what's not included.`,
		},
		{
			"@context": "https://schema.org",
			"@type": "AggregateOffer",
			priceCurrency: "INR",
			lowPrice: tiers[0].priceMin,
			highPrice: tiers[2].priceMax,
			offerCount: tiers.length,
			offers: tiers.map((t) => ({
				"@type": "Offer",
				name: t.name,
				price: t.priceMin,
				priceCurrency: "INR",
				priceSpecification: {
					"@type": "PriceSpecification",
					price: t.priceMin,
					maxPrice: t.priceMax,
					priceCurrency: "INR",
					unitText: "per month",
				},
				description: t.bestFor,
			})),
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
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
				{ "@type": "ListItem", position: 2, name: service.label, item: `https://frameleads.com/${service.id}` },
				{ "@type": "ListItem", position: 3, name: headline, item: url },
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
			<Navbar />
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
								{ href: `/${service.id}`, label: service.label },
								{ label: geo ? `Pricing in ${geo.name}` : "Pricing" },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Pricing · Tier 13
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{headline}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{directAnswer}
						</p>
					</div>
				</header>

				<TLDRBlock bullets={tldr} />

				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Pricing tiers
					</div>
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Three retainer tiers
					</h2>
					<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
						{tiers.map((t) => (
							<div
								key={t.name}
								className="rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-colors hover:border-[#FF6B35]/40"
							>
								<div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B35]">
									{t.name}
								</div>
								<div className="mt-2 font-poppins text-[20px] font-bold text-[#2D3748]">
									{fmtINR(t.priceMin)}–{fmtINR(t.priceMax)}
								</div>
								<div className="text-[12px] text-[#5A5A5A]">per month</div>
								<ul className="mt-4 space-y-2 text-[13.5px] text-[#2D3748]/85">
									{t.deliverables.map((d) => (
										<li key={d} className="flex gap-2">
											<span aria-hidden className="text-[#FF6B35] font-semibold">▸</span>
											<span>{d}</span>
										</li>
									))}
								</ul>
								<div className="mt-4 text-[12px] text-[#5A5A5A] border-t border-[#FFE4D6] pt-3">
									Best for: {t.bestFor}
								</div>
							</div>
						))}
					</div>
				</section>

				<MethodologyCard contextLabel={`${service.label} pricing ${inLocation}`} />

				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Factors that move price
					</div>
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						What pushes ${service.label.toLowerCase()} retainers up or down
					</h2>
					<ul className="mt-4 space-y-3 text-[15px] text-[#2D3748]/90">
						<li>
							<strong>Channel scope.</strong> One channel deep is cheaper than 5-channel coordination. Most ${service.label.toLowerCase()} engagements run 3–4 channels.
						</li>
						<li>
							<strong>Stage maturity.</strong> Pre-PMF + early-PMF brands need more strategy + less tactical execution. Scale-stage flips this.
						</li>
						<li>
							<strong>Senior consultant access.</strong> Senior-led accounts cost 30–50% more than junior-led. Frameleads doesn't run junior-only accounts.
						</li>
						<li>
							<strong>Creative production volume.</strong> 30+ creatives/month vs 8/month is a real cost difference.
						</li>
						<li>
							<strong>Reporting + dashboard depth.</strong> Custom attribution + cohort dashboards add 10–20% to retainer.
						</li>
						{geo ? (
							<li>
								<strong>{geo.name} dynamics.</strong> Tier-{geo.tier} city CPMs + audience density shift retainer band ±10–25%.
							</li>
						) : null}
					</ul>
				</section>

				<EmbeddedLeadForm
					source={`tier13-${service.id}${geo ? `-${geo.id}` : ""}-mid`}
					service={service.id}
					headline={`Get an exact ${service.label.toLowerCase()} quote ${inLocation}`}
					body={`Pricing depends on your stage + ICP + unit economics. Fill in the form below to book a free 30-min audit and we'll quote precisely — no slides, just numbers.`}
				/>

				<FAQBlock items={faqs} />

				<RelatedCells heading={`Related to ${service.label}`} links={related} />
				{otherCities.length > 0 ? (
					<RelatedCells heading={`${service.label} pricing in other cities`} links={otherCities} />
				) : null}

				<TimestampStamp updatedAt={today} reviewedBy="Frameleads Editorial Team" />

				<CTABlock
					variant="audit"
					headline={`Get an exact ${service.label} quote ${inLocation}`}
					body={`A 30-min audit gives a precise quote against your specific stage, ICP, and unit economics. No slides — just the numbers.`}
					primaryHref={`/free-marketing-audit?service=${service.id}${geo ? `&geo=${geo.id}` : ""}`}
					primaryLabel="Book a free 30-min audit"
				/>

				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads runs ${service.label.toLowerCase()} engagements across India. Pricing tiers cited reflect 2026 market rates + Frameleads engagement scope.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={today}
				/>

				<InboundLinksHint count={related.length + otherCities.length} />
			</main>
			<Footer />
		</>
	);
}
