import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Cut and Fill and Mass Earthmoving | South Florida',
  description: 'Large-scale earthmoving and cut/fill operations for site balancing across South Florida. Mass earthmoving services for commercial and residential projects.',
  openGraph: {
    title: 'Cut and Fill and Mass Earthmoving | South Florida',
    description: 'Large-scale earthmoving and cut/fill operations for site balancing across South Florida.',
    url: `${siteConfig.url}/services/site-work-site-development/cut-fill-mass-earthmoving/`,
  },
}

export default function CutFillMassEarthmovingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cut and Fill and Mass Earthmoving</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Large-scale earthmoving and cut/fill operations for site balancing across South Florida. 
                We coordinate licensed contractors with heavy equipment to perform mass earthmoving for 
                commercial and residential projects.
              </p>
              <p className={styles.description}>
                Cut and fill operations involve moving earth from high areas (cut) to low areas (fill) 
                to achieve proper site elevations and drainage. Mass earthmoving requires specialized 
                equipment and expertise to efficiently balance sites while meeting engineering 
                specifications and regulatory requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src={getServiceImagePath('excavation-earthwork')}
                alt="Cut and fill and mass earthmoving services in South Florida"
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
              Our cut and fill and mass earthmoving services serve developers, general contractors, 
              commercial property owners, and custom home builders who need large-scale earthmoving 
              operations for site balancing and elevation adjustments.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a large commercial site, preparing a subdivision, or 
              need significant elevation changes for a custom home, we coordinate contractors with 
              the heavy equipment and expertise to handle mass earthmoving efficiently.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Cut and fill and mass earthmoving projects typically range from <strong>$50,000</strong> 
                for moderate site balancing to $500,000+ for large-scale earthmoving operations 
                requiring extensive cut and fill volumes and specialized equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Cut and Fill and Mass Earthmoving Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Balancing</h3>
              <p className={styles.serviceDescription}>
                Cut and fill operations to balance site elevations, moving earth from high areas to 
                low areas to achieve proper grades and drainage slopes. Coordination of mass earthmoving 
                to minimize import/export of materials.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Grading</h3>
              <p className={styles.serviceDescription}>
                Large-scale grading operations using heavy equipment to achieve site-wide elevations 
                and grades. Includes rough grading for entire sites and fine grading for specific areas 
                requiring precise elevations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cut Operations</h3>
              <p className={styles.serviceDescription}>
                Excavation and removal of earth from high areas to achieve required elevations. 
                Includes proper handling of cut materials for use as fill or export, with attention 
                to soil quality and compaction requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Operations</h3>
              <p className={styles.serviceDescription}>
                Placement and compaction of fill materials in low areas to achieve required elevations. 
                Includes proper soil selection, placement, and compaction to meet engineering 
                specifications and ensure stability.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Import/Export Coordination</h3>
              <p className={styles.serviceDescription}>
                Coordination of soil import when additional fill is needed or export when excess cut 
                materials must be removed. Includes sourcing quality fill materials and proper disposal 
                of excess materials.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Compaction and Testing</h3>
              <p className={styles.serviceDescription}>
                Proper compaction of fill materials using heavy equipment and compaction testing to 
                ensure fill meets engineering specifications. Includes density testing and quality 
                control to ensure long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Cut and Fill Considerations</h2>
            <p className={styles.text}>
              Cut and fill and mass earthmoving operations require specialized planning and execution:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Soil Analysis:</strong> Understanding soil types and properties is critical for 
                cut and fill operations. Different soils have different compaction characteristics and 
                may require special handling or treatment.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> Cut and fill operations must meet engineering 
                specifications for elevations, slopes, and compaction. Our contractors work closely with 
                engineers to ensure compliance.
              </li>
              <li>
                <strong>Drainage Planning:</strong> Proper cut and fill operations must account for 
                drainage requirements, ensuring water flows away from structures and toward appropriate 
                drainage systems.
              </li>
              <li>
                <strong>Equipment Selection:</strong> Mass earthmoving requires appropriate heavy equipment 
                including excavators, bulldozers, scrapers, and compactors. Our contractors have the 
                right equipment for efficient operations.
              </li>
              <li>
                <strong>Material Management:</strong> Efficient cut and fill operations minimize the need 
                for import or export of materials, reducing costs and environmental impact. Our 
                contractors plan operations to maximize on-site material use.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> Large-scale earthmoving may require permits from 
                SFWMD, county agencies, or local municipalities. We coordinate permit applications 
                and ensure compliance throughout operations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Cut and Fill Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures efficient and effective cut and fill operations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Analysis:</strong> We review engineering drawings, survey data, and site 
                conditions to understand cut and fill requirements and develop an efficient earthmoving 
                plan that minimizes import/export.
              </li>
              <li>
                <strong>Soil Testing:</strong> We coordinate soil testing to understand soil properties 
                and determine appropriate handling, compaction, and treatment requirements for cut and 
                fill materials.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify and coordinate required permits 
                including SFWMD environmental resource permits, county grading permits, and local 
                approvals for large-scale earthmoving operations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the heavy equipment and expertise to handle mass earthmoving efficiently and 
                meet engineering specifications.
              </li>
              <li>
                <strong>Execution:</strong> Contractors perform cut and fill operations following the 
                earthmoving plan, with careful attention to elevations, compaction, and quality control 
                to ensure long-term stability.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress and coordinate testing to ensure 
                fill materials meet compaction requirements and engineering specifications, with particular 
                attention to areas supporting structures.
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
                <h3 className={styles.faqQuestion}>What is cut and fill in construction?</h3>
                <p className={styles.faqAnswer}>
                  Cut and fill is the process of moving earth from high areas (cut) to low areas (fill) 
                  to achieve proper site elevations and drainage. It&apos;s used to balance sites and 
                  create level building pads or proper slopes for drainage.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does cut and fill cost?</h3>
                <p className={styles.faqAnswer}>
                  Cut and fill costs vary based on the volume of earth moved, site conditions, and 
                  equipment requirements. Projects typically range from $50,000 for moderate operations 
                  to $500,000+ for large-scale mass earthmoving.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What equipment is used for cut and fill?</h3>
                <p className={styles.faqAnswer}>
                  Cut and fill operations use heavy equipment including excavators, bulldozers, scrapers, 
                  and compactors. The specific equipment depends on the scale of operations, soil 
                  conditions, and site access.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle soil import or export?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate soil import when additional fill is needed or export when excess 
                  cut materials must be removed. We work to minimize import/export by maximizing on-site 
                  material use, reducing costs and environmental impact.
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
              We coordinate cut and fill and mass earthmoving across all of South Florida. Select your 
              location to learn more about earthmoving services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/site-work-site-development/cut-fill-mass-earthmoving/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/site-work-site-development/cut-fill-mass-earthmoving/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/site-work-site-development/cut-fill-mass-earthmoving/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/site-work-site-development/cut-fill-mass-earthmoving/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Start Your Cut and Fill Project?"
        description="Get a free quote for your cut and fill or mass earthmoving project. We'll coordinate licensed contractors with heavy equipment to balance your site efficiently."
        showPhone={true}
      />
    </main>
  )
}

