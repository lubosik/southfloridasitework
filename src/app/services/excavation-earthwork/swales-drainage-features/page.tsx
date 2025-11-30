import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Swales & Drainage Features | South Florida',
  description: 'Excavation of swales, ditches, and drainage features across South Florida. Proper slopes and connections to stormwater management systems.',
  openGraph: {
    title: 'Swales & Drainage Features | South Florida',
    description: 'Excavation of swales, ditches, and drainage features with proper slopes across South Florida.',
    url: `${siteConfig.url}/services/excavation-earthwork/swales-drainage-features/`,
  },
}

export default function SwalesDrainageFeaturesPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Swales and Drainage Features</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Excavation of swales, ditches, and other drainage features with proper slopes and 
                connections to stormwater management systems and outfalls across South Florida. We 
                coordinate licensed contractors to excavate drainage features that effectively direct 
                water flow and prevent flooding.
              </p>
              <p className={styles.description}>
                Swales and drainage features are essential components of stormwater management 
                systems. Our network of licensed contractors has the equipment and expertise to 
                excavate drainage features with proper slopes and connections that effectively 
                manage stormwater runoff.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('excavation-earthwork')}
                alt="Swales and drainage feature excavation in South Florida"
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
              Swales and drainage feature services are essential for developers, general contractors, 
              property owners, and anyone needing to direct stormwater runoff away from structures 
              and toward stormwater management systems.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new property, fixing existing drainage problems, or 
              installing stormwater management systems, swales and drainage features effectively 
              direct water flow. We coordinate contractors with the equipment and expertise to 
              excavate drainage features that meet engineering specifications.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Swales and drainage feature projects typically range from <strong>$20,000 to $75,000</strong> for 
                residential properties, and <strong>$75,000 to $200,000+</strong> for commercial 
                properties or large-scale drainage systems depending on feature length, depth, 
                and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Swales and Drainage Feature Excavation Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Swale Excavation</h3>
                <p className={styles.serviceDescription}>
                  Excavation of swales (shallow, vegetated drainage channels) with proper slopes to 
                  direct water flow. Swales are typically wider and shallower than ditches, designed 
                  to slow water flow and allow infiltration while directing runoff.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Ditch Excavation</h3>
                <p className={styles.serviceDescription}>
                  Excavation of ditches (deeper drainage channels) with proper depths and slopes for 
                  water conveyance. Ditches are designed for higher flow rates and may be lined or 
                  unlined depending on design requirements.
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
                <h3 className={styles.serviceTitle}>Outfall Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of outfalls where drainage features discharge to stormwater systems, 
                  retention ponds, or natural water bodies. Outfalls ensure proper water discharge 
                  and prevent erosion at discharge points.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Catch Basin Integration</h3>
                <p className={styles.serviceDescription}>
                  Integration of catch basins and inlets to collect stormwater and direct it into 
                  drainage features. Catch basins prevent debris from entering drainage systems and 
                  provide access for maintenance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Erosion Control</h3>
                <p className={styles.serviceDescription}>
                  Installation of erosion control measures including matting, vegetation, or riprap to 
                  protect drainage feature banks from erosion. Erosion control ensures long-term 
                  drainage function and prevents sediment accumulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Drainage Features</h2>
            <p className={styles.text}>
              Different types of drainage features serve specific purposes in stormwater management:
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
                <strong>French Drains:</strong> Perforated pipes surrounded by gravel in excavated 
                trenches that collect and redirect groundwater and surface water. French drains are 
                effective for managing high water tables and directing water away from structures.
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
            <h2 className={styles.heading}>South Florida Drainage Feature Considerations</h2>
            <p className={styles.text}>
              Swales and drainage feature excavation in South Florida requires specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                drainage feature design and may require deeper excavation or dewatering. Water table 
                conditions determine feature depths and may affect drainage function.
              </li>
              <li>
                <strong>Stormwater Management Requirements:</strong> Drainage features must meet county 
                and SFWMD requirements for stormwater management. Design requirements include flow 
                rates, treatment capabilities, and connections to stormwater systems.
              </li>
              <li>
                <strong>Slope Requirements:</strong> Proper slopes (typically 1-2% minimum) are 
                critical for effective drainage. Slopes must be sufficient to ensure water flow 
                while preventing erosion and allowing infiltration where appropriate.
              </li>
              <li>
                <strong>Erosion Control:</strong> Drainage feature banks require proper erosion control 
                to prevent sediment accumulation and maintain drainage function. Erosion control 
                measures include matting, vegetation, or riprap based on design requirements.
              </li>
              <li>
                <strong>Outfall Design:</strong> Outfalls must be designed to handle design storm 
                events and prevent erosion at discharge points. Outfall structures ensure proper 
                water discharge to stormwater systems or natural water bodies.
              </li>
              <li>
                <strong>Maintenance Access:</strong> Drainage features require maintenance access for 
                sediment removal, vegetation management, and structure maintenance. Access roads and 
                maintenance areas must be included in design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Drainage Feature Excavation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your swales and drainage features are excavated 
              properly and meet all specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to understand 
                drainage feature dimensions, depths, and slopes. Design review ensures excavation 
                meets exact requirements for stormwater management.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for drainage 
                feature excavation and coordinate with building departments and regulatory agencies. 
                Permits ensure compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                drainage feature excavation.
              </li>
              <li>
                <strong>Feature Excavation:</strong> Contractors perform excavation to exact depths 
                and dimensions, creating proper drainage channels. Excavation establishes feature 
                shape and prepares areas for erosion control installation.
              </li>
              <li>
                <strong>Slope Construction:</strong> Drainage features are graded to proper slopes 
                (typically 1-2% minimum) to ensure effective water flow. Slope construction meets 
                engineering specifications and ensures proper drainage function.
              </li>
              <li>
                <strong>Outfall Construction:</strong> Outfalls are constructed where drainage 
                features discharge to stormwater systems or natural water bodies. Outfall structures 
                ensure proper water discharge and prevent erosion.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections ensure drainage features meet regulatory 
                requirements. Features are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What slope is required for drainage features?</h3>
                <p className={styles.faqAnswer}>
                  Drainage features typically require minimum slopes of 1-2% (1-2 feet drop per 100 
                  feet of length) to ensure effective water flow. Steeper slopes may be required 
                  for higher flow rates, while gentler slopes may be used for infiltration swales. 
                  Exact slope requirements are specified in engineering designs based on flow rates 
                  and drainage function.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does drainage feature excavation cost?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation costs vary based on feature length, depth, and 
                  complexity. Typical residential properties range from $20,000 to $75,000, while 
                  commercial properties or large-scale systems can range from $75,000 to $200,000+ 
                  depending on scope. Factors affecting cost include excavation volume, erosion 
                  control requirements, and outfall construction.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for drainage feature excavation?</h3>
                <p className={styles.faqAnswer}>
                  Yes, drainage feature excavation typically requires permits from county building 
                  departments and may require SFWMD permits for stormwater management. Permits ensure 
                  compliance with stormwater management requirements and may require specific design 
                  features. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does drainage feature excavation take?</h3>
                <p className={styles.faqAnswer}>
                  Drainage feature excavation timelines vary based on feature length, depth, and 
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
              We coordinate swales and drainage feature excavation across all of South Florida. 
              Select your location to learn more about drainage services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/excavation-earthwork/swales-drainage-features/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/excavation-earthwork/swales-drainage-features/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/excavation-earthwork/swales-drainage-features/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/excavation-earthwork/swales-drainage-features/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/excavation-earthwork/" className={styles.backLink}>
                ← Back to Excavation and Earthwork
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Install Your Drainage Features?"
        description="Get a free quote for your swales and drainage feature excavation. We'll coordinate licensed contractors with the right equipment to excavate drainage features that effectively manage stormwater runoff."
        showPhone={true}
      />
    </main>
  )
}

