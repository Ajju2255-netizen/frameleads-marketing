import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="inline-block">
            <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
              🚀 #1 Digital Marketing Agency in India
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Premier Digital Marketing Agency Driving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              300% ROI Growth
            </span>{" "}
            for Brands
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your business with data-driven digital marketing strategies that deliver measurable results. 
            As India's leading performance marketing agency, we've helped 500+ brands achieve exponential growth 
            through strategic SEO, targeted PPC campaigns, and conversion-optimized content marketing.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Digital Marketing Audit
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Proven 300% ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>50+ Certified Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Global Reach: India, USA, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
