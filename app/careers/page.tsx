import Image from "next/image"
import Link from "next/link"
import FloatingNotifications from "../components/floating-notifications"
import { Users, Target, Award, TrendingUp, ShieldCheck, Globe2, Trophy, BarChart3, Handshake, Star, Briefcase, MapPin, Clock, DollarSign, Heart, Zap, BookOpen, Coffee } from "lucide-react"

export const metadata = {
  title: "Careers | Join Frameleads Digital Marketing Team",
  description: "Join our dynamic team of digital marketing experts. Explore career opportunities at Frameleads and be part of India's leading growth marketing agency.",
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior SEO Specialist",
      department: "SEO & Content",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead technical SEO initiatives and drive organic growth for our clients.",
      requirements: ["Expert knowledge of SEO tools", "Technical SEO expertise", "Content strategy experience"],
      skills: ["Google Analytics", "Ahrefs", "Screaming Frog", "Technical SEO"]
    },
    {
      title: "PPC Manager",
      department: "Paid Media",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Manage and optimize paid advertising campaigns across Google, Meta, and LinkedIn.",
      requirements: ["Google Ads certification", "Meta Ads experience", "Analytics proficiency"],
      skills: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Google Analytics"]
    },
    {
      title: "Content Marketing Specialist",
      department: "SEO & Content",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Create compelling content that drives engagement and conversions.",
      requirements: ["Content creation experience", "SEO knowledge", "Social media expertise"],
      skills: ["Content Writing", "SEO", "Social Media", "Analytics"]
    },
    {
      title: "Digital Marketing Strategist",
      department: "Strategy & Analytics",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Develop comprehensive digital marketing strategies for enterprise clients.",
      requirements: ["Strategic thinking", "Client management", "Data analysis"],
      skills: ["Strategy", "Analytics", "Client Management", "ROI Optimization"]
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses and profit sharing."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs."
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Hybrid work model with flexible hours and work-from-home options."
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities for advancement."
    },
    {
      icon: Globe2,
      title: "Global Exposure",
      description: "Work with international clients and gain global market experience."
    }
  ]

  const culture = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and open communication across all levels."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results and celebrate achievements together."
    },
    {
      icon: Award,
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies and methodologies."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We invest in our people's development and support their career aspirations."
    }
  ]

  const values = [
    { icon: Target, title: "Excellence", description: "We strive for the highest quality in everything we do." },
    { icon: Users, title: "Integrity", description: "We maintain honesty and transparency in all our interactions." },
    { icon: Award, title: "Innovation", description: "We embrace change and continuously improve our methods." },
    { icon: TrendingUp, title: "Growth", description: "We are committed to personal and professional development." },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Digital Marketing Careers at Frameleads",
    "description": "Join our dynamic team of digital marketing experts and grow your career with India's leading growth marketing agency.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Frameleads",
      "url": "https://frameleads.com",
      "logo": "https://frameleads.com/logos/brand-logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    },
    "employmentType": "FULL_TIME",
    "workHours": "40 hours per week"
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

      

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 pt-28" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                Join Our Team • 25+ Open Positions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">Careers at Frameleads</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join India's fastest-growing digital marketing agency and be part of a team that's transforming businesses through innovative growth strategies. Your career growth is our priority.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#open-positions" className="inline-block">
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">View Open Positions</span>
              </Link>
              <Link href="/our-team" className="inline-block">
                <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">Meet Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Join Frameleads?</h2>
            <p className="text-xl text-gray-600">Be part of a company that values your growth and provides opportunities to make a real impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Leadership</h3>
              <p className="text-gray-600">Work with India's leading digital marketing agency and learn from the best in the industry.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Growth</h3>
              <p className="text-gray-600">Be part of our fast-growing team with opportunities for quick career advancement.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600">Work with international clients and make a global impact through your digital marketing expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role and start your journey with us.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, idx) => (
                      <span key={idx} className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">We offer comprehensive benefits to support your personal and professional growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-xl mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600">Experience a workplace that values collaboration, innovation, and personal growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-xl mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">Don't see a position that matches your skills? We're always looking for talented individuals to join our growing team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">Send Your Resume</span>
            </Link>
            <Link href="/our-team" className="inline-block">
              <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-3 rounded-xl font-semibold transition-all duration-300">Meet Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  )
}
