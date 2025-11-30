import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough Grading After Clearing | South Florida',
  description: 'Initial grading to establish approximate site elevations and prepare for detailed work after land clearing across South Florida.',
  openGraph: {
    title: 'Rough Grading After Clearing | South Florida',
    description: 'Initial grading to establish approximate site elevations and prepare for detailed work after land clearing.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/rough-grading-after-clearing/`,
  },
}

export default function RoughGradingAfterClearingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Rough Grading After Clearing</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Initial grading to establish approximate site elevations and prepare for detailed 
                work after land clearing across South Florida.
              </p>
              <p className={styles.description}>
                Rough grading after clearing establishes the initial site elevations and prepares 
                sites for detailed grading and construction. Our network of licensed contractors 
                coordinates efficient rough grading that sets the foundation for building pad 
                preparation and development.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/rough-grading-after-clearing.jpg"
                alt="Rough grading after clearing services in South Florida"
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
              Rough grading after clearing is essential for developers, general contractors, 
              property owners, and anyone who has completed land clearing and needs initial 
              grading to establish site elevations and prepare for construction.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or debris 
              hauling, rough grading after clearing establishes the initial site elevations 
              and prepares sites for detailed grading and building pad preparation. We coordinate 
              contractors to efficiently complete rough grading operations.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Rough grading after clearing typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $200,000+</strong> for large commercial sites 
                or properties with extensive clearing depending on site size, elevation changes, and 
                grading requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Rough Grading After Clearing Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Elevation Assessment</h3>
                <p className={styles.serviceDescription}>
                  Assessment of existing site elevations and determination of target elevations 
                  for rough grading. Elevation assessment ensures proper site preparation and 
                  establishes grading requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Initial Cut and Fill</h3>
                <p className={styles.serviceDescription}>
                  Initial cut and fill operations to establish approximate site elevations. Cut 
                  and fill operations prepare sites for detailed grading and building pad 
                  preparation.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Rough Slope Establishment</h3>
                <p className={styles.serviceDescription}>
                  Establishment of rough slopes for drainage and site preparation. Rough slope 
                  establishment ensures proper drainage patterns and prepares sites for detailed 
                  grading work.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Building Pad Rough Grading</h3>
                <p className={styles.serviceDescription}>
                  Rough grading of building pad areas to establish approximate elevations. Building 
                  pad rough grading prepares sites for detailed pad preparation and foundation work.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Access Road Preparation</h3>
                <p className={styles.serviceDescription}>
                  Rough grading of access roads and staging areas. Access road preparation ensures 
                  proper site access and prepares areas for construction activities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Pattern Establishment</h3>
                <p className={styles.serviceDescription}>
                  Establishment of initial drainage patterns and swale locations. Drainage 
                  pattern establishment ensures proper water flow and prepares sites for detailed 
                  drainage work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Rough Grading vs. Final Grading</h2>
            <p className={styles.text}>
              Rough grading and final grading serve different purposes in site preparation:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Rough Grading:</strong> Rough grading establishes approximate site elevations 
                and prepares sites for detailed work. Rough grading typically involves larger elevation 
                changes and establishes basic site contours and drainage patterns.
              </li>
              <li>
                <strong>Final Grading:</strong> Final grading refines site elevations to precise 
                specifications and prepares sites for construction. Final grading typically involves 
                smaller elevation adjustments and precise contour work.
              </li>
              <li>
                <strong>Building Pad Preparation:</strong> Rough grading establishes approximate 
                building pad elevations, while final grading prepares pads to exact specifications. 
                Both stages are essential for proper site preparation.
              </li>
              <li>
                <strong>Drainage Preparation:</strong> Rough grading establishes initial drainage 
                patterns, while final grading refines drainage features to precise specifications. 
                Both stages ensure proper water management.
              </li>
              <li>
                <strong>Timing:</strong> Rough grading typically occurs immediately after clearing, 
                while final grading occurs closer to construction. Proper sequencing ensures efficient 
                site preparation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Rough Grading Considerations</h2>
            <p className={styles.text}>
              Rough grading after clearing in South Florida requires attention to local conditions 
              and regulations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                grading operations and may require dewatering or specialized techniques. High water 
                table considerations ensure proper site preparation.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones may have specific 
                elevation requirements for rough grading. Flood zone compliance ensures proper site 
                preparation and regulatory compliance.
              </li>
              <li>
                <strong>Coastal Soils:</strong> Coastal soils may require specialized grading techniques 
                and compaction methods. Soil considerations ensure proper site stability and preparation.
              </li>
              <li>
                <strong>Drainage Patterns:</strong> Initial drainage patterns established during rough 
                grading must account for South Florida&apos;s heavy rainfall and storm conditions. Drainage 
                considerations ensure proper water management.
              </li>
              <li>
                <strong>Permitting Requirements:</strong> Rough grading may require permits depending on 
                site size and elevation changes. Permitting coordination ensures compliance with local 
                regulations.
              </li>
              <li>
                <strong>Erosion Control:</strong> Rough grading operations must include erosion control 
                measures to prevent soil loss and water quality issues. Erosion control ensures proper 
                site protection.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Rough Grading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your rough grading after clearing is completed 
              efficiently and prepares sites for detailed work:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify existing elevations, 
                target elevations, and grading requirements. Assessment determines rough grading needs 
                and establishes work scope.
              </li>
              <li>
                <strong>Elevation Planning:</strong> We plan rough grading operations to establish 
                approximate site elevations. Elevation planning ensures proper site preparation and 
                establishes grading requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for rough grading operations.
              </li>
              <li>
                <strong>Cut and Fill Operations:</strong> Contractors perform initial cut and fill 
                operations to establish approximate site elevations. Cut and fill operations prepare 
                sites for detailed grading work.
              </li>
              <li>
                <strong>Rough Slope Establishment:</strong> Rough slopes are established for drainage 
                and site preparation. Rough slope establishment ensures proper drainage patterns and 
                prepares sites for detailed work.
              </li>
              <li>
                <strong>Building Pad Rough Grading:</strong> Building pad areas are rough graded to 
                establish approximate elevations. Building pad rough grading prepares sites for detailed 
                pad preparation.
              </li>
              <li>
                <strong>Drainage Pattern Establishment:</strong> Initial drainage patterns and swale 
                locations are established. Drainage pattern establishment ensures proper water flow and 
                prepares sites for detailed drainage work.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading establishes approximate site elevations and prepares sites for detailed 
                  work, while final grading refines elevations to precise specifications and prepares 
                  sites for construction. Rough grading typically involves larger elevation changes, 
                  while final grading involves smaller, precise adjustments. Both stages are essential 
                  for proper site preparation.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does rough grading after clearing cost?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading after clearing costs vary based on site size, elevation changes, and 
                  grading requirements. Typical residential lots range from $15,000 to $50,000, while 
                  large commercial sites can range from $50,000 to $200,000+ depending on scope. Factors 
                  affecting cost include site size, elevation changes, and grading complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>When should rough grading be done after clearing?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading should typically be done immediately after clearing and debris removal 
                  to establish site elevations and prepare for detailed work. Proper sequencing ensures 
                  efficient site preparation and prevents erosion and drainage issues. Rough grading 
                  establishes the foundation for detailed grading and building pad preparation.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for rough grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading may require permits depending on site size, elevation changes, and local 
                  regulations. We help identify and coordinate all required permits and compliance 
                  requirements for your rough grading project.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does rough grading after clearing take?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading after clearing timelines vary based on site size, elevation changes, and 
                  grading requirements. Typical residential lots take 2-5 days, while large commercial 
                  sites may take 1-3 weeks depending on scope. Weather conditions and site access can 
                  affect timelines. We coordinate operations to complete projects efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We coordinate rough grading after clearing across all of South Florida. Select your 
              location to learn more about rough grading services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/service-areas/miami/land-clearing-lot-preparation/rough-grading-after-clearing/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/rough-grading-after-clearing/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/rough-grading-after-clearing/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/rough-grading-after-clearing/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Rough Grading?"
        description="Get a free quote for your rough grading after clearing project. We'll coordinate licensed contractors to efficiently establish site elevations and prepare your site for detailed work."
        showPhone={true}
      />
    </main>
  )
}

