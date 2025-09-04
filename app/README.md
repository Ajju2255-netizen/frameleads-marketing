## Overview of app/page.tsx

### Page purpose
- Home page assembling key site components: `Navbar`, `Hero`, `BrandLogos`, `FeatureCards`, `ServicesSteps`, `Testimonials`, `CardDecks`, `Footer`, and `FloatingNotifications`.

### Key sections
- Animated background wrappers using gradient blobs.
- `Navbar` at top.
- `Hero` primary callout.
- Trust and social proof via `BrandLogos`, `Testimonials`.
- Services overview via `FeatureCards`, `ServicesSteps`.
- Visual `CardDecks` gallery.
- `Footer` global footer.

### Notes
- Uses React state to fade-in (`isVisible`) but presently only toggled true on mount.
- Entire page is wrapped in `div.min-h-screen.bg-black.relative.overflow-hidden`.


