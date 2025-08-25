import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Search, Target, FileText, Share2, CheckCircle } from "lucide-react"

export default function FeatureCards() {
  const features = [
    {
      id: 1,
      image: "/1.svg",
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Dominate search rankings with our advanced SEO strategies. Our technical SEO experts optimize your website for maximum visibility, targeting high-converting keywords that drive qualified traffic and increase organic revenue by up to 400%.",
    },
    {
      id: 2,
      image: "/2.svg",
      icon: Target,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Maximize your advertising ROI with expertly managed Google Ads, Facebook Ads, and LinkedIn campaigns. Our certified PPC specialists create data-driven campaigns that reduce cost-per-acquisition while increasing conversion rates.",
    },
    {
      id: 3,
      image: "/3.svg",
      icon: FileText,
      title: "Content Marketing & Strategy",
      description:
        "Engage your audience with compelling content that builds brand authority and drives conversions. Our content marketing experts create SEO-optimized blogs, whitepapers, and social media content that positions your brand as an industry leader.",
    },
    {
      id: 4,
      image: "/4.svg",
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build a powerful social media presence that engages customers and drives sales. Our social media specialists create platform-specific strategies for Instagram, Facebook, LinkedIn, and Twitter that increase follower engagement and brand awareness.",
    },
  ]

  return (
    <section id="services" className="relative py-20">
      {/* Background Gradient Lines - Diamond Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500/15 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive digital marketing services are designed to help your business dominate search results, 
            drive qualified traffic, and achieve sustainable growth across all digital channels.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.id}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative z-10">
                  {/* Cover Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to see how these services can transform your business?</p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
              Speak with Growth Specialists
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
