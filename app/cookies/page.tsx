"use client"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FloatingNotifications from "../components/floating-notifications"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      <FloatingNotifications />
      <Navbar />

      <section className="relative py-20 lg:py-28 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().getFullYear()}</p>

          <div className="prose prose-gray max-w-none">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help
              us remember your preferences and improve your browsing experience.
            </p>

            <h2>How We Use Cookies</h2>
            <ul>
              <li>Essential cookies for core site functionality</li>
              <li>Analytics cookies to understand usage and improve performance</li>
              <li>Preference cookies to remember your settings</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              You can control cookies through your browser settings. Disabling certain cookies may
              impact site functionality.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies may be set by third-party services we use for analytics and performance.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about this policy, contact us at <a href="mailto:ajsal@frameleads.com">ajsal@frameleads.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


