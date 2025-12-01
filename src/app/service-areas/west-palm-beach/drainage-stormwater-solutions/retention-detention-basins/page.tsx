import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Basins in West Palm Beach, FL | Palm Beach County',
  description: 'Design and construction of retention and detention basins in Palm Beach County. Temporary stormwater storage to meet Unified Land Development Code and SFWMD requirements.',
  openGraph: {
    title: 'Retention & Detention Basins in West Palm Beach, FL | Palm Beach County',
    description: 'Design and construction of retention and detention basins for stormwater management in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/retention-detention-basins/`,
  },
}

export default function WestPalmBeachRetentionDetentionBasinsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Retention and Detention Basins in West Palm Beach, FL"
        subtitle="Design and construction of retention and detention basins to temporarily store stormwater, reduce peak flow rates, and meet Unified Land Development Code (ULDC) and SFWMD stormwater management requirements across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Retention and detention basin construction in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Retention and detention basin services in Palm Beach County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone 
              developing properties that require stormwater management systems throughout Palm Beach County, 
              including West Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Royal Palm Beach, commercial complex in Palm 
              Beach, or any property requiring stormwater management in Jupiter, retention and 
              detention basins are often required by regulatory agencies. We coordinate contractors with 
              heavy equipment to design and construct basins that meet Palm Beach County drainage requirements, 
              Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) 
              compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Retention and detention basin projects in Palm Beach County typically range from 
                <strong> $75,000 to $200,000</strong> for smaller residential developments, and 
                <strong> $200,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on basin size, depth, overflow structures, water quality performance standards, and SFWMD Environmental Resource 
                Permit requirements. Projects requiring extensive dewatering, working in flood zones, or 
                meeting stringent water quality performance standards often cost more due to additional 
                permit requirements and specialized design. Projects involving development work as 
                described in Florida Statute 380.04 require a development permit prior to the issuance of 
                a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Retention and Detention Basin Construction Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Design</h3>
              <p className={styles.serviceDescription}>
                Design of retention and detention basins based on Palm Beach County drainage 
                requirements, flow rates, and 
                regulatory standards including Unified Land Development Code (ULDC) compliance. Design 
                determines basin dimensions, depths, storage volumes, and overflow structures to meet 
                SFWMD Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Basin Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of retention and detention basins to exact depths and dimensions specified 
                in engineering drawings, with proper dewatering systems where required due to 
                Palm Beach County&apos;s high water table. Basin excavation creates proper storage volumes and 
                depths for stormwater management, meeting county requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes for basin banks to ensure stability and prevent erosion, 
                meeting Palm Beach County Unified Land Development Code (ULDC) requirements. Slopes are typically 
                3:1 or 4:1 ratios, with proper grading to meet engineering specifications and regulatory 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of overflow structures including weirs, risers, and outfall pipes to 
                control water levels and discharge rates, meeting Unified Land Development Code (ULDC) compliance. Overflow structures ensure 
                proper stormwater management and prevent basin overflow.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                water, meeting Palm Beach County&apos;s water quality performance standards. Inlet and outlet structures ensure proper water 
                flow and treatment through retention and detention systems.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect basin banks from erosion, meeting Palm Beach County Unified Land Development Code (ULDC) 
                requirements. Erosion control ensures long-term basin stability and prevents sediment 
                accumulation, especially important for basins designed for water quality treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Basin Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention basin construction in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for retention and detention basin construction 
                projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Retention and detention basin 
                construction typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Retention and detention basin 
                construction may require Environmental Resources Management (ERM) review for projects 
                affecting wetlands, protected species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Basin construction projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Basin construction typically 
                requires SFWMD Environmental Resource Permits for land disturbance and stormwater 
                management. As of June 28, 2024, new water quality performance standards were 
                implemented, requiring stormwater treatment systems to achieve significant pollution 
                reductions. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects basin excavation depth and may 
                require dewatering systems (SFWMD Environmental Resource Permits). Water table conditions 
                determine basin design and may affect retention basin water levels, especially in areas 
                like Palm Beach, Jupiter, and coastal neighborhoods.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Basin design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Palm Beach County including Palm 
                Beach, Jupiter, Juno Beach, and Tequesta face additional 
                challenges including saltwater intrusion, storm surge, and unique soil conditions that affect 
                basin design and construction.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Basin Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate retention and detention basin construction throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Riviera Beach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Basin Construction Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention basin is constructed 
              properly and meets all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design:</strong> We coordinate with engineers to design retention 
                and detention basins that meet Palm Beach County drainage requirements and 
                regulatory standards including Unified Land Development Code (ULDC) compliance. Design determines basin dimensions, depths, storage 
                volumes, and overflow structures, with consideration of water quality performance 
                standards.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for retention and detention basin construction projects in 
                Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management, Unified Land Development Code (ULDC) 
                compliance, and coordinate with regulatory agencies. Permits ensure compliance with 
                stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                basin excavation and construction in Palm Beach County, including expertise with high 
                water table conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental 
                Resource Permit requirements, and hurricane preparedness.
              </li>
              <li>
                <strong>Basin Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper storage volumes, with proper dewatering systems where 
                required due to Palm Beach County&apos;s high water table (SFWMD Environmental Resource Permits). 
                Excavation establishes basin shape and prepares areas for overflow structure 
                installation, meeting county requirements.
              </li>
              <li>
                <strong>Slope Construction:</strong> Basin banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion, meeting Palm Beach County Unified Land 
                Development Code (ULDC) requirements. Slope construction meets engineering 
                specifications and regulatory requirements.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates, 
                meeting Unified Land Development Code (ULDC) compliance. Structures ensure proper stormwater management and prevent basin 
                overflow.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections with SFWMD, Palm Beach County Building Division or 
                municipal building departments, and Environmental Resources Management (ERM) where applicable ensure basins 
                meet regulatory requirements including Unified Land Development Code (ULDC) standards. Basins are ready for operation after final approval, with 
                ongoing maintenance requirements.
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
                <h3 className={styles.faqQuestion}>What permits are required for basin construction in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction in Palm Beach County requires development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental 
                  Resource Permits for land disturbance and stormwater management, Unified Land Development Code (ULDC) compliance, and 
                  FEMA compliance permits for properties in flood zones. SFWMD Environmental Resource Permits may be 
                  required for dewatering operations. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the water quality performance standards for basins in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  As of June 28, 2024, new water quality performance standards were implemented for 
                  SFWMD Environmental Resource Permits, requiring stormwater treatment systems to achieve 
                  significant pollution reductions. Basins must be designed to meet these requirements, 
                  ensuring 
                  proper water quality treatment.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between retention and detention basins in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Retention basins maintain a permanent pool of water and provide both water quality 
                  treatment and flood control. Detention basins temporarily store stormwater and release it 
                  slowly, typically dry between storm events. Retention basins are typically deeper with 
                  permanent water, while detention basins are designed to fill during storms and drain 
                  between events. Both must meet Unified Land Development Code (ULDC) compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does basin construction cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction costs in Palm Beach County vary based on basin size, depth, overflow 
                  structures, water quality performance standards, and 
                  SFWMD Environmental Resource Permit requirements. Typical residential developments range 
                  from $75,000 to $200,000, while large-scale commercial or subdivision projects can 
                  range from $200,000 to $500,000+ depending on scope. Factors affecting cost include 
                  excavation volume, dewatering requirements, overflow structure complexity, erosion 
                  control requirements, and permit complexity. Projects requiring extensive dewatering, 
                  working in flood zones, or meeting stringent water quality performance standards often 
                  cost more due to additional permit requirements (SFWMD Environmental Resource Permits) 
                  and specialized design. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
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
              <a href="/services/drainage-stormwater-solutions/retention-detention-basins/" className={styles.backLink}>
                ← View Retention and Detention Basins (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to West Palm Beach Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your West Palm Beach Stormwater Basin?"
        description="Get a free quote for your retention or detention basin construction in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, water quality performance standards, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to design and construct stormwater basins that meet regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

