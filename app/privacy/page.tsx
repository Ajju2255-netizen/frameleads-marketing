"use client"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FloatingNotifications from "../components/floating-notifications"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      <FloatingNotifications />
      <Navbar />

      <section className="relative py-20 lg:py-28 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().getFullYear()}</p>

          <div className="prose prose-gray max-w-none">
            <h2>Introduction</h2>
            <p>
              At Frameleads ("we", "us", "our"), we value your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit
              our website and use our services.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact information (name, email, phone) when you submit forms</li>
              <li>Usage data and analytics (pages visited, device/browser information)</li>
              <li>Cookies and similar tracking technologies to improve experience</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries and provide requested services</li>
              <li>To improve our website, offerings, and user experience</li>
              <li>To send updates related to our services (you can opt out anytime)</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share data with trusted vendors
              who help us operate our website and services, subject to confidentiality agreements,
              and as required by law.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes outlined in this
              policy or as required by applicable laws.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your
              personal data. To exercise these rights, contact us at <a href="mailto:ajsal@frameleads.com">ajsal@frameleads.com</a>.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not responsible for
              their content or privacy practices.
            </p>

            <h2>Cookies</h2>
            <p>
              We use cookies to personalize content, analyze traffic, and improve performance.
              You can manage cookie preferences in your browser settings. See our Cookie Policy for details.
            </p>

            <h2>Security</h2>
            <p>
              We implement reasonable security measures to protect your data, but no method of
              transmission over the internet is 100% secure.
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


