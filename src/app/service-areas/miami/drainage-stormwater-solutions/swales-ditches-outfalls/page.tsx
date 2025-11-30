import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales, Ditches & Outfalls in Miami, FL | Miami-Dade County',
  description: 'Construction of swales, ditches, and outfall structures in Miami-Dade County. Channel surface water runoff and connect to stormwater management systems.',
  openGraph: {
    title: 'Swales, Ditches & Outfalls in Miami, FL | Miami-Dade County',
    description: 'Construction of swales, ditches, and outfall structures to channel surface water runoff in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/swales-ditches-outfalls/`,
  },
}

export default function MiamiSwalesDitchesOutfallsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Swales, Ditches and Outfalls in Miami, FL"
        subtitle="Construction of swales, ditches, and outfall structures to channel surface water runoff and connect to stormwater management systems or natural drainage ways across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Swales, ditches, and outfall construction in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Swales, ditches, and outfall services in Miami-Dade County are essential for developers, 
              general contractors, property owners, and anyone needing to channel surface water runoff 
              and connect to stormwater management systems in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Doral, managing existing surface water 
              runoff in Aventura, or installing comprehensive drainage infrastructure in Coral Gables, 
              swales, ditches, and outfalls effectively channel water. We coordinate contractors with 
              expertise in Miami-Dade County drainage requirements, DERM regulations, the 25-year, 
              72-hour storm event design criteria, FPLOS/WQLOS standards, and on-site retention with 
              groundwater recharge to construct drainage features that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Swales, ditches, and outfall construction in Miami-Dade County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale 
                drainage systems depending on feature length, depth, complexity, FPLOS/WQLOS 
                compliance needs, and DERM permit requirements. Projects requiring extensive swale 
                networks or meeting the 25-year, 72-hour storm event design criteria often cost more 
                due to additional permit requirements and specialized design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Swales, Ditches and Outfalls Include in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swale Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of swales (shallow, vegetated drainage channels) with proper slopes to 
                direct water flow, meeting Miami-Dade County&apos;s emphasis on permeable swales and 
                alternative swale materials that enhance stormwater infiltration. Swales are typically 
                wider and shallower than ditches, designed to slow water flow and allow infiltration 
                while directing runoff, with priority on on-site retention and groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Ditch Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of ditches (deeper drainage channels) with proper depths and slopes for 
                water conveyance, sized for the 25-year, 72-hour storm event and meeting FPLOS/WQLOS 
                standards. Ditches are designed for higher flow rates and may be lined or unlined 
                depending on design requirements, with consideration of high water table conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes (typically 1-2% minimum) to ensure effective water flow, 
                meeting Miami-Dade County requirements. Slopes are critical for drainage function, with 
                steeper slopes for higher flow rates and gentler slopes for infiltration, especially 
                important for permeable swales designed for groundwater recharge.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Structure Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfall structures where drainage features discharge to stormwater 
                systems, retention areas, or natural water bodies, with priority on on-site retention 
                and groundwater recharge as required by Miami-Dade County. Outfalls ensure proper water 
                discharge and prevent erosion at discharge points, meeting FPLOS and WQLOS standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect drainage feature banks from erosion, meeting Miami-Dade County requirements. 
                Erosion control ensures long-term drainage function and prevents sediment accumulation, 
                especially important for swales designed for water quality treatment.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Connection to Stormwater Systems</h3>
              <p className={styles.serviceDescription}>
                Connection of swales and ditches to stormwater management systems, retention ponds, or 
                natural drainage ways, meeting the 25-year, 72-hour storm event design criteria and 
                FPLOS/WQLOS standards. Connections ensure proper water flow and compliance with 
                stormwater management requirements, with priority on on-site retention and groundwater 
                recharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Swale and Ditch Considerations</h2>
            <p className={styles.text}>
              Swale, ditch, and outfall construction in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM as Primary Reviewing Authority:</strong> DERM (Department of Environmental 
                Resources Management) serves as the primary reviewing authority for drainage-related 
                permits and stormwater management systems in Miami-Dade County. Swale, ditch, and 
                outfall construction requires DERM Plan Review Approval for projects requiring 
                Miami-Dade Review under Chapter 24. DERM emphasizes water quality protection and 
                retention, making permitting particularly strict for projects near sensitive ecosystems.
              </li>
              <li>
                <strong>25-Year, 72-Hour Storm Minimum Design Requirement:</strong> Miami-Dade County 
                requires developers to design stormwater systems for the 25-year, 72-hour storm minimum 
                as the baseline design event. Swales and ditches must be sized to handle this design 
                storm, with proper storage volumes and discharge rates to meet both Flood Protection 
                Level of Service (FPLOS) and Water Quality Level of Service (WQLOS) standards.
              </li>
              <li>
                <strong>FPLOS and WQLOS Standards:</strong> Miami-Dade County&apos;s stormwater management 
                criteria include two primary components: Flood Protection Level of Service (FPLOS) and 
                Water Quality Level of Service (WQLOS). FPLOS protects public safety and property, while 
                WQLOS maintains water quality in local waterways, particularly Biscayne Bay. Swales and 
                ditches must be designed to meet both components, with strict pollutant loading 
                calculations.
              </li>
              <li>
                <strong>On-Site Retention with Groundwater Recharge:</strong> Miami-Dade County&apos;s 
                approach emphasizes on-site retention with groundwater recharge, rather than detention 
                and controlled discharge. Swales and ditches should be designed to encourage water 
                infiltration into the aquifer rather than rapid removal from the site, supporting 
                aquifer recharge and reducing stress on the county&apos;s stormwater infrastructure. 
                Permeable swales and alternative swale materials are encouraged to enhance stormwater 
                infiltration.
              </li>
              <li>
                <strong>Public Works Permits for Swale Modifications:</strong> Public Works Permits may 
                be required for swale modifications in some municipalities (e.g., Coral Gables). 
                Restrictive Covenant Agreements may be required for swale changes, ensuring proper 
                maintenance and compliance with municipal requirements. We help identify and coordinate 
                all required permits.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects swale and ditch design and may 
                require deeper excavation or dewatering. Water table conditions determine feature depths 
                and may affect drainage function, especially in areas like Miami Beach, Aventura, and 
                coastal neighborhoods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Swale, ditch, and outfall 
                construction may require SFWMD environmental resource permits for stormwater management, 
                especially for systems connecting to surface waters or involving significant land 
                disturbance. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Impervious Surface Regulations:</strong> Miami-Dade County has implemented 
                ordinances addressing impervious surfaces and paving regulations, with permits required 
                for new paving installations (effective March 31, 2025). Swale and ditch design must 
                account for impervious surface area in the watershed and ensure proper stormwater 
                drainage within properties.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Swale and Ditch Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate swale, ditch, and outfall construction throughout Miami-Dade County, including:
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
            <h2 className={styles.heading}>The Swale, Ditch and Outfall Construction Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales, ditches, and outfalls are constructed 
              properly and meet all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes specific to Miami-Dade County conditions 
                including the 25-year, 72-hour storm event design criteria and FPLOS/WQLOS requirements. 
                Design review ensures construction meets exact requirements for stormwater management, 
                with priority on on-site retention and groundwater recharge.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), Public Works Permits for swale modifications where applicable, 
                Restrictive Covenant Agreements for swale changes, SFWMD environmental resource permits, 
                RER building permits, and coordinate with regulatory agencies. Permits ensure compliance 
                with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                drainage feature construction in Miami-Dade County, including expertise with high water 
                table conditions, DERM requirements, and FPLOS/WQLOS standards.
              </li>
              <li>
                <strong>Feature Construction:</strong> Contractors construct swales and ditches to 
                exact depths and dimensions, creating proper drainage channels, meeting Miami-Dade 
                County construction standards. Construction establishes feature shape and prepares areas 
                for erosion control installation, with consideration of high water table conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow, meeting Miami-Dade County 
                requirements. Slope construction meets engineering specifications and ensures proper 
                drainage function, especially important for permeable swales designed for groundwater 
                recharge.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies, with priority on on-site 
                retention and groundwater recharge as required by Miami-Dade County. Outfall structures 
                ensure proper water discharge and prevent erosion, meeting FPLOS and WQLOS standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections with DERM, SFWMD, and Miami-Dade RER or municipal 
                building departments ensure drainage features meet regulatory requirements including 
                FPLOS and WQLOS standards. Features are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for swale and ditch construction in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction in Miami-Dade County requires DERM Plan Review Approval 
                  for projects requiring Miami-Dade Review under Chapter 24. Public Works Permits may 
                  be required for swale modifications in some municipalities (e.g., Coral Gables). 
                  Restrictive Covenant Agreements may be required for swale changes. SFWMD environmental 
                  resource permits may be required for stormwater management, especially for systems 
                  connecting to surface waters. RER building permits may be required for significant 
                  infrastructure installation. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and allow 
                  infiltration, with priority on on-site retention and groundwater recharge as required 
                  by Miami-Dade County. Permeable swales and alternative swale materials are encouraged 
                  to enhance stormwater infiltration. Ditches are deeper channels designed for higher 
                  flow rates and water conveyance, sized for the 25-year, 72-hour storm event. Swales 
                  are typically wider and shallower with gentle slopes, while ditches are deeper with 
                  steeper slopes for effective water transport.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for swales and ditches in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Swales and ditches in Miami-Dade County typically require minimum slopes of 1-2% (1-2 
                  feet drop per 100 feet of length) to ensure effective water flow, meeting county 
                  requirements. Steeper slopes may be required for higher flow rates, while gentler 
                  slopes may be used for infiltration swales designed for groundwater recharge. Exact 
                  slope requirements are specified in engineering designs based on flow rates from the 
                  25-year, 72-hour storm event and drainage function, meeting FPLOS and WQLOS standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does swale and ditch construction cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction costs in Miami-Dade County vary based on feature length, 
                  depth, complexity, FPLOS/WQLOS compliance needs, and DERM permit requirements. Typical 
                  residential properties range from $20,000 to $75,000, while commercial properties or 
                  large-scale systems can range from $75,000 to $200,000+ depending on scope. Factors 
                  affecting cost include excavation volume, erosion control requirements, outfall 
                  construction, and permit complexity. Projects requiring extensive swale networks or 
                  meeting the 25-year, 72-hour storm event design criteria often cost more due to 
                  additional permit requirements and specialized design.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are permeable swales and why are they encouraged in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Permeable swales are swales designed with materials and construction methods that 
                  enhance stormwater infiltration and groundwater recharge, meeting Miami-Dade County&apos;s 
                  emphasis on on-site retention with groundwater recharge. Permeable swales and 
                  alternative swale materials are encouraged to enhance stormwater infiltration, supporting 
                  aquifer recharge and reducing stress on the county&apos;s stormwater infrastructure. 
                  These swales slow water flow, filter pollutants, and promote infiltration while directing 
                  runoff, meeting both FPLOS and WQLOS standards.
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
              <a href="/services/drainage-stormwater-solutions/swales-ditches-outfalls/" className={styles.backLink}>
                ← View Swales, Ditches and Outfalls (All Areas)
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
        title="Ready to Construct Your Miami Drainage Features?"
        description="Get a free quote for your swale, ditch, and outfall construction in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, 25-year storm event design criteria, FPLOS/WQLOS standards, permeable swales, and regulatory compliance to construct drainage features that effectively channel surface water runoff."
        showPhone={true}
      />
    </main>
  )
}

