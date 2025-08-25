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
        <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-red-500/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-red-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">4-Step Process</span> for Maximum ROI
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
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
              <Card key={step.step_number} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  {/* Step Number */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-white opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {step.step_number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Step Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-red-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <p className="text-gray-400 text-lg">Ready to scale your brand with our proven digital marketing process?</p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                Start Your Growth Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
