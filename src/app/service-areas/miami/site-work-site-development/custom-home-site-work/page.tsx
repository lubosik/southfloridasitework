import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Custom Home Site Work in Miami, FL | Miami-Dade County',
  description: 'Custom home site work services in Miami-Dade County for Pinecrest, Coral Gables, Coconut Grove, and luxury neighborhoods. Licensed contractors for high-end residential projects.',
  openGraph: {
    title: 'Custom Home Site Work in Miami, FL | Miami-Dade County',
    description: 'Custom home site work services in Miami-Dade County for luxury residential projects.',
    url: `${siteConfig.url}/service-areas/miami/site-work-site-development/custom-home-site-work/`,
  },
}

export default function MiamiCustomHomeSiteWorkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Custom Home Site Work in Miami, FL"
        subtitle="Site preparation and development services for custom home construction throughout Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Custom home site work services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Custom home site work in Miami-Dade County is designed for custom home builders, high-end 
              homeowners, developers, and general contractors building luxury residences in neighborhoods 
              like Pinecrest, Coral Gables, Coconut Grove, Key Biscayne, Miami Beach, and other 
              established residential areas throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home in Pinecrest, a waterfront estate in Key 
              Biscayne, or a luxury residence in Coral Gables, our custom home site work services 
              coordinate licensed contractors with the expertise and equipment to handle complete site 
              preparation for high-end residential projects, navigating Miami-Dade RER and DERM 
              requirements with attention to detail.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Custom home site work projects in Miami-Dade County typically range from 
                <strong> $25,000 to $150,000+</strong> depending on lot size, site conditions, flood 
                zone requirements, and scope of work. Luxury custom homes in areas like Pinecrest, 
                Coral Gables, and Key Biscayne often require extensive site work due to large lot 
                sizes and elevation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Custom Home Site Work Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Tree Management</h3>
              <p className={styles.serviceDescription}>
                Careful site clearing and vegetation removal for custom home sites throughout Miami-Dade 
                County, with full compliance with Miami-Dade DERM tree protection ordinances. We 
                coordinate tree removal permits and replacement requirements for protected trees.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for custom home building pads at proper elevations throughout 
                Miami-Dade County, meeting Miami-Dade building code requirements and Base Flood 
                Elevation (BFE) compliance for properties in flood zones like Miami Beach and Key Biscayne.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Driveway and Access Road Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and preparation for driveways and access roads for custom homes throughout 
                Miami-Dade County, ensuring proper drainage and compliance with Miami-Dade requirements 
                for residential access.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Residential Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of residential drainage systems including French drains, swales, 
                and stormwater management features to meet South Florida Water Management District 
                (SFWMD) and Miami-Dade County requirements for custom home properties.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utility connections including water, sewer, electrical, 
                and telecommunications for custom homes throughout Miami-Dade County, coordinating 
                with Miami-Dade utility providers.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Landscaping Preparation</h3>
              <p className={styles.serviceDescription}>
                Site preparation for landscaping including rough grading, soil preparation, and 
                coordination with landscape contractors for custom home properties throughout 
                Miami-Dade County.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Custom Home Development Considerations</h2>
            <p className={styles.text}>
              Custom home site work in Miami-Dade County requires attention to unique local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Miami-Dade RER and DERM Permits:</strong> Custom home projects require permits 
                from Miami-Dade RER (Regulatory and Economic Resources) and DERM (Department of 
                Environmental Resources Management). Plan review typically takes 24 hours to 10 business 
                days for initial review. Effective October 1, 2025, Miami-Dade implemented updated permit 
                fees. Properties in incorporated municipalities like Coral Gables or Pinecrest have 
                their own building departments.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many custom home sites in Miami-Dade County, 
                particularly in areas like Miami Beach, Key Biscayne, and coastal neighborhoods, are in 
                FEMA flood zones requiring specific elevation requirements and Base Flood Elevation (BFE) 
                compliance for building pads and driveways.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, especially in areas 
                like Miami Beach, Aventura, and coastal neighborhoods, requires specialized dewatering 
                techniques and foundation design for custom home construction.
              </li>
              <li>
                <strong>Tree Protection:</strong> Miami-Dade DERM has strict tree protection ordinances, 
                particularly important in established neighborhoods like Pinecrest, Coral Gables, and 
                Coconut Grove. Tree removal requires permits and may require replacement. We coordinate 
                all tree removal and protection requirements with DERM.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including Miami 
                Beach, Key Biscayne, and Bal Harbour feature unique soil characteristics including 
                limestone bedrock, sandy soils, and organic materials that affect grading, compaction, 
                and foundation design for custom homes.
              </li>
              <li>
                <strong>Setback and Zoning Requirements:</strong> Custom home sites must comply with 
                Miami-Dade County or municipal setback requirements, zoning regulations, and lot coverage 
                restrictions. We ensure all site work meets these requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Custom Home Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate custom home site work services throughout Miami-Dade County&apos;s premier 
              residential neighborhoods, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Established Luxury Neighborhoods</h3>
                <ul className={styles.locationItems}>
                  <li>Pinecrest</li>
                  <li>Coral Gables</li>
                  <li>Coconut Grove</li>
                  <li>South Miami</li>
                  <li>Palmetto Bay</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Key Biscayne</li>
                  <li>Miami Beach</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Sunny Isles Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Urban Luxury Districts</h3>
                <ul className={styles.locationItems}>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Midtown Miami</li>
                  <li>Edgewater</li>
                  <li>Biscayne Boulevard</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Luxury Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Cutler Bay</li>
                  <li>Kendall</li>
                  <li>Westchester</li>
                  <li>Doral</li>
                  <li>Aventura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Custom Home Site Work Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your custom home site work project in Miami-Dade County 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your custom home project 
                requirements, site plans, and engineering drawings to understand the full scope of site 
                work needed in Miami-Dade County, including flood zone analysis, tree protection, and 
                environmental considerations.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits and 
                coordinate with Miami-Dade RER, DERM, SFWMD, and municipal building departments as needed. 
                We handle the permit application process and ensure compliance throughout the custom home 
                project.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your custom home project with licensed 
                contractors who have the right equipment, certifications, and experience for your specific 
                Miami-Dade site conditions, flood zone requirements, and luxury residential development needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of custom home 
                site work activities, ensuring proper timing and minimizing conflicts between different 
                phases, accounting for Miami-Dade weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Miami-Dade building code requirements, and permit conditions 
                throughout the custom home development process, with attention to detail expected for 
                luxury projects.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Miami-Dade RER or municipal building departments and ensure all custom home site work 
                is completed to standards before building construction begins.
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
                <h3 className={styles.faqQuestion}>What permits are required for custom home site work in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Custom home site work in Miami-Dade County requires building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas like 
                  Coral Gables or Pinecrest), DERM environmental resource permits for land disturbance and 
                  tree removal, SFWMD environmental resource permits, county grading permits, and stormwater 
                  management approvals. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does custom home site work take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies based on project size, site conditions, and permit processing. Custom home 
                  site work in areas like Pinecrest or Coral Gables typically takes 4-8 weeks, while larger 
                  projects or those in flood zones may take longer. Miami-Dade permit processing typically 
                  takes 24 hours to 10 business days for initial review, but can extend to 2-6 weeks for 
                  complex projects. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle custom home projects in flood zones in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate custom home site work projects in flood zones throughout Miami-Dade 
                  County, including Miami Beach, Key Biscayne, and coastal areas. Our contractors are 
                  experienced with FEMA requirements, elevation certificates, Base Flood Elevation (BFE) 
                  compliance, and the specific drainage and grading requirements for flood-prone custom home 
                  properties in Miami-Dade County.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about tree protection for custom home sites in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade DERM has strict tree protection ordinances, particularly important in 
                  established neighborhoods like Pinecrest, Coral Gables, and Coconut Grove. Tree removal 
                  requires permits and may require replacement. We coordinate all tree removal and protection 
                  requirements with DERM, ensuring compliance with tree protection ordinances for custom home 
                  projects.
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
              <a href="/services/site-work-site-development/custom-home-site-work/" className={styles.backLink}>
                ← View Custom Home Site Work (All Areas)
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
        title="Ready to Start Your Miami Custom Home Site Work Project?"
        description="Get a free quote for your custom home site work project in Miami-Dade County. We'll coordinate licensed contractors who understand Miami-Dade RER, DERM, and luxury residential development requirements in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

