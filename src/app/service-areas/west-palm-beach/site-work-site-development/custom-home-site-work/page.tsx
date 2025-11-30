import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Custom Home Site Work in West Palm Beach, FL | Palm Beach County',
  description: 'Custom home site work services in Palm Beach County for Downtown West Palm Beach, El Cid, Grandview Heights, Palm Beach, and luxury neighborhoods. Licensed contractors for high-end residential projects.',
  openGraph: {
    title: 'Custom Home Site Work in West Palm Beach, FL | Palm Beach County',
    description: 'Custom home site work services in Palm Beach County for luxury residential projects.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/site-work-site-development/custom-home-site-work/`,
  },
}

export default function WestPalmBeachCustomHomeSiteWorkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Custom Home Site Work in West Palm Beach, FL"
        subtitle="Site preparation and development services for custom home construction throughout Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Custom home site work services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Custom home site work in Palm Beach County is designed for custom home builders, high-end 
              homeowners, developers, and general contractors building luxury residences in neighborhoods 
              like Downtown West Palm Beach, El Cid, Grandview Heights, Palm Beach, Northwood, and other 
              established residential areas throughout Palm Beach County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home in Palm Beach, a waterfront estate in Jupiter, 
              or a luxury residence in Boca Raton, our custom home site work services coordinate licensed 
              contractors with the expertise and equipment to handle complete site preparation for high-end 
              residential projects, navigating Palm Beach County Building Division permits, Environmental 
              Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, and SFWMD 
              Environmental Resource Permits with attention to detail.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Custom home site work projects in Palm Beach County typically range from 
                <strong> $25,000 to $150,000+</strong> depending on lot size, site conditions, flood 
                zone requirements, and scope of work. Luxury custom homes in areas like Palm Beach, 
                Jupiter, and Boca Raton often require extensive site work due to large lot sizes, 
                elevation requirements, and waterfront considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Custom Home Site Work Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Tree Management</h3>
              <p className={styles.serviceDescription}>
                Careful site clearing and vegetation removal for custom home sites throughout Palm Beach 
                County, with full compliance with Palm Beach County tree protection requirements and 
                Environmental Resources Management (ERM) standards for protected species and environmentally 
                sensitive areas. We coordinate tree removal permits and replacement requirements for protected trees.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for custom home building pads at proper elevations throughout Palm Beach 
                County, meeting Palm Beach County building code requirements and Base Flood Elevation (BFE) 
                compliance for properties in flood zones like Palm Beach, Jupiter, and coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Driveway and Access Road Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and preparation for driveways and access roads for custom homes throughout 
                Palm Beach County, ensuring proper drainage and compliance with Palm Beach County requirements 
                for residential access, including proper width, setbacks, and flare-outs.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Residential Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of residential drainage systems including French drains, swales, 
                and stormwater management features to meet South Florida Water Management District 
                (SFWMD) Environmental Resource Permit requirements and Palm Beach County Unified Land 
                Development Code (ULDC) standards for custom home properties.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utility connections including water, sewer, electrical, 
                and telecommunications for custom homes throughout Palm Beach County, coordinating with 
                Palm Beach County utility providers and compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Landscaping Preparation</h3>
              <p className={styles.serviceDescription}>
                Site preparation for landscaping including rough grading, soil preparation, and 
                coordination with landscape contractors for custom home properties throughout Palm Beach 
                County, with attention to detail expected for luxury projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Custom Home Development Considerations</h2>
            <p className={styles.text}>
              Custom home site work in Palm Beach County requires attention to unique local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> Custom home projects require Building 
                Division permits from Palm Beach County Building Division. Building permits must be 
                obtained before beginning construction, and the Building Division reviews plans to ensure 
                compliance with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Custom home projects may 
                require Environmental Resources Management (ERM) review for projects affecting wetlands, 
                protected species, or environmentally sensitive areas. ERM ensures that proposed custom 
                home developments comply with the Unified Land Development Code (ULDC) and environmental 
                protection requirements.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many custom home sites in Palm Beach County, 
                particularly in areas like Palm Beach, Jupiter, and coastal neighborhoods, are in FEMA 
                flood zones requiring specific elevation requirements and Base Flood Elevation (BFE) 
                compliance for building pads and driveways. For waterfront properties common in Palm Beach 
                and Jupiter areas, elevation and seawall compliance certifications are necessary, which can 
                extend the review timeline.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, especially in 
                areas like Palm Beach, Jupiter, and coastal neighborhoods, requires specialized dewatering 
                techniques and foundation design for custom home construction, with SFWMD Environmental Resource 
                Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods like El Cid, 
                Grandview Heights, and Palm Beach. Protected trees must be identified and preserved according 
                to county standards, with Environmental Resources Management (ERM) review required for tree 
                removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Palm Beach County including 
                Palm Beach, Jupiter, and Juno Beach feature unique soil characteristics including limestone 
                bedrock, sandy soils, and organic materials that affect grading, compaction, and foundation 
                design for custom homes.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. Building 
                Division and ERM review can add time to projects. We coordinate permit applications to minimize 
                delays.
              </li>
              <li>
                <strong>Setback and Zoning Requirements:</strong> Custom home sites must comply with 
                Palm Beach County or municipal setback requirements, zoning regulations, and lot coverage 
                restrictions. We ensure all site work meets these requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Custom Home Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate custom home site work services throughout Palm Beach County&apos;s premier 
              residential neighborhoods, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>West Palm Beach Luxury Neighborhoods</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>South of Southern</li>
                  <li>Flamingo Park</li>
                  <li>Old Northwood</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Established Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Wellington</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Luxury Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Royal Palm Beach</li>
                  <li>Greenacres</li>
                  <li>Lantana</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Custom Home Site Work Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your custom home site work project in Palm Beach County 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your custom home project 
                requirements, site plans, and engineering drawings to understand the full scope of site 
                work needed in Palm Beach County, including flood zone analysis, tree protection, and 
                environmental considerations.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed custom home developments comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits including Building 
                Division permits, SFWMD Environmental Resource Permits, and other regulatory approvals. 
                We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other regulatory 
                agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your custom home project with licensed 
                contractors who have the right equipment, certifications, and experience for your specific 
                Palm Beach County site conditions, flood zone requirements, and luxury residential development needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of custom home 
                site work activities, ensuring proper timing and minimizing conflicts between different 
                phases, accounting for Palm Beach County weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Palm Beach County building code requirements, Unified Land 
                Development Code (ULDC) standards, and permit conditions throughout the custom home development 
                process, with attention to detail expected for luxury projects.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Palm Beach County Building Division and ensure all custom home site work is completed 
                to standards before building construction begins.
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
                <h3 className={styles.faqQuestion}>What permits are required for custom home site work in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Custom home site work in Palm Beach County requires Building Division permits from Palm 
                  Beach County Building Division, Environmental Resources Management (ERM) review for 
                  projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                  Permits for activities affecting state waters and wetlands, Unified Land Development Code 
                  (ULDC) compliance, and stormwater management approvals. For waterfront properties common in 
                  Palm Beach and Jupiter areas, elevation and seawall compliance certifications are necessary. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does custom home site work take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies based on project size, site conditions, and permit processing. Custom home 
                  site work in areas like El Cid or Grandview Heights typically takes 4-8 weeks, while larger 
                  projects or those in flood zones may take longer. Palm Beach County permit processing, including 
                  ERM review, can add time. For waterfront properties, elevation and seawall compliance 
                  certifications can extend the review timeline. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle custom home projects in flood zones in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate custom home site work projects in flood zones throughout Palm Beach 
                  County, including Palm Beach, Jupiter, and coastal areas. Our contractors are experienced 
                  with FEMA requirements, elevation certificates, Base Flood Elevation (BFE) compliance, and 
                  the specific drainage and grading requirements for flood-prone custom home properties in Palm 
                  Beach County, with compliance to Unified Land Development Code (ULDC) requirements. For 
                  waterfront properties, we coordinate elevation and seawall compliance certifications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about tree protection for custom home sites in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County requires tree protection for development activities, particularly important 
                  in established neighborhoods like El Cid, Grandview Heights, and Palm Beach. Protected trees 
                  must be identified and preserved according to county standards, with Environmental Resources 
                  Management (ERM) review required for tree removal in environmentally sensitive areas. Tree 
                  protection ensures proper environmental stewardship and compliance with Unified Land Development 
                  Code (ULDC) requirements. We coordinate all tree removal and protection requirements.
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
              <a href="/service-areas/west-palm-beach/site-work-site-development/" className={styles.backLink}>
                ← Back to West Palm Beach Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Custom Home Site Work Project?"
        description="Get a free quote for your custom home site work project in Palm Beach County. We'll coordinate licensed contractors who understand Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, and luxury residential development requirements in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

