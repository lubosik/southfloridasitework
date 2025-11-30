import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work & Site Development in Miami, FL | Miami-Dade County',
  description: 'Complete site work and site development services in Miami-Dade County. Commercial and residential site development packages.',
  openGraph: {
    title: 'Site Work & Site Development in Miami, FL | Miami-Dade County',
    description: 'Complete site work and site development services in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/site-work-site-development/`,
  },
}

const miamiSubServices = [
  {
    name: 'Complete Site Development Packages',
    slug: 'complete-site-development-packages',
    description: 'Comprehensive site development from clearing to building pad preparation for commercial and residential projects in Miami-Dade County.',
  },
  {
    name: 'Commercial Site Work',
    slug: 'commercial-site-work',
    description: 'Site work services for retail, office, and commercial developments throughout Miami-Dade County.',
  },
  {
    name: 'Custom Home Site Work',
    slug: 'custom-home-site-work',
    description: 'Site preparation and development services for custom home construction in Miami-Dade County.',
  },
  {
    name: 'Subdivision and Infrastructure',
    slug: 'subdivision-infrastructure',
    description: 'Site work for new subdivisions and infrastructure development in Miami-Dade County.',
  },
  {
    name: 'Cut and Fill and Mass Earthmoving',
    slug: 'cut-fill-mass-earthmoving',
    description: 'Large-scale earthmoving and cut/fill operations for site development in Miami-Dade County.',
  },
  {
    name: 'Value Engineering and Pre-Construction',
    slug: 'value-engineering-preconstruction',
    description: 'Pre-construction planning and value engineering for site work projects in Miami-Dade County.',
  },
]

export default function MiamiSiteWorkSiteDevelopmentPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work and Site Development in Miami, FL"
        subtitle="Complete site development services for commercial and residential projects across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and site development services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Site Work and Site Development in Miami-Dade County</h2>
            <p className={styles.intro}>
              Site work and site development in Miami-Dade County requires specialized expertise 
              to navigate high water tables, flood zones, coastal soils, and strict permitting 
              requirements. Our network of licensed contractors has extensive experience 
              completing site development projects throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              From initial site clearing and grading to final building pad preparation, we 
              coordinate contractors who understand Miami-Dade RER and DERM requirements, 
              flood zone compliance, and the unique challenges of developing sites in South 
              Florida&apos;s coastal environment.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Miami-Dade Site Development Expertise</h3>
              <p className={styles.highlightText}>
                Our contractors are experienced with Miami-Dade County permitting, flood zone 
                requirements, coastal construction standards, and the high water table conditions 
                that affect site development throughout the county.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami Site Work Services</h2>
            <p className={styles.text}>
              Select a service to learn more about site work and site development in Miami-Dade County:
            </p>
            <div className={styles.subServicesGrid}>
              {miamiSubServices.map((service) => (
                <a
                  key={service.slug}
                  href={`/service-areas/miami/site-work-site-development/${service.slug}/`}
                  className={styles.subServiceCard}
                >
                  <h3 className={styles.subServiceTitle}>{service.name}</h3>
                  <p className={styles.subServiceDescription}>{service.description}</p>
                  <span className={styles.subServiceLink}>Learn More →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Site Development Considerations</h2>
            <div className={styles.considerationsGrid}>
              <div className={styles.considerationItem}>
                <h3 className={styles.considerationTitle}>High Water Table</h3>
                <p className={styles.considerationDescription}>
                  Miami-Dade&apos;s high water table requires specialized dewatering and foundation 
                  design. Our contractors understand local groundwater conditions and 
                  employ appropriate techniques for site development.
                </p>
              </div>
              <div className={styles.considerationItem}>
                <h3 className={styles.considerationTitle}>Flood Zone Compliance</h3>
                <p className={styles.considerationDescription}>
                  Many Miami properties are in FEMA flood zones requiring specific elevation 
                  requirements. We coordinate projects to meet Base Flood Elevation (BFE) 
                  requirements and obtain necessary permits.
                </p>
              </div>
              <div className={styles.considerationItem}>
                <h3 className={styles.considerationTitle}>RER and DERM Permitting</h3>
                <p className={styles.considerationDescription}>
                  Miami-Dade RER and DERM have specific requirements for site work, tree removal, 
                  and environmental protection. We coordinate all necessary permits and ensure 
                  compliance with county regulations.
                </p>
              </div>
              <div className={styles.considerationItem}>
                <h3 className={styles.considerationTitle}>Coastal Soils</h3>
                <p className={styles.considerationDescription}>
                  Coastal areas feature unique soil conditions including limestone bedrock, sandy 
                  soils, and organic materials. Our contractors adapt grading and excavation 
                  techniques to local soil characteristics.
                </p>
              </div>
              <div className={styles.considerationItem}>
                <h3 className={styles.considerationTitle}>Stormwater Management</h3>
                <p className={styles.considerationDescription}>
                  Miami&apos;s heavy rainfall and flat topography require comprehensive 
                  stormwater management. We design and implement drainage systems that meet 
                  county requirements and protect properties from flooding.
                </p>
              </div>
              <div className={styles.considerationItem}>
                <h3 className={styles.considerationTitle}>Hurricane Preparedness</h3>
                <p className={styles.considerationDescription}>
                  Site development must account for hurricane-force winds and storm surge. Our 
                  contractors implement erosion control, proper drainage, and site preparation 
                  that enhances property resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Typical Project Sizes in Miami</h2>
            <p className={styles.text}>
              Site work and site development projects in Miami-Dade County typically range from:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Residential Projects:</strong> $25,000 to $150,000+ for custom home site 
                work and residential development projects.
              </li>
              <li>
                <strong>Commercial Projects:</strong> $100,000 to $1,000,000+ for retail, office, 
                and commercial site development projects.
              </li>
              <li>
                <strong>Subdivision Projects:</strong> $500,000 to $5,000,000+ for new subdivision 
                and infrastructure development projects.
              </li>
            </ul>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-6)' }}>
              Project costs vary based on site size, elevation changes, flood zone requirements, 
              permitting complexity, and scope of work. We provide detailed quotes based on your 
              specific project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.text}>
              <a href="/service-areas/miami/" className={styles.backLink}>
                ← Back to Miami Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Site Development Project?"
        description="Get a free quote for your site work and site development project in Miami-Dade County. We'll coordinate licensed contractors who understand local conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

