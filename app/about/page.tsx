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
    { number: "6+", label: "Regions Global Delivery" },
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
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative pb-48">
      <FloatingNotifications />
      
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlays */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFE4D6]/20 to-[#FFCAB0]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#FFCAB0]/15 to-[#FFE4D6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#FFE4D6]/10 to-[#FFCAB0]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Organic dotted patterns */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF6B35]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#FF8A50]/25 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-[#FF6B35]/30 rounded-full animate-bounce delay-2000"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FFE4D6]/30 rounded-sm rotate-45 animate-spin"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFCAB0]/25 rounded-full animate-pulse"></div>
      </div>

      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 pt-28" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                High-Trust Digital Marketing Agency • 500+ Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">About Frameleads</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We help ambitious brands achieve predictable growth through expert SEO, PPC, Social Media, and Content Marketing. Our promise: measurable impact, transparent reporting, and a partner who acts like your in-house team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">Schedule Free Consultation</span>
              </Link>
              <Link href="/case-studies" className="inline-block">
                <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">See Case Studies</span>
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
              <div key={i} className="bg-white/80 backdrop-blur-xl border border-[#FF6B35]/20 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 text-gray-900">
                  <Icon className="h-5 w-5 text-[#FF6B35]" />
                  <span className="font-semibold">{item.title}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>Founded in 2019, Frameleads began with a single mission: deliver compounding growth through search and performance marketing. Today, we operate globally while retaining a handcrafted, partner-first approach.</p>
              <p>Our frameworks combine technical SEO, world-class content, and full-funnel advertising to create durable advantages. We obsess over KPIs, iterate fast, and share outcomes with complete transparency.</p>
              <p>We believe great marketing is a force-multiplier for great businesses. If you bring ambition, we bring the systems to scale it.</p>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl"></div>
            <Image src="/story/story-cover.webp" alt="Frameleads team at work" fill className="object-cover z-10" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 z-20"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center py-16 px-4 min-h-[180px] flex flex-col justify-center items-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-6 leading-none">{s.number}</div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Principles that shape how we work and the outcomes we deliver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-12 text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[400px] flex flex-col justify-start">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-xl mb-6">{v.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Hands-on leaders who partner with you from strategy to execution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} width={300} height={300} className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#FF6B35] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Handshake className="h-5 w-5 text-[#FF6B35]" />
            <span>Trusted by growth-focused brands worldwide</span>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA + Internal Links */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Write Your Next Growth Story?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">Get a free audit and a custom growth plan covering SEO, PPC, Social, and Content Marketing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">Get Free Audit</span>
            </Link>
            <Link href="/about" className="inline-block">
              <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-3 rounded-xl font-semibold transition-all duration-300">Why Frameleads</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/seo-services" className="text-[#FF6B35] hover:text-[#FF8A50]">SEO Services</Link>
            <Link href="/ppc-management" className="text-[#FF6B35] hover:text-[#FF8A50]">PPC Management</Link>
            <Link href="/Social-media-marketing" className="text-[#FF6B35] hover:text-[#FF8A50]">Social Media Marketing</Link>
            <Link href="/content-marketing" className="text-[#FF6B35] hover:text-[#FF8A50]">Content Marketing</Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Complete Service Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From SEO to social media, we provide comprehensive digital marketing solutions tailored to your business needs
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
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
              </div>
            </div>

            {/* Location-Specific Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Services</h3>
              <div className="space-y-3">
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
              </div>
            </div>

            {/* Academy & Resources */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academy & Resources</h3>
              <div className="space-y-3">
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
                <Link href="/academy/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About Academy</Link>
                <Link href="/academy/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Academy Contact</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy/terms" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
