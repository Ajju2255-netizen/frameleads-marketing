"use client"

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
      details: ["Electronic City, Bangalore", "Karnataka 560100", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 6362821368", "Mon-Fri: 9AM-6PM"],
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
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden pb-48">
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

      

      {/* Hero */}
      <section className="relative py-20 lg:py-32 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                ✉️ Get in touch
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Contact Frameleads
            </h1>

            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Tell us about your project and growth goals. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8 relative z-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form action="https://formspree.io/f/xgvpgwyb" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                    <textarea id="message" name="message" rows={5} placeholder="Your Message" required className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"></textarea>
                  </div>

                  <input type="hidden" name="_subject" value="New Message from Frameleads Website" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <Button type="submit" className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] w-full text-white font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 py-4">
                    <Send className="h-5 w-5 mr-2 relative z-10" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/25">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our services.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
                <a href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</a>
                <a href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</a>
                <a href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</a>
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

      
    </div>
  )
}
