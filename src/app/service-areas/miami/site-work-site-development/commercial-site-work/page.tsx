import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Commercial Site Work in Miami, FL | Miami-Dade County',
  description: 'Commercial site work services in Miami-Dade County for retail, office, and commercial developments. Licensed contractors for Brickell, Downtown Miami, Aventura, and Doral.',
  openGraph: {
    title: 'Commercial Site Work in Miami, FL | Miami-Dade County',
    description: 'Commercial site work services in Miami-Dade County for retail, office, and commercial developments.',
    url: `${siteConfig.url}/service-areas/miami/site-work-site-development/commercial-site-work/`,
  },
}

export default function MiamiCommercialSiteWorkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Commercial Site Work in Miami, FL"
        subtitle="Site work services for retail, office, and commercial developments throughout Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Commercial site work services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Commercial site work in Miami-Dade County is designed for developers, general contractors, 
              and commercial property owners developing retail centers, office buildings, mixed-use 
              developments, and commercial properties in neighborhoods like Brickell, Downtown Miami, 
              Aventura, Doral, and throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center in Aventura, an office building in Brickell, 
              or a mixed-use development in Doral, our commercial site work services coordinate licensed 
              contractors with the expertise and equipment to handle complete site preparation for 
              commercial projects, navigating Miami-Dade RER and DERM requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Commercial site work projects in Miami-Dade County typically range from 
                <strong> $100,000 to $1,000,000+</strong> depending on project size, site conditions, 
                flood zone requirements, and scope of work. Large commercial developments in areas like 
                Brickell, Downtown Miami, and Aventura often exceed $500,000 in site work costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Commercial Site Work Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Preparation</h3>
              <p className={styles.serviceDescription}>
                Complete site clearing, vegetation removal, and site preparation for commercial 
                developments throughout Miami-Dade County, with full compliance with Miami-Dade DERM 
                tree protection ordinances and environmental requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation and earthmoving for commercial sites in Miami-Dade County, 
                accounting for high water table conditions common in areas like Miami Beach, Aventura, 
                and coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for parking lots, driveways, and access roads for commercial 
                properties throughout Miami-Dade County, meeting Miami-Dade building code requirements 
                and flood zone elevation standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Comprehensive stormwater management systems including retention ponds, swales, and 
                stormwater inlets designed to meet South Florida Water Management District (SFWMD) 
                and Miami-Dade County requirements for commercial developments.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utility infrastructure including water, sewer, electrical, 
                and telecommunications for commercial developments throughout Miami-Dade County, 
                coordinating with Miami-Dade utility providers.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Site Preparation and Inspection</h3>
              <p className={styles.serviceDescription}>
                Final site cleanup, erosion control installation, and coordination of all required 
                inspections with Miami-Dade RER to ensure commercial sites are ready for building 
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Commercial Development Considerations</h2>
            <p className={styles.text}>
              Commercial site work in Miami-Dade County requires attention to unique local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Miami-Dade RER and DERM Permits:</strong> Commercial developments require permits 
                from Miami-Dade RER (Regulatory and Economic Resources) and DERM (Department of 
                Environmental Resources Management). Plan review typically takes 24 hours to 10 business 
                days for initial review, with complex projects taking 2-6 weeks. Effective October 1, 
                2025, Miami-Dade implemented updated permit fees.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many commercial properties in Miami-Dade County, 
                particularly in areas like Miami Beach, Brickell, and coastal neighborhoods, are in 
                FEMA flood zones requiring specific elevation requirements and Base Flood Elevation (BFE) 
                compliance for parking areas and building pads.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, especially in areas 
                like Aventura, Miami Beach, and coastal neighborhoods, requires specialized dewatering 
                techniques and foundation design for commercial structures.
              </li>
              <li>
                <strong>Municipal vs. County Jurisdiction:</strong> Commercial properties in incorporated 
                municipalities like Aventura, Doral, and Miami Beach have their own building departments 
                and permit requirements. We coordinate with the appropriate jurisdiction for your project 
                location.
              </li>
              <li>
                <strong>Traffic and Access Requirements:</strong> Commercial developments require proper 
                access roads, traffic management plans, and coordination with Miami-Dade County traffic 
                engineering for site access and parking.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Commercial developments must meet SFWMD and 
                Miami-Dade County stormwater management requirements, including retention/detention 
                systems and water quality treatment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Commercial Development Areas</h2>
            <p className={styles.text}>
              We coordinate commercial site work services throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Financial and Business Districts</h3>
                <ul className={styles.locationItems}>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Biscayne Boulevard Corridor</li>
                  <li>Midtown Miami</li>
                  <li>Wynwood</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Retail and Shopping Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Aventura</li>
                  <li>Doral</li>
                  <li>Coral Gables</li>
                  <li>Coconut Grove</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Bal Harbour</li>
                  <li>Sunny Isles Beach</li>
                  <li>Key Biscayne</li>
                  <li>Surfside</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Commercial Corridors</h3>
                <ul className={styles.locationItems}>
                  <li>Westchester</li>
                  <li>Hialeah</li>
                  <li>Homestead</li>
                  <li>Cutler Bay</li>
                  <li>Palmetto Bay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Commercial Site Work Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your commercial site work project in Miami-Dade County 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your commercial project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed in 
                Miami-Dade County, including flood zone analysis and environmental considerations.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits and 
                coordinate with Miami-Dade RER, DERM, SFWMD, and municipal building departments as needed. 
                We handle the permit application process and ensure compliance throughout the project.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your commercial project with licensed 
                contractors who have the right equipment, certifications, and experience for your specific 
                Miami-Dade site conditions, flood zone requirements, and commercial development needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of commercial 
                site work activities, ensuring proper timing and minimizing conflicts between different 
                phases, accounting for Miami-Dade weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Miami-Dade building code requirements, and permit conditions 
                throughout the commercial development process.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Miami-Dade RER and ensure all commercial site work is completed to standards before 
                building construction begins.
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
                <h3 className={styles.faqQuestion}>What permits are required for commercial site work in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Commercial site work in Miami-Dade County requires building permits from Miami-Dade RER, 
                  DERM environmental resource permits for land disturbance and tree removal, SFWMD 
                  environmental resource permits, county grading permits, and stormwater management 
                  approvals. Properties in incorporated municipalities like Aventura or Doral require 
                  permits from their respective municipal building departments. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does commercial site work take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Small commercial projects in areas like Kendall or Westchester may take 
                  4-8 weeks, while large commercial developments in Brickell or Downtown Miami can take 
                  3-6 months. Miami-Dade permit processing typically takes 24 hours to 10 business days 
                  for initial review, but can extend to 2-6 weeks for complex commercial projects. We 
                  coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle commercial projects in flood zones in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate commercial site work projects in flood zones throughout Miami-Dade 
                  County, including Miami Beach, Brickell, and coastal areas. Our contractors are 
                  experienced with FEMA requirements, elevation certificates, Base Flood Elevation (BFE) 
                  compliance, and the specific drainage and grading requirements for flood-prone commercial 
                  properties in Miami-Dade County.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between Miami-Dade RER and DERM for commercial projects?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade RER (Regulatory and Economic Resources) handles direct submission of commercial 
                  projects requiring County Municipal approval and building permits. DERM (Department of 
                  Environmental Resources Management) oversees Plan Review Approval for environmental and 
                  drainage-related aspects of commercial development, including tree protection, stormwater 
                  management, and environmental compliance. Both departments must approve commercial projects 
                  in unincorporated Miami-Dade County.
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
              <a href="/services/site-work-site-development/commercial-site-work/" className={styles.backLink}>
                ← View Commercial Site Work (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/miami/site-work-site-development/" className={styles.backLink}>
                ← Back to Miami Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Commercial Site Work Project?"
        description="Get a free quote for your commercial site work project in Miami-Dade County. We'll coordinate licensed contractors who understand Miami-Dade RER, DERM, and commercial development requirements in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

