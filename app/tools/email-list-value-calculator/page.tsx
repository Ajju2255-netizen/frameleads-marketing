import type { Metadata } from "next";
import { ToolChrome } from "@/components/templates/ToolChrome";
import { ToolCalculator } from "@/components/templates/ToolCalculator";

export const revalidate = 86400;
const URL = "https://frameleads.com/tools/email-list-value-calculator";
export const metadata: Metadata = {
	title: "Email List Value Calculator — India 2026 | Frameleads",
	description: "Calculate the monthly + annual revenue value of your email list. Open rate × CTR × conversion × AOV.",
	alternates: { canonical: URL },
};

export default function EmailListValuePage() {
	return (
		<ToolChrome
			slug="email-list-value-calculator"
			title="Email List Value Calculator"
			directAnswer="Email list monthly value equals list size × open rate × CTR × conversion rate × AOV × send frequency. Indian D2C lists at 50k+ subscribers commonly drive 15-25% of revenue. The math: 50k × 28% × 4% × 3% × ₹1,200 × 4 sends/month = ₹80,000/month at conservative inputs."
			tldr={[
				"List value = size × open × CTR × conversion × AOV × frequency.",
				"Indian D2C lists: 22–34% open, 1–4% conversion typical.",
				"Owned-channel revenue % is the leading retention indicator.",
			]}
			faqs={[
				{ question: "What's a healthy open rate for Indian D2C?", answer: "22-34%. Subject-line testing + segmentation lifts to 30-45% top quartile. Below 18%, list health is suspect." },
				{ question: "How often should I email?", answer: "2-4 sends/week for D2C; 1-2/week for B2B SaaS. Above 5/week, unsubscribe rate spikes. Below 1/week, audience forgets the brand." },
				{ question: "Why is conversion-from-email higher than cold paid?", answer: "Email audience has prior interest signal (signed up). Indian D2C email conversion 3-8% vs cold paid 1-3%." },
				{ question: "Does this include flows or just newsletters?", answer: "Newsletter sends only (broadcast). Lifecycle flows (welcome, abandon, post-purchase) compute separately and typically deliver 60-70% of email revenue." },
			]}
			relatedLinks={[
				{ href: "/tools/whatsapp-roi-calculator", label: "WhatsApp ROI Calculator" },
				{ href: "/tools/cac-calculator", label: "CAC Calculator" },
				{ href: "/tools/ltv-calculator", label: "LTV Calculator" },
			]}
		>
			<ToolCalculator
				toolId="email-list-value-calculator"
				inputs={[
					{ id: "listSize", label: "Active list size", type: "number", default: 50000, min: 0, step: 1000 },
					{ id: "openRate", label: "Open rate (%)", type: "number", default: 28, suffix: "%", min: 0, max: 100, step: 1 },
					{ id: "ctr", label: "Click-through rate (%)", type: "number", default: 4, suffix: "%", min: 0, max: 100, step: 0.5 },
					{ id: "conversionRate", label: "Conversion rate (%)", type: "number", default: 3, suffix: "%", min: 0, max: 100, step: 0.5 },
					{ id: "aov", label: "AOV", type: "number", default: 1200, prefix: "₹", min: 0, step: 50 },
					{ id: "sendsPerMonth", label: "Sends / month", type: "number", default: 8, min: 1, step: 1 },
				]}
				outputs={[
					{ id: "openersPerSend", label: "Openers per send", format: "number" },
					{ id: "buyersPerSend", label: "Buyers per send", format: "number" },
					{ id: "monthlyValue", label: "Monthly revenue", format: "inr" },
					{ id: "annualValue", label: "Annual revenue", format: "inr" },
					{ id: "perSubscriber", label: "Annual value / subscriber", format: "inr" },
				]}
				formula="Monthly = List × Open × CTR × Conversion × AOV × Sends/Month"
				howToUse={["Use 90-day average rates, not best-month.", "Conservative AOV — discounts in newsletters lower it.", "Add lifecycle flow revenue separately (use a different tool).", "Annual value / subscriber benchmark: ₹400+ for healthy D2C."]}
			/>
		</ToolChrome>
	);
}
