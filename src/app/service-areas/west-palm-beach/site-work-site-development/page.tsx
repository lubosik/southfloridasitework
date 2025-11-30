import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work & Site Development in West Palm Beach, FL | Palm Beach County',
  description: 'Complete site work and site development services in Palm Beach County. Commercial and residential site development packages.',
  openGraph: {
    title: 'Site Work & Site Development in West Palm Beach, FL | Palm Beach County',
    description: 'Complete site work and site development services in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/site-work-site-development/`,
  },
}

export default function WestPalmBeachSiteWorkSiteDevelopmentPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work and Site Development in West Palm Beach, FL"
        subtitle="Complete site development services for commercial and residential projects across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and site development services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our site work and site development services in Palm Beach County are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need comprehensive site preparation for their construction 
              projects in Palm Beach County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial retail center in Downtown West Palm Beach, building 
              a custom home in Palm Beach, or preparing land for a new subdivision in Wellington, we 
              coordinate licensed contractors with the expertise and equipment to handle complete site 
              development from start to finish, with full understanding of Palm Beach County requirements 
              including Building Division permits, Environmental Resources Management (ERM) review, Unified 
              Land Development Code (ULDC) compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Site work and site development projects in Palm Beach County typically start around 
                <strong> $25,000</strong> and can range significantly higher depending on project scope, 
                site conditions, flood zone requirements, and regulatory requirements. Commercial 
                developments and large-scale residential projects often exceed $100,000 in site work costs. 
                Projects requiring Environmental Resources Management (ERM) review may have additional permit 
                processing costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Work and Site Development Includes in West Palm Beach</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive site work services cover all phases of site development in Palm Beach County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Land Clearing and Vegetation Removal</h3>
              <p className={styles.serviceDescription}>
                Complete removal of trees, vegetation, and debris to prepare the site for development. 
                Includes stump removal, grubbing, and site cleanup. All work complies with Palm Beach County 
                tree protection requirements and Environmental Resources Management (ERM) standards for 
                protected species and environmentally sensitive areas.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation, cut and fill operations, and earthmoving to achieve proper site 
                elevations and prepare for building foundations and infrastructure. Specialized techniques 
                for Palm Beach County&apos;s high water table conditions, with SFWMD Environmental Resource 
                Permits required for activities affecting state waters and wetlands.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading to create building pads at proper elevations, including rough and 
                final grading to meet engineering specifications and Palm Beach County building code requirements, 
                including Base Flood Elevation (BFE) compliance for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive drainage systems including retention ponds, 
                swales, stormwater inlets, and piping to meet South Florida Water Management District 
                (SFWMD) Environmental Resource Permit requirements and Palm Beach County Unified Land 
                Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities, coordination with utility companies, and preparation of 
                infrastructure connections for water, sewer, electrical, and telecommunications in 
                Palm Beach County, with compliance to county utility requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Implementation of erosion control measures, slope stabilization, and sediment control 
                to protect the site and surrounding areas during and after construction, meeting Palm Beach 
                County Unified Land Development Code (ULDC) requirements and Environmental Resources 
                Management (ERM) standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Site Development Considerations</h2>
            <p className={styles.text}>
              Site development in Palm Beach County presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Building Division Permits:</strong> Palm Beach County Building Division requires 
                building permits for all site development work. Building permits must be obtained before 
                beginning construction, and the Building Division reviews plans to ensure compliance with 
                the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Palm Beach County Environmental 
                Resources Management (ERM) reviews projects for environmental impacts and compliance with 
                the Unified Land Development Code (ULDC). ERM review is required for projects affecting 
                wetlands, protected species, or environmentally sensitive areas, and ensures proper 
                environmental protection and regulatory adherence.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified 
                Land Development Code (ULDC) regulates land development activities and enforces requirements 
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
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table requires 
                careful planning for excavation, drainage, and foundation preparation. Proper 
                dewatering and drainage systems are essential for successful site development, with 
                SFWMD permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many Palm Beach County properties are in flood 
                zones, requiring specific elevation requirements and stormwater management systems 
                that comply with FEMA and Palm Beach County regulations. Base Flood Elevation (BFE) 
                compliance is essential for properties in flood zones.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in West Palm Beach and 
                Palm Beach County have unique soil characteristics including limestone bedrock, sandy 
                soils, and organic materials that affect grading, compaction, and foundation design. 
                Our contractors are experienced with these conditions.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities. Protected trees must be identified and preserved according to 
                county standards, with Environmental Resources Management (ERM) review required for tree 
                removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. 
                Building Division and ERM review can add time to projects. We coordinate permit applications 
                to minimize delays.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Site development must account for 
                hurricane-force winds and storm surge. Erosion control, proper drainage, and site 
                preparation enhance property resilience in West Palm Beach and throughout Palm Beach County.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Development Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach to site development ensures your Palm Beach County project 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed 
                in Palm Beach County, including Environmental Resources Management (ERM) review requirements.
              </li>
              <li>
                <strong>ERM Coordination:</strong> We help identify required Environmental Resources 
                Management (ERM) review and coordinate with Palm Beach County ERM to ensure proposed 
                developments comply with the Unified Land Development Code (ULDC) and environmental 
                protection requirements.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits including Building 
                Division permits, SFWMD Environmental Resource Permits, and other regulatory 
                approvals. We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment, certifications, and experience for your specific Palm Beach 
                County site conditions and requirements.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of site work 
                activities, ensuring proper timing and minimizing conflicts between different phases, 
                accounting for Palm Beach County weather, permit processing timelines, and regulatory 
                requirements.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Palm Beach County building code requirements, Unified Land 
                Development Code (ULDC) standards, and permit conditions.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Palm Beach County Building Division and ensure all site work is completed to standards 
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
                <h3 className={styles.faqQuestion}>What permits are required for site development in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include Building 
                  Division permits from Palm Beach County Building Division, Environmental Resources 
                  Management (ERM) review for projects affecting wetlands or environmentally sensitive 
                  areas, SFWMD Environmental Resource Permits for activities affecting state waters and 
                  wetlands, and Unified Land Development Code (ULDC) compliance. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is Environmental Resources Management (ERM) in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Environmental Resources Management (ERM) is Palm Beach County&apos;s division responsible 
                  for reviewing projects for environmental impacts and compliance with the Unified Land 
                  Development Code (ULDC). ERM review is required for projects affecting wetlands, protected 
                  species, or environmentally sensitive areas. ERM ensures that proposed developments comply 
                  with environmental protection requirements and the Unified Land Development Code.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site development take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Simple residential projects may take 2-4 weeks, while large commercial 
                  developments can take several months. Palm Beach County permit processing, including ERM 
                  review, can add time. We coordinate scheduling to minimize delays and keep your project 
                  on track.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle projects in flood zones in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site development projects in flood zones throughout Palm Beach County. 
                  Our contractors are experienced with FEMA requirements, elevation certificates, Base 
                  Flood Elevation (BFE) compliance, and the specific drainage and grading requirements 
                  for flood-prone areas in Palm Beach County, with compliance to Unified Land Development 
                  Code (ULDC) requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between site work and site development?</h3>
                <p className={styles.faqAnswer}>
                  Site work refers to the physical earthwork, grading, and preparation activities. 
                  Site development is the broader process that includes site work plus planning, 
                  permitting, utility coordination, and regulatory compliance. We provide complete 
                  site development services that encompass all aspects, including Palm Beach County 
                  specific requirements including ERM review, Unified Land Development Code (ULDC) compliance, 
                  and SFWMD Environmental Resource Permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Palm Beach County tree protection requirements?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County requires tree protection for development activities. Protected trees 
                  must be identified and preserved according to county standards, with Environmental 
                  Resources Management (ERM) review required for tree removal in environmentally sensitive 
                  areas. Tree protection ensures proper environmental stewardship and compliance with 
                  Unified Land Development Code (ULDC) requirements.
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
              Explore our specialized site work and site development services in Palm Beach County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/west-palm-beach/site-work-site-development/complete-site-development-packages/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Complete Site Development Packages</h3>
                <p className={styles.subServiceDescription}>
                  Turnkey site development from clearing to building pad preparation in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/commercial-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Commercial Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site work services for commercial developments and retail centers in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/custom-home-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Custom Home Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site preparation services for custom home construction in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/subdivision-infrastructure/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Subdivision and Infrastructure Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Complete site work for new subdivisions and infrastructure projects in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/cut-fill-mass-earthmoving/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Cut and Fill and Mass Earthmoving</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale earthmoving and cut/fill operations for site balancing in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/site-work-site-development/value-engineering-preconstruction/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Value Engineering and Pre-Construction Assistance</h3>
                <p className={styles.subServiceDescription}>
                  Site work planning, value engineering, and pre-construction consulting for Palm Beach County projects
                </p>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/service-areas/west-palm-beach/" className={styles.backLink}>
                ← Back to West Palm Beach Service Areas
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Site Development Project?"
        description="Get a free quote for your site work and site development project in Palm Beach County. We'll connect you with licensed contractors experienced in Palm Beach County conditions and regulatory requirements including Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, and SFWMD Environmental Resource Permits."
        showPhone={true}
      />
    </main>
  )
}

