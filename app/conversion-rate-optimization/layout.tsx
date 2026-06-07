import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Agency | Frameleads",
  description: "CRO for D2C, SaaS, and lead-gen sites — heatmaps, A/B testing, funnel rebuilds, and offer engineering that compound.",
  alternates: { canonical: "https://frameleads.com/conversion-rate-optimization" },
  openGraph: {
    title: "Conversion Rate Optimization Agency | Frameleads",
    description: "CRO for D2C, SaaS, and lead-gen sites — heatmaps, A/B testing, funnel rebuilds, and offer engineering that compound.",
    url: "https://frameleads.com/conversion-rate-optimization",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Rate Optimization Agency | Frameleads",
    description: "CRO for D2C, SaaS, and lead-gen sites — heatmaps, A/B testing, funnel rebuilds, and offer engineering that compound.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
