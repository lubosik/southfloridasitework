import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Grading & Site Grading in West Palm Beach, FL | Palm Beach County',
  description: 'Professional land grading and site grading services in Palm Beach County. Building pad grading, parking lot grading, road grading, and drainage solutions.',
  openGraph: {
    title: 'Land Grading & Site Grading in West Palm Beach, FL | Palm Beach County',
    description: 'Professional land grading and site grading services in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-grading-site-grading/`,
  },
}

export default function WestPalmBeachLandGradingSiteGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Land Grading and Site Grading in West Palm Beach, FL"
        subtitle="Precision grading services for building pads, parking lots, roads, and drainage across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Land grading and site grading services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land grading and site grading services in Palm Beach County are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need precise elevation control and proper drainage for 
              their construction projects throughout Palm Beach County, including Wellington, Royal Palm Beach, 
              The Acreage, Loxahatchee, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re preparing a building pad for a new home in West Palm Beach, grading 
              a parking lot for a commercial development in Wellington, or fixing drainage problems on 
              an existing property in Palm Beach, we coordinate licensed contractors with the 
              expertise and equipment to achieve proper elevations and slopes, with full understanding 
              of Palm Beach County requirements including Building Division permits, Environmental Resources 
              Management (ERM) review, Unified Land Development Code (ULDC) compliance, and SFWMD 
              Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Land grading projects in Palm Beach County typically start around 
                <strong> $25,000</strong> for residential building pads and can range from 
                $50,000 to $250,000+ for large commercial developments, parking lots, or 
                comprehensive site regrading projects. Projects in flood zones or requiring 
                significant elevation adjustments often exceed $100,000. Projects involving 
                development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Land Grading and Site Grading Includes in Palm Beach County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive grading services cover all aspects of site preparation in Palm Beach County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for residential and commercial building pads to achieve proper 
                elevations above Base Flood Elevation (BFE) as required by Palm Beach County building 
                codes and flood zone requirements. Includes rough grading, fine grading, and final 
                grading to engineering specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for parking lots, driveways, and access roads with proper slopes for 
                drainage throughout Palm Beach County. Ensures compliance with Palm Beach County 
                accessibility requirements and stormwater management standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Access Drive Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and subdivision infrastructure to meet Palm Beach 
                County standards and engineering specifications. Compliance with Palm Beach County 
                building codes and Unified Land Development Code (ULDC) requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough and Final Grading</h3>
              <p className={styles.serviceDescription}>
                Complete grading services for new developments throughout Palm Beach County, including 
                rough grading for approximate elevations and final grading to achieve precise elevations 
                within 0.1 feet of specified grades per engineering drawings. Compliance with Palm Beach 
                County building codes and Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Regrading for Drainage</h3>
              <p className={styles.serviceDescription}>
                Site regrading to fix existing drainage problems by adjusting elevations and 
                slopes to redirect water flow away from structures and eliminate standing water 
                throughout Palm Beach County. Essential for flood-prone properties, with compliance 
                to SFWMD Environmental Resource Permit requirements and Unified Land Development Code 
                (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Stabilization</h3>
              <p className={styles.serviceDescription}>
                Grading and stabilization of slopes to prevent erosion, especially important 
                in coastal areas and properties near waterways throughout Palm Beach County. Meets 
                Unified Land Development Code (ULDC) requirements for erosion control and environmental 
                protection, with compliance to SFWMD Environmental Resource Permit standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Grading Considerations</h2>
            <p className={styles.text}>
              Grading in Palm Beach County presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Flood Zone Elevations:</strong> Properties in flood zones must be graded 
                to specific elevations above Base Flood Elevation (BFE) as required by FEMA and 
                Palm Beach County building codes. Many Palm Beach County properties are in flood 
                zones AE, VE, or X, each with specific elevation requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table affects 
                grading depth, compaction, and drainage design. Proper dewatering and drainage 
                systems are essential for successful grading projects. The water table can be 
                within 2-3 feet of the surface in many areas, requiring SFWMD Environmental Resource 
                Permits for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Palm Beach County have unique 
                soil characteristics including limestone bedrock, sandy soils, and organic materials 
                that affect grading techniques and compaction requirements. Our contractors are 
                experienced with these conditions.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Grading projects require Building Division 
                permits from Palm Beach County Building Division. Building permits must be obtained 
                before beginning construction, and the Building Division reviews plans to ensure 
                compliance with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Grading projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed developments comply 
                with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified 
                Land Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Grading projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Grading projects affecting state 
                waters and wetlands require SFWMD Environmental Resource Permits. As of June 28, 2024, 
                new water quality performance standards were implemented. We coordinate permit applications 
                and ensure compliance throughout operations.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for grading projects in Palm Beach County.
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
            <h2 className={styles.heading}>The Grading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach to grading ensures your Palm Beach County project meets 
              all specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, engineering drawings, 
                and survey data to understand grading requirements, identify challenges, and assess 
                Palm Beach County specific conditions including flood zones, water table, soil 
                characteristics, and environmental considerations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed grading projects comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits including 
                Building Division permits, SFWMD Environmental Resource Permits for activities affecting 
                state waters and wetlands, Unified Land Development Code (ULDC) compliance, and coordinate 
                with regulatory agencies. We coordinate with Palm Beach County Building Division, ERM, SFWMD, 
                and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for your specific Palm Beach County grading 
                needs, including expertise with high water table conditions, flood zone requirements, 
                and coastal soil conditions.
              </li>
              <li>
                <strong>Grading Execution:</strong> Contractors perform rough grading, fine grading, 
                and final grading to achieve precise elevations and slopes per engineering 
                specifications, ensuring compliance with Base Flood Elevation requirements and 
                Palm Beach County building codes.
              </li>
              <li>
                <strong>Compaction and Testing:</strong> Proper soil compaction is achieved and tested 
                to meet Palm Beach County building code requirements for foundation support. Special attention 
                to compaction in areas with high water table conditions, with compliance to Unified Land 
                Development Code (ULDC) standards.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Palm Beach County 
                Building Division and ensure all grading meets engineering specifications, building 
                code requirements, Unified Land Development Code (ULDC) compliance, and is ready for building 
                construction or paving.
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
                <h3 className={styles.faqQuestion}>What permits are required for land grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include development 
                  permits (Florida Statute 380.04) obtained prior to building permit issuance, Building 
                  Division permits from Palm Beach County Building Division, Environmental Resources Management 
                  (ERM) review for projects affecting wetlands or environmentally sensitive areas, SFWMD 
                  Environmental Resource Permits for activities affecting state waters and wetlands, Unified 
                  Land Development Code (ULDC) compliance, and county grading permits. We help identify 
                  and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does flood zone designation affect grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Properties in flood zones (AE, VE, or X) must be graded to elevations above Base 
                  Flood Elevation (BFE) as required by FEMA and Palm Beach County building codes. 
                  This often requires significant fill material and careful planning. Our contractors are 
                  experienced with flood zone requirements and can help ensure your grading project meets 
                  all elevation requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations and slopes. 
                  Final grading is the precise finishing work to achieve exact elevations and slopes 
                  specified in engineering drawings, typically within 0.1 feet of specified elevations. 
                  Both phases are critical for proper site preparation in Palm Beach County, with compliance 
                  to building codes and Unified Land Development Code (ULDC) requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs vary based on size, site conditions, flood zone requirements, 
                  and required earthwork. Typical residential building pads range from $25,000 to $75,000, 
                  while commercial pads can range from $50,000 to $200,000+ depending on scope. Projects 
                  in flood zones requiring significant fill material often cost more due to additional 
                  material and elevation requirements. Palm Beach County permit processing, including ERM 
                  review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can grading fix drainage problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for drainage problems in Palm Beach County. 
                  By adjusting site elevations and slopes, we can redirect water flow away from structures 
                  and eliminate standing water. This is often combined with drainage system installation 
                  for comprehensive solutions, especially important given Palm Beach County&apos;s high water 
                  table and frequent heavy rainfall, with compliance to SFWMD Environmental Resource 
                  Permit requirements and Unified Land Development Code (ULDC) standards.
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
              Explore our specialized land grading and site grading services in Palm Beach County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/house-pad-building-pad-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>House Pad Grading and Building Pads</h3>
                <p className={styles.subServiceDescription}>
                  Precision grading for residential and commercial building pads in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/parking-lot-driveway-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Parking Lot and Driveway Grading</h3>
                <p className={styles.subServiceDescription}>
                  Grading for parking lots, driveways, and access roads in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/road-access-drive-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Road and Access Drive Grading</h3>
                <p className={styles.subServiceDescription}>
                  Grading for roads, access drives, and subdivision infrastructure in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/rough-final-grading-developments/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Rough and Final Grading for New Developments</h3>
                <p className={styles.subServiceDescription}>
                  Complete grading services for new developments in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/regrading-drainage-problems/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Regrading for Drainage Problems</h3>
                <p className={styles.subServiceDescription}>
                  Site regrading to fix existing drainage issues in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/slope-stabilization-erosion-control/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Slope Stabilization and Erosion Control</h3>
                <p className={styles.subServiceDescription}>
                  Grading and stabilization of slopes to prevent erosion in Palm Beach County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Grading Project?"
        description="Get a free quote for your land grading or site grading project in Palm Beach County. We'll connect you with licensed contractors experienced in Palm Beach County conditions, Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

