import type { Metadata } from "next";
import { QuestionHubIndex } from "@/components/templates/QuestionHubIndex";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "How-much Pricing Answers — Honest Bands, India + Global | Frameleads",
	description:
		"500+ honest pricing answers across services, industries, geographies, and engagement tiers. Bands not single numbers. Factors that move price. Total monthly investment (fee + media + tools), not headline retainer.",
	alternates: { canonical: "https://frameleads.com/how-much" },
};

export default function Page() {
	return <QuestionHubIndex kind="how-much" />;
}
