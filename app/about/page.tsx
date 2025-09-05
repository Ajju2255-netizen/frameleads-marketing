import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
import FloatingNotifications from "../components/floating-notifications"
import Testimonials from "../components/testimonials"
import { Users, Target, Award, TrendingUp, ShieldCheck, Globe2, Trophy, BarChart3, Handshake } from "lucide-react"

export const metadata = {
  title: "About Frameleads | High-Trust Digital Marketing Agency",
  description: "Frameleads is a results-driven digital marketing agency delivering 400% growth through SEO, PPC, Social, and Content. 500+ clients. Global coverage.",
}

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1,000+", label: "Projects Delivered" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "6 Regions", label: "Global Delivery" },
  ]

  const values = [
    { icon: Target, title: "Results First", description: "KPIs and ROI drive every strategy and decision we make." },
    { icon: Users, title: "Client-Obsessed", description: "Proactive communication and ownership as your extended team." },
    { icon: Award, title: "Excellence", description: "High standards from planning to execution and reporting." },
    { icon: TrendingUp, title: "Innovation", description: "AI-enabled workflows and continuous experimentation." },
  ]

  const credibility = [
    { icon: ShieldCheck, title: "Trusted Partner", text: "4.9/5 average rating across 200+ verified reviews." },
    { icon: Trophy, title: "Proven Growth", text: "Average 300–400% traffic growth within 6–12 months." },
    { icon: BarChart3, title: "Transparent KPIs", text: "Weekly scorecards and monthly executive reporting." },
    { icon: Globe2, title: "Global Expertise", text: "North America, Asia, Europe, LATAM, Middle East, South Asia." },
  ]

  const team = [
    { name: "Ajsal Abbas", position: "Founder & CEO", image: "/team/ajsal-abbas.png", bio: "15+ years in digital marketing leading growth programs across SEO, PPC and CRO." },
    { name: "Priya Patel", position: "Head of SEO", image: "/team/priya-patel.png", bio: "Technical and local SEO specialist focused on sustainable visibility." },
    { name: "Amit Kumar", position: "Content Strategy Lead", image: "/team/amit-kumar.png", bio: "Owns full-funnel content that ranks and converts across industries." },
    { name: "Sneha Reddy", position: "Digital Marketing Manager", image: "/team/sneha-reddy.png", bio: "Paid media strategist for Google, Meta, and LinkedIn ecosystems." },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/about",
    "logo": "https://frameleads.com/logos/brand-logo.png",
    "sameAs": ["https://linkedin.com/company/frameleads", "https://www.instagram.com/frameleads/"],
    "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91 6362821368", "contactType": "customer service", "areaServed": "Worldwide" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingNotifications />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 pt-28" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30">
                High-Trust Digital Marketing Agency • 500+ Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">About Frameleads</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We help ambitious brands achieve predictable growth through expert SEO, PPC, Social Media, and Content Marketing. Our promise: measurable impact, transparent reporting, and a partner who acts like your in-house team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300">Schedule Free Consultation</span>
              </Link>
              <Link href="/case-studies" className="inline-block">
                <span className="inline-flex items-center justify-center border border-red-500/40 text-gray-200 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">See Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {credibility.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-slate-800/50 border border-red-500/20 rounded-xl p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-white">
                  <Icon className="h-5 w-5 text-red-400" />
                  <span className="font-semibold">{item.title}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>Founded in 2019, Frameleads began with a single mission: deliver compounding growth through search and performance marketing. Today, we operate globally while retaining a handcrafted, partner-first approach.</p>
              <p>Our frameworks combine technical SEO, world-class content, and full-funnel advertising to create durable advantages. We obsess over KPIs, iterate fast, and share outcomes with complete transparency.</p>
              <p>We believe great marketing is a force-multiplier for great businesses. If you bring ambition, we bring the systems to scale it.</p>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-xl"></div>
            <Image src="/story/story-cover.webp" alt="Frameleads team at work" fill className="object-cover z-10" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/30 z-20"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-1">{s.number}</div>
              <div className="text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">Principles that shape how we work and the outcomes we deliver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-xl">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300">Hands-on leaders who partner with you from strategy to execution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} width={300} height={300} className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-medium mb-3">{member.position}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-gray-300">
            <Handshake className="h-5 w-5 text-red-400" />
            <span>Trusted by growth-focused brands worldwide</span>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA + Internal Links */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Write Your Next Growth Story?</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">Get a free audit and a custom growth plan covering SEO, PPC, Social, and Content Marketing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300">Get Free Audit</span>
            </Link>
            <Link href="/about" className="inline-block">
              <span className="inline-flex items-center justify-center border border-red-500/40 text-gray-200 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">Why Frameleads</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/seo-services" className="text-red-300 hover:text-red-200">SEO Services</Link>
            <Link href="/ppc-management" className="text-red-300 hover:text-red-200">PPC Management</Link>
            <Link href="/Social-media-marketing" className="text-red-300 hover:text-red-200">Social Media Marketing</Link>
            <Link href="/content-marketing" className="text-red-300 hover:text-red-200">Content Marketing</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
