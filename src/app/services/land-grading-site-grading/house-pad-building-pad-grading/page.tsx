import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'House Pad & Building Pad Grading | South Florida',
  description: 'Precision building pad grading for residential and commercial projects across South Florida. Proper elevations, slopes, and compaction for code compliance.',
  openGraph: {
    title: 'House Pad & Building Pad Grading | South Florida',
    description: 'Precision building pad grading for residential and commercial projects across South Florida.',
    url: `${siteConfig.url}/services/land-grading-site-grading/house-pad-building-pad-grading/`,
  },
}

export default function HousePadBuildingPadGradingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>House Pad Grading and Building Pads</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Precision grading for residential and commercial building pads across South Florida. 
                We coordinate licensed contractors to achieve proper elevations, slopes, and compaction 
                required by engineering specifications and building codes.
              </p>
              <p className={styles.description}>
                Building pad grading is critical for foundation stability and code compliance. Our 
                network of licensed contractors has the expertise and equipment to deliver precise 
                elevations and proper compaction for your construction project.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/house-pad-grading.jpg"
                alt="House pad and building pad grading services in South Florida"
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
              Building pad grading services are essential for general contractors, custom home builders, 
              developers, commercial property owners, and anyone preparing a site for new construction.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a single-family home, a commercial building, or a multi-unit 
              development, proper building pad grading ensures your foundation will be stable, code-compliant, 
              and properly drained. We coordinate contractors with the right equipment and expertise for 
              your specific project requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Building pad grading projects typically range from <strong>$25,000 to $75,000</strong> for 
                residential pads, and <strong>$50,000 to $200,000+</strong> for commercial building pads 
                depending on size, site conditions, required earthwork, and compaction requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Building Pad Grading Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Survey and Elevation Verification</h3>
                <p className={styles.serviceDescription}>
                  Review of engineering drawings, survey data, and site conditions to determine exact 
                  grading requirements and identify any challenges or constraints.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Rough Grading</h3>
                <p className={styles.serviceDescription}>
                  Initial earthmoving to achieve approximate elevations and slopes. Rough grading removes 
                  excess material or adds fill to bring the site to within a few inches of final elevations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Fine Grading</h3>
                <p className={styles.serviceDescription}>
                  Precise grading work to achieve exact elevations specified in engineering drawings, 
                  typically within 0.1 feet of specified elevations. Fine grading creates the exact 
                  slopes and contours required.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Soil Compaction</h3>
                <p className={styles.serviceDescription}>
                  Proper compaction of building pad soils to meet building code requirements for foundation 
                  support. Compaction testing ensures soils meet specified density requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Preparation</h3>
                <p className={styles.serviceDescription}>
                  Grading includes proper slopes and drainage features to direct water away from the 
                  building pad and prevent water accumulation around foundations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Inspection Preparation</h3>
                <p className={styles.serviceDescription}>
                  Coordination of final grading inspections to ensure the building pad meets all engineering 
                  specifications and is ready for foundation construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Building Pad Considerations</h2>
            <p className={styles.text}>
              Building pad grading in South Florida requires specialized knowledge of local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Flood Zone Elevations:</strong> Properties in flood zones must have building pads 
                graded to specific elevations above base flood elevation (BFE) as required by FEMA and 
                local building codes. This is critical for flood insurance and code compliance.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects grading 
                depth and compaction. Proper dewatering may be required, and building pads may need to 
                be elevated above the water table for foundation stability.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil characteristics 
                including sand, limestone, and organic materials. Building pad grading must account for 
                these conditions and may require specialized compaction techniques.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Building pad grading must incorporate proper 
                drainage and stormwater management to meet South Florida Water Management District and 
                county requirements. Pads must be graded to direct water away from structures.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Building pad grading typically requires permits from 
                county building departments. Projects in flood zones or involving significant land 
                disturbance may require additional permits from SFWMD or DERM.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> Building pads must be graded to exact elevations 
                and slopes specified in engineering drawings. Contractors must have the equipment and 
                expertise to achieve precise elevations, typically within 0.1 feet of specified grades.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Building Pad Grading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your building pad meets all specifications and regulatory 
              requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, survey data, and 
                site plans to understand grading requirements, identify challenges, and determine the 
                scope of work needed.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits and coordinate 
                with local building departments and regulatory agencies. This includes flood zone permits, 
                SFWMD permits if needed, and county building permits.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (graders, compactors, laser-guided systems) and experience for 
                precise building pad grading.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations. This may involve cut and fill operations to balance site grades 
                and bring the pad area to approximate final elevations.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading typically 
                achieves elevations within 0.1 feet of specified grades.
              </li>
              <li>
                <strong>Compaction:</strong> Proper soil compaction using rollers and compactors to achieve 
                required density for foundation support. Compaction testing ensures soils meet building 
                code requirements.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with building 
                departments and engineers to ensure the building pad meets all specifications and is ready 
                for foundation construction.
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and fine grading for building pads?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations, typically 
                  within a few inches of final elevations. Fine grading is the precise finishing work 
                  using laser-guided equipment to achieve exact elevations specified in engineering 
                  drawings, typically within 0.1 feet of specified grades. Fine grading creates the 
                  exact slopes and contours required for the building pad.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs vary based on pad size, site conditions, required earthwork, 
                  and compaction requirements. Typical residential building pads range from $25,000 to 
                  $75,000, while commercial pads can range from $50,000 to $200,000+ depending on scope. 
                  Flood zone requirements, high water table conditions, and site access can affect costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for building pad grading?</h3>
                <p className={styles.faqAnswer}>
                  Yes, building pad grading typically requires permits from county building departments. 
                  Projects in flood zones may require additional FEMA compliance permits. Projects 
                  involving significant land disturbance may require SFWMD environmental resource permits. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does building pad grading need to be?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading must achieve elevations within 0.1 feet (1.2 inches) of specified 
                  elevations in engineering drawings. Slopes must match specified grades exactly. This 
                  precision is critical for foundation stability and code compliance. Our contractors use 
                  laser-guided grading equipment to achieve this precision.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens if my property is in a flood zone?</h3>
                <p className={styles.faqAnswer}>
                  Properties in flood zones must have building pads graded to elevations above base flood 
                  elevation (BFE) as required by FEMA and local building codes. This is critical for 
                  flood insurance and code compliance. We coordinate with engineers and building departments 
                  to ensure proper flood zone compliance.
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
              We coordinate house pad and building pad grading across all of South Florida. Select your 
              location to learn more about building pad grading in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-grading-site-grading/house-pad-building-pad-grading/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/house-pad-building-pad-grading/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/house-pad-building-pad-grading/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/house-pad-building-pad-grading/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Building Pad Grading Project?"
        description="Get a free quote for your house pad or building pad grading project. We'll coordinate licensed contractors to deliver precise elevations and proper compaction for your construction project."
        showPhone={true}
      />
    </main>
  )
}

