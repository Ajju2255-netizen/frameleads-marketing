import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Frameleads",
  description: "Frameleads serves 33 industries across real estate, D2C, B2B SaaS, healthcare, fintech, edtech, hospitality, and more.",
  alternates: { canonical: "https://frameleads.com/industries" },
  openGraph: {
    title: "Industries We Serve | Frameleads",
    description: "Frameleads serves 33 industries across real estate, D2C, B2B SaaS, healthcare, fintech, edtech, hospitality, and more.",
    url: "https://frameleads.com/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Frameleads",
    description: "Frameleads serves 33 industries across real estate, D2C, B2B SaaS, healthcare, fintech, edtech, hospitality, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
