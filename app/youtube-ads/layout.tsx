import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Ads Agency — Video Performance | Frameleads",
  description: "YouTube Ads for awareness + performance: In-stream, Shorts, Discovery, and Demand Gen campaigns.",
  alternates: { canonical: "https://frameleads.com/youtube-ads" },
  openGraph: {
    title: "YouTube Ads Agency — Video Performance | Frameleads",
    description: "YouTube Ads for awareness + performance: In-stream, Shorts, Discovery, and Demand Gen campaigns.",
    url: "https://frameleads.com/youtube-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Ads Agency — Video Performance | Frameleads",
    description: "YouTube Ads for awareness + performance: In-stream, Shorts, Discovery, and Demand Gen campaigns.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
