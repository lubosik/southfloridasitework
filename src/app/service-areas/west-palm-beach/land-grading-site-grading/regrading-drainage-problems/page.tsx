import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Regrading for Drainage Problems in West Palm Beach, FL | Palm Beach County',
  description: 'Site regrading to fix existing drainage issues in Palm Beach County. Eliminate standing water and redirect water flow away from structures.',
  openGraph: {
    title: 'Regrading for Drainage Problems in West Palm Beach, FL | Palm Beach County',
    description: 'Site regrading to fix existing drainage issues and eliminate standing water in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-grading-site-grading/regrading-drainage-problems/`,
  },
}

export default function WestPalmBeachRegradingDrainageProblemsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Regrading for Drainage Problems in West Palm Beach, FL"
        subtitle="Site regrading to fix existing drainage issues, eliminate standing water, and redirect water flow away from structures across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site regrading for drainage problems in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Regrading for drainage problems in Palm Beach County is essential for property owners, 
              homeowners, commercial property managers, and anyone experiencing standing water, flooding, 
              or water damage due to poor site grading throughout Palm Beach County, including West Palm Beach, 
              Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain in West Palm Beach, water pooling 
              around your foundation in Palm Beach, or flooding in low-lying areas in Jupiter, site 
              regrading can redirect water flow and eliminate drainage problems. We coordinate licensed 
              contractors with the expertise to assess drainage issues and implement effective regrading 
              solutions, navigating Palm Beach County Building Division, Environmental Resources Management 
              (ERM) review, Unified Land Development Code (ULDC) compliance, and flood zone requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Regrading for drainage problems in Palm Beach County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $50,000 to $200,000+</strong> for commercial properties depending on site size, 
                extent of regrading required, flood zone considerations, and whether drainage systems need 
                to be installed or upgraded. Projects in flood zones or requiring significant elevation 
                adjustments often cost more. Projects involving development work as described in Florida 
                Statute 380.04 require a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Regrading for Drainage Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing site conditions, water flow patterns, and drainage problems 
                specific to Palm Beach County conditions. Assessment identifies low-lying areas, water 
                accumulation points, flood zone considerations, and determines the best regrading approach 
                to redirect water flow.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading</h3>
              <p className={styles.serviceDescription}>
                Earthmoving to adjust site elevations and create proper slopes that direct water away 
                from structures and toward drainage points throughout Palm Beach County. Regrading eliminates 
                low spots where water accumulates and creates positive drainage flow, accounting for Palm Beach 
                County&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Creation</h3>
              <p className={styles.serviceDescription}>
                Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                structures and toward drainage systems throughout Palm Beach County. Proper slopes prevent 
                water from pooling and ensure effective drainage, essential given Palm Beach County&apos;s heavy 
                rainfall and flat topography, with compliance to SFWMD Environmental Resource Permit 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
              <p className={styles.serviceDescription}>
                Filling or regrading low-lying areas where water accumulates throughout Palm Beach County. 
                Low spots are eliminated by adding fill material and creating proper drainage slopes to 
                prevent standing water, especially important in flood zones where elevation requirements 
                must be met, including Base Flood Elevation (BFE) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
              <p className={styles.serviceDescription}>
                Coordinating regrading with drainage system installation or upgrades to meet SFWMD 
                Environmental Resource Permit requirements and Palm Beach County Unified Land Development 
                Code (ULDC) standards. Regrading ensures water flows to drainage inlets, swales, or retention 
                areas effectively. May include installation of French drains, catch basins, or swales.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
              <p className={styles.serviceDescription}>
                Final grading to achieve proper elevations and slopes, with proper compaction to prevent 
                settlement throughout Palm Beach County. Final grading ensures regraded areas maintain proper 
                drainage and don&apos;t settle over time, meeting Palm Beach County building code requirements 
                and accounting for unique soil characteristics including limestone bedrock and sandy soils.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Common Drainage Problems in Palm Beach County</h2>
            <p className={styles.text}>
              Palm Beach County&apos;s unique conditions create specific drainage challenges that regrading 
              can address:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Standing Water After Rain:</strong> Low-lying areas that don&apos;t drain properly 
                create standing water that can damage landscaping, attract mosquitoes, and create safety 
                hazards. Palm Beach County&apos;s heavy rainfall and flat topography make this especially common. 
                Regrading creates proper slopes to eliminate standing water, with compliance to SFWMD 
                Environmental Resource Permit requirements.
              </li>
              <li>
                <strong>Water Pooling Around Foundations:</strong> Poor grading around structures allows 
                water to pool near foundations, increasing the risk of water damage and foundation 
                problems, especially in areas with high water tables like Palm Beach, Jupiter, and 
                coastal neighborhoods. Regrading directs water away from structures, ensuring proper 
                drainage flow.
              </li>
              <li>
                <strong>Flood Zone Flooding:</strong> Properties in flood zones (AE, VE, AH, AO) can 
                experience flooding during heavy rain, especially in coastal areas like Palm Beach, Jupiter, 
                and West Palm Beach. Regrading elevates low areas and creates proper drainage flow, 
                ensuring compliance with Base Flood Elevation (BFE) requirements.
              </li>
              <li>
                <strong>High Water Table Issues:</strong> Palm Beach County&apos;s high water table, which can 
                be within 2-3 feet of the surface in many areas, can cause water to rise to the surface 
                in low areas. Regrading elevates these areas and creates proper drainage to manage high 
                water table conditions, especially important in coastal neighborhoods. SFWMD Environmental 
                Resource Permits are required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Inadequate Drainage Slopes:</strong> Existing sites may have insufficient slopes 
                to direct water to drainage systems. Regrading creates proper slopes (1-2% minimum) to 
                ensure effective water flow, meeting SFWMD Environmental Resource Permit requirements and 
                Palm Beach County Unified Land Development Code (ULDC) standards.
              </li>
              <li>
                <strong>Stormwater Runoff Problems:</strong> Properties may not be graded to handle 
                stormwater runoff effectively, especially during heavy South Florida rains and hurricane 
                events. Regrading ensures proper water flow and may be combined with stormwater management 
                systems to meet SFWMD Environmental Resource Permit requirements and Palm Beach County Unified 
                Land Development Code (ULDC) standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Regrading for Drainage Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate regrading for drainage problems throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood-Prone Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Palm Beach Gardens</li>
                  <li>Boca Raton</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Lantana</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Regrading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed in 
              Palm Beach County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas. Assessment includes reviewing site conditions 
                during and after rain events to understand water accumulation patterns, flood zone 
                designation, and Palm Beach County specific conditions including high water table.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow. The plan identifies areas that need 
                elevation changes, determines the best approach for redirecting water flow, and ensures 
                compliance with Base Flood Elevation (BFE) requirements and SFWMD Environmental Resource 
                Permit requirements for properties in flood zones.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for regrading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed regrading projects comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits for 
                regrading work including Building Division permits, SFWMD Environmental Resource Permits for 
                activities affecting state waters and wetlands, Unified Land Development Code (ULDC) compliance, 
                and coordinate with regulatory agencies. Regrading projects may require permits, especially if 
                significant earthwork is involved. We coordinate with Palm Beach County Building Division, ERM, 
                SFWMD, and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work in Palm Beach County. 
                Contractors assess drainage problems and implement effective regrading solutions, 
                including expertise with high water table conditions, flood zone requirements, and coastal 
                soil conditions.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes. This may involve adding fill material to low areas 
                or removing material to create drainage channels, accounting for Palm Beach County&apos;s high 
                water table and coastal soil conditions.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed to meet SFWMD Environmental Resource Permit 
                requirements and Palm Beach County Unified Land Development Code (ULDC) standards. This ensures 
                water flows to drainage points effectively and eliminates standing water.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Palm Beach County 
                Building Division or municipal building departments to ensure regrading effectively 
                addresses drainage problems and that water flows properly away from structures and toward 
                drainage systems, meeting all permit conditions and engineering specifications.
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
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems in Palm Beach 
                  County. By adjusting site elevations and creating proper slopes, we can redirect water 
                  flow away from low-lying areas and eliminate standing water. Regrading is often combined 
                  with drainage system installation for comprehensive solutions, especially important given 
                  Palm Beach County&apos;s heavy rainfall, high water table, and flat topography. All work must 
                  comply with SFWMD Environmental Resource Permit requirements and Palm Beach County Unified 
                  Land Development Code (ULDC) standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for regrading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading projects in Palm Beach County may require development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects affecting 
                  wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for activities 
                  affecting state waters and wetlands, Unified Land Development Code (ULDC) compliance, and FEMA 
                  compliance permits for properties in flood zones. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect regrading?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized regrading techniques. Low areas may need to be elevated above 
                  the water table, and proper drainage systems are essential to prevent water from rising 
                  to the surface. SFWMD Environmental Resource Permits are required for dewatering activities 
                  affecting state waters. This is especially important in coastal areas like Palm Beach, Jupiter, 
                  and West Palm Beach where the water table is particularly high.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does regrading for drainage cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading costs in Palm Beach County vary based on site size, extent of regrading required, 
                  flood zone considerations, and whether drainage systems need to be installed. Typical 
                  residential properties range from $20,000 to $75,000, while commercial properties can 
                  range from $50,000 to $200,000+ depending on scope. Factors affecting cost include site 
                  access, required earthwork, flood zone elevation requirements, and drainage system 
                  complexity. Projects in flood zones or requiring significant elevation adjustments often 
                  cost more. Palm Beach County permit processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems by creating proper slopes and redirecting 
                  water flow. However, some drainage problems in Palm Beach County may also require 
                  drainage system installation (French drains, catch basins, swales) for comprehensive 
                  solutions, especially in flood zones or areas with high water tables. We assess your 
                  specific situation and recommend the best approach, which may include both regrading and 
                  drainage system work to meet SFWMD Environmental Resource Permit requirements and Palm Beach 
                  County Unified Land Development Code (ULDC) standards.
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
              <a href="/services/land-grading-site-grading/regrading-drainage-problems/" className={styles.backLink}>
                ← View Regrading for Drainage Problems (All Areas)
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
        title="Ready to Fix Your West Palm Beach Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, flood zone requirements, Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, and regulatory compliance to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

