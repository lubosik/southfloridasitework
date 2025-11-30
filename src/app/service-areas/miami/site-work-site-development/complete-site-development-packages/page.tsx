import type { Metadata } from 'next'
import Image from 'next/image'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Complete Site Development Packages in Miami, FL | Miami-Dade County',
  description: 'Turnkey site development packages in Miami-Dade County. Complete site work from clearing to building pad preparation for Brickell, Coral Gables, Aventura, and all Miami neighborhoods.',
  openGraph: {
    title: 'Complete Site Development Packages in Miami, FL | Miami-Dade County',
    description: 'Turnkey site development packages in Miami-Dade County for commercial and residential projects.',
    url: `${siteConfig.url}/service-areas/miami/site-work-site-development/complete-site-development-packages/`,
  },
}

export default function MiamiCompleteSiteDevelopmentPackagesPage() {
  return (
    <main>
      <HeroWithQuote
        title="Complete Site Development Packages in Miami, FL"
        subtitle="Turnkey site development from clearing to building pad preparation for commercial and residential projects across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Complete site development packages in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Complete site development packages in Miami-Dade County are ideal for developers, general 
              contractors, and property owners in neighborhoods like Brickell, Coral Gables, Aventura, 
              Coconut Grove, and throughout Miami-Dade who want a single point of coordination for all 
              site work activities. This service eliminates the need to manage multiple contractors and 
              ensures seamless coordination between different phases of site preparation.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial retail center in Doral, building a custom home 
              in Pinecrest, or preparing a subdivision in Homestead, our complete packages handle every 
              aspect of site development from start to finish, ensuring proper sequencing and quality 
              control throughout the process while navigating Miami-Dade RER and DERM requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Complete site development packages in Miami-Dade County typically start around 
                <strong> $50,000</strong> for residential projects in areas like Kendall and Westchester, 
                and range from <strong>$100,000 to $500,000+</strong> for commercial developments in 
                Brickell, Downtown Miami, and Aventura, depending on site size, flood zone requirements, 
                and scope of work required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Complete Site Development Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 1: Land Clearing and Site Preparation</h3>
              <p className={styles.serviceDescription}>
                Complete removal of vegetation, trees, stumps, and debris throughout Miami-Dade County. 
                Site clearing, grubbing, and initial site access preparation, with full compliance with 
                Miami-Dade DERM tree protection ordinances and environmental requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 2: Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation, cut and fill operations to achieve proper site elevations in 
                Miami-Dade County. Mass earthmoving to balance site grades, accounting for high water 
                table conditions common in areas like Miami Beach, Key Biscayne, and coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 3: Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading to create building pads at proper elevations throughout Miami-Dade County. 
                Rough and final grading to meet engineering specifications and Miami-Dade building code 
                requirements, including Base Flood Elevation (BFE) compliance for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 4: Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive drainage systems including retention ponds, 
                swales, stormwater inlets, and piping to meet South Florida Water Management District 
                (SFWMD) and Miami-Dade County requirements, essential for properties throughout the county.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 5: Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities, coordination with Miami-Dade County utility providers, and 
                preparation of infrastructure connections for water, sewer, electrical, and 
                telecommunications throughout Miami-Dade County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Phase 6: Erosion Control and Final Site Preparation</h3>
              <p className={styles.serviceDescription}>
                Implementation of erosion control measures, slope stabilization, and sediment control 
                to protect the site and surrounding areas, meeting Miami-Dade DERM environmental 
                requirements before building construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Site Development Process</h2>
            <p className={styles.text}>
              Our coordinated approach to complete site development in Miami-Dade County ensures your 
              project moves smoothly from initial planning through final site preparation, with full 
              compliance with Miami-Dade RER and DERM requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed 
                in Miami-Dade County, including flood zone analysis and environmental considerations.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits and 
                coordinate with Miami-Dade RER (Regulatory and Economic Resources), DERM (Department of 
                Environmental Resources Management), SFWMD, and municipal building departments as needed. 
                Effective October 1, 2025, Miami-Dade implemented updated permit fees and procedures.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment, certifications, and experience for your specific Miami-Dade 
                site conditions, flood zone requirements, and regulatory compliance needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of site work 
                activities, ensuring proper timing and minimizing conflicts between different phases, 
                accounting for Miami-Dade weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Miami-Dade building code requirements, and permit conditions 
                throughout the development process.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Miami-Dade RER and ensure all site work is completed to standards before building 
                construction begins.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Specific Considerations</h2>
            <p className={styles.text}>
              Complete site development in Miami-Dade County requires attention to unique local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Miami-Dade RER and DERM Permits:</strong> All projects requiring County 
                Municipal approval must be submitted directly to Miami-Dade Department of Regulatory 
                & Economic Resources (RER). DERM handles Plan Review Approval for environmental and 
                drainage-related aspects. Plan review typically takes 24 hours to 10 business days 
                for initial review.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many Miami-Dade properties in neighborhoods 
                like Miami Beach, Key Biscayne, and coastal areas are in FEMA flood zones requiring 
                specific elevation requirements and Base Flood Elevation (BFE) compliance. We ensure 
                all site work meets these requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, particularly 
                in areas like Miami Beach, Aventura, and coastal neighborhoods, requires specialized 
                dewatering techniques and foundation design. Our contractors understand local 
                groundwater conditions.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including 
                Miami Beach, Key Biscayne, and Bal Harbour feature unique soil characteristics 
                including limestone bedrock, sandy soils, and organic materials that affect grading, 
                compaction, and foundation design.
              </li>
              <li>
                <strong>Municipal vs. County Jurisdiction:</strong> Properties in incorporated 
                municipalities like Coral Gables, Aventura, and Miami Beach have their own building 
                departments and permit requirements. We coordinate with the appropriate jurisdiction 
                for your project location.
              </li>
              <li>
                <strong>Tree Protection:</strong> Miami-Dade DERM has strict tree protection ordinances. 
                Tree removal requires permits and may require replacement. We coordinate all tree 
                removal and protection requirements with DERM.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Service Areas</h2>
            <p className={styles.text}>
              We coordinate complete site development packages throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Beach Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Sunny Isles Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Urban Core and Financial District</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown Miami</li>
                  <li>Brickell</li>
                  <li>Coconut Grove</li>
                  <li>Little Havana</li>
                  <li>Wynwood</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Established Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Coral Gables</li>
                  <li>Pinecrest</li>
                  <li>Palmetto Bay</li>
                  <li>South Miami</li>
                  <li>Cutler Bay</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban and Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Aventura</li>
                  <li>Kendall</li>
                  <li>Westchester</li>
                  <li>Hialeah</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>South Miami-Dade</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Cutler Bay</li>
                  <li>Palmetto Bay</li>
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
                <h3 className={styles.faqQuestion}>What permits are required for complete site development in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. For unincorporated Miami-Dade County, 
                  you&apos;ll need building permits from Miami-Dade RER, DERM environmental resource permits 
                  for land disturbance and tree removal, SFWMD environmental resource permits, county grading 
                  permits, and stormwater management approvals. Properties in incorporated municipalities like 
                  Coral Gables or Aventura require permits from their respective municipal building departments. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does complete site development take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit processing. 
                  Simple residential projects in areas like Kendall or Westchester may take 2-4 weeks, while 
                  large commercial developments in Brickell or Downtown Miami can take several months. 
                  Miami-Dade permit processing typically takes 24 hours to 10 business days for initial review, 
                  but can extend to 2-6 weeks for complex projects. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle projects in flood zones in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate complete site development projects in flood zones throughout Miami-Dade 
                  County, including Miami Beach, Key Biscayne, and coastal areas. Our contractors are 
                  experienced with FEMA requirements, elevation certificates, Base Flood Elevation (BFE) 
                  compliance, and the specific drainage and grading requirements for flood-prone areas in 
                  Miami-Dade County.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between Miami-Dade RER and DERM?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade RER (Regulatory and Economic Resources) handles direct submission of projects 
                  requiring County Municipal approval and building permits. DERM (Department of Environmental 
                  Resources Management) oversees Plan Review Approval for environmental and drainage-related 
                  aspects of development, including tree protection, stormwater management, and environmental 
                  compliance. Both departments must approve projects in unincorporated Miami-Dade County.
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
              <a href="/services/site-work-site-development/complete-site-development-packages/" className={styles.backLink}>
                ← View Complete Site Development Packages (All Areas)
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
        title="Ready to Start Your Miami Site Development Project?"
        description="Get a free quote for your complete site development package in Miami-Dade County. We'll coordinate licensed contractors who understand Miami-Dade RER, DERM, and local conditions in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

