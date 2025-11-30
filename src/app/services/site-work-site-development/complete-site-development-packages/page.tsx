import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Complete Site Development Packages | South FL',
  description: 'Complete site development packages for commercial and residential projects in South Florida. Turnkey site work from clearing to building pad preparation.',
  openGraph: {
    title: 'Complete Site Development Packages | South FL',
    description: 'Complete site development packages for commercial and residential projects in South Florida.',
    url: `${siteConfig.url}/services/site-work-site-development/complete-site-development-packages/`,
  },
}

export default function CompleteSiteDevelopmentPackagesPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Complete Site Development Packages</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Turnkey site development packages that handle every aspect of site preparation from 
                initial clearing through final building pad preparation. We coordinate all phases of 
                site work for commercial and residential projects across South Florida.
              </p>
              <p className={styles.description}>
                Our complete site development packages eliminate the complexity of coordinating multiple 
                contractors and phases. We handle everything from land clearing and excavation to grading, 
                drainage, and utility preparation, delivering a building-ready site on schedule and 
                within budget.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/complete-site-development.jpg"
                alt="Complete site development packages in South Florida"
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
              Complete site development packages are ideal for developers, general contractors, and 
              property owners who want a single point of coordination for all site work activities. 
              This service eliminates the need to manage multiple contractors and ensures seamless 
              coordination between different phases of site preparation.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial retail center, building a custom home, or 
              preparing a subdivision, our complete packages handle every aspect of site development 
              from start to finish, ensuring proper sequencing and quality control throughout the process.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Complete site development packages typically start around <strong>$50,000</strong> for 
                residential projects and range from $100,000 to $500,000+ for commercial developments, 
                depending on site size, conditions, and scope of work required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Complete Site Development Includes</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 1: Land Clearing and Site Preparation</h3>
              <p className={styles.serviceDescription}>
                Complete removal of vegetation, trees, stumps, and debris. Site clearing, grubbing, 
                and initial site access preparation to make the site safe and accessible for 
                construction activities.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 2: Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation, cut and fill operations to achieve proper site elevations. 
                Mass earthmoving to balance site grades and prepare for building pad and infrastructure 
                installation.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 3: Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading for building pads, parking areas, and roads. Rough and final grading 
                to exact elevations specified in engineering drawings, with proper compaction for 
                foundation support.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 4: Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Complete stormwater management including retention/detention ponds, swales, stormwater 
                inlets, and piping systems. Designed and installed to meet SFWMD and county 
                requirements for water quality and volume control.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 5: Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities, coordination with utility companies, and preparation of 
                infrastructure connections. Includes water, sewer, electrical, and telecommunications 
                utility preparation.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 6: Final Site Preparation and Inspection</h3>
              <p className={styles.serviceDescription}>
                Final site cleanup, erosion control installation, and coordination of all required 
                inspections. Site is delivered ready for building construction with all permits and 
                approvals in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Benefits of Complete Site Development Packages</h2>
            <ul className={styles.list}>
              <li>
                <strong>Single Point of Coordination:</strong> One contact handles all phases of site 
                work, eliminating the complexity of managing multiple contractors and ensuring proper 
                sequencing of activities.
              </li>
              <li>
                <strong>Seamless Phase Transitions:</strong> Each phase is completed and inspected 
                before the next begins, ensuring quality and preventing delays from rework or 
                coordination issues.
              </li>
              <li>
                <strong>Cost Predictability:</strong> Complete packages provide fixed pricing for all 
                site work activities, reducing the risk of cost overruns from unexpected conditions or 
                change orders.
              </li>
              <li>
                <strong>Faster Project Completion:</strong> Coordinated scheduling and sequencing 
                minimizes delays between phases, delivering building-ready sites faster than 
                piecemeal approaches.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Single-point responsibility ensures consistent 
                quality standards across all phases and proper completion before moving to the next 
                phase.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We handle all required permits and coordinate 
                with regulatory agencies throughout the process, ensuring compliance at every phase.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Development Process</h2>
            <p className={styles.text}>
              Our complete site development packages follow a structured process to ensure quality 
              and timely completion:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Planning and Permitting:</strong> We review your site plans, identify 
                all required permits, and coordinate permit applications with local building departments, 
                SFWMD, and other regulatory agencies.
              </li>
              <li>
                <strong>Site Assessment:</strong> We assess site conditions, identify challenges, and 
                develop a detailed work plan and schedule for all phases of site development.
              </li>
              <li>
                <strong>Phase-by-Phase Execution:</strong> We coordinate licensed contractors to execute 
                each phase in proper sequence, with quality checks and inspections before proceeding to 
                the next phase.
              </li>
              <li>
                <strong>Ongoing Coordination:</strong> We maintain regular communication, provide progress 
                updates, and address any issues that arise during the development process.
              </li>
              <li>
                <strong>Final Inspection and Delivery:</strong> We coordinate all final inspections, 
                ensure all work meets specifications, and deliver a building-ready site with all 
                approvals in place.
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
                <h3 className={styles.faqQuestion}>What is included in a complete site development package?</h3>
                <p className={styles.faqAnswer}>
                  Complete site development packages include all phases of site work: land clearing, 
                  mass excavation, site grading, stormwater management, utility preparation, and final 
                  site preparation. Everything needed to prepare a building-ready site from raw land.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does complete site development take?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies based on project size and complexity. Simple residential projects may 
                  take 4-8 weeks, while large commercial developments can take 3-6 months. We provide 
                  detailed schedules based on your specific project requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle all permits for site development?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate all required permits including building permits, SFWMD environmental 
                  resource permits, county grading permits, and stormwater management approvals. We handle 
                  the permit application process and ensure compliance throughout the project.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can I use a complete package for just part of site work?</h3>
                <p className={styles.faqAnswer}>
                  While complete packages are designed for full site development, we can customize packages 
                  to include only the phases you need. We also offer individual service options if you 
                  prefer to coordinate specific phases separately.
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
              We coordinate complete site development packages across all of South Florida. Select your 
              location to learn more about site development in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/service-areas/miami/site-work-site-development/complete-site-development-packages/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/complete-site-development-packages/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/complete-site-development-packages/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/site-work-site-development/complete-site-development-packages/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/site-work-site-development/" className={styles.backLink}>
                ← Back to Site Work and Site Development
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Site Development Project?"
        description="Get a free quote for your complete site development package. We'll coordinate all phases of site work to deliver a building-ready site."
        showPhone={true}
      />
    </main>
  )
}

