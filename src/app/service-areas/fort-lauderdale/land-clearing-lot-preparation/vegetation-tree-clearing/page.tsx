import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Vegetation & Tree Clearing in Fort Lauderdale, FL | Broward County',
  description: 'Professional vegetation and tree clearing services in Broward County. Tree protection standards, Natural Resource Protection Code compliance, and SFWMD Environmental Resource Permits.',
  openGraph: {
    title: 'Vegetation & Tree Clearing in Fort Lauderdale, FL | Broward County',
    description: 'Professional vegetation and tree clearing services in Broward County with tree protection standards and permit coordination.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-clearing-lot-preparation/vegetation-tree-clearing/`,
  },
}

export default function FortLauderdaleVegetationTreeClearingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Vegetation and Tree Clearing in Fort Lauderdale, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Professional vegetation and tree clearing services across Broward County, from Fort Lauderdale 
                to Hollywood, Weston to Plantation, Coral Ridge to Victoria Park. We coordinate licensed 
                contractors to perform selective or complete clearing while navigating Broward County tree 
                protection standards, Natural Resource Protection Code compliance, and SFWMD Environmental 
                Resource Permits.
              </p>
              <p className={styles.description}>
                Vegetation and tree clearing in Broward County requires careful coordination with Development 
                & Environmental Review (DER) through ePermits OneStop, Natural Resource Protection Code 
                compliance, and tree protection standards including barriers, hand clearing, and double 
                replacement for damaged trees. Our network of licensed contractors has the equipment and 
                expertise to clear sites efficiently while ensuring full compliance with Broward County 
                environmental regulations and protected species requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/vegetation-tree-clearing.jpg"
                alt="Vegetation and tree clearing services in Broward County"
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
              Vegetation and tree clearing services in Broward County are essential for developers, custom 
              home builders, general contractors, and property owners who need to prepare raw land or overgrown 
              properties for construction across Broward County neighborhoods including Fort Lauderdale, 
              Hollywood, Weston, Plantation, Pembroke Pines, Coral Springs, Parkland, Davie, Victoria Park, 
              Coral Ridge, Harbor Beach, and throughout Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Plantation, building a custom home on a wooded 
              lot in Victoria Park, or preparing a commercial site in Fort Lauderdale, vegetation and tree clearing 
              prepares your site for development. We coordinate contractors with the right equipment and 
              expertise to clear your site efficiently and safely, navigating Broward County tree protection 
              standards, Natural Resource Protection Code compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Vegetation and tree clearing in Broward County typically ranges from <strong>$20,000 to $60,000</strong> for 
                residential lots, and <strong>$60,000 to $250,000+</strong> for large commercial sites, 
                subdivisions, or heavily wooded properties depending on vegetation density, tree sizes, 
                clearing scope, and permit requirements. Broward County permit processing through ePermits 
                OneStop can add time and costs. Projects involving development work as described in Florida 
                Statute 380.04 require a development permit prior to the issuance of a building permit.
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
                <h3 className={styles.serviceTitle}>Tree Protection Standards</h3>
                <p className={styles.serviceDescription}>
                  Compliance with Broward County tree protection standards including barriers, hand clearing, 
                  and double replacement for damaged trees. Tree protection ensures that trees are protected 
                  during development and that damaged trees are replaced at double the number, maintaining the 
                  county&apos;s tree canopy.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>DER Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Broward County Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable building permits. All DER submittals are only accepted electronically. 
                  Permits are valid for 180 days from the date of issuance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Natural Resource Protection Code Compliance</h3>
                <p className={styles.serviceDescription}>
                  Compliance with Broward County&apos;s Natural Resource Protection Code (Chapter 27) which 
                  regulates environmental activities and enforces requirements for development in environmentally 
                  sensitive areas, including wetlands and tree protection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>SFWMD Environmental Resource Permits</h3>
                <p className={styles.serviceDescription}>
                  Coordination of SFWMD Environmental Resource Permits for wetland impacts, especially for 
                  projects involving significant land disturbance or wetland areas. We coordinate all required 
                  SFWMD permits.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Selective Clearing</h3>
                <p className={styles.serviceDescription}>
                  Selective removal of vegetation and trees while preserving desirable trees when possible. 
                  Selective clearing maintains site aesthetics and may reduce costs while preparing areas for 
                  construction, with careful attention to Broward County tree protection standards.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Complete Clearing</h3>
                <p className={styles.serviceDescription}>
                  Complete removal of all vegetation and trees for full site development. Complete clearing 
                  prepares entire sites for construction and ensures no vegetation interferes with development, 
                  with full Natural Resource Protection Code compliance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Wetland Delineation</h3>
                <p className={styles.serviceDescription}>
                  Coordination with wetland delineation services to identify wetland boundaries and determine 
                  permit requirements. Wetland Delineation may be required for properties with wetlands, with 
                  SFWMD and Broward County regulating wetland impacts.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Protected Species Compliance</h3>
                <p className={styles.serviceDescription}>
                  Compliance with Broward County protected species regulations. Protected species clearing 
                  requires special permits and may require environmental surveys and mitigation to ensure 
                  compliance with state and federal regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Tree Removal</h3>
                <p className={styles.serviceDescription}>
                  Professional removal of trees using appropriate equipment and techniques, with full Natural 
                  Resource Protection Code compliance and tree protection standards. Tree removal includes 
                  felling, cutting, and preparation for stump removal, with attention to safety and site 
                  protection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Management</h3>
                <p className={styles.serviceDescription}>
                  Proper management of cleared vegetation and debris according to Broward County regulations. 
                  Some materials may be recycled or mulched, while others require disposal at approved facilities, 
                  with compliance with Statement of Responsibilities Regarding Asbestos (SRRA) requirements where 
                  applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Tree Clearing Regulations</h2>
            <p className={styles.text}>
              Vegetation and tree clearing in Broward County requires strict compliance with tree protection 
              standards and Natural Resource Protection Code requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Tree Protection Standards:</strong> Broward County has implemented tree protection 
                standards including barriers, hand clearing, and double replacement for damaged trees. Tree 
                removal and clearing activities must comply with these standards, with proper protection 
                measures in place during construction activities. These standards ensure that trees are 
                protected during development and that damaged trees are replaced at double the number.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for vegetation and tree clearing projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Vegetation and tree clearing 
                typically requires Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with the 
                Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements for 
                development in environmentally sensitive areas, including wetlands and tree protection. Tree 
                clearing projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Land clearing activities may require 
                SFWMD Environmental Resource Permits for wetland impacts, especially for projects involving 
                significant land disturbance or wetland areas. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Wetland Delineation:</strong> Properties with wetlands require special permits and may 
                have restrictions on clearing activities. Wetland Delineation may be required to identify 
                wetland boundaries and determine permit requirements. SFWMD and Broward County regulate wetland 
                impacts, with Natural Resource Protection Code compliance required.
              </li>
              <li>
                <strong>Protected Species:</strong> Broward County protects specific plant and animal species. 
                Protected species clearing requires special permits and may require environmental surveys and 
                mitigation to ensure compliance with state and federal regulations protecting endangered species.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from the date 
                of issuance. Permits must be used within this timeframe, with extensions possible under certain 
                circumstances. We coordinate permit timing to ensure projects proceed efficiently.
              </li>
              <li>
                <strong>Selective Preservation:</strong> Selective clearing can preserve desirable trees when 
                possible, maintaining site aesthetics and reducing costs. Tree preservation requires careful 
                planning and coordination with construction activities, with attention to Broward County tree 
                protection standards.
              </li>
              <li>
                <strong>Debris Management:</strong> Proper management of cleared vegetation and debris must 
                comply with Broward County regulations. Some materials may be recycled or mulched, while others 
                require disposal at approved facilities, with Statement of Responsibilities Regarding Asbestos 
                (SRRA) compliance where applicable.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion, especially 
                important given Broward County&apos;s frequent heavy rains and storm event protection requirements. 
                Temporary erosion control measures may be required until permanent drainage and stabilization 
                systems are installed, with compliance with Natural Resource Protection Code requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Vegetation and Tree Clearing Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your vegetation and tree clearing project in Broward County is 
              completed efficiently and in compliance with all regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, and clearing 
                requirements. Assessment includes reviewing site conditions, identifying trees to be removed or 
                preserved, determining environmental concerns including wetlands and protected species, and 
                identifying Broward County tree protection requirements.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits as 
                described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for vegetation and tree clearing projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits including 
                Uniform Building Permit Applications (updated November 14, 2025), Development & Environmental 
                Review (DER) through ePermits OneStop, SFWMD Environmental Resource Permits for wetland impacts, 
                Natural Resource Protection Code compliance, tree protection standards, and coordinate with 
                regulatory agencies. All DER submittals are only accepted electronically. Permits are valid for 180 
                days from the date of issuance.
              </li>
              <li>
                <strong>Protected Species Assessment:</strong> We assess sites for protected species and coordinate 
                required environmental surveys and permits. Protected species clearing requires special permits 
                and may require mitigation.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have the 
                right equipment (excavators, bulldozers, mulchers, tree removal equipment) and experience for your 
                specific clearing needs, with knowledge of Broward County tree protection standards and Natural 
                Resource Protection Code compliance.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree removal, and site 
                preparation according to project specifications and permit conditions. Clearing prepares sites 
                for subsequent construction activities, with full compliance with Broward County tree protection 
                standards and Natural Resource Protection Code requirements.
              </li>
              <li>
                <strong>Tree Preservation:</strong> When selective clearing is specified, contractors carefully preserve 
                desirable trees and protect them during clearing activities. Tree preservation maintains site aesthetics 
                and reduces costs, with attention to Broward County tree protection standards including barriers, 
                hand clearing, and double replacement for damaged trees.
              </li>
              <li>
                <strong>Debris Management:</strong> All cleared vegetation and debris are managed according to Broward 
                County regulations. Debris may be recycled, mulched, or disposed of at approved facilities, ensuring 
                compliance with local regulations and Statement of Responsibilities Regarding Asbestos (SRRA) 
                requirements where applicable.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors prepare sites for subsequent construction 
                activities including access road preparation and coordination with grading operations, with temporary 
                erosion control measures as required by Natural Resource Protection Code.
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
              We coordinate vegetation and tree clearing services across Broward County, including:
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
                <h3 className={styles.faqQuestion}>Do I need permits for tree clearing in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, Broward County requires development permits (Florida Statute 380.04) obtained prior to 
                  building permit issuance, Uniform Building Permit Applications from Broward County Building 
                  Code Division, Development & Environmental Review (DER) through ePermits OneStop for applicable 
                  projects, SFWMD Environmental Resource Permits for wetland impacts, Natural Resource Protection 
                  Code compliance, and tree protection standards. All DER submittals are only accepted 
                  electronically. Permits are valid for 180 days from the date of issuance. Clearing involving 
                  wetlands, protected species, or significant land disturbance requires additional permits. We 
                  help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Broward County&apos;s tree protection standards?</h3>
                <p className={styles.faqAnswer}>
                  Broward County has implemented tree protection standards including barriers, hand clearing, and 
                  double replacement for damaged trees. Tree removal and clearing activities must comply with these 
                  standards, with proper protection measures in place during construction activities. These 
                  standards ensure that trees are protected during development and that damaged trees are replaced 
                  at double the number, maintaining the county&apos;s tree canopy and environmental benefits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does vegetation and tree clearing cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Vegetation and tree clearing costs in Broward County vary significantly based on vegetation density, 
                  tree sizes, site access, and permit requirements. Typical costs range from $2,000 to $10,000 per acre 
                  for light clearing to $10,000 to $30,000+ per acre for heavy clearing with large trees. Residential 
                  lots typically range from $20,000 to $60,000, while large commercial sites can range from $60,000 to 
                  $250,000+ depending on scope. Broward County permit processing through ePermits OneStop can add time 
                  and costs. Projects requiring tree protection standards, wetland protection measures, or extensive 
                  environmental permits often cost more due to additional permit requirements and specialized techniques.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible, maintaining site aesthetics and 
                  reducing costs. We coordinate with contractors to identify trees worth preserving and plan clearing 
                  activities to protect them, with attention to Broward County tree protection standards including 
                  barriers, hand clearing, and double replacement for damaged trees. However, some trees may need to 
                  be removed due to construction requirements, disease, or safety concerns. Tree preservation requires 
                  careful planning and coordination with permit requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the Natural Resource Protection Code?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s Natural Resource Protection Code (Chapter 27) regulates environmental activities 
                  and enforces requirements for development in environmentally sensitive areas, including wetlands and 
                  tree protection. Tree clearing projects must comply with these requirements, with proper 
                  environmental protection measures. The code ensures that development activities protect natural 
                  resources and maintain environmental quality.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does permit processing take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County permit processing through ePermits OneStop varies based on project complexity and 
                  permit type. All DER submittals are only accepted electronically. Permits are valid for 180 days 
                  from the date of issuance. If additional information is required, official correspondence will 
                  identify deficiencies. We coordinate permit applications to ensure timely processing and compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and trees in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and trees in Broward County are managed according to local regulations. Some 
                  materials may be recycled or mulched for reuse, while others require disposal at approved facilities. 
                  We coordinate debris management to ensure compliance with Broward County regulations and minimize 
                  costs, with Statement of Responsibilities Regarding Asbestos (SRRA) compliance where applicable.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does vegetation and tree clearing take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Vegetation and tree clearing timelines in Broward County vary based on site size, vegetation density, 
                  clearing scope, and permit processing times. Typical residential lots take 1-3 days after permit 
                  approval, while large commercial sites or subdivisions may take 1-2 weeks depending on scope. 
                  Broward County permit processing through ePermits OneStop can add time to project timelines. Weather 
                  conditions and permit processing can affect timelines. We coordinate with contractors and regulatory 
                  agencies to complete projects efficiently.
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
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clear Your Site in Broward County?"
        description="Get a free quote for your vegetation and tree clearing project. We'll coordinate licensed contractors with the right equipment to clear your site efficiently and safely, navigating all Broward County permit requirements, tree protection standards, and Natural Resource Protection Code compliance."
        showPhone={true}
      />
    </main>
  )
}

