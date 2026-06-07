import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Services Marketing | NBFC + Insurance + Wealth",
  description: "Marketing for NBFCs, insurance brokers, and wealth platforms — trust-led, compliance-aware acquisition.",
  alternates: { canonical: "https://frameleads.com/financial-services" },
  openGraph: {
    title: "Financial Services Marketing | NBFC + Insurance + Wealth",
    description: "Marketing for NBFCs, insurance brokers, and wealth platforms — trust-led, compliance-aware acquisition.",
    url: "https://frameleads.com/financial-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Services Marketing | NBFC + Insurance + Wealth",
    description: "Marketing for NBFCs, insurance brokers, and wealth platforms — trust-led, compliance-aware acquisition.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
