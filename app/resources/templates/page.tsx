import type { Metadata } from "next";
import { ResourcesHub, type ResourceGroup } from "@/components/templates/ResourcesHub";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Templates & checklists | Frameleads Resources",
	description:
		"Free operator templates and checklists: audit framework, ICP definition, creative brief, attribution-stack checklist, agency-onboarding kit, monthly business review template.",
	alternates: { canonical: "https://frameleads.com/resources/templates" },
};

export default function Page() {
	const groups: ResourceGroup[] = [
		{
			heading: "Operator templates",
			description: "Battle-tested templates from Frameleads engagements — adapt to your own context.",
			items: [
				{ label: "Marketing audit framework", href: "/free-marketing-audit", description: "The 30-min audit framework we run on every engagement — adapt to self-audit." },
				{ label: "ICP definition canvas", href: "/frameleads-growth-system", description: "Ideal Customer Profile definition canvas — the first deliverable in every Frameleads engagement." },
				{ label: "Creative brief template", href: "/frameleads-growth-system", description: "Performance creative brief structure — 20-50 variants/month source-of-truth." },
				{ label: "Attribution-stack checklist", href: "/frameleads-growth-system", description: "Server-side attribution setup checklist — CAPI / GTM SS / GA4 / Enhanced Conversions." },
				{ label: "Monthly business review template", href: "/frameleads-growth-system", description: "MBR structure used on every Scale+ engagement." },
				{ label: "Agency engagement-onboarding kit", href: "/how-we-audit", description: "First 30-day onboarding sequence — what to expect from a Frameleads engagement." },
			],
		},
		{
			heading: "Industry-specific checklists",
			description: "Sample shown — full checklists derived from each industry's playbook.",
			items: [
				{ label: "Real estate (RERA) launch checklist", href: "/real-estate", description: "K-RERA / M-RERA / DLD-compliant project launch sequence." },
				{ label: "D2C launch checklist", href: "/d2c", description: "D2C brand launch — supply chain → creative → paid + organic + retention." },
				{ label: "B2B SaaS go-to-market checklist", href: "/b2b-saas", description: "B2B SaaS GTM sequence — positioning → demand-gen → ABM → close." },
				{ label: "Healthcare clinic / hospital marketing checklist", href: "/healthcare", description: "Healthcare marketing compliance + acquisition checklist." },
			],
		},
	];

	return (
		<ResourcesHub
			slug="resources/templates"
			title="Templates & checklists"
			dek="Battle-tested templates and checklists from Frameleads engagements. Adapt to your own context — audit framework, ICP canvas, creative brief, attribution-stack checklist."
			tldr={[
				`Operator templates that drop into your existing workflow.`,
				`Industry-specific checklists for the most compliance-heavy categories.`,
				`No PDF gating — everything embedded in the page.`,
				`Adapt to your context; do not import unchanged.`,
			]}
			groups={groups}
			breadcrumbAncestors={[
				{ label: "Home", href: "/" },
				{ label: "Resources", href: "/resources" },
			]}
		/>
	);
}
