import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Marketing Agency | Click-to-WhatsApp Funnels",
  description: "WhatsApp Business marketing — broadcast, click-to-WhatsApp ads, automation flows, and CRM integration for high-intent lead capture.",
  alternates: { canonical: "https://frameleads.com/whatsapp-marketing" },
  openGraph: {
    title: "WhatsApp Marketing Agency | Click-to-WhatsApp Funnels",
    description: "WhatsApp Business marketing — broadcast, click-to-WhatsApp ads, automation flows, and CRM integration for high-intent lead capture.",
    url: "https://frameleads.com/whatsapp-marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Marketing Agency | Click-to-WhatsApp Funnels",
    description: "WhatsApp Business marketing — broadcast, click-to-WhatsApp ads, automation flows, and CRM integration for high-intent lead capture.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
