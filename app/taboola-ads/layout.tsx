import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taboola Native Ads Agency | Frameleads",
  description: "Taboola native advertising for content marketers, publishers, and lead-gen funnels at scale.",
  alternates: { canonical: "https://frameleads.com/taboola-ads" },
  openGraph: {
    title: "Taboola Native Ads Agency | Frameleads",
    description: "Taboola native advertising for content marketers, publishers, and lead-gen funnels at scale.",
    url: "https://frameleads.com/taboola-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taboola Native Ads Agency | Frameleads",
    description: "Taboola native advertising for content marketers, publishers, and lead-gen funnels at scale.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
