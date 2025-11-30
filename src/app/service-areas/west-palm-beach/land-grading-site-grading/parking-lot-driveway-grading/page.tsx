import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Parking Lot & Driveway Grading in West Palm Beach, FL | Palm Beach County',
  description: 'Professional parking lot and driveway grading services in Palm Beach County. Proper slopes for drainage, ADA compliance, and vehicle accessibility.',
  openGraph: {
    title: 'Parking Lot & Driveway Grading in West Palm Beach, FL | Palm Beach County',
    description: 'Professional parking lot and driveway grading services in Palm Beach County with proper drainage and ADA compliance.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-grading-site-grading/parking-lot-driveway-grading/`,
  },
}

export default function WestPalmBeachParkingLotDrivewayGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Parking Lot and Driveway Grading in West Palm Beach, FL"
        subtitle="Professional grading for parking lots, driveways, and access roads across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Parking lot and driveway grading services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Parking lot and driveway grading services in Palm Beach County are essential for commercial 
              property owners, retail developers, general contractors, custom home builders, and anyone 
              preparing surfaces for paving or asphalt installation throughout Palm Beach County, including 
              Wellington, Royal Palm Beach, The Acreage, Loxahatchee, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center in West Palm Beach, building a custom home driveway 
              in Wellington, or upgrading an existing parking lot in Palm Beach, proper grading ensures water 
              drains correctly, meets ADA accessibility requirements, and provides safe vehicle access. We 
              coordinate licensed contractors with the right equipment and expertise for your specific Palm Beach 
              County project needs, including compliance with Palm Beach County Building Division, Environmental 
              Resources Management (ERM) review, and Unified Land Development Code (ULDC) requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Parking lot and driveway grading projects in Palm Beach County typically range from 
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
          <h2 className={styles.heading}>What Parking Lot and Driveway Grading Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Grading to achieve proper slopes (typically 1-2% minimum) to direct water away from 
                structures and toward drainage inlets or swales throughout Palm Beach County. Proper drainage 
                prevents water accumulation and extends pavement life, essential given Palm Beach County&apos;s 
                heavy rainfall and flat topography.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>ADA Compliance Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for accessible parking spaces, access aisles, and pathways to meet ADA slope 
                requirements (maximum 2% cross-slope, 5% maximum running slope) and Florida Building 
                Code Chapter 11 accessibility standards throughout Palm Beach County. Ensures compliance with 
                Palm Beach County accessibility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Crown and Cross-Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Creating proper crown (center high point) and cross-slopes for parking lots and driveways 
                to ensure water flows to drainage points throughout Palm Beach County. Crown grading prevents 
                water from pooling in the center of paved areas, critical for Palm Beach County&apos;s frequent 
                heavy rainfall.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Base Course Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and compaction of base course material to proper elevations and density for 
                asphalt or concrete paving throughout Palm Beach County. Base course must be properly graded 
                to support pavement loads, accounting for Palm Beach County&apos;s high water table and coastal 
                soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Transition Grading</h3>
              <p className={styles.serviceDescription}>
                Smooth transitions between different elevations, such as from parking lot to building 
                entrance, driveway to street, or between parking sections throughout Palm Beach County. 
                Ensures smooth vehicle access and proper drainage flow, meeting Palm Beach County building 
                code requirements and Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Inlet Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading around stormwater inlets and catch basins to ensure proper water flow into 
                drainage systems throughout Palm Beach County. Inlets must be at the low points of graded 
                areas to effectively collect runoff, meeting SFWMD Environmental Resource Permit requirements 
                and Palm Beach County Unified Land Development Code (ULDC) standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Parking Lot and Driveway Considerations</h2>
            <p className={styles.text}>
              Grading for parking lots and driveways in Palm Beach County requires specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> Parking lot and driveway grading requires Building 
                Division permits from Palm Beach County Building Division. Building permits must be obtained 
                before beginning construction, and the Building Division reviews plans to ensure compliance with 
                the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Parking lot and driveway grading 
                may require Environmental Resources Management (ERM) review for projects affecting wetlands, 
                protected species, or environmentally sensitive areas. ERM ensures that proposed developments 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for parking lot and driveway grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Parking lot and driveway grading must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Parking lots must be graded to direct 
                water to stormwater inlets or retention areas to meet SFWMD Environmental Resource Permit 
                requirements and Palm Beach County Unified Land Development Code (ULDC) standards. As of June 28, 
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
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table affects grading 
                depth and may require additional base course material or elevation adjustments. Proper 
                drainage is critical to prevent water from undermining pavement, especially in areas like 
                Palm Beach, Jupiter, and coastal neighborhoods. SFWMD Environmental Resource 
                Permits are required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones may require parking 
                lots and driveways to be graded to specific elevations above base flood elevation. This 
                affects grading depth and may require additional fill material, particularly in coastal 
                areas like Palm Beach, Jupiter, and West Palm Beach.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. Building 
                Division and ERM review can add time to projects. We coordinate permit applications to minimize 
                delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Parking Lot and Driveway Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate parking lot and driveway grading services throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Districts</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Retail and Shopping Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Jupiter</li>
                  <li>Greenacres</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Lantana</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Parking Lot and Driveway Grading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your parking lot or driveway meets all specifications and 
              regulatory requirements in Palm Beach County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, drainage design, and paving 
                specifications to understand grading requirements. This includes identifying drainage points, 
                ADA requirements, flood zone considerations, and any site constraints specific to Palm Beach 
                County conditions.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for parking lot and driveway grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed parking lot and driveway grading projects comply with the Unified Land Development 
                Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required grading permits 
                including Building Division permits, SFWMD Environmental Resource Permits for activities affecting 
                state waters and wetlands, Unified Land Development Code (ULDC) compliance, and coordinate with 
                regulatory agencies. We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (graders, compactors, laser-guided systems) and experience for 
                precise parking lot and driveway grading in Palm Beach County, including expertise with high 
                water table conditions, ADA compliance, and flood zone requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and slopes. This establishes the general grade and prepares the area for fine 
                grading, accounting for Palm Beach County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading creates proper 
                crown, cross-slopes, and drainage flow, ensuring ADA compliance for accessible parking 
                spaces.
              </li>
              <li>
                <strong>Base Course Installation:</strong> Installation and grading of base course material 
                to proper elevations and compaction for paving support. Base course must be properly graded 
                to support pavement loads, meeting Palm Beach County requirements for base material specifications.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Palm Beach County 
                Building Division or municipal building departments and paving contractors to ensure the 
                graded surface meets all specifications, ADA requirements, and is ready for paving.
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
                <h3 className={styles.faqQuestion}>What slope is required for parking lot drainage in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Parking lots in Palm Beach County typically require a minimum slope of 1-2% (1-2 feet 
                  of fall per 100 feet) to ensure proper drainage. Cross-slopes should be 1-2% to direct 
                  water to drainage inlets. Crown grading creates a center high point with water flowing 
                  to the sides. Proper slopes prevent 
                  water from pooling and extend pavement life, essential given Palm Beach County&apos;s heavy 
                  rainfall and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do parking lots need to be ADA compliant in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, commercial parking lots in Palm Beach County must include accessible parking 
                  spaces graded to ADA standards. Accessible spaces must have a maximum 2% cross-slope, 
                  and access aisles must meet slope requirements for wheelchair accessibility, following 
                  Florida Building Code Chapter 11. Accessible routes require a 36-inch minimum clear 
                  width. We ensure all grading meets ADA compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for driveway grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading in Palm Beach County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects affecting 
                  wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for 
                  activities affecting state waters and wetlands, and Unified Land Development Code (ULDC) 
                  compliance. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does driveway grading cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading costs in Palm Beach County vary based on length, width, site conditions, 
                  flood zone requirements, and drainage requirements. Typical residential driveways range 
                  from $15,000 to $50,000, while commercial driveways can range from $30,000 to $100,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  flood zone elevation requirements, and drainage complexity. Projects in flood zones or 
                  requiring significant elevation adjustments often cost more. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about high water table considerations for parking lots in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table affects grading depth and may require additional 
                  base course material or elevation adjustments. Proper drainage is critical to prevent 
                  water from undermining pavement, especially in areas like Palm Beach, Jupiter, and coastal 
                  neighborhoods. SFWMD Environmental Resource Permits are required for dewatering activities 
                  affecting state waters. Our contractors are experienced with high water table conditions 
                  and ensure proper drainage design.
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
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/" className={styles.backLink}>
                ← Back to West Palm Beach Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Parking Lot or Driveway Grading Project?"
        description="Get a free quote for your parking lot or driveway grading project in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, ADA compliance, Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

