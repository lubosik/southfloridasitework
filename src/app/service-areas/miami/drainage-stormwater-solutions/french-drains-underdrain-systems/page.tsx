import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'French Drains & Underdrain Systems in Miami, FL | Miami-Dade County',
  description: 'Installation of French drains and underdrain systems in Miami-Dade County. Subsurface drainage to collect and redirect groundwater and surface water.',
  openGraph: {
    title: 'French Drains & Underdrain Systems in Miami, FL | Miami-Dade County',
    description: 'Installation of French drains and underdrain systems for subsurface drainage in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/french-drains-underdrain-systems/`,
  },
}

export default function MiamiFrenchDrainsUnderdrainSystemsPage() {
  return (
    <main>
      <HeroWithQuote
        title="French Drains and Underdrain Systems in Miami, FL"
        subtitle="Installation of French drains, underdrain systems, and subsurface drainage to collect and redirect groundwater and surface water away from foundations and low-lying areas across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="French drains and underdrain systems in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              French drains and underdrain systems in Miami-Dade County are essential for property 
              owners, homeowners, commercial property managers, and anyone dealing with high water 
              tables, groundwater issues, or water pooling around foundations in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re experiencing water in your basement or crawl space in Miami Beach, 
              water pooling around your foundation in Coral Gables, or high groundwater levels 
              affecting your property in Aventura, French drains and underdrain systems can 
              effectively collect and redirect water. We coordinate contractors with expertise in 
              Miami-Dade County drainage requirements, DERM regulations, high water table conditions, 
              and on-site retention with groundwater recharge to install subsurface drainage systems 
              that protect structures.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                French drain and underdrain installation in Miami-Dade County typically ranges from 
                <strong> $25,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale systems 
                depending on system length, depth, complexity, high water table conditions, and DERM 
                permit requirements. Projects requiring extensive trenching in areas with shallow water 
                tables or near sensitive ecosystems often cost more due to additional permit requirements 
                and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What French Drains and Underdrain Systems Include in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>System Design</h3>
              <p className={styles.serviceDescription}>
                Design of French drain and underdrain systems based on Miami-Dade County site 
                conditions, water sources, high water table levels, and drainage requirements. Design 
                determines pipe placement, depth based on transmissive soil layers and existing 
                groundwater conditions, slope, and outfall locations for effective water collection 
                and redirection, with priority on on-site retention and groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Trench Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of trenches to proper depths and widths for French drain installation, 
                with depths established based on prudent benefit/cost analysis considering transmissive 
                soil layers and existing groundwater conditions. Trenches are excavated with proper 
                slopes to ensure water flows to outfalls, with depths based on water table levels and 
                foundation protection needs specific to Miami-Dade County&apos;s high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Perforated Pipe Installation</h3>
              <p className={styles.serviceDescription}>
                Installation of authorized types of perforated, slotted, or open joint drainage pipes 
                that collect groundwater and surface water, meeting Miami-Dade County construction 
                standards. Perforated pipes allow water to enter through holes while directing flow to 
                outfalls or discharge points, with proper installation in coordination with DERM 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Gravel Bedding and Backfill</h3>
              <p className={styles.serviceDescription}>
                Placement of coarse aggregate or ballast rock bedding around pipes and backfill with 
                proper drainage material, meeting Miami-Dade County construction standards. Gravel 
                provides drainage around pipes and allows water to flow into perforated pipes 
                effectively, with filter fabric as required by county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfalls where French drains discharge to swales, retention areas, or 
                stormwater systems, meeting Miami-Dade County&apos;s emphasis on on-site retention with 
                groundwater recharge. Outfalls ensure proper water discharge and prevent erosion at 
                discharge points, with priority on groundwater recharge over simple discharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Surface Restoration</h3>
              <p className={styles.serviceDescription}>
                Restoration of surface areas after installation, including backfill, grading, and 
                landscaping, meeting Miami-Dade County requirements. Surface restoration ensures proper 
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
            <h2 className={styles.heading}>Miami-Dade County French Drain Considerations</h2>
            <p className={styles.text}>
              French drain and underdrain installation in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Department of Environmental 
                Resources Management) serves as the primary reviewing authority for drainage-related 
                permits and stormwater management systems in Miami-Dade County. French drain installation 
                requires DERM Plan Review Approval for projects requiring Miami-Dade Review under 
                Chapter 24. DERM emphasizes water quality protection and retention, making permitting 
                particularly strict for projects near sensitive ecosystems.
              </li>
              <li>
                <strong>French Drain Definition and Construction Standards:</strong> In Miami-Dade 
                County, French drains are defined as structures consisting of a perforated, slotted, 
                or open joint pipe buried in a trench and surrounded by ballast rock, used for 
                groundwater drainage and stormwater management. Construction must utilize authorized 
                types of pipe with coarse aggregate or ballast rock when specified, along with filter 
                fabric, meeting county construction standards.
              </li>
              <li>
                <strong>High Water Table and Groundwater Drainage:</strong> Miami-Dade County&apos;s 
                high water table, which can be within 2-3 feet of the surface in many areas, makes 
                French drains particularly effective for managing groundwater. The depth and location 
                of French drain trenches are established based on prudent benefit/cost analysis, 
                considering factors such as the depth of transmissive soil layers and existing 
                groundwater conditions. Drains must be installed at proper depths to intercept 
                groundwater before it reaches structures.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach to drainage design specifically encourages on-site retention with groundwater 
                recharge rather than simple detention and discharge methods. French drains should be 
                designed to promote aquifer recharge through properly designed drainage systems, 
                supporting aquifer recharge and reducing stress on the county&apos;s stormwater 
                infrastructure.
              </li>
              <li>
                <strong>FPLOS and WQLOS Compliance:</strong> Miami-Dade County&apos;s comprehensive 
                stormwater management policies require that all future development and new or 
                replacement stormwater infrastructure comply with established drainage criteria. French 
                drain systems must be designed in coordination with DERM and must account for the 
                county&apos;s emphasis on both flood protection (FPLOS) and water quality treatment 
                requirements (WQLOS).
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including Miami 
                Beach, Key Biscayne, Bal Harbour, and Aventura have unique soil characteristics 
                including limestone bedrock, sandy soils, and organic materials that affect French 
                drain installation and performance. Soil conditions determine trench depths, pipe 
                placement, and gravel requirements, with consideration of transmissive soil layers.
              </li>
              <li>
                <strong>Outfall Requirements:</strong> French drains must discharge to proper outfalls 
                such as swales, retention areas, or stormwater systems, meeting Miami-Dade County&apos;s 
                emphasis on on-site retention and groundwater recharge. Outfall design must comply with 
                regulatory requirements and prevent erosion, with priority on groundwater recharge over 
                simple discharge.
              </li>
              <li>
                <strong>Permit Requirements:</strong> French drain installation may require DERM Plan 
                Review Approval for projects requiring Miami-Dade Review under Chapter 24, especially 
                for large-scale systems or those connecting to stormwater systems. Permits ensure 
                compliance with regulations and may require specific material specifications or 
                placement requirements. We help identify and coordinate all required permits.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade French Drain Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate French drain and underdrain installation throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>High Water Table Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Aventura</li>
                  <li>Surfside</li>
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
            <h2 className={styles.heading}>The French Drain Installation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your French drain or underdrain system is installed 
              properly and effectively manages water while meeting all Miami-Dade County regulatory 
              requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify water sources, 
                flow patterns, and drainage problems specific to Miami-Dade County conditions 
                including high water table assessment, transmissive soil layer analysis, and 
                foundation conditions. Assessment includes reviewing water table levels, foundation 
                conditions, and areas requiring drainage protection.
              </li>
              <li>
                <strong>System Design:</strong> We develop a French drain design that addresses specific 
                drainage problems and protects structures, meeting Miami-Dade County construction 
                standards and DERM requirements. Design determines pipe placement, depth based on 
                transmissive soil layers and existing groundwater conditions, slope, and outfall 
                locations, with priority on on-site retention and groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), RER building permits, and coordinate with regulatory agencies. Permits 
                ensure compliance with regulations and may be required for large-scale systems or 
                those connecting to stormwater systems.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for French drain installation in Miami-Dade 
                County, including expertise with high water table conditions, DERM requirements, and 
                on-site retention with groundwater recharge.
              </li>
              <li>
                <strong>Trench Excavation:</strong> Contractors excavate trenches to proper depths 
                and widths with proper slopes, with depths established based on prudent benefit/cost 
                analysis considering transmissive soil layers and existing groundwater conditions. 
                Trenches are prepared for pipe installation with proper depth control, meeting 
                Miami-Dade County requirements.
              </li>
              <li>
                <strong>Pipe and Gravel Installation:</strong> Authorized types of perforated, slotted, 
                or open joint pipes are installed with coarse aggregate or ballast rock bedding and 
                backfill, along with filter fabric as required by Miami-Dade County construction 
                standards. Installation ensures proper water collection and flow to outfalls, with 
                priority on groundwater recharge.
              </li>
              <li>
                <strong>Outfall Construction and Final Inspection:</strong> Outfalls are constructed 
                with priority on on-site retention and groundwater recharge, and final inspections with 
                DERM ensure French drains effectively manage water and protect structures, meeting 
                FPLOS and WQLOS standards. Systems are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for French drain installation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation in Miami-Dade County may require DERM Plan Review Approval 
                  for projects requiring Miami-Dade Review under Chapter 24, especially for large-scale 
                  systems or those connecting to stormwater systems. RER building permits may be 
                  required for significant trenching. Projects near sensitive ecosystems may require 
                  additional permits due to DERM&apos;s emphasis on water quality protection and retention. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep should French drains be installed in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  French drain depth in Miami-Dade County depends on water table levels, foundation 
                  depth, transmissive soil layers, and drainage requirements. The depth and location of 
                  French drain trenches are established based on prudent benefit/cost analysis, 
                  considering factors such as the depth of transmissive soil layers and existing 
                  groundwater conditions. Foundation French drains are typically installed at or below 
                  foundation footing level, while surface French drains may be shallower. Proper depth 
                  ensures effective water collection and protection of structures, especially important 
                  given Miami-Dade&apos;s high water table.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Miami-Dade County&apos;s construction standards for French drains?</h3>
                <p className={styles.faqAnswer}>
                  In Miami-Dade County, French drains are defined as structures consisting of a 
                  perforated, slotted, or open joint pipe buried in a trench and surrounded by ballast 
                  rock. Construction must utilize authorized types of pipe with coarse aggregate or 
                  ballast rock when specified, along with filter fabric, meeting county construction 
                  standards. Systems must be designed in coordination with DERM and must account for the 
                  county&apos;s emphasis on both flood protection (FPLOS) and water quality treatment 
                  requirements (WQLOS).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does French drain installation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  French drain installation costs in Miami-Dade County vary based on system length, 
                  depth, complexity, high water table conditions, and DERM permit requirements. Typical 
                  residential properties range from $25,000 to $75,000, while commercial properties or 
                  large-scale systems can range from $75,000 to $200,000+ depending on scope. Factors 
                  affecting cost include trench length, depth based on transmissive soil layers, pipe 
                  size, outfall construction, and permit complexity. Projects requiring extensive 
                  trenching in areas with shallow water tables or near sensitive ecosystems often cost 
                  more due to additional permit requirements and specialized techniques.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can French drains solve basement water problems in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, foundation French drains are often effective solutions for basement water 
                  problems in Miami-Dade County by collecting and redirecting groundwater away from 
                  foundations, especially important given Miami-Dade&apos;s high water table. French 
                  drains prevent water from entering basements and may be combined with interior 
                  drainage systems for comprehensive protection. We assess your specific situation 
                  including transmissive soil layers and existing groundwater conditions, and recommend 
                  the best approach, with priority on on-site retention and groundwater recharge as 
                  required by Miami-Dade County.
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
              <a href="/service-areas/miami/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Miami Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Miami French Drain System?"
        description="Get a free quote for your French drain or underdrain installation in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, high water table management, on-site retention with groundwater recharge, and regulatory compliance to install subsurface drainage systems that protect your structures and eliminate standing water."
        showPhone={true}
      />
    </main>
  )
}

