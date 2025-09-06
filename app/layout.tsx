import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import GoogleAnalyticsComponent from "./components/google-analytics"
import { GA_MEASUREMENT_ID } from "../lib/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frameleads - Best SEO Company in Bangalore",
  description:
    "Drive organic traffic and boost your search rankings with Bangalore's most trusted SEO experts. Get proven results with Frameleads.",
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
