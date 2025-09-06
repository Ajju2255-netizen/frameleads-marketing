import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function LocationsPage() {
  const locations = [
    { name: "Digital Marketing in India", href: "/digital-marketing-in-india", description: "Comprehensive digital marketing services across India" },
    { name: "Digital Marketing in Dubai", href: "/digital-marketing-in-dubai", description: "Leading digital marketing agency in Dubai, UAE" },
    { name: "Digital Marketing in Singapore", href: "/digital-marketing-in-singapore", description: "Expert digital marketing solutions in Singapore" },
    { name: "Digital Marketing in Australia", href: "/digital-marketing-in-australia", description: "Professional digital marketing services in Australia" },
    { name: "Digital Marketing in Saudi Arabia", href: "/digital-marketing-in-saudi-arabia", description: "Digital marketing expertise in Saudi Arabia" },
    { name: "Digital Marketing in UAE", href: "/digital-marketing-in-uae", description: "Complete digital marketing solutions in UAE" },
    { name: "Digital Marketing in Canada", href: "/digital-marketing-in-canada", description: "Strategic digital marketing in Canada" },
    { name: "Digital Marketing in China", href: "/digital-marketing-in-china", description: "Digital marketing services for Chinese markets" },
    { name: "Digital Marketing in Bangalore", href: "/digital-marketing-in-bangalore", description: "Premier digital marketing agency in Bangalore" },
    { name: "Digital Marketing in United States", href: "/digital-marketing-in-unitedstates", description: "Leading digital marketing in the United States" },
    { name: "Digital Marketing in United Kingdom", href: "/digital-marketing-in-unitedkingdom", description: "Expert digital marketing services in UK" },
    { name: "Digital Marketing in Germany", href: "/digital-marketing-in-germany", description: "Professional digital marketing in Germany" },
    { name: "Digital Marketing in France", href: "/digital-marketing-in-france", description: "Digital marketing solutions in France" },
    { name: "Digital Marketing in Brazil", href: "/digital-marketing-in-brazil", description: "Strategic digital marketing in Brazil" },
  ]

  const regions = [
    {
      name: "Asia Pacific",
      countries: ["India", "Singapore", "Australia", "China"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Middle East",
      countries: ["Dubai", "Saudi Arabia", "UAE"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "North America",
      countries: ["United States", "Canada"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Europe",
      countries: ["United Kingdom", "Germany", "France"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "South America",
      countries: ["Brazil"],
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#FFE4D6]/20 to-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Our <span className="text-[#FF6B35]">Global Presence</span>
            </h1>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto mb-8">
              Frameleads provides world-class digital marketing services across multiple countries and regions, 
              helping businesses achieve exponential growth in their local markets.
            </p>
            <div className="flex items-center justify-center space-x-2 text-[#FF6B35]">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold">Serving {locations.length} Countries Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Regions Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Our Regional Coverage</h2>
            <p className="text-lg text-[#5A5A5A]">Strategic presence across key global markets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-[#FFE4D6]/30 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${region.color} mb-4`}></div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{region.name}</h3>
                <div className="space-y-2">
                  {region.countries.map((country, countryIndex) => (
                    <div key={countryIndex} className="flex items-center text-[#5A5A5A]">
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></div>
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Locations Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">All Our Locations</h2>
            <p className="text-lg text-[#5A5A5A]">Explore our digital marketing services by location</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Link
                key={index}
                href={location.href}
                className="group bg-white rounded-xl shadow-lg p-6 border border-[#FFE4D6]/30 hover:shadow-xl hover:border-[#FF6B35]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="h-6 w-6 text-[#FF6B35] group-hover:text-[#FF8A50] transition-colors duration-300" />
                  <ArrowRight className="h-5 w-5 text-[#5A5A5A] group-hover:text-[#FF6B35] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                  {location.name}
                </h3>
                <p className="text-[#5A5A5A] text-sm group-hover:text-[#5A5A5A]/80 transition-colors duration-300">
                  {location.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
            Don't See Your Location?
          </h2>
          <p className="text-lg text-[#5A5A5A] mb-8">
            We provide remote digital marketing services worldwide. Contact us to discuss how we can help 
            grow your business regardless of your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white font-bold px-8 py-3 rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Button>
            </Link>
            <Link href="/free-marketing-audit">
              <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                Get Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
