import { buildLlmsFullTxt } from "@/lib/llms";

export const revalidate = 3600;

export async function GET() {
	return new Response(buildLlmsFullTxt(), {
		status: 200,
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control":
				"public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
			"X-Frameleads-Doc": "llms.txt-full",
		},
	});
}
