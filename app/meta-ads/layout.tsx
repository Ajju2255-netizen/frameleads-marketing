import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Agency — Facebook + Instagram | Frameleads",
  description: "Meta Ads agency for D2C, real estate, and lead-gen. Creative-supply systems, post-iOS attribution, click-to-WhatsApp funnels.",
  alternates: { canonical: "https://frameleads.com/meta-ads" },
  openGraph: {
    title: "Meta Ads Agency — Facebook + Instagram | Frameleads",
    description: "Meta Ads agency for D2C, real estate, and lead-gen. Creative-supply systems, post-iOS attribution, click-to-WhatsApp funnels.",
    url: "https://frameleads.com/meta-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Agency — Facebook + Instagram | Frameleads",
    description: "Meta Ads agency for D2C, real estate, and lead-gen. Creative-supply systems, post-iOS attribution, click-to-WhatsApp funnels.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
