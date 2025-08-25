import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"
import FloatingNotifications from "../components/floating-notifications"

export default function B2BMarketingCompanyBangalorePage() {
  const bangaloreBusinessDistricts = [
    {
      category: "Central Business District",
      areas: ["UB City", "Brigade Road", "Commercial Street", "MG Road", "Cunningham Road", "Richmond Town"]
    },
    {
      category: "IT Corridors", 
      areas: ["Electronic City", "Whitefield", "Marathahalli", "Sarjapur Road", "Outer Ring Road", "Bellandur"]
    },
    {
      category: "Emerging Business Hubs",
      areas: ["Koramangala", "Indiranagar", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar"]
    },
    {
      category: "Industrial Areas",
      areas: ["Peenya", "Bommanahalli", "Rajajinagar", "Yeshwanthpur", "Hebbal", "Yelahanka"]
    }
  ]

  const b2bServices = [
    {
      icon: Target,
      title: "B2B Lead Generation & Demand Generation",
      description: "Generate high-quality leads that convert to revenue with our comprehensive B2B lead generation strategies combining inbound and outbound marketing.",
      features: [
        "Account-Based Marketing (ABM) for high-value enterprise accounts",
        "LinkedIn Lead Generation targeting decision-makers",
        "Email Marketing Automation with nurture sequences",
        "Webinar & Event Marketing positioning thought leadership",
        "Database Development for targeted prospect lists"
      ],
      results: [
        "300+ qualified B2B leads generated monthly",
        "45% average email open rates (industry average: 21%)",
        "12% average conversion rate from lead to opportunity"
      ]
    },
    {
      icon: MessageSquare,
      title: "B2B Content Marketing & SEO Services",
      description: "Establish thought leadership and drive organic traffic with content that educates, engages, and converts B2B buyers while improving search visibility.",
      features: [
        "Technical Blog Content demonstrating expertise",
        "White Papers & Case Studies influencing purchase decisions",
        "Video Content Marketing with webinars and demos",
        "B2B SEO Optimization for technical SEO and keyword targeting",
        "Sales Enablement Content shortening sales cycles"
      ],
      results: [
        "400% average increase in organic B2B traffic within 6 months",
        "60% improvement in time-on-page for B2B content",
        "25% increase in demo requests from organic content"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation & Account-Based Marketing",
      description: "Scale personalized communication and target high-value accounts with sophisticated automation workflows and targeted account strategies.",
      features: [
        "Lead Scoring & Qualification systems",
        "Behavioral Trigger Campaigns with personalized follow-up",
        "Sales & Marketing Alignment with integrated workflows",
        "Customer Journey Mapping with multi-touch attribution",
        "ABM Platform Management for comprehensive execution"
      ],
      results: [
        "85% of generated leads convert to sales opportunities",
        "40% reduction in B2B sales cycle length",
        "200-500% increase in qualified sales pipeline"
      ]
    },
    {
      icon: Linkedin,
      title: "B2B Social Media & LinkedIn Marketing",
      description: "Build authority and generate leads on professional networks where B2B decision-makers actively engage and research solutions.",
      features: [
        "LinkedIn Marketing with company page optimization",
        "Twitter B2B Strategy for thought leadership",
        "YouTube Marketing with educational video content",
        "Industry Forums participation in professional communities",
        "Employee Advocacy programs for brand amplification"
      ],
      results: [
        "300% increase in LinkedIn engagement rates",
        "150% growth in social media-driven leads",
        "Enhanced brand authority in target industries"
      ]
    }
  ]

  const b2bProcess = [
    {
      step: "01",
      title: "Strategic Discovery & Market Analysis",
      description: "Deep dive into your business and market opportunity with comprehensive business audit, competitive intelligence, buyer persona development, and goal setting aligned with business growth."
    },
    {
      step: "02",
      title: "Multi-Channel Campaign Development",
      description: "Create integrated marketing campaigns that drive results through content strategy development, channel optimization, creative asset development, and technology stack setup."
    },
    {
      step: "03",
      title: "Lead Nurturing & Sales Enablement",
      description: "Convert prospects into sales-ready opportunities with lead nurturing workflows, sales enablement training, content personalization, and sales-marketing alignment."
    },
    {
      step: "04",
      title: "Performance Optimization & ROI Tracking",
      description: "Continuous improvement for maximum marketing ROI through advanced analytics, A/B testing, attribution modeling, and strategic planning for scaling successful campaigns."
    }
  ]

  const whyChooseB2B = [
    "Deep Local Knowledge: 5+ years serving Bangalore's diverse B2B ecosystem",
    "Industry Specialization: Proven success across SaaS, manufacturing, fintech, healthcare technology",
    "Decision-Maker Targeting: Expert at reaching C-level executives and procurement managers",
    "Regional Understanding: Comprehensive knowledge of Bangalore's business districts and industry clusters",
    "Lead Quality Excellence: 85% of generated leads convert to sales opportunities",
    "Shorter Sales Cycles: Average 40% reduction in B2B sales cycle length",
    "Pipeline Growth: Consistent 200-500% increase in qualified sales pipeline",
    "Revenue Impact: Average client revenue growth of 300% within first year"
  ]

  const b2bCaseStudies = [
    {
      industry: "SaaS Startup",
      location: "Koramangala",
      challenge: "Early-stage SaaS company needed to generate enterprise leads and establish market presence",
      solution: "Implemented comprehensive ABM strategy targeting Fortune 500 companies, combined with thought leadership content marketing",
      results: [
        "400% increase in qualified enterprise leads within 6 months",
        "$2.5M in pipeline generated in first year",
        "65% reduction in customer acquisition cost",
        "Series A funding secured based on strong growth metrics"
      ]
    },
    {
      industry: "Manufacturing Company",
      location: "Peenya Industrial Area",
      challenge: "Traditional B2B manufacturer needed digital transformation to reach new markets",
      solution: "Digital-first approach combining SEO, LinkedIn marketing, and trade publication content strategy",
      results: [
        "300% growth in online inquiries from new geographic markets",
        "150% increase in average deal size through better lead qualification",
        "International expansion into 3 new countries",
        "Industry recognition as innovation leader in digital adoption"
      ]
    },
    {
      industry: "Professional Services Firm",
      location: "UB City",
      challenge: "Consulting firm struggling to differentiate in crowded Bangalore market",
      solution: "Thought leadership strategy with industry-specific content and strategic LinkedIn presence",
      results: [
        "250% increase in inbound consultation requests",
        "Average project value increased by 180%",
        "C-level engagement improved across target accounts",
        "Industry speaking opportunities at major Bangalore conferences"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies",
      description: "Specialized expertise in marketing software solutions to enterprise buyers",
      services: [
        "Product positioning and differentiation strategies",
        "Technical content marketing and SEO",
        "Demo request optimization and sales funnel development",
        "Competitive intelligence and market analysis"
      ]
    },
    {
      icon: Briefcase,
      title: "Manufacturing & Industrial",
      description: "Helping traditional B2B manufacturers embrace digital marketing",
      services: [
        "Digital transformation and online presence development",
        "Supply chain partner marketing and B2B relationship building",
        "Technical product marketing and specification content",
        "Trade show integration and hybrid event marketing"
      ]
    },
    {
      icon: Users2,
      title: "Professional Services",
      description: "Positioning consulting, legal, and financial services for B2B growth",
      services: [
        "Thought leadership content and authority building",
        "Client case study development and success story marketing",
        "Referral program optimization and partner marketing",
        "Professional network expansion and relationship marketing"
      ]
    },
    {
      icon: Shield,
      title: "Healthcare Technology",
      description: "Navigating complex B2B healthcare sales and compliance requirements",
      services: [
        "Healthcare decision-maker targeting and persona development",
        "Compliance-focused content marketing and lead generation",
        "Medical conference marketing and industry event support",
        "ROI-focused campaigns for hospital and clinic administrators"
      ]
    },
    {
      icon: Globe,
      title: "Fintech & Financial Services",
      description: "Building trust and credibility in B2B financial technology marketing",
      services: [
        "Regulatory-compliant marketing strategies and content development",
        "Enterprise security and compliance messaging",
        "Financial services buyer journey optimization",
        "Partnership marketing and channel development"
      ]
    }
  ]

  const b2bFaqData = [
    {
      question: "How long does it take to see results from B2B digital marketing in Bangalore?",
      answer: "Most B2B businesses in Bangalore start seeing qualified leads within 30-60 days of campaign launch. However, significant ROI improvements typically occur within 3-6 months as campaigns optimize and sales cycles complete. Our clients average 200% ROI improvement within the first year."
    },
    {
      question: "What makes B2B marketing different from B2C marketing in Bangalore?",
      answer: "B2B marketing in Bangalore requires longer sales cycles, multiple decision-makers, higher-value transactions, and relationship-based selling. Our strategies focus on education, trust-building, and demonstrating clear business value rather than emotional appeals."
    },
    {
      question: "How do you measure B2B marketing success for Bangalore businesses?",
      answer: "We track comprehensive metrics including lead quality scores, cost per qualified lead, sales cycle length, pipeline value, customer lifetime value, and revenue attribution. Our dashboard provides real-time visibility into marketing ROI and business impact."
    },
    {
      question: "What industries do you specialize in for B2B marketing in Bangalore?",
      answer: "Our primary expertise includes SaaS and technology companies, manufacturing and industrial businesses, professional services firms, healthcare technology, and fintech companies. We understand the unique buying behaviors and decision-making processes in each sector."
    },
    {
      question: "Do you work with startups and large enterprises in Bangalore?",
      answer: "Yes, our B2B marketing strategies scale from early-stage startups seeking product-market fit to large enterprises optimizing existing marketing operations. We customize our approach based on company size, growth stage, and budget considerations."
    },
    {
      question: "How do you ensure marketing qualified leads convert to sales?",
      answer: "We implement lead scoring systems, sales enablement processes, and regular sales-marketing alignment meetings. Our average lead-to-opportunity conversion rate is 35% higher than industry benchmarks through careful qualification and nurturing processes."
    }
  ]

  return (
    <>
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingNotifications />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32">
        {/* Background Gradient Lines - Hero Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-xl text-red-300 px-6 py-3 rounded-full text-sm font-medium border border-red-500/30">
                🏆 Premier B2B Digital Marketing Agency
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Premier B2B Digital Marketing Agency in {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                Bangalore
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your B2B business growth with Bangalore's most results-driven digital marketing agency. Frameleads specializes in generating qualified leads, accelerating sales cycles, and driving measurable ROI for startups, SMEs, and enterprises across Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105">
                  Get Free B2B Marketing Audit
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>Call: +91 63628 21368</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>500% Average ROI Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>300+ Qualified Leads Monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>98% Client Retention Rate</span>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">🚀 Trusted by 500+ Bangalore B2B Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">500%</div>
                  <div className="text-gray-400 text-sm">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">300+</div>
                  <div className="text-gray-400 text-sm">Qualified Leads Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Years B2B Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 mb-2">98%</div>
                  <div className="text-gray-400 text-sm">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        {/* Background Gradient Lines - Diagonal Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Framel<span className="text-red-400">ad</span>s as Your B2B Marketing Partner in Bangalore?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                As Bangalore's leading B2B digital marketing agency, Frameleads understands the unique challenges facing business-to-business companies in India's Silicon Valley. Our data-driven approach combines deep market knowledge with cutting-edge marketing technology to deliver consistent, scalable growth for B2B businesses.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Bangalore B2B Market Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    whyChooseB2B[0],
                    whyChooseB2B[1],
                    whyChooseB2B[2],
                    whyChooseB2B[3],
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🏆 Proven B2B Marketing Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    whyChooseB2B[4],
                    whyChooseB2B[5],
                    whyChooseB2B[6],
                    whyChooseB2B[7],
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <Image
                src="/story/story-3.png"
                alt="B2B marketing results dashboard"
                fill
                className="shadow-2xl object-cover z-10"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/30 group-hover:ring-red-400/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services Section */}
      <section className="relative py-20">
        {/* Background Gradient Lines - Diamond Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500/15 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
          <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive B2B Digital Marketing Services in Bangalore
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized B2B marketing services are designed to generate qualified leads, accelerate sales cycles, and drive measurable ROI for Bangalore businesses across all industries.
            </p>
          </div>

          <div className="space-y-12">
            {b2bServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/25">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Services:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                  <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Results Delivered:</h4>
                            <ul className="space-y-2">
                              {service.results.map((result, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                  <BarChart3 className="h-4 w-4 text-red-500 flex-shrink-0" />
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* B2B Process Section */}
      <section className="relative py-20">
        {/* Background Gradient Lines - Hexagonal Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-red-500/20 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-red-500/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven B2B Marketing Process in Bangalore
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic B2B marketing approach specifically designed for Bangalore businesses, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bProcess.map((process, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve in Bangalore's B2B Market</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized expertise spans across key B2B industries in Bangalore, with deep understanding of unique buying behaviors and decision-making processes in each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">{industry.title}</h3>
                    <p className="text-gray-400 mb-6 text-center">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* B2B Case Studies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">B2B Marketing Success Stories from Bangalore Businesses</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped local Bangalore B2B businesses achieve remarkable growth through strategic digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {b2bCaseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{study.industry}</h3>
                    <p className="text-gray-400 text-sm mb-4">{study.location}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <BarChart3 className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Districts */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bangalore Business Districts We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive B2B marketing services across all major business districts in Bangalore, helping businesses in every area dominate their local market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bangaloreBusinessDistricts.map((district, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-4">{district.category}</h3>
                  <div className="space-y-2">
                    {district.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="text-gray-300 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions About B2B Digital Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about B2B marketing services in Bangalore and how Frameleads can help your business grow.
            </p>
          </div>

          <div className="space-y-6">
            {b2bFaqData.map((faq, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-slate-700/50 hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to Transform Your B2B Growth in Bangalore?"
        description="Partner with Frameleads, Bangalore's most trusted B2B digital marketing agency. Get your free audit and discover how we can help you generate qualified leads and accelerate sales growth."
        primaryButtonText="Get Free B2B Marketing Audit"
        secondaryButtonText="Schedule Strategy Call"
      />

      <Footer />
    </div>
    </>
  )
}
