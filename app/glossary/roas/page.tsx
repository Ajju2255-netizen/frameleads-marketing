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

export const revalidate = 86400;

const TERM = "ROAS";
const TERM_FULL = "Return on Ad Spend";
const URL = "https://frameleads.com/glossary/roas";

export const metadata: Metadata = {
	title:
		"What is ROAS (Return on Ad Spend)? Definition, Formula & India Benchmarks | Frameleads",
	description:
		"ROAS is Return on Ad Spend — revenue per rupee spent on ads. Definition, formula, India benchmarks by category, and a free calculator.",
	alternates: { canonical: URL },
	openGraph: {
		title: "What is ROAS (Return on Ad Spend)?",
		description:
			"Definition, formula, India benchmarks across D2C beauty, fashion, real estate, F&B, and more.",
		url: URL,
		type: "article",
	},
};

const definition = (
	<>
		<strong>ROAS</strong>, or Return on Ad Spend, is the revenue generated per
		unit of advertising spend. It is calculated by dividing the total revenue
		attributable to ads by the total ad spend over the same period. ROAS is
		most useful as a tactical channel metric; for blended profitability, use
		Contribution Margin or LTV/CAC instead.
	</>
);

const tldr = [
	"ROAS = Revenue from ads ÷ Ad spend (often shown as a multiple, e.g. 4×).",
	"Channel ROAS overstates efficiency; track blended ROAS for honesty.",
	"\"Good\" ROAS is category-dependent — D2C beauty 2.5–4.5×, real estate 5–25×.",
];

const faqs: FAQItem[] = [
	{
		question: "What's a good ROAS?",
		answer:
			"It depends on category, gross margin, and stage. As channel ROAS, healthy bands in India 2026: D2C beauty 2.5–4.5×, D2C fashion 1.8–3.2×, real estate 5–25×, F&B 3–6×. As blended ROAS, expect 60–80% of channel ROAS once you account for organic-purchase deduction and iOS attribution drift.",
	},
	{
		question: "Is ROAS the same as ROI?",
		answer:
			"No. ROAS is gross-revenue-based — it ignores margin, refunds, and overheads. ROI is profit-based and requires gross margin and overhead inputs. A 4× ROAS at 25% gross margin yields just 1× ROI on the ad spend.",
	},
	{
		question: "Why is my channel ROAS higher than my blended ROAS?",
		answer:
			"Channel reports (Meta, Google) claim credit for assisted conversions and over-attribute. Blended ROAS divides total revenue by total spend across all paid channels and is honest about what acquisition is actually doing. Always operate to blended.",
	},
	{
		question: "How is ROAS used differently for D2C vs B2B?",
		answer:
			"D2C uses ROAS as a primary tactical signal because the purchase is immediate and attributable. B2B SaaS rarely uses ROAS — sales cycles are 45–120 days; instead use CAC payback period and pipeline-sourced revenue.",
	},
];

const relatedTerms = [
	{ slug: "cac", label: "CAC" },
];

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "DefinedTerm",
		name: TERM,
		alternateName: TERM_FULL,
		description:
			"Return on Ad Spend — revenue generated per unit of advertising spend.",
		inDefinedTermSet: "https://frameleads.com/glossary",
		url: URL,
	},
	{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "What is ROAS (Return on Ad Spend)?",
		mainEntityOfPage: URL,
		datePublished: "2026-05-05",
		dateModified: "2026-05-05",
		author: {
			"@type": "Organization",
			name: "Frameleads Editorial Team",
			url: "https://frameleads.com/about",
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

export default function ROASGlossaryPage() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<main>
				<HeroGlossary
					term={TERM}
					expansion={TERM_FULL}
					subhead="Definition, formula, India benchmarks, and the channel-vs-blended distinction that decides if you're profitable."
				/>
				<DefinitionBlock>{definition}</DefinitionBlock>
				<TLDRBlock bullets={tldr} />
				<FormulaCard
					prose="ROAS equals the total revenue attributable to ads, divided by the ad spend over the same period. It is typically expressed as a multiple (e.g., 4×) or a percentage (e.g., 400%)."
					formula={"ROAS = Revenue from Ads ÷ Ad Spend"}
					example={{
						input: "Ad spend ₹12,00,000 · attributed revenue ₹54,00,000",
						output: "ROAS = 4.5×",
					}}
				/>
				<Prose>
					<h2>ROAS vs ROI — the trap</h2>
					<p>
						ROAS is <em>revenue</em>-based; ROI is <em>profit</em>-based. A
						hero 4× ROAS at 25% contribution margin is only 1× ROI — every
						rupee of ad spend produces ₹1 of profit. Most "we hit 5× ROAS!"
						posts on LinkedIn are silent about gross margin. Always pair ROAS
						with contribution margin before celebrating.
					</p>
					<h2>Channel ROAS vs blended ROAS</h2>
					<p>
						Channel ROAS is what Meta, Google, and Performance Max report.
						Each platform claims credit for whatever conversion it can attach a
						pixel to — including conversions a customer would have made
						organically. Blended ROAS is total revenue divided by total paid
						spend, regardless of channel. Channel ROAS typically inflates
						25–60% above blended.
					</p>
					<h2>India benchmarks (2026)</h2>
					<ul>
						<li>D2C beauty (channel): 2.5–4.5× · (blended): 2.0–3.5×</li>
						<li>D2C fashion (channel): 1.8–3.2×</li>
						<li>Real estate (channel): 5–25× — high AOV, low purchase frequency</li>
						<li>F&B / restaurant (channel): 3–6×</li>
						<li>SaaS (B2B): not directly applicable — use CAC payback</li>
					</ul>
					<p>
						Source: Frameleads aggregated client data plus Shopify Plus India
						2025 outlook. Bands compress in saturated CPM regimes.
					</p>
					<h2>Common mistakes</h2>
					<ul>
						<li>Optimising to channel ROAS while blended ROAS drifts down.</li>
						<li>Ignoring iOS 17 attribution drift (Meta over-reports by 8–22%).</li>
						<li>Confusing ROAS and ROI in board decks — never do this.</li>
						<li>Chasing high ROAS with narrow audiences that cap scale.</li>
					</ul>
				</Prose>
				<ExampleBlock title="Worked example — Mumbai D2C beauty brand">
					<p>
						A Mumbai D2C beauty brand spent <strong>₹14L on Meta</strong> in
						October 2025; Meta-attributed revenue was <strong>₹49L</strong>.
					</p>
					<p>
						<strong>Channel ROAS = 3.5×.</strong>
					</p>
					<p>
						But blended (after iOS attribution drift adjustment, organic-purchase
						deduction): <strong>2.6×</strong>. With a contribution margin of
						32%, net profit per ₹1 of ad spend is{" "}
						<strong>₹0.32 × 2.6 = ₹0.83</strong> — contribution-positive but
						tight.
					</p>
					<p>
						Conclusion: lift AOV, lower COGS, or shift channel mix toward
						organic and email — don't double down on Meta until the blended
						number improves.
					</p>
				</ExampleBlock>
				<FAQBlock items={faqs} />
				<RelatedTerms terms={relatedTerms} />
				<CTABlock variant="audit" />
				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance marketing operators"
					bio="Frameleads runs paid acquisition for Indian D2C and SaaS brands. ROAS bands cited here come from live client data plus public industry reports — refreshed annually."
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt="May 5, 2026"
				/>
			</main>
		</>
	);
}
