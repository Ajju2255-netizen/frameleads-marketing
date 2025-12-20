'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import ReviewRating from "../components/review-rating"

export default function DigitalMarketingInCanadaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const canadianBusinessMarkets = [
    {
      category: "Toronto - Business & Financial Hub",
      areas: ["Downtown Toronto", "Financial District", "Yorkville", "North York", "Scarborough", "Etobicoke"],
      description: "Toronto's premier business and financial center requiring sophisticated digital marketing strategies for Ontario's competitive market"
    },
    {
      category: "Vancouver - Tech & Innovation Center", 
      areas: ["Downtown Vancouver", "Burnaby", "Richmond", "Surrey", "North Vancouver", "West Vancouver"],
      description: "Vancouver's dynamic tech and business ecosystem demands specialized digital marketing approaches for BC's innovation landscape"
    },
    {
      category: "Montreal - Bilingual Business Hub",
      areas: ["Downtown Montreal", "Old Montreal", "Westmount", "Côte-des-Neiges", "Plateau-Mont-Royal", "Laval"],
      description: "Montreal's unique bilingual market requires specialized digital marketing strategies in both English and French"
    },
    {
      category: "Calgary - Energy & Business Center",
      areas: ["Downtown Calgary", "Beltline", "Kensington", "Mission", "Inglewood", "Bridgeland"],
      description: "Calgary's energy and business sector demands robust B2B digital marketing strategies for Alberta's unique business landscape"
    }
  ]

  const digitalMarketingServices = [
    {
      icon: TrendingUp,
      title: "SEO Services Canada - Search Engine Optimization for Canadian Market Dominance",
      description: "Comprehensive SEO strategies specifically designed for Canada's competitive digital landscape, targeting high-value English and French keywords and local search optimization across all provinces.",
      features: [
        "Local SEO Canada: Google My Business optimization for Canadian businesses",
        "Bilingual SEO: Technical optimization for English and French content",
        "Keyword Research: Targeting high-volume Canada-specific terms in English and French",
        "Competitor Analysis: Comprehensive analysis of Canadian market competitors",
        "Content Optimization: Canada-focused content strategy with cultural adaptation"
      ],
      results: [
        "300% increase in organic traffic from Canadian searches",
        "Top 3 rankings for target keywords in Canada",
        "85% improvement in local visibility across Canadian provinces"
      ]
    },
    {
      icon: DollarSign,
      title: "PPC Advertising Canada - Google Ads Optimized for Canadian Audiences",
      description: "Strategic Google Ads and Microsoft Advertising campaigns optimized for Canadian audiences, purchasing behaviors, and regional market dynamics across Canada.",
      features: [
        "Canadian Market Targeting: Geo-targeted campaigns for Toronto, Vancouver, Montreal, Calgary",
        "Bilingual Language Ads: Culturally-adapted ad copy in English and French",
        "Conversion Optimization: Landing pages optimized for Canadian consumers",
        "Multi-platform Support: Google Ads, Facebook, LinkedIn, and TikTok",
        "Canadian Payment Integration: Local payment methods and banking systems"
      ],
      results: [
        "250% improvement in Canadian PPC performance",
        "40% reduction in cost-per-acquisition for Canadian market",
        "4.2x average return on ad spend (ROAS) in Canada"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Marketing Canada - Multi-Platform Canadian Audience Engagement",
      description: "Multi-platform social media marketing optimized for Canadian audiences, cultural nuances, and diverse business objectives across Canada's digital ecosystem.",
      features: [
        "Instagram Marketing: Visual storytelling for Canadian lifestyle brands",
        "LinkedIn Marketing: B2B networking and lead generation for Canadian companies",
        "TikTok Marketing: Engaging young Canadian demographics",
        "Twitter/X Marketing: High engagement strategies for Canadian market",
        "Facebook Marketing: Community building for Canadian businesses"
      ],
      results: [
        "280% increase in social media conversions from Canadian users",
        "50% lower cost-per-acquisition on Canadian market",
        "350% improvement in engagement rates with Canadian audiences"
      ]
    },
    {
      icon: Users,
      title: "Content Marketing Canada - Strategic Content Creation for Canadian Market",
      description: "Strategic content creation and distribution tailored to Canadian audiences, cultural references, and regional preferences across the Canadian market with English and French content.",
      features: [
        "Bilingual Content Creation: Industry-specific content for Canadian businesses",
        "Cultural Adaptation: Content that resonates with Canadian values and traditions",
        "SEO-Optimized Content: Long-form content targeting Canadian keywords",
        "Video Content: YouTube and social media content for Canadian audiences",
        "Local Content: City-specific content for Toronto, Vancouver, Montreal, Calgary"
      ],
      results: [
        "320% increase in content engagement from Canadian audiences",
        "55% improvement in lead quality from Canadian prospects",
        "200% increase in brand awareness across Canadian provinces"
      ]
    },
    {
      icon: Settings,
      title: "Web Development for Canadian Market Success",
      description: "Development of conversion-optimized websites adapted for Canadian users, design preferences, and local market requirements including Canadian compliance standards and bilingual support.",
      features: [
        "Responsive Web Design: Optimized for Canadian devices and internet speeds",
        "Bilingual Language Support: English and French content optimization",
        "Conversion Rate Optimization (CRO): For Canadian user behavior patterns",
        "E-commerce Development: With Canadian payment systems and banking integration",
        "User Experience (UX) Design: Tailored to Canadian preferences and culture"
      ],
      results: [
        "90% average improvement in conversion rate for Canadian visitors",
        "40% reduction in bounce rate for Canadian users",
        "380% increase in lead generation from Canadian market"
      ]
    }
  ]

  const digitalMarketingProcess = [
    {
      step: "01",
      title: "Canadian Market Research & Strategy",
      description: "Comprehensive Canadian market audit including consumer behavior analysis, competitive benchmarking across Canadian provinces, target audience research for Canadian demographics, and goal setting aligned with Canadian business objectives."
    },
    {
      step: "02",
      title: "Strategy Development Canada",
      description: "Comprehensive digital marketing strategy with SEO, PPC, social media, content marketing, and web development plans specifically adapted for the Canadian market, including regional variations and cultural considerations."
    },
    {
      step: "03",
      title: "Campaign Execution & Management",
      description: "Data-driven campaign execution with real-time performance monitoring across Canadian provinces, A/B testing implementation for Canadian audiences, and weekly optimization cycles for maximum ROI in the Canadian market."
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Continuous growth and optimization through scaling Canadian campaigns, implementing advanced automation for Canadian clients, and monthly strategic planning sessions focused on Canadian market expansion."
    }
  ]

  const whyChooseDigitalMarketing = [
    "Native Canadian Market Expertise: Deep understanding of Canadian consumer behavior, cultural nuances, and local search patterns",
    "Canadian Specialists: Complete coverage across Toronto, Vancouver, Montreal, Calgary, and all Canadian provinces",
    "Local Market Intelligence: Strategic targeting of Canada-specific keywords and search behaviors in English and French",
    "Performance-Driven Results: 300% average ROI increase for Canadian clients",
    "Bilingual Language Expertise: Specialized expertise in English and French SEO and content marketing",
    "Canadian Compliance: Full compliance with Canadian regulations and data protection laws",
    "Canadian Industry-Specific Expertise: Proven success in technology, e-commerce, healthcare, financial services, and professional services sectors in Canada",
    "Cultural Sensitivity: Deep understanding of Canada's multicultural business environment and regional preferences"
  ]

  const digitalMarketingCaseStudies = [
    {
      industry: "B2B SaaS Company",
      location: "Toronto, Ontario",
      challenge: "Early-stage B2B tech company needed to scale from 15 to 150 enterprise clients in the Canadian market",
      solution: "Comprehensive Canadian digital marketing strategy with SEO, PPC, social media, and content marketing in English and French",
      results: [
        "380% increase in qualified demo requests from Canadian market",
        "CAD $2.5M ARR growth in 12 months",
        "65% improvement in trial-to-paid conversion for Canadian users",
        "4.2x return on ad spend (ROAS) in Canada"
      ]
    },
    {
      industry: "E-commerce Brand",
      location: "Vancouver, BC",
      challenge: "D2C lifestyle brand struggling with high customer acquisition costs and low ROAS in Canadian market",
      solution: "Complete Canadian digital marketing overhaul with SEO, social media, content marketing, and conversion optimization",
      results: [
        "350% increase in online sales from Canadian market",
        "45% improvement in ROAS for Canadian campaigns",
        "280% improvement in customer lifetime value for Canadian clients",
        "5.2x return on ad spend on Canadian market"
      ]
    },
    {
      industry: "Professional Services Firm",
      location: "Calgary, Alberta",
      challenge: "B2B consulting firm needed qualified leads in Canada's competitive professional services market",
      solution: "Comprehensive B2B Canadian digital marketing strategy with LinkedIn, Google Ads, content marketing, and SEO",
      results: [
        "420% increase in qualified B2B leads from Canadian market",
        "40% reduction in cost-per-lead for Canadian B2B campaigns",
        "CAD $1.8M in new business revenue in 8 months",
        "80% improvement in inquiry-to-client conversion rate"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies in Canada",
      description: "Transform your Canadian tech presence with comprehensive digital marketing strategies designed for Canada's thriving innovation ecosystem and digital transformation.",
      services: [
        "B2B lead generation and enterprise sales enablement for Canadian market",
        "Free trial conversions and freemium model optimization for Canadian users",
        "Product-led growth and user acquisition campaigns across Canadian provinces",
        "Competitive intelligence and market positioning in Canadian tech sector"
      ],
      results: "380% increase in qualified demo requests from Canadian market, 65% improvement in trial-to-paid conversion for Canadian users"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands in Canada",
      description: "Scale your online business with comprehensive digital marketing campaigns optimized for Canadian digital consumers and purchasing behaviors.",
      services: [
        "Shopping ads optimization and dynamic product ads for Canadian market",
        "Customer acquisition funnels and retention campaigns for Canadian buyers",
        "Mobile commerce optimization and app install campaigns for Canadian users",
        "Cross-border selling and international expansion from Canadian base"
      ],
      results: "350% increase in online sales from Canadian market, 45% improvement in return on ad spend (ROAS) for Canadian campaigns"
    },
    {
      icon: Building2,
      title: "Professional Services & B2B",
      description: "Generate qualified leads for Canadian professional services through targeted digital marketing campaigns focused on Canada's business ecosystem.",
      services: [
        "B2B lead generation and sales enablement for Canadian professional services",
        "LinkedIn marketing and professional networking for Canadian B2B",
        "Digital marketing for service launches and professional events in Canada",
        "Account-based marketing (ABM) for Canadian enterprise clients"
      ],
      results: "420% increase in qualified B2B leads from Canadian market, 40% reduction in cost-per-lead for Canadian B2B campaigns"
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Practices in Canada",
      description: "Drive patient acquisition for Canadian healthcare providers through compliant, results-driven digital marketing across Canada.",
      services: [
        "Patient acquisition campaigns and appointment booking optimization for Canadian healthcare",
        "Telemedicine promotion and health app marketing for Canadian patients",
        "Hospital marketing campaigns and clinic promotion across Canadian provinces",
        "Digital transformation of wellness and fitness industry for Canadian market"
      ],
      results: "250% increase in appointment bookings from Canadian patients, 50% improvement in patient acquisition cost for Canadian healthcare providers"
    },
    {
      icon: GraduationCap,
      title: "Financial Services & Fintech in Canada",
      description: "Maximize customer acquisition for Canadian financial institutions and fintech companies with comprehensive digital marketing strategies.",
      services: [
        "Customer acquisition campaigns and lead generation for Canadian financial services",
        "Fintech marketing and digital banking promotion for Canadian clients",
        "Investment digital marketing and wealth management for Canadian market",
        "Insurance marketing and financial planning across Canadian provinces"
      ],
      results: "320% increase in qualified leads from Canadian financial market, 55% improvement in conversion rates for Canadian financial services"
    }
  ]

  const digitalMarketingFaqData = [
    {
      question: "Is digital marketing in demand in Canada?",
      answer: "Yes, digital marketing is in extremely high demand in Canada due to the continuous shift of businesses to online platforms. There's growing need for professionals with skills in SEO, content marketing, and social media management. The Canadian Job Bank forecasts significant opportunities for digital marketing specialists through 2031."
    },
    {
      question: "How much do digital marketers earn in Canada?",
      answer: "Digital marketing salaries in Canada vary significantly by experience and role: Entry-level: CAD $44,500 annually, Mid-level: CAD $76,000 annually, Senior-level: CAD $98,500 annually, Director/VP: CAD $142,000+ annually. Salaries vary by province, with higher wages typically in Toronto, Vancouver, and Calgary markets."
    },
    {
      question: "What's the typical digital marketing budget for Canadian businesses?",
      answer: "Canadian digital marketing budgets vary based on goals and market size. For comprehensive digital marketing including SEO, PPC, social media, and content, we recommend starting with CAD $2,500-5,000 monthly for small businesses and CAD $20,000+ monthly for enterprise campaigns. Our management fees typically range from 15-20% of total marketing spend, with transparent Canadian pricing structures."
    },
    {
      question: "Do you work with Canadian startups?",
      answer: "Absolutely! The Canadian startup ecosystem is a central focus area, including Toronto's fintech scene, Vancouver's tech initiatives, and various innovation hubs across Canada. We offer flexible engagement models for early-stage companies, including performance-based pricing and growth packages designed for Canadian startups, with knowledge of Canadian government grants and funding cycles."
    },
    {
      question: "What results can I expect from Canadian digital marketing?",
      answer: "We track comprehensive metrics across all channels including organic traffic growth from Canadian searches, cost-per-acquisition (CPA) for Canadian customers, return on ad spend (ROAS) in Canadian market, conversion rates for Canadian users, customer lifetime value (CLV) for Canadian clients, and attribution across all touchpoints. Monthly reports include Canadian business impact analysis and optimization recommendations."
    },
    {
      question: "Which digital marketing channels work best in Canada?",
      answer: "Our expertise covers comprehensive digital marketing including SEO Canada, Google Ads (Search, Display, Shopping, YouTube), Instagram & LinkedIn marketing, TikTok for Canadian audiences, content marketing, web design & development, and emerging platforms. Channel selection depends on your target audience behavior and business objectives in the Canadian market, with regional variations across different Canadian provinces."
    },
    {
      question: "Can you optimize existing digital marketing campaigns for the Canadian market?",
      answer: "Yes, we offer comprehensive Canadian digital marketing audit and optimization services for existing campaigns. Our 30-day Canadian digital marketing audit identifies optimization opportunities across all channels specifically for the Canadian market and provides actionable recommendations for immediate campaign performance improvement with Canadian audiences."
    },
    {
      question: "Do you offer digital marketing training for Canadian companies?",
      answer: "We offer comprehensive digital marketing training programs for Canadian companies, including SEO Canada, Google Ads certification guidance, Facebook Blueprint training, content marketing, and customized workshops for your marketing team. Training can be conducted at your Canadian office or virtually, with sessions adapted to Canadian market dynamics and business practices."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads Digital Marketing Agency Canada",
        "description": "Premier digital marketing agency in Canada specializing in SEO, PPC, social media marketing, and web development for Canadian businesses. 300% ROI growth.",
        "url": "https://frameleads.com/digital-marketing-in-canada",
        "telephone": "1-800-FRAMELEADS",
        "email": "canada@frameleads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Bay Street",
          "addressLocality": "Toronto",
          "addressRegion": "Ontario",
          "postalCode": "M5H 2Y2",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.6532,
          "longitude": -79.3832
        },
        "areaServed": ["Canada", "Toronto", "Vancouver", "Montreal", "Calgary", "Ontario", "British Columbia", "Quebec", "Alberta"],
        "serviceType": "Digital Marketing",
        "priceRange": "CAD $2,500 - $10,000",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "sameAs": [
          "https://linkedin.com/company/frameleads-canada",
          "https://twitter.com/frameleads"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": digitalMarketingFaqData.map(faq => ({
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
    <Head>
      <title>Best Digital Marketing Agency Canada | SEO, PPC & Social Media Services | Frameleads</title>
      <meta name="description" content="Leading digital marketing agency in Canada. Expert SEO, PPC, social media services in Toronto, Vancouver, Montreal, Calgary. Proven ROI for Canadian businesses. Get free audit." />
      <meta name="keywords" content="digital marketing canada, digital marketing agency canada, SEO canada, PPC canada, social media marketing canada, digital marketing toronto, digital marketing vancouver, digital marketing montreal, digital marketing calgary, marketing agency canada" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/digital-marketing-in-canada" />
      <meta property="og:title" content="Best Digital Marketing Agency Canada | SEO, PPC & Social Media Services | Frameleads" />
      <meta property="og:description" content="Leading digital marketing agency in Canada. Expert SEO, PPC, social media services in Toronto, Vancouver, Montreal, Calgary. Proven ROI for Canadian businesses. Get free audit." />
      <meta property="og:url" content="https://frameleads.com/digital-marketing-in-canada" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Digital Marketing Agency Canada | SEO, PPC & Social Media Services | Frameleads" />
      <meta name="twitter:description" content="Leading digital marketing agency in Canada. Expert SEO, PPC, social media services in Toronto, Vancouver, Montreal, Calgary. Proven ROI for Canadian businesses. Get free audit." />
    </Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
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
                🏆 #1 Digital Marketing Agency in Canada
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Premier Digital Marketing Agency in Canada - ROI-Driven Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Canadian Businesses
              </span>{" "}
              Delivering 300% ROI Growth
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your Canadian business with data-driven digital marketing excellence. Our specialized agency combines international expertise with deep local Canadian market knowledge, delivering measurable results for startups, SMEs, and enterprises across Toronto, Vancouver, Montreal, Calgary, and all provinces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your Free Canadian Market Audit
                </Button>
              </Link>
              <Link href="tel:1-800-FRAMELEADS" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call 1-800-FRAMELEADS
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>300% Average ROI Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>500+ Canadian Businesses Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>95% Client Retention Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>5+ Years Serving Canadian Businesses</span>
              </div>
            </div>

            {/* Review Rating Component */}
            <div className="mb-8">
              <ReviewRating className="max-w-4xl mx-auto" />
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 500+ Canadian Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">800+</div>
                  <div className="text-gray-600 text-sm">Successful Canadian Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">CAD $50M+</div>
                  <div className="text-gray-600 text-sm">Advertising Budget Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">90%</div>
                  <div className="text-gray-600 text-sm">Average Conversion Rate Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">45%</div>
                  <div className="text-gray-600 text-sm">Customer Acquisition Cost Reduction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results Across Canada</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable growth for businesses across Canada's dynamic digital landscape</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">300%</div>
                <div className="text-gray-600 text-sm">Average ROI Growth</div>
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
                <div className="text-gray-600 text-sm">Canadian Clients Served</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">10</div>
                <div className="text-gray-600 text-sm">Canadian Provinces Covered</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">95%</div>
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

      {/* Why Choose Us Section */}
      <section className="relative py-20" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Frameleads for Digital Marketing in Canada?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as Canada's premier international digital marketing agency, combining deep Canadian market knowledge with cutting-edge digital marketing expertise. Our comprehensive approach ensures that every dollar of your marketing budget delivers maximum return on investment across all digital channels in the Canadian market.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Digital Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Advanced Analytics & Attribution: Multi-touch attribution modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">ROI-Focused Campaign Management: Measurable business results</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Canadian Market Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Local Market Intelligence: 5+ years serving Canada's diverse business landscape</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Expertise: Canadian SaaS, e-commerce, professional services, healthcare, fintech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cultural Sensitivity: Deep understanding of Canada's multicultural business environment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Regional Targeting Excellence: Hyper-local targeting for all Canadian provinces</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time marketing analytics and insights</p>
                </div>
              </div>
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
              Comprehensive Digital Marketing Services for Canadian Market Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive digital marketing services are designed to deliver measurable ROI and drive business growth for Canadian companies across all industries throughout Canada.
            </p>
          </div>

          <div className="space-y-12">
            {digitalMarketingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF6B35]/25"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </motion.div>
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Australian Digital Marketing Pricing */}
      <section className="relative py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Canadian Digital Marketing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing packages designed for Canadian businesses of all sizes. All packages include applicable taxes and are priced in Canadian Dollars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">CAD $2,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small Canadian businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Local SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Google Ads management (CAD $2,000 ad spend included)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Social media management (2 platforms)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly reporting and consultation</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Canadian business hours support</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
              </CardContent>
            </Card>

            {/* Growth Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-[#FF6B35]/50 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/30 ring-2 ring-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Most Popular</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">CAD $5,000</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for expanding Canadian companies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Comprehensive SEO strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-platform PPC management (CAD $5,000 ad spend included)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full social media marketing</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Content marketing and creation</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated Canadian account manager</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">CAD $10,000+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large Canadian organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom digital marketing strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced analytics and attribution</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-location campaign management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Priority support and consultation</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Quarterly business reviews</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">*All packages include applicable taxes and are priced in Canadian Dollars</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Canadian Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic digital marketing approach specifically designed for Canadian companies, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalMarketingProcess.map((process, index) => (
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
                <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div 
                      className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {process.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
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

      {/* Industries We Serve */}
      <section className="relative py-20" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Expertise Across Canadian Market Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries in Canada, with deep understanding of unique digital marketing needs and business objectives in each sector throughout the Canadian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 relative z-10">
                      <motion.div 
                        className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Marketing Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Canadian Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped Canadian companies achieve remarkable growth through strategic digital marketing campaigns across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {digitalMarketingCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Canadian Cities We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital marketing services across all major Canadian cities, helping companies in each region maximize their digital presence and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {canadianBusinessMarkets.map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <MapPin className="h-6 w-6 text-[#FF6B35] group-hover:text-[#FF8A50] transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">{district.category}</h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions - Digital Marketing in Canada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about digital marketing services in Canada and how Frameleads can help your business achieve measurable results across Canada.
            </p>
          </div>

          <div className="space-y-6">
            {digitalMarketingFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Digital Presence in Canada?"
        description="Partner with Frameleads, Canada's most trusted international digital marketing agency. Get your free audit and discover how we can help you achieve measurable ROI and business growth in Canada's competitive market."
        primaryButtonText="Get Your Free Canadian Market Audit"
        secondaryButtonText="Schedule Your Strategic Canadian Call"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Canadian Digital Marketing Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As Canada's premier international digital marketing agency, we offer comprehensive services across all digital channels. 
              Explore our specialized services designed specifically for Canada's diverse business landscape.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* SEO Services in Saudi Arabia */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">SEO Services Canada</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate search results with our comprehensive SEO strategies adapted for Canadian businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Local SEO optimization for Canadian provinces</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Bilingual SEO & technical optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Content optimization & link building</span>
                  </div>
                </div>
                <Link href="/seo-services" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore SEO Services
                </Link>
              </CardContent>
            </Card>

            {/* Creative Advertising in Saudi Arabia */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Creative Advertising Canada</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Captivate your Canadian audience with innovative creative campaigns that drive engagement and conversions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand identity & visual design</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Video production & animation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Social media creative campaigns</span>
                  </div>
                </div>
                <Link href="/creative-advertising-company-in-bangalore" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Creative Services
                </Link>
              </CardContent>
            </Card>

            {/* B2B Marketing in Saudi Arabia */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">B2B Marketing Canada</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Accelerate enterprise sales with targeted B2B marketing strategies for Canada's corporate ecosystem.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">LinkedIn marketing & lead generation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Account-based marketing (ABM)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Sales enablement & CRM integration</span>
                  </div>
                </div>
                <Link href="/b2b-marketing-company-in-bangalore" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore B2B Services
                </Link>
              </CardContent>
            </Card>

            {/* Real Estate Marketing in Saudi Arabia */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Real Estate Marketing Canada</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Connect with property buyers through targeted digital marketing campaigns for Canada's real estate market.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Property listing optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Virtual tour integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Lead nurturing automation</span>
                  </div>
                </div>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Real Estate Services
                </Link>
              </CardContent>
            </Card>

            {/* Core Digital Marketing Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Core Digital Marketing</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive digital marketing services covering all channels for maximum ROI and business growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">SEO & Content Marketing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">PPC & Social Media Ads</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Web Design & Development</span>
                  </div>
                </div>
                <Link href="/digital-marketing-services" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore All Services
                </Link>
              </CardContent>
            </Card>

            {/* International Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">International Marketing</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Expand your business globally with our international digital marketing expertise and local market knowledge.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Digital Marketing in United States</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Multi-market campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Cultural adaptation strategies</span>
                  </div>
                </div>
                <Link href="/digital-marketing-in-unitedstates" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Global Services
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources & Tools */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <Link href="/contact" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Canadian Market Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current digital marketing performance in the Canadian market</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your digital marketing ROI and optimize your budget allocation for Canadian campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Digital Marketing Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to digital marketing strategies and best practices for Canadian businesses</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn digital marketing with our expert-led courses and training programs for the Canadian market</p>
                </Link>
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
