import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work Services in Miami, FL | Miami-Dade County',
  description: 'Complete site work, earthwork, and land grading services in Miami-Dade County. Licensed contractors for commercial and residential projects.',
  openGraph: {
    title: 'Site Work Services in Miami, FL | Miami-Dade County',
    description: 'Complete site work, earthwork, and land grading services in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/`,
  },
}

export default function MiamiServiceAreasPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work Services in Miami, FL"
        subtitle="Complete site development, earthwork, and grading services for commercial and residential projects across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and earthwork services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Site Work Services in Miami-Dade County</h2>
            <p className={styles.intro}>
              Miami-Dade County presents unique challenges for site work, earthwork, and land 
              grading projects. With high water tables, extensive flood zones, coastal soils, 
              and strict permitting requirements, successful site development requires specialized 
              expertise and local knowledge.
            </p>
            <p className={styles.text}>
              Our network of licensed contractors has extensive experience working throughout 
              Miami-Dade County, from Miami Beach and Coral Gables to Homestead and the Redland. 
              We understand the local conditions, regulatory requirements, and best practices 
              needed to complete your project successfully.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Miami-Dade County Expertise</h3>
              <p className={styles.highlightText}>
                Our contractors are familiar with Miami-Dade RER (Regulatory and Economic Resources) 
                and DERM (Department of Environmental Resources Management) requirements, flood 
                zone compliance, coastal construction standards, and the unique soil conditions 
                found throughout the county.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Miami Service Categories</h2>
            <p className={styles.text}>
              Select a service category to view available services in Miami:
            </p>
            <div className={styles.servicesGrid}>
              {siteConfig.primaryServices.map((service) => (
                <a
                  key={service.slug}
                  href={`/service-areas/miami/${service.slug}/`}
                  className={styles.serviceCard}
                >
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.serviceLink}>View Miami Services →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Specific Site Work Challenges</h2>
            <div className={styles.challengesGrid}>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>High Water Table</h3>
                <p className={styles.challengeDescription}>
                  Miami-Dade&apos;s high water table requires specialized dewatering techniques 
                  and foundation design. Our contractors understand local groundwater conditions 
                  and employ appropriate methods for excavation and site preparation.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Flood Zone Compliance</h3>
                <p className={styles.challengeDescription}>
                  Many Miami properties are located in FEMA flood zones requiring specific 
                  elevation requirements and flood-resistant construction. We coordinate projects 
                  to meet Base Flood Elevation (BFE) requirements and obtain necessary permits.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Coastal Soils</h3>
                <p className={styles.challengeDescription}>
                  Coastal areas feature unique soil conditions including limestone bedrock, 
                  sandy soils, and organic materials. Our contractors adapt grading and 
                  excavation techniques to local soil characteristics.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>RER and DERM Permitting</h3>
                <p className={styles.challengeDescription}>
                  Miami-Dade RER and DERM have specific requirements for site work, tree 
                  removal, and environmental protection. We coordinate all necessary permits 
                  and ensure compliance with county regulations.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Stormwater Management</h3>
                <p className={styles.challengeDescription}>
                  Miami&apos;s heavy rainfall and flat topography require comprehensive 
                  stormwater management. We design and implement drainage systems that meet 
                  county requirements and protect properties from flooding.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Hurricane Preparedness</h3>
                <p className={styles.challengeDescription}>
                  Site work must account for hurricane-force winds and storm surge. Our 
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
            <h2 className={styles.heading}>Our Miami Service Areas</h2>
            <p className={styles.text}>
              We coordinate site work, earthwork, and land grading services throughout Miami-Dade 
              County, including:
            </p>
            <div className={styles.locationsList}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Key Biscayne</li>
                  <li>Aventura</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Urban Core</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown Miami</li>
                  <li>Brickell</li>
                  <li>Coral Gables</li>
                  <li>Coconut Grove</li>
                  <li>Little Havana</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Kendall</li>
                  <li>Doral</li>
                  <li>Westchester</li>
                  <li>Palmetto Bay</li>
                  <li>Cutler Bay</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>South Miami-Dade</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Pinecrest</li>
                  <li>South Miami</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Site Work Project?"
        description="Get a free quote for your site work, earthwork, or land grading project in Miami-Dade County. We'll coordinate licensed contractors who understand local conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

