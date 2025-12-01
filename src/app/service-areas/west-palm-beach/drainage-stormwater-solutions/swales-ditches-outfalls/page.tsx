import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales, Ditches & Outfalls in West Palm Beach, FL | Palm Beach County',
  description: 'Construction of swales, ditches, and outfall structures in Palm Beach County. Channel surface water runoff and connect to stormwater management systems.',
  openGraph: {
    title: 'Swales, Ditches & Outfalls in West Palm Beach, FL | Palm Beach County',
    description: 'Construction of swales, ditches, and outfall structures to channel surface water runoff in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/swales-ditches-outfalls/`,
  },
}

export default function WestPalmBeachSwalesDitchesOutfallsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Swales, Ditches and Outfalls in West Palm Beach, FL"
        subtitle="Construction of swales, ditches, and outfall structures to channel surface water runoff and connect to stormwater management systems or natural drainage ways across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Swales, ditches, and outfall construction in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Swales, ditches, and outfall services in Palm Beach County are essential for developers, 
              general contractors, property owners, and anyone needing to channel surface water runoff 
              and connect to stormwater management systems throughout Palm Beach County, including West 
              Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Royal Palm Beach, managing existing surface water 
              runoff in Palm Beach, or installing comprehensive drainage infrastructure in Jupiter, 
              swales, ditches, and outfalls effectively channel water. We coordinate contractors with 
              expertise in Palm Beach County drainage requirements, Building Division permits, 
              Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) 
              compliance, and SFWMD 
              Environmental Resource Permits to construct drainage features that meet regulatory 
              requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Swales, ditches, and outfall construction in Palm Beach County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale 
                drainage systems depending on feature length, depth, complexity, and SFWMD Environmental Resource Permit requirements. Projects 
                requiring extensive swale networks often cost more due to additional permit requirements and specialized design. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Swales, Ditches and Outfalls Include in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swale Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of swales (shallow, vegetated drainage channels) with proper slopes to 
                direct water flow, meeting Palm Beach County&apos;s Unified Land Development Code (ULDC) 
                requirements. Swales are typically wider and shallower than ditches, designed to slow 
                water flow and allow infiltration while directing runoff.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Ditch Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of ditches (deeper drainage channels) with proper depths and slopes for 
                water conveyance, sized for stormwater management and meeting 
                Unified Land Development Code (ULDC) compliance. Ditches are designed for higher flow rates 
                and may be lined or unlined depending on design requirements, with consideration of high 
                water table conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes (typically 1-2% minimum) to ensure effective water flow, 
                meeting Palm Beach County requirements. Slopes are critical for drainage function, with 
                steeper slopes for higher flow rates and gentler slopes for infiltration, especially 
                important for swales designed for stormwater management.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Structure Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfall structures where drainage features discharge to stormwater 
                systems, retention areas, or natural water bodies, meeting Palm Beach County&apos;s Unified Land Development Code (ULDC) 
                requirements and SFWMD Environmental Resource Permit standards. 
                Outfalls ensure proper water discharge and prevent erosion at discharge points.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect drainage feature banks from erosion, meeting Palm Beach County Unified Land Development Code (ULDC) 
                requirements. Erosion control ensures long-term drainage function and 
                prevents sediment accumulation, especially important for swales designed for water 
                quality treatment.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Connection to Stormwater Systems</h3>
              <p className={styles.serviceDescription}>
                Connection of swales and ditches to stormwater management systems, retention ponds, or 
                natural drainage ways, meeting stormwater management requirements 
                and Unified Land Development Code (ULDC) compliance. Connections ensure proper water flow 
                and compliance with stormwater management requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Swale and Ditch Considerations</h2>
            <p className={styles.text}>
              Swale, ditch, and outfall construction in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for swale, ditch, and outfall construction 
                projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Swale, ditch, and outfall 
                construction typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Swale, ditch, and outfall 
                construction may require Environmental Resources Management (ERM) review for projects 
                affecting wetlands, protected species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Swale, ditch, and outfall projects must comply with these 
                requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Swale, ditch, and outfall 
                construction may require SFWMD Environmental Resource Permits for stormwater management, 
                especially for systems connecting to surface waters or involving significant land 
                disturbance. As of June 28, 2024, new water quality performance standards were 
                implemented. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects swale and ditch design and may 
                require deeper excavation or dewatering. Water table conditions determine feature depths 
                and may affect drainage function, especially in areas like Palm Beach, Jupiter, 
                and coastal neighborhoods.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Swale and ditch design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Palm Beach County including Palm 
                Beach, Jupiter, Juno Beach, and Tequesta face additional 
                challenges including saltwater intrusion, storm surge, and unique soil conditions that affect 
                swale and ditch design and construction.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Swale and Ditch Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate swale, ditch, and outfall construction throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
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
            <h2 className={styles.heading}>The Swale, Ditch and Outfall Construction Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales, ditches, and outfalls are constructed 
              properly and meet all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes specific to Palm Beach County conditions 
                including regulatory requirements and Unified Land Development Code (ULDC) compliance. Design review ensures construction meets exact 
                requirements for stormwater management.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for swale, ditch, and outfall construction projects in 
                Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for stormwater management, Unified Land Development Code (ULDC) compliance, and coordinate with regulatory 
                agencies. Permits ensure compliance with stormwater management 
                requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                drainage feature construction in Palm Beach County, including expertise with high water 
                table conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental 
                Resource Permit requirements, and hurricane preparedness.
              </li>
              <li>
                <strong>Feature Construction:</strong> Contractors construct swales and ditches to 
                exact depths and dimensions, creating proper drainage channels, meeting Palm Beach County 
                construction standards. Construction establishes feature shape and prepares areas for 
                erosion control installation, with consideration of high water table conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow, meeting Palm Beach County 
                requirements. Slope construction meets engineering specifications and ensures proper 
                drainage function, especially important for swales designed for stormwater management.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies. Outfall structures ensure proper water 
                discharge and prevent erosion, meeting Unified Land Development Code (ULDC) standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections with SFWMD, Palm Beach County Building Division or 
                municipal building departments, and Environmental Resources Management (ERM) where applicable ensure drainage 
                features meet regulatory requirements including Unified Land Development Code (ULDC) standards. Features are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for swale and ditch construction in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction in Palm Beach County requires development permits (Florida 
                  Statute 380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                  Permits for stormwater management, Unified Land Development Code (ULDC) compliance, and 
                  FEMA compliance permits for properties in flood zones. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and allow 
                  infiltration, meeting Palm Beach County&apos;s Unified Land Development Code (ULDC) requirements. 
                  Ditches are deeper channels designed for higher flow rates and water conveyance, sized 
                  for stormwater management. Swales are typically wider and shallower 
                  with gentle slopes, while ditches are deeper with steeper slopes for effective water 
                  transport. Both must comply with Unified Land Development Code (ULDC) requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for swales and ditches in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Swales and ditches in Palm Beach County typically require minimum slopes of 1-2% (1-2 
                  feet drop per 100 feet of length) to ensure effective water flow, meeting county 
                  requirements. Steeper slopes may be required for higher flow rates, while gentler 
                  slopes may be used for swales designed for stormwater management. Exact slope 
                  requirements are specified in engineering designs based on flow rates and drainage function, meeting Unified Land Development Code (ULDC) standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does swale and ditch construction cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction costs in Palm Beach County vary based on feature length, 
                  depth, complexity, and SFWMD Environmental Resource Permit requirements. Typical residential properties range from $20,000 to 
                  $75,000, while commercial properties or large-scale systems can range from $75,000 to 
                  $200,000+ 
                  depending on scope. Factors affecting cost include excavation volume, erosion 
                  control requirements, outfall construction, and permit complexity. Projects requiring 
                  extensive swale networks often cost more due to additional permit requirements (SFWMD Environmental Resource Permits) 
                  and specialized design. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
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
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to West Palm Beach Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Construct Your West Palm Beach Drainage Features?"
        description="Get a free quote for your swale, ditch, and outfall construction in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to construct drainage features that effectively channel surface water runoff."
        showPhone={true}
      />
    </main>
  )
}

