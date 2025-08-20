import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users, Award, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Dubai - Frameleads",
  description:
    "Leading digital marketing company in Dubai with 500% ROI guarantee. SEO, PPC, social media & web design services. Get free audit today!",
}

export default function DigitalMarketingCompanyDubaiPage() {
  const dubaiPremiumDistricts = [
    "DIFC",
    "Dubai Marina",
    "Downtown Dubai",
    "Business Bay",
    "Dubai Internet City",
    "Dubai Media City",
    "DMCC",
    "JAFZA",
  ]

  const dubaiGrowingAreas = [
    "Jumeirah",
    "Deira",
    "Bur Dubai",
    "Al Barsha",
    "Motor City",
    "Dubai Silicon Oasis",
    "Al Quoz",
    "International City",
  ]

  const dubaiEmergingMarkets = [
    "Dubai South",
    "Dubai Hills",
    "Mohammed Bin Rashid City",
    "Dubai Design District",
    "Al Jadaf",
    "Dubai Healthcare City",
  ]

  const serviceSections = [
    {
      icon: TrendingUp,
      title: "Search Engine Optimization (SEO) Dubai",
      subtitle: "Rank #1 on Google for high-converting keywords",
      bullets: [
        "Technical SEO audits and optimization",
        "Local SEO for Dubai, UAE market penetration",
        "Arabic keyword research and content optimization",
        "Google My Business optimization for local visibility",
        "E-commerce SEO for UAE consumers",
      ],
    },
    {
      icon: Award,
      title: "Pay-Per-Click (PPC) Advertising Dubai",
      subtitle: "Maximize ROI with targeted Google Ads and social campaigns",
      bullets: [
        "Google Ads management with UAE-specific targeting",
        "Facebook and Instagram ads for MENA region",
        "LinkedIn advertising for B2B lead generation",
        "Shopping ads for e-commerce businesses",
        "Remarketing campaigns for higher conversions",
      ],
    },
    {
      icon: Users,
      title: "Social Media Marketing Dubai",
      subtitle: "Build engaged communities across all platforms",
      bullets: [
        "Instagram marketing for lifestyle brands",
        "LinkedIn strategy for professional services",
        "Facebook advertising with Arabic audience targeting",
        "TikTok marketing for younger demographics",
        "Influencer partnerships with UAE-based creators",
      ],
    },
    {
      icon: MapPin,
      title: "Web Design & Development Dubai",
      subtitle: "Create conversion-optimized websites for UAE market",
      bullets: [
        "Mobile-responsive designs optimized for Middle East users",
        "E-commerce development with payment gateway integration",
        "Arabic language website development",
        "Speed optimization for better user experience",
        "Conversion rate optimization (CRO)",
      ],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Comprehensive Dubai Market Analysis",
      description:
        "In-depth competitor research, UAE consumer behavior analysis, and Arabic keyword discovery to identify the highest-impact opportunities for your business in the Dubai market.",
    },
    {
      step: "02",
      title: "Strategic Campaign Planning",
      description:
        "Custom strategy tailored to Dubai dynamics, including local SEO roadmap, PPC budget allocation, and social media content calendar aligned with UAE cultural preferences.",
    },
    {
      step: "03",
      title: "Multi-Channel Campaign Execution",
      description:
        "Simultaneous optimization across SEO, PPC, social media, and content marketing with continuous monitoring and adjustment for maximum performance.",
    },
    {
      step: "04",
      title: "Performance Tracking & ROI Reporting",
      description:
        "Monthly reports showing traffic growth, lead generation, conversion rates, and ROI metrics with transparent insights into your Dubai marketing investment.",
    },
  ]

  const trustIndicators = [
    "500+ Dubai & UAE clients served successfully",
    "5+ years specializing in Middle East markets",
    "500% average ROI increase guaranteed within 12 months",
    "Google Premier Partner status",
    "Dubai Chamber of Commerce certified member",
  ]

  const keyDifferentiators = [
    "UAE Market Expertise: local consumer behavior, Arabic content, and regulatory compliance",
    "Multi-language Campaigns: Arabic and English strategies for maximum reach",
    "Local SEO Mastery: dominate 'near me' searches across Dubai, Abu Dhabi, and Sharjah",
    "Industry Specialization: real estate, hospitality, retail, fintech, healthcare",
    "24/7 Support: dedicated account managers in Dubai timezone",
  ]

  const caseStudies = [
    {
      industry: "Real Estate Agency",
      location: "Downtown Dubai",
      result: "400% increase in property inquiries",
      challenge: "New property development needed 300% increase in qualified leads",
      solution: "Local SEO + Google Ads + Arabic content marketing",
      description:
        "AED 50M+ in sales within 8 months with multilingual funnels and local search dominance.",
    },
    {
      industry: "Restaurant Chain",
      location: "Dubai Mall & Mall of the Emirates",
      result: "350% increase in weekend reservations",
      challenge: "Increase foot traffic during off-peak hours across 5 locations",
      solution: "Instagram marketing + GMB optimization + influencer partnerships",
      description:
        "200% growth in delivery orders with geo-targeted campaigns and creator collaborations.",
    },
    {
      industry: "Boutique Hotel",
      location: "Dubai Marina",
      result: "300% increase in direct bookings",
      challenge: "Compete with international hotel chains for bookings",
      solution: "Multilingual SEO + booking ads + travel blogger partnerships",
      description:
        "25% reduction in OTA dependency with performance landing pages and remarketing.",
    },
  ]

  const faqData = [
    {
      question: "Why choose a Dubai-based digital marketing company?",
      answer:
        "A local digital marketing agency in Dubai understands UAE market nuances, consumer behavior, cultural preferences, and regulatory requirements. We provide native Arabic content, comply with UAE advertising standards, and optimize for local search patterns.",
    },
    {
      question: "How long does it take to see digital marketing results in Dubai?",
      answer:
        "SEO results typically appear within 3-6 months for competitive Dubai keywords. PPC campaigns generate immediate traffic, while comprehensive strategies show significant ROI improvements within 6-12 months.",
    },
    {
      question: "What makes Frameleads the best digital marketing company in Dubai?",
      answer:
        "International expertise combined with deep UAE market knowledge, 500+ local clients, guaranteed ROI improvements, and full-stack services across SEO, PPC, social, and web.",
    },
    {
      question: "Do you work with small businesses and startups in Dubai?",
      answer:
        "Absolutely. We serve startups in DIFC to enterprises in Dubai Internet City with flexible packages that fit varied budgets while delivering measurable results.",
    },
    {
      question: "What industries do you specialize in for Dubai digital marketing?",
      answer:
        "Real estate, hospitality, retail, healthcare, fintech, education, and professional services.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Frameleads",
        "description": "Best Digital Marketing Company in Dubai | 500% ROI Growth Guaranteed",
        "url": "https://frameleads.com/seo-company-in-dubai",
        "telephone": "+971-4-000-0000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dubai Internet City",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "areaServed": [
          ...[...dubaiPremiumDistricts, ...dubaiGrowingAreas, ...dubaiEmergingMarkets].map(area => ({
            "@type": "City",
            "name": area,
          }))
        ],
        "priceRange": "$$$",
        "openingHours": "Su-Th 09:00-18:00",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": serviceSections.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.subtitle
            }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
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
                🏆 Best Digital Marketing Company in Dubai
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Best Digital Marketing Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Dubai
              </span>{" "}
              500% ROI Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your business with Dubai's most trusted digital marketing agency. Frameleads delivers measurable results for 500+ UAE businesses through data-driven strategies, advanced analytics, and local market expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Free Dubai Digital Marketing Audit
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              {trustIndicators.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
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
                Why Frameleads is the Top Digital Marketing Company in Dubai?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                As a premier digital marketing agency in Dubai, we combine deep UAE market knowledge with cutting-edge digital strategies. Our proven track record includes delivering 500% ROI growth for businesses across Emirates, from startups in DIFC to enterprises in Dubai Internet City.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyDifferentiators.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full">
              <Image
                src="/arab.svg?height=500&width=600&text=Dubai+Marketing+Results"
                alt="Dubai digital marketing results dashboard"
                fill
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Digital Marketing Services in Dubai
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full-funnel growth services across SEO, PPC, social media, and web development to capture, convert, and retain customers in the UAE market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceSections.map((service, index) => {
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
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{service.subtitle}</p>
                    <ul className="text-left text-gray-400 space-y-2">
                      {service.bullets.map((item: string, i: number) => (
                        <li key={i} className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven Digital Marketing Process for Dubai Businesses
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a systematic, data-driven approach tailored for the UAE market to deliver repeatable and measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-6">Dubai Areas We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide digital marketing services to businesses across Dubai's premium districts, growing commercial areas, and emerging markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Premium Business Districts</h3>
              <div className="grid grid-cols-2 gap-3">
                {dubaiPremiumDistricts.map((area, index) => (
                  <div key={index} className="bg-gray-800 rounded px-3 py-2 text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Growing Commercial Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {dubaiGrowingAreas.map((area, index) => (
                  <div key={index} className="bg-gray-800 rounded px-3 py-2 text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Emerging Markets</h3>
              <div className="grid grid-cols-2 gap-3">
                {dubaiEmergingMarkets.map((area, index) => (
                  <div key={index} className="bg-gray-800 rounded px-3 py-2 text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Don't see your area listed? We serve all of Dubai!</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Dubai Digital Marketing Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped UAE businesses achieve remarkable growth through strategic digital marketing.
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
                  <div className="text-gray-300 leading-relaxed space-y-2">
                    <p><span className="text-gray-400">Challenge:</span> {study.challenge}</p>
                    <p><span className="text-gray-400">Solution:</span> {study.solution}</p>
                    <p>{study.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Digital Marketing Pricing for Dubai Market</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent, flexible packages built for startups, SMEs, and enterprises in the UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Startup Package</h3>
                <p className="text-red-500 font-bold mb-4">AED 3,500/month</p>
                <p className="text-gray-400 mb-4">Perfect for new businesses entering Dubai market</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Local SEO optimization</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Google My Business setup</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Social media management (2 platforms)</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Monthly reporting</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Growth Package</h3>
                <p className="text-red-500 font-bold mb-4">AED 7,500/month</p>
                <p className="text-gray-400 mb-4">Ideal for established SMEs seeking expansion</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Comprehensive SEO strategy</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Google Ads management (AED 5,000 budget included)</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Multi-platform social media marketing</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Content creation in Arabic & English</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise Package</h3>
                <p className="text-red-500 font-bold mb-4">AED 15,000/month</p>
                <p className="text-gray-400 mb-4">For large corporations and rapid scaling businesses</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Full-service digital marketing</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Advanced analytics and attribution modeling</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Dedicated account team</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-1"/> Custom integrations and automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions About Digital Marketing in Dubai
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about the Dubai market and how Frameleads can help your business grow.
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
        title="Ready to Dominate Dubai's Digital Landscape?"
        description="Partner with Dubai's most results-driven digital marketing company and experience the Frameleads difference. Book a free audit and strategy session today."
        primaryButtonText="Get Free Audit"
        secondaryButtonText="Schedule Consultation"
      />

      {/* Internal and External Links for Trust & UX */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Helpful Internal Links</h3>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href="/seo-company-in-dubai" className="text-blue-400 hover:underline">SEO Dubai</Link>
                <Link href="/about" className="text-blue-400 hover:underline">digital marketing experts</Link>
                <Link href="/contact" className="text-blue-400 hover:underline">get free audit</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Trusted External Resources</h3>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://www.dubaichamber.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Dubai Chamber of Commerce</a>
                <a href="https://www.google.com/partners/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Partner Directory</a>
                <a href="https://www.statista.com/topics/8526/digital-advertising-in-the-middle-east/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">UAE Digital Marketing Reports</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}


