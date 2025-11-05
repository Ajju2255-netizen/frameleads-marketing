'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function DigitalMarketingInSingaporePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const singaporeBusinessMarkets = [
    {
      category: "Central Business District (CBD) - Financial Hub",
      areas: ["Raffles Place", "Marina Bay", "Shenton Way", "Tanjong Pagar", "Anson Road", "Robinson Road"],
      description: "Singapore's premier financial district with focus on banking, fintech, and international corporations requiring sophisticated digital marketing strategies"
    },
    {
      category: "Orchard Road - Retail & Luxury Marketing", 
      areas: ["Orchard Road", "Scotts Road", "Tanglin", "River Valley", "Cairnhill", "Emerald Hill"],
      description: "Premium retail and luxury brand digital marketing specialists for high-end consumer engagement and e-commerce optimization"
    },
    {
      category: "Jurong East - Industrial & Manufacturing",
      areas: ["Jurong East", "Jurong West", "Tuas", "Pioneer", "Boon Lay", "Taman Jurong"],
      description: "Industrial B2B digital marketing expertise for manufacturing, logistics, and supply chain companies in Singapore's industrial heartland"
    },
    {
      category: "Changi - Aviation & Logistics Hub",
      areas: ["Changi", "Tampines", "Pasir Ris", "Simei", "Bedok", "Eunos"],
      description: "Aviation, logistics, and trade digital marketing specialists serving Singapore's gateway to Southeast Asia"
    },
    {
      category: "Woodlands - Northern Gateway",
      areas: ["Woodlands", "Sembawang", "Yishun", "Admiralty", "Marsiling", "Kranji"],
      description: "Cross-border digital marketing expertise for companies expanding from Singapore to Malaysia and regional markets"
    },
    {
      category: "Sentosa & Harbourfront - Tourism & Hospitality",
      areas: ["Sentosa", "Harbourfront", "Telok Blangah", "Mount Faber", "Keppel Bay", "VivoCity"],
      description: "Tourism, hospitality, and entertainment digital marketing specialists for Singapore's leisure and tourism sector"
    }
  ]

  const digitalMarketingServices = [
    {
      icon: TrendingUp,
      title: "SEO Singapore - Search Engine Optimization for Singapore Market Dominance",
      description: "Comprehensive SEO strategies specifically designed for Singapore's competitive digital landscape, targeting high-value keywords and local search optimization across all Singapore regions.",
      features: [
        "Local SEO Singapore: Google My Business optimization for Singapore businesses",
        "Technical SEO: Website optimization for Singapore users and Google.com.sg",
        "Keyword Research: Targeting high-volume Singapore-specific terms",
        "Competitor Analysis: Comprehensive analysis of Singapore market competitors",
        "Content Optimization: Singapore-focused content strategy and optimization"
      ],
      results: [
        "300% increase in organic traffic from Singapore searches",
        "Top 3 rankings for target keywords in Singapore",
        "85% improvement in local visibility across Singapore regions"
      ]
    },
    {
      icon: DollarSign,
      title: "Google Ads Singapore - PPC Advertising Optimized for Singapore Audiences",
      description: "Strategic Google Ads and Microsoft Advertising campaigns optimized for Singapore audiences, purchasing behaviors, and regional market dynamics across Singapore.",
      features: [
        "Singapore Market Targeting: Geo-targeted campaigns for Singapore regions",
        "Local Competition Analysis: Strategic bidding for Singapore market keywords",
        "Conversion Optimization: Landing pages optimized for Singapore consumers",
        "Multi-language Support: English, Mandarin, Malay, and Tamil ad campaigns",
        "Singapore Payment Integration: Local payment methods and banking systems"
      ],
      results: [
        "250% improvement in Singapore PPC performance",
        "40% reduction in cost-per-acquisition for Singapore market",
        "3.2x average return on ad spend (ROAS) in Singapore"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Marketing Singapore - Multi-Platform Singapore Audience Engagement",
      description: "Multi-platform social media marketing optimized for Singapore audiences, cultural nuances, and diverse business objectives across Singapore's digital ecosystem.",
      features: [
        "LinkedIn Marketing: B2B networking and lead generation for Singapore market",
        "Instagram Marketing: Visual storytelling for Singapore lifestyle brands",
        "Facebook Marketing: Community building and local engagement strategies",
        "TikTok Marketing: Engaging young Singapore demographics",
        "WeChat Marketing: Essential for Chinese-speaking Singapore market"
      ],
      results: [
        "280% increase in social media conversions from Singapore users",
        "50% lower cost-per-acquisition on Singapore market",
        "350% improvement in engagement rates with Singapore audiences"
      ]
    },
    {
      icon: Users,
      title: "Content Marketing Singapore - Strategic Content Creation for Singapore Market",
      description: "Strategic content creation and distribution tailored to Singapore audiences, cultural references, and regional preferences across the Singapore market.",
      features: [
        "Multi-language Content: English, Mandarin, Malay content creation",
        "Singapore Market Insights: Industry-specific content for Singapore businesses",
        "Cultural Adaptation: Content that resonates with Singapore values and trends",
        "SEO-Optimized Content: Long-form content targeting Singapore keywords",
        "Video Content: YouTube and social media content for Singapore audiences"
      ],
      results: [
        "320% increase in content engagement from Singapore audiences",
        "55% improvement in lead quality from Singapore prospects",
        "200% increase in brand awareness across Singapore regions"
      ]
    },
    {
      icon: Settings,
      title: "Web Development for Singapore Market Success",
      description: "Development of conversion-optimized websites adapted for Singapore users, design preferences, and local market requirements including Singapore compliance standards.",
      features: [
        "Responsive Web Design: Optimized for Singapore devices and internet speeds",
        "Conversion Rate Optimization (CRO): For Singapore user behavior patterns",
        "E-commerce Development: With Singapore payment systems and banking integration",
        "Site Speed Optimization: For Singapore hosting and CDN performance",
        "User Experience (UX) Design: Tailored to Singapore preferences and culture"
      ],
      results: [
        "90% average improvement in conversion rate for Singapore visitors",
        "40% reduction in bounce rate for Singapore users",
        "380% increase in lead generation from Singapore market"
      ]
    }
  ]

  const digitalMarketingProcess = [
    {
      step: "01",
      title: "Singapore Market Analysis & Strategy Development",
      description: "Comprehensive Singapore market audit including consumer behavior analysis, competitive benchmarking across Singapore regions, target audience research for Singapore demographics, and goal setting aligned with Singapore business objectives."
    },
    {
      step: "02",
      title: "Integrated Digital Marketing Strategy for Singapore",
      description: "Comprehensive digital marketing strategy with SEO, PPC, social media, content marketing, and web development plans specifically adapted for the Singapore market, including regional variations and cultural considerations."
    },
    {
      step: "03",
      title: "Data-Driven Campaign Execution",
      description: "Data-driven campaign execution with real-time performance monitoring across Singapore regions, A/B testing implementation for Singapore audiences, and weekly optimization cycles for maximum ROI in the Singapore market."
    },
    {
      step: "04",
      title: "Continuous Growth & Singapore Market Expansion",
      description: "Continuous growth and optimization through scaling Singapore campaigns, implementing advanced automation for Singapore clients, and monthly strategic planning sessions focused on Singapore market expansion."
    }
  ]

  const whyChooseDigitalMarketing = [
    "Native Singapore Market Expertise: Deep understanding of Singapore consumer behavior, cultural nuances, and local search patterns",
    "Singapore Specialists: Complete coverage across CBD, Orchard Road, Jurong East, Changi, Woodlands, and all Singapore regions",
    "Multi-language Optimization: Strategic targeting of English, Mandarin, Malay, and Tamil keywords used by Singapore audiences",
    "Performance-Driven Results: 400% average ROI increase for Singapore clients",
    "Google.com.sg Optimization: Specialized expertise in Singapore search engine landscape",
    "Singapore Compliance: Full compliance with PDPA and Singapore data protection regulations",
    "Singapore Industry-Specific Expertise: Proven success in fintech, healthcare, real estate, e-commerce, and technology sectors in Singapore",
    "Singapore Startup Ecosystem Knowledge: Deep understanding of Singapore startup funding cycles, government grants, and growth patterns"
  ]

  const digitalMarketingCaseStudies = [
    {
      industry: "CBD Fintech Startup",
      location: "Singapore CBD",
      challenge: "Early-stage B2B fintech needed to scale from 15 to 150 enterprise clients in the Singapore market",
      solution: "Comprehensive Singapore digital marketing strategy with SEO, PPC, social media, and content marketing",
      results: [
        "380% increase in qualified leads from Singapore market",
        "S$15M ARR growth in 12 months",
        "90% improvement in enterprise client acquisition",
        "3.5x return on ad spend (ROAS) in Singapore"
      ]
    },
    {
      industry: "Orchard Road E-commerce Brand",
      location: "Singapore Orchard Road",
      challenge: "D2C luxury brand struggling with high customer acquisition costs and low ROAS in Singapore market",
      solution: "Complete Singapore digital marketing overhaul with SEO, social media, content marketing, and conversion optimization",
      results: [
        "350% increase in organic traffic from Singapore searches",
        "50% reduction in customer acquisition cost",
        "280% improvement in customer lifetime value for Singapore clients",
        "5.2x return on ad spend on Singapore market"
      ]
    },
    {
      industry: "Jurong East Manufacturing Company",
      location: "Singapore Jurong East",
      challenge: "B2B manufacturing company needed qualified leads in Singapore's competitive industrial market",
      solution: "Comprehensive B2B Singapore digital marketing strategy with LinkedIn, Google Ads, content marketing, and SEO",
      results: [
        "420% increase in qualified B2B leads from Singapore market",
        "45% reduction in sales cycle duration",
        "S$3.2M in new business revenue in 8 months",
        "80% improvement in inquiry-to-client conversion rate"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies in Singapore",
      description: "Transform your Singapore tech presence with comprehensive digital marketing strategies designed for Singapore's thriving innovation ecosystem and startup landscape.",
      services: [
        "B2B lead generation and enterprise sales enablement for Singapore market",
        "Free trial conversions and freemium model optimization for Singapore users",
        "Product-led growth and user acquisition campaigns across Singapore regions",
        "Competitive intelligence and market positioning in Singapore tech sector"
      ],
      results: "380% increase in qualified demo requests from Singapore market, 65% improvement in trial-to-paid conversion for Singapore users"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands in Singapore",
      description: "Scale your online business with comprehensive digital marketing campaigns optimized for Singapore digital consumers and purchasing behaviors.",
      services: [
        "Shopping ads optimization and dynamic product ads for Singapore market",
        "Customer acquisition funnels and retention campaigns for Singapore buyers",
        "Mobile commerce optimization and app install campaigns for Singapore users",
        "Cross-border selling and international expansion from Singapore base"
      ],
      results: "350% increase in online sales from Singapore market, 45% improvement in return on ad spend (ROAS) for Singapore campaigns"
    },
    {
      icon: Building2,
      title: "B2B Manufacturing & Industrial Companies",
      description: "Generate qualified leads for Singapore manufacturing and B2B companies through targeted digital marketing campaigns focused on Singapore's industrial sector.",
      services: [
        "B2B lead generation and sales enablement for Singapore manufacturing",
        "LinkedIn marketing and professional networking for Singapore B2B",
        "Digital marketing for trade shows and industrial events of Singapore companies",
        "Account-based marketing (ABM) for Singapore enterprise clients"
      ],
      results: "420% increase in qualified B2B leads from Singapore market, 40% reduction in cost-per-lead for Singapore B2B campaigns"
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Practices in Singapore",
      description: "Drive patient acquisition for Singapore healthcare providers through compliant, results-driven digital marketing across Singapore.",
      services: [
        "Patient acquisition campaigns and appointment booking optimization for Singapore healthcare",
        "Telemedicine promotion and health app marketing for Singapore patients",
        "Hospital marketing campaigns and clinic promotion across Singapore regions",
        "Digital transformation of wellness and fitness industry for Singapore market"
      ],
      results: "250% increase in appointment bookings from Singapore patients, 50% improvement in patient acquisition cost for Singapore healthcare providers"
    },
    {
      icon: GraduationCap,
      title: "Financial Services & Fintech in Singapore",
      description: "Maximize customer acquisition for Singapore financial institutions and fintech companies with comprehensive digital marketing strategies.",
      services: [
        "Customer acquisition campaigns and lead generation for Singapore financial services",
        "Fintech marketing and digital banking promotion for Singapore clients",
        "Investment digital marketing and wealth management for Singapore market",
        "Insurance marketing and financial planning across Singapore regions"
      ],
      results: "320% increase in qualified leads from Singapore financial market, 55% improvement in conversion rates for Singapore financial services"
    }
  ]

  const digitalMarketingFaqData = [
    {
      question: "What makes digital marketing in Singapore unique?",
      answer: "Singapore presents unique opportunities with its highly digitalized population, multi-cultural market (English, Mandarin, Malay, Tamil), strong B2B ecosystem, and strategic position as Southeast Asia's business hub. Cultural considerations, multi-language optimization, and regional expansion opportunities across ASEAN require specialized expertise."
    },
    {
      question: "How long does it take to see results from Singapore digital marketing?",
      answer: "Singapore digital marketing results vary by channel. PPC campaigns show immediate results, SEO typically takes 3-6 months for significant improvements, while social media and content marketing show engagement within 2-4 weeks. We provide weekly performance updates to track progress across all channels with Singapore-specific metrics and Singapore market insights."
    },
    {
      question: "What's the typical budget for digital marketing in Singapore?",
      answer: "Singapore digital marketing budgets vary based on your goals and market size. For comprehensive digital marketing including SEO, PPC, social media, and content, we recommend starting with S$4,000-S$8,000 monthly for small businesses and S$25,000+ for enterprise campaigns. Our management fees typically range from 15-20% of total marketing spend, with transparent Singapore pricing structures."
    },
    {
      question: "Do you work with Singapore startups?",
      answer: "Absolutely! The Singapore startup ecosystem is a central focus area, including CBD's fintech scene, innovative companies in Jurong East, and emerging digital hubs. We offer flexible engagement models for early-stage companies, including performance-based pricing and growth packages designed for Singapore startups, with knowledge of Singapore government grants and funding cycles."
    },
    {
      question: "What results can I expect from Singapore digital marketing?",
      answer: "We track comprehensive metrics across all channels including organic traffic growth from Singapore searches, cost-per-acquisition (CPA) for Singapore customers, return on ad spend (ROAS) in Singapore market, conversion rates for Singapore users, customer lifetime value (CLV) for Singapore clients, and attribution across all touchpoints. Monthly reports include Singapore business impact analysis and optimization recommendations."
    },
    {
      question: "Which digital marketing channels work best in Singapore?",
      answer: "Our expertise covers comprehensive digital marketing including SEO Singapore, Google Ads (Search, Display, Shopping, YouTube), Facebook & Instagram marketing, LinkedIn for Singapore B2B, content marketing in multiple languages, web design & development, and emerging platforms like TikTok. Channel selection depends on your target audience behavior and business objectives in the Singapore market, with regional variations across different Singapore areas."
    },
    {
      question: "Can you optimize existing digital marketing campaigns for the Singapore market?",
      answer: "Yes, we offer comprehensive Singapore digital marketing audit and optimization services for existing campaigns. Our 30-day Singapore digital marketing audit identifies optimization opportunities across all channels specifically for the Singapore market and provides actionable recommendations for immediate campaign performance improvement with Singapore audiences."
    },
    {
      question: "Do you offer digital marketing training for Singapore companies?",
      answer: "We offer comprehensive digital marketing training programs for Singapore companies, including SEO Singapore, Google Ads certification guidance, Facebook Blueprint training, content marketing, and customized workshops for your marketing team. Training can be conducted at your Singapore office or virtually, with sessions adapted to Singapore market dynamics and business practices."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads Digital Marketing Singapore",
        "description": "Premier digital marketing agency in Singapore specializing in SEO, PPC, social media marketing, and web development for Singapore businesses. 400% ROI growth.",
        "url": "https://frameleads.com/digital-marketing-in-singapore",
        "telephone": "+65-8888-8888",
        "email": "singapore@frameleads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 Raffles Place, #40-02",
          "addressLocality": "Singapore",
          "addressRegion": "Singapore",
          "postalCode": "048616",
          "addressCountry": "SG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 1.284582,
          "longitude": 103.851547
        },
        "areaServed": ["Singapore", "CBD", "Orchard Road", "Jurong East", "Changi", "Woodlands", "Sentosa"],
        "serviceType": "Digital Marketing",
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
                🏆 #1 Digital Marketing Agency in Singapore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Digital Marketing in Singapore - Expert Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Singapore Businesses
              </span>{" "}
              Delivering 400% ROI Growth
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Accelerate your growth in Singapore's dynamic digital market with proven digital marketing strategies. Our specialized agency combines international expertise with deep local Singapore market knowledge, delivering measurable results for startups, SMEs, and enterprises across Singapore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your Free Singapore Market Audit
                </Button>
              </Link>
              <Link href="tel:+6588888888" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +65 8888-8888
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>400% Average ROI Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>350+ Qualified Leads Monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>98% Client Retention Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>5+ Years Serving Singapore Businesses</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 400+ Singapore Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">800+</div>
                  <div className="text-gray-600 text-sm">Successful Singapore Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">S$120M+</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results Across Singapore</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable growth for businesses across Singapore's dynamic digital landscape</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">400+</div>
                <div className="text-gray-600 text-sm">Singapore Clients Served</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">6+</div>
                <div className="text-gray-600 text-sm">Singapore Regions Covered</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">98%</div>
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
                Why Choose Frameleads for Digital Marketing in Singapore?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as Singapore's premier international digital marketing agency, combining deep Singapore market knowledge with cutting-edge digital marketing expertise. Our comprehensive approach ensures that every dollar of your marketing budget delivers maximum return on investment across all digital channels in the Singapore market.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Singapore Market Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Local Market Intelligence: 5+ years serving Singapore's diverse business landscape</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Expertise: Singapore SaaS, e-commerce, real estate, healthcare, fintech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Singapore Startup Ecosystem Knowledge: Deep understanding of Singapore startup funding cycles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Regional Targeting Excellence: Hyper-local targeting for major Singapore regions</span>
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
              Comprehensive Digital Marketing Services for Singapore Market Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive digital marketing services are designed to deliver measurable ROI and drive business growth for Singapore companies across all industries throughout Singapore.
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

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Singapore Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic digital marketing approach specifically designed for Singapore companies, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results across Singapore.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Expertise Across Singapore Market Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries in Singapore, with deep understanding of unique digital marketing needs and business objectives in each sector throughout the Singapore market.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Singapore Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped Singapore companies achieve remarkable growth through strategic digital marketing campaigns across Singapore.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Singapore Regions We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital marketing services across all major Singapore business districts, helping companies in each region maximize their digital presence and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {singaporeBusinessMarkets.map((district, index) => (
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
              Frequently Asked Questions - Digital Marketing in Singapore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about digital marketing services in Singapore and how Frameleads can help your business achieve measurable results across Singapore.
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
        title="Ready to Transform Your Digital Presence in Singapore?"
        description="Partner with Frameleads, Singapore's most trusted international digital marketing agency. Get your free audit and discover how we can help you achieve measurable ROI and business growth in Singapore's competitive market."
        primaryButtonText="Get Your Free Singapore Market Audit"
        secondaryButtonText="Schedule Your Strategic Singapore Call"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Singapore Digital Marketing Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As Singapore's premier international digital marketing agency, we offer comprehensive services across all digital channels. 
              Explore our specialized services designed specifically for Singapore's diverse business landscape.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* SEO Services in Brazil */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">SEO Services Singapore</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate search results with our comprehensive SEO strategies adapted for Singapore businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Local SEO optimization for Singapore regions</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Technical SEO audits & corrections</span>
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

            {/* Creative Advertising in Brazil */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Creative Advertising Singapore</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Captivate your Singapore audience with innovative creative campaigns that drive engagement and conversions.
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

            {/* B2B Marketing in Brazil */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">B2B Marketing Singapore</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Accelerate enterprise sales with targeted B2B marketing strategies for Singapore's corporate ecosystem.
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

            {/* Real Estate Marketing in Brazil */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Real Estate Marketing Singapore</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Connect with property buyers through targeted digital marketing campaigns for Singapore's real estate market.
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
                    <span className="text-sm">Digital Marketing in Dubai</span>
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
                <Link href="/digital-marketing-in-dubai" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Singapore Market Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current digital marketing performance in the Singapore market</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your digital marketing ROI and optimize your budget allocation for Singapore campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Digital Marketing Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to digital marketing strategies and best practices for Singapore businesses</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn digital marketing with our expert-led courses and training programs for the Singapore market</p>
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

      <Footer />
    </div>
    </>
  )
}
