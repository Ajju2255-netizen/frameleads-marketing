import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Marketing Company in Bangalore | Frameleads",
  description: "Premier B2B digital marketing company in Bangalore — ABM, LinkedIn lead-gen, content marketing, and pipeline-grade SEO.",
  alternates: { canonical: "https://frameleads.com/b2b-marketing-company-in-bangalore" },
  openGraph: {
    title: "B2B Marketing Company in Bangalore | Frameleads",
    description: "Premier B2B digital marketing company in Bangalore — ABM, LinkedIn lead-gen, content marketing, and pipeline-grade SEO.",
    url: "https://frameleads.com/b2b-marketing-company-in-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Marketing Company in Bangalore | Frameleads",
    description: "Premier B2B digital marketing company in Bangalore — ABM, LinkedIn lead-gen, content marketing, and pipeline-grade SEO.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
