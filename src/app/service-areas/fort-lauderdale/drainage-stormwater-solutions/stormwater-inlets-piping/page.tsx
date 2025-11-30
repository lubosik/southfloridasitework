import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stormwater Inlets & Piping in Fort Lauderdale, FL | Broward County',
  description: 'Installation of stormwater inlets, catch basins, and underground piping systems in Broward County. Collect and transport stormwater to retention areas.',
  openGraph: {
    title: 'Stormwater Inlets & Piping in Fort Lauderdale, FL | Broward County',
    description: 'Installation of stormwater inlets, catch basins, and underground piping systems in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/stormwater-inlets-piping/`,
  },
}

export default function FortLauderdaleStormwaterInletsPipingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Stormwater Inlets and Piping in Fort Lauderdale, FL"
        subtitle="Installation of stormwater inlets, catch basins, and underground piping systems to collect and transport stormwater to retention areas or outfalls across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Stormwater inlets and piping systems in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Stormwater inlet and piping services in Broward County are essential for developers, 
              general contractors, commercial property owners, and anyone needing comprehensive 
              stormwater collection and transport systems throughout Broward County, including Fort 
              Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Plantation, upgrading existing stormwater systems 
              in Fort Lauderdale, or installing comprehensive drainage infrastructure in Hollywood, 
              stormwater inlets and piping effectively collect and transport runoff. We coordinate 
              contractors with expertise in Broward County drainage requirements, Development & 
              Environmental Review (DER), Natural Resource Protection Code compliance, storm event 
              protection requirements, and SFWMD Environmental Resource Permits to install inlet systems 
              and underground piping that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Stormwater inlet and piping installation in Broward County typically ranges from 
                <strong> $50,000 to $150,000</strong> for residential or small commercial properties, 
                and <strong> $150,000 to $500,000+</strong> for large-scale commercial or subdivision 
                projects depending on system size, number of inlets, piping length, storm event 
                protection requirements, and SFWMD Environmental Resource Permit requirements. Projects 
                requiring extensive piping networks or meeting storm event protection (100-year, 3-day 
                storm event for structures; 10-year, 3-day storm event for roadways and parking lots) 
                often cost more due to additional permit requirements and specialized design. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Stormwater Inlets and Piping Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>System Design</h3>
              <p className={styles.serviceDescription}>
                Design of stormwater inlet and piping systems based on Broward County drainage 
                requirements, storm event protection requirements (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots), flow rates, and 
                regulatory standards including Natural Resource Protection Code compliance. Design 
                determines inlet placement, pipe sizing, slopes, and connections to retention areas or 
                outfalls, integrating with Broward County&apos;s three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Catch Basin Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of catch basins and stormwater inlets to collect surface runoff, meeting 
                Broward County construction standards. Catch basins prevent debris from entering 
                piping systems and provide access for maintenance and cleaning, with proper sizing for 
                storm event protection requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Underground Piping Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of underground stormwater piping to transport collected water to retention 
                areas or outfalls, sized for storm event protection (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots) and meeting 
                Natural Resource Protection Code compliance. Piping is installed with proper slopes and 
                connections to ensure effective water transport, integrating with Broward County&apos;s 
                three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Pipe Sizing and Slope</h3>
              <p className={styles.serviceDescription}>
                Proper pipe sizing based on flow rates from storm event protection requirements and slope 
                requirements for effective water transport, meeting Broward County requirements. Pipe 
                sizing ensures systems can handle design storm events, with proper slopes for gravity 
                flow, meeting storm event protection and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Connection to Retention Areas</h3>
              <p className={styles.serviceDescription}>
                Connection of piping systems to retention ponds, detention basins, or outfalls, 
                integrating with Broward County&apos;s three-tier infrastructure framework. Connections 
                ensure proper water discharge and compliance with stormwater management requirements, 
                meeting storm event protection and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Maintenance Access Points</h3>
              <p className={styles.serviceDescription}>
                Installation of cleanouts and access points for system maintenance and inspection, 
                meeting Broward County requirements. Access points ensure systems can be maintained 
                and inspected over time, with compliance with county standards for long-term operation 
                and storm event protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Stormwater Inlet Considerations</h2>
            <p className={styles.text}>
              Stormwater inlet and piping installation in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for stormwater inlet and piping installation 
                projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Stormwater inlet and piping 
                installation typically requires Development & Environmental Review through ePermits 
                OneStop for applicable building permits. All DER submittals are only accepted 
                electronically. Broward County&apos;s Planning and Development Management Division ensures 
                that proposed developments comply with the Broward County Land Development Code and 
                Natural Resource Protection Code.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Stormwater inlet and piping systems must be sized to 
                handle these design storms, with proper storage volumes and discharge rates to ensure 
                adequate flood protection and water quality treatment.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                reductions—including an 80 percent reduction of post-development average annual total 
                phosphorus (TP) loading and 45 percent reduction of total nitrogen (TN) loading from 
                project areas. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Three-Tier Infrastructure Framework:</strong> Broward County&apos;s stormwater 
                management system operates through a three-tier infrastructure framework: Tertiary System 
                (individual community infrastructure including drainage inlets, pipes, swales, lakes, and 
                retention areas), Secondary System (South Broward Drainage District or Central Broward 
                Water Control District infrastructure including canals, culverts, and flood control gates), 
                and Primary System (SFWMD-operated canals that receive all permitted stormwater runoff). 
                Stormwater inlet and piping systems must integrate with this framework.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects piping installation and requires 
                proper depth control and material selection. Piping systems must be designed to function 
                effectively in high water table conditions, especially in areas like Fort Lauderdale, 
                Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Stormwater systems in flood zones must comply 
                with FEMA requirements and Broward County building codes. Systems must be designed to 
                function during flood events and prevent flooding, with proper elevation of inlets and 
                piping to meet Base Flood Elevation (BFE) requirements and storm event protection 
                (100-year, 3-day storm event for structures) where applicable.
              </li>
              <li>
                <strong>Pipe Material Selection:</strong> Pipe materials must be suitable for 
                Broward County conditions including high water tables, coastal environments, and 
                soil conditions. Material selection affects system longevity and performance, especially 
                important in coastal areas with saltwater intrusion and unique soil characteristics.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Stormwater inlet and piping design must account for climate resilience and 
                sea level rise considerations, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Maintenance Requirements:</strong> Stormwater systems require periodic 
                maintenance including cleaning catch basins, removing debris, inspecting piping, and 
                maintaining outfalls. Access points and maintenance features must be included in system 
                design, with compliance with Broward County requirements for long-term operation and 
                storm event protection.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Stormwater Inlet Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate stormwater inlet and piping installation throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Hollywood Beach</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Stormwater Inlet and Piping Installation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your stormwater inlet and piping system is installed 
              properly and meets all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design stormwater 
                inlet and piping systems that meet Broward County drainage requirements, storm event 
                protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day 
                storm event for roadways and parking lots), and regulatory standards including Natural 
                Resource Protection Code compliance. Design determines inlet placement, pipe sizing, 
                slopes, and connections, integrating with Broward County&apos;s three-tier infrastructure 
                framework.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for stormwater inlet and piping installation projects in 
                Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for stormwater management, Natural Resource Protection Code compliance, drainage 
                district approvals (CBWCD or SBDD) where applicable, and coordinate with regulatory 
                agencies. All DER submittals are only accepted electronically. Permits are valid for 180 
                days from the date of issuance. Permits ensure compliance with regulatory requirements and 
                may require specific design features.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for stormwater inlet and piping 
                installation in Broward County, including expertise with high water table 
                conditions, Natural Resource Protection Code compliance, SFWMD Environmental Resource 
                Permit requirements, and storm event protection.
              </li>
              <li>
                <strong>Inlet Installation:</strong> Contractors install catch basins and stormwater 
                inlets at specified locations, meeting Broward County construction standards. 
                Installation includes proper placement, connections, and surface restoration, with 
                proper sizing for storm event protection requirements.
              </li>
              <li>
                <strong>Piping Installation:</strong> Underground piping is installed with proper 
                slopes and connections, sized for storm event protection (100-year, 3-day storm event 
                for structures; 10-year, 3-day storm event for roadways and parking lots) and meeting 
                Natural Resource Protection Code compliance. Piping installation includes trenching, 
                pipe placement, connections, and backfill, with consideration of high water table 
                conditions and integration with Broward County&apos;s three-tier infrastructure framework.
              </li>
              <li>
                <strong>Connection to Retention Areas:</strong> Piping systems are connected to 
                retention ponds, detention basins, or outfalls, integrating with Broward County&apos;s 
                three-tier infrastructure framework. Connections ensure proper water discharge and 
                compliance with stormwater management requirements, meeting storm event protection and 
                Natural Resource Protection Code standards.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, Broward 
                County Building Code Division or municipal building departments, and drainage districts 
                where applicable to ensure stormwater systems meet specifications and regulatory 
                requirements including storm event protection and Natural Resource Protection Code 
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
                <h3 className={styles.faqQuestion}>What permits are required for stormwater inlet and piping installation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation in Broward County requires development 
                  permits (Florida Statute 380.04) obtained prior to building permit issuance, Uniform 
                  Building Permit Applications from Broward County Building Code Division, Development 
                  & Environmental Review (DER) through ePermits OneStop for applicable projects, SFWMD 
                  Environmental Resource Permits for stormwater management, Natural Resource Protection 
                  Code compliance, and drainage district approvals (CBWCD or SBDD) where applicable. 
                  All DER submittals are only accepted electronically. Permits are valid for 180 days 
                  from the date of issuance. Permits ensure compliance with regulatory requirements and 
                  may require specific design features. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires that first floor elevations of all structures within drainage 
                  districts must protect structures from a 100-year, 3-day storm event, while roadway and 
                  parking lot elevations must be protected from a 10-year, 3-day storm event. Stormwater 
                  inlet and piping systems must be sized to handle these design storms, with proper 
                  storage volumes and discharge rates to ensure adequate flood protection and water 
                  quality treatment. This requirement ensures infrastructure can handle significant 
                  rainfall events while maintaining system functionality. Pipe sizing and inlet capacity 
                  must account for these design storms. Climate resilience and sea level rise 
                  considerations (50-year planning horizon, ~2 feet projection) are incorporated into 
                  design.
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
                  serve as the final conveyance system). Stormwater inlet and piping systems must 
                  integrate with this framework to ensure effective stormwater management.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does stormwater inlet and piping installation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation costs in Broward County vary based on 
                  system size, number of inlets, piping length, storm event protection requirements, and 
                  SFWMD Environmental Resource Permit requirements. Typical residential or small 
                  commercial properties range from $50,000 to $150,000, while large-scale commercial or 
                  subdivision projects can range from $150,000 to $500,000+ depending on scope. Factors 
                  affecting cost include inlet quantity, pipe length, depth, connection complexity, and 
                  permit requirements. Projects requiring extensive piping networks or meeting storm 
                  event protection (100-year, 3-day storm event for structures; 10-year, 3-day storm 
                  event for roadways and parking lots) often cost more due to additional permit 
                  requirements (SFWMD Environmental Resource Permits) and specialized design. Broward 
                  County permit processing, including DER review through ePermits OneStop, can add time 
                  and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How are stormwater pipes sized in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater pipes in Broward County are sized based on flow rates from storm event 
                  protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day 
                  storm event for roadways and parking lots), drainage area, and slope requirements. Pipe 
                  sizing ensures systems can handle expected runoff volumes and transport water 
                  effectively, meeting storm event protection and Natural Resource Protection Code 
                  standards. Engineering calculations determine pipe sizes based on drainage area, 
                  rainfall intensity from storm event protection requirements, and flow rates, with 
                  consideration of integration with Broward County&apos;s three-tier infrastructure framework.
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
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Fort Lauderdale Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Fort Lauderdale Stormwater System?"
        description="Get a free quote for your stormwater inlet and piping installation in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, storm event protection requirements, SFWMD Environmental Resource Permits, DER requirements, three-tier infrastructure framework integration, and regulatory compliance to install comprehensive stormwater collection and transport systems."
        showPhone={true}
      />
    </main>
  )
}

