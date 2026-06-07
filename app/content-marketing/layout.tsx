import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing Agency | Pillar + Cluster + GEO",
  description: "SEO-grade content marketing: pillar + cluster, AI-citable formats, programmatic SEO, and editorial calendars built for ranking.",
  alternates: { canonical: "https://frameleads.com/content-marketing" },
  openGraph: {
    title: "Content Marketing Agency | Pillar + Cluster + GEO",
    description: "SEO-grade content marketing: pillar + cluster, AI-citable formats, programmatic SEO, and editorial calendars built for ranking.",
    url: "https://frameleads.com/content-marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Agency | Pillar + Cluster + GEO",
    description: "SEO-grade content marketing: pillar + cluster, AI-citable formats, programmatic SEO, and editorial calendars built for ranking.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
