import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Koramangala, Bangalore", "Karnataka 560034", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 63628 21368", "+91 63628 21368", "Mon-Fri: 9AM-6PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@frameleads.com", "support@frameleads.com", "careers@frameleads.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "Typically, you can expect to see initial improvements in 3-6 months, with significant results in 6-12 months. SEO is a long-term strategy that builds momentum over time.",
    },
    {
      question: "Do you work with businesses outside Bangalore?",
      answer:
        "Yes! While we're based in Bangalore, we work with clients across India and internationally. We provide remote SEO services and digital marketing support worldwide.",
    },
    {
      question: "What's included in your SEO audit?",
      answer:
        "Our comprehensive SEO audit includes technical analysis, keyword research, competitor analysis, content review, backlink profile assessment, and actionable recommendations.",
    },
    {
      question: "Do you provide monthly reports?",
      answer:
        "We provide detailed monthly reports showing your rankings, traffic growth, conversions, and the work completed. Transparency is key to our client relationships.",
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
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to grow your business with proven SEO strategies? Let's discuss how we can help you achieve your
              digital marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+91 63628 21368"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Services</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="technical-seo">Technical SEO</option>
                    <option value="content-marketing">Content Marketing</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="social-media">Social Media Marketing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="bg-gray-700 border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-400">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Quick answers to common questions about our SEO services.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
