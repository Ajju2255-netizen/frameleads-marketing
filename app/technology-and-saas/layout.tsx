import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing for Technology & SaaS Companies | Frameleads",
  description: "Marketing for technology and SaaS companies — SEO, content, paid, LinkedIn, lifecycle, retention.",
  alternates: { canonical: "https://frameleads.com/technology-and-saas" },
  openGraph: {
    title: "Marketing for Technology & SaaS Companies | Frameleads",
    description: "Marketing for technology and SaaS companies — SEO, content, paid, LinkedIn, lifecycle, retention.",
    url: "https://frameleads.com/technology-and-saas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing for Technology & SaaS Companies | Frameleads",
    description: "Marketing for technology and SaaS companies — SEO, content, paid, LinkedIn, lifecycle, retention.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
