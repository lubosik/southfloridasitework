import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Drainage & Stormwater Solutions in West Palm Beach, FL | Palm Beach County',
  description: 'Professional drainage and stormwater solutions in Palm Beach County. French drains, retention ponds, stormwater systems, and flood zone drainage.',
  openGraph: {
    title: 'Drainage & Stormwater Solutions in West Palm Beach, FL | Palm Beach County',
    description: 'Professional drainage and stormwater solutions in Palm Beach County. French drains, retention ponds, stormwater systems.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/`,
  },
}

export default function WestPalmBeachDrainageStormwaterSolutionsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Drainage and Stormwater Solutions in West Palm Beach, FL"
        subtitle="Comprehensive drainage and stormwater management systems for flood-prone and coastal properties across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Drainage and stormwater solutions in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our drainage and stormwater solutions in Palm Beach County serve property owners 
              experiencing flooding, standing water, or drainage problems, as well as developers and 
              builders who need stormwater management systems for new construction throughout Palm Beach 
              County, including West Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with existing drainage problems on your property in Palm Beach, 
              need comprehensive stormwater management for a new development in Royal Palm Beach, or require 
              specialized coastal drainage solutions in Jupiter, we coordinate contractors with 
              expertise in Palm Beach County drainage requirements, Building Division permits, 
              Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) 
              compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Drainage projects in Palm Beach County typically start around 
                <strong> $25,000</strong> for residential French drain systems and can range from 
                $50,000 to $250,000+ for comprehensive stormwater management systems, retention ponds, 
                or large-scale commercial drainage installations. Projects requiring extensive 
                dewatering, working in flood zones, or meeting regulatory requirements often 
                cost more due to additional permit requirements and specialized techniques. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Drainage and Stormwater Solutions Include in Palm Beach County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive drainage services cover all aspects of stormwater management in Palm Beach County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading for Drainage</h3>
              <p className={styles.serviceDescription}>
                Regrading sites to improve water flow and eliminate standing water, meeting Palm Beach 
                County&apos;s stormwater management requirements. Essential for flood-prone 
                properties in Palm Beach County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>French Drains and Underdrain Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of French drains and subsurface drainage systems to manage high water table 
                conditions, especially important in Palm Beach County where groundwater is often close 
                to the surface. Meets Unified Land Development Code (ULDC) and SFWMD Environmental Resource 
                Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Inlets and Piping</h3>
              <p className={styles.serviceDescription}>
                Installation of catch basins and underground stormwater piping sized for stormwater 
                management, meeting Palm Beach County&apos;s stormwater management requirements and 
                Unified Land Development Code (ULDC) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swales, Ditches and Outfalls</h3>
              <p className={styles.serviceDescription}>
                Construction of swales, ditches, and outfall structures designed for stormwater 
                management, meeting Palm Beach County&apos;s Unified Land Development Code (ULDC) requirements and 
                SFWMD Environmental Resource Permit standards. Essential for effective stormwater conveyance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retention and Detention Basins</h3>
              <p className={styles.serviceDescription}>
                Design and construction of stormwater retention and detention basins sized for stormwater 
                management, meeting SFWMD Environmental Resource Permit 
                requirements. Essential for large-scale developments in Palm Beach County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood-Prone and Coastal Property Drainage</h3>
              <p className={styles.serviceDescription}>
                Specialized drainage solutions for flood-prone and coastal properties, including 
                compliance with Base Flood Elevation (BFE) requirements and 
                Unified Land Development Code (ULDC) standards. Essential for properties in flood zones and 
                coastal areas throughout Palm Beach County.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Drainage Considerations</h2>
            <p className={styles.text}>
              Drainage in Palm Beach County requires specialized knowledge of local conditions and 
              regulatory requirements. Our coordinated network of licensed contractors understands the 
              specific requirements for working in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for drainage projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Drainage projects require Building Division 
                permits from Palm Beach County Building Division. Building permits must be obtained before 
                beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Drainage projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Drainage projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Many drainage projects require 
                permits from the South Florida Water Management District (SFWMD), especially those 
                involving land disturbance or connections to surface waters. As of June 28, 2024, new water 
                quality performance standards were implemented, requiring stormwater treatment systems to 
                achieve significant pollution reductions. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table means groundwater 
                is often within 2-3 feet of the surface, requiring subsurface drainage systems and 
                proper elevation of structures above groundwater levels. French drains and underdrain 
                systems are essential for managing high water table conditions, especially in areas like 
                Palm Beach, Jupiter, and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones must have drainage 
                systems that comply with FEMA requirements and Palm Beach County building codes, including 
                proper elevation of structures and drainage features to meet Base Flood Elevation (BFE) 
                requirements. Drainage systems must be designed to handle flood zone conditions 
                effectively.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Drainage system design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Palm Beach County including Palm 
                Beach, Jupiter, Juno Beach, and Tequesta face additional 
                challenges including saltwater intrusion, storm surge, and unique soil conditions that affect 
                drainage system design and materials. Specialized drainage solutions are required for coastal 
                properties.
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
            <h2 className={styles.heading}>The Drainage Solution Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage project addresses the root cause and meets 
              all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Problem Assessment:</strong> We assess your drainage problems, identify water 
                sources and flow patterns, and determine the most effective solution approach specific to 
                Palm Beach County conditions including flood zone analysis, water table assessment, and 
                regulatory requirements.
              </li>
              <li>
                <strong>Design and Planning:</strong> We coordinate with engineers and contractors to 
                design drainage systems that address your specific problems and meet Palm Beach County 
                regulatory requirements, including Unified Land Development Code (ULDC) compliance. Design 
                accounts for hurricane preparedness and coastal conditions.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for drainage projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management, Unified Land Development Code (ULDC) 
                compliance, and coordinate with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in drainage installation, Unified Land Development Code (ULDC) compliance, 
                and SFWMD Environmental Resource Permit requirements in Palm Beach County, including 
                experience with high water table conditions, flood zone requirements, and hurricane 
                preparedness.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including excavation, 
                pipe installation, inlet placement, and connections to outfalls or retention areas, 
                meeting Palm Beach County requirements. Installation ensures proper water flow and stormwater 
                management.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, Palm Beach 
                County Building Division or municipal building departments, and Environmental Resources 
                Management (ERM) where applicable to ensure drainage systems meet specifications and regulatory requirements 
                including Unified Land Development Code (ULDC) standards. Systems 
                are ready for operation after final approval.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for drainage work in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage projects in Palm Beach County require development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for land 
                  disturbance and stormwater management, Unified Land Development Code (ULDC) compliance, and 
                  FEMA compliance permits for properties in flood zones. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage installation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage installation costs in Palm Beach County vary based on system type, size, site 
                  conditions, and regulatory requirements. Simple French drain systems typically range from 
                  $25,000 to $75,000, while comprehensive stormwater management systems can range from 
                  $100,000 to $250,000+ depending on scope, complexity, and dewatering needs. Projects requiring extensive dewatering, working in 
                  flood zones, or meeting regulatory requirements often cost more due to 
                  additional permit requirements (SFWMD Environmental Resource Permits) and specialized 
                  techniques. Palm Beach County permit processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can drainage fix flooding problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, properly designed and installed drainage systems can effectively address flooding 
                  problems in Palm Beach County by collecting and redirecting water away from structures and 
                  low-lying areas. The solution depends on 
                  the specific cause of flooding, which may include poor site grading, inadequate drainage, 
                  high groundwater levels, or flood zone conditions. Drainage systems must be designed to 
                  integrate with Palm Beach County&apos;s stormwater management requirements and comply with 
                  Unified Land Development Code (ULDC) standards. Hurricane preparedness considerations are 
                  incorporated into design to ensure long-term functionality.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect drainage?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized drainage solutions including French drains and underdrain 
                  systems to manage groundwater. High water table conditions affect drainage system design 
                  and may require deeper installation or dewatering during construction. SFWMD Environmental 
                  Resource Permits are required for dewatering activities affecting state waters. This is 
                  especially important in areas like Palm Beach, Jupiter, and coastal neighborhoods where 
                  the water table is particularly high.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about hurricane preparedness for drainage systems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s location makes it vulnerable to hurricanes and tropical storms. Drainage 
                  system design must account for hurricane-force winds, storm surge, and heavy rainfall, 
                  ensuring long-term functionality and compliance with regulatory requirements. Erosion 
                  control measures, proper slope construction, and outfall design are critical for hurricane 
                  resilience. We coordinate drainage system construction that meets these requirements and 
                  enhances property resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized drainage and stormwater solutions in Palm Beach County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/site-regrading-drainage/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Site Regrading for Drainage</h3>
                <p className={styles.subServiceDescription}>
                  Regrading sites to improve water flow and eliminate standing water in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/french-drains-underdrain-systems/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>French Drains and Underdrain Systems</h3>
                <p className={styles.subServiceDescription}>
                  Installation of French drains and subsurface drainage systems in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/stormwater-inlets-piping/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Stormwater Inlets and Piping</h3>
                <p className={styles.subServiceDescription}>
                  Installation of catch basins and underground stormwater piping in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/swales-ditches-outfalls/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales, Ditches and Outfalls</h3>
                <p className={styles.subServiceDescription}>
                  Construction of swales, ditches, and outfall structures in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/retention-detention-basins/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Basins</h3>
                <p className={styles.subServiceDescription}>
                  Design and construction of stormwater retention and detention basins in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/flood-prone-coastal-drainage/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Flood-Prone and Coastal Property Drainage</h3>
                <p className={styles.subServiceDescription}>
                  Specialized drainage solutions for flood-prone and coastal properties in Palm Beach County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Solve Your West Palm Beach Drainage Problems?"
        description="Get a free quote for your drainage or stormwater management project in Palm Beach County. We'll connect you with licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

