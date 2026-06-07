import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SEO Company in Bangalore | Frameleads",
  description: "Best SEO company in Bangalore — technical SEO, local SEO, programmatic SEO, AI Overview citations. 400% traffic growth track record.",
  alternates: { canonical: "https://frameleads.com/seo-company-in-bangalore" },
  openGraph: {
    title: "Best SEO Company in Bangalore | Frameleads",
    description: "Best SEO company in Bangalore — technical SEO, local SEO, programmatic SEO, AI Overview citations. 400% traffic growth track record.",
    url: "https://frameleads.com/seo-company-in-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in Bangalore | Frameleads",
    description: "Best SEO company in Bangalore — technical SEO, local SEO, programmatic SEO, AI Overview citations. 400% traffic growth track record.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
