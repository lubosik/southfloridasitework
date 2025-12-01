import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work & Site Development in Florida Keys, FL | Monroe County',
  description: 'Complete site work and site development services in Monroe County, Florida Keys. Commercial and residential site development packages.',
  openGraph: {
    title: 'Site Work & Site Development in Florida Keys, FL | Monroe County',
    description: 'Complete site work and site development services in Monroe County, Florida Keys.',
    url: `${siteConfig.url}/service-areas/florida-keys/site-work-site-development/`,
  },
}

export default function FloridaKeysSiteWorkSiteDevelopmentPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work and Site Development in Florida Keys, FL"
        subtitle="Complete site development services for commercial and residential projects across Monroe County, from Key West to Key Largo, Marathon to Islamorada"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Site work and site development services in Florida Keys, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our site work and site development services in Monroe County, Florida Keys are designed for 
              general contractors, developers, custom home builders, commercial property owners, 
              and high-end homeowners who need comprehensive site preparation for their construction 
              projects in the Florida Keys.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a commercial property in Key West, building a custom 
              home in Key Largo, or preparing land for a new project in Marathon or Islamorada, we coordinate 
              licensed contractors with the expertise and equipment to handle complete site development 
              from start to finish, with full understanding of Monroe County&apos;s unique requirements 
              and the strict environmental regulations that protect the Florida Keys.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Monroe County, Florida Keys</h3>
              <p className={styles.highlightText}>
                Site work and site development projects in Monroe County, Florida Keys typically start around 
                <strong> $25,000</strong> and can range significantly higher depending on project scope, 
                site conditions, flood zone requirements, coral rock excavation needs, and regulatory 
                requirements. Commercial developments and large-scale residential projects often exceed 
                $100,000 in site work costs, with coral rock excavation and environmental compliance 
                adding to project complexity and costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Site Work and Site Development Includes in Florida Keys</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive site work services cover all phases of site development in Monroe County, Florida Keys:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Land Clearing and Vegetation Removal</h3>
              <p className={styles.serviceDescription}>
                Complete removal of trees, vegetation, and debris to prepare the site for development. 
                Includes stump removal, grubbing, and site cleanup. All work complies with Monroe County 
                environmental protection ordinances and tree protection requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Coral Rock and Limestone Excavation</h3>
              <p className={styles.serviceDescription}>
                Specialized excavation of coral rock and limestone bedrock to achieve proper site 
                elevations and prepare for building foundations. Specialized techniques for 
                Monroe County&apos;s unique bedrock conditions and extremely high water table.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Grading and Building Pad Preparation</h3>
              <p className={styles.serviceDescription}>
                Precision grading to create building pads at proper elevations, including rough and 
                final grading to meet engineering specifications and Monroe County building code requirements, 
                including Base Flood Elevation (BFE) compliance and storm surge protection.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stormwater Management Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of comprehensive drainage systems including retention ponds, 
                swales, stormwater inlets, and piping to meet South Florida Water Management District 
                and Monroe County requirements, with special attention to flood zone compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Preparation and Coordination</h3>
              <p className={styles.serviceDescription}>
                Trenching for utilities through coral rock, coordination with utility companies, and 
                preparation of infrastructure connections for water, sewer, electrical, and 
                telecommunications in Monroe County, with specialized techniques for bedrock conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Erosion Control and Stabilization</h3>
              <p className={styles.serviceDescription}>
                Implementation of erosion control measures, slope stabilization, and sediment control 
                to protect the site and surrounding areas during and after construction, meeting 
                Monroe County environmental requirements and protecting the sensitive Keys ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Monroe County, Florida Keys Site Development Considerations</h2>
            <p className={styles.text}>
              Site development in Monroe County, Florida Keys presents unique challenges that require specialized 
              expertise. Our coordinated network of licensed contractors understands the specific 
              requirements for working in the Florida Keys:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Extremely High Water Table:</strong> The Florida Keys have an extremely high water 
                table, often at or near the surface. This requires careful planning for excavation, 
                drainage, and foundation preparation. Proper dewatering and drainage systems are essential 
                for successful site development, with SFWMD Environmental Resource Permits required for 
                dewatering activities.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Most Florida Keys properties are in flood zones 
                (AE, VE, AH, AO), requiring specific elevation requirements and stormwater management systems 
                that comply with FEMA and Monroe County regulations. Base Flood Elevation (BFE) compliance 
                is critical for all structures.
              </li>
              <li>
                <strong>Coral Rock and Limestone Bedrock:</strong> The Florida Keys feature unique coral 
                rock and limestone bedrock that requires specialized excavation techniques. Our contractors 
                are experienced with these challenging bedrock conditions and employ appropriate methods 
                for site preparation.
              </li>
              <li>
                <strong>Monroe County Building Department Permits:</strong> Site development requires permits 
                from Monroe County Building Department for land disturbance, tree removal, grading, and 
                stormwater management. Environmental resource permits may also be required for projects 
                affecting sensitive areas.
              </li>
              <li>
                <strong>Strict Environmental Regulations:</strong> Monroe County and the Florida Keys have 
                some of the strictest environmental regulations in Florida to protect sensitive ecosystems. 
                Site development must comply with comprehensive environmental protection requirements, 
                including protection of mangroves, seagrass beds, and coral reefs.
              </li>
              <li>
                <strong>Hurricane and Storm Surge Protection:</strong> The Florida Keys are highly vulnerable 
                to hurricanes and storm surge. Site development must account for extreme weather conditions. 
                Erosion control, proper drainage, elevation requirements, and site preparation enhance 
                property resilience.
              </li>
              <li>
                <strong>Limited Fill and Import Restrictions:</strong> Monroe County has strict limitations 
                on fill import and land elevation changes to protect the environment and prevent flooding. 
                Site development must work within these restrictions, with all fill operations requiring 
                permits and environmental review.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Site development projects may require 
                Environmental Resource Permits from the South Florida Water Management District (SFWMD) for 
                land disturbance, stormwater management, and impacts to state waters, especially critical 
                in the environmentally sensitive Florida Keys.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Development Process in Monroe County, Florida Keys</h2>
            <p className={styles.text}>
              Our coordinated approach to site development ensures your Monroe County, Florida Keys project 
              moves smoothly from initial planning through final site preparation:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Intake and Scoping:</strong> We review your project requirements, 
                site plans, and engineering drawings to understand the full scope of site work needed 
                in Monroe County, including coral rock excavation, flood zone compliance, and environmental 
                considerations.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits and coordinate 
                with Monroe County Building Department, environmental agencies, SFWMD, and other regulatory 
                agencies as needed, ensuring compliance with strict Keys environmental regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment, certifications, and experience for your specific Monroe County 
                site conditions, including coral rock excavation expertise and environmental compliance 
                experience.
              </li>
              <li>
                <strong>Scheduling and Coordination:</strong> We coordinate the sequence of site work 
                activities, ensuring proper timing and minimizing conflicts between different phases, 
                accounting for Monroe County weather, permitting timelines, and environmental restrictions.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We monitor progress and ensure work meets 
                engineering specifications, Monroe County building code requirements, flood zone compliance, 
                and permit conditions, with special attention to environmental protection.
              </li>
              <li>
                <strong>Final Inspection Support:</strong> We coordinate final inspections with 
                Monroe County Building Department and ensure all site work is completed to standards before building 
                construction begins, with full environmental compliance.
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
                <h3 className={styles.faqQuestion}>What permits are required for site development in Monroe County, Florida Keys?</h3>
                <p className={styles.faqAnswer}>
                  Required permits depend on project location and scope. Common permits include building 
                  permits from Monroe County Building Department, environmental resource permits for land disturbance 
                  and tree removal, SFWMD environmental resource permits, county grading permits, stormwater 
                  management approvals, and fill import permits if applicable. We help identify and coordinate 
                  all required permits, ensuring compliance with strict Keys environmental regulations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site development take in Monroe County, Florida Keys?</h3>
                <p className={styles.faqAnswer}>
                  Timeline varies significantly based on project size, site conditions, coral rock excavation 
                  requirements, and permit processing. Simple residential projects may take 2-4 weeks, while 
                  large commercial developments can take several months. Monroe County permit processing and 
                  environmental review can add time, so we coordinate scheduling to minimize delays and keep 
                  your project on track.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle projects in flood zones in Monroe County, Florida Keys?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate site development projects in flood zones throughout Monroe County, Florida Keys. 
                  Most Keys properties are in flood zones, and our contractors are experienced with FEMA requirements, 
                  elevation certificates, Base Flood Elevation (BFE) compliance, and the specific drainage and 
                  grading requirements for flood-prone areas in the Keys.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between site work and site development?</h3>
                <p className={styles.faqAnswer}>
                  Site work refers to the physical earthwork, grading, and preparation activities. 
                  Site development is the broader process that includes site work plus planning, 
                  permitting, utility coordination, and regulatory compliance. We provide complete 
                  site development services that encompass all aspects, including Monroe County, Florida Keys 
                  specific requirements and strict environmental compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do you handle coral rock excavation in the Florida Keys?</h3>
                <p className={styles.faqAnswer}>
                  Coral rock and limestone bedrock excavation in the Florida Keys requires specialized 
                  equipment and techniques. Our contractors are experienced with these challenging conditions 
                  and employ appropriate methods including rock saws, hydraulic breakers, and specialized 
                  excavation equipment. We coordinate all necessary permits and ensure proper disposal of 
                  excavated material according to Monroe County regulations.
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
              Explore our specialized site work and site development services in Monroe County, Florida Keys:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/florida-keys/site-work-site-development/complete-site-development-packages/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Complete Site Development Packages</h3>
                <p className={styles.subServiceDescription}>
                  Turnkey site development from clearing to building pad preparation in Monroe County, Florida Keys
                </p>
              </a>
              <a href="/service-areas/florida-keys/site-work-site-development/commercial-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Commercial Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site work services for commercial developments and retail centers in Monroe County, Florida Keys
                </p>
              </a>
              <a href="/service-areas/florida-keys/site-work-site-development/custom-home-site-work/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Custom Home Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Site preparation services for custom home construction in Monroe County, Florida Keys
                </p>
              </a>
              <a href="/service-areas/florida-keys/site-work-site-development/subdivision-infrastructure/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Subdivision and Infrastructure Site Work</h3>
                <p className={styles.subServiceDescription}>
                  Complete site work for new subdivisions and infrastructure projects in Monroe County, Florida Keys
                </p>
              </a>
              <a href="/service-areas/florida-keys/site-work-site-development/cut-fill-mass-earthmoving/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Cut and Fill and Mass Earthmoving</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale earthmoving and cut/fill operations for site balancing in Monroe County, Florida Keys
                </p>
              </a>
              <a href="/service-areas/florida-keys/site-work-site-development/value-engineering-preconstruction/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Value Engineering and Pre-Construction Assistance</h3>
                <p className={styles.subServiceDescription}>
                  Site work planning, value engineering, and pre-construction consulting for Monroe County, Florida Keys projects
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Florida Keys Site Development Project?"
        description="Get a free quote for your site work and site development project in Monroe County, Florida Keys. We'll connect you with licensed contractors experienced in Keys conditions, coral rock excavation, strict environmental regulations, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

