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
import ReviewRating from "../components/review-rating"

export default function TechnologyAndSaaSPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const technologyMarketingServices = [
    {
      category: "B2B SaaS Content Marketing & SEO",
      areas: ["Product-led Content", "Use Case Studies", "Comparison Pages", "Integration Guides", "ROI Calculators", "Technical Documentation"],
      description: "Drive organic growth with content that converts prospects into customers through strategic content marketing targeting every stage of the buyer's journey"
    },
    {
      category: "Technology Company PPC & Paid Advertising", 
      areas: ["Google Ads for SaaS", "LinkedIn Advertising", "YouTube Product Demos", "Performance Max Campaigns", "Account-based Marketing", "Display Remarketing"],
      description: "Accelerate growth with precision-targeted advertising campaigns that maximize return on ad spend while minimizing customer acquisition costs"
    },
    {
      category: "SaaS Growth Marketing & Conversion Optimization",
      areas: ["Landing Page Optimization", "Email Marketing Automation", "A/B Testing", "Mobile-first Design", "Trust Signals", "Loading Speed Optimization"],
      description: "Transform visitors into customers with data-driven optimization of every touchpoint in your customer journey from trial to expansion"
    },
    {
      category: "Technology Brand Positioning & Thought Leadership",
      areas: ["LinkedIn Thought Leadership", "PR & Media Relations", "Industry Event Speaking", "Award Submissions", "Crisis Communication", "Personal Branding"],
      description: "Establish your company as an industry authority through strategic thought leadership and brand positioning that drives credibility and growth"
    },
    {
      category: "Marketing Automation & Lead Nurturing",
      areas: ["Welcome Sequences", "Feature Adoption Campaigns", "Churn Prevention", "Upgrade Nurture", "Lead Scoring", "Sales Enablement"],
      description: "Automate your marketing processes and nurture leads through sophisticated workflows that drive engagement and accelerate sales cycles"
    },
    {
      category: "Analytics & Performance Optimization",
      areas: ["CAC Tracking", "MRR Growth Analysis", "PQL Identification", "Trial-to-Paid Conversion", "CLV Optimization", "Attribution Modeling"],
      description: "Track and optimize business-critical metrics including customer acquisition cost, monthly recurring revenue, and customer lifetime value"
    }
  ]

  const technologyMarketingServicesList = [
    {
      icon: FileText,
      title: "B2B SaaS Content Marketing & SEO",
      description: "Drive organic growth with content that converts prospects into customers. Our SaaS-focused content marketing approach targets every stage of the buyer's journey, from awareness to retention, creating product-led content that showcases your software's value proposition.",
      features: [
        "Product-led Content: Showcase your software's value proposition with compelling content",
        "Use Case Studies: Target specific industry verticals with detailed case studies",
        "Comparison Pages: Position you against competitors with strategic comparisons",
        "Integration Guides: Help technical decision-makers understand implementation",
        "ROI Calculators: Demonstrate business value with interactive tools"
      ],
      results: [
        "300% increase in organic search traffic",
        "150% improvement in demo request conversion rate",
        "45% reduction in customer acquisition cost"
      ]
    },
    {
      icon: Target,
      title: "Technology Company PPC & Paid Advertising",
      description: "Accelerate growth with precision-targeted advertising campaigns that maximize return on ad spend while minimizing customer acquisition costs. Our paid advertising strategies focus on high-intent keywords and strategic audience targeting.",
      features: [
        "Google Ads for SaaS: Search campaigns targeting high-intent keywords",
        "LinkedIn Advertising: Sponsored content targeting IT decision-makers",
        "YouTube Product Demos: Video advertising for product demonstrations",
        "Performance Max Campaigns: AI-powered optimization for maximum results",
        "Account-based Marketing: Target enterprise prospects with precision"
      ],
      results: [
        "135% increase in qualified demo requests",
        "60% faster sales cycle duration",
        "25% improvement in close rates"
      ]
    },
    {
      icon: TrendingUp,
      title: "SaaS Growth Marketing & Conversion Optimization",
      description: "Transform visitors into customers with data-driven optimization of every touchpoint in your customer journey. We optimize landing pages, email sequences, and user flows to maximize conversion rates and accelerate growth.",
      features: [
        "Landing Page Optimization: A/B testing for signup forms and CTAs",
        "Email Marketing Automation: Welcome sequences and feature adoption campaigns",
        "Mobile-first Design: Optimized for mobile users and touch interactions",
        "Trust Signals: Social proof and credibility elements for conversion",
        "Loading Speed Optimization: Fast performance for better user experience"
      ],
      results: [
        "75% faster lead qualification process",
        "200% improvement in trial-to-paid conversion",
        "180% growth in user engagement"
      ]
    },
    {
      icon: Crown,
      title: "Technology Brand Positioning & Thought Leadership",
      description: "Establish your company as an industry authority through strategic thought leadership and brand positioning. We help founders and executives build personal brands that drive credibility and attract high-value prospects.",
      features: [
        "LinkedIn Thought Leadership: Personal branding for founders and executives",
        "PR & Media Relations: Tech publication outreach and industry recognition",
        "Industry Event Speaking: Speaking opportunities at key conferences",
        "Award Submissions: Recognition and credibility building initiatives",
        "Crisis Communication: Professional communication during challenging times"
      ],
      results: [
        "300% increase in industry recognition",
        "150% growth in speaking opportunities",
        "200% improvement in brand authority"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation & Lead Nurturing",
      description: "Automate your marketing processes and nurture leads through sophisticated workflows that drive engagement and accelerate sales cycles. Our automation strategies focus on the entire customer lifecycle from trial to expansion.",
      features: [
        "Welcome Sequences: Automated onboarding for new trial users",
        "Feature Adoption Campaigns: Drive product usage and engagement",
        "Churn Prevention Workflows: Retain customers with proactive outreach",
        "Upgrade Nurture Sequences: Convert free users to paid plans",
        "Lead Scoring: Identify high-value prospects for sales prioritization"
      ],
      results: [
        "85% improvement in lead qualification",
        "120% increase in feature adoption",
        "40% reduction in churn rate"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance Optimization",
      description: "Track and optimize business-critical metrics including customer acquisition cost, monthly recurring revenue, and customer lifetime value. Our analytics approach provides actionable insights for data-driven decision making.",
      features: [
        "CAC Tracking: Monitor and optimize customer acquisition costs",
        "MRR Growth Analysis: Track monthly recurring revenue trends",
        "PQL Identification: Identify product-qualified leads for sales",
        "Trial-to-Paid Conversion: Optimize conversion from trial to paid",
        "Attribution Modeling: Understand which channels drive the most value"
      ],
      results: [
        "45% reduction in customer acquisition costs",
        "300% growth in monthly recurring revenue",
        "250% improvement in customer lifetime value"
      ]
    }
  ]

  const technologyMarketingProcess = [
    {
      step: "01",
      title: "Strategic Foundation",
      description: "We begin every technology marketing engagement with comprehensive market research, competitive analysis, and buyer persona development. This strategic foundation ensures your marketing aligns with your business objectives and target market positioning."
    },
    {
      step: "02",
      title: "Digital Asset Optimization",
      description: "Our team optimizes your website, content, and digital assets for conversion and performance. We implement technical SEO, marketing automation, and conversion optimization to maximize your digital presence effectiveness."
    },
    {
      step: "03",
      title: "Campaign Launch & Optimization",
      description: "We deploy multi-channel marketing campaigns across content, paid advertising, and automation. Continuous A/B testing and performance optimization ensure maximum ROI and sustainable growth for your technology company."
    },
    {
      step: "04",
      title: "Growth Acceleration & Scaling",
      description: "We focus on scaling successful campaigns, expanding into new channels, and optimizing for long-term growth. Our data-driven approach ensures continuous improvement and sustainable competitive advantage."
    }
  ]

  const whyChooseTechnologyMarketing = [
    "Proven Results: Our clients see average 135% increase in qualified demo requests and 45% reduction in customer acquisition costs",
    "Expert Team: Specialized technology marketing experts with deep SaaS and B2B software experience across all growth stages",
    "Comprehensive Solutions: Complete technology marketing services from strategy to execution with transparent pricing starting from $4,500",
    "Full-Service Approach: Strategic planning, content marketing, paid advertising, automation, and ongoing optimization support",
    "Industry Expertise: Deep understanding of technology marketing across SaaS, fintech, healthtech, edtech, and enterprise software sectors",
    "Technical Excellence: Modern marketing practices ensuring optimal performance, attribution, and scalable growth strategies",
    "Data-Driven Strategy: Performance analytics, customer behavior tracking, and conversion optimization for measurable business success",
    "Flexible Engagement: Project-based and ongoing marketing options with no long-term contracts required"
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "SaaS & Software Companies",
      description: "Specialized marketing for SaaS platforms, enterprise software, and B2B technology solutions that need to demonstrate complex value propositions and drive trial-to-paid conversions.",
      services: [
        "Enterprise SaaS platforms",
        "Vertical-specific software solutions",
        "API and developer tools",
        "Cybersecurity software",
        "Data analytics platforms"
      ],
      results: "135% increase in qualified demos, 45% reduction in CAC"
    },
    {
      icon: Rocket,
      title: "Technology Startups",
      description: "Growth-focused marketing for early-stage technology companies that need to establish market presence, attract investors, and scale user acquisition efficiently.",
      services: [
        "FinTech companies",
        "HealthTech solutions",
        "EdTech platforms",
        "AI/ML software",
        "IoT and hardware companies"
      ],
      results: "300% growth in user acquisition, 200% increase in investor interest"
    },
    {
      icon: Briefcase,
      title: "B2B Technology Services",
      description: "Marketing strategies for technology service providers, consultants, and integrators that need to establish thought leadership and generate qualified B2B leads.",
      services: [
        "Cloud service providers",
        "Managed service providers (MSPs)",
        "IT consulting firms",
        "Technology integrators",
        "Digital transformation consultants"
      ],
      results: "180% increase in qualified leads, 120% improvement in close rates"
    },
    {
      icon: Shield,
      title: "Cybersecurity Companies",
      description: "Specialized marketing for cybersecurity firms that need to build trust, demonstrate expertise, and reach security-conscious decision-makers in enterprise environments.",
      services: [
        "Security software vendors",
        "Cybersecurity consulting",
        "Compliance solutions",
        "Threat intelligence platforms",
        "Security awareness training"
      ],
      results: "250% increase in enterprise inquiries, 160% growth in pipeline value"
    },
    {
      icon: Database,
      title: "Data & Analytics Companies",
      description: "Marketing for data-driven companies that need to communicate complex technical capabilities to both technical and business audiences while driving adoption.",
      services: [
        "Business intelligence platforms",
        "Data visualization tools",
        "Analytics software",
        "Machine learning platforms",
        "Data management solutions"
      ],
      results: "220% increase in trial signups, 140% improvement in user engagement"
    },
    {
      icon: Globe,
      title: "Enterprise Technology",
      description: "Marketing strategies for large-scale technology solutions that serve enterprise customers and require complex sales cycles with multiple stakeholders.",
      services: [
        "ERP systems",
        "CRM platforms",
        "Enterprise software suites",
        "Integration platforms",
        "Workflow automation tools"
      ],
      results: "190% increase in enterprise deals, 75% faster sales cycles"
    }
  ]

  const technologyMarketingCaseStudies = [
    {
      industry: "B2B SaaS Platform",
      location: "Global Market",
      challenge: "Early-stage data collaboration platform needed to compete against established players and accelerate pipeline growth for Series B funding",
      solution: "Developed comprehensive content strategy targeting 'DataOps' keywords, created technical documentation and use case studies, implemented SEO optimization, and launched targeted LinkedIn campaigns for data engineers",
      results: [
        "300% increase in organic search traffic",
        "150% improvement in demo request conversion rate",
        "45% reduction in customer acquisition cost",
        "Featured in top industry publications"
      ]
    },
    {
      industry: "Cybersecurity Startup",
      location: "Enterprise Market",
      challenge: "Cybersecurity SaaS needed to accelerate pipeline growth for Series B funding and compete with established security vendors",
      solution: "Implemented account-based marketing for enterprise prospects, created security-focused content for IT decision-makers, optimized paid campaigns for high-value keywords, and developed thought leadership content for founder",
      results: [
        "135% increase in qualified pipeline value",
        "60% faster sales cycle duration",
        "25% improvement in close rates",
        "Successfully raised $15M Series B funding"
      ]
    },
    {
      industry: "FinTech SaaS",
      location: "B2B Market",
      challenge: "Financial technology startup needed to establish credibility and drive adoption among risk-averse financial institutions",
      solution: "Created compliance-focused content marketing, implemented LinkedIn thought leadership strategy, developed case studies with financial institutions, and launched targeted advertising to financial decision-makers",
      results: [
        "200% increase in enterprise inquiries",
        "180% growth in trial-to-paid conversion",
        "120% improvement in average deal size",
        "Partnerships with 3 major financial institutions"
      ]
    }
  ]

  const technologyMarketingFaqData = [
    {
      question: "What makes SaaS marketing different from other industries?",
      answer: "SaaS marketing requires understanding unique metrics like MRR, churn rate, and lifetime value. We focus on the entire customer journey from trial to expansion, not just initial acquisition. Our strategies optimize for product-qualified leads, trial-to-paid conversion, and customer success metrics that drive sustainable growth."
    },
    {
      question: "How do you measure success for technology companies?",
      answer: "We track business-critical metrics including Customer Acquisition Cost (CAC), Monthly Recurring Revenue (MRR) growth, Product-qualified leads (PQLs), Trial-to-paid conversion rates, and Customer lifetime value (CLV). Our reporting focuses on metrics that directly impact your business growth and investor confidence."
    },
    {
      question: "What's the typical timeline to see results?",
      answer: "Immediate (0-30 days): Website optimization and conversion improvements. Short-term (1-3 months): Paid advertising results and lead generation. Medium-term (3-6 months): SEO traffic growth and content marketing impact. Long-term (6+ months): Sustainable organic growth and brand recognition."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes! We have specific packages designed for pre-Series A startups, focusing on cost-effective growth strategies that prove product-market fit and attract investor attention. Our startup packages start at $4,500/month and include essential growth marketing services."
    },
    {
      question: "How do you handle technical complexity in marketing?",
      answer: "Our team includes technical marketers who understand complex B2B software. We translate technical features into business benefits and create content that resonates with both technical and business decision-makers. We specialize in making complex technology accessible to your target audience."
    },
    {
      question: "What's included in your technology marketing services?",
      answer: "Our comprehensive services include content marketing and SEO, paid advertising management, marketing automation setup, conversion optimization, analytics and reporting, and ongoing strategy optimization. We provide end-to-end marketing support tailored to your technology company's specific needs and growth stage."
    },
    {
      question: "How do you approach content marketing for SaaS companies?",
      answer: "We create product-led content that showcases your software's value proposition, use case studies targeting specific industries, comparison pages positioning you against competitors, integration guides for technical decision-makers, and ROI calculators that demonstrate business value."
    },
    {
      question: "What industries do you serve for technology marketing?",
      answer: "Our technology marketing expertise covers SaaS platforms, fintech, healthtech, edtech, cybersecurity, data analytics, enterprise software, and B2B technology services. We adapt our marketing approach to industry-specific requirements, compliance considerations, and buyer behavior patterns."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads Technology & SaaS Marketing",
        "description": "Specialized digital marketing agency for technology companies and SaaS businesses. Reduce CAC, increase ARR, and accelerate growth with proven B2B marketing strategies.",
        "url": "https://frameleads.com/technology-and-saas",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/technology-marketing-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Innovation Drive",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94107",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "saas@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Digital Marketing for Technology Companies",
        "areaServed": ["United States", "Global"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$4500-$30000",
          "description": "Professional technology marketing services with transparent pricing and proven results"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Technology Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "B2B SaaS Content Marketing & SEO",
                "description": "Drive organic growth with content that converts prospects into customers"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Technology Company PPC & Paid Advertising",
                "description": "Accelerate growth with precision-targeted advertising campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS Growth Marketing & Conversion Optimization",
                "description": "Transform visitors into customers with data-driven optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": technologyMarketingFaqData.map(faq => ({
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
      <title>Digital Marketing for Technology & SaaS Companies | Frameleads</title>
      <meta name="description" content="Specialized digital marketing for SaaS & tech companies. Reduce CAC, increase ARR, and accelerate growth with proven B2B marketing strategies. Get free audit." />
      <meta name="keywords" content="digital marketing for SaaS, technology marketing agency, SaaS marketing services, B2B SaaS digital marketing, software company marketing, digital marketing for technology companies, startup digital marketing agency, SaaS growth marketing, tech company marketing strategy, software marketing agency, B2B technology marketing, SaaS content marketing, technology lead generation, SaaS PPC advertising, tech startup marketing services" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/technology-and-saas" />
      <meta property="og:title" content="Digital Marketing for Technology & SaaS Companies | Frameleads" />
      <meta property="og:description" content="Specialized digital marketing for SaaS & tech companies. Reduce CAC, increase ARR, and accelerate growth with proven B2B marketing strategies. Get free audit." />
      <meta property="og:url" content="https://frameleads.com/technology-and-saas" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing for Technology & SaaS Companies | Frameleads" />
      <meta name="twitter:description" content="Specialized digital marketing for SaaS & tech companies. Reduce CAC, increase ARR, and accelerate growth with proven B2B marketing strategies. Get free audit." />
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
                🚀 Premier Digital Marketing for Technology & SaaS - 135% Demo Request Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Digital Marketing for Technology & SaaS Companies |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Transform Your SaaS Into a Market Leader
              </span>{" "}
              With Data-Driven Strategies That Reduce CAC & Accelerate ARR Growth
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              The SaaS market is projected to reach $295 billion in 2025, making competition fiercer than ever. With 92% of SaaS companies failing within their first three years due to ineffective growth strategies, you need a specialized digital marketing partner who understands the unique challenges of technology businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free SaaS Marketing Audit - Start Today
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
                <span>✓ Proven Results: 135% Demo Request Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Specialized SaaS Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Comprehensive Solutions: Starting $4,500</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ 200+ Successful Technology Marketing Campaigns</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Key Results We Deliver for Technology Companies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">135%</div>
                  <div className="text-gray-600 text-sm">Increase in Qualified Demo Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">45%</div>
                  <div className="text-gray-600 text-sm">Reduction in Customer Acquisition Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">300%</div>
                  <div className="text-gray-600 text-sm">Growth in Organic Search Traffic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">75%</div>
                  <div className="text-gray-600 text-sm">Faster Lead Qualification Process</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Technology Marketing Results Across All Industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our data-driven technology marketing approach delivers measurable growth for SaaS and tech companies through strategic content marketing, paid advertising, and comprehensive optimization</p>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">135%</div>
                <div className="text-gray-600 text-sm">Increase in Qualified Demo Requests</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">45%</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">300%</div>
                <div className="text-gray-600 text-sm">Growth in Organic Search Traffic</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">75%</div>
                <div className="text-gray-600 text-sm">Faster Lead Qualification Process</div>
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
                Why Choose Frameleads for Technology & SaaS Marketing?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier digital marketing agency for technology companies, combining specialized SaaS marketing expertise with deep understanding of B2B software challenges. Our comprehensive approach ensures that every aspect of your marketing delivers maximum impact through strategic content marketing, paid advertising, and comprehensive optimization solutions.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Technology Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 135% increase in qualified demo requests and 45% reduction in customer acquisition costs for our clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Specialized technology marketing experts with deep SaaS and B2B software experience across all growth stages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Content marketing, paid advertising, marketing automation, conversion optimization, and ongoing support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry Expertise: Deep understanding across SaaS, fintech, healthtech, edtech, cybersecurity, and enterprise software sectors</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Technology Marketing Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Starting from $4,500 with transparent pricing and proven results across all technology marketing stages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Technical Excellence: Modern marketing practices ensuring optimal performance, attribution, and scalable growth strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Data-Driven Strategy: Performance analytics, customer behavior tracking, and conversion optimization for measurable business success</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Flexible Engagement: Project-based and ongoing marketing options with no long-term contracts required</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technology Marketing Dashboard</h3>
                  <p className="text-gray-600">Real-time marketing analytics and performance insights for optimal SaaS growth</p>
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
              Specialized SaaS & Technology Marketing Services for Maximum Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive technology marketing services are designed to deliver market success and drive business growth through strategic content marketing, paid advertising, and comprehensive optimization solutions.
            </p>
          </div>

          <div className="space-y-12">
            {technologyMarketingServicesList.map((service, index) => {
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
              Transparent Technology Marketing Pricing & Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional technology marketing packages designed for SaaS and tech companies of all sizes. All packages include content marketing, paid advertising, and comprehensive optimization with transparent pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startup Growth Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Growth Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$4,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for early-stage SaaS and tech startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Website optimization and conversion setup</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Content marketing (4-6 articles/month)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Basic SEO and keyword optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Social media management (LinkedIn focus)</span>
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

            {/* Scale-Up Acceleration Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-[#FF6B35]/50 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/30 ring-2 ring-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Most Popular</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale-Up Acceleration Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$8,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for growing SaaS companies ready to scale</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Startup package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced SEO and content marketing</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-channel paid advertising management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Marketing automation and lead nurturing</span>
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

            {/* Enterprise Growth Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Growth Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$15,000+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For established tech companies and comprehensive marketing solutions</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Scale-Up package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full-funnel marketing strategy and execution</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Account-based marketing for enterprise prospects</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced analytics and attribution modeling</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated marketing team and strategist</span>
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
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored technology marketing solution</Link></p>
          </div>
        </div>
      </section>

      {/* Technology Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Technology Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic technology marketing approach combining strategic planning, data-driven execution, and comprehensive optimization to deliver measurable results through content marketing, paid advertising, and growth optimization solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyMarketingProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Technology Marketing Expertise Across Key Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key technology industries worldwide, with deep understanding of unique marketing needs and industry-specific requirements in each sector.
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

      {/* Technology Marketing Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Marketing Success Stories: Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped technology companies achieve remarkable growth through strategic marketing, content optimization, and comprehensive growth solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologyMarketingCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Marketing Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology marketing services across content marketing, paid advertising, marketing automation, and growth optimization, helping SaaS and tech companies create high-performing marketing strategies that drive growth and customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyMarketingServices.map((service, index) => (
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
              Frequently Asked Questions About Technology & SaaS Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about professional technology marketing services and how Frameleads can help your SaaS or tech company achieve measurable results through strategic marketing, content optimization, and comprehensive growth solutions.
            </p>
          </div>

          <div className="space-y-6">
            {technologyMarketingFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Technology Company with Expert SaaS Marketing Services?"
        description="Partner with Frameleads, the most trusted technology marketing agency. Get your free SaaS marketing audit and discover how we can help you achieve measurable growth and market success through strategic content marketing, paid advertising, and comprehensive optimization."
        primaryButtonText="Start Your Technology Marketing Transformation Today - Free Audit"
        secondaryButtonText="Get Your Free SaaS Marketing Strategy Session"
      />

      {/* Comprehensive Technology Marketing Services */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Technology Marketing Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>technology marketing agency</strong>, we offer comprehensive services across <strong>Content Marketing</strong>, <strong>Paid Advertising</strong>, <strong>Marketing Automation</strong>, and <strong>Growth Optimization</strong>. 
              Explore our specialized services designed specifically for SaaS and technology company growth and market success.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Content Marketing & SEO</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Drive organic growth with content that converts prospects into customers through strategic content marketing targeting every stage of the buyer's journey.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Product-led content creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Technical SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Use case studies & comparisons</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Content Marketing
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Paid Advertising & PPC</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Accelerate growth with precision-targeted advertising campaigns that maximize return on ad spend while minimizing customer acquisition costs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Google Ads for SaaS</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">LinkedIn advertising</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Account-based marketing</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Paid Advertising
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Marketing Automation & Lead Nurturing</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Automate your marketing processes and nurture leads through sophisticated workflows that drive engagement and accelerate sales cycles.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Welcome sequences</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Feature adoption campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Churn prevention workflows</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Marketing Automation
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Analytics & Performance Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Track and optimize business-critical metrics including customer acquisition cost, monthly recurring revenue, and customer lifetime value.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">CAC tracking & optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">MRR growth analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Attribution modeling</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Analytics & Optimization
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brand Positioning & Thought Leadership</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Establish your company as an industry authority through strategic thought leadership and brand positioning that drives credibility and growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">LinkedIn thought leadership</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">PR & media relations</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Industry event speaking</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Brand Positioning
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Growth Marketing & Conversion Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Transform visitors into customers with data-driven optimization of every touchpoint in your customer journey from trial to expansion.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Landing page optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">A/B testing & experimentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Trial-to-paid conversion</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Growth Marketing
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free SaaS Marketing Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current marketing performance and growth opportunities</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">SaaS Growth Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your SaaS marketing ROI and optimize your investment for maximum business growth</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Technology Marketing Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to technology marketing strategies and best practices for SaaS success</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn technology marketing with our expert-led courses and training programs for SaaS growth</p>
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
            🚀
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
    </>
  )
}
