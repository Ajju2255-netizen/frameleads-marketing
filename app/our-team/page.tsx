import Image from "next/image"
import Link from "next/link"
import FloatingNotifications from "../components/floating-notifications"
import Testimonials from "../components/testimonials"
import { Users, Target, Award, TrendingUp, ShieldCheck, Globe2, Trophy, BarChart3, Handshake, Star, Briefcase, MapPin } from "lucide-react"

export const metadata = {
  title: "Our Team | Frameleads Digital Marketing Agency",
  description: "Meet the talented team behind Frameleads. Expert digital marketers, SEO specialists, content creators, and growth strategists driving your success.",
}

export default function OurTeamPage() {
  const leadership = [
    { 
      name: "Ajsal Abbas", 
      position: "Founder & CEO", 
      image: "/team/ajsal-abbas.png", 
      bio: "15+ years in digital marketing leading growth programs across SEO, PPC and CRO. Passionate about building sustainable growth engines for ambitious brands.",
      expertise: ["Strategic Planning", "Growth Marketing", "Team Leadership"],
      location: "Bangalore, India"
    },
    { 
      name: "Priya Patel", 
      position: "Head of SEO", 
      image: "/team/priya-patel.png", 
      bio: "Technical and local SEO specialist focused on sustainable visibility. Expert in technical audits, content optimization, and local search strategies.",
      expertise: ["Technical SEO", "Local SEO", "Content Strategy"],
      location: "Mumbai, India"
    },
    { 
      name: "Amit Kumar", 
      position: "Content Strategy Lead", 
      image: "/team/amit-kumar.png", 
      bio: "Owns full-funnel content that ranks and converts across industries. Specializes in content marketing, copywriting, and brand storytelling.",
      expertise: ["Content Marketing", "Copywriting", "Brand Strategy"],
      location: "Delhi, India"
    },
    { 
      name: "Sneha Reddy", 
      position: "Digital Marketing Manager", 
      image: "/team/sneha-reddy.png", 
      bio: "Paid media strategist for Google, Meta, and LinkedIn ecosystems. Expert in campaign optimization and performance marketing.",
      expertise: ["PPC Management", "Social Media", "Performance Marketing"],
      location: "Hyderabad, India"
    },
  ]

  const departments = [
    {
      name: "SEO & Content",
      description: "Technical SEO experts and content creators driving organic growth",
      teamSize: "8 specialists",
      icon: Target
    },
    {
      name: "Paid Media",
      description: "PPC and social media advertising specialists maximizing ROI",
      teamSize: "6 specialists", 
      icon: TrendingUp
    },
    {
      name: "Strategy & Analytics",
      description: "Data-driven strategists and analysts optimizing performance",
      teamSize: "4 specialists",
      icon: BarChart3
    },
    {
      name: "Client Success",
      description: "Dedicated account managers ensuring client satisfaction",
      teamSize: "5 specialists",
      icon: Users
    }
  ]

  const values = [
    { icon: Target, title: "Results-Driven", description: "Every strategy is measured by its impact on your business growth." },
    { icon: Users, title: "Client-First", description: "Your success is our success. We're invested in your long-term growth." },
    { icon: Award, title: "Excellence", description: "We maintain the highest standards in everything we deliver." },
    { icon: TrendingUp, title: "Innovation", description: "We stay ahead of trends and continuously improve our methods." },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/our-team",
    "logo": "https://frameleads.com/logos/brand-logo.png",
    "sameAs": ["https://linkedin.com/company/frameleads", "https://www.instagram.com/frameleads/"],
    "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91 6362821368", "contactType": "customer service", "areaServed": "Worldwide" }],
    "employee": leadership.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.position,
      "image": `https://frameleads.com${member.image}`
    }))
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
                Meet Our Team • 25+ Digital Marketing Experts
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a passionate team of digital marketing experts, strategists, and creatives who are dedicated to driving your business growth. Get to know the people behind your success.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">Work With Us</span>
              </Link>
              <Link href="/about" className="inline-block">
                <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">About Frameleads</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries and strategists leading Frameleads to new heights.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} width={300} height={300} className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#FF6B35] font-medium mb-3">{member.position}</p>
                <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Specialized teams working together to deliver exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, i) => {
              const Icon = dept.icon
              return (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px] flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-xl mb-3">{dept.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{dept.description}</p>
                  <div className="text-[#FF6B35] font-medium text-sm">{dept.teamSize}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team Values</h2>
            <p className="text-xl text-gray-600">The principles that guide how we work together and serve our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px] flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-xl mb-4">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Work With Our Team?</h2>
            <p className="text-xl text-gray-600">Experience the difference that expertise, dedication, and passion make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">Our team brings decades of combined experience in digital marketing, with proven track records of success across industries.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated Partnership</h3>
              <p className="text-gray-600">We act as an extension of your team, providing dedicated support and strategic guidance throughout your growth journey.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">We stay ahead of industry trends and continuously improve our methods to deliver cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Work With Our Team?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">Let's discuss how our team can help accelerate your business growth with proven digital marketing strategies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">Start Your Project</span>
            </Link>
            <Link href="/about" className="inline-block">
              <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-3 rounded-xl font-semibold transition-all duration-300">Learn More About Us</span>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  )
}
