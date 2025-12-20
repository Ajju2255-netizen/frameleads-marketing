"use client"

import FloatingNotifications from "../components/floating-notifications"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      <FloatingNotifications />
      

      <section className="relative py-20 lg:py-28 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().getFullYear()}</p>

          <div className="prose prose-gray max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Frameleads website and services, you agree to be bound by
              these Terms of Service. If you do not agree, you may not use our services.
            </p>

            <h2>Use of Services</h2>
            <ul>
              <li>You agree to use our services only for lawful purposes</li>
              <li>You will not attempt to disrupt or compromise the security of our services</li>
              <li>You are responsible for any content submitted through our forms</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content, trademarks, and materials on this website are the property of Frameleads
              or its licensors and are protected by applicable laws.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an "as is" and "as available" basis. We make no
              warranties of any kind, express or implied, regarding the operation or availability
              of the services.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Frameleads shall not be liable for any indirect,
              incidental, or consequential damages arising from your use of the services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with
              an updated revision date.
            </p>

            <h2>Contact</h2>
            <p>
              For questions regarding these Terms, please contact <a href="mailto:ajsal@frameleads.com">ajsal@frameleads.com</a>.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}


