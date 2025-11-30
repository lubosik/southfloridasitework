import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Regrading for Drainage Problems | South Florida',
  description: 'Site regrading to fix existing drainage issues across South Florida. Eliminate standing water and redirect water flow away from structures.',
  openGraph: {
    title: 'Regrading for Drainage Problems | South Florida',
    description: 'Site regrading to fix existing drainage issues and eliminate standing water across South Florida.',
    url: `${siteConfig.url}/services/land-grading-site-grading/regrading-drainage-problems/`,
  },
}

export default function RegradingDrainageProblemsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Regrading for Drainage Problems</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Site regrading to fix existing drainage issues, eliminate standing water, and redirect 
                water flow away from structures and low-lying areas across South Florida.
              </p>
              <p className={styles.description}>
                Poor site grading is a common cause of drainage problems. Our network of licensed 
                contractors can regrade your site to create proper slopes and elevations that direct 
                water away from structures and eliminate standing water, often combined with drainage 
                system installation for comprehensive solutions.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/regrading-drainage.jpg"
                alt="Site regrading for drainage problems in South Florida"
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
              Regrading for drainage problems is essential for property owners, homeowners, commercial 
              property managers, and anyone experiencing standing water, flooding, or water damage due 
              to poor site grading.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with standing water after rain, water pooling around your 
              foundation, or flooding in low-lying areas, site regrading can redirect water flow and 
              eliminate drainage problems. We coordinate contractors with the expertise to assess 
              drainage issues and implement effective regrading solutions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Regrading for drainage problems typically ranges from <strong>$20,000 to $75,000</strong> for 
                residential properties, and <strong>$50,000 to $200,000+</strong> for commercial properties 
                depending on site size, extent of regrading required, and whether drainage systems need 
                to be installed or upgraded.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Regrading for Drainage Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Assessment</h3>
                <p className={styles.serviceDescription}>
                  Evaluation of existing site conditions, water flow patterns, and drainage problems. 
                  Assessment identifies low-lying areas, water accumulation points, and determines 
                  the best regrading approach to redirect water flow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Regrading</h3>
                <p className={styles.serviceDescription}>
                  Earthmoving to adjust site elevations and create proper slopes that direct water 
                  away from structures and toward drainage points. Regrading eliminates low spots 
                  where water accumulates and creates positive drainage flow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Slope Creation</h3>
                <p className={styles.serviceDescription}>
                  Creating proper slopes (typically 1-2% minimum) to direct water flow away from 
                  structures and toward drainage systems. Proper slopes prevent water from pooling 
                  and ensure effective drainage.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Low Spot Elimination</h3>
                <p className={styles.serviceDescription}>
                  Filling or regrading low-lying areas where water accumulates. Low spots are 
                  eliminated by adding fill material and creating proper drainage slopes to prevent 
                  standing water.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage System Integration</h3>
                <p className={styles.serviceDescription}>
                  Coordinating regrading with drainage system installation or upgrades. Regrading 
                  ensures water flows to drainage inlets, swales, or retention areas effectively. 
                  May include installation of French drains, catch basins, or swales.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Grading and Compaction</h3>
                <p className={styles.serviceDescription}>
                  Final grading to achieve proper elevations and slopes, with proper compaction to 
                  prevent settlement. Final grading ensures regraded areas maintain proper drainage 
                  and don&apos;t settle over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Common Drainage Problems in South Florida</h2>
            <p className={styles.text}>
              South Florida&apos;s unique conditions create specific drainage challenges that regrading 
              can address:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Standing Water After Rain:</strong> Low-lying areas that don&apos;t drain 
                properly create standing water that can damage landscaping, attract mosquitoes, and 
                create safety hazards. Regrading creates proper slopes to eliminate standing water.
              </li>
              <li>
                <strong>Water Pooling Around Foundations:</strong> Poor grading around structures 
                allows water to pool near foundations, increasing the risk of water damage and 
                foundation problems. Regrading directs water away from structures.
              </li>
              <li>
                <strong>Flooding in Low Areas:</strong> Low-lying areas of properties can flood during 
                heavy rain, especially in flood zones or areas with high water tables. Regrading 
                elevates low areas and creates proper drainage flow.
              </li>
              <li>
                <strong>Inadequate Drainage Slopes:</strong> Existing sites may have insufficient 
                slopes to direct water to drainage systems. Regrading creates proper slopes (1-2% 
                minimum) to ensure effective water flow.
              </li>
              <li>
                <strong>High Water Table Issues:</strong> South Florida&apos;s high water table can 
                cause water to rise to the surface in low areas. Regrading elevates these areas and 
                creates proper drainage to manage high water table conditions.
              </li>
              <li>
                <strong>Stormwater Runoff Problems:</strong> Properties may not be graded to handle 
                stormwater runoff effectively, especially during heavy South Florida rains. Regrading 
                ensures proper water flow and may be combined with stormwater management systems.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Regrading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your drainage problems are effectively addressed:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We evaluate your site to identify drainage problems, 
                water flow patterns, and low-lying areas. Assessment includes reviewing site conditions 
                during and after rain events to understand water accumulation patterns.
              </li>
              <li>
                <strong>Drainage Design:</strong> We develop a regrading plan that addresses specific 
                drainage problems and creates proper water flow. The plan identifies areas that need 
                elevation changes and determines the best approach for redirecting water flow.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for regrading 
                work and coordinate with local building departments. Regrading projects may require 
                permits, especially if significant earthwork is involved.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for regrading work. Contractors assess 
                drainage problems and implement effective regrading solutions.
              </li>
              <li>
                <strong>Regrading Execution:</strong> Contractors perform earthmoving to adjust site 
                elevations and create proper slopes. This may involve adding fill material to low areas 
                or removing material to create drainage channels.
              </li>
              <li>
                <strong>Drainage System Integration:</strong> Regrading is coordinated with drainage 
                system installation or upgrades if needed. This ensures water flows to drainage points 
                effectively and eliminates standing water.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections to ensure regrading 
                effectively addresses drainage problems and that water flows properly away from structures 
                and toward drainage systems.
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
                <h3 className={styles.faqQuestion}>Can regrading fix standing water problems?</h3>
                <p className={styles.faqAnswer}>
                  Yes, regrading is often an effective solution for standing water problems. By 
                  adjusting site elevations and creating proper slopes, we can redirect water flow 
                  away from low-lying areas and eliminate standing water. Regrading is often combined 
                  with drainage system installation for comprehensive solutions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does regrading for drainage cost?</h3>
                <p className={styles.faqAnswer}>
                  Regrading costs vary based on site size, extent of regrading required, and whether 
                  drainage systems need to be installed. Typical residential properties range from 
                  $20,000 to $75,000, while commercial properties can range from $50,000 to $200,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, 
                  and drainage system complexity.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for regrading?</h3>
                <p className={styles.faqAnswer}>
                  Regrading projects may require permits from county building departments, especially 
                  if significant earthwork is involved. Projects in flood zones or involving 
                  stormwater management may require additional permits. We help identify and coordinate 
                  all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will regrading solve all drainage problems?</h3>
                <p className={styles.faqAnswer}>
                  Regrading can solve many drainage problems by creating proper slopes and redirecting 
                  water flow. However, some drainage problems may also require drainage system 
                  installation (French drains, catch basins, swales) for comprehensive solutions. We 
                  assess your specific situation and recommend the best approach, which may include 
                  both regrading and drainage system work.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does regrading take?</h3>
                <p className={styles.faqAnswer}>
                  Regrading projects typically take 1-3 weeks depending on site size and scope of work. 
                  Weather conditions can affect timing, especially during South Florida&apos;s rainy season. 
                  We coordinate with contractors to complete regrading efficiently while ensuring proper 
                  drainage solutions.
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
              We coordinate regrading for drainage problems across all of South Florida. Select your 
              location to learn more about drainage solutions in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-grading-site-grading/regrading-drainage-problems/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/regrading-drainage-problems/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/regrading-drainage-problems/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/regrading-drainage-problems/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Fix Your Drainage Problems?"
        description="Get a free quote for site regrading to fix your drainage issues. We'll coordinate licensed contractors to eliminate standing water and redirect water flow away from structures."
        showPhone={true}
      />
    </main>
  )
}

