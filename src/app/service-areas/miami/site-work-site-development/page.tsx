import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work & Site Development in Miami, FL | Miami-Dade County',
  description: 'Complete site work and site development services in Miami-Dade County. Commercial and residential site development packages.',
  openGraph: {
    title: 'Site Work & Site Development in Miami, FL | Miami-Dade County',
    description: 'Complete site work and site development services in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/site-work-site-development/`,
  },
}

export default function MiamiSiteWorkSiteDevelopmentPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work and Site Development in Miami, FL"
        subtitle="Complete site development services for commercial and residential projects across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and site development services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our site work and site development services in Miami-Dade County are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need comprehensive site preparation for their construction 
              projects in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial retail center in Miami, building a custom 
              home in Coral Gables, or preparing land for a new subdivision in Homestead, we coordinate 
              licensed contractors with the expertise and equipment to handle complete site development 
              from start to finish, with full understanding of Miami-Dade County requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Site work and site development projects in Miami-Dade County typically start around 
                <strong> $25,000</strong> and can range significantly higher depending on project scope, 
                site conditions, flood zone requirements, and regulatory requirements. Commercial 
                developments and large-scale residential projects often exceed $100,000 in site work costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Work and Site Development Includes in Miami</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive site work services cover all phases of site development in Miami-Dade County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Land Clearing and Vegetation Removal</h3>
              <p className={styles.serviceDescription}>
                Complete removal of trees, vegetation, and debris to prepare the site for development. 
                Includes stump removal, grubbing, and site cleanup. All work complies with Miami-Dade 
                DERM tree protection ordinances.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Earthwork</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation, cut and fill operations, and earthmoving to achieve proper site 
                elevations and prepare for building foundations and infrastructure. Specialized techniques 
                for Miami-Dade&apos;s high water table conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading to create building pads at proper elevations, including rough and 
                final grading to meet engineering specifications and Miami-Dade building code requirements, 
                including Base Flood Elevation (BFE) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive drainage systems including retention ponds, 
                swales, stormwater inlets, and piping to meet South Florida Water Management District 
                and Miami-Dade County requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities, coordination with utility companies, and preparation of 
                infrastructure connections for water, sewer, electrical, and telecommunications in 
                Miami-Dade County.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Implementation of erosion control measures, slope stabilization, and sediment control 
                to protect the site and surrounding areas during and after construction, meeting 
                Miami-Dade environmental requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Site Development Considerations</h2>
            <p className={styles.text}>
              Site development in Miami-Dade County presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table requires 
                careful planning for excavation, drainage, and foundation preparation. Proper 
                dewatering and drainage systems are essential for successful site development.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many Miami-Dade properties are in flood 
                zones, requiring specific elevation requirements and stormwater management systems 
                that comply with FEMA and Miami-Dade RER regulations.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade have unique 
                soil characteristics including limestone bedrock, sandy soils, and organic materials 
                that affect grading, compaction, and foundation design. Our contractors are 
                experienced with these conditions.
              </li>
              <li>
                <strong>RER and DERM Permits:</strong> Site development often requires permits 
                from Miami-Dade RER (Regulatory and Economic Resources) and DERM (Department of 
                Environmental Resources Management) for land disturbance, tree removal, and 
                stormwater management.
              </li>
              <li>
                <strong>Municipal Requirements:</strong> Miami-Dade County has specific site 
                development standards, permit requirements, and inspection processes that must be 
                followed. Our contractors are familiar with these requirements.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Site development must account for 
                hurricane-force winds and storm surge. Erosion control, proper drainage, and site 
                preparation enhance property resilience.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Development Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach to site development ensures your Miami-Dade County project 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed 
                in Miami-Dade County.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits and coordinate 
                with Miami-Dade RER, DERM, building departments, SFWMD, and other regulatory agencies 
                as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment, certifications, and experience for your specific Miami-Dade 
                site conditions and requirements.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of site work 
                activities, ensuring proper timing and minimizing conflicts between different phases, 
                accounting for Miami-Dade weather and permitting timelines.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Miami-Dade building code requirements, and permit conditions.
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

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for site development in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include building 
                  permits from Miami-Dade RER, DERM environmental resource permits for land disturbance 
                  and tree removal, SFWMD environmental resource permits, county grading permits, and 
                  stormwater management approvals. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site development take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, and permit 
                  processing. Simple residential projects may take 2-4 weeks, while large commercial 
                  developments can take several months. Miami-Dade permit processing can add time, so 
                  we coordinate scheduling to minimize delays and keep your project on track.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle projects in flood zones in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site development projects in flood zones throughout Miami-Dade County. 
                  Our contractors are experienced with FEMA requirements, elevation certificates, Base 
                  Flood Elevation (BFE) compliance, and the specific drainage and grading requirements 
                  for flood-prone areas in Miami-Dade.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between site work and site development?</h3>
                <p className={styles.faqAnswer}>
                  Site work refers to the physical earthwork, grading, and preparation activities. 
                  Site development is the broader process that includes site work plus planning, 
                  permitting, utility coordination, and regulatory compliance. We provide complete 
                  site development services that encompass all aspects, including Miami-Dade County 
                  specific requirements.
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
              Explore our specialized site work and site development services in Miami-Dade County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/miami/site-work-site-development/complete-site-development-packages/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Complete Site Development Packages</h3>
                <p className={styles.subServiceDescription}>
                  Turnkey site development from clearing to building pad preparation in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/site-work-site-development/commercial-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Commercial Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site work services for commercial developments and retail centers in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/site-work-site-development/custom-home-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Custom Home Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site preparation services for custom home construction in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/site-work-site-development/subdivision-infrastructure/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Subdivision and Infrastructure Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Complete site work for new subdivisions and infrastructure projects in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/site-work-site-development/cut-fill-mass-earthmoving/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Cut and Fill and Mass Earthmoving</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale earthmoving and cut/fill operations for site balancing in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/site-work-site-development/value-engineering-preconstruction/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Value Engineering and Pre-Construction Assistance</h3>
                <p className={styles.subServiceDescription}>
                  Site work planning, value engineering, and pre-construction consulting for Miami-Dade County projects
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Site Development Project?"
        description="Get a free quote for your site work and site development project in Miami-Dade County. We'll connect you with licensed contractors experienced in Miami-Dade County conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}
