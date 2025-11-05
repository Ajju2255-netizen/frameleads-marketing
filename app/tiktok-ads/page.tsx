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
import ReviewRating from "../components/review-rating"

export default function TikTokAdsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const tiktokAdsServices = [
    {
      category: "TikTok In-Feed Ads",
      areas: ["Native Video Advertising", "For You Page Placement", "9-15 Second Optimal Length", "User-Generated Content Style", "Trend-Based Creative", "Performance Optimization"],
      description: "Native video advertisements that appear in users' For You page with $0.02 minimum cost per view and maximum engagement potential"
    },
    {
      category: "TikTok TopView Ads", 
      areas: ["Premium Placement", "Maximum Brand Visibility", "Full-Screen Experience", "High-Impact Advertising", "Brand Awareness", "Launch Campaigns"],
      description: "Premium placement advertisements that capture maximum attention with full-screen video experience for brand launches and awareness"
    },
    {
      category: "TikTok Branded Hashtag Challenges",
      areas: ["Viral Campaign Creation", "User-Generated Content", "Community Engagement", "Brand Awareness", "Organic Reach", "Influencer Integration"],
      description: "Viral campaigns that boost user engagement through branded hashtag challenges and community participation"
    },
    {
      category: "TikTok Branded Effects & AR",
      areas: ["Custom AR Filters", "Interactive Effects", "Brand Integration", "User Engagement", "Viral Potential", "Creative Innovation"],
      description: "Custom AR filters and effects for interactive advertising that encourage user participation and brand interaction"
    },
    {
      category: "TikTok Spark Ads",
      areas: ["Organic Content Amplification", "Authentic Promotion", "Existing Content Boost", "Cost-Effective Reach", "Trust Building", "Performance Scaling"],
      description: "Amplify existing organic content for authentic promotion that builds trust and drives engagement"
    },
    {
      category: "TikTok Shopping Ads",
      areas: ["TikTok Shop Integration", "Direct Sales", "Product Showcase", "E-commerce Optimization", "Conversion Tracking", "Revenue Generation"],
      description: "Drive direct sales through TikTok Shop integration with product-focused advertising and seamless shopping experience"
    }
  ]

  const tiktokAdsServicesList = [
    {
      icon: Video,
      title: "Complete TikTok Advertising Campaign Management",
      description: "Our comprehensive TikTok ads management services cover every aspect of your advertising campaigns from strategic planning to creative production and advanced optimization for maximum ROI.",
      features: [
        "Strategic Campaign Planning: Custom TikTok marketing strategy development and target audience research",
        "Creative Content Production: Viral-worthy TikTok ad creation (9-15 seconds optimal length)",
        "Advanced Targeting & Optimization: Demographic, interest-based, and behavioral targeting",
        "A/B Testing: Multiple creative variations for optimal performance",
        "Real-time Optimization: Continuous campaign monitoring and improvement"
      ],
      results: [
        "500% increase in sales within 90 days",
        "40% lower CPM than traditional platforms",
        "2.6% average engagement rate"
      ]
    },
    {
      icon: PlayCircle,
      title: "TikTok In-Feed Ads - Native Video Advertising",
      description: "Native video advertisements that appear in users' For You page with $0.02 minimum cost per view and maximum engagement potential through user-generated content style ads.",
      features: [
        "For You Page Placement: Native integration with organic content",
        "9-15 Second Optimal Length: Perfect duration for maximum engagement",
        "User-Generated Content Style: Authentic, relatable ad formats",
        "Trend-Based Creative: Leveraging viral trends and challenges",
        "Performance Optimization: Data-driven creative improvements"
      ],
      results: [
        "83% of users find TikTok ads entertaining",
        "15% higher engagement rates vs static ads",
        "39% of purchases influenced by TikTok content"
      ]
    },
    {
      icon: Sparkles,
      title: "TikTok TopView Ads - Premium Brand Visibility",
      description: "Premium placement advertisements that capture maximum attention with full-screen video experience for brand launches, awareness campaigns, and high-impact advertising.",
      features: [
        "Premium Placement: Maximum brand visibility and impact",
        "Full-Screen Experience: Immersive video advertising format",
        "Brand Awareness Focus: Perfect for product launches and campaigns",
        "High-Impact Advertising: Captures immediate attention",
        "Launch Campaigns: Ideal for new product introductions"
      ],
      results: [
        "Maximum brand visibility and recall",
        "Premium audience engagement",
        "High-impact brand awareness"
      ]
    },
    {
      icon: Hash,
      title: "TikTok Branded Hashtag Challenges - Viral Campaigns",
      description: "Viral campaigns that boost user engagement through branded hashtag challenges and community participation, creating organic reach and user-generated content.",
      features: [
        "Viral Campaign Creation: Strategic hashtag challenge development",
        "User-Generated Content: Community-driven content creation",
        "Community Engagement: Building brand communities and loyalty",
        "Organic Reach: Leveraging user networks for amplification",
        "Influencer Integration: Partnering with creators for maximum impact"
      ],
      results: [
        "Exponential organic reach through user participation",
        "Community building and brand loyalty",
        "Viral content creation and sharing"
      ]
    },
    {
      icon: Camera,
      title: "TikTok Branded Effects & AR - Interactive Advertising",
      description: "Custom AR filters and effects for interactive advertising that encourage user participation and brand interaction, creating memorable and shareable experiences.",
      features: [
        "Custom AR Filters: Branded augmented reality experiences",
        "Interactive Effects: Engaging user participation features",
        "Brand Integration: Seamless brand experience in effects",
        "User Engagement: High interaction and sharing rates",
        "Creative Innovation: Cutting-edge advertising technology"
      ],
      results: [
        "High user engagement and interaction",
        "Memorable brand experiences",
        "Increased sharing and virality"
      ]
    },
    {
      icon: ShoppingCart,
      title: "TikTok Shopping Ads - Direct Sales Integration",
      description: "Drive direct sales through TikTok Shop integration with product-focused advertising and seamless shopping experience, perfect for e-commerce and D2C brands.",
      features: [
        "TikTok Shop Integration: Native e-commerce functionality",
        "Direct Sales: Seamless purchase journey from discovery to conversion",
        "Product Showcase: Visual product demonstrations and features",
        "E-commerce Optimization: Conversion-focused ad formats",
        "Revenue Generation: Direct sales attribution and tracking"
      ],
      results: [
        "55% of users buy products they see on TikTok",
        "Direct sales attribution and tracking",
        "Seamless shopping experience"
      ]
    }
  ]

  const tiktokAdsProcess = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Business goal assessment and campaign planning, target audience research and competitive analysis, custom TikTok marketing strategy creation, and campaign structure and budget allocation."
    },
    {
      step: "02",
      title: "Creative Production",
      description: "Trend analysis and content ideation, professional video creation and editing, multiple ad variation development, and creative asset optimization for TikTok specifications."
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "TikTok Ads Manager setup and configuration, audience targeting and bidding strategy implementation, campaign monitoring and initial optimization, and performance tracking system activation."
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description: "Daily performance monitoring and adjustments, A/B testing of creative and targeting options, budget reallocation based on performance data, and scaling successful campaigns for maximum ROI."
    },
    {
      step: "05",
      title: "Reporting & Analysis",
      description: "Comprehensive performance reporting, ROI analysis and cost breakdown, campaign insights and optimization recommendations, and strategic planning for next month's campaigns."
    },
    {
      step: "06",
      title: "Continuous Improvement",
      description: "Trend monitoring and creative refreshing, new feature testing and implementation, competitive landscape analysis, and long-term strategy evolution."
    }
  ]

  const whyChooseTikTokAds = [
    "Proven Results: Our clients see average 500% increase in sales within 90 days",
    "Expert Team: Certified TikTok advertising specialists with 5+ years experience",
    "Cost-Effective: Average $0.74 cost per link click vs $2.50+ on other platforms",
    "Full-Service: Complete TikTok marketing strategy, creative production, and optimization",
    "Massive Reach: Access to 1.58 billion monthly active users worldwide",
    "Superior Engagement: 2.6% average engagement rate vs 1.2% on Facebook",
    "Viral Potential: Leveraging trending content and hashtag challenges for organic reach",
    "No Long-Term Contracts: Month-to-month flexibility with transparent pricing"
  ]

  const tiktokAdsCaseStudies = [
    {
      industry: "E-commerce Beauty Brand",
      location: "Global",
      challenge: "New product launch with limited brand awareness and need to reach younger demographics",
      solution: "TikTok influencer partnership + targeted ads campaign with viral hashtag challenge",
      results: [
        "500% increase in sales within 90 days",
        "2.3M video views across all content",
        "$15 cost per acquisition",
        "400% increase in brand awareness"
      ]
    },
    {
      industry: "Local Restaurant Chain",
      location: "United States",
      challenge: "Drive foot traffic to multiple locations and compete with food delivery apps",
      solution: "Location-based TikTok ads with food styling content and local influencer partnerships",
      results: [
        "35% increase in store visits",
        "400% social media following growth",
        "250% increase in online orders",
        "180% improvement in brand recognition"
      ]
    },
    {
      industry: "SaaS Technology Company",
      location: "Global",
      challenge: "Educate market about complex software solution and drive free trial signups",
      solution: "Educational TikTok content series with clear CTAs and simplified product demonstrations",
      results: [
        "250% increase in free trial signups",
        "180% improvement in brand recognition",
        "300% increase in website traffic",
        "150% improvement in conversion rates"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands",
      description: "Leverage TikTok Shop integration for direct sales with 55% of users buying products they see on TikTok. Perfect for fashion, beauty, and lifestyle brands.",
      services: [
        "TikTok Shop integration and optimization",
        "Product demonstration videos",
        "Influencer partnership campaigns",
        "Shopping ads and conversion tracking"
      ],
      results: "55% of users buy products they see on TikTok, 300-500% ROI within 90 days"
    },
    {
      icon: Heart,
      title: "Health & Beauty",
      description: "Reach beauty-conscious consumers with product demonstrations, reviews, and trend-based content that drives engagement and sales.",
      services: [
        "Product demonstration videos",
        "Beauty trend-based content",
        "User-generated content campaigns",
        "Influencer collaboration strategies"
      ],
      results: "500% increase in sales, 2.3M video views, $15 cost per acquisition"
    },
    {
      icon: Palette,
      title: "Fashion & Apparel",
      description: "Showcase products through trending style content, influencer partnerships, and viral fashion challenges that drive brand awareness and sales.",
      services: [
        "Style showcase videos",
        "Fashion trend challenges",
        "Influencer style partnerships",
        "Branded hashtag campaigns"
      ],
      results: "400% increase in brand awareness, 250% boost in online sales"
    },
    {
      icon: Monitor,
      title: "Technology & SaaS",
      description: "Educate audiences about complex products through simplified video explanations, behind-the-scenes content, and educational series.",
      services: [
        "Educational content series",
        "Product demonstration videos",
        "Behind-the-scenes content",
        "Trial signup campaigns"
      ],
      results: "250% increase in free trial signups, 180% improvement in brand recognition"
    },
    {
      icon: ShoppingBag,
      title: "Food & Beverage",
      description: "Create viral food content that drives restaurant visits, product purchases, and brand engagement through appetizing visual content.",
      services: [
        "Food styling and presentation",
        "Restaurant visit campaigns",
        "Product launch videos",
        "Local business promotion"
      ],
      results: "35% increase in store visits, 400% social media following growth"
    }
  ]

  const tiktokAdsFaqData = [
    {
      question: "How much do TikTok ads cost?",
      answer: "TikTok ads typically cost $4.20 CPM and $0.74 per click. The minimum daily budget is $50 per campaign and $20 per ad group. Most businesses see positive ROI with monthly ad spends of $1,500-$5,000. Our TikTok ads management services start at $2,500/month with transparent pricing and no hidden fees."
    },
    {
      question: "What types of businesses work best on TikTok?",
      answer: "E-commerce, beauty, fashion, food, gaming, and D2C brands perform exceptionally well on TikTok. However, B2B companies are increasingly finding success with educational and behind-the-scenes content. Any business with visual products or services can benefit from TikTok advertising."
    },
    {
      question: "How long does it take to see results from TikTok advertising?",
      answer: "Most campaigns show initial results within 7-14 days. Significant ROI improvements typically occur within 30-60 days as campaigns optimize and audiences are refined. Our clients see average 500% increase in sales within 90 days."
    },
    {
      question: "Can small businesses afford TikTok advertising?",
      answer: "Yes! TikTok's lower CPM compared to other platforms makes it accessible for small businesses. Starting budgets of $1,500-$3,000 per month can drive meaningful results. The platform's cost-effectiveness makes it ideal for businesses with limited marketing budgets."
    },
    {
      question: "Do I need to use influencers for TikTok advertising?",
      answer: "While influencer partnerships can boost performance, they're not required. Our team creates high-performing organic-style content that resonates with TikTok audiences without influencer costs. We can also integrate influencer partnerships when beneficial for your specific goals."
    },
    {
      question: "How do you measure TikTok advertising success?",
      answer: "We track multiple KPIs including cost per acquisition (CPA), return on ad spend (ROAS), engagement rates, video completion rates, and most importantly, actual sales and revenue attribution. Our monthly reports include detailed campaign analysis and optimization recommendations."
    },
    {
      question: "What makes your TikTok advertising agency different?",
      answer: "Our TikTok advertising agency stands out through: proven results with 500% average sales increase, certified specialists with 5+ years experience, cost-effective $0.74 average CPC, full-service creative production, massive reach to 1.58 billion users, and no long-term contracts with month-to-month flexibility."
    },
    {
      question: "What TikTok ad formats do you specialize in?",
      answer: "We specialize in all TikTok ad formats including In-Feed Ads, TopView Ads, Branded Hashtag Challenges, Branded Effects & AR, Spark Ads, and Shopping Ads. Our team creates custom strategies based on your business goals and target audience preferences."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DigitalMarketingService",
        "name": "Frameleads TikTok Ads Management",
        "description": "Professional TikTok advertising and marketing services for businesses worldwide. TikTok ads management, creative production, and ROI-focused TikTok marketing strategies.",
        "url": "https://frameleads.com/tiktok-ads",
        "logo": "https://frameleads.com/logo.png",
        "image": "https://frameleads.com/tiktok-ads-agency.jpg",
        "priceRange": "$2500-$10000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Digital Marketing Blvd",
          "addressLocality": "Marketing City",
          "addressRegion": "MC",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "telephone": "+1-555-845-865-2237",
        "email": "tiktok@frameleads.com",
        "sameAs": [
          "https://facebook.com/frameleads",
          "https://tiktok.com/@frameleads"
        ],
        "serviceType": "TikTok Advertising Management",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "TikTok Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "TikTok Ads Management",
                "description": "Complete TikTok advertising campaign management and optimization"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "TikTok Creative Production",
                "description": "Professional video ad creation for TikTok marketing campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "TikTok Influencer Marketing",
                "description": "Strategic influencer partnerships and content collaboration"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": tiktokAdsFaqData.map(faq => ({
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
      <title>TikTok Ads Management Services | Expert TikTok Advertising</title>
      <meta name="description" content="Professional TikTok ads management services. Drive 500% more sales with expert TikTok advertising campaigns. $4.20 CPM. Get your free strategy consultation today." />
      <meta name="keywords" content="TikTok Ads, TikTok Advertising, TikTok Ads Management, TikTok Marketing, TikTok Business Ads, TikTok Advertising Agency, TikTok Promotion Services, TikTok Ads Cost 2025" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/tiktok-ads" />
      <meta property="og:title" content="TikTok Ads Management Services | Expert TikTok Advertising" />
      <meta property="og:description" content="Professional TikTok ads management services. Drive 500% more sales with expert TikTok advertising campaigns. $4.20 CPM. Get your free strategy consultation today." />
      <meta property="og:url" content="https://frameleads.com/tiktok-ads" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="TikTok Ads Management Services | Expert TikTok Advertising" />
      <meta name="twitter:description" content="Professional TikTok ads management services. Drive 500% more sales with expert TikTok advertising campaigns. $4.20 CPM. Get your free strategy consultation today." />
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
                🎵 TikTok Advertising Experts - 500% Average Sales Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Professional TikTok Ads Management That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Drives Real Results
              </span>{" "}
              Through Viral Content & Strategic Optimization
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your business with expert TikTok advertising services that reach over 1.58 billion active users worldwide. Our TikTok ads management specialists deliver campaigns that convert viewers into customers at just $4.20 CPM - 40% lower than traditional social media platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free TikTok Strategy Consultation
                </Button>
              </Link>
              <Link href="tel:+1-555-845-865-2237" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +1-555-TIKTOK-ADS
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Proven Results: 500% Sales Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: 5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Cost-Effective: $0.74 Average CPC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ No Long-Term Contracts</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎵 Trusted by 500+ Businesses Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">1.58B</div>
                  <div className="text-gray-600 text-sm">Monthly Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$4.20</div>
                  <div className="text-gray-600 text-sm">Average CPM</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">500%</div>
                  <div className="text-gray-600 text-sm">Average Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">2.6%</div>
                  <div className="text-gray-600 text-sm">Average Engagement Rate</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven TikTok Advertising Results Across Global Markets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable results for businesses worldwide through TikTok advertising, viral content creation, and strategic optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">500%</div>
                <div className="text-gray-600 text-sm">Average Sales Increase</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">1.58B</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">2.6%</div>
                <div className="text-gray-600 text-sm">Average Engagement Rate</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">$0.74</div>
                <div className="text-gray-600 text-sm">Average Cost Per Click</div>
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
                Why Choose Frameleads for TikTok Advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier TikTok advertising agency, combining proven results with cutting-edge creative production and viral content strategies. Our comprehensive approach ensures that every dollar of your advertising budget delivers maximum return on investment through strategic TikTok campaigns and data-driven optimization.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎵 TikTok Advertising Platform Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 500% average sales increase for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Certified TikTok advertising specialists with 5+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Multi-Format Expertise: In-Feed Ads, TopView, Hashtag Challenges, AR Effects, Shopping Ads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Massive Reach: Access to 1.58 billion monthly active users worldwide</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 TikTok Advertising Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cost-Effective: $0.74 average CPC vs $2.50+ on other platforms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Marketing: E-commerce, beauty, fashion, food, gaming, D2C brands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Viral Potential: Leveraging trending content and hashtag challenges for organic reach</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">TikTok Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time TikTok advertising analytics and insights</p>
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
              Comprehensive TikTok Advertising Services for Maximum ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive TikTok advertising services are designed to deliver viral content and drive business growth for companies worldwide through strategic campaigns, creative production, and performance optimization.
            </p>
          </div>

          <div className="space-y-12">
            {tiktokAdsServicesList.map((service, index) => {
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
              Transparent TikTok Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional TikTok ads management packages designed for businesses worldwide. All packages include campaign setup, creative production, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup TikTok Ads Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses new to TikTok</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>TikTok campaign setup & optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>In-Feed ads management</span>
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
                    <span>Up to $3k monthly ad spend management</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth TikTok Advertising Solution</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$5,000</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for scaling e-commerce brands</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-campaign management (In-Feed + TopView + Shopping Ads)</span>
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
                    <span>Hashtag challenge campaigns</span>
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

            {/* Enterprise Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise TikTok Advertising</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$10,000+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large brands & agencies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom TikTok advertising strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>All TikTok ad formats (In-Feed, TopView, Challenges, AR, Shopping)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Influencer partnership management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated TikTok advertising strategist</span>
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
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored China market solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven TikTok Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic TikTok advertising approach combining strategic planning, creative production, and continuous optimization to deliver measurable results and viral content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiktokAdsProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized TikTok Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique TikTok advertising needs and audience behaviors in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">TikTok Advertising Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped companies worldwide achieve remarkable growth through strategic TikTok advertising campaigns, viral content creation, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiktokAdsCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">TikTok Advertising Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive TikTok advertising services across In-Feed Ads, TopView, Hashtag Challenges, AR Effects, and Shopping Ads, helping businesses worldwide maximize their viral potential and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiktokAdsServices.map((service, index) => (
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
              Frequently Asked Questions About TikTok Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about TikTok ads management services and how Frameleads can help your business achieve measurable results through viral content and strategic advertising.
            </p>
          </div>

          <div className="space-y-6">
            {tiktokAdsFaqData.map((faq, index) => (
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
        title="Ready to Transform Your TikTok Advertising Strategy?"
        description="Partner with Frameleads, the most trusted TikTok advertising agency. Get your free consultation and discover how we can help you achieve measurable ROI and business growth through viral content campaigns and strategic optimization."
        primaryButtonText="Get Your Free TikTok Strategy Consultation"
        secondaryButtonText="Schedule Your Strategic TikTok Advertising Call"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete TikTok Advertising Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier TikTok advertising agency, we offer comprehensive services across In-Feed Ads, TopView, Hashtag Challenges, AR Effects, and Shopping Ads. 
              Explore our specialized services designed specifically for viral content success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* TikTok In-Feed Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok In-Feed Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate TikTok with our comprehensive In-Feed advertising strategies for maximum engagement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Native video advertising</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">For You Page placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Viral content optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore In-Feed Ads
                </Link>
              </CardContent>
            </Card>

            {/* TikTok TopView Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok TopView Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Premium placement advertisements that capture maximum attention with full-screen video experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Premium placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Full-screen experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand awareness focus</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore TopView Ads
                </Link>
              </CardContent>
            </Card>

            {/* TikTok Hashtag Challenges */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Hash className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok Hashtag Challenges</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Viral campaigns that boost user engagement through branded hashtag challenges and community participation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Viral campaign creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">User-generated content</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Community engagement</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Hashtag Challenges
                </Link>
              </CardContent>
            </Card>

            {/* TikTok Shopping Ads */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok Shopping Ads</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Drive direct sales through TikTok Shop integration with product-focused advertising and seamless shopping experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">TikTok Shop integration</span>
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
                  Explore Shopping Ads
                </Link>
              </CardContent>
            </Card>

            {/* TikTok Analytics & Tracking */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok Analytics & Tracking</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive tracking setup and performance analytics to measure ROI and optimize TikTok campaign performance.
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

            {/* TikTok Strategy & Consulting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok Strategy & Consulting</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic TikTok advertising consulting and training services for businesses looking to optimize their viral content strategy.
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free TikTok Ads Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current TikTok advertising performance across In-Feed Ads, TopView, Challenges, and Shopping Ads</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">TikTok Ads ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your TikTok advertising ROI and optimize your budget allocation for viral content campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">TikTok Advertising Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to TikTok advertising strategies and best practices for viral content creation and audience engagement</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn TikTok advertising with our expert-led courses and training programs for viral content creation and campaign optimization</p>
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
            !
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
    </>
  )
}
