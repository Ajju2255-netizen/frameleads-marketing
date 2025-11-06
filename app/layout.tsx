import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalyticsComponent from "./components/google-analytics"
import { GA_MEASUREMENT_ID } from "../lib/analytics"

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
      <body className={`${inter.className}`}>
        {children}
        <GoogleAnalyticsComponent GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
