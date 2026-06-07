import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Ads Agency — Creator-Led Performance",
  description: "TikTok Ads built around creator-led content, Spark Ads, and Shop integration for D2C and app installs.",
  alternates: { canonical: "https://frameleads.com/tiktok-ads" },
  openGraph: {
    title: "TikTok Ads Agency — Creator-Led Performance",
    description: "TikTok Ads built around creator-led content, Spark Ads, and Shop integration for D2C and app installs.",
    url: "https://frameleads.com/tiktok-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Ads Agency — Creator-Led Performance",
    description: "TikTok Ads built around creator-led content, Spark Ads, and Shop integration for D2C and app installs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
