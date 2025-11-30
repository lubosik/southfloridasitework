import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Grading & Site Grading in Miami, FL | Miami-Dade County',
  description: 'Professional land grading and site grading services in Miami-Dade County. Building pad grading, parking lot grading, road grading, and drainage solutions.',
  openGraph: {
    title: 'Land Grading & Site Grading in Miami, FL | Miami-Dade County',
    description: 'Professional land grading and site grading services in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/`,
  },
}

export default function MiamiLandGradingSiteGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Land Grading and Site Grading in Miami, FL"
        subtitle="Precision grading services for building pads, parking lots, roads, and drainage across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Land grading and site grading services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land grading and site grading services in Miami-Dade County are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need precise elevation control and proper drainage for 
              their construction projects in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re preparing a building pad for a new home in Coral Gables, grading 
              a parking lot for a commercial development in Doral, or fixing drainage problems on 
              an existing property in Miami Beach, we coordinate licensed contractors with the 
              expertise and equipment to achieve proper elevations and slopes, with full understanding 
              of Miami-Dade County requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Land grading projects in Miami-Dade County typically start around 
                <strong> $25,000</strong> for residential building pads and can range from 
                $50,000 to $250,000+ for large commercial developments, parking lots, or 
                comprehensive site regrading projects. Projects in flood zones or requiring 
                significant elevation adjustments often exceed $100,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Land Grading and Site Grading Includes in Miami</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive grading services cover all aspects of site preparation in Miami-Dade County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for residential and commercial building pads to achieve proper 
                elevations above Base Flood Elevation (BFE) as required by Miami-Dade building codes. 
                Includes rough grading, fine grading, and final grading to engineering specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for parking lots, driveways, and access roads with proper slopes for 
                drainage. Ensures compliance with Miami-Dade County accessibility requirements 
                and stormwater management standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Access Drive Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and subdivision infrastructure to meet Miami-Dade 
                County Department of Transportation & Public Works (DTPW) standards and engineering 
                specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough and Final Grading</h3>
              <p className={styles.serviceDescription}>
                Complete grading services for new developments, including rough grading for 
                approximate elevations and final grading to achieve precise elevations within 
                0.1 feet of specified grades per engineering drawings.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Regrading for Drainage</h3>
              <p className={styles.serviceDescription}>
                Site regrading to fix existing drainage problems by adjusting elevations and 
                slopes to redirect water flow away from structures and eliminate standing water. 
                Essential for flood-prone properties in Miami-Dade County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Stabilization</h3>
              <p className={styles.serviceDescription}>
                Grading and stabilization of slopes to prevent erosion, especially important 
                in coastal areas and properties near waterways. Meets Miami-Dade DERM requirements 
                for erosion control and environmental protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Grading Considerations</h2>
            <p className={styles.text}>
              Grading in Miami-Dade County presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Flood Zone Elevations:</strong> Properties in flood zones must be graded 
                to specific elevations above Base Flood Elevation (BFE) as required by FEMA and 
                Miami-Dade building codes. Many Miami-Dade properties are in flood zones AE, VE, 
                or X, each with specific elevation requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table affects 
                grading depth, compaction, and drainage design. Proper dewatering and drainage 
                systems are essential for successful grading projects. The water table can be 
                within 2-3 feet of the surface in many areas.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade have unique 
                soil characteristics including limestone bedrock, sandy soils, and organic materials 
                that affect grading techniques and compaction requirements. Our contractors are 
                experienced with these conditions.
              </li>
              <li>
                <strong>RER and DERM Permits:</strong> Grading projects typically require permits 
                from Miami-Dade RER (Regulatory and Economic Resources) and DERM (Department of 
                Environmental Resources Management) for land disturbance, especially for projects 
                involving significant earthwork or near waterways.
              </li>
              <li>
                <strong>DTPW Requirements:</strong> Projects involving roads, access drives, or 
                drainage modifications require coordination with Miami-Dade Department of 
                Transportation & Public Works (DTPW) and compliance with Chapter 28 of the 
                Code of Ordinances (Subdivision Code).
              </li>
              <li>
                <strong>Stormwater Management:</strong> Grading must incorporate proper drainage 
                and stormwater management to meet South Florida Water Management District (SFWMD) 
                and Miami-Dade County requirements. Site plans must show grading contours, proposed 
                elevations, and drainage calculations.
              </li>
              <li>
                <strong>Miami 21 Zoning Code:</strong> For projects in the City of Miami, grading 
                must comply with Miami 21 Zoning Code and its Transect Zone classifications, 
                including setbacks, height limits, and density restrictions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Grading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach to grading ensures your Miami-Dade County project meets 
              all specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, engineering drawings, 
                and survey data to understand grading requirements, identify challenges, and assess 
                Miami-Dade County specific conditions including flood zones, water table, and soil 
                characteristics.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits 
                including Miami-Dade RER building permits, DERM environmental resource permits for 
                land disturbance, DTPW permits for drainage modifications, SFWMD permits, and 
                coordinate with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for your specific Miami-Dade grading needs, 
                including expertise with high water table conditions and flood zone requirements.
              </li>
              <li>
                <strong>Grading Execution:</strong> Contractors perform rough grading, fine grading, 
                and final grading to achieve precise elevations and slopes per engineering 
                specifications, ensuring compliance with Base Flood Elevation requirements where applicable.
              </li>
              <li>
                <strong>Compaction and Testing:</strong> Proper soil compaction is achieved and tested 
                to meet Miami-Dade building code requirements for foundation support. Special attention 
                to compaction in areas with high water table conditions.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Miami-Dade 
                RER and ensure all grading meets engineering specifications, building code requirements, 
                and is ready for building construction or paving.
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
                <h3 className={styles.faqQuestion}>What permits are required for land grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include building 
                  permits from Miami-Dade RER, DERM environmental resource permits for land disturbance, 
                  DTPW permits for drainage modifications, SFWMD environmental resource permits for 
                  significant land disturbance, and county grading permits. Projects in the City of 
                  Miami also require compliance with Miami 21 Zoning Code. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does flood zone designation affect grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Properties in flood zones (AE, VE, or X) must be graded to elevations above Base 
                  Flood Elevation (BFE) as required by FEMA and Miami-Dade building codes. This often 
                  requires significant fill material and careful planning. Our contractors are experienced 
                  with flood zone requirements and can help ensure your grading project meets all 
                  elevation requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations and slopes. 
                  Final grading is the precise finishing work to achieve exact elevations and slopes 
                  specified in engineering drawings, typically within 0.1 feet of specified elevations. 
                  Both phases are critical for proper site preparation in Miami-Dade County.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs vary based on size, site conditions, flood zone requirements, 
                  and required earthwork. Typical residential building pads range from $25,000 to $75,000, 
                  while commercial pads can range from $50,000 to $200,000+ depending on scope. Projects 
                  in flood zones requiring significant fill material often cost more due to additional 
                  material and elevation requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can grading fix drainage problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for drainage problems in Miami-Dade County. 
                  By adjusting site elevations and slopes, we can redirect water flow away from structures 
                  and eliminate standing water. This is often combined with drainage system installation 
                  for comprehensive solutions, especially important given Miami-Dade&apos;s high water 
                  table and frequent heavy rainfall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized land grading and site grading services in Miami-Dade County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/miami/land-grading-site-grading/house-pad-building-pad-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>House Pad Grading and Building Pads</h3>
                <p className={styles.subServiceDescription}>
                  Precision grading for residential and commercial building pads in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-grading-site-grading/parking-lot-driveway-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Parking Lot and Driveway Grading</h3>
                <p className={styles.subServiceDescription}>
                  Grading for parking lots, driveways, and access roads in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-grading-site-grading/road-access-drive-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Road and Access Drive Grading</h3>
                <p className={styles.subServiceDescription}>
                  Grading for roads, access drives, and subdivision infrastructure in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-grading-site-grading/rough-final-grading-developments/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Rough and Final Grading for New Developments</h3>
                <p className={styles.subServiceDescription}>
                  Complete grading services for new developments in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-grading-site-grading/regrading-drainage-problems/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Regrading for Drainage Problems</h3>
                <p className={styles.subServiceDescription}>
                  Site regrading to fix existing drainage issues in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-grading-site-grading/slope-stabilization-erosion-control/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Slope Stabilization and Erosion Control</h3>
                <p className={styles.subServiceDescription}>
                  Grading and stabilization of slopes to prevent erosion in Miami-Dade County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Grading Project?"
        description="Get a free quote for your land grading or site grading project in Miami-Dade County. We'll connect you with licensed contractors experienced in Miami-Dade County conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

