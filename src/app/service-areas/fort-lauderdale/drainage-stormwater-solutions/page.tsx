import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Drainage & Stormwater Solutions in Fort Lauderdale, FL | Broward County',
  description: 'Professional drainage and stormwater solutions in Broward County. French drains, retention ponds, stormwater systems, and flood zone drainage.',
  openGraph: {
    title: 'Drainage & Stormwater Solutions in Fort Lauderdale, FL | Broward County',
    description: 'Professional drainage and stormwater solutions in Broward County. French drains, retention ponds, stormwater systems.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/`,
  },
}

export default function FortLauderdaleDrainageStormwaterSolutionsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Drainage and Stormwater Solutions in Fort Lauderdale, FL"
        subtitle="Comprehensive drainage and stormwater management systems for flood-prone and coastal properties across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Drainage and stormwater solutions in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our drainage and stormwater solutions in Broward County serve property owners 
              experiencing flooding, standing water, or drainage problems, as well as developers and 
              builders who need stormwater management systems for new construction throughout Broward 
              County, including Fort Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with existing drainage problems on your property in Fort Lauderdale, 
              need comprehensive stormwater management for a new development in Plantation, or require 
              specialized coastal drainage solutions in Hollywood Beach, we coordinate contractors with 
              expertise in Broward County drainage requirements, Development & Environmental Review (DER), 
              Natural Resource Protection Code compliance, and SFWMD Environmental Resource Permits, including 
              storm event protection requirements (100-year, 3-day storm event for structures; 10-year, 
              3-day storm event for roadways and parking lots).
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Drainage projects in Broward County typically start around 
                <strong> $25,000</strong> for residential French drain systems and can range from 
                $50,000 to $250,000+ for comprehensive stormwater management systems, retention ponds, 
                or large-scale commercial drainage installations. Projects requiring extensive 
                dewatering, working in flood zones, or meeting storm event protection requirements often 
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
          <h2 className={styles.heading}>What Drainage and Stormwater Solutions Include in Broward County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive drainage services cover all aspects of stormwater management in Broward County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading for Drainage</h3>
              <p className={styles.serviceDescription}>
                Regrading sites to improve water flow and eliminate standing water, meeting Broward 
                County&apos;s storm event protection requirements (100-year, 3-day storm event for structures; 
                10-year, 3-day storm event for roadways and parking lots). Essential for flood-prone 
                properties in Broward County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>French Drains and Underdrain Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of French drains and subsurface drainage systems to manage high water table 
                conditions, especially important in Broward County where groundwater is often close 
                to the surface. Meets Natural Resource Protection Code and SFWMD Environmental Resource 
                Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Inlets and Piping</h3>
              <p className={styles.serviceDescription}>
                Installation of catch basins and underground stormwater piping sized for storm event 
                protection (100-year, 3-day storm event for structures; 10-year, 3-day storm event for 
                roadways and parking lots), meeting Broward County&apos;s stormwater management requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swales, Ditches and Outfalls</h3>
              <p className={styles.serviceDescription}>
                Construction of swales, ditches, and outfall structures designed for stormwater 
                management, meeting Broward County&apos;s Natural Resource Protection Code requirements and 
                SFWMD Environmental Resource Permit standards. Essential for effective stormwater conveyance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retention and Detention Basins</h3>
              <p className={styles.serviceDescription}>
                Design and construction of stormwater retention and detention basins sized for storm 
                event protection (100-year, 3-day storm event for structures; 10-year, 3-day storm 
                event for roadways and parking lots), meeting SFWMD Environmental Resource Permit 
                requirements. Essential for large-scale developments in Broward County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood-Prone and Coastal Property Drainage</h3>
              <p className={styles.serviceDescription}>
                Specialized drainage solutions for flood-prone and coastal properties, including 
                compliance with Base Flood Elevation (BFE) requirements, storm event protection, and 
                Natural Resource Protection Code standards. Essential for properties in flood zones and 
                coastal areas throughout Broward County.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Drainage Considerations</h2>
            <p className={styles.text}>
              Drainage in Broward County requires specialized knowledge of local conditions and 
              regulatory requirements. Our coordinated network of licensed contractors understands the 
              specific requirements for working in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for drainage projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Drainage projects typically 
                require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Drainage systems must be sized to handle these design 
                storms, with proper storage volumes and discharge rates to ensure adequate flood protection 
                and water quality treatment.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Drainage projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Many drainage projects require 
                permits from the South Florida Water Management District (SFWMD), especially those 
                involving land disturbance or connections to surface waters. As of June 28, 2024, new water 
                quality performance standards were implemented, requiring stormwater treatment systems to 
                achieve significant pollution reductions—including an 80 percent reduction of 
                post-development average annual total phosphorus (TP) loading and 45 percent reduction of 
                total nitrogen (TN) loading from project areas. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Three-Tier Infrastructure Framework:</strong> Broward County&apos;s stormwater 
                management system operates through a three-tier infrastructure framework: Tertiary System 
                (individual community infrastructure including drainage inlets, pipes, swales, lakes, and 
                retention areas), Secondary System (South Broward Drainage District or Central Broward 
                Water Control District infrastructure including canals, culverts, and flood control gates), 
                and Primary System (SFWMD-operated canals that receive all permitted stormwater runoff). 
                Drainage projects must integrate with this framework.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table means groundwater 
                is often within 2-3 feet of the surface, requiring subsurface drainage systems and 
                proper elevation of structures above groundwater levels. French drains and underdrain 
                systems are essential for managing high water table conditions, especially in areas like 
                Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones must have drainage 
                systems that comply with FEMA requirements and Broward County building codes, including 
                proper elevation of structures and drainage features to meet Base Flood Elevation (BFE) 
                requirements. Drainage systems must be designed to handle flood zone conditions 
                effectively, with storm event protection (100-year, 3-day storm event for structures).
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Drainage system design must account for climate resilience and sea level 
                rise considerations, ensuring long-term functionality and compliance with regulatory 
                requirements. The 2025 Climate Action Plan addresses stormwater management by 
                incorporating strategies for shared infrastructure use, improved drainage systems for heavy 
                rainfall management, and infrastructure upgrades to mitigate future flooding impacts.
              </li>
              <li>
                <strong>Drainage District Requirements:</strong> For projects in areas governed by drainage 
                districts (Central Broward Water Control District for areas east of Volunteer Road or 
                South Broward Drainage District for areas west), Paving & Drainage (P&D) Permits are 
                required. Drainage features must comply with drainage district requirements and storm event 
                protection standards. Each drainage basin operates under a surface water management permit 
                issued by the state that regulates the total storage volume within each basin and the rate 
                of discharge.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Broward County including Fort 
                Lauderdale Beach, Hollywood Beach, Pompano Beach, and Deerfield Beach face additional 
                challenges including saltwater intrusion, storm surge, and unique soil conditions that affect 
                drainage system design and materials. Specialized drainage solutions are required for coastal 
                properties.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Drainage Solution Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage project addresses the root cause and meets 
              all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Problem Assessment:</strong> We assess your drainage problems, identify water 
                sources and flow patterns, and determine the most effective solution approach specific to 
                Broward County conditions including flood zone analysis, water table assessment, and storm 
                event protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day 
                storm event for roadways and parking lots).
              </li>
              <li>
                <strong>Design and Planning:</strong> We coordinate with engineers and contractors to 
                design drainage systems that address your specific problems and meet Broward County 
                regulatory requirements, including storm event protection requirements and Natural Resource 
                Protection Code compliance. Design accounts for climate resilience and sea level rise 
                considerations (50-year planning horizon, ~2 feet projection).
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for drainage projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management, Natural Resource Protection Code 
                compliance, drainage district approvals (CBWCD or SBDD) where applicable, and coordinate 
                with regulatory agencies. All DER submittals are only accepted electronically. Permits are 
                valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in drainage installation, Natural Resource Protection Code compliance, 
                and SFWMD Environmental Resource Permit requirements in Broward County, including 
                experience with high water table conditions, flood zone requirements, storm event 
                protection, and climate resilience considerations.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including excavation, 
                pipe installation, inlet placement, and connections to outfalls or retention areas, 
                meeting Broward County requirements. Installation ensures proper water flow and stormwater 
                management, integrating with the three-tier infrastructure framework (Tertiary, Secondary, 
                Primary systems).
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, Broward 
                County Building Code Division or municipal building departments, and drainage districts 
                where applicable to ensure drainage systems meet specifications and regulatory requirements 
                including storm event protection and Natural Resource Protection Code standards. Systems 
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
                <h3 className={styles.faqQuestion}>What permits are required for drainage work in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage projects in Broward County require development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from 
                  Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for land 
                  disturbance and stormwater management, Natural Resource Protection Code compliance, and 
                  drainage district approvals (CBWCD or SBDD) where applicable. All DER submittals are 
                  only accepted electronically. Permits are valid for 180 days from the date of 
                  issuance. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires that first floor elevations of all structures within drainage 
                  districts must protect structures from a 100-year, 3-day storm event, while roadway and 
                  parking lot elevations must be protected from a 10-year, 3-day storm event. Drainage 
                  systems must be sized to handle these design storms, with proper storage volumes and 
                  discharge rates to ensure adequate flood protection and water quality treatment. These 
                  requirements ensure adequate flood protection and account for climate resilience and sea 
                  level rise considerations (50-year planning horizon with projections of approximately 2 
                  feet of sea level rise).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the three-tier infrastructure framework in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s stormwater management system operates through a three-tier 
                  infrastructure framework: Tertiary System (individual community infrastructure including 
                  drainage inlets, pipes, swales, lakes, and retention areas maintained by Homeowners 
                  Associations or local municipalities), Secondary System (South Broward Drainage 
                  District or Central Broward Water Control District infrastructure including canals, 
                  culverts, and flood control gates that convey stormwater from tertiary systems), and 
                  Primary System (SFWMD-operated canals that receive all permitted stormwater runoff and 
                  serve as the final conveyance system). Drainage projects must integrate with this 
                  framework to ensure effective stormwater management.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage installation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage installation costs in Broward County vary based on system type, size, site 
                  conditions, and regulatory requirements. Simple French drain systems typically range from 
                  $25,000 to $75,000, while comprehensive stormwater management systems can range from 
                  $100,000 to $250,000+ depending on scope, complexity, storm event protection 
                  requirements, and dewatering needs. Projects requiring extensive dewatering, working in 
                  flood zones, or meeting storm event protection requirements often cost more due to 
                  additional permit requirements (SFWMD Environmental Resource Permits) and specialized 
                  techniques. Broward County permit processing, including DER review through ePermits 
                  OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can drainage fix flooding problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, properly designed and installed drainage systems can effectively address flooding 
                  problems in Broward County by collecting and redirecting water away from structures and 
                  low-lying areas, meeting storm event protection requirements. The solution depends on 
                  the specific cause of flooding, which may include poor site grading, inadequate drainage, 
                  high groundwater levels, or flood zone conditions. Drainage systems must be designed for 
                  storm event protection (100-year, 3-day storm event for structures; 10-year, 3-day storm 
                  event for roadways and parking lots) and integrate with Broward County&apos;s three-tier 
                  infrastructure framework. Climate resilience and sea level rise considerations (50-year 
                  planning horizon, ~2 feet projection) are incorporated into design to ensure long-term 
                  functionality.
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
              Explore our specialized drainage and stormwater solutions in Broward County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/site-regrading-drainage/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Site Regrading for Drainage</h3>
                <p className={styles.subServiceDescription}>
                  Regrading sites to improve water flow and eliminate standing water in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/french-drains-underdrain-systems/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>French Drains and Underdrain Systems</h3>
                <p className={styles.subServiceDescription}>
                  Installation of French drains and subsurface drainage systems in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/stormwater-inlets-piping/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Stormwater Inlets and Piping</h3>
                <p className={styles.subServiceDescription}>
                  Installation of catch basins and underground stormwater piping in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/swales-ditches-outfalls/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales, Ditches and Outfalls</h3>
                <p className={styles.subServiceDescription}>
                  Construction of swales, ditches, and outfall structures in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/retention-detention-basins/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Basins</h3>
                <p className={styles.subServiceDescription}>
                  Design and construction of stormwater retention and detention basins in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/flood-prone-coastal-drainage/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Flood-Prone and Coastal Property Drainage</h3>
                <p className={styles.subServiceDescription}>
                  Specialized drainage solutions for flood-prone and coastal properties in Broward County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Solve Your Fort Lauderdale Drainage Problems?"
        description="Get a free quote for your drainage or stormwater management project in Broward County. We'll connect you with licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, storm event protection requirements, SFWMD Environmental Resource Permits, DER requirements, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

