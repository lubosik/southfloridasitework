import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Demolition Coordination in West Palm Beach, FL | Palm Beach County',
  description: 'Coordination with demolition contractors for removal of existing structures in Palm Beach County. Licensed, insured demolition partners with building permits and asbestos compliance.',
  openGraph: {
    title: 'Demolition Coordination in West Palm Beach, FL | Palm Beach County',
    description: 'Coordination with demolition contractors for removal of existing structures in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-clearing-lot-preparation/demolition-coordination/`,
  },
}

export default function WestPalmBeachDemolitionCoordinationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Demolition Coordination in West Palm Beach, FL"
        subtitle="Coordination with demolition contractors for removal of existing structures across Palm Beach County, from West Palm Beach to Palm Beach, Jupiter to Wellington, Royal Palm Beach to The Acreage"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Demolition coordination services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Demolition coordination in Palm Beach County is essential for developers, general contractors, 
              property owners, and anyone who needs existing structures removed before site work and new 
              construction begins across Palm Beach County neighborhoods including West Palm Beach, Palm Beach, 
              Jupiter, Wellington, Royal Palm Beach, The Acreage, Loxahatchee, Boca Raton, Delray Beach, 
              Palm Beach Gardens, and throughout Palm Beach County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re removing an old building, foundation, or structure to make way for new 
              development, demolition coordination ensures proper removal and site preparation. We coordinate 
              with licensed demolition contractors who safely remove structures and prepare sites for clearing, 
              grading, and construction, with full compliance to Palm Beach County Building Division permits, 
              Environmental Resources Management (ERM) review, and Unified Land Development Code (ULDC) requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Demolition coordination in Palm Beach County typically ranges from <strong>$25,000 to $90,000</strong> for 
                residential structures, and <strong>$90,000 to $600,000+</strong> for large commercial 
                buildings or complex demolition projects depending on structure size, materials, disposal 
                requirements, and Palm Beach County permit requirements. Projects requiring Building Division permits and Environmental Resources Management (ERM) review may have additional permit processing 
                costs.
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
                  and experience for Palm Beach County projects. Contractor selection ensures proper 
                  demolition execution and compliance with Building Division permits and Unified Land Development Code (ULDC) 
                  requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Building Division Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Palm Beach County Building Division permits for demolition projects. 
                  Building permits are required for all demolition work, and the Building Division reviews plans to ensure compliance with the 
                  Florida Building Code and Palm Beach County requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Environmental Resources Management (ERM) Review</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Palm Beach County Environmental Resources Management (ERM) review for 
                  projects affecting wetlands or environmentally sensitive areas. ERM ensures that proposed projects 
                  comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Asbestos Survey and Abatement</h3>
                <p className={styles.serviceDescription}>
                  Coordination of asbestos surveys and abatement for all demolition projects in Palm Beach County. 
                  An asbestos survey must be completed for all demolition projects. Florida Department of Environmental Protection Notice of Renovation or 
                  Demolition forms may also be required.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Utility Disconnection</h3>
                <p className={styles.serviceDescription}>
                  Coordination of utility disconnection including water, sewer, electric, and gas services 
                  in Palm Beach County. Utility disconnection ensures safe demolition operations and prevents 
                  service interruptions, with coordination through Palm Beach County service providers.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Documentation</h3>
                <p className={styles.serviceDescription}>
                  Coordination of required demolition documentation including Building Division permits, 
                  and detailed drawings showing location and connections to be removed. Documentation ensures 
                  compliance with Palm Beach County requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Scheduling</h3>
                <p className={styles.serviceDescription}>
                  Scheduling of demolition operations to coordinate with site work and construction 
                  timelines in Palm Beach County. Demolition scheduling ensures efficient project 
                  sequencing and minimizes delays, with attention to permit processing times through 
                  Building Division and ERM review.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Removal Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of debris removal and disposal after demolition according to Palm Beach County 
                  waste management regulations. Debris removal coordination ensures proper disposal 
                  and site cleanup for subsequent site work, with compliance to construction and 
                  demolition debris requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Demolition Projects in Palm Beach County</h2>
            <p className={styles.text}>
              Demolition coordination covers various types of structures and projects in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Commercial Demolition:</strong> Removal of retail, office, and commercial 
                structures. Commercial demolition requires Building Division permits and may require 
                Environmental Resources Management (ERM) review. Commercial demolition 
                prepares sites for new commercial development or redevelopment.
              </li>
              <li>
                <strong>Residential Structures:</strong> Removal of single-family homes, duplexes, and 
                residential buildings. Residential demolition requires Building Division permits 
                and prepares sites for new home construction or redevelopment.
              </li>
              <li>
                <strong>Condominium Unit Demolition:</strong> Removal of condominium units for renovation or 
                redevelopment. Condominium unit demolition requires Building Division permits.
              </li>
              <li>
                <strong>Foundations and Slabs:</strong> Removal of existing foundations, slabs, and 
                concrete structures. Foundation removal prepares sites for new construction and ensures 
                proper site preparation, with attention to Palm Beach County permit requirements.
              </li>
              <li>
                <strong>Partial Demolition:</strong> Selective removal of portions of structures for 
                renovation or expansion. Partial demolition preserves existing structures while removing 
                specific components, with compliance to Palm Beach County permit requirements.
              </li>
              <li>
                <strong>Interior Demolition:</strong> Removal of interior components including walls, 
                fixtures, and finishes. Interior demolition prepares structures for renovation or 
                redevelopment.
              </li>
              <li>
                <strong>Site Structures:</strong> Removal of sheds, garages, pools, and other site 
                structures. Site structure removal prepares properties for new development or redevelopment, 
                with compliance to Palm Beach County permit requirements.
              </li>
              <li>
                <strong>Coastal Projects:</strong> Demolition of coastal projects may require additional 
                environmental review and permits. Coastal project demolition requires specialized permits and 
                environmental review, with Unified Land Development Code (ULDC) compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Demolition Considerations</h2>
            <p className={styles.text}>
              Demolition coordination in Palm Beach County requires attention to local regulations and 
              environmental considerations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> All demolition work in Palm Beach County 
                requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Demolition projects may require 
                Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas. ERM ensures that proposed projects 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Asbestos Survey Requirements:</strong> All demolition and renovation projects require 
                asbestos surveys. An asbestos survey must be completed for all demolition projects.
              </li>
              <li>
                <strong>Florida DEP Notice Requirements:</strong> Florida&apos;s state asbestos removal 
                program requirements under section 376.60, F.S., and National Emission Standards for 
                Hazardous Air Pollutants (NESHAP) requirements under 40 CFR Part 61, Subpart M require 
                submission of a Notice of Renovation or Demolition form to the Florida Department of 
                Environmental Protection Division of Air Resource Management.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land Development 
                Code (ULDC) regulates environmental activities and enforces requirements for 
                development in environmentally sensitive areas. Demolition projects must comply with these 
                requirements, with proper environmental protection measures.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Structures may contain lead paint, mold, or other 
                hazardous materials requiring proper handling. Hazardous material management ensures proper 
                disposal and environmental protection, with compliance to Palm Beach County regulations.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Utility disconnection must be coordinated with 
                Palm Beach County service providers to ensure safe demolition operations. Utility 
                coordination prevents service interruptions and safety hazards.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Demolition debris must be disposed of at approved 
                facilities according to Palm Beach County waste management regulations. Construction and 
                demolition debris must be kept separate from other waste types. Debris disposal coordination 
                ensures proper waste management and compliance.
              </li>
              <li>
                <strong>Permit Processing:</strong> Permit processing times vary based on project complexity 
                and Environmental Resources Management (ERM) requirements. Palm Beach County permit processing 
                through Building Division and ERM review can add time to projects.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Demolition Coordination Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your demolition project in Palm Beach County is completed 
              safely and efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Assessment:</strong> We assess your demolition needs including structure 
                type, size, and materials. Assessment determines demolition requirements, establishes project 
                scope, and identifies Palm Beach County permit requirements including Environmental Resources Management (ERM) needs.
              </li>
              <li>
                <strong>Asbestos Survey:</strong> We coordinate asbestos surveys for all demolition projects 
                as required by Palm Beach County. Florida DEP Notice of 
                Renovation or Demolition forms may also be required.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits 
                as described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for demolition projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We coordinate Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, Unified Land Development Code (ULDC) compliance, and 
                coordinate with regulatory 
                agencies. Permits ensure compliance with Palm Beach County regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed, insured 
                demolition contractors who have the right equipment and experience for your specific 
                demolition needs in Palm Beach County, with knowledge of local permit requirements.
              </li>
              <li>
                <strong>Utility Disconnection:</strong> Utilities are disconnected including water, sewer, 
                electric, and gas services through Palm Beach County service providers. Utility 
                disconnection ensures safe demolition operations.
              </li>
              <li>
                <strong>Demolition Execution:</strong> Licensed contractors perform demolition operations 
                using appropriate methods and equipment. Demolition execution ensures safe removal of 
                structures with compliance to permit conditions.
              </li>
              <li>
                <strong>Debris Removal:</strong> Demolition debris is removed and disposed of at approved 
                facilities according to Palm Beach County waste management regulations. Debris removal 
                ensures proper waste management and site cleanup.
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
            <h2 className={styles.heading}>Palm Beach County Service Areas</h2>
            <p className={styles.text}>
              We coordinate demolition services across Palm Beach County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Palm Beach County Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>West Palm Beach</li>
                <li>Palm Beach</li>
                <li>Jupiter</li>
                <li>Wellington</li>
                <li>Royal Palm Beach</li>
                <li>The Acreage</li>
                <li>Loxahatchee</li>
                <li>Boca Raton</li>
                <li>Delray Beach</li>
                <li>Palm Beach Gardens</li>
                <li>Juno Beach</li>
                <li>Tequesta</li>
                <li>Riviera Beach</li>
                <li>Downtown West Palm Beach</li>
                <li>El Cid</li>
                <li>Grandview Heights</li>
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
                <h3 className={styles.faqQuestion}>What permits are required for demolition in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  All demolition work in Palm Beach County requires Building Division permits from Palm Beach County 
                  Building Division. Demolition projects may require 
                  Environmental Resources Management (ERM) review for 
                  projects affecting wetlands or environmentally sensitive areas. Development permits (Florida 
                  Statute 380.04) may be required for projects involving 
                  development work. We help identify 
                  and coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does demolition coordination cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition coordination costs in Palm Beach County vary based on structure size, materials, 
                  disposal requirements, and permit requirements. Typical residential structures range from 
                  $25,000 to $90,000, while large commercial buildings can range from $90,000 to $600,000+ 
                  depending on scope. Projects requiring Building Division permits and Environmental Resources Management (ERM) review may have additional permit processing 
                  costs. Factors affecting cost include 
                  structure size, materials, asbestos presence, disposal requirements, and Palm Beach County permit 
                  requirements. Palm Beach County permit processing through Building Division and ERM review can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need asbestos testing before demolition in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, all demolition and renovation projects in Palm Beach County require asbestos surveys. 
                  An asbestos survey must be 
                  completed for all demolition projects. Florida Department of Environmental Protection Notice of 
                  Renovation or Demolition forms may also be required. We coordinate asbestos assessment and 
                  abatement as needed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does demolition take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition timelines in Palm Beach County vary based on structure size, complexity, permit 
                  processing times, and Environmental Resources Management (ERM) requirements. Typical residential 
                  structures take 1-3 days for demolition after permit approval, while large commercial buildings 
                  may take 1-4 weeks depending on scope. Palm Beach County permit processing through Building Division and ERM review may add time 
                  to projects. Utility disconnection and debris removal can affect timelines. 
                  We coordinate operations to complete projects efficiently.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to demolition debris in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition debris in Palm Beach County is sorted and disposed of at approved facilities 
                  according to Palm Beach County waste management regulations. Construction and demolition debris 
                  must be kept separate from other waste types. Many materials can be recycled including concrete, 
                  metal, and wood, while other materials require disposal at approved facilities. We coordinate 
                  debris removal and disposal to ensure proper waste management and compliance.
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
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to West Palm Beach Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Coordinate Demolition in Palm Beach County?"
        description="Get a free quote for your demolition coordination project. We'll coordinate licensed, insured demolition contractors to safely remove structures and prepare your site for new construction, with full compliance to Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, and Unified Land Development Code (ULDC) requirements."
        showPhone={true}
      />
    </main>
  )
}

