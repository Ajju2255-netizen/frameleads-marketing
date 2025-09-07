# Automatic Sitemap Generator

This script automatically generates and updates the sitemap page whenever new content is added to the website.

## 🚀 Features

- **Automatic Discovery**: Scans the entire `app` directory for `page.tsx` files
- **Smart Categorization**: Automatically categorizes pages into logical groups
- **Dynamic Generation**: Updates the sitemap page with current content
- **SEO Optimized**: Generates proper descriptions and metadata
- **CI/CD Ready**: Can be integrated into deployment pipelines

## 📁 File Structure

```
scripts/
├── generate-sitemap.js    # Main script
└── README.md             # This documentation
```

## 🛠️ Usage

### Manual Execution

```bash
# Run the script directly
node scripts/generate-sitemap.js

# Or use npm script
npm run generate-sitemap
```

### Automatic Execution

The script is configured to run automatically:

- **After Build**: Runs automatically after `npm run build` (via `postbuild` hook)
- **CI/CD Integration**: Can be added to deployment pipelines
- **Git Hooks**: Can be integrated with pre-commit or pre-push hooks

## ⚙️ Configuration

The script can be configured by modifying the `CONFIG` object in `generate-sitemap.js`:

```javascript
const CONFIG = {
  appDir: './app',                    // Directory to scan
  outputFile: './app/sitemap/page.tsx', // Output file
  excludePatterns: [                  // Files to exclude
    'layout.tsx',
    'loading.tsx',
    'error.tsx',
    // ...
  ],
  excludeDirs: [                      // Directories to exclude
    'api',
    'components',
    'lib',
    // ...
  ]
};
```

## 📊 Page Categories

Pages are automatically categorized into:

1. **Main Pages** - Home, Contact, Locations, Industries
2. **Services** - All service pages
3. **Advertising Platforms** - Platform-specific pages
4. **Locations** - Location-specific pages
5. **Industries** - Industry-specific pages
6. **Company** - About, Team, Careers
7. **Resources** - Guides, Tools, Audits
8. **Academy** - Academy-related pages
9. **Legal** - Privacy, Terms, Cookies, Disclaimer

## 🔧 Customization

### Adding New Categories

To add a new category, update the `PAGE_CATEGORIES` object:

```javascript
const PAGE_CATEGORIES = {
  // ... existing categories
  newCategory: {
    title: 'New Category',
    icon: 'IconName',
    description: 'Description of the category',
    patterns: ['pattern1', 'pattern2'] // URL patterns to match
  }
};
```

### Custom Descriptions

Add custom descriptions in the `generateDescription` function:

```javascript
const descriptions = {
  'custom-page': 'Custom description for this page',
  // ... more descriptions
};
```

## 📈 Output

The script generates:

- **Updated sitemap page** with all current pages
- **Categorized organization** of all pages
- **Dynamic statistics** showing page counts
- **SEO-friendly descriptions** for each page
- **Timestamp** showing when the sitemap was last updated

## 🔄 Integration Examples

### GitHub Actions

```yaml
name: Generate Sitemap
on:
  push:
    branches: [main]
    paths: ['app/**']

jobs:
  generate-sitemap:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run generate-sitemap
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add app/sitemap/page.tsx
          git commit -m "Auto-update sitemap" || exit 0
          git push
```

### Pre-commit Hook

```bash
#!/bin/sh
# .git/hooks/pre-commit

echo "Generating sitemap..."
npm run generate-sitemap

# Add the updated sitemap to the commit
git add app/sitemap/page.tsx
```

## 🐛 Troubleshooting

### Common Issues

1. **Permission Denied**: Make sure the script has write permissions to the output directory
2. **Missing Pages**: Check that pages follow the `page.tsx` naming convention
3. **Categorization Issues**: Verify that page patterns match your URL structure

### Debug Mode

Add debug logging by modifying the script:

```javascript
const DEBUG = true;

if (DEBUG) {
  console.log('Debug: Found pages:', pages);
  console.log('Debug: Categorized:', categorizedPages);
}
```

## 📝 Notes

- The script preserves the existing sitemap page structure and styling
- Only pages with `page.tsx` files are included
- The script automatically excludes common non-page files
- Generated timestamps help track when the sitemap was last updated
- The script is safe to run multiple times without issues

## 🤝 Contributing

To improve the script:

1. Update the categorization logic in `categorizePages()`
2. Add new page patterns in `PAGE_CATEGORIES`
3. Enhance descriptions in `generateDescription()`
4. Improve error handling and logging

## 📄 License

This script is part of the Frameleads marketing website project.
