# Google Analytics Setup Guide

This project has been configured with Google Analytics 4 (GA4) integration using Next.js 15's built-in third-party support.

## Setup Instructions

### 1. Create a Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your Measurement ID (starts with "G-")

### 2. Configure Environment Variables

Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

### 3. Verify Installation

The Google Analytics script will automatically load on all pages. You can verify it's working by:

1. Opening your website
2. Opening Google Analytics Real-Time reports
3. Checking if your visit appears in the real-time data

## Features Included

### Automatic Page View Tracking
- All page views are automatically tracked
- Uses Next.js App Router for accurate navigation tracking

### Custom Event Tracking
The following custom events are available through the `useAnalytics` hook:

- **Button Clicks**: `trackButtonClick(buttonName)`
- **Form Submissions**: `trackFormSubmission(formName)`
- **Contact Clicks**: `trackContactClick(method)`
- **Service Clicks**: `trackServiceClick(serviceName)`
- **Testimonial Views**: `trackTestimonialView(testimonialName)`

### Usage Example

```tsx
'use client'

import { useAnalytics } from '@/hooks/use-analytics'

export default function ContactButton() {
  const { trackContactClick } = useAnalytics()

  const handleContactClick = () => {
    trackContactClick('phone')
    // Your contact logic here
  }

  return (
    <button onClick={handleContactClick}>
      Contact Us
    </button>
  )
}
```

## Privacy Compliance

This implementation:
- Respects user privacy settings
- Works with ad blockers
- Complies with GDPR requirements
- Only tracks essential analytics data

## Troubleshooting

1. **Analytics not showing**: Check that your Measurement ID is correct
2. **Events not tracking**: Ensure you're using the hook in client components
3. **Development vs Production**: Analytics work in both environments

## Files Modified

- `app/layout.tsx` - Added Google Analytics component
- `app/components/google-analytics.tsx` - Google Analytics component
- `lib/analytics.ts` - Analytics configuration and utilities
- `hooks/use-analytics.ts` - Custom analytics hook

## Next Steps

1. Replace the placeholder Measurement ID with your actual GA4 ID
2. Test the integration in development
3. Deploy to production and verify tracking
4. Set up custom goals and conversions in Google Analytics 