import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Ads Agency for B2B SaaS | Frameleads",
  description: "LinkedIn Ads agency for B2B SaaS, finance, and professional services. ABM, lead-gen forms, conversation ads — built for pipeline.",
  alternates: { canonical: "https://frameleads.com/linkedin-ads" },
  openGraph: {
    title: "LinkedIn Ads Agency for B2B SaaS | Frameleads",
    description: "LinkedIn Ads agency for B2B SaaS, finance, and professional services. ABM, lead-gen forms, conversation ads — built for pipeline.",
    url: "https://frameleads.com/linkedin-ads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Ads Agency for B2B SaaS | Frameleads",
    description: "LinkedIn Ads agency for B2B SaaS, finance, and professional services. ABM, lead-gen forms, conversation ads — built for pipeline.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
