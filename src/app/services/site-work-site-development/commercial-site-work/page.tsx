import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Commercial Site Work | South Florida',
  description: 'Commercial site work services for retail centers, shopping centers, and commercial developments across South Florida. Licensed contractors.',
  openGraph: {
    title: 'Commercial Site Work | South Florida',
    description: 'Commercial site work services for retail centers, shopping centers, and commercial developments across South Florida.',
    url: `${siteConfig.url}/services/site-work-site-development/commercial-site-work/`,
  },
}

export default function CommercialSiteWorkPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Commercial Site Work</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Comprehensive site work services for retail centers, shopping centers, office complexes, 
                and commercial developments across South Florida. We coordinate licensed contractors to 
                deliver complete site preparation for commercial projects.
              </p>
              <p className={styles.description}>
                Commercial site work requires specialized expertise in large-scale earthmoving, parking 
                lot grading, stormwater management, and utility coordination. Our network of licensed 
                contractors has the equipment and experience to handle commercial projects of all sizes, 
                from small retail pads to large shopping centers.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/commercial-site-work.jpg"
                alt="Commercial site work services in South Florida"
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
              Our commercial site work services serve developers, general contractors, retail developers, 
              and commercial property owners who need site preparation for retail centers, shopping 
              centers, office buildings, warehouses, and other commercial developments.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new shopping center, building a retail pad for a single 
              tenant, or preparing a site for a commercial office complex, we coordinate contractors 
              with the expertise and equipment to handle large-scale commercial site work efficiently 
              and on schedule.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Commercial site work projects typically range from <strong>$100,000</strong> for small 
                retail pads to $500,000+ for large shopping centers or commercial developments. Project 
                costs depend on site size, complexity, and scope of work required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Commercial Site Work Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retail Pad Site Development</h3>
              <p className={styles.serviceDescription}>
                Complete site development for retail pads including clearing, grading, drainage, and 
                utility preparation. Sites are delivered ready for building construction with all 
                permits and approvals in place.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Shopping Center Site Work</h3>
              <p className={styles.serviceDescription}>
                Large-scale site work for shopping centers including mass excavation, parking lot 
                grading, stormwater management systems, and infrastructure preparation for multiple 
                buildings and parking areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot Grading and Paving Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading for commercial parking lots with proper slopes for drainage, ADA 
                compliance, and vehicle accessibility. Site preparation includes base preparation for 
                paving contractors.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Commercial Stormwater Management</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive stormwater management systems for commercial 
                developments including retention ponds, swales, and stormwater inlets to meet SFWMD 
                and county requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Coordination</h3>
              <p className={styles.serviceDescription}>
                Coordination of utility infrastructure including water, sewer, electrical, and 
                telecommunications for commercial developments. Includes trenching, utility company 
                coordination, and infrastructure connections.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Access Road and Driveway Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and preparation of access roads, driveways, and loading areas for commercial 
                properties. Includes proper slopes, drainage, and base preparation for paving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Commercial Site Work Considerations</h2>
            <p className={styles.text}>
              Commercial site work in South Florida requires attention to specific requirements and 
              challenges:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Large-Scale Operations:</strong> Commercial projects often require significant 
                earthmoving and mass excavation. Our contractors have the heavy equipment needed for 
                efficient large-scale operations.
              </li>
              <li>
                <strong>Parking Requirements:</strong> Commercial developments must meet specific parking 
                requirements and ADA compliance standards. Grading must accommodate proper parking lot 
                slopes and accessibility features.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Commercial developments generate significant 
                impervious surface area, requiring comprehensive stormwater management systems to meet 
                SFWMD and county requirements.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Commercial projects require coordination with 
                multiple utility companies and infrastructure providers. We handle this coordination to 
                ensure timely utility installation.
              </li>
              <li>
                <strong>Phased Development:</strong> Many commercial projects are built in phases. We 
                coordinate site work to accommodate phased construction while maintaining site access 
                and functionality.
              </li>
              <li>
                <strong>Timeline Management:</strong> Commercial projects often have tight deadlines tied 
                to lease agreements or opening dates. We coordinate scheduling to ensure site work is 
                completed on time.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Commercial Site Work Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures commercial site work is completed efficiently and meets 
              all requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Planning:</strong> We review commercial site plans, identify all 
                required permits, and develop a detailed work plan and schedule for site work activities.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We coordinate all required permits including 
                building permits, SFWMD environmental resource permits, county grading permits, and 
                stormwater management approvals.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for large-scale commercial site work.
              </li>
              <li>
                <strong>Site Work Execution:</strong> Contractors perform all phases of site work 
                including clearing, excavation, grading, drainage installation, and utility preparation 
                according to specifications.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress and ensure work meets engineering 
                specifications, building code requirements, and permit conditions throughout the project.
              </li>
              <li>
                <strong>Final Delivery:</strong> We coordinate final inspections and deliver a 
                building-ready site with all approvals in place, ready for building construction.
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
                <h3 className={styles.faqQuestion}>What is included in commercial site work?</h3>
                <p className={styles.faqAnswer}>
                  Commercial site work includes all phases of site preparation: land clearing, mass 
                  excavation, site grading, parking lot preparation, stormwater management, utility 
                  infrastructure, and final site preparation. Everything needed to prepare a 
                  building-ready commercial site.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does commercial site work take?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies based on project size and complexity. Small retail pads may take 4-8 
                  weeks, while large shopping centers can take 3-6 months. We provide detailed 
                  schedules based on your specific project requirements and work to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle permits for commercial site work?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate all required permits including building permits, SFWMD 
                  environmental resource permits, county grading permits, and stormwater management 
                  approvals. We handle the permit application process and ensure compliance throughout 
                  the project.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can you work around existing operations?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we can coordinate site work to accommodate existing operations when needed. This 
                  may involve phased work or scheduling to minimize disruption to existing businesses 
                  or operations.
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
              We coordinate commercial site work across all of South Florida. Select your location to 
              learn more about commercial site work in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/site-work-site-development/commercial-site-work/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/site-work-site-development/commercial-site-work/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/site-work-site-development/commercial-site-work/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/site-work-site-development/commercial-site-work/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Commercial Site Work Project?"
        description="Get a free quote for your commercial site work project. We'll coordinate licensed contractors to deliver a building-ready commercial site."
        showPhone={true}
      />
    </main>
  )
}

