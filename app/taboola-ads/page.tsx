'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, Smartphone as Mobile, MessageCircle, Search, ShoppingBag, Users as People, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, Zap as Lightning, ExternalLink, Brain, Target as TargetIcon, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, PieChart as PieChartIcon, LineChart, DollarSign as DollarIcon, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Award as AwardIcon, Trophy, Medal, Crown as CrownIcon, Star as StarIcon, ThumbsUp as ThumbsUpIcon, MessageSquare as MessageSquareIcon, Share2 as Share2Icon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon, ArrowRight as ArrowRightIcon, Play as PlayIcon, Eye as EyeIcon, BarChart as BarChartIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon, Users as UsersIcon, Building2 as Building2Icon, Briefcase as BriefcaseIcon, Shield as ShieldIcon, Globe as GlobeIcon, DollarSign as DollarSignIcon, PieChart as PieChartIcon, Settings as SettingsIcon, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, ShoppingCart as ShoppingCartIcon, Heart as HeartIcon, GraduationCap as GraduationCapIcon, Palette as PaletteIcon, Crown as CrownIcon, Euro as EuroIcon, Mobile as MobileIcon, MessageCircle as MessageCircleIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon, People as PeopleIcon, BarChart as BarChartIcon, ArrowRight as ArrowRightIcon, Play as PlayIcon, Eye as EyeIcon, ThumbsUp as ThumbsUpIcon, Share2 as Share2Icon, Download as DownloadIcon, PlayCircle as PlayCircleIcon, Sparkles as SparklesIcon, Megaphone as MegaphoneIcon, Camera as CameraIcon, Music as MusicIcon, Hash as HashIcon, Lightning as LightningIcon } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function TaboolaAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const taboolaAdsServices = [
    {
      category: "Native Ad Creation & Optimization",
      areas: ["High-Converting Native Ads", "A/B Testing", "Dynamic Keyword Insertion", "Industry-Specific Creative", "Publisher Content Matching", "Performance Optimization"],
      description: "Professional native advertisements designed to seamlessly blend with premium publisher content for maximum engagement and conversion"
    },
    {
      category: "Advanced Taboola Targeting", 
      areas: ["Behavioral Targeting", "Contextual Targeting", "Retargeting Campaigns", "Custom Audiences", "Geographic Precision", "Demographic Targeting"],
      description: "Strategic targeting using Taboola's AI-driven platform to reach high-intent audiences during their content consumption journey"
    },
    {
      category: "Budget Optimization & Cost Management",
      areas: ["Strategic Bid Management", "CPC Optimization", "ROI-Focused Campaigns", "Daily Budget Management", "Scaling Strategies", "Cost-Per-Session Optimization"],
      description: "Intelligent budget allocation and bid optimization to minimize advertising costs while maximizing return on investment"
    },
    {
      category: "Taboola Realize Platform Management",
      areas: ["AI-Driven Optimization", "Machine Learning Algorithms", "Automated Audience Discovery", "Predictive Analytics", "Cross-Platform Attribution", "Performance Monitoring"],
      description: "Comprehensive management of Taboola's advanced platform features for automated optimization and performance enhancement"
    },
    {
      category: "Conversion Tracking & Analytics",
      areas: ["Taboola Pixel Implementation", "Google Analytics Integration", "Cross-Platform Attribution", "Customer Lifetime Value", "Real-Time Reporting", "Performance Dashboards"],
      description: "Advanced tracking setup and comprehensive analytics to measure campaign performance and optimize for business objectives"
    },
    {
      category: "Creative Innovation & Testing",
      areas: ["Dynamic Content Optimization", "Real-Time Image Selection", "Automated A/B Testing", "Publisher-Specific Customization", "Video Creative Development", "Headline Optimization"],
      description: "Continuous creative innovation and testing to maximize engagement and conversion rates across different publisher networks"
    }
  ]

  const taboolaAdsServicesList = [
    {
      icon: Target,
      title: "Complete Taboola Ads Management Services",
      description: "Our comprehensive Taboola advertising services cover every aspect of native advertising campaigns from strategic planning to creative production and advanced optimization for maximum ROI across premium publisher networks.",
      features: [
        "Strategic Campaign Planning: Custom Taboola marketing strategy development and audience research",
        "Native Ad Creation: High-converting native advertisements that blend seamlessly with publisher content",
        "Advanced Targeting & Optimization: Behavioral, contextual, and demographic targeting for high-intent audiences",
        "A/B Testing: Multiple creative variations for optimal performance across publisher networks",
        "Real-time Optimization: Continuous campaign monitoring and improvement with AI-powered insights"
      ],
      results: [
        "400% increase in website traffic",
        "5.2X return on ad spend",
        "35% reduction in customer acquisition cost"
      ]
    },
    {
      icon: Brain,
      title: "Native Ad Creation & Optimization",
      description: "Professional native advertisements designed to seamlessly blend with premium publisher content for maximum engagement and conversion, leveraging Taboola's AI-driven platform.",
      features: [
        "High-Converting Native Ads: Content-matching advertisements that feel natural",
        "Dynamic Keyword Insertion: Personalized headlines based on user behavior",
        "A/B Testing: Continuous optimization of headlines, images, and CTAs",
        "Industry-Specific Creative: Tailored strategies for different business verticals",
        "Publisher Content Matching: Seamless integration with editorial content"
      ],
      results: [
        "30% lower cost-per-session vs display advertising",
        "26% lower cost-per-lead vs social media",
        "10% lower bounce rates due to contextual relevance"
      ]
    },
    {
      icon: TargetIcon,
      title: "Advanced Taboola Targeting Strategies",
      description: "Strategic targeting using Taboola's AI-driven platform to reach high-intent audiences during their content consumption journey with precision and efficiency.",
      features: [
        "Behavioral Targeting: Reach users based on content consumption patterns",
        "Contextual Targeting: Place ads alongside relevant premium content",
        "Retargeting Campaigns: Re-engage users who have shown interest",
        "Custom Audiences: Build targeted segments based on business objectives",
        "Geographic Precision: Target specific locations and demographics"
      ],
      results: [
        "Higher engagement rates through native content integration",
        "Improved conversion rates with contextual relevance",
        "Better audience quality and intent matching"
      ]
    },
    {
      icon: DollarSign,
      title: "Budget Optimization & Cost Management",
      description: "Intelligent budget allocation and bid optimization to minimize advertising costs while maximizing return on investment through strategic campaign management.",
      features: [
        "Strategic Bid Management: Optimize bids for maximum ROI",
        "CPC Optimization: Starting from $0.01 per click",
        "ROI-Focused Campaigns: Performance-based budget allocation",
        "Daily Budget Management: Intelligent scaling based on performance",
        "Cost-Per-Session Optimization: Minimize acquisition costs"
      ],
      results: [
        "Starting budget: $10/day minimum spend",
        "Average CPC range: $0.01 - $2.00 per click",
        "Typical CPM: $5 - $20 per 1,000 impressions"
      ]
    },
    {
      icon: BarChart3,
      title: "Taboola Realize Platform Management",
      description: "Comprehensive management of Taboola's advanced platform features for automated optimization and performance enhancement using AI-driven technology.",
      features: [
        "AI-Driven Optimization: Machine learning algorithms for bid optimization",
        "Automated Audience Discovery: AI-powered audience expansion",
        "Predictive Analytics: Forecast campaign performance and trends",
        "Cross-Platform Attribution: Track conversions across multiple touchpoints",
        "Performance Monitoring: Real-time campaign optimization"
      ],
      results: [
        "Automated optimization reduces manual workload",
        "Improved performance through AI insights",
        "Better attribution and conversion tracking"
      ]
    },
    {
      icon: Activity,
      title: "Conversion Tracking & Analytics",
      description: "Advanced tracking setup and comprehensive analytics to measure campaign performance and optimize for business objectives with detailed reporting.",
      features: [
        "Taboola Pixel Implementation: Complete conversion tracking setup",
        "Google Analytics Integration: Comprehensive reporting and insights",
        "Cross-Platform Attribution: Track customer journey across channels",
        "Customer Lifetime Value: Measure long-term customer value",
        "Real-Time Reporting: Live performance dashboards and insights"
      ],
      results: [
        "Complete visibility into campaign performance",
        "Data-driven optimization decisions",
        "Measurable ROI improvements and insights"
      ]
    }
  ]

  const taboolaAdsProcess = [
    {
      step: "01",
      title: "Strategic Analysis & Setup",
      description: "Comprehensive market research and competitor analysis, target audience research and persona development, Taboola Realize platform configuration, and conversion tracking implementation for optimal campaign performance."
    },
    {
      step: "02",
      title: "Creative Development & Testing",
      description: "High-converting native ad creative production using Taboola's Headline Analyzer, image selection based on TaboolaTrends data, video creative development, and multi-variate testing of ad elements for maximum engagement."
    },
    {
      step: "03",
      title: "Campaign Launch & Optimization",
      description: "Gradual budget scaling based on performance, real-time bid optimization using SmartBid technology, publisher performance analysis, and negative targeting implementation for quality control and cost efficiency."
    },
    {
      step: "04",
      title: "Performance Enhancement",
      description: "Weekly performance reviews and strategy adjustments, conversion rate optimization through landing page testing, audience expansion using similar audiences, and cross-platform integration with search and social campaigns."
    },
    {
      step: "05",
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive performance reporting with ROI analysis, cross-platform attribution modeling, customer lifetime value tracking, and strategic planning for campaign scaling and optimization."
    },
    {
      step: "06",
      title: "Creative Innovation & Scaling",
      description: "Dynamic content optimization, real-time image selection based on performance data, automated A/B testing, and publisher-specific creative customization for sustained growth and performance improvement."
    }
  ]

  const whyChooseTaboolaAds = [
    "Proven Results: Our clients see average 400% increase in website traffic and 5.2X return on ad spend",
    "Expert Team: Certified Taboola advertising specialists with 5+ years experience managing $10M+ in ad spend",
    "Cost-Effective: Starting from $10/day with CPC as low as $0.01 and 30% lower cost-per-session vs display advertising",
    "Full-Service: Complete Taboola marketing strategy, native ad creation, and AI-driven optimization",
    "Massive Reach: Access to premium publisher networks with 1+ billion monthly users worldwide",
    "Superior Engagement: 26% lower cost-per-lead vs social media with 10% lower bounce rates",
    "AI Innovation: Leading expertise in Taboola's AI-driven platform and machine learning optimization",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing and performance guarantees"
  ]

  const taboolaAdsCaseStudies = [
    {
      industry: "E-commerce Brand",
      location: "Global",
      challenge: "Global online retailer struggling with high cost-per-acquisition and low engagement from traditional display advertising",
      solution: "Implemented comprehensive Taboola native advertising strategy with optimized creative content, advanced targeting, and AI-driven optimization",
      results: [
        "400% increase in website traffic",
        "5.2X return on ad spend",
        "35% reduction in customer acquisition cost",
        "25% increase in average order value"
      ]
    },
    {
      industry: "B2B Software Company",
      location: "Global",
      challenge: "B2B software company experiencing high user acquisition costs and poor lead quality from other advertising platforms",
      solution: "Restructured campaigns with Taboola B2B lead generation targeting decision-makers during content consumption, contextual targeting, and performance-based optimization",
      results: [
        "300 qualified leads per month",
        "$150 average cost per lead",
        "22% lead-to-customer conversion rate",
        "6-month payback period on ad investment"
      ]
    },
    {
      industry: "Healthcare Provider",
      location: "Global",
      challenge: "Healthcare provider needed to increase patient acquisition for specialized services and build trust with health-conscious consumers",
      solution: "Comprehensive Taboola healthcare advertising strategy with compliant native ads, contextual targeting on health publications, and trust-building creative content",
      results: [
        "250% increase in appointment bookings",
        "$85 cost per patient acquisition",
        "40% increase in brand search volume",
        "95% audience reach in target demographics"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Drive product discovery and sales through Taboola shopping ads and native product promotions that appear alongside relevant content on premium publisher sites.",
      services: [
        "Taboola shopping ads and optimization",
        "Native product promotions",
        "E-commerce conversion optimization",
        "Cross-platform attribution tracking"
      ],
      results: "400% increase in website traffic, 5.2X return on ad spend"
    },
    {
      icon: Building2,
      title: "B2B Lead Generation",
      description: "Generate high-quality leads with Taboola B2B campaigns targeting decision-makers during their content consumption journey on professional publications.",
      services: [
        "B2B lead generation campaigns",
        "Decision-maker targeting",
        "Professional publication placements",
        "Lead quality optimization"
      ],
      results: "300 qualified leads per month, $150 average cost per lead"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Reach health-conscious consumers with compliant Taboola health advertising strategies that educate and convert through trusted publisher networks.",
      services: [
        "Compliant health advertising",
        "Trusted publisher placements",
        "Educational content strategies",
        "Patient acquisition campaigns"
      ],
      results: "250% increase in appointment bookings, $85 cost per patient acquisition"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Build trust and drive conversions with Taboola financial ads placed on reputable news and finance websites, reaching users in discovery mode.",
      services: [
        "Financial services advertising",
        "Trust-building creative content",
        "News and finance website placements",
        "Compliance-focused campaigns"
      ],
      results: "Improved brand trust, higher conversion rates"
    },
    {
      icon: Monitor,
      title: "Technology & SaaS",
      description: "Promote software solutions and tech products through Taboola technology advertising campaigns targeting IT professionals and decision-makers.",
      services: [
        "Technology advertising campaigns",
        "IT professional targeting",
        "Software promotion strategies",
        "Decision-maker engagement"
      ],
      results: "Higher quality leads, improved conversion rates"
    }
  ]

  const taboolaAdsFaqData = [
    {
      question: "What are Taboola ads?",
      answer: "Taboola ads are native advertisements that appear as content recommendations on premium publisher websites. Unlike traditional banner ads, Taboola native ads blend seamlessly with editorial content, appearing as 'you may also like' or 'recommended content' sections, providing a non-intrusive advertising experience."
    },
    {
      question: "How much do Taboola ads cost?",
      answer: "Taboola advertising costs vary based on targeting, competition, and industry. Minimum daily budgets start at $10, with CPC ranging from $0.01 to $2.00. Most businesses see effective results with $50-100 daily budgets. Our management fees are 15% of ad spend with a minimum of $1,500/month."
    },
    {
      question: "How does Taboola compare to Google Ads?",
      answer: "While Google Ads targets search intent, Taboola focuses on discovery marketing. Taboola typically offers 30% lower cost-per-session and 26% lower cost-per-lead compared to traditional display advertising, making it ideal for top-of-funnel awareness and lead generation campaigns."
    },
    {
      question: "What types of businesses benefit from Taboola advertising?",
      answer: "Taboola ads work well for e-commerce, B2B services, healthcare, finance, and content-driven businesses. Any company looking to reach engaged audiences during content consumption can benefit from Taboola native advertising, especially those seeking cost-effective discovery marketing."
    },
    {
      question: "How long does it take to see results from Taboola campaigns?",
      answer: "Initial Taboola campaign results typically appear within 1-2 weeks, with optimal performance achieved after 30-60 days of optimization. The learning phase allows Taboola's AI to optimize for your specific conversion goals and audience behavior patterns."
    },
    {
      question: "Do you provide Taboola ads creative services?",
      answer: "Yes, our Taboola advertising services include comprehensive creative production: native ad creation, headline optimization using Taboola's Headline Analyzer, image selection based on TaboolaTrends data, video creative development, and landing page optimization for native traffic."
    },
    {
      question: "What industries work best with Taboola advertising?",
      answer: "Taboola marketing is most effective for e-commerce, B2B lead generation, healthcare, financial services, technology, and content-driven businesses. We have specialized expertise across these industries with proven strategies for reaching high-intent audiences during content consumption."
    },
    {
      question: "How do you measure Taboola ads performance?",
      answer: "We track comprehensive Taboola ads metrics including impressions, clicks, conversions, cost-per-acquisition, return on ad spend (ROAS), audience insights, and cross-platform attribution. Our monthly reports include detailed performance analysis, optimization recommendations, and strategic insights for continuous improvement."
    },
    {
      question: "Can you help with Taboola Pixel setup?",
      answer: "Absolutely. We provide complete Taboola advertising tracking setup including Taboola Pixel implementation, conversion event configuration, Google Analytics integration, cross-platform attribution modeling, and customer lifetime value tracking for comprehensive campaign optimization."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Taboola Ads Management Services",
        "description": "Professional Taboola advertising and native marketing services for businesses worldwide. Expert Taboola ads management, creative production, and ROI-focused native advertising strategies for premium publisher networks.",
        "url": "https://frameleads.com/taboola-ads",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/taboola-ads-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Marketing Blvd",
            "addressLocality": "Marketing City",
            "addressRegion": "MC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "taboola@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Taboola Advertising Management",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "priceRange": "$1500-$9999",
          "description": "Professional Taboola ads management services with transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Taboola Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taboola Ads Management",
                "description": "Complete Taboola native advertising campaign management and optimization"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Taboola Creative Production",
                "description": "Professional native ad creation and optimization for Taboola marketing campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Taboola Platform Management",
                "description": "AI-driven optimization and advanced targeting using Taboola Realize platform"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": taboolaAdsFaqData.map(faq => ({
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
      <title>Expert Taboola Ads Management Services | Premium Native Advertising Agency | Frameleads</title>
      <meta name="description" content="Transform your digital marketing with our certified Taboola ads management services. Expert native advertising campaigns, advanced targeting, and ROI optimization. Start from $10/day." />
      <meta name="keywords" content="Taboola ads, Taboola advertising, Taboola campaign management, Taboola native ads, Taboola ads agency, Taboola advertising cost, Taboola native advertising management, Taboola Realize platform, Taboola B2B campaigns, Taboola shopping ads" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/taboola-ads" />
      <meta property="og:title" content="Expert Taboola Ads Management | Certified Native Advertising Agency | Frameleads" />
      <meta property="og:description" content="Drive results with our certified Taboola ads management services. Expert native advertising campaigns, advanced targeting, and ROI optimization. Start from $10/day." />
      <meta property="og:url" content="https://frameleads.com/taboola-ads" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert Taboola Ads Management | Certified Native Advertising Agency | Frameleads" />
      <meta name="twitter:description" content="Drive results with our certified Taboola ads management services. Expert native advertising campaigns, advanced targeting, and ROI optimization. Start from $10/day." />
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
                🎯 Taboola Advertising Experts - 400% Website Traffic Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Expert Taboola Ads Management Services |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Drive Premium Native Advertising Results
              </span>{" "}
              Through Strategic Campaigns & AI Optimization
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your digital marketing strategy with our certified Taboola ads management services. As a premier <strong>Taboola advertising agency</strong>, we specialize in creating high-converting native advertising campaigns that seamlessly blend with premium publisher content, driving qualified traffic and maximizing your ROI through strategic <strong>Taboola campaign management</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Start Your Taboola Campaign Today - Free Strategy Session
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
                <span>✓ Proven Results: 400% Traffic Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: 5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Cost-Effective: Starting $10/day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ No Long-Term Contracts</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Trusted by 500+ Businesses Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">1B+</div>
                  <div className="text-gray-600 text-sm">Monthly Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$0.01</div>
                  <div className="text-gray-600 text-sm">Starting CPC</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">400%</div>
                  <div className="text-gray-600 text-sm">Website Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">30%</div>
                  <div className="text-gray-600 text-sm">Lower Cost-Per-Session</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Taboola Advertising Results Across Global Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable results for businesses worldwide through Taboola native advertising, AI-driven optimization, and premium publisher network targeting</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">400%</div>
                <div className="text-gray-600 text-sm">Website Traffic Increase</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">1B+</div>
                <div className="text-gray-600 text-sm">Monthly Active Users</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">5.2X</div>
                <div className="text-gray-600 text-sm">Return on Ad Spend</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">30%</div>
                <div className="text-gray-600 text-sm">Lower Cost-Per-Session</div>
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
                Why Choose Frameleads for Taboola Advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your digital marketing strategy with our certified <strong>Taboola ads management services</strong>. As a premier <strong>Taboola advertising agency</strong>, we specialize in creating high-converting native advertising campaigns that seamlessly blend with premium publisher content, driving qualified traffic and maximizing your ROI through strategic <strong>Taboola campaign management</strong>.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Taboola Advertising Platform Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 400% average website traffic increase for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Certified Taboola advertising specialists with 5+ years experience managing $10M+ in ad spend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Multi-Format Expertise: Native Ads, Taboola Realize Platform, Advanced Targeting, Creative Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Massive Reach: Access to 1+ billion monthly active users across premium publisher networks</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Taboola Advertising Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cost-Effective: Starting from $10/day with CPC as low as $0.01 and 30% lower cost-per-session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Marketing: E-commerce, B2B lead generation, healthcare, financial services, technology brands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">AI Innovation: Leading expertise in Taboola's AI-driven platform and machine learning optimization</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Taboola Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time Taboola advertising analytics and insights</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Taboola vs Competitors Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Taboola vs Competitors: Why Native Advertising Wins
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why <strong>Taboola ads</strong> outperform traditional advertising platforms through strategic native advertising placement and AI-driven optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Taboola vs Google Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Taboola vs Google Ads: The Native Advantage</h3>
                <p className="text-gray-600 mb-6">
                  While <strong>Google Ads focuses on search intent</strong>, <strong>Taboola excels in discovery marketing</strong>, reaching users when they're actively consuming content. Our comparative analysis shows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">30% lower cost-per-session compared to traditional display advertising</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">26% lower cost-per-lead vs social media platforms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">10% lower bounce rates due to contextual relevance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Higher engagement rates through native content integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Taboola vs Outbrain */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Taboola vs Outbrain: Platform Selection Expertise</h3>
                <p className="text-gray-600 mb-6">
                  As certified partners of both platforms, we select the optimal native advertising solution based on your:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Target audience demographics and behavior patterns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Content vertical requirements and publisher networks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Budget considerations and ROI objectives</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Geographic targeting needs and market penetration</span>
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
              Comprehensive Taboola Advertising Services for Maximum ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Taboola advertising services are designed to deliver native advertising success and drive business growth for companies worldwide through strategic campaigns, AI-driven optimization, and premium publisher network targeting.
            </p>
          </div>

          <div className="space-y-12">
            {taboolaAdsServicesList.map((service, index) => {
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
              Transparent Taboola Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Taboola ads management packages designed for businesses worldwide. All packages include campaign setup, native ad creation, and AI-driven optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Taboola Ads Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$1,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses new to Taboola</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Taboola campaign setup & optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Native ad creation & management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic targeting & audience research</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly performance reporting</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to $10k monthly ad spend management</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Taboola Advertising Solution</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$3,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for scaling e-commerce brands</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-campaign management (Native Ads + Advanced Targeting + Creative Optimization)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced audience targeting & lookalike audiences</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Creative production & A/B testing</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Taboola Realize platform optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to $25k monthly ad spend management</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Taboola Advertising</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$7,500+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large brands & agencies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom Taboola advertising strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>All Taboola ad formats (Native Ads, Taboola Realize Platform, Advanced Targeting, Creative Optimization)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Cross-platform integration management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated Taboola advertising strategist</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Unlimited ad spend management</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">*All packages include platform setup, content localization, and cultural adaptation services</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored Snapchat advertising solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Taboola Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic Taboola advertising approach combining strategic planning, native ad creation, and continuous optimization to deliver measurable results through data-driven campaign management and AI-powered performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taboolaAdsProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Taboola Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique Taboola advertising needs and native advertising strategies in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Taboola Advertising Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped companies worldwide achieve remarkable growth through strategic Taboola advertising campaigns, native advertising innovation, and AI-driven optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taboolaAdsCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Taboola Advertising Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Taboola advertising services across Native Ads, Taboola Realize Platform, Advanced Targeting, and Creative Optimization, helping businesses worldwide maximize their native advertising success and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taboolaAdsServices.map((service, index) => (
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
              Frequently Asked Questions About Taboola Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Taboola ads management services and how Frameleads can help your business achieve measurable results through native advertising and strategic optimization.
            </p>
          </div>

          <div className="space-y-6">
            {taboolaAdsFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Digital Marketing with Taboola Ads?"
        description="Partner with Frameleads, the most trusted Taboola advertising agency. Get your free consultation and discover how we can help you achieve exceptional results through strategic native advertising campaigns and AI-driven optimization."
        primaryButtonText="Start Your Taboola Campaign Today - Free Strategy Session"
        secondaryButtonText="Get Your Free Taboola Ads Audit"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Taboola Advertising Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>Taboola advertising agency</strong>, we offer comprehensive services across <strong>Native Ads</strong>, <strong>Taboola Realize Platform</strong>, <strong>Advanced Targeting</strong>, and <strong>Creative Optimization</strong>. 
              Explore our specialized services designed specifically for native advertising success and maximum ROI.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Taboola Native Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Taboola Native Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate native advertising with our comprehensive Taboola strategies for maximum engagement and conversion.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Native ad creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Content matching</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">High engagement optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Native Ads
                </Link>
              </CardContent>
            </Card>

            {/* Taboola Realize Platform */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Taboola Realize Platform</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  AI-driven optimization and advanced targeting using Taboola's machine learning algorithms for maximum performance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">AI-driven optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Machine learning algorithms</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Automated audience discovery</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Realize Platform
                </Link>
              </CardContent>
            </Card>

            {/* Advanced Taboola Targeting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Hash className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Advanced Taboola Targeting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic targeting using Taboola's AI-driven platform to reach high-intent audiences during their content consumption journey.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Behavioral targeting</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Contextual targeting</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Custom audience creation</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Advanced Targeting
                </Link>
              </CardContent>
            </Card>

            {/* Taboola Creative Optimization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Taboola Creative Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Professional creative development and A/B testing to maximize engagement and conversion rates across different publisher networks.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Creative A/B testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Dynamic content optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Publisher-specific customization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Creative Optimization
                </Link>
              </CardContent>
            </Card>

            {/* Taboola Analytics & Tracking */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Taboola Analytics & Tracking</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive tracking setup and performance analytics to measure ROI and optimize Taboola campaign performance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Taboola Pixel implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Cross-platform attribution</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Real-time reporting</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Analytics
                </Link>
              </CardContent>
            </Card>

            {/* Taboola Strategy & Consulting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Taboola Strategy & Consulting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic Taboola advertising consulting and training services for businesses looking to optimize their native advertising strategy.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Strategic consulting</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Creative optimization training</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Performance analysis</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Strategy Consulting
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Taboola Ads Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current Taboola advertising performance across Native Ads, Realize Platform, and Advanced Targeting</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Taboola Ads ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your Taboola advertising ROI and optimize your budget allocation for native advertising campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Taboola Advertising Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to Taboola advertising strategies and best practices for native advertising and campaign optimization</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn Taboola advertising with our expert-led courses and training programs for native advertising and campaign optimization</p>
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
              <Video className="h-6 w-6" />
            </Button>
          </Link>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📱
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
    </>
  )
}
