import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Basins in Fort Lauderdale, FL | Broward County',
  description: 'Design and construction of retention and detention basins in Broward County. Temporary stormwater storage to meet Natural Resource Protection Code and SFWMD requirements.',
  openGraph: {
    title: 'Retention & Detention Basins in Fort Lauderdale, FL | Broward County',
    description: 'Design and construction of retention and detention basins for stormwater management in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/retention-detention-basins/`,
  },
}

export default function FortLauderdaleRetentionDetentionBasinsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Retention and Detention Basins in Fort Lauderdale, FL"
        subtitle="Design and construction of retention and detention basins to temporarily store stormwater, reduce peak flow rates, and meet Natural Resource Protection Code and SFWMD stormwater management requirements across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Retention and detention basin construction in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Retention and detention basin services in Broward County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone 
              developing properties that require stormwater management systems throughout Broward County, 
              including Fort Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Plantation, commercial complex in Fort 
              Lauderdale, or any property requiring stormwater management in Hollywood, retention and 
              detention basins are often required by regulatory agencies. We coordinate contractors with 
              heavy equipment to design and construct basins that meet Broward County drainage requirements, 
              Development & Environmental Review (DER), Natural Resource Protection Code compliance, storm 
              event protection requirements, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Retention and detention basin projects in Broward County typically range from 
                <strong> $75,000 to $200,000</strong> for smaller residential developments, and 
                <strong> $200,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on basin size, depth, overflow structures, storm event protection 
                requirements, water quality performance standards, and SFWMD Environmental Resource 
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
          <h2 className={styles.heading}>What Retention and Detention Basin Construction Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Design</h3>
              <p className={styles.serviceDescription}>
                Design of retention and detention basins based on Broward County drainage 
                requirements, storm event protection requirements (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots), flow rates, and 
                regulatory standards including Natural Resource Protection Code compliance. Design 
                determines basin dimensions, depths, storage volumes, and overflow structures to meet 
                SFWMD Environmental Resource Permit requirements, integrating with Broward County&apos;s 
                three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Basin Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of retention and detention basins to exact depths and dimensions specified 
                in engineering drawings, with proper dewatering systems where required due to 
                Broward County&apos;s high water table. Basin excavation creates proper storage volumes and 
                depths for stormwater management, meeting county requirements and storm event protection 
                standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes for basin banks to ensure stability and prevent erosion, 
                meeting Broward County Natural Resource Protection Code requirements. Slopes are typically 
                3:1 or 4:1 ratios, with proper grading to meet engineering specifications and regulatory 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of overflow structures including weirs, risers, and outfall pipes to 
                control water levels and discharge rates, sized for storm event protection (100-year, 
                3-day storm event for structures; 10-year, 3-day storm event for roadways and parking 
                lots) and meeting Natural Resource Protection Code compliance. Overflow structures ensure 
                proper stormwater management and prevent basin overflow, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                water, meeting Broward County&apos;s water quality performance standards (80% TP reduction, 
                45% TN reduction as of June 28, 2024). Inlet and outlet structures ensure proper water 
                flow and treatment through retention and detention systems, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect basin banks from erosion, meeting Broward County Natural Resource Protection Code 
                requirements. Erosion control ensures long-term basin stability and prevents sediment 
                accumulation, especially important for basins designed for water quality treatment and 
                storm event protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Basin Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention basin construction in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for retention and detention basin construction 
                projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Retention and detention basin 
                construction typically requires Development & Environmental Review through ePermits 
                OneStop for applicable building permits. All DER submittals are only accepted 
                electronically. Broward County&apos;s Planning and Development Management Division ensures 
                that proposed developments comply with the Broward County Land Development Code and 
                Natural Resource Protection Code.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Retention and detention basins must be sized to handle 
                these design storms, with proper storage volumes and discharge rates to ensure adequate 
                flood protection and water quality treatment.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Basin construction projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Basin construction typically 
                requires SFWMD Environmental Resource Permits for land disturbance and stormwater 
                management. As of June 28, 2024, new water quality performance standards were 
                implemented, requiring stormwater treatment systems to achieve significant pollution 
                reductions—including an 80 percent reduction of post-development average annual total 
                phosphorus (TP) loading and 45 percent reduction of total nitrogen (TN) loading from 
                project areas. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Three-Tier Infrastructure Framework:</strong> Broward County&apos;s stormwater 
                management system operates through a three-tier infrastructure framework: Tertiary System 
                (individual community infrastructure including drainage inlets, pipes, swales, lakes, and 
                retention areas), Secondary System (South Broward Drainage District or Central Broward 
                Water Control District infrastructure including canals, culverts, and flood control 
                gates), and Primary System (SFWMD-operated canals that receive all permitted stormwater 
                runoff). Basins must integrate with this framework.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects basin excavation depth and may 
                require dewatering systems (SFWMD Environmental Resource Permits). Water table conditions 
                determine basin design and may affect retention basin water levels, especially in areas 
                like Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Basin design must account for climate resilience and sea level rise 
                considerations, ensuring long-term functionality and compliance with regulatory 
                requirements.
              </li>
              <li>
                <strong>Drainage District Requirements:</strong> For projects in areas governed by drainage 
                districts (Central Broward Water Control District for areas east of Volunteer Road or 
                South Broward Drainage District for areas west), Paving & Drainage (P&D) Permits are 
                required. Basin design must comply with drainage district requirements and storm event 
                protection standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Basin Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate retention and detention basin construction throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
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
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Hollywood Beach</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Basin Construction Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention basin is constructed 
              properly and meets all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design:</strong> We coordinate with engineers to design retention 
                and detention basins that meet Broward County drainage requirements, storm event 
                protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day 
                storm event for roadways and parking lots), and regulatory standards including Natural 
                Resource Protection Code compliance. Design determines basin dimensions, depths, storage 
                volumes, and overflow structures, with consideration of water quality performance 
                standards (80% TP reduction, 45% TN reduction) and integration with Broward County&apos;s 
                three-tier infrastructure framework.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for retention and detention basin construction projects in 
                Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management, Natural Resource Protection Code 
                compliance, drainage district approvals (CBWCD or SBDD) where applicable, and coordinate 
                with regulatory agencies. All DER submittals are only accepted electronically. Permits 
                are valid for 180 days from the date of issuance. Permits ensure compliance with 
                stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                basin excavation and construction in Broward County, including expertise with high 
                water table conditions, Natural Resource Protection Code compliance, SFWMD Environmental 
                Resource Permit requirements, and storm event protection.
              </li>
              <li>
                <strong>Basin Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper storage volumes, with proper dewatering systems where 
                required due to Broward County&apos;s high water table (SFWMD Environmental Resource Permits). 
                Excavation establishes basin shape and prepares areas for overflow structure 
                installation, meeting county requirements and storm event protection standards.
              </li>
              <li>
                <strong>Slope Construction:</strong> Basin banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion, meeting Broward County Natural 
                Resource Protection Code requirements. Slope construction meets engineering 
                specifications and regulatory requirements.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates, 
                sized for storm event protection (100-year, 3-day storm event for structures; 10-year, 
                3-day storm event for roadways and parking lots) and meeting Natural Resource Protection 
                Code compliance. Structures ensure proper stormwater management and prevent basin 
                overflow, integrating with Broward County&apos;s three-tier infrastructure framework.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections with SFWMD, Broward County Building Code Division or 
                municipal building departments, and drainage districts where applicable ensure basins 
                meet regulatory requirements including storm event protection and Natural Resource 
                Protection Code standards. Basins are ready for operation after final approval, with 
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
                <h3 className={styles.faqQuestion}>What permits are required for basin construction in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction in Broward County requires development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Uniform Building Permit 
                  Applications from Broward County Building Code Division, Development & Environmental 
                  Review (DER) through ePermits OneStop for applicable projects, SFWMD Environmental 
                  Resource Permits for land disturbance and stormwater management, Natural Resource 
                  Protection Code compliance, and drainage district approvals (CBWCD or SBDD) where 
                  applicable. All DER submittals are only accepted electronically. Permits are valid for 
                  180 days from the date of issuance. SFWMD Environmental Resource Permits may be 
                  required for dewatering operations. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the water quality performance standards for basins in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  As of June 28, 2024, new water quality performance standards were implemented for 
                  SFWMD Environmental Resource Permits, requiring stormwater treatment systems to achieve 
                  significant pollution reductions—including an 80 percent reduction of post-development 
                  average annual total phosphorus (TP) loading and 45 percent reduction of total nitrogen 
                  (TN) loading from project areas. Basins must be designed to meet these requirements, 
                  integrating with Broward County&apos;s three-tier infrastructure framework and ensuring 
                  proper water quality treatment.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between retention and detention basins in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Retention basins maintain a permanent pool of water and provide both water quality 
                  treatment and flood control, integrating with Broward County&apos;s three-tier 
                  infrastructure framework. Detention basins temporarily store stormwater and release it 
                  slowly, typically dry between storm events. Retention basins are typically deeper with 
                  permanent water, while detention basins are designed to fill during storms and drain 
                  between events. Both must meet storm event protection requirements (100-year, 3-day 
                  storm event for structures; 10-year, 3-day storm event for roadways and parking lots) 
                  and Natural Resource Protection Code compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do basins integrate with Broward County&apos;s three-tier infrastructure framework?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s stormwater management system operates through a three-tier 
                  infrastructure framework: Tertiary System (individual community infrastructure including 
                  drainage inlets, pipes, swales, lakes, and retention areas maintained by Homeowners 
                  Associations or local municipalities), Secondary System (South Broward Drainage 
                  District or Central Broward Water Control District infrastructure including canals, 
                  culverts, and flood control gates that convey stormwater from tertiary systems), and 
                  Primary System (SFWMD-operated canals that receive all permitted stormwater runoff and 
                  serve as the final conveyance system). Retention and detention basins are part of the 
                  Tertiary System and must be designed to connect properly to Secondary System 
                  infrastructure, ensuring effective stormwater management and compliance with storm event 
                  protection requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does basin construction cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction costs in Broward County vary based on basin size, depth, overflow 
                  structures, storm event protection requirements, water quality performance standards, and 
                  SFWMD Environmental Resource Permit requirements. Typical residential developments range 
                  from $75,000 to $200,000, while large-scale commercial or subdivision projects can 
                  range from $200,000 to $500,000+ depending on scope. Factors affecting cost include 
                  excavation volume, dewatering requirements, overflow structure complexity, erosion 
                  control requirements, and permit complexity. Projects requiring extensive dewatering, 
                  working in flood zones, or meeting stringent water quality performance standards often 
                  cost more due to additional permit requirements (SFWMD Environmental Resource Permits) 
                  and specialized design. Broward County permit processing, including DER review through 
                  ePermits OneStop, can add time and costs.
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
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Fort Lauderdale Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Fort Lauderdale Stormwater Basin?"
        description="Get a free quote for your retention or detention basin construction in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, storm event protection requirements, SFWMD Environmental Resource Permits, water quality performance standards, DER requirements, three-tier infrastructure framework integration, and regulatory compliance to design and construct stormwater basins that meet regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

