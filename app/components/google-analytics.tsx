'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export default function GoogleAnalyticsComponent({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
} 