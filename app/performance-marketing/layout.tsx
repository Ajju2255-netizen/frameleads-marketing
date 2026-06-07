import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in Bangalore | Frameleads",
  description: "Performance marketing engineered for blended CAC and margin discipline — Meta, Google, YouTube, native, paid social, programmatic.",
  alternates: { canonical: "https://frameleads.com/performance-marketing" },
  openGraph: {
    title: "Performance Marketing Agency in Bangalore | Frameleads",
    description: "Performance marketing engineered for blended CAC and margin discipline — Meta, Google, YouTube, native, paid social, programmatic.",
    url: "https://frameleads.com/performance-marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Agency in Bangalore | Frameleads",
    description: "Performance marketing engineered for blended CAC and margin discipline — Meta, Google, YouTube, native, paid social, programmatic.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
