import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Bangalore | Frameleads",
  description: "Digital marketing agency in Bangalore — SEO, performance marketing, social, content, CRO. Local-market expertise across Koramangala, Whitefield, Indiranagar, HSR, Electronic City.",
  alternates: { canonical: "https://frameleads.com/digital-marketing-in-bangalore" },
  openGraph: {
    title: "Digital Marketing Agency in Bangalore | Frameleads",
    description: "Digital marketing agency in Bangalore — SEO, performance marketing, social, content, CRO. Local-market expertise across Koramangala, Whitefield, Indiranagar, HSR, Electronic City.",
    url: "https://frameleads.com/digital-marketing-in-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Bangalore | Frameleads",
    description: "Digital marketing agency in Bangalore — SEO, performance marketing, social, content, CRO. Local-market expertise across Koramangala, Whitefield, Indiranagar, HSR, Electronic City.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
