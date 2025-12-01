import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'French Drains & Underdrain Systems in West Palm Beach, FL | Palm Beach County',
  description: 'Installation of French drains and underdrain systems in Palm Beach County. Subsurface drainage to collect and redirect groundwater and surface water.',
  openGraph: {
    title: 'French Drains & Underdrain Systems in West Palm Beach, FL | Palm Beach County',
    description: 'Installation of French drains and underdrain systems for subsurface drainage in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/french-drains-underdrain-systems/`,
  },
}

export default function WestPalmBeachFrenchDrainsUnderdrainSystemsPage() {
  return (
    <main>
      <HeroWithQuote
        title="French Drains and Underdrain Systems in West Palm Beach, FL"
        subtitle="Installation of French drains, underdrain systems, and subsurface drainage to collect and redirect groundwater and surface water away from foundations and low-lying areas across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="French drains and underdrain systems in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              French drains and underdrain systems in Palm Beach County are essential for property 
              owners, homeowners, commercial property managers, and anyone dealing with high water 
              tables, groundwater issues, or water pooling around foundations throughout Palm Beach County, 
              including West Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re experiencing water in your basement or crawl space in Palm Beach, 
              water pooling around your foundation in Jupiter, or high groundwater levels 
              affecting your property in Wellington, French drains and underdrain systems can 
              effectively collect and redirect water. We coordinate contractors with expertise in 
              Palm Beach County drainage requirements, Building Division permits, Environmental Resources Management (ERM) 
              review, Unified Land Development Code (ULDC) compliance, high water table conditions, and SFWMD Environmental 
              Resource Permits to install subsurface drainage systems that protect structures.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                French drain and underdrain installation in Palm Beach County typically ranges from 
                <strong> $25,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale systems 
                depending on system length, depth, complexity, high water table conditions, and SFWMD 
                Environmental Resource Permit requirements. Projects requiring extensive trenching in areas 
                with shallow water tables or near sensitive ecosystems often cost more due to additional 
                permit requirements and specialized techniques. Projects involving development work as 
                described in Florida Statute 380.04 require a development permit prior to the issuance of 
                a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What French Drains and Underdrain Systems Include in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>System Design</h3>
              <p className={styles.serviceDescription}>
                Design of French drain and underdrain systems based on Palm Beach County site 
                conditions, water sources, high water table levels, and drainage requirements. Design 
                determines pipe placement, depth based on water table conditions and foundation 
                protection needs, slope, and outfall locations for effective water collection 
                and redirection, meeting Unified Land Development Code (ULDC) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Trench Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of trenches to proper depths and widths for French drain installation, 
                with depths established based on water table levels, foundation depth, and drainage 
                requirements. Trenches are excavated with proper slopes to ensure water flows to 
                outfalls, with depths based on water table levels and foundation protection needs 
                specific to Palm Beach County&apos;s high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Perforated Pipe Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of perforated, slotted, or open joint drainage pipes that collect 
                groundwater and surface water, meeting Palm Beach County construction standards. 
                Perforated pipes allow water to enter through holes while directing flow to 
                outfalls or discharge points, with proper installation in coordination with Unified Land Development Code (ULDC) and SFWMD Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Gravel Bedding and Backfill</h3>
              <p className={styles.serviceDescription}>
                Placement of coarse aggregate or ballast rock bedding around pipes and backfill with 
                proper drainage material, meeting Palm Beach County construction standards. Gravel 
                provides drainage around pipes and allows water to flow into perforated pipes 
                effectively, with filter fabric as required by county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfalls where French drains discharge to swales, retention areas, or 
                stormwater systems, meeting Palm Beach County&apos;s Unified Land Development Code (ULDC) 
                requirements and SFWMD Environmental Resource Permit standards. Outfalls ensure proper 
                water discharge and prevent erosion at discharge points.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Surface Restoration</h3>
              <p className={styles.serviceDescription}>
                Restoration of surface areas after installation, including backfill, grading, and 
                landscaping, meeting Palm Beach County requirements. Surface restoration ensures proper 
                drainage function while maintaining property appearance, with compliance with county 
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County French Drain Considerations</h2>
            <p className={styles.text}>
              French drain and underdrain installation in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for French drain installation projects in Palm Beach 
                County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> French drain installation typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>French Drain Definition and Construction Standards:</strong> In Palm Beach County, 
                French drains are defined as structures consisting of a perforated, slotted, or open 
                joint pipe buried in a trench and surrounded by ballast rock, used for groundwater 
                drainage and stormwater management. Construction must utilize authorized types of pipe 
                with coarse aggregate or ballast rock when specified, along with filter fabric, meeting 
                county construction standards and Unified Land Development Code (ULDC) requirements.
              </li>
              <li>
                <strong>High Water Table and Groundwater Drainage:</strong> Palm Beach County&apos;s 
                high water table, which can be within 2-3 feet of the surface in many areas, makes 
                French drains particularly effective for managing groundwater. The depth and location 
                of French drain trenches are established based on water table levels, foundation depth, 
                and drainage requirements. Drains must be installed at proper depths to intercept 
                groundwater before it reaches structures, especially in areas like Palm Beach, Jupiter, 
                and coastal neighborhoods.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> French drain installation may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land Development 
                Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. French drain projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> French drain installation may 
                require SFWMD Environmental Resource Permits for land disturbance and stormwater 
                management, especially for large-scale systems or those connecting to surface waters. As 
                of June 28, 2024, new water quality performance standards were implemented. We 
                coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Palm Beach County including Palm 
                Beach, Jupiter, Juno Beach, and Tequesta have unique soil 
                characteristics including limestone bedrock, sandy soils, and organic materials that 
                affect French drain installation and performance. Soil conditions determine trench depths, 
                pipe placement, and gravel requirements.
              </li>
              <li>
                <strong>Outfall Requirements:</strong> French drains must discharge to proper outfalls 
                such as swales, retention areas, or stormwater systems, meeting Palm Beach County&apos;s 
                Unified Land Development Code (ULDC) requirements and SFWMD Environmental Resource Permit 
                standards. Outfall design must comply with regulatory requirements and prevent erosion.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. French drain design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County French Drain Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate French drain and underdrain installation throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>High Water Table Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Riviera Beach</li>
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
            <h2 className={styles.heading}>The French Drain Installation Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your French drain or underdrain system is installed 
              properly and effectively manages water while meeting all Palm Beach County regulatory 
              requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify water sources, 
                flow patterns, and drainage problems specific to Palm Beach County conditions 
                including high water table assessment, foundation conditions, and regulatory requirements. Assessment includes reviewing water table levels, foundation 
                conditions, and areas requiring drainage protection.
              </li>
              <li>
                <strong>System Design:</strong> We develop a French drain design that addresses specific 
                drainage problems and protects structures, meeting Palm Beach County construction 
                standards, Unified Land Development Code (ULDC) compliance, and SFWMD Environmental Resource 
                Permit requirements. Design determines pipe placement, depth based on water table levels 
                and foundation protection needs, slope, and outfall locations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for French drain installation projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management where applicable, Unified Land Development Code (ULDC) 
                compliance, and coordinate with regulatory agencies. Permits ensure compliance with regulations and may be required for large-scale 
                systems or those connecting to stormwater systems.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for French drain installation in Palm Beach 
                County, including expertise with high water table conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permit requirements, and hurricane preparedness.
              </li>
              <li>
                <strong>Trench Excavation:</strong> Contractors excavate trenches to proper depths 
                and widths with proper slopes, with depths established based on water table levels, 
                foundation depth, and drainage requirements. Trenches are prepared for pipe installation 
                with proper depth control, meeting Palm Beach County requirements.
              </li>
              <li>
                <strong>Pipe and Gravel Installation:</strong> Perforated, slotted, or open joint pipes 
                are installed with coarse aggregate or ballast rock bedding and backfill, along with 
                filter fabric as required by Palm Beach County construction standards. Installation ensures 
                proper water collection and flow to outfalls.
              </li>
              <li>
                <strong>Outfall Construction and Final Inspection:</strong> Outfalls are constructed, and final 
                inspections with SFWMD, Palm Beach County Building Division, or municipal building 
                departments ensure French drains effectively manage water and protect structures, meeting 
                Unified Land Development Code (ULDC) standards. Systems are ready 
                for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for French drain installation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation in Palm Beach County requires development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits 
                  for land disturbance and stormwater management where applicable, Unified Land Development Code (ULDC) 
                  compliance, and FEMA compliance permits for properties in flood zones. Projects near sensitive ecosystems may require 
                  additional permits due to Unified Land Development Code (ULDC) emphasis on water quality 
                  protection. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep should French drains be installed in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  French drain depth in Palm Beach County depends on water table levels, foundation 
                  depth, and drainage requirements. The depth and location of French drain trenches are 
                  established based on water table levels, foundation depth, and drainage requirements. 
                  Foundation French drains are typically installed at or below foundation footing level, 
                  while surface French drains may be shallower. Proper depth ensures effective water 
                  collection and protection of structures, especially important given Palm Beach County&apos;s 
                  high water table. Drains must be installed at proper depths to intercept groundwater 
                  before it reaches structures, especially in areas like Palm Beach, Jupiter, and 
                  coastal neighborhoods.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Palm Beach County&apos;s construction standards for French drains?</h3>
                <p className={styles.faqAnswer}>
                  In Palm Beach County, French drains are defined as structures consisting of a 
                  perforated, slotted, or open joint pipe buried in a trench and surrounded by ballast 
                  rock. Construction must utilize authorized types of pipe with coarse aggregate or 
                  ballast rock when specified, along with filter fabric, meeting county construction 
                  standards and Unified Land Development Code (ULDC) requirements. Systems must be designed 
                  in coordination with SFWMD Environmental Resource Permits and must account for hurricane preparedness.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does French drain installation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation costs in Palm Beach County vary based on system length, 
                  depth, complexity, high water table conditions, and SFWMD Environmental Resource 
                  Permit requirements. Typical residential properties range from $25,000 to $75,000, 
                  while commercial properties or large-scale systems can range from $75,000 to $200,000+ 
                  depending on scope. Factors affecting cost include trench length, depth based on water 
                  table levels, pipe size, outfall construction, and permit complexity. Projects 
                  requiring extensive trenching in areas with shallow water tables or near sensitive 
                  ecosystems often cost more due to additional permit requirements (SFWMD Environmental 
                  Resource Permits) and specialized techniques. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can French drains solve basement water problems in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, foundation French drains are often effective solutions for basement water 
                  problems in Palm Beach County by collecting and redirecting groundwater away from 
                  foundations, especially important given Palm Beach County&apos;s high water table. French 
                  drains prevent water from entering basements and may be combined with interior 
                  drainage systems for comprehensive protection. We assess your specific situation 
                  including water table levels and foundation conditions, and recommend the best 
                  approach, with compliance to Unified Land Development Code (ULDC) requirements and hurricane preparedness.
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
              <a href="/services/drainage-stormwater-solutions/french-drains-underdrain-systems/" className={styles.backLink}>
                ← View French Drains and Underdrain Systems (All Areas)
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
        title="Ready to Install Your West Palm Beach French Drain System?"
        description="Get a free quote for your French drain or underdrain installation in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, high water table management, SFWMD Environmental Resource Permits, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to install subsurface drainage systems that protect your structures and eliminate standing water."
        showPhone={true}
      />
    </main>
  )
}

