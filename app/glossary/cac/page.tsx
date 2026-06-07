import type { Metadata } from "next";
import { HeroGlossary } from "@/components/templates/HeroGlossary";
import { TLDRBlock } from "@/components/templates/TLDRBlock";
import { DefinitionBlock } from "@/components/templates/DefinitionBlock";
import { FormulaCard } from "@/components/templates/FormulaCard";
import { ExampleBlock } from "@/components/templates/ExampleBlock";
import { Prose } from "@/components/templates/Prose";
import { FAQBlock, type FAQItem } from "@/components/templates/FAQBlock";
import { RelatedTerms } from "@/components/templates/RelatedTerms";
import { CTABlock } from "@/components/templates/CTABlock";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { SchemaInjector } from "@/components/templates/SchemaInjector";

// ISR with 24h revalidate; tag for selective flushing.
export const revalidate = 86400;

const TERM = "CAC";
const TERM_FULL = "Customer Acquisition Cost";
const URL = "https://frameleads.com/glossary/cac";

export const metadata: Metadata = {
	title:
		"What is CAC (Customer Acquisition Cost)? Definition, Formula & Examples | Frameleads",
	description:
		"CAC is Customer Acquisition Cost — the total cost to acquire one paying customer. Definition, formula, India benchmarks, and a free calculator.",
	alternates: { canonical: URL },
	openGraph: {
		title: "What is CAC (Customer Acquisition Cost)?",
		description:
			"Definition, formula, India benchmarks across D2C, SaaS, healthcare, and more.",
		url: URL,
		type: "article",
	},
};

const definition = (
	<>
		<strong>CAC</strong>, or Customer Acquisition Cost, is the total cost a
		business spends to acquire one paying customer. It is calculated by dividing
		the total marketing and sales spend over a period by the number of new
		customers acquired in that period. CAC is most useful when paired with
		Lifetime Value (LTV) to assess whether acquisition spending is profitable.
	</>
);

const tldr = [
	"CAC = (Marketing + Sales spend) ÷ new customers acquired in the same period.",
	"Track blended CAC, not just channel CAC — channel reports inflate.",
	"Healthy is when LTV/CAC ≥ 3 and CAC payback < 12–18 months.",
];

const faqs: FAQItem[] = [
	{
		question: "What's a good CAC?",
		answer:
			"There is no universal answer — \"good\" CAC is category- and stage-dependent. Healthy Indian D2C beauty brands run CAC of ₹250–₹2,200; SMB B2B runs ₹3,000–₹25,000; enterprise SaaS runs ₹15,000–₹3,00,000. The honest test is the LTV/CAC ratio: aim for ≥ 3, and a CAC payback period under 12–18 months.",
	},
	{
		question: "What's the difference between CAC and CPA?",
		answer:
			"CAC is the cost of acquiring a paying customer. CPA (Cost Per Acquisition) is broader — it can refer to the cost per any defined action (lead, signup, demo, install). Channel reports show CPA; CAC requires you to attribute spend across the full funnel and divide by actual customers acquired, including sales overhead.",
	},
	{
		question: "How do I lower my CAC?",
		answer:
			"Three reliable levers: tighten audience and creative on paid (cuts wasted spend), build owned channels (organic, email, WhatsApp) so the blended denominator improves, and improve conversion rate at the bottleneck stage. CRO at the checkout typically lifts CAC efficiency 8–25% before any channel change.",
	},
	{
		question: "Should I track channel CAC or blended CAC?",
		answer:
			"Both — but make decisions on blended. Channel CAC tells you which campaign is efficient; blended CAC tells you whether the business is acquiring profitably. Channel reports often double-count assisted conversions; blended forces honesty.",
	},
];

const relatedTerms = [
	{ slug: "roas", label: "ROAS" },
];

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "DefinedTerm",
		name: TERM,
		alternateName: TERM_FULL,
		description:
			"Customer Acquisition Cost — the total marketing and sales spend per new paying customer.",
		inDefinedTermSet: "https://frameleads.com/glossary",
		url: URL,
	},
	{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "What is CAC (Customer Acquisition Cost)?",
		mainEntityOfPage: URL,
		datePublished: "2026-05-05",
		dateModified: "2026-05-05",
		author: {
			"@type": "Person",
			name: "Frameleads Editorial Team",
			url: "https://frameleads.com/our-team",
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
		"@type": "WebPage",
		url: URL,
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: [".direct-answer", ".tldr", ".faq-answer"],
		},
	},
];

export default function CACGlossaryPage() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<main>
				<HeroGlossary
					term={TERM}
					expansion={TERM_FULL}
					subhead="Definition, formula, India benchmarks, and what 'healthy' looks like by stage."
				/>
				<DefinitionBlock>{definition}</DefinitionBlock>
				<TLDRBlock bullets={tldr} />
				<FormulaCard
					prose="CAC equals the sum of marketing and sales spend over a period, divided by the number of new customers acquired in that period."
					formula={"CAC = (Marketing Spend + Sales Spend) ÷ New Customers Acquired"}
					example={{
						input: "Q3 spend ₹14,00,000 · new customers 280",
						output: "CAC = ₹5,000 per customer",
					}}
				/>
				<Prose>
					<h2>Why CAC matters</h2>
					<p>
						CAC is the single number that says whether your acquisition engine
						is sustainable. When paired with Lifetime Value, it tells you the
						unit economics of every new customer. A CAC of ₹5,000 against an
						LTV of ₹15,000 (3× ratio) is healthy; the same CAC against an LTV
						of ₹6,000 is a slow leak.
					</p>
					<h2>Channel CAC vs blended CAC</h2>
					<p>
						Channel CAC is what Meta or Google reports for that platform.
						Blended CAC is the entire business's spend divided by all
						customers acquired — including organic, referral, and word-of-mouth.
						Channel CAC <em>always</em> looks more efficient than blended,
						because every channel claims credit for assisted conversions. We
						set targets on blended; we operate against channel.
					</p>
					<h2>India benchmarks (2026)</h2>
					<ul>
						<li>D2C beauty: ₹250–₹2,200</li>
						<li>D2C fashion: ₹200–₹1,500</li>
						<li>SMB B2B: ₹3,000–₹25,000</li>
						<li>Enterprise SaaS: ₹15,000–₹3,00,000</li>
						<li>Healthcare clinic appointment: ₹500–₹15,000</li>
					</ul>
					<p>
						Source: Frameleads aggregated client data (n ≈ 14, 2025) plus
						RedSeer, Inc42 D2C reports. Bands widen as products move from
						impulse to considered.
					</p>
					<h2>Common mistakes</h2>
					<ul>
						<li>
							Using "leads acquired" instead of "customers acquired" —
							inflates the perceived efficiency by 3–10×.
						</li>
						<li>
							Ignoring fully-loaded sales costs (salaries, tools, headcount).
						</li>
						<li>
							Not adjusting for refunds and 30-day churn.
						</li>
						<li>
							Optimising channel CAC in isolation while blended CAC drifts up.
						</li>
					</ul>
				</Prose>
				<ExampleBlock title="Worked example — Mumbai D2C beauty brand">
					<p>
						A Mumbai-based D2C beauty brand spent <strong>₹8L on Meta</strong>{" "}
						+ ₹2L on Google + ₹1L on a creator agency + ₹3L on internal
						salaries (proportional) in October 2025. They acquired{" "}
						<strong>480 new customers</strong>.
					</p>
					<p>
						<strong>CAC = ₹14L ÷ 480 = ₹2,917.</strong>
					</p>
					<p>
						Their target CAC band for healthy LTV/CAC was{" "}
						<strong>≤ ₹2,000</strong>. Action: tightened audience + creative
						supply test → CAC dropped to <strong>₹1,820 in November 2025</strong>{" "}
						(36% reduction without cutting spend).
					</p>
				</ExampleBlock>
				<FAQBlock items={faqs} />
				<RelatedTerms terms={relatedTerms} />
				<CTABlock variant="audit" />
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance marketing operators"
					bio="Frameleads is an Indian performance-marketing agency. Our editorial team writes glossary entries from operator experience across 80+ live D2C, SaaS, and SMB engagements."
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt="May 5, 2026"
				/>
			</main>
		</>
	);
}
