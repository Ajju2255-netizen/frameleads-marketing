import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, StarHalf, PlayCircle, Target, Users, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 pt-32">
      {/* Background Gradient Lines - Hero Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300">
              🚀 #1 Digital Marketing Agency in India
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="text-white">
              Premier Digital Marketing Agency
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              Driving 300% ROI Growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            Transform your business with data-driven digital marketing strategies that deliver measurable results. 
            As India's leading performance marketing agency, we've helped <span className="text-red-300 font-semibold">500+ brands</span> achieve exponential growth 
            through strategic SEO, targeted PPC campaigns, and conversion-optimized content marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
                Get Free Digital Marketing Audit
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                className="group relative border-red-500/30 text-red-300 hover:bg-red-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-red-500/5 hover:border-red-400/50 transition-all duration-300"
              >
                <PlayCircle className="h-5 w-5 mr-2" /> Explore Services
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative inline-flex items-center gap-2 bg-zinc-900/60 backdrop-blur-xl text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-400/30 shadow-lg shadow-amber-500/20" aria-label="Rated 4.8 out of 5 by over 500 brands">
              <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
              <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
              <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
              <Star className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
              <StarHalf className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />
              <span className="ml-1 text-amber-200">4.8/5 from 500+ brands</span>
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Proven 300% ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>50+ Certified Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Global Reach: India, USA, UAE</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl h-56 sm:h-80 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-xl"></div>
            <Image
              src="/story/story-cover.webp"
              alt="Digital Marketing Agency Services"
              fill
              className="rounded-3xl shadow-2xl object-cover relative z-10 border border-red-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
