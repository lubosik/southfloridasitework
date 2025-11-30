import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales, Ditches & Outfalls in Fort Lauderdale, FL | Broward County',
  description: 'Construction of swales, ditches, and outfall structures in Broward County. Channel surface water runoff and connect to stormwater management systems.',
  openGraph: {
    title: 'Swales, Ditches & Outfalls in Fort Lauderdale, FL | Broward County',
    description: 'Construction of swales, ditches, and outfall structures to channel surface water runoff in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/swales-ditches-outfalls/`,
  },
}

export default function FortLauderdaleSwalesDitchesOutfallsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Swales, Ditches and Outfalls in Fort Lauderdale, FL"
        subtitle="Construction of swales, ditches, and outfall structures to channel surface water runoff and connect to stormwater management systems or natural drainage ways across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Swales, ditches, and outfall construction in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Swales, ditches, and outfall services in Broward County are essential for developers, 
              general contractors, property owners, and anyone needing to channel surface water runoff 
              and connect to stormwater management systems throughout Broward County, including Fort 
              Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property in Plantation, managing existing surface water 
              runoff in Fort Lauderdale, or installing comprehensive drainage infrastructure in Hollywood, 
              swales, ditches, and outfalls effectively channel water. We coordinate contractors with 
              expertise in Broward County drainage requirements, Development & Environmental Review (DER), 
              Natural Resource Protection Code compliance, storm event protection requirements, and SFWMD 
              Environmental Resource Permits to construct drainage features that meet regulatory 
              requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Swales, ditches, and outfall construction in Broward County typically ranges from 
                <strong> $20,000 to $75,000</strong> for residential properties, and 
                <strong> $75,000 to $200,000+</strong> for commercial properties or large-scale 
                drainage systems depending on feature length, depth, complexity, storm event 
                protection requirements, and SFWMD Environmental Resource Permit requirements. Projects 
                requiring extensive swale networks or meeting storm event protection (100-year, 3-day 
                storm event for structures; 10-year, 3-day storm event for roadways and parking lots) 
                often cost more due to additional permit requirements and specialized design. Projects 
                involving development work as described in Florida Statute 380.04 require a development 
                permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Swales, Ditches and Outfalls Include in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swale Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of swales (shallow, vegetated drainage channels) with proper slopes to 
                direct water flow, meeting Broward County&apos;s Natural Resource Protection Code 
                requirements. Swales are typically wider and shallower than ditches, designed to slow 
                water flow and allow infiltration while directing runoff, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Ditch Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of ditches (deeper drainage channels) with proper depths and slopes for 
                water conveyance, sized for storm event protection (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots) and meeting 
                Natural Resource Protection Code compliance. Ditches are designed for higher flow rates 
                and may be lined or unlined depending on design requirements, with consideration of high 
                water table conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Slope Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of proper slopes (typically 1-2% minimum) to ensure effective water flow, 
                meeting Broward County requirements. Slopes are critical for drainage function, with 
                steeper slopes for higher flow rates and gentler slopes for infiltration, especially 
                important for swales designed for stormwater management and integration with the 
                three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Outfall Structure Construction</h3>
              <p className={styles.serviceDescription}>
                Construction of outfall structures where drainage features discharge to stormwater 
                systems, retention areas, or natural water bodies, meeting Broward County&apos;s Natural 
                Resource Protection Code requirements and SFWMD Environmental Resource Permit standards. 
                Outfalls ensure proper water discharge and prevent erosion at discharge points, 
                integrating with Broward County&apos;s three-tier infrastructure framework.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures including matting, vegetation, or riprap to 
                protect drainage feature banks from erosion, meeting Broward County Natural Resource 
                Protection Code requirements. Erosion control ensures long-term drainage function and 
                prevents sediment accumulation, especially important for swales designed for water 
                quality treatment and storm event protection.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Connection to Stormwater Systems</h3>
              <p className={styles.serviceDescription}>
                Connection of swales and ditches to stormwater management systems, retention ponds, or 
                natural drainage ways, meeting storm event protection requirements (100-year, 3-day 
                storm event for structures; 10-year, 3-day storm event for roadways and parking lots) 
                and Natural Resource Protection Code compliance. Connections ensure proper water flow 
                and compliance with stormwater management requirements, integrating with Broward 
                County&apos;s three-tier infrastructure framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Swale and Ditch Considerations</h2>
            <p className={styles.text}>
              Swale, ditch, and outfall construction in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for swale, ditch, and outfall construction 
                projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Swale, ditch, and outfall 
                construction typically requires Development & Environmental Review through ePermits 
                OneStop for applicable building permits. All DER submittals are only accepted 
                electronically. Broward County&apos;s Planning and Development Management Division ensures 
                that proposed developments comply with the Broward County Land Development Code and 
                Natural Resource Protection Code.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be protected 
                from a 10-year, 3-day storm event. Swales and ditches must be sized to handle these 
                design storms, with proper storage volumes and discharge rates to ensure adequate flood 
                protection and water quality treatment.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>Three-Tier Infrastructure Framework:</strong> Broward County&apos;s stormwater 
                management system operates through a three-tier infrastructure framework: Tertiary System 
                (individual community infrastructure including drainage inlets, pipes, swales, lakes, 
                and retention areas), Secondary System (South Broward Drainage District or Central 
                Broward Water Control District infrastructure including canals, culverts, and flood 
                control gates), and Primary System (SFWMD-operated canals that receive all permitted 
                stormwater runoff). Swales and ditches must integrate with this framework.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects swale and ditch design and may 
                require deeper excavation or dewatering. Water table conditions determine feature depths 
                and may affect drainage function, especially in areas like Fort Lauderdale, Hollywood, 
                and coastal neighborhoods.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Swale and ditch design must account for climate resilience and sea level 
                rise considerations, ensuring long-term functionality and compliance with regulatory 
                requirements.
              </li>
              <li>
                <strong>Drainage District Requirements:</strong> For projects in areas governed by drainage 
                districts (Central Broward Water Control District for areas east of Volunteer Road or 
                South Broward Drainage District for areas west), Paving & Drainage (P&D) Permits are 
                required. Swale and ditch design must comply with drainage district requirements and 
                storm event protection standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Swale and Ditch Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate swale, ditch, and outfall construction throughout Broward County, including:
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
            <h2 className={styles.heading}>The Swale, Ditch and Outfall Construction Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales, ditches, and outfalls are constructed 
              properly and meet all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes specific to Broward County conditions 
                including storm event protection requirements (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots) and Natural 
                Resource Protection Code compliance. Design review ensures construction meets exact 
                requirements for stormwater management, integrating with Broward County&apos;s three-tier 
                infrastructure framework.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for swale, ditch, and outfall construction projects in 
                Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for stormwater management, Natural Resource Protection Code compliance, drainage 
                district approvals (CBWCD or SBDD) where applicable, and coordinate with regulatory 
                agencies. All DER submittals are only accepted electronically. Permits are valid for 180 
                days from the date of issuance. Permits ensure compliance with stormwater management 
                requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                drainage feature construction in Broward County, including expertise with high water 
                table conditions, Natural Resource Protection Code compliance, SFWMD Environmental 
                Resource Permit requirements, and storm event protection.
              </li>
              <li>
                <strong>Feature Construction:</strong> Contractors construct swales and ditches to 
                exact depths and dimensions, creating proper drainage channels, meeting Broward County 
                construction standards. Construction establishes feature shape and prepares areas for 
                erosion control installation, with consideration of high water table conditions and 
                integration with Broward County&apos;s three-tier infrastructure framework.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow, meeting Broward County 
                requirements. Slope construction meets engineering specifications and ensures proper 
                drainage function, especially important for swales designed for stormwater management 
                and integration with the three-tier infrastructure framework.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies, integrating with Broward 
                County&apos;s three-tier infrastructure framework. Outfall structures ensure proper water 
                discharge and prevent erosion, meeting storm event protection and Natural Resource 
                Protection Code standards.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections with SFWMD, Broward County Building Code Division or 
                municipal building departments, and drainage districts where applicable ensure drainage 
                features meet regulatory requirements including storm event protection and Natural 
                Resource Protection Code standards. Features are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What permits are required for swale and ditch construction in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction in Broward County requires development permits (Florida 
                  Statute 380.04) obtained prior to building permit issuance, Uniform Building Permit 
                  Applications from Broward County Building Code Division, Development & Environmental 
                  Review (DER) through ePermits OneStop for applicable projects, SFWMD Environmental 
                  Resource Permits for stormwater management, Natural Resource Protection Code compliance, 
                  and drainage district approvals (CBWCD or SBDD) where applicable. All DER submittals are 
                  only accepted electronically. Permits are valid for 180 days from the date of 
                  issuance. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and allow 
                  infiltration, meeting Broward County&apos;s Natural Resource Protection Code requirements. 
                  Ditches are deeper channels designed for higher flow rates and water conveyance, sized 
                  for storm event protection (100-year, 3-day storm event for structures; 10-year, 3-day 
                  storm event for roadways and parking lots). Swales are typically wider and shallower 
                  with gentle slopes, while ditches are deeper with steeper slopes for effective water 
                  transport. Both must comply with Natural Resource Protection Code requirements and 
                  integrate with Broward County&apos;s three-tier infrastructure framework.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for swales and ditches in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Swales and ditches in Broward County typically require minimum slopes of 1-2% (1-2 
                  feet drop per 100 feet of length) to ensure effective water flow, meeting county 
                  requirements. Steeper slopes may be required for higher flow rates, while gentler 
                  slopes may be used for swales designed for stormwater management. Exact slope 
                  requirements are specified in engineering designs based on flow rates from storm 
                  event protection requirements and drainage function, meeting storm event protection and 
                  Natural Resource Protection Code standards, and integrating with Broward County&apos;s 
                  three-tier infrastructure framework.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does swale and ditch construction cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction costs in Broward County vary based on feature length, 
                  depth, complexity, storm event protection requirements, and SFWMD Environmental 
                  Resource Permit requirements. Typical residential properties range from $20,000 to 
                  $75,000, while commercial properties or large-scale systems can range from $75,000 to 
                  $200,000+ depending on scope. Factors affecting cost include excavation volume, erosion 
                  control requirements, outfall construction, and permit complexity. Projects requiring 
                  extensive swale networks or meeting storm event protection (100-year, 3-day storm 
                  event for structures; 10-year, 3-day storm event for roadways and parking lots) often 
                  cost more due to additional permit requirements (SFWMD Environmental Resource Permits) 
                  and specialized design. Broward County permit processing, including DER review through 
                  ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do swales and ditches integrate with Broward County&apos;s three-tier infrastructure framework?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s stormwater management system operates through a three-tier 
                  infrastructure framework: Tertiary System (individual community infrastructure including 
                  drainage inlets, pipes, swales, lakes, and retention areas maintained by Homeowners 
                  Associations or local municipalities), Secondary System (South Broward Drainage 
                  District or Central Broward Water Control District infrastructure including canals, 
                  culverts, and flood control gates that convey stormwater from tertiary systems), and 
                  Primary System (SFWMD-operated canals that receive all permitted stormwater runoff and 
                  serve as the final conveyance system). Swales and ditches are part of the Tertiary 
                  System and must be designed to connect properly to Secondary System infrastructure, 
                  ensuring effective stormwater management and compliance with storm event protection 
                  requirements.
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
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Fort Lauderdale Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Construct Your Fort Lauderdale Drainage Features?"
        description="Get a free quote for your swale, ditch, and outfall construction in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, storm event protection requirements, SFWMD Environmental Resource Permits, DER requirements, three-tier infrastructure framework integration, and regulatory compliance to construct drainage features that effectively channel surface water runoff."
        showPhone={true}
      />
    </main>
  )
}

