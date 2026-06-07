import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Marketing Agency in Bangalore | Frameleads",
  description: "Real estate marketing for builders, developers, and brokers — pre-launch, inventory clearance, and CRM-integrated lead funnels.",
  alternates: { canonical: "https://frameleads.com/real-estate-marketing-company-in-bangalore" },
  openGraph: {
    title: "Real Estate Marketing Agency in Bangalore | Frameleads",
    description: "Real estate marketing for builders, developers, and brokers — pre-launch, inventory clearance, and CRM-integrated lead funnels.",
    url: "https://frameleads.com/real-estate-marketing-company-in-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Marketing Agency in Bangalore | Frameleads",
    description: "Real estate marketing for builders, developers, and brokers — pre-launch, inventory clearance, and CRM-integrated lead funnels.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
