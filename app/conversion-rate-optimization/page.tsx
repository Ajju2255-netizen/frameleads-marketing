'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle, Phone, TrendingUp, Users, Award, Target, Zap, BarChart3, Search, Monitor, MousePointer, Clock, DollarSign, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"


export default function ConversionRateOptimizationPage() {
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
      title: "Conversion Rate Optimization Audit",
      description:
        "Complete website analysis including conversion funnel assessment, user experience evaluation, and technical performance review.",
    },
    {
      title: "A/B Testing & Multivariate Testing",
      description:
        "Scientific approach to optimization with hypothesis-driven testing, statistical significance validation, and continuous optimization cycles.",
    },
    {
      title: "Landing Page Conversion Optimization",
      description:
        "High-converting landing pages with mobile-responsive design, conversion-focused copywriting, and trust signal integration.",
    },
    {
      title: "E-commerce Conversion Rate Optimization",
      description:
        "Specialized e-commerce CRO including product page optimization, shopping cart improvement, and checkout process streamlining.",
    },
    {
      title: "User Experience (UX) Optimization",
      description:
        "Enhance user journey with behavior analysis, heat mapping, session recordings, and navigation improvements.",
    },
    {
      title: "Mobile Conversion Optimization",
      description:
        "Mobile-first approach with touch-friendly interfaces, fast loading times, and mobile-specific user behavior optimization.",
    },
    {
      title: "Conversion Funnel Analysis",
      description:
        "Comprehensive funnel mapping, bottleneck identification, and strategic improvements to maximize conversion rates.",
    },
  ]

  const processPhases = [
    {
      step: "01",
      title: "Research & Analysis",
      description:
        "Deep dive into your business with current conversion rate baseline, user behavior analysis, competitive research, and technical audit.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Data-driven strategy creation with hypothesis formation, test prioritization, implementation planning, and success metrics definition.",
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description:
        "Execute optimization tests with A/B test setup, performance monitoring, data collection, and statistical analysis.",
    },
    {
      step: "04",
      title: "Analysis & Optimization",
      description:
        "Continuous improvement with results interpretation, winning variation implementation, new hypothesis generation, and ongoing optimization.",
    },
  ]

  const caseStudies = [
    {
      industry: "E-commerce Platform",
      result: "35% increase in conversion rate",
      description: "CRO optimization strategy helped online retailer achieve 65% reduction in cart abandonment and 85% improvement in checkout completion.",
    },
    {
      industry: "SaaS Company",
      result: "42% increase in trial signups",
      description: "Landing page optimization and A/B testing resulted in 90% faster user onboarding and 300% improvement in feature adoption rates.",
    },
    {
      industry: "Lead Generation Business",
      result: "28% increase in form conversions",
      description: "Form optimization and user experience improvements led to higher quality leads and 40% reduction in cost per acquisition.",
    },
  ]

  const pricingTiers = [
    { name: "Starter CRO Package", price: "$2,497/month", includes: "CRO audit, 2 A/B tests per month, Monthly reporting, Email support" },
    { name: "Professional CRO Package", price: "$4,997/month", includes: "Comprehensive CRO audit, 4 A/B tests per month, Landing page optimization, Heat mapping analysis" },
    { name: "Enterprise CRO Package", price: "$9,997/month", includes: "Full-scale CRO program, Unlimited testing, Dedicated CRO specialist, Custom dashboard" },
  ]

  const faqData = [
    {
      question: "What is a good conversion rate?",
      answer:
        "Conversion rates vary by industry, but the average across all industries is 2.35%. E-commerce sites typically see 1-3%, while SaaS companies often achieve 5-10%. The key is improving your baseline, regardless of industry averages.",
    },
    {
      question: "How long does it take to see CRO results?",
      answer:
        "Most clients see initial improvements within 30-60 days. However, significant results typically appear after 90 days of consistent testing and optimization. CRO is an ongoing process that compounds over time.",
    },
    {
      question: "What's the difference between CRO and SEO?",
      answer:
        "SEO focuses on bringing more traffic to your website, while CRO optimizes the traffic you already have. Both are crucial for online success, but CRO provides immediate ROI improvements from existing visitors.",
    },
    {
      question: "Do I need a lot of traffic for CRO to work?",
      answer:
        "While more traffic provides faster results, CRO can benefit any website. We can implement qualitative improvements immediately and run statistical tests once sufficient traffic is available.",
    },
    {
      question: "How do you measure CRO success?",
      answer:
        "We track multiple metrics including conversion rate, revenue per visitor, average order value, customer lifetime value, and overall ROI. Success is measured against your specific business goals.",
    },
    {
      question: "Can CRO help with mobile conversions?",
      answer:
        "Absolutely! Mobile conversion optimization is a key focus area. We optimize for touch interfaces, loading speeds, and mobile-specific user behaviors to improve mobile conversion rates.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conversion Rate Optimization Services",
    "description": "Professional conversion rate optimization services including CRO audits, A/B testing, landing page optimization, and UX improvements for businesses worldwide.",
    "url": "https://frameleads.com/conversion-rate-optimization",
    "telephone": "+91 6362821368",
    "email": "ajsal@frameleads.com",
    "provider": {
      "@type": "Organization",
      "name": "FrameLeads",
      "url": "https://frameleads.com"
    },
    "serviceType": "Conversion Rate Optimization",
    "areaServed": serviceRegions,
    "priceRange": "$2497-$9997",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Conversion Rate Optimization Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRO Audit", "description": "Complete website conversion analysis and optimization recommendations" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "A/B Testing", "description": "Scientific testing and optimization of website elements" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Optimization", "description": "High-converting landing page design and optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UX Optimization", "description": "User experience improvements and conversion funnel optimization" } }
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
                ⭐ 4.9/5 Rated • CRO Specialists • 35% Average Conversion Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Professional Conversion Rate Optimization Services That Boost Your Revenue
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your website visitors into paying customers with our expert conversion rate optimization services. Turn more of your existing traffic into sales through data-driven testing and strategic improvements.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 35% average increase in conversion rates within 90 days</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 223% average ROI from CRO investments</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Data-driven A/B testing and optimization</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Maximize revenue from existing traffic</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your FREE CRO Audit
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
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>CRO Specialists</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>35% average conversion increase</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our CRO Agency?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Data-driven conversion rate optimization that maximizes revenue from your existing website traffic</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">35%</div>
                <div className="text-gray-600 text-sm">Average Conversion Increase</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">223%</div>
                <div className="text-gray-600 text-sm">Average ROI</div>
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
                <div className="text-gray-600 text-sm">Businesses Optimized</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">90</div>
                <div className="text-gray-600 text-sm">Days to Results</div>
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

      {/* What is Conversion Rate Optimization */}
      <section className="relative py-20" id="what-is-cro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is Conversion Rate Optimization?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Conversion rate optimization (CRO) is the systematic process of increasing the percentage of website visitors who complete desired actions. Whether it's making a purchase, filling out a form, or subscribing to a newsletter, CRO helps you get more value from your existing traffic without spending more on advertising.
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
            {/* Key CRO Statistics */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  CRO Performance Metrics
                </h3>
                <p className="text-gray-600 mb-4">Key statistics that demonstrate the power of conversion rate optimization</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between"><span>Average ROI:</span><span className="font-semibold text-[#FF6B35]">223%</span></div>
                  <div className="flex justify-between"><span>Conversion Increase:</span><span className="font-semibold text-[#FF6B35]">35%</span></div>
                  <div className="flex justify-between"><span>Testing Success Rate:</span><span className="font-semibold text-[#FF6B35]">68%</span></div>
                  <div className="flex justify-between"><span>Time to Results:</span><span className="font-semibold text-[#FF6B35]">90 days</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF8A50]/5 to-[#FF6B35]/5 rounded-2xl p-6 border border-[#FF8A50]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  CRO Testing Elements
                </h3>
                <p className="text-gray-600 mb-4">Comprehensive testing across all critical website elements</p>
                <div className="flex flex-wrap gap-2">
                  {['Headlines & Copy', 'Call-to-Action Buttons', 'Page Layouts', 'Forms & Checkout', 'Product Descriptions', 'Pricing Displays', 'Navigation', 'Mobile Experience'].map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  CRO Best Practices
                </h3>
                <p className="text-gray-600 mb-4">Proven strategies for maximizing conversion rates</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Mobile-first optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Trust signal integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span>Simplified user experience</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve with CRO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our conversion rate optimization solutions are tailored for businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'SaaS & Technology', icon: TrendingUp, description: 'Optimize trial conversions and feature adoption', features: ['Free Trial Optimization', 'Pricing Page Improvements', 'Demo Request Optimization', 'Feature Adoption Enhancement'] },
              { name: 'E-commerce & Retail', icon: Target, description: 'Maximize online sales and revenue', features: ['Product Page Optimization', 'Cart Abandonment Reduction', 'Checkout Optimization', 'Revenue per Visitor Increase'] },
              { name: 'Lead Generation', icon: Users, description: 'Improve form conversions and lead quality', features: ['Form Conversion Improvement', 'Landing Page Optimization', 'CTA Effectiveness', 'Lead Quality Enhancement'] },
              { name: 'Professional Services', icon: BarChart3, description: 'Convert more prospects into clients', features: ['Contact Form Optimization', 'Service Page Improvements', 'Consultation Booking Increase', 'Trust Building Elements'] },
              { name: 'Healthcare & Medical', icon: Zap, description: 'Enhance patient engagement and bookings', features: ['Appointment Booking Optimization', 'Patient Portal Improvements', 'Service Page Optimization', 'Trust Signal Integration'] },
              { name: 'Financial Services', icon: Award, description: 'Build trust and increase conversions', features: ['Application Form Optimization', 'Trust Signal Integration', 'Security Badge Placement', 'Conversion Funnel Analysis'] }
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven 4-Step CRO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed for predictable growth and efficient conversion rate optimization implementation.
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

      {/* CRO Benefits */}
      <section className="relative py-20" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Conversion Rate Optimization Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make CRO the most effective way to maximize revenue from existing traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Immediate ROI", description: "Get more value from your existing website traffic", icon: DollarSign },
              { title: "Data-Driven Results", description: "Every optimization backed by comprehensive analytics", icon: BarChart3 },
              { title: "Scalable Growth", description: "Systematic improvements that compound over time", icon: TrendingUp },
              { title: "Cost-Effective", description: "Lower cost per acquisition than paid advertising", icon: Target }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">CRO Pricing & Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect conversion rate optimization package for your business needs.</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our conversion rate optimization campaigns across different industries.</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Answers to common questions about conversion rate optimization services.</p>
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

      {/* Advanced CRO Features */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced CRO Tools & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and technologies to maximize your conversion rate optimization success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">35%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Conversion Increase</h3>
              <p className="text-gray-600 text-sm">Typical improvement in conversion rates</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">223%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Average ROI</h3>
              <p className="text-gray-600 text-sm">Return on CRO investment</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-[#FF6B35]" />
                <span className="text-2xl font-bold text-[#FF6B35]">90</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Days to Results</h3>
              <p className="text-gray-600 text-sm">Typical timeframe for significant improvements</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-[#FF8A50]" />
                <span className="text-2xl font-bold text-[#FF8A50]">68%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing Success Rate</h3>
              <p className="text-gray-600 text-sm">Percentage of tests that show positive results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Boost Your Conversion Rates?"
        description="Get a free CRO audit and custom strategy. Discover exactly how to turn more visitors into customers and maximize revenue from your existing traffic."
        primaryButtonText="Get Free CRO Audit"
        secondaryButtonText="Schedule Strategy Call"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Conversion Rate Optimization Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive CRO services, industry specializations, and related digital marketing offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CRO & Optimization Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CRO & Optimization Services</h3>
              <div className="space-y-3">
                <Link href="/conversion-rate-optimization" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Conversion Rate Optimization</Link>
                <Link href="/website-development" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Website Development</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Applications</h3>
              <div className="space-y-3">
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate CRO</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Lead Generation</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">E-commerce Optimization</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Healthcare CRO</Link>
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
                <Link href="/free-marketing-audit" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Free Marketing Audit</Link>
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
