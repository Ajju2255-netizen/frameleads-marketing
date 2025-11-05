'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, Smartphone as Mobile, MessageCircle, Search, ShoppingBag, Users as People, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, Zap as Lightning } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function SnapchatAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const snapchatAdsServices = [
    {
      category: "Snap Ads - Vertical Video Advertising",
      areas: ["Vertical Video Creation", "Full-Screen Experience", "High Engagement", "Mobile-First Design", "Story Integration", "Performance Optimization"],
      description: "Professional vertical video advertisements that capture attention with full-screen mobile experience and high engagement rates"
    },
    {
      category: "Snapchat AR Lenses", 
      areas: ["Custom AR Filters", "Interactive Experiences", "Brand Integration", "User Engagement", "Viral Potential", "Creative Innovation"],
      description: "Custom AR lenses and filters that create immersive brand experiences and encourage user interaction and sharing"
    },
    {
      category: "Snapchat Story Ads",
      areas: ["Native Story Integration", "Seamless User Experience", "High Visibility", "Brand Awareness", "Engagement Focus", "Mobile Optimization"],
      description: "Native story advertisements that integrate seamlessly with user content for maximum visibility and engagement"
    },
    {
      category: "Snapchat Collection Ads",
      areas: ["E-commerce Integration", "Product Showcase", "Direct Sales", "Shopping Experience", "Conversion Optimization", "Mobile Commerce"],
      description: "E-commerce focused advertisements that showcase products and drive direct sales through optimized shopping experiences"
    },
    {
      category: "Snapchat Commercials",
      areas: ["Premium Placement", "Maximum Brand Visibility", "High-Impact Advertising", "Brand Awareness", "Launch Campaigns", "Premium Audiences"],
      description: "Premium placement advertisements that capture maximum attention with high-impact video content for brand launches"
    },
    {
      category: "Snapchat Dynamic Ads",
      areas: ["Automated Personalization", "Product Feed Integration", "Dynamic Creative", "Retargeting", "Performance Optimization", "Scalable Campaigns"],
      description: "Automated personalized advertisements that dynamically showcase products based on user behavior and preferences"
    }
  ]

  const snapchatAdsServicesList = [
    {
      icon: Video,
      title: "Complete Snapchat Advertising Campaign Management",
      description: "Our comprehensive Snapchat ads management services cover every aspect of your advertising campaigns from strategic planning to creative production and advanced optimization for maximum ROI among Gen Z and millennial audiences.",
      features: [
        "Strategic Campaign Planning: Custom Snapchat marketing strategy development and Gen Z audience research",
        "Creative Content Production: Vertical video ad creation optimized for mobile-first experience",
        "Advanced Targeting & Optimization: Demographic, interest-based, and behavioral targeting for younger audiences",
        "A/B Testing: Multiple creative variations for optimal performance across Snapchat formats",
        "Real-time Optimization: Continuous campaign monitoring and improvement with AI-powered insights"
      ],
      results: [
        "280% increase in Gen Z customer acquisition",
        "65% reduction in cost per acquisition",
        "150% improvement in customer lifetime value"
      ]
    },
    {
      icon: PlayCircle,
      title: "Snap Ads - Vertical Video Advertising",
      description: "Professional vertical video advertisements that capture attention with full-screen mobile experience and high engagement rates, specifically designed for Snapchat's unique platform requirements.",
      features: [
        "Vertical Video Creation: Mobile-first video content optimized for Snapchat",
        "Full-Screen Experience: Immersive advertising format that captures attention",
        "High Engagement: Designed to maximize swipe-up rates and video completion",
        "Story Integration: Seamless integration with user-generated content",
        "Performance Optimization: Data-driven creative improvements for better results"
      ],
      results: [
        "34% higher purchase intent vs other platforms",
        "75% of 13-34 year-olds use Snapchat daily",
        "Video completion rates up to 78%"
      ]
    },
    {
      icon: Sparkles,
      title: "Snapchat AR Lenses - Interactive Brand Experiences",
      description: "Custom AR lenses and filters that create immersive brand experiences and encourage user interaction and sharing, perfect for building brand awareness and engagement.",
      features: [
        "Custom AR Filters: Branded augmented reality experiences",
        "Interactive Experiences: Engaging user participation features",
        "Brand Integration: Seamless brand experience in AR content",
        "User Engagement: High interaction and sharing rates",
        "Creative Innovation: Cutting-edge AR advertising technology"
      ],
      results: [
        "500K+ interactions per campaign",
        "195% improvement in social media engagement",
        "High viral potential and brand recall"
      ]
    },
    {
      icon: Camera,
      title: "Snapchat Story Ads - Native Integration",
      description: "Native story advertisements that integrate seamlessly with user content for maximum visibility and engagement, designed to feel natural within the Snapchat experience.",
      features: [
        "Native Story Integration: Seamless integration with user stories",
        "High Visibility: Maximum exposure within the story feed",
        "Brand Awareness Focus: Perfect for building brand recognition",
        "Engagement Focus: Designed to drive user interaction",
        "Mobile Optimization: Optimized for mobile-first experience"
      ],
      results: [
        "Seamless user experience",
        "High brand visibility and recall",
        "Natural integration with user content"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Snapchat Collection Ads - E-commerce Integration",
      description: "E-commerce focused advertisements that showcase products and drive direct sales through optimized shopping experiences, perfect for retail and D2C brands.",
      features: [
        "E-commerce Integration: Native shopping functionality",
        "Product Showcase: Visual product demonstrations and features",
        "Direct Sales: Seamless purchase journey from discovery to conversion",
        "Conversion Optimization: Conversion-focused ad formats",
        "Mobile Commerce: Optimized for mobile shopping experience"
      ],
      results: [
        "Direct sales attribution and tracking",
        "Seamless shopping experience",
        "High conversion rates for mobile commerce"
      ]
    },
    {
      icon: BarChart3,
      title: "Snapchat Analytics & Performance Tracking",
      description: "Comprehensive performance tracking and analytics that measure key metrics including swipe-up rates, video completion rates, and ROI to optimize campaign performance.",
      features: [
        "Performance Analytics: Detailed campaign performance insights",
        "Conversion Tracking: Complete funnel analysis and attribution",
        "Audience Insights: Deep understanding of Gen Z and millennial behavior",
        "ROI Measurement: Comprehensive return on investment analysis",
        "Optimization Recommendations: Data-driven improvement suggestions"
      ],
      results: [
        "Comprehensive performance visibility",
        "Data-driven optimization decisions",
        "Measurable ROI improvements"
      ]
    }
  ]

  const snapchatAdsProcess = [
    {
      step: "01",
      title: "Comprehensive Snapchat Account Audit",
      description: "Thorough Snapchat ads account analysis including campaign structure review, creative performance evaluation, audience targeting assessment, conversion tracking verification, and competitor analysis to identify optimization opportunities."
    },
    {
      step: "02",
      title: "Strategic Campaign Development",
      description: "Custom Snapchat advertising strategy development with goal setting, campaign type recommendations, budget allocation strategy, targeting approach, and creative asset planning based on audit findings and Gen Z marketing insights."
    },
    {
      step: "03",
      title: "Professional Campaign Execution",
      description: "Professional campaign execution with account setup, creative asset production, tracking configuration, initial optimization, and performance monitoring protocols specifically designed for Snapchat's unique platform requirements."
    },
    {
      step: "04",
      title: "Continuous Performance Optimization",
      description: "Continuous optimization through daily monitoring, weekly creative adjustments, monthly reporting, quarterly strategy reviews, and A/B testing for sustained performance improvement and cost reduction."
    },
    {
      step: "05",
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive performance reporting, ROI analysis and cost breakdown, campaign insights and optimization recommendations, and strategic planning for next month's campaigns with detailed Gen Z audience insights."
    },
    {
      step: "06",
      title: "Creative Innovation & Scaling",
      description: "Trend monitoring and creative refreshing, new feature testing and implementation, competitive landscape analysis, and long-term strategy evolution with focus on AR innovation and mobile-first experiences."
    }
  ]

  const whyChooseSnapchatAds = [
    "Proven Results: Our clients see average 280% increase in Gen Z customer acquisition",
    "Expert Team: Certified Snapchat advertising specialists with 5+ years experience",
    "Cost-Effective: Average $6.72-$10.01 CPM with superior engagement rates",
    "Full-Service: Complete Snapchat marketing strategy, creative production, and optimization",
    "Massive Reach: Access to 800+ million monthly active users worldwide",
    "Superior Engagement: 75% of 13-34 year-olds use Snapchat daily",
    "AR Innovation: Leading expertise in AR lenses and interactive experiences",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing"
  ]

  const snapchatAdsCaseStudies = [
    {
      industry: "E-commerce Fashion Brand",
      location: "Global",
      challenge: "Global online retailer struggling with high cost-per-acquisition and low engagement from Gen Z customers on traditional platforms",
      solution: "Implemented comprehensive Snapchat advertising campaign with optimized vertical video content, AR try-on experiences, and influencer partnerships",
      results: [
        "280% increase in Gen Z customer acquisition",
        "65% reduction in cost per acquisition",
        "150% improvement in customer lifetime value",
        "500K+ AR lens interactions per campaign"
      ]
    },
    {
      industry: "Mobile Gaming App",
      location: "Global",
      challenge: "Gaming company experiencing high user acquisition costs and poor retention rates from other social platforms",
      solution: "Restructured campaigns with Snapchat ads targeting gamers, interactive AR content, and performance-based optimization",
      results: [
        "190% increase in app installs",
        "75% improvement in 30-day retention",
        "120% increase in in-app purchases",
        "78% video completion rate"
      ]
    },
    {
      industry: "Beauty Brand Launch",
      location: "Global",
      challenge: "New beauty brand needed to build awareness and drive sales among millennial and Gen Z demographics",
      solution: "Comprehensive Snapchat marketing strategy with AR beauty filters, influencer collaborations, and user-generated content campaigns",
      results: [
        "340% increase in brand awareness",
        "200% growth in social media followers",
        "85% improvement in conversion rates",
        "195% improvement in social media engagement"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands",
      description: "Leverage Snapchat's collection ads and AR experiences for direct sales with 34% higher purchase intent vs other platforms. Perfect for fashion, beauty, and lifestyle brands targeting Gen Z.",
      services: [
        "Snapchat collection ads and optimization",
        "AR try-on experiences",
        "Vertical video product showcases",
        "Mobile commerce optimization"
      ],
      results: "280% increase in Gen Z customer acquisition, 65% reduction in cost per acquisition"
    },
    {
      icon: Heart,
      title: "Health & Beauty",
      description: "Reach beauty-conscious Gen Z consumers with AR beauty filters, product demonstrations, and interactive experiences that drive engagement and sales.",
      services: [
        "AR beauty filters and lenses",
        "Product demonstration videos",
        "Interactive beauty experiences",
        "Influencer collaboration strategies"
      ],
      results: "340% increase in brand awareness, 195% improvement in social media engagement"
    },
    {
      icon: Palette,
      title: "Fashion & Apparel",
      description: "Showcase products through AR try-on experiences, vertical video content, and interactive fashion campaigns that drive brand awareness and sales among younger demographics.",
      services: [
        "AR try-on experiences",
        "Fashion showcase videos",
        "Interactive style campaigns",
        "User-generated content strategies"
      ],
      results: "150% improvement in customer lifetime value, 500K+ AR interactions per campaign"
    },
    {
      icon: Monitor,
      title: "Technology & SaaS",
      description: "Educate younger audiences about complex products through simplified video explanations, AR experiences, and mobile-first content strategies.",
      services: [
        "Educational video content",
        "AR product demonstrations",
        "Mobile app promotion",
        "Trial signup campaigns"
      ],
      results: "190% increase in app installs, 75% improvement in 30-day retention"
    },
    {
      icon: ShoppingBag,
      title: "Entertainment & Gaming",
      description: "Create high-engagement content that drives app installs, event promotion, and brand awareness in entertainment and gaming industries targeting younger audiences.",
      services: [
        "Gaming app promotion",
        "Event marketing campaigns",
        "Interactive AR experiences",
        "Community engagement strategies"
      ],
      results: "120% increase in in-app purchases, 78% video completion rate"
    }
  ]

  const snapchatAdsFaqData = [
    {
      question: "How much do Snapchat ads cost?",
      answer: "Snapchat ads cost varies based on campaign objectives and targeting. Current industry averages show $6.72-$10.01 CPM (cost per thousand impressions) and $1.04-$1.20 per click. Minimum daily spend is $5, but we recommend $20-50 daily for optimal performance. Our management fees range from $2,499-$9,999/month depending on campaign complexity and ad spend levels."
    },
    {
      question: "Are Snapchat ads effective for business?",
      answer: "Yes, Snapchat advertising is highly effective for reaching Gen Z and millennial audiences. With 800+ million monthly users and 75% of 13-34 year-olds using the platform, Snapchat offers unique engagement opportunities. Users are 34% more likely to purchase products advertised on Snapchat compared to other platforms, making it ideal for brands targeting younger demographics."
    },
    {
      question: "What types of Snapchat ads work best?",
      answer: "The most effective Snapchat ads include vertical video ads (highest engagement), AR lenses (premium brand experience), story ads (seamless integration), and collection ads (e-commerce focus). Success depends on matching ad format to campaign objectives: video ads for awareness, AR for engagement, and collection ads for direct sales."
    },
    {
      question: "How long does it take to see Snapchat ads results?",
      answer: "Snapchat ads results typically follow this timeline: Week 1-2 for campaign setup and creative production, Week 3-4 for exploration phase completion and initial data collection, Month 2 for optimization and performance improvements, Month 3+ for sustained growth and scaling. Most clients see 25-40% performance improvement within 60 days."
    },
    {
      question: "Do you provide Snapchat ads creative services?",
      answer: "Yes, our Snapchat advertising services include comprehensive creative production: vertical video creation, AR lens development, story ads design, user-generated content campaigns, and mobile-optimized landing pages. All creative assets are produced specifically for Snapchat's unique format requirements and audience preferences."
    },
    {
      question: "What industries work best with Snapchat advertising?",
      answer: "Snapchat marketing is most effective for e-commerce, fashion, beauty, gaming, entertainment, food & beverage, and technology brands targeting younger demographics. We have specialized expertise across these industries with proven strategies for reaching Gen Z and millennial audiences through platform-native content."
    },
    {
      question: "How do you measure Snapchat ads performance?",
      answer: "We track comprehensive Snapchat ads metrics including impressions, swipe-up rates, video completion rates, cost-per-acquisition, return on ad spend (ROAS), audience insights, and conversion tracking. Our monthly reports include detailed performance analysis, creative optimization recommendations, and strategic insights for continuous improvement."
    },
    {
      question: "Can you help with Snapchat Pixel setup?",
      answer: "Absolutely. We provide complete Snapchat advertising tracking setup including Snap Pixel installation, conversion event configuration, audience building for retargeting, and cross-domain tracking. Proper conversion tracking is essential for campaign optimization and ROI measurement on Snapchat."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DigitalMarketingService",
        "name": "Frameleads Snapchat Ads Management",
        "description": "Professional Snapchat advertising and marketing services for businesses worldwide. Snapchat ads management, creative production, and ROI-focused Snapchat marketing strategies for Gen Z and millennial audiences.",
        "url": "https://frameleads.com/snapchat-ads",
        "logo": "https://frameleads.com/logo.png",
        "image": "https://frameleads.com/snapchat-ads-agency.jpg",
        "priceRange": "$2499-$9999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Digital Marketing Blvd",
          "addressLocality": "Marketing City",
          "addressRegion": "MC",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "telephone": "+1-555-845-865-2237",
        "email": "snapchat@frameleads.com",
        "sameAs": [
          "https://facebook.com/frameleads",
          "https://snapchat.com/add/frameleads"
        ],
        "serviceType": "Snapchat Advertising Management",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Snapchat Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Snapchat Ads Management",
                "description": "Complete Snapchat advertising campaign management and optimization"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Snapchat Creative Production",
                "description": "Professional vertical video and AR lens creation for Snapchat marketing campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Snapchat AR Development",
                "description": "Custom AR lenses and interactive experiences for brand engagement"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": snapchatAdsFaqData.map(faq => ({
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
      <title>Professional Snapchat Ads Management Services | Frameleads Agency</title>
      <meta name="description" content="Maximize Snapchat advertising ROI with our proven management services. Reach 800M+ Gen Z & millennial users. Expert campaign optimization & creative production. Get free audit!" />
      <meta name="keywords" content="Snapchat Ads, Snapchat Advertising, Snapchat Ads Management, Snapchat Marketing, Snapchat Business Ads, Snapchat Advertising Agency, Snapchat Promotion Services, Snapchat Ads Cost 2025" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/snapchat-ads" />
      <meta property="og:title" content="Professional Snapchat Ads Management Services | Frameleads Agency" />
      <meta property="og:description" content="Maximize Snapchat advertising ROI with our proven management services. Reach 800M+ Gen Z & millennial users. Expert campaign optimization & creative production. Get free audit!" />
      <meta property="og:url" content="https://frameleads.com/snapchat-ads" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Professional Snapchat Ads Management Services | Frameleads Agency" />
      <meta name="twitter:description" content="Maximize Snapchat advertising ROI with our proven management services. Reach 800M+ Gen Z & millennial users. Expert campaign optimization & creative production. Get free audit!" />
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
                📱 Snapchat Advertising Experts - 280% Gen Z Customer Acquisition
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Professional Snapchat Ads Management That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Drives Real Results
              </span>{" "}
              Through Gen Z Engagement & AR Innovation
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your business with expert Snapchat advertising services that reach over 800 million active users worldwide. Our Snapchat ads management specialists deliver campaigns that convert Gen Z and millennial viewers into customers with 34% higher purchase intent than other platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Snapchat Strategy Consultation
                </Button>
              </Link>
              <Link href="tel:+1-555-845-865-2237" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +1-555-SNAPCHAT-ADS
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Proven Results: 280% Gen Z Acquisition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: 5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Cost-Effective: $6.72-$10.01 CPM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ No Long-Term Contracts</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📱 Trusted by 500+ Businesses Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">800M+</div>
                  <div className="text-gray-600 text-sm">Monthly Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$6.72</div>
                  <div className="text-gray-600 text-sm">Average CPM</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">280%</div>
                  <div className="text-gray-600 text-sm">Gen Z Customer Acquisition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">75%</div>
                  <div className="text-gray-600 text-sm">13-34 Year Olds Use Daily</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Snapchat Advertising Results Across Global Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable results for businesses worldwide through Snapchat advertising, AR innovation, and Gen Z-focused optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">280%</div>
                <div className="text-gray-600 text-sm">Gen Z Customer Acquisition</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">800M+</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">75%</div>
                <div className="text-gray-600 text-sm">13-34 Year Olds Use Daily</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">$6.72</div>
                <div className="text-gray-600 text-sm">Average CPM</div>
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
                Why Choose Frameleads for Snapchat Advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier Snapchat advertising agency, combining proven results with cutting-edge AR innovation and Gen Z-focused strategies. Our comprehensive approach ensures that every dollar of your advertising budget delivers maximum return on investment through strategic Snapchat campaigns and data-driven optimization.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Snapchat Advertising Platform Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 280% average Gen Z customer acquisition for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Certified Snapchat advertising specialists with 5+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Multi-Format Expertise: Snap Ads, AR Lenses, Story Ads, Collection Ads, Commercials, Dynamic Ads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Massive Reach: Access to 800+ million monthly active users worldwide</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Snapchat Advertising Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cost-Effective: $6.72-$10.01 CPM with superior engagement rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Marketing: E-commerce, beauty, fashion, gaming, entertainment, technology brands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">AR Innovation: Leading expertise in AR lenses and interactive experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">No Long-Term Contracts: Month-to-month flexibility with transparent pricing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <Video className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Snapchat Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time Snapchat advertising analytics and insights</p>
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
              Comprehensive Snapchat Advertising Services for Maximum ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Snapchat advertising services are designed to deliver Gen Z engagement and drive business growth for companies worldwide through strategic campaigns, AR innovation, and performance optimization.
            </p>
          </div>

          <div className="space-y-12">
            {snapchatAdsServicesList.map((service, index) => {
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
              Transparent Snapchat Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Snapchat ads management packages designed for businesses worldwide. All packages include campaign setup, creative production, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Snapchat Ads Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,499</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses new to Snapchat</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Snapchat campaign setup & optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Snap Ads management</span>
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
                    <span>Up to $8k monthly ad spend management</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Snapchat Advertising Solution</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$4,999</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for scaling e-commerce brands</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-campaign management (Snap Ads + AR Lenses + Collection Ads)</span>
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
                    <span>AR lens development (1 per quarter)</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Snapchat Advertising</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$9,999+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large brands & agencies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom Snapchat advertising strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>All Snapchat ad formats (Snap Ads, AR Lenses, Story Ads, Collection Ads, Commercials, Dynamic Ads)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Influencer partnership management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated Snapchat advertising strategist</span>
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
              Our Proven Snapchat Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic Snapchat advertising approach combining strategic planning, creative production, and continuous optimization to deliver measurable results through data-driven campaign management and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {snapchatAdsProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Snapchat Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique Snapchat advertising needs and Gen Z audience behaviors in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Snapchat Advertising Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped companies worldwide achieve remarkable growth through strategic Snapchat advertising campaigns, AR innovation, and Gen Z-focused optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {snapchatAdsCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Snapchat Advertising Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Snapchat advertising services across Snap Ads, AR Lenses, Story Ads, Collection Ads, and Commercials, helping businesses worldwide maximize their Gen Z engagement and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {snapchatAdsServices.map((service, index) => (
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
              Frequently Asked Questions About Snapchat Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Snapchat ads management services and how Frameleads can help your business achieve measurable results through Gen Z engagement and strategic advertising.
            </p>
          </div>

          <div className="space-y-6">
            {snapchatAdsFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Snapchat Advertising Strategy?"
        description="Partner with Frameleads, the most trusted Snapchat advertising agency. Get your free consultation and discover how we can help you achieve measurable ROI and business growth through Gen Z engagement campaigns and strategic optimization."
        primaryButtonText="Get Your Free Snapchat Strategy Consultation"
        secondaryButtonText="Schedule Your Strategic Snapchat Advertising Call"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Snapchat Advertising Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier Snapchat advertising agency, we offer comprehensive services across Snap Ads, AR Lenses, Story Ads, Collection Ads, and Commercials. 
              Explore our specialized services designed specifically for Gen Z engagement success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Snapchat Snap Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Snapchat Snap Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate Snapchat with our comprehensive vertical video advertising strategies for maximum Gen Z engagement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Vertical video advertising</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Full-screen experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">High engagement optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Snap Ads
                </Link>
              </CardContent>
            </Card>

            {/* Snapchat AR Lenses */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Snapchat AR Lenses</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Interactive AR experiences that create immersive brand engagement and viral sharing potential.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Custom AR filters</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Interactive experiences</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Viral sharing potential</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore AR Lenses
                </Link>
              </CardContent>
            </Card>

            {/* Snapchat Story Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Hash className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Snapchat Story Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Native story advertisements that integrate seamlessly with user content for maximum visibility and engagement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Native story integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">High visibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Seamless user experience</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Story Ads
                </Link>
              </CardContent>
            </Card>

            {/* Snapchat Collection Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Snapchat Collection Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Drive direct sales through Snapchat's e-commerce integration with product-focused advertising and seamless shopping experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Direct sales</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Product showcase</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Collection Ads
                </Link>
              </CardContent>
            </Card>

            {/* Snapchat Analytics & Tracking */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Snapchat Analytics & Tracking</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive tracking setup and performance analytics to measure ROI and optimize Snapchat campaign performance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Performance analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Conversion tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">ROI measurement</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Analytics
                </Link>
              </CardContent>
            </Card>

            {/* Snapchat Strategy & Consulting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Snapchat Strategy & Consulting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic Snapchat advertising consulting and training services for businesses looking to optimize their Gen Z engagement strategy.
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Snapchat Ads Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current Snapchat advertising performance across Snap Ads, AR Lenses, Story Ads, and Collection Ads</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Snapchat Ads ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your Snapchat advertising ROI and optimize your budget allocation for Gen Z engagement campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Snapchat Advertising Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to Snapchat advertising strategies and best practices for Gen Z engagement and AR content creation</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn Snapchat advertising with our expert-led courses and training programs for Gen Z engagement and campaign optimization</p>
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
