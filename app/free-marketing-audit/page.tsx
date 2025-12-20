"use client"

import { useState } from "react"
import FloatingNotifications from "../components/floating-notifications"
import Link from "next/link"
import Image from "next/image"
import { 
  Search, 
  DollarSign, 
  Share2, 
  Palette, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  TrendingUp, 
  Target, 
  Users, 
  Award, 
  Zap, 
  Eye, 
  FileText, 
  ChevronDown, 
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  ArrowDown,
  Sparkles
} from "lucide-react"

export default function FreeMarketingAuditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const auditIncludes = [
    {
      icon: Search,
      title: "SEO Analysis",
      description: "Complete website SEO audit including technical issues, content optimization, and ranking opportunities"
    },
    {
      icon: DollarSign,
      title: "PPC Performance",
      description: "Review of Google Ads, Facebook Ads, and other paid campaigns for optimization opportunities"
    },
    {
      icon: Share2,
      title: "Social Media Audit",
      description: "Analysis of social media presence, engagement rates, and content performance across platforms"
    },
    {
      icon: Palette,
      title: "Brand Analysis",
      description: "Evaluation of brand consistency, messaging, and visual identity across all touchpoints"
    },
    {
      icon: BarChart3,
      title: "Competitor Analysis",
      description: "Comprehensive competitive landscape analysis and market positioning opportunities"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Review of landing pages, user experience, and conversion funnel optimization opportunities"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Submit Your Details",
      description: "Fill out our quick form with your business information and marketing goals",
      icon: FileText
    },
    {
      step: "02", 
      title: "Comprehensive Analysis",
      description: "Our experts analyze your digital presence across all channels and platforms",
      icon: Search
    },
    {
      step: "03",
      title: "Detailed Report",
      description: "Receive a comprehensive audit report with actionable insights and recommendations",
      icon: Download
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified digital marketing professionals with 5+ years of experience"
    },
    {
      icon: Shield,
      title: "Confidential & Secure",
      description: "Your data is protected with enterprise-grade security measures"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Receive your audit report within 48 hours of submission"
    },
    {
      icon: Star,
      title: "No Obligation",
      description: "Completely free with no strings attached or hidden costs"
    }
  ]

  const faqs = [
    {
      question: "How long does the audit take?",
      answer: "We typically complete your comprehensive marketing audit within 48 hours of receiving your information. You'll receive a detailed report via email with all findings and recommendations."
    },
    {
      question: "What information do I need to provide?",
      answer: "Just your basic business information including website URL, company name, and contact details. We'll handle all the technical analysis and research on our end."
    },
    {
      question: "Is this really free with no hidden costs?",
      answer: "Yes, absolutely! Our marketing audit is completely free with no hidden fees, no credit card required, and no obligation to purchase our services afterward."
    },
    {
      question: "What if I don't like the recommendations?",
      answer: "No problem at all! The audit is provided as a free resource to help you understand your digital marketing opportunities. There's no obligation to implement our suggestions or work with us."
    },
    {
      question: "Can I get a follow-up consultation?",
      answer: "Absolutely! If you'd like to discuss the audit findings in detail or learn more about our services, we offer free consultation calls to help you understand the recommendations better."
    },
    {
      question: "Do you audit all types of businesses?",
      answer: "Yes! We audit businesses across all industries and sizes, from startups to enterprise companies. Our audit process is tailored to your specific business type and market."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FF6B35]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#FF8A50]/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#FF6B35]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-[#FF8A50]/15 rounded-full animate-spin"></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-[#FF6B35]/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-[#FF8A50]/10 rounded-full animate-pulse"></div>
      </div>

      
      <FloatingNotifications />

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#FF6B35]/20">
                🎯 Free Marketing Audit
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Your
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] bg-clip-text text-transparent"> Growth Opportunities</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get a comprehensive analysis of your digital marketing performance across SEO, PPC, social media, and branding. 
                <span className="font-semibold text-gray-900"> Completely free with actionable insights.</span>
              </p>
              
              {/* CTA Form */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Audit</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="url"
                      name="website"
                      placeholder="Website URL"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get My Free Audit
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-3xl p-8">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Sample Audit Preview</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">SEO Score</span>
                      <span className="text-2xl font-bold text-green-600">87/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">PPC Performance</span>
                      <span className="text-2xl font-bold text-blue-600">Good</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Social Media</span>
                      <span className="text-2xl font-bold text-purple-600">Needs Work</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Brand Consistency</span>
                      <span className="text-2xl font-bold text-orange-600">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}