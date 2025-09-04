import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, TrendingUp, Target, Rocket, LineChart } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export const metadata = {
  title: "PPC Management Services | Google Ads & Paid Media Agency",
  description:
    "Best PPC management agency for Google Ads, Amazon, and social. Affordable PPC services, ROI-focused optimization, and expert campaign management.",
}

export default function PPCManagementPage() {
  const primaryKeywords = [
    "PPC management",
    "PPC management services",
    "pay per click management",
    "PPC optimization",
    "PPC agency",
  ]

  const servicePillars = [
    {
      icon: TrendingUp,
      title: "ROI‑Focused PPC Management",
      description:
        "Full‑funnel campaign strategy, tight budget control, and ongoing A/B testing to maximize conversions at the lowest CPA.",
    },
    {
      icon: Target,
      title: "PPC Optimization",
      description:
        "Continuous query mining, negative keywords, bid strategies, and creative testing to compound performance week over week.",
    },
    {
      icon: Rocket,
      title: "Platform Expertise",
      description:
        "Google Ads, Microsoft Ads, Amazon PPC, and paid social—built for scale with audience and feed best practices.",
    },
    {
      icon: LineChart,
      title: "Advanced Tracking & Reporting",
      description:
        "Server‑side tracking, GA4, and dashboards that tie spend to revenue so you see exactly what’s working.",
    },
  ]

  const faqData = [
    {
      q: "What is PPC management?",
      a: "PPC management is the end‑to‑end setup, optimization, and scaling of paid media campaigns (e.g., Google Ads) to achieve business goals such as leads, sales, or ROAS.",
    },
    {
      q: "How much does PPC management cost?",
      a: "Pricing depends on ad spend and complexity. Most engagements use a flat fee or percent‑of‑spend model with clear performance milestones.",
    },
    {
      q: "Which platforms do you manage?",
      a: "Google Ads, Microsoft Ads (Bing), Amazon PPC, Meta, LinkedIn, and TikTok. We prioritize channels that match your audience and goals.",
    },
    {
      q: "Do you work with e‑commerce and B2B?",
      a: "Yes. We have dedicated playbooks for E‑commerce PPC (Shopping, Performance Max) and B2B lead gen (Search, LinkedIn, remarketing).",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "PPC Management Services",
        "description":
          "Professional PPC management and optimization services across Google Ads, Microsoft Ads, Amazon PPC, and paid social.",
        "areaServed": ["USA", "UAE", "India", "Europe", "APAC"],
        "provider": {
          "@type": "Organization",
          "name": "Frameleads",
          "url": "https://frameleads.com/ppc-management",
          "telephone": "+91 63628 21368",
        },
        "serviceType": [
          "PPC Management",
          "Google Ads Management",
          "Amazon PPC Management",
          "PPC Optimization",
          "Paid Social Advertising",
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-black relative overflow-hidden">
        <FloatingNotifications />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <Navbar />

        {/* Hero */}
        <section className="relative py-20 lg:py-32 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block mb-6 bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30">
              Best PPC Management Agency • Affordable PPC Services • ROI Focused
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              PPC Management Services That Scale Profitable Growth
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              Win high‑intent traffic with expert pay per click management, advanced tracking,
              and relentless optimization. From Google Ads to Amazon PPC, we build and scale
              campaigns that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Get a Free PPC Audit
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>Call: +91 63628 21368</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /><span>Top 3 for competitive PPC terms (target)</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /><span>400% average ROI increase</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /><span>E‑commerce & B2B specialists</span></div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our PPC Management Services?</h2>
                <p className="text-lg text-gray-300 mb-6">
                  80% of our keyword targets carry commercial or transactional intent. We prioritize
                  the queries that generate pipeline: "ppc management", "ppc optimization",
                  "best ppc management", and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Tier‑1 keyword focus with low difficulty, high volume",
                    "Budget efficiency with real‑time bid and query controls",
                    "AI‑assisted testing across ads, audiences, and assets",
                    "Tracking that connects spend to revenue (GA4 + server‑side)",
                    "Continuous negative keyword and placement controls",
                    "Cross‑channel remarketing and lifecycle automation",
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 group rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
                <Image src="/feature-1.jpg" alt="PPC dashboard" fill className="object-cover z-10" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/30 group-hover:ring-red-400/50 z-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PPC Management Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Implement first: PPC management, PPC management services, best PPC management, affordable PPC services, and PPC optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePillars.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm text-center mt-6">
              Also available: Google Ads management, PPC campaign management, Amazon PPC management, E‑commerce PPC management.
            </p>
          </div>
        </section>

        {/* Featured Answers for Snippets */}
        <section className="relative py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "What is PPC management?",
                  a:
                    "PPC management is the process of planning, launching, and optimizing paid ads to maximize qualified traffic, conversions, and ROAS while controlling costs.",
                },
                {
                  q: "How much does PPC management cost?",
                  a:
                    "Costs vary by spend and complexity. Typical models include a flat monthly fee or a percentage of ad spend, paired with clear goals and reporting.",
                },
                {
                  q: "What does a PPC manager do?",
                  a:
                    "They handle keyword research, targeting, bidding, ad copy and creative testing, landing page alignment, and ongoing optimization and reporting.",
                },
                {
                  q: "PPC management vs in‑house?",
                  a:
                    "Agencies provide specialized expertise, cross‑account learnings, and faster testing velocity—often delivering better ROAS at lower opportunity cost.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-gray-300">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="relative py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300 mb-6">
              Explore related services and pages to learn more about our approach.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/perforamance-marketing", label: "Performance Marketing" },
                { href: "/content-marketing", label: "Content Marketing" },
                { href: "/seo-company-in-bangalore", label: "SEO Company in Bangalore" },
                { href: "/performance-marketing-company-in-bangalore", label: "Performance Marketing in Bangalore" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-red-300 hover:text-red-200 border border-red-500/30 rounded-full px-4 py-2">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <ContactCTA
          title="Ready to scale with expert PPC management?"
          description="Join 500+ businesses that trust our PPC services for consistent, profitable growth. Get a free audit in 48 hours."
          primaryButtonText="Get Free PPC Audit"
          secondaryButtonText="Talk to a PPC Strategist"
        />

        <Footer />
      </div>
    </>
  )
}


