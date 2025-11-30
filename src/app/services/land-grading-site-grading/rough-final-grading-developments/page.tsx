import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough & Final Grading for Developments | South FL',
  description: 'Complete rough and final grading services for new developments across South Florida. Site preparation from initial earthmoving to precise elevations before building construction.',
  openGraph: {
    title: 'Rough & Final Grading for Developments | South FL',
    description: 'Complete rough and final grading services for new developments across South Florida.',
    url: `${siteConfig.url}/services/land-grading-site-grading/rough-final-grading-developments/`,
  },
}

export default function RoughFinalGradingDevelopmentsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Rough and Final Grading for New Developments</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Complete grading services for new developments across South Florida, from rough grading 
                for initial site preparation to final grading to precise elevations before building 
                construction.
              </p>
              <p className={styles.description}>
                New developments require coordinated grading operations across multiple phases. Our network 
                of licensed contractors delivers rough grading to establish site grades, followed by final 
                grading to achieve exact elevations specified in engineering drawings.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/rough-final-grading.jpg"
                alt="Rough and final grading for new developments in South Florida"
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
              Rough and final grading services are essential for developers, general contractors, 
              subdivision developers, and anyone preparing large sites for new construction projects.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, commercial complex, or multi-phase 
              residential project, proper grading sequencing ensures site preparation is completed 
              efficiently and meets all engineering specifications. We coordinate contractors 
              to handle both rough and final grading phases.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Rough and final grading for new developments typically range from <strong>$50,000 to $200,000</strong> for 
                smaller developments, and <strong>$200,000 to $1,000,000+</strong> for large subdivision 
                or commercial developments depending on site size, required earthwork, and number of lots 
                or building pads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Rough and Final Grading Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Rough Grading</h3>
                <p className={styles.serviceDescription}>
                  Initial earthmoving to achieve approximate elevations and establish general site grades. 
                  Rough grading removes excess material or adds fill to bring the site to within a few 
                  inches of final elevations, preparing the site for fine grading work.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Fine Grading</h3>
                <p className={styles.serviceDescription}>
                  Precise grading work to achieve exact elevations specified in engineering drawings, 
                  typically within 0.1 feet of specified elevations. Fine grading creates the exact 
                  slopes and contours required for building pads, roads, and infrastructure.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading individual building pads to precise elevations for foundation construction. 
                  Each building pad must be graded to exact elevations and slopes specified in engineering 
                  drawings, with proper compaction for foundation support.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Road and Infrastructure Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading for roads, access drives, and infrastructure to proper elevations and slopes. 
                  Road grading includes proper crown, cross-slopes, and drainage features to ensure 
                  effective water management and safe vehicle access.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Grading</h3>
                <p className={styles.serviceDescription}>
                  Grading to create proper drainage slopes and direct water to stormwater systems. 
                  Drainage grading ensures water flows away from structures and toward drainage inlets, 
                  swales, or retention areas as specified in drainage design.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Site Preparation</h3>
                <p className={styles.serviceDescription}>
                  Final grading and site preparation to ensure all areas meet engineering specifications 
                  and are ready for building construction. This includes final compaction, elevation 
                  verification, and coordination with building contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Development Grading Considerations</h2>
            <p className={styles.text}>
              Grading for new developments in South Florida requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Phased Grading Operations:</strong> Large developments require phased grading 
                to coordinate with utility installation, road construction, and building schedules. 
                Rough grading establishes general grades, while final grading is completed just before 
                building construction.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Development grading must incorporate proper 
                drainage and stormwater management to meet South Florida Water Management District and 
                county requirements. Grading must work in conjunction with retention areas and drainage 
                systems.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Developments in flood zones must have building 
                pads and infrastructure graded to specific elevations above base flood elevation. This 
                affects grading depth and may require additional fill material.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                grading depth and compaction. Proper dewatering may be required, and building pads may 
                need to be elevated above the water table for foundation stability.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Development grading typically requires permits 
                from county building departments and may require additional permits from SFWMD for 
                stormwater management and land disturbance. Large developments may require phased 
                permit approvals.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> All grading must meet exact elevations 
                and slopes specified in engineering drawings. Contractors must have the equipment and 
                expertise to achieve precise elevations, typically within 0.1 feet of specified grades.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Development Grading Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your development grading meets all specifications and 
              regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, site plans, and 
                development schedule to understand grading requirements and identify any challenges. 
                This includes coordinating with utility providers and other contractors.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required grading permits and 
                coordinate with local building departments and regulatory agencies. Large developments 
                may require phased permit approvals and inspections.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (graders, compactors, laser-guided systems) and experience 
                for large-scale development grading.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations across the development site. Rough grading establishes general 
                grades and prepares the site for utility installation and fine grading.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Grading is coordinated with utility installation 
                to ensure proper sequencing. Utilities must be installed before final grading in most 
                areas to avoid damage to graded surfaces.
              </li>
              <li>
                <strong>Final Grading:</strong> Precise grading work using laser-guided equipment to 
                achieve exact elevations specified in engineering drawings. Final grading is completed 
                just before building construction to ensure precise elevations.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with building 
                departments and engineers to ensure all areas meet specifications and are ready for 
                building construction.
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations, typically 
                  within a few inches of final elevations. Rough grading establishes general site grades 
                  and prepares the site for utility installation. Final grading is the precise finishing 
                  work to achieve exact elevations specified in engineering drawings, typically within 
                  0.1 feet of specified grades. Final grading is completed just before building 
                  construction.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>When should rough grading be done in a development?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is typically done early in the development process, after land clearing 
                  and before utility installation. Rough grading establishes general site grades and 
                  prepares the site for infrastructure work. It should be completed before roads and 
                  utilities are installed to avoid damage to graded surfaces.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does development grading cost?</h3>
                <p className={styles.faqAnswer}>
                  Development grading costs vary based on site size, number of lots or building pads, 
                  required earthwork, and site conditions. Typical smaller developments range from 
                  $50,000 to $200,000, while large subdivisions or commercial developments can range 
                  from $200,000 to $1,000,000+ depending on scope. Factors affecting cost include site 
                  access, required earthwork, drainage complexity, and permit requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do developments need special permits for grading?</h3>
                <p className={styles.faqAnswer}>
                  Yes, development grading typically requires permits from county building departments 
                  and may require additional permits from SFWMD for stormwater management and land 
                  disturbance. Large developments may require phased permit approvals and coordination 
                  with multiple regulatory agencies. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does final grading need to be?</h3>
                <p className={styles.faqAnswer}>
                  Final grading must achieve elevations within 0.1 feet (1.2 inches) of specified 
                  elevations in engineering drawings. Slopes must match specified grades exactly. This 
                  precision is critical for foundation stability, code compliance, and proper drainage. 
                  Our contractors use laser-guided grading equipment to achieve this precision.
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
              We coordinate rough and final grading for new developments across all of South Florida. 
              Select your location to learn more about development grading services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-grading-site-grading/rough-final-grading-developments/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/rough-final-grading-developments/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/rough-final-grading-developments/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-grading-site-grading/rough-final-grading-developments/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Development Grading Project?"
        description="Get a free quote for your rough and final grading project. We'll coordinate licensed contractors to deliver precise elevations and proper site preparation for your new development."
        showPhone={true}
      />
    </main>
  )
}

