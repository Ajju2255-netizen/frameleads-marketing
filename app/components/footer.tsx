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
    { name: "Creative Advertising Company in Bangalore", href: "/creative-advertising-company-in-bangalore" },
    { name: "B2B Marketing Company in Bangalore", href: "/b2b-marketing-company-in-bangalore" },
    { name: "Performance Marketing Company in Bangalore", href: "/performance-marketing-company-in-bangalore" },
    { name: "Real Estate Marketing Company in Bangalore", href: "/real-estate-marketing-company-in-bangalore" },
    { name: "SEO Company in Bangalore", href: "/seo-company-in-bangalore" },
    { name: "SEO Company in Dubai", href: "/seo-company-in-dubai" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Academy", href: "/academy" },
    { name: "Our Team", href: "/team" },
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
    <footer className="relative bg-black border-t border-red-500/20 py-12">
      {/* Glowing Line Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8 shadow-lg shadow-red-500/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-bold text-red-400">
                <Image src="/logos/brand-logo.png" alt="Frameleads" width={120} height={120} />
              </Link>
              <p className="text-gray-300 mt-4 leading-relaxed">
                India's leading digital marketing agency helping businesses achieve exponential growth through strategic SEO, 
                PPC campaigns, and performance marketing. Serving India, USA, and UAE markets with proven ROI-driven strategies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-red-400" />
                <span>Electronic City, Bangalore, Karnataka, 560100</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-red-400" />
                <span>+91 63628 21368</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-red-400" />
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
                    className="w-10 h-10 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 group"
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
            <h3 className="text-lg font-semibold text-red-400 mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest digital marketing tips, industry insights, and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-slate-800/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-xl"
              />
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white font-semibold py-2 rounded-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center pt-8 border-t border-red-500/10">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Frameleads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
