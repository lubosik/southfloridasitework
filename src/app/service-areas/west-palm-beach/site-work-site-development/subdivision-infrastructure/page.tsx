import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Subdivision and Infrastructure Site Work in West Palm Beach, FL | Palm Beach County',
  description: 'Complete site work for new subdivisions and infrastructure projects in Palm Beach County. Subdivision development, infrastructure site work, and site preparation services.',
  openGraph: {
    title: 'Subdivision and Infrastructure Site Work in West Palm Beach, FL | Palm Beach County',
    description: 'Complete site work for new subdivisions and infrastructure projects in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/site-work-site-development/subdivision-infrastructure/`,
  },
}

export default function WestPalmBeachSubdivisionInfrastructurePage() {
  return (
    <main>
      <HeroWithQuote
        title="Subdivision and Infrastructure Site Work in West Palm Beach, FL"
        subtitle="Complete site work for new subdivisions and infrastructure projects throughout Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Subdivision and infrastructure site work services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our subdivision and infrastructure site work services in Palm Beach County serve developers, 
              general contractors, municipalities, and property owners planning large-scale residential or 
              commercial subdivisions and infrastructure projects throughout Palm Beach County, including 
              Wellington, Royal Palm Beach, The Acreage, Loxahatchee, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new residential subdivision in Wellington, planning infrastructure 
              improvements in Royal Palm Beach, or coordinating site work for a master-planned community in 
              The Acreage, we coordinate contractors with the capacity and expertise to handle large-scale subdivision 
              and infrastructure projects, navigating Palm Beach County Building Division permits, Environmental 
              Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, and SFWMD 
              Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Subdivision and infrastructure site work projects in Palm Beach County typically range from 
                <strong> $50,000</strong> for smaller infrastructure improvements to <strong>$500,000+</strong> 
                for large subdivision developments requiring extensive earthmoving, grading, and infrastructure 
                preparation. Projects involving development work as described in Florida Statute 380.04 require 
                a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Subdivision and Infrastructure Site Work Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Site Clearing</h3>
              <p className={styles.serviceDescription}>
                Large-scale clearing and grubbing for new subdivisions throughout Palm Beach County, including 
                tree removal, brush clearing, and debris removal across multiple lots. Coordination of clearing 
                operations with full compliance with Palm Beach County tree protection requirements and Environmental 
                Resources Management (ERM) standards for protected species and environmentally sensitive areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Grading</h3>
              <p className={styles.serviceDescription}>
                Mass grading operations for subdivision sites in Palm Beach County, including cut and fill 
                operations to create proper lot elevations, road grades, and drainage slopes. Coordination of 
                grading across multiple lots to achieve consistent elevations, accounting for high water table 
                conditions and flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Site preparation for subdivision roads throughout Palm Beach County, including subgrade preparation, 
                base course installation, and preparation for paving. Coordination with road construction 
                contractors for proper sequencing, meeting Palm Beach County building code requirements and 
                compliance with county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of subdivision-wide drainage systems including stormwater management ponds, 
                retention basins, swales, and underground drainage infrastructure throughout Palm Beach County. 
                Designed to meet South Florida Water Management District (SFWMD) Environmental Resource Permit 
                requirements and Palm Beach County Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for subdivision utilities including water, sewer, electrical, 
                gas, and telecommunications infrastructure throughout Palm Beach County. Coordination with utility 
                companies for proper installation and connections, with compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Lot Preparation</h3>
              <p className={styles.serviceDescription}>
                Individual lot preparation within subdivisions throughout Palm Beach County, including building 
                pad grading, driveway preparation, and site-specific drainage. Preparation of lots to meet 
                Palm Beach County building permit requirements, Base Flood Elevation (BFE) compliance, and 
                architectural specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Subdivision and Infrastructure Considerations</h2>
            <p className={styles.text}>
              Subdivision and infrastructure site work in Palm Beach County requires specialized coordination 
              and planning:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for subdivision infrastructure work, including utilities, roads, 
                drainage systems, and other site improvements in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Subdivision developments require Building 
                Division permits from Palm Beach County Building Division. Building permits must be obtained 
                before beginning construction, and the Building Division reviews plans to ensure compliance 
                with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Subdivision developments may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed subdivision developments 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Phased Development:</strong> Large subdivisions in Palm Beach County are typically developed 
                in phases. We coordinate site work to align with development phases, ensuring infrastructure is 
                ready for each phase while maintaining access and minimizing disruption.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Subdivision development requires SFWMD 
                Environmental Resource Permits for activities affecting state waters and wetlands, including 
                stormwater management systems, retention ponds, and drainage infrastructure. As of June 28, 2024, 
                new water quality performance standards were implemented.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas, including flood zones and stormwater management systems. 
                Subdivision developments must comply with these requirements.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Subdivisions in Palm Beach County require comprehensive 
                stormwater management systems including retention ponds, swales, and drainage infrastructure. 
                Our contractors design and install systems to meet SFWMD Environmental Resource Permit requirements 
                and Palm Beach County Unified Land Development Code (ULDC) standards.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table requires specialized 
                dewatering techniques and foundation design for subdivision infrastructure, with SFWMD Environmental 
                Resource Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many subdivision sites in Palm Beach County are in FEMA flood 
                zones requiring specific elevation requirements and Base Flood Elevation (BFE) compliance for roads, 
                drainage systems, and building pads.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Subdivision development requires coordination with multiple 
                utility companies for water, sewer, electrical, gas, and telecommunications throughout Palm Beach 
                County. We coordinate utility installation to minimize conflicts and ensure proper sequencing.
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
            <h2 className={styles.heading}>The Subdivision and Infrastructure Site Work Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your subdivision or infrastructure project in Palm Beach County is 
              prepared efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Planning:</strong> We review subdivision plans, infrastructure requirements, and 
                site conditions to understand all site work requirements in Palm Beach County and develop a 
                comprehensive plan for phased development, including flood zone analysis and environmental considerations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits 
                as described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for subdivision infrastructure work in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure proposed 
                subdivision developments comply with the Unified Land Development Code (ULDC) and environmental 
                protection requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify and coordinate all required permits including 
                Building Division permits, SFWMD Environmental Resource Permits, Unified Land Development Code (ULDC) 
                compliance, and utility permits. We coordinate with Palm Beach County Building Division, ERM, SFWMD, 
                and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have 
                experience with subdivision and infrastructure projects in Palm Beach County and can handle the scale 
                and complexity required, including high water table conditions and flood zone requirements.
              </li>
              <li>
                <strong>Phased Execution:</strong> Contractors perform site work in phases aligned with your 
                development schedule, ensuring infrastructure is ready for each phase while maintaining access and 
                minimizing disruption, accounting for Palm Beach County weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure work meets engineering 
                specifications, Palm Beach County building code requirements, Unified Land Development Code (ULDC) 
                standards, and regulatory requirements, with particular attention to drainage performance and 
                infrastructure quality.
              </li>
              <li>
                <strong>Final Preparation:</strong> Site is prepared and inspected, ready for infrastructure 
                installation, road construction, and building development to begin, with all required Palm Beach 
                County approvals in place.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Subdivision Development Areas</h2>
            <p className={styles.text}>
              We coordinate subdivision and infrastructure site work services throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Growing Suburban Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                  <li>Lake Worth</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Western Palm Beach County Development</h3>
                <ul className={styles.locationItems}>
                  <li>Belle Glade</li>
                  <li>Pahokee</li>
                  <li>South Bay</li>
                  <li>Clewiston</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Urban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                  <li>Boynton Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Infrastructure Projects</h3>
                <ul className={styles.locationItems}>
                  <li>Road Improvements</li>
                  <li>Utility Infrastructure</li>
                  <li>Drainage Systems</li>
                  <li>Public Works Projects</li>
                  <li>Municipal Infrastructure</li>
                </ul>
              </div>
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
                <h3 className={styles.faqQuestion}>What permits are required for subdivision site work in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision site work in Palm Beach County requires development permits as described in Florida 
                  Statute 380.04 (obtained prior to building permit issuance), Building Division permits from Palm 
                  Beach County Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for 
                  activities affecting state waters and wetlands, Unified Land Development Code (ULDC) compliance, and 
                  stormwater management approvals. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is a development permit for subdivision infrastructure in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Projects involving development work as described in Florida Statute 380.04 require a development 
                  permit prior to the issuance of a building permit. This is a critical prerequisite for subdivision 
                  infrastructure work, including utilities, roads, drainage systems, and other site improvements in 
                  Palm Beach County. The development permit must be obtained before building permits can be issued for 
                  subdivision infrastructure projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does subdivision site work take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision site work timelines in Palm Beach County vary based on project size and complexity. Small 
                  subdivisions may take 2-3 months, while large master-planned communities may take 6-12 months or 
                  more, often completed in phases aligned with development schedules. Palm Beach County permit processing, 
                  including ERM review, can add time. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can you work on phased subdivision development in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site work for phased subdivision development in Palm Beach County, ensuring 
                  infrastructure is ready for each phase while maintaining access and minimizing disruption. We work 
                  with developers to align site work with development schedules, accounting for Palm Beach County 
                  weather patterns and permit processing timelines. Each phase requires proper permit coordination and 
                  compliance with Palm Beach County requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about stormwater management for subdivisions in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivisions in Palm Beach County require comprehensive stormwater management systems including retention 
                  ponds, swales, and drainage infrastructure. Our contractors design and install systems to meet SFWMD 
                  Environmental Resource Permit requirements and Palm Beach County Unified Land Development Code (ULDC) 
                  standards. As of June 28, 2024, new water quality performance standards were implemented for SFWMD 
                  permits. We ensure all stormwater systems meet these requirements.
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
              <a href="/services/site-work-site-development/subdivision-infrastructure/" className={styles.backLink}>
                ← View Subdivision and Infrastructure Site Work (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/west-palm-beach/site-work-site-development/" className={styles.backLink}>
                ← Back to West Palm Beach Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Subdivision or Infrastructure Project?"
        description="Get a free quote for your subdivision or infrastructure site work project in Palm Beach County. We'll coordinate licensed contractors who understand Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, development permits, and subdivision development requirements."
        showPhone={true}
      />
    </main>
  )
}

