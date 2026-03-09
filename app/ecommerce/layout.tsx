import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'E-commerce & Retail Marketing | High-Velocity Growth Engineering | Frameleads',
    description: 'Scale your online store with profit-first growth engineering. We specialize in Server-Side CAPI, Feed Optimization, and Omnichannel Retail strategy for Shopify, Magento & Custom stacks.',
    alternates: {
        canonical: 'https://frameleads.com/ecommerce-marketing',
    },
    openGraph: {
        title: 'E-commerce & Retail Marketing | High-Velocity Growth Engineering',
        description: 'Bypass signal decay and scale your retail brand with MER-focused performance marketing and predictive LTV modeling.',
        url: 'https://frameleads.com/ecommerce-marketing',
        siteName: 'Frameleads',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'E-commerce & Retail Marketing | High-Velocity Growth Engineering',
        description: 'Bypass signal decay and scale your retail brand with MER-focused performance marketing and predictive LTV modeling.',
    },
}

export default function EcommerceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
