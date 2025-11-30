import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Demolition Coordination | South Florida',
  description: 'Coordination with demolition contractors for removal of existing structures across South Florida. Licensed, insured demolition partners.',
  openGraph: {
    title: 'Demolition Coordination | South Florida',
    description: 'Coordination with demolition contractors for removal of existing structures across South Florida.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/demolition-coordination/`,
  },
}

export default function DemolitionCoordinationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Demolition Coordination</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Coordination with demolition contractors for removal of existing structures, 
                preparing sites for new construction across South Florida.
              </p>
              <p className={styles.description}>
                Demolition coordination ensures proper removal of existing structures before 
                site work begins. Our network includes licensed, insured demolition contractors 
                who safely remove buildings, foundations, and structures to prepare sites for 
                new development.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/demolition-coordination.jpg"
                alt="Demolition coordination services in South Florida"
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
              Demolition coordination is essential for developers, general contractors, 
              property owners, and anyone who needs existing structures removed before site work 
              and new construction begins.
            </p>
            <p className={styles.text}>
              Whether you&apos;re removing an old building, foundation, or structure to make 
              way for new development, demolition coordination ensures proper removal and site 
              preparation. We coordinate with licensed demolition contractors who safely remove 
              structures and prepare sites for clearing, grading, and construction.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Demolition coordination typically ranges from <strong>$20,000 to $75,000</strong> for 
                residential structures, and <strong>$75,000 to $500,000+</strong> for large commercial 
                buildings or complex demolition projects depending on structure size, materials, and 
                disposal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Demolition Coordination Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Contractor Selection</h3>
                <p className={styles.serviceDescription}>
                  Selection of licensed, insured demolition contractors with appropriate 
                  certifications and experience. Contractor selection ensures proper demolition 
                  execution and compliance with regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of demolition permits and regulatory compliance. Permit 
                  coordination ensures proper authorization and compliance with local regulations 
                  including asbestos abatement and disposal requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Utility Disconnection</h3>
                <p className={styles.serviceDescription}>
                  Coordination of utility disconnection including water, sewer, electric, and 
                  gas services. Utility disconnection ensures safe demolition operations and 
                  prevents service interruptions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Asbestos and Hazardous Material Assessment</h3>
                <p className={styles.serviceDescription}>
                  Coordination of asbestos and hazardous material assessment before demolition. 
                  Assessment ensures proper handling and disposal of hazardous materials according 
                  to regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Scheduling</h3>
                <p className={styles.serviceDescription}>
                  Scheduling of demolition operations to coordinate with site work and construction 
                  timelines. Demolition scheduling ensures efficient project sequencing and minimizes 
                  delays.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Removal Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of debris removal and disposal after demolition. Debris removal 
                  coordination ensures proper disposal and site cleanup for subsequent site work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Demolition Projects</h2>
            <p className={styles.text}>
              Demolition coordination covers various types of structures and projects:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Residential Structures:</strong> Removal of single-family homes, duplexes, 
                and residential buildings. Residential demolition prepares sites for new home 
                construction or redevelopment.
              </li>
              <li>
                <strong>Commercial Buildings:</strong> Removal of retail, office, and commercial 
                structures. Commercial demolition prepares sites for new commercial development or 
                redevelopment.
              </li>
              <li>
                <strong>Foundations and Slabs:</strong> Removal of existing foundations, slabs, and 
                concrete structures. Foundation removal prepares sites for new construction and 
                ensures proper site preparation.
              </li>
              <li>
                <strong>Partial Demolition:</strong> Selective removal of portions of structures 
                for renovation or expansion. Partial demolition preserves existing structures while 
                removing specific components.
              </li>
              <li>
                <strong>Interior Demolition:</strong> Removal of interior components including 
                walls, fixtures, and finishes. Interior demolition prepares structures for renovation 
                or redevelopment.
              </li>
              <li>
                <strong>Site Structures:</strong> Removal of sheds, garages, pools, and other site 
                structures. Site structure removal prepares properties for new development or 
                redevelopment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Demolition Considerations</h2>
            <p className={styles.text}>
              Demolition coordination in South Florida requires attention to local regulations and 
              environmental considerations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Permit Requirements:</strong> Demolition typically requires permits from 
                local building departments and may require environmental assessments. Permit 
                coordination ensures compliance with regulations.
              </li>
              <li>
                <strong>Asbestos Regulations:</strong> Structures built before 1980 may contain 
                asbestos requiring proper assessment and abatement. Asbestos compliance ensures 
                proper handling and disposal.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Structures may contain lead paint, mold, or 
                other hazardous materials requiring proper handling. Hazardous material management 
                ensures proper disposal and environmental protection.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Utility disconnection must be coordinated 
                with service providers to ensure safe demolition operations. Utility coordination 
                prevents service interruptions and safety hazards.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Demolition debris must be disposed of at approved 
                facilities according to material types. Debris disposal coordination ensures proper 
                waste management and compliance.
              </li>
              <li>
                <strong>Neighbor Notification:</strong> Demolition operations may require neighbor 
                notification and coordination. Notification ensures proper communication and minimizes 
                disruptions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Demolition Coordination Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your demolition project is completed safely and 
              efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Assessment:</strong> We assess your demolition needs including 
                structure type, size, and materials. Assessment determines demolition requirements 
                and establishes project scope.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We coordinate all required permits and 
                regulatory compliance including asbestos assessment and utility disconnection. 
                Permit coordination ensures proper authorization.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed, 
                insured demolition contractors who have the right equipment and experience for 
                your specific demolition needs.
              </li>
              <li>
                <strong>Utility Disconnection:</strong> Utilities are disconnected including water, 
                sewer, electric, and gas services. Utility disconnection ensures safe demolition 
                operations.
              </li>
              <li>
                <strong>Demolition Execution:</strong> Licensed contractors perform demolition 
                operations using appropriate methods and equipment. Demolition execution ensures 
                safe removal of structures.
              </li>
              <li>
                <strong>Debris Removal:</strong> Demolition debris is removed and disposed of at 
                approved facilities. Debris removal ensures proper waste management and site cleanup.
              </li>
              <li>
                <strong>Site Preparation:</strong> Sites are prepared for subsequent site work 
                including clearing, grading, and construction. Site preparation ensures efficient 
                project sequencing.
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
                <h3 className={styles.faqQuestion}>What permits are required for demolition?</h3>
                <p className={styles.faqAnswer}>
                  Demolition typically requires permits from local building departments and may 
                  require environmental assessments, asbestos surveys, and utility disconnection 
                  approvals. Permit requirements vary by jurisdiction and structure type. We help 
                  identify and coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does demolition coordination cost?</h3>
                <p className={styles.faqAnswer}>
                  Demolition coordination costs vary based on structure size, materials, and disposal 
                  requirements. Typical residential structures range from $20,000 to $75,000, while 
                  large commercial buildings can range from $75,000 to $500,000+ depending on scope. 
                  Factors affecting cost include structure size, materials, asbestos presence, and 
                  disposal requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need asbestos testing before demolition?</h3>
                <p className={styles.faqAnswer}>
                  Structures built before 1980 typically require asbestos assessment before demolition. 
                  Asbestos testing identifies hazardous materials and ensures proper handling and 
                  disposal according to regulations. We coordinate asbestos assessment and abatement 
                  as needed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does demolition take?</h3>
                <p className={styles.faqAnswer}>
                  Demolition timelines vary based on structure size, complexity, and permit processing. 
                  Typical residential structures take 1-3 days for demolition, while large commercial 
                  buildings may take 1-4 weeks depending on scope. Permit processing, utility 
                  disconnection, and debris removal can affect timelines. We coordinate operations 
                  to complete projects efficiently.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to demolition debris?</h3>
                <p className={styles.faqAnswer}>
                  Demolition debris is sorted and disposed of at approved facilities according to 
                  material types. Many materials can be recycled including concrete, metal, and 
                  wood, while other materials require disposal at approved facilities. We coordinate 
                  debris removal and disposal to ensure proper waste management and compliance.
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
              We coordinate demolition services across all of South Florida. Select your 
              location to learn more about demolition coordination in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-clearing-lot-preparation/demolition-coordination/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/demolition-coordination/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/demolition-coordination/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/demolition-coordination/florida-keys/" className={styles.locationCard}>
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
        title="Ready to Coordinate Demolition?"
        description="Get a free quote for your demolition coordination project. We'll coordinate licensed, insured demolition contractors to safely remove structures and prepare your site for new construction."
        showPhone={true}
      />
    </main>
  )
}

