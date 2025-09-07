#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Automatic Sitemap Generator for Frameleads Marketing Website
 * 
 * This script automatically scans the app directory and generates
 * a comprehensive sitemap page with all available routes.
 * 
 * Usage:
 * - Run manually: node scripts/generate-sitemap.js
 * - Run via npm: npm run generate-sitemap
 * - Integrate into CI/CD pipeline
 */

// Configuration
const CONFIG = {
  appDir: './app',
  outputFile: './app/sitemap/page.tsx',
  excludePatterns: [
    'layout.tsx',
    'loading.tsx',
    'error.tsx',
    'not-found.tsx',
    'globals.css',
    '.DS_Store',
    'README.md'
  ],
  excludeDirs: [
    'api',
    'components',
    'lib',
    'hooks'
  ]
};

// Page categories and their configurations
const PAGE_CATEGORIES = {
  services: {
    title: 'Services',
    icon: 'Target',
    description: 'Our digital marketing services',
    patterns: ['digital-marketing-services', 'seo-services', 'ppc management', 'content-marketing', 'Social-media-marketing', 'whatsapp-marketing', 'analytics-and-automations', 'conversion-rate-optimization', 'perforamance-marketing', 'email-marketing-and-automation-services', 'branding', 'website-development']
  },
  advertisingPlatforms: {
    title: 'Advertising Platforms',
    icon: 'Zap',
    description: 'Advertising platform services',
    patterns: ['google-ads', 'Meta-ads', 'youtube-ads', 'linkedin-ads', 'tiktok-ads', 'snapchat-ads', 'pinterest-ads', 'shopify-ads', 'baidu-ads', 'yandex-ads', 'taboola-ads']
  },
  locations: {
    title: 'Locations',
    icon: 'MapPin',
    description: 'Global location services',
    patterns: ['digital-marketing-in-']
  },
  industries: {
    title: 'Industries',
    icon: 'Building2',
    description: 'Industry-specific services',
    patterns: ['b2b-marketing-company-in-bangalore', 'real-estate-marketing-company-in-bangalore', 'seo-company-in-bangalore', 'creative-advertising-company-in-bangalore', 'digital-marketing-for-technology-and-saas', 'healthcare-and-medical']
  },
  company: {
    title: 'Company',
    icon: 'Users',
    description: 'Company information',
    patterns: ['about', 'our-team', 'careers']
  },
  resources: {
    title: 'Resources',
    icon: 'BookOpen',
    description: 'Resources and tools',
    patterns: ['resources/', 'free-marketing-audit', 'tools/']
  },
  academy: {
    title: 'Academy',
    icon: 'GraduationCap',
    description: 'Digital marketing academy',
    patterns: ['academy']
  },
  legal: {
    title: 'Legal',
    icon: 'Shield',
    description: 'Legal pages',
    patterns: ['privacy', 'terms', 'cookies', 'disclaimer']
  },
  main: {
    title: 'Main Pages',
    icon: 'Home',
    description: 'Main website pages',
    patterns: ['contact', 'locations', 'industries', 'sitemap']
  }
};

/**
 * Recursively scan directory for page files
 */
function scanDirectory(dir, basePath = '') {
  const pages = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip excluded directories
        if (CONFIG.excludeDirs.includes(item)) {
          continue;
        }
        
        // Recursively scan subdirectories
        const subPages = scanDirectory(fullPath, relativePath);
        pages.push(...subPages);
      } else if (stat.isFile() && item === 'page.tsx') {
        // Found a page file
        const route = relativePath.replace(/\/page\.tsx$/, '');
        if (route) {
          pages.push({
            path: `/${route}`,
            name: formatPageName(route),
            description: generateDescription(route)
          });
        }
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not scan directory ${dir}:`, error.message);
  }
  
  return pages;
}

/**
 * Format page name for display
 */
function formatPageName(route) {
  return route
    .split('/')
    .map(segment => segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    )
    .join(' - ');
}

/**
 * Generate description for a page
 */
function generateDescription(route) {
  const descriptions = {
    'contact': 'Contact us for digital marketing services',
    'about': 'Learn about Frameleads digital marketing agency',
    'careers': 'Join our digital marketing team',
    'sitemap': 'Complete website sitemap and navigation',
    'privacy': 'Privacy policy and data protection',
    'terms': 'Terms and conditions',
    'cookies': 'Cookie usage policy',
    'disclaimer': 'Website disclaimer',
    'locations': 'All our global locations',
    'industries': 'Industries we serve',
    'free-marketing-audit': 'Get a free marketing audit',
    'tools/roi-calculator': 'Calculate your marketing ROI',
    'resources/digital-marketing-guide': 'Comprehensive digital marketing guide'
  };
  
  // Check for exact matches first
  if (descriptions[route]) {
    return descriptions[route];
  }
  
  // Generate based on patterns
  if (route.includes('digital-marketing-in-')) {
    const location = route.replace('digital-marketing-in-', '').replace(/-/g, ' ');
    return `Digital marketing services in ${location}`;
  }
  
  if (route.includes('-ads')) {
    const platform = route.replace('-ads', '').replace(/-/g, ' ');
    return `${platform} advertising management`;
  }
  
  if (route.includes('academy')) {
    return 'Digital marketing academy and training';
  }
  
  // Default description
  return `${formatPageName(route)} - Frameleads digital marketing services`;
}

/**
 * Categorize pages based on their routes
 */
function categorizePages(pages) {
  const categorized = {};
  
  // Initialize categories
  Object.keys(PAGE_CATEGORIES).forEach(category => {
    categorized[category] = [];
  });
  
  // Categorize each page
  pages.forEach(page => {
    let categorized_flag = false;
    
    for (const [categoryKey, categoryConfig] of Object.entries(PAGE_CATEGORIES)) {
      for (const pattern of categoryConfig.patterns) {
        if (page.path.includes(pattern)) {
          categorized[categoryKey].push(page);
          categorized_flag = true;
          break;
        }
      }
      if (categorized_flag) break;
    }
    
    // If not categorized, add to main pages
    if (!categorized_flag) {
      categorized.main.push(page);
    }
  });
  
  return categorized;
}

/**
 * Generate the sitemap page content
 */
function generateSitemapContent(categorizedPages) {
  const totalPages = Object.values(categorizedPages).reduce((sum, pages) => sum + pages.length, 0);
  
  return `'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
import { ArrowRight, ExternalLink, Search, MapPin, Building2, FileText, Users, Globe, Target, Zap, BarChart3, Mail, Phone, Calendar, Award, BookOpen, Calculator, Shield, Heart, GraduationCap, Palette, Crown, Euro, MessageCircle, ShoppingBag, BarChart, Play, Eye, ThumbsUp, Share2, Download, PlayCircle, Sparkles, Megaphone, Camera, Music, Hash, ExternalLink as ExternalLinkIcon, Brain, MousePointer, Layers, BarChart2, TrendingDown, ArrowUpRight, Filter, RefreshCw, Maximize, Minimize, Activity, LineChart, Percent, Calculator as CalcIcon, BookOpen as BookIcon, FileText as FileIcon, HelpCircle, ChevronRight, CheckCircle2, XCircle, AlertCircle, Info, Lightbulb, Rocket, Trophy, Medal, Home, Coffee, Code, Database, Server, Wrench, Cpu, HardDrive, Network, Terminal, GitBranch, ShieldCheck, Zap as ZapIcon } from "lucide-react"

export default function SitemapPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-generated page data - Updated: ${new Date().toISOString()}
  const pageData = ${JSON.stringify(categorizedPages, null, 2)};

  const sections = [
    { title: "Main Pages", items: pageData.main, icon: Home },
    { title: "Services", items: pageData.services, icon: Target },
    { title: "Advertising Platforms", items: pageData.advertisingPlatforms, icon: Zap },
    { title: "Locations", items: pageData.locations, icon: MapPin },
    { title: "Industries", items: pageData.industries, icon: Building2 },
    { title: "Company", items: pageData.company, icon: Users },
    { title: "Resources", items: pageData.resources, icon: BookOpen },
    { title: "Academy", items: pageData.academy, icon: GraduationCap },
    { title: "Legal", items: pageData.legal, icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Website{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Navigate through all our pages and find exactly what you're looking for. Our comprehensive sitemap helps you discover our services, locations, and resources.
            </p>
            <div className="inline-block bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-4 py-2 rounded-full text-sm font-medium border border-[#FF6B35]/20">
              🔄 Auto-generated • Last updated: ${new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sections.map((section, sectionIndex) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.title}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#2D2D2D]">{section.title}</h2>
                      <p className="text-sm text-[#5A5A5A]/70">{section.items.length} pages</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                      >
                        <Link 
                          href={item.path}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-[#FF6B35]/5 transition-all duration-300"
                        >
                          <ArrowRight className="w-4 h-4 text-[#FF6B35]/60 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all duration-300 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-[#2D2D2D] group-hover:text-[#FF6B35] transition-colors duration-300 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-[#5A5A5A]/70 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Website Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our comprehensive digital marketing platform covers all aspects of online growth</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {pageData.services.length + pageData.advertisingPlatforms.length}
              </div>
              <div className="text-gray-600 text-sm">Services & Platforms</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {pageData.locations.length}
              </div>
              <div className="text-gray-600 text-sm">Global Locations</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {pageData.industries.length}
              </div>
              <div className="text-gray-600 text-sm">Industries Served</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">
                {Object.values(pageData).flat().length}
              </div>
              <div className="text-gray-600 text-sm">Total Pages</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}`;
}

/**
 * Main function to generate sitemap
 */
function generateSitemap() {
  console.log('🚀 Starting automatic sitemap generation...');
  
  try {
    // Check if app directory exists
    if (!fs.existsSync(CONFIG.appDir)) {
      throw new Error(`App directory not found: ${CONFIG.appDir}`);
    }
    
    // Scan for pages
    console.log('📁 Scanning app directory for pages...');
    const pages = scanDirectory(CONFIG.appDir);
    console.log(`✅ Found ${pages.length} pages`);
    
    // Categorize pages
    console.log('📂 Categorizing pages...');
    const categorizedPages = categorizePages(pages);
    
    // Log categorization results
    Object.entries(categorizedPages).forEach(([category, pages]) => {
      console.log(`  ${category}: ${pages.length} pages`);
    });
    
    // Generate sitemap content
    console.log('📝 Generating sitemap content...');
    const sitemapContent = generateSitemapContent(categorizedPages);
    
    // Ensure output directory exists
    const outputDir = path.dirname(CONFIG.outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write sitemap file
    fs.writeFileSync(CONFIG.outputFile, sitemapContent);
    console.log(`✅ Sitemap generated successfully: ${CONFIG.outputFile}`);
    
    // Summary
    const totalPages = Object.values(categorizedPages).reduce((sum, pages) => sum + pages.length, 0);
    console.log(`\n📊 Summary:`);
    console.log(`  Total pages: ${totalPages}`);
    console.log(`  Generated: ${new Date().toISOString()}`);
    console.log(`  Output: ${CONFIG.outputFile}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, CONFIG, PAGE_CATEGORIES };
