import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Access Preparation | South Florida',
  description: 'Clearing and preparation of access roads and staging areas for construction equipment across South Florida.',
  openGraph: {
    title: 'Site Access Preparation | South Florida',
    description: 'Clearing and preparation of access roads and staging areas for construction equipment across South Florida.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/site-access-preparation/`,
  },
}

export default function SiteAccessPreparationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Site Access Preparation</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Clearing and preparation of access roads and staging areas for construction 
                equipment and operations across South Florida.
              </p>
              <p className={styles.description}>
                Site access preparation ensures proper access for construction equipment and 
                operations. Our network of licensed contractors coordinates efficient clearing 
                and preparation of access roads and staging areas that support construction 
                activities.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/site-access-preparation.jpg"
                alt="Site access preparation services in South Florida"
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
              Site access preparation is essential for developers, general contractors, property 
              owners, and anyone who needs access roads and staging areas prepared for construction 
              equipment and operations.
            </p>
            <p className={styles.text}>
              Whether you&apos;re preparing a new construction site or need improved access for 
              existing projects, site access preparation ensures proper access for equipment and 
              operations. We coordinate contractors to efficiently clear and prepare access roads 
              and staging areas.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Site access preparation typically ranges from <strong>$10,000 to $40,000</strong> for 
                residential lots, and <strong>$40,000 to $150,000+</strong> for large commercial sites 
                or properties with extensive access requirements depending on road length, staging area 
                size, and preparation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Site Access Preparation Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Access Road Clearing</h3>
                <p className={styles.serviceDescription}>
                  Clearing of vegetation, trees, and obstacles to establish access roads. Access 
                  road clearing ensures proper routes for construction equipment and vehicles.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Road Grading and Compaction</h3>
                <p className={styles.serviceDescription}>
                  Grading and compaction of access roads to support construction equipment. Road 
                  grading and compaction ensure stable surfaces for heavy equipment and vehicles.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Staging Area Preparation</h3>
                <p className={styles.serviceDescription}>
                  Clearing and preparation of staging areas for equipment, materials, and operations. 
                  Staging area preparation ensures adequate space for construction activities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage for Access Roads</h3>
                <p className={styles.serviceDescription}>
                  Installation of drainage features for access roads to prevent water accumulation. 
                  Drainage installation ensures access roads remain usable during wet conditions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Temporary Road Surfacing</h3>
                <p className={styles.serviceDescription}>
                  Installation of temporary road surfacing materials including gravel or crushed 
                  stone. Temporary surfacing ensures access roads remain usable during construction.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Safety and Traffic Control</h3>
                <p className={styles.serviceDescription}>
                  Coordination of safety measures and traffic control for access roads. Safety 
                  coordination ensures proper protection for workers and the public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Access Preparation</h2>
            <p className={styles.text}>
              Site access preparation covers various types of access and staging needs:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Primary Access Roads:</strong> Main access routes from public roads to 
                construction sites. Primary access roads provide routes for heavy equipment and 
                material delivery.
              </li>
              <li>
                <strong>Secondary Access Roads:</strong> Additional access routes within construction 
                sites. Secondary access roads provide routes for equipment movement and material 
                distribution.
              </li>
              <li>
                <strong>Equipment Staging Areas:</strong> Areas for equipment storage and maintenance. 
                Equipment staging areas ensure adequate space for construction equipment.
              </li>
              <li>
                <strong>Material Staging Areas:</strong> Areas for material storage and distribution. 
                Material staging areas ensure adequate space for construction materials.
              </li>
              <li>
                <strong>Temporary Parking Areas:</strong> Areas for worker and visitor parking. 
                Temporary parking areas ensure adequate space for vehicles during construction.
              </li>
              <li>
                <strong>Emergency Access Routes:</strong> Routes for emergency vehicles and equipment. 
                Emergency access routes ensure proper access for safety and emergency response.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Access Preparation Considerations</h2>
            <p className={styles.text}>
              Site access preparation in South Florida requires attention to local conditions and 
              regulations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Wet Season Conditions:</strong> South Florida&apos;s wet season requires 
                access roads and staging areas that remain usable during heavy rainfall. Drainage 
                and surfacing ensure access during wet conditions.
              </li>
              <li>
                <strong>High Water Table:</strong> High water table conditions may require specialized 
                road construction and drainage techniques. High water table considerations ensure 
                stable access roads.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones may have specific 
                requirements for access road elevations and drainage. Flood zone compliance ensures 
                proper access and regulatory compliance.
              </li>
              <li>
                <strong>Coastal Soils:</strong> Coastal soils may require specialized road construction 
                and compaction techniques. Soil considerations ensure stable access roads and staging areas.
              </li>
              <li>
                <strong>Traffic Management:</strong> Access roads may require traffic management plans 
                and coordination with local authorities. Traffic management ensures proper access and 
                safety.
              </li>
              <li>
                <strong>Environmental Protection:</strong> Access preparation must protect wetlands, 
                water bodies, and environmentally sensitive areas. Environmental protection ensures 
                compliance with regulations and environmental stewardship.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Access Preparation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your site access preparation is completed efficiently 
              and supports construction operations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Access Assessment:</strong> We assess your site to identify access requirements, 
                staging area needs, and preparation requirements. Assessment determines access 
                preparation needs and establishes work scope.
              </li>
              <li>
                <strong>Access Road Planning:</strong> We plan access road routes and staging area 
                locations. Access planning ensures proper routes and adequate space for construction 
                activities.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment and experience for access preparation.
              </li>
              <li>
                <strong>Clearing Operations:</strong> Contractors clear vegetation, trees, and obstacles 
                to establish access roads and staging areas. Clearing operations ensure proper routes and 
                adequate space.
              </li>
              <li>
                <strong>Grading and Compaction:</strong> Access roads and staging areas are graded and 
                compacted to support construction equipment. Grading and compaction ensure stable 
                surfaces for equipment and vehicles.
              </li>
              <li>
                <strong>Drainage Installation:</strong> Drainage features are installed for access roads 
                to prevent water accumulation. Drainage installation ensures access roads remain usable 
                during wet conditions.
              </li>
              <li>
                <strong>Surfacing Installation:</strong> Temporary road surfacing materials are installed 
                as needed. Surfacing installation ensures access roads remain usable during construction.
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
                <h3 className={styles.faqQuestion}>What is included in site access preparation?</h3>
                <p className={styles.faqAnswer}>
                  Site access preparation includes clearing of access roads, grading and compaction of 
                  road surfaces, preparation of staging areas, installation of drainage features, 
                  temporary road surfacing, and coordination of safety measures. Access preparation 
                  ensures proper access for construction equipment and operations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does site access preparation cost?</h3>
                <p className={styles.faqAnswer}>
                  Site access preparation costs vary based on road length, staging area size, and 
                  preparation requirements. Typical residential lots range from $10,000 to $40,000, while 
                  large commercial sites can range from $40,000 to $150,000+ depending on scope. Factors 
                  affecting cost include road length, staging area size, drainage requirements, and 
                  surfacing needs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for access road preparation?</h3>
                <p className={styles.faqAnswer}>
                  Access road preparation may require permits depending on road location, length, and 
                  local regulations. Temporary access roads may have different requirements than permanent 
                  roads. We help identify and coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site access preparation take?</h3>
                <p className={styles.faqAnswer}>
                  Site access preparation timelines vary based on road length, staging area size, and 
                  preparation requirements. Typical residential lots take 2-5 days, while large 
                  commercial sites may take 1-2 weeks depending on scope. Weather conditions and site 
                  access can affect timelines. We coordinate operations to complete projects efficiently.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to access roads after construction?</h3>
                <p className={styles.faqAnswer}>
                  Temporary access roads may be removed after construction, while permanent access roads 
                  may be incorporated into final site development. Access road disposition depends on 
                  project requirements and site plans. We coordinate access road planning to support both 
                  construction and final site development.
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
              We coordinate site access preparation across all of South Florida. Select your 
              location to learn more about access preparation services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/service-areas/miami/land-clearing-lot-preparation/site-access-preparation/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/site-access-preparation/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/site-access-preparation/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/site-access-preparation/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Prepare Site Access?"
        description="Get a free quote for your site access preparation project. We'll coordinate licensed contractors to efficiently clear and prepare access roads and staging areas for your construction project."
        showPhone={true}
      />
    </main>
  )
}

