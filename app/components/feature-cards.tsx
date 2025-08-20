import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function FeatureCards() {
  const features = [
    {
      id: 1,
      image: "/1.svg",
      title: "Search Engine Optimization (SEO)",
      description:
        "Dominate search rankings with our advanced SEO strategies. Our technical SEO experts optimize your website for maximum visibility, targeting high-converting keywords that drive qualified traffic and increase organic revenue by up to 400%.",
    },
    {
      id: 2,
      image: "/2.svg",
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Maximize your advertising ROI with expertly managed Google Ads, Facebook Ads, and LinkedIn campaigns. Our certified PPC specialists create data-driven campaigns that reduce cost-per-acquisition while increasing conversion rates.",
    },
    {
      id: 3,
      image: "/3.svg",
      title: "Content Marketing & Strategy",
      description:
        "Engage your audience with compelling content that builds brand authority and drives conversions. Our content marketing experts create SEO-optimized blogs, whitepapers, and social media content that positions your brand as an industry leader.",
    },
    {
      id: 4,
      image: "/4.svg",
      title: "Social Media Marketing",
      description:
        "Build a powerful social media presence that engages customers and drives sales. Our social media specialists create platform-specific strategies for Instagram, Facebook, LinkedIn, and Twitter that increase follower engagement and brand awareness.",
    },
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Digital Marketing Services for Business Growth</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive digital marketing services are designed to help your business dominate search results, 
            drive qualified traffic, and achieve sustainable growth across all digital channels.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Cover Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to see how these services can transform your business?</p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Speak with Growth Specialists
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
