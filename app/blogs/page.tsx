'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  ChevronRight,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  Search,
  ChevronDown,
  Filter
} from 'lucide-react'

import { allPosts } from "./posts"

const posts = allPosts.map((p) => p.post) as Array<{
  slug: string;
  title: string;
  tag: string;
  summary: string;
  readTime: string;
  banner?: string;
}>

// Technical Blog Listing Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Frameleads Growth Insights",
  "url": "https://frameleads.com/blog",
  "description": "Expert insights on performance marketing, SEO, and industry-specific scaling strategies.",
  "publisher": {
    "@type": "Organization",
    "name": "Frameleads",
    "logo": "https://frameleads.com/logo.png"
  },
  "keywords": ["SEO Strategy", "SaaS Growth", "E-commerce MER", "Manufacturing SEO", "Healthcare Compliance", "Meta Ads", "Performance Marketing"]
}

const CATEGORIES = [
  "All",
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Paid Social",
  "Data Privacy",
  "Analytics & Tracking",
  "Creative & Branding"
]

const INDUSTRIES = [
  "All",
  "B2B & SaaS",
  "E-commerce & Retail",
  "Healthcare & Medical",
  "Financial Services",
  "Manufacturing & Industrial",
  "Real Estate",
  "Education & Training",
  "Travel & Hospitality"
]

export default function BlogsListingPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndustry, setActiveIndustry] = useState('All')

  const postsPerPage = 15

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCat = activeCategory === 'All' ||
        post.tag.toLowerCase() === activeCategory.toLowerCase() ||
        post.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        post.summary.toLowerCase().includes(activeCategory.toLowerCase())

      const matchesInd = activeIndustry === 'All' ||
        post.title.toLowerCase().includes(activeIndustry.toLowerCase().split(' & ')[0]) ||
        post.summary.toLowerCase().includes(activeIndustry.toLowerCase().split(' & ')[0]) ||
        post.tag.toLowerCase().includes(activeIndustry.toLowerCase().split(' & ')[0])

      return matchesSearch && matchesCat && matchesInd
    })
  }, [searchQuery, activeCategory, activeIndustry])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    document.getElementById('post-feed')?.scrollIntoView({ behavior: 'smooth' })
  }

  const getCategorySlug = (tag: string) => {
    const lowerTag = tag.toLowerCase()
    if (lowerTag.includes('seo')) return 'seo'
    if (lowerTag.includes('meta')) return 'performance-marketing'
    if (lowerTag.includes('google')) return 'performance-marketing'
    if (lowerTag.includes('performance')) return 'performance-marketing'
    if (lowerTag.includes('social')) return 'paid-social'
    return 'growth'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-0 overflow-x-hidden">

        {/* 1. "Knowledge Pulse" Snapshot (Hero) */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[50vh] flex flex-col justify-center">
          {/* Liquid / Glossy Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Center Liquid Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#FF6B35]/10 to-[#FF8A50]/5 rounded-full blur-[100px] animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-xl border border-slate-200 rounded-full shadow-sm mb-10"
            >
              <Activity className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A]">The Knowledge Pulse</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-[#0F172A] leading-[0.95] tracking-tighter mb-8"
            >
              The Frameleads <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Insight Engine.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
            >
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed relative z-10 text-left">
                This is where we document the future of <strong className="text-[#0F172A]">Performance Marketing</strong> and <strong className="text-[#0F172A]">Global Scaling</strong>. We don&apos;t just write for traffic; we write to solve the technical &quot;bottlenecks&quot; of digital growth. From deep-dives into advanced tracking workflows to HIPAA-safe server configuration, our insights are engineered for founders and growth leads who prioritize <strong className="text-[#FF6B35]">Unit Economics</strong> over vanity metrics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Interactive Search & Advanced Filtering */}
        <section id="post-feed" className="relative py-12 bg-white border-y border-slate-100 z-20 scroll-mt-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

              {/* Search Input */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search insights, case studies, guides..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] text-[#0F172A] placeholder-slate-400 font-medium text-lg transition-all shadow-sm"
                />
              </div>

              {/* Dropdown Filters */}
              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                {/* Category Dropdown */}
                <div className="relative w-full sm:w-64 flex-shrink-0">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF6B35]">
                    <Filter className="w-5 h-5" />
                  </div>
                  <select
                    value={activeCategory}
                    onChange={(e) => { setActiveCategory(e.target.value); setCurrentPage(1); }}
                    className="w-full appearance-none bg-white border border-slate-200 text-[#0F172A] font-bold py-5 pl-12 pr-12 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 cursor-pointer text-base shadow-sm hover:border-[#FF6B35]/30 transition-colors"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>

                {/* Industry Dropdown */}
                <div className="relative w-full sm:w-64 flex-shrink-0">
                  <select
                    value={activeIndustry}
                    onChange={(e) => { setActiveIndustry(e.target.value); setCurrentPage(1); }}
                    className="w-full appearance-none bg-white border border-slate-200 text-[#0F172A] font-bold py-5 pl-6 pr-12 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 cursor-pointer text-base shadow-sm hover:border-[#FF6B35]/30 transition-colors"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind === 'All' ? 'All Industries' : ind}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Results Count Feedback */}
            <div className="mt-8 text-slate-500 font-medium flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#FF6B35]" />
              Showing <span className="font-bold text-[#0F172A]">{filteredPosts.length}</span> results
              {(searchQuery || activeCategory !== 'All' || activeIndustry !== 'All') && (
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); setActiveIndustry('All'); setCurrentPage(1); }}
                  className="ml-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm hover:bg-slate-200 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 3. Automated Blog Feed with Pagination (15/page limit) */}
        <section className="relative py-16 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto px-6">

            {filteredPosts.length === 0 ? (
              <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-slate-200">
                <Search className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-[#0F172A] mb-4">No results found.</h3>
                <p className="text-slate-500 text-lg">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {currentPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-[#FF6B35]/30 shadow-sm transition-all duration-500"
                  >
                    <Link href={`/blogs/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden block bg-slate-100">
                      <Image
                        src={post.banner || "/blogs/placeholder.png"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-[#FF6B35] font-black uppercase tracking-widest mb-4">
                        <Link
                          href={`/blogs/categories/${getCategorySlug(post.tag)}`}
                          className="px-3 py-1.5 bg-[#FF6B35]/10 rounded-lg hover:bg-[#FF6B35] hover:text-white transition-colors"
                        >
                          {post.tag}
                        </Link>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400 font-bold">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-black text-[#0F172A] leading-tight mb-4 group-hover:text-[#FF6B35] transition-colors">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-slate-500 text-base leading-relaxed font-medium flex-1">
                        {post.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8 border-t border-slate-100 pt-12">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${currentPage === 1
                      ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                      : 'bg-white border-slate-200 text-[#0F172A] hover:border-[#FF6B35] hover:text-[#FF6B35] shadow-sm'
                    }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => paginate(idx + 1)}
                      className={`w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 ${currentPage === idx + 1
                          ? 'bg-[#FF6B35] text-white shadow-[0_10px_20px_-5px_rgba(255,107,53,0.4)]'
                          : 'bg-white border border-slate-200 text-slate-500 hover:border-[#0F172A] hover:text-[#0F172A]'
                        }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${currentPage === totalPages
                      ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                      : 'bg-white border-slate-200 text-[#0F172A] hover:border-[#FF6B35] hover:text-[#FF6B35] shadow-sm'
                    }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 4. Final CTA: Subscribe to the Loop */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="bg-[#0F172A] border border-[#0F172A] rounded-[5rem] overflow-hidden relative shadow-2xl px-8 py-24 md:p-32">
            {/* Abstract Glow Backgrounds */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35]/20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                Stay Ahead of the <span className="text-[#FF6B35]">Algorithm.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-medium">
                We don&apos;t do weekly newsletters. We send <strong className="text-white">"Signal Alerts"</strong> when the market shifts—like a new tracking update or a change in search logic. Subscribe to get the technical edge your competitors haven't noticed yet.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[3rem] shadow-[0_20px_40px_-12px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                  Join the Insight Loop <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
                <button onClick={() => document.getElementById('post-feed')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-4 px-10 py-8 bg-white/5 border border-white/20 text-white font-black text-xl rounded-[3rem] hover:bg-white/10 transition-all duration-300 group">
                  Search the Library
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
