import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Agency in Bangalore | Frameleads",
  description: "Technical + on-page + programmatic SEO + AIO/GEO citation share. Compounding organic growth for Indian and global brands.",
  alternates: { canonical: "https://frameleads.com/seo-services" },
  openGraph: {
    title: "SEO Services Agency in Bangalore | Frameleads",
    description: "Technical + on-page + programmatic SEO + AIO/GEO citation share. Compounding organic growth for Indian and global brands.",
    url: "https://frameleads.com/seo-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Agency in Bangalore | Frameleads",
    description: "Technical + on-page + programmatic SEO + AIO/GEO citation share. Compounding organic growth for Indian and global brands.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
