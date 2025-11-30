import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Subdivision and Infrastructure Site Work in Fort Lauderdale, FL | Broward County',
  description: 'Complete site work for new subdivisions and infrastructure projects in Broward County. Subdivision development, infrastructure site work, and site preparation services.',
  openGraph: {
    title: 'Subdivision and Infrastructure Site Work in Fort Lauderdale, FL | Broward County',
    description: 'Complete site work for new subdivisions and infrastructure projects in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/site-work-site-development/subdivision-infrastructure/`,
  },
}

export default function FortLauderdaleSubdivisionInfrastructurePage() {
  return (
    <main>
      <HeroWithQuote
        title="Subdivision and Infrastructure Site Work in Fort Lauderdale, FL"
        subtitle="Complete site work for new subdivisions and infrastructure projects throughout Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Subdivision and infrastructure site work services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our subdivision and infrastructure site work services in Broward County serve developers, 
              general contractors, municipalities, and property owners planning large-scale residential or 
              commercial subdivisions and infrastructure projects throughout Broward County, including 
              Weston, Plantation, Pembroke Pines, Coral Springs, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new residential subdivision in Weston, planning infrastructure 
              improvements in Plantation, or coordinating site work for a master-planned community in Pembroke 
              Pines, we coordinate contractors with the capacity and expertise to handle large-scale subdivision 
              and infrastructure projects, navigating Broward County Development & Environmental Review (DER), 
              Natural Resource Protection Code requirements, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Subdivision and infrastructure site work projects in Broward County typically range from 
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
          <h2 className={styles.heading}>What Subdivision and Infrastructure Site Work Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Site Clearing</h3>
              <p className={styles.serviceDescription}>
                Large-scale clearing and grubbing for new subdivisions throughout Broward County, including 
                tree removal, brush clearing, and debris removal across multiple lots. Coordination of clearing 
                operations with full compliance with Broward County tree protection standards requiring barriers 
                around preserved trees and hand clearing in designated preservation areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Grading</h3>
              <p className={styles.serviceDescription}>
                Mass grading operations for subdivision sites in Broward County, including cut and fill 
                operations to create proper lot elevations, road grades, and drainage slopes. Coordination of 
                grading across multiple lots to achieve consistent elevations, accounting for high water table 
                conditions and flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Site preparation for subdivision roads throughout Broward County, including subgrade preparation, 
                base course installation, and preparation for paving. Coordination with road construction 
                contractors for proper sequencing, meeting Broward County building code requirements and 
                compliance with county standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of subdivision-wide drainage systems including stormwater management ponds, 
                retention basins, swales, and underground drainage infrastructure throughout Broward County. 
                Designed to meet South Florida Water Management District (SFWMD) Environmental Resource Permit 
                requirements and Broward County Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for subdivision utilities including water, sewer, electrical, 
                gas, and telecommunications infrastructure throughout Broward County. Coordination with utility 
                companies for proper installation and connections, with compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Lot Preparation</h3>
              <p className={styles.serviceDescription}>
                Individual lot preparation within subdivisions throughout Broward County, including building 
                pad grading, driveway preparation, and site-specific drainage. Preparation of lots to meet 
                Broward County building permit requirements, Base Flood Elevation (BFE) compliance, and 
                architectural specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Subdivision and Infrastructure Considerations</h2>
            <p className={styles.text}>
              Subdivision and infrastructure site work in Broward County requires specialized coordination 
              and planning:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for subdivision infrastructure work, including utilities, roads, 
                drainage systems, and other site improvements in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Subdivision developments require 
                Development & Environmental Review through ePermits OneStop for applicable building permits. 
                All DER submittals are only accepted electronically. Broward County&apos;s Planning and Development 
                Management Division ensures that proposed subdivision developments comply with the Broward County 
                Land Development Code and Natural Resource Protection Code. The county will not issue building 
                permits prior to receipt of proof of payment for impact fees and a copy of final Planning and 
                Development Management Review approval.
              </li>
              <li>
                <strong>Phased Development:</strong> Large subdivisions in Broward County are typically developed 
                in phases. We coordinate site work to align with development phases, ensuring infrastructure is 
                ready for each phase while maintaining access and minimizing disruption, accounting for 180-day 
                permit validity periods.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Subdivision development requires SFWMD 
                Environmental Resource Permits for activities affecting state waters and wetlands, including 
                stormwater management systems, retention ponds, and drainage infrastructure. As of June 28, 2024, 
                new water quality performance standards were implemented.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource Protection 
                Code (Chapter 27) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas, including flood zones and stormwater management systems. 
                Subdivision developments must comply with these requirements.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Subdivisions in Broward County require comprehensive 
                stormwater management systems including retention ponds, swales, and drainage infrastructure. 
                Our contractors design and install systems to meet SFWMD Environmental Resource Permit requirements 
                and Broward County Natural Resource Protection Code standards.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table requires specialized 
                dewatering techniques and foundation design for subdivision infrastructure, with SFWMD Environmental 
                Resource Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many subdivision sites in Broward County are in FEMA flood 
                zones requiring specific elevation requirements and Base Flood Elevation (BFE) compliance for roads, 
                drainage systems, and building pads.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Subdivision development requires coordination with multiple 
                utility companies for water, sewer, electrical, gas, and telecommunications throughout Broward 
                County. We coordinate utility installation to minimize conflicts and ensure proper sequencing.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from the date of 
                issuance. If work doesn&apos;t begin within this period, the permit will expire, though extensions 
                can be requested by contacting the Broward County permit department.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Subdivision and Infrastructure Site Work Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your subdivision or infrastructure project in Broward County is 
              prepared efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Planning:</strong> We review subdivision plans, infrastructure requirements, and 
                site conditions to understand all site work requirements in Broward County and develop a 
                comprehensive plan for phased development, including flood zone analysis and environmental considerations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits 
                as described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for subdivision infrastructure work in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development & 
                Environmental Review (DER) through ePermits OneStop and coordinate with Broward County Planning 
                and Development Management Division to ensure proposed subdivision developments comply with the 
                Broward County Land Development Code and Natural Resource Protection Code. All DER submittals are 
                only accepted electronically.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify and coordinate all required permits including 
                Uniform Building Permit Applications (updated November 14, 2025), SFWMD Environmental Resource 
                Permits, Natural Resource Protection Code compliance, and utility permits. We coordinate with Broward 
                County Building Code Division, SFWMD, and other regulatory agencies as needed. The county will not 
                issue building permits prior to receipt of proof of payment for impact fees and a copy of final 
                Planning and Development Management Review approval.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have 
                experience with subdivision and infrastructure projects in Broward County and can handle the scale 
                and complexity required, including high water table conditions and flood zone requirements.
              </li>
              <li>
                <strong>Phased Execution:</strong> Contractors perform site work in phases aligned with your 
                development schedule, ensuring infrastructure is ready for each phase while maintaining access and 
                minimizing disruption, accounting for Broward County weather patterns, permit processing timelines, 
                and 180-day permit validity periods.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure work meets engineering 
                specifications, Broward County building code requirements, Natural Resource Protection Code 
                standards, and regulatory requirements, with particular attention to drainage performance and 
                infrastructure quality.
              </li>
              <li>
                <strong>Final Preparation:</strong> Site is prepared and inspected, ready for infrastructure 
                installation, road construction, and building development to begin, with all required Broward 
                County approvals in place.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Subdivision Development Areas</h2>
            <p className={styles.text}>
              We coordinate subdivision and infrastructure site work services throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Growing Suburban Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Western Broward Development</h3>
                <ul className={styles.locationItems}>
                  <li>Miramar</li>
                  <li>Cooper City</li>
                  <li>Southwest Ranches</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                  <li>Margate</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Urban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
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
                <h3 className={styles.faqQuestion}>What permits are required for subdivision site work in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision site work in Broward County requires development permits as described in Florida 
                  Statute 380.04 (obtained prior to building permit issuance), Uniform Building Permit Applications 
                  from Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for activities 
                  affecting state waters and wetlands, Natural Resource Protection Code compliance, and stormwater 
                  management approvals. The county will not issue building permits prior to receipt of proof of 
                  payment for impact fees and a copy of final Planning and Development Management Review approval. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is a development permit for subdivision infrastructure in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Projects involving development work as described in Florida Statute 380.04 require a development 
                  permit prior to the issuance of a building permit. This is a critical prerequisite for subdivision 
                  infrastructure work, including utilities, roads, drainage systems, and other site improvements in 
                  Broward County. The development permit must be obtained before building permits can be issued for 
                  subdivision infrastructure projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does subdivision site work take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision site work timelines in Broward County vary based on project size and complexity. Small 
                  subdivisions may take 2-3 months, while large master-planned communities may take 6-12 months or 
                  more, often completed in phases aligned with development schedules. Broward County permit processing, 
                  including DER review through ePermits OneStop, can add time. Permits are valid for 180 days from 
                  issuance. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can you work on phased subdivision development in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site work for phased subdivision development in Broward County, ensuring 
                  infrastructure is ready for each phase while maintaining access and minimizing disruption. We work 
                  with developers to align site work with development schedules, accounting for 180-day permit validity 
                  periods and Broward County weather patterns. Each phase requires proper permit coordination and 
                  compliance with Broward County requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about stormwater management for subdivisions in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Subdivisions in Broward County require comprehensive stormwater management systems including retention 
                  ponds, swales, and drainage infrastructure. Our contractors design and install systems to meet SFWMD 
                  Environmental Resource Permit requirements and Broward County Natural Resource Protection Code standards. 
                  As of June 28, 2024, new water quality performance standards were implemented for SFWMD permits. We 
                  ensure all stormwater systems meet these requirements.
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
              <a href="/service-areas/fort-lauderdale/site-work-site-development/" className={styles.backLink}>
                ← Back to Fort Lauderdale Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Subdivision or Infrastructure Project?"
        description="Get a free quote for your subdivision or infrastructure site work project in Broward County. We'll coordinate licensed contractors who understand Broward County DER, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, development permits, and subdivision development requirements."
        showPhone={true}
      />
    </main>
  )
}

