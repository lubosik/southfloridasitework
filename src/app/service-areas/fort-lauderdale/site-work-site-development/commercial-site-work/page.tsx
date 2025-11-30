import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Commercial Site Work in Fort Lauderdale, FL | Broward County',
  description: 'Commercial site work services in Broward County for retail, office, and commercial developments. Licensed contractors for Las Olas, Downtown Fort Lauderdale, Hollywood, and Pompano Beach.',
  openGraph: {
    title: 'Commercial Site Work in Fort Lauderdale, FL | Broward County',
    description: 'Commercial site work services in Broward County for retail, office, and commercial developments.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/site-work-site-development/commercial-site-work/`,
  },
}

export default function FortLauderdaleCommercialSiteWorkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Commercial Site Work in Fort Lauderdale, FL"
        subtitle="Site work services for retail, office, and commercial developments throughout Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Commercial site work services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Commercial site work in Broward County is designed for developers, general contractors, 
              and commercial property owners developing retail centers, office buildings, mixed-use 
              developments, and commercial properties in areas like Las Olas Boulevard, Downtown Fort 
              Lauderdale, Hollywood, Pompano Beach, and throughout Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center on Las Olas Boulevard, an office building 
              in Downtown Fort Lauderdale, or a mixed-use development in Hollywood, our commercial site 
              work services coordinate licensed contractors with the expertise and equipment to handle 
              complete site preparation for commercial projects, navigating Broward County Development & 
              Environmental Review (DER), Natural Resource Protection Code requirements, and SFWMD 
              Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Commercial site work projects in Broward County typically range from 
                <strong> $100,000 to $1,000,000+</strong> depending on project size, site conditions, 
                flood zone requirements, and scope of work. Large commercial developments on Las Olas 
                Boulevard, Downtown Fort Lauderdale, and Hollywood often exceed $500,000 in site work costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Commercial Site Work Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Preparation</h3>
              <p className={styles.serviceDescription}>
                Complete site clearing, vegetation removal, and site preparation for commercial 
                developments throughout Broward County, with full compliance with Broward County tree 
                protection standards requiring barriers around preserved trees and hand clearing in 
                designated preservation areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation and earthmoving for commercial sites in Broward County, 
                accounting for high water table conditions common in areas like Fort Lauderdale Beach, 
                Pompano Beach, and coastal neighborhoods, with SFWMD Environmental Resource Permits 
                required for activities affecting state waters and wetlands.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for parking lots, driveways, and access roads for commercial 
                properties throughout Broward County, meeting Broward County building code requirements 
                and flood zone elevation standards, including Base Flood Elevation (BFE) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Comprehensive stormwater management systems including retention ponds, swales, and 
                stormwater inlets designed to meet South Florida Water Management District (SFWMD) 
                Environmental Resource Permit requirements and Broward County Natural Resource Protection 
                Code standards for commercial developments.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utility infrastructure including water, sewer, electrical, 
                and telecommunications for commercial developments throughout Broward County, coordinating 
                with Broward County utility providers and compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Site Preparation and Inspection</h3>
              <p className={styles.serviceDescription}>
                Final site cleanup, erosion control installation, and coordination of all required 
                inspections with Broward County Building Code Division to ensure commercial sites are 
                ready for building construction, with compliance to Natural Resource Protection Code 
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Commercial Development Considerations</h2>
            <p className={styles.text}>
              Commercial site work in Broward County requires attention to unique local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Commercial developments 
                require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code. The county 
                will not issue building permits prior to receipt of proof of payment for impact fees and 
                a copy of final Planning and Development Management Review approval.
              </li>
              <li>
                <strong>Uniform Building Permit Application:</strong> Broward County has released an 
                updated Uniform Building Permit Application with a revision date of November 14, 2025. 
                The new application requires indication of Private Provider association and includes a 
                license-exempt contractor option. During a transition period through December 31, 2025, 
                the previous application form will still be accepted.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many commercial properties in Broward County, 
                particularly in areas like Fort Lauderdale Beach, Pompano Beach, and coastal neighborhoods, 
                are in FEMA flood zones requiring specific elevation requirements and Base Flood Elevation 
                (BFE) compliance for parking areas and building pads.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, especially in 
                areas like Fort Lauderdale Beach, Pompano Beach, and coastal neighborhoods, requires 
                specialized dewatering techniques and foundation design for commercial structures, with 
                SFWMD Environmental Resource Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Commercial developments must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> SFWMD Environmental Resource Permits 
                are required for activities affecting state waters and wetlands, including dredging and 
                filling, constructing flood protection facilities, providing stormwater containment and 
                treatment, site grading, and building dams or reservoirs. As of June 28, 2024, new water 
                quality performance standards were implemented.
              </li>
              <li>
                <strong>Traffic and Access Requirements:</strong> Commercial developments require proper 
                access roads, traffic management plans, and coordination with Broward County traffic 
                engineering for site access and parking. Projects like the 811 Las Olas mixed-use 
                development utilize off-site parking strategies that require traffic studies.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from 
                the date of issuance. If work doesn&apos;t begin within this period, the permit will 
                expire, though extensions can be requested by contacting the Broward County permit department.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Commercial Development Areas</h2>
            <p className={styles.text}>
              We coordinate commercial site work services throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Las Olas and Downtown Fort Lauderdale</h3>
                <ul className={styles.locationItems}>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Rio Vista</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Retail and Shopping Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Plantation</li>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Hillsboro Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Commercial Corridors</h3>
                <ul className={styles.locationItems}>
                  <li>Davie</li>
                  <li>Margate</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                  <li>Pembroke Pines</li>
                  <li>Miramar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Commercial Site Work Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your commercial site work project in Broward County 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your commercial project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed in 
                Broward County, including flood zone analysis and environmental considerations.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development & 
                Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed commercial developments 
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
                <strong>Contractor Selection:</strong> We match your commercial project with licensed 
                contractors who have the right equipment, certifications, and experience for your specific 
                Broward County site conditions, flood zone requirements, and commercial development needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of commercial 
                site work activities, ensuring proper timing and minimizing conflicts between different 
                phases, accounting for Broward County weather patterns, permit processing timelines, and 
                180-day permit validity periods.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Broward County building code requirements, Natural Resource 
                Protection Code standards, and permit conditions throughout the commercial development process.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Broward County Building Code Division and ensure all commercial site work is completed 
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
                <h3 className={styles.faqQuestion}>What permits are required for commercial site work in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Commercial site work in Broward County requires Uniform Building Permit Applications from 
                  Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for activities 
                  affecting state waters and wetlands, Natural Resource Protection Code compliance, and 
                  stormwater management approvals. The county will not issue building permits prior to receipt 
                  of proof of payment for impact fees and a copy of final Planning and Development Management 
                  Review approval. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does commercial site work take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Small commercial projects in areas like Plantation or Davie may take 
                  4-8 weeks, while large commercial developments on Las Olas Boulevard or in Downtown 
                  Fort Lauderdale can take 3-6 months. Broward County permit processing, including DER 
                  review through ePermits OneStop, can add time. Permits are valid for 180 days from 
                  issuance. We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle commercial projects in flood zones in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate commercial site work projects in flood zones throughout Broward 
                  County, including Fort Lauderdale Beach, Pompano Beach, and coastal areas. Our 
                  contractors are experienced with FEMA requirements, elevation certificates, Base Flood 
                  Elevation (BFE) compliance, and the specific drainage and grading requirements for 
                  flood-prone commercial properties in Broward County, with compliance to Natural Resource 
                  Protection Code requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is Development & Environmental Review (DER) for commercial projects in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Development & Environmental Review (DER) is required for applicable commercial building 
                  permits in Broward County. All submittals requiring DER are only accepted electronically 
                  through ePermits OneStop. Broward County&apos;s Planning and Development Management Division 
                  ensures that proposed commercial developments comply with the Broward County Land Development 
                  Code and Natural Resource Protection Code. The county will not issue building permits prior 
                  to receipt of proof of payment for impact fees and a copy of final Planning and Development 
                  Management Review approval.
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
              <a href="/service-areas/fort-lauderdale/site-work-site-development/" className={styles.backLink}>
                ← Back to Fort Lauderdale Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Commercial Site Work Project?"
        description="Get a free quote for your commercial site work project in Broward County. We'll coordinate licensed contractors who understand Broward County DER, Natural Resource Protection Code compliance, SFWMD Environmental Resource Permits, and commercial development requirements in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

