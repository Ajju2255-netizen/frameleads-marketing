import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Advertising Company in Bangalore | Frameleads",
  description: "Award-winning creative advertising — brand, digital, print, OOH, and AI-assisted production.",
  alternates: { canonical: "https://frameleads.com/creative-advertising-company-in-bangalore" },
  openGraph: {
    title: "Creative Advertising Company in Bangalore | Frameleads",
    description: "Award-winning creative advertising — brand, digital, print, OOH, and AI-assisted production.",
    url: "https://frameleads.com/creative-advertising-company-in-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Advertising Company in Bangalore | Frameleads",
    description: "Award-winning creative advertising — brand, digital, print, OOH, and AI-assisted production.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
