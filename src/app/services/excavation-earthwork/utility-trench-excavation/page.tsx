import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Utility Trench Excavation | South Florida',
  description: 'Precision utility trench excavation for water, sewer, electrical, and telecommunications across South Florida. Proper depth and code compliance.',
  openGraph: {
    title: 'Utility Trench Excavation | South Florida',
    description: 'Precision utility trench excavation for water, sewer, electrical, and telecommunications utilities across South Florida.',
    url: `${siteConfig.url}/services/excavation-earthwork/utility-trench-excavation/`,
  },
}

export default function UtilityTrenchExcavationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Utility Trench Excavation</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Precision trenching for utilities including water, sewer, electrical, 
                telecommunications, and gas lines across South Florida. We coordinate licensed 
                contractors to excavate utility trenches with proper depth, width, and slope 
                requirements for utility installation and code compliance.
              </p>
              <p className={styles.description}>
                Utility trench excavation requires precision and coordination with utility companies 
                and building departments. Our network of licensed contractors has the equipment and 
                expertise to excavate utility trenches to exact specifications while protecting 
                existing utilities.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/utility-trench.jpg"
                alt="Utility trench excavation services in South Florida"
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
              Utility trench excavation services are essential for general contractors, developers, 
              utility companies, infrastructure projects, and anyone installing or upgrading utility 
              systems that require underground trenching.
            </p>
            <p className={styles.text}>
              Whether you&apos;re installing new utilities, upgrading existing systems, or connecting 
              to municipal utility lines, proper trench excavation is critical for utility installation. 
              We coordinate contractors with the precision equipment and expertise to excavate utility 
              trenches to exact specifications.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Utility trench excavation typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential utility connections, and <strong>$50,000 to $200,000+</strong> for commercial 
                or infrastructure projects depending on trench length, depth, utility type, and site 
                conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Utility Trench Excavation Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Utility Location and Marking</h3>
                <p className={styles.serviceDescription}>
                  Coordination with utility companies to locate and mark existing underground utilities 
                  before excavation. Utility location prevents damage to existing utilities and ensures 
                  safe excavation operations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Precision Trenching</h3>
                <p className={styles.serviceDescription}>
                  Excavation of trenches to exact depths and widths specified for utility installation. 
                  Precision trenching ensures proper utility placement, with careful attention to depth 
                  control and trench width for utility clearance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Depth and Slope Control</h3>
                <p className={styles.serviceDescription}>
                  Excavation to proper depths and slopes required for utility installation and code 
                  compliance. Depth requirements vary by utility type and local codes, with proper 
                  slopes for drainage where applicable.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Trench Bedding Preparation</h3>
                <p className={styles.serviceDescription}>
                  Preparation of trench beds with proper bedding material for utility placement. Bedding 
                  preparation ensures stable utility support and proper drainage, with material selection 
                  based on utility type and soil conditions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Safety and Shoring</h3>
                <p className={styles.serviceDescription}>
                  Installation of proper shoring, sloping, or benching for deep trenches to prevent 
                  cave-ins and ensure worker safety per OSHA requirements. Safety measures protect workers 
                  and prevent trench collapse.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
                <p className={styles.serviceDescription}>
                  Coordination of backfill operations after utility installation, with proper compaction 
                  to support utilities and prevent settlement. Backfill ensures proper utility support 
                  and surface restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Utility Types and Requirements</h2>
            <p className={styles.text}>
              Different utility types have specific trenching requirements in South Florida:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Water Lines:</strong> Water line trenches typically require depths of 18-24 
                inches minimum, with deeper depths in areas subject to freezing (rare in South Florida). 
                Trenches must provide proper support and protection for water lines.
              </li>
              <li>
                <strong>Sewer Lines:</strong> Sewer line trenches require proper depth and slope for 
                gravity flow, typically 1/4 inch per foot minimum slope. Depths vary based on connection 
                points and municipal requirements, with proper bedding for pipe support.
              </li>
              <li>
                <strong>Electrical Lines:</strong> Electrical trenching requires specific depths based 
                on voltage and local electrical codes, typically 18-24 inches for residential and 
                deeper for commercial. Trenches must accommodate conduit and provide proper clearance.
              </li>
              <li>
                <strong>Telecommunications:</strong> Telecommunications trenching requirements vary by 
                provider and service type, typically 18-24 inches depth. Trenches must protect cables 
                and provide access for future maintenance.
              </li>
              <li>
                <strong>Gas Lines:</strong> Gas line trenching requires specific depths and safety 
                measures per gas company and code requirements, typically 18-24 inches minimum. Trenches 
                must provide proper protection and comply with gas company specifications.
              </li>
              <li>
                <strong>Stormwater and Drainage:</strong> Stormwater trenching requires proper depth 
                and slope for drainage flow, with connections to stormwater systems. Trenches must 
                accommodate pipe sizes and provide proper drainage slopes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Utility Trench Considerations</h2>
            <p className={styles.text}>
              Utility trench excavation in South Florida requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table may require 
                dewatering for deep trenches. Water management ensures dry working conditions and 
                prevents trench collapse.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Excavation requires careful coordination with 
                utility companies to locate and protect existing utilities. Florida law requires utility 
                location before excavation to prevent damage.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Utility trenching typically requires permits from 
                county building departments and utility companies. Permits ensure compliance with codes 
                and allow for required inspections.
              </li>
              <li>
                <strong>Traffic and Access:</strong> Utility trenches in roadways or high-traffic areas 
                require traffic control and coordination with municipalities. Access considerations 
                affect trenching methods and timelines.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil characteristics 
                that affect trenching methods and stability. Soil conditions determine shoring 
                requirements and trenching techniques.
              </li>
              <li>
                <strong>Safety Requirements:</strong> Deep trenches require proper shoring, sloping, or 
                benching per OSHA requirements. Safety measures protect workers and prevent trench collapse, 
                especially in unstable soils.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Utility Trench Excavation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your utility trench excavation is completed safely and 
              meets all specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies to locate and 
                mark all existing underground utilities before excavation begins. Utility location 
                prevents damage and ensures safe excavation.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for utility 
                trenching and coordinate with building departments and utility companies. Permits ensure 
                compliance with codes and regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (trenchers, excavators) and experience for utility trench 
                excavation.
              </li>
              <li>
                <strong>Precision Trenching:</strong> Contractors perform trench excavation to exact 
                depths and widths, with proper safety measures. Trenching prepares areas for utility 
                installation with proper depth control.
              </li>
              <li>
                <strong>Trench Bedding:</strong> Trench beds are prepared with proper bedding material 
                for utility placement. Bedding ensures stable utility support and proper drainage.
              </li>
              <li>
                <strong>Utility Installation:</strong> Utilities are installed in prepared trenches by 
                utility contractors or specialized installers. Installation follows utility company 
                specifications and code requirements.
              </li>
              <li>
                <strong>Backfill and Restoration:</strong> Trenches are backfilled with proper 
                compaction and surface restoration. Backfill ensures proper utility support and restores 
                surface conditions.
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
                <h3 className={styles.faqQuestion}>How deep do utility trenches need to be?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench depths vary by utility type and local codes. Typical minimum depths 
                  are 18-24 inches for water, sewer, electrical, and telecommunications lines, with 
                  deeper depths for commercial or high-voltage applications. Sewer lines require 
                  proper slope for gravity flow. We coordinate with utility companies and building 
                  departments to determine exact depth requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need to locate utilities before trenching?</h3>
                <p className={styles.faqAnswer}>
                  Yes, Florida law requires utility location before excavation to prevent damage to 
                  existing utilities. We coordinate with utility companies through the Sunshine 811 
                  system to locate and mark all underground utilities. Utility location is required 
                  and protects both existing utilities and excavation workers.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does utility trench excavation cost?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench excavation costs vary based on trench length, depth, utility type, 
                  and site conditions. Typical costs range from $10-30 per linear foot for simple 
                  trenches to $50-100+ per linear foot for complex projects with difficult access, 
                  deep depths, or special requirements. Factors affecting cost include trench depth, 
                  soil conditions, and utility coordination requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits do I need for utility trenching?</h3>
                <p className={styles.faqAnswer}>
                  Utility trenching typically requires building permits from county building departments 
                  and may require permits from utility companies. Trenches in roadways require 
                  additional permits from municipalities. We help identify and coordinate all required 
                  permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does utility trench excavation take?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench excavation timelines vary based on trench length, depth, and site 
                  conditions. Typical residential connections take 1-3 days, while commercial or 
                  infrastructure projects may take 1-2 weeks depending on scope. Weather conditions 
                  and utility coordination can affect timelines. We coordinate with contractors to 
                  complete projects efficiently.
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
              We coordinate utility trench excavation across all of South Florida. Select your 
              location to learn more about utility services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/excavation-earthwork/utility-trench-excavation/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/excavation-earthwork/utility-trench-excavation/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/excavation-earthwork/utility-trench-excavation/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/excavation-earthwork/utility-trench-excavation/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Utility Trench Project?"
        description="Get a free quote for your utility trench excavation. We'll coordinate licensed contractors with precision equipment to excavate utility trenches to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

