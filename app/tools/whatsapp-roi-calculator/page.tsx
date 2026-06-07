import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/whatsapp-roi-calculator";
export const metadata: Metadata = {
	title: "WhatsApp ROI Calculator — India 2026 | Frameleads",
	description: "Calculate WhatsApp marketing ROI: monthly volume × cost × conversion × AOV. India template costs ₹0.85/marketing message in 2026.",
	alternates: { canonical: URL },
};

export default function WhatsAppROIPage() {
	return (
		<ToolChrome
			slug="whatsapp-roi-calculator"
			title="WhatsApp ROI Calculator"
			directAnswer="WhatsApp ROI equals revenue (volume × conversion × AOV) divided by spend (volume × per-message cost + BSP retainer). Indian D2C marketing template cost: ₹0.85/message in 2026. Cart-recovery flows commonly deliver 15-30× ROI; welcome flows 8-15×; broadcasts 3-8×."
			tldr={[
				"WhatsApp template cost in India: ₹0.85/marketing message (2026).",
				"Cart-recovery flows: 15-30× ROI typical for D2C.",
				"BSP retainer (Wati/Interakt): ₹2-5k/month for SMB, ₹10k+ at scale.",
			]}
			faqs={[
				{ question: "What's the realistic conversion rate for cart-recovery WhatsApp?", answer: "8-25% conversion within 48 hours. Higher than email recovery due to instant attention. Top quartile reaches 30%+." },
				{ question: "How much do BSPs charge?", answer: "Wati / Interakt: ₹2k-5k/month for SMB up to 50k contacts. Scale tiers ₹10-30k/month. Usage charges per message on top of BSP fee." },
				{ question: "Is opt-in mandatory for marketing templates?", answer: "Yes — DPDP Act + Meta policy. Without opt-in, you're limited to 24-hour user-initiated conversation windows. Compliant opt-in protects your WABA." },
				{ question: "What's the difference between marketing and utility templates?", answer: "Marketing: ₹0.85/msg, requires opt-in, can be promotional. Utility: ₹0.30/msg, transactional only (order updates, etc.). Authentication: ₹0.35/msg, OTPs only." },
			]}
			relatedLinks={[
				{ href: "/tools/email-list-value-calculator", label: "Email List Value Calculator" },
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
			]}
		>
			<ToolCalculator
				toolId="whatsapp-roi-calculator"
				inputs={[
					{ id: "monthlyVolume", label: "Marketing messages / month", type: "number", default: 50000, min: 0, step: 1000 },
					{ id: "costPerMsg", label: "Cost / marketing message", type: "number", default: 0.85, prefix: "₹", min: 0, step: 0.05, help: "India 2026: ₹0.85/marketing template" },
					{ id: "bspMonthly", label: "BSP retainer / month", type: "number", default: 5000, prefix: "₹", min: 0, step: 500 },
					{ id: "conversionRate", label: "Conversion rate (%)", type: "number", default: 8, suffix: "%", min: 0, max: 100, step: 0.5 },
					{ id: "aov", label: "AOV", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
				]}
				outputs={[
					{ id: "monthlyMsgCost", label: "Monthly message cost", format: "inr" },
					{ id: "totalMonthlyCost", label: "Total monthly cost", format: "inr" },
					{ id: "monthlyRevenue", label: "Monthly revenue", format: "inr" },
					{ id: "roi", label: "ROI", format: "ratio", band: { good: 8, warning: 3, bad: 1, direction: "higher-better" } },
					{ id: "costPerCustomer", label: "Cost per converted customer", format: "inr" },
				]}
				formula="ROI = (Volume × CR × AOV) ÷ (Volume × Cost/msg + BSP retainer)"
				howToUse={["Conversion rate varies by flow type — cart recovery 15-25%, broadcast 2-6%, lifecycle 5-12%.", "Don't include utility/transactional messages in marketing-volume.", "BSP retainer is fixed; per-message cost scales linearly.", "Below 5x ROI: flow design issue. Below 2x: shut down channel."]}
			/>
		</ToolChrome>
	);
}
