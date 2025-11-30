import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'French Drains & Underdrain Systems | South FL',
  description: 'Installation of French drains and underdrain systems across South Florida. Subsurface drainage to collect and redirect groundwater and surface water.',
  openGraph: {
    title: 'French Drains & Underdrain Systems | South FL',
    description: 'Installation of French drains and underdrain systems for subsurface drainage across South Florida.',
    url: `${siteConfig.url}/services/drainage-stormwater-solutions/french-drains-underdrain-systems/`,
  },
}

export default function FrenchDrainsUnderdrainSystemsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>French Drains and Underdrain Systems</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Installation of French drains, underdrain systems, and subsurface drainage to 
                collect and redirect groundwater and surface water away from foundations and 
                low-lying areas across South Florida.
              </p>
              <p className={styles.description}>
                French drains and underdrain systems are effective solutions for managing high 
                water tables and preventing water damage. Our network of licensed contractors 
                has the expertise to install subsurface drainage systems that protect structures 
                and eliminate standing water.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/french-drains.jpg"
                alt="French drains and underdrain systems in South Florida"
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
              French drains and underdrain systems are essential for property owners, homeowners, 
              commercial property managers, and anyone dealing with high water tables, groundwater 
              issues, or water pooling around foundations.
            </p>
            <p className={styles.text}>
              Whether you&apos;re experiencing water in your basement or crawl space, water pooling 
              around your foundation, or high groundwater levels affecting your property, French 
              drains and underdrain systems can effectively collect and redirect water. We coordinate 
              contractors with the expertise to install subsurface drainage systems that protect 
              structures.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                French drain and underdrain installation typically ranges from <strong>$25,000 to $75,000</strong> for 
                residential properties, and <strong>$75,000 to $200,000+</strong> for commercial properties 
                or large-scale systems depending on system length, depth, and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What French Drains and Underdrain Systems Include</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>System Design</h3>
                <p className={styles.serviceDescription}>
                  Design of French drain and underdrain systems based on site conditions, water 
                  sources, and drainage requirements. Design determines pipe placement, depth, 
                  slope, and outfall locations for effective water collection and redirection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Trench Excavation</h3>
                <p className={styles.serviceDescription}>
                  Excavation of trenches to proper depths and widths for French drain installation. 
                  Trenches are excavated with proper slopes to ensure water flows to outfalls, 
                  with depths based on water table levels and foundation protection needs.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Perforated Pipe Installation</h3>
                <p className={styles.serviceDescription}>
                  Installation of perforated drainage pipes that collect groundwater and surface 
                  water. Perforated pipes allow water to enter through holes while directing flow 
                  to outfalls or discharge points.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Gravel Bedding and Backfill</h3>
                <p className={styles.serviceDescription}>
                  Placement of gravel bedding around pipes and backfill with proper drainage 
                  material. Gravel provides drainage around pipes and allows water to flow into 
                  perforated pipes effectively.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Outfall Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of outfalls where French drains discharge to swales, retention 
                  areas, or stormwater systems. Outfalls ensure proper water discharge and prevent 
                  erosion at discharge points.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Surface Restoration</h3>
                <p className={styles.serviceDescription}>
                  Restoration of surface areas after installation, including backfill, grading, 
                  and landscaping. Surface restoration ensures proper drainage function while 
                  maintaining property appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of French Drains and Underdrain Systems</h2>
            <p className={styles.text}>
              Different types of French drains and underdrain systems serve specific purposes:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Foundation French Drains:</strong> Installed around building foundations 
                to collect and redirect groundwater away from structures. Foundation French drains 
                prevent water from entering basements or crawl spaces and protect foundation walls.
              </li>
              <li>
                <strong>Surface French Drains:</strong> Installed near the surface to collect 
                surface water runoff and redirect it away from problem areas. Surface French drains 
                are effective for managing standing water and surface runoff.
              </li>
              <li>
                <strong>Curtain Drains:</strong> Installed uphill from structures to intercept 
                groundwater before it reaches buildings. Curtain drains prevent water from reaching 
                foundations and low-lying areas.
              </li>
              <li>
                <strong>Underdrain Systems:</strong> Installed beneath paved surfaces, parking lots, 
                or sports fields to collect and redirect subsurface water. Underdrain systems 
                prevent water from accumulating beneath surfaces and causing damage.
              </li>
              <li>
                <strong>Perimeter Drains:</strong> Installed around property perimeters to collect 
                and redirect water from surrounding areas. Perimeter drains protect entire properties 
                from water intrusion and flooding.
              </li>
              <li>
                <strong>Interior Drains:</strong> Installed inside basements or crawl spaces to 
                collect water that enters structures. Interior drains are connected to sump pumps 
                or outfalls to remove water from structures.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida French Drain Considerations</h2>
            <p className={styles.text}>
              French drain and underdrain installation in South Florida requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table makes 
                French drains particularly effective for managing groundwater. Drains must be 
                installed at proper depths to intercept groundwater before it reaches structures.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil 
                characteristics that affect French drain installation and performance. Soil 
                conditions determine trench depths, pipe placement, and gravel requirements.
              </li>
              <li>
                <strong>Outfall Requirements:</strong> French drains must discharge to proper 
                outfalls such as swales, retention areas, or stormwater systems. Outfall design 
                must comply with regulatory requirements and prevent erosion.
              </li>
              <li>
                <strong>Permit Requirements:</strong> French drain installation may require permits 
                from county building departments, especially for large-scale systems or those 
                connecting to stormwater systems. We help identify and coordinate all required 
                permits.
              </li>
              <li>
                <strong>Maintenance Access:</strong> French drains require periodic maintenance 
                including cleaning and inspection. Access points and cleanouts must be included in 
                system design for long-term maintenance.
              </li>
              <li>
                <strong>Foundation Protection:</strong> Foundation French drains must be installed 
                at proper depths and distances from foundations to effectively protect structures. 
                Installation must account for foundation depth and water table levels.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The French Drain Installation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your French drain or underdrain system is installed 
              properly and effectively manages water:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify water sources, 
                flow patterns, and drainage problems. Assessment includes reviewing water table 
                levels, foundation conditions, and areas requiring drainage protection.
              </li>
              <li>
                <strong>System Design:</strong> We develop a French drain design that addresses 
                specific drainage problems and protects structures. Design determines pipe placement, 
                depth, slope, and outfall locations.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for French 
                drain installation and coordinate with building departments. Permits ensure 
                compliance with regulations and may be required for large-scale systems.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for French drain installation.
              </li>
              <li>
                <strong>Trench Excavation:</strong> Contractors excavate trenches to proper depths 
                and widths with proper slopes. Trenches are prepared for pipe installation with 
                proper depth control.
              </li>
              <li>
                <strong>Pipe and Gravel Installation:</strong> Perforated pipes are installed with 
                gravel bedding and backfill. Installation ensures proper water collection and flow 
                to outfalls.
              </li>
              <li>
                <strong>Outfall Construction and Final Inspection:</strong> Outfalls are constructed, 
                and final inspections ensure French drains effectively manage water and protect 
                structures. Systems are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is a French drain and how does it work?</h3>
                <p className={styles.faqAnswer}>
                  A French drain is a trench filled with gravel or rock containing a perforated 
                  pipe that collects and redirects groundwater and surface water. Water enters the 
                  pipe through perforations and flows to a lower elevation or outfall, preventing 
                  water from pooling around foundations or in low-lying areas. French drains are 
                  particularly effective in South Florida due to high water tables.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does French drain installation cost?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation costs vary based on system length, depth, and complexity. 
                  Typical residential properties range from $25,000 to $75,000, while commercial 
                  properties or large-scale systems can range from $75,000 to $200,000+ depending 
                  on scope. Factors affecting cost include trench length, depth, pipe size, and 
                  outfall construction.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep should French drains be installed?</h3>
                <p className={styles.faqAnswer}>
                  French drain depth depends on water table levels, foundation depth, and drainage 
                  requirements. Foundation French drains are typically installed at or below 
                  foundation footing level, while surface French drains may be shallower. Proper 
                  depth ensures effective water collection and protection of structures.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do French drains require maintenance?</h3>
                <p className={styles.faqAnswer}>
                  French drains require periodic maintenance including cleaning and inspection to 
                  ensure proper function. Maintenance may include removing debris, cleaning 
                  perforated pipes, and inspecting outfalls. Regular maintenance ensures French 
                  drains continue to effectively manage water over time.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can French drains solve basement water problems?</h3>
                <p className={styles.faqAnswer}>
                  Yes, foundation French drains are often effective solutions for basement water 
                  problems by collecting and redirecting groundwater away from foundations. French 
                  drains prevent water from entering basements and may be combined with interior 
                  drainage systems for comprehensive protection. We assess your specific situation 
                  and recommend the best approach.
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
              We coordinate French drain and underdrain installation across all of South Florida. 
              Select your location to learn more about subsurface drainage services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/drainage-stormwater-solutions/french-drains-underdrain-systems/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/french-drains-underdrain-systems/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/french-drains-underdrain-systems/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/french-drains-underdrain-systems/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Install Your French Drain System?"
        description="Get a free quote for your French drain or underdrain installation. We'll coordinate licensed contractors to install subsurface drainage systems that protect your structures and eliminate standing water."
        showPhone={true}
      />
    </main>
  )
}

