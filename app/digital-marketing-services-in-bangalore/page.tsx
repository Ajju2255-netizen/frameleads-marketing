import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function RealEstateMarketingCompanyBangalorePage() {
  const bangaloreBusinessDistricts = [
    {
      category: "Central Business District (CBD)",
      areas: ["UB City", "Brigade Road", "Commercial Street", "MG Road", "Cunningham Road", "Richmond Town"],
      description: "Premium commercial areas for enterprise B2B marketing and corporate services"
    },
    {
      category: "IT Corridors & Tech Hubs", 
      areas: ["Electronic City", "Whitefield", "Marathahalli", "Sarjapur Road", "Outer Ring Road", "Bellandur"],
      description: "Technology and innovation centers for SaaS and software company marketing"
    },
    {
      category: "Emerging Business Hubs",
      areas: ["Koramangala", "Indiranagar", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar"],
      description: "Startup ecosystem and venture-backed company growth areas"
    },
    {
      category: "Residential & Mixed-Use Areas",
      areas: ["Banashankari", "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "Yelahanka"],
      description: "Local business and services digital transformation campaigns"
    }
  ]

  const performanceMarketingServices = [
    {
      icon: DollarSign,
      title: "Google Ads & PPC Management",
      description: "Strategic Google advertising excellence with advanced optimization for maximum ROI in Bangalore's competitive market.",
      features: [
        "Search Campaign Optimization for high-intent keywords",
        "Display Network campaigns targeting Bangalore demographics",
        "Shopping Ads management for e-commerce businesses",
        "YouTube Advertising for brand awareness and conversions",
        "Remarketing strategies to re-engage website visitors"
      ],
      results: [
        "300% improvement in Quality Score",
        "45% reduction in cost-per-click",
        "2.5x average return on ad spend (ROAS)"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Advertising & Paid Social",
      description: "Multi-platform social media performance marketing optimized for Bangalore audiences and business objectives.",
      features: [
        "Facebook & Instagram Ads optimized for Bangalore audiences",
        "LinkedIn B2B advertising for enterprise lead generation",
        "Twitter advertising for thought leadership and engagement",
        "TikTok and emerging platform early adoption strategies",
        "Cross-platform campaign integration and optimization"
      ],
      results: [
        "250% increase in social media conversions",
        "60% lower cost-per-acquisition",
        "400% improvement in engagement rates"
      ]
    },
    {
      icon: Settings,
      title: "Conversion Rate Optimization (CRO)",
      description: "Systematic website and landing page optimization to maximize conversions and improve user experience for Bangalore businesses.",
      features: [
        "Heat mapping and user behavior analysis",
        "A/B testing for headlines, CTAs, and page layouts",
        "Mobile optimization for Bangalore's mobile-first users",
        "Checkout process optimization for e-commerce",
        "Form optimization and lead capture improvement"
      ],
      results: [
        "85% average conversion rate improvement",
        "40% reduction in bounce rate",
        "300% increase in lead generation"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation & Lead Nurturing",
      description: "Intelligent campaign automation and lead nurturing systems to accelerate sales cycles and improve conversion rates.",
      features: [
        "Email marketing automation sequences",
        "Lead scoring and qualification systems",
        "Behavioral trigger campaigns",
        "Customer journey mapping and optimization",
        "CRM integration and sales enablement"
      ],
      results: [
        "300% increase in marketing qualified leads",
        "50% shorter sales cycles",
        "200% improvement in lead-to-customer conversion"
      ]
    },
    {
      icon: PieChart,
      title: "Analytics & Performance Tracking",
      description: "Advanced data analytics and reporting to provide complete visibility into campaign performance and ROI.",
      features: [
        "Google Analytics 4 implementation and optimization",
        "Custom dashboard creation for real-time insights",
        "Attribution modeling across all touchpoints",
        "ROI tracking and performance measurement",
        "Competitive intelligence and market analysis"
      ],
      results: [
        "100% visibility into campaign performance",
        "Data-driven decision making",
        "25% improvement in marketing efficiency"
      ]
    }
  ]

  const performanceMarketingProcess = [
    {
      step: "01",
      title: "Strategic Discovery & Market Analysis",
      description: "Comprehensive business and market audit including current performance analysis, competitive benchmarking, target audience research, and goal setting aligned with business objectives."
    },
    {
      step: "02",
      title: "Multi-Channel Campaign Development",
      description: "Integrated performance campaign strategy with platform-specific architecture, creative asset development, landing page creation, and tracking implementation."
    },
    {
      step: "03",
      title: "Campaign Launch & Optimization",
      description: "Data-driven campaign execution with real-time performance monitoring, A/B testing implementation, and weekly optimization cycles for maximum ROI."
    },
    {
      step: "04",
      title: "Scale & Performance Enhancement",
      description: "Continuous growth and optimization through campaign scaling, advanced automation implementation, and monthly strategic planning sessions."
    }
  ]

  const whyChoosePerformanceMarketing = [
    "Advanced Analytics & Attribution: Multi-touch attribution modeling and advanced performance tracking",
    "ROI-Focused Campaign Management: Every campaign optimized for measurable business outcomes",
    "Cross-Platform Integration: Seamless integration across Google Ads, Facebook, LinkedIn, and emerging platforms",
    "Conversion Rate Optimization: Systematic A/B testing and landing page optimization",
    "Real-time Performance Monitoring: 24/7 campaign monitoring and optimization",
    "Local Market Intelligence: 5+ years serving Bangalore's diverse business landscape",
    "Industry-Specific Expertise: Proven success across SaaS, e-commerce, real estate, healthcare, and fintech",
    "Startup Ecosystem Knowledge: Deep understanding of Bangalore's startup funding cycles and growth patterns"
  ]

  const performanceMarketingCaseStudies = [
    {
      industry: "SaaS Startup",
      location: "Koramangala Tech Hub",
      challenge: "Early-stage B2B SaaS needed to scale from 10 to 100 enterprise customers",
      solution: "Implemented multi-channel performance marketing with LinkedIn targeting, Google Ads, and content syndication",
      results: [
        "500% increase in enterprise demo requests within 6 months",
        "65% improvement in trial-to-paid conversion rate",
        "₹2.5 Cr annual recurring revenue growth",
        "3.2x return on advertising spend (ROAS)"
      ]
    },
    {
      industry: "E-commerce Fashion Brand",
      location: "Indiranagar",
      challenge: "D2C fashion brand struggling with high customer acquisition costs and low ROAS",
      solution: "Comprehensive performance marketing overhaul with dynamic product ads, influencer partnerships, and conversion optimization",
      results: [
        "400% increase in online sales volume",
        "50% reduction in customer acquisition cost",
        "4.8x return on advertising spend",
        "35% improvement in customer lifetime value"
      ]
    },
    {
      industry: "Real Estate Developer",
      location: "Whitefield",
      challenge: "Premium residential project needed qualified buyer leads in competitive Bangalore market",
      solution: "Geo-targeted performance campaigns with virtual tour integration and lead nurturing automation",
      results: [
        "350% increase in qualified property inquiries",
        "45% reduction in cost per qualified lead",
        "75% improvement in booking-to-sale conversion rate",
        "₹180 Cr in sales attributed to performance marketing"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Technology & SaaS Companies",
      description: "Transform your SaaS business with performance marketing strategies designed for Bangalore's thriving tech ecosystem.",
      services: [
        "B2B lead generation and enterprise sales enablement",
        "Free trial conversions and freemium model optimization",
        "Product-led growth and user acquisition campaigns",
        "Competitive intelligence and market positioning"
      ],
      results: "400% increase in qualified demo requests, 60% improvement in trial-to-paid conversion"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & D2C Brands",
      description: "Scale your online business with performance marketing campaigns optimized for Bangalore's digital-savvy consumers.",
      services: [
        "Shopping ads optimization and dynamic product ads",
        "Customer acquisition funnels and retention campaigns",
        "Mobile commerce optimization and app install campaigns",
        "Cross-border selling and international expansion"
      ],
      results: "350% increase in online sales, 40% improvement in return on ad spend (ROAS)"
    },
    {
      icon: Building2,
      title: "Real Estate & Property Development",
      description: "Connect with Bangalore's property buyers through targeted performance campaigns and virtual tour integration.",
      services: [
        "Property listing optimization and buyer persona targeting",
        "Virtual tour integration and immersive experiences",
        "Luxury property marketing and affordable housing campaigns",
        "Commercial real estate lead generation"
      ],
      results: "300% increase in property inquiries, 50% reduction in cost per qualified lead"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Drive patient acquisition for Bangalore's healthcare providers through compliant, results-driven performance marketing.",
      services: [
        "Patient acquisition campaigns and appointment booking optimization",
        "Telemedicine promotion and healthcare app marketing",
        "Hospital marketing and clinic promotion campaigns",
        "Wellness and fitness industry digital transformation"
      ],
      results: "250% increase in appointment bookings, 45% improvement in patient acquisition cost"
    },
    {
      icon: GraduationCap,
      title: "Education & Ed-Tech",
      description: "Maximize enrollment for Bangalore's educational institutions and ed-tech platforms with targeted performance marketing.",
      services: [
        "Student acquisition campaigns and course promotion",
        "Parent targeting for K-12 and higher education",
        "Ed-tech platform growth and user acquisition",
        "Professional certification and skill development marketing"
      ],
      results: "400% increase in course enrollments, 35% reduction in student acquisition cost"
    }
  ]

  const performanceMarketingFaqData = [
    {
      question: "What makes performance marketing different from traditional digital marketing in Bangalore?",
      answer: "Performance marketing focuses exclusively on measurable results and ROI. Unlike brand-focused digital marketing, every campaign element is optimized for specific actions like leads, sales, or app downloads. In Bangalore's competitive market, this approach ensures maximum efficiency of your marketing budget."
    },
    {
      question: "How quickly can I see results from performance marketing campaigns?",
      answer: "Typical performance marketing campaigns in Bangalore show initial results within 2-4 weeks, with significant optimization occurring by month 3. However, complex B2B campaigns or highly competitive markets may require 6-8 weeks for full optimization. We provide weekly performance updates to track progress."
    },
    {
      question: "What budget should I allocate for performance marketing in Bangalore?",
      answer: "Minimum effective monthly ad spend ranges from ₹50,000 for local businesses to ₹5 lakhs+ for enterprise campaigns. Our management fees typically range from 15-20% of ad spend, depending on campaign complexity and services included."
    },
    {
      question: "Do you work with startups and early-stage companies in Bangalore?",
      answer: "Absolutely! Bangalore's startup ecosystem is a core focus area. We offer flexible engagement models for early-stage companies, including performance-based pricing and growth-stage packages designed for startups in Koramangala, Indiranagar, and other startup hubs."
    },
    {
      question: "How do you measure performance marketing success for Bangalore businesses?",
      answer: "We track comprehensive metrics including cost per acquisition (CPA), return on advertising spend (ROAS), conversion rates, customer lifetime value (CLV), and attribution across all touchpoints. Monthly reports include business impact analysis and recommendations for optimization."
    },
    {
      question: "Which platforms do you specialize in for performance marketing?",
      answer: "Our expertise spans Google Ads (Search, Display, Shopping, YouTube), Facebook & Instagram advertising, LinkedIn marketing, Twitter promotions, and emerging platforms. Platform selection depends on your target audience behavior and business objectives in the Bangalore market."
    },
    {
      question: "Can you help optimize our existing performance marketing campaigns?",
      answer: "Yes, we offer campaign audit and optimization services for existing campaigns. Our 30-day performance audit identifies optimization opportunities and provides actionable recommendations for immediate improvement in campaign performance."
    },
    {
      question: "Do you provide performance marketing training for our internal team?",
      answer: "We offer comprehensive performance marketing training programs for Bangalore businesses, including Google Ads certification guidance, Facebook Blueprint training, and custom workshops for your marketing team. Training can be conducted at your office or our Koramangala facility."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Frameleads - Performance Marketing Agency",
        "description": "Leading performance marketing agency in Bangalore delivering 400% ROI growth. Expert Google Ads, Facebook Ads & conversion optimization.",
        "url": "https://frameleads.com/performance-marketing-company-in-bangalore",
        "telephone": "+91-63628-21368",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Koramangala",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560034",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": "Bangalore",
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "sameAs": [
          "https://linkedin.com/company/frameleads",
          "https://twitter.com/frameleads"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": performanceMarketingFaqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "WebSite",
        "url": "https://frameleads.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://frameleads.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
                🏆 #1 Performance Marketing Agency in Bangalore
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Premier Performance Marketing Agency in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Bangalore
              </span>{" "}
              Delivering 500% ROI Growth
            </h1>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your digital advertising with Bangalore's most trusted performance marketing agency. We specialize in data-driven campaigns that deliver measurable results for startups, SMEs, and enterprises across Bangalore's business ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Free Performance Marketing Audit
                </Button>
              </Link>
              <Link href="#case-studies">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg">
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>500% Average ROI Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>300+ Qualified Leads Monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>98% Client Retention Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>5+ Years Serving Bangalore Businesses</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">🚀 Trusted by 500+ Bangalore Businesses</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">1000+</div>
                  <div className="text-gray-400 text-sm">Successful Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">₹50 Cr+</div>
                  <div className="text-gray-400 text-sm">Ad Spend Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">85%</div>
                  <div className="text-gray-400 text-sm">Avg Conversion Rate Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
                  <div className="text-gray-400 text-sm">Reduction in Customer Acquisition Cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Frameleads as Your Performance Marketing Partner in Bangalore?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Frameleads stands as Bangalore's premier performance marketing agency, combining deep local market knowledge with cutting-edge digital advertising expertise. Our data-driven approach ensures every rupee of your marketing budget delivers maximum return on investment.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Performance Marketing Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Advanced Analytics & Attribution: Multi-touch attribution modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">ROI-Focused Campaign Management: Measurable business outcomes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Cross-Platform Integration: Google Ads, Facebook, LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Conversion Rate Optimization: Systematic A/B testing</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🏆 Bangalore Market Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Local Market Intelligence: 5+ years serving Bangalore's diverse business landscape</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Industry-Specific Expertise: SaaS, e-commerce, real estate, healthcare, fintech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Startup Ecosystem Knowledge: Deep understanding of Bangalore's startup funding cycles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Regional Targeting Excellence: Hyper-local targeting for Bangalore suburbs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/story/story-3.png"
                alt="Performance marketing results dashboard"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Marketing Services Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Performance Marketing Services in Bangalore
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our specialized performance marketing services are designed to deliver measurable ROI and drive business growth for Bangalore businesses across all industries.
            </p>
          </div>

          <div className="space-y-12">
            {performanceMarketingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
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
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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

      {/* Performance Marketing Process Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven Performance Marketing Process in Bangalore
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a systematic performance marketing approach specifically designed for Bangalore businesses, combining strategic planning, execution excellence, and continuous optimization to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMarketingProcess.map((process, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve in Bangalore's Performance Marketing Landscape</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our specialized expertise spans across key industries in Bangalore, with deep understanding of unique performance marketing needs and business objectives in each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">{industry.title}</h3>
                    <p className="text-gray-400 mb-6 text-center">{industry.description}</p>
                    <ul className="space-y-2 mb-4">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-700 rounded-lg p-3 mt-4">
                      <p className="text-green-400 text-sm font-semibold text-center">{industry.results}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Marketing Case Studies */}
      <section id="case-studies" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Performance Marketing Success Stories from Bangalore Businesses</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped local Bangalore businesses achieve remarkable growth through strategic performance marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {performanceMarketingCaseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
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
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bangalore Business Districts We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide comprehensive performance marketing services across all major business districts in Bangalore, helping businesses in every area maximize their digital advertising ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bangaloreBusinessDistricts.map((district, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{district.category}</h3>
                  <p className="text-gray-400 text-sm mb-4">{district.description}</p>
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
      <section className="bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions About Performance Marketing in Bangalore
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about performance marketing services in Bangalore and how Frameleads can help your business achieve measurable results.
            </p>
          </div>

          <div className="space-y-6">
            {performanceMarketingFaqData.map((faq, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
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
        title="Ready to Transform Your Performance Marketing in Bangalore?"
        description="Partner with Frameleads, Bangalore's most trusted performance marketing agency. Get your free audit and discover how we can help you achieve measurable ROI and business growth."
        primaryButtonText="Get Free Performance Marketing Audit"
        secondaryButtonText="Schedule Strategy Call"
      />

      <Footer />
    </div>
    </>
  )
}
