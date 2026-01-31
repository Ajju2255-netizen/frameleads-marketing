import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import GoogleAnalyticsComponent from "./components/google-analytics"
import { GA_MEASUREMENT_ID } from "../lib/analytics"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frameleads | Best Digital Marketing Agency with Shark Tank India Experience",
  description:
    "Performance marketing agency trusted by brands on Shark Tank India. SEO, PPC, Social, and CRO that drive 300%+ ROI growth. Get your free marketing audit.",
  generator: 'frameleads',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Google Ads Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17423294527"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17423294527');
        `}
      </Script>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalyticsComponent GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
