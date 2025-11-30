import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mass Excavation & Cut/Fill | South Florida',
  description: 'Large-scale mass excavation and cut/fill operations across South Florida. Site balancing and earthmoving for commercial and residential developments.',
  openGraph: {
    title: 'Mass Excavation & Cut/Fill | South Florida',
    description: 'Large-scale mass excavation and cut/fill operations for site balancing across South Florida.',
    url: `${siteConfig.url}/services/excavation-earthwork/mass-excavation-cut-fill/`,
  },
}

export default function MassExcavationCutFillPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Mass Excavation and Cut/Fill</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Large-scale excavation and earthmoving for commercial and residential developments 
                across South Florida. We coordinate licensed contractors with heavy equipment to 
                perform cut and fill operations that balance site elevations and achieve proper 
                grades for building pads and infrastructure.
              </p>
              <p className={styles.description}>
                Mass excavation and cut/fill operations are essential for large-scale developments 
                that require significant earthmoving. Our network of licensed contractors has the 
                equipment and expertise to handle projects ranging from site balancing to complete 
                site reconfiguration.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/mass-excavation.jpg"
                alt="Mass excavation and cut/fill operations in South Florida"
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
              Mass excavation and cut/fill services are essential for developers, general contractors, 
              subdivision developers, and anyone preparing large sites that require significant 
              earthmoving to achieve proper elevations.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, commercial complex, or preparing a 
              large site for construction, mass excavation and cut/fill operations balance site 
              elevations efficiently. We coordinate contractors with heavy equipment to handle 
              large-scale earthmoving projects.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Mass excavation and cut/fill projects typically range from <strong>$50,000 to $200,000</strong> for 
                smaller developments, and <strong>$200,000 to $1,000,000+</strong> for large-scale 
                commercial or subdivision projects depending on earthwork volume, site conditions, 
                and required balancing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Mass Excavation and Cut/Fill Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Survey and Volume Calculations</h3>
                <p className={styles.serviceDescription}>
                  Survey and calculation of cut and fill volumes to determine earthwork requirements. 
                  Volume calculations identify areas that need excavation (cut) and areas that need 
                  fill material to achieve proper site elevations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Cut Operations</h3>
                <p className={styles.serviceDescription}>
                  Excavation of material from higher elevations to lower elevations. Cut operations 
                  remove excess material from areas that are too high, preparing material for use 
                  as fill in lower areas or for export off-site.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Fill Operations</h3>
                <p className={styles.serviceDescription}>
                  Placement of fill material in low-lying areas to achieve proper elevations. Fill 
                  operations use material from cut areas or imported fill to raise low areas to 
                  required elevations, with proper compaction for stability.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Balancing</h3>
                <p className={styles.serviceDescription}>
                  Coordinated cut and fill operations to balance site elevations while minimizing 
                  import and export of material. Site balancing maximizes use of on-site material, 
                  reducing costs and environmental impact.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Handling</h3>
                <p className={styles.serviceDescription}>
                  Coordination of material movement, stockpiling, and placement. Material handling 
                  ensures cut material is efficiently moved to fill areas or prepared for export, 
                  with proper sequencing to minimize double-handling.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Compaction and Final Grading</h3>
                <p className={styles.serviceDescription}>
                  Proper compaction of fill material and final grading to achieve exact elevations. 
                  Compaction ensures fill stability, while final grading creates precise elevations 
                  specified in engineering drawings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Mass Excavation Considerations</h2>
            <p className={styles.text}>
              Mass excavation and cut/fill operations in South Florida require specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                excavation depth and may require dewatering systems. Cut operations may encounter 
                water, requiring proper dewatering and water management.
              </li>
              <li>
                <strong>Soil Conditions:</strong> South Florida&apos;s sandy and limestone soils have 
                different characteristics for cut and fill operations. Fill material must meet 
                specifications for compaction and stability, especially in areas with high water tables.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Cut and fill operations in flood zones must 
                comply with FEMA requirements. Fill placement may be restricted, and elevations must 
                meet flood zone regulations.
              </li>
              <li>
                <strong>Environmental Permits:</strong> Large-scale mass excavation may require SFWMD 
                environmental resource permits for land disturbance, especially near wetlands or 
                surface waters. Permits may restrict cut and fill operations in sensitive areas.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Cut and fill operations must account for 
                stormwater management requirements. Site balancing must maintain or improve drainage 
                patterns and may require coordination with stormwater systems.
              </li>
              <li>
                <strong>Material Quality:</strong> Fill material must meet engineering specifications 
                for compaction, stability, and drainage. Unsuitable material from cut operations may 
                need to be exported, while suitable fill may need to be imported.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Mass Excavation and Cut/Fill Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your mass excavation and cut/fill project is completed 
              efficiently and meets all specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review engineering drawings, survey data, and 
                site conditions to understand cut and fill requirements. Volume calculations determine 
                earthwork scope and identify opportunities for site balancing.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for mass 
                excavation and coordinate with building departments and regulatory agencies. Large-scale 
                operations may require SFWMD permits.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, scrapers, haul trucks) and 
                experience for large-scale earthmoving.
              </li>
              <li>
                <strong>Cut Operations:</strong> Contractors perform excavation from high areas, 
                removing material for use as fill or export. Cut operations establish general site 
                grades and prepare material for placement.
              </li>
              <li>
                <strong>Fill Operations:</strong> Fill material is placed in low areas with proper 
                compaction to achieve required elevations. Fill operations use material from cut areas 
                or imported fill, with proper sequencing for efficiency.
              </li>
              <li>
                <strong>Site Balancing:</strong> Coordinated cut and fill operations balance site 
                elevations while minimizing material import and export. Site balancing maximizes use 
                of on-site material.
              </li>
              <li>
                <strong>Final Grading:</strong> Final grading operations achieve exact elevations 
                specified in engineering drawings. Final grading prepares the site for building 
                construction or infrastructure installation.
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
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding 
                  earth to lower elevations. Cut and fill operations balance site elevations by 
                  moving earth from high areas to low areas. Site balancing maximizes use of on-site 
                  material, minimizing the need to import or export material.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs vary significantly based on volume, soil conditions, and site 
                  access. Typical costs range from $5-15 per cubic yard for simple excavation to 
                  $20-40+ per cubic yard for complex projects with dewatering, difficult access, or 
                  special handling. Large projects may have volume discounts.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Yes, mass excavation projects typically require building permits from county building 
                  departments. Large-scale operations or those near wetlands may also require SFWMD 
                  environmental resource permits. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is site balancing?</h3>
                <p className={styles.faqAnswer}>
                  Site balancing is the coordinated process of using cut material as fill to balance 
                  site elevations while minimizing import and export of material. Effective site 
                  balancing maximizes use of on-site material, reducing costs and environmental 
                  impact by minimizing trucking and material disposal.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does mass excavation take?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation timelines vary based on project size, earthwork volume, and site 
                  conditions. Typical projects take 2-8 weeks depending on scope. Weather conditions, 
                  especially during South Florida&apos;s rainy season, can affect timelines. We 
                  coordinate with contractors to complete projects efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We coordinate mass excavation and cut/fill operations across all of South Florida. 
              Select your location to learn more about earthmoving services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/excavation-earthwork/mass-excavation-cut-fill/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/excavation-earthwork/mass-excavation-cut-fill/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/excavation-earthwork/mass-excavation-cut-fill/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/excavation-earthwork/mass-excavation-cut-fill/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/excavation-earthwork/" className={styles.backLink}>
                ← Back to Excavation and Earthwork
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Mass Excavation Project?"
        description="Get a free quote for your mass excavation or cut/fill project. We'll coordinate licensed contractors with heavy equipment to balance your site elevations efficiently."
        showPhone={true}
      />
    </main>
  )
}

