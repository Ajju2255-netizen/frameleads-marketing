import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
      image: "/card-deck/deck-2.png",
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
    <section className="bg-gray-800 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Digital Marketing Solutions for Every Business Need
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                  <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600">
                    {card.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{card.title}</h3>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">{card.description}</p>

                {/* CTA */}
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 group">
                      {card.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl bg-gray-700 shadow-2xl">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 bg-gray-900 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Marketing Strategy?</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive digital marketing solutions can help your business achieve sustainable growth and
            dominate search results across all channels.
          </p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              Schedule Free Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
