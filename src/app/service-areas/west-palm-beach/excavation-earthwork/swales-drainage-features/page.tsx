import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales & Drainage Features in West Palm Beach, FL | Palm Beach County',
  description: 'Excavation of swales, ditches, and drainage features in Palm Beach County. Proper slopes and connections to stormwater management systems.',
  openGraph: {
    title: 'Swales & Drainage Features in West Palm Beach, FL | Palm Beach County',
    description: 'Excavation of swales, ditches, and drainage features with proper slopes in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/excavation-earthwork/swales-drainage-features/`,
  },
}

export default function WestPalmBeachSwalesDrainageFeaturesPage() {
  return (
    <main>
      <HeroWithQuote
        title="Swales and Drainage Features in West Palm Beach, FL"
        subtitle="Excavation of swales, ditches, and other drainage features with proper slopes and connections to stormwater management systems across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Swales and drainage feature excavation in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Swales and drainage feature services in Palm Beach County are essential for developers, 
              general contractors, property owners, and anyone needing to direct stormwater runoff away 
              from structures and toward stormwater management systems throughout Palm Beach County, including 
              West Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Royal Palm Beach, fixing existing drainage problems 
              in Palm Beach, or installing stormwater management systems in Wellington, swales and 
              drainage features effectively direct water flow. We coordinate licensed contractors with 
              the equipment and expertise to excavate drainage features that meet Palm Beach County 
              engineering specifications, Unified Land Development Code (ULDC) requirements, and SFWMD 
              Environmental Resource Permit standards, with emphasis on environmental compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Swales and drainage feature projects in Palm Beach County typically range from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale 
                drainage systems depending on feature length, depth, complexity, and dewatering 
                requirements. Projects requiring extensive dewatering or working in flood zones often 
                cost more due to additional permit requirements and specialized techniques. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Swales and Drainage Feature Excavation Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swale Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of swales (shallow, vegetated drainage channels) with proper slopes to 
                direct water flow, designed for stormwater management as required by Palm Beach County. 
                Swales are typically wider and shallower than ditches, designed to slow water flow and 
                allow infiltration while directing runoff, meeting Unified Land Development Code (ULDC) 
                standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Ditch Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of ditches (deeper drainage channels) with proper depths and slopes for 
                water conveyance, meeting Palm Beach County stormwater management requirements. 
                Ditches are designed for higher flow rates and may be lined or unlined depending on design 
                requirements and Unified Land Development Code (ULDC) specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes (typically 1-2% minimum) to ensure effective water flow 
                and stormwater management, meeting Palm Beach County requirements. Slopes are critical 
                for drainage function, with steeper slopes for higher flow rates and gentler slopes 
                for infiltration, especially important for permeable swales designed for stormwater 
                management.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfalls where drainage features discharge to stormwater systems, 
                retention ponds, or natural water bodies, meeting Palm Beach County and Unified Land 
                Development Code (ULDC) requirements. Outfalls ensure proper water discharge and prevent erosion 
                at discharge points, with compliance to SFWMD Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Catch Basin Integration</h3>
              <p className={styles.serviceDescription}>
                Integration of catch basins and inlets to collect stormwater and direct it into 
                drainage features, meeting Palm Beach County stormwater management requirements. Catch 
                basins prevent debris from entering drainage systems and provide access for maintenance, 
                essential for maintaining Unified Land Development Code (ULDC) 
                compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect drainage feature banks from erosion, meeting Palm Beach County Unified Land 
                Development Code (ULDC) requirements for environmental protection. Erosion control ensures 
                long-term drainage function and prevents sediment accumulation, especially important 
                given Palm Beach County&apos;s heavy rainfall and hurricane conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Drainage Feature Considerations</h2>
            <p className={styles.text}>
              Swales and drainage feature excavation in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for drainage feature excavation projects in Palm Beach 
                County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Drainage feature projects require Building Division 
                permits from Palm Beach County Building Division. Building permits must be obtained before 
                beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Drainage feature projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Drainage feature projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Drainage features may require 
                SFWMD Environmental Resource Permits for land disturbance and stormwater management, 
                especially for features near wetlands or surface waters. As of June 28, 2024, new water 
                quality performance standards were implemented. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Palm Beach County&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, affects drainage feature 
                design and may require deeper excavation or dewatering. SFWMD Environmental Resource 
                Permits are required for dewatering activities affecting state waters. The applicant must 
                have all applicable SFWMD permits before proceeding with dewatering operations. Water 
                table conditions determine feature depths and may affect drainage function, especially in 
                areas like Palm Beach, Jupiter, and coastal neighborhoods.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Drainage feature design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. Building 
                Division and ERM review can add time to projects. We coordinate permit applications to minimize 
                delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Swales and Drainage Feature Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate swales and drainage feature excavation throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Boca Raton</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Drainage Feature Excavation Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales and drainage features are excavated properly 
              and meet all Palm Beach County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes specific to Palm Beach County&apos;s stormwater 
                management requirements and Unified Land Development Code (ULDC) compliance. 
                Design review ensures excavation meets exact requirements for stormwater management and 
                regulatory compliance.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for drainage feature excavation projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management, Unified Land Development Code (ULDC) 
                compliance, and coordinate with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors, dewatering systems) 
                and experience for drainage feature excavation in Palm Beach County, including expertise 
                with high water table conditions, coastal soils, and regulatory 
                compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For drainage features requiring dewatering, contractors 
                set up dewatering systems in compliance with SFWMD Environmental Resource Permit 
                requirements for activities affecting state waters, ensuring proper water quality 
                management and discharge compliance. The applicant must have all applicable SFWMD permits 
                before proceeding with dewatering operations. This is especially important given Palm Beach 
                County&apos;s high water table.
              </li>
              <li>
                <strong>Feature Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper drainage channels designed for stormwater management. 
                Excavation establishes feature shape and prepares areas for erosion control installation, 
                accounting for Palm Beach County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow and stormwater management, 
                meeting Palm Beach County requirements. Slope construction meets engineering 
                specifications and ensures proper drainage function, especially important for permeable 
                swales designed for infiltration.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies, meeting Palm Beach County and 
                Unified Land Development Code (ULDC) requirements. Outfall structures ensure proper water 
                discharge and prevent erosion, with compliance to SFWMD Environmental Resource Permit 
                requirements.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed meeting Palm Beach County Unified Land Development Code (ULDC) requirements, and final 
                inspections ensure drainage features meet regulatory requirements including Unified Land 
                Development Code (ULDC) standards. Features are ready for 
                operation after final approval, with proper maintenance access for ongoing compliance.
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
                <h3 className={styles.faqQuestion}>What permits are required for drainage feature excavation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation in Palm Beach County requires development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach 
                  County Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits 
                  for land disturbance and stormwater management, Unified Land Development Code (ULDC) 
                  compliance, and FEMA compliance permits for properties in flood zones. We help 
                  identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and allow 
                  infiltration, prioritizing stormwater management as required by Palm Beach County. Ditches 
                  are deeper channels designed for higher flow rates and water conveyance, sized for stormwater 
                  management requirements. Swales are typically wider and shallower with 
                  gentle slopes, while ditches are deeper with steeper slopes for effective water transport. 
                  Both must comply with Unified Land Development Code (ULDC) requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect drainage feature excavation?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, affects drainage feature design and may require deeper excavation or dewatering. 
                  SFWMD Environmental Resource Permits are required for dewatering activities affecting 
                  state waters. The applicant must have all applicable SFWMD permits before proceeding 
                  with dewatering operations. Water table conditions determine feature depths and may 
                  affect drainage function, especially in areas like Palm Beach, Jupiter, and coastal 
                  neighborhoods where the water table is particularly high. This adds complexity and cost 
                  to drainage feature projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage feature excavation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation costs in Palm Beach County vary based on feature length, 
                  depth, complexity, and dewatering requirements. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties or large-scale systems can range from 
                  $75,000 to $200,000+ depending on scope. Factors affecting cost include excavation volume, 
                  erosion control requirements, outfall construction, dewatering needs, and permit 
                  complexity. Projects requiring extensive dewatering or working in flood zones often cost 
                  more due to additional permit requirements (SFWMD Environmental Resource Permits) and 
                  specialized techniques. Palm Beach County permit processing, including ERM review, can add 
                  time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about hurricane preparedness for drainage features in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s location makes it vulnerable to hurricanes and tropical storms. Drainage 
                  feature design must account for hurricane-force winds, storm surge, and heavy rainfall, 
                  ensuring long-term functionality and compliance with regulatory requirements. Erosion control 
                  measures, proper slope construction, and outfall design are critical for hurricane 
                  resilience. We coordinate drainage feature construction that meets these requirements and 
                  enhances property resilience.
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
              <a href="/service-areas/west-palm-beach/excavation-earthwork/" className={styles.backLink}>
                ← Back to West Palm Beach Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your West Palm Beach Drainage Features?"
        description="Get a free quote for your swales and drainage feature excavation in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, high water table dewatering, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to excavate drainage features that effectively manage stormwater runoff."
        showPhone={true}
      />
    </main>
  )
}

