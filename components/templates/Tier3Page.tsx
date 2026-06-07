import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { HeroServiceGeo } from "./HeroServiceGeo";
import { TLDRBlock } from "./TLDRBlock";
import { LocalContextBlock } from "./LocalContextBlock";
import { MethodologyCard } from "./MethodologyCard";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import {
	getServicesForIndustry,
	getIndustriesForGeo,
	geosAll,
	type Service,
	type Geo,
} from "@/lib/data";

type Props = {
	service: Service;
	geo: Geo;
	url: string;
};

function buildFaqs(service: Service, geo: Geo): FAQItem[] {
	const inGeo = `in ${geo.name}`;
	return [
		{
			question: `What does ${service.label} cost in ${geo.name}?`,
			answer: `${service.label} engagements in ${geo.name} typically run within Frameleads' standard band, scoped to local market dynamics. Average CPC ${inGeo} sits around ${service.avgCpcInr} ₹ depending on intent, and typical CAC bands fall in ${service.avgCacInr} ₹. The right retainer for your business depends on your category, stage, and target growth rate — book a free audit to scope it properly.`,
		},
		{
			question: `How long until ${service.label} ${inGeo} shows results?`,
			answer: `Realistic timeline is ${service.timeToResults}. ${geo.name}-specific factors that compress or extend this include ${geo.topIndustries.length ? `local industry mix (${geo.topIndustries.slice(0, 2).join(", ")})` : "the local industry mix"} and the tier of your starting domain authority. We track ${service.primaryKpi} as the leading indicator from week 2 onward.`,
		},
		{
			question: `How is ${service.label} different in ${geo.name} vs other cities?`,
			answer: `${geo.name} carries a specific economic mix — ${geo.topIndustries.slice(0, 3).join(", ")} are over-represented relative to other Indian metros. That changes both creative fit and channel mix. Frameleads' team adapts the playbook to ${geo.name}-specific search demand and cultural nuance rather than running a generic India playbook.`,
		},
		{
			question: `Which industries does Frameleads serve in ${geo.name}?`,
			answer: `Across ${geo.name} we run ${service.label} for ${geo.topIndustries.slice(0, 5).join(", ")}, among others. Each vertical has its own creative norms, regulatory considerations, and benchmark CACs.`,
		},
		{
			question: `Do you have a presence in ${geo.name}?`,
			answer: `Frameleads operates a remote-first team with deep ${geo.name}-specific portfolio experience. ${geo.landmarks.length ? `Areas we work across regularly include ${geo.landmarks.slice(0, 4).join(", ")}.` : ""} Onsite visits for kickoff and quarterly reviews are arrangeable for retainers ≥ ₹3L/month.`,
		},
	];
}

function buildRelatedSiblingsForCity(
	currentService: Service,
	geo: Geo,
): CellLink[] {
	// Sibling Tier 3 pages: same city, different services from the geo's top industries' primary services.
	const industries = getIndustriesForGeo(geo.id);
	const candidateServiceIds = new Set<string>();
	for (const ind of industries) {
		for (const sid of ind.primaryServices) candidateServiceIds.add(sid);
	}
	candidateServiceIds.delete(currentService.id);

	const links: CellLink[] = [];
	for (const sid of Array.from(candidateServiceIds).slice(0, 6)) {
		links.push({
			href: `/${sid}-in-${geo.id}`,
			label: `${getServiceLabel(sid)} in ${geo.name}`,
		});
	}
	return links;
}

function getServiceLabel(id: string): string {
	const map: Record<string, string> = {
		"seo-services": "SEO Services",
		"ppc-management": "PPC Management",
		"meta-ads": "Meta Ads",
		"google-ads": "Google Ads",
		"linkedin-ads": "LinkedIn Ads",
		"youtube-ads": "YouTube Ads",
		"performance-marketing": "Performance Marketing",
		"content-marketing": "Content Marketing",
		"social-media-marketing": "Social Media Marketing",
		"whatsapp-marketing": "WhatsApp Marketing",
		"email-marketing": "Email Marketing",
		"conversion-rate-optimization": "CRO",
	};
	return map[id] ?? id;
}

function buildRelatedSiblingsForService(
	service: Service,
	currentGeo: Geo,
): CellLink[] {
	// Sibling Tier 3 pages: same service, neighboring cities (top 6).
	const others = geosAll.filter(
		(g) =>
			g.id !== currentGeo.id &&
			((currentGeo.country && g.country === currentGeo.country) ||
				(!currentGeo.country &&
					(g.country === undefined || g.country === "India"))),
	);
	const sorted = others.sort((a, b) => (a.tier ?? 99) - (b.tier ?? 99));
	return sorted.slice(0, 6).map((g) => ({
		href: `/${service.id}-in-${g.id}`,
		label: `${service.label} in ${g.name}`,
	}));
}

export function Tier3Page({ service, geo, url }: Props) {
	const faqs = buildFaqs(service, geo);
	const cityServiceSiblings = buildRelatedSiblingsForCity(service, geo);
	const sameServiceSiblings = buildRelatedSiblingsForService(service, geo);

	const subhead = `${service.shortDescription} Built for ${geo.name} — calibrated to ${geo.topIndustries.slice(0, 3).join(", ")}.`;

	const tldr = [
		`${service.label} sized to ${geo.name}'s industry mix (${geo.topIndustries.slice(0, 2).join(" + ")}).`,
		`Frameleads Growth System™: Map → Magnet → Machine → Multiply → Measure.`,
		`Free 30-min ${geo.name}-scoped audit — no slides, just an honest read.`,
	];

	const localIntro = `${geo.name} is one of ${geo.country ? `${geo.country}'s` : "India's"} key markets for ${service.label}. The local economic mix — ${geo.topIndustries.slice(0, 4).join(", ")} — shapes both search demand and the creative that converts. We've operated programs across ${geo.landmarks.length ? `${geo.landmarks.slice(0, 3).join(", ")}, and other corridors` : "the city"} and tune the playbook to what works in this market specifically rather than running a generic India template.`;

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: `${service.label} in ${geo.name}`,
			provider: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
			},
			areaServed: {
				"@type": geo.country ? "City" : "City",
				name: geo.name,
				...(geo.country ? { containedIn: geo.country } : {}),
			},
			url,
			description: service.shortDescription,
		},
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			name: `Frameleads — ${service.label} in ${geo.name}`,
			areaServed: { "@type": "City", name: geo.name },
			url,
			telephone: "+91-6362821368",
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
					name: "Locations",
					item: "https://frameleads.com/locations",
				},
				{
					"@type": "ListItem",
					position: 3,
					name: `${service.label} in ${geo.name}`,
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
					geoName={geo.name}
					subhead={subhead}
					primaryHref={`/free-marketing-audit?service=${service.id}&geo=${geo.id}`}
					primaryLabel={`Get a free ${geo.name}-scoped audit`}
				/>
				<TLDRBlock bullets={tldr} />
				<LocalContextBlock
					geoName={geo.name}
					state={geo.state}
					country={geo.country}
					population={geo.population}
					topIndustries={geo.topIndustries}
					landmarks={geo.landmarks}
					avgCpc={service.avgCpcInr}
					avgCac={service.avgCacInr}
					intro={localIntro}
				/>
				<MethodologyCard contextLabel={`${service.label} in ${geo.name}`} />
				<FAQBlock items={faqs} />
				<RelatedCells
					heading={`Other services we run in ${geo.name}`}
					links={cityServiceSiblings}
				/>
				<RelatedCells
					heading={`${service.label} in nearby cities`}
					links={sameServiceSiblings}
				/>
				<TimestampStamp
					updatedAt={new Date().toISOString().slice(0, 10)}
					reviewedBy="Frameleads Editorial Team"
				/>
				<CTABlock
					variant="audit"
					headline={`Run ${service.label} in ${geo.name} with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${service.label.toLowerCase()} setup against the ${geo.name} benchmarks above and tell you the three highest-leverage moves — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?service=${service.id}&geo=${geo.id}`}
					primaryLabel={`Get a free ${geo.name} audit`}
				/>
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads runs ${service.label.toLowerCase()} engagements across ${geo.name} and ${geo.country ?? "India"}. Numbers cited come from live client data refreshed quarterly.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={new Date().toISOString().slice(0, 10)}
				/>
				<InboundLinksHint
					count={cityServiceSiblings.length + sameServiceSiblings.length}
				/>
			</main>
			<Footer />
		</>
	);
}
