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
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their digital presence with our proven strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={brand.name} className="group relative">
              <div className="relative h-16 md:h-20 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={80}
                  height={80}
                  className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <Star className="h-4 w-4 text-red-400 fill-current" />
            <span>500+ successful campaigns</span>
            <span className="text-gray-500">•</span>
            <span>₹23 Cr+ monthly revenue generated</span>
            <span className="text-gray-500">•</span>
            <span>98.2% client satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
