# South Florida Site Work

Production-ready Next.js static site for South Florida Site Work, Earthwork and Land Grading services.

## Project Structure

```
/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable React components
│   ├── lib/              # Configuration and utilities
│   │   ├── brand-tokens.ts
│   │   └── site-config.ts
│   └── styles/           # Global styles
│       └── globals.css
├── public/               # Static assets
│   ├── images/           # Optimized images
│   ├── robots.txt
│   ├── sitemap-services.xml
│   └── sitemap-locations.xml
├── seo/                  # SEO research and planning
└── out/                  # Static export output (generated)
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## Brand Colors

- **Primary**: Deep Navy/Blue-Grey (#102a43 - #0a1c2e)
- **Accent**: Construction Amber/Safety Yellow (#FFBF00)

## Typography

- Primary: Inter, Poppins, Montserrat (Sans Serif)

## Phase Status

- ✅ Phase 1: Scaffold (Complete)

