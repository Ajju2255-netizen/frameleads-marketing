'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
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
      
      {/* Real-Time Results Screenshots */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Real-Time Results</h2>
            <p className="text-lg text-gray-600">A snapshot of live dashboards and recent wins</p>
          </div>

          {(() => {
            const screenshots = [
              "/story/story-2.png",
              "/story/story-3.png",
              "/story/story-4.png",
              "/story/story-5.jpg",
              "/google ss.svg",
              "/orders 50 ss.svg",
              "/sales ss.svg",
              "/conversion loss ss.svg",
              "/9cr academy ss.svg",
              "/feature-1.jpg",
              "/feature-2.jpg",
            ]
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {screenshots.slice(0, 11).map((src, idx) => (
                  <div key={src + idx} className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative w-full h-56 sm:h-60">
                      <Image
                        src={src}
                        alt={`Real-time results screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive digital marketing services, industry specializations, and international offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Core Digital Marketing Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Digital Marketing Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Services</Link>
                <Link href="/seo-services" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Services</Link>
                <Link href="/content-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Content Marketing</Link>
                <Link href="/Social-media-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Social Media Marketing</Link>
                <Link href="/perforamance-marketing" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Performance Marketing</Link>
                <Link href="/ppc-management" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC Management</Link>
              </div>
            </div>

            {/* Services in Bangalore */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Services in Bangalore</h3>
              <div className="space-y-3">
                <Link href="/seo-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">SEO Company Bangalore</Link>
                <Link href="/creative-advertising-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Creative Advertising Bangalore</Link>
                <Link href="/digital-marketing-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing Bangalore</Link>
              </div>
            </div>

            {/* Industry Specializations */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Specializations</h3>
              <div className="space-y-3">
                <Link href="/technology-and-saas" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Technology & SaaS</Link>
                <Link href="/healthcare-and-medical" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Healthcare & Medical</Link>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Real Estate Marketing</Link>
                <Link href="/b2b-marketing-company-in-bangalore" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">B2B Marketing</Link>
              </div>
            </div>

            {/* International Services */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">International Services</h3>
              <div className="space-y-3">
                <Link href="/digital-marketing-in-dubai" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Digital Marketing in Dubai</Link>
                <Link href="/about" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">About FrameLeads</Link>
                <Link href="/contact" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">Contact Us</Link>
                <Link href="/academy" className="block text-[#FF6B35] hover:text-[#FF8A50] font-medium">FrameLeads Academy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
