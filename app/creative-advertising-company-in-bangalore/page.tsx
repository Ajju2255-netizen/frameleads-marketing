'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Camera, Video, PenTool, Lightbulb, Eye, Sparkles } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export default function CreativeAdvertisingCompanyBangalorePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const bangaloreCreativeAreas = [
    {
      category: "Central Creative Hub",
      areas: ["UB City", "Brigade Road", "Commercial Street", "MG Road", "Cunningham Road", "Richmond Town"],
      description: "Premium creative agencies and brand studios serving enterprise clients"
    },
    {
      category: "Tech & Startup Creative Corridors", 
      areas: ["Electronic City", "Whitefield", "Marathahalli", "Sarjapur Road", "Outer Ring Road", "Bellandur"],
      description: "Innovation-driven creative agencies serving tech startups and SaaS companies"
    },
    {
      category: "Emerging Creative Districts",
      areas: ["Koramangala", "Indiranagar", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar"],
      description: "Boutique creative agencies and design studios for emerging brands"
    },
    {
      category: "Traditional Business Creative Zones",
      areas: ["Banashankari", "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "Yelahanka"],
      description: "Creative agencies serving traditional businesses and local brands"
    }
  ]

  const creativeAdvertisingServices = [
    {
      icon: Palette,
      title: "Brand Creative Development & Strategy",
      description: "Transform your brand with innovative creative positioning and distinctive visual identity development for Bangalore's competitive market.",
      features: [
        "Creative brand positioning and identity development",
        "Logo design and visual identity systems",
        "Brand storytelling and narrative development",
        "Creative strategy planning and execution",
        "Brand refresh and repositioning campaigns"
      ],
      results: [
        "250% brand recognition improvement",
        "180% audience engagement increase",
        "300% brand recall enhancement"
      ]
    },
    {
      icon: Camera,
      title: "Digital Creative Advertising Campaigns",
      description: "Create viral-worthy digital creative campaigns that captivate audiences across social media, display advertising, and video platforms.",
      features: [
        "Social media creative for Facebook, Instagram, LinkedIn, Twitter",
        "Display advertising design and rich media creative",
        "Video advertising production and animation",
        "Search engine creative optimization",
        "Influencer campaign creative development"
      ],
      results: [
        "400% social media engagement increase",
        "300% click-through rate improvement",
        "250% video completion rate enhancement"
      ]
    },
    {
      icon: PenTool,
      title: "Traditional Creative Advertising",
      description: "Master traditional advertising creative including print, outdoor, radio, and experiential campaigns that drive brand awareness and recall.",
      features: [
        "Print advertising design and creative layouts",
        "Outdoor advertising and billboard creative",
        "Radio and TV commercial production",
        "Event and experiential creative campaigns",
        "Direct mail creative and targeted campaigns"
      ],
      results: [
        "200% recall rate improvement",
        "150% lead generation increase",
        "180% brand awareness enhancement"
      ]
    },
    {
      icon: Lightbulb,
      title: "Creative Campaign Strategy & Execution",
      description: "End-to-end creative campaign development from concept to execution, ensuring maximum creative impact and measurable results.",
      features: [
        "Integrated creative campaign development",
        "Creative testing and optimization strategies",
        "Multi-channel creative campaign management",
        "Creative performance analytics and tracking",
        "Creative consultation and strategic guidance"
      ],
      results: [
        "350% campaign effectiveness improvement",
        "90% client retention rate",
        "400% creative ROI enhancement"
      ]
    },
    {
      icon: Sparkles,
      title: "Innovative Creative Technology",
      description: "Leverage cutting-edge creative technology including AI-powered design tools, 3D animation, and interactive creative experiences.",
      features: [
        "AI-powered creative generation and optimization",
        "3D animation and visual effects production",
        "Interactive creative experiences and AR/VR",
        "Creative analytics and performance tracking",
        "Advanced creative collaboration tools"
      ],
      results: [
        "500% creative engagement improvement",
        "200% creative efficiency enhancement",
        "300% innovative creative delivery"
      ]
    }
  ]

  const creativeProcess = [
    {
      step: "01",
      title: "Creative Discovery & Brand Analysis",
      description: "Comprehensive brand audit and creative competitive analysis, target audience research, and creative opportunity identification for breakthrough campaigns."
    },
    {
      step: "02",
      title: "Creative Strategy Development",
      description: "Big idea conceptualization, creative direction planning, multi-channel creative strategy, and innovative creative asset planning for maximum impact."
    },
    {
      step: "03",
      title: "Creative Production & Development",
      description: "Design execution, copywriting, video production, animation development, and quality creative review process for exceptional creative deliverables."
    },
    {
      step: "04",
      title: "Creative Launch & Optimization",
      description: "Multi-platform creative deployment, real-time creative performance monitoring, A/B testing, and continuous creative optimization for maximum results."
    }
  ]

  const whyChooseCreativeAdvertising = [
    "Innovative Creative Excellence: 15+ years crafting breakthrough advertising campaigns",
    "Local Market Creative Mastery: Deep understanding of Bangalore's diverse creative landscape",
    "Award-Winning Creative Team: 50+ creative professionals including art directors and copywriters",
    "Technology-Integrated Creative: Cutting-edge creative tools and AI-powered optimization",
    "Multi-Channel Creative Expertise: Seamless integration across digital and traditional platforms",
    "Cultural Creative Specialists: Deep understanding of Bangalore's multicultural demographics",
    "Startup-Friendly Creative Packages: Flexible creative solutions for emerging businesses",
    "Performance-Guaranteed Creative: ROI guarantees on creative campaign effectiveness"
  ]

  const creativeCaseStudies = [
    {
      industry: "Tech Startup Creative Revolution",
      location: "Koramangala Tech Hub",
      challenge: "Unknown SaaS startup needed breakthrough creative positioning in competitive market",
      solution: "Disruptive creative campaign positioning startup as industry innovator with viral video series and interactive digital campaigns",
      results: [
        "500% brand awareness increase within 6 months",
        "300% lead generation growth through creative campaigns",
        "Series A funding secured through creative brand positioning",
        "Viral creative content reaching 2M+ impressions"
      ]
    },
    {
      industry: "Traditional Restaurant Creative Transformation",
      location: "Indiranagar",
      challenge: "Heritage restaurant chain losing relevance with younger demographics",
      solution: "Modern creative approach celebrating tradition with contemporary appeal through social media storytelling and experiential campaigns",
      results: [
        "400% younger demographic engagement increase",
        "250% foot traffic improvement through creative campaigns",
        "Franchise expansion driven by creative brand transformation",
        "100+ influencer partnerships through creative campaigns"
      ]
    },
    {
      industry: "B2B Manufacturing Creative Modernization",
      location: "Peenya Industrial Area",
      challenge: "Traditional manufacturing company needed modern creative identity for global expansion",
      solution: "Industrial design meets innovation positioning with sophisticated creative approach for trade publications and digital transformation storytelling",
      results: [
        "350% international inquiries through creative campaigns",
        "200% trade show lead generation improvement",
        "Global partnership deals secured through creative positioning",
        "Industry recognition for innovative creative approach"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies",
      description: "Transform your tech brand with innovative creative campaigns designed for Bangalore's thriving technology ecosystem.",
      services: [
        "SaaS product positioning and creative campaigns",
        "Developer-focused creative advertising",
        "Tech conference creative and event branding",
        "Investor presentation creative design"
      ],
      results: "400% brand recognition improvement, 300% lead generation increase"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands",
      description: "Scale your online business with creative campaigns optimized for Bangalore's digital-savvy consumers.",
      services: [
        "Product advertising creative and visual storytelling",
        "Customer acquisition creative campaigns",
        "Mobile commerce creative optimization",
        "Cross-border creative advertising"
      ],
      results: "350% brand engagement increase, 250% conversion rate improvement"
    },
    {
      icon: Building2,
      title: "Real Estate & Property Development",
      description: "Connect with Bangalore's property buyers through creative campaigns and immersive brand experiences.",
      services: [
        "Property listing creative and visual storytelling",
        "Virtual tour creative integration",
        "Luxury property creative campaigns",
        "Commercial real estate creative advertising"
      ],
      results: "300% property inquiry increase, 200% brand recall improvement"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Drive patient acquisition for Bangalore's healthcare providers through compliant, creative campaigns.",
      services: [
        "Patient acquisition creative campaigns",
        "Telemedicine creative promotion",
        "Hospital marketing creative campaigns",
        "Wellness industry creative transformation"
      ],
      results: "250% appointment booking increase, 180% brand trust improvement"
    },
    {
      icon: GraduationCap,
      title: "Education & Ed-Tech",
      description: "Maximize enrollment for Bangalore's educational institutions with creative campaigns that inspire action.",
      services: [
        "Student acquisition creative campaigns",
        "Parent targeting creative advertising",
        "Ed-tech platform creative growth",
        "Professional certification creative marketing"
      ],
      results: "400% course enrollment increase, 300% brand awareness improvement"
    }
  ]

  const creativeFaqData = [
    {
      question: "What makes a creative advertising company different from a regular advertising agency in Bangalore?",
      answer: "A creative advertising company focuses specifically on innovative, out-of-the-box thinking and artistic excellence in campaign development. While traditional agencies may prioritize media buying and strategy, creative agencies like Frameleads specialize in breakthrough creative concepts, visual storytelling, and emotionally engaging campaigns that capture attention and drive brand memorability."
    },
    {
      question: "How long does it take to develop a creative advertising campaign in Bangalore?",
      answer: "Creative campaign development typically takes 4-8 weeks depending on complexity. Simple social media creative can be developed in 1-2 weeks, while comprehensive multi-channel creative campaigns require 6-8 weeks for research, concepting, design, and production phases."
    },
    {
      question: "Do you create creative advertising campaigns for startups and small businesses in Bangalore?",
      answer: "Absolutely! We specialize in helping Bangalore startups and small businesses develop impactful creative campaigns within budget constraints. Our startup packages include brand positioning, creative strategy, and cost-effective creative production tailored for emerging businesses."
    },
    {
      question: "What creative advertising services do you provide for Bangalore's tech industry?",
      answer: "Our tech industry creative services include SaaS product positioning, developer-focused campaigns, tech conference creative, investor presentation design, product launch campaigns, and thought leadership content development specifically for Bangalore's thriving technology ecosystem."
    },
    {
      question: "How do you measure the success of creative advertising campaigns in Bangalore?",
      answer: "We track creative campaign success through brand awareness metrics, engagement rates, creative recall testing, conversion tracking, social media sentiment analysis, and ROI measurement. Each creative campaign includes detailed performance analytics and optimization recommendations."
    },
    {
      question: "Can you adapt creative campaigns for different languages spoken in Bangalore?",
      answer: "Yes, our creative team develops campaigns in English, Hindi, and Kannada to effectively reach Bangalore's diverse population. We ensure cultural sensitivity and local relevance while maintaining creative impact across all language adaptations."
    },
    {
      question: "What creative advertising budget should I allocate for campaigns in Bangalore?",
      answer: "Creative advertising budgets in Bangalore typically range from ₹2-5 lakhs for small campaigns to ₹20-50 lakhs for comprehensive creative campaigns. We offer flexible creative packages starting from ₹50,000 for basic creative services to enterprise creative solutions."
    },
    {
      question: "Do you provide creative advertising training for internal marketing teams?",
      answer: "We offer comprehensive creative advertising training programs for Bangalore businesses, including creative strategy workshops, design thinking sessions, and custom creative training for your marketing team. Training can be conducted at your office or our Koramangala creative studio."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@type": "AdvertisingAgency",
        "name": "Frameleads - Creative Advertising Company",
        "description": "Leading creative advertising company in Bangalore delivering 400% brand growth. Expert creative campaigns, brand development & innovative advertising solutions.",
        "url": "https://frameleads.com/creative-advertising-company-in-bangalore",
        "telephone": "+91 6362821368",
        "email": "ajsal@frameleads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Koramangala",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560034",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": "Bangalore",
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
        "mainEntity": creativeFaqData.map(faq => ({
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
      <FloatingNotifications />
      
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
                🏆 #1 Creative Advertising Company in Bangalore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Leading Creative Advertising Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Bangalore
              </span>{" "}
              | 400% Brand Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your brand with innovative advertising campaigns that captivate audiences and drive explosive business growth. Bangalore's most trusted creative advertising agency for startups, SMEs, and established brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Creative Strategy Audit
                </Button>
              </Link>
              <Link href="#case-studies">
                <Button variant="outline" className="group relative border-[#FF6B35]/40 text-gray-600 hover:text-gray-900 hover:bg-[#FF6B35]/5 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-white/80 hover:border-[#FF8A50]/50 transition-all duration-300">
                  View Creative Portfolio
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>400% Average Brand Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>250+ Award-Winning Campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>98% Client Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>15+ Years Creative Excellence</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎨 Trusted by 500+ Bangalore Brands</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Creative Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Creative Specialists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">85%</div>
                  <div className="text-gray-600 text-sm">Brand Recognition Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">300%</div>
                  <div className="text-gray-600 text-sm">Engagement Rate Increase</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Frameleads is the Best Creative Advertising Company in Bangalore?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads stands as Bangalore's premier creative advertising company, combining deep local market knowledge with cutting-edge creative expertise. Our innovative approach ensures every creative campaign delivers maximum brand impact and memorable experiences.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 Creative Excellence in Bangalore</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Innovative Campaign Development: 15+ years crafting breakthrough campaigns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Local Market Mastery: Deep understanding of Bangalore's creative landscape</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Award-Winning Creative Team: 50+ creative professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Technology Integration: Cutting-edge creative tools and AI optimization</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Proven Creative Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Brand Recognition: 85% increase in brand awareness within 6 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Engagement Rates: 300% improvement in audience engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Campaign ROI: 400% average return on creative advertising investment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Creative Awards: 100+ industry awards for innovative campaigns</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/story/story-5.jpg"
                alt="Creative advertising campaigns and brand development"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Creative Advertising Services in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized creative advertising services are designed to deliver memorable brand experiences and drive business growth for Bangalore businesses across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeAdvertisingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#FF6B35]/25 group-hover:shadow-[#FF6B35]/40 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Creative Advertising Process for Bangalore Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic creative advertising approach specifically designed for Bangalore businesses, combining strategic planning, creative excellence, and continuous optimization to deliver memorable campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeProcess.map((process, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Transform Through Creative Advertising in Bangalore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized creative expertise spans across key industries in Bangalore, with deep understanding of unique creative needs and brand objectives in each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
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
                    <div className="bg-[#FF6B35]/5 backdrop-blur-xl rounded-lg p-3 mt-4 border border-[#FF6B35]/20">
                      <p className="text-[#FF6B35] text-sm font-semibold text-center">{industry.results}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Creative Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Award-Winning Creative Campaigns from Bangalore's Leading Advertising Company</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped local Bangalore businesses achieve remarkable growth through innovative creative advertising campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creativeCaseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{study.industry}</h3>
                    <p className="text-gray-600 text-sm">{study.location}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
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

      {/* Creative Areas We Serve */}
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bangalore Areas We Serve for Creative Advertising Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive creative advertising services across all major business districts in Bangalore, helping businesses in every area maximize their brand impact and creative ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bangaloreCreativeAreas.map((area, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{area.category}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="space-y-2">
                    {area.areas.map((location, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#FF6B35]" />
                        <span className="text-gray-600 text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Creative Advertising in Bangalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about creative advertising services in Bangalore and how Frameleads can help your business achieve memorable brand experiences.
            </p>
          </div>

          <div className="space-y-6">
            {creativeFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Creative Advertising in Bangalore?"
        description="Partner with Frameleads, Bangalore's most trusted creative advertising company. Get your free creative audit and discover how we can help you achieve memorable brand experiences and business growth."
        primaryButtonText="Get Free Creative Strategy Audit"
        secondaryButtonText="Schedule Creative Consultation"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creative advertising works best when integrated with other digital marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Creative & Advertising */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative & Advertising</h3>
              <div className="space-y-3">
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising Bangalore</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
              </div>
            </div>

            {/* SEO & Search */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO & Search</h3>
              <div className="space-y-3">
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
              </div>
            </div>

            {/* Industry Specializations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Specializations</h3>
              <div className="space-y-3">
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising Bangalore</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
              </div>
            </div>

            {/* Company & Academy */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company & Academy</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
                <Link href="/academy/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About Academy</Link>
                <Link href="/academy/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Academy Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}
