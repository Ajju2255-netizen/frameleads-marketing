'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle, Phone, TrendingUp, Users, Award, Target, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"


export default function DigitalMarketingServicesPage() {
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
      title: "Search Engine Optimization (SEO)",
      description:
        "Technical SEO, on-page optimization, link building, and local SEO for multi-location businesses.",
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Google Ads, social ads, shopping ads, display and remarketing campaigns managed end-to-end.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategy, content creation, community management, and influencer collaborations across platforms.",
    },
    {
      title: "Content Marketing",
      description:
        "Blog strategy, video, email marketing, and automated nurturing focused on ROI.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Conversion tracking, performance monitoring, ROI measurement, and custom dashboards.",
    },
    {
      title: "Web Design & Development",
      description:
        "Responsive sites, conversion rate optimization, landing pages, and e-commerce builds.",
    },
    {
      title: "Digital Advertising Services",
      description:
        "Display, video, native, and programmatic media buying across global networks.",
    },
  ]

  const processPhases = [
    {
      step: "01",
      title: "Strategic Analysis",
      description:
        "Comprehensive digital audit, competitor analysis, market research, and KPI definition.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Multi-channel plan, content calendar, budget allocation, and timeline establishment.",
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description:
        "Launch, A/B testing, continuous optimization, and transparent performance tracking.",
    },
    {
      step: "04",
      title: "Scaling & Growth",
      description:
        "Refinement, budget scaling, new channel exploration, and long-term partnership.",
    },
  ]

  const caseStudies = [
    {
      industry: "SaaS (North America)",
      result: "300% increase in organic traffic",
      description: "Integrated SEO + PPC delivering rapid pipeline growth in 6 months.",
    },
    {
      industry: "Fintech (Europe)",
      result: "250% boost in qualified leads",
      description: "Multi-channel demand gen with CRO-led landing pages and content.",
    },
    {
      industry: "E-commerce (APAC)",
      result: "180% improvement in conversion rate",
      description: "Full-funnel ads, email automation, and product SEO at scale.",
    },
  ]

  const pricingTiers = [
    { name: "Starter", price: "$2,500–$5,000", includes: "SEO + PPC + Reporting" },
    { name: "Professional", price: "$5,000–$10,000", includes: "Multi-channel + Social Media" },
    { name: "Enterprise", price: "$10,000+", includes: "Full-service + Dedicated Team" },
  ]

  const faqData = [
    {
      question: "What are the services of digital marketing?",
      answer:
        "SEO, PPC, social media marketing, content marketing, email marketing, web design, analytics, and cross-channel digital advertising.",
    },
    {
      question: "What are 7 types of digital marketing?",
      answer:
        "SEO, PPC, Social Media, Content, Email, Mobile, and Marketing Analytics.",
    },
    {
      question: "How much should I pay for digital marketing services?",
      answer:
        "Small businesses invest $2,500–$5,000 monthly; comprehensive programs for larger companies start at $10,000+. Expected ROI is typically 300–500%.",
    },
    {
      question: "Is it worth paying for digital marketing?",
      answer:
        "Yes. Professional execution accelerates growth with measurable ROI across traffic, leads, and revenue.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "PPC can be immediate; SEO takes 3–6 months; social and content build momentum within 1–3 months.",
    },
    {
      question: "Do you offer services for small businesses?",
      answer:
        "Yes. Tailored packages maximize ROI for SMBs with flexible contracts and transparent pricing.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FrameLeads Digital Marketing Services",
    "description": "Comprehensive digital marketing services including SEO, PPC, social media marketing, and content marketing for businesses worldwide.",
    "url": "https://frameleads.com/digital-marketing-services",
    "telephone": "+91 6362821368",
    "email": "ajsal@frameleads.com",
    "address": { "@type": "PostalAddress", "addressCountry": "Global" },
    "serviceArea": serviceRegions,
    "priceRange": "$$",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)", "description": "Comprehensive SEO services to improve organic search rankings" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay-Per-Click Advertising (PPC)", "description": "Google Ads and social media advertising management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing", "description": "Social media strategy, content creation, and community management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing", "description": "Strategic content creation and distribution" } }
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

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                ⭐ 4.9/5 Rated • Google Partner • Serving 6 Global Regions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Best Digital Marketing Services Company — 400% Traffic Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your online presence with proven digital marketing services: expert SEO, PPC advertising, social media marketing, and content strategies that drive measurable growth.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 400% organic growth target within 6–12 months</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Full-funnel SEO, PPC, Social, and Content</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> ROI-focused execution with transparent KPIs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Dedicated account team and reporting cadence</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your FREE Digital Marketing Audit
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
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>Google Premier Partner</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>Avg. 400% traffic growth</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable growth for businesses of all sizes</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">400%</div>
                <div className="text-gray-600 text-sm">Average Traffic Growth</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">50+</div>
                <div className="text-gray-600 text-sm">Industry Awards</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">98%</div>
                <div className="text-gray-600 text-sm">Client Retention</div>
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

      {/* What Are Digital Marketing Services */}
      <section className="relative py-20" id="what-is-digital-marketing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Are Digital Marketing Services?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Digital marketing services are a set of online strategies designed to reach, engage, and convert your target audience. Our full-service solutions combine data-driven SEO, PPC, social media, content, analytics, and CRO to grow revenue predictably.
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
                  Real-Time Analytics Dashboard
                </h3>
                <p className="text-gray-600 mb-4">Track your campaign performance with live data and insights</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between"><span>Organic Traffic:</span><span className="font-semibold text-[#FF6B35]">+127%</span></div>
                  <div className="flex justify-between"><span>Conversion Rate:</span><span className="font-semibold text-[#FF6B35]">+89%</span></div>
                  <div className="flex justify-between"><span>Cost per Lead:</span><span className="font-semibold text-[#FF6B35]">-45%</span></div>
                  <div className="flex justify-between"><span>ROI:</span><span className="font-semibold text-[#FF6B35]">420%</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF8A50]/5 to-[#FF6B35]/5 rounded-2xl p-6 border border-[#FF8A50]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Multi-Channel Integration
                </h3>
                <p className="text-gray-600 mb-4">Seamlessly connect all your marketing channels for maximum impact</p>
                <div className="flex flex-wrap gap-2">
                  {['Google Ads', 'Facebook', 'LinkedIn', 'Instagram', 'YouTube', 'TikTok', 'Email', 'SMS'].map((channel) => (
                    <span key={channel} className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  AI-Powered Optimization
                </h3>
                <p className="text-gray-600 mb-4">Leverage artificial intelligence for automated campaign optimization</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Automated bid management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Dynamic ad copy generation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Predictive audience targeting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Digital Marketing Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the services that best match your business goals and get a customized strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'SEO & Content', icon: TrendingUp, description: 'Organic growth and search visibility', features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Link Building'] },
              { name: 'PPC & Ads', icon: Target, description: 'Immediate traffic and conversions', features: ['Google Ads', 'Facebook Ads', 'Display Campaigns', 'Remarketing'] },
              { name: 'Social Media', icon: Users, description: 'Brand awareness and engagement', features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Ads'] },
              { name: 'Analytics & CRO', icon: BarChart3, description: 'Data-driven optimization', features: ['Conversion Tracking', 'A/B Testing', 'Performance Analysis', 'ROI Reporting'] },
              { name: 'Email Marketing', icon: Zap, description: 'Nurture and retain customers', features: ['Automation', 'Segmentation', 'Campaign Design', 'Performance Tracking'] },
              { name: 'Web Development', icon: Award, description: 'Technical foundation and UX', features: ['Responsive Design', 'Speed Optimization', 'User Experience', 'Conversion Optimization'] }
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven 4-Step Digital Marketing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed for predictable growth and efficient scale across global markets.
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

      {/* Geographic Coverage */}
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Coverage, Local Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving businesses across North America, Asia, Europe, Latin America, Middle East, and South Asia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {serviceRegions.map((area, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-lg p-4 text-center border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="h-5 w-5 text-[#FF6B35] mx-auto mb-2 group-hover:text-[#FF8A50] transition-colors duration-300" />
                  </motion.div>
                  <span className="text-gray-900 font-medium group-hover:text-[#FF6B35] transition-colors duration-300">{area}</span>
                  <motion.div
                    className="w-full h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full mt-2"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Marketing Services Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Custom pricing is available based on your goals and scope.</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Case Studies & Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from growth-focused digital marketing programs.</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Answers to common questions about digital marketing services.</p>
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

      {/* Dynamic Progress Tracking */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Track Your Growth Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your digital marketing progress with real-time insights and performance metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">+127%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Traffic</h3>
              <p className="text-gray-600 text-sm">Average increase in organic search traffic</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">+89%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h3>
              <p className="text-gray-600 text-sm">Improvement in website conversion rates</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">-45%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost per Lead</h3>
              <p className="text-gray-600 text-sm">Reduction in customer acquisition costs</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">420%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI</h3>
              <p className="text-gray-600 text-sm">Average return on marketing investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Transform Your Digital Presence?"
        description="Get a free digital marketing audit and custom growth plan. Discover exactly how to improve performance across SEO, PPC, Social, and Content."
        primaryButtonText="Get Free Audit"
        secondaryButtonText="Schedule Consultation"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive digital marketing services, industry specializations, and international offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Core Digital Marketing Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Digital Marketing Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
              </div>
            </div>

            {/* Services in Bangalore */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Services in Bangalore</h3>
              <div className="space-y-3">
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising Bangalore</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
              </div>
            </div>

            {/* Industry Specializations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Specializations</h3>
              <div className="space-y-3">
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing</Link>
              </div>
            </div>

            {/* International Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">International Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing in Dubai</Link>
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
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

      <Footer />
    </div>
    </>
  )
}
