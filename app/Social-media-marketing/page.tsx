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
  title: "Social Media Marketing Agency | Drive ROI with Expert SMM Services",
  description:
    "Leading social media marketing agency delivering measurable results. Expert social media management, advertising & strategy services. Get your free audit today!",
}

export default function PerformanceMarketingPage() {
  const coreBenefits = [
    "Increased brand awareness across key platforms",
    "Lead generation through conversion-focused funnels",
    "Customer engagement and community building",
    "Revenue growth via targeted campaigns and offers",
  ]

  const channels = [
    {
      title: "Social Media Strategy Development",
      points: [
        "Platform-specific content strategies",
        "Audience research and persona development",
        "Competitive analysis and positioning",
        "Content calendar and posting optimization",
      ],
    },
    {
      title: "Social Media Management Services",
      points: [
        "Daily content creation and publishing",
        "Community management and engagement",
        "Brand voice development and consistency",
        "Real-time monitoring and response",
      ],
    },
    {
      title: "Social Media Advertising",
      points: [
        "Facebook and Instagram targeted ads",
        "LinkedIn B2B advertising campaigns",
        "YouTube video advertising",
        "TikTok and emerging platform ads",
      ],
    },
    {
      title: "Influencer Marketing",
      points: [
        "Influencer identification and outreach",
        "Campaign strategy and execution",
        "Performance tracking and ROI analysis",
        "Long-term partnership development",
      ],
    },
    {
      title: "Social Analytics & Reporting",
      points: [
        "Performance dashboards and KPIs",
        "ROI tracking and attribution",
        "Audience insights and behavior",
        "Monthly optimization roadmaps",
      ],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Social Media Audit & Strategy",
      description:
        "Complete analysis of your current presence, competitor benchmarking, and custom strategy aligned to business goals.",
    },
    {
      step: "02",
      title: "Content Creation & Management",
      description:
        "Strategic content development with consistent brand messaging, engaging visuals, and optimized posting schedules.",
    },
    {
      step: "03",
      title: "Paid Social Advertising",
      description:
        "Targeted ad campaigns to maximize reach, engagement, and conversions with efficient CPC and strong ROAS.",
    },
    {
      step: "04",
      title: "Analytics & Optimization",
      description:
        "Continuous monitoring, performance analysis, and refinement to ensure maximum ROI from social channels.",
    },
  ]

  const industries = [
    {
      title: "E-commerce Social Media Marketing",
      points: [
        "Product showcase campaigns",
        "Shopping ads and conversion optimization",
        "UGC strategies and testimonials",
        "Seasonal and flash sale promotions",
      ],
    },
    {
      title: "B2B Social Media Marketing",
      points: [
        "LinkedIn lead generation",
        "Thought leadership and community",
        "Webinar promotion",
        "Account-based social campaigns",
      ],
    },
    {
      title: "SaaS Social Media Marketing",
      points: [
        "Feature announcements and demos",
        "Customer success amplification",
        "Free trial conversion optimization",
        "Technical content and developer engagement",
      ],
    },
    {
      title: "Local Business Social Media Marketing",
      points: [
        "Geotargeted ads for local customers",
        "Google Business Profile and local SEO",
        "Community event promotion",
        "Location-based content and engagement",
      ],
    },
  ]

  const platforms = [
    "Hootsuite, Buffer, Sprout Social",
    "Meta Business Suite and LinkedIn Campaign Manager",
    "Canva, Adobe Creative Suite",
    "Video editing and production tools",
  ]

  const attribution = [
    "Google Analytics 4 and platform insights",
    "Facebook/Instagram analytics",
    "Custom UTM tracking",
    "Cross-platform ROI attribution",
  ]

  const caseStudies = [
    {
      industry: "E-commerce Brand",
      result: "300% revenue increase",
      description:
        "Influencer partnerships, UGC campaigns, and targeted ads delivered 300% revenue growth and 250% follower increase in 6 months.",
    },
    {
      industry: "B2B SaaS Company",
      result: "400% lead generation",
      description:
        "LinkedIn thought leadership and targeted ads generated 400% more qualified leads and cut CPL by 60%.",
    },
    {
      industry: "Local Restaurant Chain",
      result: "200% foot traffic",
      description:
        "Geotargeted ads, community engagement, and rich creative increased foot traffic by 200% across locations.",
    },
  ]

  const faqData = [
    {
      question: "What is a social media marketing agency?",
      answer:
        "A specialized partner that grows your brand, engagement, and sales through strategic campaigns across platforms like Facebook, Instagram, LinkedIn, and TikTok.",
    },
    {
      question: "How much does a social media marketing agency cost?",
      answer:
        "Typical retainers range $1,500–$10,000+ per month depending on scope, platforms, and ad spend. We customize packages for all sizes.",
    },
    {
      question: "What services are included?",
      answer:
        "Strategy, content creation, social management, paid advertising, influencer campaigns, community management, analytics, and reporting.",
    },
    {
      question: "How long until we see results?",
      answer:
        "Most brands see engagement lift in 2–4 weeks, with significant growth in followers, leads, and sales within 90 days of consistent work.",
    },
    {
      question: "Which platforms should we use?",
      answer:
        "It depends on your audience and goals. Facebook/Instagram fit most, LinkedIn for B2B, TikTok for younger demographics.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MarketingAgency",
        "name": "FrameLeads Social Media Marketing Agency",
        "description": "Professional social media marketing agency providing comprehensive SMM services including strategy, management, advertising, and analytics.",
        "serviceType": ["Social Media Marketing", "Social Media Management", "Social Media Advertising", "SMM Consulting"],
        "areaServed": ["North America", "Europe", "Asia", "Latin America", "Middle East", "South Asia"],
        "url": "https://frameleads.com/social-media-marketing"
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
                🚀 Expert Social Media Marketing Agency
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Social Media Marketing Agency — Drive Growth with Data-Driven SMM Strategies
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your brand's social presence into a powerful revenue engine. Our expert social media marketing services deliver measurable ROI through strategic content creation, targeted advertising, and comprehensive social media management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Social Media Marketing Audit
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
                <span>500+ successful social campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>95% client retention rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>Certified social media experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>Results within 30 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Social Media Marketing */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                What is Social Media Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Social media marketing is the strategic use of platforms to connect with your audience, build brand awareness, and drive business growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreBenefits.map((point, index) => (
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
