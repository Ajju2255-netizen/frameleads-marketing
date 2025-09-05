'use client'

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useAnalytics } from "@/hooks/use-analytics"

export default function Navbar() {
  const { trackButtonClick } = useAnalytics()

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
            <Link href="/" className="text-2xl font-bold text-[#FF6B35]" onClick={() => handleNavClick('home')}>
              <Image src="/logos/brand-logo.png" alt="Frameleads" width={120} height={120} />
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
