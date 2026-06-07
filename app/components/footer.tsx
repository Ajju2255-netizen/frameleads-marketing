import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const WHATSAPP_INTENT = "https://wa.me/916362821368?text=Hi%20Frameleads%2C%20I%27d%20like%20to%20discuss%20a%20marketing%20project."

export default function Footer() {
  const services = [
    { name: "Digital Marketing Services", href: "/digital-marketing-services" },
    { name: "SEO Services", href: "/seo-services" },
    { name: "PPC Management", href: "/ppc-management" },
    { name: "Content Marketing", href: "/content-marketing" },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    { name: "WhatsApp Marketing", href: "/whatsapp-marketing" },
    { name: "Analytics and Automation", href: "/analytics-and-automations" },
    { name: "Conversion Rate Optimization", href: "/conversion-rate-optimization" },
    { name: "Performance Marketing", href: "/performance-marketing" },
    { name: "Email Marketing & Automation", href: "/email-marketing-and-automation-services" },
    { name: "Branding Services", href: "/branding" },
    { name: "Website Development", href: "/website-development" },
  ]

  const advertisingPlatforms = [
    { name: "Google Ads", href: "/google-ads" },
    { name: "Meta Ads", href: "/meta-ads" },
    { name: "YouTube Ads", href: "/youtube-ads" },
    { name: "LinkedIn Ads", href: "/linkedin-ads" },
    { name: "TikTok Ads", href: "/tiktok-ads" },
    { name: "Snapchat Ads", href: "/snapchat-ads" },
    { name: "Pinterest Ads", href: "/pinterest-ads" },
    { name: "Shopify Ads", href: "/shopify-ads" },
    { name: "Baidu Ads", href: "/baidu-ads" },
    { name: "Yandex Ads", href: "/yandex-ads" },
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
    { name: "Our Team", href: "/our-team" },
    { name: "Press & Media", href: "/press" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Academy", href: "/academy" },
    { name: "Frameleads Growth System™", href: "/frameleads-growth-system" },
    { name: "How We Audit", href: "/how-we-audit" },
    { name: "Editorial Policy", href: "/editorial-policy" },
  ]

  const resources = [
    { name: "Resources hub", href: "/resources" },
    { name: "All guides (6k+)", href: "/resources/guides" },
    { name: "Glossary (87 terms)", href: "/glossary" },
    { name: "Comparisons", href: "/vs" },
    { name: "Calculators (19)", href: "/tools" },
    { name: "Reports & data studies", href: "/reports" },
    { name: "Playbooks", href: "/resources/playbooks" },
    { name: "Benchmarks", href: "/resources/benchmarks" },
    { name: "Templates", href: "/resources/templates" },
    { name: "Question hubs", href: "/resources/questions" },
  ]

  const questionHubs = [
    { name: "How-to guides", href: "/how-to" },
    { name: "What-is definitions", href: "/what-is" },
    { name: "How-much pricing", href: "/how-much" },
    { name: "Why-rationale", href: "/why" },
    { name: "Is-it decisions", href: "/is-it" },
    { name: "Best-of lists", href: "/best" },
  ]

  const moneyPages = [
    { name: "SEO Company in Bangalore", href: "/seo-company-in-bangalore" },
    { name: "SEO Company in Mumbai", href: "/seo-company-in-mumbai" },
    { name: "SEO Company in Dubai", href: "/seo-company-in-dubai" },
    { name: "Performance Marketing in Bangalore", href: "/performance-marketing-company-in-bangalore" },
    { name: "Performance Marketing in Mumbai", href: "/performance-marketing-company-in-mumbai" },
    { name: "B2B Marketing in Bangalore", href: "/b2b-marketing-company-in-bangalore" },
    { name: "Real Estate Marketing in Bangalore", href: "/real-estate-marketing-company-in-bangalore" },
    { name: "Creative Advertising in Bangalore", href: "/creative-advertising-company-in-bangalore" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Sitemap", href: "/sitemap" },
  ]

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, href: WHATSAPP_INTENT },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/frameleads" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/frameleads/" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577223400100" },
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
              <Link href="/contact">
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
              <li><Link href="/technology-and-saas" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Technology & SaaS</Link></li>
              <li><Link href="/healthcare-and-medical" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Healthcare & Medical</Link></li>
              <li><Link href="/financial-services" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Financial Services</Link></li>
              <li><Link href="/d2c-marketing" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">D2C Brands</Link></li>
              <li><Link href="/b2b-saas-marketing" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">B2B SaaS</Link></li>
              <li><Link href="/real-estate-marketing" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">Real Estate</Link></li>
              <li><Link href="/ecommerce" className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">E-commerce</Link></li>
              <li><Link href="/industries" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300 text-sm font-medium">All 31 industries →</Link></li>
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

            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Question Hubs</h3>
            <ul className="space-y-2 mb-6">
              {questionHubs.map((q) => (
                <li key={q.name}>
                  <Link href={q.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {q.name}
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

          {/* Money Pages + Contact */}
          <div>
            <h3 className="text-base font-bold text-[#2D2D2D] mb-4">Hire Frameleads</h3>
            <ul className="space-y-2 mb-6">
              {moneyPages.map((m) => (
                <li key={m.name}>
                  <Link href={m.href} className="text-[#5A5A5A] hover:text-[#FF6B35] transition-colors duration-300 text-sm">
                    {m.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/digital-marketing-services" className="text-[#FF6B35] hover:text-[#FF8A50] transition-colors duration-300 text-sm font-medium">
                  All service catalog →
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:ajsal@frameleads.com"
                className="flex items-center text-[#5A5A5A] text-sm hover:text-[#FF6B35] transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-3 text-[#FF6B35]" />
                <span>ajsal@frameleads.com</span>
              </a>
              <a
                href="tel:+916362821368"
                className="flex items-center text-[#5A5A5A] text-sm hover:text-[#FF6B35] transition-colors duration-300"
              >
                <Phone className="h-4 w-4 mr-3 text-[#FF6B35]" />
                <span>+91 6362821368</span>
              </a>
              <a
                href={WHATSAPP_INTENT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#5A5A5A] text-sm hover:text-[#25D366] transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4 mr-3 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
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
        <div className="pt-8 border-t border-[#FFE4D6]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5A5A5A]/60 text-sm">© {new Date().getFullYear()} Frameleads. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {legal.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link href={item.href} className="text-[#5A5A5A]/60 hover:text-[#FF6B35] transition-colors duration-300">
                    {item.name}
                  </Link>
                  {index < legal.length - 1 && <span className="mx-2 text-[#5A5A5A]/40">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
