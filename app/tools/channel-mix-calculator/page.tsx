import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/channel-mix-calculator";
export const metadata: Metadata = {
	title: "Channel Mix Calculator — India 2026 | Frameleads",
	description: "Allocate marketing budget across Meta, Google, LinkedIn, WhatsApp, Email, SEO. Stage-aware recommendations.",
	alternates: { canonical: URL },
};

export default function ChannelMixPage() {
	return (
		<ToolChrome
			slug="channel-mix-calculator"
			title="Channel Mix Calculator"
			directAnswer="Allocate budget across channels by stage + business type. Indian D2C post-PMF: 40-50% Meta + 15-25% Google + 10% WhatsApp + 10% Email + 10-20% SEO. Indian B2B SaaS: 40-60% Google + 20-30% LinkedIn + 5-10% Meta retargeting + 15% SEO. Mix shifts as stage matures."
			tldr={[
				"D2C post-PMF: 40-50% Meta + 15-25% Google + 10% WhatsApp + 10% Email + 10-20% SEO.",
				"B2B SaaS: 40-60% Google + 20-30% LinkedIn + Meta retargeting + 15% SEO.",
				"Pre-PMF: focus 1-2 channels deep; scale: diversify to 5+.",
			]}
			faqs={[
				{ question: "Why is Indian D2C Meta-heavy?", answer: "Indian D2C buyers discover products on Meta (Instagram + Facebook). Meta's auction supplies most cold-prospect traffic. Google captures bottom-funnel intent at lower volume." },
				{ question: "Why is Indian B2B SaaS Google-heavy?", answer: "B2B buyers research solutions via search ('best CRM for Indian SMB'). LinkedIn + Meta retargeting layer awareness; Google captures intent." },
				{ question: "Should I include organic in this mix?", answer: "This calculator is paid + lifecycle only. Organic (SEO, founder brand, community) is a separate budget. Mature D2C+SaaS allocate 15-30% to organic." },
				{ question: "How does stage shift the mix?", answer: "Pre-PMF: focus 1-2 channels deep (typically Meta or Google primary). Post-PMF: diversify to 3-4. Scale: 5+ with rigorous attribution." },
			]}
			relatedLinks={[
				{ href: "/tools/ad-spend-planner", label: "Ad Spend Planner" },
				{ href: "/tools/marketing-budget-calculator", label: "Marketing Budget Calculator" },
			]}
		>
			<ToolCalculator
				toolId="channel-mix-calculator"
				inputs={[
					{ id: "totalBudget", label: "Total monthly budget", type: "number", default: 1000000, prefix: "₹", min: 0, step: 50000 },
					{
						id: "businessType",
						label: "Business type",
						type: "select",
						default: "d2c-post-pmf",
						options: [
							{ label: "D2C pre-PMF", value: "d2c-pre-pmf" },
							{ label: "D2C post-PMF", value: "d2c-post-pmf" },
							{ label: "D2C scale", value: "d2c-scale" },
							{ label: "B2B SaaS pre-PMF", value: "saas-pre-pmf" },
							{ label: "B2B SaaS Series A+", value: "saas-post-pmf" },
							{ label: "B2B SaaS Series B+", value: "saas-scale" },
							{ label: "Real estate / RERA", value: "real-estate" },
							{ label: "Healthcare / DPDP", value: "healthcare" },
						],
					},
				]}
				outputs={[
					{ id: "meta", label: "Meta Ads", format: "inr" },
					{ id: "google", label: "Google Ads", format: "inr" },
					{ id: "linkedin", label: "LinkedIn Ads", format: "inr" },
					{ id: "youtube", label: "YouTube Ads", format: "inr" },
					{ id: "whatsapp", label: "WhatsApp + BSP", format: "inr" },
					{ id: "email", label: "Email tools + sends", format: "inr" },
					{ id: "seo", label: "SEO + content", format: "inr" },
				]}
				formula="Channel-spend = Total × Stage-adjusted-channel-weight"
				howToUse={["Pick stage honestly — biggest mismatch source.", "Mix is a starting point; iterate based on per-channel CAC.", "SEO + email are cheap relative to paid; weights look small but ROI is high.", "Track each channel's CAC monthly + reallocate quarterly."]}
			/>
		</ToolChrome>
	);
}
