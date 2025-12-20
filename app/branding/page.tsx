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

export default function BrandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const brandingServices = [
    {
      category: "Brand Strategy Development",
      areas: ["Brand Positioning", "Target Audience Analysis", "Competitive Research", "Brand Messaging", "Value Proposition", "Market Analysis"],
      description: "Comprehensive brand strategy development that defines your unique value proposition, target audience, and competitive positioning to create a roadmap for brand success"
    },
    {
      category: "Brand Identity Design", 
      areas: ["Logo Design", "Visual Identity System", "Color Palette", "Typography", "Brand Guidelines", "Style Guide"],
      description: "Complete brand identity design services including logo creation, visual systems, and comprehensive brand guidelines that ensure consistent brand communication across all touchpoints"
    },
    {
      category: "Digital Branding",
      areas: ["Website Branding", "Social Media Identity", "Digital Assets", "Online Presence", "Brand Experience", "Digital Guidelines"],
      description: "Strategic digital branding solutions that create cohesive online experiences, engaging your audience and driving conversions across all digital platforms"
    },
    {
      category: "Brand Communication",
      areas: ["Brand Messaging", "Content Strategy", "Tone of Voice", "Brand Storytelling", "Marketing Copy", "Communication Guidelines"],
      description: "Compelling brand communication strategies that craft narratives building emotional connections and driving customer loyalty through consistent messaging"
    },
    {
      category: "Brand Experience Design",
      areas: ["Customer Journey", "Touchpoint Design", "User Experience", "Brand Interactions", "Experience Mapping", "Service Design"],
      description: "Memorable brand experience design that creates consistent interactions at every touchpoint, reinforcing your value proposition and building brand loyalty"
    },
    {
      category: "Brand Management",
      areas: ["Brand Monitoring", "Brand Guidelines", "Asset Management", "Brand Training", "Compliance", "Brand Evolution"],
      description: "Ongoing brand management services that ensure brand consistency, monitor brand performance, and guide brand evolution for sustained market success"
    }
  ]

  const brandingServicesList = [
    {
      icon: Target,
      title: "Complete Brand Strategy Development",
      description: "Our comprehensive brand strategy services help you define your unique value proposition, target audience, and competitive positioning to create a roadmap for brand success and market differentiation.",
      features: [
        "Strategic Brand Positioning: Custom brand strategy development and market research analysis",
        "Target Audience Analysis: Deep-dive into customer personas and behavioral insights",
        "Competitive Research: Comprehensive competitor analysis and market positioning",
        "Brand Messaging Framework: Clear, compelling messaging that resonates with your audience",
        "Implementation Roadmap: Strategic plan for brand launch and market penetration"
      ],
      results: [
        "400% increase in brand recognition",
        "250% improvement in customer engagement",
        "180% growth in market share"
      ]
    },
    {
      icon: Palette,
      title: "Professional Brand Identity Design",
      description: "Create a memorable visual identity with our brand identity design services. From logos to complete visual systems, we ensure your brand communicates effectively across all touchpoints.",
      features: [
        "Logo Design: Multiple concepts and iterations for the perfect brand mark",
        "Visual Identity System: Comprehensive color palette, typography, and design elements",
        "Brand Guidelines: Detailed style guide ensuring consistent brand application",
        "Digital Assets: Optimized brand assets for all digital platforms and applications",
        "Print Materials: Business cards, stationery, and marketing collateral design"
      ],
      results: [
        "350% increase in brand recall",
        "200% improvement in visual consistency",
        "150% growth in brand trust metrics"
      ]
    },
    {
      icon: Globe,
      title: "Digital Branding Solutions",
      description: "Establish a strong online presence with our digital branding services. We create cohesive digital experiences that engage your audience and drive conversions across all digital platforms.",
      features: [
        "Website Branding: Complete digital brand experience and user interface design",
        "Social Media Identity: Consistent brand presence across all social platforms",
        "Digital Asset Creation: Optimized graphics, videos, and interactive content",
        "Brand Experience Design: Seamless customer journey across digital touchpoints",
        "Performance Tracking: Analytics and insights for continuous brand optimization"
      ],
      results: [
        "300% increase in online engagement",
        "180% improvement in conversion rates",
        "220% growth in digital brand awareness"
      ]
    },
    {
      icon: MessageSquare,
      title: "Brand Communication Strategy",
      description: "Develop compelling brand messaging that resonates with your target audience. Our brand communication experts craft narratives that build emotional connections and drive customer loyalty.",
      features: [
        "Brand Messaging Framework: Clear, consistent messaging across all communications",
        "Content Strategy: Strategic content planning aligned with brand objectives",
        "Tone of Voice Development: Distinctive brand personality and communication style",
        "Storytelling: Compelling brand narratives that connect with audiences",
        "Marketing Copy: Persuasive copywriting for all marketing materials and campaigns"
      ],
      results: [
        "280% increase in message clarity",
        "190% improvement in customer connection",
        "160% growth in brand loyalty metrics"
      ]
    },
    {
      icon: Users,
      title: "Brand Experience Design",
      description: "Create memorable interactions at every touchpoint with our experiential branding services. From website design to packaging, we ensure consistent brand experiences that reinforce your value proposition.",
      features: [
        "Customer Journey Mapping: Complete experience design from awareness to advocacy",
        "Touchpoint Optimization: Consistent brand experience across all customer interactions",
        "User Experience Design: Intuitive, brand-aligned user interfaces and interactions",
        "Service Design: Branded service experiences that exceed customer expectations",
        "Experience Measurement: Analytics and feedback systems for continuous improvement"
      ],
      results: [
        "320% increase in customer satisfaction",
        "210% improvement in customer retention",
        "170% growth in brand advocacy"
      ]
    },
    {
      icon: Settings,
      title: "Brand Management & Consulting",
      description: "Ongoing brand management services that ensure brand consistency, monitor brand performance, and guide brand evolution for sustained market success and competitive advantage.",
      features: [
        "Brand Monitoring: Continuous tracking of brand performance and market perception",
        "Brand Guidelines Management: Comprehensive brand standards and compliance systems",
        "Asset Management: Centralized brand asset library and distribution system",
        "Brand Training: Team education and training on brand standards and application",
        "Strategic Consulting: Ongoing brand strategy guidance and market adaptation"
      ],
      results: [
        "Complete brand consistency across all touchpoints",
        "Data-driven brand optimization decisions",
        "Measurable brand performance improvements and strategic insights"
      ]
    }
  ]

  const brandingProcess = [
    {
      step: "01",
      title: "Discovery & Research Phase",
      description: "Comprehensive brand discovery including stakeholder interviews, market analysis, competitor research, and brand audit to understand your current position and opportunities for growth."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Strategic brand positioning workshop, message architecture creation, visual direction planning, and implementation roadmap development to define your brand's unique value proposition."
    },
    {
      step: "03",
      title: "Creative Development",
      description: "Professional creative development including concept creation, design iterations, client feedback integration, and final asset creation for your complete brand identity system."
    },
    {
      step: "04",
      title: "Implementation & Launch",
      description: "Comprehensive brand launch including guidelines documentation, asset deployment, team training, and launch campaign execution for successful brand introduction to market."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Ongoing brand performance tracking, market feedback analysis, continuous improvement recommendations, and strategic adjustments for sustained brand success."
    },
    {
      step: "06",
      title: "Brand Evolution & Growth",
      description: "Strategic brand evolution planning, market adaptation, expansion strategies, and long-term brand development to ensure continued relevance and competitive advantage."
    }
  ]

  const whyChooseBranding = [
    "Proven Results: Our clients see average 400% increase in brand recognition and 250% improvement in customer engagement",
    "Expert Team: Award-winning designers and strategists with 10+ years experience creating memorable brands across all industries",
    "Comprehensive Solutions: Complete branding services from strategy to implementation with transparent pricing starting from $2,999",
    "Full-Service Approach: Strategic brand consulting, creative design, digital branding, and ongoing brand management support",
    "Industry Expertise: Deep understanding of brand development across technology, healthcare, finance, e-commerce, and startup sectors",
    "Creative Excellence: Award-winning design team with proven track record of creating distinctive and memorable brand identities",
    "Data-Driven Strategy: Market research, competitive analysis, and performance tracking to ensure measurable brand success",
    "Flexible Engagement: Project-based and ongoing brand management options with no long-term contracts required"
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS",
      description: "Strategic branding for technology companies that simplifies complex innovations into compelling brand narratives that resonate with both technical and non-technical audiences.",
      services: [
        "Brand strategy development",
        "Technical brand positioning",
        "Digital brand identity",
        "Startup branding"
      ],
      results: "400% increase in brand recognition, 250% growth in market share"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Trust-building healthcare branding that emphasizes reliability, expertise, and patient-centered care while maintaining regulatory compliance and professional credibility.",
      services: [
        "Healthcare brand strategy",
        "Trust-focused design",
        "Compliant messaging",
        "Patient experience design"
      ],
      results: "300% increase in patient trust, 180% improvement in brand credibility"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Secure and trustworthy financial branding that instills confidence in financial products and services while building long-term customer relationships.",
      services: [
        "Financial brand strategy",
        "Trust-based identity design",
        "Compliance-focused messaging",
        "Customer experience design"
      ],
      results: "280% increase in customer confidence, 200% growth in brand trust"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Dynamic e-commerce branding that captivates digital-savvy consumers and drives online sales through compelling brand experiences and customer engagement.",
      services: [
        "E-commerce brand strategy",
        "Digital brand experience",
        "Customer journey design",
        "Conversion-focused branding"
      ],
      results: "350% increase in online sales, 220% improvement in customer engagement"
    },
    {
      icon: Rocket,
      title: "Startups & Scale-ups",
      description: "Launch-ready startup branding that attracts investors, customers, and top talent while establishing a strong foundation for rapid growth and market expansion.",
      services: [
        "Startup brand strategy",
        "Investor-focused branding",
        "Talent attraction design",
        "Growth-oriented identity"
      ],
      results: "500% increase in investor interest, 300% growth in talent acquisition"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Professional service branding that builds credibility and trust while differentiating your firm in competitive markets through strategic positioning and expert communication.",
      services: [
        "Professional brand strategy",
        "Credibility-focused design",
        "Expert positioning",
        "Client experience design"
      ],
      results: "250% increase in client inquiries, 180% improvement in brand authority"
    }
  ]

  const brandingCaseStudies = [
    {
      industry: "Technology Startup",
      location: "Global Market",
      challenge: "SaaS startup needed to increase brand recognition and secure Series A funding with limited brand presence and unclear value proposition",
      solution: "Developed comprehensive brand strategy with clear positioning, compelling visual identity, and investor-focused brand communication for market differentiation",
      results: [
        "400% increase in brand recognition",
        "250% growth in investor interest",
        "300% improvement in talent acquisition",
        "Successful Series A funding round"
      ]
    },
    {
      industry: "Healthcare Practice",
      location: "Regional Market",
      challenge: "Medical practice struggling with patient acquisition and trust-building in competitive healthcare market",
      solution: "Created trustworthy brand identity emphasizing patient-centered care, professional credibility, and compassionate communication",
      results: [
        "250% increase in patient acquisitions",
        "180% improvement in patient trust scores",
        "200% growth in online appointments",
        "150% increase in patient referrals"
      ]
    },
    {
      industry: "E-commerce Brand",
      location: "Digital Market",
      challenge: "Online retailer needed complete brand transformation to compete with established players and drive customer loyalty",
      solution: "Implemented comprehensive brand redesign with customer-focused experience, compelling storytelling, and conversion-optimized digital presence",
      results: [
        "$2M revenue growth in first year",
        "350% increase in customer engagement",
        "220% improvement in conversion rates",
        "180% growth in customer lifetime value"
      ]
    }
  ]

  const brandingFaqData = [
    {
      question: "What is included in professional branding services?",
      answer: "Professional branding services typically include brand strategy development, logo design, visual identity creation, brand messaging, and implementation guidelines. Comprehensive packages may also include digital assets, marketing materials, and ongoing brand management support."
    },
    {
      question: "How much do branding services cost?",
      answer: "Branding services cost varies based on scope and complexity. Small business branding packages start at $2,999, while comprehensive corporate branding transformations can range from $15,999 to $50,000+. Factors affecting cost include research depth, number of deliverables, and implementation support."
    },
    {
      question: "How long does the branding process take?",
      answer: "A typical brand development project takes 6-12 weeks depending on scope. Simple logo and identity projects may take 4-6 weeks, while comprehensive brand strategy and implementation can take 12-16 weeks."
    },
    {
      question: "Why should I hire a professional branding agency?",
      answer: "Professional branding agencies bring strategic expertise, creative skills, and market knowledge that ensure your brand resonates with target audiences and stands out from competitors. They provide objective perspectives and proven methodologies that deliver measurable results."
    },
    {
      question: "What's the difference between branding and marketing?",
      answer: "Branding focuses on creating your company's identity, values, and positioning, while marketing promotes specific products or services. Branding is the foundation that makes marketing more effective by creating emotional connections with audiences."
    },
    {
      question: "Can you help rebrand an existing business?",
      answer: "Yes, we specialize in rebranding services that help businesses evolve their identity while maintaining customer loyalty. Our rebranding process includes brand audit, stakeholder research, and phased implementation to minimize disruption."
    },
    {
      question: "What industries do you serve for branding?",
      answer: "Our branding expertise covers technology, healthcare, financial services, e-commerce, startups, and professional services. We adapt strategies to industry-specific requirements, market dynamics, and regulatory considerations for optimal brand success."
    },
    {
      question: "Do you provide ongoing brand management?",
      answer: "Yes, we offer comprehensive brand management services including brand monitoring, guidelines enforcement, asset management, team training, and strategic consulting to ensure consistent brand application and continued market relevance."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Professional Branding Services",
        "description": "Expert branding services including brand strategy, identity design, and digital branding. Transform your business with our comprehensive brand development and consulting services for measurable growth.",
        "url": "https://frameleads.com/branding",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/branding-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Marketing Blvd",
            "addressLocality": "Marketing City",
            "addressRegion": "MC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "hello@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Branding Services",
        "areaServed": ["Global", "North America", "Europe", "Asia-Pacific"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$2999-$15999",
          "description": "Professional branding services with transparent pricing and proven results"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Branding Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Strategy Development",
                "description": "Comprehensive brand strategy and positioning for market differentiation and growth"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Identity Design",
                "description": "Complete visual identity design including logo, colors, and brand guidelines"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Branding",
                "description": "Strategic digital branding solutions for online presence and customer engagement"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": brandingFaqData.map(faq => ({
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
      <title>Premier Branding Services Agency | Transform Your Business Identity with Expert Brand Strategy</title>
      <meta name="description" content="Professional branding services including brand strategy, identity design, and digital branding. Transform your business with our expert brand development and consulting services. Get a free consultation today." />
      <meta name="keywords" content="branding services, brand strategy, brand identity design, corporate branding, brand development, digital branding agency, brand consulting services, brand marketing agency, brand design services, brand management services, affordable branding services for small business, professional brand identity design agency, custom brand strategy development, comprehensive branding package, brand redesign and rebranding services" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/branding" />
      <meta property="og:title" content="Premier Branding Services Agency | Transform Your Business Identity with Expert Brand Strategy" />
      <meta property="og:description" content="Professional branding services including brand strategy, identity design, and digital branding. Transform your business with our expert brand development and consulting services. Get a free consultation today." />
      <meta property="og:url" content="https://frameleads.com/branding" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Premier Branding Services Agency | Transform Your Business Identity with Expert Brand Strategy" />
      <meta name="twitter:description" content="Professional branding services including brand strategy, identity design, and digital branding. Transform your business with our expert brand development and consulting services. Get a free consultation today." />
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
                🎨 Premier Branding Services - 400% Brand Recognition Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Premier Branding Services Agency |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Transform Your Business Identity
              </span>{" "}
              With Expert Brand Strategy, Identity Design & Digital Branding
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Trusted by 500+ businesses worldwide to create memorable brands that drive growth. Our comprehensive branding services include brand strategy, identity design, and digital branding solutions that help businesses stand out in competitive markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Brand Consultation - Start Today
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
                <span>✓ Proven Results: 400% Brand Recognition Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Award-Winning Designers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Comprehensive Solutions: Starting $2,999</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ 500+ Successful Brand Projects</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎨 Trusted by 500+ Businesses Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">400%</div>
                  <div className="text-gray-600 text-sm">Increase in Brand Recognition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">250%</div>
                  <div className="text-gray-600 text-sm">Improvement in Customer Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">180%</div>
                  <div className="text-gray-600 text-sm">Growth in Market Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction Rate</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Branding Results Across All Industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven branding approach delivers measurable growth for businesses through strategic brand development, creative design, and comprehensive brand management</p>
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
                <div className="text-gray-600 text-sm">Increase in Brand Recognition</div>
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
                <div className="text-gray-600 text-sm">Improvement in Customer Engagement</div>
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
                <div className="text-gray-600 text-sm">Growth in Market Share</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">95%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction Rate</div>
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
                Why Choose Frameleads for Branding Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier branding agency, combining award-winning creative excellence with strategic brand expertise. Our comprehensive approach ensures that every aspect of your brand delivers maximum impact through strategic brand development, creative design, and comprehensive brand management solutions.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Branding Services Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 400% increase in brand recognition and 250% improvement in customer engagement for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Award-winning designers and strategists with 10+ years experience creating memorable brands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Brand strategy, identity design, digital branding, and ongoing brand management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry Expertise: Deep understanding across technology, healthcare, finance, e-commerce, and startup sectors</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Branding Services Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Starting from $2,999 with transparent pricing and proven results across all brand development stages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Creative Excellence: Award-winning design team with proven track record of creating distinctive and memorable brand identities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Data-Driven Strategy: Market research, competitive analysis, and performance tracking to ensure measurable brand success</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Flexible Engagement: Project-based and ongoing brand management options with no long-term contracts required</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yandex Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time Yandex advertising analytics and Russian market performance insights</p>
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
              Why Choose Yandex for Russian Market Advertising?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why <strong>Yandex advertising</strong> outperforms other search platforms in Russia through massive market reach, cultural relevance, and mobile-first optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Baidu vs Other Platforms */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yandex vs Google Ads: Russian Market Advantage</h3>
                <p className="text-gray-600 mb-6">
                  While <strong>Google has limited presence in Russia</strong>, <strong>Yandex dominates with 60% market share</strong>, providing unparalleled access to Russian consumers. Our analysis shows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">60% search market share with 100M+ active users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Native Russian language and cultural understanding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Mobile-first optimization with 85% mobile revenue</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Unique contextual advertising across partner network</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Baidu Advertising Features */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yandex's Advanced Advertising Features</h3>
                <p className="text-gray-600 mb-6">
                  Yandex provides comprehensive advertising tools that make Russian market penetration efficient and effective for international businesses:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Contextual advertising across extensive partner network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Mobile-first campaign optimization and click-to-call</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Advanced Russian language keyword research tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Yandex Metrica integration for comprehensive analytics</span>
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
              Comprehensive Branding Services for Maximum Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive branding services are designed to deliver market success and drive business growth through strategic brand development, creative design, and comprehensive brand management solutions.
            </p>
          </div>

          <div className="space-y-12">
            {brandingServicesList.map((service, index) => {
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
              Transparent Branding Services Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional branding packages designed for businesses of all sizes. All packages include brand strategy development, creative design, and comprehensive brand guidelines with transparent pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Brand Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,999</div>
                  <div className="text-gray-600">one-time</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses and startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Logo design (3 concepts)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Brand color palette</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Typography selection</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic brand guidelines</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Business card design</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Brand Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$7,999</div>
                  <div className="text-gray-600">one-time</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for growing businesses and market expansion</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Complete brand strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full visual identity system</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Comprehensive brand guidelines</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>1-month implementation support</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Brand Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$15,999+</div>
                  <div className="text-gray-600">one-time</div>
                  <p className="text-sm text-gray-500 mt-2">For large organizations and comprehensive brand transformations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Strategic brand consulting</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Complete brand architecture</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Digital brand assets</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>3-month implementation support</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">*All packages include free consultation, brand strategy development, and 30-day revision period</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored branding solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Branding Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic branding approach combining strategic planning, creative development, and comprehensive implementation to deliver measurable results through brand strategy, identity design, and brand management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Yandex Advertising Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique Yandex advertising needs and Russian market dynamics in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Branding Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve remarkable growth through strategic brand development, creative design, and comprehensive brand management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brandingCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Branding Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive branding services across brand strategy, identity design, digital branding, and brand management, helping businesses create memorable brands that drive growth and customer loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
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
              Frequently Asked Questions About Branding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about professional branding services and how Frameleads can help your business achieve measurable results through strategic brand development, creative design, and comprehensive brand management.
            </p>
          </div>

          <div className="space-y-6">
            {brandingFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Business with Expert Branding Services?"
        description="Partner with Frameleads, the most trusted branding agency. Get your free brand consultation and discover how we can help you achieve measurable growth and market success through strategic brand development, creative design, and comprehensive brand management."
        primaryButtonText="Start Your Brand Transformation Today - Free Consultation"
        secondaryButtonText="Get Your Free Brand Strategy Session"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Branding Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>branding agency</strong>, we offer comprehensive services across <strong>Brand Strategy</strong>, <strong>Identity Design</strong>, <strong>Digital Branding</strong>, and <strong>Brand Management</strong>. 
              Explore our specialized services designed specifically for business growth and market success.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Yandex Direct */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brand Strategy</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Develop a comprehensive brand strategy that defines your unique value proposition, target audience, and competitive positioning for market success.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand positioning framework</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Target audience analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Competitive research</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Brand Strategy
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Contextual Advertising */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brand Identity Design</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create a memorable visual identity with professional logo design, color systems, and comprehensive brand guidelines that ensure consistent brand communication.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Logo design & brand marks</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Color palette & typography</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand guidelines</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Brand Identity
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Mobile Advertising */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Branding</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Establish a strong online presence with cohesive digital branding that engages your audience and drives conversions across all digital platforms.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Website branding</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Social media identity</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Digital asset creation</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Digital Branding
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Metrica Analytics & Reporting */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brand Communication</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Develop compelling brand messaging and communication strategies that resonate with your target audience and build emotional connections.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand messaging framework</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Content strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Tone of voice development</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Brand Communication
                </Link>
              </CardContent>
            </Card>

            {/* Russian Market Localization */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brand Experience Design</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create memorable brand experiences at every touchpoint with customer journey mapping and experience design that reinforces your value proposition.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Customer journey mapping</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Touchpoint optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">User experience design</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Brand Experience
                </Link>
              </CardContent>
            </Card>

            {/* Yandex Account Setup */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brand Management</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Ongoing brand management services that ensure brand consistency, monitor performance, and guide brand evolution for sustained market success.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Guidelines enforcement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Strategic consulting</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Brand Management
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Brand Consultation</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current brand potential and branding opportunities</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Brand ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your branding ROI and optimize your brand investment for maximum business growth</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Branding Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to branding strategies and best practices for business success</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn branding with our expert-led courses and training programs for brand development</p>
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
