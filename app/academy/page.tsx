'use client'

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"

export default function AcademyPage() {
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
      question: "Will this work if I’ve never run ads before?",
      answer:
        "Yes. The toolkit is beginner-friendly with checklists, examples, and a step-by-step launch plan.",
    },
    {
      question: "Do I need a high budget?",
      answer:
        "No. It’s designed for small budgets (₹5k–₹20k/mo). You’ll learn exactly how to allocate it smartly.",
    },
    {
      question: "Can I use this for any business?",
      answer:
        "Works best for small businesses, D2C brands, local services, coaches, and freelancers in India.",
    },
    {
      question: "How do I access the product after purchase?",
      answer:
        "You’ll get instant access with a download link and a copy via email. Keep it handy for future use.",
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
        brand: {
          "@type": "Brand",
          name: "Frameleads Academy",
        },
        offers: {
          "@type": "Offer",
          price: "1499",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://frameleads.com/academy",
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
      theme: { color: "#f97316" },
      notes: { product: "Meta Ads Starter Kit" },
    }
    // @ts-ignore
    const rzp = new window.Razorpay(options)
    rzp.open()
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gray-900 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block mb-6">
                <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
                  🎯 Learn Meta Ads the Smart Way
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Run Meta Ads Like an Agency —
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  {" "}Without Paying Agency Fees
                </span>
                .
              </h1>

              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
                We’ve managed ads generating <span className="text-white font-semibold">₹9 Cr+</span> in revenue. Now, access the same strategies in an affordable, plug-and-play digital toolkit designed for small businesses, D2C brands, and solopreneurs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  onClick={handleBuyNow}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="h-5 w-5 mr-2" /> Get the Toolkit Now
                </Button>
                <Link href="#whats-inside">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg"
                  >
                    <PlayCircle className="h-5 w-5 mr-2" /> See What’s Inside
                  </Button>
                </Link>
              </div>

              <div className="relative mx-auto max-w-5xl h-56 sm:h-80 lg:h-96">
                <Image
                  src="/story/story-cover.webp"
                  alt="Meta Ads Starter Kit Mockup"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Tired of Wasting Money on Ads?
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-orange-500 mt-1" />
                    <p>Agencies charge <span className="text-white font-semibold">₹30,000+</span> monthly.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-orange-500 mt-1" />
                    <p>Most small businesses burn money due to wrong targeting.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wallet className="h-5 w-5 text-orange-500 mt-1" />
                    <p>Budgets are limited, mistakes are costly.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80">
                <Image
                  src="/story/story-5.jpg"
                  alt="Wasted ad spend graph"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Introducing The Meta Ads Starter Kit
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Learn exactly how to structure campaigns, pick audiences, write ads, and scale profitably — without hiring an agency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">PDF Guide</h3>
                  <p className="text-gray-400">A clear, step-by-step playbook for launch to scale.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Targeting Lists</h3>
                  <p className="text-gray-400">Ready-to-use audience stacks for Indian markets.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PencilLine className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Templates</h3>
                  <p className="text-gray-400">High-converting creative and copy recipes.</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button onClick={handleBuyNow} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold">
                Buy Now – Start Running Ads Today
              </Button>
            </div>
          </div>
        </section>

        {/* Proof / Case Studies */}
        <section className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Backed by Proven Results</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ₹9 Crore+ generated for clients across D2C, local services, and education.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">₹9 Cr+</div>
                <div className="text-gray-400 text-sm">Revenue Attributed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">400%</div>
                <div className="text-gray-400 text-sm">Average ROAS Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Successful Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5+ Years</div>
                <div className="text-gray-400 text-sm">Meta Ads Expertise</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                "/story/story-2.png",
                "/story/story-3.png",
                "/story/story-4.png",
              ].map((src, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardContent className="p-4">
                    <div className="relative h-60">
                      <Image src={src} alt={`Campaign proof ${index + 1}`} fill className="rounded-xl object-cover" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section id="whats-inside" className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What’s Inside</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">A modern, minimal, plug-and-play toolkit built for Indian small businesses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {toolkitItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="bg-orange-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-7 w-7 text-white" />
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

        {/* Why This Works */}
        <section className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why This Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Easy to follow, even for beginners.",
                    "Built by agency experts.",
                    "Affordable vs. hiring a marketing agency.",
                    "Instant download — start today.",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80">
                <Image src="/feature-2.jpg" alt="Why this works" fill className="rounded-2xl shadow-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Get Instant Access</h2>
              <p className="text-xl text-gray-400">Meta Ads Starter Kit – <span className="text-white font-semibold">₹1,499</span></p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">What you get</h3>
                      <ul className="space-y-2">
                        {[
                          "Complete PDF guide (launch to scale)",
                          "Targeting lists for Indian audiences",
                          "Creative & copy templates",
                          "Step-by-step budget plan",
                          "Bonus: Retargeting guide",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
                        <div className="text-gray-400 mb-2">Limited-time price</div>
                        <div className="text-5xl font-bold text-white mb-2">₹1,499</div>
                        <div className="text-gray-400 mb-6">Instant download. Lifetime access.</div>
                        <Button onClick={handleBuyNow} className="bg-orange-600 hover:bg-orange-700 w-full text-white font-semibold">
                          <Download className="h-5 w-5 mr-2" /> Get Instant Access
                        </Button>
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
        <section className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Created by Frameleads – Performance Marketing Experts
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We’ve helped startups and D2C brands scale profitably with data-driven Meta Ads. After working with 500+ clients and generating ₹9 Cr+ in attributable revenue, we’ve distilled our systems into a simple toolkit for small businesses.
                </p>
                <p className="text-gray-400">
                  Built for founders who value clarity, control, and results — without the agency price tag.
                </p>
              </div>
              <div className="relative h-80">
                <Image src="/team/ajsal-abbas.png" alt="Frameleads Team" fill className="rounded-2xl shadow-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-900 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Everything you need to know before you start.</p>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Run Profitable Ads?</h2>
            <p className="text-lg text-gray-400 mb-8">Get the toolkit today and stop wasting money.</p>
            <Button onClick={handleBuyNow} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              Buy Now & Download Instantly
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}


