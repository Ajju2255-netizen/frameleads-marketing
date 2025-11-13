import Image from "next/image"
import { Star } from "lucide-react"

export default function BrandLogos() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#5A5A5A] mb-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] bg-clip-text text-transparent leading-[1.3] py-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-[#5A5A5A]/80 max-w-3xl mx-auto leading-relaxed py-1">
            Join hundreds of businesses that have transformed their digital presence with our proven strategies.
          </p>
        </div>
        
        <div className="relative rounded-3xl border border-[#FF6B35]/10 bg-white/70 backdrop-blur-xl shadow-lg overflow-hidden">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-[#FF6B35]/8 to-[#FF8A50]/8 rounded-full blur-3xl" />
          <div className="relative">
            <Image
              src="/logos/logo-single-client.png"
              alt="Client logos collage"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-[#5A5A5A]/70 text-sm">
            <Star className="h-4 w-4 text-[#FF6B35] fill-current" />
            <span>500+ successful campaigns</span>
            <span className="text-[#5A5A5A]/50">•</span>
            <span>₹23 Cr+ monthly revenue generated</span>
            <span className="text-[#5A5A5A]/50">•</span>
            <span>98.2% client satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
