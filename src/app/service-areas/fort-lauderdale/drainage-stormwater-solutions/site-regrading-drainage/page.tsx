import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Regrading for Drainage in Fort Lauderdale, FL | Broward County',
  description: 'Site regrading to fix drainage problems and eliminate standing water in Broward County. Redirect water flow away from structures.',
  openGraph: {
    title: 'Site Regrading for Drainage in Fort Lauderdale, FL | Broward County',
    description: 'Site regrading to fix drainage problems and eliminate standing water in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/site-regrading-drainage/`,
  },
}

export default function FortLauderdaleSiteRegradingDrainagePage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Regrading for Drainage in Fort Lauderdale, FL"
        subtitle="Site regrading to fix existing drainage problems, eliminate standing water, and redirect water flow away from structures and low-lying areas across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site regrading for drainage problems in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Site regrading for drainage in Broward County is essential for property owners, 
              homeowners, commercial property managers, and anyone experiencing standing water, 
              flooding, or water damage due to poor site grading throughout Broward County, including 
              Fort Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain in Fort Lauderdale, water pooling 
              around your foundation in Hollywood, or flooding in low-lying areas in Plantation, site 
              regrading can redirect water flow and eliminate drainage problems. We coordinate contractors 
              with expertise in Broward County drainage requirements, Development & Environmental Review 
              (DER), Natural Resource Protection Code compliance, storm event protection requirements, and 
              SFWMD Environmental Resource Permits to implement effective regrading solutions that meet 
              county requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Site regrading for drainage in Broward County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $50,000 to $200,000+</strong> for commercial properties depending on site size, 
                extent of regrading required, flood zone considerations, storm event protection 
                requirements, and whether drainage systems need to be installed or upgraded. Projects 
                requiring significant fill material to meet Base Flood Elevation (BFE) requirements or 
                storm event protection (100-year, 3-day storm event for structures) often cost more. 
                Projects involving development work as described in Florida Statute 380.04 require a 
                development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Regrading for Drainage Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing site conditions, water flow patterns, and drainage problems 
                specific to Broward County conditions including flood zone analysis, high water table 
                assessment, and storm event protection requirements (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots). Assessment 
                identifies low-lying areas, water accumulation points, and determines the best regrading 
                approach to redirect water flow while meeting county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading</h3>
              <p className={styles.serviceDescription}>
                Earthmoving to adjust site elevations and create proper slopes that direct water away 
                from structures and toward drainage points, meeting Broward County storm event protection 
                requirements. Regrading eliminates low spots where water accumulates and creates 
                positive drainage flow, with elevations that must protect structures from a 100-year, 
                3-day storm event and roadways from a 10-year, 3-day storm event.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Creation</h3>
              <p className={styles.serviceDescription}>
                Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                structures and toward drainage systems, meeting Broward County requirements. Proper 
                slopes prevent water from pooling and ensure effective drainage, especially important 
                given Broward County&apos;s high water table and frequent heavy rains, with compliance to 
                storm event protection requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
              <p className={styles.serviceDescription}>
                Filling or regrading low-lying areas where water accumulates, meeting Broward County 
                storm event protection requirements and Base Flood Elevation (BFE) compliance where 
                applicable. Low spots are eliminated by adding fill material and creating proper 
                drainage slopes to prevent standing water, with elevations that must protect structures 
                from a 100-year, 3-day storm event.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
              <p className={styles.serviceDescription}>
                Coordinating regrading with drainage system installation or upgrades, ensuring systems 
                meet storm event protection requirements (100-year, 3-day storm event for structures; 
                10-year, 3-day storm event for roadways and parking lots) and Natural Resource Protection 
                Code compliance. Regrading ensures water flows to drainage inlets, swales, or retention 
                areas effectively, integrating with Broward County&apos;s three-tier infrastructure framework. 
                May include installation of French drains, catch basins, or swales.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
              <p className={styles.serviceDescription}>
                Final grading to achieve proper elevations and slopes meeting Broward County storm event 
                protection requirements, with proper compaction to prevent settlement, especially 
                important given Broward County&apos;s high water table. Final grading ensures regraded areas 
                maintain proper drainage and don&apos;t settle over time, meeting county standards and 
                storm event protection requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Drainage Regrading Considerations</h2>
            <p className={styles.text}>
              Site regrading for drainage in Broward County requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for site regrading projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Site regrading that involves 
                drainage modifications typically requires Development & Environmental Review through 
                ePermits OneStop for applicable building permits. All DER submittals are only accepted 
                electronically. Broward County&apos;s Planning and Development Management Division ensures 
                that proposed developments comply with the Broward County Land Development Code and Natural 
                Resource Protection Code.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Site regrading must be coordinated with drainage 
                systems sized for these design storms, with proper storage volumes and discharge rates to 
                ensure adequate flood protection and water quality treatment.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be within 
                2-3 feet of the surface in many areas, affects regrading operations and requires proper 
                compaction to prevent settlement. Regrading must account for high water table conditions, 
                especially in areas like Fort Lauderdale, Hollywood, and coastal neighborhoods where the 
                water table is particularly high.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones must have regrading that 
                complies with FEMA requirements and Broward County building codes, including proper 
                elevation of structures and drainage features to meet Base Flood Elevation (BFE) 
                requirements and storm event protection (100-year, 3-day storm event for structures). 
                Regrading in flood zones may require significant fill material to achieve proper elevations.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Site regrading design must account for climate resilience and sea level 
                rise considerations, ensuring long-term functionality and compliance with regulatory 
                requirements.
              </li>
              <li>
                <strong>Drainage District Requirements:</strong> For projects in areas governed by drainage 
                districts (Central Broward Water Control District for areas east of Volunteer Road or 
                South Broward Drainage District for areas west), Paving & Drainage (P&D) Permits are 
                required. Site regrading must comply with drainage district requirements and storm event 
                protection standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Site Regrading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate site regrading for drainage throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood-Prone Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Hollywood Beach</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
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
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Regrading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed and meet 
              all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas specific to Broward County conditions 
                including flood zone analysis, high water table assessment, and storm event protection 
                requirements (100-year, 3-day storm event for structures; 10-year, 3-day storm event 
                for roadways and parking lots). Assessment includes reviewing site conditions during and 
                after rain events to understand water accumulation patterns.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow, meeting storm event protection 
                requirements and Natural Resource Protection Code compliance. The plan identifies areas 
                that need elevation changes and determines the best approach for redirecting water flow, 
                integrating with Broward County&apos;s three-tier infrastructure framework.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for site regrading projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management where applicable, Natural Resource 
                Protection Code compliance, drainage district approvals (CBWCD or SBDD) where applicable, 
                and coordinate with regulatory agencies. All DER submittals are only accepted 
                electronically. Permits are valid for 180 days from the date of issuance. Regrading 
                projects may require permits, especially if significant earthwork is involved or if work 
                is in flood zones.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work in Broward County, 
                including expertise with high water table conditions, flood zone requirements, storm 
                event protection, and Natural Resource Protection Code compliance. Contractors assess 
                drainage problems and implement effective regrading solutions.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes, meeting Broward County storm event protection 
                requirements. This may involve adding fill material to low areas or removing material to 
                create drainage channels, with elevations that must protect structures from a 100-year, 
                3-day storm event and roadways from a 10-year, 3-day storm event.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed, ensuring systems meet storm event protection 
                requirements and Natural Resource Protection Code compliance. This ensures water flows to 
                drainage points effectively and eliminates standing water, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, Broward 
                County Building Code Division or municipal building departments, and drainage districts 
                where applicable to ensure regrading effectively addresses drainage problems and that 
                water flows properly away from structures and toward drainage systems, meeting storm 
                event protection and Natural Resource Protection Code standards. Systems are ready for 
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
                <h3 className={styles.faqQuestion}>What permits are required for site regrading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Site regrading projects in Broward County require development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Uniform Building Permit Applications 
                  from Broward County Building Code Division, Development & Environmental Review (DER) 
                  through ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits 
                  for land disturbance and stormwater management where applicable, Natural Resource 
                  Protection Code compliance, and drainage district approvals (CBWCD or SBDD) where 
                  applicable. All DER submittals are only accepted electronically. Permits are valid for 
                  180 days from the date of issuance. Projects in flood zones or involving stormwater 
                  management may require additional permits. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems in Broward 
                  County. By adjusting site elevations and creating proper slopes, we can redirect water 
                  flow away from low-lying areas and eliminate standing water, meeting storm event 
                  protection requirements. Regrading is often combined with drainage system installation 
                  for comprehensive solutions that meet storm event protection (100-year, 3-day storm 
                  event for structures; 10-year, 3-day storm event for roadways and parking lots) and 
                  integrate with Broward County&apos;s three-tier infrastructure framework.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements for regrading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires that first floor elevations of all structures within drainage 
                  districts must protect structures from a 100-year, 3-day storm event, while roadway 
                  and parking lot elevations must be protected from a 10-year, 3-day storm event. Site 
                  regrading projects must account for these requirements, which may mandate elevations 
                  higher than minimum flood criteria to accommodate stormwater drainage systems. All 
                  stormwater infrastructure must be designed to prevent negative impacts on adjacent 
                  properties. This often requires significant fill material to achieve proper elevations. 
                  Climate resilience and sea level rise considerations (50-year planning horizon, ~2 feet 
                  projection) are incorporated into design.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does site regrading for drainage cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Site regrading costs in Broward County vary based on site size, extent of regrading 
                  required, flood zone considerations, storm event protection requirements, and whether 
                  drainage systems need to be installed. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties can range from $50,000 to $200,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  drainage system complexity, and permit requirements. Projects requiring significant fill 
                  material to meet Base Flood Elevation (BFE) requirements or storm event protection 
                  (100-year, 3-day storm event for structures) often cost more. Broward County permit 
                  processing, including DER review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems in Broward County by creating proper slopes 
                  and redirecting water flow, meeting storm event protection requirements. However, some 
                  drainage problems may also require drainage system installation (French drains, catch 
                  basins, swales) for comprehensive solutions that meet storm event protection (100-year, 
                  3-day storm event for structures; 10-year, 3-day storm event for roadways and parking 
                  lots) and integrate with Broward County&apos;s three-tier infrastructure framework. We 
                  assess your specific situation and recommend the best approach, which may include both 
                  regrading and drainage system work, with compliance to Natural Resource Protection Code 
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
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Fort Lauderdale Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Fort Lauderdale Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, storm event protection requirements, SFWMD Environmental Resource Permits, DER requirements, and regulatory compliance to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

