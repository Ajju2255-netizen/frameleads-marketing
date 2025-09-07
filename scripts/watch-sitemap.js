#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Watch script to automatically regenerate sitemap when files change
 * 
 * This script watches the app directory for changes and automatically
 * regenerates the sitemap when new pages are added or removed.
 * 
 * Usage:
 * - Run manually: node scripts/watch-sitemap.js
 * - Run via npm: npm run watch-sitemap
 */

const CONFIG = {
  watchDir: './app',
  excludePatterns: [
    'sitemap/page.tsx', // Don't watch the sitemap itself
    'components/',
    'lib/',
    'hooks/',
    'globals.css',
    '.DS_Store'
  ]
};

let isGenerating = false;

/**
 * Check if a file should be excluded from watching
 */
function shouldExcludeFile(filePath) {
  return CONFIG.excludePatterns.some(pattern => filePath.includes(pattern));
}

/**
 * Generate sitemap
 */
function generateSitemap() {
  if (isGenerating) {
    console.log('⏳ Sitemap generation already in progress, skipping...');
    return;
  }
  
  isGenerating = true;
  console.log('🔄 File change detected, regenerating sitemap...');
  
  exec('node scripts/generate-sitemap.js', (error, stdout, stderr) => {
    isGenerating = false;
    
    if (error) {
      console.error('❌ Error generating sitemap:', error.message);
      return;
    }
    
    if (stderr) {
      console.error('⚠️ Sitemap generation warnings:', stderr);
    }
    
    console.log('✅ Sitemap regenerated successfully');
    console.log(`📅 ${new Date().toLocaleTimeString()}`);
  });
}

/**
 * Watch directory for changes
 */
function watchDirectory() {
  console.log('👀 Watching app directory for changes...');
  console.log('📁 Watch directory:', CONFIG.watchDir);
  console.log('🚫 Excluding:', CONFIG.excludePatterns.join(', '));
  console.log('🔄 Auto-regenerating sitemap on file changes...\n');
  
  fs.watch(CONFIG.watchDir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    
    const filePath = path.join(CONFIG.watchDir, filename);
    
    // Skip excluded files
    if (shouldExcludeFile(filePath)) {
      return;
    }
    
    // Only process page.tsx files
    if (!filename.endsWith('page.tsx')) {
      return;
    }
    
    console.log(`📝 ${eventType}: ${filename}`);
    generateSitemap();
  });
}

/**
 * Initial sitemap generation
 */
function initialize() {
  console.log('🚀 Starting sitemap watcher...');
  console.log('📝 Generating initial sitemap...');
  
  generateSitemap();
  
  // Start watching after initial generation
  setTimeout(() => {
    watchDirectory();
  }, 1000);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Stopping sitemap watcher...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Stopping sitemap watcher...');
  process.exit(0);
});

// Start the watcher
if (require.main === module) {
  initialize();
}

module.exports = { watchDirectory, generateSitemap };
