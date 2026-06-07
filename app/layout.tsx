import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalyticsComponent from "./components/google-analytics"
import { GA_MEASUREMENT_ID } from "../lib/analytics"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = "https://frameleads.com";
const SITE_TITLE = "Frameleads | Best Digital Marketing Agency with Shark Tank India Experience";
const SITE_DESCRIPTION = "Performance marketing agency trusted by brands on Shark Tank India. SEO, PPC, Social, and CRO that drive 300%+ ROI growth. Get your free marketing audit.";
const OG_IMAGE = "/og-default.png"; // TODO replace with branded 1200×630 asset (Phase 3 will add /api/og dynamic)

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Frameleads",
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <GoogleAnalyticsComponent GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
