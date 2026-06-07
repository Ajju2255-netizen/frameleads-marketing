import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinterest Ads Agency — Visual Discovery Funnels",
  description: "Pinterest Ads for fashion D2C, home, wellness, and travel. Idea Pins + Shopping + Carousel campaigns engineered for AOV.",
  alternates: { canonical: "https://frameleads.com/pinterest-ads" },
  openGraph: {
    title: "Pinterest Ads Agency — Visual Discovery Funnels",
    description: "Pinterest Ads for fashion D2C, home, wellness, and travel. Idea Pins + Shopping + Carousel campaigns engineered for AOV.",
    url: "https://frameleads.com/pinterest-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Ads Agency — Visual Discovery Funnels",
    description: "Pinterest Ads for fashion D2C, home, wellness, and travel. Idea Pins + Shopping + Carousel campaigns engineered for AOV.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
