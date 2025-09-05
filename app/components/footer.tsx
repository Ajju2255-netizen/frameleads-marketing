import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  const services = [
    { name: "Digital Marketing Services", href: "/digital-marketing-services" },
    { name: "SEO Services", href: "/seo-services" },
    { name: "PPC Management", href: "/services/ppc-management" },
    { name: "Content Marketing", href: "/content-marketing" },
    { name: "Social Media Marketing", href: "/Social-media-marketing" },
    { name: "Performance Marketing", href: "/perforamance-marketing" },
  ]

  const locations = [
    { name: "Digital Marketing in Dubai", href: "/digital-marketing-in-dubai" },
    { name: "Digital Marketing in Bangalore", href: "/digital-marketing-in-bangalore" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Academy", href: "/academy" },
    { name: "Our Team", href: "/our-team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  const resources = [
    { name: "Digital Marketing Guide", href: "/resources/digital-marketing-guide" },
    { name: "Free Marketing Audit", href: "/free-audit" },
    { name: "ROI Calculator", href: "/tools/roi-calculator" },
    { name: "Webinars", href: "/webinars" },
    { name: "Templates", href: "/templates" },
    { name: "FAQ", href: "/faq" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577223400100" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/frameleads" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/frameleads/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ajsalabbas8093" },
  ]

  return (
    <footer className="relative bg-white border-t border-[#FFE4D6]/30 py-12">
      {/* Glowing Line Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent mb-8 shadow-lg shadow-[#FF6B35]/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-bold text-[#FF6B35]">
                <Image src="/logos/brand-logo.png" alt="Frameleads" width={120} height={120} />
              </Link>
              <p className="text-[#5A5A5A]/80 mt-4 leading-relaxed">
                India's leading digital marketing agency helping businesses achieve exponential growth through strategic SEO, 
                PPC campaigns, and performance marketing. Serving India, USA, and UAE markets with proven ROI-driven strategies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-[#5A5A5A]/80">
                <MapPin className="h-5 w-5 mr-3 text-[#FF6B35]" />
                <span>Electronic City, Bangalore, Karnataka, 560100</span>
              </div>
              <div className="flex items-center text-[#5A5A5A]/80">
                <Phone className="h-5 w-5 mr-3 text-[#FF6B35]" />
                <span>+91 6362821368</span>
              </div>
              <div className="flex items-center text-[#5A5A5A]/80">
                <Mail className="h-5 w-5 mr-3 text-[#FF6B35]" />
                <span>ajsal@frameleads.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full flex items-center justify-center text-[#FF6B35] hover:bg-[#FF6B35]/20 hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF6B35] mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-[#5A5A5A]/80 hover:text-[#FF6B35] transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF6B35] mb-4">Locations</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link href={location.href} className="text-[#5A5A5A]/80 hover:text-[#FF6B35] transition-colors duration-300">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF6B35] mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#5A5A5A]/80 hover:text-[#FF6B35] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF6B35] mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-[#5A5A5A]/80 hover:text-[#FF6B35] transition-colors duration-300">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF6B35] mb-4">Stay Updated</h3>
            <p className="text-[#5A5A5A]/80 mb-4 text-sm">
              Get the latest digital marketing tips, industry insights, and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/80 border border-[#FFE4D6]/30 rounded-lg text-[#5A5A5A] placeholder-[#5A5A5A]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent backdrop-blur-xl"
              />
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white font-semibold py-2 rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center pt-8 border-t border-[#FFE4D6]/30">
          <p className="text-[#5A5A5A]/60 text-sm">© {new Date().getFullYear()} Frameleads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
