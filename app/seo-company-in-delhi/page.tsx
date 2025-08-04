import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function SEOCompanyBangalorePage() {
  const bangaloreAreas = [
    "Koramangala",
    "Indiranagar",
    "Whitefield",
    "Electronic City",
    "Marathahalli",
    "BTM Layout",
    "Jayanagar",
    "HSR Layout",
    "Banashankari",
    "Rajajinagar",
    "Malleshwaram",
    "Yelahanka",
  ]

  const localServices = [
    {
      icon: MapPin,
      title: "Local SEO Optimization",
      description: "Dominate local search results in Bangalore with optimized Google My Business and local citations.",
    },
    {
      icon: TrendingUp,
      title: "Bangalore Market Analysis",
      description: "Deep understanding of Bangalore's competitive landscape and consumer behavior patterns.",
    },
    {
      icon: Users,
      title: "Local Content Strategy",
      description: "Create content that resonates with Bangalore audiences and targets local search queries.",
    },
    {
      icon: Award,
      title: "Multi-location SEO",
      description: "Optimize for multiple Bangalore locations to capture customers across the city.",
    },
  ]

  const whyChooseUs = [
    "5+ years serving Bangalore businesses",
    "500+ local clients across all industries",
    "Deep knowledge of Bangalore market dynamics",
    "Proven track record with local businesses",
    "Google My Business optimization experts",
    "Local citation building specialists",
    "Bangalore-focused content creation",
    "Regular local SEO training and updates",
  ]

  const caseStudies = [
    {
      industry: "Restaurant Chain",
      location: "Koramangala & Indiranagar",
      result: "300% increase in foot traffic",
      description:
        "Helped a local restaurant chain dominate food delivery searches across multiple Bangalore locations.",
    },
    {
      industry: "Healthcare Clinic",
      location: "Whitefield",
      result: "250% more appointment bookings",
      description: "Optimized local SEO for a healthcare clinic, making them #1 for medical services in Whitefield.",
    },
    {
      industry: "Real Estate Agency",
      location: "Electronic City",
      result: "400% increase in property inquiries",
      description: "Boosted online visibility for a real estate agency, capturing more leads in Electronic City area.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
                🏆 #1 SEO Company in Bangalore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Best SEO Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Bangalore
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
              Dominate local search results and grow your Bangalore business with our proven SEO strategies. We've
              helped 500+ local businesses rank higher, drive more traffic, and increase revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Free Bangalore SEO Audit
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>Call: +91 63628 21368</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>500+ Bangalore clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>5+ years local experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Guaranteed results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Frameleads as Your Bangalore SEO Partner?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                As a local Bangalore SEO company, we understand the unique challenges and opportunities in the Silicon
                Valley of India. Our deep market knowledge and proven strategies help businesses dominate local search
                results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Bangalore+SEO+Results"
                alt="Bangalore SEO results dashboard"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized SEO Services for Bangalore Businesses
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive SEO services are tailored specifically for the Bangalore market, helping local
              businesses outrank competitors and attract more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Areas We Serve in Bangalore</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide comprehensive SEO services across all major areas of Bangalore, helping businesses in every
              locality dominate local search results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bangaloreAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <MapPin className="h-5 w-5 text-red-500 mx-auto mb-2" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Don't see your area listed? We serve all of Bangalore!</p>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
                Check If We Serve Your Area
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bangalore Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped local Bangalore businesses achieve remarkable growth through strategic SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-red-500 mb-2">{study.result}</div>
                    <h3 className="text-xl font-semibold text-white">{study.industry}</h3>
                    <p className="text-gray-400 text-sm">{study.location}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Dominate Bangalore Search Results?"
        description="Join 500+ successful Bangalore businesses that trust Frameleads for their SEO needs. Get your free audit and discover how we can help you outrank your competitors."
        primaryButtonText="Get Free SEO Audit"
        secondaryButtonText="Schedule Consultation"
      />

      <Footer />
    </div>
  )
}
