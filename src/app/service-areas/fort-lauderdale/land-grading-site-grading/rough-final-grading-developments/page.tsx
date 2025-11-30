import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Rough & Final Grading for Developments in Fort Lauderdale, FL | Broward County',
  description: 'Complete rough and final grading services for new developments in Broward County. Site preparation from initial earthmoving to precise elevations before building construction.',
  openGraph: {
    title: 'Rough & Final Grading for Developments in Fort Lauderdale, FL | Broward County',
    description: 'Complete rough and final grading services for new developments in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/rough-final-grading-developments/`,
  },
}

export default function FortLauderdaleRoughFinalGradingDevelopmentsPage() {
  return (
    <main>
      <HeroWithQuote
        title="Rough and Final Grading for New Developments in Fort Lauderdale, FL"
        subtitle="Complete grading services for new developments across Broward County, from rough grading to final elevations"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Rough and final grading for new developments in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Rough and final grading services in Broward County are essential for developers, general 
              contractors, subdivision developers, and anyone preparing large sites for new construction 
              projects throughout Broward County, including Weston, Plantation, Pembroke Pines, Coral Springs, 
              and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Weston, a commercial complex in Plantation, 
              or a multi-phase residential project in Pembroke Pines, proper grading sequencing ensures site 
              preparation is completed efficiently and meets all engineering specifications. We coordinate 
              licensed contractors to handle both rough and final grading phases, navigating Broward County 
              Building Code Division, Development & Environmental Review (DER), Natural Resource Protection 
              Code compliance, and SFWMD Environmental Resource Permits with expertise.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Rough and final grading for new developments in Broward County typically range from 
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
          <h2 className={styles.heading}>What Rough and Final Grading Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading</h3>
              <p className={styles.serviceDescription}>
                Initial earthmoving to achieve approximate elevations and establish general site grades 
                throughout Broward County. Rough grading removes excess material or adds fill to bring the 
                site to within a few inches of final elevations, preparing the site for fine grading work and 
                utility installation, accounting for Broward County&apos;s high water table and coastal soil 
                conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fine Grading</h3>
              <p className={styles.serviceDescription}>
                Precise grading work using laser-guided equipment to achieve exact elevations specified 
                in engineering drawings, typically within 0.1 feet of specified elevations throughout 
                Broward County. Fine grading creates the exact slopes and contours required for building pads, 
                roads, and infrastructure, ensuring Base Flood Elevation (BFE) compliance and 100-year, 
                3-day storm event protection for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Grading individual building pads to precise elevations for foundation construction throughout 
                Broward County. Each building pad must be graded to exact elevations and slopes specified in 
                engineering drawings, with proper compaction for foundation support, meeting Broward County 
                building code requirements, Base Flood Elevation (BFE) compliance, and 100-year, 3-day storm 
                event protection.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Infrastructure Grading</h3>
              <p className={styles.serviceDescription}>
                Grading for roads, access drives, and infrastructure to proper elevations and slopes throughout 
                Broward County, meeting Broward County building code requirements. Road grading includes proper 
                crown, cross-slopes, and drainage features to ensure effective water management and safe 
                vehicle access, with minimum roadway crown elevation protected from a 10-year, 3-day storm event.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Grading</h3>
              <p className={styles.serviceDescription}>
                Grading to create proper drainage slopes and direct water to stormwater systems throughout 
                Broward County. Drainage grading ensures water flows away from structures and toward drainage 
                inlets, swales, or retention areas as specified in drainage design, meeting SFWMD Environmental 
                Resource Permit requirements and Broward County Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Site Preparation</h3>
              <p className={styles.serviceDescription}>
                Final grading and site preparation to ensure all areas meet engineering specifications and 
                are ready for building construction throughout Broward County. This includes final compaction, 
                elevation verification, and coordination with building contractors, ensuring compliance with 
                Broward County Building Code Division requirements, Natural Resource Protection Code standards, 
                and permit conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Development Grading Considerations</h2>
            <p className={styles.text}>
              Grading for new developments in Broward County requires specialized knowledge of local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development & Environmental Review (DER):</strong> All development within Broward County 
                must comply with Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with the 
                Broward County Land Development Code and Natural Resource Protection Code. The county will not 
                issue building permits prior to receipt of proof of payment for impact fees and a copy of final 
                Planning and Development Management Review approval.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for development grading projects in Broward County.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements for 
                development in environmentally sensitive areas, including flood zones and stormwater management 
                systems. Development grading must comply with these requirements.
              </li>
              <li>
                <strong>Site Plan Review:</strong> Large developments in Broward County require site plan review, 
                with 25 plan sets required for large projects and 45 days review time for large projects. 
                Development grading must be coordinated with site plan approval and permit issuance.
              </li>
              <li>
                <strong>Phased Grading Operations:</strong> Large developments require phased grading to 
                coordinate with utility installation, road construction, and building schedules. Rough 
                grading establishes general grades, while final grading is completed just before building 
                construction. Grading must be sequenced properly with infrastructure work to meet Broward 
                County requirements, accounting for 180-day permit validity periods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Development grading must incorporate proper 
                drainage and stormwater management to meet SFWMD Environmental Resource Permit requirements and 
                Broward County Natural Resource Protection Code standards. As of June 28, 2024, new water quality 
                performance standards were implemented. Grading must work in conjunction with retention areas 
                and drainage systems.
              </li>
              <li>
                <strong>Storm Event Protection:</strong> First floor elevations of all structures must be 
                protected from a 100-year, 3-day storm event. Minimum roadway crown elevation and parking lot 
                elevation must be protected from a 10-year, 3-day storm event. Development grading must ensure 
                compliance with these requirements.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Developments in flood zones must have building 
                pads and infrastructure graded to specific elevations above Base Flood Elevation (BFE). 
                This affects grading depth and may require additional fill material, particularly in coastal 
                areas like Fort Lauderdale, Hollywood, and Pompano Beach.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects grading depth and compaction. Proper 
                dewatering may be required, and building pads may need to be elevated above the water 
                table for foundation stability. SFWMD Environmental Resource Permits are required for 
                dewatering activities affecting state waters. This is especially important in areas like 
                Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> All grading must meet exact elevations and 
                slopes specified in engineering drawings, typically within 0.1 feet of specified grades. 
                Contractors must have the equipment and expertise to achieve precise elevations. A site 
                plan and grading plan, prepared by a licensed surveyor or engineer, must be submitted with 
                the building permit application showing proposed elevations relative to BFE and storm event 
                protection requirements.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from the 
                date of issuance. If work doesn&apos;t begin within this period, the permit will expire, 
                though extensions can be requested by contacting the Broward County permit department.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Development Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate rough and final grading services for new developments throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Davie</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Rio Vista</li>
                  <li>Miramar</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                  <li>Cooper City</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Development Grading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your development grading meets all specifications and 
              regulatory requirements in Broward County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, site plans, and 
                development schedule to understand grading requirements and identify any challenges. This 
                includes coordinating with utility providers, Broward County Building Code Division, and 
                other contractors, and analyzing flood zone requirements, storm event protection needs, and 
                climate resilience considerations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for development grading projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed development grading projects 
                comply with the Broward County Land Development Code and Natural Resource Protection Code. 
                All DER submittals are only accepted electronically. The county will not issue building 
                permits prior to receipt of proof of payment for impact fees and a copy of final Planning 
                and Development Management Review approval.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required grading permits 
                including Uniform Building Permit Applications (updated November 14, 2025), DER through 
                ePermits OneStop, SFWMD Environmental Resource Permits for activities affecting state waters 
                and wetlands, Natural Resource Protection Code compliance, and coordinate with regulatory 
                agencies. Large developments may require site plan review with 25 plan sets and 45 days 
                review time. We coordinate with Broward County Building Code Division, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (graders, compactors, laser-guided systems) and experience 
                for large-scale development grading in Broward County, including expertise with storm event 
                protection requirements, high water table conditions, and subdivision infrastructure requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations across the development site. Rough grading establishes general 
                grades and prepares the site for utility installation and fine grading, accounting for 
                Broward County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Grading is coordinated with utility installation 
                to ensure proper sequencing. Utilities must be installed before final grading in most 
                areas to avoid damage to graded surfaces. We coordinate with utility providers and 
                ensure compliance with Broward County requirements.
              </li>
              <li>
                <strong>Final Grading:</strong> Precise grading work using laser-guided equipment to 
                achieve exact elevations specified in engineering drawings. Final grading is completed 
                just before building construction to ensure precise elevations, meeting Base Flood 
                Elevation (BFE) requirements, 100-year, 3-day storm event protection for structures, and 
                10-year, 3-day storm event protection for roadways and parking lots where applicable.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Broward 
                County Building Code Division or municipal building departments, engineers, and building 
                contractors to ensure all areas meet specifications, engineering requirements, storm event 
                protection requirements, and are ready for building construction.
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
                <h3 className={styles.faqQuestion}>What is the difference between rough grading and final grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Rough grading is the initial earthmoving to achieve approximate elevations, typically 
                  within a few inches of final elevations. Rough grading establishes general site grades 
                  and prepares the site for utility installation. Final grading is the precise finishing 
                  work to achieve exact elevations specified in engineering drawings, typically within 
                  0.1 feet of specified grades. Final grading is completed just before building 
                  construction and ensures Base Flood Elevation (BFE) compliance, 100-year, 3-day storm 
                  event protection for structures, and 10-year, 3-day storm event protection for roadways 
                  and parking lots for properties in flood zones.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for development grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Development grading in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from Broward 
                  County Building Code Division, Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable projects, SFWMD Environmental Resource Permits for activities affecting 
                  state waters and wetlands, Natural Resource Protection Code compliance, and FEMA compliance 
                  permits for properties in flood zones. Large developments may require site plan review with 
                  25 plan sets and 45 days review time. All DER submittals are only accepted electronically. 
                  The county will not issue building permits prior to receipt of proof of payment for impact 
                  fees and a copy of final Planning and Development Management Review approval. We help identify 
                  and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the storm event protection requirements for developments in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires first floor elevations of all structures to be protected from a 
                  100-year, 3-day storm event. Minimum roadway crown elevation and parking lot elevation must 
                  be protected from a 10-year, 3-day storm event, whether using inverted crown or standard 
                  crown design. These criteria represent minimum standards and may be increased by the 
                  Engineer of Record as applicable. Development grading must ensure compliance with these 
                  requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does development grading cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Development grading costs in Broward County vary based on site size, number of lots 
                  or building pads, required earthwork, flood zone requirements, and site conditions. 
                  Typical smaller developments range from $50,000 to $200,000, while large subdivisions 
                  or commercial developments can range from $200,000 to $1,000,000+ depending on scope. 
                  Factors affecting cost include site access, required earthwork, flood zone elevation 
                  requirements, drainage complexity, and permit requirements. Projects in flood zones or 
                  requiring significant elevation adjustments often cost more. Broward County permit 
                  processing, including DER review through ePermits OneStop and site plan review (45 days 
                  for large projects), can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does final grading need to be in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Final grading in Broward County must achieve elevations within 0.1 feet (1.2 inches) 
                  of specified elevations in engineering drawings. Slopes must match specified grades 
                  exactly. This precision is critical for foundation stability, code compliance, and proper 
                  drainage. For properties in flood zones, the building pad must be graded to at least 
                  the Base Flood Elevation (BFE) plus any required freeboard, with first floor elevations 
                  protected from a 100-year, 3-day storm event. A site plan and grading plan, prepared by 
                  a licensed surveyor or engineer, must be submitted with the building permit application. 
                  Our contractors use laser-guided grading equipment to achieve this precision.
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
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Development Grading Project?"
        description="Get a free quote for your rough and final grading project in Broward County. We'll coordinate licensed contractors experienced in Broward County Building Code Division requirements, DER requirements, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, storm event protection requirements, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

