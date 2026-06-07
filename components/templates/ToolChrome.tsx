import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer";
import { Breadcrumb } from "./Breadcrumb";
import { FAQBlock, type FAQItem } from "./FAQBlock";
import { CTABlock } from "./CTABlock";
import { AuthorCard } from "./AuthorCard";
import { TimestampStamp } from "./TimestampStamp";
import { SchemaInjector } from "./SchemaInjector";

type Props = {
	slug: string;
	title: string;
	directAnswer: string;
	tldr: string[];
	faqs: FAQItem[];
	children: React.ReactNode;
	relatedLinks?: { href: string; label: string }[];
};

export function ToolChrome({ slug, title, directAnswer, tldr, faqs, children, relatedLinks = [] }: Props) {
	const today = new Date().toISOString().slice(0, 10);
	const url = `https://frameleads.com/tools/${slug}`;
	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "WebApplication",
			name: title,
			url,
			applicationCategory: "BusinessApplication",
			browserRequirements: "Modern browser",
			operatingSystem: "Web",
			offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
		},
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: title,
			mainEntityOfPage: url,
			datePublished: today,
			dateModified: today,
			author: { "@type": "Organization", name: "Frameleads", url: "https://frameleads.com" },
			publisher: {
				"@type": "Organization",
				name: "Frameleads",
				url: "https://frameleads.com",
				logo: { "@type": "ImageObject", url: "https://frameleads.com/favicon.png" },
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
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://frameleads.com" },
				{ "@type": "ListItem", position: 2, name: "Tools", item: "https://frameleads.com/tools" },
				{ "@type": "ListItem", position: 3, name: title, item: url },
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
						className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
					/>
					<div className="mx-auto max-w-3xl px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
						<Breadcrumb
							items={[
								{ href: "/", label: "Home" },
								{ href: "/tools/roi-calculator", label: "Tools" },
								{ label: title },
							]}
						/>
						<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
							<span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
							Tool · Free
						</div>
						<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
							{title}
						</h1>
						<p className="direct-answer mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
							{directAnswer}
						</p>
					</div>
				</header>

				<section className="mx-auto max-w-3xl px-6 py-8 sm:py-10">
					<div className="tldr rounded-2xl border border-[#FFE4D6] bg-[#FFF7F2]/60 p-5">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-2">
							Key points
						</div>
						<ul className="space-y-1.5 text-[14px] text-[#2D3748]/90">
							{tldr.map((b) => (
								<li key={b} className="flex gap-2">
									<span aria-hidden className="text-[#FF6B35] font-semibold">▸</span>
									<span>{b}</span>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="mx-auto max-w-3xl px-6 py-6">
					{children}
				</section>

				<FAQBlock items={faqs} />

				{relatedLinks.length > 0 ? (
					<section className="mx-auto max-w-3xl px-6 py-8">
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-3">
							Related tools
						</div>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{relatedLinks.map((l) => (
								<li key={l.href}>
									<a
										href={l.href}
										className="block rounded-2xl border border-[#FFE4D6] bg-white p-4 transition-colors hover:border-[#FF6B35]/40 hover:bg-[#FFF7F2]/60"
									>
										<span className="font-poppins text-[14px] font-semibold text-[#2D3748]">{l.label}</span>
									</a>
								</li>
							))}
						</ul>
					</section>
				) : null}

				<TimestampStamp updatedAt={today} reviewedBy="Frameleads Editorial Team" />

				<CTABlock
					variant="audit"
					headline="Want this applied to your business?"
					body="The tool gives the model. The audit applies it to your specific stage, ICP, and unit economics. Free 30 minutes."
					primaryHref="/free-marketing-audit"
					primaryLabel="Book a free 30-min audit"
				/>

				<AuthorCard
					name="Frameleads Editorial Team"
					role="Performance + organic operators"
					bio="Frameleads' tools are built from operator-grade calculations used in live client engagements. Numbers reflect 2026 Indian market rates."
					linkedin="https://www.linkedin.com/company/frameleads"
					updatedAt={today}
				/>
			</main>
			<Footer />
		</>
	);
}
