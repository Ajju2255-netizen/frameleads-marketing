import type { Metadata } from "next";
import { QuestionHubIndex } from "@/components/templates/QuestionHubIndex";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Why Guides — Operator Reasoning Behind Marketing Decisions | Frameleads",
	description:
		"103+ honest reasoning guides for common marketing decisions. The main arguments, the strongest counter-arguments, and the evidence that decides. Not opinion pieces — operator-grade reasoning.",
	alternates: { canonical: "https://frameleads.com/why" },
};

export default function Page() {
	return <QuestionHubIndex kind="why" />;
}
