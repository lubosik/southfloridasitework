import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Regrading for Drainage Problems in Fort Lauderdale, FL | Broward County',
  description: 'Site regrading to fix existing drainage issues in Broward County. Eliminate standing water and redirect water flow away from structures.',
  openGraph: {
    title: 'Regrading for Drainage Problems in Fort Lauderdale, FL | Broward County',
    description: 'Site regrading to fix existing drainage issues and eliminate standing water in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/regrading-drainage-problems/`,
  },
}

export default function FortLauderdaleRegradingDrainageProblemsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Regrading for Drainage Problems in Fort Lauderdale, FL"
        subtitle="Site regrading to fix existing drainage issues, eliminate standing water, and redirect water flow away from structures across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site regrading for drainage problems in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Regrading for drainage problems in Broward County is essential for property owners, 
              homeowners, commercial property managers, and anyone experiencing standing water, flooding, 
              or water damage due to poor site grading throughout Broward County, including Fort Lauderdale, 
              Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain in Fort Lauderdale, water pooling 
              around your foundation in Hollywood, or flooding in low-lying areas in Pompano Beach, site 
              regrading can redirect water flow and eliminate drainage problems. We coordinate licensed 
              contractors with the expertise to assess drainage issues and implement effective regrading 
              solutions, navigating Broward County Building Code Division, Development & Environmental Review 
              (DER), Natural Resource Protection Code compliance, and flood zone requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Regrading for drainage problems in Broward County typically ranges from 
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
          <h2 className={styles.heading}>What Regrading for Drainage Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing site conditions, water flow patterns, and drainage problems 
                specific to Broward County conditions. Assessment identifies low-lying areas, water 
                accumulation points, flood zone considerations, and determines the best regrading approach 
                to redirect water flow, including storm event protection requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading</h3>
              <p className={styles.serviceDescription}>
                Earthmoving to adjust site elevations and create proper slopes that direct water away 
                from structures and toward drainage points throughout Broward County. Regrading eliminates 
                low spots where water accumulates and creates positive drainage flow, accounting for Broward 
                County&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Creation</h3>
              <p className={styles.serviceDescription}>
                Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                structures and toward drainage systems throughout Broward County. Proper slopes prevent 
                water from pooling and ensure effective drainage, essential given Broward County&apos;s heavy 
                rainfall and flat topography, with compliance to SFWMD Environmental Resource Permit 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
              <p className={styles.serviceDescription}>
                Filling or regrading low-lying areas where water accumulates throughout Broward County. 
                Low spots are eliminated by adding fill material and creating proper drainage slopes to 
                prevent standing water, especially important in flood zones where elevation requirements 
                must be met, including Base Flood Elevation (BFE) compliance and storm event protection.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
              <p className={styles.serviceDescription}>
                Coordinating regrading with drainage system installation or upgrades to meet SFWMD 
                Environmental Resource Permit requirements and Broward County Natural Resource Protection 
                Code standards. Regrading ensures water flows to drainage inlets, swales, or retention 
                areas effectively. May include installation of French drains, catch basins, or swales.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
              <p className={styles.serviceDescription}>
                Final grading to achieve proper elevations and slopes, with proper compaction to prevent 
                settlement throughout Broward County. Final grading ensures regraded areas maintain proper 
                drainage and don&apos;t settle over time, meeting Broward County building code requirements 
                and accounting for unique soil characteristics including limestone bedrock and sandy soils.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Common Drainage Problems in Broward County</h2>
            <p className={styles.text}>
              Broward County&apos;s unique conditions create specific drainage challenges that regrading 
              can address:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Standing Water After Rain:</strong> Low-lying areas that don&apos;t drain properly 
                create standing water that can damage landscaping, attract mosquitoes, and create safety 
                hazards. Broward County&apos;s heavy rainfall and flat topography make this especially common. 
                Regrading creates proper slopes to eliminate standing water, with compliance to SFWMD 
                Environmental Resource Permit requirements.
              </li>
              <li>
                <strong>Water Pooling Around Foundations:</strong> Poor grading around structures allows 
                water to pool near foundations, increasing the risk of water damage and foundation 
                problems, especially in areas with high water tables like Fort Lauderdale, Hollywood, and 
                coastal neighborhoods. Regrading directs water away from structures, ensuring proper 
                drainage flow.
              </li>
              <li>
                <strong>Flood Zone Flooding:</strong> Properties in flood zones (AE, VE, AH, AO) can 
                experience flooding during heavy rain, especially in coastal areas like Fort Lauderdale, 
                Hollywood, and Pompano Beach. Regrading elevates low areas and creates proper drainage flow, 
                ensuring compliance with Base Flood Elevation (BFE) requirements and storm event protection 
                (100-year, 3-day storm event for structures; 10-year, 3-day storm event for roadways and 
                parking lots).
              </li>
              <li>
                <strong>High Water Table Issues:</strong> Broward County&apos;s high water table, which can 
                be within 2-3 feet of the surface in many areas, can cause water to rise to the surface 
                in low areas. Regrading elevates these areas and creates proper drainage to manage high 
                water table conditions, especially important in coastal neighborhoods. SFWMD Environmental 
                Resource Permits are required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Inadequate Drainage Slopes:</strong> Existing sites may have insufficient slopes 
                to direct water to drainage systems. Regrading creates proper slopes (1-2% minimum) to 
                ensure effective water flow, meeting SFWMD Environmental Resource Permit requirements and 
                Broward County Natural Resource Protection Code standards.
              </li>
              <li>
                <strong>Stormwater Runoff Problems:</strong> Properties may not be graded to handle 
                stormwater runoff effectively, especially during heavy South Florida rains and hurricane 
                events. Regrading ensures proper water flow and may be combined with stormwater management 
                systems to meet SFWMD Environmental Resource Permit requirements and Broward County Natural 
                Resource Protection Code standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Regrading for Drainage Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate regrading for drainage problems throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood-Prone Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Hollywood</li>
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
                  <li>Rio Vista</li>
                  <li>Parkland</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Las Olas Boulevard</li>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Davie</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                  <li>Miramar</li>
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
            <h2 className={styles.heading}>The Regrading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed in 
              Broward County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas. Assessment includes reviewing site conditions 
                during and after rain events to understand water accumulation patterns, flood zone 
                designation, and Broward County specific conditions including high water table and storm 
                event protection requirements.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow. The plan identifies areas that need 
                elevation changes, determines the best approach for redirecting water flow, and ensures 
                compliance with Base Flood Elevation (BFE) requirements, storm event protection (100-year, 
                3-day storm event for structures; 10-year, 3-day storm event for roadways and parking 
                lots), and SFWMD Environmental Resource Permit requirements for properties in flood zones.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for regrading projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed regrading projects comply 
                with the Broward County Land Development Code and Natural Resource Protection Code. All 
                DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits for 
                regrading work including Uniform Building Permit Applications (updated November 14, 2025), 
                DER through ePermits OneStop, SFWMD Environmental Resource Permits for activities affecting 
                state waters and wetlands, Natural Resource Protection Code compliance, and coordinate 
                with regulatory agencies. Regrading projects may require permits, especially if significant 
                earthwork is involved. We coordinate with Broward County Building Code Division, SFWMD, and 
                other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work in Broward County. 
                Contractors assess drainage problems and implement effective regrading solutions, 
                including expertise with high water table conditions, flood zone requirements, and storm 
                event protection requirements.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes. This may involve adding fill material to low areas 
                or removing material to create drainage channels, accounting for Broward County&apos;s high 
                water table and coastal soil conditions.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed to meet SFWMD Environmental Resource Permit 
                requirements and Broward County Natural Resource Protection Code standards. This ensures 
                water flows to drainage points effectively and eliminates standing water.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Broward County 
                Building Code Division or municipal building departments to ensure regrading effectively 
                addresses drainage problems and that water flows properly away from structures and toward 
                drainage systems, meeting all permit conditions, engineering specifications, and storm 
                event protection requirements.
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
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems in Broward 
                  County. By adjusting site elevations and creating proper slopes, we can redirect water 
                  flow away from low-lying areas and eliminate standing water. Regrading is often combined 
                  with drainage system installation for comprehensive solutions, especially important given 
                  Broward County&apos;s heavy rainfall, high water table, and flat topography. All work must 
                  comply with SFWMD Environmental Resource Permit requirements and Broward County Natural 
                  Resource Protection Code standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for regrading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading projects in Broward County may require development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from Broward 
                  County Building Code Division, Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable projects, SFWMD Environmental Resource Permits for activities affecting 
                  state waters and wetlands, Natural Resource Protection Code compliance, and FEMA compliance 
                  permits for properties in flood zones. All DER submittals are only accepted electronically. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect regrading?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized regrading techniques. Low areas may need to be elevated above 
                  the water table, and proper drainage systems are essential to prevent water from rising 
                  to the surface. SFWMD Environmental Resource Permits are required for dewatering activities 
                  affecting state waters. This is especially important in coastal areas like Fort Lauderdale, 
                  Hollywood, and Pompano Beach where the water table is particularly high.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does regrading for drainage cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading costs in Broward County vary based on site size, extent of regrading required, 
                  flood zone considerations, and whether drainage systems need to be installed. Typical 
                  residential properties range from $20,000 to $75,000, while commercial properties can 
                  range from $50,000 to $200,000+ depending on scope. Factors affecting cost include site 
                  access, required earthwork, flood zone elevation requirements, and drainage system 
                  complexity. Projects in flood zones or requiring significant elevation adjustments often 
                  cost more. Broward County permit processing, including DER review through ePermits OneStop, 
                  can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems by creating proper slopes and redirecting 
                  water flow. However, some drainage problems in Broward County may also require 
                  drainage system installation (French drains, catch basins, swales) for comprehensive 
                  solutions, especially in flood zones or areas with high water tables. We assess your 
                  specific situation and recommend the best approach, which may include both regrading and 
                  drainage system work to meet SFWMD Environmental Resource Permit requirements and Broward 
                  County Natural Resource Protection Code standards.
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
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Fort Lauderdale Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, flood zone requirements, storm event protection, DER requirements, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, and regulatory compliance to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

