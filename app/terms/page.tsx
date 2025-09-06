import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle, Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Frameleads Digital Marketing",
  description: "Read our terms of service to understand the terms and conditions for using Frameleads digital marketing services and website.",
}

export default function TermsOfService() {
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
              <FileText className="h-8 w-8 text-[#FF6B35]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using Frameleads, you agree to be bound by these terms.
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
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-[#FF6B35]" />
              Agreement to Terms
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                These Terms of Service ("Terms") govern your use of Frameleads' website, services, and digital marketing solutions. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="mb-4">
                If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Our Services</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Digital Marketing Services</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Search Engine Optimization (SEO)</li>
                  <li>• Pay-Per-Click (PPC) Management</li>
                  <li>• Social Media Marketing</li>
                  <li>• Content Marketing</li>
                  <li>• Performance Marketing</li>
                  <li>• Email Marketing</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Platform Management</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Google Ads Management</li>
                  <li>• Meta (Facebook/Instagram) Ads</li>
                  <li>• LinkedIn Advertising</li>
                  <li>• YouTube Advertising</li>
                  <li>• TikTok Advertising</li>
                  <li>• Snapchat Advertising</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#FF6B35]" />
              Client Responsibilities
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Required Information
                </h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Provide accurate business information and contact details</li>
                  <li>• Grant necessary access to advertising accounts and platforms</li>
                  <li>• Supply required assets (logos, images, brand guidelines)</li>
                  <li>• Respond promptly to requests for feedback and approvals</li>
                  <li>• Maintain active communication throughout the project</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  Prohibited Activities
                </h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Providing false or misleading information</li>
                  <li>• Engaging in illegal or unethical business practices</li>
                  <li>• Violating platform terms of service</li>
                  <li>• Using our services for spam or malicious activities</li>
                  <li>• Sharing confidential information with competitors</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Payment Terms</h2>
            
            <div className="space-y-6">
              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Billing & Payment</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Payment terms are specified in individual service agreements</li>
                  <li>• Invoices are typically due within 15-30 days of receipt</li>
                  <li>• Late payments may incur additional fees as specified in the agreement</li>
                  <li>• We accept various payment methods including bank transfers and online payments</li>
                  <li>• All prices are exclusive of applicable taxes unless otherwise stated</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Refund Policy</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Refunds are considered on a case-by-case basis</li>
                  <li>• No refunds for services already delivered or work completed</li>
                  <li>• Setup fees and one-time charges are generally non-refundable</li>
                  <li>• Refund requests must be submitted in writing within 30 days</li>
                  <li>• Processing time for approved refunds is 5-10 business days</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Level Agreement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Service Level Agreement</h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl p-8 border border-[#FF6B35]/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Performance Standards</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• Regular reporting and analytics delivery</li>
                    <li>• Campaign optimization and management</li>
                    <li>• Responsive communication and support</li>
                    <li>• Adherence to industry best practices</li>
                    <li>• Compliance with platform guidelines</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Limitations</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• Results may vary based on market conditions</li>
                    <li>• Platform algorithm changes may affect performance</li>
                    <li>• Client cooperation is essential for success</li>
                    <li>• External factors beyond our control may impact results</li>
                    <li>• No guarantees of specific ROI or conversion rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Intellectual Property</h2>
            
            <div className="space-y-6">
              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Our Rights</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Frameleads retains ownership of proprietary methodologies and tools</li>
                  <li>• We may use anonymized data for case studies and marketing</li>
                  <li>• Our website content, designs, and materials are protected by copyright</li>
                  <li>• We reserve the right to use our name and logo in client work</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Client Rights</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Clients retain ownership of their brand assets and content</li>
                  <li>• Work product created specifically for the client belongs to the client</li>
                  <li>• Clients may use campaign data and reports for their business purposes</li>
                  <li>• Client confidential information remains confidential</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Confidentiality</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                Both parties agree to maintain the confidentiality of sensitive information shared during the course of our business relationship. This includes:
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Business strategies and marketing plans</li>
                <li>• Financial information and performance data</li>
                <li>• Customer lists and proprietary information</li>
                <li>• Technical specifications and methodologies</li>
                <li>• Any information marked as confidential</li>
              </ul>
              <p>
                This confidentiality obligation survives the termination of our service agreement and continues indefinitely.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-[#FF6B35]" />
              Limitation of Liability
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
              <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
                <p className="mb-4">
                  To the maximum extent permitted by law, Frameleads shall not be liable for:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Indirect, incidental, or consequential damages</li>
                  <li>• Loss of profits, revenue, or business opportunities</li>
                  <li>• Damages resulting from third-party actions or platform changes</li>
                  <li>• Any damages exceeding the total amount paid for services</li>
                  <li>• Results that don't meet specific expectations or goals</li>
                </ul>
                <p>
                  Our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific service in question.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Termination</h2>
            
            <div className="space-y-6">
              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Termination by Client</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Clients may terminate services with 30 days written notice</li>
                  <li>• Payment for work completed up to termination date is due</li>
                  <li>• Access to accounts and platforms will be transferred back to client</li>
                  <li>• Final reports and deliverables will be provided within 15 days</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Termination by Frameleads</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• We may terminate services for non-payment or breach of terms</li>
                  <li>• Immediate termination for illegal or unethical activities</li>
                  <li>• 30 days notice for other termination reasons</li>
                  <li>• Client remains responsible for all outstanding payments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Governing Law</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
              </p>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Contact Information</h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl p-8 border border-[#FF6B35]/20">
              <p className="text-lg text-[#5A5A5A] mb-6">
                If you have any questions about these Terms of Service, please contact us:
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
