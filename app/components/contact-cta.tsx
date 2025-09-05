import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock } from "lucide-react"

interface ContactCTAProps {
  title?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonHref?: string
  phone?: string
  email?: string
  hours?: string
  className?: string
}

export default function ContactCTA({
  title = "Ready to Get Started?",
  description = "Contact us today to discuss your project and get a free consultation.",
  primaryButtonText = "Get Free Consultation",
  secondaryButtonText = "Schedule Call",
  primaryButtonHref = "/contact",
  secondaryButtonHref = "/contact",
  phone = "+91 6362821368",
  email = "ajsal@frameleads.com",
  hours = "Mon-Fri: 9AM-6PM",
  className = "",
}: ContactCTAProps) {
  return (
    <section className={`bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Link href={primaryButtonHref}>
            <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {primaryButtonText}
            </Button>
          </Link>
          <Link href={secondaryButtonHref}>
            <Button
              variant="outline"
              className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900 hover:bg-[#FF6B35]/5 px-10 py-4 text-lg font-semibold rounded-lg bg-transparent"
            >
              {secondaryButtonText}
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-[#FF6B35]" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-[#FF6B35]" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#FF6B35]" />
            <span>{hours}</span>
          </div>
        </div>
      </div>
    </section>
  )
} 