'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, Smartphone as Mobile, MessageCircle, Search, ShoppingBag, Users as People, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, Zap as Lightning, ExternalLink, Brain, Target as TargetIcon, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, PieChart as PieChartIcon, LineChart, DollarSign as DollarIcon, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Award as AwardIcon, Trophy, Medal, Crown as CrownIcon, Star as StarIcon, ThumbsUp as ThumbsUpIcon, MessageSquare as MessageSquareIcon, Share2 as Share2Icon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon, ArrowRight as ArrowRightIcon, Play as PlayIcon, Eye as EyeIcon, BarChart as BarChartIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon, Users as UsersIcon, Building2 as Building2Icon, Briefcase as BriefcaseIcon, Shield as ShieldIcon, Globe as GlobeIcon, DollarSign as DollarSignIcon, PieChart as PieChartIcon, Settings as SettingsIcon, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, ShoppingCart as ShoppingCartIcon, Heart as HeartIcon, GraduationCap as GraduationCapIcon, Palette as PaletteIcon, Crown as CrownIcon, Euro as EuroIcon, Mobile as MobileIcon, MessageCircle as MessageCircleIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon, People as PeopleIcon, BarChart as BarChartIcon, ArrowRight as ArrowRightIcon, Play as PlayIcon, Eye as EyeIcon, ThumbsUp as ThumbsUpIcon, Share2 as Share2Icon, Download as DownloadIcon, PlayCircle as PlayCircleIcon, Sparkles as SparklesIcon, Megaphone as MegaphoneIcon, Camera as CameraIcon, Music as MusicIcon, Hash as HashIcon, Lightning as LightningIcon, Home, Coffee } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function ShopifyAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const shopifyAdsServices = [
    {
      category: "Google Ads for Shopify Stores",
      areas: ["Shopping Campaigns", "Search Campaigns", "Display Advertising", "YouTube Advertising", "Performance Max", "Conversion Tracking"],
      description: "Transform your Shopify Google ads performance with specialized ecommerce advertising strategies including optimized product feeds and high-converting campaigns"
    },
    {
      category: "Facebook & Instagram Ads for Shopify", 
      areas: ["Dynamic Product Ads", "Conversion Campaigns", "Retargeting Campaigns", "Creative Optimization", "Lookalike Audiences", "Social Commerce"],
      description: "Leverage the power of social commerce with our Shopify Facebook ads expertise including automated product promotion and advanced audience segmentation"
    },
    {
      category: "Shopify PPC Campaign Management",
      areas: ["Campaign Strategy Development", "Keyword Research & Optimization", "Bid Management", "Landing Page Optimization", "A/B Testing", "Performance Monitoring"],
      description: "Comprehensive Shopify PPC management services including AI-powered bidding strategies and conversion-focused optimization for maximum ROI"
    },
    {
      category: "Conversion Rate Optimization",
      areas: ["Landing Page Design", "Checkout Process Optimization", "Product Page Enhancement", "Mobile Experience", "Loading Speed Optimization", "User Experience"],
      description: "Advanced conversion rate optimization services that extend beyond campaign management to improve every aspect of your Shopify store's conversion funnel"
    },
    {
      category: "Shopify Analytics & Reporting",
      areas: ["Revenue Attribution", "Customer Acquisition Cost", "Return on Ad Spend", "Conversion Funnel Analysis", "Audience Insights", "Performance Tracking"],
      description: "Comprehensive Shopify advertising analytics and reporting services that provide real-time insights into campaign performance and customer behavior"
    },
    {
      category: "Seasonal Campaign Management",
      areas: ["Holiday Campaign Planning", "Black Friday Optimization", "Seasonal Product Promotion", "Inventory-Based Budget Allocation", "Year-Round Calendar", "Peak Season Strategy"],
      description: "Strategic seasonal advertising management for peak shopping periods including holiday campaigns and inventory-based budget optimization"
    }
  ]

  const shopifyAdsServicesList = [
    {
      icon: Target,
      title: "Complete Shopify Ads Management Services",
      description: "Our comprehensive Shopify advertising services cover every aspect of ecommerce marketing campaigns from strategic planning to creative production and advanced optimization for maximum ROI across Google Ads, Facebook Ads, and other platforms.",
      features: [
        "Strategic Campaign Planning: Custom Shopify marketing strategy development and audience research",
        "Multi-Platform Management: Google Ads, Facebook Ads, Instagram Ads, and TikTok advertising",
        "Advanced Targeting & Optimization: Interest-based, demographic, and behavioral targeting for high-intent customers",
        "A/B Testing: Multiple creative variations for optimal performance across all advertising platforms",
        "Real-time Optimization: Continuous campaign monitoring and improvement with advanced analytics insights"
      ],
      results: [
        "4x return on ad spend (ROAS)",
        "250% increase in online sales",
        "65% reduction in customer acquisition cost"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Google Ads for Shopify Stores",
      description: "Transform your Shopify Google ads performance with specialized ecommerce advertising strategies including Shopping campaigns, Search campaigns, and Performance Max optimization.",
      features: [
        "Shopping Campaigns: Optimized product feed management and Performance Max campaigns",
        "Search Campaigns: High-converting keyword strategies targeting ready-to-buy customers",
        "Display Advertising: Strategic remarketing campaigns to re-engage website visitors",
        "YouTube Advertising: Video marketing campaigns that showcase your products effectively",
        "Conversion Tracking: Complete Google Analytics 4 integration and conversion measurement"
      ],
      results: [
        "300% increase in qualified traffic",
        "180% improvement in conversion rates",
        "200% increase in Google Ads-driven sales"
      ]
    },
    {
      icon: Video,
      title: "Facebook & Instagram Ads for Shopify",
      description: "Leverage the power of social commerce with our Shopify Facebook ads expertise including Dynamic Product Ads, conversion campaigns, and advanced audience segmentation.",
      features: [
        "Dynamic Product Ads: Automated product promotion based on customer behavior",
        "Conversion Campaigns: Optimized for purchases, leads, and customer acquisition",
        "Retargeting Campaigns: Advanced audience segmentation for higher conversion rates",
        "Creative Optimization: A/B testing for ad creatives, copy, and landing pages",
        "Lookalike Audiences: Scale successful campaigns with similar customer profiles"
      ],
      results: [
        "320% increase in monthly revenue",
        "150% improvement in customer lifetime value",
        "75% reduction in cost per acquisition"
      ]
    },
    {
      icon: BarChart3,
      title: "Shopify Analytics & Performance Tracking",
      description: "Comprehensive Shopify advertising analytics and reporting services that provide real-time insights into campaign performance, customer behavior, and ROI optimization.",
      features: [
        "Revenue Attribution: Track every sale back to its advertising source",
        "Customer Acquisition Cost: Monitor cost-effectiveness across all channels",
        "Return on Ad Spend: Real-time ROAS tracking and optimization",
        "Conversion Funnel Analysis: Identify and fix conversion bottlenecks",
        "Audience Insights: Deep-dive into customer behavior and preferences"
      ],
      results: [
        "Complete visibility into advertising performance",
        "Data-driven optimization decisions",
        "Measurable ROI improvements and strategic insights"
      ]
    },
    {
      icon: Search,
      title: "Conversion Rate Optimization for Shopify",
      description: "Advanced conversion rate optimization services that extend beyond campaign management to improve every aspect of your Shopify store's conversion funnel and user experience.",
      features: [
        "Landing Page Design: Conversion-focused page design and testing",
        "Checkout Process Optimization: Streamlined checkout for higher completion rates",
        "Product Page Enhancement: Optimized product pages for better conversions",
        "Mobile Experience: Mobile-first optimization for 70%+ of traffic",
        "Loading Speed Optimization: Fast-loading pages for better user experience"
      ],
      results: [
        "55% improvement in conversion rates",
        "70% improvement in mobile user experience",
        "85% increase in average order value"
      ]
    },
    {
      icon: Settings,
      title: "Seasonal Campaign Management",
      description: "Strategic seasonal advertising management for peak shopping periods including holiday campaigns, Black Friday optimization, and inventory-based budget allocation.",
      features: [
        "Holiday Campaign Planning: Strategic planning for peak shopping seasons",
        "Black Friday/Cyber Monday: Specialized optimization for major shopping events",
        "Seasonal Product Promotion: Targeted campaigns for seasonal inventory",
        "Inventory-Based Budget Allocation: Smart budget distribution based on stock levels",
        "Year-Round Calendar: Comprehensive seasonal strategy planning"
      ],
      results: [
        "190% increase in seasonal revenue",
        "75% improvement in inventory turnover",
        "120% increase in holiday sales performance"
      ]
    }
  ]

  const shopifyAdsProcess = [
    {
      step: "01",
      title: "Shopify Store Analysis & Audit",
      description: "Comprehensive evaluation of your current advertising performance, including campaign structure review, conversion tracking verification, competitor analysis, and Shopify store optimization assessment to identify growth opportunities."
    },
    {
      step: "02",
      title: "Custom Shopify Advertising Strategy",
      description: "Tailored campaign strategy development with goal setting, platform recommendations (Google Ads, Facebook Ads), budget allocation, audience targeting, and creative asset planning based on audit findings and business objectives."
    },
    {
      step: "03",
      title: "Campaign Implementation & Setup",
      description: "Professional campaign execution with account setup, conversion tracking configuration, audience creation, product feed optimization, and initial optimization protocols across all advertising platforms."
    },
    {
      step: "04",
      title: "Continuous Optimization & Scaling",
      description: "Ongoing campaign optimization through daily monitoring, weekly adjustments, monthly reporting, quarterly strategy reviews, and A/B testing for sustained performance improvement and ROI maximization."
    },
    {
      step: "05",
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive performance reporting with ROI analysis, revenue attribution tracking, customer acquisition cost monitoring, conversion funnel analysis, and strategic planning for campaign scaling."
    },
    {
      step: "06",
      title: "Seasonal Strategy & Growth",
      description: "Dynamic seasonal campaign development, holiday optimization, inventory-based budget allocation, creative innovation, and scaling strategies for sustained growth and peak season performance."
    }
  ]

  const whyChooseShopifyAds = [
    "Proven Results: Our clients see average 4x return on ad spend and 250% increase in online sales",
    "Expert Team: Certified Google Ads and Facebook Ads specialists with 5+ years experience managing $10M+ in ecommerce ad spend",
    "Cost-Effective: Starting from $2,500/month with 65% reduction in customer acquisition cost and 180% improvement in conversion rates",
    "Full-Service: Complete Shopify advertising strategy, Google Ads management, Facebook Ads optimization, and conversion rate optimization",
    "Ecommerce Specialization: Deep expertise in Shopify platform, product feeds, shopping campaigns, and ecommerce conversion optimization",
    "Multi-Platform Expertise: Google Ads, Facebook Ads, Instagram Ads, TikTok advertising, and performance marketing across all channels",
    "Data-Driven Approach: Advanced analytics, conversion tracking, and ROI optimization with real-time performance monitoring",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing and performance guarantees"
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "Fashion & Apparel",
      description: "Specialized Shopify advertising management for clothing brands, including seasonal campaign management, trend-based targeting, and influencer integration.",
      services: [
        "Google Shopping campaigns",
        "Facebook Dynamic Product Ads",
        "Seasonal campaign management",
        "Influencer collaboration ads"
      ],
      results: "250% increase in ROAS, 180% growth in online sales, 65% reduction in cost-per-acquisition"
    },
    {
      icon: Heart,
      title: "Beauty & Cosmetics",
      description: "Targeted Shopify advertising campaigns for beauty products with emphasis on visual storytelling, user-generated content, and demographic targeting.",
      services: [
        "Instagram and Facebook ads",
        "User-generated content campaigns",
        "Demographic targeting",
        "Visual storytelling ads"
      ],
      results: "320% increase in monthly revenue, 150% improvement in customer lifetime value"
    },
    {
      icon: Home,
      title: "Electronics & Tech",
      description: "Performance-driven Shopify advertising campaigns for tech products focusing on specifications, comparisons, and technical audience targeting.",
      services: [
        "Google Search campaigns",
        "YouTube advertising",
        "Technical audience targeting",
        "Product comparison ads"
      ],
      results: "190% increase in revenue consistency, 75% improvement in inventory turnover"
    },
    {
      icon: Coffee,
      title: "Home & Garden",
      description: "Seasonal Shopify advertising strategies for home improvement and garden products with local targeting and lifestyle-based messaging.",
      services: [
        "Seasonal campaign planning",
        "Local targeting strategies",
        "Lifestyle-based messaging",
        "Holiday campaign optimization"
      ],
      results: "190% increase in seasonal revenue, 75% improvement in inventory turnover"
    },
    {
      icon: Activity,
      title: "Health & Wellness",
      description: "Compliant Shopify advertising management with expertise in wellness content guidelines and health-conscious audience targeting.",
      services: [
        "Compliant advertising strategies",
        "Health-conscious targeting",
        "Wellness content campaigns",
        "Lifestyle wellness marketing"
      ],
      results: "160% increase in wellness content engagement, 40% improvement in lead generation"
    },
    {
      icon: Building2,
      title: "B2B E-commerce",
      description: "Shopify advertising strategies for B2B ecommerce, emphasizing thought leadership content, professional targeting, and lead generation campaigns.",
      services: [
        "LinkedIn advertising integration",
        "Professional audience targeting",
        "Lead generation campaigns",
        "B2B content marketing"
      ],
      results: "85% increase in professional audience reach, 50% improvement in lead quality"
    }
  ]

  const shopifyAdsCaseStudies = [
    {
      industry: "Fashion E-commerce Success",
      location: "Global",
      challenge: "Online clothing retailer struggling with high customer acquisition costs and low ROAS across Google Ads and Facebook Ads",
      solution: "Implemented dynamic product ads with seasonal targeting, influencer-generated content, and advanced audience segmentation across multiple platforms",
      results: [
        "250% increase in ROAS across all advertising channels",
        "180% growth in online sales within 6 months",
        "65% reduction in customer acquisition cost",
        "320% increase in Facebook Ads conversion rates"
      ]
    },
    {
      industry: "Beauty Brand Transformation",
      location: "Global",
      challenge: "Cosmetics company needed to scale beyond organic social media growth and increase brand awareness in competitive market",
      solution: "Multi-platform advertising strategy with user-generated content campaigns, lookalike audiences, and Instagram Shopping integration",
      results: [
        "320% increase in monthly revenue from advertising",
        "150% improvement in customer lifetime value",
        "75% reduction in cost per acquisition",
        "200% increase in Instagram-driven sales"
      ]
    },
    {
      industry: "Electronics Retailer Growth",
      location: "Global",
      challenge: "Tech retailer experiencing seasonal sales fluctuations and inventory challenges with high competition in electronics market",
      solution: "Performance Max campaigns with dynamic inventory ads, seasonal budget allocation, and YouTube advertising for product demonstrations",
      results: [
        "190% increase in revenue consistency year-round",
        "75% improvement in inventory turnover rate",
        "120% increase in holiday sales performance",
        "85% improvement in Google Ads conversion rates"
      ]
    }
  ]

  const shopifyAdsFaqData = [
    {
      question: "How much should I spend on Shopify advertising?",
      answer: "Most successful Shopify stores allocate 10-25% of their revenue to advertising. Start with a minimum of $1,000/month for meaningful data collection and scale based on performance. Our team helps determine optimal budget allocation based on your business goals, market competition, and current performance metrics."
    },
    {
      question: "What's the difference between Google Ads and Facebook Ads for Shopify?",
      answer: "Google Ads targets high-intent users actively searching for products, typically delivering higher conversion rates but at higher costs. Facebook Ads excel at audience discovery and retargeting, offering lower costs but requiring more nurturing. The best approach combines both platforms for maximum reach and effectiveness across the entire customer journey."
    },
    {
      question: "How long does it take to see results from Shopify ads?",
      answer: "Initial results typically appear within 7-14 days, with meaningful optimization data available after 30 days. Significant performance improvements usually occur within 60-90 days as campaigns gather sufficient data for optimization. Our systematic approach ensures steady improvement throughout this period with regular reporting and adjustments."
    },
    {
      question: "Do you provide Shopify ad creative development?",
      answer: "Yes, our Growth and Enterprise packages include custom ad creative development, including product photography optimization, video ad creation, copywriting, and landing page design. We continuously A/B test creatives to maximize performance across all advertising platforms and ensure brand consistency."
    },
    {
      question: "How do you optimize Shopify ads for mobile users?",
      answer: "Mobile optimization includes responsive ad design, mobile-specific landing pages, simplified checkout processes, and mobile-first creative strategies. Given that 70%+ of Shopify traffic comes from mobile devices, we prioritize mobile user experience in all campaigns and continuously test mobile-specific optimizations."
    },
    {
      question: "Can you help with international Shopify advertising?",
      answer: "Absolutely. Our international advertising expertise includes multi-language campaign creation, currency optimization, cultural adaptation, international shipping considerations, and region-specific compliance requirements for global Shopify expansion across multiple markets and time zones."
    },
    {
      question: "What makes your Shopify advertising different from other agencies?",
      answer: "Our specialization in Shopify advertising means deeper platform knowledge, ecommerce-specific strategies, and proven methodologies developed exclusively for online stores. We understand Shopify's unique features, integration capabilities, and optimization opportunities that general agencies often miss, with a focus on measurable ROI and sustainable growth."
    },
    {
      question: "Do you offer conversion tracking setup for Shopify stores?",
      answer: "Yes, we provide comprehensive conversion tracking setup including Google Analytics 4 integration, Facebook Pixel implementation, server-side tracking, cross-domain tracking, and custom conversion events. Proper tracking is essential for campaign optimization and ROI measurement, and we ensure complete attribution across all touchpoints."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Shopify Ads Management Services",
        "description": "Professional Shopify advertising and ecommerce marketing services for online stores worldwide. Expert Shopify ads management, Google Ads optimization, Facebook Ads campaigns, and ROI-focused ecommerce marketing strategies.",
        "url": "https://frameleads.com/shopify-ads",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/shopify-ads-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Marketing Blvd",
            "addressLocality": "Marketing City",
            "addressRegion": "MC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "shopify@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Shopify Advertising Management",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "priceRange": "$2500-$7500",
          "description": "Professional Shopify ads management services with transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Shopify Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Google Ads Management",
                "description": "Complete Google Ads campaign management and optimization for Shopify stores"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Facebook Ads Management",
                "description": "Professional Facebook and Instagram ads creation and optimization for Shopify marketing campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify PPC Campaign Management",
                "description": "Comprehensive PPC campaign management and conversion optimization for Shopify advertising"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": shopifyAdsFaqData.map(faq => ({
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
      <title>Expert Shopify Ads Management Services | Frameleads Agency</title>
      <meta name="description" content="Boost your Shopify store sales with our expert ads management. Specializing in Google Ads, Facebook Ads & conversion optimization. Get 4x ROAS guaranteed." />
      <meta name="keywords" content="Shopify ads, Shopify advertising, Shopify ad management, Shopify marketing agency, Shopify PPC, Shopify Google ads, Shopify Facebook ads, Shopify advertising agency, Shopify ad optimization, Shopify campaign management" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/shopify-ads" />
      <meta property="og:title" content="Expert Shopify Ads Management Services | Frameleads Agency" />
      <meta property="og:description" content="Boost your Shopify store sales with our expert ads management. Specializing in Google Ads, Facebook Ads & conversion optimization. Get 4x ROAS guaranteed." />
      <meta property="og:url" content="https://frameleads.com/shopify-ads" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert Shopify Ads Management Services | Frameleads Agency" />
      <meta name="twitter:description" content="Boost your Shopify store sales with our expert ads management. Specializing in Google Ads, Facebook Ads & conversion optimization. Get 4x ROAS guaranteed." />
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
                🚀 Shopify Advertising Experts - 4x ROAS Guaranteed
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Expert Shopify Ads Management Services |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Maximize Ecommerce ROI
              </span>{" "}
              Through Google Ads, Facebook Ads & Conversion Optimization
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Trusted by 500+ Shopify store owners worldwide to maximize their advertising ROI through Google Ads, Facebook Ads, and advanced conversion optimization strategies. Achieve 4x return on ad spend with our proven Shopify advertising solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Shopify Ads Audit - Start Today
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
                <span>✓ Proven Results: 4x ROAS Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Google & Facebook Certified</span>
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

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 500+ Shopify Stores Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">4x</div>
                  <div className="text-gray-600 text-sm">Return on Ad Spend</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">250%</div>
                  <div className="text-gray-600 text-sm">Increase in Online Sales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">65%</div>
                  <div className="text-gray-600 text-sm">Reduction in CAC</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Shopify Advertising Results Across Global Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven Shopify advertising approach delivers measurable growth for ecommerce businesses worldwide through Google Ads, Facebook Ads, and conversion optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">4x</div>
                <div className="text-gray-600 text-sm">Return on Ad Spend</div>
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
                <div className="text-gray-600 text-sm">Increase in Online Sales</div>
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
                <div className="text-gray-600 text-sm">Reduction in CAC</div>
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
                Why Choose Frameleads for Shopify Advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier Shopify advertising agency, combining certified Google Ads and Facebook Ads expertise with cutting-edge ecommerce marketing technology. Our comprehensive approach ensures that every dollar of your advertising budget delivers maximum return on investment through Google Ads, Facebook Ads, and conversion optimization strategies.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Shopify Advertising Platform Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 4x return on ad spend and 250% increase in online sales for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Certified Google Ads and Facebook Ads specialists with 5+ years experience managing $10M+ in ecommerce ad spend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Multi-Platform Expertise: Google Ads, Facebook Ads, Instagram Ads, TikTok advertising, and performance marketing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Ecommerce Specialization: Deep expertise in Shopify platform, product feeds, shopping campaigns, and conversion optimization</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Shopify Advertising Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cost-Effective: Starting from $2,500/month with 65% reduction in customer acquisition cost and 180% improvement in conversion rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Marketing: Fashion & apparel, beauty & cosmetics, electronics & tech, home & garden, health & wellness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Data-Driven Approach: Advanced analytics, conversion tracking, and ROI optimization with real-time performance monitoring</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Shopify Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time Shopify advertising analytics and ecommerce performance insights</p>
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
              Why Choose Shopify for Ecommerce Advertising?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why <strong>Shopify advertising</strong> outperforms other ecommerce platforms through integrated marketing tools, seamless analytics, and optimized conversion tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shopify vs Other Platforms */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopify vs Other Ecommerce Platforms: The Advertising Advantage</h3>
                <p className="text-gray-600 mb-6">
                  While <strong>other platforms require complex integrations</strong>, <strong>Shopify excels in native advertising tools</strong>, providing seamless marketing capabilities built specifically for ecommerce success. Our analysis shows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Native Google Ads integration with automatic product feed sync</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Built-in Facebook Pixel and conversion tracking setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Advanced analytics dashboard with advertising attribution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Seamless A/B testing and conversion optimization tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Shopify Advertising Features */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopify's Built-in Advertising Features</h3>
                <p className="text-gray-600 mb-6">
                  Shopify provides comprehensive advertising tools that make campaign management efficient and effective for ecommerce businesses:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Automated product feed optimization for Google Shopping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Dynamic product ads setup for Facebook and Instagram</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Advanced customer segmentation and retargeting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Real-time conversion tracking and ROI measurement</span>
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
              Comprehensive Shopify Advertising Services for Maximum ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Shopify advertising services are designed to deliver ecommerce marketing success and drive business growth for online stores worldwide through Google Ads, Facebook Ads, and conversion optimization strategies.
            </p>
          </div>

          <div className="space-y-12">
            {shopifyAdsServicesList.map((service, index) => {
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
              Transparent Shopify Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Shopify advertising packages designed for ecommerce businesses worldwide. All packages include Google Ads setup, Facebook Ads management, and conversion optimization services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Shopify Ads Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small Shopify stores and e-commerce startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Google Ads or Facebook Ads management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to $5,000 monthly ad spend</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic conversion tracking setup</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Landing page optimization</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Shopify Advertising Solution</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$4,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for scaling Shopify businesses and growing e-commerce stores</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-platform campaign management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to $15,000 monthly ad spend</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced conversion tracking and analytics</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Weekly optimization and reporting</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Shopify Advertising</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$7,500+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large Shopify operations and high-volume e-commerce stores</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Growth package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full-funnel advertising strategy</span>
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
            <p className="text-gray-600 mb-4">*All packages include Pinterest Business account setup, promoted pins implementation, and campaign optimization services</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored Pinterest marketing solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Shopify Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic Shopify advertising approach combining strategic planning, execution excellence, and continuous optimization to deliver measurable results through Google Ads, Facebook Ads, and conversion optimization strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopifyAdsProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Shopify Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key ecommerce industries worldwide, with deep understanding of unique Shopify advertising needs and conversion optimization strategies in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Shopify Advertising Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped Shopify stores worldwide achieve remarkable growth through strategic Google Ads, Facebook Ads campaigns, and conversion optimization strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {shopifyAdsCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Shopify Advertising Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Shopify advertising services across Google Ads, Facebook Ads, conversion optimization, and audience targeting, helping ecommerce businesses worldwide maximize their online presence and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopifyAdsServices.map((service, index) => (
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
              Frequently Asked Questions About Shopify Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Shopify advertising management services and how Frameleads can help your ecommerce business achieve measurable results through Google Ads, Facebook Ads, and conversion optimization.
            </p>
          </div>

          <div className="space-y-6">
            {shopifyAdsFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Shopify Store with Expert Advertising?"
        description="Partner with Frameleads, the most trusted Shopify advertising management agency. Get your free Shopify ads audit and discover how we can help you achieve measurable ROI and business growth through Google Ads, Facebook Ads, and conversion optimization."
        primaryButtonText="Start Your Shopify Campaign Today - Free Strategy Session"
        secondaryButtonText="Get Your Free Shopify Ads Audit"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Shopify Advertising Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>Shopify advertising management agency</strong>, we offer comprehensive services across <strong>Google Ads</strong>, <strong>Facebook Ads</strong>, <strong>Conversion Optimization</strong>, and <strong>Analytics & Reporting</strong>. 
              Explore our specialized services designed specifically for ecommerce business success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Google Ads for Shopify */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Google Ads for Shopify</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate Google search results with expertly crafted Google Ads campaigns that target high-intent keywords and drive qualified traffic to your Shopify store.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Shopping campaigns optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Search campaign management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Performance Max campaigns</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Google Ads
                </Link>
              </CardContent>
            </Card>

            {/* Facebook Ads for Shopify */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Facebook Ads for Shopify</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Maximize product visibility and sales through optimized Facebook and Instagram advertising campaigns for ecommerce businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Dynamic product ads</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Conversion campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Retargeting campaigns</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Facebook Ads
                </Link>
              </CardContent>
            </Card>

            {/* Conversion Rate Optimization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Conversion Rate Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Maximize your Shopify store's conversion potential with advanced CRO strategies that turn more visitors into customers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Landing page optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Checkout process improvement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">A/B testing and optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore CRO Services
                </Link>
              </CardContent>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive analytics and reporting services that provide insights into campaign performance, customer behavior, and ROI optimization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Revenue attribution tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Customer acquisition cost analysis</span>
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

            {/* Seasonal Campaign Management */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Seasonal Campaign Management</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic seasonal advertising management for peak shopping periods including holiday campaigns and Black Friday optimization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Holiday campaign planning</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Black Friday optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Seasonal budget allocation</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Seasonal Campaigns
                </Link>
              </CardContent>
            </Card>

            {/* PPC Campaign Management */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">PPC Campaign Management</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive PPC campaign management including keyword research, bid optimization, and performance monitoring across all platforms.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Keyword research & optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Bid management strategies</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Performance monitoring</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore PPC Management
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Shopify Ads Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current Shopify advertising performance across Google Ads, Facebook Ads, and conversion optimization</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Shopify Ads ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your Shopify advertising ROI and optimize your budget allocation for Google Ads, Facebook Ads, and PPC campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Shopify Advertising Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to Shopify advertising strategies and best practices for Google Ads, Facebook Ads, and conversion optimization</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn Shopify advertising with our expert-led courses and training programs for Google Ads, Facebook Ads, and ecommerce marketing</p>
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
