import Image from "next/image"
import { Star } from "lucide-react"
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
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Marketing Director, GrowthCorp",
      image: "/testimonials/priya-sharma.png",
      rating: 5,
      testimonial:
        "Working with Frameleads was a game-changer. They helped us achieve 4x lead generation increase while reducing cost-per-lead by 35%. Their performance marketing expertise is unmatched!",
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder, DigitalEdge",
      image: "/testimonials/amit-patel.png",
      rating: 5,
      testimonial:
        "The team at Frameleads is incredibly professional and results-driven. Our website now ranks on the first page for all our main keywords. ROI has been exceptional with 400% revenue growth!",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "E-commerce Manager, StyleHub",
      image: "/testimonials/sneha-reddy.png",
      rating: 5,
      testimonial:
        "Frameleads helped us dominate local search results. Our store visits increased by 180% and online sales doubled. Their comprehensive digital marketing approach is unmatched!",
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Director, InnovateLabs",
      image: "/testimonials/vikram-singh.png",
      rating: 5,
      testimonial:
        "Outstanding results! Our website traffic grew from 5K to 50K monthly visitors. Frameleads' technical SEO audit and implementation was thorough and effective.",
    },
    {
      id: 6,
      name: "Kavya Nair",
      position: "CMO, BrandBoost",
      image: "/testimonials/kavya-nair.png",
      rating: 5,
      testimonial:
        "The content strategy and keyword research from Frameleads was spot-on. We're now ranking for over 200 keywords and our conversion rate improved by 120%.",
    },
    {
      id: 7,
      name: "Arjun Mehta",
      position: "Owner, LocalBiz Pro",
      image: "/testimonials/arjun-mehta.png",
      rating: 5,
      testimonial:
        "Frameleads delivered exactly what they promised. Our Google My Business optimization and local citations helped us become the top choice in our area.",
    },
    {
      id: 8,
      name: "Deepika Joshi",
      position: "Marketing Head, ScaleUp Inc",
      image: "/testimonials/deepika-joshi.png",
      rating: 5,
      testimonial:
        "Professional, transparent, and results-oriented. Frameleads helped us achieve first-page rankings for competitive keywords. Our organic leads increased 4x!",
    },
    {
      id: 9,
      name: "Rohit Gupta",
      position: "Founder, NextGen Digital",
      image: "/testimonials/rohit-gupta.png",
      rating: 5,
      testimonial:
        "The best digital marketing agency in India! Their data-driven approach and monthly reports keep us informed. Our search visibility improved dramatically in just 4 months.",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
    ))
  }

  return (
    <section className="bg-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories: Proven Digital Marketing Results</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners across India, USA, and UAE are saying about their
            experience with Frameleads' digital marketing services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-gray-600"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">Ready to join our success stories?</p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              Get Your Free Digital Marketing Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
