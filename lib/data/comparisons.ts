import comparisonsData from "@/data/comparisons.json";

export type ComparisonScorecardRow = {
	criterion: string;
	a: string;
	b: string;
};

export type ComparisonFAQ = {
	question: string;
	answer: string;
};

export type ComparisonEntry = {
	id: string;
	slug: string;
	a: { label: string; shortName: string };
	b: { label: string; shortName: string };
	audienceLabel: string;
	intent: string;
	tldr: string[];
	scorecard: ComparisonScorecardRow[];
	deepDiveA: string;
	deepDiveB: string;
	decisionFlow: string[];
	hybrid: string;
	faqs: ComparisonFAQ[];
	ctaText: string;
	primaryHref: string;
};

export const comparisons = comparisonsData as ComparisonEntry[];

export function getComparison(slug: string): ComparisonEntry | undefined {
	return comparisons.find((c) => c.slug === slug);
}

export function allComparisonSlugs(): string[] {
	return comparisons.map((c) => c.slug);
}
