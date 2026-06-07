'use client'

import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Calculator, Zap } from 'lucide-react'

export default function RoiChart() {
    const [adSpend, setAdSpend] = useState<number>(10000)

    // Generate data based on adSpend
    const generateData = (spend: number) => {
        return [
            { month: 'Month 1', standard: spend * 1.5, frameleads: spend * 1.8 },
            { month: 'Month 2', standard: spend * 1.8, frameleads: spend * 2.5 },
            { month: 'Month 3', standard: spend * 2.1, frameleads: spend * 3.4 },
            { month: 'Month 4', standard: spend * 2.3, frameleads: spend * 4.5 },
            { month: 'Month 5', standard: spend * 2.4, frameleads: spend * 5.8 },
            { month: 'Month 6', standard: spend * 2.5, frameleads: spend * 7.2 },
        ]
    }

    const data = generateData(adSpend)

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value)
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl mt-8 border border-gray-100 p-6 lg:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] opacity-[0.03] rounded-full blur-[60px] pointer-events-none group-hover:opacity-10 transition-opacity" />

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF9055]/10 rounded-xl flex items-center justify-center border border-[#FF6B35]/20">
                        <Calculator className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Growth ROI Calculator</h3>
                        <p className="text-gray-500 font-medium text-sm mt-1">Value-Based Bidding vs. Traditional</p>
                    </div>
                </div>

                <div className="flex-shrink-0 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Adjust Monthly Spend</label>
                    <div className="flex items-center gap-4">
                        <input
                            type="range"
                            min="5000"
                            max="100000"
                            step="5000"
                            value={adSpend}
                            onChange={(e) => setAdSpend(parseInt(e.target.value))}
                            className="w-48 accent-[#FF6B35]"
                        />
                        <span className="font-mono text-[#FF6B35] font-bold w-20">
                            {formatCurrency(adSpend)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="h-[400px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorFrameleads" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#9CA3AF" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#9CA3AF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                        <XAxis dataKey="month" stroke="#6B7280" tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} axisLine={false} tickLine={false} />
                        <YAxis
                            tickFormatter={(val) => `$${val / 1000}k`}
                            stroke="#6B7280"
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            dx={-10}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#ffffff', borderColor: '#E5E7EB', borderRadius: '12px', color: '#111827', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            itemStyle={{ fontWeight: 'bold' }}
                            formatter={(value: number) => formatCurrency(value)}
                        />
                        <Area
                            type="monotone"
                            dataKey="standard"
                            name="Traditional Target CPA"
                            stroke="#9CA3AF"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorStandard)"
                        />
                        <Area
                            type="monotone"
                            dataKey="frameleads"
                            name="Frameleads VBB Logic"
                            stroke="#FF6B35"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorFrameleads)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-start gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Zap className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">The Power of Signal Bridging:</strong> By month 6, traditional setups hit a ceiling as they exhaust low-intent search terms. The Frameleads architecture leverages Value-Based Bidding and offline conversion tracking to train Google&apos;s AI to seek high-LTV conversions, un-capping your potential ROI.
                </p>
            </div>
        </div>
    )
}
