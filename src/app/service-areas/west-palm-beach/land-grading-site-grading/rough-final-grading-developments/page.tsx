import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough & Final Grading for Developments in West Palm Beach, FL | Palm Beach County',
  description: 'Complete rough and final grading services for new developments in Palm Beach County. Site preparation from initial earthmoving to precise elevations before building construction.',
  openGraph: {
    title: 'Rough & Final Grading for Developments in West Palm Beach, FL | Palm Beach County',
    description: 'Complete rough and final grading services for new developments in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-grading-site-grading/rough-final-grading-developments/`,
  },
}

export default function WestPalmBeachRoughFinalGradingDevelopmentsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Rough and Final Grading for New Developments in West Palm Beach, FL"
        subtitle="Complete grading services for new developments across Palm Beach County, from rough grading to final elevations"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Rough and final grading for new developments in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Rough and final grading services in Palm Beach County are essential for developers, general 
              contractors, subdivision developers, and anyone preparing large sites for new construction 
              projects throughout Palm Beach County, including Wellington, Royal Palm Beach, The Acreage, 
              Loxahatchee, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Wellington, a commercial complex in Royal Palm 
              Beach, or a multi-phase residential project in Palm Beach, proper grading sequencing ensures site 
              preparation is completed efficiently and meets all engineering specifications. We coordinate 
              licensed contractors to handle both rough and final grading phases, navigating Palm Beach County 
              Building Division, Environmental Resources Management (ERM) review, Unified Land Development Code 
              (ULDC) compliance, and SFWMD Environmental Resource Permits with expertise.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Rough and final grading for new developments in Palm Beach County typically range from 
                <strong> $50,000 to $200,000</strong> for smaller developments, and 
                <strong> $200,000 to $1,000,000+</strong> for large subdivision or commercial developments 
                depending on site size, required earthwork, flood zone requirements, number of lots or 
                building pads, and site conditions. Projects in flood zones or requiring significant 
                elevation adjustments often cost more. Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Rough and Final Grading Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading</h3>
              <p className={styles.serviceDescription}>
                Initial earthmoving to achieve approximate elevations and establish general site grades 
                throughout Palm Beach County. Rough grading removes excess material or adds fill to bring the 
                site to within a few inches of final elevations, preparing the site for fine grading work and 
                utility installation, accounting for Palm Beach County&apos;s high water table and coastal soil 
                conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fine Grading</h3>
              <p className={styles.serviceDescription}>
                Precise grading work using laser-guided equipment to achieve exact elevations specified 
                in engineering drawings, typically within 0.1 feet of specified elevations throughout 
                Palm Beach County. Fine grading creates the exact slopes and contours required for building pads, 
                roads, and infrastructure, ensuring Base Flood Elevation (BFE) compliance and flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Grading individual building pads to precise elevations for foundation construction throughout 
                Palm Beach County. Each building pad must be graded to exact elevations and slopes specified in 
                engineering drawings, with proper compaction for foundation support, meeting Palm Beach County 
                building code requirements and Base Flood Elevation (BFE) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Infrastructure Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and infrastructure to proper elevations and slopes throughout 
                Palm Beach County, meeting Palm Beach County building code requirements. Road grading includes proper 
                crown, cross-slopes, and drainage features to ensure effective water management and safe 
                vehicle access.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Grading</h3>
              <p className={styles.serviceDescription}>
                Grading to create proper drainage slopes and direct water to stormwater systems throughout 
                Palm Beach County. Drainage grading ensures water flows away from structures and toward drainage 
                inlets, swales, or retention areas as specified in drainage design, meeting SFWMD Environmental 
                Resource Permit requirements and Palm Beach County Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Site Preparation</h3>
              <p className={styles.serviceDescription}>
                Final grading and site preparation to ensure all areas meet engineering specifications and 
                are ready for building construction throughout Palm Beach County. This includes final compaction, 
                elevation verification, and coordination with building contractors, ensuring compliance with 
                Palm Beach County Building Division requirements, Unified Land Development Code (ULDC) standards, 
                and permit conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Development Grading Considerations</h2>
            <p className={styles.text}>
              Grading for new developments in Palm Beach County requires specialized knowledge of local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> All development within Palm Beach County 
                must comply with Building Division permits for applicable building permits. Building permits 
                must be obtained before beginning construction, and the Building Division reviews plans to 
                ensure compliance with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Development grading may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed developments comply 
                with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for development grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements for 
                development in environmentally sensitive areas, including flood zones and stormwater management 
                systems. Development grading must comply with these requirements.
              </li>
              <li>
                <strong>Phased Grading Operations:</strong> Large developments require phased grading to 
                coordinate with utility installation, road construction, and building schedules. Rough 
                grading establishes general grades, while final grading is completed just before building 
                construction. Grading must be sequenced properly with infrastructure work to meet Palm Beach 
                County requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Development grading must incorporate proper 
                drainage and stormwater management to meet SFWMD Environmental Resource Permit requirements and 
                Palm Beach County Unified Land Development Code (ULDC) standards. As of June 28, 2024, new water quality 
                performance standards were implemented. Grading must work in conjunction with retention areas 
                and drainage systems.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Developments in flood zones must have building 
                pads and infrastructure graded to specific elevations above Base Flood Elevation (BFE). 
                This affects grading depth and may require additional fill material, particularly in coastal 
                areas like Palm Beach, Jupiter, and West Palm Beach.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects grading depth and compaction. Proper 
                dewatering may be required, and building pads may need to be elevated above the water 
                table for foundation stability. SFWMD Environmental Resource Permits are required for 
                dewatering activities affecting state waters. This is especially important in areas like 
                Palm Beach, Jupiter, and coastal neighborhoods.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> All grading must meet exact elevations and 
                slopes specified in engineering drawings, typically within 0.1 feet of specified grades. 
                Contractors must have the equipment and expertise to achieve precise elevations. A site 
                plan and grading plan, prepared by a licensed surveyor or engineer, must be submitted with 
                the building permit application showing proposed elevations relative to BFE.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. Building 
                Division and ERM review can add time to projects. We coordinate permit applications to minimize 
                delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Development Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate rough and final grading services for new developments throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Jupiter</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Lantana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Development Grading Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your development grading meets all specifications and 
              regulatory requirements in Palm Beach County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, site plans, and 
                development schedule to understand grading requirements and identify any challenges. This 
                includes coordinating with utility providers, Palm Beach County Building Division, and 
                other contractors, and analyzing flood zone requirements and site conditions.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for development grading projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed development grading projects comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required grading permits 
                including Building Division permits, SFWMD Environmental Resource Permits for activities affecting 
                state waters and wetlands, Unified Land Development Code (ULDC) compliance, and coordinate with 
                regulatory agencies. We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (graders, compactors, laser-guided systems) and experience 
                for large-scale development grading in Palm Beach County, including expertise with high water 
                table conditions and subdivision infrastructure requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations across the development site. Rough grading establishes general 
                grades and prepares the site for utility installation and fine grading, accounting for 
                Palm Beach County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Grading is coordinated with utility installation 
                to ensure proper sequencing. Utilities must be installed before final grading in most 
                areas to avoid damage to graded surfaces. We coordinate with utility providers and 
                ensure compliance with Palm Beach County requirements.
              </li>
              <li>
                <strong>Final Grading:</strong> Precise grading work using laser-guided equipment to 
                achieve exact elevations specified in engineering drawings. Final grading is completed 
                just before building construction to ensure precise elevations, meeting Base Flood 
                Elevation (BFE) requirements and flood zone compliance.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Palm Beach 
                County Building Division or municipal building departments, engineers, and building 
                contractors to ensure all areas meet specifications, engineering requirements, and are ready 
                for building construction.
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations, typically 
                  within a few inches of final elevations. Rough grading establishes general site grades 
                  and prepares the site for utility installation. Final grading is the precise finishing 
                  work to achieve exact elevations specified in engineering drawings, typically within 
                  0.1 feet of specified grades. Final grading is completed just before building 
                  construction and ensures Base Flood Elevation (BFE) compliance and flood zone requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for development grading in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Development grading in Palm Beach County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects affecting 
                  wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for activities 
                  affecting state waters and wetlands, Unified Land Development Code (ULDC) compliance, and FEMA 
                  compliance permits for properties in flood zones. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does development grading cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Development grading costs in Palm Beach County vary based on site size, number of lots 
                  or building pads, required earthwork, flood zone requirements, and site conditions. 
                  Typical smaller developments range from $50,000 to $200,000, while large subdivisions 
                  or commercial developments can range from $200,000 to $1,000,000+ depending on scope. 
                  Factors affecting cost include site access, required earthwork, flood zone elevation 
                  requirements, drainage complexity, and permit requirements. Projects in flood zones or 
                  requiring significant elevation adjustments often cost more. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does final grading need to be in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Final grading in Palm Beach County must achieve elevations within 0.1 feet (1.2 inches) 
                  of specified elevations in engineering drawings. Slopes must match specified grades 
                  exactly. This precision is critical for foundation stability, code compliance, and proper 
                  drainage. For properties in flood zones, the building pad must be graded to at least 
                  the Base Flood Elevation (BFE) plus any required freeboard. A site plan and grading plan, 
                  prepared by a licensed surveyor or engineer, must be submitted with the building permit 
                  application. Our contractors use laser-guided grading equipment to achieve this precision.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect development grading?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized dewatering techniques and foundation design. Building pads may 
                  need to be elevated above the water table for foundation stability. SFWMD Environmental 
                  Resource Permits are required for dewatering activities affecting state waters. Proper 
                  drainage systems are essential to prevent water accumulation around foundations. This is 
                  especially important in areas like Palm Beach, Jupiter, and coastal neighborhoods 
                  where the water table is particularly high.
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
              <a href="/service-areas/west-palm-beach/land-grading-site-grading/" className={styles.backLink}>
                ← Back to West Palm Beach Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Development Grading Project?"
        description="Get a free quote for your rough and final grading project in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County Building Division requirements, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

