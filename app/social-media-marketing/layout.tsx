import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Bangalore | Frameleads",
  description: "Organic + paid social across Meta, LinkedIn, YouTube, TikTok — built around creator-led content and conversion-led media buys.",
  alternates: { canonical: "https://frameleads.com/social-media-marketing" },
  openGraph: {
    title: "Social Media Marketing Agency in Bangalore | Frameleads",
    description: "Organic + paid social across Meta, LinkedIn, YouTube, TikTok — built around creator-led content and conversion-led media buys.",
    url: "https://frameleads.com/social-media-marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in Bangalore | Frameleads",
    description: "Organic + paid social across Meta, LinkedIn, YouTube, TikTok — built around creator-led content and conversion-led media buys.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
