import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough Grading After Clearing in Miami, FL | Miami-Dade County',
  description: 'Initial grading to establish approximate site elevations and prepare for detailed work after land clearing in Miami-Dade County.',
  openGraph: {
    title: 'Rough Grading After Clearing in Miami, FL | Miami-Dade County',
    description: 'Initial grading to establish approximate site elevations and prepare for detailed work after land clearing in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-clearing-lot-preparation/rough-grading-after-clearing/`,
  },
}

export default function MiamiRoughGradingAfterClearingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Rough Grading After Clearing in Miami, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Initial grading to establish approximate site elevations and prepare for detailed work after 
                land clearing across Miami-Dade County, from Coconut Grove to Pinecrest, Coral Gables to Key 
                Biscayne. We coordinate licensed contractors to efficiently complete rough grading operations 
                with attention to Miami-Dade County DTPW standards, RER permits, DERM requirements, and flood 
                zone compliance.
              </p>
              <p className={styles.description}>
                Rough grading after clearing in Miami-Dade County establishes the initial site elevations 
                and prepares sites for detailed grading and construction. Our network of licensed contractors 
                coordinates efficient rough grading that sets the foundation for building pad preparation and 
                development, with full compliance to Miami-Dade County regulations including high water table 
                considerations, coastal soil conditions, and Miami 21 Zoning Code requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/rough-grading-after-clearing.jpg"
                alt="Rough grading after clearing services in Miami-Dade County"
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
              Rough grading after clearing in Miami-Dade County is essential for developers, general contractors, 
              property owners, and anyone who has completed land clearing and needs initial grading to establish 
              site elevations and prepare for construction across Miami neighborhoods including Coconut Grove, 
              Pinecrest, Palmetto Bay, Coral Gables, Key Biscayne, Doral, Aventura, and throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or debris hauling, rough grading 
              after clearing establishes the initial site elevations and prepares sites for detailed grading and 
              building pad preparation. We coordinate contractors to efficiently complete rough grading operations, 
              with attention to Miami-Dade County DTPW standards, RER permits, DERM requirements, and flood zone 
              compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Rough grading after clearing in Miami-Dade County typically ranges from <strong>$20,000 to $60,000</strong> for 
                residential lots, and <strong>$60,000 to $250,000+</strong> for large commercial sites 
                or properties with extensive clearing depending on site size, elevation changes, grading 
                requirements, and Miami-Dade County permit requirements. High water table conditions may 
                require additional dewatering costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Rough Grading After Clearing Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Elevation Assessment</h3>
                <p className={styles.serviceDescription}>
                  Assessment of existing site elevations and determination of target elevations for rough grading 
                  in Miami-Dade County. Elevation assessment ensures proper site preparation, establishes grading 
                  requirements, and accounts for Base Flood Elevation (BFE) requirements in flood zones.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>DTPW Standards Compliance</h3>
                <p className={styles.serviceDescription}>
                  Compliance with Miami-Dade County DTPW (Department of Transportation & Public Works) standards 
                  for grading operations. DTPW standards include "Specifications for Second Road Construction and 
                  Residential Streets" and Manual of Public Works Construction requirements for grading work.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>RER and DERM Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County RER (Regulatory and Economic Resources) and DERM (Department 
                  of Environmental Resources Management) permits for grading operations. RER permits may be required 
                  for development projects, and DERM permits may be required for environmental impacts or 
                  dewatering operations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Initial Cut and Fill</h3>
                <p className={styles.serviceDescription}>
                  Initial cut and fill operations to establish approximate site elevations. Cut and fill operations 
                  prepare sites for detailed grading and building pad preparation, with attention to Miami-Dade 
                  County high water table conditions and coastal soil characteristics.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Rough Slope Establishment</h3>
                <p className={styles.serviceDescription}>
                  Establishment of rough slopes for drainage and site preparation. Rough slope establishment 
                  ensures proper drainage patterns and prepares sites for detailed grading work, with attention to 
                  Miami-Dade County 25-year, 72-hour storm minimum design requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Building Pad Rough Grading</h3>
                <p className={styles.serviceDescription}>
                  Rough grading of building pad areas to establish approximate elevations. Building pad rough 
                  grading prepares sites for detailed pad preparation and foundation work, with attention to 
                  Miami-Dade County Base Flood Elevation (BFE) compliance and Miami 21 Zoning Code requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Access Road Preparation</h3>
                <p className={styles.serviceDescription}>
                  Rough grading of access roads and staging areas according to Miami-Dade County DTPW standards. 
                  Access road preparation ensures proper site access and prepares areas for construction activities, 
                  with compliance to county road construction specifications.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Pattern Establishment</h3>
                <p className={styles.serviceDescription}>
                  Establishment of initial drainage patterns and swale locations according to Miami-Dade County 
                  DERM requirements. Drainage pattern establishment ensures proper water flow and prepares sites 
                  for detailed drainage work, with attention to 25-year, 3-day storm event design criteria.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>High Water Table Considerations</h3>
                <p className={styles.serviceDescription}>
                  Specialized grading techniques for Miami-Dade County high water table conditions. High water 
                  table may require dewatering operations with DERM Class V Permits, and affects grading methods 
                  and soil compaction requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Rough Grading vs. Final Grading</h2>
            <p className={styles.text}>
              Rough grading and final grading serve different purposes in site preparation in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Rough Grading:</strong> Rough grading establishes approximate site elevations and prepares 
                sites for detailed work. Rough grading typically involves larger elevation changes and establishes 
                basic site contours and drainage patterns. In Miami-Dade County, rough grading must account for 
                Base Flood Elevation (BFE) requirements in flood zones and Miami 21 Zoning Code compliance.
              </li>
              <li>
                <strong>Final Grading:</strong> Final grading refines site elevations to precise specifications and 
                prepares sites for construction. Final grading typically involves smaller elevation adjustments 
                and precise contour work. In Miami-Dade County, final grading must meet exact DTPW standards and 
                permit requirements.
              </li>
              <li>
                <strong>Building Pad Preparation:</strong> Rough grading establishes approximate building pad 
                elevations, while final grading prepares pads to exact specifications. Both stages are essential 
                for proper site preparation, with rough grading establishing BFE compliance and final grading 
                meeting precise elevation requirements.
              </li>
              <li>
                <strong>Drainage Preparation:</strong> Rough grading establishes initial drainage patterns, while 
                final grading refines drainage features to precise specifications. Both stages ensure proper water 
                management, with rough grading establishing basic patterns and final grading meeting DERM 25-year, 
                3-day storm event design criteria.
              </li>
              <li>
                <strong>Timing:</strong> Rough grading typically occurs immediately after clearing, while final 
                grading occurs closer to construction. Proper sequencing ensures efficient site preparation and 
                prevents erosion and drainage issues in Miami-Dade County&apos;s heavy rainfall conditions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Rough Grading Considerations</h2>
            <p className={styles.text}>
              Rough grading after clearing in Miami-Dade County requires attention to local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DTPW Standards:</strong> Miami-Dade County DTPW (Department of Transportation & Public Works) 
                standards include "Specifications for Second Road Construction and Residential Streets" and Manual 
                of Public Works Construction requirements for grading operations. DTPW standards ensure proper 
                grading work and compliance with county requirements.
              </li>
              <li>
                <strong>RER and DERM Permits:</strong> Rough grading may require RER (Regulatory and Economic Resources) 
                permits for development projects and DERM (Department of Environmental Resources Management) permits 
                for environmental impacts or dewatering operations. Permit coordination ensures compliance with 
                Miami-Dade County regulations.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade County&apos;s high water table affects grading operations 
                and may require dewatering with DERM Class V Permits or specialized techniques. High water table 
                considerations ensure proper site preparation and affect grading methods and soil compaction 
                requirements.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones (AE, VE, AH, AO, X zones) may have 
                specific elevation requirements for rough grading, including Base Flood Elevation (BFE) compliance. 
                Flood zone compliance ensures proper site preparation and regulatory compliance.
              </li>
              <li>
                <strong>Coastal Soils:</strong> Coastal soils in Miami-Dade County may require specialized grading 
                techniques and compaction methods. Soil considerations ensure proper site stability and preparation, 
                with attention to limestone bedrock and sandy soil conditions.
              </li>
              <li>
                <strong>Miami 21 Zoning Code:</strong> Rough grading must comply with Miami 21 Zoning Code requirements 
                including setbacks, height restrictions, and development standards. Zoning compliance ensures proper 
                site preparation and regulatory compliance.
              </li>
              <li>
                <strong>Drainage Patterns:</strong> Initial drainage patterns established during rough grading must 
                account for Miami-Dade County&apos;s 25-year, 72-hour storm minimum design requirements and DERM 
                standards. Drainage considerations ensure proper water management and prepare sites for detailed 
                drainage work.
              </li>
              <li>
                <strong>Erosion Control:</strong> Rough grading operations must include erosion control measures to 
                prevent soil loss and water quality issues. Erosion control ensures proper site protection and 
                compliance with Miami-Dade County environmental requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Rough Grading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your rough grading after clearing in Miami-Dade County is completed 
              efficiently and prepares sites for detailed work:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify existing elevations, target 
                elevations, and grading requirements. Assessment determines rough grading needs, establishes work 
                scope, and identifies Miami-Dade County flood zone requirements and Base Flood Elevation (BFE) 
                compliance needs.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required RER and DERM permits for rough grading 
                operations and coordinate with Miami-Dade County regulatory agencies. Permits ensure compliance with 
                DTPW standards, Miami 21 Zoning Code, and environmental requirements.
              </li>
              <li>
                <strong>Elevation Planning:</strong> We plan rough grading operations to establish approximate site 
                elevations with attention to Base Flood Elevation (BFE) requirements in flood zones. Elevation 
                planning ensures proper site preparation and establishes grading requirements.
              </li>
              <li>
                <strong>Dewatering (if required):</strong> For sites with high water table conditions, contractors 
                perform dewatering operations with DERM Class V Permits. Dewatering ensures proper grading conditions 
                and prevents water-related complications.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have the 
                right equipment and experience for rough grading operations in Miami-Dade County, with knowledge of 
                DTPW standards, high water table conditions, and coastal soil characteristics.
              </li>
              <li>
                <strong>Cut and Fill Operations:</strong> Contractors perform initial cut and fill operations to 
                establish approximate site elevations. Cut and fill operations prepare sites for detailed grading work, 
                with attention to Miami-Dade County high water table conditions and coastal soil characteristics.
              </li>
              <li>
                <strong>Rough Slope Establishment:</strong> Rough slopes are established for drainage and site 
                preparation according to Miami-Dade County DERM 25-year, 72-hour storm minimum design requirements. 
                Rough slope establishment ensures proper drainage patterns and prepares sites for detailed work.
              </li>
              <li>
                <strong>Building Pad Rough Grading:</strong> Building pad areas are rough graded to establish 
                approximate elevations with attention to Base Flood Elevation (BFE) compliance and Miami 21 Zoning 
                Code requirements. Building pad rough grading prepares sites for detailed pad preparation.
              </li>
              <li>
                <strong>Drainage Pattern Establishment:</strong> Initial drainage patterns and swale locations are 
                established according to Miami-Dade County DERM requirements. Drainage pattern establishment ensures 
                proper water flow and prepares sites for detailed drainage work.
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
              We coordinate rough grading after clearing services across Miami-Dade County, including:
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading establishes approximate site elevations and prepares sites for detailed work, while 
                  final grading refines elevations to precise specifications and prepares sites for construction. 
                  Rough grading typically involves larger elevation changes, while final grading involves smaller, 
                  precise adjustments. In Miami-Dade County, rough grading must account for Base Flood Elevation 
                  (BFE) requirements in flood zones and Miami 21 Zoning Code compliance, while final grading must 
                  meet exact DTPW standards and permit requirements. Both stages are essential for proper site 
                  preparation.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does rough grading after clearing cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading after clearing costs in Miami-Dade County vary based on site size, elevation changes, 
                  grading requirements, and permit requirements. Typical residential lots range from $20,000 to 
                  $60,000, while large commercial sites can range from $60,000 to $250,000+ depending on scope. High 
                  water table conditions may require additional dewatering costs. Factors affecting cost include site 
                  size, elevation changes, grading complexity, and Miami-Dade County permit requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>When should rough grading be done after clearing in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading should typically be done immediately after clearing and debris removal to establish 
                  site elevations and prepare for detailed work. Proper sequencing ensures efficient site preparation 
                  and prevents erosion and drainage issues in Miami-Dade County&apos;s heavy rainfall conditions. 
                  Rough grading establishes the foundation for detailed grading and building pad preparation, with 
                  attention to Base Flood Elevation (BFE) compliance and Miami 21 Zoning Code requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for rough grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading in Miami-Dade County may require RER (Regulatory and Economic Resources) permits for 
                  development projects and DERM (Department of Environmental Resources Management) permits for 
                  environmental impacts or dewatering operations. DTPW standards must be followed for grading work. 
                  We help identify and coordinate all required permits and compliance requirements for your rough 
                  grading project.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does high water table affect rough grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County&apos;s high water table affects grading operations and may require dewatering with 
                  DERM Class V Permits or specialized techniques. High water table conditions affect grading methods, 
                  soil compaction requirements, and may add costs to projects. Proper dewatering coordination ensures 
                  proper grading conditions and prevents water-related complications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does rough grading after clearing take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading after clearing timelines in Miami-Dade County vary based on site size, elevation 
                  changes, grading requirements, and permit processing times. Typical residential lots take 2-5 days 
                  after permit approval, while large commercial sites may take 1-3 weeks depending on scope. High water 
                  table conditions requiring dewatering may add time to projects. Weather conditions, permit processing, 
                  and site access can affect timelines. We coordinate operations to complete projects efficiently.
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
              <a href="/services/land-clearing-lot-preparation/rough-grading-after-clearing/" className={styles.backLink}>
                ← View General Rough Grading After Clearing Services
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
        title="Ready to Start Rough Grading in Miami-Dade County?"
        description="Get a free quote for your rough grading after clearing project. We'll coordinate licensed contractors to efficiently establish site elevations and prepare your site for detailed work, with full compliance to Miami-Dade County DTPW standards, RER permits, and DERM requirements."
        showPhone={true}
      />
    </main>
  )
}

