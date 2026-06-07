import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in France | Frameleads",
  description: "Performance digital marketing for brands operating in France — SEO, PPC, social, content, CRO. Calibrated to local intent and channel mix.",
  alternates: { canonical: "https://frameleads.com/digital-marketing-in-france" },
  openGraph: {
    title: "Digital Marketing Agency in France | Frameleads",
    description: "Performance digital marketing for brands operating in France — SEO, PPC, social, content, CRO. Calibrated to local intent and channel mix.",
    url: "https://frameleads.com/digital-marketing-in-france",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in France | Frameleads",
    description: "Performance digital marketing for brands operating in France — SEO, PPC, social, content, CRO. Calibrated to local intent and channel mix.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
