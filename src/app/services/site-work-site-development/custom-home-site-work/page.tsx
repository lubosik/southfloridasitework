import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Custom Home Site Work | South Florida',
  description: 'Custom home site work and site preparation services across South Florida. Building pad grading, drainage, and site development for luxury homes.',
  openGraph: {
    title: 'Custom Home Site Work | South Florida',
    description: 'Custom home site work and site preparation services across South Florida. Building pad grading, drainage, and site development.',
    url: `${siteConfig.url}/services/site-work-site-development/custom-home-site-work/`,
  },
}

export default function CustomHomeSiteWorkPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Custom Home Site Work</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Site preparation services for custom home construction across South Florida. We coordinate 
                licensed contractors to deliver precise site work for luxury and high-end residential 
                projects.
              </p>
              <p className={styles.description}>
                Custom home site work requires attention to detail and precision. From building pad 
                grading to drainage systems, we coordinate contractors with the expertise to prepare 
                your site for custom home construction, ensuring proper elevations, drainage, and 
                foundation preparation.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/custom-home-site-work.jpg"
                alt="Custom home site work services in South Florida"
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
              Our custom home site work services serve custom home builders, high-end homeowners, 
              architects, and general contractors who need precise site preparation for luxury and 
              custom residential construction projects.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a luxury home on a waterfront lot, a custom home on a 
              sloped site, or a high-end residence requiring special site considerations, we coordinate 
              contractors with the expertise to handle the unique requirements of custom home site work.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Custom home site work projects typically range from <strong>$25,000</strong> for simple 
                building pad preparation to $100,000+ for complex sites requiring extensive grading, 
                drainage systems, or special foundation preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Custom Home Site Work Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for custom home building pads to exact elevations specified in 
                architectural and engineering drawings. Includes proper compaction and soil preparation 
                for foundation support.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Preparation</h3>
              <p className={styles.serviceDescription}>
                Selective clearing and site preparation for custom homes, preserving desirable trees 
                when possible while preparing the site for construction. Includes stump removal and 
                grubbing.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of French drains, underdrain systems, and surface drainage to protect 
                custom home foundations and prevent water issues. Designed for South Florida&apos;s 
                high water table and heavy rainfall.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Driveway and Access Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and preparation of driveways and access roads for custom homes, including 
                proper slopes for drainage and base preparation for paving.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utilities including water, sewer, electrical, and 
                telecommunications. Coordination with utility companies for connections.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control</h3>
              <p className={styles.serviceDescription}>
                Installation of erosion control measures and slope stabilization to protect the site 
                during and after construction, especially important for sloped or waterfront lots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Custom Home Site Work Considerations</h2>
            <p className={styles.text}>
              Custom home site work requires specialized attention to unique requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Precision Grading:</strong> Custom homes often require exact building pad 
                elevations to match architectural designs. Our contractors achieve precise elevations 
                within tight tolerances.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many custom home sites are in flood zones, 
                requiring specific elevations above base flood elevation (BFE) and proper drainage 
                systems to meet FEMA and local requirements.
              </li>
              <li>
                <strong>Waterfront Considerations:</strong> Waterfront custom homes require special 
                attention to erosion control, storm surge protection, and proper elevation above 
                water levels.
              </li>
              <li>
                <strong>Sloped Sites:</strong> Custom homes on sloped lots require careful grading, 
                retaining walls, and drainage to create level building pads while maintaining site 
                stability.
              </li>
              <li>
                <strong>Tree Preservation:</strong> Many custom home sites have desirable trees that 
                should be preserved. We coordinate selective clearing to protect trees when possible.
              </li>
              <li>
                <strong>High-End Finishes:</strong> Custom homes often have high-end landscaping and 
                hardscaping that require proper site preparation and drainage to protect investments.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Custom Home Site Work Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your custom home site is prepared to exact specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review architectural drawings, engineering 
                specifications, and site conditions to understand all site work requirements and 
                identify any challenges.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits and coordinate 
                with local building departments, SFWMD, and other agencies as needed for custom home 
                site work.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have experience with custom home site work and can achieve the precision required 
                for luxury projects.
              </li>
              <li>
                <strong>Precision Execution:</strong> Contractors perform site work with attention to 
                detail, achieving exact elevations, proper drainage, and foundation preparation per 
                specifications.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure work meets architectural 
                and engineering specifications, with particular attention to elevation accuracy and 
                drainage performance.
              </li>
              <li>
                <strong>Final Preparation:</strong> Site is prepared and inspected, ready for 
                foundation work and building construction to begin.
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
                <h3 className={styles.faqQuestion}>What is included in custom home site work?</h3>
                <p className={styles.faqAnswer}>
                  Custom home site work includes building pad grading, site clearing, drainage systems, 
                  driveway preparation, utility preparation, and erosion control. Everything needed to 
                  prepare your site for custom home construction.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does building pad grading need to be?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading for custom homes typically must be within 0.1 feet of specified 
                  elevations. Our contractors use precision equipment and careful measurement to achieve 
                  these tight tolerances.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you work on waterfront custom home sites?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site work for waterfront custom homes throughout South Florida. Our 
                  contractors are experienced with erosion control, storm surge considerations, and the 
                  special requirements for waterfront properties.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can you preserve trees during site work?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate selective clearing to preserve desirable trees when possible. We 
                  work with you and your architect to identify trees worth preserving and plan site 
                  work to protect them.
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
              We coordinate custom home site work across all of South Florida. Select your location to 
              learn more about custom home site work in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/site-work-site-development/custom-home-site-work/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/site-work-site-development/custom-home-site-work/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/site-work-site-development/custom-home-site-work/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/site-work-site-development/custom-home-site-work/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Custom Home Site Work?"
        description="Get a free quote for your custom home site work project. We'll coordinate licensed contractors to prepare your site for custom home construction."
        showPhone={true}
      />
    </main>
  )
}

