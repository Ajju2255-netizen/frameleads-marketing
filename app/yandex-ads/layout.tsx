import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Yandex Ads Management & Neural Growth Engineering | Frameleads',
    description: 'Master the Eurasian market with Neural-First Yandex Ads. Leveraging YandexART 2.0, YandexGPT, and Ecomm+ scaling for 2026 performance growth in CIS & Middle East.',
    keywords: 'Yandex Ads, Yandex Direct, YandexART 2.0, YandexGPT, Yandex Metrica, CIS Market Entry, E-commerce Yandex, Ecomm+',
    alternates: {
        canonical: 'https://frameleads.com/yandex-ads',
    },
}

export default function YandexAdsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
