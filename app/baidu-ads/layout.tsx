import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Baidu Ads Management & China Market Entry | Frameleads",
    description: "Enterprise-level Baidu advertising, ICP license management, and ERNIE Bot AI optimization for Western brands entering China. Master the 1.4B user market.",
}

export default function BaiduAdsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
