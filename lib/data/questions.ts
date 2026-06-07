import questionsData from "@/data/questions.json";

export type QuestionStep = { name: string; text: string };
export type QuestionFAQ = { question: string; answer: string };

export type QuestionEntry = {
	id: string;
	slug: string;
	kind: "how-to" | "what-is" | "why" | "is-it" | "best" | "how-much";
	title: string;
	intent: string;
	audience: string;
	tldr: string[];
	steps: QuestionStep[];
	faqs: QuestionFAQ[];
	tags: string[];
	year: number;
};

export const questions = questionsData as QuestionEntry[];

export function getQuestion(slug: string): QuestionEntry | undefined {
	return questions.find((q) => q.slug === slug);
}

export function allQuestionSlugs(): string[] {
	return questions.map((q) => q.slug);
}
