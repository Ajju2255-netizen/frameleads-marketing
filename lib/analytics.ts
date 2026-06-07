// Google Analytics Configuration
export const GA_MEASUREMENT_ID = 'G-Z1JNH8RDXW'

// Custom event tracking function
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Conversion-adjacent click tracking. Use on the same anchor element that
// surfaces the contact intent so GA4 + Meta Pixel both receive a tagged event
// even when the user picks the WhatsApp / phone shortcut instead of the form.
export const trackContactClick = (
  channel: 'whatsapp' | 'tel' | 'mailto',
  source?: string,
) => {
  if (typeof window === 'undefined') return
  try {
    if (window.gtag) {
      window.gtag('event', 'contact_clicked', {
        channel,
        source: source || 'unknown',
        page_url: window.location.href,
      })
    }
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
    if (typeof fbq === 'function') {
      fbq('track', 'Contact', { channel, source: source || 'unknown' })
    }
  } catch {
    // best effort — never throw from tracking
  }
}

// Declare gtag + fbq on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>,
    ) => void
    fbq?: (...args: unknown[]) => void
  }
}
