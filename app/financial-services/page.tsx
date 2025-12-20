'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Video, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, Search, ShoppingBag, BarChart, ArrowRight, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator, BookOpen, FileText, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee, Code, Database, Server, Wrench, Cpu, HardDrive, Network, Terminal, GitBranch, ShieldCheck, Stethoscope, UserCheck, ClipboardList, CreditCard, Banknote, TrendingUp as TrendingUpIcon, Building, PiggyBank, Wallet, Receipt, Coins, Landmark } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import ReviewRating from "../components/review-rating"

export default function FinancialServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const financialMarketingServices = [
    {
      category: "Financial Services SEO",
      areas: ["Banking SEO Optimization", "Financial Content Marketing", "Investment Firm Local SEO", "Financial Keyword Research", "Compliance-Focused SEO", "Financial Directory Submissions"],
      description: "Drive organic growth with financial services SEO that helps clients find your banking, investment, or insurance services when they need them most"
    },
    {
      category: "Financial PPC Management", 
      areas: ["Google Ads for Financial Services", "Banking Social Media Advertising", "Investment Firm Lead Generation", "Financial Conversion Tracking", "Insurance Remarketing Campaigns", "Compliance-Compliant Tracking"],
      description: "Drive immediate client inquiries with specialized financial PPC campaigns that capture high-intent banking and investment searches"
    },
    {
      category: "Financial Content Marketing",
      areas: ["Financial Blog Writing", "Investment Education Content", "Banking Email Marketing", "Financial Video Content", "Investment Infographics", "Client Success Stories"],
      description: "Build trust and authority in your financial field with educational content that positions you as a financial expert"
    },
    {
      category: "Financial Website Design & Development",
      areas: ["Compliance-Compliant Web Design", "Banking Portal Integration", "Financial Mobile Optimization", "Secure Form Development", "Financial Website Accessibility", "Client Communication Systems"],
      description: "Create a professional, secure online presence that builds client trust and drives conversions while maintaining regulatory compliance"
    },
    {
      category: "Financial Reputation Management",
      areas: ["Client Review Management", "Online Reputation Monitoring", "Financial Crisis Communication", "Banking Brand Management", "Client Testimonial Programs", "Financial Social Media Management"],
      description: "Protect and enhance your financial institution's online reputation with professional reputation management services"
    },
    {
      category: "Financial Analytics & Performance Optimization",
      areas: ["Client Acquisition Tracking", "Financial ROI Analysis", "Banking Conversion Optimization", "Financial Marketing Attribution", "Client Journey Analytics", "Compliance-Compliant Reporting"],
      description: "Track and optimize your financial services marketing performance with detailed analytics that respect client privacy and regulatory requirements"
    }
  ]

  const financialMarketingServicesList = [
    {
      icon: FileText,
      title: "Financial Services SEO",
      description: "Drive organic growth with financial services SEO that helps clients find your banking, investment, or insurance services when they need them most. Our compliance-focused SEO strategies target financial keywords and local search to increase your institution's visibility.",
      features: [
        "Banking Local SEO: Google Business Profile optimization for financial institutions",
        "Financial Content Optimization: Compliance-reviewed content that educates clients",
        "Financial Website Technical SEO: Regulatory-compliant tracking and optimization",
        "Financial Directory Submissions: Listings in financial-specific directories",
        "Financial Keyword Research: Target high-intent banking and investment search terms"
      ],
      results: [
        "280% increase in organic search traffic",
        "220% improvement in local search rankings",
        "160% growth in client consultation bookings"
      ]
    },
    {
      icon: Target,
      title: "Financial PPC Management",
      description: "Drive immediate client inquiries with specialized financial PPC campaigns that capture high-intent banking and investment searches. Our financial advertising strategies comply with regulatory requirements while maximizing client acquisition.",
      features: [
        "Google Ads for Financial Services: Search campaigns targeting banking and investment keywords",
        "Financial Social Media Advertising: LinkedIn and Facebook ads for financial institutions",
        "Financial Lead Generation: High-intent banking and investment keyword targeting",
        "Financial Conversion Tracking: Compliance-compliant tracking and analytics",
        "Financial Remarketing Campaigns: Re-engage clients who visited your website"
      ],
      results: [
        "125% increase in qualified client inquiries",
        "55% faster consultation booking process",
        "40% reduction in cost per client acquisition"
      ]
    },
    {
      icon: TrendingUp,
      title: "Financial Content Marketing",
      description: "Build trust and authority in your financial field with educational content that positions you as a financial expert. Our content marketing strategies educate clients while driving organic growth and client engagement.",
      features: [
        "Financial Blog Writing: Compliance-reviewed financial articles and investment guides",
        "Client Education Content: Investment-specific resources and financial planning explanations",
        "Financial Email Marketing: Compliance-compliant client communication campaigns",
        "Financial Video Content: Educational videos and investment strategy explanations",
        "Client Success Stories: Testimonials and case studies (with consent)"
      ],
      results: [
        "180% increase in client engagement",
        "140% improvement in website time on page",
        "110% growth in client newsletter subscriptions"
      ]
    },
    {
      icon: Crown,
      title: "Financial Website Design & Development",
      description: "Create a professional, secure online presence that builds client trust and drives conversions. Our financial website design ensures regulatory compliance while providing an excellent user experience for clients.",
      features: [
        "Compliance-Compliant Web Design: Secure banking portal integration and data protection",
        "Banking Portal Integration: Online account access and financial record management",
        "Financial Mobile Optimization: Mobile-responsive design for client convenience",
        "Financial Form Security: Encrypted forms and secure client data collection",
        "Financial Website Accessibility: ADA-compliant design for all clients"
      ],
      results: [
        "280% increase in online account openings",
        "230% improvement in client satisfaction scores",
        "170% growth in banking portal usage"
      ]
    },
    {
      icon: Zap,
      title: "Financial Reputation Management",
      description: "Protect and enhance your financial institution's online reputation with professional reputation management services. We help you build trust with clients through strategic review management and positive content creation.",
      features: [
        "Client Review Management: Monitor and respond to reviews across all platforms",
        "Online Reputation Monitoring: Track mentions and sentiment across the web",
        "Financial Crisis Communication: Professional communication during challenging times",
        "Financial Institution Branding: Consistent brand messaging across all channels",
        "Client Testimonial Programs: Generate authentic positive content with consent"
      ],
      results: [
        "230% increase in positive online reviews",
        "170% improvement in online reputation score",
        "115% growth in client trust indicators"
      ]
    },
    {
      icon: BarChart3,
      title: "Financial Analytics & Performance Optimization",
      description: "Track and optimize your financial services marketing performance with detailed analytics that respect client privacy. Our compliance-compliant analytics provide actionable insights for data-driven financial marketing decisions.",
      features: [
        "Client Acquisition Tracking: Monitor and optimize client acquisition costs",
        "Financial ROI Analysis: Track return on investment for marketing campaigns",
        "Financial Institution Conversion Optimization: A/B testing for account opening",
        "Financial Marketing Attribution: Understand which channels drive the most clients",
        "Compliance-Compliant Reporting: Detailed analytics that protect client privacy"
      ],
      results: [
        "42% reduction in client acquisition costs",
        "280% improvement in marketing ROI",
        "240% increase in account opening conversion rates"
      ]
    }
  ]

  const financialMarketingProcess = [
    {
      step: "01",
      title: "Financial Marketing Assessment",
      description: "We begin every financial services marketing engagement with a comprehensive assessment of your current marketing, competitive analysis, and client persona development. This strategic foundation ensures your marketing aligns with your institution goals and client needs."
    },
    {
      step: "02",
      title: "Compliance-Compliant Setup & Optimization",
      description: "Our team optimizes your financial website, content, and digital assets for client conversion while ensuring full regulatory compliance. We implement financial-specific SEO, client communication systems, and conversion optimization."
    },
    {
      step: "03",
      title: "Financial Campaign Launch & Management",
      description: "We deploy multi-channel financial marketing campaigns across content, paid advertising, and client engagement. Continuous optimization and compliance-compliant tracking ensure maximum client acquisition and institutional growth."
    },
    {
      step: "04",
      title: "Client Growth & Institution Scaling",
      description: "We focus on scaling successful campaigns, expanding client acquisition channels, and optimizing for long-term institutional growth. Our data-driven approach ensures continuous improvement and sustainable client acquisition."
    }
  ]

  const whyChooseFinancialMarketing = [
    "Proven Results: Our financial services clients see average 280% increase in client consultations and 42% reduction in client acquisition costs",
    "Expert Team: Specialized financial services marketing experts with deep banking, investment, and insurance industry experience",
    "Regulatory Compliance: All our financial marketing services are designed with regulatory compliance and client privacy at the forefront",
    "Comprehensive Solutions: Complete financial services marketing from strategy to execution with transparent pricing starting from $3,500",
    "Industry Expertise: Deep understanding of financial marketing across banks, credit unions, investment firms, and insurance companies",
    "Financial Credibility: We understand the unique challenges of marketing financial services while maintaining regulatory compliance",
    "Client-Focused Strategy: Performance analytics, client journey tracking, and conversion optimization for measurable institutional growth",
    "Flexible Engagement: Project-based and ongoing marketing options with no long-term contracts required"
  ]

  const financialIndustriesWeServe = [
    {
      icon: Building,
      title: "Banks & Credit Unions",
      description: "Comprehensive digital marketing for banks and credit unions that need to attract new customers, build community trust, and compete in competitive financial markets.",
      services: [
        "Multi-location banking marketing",
        "Personal banking customer acquisition",
        "Business banking promotion",
        "Community financial education",
        "Banking reputation management"
      ],
      results: "280% increase in new account openings, 240% improvement in local visibility"
    },
    {
      icon: TrendingUpIcon,
      title: "Investment Firms & Wealth Management",
      description: "Specialized marketing for investment firms and wealth management companies that need to attract high-net-worth clients and build strong financial relationships.",
      services: [
        "Investment firm marketing",
        "Wealth management promotion",
        "Financial advisor SEO",
        "High-net-worth client acquisition",
        "Investment firm branding"
      ],
      results: "250% increase in new client inquiries, 180% growth in assets under management"
    },
    {
      icon: Shield,
      title: "Insurance Companies",
      description: "Targeted marketing for insurance companies that need to attract customers for both personal and commercial insurance products.",
      services: [
        "Insurance company marketing",
        "Life insurance promotion",
        "Commercial insurance marketing",
        "Insurance SEO optimization",
        "Insurance lead generation"
      ],
      results: "220% increase in policy sales, 160% improvement in customer retention"
    },
    {
      icon: CreditCard,
      title: "Fintech & Digital Banking",
      description: "Innovative marketing for fintech companies and digital banking platforms that need to reach tech-savvy customers and build digital trust.",
      services: [
        "Fintech platform marketing",
        "Digital banking promotion",
        "Mobile app marketing",
        "Fintech SEO optimization",
        "Digital financial branding"
      ],
      results: "300% increase in user adoption, 200% growth in digital engagement"
    },
    {
      icon: PiggyBank,
      title: "Financial Advisors & Planners",
      description: "Expert marketing for financial advisors and planners who need to attract clients seeking personalized financial guidance and planning services.",
      services: [
        "Financial advisor marketing",
        "Retirement planning promotion",
        "Financial planning SEO",
        "Client acquisition campaigns",
        "Financial advisor branding"
      ],
      results: "240% increase in consultation bookings, 170% improvement in client referrals"
    },
    {
      icon: Landmark,
      title: "Real Estate Finance & Mortgage",
      description: "Specialized marketing for mortgage lenders and real estate finance companies that need to reach homebuyers and real estate investors.",
      services: [
        "Mortgage lender marketing",
        "Home loan promotion",
        "Real estate finance SEO",
        "First-time buyer campaigns",
        "Mortgage company branding"
      ],
      results: "260% increase in loan applications, 190% growth in mortgage approvals"
    }
  ]

  const financialMarketingCaseStudies = [
    {
      industry: "Regional Credit Union",
      location: "Midwest United States",
      challenge: "150,000-member credit union was struggling with declining new member acquisition and increased competition from larger banks in the area",
      solution: "Developed comprehensive financial services marketing strategy including complete website redesign, local SEO optimization, targeted PPC campaigns, and financial education content marketing",
      results: [
        "280% increase in online account openings",
        "240% improvement in local search rankings",
        "170% growth in website organic traffic",
        "42% reduction in cost per client acquisition"
      ]
    },
    {
      industry: "Investment Advisory Firm",
      location: "Southeast United States",
      challenge: "Specialty investment firm needed to expand client base while competing against established wealth management practices in a saturated market",
      solution: "Implemented financial services SEO, investment content marketing, conversion optimization, and client review management to build trust and attract new high-net-worth clients",
      results: [
        "250% increase in client consultation requests",
        "200% improvement in search engine rankings",
        "150% growth in organic website traffic",
        "55% increase in consultation conversion rates"
      ]
    },
    {
      industry: "Multi-Location Insurance Agency",
      location: "West Coast United States",
      challenge: "Multi-location insurance agency wanted to standardize marketing across all locations while maintaining local relevance and increasing policy sales",
      solution: "Created unified insurance marketing strategy, centralized content creation, local SEO optimization, and implemented client acquisition campaigns across all locations",
      results: [
        "380% return on marketing investment",
        "280% increase in new policy sales",
        "260% improvement in online visibility",
        "45% reduction in marketing costs per location"
      ]
    }
  ]

  const financialMarketingFaqData = [
    {
      question: "What makes financial services marketing different from other industries?",
      answer: "Financial services marketing requires understanding regulatory compliance (FINRA, SEC, CFPB), financial advertising regulations, client privacy concerns, and the unique client journey from financial need awareness to service selection. We focus on building trust, maintaining financial credibility, and ensuring all marketing activities comply with financial regulations while driving client acquisition."
    },
    {
      question: "How do you ensure regulatory compliance in financial marketing?",
      answer: "All our financial services marketing services are designed with regulatory compliance at the forefront. We use secure data handling practices, implement compliant tracking and analytics that protect client privacy, create compliance-aware content that avoids sensitive financial information, and provide regular compliance audits to ensure ongoing adherence to financial regulations."
    },
    {
      question: "What's the typical timeline to see results for financial services marketing?",
      answer: "Immediate (0-30 days): Website optimization and conversion improvements. Short-term (1-3 months): Paid advertising results and client lead generation. Medium-term (3-6 months): SEO traffic growth and content marketing impact. Long-term (6+ months): Sustainable organic growth and institutional recognition in your market."
    },
    {
      question: "Do you work with small financial institutions?",
      answer: "Yes! We have specific packages designed for small financial institutions, focusing on cost-effective marketing strategies that drive client acquisition without breaking the budget. Our starter packages begin at $3,500/month and include essential financial services marketing services tailored for smaller institutions."
    },
    {
      question: "How do you handle financial advertising regulations?",
      answer: "Our team includes financial services marketing specialists who understand financial advertising regulations, FINRA guidelines, SEC requirements, and state-specific financial regulations. We ensure all marketing materials comply with financial advertising standards while effectively promoting your financial services and building client trust."
    },
    {
      question: "What's included in your financial services marketing services?",
      answer: "Our comprehensive financial services marketing includes compliance-compliant SEO, financial PPC management, financial content marketing, financial website design, client review management, financial analytics, and ongoing strategy optimization. We provide end-to-end marketing support tailored to your financial institution's specific needs and client demographics."
    },
    {
      question: "How do you approach content marketing for financial institutions?",
      answer: "We create compliance-reviewed content that educates clients about financial products and services, develop financial education resources, write financial blog posts that establish your expertise, create service-specific landing pages, and develop client success stories (with proper consent) that build trust and credibility."
    },
    {
      question: "What types of financial institutions do you serve?",
      answer: "Our financial services marketing expertise covers banks, credit unions, investment firms, insurance companies, wealth management firms, financial advisors, mortgage lenders, and fintech companies. We adapt our marketing approach to each financial specialty's unique requirements and client needs."
    }
  ]



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads Financial Services Marketing",
        "description": "Specialized digital marketing agency for financial institutions and financial services providers. Drive client growth with compliance-compliant SEO, PPC, and content marketing strategies.",
        "url": "https://frameleads.com/financial-services",
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "logo": "https://frameleads.com/logo.png",
          "image": "https://frameleads.com/financial-marketing-agency.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Innovation Drive",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94107",
            "addressCountry": "US"
          },
          "telephone": "+1-800-FRAMELEADS",
          "email": "financial@frameleads.com",
          "sameAs": [
            "https://facebook.com/frameleads",
            "https://linkedin.com/company/frameleads"
          ]
        },
        "serviceType": "Digital Marketing for Financial Services",
        "areaServed": ["United States", "Global"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$3500-$20000",
          "description": "Professional financial services marketing with regulatory compliance and transparent pricing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Financial Services Marketing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Financial Services SEO",
                "description": "Drive organic growth with compliance-compliant SEO for financial institutions"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Financial PPC Management",
                "description": "Accelerate client acquisition with financial-compliant advertising campaigns"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Financial Content Marketing",
                "description": "Build trust and authority with financial education content"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": financialMarketingFaqData.map(faq => ({
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
      <title>Digital Marketing for Financial Services | Drive Client Growth with Expert Financial Marketing Services | Frameleads</title>
      <meta name="description" content="Transform your financial institution with proven digital marketing strategies. Our specialized team delivers compliance-compliant SEO, PPC, and content marketing that drives client acquisition and builds trust. Get your free consultation today." />
      <meta name="keywords" content="digital marketing for financial services, financial services marketing, financial marketing agency, banking digital marketing, financial services SEO, investment firm marketing, insurance marketing, financial content marketing, banking SEO, financial social media marketing, compliance compliant marketing, financial PPC management, financial website design, financial reputation management, client acquisition marketing" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://frameleads.com/financial-services" />
      <meta property="og:title" content="Digital Marketing for Financial Services | Drive Client Growth with Expert Financial Marketing Services | Frameleads" />
      <meta property="og:description" content="Transform your financial institution with proven digital marketing strategies. Our specialized team delivers compliance-compliant SEO, PPC, and content marketing that drives client acquisition and builds trust. Get your free consultation today." />
      <meta property="og:url" content="https://frameleads.com/financial-services" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing for Financial Services | Drive Client Growth with Expert Financial Marketing Services | Frameleads" />
      <meta name="twitter:description" content="Transform your financial institution with proven digital marketing strategies. Our specialized team delivers compliance-compliant SEO, PPC, and content marketing that drives client acquisition and builds trust. Get your free consultation today." />
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
                🏦 Premier Digital Marketing for Financial Services - 280% Client Consultation Increase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Digital Marketing for Financial Services |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Transform Your Financial Institution Into a Client Magnet
              </span>{" "}
              With Compliance-Compliant Strategies That Drive Client Growth & Build Trust
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              The financial services advertising market is projected to reach $15.8 billion by 2028, with 90% of loan and mortgage consumers beginning their journey with an online search. With 68% of millennials preferring to manage finances through mobile apps, you need a specialized digital marketing partner who understands regulatory compliance and the unique challenges of financial services marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Financial Marketing Consultation - Start Today
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
                <span>✓ Proven Results: 280% Client Consultation Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Expert Team: Specialized Financial Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ Compliance Compliant: Starting $3,500</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>✓ 150+ Successful Financial Marketing Campaigns</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏦 Key Results We Deliver for Financial Institutions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">280%</div>
                  <div className="text-gray-600 text-sm">Increase in Client Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">42%</div>
                  <div className="text-gray-600 text-sm">Reduction in Client Acquisition Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">240%</div>
                  <div className="text-gray-600 text-sm">Improvement in Local Search Rankings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">170%</div>
                  <div className="text-gray-600 text-sm">Growth in Website Organic Traffic</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Financial Services Marketing Results Across All Financial Specialties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our compliance-compliant financial services marketing approach delivers measurable growth for financial institutions through strategic content marketing, paid advertising, and comprehensive client acquisition optimization</p>
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
                <div className="text-gray-600 text-sm">Increase in Client Consultations</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">42%</div>
                <div className="text-gray-600 text-sm">Reduction in Client Acquisition Costs</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">240%</div>
                <div className="text-gray-600 text-sm">Improvement in Local Search Rankings</div>
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
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">170%</div>
                <div className="text-gray-600 text-sm">Growth in Website Organic Traffic</div>
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
                Why Choose Frameleads for Financial Services Marketing?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads positions itself as the premier digital marketing agency for financial institutions, combining specialized financial marketing expertise with deep understanding of regulatory compliance and financial industry challenges. Our comprehensive approach ensures that every aspect of your marketing delivers maximum impact while maintaining client privacy and financial credibility.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏦 Financial Services Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Proven Results: 280% increase in client consultations and 42% reduction in client acquisition costs for our financial clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expert Team: Specialized financial services marketing experts with deep banking, investment, and insurance industry experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Regulatory Compliance: All our financial marketing services are designed with regulatory compliance and client privacy at the forefront</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Industry Expertise: Deep understanding across banks, credit unions, investment firms, insurance companies, and fintech</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Financial Services Marketing Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive Solutions: Starting from $3,500 with transparent pricing and proven results across all financial marketing stages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Financial Credibility: We understand the unique challenges of marketing financial services while maintaining regulatory compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Client-Focused Strategy: Performance analytics, client journey tracking, and conversion optimization for measurable institutional growth</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services Marketing Dashboard</h3>
                  <p className="text-gray-600">Real-time marketing analytics and performance insights for optimal client acquisition</p>
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
              Specialized Financial Services Marketing for Maximum Client Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive financial services marketing services are designed to deliver client acquisition success and drive institutional growth through compliance-compliant content marketing, paid advertising, and comprehensive optimization solutions.
            </p>
          </div>

          <div className="space-y-12">
            {financialMarketingServicesList.map((service, index) => {
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
              Transparent Financial Services Marketing Pricing & Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional financial services marketing packages designed for financial institutions and financial services providers of all sizes. All packages include compliance-compliant content marketing, paid advertising, and comprehensive optimization with transparent pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Financial Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Financial Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$3,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Perfect for small financial institutions and credit unions</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Compliance-compliant website optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Financial content marketing (4-6 articles/month)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Financial institution local SEO</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Google Business Profile optimization</span>
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

            {/* Professional Financial Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-[#FF6B35]/50 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/30 ring-2 ring-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Most Popular</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Financial Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$6,500</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">Ideal for growing financial institutions and investment firms</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced financial SEO and content marketing</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-channel financial PPC management</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Financial reputation management</span>
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

            {/* Enterprise Financial Package */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Financial Package</h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">$12,500+</div>
                  <div className="text-gray-600">per month</div>
                  <p className="text-sm text-gray-500 mt-2">For large banks, financial institutions, and comprehensive financial marketing solutions</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Full-funnel financial marketing strategy</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Multi-location financial marketing coordination</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Advanced financial analytics and attribution</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span>Dedicated financial marketing team</span>
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
            <p className="text-sm text-gray-500">Need a custom package? <Link href="/contact" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300">Contact us for a tailored financial marketing solution</Link></p>
          </div>
        </div>
      </section>

      {/* Technology Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Financial Services Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic financial services marketing approach combining strategic planning, compliance-compliant execution, and comprehensive optimization to deliver measurable results through content marketing, paid advertising, and client acquisition solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialMarketingProcess.map((process, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Financial Services Marketing Expertise Across Key Financial Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise extends across key financial sectors, with deep understanding of unique marketing needs and industry-specific requirements for each financial specialty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialIndustriesWeServe.map((industry, index) => {
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Financial Services Marketing Success Stories: Real Results from Real Financial Institutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped financial institutions achieve remarkable growth through strategic marketing, compliance-compliant optimization, and comprehensive client acquisition solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {financialMarketingCaseStudies.map((study, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Financial Services Marketing Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive financial services marketing across content marketing, paid advertising, reputation management, and client acquisition optimization, helping financial institutions create high-performing marketing strategies that drive growth and client acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialMarketingServices.map((service, index) => (
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
              Frequently Asked Questions About Financial Services Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about professional financial services marketing and how Frameleads can help your financial institution achieve measurable results through strategic marketing, compliance-compliant optimization, and comprehensive client acquisition solutions.
            </p>
          </div>

          <div className="space-y-6">
            {financialMarketingFaqData.map((faq, index) => (
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
        title="Ready to Transform Your Financial Institution with Expert Financial Marketing Services?"
        description="Partner with Frameleads, the most trusted financial services marketing agency. Get your free financial marketing consultation and discover how we can help you achieve measurable growth and client acquisition success through strategic content marketing, paid advertising, and comprehensive optimization."
        primaryButtonText="Start Your Financial Marketing Transformation Today - Free Consultation"
        secondaryButtonText="Get Your Free Financial Marketing Strategy Session"
      />

      {/* Comprehensive Technology Marketing Services */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Financial Services Marketing Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As the premier <strong>financial services marketing agency</strong>, we offer comprehensive services across <strong>Content Marketing</strong>, <strong>Paid Advertising</strong>, <strong>Reputation Management</strong>, and <strong>Client Acquisition Optimization</strong>. 
              Explore our specialized services designed specifically for financial institutions and financial services growth and client acquisition success.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Healthcare Content Marketing & SEO</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Drive organic growth with HIPAA-compliant content that educates patients and converts prospects into appointments through strategic healthcare content marketing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Medically-reviewed content creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Healthcare SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Patient education resources</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Healthcare Content Marketing
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Medical PPC & Paid Advertising</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Accelerate patient acquisition with HIPAA-compliant advertising campaigns that maximize return on ad spend while minimizing patient acquisition costs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Google Ads for Healthcare</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Healthcare social media advertising</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Medical practice lead generation</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Medical PPC
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Healthcare Reputation Management</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Protect and enhance your medical practice's online reputation with professional reputation management services that build patient trust and drive appointments.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Patient review management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Online reputation monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Healthcare crisis communication</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Reputation Management
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Healthcare Analytics & Performance Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Track and optimize healthcare-critical metrics including patient acquisition cost, appointment conversion rates, and patient lifetime value with HIPAA-compliant analytics.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Patient acquisition tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Healthcare ROI analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">HIPAA-compliant reporting</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Healthcare Analytics
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Healthcare Website Design & Development</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Create a professional, secure online presence that builds patient trust and drives conversions with HIPAA-compliant healthcare website design.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">HIPAA-compliant web design</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Patient portal integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Medical practice mobile optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Healthcare Web Design
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Patient Acquisition & Conversion Optimization</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Transform website visitors into patients with data-driven optimization of every touchpoint in your patient journey from awareness to appointment booking.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Medical practice landing page optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">A/B testing for appointment booking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Patient conversion optimization</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Patient Acquisition
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
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Free Financial Marketing Audit</div>
                  <p className="text-sm text-gray-600">Get a comprehensive analysis of your current financial services marketing performance and client acquisition opportunities</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Financial Services ROI Calculator</div>
                  <p className="text-sm text-gray-600">Calculate your financial services marketing ROI and optimize your investment for maximum client acquisition</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Financial Marketing Guide</div>
                  <p className="text-sm text-gray-600">Complete guide to financial services marketing strategies and compliance-compliant best practices for financial institutions</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Learn financial services marketing with our expert-led courses and training programs for financial institution growth</p>
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
            💰
          </motion.div>
        </motion.div>
      </motion.div>

      
    </div>
    </>
  )
}
