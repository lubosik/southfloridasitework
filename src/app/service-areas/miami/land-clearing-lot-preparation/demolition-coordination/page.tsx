import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Demolition Coordination in Miami, FL | Miami-Dade County',
  description: 'Coordination with demolition contractors for removal of existing structures in Miami-Dade County. Licensed, insured demolition partners with RER permits and asbestos compliance.',
  openGraph: {
    title: 'Demolition Coordination in Miami, FL | Miami-Dade County',
    description: 'Coordination with demolition contractors for removal of existing structures in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-clearing-lot-preparation/demolition-coordination/`,
  },
}

export default function MiamiDemolitionCoordinationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Demolition Coordination in Miami, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Coordination with demolition contractors for removal of existing structures across 
                Miami-Dade County, from Coconut Grove to Pinecrest, Coral Gables to Key Biscayne. 
                We coordinate licensed, insured demolition contractors who safely remove buildings, 
                foundations, and structures with full compliance to Miami-Dade County RER building 
                permits, DERM Plan Review Approval, and asbestos abatement requirements.
              </p>
              <p className={styles.description}>
                Demolition coordination in Miami-Dade County ensures proper removal of existing 
                structures before site work begins. Our network includes licensed, insured demolition 
                contractors who safely remove buildings, foundations, and structures to prepare sites 
                for new development, with attention to Miami-Dade County Chapter 24 requirements, 
                asbestos surveys, and environmental compliance.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/demolition-coordination.jpg"
                alt="Demolition coordination services in Miami-Dade County"
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
              Demolition coordination in Miami-Dade County is essential for developers, general contractors, 
              property owners, and anyone who needs existing structures removed before site work and new 
              construction begins across Miami neighborhoods including Coconut Grove, Pinecrest, Palmetto 
              Bay, Coral Gables, Key Biscayne, Doral, Aventura, and throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re removing an old building, foundation, or structure to make way for new 
              development, demolition coordination ensures proper removal and site preparation. We coordinate 
              with licensed demolition contractors who safely remove structures and prepare sites for clearing, 
              grading, and construction, with full compliance to Miami-Dade County RER building permits, 
              DERM Plan Review Approval, and asbestos abatement requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Demolition coordination in Miami-Dade County typically ranges from <strong>$25,000 to $90,000</strong> for 
                residential structures, and <strong>$90,000 to $600,000+</strong> for large commercial 
                buildings or complex demolition projects depending on structure size, materials, disposal 
                requirements, and Miami-Dade County permit requirements. Commercial demolition, condominium 
                unit demolition exceeding 160 square feet, and single-family residence demolition when 2 or 
                more detached structures exist on the same lot require DERM Plan Review Approval.
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
                  and experience for Miami-Dade County projects. Contractor selection ensures proper 
                  demolition execution and compliance with RER building permits and DERM requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>RER Building Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County RER (Regulatory and Economic Resources) building 
                  permits for demolition projects. RER permits are required for all demolition work under 
                  Chapter 24 of the Miami-Dade County Code of Ordinances, with DERM Plan Review Approval 
                  required for commercial demolition, condominium unit demolition exceeding 160 square 
                  feet, and single-family residence demolition when 2 or more detached structures exist 
                  on the same lot.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>DERM Plan Review Approval</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County DERM (Division of Environmental Resources Management) 
                  Plan Review Approval for demolition projects requiring environmental review. DERM Plan 
                  Review Approval must be obtained prior to issuance of building permits for commercial 
                  demolition, condominium unit demolition exceeding 160 square feet, and single-family 
                  residence demolition when 2 or more detached structures exist on the same lot.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Asbestos Survey and Abatement</h3>
                <p className={styles.serviceDescription}>
                  Coordination of asbestos surveys and abatement for all demolition projects in Miami-Dade 
                  County. An asbestos survey must be completed for all demolition projects, and an 
                  Affidavit for Asbestos Survey must be completed prior to the start of the project to 
                  proceed with plan review approval. Florida Department of Environmental Protection 
                  Notice of Renovation or Demolition forms may also be required.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Utility Disconnection</h3>
                <p className={styles.serviceDescription}>
                  Coordination of utility disconnection including water, sewer, electric, and gas services 
                  in Miami-Dade County. Utility disconnection ensures safe demolition operations and 
                  prevents service interruptions, with coordination through Miami-Dade County service 
                  providers.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Documentation</h3>
                <p className={styles.serviceDescription}>
                  Coordination of required demolition documentation including Building Permit Application 
                  (yellow form), total square footage of structure to be demolished, Contact Sheet, 
                  detailed drawings showing location and connections to be removed, and signed and sealed 
                  drawings by architects or engineers when required.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Demolition Scheduling</h3>
                <p className={styles.serviceDescription}>
                  Scheduling of demolition operations to coordinate with site work and construction 
                  timelines in Miami-Dade County. Demolition scheduling ensures efficient project 
                  sequencing and minimizes delays, with attention to permit processing times.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Removal Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of debris removal and disposal after demolition according to Miami-Dade 
                  County waste management regulations. Debris removal coordination ensures proper disposal 
                  and site cleanup for subsequent site work, with compliance to construction and 
                  demolition debris requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Coastal RER Approval</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Coastal RER (Resource Extraction Review) approval for coastal, sewer, 
                  and marina demolition projects in Miami-Dade County. Coastal RER approval must be 
                  obtained prior to issuance of building permits for projects in coastal areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Demolition Projects in Miami-Dade County</h2>
            <p className={styles.text}>
              Demolition coordination covers various types of structures and projects in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Commercial Demolition:</strong> Removal of retail, office, and commercial 
                structures. Commercial demolition requires DERM Plan Review Approval prior to issuance of 
                building permits. Commercial demolition prepares sites for new commercial development or 
                redevelopment.
              </li>
              <li>
                <strong>Residential Structures:</strong> Removal of single-family homes, duplexes, and 
                residential buildings. Single-family residence demolition when 2 or more detached structures 
                exist on the same lot requires DERM Plan Review Approval. Residential demolition prepares 
                sites for new home construction or redevelopment.
              </li>
              <li>
                <strong>Condominium Unit Demolition:</strong> Removal of condominium units exceeding 160 
                square feet requires DERM Plan Review Approval prior to issuance of building permits. 
                Condominium unit demolition prepares units for renovation or redevelopment.
              </li>
              <li>
                <strong>Foundations and Slabs:</strong> Removal of existing foundations, slabs, and 
                concrete structures. Foundation removal prepares sites for new construction and ensures 
                proper site preparation, with attention to Miami-Dade County permit requirements.
              </li>
              <li>
                <strong>Partial Demolition:</strong> Selective removal of portions of structures for 
                renovation or expansion. Partial demolition preserves existing structures while removing 
                specific components, with compliance to Miami-Dade County permit requirements.
              </li>
              <li>
                <strong>Interior Demolition:</strong> Removal of interior components including walls, 
                fixtures, and finishes. Interior demolition prepares structures for renovation or 
                redevelopment, with attention to asbestos survey requirements.
              </li>
              <li>
                <strong>Site Structures:</strong> Removal of sheds, garages, pools, and other site 
                structures. Site structure removal prepares properties for new development or redevelopment, 
                with compliance to Miami-Dade County permit requirements.
              </li>
              <li>
                <strong>Coastal Projects:</strong> Demolition of coastal, sewer, and marina projects 
                requires Coastal RER (Resource Extraction Review) approval prior to issuance of building 
                permits. Coastal project demolition requires specialized permits and environmental review.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Demolition Considerations</h2>
            <p className={styles.text}>
              Demolition coordination in Miami-Dade County requires attention to local regulations and 
              environmental considerations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>RER Building Permits:</strong> All demolition work in Miami-Dade County requires 
                RER (Regulatory and Economic Resources) building permits under Chapter 24 of the Miami-Dade 
                County Code of Ordinances. Building Permit Application (yellow form) must be submitted with 
                total square footage, Contact Sheet, detailed drawings, and signed and sealed drawings by 
                architects or engineers when required.
              </li>
              <li>
                <strong>DERM Plan Review Approval:</strong> Commercial demolition, condominium unit 
                demolition exceeding 160 square feet, and single-family residence demolition when 2 or 
                more detached structures exist on the same lot require DERM Plan Review Approval prior to 
                issuance of building permits. DERM Plan Review Approval ensures environmental compliance 
                and proper demolition authorization.
              </li>
              <li>
                <strong>Asbestos Survey Requirements:</strong> All demolition and renovation projects for 
                commercial facilities require Division of Environmental Resources Management review and 
                asbestos approval. An asbestos survey must be completed for all demolition projects, and 
                an Affidavit for Asbestos Survey must be completed prior to the start of the project to 
                proceed with plan review approval.
              </li>
              <li>
                <strong>Florida DEP Notice Requirements:</strong> Florida&apos;s state asbestos removal 
                program requirements under section 376.60, F.S., and National Emission Standards for 
                Hazardous Air Pollutants (NESHAP) requirements under 40 CFR Part 61, Subpart M require 
                submission of a Notice of Renovation or Demolition form to the Florida Department of 
                Environmental Protection Division of Air Resource Management.
              </li>
              <li>
                <strong>Coastal RER Approval:</strong> Coastal, sewer, and marina demolition projects 
                require Coastal RER (Resource Extraction Review) approval prior to issuance of building 
                permits. Coastal RER approval ensures proper environmental review for coastal projects.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Structures may contain lead paint, mold, or other 
                hazardous materials requiring proper handling. Hazardous material management ensures proper 
                disposal and environmental protection, with compliance to Miami-Dade County regulations.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Utility disconnection must be coordinated with 
                Miami-Dade County service providers to ensure safe demolition operations. Utility 
                coordination prevents service interruptions and safety hazards.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Demolition debris must be disposed of at approved 
                facilities according to Miami-Dade County waste management regulations. Construction and 
                demolition debris must be kept separate from other waste types. Debris disposal coordination 
                ensures proper waste management and compliance.
              </li>
              <li>
                <strong>Permit Processing:</strong> Permit processing times vary based on project complexity 
                and DERM Plan Review Approval requirements. Contact the Miami-Dade County permitting 
                assistance team at 786-315-2388 or CHAT@miamidade.gov for assistance with the permit process.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Demolition Coordination Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your demolition project in Miami-Dade County is completed 
              safely and efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Assessment:</strong> We assess your demolition needs including structure 
                type, size, and materials. Assessment determines demolition requirements, establishes project 
                scope, and identifies Miami-Dade County permit requirements including DERM Plan Review 
                Approval needs.
              </li>
              <li>
                <strong>Asbestos Survey:</strong> We coordinate asbestos surveys for all demolition projects 
                as required by Miami-Dade County. An Affidavit for Asbestos Survey must be completed prior 
                to the start of the project to proceed with plan review approval. Florida DEP Notice of 
                Renovation or Demolition forms may also be required.
              </li>
              <li>
                <strong>DERM Plan Review Approval:</strong> For projects requiring DERM Plan Review Approval 
                (commercial demolition, condominium unit demolition exceeding 160 square feet, single-family 
                residence demolition when 2 or more detached structures exist on the same lot, coastal 
                projects), we coordinate DERM approval prior to building permit issuance.
              </li>
              <li>
                <strong>RER Building Permit Coordination:</strong> We coordinate RER building permits for 
                all demolition work, including submission of Building Permit Application (yellow form), total 
                square footage, Contact Sheet, detailed drawings, and signed and sealed drawings by 
                architects or engineers when required.
              </li>
              <li>
                <strong>Coastal RER Approval (if required):</strong> For coastal, sewer, and marina 
                demolition projects, we coordinate Coastal RER (Resource Extraction Review) approval prior 
                to building permit issuance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed, insured 
                demolition contractors who have the right equipment and experience for your specific 
                demolition needs in Miami-Dade County, with knowledge of local permit requirements.
              </li>
              <li>
                <strong>Utility Disconnection:</strong> Utilities are disconnected including water, sewer, 
                electric, and gas services through Miami-Dade County service providers. Utility 
                disconnection ensures safe demolition operations.
              </li>
              <li>
                <strong>Demolition Execution:</strong> Licensed contractors perform demolition operations 
                using appropriate methods and equipment. Demolition execution ensures safe removal of 
                structures with compliance to permit conditions.
              </li>
              <li>
                <strong>Debris Removal:</strong> Demolition debris is removed and disposed of at approved 
                facilities according to Miami-Dade County waste management regulations. Debris removal 
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
            <h2 className={styles.heading}>Miami-Dade County Service Areas</h2>
            <p className={styles.text}>
              We coordinate demolition services across Miami-Dade County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Miami Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>Coconut Grove</li>
                <li>Pinecrest</li>
                <li>Palmetto Bay</li>
                <li>Coral Gables</li>
                <li>Key Biscayne</li>
                <li>Doral</li>
                <li>Aventura</li>
                <li>Brickell</li>
                <li>South Beach</li>
                <li>Mid-Beach</li>
                <li>North Beach</li>
                <li>Bal Harbour</li>
                <li>Sunny Isles Beach</li>
                <li>Miami Beach</li>
                <li>Homestead</li>
                <li>Cutler Bay</li>
                <li>Kendall</li>
                <li>Westchester</li>
                <li>Hialeah</li>
                <li>Miami Gardens</li>
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
                <h3 className={styles.faqQuestion}>What permits are required for demolition in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  All demolition work in Miami-Dade County requires RER (Regulatory and Economic Resources) 
                  building permits under Chapter 24 of the Miami-Dade County Code of Ordinances. Commercial 
                  demolition, condominium unit demolition exceeding 160 square feet, and single-family 
                  residence demolition when 2 or more detached structures exist on the same lot require DERM 
                  Plan Review Approval prior to issuance of building permits. Coastal, sewer, and marina 
                  projects require Coastal RER (Resource Extraction Review) approval. We help identify and 
                  coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does demolition coordination cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition coordination costs in Miami-Dade County vary based on structure size, materials, 
                  disposal requirements, and permit requirements. Typical residential structures range from 
                  $25,000 to $90,000, while large commercial buildings can range from $90,000 to $600,000+ 
                  depending on scope. Projects requiring DERM Plan Review Approval may have additional permit 
                  processing costs. Factors affecting cost include structure size, materials, asbestos presence, 
                  disposal requirements, and Miami-Dade County permit requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need asbestos testing before demolition in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, all demolition and renovation projects for commercial facilities in Miami-Dade County 
                  require Division of Environmental Resources Management review and asbestos approval. An 
                  asbestos survey must be completed for all demolition projects, and an Affidavit for Asbestos 
                  Survey must be completed prior to the start of the project to proceed with plan review 
                  approval. Florida Department of Environmental Protection Notice of Renovation or Demolition 
                  forms may also be required. We coordinate asbestos assessment and abatement as needed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is DERM Plan Review Approval?</h3>
                <p className={styles.faqAnswer}>
                  DERM Plan Review Approval is required for commercial demolition, condominium unit demolition 
                  exceeding 160 square feet, and single-family residence demolition when 2 or more detached 
                  structures exist on the same lot. DERM Plan Review Approval must be obtained prior to 
                  issuance of building permits and ensures environmental compliance and proper demolition 
                  authorization. Coastal, sewer, and marina projects require Coastal RER (Resource Extraction 
                  Review) approval.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does demolition take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition timelines in Miami-Dade County vary based on structure size, complexity, permit 
                  processing times, and DERM Plan Review Approval requirements. Typical residential structures 
                  take 1-3 days for demolition after permit approval, while large commercial buildings may 
                  take 1-4 weeks depending on scope. DERM Plan Review Approval and permit processing may add 
                  time to projects. Utility disconnection and debris removal can affect timelines. We coordinate 
                  operations to complete projects efficiently.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to demolition debris in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Demolition debris in Miami-Dade County is sorted and disposed of at approved facilities 
                  according to Miami-Dade County waste management regulations. Construction and demolition debris 
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
              <a href="/service-areas/miami/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Miami Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Coordinate Demolition in Miami-Dade County?"
        description="Get a free quote for your demolition coordination project. We'll coordinate licensed, insured demolition contractors to safely remove structures and prepare your site for new construction, with full compliance to Miami-Dade County RER building permits, DERM Plan Review Approval, and asbestos abatement requirements."
        showPhone={true}
      />
    </main>
  )
}

