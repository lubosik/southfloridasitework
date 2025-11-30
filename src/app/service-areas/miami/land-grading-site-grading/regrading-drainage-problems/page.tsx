import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Regrading for Drainage Problems in Miami, FL | Miami-Dade County',
  description: 'Site regrading to fix existing drainage issues in Miami-Dade County. Eliminate standing water and redirect water flow away from structures.',
  openGraph: {
    title: 'Regrading for Drainage Problems in Miami, FL | Miami-Dade County',
    description: 'Site regrading to fix existing drainage issues and eliminate standing water in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/regrading-drainage-problems/`,
  },
}

export default function MiamiRegradingDrainageProblemsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Regrading for Drainage Problems in Miami, FL"
        subtitle="Site regrading to fix existing drainage issues, eliminate standing water, and redirect water flow away from structures across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site regrading for drainage problems in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Regrading for drainage problems in Miami-Dade County is essential for property owners, 
              homeowners, commercial property managers, and anyone experiencing standing water, flooding, 
              or water damage due to poor site grading in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain in Miami Beach, water pooling 
              around your foundation in Coral Gables, or flooding in low-lying areas in Aventura, site 
              regrading can redirect water flow and eliminate drainage problems. We coordinate licensed 
              contractors with the expertise to assess drainage issues and implement effective regrading 
              solutions, navigating Miami-Dade RER, DERM, and flood zone requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Regrading for drainage problems in Miami-Dade County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $50,000 to $200,000+</strong> for commercial properties depending on site size, 
                extent of regrading required, flood zone considerations, and whether drainage systems need 
                to be installed or upgraded. Projects in flood zones or requiring significant elevation 
                adjustments often cost more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Regrading for Drainage Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing site conditions, water flow patterns, and drainage problems 
                specific to Miami-Dade County conditions. Assessment identifies low-lying areas, water 
                accumulation points, flood zone considerations, and determines the best regrading approach 
                to redirect water flow.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading</h3>
              <p className={styles.serviceDescription}>
                Earthmoving to adjust site elevations and create proper slopes that direct water away 
                from structures and toward drainage points. Regrading eliminates low spots where water 
                accumulates and creates positive drainage flow, accounting for Miami-Dade&apos;s high 
                water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Creation</h3>
              <p className={styles.serviceDescription}>
                Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                structures and toward drainage systems. Proper slopes prevent water from pooling and 
                ensure effective drainage, essential given Miami-Dade&apos;s heavy rainfall and flat 
                topography.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
              <p className={styles.serviceDescription}>
                Filling or regrading low-lying areas where water accumulates. Low spots are eliminated 
                by adding fill material and creating proper drainage slopes to prevent standing water, 
                especially important in flood zones where elevation requirements must be met.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
              <p className={styles.serviceDescription}>
                Coordinating regrading with drainage system installation or upgrades to meet South Florida 
                Water Management District (SFWMD) and Miami-Dade County requirements. Regrading ensures 
                water flows to drainage inlets, swales, or retention areas effectively. May include 
                installation of French drains, catch basins, or swales.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
              <p className={styles.serviceDescription}>
                Final grading to achieve proper elevations and slopes, with proper compaction to prevent 
                settlement. Final grading ensures regraded areas maintain proper drainage and don&apos;t 
                settle over time, meeting Miami-Dade building code requirements and accounting for 
                unique soil characteristics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Common Drainage Problems in Miami-Dade County</h2>
            <p className={styles.text}>
              Miami-Dade County&apos;s unique conditions create specific drainage challenges that regrading 
              can address:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Standing Water After Rain:</strong> Low-lying areas that don&apos;t drain properly 
                create standing water that can damage landscaping, attract mosquitoes, and create safety 
                hazards. Miami-Dade&apos;s heavy rainfall and flat topography make this especially common. 
                Regrading creates proper slopes to eliminate standing water.
              </li>
              <li>
                <strong>Water Pooling Around Foundations:</strong> Poor grading around structures allows 
                water to pool near foundations, increasing the risk of water damage and foundation 
                problems, especially in areas with high water tables like Miami Beach, Aventura, and 
                coastal neighborhoods. Regrading directs water away from structures.
              </li>
              <li>
                <strong>Flood Zone Flooding:</strong> Properties in flood zones (AE, VE, AH, AO) can 
                experience flooding during heavy rain, especially in coastal areas like Miami Beach, Key 
                Biscayne, and Aventura. Regrading elevates low areas and creates proper drainage flow, 
                ensuring compliance with Base Flood Elevation (BFE) requirements.
              </li>
              <li>
                <strong>High Water Table Issues:</strong> Miami-Dade&apos;s high water table, which can 
                be within 2-3 feet of the surface in many areas, can cause water to rise to the surface 
                in low areas. Regrading elevates these areas and creates proper drainage to manage high 
                water table conditions, especially important in coastal neighborhoods.
              </li>
              <li>
                <strong>Inadequate Drainage Slopes:</strong> Existing sites may have insufficient slopes 
                to direct water to drainage systems. Regrading creates proper slopes (1-2% minimum) to 
                ensure effective water flow, meeting Miami-Dade County stormwater management requirements.
              </li>
              <li>
                <strong>Stormwater Runoff Problems:</strong> Properties may not be graded to handle 
                stormwater runoff effectively, especially during heavy South Florida rains and hurricane 
                events. Regrading ensures proper water flow and may be combined with stormwater management 
                systems to meet SFWMD and Miami-Dade County requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Regrading for Drainage Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate regrading for drainage problems throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood-Prone Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Aventura</li>
                  <li>Surfside</li>
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
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Westchester</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Hialeah</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Regrading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed in 
              Miami-Dade County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas. Assessment includes reviewing site conditions 
                during and after rain events to understand water accumulation patterns, flood zone 
                designation, and Miami-Dade County specific conditions including high water table.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow. The plan identifies areas that need 
                elevation changes, determines the best approach for redirecting water flow, and ensures 
                compliance with Base Flood Elevation (BFE) requirements for properties in flood zones.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits for 
                regrading work including Miami-Dade RER building permits (for unincorporated areas) or 
                municipal building department permits (for incorporated areas), DERM environmental resource 
                permits for land disturbance, SFWMD permits for stormwater management, and coordinate 
                with regulatory agencies. Regrading projects may require permits, especially if significant 
                earthwork is involved.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work in Miami-Dade County. 
                Contractors assess drainage problems and implement effective regrading solutions, 
                including expertise with high water table conditions and flood zone requirements.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes. This may involve adding fill material to low areas 
                or removing material to create drainage channels, accounting for Miami-Dade&apos;s high 
                water table and coastal soil conditions.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed to meet SFWMD and Miami-Dade County 
                requirements. This ensures water flows to drainage points effectively and eliminates 
                standing water.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Miami-Dade RER 
                or municipal building departments to ensure regrading effectively addresses drainage 
                problems and that water flows properly away from structures and toward drainage systems, 
                meeting all permit conditions and engineering specifications.
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
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems in Miami-Dade 
                  County. By adjusting site elevations and creating proper slopes, we can redirect water 
                  flow away from low-lying areas and eliminate standing water. Regrading is often combined 
                  with drainage system installation for comprehensive solutions, especially important given 
                  Miami-Dade&apos;s heavy rainfall, high water table, and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for regrading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading projects in Miami-Dade County may require building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas), 
                  especially if significant earthwork is involved. Projects in flood zones or involving 
                  stormwater management may require DERM environmental resource permits and SFWMD permits. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect regrading?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized regrading techniques. Low areas may need to be elevated above 
                  the water table, and proper drainage systems are essential to prevent water from rising 
                  to the surface. This is especially important in coastal areas like Miami Beach, Aventura, 
                  and Key Biscayne where the water table is particularly high.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does regrading for drainage cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading costs in Miami-Dade County vary based on site size, extent of regrading required, 
                  flood zone considerations, and whether drainage systems need to be installed. Typical 
                  residential properties range from $20,000 to $75,000, while commercial properties can 
                  range from $50,000 to $200,000+ depending on scope. Factors affecting cost include site 
                  access, required earthwork, flood zone elevation requirements, and drainage system 
                  complexity. Projects in flood zones or requiring significant elevation adjustments often 
                  cost more.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems by creating proper slopes and redirecting 
                  water flow. However, some drainage problems in Miami-Dade County may also require 
                  drainage system installation (French drains, catch basins, swales) for comprehensive 
                  solutions, especially in flood zones or areas with high water tables. We assess your 
                  specific situation and recommend the best approach, which may include both regrading and 
                  drainage system work to meet SFWMD and Miami-Dade County requirements.
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
              <a href="/service-areas/miami/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Miami Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Miami Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, flood zone requirements, and regulatory compliance to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

