import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough Grading After Clearing in West Palm Beach, FL | Palm Beach County',
  description: 'Initial grading to establish approximate site elevations and prepare for detailed work after land clearing in Palm Beach County.',
  openGraph: {
    title: 'Rough Grading After Clearing in West Palm Beach, FL | Palm Beach County',
    description: 'Initial grading to establish approximate site elevations and prepare for detailed work after land clearing in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-clearing-lot-preparation/rough-grading-after-clearing/`,
  },
}

export default function WestPalmBeachRoughGradingAfterClearingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Rough Grading After Clearing in West Palm Beach, FL"
        subtitle="Initial grading to establish approximate site elevations and prepare for detailed work after land clearing across Palm Beach County, from West Palm Beach to Palm Beach, Jupiter to Wellington, Royal Palm Beach to The Acreage"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Rough grading after clearing services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Rough grading after clearing in Palm Beach County is essential for developers, general contractors, 
              property owners, and anyone who has completed land clearing and needs initial grading to establish 
              site elevations and prepare for construction across Palm Beach County neighborhoods including West 
              Palm Beach, Palm Beach, Jupiter, Wellington, Royal Palm Beach, The Acreage, Loxahatchee, Boca Raton, 
              Delray Beach, Palm Beach Gardens, and throughout Palm Beach County.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or debris hauling, rough grading 
              after clearing establishes the initial site elevations and prepares sites for detailed grading and 
              building pad preparation. We coordinate contractors to efficiently complete rough grading operations, 
              with attention to Palm Beach County Building Division permits, Environmental Resources Management (ERM) 
              review, Unified Land Development Code (ULDC) compliance, and hurricane preparedness requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Rough grading after clearing in Palm Beach County typically ranges from <strong>$20,000 to $60,000</strong> for 
                residential lots, and <strong>$60,000 to $250,000+</strong> for large commercial sites 
                or properties with extensive clearing depending on site size, elevation changes, grading 
                requirements, and Palm Beach County permit requirements. High water table conditions may 
                require additional dewatering costs (SFWMD Environmental Resource Permits).
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
                  in Palm Beach County. Elevation assessment ensures proper site preparation, establishes grading 
                  requirements, and accounts for Base Flood Elevation (BFE) requirements in flood zones.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Building Division Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Palm Beach County Building Division permits for applicable building permits. 
                  Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                  Florida Building Code and Palm Beach County requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Unified Land Development Code Compliance</h3>
                <p className={styles.serviceDescription}>
                  Compliance with Palm Beach County&apos;s Unified Land Development Code (ULDC) which 
                  regulates environmental activities and enforces requirements for development in environmentally 
                  sensitive areas. Rough grading must comply with these requirements, with proper environmental 
                  protection measures.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Initial Cut and Fill</h3>
                <p className={styles.serviceDescription}>
                  Initial cut and fill operations to establish approximate site elevations. Cut and fill operations 
                  prepare sites for detailed grading and building pad preparation, with attention to Palm Beach County 
                  high water table conditions and coastal soil characteristics.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Rough Slope Establishment</h3>
                <p className={styles.serviceDescription}>
                  Establishment of rough slopes for drainage and site preparation. Rough slope establishment 
                  ensures proper drainage patterns and prepares sites for detailed grading work, with attention to 
                  Palm Beach County hurricane preparedness requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Building Pad Rough Grading</h3>
                <p className={styles.serviceDescription}>
                  Rough grading of building pad areas to establish approximate elevations. Building pad rough 
                  grading prepares sites for detailed pad preparation and foundation work, with attention to 
                  Palm Beach County Base Flood Elevation (BFE) compliance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Access Road Preparation</h3>
                <p className={styles.serviceDescription}>
                  Rough grading of access roads and staging areas according to Palm Beach County requirements. 
                  Access road preparation ensures proper site access and prepares areas for construction activities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage Pattern Establishment</h3>
                <p className={styles.serviceDescription}>
                  Establishment of initial drainage patterns and swale locations according to Palm Beach County 
                  requirements. Drainage pattern establishment ensures proper water flow and prepares sites 
                  for detailed drainage work, with attention to Unified Land Development Code (ULDC) compliance.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>High Water Table Considerations</h3>
                <p className={styles.serviceDescription}>
                  Specialized grading techniques for Palm Beach County high water table conditions. High water 
                  table may require dewatering operations with SFWMD Environmental Resource Permits, and affects 
                  grading methods and soil compaction requirements.
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
              Rough grading and final grading serve different purposes in site preparation in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Rough Grading:</strong> Rough grading establishes approximate site elevations and prepares 
                sites for detailed work. Rough grading typically involves larger elevation changes and establishes 
                basic site contours and drainage patterns. In Palm Beach County, rough grading must account for 
                Base Flood Elevation (BFE) requirements in flood zones.
              </li>
              <li>
                <strong>Final Grading:</strong> Final grading refines site elevations to precise specifications and 
                prepares sites for construction. Final grading typically involves smaller elevation adjustments 
                and precise contour work. In Palm Beach County, final grading must meet exact Building Division 
                standards and permit requirements.
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
                management, with rough grading establishing basic patterns and final grading meeting regulatory 
                requirements.
              </li>
              <li>
                <strong>Timing:</strong> Rough grading typically occurs immediately after clearing, while final 
                grading occurs closer to construction. Proper sequencing ensures efficient site preparation and 
                prevents erosion and drainage issues in Palm Beach County&apos;s heavy rainfall conditions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Rough Grading Considerations</h2>
            <p className={styles.text}>
              Rough grading after clearing in Palm Beach County requires attention to local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> Palm Beach County Building Division permits are required 
                for applicable building permits. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in Florida 
                Statute 380.04 require a development permit prior to the issuance of a building permit. This is a 
                critical prerequisite for rough grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Rough grading may require Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas. ERM ensures that proposed projects 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land Development 
                Code (ULDC) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas. Rough grading must comply with these requirements, with proper 
                environmental protection measures.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table affects grading operations 
                and may require dewatering with SFWMD Environmental Resource Permits or specialized techniques. High 
                water table considerations ensure proper site preparation and affect grading methods and soil compaction 
                requirements.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones (AE, VE, AH, AO, A, X zones) may 
                have specific elevation requirements for rough grading, including Base Flood Elevation (BFE) compliance. 
                Flood zone compliance ensures proper site preparation and regulatory compliance.
              </li>
              <li>
                <strong>Coastal Soils:</strong> Coastal soils in Palm Beach County may require specialized grading 
                techniques and compaction methods. Soil considerations ensure proper site stability and preparation, 
                with attention to limestone bedrock and sandy soil conditions.
              </li>
              <li>
                <strong>Drainage Patterns:</strong> Initial drainage patterns established during rough grading must 
                account for Palm Beach County&apos;s hurricane preparedness requirements and Unified Land Development Code (ULDC) 
                compliance. Drainage considerations ensure proper water management and prepare sites for detailed 
                drainage work.
              </li>
              <li>
                <strong>Erosion Control:</strong> Rough grading operations must include erosion control measures to 
                prevent soil loss and water quality issues. Erosion control ensures proper site protection and 
                compliance with Palm Beach County environmental requirements and Unified Land Development Code (ULDC).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Rough Grading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your rough grading after clearing in Palm Beach County is completed 
              efficiently and prepares sites for detailed work:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify existing elevations, target 
                elevations, and grading requirements. Assessment determines rough grading needs, establishes work 
                scope, and identifies Palm Beach County flood zone requirements and Base Flood Elevation (BFE) 
                compliance needs.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits as 
                described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for rough grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits including 
                Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for dewatering operations, 
                Unified Land Development Code (ULDC) compliance, and coordinate with regulatory 
                agencies. Permits ensure compliance with Palm Beach County regulations.
              </li>
              <li>
                <strong>Elevation Planning:</strong> We plan rough grading operations to establish approximate site 
                elevations with attention to Base Flood Elevation (BFE) requirements in flood zones. Elevation planning ensures proper site preparation and establishes grading requirements.
              </li>
              <li>
                <strong>Dewatering (if required):</strong> For sites with high water table conditions, contractors 
                perform dewatering operations with SFWMD Environmental Resource Permits. Dewatering ensures proper 
                grading conditions and prevents water-related complications.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have the 
                right equipment and experience for rough grading operations in Palm Beach County, with knowledge of 
                Building Division requirements, high water table conditions, and coastal soil 
                characteristics.
              </li>
              <li>
                <strong>Cut and Fill Operations:</strong> Contractors perform initial cut and fill operations to 
                establish approximate site elevations. Cut and fill operations prepare sites for detailed grading work, 
                with attention to Palm Beach County high water table conditions and coastal soil characteristics.
              </li>
              <li>
                <strong>Rough Slope Establishment:</strong> Rough slopes are established for drainage and site 
                preparation according to Palm Beach County hurricane preparedness requirements. Rough slope 
                establishment ensures proper drainage patterns and prepares sites for detailed work.
              </li>
              <li>
                <strong>Building Pad Rough Grading:</strong> Building pad areas are rough graded to establish 
                approximate elevations with attention to Base Flood Elevation (BFE) compliance. Building pad rough grading 
                prepares sites for detailed pad preparation.
              </li>
              <li>
                <strong>Drainage Pattern Establishment:</strong> Initial drainage patterns and swale locations are 
                established according to Palm Beach County requirements. Drainage pattern establishment ensures proper 
                water flow and prepares sites for detailed drainage work, with attention to Unified Land Development Code (ULDC) compliance.
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
              We coordinate rough grading after clearing services across Palm Beach County, including:
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading establishes approximate site elevations and prepares sites for detailed work, while 
                  final grading refines elevations to precise specifications and prepares sites for construction. 
                  Rough grading typically involves larger elevation changes, while final grading involves smaller, 
                  precise adjustments. In Palm Beach County, rough grading must account for Base Flood Elevation (BFE) 
                  requirements in flood zones, while final grading must meet exact 
                  Building Division standards and permit requirements. Both stages are essential 
                  for proper site preparation.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does rough grading after clearing cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading after clearing costs in Palm Beach County vary based on site size, elevation changes, 
                  grading requirements, and permit requirements. Typical residential lots range from $20,000 to 
                  $60,000, while large commercial sites can range from $60,000 to $250,000+ depending on scope. High 
                  water table conditions may require additional dewatering costs (SFWMD Environmental Resource Permits). 
                  Factors affecting cost include site size, elevation changes, grading complexity, and Palm Beach County 
                  permit requirements. Palm Beach County permit processing through Building Division and ERM review can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>When should rough grading be done after clearing in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading should typically be done immediately after clearing and debris removal to establish 
                  site elevations and prepare for detailed work. Proper sequencing ensures efficient site preparation 
                  and prevents erosion and drainage issues in Palm Beach County&apos;s heavy rainfall conditions. 
                  Rough grading establishes the foundation for detailed grading and building pad preparation, with 
                  attention to Base Flood Elevation (BFE) compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for rough grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading in Palm Beach County may require development permits (Florida Statute 380.04), Building Division permits, Environmental Resources Management (ERM) review for 
                  projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for dewatering operations, and 
                  Unified Land Development Code (ULDC) compliance. We help identify and coordinate all 
                  required permits and compliance requirements for your rough grading project.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does high water table affect rough grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table affects grading operations and may require dewatering with 
                  SFWMD Environmental Resource Permits or specialized techniques. High water table conditions affect 
                  grading methods, soil compaction requirements, and may add costs to projects. Proper dewatering 
                  coordination ensures proper grading conditions and prevents water-related complications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does rough grading after clearing take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading after clearing timelines in Palm Beach County vary based on site size, elevation 
                  changes, grading requirements, and permit processing times. Typical residential lots take 2-5 days 
                  after permit approval, while large commercial sites may take 1-3 weeks depending on scope. High water 
                  table conditions requiring dewatering may add time to projects. Weather conditions, permit processing 
                  through Building Division and ERM review, and site access can affect timelines. We coordinate operations to complete 
                  projects efficiently.
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
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to West Palm Beach Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Rough Grading in Palm Beach County?"
        description="Get a free quote for your rough grading after clearing project. We'll coordinate licensed contractors to efficiently establish site elevations and prepare your site for detailed work, with full compliance to Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, and hurricane preparedness requirements."
        showPhone={true}
      />
    </main>
  )
}

