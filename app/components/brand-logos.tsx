import Image from "next/image"

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
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Trusted by Leading Brands Across India, USA & UAE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Join 500+ businesses that have achieved exponential growth with Frameleads' digital marketing expertise
          </p>
        </div>
      </div>
    </section>
  )
}
