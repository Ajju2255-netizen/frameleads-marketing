import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing & Automation Services | Frameleads",
  description: "Email marketing, lifecycle automation, transactional, and CRM-integrated drip campaigns built for LTV.",
  alternates: { canonical: "https://frameleads.com/email-marketing-and-automation-services" },
  openGraph: {
    title: "Email Marketing & Automation Services | Frameleads",
    description: "Email marketing, lifecycle automation, transactional, and CRM-integrated drip campaigns built for LTV.",
    url: "https://frameleads.com/email-marketing-and-automation-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing & Automation Services | Frameleads",
    description: "Email marketing, lifecycle automation, transactional, and CRM-integrated drip campaigns built for LTV.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
