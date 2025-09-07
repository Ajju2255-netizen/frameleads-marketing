'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle, Phone, TrendingUp, Users, Award, Target, Zap, BarChart3, Search, Monitor, MousePointer, Clock, DollarSign, ArrowUpRight, Building2, ShoppingCart, Heart, Briefcase, Factory, GraduationCap, Home, Car, UtensilsCrossed, Gamepad2, Plane, Wrench, Shield } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export default function IndustriesPage() {
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

  const industries = [
    {
      name: "Technology & SaaS",
      icon: Monitor,
      description: "Digital marketing solutions for technology companies and SaaS platforms",
      services: ["Product Marketing", "User Acquisition", "Growth Hacking", "Technical SEO", "Performance Marketing"],
      results: "300% average increase in user acquisition",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Comprehensive e-commerce marketing strategies for online retailers",
      services: ["Product Listing Ads", "Shopping Campaigns", "Conversion Optimization", "Inventory Marketing", "Seasonal Campaigns"],
      results: "250% improvement in ROAS",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Healthcare & Medical",
      icon: Heart,
      description: "HIPAA-compliant marketing solutions for healthcare providers",
      services: ["Patient Acquisition", "Medical SEO", "Healthcare PPC", "Local Marketing", "Compliance Marketing"],
      results: "180% increase in patient appointments",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Financial Services",
      icon: Briefcase,
      description: "Secure and compliant marketing for financial institutions",
      services: ["Lead Generation", "Financial SEO", "Compliance Marketing", "Trust Building", "Risk Management"],
      results: "220% improvement in qualified leads",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Real Estate",
      icon: Home,
      description: "Property marketing solutions for real estate professionals",
      services: ["Property Listings", "Local SEO", "Lead Generation", "Virtual Tours", "Market Analysis"],
      results: "350% increase in property inquiries",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "B2B marketing strategies for manufacturing companies",
      services: ["Industrial SEO", "B2B Lead Generation", "Trade Show Marketing", "Supply Chain Marketing", "Technical Content"],
      results: "280% improvement in B2B leads",
      color: "from-gray-500 to-slate-500"
    },
    {
      name: "Education & Training",
      icon: GraduationCap,
      description: "Educational marketing for schools, universities, and training institutes",
      services: ["Student Recruitment", "Educational SEO", "Course Marketing", "Alumni Engagement", "Institutional Branding"],
      results: "200% increase in student enrollment",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Automotive",
      icon: Car,
      description: "Marketing solutions for automotive dealers and manufacturers",
      services: ["Vehicle Marketing", "Dealer SEO", "Local Automotive Marketing", "Service Marketing", "Fleet Marketing"],
      results: "240% improvement in vehicle sales",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Food & Beverage",
      icon: UtensilsCrossed,
      description: "Restaurant and food service marketing strategies",
      services: ["Restaurant SEO", "Local Food Marketing", "Delivery Optimization", "Menu Marketing", "Food Photography"],
      results: "190% increase in restaurant bookings",
      color: "from-amber-500 to-yellow-500"
    },
    {
      name: "Travel & Hospitality",
      icon: Plane,
      description: "Tourism and hospitality marketing solutions",
      services: ["Travel SEO", "Hotel Marketing", "Destination Marketing", "Booking Optimization", "Travel Content"],
      results: "260% improvement in bookings",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Gaming & Entertainment",
      icon: Gamepad2,
      description: "Marketing for gaming companies and entertainment platforms",
      services: ["Gaming SEO", "User Acquisition", "Community Building", "Influencer Marketing", "Gaming Content"],
      results: "320% increase in user engagement",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Professional Services",
      icon: Wrench,
      description: "Marketing for law firms, consulting, and professional services",
      services: ["Professional SEO", "Client Acquisition", "Thought Leadership", "Service Marketing", "Reputation Management"],
      results: "210% improvement in client acquisition",
      color: "from-slate-500 to-gray-500"
    }
  ]

  const serviceRegions = [
    "North America",
    "Asia",
    "Europe",
    "Latin America",
    "Middle East",
    "South Asia",
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industry-Specific Digital Marketing Services",
    "description": "Comprehensive digital marketing solutions tailored for specific industries including technology, healthcare, finance, e-commerce, and more.",
    "url": "https://frameleads.com/industries",
    "telephone": "+91 6362821368",
    "email": "ajsal@frameleads.com",
    "provider": {
      "@type": "Organization",
      "name": "FrameLeads",
      "url": "https://frameleads.com"
    },
    "serviceType": "Industry-Specific Digital Marketing",
    "areaServed": serviceRegions,
    "priceRange": "$2000-$50000",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industry-Specific Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technology Marketing", "description": "Digital marketing solutions for technology companies and SaaS platforms" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Marketing", "description": "HIPAA-compliant marketing solutions for healthcare providers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Marketing", "description": "Comprehensive e-commerce marketing strategies for online retailers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial Services Marketing", "description": "Secure and compliant marketing for financial institutions" } }
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
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                ⭐ 4.9/5 Rated • Industry Specialists • 12+ Industries Served
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Industry-Specific Digital Marketing Solutions That Drive Results
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Tailored digital marketing strategies designed for your specific industry. From technology and healthcare to e-commerce and manufacturing, we understand the unique challenges and opportunities in your sector.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Industry-specific expertise across 12+ sectors</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 250% average improvement in industry KPIs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Compliance-aware marketing strategies</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Proven results across diverse industries</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your Industry-Specific Strategy
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
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>Industry Specialists</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35]" /><span>12+ industries served</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-20" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industry-specific expertise helps businesses across diverse sectors achieve their digital marketing goals with tailored strategies and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/90 backdrop-blur-xl border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">{industry.name}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="space-y-2 mb-4">
                      {industry.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-[#FF6B35] mb-4">
                      {industry.results}
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

      {/* Why Industry-Specific Marketing Matters */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Industry-Specific Marketing Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generic marketing strategies don't work for every industry. Our specialized approach ensures your marketing resonates with your target audience and complies with industry regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Target className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600 text-sm">Deep understanding of industry-specific challenges, regulations, and opportunities</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeted Messaging</h3>
                <p className="text-gray-600 text-sm">Content and campaigns that speak directly to your industry's pain points and needs</p>
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
                <Shield className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Focus</h3>
                <p className="text-gray-600 text-sm">Marketing strategies that adhere to industry regulations and best practices</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Grow Your Industry-Specific Business?"
        description="Get a free industry analysis and custom marketing strategy. Discover how our specialized approach can help your business dominate your market."
        primaryButtonText="Get Free Industry Analysis"
        secondaryButtonText="Schedule Strategy Call"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Industry Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive industry-specific services, case studies, and related digital marketing offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Industry-Specific Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Services</h3>
              <div className="space-y-3">
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">E-commerce Marketing</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Healthcare Marketing</Link>
              </div>
            </div>

            {/* Core Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/analytics-and-automations" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Analytics & Automation</Link>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Locations</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing in Bangalore</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing in Dubai</Link>
                <Link href="/digital-marketing-in-singapore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing in Singapore</Link>
                <Link href="/digital-marketing-in-australia" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing in Australia</Link>
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
