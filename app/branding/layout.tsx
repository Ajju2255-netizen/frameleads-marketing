import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Agency in Bangalore | Frameleads",
  description: "Brand strategy, identity, naming, and positioning for performance-led companies that want to grow without commoditizing.",
  alternates: { canonical: "https://frameleads.com/branding" },
  openGraph: {
    title: "Branding Agency in Bangalore | Frameleads",
    description: "Brand strategy, identity, naming, and positioning for performance-led companies that want to grow without commoditizing.",
    url: "https://frameleads.com/branding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Agency in Bangalore | Frameleads",
    description: "Brand strategy, identity, naming, and positioning for performance-led companies that want to grow without commoditizing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
