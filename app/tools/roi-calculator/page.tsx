"use client"

import { useState, useEffect } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import FloatingNotifications from "../../components/floating-notifications"
import Link from "next/link"
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MousePointer, 
  Target, 
  BarChart3, 
  PieChart, 
  ArrowRight, 
  ExternalLink,
  Download,
  RefreshCw,
  Info,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    adSpend: "",
    impressions: "",
    clicks: "",
    leads: "",
    conversionRate: "",
    averageOrderValue: ""
  })

  const [results, setResults] = useState({
    cpc: 0,
    cpl: 0,
    customers: 0,
    revenue: 0,
    cac: 0,
    roi: 0
  })

  const [chartData, setChartData] = useState({
    spendVsRevenue: [],
    roiTrend: [],
    cplTrend: []
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateROI = () => {
    const spend = parseFloat(formData.adSpend) || 0
    const impressions = parseFloat(formData.impressions) || 0
    const clicks = parseFloat(formData.clicks) || 0
    const leads = parseFloat(formData.leads) || 0
    const conversionRate = parseFloat(formData.conversionRate) || 0
    const aov = parseFloat(formData.averageOrderValue) || 0

    if (spend === 0 || clicks === 0 || leads === 0) return

    // Calculations
    const cpc = spend / clicks
    const customers = leads * (conversionRate / 100)
    const revenue = customers * aov
    const cpl = spend / leads
    const cac = customers > 0 ? spend / customers : 0
    const roi = spend > 0 ? ((revenue - spend) / spend) * 100 : 0

    setResults({
      cpc: Math.round(cpc * 100) / 100,
      cpl: Math.round(cpl * 100) / 100,
      customers: Math.round(customers * 100) / 100,
      revenue: Math.round(revenue * 100) / 100,
      cac: Math.round(cac * 100) / 100,
      roi: Math.round(roi * 100) / 100
    })

    // Generate chart data
    generateChartData(spend, revenue, roi, cpl)
  }

  const generateChartData = (spend: number, revenue: number, roi: number, cpl: number) => {
    // Spend vs Revenue chart data
    const spendVsRevenue = [
      { name: 'Ad Spend', value: spend, color: '#FF6B35' },
      { name: 'Revenue', value: revenue, color: '#10B981' }
    ]

    // ROI trend data (simulated over 6 months)
    const roiTrend = [
      { month: 'Jan', roi: Math.max(0, roi - 20) },
      { month: 'Feb', roi: Math.max(0, roi - 10) },
      { month: 'Mar', roi: Math.max(0, roi - 5) },
      { month: 'Apr', roi: Math.max(0, roi) },
      { month: 'May', roi: Math.max(0, roi + 5) },
      { month: 'Jun', roi: Math.max(0, roi + 10) }
    ]

    // CPL trend data (simulated over 6 months)
    const cplTrend = [
      { month: 'Jan', cpl: cpl + 2 },
      { month: 'Feb', cpl: cpl + 1 },
      { month: 'Mar', cpl: cpl + 0.5 },
      { month: 'Apr', cpl: cpl },
      { month: 'May', cpl: Math.max(0, cpl - 0.5) },
      { month: 'Jun', cpl: Math.max(0, cpl - 1) }
    ]

    setChartData({
      spendVsRevenue,
      roiTrend,
      cplTrend
    })
  }

  useEffect(() => {
    calculateROI()
  }, [formData])

  const resetForm = () => {
    setFormData({
      adSpend: "",
      impressions: "",
      clicks: "",
      leads: "",
      conversionRate: "",
      averageOrderValue: ""
    })
    setResults({
      cpc: 0,
      cpl: 0,
      customers: 0,
      revenue: 0,
      cac: 0,
      roi: 0
    })
  }

  const exportResults = () => {
    const data = {
      inputs: formData,
      results: results,
      timestamp: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'roi-calculator-results.json'
    a.click()
    URL.revokeObjectURL(url)
  }

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

      <Navbar />
      <FloatingNotifications />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#FF6B35]/20">
              🧮 ROI Calculator
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Calculate Your
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] bg-clip-text text-transparent"> Marketing ROI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Measure the effectiveness of your digital marketing campaigns with our comprehensive ROI calculator. 
              Get instant insights into your <Link href="/ppc-management" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">PPC performance</Link>, 
              <Link href="/seo-services" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">SEO results</Link>, and{' '}
              <Link href="/Social-media-marketing" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">social media campaigns</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Campaign Inputs</h2>
                <button
                  onClick={resetForm}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#FF6B35] transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reset
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Spend ($)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="adSpend"
                        value={formData.adSpend}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Impressions
                    </label>
                    <div className="relative">
                      <BarChart3 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="impressions"
                        value={formData.impressions}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Clicks
                    </label>
                    <div className="relative">
                      <MousePointer className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="clicks"
                        value={formData.clicks}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Leads Generated
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="leads"
                        value={formData.leads}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Conversion Rate (%)
                    </label>
                    <div className="relative">
                      <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        step="0.1"
                        name="conversionRate"
                        value={formData.conversionRate}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Average Order Value ($)
                    </label>
                    <div className="relative">
                      <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="averageOrderValue"
                        value={formData.averageOrderValue}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </form>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Need help with your campaign data?</p>
                    <p>Get a free <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">marketing audit</Link> to analyze your current performance and optimize your ROI.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">ROI Results</h3>
                  <button
                    onClick={exportResults}
                    className="flex items-center gap-2 text-[#FF6B35] hover:text-[#FF8A50] transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Export
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">${results.cpc}</div>
                    <div className="text-sm font-medium text-gray-700">Cost Per Click</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">${results.cpl}</div>
                    <div className="text-sm font-medium text-gray-700">Cost Per Lead</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{results.customers}</div>
                    <div className="text-sm font-medium text-gray-700">Customers</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-3">${results.revenue.toLocaleString()}</div>
                    <div className="text-sm font-medium text-gray-700 leading-tight">Revenue</div>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">${results.cac}</div>
                    <div className="text-sm font-medium text-gray-700">Customer Acquisition Cost</div>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-lg">
                    <div className={`text-3xl font-bold mb-2 ${results.roi >= 0 ? 'text-indigo-600' : 'text-red-600'}`}>
                      {results.roi}%
                    </div>
                    <div className="text-sm font-medium text-gray-700">ROI</div>
                  </div>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Performance Analysis</h4>
                <div className="space-y-4">
                  {results.roi > 0 ? (
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-800">Positive ROI - Campaign is profitable</span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-red-800">Negative ROI - Campaign needs optimization</span>
                    </div>
                  )}
                  
                  {results.cpc < 2 ? (
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-800">Good CPC - Cost per click is efficient</span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-yellow-800">High CPC - Consider optimizing targeting</span>
                    </div>
                  )}

                  {results.cpl < 50 ? (
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-800">Efficient CPL - Lead cost is reasonable</span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-yellow-800">High CPL - Review lead quality and targeting</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance Visualizations</h2>
            <p className="text-xl text-gray-600">Visual insights into your campaign performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spend vs Revenue Chart */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Spend vs Revenue</h3>
              <div className="h-72 flex items-end justify-center gap-8">
                {chartData.spendVsRevenue.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-20 rounded-t-lg transition-all duration-500 shadow-lg"
                      style={{
                        height: `${Math.max(40, (item.value / Math.max(...chartData.spendVsRevenue.map(d => d.value))) * 240)}px`,
                        backgroundColor: item.color
                      }}
                    ></div>
                    <div className="mt-4 text-center">
                      <div className="text-sm font-semibold text-gray-900 mb-1">{item.name}</div>
                      <div className="text-xs text-gray-600">${item.value.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Trend Chart */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">ROI Trend (6 Months)</h3>
              <div className="h-72 flex items-end justify-between px-4">
                {chartData.roiTrend.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-10 rounded-t-lg transition-all duration-500 shadow-lg"
                      style={{
                        height: `${Math.max(40, (item.roi / Math.max(...chartData.roiTrend.map(d => d.roi))) * 240)}px`,
                        backgroundColor: item.roi >= 0 ? '#10B981' : '#EF4444'
                      }}
                    ></div>
                    <div className="mt-4 text-center">
                      <div className="text-xs text-gray-600 mb-1">{item.month}</div>
                      <div className="text-xs font-semibold text-gray-900">{item.roi.toFixed(1)}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ROI Optimization Tips</h2>
            <p className="text-xl text-gray-600">Improve your marketing ROI with these proven strategies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improve Targeting</h3>
              <p className="text-gray-600 leading-relaxed">
                Use{' '}
                <Link href="https://ads.google.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">
                  Google Ads <ExternalLink className="h-3 w-3 inline ml-1" />
                </Link>{' '}
                audience insights and{' '}
                <Link href="https://business.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">
                  Facebook Ads Manager <ExternalLink className="h-3 w-3 inline ml-1" />
                </Link>{' '}
                to refine your targeting and reduce CPC.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize Landing Pages</h3>
              <p className="text-gray-600 leading-relaxed">
                Improve your{' '}
                <Link href="/seo-services" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">
                  landing page conversion rates
                </Link>{' '}
                with A/B testing and user experience optimization to increase your overall ROI.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Track Customer Lifetime Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Focus on{' '}
                <Link href="/content-marketing" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">
                  retention strategies
                </Link>{' '}
                and{' '}
                <Link href="/Social-media-marketing" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">
                  customer engagement
                </Link>{' '}
                to maximize long-term ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help Optimizing Your ROI?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our <Link href="/our-team" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">expert team</Link> can help you 
            improve your marketing ROI with proven strategies and{' '}
            <Link href="/digital-marketing-services" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium transition-colors duration-200">comprehensive digital marketing services</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">
                Get Free Audit
                <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </Link>
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-white/80 backdrop-blur-xl border border-gray-200/50 text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300">
                Talk to Expert
                <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
