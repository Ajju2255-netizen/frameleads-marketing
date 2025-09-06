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

  const advertisingPlatforms = [
    { name: "Google Ads", href: "/google-ads" },
    { name: "Meta Ads", href: "/Meta-ads" },
    { name: "YouTube Ads", href: "/youtube-ads" },
    { name: "LinkedIn Ads", href: "/linkedin-ads" },
    { name: "TikTok Ads", href: "/tiktok-ads" },
    { name: "Snapchat Ads", href: "/snapchat-ads" },
    { name: "Pinterest Ads", href: "/pinterest-ads" },
    { name: "Shopify Ads", href: "/shopify-ads" },
    { name: "Taboola Ads", href: "/taboola-ads" },
  ]

  const locations = [
    { name: "Digital Marketing in India", href: "/digital-marketing-in-india" },
    { name: "Digital Marketing in Dubai", href: "/digital-marketing-in-dubai" },
    { name: "Digital Marketing in Singapore", href: "/digital-marketing-in-singapore" },
    { name: "Digital Marketing in Australia", href: "/digital-marketing-in-australia" },
    { name: "Digital Marketing in Saudi Arabia", href: "/digital-marketing-in-saudi-arabia" },
    { name: "Digital Marketing in UAE", href: "/digital-marketing-in-uae" },
    { name: "Digital Marketing in Canada", href: "/digital-marketing-in-canada" },
    { name: "Digital Marketing in China", href: "/digital-marketing-in-china" },
    { name: "Digital Marketing in Bangalore", href: "/digital-marketing-in-bangalore" },
    { name: "Digital Marketing in United States", href: "/digital-marketing-in-unitedstates" },
    { name: "Digital Marketing in United Kingdom", href: "/digital-marketing-in-unitedkingdom" },
    { name: "Digital Marketing in Germany", href: "/digital-marketing-in-germany" },
    { name: "Digital Marketing in France", href: "/digital-marketing-in-france" },
    { name: "Digital Marketing in Brazil", href: "/digital-marketing-in-brazil" },
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
    { name: "Free Marketing Audit", href: "/free-marketing-audit" },
    { name: "ROI Calculator", href: "/tools/roi-calculator" },
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
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 border border-[#FF6B35]/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Ready to grow your business?</h3>
              <p className="text-[#5A5A5A] text-sm">Get a free marketing audit and consultation with our digital marketing experts</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-marketing-audit">
                <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white font-bold px-8 py-3 rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Audit →
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & CTA Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-bold">
                <span className="text-[#2D3748]">FRAMELE</span><span className="text-[#FF6B35]">ADS</span>
              </Link>
              <p className="text-[#5A5A5A] mt-4 leading-relaxed text-sm">
                India's leading digital marketing agency helping businesses achieve exponential growth through strategic SEO, 
                PPC campaigns, and performance marketing.
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="text-sm font-bold text-[#2D2D2D] mb-3">Stay Updated</h3>
              <p className="text-[#5A5A5A] mb-3 text-xs leading-relaxed">
                Get the latest digital marketing tips and insights delivered to your inbox.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/80 border border-[#FFE4D6]/30 rounded-lg text-[#5A5A5A] placeholder-[#5A5A5A]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent backdrop-blur-xl text-xs"
                />
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white font-semibold px-4 py-2 rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 text-xs">
                    Subscribe
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Services & Platforms */}
          <div>
            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Services</h3>
            <ul className="space-y-2 mb-6">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Advertising Platforms</h3>
            <ul className="space-y-2">
              {advertisingPlatforms.map((platform) => (
                <li key={platform.name}>
                  <Link href={platform.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {platform.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Industries */}
          <div>
            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Locations</h3>
            <ul className="space-y-2 mb-6">
              {locations.slice(0, 8).map((location) => (
                <li key={location.name}>
                  <Link href={location.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300 text-sm font-medium">
                  More locations →
                </Link>
              </li>
            </ul>

            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/b2b-marketing-company-in-bangalore" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">B2B Marketing</Link></li>
              <li><Link href="/real-estate-marketing-company-in-bangalore" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Real Estate</Link></li>
              <li><Link href="/seo-company-in-bangalore" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">E-commerce</Link></li>
              <li><Link href="/creative-advertising-company-in-bangalore" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Creative Agencies</Link></li>
              <li><Link href="/industries" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300 text-sm font-medium">More industries →</Link></li>
            </ul>
          </div>

          {/* Resources & Tools */}
          <div>
            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/contact" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link href="/blog" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Blog</Link></li>
            </ul>

            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-[#5A5A5A] text-sm">
                <Mail className="h-4 w-4 mr-3 text-[#FF6B35]" />
                <span>ajsal@frameleads.com</span>
              </div>
              <div className="flex items-center text-[#5A5A5A] text-sm">
                <Phone className="h-4 w-4 mr-3 text-[#FF6B35]" />
                <span>+91 6362821368</span>
              </div>
              <div className="flex items-center text-[#5A5A5A] text-sm">
                <MapPin className="h-4 w-4 mr-3 text-[#FF6B35]" />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full flex items-center justify-center text-[#FF6B35] hover:bg-[#FF6B35]/20 hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                )
              })}
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
