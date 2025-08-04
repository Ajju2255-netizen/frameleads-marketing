import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and ROI.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team to achieve your goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of industry trends and use cutting-edge techniques to keep you competitive.",
    },
  ]

  const team = [
    {
      name: "Rahul Sharma",
      position: "Founder & CEO",
      image: "/team/rahul-sharma.png",
      bio: "10+ years in digital marketing with expertise in SEO strategy and business growth.",
    },
    {
      name: "Priya Patel",
      position: "Head of SEO",
      image: "/team/priya-patel.png",
      bio: "SEO specialist with 8+ years experience in technical and local SEO optimization.",
    },
    {
      name: "Amit Kumar",
      position: "Content Strategy Lead",
      image: "/team/amit-kumar.png",
      bio: "Content marketing expert focused on creating SEO-optimized content that converts.",
    },
    {
      name: "Sneha Reddy",
      position: "Digital Marketing Manager",
      image: "/team/sneha-reddy.png",
      bio: "Paid advertising specialist with expertise in Google Ads and social media marketing.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Frameleads
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We're Bangalore's leading SEO agency, dedicated to helping businesses achieve sustainable growth through
              proven digital marketing strategies and exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Founded in 2019, Frameleads started with a simple mission: to help businesses in Bangalore and across
                  India achieve their digital marketing goals through effective SEO strategies.
                </p>
                <p>
                  What began as a small team of passionate digital marketers has grown into a full-service SEO agency
                  that has helped over 500 businesses improve their online presence and drive sustainable growth.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Bangalore's leading SEO agencies, known for our
                  data-driven approach, transparent reporting, and commitment to delivering measurable results.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/story/story-cover.webp"
                alt="Frameleads team working"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover w-full h-[350px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our experienced team of SEO experts, content creators, and digital strategists are here to help your
              business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 font-medium mb-4">{member.position}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
