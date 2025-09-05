import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Image from "next/image"
import Link from "next/link"
import FloatingNotifications from "../../components/floating-notifications"
import { 
  Search, 
  Target, 
  Share2, 
  FileText, 
  Mail, 
  Palette, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Download,
  ExternalLink,
  Star,
  Award,
  Zap,
  Shield,
  Clock,
  DollarSign
} from "lucide-react"

export const metadata = {
  title: "Complete Digital Marketing Guide 2025 | Frameleads",
  description: "Master digital marketing with our comprehensive guide covering SEO, PPC, social media, content marketing, and more. Expert strategies for 2025 success.",
}

export default function DigitalMarketingGuidePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction to Digital Marketing" },
    { id: "why-matters", title: "Why Digital Marketing Matters in 2025" },
    { id: "core-channels", title: "Core Channels of Digital Marketing" },
    { id: "strategy-framework", title: "Digital Marketing Strategy Framework" },
    { id: "tools-platforms", title: "Tools & Platforms" },
    { id: "industry-specific", title: "Industry-Specific Strategies" },
    { id: "global-perspectives", title: "Global & Local Perspectives" },
    { id: "case-studies", title: "Case Studies & Examples" },
    { id: "faq", title: "Frequently Asked Questions" }
  ]

  const coreChannels = [
    {
      icon: Search,
      title: "SEO (Search Engine Optimization)",
      description: "Improve your website's visibility in organic search results",
      keyPoints: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
      tools: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog"]
    },
    {
      icon: Target,
      title: "PPC / Performance Marketing",
      description: "Drive targeted traffic through paid advertising campaigns",
      keyPoints: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign Optimization"],
      tools: ["Google Ads", "Facebook Ads Manager", "LinkedIn Campaign Manager", "Google Analytics"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience",
      keyPoints: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Commerce"],
      tools: ["Hootsuite", "Buffer", "Canva", "Sprout Social"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Create valuable content to attract and retain customers",
      keyPoints: ["Blog Writing", "Video Content", "Infographics", "E-books"],
      tools: ["WordPress", "Canva", "Loom", "Mailchimp"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships",
      keyPoints: ["Email Automation", "Segmentation", "A/B Testing", "Personalization"],
      tools: ["Mailchimp", "HubSpot", "ConvertKit", "ActiveCampaign"]
    },
    {
      icon: Palette,
      title: "Branding & Creative Services",
      description: "Develop a strong brand identity and visual presence",
      keyPoints: ["Logo Design", "Brand Guidelines", "Visual Identity", "Creative Campaigns"],
      tools: ["Adobe Creative Suite", "Figma", "Canva", "Sketch"]
    }
  ]

  const toolsPlatforms = [
    { name: "Google Ads", category: "PPC", description: "Search and display advertising platform" },
    { name: "SEMrush", category: "SEO", description: "Comprehensive SEO and marketing toolkit" },
    { name: "DataForSEO", category: "SEO", description: "Advanced SEO data and API services" },
    { name: "Meta Ads", category: "Social", description: "Facebook and Instagram advertising" },
    { name: "HubSpot", category: "CRM", description: "All-in-one marketing automation platform" },
    { name: "Google Analytics", category: "Analytics", description: "Website traffic and behavior analysis" },
    { name: "Ahrefs", category: "SEO", description: "SEO tools and backlink analysis" },
    { name: "Mailchimp", category: "Email", description: "Email marketing and automation" }
  ]

  const industryStrategies = [
    {
      industry: "SaaS",
      focus: "Lead Generation & Conversion",
      strategies: ["Content Marketing", "SEO for SaaS", "Product-Led Growth", "Customer Success"],
      channels: ["Google Ads", "LinkedIn", "Content Hub", "Email Nurturing"]
    },
    {
      industry: "E-commerce",
      focus: "Sales & Customer Acquisition",
      strategies: ["Product SEO", "Shopping Ads", "Social Commerce", "Retargeting"],
      channels: ["Google Shopping", "Facebook Ads", "Instagram", "Amazon Ads"]
    },
    {
      industry: "Fashion",
      focus: "Brand Awareness & Visual Content",
      strategies: ["Influencer Marketing", "Visual Content", "Social Commerce", "Brand Storytelling"],
      channels: ["Instagram", "TikTok", "Pinterest", "YouTube"]
    },
    {
      industry: "Real Estate",
      focus: "Local SEO & Lead Generation",
      strategies: ["Local SEO", "Virtual Tours", "Lead Nurturing", "Community Building"],
      channels: ["Google My Business", "Facebook", "YouTube", "Zillow"]
    },
    {
      industry: "Healthcare",
      focus: "Trust & Compliance",
      strategies: ["Educational Content", "Local SEO", "Patient Reviews", "HIPAA Compliance"],
      channels: ["Google Ads", "Facebook", "YouTube", "Medical Directories"]
    },
    {
      industry: "Finance",
      focus: "Trust & Lead Quality",
      strategies: ["Educational Content", "Lead Scoring", "Compliance Marketing", "Thought Leadership"],
      channels: ["LinkedIn", "Google Ads", "Content Marketing", "Webinars"]
    }
  ]

  const globalPerspectives = [
    {
      region: "USA",
      characteristics: "Data-driven, privacy-focused, mobile-first",
      trends: ["Privacy-first marketing", "AI automation", "Voice search", "Video content"],
      platforms: ["Google", "Facebook", "LinkedIn", "TikTok"]
    },
    {
      region: "India",
      characteristics: "Mobile-heavy, vernacular content, price-sensitive",
      trends: ["Regional language content", "Mobile payments", "Video marketing", "WhatsApp Business"],
      platforms: ["Google", "Facebook", "Instagram", "YouTube"]
    },
    {
      region: "UAE",
      characteristics: "Multilingual, luxury-focused, B2B heavy",
      trends: ["Arabic content", "Luxury marketing", "B2B networking", "Influencer partnerships"],
      platforms: ["Google", "Facebook", "LinkedIn", "Snapchat"]
    },
    {
      region: "UK",
      characteristics: "GDPR-compliant, content-rich, B2B focused",
      trends: ["GDPR compliance", "Content marketing", "B2B automation", "Sustainability"],
      platforms: ["Google", "Facebook", "LinkedIn", "Twitter"]
    }
  ]

  const caseStudies = [
    {
      title: "SaaS Company: 300% Lead Increase",
      industry: "SaaS",
      challenge: "Low organic visibility and poor lead quality",
      solution: "Comprehensive SEO + Content Marketing + PPC",
      results: ["300% increase in qualified leads", "150% improvement in organic traffic", "40% reduction in cost per lead"],
      timeline: "6 months"
    },
    {
      title: "E-commerce Store: 5x Revenue Growth",
      industry: "E-commerce",
      challenge: "Low conversion rates and high acquisition costs",
      solution: "Google Shopping + Social Commerce + Email Automation",
      results: ["5x increase in revenue", "60% improvement in conversion rate", "35% reduction in CAC"],
      timeline: "8 months"
    },
    {
      title: "Local Business: #1 Local Rankings",
      industry: "Local Services",
      challenge: "Poor local visibility and low online presence",
      solution: "Local SEO + Google My Business + Review Management",
      results: ["#1 rankings for 15+ keywords", "200% increase in local calls", "4.8-star average rating"],
      timeline: "4 months"
    }
  ]

  const faqs = [
    {
      question: "What is the most effective digital marketing channel?",
      answer: "The most effective channel depends on your business goals, target audience, and industry. However, SEO typically provides the best long-term ROI, while PPC offers immediate results. A combination of multiple channels usually works best."
    },
    {
      question: "How much should I budget for digital marketing?",
      answer: "Digital marketing budgets typically range from 5-15% of total revenue for established businesses, or 10-20% for startups. Start with a test budget of $2,000-5,000 per month and scale based on performance."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "PPC campaigns can show results within days, while SEO typically takes 3-6 months for initial improvements and 6-12 months for significant results. Social media and content marketing usually show engagement improvements within 1-3 months."
    },
    {
      question: "Should I focus on global or local digital marketing?",
      answer: "This depends on your business model. If you serve local customers, prioritize local SEO and geo-targeted campaigns. For online businesses, focus on global reach with localized content for different markets."
    },
    {
      question: "What's the difference between SEO and PPC?",
      answer: "SEO (Search Engine Optimization) focuses on improving organic search rankings through content, technical optimization, and link building. PPC (Pay-Per-Click) involves paid advertising where you pay for each click on your ads."
    },
    {
      question: "How do I measure digital marketing success?",
      answer: "Key metrics include website traffic, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), organic rankings, social engagement, and revenue attribution. Use tools like Google Analytics, Google Search Console, and platform-specific analytics."
    },
    {
      question: "What are the latest digital marketing trends for 2025?",
      answer: "Key trends include AI-powered marketing automation, voice search optimization, video content dominance, privacy-first marketing, personalization at scale, and the continued growth of social commerce and influencer marketing."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative pb-48">
      <FloatingNotifications />
      
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlays */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFE4D6]/20 to-[#FFCAB0]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#FFCAB0]/15 to-[#FFE4D6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#FFE4D6]/10 to-[#FFCAB0]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Organic dotted patterns */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF6B35]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#FF8A50]/25 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-[#FF6B35]/30 rounded-full animate-bounce delay-2000"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FFE4D6]/30 rounded-sm rotate-45 animate-spin"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFCAB0]/25 rounded-full animate-pulse"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-28" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                📚 Complete Digital Marketing Guide 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              The Complete Digital Marketing Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Master every aspect of digital marketing with our comprehensive guide. From SEO and PPC to social media and content marketing - everything you need to succeed in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#introduction" className="inline-block">
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">
                  Start Reading
                </span>
              </Link>
              <Link href="/contact" className="inline-block">
                <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Get Free Consultation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tocSections.map((section, index) => (
                <Link key={index} href={`#${section.id}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FF6B35]/10 transition-colors duration-300">
                  <span className="text-[#FF6B35] font-semibold">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-gray-700">{section.title}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Introduction to Digital Marketing</h2>
            <p className="text-xl text-gray-600">Understanding the foundation of modern marketing</p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Digital marketing encompasses all marketing efforts that use electronic devices or the internet. Businesses leverage digital channels such as <Link href="/seo-services" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">search engines</Link>, <Link href="/Social-media-marketing" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">social media</Link>, <Link href="/content-marketing" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">email</Link>, and websites to connect with current and prospective customers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Unlike traditional marketing, digital marketing allows for real-time interaction, precise targeting, and measurable results. This makes it not just more cost-effective, but also more accountable and data-driven than traditional marketing methods. Learn more about our <Link href="/digital-marketing-services" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">comprehensive digital marketing services</Link>.
            </p>
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-2xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of Digital Marketing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective</h4>
                    <p className="text-gray-600">Lower cost per acquisition compared to traditional marketing. Our <Link href="/ppc-management" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">PPC management services</Link> help optimize your ad spend.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Measurable Results</h4>
                    <p className="text-gray-600">Track and measure every aspect of your campaigns with detailed <Link href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">Google Analytics</Link> reporting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-gray-600">Connect with customers worldwide 24/7. We serve clients in <Link href="/digital-marketing-in-dubai" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">Dubai</Link>, <Link href="/digital-marketing-in-bangalore" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">Bangalore</Link>, and globally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalization</h4>
                    <p className="text-gray-600">Deliver targeted messages to specific audiences through our <Link href="/content-marketing" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">content marketing strategies</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Matters in 2025 */}
      <section id="why-matters" className="relative py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Digital Marketing Matters in 2025</h2>
            <p className="text-xl text-gray-600">The landscape is evolving rapidly - here's what you need to know</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$4.7 Trillion</h3>
              <p className="text-gray-600">Global digital marketing spend by 2025</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4.9 Billion</h3>
              <p className="text-gray-600">Active internet users worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3.5x ROI</h3>
              <p className="text-gray-600">Average return on digital marketing investment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Trends Shaping 2025</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Marketing</h4>
                    <p className="text-gray-600">Automation and personalization at scale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Privacy-First Marketing</h4>
                    <p className="text-gray-600">Adapting to new privacy regulations and cookie-less future</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Voice Search Optimization</h4>
                    <p className="text-gray-600">Optimizing for voice assistants and smart speakers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Commerce</h4>
                    <p className="text-gray-600">Shopping directly through social media platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges to Overcome</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Ad Fatigue</h4>
                  <p className="text-red-700 text-sm">Consumers are becoming immune to traditional advertising</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Platform Changes</h4>
                  <p className="text-yellow-700 text-sm">Frequent algorithm updates affecting reach and visibility</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Data Privacy</h4>
                  <p className="text-blue-700 text-sm">Stricter regulations limiting data collection and usage</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Competition</h4>
                  <p className="text-green-700 text-sm">Increasing competition for attention and market share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Channels of Digital Marketing */}
      <section id="core-channels" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Channels of Digital Marketing</h2>
            <p className="text-xl text-gray-600">Master these essential channels for comprehensive digital success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{channel.title}</h3>
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  
                  {channel.title === "SEO (Search Engine Optimization)" && (
                    <p className="text-sm text-[#FF6B35] mb-4">
                      <Link href="/seo-services" className="hover:text-[#FF8A50] font-medium">Explore our SEO services →</Link>
                    </p>
                  )}
                  {channel.title === "PPC / Performance Marketing" && (
                    <p className="text-sm text-[#FF6B35] mb-4">
                      <Link href="/ppc-management" className="hover:text-[#FF8A50] font-medium">Learn about our PPC management →</Link>
                    </p>
                  )}
                  {channel.title === "Social Media Marketing" && (
                    <p className="text-sm text-[#FF6B35] mb-4">
                      <Link href="/Social-media-marketing" className="hover:text-[#FF8A50] font-medium">Discover our social media strategies →</Link>
                    </p>
                  )}
                  {channel.title === "Content Marketing" && (
                    <p className="text-sm text-[#FF6B35] mb-4">
                      <Link href="/content-marketing" className="hover:text-[#FF8A50] font-medium">See our content marketing approach →</Link>
                    </p>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {channel.keyPoints.map((point, idx) => (
                        <span key={idx} className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {channel.tools.map((tool, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Digital Marketing Strategy Framework */}
      <section id="strategy-framework" className="relative py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Digital Marketing Strategy Framework</h2>
            <p className="text-xl text-gray-600">A step-by-step approach to building your digital marketing strategy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research & Analysis", description: "Audit current performance, analyze competitors, identify opportunities" },
              { step: "02", title: "Goal Setting", description: "Define SMART objectives, KPIs, and success metrics" },
              { step: "03", title: "Strategy Development", description: "Choose channels, create content calendar, allocate budget" },
              { step: "04", title: "Implementation", description: "Execute campaigns, monitor performance, optimize continuously" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Strategy Framework Visual</h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">Interactive Strategy Framework Diagram</p>
                <p className="text-sm">Visual representation of the complete digital marketing strategy process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section id="tools-platforms" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Essential Tools & Platforms</h2>
            <p className="text-xl text-gray-600">The must-have tools for every digital marketer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsPlatforms.map((tool, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {tool.name === "Google Ads" ? (
                      <Link href="https://ads.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "SEMrush" ? (
                      <Link href="https://www.semrush.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "DataForSEO" ? (
                      <Link href="https://dataforseo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "Meta Ads" ? (
                      <Link href="https://www.facebook.com/business/ads" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "HubSpot" ? (
                      <Link href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "Google Analytics" ? (
                      <Link href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "Ahrefs" ? (
                      <Link href="https://ahrefs.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : tool.name === "Mailchimp" ? (
                      <Link href="https://mailchimp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35]">
                        {tool.name} <ExternalLink className="h-3 w-3 inline ml-1" />
                      </Link>
                    ) : (
                      tool.name
                    )}
                  </h3>
                  <p className="text-sm text-[#FF6B35] mb-3">{tool.category}</p>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategies */}
      <section id="industry-specific" className="relative py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industry-Specific Digital Marketing</h2>
            <p className="text-xl text-gray-600">Tailored strategies for different industries and business models</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStrategies.map((industry, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#FF6B35] mb-2">Primary Focus:</h4>
                  <p className="text-gray-600">{industry.focus}</p>
                  {industry.industry === "Real Estate" && (
                    <p className="text-sm text-[#FF6B35] mt-2">
                      <Link href="/real-estate-marketing-company-in-bangalore" className="hover:text-[#FF8A50] font-medium">See our real estate marketing services →</Link>
                    </p>
                  )}
                  {industry.industry === "E-commerce" && (
                    <p className="text-sm text-[#FF6B35] mt-2">
                      <Link href="/digital-marketing-services" className="hover:text-[#FF8A50] font-medium">Explore our e-commerce solutions →</Link>
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Strategies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.strategies.map((strategy, idx) => (
                      <span key={idx} className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm">
                        {strategy}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Channels:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.channels.map((channel, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global & Local Perspectives */}
      <section id="global-perspectives" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Global & Local Perspectives</h2>
            <p className="text-xl text-gray-600">Understanding regional differences in digital marketing approaches</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalPerspectives.map((region, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{region.region}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[#FF6B35] mb-2">Market Characteristics:</h4>
                  <p className="text-gray-600">{region.characteristics}</p>
                  {region.region === "India" && (
                    <p className="text-sm text-[#FF6B35] mt-2">
                      <Link href="/digital-marketing-in-bangalore" className="hover:text-[#FF8A50] font-medium">Our Bangalore digital marketing services →</Link>
                    </p>
                  )}
                  {region.region === "UAE" && (
                    <p className="text-sm text-[#FF6B35] mt-2">
                      <Link href="/digital-marketing-in-dubai" className="hover:text-[#FF8A50] font-medium">Our Dubai digital marketing expertise →</Link>
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Trends:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.trends.map((trend, idx) => (
                      <span key={idx} className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm">
                        {trend}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Platforms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies & Examples</h2>
            <p className="text-xl text-gray-600">Real-world examples of successful digital marketing strategies</p>
          </div>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {study.timeline}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#FF6B35]" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about digital marketing answered</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Digital Marketing?</h2>
                      <p className="text-xl text-gray-600 mb-8">
              Get a free consultation and discover how our <Link href="/our-team" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">expert team</Link> can help you achieve your digital marketing goals. Learn more about our <Link href="/about" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">company</Link> and <Link href="/academy" className="text-[#FF6B35] hover:text-[#FF8A50] font-medium">training programs</Link>.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">
                Book Free Consultation
              </span>
            </Link>
            <Link href="/about" className="inline-block">
              <span className="inline-flex items-center justify-center border border-[#FF6B35]/40 text-gray-700 hover:text-[#FF6B35] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Learn About Our Team
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
