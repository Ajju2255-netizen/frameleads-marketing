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
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white" onClick={() => handleNavClick('home')}>
              <Image src="/logos/brand-logo.png" alt="Frameleads" width={120} height={120} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => handleNavClick('about')}
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-white"
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
