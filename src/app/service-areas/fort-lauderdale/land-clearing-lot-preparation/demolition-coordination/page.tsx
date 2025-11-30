import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Demolition Coordination in Fort Lauderdale, FL | Broward County',
  description: 'Coordination with demolition contractors for removal of existing structures in Broward County. Licensed, insured demolition partners with building permits and asbestos compliance.',
  openGraph: {
    title: 'Demolition Coordination in Fort Lauderdale, FL | Broward County',
    description: 'Coordination with demolition contractors for removal of existing structures in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-clearing-lot-preparation/demolition-coordination/`,
  },
}

export default function FortLauderdaleDemolitionCoordinationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Demolition Coordination in Fort Lauderdale, FL"
        subtitle="Coordination with demolition contractors for removal of existing structures across Broward County, from Fort Lauderdale to Hollywood, Weston to Plantation, Coral Ridge to Victoria Park"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Demolition coordination services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Demolition coordination in Broward County is essential for developers, general contractors, 
              property owners, and anyone who needs existing structures removed before site work and new 
              construction begins across Broward County neighborhoods including Fort Lauderdale, Hollywood, 
              Weston, Plantation, Pembroke Pines, Coral Springs, Parkland, Davie, Victoria Park, Coral 
              Ridge, Harbor Beach, and throughout Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re removing an old building, foundation, or structure to make way for new 
              development, demolition coordination ensures proper removal and site preparation. We coordinate 
              with licensed demolition contractors who safely remove structures and prepare sites for clearing, 
              grading, and construction, with full compliance to Broward County Uniform Building Permit 
              Applications, Development & Environmental Review (DER), and Statement of Responsibilities 
              Regarding Asbestos (SRRA) requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Demolition coordination in Broward County typically ranges from <strong>$25,000 to $90,000</strong> for 
                residential structures, and <strong>$90,000 to $600,000+</strong> for large commercial 
                buildings or complex demolition projects depending on structure size, materials, disposal 
                requirements, and Broward County permit requirements. Projects requiring Development & 
                Environmental Review (DER) through ePermits OneStop may have additional permit processing 
                costs. Permits are valid for 180 days from the date of issuance.
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
                  Selection of licensed, insured demolition contractors with appropriate certifications 
                  and experience for Broward County projects. Contractor selection ensures proper 
                  demolition execution and compliance with Uniform Building Permit Applications and DER 
                  requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Uniform Building Permit Application</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Broward County Uniform Building Permit Applications (updated November 14, 
                  2025) for demolition projects. Building permits are required for all demolition work, with 
                  Development & Environmental Review (DER) through ePermits OneStop for applicable projects. 
                  All DER submittals are only accepted electronically. Permits are valid for 180 days from 
                  the date of issuance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Development & Environmental Review (DER)</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Broward County Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable building permits. DER ensures compliance with Broward County Land 
                  Development Code and Natural Resource Protection Code (Chapter 27). All DER submittals are 
                  only accepted electronically.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Statement of Responsibilities Regarding Asbestos (SRRA)</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Statement of Responsibilities Regarding Asbestos (SRRA) forms for all 
                  demolition projects in Broward County. SRRA forms must be submitted with the Uniform Building 
                  Permit Application to ensure proper handling and disposal of asbestos-containing materials, 
                  with compliance with Broward County requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Asbestos Survey and Abatement</h3>
                <p className={styles.serviceDescription}>
                  Coordination of asbestos surveys and abatement for all demolition projects in Broward County. 
                  An asbestos survey must be completed for all demolition projects, and Statement of 
                  Responsibilities Regarding Asbestos (SRRA) forms must be submitted with the Uniform Building 
                  Permit Application. Florida Department of Environmental Protection Notice of Renovation or 
                  Demolition forms may also be required.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Utility Disconnection</h3>
                <p className={styles.serviceDescription}>
                  Coordination of utility disconnection including water, sewer, electric, and gas services 
                  in Broward County. Utility disconnection ensures safe demolition operations and prevents 
                  service interruptions, with coordination through Broward County service providers.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Documentation</h3>
                <p className={styles.serviceDescription}>
                  Coordination of required demolition documentation including Uniform Building Permit Applications 
                  (updated November 14, 2025), Statement of Responsibilities Regarding Asbestos (SRRA) forms, 
                  and detailed drawings showing location and connections to be removed. Documentation ensures 
                  compliance with Broward County requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Scheduling</h3>
                <p className={styles.serviceDescription}>
                  Scheduling of demolition operations to coordinate with site work and construction 
                  timelines in Broward County. Demolition scheduling ensures efficient project 
                  sequencing and minimizes delays, with attention to permit processing times through 
                  ePermits OneStop.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Removal Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of debris removal and disposal after demolition according to Broward County 
                  waste management regulations. Debris removal coordination ensures proper disposal 
                  and site cleanup for subsequent site work, with compliance to construction and 
                  demolition debris requirements and Statement of Responsibilities Regarding Asbestos (SRRA) 
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Demolition Projects in Broward County</h2>
            <p className={styles.text}>
              Demolition coordination covers various types of structures and projects in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Commercial Demolition:</strong> Removal of retail, office, and commercial 
                structures. Commercial demolition requires Uniform Building Permit Applications and may require 
                Development & Environmental Review (DER) through ePermits OneStop. Commercial demolition 
                prepares sites for new commercial development or redevelopment.
              </li>
              <li>
                <strong>Residential Structures:</strong> Removal of single-family homes, duplexes, and 
                residential buildings. Residential demolition requires Uniform Building Permit Applications 
                and prepares sites for new home construction or redevelopment.
              </li>
              <li>
                <strong>Condominium Unit Demolition:</strong> Removal of condominium units for renovation or 
                redevelopment. Condominium unit demolition requires Uniform Building Permit Applications and 
                Statement of Responsibilities Regarding Asbestos (SRRA) forms.
              </li>
              <li>
                <strong>Foundations and Slabs:</strong> Removal of existing foundations, slabs, and 
                concrete structures. Foundation removal prepares sites for new construction and ensures 
                proper site preparation, with attention to Broward County permit requirements.
              </li>
              <li>
                <strong>Partial Demolition:</strong> Selective removal of portions of structures for 
                renovation or expansion. Partial demolition preserves existing structures while removing 
                specific components, with compliance to Broward County permit requirements.
              </li>
              <li>
                <strong>Interior Demolition:</strong> Removal of interior components including walls, 
                fixtures, and finishes. Interior demolition prepares structures for renovation or 
                redevelopment, with attention to Statement of Responsibilities Regarding Asbestos (SRRA) 
                requirements.
              </li>
              <li>
                <strong>Site Structures:</strong> Removal of sheds, garages, pools, and other site 
                structures. Site structure removal prepares properties for new development or redevelopment, 
                with compliance to Broward County permit requirements.
              </li>
              <li>
                <strong>Coastal Projects:</strong> Demolition of coastal projects may require additional 
                environmental review and permits. Coastal project demolition requires specialized permits and 
                environmental review, with Natural Resource Protection Code (Chapter 27) compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Demolition Considerations</h2>
            <p className={styles.text}>
              Demolition coordination in Broward County requires attention to local regulations and 
              environmental considerations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Uniform Building Permit Applications:</strong> All demolition work in Broward County 
                requires Uniform Building Permit Applications (updated November 14, 2025) from Broward County 
                Building Code Division. Building permits are required for all demolition work, with Development 
                & Environmental Review (DER) through ePermits OneStop for applicable projects. All DER 
                submittals are only accepted electronically. Permits are valid for 180 days from the date of 
                issuance.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Demolition projects may require 
                Development & Environmental Review (DER) through ePermits OneStop for applicable building 
                permits. DER ensures compliance with Broward County Land Development Code and Natural Resource 
                Protection Code (Chapter 27). All DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Statement of Responsibilities Regarding Asbestos (SRRA):</strong> Statement of 
                Responsibilities Regarding Asbestos (SRRA) forms must be submitted with the Uniform Building 
                Permit Application for all demolition projects in Broward County. SRRA forms ensure proper 
                handling and disposal of asbestos-containing materials, with compliance with Broward County 
                requirements.
              </li>
              <li>
                <strong>Asbestos Survey Requirements:</strong> All demolition and renovation projects require 
                asbestos surveys and Statement of Responsibilities Regarding Asbestos (SRRA) forms. An asbestos 
                survey must be completed for all demolition projects, and SRRA forms must be submitted with 
                the Uniform Building Permit Application.
              </li>
              <li>
                <strong>Florida DEP Notice Requirements:</strong> Florida&apos;s state asbestos removal 
                program requirements under section 376.60, F.S., and National Emission Standards for 
                Hazardous Air Pollutants (NESHAP) requirements under 40 CFR Part 61, Subpart M require 
                submission of a Notice of Renovation or Demolition form to the Florida Department of 
                Environmental Protection Division of Air Resource Management.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements for 
                development in environmentally sensitive areas. Demolition projects must comply with these 
                requirements, with proper environmental protection measures.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Structures may contain lead paint, mold, or other 
                hazardous materials requiring proper handling. Hazardous material management ensures proper 
                disposal and environmental protection, with compliance to Broward County regulations and 
                Statement of Responsibilities Regarding Asbestos (SRRA) requirements.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Utility disconnection must be coordinated with 
                Broward County service providers to ensure safe demolition operations. Utility 
                coordination prevents service interruptions and safety hazards.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Demolition debris must be disposed of at approved 
                facilities according to Broward County waste management regulations. Construction and 
                demolition debris must be kept separate from other waste types. Debris disposal coordination 
                ensures proper waste management and compliance, with Statement of Responsibilities Regarding 
                Asbestos (SRRA) compliance.
              </li>
              <li>
                <strong>Permit Processing:</strong> Permit processing times vary based on project complexity 
                and Development & Environmental Review (DER) requirements. Broward County permit processing 
                through ePermits OneStop can add time to projects. All DER submittals are only accepted 
                electronically. Permits are valid for 180 days from the date of issuance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Demolition Coordination Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your demolition project in Broward County is completed 
              safely and efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Assessment:</strong> We assess your demolition needs including structure 
                type, size, and materials. Assessment determines demolition requirements, establishes project 
                scope, and identifies Broward County permit requirements including Development & Environmental 
                Review (DER) needs.
              </li>
              <li>
                <strong>Asbestos Survey:</strong> We coordinate asbestos surveys for all demolition projects 
                as required by Broward County. Statement of Responsibilities Regarding Asbestos (SRRA) forms 
                must be submitted with the Uniform Building Permit Application. Florida DEP Notice of 
                Renovation or Demolition forms may also be required.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits 
                as described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for demolition projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We coordinate Uniform Building Permit 
                Applications (updated November 14, 2025), Development & Environmental Review (DER) through 
                ePermits OneStop, Statement of Responsibilities Regarding Asbestos (SRRA) forms, and 
                coordinate with regulatory agencies. All DER submittals are only accepted electronically. 
                Permits are valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed, insured 
                demolition contractors who have the right equipment and experience for your specific 
                demolition needs in Broward County, with knowledge of local permit requirements.
              </li>
              <li>
                <strong>Utility Disconnection:</strong> Utilities are disconnected including water, sewer, 
                electric, and gas services through Broward County service providers. Utility 
                disconnection ensures safe demolition operations.
              </li>
              <li>
                <strong>Demolition Execution:</strong> Licensed contractors perform demolition operations 
                using appropriate methods and equipment. Demolition execution ensures safe removal of 
                structures with compliance to permit conditions.
              </li>
              <li>
                <strong>Debris Removal:</strong> Demolition debris is removed and disposed of at approved 
                facilities according to Broward County waste management regulations. Debris removal 
                ensures proper waste management and site cleanup, with Statement of Responsibilities Regarding 
                Asbestos (SRRA) compliance.
              </li>
              <li>
                <strong>Site Preparation:</strong> Sites are prepared for subsequent site work including 
                clearing, grading, and construction. Site preparation ensures efficient project sequencing 
                and prepares sites for new development.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Service Areas</h2>
            <p className={styles.text}>
              We coordinate demolition services across Broward County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Broward County Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>Fort Lauderdale</li>
                <li>Hollywood</li>
                <li>Weston</li>
                <li>Plantation</li>
                <li>Pembroke Pines</li>
                <li>Coral Springs</li>
                <li>Parkland</li>
                <li>Davie</li>
                <li>Miramar</li>
                <li>Victoria Park</li>
                <li>Coral Ridge</li>
                <li>Harbor Beach</li>
                <li>Pompano Beach</li>
                <li>Deerfield Beach</li>
                <li>Lauderdale-by-the-Sea</li>
                <li>Las Olas Boulevard</li>
                <li>Downtown Fort Lauderdale</li>
                <li>Fort Lauderdale Beach</li>
                <li>Hollywood Beach</li>
                <li>Pompano Beach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for demolition in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  All demolition work in Broward County requires Uniform Building Permit Applications (updated 
                  November 14, 2025) from Broward County Building Code Division. Demolition projects may require 
                  Development & Environmental Review (DER) through ePermits OneStop for applicable building 
                  permits. Development permits (Florida Statute 380.04) may be required for projects involving 
                  development work. Statement of Responsibilities Regarding Asbestos (SRRA) forms must be 
                  submitted with the Uniform Building Permit Application. All DER submittals are only accepted 
                  electronically. Permits are valid for 180 days from the date of issuance. We help identify 
                  and coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does demolition coordination cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition coordination costs in Broward County vary based on structure size, materials, 
                  disposal requirements, and permit requirements. Typical residential structures range from 
                  $25,000 to $90,000, while large commercial buildings can range from $90,000 to $600,000+ 
                  depending on scope. Projects requiring Development & Environmental Review (DER) through 
                  ePermits OneStop may have additional permit processing costs. Factors affecting cost include 
                  structure size, materials, asbestos presence, disposal requirements, and Broward County permit 
                  requirements. Broward County permit processing through ePermits OneStop can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need asbestos testing before demolition in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, all demolition and renovation projects in Broward County require asbestos surveys and 
                  Statement of Responsibilities Regarding Asbestos (SRRA) forms. An asbestos survey must be 
                  completed for all demolition projects, and SRRA forms must be submitted with the Uniform 
                  Building Permit Application. Florida Department of Environmental Protection Notice of 
                  Renovation or Demolition forms may also be required. We coordinate asbestos assessment and 
                  abatement as needed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is Statement of Responsibilities Regarding Asbestos (SRRA)?</h3>
                <p className={styles.faqAnswer}>
                  Statement of Responsibilities Regarding Asbestos (SRRA) forms must be submitted with the 
                  Uniform Building Permit Application for all demolition projects in Broward County. SRRA forms 
                  ensure proper handling and disposal of asbestos-containing materials, with compliance with 
                  Broward County requirements. SRRA compliance is essential for all demolition projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does demolition take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition timelines in Broward County vary based on structure size, complexity, permit 
                  processing times, and Development & Environmental Review (DER) requirements. Typical residential 
                  structures take 1-3 days for demolition after permit approval, while large commercial buildings 
                  may take 1-4 weeks depending on scope. Broward County permit processing through ePermits 
                  OneStop may add time to projects. Utility disconnection and debris removal can affect timelines. 
                  We coordinate operations to complete projects efficiently.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to demolition debris in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition debris in Broward County is sorted and disposed of at approved facilities 
                  according to Broward County waste management regulations. Construction and demolition debris 
                  must be kept separate from other waste types. Many materials can be recycled including concrete, 
                  metal, and wood, while other materials require disposal at approved facilities. We coordinate 
                  debris removal and disposal to ensure proper waste management and compliance, with Statement 
                  of Responsibilities Regarding Asbestos (SRRA) compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Related Services</h2>
            <p className={styles.text}>
              <a href="/services/land-clearing-lot-preparation/demolition-coordination/" className={styles.backLink}>
                ← View General Demolition Coordination Services
              </a>
            </p>
            <p className={styles.text}>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Coordinate Demolition in Broward County?"
        description="Get a free quote for your demolition coordination project. We'll coordinate licensed, insured demolition contractors to safely remove structures and prepare your site for new construction, with full compliance to Broward County Uniform Building Permit Applications, Development & Environmental Review (DER), and Statement of Responsibilities Regarding Asbestos (SRRA) requirements."
        showPhone={true}
      />
    </main>
  )
}

