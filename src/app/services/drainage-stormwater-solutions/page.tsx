import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Drainage & Stormwater Solutions | South Florida',
  description: 'Professional drainage and stormwater solutions across South Florida. French drains, retention ponds, stormwater systems, and flood zone drainage.',
  openGraph: {
    title: 'Drainage & Stormwater Solutions | South Florida',
    description: 'Professional drainage and stormwater solutions across South Florida. French drains, retention ponds, stormwater systems.',
    url: `${siteConfig.url}/services/drainage-stormwater-solutions/`,
  },
}

export default function DrainageStormwaterSolutionsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Drainage and Stormwater Solutions</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Comprehensive drainage and stormwater management systems for flood-prone and coastal 
                properties across South Florida. We coordinate licensed contractors to design and install 
                effective drainage solutions.
              </p>
              <p className={styles.description}>
                From French drains and underdrain systems to retention ponds and stormwater inlets, our 
                network of licensed contractors delivers drainage solutions tailored to South Florida&apos;s 
                unique conditions including high water tables, frequent heavy rains, and flood zone 
                requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('drainage-stormwater-solutions')}
                alt="Drainage and stormwater solutions in South Florida"
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
              Our drainage and stormwater solutions serve property owners experiencing flooding, 
              standing water, or drainage problems, as well as developers and builders who need 
              stormwater management systems for new construction.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with existing drainage problems on your property or need 
              comprehensive stormwater management for a new development, we coordinate contractors 
              with expertise in South Florida drainage requirements and SFWMD compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Drainage projects typically start around <strong>$25,000</strong> for residential 
                French drain systems and can range from $50,000 to $250,000+ for comprehensive 
                stormwater management systems, retention ponds, or large-scale commercial drainage 
                installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized drainage and stormwater solutions:
            </p>
          </div>
          <div className={styles.subServicesGrid}>
            <a href="/services/drainage-stormwater-solutions/site-regrading-drainage/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Site Regrading for Drainage</h3>
              <p className={styles.subServiceDescription}>
                Regrading sites to improve water flow and eliminate standing water
              </p>
            </a>
            <a href="/services/drainage-stormwater-solutions/french-drains-underdrain-systems/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>French Drains and Underdrain Systems</h3>
              <p className={styles.subServiceDescription}>
                Installation of French drains and subsurface drainage systems
              </p>
            </a>
            <a href="/services/drainage-stormwater-solutions/stormwater-inlets-piping/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Stormwater Inlets and Piping</h3>
              <p className={styles.subServiceDescription}>
                Installation of catch basins and underground stormwater piping
              </p>
            </a>
            <a href="/services/drainage-stormwater-solutions/swales-ditches-outfalls/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Swales, Ditches and Outfalls</h3>
              <p className={styles.subServiceDescription}>
                Construction of swales, ditches, and outfall structures
              </p>
            </a>
            <a href="/services/drainage-stormwater-solutions/retention-detention-basins/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Retention and Detention Basins</h3>
              <p className={styles.subServiceDescription}>
                Design and construction of stormwater retention and detention basins
              </p>
            </a>
            <a href="/services/drainage-stormwater-solutions/flood-prone-coastal-drainage/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Flood-Prone and Coastal Property Drainage</h3>
              <p className={styles.subServiceDescription}>
                Specialized drainage solutions for flood-prone and coastal properties
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Drainage Considerations</h2>
            <p className={styles.text}>
              Drainage in South Florida requires specialized knowledge of local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table means 
                groundwater is often close to the surface, requiring subsurface drainage systems 
                and proper elevation of structures above groundwater levels.
              </li>
              <li>
                <strong>Frequent Heavy Rains:</strong> South Florida experiences frequent, intense 
                rainfall, especially during hurricane season. Drainage systems must be designed to 
                handle high-volume, short-duration storm events.
              </li>
              <li>
                <strong>SFWMD Requirements:</strong> Many drainage projects require permits from 
                the South Florida Water Management District, especially those involving land 
                disturbance or connections to surface waters.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones must have 
                drainage systems that comply with FEMA requirements and local building codes, 
                including proper elevation of structures and drainage features.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties face additional challenges 
                including saltwater intrusion, storm surge, and unique soil conditions that affect 
                drainage system design and materials.
              </li>
              <li>
                <strong>County Regulations:</strong> Each county—Miami-Dade, Broward, and Palm 
                Beach—has specific stormwater management requirements and permit processes that must 
                be followed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Drainage Solution Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage project addresses the root cause and 
              meets all regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Problem Assessment:</strong> We assess your drainage problems, identify 
                water sources and flow patterns, and determine the most effective solution approach.
              </li>
              <li>
                <strong>Design and Planning:</strong> We coordinate with engineers and contractors 
                to design drainage systems that address your specific problems and meet regulatory 
                requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits from 
                SFWMD, county building departments, and other agencies, and coordinate the 
                permit application process.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed 
                contractors who have expertise in drainage installation and SFWMD compliance.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including 
                excavation, pipe installation, inlet placement, and connections to outfalls or 
                retention areas.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections to ensure 
                drainage systems meet specifications and regulatory requirements.
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
                <h3 className={styles.faqQuestion}>What is a French drain and how does it work?</h3>
                <p className={styles.faqAnswer}>
                  A French drain is a trench filled with gravel or rock containing a perforated 
                  pipe that collects and redirects groundwater and surface water. Water enters the 
                  pipe through perforations and flows to a lower elevation or outfall, preventing 
                  water from pooling around foundations or in low-lying areas.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for drainage work?</h3>
                <p className={styles.faqAnswer}>
                  Yes, drainage projects typically require permits from county building departments. 
                  Projects involving significant land disturbance or connections to surface waters 
                  may also require SFWMD environmental resource permits. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage installation cost?</h3>
                <p className={styles.faqAnswer}>
                  Drainage installation costs vary based on system type, size, and site conditions. 
                  Simple French drain systems typically range from $25,000 to $75,000, while 
                  comprehensive stormwater management systems can range from $100,000 to $250,000+ 
                  depending on scope and complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can drainage fix flooding problems?</h3>
                <p className={styles.faqAnswer}>
                  Yes, properly designed and installed drainage systems can effectively address 
                  flooding problems by collecting and redirecting water away from structures and 
                  low-lying areas. The solution depends on the specific cause of flooding, which 
                  may include poor site grading, inadequate drainage, or high groundwater levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Solve Your Drainage Problems?"
        description="Get a free quote for your drainage or stormwater management project. We'll connect you with licensed contractors experienced in South Florida drainage solutions."
        showPhone={true}
      />
    </main>
  )
}

