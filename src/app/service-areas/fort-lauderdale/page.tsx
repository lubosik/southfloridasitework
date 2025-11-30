import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work Services in Fort Lauderdale, FL | Broward County',
  description: 'Complete site work, earthwork, and land grading services in Broward County. Licensed contractors for commercial and residential projects.',
  openGraph: {
    title: 'Site Work Services in Fort Lauderdale, FL | Broward County',
    description: 'Complete site work, earthwork, and land grading services in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/`,
  },
}

export default function FortLauderdaleServiceAreasPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work Services in Fort Lauderdale, FL"
        subtitle="Complete site development, earthwork, and grading services for commercial and residential projects across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and earthwork services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Site Work Services in Broward County</h2>
            <p className={styles.intro}>
              Broward County presents unique challenges for site work, earthwork, and land 
              grading projects. With high water tables, extensive flood zones, coastal soils, 
              and strict permitting requirements through Broward County&apos;s Development & 
              Environmental Review (DER) process, successful site development requires specialized 
              expertise and local knowledge.
            </p>
            <p className={styles.text}>
              Our network of licensed contractors has extensive experience working throughout 
              Broward County, from Fort Lauderdale and Las Olas to Hollywood, Pompano Beach, 
              and Weston. We understand the local conditions, regulatory requirements, and best 
              practices needed to complete your project successfully.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Broward County Expertise</h3>
              <p className={styles.highlightText}>
                Our contractors are familiar with Broward County&apos;s Uniform Building Permit 
                Application process, Development & Environmental Review (DER) through ePermits 
                OneStop, Natural Resource Protection Code (Chapter 27), SFWMD Environmental Resource 
                Permits, flood zone compliance, coastal construction standards, and the unique soil 
                conditions found throughout the county.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Fort Lauderdale Service Categories</h2>
            <p className={styles.text}>
              Select a service category to view available services in Fort Lauderdale:
            </p>
            <div className={styles.servicesGrid}>
              {siteConfig.primaryServices.map((service) => (
                <a
                  key={service.slug}
                  href={`/service-areas/fort-lauderdale/${service.slug}/`}
                  className={styles.serviceCard}
                >
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.serviceLink}>View Fort Lauderdale Services →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Fort Lauderdale-Specific Site Work Challenges</h2>
            <div className={styles.challengesGrid}>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>High Water Table</h3>
                <p className={styles.challengeDescription}>
                  Broward County&apos;s high water table requires specialized dewatering techniques 
                  and foundation design. Our contractors understand local groundwater conditions 
                  and employ appropriate methods for excavation and site preparation in Fort 
                  Lauderdale and throughout Broward County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Flood Zone Compliance</h3>
                <p className={styles.challengeDescription}>
                  Many Fort Lauderdale and Broward County properties are located in FEMA flood 
                  zones requiring specific elevation requirements and flood-resistant construction. 
                  We coordinate projects to meet Base Flood Elevation (BFE) requirements and 
                  obtain necessary permits.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Coastal Soils</h3>
                <p className={styles.challengeDescription}>
                  Coastal areas in Fort Lauderdale feature unique soil conditions including 
                  limestone bedrock, sandy soils, and organic materials. Our contractors adapt 
                  grading and excavation techniques to local soil characteristics throughout 
                  Broward County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>DER and Environmental Permitting</h3>
                <p className={styles.challengeDescription}>
                  Broward County requires Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable projects, plus Natural Resource Protection Code compliance. 
                  We coordinate all necessary permits and ensure compliance with county regulations.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Stormwater Management</h3>
                <p className={styles.challengeDescription}>
                  Fort Lauderdale&apos;s heavy rainfall and flat topography require comprehensive 
                  stormwater management. We design and implement drainage systems that meet SFWMD 
                  Environmental Resource Permit requirements and protect properties from flooding.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Hurricane Preparedness</h3>
                <p className={styles.challengeDescription}>
                  Site work must account for hurricane-force winds and storm surge. Our 
                  contractors implement erosion control, proper drainage, and site preparation 
                  that enhances property resilience in Fort Lauderdale and throughout Broward County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Fort Lauderdale Service Areas</h2>
            <p className={styles.text}>
              We coordinate site work, earthwork, and land grading services throughout Broward 
              County, including:
            </p>
            <div className={styles.locationsList}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Fort Lauderdale Neighborhoods</h3>
                <ul className={styles.locationItems}>
                  <li>Las Olas</li>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Rio Vista</li>
                  <li>Colee Hammock</li>
                  <li>Seven Isles</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Hillsboro Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Broward County Cities</h3>
                <ul className={styles.locationItems}>
                  <li>Hollywood</li>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Davie</li>
                  <li>Coral Springs</li>
                  <li>Margate</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Western Broward</h3>
                <ul className={styles.locationItems}>
                  <li>Pembroke Pines</li>
                  <li>Miramar</li>
                  <li>Cooper City</li>
                  <li>Southwest Ranches</li>
                  <li>Parkland</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Site Work Project?"
        description="Get a free quote for your site work, earthwork, or land grading project in Broward County. We'll coordinate licensed contractors who understand local conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

