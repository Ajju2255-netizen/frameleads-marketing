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
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
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
        "telephone": "+91 6362821368",
        "email": "ajsal@frameleads.com",
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
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      <FloatingNotifications />
      
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#FF8A50]/10 to-[#FF6B35]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#FF8A50]/8 to-[#FF6B35]/8 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#FF6B35]/6 to-[#FF8A50]/6 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                🏆 #1 SEO Company in Bangalore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Best SEO Company in {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Bangalore
              </span>{" "}
              400% Traffic Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Dominate local search results and grow your Bangalore business with our proven SEO strategies. As the leading SEO company in Bangalore, we've helped 500+ local businesses achieve 400% traffic growth, rank higher on Google, and increase revenue through comprehensive technical SEO, local SEO optimization, and content marketing services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Bangalore SEO Audit
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
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>500+ Bangalore clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>5+ years local experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>Guaranteed results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Frameleads is the Best SEO Company in Bangalore?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As the leading SEO company in Bangalore, we combine deep local market knowledge with cutting-edge technical SEO expertise. Our proven track record of delivering 400% traffic growth for Bangalore businesses makes us the preferred choice for local SEO services, technical SEO optimization, and comprehensive digital marketing solutions.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive SEO Services in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our complete SEO services in Bangalore include technical SEO optimization, local SEO for 'near me' searches, content marketing, and e-commerce SEO. We help Bangalore businesses dominate search results and achieve sustainable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#FF6B35]/25 group-hover:shadow-[#FF6B35]/40 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven SEO Process for Bangalore Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic SEO approach specifically designed for the Bangalore market, combining technical expertise, local market knowledge, and data-driven strategies to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((process, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas We Serve in Bangalore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive SEO services across all major areas of Bangalore, helping businesses in every
              locality dominate local search results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bangaloreAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-lg p-4 text-center border border-[#FF6B35]/20 hover:border-[#FF8A50]/40 transition-colors duration-300"
              >
                <MapPin className="h-5 w-5 text-[#FF6B35] mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your area listed? We serve all of Bangalore!</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                Check If We Serve Your Area
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bangalore Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped local Bangalore businesses achieve remarkable growth through strategic SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">{study.result}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.industry}</h3>
                    <p className="text-gray-600 text-sm">{study.location}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About SEO in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about SEO services in Bangalore and how Frameleads can help your business grow.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
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
        title="Ready to Dominate Bangalore Search Results?"
        description="Join 500+ successful Bangalore businesses that trust Frameleads for their SEO needs. Get your free audit and discover how we can help you outrank your competitors."
        primaryButtonText="Get Free SEO Audit"
        secondaryButtonText="Schedule Consultation"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SEO works best when integrated with other digital marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SEO & Search */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO & Search</h3>
              <div className="space-y-3">
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
              </div>
            </div>

            {/* Performance & Paid Marketing */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance & Paid Marketing</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
              </div>
            </div>

            {/* Industry Specializations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Specializations</h3>
              <div className="space-y-3">
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing Bangalore</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising Bangalore</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
              </div>
            </div>

            {/* Company & Academy */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company & Academy</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
                <Link href="/academy/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About Academy</Link>
                <Link href="/academy/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Academy Contact</Link>
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
