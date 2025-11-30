import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work & Site Development in Fort Lauderdale, FL | Broward County',
  description: 'Complete site work and site development services in Broward County. Commercial and residential site development packages.',
  openGraph: {
    title: 'Site Work & Site Development in Fort Lauderdale, FL | Broward County',
    description: 'Complete site work and site development services in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/site-work-site-development/`,
  },
}

export default function FortLauderdaleSiteWorkSiteDevelopmentPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work and Site Development in Fort Lauderdale, FL"
        subtitle="Complete site development services for commercial and residential projects across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and site development services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our site work and site development services in Broward County are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need comprehensive site preparation for their construction 
              projects in Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial retail center on Las Olas Boulevard, building 
              a custom home in Victoria Park, or preparing land for a new subdivision in Weston, we 
              coordinate licensed contractors with the expertise and equipment to handle complete site 
              development from start to finish, with full understanding of Broward County requirements 
              including Development & Environmental Review (DER), Natural Resource Protection Code 
              compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Site work and site development projects in Broward County typically start around 
                <strong> $25,000</strong> and can range significantly higher depending on project scope, 
                site conditions, flood zone requirements, and regulatory requirements. Commercial 
                developments and large-scale residential projects often exceed $100,000 in site work costs. 
                Projects requiring Development & Environmental Review (DER) through ePermits OneStop may 
                have additional permit processing costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Work and Site Development Includes in Fort Lauderdale</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive site work services cover all phases of site development in Broward County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Land Clearing and Vegetation Removal</h3>
              <p className={styles.serviceDescription}>
                Complete removal of trees, vegetation, and debris to prepare the site for development. 
                Includes stump removal, grubbing, and site cleanup. All work complies with Broward County 
                tree protection standards requiring barriers around preserved trees and hand clearing in 
                designated preservation areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation, cut and fill operations, and earthmoving to achieve proper site 
                elevations and prepare for building foundations and infrastructure. Specialized techniques 
                for Broward County&apos;s high water table conditions, with SFWMD Environmental Resource 
                Permits required for activities affecting state waters and wetlands.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading to create building pads at proper elevations, including rough and 
                final grading to meet engineering specifications and Broward County building code requirements, 
                including Base Flood Elevation (BFE) compliance for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive drainage systems including retention ponds, 
                swales, stormwater inlets, and piping to meet South Florida Water Management District 
                (SFWMD) Environmental Resource Permit requirements and Broward County Natural Resource 
                Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities, coordination with utility companies, and preparation of 
                infrastructure connections for water, sewer, electrical, and telecommunications in 
                Broward County, with compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Implementation of erosion control measures, slope stabilization, and sediment control 
                to protect the site and surrounding areas during and after construction, meeting Broward 
                County Natural Resource Protection Code requirements and environmental protection standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Site Development Considerations</h2>
            <p className={styles.text}>
              Site development in Broward County presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Broward County requires 
                Development & Environmental Review through ePermits OneStop for applicable building 
                permits. All submittals requiring DER are only accepted electronically, and the county 
                will not issue building permits prior to receipt of proof of payment for impact fees 
                and a copy of final Planning and Development Management Review approval.
              </li>
              <li>
                <strong>Uniform Building Permit Application:</strong> Broward County has released an 
                updated Uniform Building Permit Application with a revision date of November 14, 2025. 
                The new application requires indication of Private Provider association and includes a 
                license-exempt contractor option. During a transition period through December 31, 2025, 
                the previous application form will still be accepted.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Compliance ensures proper environmental protection and regulatory 
                adherence.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> SFWMD Environmental Resource Permits 
                are required for activities affecting state waters and wetlands, including dredging and 
                filling, constructing flood protection facilities, providing stormwater containment and 
                treatment, site grading, and building dams or reservoirs. As of June 28, 2024, new water 
                quality performance standards were implemented.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table requires 
                careful planning for excavation, drainage, and foundation preparation. Proper 
                dewatering and drainage systems are essential for successful site development, with 
                SFWMD permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many Broward County properties are in flood 
                zones, requiring specific elevation requirements and stormwater management systems 
                that comply with FEMA and Broward County regulations. Base Flood Elevation (BFE) 
                compliance is essential for properties in flood zones.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Fort Lauderdale and 
                Broward County have unique soil characteristics including limestone bedrock, sandy 
                soils, and organic materials that affect grading, compaction, and foundation design. 
                Our contractors are experienced with these conditions.
              </li>
              <li>
                <strong>Tree Protection Standards:</strong> Broward County requires tree protection 
                standards for development activities. Prior to land clearing, barriers must be 
                constructed around trees designated for preservation using sturdy orange plastic 
                barricading with supports placed every five feet. Within designated preservation areas, 
                only hand clearing is permissible.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from 
                the date of issuance. If work doesn&apos;t begin within this period, the permit will 
                expire, though extensions can be requested by contacting the Broward County permit 
                department.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Site development must account for 
                hurricane-force winds and storm surge. Erosion control, proper drainage, and site 
                preparation enhance property resilience in Fort Lauderdale and throughout Broward County.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Development Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach to site development ensures your Broward County project 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed 
                in Broward County, including Development & Environmental Review (DER) requirements.
              </li>
              <li>
                <strong>DER Coordination:</strong> We help identify required Development & Environmental 
                Review through ePermits OneStop and coordinate with Broward County Planning and Development 
                Management Division to ensure proposed developments comply with the Broward County Land 
                Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits including Uniform 
                Building Permit Applications, SFWMD Environmental Resource Permits, and other regulatory 
                approvals. We coordinate with Broward County Building Code Division, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment, certifications, and experience for your specific Broward 
                County site conditions and requirements.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of site work 
                activities, ensuring proper timing and minimizing conflicts between different phases, 
                accounting for Broward County weather, permit processing timelines, and 180-day permit 
                validity periods.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Broward County building code requirements, Natural Resource 
                Protection Code standards, and permit conditions.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Broward County Building Code Division and ensure all site work is completed to standards 
                before building construction begins.
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
                <h3 className={styles.faqQuestion}>What permits are required for site development in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include Uniform 
                  Building Permit Applications from Broward County Building Code Division, Development & 
                  Environmental Review (DER) through ePermits OneStop for applicable projects, SFWMD 
                  Environmental Resource Permits for activities affecting state waters and wetlands, and 
                  Natural Resource Protection Code compliance. We help identify and coordinate all required 
                  permits. The county will not issue building permits prior to receipt of proof of payment 
                  for impact fees and a copy of final Planning and Development Management Review approval.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is Development & Environmental Review (DER) in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Development & Environmental Review (DER) is required for applicable building permits in 
                  Broward County. All submittals requiring DER are only accepted electronically through 
                  ePermits OneStop. Broward County&apos;s Planning and Development Management Division ensures 
                  that proposed developments comply with the Broward County Land Development Code and Natural 
                  Resource Protection Code. The county will not issue building permits prior to receipt of 
                  proof of payment for impact fees and a copy of final Planning and Development Management 
                  Review approval.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site development take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Simple residential projects may take 2-4 weeks, while large commercial 
                  developments can take several months. Broward County permit processing, including DER 
                  review through ePermits OneStop, can add time. Permits are valid for 180 days from issuance. 
                  We coordinate scheduling to minimize delays and keep your project on track.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle projects in flood zones in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site development projects in flood zones throughout Broward County. 
                  Our contractors are experienced with FEMA requirements, elevation certificates, Base 
                  Flood Elevation (BFE) compliance, and the specific drainage and grading requirements 
                  for flood-prone areas in Broward County, with compliance to Natural Resource Protection 
                  Code requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between site work and site development?</h3>
                <p className={styles.faqAnswer}>
                  Site work refers to the physical earthwork, grading, and preparation activities. 
                  Site development is the broader process that includes site work plus planning, 
                  permitting, utility coordination, and regulatory compliance. We provide complete 
                  site development services that encompass all aspects, including Broward County 
                  specific requirements including DER, Natural Resource Protection Code compliance, 
                  and SFWMD Environmental Resource Permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Broward County tree protection standards?</h3>
                <p className={styles.faqAnswer}>
                  Broward County requires tree protection standards for development activities. Prior 
                  to land clearing, barriers must be constructed around trees designated for preservation 
                  using sturdy orange plastic barricading with supports placed every five feet. These 
                  barriers must remain in place throughout the clearing period and be completely removed 
                  upon project completion. Within designated preservation areas, only hand clearing is 
                  permissible. Any tree damaged during development that is designated for protection 
                  violates the code, and any tree that dies as a result of such damage is subject to 
                  double the replacement requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized site work and site development services in Broward County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/complete-site-development-packages/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Complete Site Development Packages</h3>
                <p className={styles.subServiceDescription}>
                  Turnkey site development from clearing to building pad preparation in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/commercial-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Commercial Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site work services for commercial developments and retail centers in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/custom-home-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Custom Home Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site preparation services for custom home construction in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/subdivision-infrastructure/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Subdivision and Infrastructure Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Complete site work for new subdivisions and infrastructure projects in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/cut-fill-mass-earthmoving/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Cut and Fill and Mass Earthmoving</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale earthmoving and cut/fill operations for site balancing in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/site-work-site-development/value-engineering-preconstruction/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Value Engineering and Pre-Construction Assistance</h3>
                <p className={styles.subServiceDescription}>
                  Site work planning, value engineering, and pre-construction consulting for Broward County projects
                </p>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/service-areas/fort-lauderdale/" className={styles.backLink}>
                ← Back to Fort Lauderdale Service Areas
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Site Development Project?"
        description="Get a free quote for your site work and site development project in Broward County. We'll connect you with licensed contractors experienced in Broward County conditions and regulatory requirements including DER, Natural Resource Protection Code compliance, and SFWMD Environmental Resource Permits."
        showPhone={true}
      />
    </main>
  )
}

