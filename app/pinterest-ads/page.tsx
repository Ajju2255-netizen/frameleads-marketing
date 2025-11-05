'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, Smartphone as Mobile, MessageCircle, Search, ShoppingBag, Users as People, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, Zap as Lightning, ExternalLink, Brain, Target as TargetIcon, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, PieChart as PieChartIcon, LineChart, DollarSign as DollarIcon, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Award as AwardIcon, Trophy, Medal, Crown as CrownIcon, Star as StarIcon, ThumbsUp as ThumbsUpIcon, MessageSquare as MessageSquareIcon, Share2 as Share2Icon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon, ArrowRight as ArrowRightIcon, Play as PlayIcon, Eye as EyeIcon, BarChart as BarChartIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon, Users as UsersIcon, Building2 as Building2Icon, Briefcase as BriefcaseIcon, Shield as ShieldIcon, Globe as GlobeIcon, DollarSign as DollarSignIcon, PieChart as PieChartIcon, Settings as SettingsIcon, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, ShoppingCart as ShoppingCartIcon, Heart as HeartIcon, GraduationCap as GraduationCapIcon, Palette as PaletteIcon, Crown as CrownIcon, Euro as EuroIcon, Mobile as MobileIcon, MessageCircle as MessageCircleIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon, People as PeopleIcon, BarChart as BarChartIcon, ArrowRight as ArrowRightIcon, Play as PlayIcon, Eye as EyeIcon, ThumbsUp as ThumbsUpIcon, Share2 as Share2Icon, Download as DownloadIcon, PlayCircle as PlayCircleIcon, Sparkles as SparklesIcon, Megaphone as MegaphoneIcon, Camera as CameraIcon, Music as MusicIcon, Hash as HashIcon, Lightning as LightningIcon, Home, Coffee } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function PinterestAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const pinterestAdsServices = [
    {
      category: "Strategic Pinterest Promoted Pins",
      areas: ["Pinterest Keyword Research", "High-Converting Pin Creative", "Audience Targeting", "Cross-Platform Tracking", "A/B Testing", "Performance Optimization"],
      description: "Strategic promoted pin campaigns optimized for high-intent keywords, featuring advanced Pinterest SEO, responsive pin formats, and continuous performance optimization"
    },
    {
      category: "Pinterest Shopping Campaign Management", 
      areas: ["Product Catalog Integration", "Rich Pins Setup", "Shopping Ads Creation", "Seasonal Strategies", "Product Feed Optimization", "Sales Tracking"],
      description: "Comprehensive Pinterest Shopping campaign management including product catalog setup, rich pins optimization, and shopping ads to drive product sales"
    },
    {
      category: "Pinterest Display & Video Advertising",
      areas: ["Video Pin Creation", "Carousel Ad Development", "Story Pins Campaigns", "Brand Awareness", "Visual Storytelling", "Engagement Optimization"],
      description: "Compelling video pins and carousel advertising campaigns that build brand awareness, drive engagement, and reach customers across Pinterest's visual discovery platform"
    },
    {
      category: "Pinterest Landing Page Optimization",
      areas: ["Pinterest-Specific Design", "Mobile-First Optimization", "Conversion Rate Optimization", "Visual Consistency", "Pinterest Pixel Implementation", "User Experience"],
      description: "Comprehensive landing page optimization services that align with your Pinterest ad campaigns to improve conversion rates and user experience"
    },
    {
      category: "Pinterest Analytics & Reporting",
      areas: ["Pinterest Analytics Setup", "Performance Reporting", "Audience Insights", "Conversion Tracking", "ROI Analysis", "Strategic Recommendations"],
      description: "Comprehensive Pinterest analytics and reporting services that provide insights into campaign performance, audience behavior, and ROI optimization"
    },
    {
      category: "Pinterest SEO Optimization",
      areas: ["Keyword Research", "Pin Optimization", "Board Strategy", "Trends Analysis", "Search Visibility", "Content Strategy"],
      description: "Complete Pinterest SEO optimization services including keyword research, pin optimization, and board strategy development for maximum visibility"
    }
  ]

  const pinterestAdsServicesList = [
    {
      icon: Target,
      title: "Complete Pinterest Ads Management Services",
      description: "Our comprehensive Pinterest advertising services cover every aspect of visual marketing campaigns from strategic planning to creative production and advanced optimization for maximum ROI across Pinterest's visual discovery platform.",
      features: [
        "Strategic Campaign Planning: Custom Pinterest marketing strategy development and audience research",
        "Promoted Pins Creation: High-converting promoted pins that blend seamlessly with organic content",
        "Advanced Targeting & Optimization: Interest-based, demographic, and behavioral targeting for high-intent audiences",
        "A/B Testing: Multiple creative variations for optimal performance across Pinterest campaigns",
        "Real-time Optimization: Continuous campaign monitoring and improvement with Pinterest analytics insights"
      ],
      results: [
        "40% lower cost-per-click",
        "180% increase in product discovery",
        "65% improvement in shopping campaign ROAS"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Pinterest Shopping Campaign Management",
      description: "Comprehensive Pinterest Shopping campaign management including product catalog setup, rich pins optimization, and shopping ads to drive product sales and brand visibility.",
      features: [
        "Product Catalog Integration: Seamless product feed setup and optimization",
        "Rich Pins Setup: Enhanced product pins with pricing and availability",
        "Shopping Ads Creation: Strategic shopping campaign development",
        "Seasonal Strategies: Holiday and seasonal campaign optimization",
        "Sales Tracking: Complete conversion tracking and ROI measurement"
      ],
      results: [
        "180% increase in product discovery",
        "65% improvement in shopping campaign ROAS",
        "200% increase in Pinterest-driven sales"
      ]
    },
    {
      icon: Video,
      title: "Pinterest Video & Display Advertising",
      description: "Compelling video pins and carousel advertising campaigns that build brand awareness, drive engagement, and reach customers across Pinterest's visual discovery platform.",
      features: [
        "Video Pin Creation: Engaging video content optimized for Pinterest",
        "Carousel Ad Development: Multi-image campaigns for product showcases",
        "Story Pins Campaigns: Dynamic content for brand storytelling",
        "Brand Awareness: Visual content strategies for maximum reach",
        "Engagement Optimization: Interactive content for higher engagement"
      ],
      results: [
        "220% increase in brand awareness",
        "45% improvement in visual engagement rates",
        "150% increase in website traffic from Pinterest"
      ]
    },
    {
      icon: BarChart3,
      title: "Pinterest Analytics & Performance Tracking",
      description: "Comprehensive Pinterest analytics and reporting services that provide insights into campaign performance, audience behavior, and ROI optimization with detailed performance tracking.",
      features: [
        "Pinterest Analytics Setup: Complete tracking configuration and setup",
        "Performance Reporting: Monthly detailed performance analysis and insights",
        "Audience Insights: Demographic and interest-based audience analysis",
        "Conversion Tracking: Complete Pinterest pixel implementation and tracking",
        "ROI Analysis: Comprehensive return on investment measurement and optimization"
      ],
      results: [
        "Complete visibility into Pinterest campaign performance",
        "Data-driven optimization decisions",
        "Measurable ROI improvements and strategic insights"
      ]
    },
    {
      icon: Search,
      title: "Pinterest SEO & Keyword Optimization",
      description: "Complete Pinterest SEO optimization services including keyword research, pin optimization, and board strategy development for maximum visibility and organic reach.",
      features: [
        "Keyword Research: Pinterest-specific keyword analysis and optimization",
        "Pin Optimization: Title, description, and hashtag optimization",
        "Board Strategy: Strategic board organization and SEO optimization",
        "Trends Analysis: Pinterest trends implementation and content strategy",
        "Search Visibility: Comprehensive approach to improve Pinterest search rankings"
      ],
      results: [
        "250% increase in Pinterest organic reach",
        "70% improvement in pin engagement rates",
        "140% increase in website traffic from Pinterest"
      ]
    },
    {
      icon: Settings,
      title: "Pinterest Landing Page Optimization",
      description: "Comprehensive landing page optimization services that align with your Pinterest ad campaigns to improve conversion rates, user experience, and overall campaign performance.",
      features: [
        "Pinterest-Specific Design: Landing pages optimized for Pinterest traffic",
        "Mobile-First Optimization: Responsive design for mobile Pinterest users",
        "Conversion Rate Optimization: A/B testing and CRO strategies",
        "Visual Consistency: Brand alignment between pins and landing pages",
        "Pinterest Pixel Implementation: Complete tracking and attribution setup"
      ],
      results: [
        "55% improvement in conversion rate from Pinterest traffic",
        "70% improvement in mobile user experience",
        "85% increase in Pinterest-driven leads"
      ]
    }
  ]

  const pinterestAdsProcess = [
    {
      step: "01",
      title: "Pinterest Account Audit & Strategy Development",
      description: "Thorough Pinterest business account analysis including current pin performance review, audience assessment, competitor analysis, and Pinterest SEO evaluation to identify growth opportunities and strategic direction."
    },
    {
      step: "02",
      title: "Custom Pinterest Marketing Strategy",
      description: "Custom Pinterest advertising strategy development with goal setting, campaign type recommendations, budget allocation strategy, audience targeting approach, and visual content planning based on audit findings."
    },
    {
      step: "03",
      title: "Campaign Setup & Creative Development",
      description: "Professional campaign execution with Pinterest Business account optimization, promoted pins setup, audience targeting configuration, creative asset development, and tracking implementation for maximum performance."
    },
    {
      step: "04",
      title: "Optimization & Performance Monitoring",
      description: "Continuous optimization through daily monitoring, weekly pin performance adjustments, monthly reporting, quarterly strategy reviews, and A/B testing for sustained performance improvement and ROI maximization."
    },
    {
      step: "05",
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive performance reporting with ROI analysis, Pinterest analytics insights, audience behavior analysis, conversion tracking, and strategic planning for campaign scaling and optimization."
    },
    {
      step: "06",
      title: "Creative Innovation & Scaling",
      description: "Dynamic content optimization, seasonal campaign development, video pin production, carousel ad creation, and Pinterest trends implementation for sustained growth and performance improvement."
    }
  ]

  const whyChoosePinterestAds = [
    "Proven Results: Our clients see average 40% lower cost-per-click and 180% increase in product discovery",
    "Expert Team: Certified Pinterest Business Partners with 5+ years experience managing $5M+ in Pinterest ad spend",
    "Cost-Effective: Starting from $2,997/month with 40% lower CPC and 65% improvement in shopping campaign ROAS",
    "Full-Service: Complete Pinterest marketing strategy, promoted pins creation, and visual marketing optimization",
    "Massive Reach: Access to Pinterest's 450+ million monthly active users with high purchase intent",
    "Superior Engagement: 45% improvement in visual engagement rates with 70% improvement in pin engagement",
    "Visual Innovation: Leading expertise in Pinterest's visual discovery platform and creative optimization",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing and performance guarantees"
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Specialized Pinterest advertising management for online stores, including shopping campaigns, product pins optimization, and seasonal strategy development.",
      services: [
        "Pinterest shopping campaigns",
        "Product pins optimization",
        "Seasonal strategy development",
        "Rich pins implementation"
      ],
      results: "180% increase in product discovery, 65% improvement in shopping campaign ROAS"
    },
    {
      icon: Heart,
      title: "Fashion & Beauty",
      description: "Pinterest advertising strategies focused on visual storytelling, influencer partnerships, and lifestyle targeting for fashion and beauty brands.",
      services: [
        "Visual storytelling campaigns",
        "Influencer partnership strategies",
        "Lifestyle targeting",
        "Brand awareness optimization"
      ],
      results: "220% increase in brand awareness, 45% improvement in visual engagement rates"
    },
    {
      icon: Home,
      title: "Home & Lifestyle",
      description: "Pinterest marketing campaigns designed for home decor, DIY, and lifestyle brands leveraging Pinterest's core user interests and high purchase intent.",
      services: [
        "DIY content strategies",
        "Seasonal board optimization",
        "Home decor campaigns",
        "Lifestyle targeting"
      ],
      results: "150% increase in website traffic from Pinterest, 70% improvement in conversion rates"
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      description: "Recipe pins, food photography, and culinary content optimization for restaurants, food brands, and culinary businesses.",
      services: [
        "Recipe pin optimization",
        "Food photography strategies",
        "Culinary content campaigns",
        "Seasonal food marketing"
      ],
      results: "190% increase in recipe saves, 55% improvement in brand visibility"
    },
    {
      icon: Activity,
      title: "Health & Wellness",
      description: "Compliant Pinterest advertising management with expertise in wellness content guidelines and health-conscious audience targeting.",
      services: [
        "Wellness content strategies",
        "Health-conscious targeting",
        "Compliant advertising",
        "Lifestyle wellness campaigns"
      ],
      results: "160% increase in wellness content engagement, 40% improvement in lead generation"
    },
    {
      icon: Building2,
      title: "B2B Services",
      description: "Pinterest marketing strategies for professional services, emphasizing thought leadership content, business inspiration, and professional development themes.",
      services: [
        "Thought leadership content",
        "Business inspiration campaigns",
        "Professional development content",
        "B2B visual marketing"
      ],
      results: "85% increase in professional audience reach, 50% improvement in lead quality"
    }
  ]

  const pinterestAdsCaseStudies = [
    {
      industry: "E-commerce Fashion Brand",
      location: "Global",
      challenge: "Global fashion retailer struggling with high Pinterest advertising costs and low product discovery rates",
      solution: "Implemented Pinterest Shopping campaigns with optimized product feeds, seasonal targeting strategies, and influencer collaboration pins",
      results: [
        "200% increase in product discovery through Pinterest search",
        "60% reduction in cost-per-click across all campaigns",
        "180% improvement in Pinterest-driven sales revenue",
        "45% increase in brand follower growth rate"
      ]
    },
    {
      industry: "Home Decor Business",
      location: "Global",
      challenge: "Home decor company needed to increase brand awareness and drive qualified traffic from Pinterest's high-intent audience",
      solution: "Restructured Pinterest campaigns with DIY-focused content, seasonal board optimization, and Pinterest SEO enhancement",
      results: [
        "250% increase in Pinterest organic reach",
        "70% improvement in pin engagement rates",
        "140% increase in website traffic from Pinterest",
        "55% improvement in conversion rate from Pinterest traffic"
      ]
    },
    {
      industry: "Food & Recipe Blog",
      location: "Global",
      challenge: "Food blogger required Pinterest strategy to monetize content and increase recipe engagement while maintaining authenticity",
      solution: "Implemented Pinterest advertising strategy with recipe rich pins, seasonal content planning, and affiliate marketing optimization",
      results: [
        "300% increase in recipe pin saves and engagement",
        "90% improvement in blog traffic from Pinterest",
        "120% increase in affiliate revenue through Pinterest",
        "65% growth in email subscriber acquisition"
      ]
    }
  ]

  const pinterestAdsFaqData = [
    {
      question: "How much do Pinterest advertising services cost?",
      answer: "Pinterest advertising management costs typically range from $2,500-$9,000+ per month, depending on your ad spend and campaign complexity. Most agencies charge either a flat monthly fee ($2,500-$5,000/month) or a percentage of ad spend (15-25%). Our pricing is transparent with no hidden fees or long-term contracts required."
    },
    {
      question: "What's the difference between Pinterest promoted pins and organic Pinterest marketing?",
      answer: "Promoted pins are paid advertisements that appear in Pinterest search results and feeds with broader reach and targeting options, while organic Pinterest marketing relies on natural discovery through Pinterest SEO and follower engagement. The best approach combines both strategies for maximum visibility and cost-effectiveness."
    },
    {
      question: "How long does it take to see results from Pinterest advertising?",
      answer: "Pinterest advertising results typically follow this timeline: Week 1-2 for campaign setup and initial pin distribution, Week 3-4 for data collection and engagement analysis, Month 2 for initial optimizations and audience refinement, Month 3+ for sustained performance improvements and scaling. Typical improvements include 25-35% performance increase within 60 days and 50-70% improvement by month 6."
    },
    {
      question: "Do you provide Pinterest creative design and content creation?",
      answer: "Yes, Pinterest creative design and content creation are included in our Growth and Enterprise packages. Services include pin design and optimization, video pin production, carousel ad creative development, brand-consistent visual assets, and Pinterest-optimized graphic design. Creative improvements typically increase engagement rates by 40-60%."
    },
    {
      question: "What makes your Pinterest advertising management different from other agencies?",
      answer: "Our Pinterest advertising management stands out through: Certified Pinterest Business Partner status, specialized visual marketing expertise with Pinterest-focused campaign optimization, transparent reporting with real-time Pinterest analytics dashboards, ROI focus with every campaign optimized for business goals, and no long-term contracts with month-to-month flexibility. We have a proven track record with 300+ successful Pinterest campaigns and average 40% cost-per-click reduction."
    },
    {
      question: "Which industries do you specialize in for Pinterest advertising?",
      answer: "Our Pinterest advertising expertise covers e-commerce, fashion & beauty, home & lifestyle, food & beverage, health & wellness, and professional services sectors. We adapt our strategies to industry-specific audience behaviors, visual content requirements, and Pinterest best practices, with specialized knowledge in shopping campaigns, lifestyle targeting, and visual storytelling."
    },
    {
      question: "What Pinterest advertising metrics do you track and report?",
      answer: "We track comprehensive Pinterest metrics including impressions, outbound clicks, saves, closeups, conversion rates, cost-per-click, return on ad spend (ROAS), and customer lifetime value. Our monthly reports include detailed Pinterest performance analysis, audience insights, creative performance data, and strategic recommendations for continuous improvement across all campaign types."
    },
    {
      question: "Do you handle Pinterest Business account setup and verification?",
      answer: "Absolutely. We provide complete Pinterest Business account setup including profile optimization, rich pins verification, Pinterest pixel installation, and catalog integration. We also handle Pinterest website verification, domain claiming, and analytics configuration. Proper account setup is essential for Pinterest advertising success and optimal performance tracking."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Pinterest Ads Management Services",
        "description": "Professional Pinterest advertising and visual marketing services for businesses worldwide. Expert Pinterest ads management, promoted pins creation, and ROI-focused visual marketing strategies for Pinterest's discovery platform.",
        "url": "https://frameleads.com/pinterest-ads",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/pinterest-ads-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Marketing Blvd",
            "addressLocality": "Marketing City",
            "addressRegion": "MC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "pinterest@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Pinterest Advertising Management",
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "priceRange": "$2997-$8997",
          "description": "Professional Pinterest ads management services with transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pinterest Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pinterest Ads Management",
                "description": "Complete Pinterest advertising campaign management and optimization"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Pinterest Creative Production",
                "description": "Professional promoted pins creation and optimization for Pinterest marketing campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Pinterest Shopping Campaigns",
                "description": "Shopping campaign management and rich pins optimization for Pinterest advertising"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": pinterestAdsFaqData.map(faq => ({
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
      <title>Expert Pinterest Ads Management Services | Visual Marketing Agency | Frameleads</title>
      <meta name="description" content="Trusted by 300+ businesses to maximize Pinterest advertising ROI through promoted pins, shopping ads, and visual marketing strategies. Get 40% lower CPC with our proven approach." />
      <meta name="keywords" content="Pinterest ads, Pinterest advertising, Pinterest ads management, Pinterest marketing agency, promoted pins, Pinterest shopping campaigns, Pinterest advertising services, Pinterest ads agency, Pinterest marketing services, Pinterest business advertising" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/pinterest-ads" />
      <meta property="og:title" content="Expert Pinterest Ads Management | Visual Marketing Agency | Frameleads" />
      <meta property="og:description" content="Trusted by 300+ businesses to maximize Pinterest advertising ROI through promoted pins, shopping ads, and visual marketing strategies. Get 40% lower CPC with our proven approach." />
      <meta property="og:url" content="https://frameleads.com/pinterest-ads" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert Pinterest Ads Management | Visual Marketing Agency | Frameleads" />
      <meta name="twitter:description" content="Trusted by 300+ businesses to maximize Pinterest advertising ROI through promoted pins, shopping ads, and visual marketing strategies. Get 40% lower CPC with our proven approach." />
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
                🎯 Pinterest Advertising Experts - 40% Lower CPC
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Expert Pinterest Ads Management Services |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Drive Visual Marketing Results
              </span>{" "}
              Through Promoted Pins & Shopping Campaigns
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Trusted by 300+ businesses worldwide to maximize their Pinterest advertising ROI through promoted pins, shopping campaigns, and visual search optimization. Get 40% lower cost-per-click with our proven approach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Start Your Pinterest Campaign Today - Free Strategy Session
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
                <span>✓ Proven Results: 40% Lower CPC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Pinterest Business Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Cost-Effective: Starting $2,997/month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ No Long-Term Contracts</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Trusted by 300+ Businesses Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">450M+</div>
                  <div className="text-gray-600 text-sm">Monthly Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">40%</div>
                  <div className="text-gray-600 text-sm">Lower Cost-Per-Click</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">180%</div>
                  <div className="text-gray-600 text-sm">Product Discovery Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">65%</div>
                  <div className="text-gray-600 text-sm">Shopping Campaign ROAS</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Pinterest Advertising Results Across Global Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven Pinterest advertising approach delivers measurable growth for businesses worldwide through promoted pins, shopping ads, and visual discovery optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">450M+</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">180%</div>
                <div className="text-gray-600 text-sm">Product Discovery Increase</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">65%</div>
                <div className="text-gray-600 text-sm">Shopping Campaign ROAS</div>
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
                Why Choose Frameleads for Pinterest Advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier Pinterest ads management agency, combining certified Pinterest Business Partner status with cutting-edge visual marketing technology. Our comprehensive approach ensures that every dollar of your advertising budget delivers maximum return on investment through promoted pins, shopping campaigns, and intent-based targeting strategies.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Pinterest Advertising Platform Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 40% lower cost-per-click and 180% increase in product discovery for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Certified Pinterest Business Partners with 5+ years experience managing $5M+ in Pinterest ad spend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Multi-Format Expertise: Promoted Pins, Shopping Campaigns, Video Pins, Carousel Ads, Rich Pins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Massive Reach: Access to 450+ million monthly active users with high purchase intent</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Pinterest Advertising Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cost-Effective: Starting from $2,997/month with 40% lower CPC and 65% improvement in shopping campaign ROAS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Marketing: E-commerce, fashion & beauty, home & lifestyle, food & beverage, health & wellness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Visual Innovation: Leading expertise in Pinterest's visual discovery platform and creative optimization</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pinterest Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time Pinterest marketing analytics and visual performance insights</p>
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
              Comprehensive Pinterest Advertising Services for Maximum ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Pinterest advertising services are designed to deliver visual marketing success and drive business growth for companies worldwide through promoted pins, shopping campaigns, and visual discovery optimization.
            </p>
          </div>

          <div className="space-y-12">
            {pinterestAdsServicesList.map((service, index) => {
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
              Transparent Pinterest Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Pinterest advertising packages designed for businesses worldwide. All packages include Pinterest Business account setup, promoted pins implementation, and campaign optimization services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Pinterest Ads Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,997</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses and e-commerce startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Pinterest Business account setup and optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to 3 promoted pin campaigns</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic audience targeting and keyword optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly performance reporting</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Pinterest shopping catalog setup</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Pinterest Advertising Solution</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$4,997</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for scaling e-commerce and content businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to 6 promoted pin campaigns</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced audience targeting and lookalike audiences</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Video pin and carousel ad campaigns</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Bi-weekly strategy optimization calls</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Pinterest Advertising</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$8,997+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large organizations and high-volume advertisers</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Growth package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Unlimited promoted pin campaigns</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom audience development and retargeting</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated Pinterest marketing strategist</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Weekly performance reviews and optimization</span>
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
              Our Proven Pinterest Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic Pinterest advertising approach combining strategic planning, execution excellence, and continuous optimization to deliver measurable results through promoted pins and visual marketing strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pinterestAdsProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Pinterest Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique Pinterest advertising needs and visual marketing strategies in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pinterest Advertising Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped companies worldwide achieve remarkable growth through strategic Pinterest advertising campaigns, promoted pins optimization, and visual marketing strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pinterestAdsCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pinterest Advertising Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Pinterest advertising services across promoted pins, shopping campaigns, video content, and audience targeting, helping businesses worldwide maximize their visual marketing presence and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pinterestAdsServices.map((service, index) => (
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
              Frequently Asked Questions About Pinterest Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Pinterest advertising management services and how Frameleads can help your business achieve measurable results through promoted pins and visual marketing optimization.
            </p>
          </div>

          <div className="space-y-6">
            {pinterestAdsFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Digital Marketing with Pinterest Ads?"
        description="Partner with Frameleads, the most trusted Pinterest advertising management agency. Get your free Pinterest audit and discover how we can help you achieve measurable ROI and business growth through promoted pins and visual marketing optimization."
        primaryButtonText="Start Your Pinterest Campaign Today - Free Strategy Session"
        secondaryButtonText="Get Your Free Pinterest Ads Audit"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Pinterest Advertising Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>Pinterest advertising management agency</strong>, we offer comprehensive services across <strong>Promoted Pins</strong>, <strong>Shopping Campaigns</strong>, <strong>Video Advertising</strong>, and <strong>Audience Targeting</strong>. 
              Explore our specialized services designed specifically for global business success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Pinterest Promoted Pins */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pinterest Promoted Pins</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate Pinterest search results with expertly crafted promoted pin campaigns that target high-intent keywords and drive qualified traffic.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Pinterest keyword research</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Promoted pin creative development</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Audience targeting optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Promoted Pins
                </Link>
              </CardContent>
            </Card>

            {/* Pinterest Shopping Campaigns */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pinterest Shopping Campaigns</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Maximize product visibility and sales through optimized Pinterest Shopping campaigns and rich pins for retail businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Product catalog setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Shopping campaign creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Rich pins implementation</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Shopping Campaigns
                </Link>
              </CardContent>
            </Card>

            {/* Pinterest Video & Carousel Advertising */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pinterest Video & Carousel Advertising</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Expand your reach with compelling video pins and carousel advertising that builds brand awareness and drives conversions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Video pin production</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Carousel ad development</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Story pins campaigns</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Video Advertising
                </Link>
              </CardContent>
            </Card>

            {/* Pinterest Audience Targeting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pinterest Audience Targeting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Advanced audience development and targeting strategies that reach your ideal customers based on interests, behaviors, and purchase intent.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Custom audience development</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Lookalike audience creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Interest-based targeting</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Audience Targeting
                </Link>
              </CardContent>
            </Card>

            {/* Pinterest Analytics & Reporting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pinterest Analytics & Reporting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive Pinterest analytics and reporting services that provide insights into campaign performance, audience behavior, and ROI optimization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Pinterest analytics setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Monthly performance reporting</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Conversion tracking</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Analytics
                </Link>
              </CardContent>
            </Card>

            {/* Pinterest SEO Optimization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pinterest SEO Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Complete Pinterest SEO optimization services including keyword research, pin optimization, and board strategy development.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Pinterest keyword research</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Pin optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Board strategy development</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore SEO Optimization
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Pinterest Ads Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current Pinterest advertising performance across promoted pins, shopping campaigns, and visual marketing</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Pinterest Ads ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your Pinterest advertising ROI and optimize your budget allocation for promoted pins and shopping campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Pinterest Advertising Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to Pinterest advertising strategies and best practices for promoted pins, shopping campaigns, and visual marketing</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn Pinterest advertising with our expert-led courses and training programs for promoted pins, shopping campaigns, and visual marketing</p>
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
