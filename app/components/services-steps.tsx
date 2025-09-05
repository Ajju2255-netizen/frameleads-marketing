import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Target, Play, BarChart3, ArrowRight } from "lucide-react"

export default function ServicesSteps() {
  const processSteps = [
    {
      step_number: "01",
      icon: Search,
      title: "Market Research & Competitor Analysis",
      description:
        "We begin every campaign with comprehensive market research and competitor analysis to identify opportunities and develop winning strategies. Our team analyzes your industry landscape, target audience behavior, and competitor weaknesses to create data-driven marketing plans.",
    },
    {
      step_number: "02",
      icon: Target,
      title: "Strategic Planning & Goal Setting",
      description:
        "Based on research insights, we develop customized digital marketing strategies aligned with your business objectives. We set clear KPIs and create detailed roadmaps for achieving measurable growth across all marketing channels.",
    },
    {
      step_number: "03",
      icon: Play,
      title: "Campaign Implementation & Optimization",
      description:
        "Our experts implement multi-channel campaigns using the latest marketing technologies and best practices. We continuously monitor performance and optimize campaigns in real-time to maximize ROI and achieve your growth targets.",
    },
    {
      step_number: "04",
      icon: BarChart3,
      title: "Performance Tracking & Scaling",
      description:
        "We provide detailed performance reports and strategic recommendations for scaling successful campaigns. Our transparent reporting shows exactly how your marketing investment translates into business growth and revenue.",
    },
  ]

  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Gradient Lines - Hexagonal Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent"></div>
        <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-[#FF6B35]/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-[#FF6B35]/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5A5A5A] mb-8 leading-tight">
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">4-Step Process</span> for Maximum ROI
          </h2>
          <p className="text-xl md:text-2xl text-[#5A5A5A]/80 max-w-5xl mx-auto leading-relaxed">
            At Frameleads, we follow a results-driven digital marketing process that combines deep research, 
            strategic planning, campaign optimization, and performance tracking - helping brands grow faster 
            with smarter digital marketing strategies.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={step.step_number} className="group relative bg-white/80 backdrop-blur-xl border-[#FFE4D6]/30 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  {/* Step Number */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-[#5A5A5A] opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {step.step_number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#FF6B35]/25 group-hover:shadow-[#FF6B35]/40 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Step Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#5A5A5A] leading-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#5A5A5A]/70 text-sm leading-relaxed group-hover:text-[#5A5A5A]/90 transition-colors duration-300">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <p className="text-[#5A5A5A]/70 text-lg">Ready to scale your brand with our proven digital marketing process?</p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                Start Your Growth Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
