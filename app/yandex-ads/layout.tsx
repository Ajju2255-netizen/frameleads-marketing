import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yandex Ads Agency — Russia + CIS Reach",
  description: "Yandex Direct + Display advertising for India brands expanding to Russia and CIS markets.",
  alternates: { canonical: "https://frameleads.com/yandex-ads" },
  openGraph: {
    title: "Yandex Ads Agency — Russia + CIS Reach",
    description: "Yandex Direct + Display advertising for India brands expanding to Russia and CIS markets.",
    url: "https://frameleads.com/yandex-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yandex Ads Agency — Russia + CIS Reach",
    description: "Yandex Direct + Display advertising for India brands expanding to Russia and CIS markets.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
