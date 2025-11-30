import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Vegetation & Tree Clearing | South Florida',
  description: 'Professional vegetation and tree clearing services across South Florida. Selective and complete clearing for construction site preparation.',
  openGraph: {
    title: 'Vegetation & Tree Clearing | South Florida',
    description: 'Professional vegetation and tree clearing services for construction site preparation across South Florida.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/vegetation-tree-clearing/`,
  },
}

export default function VegetationTreeClearingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Vegetation and Tree Clearing</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Removal of trees, shrubs, and vegetation to prepare sites for construction across 
                South Florida. We coordinate licensed contractors to perform selective clearing to 
                preserve desirable trees when possible, or complete clearing for full site development.
              </p>
              <p className={styles.description}>
                Vegetation and tree clearing is the first step in preparing a site for construction. 
                Our network of licensed contractors has the equipment and expertise to clear sites 
                efficiently while complying with local tree protection ordinances and environmental 
                regulations.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('land-clearing-lot-preparation')}
                alt="Vegetation and tree clearing services in South Florida"
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
              Vegetation and tree clearing services are essential for developers, custom home builders, 
              general contractors, and property owners who need to prepare raw land or overgrown 
              properties for construction.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, building a custom home on a wooded 
              lot, or preparing a commercial site, vegetation and tree clearing prepares your site 
              for development. We coordinate contractors with the right equipment and expertise to 
              clear your site efficiently and safely.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Vegetation and tree clearing typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $200,000+</strong> for large commercial sites, 
                subdivisions, or heavily wooded properties depending on vegetation density, tree sizes, 
                and clearing scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Vegetation and Tree Clearing Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Assessment</h3>
                <p className={styles.serviceDescription}>
                  Evaluation of site vegetation, trees, and clearing requirements. Assessment 
                  identifies trees to be removed or preserved, vegetation density, and any 
                  environmental concerns or permit requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Selective Clearing</h3>
                <p className={styles.serviceDescription}>
                  Selective removal of vegetation and trees while preserving desirable trees when 
                  possible. Selective clearing maintains site aesthetics and may reduce costs while 
                  preparing areas for construction.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Complete Clearing</h3>
                <p className={styles.serviceDescription}>
                  Complete removal of all vegetation and trees for full site development. Complete 
                  clearing prepares entire sites for construction and ensures no vegetation 
                  interferes with development.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Tree Removal</h3>
                <p className={styles.serviceDescription}>
                  Professional removal of trees using appropriate equipment and techniques. Tree 
                  removal includes felling, cutting, and preparation for stump removal, with 
                  attention to safety and site protection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Shrub and Vegetation Removal</h3>
                <p className={styles.serviceDescription}>
                  Removal of shrubs, underbrush, and ground vegetation to prepare sites for 
                  construction. Vegetation removal clears sites and prepares areas for grading and 
                  construction activities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Preparation</h3>
                <p className={styles.serviceDescription}>
                  Preparation of cleared sites for subsequent construction activities. Site 
                  preparation includes debris removal, access road preparation, and coordination 
                  with grading and construction activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Tree Clearing Considerations</h2>
            <p className={styles.text}>
              Vegetation and tree clearing in South Florida requires attention to local regulations 
              and environmental considerations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Tree Protection Ordinances:</strong> Many South Florida municipalities have 
                tree protection ordinances that require permits for removing trees above certain sizes 
                or species. Permits ensure compliance with local regulations and may require tree 
                replacement or mitigation.
              </li>
              <li>
                <strong>Protected Species:</strong> South Florida is home to protected plant and 
                animal species. Clearing may require environmental surveys and permits to ensure 
                compliance with state and federal regulations protecting endangered species.
              </li>
              <li>
                <strong>Wetland Protection:</strong> Properties with wetlands require special permits 
                and may have restrictions on clearing activities. SFWMD and county environmental 
                departments regulate wetland impacts and may require mitigation.
              </li>
              <li>
                <strong>Selective Preservation:</strong> Selective clearing can preserve desirable 
                trees when possible, maintaining site aesthetics and reducing costs. Tree preservation 
                requires careful planning and coordination with construction activities.
              </li>
              <li>
                <strong>Debris Management:</strong> Proper management of cleared vegetation and debris 
                must comply with local regulations. Some materials may be recycled or mulched, while 
                others require disposal at approved facilities.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion. 
                Temporary erosion control measures may be required until permanent drainage and 
                stabilization systems are installed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Vegetation and Tree Clearing Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your vegetation and tree clearing project is completed 
              efficiently and in compliance with all regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, 
                and clearing requirements. Assessment includes reviewing site conditions, identifying 
                trees to be removed or preserved, and determining environmental concerns.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for tree 
                removal, land clearing, or environmental impacts, and coordinate with local 
                jurisdictions and regulatory agencies. Permits ensure compliance with regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, mulchers, tree removal equipment) 
                and experience for your specific clearing needs.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree 
                removal, and site preparation according to project specifications and permit 
                conditions. Clearing prepares sites for subsequent construction activities.
              </li>
              <li>
                <strong>Tree Preservation:</strong> When selective clearing is specified, contractors 
                carefully preserve desirable trees and protect them during clearing activities. Tree 
                preservation maintains site aesthetics and reduces costs.
              </li>
              <li>
                <strong>Debris Management:</strong> All cleared vegetation and debris are managed 
                according to local regulations. Debris may be recycled, mulched, or disposed of at 
                approved facilities.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors prepare sites for 
                subsequent construction activities including access road preparation and coordination 
                with grading operations.
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
                <h3 className={styles.faqQuestion}>Do I need permits for tree clearing?</h3>
                <p className={styles.faqAnswer}>
                  Yes, tree clearing typically requires permits from local municipalities, especially 
                  for removing trees above certain sizes or species. Many South Florida cities have 
                  tree protection ordinances that require permits. Clearing near wetlands or involving 
                  protected species may require additional environmental permits. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does vegetation and tree clearing cost?</h3>
                <p className={styles.faqAnswer}>
                  Vegetation and tree clearing costs vary significantly based on vegetation density, 
                  tree sizes, and site access. Typical costs range from $2,000 to $10,000 per acre 
                  for light clearing to $10,000 to $30,000+ per acre for heavy clearing with large 
                  trees. Residential lots typically range from $15,000 to $50,000, while large 
                  commercial sites can range from $50,000 to $200,000+ depending on scope.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible. We coordinate 
                  with contractors to identify trees worth preserving and plan clearing activities to 
                  protect them. However, some trees may need to be removed due to construction 
                  requirements, disease, or safety concerns. Tree preservation requires careful planning 
                  and coordination.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and trees?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and trees are managed according to local regulations. Some 
                  materials may be recycled or mulched for reuse, while others require disposal at 
                  approved facilities. We coordinate debris management to ensure compliance with 
                  regulations and minimize costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does vegetation and tree clearing take?</h3>
                <p className={styles.faqAnswer}>
                  Vegetation and tree clearing timelines vary based on site size, vegetation density, 
                  and clearing scope. Typical residential lots take 1-3 days, while large commercial 
                  sites or subdivisions may take 1-2 weeks depending on scope. Weather conditions 
                  and permit processing can affect timelines. We coordinate with contractors to complete 
                  projects efficiently.
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
              We coordinate vegetation and tree clearing across all of South Florida. Select your 
              location to learn more about clearing services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-clearing-lot-preparation/vegetation-tree-clearing/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/vegetation-tree-clearing/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/vegetation-tree-clearing/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/vegetation-tree-clearing/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Clear Your Site?"
        description="Get a free quote for your vegetation and tree clearing project. We'll coordinate licensed contractors with the right equipment to clear your site efficiently and safely."
        showPhone={true}
      />
    </main>
  )
}

