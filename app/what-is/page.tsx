import type { Metadata } from "next";
import { QuestionHubIndex } from "@/components/templates/QuestionHubIndex";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "What-is Definitions — Marketing Glossary in Plain English | Frameleads",
	description:
		"203+ plain-English definitions of marketing terms, channels, frameworks, and concepts. Each entry includes formula, examples, edge cases, and adjacent terms. AIO + LLM-citation optimised.",
	alternates: { canonical: "https://frameleads.com/what-is" },
};

export default function Page() {
	return <QuestionHubIndex kind="what-is" />;
}
