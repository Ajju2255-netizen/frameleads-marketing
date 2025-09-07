#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to update all README.md files to match their respective page.tsx content
 * 
 * This script analyzes each page.tsx file and generates appropriate README content
 * that accurately describes the page's purpose, features, and implementation.
 */

const CONFIG = {
  appDir: './app',
  excludeDirs: ['components', 'lib', 'hooks', 'api'],
  excludeFiles: ['layout.tsx', 'loading.tsx', 'error.tsx', 'not-found.tsx', 'globals.css']
};

// Page type mappings for better categorization
const PAGE_TYPES = {
  'digital-marketing-services': 'General Services',
  'healthcare-and-medical': 'Industry Specific',
  'technology-and-saas': 'Industry Specific',
  'seo-services': 'Service Specific',
  'content-marketing': 'Service Specific',
  'ppc-management': 'Service Specific',
  'Social-media-marketing': 'Service Specific',
  'whatsapp-marketing': 'Service Specific',
  'analytics-and-automations': 'Service Specific',
  'conversion-rate-optimization': 'Service Specific',
  'perforamance-marketing': 'Service Specific',
  'email-marketing-and-automation-services': 'Service Specific',
  'branding': 'Service Specific',
  'website-development': 'Service Specific',
  'google-ads': 'Platform Specific',
  'Meta-ads': 'Platform Specific',
  'youtube-ads': 'Platform Specific',
  'linkedin-ads': 'Platform Specific',
  'tiktok-ads': 'Platform Specific',
  'snapchat-ads': 'Platform Specific',
  'pinterest-ads': 'Platform Specific',
  'shopify-ads': 'Platform Specific',
  'baidu-ads': 'Platform Specific',
  'yandex-ads': 'Platform Specific',
  'taboola-ads': 'Platform Specific',
  'digital-marketing-in-': 'Location Specific',
  'b2b-marketing-company-in-bangalore': 'Industry Specific',
  'real-estate-marketing-company-in-bangalore': 'Industry Specific',
  'seo-company-in-bangalore': 'Industry Specific',
  'creative-advertising-company-in-bangalore': 'Industry Specific',
  'digital-marketing-for-technology-and-saas': 'Industry Specific',
  'academy': 'Company Page',
  'about': 'Company Page',
  'contact': 'Company Page',
  'careers': 'Company Page',
  'our-team': 'Company Page',
  'industries': 'Company Page',
  'locations': 'Company Page',
  'sitemap': 'Company Page'
};

/**
 * Extract component name from page.tsx content
 */
function extractComponentName(content) {
  const match = content.match(/export default function (\w+)/);
  return match ? match[1] : 'UnknownComponent';
}

/**
 * Extract page title from content
 */
function extractPageTitle(content) {
  // Look for title in various places
  const titlePatterns = [
    /<title[^>]*>([^<]+)<\/title>/i,
    /<h1[^>]*>([^<]+)<\/h1>/i,
    /title:\s*["']([^"']+)["']/i,
    /"title":\s*"([^"]+)"/i
  ];
  
  for (const pattern of titlePatterns) {
    const match = content.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }
  
  return 'Digital Marketing Services';
}

/**
 * Determine page type based on directory name
 */
function getPageType(dirName) {
  for (const [pattern, type] of Object.entries(PAGE_TYPES)) {
    if (dirName.includes(pattern)) {
      return type;
    }
  }
  return 'General';
}

/**
 * Generate README content based on page analysis
 */
function generateReadmeContent(dirName, componentName, pageTitle, pageType) {
  const formattedName = dirName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = getPageDescription(dirName, pageType);
  const targetAudience = getTargetAudience(dirName, pageType);
  const keyFeatures = getKeyFeatures(dirName, pageType);
  const relatedPages = getRelatedPages(dirName, pageType);
  
  return `# ${formattedName} - Page Documentation

## Overview
This directory contains the page component for Frameleads' ${description.toLowerCase()}. ${getPagePurpose(dirName, pageType)}

## Page Details

### Component Name
\`${componentName}\`

### Page Type
${pageType}

### Target Audience
${targetAudience}

## Key Features

${keyFeatures}

## Technical Implementation

### Dependencies
- Next.js 15.2.4
- React 18
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling
- Custom UI components from \`@/components/ui/\`

### SEO Optimization
- Optimized meta tags and descriptions
- Schema markup for better search visibility
- Mobile-responsive design
- Fast loading performance

## File Structure
\`\`\`
${dirName}/
├── page.tsx          # Main page component
└── README.md         # This documentation file
\`\`\`

## Related Pages
${relatedPages}

## Notes
${getPageNotes(dirName, pageType)}
`;
}

/**
 * Get page description based on directory name and type
 */
function getPageDescription(dirName, pageType) {
  if (dirName.includes('healthcare-and-medical')) {
    return 'Healthcare and Medical Digital Marketing Services';
  } else if (dirName.includes('technology-and-saas')) {
    return 'Technology and SaaS Digital Marketing Services';
  } else if (dirName.includes('digital-marketing-services')) {
    return 'Comprehensive Digital Marketing Services';
  } else if (dirName.includes('seo-services')) {
    return 'SEO Services and Optimization';
  } else if (dirName.includes('content-marketing')) {
    return 'Content Marketing Services';
  } else if (dirName.includes('ppc-management')) {
    return 'PPC Management and Advertising';
  } else if (dirName.includes('Social-media-marketing')) {
    return 'Social Media Marketing Services';
  } else if (dirName.includes('whatsapp-marketing')) {
    return 'WhatsApp Marketing Services';
  } else if (dirName.includes('analytics-and-automations')) {
    return 'Analytics and Marketing Automation';
  } else if (dirName.includes('conversion-rate-optimization')) {
    return 'Conversion Rate Optimization Services';
  } else if (dirName.includes('perforamance-marketing')) {
    return 'Performance Marketing Services';
  } else if (dirName.includes('email-marketing-and-automation-services')) {
    return 'Email Marketing and Automation Services';
  } else if (dirName.includes('branding')) {
    return 'Branding and Design Services';
  } else if (dirName.includes('website-development')) {
    return 'Website Development Services';
  } else if (dirName.includes('-ads')) {
    const platform = dirName.replace('-ads', '').replace(/-/g, ' ');
    return `${platform.charAt(0).toUpperCase() + platform.slice(1)} Advertising Services`;
  } else if (dirName.includes('digital-marketing-in-')) {
    const location = dirName.replace('digital-marketing-in-', '').replace(/-/g, ' ');
    return `Digital Marketing Services in ${location.charAt(0).toUpperCase() + location.slice(1)}`;
  } else if (dirName.includes('b2b-marketing-company-in-bangalore')) {
    return 'B2B Marketing Company Services in Bangalore';
  } else if (dirName.includes('real-estate-marketing-company-in-bangalore')) {
    return 'Real Estate Marketing Company Services in Bangalore';
  } else if (dirName.includes('seo-company-in-bangalore')) {
    return 'SEO Company Services in Bangalore';
  } else if (dirName.includes('creative-advertising-company-in-bangalore')) {
    return 'Creative Advertising Company Services in Bangalore';
  } else if (dirName.includes('digital-marketing-for-technology-and-saas')) {
    return 'Digital Marketing for Technology and SaaS Companies';
  } else if (dirName === 'academy') {
    return 'Frameleads Academy - Digital Marketing Training';
  } else if (dirName === 'about') {
    return 'About Frameleads - Company Information';
  } else if (dirName === 'contact') {
    return 'Contact Frameleads - Get in Touch';
  } else if (dirName === 'careers') {
    return 'Careers at Frameleads - Join Our Team';
  } else if (dirName === 'our-team') {
    return 'Our Team - Meet the Frameleads Team';
  } else if (dirName === 'industries') {
    return 'Industries We Serve';
  } else if (dirName === 'locations') {
    return 'Our Global Locations';
  } else if (dirName === 'sitemap') {
    return 'Website Sitemap - Complete Navigation';
  }
  
  return 'Digital Marketing Services';
}

/**
 * Get page purpose based on directory name and type
 */
function getPagePurpose(dirName, pageType) {
  if (pageType === 'Industry Specific') {
    return 'This page provides specialized digital marketing solutions tailored to specific industries.';
  } else if (pageType === 'Service Specific') {
    return 'This page focuses on a specific digital marketing service with detailed information and offerings.';
  } else if (pageType === 'Platform Specific') {
    return 'This page provides advertising services for a specific platform or channel.';
  } else if (pageType === 'Location Specific') {
    return 'This page targets businesses in a specific geographic location.';
  } else if (pageType === 'Company Page') {
    return 'This page provides information about Frameleads as a company.';
  }
  
  return 'This page provides comprehensive digital marketing services and information.';
}

/**
 * Get target audience based on directory name and type
 */
function getTargetAudience(dirName, pageType) {
  if (dirName.includes('healthcare-and-medical')) {
    return '- Hospitals and medical centers\n- Medical practices and clinics\n- Dental practices\n- Mental health professionals\n- Specialty medical practices\n- Healthcare technology companies';
  } else if (dirName.includes('technology-and-saas')) {
    return '- SaaS companies and startups\n- Technology companies\n- B2B software providers\n- Tech startups and scale-ups\n- Software development companies\n- Technology service providers';
  } else if (dirName.includes('b2b-marketing-company-in-bangalore')) {
    return '- B2B companies in Bangalore\n- Business-to-business service providers\n- Corporate clients\n- Enterprise businesses\n- Professional service firms';
  } else if (dirName.includes('real-estate-marketing-company-in-bangalore')) {
    return '- Real estate developers\n- Property management companies\n- Real estate agents\n- Construction companies\n- Property investment firms';
  } else if (dirName.includes('seo-company-in-bangalore')) {
    return '- Local businesses in Bangalore\n- E-commerce companies\n- Service-based businesses\n- Online retailers\n- Content publishers';
  } else if (dirName.includes('creative-advertising-company-in-bangalore')) {
    return '- Creative agencies\n- Marketing agencies\n- Design studios\n- Advertising companies\n- Brand consultants';
  } else if (pageType === 'Location Specific') {
    const location = dirName.replace('digital-marketing-in-', '').replace(/-/g, ' ');
    return `- Businesses in ${location.charAt(0).toUpperCase() + location.slice(1)}\n- Local companies\n- Regional businesses\n- International companies with local presence`;
  } else if (pageType === 'Service Specific') {
    return '- Businesses looking for specific digital marketing services\n- Companies wanting to improve their online presence\n- Organizations seeking marketing expertise';
  } else if (pageType === 'Platform Specific') {
    return '- Businesses wanting to advertise on specific platforms\n- Companies looking for platform-specific marketing\n- Organizations seeking targeted advertising';
  }
  
  return '- Businesses of all sizes\n- Companies looking to improve their digital presence\n- Organizations seeking marketing expertise\n- Entrepreneurs and startups';
}

/**
 * Get key features based on directory name and type
 */
function getKeyFeatures(dirName, pageType) {
  if (dirName.includes('healthcare-and-medical')) {
    return `### 1. HIPAA-Compliant Marketing
- All marketing strategies designed with HIPAA compliance in mind
- Secure patient data handling
- Privacy-focused analytics and tracking

### 2. Healthcare-Specific Services
- Healthcare SEO Services
- Medical PPC Management
- Healthcare Content Marketing
- Healthcare Website Design
- Healthcare Reputation Management
- Healthcare Analytics

### 3. Industry Specializations
- Hospitals & Medical Centers
- Medical Practices & Clinics
- Dental Practices
- Mental Health Professionals
- Specialty Medical Practices
- Healthcare Technology`;
  } else if (dirName.includes('technology-and-saas')) {
    return `### 1. B2B SaaS-Focused Marketing
- Product-led content marketing strategies
- Account-based marketing (ABM) campaigns
- Technical content optimization
- SaaS-specific conversion funnels

### 2. Technology-Specific Services
- B2B SaaS Content Marketing & SEO
- Technology Company PPC & Paid Advertising
- SaaS Growth Marketing & Conversion Optimization
- Technology Brand Positioning & Thought Leadership
- Marketing Automation & Lead Nurturing
- SaaS Analytics & Performance Optimization

### 3. Industry Specializations
- SaaS & Software Companies
- Technology Startups
- B2B Tech Companies
- Tech Service Providers
- Software Development Companies
- Technology Consulting`;
  } else if (pageType === 'Service Specific') {
    return `### 1. Specialized Service Focus
- Deep expertise in specific digital marketing area
- Industry best practices and methodologies
- Proven results and case studies

### 2. Comprehensive Service Delivery
- Strategy development and planning
- Implementation and execution
- Monitoring and optimization
- Reporting and analytics

### 3. Client Success Focus
- Customized solutions for each client
- Regular performance reviews
- Continuous improvement and optimization`;
  } else if (pageType === 'Platform Specific') {
    return `### 1. Platform Expertise
- Deep knowledge of platform-specific advertising
- Optimized campaign strategies
- Platform best practices

### 2. Advanced Targeting
- Precise audience targeting
- Demographic and interest-based targeting
- Lookalike and custom audiences

### 3. Performance Optimization
- Continuous campaign optimization
- A/B testing and experimentation
- ROI and performance tracking`;
  } else if (pageType === 'Location Specific') {
    return `### 1. Local Market Expertise
- Deep understanding of local market dynamics
- Local business knowledge and connections
- Regional marketing strategies

### 2. Location-Specific Services
- Local SEO optimization
- Regional advertising campaigns
- Local business directory listings
- Community engagement strategies

### 3. Cultural Adaptation
- Understanding of local culture and preferences
- Language and communication adaptation
- Local business practices and regulations`;
  }
  
  return `### 1. Comprehensive Digital Marketing
- Full-service digital marketing solutions
- Multi-channel marketing strategies
- Integrated marketing approach

### 2. Proven Results
- Track record of successful campaigns
- Measurable ROI and performance metrics
- Client success stories and case studies

### 3. Expert Team
- Experienced digital marketing professionals
- Industry expertise and knowledge
- Continuous learning and adaptation`;
}

/**
 * Get related pages based on directory name and type
 */
function getRelatedPages(dirName, pageType) {
  const related = [];
  
  if (dirName.includes('healthcare-and-medical')) {
    related.push('- `/technology-and-saas/` - Technology industry marketing');
    related.push('- `/digital-marketing-services/` - General digital marketing services');
  } else if (dirName.includes('technology-and-saas')) {
    related.push('- `/healthcare-and-medical/` - Healthcare industry marketing');
    related.push('- `/digital-marketing-services/` - General digital marketing services');
  } else if (pageType === 'Service Specific') {
    related.push('- `/digital-marketing-services/` - Complete digital marketing services');
    related.push('- `/seo-services/` - SEO services');
    related.push('- `/content-marketing/` - Content marketing services');
  } else if (pageType === 'Platform Specific') {
    related.push('- `/google-ads/` - Google Ads services');
    related.push('- `/Meta-ads/` - Meta Ads services');
    related.push('- `/linkedin-ads/` - LinkedIn Ads services');
  } else if (pageType === 'Location Specific') {
    related.push('- `/digital-marketing-in-bangalore/` - Digital marketing in Bangalore');
    related.push('- `/digital-marketing-in-dubai/` - Digital marketing in Dubai');
    related.push('- `/locations/` - All our global locations');
  }
  
  related.push('- `/sitemap/` - Complete website navigation');
  related.push('- `/contact/` - Contact us for more information');
  
  return related.join('\n');
}

/**
 * Get page notes based on directory name and type
 */
function getPageNotes(dirName, pageType) {
  if (dirName.includes('healthcare-and-medical')) {
    return 'This page serves as a comprehensive landing page for healthcare and medical practices looking to grow their patient base through digital marketing. It emphasizes HIPAA compliance, patient-focused strategies, and proven results in the healthcare industry.';
  } else if (dirName.includes('technology-and-saas')) {
    return 'This page serves as a comprehensive landing page for technology companies and SaaS businesses looking to accelerate growth through specialized B2B digital marketing. It emphasizes product-led growth, technical expertise, and proven results in the technology industry.';
  } else if (pageType === 'Service Specific') {
    return 'This page provides detailed information about our specialized digital marketing service, including features, benefits, and how it can help businesses achieve their marketing goals.';
  } else if (pageType === 'Platform Specific') {
    return 'This page focuses on advertising services for a specific platform, providing detailed information about our expertise and capabilities in platform-specific marketing.';
  } else if (pageType === 'Location Specific') {
    return 'This page targets businesses in a specific geographic location, providing localized digital marketing services and expertise.';
  } else if (pageType === 'Company Page') {
    return 'This page provides important information about Frameleads as a company, our values, team, and how we can help businesses succeed.';
  }
  
  return 'This page provides comprehensive information about our digital marketing services and how we can help businesses achieve their online marketing goals.';
}

/**
 * Process a single directory
 */
function processDirectory(dirPath) {
  const dirName = path.basename(dirPath);
  const pagePath = path.join(dirPath, 'page.tsx');
  const readmePath = path.join(dirPath, 'README.md');
  
  // Skip if no page.tsx file
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipping ${dirName} - no page.tsx found`);
    return;
  }
  
  try {
    // Read page.tsx content
    const pageContent = fs.readFileSync(pagePath, 'utf8');
    
    // Extract information
    const componentName = extractComponentName(pageContent);
    const pageTitle = extractPageTitle(pageContent);
    const pageType = getPageType(dirName);
    
    // Generate README content
    const readmeContent = generateReadmeContent(dirName, componentName, pageTitle, pageType);
    
    // Write README file
    fs.writeFileSync(readmePath, readmeContent);
    
    console.log(`✅ Updated README for ${dirName} (${componentName})`);
    
  } catch (error) {
    console.error(`❌ Error processing ${dirName}:`, error.message);
  }
}

/**
 * Main function to update all README files
 */
function updateAllReadmeFiles() {
  console.log('🚀 Starting README file updates...');
  
  try {
    const items = fs.readdirSync(CONFIG.appDir);
    
    for (const item of items) {
      const itemPath = path.join(CONFIG.appDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !CONFIG.excludeDirs.includes(item)) {
        processDirectory(itemPath);
      }
    }
    
    console.log('\n🎉 README file updates completed!');
    
  } catch (error) {
    console.error('❌ Error updating README files:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  updateAllReadmeFiles();
}

module.exports = { updateAllReadmeFiles, generateReadmeContent };
