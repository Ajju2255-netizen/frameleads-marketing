'use client'

import { useState } from 'react'
import { Calculator, AlertTriangle, ShieldCheck } from 'lucide-react'

export default function AioCalculator() {
    const [industry, setIndustry] = useState('')
    const [traffic, setTraffic] = useState('')
    const [score, setScore] = useState<number | null>(null)

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault()
        if (!industry || !traffic) return

        // Simple pseudo-random logic for the calculator
        const baseRisk = industry.length > 5 ? 65 : 45
        const trafficFactor = parseInt(traffic) > 10000 ? 15 : -10
        const calculatedScore = Math.min(Math.max(baseRisk + trafficFactor, 10), 95)

        setScore(calculatedScore)
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] opacity-[0.03] rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">The AIO Visibility Calculator</h3>
                    <p className="text-gray-600 font-medium">Discover your &quot;AI Displacement Risk&quot; score.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <form onSubmit={handleCalculate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Your Industry</label>
                        <select
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                            required
                        >
                            <option value="">Select Industry...</option>
                            <option value="ecommerce">E-commerce & Retail</option>
                            <option value="saas">SaaS & Technology</option>
                            <option value="healthcare">Healthcare & Medical</option>
                            <option value="finance">Finance & Insurance</option>
                            <option value="professional">Professional Services</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Estimated Monthly Traffic</label>
                        <select
                            value={traffic}
                            onChange={(e) => setTraffic(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                            required
                        >
                            <option value="">Select Traffic Volume...</option>
                            <option value="1000">Under 10,000</option>
                            <option value="50000">10,000 - 100,000</option>
                            <option value="200000">100,000 - 500,000</option>
                            <option value="1000000">500,000+</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    >
                        Calculate My Risk
                    </button>
                </form>

                <div className="flex flex-col justify-center items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center min-h-[250px]">
                    {score === null ? (
                        <div className="text-gray-400">
                            <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p className="font-medium text-lg">Enter your details to generate your AI Displacement Risk score.</p>
                        </div>
                    ) : (
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 mb-4">
                                {score > 50 ? (
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                ) : (
                                    <ShieldCheck className="w-6 h-6 text-green-500" />
                                )}
                                <span className={`font-bold text-lg ${score > 50 ? 'text-red-500' : 'text-green-500'}`}>
                                    {score > 50 ? 'High Risk' : 'Moderate Risk'}
                                </span>
                            </div>
                            <div className="text-6xl font-black text-gray-900 mb-4">{score}%</div>
                            <p className="text-gray-600 font-medium">
                                {score > 50
                                    ? "Your current traffic is highly vulnerable to AI Overviews and SearchGPT summaries. You need an Entity-Based SEO strategy."
                                    : "You have some baseline resilience, but there's room to optimize for Generative Engine Optimization (GEO)."}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
