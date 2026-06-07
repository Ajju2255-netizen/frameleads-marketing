import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snapchat Ads Agency — Gen-Z Performance",
  description: "Snapchat Ads for Gen-Z and millennial brands. AR lens experiences, story ads, and Spotlight performance campaigns.",
  alternates: { canonical: "https://frameleads.com/snapchat-ads" },
  openGraph: {
    title: "Snapchat Ads Agency — Gen-Z Performance",
    description: "Snapchat Ads for Gen-Z and millennial brands. AR lens experiences, story ads, and Spotlight performance campaigns.",
    url: "https://frameleads.com/snapchat-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snapchat Ads Agency — Gen-Z Performance",
    description: "Snapchat Ads for Gen-Z and millennial brands. AR lens experiences, story ads, and Spotlight performance campaigns.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
