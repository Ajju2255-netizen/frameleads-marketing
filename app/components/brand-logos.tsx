import Image from "next/image"
import { Star } from "lucide-react"

export default function BrandLogos() {
  const brands = [
    {
      name: "Brand 1",
      logo: "/brand-logos/logo001.svg",
    },
    {
      name: "Brand 2",
      logo: "/brand-logos/logo002.svg",
    },
    {
      name: "Brand 3",
      logo: "/brand-logos/logo003.svg",
    },
    {
      name: "Brand 4",
      logo: "/brand-logos/logo004.svg",
    },
    {
      name: "Brand 5",
      logo: "/brand-logos/logo005.svg",
    },
    {
      name: "Brand 6",
      logo: "/brand-logos/logo006.svg",
    },
  ]

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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={brand.name} className="group relative">
              <div className="relative h-16 md:h-20 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={80}
                  height={80}
                  className="h-12 md:h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
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
