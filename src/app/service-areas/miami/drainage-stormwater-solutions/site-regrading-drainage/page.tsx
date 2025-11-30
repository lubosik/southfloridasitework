import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Regrading for Drainage in Miami, FL | Miami-Dade County',
  description: 'Site regrading to fix drainage problems and eliminate standing water in Miami-Dade County. Redirect water flow away from structures.',
  openGraph: {
    title: 'Site Regrading for Drainage in Miami, FL | Miami-Dade County',
    description: 'Site regrading to fix drainage problems and eliminate standing water in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/site-regrading-drainage/`,
  },
}

export default function MiamiSiteRegradingDrainagePage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Regrading for Drainage in Miami, FL"
        subtitle="Site regrading to fix existing drainage problems, eliminate standing water, and redirect water flow away from structures and low-lying areas across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site regrading for drainage problems in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Site regrading for drainage in Miami-Dade County is essential for property owners, 
              homeowners, commercial property managers, and anyone experiencing standing water, 
              flooding, or water damage due to poor site grading in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain in Miami Beach, water pooling 
              around your foundation in Coral Gables, or flooding in low-lying areas in Aventura, site 
              regrading can redirect water flow and eliminate drainage problems. We coordinate contractors 
              with expertise in Miami-Dade County drainage requirements, DERM regulations, FPLOS/WQLOS 
              standards, and the 25-year, 72-hour storm event design criteria to implement effective 
              regrading solutions that meet county requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Site regrading for drainage in Miami-Dade County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $50,000 to $200,000+</strong> for commercial properties depending on site size, 
                extent of regrading required, flood zone considerations, FPLOS/WQLOS compliance needs, 
                and whether drainage systems need to be installed or upgraded. Projects requiring 
                significant fill material to meet County Flood Criteria Map elevations or Base Flood 
                Elevation (BFE) requirements often cost more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Regrading for Drainage Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing site conditions, water flow patterns, and drainage problems 
                specific to Miami-Dade County conditions including flood zone analysis, high water table 
                assessment, and FPLOS/WQLOS requirements. Assessment identifies low-lying areas, water 
                accumulation points, and determines the best regrading approach to redirect water flow 
                while meeting county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading</h3>
              <p className={styles.serviceDescription}>
                Earthmoving to adjust site elevations and create proper slopes that direct water away 
                from structures and toward drainage points, meeting Miami-Dade County Flood Criteria 
                Map requirements. Regrading eliminates low spots where water accumulates and creates 
                positive drainage flow, with elevations that may need to match existing road elevations 
                as required by county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Creation</h3>
              <p className={styles.serviceDescription}>
                Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                structures and toward drainage systems, meeting Miami-Dade County requirements. Proper 
                slopes prevent water from pooling and ensure effective drainage, especially important 
                given Miami-Dade&apos;s high water table and frequent heavy rains.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
              <p className={styles.serviceDescription}>
                Filling or regrading low-lying areas where water accumulates, meeting Miami-Dade County 
                Flood Criteria Map requirements and Base Flood Elevation (BFE) compliance where applicable. 
                Low spots are eliminated by adding fill material and creating proper drainage slopes to 
                prevent standing water, with elevations that may need to exceed minimum flood criteria to 
                accommodate stormwater drainage systems.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
              <p className={styles.serviceDescription}>
                Coordinating regrading with drainage system installation or upgrades, ensuring systems 
                meet the 25-year, 72-hour storm event design criteria and FPLOS/WQLOS standards. 
                Regrading ensures water flows to drainage inlets, swales, or retention areas effectively, 
                with priority on on-site retention and groundwater recharge as required by Miami-Dade 
                County. May include installation of French drains, catch basins, or swales.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
              <p className={styles.serviceDescription}>
                Final grading to achieve proper elevations and slopes meeting Miami-Dade County Flood 
                Criteria Map requirements, with proper compaction to prevent settlement, especially 
                important given Miami-Dade&apos;s high water table. Final grading ensures regraded areas 
                maintain proper drainage and don&apos;t settle over time, meeting county standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Drainage Regrading Considerations</h2>
            <p className={styles.text}>
              Site regrading for drainage in Miami-Dade County requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Department of Environmental 
                Resources Management) serves as the primary reviewing authority for drainage permits in 
                Miami-Dade County. Site regrading that involves drainage modifications requires DERM 
                Plan Review Approval for projects requiring Miami-Dade Review under Chapter 24. DERM 
                requires comprehensive hydraulic modeling, water quality analyses, and demonstration of 
                compliance with both FPLOS and WQLOS standards.
              </li>
              <li>
                <strong>25-Year, 72-Hour Storm Minimum Design Requirement:</strong> Miami-Dade County 
                requires developers to design stormwater systems for the 25-year, 72-hour storm minimum 
                as the baseline design event. Site regrading must be coordinated with drainage systems 
                sized for this design storm, with proper storage volumes and discharge rates to meet both 
                Flood Protection Level of Service (FPLOS) and Water Quality Level of Service (WQLOS) 
                standards.
              </li>
              <li>
                <strong>FPLOS and WQLOS Standards:</strong> Miami-Dade County&apos;s stormwater management 
                standards contain two critical components. FPLOS addresses flood risk mitigation and 
                ensures that developments do not exacerbate flooding conditions on adjacent properties or 
                public rights-of-way. WQLOS requires strict pollutant loading calculations and water 
                quality protection measures. Site regrading projects must comply with both components.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach emphasizes on-site retention with groundwater recharge, rather than detention 
                and controlled discharge. Site regrading should be designed to encourage water 
                infiltration into the aquifer rather than rapid removal from the site, supporting aquifer 
                recharge and reducing stress on the county&apos;s stormwater infrastructure.
              </li>
              <li>
                <strong>County Flood Criteria Map Requirements:</strong> The County Flood Criteria Map 
                requires that lands be filled, graded, and harmonized to match existing road elevations 
                as needed. Site regrading projects must account for these requirements, which may mandate 
                elevations higher than the minimum flood criteria to accommodate stormwater drainage 
                systems. All stormwater infrastructure must be designed to prevent negative impacts on 
                adjacent properties.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be within 
                2-3 feet of the surface in many areas, affects regrading operations and requires proper 
                compaction to prevent settlement. Regrading must account for high water table conditions, 
                especially in areas like Miami Beach, Aventura, and coastal neighborhoods where the 
                water table is particularly high.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones (AE, VE, AH, AO) must 
                have regrading that complies with FEMA requirements and Miami-Dade building codes, 
                including proper elevation of structures and drainage features to meet Base Flood 
                Elevation (BFE) requirements. Regrading in flood zones may require significant fill 
                material to achieve proper elevations.
              </li>
              <li>
                <strong>Impervious Surface Regulations:</strong> Miami-Dade County has implemented 
                ordinances addressing impervious surfaces and paving regulations, with permits required 
                for new paving installations (effective March 31, 2025). Site regrading must account for 
                impervious surface area in the watershed and ensure proper stormwater drainage within 
                properties.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Site Regrading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate site regrading for drainage throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood-Prone Areas</h3>
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
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Hialeah</li>
                  <li>Miami Lakes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Regrading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed and meet 
              all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas specific to Miami-Dade County conditions 
                including flood zone analysis, high water table assessment, and FPLOS/WQLOS requirements. 
                Assessment includes reviewing site conditions during and after rain events to understand 
                water accumulation patterns.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow, meeting the 25-year, 72-hour storm 
                event design criteria and FPLOS/WQLOS standards. The plan identifies areas that need 
                elevation changes and determines the best approach for redirecting water flow, with priority 
                on on-site retention and groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), RER building permits, impervious surface permits where applicable, and 
                coordinate with regulatory agencies. Regrading projects may require permits, especially 
                if significant earthwork is involved or if work is in flood zones.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work in Miami-Dade County, 
                including expertise with high water table conditions, flood zone requirements, and 
                FPLOS/WQLOS standards. Contractors assess drainage problems and implement effective 
                regrading solutions.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes, meeting Miami-Dade County Flood Criteria Map 
                requirements. This may involve adding fill material to low areas or removing material to 
                create drainage channels, with elevations that may need to match existing road elevations 
                as required by county standards.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed, ensuring systems meet the 25-year, 72-hour 
                storm event design criteria and FPLOS/WQLOS standards. This ensures water flows to drainage 
                points effectively and eliminates standing water, with priority on on-site retention and 
                groundwater recharge.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with DERM, RER, or 
                municipal building departments to ensure regrading effectively addresses drainage problems 
                and that water flows properly away from structures and toward drainage systems, meeting 
                FPLOS and WQLOS standards. Systems are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for site regrading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Site regrading projects in Miami-Dade County may require DERM Plan Review Approval 
                  for projects requiring Miami-Dade Review under Chapter 24, especially if drainage 
                  modifications are involved. RER building permits may be required for significant 
                  earthwork. Projects in flood zones or involving stormwater management may require 
                  additional permits. Impervious surface permits are required for new paving installations 
                  (effective March 31, 2025). We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems in 
                  Miami-Dade County. By adjusting site elevations and creating proper slopes, we can 
                  redirect water flow away from low-lying areas and eliminate standing water, meeting 
                  FPLOS and WQLOS standards. Regrading is often combined with drainage system 
                  installation for comprehensive solutions that meet the 25-year, 72-hour storm event 
                  design criteria.
                </p>
              </div>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestion}>How does the County Flood Criteria Map affect regrading?</h3>
                <p className={styles.faqAnswer}>
                  The County Flood Criteria Map requires that lands be filled, graded, and harmonized 
                  to match existing road elevations as needed. Site regrading projects must account for 
                  these requirements, which may mandate elevations higher than the minimum flood 
                  criteria to accommodate stormwater drainage systems. All stormwater infrastructure must 
                  be designed to prevent negative impacts on adjacent properties. This often requires 
                  significant fill material to achieve proper elevations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does site regrading for drainage cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Site regrading costs in Miami-Dade County vary based on site size, extent of regrading 
                  required, flood zone considerations, FPLOS/WQLOS compliance needs, and whether 
                  drainage systems need to be installed. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties can range from $50,000 to $200,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  drainage system complexity, and permit requirements. Projects requiring significant fill 
                  material to meet County Flood Criteria Map elevations or Base Flood Elevation (BFE) 
                  requirements often cost more.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems in Miami-Dade County by creating proper 
                  slopes and redirecting water flow, meeting FPLOS and WQLOS standards. However, some 
                  drainage problems may also require drainage system installation (French drains, catch 
                  basins, swales) for comprehensive solutions that meet the 25-year, 72-hour storm event 
                  design criteria. We assess your specific situation and recommend the best approach, 
                  which may include both regrading and drainage system work, with priority on on-site 
                  retention and groundwater recharge as required by Miami-Dade County.
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
              <a href="/service-areas/miami/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Miami Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Miami Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, 25-year storm event design criteria, FPLOS/WQLOS standards, and County Flood Criteria Map compliance to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

