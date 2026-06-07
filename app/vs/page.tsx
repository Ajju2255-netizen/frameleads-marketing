import type { Metadata } from "next";
import { ComparisonsHub } from "@/components/templates/ComparisonsHub";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Marketing Comparisons — SEO vs PPC, Meta vs Google, In-house vs Agency | Frameleads",
	description:
		"50+ honest side-by-side marketing comparisons. Scorecard, decision flow, and hybrid case for every entry. SEO vs PPC, Meta vs Google Ads, In-house vs Agency, Performance vs Brand, and more.",
	alternates: { canonical: "https://frameleads.com/vs" },
};

export default function Page() {
	return <ComparisonsHub />;
}
