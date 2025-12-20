'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Home, Building, Search, Camera, Video, Mail as MailIcon } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export default function RealEstateMarketingCompanyBangalorePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const bangaloreRealEstateAreas = [
    {
      category: "Prime Residential Areas",
      areas: ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "BTM Layout", "Jayanagar", "Banashankari", "Rajajinagar", "Malleshwaram", "Yelahanka", "Hennur Road", "Sarjapur Road"],
      description: "High-value residential properties and luxury developments"
    },
    {
      category: "Commercial & IT Corridors", 
      areas: ["Electronic City", "Marathahalli", "Outer Ring Road", "Bannerghatta Road", "Hosur Road", "Tumkur Road", "Hebbal", "Manyata Tech Park"],
      description: "Office spaces, retail properties, and commercial developments"
    },
    {
      category: "Emerging Growth Areas",
      areas: ["Devanahalli", "Aerospace Park", "Nandi Hills Road", "Kanakapura Road", "Mysore Road", "Magadi Road"],
      description: "New development opportunities and investment properties"
    },
    {
      category: "Luxury Property Zones",
      areas: ["Richmond Town", "Cunningham Road", "Sadashivanagar", "Basavanagudi", "JP Nagar", "HSR Layout"],
      description: "Premium residential and luxury property segments"
    }
  ]

  const realEstateMarketingServices = [
    {
      icon: Search,
      title: "Real Estate Lead Generation & Property Marketing",
      description: "Transform your property sales with targeted digital marketing campaigns that attract qualified buyers and investors across Bangalore's diverse real estate market.",
      features: [
        "Performance-Driven Lead Generation for serious property buyers",
        "Google Ads for Real Estate with location-based targeting",
        "Facebook & Instagram Property Advertising with virtual tours",
        "WhatsApp Lead Nurturing for immediate property inquiries",
        "Landing Page Optimization for high-converting property listings"
      ],
      results: [
        "400% increase in qualified property leads",
        "85% lead-to-viewing conversion rate",
        "60% reduction in cost per qualified lead"
      ]
    },
    {
      icon: Building,
      title: "Real Estate SEO Services & Website Optimization",
      description: "Dominate Bangalore property searches with comprehensive SEO strategies tailored for real estate businesses and property developers.",
      features: [
        "Local Real Estate SEO for area-specific property searches",
        "Property Listing SEO for individual property page optimization",
        "Real Estate Content Marketing with market updates and guides",
        "Technical SEO for fast-loading property galleries",
        "Google My Business Optimization for real estate offices"
      ],
      results: [
        "300% increase in organic property inquiries",
        "#1 rankings for location-based property searches",
        "200% improvement in website engagement"
      ]
    },
    {
      icon: Camera,
      title: "Real Estate Social Media Marketing & Brand Building",
      description: "Build a powerful real estate brand presence across social media platforms with engaging property content and virtual tours.",
      features: [
        "Instagram Property Showcases with professional photography",
        "LinkedIn B2B Marketing for corporate clients and investors",
        "YouTube Property Tours with high-quality video content",
        "Social Media Advertising for specific property segments",
        "Community Building with local Bangalore property groups"
      ],
      results: [
        "250% increase in social media property inquiries",
        "400% growth in real estate brand awareness",
        "300% improvement in engagement rates"
      ]
    },
    {
      icon: Home,
      title: "Real Estate Website Design & Development",
      description: "Create stunning property websites that showcase your developments and convert visitors into buyers with advanced search and virtual tour features.",
      features: [
        "Property Portal Development with advanced search filters",
        "Virtual Tour Integration with 360-degree property views",
        "Mobile-First Design for property searches on mobile",
        "CRM Integration for seamless lead management",
        "Property Management Dashboards for easy listing management"
      ],
      results: [
        "300% improvement in website engagement",
        "200% increase in online property inquiries",
        "150% improvement in property viewing bookings"
      ]
    },
    {
      icon: Video,
      title: "Real Estate Content Marketing & Virtual Tours",
      description: "Engage potential buyers with compelling property content, virtual tours, and market insights that drive qualified inquiries and sales.",
      features: [
        "Professional Property Photography and Videography",
        "Virtual Tour Creation with interactive floor plans",
        "Market Reports and Area Guides for Bangalore",
        "Property Investment Content and ROI analysis",
        "Neighborhood Showcase and Lifestyle Content"
      ],
      results: [
        "350% increase in property viewing requests",
        "250% improvement in content engagement",
        "180% increase in qualified buyer inquiries"
      ]
    }
  ]

  const realEstateMarketingProcess = [
    {
      step: "01",
      title: "Strategic Real Estate Market Analysis & Planning",
      description: "Comprehensive analysis of your property portfolio, target market, and competitive landscape in Bangalore's diverse real estate ecosystem."
    },
    {
      step: "02",
      title: "Multi-Channel Real Estate Campaign Development",
      description: "Integrated marketing campaigns across digital platforms to maximize property visibility and lead generation for residential and commercial properties."
    },
    {
      step: "03",
      title: "Lead Generation & Buyer Nurturing",
      description: "Advanced lead qualification and nurturing systems to convert prospects into property buyers with personalized communication strategies."
    },
    {
      step: "04",
      title: "Performance Tracking & Marketing Optimization",
      description: "Continuous monitoring and optimization of campaigns for maximum ROI and lead quality in Bangalore's competitive real estate market."
    }
  ]

  const realEstateIndustryExpertise = [
    {
      icon: Home,
      title: "Residential Property Marketing",
      description: "Specialized marketing for apartments, villas, and residential developments across Bangalore's diverse neighborhoods.",
      services: [
        "Pre-launch campaigns and inventory liquidation",
        "Resale property marketing and buyer targeting",
        "Luxury residential marketing for premium segments",
        "Affordable housing campaigns and government schemes"
      ],
      results: "400% increase in residential property inquiries, 85% improvement in site visit conversions"
    },
    {
      icon: Building,
      title: "Commercial Real Estate Marketing",
      description: "B2B marketing solutions for office spaces, retail properties, and commercial developments in Bangalore's business districts.",
      services: [
        "Office space marketing for corporate clients",
        "Retail property advertising and tenant acquisition",
        "Warehouse and industrial property marketing",
        "Mixed-use development campaigns"
      ],
      results: "300% increase in commercial property inquiries, 90% improvement in corporate client acquisition"
    },
    {
      icon: Award,
      title: "Luxury Property Marketing",
      description: "Premium marketing services for high-end properties and luxury developments targeting HNI buyers and investors.",
      services: [
        "Exclusive luxury property campaigns",
        "High-end content creation and photography",
        "Targeted outreach to HNI buyers",
        "Premium property showcase events"
      ],
      results: "250% increase in luxury property inquiries, 200% improvement in qualified buyer targeting"
    },
    {
      icon: DollarSign,
      title: "Real Estate Investment Marketing",
      description: "Investor-focused marketing for rental properties and investment opportunities targeting NRI buyers and property investors.",
      services: [
        "Investment property marketing campaigns",
        "Rental property advertising and tenant acquisition",
        "NRI buyer targeting and international marketing",
        "ROI-focused investment content"
      ],
      results: "350% increase in investment inquiries, 150% improvement in rental property applications"
    }
  ]

  const realEstateCaseStudies = [
    {
      industry: "Luxury Apartment Complex",
      location: "Koramangala",
      challenge: "New luxury development struggling with pre-launch sales and brand awareness in competitive market",
      solution: "Integrated digital marketing campaign with targeted social media, SEO optimization, Google Ads, and virtual tour integration",
      results: [
        "400% increase in qualified property inquiries",
        "80% units sold during pre-launch phase",
        "300% improvement in site visit bookings",
        "₹45 Cr in sales attributed to digital marketing"
      ]
    },
    {
      industry: "Commercial Office Space",
      location: "Electronic City",
      challenge: "Commercial property facing low occupancy rates and limited corporate client awareness",
      solution: "B2B focused LinkedIn campaigns, content marketing, and targeted Google Ads for office space searches",
      results: [
        "300% increase in corporate inquiries",
        "90% occupancy achieved within 6 months",
        "200% improvement in corporate client acquisition",
        "₹120 Cr in commercial property sales"
      ]
    },
    {
      industry: "Residential Villa Project",
      location: "Whitefield",
      challenge: "Premium villa project with slow sales and limited brand awareness in luxury segment",
      solution: "Luxury-focused social media campaigns, influencer partnerships, and exclusive content marketing with virtual tours",
      results: [
        "250% increase in site visits",
        "200% improvement in qualified buyer inquiries",
        "150% increase in luxury property engagement",
        "₹85 Cr in villa sales attributed to marketing"
      ]
    }
  ]

  const realEstateFaqData = [
    {
      question: "How long does it take to see results from real estate digital marketing in Bangalore?",
      answer: "Most real estate clients see initial improvements in website traffic and inquiries within 30-45 days. Significant lead generation improvements typically occur within 60-90 days, with peak performance achieved after 3-6 months of consistent marketing efforts."
    },
    {
      question: "What makes real estate marketing different from other industries in Bangalore?",
      answer: "Real estate marketing in Bangalore requires understanding of local buyer behavior, RERA compliance, seasonal purchasing patterns, and micro-market dynamics. Our specialized approach addresses these unique challenges with industry-specific strategies."
    },
    {
      question: "Do you work with individual real estate agents or only large developers?",
      answer: "We serve the entire spectrum of real estate professionals in Bangalore, from individual agents and small brokerages to large developers and property management companies. Our solutions scale according to business size and requirements."
    },
    {
      question: "What's included in your real estate marketing audit?",
      answer: "Our comprehensive audit includes website performance analysis, competitor research, local SEO assessment, current lead generation evaluation, and detailed recommendations for improving your real estate marketing ROI."
    },
    {
      question: "How do you measure success for real estate marketing campaigns?",
      answer: "We track qualified lead generation, property inquiry volume, website engagement, cost per lead, conversion rates, and ultimately sales attribution to ensure our marketing efforts directly impact your real estate business growth."
    },
    {
      question: "Which platforms work best for real estate marketing in Bangalore?",
      answer: "Google Ads and Facebook/Instagram are most effective for property marketing, along with LinkedIn for commercial real estate. We also optimize for property portals like Magicbricks, 99acres, and Housing.com."
    },
    {
      question: "Can you help with virtual tour creation and property photography?",
      answer: "Yes, we provide comprehensive property content creation including professional photography, virtual tours, drone footage, and lifestyle content that showcases properties in their best light."
    },
    {
      question: "Do you offer RERA-compliant marketing solutions?",
      answer: "Absolutely! We ensure all our real estate marketing campaigns comply with RERA guidelines, including proper disclosures, accurate property information, and transparent advertising practices."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Frameleads - Real Estate Marketing Agency",
        "description": "Leading real estate marketing agency in Bangalore delivering 400% lead growth. Expert property marketing, SEO & lead generation for developers & agents.",
        "url": "https://frameleads.com/real-estate-marketing-company-in-bangalore",
        "telephone": "+91 6362821368",
        "email": "ajsal@frameleads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Koramangala",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560034",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": "Bangalore",
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "sameAs": [
          "https://linkedin.com/company/frameleads",
          "https://twitter.com/frameleads"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": realEstateFaqData.map(faq => ({
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
                🏆 #1 Real Estate Marketing Agency in Bangalore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Best Real Estate Marketing Agency in {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Bangalore
              </span>{" "}
              | Proven 400% Lead Growth Results
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your real estate business with Bangalore's leading digital marketing agency. We specialize in property lead generation, real estate SEO, and comprehensive digital marketing solutions for builders, developers, and real estate agents across Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Real Estate Marketing Audit
                </Button>
              </Link>
              <Link href="tel:+916362821368" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +91 6362821368
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>500+ Real Estate Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>400% Average Lead Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>5+ Years Bangalore Market Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>50+ Real Estate Projects Completed</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏠 Trusted by 500+ Real Estate Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">1000+</div>
                  <div className="text-gray-600 text-sm">Property Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">₹200 Cr+</div>
                  <div className="text-gray-600 text-sm">Property Sales Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">85%</div>
                  <div className="text-gray-600 text-sm">Lead-to-Viewing Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">60%</div>
                  <div className="text-gray-600 text-sm">Reduction in Cost per Lead</div>
                </div>
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
                Why Choose Frameleads as Your Real Estate Marketing Partner in Bangalore?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads stands out as Bangalore's premier real estate marketing agency with deep local market expertise and proven results. Our specialized team understands Bangalore's unique property market dynamics, from luxury apartments in Koramangala to commercial spaces in Electronic City.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏠 Real Estate Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Local Market Authority: 5+ years serving Bangalore's real estate ecosystem</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 400% average increase in qualified property leads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Full-service real estate digital marketing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry Specialization: Residential, commercial, and luxury properties</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Bangalore Real Estate Market Knowledge</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Micro-Market Expertise: Understanding of area-specific buyer preferences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Developer Relationships: Strong network within Bangalore's real estate community</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Regulatory Knowledge: Compliance with RERA guidelines and local regulations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Market Timing: Strategic campaign timing aligned with property buying seasons</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/story/story-4.png"
                alt="Real estate marketing results dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Marketing Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Real Estate Digital Marketing Services in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized real estate marketing services are designed to deliver measurable results and drive property sales for developers, builders, and real estate agents across Bangalore.
            </p>
          </div>

          <div className="space-y-12">
            {realEstateMarketingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF6B35]/25">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Services:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Delivered:</h4>
                            <ul className="space-y-2">
                              {service.results.map((result, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <BarChart3 className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real Estate Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Real Estate Marketing Process in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic real estate marketing approach specifically designed for Bangalore's property market, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realEstateMarketingProcess.map((process, index) => (
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

      {/* Real Estate Industry Expertise */}
      <section className="relative py-20" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Estate Industry Expertise in Bangalore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise spans across all segments of Bangalore's real estate market, with deep understanding of unique marketing needs and buyer behavior in each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realEstateIndustryExpertise.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{industry.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{industry.description}</p>
                    <ul className="space-y-2 mb-4">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-lg p-3 mt-4">
                      <p className="text-[#FF6B35] text-sm font-semibold text-center">{industry.results}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real Estate Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Estate Marketing Success Stories from Bangalore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped local Bangalore real estate businesses achieve remarkable growth through strategic digital marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realEstateCaseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.industry}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.location}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <BarChart3 className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Areas We Serve */}
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bangalore Areas We Serve for Real Estate Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive real estate marketing services across all major areas in Bangalore, helping property developers, builders, and agents maximize their digital presence and lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bangaloreRealEstateAreas.map((area, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{area.category}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="space-y-2">
                    {area.areas.map((location, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#FF6B35]" />
                        <span className="text-gray-600 text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
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
              Frequently Asked Questions About Real Estate Marketing in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about real estate marketing services in Bangalore and how Frameleads can help your property business achieve measurable results.
            </p>
          </div>

          <div className="space-y-6">
            {realEstateFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Real Estate Marketing in Bangalore?"
        description="Partner with Frameleads, Bangalore's most trusted real estate marketing agency. Get your free audit and discover how we can help you achieve measurable property sales and business growth."
        primaryButtonText="Get Free Real Estate Marketing Audit"
        secondaryButtonText="Schedule Strategy Call"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real estate marketing works best when integrated with other digital marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Real Estate & Property Marketing */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate & Property Marketing</h3>
              <div className="space-y-3">
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing Bangalore</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising Bangalore</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
              </div>
            </div>

            {/* SEO & Search */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO & Search</h3>
              <div className="space-y-3">
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
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

      
    </div>
    </>
  )
}
