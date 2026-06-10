"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

/**
 * GA4 loader — strategy="lazyOnload" defers script until the browser is idle.
 * Replaces @next/third-parties/google which defaults to afterInteractive and
 * blocks the main thread during hydration. Page views still fire correctly
 * because gtag('config') runs once the script lands.
 */
export default function GoogleAnalyticsComponent({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
