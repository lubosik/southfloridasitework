import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Clearing & Lot Preparation | South Florida',
  description: 'Professional land clearing and lot preparation services across South Florida. Vegetation clearing, stump removal, grubbing, and site cleanup.',
  openGraph: {
    title: 'Land Clearing & Lot Preparation | South Florida',
    description: 'Professional land clearing and lot preparation services across South Florida. Vegetation clearing, stump removal, grubbing.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/`,
  },
}

export default function LandClearingLotPreparationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Land Clearing and Lot Preparation</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Complete land clearing and lot preparation services for construction projects across 
                South Florida. We coordinate licensed contractors to remove vegetation, stumps, and 
                debris, preparing your site for development.
              </p>
              <p className={styles.description}>
                From initial vegetation clearing to final site cleanup, our network of licensed 
                contractors delivers comprehensive lot preparation services. We coordinate clearing, 
                grubbing, stump removal, and rough grading to prepare your site for building 
                construction.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('land-clearing-lot-preparation')}
                alt="Land clearing and lot preparation services in South Florida"
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
              Our land clearing and lot preparation services serve developers, custom home builders, 
              general contractors, and property owners who need to prepare raw land or overgrown 
              properties for construction.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision, building a custom home on a wooded 
              lot, or preparing a commercial site, we coordinate contractors with the right equipment 
              and expertise to clear your site efficiently and safely.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Land clearing projects typically start around <strong>$25,000</strong> for residential 
                lots and can range from $50,000 to $200,000+ for large commercial sites, subdivisions, 
                or heavily wooded properties requiring extensive clearing and debris removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized land clearing and lot preparation services:
            </p>
          </div>
          <div className={styles.subServicesGrid}>
            <a href="/services/land-clearing-lot-preparation/vegetation-tree-clearing/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Vegetation and Tree Clearing</h3>
              <p className={styles.subServiceDescription}>
                Removal of trees, shrubs, and vegetation to prepare sites for construction
              </p>
            </a>
            <a href="/services/land-clearing-lot-preparation/stump-removal-grubbing/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Stump Removal and Grubbing</h3>
              <p className={styles.subServiceDescription}>
                Complete removal of tree stumps and root systems
              </p>
            </a>
            <a href="/services/land-clearing-lot-preparation/debris-hauling-site-cleanup/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Debris Hauling and Site Cleanup</h3>
              <p className={styles.subServiceDescription}>
                Removal and disposal of cleared vegetation and debris
              </p>
            </a>
            <a href="/services/land-clearing-lot-preparation/rough-grading-after-clearing/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Rough Grading After Clearing</h3>
              <p className={styles.subServiceDescription}>
                Initial rough grading to establish site elevations after clearing
              </p>
            </a>
            <a href="/services/land-clearing-lot-preparation/demolition-coordination/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Demolition Coordination</h3>
              <p className={styles.subServiceDescription}>
                Coordination with demolition contractors for structure removal
              </p>
            </a>
            <a href="/services/land-clearing-lot-preparation/site-access-preparation/" className={styles.subServiceCard}>
              <h3 className={styles.subServiceTitle}>Site Access Preparation</h3>
              <p className={styles.subServiceDescription}>
                Clearing and preparation of access roads and staging areas
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Land Clearing Considerations</h2>
            <p className={styles.text}>
              Land clearing in South Florida requires attention to local regulations and environmental 
              considerations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Protected Species:</strong> South Florida is home to protected plant and animal 
                species. Clearing may require environmental surveys and permits to ensure compliance 
                with state and federal regulations.
              </li>
              <li>
                <strong>Wetland Protection:</strong> Properties with wetlands require special permits 
                and may have restrictions on clearing activities. SFWMD and county environmental 
                departments regulate wetland impacts.
              </li>
              <li>
                <strong>Tree Protection Ordinances:</strong> Many South Florida municipalities have 
                tree protection ordinances that require permits for removing trees above certain sizes 
                or species. We help coordinate required permits.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Proper disposal of cleared vegetation and debris 
                must comply with local regulations. Some materials may be recycled or mulched, while 
                others require disposal at approved facilities.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion. 
                Temporary erosion control measures may be required until permanent drainage and 
                stabilization systems are installed.
              </li>
              <li>
                <strong>Fire Safety:</strong> In some areas, cleared vegetation may need to be 
                removed promptly to reduce fire risk, especially during dry seasons.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Land Clearing Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your land clearing project is completed efficiently 
              and in compliance with all regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, 
                and structures to be removed, and identify any environmental concerns or permit 
                requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for tree 
                removal, land clearing, or environmental impacts, and coordinate with local 
                jurisdictions and regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, mulchers) and experience for 
                your specific clearing needs.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree 
                removal, stump removal, and grubbing according to project specifications and permit 
                conditions.
              </li>
              <li>
                <strong>Debris Removal:</strong> All cleared vegetation, stumps, and debris are removed 
                from the site and disposed of or recycled according to local regulations.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors perform rough grading 
                and site cleanup to prepare for subsequent construction activities.
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
                <h3 className={styles.faqQuestion}>What is the difference between clearing and grubbing?</h3>
                <p className={styles.faqAnswer}>
                  Clearing refers to removing above-ground vegetation including trees and shrubs. 
                  Grubbing refers to removing below-ground root systems and stumps. Complete lot 
                  preparation typically includes both clearing and grubbing to ensure all organic 
                  material is removed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for land clearing?</h3>
                <p className={styles.faqAnswer}>
                  Yes, land clearing typically requires permits from local municipalities, especially 
                  for removing trees above certain sizes. Clearing near wetlands or involving protected 
                  species may require additional environmental permits from SFWMD or state agencies. We 
                  help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does land clearing cost?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing costs vary significantly based on vegetation density, tree sizes, and 
                  site access. Typical costs range from $2,000 to $10,000 per acre for light clearing 
                  to $10,000 to $30,000+ per acre for heavy clearing with large trees. We provide 
                  detailed quotes based on your specific site conditions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible. We coordinate 
                  with contractors to identify trees worth preserving and plan clearing activities to 
                  protect them. However, some trees may need to be removed due to construction 
                  requirements, disease, or safety concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clear Your Site?"
        description="Get a free quote for your land clearing or lot preparation project. We'll connect you with licensed contractors experienced in South Florida clearing requirements."
        showPhone={true}
      />
    </main>
  )
}

