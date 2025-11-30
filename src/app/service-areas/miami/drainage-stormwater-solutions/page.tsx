import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Drainage & Stormwater Solutions in Miami, FL | Miami-Dade County',
  description: 'Professional drainage and stormwater solutions in Miami-Dade County. French drains, retention ponds, stormwater systems, and flood zone drainage.',
  openGraph: {
    title: 'Drainage & Stormwater Solutions in Miami, FL | Miami-Dade County',
    description: 'Professional drainage and stormwater solutions in Miami-Dade County. French drains, retention ponds, stormwater systems.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/`,
  },
}

export default function MiamiDrainageStormwaterSolutionsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Drainage and Stormwater Solutions in Miami, FL"
        subtitle="Comprehensive drainage and stormwater management systems for flood-prone and coastal properties across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Drainage and stormwater solutions in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our drainage and stormwater solutions in Miami-Dade County serve property owners 
              experiencing flooding, standing water, or drainage problems, as well as developers and 
              builders who need stormwater management systems for new construction in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with existing drainage problems on your property in Miami Beach, 
              need comprehensive stormwater management for a new development in Doral, or require 
              specialized coastal drainage solutions in Key Biscayne, we coordinate contractors with 
              expertise in Miami-Dade County drainage requirements, DERM regulations, and SFWMD 
              compliance, including the 25-year, 3-day storm event design criteria and Flood Protection 
              Level of Service (FPLOS) and Water Quality Level of Service (WQLOS) standards.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Drainage projects in Miami-Dade County typically start around 
                <strong> $25,000</strong> for residential French drain systems and can range from 
                $50,000 to $250,000+ for comprehensive stormwater management systems, retention ponds, 
                or large-scale commercial drainage installations. Projects requiring extensive 
                dewatering, working in flood zones, or meeting FPLOS/WQLOS standards often cost more 
                due to additional permit requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Drainage and Stormwater Solutions Include in Miami-Dade County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive drainage services cover all aspects of stormwater management in Miami-Dade County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Regrading for Drainage</h3>
              <p className={styles.serviceDescription}>
                Regrading sites to improve water flow and eliminate standing water, meeting Miami-Dade 
                County&apos;s on-site retention requirements and FPLOS/WQLOS standards. Essential for 
                flood-prone properties in Miami-Dade County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>French Drains and Underdrain Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of French drains and subsurface drainage systems to manage high water table 
                conditions, especially important in Miami-Dade County where groundwater is often close 
                to the surface. Meets DERM and SFWMD requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Inlets and Piping</h3>
              <p className={styles.serviceDescription}>
                Installation of catch basins and underground stormwater piping sized for the 25-year, 
                3-day storm event, meeting Miami-Dade County&apos;s stormwater management requirements 
                and FPLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swales, Ditches and Outfalls</h3>
              <p className={styles.serviceDescription}>
                Construction of swales, ditches, and outfall structures designed for on-site retention 
                and groundwater recharge, meeting Miami-Dade County&apos;s priority for groundwater 
                recharge over simple discharge. Meets DERM requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retention and Detention Basins</h3>
              <p className={styles.serviceDescription}>
                Design and construction of stormwater retention and detention basins sized for the 
                25-year, 3-day storm event, meeting FPLOS and WQLOS standards. Essential for large-scale 
                developments in Miami-Dade County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood-Prone and Coastal Property Drainage</h3>
              <p className={styles.serviceDescription}>
                Specialized drainage solutions for flood-prone and coastal properties, including 
                compliance with Base Flood Elevation (BFE) requirements and DERM environmental 
                protection standards. Essential for properties in flood zones AE, VE, AH, and AO.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Drainage Considerations</h2>
            <p className={styles.text}>
              Drainage in Miami-Dade County requires specialized knowledge of local conditions and 
              regulatory requirements. Our coordinated network of licensed contractors understands the 
              specific requirements for working in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Department of Environmental 
                Resources Management) serves as the primary county agency overseeing stormwater regulation 
                and permitting in Miami-Dade County. The system operates under state regulations 
                supplemented by DERM enforcement through Florida&apos;s regulatory framework. For 
                municipalities operating within the county, coordination occurs between DERM and local 
                jurisdictions. Projects must obtain DERM Plan Review Approval for projects requiring 
                Miami-Dade Review under Chapter 24.
              </li>
              <li>
                <strong>25-Year, 3-Day Storm Event Design Criteria:</strong> Miami-Dade County requires 
                developers to design stormwater systems for the 25-year, 3-day storm event as a baseline 
                design standard. This addresses the intensity and duration of rainfall that stormwater 
                infrastructure must accommodate. Drainage systems must be sized to handle this design 
                storm, with proper storage volumes and discharge rates. This requirement was implemented 
                as part of the revised ordinance effective March 31, 2025.
              </li>
              <li>
                <strong>Flood Protection Level of Service (FPLOS) and Water Quality Level of Service (WQLOS):</strong> 
                Miami-Dade County implements dual performance standards known as Level of Service (LOS) 
                criteria. FPLOS ensures proper flood protection to prevent property damage and maintain 
                public safety, while WQLOS addresses water quality impacts by ensuring stormwater is clean 
                of contaminants before discharge or recharge. Drainage systems must meet both components 
                to achieve compliance.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach prioritizes on-site retention with groundwater recharge over simple detention and 
                discharge. This means drainage systems are designed to encourage water infiltration into 
                the aquifer rather than rapid removal from the site. Permeable swales and alternative 
                drainage materials are encouraged to enhance stormwater infiltration and environmental 
                protection.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table means groundwater 
                is often within 2-3 feet of the surface, requiring subsurface drainage systems and 
                proper elevation of structures above groundwater levels. French drains and underdrain 
                systems are essential for managing high water table conditions, especially in areas like 
                Miami Beach, Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Many drainage projects require 
                permits from the South Florida Water Management District (SFWMD), especially those 
                involving land disturbance or connections to surface waters. We coordinate all required 
                SFWMD permits.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in flood zones (AE, VE, AH, AO) must 
                have drainage systems that comply with FEMA requirements and Miami-Dade building codes, 
                including proper elevation of structures and drainage features to meet Base Flood 
                Elevation (BFE) requirements. Drainage systems must be designed to handle flood zone 
                conditions effectively.
              </li>
              <li>
                <strong>Impervious Surface Regulations:</strong> Miami-Dade County has implemented 
                ordinances addressing impervious surfaces and paving regulations, with permits required 
                for new paving installations on properties (effective March 31, 2025). These permits 
                ensure materials allow proper stormwater drainage within properties and prevent runoff 
                onto neighboring properties. Drainage system design must account for impervious surface 
                area in the watershed.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Miami-Dade including Miami 
                Beach, Key Biscayne, Bal Harbour, and Aventura face additional challenges including 
                saltwater intrusion, storm surge, and unique soil conditions that affect drainage system 
                design and materials. Specialized drainage solutions are required for coastal properties.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Drainage Solution Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage project addresses the root cause and meets 
              all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Problem Assessment:</strong> We assess your drainage problems, identify water 
                sources and flow patterns, and determine the most effective solution approach specific to 
                Miami-Dade County conditions including flood zone analysis, water table assessment, and 
                FPLOS/WQLOS requirements.
              </li>
              <li>
                <strong>Design and Planning:</strong> We coordinate with engineers and contractors to 
                design drainage systems that address your specific problems and meet Miami-Dade County 
                regulatory requirements, including the 25-year, 3-day storm event design criteria and 
                FPLOS/WQLOS standards. Design prioritizes on-site retention with groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), SFWMD environmental resource permits for land disturbance, RER building 
                permits, impervious surface permits where applicable, and coordinate with regulatory 
                agencies. Permits ensure compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in drainage installation, DERM compliance, and SFWMD requirements in 
                Miami-Dade County, including experience with high water table conditions, flood zone 
                requirements, and FPLOS/WQLOS standards.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including excavation, 
                pipe installation, inlet placement, and connections to outfalls or retention areas, 
                meeting Miami-Dade County requirements. Installation ensures proper water flow, on-site 
                retention, and groundwater recharge where applicable.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with DERM, SFWMD, and 
                Miami-Dade RER or municipal building departments to ensure drainage systems meet 
                specifications and regulatory requirements including FPLOS and WQLOS standards. Systems 
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
                <h3 className={styles.faqQuestion}>What permits are required for drainage work in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage projects in Miami-Dade County require DERM Plan Review Approval for projects 
                  requiring Miami-Dade Review under Chapter 24. SFWMD environmental resource permits 
                  may be required for land disturbance or connections to surface waters. RER building 
                  permits may be required for drainage installations. Impervious surface permits are 
                  required for new paving installations (effective March 31, 2025). We help identify 
                  and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the 25-year, 3-day storm event requirement in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County requires developers to design stormwater systems for the 25-year, 
                  3-day storm event as a baseline design standard. This addresses the intensity and 
                  duration of rainfall that stormwater infrastructure must accommodate. Drainage systems 
                  must be sized to handle this design storm, with proper storage volumes and discharge 
                  rates to meet both Flood Protection Level of Service (FPLOS) and Water Quality Level 
                  of Service (WQLOS) standards. This requirement was implemented as part of the revised 
                  ordinance effective March 31, 2025.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are FPLOS and WQLOS requirements in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County implements dual performance standards: Flood Protection Level of 
                  Service (FPLOS) ensures proper flood protection to prevent property damage and 
                  maintain public safety, while Water Quality Level of Service (WQLOS) addresses water 
                  quality impacts by ensuring stormwater is clean of contaminants before discharge or 
                  recharge. Drainage systems must meet both components to achieve compliance. Design 
                  prioritizes on-site retention with groundwater recharge over simple detention and 
                  discharge.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage installation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage installation costs in Miami-Dade County vary based on system type, size, site 
                  conditions, and regulatory requirements. Simple French drain systems typically range from 
                  $25,000 to $75,000, while comprehensive stormwater management systems can range from 
                  $100,000 to $250,000+ depending on scope, complexity, FPLOS/WQLOS requirements, and 
                  dewatering needs. Projects requiring extensive dewatering, working in flood zones, or 
                  meeting FPLOS/WQLOS standards often cost more due to additional permit requirements 
                  and specialized techniques.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can drainage fix flooding problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, properly designed and installed drainage systems can effectively address flooding 
                  problems in Miami-Dade County by collecting and redirecting water away from structures 
                  and low-lying areas, meeting FPLOS and WQLOS standards. The solution depends on the 
                  specific cause of flooding, which may include poor site grading, inadequate drainage, 
                  high groundwater levels, or flood zone conditions. Drainage systems must be designed 
                  for the 25-year, 3-day storm event and prioritize on-site retention with groundwater 
                  recharge as required by Miami-Dade County.
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
              Explore our specialized drainage and stormwater solutions in Miami-Dade County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/miami/drainage-stormwater-solutions/site-regrading-drainage/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Site Regrading for Drainage</h3>
                <p className={styles.subServiceDescription}>
                  Regrading sites to improve water flow and eliminate standing water in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/drainage-stormwater-solutions/french-drains-underdrain-systems/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>French Drains and Underdrain Systems</h3>
                <p className={styles.subServiceDescription}>
                  Installation of French drains and subsurface drainage systems in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/drainage-stormwater-solutions/stormwater-inlets-piping/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Stormwater Inlets and Piping</h3>
                <p className={styles.subServiceDescription}>
                  Installation of catch basins and underground stormwater piping in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/drainage-stormwater-solutions/swales-ditches-outfalls/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales, Ditches and Outfalls</h3>
                <p className={styles.subServiceDescription}>
                  Construction of swales, ditches, and outfall structures in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/drainage-stormwater-solutions/retention-detention-basins/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Basins</h3>
                <p className={styles.subServiceDescription}>
                  Design and construction of stormwater retention and detention basins in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/drainage-stormwater-solutions/flood-prone-coastal-drainage/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Flood-Prone and Coastal Property Drainage</h3>
                <p className={styles.subServiceDescription}>
                  Specialized drainage solutions for flood-prone and coastal properties in Miami-Dade County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Solve Your Miami Drainage Problems?"
        description="Get a free quote for your drainage or stormwater management project in Miami-Dade County. We'll connect you with licensed contractors experienced in Miami-Dade County conditions, DERM requirements, 25-year storm event design criteria, FPLOS/WQLOS standards, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

