import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Road & Access Drive Grading in Fort Lauderdale, FL | Broward County',
  description: 'Professional road and access drive grading services in Broward County. Proper crown, cross-slopes, and drainage features for subdivision infrastructure.',
  openGraph: {
    title: 'Road & Access Drive Grading in Fort Lauderdale, FL | Broward County',
    description: 'Professional road and access drive grading services in Broward County with proper drainage and infrastructure preparation.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/road-access-drive-grading/`,
  },
}

export default function FortLauderdaleRoadAccessDriveGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Road and Access Drive Grading in Fort Lauderdale, FL"
        subtitle="Professional grading for roads, access drives, and subdivision infrastructure across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Road and access drive grading services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Road and access drive grading services in Broward County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone preparing 
              roadways for paving or infrastructure installation throughout Broward County, including 
              Weston, Plantation, Pembroke Pines, Coral Springs, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Weston, building access roads for a 
              commercial development in Plantation, or upgrading existing roadways in Pembroke Pines, proper 
              grading ensures water drains correctly, provides safe vehicle access, and meets engineering 
              specifications. We coordinate licensed contractors with the right equipment and expertise 
              for your specific Broward County project needs, including compliance with Broward County 
              Building Code Division, Development & Environmental Review (DER), and 10-year, 3-day storm 
              event protection requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Road and access drive grading projects in Broward County typically range from 
                <strong> $30,000 to $100,000</strong> for single access drives, and 
                <strong> $100,000 to $500,000+</strong> for subdivision road networks depending on length, 
                width, drainage requirements, flood zone considerations, and site conditions. Projects in 
                flood zones or requiring significant elevation adjustments often cost more. Projects involving 
                development work as described in Florida Statute 380.04 require a development permit prior 
                to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Road and Access Drive Grading Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Crown Grading</h3>
              <p className={styles.serviceDescription}>
                Creating proper crown (center high point) in roadways to direct water to the sides and 
                into drainage systems throughout Broward County. Crown grading prevents water from pooling 
                in the center of roads and ensures proper drainage flow, essential given Broward County&apos;s 
                heavy rainfall and flat topography. Minimum roadway crown elevation must be protected from 
                a 10-year, 3-day storm event. Typical crown height is 2-4 inches above the edges.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cross-Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Establishing proper cross-slopes (typically 2-3%) across road width to direct water to 
                roadside drainage throughout Broward County. Cross-slopes must be consistent along the 
                entire road length for effective water management, meeting Broward County building code 
                requirements and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Longitudinal Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Grading along the road length to achieve proper longitudinal slopes (typically 0.5-6% 
                minimum) for drainage while maintaining safe vehicle access throughout Broward County. 
                Slopes must balance drainage needs with vehicle safety requirements, meeting Broward County 
                road construction standards and 10-year, 3-day storm event protection requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subgrade Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and compaction of subgrade material to proper elevations and density for base 
                course and pavement installation throughout Broward County. Subgrade must be properly graded 
                to support road loads and prevent settlement, accounting for Broward County&apos;s high water 
                table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Feature Grading</h3>
              <p className={styles.serviceDescription}>
                Grading around catch basins, swales, and drainage inlets to ensure proper water flow into 
                drainage systems throughout Broward County. Road grading must work in conjunction with 
                drainage infrastructure for effective water management, meeting SFWMD Environmental Resource 
                Permit requirements and Broward County Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Transition Grading</h3>
              <p className={styles.serviceDescription}>
                Smooth transitions between different road sections, intersections, and connections to 
                existing roadways throughout Broward County. Transition grading ensures smooth vehicle access 
                and proper drainage flow at connection points, meeting Broward County building code requirements 
                and Natural Resource Protection Code standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Road Grading Considerations</h2>
            <p className={styles.text}>
              Grading for roads and access drives in Broward County requires specialized knowledge of 
              local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Storm Event Protection:</strong> Broward County requires minimum roadway crown 
                elevation to be protected from a 10-year, 3-day storm event. These criteria represent 
                minimum standards and may be increased by the Engineer of Record as applicable. Road grading 
                must ensure proper drainage and storm event protection.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Road grading typically requires 
                Development & Environmental Review through ePermits OneStop for applicable building permits. 
                All DER submittals are only accepted electronically. Broward County&apos;s Planning and 
                Development Management Division ensures that proposed developments comply with the Broward 
                County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for road and access drive grading projects in Broward 
                County.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Road grading must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Roads must be graded to direct water 
                to stormwater inlets, swales, or retention areas to meet SFWMD Environmental Resource Permit 
                requirements and Broward County Natural Resource Protection Code standards. As of June 28, 
                2024, new water quality performance standards were implemented. Proper grading prevents flooding 
                and reduces stormwater runoff into roadways.
              </li>
              <li>
                <strong>Required Infrastructure:</strong> Road grading must coordinate with required 
                infrastructure including curbs, gutters, drainage structures, and associated drainage 
                systems according to Broward County standards. Sidewalks may be required in residential, 
                multiple-family, and business areas. Street name signs must be placed at all intersections 
                as required by Broward County standards.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table affects subgrade 
                preparation and may require additional base course material or elevation adjustments. Proper 
                drainage is critical to prevent water from undermining road foundations, especially in areas 
                like Fort Lauderdale, Hollywood, and coastal neighborhoods. SFWMD Environmental Resource 
                Permits are required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Roads in flood zones may need to be graded to 
                specific elevations above base flood elevation. This affects grading depth and may require 
                additional fill material or elevation adjustments, particularly in coastal areas like Fort 
                Lauderdale, Hollywood, and Pompano Beach.
              </li>
              <li>
                <strong>Guardrails and Traffic Barriers:</strong> Where streets are adjacent to or abut 
                canals, lakes, or other bodies of water, guardrails or other traffic barriers may be required 
                to prevent vehicles from entering these water bodies. Road grading must account for these 
                safety requirements.
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
            <h2 className={styles.heading}>Broward County Road Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate road and access drive grading services throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Davie</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Rio Vista</li>
                  <li>Miramar</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                  <li>Cooper City</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Road and Access Drive Grading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your road or access drive meets all specifications and 
              regulatory requirements in Broward County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, road design, and 
                site plans to understand grading requirements. This includes identifying drainage points, 
                utility locations, flood zone considerations, and any site constraints specific to Broward 
                County conditions, including 10-year, 3-day storm event protection requirements.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for road and access drive grading projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed road grading projects comply 
                with the Broward County Land Development Code and Natural Resource Protection Code. All 
                DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required grading permits 
                including Uniform Building Permit Applications (updated November 14, 2025), DER through 
                ePermits OneStop, SFWMD Environmental Resource Permits for activities affecting state waters 
                and wetlands, Natural Resource Protection Code compliance, and coordinate with regulatory 
                agencies. We coordinate with Broward County Building Code Division, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (motor graders, compactors, laser-guided systems) and experience 
                for precise road grading in Broward County, including expertise with 10-year, 3-day storm 
                event protection requirements and subdivision infrastructure requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and establish the general road profile. This establishes the basic grade and 
                prepares the area for fine grading, accounting for Broward County&apos;s high water table and 
                coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading creates proper 
                crown, cross-slopes, and longitudinal slopes, ensuring 10-year, 3-day storm event protection 
                for roadway crown elevation, meeting Broward County building code requirements and Natural 
                Resource Protection Code standards.
              </li>
              <li>
                <strong>Subgrade Compaction:</strong> Proper compaction of subgrade material to meet 
                engineering specifications for road foundation support. Compaction testing ensures subgrade 
                meets density requirements, accounting for Broward County&apos;s unique soil characteristics 
                including limestone bedrock and sandy soils.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Broward County 
                Building Code Division or municipal building departments, engineers, and paving contractors to 
                ensure the graded road meets all specifications, 10-year, 3-day storm event protection 
                requirements, and is ready for base course and paving.
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
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements for roads in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires minimum roadway crown elevation to be protected from a 10-year, 
                  3-day storm event. These criteria represent minimum standards and may be increased by the 
                  Engineer of Record as applicable. Road grading must ensure proper drainage and storm event 
                  protection, meeting Broward County building code requirements and Natural Resource Protection 
                  Code standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for road drainage in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Roads in Broward County typically require a minimum longitudinal slope of 0.5% (0.5 
                  feet of fall per 100 feet) for drainage, with a maximum of 6% for vehicle safety. 
                  Cross-slopes should be 2-3% to direct water to roadside drainage. Crown grading creates a 
                  center high point (typically 2-4 inches above edges) with water flowing to the sides. 
                  Minimum roadway crown elevation must be protected from a 10-year, 3-day storm event. 
                  Proper slopes prevent water from pooling and ensure effective drainage, essential given 
                  Broward County&apos;s heavy rainfall and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for subdivision road grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision road grading in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from Broward 
                  County Building Code Division, Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable projects, SFWMD Environmental Resource Permits for activities affecting 
                  state waters and wetlands, and Natural Resource Protection Code compliance. All DER submittals 
                  are only accepted electronically. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does access drive grading cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Access drive grading costs in Broward County vary based on length, width, site conditions, 
                  flood zone requirements, and drainage requirements. Typical single access drives range from 
                  $30,000 to $100,000, while subdivision road networks can range from $100,000 to $500,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, flood 
                  zone elevation requirements, and drainage complexity. Projects in flood zones or requiring 
                  significant elevation adjustments often cost more. Broward County permit processing, including 
                  DER review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What infrastructure is required with subdivision roads in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision roads in Broward County must include curbs, gutters, drainage structures, 
                  and associated drainage systems according to Broward County standards. Sidewalks may be 
                  required in residential, multiple-family, and business areas. Street name signs must be 
                  placed at all intersections as required by Broward County standards. Where streets are 
                  adjacent to canals, lakes, or other bodies of water, guardrails or traffic barriers may 
                  be required. Road grading must coordinate with all required infrastructure, meeting SFWMD 
                  Environmental Resource Permit requirements and Natural Resource Protection Code standards.
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
              <a href="/services/land-grading-site-grading/road-access-drive-grading/" className={styles.backLink}>
                ← View Road and Access Drive Grading (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Road or Access Drive Grading Project?"
        description="Get a free quote for your road or access drive grading project in Broward County. We'll coordinate licensed contractors experienced in Broward County Building Code Division requirements, 10-year, 3-day storm event protection, DER requirements, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

