import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Frameleads",
  description: "Full index of frameleads.com — services, industries, locations, tools, glossary, blog.",
  alternates: { canonical: "https://frameleads.com/sitemap" },
  openGraph: {
    title: "Site Map | Frameleads",
    description: "Full index of frameleads.com — services, industries, locations, tools, glossary, blog.",
    url: "https://frameleads.com/sitemap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map | Frameleads",
    description: "Full index of frameleads.com — services, industries, locations, tools, glossary, blog.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
