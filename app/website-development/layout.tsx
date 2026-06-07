import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development for Marketing | Frameleads",
  description: "Conversion-led web development for marketing teams — Next.js, Shopify, Webflow, headless WordPress with full SEO + analytics.",
  alternates: { canonical: "https://frameleads.com/website-development" },
  openGraph: {
    title: "Website Development for Marketing | Frameleads",
    description: "Conversion-led web development for marketing teams — Next.js, Shopify, Webflow, headless WordPress with full SEO + analytics.",
    url: "https://frameleads.com/website-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development for Marketing | Frameleads",
    description: "Conversion-led web development for marketing teams — Next.js, Shopify, Webflow, headless WordPress with full SEO + analytics.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
