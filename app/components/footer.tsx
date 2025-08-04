import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  const services = [
    { name: "Digital Marketing Services", href: "/services/digital-marketing" },
    { name: "SEO Services", href: "/services/seo" },
    { name: "PPC Management", href: "/services/ppc-management" },
    { name: "Content Marketing", href: "/services/content-marketing" },
    { name: "Social Media Marketing", href: "/services/social-media" },
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "Creative Advertising Company in Bangalore", href: "/creative-advertising-company-in-bangalore" },
    { name: "B2B Marketing Company in Bangalore", href: "/b2b-marketing-company-in-bangalore" },
    { name: "Performance Marketing Company in Bangalore", href: "/performance-marketing-company-in-bangalore" },
    { name: "Real Estate Marketing Company in Bangalore", href: "/real-estate-marketing-company-in-bangalore" },
    { name: "SEO Company in Bangalore", href: "/seo-company-in-bangalore" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
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
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-bold text-white">
              <Image src="/logos/brand-logo.png" alt="Frameleads" width={120} height={120} />
              </Link>
              <p className="text-gray-400 mt-4 leading-relaxed">
                India's leading digital marketing agency helping businesses achieve exponential growth through strategic SEO, 
                PPC campaigns, and performance marketing. Serving India, USA, and UAE markets with proven ROI-driven strategies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-red-500" />
                <span>Electronic City, Bangalore, Karnataka, 560100</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-red-500" />
                <span>+91 63628 21368</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-red-500" />
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
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest digital marketing tips, industry insights, and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Link href="/contact">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Frameleads. All rights reserved.</div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
