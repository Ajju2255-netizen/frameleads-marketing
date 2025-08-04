'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, trackEvent } from '../lib/analytics'

export const useAnalytics = () => {
  const pathname = usePathname()

  // Track page views
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname)
    }
  }, [pathname])

  // Custom event tracking functions
  const trackButtonClick = (buttonName: string, page?: string) => {
    trackEvent('click', 'button', buttonName, undefined)
  }

  const trackFormSubmission = (formName: string) => {
    trackEvent('submit', 'form', formName, undefined)
  }

  const trackContactClick = (method: string) => {
    trackEvent('click', 'contact', method, undefined)
  }

  const trackServiceClick = (serviceName: string) => {
    trackEvent('click', 'service', serviceName, undefined)
  }

  const trackTestimonialView = (testimonialName: string) => {
    trackEvent('view', 'testimonial', testimonialName, undefined)
  }

  return {
    trackButtonClick,
    trackFormSubmission,
    trackContactClick,
    trackServiceClick,
    trackTestimonialView,
  }
} 