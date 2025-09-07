#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Google Search Console Indexing Setup Script
 * 
 * This script helps you set up Google Search Console indexing
 * by guiding you through the configuration process.
 */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupGoogleIndexing() {
  console.log('🚀 Google Search Console Indexing Setup\n');
  
  console.log('This script will help you set up automatic Google Search Console indexing.');
  console.log('You will need:');
  console.log('1. A Google Cloud Project with Search Console API enabled');
  console.log('2. A service account with Search Console access');
  console.log('3. Your website verified in Google Search Console\n');
  
  const proceed = await question('Do you want to continue? (y/n): ');
  if (proceed.toLowerCase() !== 'y') {
    console.log('Setup cancelled.');
    rl.close();
    return;
  }
  
  // Get website URL
  console.log('\n📝 Step 1: Website Configuration');
  const siteUrl = await question('Enter your website URL (e.g., https://frameleads.com): ');
  
  if (!siteUrl.startsWith('http')) {
    console.log('❌ URL must start with http:// or https://');
    rl.close();
    return;
  }
  
  // Get service account details
  console.log('\n🔑 Step 2: Service Account Configuration');
  console.log('You need to create a service account in Google Cloud Console:');
  console.log('1. Go to https://console.cloud.google.com');
  console.log('2. Create a new project or select existing one');
  console.log('3. Enable "Google Search Console API"');
  console.log('4. Create a service account');
  console.log('5. Download the JSON key file\n');
  
  const hasServiceAccount = await question('Do you have a service account JSON key file? (y/n): ');
  
  if (hasServiceAccount.toLowerCase() !== 'y') {
    console.log('\n📋 Please follow these steps:');
    console.log('1. Go to Google Cloud Console');
    console.log('2. Create a service account');
    console.log('3. Download the JSON key file');
    console.log('4. Run this setup script again\n');
    rl.close();
    return;
  }
  
  const keyFilePath = await question('Enter the path to your service account JSON key file: ');
  
  if (!fs.existsSync(keyFilePath)) {
    console.log('❌ Key file not found. Please check the path.');
    rl.close();
    return;
  }
  
  try {
    const keyData = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));
    
    // Validate key structure
    if (!keyData.type || !keyData.project_id || !keyData.private_key || !keyData.client_email) {
      console.log('❌ Invalid service account key file format.');
      rl.close();
      return;
    }
    
    console.log('✅ Service account key file is valid');
    console.log(`   Project ID: ${keyData.project_id}`);
    console.log(`   Client Email: ${keyData.client_email}`);
    
  } catch (error) {
    console.log('❌ Error reading key file:', error.message);
    rl.close();
    return;
  }
  
  // Create configuration
  console.log('\n⚙️ Step 3: Creating Configuration');
  
  const configDir = path.join(process.cwd(), 'config');
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  const config = {
    siteUrl: siteUrl,
    serviceAccountKey: JSON.parse(fs.readFileSync(keyFilePath, 'utf8')),
    rateLimit: {
      requests: 100,
      windowMs: 60000
    },
    batchSize: 10
  };
  
  const configFile = path.join(configDir, 'google-indexing.json');
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
  
  console.log(`✅ Configuration saved to: ${configFile}`);
  
  // Create .env file
  console.log('\n🔐 Step 4: Environment Variables');
  const createEnv = await question('Do you want to create a .env file for environment variables? (y/n): ');
  
  if (createEnv.toLowerCase() === 'y') {
    const envContent = `# Google Search Console Indexing
GOOGLE_SITE_URL=${siteUrl}
GOOGLE_SERVICE_ACCOUNT_KEY='${JSON.stringify(config.serviceAccountKey)}'
`;
    
    const envFile = path.join(process.cwd(), '.env.local');
    fs.writeFileSync(envFile, envContent);
    
    console.log(`✅ Environment variables saved to: ${envFile}`);
    console.log('⚠️  Remember to add .env.local to your .gitignore file!');
  }
  
  // Test configuration
  console.log('\n🧪 Step 5: Testing Configuration');
  const testConfig = await question('Do you want to test the configuration? (y/n): ');
  
  if (testConfig.toLowerCase() === 'y') {
    console.log('Running dry-run test...');
    
    try {
      const { execSync } = require('child_process');
      execSync('node scripts/google-indexing.js --dry-run', { stdio: 'inherit' });
      console.log('✅ Configuration test successful!');
    } catch (error) {
      console.log('❌ Configuration test failed:', error.message);
    }
  }
  
  // Final instructions
  console.log('\n🎉 Setup Complete!');
  console.log('\nNext steps:');
  console.log('1. Add your service account email to Google Search Console:');
  console.log('   - Go to https://search.google.com/search-console');
  console.log('   - Go to Settings > Users and permissions');
  console.log('   - Add the service account email as a user');
  console.log('   - Grant "Full" access');
  console.log('\n2. Test the indexing:');
  console.log('   npm run submit-to-google');
  console.log('\n3. The script will run automatically after build:');
  console.log('   npm run build');
  
  console.log('\n📚 For more information, see: scripts/GOOGLE_INDEXING_README.md');
  
  rl.close();
}

// Run setup
setupGoogleIndexing().catch(console.error);
