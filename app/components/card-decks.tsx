import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function CardDecks() {
  const cardDecks = [
    {
      id: 1,
      eyebrow: "🚀 Performance Marketing Excellence",
      title: "Data-Driven Digital Marketing That Delivers ROI",
      description:
        "Transform your business with our performance marketing expertise. Our data-driven approach combines advanced analytics, A/B testing, and real-time optimization to maximize your marketing ROI. We help businesses achieve 300%+ revenue growth through strategic campaign management across all digital channels.",
      cta: "Boost Your Marketing ROI",
      image: "/card-deck/deck-1.jpg",
      imageAlt: "Performance marketing dashboard showing ROI improvements",
    },
    {
      id: 2,
      eyebrow: "📈 Technical SEO & Website Optimization",
      title: "Technical SEO That Boosts Rankings & Conversions",
      description:
        "Eliminate technical barriers that prevent your website from ranking higher and converting visitors. Our comprehensive technical SEO audit identifies and fixes site speed issues, mobile responsiveness problems, Core Web Vitals, and schema markup to boost your search performance and user experience.",
      cta: "Get Technical SEO Audit",
      image: "/card-deck/deck-2.jpg",
      imageAlt: "Technical SEO analysis and optimization report",
    },
    {
      id: 3,
      eyebrow: "🎯 Content Marketing & Social Media Strategy",
      title: "Content That Ranks, Engages & Converts",
      description:
        "Drive organic traffic with high-quality, SEO-optimized content that your audience loves. Our content marketing strategies combine keyword research, competitor analysis, and user intent to create blog posts, landing pages, and social media content that ranks well and generates qualified leads.",
      cta: "Start Content Strategy",
      image: "/card-deck/deck-3.jpg",
      imageAlt: "Content performance metrics and social media analytics",
    },
  ]

  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Gradient Lines - Circuit Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-[#FF6B35]/25 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#FF6B35]/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-[#FF6B35]/25 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#FF6B35]/25 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-px h-1/3 bg-gradient-to-b from-transparent via-[#FF6B35]/20 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-[#FF6B35]/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A5A5A] mb-6">
            Comprehensive Digital Marketing Solutions for Every Business Need
          </h2>
          <p className="text-xl text-[#5A5A5A]/80 max-w-3xl mx-auto">
            From performance marketing to technical optimization, we provide end-to-end digital marketing services that drive real
            results for businesses in India, USA, and UAE markets.
          </p>
        </div>

        {/* Card Decks */}
        <div className="space-y-20">
          {cardDecks.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                {/* Eyebrow */}
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 backdrop-blur-xl text-[#FF6B35] px-4 py-2 rounded-full text-sm font-medium border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 transition-all duration-300">
                    {card.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A5A5A] leading-tight">{card.title}</h3>

                {/* Description */}
                <p className="text-lg text-[#5A5A5A]/80 leading-relaxed max-w-2xl">{card.description}</p>

                {/* CTA */}
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 group">
                      {card.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-[#FFE4D6]/30 shadow-2xl group-hover:border-[#FF6B35]/40 transition-all duration-300">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <Card className="bg-white/80 backdrop-blur-xl border-[#FFE4D6]/30 hover:border-[#FF6B35]/50 transition-all duration-500 p-12">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-[#5A5A5A] mb-4">Ready to Transform Your Digital Marketing Strategy?</h3>
              <p className="text-xl text-[#5A5A5A]/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive digital marketing solutions can help your business achieve sustainable growth and
                dominate search results across all channels.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Schedule Free Strategy Call
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
