import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Frameleads",
  description: "Terms governing your use of frameleads.com and Frameleads agency services.",
  alternates: { canonical: "https://frameleads.com/terms" },
  openGraph: {
    title: "Terms of Service | Frameleads",
    description: "Terms governing your use of frameleads.com and Frameleads agency services.",
    url: "https://frameleads.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Frameleads",
    description: "Terms governing your use of frameleads.com and Frameleads agency services.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
