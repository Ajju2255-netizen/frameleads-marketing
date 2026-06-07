import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Frameleads",
  description: "How Frameleads collects, uses, and protects personal data across frameleads.com.",
  alternates: { canonical: "https://frameleads.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Frameleads",
    description: "How Frameleads collects, uses, and protects personal data across frameleads.com.",
    url: "https://frameleads.com/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Frameleads",
    description: "How Frameleads collects, uses, and protects personal data across frameleads.com.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
