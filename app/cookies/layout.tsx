import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Frameleads",
  description: "How Frameleads uses cookies and similar technologies across frameleads.com.",
  alternates: { canonical: "https://frameleads.com/cookies" },
  openGraph: {
    title: "Cookie Policy | Frameleads",
    description: "How Frameleads uses cookies and similar technologies across frameleads.com.",
    url: "https://frameleads.com/cookies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Frameleads",
    description: "How Frameleads uses cookies and similar technologies across frameleads.com.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
