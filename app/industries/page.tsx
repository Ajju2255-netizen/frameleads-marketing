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
      description: "Specialized digital marketing solutions for technology companies and SaaS platforms with technical expertise",
      services: ["Product Marketing", "User Acquisition Growth", "Technical SEO Optimization", "SaaS Performance Marketing", "Developer Community Building"],
      results: "300% average increase in qualified user acquisition",
      compliance: "GDPR, data privacy, international regulations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Healthcare & Medical",
      icon: Heart,
      description: "HIPAA-compliant marketing solutions for healthcare providers with medical expertise",
      services: ["Patient Acquisition Campaigns", "Medical SEO Services", "Healthcare PPC Management", "Local Medical Marketing", "HIPAA-Compliant Strategies"],
      results: "180% increase in patient appointment bookings",
      compliance: "HIPAA, medical advertising guidelines, patient privacy",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Financial Services",
      icon: Briefcase,
      description: "Secure and compliant marketing for financial institutions with regulatory expertise",
      services: ["Financial Lead Generation", "Banking SEO Services", "Compliance Marketing", "Trust-Building Campaigns", "Risk Management Communications"],
      results: "220% improvement in qualified financial leads",
      compliance: "SEC regulations, financial advertising compliance, data security",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Comprehensive e-commerce marketing strategies for online retailers with conversion expertise",
      services: ["Product Listing Optimization", "Shopping Campaign Management", "Conversion Rate Optimization", "Inventory Marketing", "Seasonal Campaign Planning"],
      results: "250% improvement in Return on Ad Spend (ROAS)",
      compliance: "Consumer protection, advertising standards, international trade",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Real Estate",
      icon: Home,
      description: "Property marketing solutions for real estate professionals with local market expertise",
      services: ["Property Listing Optimization", "Local Real Estate SEO", "Lead Generation Systems", "Virtual Tour Marketing", "Market Analysis Reports"],
      results: "350% increase in qualified property inquiries",
      compliance: "Real estate regulations, fair housing compliance, local licensing",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "B2B marketing strategies for manufacturing companies with industrial expertise",
      services: ["Industrial SEO Services", "B2B Lead Generation", "Trade Show Marketing", "Supply Chain Communications", "Technical Content Marketing"],
      results: "280% improvement in B2B manufacturing leads",
      compliance: "Industrial regulations, safety standards, international trade",
      color: "from-gray-500 to-slate-500"
    },
    {
      name: "Education & Training",
      icon: GraduationCap,
      description: "Educational marketing for schools, universities, and training institutes with academic expertise",
      services: ["Student Recruitment Campaigns", "Educational SEO", "Course Marketing Strategies", "Alumni Engagement", "Institutional Branding"],
      results: "200% increase in student enrollment rates",
      compliance: "Educational regulations, student privacy, accreditation standards",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Automotive",
      icon: Car,
      description: "Marketing solutions for automotive dealers and manufacturers with automotive expertise",
      services: ["Vehicle Marketing Campaigns", "Automotive Dealer SEO", "Local Service Marketing", "Fleet Marketing Solutions", "Parts & Service Promotion"],
      results: "240% improvement in vehicle sales conversion",
      compliance: "Automotive regulations, safety standards, dealer compliance",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Food & Beverage",
      icon: UtensilsCrossed,
      description: "Restaurant and food service marketing strategies with culinary expertise",
      services: ["Restaurant SEO Services", "Local Food Marketing", "Delivery Platform Optimization", "Menu Marketing", "Food Photography & Content"],
      results: "190% increase in restaurant reservation bookings",
      compliance: "Food safety regulations, health department guidelines, labeling requirements",
      color: "from-amber-500 to-yellow-500"
    },
    {
      name: "Travel & Hospitality",
      icon: Plane,
      description: "Tourism and hospitality marketing solutions with travel industry expertise",
      services: ["Travel SEO Optimization", "Hotel Marketing Campaigns", "Destination Marketing", "Booking System Optimization", "Travel Content Strategy"],
      results: "260% improvement in booking conversions",
      compliance: "Tourism regulations, accessibility requirements, international travel laws",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Gaming & Entertainment",
      icon: Gamepad2,
      description: "Marketing for gaming companies and entertainment platforms with gaming expertise",
      services: ["Gaming SEO Strategies", "User Acquisition Campaigns", "Community Building", "Influencer Marketing Programs", "Gaming Content Creation"],
      results: "320% increase in user engagement metrics",
      compliance: "Gaming regulations, content ratings, international gaming laws",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Professional Services",
      icon: Wrench,
      description: "Marketing for law firms, consulting, and professional services with professional expertise",
      services: ["Professional SEO Services", "Client Acquisition Systems", "Thought Leadership Development", "Service-Based Marketing", "Online Reputation Management"],
      results: "210% improvement in qualified client acquisition",
      compliance: "Professional licensing, ethical guidelines, industry standards",
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
    "name": "Industry-Specific Digital Marketing Solutions",
    "description": "Specialized digital marketing strategies for 12+ industries with proven compliance expertise. Our industry-specialized digital marketing solutions deliver superior results by addressing unique sector challenges, regulations, and customer behaviors.",
    "url": "https://frameleads.com/industries",
    "telephone": "+91 6362821368",
    "email": "ajsal@frameleads.com",
    "provider": {
      "@type": "Organization",
      "name": "FrameLeads",
      "url": "https://frameleads.com"
    },
    "serviceType": "Digital Marketing",
    "areaServed": "Global",
    "priceRange": "$2000-$50000",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industry Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Digital Marketing", "description": "HIPAA-compliant marketing solutions for healthcare providers with medical expertise" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technology Marketing Solutions", "description": "Specialized digital marketing solutions for technology companies and SaaS platforms with technical expertise" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial Services Marketing", "description": "Secure and compliant marketing for financial institutions with regulatory expertise" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Marketing Strategies", "description": "Comprehensive e-commerce marketing strategies for online retailers with conversion expertise" } }
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
              Industry-Specific Digital Marketing Solutions That Drive Measurable Results
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Specialized marketing strategies for 12+ industries with proven compliance expertise. Our industry-specialized digital marketing solutions deliver superior results by addressing unique sector challenges, regulations, and customer behaviors.
            </p>
            <div className="max-w-4xl mx-auto text-left text-gray-600 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Industry-specialized expertise across 12+ verticals</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> 250% average improvement in sector-specific KPIs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Compliance-first marketing strategies</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] mt-0.5" /> Proven results in regulated industries</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Industry Analysis
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Marketing Services by Industry Sector</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industry-specific digital marketing solutions are tailored to meet the unique challenges and opportunities within each sector. Explore our specialized services below:
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
                    <div className="text-sm font-semibold text-[#FF6B35] mb-2">
                      {industry.results}
                    </div>
                    <div className="text-xs text-gray-500 mb-4">
                      <strong>Compliance:</strong> {industry.compliance}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Specialized Digital Marketing for Your Industry?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific digital marketing delivers superior results because it addresses the unique challenges, regulations, and customer behaviors within each sector. Generic marketing approaches fail to account for industry compliance requirements, specialized terminology, and sector-specific customer journey patterns.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Industry Knowledge Matters</h3>
                <p className="text-gray-600 text-sm">Our industry-specialized marketing consultants understand the nuances of your sector, from regulatory compliance requirements to industry-specific customer pain points. This expertise ensures your marketing campaigns resonate with your target audience while maintaining full compliance with industry standards.</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance-First Marketing Approach</h3>
                <p className="text-gray-600 text-sm">Different industries face varying regulatory requirements. Our compliance-aware marketing strategies ensure your campaigns meet sector-specific guidelines while maximizing performance, particularly crucial for healthcare, financial services, and other regulated industries.</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record Across Sectors</h3>
                <p className="text-gray-600 text-sm">With documented success across 12+ industries, our specialized approach consistently delivers measurable improvements in industry-relevant KPIs, from patient acquisition rates to B2B lead quality.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Get Your Free Industry Marketing Analysis"
        description="Our industry-specialized marketing consultants will analyze your current digital presence and create a custom strategy tailored to your sector's unique requirements and opportunities."
        primaryButtonText="Get Free Industry Analysis"
        secondaryButtonText="Schedule Strategy Consultation"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Specialized Marketing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive industry-specific services, case studies, and related digital marketing offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Industry-Focused Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry-Focused Services</h3>
              <div className="space-y-3">
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Solutions</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing Services</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">E-commerce Marketing Strategies</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Healthcare Marketing Compliance</Link>
              </div>
            </div>

            {/* Core Digital Marketing Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Digital Marketing Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services & Optimization</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management & Strategy</Link>
                <Link href="/analytics-and-automations" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Analytics & Marketing Automation</Link>
              </div>
            </div>

            {/* Global Service Locations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Service Locations</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</Link>
                <Link href="/digital-marketing-in-singapore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Singapore</Link>
                <Link href="/digital-marketing-in-australia" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Australia</Link>
              </div>
            </div>

            {/* Company & Resources */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company & Resources</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Our Team</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Marketing Academy</Link>
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

      <Footer />
    </div>
    </>
  )
}
