import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Debris Hauling & Site Cleanup in West Palm Beach, FL | Palm Beach County',
  description: 'Removal and disposal of cleared vegetation, stumps, and debris in Palm Beach County. Coordination of hauling to disposal sites or recycling facilities.',
  openGraph: {
    title: 'Debris Hauling & Site Cleanup in West Palm Beach, FL | Palm Beach County',
    description: 'Removal and disposal of cleared vegetation, stumps, and debris in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-clearing-lot-preparation/debris-hauling-site-cleanup/`,
  },
}

export default function WestPalmBeachDebrisHaulingSiteCleanupPage() {
  return (
    <main>
      <HeroWithQuote
        title="Debris Hauling and Site Cleanup in West Palm Beach, FL"
        subtitle="Removal and disposal of cleared vegetation, stumps, and debris across Palm Beach County, from West Palm Beach to Palm Beach, Jupiter to Wellington, Royal Palm Beach to The Acreage"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Debris hauling and site cleanup services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Debris hauling and site cleanup services in Palm Beach County are essential for developers, general 
              contractors, property owners, and anyone who has completed land clearing and needs debris removed 
              and sites cleaned for construction across Palm Beach County neighborhoods including West Palm Beach, 
              Palm Beach, Jupiter, Wellington, Royal Palm Beach, The Acreage, Loxahatchee, Boca Raton, Delray Beach, 
              Palm Beach Gardens, and throughout Palm Beach County.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or demolition work, proper debris 
              hauling and site cleanup prepares your site for construction. We coordinate contractors and hauling 
              services to efficiently remove debris and clean sites, with full compliance with Palm Beach County 
              waste management regulations and disposal facility requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Debris hauling and site cleanup in Palm Beach County typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $180,000+</strong> for large commercial sites 
                or properties with extensive debris depending on debris volume, hauling distance, disposal 
                requirements, and Palm Beach County disposal facility access. Projects involving development work as 
                described in Florida Statute 380.04 require a development permit prior to the issuance of a 
                building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Debris Hauling and Site Cleanup Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Collection</h3>
                <p className={styles.serviceDescription}>
                  Collection and organization of cleared vegetation, stumps, roots, and other debris from sites 
                  in Palm Beach County. Debris collection ensures all materials are gathered and prepared for 
                  removal and disposal according to Palm Beach County waste classifications.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Sorting and Classification</h3>
                <p className={styles.serviceDescription}>
                  Sorting of debris materials for recycling, mulching, or disposal according to Palm Beach County 
                  waste classifications. Construction and demolition debris must be kept separate from other waste 
                  types. Material sorting maximizes recycling opportunities and ensures proper disposal.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Waste Management Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at approved Palm Beach County waste management facilities. Proper waste 
                  management ensures compliance with local regulations and efficient disposal operations, with 
                  attention to Palm Beach County waste management ordinances.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Hauling Operations</h3>
                <p className={styles.serviceDescription}>
                  Coordination of hauling operations using dump trucks, trailers, and specialized equipment to 
                  transport debris to disposal sites, recycling facilities, or approved waste management facilities. 
                  Hauling operations ensure efficient debris removal with proper scheduling and routing to approved 
                  facilities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Recycling and Mulching</h3>
                <p className={styles.serviceDescription}>
                  Coordination of recycling and mulching services for suitable materials. Recycling and mulching 
                  reduce disposal costs and environmental impact while creating useful products from cleared 
                  vegetation, with attention to Palm Beach County recycling program requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Disposal Facility Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at approved facilities for materials that cannot be recycled. Disposal 
                  coordination ensures compliance with Palm Beach County regulations and efficient operations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Clean Yard Trash Handling</h3>
                <p className={styles.serviceDescription}>
                  Proper handling of clean yard trash according to Palm Beach County requirements. Clean yard trash 
                  must be properly sorted and prepared for disposal or recycling, with compliance with local 
                  regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Site Cleanup</h3>
                <p className={styles.serviceDescription}>
                  Final cleanup of sites to remove all remaining debris, materials, and waste. Final cleanup ensures 
                  sites are clean and ready for construction activities including grading and foundation work, with 
                  compliance with Palm Beach County waste management regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Compliance and Permitting</h3>
                <p className={styles.serviceDescription}>
                  Coordination of all required permits and compliance with Palm Beach County waste management 
                  regulations, building and development permits, and disposal facility requirements. Compliance 
                  ensures proper waste management and avoids penalties for illegal dumping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Debris and Disposal Methods in Palm Beach County</h2>
            <p className={styles.text}>
              Different types of debris require different disposal methods according to Palm Beach County regulations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Construction and Demolition Debris:</strong> Defined as discarded material generally not 
                considered water-soluble or hazardous, including steel, concrete, glass, brick, asphalt roofing 
                material, and lumber. Must be kept separate from other waste types for proper disposal.
              </li>
              <li>
                <strong>Clean Yard Trash:</strong> Must be free of other forms of solid waste and properly sorted 
                for disposal or recycling. Can be disposed of at approved Palm Beach County facilities or recycled 
                when appropriate.
              </li>
              <li>
                <strong>Vegetation and Brush:</strong> Cleared vegetation and brush can often be recycled or 
                mulched for reuse. Mulching creates useful products while reducing disposal costs and environmental 
                impact. Can be disposed of at approved facilities if clean and properly sorted.
              </li>
              <li>
                <strong>Tree Stumps and Roots:</strong> Large stumps and roots may require specialized disposal or 
                can be ground and recycled. Stump grinding creates mulch while reducing disposal volume. Must be 
                properly classified and disposed of at approved facilities.
              </li>
              <li>
                <strong>Bulky Waste:</strong> Defined as large discarded items, including appliances, furniture, 
                yard trash, and corrugated cardboard. Can be disposed of at approved facilities for residents and 
                businesses.
              </li>
              <li>
                <strong>Mixed Debris:</strong> Mixed debris requires sorting and appropriate disposal methods. 
                Material sorting ensures proper disposal and maximizes recycling opportunities. Commingling must 
                be avoided to maintain waste classifications.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Hazardous materials require specialized disposal at approved 
                facilities. Hazardous material disposal ensures compliance with environmental regulations and 
                Palm Beach County requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Debris Disposal Considerations</h2>
            <p className={styles.text}>
              Debris hauling and site cleanup in Palm Beach County requires attention to local regulations and 
              disposal requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Waste Classification Requirements:</strong> Palm Beach County distinguishes between 
                construction and demolition debris, clean yard trash, bulky waste, and other waste types. 
                Proper classification ensures compliance and proper disposal.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for debris hauling and site cleanup projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Debris hauling and site cleanup 
                typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Debris hauling and site cleanup 
                may require Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas. ERM ensures that proposed projects 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land Development 
                Code (ULDC) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas. Debris disposal must comply with these requirements, with proper 
                environmental protection measures.
              </li>
              <li>
                <strong>Illegal Dumping Prohibition:</strong> Dumping is prohibited under Palm Beach County Code. 
                Public Works and Waste Management enforce specialized codes pertaining to illegal dumping and 
                solid waste concerns. Proper disposal coordination prevents violations.
              </li>
              <li>
                <strong>Building and Development Permits:</strong> Building and development permits are required for 
                construction projects in Palm Beach County. Debris disposal coordination may be required as part of permit compliance.
              </li>
              <li>
                <strong>Hauling Distance and Facility Access:</strong> Hauling distance affects costs and efficiency. 
                Coordination of hauling routes and disposal facilities minimizes distance and costs. With waste 
                management regulations, coordination with approved facilities is essential.
              </li>
              <li>
                <strong>Volume Management:</strong> Large debris volumes require efficient hauling operations and 
                disposal coordination. Volume management ensures efficient removal and cost control, with attention 
                to Palm Beach County disposal facility capacity and requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Debris Hauling and Cleanup Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your debris hauling and site cleanup in Palm Beach County is 
              completed efficiently and in compliance with all regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Debris Assessment:</strong> We assess your site to identify debris types, volumes, and 
                disposal requirements. Assessment determines hauling needs, disposal methods, and Palm Beach County 
                waste classifications to ensure proper handling.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits as 
                described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for debris hauling and site cleanup projects in Palm Beach County.
              </li>
              <li>
                <strong>Material Sorting and Classification:</strong> Debris materials are sorted for recycling, 
                mulching, or disposal according to Palm Beach County waste classifications. Construction and 
                demolition debris is kept separate from other waste types. Material sorting maximizes recycling 
                opportunities and ensures proper disposal.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits including 
                Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, Unified Land Development Code (ULDC) compliance, and coordinate 
                with regulatory agencies. Permits ensure compliance with environmental protection requirements.
              </li>
              <li>
                <strong>Disposal Facility Coordination:</strong> We coordinate disposal at approved facilities or 
                waste management companies. Disposal coordination ensures compliance with regulations and efficient 
                operations, with attention to Palm Beach County waste management requirements.
              </li>
              <li>
                <strong>Contractor and Hauler Selection:</strong> We match your project with licensed contractors 
                and haulers who have the right equipment and experience for debris removal in Palm Beach County, with 
                knowledge of local disposal facilities and regulations.
              </li>
              <li>
                <strong>Hauling Operations:</strong> Haulers transport debris to disposal sites, recycling 
                facilities, or approved facilities using dump trucks and specialized equipment. Hauling operations 
                ensure efficient debris removal with proper routing to approved facilities.
              </li>
              <li>
                <strong>Recycling and Disposal:</strong> Suitable materials are recycled or mulched, while other 
                materials are disposed of at approved facilities. Recycling and disposal ensure proper waste 
                management with compliance to Palm Beach County recycling program requirements.
              </li>
              <li>
                <strong>Final Site Cleanup:</strong> Final cleanup removes all remaining debris and prepares sites 
                for construction. Final cleanup ensures sites are clean and ready for development, with compliance 
                with Palm Beach County waste management regulations.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Service Areas</h2>
            <p className={styles.text}>
              We coordinate debris hauling and site cleanup services across Palm Beach County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Palm Beach County Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>West Palm Beach</li>
                <li>Palm Beach</li>
                <li>Jupiter</li>
                <li>Wellington</li>
                <li>Royal Palm Beach</li>
                <li>The Acreage</li>
                <li>Loxahatchee</li>
                <li>Boca Raton</li>
                <li>Delray Beach</li>
                <li>Palm Beach Gardens</li>
                <li>Juno Beach</li>
                <li>Tequesta</li>
                <li>Riviera Beach</li>
                <li>Downtown West Palm Beach</li>
                <li>El Cid</li>
                <li>Grandview Heights</li>
              </ul>
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
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and debris in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and debris in Palm Beach County are managed according to local regulations and 
                  material types. Many materials can be recycled or mulched for reuse, while others require disposal 
                  at approved facilities. Construction and demolition debris must be kept separate from other waste 
                  types. We coordinate debris management to maximize recycling opportunities and ensure compliance 
                  with Palm Beach County regulations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does debris hauling and cleanup cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup costs in Palm Beach County vary based on debris volume, hauling distance, 
                  disposal requirements, and facility access. Typical residential lots range from $15,000 to $50,000, 
                  while large commercial sites can range from $50,000 to $180,000+ depending on scope. Factors 
                  affecting cost include debris volume, hauling distance, recycling opportunities, and disposal 
                  facility access. Palm Beach County permit processing through Building Division and ERM review can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can cleared vegetation be recycled or mulched in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, many cleared vegetation materials can be recycled or mulched for reuse in Palm Beach County. 
                  Mulching creates useful products while reducing disposal costs and environmental impact. Clean yard 
                  trash can be disposed of at approved facilities if properly sorted. We coordinate recycling and 
                  mulching services to maximize resource recovery and minimize waste, with attention to Palm Beach County 
                  recycling program requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for debris disposal in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Debris disposal in Palm Beach County requires compliance with local waste management regulations and 
                  may require building and development permits for construction projects. Development permits (Florida 
                  Statute 380.04) may be required for projects involving development work. Building Division permits 
                  are required. Environmental Resources Management (ERM) review may be required for 
                  projects affecting wetlands or environmentally sensitive areas. We help identify and coordinate all 
                  required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does debris hauling and cleanup take in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup timelines in Palm Beach County vary based on debris volume, hauling 
                  distance, disposal requirements, and permit processing times. Typical residential lots take 1-3 
                  days, while large commercial sites may take 1-2 weeks depending on scope. Palm Beach County permit 
                  processing through Building Division and ERM review may affect timelines. Weather conditions and disposal facility 
                  access can affect timelines. We coordinate operations to complete projects efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Related Services</h2>
            <p className={styles.text}>
              <a href="/services/land-clearing-lot-preparation/debris-hauling-site-cleanup/" className={styles.backLink}>
                ← View General Debris Hauling and Site Cleanup Services
              </a>
            </p>
            <p className={styles.text}>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to West Palm Beach Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clean Up Your Site in Palm Beach County?"
        description="Get a free quote for your debris hauling and site cleanup project. We'll coordinate licensed contractors and haulers to efficiently remove debris and prepare your site for construction, with full compliance to Palm Beach County waste management regulations, Unified Land Development Code (ULDC) compliance, and Building Division permit requirements."
        showPhone={true}
      />
    </main>
  )
}

