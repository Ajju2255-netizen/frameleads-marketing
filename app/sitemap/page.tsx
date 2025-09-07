'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
import { ArrowRight, ExternalLink, Search, MapPin, Building2, FileText, Users, Globe, Target, Zap, BarChart3, Mail, Phone, Calendar, Award, BookOpen, Calculator, Shield, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, ShoppingBag, BarChart, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink as ExternalLinkIcon, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator as CalcIcon, BookOpen as BookIcon, FileText as FileIcon, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee, Code, Database, Server, Wrench, Cpu, HardDrive, Network, Terminal, GitBranch, ShieldCheck, Zap as ZapIcon } from "lucide-react"

export default function SitemapPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    { name: "Digital Marketing Services", href: "/digital-marketing-services", description: "Comprehensive digital marketing solutions" },
    { name: "SEO Services", href: "/seo-services", description: "Search engine optimization services" },
    { name: "PPC Management", href: "/ppc management", description: "Pay-per-click advertising management" },
    { name: "Content Marketing", href: "/content-marketing", description: "Strategic content creation and marketing" },
    { name: "Social Media Marketing", href: "/Social-media-marketing", description: "Social media strategy and management" },
    { name: "WhatsApp Marketing", href: "/whatsapp-marketing", description: "WhatsApp business marketing solutions" },
    { name: "Analytics and Automation", href: "/analytics-and-automations", description: "Data analytics and marketing automation" },
    { name: "Conversion Rate Optimization", href: "/conversion-rate-optimization", description: "CRO strategies and implementation" },
    { name: "Performance Marketing", href: "/perforamance-marketing", description: "Performance-driven marketing campaigns" },
    { name: "Email Marketing & Automation", href: "/email-marketing-and-automation-services", description: "Email marketing and automation services" },
    { name: "Branding Services", href: "/branding", description: "Brand strategy and design services" },
    { name: "Website Development", href: "/website-development", description: "Custom website development" },
  ]

  const advertisingPlatforms = [
    { name: "Google Ads", href: "/google-ads", description: "Google advertising management" },
    { name: "Meta Ads", href: "/Meta-ads", description: "Facebook and Instagram advertising" },
    { name: "YouTube Ads", href: "/youtube-ads", description: "YouTube advertising campaigns" },
    { name: "LinkedIn Ads", href: "/linkedin-ads", description: "LinkedIn advertising solutions" },
    { name: "TikTok Ads", href: "/tiktok-ads", description: "TikTok advertising management" },
    { name: "Snapchat Ads", href: "/snapchat-ads", description: "Snapchat advertising campaigns" },
    { name: "Pinterest Ads", href: "/pinterest-ads", description: "Pinterest advertising solutions" },
    { name: "Shopify Ads", href: "/shopify-ads", description: "Shopify advertising management" },
    { name: "Baidu Ads", href: "/baidu-ads", description: "Baidu advertising for China market" },
    { name: "Yandex Ads", href: "/yandex-ads", description: "Yandex advertising for Russian market" },
    { name: "Taboola Ads", href: "/taboola-ads", description: "Taboola native advertising" },
  ]

  const locations = [
    { name: "Digital Marketing in India", href: "/digital-marketing-in-india", description: "Digital marketing services in India" },
    { name: "Digital Marketing in Dubai", href: "/digital-marketing-in-dubai", description: "Digital marketing services in Dubai" },
    { name: "Digital Marketing in Singapore", href: "/digital-marketing-in-singapore", description: "Digital marketing services in Singapore" },
    { name: "Digital Marketing in Australia", href: "/digital-marketing-in-australia", description: "Digital marketing services in Australia" },
    { name: "Digital Marketing in Saudi Arabia", href: "/digital-marketing-in-saudi-arabia", description: "Digital marketing services in Saudi Arabia" },
    { name: "Digital Marketing in UAE", href: "/digital-marketing-in-uae", description: "Digital marketing services in UAE" },
    { name: "Digital Marketing in Canada", href: "/digital-marketing-in-canada", description: "Digital marketing services in Canada" },
    { name: "Digital Marketing in China", href: "/digital-marketing-in-china", description: "Digital marketing services in China" },
    { name: "Digital Marketing in Bangalore", href: "/digital-marketing-in-bangalore", description: "Digital marketing services in Bangalore" },
    { name: "Digital Marketing in United States", href: "/digital-marketing-in-unitedstates", description: "Digital marketing services in United States" },
    { name: "Digital Marketing in United Kingdom", href: "/digital-marketing-in-unitedkingdom", description: "Digital marketing services in United Kingdom" },
    { name: "Digital Marketing in Germany", href: "/digital-marketing-in-germany", description: "Digital marketing services in Germany" },
    { name: "Digital Marketing in France", href: "/digital-marketing-in-france", description: "Digital marketing services in France" },
    { name: "Digital Marketing in Brazil", href: "/digital-marketing-in-brazil", description: "Digital marketing services in Brazil" },
  ]

  const company = [
    { name: "About Us", href: "/about", description: "Learn about Frameleads" },
    { name: "Academy", href: "/academy", description: "Digital marketing academy" },
    { name: "Our Team", href: "/our-team", description: "Meet our team" },
    { name: "Careers", href: "/careers", description: "Join our team" },
  ]

  const resources = [
    { name: "Digital Marketing Guide", href: "/resources/digital-marketing-guide", description: "Comprehensive digital marketing guide" },
    { name: "Free Marketing Audit", href: "/free-marketing-audit", description: "Get a free marketing audit" },
    { name: "ROI Calculator", href: "/tools/roi-calculator", description: "Calculate your marketing ROI" },
  ]

  const industries = [
    { name: "B2B Marketing Company in Bangalore", href: "/b2b-marketing-company-in-bangalore", description: "B2B marketing services" },
    { name: "Real Estate Marketing Company in Bangalore", href: "/real-estate-marketing-company-in-bangalore", description: "Real estate marketing services" },
    { name: "SEO Company in Bangalore", href: "/seo-company-in-bangalore", description: "SEO services in Bangalore" },
    { name: "Creative Advertising Company in Bangalore", href: "/creative-advertising-company-in-bangalore", description: "Creative advertising services" },
    { name: "Digital Marketing for Technology and SaaS", href: "/digital-marketing-for-technology-and-saas", description: "Tech and SaaS marketing" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy", description: "Privacy policy and data protection" },
    { name: "Terms of Service", href: "/terms", description: "Terms and conditions" },
    { name: "Cookie Policy", href: "/cookies", description: "Cookie usage policy" },
    { name: "Disclaimer", href: "/disclaimer", description: "Website disclaimer" },
  ]

  const mainPages = [
    { name: "Home", href: "/", description: "Frameleads homepage" },
    { name: "Contact", href: "/contact", description: "Contact us" },
    { name: "Locations", href: "/locations", description: "All locations" },
    { name: "Industries", href: "/industries", description: "Industries we serve" },
  ]

  const academyPages = [
    { name: "Academy Home", href: "/academy", description: "Digital marketing academy" },
    { name: "Academy About", href: "/academy/about", description: "About our academy" },
    { name: "Academy Contact", href: "/academy/contact", description: "Contact academy" },
    { name: "Academy Terms", href: "/academy/terms", description: "Academy terms" },
    { name: "Academy Return Policy", href: "/academy/return-policy", description: "Academy return policy" },
    { name: "Academy Thank You", href: "/academy/thank-you", description: "Thank you page" },
  ]

  const sections = [
    { title: "Main Pages", items: mainPages, icon: Home },
    { title: "Services", items: services, icon: Target },
    { title: "Advertising Platforms", items: advertisingPlatforms, icon: Zap },
    { title: "Locations", items: locations, icon: MapPin },
    { title: "Industries", items: industries, icon: Building2 },
    { title: "Company", items: company, icon: Users },
    { title: "Resources", items: resources, icon: BookOpen },
    { title: "Academy", items: academyPages, icon: GraduationCap },
    { title: "Legal", items: legal, icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Website{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Navigate through all our pages and find exactly what you're looking for. Our comprehensive sitemap helps you discover our services, locations, and resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sections.map((section, sectionIndex) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.title}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#2D2D2D]">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                      >
                        <Link 
                          href={item.href}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-[#FF6B35]/5 transition-all duration-300"
                        >
                          <ArrowRight className="w-4 h-4 text-[#FF6B35]/60 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all duration-300 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-[#2D2D2D] group-hover:text-[#FF6B35] transition-colors duration-300 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-[#5A5A5A]/70 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Website Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our comprehensive digital marketing platform covers all aspects of online growth</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {services.length + advertisingPlatforms.length}
              </div>
              <div className="text-gray-600 text-sm">Services & Platforms</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {locations.length}
              </div>
              <div className="text-gray-600 text-sm">Global Locations</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {industries.length}
              </div>
              <div className="text-gray-600 text-sm">Industries Served</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {sections.reduce((total, section) => total + section.items.length, 0)}
              </div>
              <div className="text-gray-600 text-sm">Total Pages</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
