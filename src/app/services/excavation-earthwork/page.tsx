import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Excavation & Earthwork | South Florida',
  description: 'Professional excavation and earthwork services across South Florida. Mass excavation, cut and fill, utility trenches, retention ponds, and fill import/export.',
  openGraph: {
    title: 'Excavation & Earthwork | South Florida',
    description: 'Professional excavation and earthwork services across South Florida. Mass excavation, cut and fill, utility trenches.',
    url: `${siteConfig.url}/services/excavation-earthwork/`,
  },
}

export default function ExcavationEarthworkPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Excavation and Earthwork</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Mass excavation, cut and fill operations, utility trenching, and earthmoving services 
                across South Florida. We coordinate licensed contractors with heavy equipment to handle 
                large-scale earthwork projects.
              </p>
              <p className={styles.description}>
                From mass excavation for commercial developments to precision utility trenching, our 
                network of licensed contractors delivers comprehensive earthwork solutions. We coordinate 
                projects involving cut and fill operations, retention pond excavation, foundation 
                preparation, and fill import/export coordination.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('excavation-earthwork')}
                alt="Excavation and earthwork services in South Florida"
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
              Our excavation and earthwork services serve general contractors, developers, custom 
              home builders, commercial property owners, and infrastructure projects that require 
              significant earthmoving and excavation work.
            </p>
            <p className={styles.text}>
              Whether you need mass excavation for a large development, utility trenching for 
              infrastructure, or cut and fill operations to balance site elevations, we coordinate 
              contractors with the right equipment and expertise for your project scope.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Excavation and earthwork projects typically start around <strong>$25,000</strong> for 
                residential foundation work and can range from $50,000 to $500,000+ for large-scale 
                commercial mass excavation, cut and fill operations, or infrastructure projects.
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
              Explore our specialized excavation and earthwork services:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/services/excavation-earthwork/mass-excavation-cut-fill/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Mass Excavation and Cut/Fill</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale excavation and earthmoving for commercial and residential developments
                </p>
              </a>
              <a href="/services/excavation-earthwork/foundation-footing-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Foundation and Footing Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Precision excavation for building foundations and footings
                </p>
              </a>
              <a href="/services/excavation-earthwork/utility-trench-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Utility Trench Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Trenching for water, sewer, electrical, and telecommunications utilities
                </p>
              </a>
              <a href="/services/excavation-earthwork/retention-detention-ponds/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Ponds</h3>
                <p className={styles.subServiceDescription}>
                  Excavation and construction of stormwater management ponds
                </p>
              </a>
              <a href="/services/excavation-earthwork/swales-drainage-features/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales and Drainage Features</h3>
                <p className={styles.subServiceDescription}>
                  Excavation of swales, ditches, and drainage features
                </p>
              </a>
              <a href="/services/excavation-earthwork/fill-import-export-hauling/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Fill Import, Export and Hauling</h3>
                <p className={styles.subServiceDescription}>
                  Coordination of fill material import, export, and hauling operations
                </p>
              </a>
            </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Excavation Considerations</h2>
            <p className={styles.text}>
              Excavation in South Florida presents unique challenges that require specialized 
              expertise and equipment:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table requires 
                dewatering systems for deep excavations. Proper dewatering prevents water intrusion 
                and ensures stable excavation walls.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil 
                characteristics including sand, limestone bedrock, and organic materials that 
                affect excavation techniques and equipment selection.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Excavations in flood zones must comply 
                with FEMA requirements and may require specific elevations and drainage features.
              </li>
              <li>
                <strong>Environmental Permits:</strong> Large-scale excavations may require SFWMD 
                environmental resource permits for land disturbance, especially near wetlands or 
                surface waters.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Excavation requires careful coordination 
                with utility companies to locate and protect existing utilities before digging.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep excavations require proper shoring, 
                sloping, or benching to prevent cave-ins and ensure worker safety per OSHA 
                requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Excavation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your excavation project is completed safely, 
              efficiently, and in compliance with all requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment and Planning:</strong> We review engineering drawings, 
                survey data, and site conditions to plan excavation sequences and identify 
                potential challenges.
              </li>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies to locate 
                and mark all underground utilities before excavation begins.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits and 
                coordinate with building departments, SFWMD, and other regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed 
                contractors who have the right equipment (excavators, bulldozers, haul trucks) 
                and experience for your specific needs.
              </li>
              <li>
                <strong>Excavation Execution:</strong> Contractors perform excavation with proper 
                safety measures, dewatering if needed, and precise depth control per specifications.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure excavations meet 
                depth, width, and slope specifications and that soil conditions are suitable for 
                intended use.
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
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding 
                  earth to lower elevations. Cut and fill operations balance site elevations by 
                  moving earth from high areas to low areas, minimizing the need to import or 
                  export material.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for excavation?</h3>
                <p className={styles.faqAnswer}>
                  Yes, excavation projects typically require building permits from county building 
                  departments. Large-scale excavations or those near wetlands may also require 
                  SFWMD environmental resource permits. We help identify and coordinate all 
                  required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs vary significantly based on volume, soil conditions, and 
                  site access. Typical costs range from $5-15 per cubic yard for simple excavation 
                  to $20-40+ per cubic yard for complex projects with dewatering, difficult access, 
                  or special handling requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What equipment is used for earthwork?</h3>
                <p className={styles.faqAnswer}>
                  Earthwork projects use various equipment including excavators (track and wheel), 
                  bulldozers, scrapers, compactors, and haul trucks. Equipment selection depends on 
                  project scope, soil conditions, and site access. Our contractors have the right 
                  equipment for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Excavation Project?"
        description="Get a free quote for your excavation or earthwork project. We'll connect you with licensed contractors with the right equipment for your needs."
        showPhone={true}
      />
    </main>
  )
}

