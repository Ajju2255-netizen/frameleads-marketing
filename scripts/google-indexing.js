#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Google Search Console Indexing Script
 * 
 * This script automatically submits all website pages to Google Search Console
 * for indexing, ensuring new content gets discovered and indexed quickly.
 * 
 * Prerequisites:
 * 1. Google Search Console API enabled
 * 2. Service account credentials
 * 3. Website verified in Google Search Console
 * 
 * Usage:
 * - Run manually: node scripts/google-indexing.js
 * - Run via npm: npm run submit-to-google
 * - Integrate into CI/CD pipeline
 */

// Configuration
const CONFIG = {
  // Google Search Console API settings
  apiBaseUrl: 'https://searchconsole.googleapis.com/webmasters/v3',
  
  // Website settings
  siteUrl: 'https://frameleads.com', // Replace with your actual domain
  
  // Rate limiting (requests per minute)
  rateLimit: {
    requests: 100,
    windowMs: 60000 // 1 minute
  },
  
  // Batch settings
  batchSize: 10, // Submit pages in batches
  
  // Retry settings
  maxRetries: 3,
  retryDelay: 2000, // 2 seconds
  
  // Output settings
  logFile: './logs/google-indexing.log',
  resultsFile: './logs/indexing-results.json'
};

// Page categories and their priorities
const PAGE_PRIORITIES = {
  main: 1,           // Home, Contact, About
  services: 2,       // Service pages
  locations: 3,      // Location pages
  industries: 4,     // Industry pages
  resources: 5,      // Resources and tools
  academy: 6,        // Academy pages
  legal: 7,          // Legal pages
  advertisingPlatforms: 8 // Platform-specific pages
};

/**
 * Load configuration from environment or config file
 */
function loadConfig() {
  const config = { ...CONFIG };
  
  // Load from environment variables
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    config.serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  }
  
  if (process.env.GOOGLE_SITE_URL) {
    config.siteUrl = process.env.GOOGLE_SITE_URL;
  }
  
  // Load from config file if exists
  const configFile = path.join(process.cwd(), 'config', 'google-indexing.json');
  if (fs.existsSync(configFile)) {
    try {
      const fileConfig = JSON.parse(fs.readFileSync(configFile, 'utf8'));
      Object.assign(config, fileConfig);
    } catch (error) {
      console.warn('Warning: Could not load config file:', error.message);
    }
  }
  
  return config;
}

/**
 * Get access token using service account
 */
async function getAccessToken(serviceAccountKey) {
  return new Promise((resolve, reject) => {
    const jwt = require('jsonwebtoken');
    
    try {
      const now = Math.floor(Date.now() / 1000);
      const payload = {
        iss: serviceAccountKey.client_email,
        scope: 'https://www.googleapis.com/auth/webmasters',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600
      };
      
      const token = jwt.sign(payload, serviceAccountKey.private_key, {
        algorithm: 'RS256'
      });
      
      const postData = JSON.stringify({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: token
      });
      
      const options = {
        hostname: 'oauth2.googleapis.com',
        port: 443,
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };
      
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            if (response.access_token) {
              resolve(response.access_token);
            } else {
              reject(new Error('No access token in response: ' + data));
            }
          } catch (error) {
            reject(new Error('Invalid JSON response: ' + data));
          }
        });
      });
      
      req.on('error', reject);
      req.write(postData);
      req.end();
      
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Submit URL to Google Search Console
 */
async function submitUrl(accessToken, siteUrl, url) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      url: url
    });
    
    const options = {
      hostname: 'searchconsole.googleapis.com',
      port: 443,
      path: `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/urlInspection/index:inspect`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({
            url: url,
            status: res.statusCode,
            response: response
          });
        } catch (error) {
          resolve({
            url: url,
            status: res.statusCode,
            response: data,
            error: error.message
          });
        }
      });
    });
    
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Get all pages from the sitemap
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
            pages.push({
              path: url,
              fullUrl: `${CONFIG.siteUrl}${url}`,
              priority: getPagePriority(url)
            });
          }
        });
      }
    }
    
    // If sitemap not found, scan directory manually
    if (pages.length === 0) {
      console.log('Sitemap not found, scanning app directory...');
      pages.push(...scanDirectoryForPages());
    }
    
    // Sort by priority
    pages.sort((a, b) => a.priority - b.priority);
    
    return pages;
  } catch (error) {
    console.error('Error getting pages:', error.message);
    return [];
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
            pages.push({
              path: `/${route}`,
              fullUrl: `${CONFIG.siteUrl}/${route}`,
              priority: getPagePriority(`/${route}`)
            });
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
 * Get page priority based on URL
 */
function getPagePriority(url) {
  if (url === '/') return PAGE_PRIORITIES.main;
  if (url.includes('/contact') || url.includes('/about')) return PAGE_PRIORITIES.main;
  if (url.includes('/digital-marketing-services') || url.includes('/seo-services')) return PAGE_PRIORITIES.services;
  if (url.includes('/digital-marketing-in-')) return PAGE_PRIORITIES.locations;
  if (url.includes('-company-in-') || url.includes('/industries')) return PAGE_PRIORITIES.industries;
  if (url.includes('/resources') || url.includes('/tools')) return PAGE_PRIORITIES.resources;
  if (url.includes('/academy')) return PAGE_PRIORITIES.academy;
  if (url.includes('/privacy') || url.includes('/terms')) return PAGE_PRIORITIES.legal;
  if (url.includes('-ads')) return PAGE_PRIORITIES.advertisingPlatforms;
  
  return 5; // Default priority
}

/**
 * Rate limiting utility
 */
class RateLimiter {
  constructor(requests, windowMs) {
    this.requests = requests;
    this.windowMs = windowMs;
    this.queue = [];
    this.processing = false;
  }
  
  async execute(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    
    while (this.queue.length > 0) {
      const batch = this.queue.splice(0, this.requests);
      
      await Promise.all(batch.map(async ({ fn, resolve, reject }) => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }));
      
      if (this.queue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, this.windowMs));
      }
    }
    
    this.processing = false;
  }
}

/**
 * Logging utility
 */
class Logger {
  constructor(logFile) {
    this.logFile = logFile;
    this.ensureLogDir();
  }
  
  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }
  
  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };
    
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
    
    // Write to log file
    fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');
  }
  
  info(message, data = null) {
    this.log('info', message, data);
  }
  
  error(message, data = null) {
    this.log('error', message, data);
  }
  
  success(message, data = null) {
    this.log('success', message, data);
  }
}

/**
 * Main indexing function
 */
async function submitPagesToGoogle() {
  const config = loadConfig();
  const logger = new Logger(config.logFile);
  
  logger.info('🚀 Starting Google Search Console indexing...');
  
  try {
    // Validate configuration
    if (!config.serviceAccountKey) {
      throw new Error('Google service account key not found. Please set GOOGLE_SERVICE_ACCOUNT_KEY environment variable or create config/google-indexing.json');
    }
    
    if (!config.siteUrl) {
      throw new Error('Site URL not configured. Please set GOOGLE_SITE_URL environment variable or update config file.');
    }
    
    // Get access token
    logger.info('🔑 Getting access token...');
    const accessToken = await getAccessToken(config.serviceAccountKey);
    logger.success('✅ Access token obtained');
    
    // Get all pages
    logger.info('📄 Getting all pages...');
    const pages = getAllPages();
    logger.info(`Found ${pages.length} pages to submit`);
    
    if (pages.length === 0) {
      logger.error('No pages found to submit');
      return;
    }
    
    // Create rate limiter
    const rateLimiter = new RateLimiter(config.rateLimit.requests, config.rateLimit.windowMs);
    
    // Submit pages in batches
    const results = [];
    const batches = [];
    
    for (let i = 0; i < pages.length; i += config.batchSize) {
      batches.push(pages.slice(i, i + config.batchSize));
    }
    
    logger.info(`Submitting ${pages.length} pages in ${batches.length} batches...`);
    
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      logger.info(`Processing batch ${i + 1}/${batches.length} (${batch.length} pages)`);
      
      const batchResults = await Promise.all(
        batch.map(page => 
          rateLimiter.execute(() => submitUrl(accessToken, config.siteUrl, page.fullUrl))
        )
      );
      
      results.push(...batchResults);
      
      // Log batch results
      const successCount = batchResults.filter(r => r.status === 200).length;
      const errorCount = batchResults.length - successCount;
      
      logger.info(`Batch ${i + 1} completed: ${successCount} success, ${errorCount} errors`);
      
      // Small delay between batches
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Save results
    const resultsData = {
      timestamp: new Date().toISOString(),
      totalPages: pages.length,
      results: results,
      summary: {
        success: results.filter(r => r.status === 200).length,
        errors: results.filter(r => r.status !== 200).length,
        successRate: ((results.filter(r => r.status === 200).length / results.length) * 100).toFixed(2) + '%'
      }
    };
    
    fs.writeFileSync(config.resultsFile, JSON.stringify(resultsData, null, 2));
    
    // Final summary
    logger.success('🎉 Google indexing submission completed!');
    logger.info(`📊 Summary:`, resultsData.summary);
    logger.info(`📁 Results saved to: ${config.resultsFile}`);
    
    // Log any errors
    const errors = results.filter(r => r.status !== 200);
    if (errors.length > 0) {
      logger.error(`❌ ${errors.length} pages failed to submit:`, errors);
    }
    
  } catch (error) {
    logger.error('❌ Error during Google indexing:', error.message);
    process.exit(1);
  }
}

/**
 * Create sample configuration file
 */
function createSampleConfig() {
  const configDir = path.join(process.cwd(), 'config');
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  const sampleConfig = {
    siteUrl: 'https://frameleads.com',
    serviceAccountKey: {
      type: 'service_account',
      project_id: 'your-project-id',
      private_key_id: 'your-private-key-id',
      private_key: '-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n',
      client_email: 'your-service-account@your-project.iam.gserviceaccount.com',
      client_id: 'your-client-id',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com'
    },
    rateLimit: {
      requests: 100,
      windowMs: 60000
    },
    batchSize: 10
  };
  
  const configFile = path.join(configDir, 'google-indexing.json');
  fs.writeFileSync(configFile, JSON.stringify(sampleConfig, null, 2));
  
  console.log('📝 Sample configuration created at:', configFile);
  console.log('Please update the configuration with your actual Google service account details.');
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Google Search Console Indexing Script

Usage:
  node scripts/google-indexing.js [options]

Options:
  --help, -h          Show this help message
  --create-config     Create sample configuration file
  --dry-run          Show what would be submitted without actually submitting

Environment Variables:
  GOOGLE_SERVICE_ACCOUNT_KEY  JSON string of service account key
  GOOGLE_SITE_URL            Your website URL

Examples:
  node scripts/google-indexing.js
  node scripts/google-indexing.js --create-config
  GOOGLE_SITE_URL=https://example.com node scripts/google-indexing.js
    `);
    process.exit(0);
  }
  
  if (args.includes('--create-config')) {
    createSampleConfig();
    process.exit(0);
  }
  
  if (args.includes('--dry-run')) {
    console.log('🔍 Dry run mode - showing pages that would be submitted:');
    const pages = getAllPages();
    pages.forEach((page, index) => {
      console.log(`${index + 1}. ${page.fullUrl} (Priority: ${page.priority})`);
    });
    console.log(`\nTotal: ${pages.length} pages`);
    process.exit(0);
  }
  
  submitPagesToGoogle();
}

module.exports = { submitPagesToGoogle, getAllPages, CONFIG };
