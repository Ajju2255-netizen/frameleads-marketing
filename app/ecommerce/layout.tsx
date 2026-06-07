import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Marketing Agency | D2C + Shopify Growth",
  description: "Ecommerce marketing for Shopify, WooCommerce, and headless D2C brands — performance, retention, CRO, and creative supply.",
  alternates: { canonical: "https://frameleads.com/ecommerce" },
  openGraph: {
    title: "Ecommerce Marketing Agency | D2C + Shopify Growth",
    description: "Ecommerce marketing for Shopify, WooCommerce, and headless D2C brands — performance, retention, CRO, and creative supply.",
    url: "https://frameleads.com/ecommerce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Marketing Agency | D2C + Shopify Growth",
    description: "Ecommerce marketing for Shopify, WooCommerce, and headless D2C brands — performance, retention, CRO, and creative supply.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
