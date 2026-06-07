import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Agency in Bangalore | Frameleads",
  description: "Performance-led Google Ads management: Search, PMax, YouTube, Shopping. ROAS-engineered campaigns by Frameleads' Bangalore team.",
  alternates: { canonical: "https://frameleads.com/google-ads" },
  openGraph: {
    title: "Google Ads Agency in Bangalore | Frameleads",
    description: "Performance-led Google Ads management: Search, PMax, YouTube, Shopping. ROAS-engineered campaigns by Frameleads' Bangalore team.",
    url: "https://frameleads.com/google-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Agency in Bangalore | Frameleads",
    description: "Performance-led Google Ads management: Search, PMax, YouTube, Shopping. ROAS-engineered campaigns by Frameleads' Bangalore team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
