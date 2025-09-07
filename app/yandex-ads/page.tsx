'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, Search, ShoppingBag, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function YandexAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const yandexAdsServices = [
    {
      category: "Yandex Direct Management",
      areas: ["Russian Keyword Research", "Yandex Direct Campaign Setup", "Bid Management", "Conversion Tracking", "Performance Optimization", "Budget Allocation"],
      description: "Complete Yandex Direct campaign management for Russian market expansion, featuring advanced keyword research, strategic bidding, and continuous optimization for maximum ROI in Russia's largest search engine"
    },
    {
      category: "Yandex Contextual Advertising", 
      areas: ["Contextual Campaign Setup", "Audience Targeting", "Ad Placement Optimization", "Creative Development", "Performance Monitoring", "ROI Optimization"],
      description: "Strategic Yandex contextual advertising campaigns that reach Russian audiences across the Yandex advertising network, maximizing brand visibility and engagement through targeted ad placements"
    },
    {
      category: "Russian Market Localization",
      areas: ["Russian Language Copywriting", "Cultural Adaptation", "Local Market Research", "Regulatory Compliance", "Regional Targeting", "Cultural Sensitivity"],
      description: "Complete campaign localization services including Russian language copywriting, cultural adaptation, local market research, and compliance with Russian advertising regulations for authentic market presence"
    },
    {
      category: "CIS Market Expansion",
      areas: ["Multi-Country Campaigns", "Kazakhstan Advertising", "Belarus Marketing", "Regional Strategy", "Cross-Border Optimization", "Local Compliance"],
      description: "Comprehensive CIS market advertising strategies covering Russia, Kazakhstan, Belarus, and other Commonwealth of Independent States, with localized approaches for each market"
    },
    {
      category: "Yandex Metrica Analytics",
      areas: ["Yandex Metrica Integration", "Real-Time Dashboards", "ROI Tracking", "Audience Analysis", "Performance Benchmarking", "Conversion Analysis"],
      description: "Advanced Yandex Metrica analytics and reporting services providing deep insights into Russian market performance, audience behavior, and ROI optimization with detailed performance tracking"
    },
    {
      category: "International Yandex Setup",
      areas: ["Business Verification", "Documentation Assistance", "Account Structure", "Compliance Management", "International Setup", "Ongoing Support"],
      description: "Complete Yandex advertising account setup for international businesses, including business verification, documentation assistance, account structure optimization, and ongoing compliance management"
    }
  ]

  const yandexAdsServicesList = [
    {
      icon: Target,
      title: "Complete Yandex Ads Management Services",
      description: "Our comprehensive Yandex advertising services cover every aspect of Russian market marketing campaigns from strategic planning to cultural localization and advanced optimization for maximum ROI in Russia's largest search engine.",
      features: [
        "Strategic Campaign Planning: Custom Yandex marketing strategy development and Russian market research",
        "Multi-Platform Management: Yandex Direct, Contextual Advertising, and Display campaigns",
        "Advanced Targeting & Optimization: Demographic, behavioral, and location-based targeting for Russian consumers",
        "A/B Testing: Multiple creative variations for optimal performance across all Yandex advertising platforms",
        "Real-time Optimization: Continuous campaign monitoring and improvement with Yandex Metrica insights"
      ],
      results: [
        "45% lower cost-per-click (CPC)",
        "280% increase in Russian market leads",
        "70% improvement in campaign ROAS"
      ]
    },
    {
      icon: Search,
      title: "Yandex Direct Management",
      description: "Transform your Yandex Direct performance with specialized Russian market advertising strategies including keyword optimization, Russian ad copy creation, and mobile-first campaign management.",
      features: [
        "Keyword Research: Advanced Russian keyword research and optimization using Yandex tools",
        "Russian Ad Copy: Native Russian language copywriting and cultural adaptation",
        "Mobile-First Campaigns: Optimized for Russia's 85% mobile search usage",
        "Conversion Tracking: Complete Yandex Metrica integration and conversion measurement",
        "Quality Score Improvement: Strategic optimization for better ad positioning and lower costs"
      ],
      results: [
        "320% increase in qualified Russian traffic",
        "190% improvement in conversion rates",
        "220% increase in Yandex-driven sales"
      ]
    },
    {
      icon: Crown,
      title: "Yandex Contextual Advertising",
      description: "Leverage the power of Yandex contextual advertising with strategic ad placements across the Yandex advertising network, maximizing brand visibility and engagement in the Russian market.",
      features: [
        "Contextual Campaign Setup: Strategic ad placement across Yandex partner sites",
        "Audience Targeting: Advanced demographic and behavioral targeting for Russian audiences",
        "Ad Placement Optimization: Premium positioning on high-traffic Russian websites",
        "Creative Development: Culturally adapted ad creatives for Russian market appeal",
        "Performance Monitoring: Real-time tracking and optimization for maximum ROI"
      ],
      results: [
        "350% increase in brand awareness",
        "160% improvement in brand trust metrics",
        "80% increase in contextual ad performance"
      ]
    },
    {
      icon: Smartphone,
      title: "Russian Market Mobile Advertising",
      description: "Comprehensive mobile advertising campaigns optimized for Russia's mobile-first environment, featuring click-to-call functionality, app promotion, and location-based targeting.",
      features: [
        "Mobile-Responsive Ads: Optimized ad formats for mobile devices and apps",
        "Click-to-Call Campaigns: Direct phone call functionality for immediate engagement",
        "App Download Promotion: Strategic app promotion and download optimization",
        "Location-Based Targeting: Precise geographic targeting for Russian cities and regions",
        "Mobile Conversion Optimization: Streamlined mobile user experience and conversion paths"
      ],
      results: [
        "300% increase in mobile engagement",
        "170% improvement in mobile conversion rates",
        "90% increase in app downloads"
      ]
    },
    {
      icon: Globe,
      title: "Russian Market Localization",
      description: "Complete campaign localization services including Russian language copywriting, cultural adaptation, local market research, and compliance with Russian advertising regulations.",
      features: [
        "Russian Copywriting: Native Russian language ad copy and content creation",
        "Cultural Adaptation: Culturally sensitive messaging and creative strategies",
        "Local Market Research: Deep understanding of Russian consumer behavior and preferences",
        "Regulatory Compliance: Full compliance with Russian advertising regulations and guidelines",
        "Regional Targeting: Precise targeting for different Russian regions and demographics"
      ],
      results: [
        "260% increase in cultural relevance",
        "180% improvement in local market engagement",
        "95% increase in regulatory compliance"
      ]
    },
    {
      icon: BarChart3,
      title: "Yandex Metrica Analytics & Reporting",
      description: "Comprehensive Yandex Metrica analytics and reporting services that provide insights into campaign performance, audience behavior, and ROI optimization with detailed performance tracking.",
      features: [
        "Real-Time Dashboards: Live performance monitoring and campaign insights",
        "Yandex Metrica Integration: Complete integration with Yandex's analytics platform",
        "ROI Tracking: Detailed return on investment analysis and optimization",
        "Audience Analysis: Deep-dive into Russian consumer behavior and preferences",
        "Competitive Benchmarking: Performance comparison with industry standards"
      ],
      results: [
        "Complete visibility into Russian market performance",
        "Data-driven optimization decisions",
        "Measurable ROI improvements and strategic insights"
      ]
    }
  ]

  const yandexAdsProcess = [
    {
      step: "01",
      title: "Russian Market Analysis & Yandex Account Setup",
      description: "Comprehensive evaluation of your Russian market potential, including competitor research on Yandex, audience assessment, regulatory compliance review, and Yandex account setup with proper business verification and documentation assistance."
    },
    {
      step: "02",
      title: "Custom Yandex Advertising Strategy",
      description: "Tailored Yandex campaign strategy development with goal setting, campaign type recommendations (Yandex Direct, Contextual Advertising), budget allocation, keyword research using Yandex tools, and localization planning based on Russian market analysis."
    },
    {
      step: "03",
      title: "Campaign Launch & Localization",
      description: "Professional campaign execution with Yandex account optimization, Yandex Direct setup, audience targeting configuration, Russian ad copy creation, and tracking implementation for maximum Russian market performance."
    },
    {
      step: "04",
      title: "Continuous Optimization & Monitoring",
      description: "Ongoing campaign optimization through daily monitoring, weekly performance adjustments, monthly reporting, quarterly strategy reviews, and A/B testing for sustained performance improvement and ROI maximization."
    },
    {
      step: "05",
      title: "Performance Analysis & Scaling",
      description: "Comprehensive performance reporting with ROI analysis, Yandex Metrica insights, audience behavior analysis, conversion tracking, and strategic planning for campaign scaling and CIS market expansion."
    },
    {
      step: "06",
      title: "Advanced Strategy Implementation",
      description: "Dynamic content optimization, seasonal campaign development, contextual advertising implementation, mobile optimization, and Yandex trends analysis for sustained growth and competitive advantage in Russian market."
    }
  ]

  const whyChooseYandexAds = [
    "Proven Results: Our clients see average 45% lower cost-per-click and 280% increase in Russian market leads",
    "Expert Team: Certified Yandex advertising specialists with 5+ years experience managing $3M+ in Russian market ad spend",
    "Cost-Effective: Starting from $2,000/month with 70% improvement in campaign ROAS and 190% improvement in conversion rates",
    "Full-Service: Complete Yandex advertising strategy, Yandex Direct management, contextual advertising optimization, and Russian market localization",
    "Russian Market Specialization: Deep expertise in Yandex platform, Russian consumer behavior, and CIS market dynamics",
    "Multi-Platform Expertise: Yandex Direct, Contextual Advertising, Mobile Advertising, and Display campaigns across all formats",
    "Data-Driven Approach: Advanced Yandex Metrica analytics, conversion tracking, and ROI optimization with real-time performance monitoring",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing and performance guarantees"
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Specialized Yandex advertising management for online stores targeting Russian consumers, including shopping campaigns, product promotion, and seasonal strategy development.",
      services: [
        "Yandex Direct campaigns",
        "Contextual advertising",
        "Mobile-first optimization",
        "Russian market localization"
      ],
      results: "200% increase in product discovery, 70% improvement in campaign ROAS"
    },
    {
      icon: Building2,
      title: "Technology & SaaS",
      description: "Yandex marketing strategies for B2B technology companies targeting Russian businesses, emphasizing thought leadership content and professional targeting.",
      services: [
        "B2B keyword targeting",
        "Professional audience campaigns",
        "Lead generation optimization",
        "Technical content marketing"
      ],
      results: "240% increase in qualified leads, 50% improvement in cost-per-acquisition"
    },
    {
      icon: Heart,
      title: "Consumer Brands",
      description: "Yandex advertising campaigns designed for consumer brands leveraging Russia's mobile-first environment and social commerce integration.",
      services: [
        "Brand awareness campaigns",
        "Mobile advertising optimization",
        "Social commerce integration",
        "Cultural adaptation"
      ],
      results: "170% increase in brand awareness, 75% improvement in engagement rates"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Comprehensive Yandex marketing for professional service firms with expertise in B2B targeting and professional audience development in Russia.",
      services: [
        "Professional audience targeting",
        "Lead generation campaigns",
        "Thought leadership content",
        "B2B conversion optimization"
      ],
      results: "210% increase in qualified inquiries, 60% improvement in lead quality"
    },
    {
      icon: Settings,
      title: "Manufacturing & Industrial",
      description: "Specialized Yandex advertising for manufacturing companies targeting Russian suppliers, distributors, and B2B buyers.",
      services: [
        "Industrial keyword targeting",
        "B2B lead generation",
        "Supplier relationship campaigns",
        "Technical product promotion"
      ],
      results: "180% increase in business inquiries, 45% improvement in sales qualified leads"
    },
    {
      icon: Activity,
      title: "Healthcare & Wellness",
      description: "Compliant Yandex advertising management with expertise in healthcare content guidelines and wellness audience targeting within Russian regulations.",
      services: [
        "Compliant advertising strategies",
        "Health-conscious targeting",
        "Wellness content campaigns",
        "Regulatory compliance"
      ],
      results: "90% increase in patient inquiries, 55% improvement in appointment bookings"
    }
  ]

  const yandexAdsCaseStudies = [
    {
      industry: "Global Technology Company",
      location: "Russian Market",
      challenge: "International SaaS company needed to enter Russian market with limited brand recognition and no local presence",
      solution: "Implemented comprehensive Yandex Direct campaigns with contextual advertising, Russian localization, and mobile optimization for Russian market penetration",
      results: [
        "260% increase in Russian market leads",
        "70% improvement in cost-per-acquisition",
        "200% growth in brand awareness",
        "340% increase in qualified inquiries"
      ]
    },
    {
      industry: "E-commerce Fashion Brand",
      location: "Russian Market",
      challenge: "Western fashion retailer struggling with Russian market entry, cultural adaptation, and mobile-first consumer behavior",
      solution: "Restructured Yandex campaigns with localized creative, mobile-first approach, seasonal targeting strategies, and cultural adaptation",
      results: [
        "350% increase in online sales",
        "50% improvement in conversion rates",
        "210% growth in mobile traffic",
        "170% increase in brand engagement"
      ]
    },
    {
      industry: "B2B Manufacturing Company",
      location: "Russian Market",
      challenge: "Industrial equipment manufacturer needed qualified Russian distributor leads and B2B market penetration",
      solution: "Implemented targeted Yandex advertising strategy with B2B keyword focus, industry-specific landing pages, and lead nurturing campaigns",
      results: [
        "300% increase in qualified inquiries",
        "60% improvement in lead quality",
        "170% growth in partnership opportunities",
        "90% increase in distributor applications"
      ]
    }
  ]

  const yandexAdsFaqData = [
    {
      question: "How much does Yandex advertising cost?",
      answer: "Yandex advertising management costs typically range from $2,000-$6,000+ per month, depending on your ad spend and campaign complexity. Yandex ad spend can be significantly lower than Google Ads due to less international competition, with CPCs often 40-60% lower than comparable Western markets."
    },
    {
      question: "Do I need a Russian business license for Yandex ads?",
      answer: "Yes, Yandex requires business verification including Russian business documentation or international business credentials. We assist with the entire Yandex account setup process, including documentation guidance and verification support for international businesses."
    },
    {
      question: "How long does it take to see Yandex advertising results?",
      answer: "Yandex advertising results typically follow this timeline: Week 1-2 for account setup and verification, Week 3-4 for campaign launch and initial data collection, Month 2 for optimization and audience refinement, Month 3+ for sustained performance improvements. Most clients see 30-40% performance improvement within 60 days."
    },
    {
      question: "What's the difference between Yandex ads and Google Ads?",
      answer: "Yandex advertising targets Russia's 60% search market share with 100M+ users, while Google has limited presence in Russia. Yandex requires Russian language content, cultural localization, and compliance with Russian regulations. Yandex also offers unique formats like contextual advertising across their partner network."
    },
    {
      question: "Can international companies advertise on Yandex?",
      answer: "Yes, international companies can advertise on Yandex with proper documentation and verification. We provide complete Yandex advertising setup services including business verification, account structure optimization, Russian market localization, and ongoing compliance management for global businesses."
    },
    {
      question: "What industries work best for Yandex advertising?",
      answer: "Our Yandex marketing expertise covers e-commerce, technology, manufacturing, professional services, consumer brands, and healthcare sectors. We adapt strategies to industry-specific Russian market dynamics, cultural preferences, and regulatory requirements for optimal performance."
    },
    {
      question: "How do you measure Yandex advertising success?",
      answer: "We track comprehensive metrics including impressions, clicks, conversion rates, cost-per-click, return on ad spend (ROAS), and customer lifetime value through Yandex Metrica integration. Our monthly reports include detailed performance analysis, audience insights, and strategic recommendations for continuous improvement."
    },
    {
      question: "Do you provide Yandex advertising training?",
      answer: "Yes, we offer Yandex advertising training and consultation services including platform education, best practices workshops, account management training, and ongoing strategic guidance to help your team understand Russian market advertising dynamics."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Yandex Ads Management Services",
        "description": "Professional Yandex advertising and search engine marketing services for businesses targeting the Russian market. Expert Yandex ads management, Yandex Direct optimization, contextual advertising, and ROI-focused Russian market marketing strategies.",
        "url": "https://frameleads.com/yandex-ads",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/yandex-ads-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Marketing Blvd",
            "addressLocality": "Marketing City",
            "addressRegion": "MC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "russian-marketing@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Yandex Advertising Management",
        "areaServed": ["Russia", "Kazakhstan", "Belarus", "Turkey"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$2000-$6000",
          "description": "Professional Yandex ads management services with transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Yandex Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Yandex Direct Management",
                "description": "Complete Yandex Direct campaign management and optimization for Russian market penetration"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Yandex Contextual Advertising",
                "description": "Strategic Yandex contextual advertising campaigns for maximum brand awareness"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Russian Market Localization",
                "description": "Complete campaign localization and cultural adaptation for Russian market success"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": yandexAdsFaqData.map(faq => ({
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
      <title>Expert Yandex Ads Management | Russian Market Search Marketing</title>
      <meta name="description" content="Professional Yandex advertising services for international businesses. Certified Yandex specialists delivering 45% lower CPC & proven ROI in Russia's largest search engine." />
      <meta name="keywords" content="yandex ads, yandex advertising, yandex direct, yandex marketing agency, yandex ppc, yandex search ads, yandex advertising agency, yandex ad optimization, yandex campaign management, russian market advertising, yandex contextual advertising" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/yandex-ads" />
      <meta property="og:title" content="Expert Yandex Ads Management | Russian Market Search Marketing" />
      <meta property="og:description" content="Professional Yandex advertising services for international businesses. Certified Yandex specialists delivering 45% lower CPC & proven ROI in Russia's largest search engine." />
      <meta property="og:url" content="https://frameleads.com/yandex-ads" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert Yandex Ads Management | Russian Market Search Marketing" />
      <meta name="twitter:description" content="Professional Yandex advertising services for international businesses. Certified Yandex specialists delivering 45% lower CPC & proven ROI in Russia's largest search engine." />
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
                🚀 Yandex Advertising Experts - 45% Lower CPC Guaranteed
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Expert Yandex Ads Management Services |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Dominate Russia's Search Market
              </span>{" "}
              Through Yandex Direct, Contextual Ads & Mobile Optimization
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Trusted by 250+ international businesses to maximize their Yandex advertising ROI through Yandex Direct campaigns, contextual advertising, and Russian market optimization strategies. Achieve 45% lower cost-per-click with our proven Yandex advertising solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Russian Market Analysis - Start Today
                </Button>
              </Link>
              <Link href="tel:+1-800-FRAMELEADS" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +1-800-FRAMELEADS
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Proven Results: 45% Lower CPC Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Certified Yandex Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Cost-Effective: Starting $2,000/month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ No Long-Term Contracts</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 250+ International Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">45%</div>
                  <div className="text-gray-600 text-sm">Lower Cost-Per-Click</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">280%</div>
                  <div className="text-gray-600 text-sm">Increase in Russian Market Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">70%</div>
                  <div className="text-gray-600 text-sm">Improvement in ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">190%</div>
                  <div className="text-gray-600 text-sm">Improvement in Conversion Rates</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Yandex Advertising Results Across Russian Market</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven Yandex advertising approach delivers measurable growth for international businesses through Yandex Direct campaigns, contextual advertising, and Russian market optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">45%</div>
                <div className="text-gray-600 text-sm">Lower Cost-Per-Click</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">280%</div>
                <div className="text-gray-600 text-sm">Increase in Russian Market Leads</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">70%</div>
                <div className="text-gray-600 text-sm">Improvement in ROAS</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">190%</div>
                <div className="text-gray-600 text-sm">Improvement in Conversion Rates</div>
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
                Why Choose Frameleads for Yandex Advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier international Yandex advertising agency, combining certified Yandex specialist status with cutting-edge Russian market expertise. Our comprehensive approach ensures that every dollar of your advertising budget delivers maximum return on investment through Yandex Direct campaigns, contextual advertising, and Russian market localization strategies.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Yandex Advertising Platform Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 45% lower cost-per-click and 280% increase in Russian market leads for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Certified Yandex specialists with 5+ years experience managing $3M+ in Russian market ad spend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Multi-Platform Expertise: Yandex Direct, Contextual Advertising, Mobile Advertising, and Display campaigns across all formats</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Russian Market Specialization: Deep expertise in Yandex platform, Russian consumer behavior, and CIS market dynamics</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Yandex Advertising Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cost-Effective: Starting from $2,000/month with 70% improvement in campaign ROAS and 190% improvement in conversion rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Marketing: E-commerce, technology, manufacturing, professional services, consumer brands, and healthcare</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Data-Driven Approach: Advanced Yandex Metrica analytics, conversion tracking, and ROI optimization with real-time performance monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">No Long-Term Contracts: Month-to-month flexibility with transparent pricing and performance guarantees</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yandex Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time Yandex advertising analytics and Russian market performance insights</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify vs Competitors Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Yandex for Russian Market Advertising?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why <strong>Yandex advertising</strong> outperforms other search platforms in Russia through massive market reach, cultural relevance, and mobile-first optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Baidu vs Other Platforms */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yandex vs Google Ads: Russian Market Advantage</h3>
                <p className="text-gray-600 mb-6">
                  While <strong>Google has limited presence in Russia</strong>, <strong>Yandex dominates with 60% market share</strong>, providing unparalleled access to Russian consumers. Our analysis shows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">60% search market share with 100M+ active users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Native Russian language and cultural understanding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Mobile-first optimization with 85% mobile revenue</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Unique contextual advertising across partner network</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Baidu Advertising Features */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yandex's Advanced Advertising Features</h3>
                <p className="text-gray-600 mb-6">
                  Yandex provides comprehensive advertising tools that make Russian market penetration efficient and effective for international businesses:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Contextual advertising across extensive partner network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Mobile-first campaign optimization and click-to-call</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Advanced Russian language keyword research tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Yandex Metrica integration for comprehensive analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Marketing Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Yandex Advertising Services for Maximum ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Yandex advertising services are designed to deliver Russian market success and drive business growth for international companies through Yandex Direct campaigns, contextual advertising, and cultural localization strategies.
            </p>
          </div>

          <div className="space-y-12">
            {yandexAdsServicesList.map((service, index) => {
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
              Transparent Yandex Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Yandex advertising packages designed for international businesses targeting the Russian market. All packages include Yandex account setup, Yandex Direct management, and Russian market localization services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Yandex Ads Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,000</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses and Russian market testing</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Yandex account setup and verification</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>1-2 Yandex Direct campaigns</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic Russian keyword research (100 keywords)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Email support</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Yandex Advertising Solution</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$3,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for scaling businesses and growing Russian market presence</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced campaign management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Contextual advertising setup</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Comprehensive Russian keyword research (500+ keywords)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Bi-weekly optimization calls</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Yandex Advertising</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$6,000+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large organizations and high-volume Russian market operations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Growth package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full-funnel Russian market strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Unlimited ad spend management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom dashboard and analytics</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Daily optimization and monitoring</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">*All packages include Yandex Business account setup, Yandex Direct implementation, and ongoing optimization services</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored Yandex marketing solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Yandex Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic Yandex advertising approach combining strategic planning, cultural localization, and continuous optimization to deliver measurable results through Yandex Direct campaigns, contextual advertising, and Russian market optimization strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yandexAdsProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Yandex Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique Yandex advertising needs and Russian market dynamics in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Yandex Advertising Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped international companies achieve remarkable growth through strategic Yandex advertising campaigns, Yandex Direct optimization, and Russian market penetration strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {yandexAdsCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Yandex Advertising Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Yandex advertising services across Yandex Direct campaigns, contextual advertising, mobile optimization, and cultural localization, helping international businesses maximize their Russian market presence and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yandexAdsServices.map((service, index) => (
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">{service.category}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.areas.map((area, idx) => (
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
              Frequently Asked Questions About Yandex Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Yandex advertising management services and how Frameleads can help your business achieve measurable results through Yandex Direct campaigns, contextual advertising, and Russian market optimization.
            </p>
          </div>

          <div className="space-y-6">
            {yandexAdsFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Russian Market Presence with Expert Yandex Advertising?"
        description="Partner with Frameleads, the most trusted international Yandex advertising management agency. Get your free Russian market analysis and discover how we can help you achieve measurable ROI and business growth through Yandex Direct campaigns, contextual advertising, and cultural localization."
        primaryButtonText="Start Your Yandex Campaign Today - Free Strategy Session"
        secondaryButtonText="Get Your Free Russian Market Analysis"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Yandex Advertising Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>international Yandex advertising management agency</strong>, we offer comprehensive services across <strong>Yandex Direct</strong>, <strong>Contextual Advertising</strong>, <strong>Mobile Advertising</strong>, and <strong>Russian Market Localization</strong>. 
              Explore our specialized services designed specifically for Russian market success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Yandex Direct */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Yandex Direct</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate Yandex search results with expertly crafted Yandex Direct campaigns that target high-intent Russian keywords and drive qualified traffic to your business.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Russian keyword research</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Yandex Direct campaign management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Mobile-first optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Yandex Direct
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Contextual Advertising */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Yandex Contextual Advertising</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Maximize brand awareness and trust through strategic Yandex contextual advertising campaigns that reach Russian audiences across the partner network.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Strategic ad placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Partner network reach</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Audience targeting</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Contextual Ads
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Mobile Advertising */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Yandex Mobile Advertising</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Maximize your Russian market reach with mobile-first Yandex advertising campaigns optimized for Russia's 85% mobile search usage.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Mobile-responsive ads</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Click-to-call campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">App download promotion</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Mobile Ads
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Metrica Analytics & Reporting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Yandex Metrica Analytics & Reporting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive Yandex Metrica analytics and reporting services that provide insights into Russian market performance, audience behavior, and ROI optimization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Yandex Metrica integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Russian market insights</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">ROI optimization insights</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Analytics
                </Link>
              </CardContent>
            </Card>

            {/* Russian Market Localization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Russian Market Localization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Complete campaign localization services including Russian copywriting, cultural adaptation, and regulatory compliance for authentic Russian market presence.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Russian copywriting</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Cultural adaptation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Regulatory compliance</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Localization
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Account Setup */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Yandex Account Setup</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Complete Yandex advertising account setup including business verification, documentation assistance, and ongoing compliance management for international businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Business verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Documentation assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Compliance management</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Account Setup
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources & Tools */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <Link href="/free-marketing-audit" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Russian Market Analysis</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current Russian market potential and Yandex advertising opportunities</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Yandex Ads ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your Yandex advertising ROI and optimize your budget allocation for Russian market campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Yandex Advertising Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to Yandex advertising strategies and best practices for Russian market success</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn Yandex advertising with our expert-led courses and training programs for Russian market marketing</p>
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
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </Link>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🛒
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
    </>
  )
}
