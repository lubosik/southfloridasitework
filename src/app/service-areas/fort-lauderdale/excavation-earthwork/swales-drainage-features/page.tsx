import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales & Drainage Features in Fort Lauderdale, FL | Broward County',
  description: 'Excavation of swales, ditches, and drainage features in Broward County. Proper slopes and connections to stormwater management systems.',
  openGraph: {
    title: 'Swales & Drainage Features in Fort Lauderdale, FL | Broward County',
    description: 'Excavation of swales, ditches, and drainage features with proper slopes in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/excavation-earthwork/swales-drainage-features/`,
  },
}

export default function FortLauderdaleSwalesDrainageFeaturesPage() {
  return (
    <main>
      <HeroWithQuote
        title="Swales and Drainage Features in Fort Lauderdale, FL"
        subtitle="Excavation of swales, ditches, and other drainage features with proper slopes and connections to stormwater management systems across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Swales and drainage feature excavation in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Swales and drainage feature services in Broward County are essential for developers, 
              general contractors, property owners, and anyone needing to direct stormwater runoff away 
              from structures and toward stormwater management systems throughout Broward County, including 
              Fort Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Plantation, fixing existing drainage problems 
              in Fort Lauderdale, or installing stormwater management systems in Weston, swales and 
              drainage features effectively direct water flow. We coordinate licensed contractors with 
              the equipment and expertise to excavate drainage features that meet Broward County 
              engineering specifications, Natural Resource Protection Code requirements, and SFWMD 
              Environmental Resource Permit standards, with emphasis on storm event protection and 
              environmental compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Swales and drainage feature projects in Broward County typically range from 
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
          <h2 className={styles.heading}>What Swales and Drainage Feature Excavation Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swale Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of swales (shallow, vegetated drainage channels) with proper slopes to 
                direct water flow, designed for stormwater management as required by Broward County. 
                Swales are typically wider and shallower than ditches, designed to slow water flow and 
                allow infiltration while directing runoff, meeting storm event protection requirements 
                and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Ditch Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation of ditches (deeper drainage channels) with proper depths and slopes for 
                water conveyance, meeting Broward County&apos;s storm event protection requirements (100-year, 
                3-day storm event for structures; 10-year, 3-day storm event for roadways and parking lots). 
                Ditches are designed for higher flow rates and may be lined or unlined depending on design 
                requirements and Natural Resource Protection Code specifications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes (typically 1-2% minimum) to ensure effective water flow 
                and stormwater management, meeting Broward County requirements. Slopes are critical 
                for drainage function, with steeper slopes for higher flow rates and gentler slopes 
                for infiltration, especially important for permeable swales designed for stormwater 
                management.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfalls where drainage features discharge to stormwater systems, 
                retention ponds, or natural water bodies, meeting Broward County and Natural Resource 
                Protection Code requirements. Outfalls ensure proper water discharge and prevent erosion 
                at discharge points, with compliance to SFWMD Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Catch Basin Integration</h3>
              <p className={styles.serviceDescription}>
                Integration of catch basins and inlets to collect stormwater and direct it into 
                drainage features, meeting Broward County stormwater management requirements. Catch 
                basins prevent debris from entering drainage systems and provide access for maintenance, 
                essential for maintaining storm event protection and Natural Resource Protection Code 
                compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect drainage feature banks from erosion, meeting Broward County Natural Resource 
                Protection Code requirements for environmental protection. Erosion control ensures 
                long-term drainage function and prevents sediment accumulation, especially important 
                given Broward County&apos;s heavy rainfall and hurricane conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Drainage Feature Considerations</h2>
            <p className={styles.text}>
              Swales and drainage feature excavation in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for drainage feature excavation projects in Broward 
                County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Drainage feature projects 
                typically require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Drainage features must be sized to handle these design 
                storms, with proper storage volumes and discharge rates.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>High Water Table and Dewatering:</strong> Broward County&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, affects drainage feature 
                design and may require deeper excavation or dewatering. SFWMD Environmental Resource 
                Permits are required for dewatering activities affecting state waters. The applicant must 
                have all applicable SFWMD permits before proceeding with dewatering operations. Water 
                table conditions determine feature depths and may affect drainage function, especially in 
                areas like Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Drainage District Requirements:</strong> For projects in areas governed by drainage 
                districts (Central Broward Water Control District for areas east of Volunteer Road or 
                South Broward Drainage District for areas west), Paving & Drainage (P&D) Permits are 
                required. Drainage features must comply with drainage district requirements and storm event 
                protection standards.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Drainage feature design must account for climate resilience and sea level 
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
            <h2 className={styles.heading}>Broward County Swales and Drainage Feature Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate swales and drainage feature excavation throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
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
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
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
            <h2 className={styles.heading}>The Drainage Feature Excavation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales and drainage features are excavated properly 
              and meet all Broward County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes specific to Broward County&apos;s storm 
                event protection requirements (100-year, 3-day storm event for structures; 10-year, 3-day 
                storm event for roadways and parking lots) and Natural Resource Protection Code compliance. 
                Design review ensures excavation meets exact requirements for stormwater management and 
                regulatory compliance.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for drainage feature excavation projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for land disturbance and stormwater management, Natural Resource Protection Code 
                compliance, drainage district approvals (CBWCD or SBDD) where applicable, and coordinate 
                with regulatory agencies. All DER submittals are only accepted electronically. Permits are 
                valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors, dewatering systems) 
                and experience for drainage feature excavation in Broward County, including expertise 
                with high water table conditions, coastal soils, storm event protection, and regulatory 
                compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For drainage features requiring dewatering, contractors 
                set up dewatering systems in compliance with SFWMD Environmental Resource Permit 
                requirements for activities affecting state waters, ensuring proper water quality 
                management and discharge compliance. The applicant must have all applicable SFWMD permits 
                before proceeding with dewatering operations. This is especially important given Broward 
                County&apos;s high water table.
              </li>
              <li>
                <strong>Feature Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, creating proper drainage channels designed for storm event protection. 
                Excavation establishes feature shape and prepares areas for erosion control installation, 
                accounting for Broward County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow and stormwater management, 
                meeting Broward County requirements. Slope construction meets engineering 
                specifications and ensures proper drainage function, especially important for permeable 
                swales designed for infiltration.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies, meeting Broward County and 
                Natural Resource Protection Code requirements. Outfall structures ensure proper water 
                discharge and prevent erosion, with compliance to SFWMD Environmental Resource Permit 
                requirements.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed meeting Broward County Natural Resource Protection Code requirements, and final 
                inspections ensure drainage features meet regulatory requirements including storm event 
                protection and Natural Resource Protection Code standards. Features are ready for 
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
                <h3 className={styles.faqQuestion}>What permits are required for drainage feature excavation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation in Broward County requires development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Uniform Building Permit Applications 
                  from Broward County Building Code Division, Development & Environmental Review (DER) 
                  through ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits 
                  for land disturbance and stormwater management, Natural Resource Protection Code 
                  compliance, drainage district approvals (CBWCD or SBDD) where applicable, and FEMA 
                  compliance permits for properties in flood zones. All DER submittals are only accepted 
                  electronically. Permits are valid for 180 days from the date of issuance. We help 
                  identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires that first floor elevations of all structures within drainage 
                  districts must protect structures from a 100-year, 3-day storm event, while roadway and 
                  parking lot elevations must be protected from a 10-year, 3-day storm event. Drainage 
                  features must be sized to handle these design storms, with proper storage volumes and 
                  discharge rates. These requirements ensure adequate flood protection and water quality 
                  treatment, accounting for climate resilience and sea level rise considerations (50-year 
                  planning horizon with projections of approximately 2 feet of sea level rise).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and allow 
                  infiltration, prioritizing stormwater management as required by Broward County. Ditches 
                  are deeper channels designed for higher flow rates and water conveyance, sized for storm 
                  event protection (100-year, 3-day storm event for structures; 10-year, 3-day storm 
                  event for roadways and parking lots). Swales are typically wider and shallower with 
                  gentle slopes, while ditches are deeper with steeper slopes for effective water transport. 
                  Both must comply with Natural Resource Protection Code requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect drainage feature excavation?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, affects drainage feature design and may require deeper excavation or dewatering. 
                  SFWMD Environmental Resource Permits are required for dewatering activities affecting 
                  state waters. The applicant must have all applicable SFWMD permits before proceeding 
                  with dewatering operations. Water table conditions determine feature depths and may 
                  affect drainage function, especially in areas like Fort Lauderdale, Hollywood, and coastal 
                  neighborhoods where the water table is particularly high. This adds complexity and cost 
                  to drainage feature projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage feature excavation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation costs in Broward County vary based on feature length, 
                  depth, complexity, and dewatering requirements. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties or large-scale systems can range from 
                  $75,000 to $200,000+ depending on scope. Factors affecting cost include excavation volume, 
                  erosion control requirements, outfall construction, dewatering needs, and permit 
                  complexity. Projects requiring extensive dewatering or working in flood zones often cost 
                  more due to additional permit requirements (SFWMD Environmental Resource Permits) and 
                  specialized techniques. Broward County permit processing, including DER review through 
                  ePermits OneStop, can add time and costs.
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
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/" className={styles.backLink}>
                ← Back to Fort Lauderdale Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Fort Lauderdale Drainage Features?"
        description="Get a free quote for your swales and drainage feature excavation in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, storm event protection requirements, SFWMD Environmental Resource Permits, high water table dewatering, DER requirements, and regulatory compliance to excavate drainage features that effectively manage stormwater runoff."
        showPhone={true}
      />
    </main>
  )
}

