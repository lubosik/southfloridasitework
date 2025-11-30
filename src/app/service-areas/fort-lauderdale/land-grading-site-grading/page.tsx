import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Grading & Site Grading in Fort Lauderdale, FL | Broward County',
  description: 'Professional land grading and site grading services in Broward County. Building pad grading, parking lot grading, road grading, and drainage solutions.',
  openGraph: {
    title: 'Land Grading & Site Grading in Fort Lauderdale, FL | Broward County',
    description: 'Professional land grading and site grading services in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/`,
  },
}

export default function FortLauderdaleLandGradingSiteGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Land Grading and Site Grading in Fort Lauderdale, FL"
        subtitle="Precision grading services for building pads, parking lots, roads, and drainage across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Land grading and site grading services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land grading and site grading services in Broward County are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need precise elevation control and proper drainage for 
              their construction projects throughout Broward County, including Weston, Plantation, 
              Pembroke Pines, Coral Springs, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re preparing a building pad for a new home in Fort Lauderdale, grading 
              a parking lot for a commercial development in Weston, or fixing drainage problems on 
              an existing property in Plantation, we coordinate licensed contractors with the 
              expertise and equipment to achieve proper elevations and slopes, with full understanding 
              of Broward County requirements including Development & Environmental Review (DER), 
              Natural Resource Protection Code compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Land grading projects in Broward County typically start around 
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
          <h2 className={styles.heading}>What Land Grading and Site Grading Includes in Broward County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive grading services cover all aspects of site preparation in Broward County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for residential and commercial building pads to achieve proper 
                elevations above Base Flood Elevation (BFE) as required by Broward County building 
                codes. First floor elevations must be protected from a 100-year, 3-day storm event. 
                Includes rough grading, fine grading, and final grading to engineering specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for parking lots, driveways, and access roads with proper slopes for 
                drainage throughout Broward County. Minimum parking lot elevation must be protected 
                from a 10-year, 3-day storm event, whether using inverted crown or standard crown 
                design. Ensures compliance with Broward County accessibility requirements and 
                stormwater management standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Access Drive Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and subdivision infrastructure to meet Broward 
                County standards and engineering specifications. Minimum roadway crown elevation must 
                be protected from a 10-year, 3-day storm event. Compliance with Broward County 
                building codes and Natural Resource Protection Code requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough and Final Grading</h3>
              <p className={styles.serviceDescription}>
                Complete grading services for new developments throughout Broward County, including 
                rough grading for approximate elevations and final grading to achieve precise elevations 
                within 0.1 feet of specified grades per engineering drawings. Compliance with Broward 
                County building codes and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Regrading for Drainage</h3>
              <p className={styles.serviceDescription}>
                Site regrading to fix existing drainage problems by adjusting elevations and 
                slopes to redirect water flow away from structures and eliminate standing water 
                throughout Broward County. Essential for flood-prone properties, with compliance 
                to SFWMD Environmental Resource Permit requirements and Natural Resource Protection 
                Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Stabilization</h3>
              <p className={styles.serviceDescription}>
                Grading and stabilization of slopes to prevent erosion, especially important 
                in coastal areas and properties near waterways throughout Broward County. Meets 
                Natural Resource Protection Code requirements for erosion control and environmental 
                protection, with compliance to SFWMD Environmental Resource Permit standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Grading Considerations</h2>
            <p className={styles.text}>
              Grading in Broward County presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Flood Zone Elevations:</strong> Properties in flood zones must be graded 
                to specific elevations above Base Flood Elevation (BFE) as required by FEMA and 
                Broward County building codes. First floor elevations of all structures must be 
                protected from a 100-year, 3-day storm event. Many Broward County properties are 
                in flood zones AE, VE, or X, each with specific elevation requirements.
              </li>
              <li>
                <strong>Storm Event Protection:</strong> Broward County requires minimum roadway 
                crown elevation and parking lot elevation to be protected from a 10-year, 3-day 
                storm event, whether using inverted crown or standard crown design. These criteria 
                represent minimum standards and may be increased by the Engineer of Record as applicable.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table affects 
                grading depth, compaction, and drainage design. Proper dewatering and drainage 
                systems are essential for successful grading projects. The water table can be 
                within 2-3 feet of the surface in many areas, requiring SFWMD Environmental Resource 
                Permits for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County have unique 
                soil characteristics including limestone bedrock, sandy soils, and organic materials 
                that affect grading techniques and compaction requirements. Our contractors are 
                experienced with these conditions.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Grading projects typically 
                require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply 
                with the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County&apos;s Land Use 
                Plan incorporates long-term resilience planning, including requirements that all land use 
                and planning decisions within Priority Planning Areas consider and effectively address 
                future climate predictions for a 50-year planning horizon, accounting for approximately 
                2 feet of sea level rise. Grading projects should consider these long-term resilience 
                requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for grading projects in Broward County.
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
            <h2 className={styles.heading}>The Grading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach to grading ensures your Broward County project meets 
              all specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review your site plans, engineering drawings, 
                and survey data to understand grading requirements, identify challenges, and assess 
                Broward County specific conditions including flood zones, water table, soil 
                characteristics, and climate resilience considerations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for grading projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed grading projects comply 
                with the Broward County Land Development Code and Natural Resource Protection Code. All 
                DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits including 
                Uniform Building Permit Applications (updated November 14, 2025), DER through ePermits 
                OneStop, SFWMD Environmental Resource Permits for activities affecting state waters and 
                wetlands, Natural Resource Protection Code compliance, and coordinate with regulatory 
                agencies. We coordinate with Broward County Building Code Division, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for your specific Broward County grading 
                needs, including expertise with high water table conditions, flood zone requirements, 
                and climate resilience considerations.
              </li>
              <li>
                <strong>Grading Execution:</strong> Contractors perform rough grading, fine grading, 
                and final grading to achieve precise elevations and slopes per engineering 
                specifications, ensuring compliance with Base Flood Elevation requirements, 100-year, 
                3-day storm event protection for structures, and 10-year, 3-day storm event protection 
                for roadways and parking lots where applicable.
              </li>
              <li>
                <strong>Compaction and Testing:</strong> Proper soil compaction is achieved and tested 
                to meet Broward County building code requirements for foundation support. Special attention 
                to compaction in areas with high water table conditions, with compliance to Natural 
                Resource Protection Code standards.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Broward County 
                Building Code Division and ensure all grading meets engineering specifications, building 
                code requirements, Natural Resource Protection Code compliance, and is ready for building 
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
                <h3 className={styles.faqQuestion}>What permits are required for land grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include development 
                  permits (Florida Statute 380.04) obtained prior to building permit issuance, Uniform 
                  Building Permit Applications from Broward County Building Code Division, Development & 
                  Environmental Review (DER) through ePermits OneStop for applicable projects, SFWMD 
                  Environmental Resource Permits for activities affecting state waters and wetlands, 
                  Natural Resource Protection Code compliance, and county grading permits. We help identify 
                  and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does flood zone designation affect grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Properties in flood zones (AE, VE, or X) must be graded to elevations above Base 
                  Flood Elevation (BFE) as required by FEMA and Broward County building codes. First floor 
                  elevations of all structures must be protected from a 100-year, 3-day storm event. 
                  This often requires significant fill material and careful planning. Our contractors are 
                  experienced with flood zone requirements and can help ensure your grading project meets 
                  all elevation requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements for roadways and parking lots in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires minimum roadway crown elevation and parking lot elevation to be 
                  protected from a 10-year, 3-day storm event, whether using inverted crown or standard 
                  crown design. These criteria represent minimum standards and may be increased by the 
                  Engineer of Record as applicable. Our contractors ensure all grading meets these 
                  requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations and slopes. 
                  Final grading is the precise finishing work to achieve exact elevations and slopes 
                  specified in engineering drawings, typically within 0.1 feet of specified elevations. 
                  Both phases are critical for proper site preparation in Broward County, with compliance 
                  to building codes and Natural Resource Protection Code requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs vary based on size, site conditions, flood zone requirements, 
                  and required earthwork. Typical residential building pads range from $25,000 to $75,000, 
                  while commercial pads can range from $50,000 to $200,000+ depending on scope. Projects 
                  in flood zones requiring significant fill material often cost more due to additional 
                  material and elevation requirements. Broward County permit processing, including DER 
                  review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can grading fix drainage problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for drainage problems in Broward County. 
                  By adjusting site elevations and slopes, we can redirect water flow away from structures 
                  and eliminate standing water. This is often combined with drainage system installation 
                  for comprehensive solutions, especially important given Broward County&apos;s high water 
                  table and frequent heavy rainfall, with compliance to SFWMD Environmental Resource 
                  Permit requirements and Natural Resource Protection Code standards.
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
              Explore our specialized land grading and site grading services in Broward County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/house-pad-building-pad-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>House Pad Grading and Building Pads</h3>
                <p className={styles.subServiceDescription}>
                  Precision grading for residential and commercial building pads in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/parking-lot-driveway-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Parking Lot and Driveway Grading</h3>
                <p className={styles.subServiceDescription}>
                  Grading for parking lots, driveways, and access roads in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/road-access-drive-grading/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Road and Access Drive Grading</h3>
                <p className={styles.subServiceDescription}>
                  Grading for roads, access drives, and subdivision infrastructure in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/rough-final-grading-developments/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Rough and Final Grading for New Developments</h3>
                <p className={styles.subServiceDescription}>
                  Complete grading services for new developments in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/regrading-drainage-problems/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Regrading for Drainage Problems</h3>
                <p className={styles.subServiceDescription}>
                  Site regrading to fix existing drainage issues in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/slope-stabilization-erosion-control/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Slope Stabilization and Erosion Control</h3>
                <p className={styles.subServiceDescription}>
                  Grading and stabilization of slopes to prevent erosion in Broward County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Grading Project?"
        description="Get a free quote for your land grading or site grading project in Broward County. We'll connect you with licensed contractors experienced in Broward County conditions, DER requirements, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

