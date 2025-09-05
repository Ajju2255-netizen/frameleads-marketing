'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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

export default function SEOCompanyBangalorePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90])

  useEffect(() => {
    setIsVisible(true)
  }, [])
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
      title: "International SEO Services",
      description:
        "Dominate global search results: multi-country SEO, hreflang implementation, local market optimization, and international keyword targeting across 6 continents.",
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
      title: "Comprehensive Global SEO Audit",
      description:
        "50-point international audit covering technical health, crawlability, indexation, content gaps, competitor analysis, and multi-country SEO optimization.",
    },
    {
      step: "02", 
      title: "Strategic International SEO Planning",
      description:
        "Global keyword mapping, multi-language content calendar, technical roadmap, and international market tactics with clear milestones & ownership.",
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description:
        "On-page optimization, technical fixes, content production, and ethical link-building with measurable KPI improvements each month across global markets.",
    },
    {
      step: "04",
      title: "Monitoring & Scaling",
      description:
        "Performance tracking, ongoing optimization for algorithm changes, and scaling to new keywords, markets, and international locations.",
    },
  ]

  const whyChooseUs = [
    "500+ successful global SEO campaigns across 6 continents",
    "AI-powered, data-driven strategies focused on business outcomes",
    "Award-winning team, certified partners, 8+ years of expertise",
    "Full-stack technical SEO for maximum search visibility",
    "Deep international market knowledge and consumer insights",
    "24/7 monitoring, transparent reporting, dedicated account manager",
    "Comprehensive competitor analysis and multi-country SEO",
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
      question: "How much do international SEO services cost?",
      answer:
        "Global SEO services typically range from $2,500 to $15,000 per month based on scope, competition, and target markets. Packages start at $3,000/month for SMBs with custom enterprise solutions available.",
    },
    {
      question: "How long does it take to see international SEO results?",
      answer:
        "Most businesses see early gains within 2–3 months and significant results by month 6. We guarantee measurable improvements within the first 90 days across global markets.",
    },
    {
      question: "What makes Frameleads the best global SEO company?",
      answer:
        "Proven 400% traffic growth, 300% average ROI in 6 months, international market expertise, transparent reporting, and dedicated global support across 6 continents.",
    },
    {
      question: "Do you provide SEO services for multiple countries?",
      answer:
        "Yes. We specialize in multi-country SEO including hreflang implementation, country-specific content, local market optimization, and targeted international keywords.",
    },
    {
      question: "What industries do you serve globally?",
      answer:
        "IT & Software, Healthcare, Manufacturing, Real Estate, Retail & E-commerce, Financial Services, Education, Hospitality, Professional Services, and Startups across 6 continents.",
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
        "telephone": "+91 6362821368",
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
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      <FloatingNotifications />
      
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlays */}
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFE4D6]/20 to-[#FFCAB0]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#FFCAB0]/15 to-[#FFE4D6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#FFE4D6]/10 to-[#FFCAB0]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />

        {/* Organic dotted patterns */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-[#FF6B35]/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#FF8A50]/25 rounded-full"
          animate={{
            y: [0, 12, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-40 w-1 h-1 bg-[#FF6B35]/30 rounded-full"
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Subtle geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FFE4D6]/30 rounded-sm rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 225, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFCAB0]/25 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Layered transparency effects */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-[#FFE4D6]/8 to-transparent rounded-3xl blur-2xl"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-tl from-[#FFCAB0]/6 to-transparent rounded-2xl blur-2xl"
          animate={{
            scale: [1.05, 1, 1.05],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                🏆 #1 Global SEO Company - 500+ Successful Projects
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Global SEO Services — 400% Traffic Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with expert international SEO services that deliver real results. Get more organic traffic, higher rankings, and increased revenue across global markets in as little as 90 days.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Guaranteed 400% organic traffic growth in 6 months</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> First page rankings for high-value keywords</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> ROI-focused strategies with measurable KPIs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Transparent reporting & dedicated account manager</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 100% white-hat SEO techniques only</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Global SEO Audit
                </Button>
              </Link>
              <Link href="tel:+916362821368" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +91 6362821368
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>Trusted by 500+ businesses worldwide</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>5-star rated SEO agency</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>Avg. 300% ROI in 6 months</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Why Frameleads is a Top-Rated Global SEO Agency</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As a leading international SEO company, we combine deep global market knowledge with cutting-edge technical SEO expertise. Our proven track record of delivering 400% traffic growth for businesses across 6 continents makes us the preferred choice for international SEO services, technical SEO optimization, and comprehensive digital marketing solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/placeholder.jpg"
                alt="Bangalore SEO results dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Global SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our complete international SEO services include technical SEO optimization, multi-country SEO, content marketing, and e-commerce SEO. We help businesses worldwide dominate search results and achieve sustainable organic growth across global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#FF6B35]/25 group-hover:shadow-[#FF6B35]/40 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven 4-Step Global SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic international SEO approach designed for global markets, combining technical expertise, international market knowledge, and data-driven strategies to deliver measurable results across continents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((process, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SEO Services Across the Globe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive SEO services for businesses worldwide, across regions and industries, tailored to local market dynamics and languages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceRegions.map((area, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-lg p-4 text-center border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="h-5 w-5 text-[#FF6B35] mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your region listed? We serve businesses worldwide.</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global SEO Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses worldwide achieve remarkable growth through strategic international SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">{study.result}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.industry}</h3>
                    <p className="text-gray-500 text-sm">{study.location}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Global SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about international SEO services and how Frameleads can help your business grow globally.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
        title="Ready to Dominate Global Search Results?"
        description="Join 500+ successful businesses worldwide that trust Frameleads for their international SEO needs. Get your free audit and discover how we can help you outrank your competitors globally."
        primaryButtonText="Get Free Global SEO Audit"
        secondaryButtonText="Schedule Consultation"
      />

      {/* Internal Links */}
      <section className="relative py-16" id="internal-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Global Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              International SEO is just the beginning. Explore our full suite of global digital marketing services to maximize your online presence worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SEO & Related Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO & Search</h3>
              <div className="space-y-3">
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
              </div>
            </div>

            {/* Digital Marketing Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising</Link>
              </div>
            </div>

            {/* Industry & Location Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry & Location</h3>
              <div className="space-y-3">
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
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
