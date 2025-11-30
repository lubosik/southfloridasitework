import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Road & Access Drive Grading | South Florida',
  description: 'Professional road and access drive grading services across South Florida. Proper crown, cross-slopes, and drainage features for subdivision infrastructure.',
  openGraph: {
    title: 'Road & Access Drive Grading | South Florida',
    description: 'Professional road and access drive grading services across South Florida with proper drainage and infrastructure preparation.',
    url: `${siteConfig.url}/services/land-grading-site-grading/road-access-drive-grading/`,
  },
}

export default function RoadAccessDriveGradingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Road and Access Drive Grading</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Professional grading for roads, access drives, and subdivision infrastructure across 
                South Florida. We coordinate licensed contractors to achieve proper crown, cross-slopes, 
                and drainage features required for safe vehicle access and effective water management.
              </p>
              <p className={styles.description}>
                Road and access drive grading is critical for proper drainage, vehicle safety, and 
                infrastructure longevity. Our network of licensed contractors has the expertise and 
                equipment to deliver precise elevations and proper slopes for all types of roadways.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/road-grading.jpg"
                alt="Road and access drive grading services in South Florida"
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
              Road and access drive grading services are essential for developers, general contractors, 
              subdivision developers, commercial property owners, and anyone preparing roadways for 
              paving or infrastructure installation.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, building access roads for a commercial 
              development, or upgrading existing roadways, proper grading ensures water drains correctly, 
              provides safe vehicle access, and meets engineering specifications. We coordinate contractors 
              with the right equipment and expertise for your specific project needs.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Road and access drive grading projects typically range from <strong>$30,000 to $100,000</strong> for 
                single access drives, and <strong>$100,000 to $500,000+</strong> for subdivision road networks 
                depending on length, width, drainage requirements, and site conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Road and Access Drive Grading Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Crown Grading</h3>
                <p className={styles.serviceDescription}>
                  Creating proper crown (center high point) in roadways to direct water to the sides 
                  and into drainage systems. Crown grading prevents water from pooling in the center 
                  of roads and ensures proper drainage flow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Cross-Slope Grading</h3>
                <p className={styles.serviceDescription}>
                  Establishing proper cross-slopes (typically 2-3%) across road width to direct water 
                  to roadside drainage. Cross-slopes must be consistent along the entire road length 
                  for effective water management.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Longitudinal Slope Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading along the road length to achieve proper longitudinal slopes (typically 
                  0.5-6% minimum) for drainage while maintaining safe vehicle access. Slopes must 
                  balance drainage needs with vehicle safety requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Subgrade Preparation</h3>
                <p className={styles.serviceDescription}>
                  Grading and compaction of subgrade material to proper elevations and density for 
                  base course and pavement installation. Subgrade must be properly graded to support 
                  road loads and prevent settlement.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Feature Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading around catch basins, swales, and drainage inlets to ensure proper water 
                  flow into drainage systems. Road grading must work in conjunction with drainage 
                  infrastructure for effective water management.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Transition Grading</h3>
                <p className={styles.serviceDescription}>
                  Smooth transitions between different road sections, intersections, and connections 
                  to existing roadways. Transition grading ensures smooth vehicle access and proper 
                  drainage flow at connection points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Road Grading Considerations</h2>
            <p className={styles.text}>
              Grading for roads and access drives in South Florida requires specialized knowledge of 
              local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Stormwater Management:</strong> Roads must be graded to direct water to 
                stormwater inlets, swales, or retention areas to meet South Florida Water Management 
                District and county requirements. Proper grading prevents flooding and reduces stormwater 
                runoff into roadways.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                subgrade preparation and may require additional base course material or elevation 
                adjustments. Proper drainage is critical to prevent water from undermining road 
                foundations.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Roads in flood zones may need to be graded 
                to specific elevations above base flood elevation. This affects grading depth and may 
                require additional fill material or elevation adjustments.
              </li>
              <li>
                <strong>Subdivision Infrastructure:</strong> Subdivision roads require coordination 
                with utility installation, drainage systems, and lot grading. Road grading must be 
                sequenced properly with other infrastructure work.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Road grading typically requires permits from 
                county building departments and may require additional permits from SFWMD for 
                stormwater management. Subdivision roads may require additional approvals.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> Roads must be graded to exact elevations 
                and slopes specified in engineering drawings. Crown, cross-slopes, and longitudinal 
                slopes must meet engineering requirements for proper drainage and vehicle safety.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Road and Access Drive Grading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your road or access drive meets all specifications and 
              regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, road design, 
                and site plans to understand grading requirements. This includes identifying drainage 
                points, utility locations, and any site constraints.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits and 
                coordinate with local building departments and regulatory agencies. Subdivision roads 
                may require additional approvals and inspections.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (motor graders, compactors, laser-guided systems) and 
                experience for precise road grading.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations and establish the general road profile. This establishes the 
                basic grade and prepares the area for fine grading.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to 
                achieve exact elevations and slopes specified in engineering drawings. Fine grading 
                creates proper crown, cross-slopes, and longitudinal slopes.
              </li>
              <li>
                <strong>Subgrade Compaction:</strong> Proper compaction of subgrade material to meet 
                engineering specifications for road foundation support. Compaction testing ensures 
                subgrade meets density requirements.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with 
                building departments, engineers, and paving contractors to ensure the graded road 
                meets all specifications and is ready for base course and paving.
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
                <h3 className={styles.faqQuestion}>What is crown grading for roads?</h3>
                <p className={styles.faqAnswer}>
                  Crown grading creates a center high point (crown) in roadways with water flowing to 
                  the sides toward drainage systems. Crown grading prevents water from pooling in the 
                  center of roads and ensures proper drainage. Typical crown height is 2-4 inches above 
                  the edges, creating a slight arch in the road surface.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for road drainage?</h3>
                <p className={styles.faqAnswer}>
                  Roads typically require a minimum longitudinal slope of 0.5% (0.5 feet of fall per 
                  100 feet) for drainage, with a maximum of 6% for vehicle safety. Cross-slopes should 
                  be 2-3% to direct water to roadside drainage. Proper slopes prevent water from pooling 
                  and ensure effective drainage.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does access drive grading cost?</h3>
                <p className={styles.faqAnswer}>
                  Access drive grading costs vary based on length, width, site conditions, and drainage 
                  requirements. Typical single access drives range from $30,000 to $100,000, while 
                  subdivision road networks can range from $100,000 to $500,000+ depending on scope. 
                  Factors affecting cost include site access, required earthwork, and drainage complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do subdivision roads need special permits?</h3>
                <p className={styles.faqAnswer}>
                  Yes, subdivision roads typically require permits from county building departments and 
                  may require additional permits from SFWMD for stormwater management. Subdivision roads 
                  may also require approval from planning departments and coordination with utility 
                  providers. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between subgrade and base course?</h3>
                <p className={styles.faqAnswer}>
                  Subgrade is the native soil that has been graded and compacted to proper elevations. 
                  Base course is the layer of crushed stone or aggregate placed on top of the subgrade 
                  before paving. Subgrade grading establishes the road profile, while base course 
                  provides additional support for the pavement. Both must be properly graded and 
                  compacted.
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
              We coordinate road and access drive grading across all of South Florida. Select your 
              location to learn more about grading services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-grading-site-grading/road-access-drive-grading/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/road-access-drive-grading/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/road-access-drive-grading/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/road-access-drive-grading/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Land Grading and Site Grading
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Road or Access Drive Grading Project?"
        description="Get a free quote for your road or access drive grading project. We'll coordinate licensed contractors to deliver proper drainage, safe vehicle access, and code-compliant infrastructure."
        showPhone={true}
      />
    </main>
  )
}

