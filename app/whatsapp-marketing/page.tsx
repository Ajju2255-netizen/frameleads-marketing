'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle, Phone, TrendingUp, Users, Award, Target, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"


export default function WhatsAppMarketingPage() {
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
    "Asia",
    "Europe",
    "Latin America",
    "Middle East",
    "South Asia",
  ]

  const coreServices = [
    {
      title: "WhatsApp API Integration & Automation",
      description:
        "Seamless WhatsApp Business API setup with automated welcome messages, drip campaigns, and customer support.",
    },
    {
      title: "Bulk Messaging & Campaign Management",
      description:
        "Targeted audience segmentation, multimedia support, broadcast management, and delivery tracking.",
    },
    {
      title: "WhatsApp Marketing Strategy",
      description:
        "Customer journey optimization, performance tracking, and ROI-focused campaign development.",
    },
    {
      title: "WhatsApp Business Solutions",
      description:
        "Complete WhatsApp Business setup, verification, and compliance with platform policies.",
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Real-time dashboards, conversion tracking, A/B testing, and comprehensive ROI reporting.",
    },
    {
      title: "Customer Support Automation",
      description:
        "AI-powered chatbots, automated responses, and intelligent customer service workflows.",
    },
    {
      title: "WhatsApp Marketing Tools",
      description:
        "Advanced automation tools, CRM integration, and multi-agent support systems.",
    },
  ]

  const processPhases = [
    {
      step: "01",
      title: "WhatsApp Strategy Development",
      description:
        "Target audience analysis, competitor research, message flow design, and KPI establishment for WhatsApp campaigns.",
    },
    {
      step: "02",
      title: "Technical Setup & Integration",
      description:
        "WhatsApp Business account verification, API integration, automation workflow setup, and analytics tracking.",
    },
    {
      step: "03",
      title: "Content Creation & Launch",
      description:
        "Message templates, multimedia content, call-to-action optimization, and professional campaign management.",
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description:
        "Performance monitoring, real-time optimization, A/B testing, and scaling successful WhatsApp campaigns.",
    },
  ]

  const caseStudies = [
    {
      industry: "E-commerce (India)",
      result: "400% increase in sales",
      description: "WhatsApp marketing strategy helped online retailer achieve 65% reduction in customer acquisition cost and 85% improvement in retention.",
    },
    {
      industry: "Service Business (UAE)",
      result: "250% increase in qualified leads",
      description: "Professional services firm experienced 90% faster response times and 300% improvement in client satisfaction scores.",
    },
    {
      industry: "Healthcare (Singapore)",
      result: "180% improvement in patient engagement",
      description: "WhatsApp automation for appointment scheduling, health tips, and prescription notifications increased patient satisfaction.",
    },
  ]

  const pricingTiers = [
    { name: "Starter Package", price: "$299/month", includes: "Up to 1,000 contacts, Basic automation, Monthly reports" },
    { name: "Professional Package", price: "$599/month", includes: "Up to 5,000 contacts, Advanced automation, API integration" },
    { name: "Enterprise Package", price: "$1,299/month", includes: "Unlimited contacts, Custom tools, Dedicated manager" },
  ]

  const faqData = [
    {
      question: "What makes WhatsApp marketing effective?",
      answer:
        "WhatsApp marketing achieves high effectiveness due to its personal nature, instant delivery, and 98% open rates compared to traditional marketing channels.",
    },
    {
      question: "Is WhatsApp marketing legal and compliant?",
      answer:
        "Yes, when implemented correctly with proper opt-in procedures and compliance with WhatsApp's business policies and local regulations.",
    },
    {
      question: "Can small businesses benefit from WhatsApp marketing?",
      answer:
        "Absolutely! WhatsApp marketing for small business offers cost-effective customer communication and can significantly improve customer relationships and sales.",
    },
    {
      question: "How quickly can we see results?",
      answer:
        "Most clients see initial engagement improvements within the first week, with significant ROI improvements typically occurring within 30-60 days.",
    },
    {
      question: "Do you provide WhatsApp API integration?",
      answer:
        "Yes, our WhatsApp API marketing services include complete setup, integration, and ongoing management of WhatsApp Business API.",
    },
    {
      question: "What industries can benefit from WhatsApp marketing?",
      answer:
        "E-commerce, healthcare, real estate, education, professional services, and any business that needs direct customer communication.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WhatsApp Marketing Services",
    "description": "Professional WhatsApp marketing services including API integration, bulk messaging, automation, and campaign management for businesses worldwide.",
    "url": "https://frameleads.com/whatsapp-marketing",
    "telephone": "+91 6362821368",
    "email": "ajsal@frameleads.com",
    "provider": {
      "@type": "Organization",
      "name": "FrameLeads",
      "url": "https://frameleads.com"
    },
    "serviceType": "WhatsApp Marketing",
    "areaServed": serviceRegions,
    "priceRange": "$299-$1299",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WhatsApp Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp API Integration", "description": "Complete WhatsApp Business API setup and integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Bulk Messaging", "description": "Targeted bulk messaging and campaign management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Automation", "description": "Automated customer support and lead nurturing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Marketing Strategy", "description": "Strategic WhatsApp marketing planning and optimization" } }
      ]
    }
  }

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

      

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                ⭐ 4.9/5 Rated • WhatsApp Business Partner • 2B+ Active Users
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Professional WhatsApp Marketing Services That Drive Results
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your customer communication and boost sales by 300% with our expert WhatsApp marketing services. Leverage the world's most popular messaging platform to drive engagement, generate leads, and increase revenue.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 98% message open rate vs 20% email open rate</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 5x higher engagement than traditional marketing</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Instant customer support and real-time communication</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Automated lead generation and nurturing 24/7</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your FREE WhatsApp Marketing Consultation
                </Button>
              </Link>
              <Link href="tel:+916362821368" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +91 63628 21368
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>4.9/5 rating (200+ reviews)</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>WhatsApp Business Partner</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>98% message open rate</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our WhatsApp Marketing Agency?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">With over 2 billion active users worldwide, WhatsApp offers unparalleled reach for your marketing campaigns</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">98%</div>
                <div className="text-gray-600 text-sm">Message Open Rate</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="h-8 w-8 text-[#FF8A50] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">5x</div>
                <div className="text-gray-600 text-sm">Higher Engagement</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.7 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">2B+</div>
                <div className="text-gray-600 text-sm">Active Users</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.9 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Target className="h-8 w-8 text-[#FF8A50] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Customer Support</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 2, delay: 1.1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are WhatsApp Marketing Services */}
      <section className="relative py-20" id="what-is-whatsapp-marketing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive WhatsApp Business Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WhatsApp marketing services leverage the world's most popular messaging platform to drive customer engagement, generate leads, and increase sales. Our comprehensive solutions include API integration, automation, bulk messaging, and campaign management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardContent className="p-5 relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Interactive Features Showcase */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  WhatsApp API Integration & Automation
                </h3>
                <p className="text-gray-600 mb-4">Seamless WhatsApp Business API setup with automated workflows</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between"><span>Message Delivery:</span><span className="font-semibold text-[#FF6B35]">98%</span></div>
                  <div className="flex justify-between"><span>Response Rate:</span><span className="font-semibold text-[#FF6B35]">85%</span></div>
                  <div className="flex justify-between"><span>Cost per Message:</span><span className="font-semibold text-[#FF6B35]">$0.05</span></div>
                  <div className="flex justify-between"><span>ROI:</span><span className="font-semibold text-[#FF6B35]">400%</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF8A50]/5 to-[#FF6B35]/5 rounded-2xl p-6 border border-[#FF8A50]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Bulk Messaging & Campaign Management
                </h3>
                <p className="text-gray-600 mb-4">Scale your outreach with targeted audience segmentation and multimedia support</p>
                <div className="flex flex-wrap gap-2">
                  {['Bulk Messaging', 'Broadcast Lists', 'Media Sharing', 'Delivery Tracking', 'Read Receipts', 'Compliance', 'Analytics', 'A/B Testing'].map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Customer Support Automation
                </h3>
                <p className="text-gray-600 mb-4">AI-powered chatbots and intelligent customer service workflows</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Automated FAQ responses</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Lead qualification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Appointment booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Marketing Features */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve with WhatsApp Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our WhatsApp marketing solutions are tailored for businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'E-commerce WhatsApp Marketing', icon: TrendingUp, description: 'Boost online sales with targeted messaging', features: ['Product Catalogs', 'Order Tracking', 'Cart Recovery', 'Customer Reviews'] },
              { name: 'Healthcare Communication', icon: Target, description: 'Improve patient engagement and care', features: ['Appointment Scheduling', 'Health Tips', 'Prescription Alerts', 'Telemedicine Support'] },
              { name: 'Real Estate Campaigns', icon: Users, description: 'Accelerate property sales and rentals', features: ['Property Listings', 'Virtual Tours', 'Market Updates', 'Client Testimonials'] },
              { name: 'Education & Training', icon: BarChart3, description: 'Enhance student engagement', features: ['Course Updates', 'Assignment Reminders', 'Educational Content', 'Parent Communication'] },
              { name: 'Professional Services', icon: Zap, description: 'Streamline client communication', features: ['Consultation Booking', 'Service Updates', 'Client Feedback', 'Project Updates'] },
              { name: 'Retail & Fashion', icon: Award, description: 'Drive in-store and online sales', features: ['Product Launches', 'Promotional Campaigns', 'Loyalty Programs', 'Customer Support'] }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/90 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white font-semibold py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven 4-Step WhatsApp Marketing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed for predictable growth and efficient WhatsApp marketing implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div 
                      className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {phase.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                    <motion.div
                      className="w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full mt-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Marketing Benefits */}
      <section className="relative py-20" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why WhatsApp Marketing Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make WhatsApp marketing the most effective customer communication channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Instant Communication", description: "Real-time conversations reduce sales friction", icon: Zap },
              { title: "High Deliverability", description: "No spam filters, messages reach customers directly", icon: Target },
              { title: "Global Reach", description: "Connect with customers in 180+ countries", icon: MapPin },
              { title: "Cost-Effective", description: "Excellent ROI with lower costs per engagement", icon: TrendingUp }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-lg p-6 text-center border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:text-[#FF8A50] transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                  <motion.div
                    className="w-full h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">WhatsApp Marketing Pricing & Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect WhatsApp marketing package for your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-3xl font-bold mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.includes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories & Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our WhatsApp marketing campaigns across different industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">{study.result}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.industry}</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Answers to common questions about WhatsApp marketing services.</p>
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

      {/* WhatsApp Marketing Features */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced WhatsApp Marketing Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and features to maximize your WhatsApp marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">98%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Open Rate</h3>
              <p className="text-gray-600 text-sm">WhatsApp messages achieve near-perfect visibility</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">5x</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Engagement</h3>
              <p className="text-gray-600 text-sm">Compared to traditional marketing channels</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600 text-sm">Automated responses and instant communication</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">400%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Average ROI</h3>
              <p className="text-gray-600 text-sm">Return on WhatsApp marketing investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Transform Your Customer Communication?"
        description="Get a free WhatsApp marketing consultation and custom strategy. Discover exactly how to boost engagement, generate leads, and increase sales with WhatsApp."
        primaryButtonText="Get Free Consultation"
        secondaryButtonText="Schedule Demo"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete WhatsApp Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive WhatsApp marketing services, industry specializations, and related digital marketing offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp Marketing Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp Marketing Services</h3>
              <div className="space-y-3">
                <Link href="/whatsapp-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">WhatsApp Marketing</Link>
                <Link href="/email-marketing-and-automation-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Email Marketing & Automation</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Applications</h3>
              <div className="space-y-3">
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">E-commerce Solutions</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Healthcare Communication</Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Services</h3>
              <div className="space-y-3">
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/website-development" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Website Development</Link>
                <Link href="/branding" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Branding Services</Link>
              </div>
            </div>

            {/* Company & Support */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company & Support</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Free Marketing Audit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Link href="/contact">
            <Button className="w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-all duration-300">
              <Phone className="h-6 w-6" />
            </Button>
          </Link>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            !
          </motion.div>
        </motion.div>
      </motion.div>

      
    </div>
    </>
  )
}
