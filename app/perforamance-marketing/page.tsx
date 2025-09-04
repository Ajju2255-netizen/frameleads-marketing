import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export const metadata = {
  title: "Performance Marketing Agency - Drive ROI & Growth",
  description:
    "Expert performance marketing services delivering measurable results. ROI-focused campaigns, data-driven strategies, and proven growth for your business.",
}

export default function PerformanceMarketingPage() {
  const performanceBenefits = [
    "Pay only for results — no wasted spend on impressions",
    "Real-time performance tracking and insights",
    "Scalable growth by doubling down on winning campaigns",
    "Transparent ROI with clear attribution",
  ]

  const channels = [
    {
      title: "Paid Search Marketing (PPC)",
      points: [
        "Google Ads optimization for conversion",
        "Bing Ads with ROI focus",
        "Advanced keyword and bid strategies",
        "Landing page CRO",
      ],
    },
    {
      title: "Social Media Performance Marketing",
      points: [
        "Facebook and Instagram optimization",
        "LinkedIn B2B performance campaigns",
        "TikTok and YouTube strategies",
        "Cross-platform retargeting",
      ],
    },
    {
      title: "Affiliate Marketing Programs",
      points: [
        "Partner network development",
        "Commission model optimization",
        "Performance tracking and attribution",
        "Affiliate recruitment and enablement",
      ],
    },
    {
      title: "Email Marketing Performance",
      points: [
        "Automated conversion-focused journeys",
        "Advanced segmentation",
        "A/B testing and experimentation",
        "Lifecycle marketing automation",
      ],
    },
    {
      title: "Programmatic Advertising",
      points: [
        "Real-time bidding optimization",
        "Audience targeting and lookalikes",
        "Cross-device attribution",
        "Dynamic creative optimization",
      ],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Performance Audit & Analysis",
      description:
        "Comprehensive audit of current digital performance, competitor insights, and identification of high-ROI opportunities across channels.",
    },
    {
      step: "02",
      title: "Data-Driven Strategy Development",
      description:
        "Custom performance marketing strategy aligned to your goals and KPIs, with clear channel, audience, and budget plans.",
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description:
        "Launch multi-channel campaigns with continuous A/B testing, conversion optimization, and real-time performance tracking.",
    },
    {
      step: "04",
      title: "Analytics, Attribution & Reporting",
      description:
        "Advanced attribution modeling and transparent ROI reporting with actionable insights for ongoing improvement.",
    },
  ]

  const industries = [
    {
      title: "E-commerce Performance Marketing",
      points: [
        "Shopping campaign optimization",
        "Product feed management",
        "CAC reduction and LTV growth",
        "Cart abandonment recovery",
      ],
    },
    {
      title: "B2B Performance Marketing",
      points: [
        "Lead generation optimization",
        "Account-based marketing (ABM)",
        "Funnel performance tracking",
        "MQL quality and volume improvement",
      ],
    },
    {
      title: "SaaS Performance Marketing",
      points: [
        "Trial-to-paid conversion uplift",
        "Subscription model growth",
        "Onboarding and retention",
        "Churn reduction and activation",
      ],
    },
    {
      title: "Local Business Performance Marketing",
      points: [
        "Google Business Profile optimization",
        "Local search advertising",
        "Geo-targeted campaigns",
        "Store visit tracking",
      ],
    },
  ]

  const platforms = [
    "Google Ads & GA4",
    "Facebook Business Manager",
    "Microsoft Advertising",
    "LinkedIn Campaign Manager",
    "Amazon Advertising",
  ]

  const attribution = [
    "GA4 Enhanced Measurement",
    "Adobe Analytics",
    "HubSpot",
    "Salesforce Marketing Cloud",
    "Custom UTM and server-side tracking",
  ]

  const caseStudies = [
    {
      industry: "SaaS Company",
      result: "65% lower CPA, 180% higher trial-to-paid",
      description:
        "Multi-channel strategy across Google, LinkedIn, and email automation delivered cost-efficient acquisition and conversion uplift.",
    },
    {
      industry: "E-commerce Brand",
      result: "250% revenue growth, 40% ROAS improvement",
      description:
        "Google Shopping, Facebook, and affiliates scaled profitable growth and lifted customer lifetime value.",
    },
    {
      industry: "B2B Enterprise",
      result: "200% more qualified leads, 50% lower CPL",
      description:
        "ABM-led performance marketing via LinkedIn and Google Ads improved lead quality and conversion rates.",
    },
  ]

  const faqData = [
    {
      question: "What is performance marketing and how does it differ?",
      answer:
        "Performance marketing is a results-focused approach where you pay only when specific actions occur (clicks, leads, sales), unlike traditional marketing that charges for impressions or reach.",
    },
    {
      question: "What are the key performance marketing metrics?",
      answer:
        "Core metrics include CPA, ROAS, CTR, conversion rate, and customer lifetime value (CLV).",
    },
    {
      question: "How fast can we see results?",
      answer:
        "Initial results typically appear within 2–4 weeks, with significant optimization gains after 60–90 days of continuous testing and iteration.",
    },
    {
      question: "Which industries benefit most?",
      answer:
        "E-commerce, SaaS, B2B, fintech, healthcare, professional services, and education see outstanding ROI from performance marketing.",
    },
    {
      question: "How do you ensure transparent ROI reporting?",
      answer:
        "We provide real-time dashboards, monthly reports, and full-funnel attribution for complete clarity across channels.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MarketingAgency",
        "name": "Frameleads Performance Marketing",
        "description": "Expert performance marketing services delivering measurable ROI through data-driven campaigns",
        "url": "https://frameleads.com/performance-marketing",
        "telephone": "+91 6362821368",
        "serviceArea": ["India", "United Arab Emirates", "United States", "United Kingdom"],
        "services": [
          "Performance Marketing",
          "PPC Management",
          "Social Media Advertising",
          "Affiliate Marketing",
          "Conversion Optimization"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }

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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32">
        {/* Background Gradient Lines - Hero Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30">
                🎯 Results-Driven Performance Marketing Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Performance Marketing Agency — Maximize ROI with Data-Driven Campaigns
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your growth with performance marketing solutions that deliver measurable results. Our data-driven approach ensures every marketing dollar drives real ROI through strategic, performance-based campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Performance Marketing Audit
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>Call: +91 6362821368</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>500+ successful performance campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>5+ years of ROI optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>Average 300% conversion lift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Performance Marketing */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                What is Performance Marketing? Your Path to Measurable Growth
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Performance marketing is a data-driven approach where you pay only for completed actions — clicks, leads, sales, or other conversions. Unlike traditional advertising, performance-based marketing focuses on measurable outcomes and accountable ROI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {performanceBenefits.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/placeholder.jpg"
                alt="Performance marketing analytics dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/30 group-hover:ring-red-400/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services + Channels */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Performance Marketing Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build comprehensive, data-driven strategies across channels, combining advanced analytics, strategic targeting, and continuous optimization to maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((ch, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">{ch.title}</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {ch.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Performance Marketing Process — Proven Results Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to planning, launching, optimizing, and measuring performance ensures sustained ROI and scalable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((proc, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {proc.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{proc.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{proc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Performance Marketing Solutions by Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored strategies that reflect your funnel, audience, and business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">{ind.title}</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {ind.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Technology */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Performance Platforms & Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced tools for campaign execution, analytics, and attribution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Performance Marketing Tools</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {platforms.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">Attribution & Analytics Platforms</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {attribution.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Performance Marketing Case Studies — Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Real business impact through data-driven execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">{study.result}</div>
                    <h3 className="text-xl font-semibold text-white">{study.industry}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions About Performance Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions and learn how we deliver transparent, ROI-focused growth.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Maximize Your Marketing ROI?"
        description="Partner with our performance marketing agency to transform your growth through data-driven, results-focused campaigns. Free performance audit within 48 hours."
        primaryButtonText="Get Free Performance Audit"
        secondaryButtonText="Schedule Strategy Consultation"
      />

      <Footer />
    </div>
    </>
  )
}
