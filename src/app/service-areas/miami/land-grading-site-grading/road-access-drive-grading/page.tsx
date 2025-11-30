import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Road & Access Drive Grading in Miami, FL | Miami-Dade County',
  description: 'Professional road and access drive grading services in Miami-Dade County. Proper crown, cross-slopes, and drainage features for subdivision infrastructure.',
  openGraph: {
    title: 'Road & Access Drive Grading in Miami, FL | Miami-Dade County',
    description: 'Professional road and access drive grading services in Miami-Dade County with proper drainage and infrastructure preparation.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/road-access-drive-grading/`,
  },
}

export default function MiamiRoadAccessDriveGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Road and Access Drive Grading in Miami, FL"
        subtitle="Professional grading for roads, access drives, and subdivision infrastructure across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Road and access drive grading services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Road and access drive grading services in Miami-Dade County are essential for developers, 
              general contractors, subdivision developers, commercial property owners, and anyone preparing 
              roadways for paving or infrastructure installation in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Homestead, building access roads for a 
              commercial development in Doral, or upgrading existing roadways in Aventura, proper grading 
              ensures water drains correctly, provides safe vehicle access, and meets engineering 
              specifications. We coordinate licensed contractors with the right equipment and expertise 
              for your specific Miami-Dade County project needs, including compliance with Miami-Dade 
              DTPW (Department of Transportation & Public Works) requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Road and access drive grading projects in Miami-Dade County typically range from 
                <strong> $30,000 to $100,000</strong> for single access drives, and 
                <strong> $100,000 to $500,000+</strong> for subdivision road networks depending on length, 
                width, drainage requirements, flood zone considerations, and site conditions. Projects in 
                flood zones or requiring significant elevation adjustments often cost more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Road and Access Drive Grading Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Crown Grading</h3>
              <p className={styles.serviceDescription}>
                Creating proper crown (center high point) in roadways to direct water to the sides and 
                into drainage systems. Crown grading prevents water from pooling in the center of roads 
                and ensures proper drainage flow, essential given Miami-Dade&apos;s heavy rainfall and 
                flat topography. Typical crown height is 2-4 inches above the edges.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cross-Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Establishing proper cross-slopes (typically 2-3%) across road width to direct water to 
                roadside drainage. Cross-slopes must be consistent along the entire road length for 
                effective water management, meeting Miami-Dade DTPW specifications for subdivision roads.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Longitudinal Slope Grading</h3>
              <p className={styles.serviceDescription}>
                Grading along the road length to achieve proper longitudinal slopes (typically 0.5-6% 
                minimum) for drainage while maintaining safe vehicle access. Slopes must balance drainage 
                needs with vehicle safety requirements, meeting Miami-Dade County road construction standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subgrade Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and compaction of subgrade material to proper elevations and density for base 
                course and pavement installation. Subgrade must be properly graded to support road loads 
                and prevent settlement, accounting for Miami-Dade&apos;s high water table and coastal 
                soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Feature Grading</h3>
              <p className={styles.serviceDescription}>
                Grading around catch basins, swales, and drainage inlets to ensure proper water flow into 
                drainage systems. Road grading must work in conjunction with drainage infrastructure for 
                effective water management, meeting Miami-Dade County requirements for curbs, gutters, and 
                drainage structures.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Transition Grading</h3>
              <p className={styles.serviceDescription}>
                Smooth transitions between different road sections, intersections, and connections to 
                existing roadways. Transition grading ensures smooth vehicle access and proper drainage 
                flow at connection points, meeting Miami-Dade DTPW requirements for road connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Road Grading Considerations</h2>
            <p className={styles.text}>
              Grading for roads and access drives in Miami-Dade County requires specialized knowledge of 
              local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Miami-Dade DTPW Standards:</strong> All streets within subdivisions must be 
                constructed and surfaced in accordance with Miami-Dade County&apos;s "Specifications for 
                Second Road Construction and Residential Streets" or the requirements outlined in the 
                County&apos;s Manual of Public Works Construction administered by the DTPW. All street 
                construction is subject to inspection by the governing body and requires permit issuance 
                before work can proceed.
              </li>
              <li>
                <strong>Required Infrastructure:</strong> Road grading must coordinate with required 
                infrastructure including curbs, gutters, drainage structures, and associated drainage 
                systems according to standard specifications. Sidewalks are required in residential, 
                multiple-family, and business areas, as well as along all arterial highways. Street name 
                signs must be placed at all intersections and approved by the County&apos;s Director of 
                Traffic and Transportation.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Roads must be graded to direct water to 
                stormwater inlets, swales, or retention areas to meet South Florida Water Management 
                District (SFWMD) and Miami-Dade County requirements. Proper grading prevents flooding and 
                reduces stormwater runoff into roadways, essential given Miami-Dade&apos;s heavy rainfall.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table affects subgrade 
                preparation and may require additional base course material or elevation adjustments. 
                Proper drainage is critical to prevent water from undermining road foundations, especially 
                in areas like Miami Beach, Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Roads in flood zones may need to be graded to 
                specific elevations above base flood elevation. This affects grading depth and may require 
                additional fill material or elevation adjustments, particularly in coastal areas like 
                Miami Beach, Key Biscayne, and Aventura.
              </li>
              <li>
                <strong>Guardrails and Traffic Barriers:</strong> Where streets are adjacent to or abut 
                canals, lakes, or other bodies of water, guardrails or other traffic barriers must be 
                installed to prevent vehicles from entering these water bodies. Road grading must account 
                for these safety requirements.
              </li>
              <li>
                <strong>RER and DTPW Permits:</strong> Road grading requires permits from Miami-Dade RER 
                (for unincorporated areas) or municipal building departments (for incorporated areas), and 
                DTPW permits for subdivision roads. Projects may require additional permits from SFWMD for 
                stormwater management. All construction is subject to inspection by the governing body.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Road Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate road and access drive grading services throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Kendall</li>
                  <li>Cutler Bay</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Westchester</li>
                  <li>Miami Lakes</li>
                  <li>Miami Gardens</li>
                  <li>Hialeah</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Pinecrest</li>
                  <li>Palmetto Bay</li>
                  <li>South Miami</li>
                  <li>Coral Gables</li>
                  <li>Aventura</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Sunny Isles Beach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Road and Access Drive Grading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your road or access drive meets all specifications and 
              regulatory requirements in Miami-Dade County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, road design, and 
                site plans to understand grading requirements. This includes identifying drainage points, 
                utility locations, flood zone considerations, and any site constraints specific to 
                Miami-Dade County conditions.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required grading permits 
                including Miami-Dade RER building permits (for unincorporated areas) or municipal building 
                department permits (for incorporated areas), DTPW permits for subdivision roads, SFWMD 
                permits for stormwater management, and coordinate with regulatory agencies. All street 
                construction requires permit issuance before work can proceed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (motor graders, compactors, laser-guided systems) and experience 
                for precise road grading in Miami-Dade County, including expertise with DTPW specifications 
                and subdivision infrastructure requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve approximate 
                elevations and establish the general road profile. This establishes the basic grade and 
                prepares the area for fine grading, accounting for Miami-Dade&apos;s high water table and 
                coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings. Fine grading creates proper 
                crown, cross-slopes, and longitudinal slopes, meeting Miami-Dade DTPW specifications for 
                subdivision roads.
              </li>
              <li>
                <strong>Subgrade Compaction:</strong> Proper compaction of subgrade material to meet 
                engineering specifications for road foundation support. Compaction testing ensures subgrade 
                meets density requirements, accounting for Miami-Dade&apos;s unique soil characteristics 
                including limestone bedrock and sandy soils.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Miami-Dade 
                RER or municipal building departments, DTPW (for subdivision roads), engineers, and paving 
                contractors to ensure the graded road meets all specifications, DTPW standards, and is ready 
                for base course and paving. All construction is subject to inspection by the governing body 
                or their designated representatives.
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
                <h3 className={styles.faqQuestion}>What are Miami-Dade DTPW requirements for subdivision roads?</h3>
                <p className={styles.faqAnswer}>
                  All streets within subdivisions in Miami-Dade County must be constructed and surfaced in 
                  accordance with the County&apos;s "Specifications for Second Road Construction and 
                  Residential Streets" or the requirements outlined in the County&apos;s Manual of Public 
                  Works Construction administered by the DTPW. Road grading must coordinate with required 
                  infrastructure including curbs, gutters, drainage structures, sidewalks, and street name 
                  signs. All street construction is subject to inspection by the governing body and requires 
                  permit issuance before work can proceed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What slope is required for road drainage in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Roads in Miami-Dade County typically require a minimum longitudinal slope of 0.5% (0.5 
                  feet of fall per 100 feet) for drainage, with a maximum of 6% for vehicle safety. 
                  Cross-slopes should be 2-3% to direct water to roadside drainage. Crown grading creates a 
                  center high point (typically 2-4 inches above edges) with water flowing to the sides. 
                  Proper slopes prevent water from pooling and ensure effective drainage, essential given 
                  Miami-Dade&apos;s heavy rainfall and flat topography.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for subdivision road grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision road grading in Miami-Dade County requires building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas), and 
                  DTPW permits for subdivision roads. Projects may require additional permits from SFWMD for 
                  stormwater management. All street construction requires permit issuance before work can 
                  proceed and is subject to inspection by the governing body or their designated 
                  representatives. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does access drive grading cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Access drive grading costs in Miami-Dade County vary based on length, width, site conditions, 
                  flood zone requirements, and drainage requirements. Typical single access drives range from 
                  $30,000 to $100,000, while subdivision road networks can range from $100,000 to $500,000+ 
                  depending on scope. Factors affecting cost include site access, required earthwork, flood 
                  zone elevation requirements, and drainage complexity. Projects in flood zones or requiring 
                  significant elevation adjustments often cost more.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What infrastructure is required with subdivision roads in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision roads in Miami-Dade County must include curbs, gutters, drainage structures, 
                  and associated drainage systems according to standard specifications. Sidewalks are required 
                  in residential, multiple-family, and business areas, as well as along all arterial highways. 
                  Street name signs must be placed at all intersections and approved by the County&apos;s 
                  Director of Traffic and Transportation. Where streets are adjacent to canals, lakes, or 
                  other bodies of water, guardrails or traffic barriers must be installed. Road grading must 
                  coordinate with all required infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.text}>
              <a href="/services/land-grading-site-grading/road-access-drive-grading/" className={styles.backLink}>
                ← View Road and Access Drive Grading (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/miami/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Miami Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Road or Access Drive Grading Project?"
        description="Get a free quote for your road or access drive grading project in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade DTPW requirements, subdivision infrastructure standards, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

