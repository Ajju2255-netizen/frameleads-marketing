import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Healthcare & Medical Marketing | Patient Acquisition & HIPAA-Compliant Growth | Frameleads',
    description: 'Enterprise-level healthcare marketing for hospitals, clinics, and telehealth. specialize in HIPAA-compliant SEO, patient acquisition, and Medical E-E-A-T strategy.',
    alternates: {
        canonical: 'https://frameleads.com/healthcare-and-medical',
    },
    openGraph: {
        title: 'Healthcare & Medical Marketing | Patient Acquisition & HIPAA-Compliant Growth',
        description: 'HIPAA-compliant healthcare marketing and patient acquisition for hospitals, specialized clinics, and telehealth brands.',
        url: 'https://frameleads.com/healthcare-and-medical',
        siteName: 'Frameleads',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Healthcare & Medical Marketing | Patient Acquisition & HIPAA-Compliant Growth',
        description: 'HIPAA-compliant healthcare marketing and patient acquisition for hospitals, specialized clinics, and telehealth brands.',
    },
}

export default function HealthcareLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
