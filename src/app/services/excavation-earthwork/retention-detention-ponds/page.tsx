import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Ponds | South Florida',
  description: 'Excavation and construction of retention and detention ponds for stormwater management across South Florida. SFWMD and county compliance.',
  openGraph: {
    title: 'Retention & Detention Ponds | South Florida',
    description: 'Excavation and construction of retention and detention ponds for stormwater management across South Florida.',
    url: `${siteConfig.url}/services/excavation-earthwork/retention-detention-ponds/`,
  },
}

export default function RetentionDetentionPondsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Retention and Detention Ponds</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Excavation and construction of retention and detention ponds for stormwater 
                management across South Florida. We coordinate licensed contractors to excavate 
                and construct stormwater ponds with proper depths, slopes, and overflow structures 
                to meet SFWMD and county requirements.
              </p>
              <p className={styles.description}>
                Retention and detention ponds are essential for managing stormwater runoff in 
                South Florida developments. Our network of licensed contractors has the equipment 
                and expertise to excavate and construct stormwater ponds that comply with 
                regulatory requirements and effectively manage stormwater.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/retention-ponds.jpg"
                alt="Retention and detention pond excavation and construction in South Florida"
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
              Retention and detention pond services are essential for developers, general contractors, 
              subdivision developers, commercial property owners, and anyone developing properties that 
              require stormwater management systems.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, commercial complex, or any property 
              requiring stormwater management, retention and detention ponds are often required by 
              regulatory agencies. We coordinate contractors with heavy equipment to excavate and 
              construct stormwater ponds that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Retention and detention pond projects typically range from <strong>$75,000 to $200,000</strong> for 
                smaller residential developments, and <strong>$200,000 to $500,000+</strong> for large-scale 
                commercial or subdivision projects depending on pond size, depth, overflow structures, 
                and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Retention and Detention Pond Construction Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Engineering Design Review</h3>
                <p className={styles.serviceDescription}>
                  Review of engineering designs to understand pond dimensions, depths, and overflow 
                  structures. Design review ensures excavation meets exact requirements for stormwater 
                  management and regulatory compliance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Pond Excavation</h3>
                <p className={styles.serviceDescription}>
                  Excavation of retention and detention ponds to exact depths and dimensions specified 
                  in engineering drawings. Pond excavation creates proper storage volumes and depths 
                  for stormwater management.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Slope Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of proper slopes for pond banks to ensure stability and prevent erosion. 
                  Slopes are typically 3:1 or 4:1 ratios, with proper grading to meet engineering 
                  specifications and regulatory requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
                <p className={styles.serviceDescription}>
                  Installation of overflow structures including weirs, risers, and outfall pipes to 
                  control water levels and discharge rates. Overflow structures ensure proper 
                  stormwater management and prevent pond overflow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of inlets to receive stormwater runoff and outlets to discharge 
                  treated water. Inlet and outlet structures ensure proper water flow and treatment 
                  through retention and detention systems.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
                <p className={styles.serviceDescription}>
                  Installation of erosion control measures including matting, vegetation, or riprap to 
                  protect pond banks from erosion. Erosion control ensures long-term pond stability 
                  and prevents sediment accumulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Retention vs. Detention Ponds</h2>
            <p className={styles.text}>
              Understanding the difference between retention and detention ponds is important for 
              stormwater management:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Retention Ponds:</strong> Retention ponds maintain a permanent pool of water 
                and provide both water quality treatment and flood control. Water is stored 
                permanently and released slowly, allowing for natural treatment processes. Retention 
                ponds are often used for water quality improvement.
              </li>
              <li>
                <strong>Detention Ponds:</strong> Detention ponds are designed to temporarily store 
                stormwater runoff and release it slowly to prevent flooding downstream. Detention 
                ponds are typically dry between storm events and fill during heavy rain, then 
                discharge slowly over time.
              </li>
              <li>
                <strong>Design Differences:</strong> Retention ponds require deeper excavation to 
                maintain permanent water levels, while detention ponds may be shallower with more 
                storage volume. Both require proper overflow structures and inlet/outlet systems.
              </li>
              <li>
                <strong>Regulatory Requirements:</strong> Both retention and detention ponds must 
                meet SFWMD and county requirements for stormwater management. Design requirements 
                vary based on watershed size, impervious surface area, and local regulations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Pond Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention pond construction in South Florida requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>SFWMD Permits:</strong> Pond construction typically requires SFWMD 
                environmental resource permits for land disturbance and stormwater management. 
                Permits ensure compliance with water management district requirements and may 
                require specific design features.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                pond excavation depth and may require dewatering systems. Water table conditions 
                determine pond design and may affect retention pond water levels.
              </li>
              <li>
                <strong>Stormwater Management Requirements:</strong> Ponds must meet county and 
                SFWMD requirements for stormwater treatment and flood control. Design requirements 
                include storage volumes, treatment capabilities, and discharge rates based on 
                watershed characteristics.
              </li>
              <li>
                <strong>Overflow Structure Design:</strong> Overflow structures must be designed 
                to handle design storm events and prevent pond overflow. Structures include weirs, 
                risers, and outfall pipes sized for proper discharge rates.
              </li>
              <li>
                <strong>Erosion Control:</strong> Pond banks require proper erosion control to 
                prevent sediment accumulation and maintain pond function. Erosion control measures 
                include matting, vegetation, or riprap based on design requirements.
              </li>
              <li>
                <strong>Maintenance Access:</strong> Ponds require maintenance access for 
                sediment removal, vegetation management, and structure maintenance. Access roads 
                and maintenance areas must be included in pond design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Pond Construction Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention pond is constructed 
              properly and meets all regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design Review:</strong> We review engineering designs to 
                understand pond dimensions, depths, and overflow structures. Design review ensures 
                excavation meets exact requirements for stormwater management.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required SFWMD and county 
                permits for pond construction and coordinate with regulatory agencies. Permits ensure 
                compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience 
                for pond excavation and construction.
              </li>
              <li>
                <strong>Pond Excavation:</strong> Contractors perform excavation to exact depths 
                and dimensions, creating proper storage volumes. Excavation establishes pond shape 
                and prepares areas for overflow structure installation.
              </li>
              <li>
                <strong>Slope Construction:</strong> Pond banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion. Slope construction meets 
                engineering specifications and regulatory requirements.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates. 
                Structures ensure proper stormwater management and prevent pond overflow.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections ensure ponds meet regulatory requirements. Ponds are 
                ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is the difference between retention and detention ponds?</h3>
                <p className={styles.faqAnswer}>
                  Retention ponds maintain a permanent pool of water and provide both water quality 
                  treatment and flood control, while detention ponds temporarily store stormwater 
                  and release it slowly. Retention ponds are typically deeper with permanent water, 
                  while detention ponds are designed to fill during storms and drain between events. 
                  Both serve important stormwater management functions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need SFWMD permits for pond construction?</h3>
                <p className={styles.faqAnswer}>
                  Yes, retention and detention pond construction typically requires SFWMD 
                  environmental resource permits for land disturbance and stormwater management. 
                  Permits ensure compliance with water management district requirements and may 
                  require specific design features. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does pond construction cost?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction costs vary based on pond size, depth, overflow structures, and 
                  regulatory requirements. Typical residential developments range from $75,000 to 
                  $200,000, while large-scale commercial or subdivision projects can range from 
                  $200,000 to $500,000+ depending on scope. Factors affecting cost include 
                  excavation volume, overflow structure complexity, and erosion control requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep do retention and detention ponds need to be?</h3>
                <p className={styles.faqAnswer}>
                  Pond depths vary based on design requirements for storage volume and stormwater 
                  management. Retention ponds typically require deeper excavation to maintain 
                  permanent water levels, while detention ponds may be shallower with more storage 
                  volume. Depths are specified in engineering designs based on watershed 
                  characteristics and regulatory requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does pond construction take?</h3>
                <p className={styles.faqAnswer}>
                  Pond construction timelines vary based on pond size, depth, and regulatory 
                  requirements. Typical projects take 4-8 weeks depending on scope, with additional 
                  time for permit processing. Weather conditions, especially during South Florida&apos;s 
                  rainy season, can affect timelines. We coordinate with contractors to complete 
                  projects efficiently.
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
              We coordinate retention and detention pond construction across all of South Florida. 
              Select your location to learn more about stormwater management services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/excavation-earthwork/retention-detention-ponds/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/excavation-earthwork/retention-detention-ponds/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/excavation-earthwork/retention-detention-ponds/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/excavation-earthwork/retention-detention-ponds/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Build Your Stormwater Pond?"
        description="Get a free quote for your retention or detention pond construction. We'll coordinate licensed contractors with heavy equipment to excavate and construct stormwater ponds that meet regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

