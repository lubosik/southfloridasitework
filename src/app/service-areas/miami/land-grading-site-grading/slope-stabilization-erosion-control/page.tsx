import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Slope Stabilization & Erosion Control in Miami, FL | Miami-Dade',
  description: 'Grading and stabilization of slopes to prevent erosion in Miami-Dade County. Erosion control measures and proper drainage for coastal and inland properties.',
  openGraph: {
    title: 'Slope Stabilization & Erosion Control in Miami, FL | Miami-Dade',
    description: 'Grading and stabilization of slopes to prevent erosion in Miami-Dade County with proper drainage and erosion control measures.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/slope-stabilization-erosion-control/`,
  },
}

export default function MiamiSlopeStabilizationErosionControlPage() {
  return (
    <main>
      <HeroWithQuote
        title="Slope Stabilization and Erosion Control in Miami, FL"
        subtitle="Grading and stabilization of slopes to prevent erosion across Miami-Dade County, including coastal areas and waterways"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Slope stabilization and erosion control services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Slope stabilization and erosion control services in Miami-Dade County are essential for 
              property owners, developers, coastal property owners, and anyone dealing with slope erosion 
              or unstable slopes on their property in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with erosion on existing slopes in Miami Beach, need to stabilize 
              slopes after construction in Key Biscayne, or want to prevent erosion on new slopes in 
              Aventura, proper grading and erosion control measures can protect your property from soil 
              loss and slope failure. We coordinate licensed contractors with the expertise to assess slope 
              conditions and implement effective stabilization solutions, navigating Miami-Dade DERM 
              environmental protection requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Slope stabilization and erosion control projects in Miami-Dade County typically range from 
                <strong> $25,000 to $100,000</strong> for residential properties, and 
                <strong> $75,000 to $300,000+</strong> for commercial properties or large slope areas 
                depending on slope size, severity of erosion, required regrading, erosion control measures 
                needed, and coastal protection requirements. Projects involving seawalls or bulkheads may 
                cost significantly more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Slope Stabilization and Erosion Control Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing slope conditions, erosion patterns, and stability issues specific 
                to Miami-Dade County conditions. Assessment identifies areas of concern, coastal erosion 
                risks, and determines the best approach for slope stabilization and erosion control, 
                including DERM environmental protection considerations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Regrading</h3>
              <p className={styles.serviceDescription}>
                Regrading slopes to stable angles (typically 2:1 or 3:1 slope ratios) that resist erosion. 
                Steeper slopes are regraded to gentler angles that are more stable and less prone to 
                erosion, accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control Matting</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control matting, geotextiles, or turf reinforcement mats to 
                protect slopes from water erosion. Matting holds soil in place while vegetation 
                establishes and provides long-term erosion protection, essential given Miami-Dade&apos;s 
                heavy rainfall and hurricane conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of proper drainage systems to direct water away from slopes and prevent 
                water from undermining slope stability. Drainage may include swales, French drains, or 
                catch basins, meeting South Florida Water Management District (SFWMD) and Miami-Dade 
                County requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Coastal Protection Structures</h3>
              <p className={styles.serviceDescription}>
                Construction of seawalls, bulkheads, or retaining walls where slopes cannot be regraded 
                to stable angles, especially in coastal areas. Miami-Dade County has streamlined seawall 
                permit processes (90-day review periods) with minimum elevation standards of 5.7 feet 
                NAVD88 for new structures. We coordinate DERM permits for coastal protection.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Vegetation Establishment</h3>
              <p className={styles.serviceDescription}>
                Planting vegetation on stabilized slopes to provide long-term erosion protection. 
                Vegetation roots hold soil in place and reduce water runoff, providing natural erosion 
                control. Miami-Dade DERM may require native vegetation for environmental protection, 
                especially in coastal areas and near waterways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Slope Erosion Considerations</h2>
            <p className={styles.text}>
              Slope stabilization in Miami-Dade County requires specialized knowledge of local conditions 
              and erosion factors:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Coastal Erosion and Seawall Requirements:</strong> Miami-Dade County has 
                comprehensive regulations for coastal protection. New or substantially rehabilitated 
                seawalls must meet minimum elevation standards of 5.7 feet NAVD88 to address sea level 
                rise and tidal flooding. The county has streamlined seawall permit processes, reducing 
                review periods from 18-24 months to 90 days for most projects. Seawalls must be 
                substantially impermeable and effectively address both existing tidal flooding and future 
                sea level rise.
              </li>
              <li>
                <strong>DERM Environmental Protection:</strong> Miami-Dade DERM requires professional 
                documentation for seawall and slope stabilization projects in coastal areas and near 
                waterways. This includes as-built surveys prepared by professional surveyors showing 
                elevation in NAVD88, and certification by professional engineers confirming structures 
                are designed and constructed in accordance with ordinance requirements.
              </li>
              <li>
                <strong>Heavy Rainfall and Hurricane Conditions:</strong> Miami-Dade&apos;s intense 
                rainfall and hurricane conditions can cause significant erosion on slopes, especially 
                during hurricane season. Proper drainage and erosion control measures are essential to 
                protect slopes from water damage, storm surge, and wave action in coastal areas.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, can saturate slope soils, reducing 
                stability and increasing erosion risk. Proper drainage is critical to manage water table 
                effects on slopes, especially in coastal neighborhoods like Miami Beach, Aventura, and 
                Key Biscayne.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Miami-Dade face additional 
                erosion risks from salt spray, storm surge, and wave action. Slope stabilization must 
                account for coastal conditions and may require specialized erosion control measures, 
                seawalls, or nature-based solutions such as living shorelines that meet environmental 
                standards for wave absorption and habitat creation.
              </li>
              <li>
                <strong>Soil Types:</strong> Miami-Dade&apos;s sandy and limestone soils have different 
                erosion characteristics. Slope stabilization must account for soil types and may require 
                specialized erosion control measures for different soil conditions, especially in coastal 
                areas with limestone bedrock.
              </li>
              <li>
                <strong>RER and DERM Permits:</strong> Slope stabilization projects require permits from 
                Miami-Dade RER (for unincorporated areas) or municipal building departments (for 
                incorporated areas), and DERM environmental resource permits for work in coastal areas or 
                near waterways. Projects involving seawalls or significant earthwork may require 
                additional permits and professional engineering certification.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Slope Stabilization Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate slope stabilization and erosion control services throughout Miami-Dade County, 
              including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Aventura</li>
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
                <h3 className={styles.locationGroupTitle}>Properties Near Waterways</h3>
                <ul className={styles.locationItems}>
                  <li>Biscayne Bay</li>
                  <li>Miami River</li>
                  <li>Intracoastal Waterway</li>
                  <li>Canals and Lakes</li>
                  <li>Coastal Properties</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Kendall</li>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Redland</li>
                  <li>Doral</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Slope Stabilization Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your slopes are properly stabilized and protected from 
              erosion in Miami-Dade County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Slope Assessment:</strong> We evaluate your slopes to identify erosion problems, 
                stability issues, and areas of concern. Assessment includes reviewing slope angles, soil 
                conditions, drainage patterns, coastal erosion risks, and Miami-Dade County specific 
                conditions including high water table and proximity to waterways.
              </li>
              <li>
                <strong>Stabilization Design:</strong> We develop a stabilization plan that addresses 
                specific slope problems and meets Miami-Dade DERM environmental protection requirements. 
                The plan identifies required regrading, erosion control measures, drainage improvements, 
                and coastal protection structures if needed. For coastal projects, we consider nature-based 
                solutions such as living shorelines alongside traditional methods.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits for 
                slope stabilization work including Miami-Dade RER building permits (for unincorporated 
                areas) or municipal building department permits (for incorporated areas), DERM 
                environmental resource permits for work in coastal areas or near waterways, SFWMD permits 
                for stormwater management, and coordinate with regulatory agencies. Seawall projects may 
                qualify for streamlined 90-day review processes.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for slope stabilization work in Miami-Dade 
                County. Contractors assess slope conditions and implement effective stabilization solutions, 
                including expertise with coastal protection, seawall construction, and DERM requirements.
              </li>
              <li>
                <strong>Slope Regrading:</strong> Contractors regrade slopes to stable angles that resist 
                erosion. Steeper slopes are regraded to gentler angles (typically 2:1 or 3:1 ratios) that 
                are more stable, accounting for Miami-Dade&apos;s high water table and coastal soil 
                conditions.
              </li>
              <li>
                <strong>Erosion Control Installation:</strong> Erosion control measures are installed, 
                including matting, geotextiles, or other protective materials. Drainage systems are 
                installed to direct water away from slopes, meeting SFWMD and Miami-Dade County 
                requirements. For coastal properties, seawalls or bulkheads may be constructed to meet 
                minimum elevation standards of 5.7 feet NAVD88.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Miami-Dade RER or 
                municipal building departments, DERM (for coastal projects), and engineers to ensure 
                slopes are properly stabilized and that erosion control measures are effectively protecting 
                slopes from water damage. Professional certification may be required for seawall projects.
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
                <h3 className={styles.faqQuestion}>What causes slope erosion in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Slope erosion in Miami-Dade County is caused by heavy rainfall, high water tables, 
                  coastal conditions, hurricane conditions, and steep slope angles. Intense rainfall 
                  during hurricane season can cause significant erosion, especially on slopes without 
                  proper drainage or erosion control. High water tables can saturate slope soils, reducing 
                  stability. Coastal properties face additional risks from salt spray, storm surge, and 
                  wave action.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Miami-Dade County seawall requirements for coastal properties?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County has streamlined seawall permit processes with 90-day review periods 
                  for most projects. New or substantially rehabilitated seawalls must meet minimum 
                  elevation standards of 5.7 feet NAVD88 to address sea level rise and tidal flooding. 
                  Seawalls must be substantially impermeable and effectively address both existing tidal 
                  flooding and future sea level rise. DERM requires professional documentation including 
                  as-built surveys and engineering certification. We coordinate all DERM permits and 
                  requirements for coastal protection projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope angle is stable in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Stable slope angles in Miami-Dade County typically range from 2:1 (2 feet horizontal 
                  to 1 foot vertical) to 3:1 (3 feet horizontal to 1 foot vertical) depending on soil 
                  conditions. Steeper slopes are more prone to erosion and may require retaining walls, 
                  seawalls, or specialized erosion control measures. Proper drainage is essential for 
                  slope stability regardless of angle, especially given Miami-Dade&apos;s high water table 
                  and heavy rainfall.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for slope stabilization in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Slope stabilization projects in Miami-Dade County require building permits from Miami-Dade 
                  RER (for unincorporated areas) or municipal building departments (for incorporated areas), 
                  especially if retaining walls or significant earthwork is involved. Projects in coastal 
                  areas or near waterways require DERM environmental resource permits. Seawall projects 
                  may qualify for streamlined 90-day review processes. Projects involving stormwater 
                  management may require SFWMD permits. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does slope stabilization cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Slope stabilization costs in Miami-Dade County vary based on slope size, severity of 
                  erosion, required regrading, erosion control measures needed, and coastal protection 
                  requirements. Typical residential properties range from $25,000 to $100,000, while 
                  commercial properties or large slope areas can range from $75,000 to $300,000+ depending 
                  on scope. Projects involving seawalls or bulkheads may cost significantly more due to 
                  elevation requirements (5.7 feet NAVD88 minimum) and DERM permit requirements. Factors 
                  affecting cost include slope access, required earthwork, coastal protection needs, and 
                  erosion control complexity.
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
              <a href="/services/land-grading-site-grading/slope-stabilization-erosion-control/" className={styles.backLink}>
                ← View Slope Stabilization and Erosion Control (All Areas)
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
        title="Ready to Stabilize Your Miami Slopes?"
        description="Get a free quote for slope stabilization and erosion control in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade DERM requirements, coastal protection standards, and regulatory compliance to protect your slopes from erosion."
        showPhone={true}
      />
    </main>
  )
}

