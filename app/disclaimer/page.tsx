import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, Shield, FileText, Scale, Users, Mail, Phone, CheckCircle, XCircle, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Disclaimer - Frameleads Digital Marketing",
  description: "Read our disclaimer to understand the limitations and terms of using Frameleads digital marketing services and website content.",
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE4D6]/20 via-white to-[#FFE4D6]/10">
      {/* Header */}
      <div className="bg-white border-b border-[#FFE4D6]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-[#FF6B35]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              Please read this disclaimer carefully before using our services. By using Frameleads, you acknowledge and agree to the terms outlined below.
            </p>
            <p className="text-sm text-[#5A5A5A]/70 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-[#FFE4D6]/30 p-8 md:p-12">
          
          {/* General Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-[#FF6B35]" />
              General Disclaimer
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                The information provided on this website and through our services is for general informational purposes only. 
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, 
                express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, 
                products, services, or related graphics contained on this website.
              </p>
              <p className="mb-4">
                Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility 
                arising from any reliance placed on such materials by you or any other visitor to our website, or by anyone who may 
                be informed of any of its contents.
              </p>
            </div>
          </section>

          {/* Service Results Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-[#FF6B35]" />
              Service Results Disclaimer
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  No Guarantee of Results
                </h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• We do not guarantee specific results from our digital marketing services</li>
                  <li>• Results may vary based on market conditions, competition, and other factors</li>
                  <li>• Past performance does not guarantee future results</li>
                  <li>• Individual results depend on various factors beyond our control</li>
                  <li>• We provide our best efforts but cannot control external market forces</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  External Factors
                </h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Platform algorithm changes may affect campaign performance</li>
                  <li>• Economic conditions and market trends impact results</li>
                  <li>• Client cooperation and timely approvals are essential</li>
                  <li>• Industry regulations and compliance requirements may change</li>
                  <li>• Third-party platform policies and restrictions may limit strategies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Content and Information Disclaimer</h2>
            
            <div className="space-y-6">
              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Website Content</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• All content on this website is provided for informational purposes only</li>
                  <li>• We strive for accuracy but cannot guarantee all information is current or complete</li>
                  <li>• Case studies and testimonials represent individual experiences and results</li>
                  <li>• Industry statistics and data may change over time</li>
                  <li>• We reserve the right to update or modify content without notice</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Third-Party Content</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• We may link to third-party websites and resources</li>
                  <li>• We do not control or endorse third-party content</li>
                  <li>• Third-party websites have their own terms and privacy policies</li>
                  <li>• We are not responsible for third-party content accuracy or availability</li>
                  <li>• Use of third-party resources is at your own risk</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Advice Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-[#FF6B35]" />
              Professional Advice Disclaimer
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
              <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
                <p className="mb-4">
                  <strong>Important:</strong> The information provided through our services does not constitute professional advice 
                  in any specific field. While our team consists of experienced digital marketing professionals, the information 
                  we provide should not be considered as:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Legal advice or legal opinion</li>
                  <li>• Financial advice or investment recommendations</li>
                  <li>• Tax advice or tax planning guidance</li>
                  <li>• Medical advice or health recommendations</li>
                  <li>• Professional advice in any field other than digital marketing</li>
                </ul>
                <p>
                  We recommend consulting with qualified professionals in relevant fields for specific advice related to your 
                  business, legal, financial, or other professional needs.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#FF6B35]" />
              Limitation of Liability
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">General Limitation</h3>
                <p className="text-[#5A5A5A] mb-4">
                  To the maximum extent permitted by law, Frameleads shall not be liable for any direct, indirect, incidental, 
                  special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Loss of profits, revenue, or business opportunities</li>
                  <li>• Loss of data or information</li>
                  <li>• Business interruption or downtime</li>
                  <li>• Reputation damage or brand impact</li>
                  <li>• Any other commercial damages or losses</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Maximum Liability</h3>
                <p className="text-[#5A5A5A]">
                  Our total liability for any claims arising from our services shall not exceed the total amount paid by you 
                  for the specific service in question during the 12 months preceding the claim.
                </p>
              </div>
            </div>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Indemnification</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
                <p className="mb-4">
                  You agree to indemnify, defend, and hold harmless Frameleads and its officers, directors, employees, agents, 
                  and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, 
                  and expenses (including attorney's fees) arising from:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Your use of our services or website</li>
                  <li>• Your violation of any terms of service or agreement</li>
                  <li>• Your violation of any third-party rights</li>
                  <li>• Any content you submit, post, or transmit through our services</li>
                  <li>• Your violation of any applicable laws or regulations</li>
                </ul>
                <p>
                  This indemnification obligation will survive the termination of our service agreement and your use of our services.
                </p>
              </div>
            </div>
          </section>

          {/* Force Majeure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Force Majeure</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                We shall not be liable for any failure or delay in performance under this agreement which is due to fire, 
                flood, earthquake, elements of nature, or acts of God, acts of war, terrorism, strikes, labor disputes, 
                or any other cause which is beyond our reasonable control.
              </p>
              <p>
                In such cases, we will use reasonable efforts to notify you of the circumstances and work to minimize 
                the impact on our services.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Governing Law and Jurisdiction</h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl p-8 border border-[#FF6B35]/20">
              <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
                <p className="mb-4">
                  This disclaimer shall be governed by and construed in accordance with the laws of India, without regard 
                  to conflict of law principles. Any disputes arising from this disclaimer or our services shall be subject 
                  to the exclusive jurisdiction of the courts in Bangalore, India.
                </p>
                <p>
                  If any provision of this disclaimer is found to be unenforceable or invalid, the remaining provisions 
                  shall remain in full force and effect.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Changes to This Disclaimer</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after any changes constitutes 
                your acceptance of the new disclaimer.
              </p>
              <p>
                We encourage you to review this disclaimer periodically to stay informed about any updates or changes.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Contact Us</h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl p-8 border border-[#FF6B35]/20">
              <p className="text-lg text-[#5A5A5A] mb-6">
                If you have any questions about this disclaimer or our services, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#FF6B35]" />
                    <span className="text-[#5A5A5A]">ajsal@frameleads.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#FF6B35]" />
                    <span className="text-[#5A5A5A]">+91 6362821368</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[#5A5A5A]">
                    <strong>Legal Department:</strong><br />
                    Frameleads Digital Marketing<br />
                    Bangalore, India
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#FF6B35]/20">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">
                    Contact Us Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
