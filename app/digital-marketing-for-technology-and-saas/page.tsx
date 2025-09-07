'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, Search, ShoppingBag, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee, Code, Database, Server, Wrench, Cpu, HardDrive, Network, Terminal, GitBranch, ShieldCheck, Zap as ZapIcon } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function WebsiteDevelopmentPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const websiteDevelopmentServices = [
    {
      category: "Custom Website Development",
      areas: ["Bespoke Design", "Custom Functionality", "Content Management Systems", "Advanced Integrations", "Scalable Architecture", "API Development"],
      description: "Tailored website development solutions that create unique digital experiences reflecting your brand personality and business objectives with custom features and functionality"
    },
    {
      category: "E-commerce Website Development", 
      areas: ["Online Store Setup", "Payment Gateway Integration", "Inventory Management", "Shopping Cart Optimization", "Mobile Commerce", "Analytics Integration"],
      description: "Powerful e-commerce solutions that combine compelling design with robust functionality to drive online sales and provide exceptional shopping experiences"
    },
    {
      category: "Responsive Website Development",
      areas: ["Mobile-First Design", "Cross-Device Compatibility", "Touch-Friendly Interfaces", "Performance Optimization", "Adaptive Layouts", "Progressive Enhancement"],
      description: "Mobile-first responsive development ensuring perfect display and functionality across all devices and screen sizes for optimal user experience"
    },
    {
      category: "SEO-Optimized Website Development",
      areas: ["Technical SEO", "Page Speed Optimization", "Schema Markup", "SEO-Friendly URLs", "Meta Tags", "Site Structure"],
      description: "Built-for-success website development with comprehensive SEO optimization to improve search visibility and drive organic traffic growth"
    },
    {
      category: "Business Website Development",
      areas: ["Lead Generation Focus", "Conversion Optimization", "Professional Design", "Service Showcasing", "Contact Integration", "Analytics Setup"],
      description: "Strategic business website development that focuses on lead generation, professional presentation, and conversion optimization for business growth"
    },
    {
      category: "Website Maintenance & Support",
      areas: ["Security Updates", "Performance Monitoring", "Content Updates", "Technical Support", "Backup Management", "Analytics Reporting"],
      description: "Comprehensive website maintenance and support services ensuring optimal performance, security, and continuous improvement of your digital presence"
    }
  ]

  const websiteDevelopmentServicesList = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Our custom website development services create unique digital experiences that reflect your brand personality and business objectives. We develop websites from scratch, ensuring every feature and functionality aligns with your specific requirements.",
      features: [
        "Bespoke Design: Custom design tailored to your brand and business needs",
        "Custom Functionality: Advanced features and integrations specific to your requirements",
        "Content Management Systems: Easy-to-use CMS for content updates and management",
        "Advanced Integrations: API connections, third-party services, and custom integrations",
        "Scalable Architecture: Future-ready development that grows with your business"
      ],
      results: [
        "400% increase in online leads",
        "250% improvement in user engagement",
        "180% growth in conversion rates"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      description: "Transform your business with powerful e-commerce solutions that combine compelling design with robust functionality. Our online stores feature advanced shopping capabilities, secure payment processing, and conversion optimization.",
      features: [
        "Mobile-Optimized Shopping: Seamless shopping experience across all devices",
        "Secure Payment Integration: Multiple payment gateways with PCI compliance",
        "Inventory Management: Advanced product catalog and stock management systems",
        "Analytics & Reporting: Comprehensive e-commerce analytics and performance tracking",
        "Conversion Optimization: Strategic design and functionality for maximum sales"
      ],
      results: [
        "350% increase in online sales",
        "200% improvement in cart conversion",
        "150% growth in average order value"
      ]
    },
    {
      icon: Smartphone,
      title: "Responsive Website Development",
      description: "Our responsive website development ensures perfect display and functionality across all devices and screen sizes. With mobile traffic accounting for over 60% of web browsing, responsive design is essential for business success.",
      features: [
        "Mobile-First Design: Optimized for mobile devices with desktop enhancement",
        "Cross-Device Compatibility: Perfect functionality across smartphones, tablets, and desktops",
        "Touch-Friendly Interfaces: Intuitive navigation and interaction for touch devices",
        "Optimized Loading Speeds: Fast performance across all devices and connections",
        "Progressive Enhancement: Core functionality works on all devices with enhanced features"
      ],
      results: [
        "300% increase in mobile traffic",
        "180% improvement in mobile conversions",
        "220% growth in user engagement"
      ]
    },
    {
      icon: Search,
      title: "SEO-Optimized Website Development",
      description: "Every website we develop includes comprehensive SEO optimization to improve search visibility and drive organic traffic. Our SEO-optimized website development follows current best practices for technical SEO and user experience.",
      features: [
        "Technical SEO Implementation: Clean code, proper structure, and search engine optimization",
        "Page Speed Optimization: Fast loading times for better user experience and rankings",
        "Schema Markup Integration: Rich snippets and enhanced search result appearance",
        "SEO-Friendly URL Structures: Clean, descriptive URLs that improve search visibility",
        "Content Optimization: SEO-optimized content structure and keyword integration"
      ],
      results: [
        "280% increase in organic traffic",
        "190% improvement in search rankings",
        "160% growth in qualified leads"
      ]
    },
    {
      icon: Building2,
      title: "Business Website Development",
      description: "Strategic business website development that focuses on lead generation, professional presentation, and conversion optimization. We create websites that serve as powerful business tools driving growth and customer engagement.",
      features: [
        "Lead Generation Focus: Strategic design and functionality to capture and convert leads",
        "Professional Design: Credible, trustworthy design that builds business authority",
        "Service Showcasing: Effective presentation of your services and expertise",
        "Contact Integration: Multiple contact methods and lead capture forms",
        "Analytics Setup: Comprehensive tracking and reporting for business insights"
      ],
      results: [
        "320% increase in lead generation",
        "210% improvement in professional credibility",
        "170% growth in customer inquiries"
      ]
    },
    {
      icon: Settings,
      title: "Website Maintenance & Support",
      description: "Comprehensive website maintenance and support services ensuring optimal performance, security, and continuous improvement of your digital presence. We provide ongoing support to keep your website running smoothly.",
      features: [
        "Security Updates: Regular security patches and vulnerability monitoring",
        "Performance Monitoring: Continuous performance tracking and optimization",
        "Content Updates: Regular content updates and website modifications",
        "Technical Support: 24/7 technical support and issue resolution",
        "Backup Management: Automated backups and disaster recovery planning"
      ],
      results: [
        "99.9% website uptime guarantee",
        "50% faster issue resolution",
        "Continuous performance improvements"
      ]
    }
  ]

  const websiteDevelopmentProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We begin every website development project with comprehensive discovery sessions, understanding your business goals, target audience, and competitive landscape. This strategic foundation ensures your website aligns with your business objectives and market positioning."
    },
    {
      step: "02",
      title: "Design & User Experience",
      description: "Our design team creates intuitive, conversion-focused designs that reflect your brand identity while optimizing user experience. Every element is strategically planned to guide visitors toward desired actions and business outcomes."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our development team transforms designs into high-performing websites using modern frameworks and coding standards. Rigorous testing ensures cross-browser compatibility, mobile responsiveness, and optimal performance across all devices."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We handle complete website deployment with ongoing optimization and performance monitoring. Post-launch support ensures your website continues delivering results while adapting to evolving business needs."
    }
  ]

  const whyChooseWebsiteDevelopment = [
    "Proven Results: Our clients see average 400% increase in online leads and 250% improvement in user engagement",
    "Expert Team: Award-winning developers and designers with 10+ years experience creating high-performing websites across all industries",
    "Comprehensive Solutions: Complete website development services from strategy to launch with transparent pricing starting from $2,999",
    "Full-Service Approach: Strategic planning, custom development, SEO optimization, and ongoing maintenance support",
    "Industry Expertise: Deep understanding of website development across technology, healthcare, finance, e-commerce, and startup sectors",
    "Technical Excellence: Modern development practices ensuring optimal performance, security, and scalability",
    "Data-Driven Strategy: Performance analytics, user behavior tracking, and conversion optimization for measurable website success",
    "Flexible Engagement: Project-based and ongoing maintenance options with no long-term contracts required"
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS",
      description: "Complex product demonstrations, user onboarding, and conversion optimization for technology companies that need to showcase sophisticated solutions to both technical and non-technical audiences.",
      services: [
        "Product showcase websites",
        "User onboarding platforms",
        "Technical documentation sites",
        "API integration portals"
      ],
      results: "400% increase in product demos, 250% growth in user signups"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "HIPAA-compliant solutions, patient portals, and trust-building design for healthcare organizations that need to maintain regulatory compliance while providing excellent patient experiences.",
      services: [
        "Patient portal development",
        "HIPAA-compliant websites",
        "Appointment booking systems",
        "Medical information portals"
      ],
      results: "300% increase in patient engagement, 180% improvement in appointment bookings"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Security-focused development, compliance considerations, and credibility building for financial institutions that need to instill confidence while maintaining regulatory compliance.",
      services: [
        "Secure client portals",
        "Compliance-focused design",
        "Financial calculators",
        "Investment platforms"
      ],
      results: "280% increase in client confidence, 200% growth in online applications"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Conversion optimization, inventory management, and customer experience for online retailers that need to drive sales while providing exceptional shopping experiences.",
      services: [
        "E-commerce platforms",
        "Inventory management systems",
        "Customer account portals",
        "Mobile commerce solutions"
      ],
      results: "350% increase in online sales, 220% improvement in cart conversion"
    },
    {
      icon: Rocket,
      title: "Startups & Scale-ups",
      description: "Rapid deployment, scalable architecture, and investor-ready presentation for startups that need to establish credibility and attract investment while scaling quickly.",
      services: [
        "MVP development",
        "Investor presentation sites",
        "Scalable web applications",
        "Growth-focused platforms"
      ],
      results: "500% increase in investor interest, 300% growth in user acquisition"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Lead generation focus, credibility building, and service showcasing for professional service firms that need to attract clients and demonstrate expertise in competitive markets.",
      services: [
        "Lead generation websites",
        "Service showcase platforms",
        "Client portal systems",
        "Professional portfolios"
      ],
      results: "250% increase in client inquiries, 180% improvement in conversion rates"
    }
  ]

  const websiteDevelopmentCaseStudies = [
    {
      industry: "Technology Startup",
      location: "Global Market",
      challenge: "SaaS startup needed a professional website to showcase their product, attract investors, and convert trial users with limited technical resources and tight timeline",
      solution: "Developed a comprehensive website with product demonstrations, investor-focused sections, and conversion-optimized user onboarding flow using modern web technologies",
      results: [
        "400% increase in product demos",
        "250% growth in trial signups",
        "300% improvement in investor engagement",
        "Successful Series A funding round"
      ]
    },
    {
      industry: "Healthcare Practice",
      location: "Regional Market",
      challenge: "Medical practice struggling with patient acquisition and appointment booking efficiency in competitive healthcare market",
      solution: "Created a patient-focused website with online appointment booking, patient portal integration, and trust-building design elements",
      results: [
        "250% increase in online appointments",
        "180% improvement in patient satisfaction",
        "200% growth in new patient inquiries",
        "150% increase in appointment efficiency"
      ]
    },
    {
      industry: "E-commerce Brand",
      location: "Digital Market",
      challenge: "Online retailer needed complete website overhaul to compete with established players and improve conversion rates",
      solution: "Implemented comprehensive website redesign with mobile-first approach, advanced e-commerce features, and conversion optimization",
      results: [
        "$2M revenue growth in first year",
        "350% increase in mobile sales",
        "220% improvement in conversion rates",
        "180% growth in average order value"
      ]
    }
  ]

  const websiteDevelopmentFaqData = [
    {
      question: "How much does website development cost?",
      answer: "Website development costs vary based on complexity, features, and requirements. Our packages start at $2,999 for basic business websites, with custom solutions ranging from $5,999 to $25,000+ for enterprise applications. Factors affecting cost include number of pages, custom functionality, integration complexity, design sophistication, and timeline requirements."
    },
    {
      question: "How long does website development take?",
      answer: "Website development timelines typically range from 4-16 weeks depending on scope and complexity. Basic websites take 4-6 weeks, e-commerce sites take 8-12 weeks, custom applications take 12-20 weeks, and enterprise solutions take 16+ weeks. Timeline factors include content preparation, feedback cycles, and feature complexity."
    },
    {
      question: "What's included in website development services?",
      answer: "Our comprehensive website development services include strategic planning and consultation, custom design and user experience, responsive development and coding, content management system, SEO optimization, testing and quality assurance, launch and deployment, training and documentation, and post-launch support."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer comprehensive website maintenance services including security updates and monitoring, performance optimization, content updates, technical support, backup management, and analytics reporting. Maintenance packages start at $199/month and are customized based on your specific requirements."
    },
    {
      question: "Can you help with website redesign projects?",
      answer: "Absolutely! Our website redesign services help businesses modernize their online presence while preserving SEO value and improving user experience. We handle current website audit and analysis, strategic redesign planning, content migration, SEO preservation, performance improvement, and user experience enhancement."
    },
    {
      question: "What technologies do you use for website development?",
      answer: "We use modern technologies and frameworks including React, Vue.js, Node.js, PHP, Python, and various CMS platforms. Our technology choices depend on your specific requirements, scalability needs, and business objectives. We ensure all websites are built with current best practices for performance, security, and maintainability."
    },
    {
      question: "Do you provide mobile-responsive websites?",
      answer: "Yes, all our websites are built with mobile-first responsive design ensuring perfect functionality across all devices and screen sizes. With mobile traffic accounting for over 60% of web browsing, responsive design is included as standard in all our development packages."
    },
    {
      question: "What industries do you serve for website development?",
      answer: "Our website development expertise covers technology, healthcare, financial services, e-commerce, startups, and professional services. We adapt our development approach to industry-specific requirements, regulatory considerations, and user expectations for optimal results in each sector."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Professional Website Development Services",
        "description": "Expert website development services including custom web development, e-commerce solutions, and responsive design. Transform your business with our comprehensive website development and consulting services for measurable growth.",
        "url": "https://frameleads.com/website-development",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/website-development-agency.jpg",
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
        "serviceType": "Website Development Services",
        "areaServed": ["Global", "North America", "Europe", "Asia-Pacific"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$2999-$15999",
          "description": "Professional website development services with transparent pricing and proven results"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Website Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Development",
                "description": "Tailored website development solutions for unique business requirements and objectives"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Website Development",
                "description": "Powerful e-commerce solutions with advanced shopping capabilities and conversion optimization"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Responsive Website Development",
                "description": "Mobile-first responsive development ensuring perfect functionality across all devices"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": websiteDevelopmentFaqData.map(faq => ({
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
      <title>Professional Website Development Services | Custom Web Solutions That Drive Results</title>
      <meta name="description" content="Expert website development services for businesses. Custom, responsive, SEO-optimized websites that drive results. Free consultation. Get started today!" />
      <meta name="keywords" content="website development, custom website development, web development services, professional website development, responsive website development, website development company, business website development, e-commerce website development, website development agency, affordable website development, custom website development for small business, professional website development services near me, responsive website development cost, best website development company for startups, website development services for e-commerce" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/website-development" />
      <meta property="og:title" content="Professional Website Development Services | Custom Web Solutions That Drive Results" />
      <meta property="og:description" content="Expert website development services for businesses. Custom, responsive, SEO-optimized websites that drive results. Free consultation. Get started today!" />
      <meta property="og:url" content="https://frameleads.com/website-development" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Professional Website Development Services | Custom Web Solutions That Drive Results" />
      <meta name="twitter:description" content="Expert website development services for businesses. Custom, responsive, SEO-optimized websites that drive results. Free consultation. Get started today!" />
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
                💻 Professional Website Development - 400% Online Lead Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Professional Website Development Services |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Custom Web Solutions That Drive Results
              </span>{" "}
              With Expert Development, Responsive Design & SEO Optimization
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Trusted by 500+ businesses worldwide to create high-performing websites that drive growth. Our comprehensive website development services include custom development, e-commerce solutions, and responsive design that help businesses succeed online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Website Consultation - Start Today
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
                <span>✓ Proven Results: 400% Online Lead Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Award-Winning Developers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Comprehensive Solutions: Starting $2,999</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ 500+ Successful Website Projects</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💻 Trusted by 500+ Businesses Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">400%</div>
                  <div className="text-gray-600 text-sm">Increase in Online Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">250%</div>
                  <div className="text-gray-600 text-sm">Improvement in User Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">180%</div>
                  <div className="text-gray-600 text-sm">Growth in Conversion Rates</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Website Development Results Across All Industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven website development approach delivers measurable growth for businesses through strategic development, responsive design, and comprehensive optimization</p>
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
                <div className="text-gray-600 text-sm">Increase in Online Leads</div>
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
                <div className="text-gray-600 text-sm">Improvement in User Engagement</div>
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
                <div className="text-gray-600 text-sm">Growth in Conversion Rates</div>
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
                Why Choose Frameleads for Website Development Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier website development agency, combining award-winning technical excellence with strategic business expertise. Our comprehensive approach ensures that every aspect of your website delivers maximum impact through strategic development, responsive design, and comprehensive optimization solutions.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Website Development Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 400% increase in online leads and 250% improvement in user engagement for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Award-winning developers and designers with 10+ years experience creating high-performing websites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Custom development, e-commerce solutions, responsive design, and ongoing maintenance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry Expertise: Deep understanding across technology, healthcare, finance, e-commerce, and startup sectors</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Website Development Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Starting from $2,999 with transparent pricing and proven results across all website development stages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Technical Excellence: Modern development practices ensuring optimal performance, security, and scalability for all websites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Data-Driven Strategy: Performance analytics, user behavior tracking, and conversion optimization for measurable website success</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Flexible Engagement: Project-based and ongoing maintenance options with no long-term contracts required</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Website Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time website analytics and performance insights for optimal user experience</p>
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
              Comprehensive Website Development Services for Maximum Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive website development services are designed to deliver market success and drive business growth through strategic development, responsive design, and comprehensive optimization solutions.
            </p>
          </div>

          <div className="space-y-12">
            {websiteDevelopmentServicesList.map((service, index) => {
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
              Transparent Website Development Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional website development packages designed for businesses of all sizes. All packages include custom development, responsive design, and comprehensive optimization with transparent pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Website Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$2,999</div>
                  <div className="text-gray-600">one-time</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small businesses and startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Up to 8 custom pages</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Content management system</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>30-day support period</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Website Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$5,999</div>
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
                    <span>Up to 15 custom pages</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced functionality</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>E-commerce capabilities</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>60-day support period</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Website Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$12,999+</div>
                  <div className="text-gray-600">one-time</div>
                  <p className="text-sm text-gray-500 mt-2">For large organizations and comprehensive website solutions</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Unlimited pages</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Custom functionality</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>90-day support period</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">*All packages include free consultation, responsive design, and 30-day revision period</p>
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored website development solution</Link></p>
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Website Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic website development approach combining strategic planning, creative design, and comprehensive implementation to deliver measurable results through custom development, responsive design, and optimization solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteDevelopmentProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Website Development Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key industries worldwide, with deep understanding of unique website development needs and industry-specific requirements in each sector.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Website Development Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve remarkable growth through strategic website development, responsive design, and comprehensive optimization solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {websiteDevelopmentCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Website Development Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive website development services across custom development, e-commerce solutions, responsive design, and maintenance support, helping businesses create high-performing websites that drive growth and customer engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteDevelopmentServices.map((service, index) => (
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
              Frequently Asked Questions About Website Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about professional website development services and how Frameleads can help your business achieve measurable results through strategic development, responsive design, and comprehensive optimization.
            </p>
          </div>

          <div className="space-y-6">
            {websiteDevelopmentFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Business with Expert Website Development Services?"
        description="Partner with Frameleads, the most trusted website development agency. Get your free website consultation and discover how we can help you achieve measurable growth and market success through strategic development, responsive design, and comprehensive optimization."
        primaryButtonText="Start Your Website Transformation Today - Free Consultation"
        secondaryButtonText="Get Your Free Website Strategy Session"
      />

      {/* Comprehensive Digital Marketing Services in Singapore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Website Development Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>website development agency</strong>, we offer comprehensive services across <strong>Custom Development</strong>, <strong>E-commerce Solutions</strong>, <strong>Responsive Design</strong>, and <strong>Maintenance Support</strong>. 
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Custom Development</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Develop a comprehensive custom website that defines your unique business requirements, user experience, and technical specifications for market success.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Bespoke design & functionality</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Content management systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Advanced integrations</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Custom Development
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce Solutions</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create powerful online stores with advanced shopping capabilities, secure payment processing, and conversion optimization that drive sales and customer satisfaction.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Online store setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Payment gateway integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Inventory management</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore E-commerce Solutions
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Responsive Design</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Ensure perfect functionality across all devices with mobile-first responsive design that provides optimal user experience and drives engagement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Mobile-first design</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Cross-device compatibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Touch-friendly interfaces</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Responsive Design
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">SEO Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Build websites for search engine success with comprehensive SEO optimization that improves visibility and drives organic traffic growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Technical SEO implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Page speed optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Schema markup integration</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore SEO Optimization
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">User Experience Design</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create intuitive user experiences with customer journey mapping and experience design that drives engagement and conversion optimization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">User journey mapping</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Interface optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Conversion-focused design</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore User Experience
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Maintenance & Support</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Ongoing website maintenance and support services that ensure optimal performance, security, and continuous improvement for sustained success.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Security updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Performance monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Technical support</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Maintenance & Support
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Website Consultation</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current website potential and development opportunities</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Website ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your website development ROI and optimize your investment for maximum business growth</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Website Development Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to website development strategies and best practices for business success</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn website development with our expert-led courses and training programs for web development</p>
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

      <Footer />
    </div>
    </>
  )
}
