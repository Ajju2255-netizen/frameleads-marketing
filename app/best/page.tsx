import type { Metadata } from "next";
import { QuestionHubIndex } from "@/components/templates/QuestionHubIndex";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Best-of Guides — Criteria-First Curated Lists | Frameleads",
	description:
		"643+ curated 'best X' lists with transparent scoring criteria. Frameleads' position disclosed where applicable. No affiliate fees, no paid placement. Operator-grade lists, not sales decks.",
	alternates: { canonical: "https://frameleads.com/best" },
};

export default function Page() {
	return <QuestionHubIndex kind="best" />;
}
