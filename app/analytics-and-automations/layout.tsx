import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & Marketing Automation Services | Frameleads",
  description: "GA4 implementation, server-side tracking, marketing automation, attribution modeling — the data foundation for compounding growth.",
  alternates: { canonical: "https://frameleads.com/analytics-and-automations" },
  openGraph: {
    title: "Analytics & Marketing Automation Services | Frameleads",
    description: "GA4 implementation, server-side tracking, marketing automation, attribution modeling — the data foundation for compounding growth.",
    url: "https://frameleads.com/analytics-and-automations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & Marketing Automation Services | Frameleads",
    description: "GA4 implementation, server-side tracking, marketing automation, attribution modeling — the data foundation for compounding growth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
