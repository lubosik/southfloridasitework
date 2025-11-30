import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Slope Stabilization & Erosion Control | South FL',
  description: 'Grading and stabilization of slopes to prevent erosion across South Florida. Erosion control measures and proper drainage for coastal and inland properties.',
  openGraph: {
    title: 'Slope Stabilization & Erosion Control | South FL',
    description: 'Grading and stabilization of slopes to prevent erosion across South Florida with proper drainage and erosion control measures.',
    url: `${siteConfig.url}/services/land-grading-site-grading/slope-stabilization-erosion-control/`,
  },
}

export default function SlopeStabilizationErosionControlPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Slope Stabilization and Erosion Control</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Grading and stabilization of slopes to prevent erosion across South Florida, including 
                installation of erosion control measures and proper drainage to protect slopes during 
                and after construction.
              </p>
              <p className={styles.description}>
                Slope erosion is a common problem in South Florida due to heavy rainfall, high water 
                tables, and coastal conditions. Our network of licensed contractors can regrade slopes 
                to stable angles and install erosion control measures to protect slopes from water 
                damage and soil loss.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('land-grading-site-grading')}
                alt="Slope stabilization and erosion control services in South Florida"
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
              Slope stabilization and erosion control services are essential for property owners, 
              developers, coastal property owners, and anyone dealing with slope erosion or unstable 
              slopes on their property.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with erosion on existing slopes, need to stabilize slopes 
              after construction, or want to prevent erosion on new slopes, proper grading and erosion 
              control measures can protect your property from soil loss and slope failure. We coordinate 
              contractors with the expertise to assess slope conditions and implement effective 
              stabilization solutions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Slope stabilization and erosion control projects typically range from <strong>$25,000 to $100,000</strong> for 
                residential properties, and <strong>$75,000 to $300,000+</strong> for commercial properties 
                or large slope areas depending on slope size, severity of erosion, required regrading, 
                and erosion control measures needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Slope Stabilization and Erosion Control Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Slope Assessment</h3>
                <p className={styles.serviceDescription}>
                  Evaluation of existing slope conditions, erosion patterns, and stability issues. 
                  Assessment identifies areas of concern and determines the best approach for slope 
                  stabilization and erosion control.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Slope Regrading</h3>
                <p className={styles.serviceDescription}>
                  Regrading slopes to stable angles (typically 2:1 or 3:1 slope ratios) that resist 
                  erosion. Steeper slopes are regraded to gentler angles that are more stable and 
                  less prone to erosion.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Erosion Control Matting</h3>
                <p className={styles.serviceDescription}>
                  Installation of erosion control matting, geotextiles, or turf reinforcement mats to 
                  protect slopes from water erosion. Matting holds soil in place while vegetation 
                  establishes and provides long-term erosion protection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Installation</h3>
                <p className={styles.serviceDescription}>
                  Installation of proper drainage systems to direct water away from slopes and prevent 
                  water from undermining slope stability. Drainage may include swales, French drains, 
                  or catch basins.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Retaining Wall Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of retaining walls where slopes cannot be regraded to stable angles. 
                  Retaining walls provide structural support for slopes and prevent soil movement, 
                  often combined with proper drainage behind walls.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Vegetation Establishment</h3>
                <p className={styles.serviceDescription}>
                  Planting vegetation on stabilized slopes to provide long-term erosion protection. 
                  Vegetation roots hold soil in place and reduce water runoff, providing natural 
                  erosion control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Slope Erosion Considerations</h2>
            <p className={styles.text}>
              Slope stabilization in South Florida requires specialized knowledge of local conditions 
              and erosion factors:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Heavy Rainfall:</strong> South Florida&apos;s intense rainfall can cause 
                significant erosion on slopes, especially during hurricane season. Proper drainage 
                and erosion control measures are essential to protect slopes from water damage.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table can 
                saturate slope soils, reducing stability and increasing erosion risk. Proper drainage 
                is critical to manage water table effects on slopes.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties face additional erosion risks 
                from salt spray, storm surge, and wave action. Slope stabilization must account for 
                coastal conditions and may require specialized erosion control measures.
              </li>
              <li>
                <strong>Soil Types:</strong> South Florida&apos;s sandy and limestone soils have 
                different erosion characteristics. Slope stabilization must account for soil types 
                and may require specialized erosion control measures for different soil conditions.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Slopes must be designed to handle stormwater 
                runoff effectively. Proper drainage prevents water from accumulating on slopes and 
                causing erosion or slope failure.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Slope stabilization projects may require permits 
                from county building departments, especially if retaining walls are involved. Projects 
                in coastal areas or involving significant earthwork may require additional permits.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Slope Stabilization Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your slopes are properly stabilized and protected from 
              erosion:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Slope Assessment:</strong> We evaluate your slopes to identify erosion 
                problems, stability issues, and areas of concern. Assessment includes reviewing slope 
                angles, soil conditions, and drainage patterns.
              </li>
              <li>
                <strong>Stabilization Design:</strong> We develop a stabilization plan that addresses 
                specific slope problems. The plan identifies required regrading, erosion control measures, 
                and drainage improvements needed.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for slope 
                stabilization work and coordinate with local building departments. Projects involving 
                retaining walls or significant earthwork may require additional permits.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for slope stabilization work. Contractors 
                assess slope conditions and implement effective stabilization solutions.
              </li>
              <li>
                <strong>Slope Regrading:</strong> Contractors regrade slopes to stable angles that 
                resist erosion. Steeper slopes are regraded to gentler angles (typically 2:1 or 3:1 
                ratios) that are more stable.
              </li>
              <li>
                <strong>Erosion Control Installation:</strong> Erosion control measures are installed, 
                including matting, geotextiles, or other protective materials. Drainage systems are 
                installed to direct water away from slopes.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections to ensure slopes 
                are properly stabilized and that erosion control measures are effectively protecting 
                slopes from water damage.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What causes slope erosion in South Florida?</h3>
                <p className={styles.faqAnswer}>
                  Slope erosion in South Florida is caused by heavy rainfall, high water tables, 
                  coastal conditions, and steep slope angles. Intense rainfall during hurricane season 
                  can cause significant erosion, especially on slopes without proper drainage or erosion 
                  control. High water tables can saturate slope soils, reducing stability.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope angle is stable in South Florida?</h3>
                <p className={styles.faqAnswer}>
                  Stable slope angles in South Florida typically range from 2:1 (2 feet horizontal to 
                  1 foot vertical) to 3:1 (3 feet horizontal to 1 foot vertical) depending on soil 
                  conditions. Steeper slopes are more prone to erosion and may require retaining walls 
                  or specialized erosion control measures. Proper drainage is essential for slope 
                  stability regardless of angle.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does slope stabilization cost?</h3>
                <p className={styles.faqAnswer}>
                  Slope stabilization costs vary based on slope size, severity of erosion, required 
                  regrading, and erosion control measures needed. Typical residential properties range 
                  from $25,000 to $100,000, while commercial properties or large slope areas can range 
                  from $75,000 to $300,000+ depending on scope. Factors affecting cost include slope 
                  access, required earthwork, and erosion control complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for slope stabilization?</h3>
                <p className={styles.faqAnswer}>
                  Slope stabilization projects may require permits from county building departments, 
                  especially if retaining walls are involved or significant earthwork is required. 
                  Projects in coastal areas may require additional permits. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can erosion control matting prevent slope erosion?</h3>
                <p className={styles.faqAnswer}>
                  Yes, erosion control matting is an effective measure to prevent slope erosion. Matting 
                  holds soil in place while vegetation establishes and provides long-term erosion 
                  protection. Matting is often combined with proper slope regrading and drainage for 
                  comprehensive erosion control solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We coordinate slope stabilization and erosion control across all of South Florida. 
              Select your location to learn more about slope protection services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-grading-site-grading/slope-stabilization-erosion-control/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/slope-stabilization-erosion-control/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/slope-stabilization-erosion-control/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/slope-stabilization-erosion-control/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Land Grading and Site Grading
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Stabilize Your Slopes?"
        description="Get a free quote for slope stabilization and erosion control. We'll coordinate licensed contractors to protect your slopes from erosion and prevent soil loss."
        showPhone={true}
      />
    </main>
  )
}

