import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export const metadata = {
  title: "Best SEO Company | Global SEO Services | 400% Traffic Growth",
  description:
    "Leading global SEO company with guaranteed 400% traffic growth. Expert technical SEO, local SEO, and content strategies. Get a free SEO audit now!",
}

export default function SEOCompanyBangalorePage() {
  const serviceRegions = [
    "North America",
    "Europe",
    "Middle East",
    "South Asia",
    "Southeast Asia",
    "Australia & New Zealand",
    "Africa",
    "Latin America",
  ]

  const seoServices = [
    {
      icon: MapPin,
      title: "Local SEO Services Bangalore",
      description:
        "Dominate local search results: GMB optimization, Bangalore citations, review management, local schema, and multi-location SEO for franchises.",
    },
    {
      icon: TrendingUp,
      title: "Technical SEO Services",
      description:
        "Advanced technical optimization: Core Web Vitals, mobile-first indexing, XML sitemaps, schema, crawl/index fixes, SSL & security hardening.",
    },
    {
      icon: Users,
      title: "Content Marketing & SEO",
      description:
        "Content that ranks & converts: SEO blog strategy, keyword-driven copy, internal linking, content gap analysis, performance tracking.",
    },
    {
      icon: Award,
      title: "E-commerce SEO Services",
      description:
        "Boost store visibility: product/category SEO, technical fixes, shopping feeds, CRO, and marketplace optimization for higher revenue.",
    },
  ]

  const seoProcess = [
    {
      step: "01",
      title: "Comprehensive SEO Audit",
      description:
        "50-point audit covering technical health, crawlability, indexation, content gaps, competitor analysis, and local SEO (GMB + citations).",
    },
    {
      step: "02", 
      title: "Strategic SEO Planning",
      description:
        "Keyword mapping, content calendar, technical roadmap, and Bangalore-focused local tactics with clear milestones & ownership.",
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description:
        "On-page optimization, technical fixes, content production, and ethical link-building with measurable KPI improvements each month.",
    },
    {
      step: "04",
      title: "Monitoring & Scaling",
      description:
        "Performance tracking, ongoing optimization for algorithm changes, and scaling to new keywords, markets, and locations.",
    },
  ]

  const whyChooseUs = [
    "500+ successful Bangalore SEO campaigns with measurable ROI",
    "AI-powered, data-driven strategies focused on business outcomes",
    "Award-winning team, certified partners, 8+ years of expertise",
    "Full-stack technical SEO for maximum search visibility",
    "Deep Bangalore market knowledge and consumer insights",
    "24/7 monitoring, transparent reporting, dedicated account manager",
    "Comprehensive competitor analysis and multi-location SEO",
    "Proactive algorithm update implementation and training",
  ]

  const caseStudies = [
    {
      industry: "B2B SaaS Company",
      location: "North America",
      result: "450% increase in organic traffic",
      description: "#1 rankings for 15 high-value B2B keywords in 6 months with comprehensive technical SEO and content strategy.",
    },
    {
      industry: "Multi-Location Restaurant Chain", 
      location: "Europe",
      result: "250% increase in 'near me' visibility",
      description: "Local SEO across 12 locations driving Top 3 local pack rankings and 40% growth in direct orders.",
    },
    {
      industry: "E-commerce Fashion Brand",
      location: "APAC",
      result: "320% increase in product page traffic",
      description: "E-commerce SEO and CRO delivering 60% conversion improvement and 500+ ranking keywords expansion.",
    },
  ]

  const faqData = [
    {
      question: "How much do SEO services cost in Bangalore?",
      answer:
        "SEO services typically range from ₹25,000 to ₹2,00,000 per month based on scope, competition, and goals. Packages start at ₹30,000/month for SMBs with custom enterprise solutions available.",
    },
    {
      question: "How long does it take to see SEO results in Bangalore?",
      answer:
        "Most businesses see early gains within 2–3 months and significant results by month 6. We guarantee measurable improvements within the first 90 days.",
    },
    {
      question: "What makes Frameleads the best SEO company in Bangalore?",
      answer:
        "Proven 400% traffic growth, 300% average ROI in 6 months, local market expertise, transparent reporting, and dedicated Bangalore-based support.",
    },
    {
      question: "Do you provide local SEO services for multiple Bangalore locations?",
      answer:
        "Yes. We specialize in multi-location SEO including GMB optimization per location, area-specific content, citation building, and targeted local keywords.",
    },
    {
      question: "What industries do you serve in Bangalore?",
      answer:
        "IT & Software, Healthcare, Manufacturing, Real Estate, Retail & E-commerce, Financial Services, Education, Hospitality, Professional Services, and Startups.",
    },
  ]
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Frameleads - Global SEO Company",
        "description": "Leading global SEO company providing guaranteed traffic growth and first-page rankings",
        "url": "https://frameleads.com/seo-services",
        "telephone": "+91 63628 21368",
        "areaServed": serviceRegions,
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
        },
        "sameAs": ["https://linkedin.com/company/frameleads"]
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
        "@type": "Service",
        "name": "Global SEO Services",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Service Packages"
        }
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingNotifications />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32" id="hero">
        {/* Background Gradient Lines - Hero Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30">
                🏆 #1 Global SEO Company - 500+ Successful Projects
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Best SEO Company — 400% Traffic Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with expert global SEO services that deliver real results. Get more organic traffic, higher rankings, and increased revenue in as little as 90 days.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-300 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5" /> Guaranteed 400% organic traffic growth in 6 months</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5" /> First page rankings for high-value keywords</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5" /> ROI-focused strategies with measurable KPIs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5" /> Transparent reporting & dedicated account manager</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5" /> 100% white-hat SEO techniques only</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Bangalore SEO Audit
                </Button>
              </Link>
              <Link href="tel:+916362821368" className="flex items-center gap-2 text-gray-200 hover:text-white">
                <Button variant="outline" className="border-red-500/40 text-gray-200 hover:text-white">
                  <Phone className="h-5 w-5 mr-2" /> Call +91 63628 21368
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /><span>Trusted by 500+ businesses worldwide</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /><span>5-star rated SEO agency</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /><span>Avg. 300% ROI in 6 months</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20" id="why-us">
        {/* Background Gradient Lines - Diagonal Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Frameleads is a Top-Rated Global SEO Agency</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                As the leading SEO company in Bangalore, we combine deep local market knowledge with cutting-edge technical SEO expertise. Our proven track record of delivering 400% traffic growth for Bangalore businesses makes us the preferred choice for local SEO services, technical SEO optimization, and comprehensive digital marketing solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/placeholder.jpg"
                alt="Bangalore SEO results dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/30 group-hover:ring-red-400/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="relative py-20" id="services">
        {/* Background Gradient Lines - Diamond Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
          <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive SEO Services in Bangalore</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our complete SEO services in Bangalore include technical SEO optimization, local SEO for 'near me' searches, content marketing, and e-commerce SEO. We help Bangalore businesses dominate search results and achieve sustainable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="relative py-20" id="process">
        {/* Background Gradient Lines - Hexagonal Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-red-500/20 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-red-500/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Proven 4-Step SEO Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic SEO approach specifically designed for the Bangalore market, combining technical expertise, local market knowledge, and data-driven strategies to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((process, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">SEO Services Across the Globe</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive SEO services for businesses worldwide, across regions and industries, tailored to local market dynamics and languages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceRegions.map((area, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl rounded-lg p-4 text-center border border-red-500/20 hover:border-red-400/40 transition-colors duration-300"
              >
                <MapPin className="h-5 w-5 text-red-500 mx-auto mb-2" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Don't see your region listed? We serve businesses worldwide.</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                Check If We Serve Your Region
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Global SEO Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped local Bangalore businesses achieve remarkable growth through strategic SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">{study.result}</div>
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
      <section className="relative py-20" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions About SEO Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about SEO services in Bangalore and how Frameleads can help your business grow.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
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
