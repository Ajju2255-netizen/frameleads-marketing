import type { Metadata } from "next";
import { QuestionHubIndex } from "@/components/templates/QuestionHubIndex";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Is-it Decision Guides — Yes/No Frameworks for Marketing Calls | Frameleads",
	description:
		"102+ yes/no decision guides with explicit criteria. Where the answer flips. Implications either way. Cost of being wrong. For operators making real calls, not consuming SEO theory.",
	alternates: { canonical: "https://frameleads.com/is-it" },
};

export default function Page() {
	return <QuestionHubIndex kind="is-it" />;
}
