import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Financial Services Marketing | Fintech, Banking & Wealth Management Growth | Frameleads',
    description: 'Compliance-first digital growth for Fintech, Wealth Management, and Banking sectors. We specialize in Audit-Ready tracking, deep-funnel attribution, and Financial E-E-A-T.',
    alternates: {
        canonical: 'https://frameleads.com/financial-services',
    },
    openGraph: {
        title: 'Financial Services Marketing | Fintech, Banking & Wealth Management Growth',
        description: 'High-trust digital ecosystems for financial entities. Scale your Fintech or Wealth Management firm with performance-first engineering.',
        url: 'https://frameleads.com/financial-services',
        siteName: 'Frameleads',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Financial Services Marketing | Fintech, Banking & Wealth Management Growth',
        description: 'High-trust digital ecosystems for financial entities. Scale your Fintech or Wealth Management firm with performance-first engineering.',
    },
}

export default function FinancialLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
