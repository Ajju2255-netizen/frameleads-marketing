import Link from "next/link"

export default function ServicesSteps() {
  const processSteps = [
    {
      step_number: "01",
      title: "Market Research & Competitor Analysis",
      description:
        "We begin every campaign with comprehensive market research and competitor analysis to identify opportunities and develop winning strategies. Our team analyzes your industry landscape, target audience behavior, and competitor weaknesses to create data-driven marketing plans.",
    },
    {
      step_number: "02",
      title: "Strategic Planning & Goal Setting",
      description:
        "Based on research insights, we develop customized digital marketing strategies aligned with your business objectives. We set clear KPIs and create detailed roadmaps for achieving measurable growth across all marketing channels.",
    },
    {
      step_number: "03",
      title: "Campaign Implementation & Optimization",
      description:
        "Our experts implement multi-channel campaigns using the latest marketing technologies and best practices. We continuously monitor performance and optimize campaigns in real-time to maximize ROI and achieve your growth targets.",
    },
    {
      step_number: "04",
      title: "Performance Tracking & Scaling",
      description:
        "We provide detailed performance reports and strategic recommendations for scaling successful campaigns. Our transparent reporting shows exactly how your marketing investment translates into business growth and revenue.",
    },
  ]

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Our Proven 4-Step Digital Marketing Process for Maximum ROI
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            At Frameleads, we follow a results-driven digital marketing process that combines deep research, 
            strategic planning, campaign optimization, and performance tracking - helping brands grow faster 
            with smarter digital marketing strategies.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step, index) => (
            <div key={step.step_number} className="text-center group">
              {/* Step Number */}
              <div className="mb-8">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {step.step_number}
                </span>
              </div>

              {/* Step Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (hidden on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-8 h-px bg-gray-700 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <p className="text-gray-400 text-lg">Ready to scale your brand with our proven digital marketing process?</p>
            <Link href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                Start Your Growth Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
