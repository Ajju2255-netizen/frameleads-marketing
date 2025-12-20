'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle, Phone, TrendingUp, Users, Award, Target, Zap, BarChart3, Search, Monitor, MousePointer, Clock, DollarSign, ArrowUpRight, Database, Brain, Settings, Shield } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"


export default function AnalyticsAndAutomationsPage() {
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
      title: "Business Analytics Automation",
      description:
        "Streamline business intelligence operations with automated KPI dashboards, real-time reporting, and predictive analytics that eliminate manual bottlenecks.",
    },
    {
      title: "Marketing Analytics Automation",
      description:
        "Maximize marketing ROI through intelligent automation including campaign tracking, multi-channel attribution, and automated performance analysis.",
    },
    {
      title: "Data Analytics Automation",
      description:
        "Enterprise-grade data processing and analysis with machine learning-powered automation, custom dashboards, and API-based integrations.",
    },
    {
      title: "Automated Reporting Solutions",
      description:
        "Transform manual reporting into automated workflows with real-time dashboards, scheduled reports, and intelligent insights generation.",
    },
    {
      title: "Business Intelligence Automation",
      description:
        "Advanced BI automation with cross-platform data integration, automated visualization, and comprehensive performance monitoring systems.",
    },
    {
      title: "Predictive Analytics Automation",
      description:
        "Machine learning-powered predictive analytics that forecast trends, optimize operations, and provide automated business recommendations.",
    },
    {
      title: "Real-time Analytics Automation",
      description:
        "Live data processing and analysis with instant insights, automated alerts, and real-time performance monitoring across all business functions.",
    },
  ]

  const processPhases = [
    {
      step: "01",
      title: "Analytics Audit & Discovery",
      description:
        "Comprehensive analytics assessment including current tool analysis, data source mapping, reporting requirement analysis, and automation opportunity identification.",
    },
    {
      step: "02",
      title: "Automation Strategy Development",
      description:
        "Strategic automation planning workshop, workflow design creation, integration roadmap development, and implementation timeline planning.",
    },
    {
      step: "03",
      title: "Technical Implementation",
      description:
        "Professional automation development including dashboard creation, workflow automation, integration setup, and testing phases for complete system implementation.",
    },
    {
      step: "04",
      title: "Launch & Training",
      description:
        "Comprehensive system deployment including documentation creation, team training sessions, performance monitoring setup, and launch campaign execution.",
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description:
        "Ongoing analytics performance tracking, automation efficiency analysis, continuous improvement recommendations, and strategic adjustments.",
    },
    {
      step: "06",
      title: "Optimization & Scaling",
      description:
        "Strategic automation evolution planning, new integration opportunities, expansion strategies, and long-term analytics development.",
    },
  ]

  const caseStudies = [
    {
      industry: "SaaS Company Analytics Transformation",
      result: "500% improvement in product development speed",
      description: "Implemented automated user behavior tracking, cohort analysis automation, and integrated marketing analytics dashboard with real-time performance monitoring.",
    },
    {
      industry: "E-commerce Analytics Automation",
      result: "400% improvement in customer journey visibility",
      description: "Created unified e-commerce analytics automation system with cross-platform integration, automated customer journey tracking, and real-time performance dashboards.",
    },
    {
      industry: "Healthcare Practice Analytics",
      result: "350% improvement in patient outcome tracking",
      description: "Developed secure healthcare analytics automation platform with automated patient outcome tracking, operational efficiency dashboards, and compliance reporting systems.",
    },
  ]

  const pricingTiers = [
    { name: "Starter Analytics Automation", price: "$4,999", includes: "Basic dashboard automation (3 key metrics), Marketing analytics automation setup, Monthly automated reporting (5 reports), Email and chat support" },
    { name: "Growth Analytics Automation", price: "$12,999", includes: "Advanced multi-platform analytics automation, Custom dashboard development (10+ metrics), Automated marketing campaign analysis, Real-time performance monitoring" },
    { name: "Enterprise Analytics Automation", price: "$29,999+", includes: "Full-scale analytics automation implementation, Custom machine learning integration, Advanced predictive analytics automation, Multi-department dashboard systems" },
  ]

  const faqData = [
    {
      question: "What is analytics automation and how does it benefit businesses?",
      answer:
        "Analytics automation involves using technology to automatically collect, process, analyze, and report on business data without manual intervention. Benefits include 75% reduction in reporting time, 300% faster decision-making, improved data accuracy, and real-time insights that drive business growth.",
    },
    {
      question: "How much do analytics automation services cost?",
      answer:
        "Analytics automation service costs vary based on complexity and scope. Starter packages begin at $4,999, while comprehensive enterprise solutions range from $29,999 to $100,000+. Factors affecting cost include data sources, automation complexity, integration requirements, and ongoing support needs.",
    },
    {
      question: "How long does analytics automation implementation take?",
      answer:
        "Typical analytics automation projects take 6-12 weeks depending on scope. Simple dashboard automation may take 4-6 weeks, while comprehensive enterprise analytics automation can take 12-20 weeks including testing and training phases.",
    },
    {
      question: "What types of data can be automated for analytics?",
      answer:
        "We can automate analytics for virtually any business data including marketing metrics, sales performance, customer behavior, financial data, operational metrics, social media analytics, email marketing performance, and website analytics across multiple platforms.",
    },
    {
      question: "Can analytics automation integrate with existing business tools?",
      answer:
        "Yes, our analytics automation solutions integrate with 200+ business tools including CRM systems (Salesforce, HubSpot), marketing platforms (Google Analytics, Facebook Ads), e-commerce platforms (Shopify, WooCommerce), and financial systems (QuickBooks, SAP).",
    },
    {
      question: "Is analytics automation suitable for small businesses?",
      answer:
        "Absolutely! Our analytics automation solutions are scalable for businesses of all sizes. Small businesses often see the biggest impact from automation, with typical results including 60% time savings, 200% improvement in reporting accuracy, and faster business decision-making.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Analytics and Automation Services",
    "description": "Professional analytics automation services including business intelligence automation, marketing analytics automation, data analytics automation, and automated reporting solutions for businesses worldwide.",
    "url": "https://frameleads.com/analytics-and-automations",
    "telephone": "+91 6362821368",
    "email": "ajsal@frameleads.com",
    "provider": {
      "@type": "Organization",
      "name": "FrameLeads",
      "url": "https://frameleads.com"
    },
    "serviceType": "Analytics Automation",
    "areaServed": serviceRegions,
    "priceRange": "$4999-$29999",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Analytics and Automation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Analytics Automation", "description": "Streamline business intelligence operations with automated KPI dashboards and real-time reporting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Analytics Automation", "description": "Maximize marketing ROI through intelligent automation and campaign tracking" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics Automation", "description": "Enterprise-grade data processing and analysis with machine learning-powered automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated Reporting Solutions", "description": "Transform manual reporting into automated workflows with real-time dashboards" } }
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
                ⭐ 4.9/5 Rated • Analytics Automation Specialists • 75% Reduction in Reporting Time
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Premium Analytics and Automation Services That Transform Business Intelligence
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business intelligence with our expert analytics automation services. Streamline business intelligence with automated reporting, marketing analytics & data visualization that help businesses make faster, smarter decisions.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 75% reduction in reporting time with automated workflows</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 300% faster decision-making through real-time insights</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Business intelligence automation and predictive analytics</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Maximize ROI from existing data and analytics</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your FREE Analytics Automation Consultation
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
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>Analytics Automation Specialists</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>75% reduction in reporting time</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Analytics Automation Agency?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Data-driven analytics automation that transforms business intelligence and maximizes ROI from existing data</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">75%</div>
                <div className="text-gray-600 text-sm">Reduction in Reporting Time</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">300%</div>
                <div className="text-gray-600 text-sm">Faster Decision Making</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">500+</div>
                <div className="text-gray-600 text-sm">Analytics Systems Automated</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">6-12</div>
                <div className="text-gray-600 text-sm">Weeks Implementation</div>
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

      {/* What is Analytics Automation */}
      <section className="relative py-20" id="what-is-analytics-automation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is Analytics Automation?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Analytics automation is the systematic process of using technology to automatically collect, process, analyze, and report on business data without manual intervention. It transforms raw data into actionable insights through automated workflows, real-time dashboards, and intelligent reporting systems that drive faster, smarter business decisions.
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
            {/* Key Analytics Automation Statistics */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Analytics Automation Performance
                </h3>
                <p className="text-gray-600 mb-4">Key statistics that demonstrate the power of analytics automation</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between"><span>Reporting Time Reduction:</span><span className="font-semibold text-[#FF6B35]">75%</span></div>
                  <div className="flex justify-between"><span>Decision Making Speed:</span><span className="font-semibold text-[#FF6B35]">300%</span></div>
                  <div className="flex justify-between"><span>Data Accuracy Improvement:</span><span className="font-semibold text-[#FF6B35]">200%</span></div>
                  <div className="flex justify-between"><span>Implementation Time:</span><span className="font-semibold text-[#FF6B35]">6-12 weeks</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF8A50]/5 to-[#FF6B35]/5 rounded-2xl p-6 border border-[#FF8A50]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Analytics Automation Elements
                </h3>
                <p className="text-gray-600 mb-4">Comprehensive automation across all critical business data sources</p>
                <div className="flex flex-wrap gap-2">
                  {['Data Collection', 'Report Generation', 'Dashboard Updates', 'Performance Monitoring', 'Alert Systems', 'Predictive Analytics', 'Data Visualization', 'Cross-Platform Integration'].map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Analytics Automation Best Practices
                </h3>
                <p className="text-gray-600 mb-4">Proven strategies for maximizing analytics automation ROI</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Real-time data processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Machine learning integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Scalable automation architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve with Analytics Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our analytics automation solutions are tailored for businesses across various industries with specialized data requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Technology & SaaS', icon: TrendingUp, description: 'Strategic analytics automation for technology companies', features: ['Product Analytics Automation', 'User Behavior Tracking', 'Performance Metrics Automation', 'Growth Analytics Dashboard'] },
              { name: 'Healthcare', icon: Shield, description: 'HIPAA-compliant healthcare analytics automation', features: ['Patient Outcome Tracking', 'Operational Efficiency Monitoring', 'Compliance Reporting', 'Data Security Protocols'] },
              { name: 'Financial Services', icon: BarChart3, description: 'Secure financial analytics automation', features: ['Risk Assessment Automation', 'Performance Monitoring', 'Regulatory Reporting', 'Data Security Standards'] },
              { name: 'E-commerce', icon: Target, description: 'Revenue-focused e-commerce analytics automation', features: ['Customer Behavior Tracking', 'Conversion Optimization', 'Marketing Performance', 'Sales Channel Analytics'] },
              { name: 'Manufacturing', icon: Settings, description: 'Operations-focused manufacturing analytics automation', features: ['Production Efficiency Monitoring', 'Quality Control Analytics', 'Supply Chain Optimization', 'Real-time Data Processing'] },
              { name: 'Retail', icon: Users, description: 'Customer-centric retail analytics automation', features: ['Sales Performance Tracking', 'Inventory Optimization', 'Customer Behavior Analysis', 'Multi-channel Analytics'] }
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven 6-Step Analytics Automation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed for predictable growth and efficient analytics automation implementation with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Analytics Automation Benefits */}
      <section className="relative py-20" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Analytics Automation Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make analytics automation the most effective way to maximize ROI from existing data and business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Immediate ROI", description: "Get more value from your existing data and analytics", icon: DollarSign },
              { title: "Data-Driven Results", description: "Every automation backed by comprehensive analytics and machine learning", icon: BarChart3 },
              { title: "Scalable Growth", description: "Systematic automation improvements that compound over time", icon: TrendingUp },
              { title: "Cost-Effective", description: "Lower operational costs than manual reporting and analysis", icon: Target }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Automation Pricing & Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect analytics automation package for your business needs with transparent pricing and proven results.</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Automation Success Stories & Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our analytics automation implementations across different industries with measurable business impact.</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Automation Services FAQ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Answers to common questions about professional analytics automation services and how Frameleads can help your business achieve measurable results.</p>
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

      {/* Advanced Analytics Automation Features */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Analytics Automation Tools & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and technologies to maximize your analytics automation success with enterprise-grade solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">75%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting Time Reduction</h3>
              <p className="text-gray-600 text-sm">Typical improvement in reporting efficiency</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">300%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Decision Making</h3>
              <p className="text-gray-600 text-sm">Speed improvement in business decisions</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">6-12</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weeks Implementation</h3>
              <p className="text-gray-600 text-sm">Typical timeframe for full automation setup</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">200%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Accuracy Improvement</h3>
              <p className="text-gray-600 text-sm">Improvement in data processing accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Transform Your Business Intelligence?"
        description="Get a free analytics automation consultation and custom strategy. Discover exactly how to automate your analytics workflows and maximize ROI from your existing data."
        primaryButtonText="Get Free Analytics Automation Consultation"
        secondaryButtonText="Schedule Strategy Call"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Analytics and Automation Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive analytics automation services, industry specializations, and related digital marketing offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Analytics & Automation Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Automation Services</h3>
              <div className="space-y-3">
                <Link href="/analytics-and-automations" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Analytics and Automation</Link>
                <Link href="/conversion-rate-optimization" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Conversion Rate Optimization</Link>
                <Link href="/website-development" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Website Development</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Applications</h3>
              <div className="space-y-3">
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Analytics</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Analytics Automation</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">E-commerce Analytics</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Healthcare Analytics</Link>
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
