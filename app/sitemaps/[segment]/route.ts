import { SEGMENTS, getSegment, urlsetXml } from "@/lib/sitemap";

export const revalidate = 3600;

export async function generateStaticParams() {
	return SEGMENTS.filter((s) => s.urls().length > 0).map((s) => ({
		segment: `${s.id}.xml`,
	}));
}

export async function GET(
	_req: Request,
	{ params }: { params: Promise<{ segment: string }> },
) {
	const { segment } = await params;
	const id = segment.replace(/\.xml$/, "");
	const seg = getSegment(id);
	if (!seg) {
		return new Response("Not found", { status: 404 });
	}
	const entries = seg.urls();
	const xml = urlsetXml(entries);
	return new Response(xml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control":
				"public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
			"X-Frameleads-Segment": seg.id,
			"X-Frameleads-Tier": String(seg.tier),
			"X-Frameleads-Count": String(entries.length),
		},
	});
}
