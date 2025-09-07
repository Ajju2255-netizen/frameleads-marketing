#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Complete Deploy Workflow Script
 * 
 * This script runs the complete deployment workflow:
 * 1. Generate sitemap
 * 2. Submit to Google Search Console
 * 3. Generate deployment report
 * 
 * Usage:
 * - Run manually: node scripts/deploy-workflow.js
 * - Run via npm: npm run deploy-workflow
 * - Integrate into CI/CD pipeline
 */

const CONFIG = {
  logFile: './logs/deploy-workflow.log',
  reportFile: './logs/deployment-report.json',
  steps: [
    {
      name: 'Generate HTML Sitemap',
      command: 'npm run generate-sitemap',
      critical: true
    },
    {
      name: 'Generate XML Sitemap',
      command: 'npm run generate-xml-sitemap',
      critical: true
    },
    {
      name: 'Submit to Google',
      command: 'npm run submit-to-google',
      critical: false
    }
  ]
};

class DeployWorkflow {
  constructor() {
    this.startTime = new Date();
    this.results = [];
    this.ensureLogDir();
  }
  
  ensureLogDir() {
    const logDir = path.dirname(CONFIG.logFile);
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
    fs.appendFileSync(CONFIG.logFile, JSON.stringify(logEntry) + '\n');
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
  
  async runStep(step) {
    this.info(`🚀 Starting: ${step.name}`);
    
    try {
      const startTime = Date.now();
      const output = execSync(step.command, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      
      this.success(`✅ Completed: ${step.name} (${duration}ms)`);
      
      this.results.push({
        step: step.name,
        status: 'success',
        duration,
        output: output.trim(),
        timestamp: new Date().toISOString()
      });
      
      return true;
      
    } catch (error) {
      const duration = Date.now() - Date.now();
      
      this.error(`❌ Failed: ${step.name}`, {
        error: error.message,
        output: error.stdout || error.stderr
      });
      
      this.results.push({
        step: step.name,
        status: 'error',
        duration,
        error: error.message,
        output: error.stdout || error.stderr,
        timestamp: new Date().toISOString()
      });
      
      return false;
    }
  }
  
  async runWorkflow() {
    this.info('🎯 Starting deployment workflow...');
    this.info(`📋 Running ${CONFIG.steps.length} steps`);
    
    let allSuccess = true;
    let criticalFailure = false;
    
    for (let i = 0; i < CONFIG.steps.length; i++) {
      const step = CONFIG.steps[i];
      const success = await this.runStep(step);
      
      if (!success) {
        allSuccess = false;
        if (step.critical) {
          criticalFailure = true;
          this.error(`💥 Critical step failed: ${step.name}`);
          break;
        } else {
          this.info(`⚠️  Non-critical step failed: ${step.name}, continuing...`);
        }
      }
    }
    
    const totalDuration = Date.now() - this.startTime.getTime();
    
    // Generate report
    const report = {
      timestamp: this.startTime.toISOString(),
      totalDuration,
      status: criticalFailure ? 'failed' : (allSuccess ? 'success' : 'partial'),
      steps: this.results,
      summary: {
        totalSteps: CONFIG.steps.length,
        successfulSteps: this.results.filter(r => r.status === 'success').length,
        failedSteps: this.results.filter(r => r.status === 'error').length,
        successRate: ((this.results.filter(r => r.status === 'success').length / CONFIG.steps.length) * 100).toFixed(2) + '%'
      }
    };
    
    // Save report
    fs.writeFileSync(CONFIG.reportFile, JSON.stringify(report, null, 2));
    
    // Final summary
    this.info('📊 Deployment Workflow Summary:', report.summary);
    this.info(`📁 Report saved to: ${CONFIG.reportFile}`);
    
    if (criticalFailure) {
      this.error('💥 Deployment workflow failed due to critical step failure');
      process.exit(1);
    } else if (allSuccess) {
      this.success('🎉 Deployment workflow completed successfully!');
    } else {
      this.info('⚠️  Deployment workflow completed with some non-critical failures');
    }
    
    return report;
  }
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Deploy Workflow Script

Usage:
  node scripts/deploy-workflow.js [options]

Options:
  --help, -h          Show this help message
  --steps-only        Show available steps without running
  --dry-run          Show what would be executed without running

Examples:
  node scripts/deploy-workflow.js
  node scripts/deploy-workflow.js --steps-only
  node scripts/deploy-workflow.js --dry-run
    `);
    process.exit(0);
  }
  
  if (args.includes('--steps-only')) {
    console.log('📋 Available deployment steps:');
    CONFIG.steps.forEach((step, index) => {
      console.log(`${index + 1}. ${step.name} (${step.critical ? 'Critical' : 'Non-critical'})`);
      console.log(`   Command: ${step.command}`);
    });
    process.exit(0);
  }
  
  if (args.includes('--dry-run')) {
    console.log('🔍 Dry run mode - showing what would be executed:');
    CONFIG.steps.forEach((step, index) => {
      console.log(`${index + 1}. ${step.name}`);
      console.log(`   Command: ${step.command}`);
      console.log(`   Critical: ${step.critical ? 'Yes' : 'No'}`);
    });
    process.exit(0);
  }
  
  // Run the workflow
  const workflow = new DeployWorkflow();
  workflow.runWorkflow().catch(error => {
    console.error('💥 Workflow failed:', error.message);
    process.exit(1);
  });
}

module.exports = { DeployWorkflow, CONFIG };
