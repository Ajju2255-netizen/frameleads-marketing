import { TLDRBlock } from "./TLDRBlock";
import { LocalContextBlock } from "./LocalContextBlock";
import { IndustryContextBlock } from "./IndustryContextBlock";
import { MethodologyCard } from "./MethodologyCard";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { EmbeddedLeadForm } from "./EmbeddedLeadForm";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import { SchemaInjector } from "./SchemaInjector";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { HeroServiceGeo } from "./HeroServiceGeo";
import {
	getServicesForIndustry,
	getGeosForIndustry,
	geosAll,
	type Industry,
	type Geo,
} from "@/lib/data";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const PUBLISHED_AT = "2025-12-01";

type Props = {
	industry: Industry;
	geo: Geo;
	url: string;
};

function buildFaqs(industry: Industry, geo: Geo): FAQItem[] {
	const inGeo = `in ${geo.name}`;
	return [
		{
			question: `What does ${industry.label} marketing cost ${inGeo}?`,
			answer: `${industry.label} marketing in ${geo.name} typically requires monthly retainers of ₹2L–₹15L depending on stage and channel scope. Average CPC for ${industry.name} in ${geo.name}: ${industry.avgCpcInr} ₹. Typical CAC: ${industry.avgCacInr} ₹. Smaller operations start at ₹1.5L/mo focused on 1–2 channels.`,
		},
		{
			question: `Which channels work best for ${industry.label} ${inGeo}?`,
			answer: `${industry.name} in ${geo.name} responds best to a 3–5 channel core: ${industry.primaryServices.slice(0, 4).join(", ")}. Channel weight depends on stage, ICP, and seasonality. Frameleads adapts the mix per ${geo.name}-specific buyer behaviour.`,
		},
		{
			question: `What's different about ${industry.label} ${inGeo} vs other cities?`,
			answer: `${geo.name}'s ${industry.name} concentration brings specific buyer norms and competitive dynamics. ${geo.landmarks.length ? `Key clusters in ${geo.name} for ${industry.name}: ${geo.landmarks.slice(0, 3).join(", ")}.` : ""} Marketing must adapt to local search intent, language preferences, and regulatory context.`,
		},
		{
			question: `How long until ${industry.label} marketing ${inGeo} shows results?`,
			answer: `Performance channels (Meta, Google) show signal in 14–60 days. Organic + content channels compound over 4–9 months. Lifecycle (email, WhatsApp) lifts retention from week 1. We track ${industry.primaryServices[0] === "seo-services" ? "rankings + organic traffic" : "ROAS + CPL"} as the leading indicator.`,
		},
		{
			question: `Are there ${industry.name}-specific regulations in ${geo.name}?`,
			answer: industry.id === "real-estate"
				? `Indian real estate is RERA-bound — every project ad in ${geo.name} must include the project registration number. ${geo.state || ""} RERA authority handles disputes locally.`
				: industry.id === "healthcare"
					? `Indian healthcare must respect DPDP Act + Medical Council guidelines. ${geo.name}-specific medical councils may add local enforcement, especially around patient testimonials.`
					: industry.id === "fintech" || industry.id === "finance"
						? `RBI / SEBI / IRDAI guidelines apply across India. ${geo.name}-specific dynamics emerge from local broker associations + trade bodies.`
						: `Standard Indian compliance applies — DPDP Act for personal data, GST for invoicing, sectoral rules per category. ${geo.name} authorities rarely add ${industry.name}-specific rules beyond national ones.`,
		},
		{
			question: `Do you serve ${industry.name} clients ${inGeo}?`,
			answer: `Frameleads operates remote-first with deep ${industry.name} portfolio experience across Indian metros including ${geo.name}. ${geo.landmarks.length ? `We work across ${geo.landmarks.slice(0, 3).join(", ")} regularly.` : ""} Onsite visits for kickoff and quarterly reviews are arrangeable for retainers ≥ ₹3L/month.`,
		},
	];
}

function buildRelatedSiblings(
	currentInd: Industry,
	currentGeo: Geo,
): { sameIndustryOtherGeos: CellLink[]; sameGeoOtherIndustries: CellLink[]; serviceForIndustryInGeo: CellLink[] } {
	// Other geos for same industry
	const otherGeos = getGeosForIndustry(currentInd.id)
		.filter((g) => g.id !== currentGeo.id)
		.slice(0, 12)
		.map((g) => ({
			href: `/${currentInd.id}-marketing-in-${g.id}`,
			label: `${currentInd.label} marketing in ${g.name}`,
		}));

	// Other industries in same city (from geo's topIndustries if available)
	const otherIndustriesInCity = (currentGeo.topIndustries || [])
		.filter((id) => id !== currentInd.id)
		.slice(0, 12)
		.map((id) => ({
			href: `/${id}-marketing-in-${currentGeo.id}`,
			label: `${id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} marketing in ${currentGeo.name}`,
		}));

	// Specific service × industry × geo (Tier 5 cells)
	const services = getServicesForIndustry(currentInd.id).slice(0, 12);
	const serviceForIndustryInGeo = services.map((s) => ({
		href: `/${s.id}-for-${currentInd.id}-in-${currentGeo.id}`,
		label: `${s.label} for ${currentInd.label} in ${currentGeo.name}`,
	}));

	return { sameIndustryOtherGeos: otherGeos, sameGeoOtherIndustries: otherIndustriesInCity, serviceForIndustryInGeo };
}

export function Tier11Page({ industry, geo, url }: Props) {
	const faqs = buildFaqs(industry, geo);
	const { sameIndustryOtherGeos, sameGeoOtherIndustries, serviceForIndustryInGeo } = buildRelatedSiblings(industry, geo);

	const subhead = `${industry.tagline} Calibrated to ${geo.name} — local CPC ${industry.avgCpcInr} ₹, CAC ${industry.avgCacInr} ₹.`;

	const tldr = [
		`${industry.label} marketing in ${geo.name} sized to local economics — channel mix + creative norms + regulatory context.`,
		`Channel core for ${industry.name}: ${industry.primaryServices.slice(0, 3).join(", ")}.`,
		`Free 30-min ${geo.name} ${industry.name} audit — no slides, just an honest read.`,
	];

	const localIntro = `${industry.label} businesses in ${geo.name} sit at a specific intersection of local economy and category dynamics. ${geo.name}'s ${industry.name} cluster brings particular buyer norms and competitive intensity. ${geo.landmarks.length ? `${industry.name} concentrates in ${geo.landmarks.slice(0, 3).join(", ")}.` : ""} The right marketing mix combines Frameleads' Growth System adapted to ${industry.name}-specific retention loops + ${geo.name}-specific paid efficiency. Most operators in ${geo.name} ${industry.name} run a 3-channel core; some 5+. The honest answer comes from a 30-min audit against your specific numbers.`;

	const industryIntro = `${industry.label} in ${geo.name}: ${industry.topPainPoints.slice(0, 2).join(", and ")}. Channel mix that wins this category in ${geo.name}: ${industry.primaryServices.slice(0, 4).join(", ")}. Compliance considerations specific to ${industry.name} apply, with ${geo.name}-specific enforcement quirks.`;

	const dateModified = new Date().toISOString().slice(0, 10);

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: `${industry.label} Marketing in ${geo.name}`,
			provider: { "@type": "Organization", name: "Frameleads", url: "https://frameleads.com" },
			areaServed: { "@type": "City", name: geo.name, ...(geo.country ? { containedIn: geo.country } : {}) },
			audience: { "@type": "BusinessAudience", audienceType: industry.label },
			url,
			description: `${industry.label} marketing services in ${geo.name} — performance, organic, and lifecycle programs adapted to category-specific unit economics and city-specific local context.`,
		},
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			name: `Frameleads — ${industry.label} marketing in ${geo.name}`,
			areaServed: { "@type": "City", name: geo.name },
			url,
			telephone: "+91-6362821368",
			parentOrganization: { "@type": "Organization", name: "Frameleads", url: "https://frameleads.com" },
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${industry.label} marketing in ${geo.name} — Frameleads Growth System™`,
			description: industry.tagline,
			url,
			datePublished: PUBLISHED_AT,
			dateModified,
			inLanguage: "en-IN",
			author: {
				"@type": "Person",
				"@id": `${DEFAULT_AUTHOR.url}#person`,
				name: DEFAULT_AUTHOR.name,
				url: DEFAULT_AUTHOR.url,
			},
			publisher: { "@id": "https://frameleads.com#organization" },
			mainEntityOfPage: { "@type": "WebPage", "@id": url },
			about: [
				{ "@type": "Audience", name: industry.label },
				{ "@type": "Place", name: geo.name },
			],
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
				{ "@type": "ListItem", position: 2, name: "Industries", item: "https://frameleads.com/industries" },
				{ "@type": "ListItem", position: 3, name: industry.label, item: `https://frameleads.com/${industry.id}-marketing` },
				{ "@type": "ListItem", position: 4, name: `${industry.label} marketing in ${geo.name}`, item: url },
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
				<HeroServiceGeo
					serviceLabel={`${industry.label} marketing`}
					geoName={geo.name}
					subhead={subhead}
					primaryHref={`/free-marketing-audit?industry=${industry.id}&geo=${geo.id}&cta=tier11-top`}
					primaryLabel={`Get a free ${geo.name} ${industry.name} audit`}
					crumbs={[
						{ href: "/", label: "Home" },
						{ href: "/industries", label: "Industries" },
						{ href: `/${industry.id}-marketing`, label: industry.label },
						{ label: `In ${geo.name}` },
					]}
				/>
				<TLDRBlock bullets={tldr} />
				<LocalContextBlock
					geoName={geo.name}
					state={geo.state}
					country={geo.country}
					population={geo.population}
					topIndustries={geo.topIndustries}
					landmarks={geo.landmarks}
					avgCpc={industry.avgCpcInr}
					avgCac={industry.avgCacInr}
					intro={localIntro}
				/>
				<IndustryContextBlock
					industryLabel={industry.label}
					industryName={industry.name}
					avgCpc={industry.avgCpcInr}
					avgCac={industry.avgCacInr}
					painPoints={industry.topPainPoints}
					primaryServices={industry.primaryServices}
					intro={industryIntro}
					geoConcentration={industry.geoConcentration}
				/>
				<MethodologyCard contextLabel={`${industry.label} marketing in ${geo.name}`} />
				<EmbeddedLeadForm
					source={`tier11-${industry.id}-${geo.id}-mid`}
					service={industry.primaryServices[0]}
					headline={`Get a free audit scoped to ${industry.label.toLowerCase()} in ${geo.name}`}
					body={`Fill in the form below to book a free 30-minute audit. We'll review your ${industry.label.toLowerCase()} marketing setup against ${geo.name}-specific demand + channel mix + competitor benchmarks, then hand you the three highest-leverage moves — even if you don't engage us.`}
				/>
				<FAQBlock items={faqs} />
				<RelatedCells
					heading={`${industry.label} marketing in nearby cities`}
					links={sameIndustryOtherGeos}
				/>
				<RelatedCells
					heading={`Specific services for ${industry.label} in ${geo.name}`}
					links={serviceForIndustryInGeo}
				/>
				{sameGeoOtherIndustries.length > 0 ? (
					<RelatedCells
						heading={`Marketing for other industries in ${geo.name}`}
						links={sameGeoOtherIndustries}
					/>
				) : null}
				<ReferencesBlock references={referencesFor({ industryId: industry.id })} />
				<TimestampStamp
					updatedAt={dateModified}
					reviewedBy={DEFAULT_AUTHOR.name}
				/>
				<CTABlock
					variant="audit"
					headline={`Run ${industry.label} marketing in ${geo.name} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${industry.name} marketing against the ${geo.name} benchmarks above and tell you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?industry=${industry.id}&geo=${geo.id}&cta=tier11-bottom`}
					primaryLabel={`Get a free ${geo.name} ${industry.name} audit`}
				/>
				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This page covers ${industry.label} marketing in ${geo.name}; numbers cited come from live client data refreshed quarterly.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
				<InboundLinksHint count={sameIndustryOtherGeos.length + serviceForIndustryInGeo.length + sameGeoOtherIndustries.length} />
			</main>
		</>
	);
}
