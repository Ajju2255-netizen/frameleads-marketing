import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency | Clinics + Hospitals + Healthtech",
  description: "Healthcare marketing for clinics, hospitals, and healthtech — local SEO, GBP, DPDP-aware patient acquisition.",
  alternates: { canonical: "https://frameleads.com/healthcare-and-medical" },
  openGraph: {
    title: "Healthcare Marketing Agency | Clinics + Hospitals + Healthtech",
    description: "Healthcare marketing for clinics, hospitals, and healthtech — local SEO, GBP, DPDP-aware patient acquisition.",
    url: "https://frameleads.com/healthcare-and-medical",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Marketing Agency | Clinics + Hospitals + Healthtech",
    description: "Healthcare marketing for clinics, hospitals, and healthtech — local SEO, GBP, DPDP-aware patient acquisition.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
