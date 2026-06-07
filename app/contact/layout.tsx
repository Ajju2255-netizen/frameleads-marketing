import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Frameleads | Bangalore Marketing Agency",
  description: "Get in touch with Frameleads — Bangalore-based performance marketing agency. Free 30-minute strategy call.",
  alternates: { canonical: "https://frameleads.com/contact" },
  openGraph: {
    title: "Contact Frameleads | Bangalore Marketing Agency",
    description: "Get in touch with Frameleads — Bangalore-based performance marketing agency. Free 30-minute strategy call.",
    url: "https://frameleads.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Frameleads | Bangalore Marketing Agency",
    description: "Get in touch with Frameleads — Bangalore-based performance marketing agency. Free 30-minute strategy call.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
