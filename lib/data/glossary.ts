import glossaryData from "@/data/glossary.json";

export type GlossaryEntry = {
	id: string;
	term: string;
	expansion: string;
	definition: string;
	formulaProse?: string;
	formula?: string;
	exampleInput?: string;
	exampleOutput?: string;
	tldr: string[];
	extendedExplanation: string;
	indiaBenchmarks?: string[];
	commonMistakes?: string[];
	relatedTerms: string[];
	ctaVariant: "audit" | "consultation" | "academy";
};

export const glossary = glossaryData as GlossaryEntry[];

export function getGlossaryEntry(id: string): GlossaryEntry | undefined {
	return glossary.find((g) => g.id === id);
}

export function allGlossaryIds(): string[] {
	return glossary.map((g) => g.id);
}
