import servicesData from "@/data/services.json";
import industriesData from "@/data/industries.json";
import geosIndiaData from "@/data/geos-india.json";
import geosGlobalData from "@/data/geos-global.json";

export type Service = {
	id: string;
	name: string;
	label: string;
	displayName: string;
	tagline: string;
	shortDescription: string;
	topUseCases: string[];
	avgCpcInr: string;
	avgCacInr: string;
	primaryKpi: string;
	timeToResults: string;
	geoModifier: string;
	industryModifier: string;
};

export type Industry = {
	id: string;
	name: string;
	category: string;
	label: string;
	tagline: string;
	primaryServices: string[];
	avgCpcInr: string;
	avgCacInr: string;
	topPainPoints: string[];
	tier: "A" | "B" | "C";
	geoConcentration: string[];
};

export type Geo = {
	id: string;
	name: string;
	tier: number;
	state?: string;
	country?: string;
	population?: string;
	topIndustries: string[];
	landmarks: string[];
	alternateNames?: string[];
};

export const services = servicesData as Service[];
export const industries = industriesData as Industry[];
export const geosIndia = geosIndiaData as Geo[];
export const geosGlobal = geosGlobalData as Geo[];
export const geosAll: Geo[] = [...geosIndia, ...geosGlobal];

export function getService(id: string): Service | undefined {
	return services.find((s) => s.id === id);
}

export function getIndustry(id: string): Industry | undefined {
	return industries.find((i) => i.id === id);
}

export function getGeo(id: string): Geo | undefined {
	return geosAll.find((g) => g.id === id);
}

export function getServicesForIndustry(industryId: string): Service[] {
	const ind = getIndustry(industryId);
	if (!ind) return [];
	return ind.primaryServices
		.map((sid) => getService(sid))
		.filter((s): s is Service => s !== undefined);
}

export function getIndustriesForGeo(geoId: string): Industry[] {
	const geo = getGeo(geoId);
	if (!geo) return [];
	return geo.topIndustries
		.map((iid) => getIndustry(iid))
		.filter((i): i is Industry => i !== undefined);
}

export function getGeosForIndustry(industryId: string): Geo[] {
	const ind = getIndustry(industryId);
	if (!ind) return [];
	return ind.geoConcentration
		.map((gid) => getGeo(gid))
		.filter((g): g is Geo => g !== undefined);
}
