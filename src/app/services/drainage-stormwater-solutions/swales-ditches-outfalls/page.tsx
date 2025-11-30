import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales, Ditches & Outfalls | South Florida',
  description: 'Construction of swales, ditches, and outfall structures across South Florida. Channel surface water runoff and connect to stormwater management systems.',
  openGraph: {
    title: 'Swales, Ditches & Outfalls | South Florida',
    description: 'Construction of swales, ditches, and outfall structures to channel surface water runoff across South Florida.',
    url: `${siteConfig.url}/services/drainage-stormwater-solutions/swales-ditches-outfalls/`,
  },
}

export default function SwalesDitchesOutfallsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Swales, Ditches and Outfalls</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Construction of swales, ditches, and outfall structures to channel surface water 
                runoff and connect to stormwater management systems or natural drainage ways across 
                South Florida.
              </p>
              <p className={styles.description}>
                Swales, ditches, and outfalls are essential components of surface water management 
                systems. Our network of licensed contractors has the expertise to construct drainage 
                features that effectively channel water and connect to stormwater management systems.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/swales-ditches-outfalls.jpg"
                alt="Swales, ditches, and outfall construction in South Florida"
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
              Swales, ditches, and outfall services are essential for developers, general contractors, 
              property owners, and anyone needing to channel surface water runoff and connect to 
              stormwater management systems.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property, managing existing surface water runoff, or 
              installing comprehensive drainage infrastructure, swales, ditches, and outfalls effectively 
              channel water. We coordinate contractors with the expertise to construct drainage features 
              that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Swales, ditches, and outfall construction typically ranges from <strong>$20,000 to $75,000</strong> for 
                residential properties, and <strong>$75,000 to $200,000+</strong> for commercial properties 
                or large-scale drainage systems depending on feature length, depth, and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Swales, Ditches and Outfalls Include</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Swale Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of swales (shallow, vegetated drainage channels) with proper slopes 
                  to direct water flow. Swales are typically wider and shallower than ditches, 
                  designed to slow water flow and allow infiltration while directing runoff.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Ditch Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of ditches (deeper drainage channels) with proper depths and slopes 
                  for water conveyance. Ditches are designed for higher flow rates and may be lined 
                  or unlined depending on design requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Slope Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of proper slopes (typically 1-2% minimum) to ensure effective water 
                  flow. Slopes are critical for drainage function, with steeper slopes for higher 
                  flow rates and gentler slopes for infiltration.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Outfall Structure Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of outfall structures where drainage features discharge to stormwater 
                  systems, retention areas, or natural water bodies. Outfalls ensure proper water 
                  discharge and prevent erosion at discharge points.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Erosion Control</h3>
                <p className={styles.serviceDescription}>
                  Installation of erosion control measures including matting, vegetation, or riprap 
                  to protect drainage feature banks from erosion. Erosion control ensures long-term 
                  drainage function and prevents sediment accumulation.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Connection to Stormwater Systems</h3>
                <p className={styles.serviceDescription}>
                  Connection of swales and ditches to stormwater management systems, retention ponds, 
                  or natural drainage ways. Connections ensure proper water flow and compliance with 
                  stormwater management requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Swales, Ditches and Outfalls</h2>
            <p className={styles.text}>
              Different types of swales, ditches, and outfalls serve specific purposes in stormwater 
              management:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Swales:</strong> Shallow, vegetated drainage channels designed to slow water 
                flow and allow infiltration. Swales are typically wider and shallower than ditches, 
                with gentle slopes that promote water treatment and reduce runoff velocity.
              </li>
              <li>
                <strong>Ditches:</strong> Deeper drainage channels designed for higher flow rates and 
                water conveyance. Ditches may be lined or unlined, with steeper slopes for effective 
                water transport to outfalls or stormwater systems.
              </li>
              <li>
                <strong>Bioswales:</strong> Enhanced swales with specialized vegetation and soil 
                amendments designed for water quality treatment. Bioswales slow water flow, filter 
                pollutants, and promote infiltration while directing runoff.
              </li>
              <li>
                <strong>Drainage Channels:</strong> Engineered channels with specific cross-sections 
                designed for high flow rates. Drainage channels may be concrete-lined or earthen, 
                depending on design requirements and flow rates.
              </li>
              <li>
                <strong>Outfall Structures:</strong> Structures where drainage features discharge 
                to stormwater systems, retention areas, or natural water bodies. Outfall structures 
                ensure proper water discharge and prevent erosion at discharge points.
              </li>
              <li>
                <strong>Interception Ditches:</strong> Ditches designed to intercept and redirect 
                surface water or groundwater before it reaches problem areas. Interception ditches 
                prevent water from reaching structures or low-lying areas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Swale and Ditch Considerations</h2>
            <p className={styles.text}>
              Swale, ditch, and outfall construction in South Florida requires specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                swale and ditch design and may require deeper excavation or dewatering. Water table 
                conditions determine feature depths and may affect drainage function.
              </li>
              <li>
                <strong>Stormwater Management Requirements:</strong> Swales and ditches must meet 
                county and SFWMD requirements for stormwater management. Design requirements include 
                flow rates, treatment capabilities, and connections to stormwater systems.
              </li>
              <li>
                <strong>Slope Requirements:</strong> Proper slopes (typically 1-2% minimum) are 
                critical for effective drainage. Slopes must be sufficient to ensure water flow 
                while preventing erosion and allowing infiltration where appropriate.
              </li>
              <li>
                <strong>Erosion Control:</strong> Swale and ditch banks require proper erosion 
                control to prevent sediment accumulation and maintain drainage function. Erosion 
                control measures include matting, vegetation, or riprap based on design requirements.
              </li>
              <li>
                <strong>Outfall Design:</strong> Outfalls must be designed to handle design storm 
                events and prevent erosion at discharge points. Outfall structures ensure proper 
                water discharge to stormwater systems or natural water bodies.
              </li>
              <li>
                <strong>Maintenance Access:</strong> Swales and ditches require maintenance access 
                for sediment removal, vegetation management, and structure maintenance. Access roads 
                and maintenance areas must be included in design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Swale, Ditch and Outfall Construction Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales, ditches, and outfalls are constructed 
              properly and meet all specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes. Design review ensures construction 
                meets exact requirements for stormwater management.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for swale, 
                ditch, and outfall construction and coordinate with building departments and regulatory 
                agencies. Permits ensure compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                drainage feature construction.
              </li>
              <li>
                <strong>Feature Construction:</strong> Contractors construct swales and ditches to 
                exact depths and dimensions, creating proper drainage channels. Construction establishes 
                feature shape and prepares areas for erosion control installation.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow. Slope construction meets 
                engineering specifications and ensures proper drainage function.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage features 
                discharge to stormwater systems or natural water bodies. Outfall structures ensure 
                proper water discharge and prevent erosion.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections ensure drainage features meet regulatory requirements. 
                Features are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is the difference between a swale and a ditch?</h3>
                <p className={styles.faqAnswer}>
                  Swales are shallow, vegetated drainage channels designed to slow water flow and 
                  allow infiltration, while ditches are deeper channels designed for higher flow 
                  rates and water conveyance. Swales are typically wider and shallower with gentle 
                  slopes, while ditches are deeper with steeper slopes for effective water transport.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for swales and ditches?</h3>
                <p className={styles.faqAnswer}>
                  Swales and ditches typically require minimum slopes of 1-2% (1-2 feet drop per 100 
                  feet of length) to ensure effective water flow. Steeper slopes may be required for 
                  higher flow rates, while gentler slopes may be used for infiltration swales. Exact 
                  slope requirements are specified in engineering designs based on flow rates and 
                  drainage function.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does swale and ditch construction cost?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction costs vary based on feature length, depth, and 
                  complexity. Typical residential properties range from $20,000 to $75,000, while 
                  commercial properties or large-scale systems can range from $75,000 to $200,000+ 
                  depending on scope. Factors affecting cost include excavation volume, erosion 
                  control requirements, and outfall construction.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for swale and ditch construction?</h3>
                <p className={styles.faqAnswer}>
                  Yes, swale and ditch construction typically requires permits from county building 
                  departments and may require SFWMD permits for stormwater management. Permits ensure 
                  compliance with stormwater management requirements and may require specific design 
                  features. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does swale and ditch construction take?</h3>
                <p className={styles.faqAnswer}>
                  Swale and ditch construction timelines vary based on feature length, depth, and 
                  complexity. Typical residential projects take 1-2 weeks, while commercial or 
                  large-scale projects may take 2-4 weeks depending on scope. Weather conditions, 
                  especially during South Florida&apos;s rainy season, can affect timelines. We 
                  coordinate with contractors to complete projects efficiently.
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
              We coordinate swale, ditch, and outfall construction across all of South Florida. 
              Select your location to learn more about surface water management services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/drainage-stormwater-solutions/swales-ditches-outfalls/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/swales-ditches-outfalls/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/swales-ditches-outfalls/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/swales-ditches-outfalls/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Construct Your Drainage Features?"
        description="Get a free quote for your swale, ditch, and outfall construction. We'll coordinate licensed contractors to construct drainage features that effectively channel surface water runoff."
        showPhone={true}
      />
    </main>
  )
}

