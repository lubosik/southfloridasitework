import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stormwater Inlets & Piping in Miami, FL | Miami-Dade County',
  description: 'Installation of stormwater inlets, catch basins, and underground piping systems in Miami-Dade County. Collect and transport stormwater to retention areas.',
  openGraph: {
    title: 'Stormwater Inlets & Piping in Miami, FL | Miami-Dade County',
    description: 'Installation of stormwater inlets, catch basins, and underground piping systems in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/stormwater-inlets-piping/`,
  },
}

export default function MiamiStormwaterInletsPipingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Stormwater Inlets and Piping in Miami, FL"
        subtitle="Installation of stormwater inlets, catch basins, and underground piping systems to collect and transport stormwater to retention areas or outfalls across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Stormwater inlets and piping systems in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Stormwater inlet and piping services in Miami-Dade County are essential for developers, 
              general contractors, commercial property owners, and anyone needing comprehensive 
              stormwater collection and transport systems in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Doral, upgrading existing stormwater systems 
              in Aventura, or installing comprehensive drainage infrastructure in Coral Gables, 
              stormwater inlets and piping effectively collect and transport runoff. We coordinate 
              contractors with expertise in Miami-Dade County drainage requirements, DERM regulations, 
              the 25-year, 3-day storm event design criteria, and FPLOS/WQLOS standards to install 
              inlet systems and underground piping that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Stormwater inlet and piping installation in Miami-Dade County typically ranges from 
                <strong> $50,000 to $150,000</strong> for residential or small commercial properties, 
                and <strong> $150,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on system size, number of inlets, piping length, FPLOS/WQLOS 
                compliance needs, and DERM permit requirements. Projects requiring extensive piping 
                networks or meeting the 25-year, 3-day storm event design criteria often cost more 
                due to additional permit requirements and specialized design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Stormwater Inlets and Piping Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>System Design</h3>
              <p className={styles.serviceDescription}>
                Design of stormwater inlet and piping systems based on Miami-Dade County drainage 
                requirements, the 25-year, 3-day storm event design criteria, flow rates, and 
                regulatory standards including FPLOS and WQLOS. Design determines inlet placement, 
                pipe sizing, slopes, and connections to retention areas or outfalls, with priority on 
                on-site retention and groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Catch Basin Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of catch basins and stormwater inlets to collect surface runoff, meeting 
                Miami-Dade County construction standards. Catch basins prevent debris from entering 
                piping systems and provide access for maintenance and cleaning, with proper sizing for 
                the 25-year, 3-day storm event.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Underground Piping Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of underground stormwater piping to transport collected water to retention 
                areas or outfalls, sized for the 25-year, 3-day storm event and meeting FPLOS/WQLOS 
                standards. Piping is installed with proper slopes and connections to ensure effective 
                water transport, with priority on on-site retention and groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Pipe Sizing and Slope</h3>
              <p className={styles.serviceDescription}>
                Proper pipe sizing based on flow rates from the 25-year, 3-day storm event and slope 
                requirements for effective water transport, meeting Miami-Dade County requirements. Pipe 
                sizing ensures systems can handle design storm events, with proper slopes for gravity 
                flow, meeting both FPLOS and WQLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Connection to Retention Areas</h3>
              <p className={styles.serviceDescription}>
                Connection of piping systems to retention ponds, detention basins, or outfalls, with 
                priority on on-site retention and groundwater recharge as required by Miami-Dade County. 
                Connections ensure proper water discharge and compliance with stormwater management 
                requirements, meeting FPLOS and WQLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Maintenance Access Points</h3>
              <p className={styles.serviceDescription}>
                Installation of cleanouts and access points for system maintenance and inspection, 
                meeting Miami-Dade County requirements. Access points ensure systems can be maintained 
                and inspected over time, with compliance with county standards for long-term operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Stormwater Inlet Considerations</h2>
            <p className={styles.text}>
              Stormwater inlet and piping installation in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Department of Environmental 
                Resources Management) serves as the primary reviewing authority for stormwater 
                infrastructure projects in Miami-Dade County. Stormwater inlet and piping installation 
                requires DERM Plan Review Approval for projects requiring Miami-Dade Review under 
                Chapter 24. DERM regulates stormwater management through comprehensive standards that 
                address drainage infrastructure, including inlets, catch basins, and piping systems.
              </li>
              <li>
                <strong>25-Year, 3-Day Storm Event Design Criteria:</strong> Miami-Dade County requires 
                developers to design stormwater systems for the 25-year, 3-day storm event as a baseline 
                design standard. Stormwater inlet and piping systems must be sized to handle this design 
                storm, with proper storage volumes and discharge rates to meet both Flood Protection 
                Level of Service (FPLOS) and Water Quality Level of Service (WQLOS) standards. This 
                requirement ensures infrastructure can handle significant rainfall events while 
                maintaining system functionality.
              </li>
              <li>
                <strong>FPLOS and WQLOS Standards:</strong> Miami-Dade County&apos;s stormwater management 
                criteria include two primary components: Flood Protection Level of Service (FPLOS) and 
                Water Quality Level of Service (WQLOS). FPLOS protects public safety and property, while 
                WQLOS maintains water quality in local waterways, particularly Biscayne Bay. Stormwater 
                inlet and piping systems must be designed to meet both components.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach emphasizes on-site retention with groundwater recharge rather than simple 
                detention and controlled discharge. Stormwater inlet and piping systems should be 
                designed to encourage water infiltration into the aquifer rather than rapid removal 
                from the site, supporting aquifer recharge and reducing stress on the county&apos;s 
                stormwater infrastructure.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects piping installation and requires 
                proper depth control and material selection. Piping systems must be designed to function 
                effectively in high water table conditions, especially in areas like Miami Beach, 
                Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Stormwater inlet and piping 
                systems may require SFWMD environmental resource permits for stormwater management, 
                especially for systems connecting to surface waters or involving significant land 
                disturbance. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Stormwater systems in flood zones (AE, VE, AH, 
                AO) must comply with FEMA requirements and Miami-Dade building codes. Systems must be 
                designed to function during flood events and prevent flooding, with proper elevation of 
                inlets and piping to meet Base Flood Elevation (BFE) requirements where applicable.
              </li>
              <li>
                <strong>Pipe Material Selection:</strong> Pipe materials must be suitable for 
                Miami-Dade County conditions including high water tables, coastal environments, and 
                soil conditions. Material selection affects system longevity and performance, especially 
                important in coastal areas with saltwater intrusion and unique soil characteristics.
              </li>
              <li>
                <strong>Maintenance Requirements:</strong> Stormwater systems require periodic 
                maintenance including cleaning catch basins, removing debris, inspecting piping, and 
                maintaining outfalls. Access points and maintenance features must be included in system 
                design, with compliance with Miami-Dade County requirements for long-term operation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Stormwater Inlet Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate stormwater inlet and piping installation throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
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
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Aventura</li>
                  <li>Surfside</li>
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
            <h2 className={styles.heading}>The Stormwater Inlet and Piping Installation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your stormwater inlet and piping system is installed 
              properly and meets all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design stormwater 
                inlet and piping systems that meet Miami-Dade County drainage requirements, the 
                25-year, 3-day storm event design criteria, and regulatory standards including FPLOS 
                and WQLOS. Design determines inlet placement, pipe sizing, slopes, and connections, 
                with priority on on-site retention and groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), SFWMD environmental resource permits for stormwater management, RER 
                building permits, and coordinate with regulatory agencies. Permits ensure compliance 
                with regulatory requirements and may require specific design features.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for stormwater inlet and piping 
                installation in Miami-Dade County, including expertise with high water table 
                conditions, DERM requirements, and FPLOS/WQLOS standards.
              </li>
              <li>
                <strong>Inlet Installation:</strong> Contractors install catch basins and stormwater 
                inlets at specified locations, meeting Miami-Dade County construction standards. 
                Installation includes proper placement, connections, and surface restoration, with 
                proper sizing for the 25-year, 3-day storm event.
              </li>
              <li>
                <strong>Piping Installation:</strong> Underground piping is installed with proper 
                slopes and connections, sized for the 25-year, 3-day storm event and meeting 
                FPLOS/WQLOS standards. Piping installation includes trenching, pipe placement, 
                connections, and backfill, with consideration of high water table conditions.
              </li>
              <li>
                <strong>Connection to Retention Areas:</strong> Piping systems are connected to 
                retention ponds, detention basins, or outfalls, with priority on on-site retention and 
                groundwater recharge as required by Miami-Dade County. Connections ensure proper water 
                discharge and compliance with stormwater management requirements, meeting FPLOS and 
                WQLOS standards.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with DERM, SFWMD, 
                and Miami-Dade RER or municipal building departments to ensure stormwater systems meet 
                specifications and regulatory requirements including FPLOS and WQLOS standards. Systems 
                are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for stormwater inlet and piping installation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation in Miami-Dade County requires DERM Plan 
                  Review Approval for projects requiring Miami-Dade Review under Chapter 24. SFWMD 
                  environmental resource permits may be required for stormwater management, especially 
                  for systems connecting to surface waters. RER building permits may be required for 
                  significant infrastructure installation. Permits ensure compliance with regulatory 
                  requirements and may require specific design features. We help identify and coordinate 
                  all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the 25-year, 3-day storm event requirement in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County requires developers to design stormwater systems for the 25-year, 
                  3-day storm event as a baseline design standard. Stormwater inlet and piping systems 
                  must be sized to handle this design storm, with proper storage volumes and discharge 
                  rates to meet both Flood Protection Level of Service (FPLOS) and Water Quality Level 
                  of Service (WQLOS) standards. This requirement ensures infrastructure can handle 
                  significant rainfall events while maintaining system functionality. Pipe sizing and 
                  inlet capacity must account for this design storm.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are FPLOS and WQLOS requirements in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County&apos;s stormwater management criteria include two primary components: 
                  Flood Protection Level of Service (FPLOS) protects public safety and property, while 
                  Water Quality Level of Service (WQLOS) maintains water quality in local waterways, 
                  particularly Biscayne Bay. Stormwater inlet and piping systems must be designed to 
                  meet both components, with proper sizing, treatment capabilities, and connections to 
                  retention areas that support on-site retention and groundwater recharge.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does stormwater inlet and piping installation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation costs in Miami-Dade County vary based on 
                  system size, number of inlets, piping length, FPLOS/WQLOS compliance needs, and 
                  DERM permit requirements. Typical residential or small commercial properties range from 
                  $50,000 to $150,000, while large-scale commercial or subdivision projects can range 
                  from $150,000 to $500,000+ depending on scope. Factors affecting cost include inlet 
                  quantity, pipe length, depth, connection complexity, and permit requirements. Projects 
                  requiring extensive piping networks or meeting the 25-year, 3-day storm event design 
                  criteria often cost more due to additional permit requirements and specialized design.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How are stormwater pipes sized in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater pipes in Miami-Dade County are sized based on flow rates from the 25-year, 
                  3-day storm event, drainage area, and slope requirements. Pipe sizing ensures systems 
                  can handle expected runoff volumes and transport water effectively, meeting both FPLOS 
                  and WQLOS standards. Engineering calculations determine pipe sizes based on drainage 
                  area, rainfall intensity from the 25-year, 3-day storm event, and flow rates, with 
                  consideration of on-site retention and groundwater recharge requirements.
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
              <a href="/services/drainage-stormwater-solutions/stormwater-inlets-piping/" className={styles.backLink}>
                ← View Stormwater Inlets and Piping (All Areas)
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
        title="Ready to Install Your Miami Stormwater System?"
        description="Get a free quote for your stormwater inlet and piping installation in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, 25-year storm event design criteria, FPLOS/WQLOS standards, and regulatory compliance to install comprehensive stormwater collection and transport systems."
        showPhone={true}
      />
    </main>
  )
}

