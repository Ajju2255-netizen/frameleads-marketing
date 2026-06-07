"use client";

/**
 * Meta (Facebook) Pixel loader — env-gated via NEXT_PUBLIC_META_PIXEL_ID.
 *
 * Server-side CAPI runs from the Worker on conversion events (out of scope
 * here). This client-side pixel handles the standard PageView signal +
 * receives Lead events fired from submitLead() on successful submissions.
 *
 * Renders nothing if the env var isn't set, so dev / preview environments
 * don't bombard Meta with junk pixel hits.
 */

import Script from "next/script";

type Props = { pixelId?: string };

export function MetaPixel({ pixelId }: Props) {
	if (!pixelId) return null;
	return (
		<>
			<Script id="meta-pixel" strategy="afterInteractive">
				{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');
				`}
			</Script>
			<noscript>
				<img
					height="1"
					width="1"
					style={{ display: "none" }}
					src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
					alt=""
				/>
			</noscript>
		</>
	);
}
