import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stormwater Inlets & Piping in West Palm Beach, FL | Palm Beach County',
  description: 'Installation of stormwater inlets, catch basins, and underground piping systems in Palm Beach County. Collect and transport stormwater to retention areas.',
  openGraph: {
    title: 'Stormwater Inlets & Piping in West Palm Beach, FL | Palm Beach County',
    description: 'Installation of stormwater inlets, catch basins, and underground piping systems in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/stormwater-inlets-piping/`,
  },
}

export default function WestPalmBeachStormwaterInletsPipingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Stormwater Inlets and Piping in West Palm Beach, FL"
        subtitle="Installation of stormwater inlets, catch basins, and underground piping systems to collect and transport stormwater to retention areas or outfalls across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Stormwater inlets and piping systems in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Stormwater inlet and piping services in Palm Beach County are essential for developers, 
              general contractors, commercial property owners, and anyone needing comprehensive 
              stormwater collection and transport systems throughout Palm Beach County, including West 
              Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Royal Palm Beach, upgrading existing stormwater systems 
              in Palm Beach, or installing comprehensive drainage infrastructure in Jupiter, 
              stormwater inlets and piping effectively collect and transport runoff. We coordinate 
              contractors with expertise in Palm Beach County drainage requirements, Building Division 
              permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) 
              compliance, and SFWMD Environmental Resource Permits to install inlet systems 
              and underground piping that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Stormwater inlet and piping installation in Palm Beach County typically ranges from 
                <strong> $50,000 to $150,000</strong> for residential or small commercial properties, 
                and <strong> $150,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on system size, number of inlets, piping length, and SFWMD Environmental Resource Permit requirements. Projects 
                requiring extensive piping networks often cost more due to additional permit requirements and specialized design. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Stormwater Inlets and Piping Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>System Design</h3>
              <p className={styles.serviceDescription}>
                Design of stormwater inlet and piping systems based on Palm Beach County drainage 
                requirements, flow rates, and 
                regulatory standards including Unified Land Development Code (ULDC) compliance. Design 
                determines inlet placement, pipe sizing, slopes, and connections to retention areas or 
                outfalls.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Catch Basin Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of catch basins and stormwater inlets to collect surface runoff, meeting 
                Palm Beach County construction standards. Catch basins prevent debris from entering 
                piping systems and provide access for maintenance and cleaning, with proper sizing for 
                stormwater management.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Underground Piping Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of underground stormwater piping to transport collected water to retention 
                areas or outfalls, sized for stormwater management and meeting 
                Unified Land Development Code (ULDC) compliance. Piping is installed with proper slopes and 
                connections to ensure effective water transport.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Pipe Sizing and Slope</h3>
              <p className={styles.serviceDescription}>
                Proper pipe sizing based on flow rates and slope 
                requirements for effective water transport, meeting Palm Beach County requirements. Pipe 
                sizing ensures systems can handle design storm events, with proper slopes for gravity 
                flow, meeting Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Connection to Retention Areas</h3>
              <p className={styles.serviceDescription}>
                Connection of piping systems to retention ponds, detention basins, or outfalls. Connections 
                ensure proper water discharge and compliance with stormwater management requirements, 
                meeting Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Maintenance Access Points</h3>
              <p className={styles.serviceDescription}>
                Installation of cleanouts and access points for system maintenance and inspection, 
                meeting Palm Beach County requirements. Access points ensure systems can be maintained 
                and inspected over time, with compliance with county standards for long-term operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Stormwater Inlet Considerations</h2>
            <p className={styles.text}>
              Stormwater inlet and piping installation in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for stormwater inlet and piping installation 
                projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Stormwater inlet and piping 
                installation typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Stormwater inlet and piping 
                systems may require Environmental Resources Management (ERM) review for projects 
                affecting wetlands, protected species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Stormwater inlet and piping projects must comply with these 
                requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Stormwater inlet and piping 
                systems may require SFWMD Environmental Resource Permits for stormwater management, 
                especially for systems connecting to surface waters or involving significant land 
                disturbance. As of June 28, 2024, new water quality performance standards were 
                implemented, requiring stormwater treatment systems to achieve significant pollution 
                reductions. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects piping installation and requires 
                proper depth control and material selection. Piping systems must be designed to function 
                effectively in high water table conditions, especially in areas like Palm Beach, Jupiter, 
                and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Stormwater systems in flood zones must comply 
                with FEMA requirements and Palm Beach County building codes. Systems must be designed to 
                function during flood events and prevent flooding, with proper elevation of inlets and 
                piping to meet Base Flood Elevation (BFE) requirements where applicable.
              </li>
              <li>
                <strong>Pipe Material Selection:</strong> Pipe materials must be suitable for 
                Palm Beach County conditions including high water tables, coastal environments, and 
                soil conditions. Material selection affects system longevity and performance, especially 
                important in coastal areas with saltwater intrusion and unique soil characteristics.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Stormwater inlet and piping design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Maintenance Requirements:</strong> Stormwater systems require periodic 
                maintenance including cleaning catch basins, removing debris, inspecting piping, and 
                maintaining outfalls. Access points and maintenance features must be included in system 
                design, with compliance with Palm Beach County requirements for long-term operation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Stormwater Inlet Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate stormwater inlet and piping installation throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Riviera Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Stormwater Inlet and Piping Installation Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your stormwater inlet and piping system is installed 
              properly and meets all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design stormwater 
                inlet and piping systems that meet Palm Beach County drainage requirements and 
                regulatory standards including Unified Land Development Code (ULDC) compliance. Design 
                determines inlet placement, pipe sizing, 
                slopes, and connections.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for stormwater inlet and piping installation projects in 
                Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for stormwater management, Unified Land Development Code (ULDC) compliance, and coordinate with regulatory 
                agencies. Permits ensure compliance with regulatory requirements and 
                may require specific design features.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for stormwater inlet and piping 
                installation in Palm Beach County, including expertise with high water table 
                conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource 
                Permit requirements, and hurricane preparedness.
              </li>
              <li>
                <strong>Inlet Installation:</strong> Contractors install catch basins and stormwater 
                inlets at specified locations, meeting Palm Beach County construction standards. 
                Installation includes proper placement, connections, and surface restoration, with 
                proper sizing for stormwater management.
              </li>
              <li>
                <strong>Piping Installation:</strong> Underground piping is installed with proper 
                slopes and connections, sized for stormwater management and meeting 
                Unified Land Development Code (ULDC) compliance. Piping installation includes trenching, 
                pipe placement, connections, and backfill, with consideration of high water table 
                conditions.
              </li>
              <li>
                <strong>Connection to Retention Areas:</strong> Piping systems are connected to 
                retention ponds, detention basins, or outfalls. Connections ensure proper water discharge and 
                compliance with stormwater management requirements, meeting Unified Land Development Code (ULDC) standards.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, Palm Beach 
                County Building Division or municipal building departments, and Environmental Resources Management (ERM) 
                where applicable to ensure stormwater systems meet specifications and regulatory 
                requirements including Unified Land Development Code (ULDC) 
                standards. Systems are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for stormwater inlet and piping installation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation in Palm Beach County requires development 
                  permits (Florida Statute 380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits 
                  for stormwater management, Unified Land Development Code (ULDC) compliance, and 
                  FEMA compliance permits for properties in flood zones. Permits ensure compliance with regulatory requirements and 
                  may require specific design features. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does stormwater inlet and piping installation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation costs in Palm Beach County vary based on 
                  system size, number of inlets, piping length, and SFWMD Environmental Resource Permit requirements. Typical residential or small 
                  commercial properties range from $50,000 to $150,000, while large-scale commercial or 
                  subdivision projects can range from $150,000 to $500,000+ 
                  depending on scope. Factors 
                  affecting cost include inlet quantity, pipe length, depth, connection complexity, and 
                  permit requirements. Projects requiring extensive piping networks often cost more due to additional permit 
                  requirements (SFWMD Environmental Resource Permits) and specialized design. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How are stormwater pipes sized in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater pipes in Palm Beach County are sized based on flow rates, drainage area, and slope requirements. Pipe 
                  sizing ensures systems can handle expected runoff volumes and transport water 
                  effectively, meeting Unified Land Development Code (ULDC) 
                  standards. Engineering calculations determine pipe sizes based on drainage area, 
                  rainfall intensity, and flow rates.
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
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to West Palm Beach Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your West Palm Beach Stormwater System?"
        description="Get a free quote for your stormwater inlet and piping installation in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to install comprehensive stormwater collection and transport systems."
        showPhone={true}
      />
    </main>
  )
}

