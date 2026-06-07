import Link from "next/link";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { TLDRBlock } from "./TLDRBlock";
import { DefinitionBlock } from "./DefinitionBlock";
import { MethodologyCard } from "./MethodologyCard";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { RelatedCells, type CellLink } from "./RelatedCells";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { SchemaInjector } from "./SchemaInjector";
import { ListBlock } from "./ListBlock";
import { TimestampStamp } from "./TimestampStamp";
import { InboundLinksHint } from "./InboundLinksHint";
import {
	getServicesForIndustry,
	getGeosForIndustry,
	type Industry,
} from "@/lib/data";

type Props = {
	industry: Industry;
	url: string;
};

function buildFaqs(industry: Industry): FAQItem[] {
	return [
		{
			question: `What does ${industry.label} marketing actually require in 2026?`,
			answer: `${industry.label} marketing in 2026 requires three things working together: a category-aware channel mix (${industry.primaryServices.slice(0, 3).join(", ")}), unit-economics discipline (CAC ${industry.avgCacInr} ₹ as the operating band), and a creative system tuned to ${industry.topPainPoints[0]}. Generic "performance marketing" without category specifics consistently underperforms in this segment.`,
		},
		{
			question: `What does ${industry.label} marketing typically cost?`,
			answer: `Engagements typically run ₹2L–₹15L/month depending on stage and channel scope. Average CPC sits in the ${industry.avgCpcInr} ₹ band; CAC lands in ${industry.avgCacInr} ₹. The right starting tier depends on your revenue stage — most ${industry.name} engagements start with a 2-channel program and expand once unit economics prove.`,
		},
		{
			question: `Which channels matter most for ${industry.name}?`,
			answer: `For ${industry.name}, the proven channel mix is ${industry.primaryServices.join(", ")}. Each carries a specific role: lead capture, demand creation, retention, and brand. Frameleads sequences these using the Growth System — Map → Magnet → Machine → Multiply → Measure — adapted to category norms.`,
		},
		{
			question: `How long until ${industry.name} marketing shows results?`,
			answer: `Performance channels (Meta, Google) show signal in 14–60 days. Organic and content channels compound over 4–9 months. We track leading indicators week-by-week — CTR, CPC trend, conversion rate, lead quality — so you'll know the trajectory before quarterly reviews.`,
		},
		{
			question: `Where in ${industry.geoConcentration[0] ? "India" : "the market"} does ${industry.name} concentrate?`,
			answer: `${industry.name} businesses we serve cluster around ${industry.geoConcentration.slice(0, 5).join(", ")}. Geographic concentration shapes both customer acquisition (audience density, CPC) and operational considerations (compliance, broker networks where applicable).`,
		},
		{
			question: `What are the most common ${industry.name} marketing mistakes?`,
			answer: industry.topPainPoints.length
				? `The recurring three: ${industry.topPainPoints.join("; ")}. We diagnose which apply to your business in the free audit.`
				: `Most issues fall into channel saturation, weak unit economics, and creative-supply gaps. We diagnose your specific bottleneck in the audit.`,
		},
	];
}

function buildRelatedServices(industry: Industry): CellLink[] {
	const services = getServicesForIndustry(industry.id);
	return services.map((s) => ({
		href: `/${s.id}-for-${industry.id}`,
		label: `${s.label} for ${industry.label}`,
	}));
}

function buildRelatedGeos(industry: Industry): CellLink[] {
	const geos = getGeosForIndustry(industry.id);
	const headService =
		industry.primaryServices.find(
			(sid) => sid === "seo-services" || sid === "performance-marketing",
		) ?? industry.primaryServices[0];
	if (!headService) return [];
	return geos.slice(0, 8).map((g) => ({
		href: `/${headService}-for-${industry.id}-in-${g.id}`,
		label: `${industry.label} marketing in ${g.name}`,
	}));
}

export function IndustryPillarPage({ industry, url }: Props) {
	const faqs = buildFaqs(industry);
	const services = buildRelatedServices(industry);
	const geos = buildRelatedGeos(industry);

	const tldr = [
		`${industry.label} marketing — calibrated to ${industry.topPainPoints.slice(0, 1)[0]?.toLowerCase() ?? "category-specific buying behaviour"}.`,
		`Channel mix that wins ${industry.name}: ${industry.primaryServices.slice(0, 3).join(", ")}.`,
		`Free 30-min ${industry.name}-scoped audit — no slides, just an honest read.`,
	];

	const definition = `${industry.label} marketing is the operating discipline of acquiring and retaining ${industry.label.toLowerCase()} customers using a calibrated channel mix, unit-economics bands specific to the category (CAC ${industry.avgCacInr} ₹), and creative norms tuned to ${industry.topPainPoints[0]?.toLowerCase() ?? "category-specific buyer behaviour"}.`;

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: `${industry.label} Marketing`,
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
			description: `Marketing for ${industry.label} — performance, organic, and lifecycle programs adapted to category-specific unit economics.`,
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: `${industry.label} Marketing — A 2026 Operator's Playbook`,
			mainEntityOfPage: url,
			datePublished: new Date().toISOString().slice(0, 10),
			dateModified: new Date().toISOString().slice(0, 10),
			author: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
			},
			publisher: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
				logo: {
					"@type": "ImageObject",
					url: "https://frameleads.com/favicon.png",
				},
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
					name: "Industries",
					item: "https://frameleads.com/industries",
				},
				{
					"@type": "ListItem",
					position: 3,
					name: `${industry.label} Marketing`,
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
				cssSelector: [".direct-answer", ".tldr", ".faq-answer"],
			},
		},
	];

	return (
		<>
			<SchemaInjector schema={schema} />
			<Navbar />
			<main>
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1000px_300px_at_25%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<nav
							aria-label="Breadcrumb"
							className="mb-4 text-sm text-[#5A5A5A]"
						>
							<ol className="flex items-center gap-2">
								<li>
									<a
										href="/"
										className="hover:text-[#FF6B35] transition-colors"
									>
										Home
									</a>
								</li>
								<li aria-hidden>/</li>
								<li>
									<a
										href="/industries"
										className="hover:text-[#FF6B35] transition-colors"
									>
										Industries
									</a>
								</li>
								<li aria-hidden>/</li>
								<li className="text-[#2D3748]">{industry.label}</li>
							</ol>
						</nav>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Industry pillar
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{industry.label} marketing
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{industry.tagline}
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link
								href={`/free-marketing-audit?industry=${industry.id}&cta=industry-pillar-top`}
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,53,0.35)]"
							>
								Get a free 30-min {industry.name} audit
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
							>
								Talk to us
							</Link>
						</div>
					</div>
				</header>
				<DefinitionBlock>{definition}</DefinitionBlock>
				<TLDRBlock bullets={tldr} />
				<MethodologyCard contextLabel={`${industry.label} Marketing`} />
				<ListBlock
					heading={`Top pain points in ${industry.name}`}
					items={industry.topPainPoints}
				/>
				<ListBlock
					heading="Channel mix that wins this category"
					items={industry.primaryServices}
					style="chips"
				/>
				<CTABlock
					variant="audit"
					headline={`Want this scoped to your ${industry.name} business?`}
					body={`30 minutes, no slides. We'll review your current ${industry.name} marketing against the pain points and channel mix above and hand you the three highest-leverage moves.`}
					primaryHref={`/free-marketing-audit?industry=${industry.id}&cta=industry-pillar-mid`}
					primaryLabel={`Book a ${industry.name} audit`}
				/>
				<RelatedCells
					heading={`${industry.label} services we run`}
					links={services}
				/>
				<RelatedCells
					heading={`${industry.label} marketing by city`}
					links={geos}
				/>
				<FAQBlock items={faqs} />
				<TimestampStamp
					updatedAt={new Date().toISOString().slice(0, 10)}
					reviewedBy="Frameleads Editorial Team"
				/>
				<CTABlock
					variant="audit"
					headline={`Operate ${industry.label} marketing with a senior team.`}
					body={`Book a free 30-minute audit. We'll review your current ${industry.name} marketing against the category benchmarks above and tell you the three highest-leverage moves — even if you don't engage us.`}
					primaryHref={`/free-marketing-audit?industry=${industry.id}&cta=industry-pillar-bottom`}
					primaryLabel={`Get a free ${industry.name} audit`}
				/>
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio={`Frameleads runs ${industry.label} marketing across India and global priority markets. CAC and CPC bands cited come from live client data refreshed quarterly.`}
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={new Date().toISOString().slice(0, 10)}
				/>
				<InboundLinksHint count={services.length + geos.length} />
			</main>
			<Footer />
		</>
	);
}
