import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Retention & Detention Basins | South Florida',
  description: 'Design and construction of retention and detention basins across South Florida. Temporary stormwater storage to meet SFWMD and county requirements.',
  openGraph: {
    title: 'Retention & Detention Basins | South Florida',
    description: 'Design and construction of retention and detention basins for stormwater management across South Florida.',
    url: `${siteConfig.url}/services/drainage-stormwater-solutions/retention-detention-basins/`,
  },
}

export default function RetentionDetentionBasinsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Retention and Detention Basins</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Design and construction of retention and detention basins to temporarily store 
                stormwater, reduce peak flow rates, and meet SFWMD and county stormwater management 
                requirements across South Florida.
              </p>
              <p className={styles.description}>
                Retention and detention basins are essential components of comprehensive stormwater 
                management systems. Our network of licensed contractors has the expertise to design 
                and construct basins that effectively manage stormwater and comply with regulatory 
                requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/retention-detention-basins.jpg"
                alt="Retention and detention basin construction in South Florida"
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
              Retention and detention basin services are essential for developers, general contractors, 
              subdivision developers, commercial property owners, and anyone developing properties that 
              require stormwater management systems.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, commercial complex, or any property 
              requiring stormwater management, retention and detention basins are often required by 
              regulatory agencies. We coordinate contractors with heavy equipment to design and construct 
              basins that meet regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Retention and detention basin projects typically range from <strong>$75,000 to $200,000</strong> for 
                smaller residential developments, and <strong>$200,000 to $500,000+</strong> for large-scale 
                commercial or subdivision projects depending on basin size, depth, overflow structures, 
                and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Retention and Detention Basin Construction Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Engineering Design</h3>
                <p className={styles.serviceDescription}>
                  Design of retention and detention basins based on drainage requirements, flow rates, 
                  and regulatory standards. Design determines basin dimensions, depths, storage volumes, 
                  and overflow structures to meet SFWMD and county requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Basin Excavation</h3>
                <p className={styles.serviceDescription}>
                  Excavation of retention and detention basins to exact depths and dimensions specified 
                  in engineering drawings. Basin excavation creates proper storage volumes and depths 
                  for stormwater management.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Slope Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of proper slopes for basin banks to ensure stability and prevent erosion. 
                  Slopes are typically 3:1 or 4:1 ratios, with proper grading to meet engineering 
                  specifications and regulatory requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Overflow Structure Installation</h3>
                <p className={styles.serviceDescription}>
                  Installation of overflow structures including weirs, risers, and outfall pipes to 
                  control water levels and discharge rates. Overflow structures ensure proper 
                  stormwater management and prevent basin overflow.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Inlet and Outlet Construction</h3>
                <p className={styles.serviceDescription}>
                  Construction of inlets to receive stormwater runoff and outlets to discharge treated 
                  water. Inlet and outlet structures ensure proper water flow and treatment through 
                  retention and detention systems.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
                <p className={styles.serviceDescription}>
                  Installation of erosion control measures including matting, vegetation, or riprap to 
                  protect basin banks from erosion. Erosion control ensures long-term basin stability 
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
            <h2 className={styles.heading}>Retention vs. Detention Basins</h2>
            <p className={styles.text}>
              Understanding the difference between retention and detention basins is important for 
              stormwater management:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Retention Basins:</strong> Retention basins maintain a permanent pool of water 
                and provide both water quality treatment and flood control. Water is stored 
                permanently and released slowly, allowing for natural treatment processes. Retention 
                basins are often used for water quality improvement.
              </li>
              <li>
                <strong>Detention Basins:</strong> Detention basins are designed to temporarily store 
                stormwater runoff and release it slowly to prevent flooding downstream. Detention 
                basins are typically dry between storm events and fill during heavy rain, then 
                discharge slowly over time.
              </li>
              <li>
                <strong>Design Differences:</strong> Retention basins require deeper excavation to 
                maintain permanent water levels, while detention basins may be shallower with more 
                storage volume. Both require proper overflow structures and inlet/outlet systems.
              </li>
              <li>
                <strong>Regulatory Requirements:</strong> Both retention and detention basins must 
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
            <h2 className={styles.heading}>South Florida Basin Construction Considerations</h2>
            <p className={styles.text}>
              Retention and detention basin construction in South Florida requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>SFWMD Permits:</strong> Basin construction typically requires SFWMD 
                environmental resource permits for land disturbance and stormwater management. 
                Permits ensure compliance with water management district requirements and may 
                require specific design features.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                basin excavation depth and may require dewatering systems. Water table conditions 
                determine basin design and may affect retention basin water levels.
              </li>
              <li>
                <strong>Stormwater Management Requirements:</strong> Basins must meet county and 
                SFWMD requirements for stormwater treatment and flood control. Design requirements 
                include storage volumes, treatment capabilities, and discharge rates based on 
                watershed characteristics.
              </li>
              <li>
                <strong>Overflow Structure Design:</strong> Overflow structures must be designed 
                to handle design storm events and prevent basin overflow. Structures include weirs, 
                risers, and outfall pipes sized for proper discharge rates.
              </li>
              <li>
                <strong>Erosion Control:</strong> Basin banks require proper erosion control to 
                prevent sediment accumulation and maintain basin function. Erosion control measures 
                include matting, vegetation, or riprap based on design requirements.
              </li>
              <li>
                <strong>Maintenance Access:</strong> Basins require maintenance access for sediment 
                removal, vegetation management, and structure maintenance. Access roads and 
                maintenance areas must be included in basin design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Basin Construction Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your retention or detention basin is constructed 
              properly and meets all regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Design:</strong> We coordinate with engineers to design retention 
                and detention basins that meet drainage requirements and regulatory standards. Design 
                determines basin dimensions, depths, storage volumes, and overflow structures.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required SFWMD and county 
                permits for basin construction and coordinate with regulatory agencies. Permits ensure 
                compliance with stormwater management requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, compactors) and experience for 
                basin excavation and construction.
              </li>
              <li>
                <strong>Basin Excavation:</strong> Contractors perform excavation to exact depths 
                and dimensions, creating proper storage volumes. Excavation establishes basin shape 
                and prepares areas for overflow structure installation.
              </li>
              <li>
                <strong>Slope Construction:</strong> Basin banks are graded to proper slopes (typically 
                3:1 or 4:1) to ensure stability and prevent erosion. Slope construction meets 
                engineering specifications and regulatory requirements.
              </li>
              <li>
                <strong>Overflow Structure Installation:</strong> Overflow structures including weirs, 
                risers, and outfall pipes are installed to control water levels and discharge rates. 
                Structures ensure proper stormwater management and prevent basin overflow.
              </li>
              <li>
                <strong>Erosion Control and Final Inspection:</strong> Erosion control measures are 
                installed, and final inspections ensure basins meet regulatory requirements. Basins 
                are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is the difference between retention and detention basins?</h3>
                <p className={styles.faqAnswer}>
                  Retention basins maintain a permanent pool of water and provide both water quality 
                  treatment and flood control, while detention basins temporarily store stormwater 
                  and release it slowly. Retention basins are typically deeper with permanent water, 
                  while detention basins are designed to fill during storms and drain between events. 
                  Both serve important stormwater management functions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need SFWMD permits for basin construction?</h3>
                <p className={styles.faqAnswer}>
                  Yes, retention and detention basin construction typically requires SFWMD 
                  environmental resource permits for land disturbance and stormwater management. 
                  Permits ensure compliance with water management district requirements and may 
                  require specific design features. We help identify and coordinate all required 
                  permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does basin construction cost?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction costs vary based on basin size, depth, overflow structures, and 
                  regulatory requirements. Typical residential developments range from $75,000 to 
                  $200,000, while large-scale commercial or subdivision projects can range from 
                  $200,000 to $500,000+ depending on scope. Factors affecting cost include excavation 
                  volume, overflow structure complexity, and erosion control requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep do retention and detention basins need to be?</h3>
                <p className={styles.faqAnswer}>
                  Basin depths vary based on design requirements for storage volume and stormwater 
                  management. Retention basins typically require deeper excavation to maintain 
                  permanent water levels, while detention basins may be shallower with more storage 
                  volume. Depths are specified in engineering designs based on watershed 
                  characteristics and regulatory requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does basin construction take?</h3>
                <p className={styles.faqAnswer}>
                  Basin construction timelines vary based on basin size, depth, and regulatory 
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
              We coordinate retention and detention basin construction across all of South Florida. 
              Select your location to learn more about stormwater management services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/drainage-stormwater-solutions/retention-detention-basins/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/retention-detention-basins/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/retention-detention-basins/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/retention-detention-basins/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Drainage and Stormwater Solutions
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Stormwater Basin?"
        description="Get a free quote for your retention or detention basin construction. We'll coordinate licensed contractors with heavy equipment to design and construct stormwater basins that meet regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

