import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Search, Target, FileText, Share2, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export default function FeatureCards() {
  const features = [
    {
      id: 1,
      image: "/1.svg",
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      shortTitle: "SEO",
      description:
        "Dominate search rankings with our advanced SEO strategies. Our technical SEO experts optimize your website for maximum visibility, targeting high-converting keywords that drive qualified traffic and increase organic revenue by up to 400%.",
      benefits: ["400% Revenue Increase", "Top 3 Rankings", "Technical SEO"],
      color: "from-blue-400 to-cyan-400",
      link: "/seo-services"
    },
    {
      id: 2,
      image: "/2.svg",
      icon: Target,
      title: "Pay-Per-Click (PPC) Advertising",
      shortTitle: "PPC",
      description:
        "Maximize your advertising ROI with expertly managed Google Ads, Facebook Ads, and LinkedIn campaigns. Our certified PPC specialists create data-driven campaigns that reduce cost-per-acquisition while increasing conversion rates.",
      benefits: ["50% Lower CPA", "Expert Management", "Multi-Platform"],
      color: "from-green-400 to-emerald-400",
      link: "/ppc-management"
    },
    {
      id: 3,
      image: "/3.svg",
      icon: FileText,
      title: "Content Marketing & Strategy",
      shortTitle: "Content",
      description:
        "Engage your audience with compelling content that builds brand authority and drives conversions. Our content marketing experts create SEO-optimized blogs, whitepapers, and social media content that positions your brand as an industry leader.",
      benefits: ["Brand Authority", "SEO Optimized", "Engagement Focus"],
      color: "from-purple-400 to-pink-400",
      link: "/content-marketing"
    },
    {
      id: 4,
      image: "/4.svg",
      icon: Share2,
      title: "Social Media Marketing",
      shortTitle: "Social Media",
      description:
        "Build a powerful social media presence that engages customers and drives sales. Our social media specialists create platform-specific strategies for Instagram, Facebook, LinkedIn, and Twitter that increase follower engagement and brand awareness.",
      benefits: ["Multi-Platform", "Engagement Growth", "Brand Awareness"],
      color: "from-orange-400 to-red-400",
      link: "/Social-media-marketing"
    },
  ]

  return (
    <section id="services" className="relative py-20">
      {/* Background Gradient Lines - Diamond Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/15 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#FF6B35]/15 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/10 to-transparent"></div>
        <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A5A5A] mb-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] bg-clip-text text-transparent leading-[1.3] py-3">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-xl text-[#5A5A5A]/80 max-w-3xl mx-auto leading-relaxed py-1">
            Our comprehensive digital marketing services are designed to help your business dominate search results, 
            drive qualified traffic, and achieve sustainable growth across all digital channels.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Link key={feature.id} href={feature.link} className="block">
                <Card className="group relative bg-white/90 backdrop-blur-xl border-[#FFE4D6]/40 hover:border-[#FF6B35]/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF6B35]/15 overflow-hidden rounded-2xl cursor-pointer">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Sparkles className="h-5 w-5 text-[#FF6B35] animate-pulse" />
                </div>

                <CardContent className="p-0 relative z-10">
                  {/* Header Section with Icon and Badge */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 px-3 py-1 rounded-full border border-[#FF6B35]/20">
                        <span className="text-xs font-medium text-[#FF6B35]">{feature.shortTitle}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#5A5A5A] mb-3 group-hover:text-[#FF6B35] transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="px-6 pb-4">
                    <p className="text-[#5A5A5A]/80 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="px-6 pb-6">
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${benefitIndex * 100}ms`}}>
                          <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                          <span className="text-sm font-medium text-[#5A5A5A]/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-6 pb-6">
                    <Link href={feature.link} className="flex items-center gap-2 text-[#FF6B35] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer hover:text-[#FF8A50]">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B35]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-3xl p-8 border border-[#FF6B35]/20 backdrop-blur-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#FF6B35]" />
              <span className="text-sm font-medium text-[#FF6B35]">Ready to Get Started?</span>
            </div>
            <h3 className="text-2xl font-bold text-[#5A5A5A] mb-4">Transform Your Business Today</h3>
            <p className="text-[#5A5A5A]/80 mb-6 max-w-2xl mx-auto leading-relaxed">
              Ready to see how these services can transform your business? Let's discuss your goals and create a custom strategy that delivers results.
            </p>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                <span>Speak with Growth Specialists</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
