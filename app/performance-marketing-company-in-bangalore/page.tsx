'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function PerformanceMarketingCompanyBangalorePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const bangaloreBusinessDistricts = [
    {
      category: "Central Business District (CBD)",
      areas: ["UB City", "Brigade Road", "Commercial Street", "MG Road", "Cunningham Road", "Richmond Town"],
      description: "Premium commercial areas for enterprise B2B marketing and corporate services"
    },
    {
      category: "IT Corridors & Tech Hubs", 
      areas: ["Electronic City", "Whitefield", "Marathahalli", "Sarjapur Road", "Outer Ring Road", "Bellandur"],
      description: "Technology and innovation centers for SaaS and software company marketing"
    },
    {
      category: "Emerging Business Hubs",
      areas: ["Koramangala", "Indiranagar", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar"],
      description: "Startup ecosystem and venture-backed company growth areas"
    },
    {
      category: "Residential & Mixed-Use Areas",
      areas: ["Banashankari", "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "Yelahanka"],
      description: "Local business and services digital transformation campaigns"
    }
  ]

  const performanceMarketingServices = [
    {
      icon: DollarSign,
      title: "Google Ads & PPC Management",
      description: "Strategic Google advertising excellence with advanced optimization for maximum ROI in Bangalore's competitive market.",
      features: [
        "Search Campaign Optimization for high-intent keywords",
        "Display Network campaigns targeting Bangalore demographics",
        "Shopping Ads management for e-commerce businesses",
        "YouTube Advertising for brand awareness and conversions",
        "Remarketing strategies to re-engage website visitors"
      ],
      results: [
        "300% improvement in Quality Score",
        "45% reduction in cost-per-click",
        "2.5x average return on ad spend (ROAS)"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Advertising & Paid Social",
      description: "Multi-platform social media performance marketing optimized for Bangalore audiences and business objectives.",
      features: [
        "Facebook & Instagram Ads optimized for Bangalore audiences",
        "LinkedIn B2B advertising for enterprise lead generation",
        "Twitter advertising for thought leadership and engagement",
        "TikTok and emerging platform early adoption strategies",
        "Cross-platform campaign integration and optimization"
      ],
      results: [
        "250% increase in social media conversions",
        "60% lower cost-per-acquisition",
        "400% improvement in engagement rates"
      ]
    },
    {
      icon: Settings,
      title: "Conversion Rate Optimization (CRO)",
      description: "Systematic website and landing page optimization to maximize conversions and improve user experience for Bangalore businesses.",
      features: [
        "Heat mapping and user behavior analysis",
        "A/B testing for headlines, CTAs, and page layouts",
        "Mobile optimization for Bangalore's mobile-first users",
        "Checkout process optimization for e-commerce",
        "Form optimization and lead capture improvement"
      ],
      results: [
        "85% average conversion rate improvement",
        "40% reduction in bounce rate",
        "300% increase in lead generation"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation & Lead Nurturing",
      description: "Intelligent campaign automation and lead nurturing systems to accelerate sales cycles and improve conversion rates.",
      features: [
        "Email marketing automation sequences",
        "Lead scoring and qualification systems",
        "Behavioral trigger campaigns",
        "Customer journey mapping and optimization",
        "CRM integration and sales enablement"
      ],
      results: [
        "300% increase in marketing qualified leads",
        "50% shorter sales cycles",
        "200% improvement in lead-to-customer conversion"
      ]
    },
    {
      icon: PieChart,
      title: "Analytics & Performance Tracking",
      description: "Advanced data analytics and reporting to provide complete visibility into campaign performance and ROI.",
      features: [
        "Google Analytics 4 implementation and optimization",
        "Custom dashboard creation for real-time insights",
        "Attribution modeling across all touchpoints",
        "ROI tracking and performance measurement",
        "Competitive intelligence and market analysis"
      ],
      results: [
        "100% visibility into campaign performance",
        "Data-driven decision making",
        "25% improvement in marketing efficiency"
      ]
    }
  ]

  const performanceMarketingProcess = [
    {
      step: "01",
      title: "Strategic Discovery & Market Analysis",
      description: "Comprehensive business and market audit including current performance analysis, competitive benchmarking, target audience research, and goal setting aligned with business objectives."
    },
    {
      step: "02",
      title: "Multi-Channel Campaign Development",
      description: "Integrated performance campaign strategy with platform-specific architecture, creative asset development, landing page creation, and tracking implementation."
    },
    {
      step: "03",
      title: "Campaign Launch & Optimization",
      description: "Data-driven campaign execution with real-time performance monitoring, A/B testing implementation, and weekly optimization cycles for maximum ROI."
    },
    {
      step: "04",
      title: "Scale & Performance Enhancement",
      description: "Continuous growth and optimization through campaign scaling, advanced automation implementation, and monthly strategic planning sessions."
    }
  ]

  const whyChoosePerformanceMarketing = [
    "Advanced Analytics & Attribution: Multi-touch attribution modeling and advanced performance tracking",
    "ROI-Focused Campaign Management: Every campaign optimized for measurable business outcomes",
    "Cross-Platform Integration: Seamless integration across Google Ads, Facebook, LinkedIn, and emerging platforms",
    "Conversion Rate Optimization: Systematic A/B testing and landing page optimization",
    "Real-time Performance Monitoring: 24/7 campaign monitoring and optimization",
    "Local Market Intelligence: 5+ years serving Bangalore's diverse business landscape",
    "Industry-Specific Expertise: Proven success across SaaS, e-commerce, real estate, healthcare, and fintech",
    "Startup Ecosystem Knowledge: Deep understanding of Bangalore's startup funding cycles and growth patterns"
  ]

  const performanceMarketingCaseStudies = [
    {
      industry: "SaaS Startup",
      location: "Koramangala Tech Hub",
      challenge: "Early-stage B2B SaaS needed to scale from 10 to 100 enterprise customers",
      solution: "Implemented multi-channel performance marketing with LinkedIn targeting, Google Ads, and content syndication",
      results: [
        "500% increase in enterprise demo requests within 6 months",
        "65% improvement in trial-to-paid conversion rate",
        "₹2.5 Cr annual recurring revenue growth",
        "3.2x return on advertising spend (ROAS)"
      ]
    },
    {
      industry: "E-commerce Fashion Brand",
      location: "Indiranagar",
      challenge: "D2C fashion brand struggling with high customer acquisition costs and low ROAS",
      solution: "Comprehensive performance marketing overhaul with dynamic product ads, influencer partnerships, and conversion optimization",
      results: [
        "400% increase in online sales volume",
        "50% reduction in customer acquisition cost",
        "4.8x return on advertising spend",
        "35% improvement in customer lifetime value"
      ]
    },
    {
      industry: "Real Estate Developer",
      location: "Whitefield",
      challenge: "Premium residential project needed qualified buyer leads in competitive Bangalore market",
      solution: "Geo-targeted performance campaigns with virtual tour integration and lead nurturing automation",
      results: [
        "350% increase in qualified property inquiries",
        "45% reduction in cost per qualified lead",
        "75% improvement in booking-to-sale conversion rate",
        "₹180 Cr in sales attributed to performance marketing"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies",
      description: "Transform your SaaS business with performance marketing strategies designed for Bangalore's thriving tech ecosystem.",
      services: [
        "B2B lead generation and enterprise sales enablement",
        "Free trial conversions and freemium model optimization",
        "Product-led growth and user acquisition campaigns",
        "Competitive intelligence and market positioning"
      ],
      results: "400% increase in qualified demo requests, 60% improvement in trial-to-paid conversion"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands",
      description: "Scale your online business with performance marketing campaigns optimized for Bangalore's digital-savvy consumers.",
      services: [
        "Shopping ads optimization and dynamic product ads",
        "Customer acquisition funnels and retention campaigns",
        "Mobile commerce optimization and app install campaigns",
        "Cross-border selling and international expansion"
      ],
      results: "350% increase in online sales, 40% improvement in return on ad spend (ROAS)"
    },
    {
      icon: Building2,
      title: "Real Estate & Property Development",
      description: "Connect with Bangalore's property buyers through targeted performance campaigns and virtual tour integration.",
      services: [
        "Property listing optimization and buyer persona targeting",
        "Virtual tour integration and immersive experiences",
        "Luxury property marketing and affordable housing campaigns",
        "Commercial real estate lead generation"
      ],
      results: "300% increase in property inquiries, 50% reduction in cost per qualified lead"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Drive patient acquisition for Bangalore's healthcare providers through compliant, results-driven performance marketing.",
      services: [
        "Patient acquisition campaigns and appointment booking optimization",
        "Telemedicine promotion and healthcare app marketing",
        "Hospital marketing and clinic promotion campaigns",
        "Wellness and fitness industry digital transformation"
      ],
      results: "250% increase in appointment bookings, 45% improvement in patient acquisition cost"
    },
    {
      icon: GraduationCap,
      title: "Education & Ed-Tech",
      description: "Maximize enrollment for Bangalore's educational institutions and ed-tech platforms with targeted performance marketing.",
      services: [
        "Student acquisition campaigns and course promotion",
        "Parent targeting for K-12 and higher education",
        "Ed-tech platform growth and user acquisition",
        "Professional certification and skill development marketing"
      ],
      results: "400% increase in course enrollments, 35% reduction in student acquisition cost"
    }
  ]

  const performanceMarketingFaqData = [
    {
      question: "What makes performance marketing different from traditional digital marketing in Bangalore?",
      answer: "Performance marketing focuses exclusively on measurable results and ROI. Unlike brand-focused digital marketing, every campaign element is optimized for specific actions like leads, sales, or app downloads. In Bangalore's competitive market, this approach ensures maximum efficiency of your marketing budget."
    },
    {
      question: "How quickly can I see results from performance marketing campaigns?",
      answer: "Typical performance marketing campaigns in Bangalore show initial results within 2-4 weeks, with significant optimization occurring by month 3. However, complex B2B campaigns or highly competitive markets may require 6-8 weeks for full optimization. We provide weekly performance updates to track progress."
    },
    {
      question: "What budget should I allocate for performance marketing in Bangalore?",
      answer: "Minimum effective monthly ad spend ranges from ₹50,000 for local businesses to ₹5 lakhs+ for enterprise campaigns. Our management fees typically range from 15-20% of ad spend, depending on campaign complexity and services included."
    },
    {
      question: "Do you work with startups and early-stage companies in Bangalore?",
      answer: "Absolutely! Bangalore's startup ecosystem is a core focus area. We offer flexible engagement models for early-stage companies, including performance-based pricing and growth-stage packages designed for startups in Koramangala, Indiranagar, and other startup hubs."
    },
    {
      question: "How do you measure performance marketing success for Bangalore businesses?",
      answer: "We track comprehensive metrics including cost per acquisition (CPA), return on advertising spend (ROAS), conversion rates, customer lifetime value (CLV), and attribution across all touchpoints. Monthly reports include business impact analysis and recommendations for optimization."
    },
    {
      question: "Which platforms do you specialize in for performance marketing?",
      answer: "Our expertise spans Google Ads (Search, Display, Shopping, YouTube), Facebook & Instagram advertising, LinkedIn marketing, Twitter promotions, and emerging platforms. Platform selection depends on your target audience behavior and business objectives in the Bangalore market."
    },
    {
      question: "Can you help optimize our existing performance marketing campaigns?",
      answer: "Yes, we offer campaign audit and optimization services for existing campaigns. Our 30-day performance audit identifies optimization opportunities and provides actionable recommendations for immediate improvement in campaign performance."
    },
    {
      question: "Do you provide performance marketing training for our internal team?",
      answer: "We offer comprehensive performance marketing training programs for Bangalore businesses, including Google Ads certification guidance, Facebook Blueprint training, and custom workshops for your marketing team. Training can be conducted at your office or our Koramangala facility."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Frameleads - Performance Marketing Agency",
        "description": "Leading performance marketing agency in Bangalore delivering 400% ROI growth. Expert Google Ads, Facebook Ads & conversion optimization.",
        "url": "https://frameleads.com/performance-marketing-company-in-bangalore",
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
        "mainEntity": performanceMarketingFaqData.map(faq => ({
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
                🏆 #1 Performance Marketing Agency in Bangalore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Premier Performance Marketing Agency in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Bangalore
              </span>{" "}
              Delivering 500% ROI Growth
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your digital advertising with Bangalore's most trusted performance marketing agency. We specialize in data-driven campaigns that deliver measurable results for startups, SMEs, and enterprises across Bangalore's business ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Performance Marketing Audit
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
                <span>500% Average ROI Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>300+ Qualified Leads Monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>98% Client Retention Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>5+ Years Serving Bangalore Businesses</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 500+ Bangalore Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">1000+</div>
                  <div className="text-gray-600 text-sm">Successful Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">₹50 Cr+</div>
                  <div className="text-gray-600 text-sm">Ad Spend Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">85%</div>
                  <div className="text-gray-600 text-sm">Avg Conversion Rate Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">40%</div>
                  <div className="text-gray-600 text-sm">Reduction in Customer Acquisition Cost</div>
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
                Why Choose Frameleads as Your Performance Marketing Partner in Bangalore?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads stands as Bangalore's premier performance marketing agency, combining deep local market knowledge with cutting-edge digital advertising expertise. Our data-driven approach ensures every rupee of your marketing budget delivers maximum return on investment.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Performance Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Advanced Analytics & Attribution: Multi-touch attribution modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">ROI-Focused Campaign Management: Measurable business outcomes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cross-Platform Integration: Google Ads, Facebook, LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Conversion Rate Optimization: Systematic A/B testing</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Bangalore Market Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Local Market Intelligence: 5+ years serving Bangalore's diverse business landscape</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Expertise: SaaS, e-commerce, real estate, healthcare, fintech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Startup Ecosystem Knowledge: Deep understanding of Bangalore's startup funding cycles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Regional Targeting Excellence: Hyper-local targeting for Bangalore suburbs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/story/story-3.png"
                alt="Performance marketing results dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Marketing Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Performance Marketing Services in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized performance marketing services are designed to deliver measurable ROI and drive business growth for Bangalore businesses across all industries.
            </p>
          </div>

          <div className="space-y-12">
            {performanceMarketingServices.map((service, index) => {
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

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Performance Marketing Process in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic performance marketing approach specifically designed for Bangalore businesses, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMarketingProcess.map((process, index) => (
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

      {/* Industries We Serve */}
      <section className="relative py-20" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve in Bangalore's Performance Marketing Landscape</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise spans across key industries in Bangalore, with deep understanding of unique performance marketing needs and business objectives in each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => {
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

      {/* Performance Marketing Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Performance Marketing Success Stories from Bangalore Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped local Bangalore businesses achieve remarkable growth through strategic performance marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {performanceMarketingCaseStudies.map((study, index) => (
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

      {/* Business Districts */}
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bangalore Business Districts We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive performance marketing services across all major business districts in Bangalore, helping businesses in every area maximize their digital advertising ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bangaloreBusinessDistricts.map((district, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{district.category}</h3>
                  <p className="text-gray-600 text-sm mb-4">{district.description}</p>
                  <div className="space-y-2">
                    {district.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#FF6B35]" />
                        <span className="text-gray-600 text-sm">{area}</span>
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
              Frequently Asked Questions About Performance Marketing in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about performance marketing services in Bangalore and how Frameleads can help your business achieve measurable results.
            </p>
          </div>

          <div className="space-y-6">
            {performanceMarketingFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Performance Marketing in Bangalore?"
        description="Partner with Frameleads, Bangalore's most trusted performance marketing agency. Get your free audit and discover how we can help you achieve measurable ROI and business growth."
        primaryButtonText="Get Free Performance Marketing Audit"
        secondaryButtonText="Schedule Strategy Call"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Performance marketing works best when integrated with other digital marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Performance & Paid Marketing */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance & Paid Marketing</h3>
              <div className="space-y-3">
                <Link href="/performance-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing Bangalore</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
              </div>
            </div>

            {/* SEO & Search */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO & Search</h3>
              <div className="space-y-3">
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/seo-company-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Dubai</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
              </div>
            </div>

            {/* Industry Specializations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Specializations</h3>
              <div className="space-y-3">
                <Link href="/performance-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing Bangalore</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
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
