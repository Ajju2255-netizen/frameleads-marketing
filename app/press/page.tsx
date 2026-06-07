import type { Metadata } from "next";
import Link from "next/link";
import { SchemaInjector } from "@/components/templates/SchemaInjector";
import { Breadcrumb } from "@/components/templates/Breadcrumb";
import { TLDRBlock } from "@/components/templates/TLDRBlock";
import { CTABlock } from "@/components/templates/CTABlock";
import { TimestampStamp } from "@/components/templates/TimestampStamp";
import { AuthorCard } from "@/components/templates/AuthorCard";
import { DEFAULT_AUTHOR } from "@/lib/data/authors";

export const revalidate = 86400;

const SITE_URL = "https://frameleads.com";
const URL = `${SITE_URL}/press`;

export const metadata: Metadata = {
	title: "Press & Media — Shark Tank India, Founder Credentials | Frameleads",
	description:
		"Frameleads in the press — Shark Tank India founder credential, media mentions, brand assets, and a press-contact line for journalists, podcasters, and editors covering marketing + agency stories.",
	alternates: { canonical: URL },
	openGraph: {
		title: "Press & Media — Frameleads",
		description: "Shark Tank India + media mentions + brand assets + press contact.",
		url: URL,
		type: "article",
	},
};

const today = new Date().toISOString().slice(0, 10);

const schema = [
	{
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: "Press & Media — Frameleads",
		description: "Frameleads in the press, founder credentials, brand assets, and press-contact information.",
		url: URL,
		datePublished: "2025-12-01",
		dateModified: today,
		inLanguage: "en-IN",
		about: { "@id": `${SITE_URL}#organization` },
		mainEntity: { "@id": `${SITE_URL}#organization` },
		author: { "@type": "Person", "@id": `${DEFAULT_AUTHOR.url}#person`, name: DEFAULT_AUTHOR.name },
		publisher: { "@id": `${SITE_URL}#organization` },
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Press", item: URL },
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: URL,
		speakable: { "@type": "SpeakableSpecification", cssSelector: [".tldr", ".direct-answer"] },
	},
];

export default function PressPage() {
	return (
		<>
			<SchemaInjector schema={schema} />
			<main id="main">
				<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
					<div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]" />
					<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
						<Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Press" }]} />
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Press & Media
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">Press & Media</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5A5A5A]">
							Frameleads founder Ajsal Abbas appeared on Shark Tank India and has spent 15+ years building and scaling brands across India and global markets. This page is for journalists, podcast hosts, editors, and conference programmers — brand assets, founder bio, press-friendly facts, and direct contact.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<a
								href="mailto:ajsal@frameleads.com?subject=Press%20inquiry"
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5"
							>
								Press inquiry → ajsal@frameleads.com<span aria-hidden>→</span>
							</a>
							<Link href="/our-team" className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-5 py-3 text-sm font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]">
								Meet the team
							</Link>
						</div>
					</div>
				</header>

				<TLDRBlock
					bullets={[
						"Frameleads founder Ajsal Abbas appeared on Shark Tank India.",
						"15+ years building and scaling brands across India + global markets.",
						"Headquartered in Bangalore (Electronic City). Press contact: ajsal@frameleads.com.",
						"Frameleads runs the open Frameleads Growth System™ across ~200 lifetime engagements; ~₹9Cr in attributed client pipeline tracked.",
					]}
				/>

				{/* Shark Tank India */}
				<section
					id="shark-tank"
					aria-labelledby="shark-tank-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Shark Tank India</div>
					<h2 id="shark-tank-heading" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Founder credential — Shark Tank India
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#2D3748]/90">
						Frameleads founder <strong>Ajsal Abbas</strong> appeared on Shark Tank India. The appearance is a verifiable founder credential — useful for editors confirming credibility, for podcasters slotting a guest, and for conference programmers vetting speakers. Reach out for high-resolution episode stills, broadcast timestamps, or follow-up commentary.
					</p>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2">
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Verifiable founder appearance</div>
							<p className="mt-1 text-[13.5px] text-[#5A5A5A]">Episode and broadcast details available on request via ajsal@frameleads.com.</p>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Press-ready commentary</div>
							<p className="mt-1 text-[13.5px] text-[#5A5A5A]">Founder available for quote / interview on agency-side growth, performance marketing trends in India, and Shark Tank pitch-deck breakdowns.</p>
						</li>
					</ul>
				</section>

				{/* Founder bio */}
				<section
					id="founder-bio"
					aria-labelledby="founder-bio-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Founder bio</div>
					<h2 id="founder-bio-heading" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Ajsal Abbas — Founder & CEO
					</h2>
					<div className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#2D3748]/90">
						<p>
							<strong>Short bio (1 line):</strong> Founder & CEO of Frameleads. Shark Tank India founder. 15+ years building and scaling D2C, SaaS, and SMB brands across India and global priority markets.
						</p>
						<p>
							<strong>Medium bio (3 lines):</strong> Ajsal Abbas is the founder of Frameleads, a Bangalore-based performance + organic marketing agency. He appeared on Shark Tank India as a founder and has spent the last 15+ years running paid acquisition, SEO, content, and CRO engagements across ~200 brands — generating ~₹9Cr in attributed client pipeline. Frameleads runs the open Frameleads Growth System™ methodology across India and the UAE / Saudi Arabia / Singapore / UK / US / Canada / Australia priority markets.
						</p>
						<p>
							<strong>Speaking topics:</strong> performance marketing in India in 2026; SEO + AI-Overview / GEO citation strategy; D2C unit economics; B2B SaaS pipeline math; agency-side vs in-house growth tradeoffs; Shark Tank pitch-deck post-mortems.
						</p>
					</div>
					<div className="mt-5 flex flex-wrap gap-3">
						<a
							href="https://www.linkedin.com/in/ajsalabbas/"
							target="_blank"
							rel="noopener"
							className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-4 py-2 text-[13px] font-semibold text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
						>
							LinkedIn → ajsalabbas
						</a>
						<a
							href="https://www.youtube.com/@ajsalabbas8093"
							target="_blank"
							rel="noopener"
							className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-4 py-2 text-[13px] font-semibold text-[#2D3748] hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
						>
							YouTube → @ajsalabbas8093
						</a>
					</div>
				</section>

				{/* Company facts */}
				<section
					id="company-facts"
					aria-labelledby="company-facts-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Company facts</div>
					<h2 id="company-facts-heading" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Press-ready facts about Frameleads
					</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2">
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Headquarters</div>
							<div className="mt-1 text-[15px] font-semibold text-[#2D3748]">Bangalore (Electronic City)</div>
							<div className="mt-1 text-[13px] text-[#5A5A5A]">Karnataka, India</div>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Founded</div>
							<div className="mt-1 text-[15px] font-semibold text-[#2D3748]">By founder Ajsal Abbas</div>
							<div className="mt-1 text-[13px] text-[#5A5A5A]">15+ year operator history</div>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Engagement footprint</div>
							<div className="mt-1 text-[15px] font-semibold text-[#2D3748]">~200 lifetime engagements</div>
							<div className="mt-1 text-[13px] text-[#5A5A5A]">D2C + B2B SaaS + healthcare + real estate + finance</div>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Attribution tracked</div>
							<div className="mt-1 text-[15px] font-semibold text-[#2D3748]">~₹9Cr client pipeline</div>
							<div className="mt-1 text-[13px] text-[#5A5A5A]">Server-side attribution across multi-quarter retainers</div>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Methodology</div>
							<div className="mt-1 text-[15px] font-semibold text-[#2D3748]">Frameleads Growth System™</div>
							<div className="mt-1 text-[13px] text-[#5A5A5A]">Published openly at /frameleads-growth-system</div>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Geographies served</div>
							<div className="mt-1 text-[15px] font-semibold text-[#2D3748]">India + UAE + KSA + SGP + UK + US + CA + AU</div>
							<div className="mt-1 text-[13px] text-[#5A5A5A]">8 country footprint; 128 city-level cells</div>
						</li>
					</ul>
				</section>

				{/* Media mentions — placeholder until URLs land */}
				<section
					id="media-mentions"
					aria-labelledby="media-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Media mentions</div>
					<h2 id="media-heading" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Frameleads + Ajsal Abbas in the press
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						Selected appearances and coverage. Reach out at <a href="mailto:ajsal@frameleads.com" className="text-[#FF6B35] underline decoration-[#FFE4D6] underline-offset-4 hover:decoration-[#FF6B35]">ajsal@frameleads.com</a> for a current press kit including high-resolution headshots, broadcast clips, and quote-ready commentary.
					</p>
					<ul className="mt-5 space-y-3">
						<li className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
							<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">Shark Tank India — founder appearance</div>
							<div className="mt-1 text-[13.5px] text-[#5A5A5A]">Aired on Sony LIV. Episode details on request.</div>
						</li>
						<li className="rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] p-4">
							<div className="font-poppins text-[14px] font-semibold text-[#5A5A5A]">More coverage — full kit available on request</div>
							<div className="mt-1 text-[12.5px] text-[#5A5A5A]">Send a one-line note to ajsal@frameleads.com and we'll share the current media kit with active links, broadcast clips, and bylined commentary.</div>
						</li>
					</ul>
				</section>

				{/* Brand assets */}
				<section
					id="brand-assets"
					aria-labelledby="brand-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Brand assets</div>
					<h2 id="brand-heading" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Logo, colours, founder photography
					</h2>
					<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
						For logo SVG / PNG, brand colour codes, and founder headshots (high-res), email <a href="mailto:ajsal@frameleads.com?subject=Brand%20assets%20request" className="text-[#FF6B35] underline decoration-[#FFE4D6] underline-offset-4 hover:decoration-[#FF6B35]">ajsal@frameleads.com</a> with the publication or platform you're using them on. We respond within one business day.
					</p>
				</section>

				{/* Editorial topics we cover */}
				<section
					id="editorial-topics"
					aria-labelledby="topics-heading"
					className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10 scroll-mt-24"
				>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">Topics we cover</div>
					<h2 id="topics-heading" className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]">
						Where we can speak with operator-grade depth
					</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-2">
						{[
							{ topic: "Performance marketing in India 2026", body: "CPC + CAC bands across 31 industries, channel-mix shifts, attribution rigour in a cookieless world." },
							{ topic: "AI Overviews + GEO + LLM citation", body: "How AI Overview compresses organic real estate, what content structure earns citations, the SEO playbook for 2026." },
							{ topic: "D2C unit economics", body: "Margin headroom, RTO impact, channel-mix per category band, repeat-purchase math, Indian D2C vs Western." },
							{ topic: "B2B SaaS pipeline math", body: "LinkedIn ABM, SEO + content compounding cycles, MQL → SQL conversion benchmarks." },
							{ topic: "Agency-vs-in-house growth tradeoffs", body: "When agencies compress time-to-result; when in-house wins; how to structure the transition honestly." },
							{ topic: "Shark Tank pitch-deck post-mortems", body: "Founder lens on what works in a pitch — narrative, ask-anchoring, traction credibility, post-broadcast follow-up." },
						].map((t) => (
							<li key={t.topic} className="rounded-2xl border border-[#FFE4D6] bg-white p-4">
								<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">{t.topic}</div>
								<p className="mt-1 text-[13.5px] text-[#5A5A5A]">{t.body}</p>
							</li>
						))}
					</ul>
				</section>

				<CTABlock
					variant="audit"
					headline="Working on a story or podcast?"
					body="Email ajsal@frameleads.com with a one-line pitch — we typically respond within one business day. Available for written quotes, recorded interviews, panels, or background commentary."
					primaryHref="mailto:ajsal@frameleads.com?subject=Press%20inquiry"
					primaryLabel="Email Press Contact"
				/>

				<TimestampStamp updatedAt={today} reviewedBy={DEFAULT_AUTHOR.name} />

				<AuthorCard person={DEFAULT_AUTHOR} name={DEFAULT_AUTHOR.name} role={DEFAULT_AUTHOR.role} bio={DEFAULT_AUTHOR.bio} linkedin={DEFAULT_AUTHOR.linkedin} updatedAt={today} />
			</main>
		</>
	);
}
