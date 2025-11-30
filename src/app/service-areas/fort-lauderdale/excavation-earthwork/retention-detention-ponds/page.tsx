import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Ponds in Fort Lauderdale, FL | Broward County',
  description: 'Excavation and construction of retention and detention ponds for stormwater management in Broward County. SFWMD and county compliance.',
  openGraph: {
    title: 'Retention & Detention Ponds in Fort Lauderdale, FL | Broward County',
    description: 'Excavation and construction of retention and detention ponds for stormwater management in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/excavation-earthwork/retention-detention-ponds/`,
  },
}

export default function FortLauderdaleRetentionDetentionPondsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Retention and Detention Ponds in Fort Lauderdale, FL"
        subtitle="Excavation and construction of retention and detention ponds for stormwater management across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Retention and detention pond excavation and construction in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Retention and detention pond services in Broward County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone 
              developing properties that require stormwater management systems throughout Broward County, 
              including Fort Lauderdale, Weston, Plantation, Pembroke Pines, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Weston, commercial complex in Plantation, 
              or any property requiring stormwater management in Fort Lauderdale, retention and detention 
              ponds are often required by regulatory agencies. We coordinate licensed contractors with 
              heavy equipment to excavate and construct stormwater ponds that meet Broward County and 
              SFWMD Environmental Resource Permit requirements, including storm event protection (100-year, 
              3-day storm event for structures; 10-year, 3-day storm event for roadways and parking lots) 
              and Natural Resource Protection Code compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Retention and detention pond projects in Broward County typically range from 
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
          <h2 className={styles.heading}>What Retention and Detention Pond Construction Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Design Review</h3>
              <p className={styles.serviceDescription}>
                Review of engineering designs to understand pond dimensions, depths, and overflow 
                structures specific to Broward County&apos;s storm event protection requirements (100-year, 
                3-day storm event for structures; 10-year, 3-day storm event for roadways and parking lots) 
                and Natural Resource Protection Code compliance. Design review ensures excavation meets exact 
                requirements for stormwater management and regulatory compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Pond Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of retention and detention ponds to exact depths and dimensions specified in 
                engineering drawings, accounting for Broward County&apos;s high water table and coastal soil 
                conditions. Pond excavation creates proper storage volumes and depths for stormwater 
                management, with proper dewatering systems where required due to high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes for pond banks to ensure stability and prevent erosion, 
                meeting Broward County and Natural Resource Protection Code requirements. Slopes are 
                typically 3:1 or 4:1 ratios, with proper grading to meet engineering specifications and 
                regulatory requirements, especially important given Broward County&apos;s heavy rainfall and 
                hurricane conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of overflow structures including weirs, risers, and outfall pipes to 
                control water levels and discharge rates, meeting Broward County&apos;s stormwater 
                management requirements. Overflow structures ensure proper stormwater management and 
                prevent pond overflow, sized for storm event protection (100-year, 3-day storm event for 
                structures).
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                water, meeting Broward County&apos;s stormwater management requirements. Inlet and outlet 
                structures ensure proper water flow and treatment through retention and detention systems, 
                complying with storm event protection and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect pond banks from erosion, meeting Broward County Natural Resource Protection Code 
                requirements for environmental protection. Erosion control ensures long-term pond stability 
                and prevents sediment accumulation, especially important given Broward County&apos;s heavy 
                rainfall and hurricane conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Pond Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention pond construction in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Retention and detention ponds must be sized to handle 
                these design storms, with proper storage volumes and discharge rates.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for pond construction projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Pond construction projects 
                typically require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Pond construction typically requires 
                SFWMD Environmental Resource Permits for land disturbance and stormwater management. As of 
                June 28, 2024, new water quality performance standards were implemented. Permits ensure 
                compliance with water management district requirements and may require specific design 
                features. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Pond construction projects must comply with these requirements.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Broward County&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, affects pond excavation depth and may 
                require dewatering systems. SFWMD Environmental Resource Permits are required for dewatering 
                activities affecting state waters. The applicant must have all applicable SFWMD permits before 
                proceeding with dewatering operations. Water table conditions determine pond design and may 
                affect retention pond water levels.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Pond design must account for climate resilience and sea level rise 
                considerations, ensuring long-term functionality and compliance with regulatory requirements.
              </li>
              <li>
                <strong>Broward County Building Permits:</strong> Pond construction requires Uniform Building 
                Permit Applications (updated November 14, 2025) from Broward County Building Code Division 
                or municipal building departments. Permit applications can be submitted through ePermits 
                OneStop. Permits are valid for 180 days from the date of issuance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Retention and Detention Pond Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate retention and detention pond construction throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale Lakes</li>
                  <li>Oakland Park</li>
                  <li>Wilton Manors</li>
                  <li>Sunrise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Pond Construction Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention pond is constructed properly 
              and meets all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                pond dimensions, depths, and overflow structures specific to Broward County&apos;s storm 
                event protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day 
                storm event for roadways and parking lots) and Natural Resource Protection Code compliance. 
                Design review ensures excavation meets exact requirements for stormwater management and 
                regulatory compliance.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for pond construction projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits including 
                Uniform Building Permit Applications (updated November 14, 2025), Development & Environmental 
                Review (DER) through ePermits OneStop, SFWMD Environmental Resource Permits for land 
                disturbance and stormwater management, Natural Resource Protection Code compliance, and 
                coordinate with regulatory agencies. All DER submittals are only accepted electronically. 
                Permits are valid for 180 days from the date of issuance. Permits ensure compliance with 
                stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, bulldozers, compactors, dewatering systems) and 
                experience for pond excavation and construction in Broward County, including expertise 
                with high water table conditions, coastal soils, storm event protection, and regulatory 
                compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For pond excavations requiring dewatering, contractors 
                set up dewatering systems in compliance with SFWMD Environmental Resource Permit requirements 
                for activities affecting state waters, ensuring proper water quality management and discharge 
                compliance. The applicant must have all applicable SFWMD permits before proceeding with 
                dewatering operations. This is especially important given Broward County&apos;s high water table.
              </li>
              <li>
                <strong>Pond Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper storage volumes for storm event protection (100-year, 3-day 
                storm event for structures). Excavation establishes pond shape and prepares areas for overflow 
                structure installation, accounting for Broward County&apos;s high water table and coastal soil 
                conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Pond banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion, meeting Broward County and Natural 
                Resource Protection Code requirements. Slope construction meets engineering specifications and 
                regulatory requirements, especially important given Broward County&apos;s heavy rainfall and 
                hurricane conditions.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates, sized 
                for storm event protection (100-year, 3-day storm event for structures). Structures ensure 
                proper stormwater management and prevent pond overflow, meeting Natural Resource Protection 
                Code standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed meeting Broward County Natural Resource Protection Code requirements, and final 
                inspections ensure ponds meet regulatory requirements including storm event protection and 
                Natural Resource Protection Code standards. Ponds are ready for operation after final 
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
                  important stormwater management functions and must meet Broward County&apos;s storm event 
                  protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day storm 
                  event for roadways and parking lots) and Natural Resource Protection Code compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for pond construction in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from 
                  Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for land 
                  disturbance and stormwater management, Natural Resource Protection Code compliance, and 
                  FEMA compliance permits for properties in flood zones. All DER submittals are only 
                  accepted electronically. Permits are valid for 180 days from the date of issuance. We help 
                  identify and coordinate all required permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires that first floor elevations of all structures within drainage 
                  districts must protect structures from a 100-year, 3-day storm event, while roadway and 
                  parking lot elevations must be protected from a 10-year, 3-day storm event. Retention and 
                  detention ponds must be sized to handle these design storms, with proper storage volumes 
                  and discharge rates. These requirements ensure adequate flood protection and water quality 
                  treatment, accounting for climate resilience and sea level rise considerations (50-year 
                  planning horizon with projections of approximately 2 feet of sea level rise).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does pond construction cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction costs in Broward County vary based on pond size, depth, overflow 
                  structures, regulatory requirements, and dewatering needs. Typical residential 
                  developments range from $75,000 to $200,000, while large-scale commercial or 
                  subdivision projects can range from $200,000 to $500,000+ depending on scope. Factors 
                  affecting cost include excavation volume, overflow structure complexity, erosion control 
                  requirements, dewatering needs, and permit complexity. Projects requiring extensive 
                  dewatering or working in flood zones often cost more due to additional permit requirements 
                  (SFWMD Environmental Resource Permits) and specialized techniques. Broward County permit 
                  processing, including DER review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect pond construction?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, affects pond excavation depth and may require dewatering systems. SFWMD 
                  Environmental Resource Permits are required for dewatering activities affecting state 
                  waters. The applicant must have all applicable SFWMD permits before proceeding with 
                  dewatering operations. Water table conditions determine pond design and may affect retention 
                  pond water levels. This is especially important in areas like Fort Lauderdale, Hollywood, 
                  and coastal neighborhoods where the water table is particularly high. This adds complexity 
                  and cost to pond construction projects.
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
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/" className={styles.backLink}>
                ← Back to Fort Lauderdale Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Fort Lauderdale Stormwater Pond?"
        description="Get a free quote for your retention or detention pond construction in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, storm event protection requirements, SFWMD Environmental Resource Permits, Natural Resource Protection Code compliance, high water table dewatering, DER requirements, and regulatory compliance to excavate and construct stormwater ponds that meet all regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

