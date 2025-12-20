
import Link from "next/link"

const links = [
    {
        title: "Core Services",
        items: [
            { name: "Digital Marketing", href: "/digital-marketing-services" },
            { name: "SEO Services", href: "/seo-services" },
            { name: "PPC Management", href: "/ppc-management" },
            { name: "Content Marketing", href: "/content-marketing" },
        ],
    },
    {
        title: "Bangalore Services",
        items: [
            { name: "SEO Bangalore", href: "/seo-company-in-bangalore" },
            { name: "Digital Marketing Bangalore", href: "/digital-marketing-in-bangalore" },
            { name: "Creative Agency", href: "/creative-advertising-company-in-bangalore" },
        ],
    },
    {
        title: "Industries",
        items: [
            { name: "Tech & SaaS", href: "/technology-and-saas" },
            { name: "Healthcare", href: "/healthcare-and-medical" },
            { name: "Real Estate", href: "/real-estate-marketing-company-in-bangalore" },
        ],
    },
]

export default function RelatedResources() {
    return (
        <section className="py-16 bg-white border-t border-[#FFE4D6]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Detailed Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {links.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-lg font-bold text-[#FF6B35] mb-4">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.items.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
