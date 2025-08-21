'use client'

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  Star,
  Sparkles,
  Download,
} from "lucide-react"

export default function AcademyAboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const loadRazorpayScript = async (): Promise<boolean> => {
    if (typeof window === "undefined") return false
    if (document.getElementById("razorpay-sdk")) return true
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.id = "razorpay-sdk"
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handleBuyNow = useCallback(async () => {
    const loaded = await loadRazorpayScript()
    if (!loaded) {
      window.location.href = "/contact"
      return
    }
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_1234567890"
    const options = {
      key,
      amount: 1499 * 100,
      currency: "INR",
      name: "Frameleads Academy",
      description: "Meta Ads Starter Kit",
      image: "/logos/brand-logo.png",
      handler: function () {
        window.location.href = "/thank-you?product=meta-ads-starter-kit"
      },
      prefill: {
        email: "you@example.com",
        contact: "+91 99999 99999",
      },
      theme: { color: "#00ff00" },
      notes: { product: "Meta Ads Starter Kit" },
    }
    // @ts-ignore
    const rzp = new window.Razorpay(options)
    rzp.open()
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-green-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Top Bar (simple) */}
      <nav className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <span className="text-lg font-semibold text-green-400">Frameleads Academy</span>
          <Link href="/academy">
            <Button className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300">
              Back to Academy
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero / Intro */}
      <section className="relative py-20">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl text-green-300 px-6 py-3 rounded-full text-sm font-medium border border-green-500/30 shadow-lg shadow-green-500/20">
                About Frameleads Academy
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Ajsal Abbas</span>: The Marketer Who Turns <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Clicks into Crores</span>
            </h1>

            <p className={`text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ajsal Abbas is the founder of Frameleads Agency, trusted by <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">1,000+ people</span> and <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">650+ brands</span> worldwide. He has generated <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">2,00,000+ leads</span>, managed <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">₹100+ crores</span> in ad revenue, and taken a brand from scratch all the way to <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">Shark Tank India</span>. With clients across <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">12+ countries</span> and multiple businesses under his belt, Ajsal blends creativity with performance. And while <span className="text-white font-semibold bg-gradient-to-r from-green-400/30 to-green-300/30 px-1.5 py-0.5 rounded">1,000+ people</span> trust him with their marketing, his family still just calls him “the guy who runs Facebook ads.”
            </p>

            <div className={`inline-flex items-center gap-2 text-gray-400 text-sm mb-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Star className="h-4 w-4 text-green-400 fill-current" />
              <span>500+ successful campaigns</span>
              <span className="text-gray-600">•</span>
              <span>₹23 Cr+ monthly revenue generated</span>
              <span className="text-gray-600">•</span>
              <span>98.2% client satisfaction</span>
            </div>

            <div className={`relative mx-auto max-w-5xl h-56 sm:h-80 lg:h-96 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-3xl blur-xl"></div>
              <Image
                src="/fm academy dp.svg"
                alt="Frameleads Academy"
                fill
                className="rounded-3xl shadow-2xl object-cover relative z-10 border border-green-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Why It Works */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Why This Works</h2>
              <div className="space-y-6">
                {["Easy to follow, even for beginners.", "Built by agency experts.", "Affordable vs. hiring a marketing agency.", "Instant download — start today."].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="relative flex-shrink-0">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:shadow-green-400/70 transition-all duration-300">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute inset-0 w-6 h-6 bg-green-400/30 rounded-full blur-md group-hover:bg-green-300/40 transition-all duration-300"></div>
                    </div>
                    <span className="text-white font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="relative bg-white rounded-xl p-6 shadow-xl shadow-green-500/20 hover:shadow-green-400/30 transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="h-80 w-full rounded-lg overflow-hidden">
                    <Image src="/9cr academy ss.svg" alt="Performance Chart" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 to-green-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Stats */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Backed by Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">₹23 Crore+/Month generated for clients across D2C, local services, education, and more.</p>
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
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
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

      {/* CTA */}
      <section className="relative py-16">
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
              <Button onClick={handleBuyNow} className="group relative bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <span className="relative z-10">Buy Now & Download Instantly</span>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer-lite */}
      <footer className="relative border-t border-green-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6 shadow-lg shadow-green-500/50"></div>
          <div className="text-center text-gray-500 text-sm">© 2024 Frameleads Academy. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}


