import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users, Award, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export default function ContentMarketingPage() {
  const regions = [
    "North America",
    "Europe",
    "Asia-Pacific",
    "Latin America",
    "Middle East",
    "South Asia",
  ]

  const contentServices = [
    {
      icon: TrendingUp,
      title: "Strategic Content Marketing Consulting",
      description:
        "Strategy development, ROI analysis, and comprehensive content audits to maximize your content investment.",
    },
    {
      icon: Users,
      title: "Content Creation & Development",
      description:
        "Professional blog writing, video production, and multi-format content tailored to your audience and industry.",
    },
    {
      icon: Award,
      title: "Content Marketing Automation",
      description:
        "Advanced tools implementation, automated distribution, and scalable workflows for consistent outcomes.",
    },
    {
      icon: MapPin,
      title: "B2B Content Marketing",
      description:
        "Thought leadership, lead generation content, and sales enablement programs for complex B2B funnels.",
    },
    {
      icon: TrendingUp,
      title: "Content Optimization & SEO",
      description:
        "Technical optimization, SEO integration, and metrics analysis to lift rankings, engagement, and conversions.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Content Marketing Strategy Development",
      description:
        "Consultation, competitor analysis, audience research, and a strategic roadmap aligned to your goals.",
    },
    {
      step: "02",
      title: "Content Creation & Production",
      description:
        "Expert multi-channel content development using best practices across blogs, video, and social.",
    },
    {
      step: "03",
      title: "Content Marketing Implementation",
      description:
        "Strategic distribution, automation setup, and multi-platform campaign execution.",
    },
    {
      step: "04",
      title: "Performance Tracking & Optimization",
      description:
        "Advanced metrics tracking, ROI measurement, and continuous, data-driven optimization.",
    },
  ]

  const caseStudies = [
    {
      industry: "Tech Startup",
      location: "North America",
      result: "400% ROI increase",
      description:
        "Comprehensive B2B content strategy achieved #1 rankings and 400% lead growth within 6 months.",
    },
    {
      industry: "E-commerce Brand",
      location: "Europe",
      result: "300% engagement boost",
      description:
        "Multi-channel campaign with video and social content drove 300% engagement growth.",
    },
    {
      industry: "SaaS Company",
      location: "Asia",
      result: "500% organic traffic growth",
      description:
        "Automation-led operations and targeted optimization delivered 5x organic growth and better KPIs.",
    },
  ]

  const faqData = [
    {
      question: "What makes your content marketing services different?",
      answer:
        "We combine strategic consulting with hands-on execution and focus relentlessly on measurable ROI, leveraging advanced tools and global best practices.",
    },
    {
      question: "How long does it take to see content marketing results?",
      answer:
        "Initial improvements typically appear within 3–6 months, with significant ROI growth in 6–12 months. Automation and ongoing optimization accelerate outcomes.",
    },
    {
      question: "Do you provide content marketing services for startups?",
      answer:
        "Yes. We offer flexible consulting and implementation packages designed to scale efficiently with growing startups.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Technology, healthcare, finance, e‑commerce, SaaS, manufacturing, professional services, and more. We adapt to industry nuances.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track ROI, engagement, lead generation, rankings, and conversions, using analytics and dashboards for data‑driven decisions.",
    },
    {
      question: "Do you offer B2B content marketing?",
      answer:
        "Absolutely. We build thought leadership, lead nurturing, sales enablement, and ABM-aligned programs to drive pipeline and revenue.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MarketingAgency",
        "name": "Frameleads Content Marketing",
        "description": "Expert content marketing services delivering 400% ROI growth via strategic planning, creation, automation, and optimization.",
        "url": "https://frameleads.com/content-marketing",
        "telephone": "+91 63628 21368",
        "areaServed": [
          "North America",
          "Europe",
          "Asia-Pacific",
          "Latin America",
          "Middle East",
          "South Asia"
        ],
        "services": [
          "Content Marketing Strategy",
          "Content Creation",
          "Content Automation",
          "B2B Content Marketing",
          "Content Optimization & SEO"
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
                🎯 Expert Content Marketing Consultants & Agency
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Expert Content Marketing Services — 400% ROI Growth Guaranteed
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your business with strategic content marketing that drives real results. We help global brands dominate search, build authority, and convert audiences through data‑driven strategy, expert content creation, and comprehensive execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Content Marketing Audit
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>Call: +91 63628 21368</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>500+ successful campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>400% average ROI increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>Global, multi‑industry expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        {/* Background Gradient Lines - Diagonal Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Our Content Marketing Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                As global content marketing consultants, we blend strategic planning with cutting‑edge tools to deliver measurable ROI. We outperform competitors with expert creation, optimization, and automation across channels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "5+ years delivering results globally",
                  "500+ successful campaigns across industries",
                  "B2B and enterprise content expertise",
                  "Automation and advanced tooling",
                  "Video, social, and multi‑channel mastery",
                  "Metrics tracking and ROI optimization",
                  "International market experience",
                  "Best practices with ongoing optimization",
                ].map((point, index) => (
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
                alt="Content marketing analytics dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/30 group-hover:ring-red-400/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Content Marketing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategy, creation, automation, and optimization to maximize performance and ROI across channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven Content Marketing Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach from strategy to optimization ensures sustained ROI and scalable growth.
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

      {/* Global Expertise */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Global Content Marketing Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Regional expertise and localized strategies for high performance worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl rounded-lg p-4 text-center border border-red-500/20 hover:border-red-400/40 transition-colors duration-300"
              >
                <span className="text-white font-medium">{region}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Don't see your region listed? We serve clients worldwide!</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                Talk to a Content Strategist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Content Marketing Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Real business impact through strategic execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">{study.result}</div>
                    <h3 className="text-xl font-semibold text-white">{study.industry}</h3>
                    <p className="text-gray-400 text-sm">{study.location}</p>
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
              Frequently Asked Questions About Content Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions and learn how we deliver ROI‑focused growth.
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
        title="Ready to Transform Your Business with Expert Content Marketing?"
        description="Join 500+ businesses worldwide that trust our services to drive growth, improve ROI, and dominate their markets through strategic content marketing. Free consultation within 48 hours."
        primaryButtonText="Get Free Content Marketing Audit"
        secondaryButtonText="Schedule Content Strategy Consultation"
      />

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Content marketing works best when integrated with other digital marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
              </div>
            </div>

            {/* Location Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Services</h3>
              <div className="space-y-3">
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/seo-company-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Dubai</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/performance-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing Bangalore</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
              </div>
            </div>

            {/* Company & Resources */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company & Resources</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
                <Link href="/academy/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About Academy</Link>
                <Link href="/academy/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Academy Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}
