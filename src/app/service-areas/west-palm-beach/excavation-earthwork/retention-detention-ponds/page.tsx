import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Ponds in West Palm Beach, FL | Palm Beach County',
  description: 'Excavation and construction of retention and detention ponds for stormwater management in Palm Beach County. SFWMD and county compliance.',
  openGraph: {
    title: 'Retention & Detention Ponds in West Palm Beach, FL | Palm Beach County',
    description: 'Excavation and construction of retention and detention ponds for stormwater management in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/excavation-earthwork/retention-detention-ponds/`,
  },
}

export default function WestPalmBeachRetentionDetentionPondsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Retention and Detention Ponds in West Palm Beach, FL"
        subtitle="Excavation and construction of retention and detention ponds for stormwater management across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Retention and detention pond excavation and construction in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Retention and detention pond services in Palm Beach County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone 
              developing properties that require stormwater management systems throughout Palm Beach County, 
              including West Palm Beach, Wellington, Royal Palm Beach, Palm Beach, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Wellington, commercial complex in Royal Palm 
              Beach, or any property requiring stormwater management in Palm Beach, retention and detention 
              ponds are often required by regulatory agencies. We coordinate licensed contractors with 
              heavy equipment to excavate and construct stormwater ponds that meet Palm Beach County and 
              SFWMD Environmental Resource Permit requirements, including Unified Land Development Code (ULDC) 
              compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Retention and detention pond projects in Palm Beach County typically range from 
                <strong> $75,000 to $200,000</strong> for smaller residential developments, and 
                <strong> $200,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on pond size, depth, overflow structures, regulatory requirements, 
                and dewatering needs. Projects requiring extensive dewatering or working in flood zones 
                often cost more due to additional permit requirements and specialized techniques. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Retention and Detention Pond Construction Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Design Review</h3>
              <p className={styles.serviceDescription}>
                Review of engineering designs to understand pond dimensions, depths, and overflow 
                structures specific to Palm Beach County&apos;s stormwater management requirements and 
                Unified Land Development Code (ULDC) compliance. Design review ensures excavation meets exact 
                requirements for stormwater management and regulatory compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Pond Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of retention and detention ponds to exact depths and dimensions specified in 
                engineering drawings, accounting for Palm Beach County&apos;s high water table and coastal soil 
                conditions. Pond excavation creates proper storage volumes and depths for stormwater 
                management, with proper dewatering systems where required due to high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes for pond banks to ensure stability and prevent erosion, 
                meeting Palm Beach County and Unified Land Development Code (ULDC) requirements. Slopes are 
                typically 3:1 or 4:1 ratios, with proper grading to meet engineering specifications and 
                regulatory requirements, especially important given Palm Beach County&apos;s heavy rainfall and 
                hurricane conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of overflow structures including weirs, risers, and outfall pipes to 
                control water levels and discharge rates, meeting Palm Beach County&apos;s stormwater 
                management requirements. Overflow structures ensure proper stormwater management and 
                prevent pond overflow, sized appropriately for design storm events.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                water, meeting Palm Beach County&apos;s stormwater management requirements. Inlet and outlet 
                structures ensure proper water flow and treatment through retention and detention systems, 
                complying with Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect pond banks from erosion, meeting Palm Beach County Unified Land Development Code (ULDC) 
                requirements for environmental protection. Erosion control ensures long-term pond stability 
                and prevents sediment accumulation, especially important given Palm Beach County&apos;s heavy 
                rainfall and hurricane conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Pond Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention pond construction in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for pond construction projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Pond construction requires Building Division permits 
                from Palm Beach County Building Division. Building permits must be obtained before beginning 
                construction, and the Building Division reviews plans to ensure compliance with the Florida 
                Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Pond construction projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Pond construction typically requires 
                SFWMD Environmental Resource Permits for land disturbance and stormwater management. As of 
                June 28, 2024, new water quality performance standards were implemented. Permits ensure 
                compliance with water management district requirements and may require specific design 
                features. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Pond construction projects must comply with these requirements.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Palm Beach County&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, affects pond excavation depth and may 
                require dewatering systems. SFWMD Environmental Resource Permits are required for dewatering 
                activities affecting state waters. The applicant must have all applicable SFWMD permits before 
                proceeding with dewatering operations. Water table conditions determine pond design and may 
                affect retention pond water levels.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Pond design must account for hurricane-force winds, storm surge, 
                and heavy rainfall, ensuring long-term functionality and compliance with regulatory requirements.
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
            <h2 className={styles.heading}>Palm Beach County Retention and Detention Pond Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate retention and detention pond construction throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Lantana</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Pond Construction Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention pond is constructed properly 
              and meets all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                pond dimensions, depths, and overflow structures specific to Palm Beach County&apos;s stormwater 
                management requirements and Unified Land Development Code (ULDC) compliance. 
                Design review ensures excavation meets exact requirements for stormwater management and 
                regulatory compliance.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for pond construction projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits including 
                Building Division permits, Environmental Resources Management (ERM) review for projects 
                affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for 
                land disturbance and stormwater management, Unified Land Development Code (ULDC) compliance, and 
                coordinate with regulatory agencies. Permits ensure compliance with 
                stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, bulldozers, compactors, dewatering systems) and 
                experience for pond excavation and construction in Palm Beach County, including expertise 
                with high water table conditions, coastal soils, and regulatory 
                compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For pond excavations requiring dewatering, contractors 
                set up dewatering systems in compliance with SFWMD Environmental Resource Permit requirements 
                for activities affecting state waters, ensuring proper water quality management and discharge 
                compliance. The applicant must have all applicable SFWMD permits before proceeding with 
                dewatering operations. This is especially important given Palm Beach County&apos;s high water table.
              </li>
              <li>
                <strong>Pond Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper storage volumes for stormwater management. Excavation establishes pond shape and prepares areas for overflow 
                structure installation, accounting for Palm Beach County&apos;s high water table and coastal soil 
                conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Pond banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion, meeting Palm Beach County and Unified Land 
                Development Code (ULDC) requirements. Slope construction meets engineering specifications and 
                regulatory requirements, especially important given Palm Beach County&apos;s heavy rainfall and 
                hurricane conditions.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates, sized 
                appropriately for design storm events. Structures ensure 
                proper stormwater management and prevent pond overflow, meeting Unified Land Development 
                Code (ULDC) standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed meeting Palm Beach County Unified Land Development Code (ULDC) requirements, and final 
                inspections ensure ponds meet regulatory requirements including Unified Land Development 
                Code (ULDC) standards. Ponds are ready for operation after final 
                approval.
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
                <h3 className={styles.faqQuestion}>What is the difference between retention and detention ponds?</h3>
                <p className={styles.faqAnswer}>
                  Retention ponds maintain a permanent pool of water and provide both water quality 
                  treatment and flood control, while detention ponds temporarily store stormwater and 
                  release it slowly. Retention ponds are typically deeper with permanent water, while 
                  detention ponds are designed to fill during storms and drain between events. Both serve 
                  important stormwater management functions and must meet Palm Beach County&apos;s stormwater 
                  management requirements and Unified Land Development Code (ULDC) compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for pond construction in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction in Palm Beach County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects affecting 
                  wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for land 
                  disturbance and stormwater management, Unified Land Development Code (ULDC) compliance, and 
                  FEMA compliance permits for properties in flood zones. We help 
                  identify and coordinate all required permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does pond construction cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction costs in Palm Beach County vary based on pond size, depth, overflow 
                  structures, regulatory requirements, and dewatering needs. Typical residential 
                  developments range from $75,000 to $200,000, while large-scale commercial or 
                  subdivision projects can range from $200,000 to $500,000+ depending on scope. Factors 
                  affecting cost include excavation volume, overflow structure complexity, erosion control 
                  requirements, dewatering needs, and permit complexity. Projects requiring extensive 
                  dewatering or working in flood zones often cost more due to additional permit requirements 
                  (SFWMD Environmental Resource Permits) and specialized techniques. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect pond construction?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, affects pond excavation depth and may require dewatering systems. SFWMD 
                  Environmental Resource Permits are required for dewatering activities affecting state 
                  waters. The applicant must have all applicable SFWMD permits before proceeding with 
                  dewatering operations. Water table conditions determine pond design and may affect retention 
                  pond water levels. This is especially important in areas like Palm Beach, Jupiter, and 
                  coastal neighborhoods where the water table is particularly high. This adds complexity 
                  and cost to pond construction projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about hurricane preparedness for ponds in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s location makes it vulnerable to hurricanes and tropical storms. Pond 
                  design must account for hurricane-force winds, storm surge, and heavy rainfall, ensuring 
                  long-term functionality and compliance with regulatory requirements. Erosion control 
                  measures, proper slope construction, and overflow structure design are critical for 
                  hurricane resilience. We coordinate pond construction that meets these requirements and 
                  enhances property resilience.
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
              <a href="/services/excavation-earthwork/retention-detention-ponds/" className={styles.backLink}>
                ← View Retention and Detention Ponds (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/west-palm-beach/excavation-earthwork/" className={styles.backLink}>
                ← Back to West Palm Beach Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your West Palm Beach Stormwater Pond?"
        description="Get a free quote for your retention or detention pond construction in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, SFWMD Environmental Resource Permits, Unified Land Development Code (ULDC) compliance, high water table dewatering, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to excavate and construct stormwater ponds that meet all regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

