import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { TLDRBlock } from "./TLDRBlock";
import { MethodologyCard } from "./MethodologyCard";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { HeroServiceGeo } from "./HeroServiceGeo";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import {
	getServicesForIndustry,
	getGeosForIndustry,
	type Service,
	type Industry,
	type Geo,
} from "@/lib/data";

type Props = {
	service: Service;
	industry: Industry;
	geo: Geo;
	url: string;
};

function buildIntersectionContext(
	service: Service,
	industry: Industry,
	geo: Geo,
): string {
	return `${industry.label} in ${geo.name} sits at a specific intersection: the local economic mix concentrates around ${geo.topIndustries.slice(0, 3).join(", ")}, while ${industry.name} as a category brings ${industry.topPainPoints.slice(0, 2).join(" and ")} to every ${service.label.toLowerCase()} engagement. ${geo.landmarks.length ? `Areas where ${industry.name} concentrates in ${geo.name} include ${geo.landmarks.slice(0, 4).join(", ")}.` : ""} The Frameleads ${service.label.toLowerCase()} playbook for ${industry.name} in ${geo.name} adapts the standard Growth System to these specifics — bid targeting, creative norms, compliance, and case-study fit are all calibrated to this exact cell rather than imported from a generic India-wide template.`;
}

function buildFaqs(
	service: Service,
	industry: Industry,
	geo: Geo,
): FAQItem[] {
	return [
		{
			question: `How is ${service.label} different for ${industry.name} in ${geo.name} vs other cities?`,
			answer: `${geo.name} carries a specific economic mix (${geo.topIndustries.slice(0, 3).join(", ")}). For ${industry.name}, that changes both creative fit and channel weight versus, say, Mumbai or Bangalore. Frameleads runs ${industry.name} ${service.label.toLowerCase()} programs across multiple ${geo.country ?? "Indian"} cities and adapts each to local search demand, broker/distribution networks, and regulatory specifics — rather than copy-pasting a national playbook.`,
		},
		{
			question: `What's a typical ${service.label} budget for ${industry.label} in ${geo.name}?`,
			answer: `${industry.name} engagements run with category-specific economics — average CPC ${industry.avgCpcInr} ₹, typical CAC ${industry.avgCacInr} ₹. ${geo.name}-specific dynamics shift these bands by 15–35% depending on competition and seasonality. Most ${industry.name} retainers in ${geo.name} start at ₹1.5L–₹6L/month and scale with results.`,
		},
		{
			question: `Are there ${industry.name}-specific regulations in ${geo.name}?`,
			answer: `${industry.name === "Healthcare" ? `Indian healthcare must respect DPDP Act + Medical Council guidelines on advertising. ${geo.name}-specific bodies may add local enforcement, especially around patient testimonials and clinical claims.` : industry.name === "Real Estate" ? `Indian real estate is RERA-bound — every project ad must include the project registration number. ${geo.name}-specific RERA authority handles disputes and approvals locally.` : industry.name === "Financial Services" ? `RBI/SEBI/IRDAI rules apply nationally. Local broker associations in ${geo.name} may add disclosure norms.` : `Standard Indian compliance applies — DPDP for personal data, GST for invoicing, sectoral rules per industry. Local ${geo.name} authorities rarely add ${industry.name}-specific rules beyond national ones.`}`,
		},
		{
			question: `Do you have ${industry.name} clients in ${geo.name}?`,
			answer: `Frameleads runs active and past engagements across ${industry.name} brands in ${geo.country ?? "India"}. Specific ${geo.name} portfolio details are shared during the discovery call rather than published — many clients prefer confidentiality. Book a free 30-minute audit and we'll match the closest portfolio example to your situation.`,
		},
	];
}

function buildRelatedSiblings(
	service: Service,
	industry: Industry,
	currentGeo: Geo,
): { sameIndustryOtherGeos: CellLink[]; sameGeoOtherServices: CellLink[] } {
	const otherGeos = getGeosForIndustry(industry.id)
		.filter((g) => g.id !== currentGeo.id)
		.slice(0, 6)
		.map((g) => ({
			href: `/${service.id}-for-${industry.id}-in-${g.id}`,
			label: `${service.label} for ${industry.label} in ${g.name}`,
		}));

	const otherServices = getServicesForIndustry(industry.id)
		.filter((s) => s.id !== service.id)
		.slice(0, 6)
		.map((s) => ({
			href: `/${s.id}-for-${industry.id}-in-${currentGeo.id}`,
			label: `${s.label} for ${industry.label} in ${currentGeo.name}`,
		}));

	return { sameIndustryOtherGeos: otherGeos, sameGeoOtherServices: otherServices };
}

export function Tier5Page({ service, industry, geo, url }: Props) {
	const intersection = buildIntersectionContext(service, industry, geo);
	const faqs = buildFaqs(service, industry, geo);
	const { sameIndustryOtherGeos, sameGeoOtherServices } = buildRelatedSiblings(
		service,
		industry,
		geo,
	);

	const subhead = `${service.shortDescription} Calibrated to ${industry.label} in ${geo.name} — ${industry.topPainPoints[0]}.`;

	const tldr = [
		`${service.label} for ${industry.name} in ${geo.name} — adapted to local economics + category norms.`,
		`Frameleads Growth System™ across all 5 stages, applied to this exact cell.`,
		`Free 30-min audit — scoped to ${geo.name} ${industry.name} unit economics.`,
	];

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: `${service.label} for ${industry.label} in ${geo.name}`,
			provider: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
			},
			areaServed: {
				"@type": "City",
				name: geo.name,
				...(geo.country ? { containedIn: geo.country } : {}),
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
			"@type": "LocalBusiness",
			name: `Frameleads — ${service.label} for ${industry.label} in ${geo.name}`,
			areaServed: { "@type": "City", name: geo.name },
			url,
			parentOrganization: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
			},
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
					name: industry.label,
					item: `https://frameleads.com/${industry.id}-marketing`,
				},
				{
					"@type": "ListItem",
					position: 3,
					name: `${service.label} for ${industry.label} in ${geo.name}`,
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
					serviceLabel={`${service.label} for ${industry.label}`}
					geoName={geo.name}
					subhead={subhead}
					primaryHref={`/free-marketing-audit?service=${service.id}&industry=${industry.id}&geo=${geo.id}`}
					primaryLabel={`Get a free ${geo.name} ${industry.name} audit`}
				/>
				<TLDRBlock bullets={tldr} />
				<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
					<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						The intersection
					</div>
					<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
						Why this exact cell
					</h2>
					<p className="direct-answer mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#2D3748]/90">
						{intersection}
					</p>
				</section>
				<MethodologyCard
					contextLabel={`${service.label} for ${industry.label} in ${geo.name}`}
				/>
				<FAQBlock items={faqs} />
				<RelatedCells
					heading={`${service.label} for ${industry.label} in other cities`}
					links={sameIndustryOtherGeos}
				/>
				<RelatedCells
					heading={`Other services we run for ${industry.label} in ${geo.name}`}
					links={sameGeoOtherServices}
				/>
				<TimestampStamp
					updatedAt={new Date().toISOString().slice(0, 10)}
					reviewedBy="Frameleads Editorial Team"
				/>
				<CTABlock
					variant="audit"
					headline={`Run ${service.label} for ${industry.label} in ${geo.name} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${service.label.toLowerCase()} setup against the ${geo.name}-${industry.name} benchmarks — and tell you the three highest-leverage moves, even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?service=${service.id}&industry=${industry.id}&geo=${geo.id}`}
					primaryLabel={`Get a free ${geo.name} ${industry.name} audit`}
				/>
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads runs ${service.label.toLowerCase()} for ${industry.label} businesses across ${geo.country ?? "India"}. The ${geo.name}-${industry.name} bands cited come from live client data refreshed quarterly.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={new Date().toISOString().slice(0, 10)}
				/>
				<InboundLinksHint
					count={sameIndustryOtherGeos.length + sameGeoOtherServices.length}
				/>
			</main>
			<Footer />
		</>
	);
}
