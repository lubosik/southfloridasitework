import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work Services in Florida Keys, FL | Monroe County',
  description: 'Complete site work, earthwork, and land grading services in Monroe County, Florida Keys. Licensed contractors for commercial and residential projects.',
  openGraph: {
    title: 'Site Work Services in Florida Keys, FL | Monroe County',
    description: 'Complete site work, earthwork, and land grading services in Monroe County, Florida Keys.',
    url: `${siteConfig.url}/service-areas/florida-keys/`,
  },
}

export default function FloridaKeysServiceAreasPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work Services in Florida Keys, FL"
        subtitle="Complete site development, earthwork, and grading services for commercial and residential projects across Monroe County, from Key West to Key Largo"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and earthwork services in Florida Keys, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Site Work Services in Monroe County, Florida Keys</h2>
            <p className={styles.intro}>
              Monroe County and the Florida Keys present unique challenges for site work, earthwork, and land 
              grading projects. With extremely high water tables, extensive flood zones, coral rock and limestone 
              bedrock, strict environmental regulations, and comprehensive permitting requirements through Monroe 
              County&apos;s Building Department and environmental agencies, successful site development requires 
              specialized expertise and deep local knowledge of Keys-specific conditions.
            </p>
            <p className={styles.text}>
              Our network of licensed contractors has extensive experience working throughout 
              Monroe County and the Florida Keys, from Key West and Key Largo to Marathon, Islamorada, 
              Big Pine Key, and throughout the Keys. We understand the unique local conditions, strict regulatory 
              requirements, environmental sensitivities, and best practices needed to complete your project 
              successfully in this environmentally sensitive region.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Monroe County, Florida Keys Expertise</h3>
              <p className={styles.highlightText}>
                Our contractors are familiar with Monroe County&apos;s Building Department permit 
                process, environmental resource requirements, flood zone compliance, coastal 
                construction standards, coral rock excavation techniques, the unique soil and bedrock 
                conditions found throughout the Keys, and the strict environmental regulations that 
                protect this sensitive ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Florida Keys Service Categories</h2>
            <p className={styles.text}>
              Select a service category to view available services in the Florida Keys:
            </p>
            <div className={styles.servicesGrid}>
              {siteConfig.primaryServices.map((service) => (
                <a
                  key={service.slug}
                  href={`/service-areas/florida-keys/${service.slug}/`}
                  className={styles.serviceCard}
                >
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.serviceLink}>View Florida Keys Services →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Florida Keys-Specific Site Work Challenges</h2>
            <div className={styles.challengesGrid}>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Extremely High Water Table</h3>
                <p className={styles.challengeDescription}>
                  The Florida Keys have an extremely high water table, often at or near the surface. 
                  This requires specialized dewatering techniques, foundation design, and excavation 
                  methods. Our contractors understand local groundwater conditions and employ 
                  appropriate methods for site preparation throughout Monroe County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Flood Zone Compliance</h3>
                <p className={styles.challengeDescription}>
                  Most Florida Keys properties are located in FEMA flood zones (AE, VE, AH, AO) requiring 
                  specific elevation requirements, Base Flood Elevation (BFE) compliance, and 
                  flood-resistant construction. We coordinate projects to meet these critical 
                  requirements and obtain necessary permits.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Coral Rock and Limestone Bedrock</h3>
                <p className={styles.challengeDescription}>
                  The Florida Keys feature unique coral rock and limestone bedrock that requires 
                  specialized excavation techniques. Our contractors adapt grading and excavation 
                  methods to these challenging bedrock conditions found throughout Monroe County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Strict Environmental Regulations</h3>
                <p className={styles.challengeDescription}>
                  Monroe County and the Florida Keys have some of the strictest environmental 
                  regulations in Florida to protect sensitive ecosystems. We coordinate all necessary 
                  environmental permits and ensure compliance with county and state regulations 
                  protecting the Keys&apos; unique environment.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Hurricane and Storm Surge Protection</h3>
                <p className={styles.challengeDescription}>
                  The Florida Keys are highly vulnerable to hurricanes and storm surge. Site work 
                  must account for extreme weather conditions. Our contractors implement erosion 
                  control, proper drainage, elevation requirements, and site preparation that 
                  enhances property resilience throughout Monroe County.
                </p>
              </div>
              <div className={styles.challengeItem}>
                <h3 className={styles.challengeTitle}>Limited Fill and Import Restrictions</h3>
                <p className={styles.challengeDescription}>
                  Monroe County has strict limitations on fill import and land elevation changes 
                  to protect the environment and prevent flooding. We work within these 
                  restrictions and coordinate all necessary permits for any fill operations 
                  in the Florida Keys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Florida Keys Service Areas</h2>
            <p className={styles.text}>
              We coordinate site work, earthwork, and land grading services throughout Monroe 
              County and the Florida Keys, including:
            </p>
            <div className={styles.locationsList}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Lower Keys</h3>
                <ul className={styles.locationItems}>
                  <li>Key West</li>
                  <li>Stock Island</li>
                  <li>Big Coppitt Key</li>
                  <li>Sugarloaf Key</li>
                  <li>Cudjoe Key</li>
                  <li>Summerland Key</li>
                  <li>Big Pine Key</li>
                  <li>Little Torch Key</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Middle Keys</h3>
                <ul className={styles.locationItems}>
                  <li>Marathon</li>
                  <li>Grassy Key</li>
                  <li>Crawl Key</li>
                  <li>Long Key</li>
                  <li>Conch Key</li>
                  <li>Duck Key</li>
                  <li>Vaca Key</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Upper Keys</h3>
                <ul className={styles.locationItems}>
                  <li>Islamorada</li>
                  <li>Plantation Key</li>
                  <li>Windley Key</li>
                  <li>Upper Matecumbe Key</li>
                  <li>Lower Matecumbe Key</li>
                  <li>Lignumvitae Key</li>
                  <li>Key Largo</li>
                  <li>Tavernier</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Key West Neighborhoods</h3>
                <ul className={styles.locationItems}>
                  <li>Old Town Key West</li>
                  <li>New Town Key West</li>
                  <li>Truman Annex</li>
                  <li>Bahama Village</li>
                  <li>Historic Seaport</li>
                  <li>Sunset Key</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Florida Keys Site Work Project?"
        description="Get a free quote for your site work, earthwork, or land grading project in Monroe County, Florida Keys. We'll coordinate licensed contractors who understand the unique Keys conditions, strict environmental regulations, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

