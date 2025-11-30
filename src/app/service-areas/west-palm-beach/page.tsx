import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work Services in West Palm Beach, FL | Palm Beach County',
  description: 'Complete site work, earthwork, and land grading services in Palm Beach County. Licensed contractors for commercial and residential projects.',
  openGraph: {
    title: 'Site Work Services in West Palm Beach, FL | Palm Beach County',
    description: 'Complete site work, earthwork, and land grading services in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/`,
  },
}

export default function WestPalmBeachServiceAreasPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work Services in West Palm Beach, FL"
        subtitle="Complete site development, earthwork, and grading services for commercial and residential projects across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and earthwork services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Site Work Services in Palm Beach County</h2>
            <p className={styles.intro}>
              Palm Beach County presents unique challenges for site work, earthwork, and land 
              grading projects. With high water tables, extensive flood zones, coastal soils, 
              and strict permitting requirements through Palm Beach County&apos;s Building Division 
              and Environmental Resources Management (ERM), successful site development requires specialized 
              expertise and local knowledge.
            </p>
            <p className={styles.text}>
              Our network of licensed contractors has extensive experience working throughout 
              Palm Beach County, from West Palm Beach and Palm Beach to Boca Raton, Delray Beach, 
              Jupiter, and Palm Beach Gardens. We understand the local conditions, regulatory requirements, 
              and best practices needed to complete your project successfully.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Palm Beach County Expertise</h3>
              <p className={styles.highlightText}>
                Our contractors are familiar with Palm Beach County&apos;s Building Division permit 
                process, Environmental Resources Management (ERM) requirements, Unified Land Development 
                Code (ULDC), SFWMD Environmental Resource Permits, flood zone compliance, coastal 
                construction standards, and the unique soil conditions found throughout the county.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our West Palm Beach Service Categories</h2>
            <p className={styles.text}>
              Select a service category to view available services in West Palm Beach:
            </p>
            <div className={styles.servicesGrid}>
              {siteConfig.primaryServices.map((service) => (
                <a
                  key={service.slug}
                  href={`/service-areas/west-palm-beach/${service.slug}/`}
                  className={styles.serviceCard}
                >
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.serviceLink}>View West Palm Beach Services →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>West Palm Beach-Specific Site Work Challenges</h2>
            <div className={styles.challengesGrid}>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>High Water Table</h3>
                <p className={styles.challengeDescription}>
                  Palm Beach County&apos;s high water table requires specialized dewatering techniques 
                  and foundation design. Our contractors understand local groundwater conditions 
                  and employ appropriate methods for excavation and site preparation in West Palm 
                  Beach and throughout Palm Beach County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Flood Zone Compliance</h3>
                <p className={styles.challengeDescription}>
                  Many West Palm Beach and Palm Beach County properties are located in FEMA flood 
                  zones requiring specific elevation requirements and flood-resistant construction. 
                  We coordinate projects to meet Base Flood Elevation (BFE) requirements and 
                  obtain necessary permits.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Coastal Soils</h3>
                <p className={styles.challengeDescription}>
                  Coastal areas in West Palm Beach feature unique soil conditions including 
                  limestone bedrock, sandy soils, and organic materials. Our contractors adapt 
                  grading and excavation techniques to local soil characteristics throughout 
                  Palm Beach County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>ERM and Environmental Permitting</h3>
                <p className={styles.challengeDescription}>
                  Palm Beach County requires Environmental Resources Management (ERM) review for 
                  applicable projects, plus Unified Land Development Code (ULDC) compliance. 
                  We coordinate all necessary permits and ensure compliance with county regulations.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Stormwater Management</h3>
                <p className={styles.challengeDescription}>
                  West Palm Beach&apos;s heavy rainfall and flat topography require comprehensive 
                  stormwater management. We design and implement drainage systems that meet SFWMD 
                  Environmental Resource Permit requirements and protect properties from flooding.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Hurricane Preparedness</h3>
                <p className={styles.challengeDescription}>
                  Site work must account for hurricane-force winds and storm surge. Our 
                  contractors implement erosion control, proper drainage, and site preparation 
                  that enhances property resilience in West Palm Beach and throughout Palm Beach County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our West Palm Beach Service Areas</h2>
            <p className={styles.text}>
              We coordinate site work, earthwork, and land grading services throughout Palm Beach 
              County, including:
            </p>
            <div className={styles.locationsList}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>West Palm Beach Neighborhoods</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>South of Southern</li>
                  <li>Flamingo Park</li>
                  <li>Old Northwood</li>
                  <li>SoSo</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Palm Beach County Cities</h3>
                <ul className={styles.locationItems}>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>Greenacres</li>
                  <li>Lantana</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Western Palm Beach County</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Belle Glade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Site Work Project?"
        description="Get a free quote for your site work, earthwork, or land grading project in Palm Beach County. We'll coordinate licensed contractors who understand local conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

