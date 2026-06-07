'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Star,
  StarHalf,
  PlayCircle,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Zap,
  Brain,
  BarChart3,
  Bot,
  Mail
} from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 pt-24">
      {/* Floating Marketing Channel Elements - Scattered Layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* LinkedIn - Top Left Corner */}
        <motion.div
          className="absolute top-20 left-[12%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Linkedin className="h-6 w-6 text-[#FF6B35]" />
        </motion.div>

        {/* YouTube - Top Right Corner */}
        <motion.div
          className="absolute top-16 right-[15%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <svg className="h-6 w-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </motion.div>

        {/* TikTok - Middle Left */}
        <motion.div
          className="absolute top-[60%] left-[10%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, 12, 0],
            x: [0, -6, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          <svg className="h-6 w-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </motion.div>

        {/* Instagram - Bottom Left */}
        <motion.div
          className="absolute bottom-[25%] left-[18%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Instagram className="h-6 w-6 text-[#FF6B35]" />
        </motion.div>

        {/* Snapchat - Middle Right */}
        <motion.div
          className="absolute top-[65%] right-[12%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, 8, 0],
            x: [0, -5, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <svg className="h-6 w-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
          </svg>
        </motion.div>

        {/* Facebook - Top Right */}
        <motion.div
          className="absolute top-[35%] right-[18%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Facebook className="h-6 w-6 text-[#FF6B35]" />
        </motion.div>

        {/* Twitter - Bottom Right */}
        <motion.div
          className="absolute bottom-[20%] right-[22%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, 12, 0],
            x: [0, -10, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Twitter className="h-6 w-6 text-[#FF6B35]" />
        </motion.div>

        {/* Pinterest - Bottom Left */}
        <motion.div
          className="absolute bottom-[35%] left-[25%] w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#FFE4D6]/30"
          animate={{
            y: [0, -10, 0],
            x: [0, 7, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        >
          <svg className="h-6 w-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
          </svg>
        </motion.div>

        {/* Content AI Badge - Top Left */}
        <motion.div
          className="absolute top-[30%] left-[35%] w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Brain className="h-8 w-8 text-white" />
        </motion.div>

        {/* Automation Badge - Top Right */}
        <motion.div
          className="absolute top-[40%] right-[35%] w-16 h-16 bg-gradient-to-br from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, 18, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Zap className="h-8 w-8 text-white" />
        </motion.div>

        {/* Lead Scoring Badge - Bottom Left */}
        <motion.div
          className="absolute bottom-[45%] left-[40%] w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <BarChart3 className="h-8 w-8 text-white" />
        </motion.div>

        {/* AI Bot Badge - Bottom Right */}
        <motion.div
          className="absolute bottom-[30%] right-[40%] w-16 h-16 bg-gradient-to-br from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, 14, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Bot className="h-8 w-8 text-white" />
        </motion.div>

        {/* Google Ads Badge - Middle Left */}
        <motion.div
          className="absolute top-[50%] left-[30%] w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 7, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Target className="h-7 w-7 text-white" />
        </motion.div>

        {/* Email Marketing Badge - Middle Right */}
        <motion.div
          className="absolute top-[55%] right-[30%] w-14 h-14 bg-gradient-to-br from-[#FF8A50] to-[#FF6B35] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, 11, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          <Mail className="h-7 w-7 text-white" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="text-center">
          {/* Eyebrow */}
          <motion.div
            className="inline-block mb-8 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 backdrop-blur-xl text-[#5A5A5A] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/10 hover:shadow-[#FF6B35]/20 transition-all duration-300 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#5A5A5A]" />
              #1 Digital Marketing Agency in India
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#5A5A5A] leading-[1.4] mb-16 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[#5A5A5A] block mb-6">
              Premier Digital Marketing Agency
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)] block">
              Driving 300% ROI Growth
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-[#5A5A5A]/80 max-w-4xl mx-auto leading-[1.7] mb-12 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Transform your business with data-driven digital marketing strategies that deliver measurable results.
            As India's leading performance marketing agency, we've helped <span className="text-[#5A5A5A] font-semibold bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 px-2 py-1 rounded-md">500+ brands</span> achieve exponential growth
            through strategic SEO, targeted PPC campaigns, and conversion-optimized content marketing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Link href="/contact">
              <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
                <span className="relative z-10">Get Free Digital Marketing Audit</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                className="group relative border-[#FF6B35]/30 text-[#5A5A5A] hover:bg-[#FF6B35]/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-[#FF6B35]/5 hover:border-[#FF6B35]/50 transition-all duration-300"
              >
                <PlayCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex justify-center items-center mb-10 py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <div className="relative inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl text-[#5A5A5A] px-4 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/10 leading-relaxed" aria-label="Rated 4.8 out of 5 by over 500 brands">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0
                }}
              >
                <Star className="h-4 w-4 text-[#FF8A50] drop-shadow-[0_0_6px_rgba(255,138,80,0.6)]" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                <Star className="h-4 w-4 text-[#FF8A50] drop-shadow-[0_0_6px_rgba(255,138,80,0.6)]" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              >
                <Star className="h-4 w-4 text-[#FF8A50] drop-shadow-[0_0_6px_rgba(255,138,80,0.6)]" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              >
                <Star className="h-4 w-4 text-[#FF8A50] drop-shadow-[0_0_6px_rgba(255,138,80,0.6)]" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              >
                <StarHalf className="h-4 w-4 text-[#FF8A50] drop-shadow-[0_0_6px_rgba(255,138,80,0.6)]" />
              </motion.div>
              <span className="ml-1 text-[#5A5A5A]/80 py-1">4.8/5 from 500+ brands</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#5A5A5A]/70 mb-10 py-2 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          >
            <motion.div
              className="flex items-center gap-2 py-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full"></div>
              <span className="py-1">Proven 300% ROI</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 py-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] rounded-full"></div>
              <span className="py-1">50+ Certified Specialists</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 py-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full"></div>
              <span className="py-1">Global Reach: India, USA, UAE</span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative mx-auto max-w-5xl h-56 sm:h-80 lg:h-96"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/story/story-cover.webp"
              alt="Digital Marketing Agency Services"
              fill
              className="rounded-3xl shadow-2xl object-cover relative z-10 border border-[#FF6B35]/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
