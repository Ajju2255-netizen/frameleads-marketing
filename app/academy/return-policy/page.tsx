'use client'

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingNotifications from "@/app/components/floating-notifications"
import {
  CheckCircle,
  ShieldCheck,
  Mail,
  Download,
  ArrowLeft,
  Star,
  FileText,
  Target,
  PencilLine,
  Wallet,
  RefreshCw,
} from "lucide-react"

export default function ReturnPolicyPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const productFeatures = [
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Return Policy - Meta Ads Starter Kit",
    "description": "Digital product return policy for the Meta Ads Starter Kit. No returns accepted for digital products. Contact support for any queries.",
    "url": "https://frameleads.com/academy/return-policy",
    "mainEntity": {
      "@type": "Offer",
      "name": "Meta Ads Starter Kit",
      "offeredBy": {
        "@type": "Organization",
        "name": "Frameleads Academy"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/ReturnShippingFees"
      }
    }
  }

  const handleBuyNow = useCallback(async () => {
    window.location.href = "/academy"
  }, [])

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
                <Link href="/academy" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors duration-300">
                  Frameleads Academy
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/academy#results" className="text-white hover:text-green-400 transition-colors duration-300">
                  Results
                </Link>
                <Link href="/academy#whats-inside" className="text-white hover:text-green-400 transition-colors duration-300">
                  What's Inside
                </Link>
                <Link href="/academy#faq" className="text-white hover:text-green-400 transition-colors duration-300">
                  FAQ
                </Link>
                <Link href="/academy#pricing" className="text-white hover:text-green-400 transition-colors duration-300">
                  Pricing
                </Link>
                <Button
                  onClick={handleBuyNow}
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
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link href="/academy" className="inline-flex items-center gap-2 text-green-300 hover:text-green-400 transition-colors duration-300">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Academy
                </Link>
              </div>

              <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl text-green-300 px-6 py-3 rounded-full text-sm font-medium border border-green-500/30 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300">
                  📋 Return Policy
                </span>
              </div>

              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-white">
                Our Return Policy
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                For Digital Products
                </span>
              </h1>

              <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                The Meta Ads Starter Kit is a <span className="text-green-300 font-semibold">digital product</span> that provides instant access to proven strategies and templates. Due to the nature of digital products, we have a <span className="text-green-300 font-semibold">no-return policy</span>.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button
                  onClick={handleBuyNow}
                  className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="h-5 w-5 mr-2 relative z-10" /> Get the Toolkit Now
                </Button>
                <Link href="#contact-support">
                  <Button
                    variant="outline"
                    className="group relative border-green-500/30 text-green-300 hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-green-500/5 hover:border-green-400/50 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 mr-2" /> Contact Support
                  </Button>
                </Link>
              </div>

              <div className={`flex justify-center items-center mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-flex items-center gap-2 bg-zinc-900/60 backdrop-blur-xl text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-400/30 shadow-lg shadow-amber-500/20">
                  <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
                  <span className="text-amber-200">98.2% customer satisfaction rate</span>
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Details */}
        <section className="relative py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Why No Returns for Digital Products?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding our policy helps ensure a fair experience for all customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">✅ What You Get</h3>
                <div className="space-y-4">
                  {productFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="p-2 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">📋 Our Policy</h3>
                <div className="space-y-4">
                  {[
                    "Digital products cannot be 'returned' in the traditional sense",
                    "Once downloaded, content cannot be retrieved or deleted",
                    "All sales are final for digital products",
                    "We provide comprehensive support for any issues"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                        <ShieldCheck className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Policy Explanation */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-green-500/30 hover:border-green-400/50 transition-all duration-500 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Important Information</h3>
                  <p className="text-gray-300">Please read this carefully before making your purchase</p>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl border border-red-500/20">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-red-400">⚠️</span>
                      No Returns Policy
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Due to the digital nature of this product, all sales are final. Once you download the Meta Ads Starter Kit, 
                      we cannot accept returns or provide refunds. This is standard practice for digital products across the industry.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl border border-green-500/20">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-green-400">✅</span>
                      What We Do Provide
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      We offer comprehensive support, detailed documentation, and proven strategies that have helped 500+ businesses 
                      improve their Meta Ads performance. If you have any questions or need assistance, our support team is here to help.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section id="contact-support" className="relative py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-green-500/25 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-green-500/25 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-green-500/25 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Need Help? Contact Our Support Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help with any questions, technical issues, or clarifications you might need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                    <Mail className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                  <p className="text-gray-400 mb-4">Get help with any questions or technical issues</p>
                  <div className="space-y-2">
                    <a href="mailto:ajsal@frameleads.com" className="block text-green-400 hover:text-green-300 transition-colors duration-300">
                      ajsal@frameleads.com
                    </a>
                    <a href="mailto:cloe@frameleads.com" className="block text-green-400 hover:text-green-300 transition-colors duration-300">
                      cloe@frameleads.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                    <ShieldCheck className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">What We Can Help With</h3>
                  <p className="text-gray-400 mb-4">Common support requests we handle</p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Technical access issues</p>
                    <p>• Strategy implementation help</p>
                    <p>• Product feature questions</p>
                    <p>• General guidance & support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Card className="bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border-green-500/30 hover:border-green-400/50 transition-all duration-500 p-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  Ready to Transform Your Meta Ads?
                </h2>
                <p className="text-lg text-gray-300 mb-8">Get the Meta Ads Starter Kit and start implementing proven strategies today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button onClick={handleBuyNow} className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <span className="relative z-10">Get Started Now</span>
                  </Button>
                  <Link href="/academy">
                    <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-green-500/5 hover:border-green-400/50 transition-all duration-300">
                      Back to Academy
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mt-4">Digital product • Instant download • Lifetime access • No returns</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Custom Footer */}
        <footer className="relative bg-black border-t border-green-500/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-8 shadow-lg shadow-green-500/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-green-400 font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/academy/about" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">About</Link>
                  <Link href="/academy/contact" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Contact</Link>
                  <Link href="/academy/return-policy" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Return Policy</Link>
                  <Link href="/academy/terms" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Terms & Privacy</Link>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-green-400 font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p>+91 6362821368</p>
                  <p>ajsal@frameleads.com</p>
                  <p>cloe@frameleads.com</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <h3 className="text-green-400 font-semibold mb-4">Our Policy</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Digital products only</p>
                  <p>No returns accepted</p>
                  <p>24/7 email support</p>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-green-500/10">
              <p className="text-gray-400 text-sm">© 2024 Frameleads Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
