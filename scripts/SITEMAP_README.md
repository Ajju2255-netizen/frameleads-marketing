# Sitemap Auto-Generation System

This directory contains scripts for automatically generating and maintaining the website sitemap.

## Scripts Overview

### 1. `generate-sitemap.js`
**Main sitemap generation script**

- Scans the `app/` directory for all `page.tsx` files
- Categorizes pages into logical groups (Services, Industries, Locations, etc.)
- Generates a comprehensive sitemap page at `app/sitemap/page.tsx`
- Updates timestamps and page counts automatically

**Usage:**
```bash
npm run generate-sitemap
# or
node scripts/generate-sitemap.js
```

### 2. `watch-sitemap.js`
**Automatic sitemap watcher**

- Watches the `app/` directory for file changes
- Automatically regenerates sitemap when new pages are added/removed
- Runs in the background during development
- Excludes components, lib, and other non-page files

**Usage:**
```bash
npm run watch-sitemap
# or
node scripts/watch-sitemap.js
```

### 3. `generate-xml-sitemap.js`
**XML sitemap generator**

- Creates an XML sitemap for search engines
- Outputs to `public/sitemap.xml`
- Used for SEO and search engine indexing

## Page Categories

The system automatically categorizes pages into:

- **Services**: Digital marketing services (SEO, PPC, Content Marketing, etc.)
- **Advertising Platforms**: Platform-specific ad services (Google Ads, Meta Ads, etc.)
- **Locations**: Location-based services (Digital Marketing in [Country/City])
- **Industries**: Industry-specific services (Healthcare, Technology, Real Estate, etc.)
- **Company**: Company information pages (About, Team, Careers)
- **Resources**: Tools and resources (ROI Calculator, Marketing Guide, etc.)
- **Academy**: Educational content and training
- **Legal**: Legal pages (Privacy, Terms, etc.)
- **Main**: Main navigation pages (Contact, Sitemap, etc.)

## Adding New Pages

### Automatic Detection
- Simply create a new `page.tsx` file in the `app/` directory
- The system will automatically detect and categorize it
- Run `npm run generate-sitemap` to update the sitemap

### Manual Categorization
If a page isn't categorized correctly, update the patterns in `generate-sitemap.js`:

```javascript
const PAGE_CATEGORIES = {
  industries: {
    title: 'Industries',
    icon: 'Building2',
    description: 'Industry-specific services',
    patterns: ['healthcare-and-medical', 'technology-and-saas', ...]
  }
};
```

## Development Workflow

### During Development
1. Start the watcher: `npm run watch-sitemap`
2. Create new pages as needed
3. Sitemap updates automatically

### Before Deployment
1. Run: `npm run generate-sitemap`
2. Run: `npm run generate-xml-sitemap`
3. Commit the updated sitemap files

## File Structure

```
scripts/
├── generate-sitemap.js      # Main generation script
├── watch-sitemap.js         # Auto-watcher
├── generate-xml-sitemap.js  # XML sitemap generator
└── SITEMAP_README.md        # This documentation

app/
└── sitemap/
    └── page.tsx             # Generated sitemap page

public/
└── sitemap.xml              # Generated XML sitemap
```

## Troubleshooting

### Sitemap Not Updating
- Check if the watcher is running: `ps aux | grep watch-sitemap`
- Restart the watcher: `npm run watch-sitemap`
- Manually regenerate: `npm run generate-sitemap`

### Pages Not Categorized
- Check the patterns in `generate-sitemap.js`
- Add new patterns for your page type
- Regenerate the sitemap

### Build Errors
- Ensure all icon imports are correct
- Check for undefined variables in generated content
- Run `npm run build` to test

## Recent Updates

- ✅ Added healthcare-and-medical to industries patterns
- ✅ Fixed totalPages calculation bug
- ✅ Added automatic watcher functionality
- ✅ Improved error handling and logging
