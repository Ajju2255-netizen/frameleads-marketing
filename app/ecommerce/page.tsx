'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, Search, ShoppingBag, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee, Code, Database, Server, Wrench, Cpu, HardDrive, Network, Terminal, GitBranch, ShieldCheck, Stethoscope, UserCheck, ClipboardList, CreditCard, Banknote, TrendingUp as TrendingUpIcon, Building, PiggyBank, Wallet, Receipt, Coins, Landmark } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import ReviewRating from "../components/review-rating"

export default function EcommercePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const ecommerceMarketingServices = [
    {
      category: "E-commerce SEO Services",
      areas: ["Online Store SEO Optimization", "E-commerce Content Marketing", "Product Page SEO", "E-commerce Keyword Research", "Technical SEO for Online Stores", "E-commerce Directory Submissions"],
      description: "Drive organic growth with e-commerce SEO that helps customers find your online store and products when they're ready to buy"
    },
    {
      category: "E-commerce PPC Management", 
      areas: ["Google Ads for E-commerce", "Amazon Advertising Management", "Social Commerce Advertising", "E-commerce Conversion Tracking", "Shopping Campaigns", "Retail Media Advertising"],
      description: "Drive immediate sales with specialized e-commerce PPC campaigns that capture high-intent shopping searches and maximize ROI"
    },
    {
      category: "E-commerce Content Marketing",
      areas: ["Product Content Creation", "E-commerce Blog Writing", "Email Marketing for Online Stores", "Social Commerce Content", "Product Video Content", "Customer Success Stories"],
      description: "Build brand authority and drive sales with engaging content that showcases your products and builds customer trust"
    },
    {
      category: "E-commerce Website Design & Development",
      areas: ["Online Store Design", "E-commerce Platform Integration", "Mobile Commerce Optimization", "Checkout Optimization", "E-commerce Website Accessibility", "Customer Experience Systems"],
      description: "Create a high-converting online store that provides an exceptional shopping experience and drives sales"
    },
    {
      category: "E-commerce Reputation Management",
      areas: ["Customer Review Management", "Online Reputation Monitoring", "E-commerce Crisis Communication", "Brand Management", "Customer Testimonial Programs", "Social Commerce Management"],
      description: "Protect and enhance your online store's reputation with professional reputation management services that build customer trust"
    },
    {
      category: "E-commerce Analytics & Performance Optimization",
      areas: ["Customer Acquisition Tracking", "E-commerce ROI Analysis", "Online Store Conversion Optimization", "E-commerce Marketing Attribution", "Customer Journey Analytics", "Sales Performance Reporting"],
      description: "Track and optimize your e-commerce marketing performance with detailed analytics that drive sales growth and customer acquisition"
    }
  ]

  const ecommerceMarketingServicesList = [
    {
      icon: FileText,
      title: "E-commerce SEO Services",
      description: "Drive organic growth with e-commerce SEO that helps customers find your online store and products when they're ready to buy. Our e-commerce-focused SEO strategies target shopping keywords and product search to increase your store's visibility.",
      features: [
        "Online Store SEO: Google Business Profile optimization for e-commerce businesses",
        "Product Content Optimization: SEO-optimized product descriptions and category pages",
        "E-commerce Technical SEO: Site speed, mobile optimization, and structured data",
        "E-commerce Directory Submissions: Listings in shopping and product directories",
        "E-commerce Keyword Research: Target high-intent shopping and product search terms"
      ],
      results: [
        "320% increase in organic search traffic",
        "280% improvement in product page rankings",
        "240% growth in online sales"
      ]
    },
    {
      icon: Target,
      title: "E-commerce PPC Management",
      description: "Drive immediate sales with specialized e-commerce PPC campaigns that capture high-intent shopping searches. Our e-commerce advertising strategies maximize ROI while driving qualified traffic to your online store.",
      features: [
        "Google Ads for E-commerce: Shopping campaigns and search ads for online stores",
        "Amazon Advertising Management: Sponsored products and brand campaigns",
        "Social Commerce Advertising: Facebook, Instagram, and TikTok shopping ads",
        "E-commerce Conversion Tracking: Sales tracking and ROI optimization",
        "E-commerce Remarketing Campaigns: Re-engage customers who visited your store"
      ],
      results: [
        "180% increase in online sales",
        "65% improvement in conversion rates",
        "45% reduction in cost per acquisition"
      ]
    },
    {
      icon: TrendingUp,
      title: "E-commerce Content Marketing",
      description: "Build brand authority and drive sales with engaging content that showcases your products and builds customer trust. Our content marketing strategies educate customers while driving organic growth and sales.",
      features: [
        "Product Content Creation: SEO-optimized product descriptions and category content",
        "E-commerce Blog Writing: Product guides, buying guides, and industry insights",
        "Email Marketing for Online Stores: Automated campaigns and customer nurturing",
        "Social Commerce Content: Instagram, TikTok, and Facebook shopping content",
        "Customer Success Stories: Product reviews and customer testimonials"
      ],
      results: [
        "220% increase in customer engagement",
        "180% improvement in website time on page",
        "150% growth in email subscribers"
      ]
    },
    {
      icon: Crown,
      title: "E-commerce Website Design & Development",
      description: "Create a high-converting online store that provides an exceptional shopping experience and drives sales. Our e-commerce website design focuses on conversion optimization and user experience.",
      features: [
        "Online Store Design: Custom e-commerce website design and development",
        "E-commerce Platform Integration: Shopify, WooCommerce, Magento, and BigCommerce",
        "Mobile Commerce Optimization: Mobile-first design for mobile shoppers",
        "Checkout Optimization: Streamlined checkout process to reduce cart abandonment",
        "E-commerce Website Accessibility: ADA-compliant design for all customers"
      ],
      results: [
        "350% increase in online sales",
        "280% improvement in conversion rates",
        "220% growth in average order value"
      ]
    },
    {
      icon: Zap,
      title: "E-commerce Reputation Management",
      description: "Protect and enhance your online store's reputation with professional reputation management services. We help you build trust with customers through strategic review management and positive content creation.",
      features: [
        "Customer Review Management: Monitor and respond to reviews across all platforms",
        "Online Reputation Monitoring: Track mentions and sentiment across the web",
        "E-commerce Crisis Communication: Professional communication during challenging times",
        "E-commerce Brand Management: Consistent brand messaging across all channels",
        "Customer Testimonial Programs: Generate authentic positive content and reviews"
      ],
      results: [
        "280% increase in positive online reviews",
        "200% improvement in online reputation score",
        "160% growth in customer trust indicators"
      ]
    },
    {
      icon: BarChart3,
      title: "E-commerce Analytics & Performance Optimization",
      description: "Track and optimize your e-commerce marketing performance with detailed analytics that drive sales growth. Our e-commerce analytics provide actionable insights for data-driven marketing decisions.",
      features: [
        "Customer Acquisition Tracking: Monitor and optimize customer acquisition costs",
        "E-commerce ROI Analysis: Track return on investment for marketing campaigns",
        "Online Store Conversion Optimization: A/B testing for checkout and product pages",
        "E-commerce Marketing Attribution: Understand which channels drive the most sales",
        "Sales Performance Reporting: Detailed analytics that track sales and revenue"
      ],
      results: [
        "55% reduction in customer acquisition costs",
        "320% improvement in marketing ROI",
        "280% increase in online sales conversion rates"
      ]
    }
  ]

  const ecommerceMarketingProcess = [
    {
      step: "01",
      title: "E-commerce Marketing Assessment",
      description: "We begin every e-commerce marketing engagement with a comprehensive assessment of your current marketing, competitive analysis, and customer persona development. This strategic foundation ensures your marketing aligns with your business goals and customer needs."
    },
    {
      step: "02",
      title: "E-commerce Setup & Optimization",
      description: "Our team optimizes your online store, product pages, and digital assets for sales conversion. We implement e-commerce-specific SEO, customer communication systems, and conversion optimization."
    },
    {
      step: "03",
      title: "E-commerce Campaign Launch & Management",
      description: "We deploy multi-channel e-commerce marketing campaigns across content, paid advertising, and customer engagement. Continuous optimization and sales tracking ensure maximum customer acquisition and revenue growth."
    },
    {
      step: "04",
      title: "Sales Growth & Business Scaling",
      description: "We focus on scaling successful campaigns, expanding customer acquisition channels, and optimizing for long-term business growth. Our data-driven approach ensures continuous improvement and sustainable sales growth."
    }
  ]

  const whyChooseEcommerceMarketing = [
    "Proven Results: Our e-commerce clients see average 320% increase in online sales and 55% reduction in customer acquisition costs",
    "Expert Team: Specialized e-commerce marketing experts with deep online retail, marketplace, and digital commerce experience",
    "E-commerce Focus: All our marketing services are designed specifically for online stores and e-commerce businesses",
    "Comprehensive Solutions: Complete e-commerce marketing from strategy to execution with transparent pricing starting from $2,500",
    "Industry Expertise: Deep understanding of e-commerce marketing across fashion, beauty, electronics, home goods, and food industries",
    "Sales-Driven Strategy: Performance analytics, customer journey tracking, and conversion optimization for measurable sales growth",
    "Platform Expertise: Experience with Shopify, WooCommerce, Magento, BigCommerce, Amazon, and other major e-commerce platforms",
    "Flexible Engagement: Project-based and ongoing marketing options with no long-term contracts required"
  ]

  const ecommerceIndustriesWeServe = [
    {
      icon: ShoppingCart,
      title: "Fashion & Apparel",
      description: "Comprehensive e-commerce marketing for fashion brands and apparel retailers that need to attract customers, build brand awareness, and compete in competitive fashion markets.",
      services: [
        "Fashion e-commerce marketing",
        "Apparel brand promotion",
        "Fashion social commerce",
        "Fashion influencer marketing",
        "Fashion brand reputation management"
      ],
      results: "350% increase in online sales, 280% improvement in brand visibility"
    },
    {
      icon: Heart,
      title: "Beauty & Personal Care",
      description: "Specialized e-commerce marketing for beauty brands and personal care companies that need to attract customers and build strong brand relationships.",
      services: [
        "Beauty brand marketing",
        "Personal care promotion",
        "Beauty influencer marketing",
        "Beauty social commerce",
        "Beauty brand SEO"
      ],
      results: "320% increase in online sales, 240% growth in brand engagement"
    },
    {
      icon: Monitor,
      title: "Electronics & Technology",
      description: "Targeted e-commerce marketing for electronics and technology companies that need to attract customers for both consumer and B2B products.",
      services: [
        "Electronics e-commerce marketing",
        "Tech product promotion",
        "Electronics SEO optimization",
        "Tech influencer marketing",
        "Electronics lead generation"
      ],
      results: "380% increase in online sales, 260% improvement in product visibility"
    },
    {
      icon: Home,
      title: "Home & Garden",
      description: "Innovative e-commerce marketing for home and garden retailers that need to reach homeowners and build brand trust.",
      services: [
        "Home goods e-commerce marketing",
        "Garden product promotion",
        "Home decor marketing",
        "Home goods SEO optimization",
        "Home brand marketing"
      ],
      results: "290% increase in online sales, 220% growth in customer engagement"
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      description: "Expert e-commerce marketing for food and beverage companies who need to attract customers seeking quality products and unique flavors.",
      services: [
        "Food e-commerce marketing",
        "Beverage brand promotion",
        "Food product SEO",
        "Customer acquisition campaigns",
        "Food brand marketing"
      ],
      results: "260% increase in online sales, 190% improvement in customer retention"
    },
    {
      icon: ShoppingBag,
      title: "Health & Wellness",
      description: "Specialized e-commerce marketing for health and wellness companies that need to reach health-conscious consumers and fitness enthusiasts.",
      services: [
        "Health product marketing",
        "Wellness brand promotion",
        "Health e-commerce SEO",
        "Fitness product campaigns",
        "Wellness brand marketing"
      ],
      results: "310% increase in online sales, 230% growth in customer engagement"
    }
  ]

  const ecommerceMarketingCaseStudies = [
    {
      industry: "Fashion E-commerce Brand",
      location: "California, United States",
      challenge: "Mid-size fashion brand was struggling with declining online sales and increased competition from larger fashion retailers in the market",
      solution: "Developed comprehensive e-commerce marketing strategy including complete website redesign, product SEO optimization, targeted PPC campaigns, and social commerce content marketing",
      results: [
        "350% increase in online sales",
        "280% improvement in product page rankings",
        "220% growth in website organic traffic",
        "55% reduction in cost per customer acquisition"
      ]
    },
    {
      industry: "Electronics Online Store",
      location: "Texas, United States",
      challenge: "Electronics retailer needed to expand customer base while competing against established online electronics stores in a saturated market",
      solution: "Implemented e-commerce SEO, product content marketing, conversion optimization, and customer review management to build trust and attract new customers",
      results: [
        "380% increase in online sales",
        "320% improvement in search engine rankings",
        "280% growth in organic website traffic",
        "65% increase in conversion rates"
      ]
    },
    {
      industry: "Multi-Platform Beauty Brand",
      location: "New York, United States",
      challenge: "Beauty brand wanted to standardize marketing across all e-commerce platforms while maintaining brand consistency and increasing product sales",
      solution: "Created unified e-commerce marketing strategy, centralized content creation, platform-specific SEO optimization, and implemented customer acquisition campaigns across all channels",
      results: [
        "420% return on marketing investment",
        "320% increase in online product sales",
        "290% improvement in brand visibility",
        "50% reduction in marketing costs per platform"
      ]
    }
  ]

  const ecommerceMarketingFaqData = [
    {
      question: "What makes e-commerce marketing different from other industries?",
      answer: "E-commerce marketing requires understanding online shopping behavior, product search patterns, conversion optimization, and the unique customer journey from product discovery to purchase. We focus on building trust, optimizing for sales conversion, and ensuring all marketing activities drive qualified traffic and maximize ROI while building customer loyalty."
    },
    {
      question: "How do you optimize for e-commerce conversion rates?",
      answer: "All our e-commerce marketing services are designed with conversion optimization at the forefront. We use data-driven practices, implement advanced tracking and analytics that measure sales performance, create conversion-focused content that drives purchases, and provide regular optimization audits to ensure ongoing improvement in sales conversion rates."
    },
    {
      question: "What's the typical timeline to see results for e-commerce marketing?",
      answer: "Immediate (0-30 days): Website optimization and conversion improvements. Short-term (1-3 months): Paid advertising results and sales growth. Medium-term (3-6 months): SEO traffic growth and content marketing impact. Long-term (6+ months): Sustainable organic growth and brand recognition in your market."
    },
    {
      question: "Do you work with small e-commerce businesses?",
      answer: "Yes! We have specific packages designed for small e-commerce businesses, focusing on cost-effective marketing strategies that drive sales growth without breaking the budget. Our starter packages begin at $2,500/month and include essential e-commerce marketing services tailored for smaller online stores."
    },
    {
      question: "How do you handle e-commerce platform integration?",
      answer: "Our team includes e-commerce marketing specialists who understand various e-commerce platforms, including Shopify, WooCommerce, Magento, BigCommerce, Amazon, and others. We ensure all marketing strategies are optimized for your specific platform while effectively promoting your products and building customer trust."
    },
    {
      question: "What's included in your e-commerce marketing services?",
      answer: "Our comprehensive e-commerce marketing includes conversion-optimized SEO, e-commerce PPC management, product content marketing, online store design, customer review management, e-commerce analytics, and ongoing strategy optimization. We provide end-to-end marketing support tailored to your online store's specific needs and customer demographics."
    },
    {
      question: "How do you approach content marketing for e-commerce businesses?",
      answer: "We create conversion-focused content that educates customers about your products and services, develop product education resources, write e-commerce blog posts that establish your expertise, create product-specific landing pages, and develop customer success stories that build trust and drive sales."
    },
    {
      question: "What types of e-commerce businesses do you serve?",
      answer: "Our e-commerce marketing expertise covers fashion brands, beauty companies, electronics retailers, home goods stores, food and beverage companies, health and wellness brands, and multi-category online stores. We adapt our marketing approach to each industry's unique requirements and customer needs."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads E-commerce Marketing",
        "description": "Specialized digital marketing agency for e-commerce businesses and online retailers. Drive sales growth with conversion-optimized SEO, PPC, and content marketing strategies.",
        "url": "https://frameleads.com/ecommerce",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/ecommerce-marketing-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Innovation Drive",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94107",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "ecommerce@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Digital Marketing for E-commerce",
        "areaServed": ["United States", "Global"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$2500-$20000",
          "description": "Professional e-commerce marketing with conversion optimization and transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "E-commerce Marketing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce SEO Services",
                "description": "Drive organic growth with conversion-optimized SEO for online stores"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce PPC Management",
                "description": "Accelerate sales growth with e-commerce advertising campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Content Marketing",
                "description": "Build brand authority and drive sales with product content"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": ecommerceMarketingFaqData.map(faq => ({
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
      <title>Digital Marketing for E-commerce & Retail | Drive Sales Growth with Expert E-commerce Marketing Services | Frameleads</title>
      <meta name="description" content="Transform your online store with proven e-commerce marketing strategies. Our specialized team delivers conversion-optimized SEO, PPC, and content marketing that drives sales growth and builds customer trust. Get your free consultation today." />
      <meta name="keywords" content="digital marketing for ecommerce, ecommerce digital marketing, ecommerce marketing services, retail digital marketing, online store marketing, ecommerce SEO services, digital marketing agency for ecommerce, ecommerce PPC management, retail marketing agency, ecommerce conversion optimization, shopify digital marketing services, amazon advertising management services, ecommerce email marketing automation, social commerce marketing strategy, retail media advertising services" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/ecommerce" />
      <meta property="og:title" content="Digital Marketing for E-commerce & Retail | Drive Sales Growth with Expert E-commerce Marketing Services | Frameleads" />
      <meta property="og:description" content="Transform your online store with proven e-commerce marketing strategies. Our specialized team delivers conversion-optimized SEO, PPC, and content marketing that drives sales growth and builds customer trust. Get your free consultation today." />
      <meta property="og:url" content="https://frameleads.com/ecommerce" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing for E-commerce & Retail | Drive Sales Growth with Expert E-commerce Marketing Services | Frameleads" />
      <meta name="twitter:description" content="Transform your online store with proven e-commerce marketing strategies. Our specialized team delivers conversion-optimized SEO, PPC, and content marketing that drives sales growth and builds customer trust. Get your free consultation today." />
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
                🛒 Premier Digital Marketing for E-commerce & Retail - 320% Online Sales Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Digital Marketing for E-commerce & Retail |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Transform Your Online Store Into a Sales Magnet
              </span>{" "}
              With Conversion-Optimized Strategies That Drive Sales Growth & Build Customer Trust
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              The global e-commerce market is projected to reach $8.1 trillion by 2026, with 87% of consumers beginning their shopping journey with an online search. With 73% of consumers preferring to shop on mobile devices, you need a specialized digital marketing partner who understands conversion optimization and the unique challenges of e-commerce marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free E-commerce Marketing Consultation - Start Today
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
                <span>✓ Proven Results: 320% Online Sales Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Specialized E-commerce Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Conversion Optimized: Starting $2,500</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ 200+ Successful E-commerce Marketing Campaigns</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🛒 Key Results We Deliver for E-commerce Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">320%</div>
                  <div className="text-gray-600 text-sm">Increase in Online Sales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">55%</div>
                  <div className="text-gray-600 text-sm">Reduction in Customer Acquisition Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">280%</div>
                  <div className="text-gray-600 text-sm">Improvement in Product Page Rankings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">220%</div>
                  <div className="text-gray-600 text-sm">Growth in Website Organic Traffic</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven E-commerce Marketing Results Across All Retail Industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our conversion-optimized e-commerce marketing approach delivers measurable growth for online stores through strategic content marketing, paid advertising, and comprehensive sales optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">320%</div>
                <div className="text-gray-600 text-sm">Increase in Online Sales</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">55%</div>
                <div className="text-gray-600 text-sm">Reduction in Customer Acquisition Costs</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">280%</div>
                <div className="text-gray-600 text-sm">Improvement in Product Page Rankings</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">220%</div>
                <div className="text-gray-600 text-sm">Growth in Website Organic Traffic</div>
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
                Why Choose Frameleads for E-commerce Marketing?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier digital marketing agency for e-commerce businesses, combining specialized e-commerce marketing expertise with deep understanding of conversion optimization and online retail challenges. Our comprehensive approach ensures that every aspect of your marketing delivers maximum impact while driving sales growth and customer acquisition.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛒 E-commerce Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 320% increase in online sales and 55% reduction in customer acquisition costs for our e-commerce clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Specialized e-commerce marketing experts with deep online retail, marketplace, and digital commerce experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">E-commerce Focus: All our marketing services are designed specifically for online stores and e-commerce businesses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry Expertise: Deep understanding across fashion, beauty, electronics, home goods, food, and multi-category online stores</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 E-commerce Marketing Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Starting from $2,500 with transparent pricing and proven results across all e-commerce marketing stages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Sales-Driven Strategy: We understand the unique challenges of marketing e-commerce businesses while maximizing conversion rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Customer-Focused Strategy: Performance analytics, customer journey tracking, and conversion optimization for measurable sales growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Platform Expertise: Experience with Shopify, WooCommerce, Magento, BigCommerce, Amazon, and other major e-commerce platforms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Marketing Dashboard</h3>
                  <p className="text-gray-600">Real-time marketing analytics and performance insights for optimal sales growth</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Marketing Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized E-commerce Marketing for Maximum Sales Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive e-commerce marketing services are designed to deliver sales success and drive business growth through conversion-optimized content marketing, paid advertising, and comprehensive optimization solutions.
            </p>
          </div>

          <div className="space-y-12">
            {ecommerceMarketingServicesList.map((service, index) => {
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

      {/* Technology Marketing Pricing */}
      <section className="relative py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent E-commerce Marketing Pricing & Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional e-commerce marketing packages designed for online stores and e-commerce businesses of all sizes. All packages include conversion-optimized content marketing, paid advertising, and comprehensive optimization with transparent pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Financial Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter E-commerce Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small e-commerce businesses and online stores</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>E-commerce website optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>E-commerce content marketing (4-6 articles/month)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>E-commerce SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly performance reporting</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
              </CardContent>
            </Card>

            {/* Professional Financial Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-[#FF6B35]/50 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/30 ring-2 ring-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Most Popular</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional E-commerce Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$5,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for growing e-commerce businesses and online retailers</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced e-commerce SEO and content marketing</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-channel e-commerce PPC management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>E-commerce reputation management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Bi-weekly strategy calls and optimization</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Financial Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise E-commerce Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$10,500+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large e-commerce businesses, multi-platform retailers, and comprehensive e-commerce marketing solutions</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full-funnel e-commerce marketing strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-platform e-commerce marketing coordination</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced e-commerce analytics and attribution</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated e-commerce marketing team</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">*All packages include free consultation, strategy development, and 30-day optimization period</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored e-commerce marketing solution</Link></p>
          </div>
        </div>
      </section>

      {/* Technology Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven E-commerce Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic e-commerce marketing approach combining strategic planning, conversion-optimized execution, and comprehensive optimization to deliver measurable results through content marketing, paid advertising, and sales growth solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceMarketingProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized E-commerce Marketing Expertise Across Key Retail Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key retail sectors, with deep understanding of unique marketing needs and industry-specific requirements for each e-commerce vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceIndustriesWeServe.map((industry, index) => {
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

      {/* Technology Marketing Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">E-commerce Marketing Success Stories: Real Results from Real Online Stores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped e-commerce businesses achieve remarkable growth through strategic marketing, conversion-optimized strategies, and comprehensive sales growth solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ecommerceMarketingCaseStudies.map((study, index) => (
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

      {/* Technology Marketing Services Areas */}
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">E-commerce Marketing Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive e-commerce marketing across content marketing, paid advertising, reputation management, and sales optimization, helping online stores create high-performing marketing strategies that drive growth and customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceMarketingServices.map((service, index) => (
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
              Frequently Asked Questions About E-commerce Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about professional e-commerce marketing and how Frameleads can help your online store achieve measurable results through strategic marketing, conversion-optimized strategies, and comprehensive sales growth solutions.
            </p>
          </div>

          <div className="space-y-6">
            {ecommerceMarketingFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Online Store with Expert E-commerce Marketing Services?"
        description="Partner with Frameleads, the most trusted e-commerce marketing agency. Get your free e-commerce marketing consultation and discover how we can help you achieve measurable growth and sales success through strategic content marketing, paid advertising, and comprehensive optimization."
        primaryButtonText="Start Your E-commerce Marketing Transformation Today - Free Consultation"
        secondaryButtonText="Get Your Free E-commerce Marketing Strategy Session"
      />

      {/* Comprehensive Technology Marketing Services */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete E-commerce Marketing Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>e-commerce marketing agency</strong>, we offer comprehensive services across <strong>Content Marketing</strong>, <strong>Paid Advertising</strong>, <strong>Reputation Management</strong>, and <strong>Sales Optimization</strong>. 
              Explore our specialized services designed specifically for online stores and e-commerce businesses for sales growth and customer acquisition success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Content Marketing & SEO */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce Content Marketing & SEO</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Drive organic growth with conversion-optimized content that educates customers and converts prospects into sales through strategic e-commerce content marketing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Product-focused content creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Product education resources</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore E-commerce Content Marketing
                </Link>
              </CardContent>
            </Card>

            {/* Paid Advertising & PPC */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce PPC & Paid Advertising</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Accelerate sales growth with conversion-optimized advertising campaigns that maximize return on ad spend while minimizing customer acquisition costs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Google Ads for E-commerce</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce social media advertising</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce lead generation</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore E-commerce PPC
                </Link>
              </CardContent>
            </Card>

            {/* Marketing Automation & Lead Nurturing */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce Reputation Management</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Protect and enhance your online store's reputation with professional reputation management services that build customer trust and drive sales.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Customer review management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Online reputation monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce crisis communication</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Reputation Management
                </Link>
              </CardContent>
            </Card>

            {/* Analytics & Performance Optimization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce Analytics & Performance Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Track and optimize e-commerce-critical metrics including customer acquisition cost, sales conversion rates, and customer lifetime value with advanced analytics.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Customer acquisition tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce ROI analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Sales performance reporting</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore E-commerce Analytics
                </Link>
              </CardContent>
            </Card>

            {/* Brand Positioning & Thought Leadership */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce Website Design & Development</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create a professional, high-converting online store that builds customer trust and drives sales with conversion-optimized e-commerce website design.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Conversion-optimized web design</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce platform integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Mobile commerce optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore E-commerce Web Design
                </Link>
              </CardContent>
            </Card>

            {/* Growth Marketing & Conversion Optimization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Customer Acquisition & Conversion Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Transform website visitors into customers with data-driven optimization of every touchpoint in your customer journey from awareness to purchase.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce landing page optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">A/B testing for checkout optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Customer conversion optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Customer Acquisition
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free E-commerce Marketing Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current e-commerce marketing performance and sales growth opportunities</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">E-commerce ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your e-commerce marketing ROI and optimize your investment for maximum sales growth</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">E-commerce Marketing Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to e-commerce marketing strategies and conversion-optimized best practices for online stores</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn e-commerce marketing with our expert-led courses and training programs for online store growth</p>
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
              <Rocket className="h-6 w-6" />
            </Button>
          </Link>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💰
          </motion.div>
        </motion.div>
      </motion.div>

      
    </div>
    </>
  )
}
