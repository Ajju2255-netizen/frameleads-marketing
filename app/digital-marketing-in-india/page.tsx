'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, Smartphone as Mobile, Video, MessageCircle, Search, ShoppingBag, Users as People, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function DigitalMarketingInIndiaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const indianBusinessMarkets = [
    {
      category: "Mumbai - Financial & Commercial Capital",
      areas: ["Bandra Kurla Complex", "Nariman Point", "Andheri East", "Powai", "Goregaon", "Malad"],
      description: "Mumbai's status as India's financial capital requires sophisticated digital marketing strategies for BFSI, entertainment, and enterprise clients"
    },
    {
      category: "Delhi NCR - Political & Business Hub", 
      areas: ["Connaught Place", "Gurgaon", "Noida", "Greater Noida", "Faridabad", "Ghaziabad"],
      description: "Delhi NCR's diverse business environment demands comprehensive digital marketing approaches for India's most cosmopolitan market"
    },
    {
      category: "Bangalore - Technology & Innovation Center",
      areas: ["Electronic City", "Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Marathahalli"],
      description: "Bangalore's tech ecosystem requires specialized digital marketing strategies for India's Silicon Valley and IT powerhouse"
    },
    {
      category: "Chennai - Manufacturing & IT Hub",
      areas: ["T. Nagar", "Anna Nagar", "Velachery", "OMR", "Guindy", "Tambaram"],
      description: "Chennai's manufacturing and IT focus demands robust B2B digital marketing strategies for India's southern business gateway"
    },
    {
      category: "Hyderabad - Emerging Tech Hub",
      areas: ["HITEC City", "Gachibowli", "Banjara Hills", "Jubilee Hills", "Secunderabad", "Kondapur"],
      description: "Hyderabad's growing tech ecosystem requires innovative digital marketing strategies for India's fastest-growing IT destination"
    },
    {
      category: "Pune - Education & IT Center",
      areas: ["Hinjewadi", "Koregaon Park", "Baner", "Aundh", "Viman Nagar", "Kharadi"],
      description: "Pune's education and IT focus demands targeted digital marketing strategies for India's Oxford of the East"
    }
  ]

  const digitalMarketingServices = [
    {
      icon: Search,
      title: "SEO Services India - Search Engine Optimization for Indian Market",
      description: "Comprehensive SEO strategies optimized for Google India, targeting high-value Indian keywords and local search optimization across all major Indian cities and regions.",
      features: [
        "Technical SEO Audits: Complete website analysis and optimization",
        "Keyword Research: High-volume Indian search terms and phrases",
        "Local SEO Optimization: City-specific targeting for Indian markets",
        "Content Marketing: India-focused content creation and optimization",
        "Link Building: High-authority Indian website partnerships"
      ],
      results: [
        "300% increase in organic traffic within 6 months",
        "Top 3 Google rankings for target keywords",
        "85% improvement in local search visibility"
      ]
    },
    {
      icon: BarChart3,
      title: "PPC Services India - Pay-Per-Click Advertising for Maximum ROI",
      description: "Strategic Google Ads and social media PPC campaigns optimized for the Indian market, delivering immediate results and measurable ROI for Indian businesses.",
      features: [
        "Google Ads Management: Comprehensive paid search campaigns",
        "Facebook & Instagram Advertising: Social media PPC optimization",
        "LinkedIn B2B Campaigns: Professional network advertising",
        "YouTube Video Advertising: Video content promotion",
        "Shopping Campaigns: E-commerce PPC optimization"
      ],
      results: [
        "15:1 average return on ad spend (ROAS)",
        "50% reduction in cost-per-acquisition",
        "250% increase in qualified leads"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Marketing India - Build Brand Presence Across Platforms",
      description: "Comprehensive social media marketing strategies for Indian audiences across Facebook, Instagram, LinkedIn, Twitter, and YouTube, driving engagement and conversions.",
      features: [
        "Facebook Marketing: Community building and engagement",
        "Instagram Growth: Visual content and influencer partnerships",
        "LinkedIn B2B Marketing: Professional network expansion",
        "Twitter Brand Building: Real-time engagement and customer service",
        "YouTube Channel Optimization: Video content strategy"
      ],
      results: [
        "400% increase in social media engagement",
        "200% improvement in brand awareness",
        "150% increase in social media conversions"
      ]
    },
    {
      icon: Users,
      title: "Content Marketing India - Engaging Content for Indian Audiences",
      description: "Strategic content marketing solutions tailored for Indian consumers, including blog writing, video content, and multi-language content creation in regional languages.",
      features: [
        "Blog Writing: India-focused content creation",
        "Video Content Production: Engaging visual storytelling",
        "Email Marketing: Automated nurture campaigns",
        "WhatsApp Marketing: Direct customer communication",
        "Regional Content: Multi-language content in Hindi, Tamil, Telugu, etc."
      ],
      results: [
        "250% increase in content engagement",
        "180% improvement in lead generation",
        "120% increase in time spent on website"
      ]
    },
    {
      icon: Monitor,
      title: "Web Design & Development India - Mobile-First Solutions",
      description: "Responsive web design and development services optimized for Indian users, with mobile-first approach and multi-language support for diverse Indian markets.",
      features: [
        "Responsive Web Design: Mobile-optimized websites",
        "E-commerce Development: Online store creation",
        "Website Speed Optimization: Fast loading times",
        "Conversion Rate Optimization: User experience improvement",
        "Multi-language Support: Regional language integration"
      ],
      results: [
        "60% improvement in website conversion rates",
        "40% increase in mobile traffic",
        "90% improvement in page load speed"
      ]
    }
  ]

  const digitalMarketingProcess = [
    {
      step: "01",
      title: "India Market Analysis & Strategy",
      description: "Comprehensive India market audit including consumer behavior analysis, competitive benchmarking across Indian platforms, target audience research for Indian demographics, and goal setting aligned with India business objectives."
    },
    {
      step: "02",
      title: "Platform Strategy Development",
      description: "Comprehensive digital marketing strategy with Google, Facebook, Instagram, LinkedIn, and e-commerce platform plans specifically adapted for the Indian market, including cultural considerations and regional preferences."
    },
    {
      step: "03",
      title: "Campaign Execution & Management",
      description: "Data-driven campaign execution with real-time performance monitoring across Indian platforms, A/B testing implementation for Indian audiences, and weekly optimization cycles for maximum ROI in the Indian market."
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Continuous growth and optimization through scaling Indian campaigns, implementing advanced automation for Indian clients, and monthly strategic planning sessions focused on India market expansion."
    }
  ]

  const whyChooseDigitalMarketing = [
    "Native Indian Market Expertise: Deep understanding of Indian consumer behavior, cultural nuances, and platform-specific patterns",
    "India Platform Specialists: Complete coverage across Google, Facebook, Instagram, LinkedIn, and all major Indian platforms",
    "Local Market Intelligence: Strategic targeting of India-specific keywords and search behaviors in English and regional languages",
    "Performance-Driven Results: 300% average ROI increase for Indian market clients",
    "Multi-language Expertise: Specialized expertise in Hindi, Tamil, Telugu, Bengali, and other regional languages for content marketing",
    "India Compliance: Full compliance with Indian regulations, data protection laws, and advertising standards",
    "India Industry-Specific Expertise: Proven success in technology, e-commerce, healthcare, financial services, and manufacturing sectors in India",
    "Cultural Sensitivity: Deep understanding of Indian business culture, values, and regional preferences across all states"
  ]

  const digitalMarketingCaseStudies = [
    {
      industry: "E-commerce Fashion Brand",
      location: "Mumbai, India",
      challenge: "Online fashion retailer needed to increase brand awareness and compete with established players in Indian market",
      solution: "Comprehensive India digital marketing strategy with Google Ads, Facebook, Instagram, and e-commerce optimization",
      results: [
        "300% increase in brand awareness across Indian platforms",
        "₹2.5 crores revenue growth in first year",
        "85% improvement in social commerce conversion rates",
        "4.5x return on ad spend (ROAS) in India"
      ]
    },
    {
      industry: "Healthcare Technology",
      location: "Bangalore, India",
      challenge: "HealthTech startup struggling with high customer acquisition costs and low brand recognition in Indian market",
      solution: "Complete India digital marketing overhaul with Google Ads, LinkedIn, content marketing, and SEO optimization",
      results: [
        "250% increase in qualified leads from Indian market",
        "60% improvement in customer acquisition cost",
        "280% improvement in brand recognition among Indian consumers",
        "3.8x return on ad spend in Indian market"
      ]
    },
    {
      industry: "B2B Manufacturing Company",
      location: "Chennai, India",
      challenge: "Manufacturing company needed to establish online presence and generate leads in India's competitive B2B market",
      solution: "Comprehensive B2B India digital marketing strategy with LinkedIn, Google Ads, SEO, and content marketing",
      results: [
        "400% increase in qualified B2B leads from Indian market",
        "45% reduction in cost-per-lead for Indian B2B campaigns",
        "₹1.2 crores in new business revenue in 8 months",
        "85% improvement in lead-to-client conversion rate"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies in India",
      description: "Transform your tech presence in India with comprehensive digital marketing strategies designed for India's thriving innovation ecosystem and digital transformation.",
      services: [
        "B2B lead generation through LinkedIn and Google Ads for Indian market",
        "Product-led growth campaigns on Indian platforms and marketplaces",
        "Competitive intelligence and market positioning in Indian tech sector",
        "Regulatory compliance and data protection for Indian operations"
      ],
      results: "350% increase in qualified demo requests from Indian market, 70% improvement in trial-to-paid conversion for Indian users"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands in India",
      description: "Scale your business in India with comprehensive digital marketing campaigns optimized for Indian consumers and purchasing behaviors.",
      services: [
        "Amazon India and Flipkart store setup and optimization",
        "Facebook and Instagram social commerce integration",
        "UPI and digital payment solutions integration",
        "Cultural adaptation and brand localization for Indian market"
      ],
      results: "280% increase in online sales from Indian market, 55% improvement in return on ad spend (ROAS) for Indian campaigns"
    },
    {
      icon: Building2,
      title: "Manufacturing & B2B Services",
      description: "Generate qualified leads for Indian manufacturing and B2B services through targeted digital marketing campaigns focused on India's industrial ecosystem.",
      services: [
        "B2B lead generation through LinkedIn and Google Ads",
        "Professional network marketing for Indian business networking",
        "Trade show and industry event marketing in India",
        "Account-based marketing (ABM) for Indian enterprise clients"
      ],
      results: "320% increase in qualified B2B leads from Indian market, 40% reduction in cost-per-lead for Indian B2B campaigns"
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Devices in India",
      description: "Drive patient acquisition for healthcare providers through compliant, results-driven digital marketing across Indian platforms.",
      services: [
        "Patient acquisition campaigns through Google Ads and Facebook",
        "Medical device marketing and regulatory compliance",
        "Healthcare professional education and engagement",
        "Digital health app marketing and telemedicine promotion"
      ],
      results: "250% increase in patient engagement from Indian market, 50% improvement in patient acquisition cost for Indian healthcare providers"
    },
    {
      icon: GraduationCap,
      title: "Financial Services & Fintech in India",
      description: "Maximize customer acquisition for financial institutions and fintech companies with comprehensive digital marketing strategies adapted for Indian regulations.",
      services: [
        "Customer acquisition through UPI and digital payment integration",
        "Fintech marketing and digital banking promotion for Indian clients",
        "Investment and wealth management marketing for Indian market",
        "Regulatory compliance and financial advertising in India"
      ],
      results: "300% increase in qualified leads from Indian financial market, 60% improvement in conversion rates for Indian financial services"
    }
  ]

  const digitalMarketingFaqData = [
    {
      question: "How is digital marketing in India different from other markets?",
      answer: "Digital marketing in India requires understanding of diverse consumer behaviors across 29 states, multiple languages, and varying internet penetration. The market is mobile-first, price-sensitive, and requires cultural localization. Indian consumers have unique preferences, purchasing patterns, and regional differences compared to Western markets."
    },
    {
      question: "What platforms are most important for India digital marketing?",
      answer: "Essential platforms include Google (search and YouTube), Facebook and Instagram (social media), LinkedIn (B2B), WhatsApp (messaging), and e-commerce platforms like Amazon India and Flipkart. Each platform serves different purposes and requires specialized strategies for maximum effectiveness in the Indian market."
    },
    {
      question: "What's the typical digital marketing budget for Indian businesses?",
      answer: "India digital marketing budgets vary based on business size and goals. For comprehensive digital marketing including SEO, PPC, social media, and content marketing, we recommend starting with ₹25,000-50,000 monthly for small businesses and ₹1,00,000+ for enterprises. Our management fees typically range from 15-20% of total marketing spend, with transparent pricing structures for Indian market campaigns."
    },
    {
      question: "Do you work with small businesses and startups in India?",
      answer: "Yes! We have special packages starting from ₹25,000/month designed specifically for startups and small businesses. We understand the unique challenges faced by Indian SMEs and provide cost-effective digital marketing solutions that deliver measurable ROI within their budget constraints."
    },
    {
      question: "How long does it take to see results from India marketing campaigns?",
      answer: "Initial results typically appear within 30-60 days, with significant growth achieved in 3-6 months as brand awareness builds and campaigns optimize. Indian consumers require trust-building time, so longer-term strategies often yield better results than quick campaigns. PPC and social media can show immediate results, while SEO takes 3-6 months."
    },
    {
      question: "Which digital marketing channels work best in India?",
      answer: "Our expertise covers comprehensive digital marketing including Google Ads, Facebook/Instagram advertising, LinkedIn B2B marketing, SEO, content marketing, and e-commerce optimization. Channel selection depends on your target audience behavior and business objectives in the Indian market, with platform-specific optimization strategies."
    },
    {
      question: "How do we measure success in India digital marketing?",
      answer: "Key metrics include organic traffic growth, keyword rankings, lead quality, conversion rates, and revenue attribution through Indian payment systems. We track Google Analytics, social media engagement, email marketing performance, and e-commerce conversion rates with detailed monthly reporting in Indian Rupees."
    },
    {
      question: "Can you create content in regional Indian languages?",
      answer: "Absolutely! We create content in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, and other regional languages. Our team includes native speakers and cultural experts who understand local preferences, dialects, and cultural nuances to create authentic, engaging content for diverse Indian audiences."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads Digital Marketing Agency India",
        "description": "Premier digital marketing agency specializing in India market, SEO services, PPC advertising, social media marketing, and e-commerce solutions for Indian businesses. 300% ROI growth.",
        "url": "https://frameleads.com/digital-marketing-in-india",
        "telephone": "+91-98765-43210",
        "email": "hello@frameleads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 MG Road",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": ["India", "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"],
        "serviceType": "Digital Marketing",
        "priceRange": "₹25,000 - ₹1,00,000",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "sameAs": [
          "https://linkedin.com/company/frameleads-india",
          "https://facebook.com/frameleadsindia"
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
      <title>Premier Digital Marketing Agency in India | Frameleads</title>
      <meta name="description" content="Leading digital marketing agency in India offering SEO, PPC, social media marketing & web design. Boost your business with proven strategies. Get free consultation today!" />
      <meta name="keywords" content="digital marketing agency India, best digital marketing company India, SEO services India, digital marketing in India, digital marketing services India, PPC services India, digital marketing consultant India" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/digital-marketing-in-india" />
      <meta property="og:title" content="Premier Digital Marketing Agency in India | Frameleads" />
      <meta property="og:description" content="Leading digital marketing agency in India offering SEO, PPC, social media marketing & web design. Boost your business with proven strategies. Get free consultation today!" />
      <meta property="og:url" content="https://frameleads.com/digital-marketing-in-india" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Premier Digital Marketing Agency in India | Frameleads" />
      <meta name="twitter:description" content="Leading digital marketing agency in India offering SEO, PPC, social media marketing & web design. Boost your business with proven strategies. Get free consultation today!" />
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
                🏆 #1 Digital Marketing Agency in India for Indian Businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Premier Digital Marketing Agency in India - Drive Growth with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Expert Solutions
              </span>{" "}
              Delivering 300% ROI Growth
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your business with India's leading digital marketing agency. Our specialized team combines global expertise with deep local Indian market knowledge, delivering measurable results for businesses across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and all major Indian cities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Your Free India Market Audit
                </Button>
              </Link>
              <Link href="tel:+91-98765-43210" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Call +91-98765-43210
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
                <span>500+ Indian Businesses Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>90% Client Retention Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>8+ Years India Market Expertise</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Trusted by 500+ Indian Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">300+</div>
                  <div className="text-gray-600 text-sm">Successful India Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">₹2 Cr+</div>
                  <div className="text-gray-600 text-sm">Revenue Generated for Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Average Conversion Rate Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">60%</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results Across India</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven approach delivers measurable growth for Indian businesses across India's dynamic digital landscape</p>
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
                <div className="text-gray-600 text-sm">Indian Businesses Served</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">25+</div>
                <div className="text-gray-600 text-sm">Indian Cities Covered</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">90%</div>
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
                Why Choose Frameleads for Digital Marketing in India?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier digital marketing agency for Indian businesses, combining deep Indian market knowledge with cutting-edge digital marketing expertise. Our comprehensive approach ensures that every rupee of your marketing budget delivers maximum return on investment across all Indian platforms and digital channels.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 India Digital Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Platform-Specific Analytics: Google, Facebook, Instagram attribution modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">ROI-Focused Campaign Management: Measurable business results in India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cross-Platform Integration: Google, Facebook, Instagram, LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Conversion Rate Optimization: Indian platform-specific A/B testing</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 India Market Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Local Market Intelligence: 8+ years serving India's diverse business landscape</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry-Specific Expertise: Indian tech, e-commerce, manufacturing, healthcare, fintech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Cultural Sensitivity: Deep understanding of Indian business culture and values</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Regional Targeting Excellence: Hyper-local targeting for all Indian cities</span>
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
              Comprehensive Digital Marketing Services for India Market Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive digital marketing services are designed to deliver measurable ROI and drive business growth for Indian companies across all industries and platforms.
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
              India Digital Marketing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing packages designed for Indian businesses. All packages include platform setup, content creation, and cultural adaptation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">₹25,000</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small Indian businesses and startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>SEO optimization (10 keywords)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Social media management (2 platforms)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Google Ads management (₹10,000 ad spend included)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Monthly reporting and consultation</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">₹50,000</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for expanding Indian companies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Comprehensive SEO and PPC strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-platform management (Google, Facebook, Instagram, LinkedIn)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>E-commerce setup (Amazon India, Flipkart)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Content creation and cultural adaptation</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated India market account manager</span>
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
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">₹1,00,000+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large Indian organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom India market strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced platform analytics and attribution</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-city campaign management across India</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Priority support and consultation</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Quarterly business reviews and strategy updates</span>
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
              Our Proven India Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic digital marketing approach specifically designed for Indian businesses, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results across all Indian platforms.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Expertise Across China Market Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries in China, with deep understanding of unique digital marketing needs and business objectives in each sector throughout the Chinese market.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">India Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped Indian companies achieve remarkable growth through strategic digital marketing campaigns across India.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Indian Cities We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital marketing services across all major Indian cities, helping businesses in each region maximize their digital presence and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {indianBusinessMarkets.map((district, index) => (
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
              Frequently Asked Questions - Digital Marketing in India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about digital marketing services in India and how Frameleads can help your business achieve measurable results across Indian platforms.
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
        title="Ready to Transform Your Digital Presence in India?"
        description="Partner with Frameleads, the most trusted digital marketing agency for Indian businesses. Get your free audit and discover how we can help you achieve measurable ROI and business growth in India's competitive market."
        primaryButtonText="Get Your Free India Market Audit"
        secondaryButtonText="Schedule Your Strategic India Call"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete India Digital Marketing Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier digital marketing agency for Indian businesses, we offer comprehensive services across all Indian platforms. 
              Explore our specialized services designed specifically for India's diverse business landscape.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* SEO Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">SEO Services India</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominate Google search results with our comprehensive SEO strategies for Indian businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Technical SEO audits and optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Local SEO for Indian cities</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Content marketing in regional languages</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore SEO Services
                </Link>
              </CardContent>
            </Card>

            {/* Social Media Marketing Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Social Media Marketing India</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Build your brand presence across Facebook, Instagram, LinkedIn, and Twitter with engaging content that drives conversions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Facebook & Instagram marketing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">LinkedIn B2B marketing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Influencer partnerships</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Social Media Services
                </Link>
              </CardContent>
            </Card>

            {/* PPC Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">PPC Services India</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Maximize your ROI with targeted Google Ads and social media advertising campaigns for Indian businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Google Ads campaign management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Facebook & Instagram advertising</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">LinkedIn B2B campaigns</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore PPC Services
                </Link>
              </CardContent>
            </Card>

            {/* E-commerce Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce Services India</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Connect with Indian consumers through targeted e-commerce campaigns and marketplace optimization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Amazon India & Flipkart setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Payment integration (UPI, Razorpay)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Cultural adaptation & localization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore E-commerce Services
                </Link>
              </CardContent>
            </Card>

            {/* Content Marketing Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Content Marketing India</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Engage your Indian audience with compelling content in English and regional languages that drives conversions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Blog writing in Hindi & English</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Video content production</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Email & WhatsApp marketing</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Content Services
                </Link>
              </CardContent>
            </Card>

            {/* Web Design Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Web Design India</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create powerful websites optimized for Indian users with mobile-first design and multi-language support.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Responsive web design</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">E-commerce development</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Multi-language support</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Web Design Services
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free India Market Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current digital marketing performance in the Indian market</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">India ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your digital marketing ROI and optimize your budget allocation for Indian campaigns</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">India Marketing Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to digital marketing strategies and best practices for Indian businesses</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn digital marketing with our expert-led courses and training programs for the Indian market</p>
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
