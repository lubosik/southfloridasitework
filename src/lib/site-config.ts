/**
 * Site Configuration
 * Shared configuration values for South Florida Site Work
 * Phone and email shared with Miami Septic Pros holding company
 */

export const siteConfig = {
  // Site Identity
  name: 'South Florida Site Work',
  tagline: 'Site Work, Earthwork and Land Grading',
  domain: 'southfloridasitework.com',
  url: 'https://southfloridasitework.com',

  // Contact Information (shared with Miami Septic Pros)
  phone: {
    display: '(561) 556-2659',
    href: 'tel:+15615562659',
    raw: '+15615562659',
  },
  email: {
    display: 'info@miamisepticpros.com',
    href: 'mailto:info@miamisepticpros.com',
    raw: 'info@miamisepticpros.com',
  },

  // Service Areas
  serviceAreas: [
    {
      name: 'Miami',
      county: 'Miami-Dade County',
      slug: 'miami',
      cities: ['Miami', 'Miami Beach', 'Coral Gables', 'Aventura', 'Doral', 'Hialeah'],
    },
    {
      name: 'Fort Lauderdale',
      county: 'Broward County',
      slug: 'fort-lauderdale',
      cities: ['Fort Lauderdale', 'Hollywood', 'Pompano Beach', 'Deerfield Beach', 'Weston'],
    },
    {
      name: 'West Palm Beach',
      county: 'Palm Beach County',
      slug: 'west-palm-beach',
      cities: ['West Palm Beach', 'Boca Raton', 'Delray Beach', 'Jupiter', 'Palm Beach Gardens'],
    },
    {
      name: 'Florida Keys',
      county: 'Monroe County',
      slug: 'florida-keys',
      cities: ['Key West', 'Key Largo', 'Islamorada', 'Marathon', 'Big Pine Key'],
    },
  ],

  // Primary Service Categories
  primaryServices: [
    {
      name: 'Site Work and Site Development',
      slug: 'site-work-site-development',
      description: 'Complete site development packages for commercial and residential projects',
    },
    {
      name: 'Land Grading and Site Grading',
      slug: 'land-grading-site-grading',
      description: 'Precision grading for building pads, parking lots, roads and drainage',
    },
    {
      name: 'Excavation and Earthwork',
      slug: 'excavation-earthwork',
      description: 'Mass excavation, cut and fill, utility trenches and earthmoving',
    },
    {
      name: 'Drainage and Stormwater Solutions',
      slug: 'drainage-stormwater-solutions',
      description: 'Comprehensive drainage systems for flood-prone and coastal properties',
    },
    {
      name: 'Land Clearing and Lot Preparation',
      slug: 'land-clearing-lot-preparation',
      description: 'Vegetation clearing, stump removal, grubbing and site preparation',
    },
  ],

  // Business Model
  businessModel: {
    type: 'service-area',
    description: 'We coordinate work using a vetted network of licensed contractors. We handle intake, scoping, scheduling and support, then dispatch the nearest qualified, licensed contractor with the correct equipment and certifications to perform the field work.',
    address: {
      type: 'dispatch office',
      note: 'No walk-ins. Scheduling and support by phone and online.',
    },
  },

  // Project Information
  projectInfo: {
    typicalMinimum: 25000,
    budgetRanges: [
      { label: 'Under $25,000', value: 'under-25000' },
      { label: '$25,000 - $50,000', value: '25000-50000' },
      { label: '$50,000 - $100,000', value: '50000-100000' },
      { label: '$100,000 - $250,000', value: '100000-250000' },
      { label: '$250,000 - $500,000', value: '250000-500000' },
      { label: '$500,000+', value: '500000+' },
    ],
    targetAudience: [
      'General Contractors',
      'Developers',
      'Custom Home Builders',
      'Commercial Property Owners',
      'High-End Homeowners',
    ],
  },

  // SEO Defaults
  seo: {
    defaultTitle: 'South Florida Site Work | Earthwork & Land Grading',
    defaultDescription: 'Professional site work, earthwork and land grading services across Miami-Dade, Broward, Palm Beach and Monroe Counties. Licensed contractors for commercial and custom home projects.',
    defaultImage: '/images/og-default.jpg',
  },
}

