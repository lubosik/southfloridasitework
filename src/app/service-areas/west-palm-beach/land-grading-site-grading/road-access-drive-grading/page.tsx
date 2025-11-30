import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Road & Access Drive Grading in West Palm Beach, FL | Palm Beach County',
  description: 'Professional road and access drive grading services in Palm Beach County. Proper crown, cross-slopes, and drainage features for subdivision infrastructure.',
  openGraph: {
    title: 'Road & Access Drive Grading in West Palm Beach, FL | Palm Beach County',
    description: 'Professional road and access drive grading services in Palm Beach County with proper drainage and infrastructure preparation.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-grading-site-grading/road-access-drive-grading/`,
  },
}

export default function WestPalmBeachRoadAccessDriveGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Road and Access Drive Grading in West Palm Beach, FL"
        subtitle="Professional grading for roads, access drives, and subdivision infrastructure across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Road and access drive grading services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Road and access drive grading services in Palm Beach County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone preparing 
              roadways for paving or infrastructure installation throughout Palm Beach County, including 
              Wellington, Royal Palm Beach, The Acreage, Loxahatchee, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Wellington, building access roads for a 
              commercial development in Royal Palm Beach, or upgrading existing roadways in Palm Beach, proper 
              grading ensures water drains correctly, provides safe vehicle access, and meets engineering 
              specifications. We coordinate licensed contractors with the right equipment and expertise 
              for your specific Palm Beach County project needs, including compliance with Palm Beach County 
              Building Division, Environmental Resources Management (ERM) review, and Unified Land Development 
              Code (ULDC) requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Road and access drive grading projects in Palm Beach County typically range from 
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
          <h2 className={styles.heading}>What Road and Access Drive Grading Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Crown Grading</h3>
              <p className={styles.serviceDescription}>
                Creating proper crown (center high point) in roadways to direct water to the sides and 
                into drainage systems throughout Palm Beach County. Crown grading prevents water from pooling 
                in the center of roads and ensures proper drainage flow, essential given Palm Beach County&apos;s 
                heavy rainfall and flat topography. Typical crown height is 2-4 inches above the edges.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cross-Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Establishing proper cross-slopes (typically 2-3%) across road width to direct water to 
                roadside drainage throughout Palm Beach County. Cross-slopes must be consistent along the 
                entire road length for effective water management, meeting Palm Beach County building code 
                requirements and Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Longitudinal Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Grading along the road length to achieve proper longitudinal slopes (typically 0.5-6% 
                minimum) for drainage while maintaining safe vehicle access throughout Palm Beach County. 
                Slopes must balance drainage needs with vehicle safety requirements, meeting Palm Beach County 
                road construction standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subgrade Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and compaction of subgrade material to proper elevations and density for base 
                course and pavement installation throughout Palm Beach County. Subgrade must be properly graded 
                to support road loads and prevent settlement, accounting for Palm Beach County&apos;s high water 
                table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Feature Grading</h3>
              <p className={styles.serviceDescription}>
                Grading around catch basins, swales, and drainage inlets to ensure proper water flow into 
                drainage systems throughout Palm Beach County. Road grading must work in conjunction with 
                drainage infrastructure for effective water management, meeting SFWMD Environmental Resource 
                Permit requirements and Palm Beach County Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Transition Grading</h3>
              <p className={styles.serviceDescription}>
                Smooth transitions between different road sections, intersections, and connections to 
                existing roadways throughout Palm Beach County. Transition grading ensures smooth vehicle access 
                and proper drainage flow at connection points, meeting Palm Beach County building code requirements 
                and Unified Land Development Code (ULDC) standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Road Grading Considerations</h2>
            <p className={styles.text}>
              Grading for roads and access drives in Palm Beach County requires specialized knowledge of 
              local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> Road grading requires Building Division permits 
                from Palm Beach County Building Division. Building permits must be obtained before beginning 
                construction, and the Building Division reviews plans to ensure compliance with the Florida 
                Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Road grading may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed developments comply 
                with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for road and access drive grading projects in Palm Beach 
                County.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Road grading must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Roads must be graded to direct water 
                to stormwater inlets, swales, or retention areas to meet SFWMD Environmental Resource Permit 
                requirements and Palm Beach County Unified Land Development Code (ULDC) standards. As of June 28, 
                2024, new water quality performance standards were implemented. Proper grading prevents flooding 
                and reduces stormwater runoff into roadways.
              </li>
              <li>
                <strong>Required Infrastructure:</strong> Road grading must coordinate with required 
                infrastructure including curbs, gutters, drainage structures, and associated drainage 
                systems according to Palm Beach County standards. Sidewalks may be required in residential, 
                multiple-family, and business areas. Street name signs must be placed at all intersections 
                as required by Palm Beach County standards.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table affects subgrade 
                preparation and may require additional base course material or elevation adjustments. Proper 
                drainage is critical to prevent water from undermining road foundations, especially in areas 
                like Palm Beach, Jupiter, and coastal neighborhoods. SFWMD Environmental Resource 
                Permits are required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Roads in flood zones may need to be graded to 
                specific elevations above base flood elevation. This affects grading depth and may require 
                additional fill material or elevation adjustments, particularly in coastal areas like Palm 
                Beach, Jupiter, and West Palm Beach.
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
            <h2 className={styles.heading}>Palm Beach County Road Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate road and access drive grading services throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
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
                  <li>Jupiter</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Lantana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Road and Access Drive Grading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your road or access drive meets all specifications and 
              regulatory requirements in Palm Beach County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, road design, and 
                site plans to understand grading requirements. This includes identifying drainage points, 
                utility locations, flood zone considerations, and any site constraints specific to Palm Beach 
                County conditions.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for road and access drive grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed road grading projects comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required grading permits 
                including Building Division permits, SFWMD Environmental Resource Permits for activities affecting 
                state waters and wetlands, Unified Land Development Code (ULDC) compliance, and coordinate with 
                regulatory agencies. We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (motor graders, compactors, laser-guided systems) and experience 
                for precise road grading in Palm Beach County, including expertise with subdivision infrastructure 
                requirements and flood zone considerations.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and establish the general road profile. This establishes the basic grade and 
                prepares the area for fine grading, accounting for Palm Beach County&apos;s high water table and 
                coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading creates proper 
                crown, cross-slopes, and longitudinal slopes, meeting Palm Beach County building code requirements 
                and Unified Land Development Code (ULDC) standards.
              </li>
              <li>
                <strong>Subgrade Compaction:</strong> Proper compaction of subgrade material to meet 
                engineering specifications for road foundation support. Compaction testing ensures subgrade 
                meets density requirements, accounting for Palm Beach County&apos;s unique soil characteristics 
                including limestone bedrock and sandy soils.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Palm Beach County 
                Building Division or municipal building departments, engineers, and paving contractors to 
                ensure the graded road meets all specifications and is ready for base course and paving.
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
                <h3 className={styles.faqQuestion}>What slope is required for road drainage in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Roads in Palm Beach County typically require a minimum longitudinal slope of 0.5% (0.5 
                  feet of fall per 100 feet) for drainage, with a maximum of 6% for vehicle safety. 
                  Cross-slopes should be 2-3% to direct water to roadside drainage. Crown grading creates a 
                  center high point (typically 2-4 inches above edges) with water flowing to the sides. 
                  Proper slopes prevent water from pooling and ensure effective drainage, essential given 
                  Palm Beach County&apos;s heavy rainfall and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for subdivision road grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision road grading in Palm Beach County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects affecting 
                  wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for 
                  activities affecting state waters and wetlands, and Unified Land Development Code (ULDC) 
                  compliance. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does access drive grading cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Access drive grading costs in Palm Beach County vary based on length, width, site conditions, 
                  flood zone requirements, and drainage requirements. Typical single access drives range from 
                  $30,000 to $100,000, while subdivision road networks can range from $100,000 to $500,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, flood 
                  zone elevation requirements, and drainage complexity. Projects in flood zones or requiring 
                  significant elevation adjustments often cost more. Palm Beach County permit processing, including 
                  ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What infrastructure is required with subdivision roads in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision roads in Palm Beach County must include curbs, gutters, drainage structures, 
                  and associated drainage systems according to Palm Beach County standards. Sidewalks may be 
                  required in residential, multiple-family, and business areas. Street name signs must be 
                  placed at all intersections as required by Palm Beach County standards. Where streets are 
                  adjacent to canals, lakes, or other bodies of water, guardrails or traffic barriers may 
                  be required. Road grading must coordinate with all required infrastructure, meeting SFWMD 
                  Environmental Resource Permit requirements and Unified Land Development Code (ULDC) standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect road grading?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table affects subgrade preparation and may require 
                  additional base course material or elevation adjustments. Proper drainage is critical to 
                  prevent water from undermining road foundations, especially in areas like Palm Beach, Jupiter, 
                  and coastal neighborhoods. SFWMD Environmental Resource Permits are required for dewatering 
                  activities affecting state waters. Our contractors are experienced with high water table 
                  conditions and ensure proper drainage design.
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
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/" className={styles.backLink}>
                ← Back to West Palm Beach Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Road or Access Drive Grading Project?"
        description="Get a free quote for your road or access drive grading project in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County Building Division requirements, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

