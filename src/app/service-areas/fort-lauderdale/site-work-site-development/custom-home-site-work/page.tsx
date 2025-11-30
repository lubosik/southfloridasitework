import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Custom Home Site Work in Fort Lauderdale, FL | Broward County',
  description: 'Custom home site work services in Broward County for Victoria Park, Coral Ridge, Harbor Beach, and luxury neighborhoods. Licensed contractors for high-end residential projects.',
  openGraph: {
    title: 'Custom Home Site Work in Fort Lauderdale, FL | Broward County',
    description: 'Custom home site work services in Broward County for luxury residential projects.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/site-work-site-development/custom-home-site-work/`,
  },
}

export default function FortLauderdaleCustomHomeSiteWorkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Custom Home Site Work in Fort Lauderdale, FL"
        subtitle="Site preparation and development services for custom home construction throughout Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Custom home site work services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Custom home site work in Broward County is designed for custom home builders, high-end 
              homeowners, developers, and general contractors building luxury residences in neighborhoods 
              like Victoria Park, Coral Ridge, Harbor Beach, Las Olas, Rio Vista, Colee Hammock, Seven Isles, 
              and other established residential areas throughout Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home in Victoria Park, a waterfront estate in Harbor Beach, 
              or a luxury residence in Coral Ridge, our custom home site work services coordinate licensed 
              contractors with the expertise and equipment to handle complete site preparation for high-end 
              residential projects, navigating Broward County Development & Environmental Review (DER), 
              Natural Resource Protection Code requirements, and SFWMD Environmental Resource Permits with 
              attention to detail.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Custom home site work projects in Broward County typically range from 
                <strong> $25,000 to $150,000+</strong> depending on lot size, site conditions, flood 
                zone requirements, and scope of work. Luxury custom homes in areas like Victoria Park, 
                Coral Ridge, and Harbor Beach often require extensive site work due to large lot sizes, 
                elevation requirements, and waterfront considerations. Building permits range from 
                $1,440–$2,880 for the main building permit, with additional costs for plumbing and 
                electrical permits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Custom Home Site Work Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Tree Management</h3>
              <p className={styles.serviceDescription}>
                Careful site clearing and vegetation removal for custom home sites throughout Broward 
                County, with full compliance with Broward County tree protection standards requiring 
                barriers around preserved trees and hand clearing in designated preservation areas. We 
                coordinate tree removal permits and replacement requirements for protected trees.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Building Pad Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for custom home building pads at proper elevations throughout Broward 
                County, meeting Broward County building code requirements and Base Flood Elevation (BFE) 
                compliance for properties in flood zones like Fort Lauderdale Beach, Pompano Beach, and 
                coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Driveway and Access Road Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading and preparation for driveways and access roads for custom homes throughout 
                Broward County, ensuring proper drainage and compliance with Broward County requirements 
                for residential access, including proper width, setbacks, and flare-outs.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Residential Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of residential drainage systems including French drains, swales, 
                and stormwater management features to meet South Florida Water Management District 
                (SFWMD) Environmental Resource Permit requirements and Broward County Natural Resource 
                Protection Code standards for custom home properties.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utility connections including water, sewer, electrical, 
                and telecommunications for custom homes throughout Broward County, coordinating with 
                Broward County utility providers and compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Landscaping Preparation</h3>
              <p className={styles.serviceDescription}>
                Site preparation for landscaping including rough grading, soil preparation, and 
                coordination with landscape contractors for custom home properties throughout Broward 
                County, with attention to detail expected for luxury projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Custom Home Development Considerations</h2>
            <p className={styles.text}>
              Custom home site work in Broward County requires attention to unique local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Custom home projects require 
                Development & Environmental Review through ePermits OneStop for applicable building 
                permits. All DER submittals are only accepted electronically. Broward County&apos;s Planning 
                and Development Management Division ensures that proposed custom home developments comply 
                with the Broward County Land Development Code and Natural Resource Protection Code. The 
                county will not issue building permits prior to receipt of proof of payment for impact 
                fees and a copy of final Planning and Development Management Review approval.
              </li>
              <li>
                <strong>Uniform Building Permit Application:</strong> Broward County has released an 
                updated Uniform Building Permit Application with a revision date of November 14, 2025. 
                Building permits range from $1,440–$2,880 for the main building permit, with additional 
                costs for plumbing and electrical permits ($14–$720 depending on work scope). During a 
                transition period through December 31, 2025, the previous application form will still 
                be accepted.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many custom home sites in Broward County, 
                particularly in areas like Fort Lauderdale Beach, Pompano Beach, Harbor Beach, and 
                coastal neighborhoods, are in FEMA flood zones requiring specific elevation requirements 
                and Base Flood Elevation (BFE) compliance for building pads and driveways. For waterfront 
                properties common in Harbor Beach and Coral Ridge areas, elevation and seawall compliance 
                certifications are necessary, which can extend the review timeline.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, especially in 
                areas like Fort Lauderdale Beach, Pompano Beach, and coastal neighborhoods, requires 
                specialized dewatering techniques and foundation design for custom home construction, with 
                SFWMD Environmental Resource Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Tree Protection Standards:</strong> Broward County requires tree protection 
                standards for development activities, particularly important in established neighborhoods 
                like Victoria Park, Coral Ridge, and Harbor Beach. Prior to land clearing, barriers must 
                be constructed around trees designated for preservation using sturdy orange plastic 
                barricading with supports placed every five feet. Within designated preservation areas, 
                only hand clearing is permissible. Any tree damaged during development that is designated 
                for protection violates the code, and any tree that dies as a result of such damage is 
                subject to double the replacement requirements.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County including Fort 
                Lauderdale Beach, Pompano Beach, and Lauderdale-by-the-Sea feature unique soil 
                characteristics including limestone bedrock, sandy soils, and organic materials that 
                affect grading, compaction, and foundation design for custom homes.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from 
                the date of issuance. If work doesn&apos;t begin within this period, the permit will 
                expire, though extensions can be requested by contacting the Broward County permit department.
              </li>
              <li>
                <strong>Setback and Zoning Requirements:</strong> Custom home sites must comply with 
                Broward County or municipal setback requirements, zoning regulations, and lot coverage 
                restrictions. We ensure all site work meets these requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Custom Home Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate custom home site work services throughout Broward County&apos;s premier 
              residential neighborhoods, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Fort Lauderdale Luxury Neighborhoods</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Las Olas</li>
                  <li>Rio Vista</li>
                  <li>Colee Hammock</li>
                  <li>Seven Isles</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Hillsboro Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Established Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Plantation</li>
                  <li>Weston</li>
                  <li>Davie</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Luxury Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Pembroke Pines</li>
                  <li>Miramar</li>
                  <li>Cooper City</li>
                  <li>Southwest Ranches</li>
                  <li>Hollywood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Custom Home Site Work Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your custom home site work project in Broward County 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your custom home project 
                requirements, site plans, and engineering drawings to understand the full scope of site 
                work needed in Broward County, including flood zone analysis, tree protection, and 
                environmental considerations.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development & 
                Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed custom home developments 
                comply with the Broward County Land Development Code and Natural Resource Protection Code. 
                All DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits including Uniform 
                Building Permit Applications (updated November 14, 2025), SFWMD Environmental Resource 
                Permits, and other regulatory approvals. We coordinate with Broward County Building Code 
                Division, SFWMD, and other regulatory agencies as needed. The county will not issue building 
                permits prior to receipt of proof of payment for impact fees and a copy of final Planning 
                and Development Management Review approval.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your custom home project with licensed 
                contractors who have the right equipment, certifications, and experience for your specific 
                Broward County site conditions, flood zone requirements, and luxury residential development needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of custom home 
                site work activities, ensuring proper timing and minimizing conflicts between different 
                phases, accounting for Broward County weather patterns, permit processing timelines, and 
                180-day permit validity periods.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Broward County building code requirements, Natural Resource 
                Protection Code standards, and permit conditions throughout the custom home development 
                process, with attention to detail expected for luxury projects.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Broward County Building Code Division and ensure all custom home site work is completed 
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
                <h3 className={styles.faqQuestion}>What permits are required for custom home site work in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Custom home site work in Broward County requires Uniform Building Permit Applications from 
                  Broward County Building Code Division (ranging from $1,440–$2,880 for the main building 
                  permit), Development & Environmental Review (DER) through ePermits OneStop for applicable 
                  projects, SFWMD Environmental Resource Permits for activities affecting state waters and 
                  wetlands, Natural Resource Protection Code compliance, and stormwater management approvals. 
                  For waterfront properties common in Harbor Beach and Coral Ridge areas, elevation and seawall 
                  compliance certifications are necessary. The county will not issue building permits prior to 
                  receipt of proof of payment for impact fees and a copy of final Planning and Development 
                  Management Review approval. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does custom home site work take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies based on project size, site conditions, and permit processing. Custom home 
                  site work in areas like Victoria Park or Coral Ridge typically takes 4-8 weeks, while larger 
                  projects or those in flood zones may take longer. Broward County permit processing, including 
                  DER review through ePermits OneStop, can add time. For waterfront properties, elevation and 
                  seawall compliance certifications can extend the review timeline. Permits are valid for 180 
                  days from issuance. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle custom home projects in flood zones in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate custom home site work projects in flood zones throughout Broward 
                  County, including Fort Lauderdale Beach, Pompano Beach, Harbor Beach, and coastal areas. 
                  Our contractors are experienced with FEMA requirements, elevation certificates, Base Flood 
                  Elevation (BFE) compliance, and the specific drainage and grading requirements for 
                  flood-prone custom home properties in Broward County, with compliance to Natural Resource 
                  Protection Code requirements. For waterfront properties, we coordinate elevation and seawall 
                  compliance certifications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about tree protection for custom home sites in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires tree protection standards for development activities, particularly 
                  important in established neighborhoods like Victoria Park, Coral Ridge, and Harbor Beach. 
                  Prior to land clearing, barriers must be constructed around trees designated for preservation 
                  using sturdy orange plastic barricading with supports placed every five feet. These barriers 
                  must remain in place throughout the clearing period and be completely removed upon project 
                  completion. Within designated preservation areas, only hand clearing is permissible. Any tree 
                  damaged during development that is designated for protection violates the code, and any tree 
                  that dies as a result of such damage is subject to double the replacement requirements. We 
                  coordinate all tree removal and protection requirements.
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
              <a href="/service-areas/fort-lauderdale/site-work-site-development/" className={styles.backLink}>
                ← Back to Fort Lauderdale Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Custom Home Site Work Project?"
        description="Get a free quote for your custom home site work project in Broward County. We'll coordinate licensed contractors who understand Broward County DER, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, and luxury residential development requirements in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

