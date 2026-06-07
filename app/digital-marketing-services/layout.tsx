import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Bangalore | Frameleads",
  description: "Full-funnel digital marketing services — SEO, PPC, social, content, CRO, analytics — by Frameleads' Bangalore team.",
  alternates: { canonical: "https://frameleads.com/digital-marketing-services" },
  openGraph: {
    title: "Digital Marketing Services in Bangalore | Frameleads",
    description: "Full-funnel digital marketing services — SEO, PPC, social, content, CRO, analytics — by Frameleads' Bangalore team.",
    url: "https://frameleads.com/digital-marketing-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Bangalore | Frameleads",
    description: "Full-funnel digital marketing services — SEO, PPC, social, content, CRO, analytics — by Frameleads' Bangalore team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
