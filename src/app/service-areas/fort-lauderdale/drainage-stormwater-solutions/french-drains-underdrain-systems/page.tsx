import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'French Drains & Underdrain Systems in Fort Lauderdale, FL | Broward County',
  description: 'Installation of French drains and underdrain systems in Broward County. Subsurface drainage to collect and redirect groundwater and surface water.',
  openGraph: {
    title: 'French Drains & Underdrain Systems in Fort Lauderdale, FL | Broward County',
    description: 'Installation of French drains and underdrain systems for subsurface drainage in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/french-drains-underdrain-systems/`,
  },
}

export default function FortLauderdaleFrenchDrainsUnderdrainSystemsPage() {
  return (
    <main>
      <HeroWithQuote
        title="French Drains and Underdrain Systems in Fort Lauderdale, FL"
        subtitle="Installation of French drains, underdrain systems, and subsurface drainage to collect and redirect groundwater and surface water away from foundations and low-lying areas across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="French drains and underdrain systems in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              French drains and underdrain systems in Broward County are essential for property 
              owners, homeowners, commercial property managers, and anyone dealing with high water 
              tables, groundwater issues, or water pooling around foundations throughout Broward County, 
              including Fort Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re experiencing water in your basement or crawl space in Fort Lauderdale, 
              water pooling around your foundation in Hollywood, or high groundwater levels 
              affecting your property in Plantation, French drains and underdrain systems can 
              effectively collect and redirect water. We coordinate contractors with expertise in 
              Broward County drainage requirements, Development & Environmental Review (DER), Natural 
              Resource Protection Code compliance, high water table conditions, and SFWMD Environmental 
              Resource Permits to install subsurface drainage systems that protect structures.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                French drain and underdrain installation in Broward County typically ranges from 
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
          <h2 className={styles.heading}>What French Drains and Underdrain Systems Include in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>System Design</h3>
              <p className={styles.serviceDescription}>
                Design of French drain and underdrain systems based on Broward County site 
                conditions, water sources, high water table levels, and drainage requirements. Design 
                determines pipe placement, depth based on water table conditions and foundation 
                protection needs, slope, and outfall locations for effective water collection 
                and redirection, meeting storm event protection requirements and Natural Resource 
                Protection Code compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Trench Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of trenches to proper depths and widths for French drain installation, 
                with depths established based on water table levels, foundation depth, and drainage 
                requirements. Trenches are excavated with proper slopes to ensure water flows to 
                outfalls, with depths based on water table levels and foundation protection needs 
                specific to Broward County&apos;s high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Perforated Pipe Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of perforated, slotted, or open joint drainage pipes that collect 
                groundwater and surface water, meeting Broward County construction standards. 
                Perforated pipes allow water to enter through holes while directing flow to 
                outfalls or discharge points, with proper installation in coordination with Natural 
                Resource Protection Code and SFWMD Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Gravel Bedding and Backfill</h3>
              <p className={styles.serviceDescription}>
                Placement of coarse aggregate or ballast rock bedding around pipes and backfill with 
                proper drainage material, meeting Broward County construction standards. Gravel 
                provides drainage around pipes and allows water to flow into perforated pipes 
                effectively, with filter fabric as required by county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfalls where French drains discharge to swales, retention areas, or 
                stormwater systems, meeting Broward County&apos;s Natural Resource Protection Code 
                requirements and SFWMD Environmental Resource Permit standards. Outfalls ensure proper 
                water discharge and prevent erosion at discharge points, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Surface Restoration</h3>
              <p className={styles.serviceDescription}>
                Restoration of surface areas after installation, including backfill, grading, and 
                landscaping, meeting Broward County requirements. Surface restoration ensures proper 
                drainage function while maintaining property appearance, with compliance with county 
                standards and storm event protection requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County French Drain Considerations</h2>
            <p className={styles.text}>
              French drain and underdrain installation in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for French drain installation projects in Broward 
                County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> French drain installation 
                typically requires Development & Environmental Review through ePermits OneStop for 
                applicable building permits. All DER submittals are only accepted electronically. 
                Broward County&apos;s Planning and Development Management Division ensures that proposed 
                developments comply with the Broward County Land Development Code and Natural Resource 
                Protection Code.
              </li>
              <li>
                <strong>French Drain Definition and Construction Standards:</strong> In Broward County, 
                French drains are defined as structures consisting of a perforated, slotted, or open 
                joint pipe buried in a trench and surrounded by ballast rock, used for groundwater 
                drainage and stormwater management. Construction must utilize authorized types of pipe 
                with coarse aggregate or ballast rock when specified, along with filter fabric, meeting 
                county construction standards and Natural Resource Protection Code requirements.
              </li>
              <li>
                <strong>High Water Table and Groundwater Drainage:</strong> Broward County&apos;s 
                high water table, which can be within 2-3 feet of the surface in many areas, makes 
                French drains particularly effective for managing groundwater. The depth and location 
                of French drain trenches are established based on water table levels, foundation depth, 
                and drainage requirements. Drains must be installed at proper depths to intercept 
                groundwater before it reaches structures, especially in areas like Fort Lauderdale, 
                Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be 
                protected from a 10-year, 3-day storm event. French drain systems must be designed to 
                handle these design storms and integrate with Broward County&apos;s three-tier 
                infrastructure framework.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County including Fort 
                Lauderdale Beach, Hollywood Beach, Pompano Beach, and Deerfield Beach have unique soil 
                characteristics including limestone bedrock, sandy soils, and organic materials that 
                affect French drain installation and performance. Soil conditions determine trench depths, 
                pipe placement, and gravel requirements.
              </li>
              <li>
                <strong>Outfall Requirements:</strong> French drains must discharge to proper outfalls 
                such as swales, retention areas, or stormwater systems, meeting Broward County&apos;s 
                Natural Resource Protection Code requirements and SFWMD Environmental Resource Permit 
                standards. Outfall design must comply with regulatory requirements and prevent erosion, 
                integrating with Broward County&apos;s three-tier infrastructure framework (Tertiary, 
                Secondary, Primary systems).
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. French drain design must account for climate resilience and sea level 
                rise considerations, ensuring long-term functionality and compliance with regulatory 
                requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County French Drain Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate French drain and underdrain installation throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>High Water Table Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Hollywood Beach</li>
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
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                </ul>
              </div>
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
            <h2 className={styles.heading}>The French Drain Installation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your French drain or underdrain system is installed 
              properly and effectively manages water while meeting all Broward County regulatory 
              requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify water sources, 
                flow patterns, and drainage problems specific to Broward County conditions 
                including high water table assessment, foundation conditions, and storm event 
                protection requirements. Assessment includes reviewing water table levels, foundation 
                conditions, and areas requiring drainage protection.
              </li>
              <li>
                <strong>System Design:</strong> We develop a French drain design that addresses specific 
                drainage problems and protects structures, meeting Broward County construction 
                standards, Natural Resource Protection Code compliance, and SFWMD Environmental Resource 
                Permit requirements. Design determines pipe placement, depth based on water table levels 
                and foundation protection needs, slope, and outfall locations, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for French drain installation projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management where applicable, Natural Resource 
                Protection Code compliance, and coordinate with regulatory agencies. All DER submittals 
                are only accepted electronically. Permits are valid for 180 days from the date of 
                issuance. Permits ensure compliance with regulations and may be required for large-scale 
                systems or those connecting to stormwater systems.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for French drain installation in Broward 
                County, including expertise with high water table conditions, Natural Resource Protection 
                Code compliance, SFWMD Environmental Resource Permit requirements, and storm event 
                protection.
              </li>
              <li>
                <strong>Trench Excavation:</strong> Contractors excavate trenches to proper depths 
                and widths with proper slopes, with depths established based on water table levels, 
                foundation depth, and drainage requirements. Trenches are prepared for pipe installation 
                with proper depth control, meeting Broward County requirements and storm event protection 
                standards.
              </li>
              <li>
                <strong>Pipe and Gravel Installation:</strong> Perforated, slotted, or open joint pipes 
                are installed with coarse aggregate or ballast rock bedding and backfill, along with 
                filter fabric as required by Broward County construction standards. Installation ensures 
                proper water collection and flow to outfalls, integrating with Broward County&apos;s 
                three-tier infrastructure framework.
              </li>
              <li>
                <strong>Outfall Construction and Final Inspection:</strong> Outfalls are constructed 
                integrating with Broward County&apos;s three-tier infrastructure framework, and final 
                inspections with SFWMD, Broward County Building Code Division, or municipal building 
                departments ensure French drains effectively manage water and protect structures, meeting 
                storm event protection and Natural Resource Protection Code standards. Systems are ready 
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
                <h3 className={styles.faqQuestion}>What permits are required for French drain installation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation in Broward County requires development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Uniform Building Permit Applications 
                  from Broward County Building Code Division, Development & Environmental Review (DER) 
                  through ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits 
                  for land disturbance and stormwater management where applicable, Natural Resource 
                  Protection Code compliance, and drainage district approvals (CBWCD or SBDD) where 
                  applicable. All DER submittals are only accepted electronically. Permits are valid for 
                  180 days from the date of issuance. Projects near sensitive ecosystems may require 
                  additional permits due to Natural Resource Protection Code emphasis on water quality 
                  protection. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep should French drains be installed in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  French drain depth in Broward County depends on water table levels, foundation 
                  depth, and drainage requirements. The depth and location of French drain trenches are 
                  established based on water table levels, foundation depth, and drainage requirements. 
                  Foundation French drains are typically installed at or below foundation footing level, 
                  while surface French drains may be shallower. Proper depth ensures effective water 
                  collection and protection of structures, especially important given Broward County&apos;s 
                  high water table. Drains must be installed at proper depths to intercept groundwater 
                  before it reaches structures, especially in areas like Fort Lauderdale, Hollywood, and 
                  coastal neighborhoods.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Broward County&apos;s construction standards for French drains?</h3>
                <p className={styles.faqAnswer}>
                  In Broward County, French drains are defined as structures consisting of a 
                  perforated, slotted, or open joint pipe buried in a trench and surrounded by ballast 
                  rock. Construction must utilize authorized types of pipe with coarse aggregate or 
                  ballast rock when specified, along with filter fabric, meeting county construction 
                  standards and Natural Resource Protection Code requirements. Systems must be designed 
                  in coordination with SFWMD Environmental Resource Permits and must account for storm 
                  event protection requirements (100-year, 3-day storm event for structures; 10-year, 
                  3-day storm event for roadways and parking lots) and integrate with Broward County&apos;s 
                  three-tier infrastructure framework.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does French drain installation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation costs in Broward County vary based on system length, 
                  depth, complexity, high water table conditions, and SFWMD Environmental Resource 
                  Permit requirements. Typical residential properties range from $25,000 to $75,000, 
                  while commercial properties or large-scale systems can range from $75,000 to $200,000+ 
                  depending on scope. Factors affecting cost include trench length, depth based on water 
                  table levels, pipe size, outfall construction, and permit complexity. Projects 
                  requiring extensive trenching in areas with shallow water tables or near sensitive 
                  ecosystems often cost more due to additional permit requirements (SFWMD Environmental 
                  Resource Permits) and specialized techniques. Broward County permit processing, 
                  including DER review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can French drains solve basement water problems in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, foundation French drains are often effective solutions for basement water 
                  problems in Broward County by collecting and redirecting groundwater away from 
                  foundations, especially important given Broward County&apos;s high water table. French 
                  drains prevent water from entering basements and may be combined with interior 
                  drainage systems for comprehensive protection. We assess your specific situation 
                  including water table levels and foundation conditions, and recommend the best 
                  approach, with compliance to Natural Resource Protection Code requirements and storm 
                  event protection, integrating with Broward County&apos;s three-tier infrastructure 
                  framework.
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
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Fort Lauderdale Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Fort Lauderdale French Drain System?"
        description="Get a free quote for your French drain or underdrain installation in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, high water table management, SFWMD Environmental Resource Permits, storm event protection, DER requirements, and regulatory compliance to install subsurface drainage systems that protect your structures and eliminate standing water."
        showPhone={true}
      />
    </main>
  )
}

