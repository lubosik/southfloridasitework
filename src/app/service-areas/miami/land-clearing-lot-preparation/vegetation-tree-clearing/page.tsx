import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Vegetation & Tree Clearing in Miami, FL | Miami-Dade County',
  description: 'Professional vegetation and tree clearing services in Miami-Dade County. DERM tree removal permits, Natural Forest Community permits, and protected species compliance.',
  openGraph: {
    title: 'Vegetation & Tree Clearing in Miami, FL | Miami-Dade County',
    description: 'Professional vegetation and tree clearing services in Miami-Dade County with DERM permit coordination.',
    url: `${siteConfig.url}/service-areas/miami/land-clearing-lot-preparation/vegetation-tree-clearing/`,
  },
}

export default function MiamiVegetationTreeClearingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Vegetation and Tree Clearing in Miami, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Professional vegetation and tree clearing services across Miami-Dade County, from Coconut Grove 
                to Pinecrest, Coral Gables to Key Biscayne. We coordinate licensed contractors to perform 
                selective or complete clearing while navigating Miami-Dade County DERM Chapter 24-49 tree removal 
                permits, Natural Forest Community (NFC) permits, and protected species compliance.
              </p>
              <p className={styles.description}>
                Vegetation and tree clearing in Miami-Dade County requires careful coordination with DERM 
                (Department of Environmental Resources Management) for tree removal permits, Natural Forest 
                Community permits, and wetland protection. Our network of licensed contractors has the equipment 
                and expertise to clear sites efficiently while ensuring full compliance with Miami-Dade County 
                environmental regulations, tree protection ordinances, and protected species requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/vegetation-tree-clearing.jpg"
                alt="Vegetation and tree clearing services in Miami-Dade County"
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
              Vegetation and tree clearing services in Miami-Dade County are essential for developers, custom 
              home builders, general contractors, and property owners who need to prepare raw land or overgrown 
              properties for construction across Miami neighborhoods including Coconut Grove, Pinecrest, Palmetto 
              Bay, Coral Gables, Key Biscayne, Doral, Aventura, and throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Doral, building a custom home on a wooded 
              lot in Coral Gables, or preparing a commercial site in Aventura, vegetation and tree clearing 
              prepares your site for development. We coordinate contractors with the right equipment and 
              expertise to clear your site efficiently and safely, navigating Miami-Dade County DERM tree 
              removal permits, Natural Forest Community (NFC) permits, and protected species compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Vegetation and tree clearing in Miami-Dade County typically ranges from <strong>$20,000 to $60,000</strong> for 
                residential lots, and <strong>$60,000 to $250,000+</strong> for large commercial sites, 
                subdivisions, or heavily wooded properties depending on vegetation density, tree sizes, 
                clearing scope, and permit requirements. Miami-Dade County permit fees typically range from 
                $100-$350 for residential permits to $250-$500+ for commercial permits, with additional fees 
                for specimen trees and Natural Forest Community permits.
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
                <h3 className={styles.serviceTitle}>DERM Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County DERM Chapter 24-49 tree removal permits, including 
                  application submission, site assessment documentation, and permit compliance. DERM permits 
                  are required for removing trees with a trunk diameter at breast height (DBH) of 3 inches or 
                  more, or trees with an overall height of 12 feet or more.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Natural Forest Community (NFC) Permits</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Natural Forest Community (NFC) permits for clearing within County-designated 
                  Natural Forest Communities. NFC permits require additional environmental review and may require 
                  mitigation or tree replacement plans.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Specimen Tree Assessment</h3>
                <p className={styles.serviceDescription}>
                  Assessment and documentation of specimen trees (trees with a DBH of 18 inches or greater) 
                  which require special permits and may require mitigation or replacement. Specimen trees 
                  include protected species such as Live Oak, Mahogany, and Bald Cypress.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Selective Clearing</h3>
                <p className={styles.serviceDescription}>
                  Selective removal of vegetation and trees while preserving desirable trees when possible. 
                  Selective clearing maintains site aesthetics and may reduce costs while preparing areas for 
                  construction, with careful attention to Miami-Dade County tree protection ordinances.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Complete Clearing</h3>
                <p className={styles.serviceDescription}>
                  Complete removal of all vegetation and trees for full site development. Complete clearing 
                  prepares entire sites for construction and ensures no vegetation interferes with development, 
                  with full DERM permit compliance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Mangrove and Wetland Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination with DERM Coastal Resources Section (305-372-6575) for mangrove work and 
                  Wetland Resources Section (305-372-6585) for wetland clearing. Mangrove and wetland clearing 
                  requires special permits and environmental review.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Protected Species Compliance</h3>
                <p className={styles.serviceDescription}>
                  Compliance with Miami-Dade County protected species regulations, including Live Oak, Mahogany, 
                  and Bald Cypress. Protected species clearing requires special permits and may require 
                  environmental surveys and mitigation.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Tree Removal</h3>
                <p className={styles.serviceDescription}>
                  Professional removal of trees using appropriate equipment and techniques, with full DERM 
                  permit compliance. Tree removal includes felling, cutting, and preparation for stump 
                  removal, with attention to safety and site protection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Management</h3>
                <p className={styles.serviceDescription}>
                  Proper management of cleared vegetation and debris according to Miami-Dade County regulations. 
                  Some materials may be recycled or mulched, while others require disposal at approved facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Tree Clearing Regulations</h2>
            <p className={styles.text}>
              Vegetation and tree clearing in Miami-Dade County requires strict compliance with DERM Chapter 24-49 
              regulations and environmental protection requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM Chapter 24-49 Tree Removal Permits:</strong> Miami-Dade County requires tree removal 
                or relocation permits for any tree with a trunk diameter at breast height (DBH) of 3 inches or 
                more, or trees with an overall height of 12 feet or more. Permits are processed through the 
                Department of Regulatory and Economic Resources, Division of Environmental Resource Management 
                (DERM), with processing times of approximately 21 days from application acceptance to permit 
                issuance. Permits are valid for one year from the date of issuance.
              </li>
              <li>
                <strong>Tree Definitions:</strong> Miami-Dade County defines trees based on specific measurements: 
                a tree is a woody or fibrous perennial plant with a trunk having a minimum DBH of 3 inches or with 
                an overall height of 12 or more feet. A non-specimen tree has a trunk DBH less than 18 inches when 
                measured 4.5 feet from the ground. A specimen tree has an individual trunk with a DBH of 18 inches 
                or greater when measured 4.5 feet from the ground at natural grade.
              </li>
              <li>
                <strong>Natural Forest Community (NFC) Permits:</strong> Clearing within County-designated Natural 
                Forest Communities requires additional DERM authorization and environmental review. NFC permits may 
                require mitigation or tree replacement plans to offset environmental impacts.
              </li>
              <li>
                <strong>Protected Species:</strong> Miami-Dade County protects specific tree species including 
                Live Oak, Mahogany, and Bald Cypress. Protected species clearing requires special permits and may 
                require environmental surveys and mitigation to ensure compliance with state and federal 
                regulations protecting endangered species.
              </li>
              <li>
                <strong>Mangrove Regulations:</strong> For questions or work involving mangroves, contact the DERM 
                Coastal Resources Section at 305-372-6575. Mangrove clearing requires special permits and 
                environmental review, with strict regulations protecting coastal ecosystems.
              </li>
              <li>
                <strong>Wetland Protection:</strong> Properties with wetlands require special permits from DERM 
                Wetland Resources Section (305-372-6585) and may have restrictions on clearing activities. SFWMD 
                and county environmental departments regulate wetland impacts and may require mitigation.
              </li>
              <li>
                <strong>Tree Trimming vs. Removal:</strong> Tree trimming only requires a permit if 25% or more 
                of the tree is to be cut down, distinguishing it from removal permits which have more stringent 
                requirements. Careful planning can help minimize permit requirements.
              </li>
              <li>
                <strong>Permit Fees (2025):</strong> Standard permit fees typically range from $100-$350 for basic 
                residential permits, $250-$500+ for commercial property permits, with additional fees per tree for 
                multiple tree removal. After-the-fact permits can cost up to 5x the standard fee, making proactive 
                permit coordination essential.
              </li>
              <li>
                <strong>Application Process:</strong> Submit a completed Tree Removal/Relocation Permit Application 
                Form along with an initial fee via the online application submission portal. If additional information 
                is required, official correspondence will identify deficiencies. Applications that remain incomplete 
                for 120 days are automatically denied and require a new application.
              </li>
              <li>
                <strong>Selective Preservation:</strong> Selective clearing can preserve desirable trees when 
                possible, maintaining site aesthetics and reducing costs. Tree preservation requires careful planning 
                and coordination with construction activities, with attention to Miami-Dade County tree protection 
                ordinances.
              </li>
              <li>
                <strong>Debris Management:</strong> Proper management of cleared vegetation and debris must comply 
                with Miami-Dade County regulations. Some materials may be recycled or mulched, while others require 
                disposal at approved facilities.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion. Temporary erosion 
                control measures may be required until permanent drainage and stabilization systems are installed, 
                with compliance with Miami-Dade County erosion control requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Vegetation and Tree Clearing Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your vegetation and tree clearing project in Miami-Dade County is 
              completed efficiently and in compliance with all DERM regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, and clearing 
                requirements. Assessment includes reviewing site conditions, identifying trees to be removed or 
                preserved, determining tree classifications (specimen vs. non-specimen), and identifying 
                environmental concerns including Natural Forest Communities, wetlands, and protected species.
              </li>
              <li>
                <strong>DERM Permit Coordination:</strong> We help identify required DERM Chapter 24-49 tree removal 
                permits, Natural Forest Community (NFC) permits, mangrove permits, and wetland permits, and coordinate 
                with DERM and regulatory agencies. Permits ensure compliance with Miami-Dade County regulations, with 
                processing times of approximately 21 days from application acceptance to permit issuance.
              </li>
              <li>
                <strong>Protected Species Assessment:</strong> We assess sites for protected species including Live 
                Oak, Mahogany, and Bald Cypress, and coordinate required environmental surveys and permits. Protected 
                species clearing requires special permits and may require mitigation.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have the 
                right equipment (excavators, bulldozers, mulchers, tree removal equipment) and experience for your 
                specific clearing needs, with knowledge of Miami-Dade County regulations.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree removal, and site 
                preparation according to project specifications and DERM permit conditions. Clearing prepares sites 
                for subsequent construction activities, with full compliance with Miami-Dade County tree protection 
                ordinances.
              </li>
              <li>
                <strong>Tree Preservation:</strong> When selective clearing is specified, contractors carefully preserve 
                desirable trees and protect them during clearing activities. Tree preservation maintains site aesthetics 
                and reduces costs, with attention to Miami-Dade County tree protection ordinances.
              </li>
              <li>
                <strong>Debris Management:</strong> All cleared vegetation and debris are managed according to Miami-Dade 
                County regulations. Debris may be recycled, mulched, or disposed of at approved facilities, ensuring 
                compliance with local regulations.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors prepare sites for subsequent construction 
                activities including access road preparation and coordination with grading operations, with temporary 
                erosion control measures as required.
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
              We coordinate vegetation and tree clearing services across Miami-Dade County, including:
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
                <h3 className={styles.faqQuestion}>Do I need DERM permits for tree clearing in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, Miami-Dade County DERM Chapter 24-49 requires tree removal or relocation permits for any tree 
                  with a trunk diameter at breast height (DBH) of 3 inches or more, or trees with an overall height 
                  of 12 feet or more. Permits are processed through DERM with processing times of approximately 21 
                  days from application acceptance to permit issuance. Clearing within Natural Forest Communities, 
                  involving mangroves, wetlands, or protected species requires additional permits. We help identify 
                  and coordinate all required DERM permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are specimen trees in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Specimen trees in Miami-Dade County are trees with an individual trunk with a DBH of 18 inches or 
                  greater when measured 4.5 feet from the ground at natural grade. Specimen trees require special 
                  permits and may require mitigation or replacement. Protected species including Live Oak, Mahogany, 
                  and Bald Cypress are often specimen trees and require additional environmental review.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does vegetation and tree clearing cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Vegetation and tree clearing costs in Miami-Dade County vary significantly based on vegetation density, 
                  tree sizes, site access, and permit requirements. Typical costs range from $2,000 to $10,000 per acre 
                  for light clearing to $10,000 to $30,000+ per acre for heavy clearing with large trees. Residential 
                  lots typically range from $20,000 to $60,000, while large commercial sites can range from $60,000 to 
                  $250,000+ depending on scope. Miami-Dade County permit fees typically range from $100-$350 for 
                  residential permits to $250-$500+ for commercial permits, with additional fees for specimen trees 
                  and Natural Forest Community permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible, maintaining site aesthetics and 
                  reducing costs. We coordinate with contractors to identify trees worth preserving and plan clearing 
                  activities to protect them, with attention to Miami-Dade County tree protection ordinances. However, 
                  some trees may need to be removed due to construction requirements, disease, or safety concerns. Tree 
                  preservation requires careful planning and coordination with DERM permit requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Natural Forest Community (NFC) permits?</h3>
                <p className={styles.faqAnswer}>
                  Natural Forest Community (NFC) permits are required for clearing within County-designated Natural 
                  Forest Communities. NFC permits require additional DERM authorization and environmental review, and may 
                  require mitigation or tree replacement plans to offset environmental impacts. NFC permits are processed 
                  through DERM along with standard tree removal permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does DERM permit processing take?</h3>
                <p className={styles.faqAnswer}>
                  DERM tree removal permit processing time is approximately 21 days from application acceptance to permit 
                  issuance. Permits are valid for one year from the date of issuance. If additional information is required, 
                  official correspondence will identify deficiencies. Applications that remain incomplete for 120 days are 
                  automatically denied and require a new application. We coordinate permit applications to ensure timely 
                  processing and compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and trees in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and trees in Miami-Dade County are managed according to local regulations. Some 
                  materials may be recycled or mulched for reuse, while others require disposal at approved facilities. 
                  We coordinate debris management to ensure compliance with Miami-Dade County regulations and minimize costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does vegetation and tree clearing take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Vegetation and tree clearing timelines in Miami-Dade County vary based on site size, vegetation density, 
                  clearing scope, and permit processing times. Typical residential lots take 1-3 days after permit approval, 
                  while large commercial sites or subdivisions may take 1-2 weeks depending on scope. DERM permit processing 
                  adds approximately 21 days to project timelines. Weather conditions and permit processing can affect 
                  timelines. We coordinate with contractors and DERM to complete projects efficiently.
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
              <a href="/services/land-clearing-lot-preparation/vegetation-tree-clearing/" className={styles.backLink}>
                ← View General Vegetation and Tree Clearing Services
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
        title="Ready to Clear Your Site in Miami-Dade County?"
        description="Get a free quote for your vegetation and tree clearing project. We'll coordinate licensed contractors with the right equipment to clear your site efficiently and safely, navigating all DERM permit requirements."
        showPhone={true}
      />
    </main>
  )
}

