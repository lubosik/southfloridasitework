import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stormwater Inlets & Piping | South Florida',
  description: 'Installation of stormwater inlets, catch basins, and underground piping systems across South Florida. Collect and transport stormwater to retention areas.',
  openGraph: {
    title: 'Stormwater Inlets & Piping | South Florida',
    description: 'Installation of stormwater inlets, catch basins, and underground piping systems across South Florida.',
    url: `${siteConfig.url}/services/drainage-stormwater-solutions/stormwater-inlets-piping/`,
  },
}

export default function StormwaterInletsPipingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Stormwater Inlets and Piping</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Installation of stormwater inlets, catch basins, and underground piping systems 
                to collect and transport stormwater to retention areas or outfalls across South 
                Florida.
              </p>
              <p className={styles.description}>
                Stormwater inlets and piping systems are essential components of comprehensive 
                stormwater management. Our network of licensed contractors has the expertise to 
                install inlet systems and underground piping that effectively collect and transport 
                stormwater runoff.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('drainage-stormwater-solutions')}
                alt="Stormwater inlets and piping systems in South Florida"
                fill
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Stormwater inlet and piping services are essential for developers, general contractors, 
              commercial property owners, and anyone needing comprehensive stormwater collection and 
              transport systems.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property, upgrading existing stormwater systems, or 
              installing comprehensive drainage infrastructure, stormwater inlets and piping effectively 
              collect and transport runoff. We coordinate contractors with the expertise to install 
              inlet systems and underground piping that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Stormwater inlet and piping installation typically ranges from <strong>$50,000 to $150,000</strong> for 
                residential or small commercial properties, and <strong>$150,000 to $500,000+</strong> for 
                large-scale commercial or subdivision projects depending on system size, number of 
                inlets, and piping length.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Stormwater Inlets and Piping Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>System Design</h3>
                <p className={styles.serviceDescription}>
                  Design of stormwater inlet and piping systems based on drainage requirements, 
                  flow rates, and regulatory standards. Design determines inlet placement, pipe 
                  sizing, slopes, and connections to retention areas or outfalls.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Catch Basin Installation</h3>
                <p className={styles.serviceDescription}>
                  Installation of catch basins and stormwater inlets to collect surface runoff. 
                  Catch basins prevent debris from entering piping systems and provide access for 
                  maintenance and cleaning.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Underground Piping Installation</h3>
                <p className={styles.serviceDescription}>
                  Installation of underground stormwater piping to transport collected water to 
                  retention areas or outfalls. Piping is installed with proper slopes and connections 
                  to ensure effective water transport.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Pipe Sizing and Slope</h3>
                <p className={styles.serviceDescription}>
                  Proper pipe sizing based on flow rates and slope requirements for effective water 
                  transport. Pipe sizing ensures systems can handle design storm events, with proper 
                  slopes for gravity flow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Connection to Retention Areas</h3>
                <p className={styles.serviceDescription}>
                  Connection of piping systems to retention ponds, detention basins, or outfalls. 
                  Connections ensure proper water discharge and compliance with stormwater management 
                  requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Maintenance Access Points</h3>
                <p className={styles.serviceDescription}>
                  Installation of cleanouts and access points for system maintenance and inspection. 
                  Access points ensure systems can be maintained and inspected over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Stormwater Inlets and Piping</h2>
            <p className={styles.text}>
              Different types of stormwater inlets and piping systems serve specific purposes:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Catch Basins:</strong> Inlet structures with grates that collect surface 
                runoff and prevent debris from entering piping systems. Catch basins include sumps 
                for sediment collection and provide access for maintenance.
              </li>
              <li>
                <strong>Curbside Inlets:</strong> Inlets installed along curbs to collect street 
                and parking lot runoff. Curbside inlets are connected to underground piping systems 
                that transport water to retention areas.
              </li>
              <li>
                <strong>Area Drains:</strong> Inlets installed in low-lying areas to collect 
                surface water. Area drains are effective for managing standing water and surface 
                runoff in parking lots, driveways, and other paved areas.
              </li>
              <li>
                <strong>Stormwater Piping:</strong> Underground pipes that transport collected 
                stormwater to retention areas or outfalls. Piping systems include proper slopes, 
                connections, and sizing for effective water transport.
              </li>
              <li>
                <strong>Manholes:</strong> Access structures for maintenance and inspection of 
                underground piping systems. Manholes provide access to piping for cleaning, 
                inspection, and repairs.
              </li>
              <li>
                <strong>Outfall Structures:</strong> Structures where piping systems discharge to 
                retention areas, swales, or natural water bodies. Outfall structures ensure proper 
                water discharge and prevent erosion.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Stormwater Inlet Considerations</h2>
            <p className={styles.text}>
              Stormwater inlet and piping installation in South Florida requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>SFWMD Requirements:</strong> Stormwater systems must meet SFWMD requirements 
                for stormwater management and water quality. Design requirements include flow rates, 
                treatment capabilities, and connections to retention areas.
              </li>
              <li>
                <strong>High Rainfall Intensity:</strong> South Florida&apos;s intense rainfall 
                requires systems designed for high-volume, short-duration storm events. Inlet and 
                piping systems must handle design storm events effectively.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Stormwater systems in flood zones must 
                comply with FEMA requirements and local building codes. Systems must be designed 
                to function during flood events and prevent flooding.
              </li>
              <li>
                <strong>County Regulations:</strong> Each county has specific stormwater management 
                requirements and permit processes. Systems must comply with county regulations and 
                may require specific design features.
              </li>
              <li>
                <strong>Maintenance Requirements:</strong> Stormwater systems require periodic 
                maintenance including cleaning, inspection, and debris removal. Access points and 
                maintenance features must be included in system design.
              </li>
              <li>
                <strong>Pipe Material Selection:</strong> Pipe materials must be suitable for 
                South Florida conditions including high water tables, coastal environments, and 
                soil conditions. Material selection affects system longevity and performance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Stormwater Inlet and Piping Installation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your stormwater inlet and piping system is installed 
              properly and meets all regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design stormwater 
                inlet and piping systems that meet drainage requirements and regulatory standards. 
                Design determines inlet placement, pipe sizing, slopes, and connections.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required SFWMD and county 
                permits for stormwater system installation and coordinate the permit application 
                process. Permits ensure compliance with regulatory requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for stormwater inlet and piping 
                installation.
              </li>
              <li>
                <strong>Inlet Installation:</strong> Contractors install catch basins and stormwater 
                inlets at specified locations. Installation includes proper placement, connections, 
                and surface restoration.
              </li>
              <li>
                <strong>Piping Installation:</strong> Underground piping is installed with proper 
                slopes and connections. Piping installation includes trenching, pipe placement, 
                connections, and backfill.
              </li>
              <li>
                <strong>Connection to Retention Areas:</strong> Piping systems are connected to 
                retention ponds, detention basins, or outfalls. Connections ensure proper water 
                discharge and compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections to ensure 
                stormwater systems meet specifications and regulatory requirements. Systems are 
                ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is a catch basin and how does it work?</h3>
                <p className={styles.faqAnswer}>
                  A catch basin is an inlet structure with a grate that collects surface runoff and 
                  prevents debris from entering underground piping systems. Catch basins include 
                  sumps for sediment collection and are connected to underground pipes that transport 
                  water to retention areas or outfalls. They provide access for maintenance and 
                  cleaning.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does stormwater inlet and piping installation cost?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater inlet and piping installation costs vary based on system size, number 
                  of inlets, and piping length. Typical residential or small commercial properties 
                  range from $50,000 to $150,000, while large-scale commercial or subdivision 
                  projects can range from $150,000 to $500,000+ depending on scope. Factors affecting 
                  cost include inlet quantity, pipe length, depth, and connection complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need SFWMD permits for stormwater systems?</h3>
                <p className={styles.faqAnswer}>
                  Yes, stormwater inlet and piping systems typically require SFWMD environmental 
                  resource permits for stormwater management. Permits ensure compliance with water 
                  management district requirements and may require specific design features. We help 
                  identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How are stormwater pipes sized?</h3>
                <p className={styles.faqAnswer}>
                  Stormwater pipes are sized based on flow rates from design storm events, drainage 
                  area, and slope requirements. Pipe sizing ensures systems can handle expected 
                  runoff volumes and transport water effectively. Engineering calculations determine 
                  pipe sizes based on drainage area, rainfall intensity, and flow rates.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do stormwater systems require maintenance?</h3>
                <p className={styles.faqAnswer}>
                  Yes, stormwater systems require periodic maintenance including cleaning catch 
                  basins, removing debris, inspecting piping, and maintaining outfalls. Regular 
                  maintenance ensures systems continue to function effectively and prevents 
                  blockages that could cause flooding. We coordinate maintenance services to keep 
                  systems operating properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We coordinate stormwater inlet and piping installation across all of South Florida. 
              Select your location to learn more about stormwater services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/drainage-stormwater-solutions/stormwater-inlets-piping/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/stormwater-inlets-piping/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/stormwater-inlets-piping/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/stormwater-inlets-piping/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Drainage and Stormwater Solutions
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Stormwater System?"
        description="Get a free quote for your stormwater inlet and piping installation. We'll coordinate licensed contractors to install comprehensive stormwater collection and transport systems."
        showPhone={true}
      />
    </main>
  )
}

