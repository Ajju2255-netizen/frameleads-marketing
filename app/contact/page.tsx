"use client"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FloatingNotifications from "../components/floating-notifications"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Koramangala, Bangalore", "Karnataka 560034", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 6362821368", "+91 6362821368", "Mon-Fri: 9AM-6PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["ajsal@frameleads.com", "support@frameleads.com", "careers@frameleads.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "Typically, you can expect to see initial improvements in 3-6 months, with significant results in 6-12 months. SEO is a long-term strategy that builds momentum over time.",
    },
    {
      question: "Do you work with businesses outside Bangalore?",
      answer:
        "Yes! While we're based in Bangalore, we work with clients across India and internationally. We provide remote SEO services and digital marketing support worldwide.",
    },
    {
      question: "What's included in your SEO audit?",
      answer:
        "Our comprehensive SEO audit includes technical analysis, keyword research, competitor analysis, content review, backlink profile assessment, and actionable recommendations.",
    },
    {
      question: "Do you provide monthly reports?",
      answer:
        "We provide detailed monthly reports showing your rankings, traffic growth, conversions, and the work completed. Transparency is key to our client relationships.",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingNotifications />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30 shadow-lg shadow-red-500/20">
                ✉️ Get in touch
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Contact Frameleads
            </h1>

            <p className={`text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Tell us about your project and growth goals. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                      <input id="firstName" name="firstName" required placeholder="John" className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                      <input id="lastName" name="lastName" required placeholder="Doe" className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input id="email" name="email" type="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input id="phone" name="phone" placeholder="+91 6362821368" className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input id="company" name="company" placeholder="Your Company" className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                    <select id="service" name="service" className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="seo">SEO Services</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="technical-seo">Technical SEO</option>
                      <option value="content-marketing">Content Marketing</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="social-media">Social Media Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Tell us about your project and goals..." className="w-full px-4 py-3 bg-black/40 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"></textarea>
                  </div>

                  <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 w-full text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105 py-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <Send className="h-5 w-5 mr-2 relative z-10" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-r from-red-500 to-red-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-400">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions about our services.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to grow your business? Discover our comprehensive digital marketing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
              <div className="space-y-3">
                <a href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</a>
                <a href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</a>
                <a href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</a>
                <a href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</a>
                <a href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</a>
              </div>
            </div>

            {/* Location Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Services</h3>
              <div className="space-y-3">
                <a href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</a>
                <a href="/seo-company-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Dubai</a>
                <a href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</a>
                <a href="/performance-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing Bangalore</a>
                <a href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</a>
              </div>
            </div>

            {/* Company & Academy */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company & Academy</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</a>
                <a href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</a>
                <a href="/academy/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About Academy</a>
                <a href="/academy/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Academy Contact</a>
                <a href="/academy/terms" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
