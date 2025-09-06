import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Frameleads Digital Marketing",
  description: "Learn how Frameleads protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and protection.",
}

export default function PrivacyPolicy() {
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
              <Shield className="h-8 w-8 text-[#FF6B35]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Frameleads collects, uses, and protects your personal information.
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
              <Eye className="h-8 w-8 text-[#FF6B35]" />
              Introduction
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                Frameleads ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="mb-4">
                By using our website or services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-[#FF6B35]" />
              Information We Collect
            </h2>
            
            <div className="space-y-8">
              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Personal Information</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Name and contact information (email, phone number, address)</li>
                  <li>• Business information (company name, industry, website)</li>
                  <li>• Communication preferences and marketing consent</li>
                  <li>• Payment and billing information (processed securely through third-party providers)</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Technical Information</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Website usage data and analytics</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className="bg-[#FFE4D6]/10 rounded-xl p-6 border border-[#FFE4D6]/30">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Marketing Data</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Campaign performance data</li>
                  <li>• Customer behavior and preferences</li>
                  <li>• Social media engagement data</li>
                  <li>• Lead generation and conversion data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-[#FF6B35]" />
              How We Use Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Service Delivery</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Provide digital marketing services</li>
                  <li>• Process payments and transactions</li>
                  <li>• Communicate about your projects</li>
                  <li>• Deliver reports and analytics</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Business Operations</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Improve our services and website</li>
                  <li>• Conduct market research and analysis</li>
                  <li>• Send marketing communications (with consent)</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Lock className="h-8 w-8 text-[#FF6B35]" />
              Data Protection & Security
            </h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl p-8 border border-[#FF6B35]/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Security Measures</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure data storage and backup systems</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Staff training on data protection</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Data Retention</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• Client data: 7 years after project completion</li>
                    <li>• Marketing data: Until consent is withdrawn</li>
                    <li>• Analytics data: 26 months (Google Analytics)</li>
                    <li>• Legal compliance: As required by law</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Third-Party Services</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                We may use third-party services to enhance our website and services. These include:
              </p>
              <ul className="space-y-2 mb-6">
                <li>• <strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                <li>• <strong>Payment Processors:</strong> Secure payment processing (Stripe, PayPal)</li>
                <li>• <strong>Email Marketing:</strong> Newsletter and campaign management</li>
                <li>• <strong>CRM Systems:</strong> Customer relationship management</li>
                <li>• <strong>Social Media Platforms:</strong> Advertising and analytics</li>
              </ul>
              <p>
                These third parties have their own privacy policies. We recommend reviewing their policies to understand how they handle your data.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Your Rights</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Access & Control</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Request access to your personal data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your personal data</li>
                  <li>• Restrict data processing</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Communication</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Unsubscribe from marketing emails</li>
                  <li>• Update communication preferences</li>
                  <li>• Withdraw consent at any time</li>
                  <li>• File complaints with authorities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Cookies & Tracking</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                We use cookies and similar technologies to improve your experience on our website. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze website traffic and user behavior</li>
                <li>• Provide personalized content and advertisements</li>
                <li>• Ensure website security and functionality</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">International Data Transfers</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                As a global digital marketing agency, we may transfer your personal data to countries outside your jurisdiction. When we do so, we ensure appropriate safeguards are in place to protect your data, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Standard contractual clauses approved by relevant authorities</li>
                <li>• Adequacy decisions by data protection authorities</li>
                <li>• Binding corporate rules and certification schemes</li>
                <li>• Your explicit consent where required</li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Children's Privacy</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p>
                Our services are not directed to children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child under 16, we will take steps to delete such information promptly.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Changes to This Policy</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Posting the updated policy on our website</li>
                <li>• Sending email notifications to registered users</li>
                <li>• Updating the "Last updated" date at the top of this policy</li>
              </ul>
              <p>
                We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Contact Us</h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl p-8 border border-[#FF6B35]/20">
              <p className="text-lg text-[#5A5A5A] mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                    <strong>Data Protection Officer:</strong><br />
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
