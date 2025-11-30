import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Subdivision and Infrastructure Site Work | South Florida',
  description: 'Complete site work for new subdivisions and infrastructure projects across South Florida. Subdivision development, infrastructure site work, and site preparation services.',
  openGraph: {
    title: 'Subdivision and Infrastructure Site Work | South Florida',
    description: 'Complete site work for new subdivisions and infrastructure projects across South Florida.',
    url: `${siteConfig.url}/services/site-work-site-development/subdivision-infrastructure/`,
  },
}

export default function SubdivisionInfrastructurePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Subdivision and Infrastructure Site Work</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Complete site work for new subdivisions and infrastructure projects across South Florida. 
                We coordinate licensed contractors to deliver comprehensive site preparation for large-scale 
                residential and commercial developments.
              </p>
              <p className={styles.description}>
                Subdivision and infrastructure site work requires coordination of multiple phases and 
                contractors. From initial land clearing to final infrastructure preparation, we coordinate 
                a network of licensed contractors with the equipment and expertise to handle large-scale 
                subdivision development projects.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/subdivision-infrastructure.jpg"
                alt="Subdivision and infrastructure site work services in South Florida"
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
              Our subdivision and infrastructure site work services serve developers, general contractors, 
              municipalities, and property owners planning large-scale residential or commercial 
              subdivisions and infrastructure projects.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new residential subdivision, planning infrastructure 
              improvements, or coordinating site work for a master-planned community, we coordinate 
              contractors with the capacity and expertise to handle large-scale subdivision and 
              infrastructure projects.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Subdivision and infrastructure site work projects typically range from <strong>$50,000</strong> 
                for smaller infrastructure improvements to $500,000+ for large subdivision developments 
                requiring extensive earthmoving, grading, and infrastructure preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Subdivision and Infrastructure Site Work Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Site Clearing</h3>
              <p className={styles.serviceDescription}>
                Large-scale clearing and grubbing for new subdivisions, including tree removal, brush 
                clearing, and debris removal across multiple lots. Coordination of clearing operations 
                to prepare entire subdivision sites for development.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Grading</h3>
              <p className={styles.serviceDescription}>
                Mass grading operations for subdivision sites, including cut and fill operations to 
                create proper lot elevations, road grades, and drainage slopes. Coordination of grading 
                across multiple lots to achieve consistent elevations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Road and Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Site preparation for subdivision roads, including subgrade preparation, base course 
                installation, and preparation for paving. Coordination with road construction contractors 
                for proper sequencing.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Subdivision Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of subdivision-wide drainage systems including stormwater management ponds, 
                retention basins, swales, and underground drainage infrastructure. Designed to meet 
                SFWMD and local stormwater requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for subdivision utilities including water, sewer, electrical, 
                gas, and telecommunications infrastructure. Coordination with utility companies for proper 
                installation and connections.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Lot Preparation</h3>
              <p className={styles.serviceDescription}>
                Individual lot preparation within subdivisions, including building pad grading, driveway 
                preparation, and site-specific drainage. Preparation of lots to meet building permit 
                requirements and architectural specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Subdivision and Infrastructure Considerations</h2>
            <p className={styles.text}>
              Subdivision and infrastructure site work requires specialized coordination and planning:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Phased Development:</strong> Large subdivisions are typically developed in phases. 
                We coordinate site work to align with development phases, ensuring infrastructure is ready 
                for each phase while maintaining access and minimizing disruption.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> Subdivision development requires compliance with SFWMD 
                environmental resource permits, county subdivision regulations, and local building codes. 
                We coordinate permit applications and ensure compliance throughout the project.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Subdivisions require comprehensive stormwater management 
                systems including retention ponds, swales, and drainage infrastructure. Our contractors 
                design and install systems to meet SFWMD and local requirements.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Subdivision development requires coordination with multiple 
                utility companies for water, sewer, electrical, gas, and telecommunications. We coordinate 
                utility installation to minimize conflicts and ensure proper sequencing.
              </li>
              <li>
                <strong>Mass Earthmoving:</strong> Large subdivisions often require significant cut and fill 
                operations to achieve proper elevations and drainage. Our contractors have the equipment 
                and expertise to handle large-scale earthmoving efficiently.
              </li>
              <li>
                <strong>Infrastructure Sequencing:</strong> Proper sequencing of site work, infrastructure 
                installation, and building construction is critical. We coordinate with developers and 
                general contractors to ensure proper sequencing and minimize delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Subdivision and Infrastructure Site Work Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your subdivision or infrastructure project is prepared efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Planning:</strong> We review subdivision plans, infrastructure requirements, and 
                site conditions to understand all site work requirements and develop a comprehensive plan 
                for phased development.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify and coordinate all required permits including 
                SFWMD environmental resource permits, county subdivision approvals, building permits, and 
                utility permits. We handle permit applications and ensure compliance throughout the project.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have 
                experience with subdivision and infrastructure projects and can handle the scale and complexity 
                required.
              </li>
              <li>
                <strong>Phased Execution:</strong> Contractors perform site work in phases aligned with your 
                development schedule, ensuring infrastructure is ready for each phase while maintaining access 
                and minimizing disruption.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure work meets engineering 
                specifications, regulatory requirements, and development standards, with particular attention 
                to drainage performance and infrastructure quality.
              </li>
              <li>
                <strong>Final Preparation:</strong> Site is prepared and inspected, ready for infrastructure 
                installation, road construction, and building development to begin.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is included in subdivision site work?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision site work includes land clearing, mass grading, road preparation, drainage 
                  systems, utility preparation, and lot preparation. Everything needed to prepare a 
                  subdivision site for infrastructure installation and building development.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does subdivision site work take?</h3>
                <p className={styles.faqAnswer}>
                  Subdivision site work timelines vary based on project size and complexity. Small subdivisions 
                  may take 2-3 months, while large master-planned communities may take 6-12 months or more, 
                  often completed in phases aligned with development schedules.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle permits for subdivision development?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate all required permits including SFWMD environmental resource permits, 
                  county subdivision approvals, building permits, and utility permits. We handle the permit 
                  application process and ensure compliance throughout the project.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can you work on phased subdivision development?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site work for phased subdivision development, ensuring infrastructure 
                  is ready for each phase while maintaining access and minimizing disruption. We work with 
                  developers to align site work with development schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We coordinate subdivision and infrastructure site work across all of South Florida. Select 
              your location to learn more about subdivision site work in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/site-work-site-development/subdivision-infrastructure/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/subdivision-infrastructure/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/subdivision-infrastructure/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/site-work-site-development/subdivision-infrastructure/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/site-work-site-development/" className={styles.backLink}>
                ← Back to Site Work and Site Development
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Subdivision or Infrastructure Project?"
        description="Get a free quote for your subdivision or infrastructure site work project. We'll coordinate licensed contractors to prepare your site for large-scale development."
        showPhone={true}
      />
    </main>
  )
}

