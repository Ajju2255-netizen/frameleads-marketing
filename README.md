# Frameleads Landing Page

A modern, responsive landing page for Frameleads - Bangalore's leading SEO agency. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏠 Home Page (`app/page.tsx`)

The main landing page that showcases Frameleads' SEO services and expertise. The page is structured with a dark theme and includes the following sections:

- **Navigation Bar** - Company logo and main navigation links
- **Hero Section** - Compelling headline and call-to-action
- **Brand Logos** - Trust indicators from client companies
- **Feature Cards** - Key service offerings
- **Services Steps** - 4-step process explanation
- **Testimonials** - Client success stories
- **Card Decks** - Detailed service descriptions
- **Footer** - Contact information and site links

## 🧩 Components

### Navigation (`app/components/navbar.tsx`)

**Purpose**: Main navigation bar with responsive design

**Features**:
- Company logo (Frameleads)
- Desktop navigation menu with links to Home, Service, Contact Us, and About
- Mobile-responsive hamburger menu
- Dark theme with gray color scheme
- Hover effects and smooth transitions

**Navigation Links**:
- Home (`/`)
- Service (`/service`)
- Contact Us (`/contact`)
- About (`/about`)

### Hero Section (`app/components/hero.tsx`)

**Purpose**: Main headline and primary call-to-action

**Content**:
- Eyebrow text: "🚀 #1 SEO Agency in Bangalore"
- Main headline: "Digital Marketing Agency That Rank Higher with Frameleads"
- Subheading explaining SEO benefits
- Primary CTA button: "Talk to Our Local SEO Specialists Today"
- Trust indicators: Free consultation, No long-term contracts, Proven results

**Design Elements**:
- Gradient text effects
- Red accent color for CTAs
- Green dots for trust indicators
- Responsive typography

### Brand Logos (`app/components/brand-logos.tsx`)

**Purpose**: Display client logos to build trust and credibility

**Features**:
- Grid layout with 6 client logos
- Hover effects with opacity changes
- Placeholder logos for TechCorp, StartupHub, DigitalFlow, InnovateLabs, GrowthCo, ScaleUp
- Trust statement: "Join 500+ businesses that have improved their search rankings"

**Layout**:
- 2 columns on mobile, 3 on tablet, 6 on desktop
- Gray background with subtle hover effects

### Feature Cards (`app/components/feature-cards.tsx`)

**Purpose**: Showcase key SEO services and capabilities

**Services Featured**:
1. **Advanced SEO Analytics** - Comprehensive analytics and reporting tools
2. **Strategic Keyword Research** - Data-driven keyword discovery
3. **Technical SEO Optimization** - Site speed and mobile optimization
4. **Content Strategy & Creation** - SEO-optimized content creation

**Design**:
- Card-based layout with images
- Hover effects with scale transforms
- Gradient overlays on images
- Call-to-action at bottom

### Services Steps (`app/components/services-steps.tsx`)

**Purpose**: Explain the 4-step process for scaling brands online

**Process Steps**:
1. **Market & Competitor Research** - Industry and audience analysis
2. **Performance Marketing Strategy** - Tailored paid ad funnels and SEO plans
3. **Ad Launch & Real-Time Optimization** - Google Ads, Meta Ads, YouTube campaigns
4. **Data Analytics, Scaling & Growth** - KPI tracking and campaign scaling

**Design Elements**:
- Large step numbers with opacity effects
- Alternating layout for visual interest
- Hover effects on step titles
- Bottom CTA for growth journey

### Testimonials (`app/components/testimonials.tsx`)

**Purpose**: Display client testimonials and success stories

**Testimonial Structure**:
- 5-star ratings
- Client photo and information
- Testimonial quote
- Client name, position, and company

**Featured Clients**:
- Rajesh Kumar (CEO, TechStart Solutions)
- Priya Sharma (Marketing Director, GrowthCorp)
- Amit Patel (Founder, DigitalEdge)
- Sneha Reddy (E-commerce Manager, StyleHub)
- Vikram Singh (Director, InnovateLabs)
- Kavya Nair (CMO, BrandBoost)
- Arjun Mehta (Owner, LocalBiz Pro)
- Deepika Joshi (Marketing Head, ScaleUp Inc)
- Rohit Gupta (Founder, NextGen Digital)

**Results Highlighted**:
- 300% organic traffic increase
- 250% lead generation growth
- First-page rankings
- 180% store visits increase
- 4x organic leads increase

### Card Decks (`app/components/card-decks.tsx`)

**Purpose**: Detailed service descriptions with visual elements

**Services Covered**:
1. **Local SEO Domination** - Rank #1 in local search results
2. **Technical SEO Excellence** - Fix technical issues that kill rankings
3. **Content Marketing Strategy** - Create content that ranks & converts

**Design Features**:
- Alternating left-right layout
- Large images with hover effects
- Eyebrow labels for each service
- Arrow icons in CTAs
- Bottom strategy call section

### Footer (`app/components/footer.tsx`)

**Purpose**: Complete site footer with contact information and navigation

**Sections**:
- **Company Information** - Logo, description, contact details
- **Services** - SEO, Local SEO, Technical SEO, Content Marketing, Google Ads, Social Media
- **Company** - About, Team, Case Studies, Blog, Careers, Contact
- **Resources** - SEO Guide, Free Audit, Tools, Webinars, Templates, FAQ
- **Newsletter Signup** - Email subscription form
- **Social Links** - Facebook, Twitter, LinkedIn, Instagram, YouTube

**Contact Information**:
- Address: Koramangala, Bangalore, Karnataka 560034
- Phone: +91 63628 21368
- Email: hello@frameleads.com

**Legal Links**:
- Privacy Policy
- Terms of Service
- Cookie Policy
- Disclaimer

## 🎨 Design System

### Color Scheme
- **Primary Background**: Gray-900 (#111827)
- **Secondary Background**: Gray-800 (#1f2937)
- **Accent Color**: Red-600 (#dc2626)
- **Text Colors**: White, Gray-300, Gray-400
- **Borders**: Gray-700, Gray-800

### Typography
- **Headings**: Bold, large sizes (4xl-7xl)
- **Body Text**: Regular weight, gray colors
- **Buttons**: Semibold, red background

### Interactive Elements
- Hover effects with color transitions
- Scale transforms on buttons
- Opacity changes on cards
- Smooth transitions (300ms duration)

## 🚀 Key Features

### SEO-Focused Content
- Local SEO emphasis for Bangalore market
- Technical SEO services
- Content marketing strategies
- Performance tracking and analytics

### Conversion Optimization
- Multiple call-to-action buttons
- Trust indicators and testimonials
- Free consultation offers
- Clear value propositions

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Flexible grid layouts
- Touch-friendly interactions

### Performance
- Next.js Image optimization
- Tailwind CSS for efficient styling
- Component-based architecture
- TypeScript for type safety

## 📱 Responsive Breakpoints

- **Mobile**: Default (320px+)
- **Tablet**: md (768px+)
- **Desktop**: lg (1024px+)
- **Large Desktop**: xl (1280px+)

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **Images**: Next.js Image component

## 📄 Additional Pages

The project includes additional pages that are referenced in the navigation:
- `/about` - About page
- `/contact` - Contact page
- `/service` - Service page
- `/seo-company-in-bangalore` - SEO company specific page

## 🎯 Target Audience

- **Primary**: Businesses in Bangalore seeking SEO services
- **Secondary**: Companies looking for digital marketing solutions
- **Tertiary**: Startups and established businesses wanting to improve online presence

## 💼 Business Focus

Frameleads positions itself as:
- Bangalore's #1 SEO agency
- Results-driven digital marketing
- Local SEO specialists
- Technical SEO experts
- Content marketing strategists

The landing page effectively communicates the company's expertise in SEO, local search optimization, and digital marketing while building trust through testimonials and client logos. 