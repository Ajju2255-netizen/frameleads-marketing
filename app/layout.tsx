import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalyticsComponent from "./components/google-analytics"
import { GA_MEASUREMENT_ID } from "../lib/analytics"
import { StickyMobileCTA } from "./components/sticky-mobile-cta"
import { MetaPixel } from "./components/meta-pixel"
import { SchemaInjector } from "@/components/templates/SchemaInjector"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = "https://frameleads.com";
const SITE_TITLE = "Frameleads | Best Digital Marketing Agency with Shark Tank India Experience";
const SITE_DESCRIPTION = "Performance marketing agency trusted by brands on Shark Tank India. SEO, PPC, Social, and CRO that drive 300%+ ROI growth. Get your free marketing audit.";
const OG_IMAGE = "/og-default.png"; // TODO replace with branded 1200×630 asset (Phase 3 will add /api/og dynamic)

// Search Console + Bing + Yandex verification tokens. Set via .env.local or
// hosting env so we don't commit secrets. Leave undefined to skip emission.
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined;
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION || undefined;
const YANDEX_VERIFICATION = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: 'frameleads',
  applicationName: 'Frameleads',
  keywords: [
    'digital marketing agency',
    'SEO agency Bangalore',
    'performance marketing',
    'Meta ads agency',
    'Google ads agency',
    'B2B marketing',
    'real estate marketing',
    'D2C marketing',
    'Shark Tank India',
    'Frameleads Growth System',
  ],
  authors: [{ name: 'Ajsal Abbas', url: SITE_URL + '/our-team' }],
  creator: 'Ajsal Abbas',
  publisher: 'Frameleads',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Frameleads',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Frameleads — performance marketing agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@frameleads',
    site: '@frameleads',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
  verification: {
    ...(GSC_VERIFICATION ? { google: GSC_VERIFICATION } : {}),
    ...(YANDEX_VERIFICATION ? { yandex: YANDEX_VERIFICATION } : {}),
    ...(BING_VERIFICATION
      ? { other: { 'msvalidate.01': BING_VERIFICATION } }
      : {}),
  },
}

// Site-level JSON-LD — emitted once at root so every page (including programmatic
// Tier cells) inherits the brand-entity graph. Page-specific schema layers on top.
const FOUNDER_PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/our-team#ajsal-abbas`,
  name: "Ajsal Abbas",
  jobTitle: "Founder & CEO",
  url: `${SITE_URL}/our-team`,
  worksFor: { "@id": `${SITE_URL}#organization` },
  sameAs: [
    "https://www.linkedin.com/in/ajsalabbas/",
    "https://www.youtube.com/@ajsalabbas8093",
  ],
} as const

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Frameleads",
  alternateName: "Frameleads Growth System",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/brand-logo.png`,
  description:
    "Performance-marketing agency for Indian SMBs and global SaaS/D2C brands. SEO, paid acquisition, content, CRO, analytics, and lifecycle programs built on the Frameleads Growth System™.",
  foundingDate: "2019",
  founders: [FOUNDER_PERSON],
  knowsAbout: [
    "Search Engine Optimization",
    "Programmatic SEO",
    "AI Overview Optimization",
    "Generative Engine Optimization",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Performance Marketing",
    "Conversion Rate Optimization",
    "Content Marketing",
    "WhatsApp Marketing",
    "Marketing Analytics",
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Electronic City",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560100",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-6362821368",
      contactType: "sales",
      areaServed: ["IN", "AE", "SA", "SG", "GB", "US", "CA", "AU"],
      availableLanguage: ["en", "hi"],
      email: "ajsal@frameleads.com",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/frameleads",
    "https://www.instagram.com/frameleads/",
    "https://www.facebook.com/profile.php?id=61577223400100",
    "https://www.youtube.com/@ajsalabbas8093",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
}

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Frameleads",
  description: SITE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blogs?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SchemaInjector schema={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]} />
        {children}
        <StickyMobileCTA />
        <GoogleAnalyticsComponent GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
      </body>
    </html>
  )
}
