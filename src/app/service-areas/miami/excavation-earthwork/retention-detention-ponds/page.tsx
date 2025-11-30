import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Ponds in Miami, FL | Miami-Dade County',
  description: 'Excavation and construction of retention and detention ponds for stormwater management in Miami-Dade County. SFWMD and county compliance.',
  openGraph: {
    title: 'Retention & Detention Ponds in Miami, FL | Miami-Dade County',
    description: 'Excavation and construction of retention and detention ponds for stormwater management in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/excavation-earthwork/retention-detention-ponds/`,
  },
}

export default function MiamiRetentionDetentionPondsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Retention and Detention Ponds in Miami, FL"
        subtitle="Excavation and construction of retention and detention ponds for stormwater management across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Retention and detention pond excavation and construction in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Retention and detention pond services in Miami-Dade County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone 
              developing properties that require stormwater management systems in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Doral, commercial complex in Aventura, 
              or any property requiring stormwater management in Coral Gables, retention and detention 
              ponds are often required by regulatory agencies. We coordinate licensed contractors with 
              heavy equipment to excavate and construct stormwater ponds that meet Miami-Dade County 
              and SFWMD regulatory requirements, including the 25-year, 3-day storm event design criteria 
              and Flood Protection Level of Service (FPLOS) standards.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Retention and detention pond projects in Miami-Dade County typically range from 
                <strong> $75,000 to $200,000</strong> for smaller residential developments, and 
                <strong> $200,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on pond size, depth, overflow structures, regulatory requirements, 
                and dewatering needs. Projects requiring extensive dewatering or working in flood zones 
                often cost more due to additional permit requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Retention and Detention Pond Construction Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Design Review</h3>
              <p className={styles.serviceDescription}>
                Review of engineering designs to understand pond dimensions, depths, and overflow 
                structures specific to Miami-Dade County&apos;s 25-year, 3-day storm event design criteria 
                and Flood Protection Level of Service (FPLOS) and Water Quality Level of Service (WQLOS) 
                requirements. Design review ensures excavation meets exact requirements for stormwater 
                management and regulatory compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Pond Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of retention and detention ponds to exact depths and dimensions specified in 
                engineering drawings, accounting for Miami-Dade&apos;s high water table and coastal soil 
                conditions. Pond excavation creates proper storage volumes and depths for stormwater 
                management, with proper dewatering systems where required due to high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes for pond banks to ensure stability and prevent erosion, 
                meeting Miami-Dade County and DERM requirements. Slopes are typically 3:1 or 4:1 ratios, 
                with proper grading to meet engineering specifications and regulatory requirements, 
                especially important given Miami-Dade&apos;s heavy rainfall and hurricane conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of overflow structures including weirs, risers, and outfall pipes to 
                control water levels and discharge rates, meeting Miami-Dade County&apos;s stormwater 
                management requirements. Overflow structures ensure proper stormwater management and 
                prevent pond overflow, sized for the 25-year, 3-day storm event.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                water, meeting Miami-Dade County&apos;s on-site stormwater retention requirements. Inlet 
                and outlet structures ensure proper water flow and treatment through retention and 
                detention systems, complying with FPLOS and WQLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect pond banks from erosion, meeting Miami-Dade DERM requirements for environmental 
                protection. Erosion control ensures long-term pond stability and prevents sediment 
                accumulation, especially important given Miami-Dade&apos;s heavy rainfall and hurricane 
                conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Pond Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention pond construction in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>25-Year, 3-Day Storm Event Design Criteria:</strong> Miami-Dade County requires 
                that developers design stormwater systems for the 25-year, 3-day storm event, representing 
                the minimum design standard for stormwater management infrastructure. Retention and detention 
                ponds must be sized to handle this design storm, with proper storage volumes and discharge 
                rates. This requirement was implemented as part of the revised ordinance effective March 31, 
                2025.
              </li>
              <li>
                <strong>Flood Protection Level of Service (FPLOS) and Water Quality Level of Service (WQLOS):</strong> 
                Miami-Dade County has established FPLOS and WQLOS components within its stormwater management 
                standards. Ponds must meet both flood protection and water quality requirements, ensuring 
                proper stormwater treatment and flood control. Design must account for both components to 
                achieve compliance.
              </li>
              <li>
                <strong>On-Site Stormwater Retention:</strong> Miami-Dade County requires that all private 
                and public sites handle their own drainage and retain their own stormwater on-site. This 
                means retention and detention ponds must be designed to manage stormwater from the 
                development site, preventing runoff onto neighboring properties and meeting on-site 
                retention requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Pond construction typically requires 
                SFWMD environmental resource permits for land disturbance and stormwater management. Permits 
                ensure compliance with water management district requirements and may require specific design 
                features. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>DERM Permits and Environmental Protection:</strong> Projects requiring Miami-Dade 
                Review under Chapter 24 must obtain DERM Plan Review Approval. DERM Class V Permits may 
                be required for dewatering during excavation. DERM also requires proper erosion control and 
                environmental protection measures, especially for ponds near waterways or in coastal areas.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Miami-Dade&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, affects pond excavation depth and may 
                require dewatering systems. Water table conditions determine pond design and may affect 
                retention pond water levels. DERM Class V Permits are required for temporary dewatering 
                to ensure that sediment, turbidity, and contaminants are removed before discharge.
              </li>
              <li>
                <strong>Stormwater System Recertification:</strong> Miami-Dade County requires existing 
                stormwater systems to undergo recertification within the first three years following 
                implementation of the revised ordinance (by March 31, 2028 for systems existing as of 
                March 31, 2025). This ensures ongoing compliance with stormwater management standards.
              </li>
              <li>
                <strong>Impervious Surface Regulations:</strong> Homeowners and developers must obtain 
                permits for paving and impervious surfaces to ensure that projects use materials allowing 
                proper stormwater drainage within the property and prevent runoff onto neighboring 
                properties. Pond design must account for impervious surface area in the watershed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Retention and Detention Pond Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate retention and detention pond construction throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Cutler Bay</li>
                  <li>Palmetto Bay</li>
                  <li>Pinecrest</li>
                  <li>South Miami</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Westchester</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Coral Gables</li>
                  <li>Aventura</li>
                  <li>Coconut Grove</li>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Hialeah</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Miami Lakes</li>
                  <li>Sweetwater</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Pond Construction Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention pond is constructed properly 
              and meets all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                pond dimensions, depths, and overflow structures specific to Miami-Dade County&apos;s 
                25-year, 3-day storm event design criteria and FPLOS/WQLOS requirements. Design review 
                ensures excavation meets exact requirements for stormwater management and regulatory 
                compliance.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits including 
                SFWMD environmental resource permits for land disturbance and stormwater management, DERM 
                Plan Review Approval (for projects requiring Miami-Dade Review under Chapter 24), DERM 
                Class V Permits for dewatering if required, RER building permits, and coordinate with 
                regulatory agencies. Permits ensure compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, bulldozers, compactors, dewatering systems) and 
                experience for pond excavation and construction in Miami-Dade County, including expertise 
                with high water table conditions, coastal soils, and regulatory compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For pond excavations requiring dewatering, contractors 
                set up dewatering systems in compliance with DERM Class V Permit requirements, ensuring 
                sediment, turbidity, and contaminants are removed before discharge. This is especially 
                important given Miami-Dade&apos;s high water table.
              </li>
              <li>
                <strong>Pond Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper storage volumes for the 25-year, 3-day storm event. 
                Excavation establishes pond shape and prepares areas for overflow structure installation, 
                accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Pond banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion, meeting Miami-Dade County and DERM 
                requirements. Slope construction meets engineering specifications and regulatory 
                requirements, especially important given Miami-Dade&apos;s heavy rainfall and hurricane 
                conditions.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates, 
                sized for the 25-year, 3-day storm event. Structures ensure proper stormwater management 
                and prevent pond overflow, meeting FPLOS and WQLOS standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed meeting Miami-Dade DERM requirements, and final inspections ensure ponds meet 
                regulatory requirements including FPLOS and WQLOS standards. Ponds are ready for 
                operation after final approval, with recertification required within three years.
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
                  important stormwater management functions and must meet Miami-Dade County&apos;s 25-year, 
                  3-day storm event design criteria and FPLOS/WQLOS requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for pond construction in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction in Miami-Dade County requires SFWMD environmental resource permits 
                  for land disturbance and stormwater management. Projects requiring Miami-Dade Review 
                  under Chapter 24 must obtain DERM Plan Review Approval. DERM Class V Permits are 
                  required for dewatering if excavations encounter water. RER building permits may also 
                  be required. We help identify and coordinate all required permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the 25-year, 3-day storm event requirement in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County requires that developers design stormwater systems for the 25-year, 
                  3-day storm event, representing the minimum design standard for stormwater management 
                  infrastructure. Retention and detention ponds must be sized to handle this design storm, 
                  with proper storage volumes and discharge rates. This requirement was implemented as 
                  part of the revised ordinance effective March 31, 2025, and ensures adequate flood 
                  protection and water quality treatment.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does pond construction cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction costs in Miami-Dade County vary based on pond size, depth, overflow 
                  structures, regulatory requirements, and dewatering needs. Typical residential 
                  developments range from $75,000 to $200,000, while large-scale commercial or 
                  subdivision projects can range from $200,000 to $500,000+ depending on scope. Factors 
                  affecting cost include excavation volume, overflow structure complexity, erosion control 
                  requirements, dewatering needs, and permit complexity. Projects requiring extensive 
                  dewatering or working in flood zones often cost more due to additional permit 
                  requirements and specialized techniques.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect pond construction?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, affects pond excavation depth and may require dewatering systems. Water table 
                  conditions determine pond design and may affect retention pond water levels. DERM Class 
                  V Permits are required for temporary dewatering to ensure that sediment, turbidity, and 
                  contaminants are removed before discharge. This is especially important in areas like 
                  Miami Beach, Aventura, and coastal neighborhoods where the water table is particularly 
                  high. This adds complexity and cost to pond construction projects.
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
              <a href="/service-areas/miami/excavation-earthwork/" className={styles.backLink}>
                ← Back to Miami Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Miami Stormwater Pond?"
        description="Get a free quote for your retention or detention pond construction in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, 25-year storm event design criteria, FPLOS/WQLOS requirements, high water table dewatering, and regulatory compliance to excavate and construct stormwater ponds that meet all regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

