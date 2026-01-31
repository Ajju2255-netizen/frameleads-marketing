import Link from 'next/link'
import {
  Orbit,
  Zap,
  Target,
  Settings,
  Database,
  Globe,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  BarChart3,
  Search,
  AlertTriangle,
  Layers,
  Video,
  ShoppingCart,
  RefreshCcw,
  Clock,
  XCircle,
  Ban,
  Bot,
  LineChart,
  Activity,
  Gauge
} from 'lucide-react'

export const metadata = {
  title: 'Google Ads Performance Engine | Capture Demand Before It Dissipates | Frameleads',
  description: 'Most Google Ads agencies buy traffic. Frameleads builds Performance Engines. We eliminate "Ghost Clicks" and bridge the gap between ad spend and actual revenue using agentic optimization.',
  keywords: ['Google Ads Agency', 'Performance Max', 'PPC Management', 'Google Ads Optimization', 'ROAS Maximization', 'Agentic Optimization', 'Value-Based Bidding'],
  openGraph: {
    title: 'Google Ads Performance Engine | Capture Demand Before It Dissipates',
    description: 'Stop paying for clicks. Start buying growth. We eliminate "Ghost Clicks" and bridge the gap between ad spend and actual revenue.',
    type: 'article',
  }
}

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20">

      {/* Organic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-[#FF9055] opacity-[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#FF6B35] opacity-[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Hero Section: The Gravity Well */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/80 backdrop-blur-sm border-b border-[#FF6B35]/10">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-medium text-sm mb-8 border border-[#FF6B35]/20 animate-fade-in-up">
            <Orbit className="w-4 h-4" />
            <span>The Gravity Well</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Capture Demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Before It Dissipates.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Most Google Ads agencies buy traffic. <span className="font-semibold text-gray-900">Frameleads builds Performance Engines</span>. We eliminate &quot;Ghost Clicks&quot; and bridge the gap between ad spend and actual revenue using agentic optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 hover:scale-105 transition-all duration-300">
              <Zap className="w-5 h-5" />
              Launch Free Audit
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF6B35]" />
              <span>Google Premier Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#FF6B35]" />
              <span>$50M+ Managed Spend</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[#FF6B35]" />
              <span>Zero Waste Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem: Why Traditional Ads Fail */}
      <section className="relative z-10 py-16 max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <AlertTriangle className="w-8 h-8 text-[#FF6B35]" />
            The Problem: Why Traditional Ads Fail
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The &quot;Leaky Bucket&quot; Effect — Standard campaigns suffer from <span className="font-semibold text-gray-900">Entropy</span>.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 relative overflow-hidden mb-10">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500/80"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Without constant technical oversight, Google&apos;s &quot;Auto-Apply&quot; settings default to spending your budget on <strong>low-intent placements</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-[#FDF8F5] p-6 rounded-2xl border border-gray-100 hover:border-red-400/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Signal Gap</h3>
              <p className="text-gray-600 text-sm">Your ads aren't talking to your CRM. Revenue data stays siloed, leaving the algorithm blind.</p>
            </div>
            <div className="group bg-[#FDF8F5] p-6 rounded-2xl border border-gray-100 hover:border-red-400/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <RefreshCcw className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Creative Decay</h3>
              <p className="text-gray-600 text-sm">Your assets are stagnant, leading to high CPAs as ad fatigue sets in.</p>
            </div>
            <div className="group bg-[#FDF8F5] p-6 rounded-2xl border border-gray-100 hover:border-red-400/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Negative Drag</h3>
              <p className="text-gray-600 text-sm">You are paying for clicks from bots and competitors, draining your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Antigravity Framework */}
      <section className="relative z-10 py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <Cpu className="w-8 h-8 text-[#FF6B35]" />
              The Solution: Antigravity Framework
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our 3-pillar system that transforms your Google Ads from a cost center into a revenue engine.
            </p>
          </div>

          <div className="space-y-8">
            {/* Pillar 01 */}
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gradient-to-br from-[#F8F9FA] to-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="md:w-1/4 flex flex-col justify-start">
                <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-bold mb-3 w-fit border border-[#FF6B35]/20">
                  01
                </span>
                <h3 className="text-xl font-bold text-gray-900">Semantic Intent Mapping</h3>
              </div>
              <div className="md:w-3/4 border-l border-gray-200 md:pl-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We don't just bid on keywords; we bid on <strong className="text-gray-900">Customer Logic</strong>. Our systems map the semantic relationship between a user's problem and your solution, ensuring your ad appears exactly when the &quot;intent-to-buy&quot; peaks.
                </p>
                <div className="flex items-center gap-2 text-[#FF6B35] font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>AI-powered intent analysis</span>
                </div>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gradient-to-br from-[#F8F9FA] to-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="md:w-1/4 flex flex-col justify-start">
                <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-bold mb-3 w-fit border border-[#FF6B35]/20">
                  02
                </span>
                <h3 className="text-xl font-bold text-gray-900">Performance Max (PMax) Guardrails</h3>
              </div>
              <div className="md:w-3/4 border-l border-gray-200 md:pl-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Google's PMax is a &quot;black box&quot;—unless you know how to steer it. We implement <strong className="text-gray-900">Asset Group Segmentation</strong> and <strong className="text-gray-900">Negative Geo-Fencing</strong> to force Google's AI to find high-value users, not just &quot;cheap&quot; volume.
                </p>
                <div className="flex items-center gap-2 text-[#FF6B35] font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Full control over black-box automation</span>
                </div>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gradient-to-br from-[#F8F9FA] to-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="md:w-1/4 flex flex-col justify-start">
                <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-bold mb-3 w-fit border border-[#FF6B35]/20">
                  03
                </span>
                <h3 className="text-xl font-bold text-gray-900">The Lead-to-Profit Bridge</h3>
              </div>
              <div className="md:w-3/4 border-l border-gray-200 md:pl-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We integrate <strong className="text-gray-900">Offline Conversion Tracking (OCT)</strong>. By feeding your actual sales data back into the Google algorithm, we train the AI to stop looking for leads and start looking for <strong className="text-gray-900">buyers</strong>.
                </p>
                <div className="flex items-center gap-2 text-[#FF6B35] font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Revenue-optimized bidding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table: Static vs. Frameleads */}
      <section className="relative z-10 py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Gauge className="w-8 h-8 text-[#FF6B35]" />
          Comparison: Static vs. Frameleads
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          See the difference between a typical agency approach and the Antigravity method.
        </p>

        <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Typical Agency (Static)</th>
                  <th className="px-6 py-4 text-xs font-bold text-[#FF6B35] uppercase tracking-wider">Frameleads (Antigravity)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">Optimization</td>
                  <td className="px-6 py-5 text-sm text-gray-600">Bi-Weekly Manual Tweaks</td>
                  <td className="px-6 py-5"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6B35]/10 text-[#FF6B35]">Real-time Agentic Logic</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">Bidding</td>
                  <td className="px-6 py-5 text-sm text-gray-600">Maximize Clicks (Volume)</td>
                  <td className="px-6 py-5"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6B35]/10 text-[#FF6B35]">Value-Based Bidding (Profit)</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">Transparency</td>
                  <td className="px-6 py-5 text-sm text-gray-600">PDF Reports (Delayed)</td>
                  <td className="px-6 py-5"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6B35]/10 text-[#FF6B35]">Live Performance Dashboard</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">Creative</td>
                  <td className="px-6 py-5 text-sm text-gray-600">Set and Forget</td>
                  <td className="px-6 py-5"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6B35]/10 text-[#FF6B35]">High-Frequency Iteration</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Services: Scalable Verticals */}
      <section className="relative z-10 py-20 bg-[#0F172A] text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <Layers className="w-8 h-8 text-[#FF6B35]" />
              The Services: Scalable Verticals
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Specialized strategies for each channel to maximize your returns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Search */}
            <div className="group bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Search: High-Intent Capture</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Dominate the top of the SERP. We use <strong className="text-white">Alpha/Beta structures</strong> to isolate your most profitable search terms and aggressively scale their impression share.
              </p>
              <div className="flex items-center gap-2 text-[#FF6B35] font-medium text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Precision keyword targeting</span>
              </div>
            </div>

            {/* Display & YouTube */}
            <div className="group bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Display & YouTube: Mindshare Domination</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Retargeting that doesn't annoy. We build <strong className="text-white">Contextual Video Funnels</strong> that move prospects from &quot;Aware&quot; to &quot;Converted&quot; using physics-based visual storytelling.
              </p>
              <div className="flex items-center gap-2 text-[#FF6B35] font-medium text-sm">
                <Activity className="w-4 h-4" />
                <span>Engagement-driven funnels</span>
              </div>
            </div>

            {/* Shopping */}
            <div className="group bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shopping: ROAS Maximization</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                For E-commerce, every cent counts. We optimize your <strong className="text-white">GMC (Google Merchant Center)</strong> feed at the granular level, ensuring your best-selling products get the most oxygen.
              </p>
              <div className="flex items-center gap-2 text-[#FF6B35] font-medium text-sm">
                <LineChart className="w-4 h-4" />
                <span>Profit-first optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Intelligence Layer */}
      <section className="relative z-10 py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
          <Database className="w-8 h-8 text-[#FF6B35]" />
          FAQ: Intelligence Layer
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6B35]"></div>
            <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#FF6B35] transition-colors">
              Why isn&apos;t my current Google Ads account scaling?
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Usually, it's a <strong className="text-gray-900">&quot;Signal Issue.&quot;</strong> If you scale budget without improving your conversion signals, the algorithm gets &quot;noisy&quot; and attracts lower-quality traffic. We fix the signal first.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6B35]"></div>
            <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#FF6B35] transition-colors flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FF6B35]" />
              How long until we see the &quot;Antigravity Lift&quot;?
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Initial stabilization occurs in <strong className="text-gray-900">14 days</strong>. Full algorithmic &quot;learning&quot; and scaling typically peak at the <strong className="text-gray-900">45-60 day mark</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA: The Launchpad */}
      <footer className="relative z-10 max-w-4xl mx-auto px-6 py-16 mt-12">
        <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-3xl overflow-hidden relative shadow-2xl shadow-[#FF6B35]/25">
          {/* Abstract Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F172A] opacity-10 rounded-full blur-[60px] -ml-10 -mb-10 pointer-events-none"></div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-6 border border-white/30">
              <Zap className="w-4 h-4" />
              <span>The Launchpad</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Stop paying for clicks.<br />Start buying growth.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Our Audit isn&apos;t a sales pitch. It&apos;s a technical breakdown of where your current account is losing &quot;altitude.&quot;
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#FF6B35] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get My Free Leak Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/70 text-sm mt-6">
              No commitment. Just clarity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
