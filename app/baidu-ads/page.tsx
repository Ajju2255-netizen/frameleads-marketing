'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, Search, ShoppingBag, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import ReviewRating from "../components/review-rating"

export default function BaiduAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const baiduAdsServices = [
    {
      category: "Baidu Search Ads Management",
      areas: ["Keyword Research & Optimization", "Chinese Ad Copy Creation", "Mobile-First Campaigns", "Conversion Tracking Setup", "Quality Score Improvement", "Bid Management"],
      description: "Strategic Baidu search campaigns optimized for high-intent keywords, featuring advanced keyword research, responsive ad formats, and continuous performance optimization targeting China's massive search audience"
    },
    {
      category: "Baidu Brand Zone Advertising",
      areas: ["Premium Brand Positioning", "Visual Advertising Formats", "Brand Trust Enhancement", "SERP Control", "High-Impact Campaigns", "Brand Awareness"],
      description: "Premium brand zone campaigns that dominate Baidu search results with immersive brand experiences, video content, and complete SERP control for maximum brand awareness and trust building"
    },
    {
      category: "Baidu Mobile Advertising",
      areas: ["Mobile-Responsive Ads", "Click-to-Call Campaigns", "App Download Promotion", "Location-Based Targeting", "Mobile Conversion Optimization", "Mobile-First Strategy"],
      description: "Comprehensive mobile advertising campaigns optimized for China's mobile-first environment, featuring click-to-call functionality, app promotion, and location-based targeting for maximum mobile engagement"
    },
    {
      category: "Baidu Campaign Localization",
      areas: ["Chinese Copywriting", "Cultural Adaptation", "Local Market Research", "Regulatory Compliance", "Regional Targeting", "Cultural Sensitivity"],
      description: "Complete campaign localization services including Simplified Chinese copywriting, cultural adaptation, local market research, and compliance with Chinese advertising regulations for authentic market presence"
    },
    {
      category: "Baidu Analytics & Reporting",
      areas: ["Real-Time Dashboards", "Baidu Tongji Integration", "ROI Tracking", "Audience Analysis", "Performance Benchmarking", "Competitive Analysis"],
      description: "Comprehensive Baidu analytics and reporting services that provide insights into campaign performance, audience behavior, and ROI optimization with detailed performance tracking through Baidu Tongji integration"
    },
    {
      category: "Baidu Account Setup & Optimization",
      areas: ["Business Verification", "Documentation Assistance", "Account Structure", "Compliance Management", "International Setup", "Ongoing Support"],
      description: "Complete Baidu advertising account setup including business verification, documentation assistance, account structure optimization, and ongoing compliance management for international businesses"
    }
  ]

  const baiduAdsServicesList = [
    {
      icon: Target,
      title: "Complete Baidu Ads Management Services",
      description: "Our comprehensive Baidu advertising services cover every aspect of China market marketing campaigns from strategic planning to cultural localization and advanced optimization for maximum ROI in China's largest search engine.",
      features: [
        "Strategic Campaign Planning: Custom Baidu marketing strategy development and China market research",
        "Multi-Platform Management: Baidu Search Ads, Brand Zone, Mobile Advertising, and Display campaigns",
        "Advanced Targeting & Optimization: Demographic, behavioral, and location-based targeting for Chinese consumers",
        "A/B Testing: Multiple creative variations for optimal performance across all Baidu advertising platforms",
        "Real-time Optimization: Continuous campaign monitoring and improvement with Baidu analytics insights"
      ],
      results: [
        "40% lower cost-per-click (CPC)",
        "250% increase in China market leads",
        "65% improvement in campaign ROAS"
      ]
    },
    {
      icon: Search,
      title: "Baidu Search Ads Management",
      description: "Transform your Baidu search ads performance with specialized China market advertising strategies including keyword optimization, Chinese ad copy creation, and mobile-first campaign management.",
      features: [
        "Keyword Research: Advanced Baidu keyword research and optimization using native tools",
        "Chinese Ad Copy: Native Simplified Chinese copywriting and cultural adaptation",
        "Mobile-First Campaigns: Optimized for China's 77% mobile search usage",
        "Conversion Tracking: Complete Baidu Tongji integration and conversion measurement",
        "Quality Score Improvement: Strategic optimization for better ad positioning and lower costs"
      ],
      results: [
        "300% increase in qualified China traffic",
        "180% improvement in conversion rates",
        "200% increase in Baidu-driven sales"
      ]
    },
    {
      icon: Crown,
      title: "Baidu Brand Zone Advertising",
      description: "Leverage the power of premium Baidu Brand Zone campaigns with immersive brand experiences, complete SERP control, and advanced visual advertising formats for maximum brand awareness.",
      features: [
        "Premium Brand Positioning: Complete control over search results appearance",
        "Visual Advertising: Advanced visual formats including video and interactive content",
        "Brand Trust Enhancement: Premium positioning that builds credibility and trust",
        "SERP Control: Dominate search results with comprehensive brand presence",
        "High-Impact Campaigns: Maximum brand awareness and engagement strategies"
      ],
      results: [
        "320% increase in brand awareness",
        "150% improvement in brand trust metrics",
        "75% increase in premium positioning"
      ]
    },
    {
      icon: Smartphone,
      title: "Baidu Mobile Advertising",
      description: "Comprehensive mobile advertising campaigns optimized for China's mobile-first environment, featuring click-to-call functionality, app promotion, and location-based targeting.",
      features: [
        "Mobile-Responsive Ads: Optimized ad formats for mobile devices and apps",
        "Click-to-Call Campaigns: Direct phone call functionality for immediate engagement",
        "App Download Promotion: Strategic app promotion and download optimization",
        "Location-Based Targeting: Precise geographic targeting for local businesses",
        "Mobile Conversion Optimization: Streamlined mobile user experience and conversion paths"
      ],
      results: [
        "280% increase in mobile engagement",
        "160% improvement in mobile conversion rates",
        "85% increase in app downloads"
      ]
    },
    {
      icon: Globe,
      title: "Baidu Campaign Localization",
      description: "Complete campaign localization services including Simplified Chinese copywriting, cultural adaptation, local market research, and compliance with Chinese advertising regulations.",
      features: [
        "Chinese Copywriting: Native Simplified Chinese ad copy and content creation",
        "Cultural Adaptation: Culturally sensitive messaging and creative strategies",
        "Local Market Research: Deep understanding of Chinese consumer behavior and preferences",
        "Regulatory Compliance: Full compliance with Chinese advertising regulations and guidelines",
        "Regional Targeting: Precise targeting for different Chinese regions and demographics"
      ],
      results: [
        "240% increase in cultural relevance",
        "170% improvement in local market engagement",
        "90% increase in regulatory compliance"
      ]
    },
    {
      icon: BarChart3,
      title: "Baidu Analytics & Reporting",
      description: "Comprehensive Baidu analytics and reporting services that provide insights into campaign performance, audience behavior, and ROI optimization with detailed performance tracking.",
      features: [
        "Real-Time Dashboards: Live performance monitoring and campaign insights",
        "Baidu Tongji Integration: Complete integration with Baidu's analytics platform",
        "ROI Tracking: Detailed return on investment analysis and optimization",
        "Audience Analysis: Deep-dive into Chinese consumer behavior and preferences",
        "Competitive Benchmarking: Performance comparison with industry standards"
      ],
      results: [
        "Complete visibility into China market performance",
        "Data-driven optimization decisions",
        "Measurable ROI improvements and strategic insights"
      ]
    }
  ]

  const baiduAdsProcess = [
    {
      step: "01",
      title: "China Market Analysis & Baidu Account Setup",
      description: "Comprehensive evaluation of your China market potential, including competitor research on Baidu, audience assessment, regulatory compliance review, and Baidu account setup with proper business verification and documentation assistance."
    },
    {
      step: "02",
      title: "Custom Baidu Advertising Strategy",
      description: "Tailored Baidu campaign strategy development with goal setting, campaign type recommendations (Search Ads, Brand Zone), budget allocation, keyword research using Baidu tools, and localization planning based on China market analysis."
    },
    {
      step: "03",
      title: "Campaign Launch & Localization",
      description: "Professional campaign execution with Baidu account optimization, search ad setup, audience targeting configuration, Chinese ad copy creation, and tracking implementation for maximum China market performance."
    },
    {
      step: "04",
      title: "Continuous Optimization & Monitoring",
      description: "Ongoing campaign optimization through daily monitoring, weekly performance adjustments, monthly reporting, quarterly strategy reviews, and A/B testing for sustained performance improvement and ROI maximization."
    },
    {
      step: "05",
      title: "Performance Analysis & Scaling",
      description: "Comprehensive performance reporting with ROI analysis, Baidu analytics insights, audience behavior analysis, conversion tracking, and strategic planning for campaign scaling and market expansion."
    },
    {
      step: "06",
      title: "Advanced Strategy Implementation",
      description: "Dynamic content optimization, seasonal campaign development, brand zone implementation, mobile optimization, and Baidu trends analysis for sustained growth and competitive advantage in China market."
    }
  ]

  const whyChooseBaiduAds = [
    "Proven Results: Our clients see average 40% lower cost-per-click and 250% increase in China market leads",
    "Expert Team: Certified Baidu Business Partners with 5+ years experience managing $5M+ in China market ad spend",
    "Cost-Effective: Starting from $2,500/month with 65% improvement in campaign ROAS and 180% improvement in conversion rates",
    "Full-Service: Complete Baidu advertising strategy, search ads management, brand zone optimization, and cultural localization",
    "China Market Specialization: Deep expertise in Baidu platform, Chinese consumer behavior, and China market dynamics",
    "Multi-Platform Expertise: Baidu Search Ads, Brand Zone, Mobile Advertising, and Display campaigns across all formats",
    "Data-Driven Approach: Advanced Baidu analytics, conversion tracking, and ROI optimization with real-time performance monitoring",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing and performance guarantees"
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Specialized Baidu advertising management for online stores targeting Chinese consumers, including shopping campaigns, product promotion, and seasonal strategy development.",
      services: [
        "Baidu Search campaigns",
        "Brand Zone advertising",
        "Mobile-first optimization",
        "Chinese market localization"
      ],
      results: "180% increase in product discovery, 65% improvement in campaign ROAS"
    },
    {
      icon: Building2,
      title: "Technology & SaaS",
      description: "Baidu marketing strategies for B2B technology companies targeting Chinese businesses, emphasizing thought leadership content and professional targeting.",
      services: [
        "B2B keyword targeting",
        "Professional audience campaigns",
        "Lead generation optimization",
        "Technical content marketing"
      ],
      results: "220% increase in qualified leads, 45% improvement in cost-per-acquisition"
    },
    {
      icon: Heart,
      title: "Consumer Brands",
      description: "Baidu advertising campaigns designed for consumer brands leveraging China's mobile-first environment and social commerce integration.",
      services: [
        "Brand awareness campaigns",
        "Mobile advertising optimization",
        "Social commerce integration",
        "Cultural adaptation"
      ],
      results: "150% increase in brand awareness, 70% improvement in engagement rates"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Comprehensive Baidu marketing for professional service firms with expertise in B2B targeting and professional audience development in China.",
      services: [
        "Professional audience targeting",
        "Lead generation campaigns",
        "Thought leadership content",
        "B2B conversion optimization"
      ],
      results: "190% increase in qualified inquiries, 55% improvement in lead quality"
    },
    {
      icon: Settings,
      title: "Manufacturing & Industrial",
      description: "Specialized Baidu advertising for manufacturing companies targeting Chinese suppliers, distributors, and B2B buyers.",
      services: [
        "Industrial keyword targeting",
        "B2B lead generation",
        "Supplier relationship campaigns",
        "Technical product promotion"
      ],
      results: "160% increase in business inquiries, 40% improvement in sales qualified leads"
    },
    {
      icon: Activity,
      title: "Healthcare & Wellness",
      description: "Compliant Baidu advertising management with expertise in healthcare content guidelines and wellness audience targeting within Chinese regulations.",
      services: [
        "Compliant advertising strategies",
        "Health-conscious targeting",
        "Wellness content campaigns",
        "Regulatory compliance"
      ],
      results: "85% increase in patient inquiries, 50% improvement in appointment bookings"
    }
  ]

  const baiduAdsCaseStudies = [
    {
      industry: "Global Technology Company",
      location: "China Market",
      challenge: "International SaaS company needed to enter Chinese market with limited brand recognition and no local presence",
      solution: "Implemented comprehensive Baidu search campaigns with brand zone advertising, Chinese localization, and mobile optimization for China market penetration",
      results: [
        "240% increase in China market leads",
        "65% improvement in cost-per-acquisition",
        "180% growth in brand awareness",
        "320% increase in qualified inquiries"
      ]
    },
    {
      industry: "E-commerce Fashion Brand",
      location: "China Market",
      challenge: "Western fashion retailer struggling with China market entry, cultural adaptation, and mobile-first consumer behavior",
      solution: "Restructured Baidu campaigns with localized creative, mobile-first approach, seasonal targeting strategies, and cultural adaptation",
      results: [
        "320% increase in online sales",
        "45% improvement in conversion rates",
        "190% growth in mobile traffic",
        "150% increase in brand engagement"
      ]
    },
    {
      industry: "B2B Manufacturing Company",
      location: "China Market",
      challenge: "Industrial equipment manufacturer needed qualified Chinese distributor leads and B2B market penetration",
      solution: "Implemented targeted Baidu advertising strategy with B2B keyword focus, industry-specific landing pages, and lead nurturing campaigns",
      results: [
        "280% increase in qualified inquiries",
        "55% improvement in lead quality",
        "150% growth in partnership opportunities",
        "85% increase in distributor applications"
      ]
    }
  ]

  const baiduAdsFaqData = [
    {
      question: "How much does Baidu advertising cost?",
      answer: "Baidu advertising management costs typically range from $2,500-$7,500+ per month, depending on your ad spend and campaign complexity. Baidu ad spend can be lower than Google Ads due to less international competition, with CPCs often 30-50% lower than comparable Western markets."
    },
    {
      question: "Do I need a Chinese business license for Baidu ads?",
      answer: "Yes, Baidu requires business verification including Chinese business documentation or international business credentials. We assist with the entire Baidu account setup process, including documentation guidance and verification support for international businesses."
    },
    {
      question: "How long does it take to see Baidu advertising results?",
      answer: "Baidu advertising results typically follow this timeline: Week 1-2 for account setup and verification, Week 3-4 for campaign launch and initial data collection, Month 2 for optimization and audience refinement, Month 3+ for sustained performance improvements. Most clients see 25-35% performance improvement within 60 days."
    },
    {
      question: "What's the difference between Baidu ads and Google Ads?",
      answer: "Baidu advertising targets China's 72% search market share with 663M+ users, while Google is blocked in mainland China. Baidu requires Chinese language content, cultural localization, and compliance with Chinese regulations. Baidu also offers unique formats like Brand Zone ads for premium brand positioning."
    },
    {
      question: "Can international companies advertise on Baidu?",
      answer: "Yes, international companies can advertise on Baidu with proper documentation and verification. We provide complete Baidu advertising setup services including business verification, account structure optimization, cultural localization, and ongoing compliance management for global businesses."
    },
    {
      question: "What industries work best for Baidu advertising?",
      answer: "Our Baidu marketing expertise covers e-commerce, technology, manufacturing, professional services, consumer brands, and healthcare sectors. We adapt strategies to industry-specific Chinese market dynamics, cultural preferences, and regulatory requirements for optimal performance."
    },
    {
      question: "How do you measure Baidu advertising success?",
      answer: "We track comprehensive metrics including impressions, clicks, conversion rates, cost-per-click, return on ad spend (ROAS), and customer lifetime value through Baidu analytics integration. Our monthly reports include detailed performance analysis, audience insights, and strategic recommendations for continuous improvement."
    },
    {
      question: "Do you provide Baidu advertising training?",
      answer: "Yes, we offer Baidu advertising training and consultation services including platform education, best practices workshops, account management training, and ongoing strategic guidance to help your team understand China market advertising dynamics."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Baidu Ads Management Services",
        "description": "Professional Baidu advertising and search engine marketing services for businesses targeting the Chinese market. Expert Baidu ads management, search campaign optimization, brand zone advertising, and ROI-focused China market marketing strategies.",
        "url": "https://frameleads.com/baidu-ads",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/baidu-ads-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Marketing Blvd",
            "addressLocality": "Marketing City",
            "addressRegion": "MC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "china-marketing@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Baidu Advertising Management",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "priceRange": "$2500-$7500",
          "description": "Professional Baidu ads management services with transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Baidu Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Baidu Search Ads Management",
                "description": "Complete Baidu search campaign management and optimization for China market penetration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Baidu Brand Zone Advertising",
                "description": "Premium Baidu Brand Zone campaigns and visual advertising for maximum brand awareness"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Baidu Campaign Localization",
                "description": "Complete campaign localization and cultural adaptation for Chinese market success"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": baiduAdsFaqData.map(faq => ({
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
        <title>Expert Baidu Ads Management | China Search Marketing</title>
        <meta name="description" content="Professional Baidu advertising services for global businesses. Certified Baidu partners delivering 40% lower CPC & proven ROI in China's largest search engine." />
        <meta name="keywords" content="baidu ads, baidu advertising, baidu ad management, baidu marketing agency, baidu ppc, baidu search ads, baidu advertising agency, baidu ad optimization, baidu campaign management, china search marketing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://frameleads.com/baidu-ads" />
        <meta property="og:title" content="Expert Baidu Ads Management | China Search Marketing" />
        <meta property="og:description" content="Professional Baidu advertising services for global businesses. Certified Baidu partners delivering 40% lower CPC & proven ROI in China's largest search engine." />
        <meta property="og:url" content="https://frameleads.com/baidu-ads" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Baidu Ads Management | China Search Marketing" />
        <meta name="twitter:description" content="Professional Baidu advertising services for global businesses. Certified Baidu partners delivering 40% lower CPC & proven ROI in China's largest search engine." />
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
        <section className="relative py-20 lg:py-32 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                  🚀 Baidu Advertising Experts - 40% Lower CPC Guaranteed
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                Expert Baidu Ads Management Services |{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                  Dominate China's Search Market
                </span>{" "}
                Through Search Ads, Brand Zone & Mobile Optimization
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
                Trusted by 300+ businesses worldwide to maximize their Baidu advertising ROI through search ads, brand zone campaigns, and China market optimization strategies. Achieve 40% lower cost-per-click with our proven Baidu advertising solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/contact">
                  <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                    Get Free China Market Analysis - Start Today
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
                  <span>✓ Proven Results: 40% Lower CPC Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                  <span>✓ Expert Team: Certified Baidu Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                  <span>✓ Cost-Effective: Starting $2,500/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                  <span>✓ No Long-Term Contracts</span>
                </div>
              </div>

              {/* Review Rating Component */}
              <div className="mb-8">
                <ReviewRating className="max-w-4xl mx-auto" />
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 300+ Businesses Worldwide</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">40%</div>
                    <div className="text-gray-600 text-sm">Lower Cost-Per-Click</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">250%</div>
                    <div className="text-gray-600 text-sm">Increase in China Market Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">65%</div>
                    <div className="text-gray-600 text-sm">Improvement in ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">180%</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Baidu Advertising Results Across China Market</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven Baidu advertising approach delivers measurable growth for businesses worldwide through search ads, brand zone campaigns, and China market optimization</p>
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
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">40%</div>
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
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">250%</div>
                  <div className="text-gray-600 text-sm">Increase in China Market Leads</div>
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
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">65%</div>
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
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">180%</div>
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
                  Why Choose Frameleads for Baidu Advertising?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Frameleads positions itself as the premier Baidu advertising agency, combining certified Baidu Business Partner status with cutting-edge China market expertise. Our comprehensive approach ensures that every dollar of your advertising budget delivers maximum return on investment through search ads, brand zone campaigns, and cultural localization strategies.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Baidu Advertising Platform Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Proven Results: 40% lower cost-per-click and 250% increase in China market leads for our clients</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Expert Team: Certified Baidu Business Partners with 5+ years experience managing $5M+ in China market ad spend</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Multi-Platform Expertise: Baidu Search Ads, Brand Zone, Mobile Advertising, and Display campaigns across all formats</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">China Market Specialization: Deep expertise in Baidu platform, Chinese consumer behavior, and China market dynamics</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Baidu Advertising Specialization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Cost-Effective: Starting from $2,500/month with 65% improvement in campaign ROAS and 180% improvement in conversion rates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Industry-Specific Marketing: E-commerce, technology, manufacturing, professional services, consumer brands, and healthcare</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Data-Driven Approach: Advanced Baidu analytics, conversion tracking, and ROI optimization with real-time performance monitoring</span>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Baidu Performance Dashboard</h3>
                    <p className="text-gray-600">Real-time Baidu advertising analytics and China market performance insights</p>
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
                Why Choose Baidu for China Market Advertising?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why <strong>Baidu advertising</strong> outperforms other search platforms in China through massive market reach, cultural relevance, and mobile-first optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Baidu vs Other Platforms */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Baidu vs Google Ads: China Market Advantage</h3>
                  <p className="text-gray-600 mb-6">
                    While <strong>Google is blocked in mainland China</strong>, <strong>Baidu dominates with 72% market share</strong>, providing unparalleled access to Chinese consumers. Our analysis shows:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">72% search market share with 663M+ active users</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Native Chinese language and cultural understanding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Mobile-first optimization with 77% mobile revenue</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Unique Brand Zone advertising for premium positioning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Baidu Advertising Features */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Baidu's Advanced Advertising Features</h3>
                  <p className="text-gray-600 mb-6">
                    Baidu provides comprehensive advertising tools that make China market penetration efficient and effective for international businesses:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Brand Zone advertising for complete SERP control</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Mobile-first campaign optimization and click-to-call</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Advanced Chinese language keyword research tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-gray-600">Baidu Tongji integration for comprehensive analytics</span>
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
                Comprehensive Baidu Advertising Services for Maximum ROI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive Baidu advertising services are designed to deliver China market success and drive business growth for companies worldwide through search ads, brand zone campaigns, and cultural localization strategies.
              </p>
            </div>

            <div className="space-y-12">
              {baiduAdsServicesList.map((service, index) => {
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
                Transparent Baidu Ads Management Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional Baidu advertising packages designed for businesses targeting the Chinese market. All packages include Baidu account setup, search campaign management, and cultural localization services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Baidu Ads Package</h3>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,500</div>
                    <div className="text-gray-600">per month</div>
                    <p className="text-sm text-gray-500 mt-2">Perfect for small businesses and China market testing</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span>Baidu account setup and verification</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span>1-2 search campaigns</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span>Basic keyword research (100 keywords)</span>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Baidu Advertising Solution</h3>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$4,500</div>
                    <div className="text-gray-600">per month</div>
                    <p className="text-sm text-gray-500 mt-2">Ideal for scaling businesses and growing China market presence</p>
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
                      <span>Brand zone advertising setup</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span>Comprehensive keyword research (500+ keywords)</span>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Baidu Advertising</h3>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$7,500+</div>
                    <div className="text-gray-600">per month</div>
                    <p className="text-sm text-gray-500 mt-2">For large organizations and high-volume China market operations</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span>Everything in Growth package</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span>Full-funnel China market strategy</span>
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
              <p className="text-gray-600 mb-4">*All packages include Baidu Business account setup, search campaign implementation, and ongoing optimization services</p>
              <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored Baidu marketing solution</Link></p>
            </div>
          </div>
        </section>

        {/* Performance Marketing Process Section */}
        <section className="relative py-20" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Proven Baidu Advertising Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic Baidu advertising approach combining strategic planning, cultural localization, and continuous optimization to deliver measurable results through search ads, brand zone campaigns, and China market optimization strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {baiduAdsProcess.map((process, index) => (
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Baidu Advertising Expertise Across Key Industries</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized expertise extends across key industries worldwide, with deep understanding of unique Baidu advertising needs and China market dynamics in each sector.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Baidu Advertising Success Stories: Real Results from Real Companies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped companies worldwide achieve remarkable growth through strategic Baidu advertising campaigns, search optimization, and China market penetration strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {baiduAdsCaseStudies.map((study, index) => (
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Baidu Advertising Services We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive Baidu advertising services across search ads, brand zone campaigns, mobile optimization, and cultural localization, helping businesses worldwide maximize their China market presence and ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {baiduAdsServices.map((service, index) => (
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
                Frequently Asked Questions About Baidu Advertising Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about Baidu advertising management services and how Frameleads can help your business achieve measurable results through search ads, brand zone campaigns, and China market optimization.
              </p>
            </div>

            <div className="space-y-6">
              {baiduAdsFaqData.map((faq, index) => (
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
          title="Ready to Transform Your China Market Presence with Expert Baidu Advertising?"
          description="Partner with Frameleads, the most trusted Baidu advertising management agency. Get your free China market analysis and discover how we can help you achieve measurable ROI and business growth through search ads, brand zone campaigns, and cultural localization."
          primaryButtonText="Start Your Baidu Campaign Today - Free Strategy Session"
          secondaryButtonText="Get Your Free China Market Analysis"
        />

        {/* Comprehensive Digital Marketing Services in Singapore */}
        <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Baidu Advertising Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                As the premier <strong>Baidu advertising management agency</strong>, we offer comprehensive services across <strong>Search Ads</strong>, <strong>Brand Zone</strong>, <strong>Mobile Advertising</strong>, and <strong>Cultural Localization</strong>.
                Explore our specialized services designed specifically for China market success.
              </p>
            </div>

            {/* Primary Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Baidu Search Ads */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Baidu Search Ads</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    Dominate Baidu search results with expertly crafted search campaigns that target high-intent Chinese keywords and drive qualified traffic to your business.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Chinese keyword research</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Search campaign management</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Mobile-first optimization</span>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                    Explore Search Ads
                  </Link>
                </CardContent>
              </Card>

              {/* Baidu Brand Zone */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Baidu Brand Zone</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    Maximize brand awareness and trust through premium Baidu Brand Zone campaigns that dominate search results with immersive brand experiences.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Premium brand positioning</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Visual advertising formats</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Complete SERP control</span>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                    Explore Brand Zone
                  </Link>
                </CardContent>
              </Card>

              {/* Baidu Mobile Advertising */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Baidu Mobile Advertising</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    Maximize your China market reach with mobile-first Baidu advertising campaigns optimized for China's 77% mobile search usage.
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

              {/* Baidu Analytics & Reporting */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Baidu Analytics & Reporting</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    Comprehensive Baidu analytics and reporting services that provide insights into China market performance, audience behavior, and ROI optimization.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Baidu Tongji integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">China market insights</span>
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

              {/* Cultural Localization */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Cultural Localization</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    Complete campaign localization services including Chinese copywriting, cultural adaptation, and regulatory compliance for authentic China market presence.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">Chinese copywriting</span>
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

              {/* Baidu Account Setup */}
              <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Baidu Account Setup</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    Complete Baidu advertising account setup including business verification, documentation assistance, and ongoing compliance management for international businesses.
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
                  <Link href="/contact" className="block">
                    <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free China Market Analysis</div>
                    <p className="text-sm text-gray-600">Get a comprehensive analysis of your current China market potential and Baidu advertising opportunities</p>
                  </Link>
                </div>
                <div className="text-center group">
                  <Link href="/tools/roi-calculator" className="block">
                    <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Baidu Ads ROI Calculator</div>
                    <p className="text-sm text-gray-600">Calculate your Baidu advertising ROI and optimize your budget allocation for China market campaigns</p>
                  </Link>
                </div>
                <div className="text-center group">
                  <Link href="/resources/digital-marketing-guide" className="block">
                    <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Baidu Advertising Guide</div>
                    <p className="text-sm text-gray-600">Complete guide to Baidu advertising strategies and best practices for China market success</p>
                  </Link>
                </div>
                <div className="text-center group">
                  <Link href="/academy" className="block">
                    <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                    <p className="text-sm text-gray-600">Learn Baidu advertising with our expert-led courses and training programs for China market marketing</p>
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


      </div>
    </>
  )
}
