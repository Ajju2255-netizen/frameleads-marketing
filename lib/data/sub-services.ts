import subServicesData from "@/data/sub-services.json";

export type SubServiceFAQ = { question: string; answer: string };
export type SubServiceStep = { name: string; text: string };

export type SubServiceEntry = {
	id: string;
	parent_service: string;
	label: string;
	h1: string;
	direct_answer: string;
	deliverables: string[];
	process_steps: SubServiceStep[];
	faqs: SubServiceFAQ[];
	cost_band: string;
	primary_keyword: string;
	secondary_keywords: string[];
	tags: string[];
};

export const subServices = subServicesData as SubServiceEntry[];

export function getSubService(parentSlug: string, subSlug: string): SubServiceEntry | undefined {
	return subServices.find((s) => s.parent_service === parentSlug && s.id === subSlug);
}

export function getSubServicesForParent(parentSlug: string): SubServiceEntry[] {
	return subServices.filter((s) => s.parent_service === parentSlug);
}

export function allSubServiceSlugs(): { parent: string; sub: string }[] {
	return subServices.map((s) => ({ parent: s.parent_service, sub: s.id }));
}
