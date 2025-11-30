import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Debris Hauling & Site Cleanup | South Florida',
  description: 'Removal and disposal of cleared vegetation, stumps, and debris across South Florida. Coordination of hauling to disposal sites or recycling facilities.',
  openGraph: {
    title: 'Debris Hauling & Site Cleanup | South Florida',
    description: 'Removal and disposal of cleared vegetation, stumps, and debris across South Florida.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/debris-hauling-site-cleanup/`,
  },
}

export default function DebrisHaulingSiteCleanupPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Debris Hauling and Site Cleanup</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Removal and disposal of cleared vegetation, stumps, and debris, including coordination 
                of hauling to appropriate disposal sites or recycling facilities across South Florida.
              </p>
              <p className={styles.description}>
                Proper debris hauling and site cleanup is essential for complete site preparation. Our 
                network of licensed contractors coordinates efficient debris removal and disposal that 
                complies with local regulations and prepares sites for construction.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/debris-hauling.jpg"
                alt="Debris hauling and site cleanup services in South Florida"
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
              Debris hauling and site cleanup services are essential for developers, general contractors, 
              property owners, and anyone who has completed land clearing and needs debris removed and 
              sites cleaned for construction.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or demolition work, 
              proper debris hauling and site cleanup prepares your site for construction. We coordinate 
              contractors and hauling services to efficiently remove debris and clean sites.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Debris hauling and site cleanup typically ranges from <strong>$10,000 to $40,000</strong> for 
                residential lots, and <strong>$40,000 to $150,000+</strong> for large commercial sites 
                or properties with extensive debris depending on debris volume, hauling distance, and 
                disposal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Debris Hauling and Site Cleanup Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Collection</h3>
                <p className={styles.serviceDescription}>
                  Collection and organization of cleared vegetation, stumps, roots, and other debris 
                  from sites. Debris collection ensures all materials are gathered and prepared for 
                  removal and disposal.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Sorting</h3>
                <p className={styles.serviceDescription}>
                  Sorting of debris materials for recycling, mulching, or disposal. Material sorting 
                  maximizes recycling opportunities and ensures proper disposal according to material 
                  types and local regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Hauling Operations</h3>
                <p className={styles.serviceDescription}>
                  Coordination of hauling operations using dump trucks, trailers, and specialized 
                  equipment to transport debris to disposal sites or recycling facilities. Hauling 
                  operations ensure efficient debris removal with proper scheduling and routing.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Recycling and Mulching</h3>
                <p className={styles.serviceDescription}>
                  Coordination of recycling and mulching services for suitable materials. Recycling 
                  and mulching reduce disposal costs and environmental impact while creating useful 
                  products from cleared vegetation.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Disposal Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at approved facilities for materials that cannot be recycled. 
                  Disposal coordination ensures compliance with local regulations and proper waste 
                  management.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Site Cleanup</h3>
                <p className={styles.serviceDescription}>
                  Final cleanup of sites to remove all remaining debris, materials, and waste. Final 
                  cleanup ensures sites are clean and ready for construction activities including 
                  grading and foundation work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Debris and Disposal Methods</h2>
            <p className={styles.text}>
              Different types of debris require different disposal methods:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Vegetation and Brush:</strong> Cleared vegetation and brush can often be 
                recycled or mulched for reuse. Mulching creates useful products while reducing disposal 
                costs and environmental impact.
              </li>
              <li>
                <strong>Tree Stumps and Roots:</strong> Large stumps and roots may require specialized 
                disposal or can be ground and recycled. Stump grinding creates mulch while reducing 
                disposal volume.
              </li>
              <li>
                <strong>Construction Debris:</strong> Construction debris from demolition or site 
                preparation may require disposal at approved facilities. Debris disposal ensures 
                compliance with local regulations.
              </li>
              <li>
                <strong>Organic Material:</strong> Organic material from clearing can often be composted 
                or recycled. Composting creates useful products while reducing disposal costs.
              </li>
              <li>
                <strong>Mixed Debris:</strong> Mixed debris requires sorting and appropriate disposal 
                methods. Material sorting ensures proper disposal and maximizes recycling opportunities.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Hazardous materials require specialized disposal 
                at approved facilities. Hazardous material disposal ensures compliance with environmental 
                regulations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Debris Disposal Considerations</h2>
            <p className={styles.text}>
              Debris hauling and site cleanup in South Florida requires attention to local regulations 
              and disposal requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Local Regulations:</strong> Debris disposal must comply with local regulations 
                including waste management ordinances and disposal facility requirements. Compliance 
                ensures proper waste management and avoids penalties.
              </li>
              <li>
                <strong>Recycling Opportunities:</strong> Many cleared materials can be recycled or 
                mulched, reducing disposal costs and environmental impact. Recycling opportunities 
                maximize resource recovery and minimize waste.
              </li>
              <li>
                <strong>Disposal Facility Access:</strong> Disposal facilities may have specific 
                requirements for materials and access. Facility coordination ensures proper disposal 
                and efficient operations.
              </li>
              <li>
                <strong>Hauling Distance:</strong> Hauling distance affects costs and efficiency. 
                Coordination of hauling routes and disposal facilities minimizes distance and costs.
              </li>
              <li>
                <strong>Volume Management:</strong> Large debris volumes require efficient hauling 
                operations and disposal coordination. Volume management ensures efficient removal and 
                cost control.
              </li>
              <li>
                <strong>Environmental Compliance:</strong> Debris disposal must comply with 
                environmental regulations including waste management and recycling requirements. 
                Compliance ensures proper waste management and environmental protection.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Debris Hauling and Cleanup Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your debris hauling and site cleanup is completed 
              efficiently and in compliance with all regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Debris Assessment:</strong> We assess your site to identify debris types, 
                volumes, and disposal requirements. Assessment determines hauling needs and disposal 
                methods.
              </li>
              <li>
                <strong>Material Sorting:</strong> Debris materials are sorted for recycling, mulching, 
                or disposal. Material sorting maximizes recycling opportunities and ensures proper 
                disposal.
              </li>
              <li>
                <strong>Disposal Coordination:</strong> We coordinate disposal at approved facilities 
                or recycling centers. Disposal coordination ensures compliance with regulations and 
                efficient operations.
              </li>
              <li>
                <strong>Contractor and Hauler Selection:</strong> We match your project with licensed 
                contractors and haulers who have the right equipment and experience for debris removal.
              </li>
              <li>
                <strong>Hauling Operations:</strong> Haulers transport debris to disposal sites or 
                recycling facilities using dump trucks and specialized equipment. Hauling operations 
                ensure efficient debris removal.
              </li>
              <li>
                <strong>Recycling and Disposal:</strong> Suitable materials are recycled or mulched, 
                while other materials are disposed of at approved facilities. Recycling and disposal 
                ensure proper waste management.
              </li>
              <li>
                <strong>Final Site Cleanup:</strong> Final cleanup removes all remaining debris and 
                prepares sites for construction. Final cleanup ensures sites are clean and ready for 
                development.
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
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and debris?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and debris are managed according to local regulations and material 
                  types. Many materials can be recycled or mulched for reuse, while others require 
                  disposal at approved facilities. We coordinate debris management to maximize recycling 
                  opportunities and ensure compliance with regulations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does debris hauling and cleanup cost?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup costs vary based on debris volume, hauling distance, and 
                  disposal requirements. Typical residential lots range from $10,000 to $40,000, while 
                  large commercial sites can range from $40,000 to $150,000+ depending on scope. Factors 
                  affecting cost include debris volume, hauling distance, and recycling opportunities.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can cleared vegetation be recycled or mulched?</h3>
                <p className={styles.faqAnswer}>
                  Yes, many cleared vegetation materials can be recycled or mulched for reuse. Mulching 
                  creates useful products while reducing disposal costs and environmental impact. We 
                  coordinate recycling and mulching services to maximize resource recovery and minimize 
                  waste.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for debris disposal?</h3>
                <p className={styles.faqAnswer}>
                  Debris disposal typically requires compliance with local waste management regulations 
                  and may require permits for large volumes or specific materials. We help identify and 
                  coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does debris hauling and cleanup take?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup timelines vary based on debris volume, hauling distance, 
                  and disposal requirements. Typical residential lots take 1-3 days, while large 
                  commercial sites may take 1-2 weeks depending on scope. Weather conditions and disposal 
                  facility access can affect timelines. We coordinate operations to complete projects 
                  efficiently.
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
              We coordinate debris hauling and site cleanup across all of South Florida. Select your 
              location to learn more about debris removal services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/service-areas/miami/land-clearing-lot-preparation/debris-hauling-site-cleanup/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/debris-hauling-site-cleanup/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/debris-hauling-site-cleanup/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/debris-hauling-site-cleanup/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Clean Up Your Site?"
        description="Get a free quote for your debris hauling and site cleanup project. We'll coordinate licensed contractors and haulers to efficiently remove debris and prepare your site for construction."
        showPhone={true}
      />
    </main>
  )
}

