import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Regrading for Drainage in West Palm Beach, FL | Palm Beach County',
  description: 'Site regrading to fix drainage problems and eliminate standing water in Palm Beach County. Redirect water flow away from structures.',
  openGraph: {
    title: 'Site Regrading for Drainage in West Palm Beach, FL | Palm Beach County',
    description: 'Site regrading to fix drainage problems and eliminate standing water in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/site-regrading-drainage/`,
  },
}

export default function WestPalmBeachSiteRegradingDrainagePage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Regrading for Drainage in West Palm Beach, FL"
        subtitle="Site regrading to fix existing drainage problems, eliminate standing water, and redirect water flow away from structures and low-lying areas across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site regrading for drainage problems in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Site regrading for drainage in Palm Beach County is essential for property owners, 
              homeowners, commercial property managers, and anyone experiencing standing water, 
              flooding, or water damage due to poor site grading throughout Palm Beach County, including 
              West Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain in Palm Beach, water pooling 
              around your foundation in Jupiter, or flooding in low-lying areas in Wellington, site 
              regrading can redirect water flow and eliminate drainage problems. We coordinate contractors 
              with expertise in Palm Beach County drainage requirements, Building Division permits, 
              Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) 
              compliance, and SFWMD Environmental Resource Permits to implement effective regrading solutions that meet 
              county requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Site regrading for drainage in Palm Beach County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $50,000 to $200,000+</strong> for commercial properties depending on site size, 
                extent of regrading required, flood zone considerations, and whether drainage systems need to be installed or upgraded. Projects 
                requiring significant fill material to meet Base Flood Elevation (BFE) requirements often cost more. 
                Projects involving development work as described in Florida Statute 380.04 require a 
                development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Regrading for Drainage Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing site conditions, water flow patterns, and drainage problems 
                specific to Palm Beach County conditions including flood zone analysis, high water table 
                assessment, and regulatory requirements. Assessment 
                identifies low-lying areas, water accumulation points, and determines the best regrading 
                approach to redirect water flow while meeting county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading</h3>
              <p className={styles.serviceDescription}>
                Earthmoving to adjust site elevations and create proper slopes that direct water away 
                from structures and toward drainage points, meeting Palm Beach County stormwater management 
                requirements. Regrading eliminates low spots where water accumulates and creates 
                positive drainage flow, with elevations that comply with flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Creation</h3>
              <p className={styles.serviceDescription}>
                Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                structures and toward drainage systems, meeting Palm Beach County requirements. Proper 
                slopes prevent water from pooling and ensure effective drainage, especially important 
                given Palm Beach County&apos;s high water table and frequent heavy rains.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
              <p className={styles.serviceDescription}>
                Filling or regrading low-lying areas where water accumulates, meeting Palm Beach County 
                stormwater management requirements and Base Flood Elevation (BFE) compliance where 
                applicable. Low spots are eliminated by adding fill material and creating proper 
                drainage slopes to prevent standing water.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
              <p className={styles.serviceDescription}>
                Coordinating regrading with drainage system installation or upgrades, ensuring systems 
                meet Unified Land Development Code (ULDC) compliance. Regrading ensures water flows to drainage inlets, swales, or retention 
                areas effectively. 
                May include installation of French drains, catch basins, or swales.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
              <p className={styles.serviceDescription}>
                Final grading to achieve proper elevations and slopes meeting Palm Beach County stormwater management 
                requirements, with proper compaction to prevent settlement, especially 
                important given Palm Beach County&apos;s high water table. Final grading ensures regraded areas 
                maintain proper drainage and don&apos;t settle over time, meeting county standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Drainage Regrading Considerations</h2>
            <p className={styles.text}>
              Site regrading for drainage in Palm Beach County requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for site regrading projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Site regrading that involves drainage modifications typically requires Building Division permits from Palm Beach County Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Site regrading projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Site regrading projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Site regrading projects may require 
                SFWMD Environmental Resource Permits for land disturbance and stormwater management, 
                especially for projects near wetlands or surface waters. As of June 28, 2024, new water 
                quality performance standards were implemented. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, which can be within 
                2-3 feet of the surface in many areas, affects regrading operations and requires proper 
                compaction to prevent settlement. Regrading must account for high water table conditions, 
                especially in areas like Palm Beach, Jupiter, and coastal neighborhoods where the 
                water table is particularly high.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones must have regrading that 
                complies with FEMA requirements and Palm Beach County building codes, including proper 
                elevation of structures and drainage features to meet Base Flood Elevation (BFE) 
                requirements. 
                Regrading in flood zones may require significant fill material to achieve proper elevations.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Site regrading design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Palm Beach County including Palm 
                Beach, Jupiter, Juno Beach, and Tequesta face additional 
                challenges including saltwater intrusion, storm surge, and unique soil conditions that affect 
                regrading operations and drainage system design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Site Regrading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate site regrading for drainage throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood-Prone Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Riviera Beach</li>
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
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Regrading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed and meet 
              all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas specific to Palm Beach County conditions 
                including flood zone analysis, high water table assessment, and regulatory requirements. Assessment includes reviewing site conditions during and 
                after rain events to understand water accumulation patterns.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow, meeting Unified Land Development Code (ULDC) compliance. The plan identifies areas 
                that need elevation changes and determines the best approach for redirecting water flow.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for site regrading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management where applicable, Unified Land Development Code (ULDC) 
                compliance, and coordinate with regulatory agencies. Regrading 
                projects may require permits, especially if significant earthwork is involved or if work 
                is in flood zones.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work in Palm Beach County, 
                including expertise with high water table conditions, flood zone requirements, and Unified Land Development Code (ULDC) compliance. Contractors assess 
                drainage problems and implement effective regrading solutions.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes, meeting Palm Beach County stormwater management 
                requirements. This may involve adding fill material to low areas or removing material to 
                create drainage channels.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed, ensuring systems meet Unified Land Development Code (ULDC) compliance. This ensures water flows to 
                drainage points effectively and eliminates standing water.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, Palm Beach 
                County Building Division or municipal building departments, and Environmental Resources Management (ERM) 
                where applicable to ensure regrading effectively addresses drainage problems and that 
                water flows properly away from structures and toward drainage systems, meeting Unified Land Development Code (ULDC) standards. Systems are ready for 
                operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for site regrading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Site regrading projects in Palm Beach County require development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits 
                  for land disturbance and stormwater management where applicable, Unified Land Development Code (ULDC) 
                  compliance, and FEMA compliance permits for properties in flood zones. Projects in flood zones or involving stormwater 
                  management may require additional permits. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems in Palm Beach 
                  County. By adjusting site elevations and creating proper slopes, we can redirect water 
                  flow away from low-lying areas and eliminate standing water. Regrading is often combined with drainage system installation 
                  for comprehensive solutions that meet Unified Land Development Code (ULDC) compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does site regrading for drainage cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Site regrading costs in Palm Beach County vary based on site size, extent of regrading 
                  required, flood zone considerations, and whether 
                  drainage systems need to be installed. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties can range from $50,000 to $200,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  drainage system complexity, and permit requirements. Projects requiring significant fill 
                  material to meet Base Flood Elevation (BFE) requirements often cost more. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems in Palm Beach County by creating proper slopes 
                  and redirecting water flow. However, some 
                  drainage problems may also require drainage system installation (French drains, catch 
                  basins, swales) for comprehensive solutions. We 
                  assess your specific situation and recommend the best approach, which may include both 
                  regrading and drainage system work, with compliance to Unified Land Development Code (ULDC) 
                  requirements.
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
              <a href="/services/drainage-stormwater-solutions/site-regrading-drainage/" className={styles.backLink}>
                ← View Site Regrading for Drainage (All Areas)
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
        title="Ready to Fix Your West Palm Beach Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

