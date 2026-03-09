import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SaaS Growth Engineering & PLG Strategy | Frameleads',
    description: 'Scale your SaaS at the speed of code. Specialized in Product-Led Growth (PLG), PQL orchestration, and feature-driven SEO for software brands globally.',
    keywords: 'SaaS marketing, PLG strategy, Product-Led Growth, PQL orchestration, SaaS SEO, technology marketing, software growth engineering',
}

export default function SaaSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
