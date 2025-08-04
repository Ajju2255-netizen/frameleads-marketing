import Navbar from "./components/navbar"
import Hero from "./components/hero"
import BrandLogos from "./components/brand-logos"
import FeatureCards from "./components/feature-cards"
import ServicesSteps from "./components/services-steps"
import Testimonials from "./components/testimonials"
import CardDecks from "./components/card-decks"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <BrandLogos />
      <FeatureCards />
      <ServicesSteps />
      <Testimonials />
      <CardDecks />
      <Footer />
    </div>
  )
}
