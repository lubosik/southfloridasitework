import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Slope Stabilization & Erosion Control in Fort Lauderdale, FL | Broward County',
  description: 'Grading and stabilization of slopes to prevent erosion in Broward County. Erosion control measures and proper drainage for coastal and inland properties.',
  openGraph: {
    title: 'Slope Stabilization & Erosion Control in Fort Lauderdale, FL | Broward County',
    description: 'Grading and stabilization of slopes to prevent erosion in Broward County with proper drainage and erosion control measures.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/slope-stabilization-erosion-control/`,
  },
}

export default function FortLauderdaleSlopeStabilizationErosionControlPage() {
  return (
    <main>
      <HeroWithQuote
        title="Slope Stabilization and Erosion Control in Fort Lauderdale, FL"
        subtitle="Grading and stabilization of slopes to prevent erosion across Broward County, including coastal areas and waterways"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Slope stabilization and erosion control services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Slope stabilization and erosion control services in Broward County are essential for 
              property owners, developers, coastal property owners, and anyone dealing with slope erosion 
              or unstable slopes on their property throughout Broward County, including Fort Lauderdale, 
              Hollywood, Pompano Beach, and other coastal communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with erosion on existing slopes in Fort Lauderdale, need to stabilize 
              slopes after construction in Hollywood, or want to prevent erosion on new slopes in Pompano 
              Beach, proper grading and erosion control measures can protect your property from soil 
              loss and slope failure. We coordinate licensed contractors with the expertise to assess slope 
              conditions and implement effective stabilization solutions, navigating Broward County Building 
              Code Division, Development & Environmental Review (DER), Natural Resource Protection Code 
              compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Slope stabilization and erosion control projects in Broward County typically range from 
                <strong> $25,000 to $100,000</strong> for residential properties, and 
                <strong> $75,000 to $300,000+</strong> for commercial properties or large slope areas 
                depending on slope size, severity of erosion, required regrading, erosion control measures 
                needed, and coastal protection requirements. Projects involving seawalls or bulkheads may 
                cost significantly more. Projects involving development work as described in Florida Statute 
                380.04 require a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Slope Stabilization and Erosion Control Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Assessment</h3>
              <p className={styles.serviceDescription}>
                Evaluation of existing slope conditions, erosion patterns, and stability issues specific 
                to Broward County conditions. Assessment identifies areas of concern, coastal erosion 
                risks, and determines the best approach for slope stabilization and erosion control, 
                including Natural Resource Protection Code compliance and SFWMD Environmental Resource 
                Permit considerations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Regrading</h3>
              <p className={styles.serviceDescription}>
                Regrading slopes to stable angles (typically 2:1 or 3:1 slope ratios) that resist erosion 
                throughout Broward County. Steeper slopes are regraded to gentler angles that are more stable 
                and less prone to erosion, accounting for Broward County&apos;s high water table and coastal 
                soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control Matting</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control matting, geotextiles, or turf reinforcement mats to 
                protect slopes from water erosion throughout Broward County. Matting holds soil in place 
                while vegetation establishes and provides long-term erosion protection, essential given 
                Broward County&apos;s heavy rainfall and hurricane conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of proper drainage systems to direct water away from slopes and prevent 
                water from undermining slope stability throughout Broward County. Drainage may include 
                swales, French drains, or catch basins, meeting SFWMD Environmental Resource Permit 
                requirements and Broward County Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Coastal Protection Structures</h3>
              <p className={styles.serviceDescription}>
                Construction of seawalls, bulkheads, or retaining walls where slopes cannot be regraded 
                to stable angles, especially in coastal areas throughout Broward County. Coastal protection 
                structures must meet elevation and seawall compliance certifications for waterfront 
                properties, with first floor elevations protected from a 100-year, 3-day storm event. We 
                coordinate SFWMD Environmental Resource Permits for coastal protection.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Vegetation Establishment</h3>
              <p className={styles.serviceDescription}>
                Planting vegetation on stabilized slopes to provide long-term erosion protection throughout 
                Broward County. Vegetation roots hold soil in place and reduce water runoff, providing 
                natural erosion control. Broward County Natural Resource Protection Code may require native 
                vegetation for environmental protection, especially in coastal areas and near waterways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Slope Erosion Considerations</h2>
            <p className={styles.text}>
              Slope stabilization in Broward County requires specialized knowledge of local conditions 
              and erosion factors:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Coastal Erosion and Seawall Requirements:</strong> Broward County requires elevation 
                and seawall compliance certifications for waterfront properties. First floor elevations of 
                all structures must be protected from a 100-year, 3-day storm event. Coastal protection 
                structures must meet these requirements and may require specialized permits and engineering 
                certification. We coordinate SFWMD Environmental Resource Permits for coastal protection 
                projects.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including coastal areas and near 
                waterways. Slope stabilization projects must comply with these requirements, and may require 
                professional documentation including as-built surveys and engineering certification.
              </li>
              <li>
                <strong>Heavy Rainfall and Hurricane Conditions:</strong> Broward County&apos;s intense 
                rainfall and hurricane conditions can cause significant erosion on slopes, especially 
                during hurricane season. Proper drainage and erosion control measures are essential to 
                protect slopes from water damage, storm surge, and wave action in coastal areas.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, can saturate slope soils, reducing 
                stability and increasing erosion risk. Proper drainage is critical to manage water table 
                effects on slopes, especially in coastal neighborhoods like Fort Lauderdale, Hollywood, and 
                Pompano Beach. SFWMD Environmental Resource Permits are required for dewatering activities 
                affecting state waters.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Broward County face additional 
                erosion risks from salt spray, storm surge, and wave action. Slope stabilization must 
                account for coastal conditions and may require specialized erosion control measures, 
                seawalls, or nature-based solutions such as living shorelines that meet environmental 
                standards for wave absorption and habitat creation.
              </li>
              <li>
                <strong>Soil Types:</strong> Broward County&apos;s sandy and limestone soils have different 
                erosion characteristics. Slope stabilization must account for soil types and may require 
                specialized erosion control measures for different soil conditions, especially in coastal 
                areas with limestone bedrock.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Slope stabilization projects 
                typically require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed projects comply with the 
                Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Slope stabilization projects affecting 
                state waters and wetlands require SFWMD Environmental Resource Permits. As of June 28, 2024, 
                new water quality performance standards were implemented. Projects in coastal areas or near 
                waterways may require additional permits and professional engineering certification.
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
            <h2 className={styles.heading}>Broward County Slope Stabilization Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate slope stabilization and erosion control services throughout Broward County, 
              including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront Areas</h3>
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
                <h3 className={styles.locationGroupTitle}>Properties Near Waterways</h3>
                <ul className={styles.locationItems}>
                  <li>Intracoastal Waterway</li>
                  <li>New River</li>
                  <li>Hillsboro Canal</li>
                  <li>Canals and Lakes</li>
                  <li>Coastal Properties</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                  <li>Davie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Slope Stabilization Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your slopes are properly stabilized and protected from 
              erosion in Broward County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Slope Assessment:</strong> We evaluate your slopes to identify erosion problems, 
                stability issues, and areas of concern. Assessment includes reviewing slope angles, soil 
                conditions, drainage patterns, coastal erosion risks, and Broward County specific 
                conditions including high water table and proximity to waterways.
              </li>
              <li>
                <strong>Stabilization Design:</strong> We develop a stabilization plan that addresses 
                specific slope problems and meets Broward County Natural Resource Protection Code compliance 
                and SFWMD Environmental Resource Permit requirements. The plan identifies required regrading, 
                erosion control measures, drainage improvements, and coastal protection structures if needed. 
                For coastal projects, we consider nature-based solutions such as living shorelines alongside 
                traditional methods.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for slope stabilization projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed slope stabilization projects 
                comply with the Broward County Land Development Code and Natural Resource Protection Code. 
                All DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits for 
                slope stabilization work including Uniform Building Permit Applications (updated November 14, 
                2025), DER through ePermits OneStop, SFWMD Environmental Resource Permits for activities 
                affecting state waters and wetlands, Natural Resource Protection Code compliance, and 
                coordinate with regulatory agencies. We coordinate with Broward County Building Code 
                Division, SFWMD, and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for slope stabilization work in Broward County. 
                Contractors assess slope conditions and implement effective stabilization solutions, 
                including expertise with coastal protection, seawall construction, and Natural Resource 
                Protection Code requirements.
              </li>
              <li>
                <strong>Slope Regrading:</strong> Contractors regrade slopes to stable angles that resist 
                erosion. Steeper slopes are regraded to gentler angles (typically 2:1 or 3:1 ratios) that 
                are more stable, accounting for Broward County&apos;s high water table and coastal soil 
                conditions.
              </li>
              <li>
                <strong>Erosion Control Installation:</strong> Erosion control measures are installed, 
                including matting, geotextiles, or other protective materials. Drainage systems are 
                installed to direct water away from slopes, meeting SFWMD Environmental Resource Permit 
                requirements and Broward County Natural Resource Protection Code standards. For coastal 
                properties, seawalls or bulkheads may be constructed to meet elevation and seawall 
                compliance certifications with first floor elevations protected from a 100-year, 3-day 
                storm event.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with Broward County 
                Building Code Division or municipal building departments, SFWMD (for projects affecting 
                state waters), and engineers to ensure slopes are properly stabilized and that erosion 
                control measures are effectively protecting slopes from water damage. Professional 
                certification may be required for seawall projects.
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
                <h3 className={styles.faqQuestion}>What causes slope erosion in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Slope erosion in Broward County is caused by heavy rainfall, high water tables, 
                  coastal conditions, hurricane conditions, and steep slope angles. Intense rainfall 
                  during hurricane season can cause significant erosion, especially on slopes without 
                  proper drainage or erosion control. High water tables can saturate slope soils, reducing 
                  stability. Coastal properties face additional risks from salt spray, storm surge, and 
                  wave action. Proper drainage and erosion control measures are essential to protect slopes, 
                  meeting SFWMD Environmental Resource Permit requirements and Broward County Natural 
                  Resource Protection Code standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Broward County seawall requirements for coastal properties?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires elevation and seawall compliance certifications for waterfront 
                  properties. First floor elevations of all structures must be protected from a 100-year, 
                  3-day storm event. Coastal protection structures must meet these requirements and may 
                  require specialized permits and engineering certification. SFWMD Environmental Resource 
                  Permits are required for coastal protection projects affecting state waters. We coordinate 
                  all permits and requirements for coastal protection projects, ensuring compliance with 
                  Natural Resource Protection Code standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope angle is stable in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Stable slope angles in Broward County typically range from 2:1 (2 feet horizontal 
                  to 1 foot vertical) to 3:1 (3 feet horizontal to 1 foot vertical) depending on soil 
                  conditions. Steeper slopes are more prone to erosion and may require retaining walls, 
                  seawalls, or specialized erosion control measures. Proper drainage is essential for 
                  slope stability regardless of angle, especially given Broward County&apos;s high water table 
                  and heavy rainfall. All drainage work must comply with SFWMD Environmental Resource 
                  Permit requirements and Broward County Natural Resource Protection Code standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for slope stabilization in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Slope stabilization projects in Broward County require development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Uniform Building Permit Applications 
                  from Broward County Building Code Division, Development & Environmental Review (DER) 
                  through ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits 
                  for activities affecting state waters and wetlands, and Natural Resource Protection Code 
                  compliance. All DER submittals are only accepted electronically. Projects involving 
                  stormwater management may require additional SFWMD permits. We help identify and coordinate 
                  all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does slope stabilization cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Slope stabilization costs in Broward County vary based on slope size, severity of 
                  erosion, required regrading, erosion control measures needed, and coastal protection 
                  requirements. Typical residential properties range from $25,000 to $100,000, while 
                  commercial properties or large slope areas can range from $75,000 to $300,000+ depending 
                  on scope. Projects involving seawalls or bulkheads may cost significantly more due to 
                  elevation requirements (100-year, 3-day storm event protection for first floor elevations) 
                  and SFWMD Environmental Resource Permit requirements. Factors affecting cost include slope 
                  access, required earthwork, coastal protection needs, and erosion control complexity. 
                  Broward County permit processing, including DER review through ePermits OneStop, can add 
                  time and costs.
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
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Stabilize Your Fort Lauderdale Slopes?"
        description="Get a free quote for slope stabilization and erosion control in Broward County. We'll coordinate licensed contractors experienced in Broward County Building Code Division requirements, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, coastal protection standards, storm event protection requirements, and regulatory compliance to protect your slopes from erosion."
        showPhone={true}
      />
    </main>
  )
}

