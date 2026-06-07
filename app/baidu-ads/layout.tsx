import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baidu Ads Agency — Reach Mainland China Buyers",
  description: "Baidu Ads agency for India + APAC brands targeting Mainland China. Search, display, Tieba — built by Frameleads' performance team.",
  alternates: { canonical: "https://frameleads.com/baidu-ads" },
  openGraph: {
    title: "Baidu Ads Agency — Reach Mainland China Buyers",
    description: "Baidu Ads agency for India + APAC brands targeting Mainland China. Search, display, Tieba — built by Frameleads' performance team.",
    url: "https://frameleads.com/baidu-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baidu Ads Agency — Reach Mainland China Buyers",
    description: "Baidu Ads agency for India + APAC brands targeting Mainland China. Search, display, Tieba — built by Frameleads' performance team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
