import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Foundation & Footing Excavation | South FL',
  description: 'Precision foundation and footing excavation across South Florida. Exact depth and dimension control for building foundations with proper soil preparation.',
  openGraph: {
    title: 'Foundation & Footing Excavation | South FL',
    description: 'Precision foundation and footing excavation to exact specifications across South Florida.',
    url: `${siteConfig.url}/services/excavation-earthwork/foundation-footing-excavation/`,
  },
}

export default function FoundationFootingExcavationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Foundation and Footing Excavation</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Precision excavation for building foundations and footings to exact depths and 
                dimensions specified in engineering drawings across South Florida. We coordinate 
                licensed contractors with the expertise to perform foundation excavation with 
                proper soil preparation and compaction for foundation support.
              </p>
              <p className={styles.description}>
                Foundation and footing excavation requires precision and attention to detail. Our 
                network of licensed contractors has the equipment and experience to excavate 
                foundations to exact specifications, ensuring proper depth, width, and soil 
                conditions for building support.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/foundation-excavation.jpg"
                alt="Foundation and footing excavation services in South Florida"
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
              Foundation and footing excavation services are essential for general contractors, 
              custom home builders, commercial developers, and anyone constructing buildings that 
              require precise foundation preparation.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home, commercial structure, or any building 
              requiring foundations, proper excavation is critical for structural integrity. We 
              coordinate contractors with the precision equipment and expertise to excavate 
              foundations to exact engineering specifications.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Foundation and footing excavation typically ranges from <strong>$25,000 to $75,000</strong> for 
                residential foundations, and <strong>$75,000 to $200,000+</strong> for commercial 
                foundations depending on foundation size, depth, soil conditions, and dewatering 
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Foundation and Footing Excavation Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Engineering Drawing Review</h3>
                <p className={styles.serviceDescription}>
                  Review of engineering drawings to understand foundation dimensions, depths, and 
                  specifications. Drawing review ensures excavation meets exact requirements for 
                  foundation type and building loads.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Precision Excavation</h3>
                <p className={styles.serviceDescription}>
                  Excavation to exact depths and dimensions specified in engineering drawings. 
                  Precision excavation ensures foundations are properly sized and positioned, with 
                  careful attention to depth control and wall verticality.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Soil Preparation</h3>
                <p className={styles.serviceDescription}>
                  Preparation of foundation soils to proper grade and compaction. Soil preparation 
                  ensures stable foundation support, with removal of unsuitable material and 
                  preparation of bearing surfaces.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Dewatering Systems</h3>
                <p className={styles.serviceDescription}>
                  Installation of dewatering systems when excavations encounter high water tables. 
                  Dewatering prevents water intrusion during excavation and foundation placement, 
                  ensuring dry working conditions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Foundation Inspection Preparation</h3>
                <p className={styles.serviceDescription}>
                  Preparation of excavations for building department inspections. Excavations are 
                  prepared to exact specifications, with proper dimensions and soil conditions ready 
                  for inspection before foundation placement.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
                <p className={styles.serviceDescription}>
                  Coordination of backfill operations after foundation placement, with proper 
                  compaction to support foundation walls. Backfill ensures proper support and 
                  drainage around foundations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Foundation Excavation Considerations</h2>
            <p className={styles.text}>
              Foundation excavation in South Florida requires specialized knowledge of local 
              conditions and building code requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table often 
                requires dewatering systems for foundation excavations. Proper dewatering prevents 
                water intrusion and ensures stable excavation walls and dry foundation placement.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil 
                characteristics including sand, limestone bedrock, and organic materials that affect 
                foundation excavation and bearing capacity. Soil conditions determine excavation 
                methods and foundation design.
              </li>
              <li>
                <strong>Building Code Requirements:</strong> Florida Building Code requires specific 
                foundation depths and dimensions based on building type, flood zones, and soil 
                conditions. Excavations must meet code requirements for foundation support.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Foundations in flood zones must comply 
                with FEMA requirements and may require specific elevations. Excavations must account 
                for flood zone regulations and foundation elevation requirements.
              </li>
              <li>
                <strong>Limestone Bedrock:</strong> South Florida&apos;s limestone bedrock may 
                require specialized excavation equipment and techniques. Bedrock conditions affect 
                excavation depth and may require rock removal or foundation design adjustments.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep foundation excavations require proper 
                shoring, sloping, or benching to prevent cave-ins and ensure worker safety per OSHA 
                requirements. Safety measures protect workers and prevent excavation collapse.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Foundation Excavation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your foundation excavation is completed precisely 
              and meets all specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Drawing Review:</strong> We review engineering drawings to 
                understand foundation dimensions, depths, and specifications. Drawing review ensures 
                excavation meets exact requirements.
              </li>
              <li>
                <strong>Site Layout and Staking:</strong> Foundation locations are staked and 
                marked according to survey data and engineering drawings. Layout ensures foundations 
                are positioned correctly on the site.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for foundation 
                excavation and coordinate with building departments. Permits ensure compliance with 
                building codes and regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, compactors) and experience for precision 
                foundation excavation.
              </li>
              <li>
                <strong>Precision Excavation:</strong> Contractors perform excavation to exact depths 
                and dimensions, with careful attention to depth control and wall verticality. 
                Excavation prepares foundation areas for concrete placement.
              </li>
              <li>
                <strong>Soil Preparation:</strong> Foundation soils are prepared to proper grade and 
                compaction. Unsuitable material is removed, and bearing surfaces are prepared for 
                foundation support.
              </li>
              <li>
                <strong>Inspection and Foundation Placement:</strong> Excavations are inspected by 
                building departments before foundation placement. After approval, foundations are 
                placed, and backfill operations begin.
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
                <h3 className={styles.faqQuestion}>How deep do foundations need to be in South Florida?</h3>
                <p className={styles.faqAnswer}>
                  Foundation depths in South Florida vary based on building type, soil conditions, 
                  and flood zone requirements. Florida Building Code typically requires foundations 
                  to extend below frost line (minimal in Florida) and into stable soil, with 
                  minimum depths specified in engineering drawings. Flood zones may require 
                  additional elevation requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need dewatering for foundation excavation?</h3>
                <p className={styles.faqAnswer}>
                  Dewatering is often required in South Florida due to the high water table. If 
                  excavations encounter water, dewatering systems prevent water intrusion and ensure 
                  dry working conditions. We coordinate dewatering when needed to ensure proper 
                  foundation excavation and placement.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does foundation excavation cost?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation costs vary based on foundation size, depth, soil conditions, 
                  and dewatering requirements. Typical residential foundations range from $25,000 to 
                  $75,000, while commercial foundations can range from $75,000 to $200,000+ depending 
                  on scope. Factors affecting cost include excavation depth, soil conditions, and 
                  dewatering complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens if we hit limestone bedrock?</h3>
                <p className={styles.faqAnswer}>
                  If excavations encounter limestone bedrock, specialized equipment may be needed for 
                  rock removal, or foundation design may need adjustment. Bedrock conditions are 
                  assessed during excavation, and we coordinate with engineers to determine the best 
                  approach, which may include rock removal, foundation design changes, or foundation 
                  placement on bedrock.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for foundation excavation?</h3>
                <p className={styles.faqAnswer}>
                  Yes, foundation excavation requires building permits from county building departments. 
                  Permits ensure compliance with building codes and allow for required inspections. 
                  We help identify and coordinate all required permits and inspections.
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
              We coordinate foundation and footing excavation across all of South Florida. Select 
              your location to learn more about foundation services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/excavation-earthwork/foundation-footing-excavation/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/excavation-earthwork/foundation-footing-excavation/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/excavation-earthwork/foundation-footing-excavation/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/excavation-earthwork/foundation-footing-excavation/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Foundation Excavation?"
        description="Get a free quote for your foundation and footing excavation. We'll coordinate licensed contractors with precision equipment to excavate your foundations to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

