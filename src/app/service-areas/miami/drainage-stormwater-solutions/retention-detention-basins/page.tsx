import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Basins in Miami, FL | Miami-Dade County',
  description: 'Design and construction of retention and detention basins in Miami-Dade County. Temporary stormwater storage to meet DERM and SFWMD requirements.',
  openGraph: {
    title: 'Retention & Detention Basins in Miami, FL | Miami-Dade County',
    description: 'Design and construction of retention and detention basins for stormwater management in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/retention-detention-basins/`,
  },
}

export default function MiamiRetentionDetentionBasinsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Retention and Detention Basins in Miami, FL"
        subtitle="Design and construction of retention and detention basins to temporarily store stormwater, reduce peak flow rates, and meet DERM and SFWMD stormwater management requirements across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Retention and detention basin construction in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Retention and detention basin services in Miami-Dade County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone 
              developing properties that require stormwater management systems in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Doral, commercial complex in Aventura, 
              or any property requiring stormwater management in Coral Gables, retention and detention 
              basins are often required by regulatory agencies. We coordinate contractors with heavy 
              equipment to design and construct basins that meet Miami-Dade County drainage requirements, 
              DERM regulations, the 25-year, 3-day storm event design criteria, FPLOS/WQLOS standards, 
              and pollutant reduction requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Retention and detention basin projects in Miami-Dade County typically range from 
                <strong> $75,000 to $200,000</strong> for smaller residential developments, and 
                <strong> $200,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on basin size, depth, overflow structures, FPLOS/WQLOS compliance 
                needs, pollutant reduction requirements, and DERM permit requirements. Projects 
                requiring extensive dewatering, working in flood zones, or meeting stringent pollutant 
                reduction requirements often cost more due to additional permit requirements and 
                specialized design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Retention and Detention Basin Construction Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Design</h3>
              <p className={styles.serviceDescription}>
                Design of retention and detention basins based on Miami-Dade County drainage 
                requirements, the 25-year, 3-day storm event design criteria, flow rates, and 
                regulatory standards including FPLOS and WQLOS. Design determines basin dimensions, 
                depths, storage volumes, and overflow structures to meet DERM and SFWMD requirements, 
                with priority on on-site retention and groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Basin Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of retention and detention basins to exact depths and dimensions specified 
                in engineering drawings, with proper dewatering systems where required due to 
                Miami-Dade&apos;s high water table. Basin excavation creates proper storage volumes and 
                depths for stormwater management, meeting county requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes for basin banks to ensure stability and prevent erosion, 
                meeting Miami-Dade County requirements. Slopes are typically 3:1 or 4:1 ratios, with 
                proper grading to meet engineering specifications and regulatory requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of overflow structures including weirs, risers, and outfall pipes to 
                control water levels and discharge rates, sized for the 25-year, 3-day storm event and 
                meeting FPLOS/WQLOS standards. Overflow structures ensure proper stormwater management 
                and prevent basin overflow, with priority on on-site retention and groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                water, meeting Miami-Dade County&apos;s pollutant reduction requirements (80% TP, 45% TN, 
                or 90% TP, 60% TN for Outstanding Florida Water areas). Inlet and outlet structures 
                ensure proper water flow and treatment through retention and detention systems.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect basin banks from erosion, meeting Miami-Dade County requirements. Erosion 
                control ensures long-term basin stability and prevents sediment accumulation, especially 
                important for basins designed for water quality treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Basin Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention basin construction in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Department of Environmental 
                Resources Management) plays a central role in Miami-Dade County&apos;s stormwater 
                infrastructure oversight. Retention and detention basin construction requires DERM Plan 
                Review Approval for projects requiring Miami-Dade Review under Chapter 24. DERM has 
                authority over stormwater infrastructure maintenance and recertification, with entities 
                owning or operating stormwater infrastructure required to submit recertification 
                documentation by December 31, 2026.
              </li>
              <li>
                <strong>25-Year, 3-Day Storm Event Design Criteria:</strong> Miami-Dade County requires 
                developers to design stormwater systems for the 25-year, 3-day storm event as a baseline 
                design standard. Retention and detention basins must be sized to handle this design storm, 
                with proper storage volumes and discharge rates to meet both Flood Protection Level of 
                Service (FPLOS) and Water Quality Level of Service (WQLOS) standards.
              </li>
              <li>
                <strong>FPLOS and WQLOS Standards:</strong> Miami-Dade County&apos;s stormwater management 
                criteria include two primary components: Flood Protection Level of Service (FPLOS) and 
                Water Quality Level of Service (WQLOS). FPLOS protects public safety and property, while 
                WQLOS maintains water quality in local waterways, particularly Biscayne Bay. Basins must 
                be designed to meet both components.
              </li>
              <li>
                <strong>Pollutant Reduction Requirements:</strong> Florida&apos;s stormwater design 
                standards establish specific pollutant reduction requirements. For most stormwater systems, 
                an 80 percent reduction of post-development average annual loading of total phosphorus (TP) 
                and a 45 percent reduction of post-development average annual loading of total nitrogen 
                (TN) from the project area is required. For stormwater systems located within a HUC 12 
                sub-watershed containing an Outstanding Florida Water (OFW) and located upstream of that 
                OFW, the requirements are more stringent: a 90 percent reduction of TP and a 60 percent 
                reduction of TN.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach emphasizes on-site retention with groundwater recharge, rather than detention 
                and controlled discharge. Retention and detention basins should be designed to encourage 
                water infiltration into the aquifer rather than rapid removal from the site, supporting 
                aquifer recharge and reducing stress on the county&apos;s stormwater infrastructure.
              </li>
              <li>
                <strong>Stormwater System Recertification Requirements:</strong> Any entity—including 
                community development districts or private property owners&apos; associations—that owns 
                or operates stormwater infrastructure connecting to or draining into public right-of-way 
                drainage infrastructure must maintain certain records and obtain recertification from the 
                DERM Director. By December 31, 2026, such entities must submit to the County 
                documentation demonstrating compliance with these requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects basin excavation depth and may 
                require dewatering systems (DERM Class V Permits). Water table conditions determine basin 
                design and may affect retention basin water levels, especially in areas like Miami Beach, 
                Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Basin construction typically 
                requires SFWMD environmental resource permits for land disturbance and stormwater 
                management. Most complete ERP applications take 60-90 days to process, though projects 
                located in sensitive basins may require longer review periods. We coordinate all required 
                SFWMD permits.
              </li>
              <li>
                <strong>Training and Inspection Requirements:</strong> As of 2025, training requirements 
                for stormwater management personnel include field inspections of both publicly and 
                privately owned stormwater structural controls, such as stormwater retention and 
                detention ponds. Basin owners must ensure proper maintenance and inspection compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Basin Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate retention and detention basin construction throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
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
                  <li>Pinecrest</li>
                  <li>Coconut Grove</li>
                  <li>Palmetto Bay</li>
                  <li>South Miami</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Hialeah</li>
                  <li>Miami Lakes</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Aventura</li>
                  <li>Surfside</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Basin Construction Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention basin is constructed 
              properly and meets all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design:</strong> We coordinate with engineers to design retention 
                and detention basins that meet Miami-Dade County drainage requirements, the 25-year, 
                3-day storm event design criteria, and regulatory standards including FPLOS and WQLOS. 
                Design determines basin dimensions, depths, storage volumes, and overflow structures, 
                with consideration of pollutant reduction requirements (80% TP, 45% TN, or 90% TP, 
                60% TN for OFW areas) and priority on on-site retention and groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), SFWMD environmental resource permits for land disturbance and stormwater 
                management (60-90 day processing time), RER building permits, and coordinate with 
                regulatory agencies. Permits ensure compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                basin excavation and construction in Miami-Dade County, including expertise with high 
                water table conditions, DERM requirements, and FPLOS/WQLOS standards.
              </li>
              <li>
                <strong>Basin Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper storage volumes, with proper dewatering systems where 
                required due to Miami-Dade&apos;s high water table (DERM Class V Permits). Excavation 
                establishes basin shape and prepares areas for overflow structure installation, meeting 
                county requirements.
              </li>
              <li>
                <strong>Slope Construction:</strong> Basin banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion, meeting Miami-Dade County 
                requirements. Slope construction meets engineering specifications and regulatory 
                requirements.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates, 
                sized for the 25-year, 3-day storm event and meeting FPLOS/WQLOS standards. Structures 
                ensure proper stormwater management and prevent basin overflow, with priority on 
                on-site retention and groundwater recharge.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections with DERM, SFWMD, and Miami-Dade RER or municipal 
                building departments ensure basins meet regulatory requirements including FPLOS and 
                WQLOS standards. Basins are ready for operation after final approval, with ongoing 
                recertification requirements by December 31, 2026.
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
                <h3 className={styles.faqQuestion}>What permits are required for basin construction in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction in Miami-Dade County requires DERM Plan Review Approval for 
                  projects requiring Miami-Dade Review under Chapter 24. SFWMD environmental resource 
                  permits are required for land disturbance and stormwater management (most complete ERP 
                  applications take 60-90 days to process, though projects located in sensitive basins 
                  may require longer review periods). RER building permits may be required for significant 
                  infrastructure installation. DERM Class V Permits may be required for dewatering 
                  operations. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the pollutant reduction requirements for basins in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Florida&apos;s stormwater design standards establish specific pollutant reduction 
                  requirements. For most stormwater systems, an 80 percent reduction of post-development 
                  average annual loading of total phosphorus (TP) and a 45 percent reduction of 
                  post-development average annual loading of total nitrogen (TN) from the project area 
                  is required. For stormwater systems located within a HUC 12 sub-watershed containing 
                  an Outstanding Florida Water (OFW) and located upstream of that OFW, the requirements 
                  are more stringent: a 90 percent reduction of TP and a 60 percent reduction of TN. 
                  Basins must be designed to meet these requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between retention and detention basins in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Retention basins maintain a permanent pool of water and provide both water quality 
                  treatment and flood control, with priority on on-site retention and groundwater 
                  recharge as required by Miami-Dade County. Detention basins temporarily store 
                  stormwater and release it slowly, typically dry between storm events. Retention basins 
                  are typically deeper with permanent water, while detention basins are designed to 
                  fill during storms and drain between events. Both must meet the 25-year, 3-day storm 
                  event design criteria and FPLOS/WQLOS standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the stormwater system recertification requirements in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Any entity—including community development districts or private property owners&apos; 
                  associations—that owns or operates stormwater infrastructure connecting to or draining 
                  into public right-of-way drainage infrastructure must maintain certain records and 
                  obtain recertification from the DERM Director. By December 31, 2026, such entities 
                  must submit to the County documentation demonstrating compliance with these 
                  requirements. This includes proper maintenance, inspection, and operation of retention 
                  and detention basins.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does basin construction cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction costs in Miami-Dade County vary based on basin size, depth, overflow 
                  structures, FPLOS/WQLOS compliance needs, pollutant reduction requirements, and DERM 
                  permit requirements. Typical residential developments range from $75,000 to $200,000, 
                  while large-scale commercial or subdivision projects can range from $200,000 to 
                  $500,000+ depending on scope. Factors affecting cost include excavation volume, 
                  dewatering requirements, overflow structure complexity, erosion control requirements, 
                  and permit complexity. Projects requiring extensive dewatering, working in flood 
                  zones, or meeting stringent pollutant reduction requirements often cost more due to 
                  additional permit requirements and specialized design.
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
              <a href="/service-areas/miami/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Miami Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Miami Stormwater Basin?"
        description="Get a free quote for your retention or detention basin construction in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, 25-year storm event design criteria, FPLOS/WQLOS standards, pollutant reduction requirements, and regulatory compliance to design and construct stormwater basins that meet regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

