/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Workers handles image optimization at the CDN layer (and our
  // assets are static). Keeping unoptimized to match Leadkaun's setup.
  images: {
    unoptimized: true,
  },
  // Suppression flags retained from prior config — the larger fix is tracked in
  // the growth-plan vault (Risks & Guardrails, Code hygiene). Remove later.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Phase 0 path-hygiene: legacy malformed routes → canonical lower-kebab.
      // (Case-only renames — /Meta-ads → /meta-ads, /Social-media-marketing → /social-media-marketing —
      //  are handled by middleware.ts because next.config's redirect matcher is case-insensitive
      //  and would create a redirect loop on the canonical lowercase path.)
      { source: "/perforamance-marketing", destination: "/performance-marketing", permanent: true },
      { source: "/perforamance-marketing/:path*", destination: "/performance-marketing/:path*", permanent: true },
      { source: "/ppc%20management", destination: "/ppc-management", permanent: true },
      { source: "/ppc management", destination: "/ppc-management", permanent: true },
      { source: "/ppc management/:path*", destination: "/ppc-management/:path*", permanent: true },
    ];
  },
}

export default nextConfig
