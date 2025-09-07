#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * XML Sitemap Generator for Frameleads Marketing Website
 * 
 * This script generates a proper XML sitemap that can be submitted to
 * search engines and follows the sitemap protocol standards.
 * 
 * Usage:
 * - Run manually: node scripts/generate-xml-sitemap.js
 * - Run via npm: npm run generate-xml-sitemap
 * - Integrate into CI/CD pipeline
 */

// Configuration
const CONFIG = {
  siteUrl: 'https://frameleads.com',
  outputFile: './public/sitemap.xml',
  lastmod: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
  changefreq: 'monthly',
  defaultPriority: 0.8,
  
  // Page-specific priorities and change frequencies
  pageSettings: {
    '/': { priority: 1.0, changefreq: 'weekly' },
    '/about': { priority: 0.9, changefreq: 'monthly' },
    '/contact': { priority: 0.9, changefreq: 'monthly' },
    '/digital-marketing-services': { priority: 0.9, changefreq: 'weekly' },
    '/seo-services': { priority: 0.9, changefreq: 'weekly' },
    '/google-ads': { priority: 0.8, changefreq: 'weekly' },
    '/Meta-ads': { priority: 0.8, changefreq: 'weekly' },
    '/youtube-ads': { priority: 0.8, changefreq: 'weekly' },
    '/linkedin-ads': { priority: 0.8, changefreq: 'weekly' },
    '/tiktok-ads': { priority: 0.8, changefreq: 'weekly' },
    '/snapchat-ads': { priority: 0.8, changefreq: 'weekly' },
    '/pinterest-ads': { priority: 0.8, changefreq: 'weekly' },
    '/shopify-ads': { priority: 0.8, changefreq: 'weekly' },
    '/baidu-ads': { priority: 0.8, changefreq: 'weekly' },
    '/yandex-ads': { priority: 0.8, changefreq: 'weekly' },
    '/taboola-ads': { priority: 0.8, changefreq: 'weekly' },
    '/content-marketing': { priority: 0.8, changefreq: 'weekly' },
    '/Social-media-marketing': { priority: 0.8, changefreq: 'weekly' },
    '/whatsapp-marketing': { priority: 0.8, changefreq: 'weekly' },
    '/analytics-and-automations': { priority: 0.8, changefreq: 'weekly' },
    '/conversion-rate-optimization': { priority: 0.8, changefreq: 'weekly' },
    '/perforamance-marketing': { priority: 0.8, changefreq: 'weekly' },
    '/email-marketing-and-automation-services': { priority: 0.8, changefreq: 'weekly' },
    '/branding': { priority: 0.8, changefreq: 'weekly' },
    '/website-development': { priority: 0.8, changefreq: 'weekly' },
    '/ppc management': { priority: 0.8, changefreq: 'weekly' },
    '/digital-marketing-in-bangalore': { priority: 0.9, changefreq: 'weekly' },
    '/digital-marketing-in-india': { priority: 0.9, changefreq: 'weekly' },
    '/digital-marketing-in-dubai': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-singapore': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-australia': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-saudi-arabia': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-uae': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-canada': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-china': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-unitedstates': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-unitedkingdom': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-germany': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-france': { priority: 0.8, changefreq: 'monthly' },
    '/digital-marketing-in-brazil': { priority: 0.8, changefreq: 'monthly' },
    '/b2b-marketing-company-in-bangalore': { priority: 0.9, changefreq: 'monthly' },
    '/real-estate-marketing-company-in-bangalore': { priority: 0.9, changefreq: 'monthly' },
    '/seo-company-in-bangalore': { priority: 0.9, changefreq: 'monthly' },
    '/creative-advertising-company-in-bangalore': { priority: 0.9, changefreq: 'monthly' },
    '/digital-marketing-for-technology-and-saas': { priority: 0.9, changefreq: 'monthly' },
    '/industries': { priority: 0.8, changefreq: 'monthly' },
    '/locations': { priority: 0.8, changefreq: 'monthly' },
    '/our-team': { priority: 0.7, changefreq: 'monthly' },
    '/careers': { priority: 0.7, changefreq: 'monthly' },
    '/free-marketing-audit': { priority: 0.8, changefreq: 'monthly' },
    '/resources/digital-marketing-guide': { priority: 0.8, changefreq: 'monthly' },
    '/tools/roi-calculator': { priority: 0.8, changefreq: 'monthly' },
    '/academy': { priority: 0.8, changefreq: 'monthly' },
    '/academy/about': { priority: 0.7, changefreq: 'monthly' },
    '/academy/contact': { priority: 0.7, changefreq: 'monthly' },
    '/academy/thank-you': { priority: 0.6, changefreq: 'yearly' },
    '/academy/return-policy': { priority: 0.6, changefreq: 'yearly' },
    '/academy/terms': { priority: 0.6, changefreq: 'yearly' },
    '/sitemap': { priority: 0.5, changefreq: 'monthly' }
  }
};

/**
 * Get all pages from the sitemap generator
 */
function getAllPages() {
  const pages = [];
  
  try {
    // Read the generated sitemap page to get all URLs
    const sitemapFile = path.join(process.cwd(), 'app', 'sitemap', 'page.tsx');
    if (fs.existsSync(sitemapFile)) {
      const content = fs.readFileSync(sitemapFile, 'utf8');
      
      // Extract URLs from the sitemap content
      const urlMatches = content.match(/"path":\s*"([^"]+)"/g);
      if (urlMatches) {
        urlMatches.forEach(match => {
          const url = match.match(/"path":\s*"([^"]+)"/)[1];
          if (url && url !== '/') {
            pages.push(url);
          }
        });
      }
    }
    
    // If sitemap not found, scan directory manually
    if (pages.length === 0) {
      console.log('Sitemap not found, scanning app directory...');
      pages.push(...scanDirectoryForPages());
    }
    
    // Add home page
    if (!pages.includes('/')) {
      pages.unshift('/');
    }
    
    // Remove duplicates and sort
    const uniquePages = [...new Set(pages)].sort();
    
    return uniquePages;
  } catch (error) {
    console.error('Error getting pages:', error.message);
    return ['/']; // Fallback to just home page
  }
}

/**
 * Scan directory for pages (fallback method)
 */
function scanDirectoryForPages() {
  const pages = [];
  const appDir = path.join(process.cwd(), 'app');
  
  function scanDir(dir, basePath = '') {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['api', 'components', 'lib', 'hooks'].includes(item)) {
            scanDir(fullPath, relativePath);
          }
        } else if (item === 'page.tsx') {
          const route = relativePath.replace(/\/page\.tsx$/, '');
          if (route) {
            pages.push(`/${route}`);
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${dir}:`, error.message);
    }
  }
  
  scanDir(appDir);
  return pages;
}

/**
 * Get page settings (priority and changefreq)
 */
function getPageSettings(url) {
  const settings = CONFIG.pageSettings[url];
  if (settings) {
    return {
      priority: settings.priority,
      changefreq: settings.changefreq
    };
  }
  
  // Default settings based on URL patterns
  if (url === '/') {
    return { priority: 1.0, changefreq: 'weekly' };
  }
  
  if (url.includes('/digital-marketing-in-')) {
    return { priority: 0.8, changefreq: 'monthly' };
  }
  
  if (url.includes('-ads')) {
    return { priority: 0.8, changefreq: 'weekly' };
  }
  
  if (url.includes('/academy')) {
    return { priority: 0.7, changefreq: 'monthly' };
  }
  
  if (url.includes('/privacy') || url.includes('/terms') || url.includes('/cookies') || url.includes('/disclaimer')) {
    return { priority: 0.5, changefreq: 'yearly' };
  }
  
  return {
    priority: CONFIG.defaultPriority,
    changefreq: CONFIG.changefreq
  };
}

/**
 * Generate XML sitemap content
 */
function generateXMLSitemap(pages) {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const xmlFooter = `</urlset>`;

  const urlEntries = pages.map(url => {
    const settings = getPageSettings(url);
    const fullUrl = `${CONFIG.siteUrl}${url}`;
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${CONFIG.lastmod}</lastmod>
    <changefreq>${settings.changefreq}</changefreq>
    <priority>${settings.priority}</priority>
  </url>`;
  }).join('\n');

  return `${xmlHeader}
${urlEntries}
${xmlFooter}`;
}

/**
 * Main function to generate XML sitemap
 */
function generateXMLSitemapFile() {
  console.log('🚀 Starting XML sitemap generation...');
  
  try {
    // Get all pages
    console.log('📄 Getting all pages...');
    const pages = getAllPages();
    console.log(`✅ Found ${pages.length} pages`);
    
    // Generate XML content
    console.log('📝 Generating XML sitemap content...');
    const xmlContent = generateXMLSitemap(pages);
    
    // Ensure output directory exists
    const outputDir = path.dirname(CONFIG.outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write XML sitemap file
    fs.writeFileSync(CONFIG.outputFile, xmlContent);
    console.log(`✅ XML sitemap generated successfully: ${CONFIG.outputFile}`);
    
    // Summary
    console.log(`\n📊 Summary:`);
    console.log(`  Total pages: ${pages.length}`);
    console.log(`  Site URL: ${CONFIG.siteUrl}`);
    console.log(`  Last modified: ${CONFIG.lastmod}`);
    console.log(`  Output: ${CONFIG.outputFile}`);
    
    // Show some example URLs
    console.log(`\n📋 Sample URLs:`);
    pages.slice(0, 10).forEach((url, index) => {
      const settings = getPageSettings(url);
      console.log(`  ${index + 1}. ${url} (Priority: ${settings.priority}, Change: ${settings.changefreq})`);
    });
    
    if (pages.length > 10) {
      console.log(`  ... and ${pages.length - 10} more pages`);
    }
    
  } catch (error) {
    console.error('❌ Error generating XML sitemap:', error.message);
    process.exit(1);
  }
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
XML Sitemap Generator

Usage:
  node scripts/generate-xml-sitemap.js [options]

Options:
  --help, -h          Show this help message
  --validate          Validate the generated XML sitemap
  --stats             Show statistics about the sitemap

Examples:
  node scripts/generate-xml-sitemap.js
  node scripts/generate-xml-sitemap.js --validate
  node scripts/generate-xml-sitemap.js --stats
    `);
    process.exit(0);
  }
  
  if (args.includes('--validate')) {
    console.log('🔍 Validating XML sitemap...');
    // Basic XML validation
    try {
      const content = fs.readFileSync(CONFIG.outputFile, 'utf8');
      if (content.includes('<?xml') && content.includes('<urlset') && content.includes('</urlset>')) {
        console.log('✅ XML sitemap appears to be valid');
      } else {
        console.log('❌ XML sitemap appears to be invalid');
      }
    } catch (error) {
      console.log('❌ Could not read sitemap file:', error.message);
    }
    process.exit(0);
  }
  
  if (args.includes('--stats')) {
    console.log('📊 XML Sitemap Statistics:');
    try {
      const content = fs.readFileSync(CONFIG.outputFile, 'utf8');
      const urlCount = (content.match(/<url>/g) || []).length;
      const locCount = (content.match(/<loc>/g) || []).length;
      console.log(`  Total URLs: ${urlCount}`);
      console.log(`  Location entries: ${locCount}`);
      console.log(`  File size: ${(content.length / 1024).toFixed(2)} KB`);
    } catch (error) {
      console.log('❌ Could not read sitemap file:', error.message);
    }
    process.exit(0);
  }
  
  generateXMLSitemapFile();
}

module.exports = { generateXMLSitemapFile, CONFIG, getAllPages };
