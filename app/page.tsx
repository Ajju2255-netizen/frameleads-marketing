'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import BrandLogos from "./components/brand-logos"
import FeatureCards from "./components/feature-cards"
import ServicesSteps from "./components/services-steps"
import Testimonials from "./components/testimonials"
import CardDecks from "./components/card-decks"
import Footer from "./components/footer"
import FloatingNotifications from "./components/floating-notifications"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      <FloatingNotifications />
      
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlays */}
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFE4D6]/20 to-[#FFCAB0]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#FFCAB0]/15 to-[#FFE4D6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#FFE4D6]/10 to-[#FFCAB0]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />

        {/* Organic dotted patterns */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-[#FF6B35]/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#FF8A50]/25 rounded-full"
          animate={{
            y: [0, 12, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-40 w-1 h-1 bg-[#FF6B35]/30 rounded-full"
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Subtle geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FFE4D6]/30 rounded-sm rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 225, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFCAB0]/25 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Layered transparency effects */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-[#FFE4D6]/8 to-transparent rounded-3xl blur-2xl"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-tl from-[#FFCAB0]/6 to-transparent rounded-2xl blur-2xl"
          animate={{
            scale: [1.05, 1, 1.05],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <BrandLogos />
      <FeatureCards />
      <ServicesSteps />
      <Testimonials />
      <CardDecks />
      
      {/* Internal Links Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive digital marketing solutions designed to grow your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Engine Optimization</h3>
              <p className="text-gray-600 mb-4">Boost your organic visibility with our proven SEO strategies</p>
              <div className="space-y-2">
                <a href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Global SEO Services</a>
                <a href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</a>
                <a href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Dubai</a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Complete digital marketing solutions for modern businesses</p>
              <div className="space-y-2">
                <a href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</a>
                <a href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</a>
                <a href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Marketing</h3>
              <p className="text-gray-600 mb-4">Drive immediate results with targeted advertising campaigns</p>
              <div className="space-y-2">
                <a href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</a>
                <a href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</a>
                <a href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Specializations</h3>
              <p className="text-gray-600 mb-4">Tailored solutions for specific industries and markets</p>
              <div className="space-y-2">
                <a href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing Bangalore</a>
                <a href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</a>
                <a href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising</a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning & Resources</h3>
              <p className="text-gray-600 mb-4">Expand your knowledge with our educational resources</p>
              <div className="space-y-2">
                <a href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</a>
                <a href="/academy/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About Academy</a>
                <a href="/academy/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Academy Contact</a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h3>
              <p className="text-gray-600 mb-4">Learn more about FrameLeads and get in touch</p>
              <div className="space-y-2">
                <a href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</a>
                <a href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</a>
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
