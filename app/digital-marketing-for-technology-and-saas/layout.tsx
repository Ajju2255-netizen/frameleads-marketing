import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing for B2B SaaS & Tech | Frameleads",
  description: "B2B SaaS marketing — SEO, content, LinkedIn, paid search — designed for ICP-tight, sales-cycle-aware demand generation.",
  alternates: { canonical: "https://frameleads.com/digital-marketing-for-technology-and-saas" },
  openGraph: {
    title: "Digital Marketing for B2B SaaS & Tech | Frameleads",
    description: "B2B SaaS marketing — SEO, content, LinkedIn, paid search — designed for ICP-tight, sales-cycle-aware demand generation.",
    url: "https://frameleads.com/digital-marketing-for-technology-and-saas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for B2B SaaS & Tech | Frameleads",
    description: "B2B SaaS marketing — SEO, content, LinkedIn, paid search — designed for ICP-tight, sales-cycle-aware demand generation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
