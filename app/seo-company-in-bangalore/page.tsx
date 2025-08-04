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

  const seoServices = [
    {
      icon: MapPin,
      title: "Local SEO Services Bangalore",
      description: "Dominate 'near me' searches with optimized Google My Business, local citations, and location-based keyword targeting for Bangalore businesses.",
    },
    {
      icon: TrendingUp,
      title: "Technical SEO Optimization",
      description: "Complete website optimization including site speed, mobile responsiveness, and technical SEO audits for better search engine rankings.",
    },
    {
      icon: Users,
      title: "Content Marketing & SEO",
      description: "SEO-optimized content creation that targets Bangalore-specific keywords and resonates with local audiences.",
    },
    {
      icon: Award,
      title: "E-commerce SEO Services",
      description: "Specialized SEO for Bangalore e-commerce businesses to increase online sales and product visibility.",
    },
  ]

  const seoProcess = [
    {
      step: "01",
      title: "Bangalore SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance, competitor research, and keyword opportunities specific to Bangalore market.",
    },
    {
      step: "02", 
      title: "Strategic SEO Planning",
      description: "Develop customized SEO strategy targeting high-converting keywords for your industry and location in Bangalore.",
    },
    {
      step: "03",
      title: "Technical & On-Page Optimization",
      description: "Implement technical SEO improvements, optimize content, and enhance website structure for better search visibility.",
    },
    {
      step: "04",
      title: "Local SEO & Citation Building",
      description: "Optimize Google My Business, build local citations, and improve local search rankings across Bangalore areas.",
    },
  ]

  const whyChooseUs = [
    "5+ years serving Bangalore businesses with proven SEO results",
    "500+ successful SEO clients across all industries in Bangalore",
    "Deep understanding of Bangalore's competitive digital landscape",
    "Google My Business optimization experts for local SEO",
    "Technical SEO specialists with latest algorithm knowledge",
    "Local citation building and NAP consistency management",
    "Bangalore-focused content creation and keyword research",
    "Regular SEO training and algorithm update implementation",
  ]

  const caseStudies = [
    {
      industry: "Tech Startup",
      location: "Koramangala",
      result: "400% increase in organic traffic",
      description: "Helped a SaaS startup achieve #1 rankings for competitive keywords in Bangalore's tech sector within 6 months.",
    },
    {
      industry: "Restaurant Chain", 
      location: "Indiranagar & Whitefield",
      result: "300% increase in foot traffic",
      description: "Optimized local SEO for multi-location restaurant chain, dominating food delivery searches across Bangalore.",
    },
    {
      industry: "Real Estate Agency",
      location: "Electronic City",
      result: "400% increase in property inquiries",
      description: "Boosted online visibility for premium real estate agency, capturing high-value leads in Electronic City area.",
    },
  ]

  const faqData = [
    {
      question: "Why choose a Bangalore-based SEO company?",
      answer: "A local SEO company in Bangalore provides deep market knowledge, understands local consumer behavior, and can optimize for Bangalore-specific keywords and local search patterns. Frameleads has 5+ years of experience serving Bangalore businesses with proven results."
    },
    {
      question: "How long does it take to see SEO results in Bangalore?",
      answer: "SEO results in Bangalore typically show initial improvements within 3-6 months, with significant growth achieved in 6-12 months. Local SEO can show faster results for 'near me' searches, while technical SEO builds long-term organic growth."
    },
    {
      question: "What makes Frameleads the best SEO company in Bangalore?",
      answer: "Frameleads stands out as the top SEO company in Bangalore due to our 500+ successful client projects, deep local market expertise, comprehensive service offering, and proven track record of delivering measurable ROI for Bangalore businesses."
    },
    {
      question: "Do you provide SEO services to startups in Bangalore?",
      answer: "Yes! We specialize in startup SEO in Bangalore, understanding the unique challenges and opportunities in Bangalore's vibrant startup ecosystem. We offer flexible SEO packages designed specifically for growing businesses and startups."
    },
    {
      question: "What areas of Bangalore do you serve for SEO?",
      answer: "We provide comprehensive SEO services across all Bangalore areas including Koramangala, Indiranagar, Whitefield, Electronic City, Marathahalli, BTM Layout, Jayanagar, HSR Layout, Banashankari, Rajajinagar, Malleshwaram, and Yelahanka."
    }
  ]
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Frameleads",
        "description": "Best SEO Company in Bangalore | 400% Traffic Growth Guaranteed",
        "url": "https://frameleads.com/seo-company-in-bangalore",
        "telephone": "+91 63628 21368",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 SEO Street, Koramangala",
          "addressLocality": "Bangalore",
          "addressRegion": "KA",
          "postalCode": "560034",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": bangaloreAreas.map(area => ({
          "@type": "City",
          "name": area,
        })),
        "priceRange": "$$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Services",
          "itemListElement": seoServices.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description
            }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "WebSite",
        "url": "https://frameleads.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://frameleads.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              </span>{" "}
              400% Traffic Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
              Dominate local search results and grow your Bangalore business with our proven SEO strategies. As the leading SEO company in Bangalore, we've helped 500+ local businesses achieve 400% traffic growth, rank higher on Google, and increase revenue through comprehensive technical SEO, local SEO optimization, and content marketing services.
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
                Why Frameleads is the Best SEO Company in Bangalore?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                As the leading SEO company in Bangalore, we combine deep local market knowledge with cutting-edge technical SEO expertise. Our proven track record of delivering 400% traffic growth for Bangalore businesses makes us the preferred choice for local SEO services, technical SEO optimization, and comprehensive digital marketing solutions.
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
              Comprehensive SEO Services in Bangalore
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our complete SEO services in Bangalore include technical SEO optimization, local SEO for 'near me' searches, content marketing, and e-commerce SEO. We help Bangalore businesses dominate search results and achieve sustainable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => {
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

      {/* SEO Process Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven SEO Process for Bangalore Businesses
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a systematic SEO approach specifically designed for the Bangalore market, combining technical expertise, local market knowledge, and data-driven strategies to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((process, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
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

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions About SEO in Bangalore
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about SEO services in Bangalore and how Frameleads can help your business grow.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
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
    </>
  )
}
