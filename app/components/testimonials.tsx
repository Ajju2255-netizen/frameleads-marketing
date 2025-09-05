import Image from "next/image"
import { Star, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      image: "/testimonials/rajesh-kumar.png",
      rating: 5,
      testimonial:
        "Frameleads transformed our online presence completely. Our organic traffic increased by 300% in just 6 months. Their digital marketing strategies are simply outstanding!",
      results: "300% Traffic Increase"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Marketing Director, GrowthCorp",
      image: "/testimonials/priya-sharma.png",
      rating: 5,
      testimonial:
        "Working with Frameleads was a game-changer. They helped us achieve 4x lead generation increase while reducing cost-per-lead by 35%. Their performance marketing expertise is unmatched!",
      results: "4x Lead Generation"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder, DigitalEdge",
      image: "/testimonials/amit-patel.png",
      rating: 5,
      testimonial:
        "The team at Frameleads is incredibly professional and results-driven. Our website now ranks on the first page for all our main keywords. ROI has been exceptional with 400% revenue growth!",
      results: "400% Revenue Growth"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "E-commerce Manager, StyleHub",
      image: "/testimonials/sneha-reddy.png",
      rating: 5,
      testimonial:
        "Frameleads helped us dominate local search results. Our store visits increased by 180% and online sales doubled. Their comprehensive digital marketing approach is unmatched!",
      results: "180% Store Visits"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Director, InnovateLabs",
      image: "/testimonials/vikram-singh.png",
      rating: 5,
      testimonial:
        "Outstanding results! Our website traffic grew from 5K to 50K monthly visitors. Frameleads' technical SEO audit and implementation was thorough and effective.",
      results: "10x Traffic Growth"
    },
    {
      id: 6,
      name: "Kavya Nair",
      position: "CMO, BrandBoost",
      image: "/testimonials/kavya-nair.png",
      rating: 5,
      testimonial:
        "The content strategy and keyword research from Frameleads was spot-on. We're now ranking for over 200 keywords and our conversion rate improved by 120%.",
      results: "120% Conversion Rate"
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-amber-400 fill-current" : "text-gray-600"}`} />
    ))
  }

  return (
    <section className="relative py-20">
      {/* Background Gradient Lines - Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/18 to-transparent"></div>
        <div className="absolute top-2/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/15 to-transparent"></div>
        <div className="absolute top-4/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/18 to-transparent"></div>
        <div className="absolute top-5/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/15 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#5A5A5A] mb-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#5A5A5A]/80 max-w-3xl mx-auto">
            Real results from real businesses using our digital marketing strategies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group relative bg-white/80 backdrop-blur-xl border-[#FFE4D6]/30 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <blockquote className="text-[#5A5A5A]/80 mb-4 italic leading-relaxed group-hover:text-[#5A5A5A] transition-colors duration-300">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Results Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 px-3 py-1.5 rounded-full border border-[#FF6B35]/30 mb-4">
                  <Sparkles className="h-4 w-4 text-[#FF6B35]" />
                  <span className="text-[#FF6B35] text-sm font-medium">{testimonial.results}</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF6B35]/30 group-hover:border-[#FF6B35]/50 transition-all duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#5A5A5A] group-hover:text-[#FF6B35] transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#5A5A5A]/70 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#5A5A5A]/70 mb-6 text-lg">Ready to join our success stories?</p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
              Get Your Free Digital Marketing Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
