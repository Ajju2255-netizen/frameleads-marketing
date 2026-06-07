import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Shopify Ads Management & Signal Engineering | Frameleads",
    description: "Frameleads engineers High-Fidelity Shopify Ad Ecosystems with Server-Side CAPI, PMax optimization, and MER-based profit scaling. Fix signal decay, recover attribution, and scale profitably.",
}

export default function ShopifyAdsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
