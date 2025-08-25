'use client'


import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingNotifications from "@/app/components/floating-notifications"
import CheckoutDrawer from "@/app/components/CheckoutDrawer"
import {
  CheckCircle,
  Target,
  FileText,
  PencilLine,
  Wallet,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Star,
  Sparkles,
  PlayCircle,
  Download,
  Users,
  StarHalf,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"

export default function AcademyPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true)
  }

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false)
  }

  const toolkitItems = [
    {
      icon: FileText,
      title: "PDF Guide",
      description: "Step-by-step playbook to plan, launch, and scale Meta Ads the right way.",
    },
    {
      icon: Target,
      title: "Targeting Lists",
      description: "Proven audience stacks for D2C, local businesses, and coaches in India.",
    },
    {
      icon: PencilLine,
      title: "Creative & Copy Templates",
      description: "High-converting ad hooks, angles, and creative prompts that just work.",
    },
    {
      icon: Wallet,
      title: "Budget Plan",
      description: "Exact daily budget splits for testing, scaling, and retargeting phases.",
    },
    {
      icon: RefreshCw,
      title: "Retargeting Guide (Bonus)",
      description: "Plug-and-play flows to squeeze maximum ROI from warm traffic.",
    },
  ]

  const faqData = [
    {
      question: "Will this work if I've never run ads before?",
      answer:
        "Yes. The toolkit is beginner-friendly with checklists, examples, and a step-by-step launch plan.",
    },
    {
      question: "Do I need a high budget?",
      answer:
        "No. It's designed for small budgets (₹5k–₹20k/mo). You'll learn exactly how to allocate it smartly.",
    },
    {
      question: "Can I use this for any business?",
      answer:
        "Works best for small businesses, D2C brands, local services, coaches, and freelancers in India.",
    },
    {
      question: "How do I access the product after purchase?",
      answer:
        "You'll get instant access with a download link and a copy via email. Keep it handy for future use.",
    }
    
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Meta Ads Starter Kit",
        description:
          "Affordable, plug-and-play digital toolkit to run Meta Ads like an agency. Includes PDF guide, targeting lists, templates, and budget plans.",
        image: "https://frameleads.com/story/story-cover.webp",
        brand: {
          "@type": "Brand",
          name: "Frameleads Academy",
        },
        offers: {
          "@type": "Offer",
          price: "499",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://frameleads.com/academy",
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "INR"
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY"
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY"
              }
            }
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 30,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn"
          }
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "WebSite",
        url: "https://frameleads.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://frameleads.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577223400100" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/frameleads" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/frameleads/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ajsalabbas8093" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black relative overflow-hidden">
        <FloatingNotifications />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-green-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Custom Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-green-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-400">Frameleads Academy</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('results')}
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  Results
                </button>
                <button 
                  onClick={() => scrollToSection('whats-inside')}
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  What's Inside
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  Pricing
                </button>
                <Button
                  onClick={handleOpenCheckout}
                  className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  Get Toolkit
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 pt-32">
          {/* Background Gradient Lines - Hero Grid */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl text-green-300 px-6 py-3 rounded-full text-sm font-medium border border-green-500/30 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300">
                  🚀 Plug and Play Meta Ads Mastery
                </span>
              </div>

              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-white">
                Scale Profitable Meta Ads in 24h
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Without Paying Agency Fees
                </span>
              </h1>

              <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                We've managed ads generating <span className="text-green-300 font-semibold">₹23 Cr+/month</span> in revenue. Now, access the same strategies, templates, calculators, targeting stacks & step-by-step launch plan, no fluff. In an affordable, plug-and-play digital toolkit designed for small businesses, D2C brands, and solopreneurs.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button
                  onClick={handleOpenCheckout}
                  className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden"
                >
                  Get Toolkit
                </Button>
                <Link href="#whats-inside">
                  <Button
                    variant="outline"
                    className="group relative border-green-500/30 text-green-300 hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-green-500/5 hover:border-green-400/50 transition-all duration-300"
                  >
                    <PlayCircle className="h-5 w-5 mr-2" /> See What's Inside
                  </Button>
                </Link>
              </div>

              <div className={`flex justify-center items-center mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-flex items-center gap-2 bg-zinc-900/60 backdrop-blur-xl text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-400/30 shadow-lg shadow-amber-500/20" aria-label="Rated 4.5 out of 5 by over 650 brands">
                  <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
                  <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
                  <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
                  <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
                  <StarHalf className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
                  <span className="ml-1 text-amber-200">4.5/5 from 650+ brands</span>
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                </div>
              </div>

              <div className={`relative mx-auto max-w-5xl h-56 sm:h-80 lg:h-96 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/story/story-cover.webp"
                  alt="Meta Ads Starter Kit Mockup"
                  fill
                  className="rounded-3xl shadow-2xl object-cover relative z-10 border border-green-500/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Trusted by Leading Brands
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses that have transformed their Meta Ads performance with our proven strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                "/brand-logos/logo001.svg",
                "/brand-logos/logo002.svg", 
                "/brand-logos/logo003.svg",
                "/brand-logos/logo004.svg",
                "/brand-logos/logo005.svg",
                "/brand-logos/logo006.svg"
              ].map((logo, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-16 md:h-20 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      width={80}
                      height={80}
                      className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Star className="h-4 w-4 text-green-400 fill-current" />
                <span>500+ successful campaigns</span>
                <span className="text-gray-500">•</span>
                <span>₹23 Cr+ monthly revenue generated</span>
                <span className="text-gray-500">•</span>
                <span>98.2% client satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="relative py-20">
          {/* Background Gradient Lines - Diagonal Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  Tired of Wasting Money on Ads?
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                      <ShieldCheck className="h-5 w-5 text-green-400" />
                    </div>
                    <p>Agencies charge <span className="text-green-300 font-semibold">₹30,000 to ₹1,50,000</span> monthly.</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                      <Target className="h-5 w-5 text-green-400" />
                    </div>
                    <p>Most small businesses burn money due to wrong targeting.</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                      <Wallet className="h-5 w-5 text-green-400" />
                    </div>
                    <p>Budgets are limited, mistakes are costly.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 group rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
                <Image
                  src="/conversion loss ss.svg"
                  alt="Wasted ad spend graph"
                  fill
                  className="shadow-2xl object-cover z-10"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-green-500/30 group-hover:ring-green-400/50 z-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="relative py-20">
          {/* Background Gradient Lines - Corner Accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-green-500/25 to-transparent"></div>
            <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-green-500/25 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-green-500/25 to-transparent"></div>
            <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-px h-32 bg-gradient-to-b from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-b from-green-500/25 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Introducing The Meta Ads Starter Kit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn exactly how to structure campaigns, pick audiences, write ads, and scale profitably in <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-2 py-0.5 rounded">24h</span> without hiring an agency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: "PDF Guide", desc: "A clear, step-by-step playbook for launch to scale." },
                { icon: Target, title: "Targeting Lists", desc: "Ready-to-use audience stacks for Indian markets." },
                { icon: PencilLine, title: "Templates", desc: "High-converting creative and copy recipes." }
              ].map((item, index) => (
                <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                      <item.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                onClick={handleOpenCheckout}
                className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Buy Now – Start Running Ads Today
              </Button>
            </div>
          </div>
        </section>

        {/* Proof / Case Studies */}
        <section id="results" className="relative py-20">
          {/* Background Gradient Lines - Hexagonal Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-green-500/20 to-transparent"></div>
            <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-green-500/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Backed by Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ₹23 Crore+/Month generated for clients across D2C, local services, education, and more.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              {[
                { value: "₹23 Cr+", label: "Revenue Attributed Per Month" },
                { value: "650+", label: "Brands Scaled" },
                { value: "100 Cr+", label: "Ad Spend Managed" },
                { value: "15+ Years", label: "Meta Ads Expertise" },
                { value: "200000+", label: "Leads Generated" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "/google ss.svg",
                "/orders 50 ss.svg",
                "/sales ss.svg",
              ].map((src, index) => (
                <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="relative h-60">
                      <Image src={src} alt={`Campaign proof ${index + 1}`} fill className="rounded-xl object-cover border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section id="whats-inside" className="relative py-20">
          {/* Background Gradient Lines - Diamond Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
            <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">What's Inside</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">A modern, minimal, plug-and-play toolkit built for Indian small businesses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {toolkitItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                        <IconComponent className="h-7 w-7 text-black" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="relative py-20">
          {/* Background Gradient Lines - Wave Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/18 to-transparent"></div>
            <div className="absolute top-2/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-4/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/18 to-transparent"></div>
            <div className="absolute top-5/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real businesses using our Meta Ads strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Amit Patel",
                  role: "D2C Founder",
                  image: "/testimonials/amit-patel.png",
                  quote: "Our ROAS improved from 2.1x to 8.7x in just 3 months. The targeting strategies in this toolkit are gold!",
                  results: "8.7x ROAS"
                },
                {
                  name: "Priya Sharma",
                  role: "Local Business Owner",
                  image: "/testimonials/priya-sharma.png",
                  quote: "Finally, a guide that speaks our language. Saved us ₹50,000+ in agency fees and got better results.",
                  results: "₹50K+ Saved"
                },
                {
                  name: "Rahul Kumar",
                  role: "E-commerce Manager",
                  image: "/testimonials/rajesh-kumar.png",
                  quote: "The creative templates alone increased our CTR by 40%. This toolkit is worth 10x the price.",
                  results: "40% CTR Increase"
                },
                {
                  name: "Deepika Joshi",
                  role: "Marketing Consultant",
                  image: "/testimonials/deepika-joshi.png",
                  quote: "I've used this for 5 different client campaigns. Each one saw significant improvement in performance.",
                  results: "5 Successful Campaigns"
                },
                {
                  name: "Vikram Singh",
                  role: "Startup Founder",
                  image: "/testimonials/vikram-singh.png",
                  quote: "From zero Meta Ads knowledge to running profitable campaigns in 2 weeks. The step-by-step approach is perfect.",
                  results: "2 Weeks to Profit"
                },
                {
                  name: "Kavya Nair",
                  role: "Digital Marketer",
                  image: "/testimonials/kavya-nair.png",
                  quote: "The retargeting strategies helped us recover 60% of abandoned cart revenue. Game changer!",
                  results: "60% Cart Recovery"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-300 mb-4 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-400/20 px-3 py-1.5 rounded-full border border-green-500/30">
                      <Sparkles className="h-4 w-4 text-green-400" />
                      <span className="text-green-300 text-sm font-medium">{testimonial.results}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Users className="h-4 w-4 text-green-400" />
                <span>Join 500+ businesses already using our strategies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="relative py-20 bg-black">
          {/* Background Gradient Lines - Behind content */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white">
                  Why This Works
                </h2>
                <div className="space-y-6">
                  {[
                    "Easy to follow, even for beginners.",
                    "Built by agency experts.",
                    "Affordable vs. hiring a marketing agency.",
                    "Instant download — start today.",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="relative flex-shrink-0">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:shadow-green-400/70 transition-all duration-300">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        {/* Soft neon glow effect */}
                        <div className="absolute inset-0 w-6 h-6 bg-green-400/30 rounded-full blur-md group-hover:bg-green-300/40 transition-all duration-300"></div>
                      </div>
                      <span className="text-white font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Chart Card */}
              <div className="relative group">
                <div className="relative bg-white rounded-xl p-6 shadow-xl shadow-green-500/20 hover:shadow-green-400/30 transition-all duration-500 transform hover:scale-105">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Chart content */}
                  <div className="relative z-10">
                    <div className="h-80 w-full rounded-lg overflow-hidden">
                      <Image 
                        src="/9cr academy ss.svg" 
                        alt="Performance Chart" 
                        width={400} 
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 to-green-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Pricing Section */}
        <section id="pricing" className="relative py-20">
          {/* Background Gradient Lines - Star Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-green-500/15 to-transparent"></div>
            <div className="absolute top-3/4 right-0 w-1/4 h-px bg-gradient-to-r from-green-500/15 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Get Instant Access</h2>
              
              {/* Top Badge - Social Proof */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 shadow-lg shadow-green-500/20 mb-6">
                <span className="text-lg">🔥</span>
                <span>Already 500+ people have bought this kit!</span>
              </div>
              
              {/* Pricing Display */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-2xl text-gray-400 line-through">₹4,999</div>
                <div className="text-3xl text-white font-semibold">₹499</div>
                <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">90% OFF</div>
              </div>
              
              {/* Guarantee */}
              <p className="text-lg text-gray-300 mb-8">
                If you don't see results in 30 days, we'll give you a{" "}
                <span className="text-green-300 font-semibold">free strategy call</span>.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">What you get</h3>
                      <ul className="space-y-3">
                        {[
                          "Ship ads with confidence in 48–72 hrs",
                          "Know your numbers in minutes : calculate break-even ROAS/CPA, target ROAS, allowable CAC, and payback so you never overspend again",
                          "Launch correctly the first time : pixel + CAPI + domain verification + AEM with pre-launch QA checklists",
                          "Copy-paste audiences for India : plug-and-play interest stacks across healthcare, real estate, finance, SaaS, restaurants, auto, travel, AI tools, language prep, sustainability, crypto education, and more",
                          "Make better creatives, faster : proven hook formulas + a simple production & testing checklist",
                          "Manage like a pro : \"Kill-Keep-Scale\" rules, ABO→CBO scaling, and retargeting best practices",
                          "Scale safely : weekly budget rules and 3 sample scaling roadmaps (eCom, coaching, local)",
                          "Plus: swipe file, templates, and lifetime updates/community"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300 group/item">
                            <div className="p-1 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-full border border-green-500/30 group-hover/item:border-green-400/50 transition-all duration-300 flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-3 w-3 text-green-400" />
                            </div>
                            <span className="group-hover/item:text-white transition-colors duration-300 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                        <div className="text-gray-400 mb-2">Offer & Pricing</div>
                        <ul className="text-sm text-gray-300 space-y-1 mb-4 text-left">
                          <li className="flex items-center justify-between"><span>Calculator suite (5 tools)</span><span className="text-gray-400">₹7,500</span></li>
                          <li className="flex items-center justify-between"><span>Targeting library (15+ niches)</span><span className="text-gray-400">₹5,000</span></li>
                          <li className="flex items-center justify-between"><span>Retargeting & budget blueprints</span><span className="text-gray-400">₹4,000</span></li>
                          <li className="flex items-center justify-between"><span>Checklists/templates & creative briefs</span><span className="text-gray-400">₹4,000</span></li>
                          <li className="flex items-center justify-between"><span>Lifetime updates & community</span><span className="text-gray-400">₹3,500</span></li>
                        </ul>
                        <div className="text-sm text-gray-300 mb-2"><span className="text-gray-400">Total value ~</span><span className="text-white font-semibold">₹24,000</span><span className="text-gray-400"> → Today </span><span className="text-green-300 font-semibold">₹499</span></div>
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <div className="text-lg text-gray-400 line-through">₹4,999</div>
                          <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text">₹499</div>
                        </div>
                        <div className="text-gray-400 mb-6">Instant download. Lifetime access.</div>
                        <Button
                          onClick={handleOpenCheckout}
                          className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 w-full text-black font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                          Get Instant Access
                        </Button>
                        
                        {/* Urgency + Social Proof Note */}
                        <div className="mt-4 p-3 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg border border-green-500/20">
                          <div className="text-xs text-green-300 font-medium mb-1">⚡ Limited Time Offer</div>
                          <div className="text-xs text-gray-400">Join 500+ successful businesses who've already transformed their ads!</div>
                        </div>
                        
                        <div className="text-xs text-gray-500 mt-3">Secure checkout with Razorpay. Stripe/PayPal on request.</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-20">
          {/* Background Gradient Lines - Circuit Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-green-500/25 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-green-500/25 to-transparent"></div>
            <div className="absolute top-1/3 left-0 w-px h-1/3 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-1/3 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Ajsal Abbas</span>: The Marketer Who Turns <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Clicks into Crores</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Ajsal Abbas is the founder of Frameleads Agency, trusted by <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">1,000+ people</span> and <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">650+ brands</span> worldwide. He has generated <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">2,00,000+ leads</span>, managed <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">₹100+ crores</span> in ad revenue, and taken a brand from scratch all the way to <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">Shark Tank India</span>. With clients across <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">12+ countries</span> and multiple businesses under his belt, Ajsal blends creativity with performance. And while <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">1,000+ people</span> trust him with their marketing, his family still just calls him “the guy who runs Facebook ads.”
                </p>
              </div>
              <div className="relative h-80 group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image src="/fm academy dp.svg" alt="Frameleads Team" fill className="rounded-3xl shadow-2xl object-cover relative z-10 border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-20">
          {/* Background Gradient Lines - Grid Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/15 to-transparent"></div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to know before you start.</p>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Cleaner Card Design */}
        <section className="relative py-16">
          {/* Background Gradient Lines - Cross Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Card className="bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border-green-500/30 hover:border-green-400/50 transition-all duration-500 p-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Ready to Run Profitable Ads?</h2>
                <p className="text-lg text-gray-300 mb-8">Get the toolkit today and stop wasting money.</p>
                <Button
                  onClick={handleOpenCheckout}
                  className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  Buy Now & Download Instantly
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Custom Footer */}
        <footer className="relative bg-black border-t border-green-500/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Glowing Line Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-8 shadow-lg shadow-green-500/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Links */}
              <div className="text-center md:text-left">
                <h3 className="text-green-400 font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/academy/about" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">About</Link>
                  <Link href="/academy/contact" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Contact</Link>
                  <Link href="/academy/return-policy" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Return Policy</Link>
                  <Link href="/academy/terms" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Terms & Privacy</Link>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="text-center md:text-left">
                <h3 className="text-green-400 font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p>+91 6362821368</p>
                  <p>ajsal@frameleads.com</p>
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="text-center md:text-right">
                <h3 className="text-green-400 font-semibold mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-end space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 group"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* Bottom Line */}
            <div className="text-center pt-8 border-t border-green-500/10">
              <p className="text-gray-400 text-sm">© 2024 Frameleads Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Checkout Drawer */}
        <CheckoutDrawer
          isOpen={isCheckoutOpen}
          onClose={handleCloseCheckout}
          productName="Frameleads Academy – Meta Ads Playbook"
          productPrice="₹499"
          productDescription="Complete toolkit to run profitable Meta Ads campaigns"
        />
      </div>
    </>
  )
}


