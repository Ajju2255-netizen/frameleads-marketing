import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { TLDRBlock } from "./TLDRBlock";
import { IndustryContextBlock } from "./IndustryContextBlock";
import { MethodologyCard } from "./MethodologyCard";
import { UseCasesList } from "./UseCasesList";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { ReferencesBlock } from "./ReferencesBlock";
import { referencesFor } from "@/lib/data/references";
import { HeroServiceGeo } from "./HeroServiceGeo";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import {
	getServicesForIndustry,
	getGeosForIndustry,
	type Service,
	type Industry,
} from "@/lib/data";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

const PUBLISHED_AT = "2025-12-01";

type Props = {
	service: Service;
	industry: Industry;
	url: string;
};

function buildFaqs(service: Service, industry: Industry): FAQItem[] {
	return [
		{
			question: `How is ${service.label} different for ${industry.name} vs other industries?`,
			answer: `${industry.name} carries a specific set of constraints: ${industry.topPainPoints.slice(0, 2).join(", and ")}. That changes both the creative norms and the target CAC. We adapt the Frameleads Growth System™ to ${industry.name}-specific buying behaviour rather than running a generic ${service.label.toLowerCase()} playbook.`,
		},
		{
			question: `What's a typical ${service.label} budget for ${industry.name}?`,
			answer: `${industry.name} engagements span a wide band — average CPC sits around ${industry.avgCpcInr} ₹ and typical CAC falls in ${industry.avgCacInr} ₹. The right retainer depends on your business stage, target growth rate, and existing channel mix. Most engagements start at ₹1.5L–₹6L/month and scale with results.`,
		},
		{
			question: `How long until ${service.label} for ${industry.name} shows results?`,
			answer: `Realistic timeline is ${service.timeToResults}. Compounding starts in month 2 for performance-led work and month 4 for organic-led work. We track ${service.primaryKpi} as the leading indicator from week 2 onward, so you'll know the trajectory before quarterly reviews.`,
		},
		{
			question: `What ${industry.name}-specific compliance does ${service.label} require?`,
			answer: `${industry.name === "Healthcare" ? "Healthcare in India must respect DPDP Act + Medical Council guidelines on advertising. Patient testimonials need consent, claims need clinical backing, and DPI categorisation matters." : industry.name === "Financial Services" ? "Indian financial services require RBI/SEBI/IRDAI alignment in ad copy, mandatory disclaimers, and KYC-aware lead handling." : industry.name === "B2B SaaS" ? "Most SaaS engagements need GDPR + DPDP-compliant lead handling, especially for global ICPs. We document data flows in the proposal." : industry.name === "Real Estate" ? "Indian real estate is RERA-bound: project registration numbers in ad copy, claim substantiation, and broker-disclosure norms." : "We document the relevant compliance posture per market in the proposal — DPDP Act in India, GDPR for global, plus any sector-specific rules that apply."}`,
		},
		{
			question: `Can a small ${industry.name} business afford ${service.label}?`,
			answer: `Yes — we scope engagements to fit. Smaller ${industry.name} businesses typically start with a focused 2-channel program (₹1.5L–₹3L/month) and expand once unit economics prove out. The Frameleads CAC Ladder document we share at the start of each engagement maps exactly which spend tier unlocks which growth stage.`,
		},
	];
}

function buildRelatedTier3(
	service: Service,
	industry: Industry,
): CellLink[] {
	// For each industry, surface Tier 3 cells (same service × industry's top geos).
	const geos = getGeosForIndustry(industry.id).slice(0, 6);
	return geos.map((g) => ({
		href: `/${service.id}-in-${g.id}`,
		label: `${service.label} in ${g.name}`,
	}));
}

function buildRelatedSiblingsForIndustry(
	currentService: Service,
	industry: Industry,
): CellLink[] {
	const others = getServicesForIndustry(industry.id).filter(
		(s) => s.id !== currentService.id,
	);
	return others.map((s) => ({
		href: `/${s.id}-for-${industry.id}`,
		label: `${s.label} for ${industry.label}`,
	}));
}

export function Tier4Page({ service, industry, url }: Props) {
	const faqs = buildFaqs(service, industry);
	const relatedTier3 = buildRelatedTier3(service, industry);
	const sameIndustrySiblings = buildRelatedSiblingsForIndustry(
		service,
		industry,
	);

	const subhead = `${service.shortDescription} Built for ${industry.label} — adapted to ${industry.topPainPoints.slice(0, 2).join(", ")}.`;

	const tldr = [
		`${service.label} sized to ${industry.name} unit economics (CAC ${industry.avgCacInr} ₹).`,
		`Frameleads Growth System™ adapted to ${industry.name}-specific buying behaviour.`,
		`Free 30-min ${industry.name}-scoped audit — no slides, just an honest read.`,
	];

	const industryIntro = `${industry.label} in 2026 sits in a category-specific reality: ${industry.topPainPoints.slice(0, 2).join(", and ")}. The same ${service.label.toLowerCase()} playbook that works for ${industry.id === "d2c" ? "B2B SaaS" : "D2C"} fails here because audience, intent, and conversion economics are different. Frameleads runs ${service.label.toLowerCase()} engagements across multiple ${industry.name} brands and adapts each component of the funnel to category norms.`;

	const useCases = service.topUseCases.slice(0, 5);

	const dateModified = new Date().toISOString().slice(0, 10);

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: `${service.label} for ${industry.label}`,
			provider: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
			},
			audience: {
				"@type": "BusinessAudience",
				audienceType: industry.label,
			},
			url,
			description: service.shortDescription,
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${service.label} for ${industry.label} — Frameleads Growth System™`,
			description: service.shortDescription,
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
				{ "@type": "Service", name: service.label },
				{ "@type": "Audience", name: industry.label },
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
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "https://frameleads.com",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Industries",
					item: "https://frameleads.com/industries",
				},
				{
					"@type": "ListItem",
					position: 3,
					name: `${service.label} for ${industry.label}`,
					item: url,
				},
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			url,
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: [".tldr", ".faq-answer"],
			},
		},
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main>
				<HeroServiceGeo
					serviceLabel={service.label}
					geoName={industry.label}
					subhead={subhead}
					primaryHref={`/free-marketing-audit?service=${service.id}&industry=${industry.id}&cta=tier4-top`}
					primaryLabel={`Get a free ${industry.name} audit`}
				/>
				<TLDRBlock bullets={tldr} />
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
				<MethodologyCard contextLabel={`${service.label} for ${industry.label}`} />
				<UseCasesList useCases={useCases} />
				<CTABlock
					variant="audit"
					headline={`See this applied to your ${industry.name} business.`}
					body={`30 minutes, no slides. We'll review your ${service.label.toLowerCase()} setup against ${industry.name}-specific CAC/CPC benchmarks and hand you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?service=${service.id}&industry=${industry.id}&cta=tier4-mid`}
					primaryLabel={`Book a ${industry.name} audit`}
				/>
				<FAQBlock items={faqs} />
				<RelatedCells
					heading={`${service.label} in ${industry.name}-heavy cities`}
					links={relatedTier3}
				/>
				<RelatedCells
					heading={`Other services we run for ${industry.label}`}
					links={sameIndustrySiblings}
				/>
				<ReferencesBlock references={referencesFor({ serviceId: service.id, industryId: industry.id })} />
				<TimestampStamp
					updatedAt={dateModified}
					reviewedBy={DEFAULT_AUTHOR.name}
				/>
				<CTABlock
					variant="audit"
					headline={`Run ${service.label} for ${industry.label} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${service.label.toLowerCase()} setup against the ${industry.name} benchmarks above and tell you the three highest-leverage moves — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?service=${service.id}&industry=${industry.id}&cta=tier4-bottom`}
					primaryLabel={`Get a free ${industry.name} audit`}
				/>
				<AuthorCard
					person={DEFAULT_AUTHOR}
					name={DEFAULT_AUTHOR.name}
					role={DEFAULT_AUTHOR.role}
					bio={`${DEFAULT_AUTHOR.bio} This page covers ${service.label.toLowerCase()} for ${industry.label}; numbers cited come from live client data refreshed quarterly.`}
					linkedin={DEFAULT_AUTHOR.linkedin}
					updatedAt={dateModified}
				/>
				<InboundLinksHint
					count={relatedTier3.length + sameIndustrySiblings.length}
				/>
			</main>
			<Footer />
		</>
	);
}
