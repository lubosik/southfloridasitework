import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Parking Lot & Driveway Grading in Fort Lauderdale, FL | Broward County',
  description: 'Professional parking lot and driveway grading services in Broward County. Proper slopes for drainage, ADA compliance, and vehicle accessibility.',
  openGraph: {
    title: 'Parking Lot & Driveway Grading in Fort Lauderdale, FL | Broward County',
    description: 'Professional parking lot and driveway grading services in Broward County with proper drainage and ADA compliance.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/parking-lot-driveway-grading/`,
  },
}

export default function FortLauderdaleParkingLotDrivewayGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Parking Lot and Driveway Grading in Fort Lauderdale, FL"
        subtitle="Professional grading for parking lots, driveways, and access roads across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Parking lot and driveway grading services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Parking lot and driveway grading services in Broward County are essential for commercial 
              property owners, retail developers, general contractors, custom home builders, and anyone 
              preparing surfaces for paving or asphalt installation throughout Broward County, including 
              Weston, Plantation, Pembroke Pines, Coral Springs, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center in Fort Lauderdale, building a custom home driveway 
              in Weston, or upgrading an existing parking lot in Plantation, proper grading ensures water 
              drains correctly, meets ADA accessibility requirements, and provides safe vehicle access. We 
              coordinate licensed contractors with the right equipment and expertise for your specific Broward 
              County project needs, including compliance with Broward County Building Code Division, Development 
              & Environmental Review (DER), and 10-year, 3-day storm event protection requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Parking lot and driveway grading projects in Broward County typically range from 
                <strong> $15,000 to $50,000</strong> for residential driveways, and 
                <strong> $30,000 to $150,000+</strong> for commercial parking lots depending on size, 
                drainage requirements, ADA compliance needs, flood zone requirements, and site conditions. 
                Projects in flood zones or requiring significant elevation adjustments often cost more. 
                Projects involving development work as described in Florida Statute 380.04 require a 
                development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Parking Lot and Driveway Grading Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Grading to achieve proper slopes (typically 1-2% minimum) to direct water away from 
                structures and toward drainage inlets or swales throughout Broward County. Proper drainage 
                prevents water accumulation and extends pavement life, essential given Broward County&apos;s 
                heavy rainfall and flat topography. Minimum parking lot elevation must be protected from 
                a 10-year, 3-day storm event.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>ADA Compliance Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for accessible parking spaces, access aisles, and pathways to meet ADA slope 
                requirements (maximum 2% cross-slope, 5% maximum running slope) and Florida Building 
                Code Chapter 11 accessibility standards throughout Broward County. Ensures compliance with 
                Broward County accessibility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Crown and Cross-Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Creating proper crown (center high point) and cross-slopes for parking lots and driveways 
                to ensure water flows to drainage points throughout Broward County. Crown grading prevents 
                water from pooling in the center of paved areas, critical for Broward County&apos;s frequent 
                heavy rainfall. Minimum parking lot elevation must be protected from a 10-year, 3-day storm 
                event, whether using inverted crown or standard crown design.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Base Course Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and compaction of base course material to proper elevations and density for 
                asphalt or concrete paving throughout Broward County. Base course must be properly graded 
                to support pavement loads, accounting for Broward County&apos;s high water table and coastal 
                soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Transition Grading</h3>
              <p className={styles.serviceDescription}>
                Smooth transitions between different elevations, such as from parking lot to building 
                entrance, driveway to street, or between parking sections throughout Broward County. 
                Ensures smooth vehicle access and proper drainage flow, meeting Broward County building 
                code requirements and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Inlet Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading around stormwater inlets and catch basins to ensure proper water flow into 
                drainage systems throughout Broward County. Inlets must be at the low points of graded 
                areas to effectively collect runoff, meeting SFWMD Environmental Resource Permit requirements 
                and Broward County Natural Resource Protection Code standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Parking Lot and Driveway Considerations</h2>
            <p className={styles.text}>
              Grading for parking lots and driveways in Broward County requires specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Storm Event Protection:</strong> Broward County requires minimum roadway crown 
                elevation and parking lot elevation to be protected from a 10-year, 3-day storm event, 
                whether using inverted crown or standard crown design. These criteria represent minimum 
                standards and may be increased by the Engineer of Record as applicable.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Parking lot and driveway grading 
                typically requires Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for parking lot and driveway grading projects in Broward County.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Parking lot and driveway grading must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Parking lots must be graded to direct 
                water to stormwater inlets or retention areas to meet SFWMD Environmental Resource Permit 
                requirements and Broward County Natural Resource Protection Code standards. As of June 28, 
                2024, new water quality performance standards were implemented. Proper grading prevents 
                flooding and reduces stormwater runoff.
              </li>
              <li>
                <strong>ADA Compliance:</strong> Commercial parking lots must include accessible parking 
                spaces graded to ADA standards (maximum 2% cross-slope). Access aisles and pathways must 
                meet slope requirements for wheelchair accessibility, following Florida Building Code 
                Chapter 11. Accessible routes require a 36-inch minimum clear width with gentle slopes.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table affects grading 
                depth and may require additional base course material or elevation adjustments. Proper 
                drainage is critical to prevent water from undermining pavement, especially in areas like 
                Fort Lauderdale, Hollywood, and coastal neighborhoods. SFWMD Environmental Resource 
                Permits are required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones may require parking 
                lots and driveways to be graded to specific elevations above base flood elevation. This 
                affects grading depth and may require additional fill material, particularly in coastal 
                areas like Fort Lauderdale, Hollywood, and Pompano Beach.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from the 
                date of issuance. If work doesn&apos;t begin within this period, the permit will expire, 
                though extensions can be requested by contacting the Broward County permit department.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Parking Lot and Driveway Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate parking lot and driveway grading services throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Districts</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Weston</li>
                  <li>Plantation</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Retail and Shopping Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                  <li>Davie</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Rio Vista</li>
                  <li>Parkland</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                  <li>Miramar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Parking Lot and Driveway Grading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your parking lot or driveway meets all specifications and 
              regulatory requirements in Broward County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, drainage design, and paving 
                specifications to understand grading requirements. This includes identifying drainage points, 
                ADA requirements, flood zone considerations, and any site constraints specific to Broward 
                County conditions, including 10-year, 3-day storm event protection requirements.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for parking lot and driveway grading projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed parking lot and driveway 
                grading projects comply with the Broward County Land Development Code and Natural Resource 
                Protection Code. All DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required grading permits 
                including Uniform Building Permit Applications (updated November 14, 2025), DER through 
                ePermits OneStop, SFWMD Environmental Resource Permits for activities affecting state waters 
                and wetlands, Natural Resource Protection Code compliance, and coordinate with regulatory 
                agencies. We coordinate with Broward County Building Code Division, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (graders, compactors, laser-guided systems) and experience for 
                precise parking lot and driveway grading in Broward County, including expertise with high 
                water table conditions, ADA compliance, and 10-year, 3-day storm event protection requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and slopes. This establishes the general grade and prepares the area for fine 
                grading, accounting for Broward County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading creates proper 
                crown, cross-slopes, and drainage flow, ensuring ADA compliance for accessible parking 
                spaces and 10-year, 3-day storm event protection for parking lots.
              </li>
              <li>
                <strong>Base Course Installation:</strong> Installation and grading of base course material 
                to proper elevations and compaction for paving support. Base course must be properly graded 
                to support pavement loads, meeting Broward County requirements for base material specifications.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Broward County 
                Building Code Division or municipal building departments and paving contractors to ensure the 
                graded surface meets all specifications, ADA requirements, 10-year, 3-day storm event 
                protection, and is ready for paving.
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
                <h3 className={styles.faqQuestion}>What slope is required for parking lot drainage in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Parking lots in Broward County typically require a minimum slope of 1-2% (1-2 feet 
                  of fall per 100 feet) to ensure proper drainage. Cross-slopes should be 1-2% to direct 
                  water to drainage inlets. Crown grading creates a center high point with water flowing 
                  to the sides. Minimum parking lot elevation must be protected from a 10-year, 3-day 
                  storm event, whether using inverted crown or standard crown design. Proper slopes prevent 
                  water from pooling and extend pavement life, essential given Broward County&apos;s heavy 
                  rainfall and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do parking lots need to be ADA compliant in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, commercial parking lots in Broward County must include accessible parking 
                  spaces graded to ADA standards. Accessible spaces must have a maximum 2% cross-slope, 
                  and access aisles must meet slope requirements for wheelchair accessibility, following 
                  Florida Building Code Chapter 11. Accessible routes require a 36-inch minimum clear 
                  width. We ensure all grading meets ADA compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for driveway grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from 
                  Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for 
                  activities affecting state waters and wetlands, and Natural Resource Protection Code 
                  compliance. All DER submittals are only accepted electronically. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does driveway grading cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading costs in Broward County vary based on length, width, site conditions, 
                  flood zone requirements, and drainage requirements. Typical residential driveways range 
                  from $15,000 to $50,000, while commercial driveways can range from $30,000 to $100,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  flood zone elevation requirements, and drainage complexity. Projects in flood zones or 
                  requiring significant elevation adjustments often cost more. Broward County permit 
                  processing, including DER review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements for parking lots in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires minimum roadway crown elevation and parking lot elevation to be 
                  protected from a 10-year, 3-day storm event, whether using inverted crown or standard 
                  crown design. These criteria represent minimum standards and may be increased by the 
                  Engineer of Record as applicable. Our contractors ensure all grading meets these 
                  requirements for proper storm event protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.text}>
              <a href="/services/land-grading-site-grading/parking-lot-driveway-grading/" className={styles.backLink}>
                ← View Parking Lot and Driveway Grading (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Parking Lot or Driveway Grading Project?"
        description="Get a free quote for your parking lot or driveway grading project in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, ADA compliance, 10-year, 3-day storm event protection, DER requirements, Natural Resource Protection Code compliance, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

