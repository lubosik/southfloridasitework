import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough & Final Grading for Developments in Miami, FL | Miami-Dade',
  description: 'Complete rough and final grading services for new developments in Miami-Dade County. Site preparation from initial earthmoving to precise elevations before building construction.',
  openGraph: {
    title: 'Rough & Final Grading for Developments in Miami, FL | Miami-Dade',
    description: 'Complete rough and final grading services for new developments in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/rough-final-grading-developments/`,
  },
}

export default function MiamiRoughFinalGradingDevelopmentsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Rough and Final Grading for New Developments in Miami, FL"
        subtitle="Complete grading services for new developments across Miami-Dade County, from rough grading to final elevations"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Rough and final grading for new developments in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Rough and final grading services in Miami-Dade County are essential for developers, general 
              contractors, subdivision developers, and anyone preparing large sites for new construction 
              projects in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Homestead, a commercial complex in Doral, 
              or a multi-phase residential project in Kendall, proper grading sequencing ensures site 
              preparation is completed efficiently and meets all engineering specifications. We coordinate 
              licensed contractors to handle both rough and final grading phases, navigating Miami-Dade 
              RER, DERM, and DTPW requirements with expertise.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Rough and final grading for new developments in Miami-Dade County typically range from 
                <strong> $50,000 to $200,000</strong> for smaller developments, and 
                <strong> $200,000 to $1,000,000+</strong> for large subdivision or commercial developments 
                depending on site size, required earthwork, flood zone requirements, number of lots or 
                building pads, and site conditions. Projects in flood zones or requiring significant 
                elevation adjustments often cost more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Rough and Final Grading Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading</h3>
              <p className={styles.serviceDescription}>
                Initial earthmoving to achieve approximate elevations and establish general site grades. 
                Rough grading removes excess material or adds fill to bring the site to within a few 
                inches of final elevations, preparing the site for fine grading work and utility 
                installation, accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fine Grading</h3>
              <p className={styles.serviceDescription}>
                Precise grading work using laser-guided equipment to achieve exact elevations specified 
                in engineering drawings, typically within 0.1 feet of specified elevations. Fine grading 
                creates the exact slopes and contours required for building pads, roads, and infrastructure, 
                ensuring Base Flood Elevation (BFE) compliance for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Grading individual building pads to precise elevations for foundation construction. Each 
                building pad must be graded to exact elevations and slopes specified in engineering 
                drawings, with proper compaction for foundation support, meeting Miami-Dade building code 
                requirements and Base Flood Elevation (BFE) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Infrastructure Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and infrastructure to proper elevations and slopes, 
                meeting Miami-Dade DTPW specifications for subdivision roads. Road grading includes proper 
                crown, cross-slopes, and drainage features to ensure effective water management and safe 
                vehicle access.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Grading</h3>
              <p className={styles.serviceDescription}>
                Grading to create proper drainage slopes and direct water to stormwater systems. Drainage 
                grading ensures water flows away from structures and toward drainage inlets, swales, or 
                retention areas as specified in drainage design, meeting South Florida Water Management 
                District (SFWMD) and Miami-Dade County requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Site Preparation</h3>
              <p className={styles.serviceDescription}>
                Final grading and site preparation to ensure all areas meet engineering specifications and 
                are ready for building construction. This includes final compaction, elevation verification, 
                and coordination with building contractors, ensuring compliance with Miami-Dade RER 
                requirements and permit conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Development Grading Considerations</h2>
            <p className={styles.text}>
              Grading for new developments in Miami-Dade County requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Chapter 28 Subdivision Code:</strong> All development within unincorporated 
                Miami-Dade County must comply with Chapter 28 of the Miami-Dade County Subdivision Code, 
                which mandates that all parcels have public access. Developers must post a Subdivision 
                Improvement Bond and provide an Agreement for Construction and Maintenance of Subdivision 
                Improvements, with the bond amount determined by a Construction Cost Estimate calculated 
                by a County Engineer derived from approved Paving and Drainage (P&D) Plans.
              </li>
              <li>
                <strong>Phased Grading Operations:</strong> Large developments require phased grading to 
                coordinate with utility installation, road construction, and building schedules. Rough 
                grading establishes general grades, while final grading is completed just before building 
                construction. Grading must be sequenced properly with infrastructure work to meet 
                Miami-Dade DTPW requirements.
              </li>
              <li>
                <strong>RER and DERM Permits:</strong> Development grading requires permits from Miami-Dade 
                RER (for unincorporated areas) or municipal building departments (for incorporated areas), 
                and DERM environmental resource permits for land disturbance. Large developments may require 
                phased permit approvals and coordination with multiple regulatory agencies. Effective 
                October 1, 2025, Miami-Dade implemented updated permit fees.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Development grading must incorporate proper 
                drainage and stormwater management to meet South Florida Water Management District (SFWMD) 
                and Miami-Dade County requirements. Grading must work in conjunction with retention areas 
                and drainage systems as specified in approved Paving and Drainage (P&D) Plans.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Developments in flood zones must have building 
                pads and infrastructure graded to specific elevations above Base Flood Elevation (BFE). 
                This affects grading depth and may require additional fill material, particularly in 
                coastal areas like Miami Beach, Key Biscayne, and Aventura.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects grading depth and compaction. Proper 
                dewatering may be required, and building pads may need to be elevated above the water 
                table for foundation stability, especially in areas like Miami Beach, Aventura, and 
                coastal neighborhoods.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> All grading must meet exact elevations and 
                slopes specified in engineering drawings, typically within 0.1 feet of specified grades. 
                Contractors must have the equipment and expertise to achieve precise elevations. A site 
                plan and grading plan, prepared by a licensed surveyor or engineer, must be submitted with 
                the building permit application.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Development Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate rough and final grading services for new developments throughout Miami-Dade 
              County, including:
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
            <h2 className={styles.heading}>The Development Grading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your development grading meets all specifications and 
              regulatory requirements in Miami-Dade County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, site plans, 
                Paving and Drainage (P&D) Plans, and development schedule to understand grading 
                requirements and identify any challenges. This includes coordinating with utility providers, 
                Miami-Dade DTPW, and other contractors, and analyzing flood zone requirements.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required grading permits 
                including Miami-Dade RER building permits (for unincorporated areas) or municipal building 
                department permits (for incorporated areas), DERM environmental resource permits for land 
                disturbance, DTPW permits for subdivision roads, SFWMD permits for stormwater management, 
                and coordinate with regulatory agencies. Large developments may require phased permit 
                approvals and Subdivision Improvement Bonds.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (graders, compactors, laser-guided systems) and experience 
                for large-scale development grading in Miami-Dade County, including expertise with DTPW 
                specifications and subdivision infrastructure requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations across the development site. Rough grading establishes general 
                grades and prepares the site for utility installation and fine grading, accounting for 
                Miami-Dade&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Grading is coordinated with utility installation 
                to ensure proper sequencing. Utilities must be installed before final grading in most 
                areas to avoid damage to graded surfaces. We coordinate with utility providers and 
                ensure compliance with Miami-Dade requirements.
              </li>
              <li>
                <strong>Final Grading:</strong> Precise grading work using laser-guided equipment to 
                achieve exact elevations specified in engineering drawings. Final grading is completed 
                just before building construction to ensure precise elevations, meeting Base Flood 
                Elevation (BFE) requirements where applicable.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Miami-Dade 
                RER or municipal building departments, DTPW (for subdivision roads), engineers, and 
                building contractors to ensure all areas meet specifications, engineering requirements, 
                and are ready for building construction. All construction is subject to inspection by the 
                governing body or their designated representatives.
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations, typically 
                  within a few inches of final elevations. Rough grading establishes general site grades 
                  and prepares the site for utility installation. Final grading is the precise finishing 
                  work to achieve exact elevations specified in engineering drawings, typically within 
                  0.1 feet of specified grades. Final grading is completed just before building 
                  construction and ensures Base Flood Elevation (BFE) compliance for properties in 
                  flood zones.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for development grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Development grading in Miami-Dade County requires building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas), 
                  DERM environmental resource permits for land disturbance, DTPW permits for subdivision 
                  roads, and SFWMD permits for stormwater management. Large developments may require phased 
                  permit approvals and Subdivision Improvement Bonds. Developers must provide an Agreement 
                  for Construction and Maintenance of Subdivision Improvements. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is a Subdivision Improvement Bond in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  A Subdivision Improvement Bond is required for developments in unincorporated Miami-Dade 
                  County. Developers must post this bond and provide an Agreement for Construction and 
                  Maintenance of Subdivision Improvements. The bond amount is determined by a Construction 
                  Cost Estimate calculated by a County Engineer derived from approved Paving and Drainage 
                  (P&D) Plans. This ensures that all required infrastructure improvements, including 
                  grading, roads, and drainage, are completed according to specifications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does development grading cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Development grading costs in Miami-Dade County vary based on site size, number of lots 
                  or building pads, required earthwork, flood zone requirements, and site conditions. 
                  Typical smaller developments range from $50,000 to $200,000, while large subdivisions 
                  or commercial developments can range from $200,000 to $1,000,000+ depending on scope. 
                  Factors affecting cost include site access, required earthwork, flood zone elevation 
                  requirements, drainage complexity, and permit requirements. Projects in flood zones or 
                  requiring significant elevation adjustments often cost more.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does final grading need to be in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Final grading in Miami-Dade County must achieve elevations within 0.1 feet (1.2 inches) 
                  of specified elevations in engineering drawings. Slopes must match specified grades 
                  exactly. This precision is critical for foundation stability, code compliance, and proper 
                  drainage. For properties in flood zones, the building pad must be graded to at least 
                  the Base Flood Elevation (BFE) plus any required freeboard. A site plan and grading 
                  plan, prepared by a licensed surveyor or engineer, must be submitted with the building 
                  permit application. Our contractors use laser-guided grading equipment to achieve this 
                  precision.
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
              <a href="/services/land-grading-site-grading/rough-final-grading-developments/" className={styles.backLink}>
                ← View Rough and Final Grading (All Areas)
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
        title="Ready to Start Your Miami Development Grading Project?"
        description="Get a free quote for your rough and final grading project in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade RER, DERM, DTPW requirements, subdivision infrastructure standards, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

