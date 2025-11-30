import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work & Site Development | South Florida',
  description: 'Complete site work and site development services across South Florida. Commercial and residential site development packages from $25,000+. Licensed contractors.',
  openGraph: {
    title: 'Site Work & Site Development | South Florida',
    description: 'Complete site work and site development services across South Florida. Commercial and residential site development packages.',
    url: `${siteConfig.url}/services/site-work-site-development/`,
  },
}

export default function SiteWorkSiteDevelopmentPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Site Work and Site Development</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Complete site development packages for commercial and residential projects across South Florida. 
                From initial clearing to final building pad preparation, we coordinate licensed contractors to 
                deliver comprehensive site work solutions.
              </p>
              <p className={styles.description}>
                Our site work and site development services encompass everything needed to prepare land for 
                construction. We coordinate a vetted network of licensed contractors with the proper equipment 
                and certifications to handle your project from start to finish.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('site-work-site-development')}
                alt="Site work and site development services in South Florida"
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
              Our site work and site development services are designed for general contractors, 
              developers, custom home builders, commercial property owners, and high-end homeowners 
              who need comprehensive site preparation for their construction projects.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial retail center, building a custom home, 
              or preparing land for a new subdivision, we coordinate licensed contractors with the 
              expertise and equipment to handle complete site development from start to finish.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Site work and site development projects typically start around <strong>$25,000</strong> and 
                can range significantly higher depending on project scope, site conditions, and regulatory 
                requirements. Commercial developments and large-scale residential projects often exceed 
                $100,000 in site work costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Work and Site Development Includes</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive site work services cover all phases of site development:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Land Clearing and Vegetation Removal</h3>
              <p className={styles.serviceDescription}>
                Complete removal of trees, vegetation, and debris to prepare the site for development. 
                Includes stump removal, grubbing, and site cleanup.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation, cut and fill operations, and earthmoving to achieve proper site 
                elevations and prepare for building foundations and infrastructure.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading to create building pads at proper elevations, including rough and 
                final grading to meet engineering specifications and building code requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive drainage systems including retention ponds, 
                swales, stormwater inlets, and piping to meet South Florida Water Management District 
                and local county requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities, coordination with utility companies, and preparation of 
                infrastructure connections for water, sewer, electrical, and telecommunications.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Implementation of erosion control measures, slope stabilization, and sediment control 
                to protect the site and surrounding areas during and after construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Site Development Considerations</h2>
            <p className={styles.text}>
              Site development in South Florida presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in this region:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table requires 
                careful planning for excavation, drainage, and foundation preparation. Proper 
                dewatering and drainage systems are essential.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many South Florida properties are in flood 
                zones, requiring specific elevation requirements and stormwater management systems 
                that comply with FEMA and local regulations.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil 
                characteristics that affect grading, compaction, and foundation design. Our 
                contractors are experienced with these conditions.
              </li>
              <li>
                <strong>Environmental Permits:</strong> Site development often requires permits 
                from the South Florida Water Management District (SFWMD) and county environmental 
                departments for land disturbance and stormwater management.
              </li>
              <li>
                <strong>Municipal Requirements:</strong> Each county—Miami-Dade, Broward, and 
                Palm Beach—has specific site development standards, permit requirements, and 
                inspection processes that must be followed.
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
              Our coordinated approach to site development ensures your project moves smoothly 
              from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits and coordinate 
                with local building departments, SFWMD, and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment, certifications, and experience for your specific site 
                conditions and requirements.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of site work 
                activities, ensuring proper timing and minimizing conflicts between different phases.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, building code requirements, and permit conditions.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections and ensure 
                all site work is completed to standards before building construction begins.
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
                <h3 className={styles.faqQuestion}>What is the difference between site work and site development?</h3>
                <p className={styles.faqAnswer}>
                  Site work refers to the physical earthwork, grading, and preparation activities. 
                  Site development is the broader process that includes site work plus planning, 
                  permitting, utility coordination, and regulatory compliance. We provide complete 
                  site development services that encompass all aspects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site development take?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Simple residential projects may take 2-4 weeks, while large commercial 
                  developments can take several months. We coordinate scheduling to minimize delays 
                  and keep your project on track.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for site development?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include 
                  building permits for site work, SFWMD environmental resource permits for land 
                  disturbance, county grading permits, and stormwater management approvals. We help 
                  identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle projects in flood zones?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site development projects in flood zones throughout South Florida. 
                  Our contractors are experienced with FEMA requirements, elevation certificates, 
                  and the specific drainage and grading requirements for flood-prone areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized site work and site development services:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/services/site-work-site-development/complete-site-development-packages/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Complete Site Development Packages</h3>
                <p className={styles.subServiceDescription}>
                  Turnkey site development from clearing to building pad preparation
                </p>
              </a>
              <a href="/services/site-work-site-development/commercial-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Commercial Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site work services for commercial developments and retail centers
                </p>
              </a>
              <a href="/services/site-work-site-development/custom-home-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Custom Home Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site preparation services for custom home construction
                </p>
              </a>
              <a href="/services/site-work-site-development/subdivision-infrastructure/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Subdivision and Infrastructure Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Complete site work for new subdivisions and infrastructure projects
                </p>
              </a>
              <a href="/services/site-work-site-development/cut-fill-mass-earthmoving/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Cut and Fill and Mass Earthmoving</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale earthmoving and cut/fill operations for site balancing
                </p>
              </a>
              <a href="/services/site-work-site-development/value-engineering-preconstruction/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Value Engineering and Pre-Construction Assistance</h3>
                <p className={styles.subServiceDescription}>
                  Site work planning, value engineering, and pre-construction consulting
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Site Development Project?"
        description="Get a free quote for your site work and site development project. We'll connect you with licensed contractors experienced in South Florida conditions."
        showPhone={true}
      />
    </main>
  )
}

