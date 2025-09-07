'use client'

import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useAnalytics } from "@/hooks/use-analytics"
import { useState } from "react"

export default function Navbar() {
  const { trackButtonClick } = useAnalytics()
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)

  const handleNavClick = (pageName: string) => {
    trackButtonClick(`nav-${pageName}`)
  }

  const handleMobileMenuClick = () => {
    trackButtonClick('mobile-menu')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#FFE4D6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold" onClick={() => handleNavClick('home')}>
              <span className="text-[#2D3748]">FRAMELE</span><span className="text-[#FF6B35]">ADS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-[#5A5A5A] hover:text-[#FF6B35] px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
              
              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  className="text-[#5A5A5A] hover:text-[#FF6B35] px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                  onClick={() => handleNavClick('industries')}
                >
                  Industries
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isIndustriesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl border border-[#FFE4D6]/30 rounded-lg shadow-lg shadow-[#FF6B35]/10 py-2 z-50"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <Link
                      href="/technology-and-saas"
                      className="block px-4 py-2 text-sm text-[#5A5A5A] hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors duration-300"
                      onClick={() => handleNavClick('technology-saas')}
                    >
                      Technology & SaaS
                    </Link>
                    <Link
                      href="/healthcare-and-medical"
                      className="block px-4 py-2 text-sm text-[#5A5A5A] hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors duration-300"
                      onClick={() => handleNavClick('healthcare-medical')}
                    >
                      Healthcare & Medical
                    </Link>
                    <Link
                      href="/b2b-marketing-company-in-bangalore"
                      className="block px-4 py-2 text-sm text-[#5A5A5A] hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors duration-300"
                      onClick={() => handleNavClick('b2b-marketing')}
                    >
                      B2B Marketing
                    </Link>
                    <Link
                      href="/real-estate-marketing-company-in-bangalore"
                      className="block px-4 py-2 text-sm text-[#5A5A5A] hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors duration-300"
                      onClick={() => handleNavClick('real-estate')}
                    >
                      Real Estate
                    </Link>
                    <div className="border-t border-[#FFE4D6]/30 my-1"></div>
                    <Link
                      href="/industries"
                      className="block px-4 py-2 text-sm text-[#FF6B35] hover:text-[#FF8A50] hover:bg-[#FF6B35]/5 transition-colors duration-300 font-medium"
                      onClick={() => handleNavClick('all-industries')}
                    >
                      View All Industries →
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className="text-[#5A5A5A] hover:text-[#FF6B35] px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="text-[#5A5A5A] hover:text-[#FF6B35] px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => handleNavClick('about')}
              >
                About
              </Link>
              <Link
                href="/academy"
                className="text-[#5A5A5A] hover:text-[#FF6B35] px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => handleNavClick('academy')}
              >
                Academy
              </Link>
              <Button
                onClick={() => handleNavClick('cta')}
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Audit
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#5A5A5A] hover:text-[#FF6B35]"
              onClick={handleMobileMenuClick}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
