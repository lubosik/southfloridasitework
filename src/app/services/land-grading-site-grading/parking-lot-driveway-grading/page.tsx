import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Parking Lot & Driveway Grading | South Florida',
  description: 'Professional parking lot and driveway grading services across South Florida. Proper slopes for drainage, ADA compliance, and vehicle accessibility.',
  openGraph: {
    title: 'Parking Lot & Driveway Grading | South Florida',
    description: 'Professional parking lot and driveway grading services across South Florida with proper drainage and ADA compliance.',
    url: `${siteConfig.url}/services/land-grading-site-grading/parking-lot-driveway-grading/`,
  },
}

export default function ParkingLotDrivewayGradingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Parking Lot and Driveway Grading</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Professional grading for parking lots, driveways, and access roads across South Florida. 
                We coordinate licensed contractors to achieve proper slopes for drainage, ADA compliance, 
                and vehicle accessibility.
              </p>
              <p className={styles.description}>
                Proper grading is essential for parking lots and driveways to ensure water drains correctly, 
                meet accessibility requirements, and provide safe vehicle access. Our network of licensed 
                contractors has the expertise to deliver code-compliant grading for all types of paved surfaces.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/parking-lot-grading.jpg"
                alt="Parking lot and driveway grading services in South Florida"
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
              Parking lot and driveway grading services are essential for commercial property owners, 
              retail developers, general contractors, custom home builders, and anyone preparing surfaces 
              for paving or asphalt installation.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center, building a custom home driveway, or upgrading 
              an existing parking lot, proper grading ensures water drains correctly, meets ADA accessibility 
              requirements, and provides safe vehicle access. We coordinate contractors with the right 
              equipment and expertise for your specific project needs.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Parking lot and driveway grading projects typically range from <strong>$15,000 to $50,000</strong> for 
                residential driveways, and <strong>$30,000 to $150,000+</strong> for commercial parking lots 
                depending on size, drainage requirements, ADA compliance needs, and site conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Parking Lot and Driveway Grading Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Slope Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading to achieve proper slopes (typically 1-2% minimum) to direct water away from 
                  structures and toward drainage inlets or swales. Proper drainage prevents water 
                  accumulation and extends pavement life.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>ADA Compliance Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading for accessible parking spaces, access aisles, and pathways to meet ADA slope 
                  requirements (maximum 2% cross-slope, 5% maximum running slope). Ensures compliance 
                  with accessibility standards.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Crown and Cross-Slope Grading</h3>
                <p className={styles.serviceDescription}>
                  Creating proper crown (center high point) and cross-slopes for parking lots and driveways 
                  to ensure water flows to drainage points. Crown grading prevents water from pooling in 
                  the center of paved areas.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Base Course Preparation</h3>
                <p className={styles.serviceDescription}>
                  Grading and compaction of base course material to proper elevations and density for 
                  asphalt or concrete paving. Base course must be properly graded to support pavement loads.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Transition Grading</h3>
                <p className={styles.serviceDescription}>
                  Smooth transitions between different elevations, such as from parking lot to building 
                  entrance, driveway to street, or between parking sections. Ensures smooth vehicle 
                  access and proper drainage flow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Inlet Preparation</h3>
                <p className={styles.serviceDescription}>
                  Grading around stormwater inlets and catch basins to ensure proper water flow into 
                  drainage systems. Inlets must be at the low points of graded areas to effectively 
                  collect runoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Parking Lot and Driveway Considerations</h2>
            <p className={styles.text}>
              Grading for parking lots and driveways in South Florida requires specialized knowledge of 
              local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Stormwater Management:</strong> Parking lots must be graded to direct water to 
                stormwater inlets or retention areas to meet South Florida Water Management District and 
                county requirements. Proper grading prevents flooding and reduces stormwater runoff.
              </li>
              <li>
                <strong>ADA Compliance:</strong> Commercial parking lots must include accessible parking 
                spaces graded to ADA standards (maximum 2% cross-slope). Access aisles and pathways must 
                also meet slope requirements for wheelchair accessibility.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects grading 
                depth and may require additional base course material or elevation adjustments. Proper 
                drainage is critical to prevent water from undermining pavement.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones may require parking 
                lots and driveways to be graded to specific elevations above base flood elevation. This 
                affects grading depth and may require additional fill material.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Parking lot and driveway grading typically requires 
                permits from county building departments. Commercial parking lots may require additional 
                permits for stormwater management and ADA compliance verification.
              </li>
              <li>
                <strong>Drainage Design:</strong> Grading must work in conjunction with drainage systems 
                including catch basins, swales, and retention areas. Proper grading ensures water flows 
                to drainage points effectively.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Parking Lot and Driveway Grading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your parking lot or driveway meets all specifications and 
              regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, drainage design, and paving 
                specifications to understand grading requirements. This includes identifying drainage points, 
                ADA requirements, and any site constraints.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits and coordinate 
                with local building departments. Commercial parking lots may require additional permits for 
                stormwater management and ADA compliance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (graders, compactors, laser-guided systems) and experience for 
                precise parking lot and driveway grading.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and slopes. This establishes the general grade and prepares the area for fine grading.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading creates proper 
                crown, cross-slopes, and drainage flow.
              </li>
              <li>
                <strong>Base Course Installation:</strong> Installation and grading of base course material 
                to proper elevations and compaction for paving support. Base course must be properly graded 
                to support pavement loads.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with building 
                departments and paving contractors to ensure the graded surface meets all specifications and 
                is ready for paving.
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
                <h3 className={styles.faqQuestion}>What slope is required for parking lot drainage?</h3>
                <p className={styles.faqAnswer}>
                  Parking lots typically require a minimum slope of 1-2% (1-2 feet of fall per 100 feet) 
                  to ensure proper drainage. Cross-slopes should be 1-2% to direct water to drainage inlets. 
                  Crown grading creates a center high point with water flowing to the sides. Proper slopes 
                  prevent water from pooling and extend pavement life.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do parking lots need to be ADA compliant?</h3>
                <p className={styles.faqAnswer}>
                  Yes, commercial parking lots must include accessible parking spaces graded to ADA standards. 
                  Accessible spaces must have a maximum 2% cross-slope, and access aisles must meet slope 
                  requirements for wheelchair accessibility. We ensure all grading meets ADA compliance 
                  requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does driveway grading cost?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading costs vary based on length, width, site conditions, and drainage requirements. 
                  Typical residential driveways range from $15,000 to $50,000, while commercial driveways can 
                  range from $30,000 to $100,000+ depending on scope. Factors affecting cost include site 
                  access, required earthwork, and drainage complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can I grade a parking lot without permits?</h3>
                <p className={styles.faqAnswer}>
                  No, parking lot grading typically requires permits from county building departments. Commercial 
                  parking lots may require additional permits for stormwater management and ADA compliance. We 
                  help identify and coordinate all required permits to ensure code compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is crown grading for parking lots?</h3>
                <p className={styles.faqAnswer}>
                  Crown grading creates a center high point (crown) in parking lots with water flowing to the 
                  sides toward drainage inlets. This prevents water from pooling in the center of the parking 
                  lot and ensures proper drainage. Crown grading is essential for large parking areas to 
                  maintain proper water flow.
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
              We coordinate parking lot and driveway grading across all of South Florida. Select your 
              location to learn more about grading services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-grading-site-grading/parking-lot-driveway-grading/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/parking-lot-driveway-grading/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/parking-lot-driveway-grading/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/parking-lot-driveway-grading/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Parking Lot or Driveway Grading Project?"
        description="Get a free quote for your parking lot or driveway grading project. We'll coordinate licensed contractors to deliver proper drainage, ADA compliance, and safe vehicle access."
        showPhone={true}
      />
    </main>
  )
}

