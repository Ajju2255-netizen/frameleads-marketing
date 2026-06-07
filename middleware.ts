import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Phase 0 path-hygiene: case-only legacy paths → canonical lower-kebab.
// We handle these in middleware instead of next.config.mjs `redirects()` because
// the latter's matcher is case-insensitive and would loop on the canonical path.
const CASE_LEGACY_PREFIXES: Array<[string, string]> = [
  ["/Meta-ads", "/meta-ads"],
  ["/Social-media-marketing", "/social-media-marketing"],
];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  for (const [legacy, canonical] of CASE_LEGACY_PREFIXES) {
    if (pathname === legacy || pathname.startsWith(legacy + "/")) {
      const newPath = canonical + pathname.slice(legacy.length);
      const url = request.nextUrl.clone();
      url.pathname = newPath;
      return NextResponse.redirect(url.toString() + (search || ""), 308);
    }
  }
}

// Matcher excludes _next, api, and static assets so this only runs on page navigations.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.png|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|sitemaps|api).*)",
  ],
};
