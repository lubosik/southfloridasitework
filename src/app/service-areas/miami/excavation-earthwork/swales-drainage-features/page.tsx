import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales & Drainage Features in Miami, FL | Miami-Dade County',
  description: 'Excavation of swales, ditches, and drainage features in Miami-Dade County. Proper slopes and connections to stormwater management systems.',
  openGraph: {
    title: 'Swales & Drainage Features in Miami, FL | Miami-Dade County',
    description: 'Excavation of swales, ditches, and drainage features with proper slopes in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/excavation-earthwork/swales-drainage-features/`,
  },
}

export default function MiamiSwalesDrainageFeaturesPage() {
  return (
    <main>
      <HeroWithQuote
        title="Swales and Drainage Features in Miami, FL"
        subtitle="Excavation of swales, ditches, and other drainage features with proper slopes and connections to stormwater management systems across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Swales and drainage feature excavation in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Swales and drainage feature services in Miami-Dade County are essential for developers, 
              general contractors, property owners, and anyone needing to direct stormwater runoff away 
              from structures and toward stormwater management systems in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Doral, fixing existing drainage problems 
              in Aventura, or installing stormwater management systems in Coral Gables, swales and 
              drainage features effectively direct water flow. We coordinate licensed contractors with 
              the equipment and expertise to excavate drainage features that meet Miami-Dade County 
              engineering specifications, DERM requirements, and SFWMD standards, with emphasis on 
              on-site retention and groundwater recharge.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Swales and drainage feature projects in Miami-Dade County typically range from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale 
                drainage systems depending on feature length, depth, complexity, and dewatering 
                requirements. Projects requiring extensive dewatering or working in flood zones often 
                cost more due to additional permit requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Swales and Drainage Feature Excavation Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swale Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of swales (shallow, vegetated drainage channels) with proper slopes to 
                direct water flow, designed for on-site retention and groundwater recharge as required 
                by Miami-Dade County. Swales are typically wider and shallower than ditches, designed 
                to slow water flow and allow infiltration while directing runoff, meeting FPLOS and 
                WQLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Ditch Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of ditches (deeper drainage channels) with proper depths and slopes for 
                water conveyance, meeting Miami-Dade County&apos;s 25-year, 72-hour storm minimum design 
                requirements. Ditches are designed for higher flow rates and may be lined or unlined 
                depending on design requirements and DERM specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes (typically 1-2% minimum) to ensure effective water flow 
                and groundwater recharge, meeting Miami-Dade County requirements. Slopes are critical 
                for drainage function, with steeper slopes for higher flow rates and gentler slopes 
                for infiltration, especially important for permeable swales designed for groundwater 
                recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfalls where drainage features discharge to stormwater systems, 
                retention ponds, or natural water bodies, meeting Miami-Dade County and DERM 
                requirements. Outfalls ensure proper water discharge and prevent erosion at discharge 
                points, with strict pollutant loading calculations as required by county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Catch Basin Integration</h3>
              <p className={styles.serviceDescription}>
                Integration of catch basins and inlets to collect stormwater and direct it into 
                drainage features, meeting Miami-Dade County stormwater management requirements. Catch 
                basins prevent debris from entering drainage systems and provide access for maintenance, 
                essential for maintaining FPLOS and WQLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect drainage feature banks from erosion, meeting Miami-Dade DERM requirements for 
                environmental protection. Erosion control ensures long-term drainage function and 
                prevents sediment accumulation, especially important given Miami-Dade&apos;s heavy 
                rainfall and hurricane conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Drainage Feature Considerations</h2>
            <p className={styles.text}>
              Swales and drainage feature excavation in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Division of Environmental 
                Resources Management) serves as the primary reviewing authority for drainage projects 
                in Miami-Dade County. Projects must also comply with regulations from SFWMD and FDEP, 
                which establish regional standards that local ordinances build upon. DERM requires 
                proper design, permitting, and environmental protection measures.
              </li>
              <li>
                <strong>25-Year, 72-Hour Storm Minimum Design:</strong> Miami-Dade County mandates that 
                stormwater systems be designed for the 25-year, 72-hour storm minimum as the design 
                storm requirement. This standard emphasizes flood protection while maintaining water 
                quality standards that include both Flood Protection Level of Service (FPLOS) and 
                Water Quality Level of Service (WQLOS) components. Drainage features must be sized to 
                handle this design storm.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach prioritizes on-site retention with groundwater recharge over simple detention 
                and discharge. This means swales and drainage features are designed to encourage water 
                infiltration into the aquifer rather than rapid removal from the site. Permeable swales 
                and alternative swale materials are encouraged to enhance stormwater infiltration and 
                environmental protection.
              </li>
              <li>
                <strong>Strict Pollutant Loading Calculations:</strong> Miami-Dade County requires 
                strict pollutant loading calculations, reflecting the county&apos;s emphasis on water 
                quality protection throughout the stormwater management system. Drainage features must 
                be designed to reduce pollutant loading and meet WQLOS standards.
              </li>
              <li>
                <strong>Public Works Permits and Restrictive Covenant Agreements:</strong> For swales 
                specifically, municipalities within Miami-Dade County (such as Coral Gables) require 
                Public Works Permits for swale modifications, which are issued at no permit fee. A 
                Restrictive Covenant Agreement is also required when making changes to swale areas. 
                County and state roads have additional requirements beyond municipal standards.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Miami-Dade&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, affects drainage feature 
                design and may require deeper excavation or dewatering. DERM Class V Permits are 
                required for temporary dewatering to ensure that sediment, turbidity, and contaminants 
                are removed before discharge. Water table conditions determine feature depths and may 
                affect drainage function, especially in areas like Miami Beach, Aventura, and coastal 
                neighborhoods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Drainage features may require 
                SFWMD environmental resource permits for land disturbance and stormwater management, 
                especially for features near wetlands or surface waters. We coordinate all required 
                SFWMD permits.
              </li>
              <li>
                <strong>Impervious Surface Regulations:</strong> Miami-Dade County has implemented 
                ordinances addressing impervious surfaces and paving regulations, with permits required 
                for new paving installations on properties. Drainage feature design must account for 
                impervious surface area in the watershed and ensure proper stormwater management.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Swales and Drainage Feature Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate swales and drainage feature excavation throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
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
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Westchester</li>
                  <li>Kendall</li>
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
            <h2 className={styles.heading}>The Drainage Feature Excavation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales and drainage features are excavated properly 
              and meet all Miami-Dade County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes specific to Miami-Dade County&apos;s 
                25-year, 72-hour storm minimum design requirements and FPLOS/WQLOS standards. Design 
                review ensures excavation meets exact requirements for stormwater management, on-site 
                retention, and groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), Public Works Permits for swale modifications (in municipalities like Coral 
                Gables), Restrictive Covenant Agreements for swale changes, SFWMD environmental resource 
                permits for land disturbance, DERM Class V Permits for dewatering if required, and 
                coordinate with regulatory agencies. Projects must use licensed Florida drainage engineers 
                to ensure compliance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors, dewatering systems) 
                and experience for drainage feature excavation in Miami-Dade County, including expertise 
                with high water table conditions, coastal soils, and regulatory compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For drainage features requiring dewatering, contractors 
                set up dewatering systems in compliance with DERM Class V Permit requirements, ensuring 
                sediment, turbidity, and contaminants are removed before discharge. This is especially 
                important given Miami-Dade&apos;s high water table.
              </li>
              <li>
                <strong>Feature Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper drainage channels designed for on-site retention and 
                groundwater recharge. Excavation establishes feature shape and prepares areas for erosion 
                control installation, accounting for Miami-Dade&apos;s high water table and coastal soil 
                conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow and groundwater recharge, 
                meeting Miami-Dade County requirements. Slope construction meets engineering 
                specifications and ensures proper drainage function, especially important for permeable 
                swales designed for infiltration.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies, meeting Miami-Dade County and 
                DERM requirements. Outfall structures ensure proper water discharge and prevent erosion, 
                with strict pollutant loading calculations as required by county standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed meeting Miami-Dade DERM requirements, and final inspections ensure drainage 
                features meet regulatory requirements including FPLOS and WQLOS standards. Features are 
                ready for operation after final approval, with proper maintenance access for ongoing 
                compliance.
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
                <h3 className={styles.faqQuestion}>What permits are required for drainage feature excavation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation in Miami-Dade County requires DERM Plan Review Approval 
                  (for projects requiring Miami-Dade Review under Chapter 24). Public Works Permits are 
                  required for swale modifications in municipalities like Coral Gables, and Restrictive 
                  Covenant Agreements are required when making changes to swale areas. SFWMD environmental 
                  resource permits may be required for land disturbance. DERM Class V Permits are required 
                  for dewatering if excavations encounter water. Projects must use licensed Florida 
                  drainage engineers to ensure compliance with all applicable SFWMD, DERM, and local 
                  requirements. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the 25-year, 72-hour storm requirement in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County mandates that stormwater systems be designed for the 25-year, 72-hour 
                  storm minimum as the design storm requirement. This standard emphasizes flood protection 
                  while maintaining water quality standards that include both Flood Protection Level of 
                  Service (FPLOS) and Water Quality Level of Service (WQLOS) components. Drainage features 
                  must be sized to handle this design storm, with proper storage volumes and discharge 
                  rates to meet both flood protection and water quality requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and allow 
                  infiltration, prioritizing on-site retention and groundwater recharge as required by 
                  Miami-Dade County. Ditches are deeper channels designed for higher flow rates and water 
                  conveyance, sized for the 25-year, 72-hour storm. Swales are typically wider and 
                  shallower with gentle slopes, while ditches are deeper with steeper slopes for effective 
                  water transport. Miami-Dade encourages permeable swales and alternative swale materials 
                  to enhance stormwater infiltration and environmental protection.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect drainage feature excavation?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, affects drainage feature design and may require deeper excavation or dewatering. 
                  DERM Class V Permits are required for temporary dewatering to ensure that sediment, 
                  turbidity, and contaminants are removed before discharge. Water table conditions determine 
                  feature depths and may affect drainage function, especially in areas like Miami Beach, 
                  Aventura, and coastal neighborhoods where the water table is particularly high. This 
                  adds complexity and cost to drainage feature projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage feature excavation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation costs in Miami-Dade County vary based on feature length, 
                  depth, complexity, and dewatering requirements. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties or large-scale systems can range from 
                  $75,000 to $200,000+ depending on scope. Factors affecting cost include excavation volume, 
                  erosion control requirements, outfall construction, dewatering needs, and permit 
                  complexity. Projects requiring extensive dewatering or working in flood zones often cost 
                  more due to additional permit requirements and specialized techniques.
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
              <a href="/services/excavation-earthwork/swales-drainage-features/" className={styles.backLink}>
                ← View Swales and Drainage Features (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/miami/excavation-earthwork/" className={styles.backLink}>
                ← Back to Miami Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Miami Drainage Features?"
        description="Get a free quote for your swales and drainage feature excavation in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, 25-year storm event design criteria, FPLOS/WQLOS standards, high water table dewatering, and regulatory compliance to excavate drainage features that effectively manage stormwater runoff."
        showPhone={true}
      />
    </main>
  )
}

