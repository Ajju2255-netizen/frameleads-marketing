import type { Metadata } from "next";
import { GlossaryHub } from "@/components/templates/GlossaryHub";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Marketing Glossary — 87 Plain-English Definitions + Formulas + Benchmarks | Frameleads",
	description:
		"87-entry marketing glossary in plain English. Each term: definition + formula + example + India benchmark + common mistakes + related terms. Cross-linked to 2,697 industry-adapted cells.",
	alternates: { canonical: "https://frameleads.com/glossary" },
};

export default function Page() {
	return <GlossaryHub />;
}
