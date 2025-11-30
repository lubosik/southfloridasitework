import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Parking Lot & Driveway Grading in Miami, FL | Miami-Dade County',
  description: 'Professional parking lot and driveway grading services in Miami-Dade County. Proper slopes for drainage, ADA compliance, and vehicle accessibility.',
  openGraph: {
    title: 'Parking Lot & Driveway Grading in Miami, FL | Miami-Dade County',
    description: 'Professional parking lot and driveway grading services in Miami-Dade County with proper drainage and ADA compliance.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/parking-lot-driveway-grading/`,
  },
}

export default function MiamiParkingLotDrivewayGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Parking Lot and Driveway Grading in Miami, FL"
        subtitle="Professional grading for parking lots, driveways, and access roads across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Parking lot and driveway grading services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Parking lot and driveway grading services in Miami-Dade County are essential for commercial 
              property owners, retail developers, general contractors, custom home builders, and anyone 
              preparing surfaces for paving or asphalt installation in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center in Doral, building a custom home driveway 
              in Coral Gables, or upgrading an existing parking lot in Aventura, proper grading ensures 
              water drains correctly, meets ADA accessibility requirements, and provides safe vehicle 
              access. We coordinate licensed contractors with the right equipment and expertise for your 
              specific Miami-Dade County project needs, including compliance with Miami-Dade RER and 
              DTPW requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Parking lot and driveway grading projects in Miami-Dade County typically range from 
                <strong> $15,000 to $50,000</strong> for residential driveways, and 
                <strong> $30,000 to $150,000+</strong> for commercial parking lots depending on size, 
                drainage requirements, ADA compliance needs, flood zone requirements, and site conditions. 
                Projects in flood zones or requiring significant elevation adjustments often cost more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Parking Lot and Driveway Grading Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Grading to achieve proper slopes (typically 1-2% minimum) to direct water away from 
                structures and toward drainage inlets or swales. Proper drainage prevents water 
                accumulation and extends pavement life, essential given Miami-Dade&apos;s heavy rainfall 
                and flat topography.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>ADA Compliance Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for accessible parking spaces, access aisles, and pathways to meet ADA slope 
                requirements (maximum 2% cross-slope, 5% maximum running slope) and Florida Building 
                Code Chapter 11 accessibility standards. Ensures compliance with Miami-Dade County 
                accessibility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Crown and Cross-Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Creating proper crown (center high point) and cross-slopes for parking lots and driveways 
                to ensure water flows to drainage points. Crown grading prevents water from pooling in 
                the center of paved areas, critical for Miami-Dade&apos;s frequent heavy rainfall.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Base Course Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and compaction of base course material to proper elevations and density for 
                asphalt or concrete paving. Base course must be properly graded to support pavement loads, 
                accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Transition Grading</h3>
              <p className={styles.serviceDescription}>
                Smooth transitions between different elevations, such as from parking lot to building 
                entrance, driveway to street, or between parking sections. Ensures smooth vehicle access 
                and proper drainage flow, meeting Miami-Dade DTPW requirements for public right-of-way 
                connections.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Inlet Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading around stormwater inlets and catch basins to ensure proper water flow into 
                drainage systems. Inlets must be at the low points of graded areas to effectively 
                collect runoff, meeting Miami-Dade County stormwater management requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Parking Lot and Driveway Considerations</h2>
            <p className={styles.text}>
              Grading for parking lots and driveways in Miami-Dade County requires specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Miami-Dade RER and DTPW Permits:</strong> Parking lot and driveway grading requires 
                permits from Miami-Dade RER (for unincorporated areas) or municipal building departments 
                (for incorporated areas). Work impacting the public right-of-way (swales, curbs, or 
                sidewalks) requires a Public Works permit from Miami-Dade DTPW in addition to standard 
                building permits. Commercial driveway permits are typically handled at the West Dade office.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Parking lots must be graded to direct water to 
                stormwater inlets or retention areas to meet South Florida Water Management District (SFWMD) 
                and Miami-Dade County requirements. All drainage construction is subject to inspection by 
                the governing body and requires permit issuance. Proper grading prevents flooding and 
                reduces stormwater runoff.
              </li>
              <li>
                <strong>ADA Compliance:</strong> Commercial parking lots must include accessible parking 
                spaces graded to ADA standards (maximum 2% cross-slope). Access aisles and pathways must 
                meet slope requirements for wheelchair accessibility, following Florida Building Code 
                Chapter 11. Accessible routes require a 36-inch minimum clear width with gentle slopes.
              </li>
              <li>
                <strong>Driveway Specifications:</strong> Residential driveways must maintain an interior 
                width between 10 and 20 feet. Properties are generally limited to no more than two 
                driveways or approaches per frontage. Driveway edges must be positioned at least 5 feet 
                from the property line to maintain a green buffer zone. Flare-outs are permitted with a 
                maximum length of 10 feet.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table affects grading 
                depth and may require additional base course material or elevation adjustments. Proper 
                drainage is critical to prevent water from undermining pavement, especially in areas like 
                Miami Beach, Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones may require parking 
                lots and driveways to be graded to specific elevations above base flood elevation. This 
                affects grading depth and may require additional fill material, particularly in coastal 
                areas like Miami Beach, Key Biscayne, and Aventura.
              </li>
              <li>
                <strong>Concrete Standards:</strong> For driveway construction, concrete must meet specific 
                thickness requirements. In the apron area (where the driveway crosses the sidewalk or curb 
                to connect with the street), concrete must be at least 6 inches thick with proper base 
                material. The concrete strength must meet 3,000 psi standards for driveways.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Parking Lot and Driveway Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate parking lot and driveway grading services throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Districts</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Midtown Miami</li>
                  <li>Westchester</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Retail and Shopping Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Aventura</li>
                  <li>Coral Gables</li>
                  <li>Kendall</li>
                  <li>Miami Beach</li>
                  <li>South Miami</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Pinecrest</li>
                  <li>Coconut Grove</li>
                  <li>Palmetto Bay</li>
                  <li>Cutler Bay</li>
                  <li>Key Biscayne</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Hialeah</li>
                  <li>Miami Gardens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Parking Lot and Driveway Grading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your parking lot or driveway meets all specifications and 
              regulatory requirements in Miami-Dade County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, drainage design, and paving 
                specifications to understand grading requirements. This includes identifying drainage points, 
                ADA requirements, flood zone considerations, and any site constraints specific to 
                Miami-Dade County conditions.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required grading permits 
                including Miami-Dade RER building permits (for unincorporated areas) or municipal building 
                department permits (for incorporated areas), Public Works permits from DTPW for work 
                impacting the public right-of-way, SFWMD permits for stormwater management, and coordinate 
                with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (graders, compactors, laser-guided systems) and experience for 
                precise parking lot and driveway grading in Miami-Dade County, including expertise with 
                high water table conditions and ADA compliance.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and slopes. This establishes the general grade and prepares the area for fine 
                grading, accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
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
                to support pavement loads, meeting Miami-Dade requirements for concrete thickness (6 inches 
                minimum in apron areas) and base material specifications.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Miami-Dade 
                RER or municipal building departments, DTPW (for public right-of-way work), and paving 
                contractors to ensure the graded surface meets all specifications, ADA requirements, and 
                is ready for paving. Base inspections verify thickness, compaction, and forms before 
                concrete or paver installation.
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
                <h3 className={styles.faqQuestion}>What slope is required for parking lot drainage in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Parking lots in Miami-Dade County typically require a minimum slope of 1-2% (1-2 feet 
                  of fall per 100 feet) to ensure proper drainage. Cross-slopes should be 1-2% to direct 
                  water to drainage inlets. Crown grading creates a center high point with water flowing 
                  to the sides. Proper slopes prevent water from pooling and extend pavement life, essential 
                  given Miami-Dade&apos;s heavy rainfall and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do parking lots need to be ADA compliant in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, commercial parking lots in Miami-Dade County must include accessible parking 
                  spaces graded to ADA standards. Accessible spaces must have a maximum 2% cross-slope, 
                  and access aisles must meet slope requirements for wheelchair accessibility, following 
                  Florida Building Code Chapter 11. Accessible routes require a 36-inch minimum clear 
                  width. We ensure all grading meets ADA compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for driveway grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading in Miami-Dade County requires building permits from Miami-Dade RER (for 
                  unincorporated areas) or municipal building departments (for incorporated areas like 
                  Coral Gables or Pinecrest). Work impacting the public right-of-way (swales, curbs, or 
                  sidewalks) requires a Public Works permit from Miami-Dade DTPW in addition to standard 
                  building permits. Commercial driveway permits are typically handled at the West Dade 
                  office. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does driveway grading cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Driveway grading costs in Miami-Dade County vary based on length, width, site conditions, 
                  flood zone requirements, and drainage requirements. Typical residential driveways range 
                  from $15,000 to $50,000, while commercial driveways can range from $30,000 to $100,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  flood zone elevation requirements, and drainage complexity. Projects in flood zones or 
                  requiring significant elevation adjustments often cost more.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the driveway width requirements in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Residential driveways in Miami-Dade County must maintain an interior width between 10 and 
                  20 feet. Properties are generally limited to no more than two driveways or approaches 
                  per frontage. Driveway edges must be positioned at least 5 feet from the property line 
                  to maintain a green buffer zone. Flare-outs are permitted on both sides of the driveway 
                  with a maximum length of 10 feet and can extend to the property line.
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
              <a href="/service-areas/miami/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Miami Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Parking Lot or Driveway Grading Project?"
        description="Get a free quote for your parking lot or driveway grading project in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, ADA compliance, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

