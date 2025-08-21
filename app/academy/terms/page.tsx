'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import FloatingNotifications from '@/app/components/floating-notifications'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AcademyTermsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Use a deterministic date to avoid hydration mismatches (server vs client locales)
  const todayIso = new Date().toISOString().slice(0, 10) // YYYY-MM-DD

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingNotifications />

      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-green-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Top Bar (simple) */}
      <nav className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <span className="text-lg font-semibold text-green-400">Frameleads Academy</span>
          <Link href="/academy">
            <Button className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300">
              Back to Academy
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl text-green-300 px-6 py-3 rounded-full text-sm font-medium border border-green-500/30 shadow-lg shadow-green-500/20">
              Terms & Privacy
            </span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Policies for Frameleads Academy
          </h1>
          <p className={`text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Effective date: {todayIso}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/15 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Terms of Service</h2>
              <div className="space-y-4 text-gray-300">
                <p>By accessing or using Frameleads Academy products, you agree to these Terms. If you do not agree, please do not use our products.</p>
                <p className="text-gray-400">1) License: Personal, non-transferable license to use purchased digital products. 2) Payments: All sales are final unless mandated by law. 3) Prohibited use: Resale, redistribution, or public sharing without permission.</p>
                <p className="text-gray-400">4) Limitation of liability: We are not liable for indirect or incidental damages from the use of our products.</p>
                <p className="text-gray-400">5) Changes: We may update these Terms. Continued use means you accept the changes.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Privacy Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>We value your privacy. This Policy explains how we collect, use, and protect your information when you use Frameleads Academy.</p>
                <p className="text-gray-400">Information we collect: contact details you provide (name, email, phone), and usage data for improving our services.</p>
                <p className="text-gray-400">How we use it: to provide support, send purchase access links, and share updates you opt into. We do not sell your data.</p>
                <p className="text-gray-400">Data security: we use industry-standard safeguards. However, no method of transmission over the Internet is 100% secure.</p>
                <p className="text-gray-400">Your choices: you can request access, correction, or deletion of your data by contacting us.</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-gray-500 text-center">Last updated on {todayIso}</div>
        </div>
      </section>

      {/* Footer-lite */}
      <footer className="relative border-t border-green-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6 shadow-lg shadow-green-500/50"></div>
          <div className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Frameleads Academy. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}


