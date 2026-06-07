import type { Metadata } from "next";
import { QuestionHubIndex } from "@/components/templates/QuestionHubIndex";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "How-to Guides — Operator Playbooks for Indian + Global Marketers | Frameleads",
	description:
		"495+ step-by-step how-to guides on D2C launches, CAC reduction, AIO/GEO, local SEO, performance marketing, retention, and more. Each guide ships with named steps, India-specific benchmarks, common mistakes, and schema-tagged FAQs.",
	alternates: { canonical: "https://frameleads.com/how-to" },
};

export default function Page() {
	return <QuestionHubIndex kind="how-to" />;
}
