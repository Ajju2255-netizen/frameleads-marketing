'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Share2,
  Search,
  Zap,
  ShoppingBag,
  Users,
  TrendingUp,
  Target,
  Activity,
  ChevronRight,
  MessageCircle,
  Video,
  LineChart,
  Layout,
  BarChart3,
  PenTool,
  Globe,
  Sparkles,
  Smartphone,
  Cpu,
  Mail,
  Palette,
  Linkedin,
  Music,
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for Social Media Marketing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing & Search Optimization",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/social-media-marketing"
  },
  "description": "Comprehensive social media marketing including Social SEO, Viral Creative, and Community Management.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Social Growth Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Search Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Short-Form Video Production" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer & Community Management" } }
    ]
  }
}

// FAQ Schema for Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does social media engagement affect my Google SEO rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indirectly, yes. High social engagement drives Brand Search Volume—one of the strongest trust signals for Google’s E-E-A-T. Additionally, Google's 'Perspectives' feature now pulls social posts directly into search results."
      }
    },
    {
      "@type": "Question",
      "name": "What is a 'Viral Loop' in social marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Viral Loop is a self-reinforcing cycle where a user interacts with your content and is prompted to share it, bringing in new users who repeat the process. Frameleads builds these loops into your creative strategy to lower your Customer Acquisition Cost (CAC)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Social Search Optimization (SSO)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SSO is the practice of optimizing social content for platform-specific search algorithms (like TikTok or Instagram search). This involves keyword-rich metadata, alt-text engineering, and topical authority mapping."
      }
    }
  ]
}

export default function SocialMediaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20">

        {/* Organic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#FF9055] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        {/* 1. Social Signals Snapshot */}
        <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Glassmorphism Box */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden group hover:border-[#FF6B35]/30 transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B35] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-[#FF6B35]/10">
                  <Activity className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-[#FF6B35]">Social Intelligence Summary</span>
              </div>
              <p className="text-2xl md:text-3xl text-gray-900 leading-snug font-medium tracking-tight">
                Frameleads moves beyond vanity metrics to <strong className="text-gray-900">Conversion-First Social Architecture</strong>. We utilize Algorithm-Adaptive Content and <strong className="font-bold text-[#FF6B35]">Social Search Optimization (SSO)</strong> to ensure your brand is discovered where your customers actually spend their time. Our 2026 framework achieves an average <strong className="text-gray-900 border-b-2 border-[#FF6B35]">40% increase</strong> in social-referred revenue.
              </p>
            </div>

            {/* 2. The Hero: Beyond the Like Button */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight mb-10 flex flex-col items-center">
                <span>Social Media That</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Scales Revenue,</span>
                <span>Not Just Followers.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
                Stop posting into the void. Build a <strong className="text-gray-900">Social Ecosystem</strong>. Frameleads combines high-velocity creative with Behavioral Targeting to turn casual scrollers into loyal brand advocates.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-300 group">
                  Build My Social Growth Roadmap <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FF6B35]" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* 3. Pillar 1: Social Search Optimization (SSO) */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF6B35] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Dominating the Social Search Landscape
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  People search &quot;Best [Product]&quot; on Instagram before they go to Google. We optimize every post for discoverability using the same technical rigor as SEO.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-sm">
                      <Search className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Keyword-Rich Metadata</h3>
                      <p className="text-gray-600">We engineer captions and Alt-text to rank for high-intent keywords within social platform algorithms.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-sm">
                      <Video className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Transcribed Video SEO</h3>
                      <p className="text-gray-600">Our AI-driven subtitling ensures that every word spoken in your Reels and Instagrams is indexed by search crawlers.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-sm">
                      <Globe className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Topical Authority</h3>
                      <p className="text-gray-600">We establish your profile as a &quot;Niche Leader&quot; so platforms proactively suggest your content to interested users.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-[2.5rem] blur-3xl opacity-[0.15]" />
                <div className="relative bg-[#0F172A] rounded-[2.5rem] p-0 shadow-2xl overflow-hidden aspect-[9/16] max-w-[320px] mx-auto border-[8px] border-gray-800">
                  {/* Background Image Simulation */}
                  <div className="absolute inset-0">
                    <Image
                      src="/social-media/background.png"
                      alt="Social ROI Dashboard"
                      fill
                      className="object-cover opacity-60 scale-110 group-hover:scale-125 transition-transform duration-[10s] ease-linear"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                  </div>

                  {/* Top Search Bar Simulation */}
                  <div className="absolute top-6 inset-x-4 flex items-center justify-between px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 z-20">
                    <span className="text-[10px] text-white font-medium italic">Searching: Best Growth Strategy 2026...</span>
                    <Search className="w-3 h-3 text-[#FF6B35]" />
                  </div>

                  {/* Simulated Interface Elements */}
                  <div className="absolute inset-x-0 bottom-0 p-6 space-y-5 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] overflow-hidden">
                          <Image
                            src="/social-media/profile.png"
                            alt="Social Architect"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#FF6B35] rounded-full p-1 border border-[#0F172A]">
                          <Zap className="w-2.5 h-2.5 text-white fill-white" />
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-white text-sm font-black">Frameleads Social</h4>
                        <p className="text-[10px] text-white/60 font-medium">Growth Engineering</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-white text-sm font-bold leading-tight">
                        Dominating the 2026 Growth Feed with SSO 🚀
                      </h5>
                      <p className="text-[11px] text-white/80 leading-relaxed font-medium">
                        Stop buying likes. Start engineering discovery. We optimize your niche knowledge for cross-platform search dominance.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <div className="px-3 py-1.5 bg-[#FF6B35] rounded-full text-[9px] font-black text-white uppercase tracking-wider shadow-lg shadow-[#FF6B35]/40 animate-bounce">AIO Priority</div>
                      <div className="px-3 py-1.5 bg-white/10 rounded-full text-[9px] font-black text-white uppercase tracking-wider backdrop-blur-md border border-white/10">Social SEO #1</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-[#FF6B35] to-[#FF9055] rounded-full shadow-[0_0_12px_#FF6B35]" />
                    </div>
                  </div>

                  {/* Right Side Interactions */}
                  <div className="absolute right-3 bottom-40 flex flex-col gap-8 text-white items-center z-20">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-[#FF6B35] transition-all cursor-pointer group/icon shadow-lg">
                        <TrendingUp className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase">128K</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-[#FF6B35] transition-all cursor-pointer group/icon shadow-lg">
                        <MessageCircle className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase">4.2K</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-[#FF6B35] transition-all cursor-pointer group/icon shadow-lg">
                        <Share2 className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase">15.9K</span>
                    </div>

                    {/* Spinning Audio Disc */}
                    <div className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center p-0.5 animate-[spin_4s_linear_infinite] border-2 border-white/20 shadow-2xl">
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#FF6B35] via-[#FF9055] to-blue-500 opacity-90 overflow-hidden">
                        <Image
                          src="/social-media/profile.png"
                          alt="Audio"
                          width={44}
                          height={44}
                          className="object-cover opacity-60"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: High-Velocity Creative */}
        <section className="relative z-10 py-24 bg-[#F8F9FA] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Creative Velocity: Outpacing the Feed</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">In 2026, &quot;Ad Fatigue&quot; happens in 48 hours. We maintain growth through constant creative innovation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:scale-105 transition-all group">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF6B35] transition-colors">
                  <Zap className="w-8 h-8 text-[#FF6B35] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The 3-Second Hook</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Data-backed visual and verbal triggers designed to stop the infinite scroll instantly.</p>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:scale-105 transition-all group">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
                  <Sparkles className="w-8 h-8 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UGC-Style Authenticity</h3>
                <p className="text-gray-600 leading-relaxed text-lg">High-production content that feels like a raw recommendation, lowering &quot;ad defense.&quot;</p>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:scale-105 transition-all group">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-500 transition-colors">
                  <Smartphone className="w-8 h-8 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform-Native Editing</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Content designed for the unique &quot;vibe&quot; of each platform, from LinkedIn to Instagram.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Community Equity & Social Commerce */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Turning Engagement into Transactions
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  Social media is the new storefront. We facilitate the <strong className="text-gray-900">Zero-Friction</strong> journey from initial discovery to final purchase.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#F8F9FA] rounded-[2rem] border border-gray-100">
                    <ShoppingBag className="w-10 h-10 text-[#FF6B35] mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">In-App Commerce</h4>
                    <p className="text-sm text-gray-600">Full setup and optimization of TikTok Shop and Instagram Shopping.</p>
                  </div>
                  <div className="p-6 bg-[#F8F9FA] rounded-[2rem] border border-gray-100">
                    <Users className="w-10 h-10 text-blue-500 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Proactive Nurturing</h4>
                    <p className="text-sm text-gray-600">Directly converting leads in DMs and comments to close the gap.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-[3rem] p-1 shadow-2xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-[#0F172A] m-1 rounded-[2.8rem] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-black text-white mb-2">4.8x</div>
                      <p className="text-[#FF6B35] font-black uppercase tracking-[0.2em] text-sm">Average ROAS</p>
                      <div className="mt-8 h-2 w-48 bg-white/10 rounded-full mx-auto overflow-hidden">
                        <div className="h-full bg-[#FF6B35] w-4/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The "Social ROI" Matrix */}
        <section className="relative z-10 py-24 bg-[#F8F9FA] border-y border-gray-100 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">The Social ROI Matrix</h2>

            <div className="overflow-x-auto rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-500">Platform</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-500">Primary Objective</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-[#FF6B35]">Frameleads Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">LinkedIn</td>
                    <td className="px-8 py-6 text-gray-600">B2B Authority & ABM</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Ghostwriting & Sales Enablement</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">Instagram</td>
                    <td className="px-8 py-6 text-gray-600">Visual Brand Identity</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Aesthetic Continuity & Reels Optimization</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">TikTok</td>
                    <td className="px-8 py-6 text-gray-600">Viral Reach & Commerce</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Trend-Jacking & Shop Optimization</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">Meta (FB)</td>
                    <td className="px-8 py-6 text-gray-600">Community & Retention</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">High-ROAS Lookalike Targeting</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">YouTube Shorts</td>
                    <td className="px-8 py-6 text-gray-600">Long-Tail Awareness</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">SEO-Optimized Video Hubs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className="scroll-mt-32 py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">Social Intelligence FAQ</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">Does social media engagement affect my Google SEO rankings?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  Indirectly, yes. High social engagement drives <strong className="text-gray-900">Brand Search Volume</strong>—one of the strongest trust signals for Google’s E-E-A-T. Additionally, Google&apos;s &quot;Perspectives&quot; feature now pulls social posts directly into search results.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is a &quot;Viral Loop&quot; in social marketing?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  A Viral Loop is a self-reinforcing cycle where a user interacts with your content and is prompted to share it, bringing in new users who repeat the process. We build these loops into your creative strategy to <strong className="text-gray-900">lower your CAC (Customer Acquisition Cost)</strong>.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is Social Search Optimization (SSO)?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  SSO is the practice of optimizing content for platform-native search engines. As TikTok and Instagram become the primary search tools for Gen-Z, we ensure your brand is the <strong className="text-gray-900">first result</strong> for high-intent niche queries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[3rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Is Your Social Presence a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Cost Center or Profit Center?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Most brands are just making noise. We’ll show you the exact content pillars and platform strategies needed to turn your followers into revenue.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Social SEO Audit <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Marketing Ecosystem</h2>
              <p className="text-gray-600">Sync your social authority with multi-channel performance and search dominance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/digital-marketing-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <BarChart3 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">Full-funnel growth architecture.</p>
              </Link>

              <Link href="/ppc-management" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Activity className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">PPC Management</h3>
                <p className="text-gray-600 text-sm">Revenue orchestration.</p>
              </Link>

              <Link href="/seo-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Search className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">SEO Dominance</h3>
                <p className="text-gray-600 text-sm">Search authority framework.</p>
              </Link>

              <Link href="/content-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <PenTool className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Content Strategy</h3>
                <p className="text-gray-600 text-sm">Entity-based authority.</p>
              </Link>

              <Link href="/google-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Target className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Google Ads</h3>
                <p className="text-gray-600 text-sm">Yield management.</p>
              </Link>

              <Link href="/whatsapp-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">WhatsApp Marketing</h3>
                <p className="text-gray-600 text-sm">Conversational ROI.</p>
              </Link>

              <Link href="/analytics-and-automations" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Cpu className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Data & Automation</h3>
                <p className="text-gray-600 text-sm">Unified Data Intelligence.</p>
              </Link>

              <Link href="/conversion-rate-optimization" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Zap className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">CRO Optimization</h3>
                <p className="text-gray-600 text-sm">Behavioral revenue lift.</p>
              </Link>

              <Link href="/perforamance-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <TrendingUp className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Performance Marketing</h3>
                <p className="text-gray-600 text-sm">Real-time revenue convergence.</p>
              </Link>

              <Link href="/email-marketing-and-automation-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Mail className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Email Automation</h3>
                <p className="text-gray-600 text-sm">Lifecycle revenue engine.</p>
              </Link>

              <Link href="/branding" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Palette className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Brand Strategy</h3>
                <p className="text-gray-600 text-sm">Market-Dominant Identity.</p>
              </Link>

              <Link href="/youtube-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Video className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">YouTube Ads</h3>
                <p className="text-gray-600 text-sm">Visual Intent Engine.</p>
              </Link>

              <Link href="/linkedin-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Linkedin className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">LinkedIn Ads</h3>
                <p className="text-gray-600 text-sm">B2B Precision Pipeline.</p>
              </Link>

              <Link href="/tiktok-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Music className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">TikTok Ads</h3>
                <p className="text-gray-600 text-sm">Entertainment Commerce.</p>
              </Link>

              <Link href="/snapchat-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Smartphone className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Snapchat Ads</h3>
                <p className="text-gray-600 text-sm">AR Commerce Engine.</p>
              </Link>

              <Link href="/pinterest-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Pin className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Pinterest Ads</h3>
                <p className="text-gray-600 text-sm">Predictive Commerce.</p>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
