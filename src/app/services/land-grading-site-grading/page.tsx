import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Grading & Site Grading | South Florida',
  description: 'Professional land grading and site grading services across South Florida. Building pad grading, parking lot grading, road grading, and drainage solutions.',
  openGraph: {
    title: 'Land Grading & Site Grading | South Florida',
    description: 'Professional land grading and site grading services across South Florida. Building pad grading, parking lot grading, road grading.',
    url: `${siteConfig.url}/services/land-grading-site-grading/`,
  },
}

export default function LandGradingSiteGradingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Land Grading and Site Grading</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Precision grading services for building pads, parking lots, roads, and drainage across 
                South Florida. We coordinate licensed contractors with the expertise to achieve proper 
                elevations and slopes for your construction project.
              </p>
              <p className={styles.description}>
                From rough grading for new developments to final grading for building pads, our network 
                of licensed contractors delivers precise, code-compliant grading solutions tailored to 
                South Florida&apos;s unique conditions including high water tables, flood zones, and 
                coastal soil characteristics.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('land-grading-site-grading')}
                alt="Land grading and site grading services in South Florida"
                fill
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land grading and site grading services serve general contractors, developers, 
              custom home builders, commercial property owners, and high-end homeowners who need 
              precise elevation control and proper drainage for their projects.
            </p>
            <p className={styles.text}>
              Whether you&apos;re preparing a building pad for a new home, grading a parking lot for 
              a commercial development, or fixing drainage problems on an existing property, we 
              coordinate contractors with the right equipment and expertise for your specific needs.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Land grading projects typically start around <strong>$25,000</strong> for residential 
                building pads and can range from $50,000 to $250,000+ for large commercial developments, 
                parking lots, or comprehensive site regrading projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Land Grading and Site Grading Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>House Pad Grading and Building Pads</h3>
              <p className={styles.serviceDescription}>
                Precision grading for residential and commercial building pads to achieve proper 
                elevations, slopes, and compaction required by engineering specifications and 
                building codes.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for parking lots, driveways, and access roads with proper slopes for 
                drainage, ADA compliance, and vehicle accessibility.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Access Drive Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and subdivision infrastructure including proper 
                crown, cross-slopes, and drainage features.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough and Final Grading for New Developments</h3>
              <p className={styles.serviceDescription}>
                Complete grading services for new developments including rough grading for initial 
                site preparation and final grading to precise elevations before building construction.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Regrading for Drainage Problems</h3>
              <p className={styles.serviceDescription}>
                Site regrading to fix existing drainage issues, eliminate standing water, and 
                redirect water flow away from structures and low-lying areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Stabilization and Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Grading and stabilization of slopes to prevent erosion, including installation of 
                erosion control measures and proper drainage to protect slopes during and after 
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Grading Considerations</h2>
            <p className={styles.text}>
              Grading in South Florida requires specialized knowledge of local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Flood Zone Elevations:</strong> Properties in flood zones must be graded 
                to specific elevations above base flood elevation (BFE) as required by FEMA and 
                local building codes.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                grading depth, compaction, and drainage design. Proper dewatering and drainage 
                systems are essential.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil 
                characteristics including sand, limestone, and organic materials that affect 
                grading techniques and compaction requirements.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Grading must incorporate proper drainage 
                and stormwater management to meet South Florida Water Management District and 
                county requirements.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Grading projects typically require permits 
                from county building departments, and may require SFWMD permits for land 
                disturbance and stormwater management.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Grading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your grading project meets all specifications and 
              regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, engineering drawings, 
                and survey data to understand grading requirements and identify any challenges.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits and 
                coordinate with local building departments and regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for your specific grading needs.
              </li>
              <li>
                <strong>Grading Execution:</strong> Contractors perform rough grading, fine grading, 
                and final grading to achieve precise elevations and slopes per engineering specifications.
              </li>
              <li>
                <strong>Compaction and Testing:</strong> Proper soil compaction is achieved and tested 
                to meet building code requirements for foundation support.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections to ensure grading 
                meets all specifications and is ready for building construction or paving.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations and 
                  slopes. Final grading is the precise finishing work to achieve exact elevations 
                  and slopes specified in engineering drawings, typically within 0.1 feet of 
                  specified elevations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for land grading?</h3>
                <p className={styles.faqAnswer}>
                  Yes, grading projects typically require permits from county building departments. 
                  Projects involving significant land disturbance may also require SFWMD environmental 
                  resource permits. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs vary based on size, site conditions, and required 
                  earthwork. Typical residential building pads range from $25,000 to $75,000, 
                  while commercial pads can range from $50,000 to $200,000+ depending on scope.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can grading fix drainage problems?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for drainage problems. By adjusting 
                  site elevations and slopes, we can redirect water flow away from structures and 
                  eliminate standing water. This is often combined with drainage system installation 
                  for comprehensive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Grading Project?"
        description="Get a free quote for your land grading or site grading project. We'll connect you with licensed contractors experienced in South Florida conditions."
        showPhone={true}
      />
    </main>
  )
}

