import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Ads Agency — Storefront Growth",
  description: "Shopify-native ad management across Meta, Google, and Pinterest with feed engineering and post-purchase upsells.",
  alternates: { canonical: "https://frameleads.com/shopify-ads" },
  openGraph: {
    title: "Shopify Ads Agency — Storefront Growth",
    description: "Shopify-native ad management across Meta, Google, and Pinterest with feed engineering and post-purchase upsells.",
    url: "https://frameleads.com/shopify-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Ads Agency — Storefront Growth",
    description: "Shopify-native ad management across Meta, Google, and Pinterest with feed engineering and post-purchase upsells.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
