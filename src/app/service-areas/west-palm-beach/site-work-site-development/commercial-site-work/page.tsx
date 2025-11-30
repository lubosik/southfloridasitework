import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Commercial Site Work in West Palm Beach, FL | Palm Beach County',
  description: 'Commercial site work services in Palm Beach County for retail, office, and commercial developments. Licensed contractors for Downtown West Palm Beach, Palm Beach, Boca Raton, and Delray Beach.',
  openGraph: {
    title: 'Commercial Site Work in West Palm Beach, FL | Palm Beach County',
    description: 'Commercial site work services in Palm Beach County for retail, office, and commercial developments.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/site-work-site-development/commercial-site-work/`,
  },
}

export default function WestPalmBeachCommercialSiteWorkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Commercial Site Work in West Palm Beach, FL"
        subtitle="Site work services for retail, office, and commercial developments throughout Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Commercial site work services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Commercial site work in Palm Beach County is designed for developers, general contractors, 
              and commercial property owners developing retail centers, office buildings, mixed-use 
              developments, and commercial properties in areas like Downtown West Palm Beach, Palm Beach, 
              Boca Raton, Delray Beach, and throughout Palm Beach County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a retail center in Downtown West Palm Beach, an office building 
              in Palm Beach, or a mixed-use development in Boca Raton, our commercial site work services 
              coordinate licensed contractors with the expertise and equipment to handle complete site 
              preparation for commercial projects, navigating Palm Beach County Building Division permits, 
              Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, 
              and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Commercial site work projects in Palm Beach County typically range from 
                <strong> $100,000 to $1,000,000+</strong> depending on project size, site conditions, 
                flood zone requirements, and scope of work. Large commercial developments in Downtown West 
                Palm Beach, Palm Beach, and Boca Raton often exceed $500,000 in site work costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Commercial Site Work Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Clearing and Preparation</h3>
              <p className={styles.serviceDescription}>
                Complete site clearing, vegetation removal, and site preparation for commercial 
                developments throughout Palm Beach County, with full compliance with Palm Beach County tree 
                protection requirements and Environmental Resources Management (ERM) standards for protected 
                species and environmentally sensitive areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation and earthmoving for commercial sites in Palm Beach County, 
                accounting for high water table conditions common in areas like Palm Beach, Jupiter, and 
                coastal neighborhoods, with SFWMD Environmental Resource Permits required for activities 
                affecting state waters and wetlands.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Parking Lot and Driveway Grading</h3>
              <p className={styles.serviceDescription}>
                Precision grading for parking lots, driveways, and access roads for commercial 
                properties throughout Palm Beach County, meeting Palm Beach County building code requirements 
                and flood zone elevation standards, including Base Flood Elevation (BFE) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Comprehensive stormwater management systems including retention ponds, swales, and 
                stormwater inlets designed to meet South Florida Water Management District (SFWMD) 
                Environmental Resource Permit requirements and Palm Beach County Unified Land Development 
                Code (ULDC) standards for commercial developments.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Infrastructure Preparation</h3>
              <p className={styles.serviceDescription}>
                Trenching and preparation for utility infrastructure including water, sewer, electrical, 
                and telecommunications for commercial developments throughout Palm Beach County, coordinating 
                with Palm Beach County utility providers and compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Site Preparation and Inspection</h3>
              <p className={styles.serviceDescription}>
                Final site cleanup, erosion control installation, and coordination of all required 
                inspections with Palm Beach County Building Division to ensure commercial sites are 
                ready for building construction, with compliance to Unified Land Development Code (ULDC) 
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Commercial Development Considerations</h2>
            <p className={styles.text}>
              Commercial site work in Palm Beach County requires attention to unique local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> Commercial developments require Building 
                Division permits from Palm Beach County Building Division. Building permits must be 
                obtained before beginning construction, and the Building Division reviews plans to ensure 
                compliance with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Commercial developments may 
                require Environmental Resources Management (ERM) review for projects affecting wetlands, 
                protected species, or environmentally sensitive areas. ERM ensures that proposed commercial 
                developments comply with the Unified Land Development Code (ULDC) and environmental 
                protection requirements.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many commercial properties in Palm Beach County, 
                particularly in areas like Palm Beach, Jupiter, and coastal neighborhoods, are in FEMA 
                flood zones requiring specific elevation requirements and Base Flood Elevation (BFE) 
                compliance for parking areas and building pads.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, especially in 
                areas like Palm Beach, Jupiter, and coastal neighborhoods, requires specialized dewatering 
                techniques and foundation design for commercial structures, with SFWMD Environmental Resource 
                Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified 
                Land Development Code (ULDC) regulates environmental activities and enforces requirements 
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
                access roads, traffic management plans, and coordination with Palm Beach County traffic 
                engineering for site access and parking. Commercial developments in Downtown West Palm Beach 
                and Boca Raton require careful traffic planning.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. 
                Building Division and ERM review can add time to projects. We coordinate permit applications 
                to minimize delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Commercial Development Areas</h2>
            <p className={styles.text}>
              We coordinate commercial site work services throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Downtown West Palm Beach</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>Clematis Street</li>
                  <li>CityPlace</li>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Retail and Shopping Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Commercial Corridors</h3>
                <ul className={styles.locationItems}>
                  <li>Greenacres</li>
                  <li>Lantana</li>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
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
            <h2 className={styles.heading}>The Commercial Site Work Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your commercial site work project in Palm Beach County 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your commercial project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed in 
                Palm Beach County, including flood zone analysis and environmental considerations.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed commercial developments comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits including Building 
                Division permits, SFWMD Environmental Resource Permits, and other regulatory approvals. 
                We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other regulatory 
                agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your commercial project with licensed 
                contractors who have the right equipment, certifications, and experience for your specific 
                Palm Beach County site conditions, flood zone requirements, and commercial development needs.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of commercial 
                site work activities, ensuring proper timing and minimizing conflicts between different 
                phases, accounting for Palm Beach County weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Palm Beach County building code requirements, Unified Land 
                Development Code (ULDC) standards, and permit conditions throughout the commercial development process.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Palm Beach County Building Division and ensure all commercial site work is completed 
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
                <h3 className={styles.faqQuestion}>What permits are required for commercial site work in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Commercial site work in Palm Beach County requires Building Division permits from Palm 
                  Beach County Building Division, Environmental Resources Management (ERM) review for 
                  projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                  Permits for activities affecting state waters and wetlands, Unified Land Development Code 
                  (ULDC) compliance, and stormwater management approvals. We help identify and coordinate 
                  all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does commercial site work take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Small commercial projects in areas like Wellington or Royal Palm Beach may take 
                  4-8 weeks, while large commercial developments in Downtown West Palm Beach or Palm Beach 
                  can take 3-6 months. Palm Beach County permit processing, including ERM review, can add time. 
                  We coordinate scheduling to minimize delays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle commercial projects in flood zones in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate commercial site work projects in flood zones throughout Palm Beach 
                  County, including Palm Beach, Jupiter, and coastal areas. Our contractors are experienced 
                  with FEMA requirements, elevation certificates, Base Flood Elevation (BFE) compliance, and 
                  the specific drainage and grading requirements for flood-prone commercial properties in Palm 
                  Beach County, with compliance to Unified Land Development Code (ULDC) requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is Environmental Resources Management (ERM) for commercial projects in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Environmental Resources Management (ERM) is Palm Beach County&apos;s division responsible 
                  for reviewing projects for environmental impacts and compliance with the Unified Land 
                  Development Code (ULDC). ERM review is required for commercial projects affecting wetlands, 
                  protected species, or environmentally sensitive areas. ERM ensures that proposed commercial 
                  developments comply with environmental protection requirements and the Unified Land 
                  Development Code.
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
              <a href="/service-areas/west-palm-beach/site-work-site-development/" className={styles.backLink}>
                ← Back to West Palm Beach Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Commercial Site Work Project?"
        description="Get a free quote for your commercial site work project in Palm Beach County. We'll coordinate licensed contractors who understand Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, and commercial development requirements in neighborhoods throughout the county."
        showPhone={true}
      />
    </main>
  )
}

