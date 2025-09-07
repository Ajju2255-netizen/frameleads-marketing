# Google Search Console Indexing Script

This script automatically submits all website pages to Google Search Console for indexing, ensuring new content gets discovered and indexed quickly by Google.

## 🚀 Features

- **Automatic Submission**: Submits all pages to Google Search Console
- **Smart Prioritization**: Prioritizes important pages (home, services, etc.)
- **Rate Limiting**: Respects Google's API rate limits
- **Batch Processing**: Processes pages in efficient batches
- **Comprehensive Logging**: Detailed logs and results tracking
- **Error Handling**: Robust error handling and retry logic
- **CI/CD Ready**: Integrates with deployment pipelines

## 📋 Prerequisites

### 1. Google Search Console Setup

1. **Verify Your Website**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add and verify your website (frameleads.com)
   - Ensure you have ownership verification

2. **Enable Search Console API**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable the "Google Search Console API"
   - Create a service account with appropriate permissions

### 2. Service Account Setup

1. **Create Service Account**:
   ```bash
   # In Google Cloud Console
   # Go to IAM & Admin > Service Accounts
   # Click "Create Service Account"
   # Name: "search-console-indexing"
   # Description: "Automated Google Search Console indexing"
   ```

2. **Generate Key**:
   - Click on the created service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON" format
   - Download the key file

3. **Add to Search Console**:
   - Go to Google Search Console
   - Go to Settings > Users and permissions
   - Add the service account email as a user
   - Grant "Full" access

## ⚙️ Configuration

### Method 1: Environment Variables (Recommended)

```bash
# Set your website URL
export GOOGLE_SITE_URL="https://frameleads.com"

# Set your service account key (JSON string)
export GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"your-project",...}'
```

### Method 2: Configuration File

Create `config/google-indexing.json`:

```json
{
  "siteUrl": "https://frameleads.com",
  "serviceAccountKey": {
    "type": "service_account",
    "project_id": "your-project-id",
    "private_key_id": "your-private-key-id",
    "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
    "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
    "client_id": "your-client-id",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com"
  },
  "rateLimit": {
    "requests": 100,
    "windowMs": 60000
  },
  "batchSize": 10
}
```

### Method 3: Create Sample Config

```bash
node scripts/google-indexing.js --create-config
```

## 🛠️ Usage

### Manual Execution

```bash
# Submit all pages to Google
npm run submit-to-google

# Or run directly
node scripts/google-indexing.js
```

### Dry Run (Test Mode)

```bash
# See what would be submitted without actually submitting
node scripts/google-indexing.js --dry-run
```

### Automatic Execution

The script runs automatically after build:

```bash
npm run build  # Automatically generates sitemap and submits to Google
```

## 📊 Page Prioritization

Pages are automatically prioritized for submission:

1. **Priority 1**: Main pages (Home, Contact, About)
2. **Priority 2**: Service pages (Digital Marketing, SEO, etc.)
3. **Priority 3**: Location pages (Digital Marketing in [Country])
4. **Priority 4**: Industry pages (B2B, Real Estate, etc.)
5. **Priority 5**: Resources and tools
6. **Priority 6**: Academy pages
7. **Priority 7**: Legal pages
8. **Priority 8**: Advertising platform pages

## 📈 Rate Limiting

The script includes intelligent rate limiting:

- **100 requests per minute** (Google's limit)
- **Batch processing** (10 pages per batch)
- **Automatic delays** between batches
- **Retry logic** for failed requests

## 📝 Logging and Results

### Log Files

- **Logs**: `logs/google-indexing.log`
- **Results**: `logs/indexing-results.json`

### Log Format

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "level": "info",
  "message": "Submitting batch 1/6 (10 pages)",
  "data": null
}
```

### Results Format

```json
{
  "timestamp": "2024-01-15T10:35:00.000Z",
  "totalPages": 59,
  "results": [
    {
      "url": "https://frameleads.com/",
      "status": 200,
      "response": {...}
    }
  ],
  "summary": {
    "success": 58,
    "errors": 1,
    "successRate": "98.31%"
  }
}
```

## 🔧 Customization

### Adding New Page Types

Update the `getPagePriority` function in the script:

```javascript
function getPagePriority(url) {
  if (url.includes('/new-page-type')) return 2; // High priority
  // ... existing logic
}
```

### Modifying Rate Limits

Update the configuration:

```javascript
const CONFIG = {
  rateLimit: {
    requests: 50,    // Reduce if hitting limits
    windowMs: 60000  // 1 minute window
  },
  batchSize: 5       // Smaller batches
};
```

## 🚀 CI/CD Integration

### GitHub Actions

```yaml
name: Deploy and Index
on:
  push:
    branches: [main]

jobs:
  deploy-and-index:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build and deploy
        run: npm run build
        
      - name: Submit to Google
        env:
          GOOGLE_SITE_URL: ${{ secrets.GOOGLE_SITE_URL }}
          GOOGLE_SERVICE_ACCOUNT_KEY: ${{ secrets.GOOGLE_SERVICE_ACCOUNT_KEY }}
        run: npm run submit-to-google
```

### Vercel Integration

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "env": {
    "GOOGLE_SITE_URL": "https://frameleads.com",
    "GOOGLE_SERVICE_ACCOUNT_KEY": "@google-service-account-key"
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Errors**:
   ```
   Error: No access token in response
   ```
   - Check service account key format
   - Verify API is enabled
   - Ensure service account has Search Console access

2. **Rate Limit Errors**:
   ```
   Error: Rate limit exceeded
   ```
   - Reduce `rateLimit.requests` in config
   - Increase `rateLimit.windowMs`
   - Reduce `batchSize`

3. **Site Not Found**:
   ```
   Error: Site not found in Search Console
   ```
   - Verify site URL format (https://frameleads.com)
   - Ensure site is verified in Search Console
   - Check service account permissions

### Debug Mode

Enable detailed logging:

```javascript
const CONFIG = {
  // ... existing config
  debug: true
};
```

### Testing

1. **Dry Run**: `node scripts/google-indexing.js --dry-run`
2. **Single Page**: Modify script to test with one page
3. **Check Logs**: Review `logs/google-indexing.log`

## 📊 Monitoring

### Success Metrics

- **Submission Rate**: % of pages successfully submitted
- **Indexing Time**: How quickly pages get indexed
- **Error Rate**: % of failed submissions

### Google Search Console

Monitor indexing status in:
- **URL Inspection Tool**: Check individual page status
- **Sitemaps**: Verify sitemap submission
- **Coverage Report**: Monitor indexing coverage

## 🔒 Security

### Best Practices

1. **Environment Variables**: Never commit service account keys
2. **Limited Permissions**: Use service account with minimal required permissions
3. **Regular Rotation**: Rotate service account keys periodically
4. **Monitoring**: Monitor API usage and costs

### Secrets Management

```bash
# Use environment variables
export GOOGLE_SERVICE_ACCOUNT_KEY="$(cat path/to/service-account.json)"

# Or use secret management tools
# AWS Secrets Manager, Azure Key Vault, etc.
```

## 📚 API Reference

### Google Search Console API

- **Documentation**: [Google Search Console API](https://developers.google.com/webmaster-tools/search-console-api)
- **Rate Limits**: 100 requests per minute
- **Authentication**: Service account with JWT

### Script Functions

- `submitPagesToGoogle()`: Main function
- `getAllPages()`: Get all website pages
- `submitUrl()`: Submit single URL
- `getAccessToken()`: Get OAuth token

## 🤝 Contributing

To improve the script:

1. **Add New Features**: New submission methods, better error handling
2. **Improve Logging**: More detailed logs, better formatting
3. **Optimize Performance**: Better rate limiting, parallel processing
4. **Add Tests**: Unit tests, integration tests

## 📄 License

This script is part of the Frameleads marketing website project.

## 🆘 Support

For issues or questions:

1. Check the troubleshooting section
2. Review Google Search Console API documentation
3. Check the logs for detailed error messages
4. Test with dry-run mode first
