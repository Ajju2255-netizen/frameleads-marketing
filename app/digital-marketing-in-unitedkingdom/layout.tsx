import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in United Kingdom | Frameleads",
  description: "Performance digital marketing for brands operating in United Kingdom — SEO, PPC, social, content, CRO. Calibrated to local intent and channel mix.",
  alternates: { canonical: "https://frameleads.com/digital-marketing-in-unitedkingdom" },
  openGraph: {
    title: "Digital Marketing Agency in United Kingdom | Frameleads",
    description: "Performance digital marketing for brands operating in United Kingdom — SEO, PPC, social, content, CRO. Calibrated to local intent and channel mix.",
    url: "https://frameleads.com/digital-marketing-in-unitedkingdom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in United Kingdom | Frameleads",
    description: "Performance digital marketing for brands operating in United Kingdom — SEO, PPC, social, content, CRO. Calibrated to local intent and channel mix.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
