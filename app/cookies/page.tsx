import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cookie, Settings, Shield, Eye, Database, Users, Mail, Phone, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy - Frameleads Digital Marketing",
  description: "Learn about how Frameleads uses cookies and similar technologies to enhance your browsing experience and provide personalized services.",
}

export default function CookiePolicy() {
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
              <Cookie className="h-8 w-8 text-[#FF6B35]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              This policy explains how Frameleads uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
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
              <Settings className="h-8 w-8 text-[#FF6B35]" />
              What Are Cookies?
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences, analyzing site traffic, and personalizing content.
              </p>
              <p className="mb-4">
                This Cookie Policy explains how Frameleads ("we," "our," or "us") uses cookies and similar technologies on our website and services. By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-[#FF6B35]" />
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-8">
              {/* Essential Cookies */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Essential Cookies
                </h3>
                <p className="text-[#5A5A5A] mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• <strong>Session cookies:</strong> Keep you logged in during your visit</li>
                  <li>• <strong>Security cookies:</strong> Protect against fraud and unauthorized access</li>
                  <li>• <strong>Load balancing cookies:</strong> Distribute website traffic efficiently</li>
                  <li>• <strong>Functionality cookies:</strong> Remember your language and region preferences</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-blue-600" />
                  Analytics Cookies
                </h3>
                <p className="text-[#5A5A5A] mb-4">
                  These cookies help us understand how visitors interact with our website by collecting anonymous information.
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• <strong>Google Analytics:</strong> Track website usage and performance</li>
                  <li>• <strong>Heat mapping:</strong> Understand user behavior and navigation patterns</li>
                  <li>• <strong>Performance monitoring:</strong> Identify and fix technical issues</li>
                  <li>• <strong>Conversion tracking:</strong> Measure the effectiveness of our marketing campaigns</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  Marketing Cookies
                </h3>
                <p className="text-[#5A5A5A] mb-4">
                  These cookies are used to deliver personalized advertisements and track the effectiveness of our marketing efforts.
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• <strong>Advertising cookies:</strong> Show relevant ads based on your interests</li>
                  <li>• <strong>Retargeting cookies:</strong> Remind you of our services across different websites</li>
                  <li>• <strong>Social media cookies:</strong> Enable social sharing and integration</li>
                  <li>• <strong>Email marketing cookies:</strong> Track email campaign effectiveness</li>
                </ul>
              </div>

              {/* Preference Cookies */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <Settings className="h-6 w-6 text-amber-600" />
                  Preference Cookies
                </h3>
                <p className="text-[#5A5A5A] mb-4">
                  These cookies remember your choices and preferences to provide a personalized experience.
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• <strong>Language preferences:</strong> Remember your preferred language</li>
                  <li>• <strong>Theme settings:</strong> Store your display preferences</li>
                  <li>• <strong>Form data:</strong> Remember information you've entered in forms</li>
                  <li>• <strong>Location settings:</strong> Remember your geographic preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Third-Party Cookies</h2>
            
            <div className="bg-[#FFE4D6]/10 rounded-xl p-8 border border-[#FFE4D6]/30">
              <p className="text-lg text-[#5A5A5A] mb-6">
                We use third-party services that may set their own cookies. These services help us provide better functionality and analytics:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2D2D2D]">Analytics Services</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• <strong>Google Analytics:</strong> Website traffic analysis</li>
                    <li>• <strong>Google Tag Manager:</strong> Tag management and tracking</li>
                    <li>• <strong>Hotjar:</strong> User behavior analysis</li>
                    <li>• <strong>Mixpanel:</strong> Event tracking and analytics</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2D2D2D]">Marketing Services</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• <strong>Facebook Pixel:</strong> Social media advertising</li>
                    <li>• <strong>LinkedIn Insight Tag:</strong> Professional network tracking</li>
                    <li>• <strong>Google Ads:</strong> Search and display advertising</li>
                    <li>• <strong>HubSpot:</strong> Marketing automation and CRM</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> Third-party cookies are subject to the privacy policies of their respective providers. 
                  We recommend reviewing their policies to understand how they handle your data.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#FF6B35]" />
              Managing Your Cookie Preferences
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl p-8 border border-[#FF6B35]/20">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Browser Settings</h3>
                <p className="text-[#5A5A5A] mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block third-party cookies</li>
                  <li>• Set up notifications when cookies are set</li>
                  <li>• Clear all cookies when you close your browser</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl p-8 border border-[#FF6B35]/20">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Cookie Consent</h3>
                <p className="text-[#5A5A5A] mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential cookies</li>
                  <li>• Customize your cookie preferences</li>
                  <li>• Learn more about our cookie usage</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl p-8 border border-[#FF6B35]/20">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Opt-Out Options</h3>
                <p className="text-[#5A5A5A] mb-4">
                  You can opt out of specific tracking services:
                </p>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• <strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#FF6B35] hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li>• <strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-[#FF6B35] hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                  <li>• <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/psettings/advertising" className="text-[#FF6B35] hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Ad Settings</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Cookie Duration</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#FFE4D6]/30 rounded-lg overflow-hidden">
                <thead className="bg-[#FF6B35]/10">
                  <tr>
                    <th className="border border-[#FFE4D6]/30 px-4 py-3 text-left text-[#2D2D2D] font-semibold">Cookie Type</th>
                    <th className="border border-[#FFE4D6]/30 px-4 py-3 text-left text-[#2D2D2D] font-semibold">Duration</th>
                    <th className="border border-[#FFE4D6]/30 px-4 py-3 text-left text-[#2D2D2D] font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Session Cookies</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Until browser closes</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Essential website functionality</td>
                  </tr>
                  <tr className="bg-[#FFE4D6]/5">
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Preference Cookies</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">1 year</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Remember user settings</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Analytics Cookies</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">2 years</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Website performance analysis</td>
                  </tr>
                  <tr className="bg-[#FFE4D6]/5">
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Marketing Cookies</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">1-2 years</td>
                    <td className="border border-[#FFE4D6]/30 px-4 py-3 text-[#5A5A5A]">Advertising and retargeting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-[#FF6B35]" />
              Impact of Disabling Cookies
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-600" />
                    What Happens If You Disable Cookies
                  </h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• Some website features may not work properly</li>
                    <li>• You may need to re-enter information repeatedly</li>
                    <li>• Personalized content and recommendations won't be available</li>
                    <li>• Shopping cart contents may not be saved</li>
                    <li>• Login sessions may not persist</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Essential Cookies Always Required
                  </h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li>• Website security and fraud prevention</li>
                    <li>• Basic website functionality</li>
                    <li>• Load balancing and performance</li>
                    <li>• Compliance with legal requirements</li>
                    <li>• User authentication and authorization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Updates to This Policy</h2>
            
            <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will:
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Update the "Last updated" date at the top of this policy</li>
                <li>• Notify you through our website or email</li>
                <li>• Request renewed consent if required by law</li>
                <li>• Provide clear information about the changes</li>
              </ul>
              <p>
                We encourage you to review this policy periodically to stay informed about our use of cookies and similar technologies.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Contact Us</h2>
            
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-xl p-8 border border-[#FF6B35]/20">
              <p className="text-lg text-[#5A5A5A] mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
