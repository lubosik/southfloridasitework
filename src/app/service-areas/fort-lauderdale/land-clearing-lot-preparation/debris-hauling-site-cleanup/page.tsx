import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Debris Hauling & Site Cleanup in Fort Lauderdale, FL | Broward County',
  description: 'Removal and disposal of cleared vegetation, stumps, and debris in Broward County. Coordination of hauling to disposal sites or recycling facilities.',
  openGraph: {
    title: 'Debris Hauling & Site Cleanup in Fort Lauderdale, FL | Broward County',
    description: 'Removal and disposal of cleared vegetation, stumps, and debris in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-clearing-lot-preparation/debris-hauling-site-cleanup/`,
  },
}

export default function FortLauderdaleDebrisHaulingSiteCleanupPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Debris Hauling and Site Cleanup in Fort Lauderdale, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Removal and disposal of cleared vegetation, stumps, and debris across Broward County, from 
                Fort Lauderdale to Hollywood, Weston to Plantation, Coral Ridge to Victoria Park. We coordinate 
                hauling to appropriate disposal sites, recycling facilities, and approved waste management 
                facilities throughout Broward County.
              </p>
              <p className={styles.description}>
                Proper debris hauling and site cleanup in Broward County is essential for complete site 
                preparation. Our network of licensed contractors coordinates efficient debris removal and disposal 
                that complies with Broward County waste management regulations, construction and demolition 
                debris requirements, and recycling ordinances, with attention to Statement of Responsibilities 
                Regarding Asbestos (SRRA) requirements where applicable.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/debris-hauling.jpg"
                alt="Debris hauling and site cleanup services in Broward County"
                fill
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Debris hauling and site cleanup services in Broward County are essential for developers, general 
              contractors, property owners, and anyone who has completed land clearing and needs debris removed 
              and sites cleaned for construction across Broward County neighborhoods including Fort Lauderdale, 
              Hollywood, Weston, Plantation, Pembroke Pines, Coral Springs, Parkland, Davie, Victoria Park, 
              Coral Ridge, Harbor Beach, and throughout Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or demolition work, proper debris 
              hauling and site cleanup prepares your site for construction. We coordinate contractors and hauling 
              services to efficiently remove debris and clean sites, with full compliance with Broward County 
              waste management regulations and disposal facility requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Debris hauling and site cleanup in Broward County typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $180,000+</strong> for large commercial sites 
                or properties with extensive debris depending on debris volume, hauling distance, disposal 
                requirements, and Broward County disposal facility access. Projects involving development work as 
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
                  in Broward County. Debris collection ensures all materials are gathered and prepared for 
                  removal and disposal according to Broward County waste classifications.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Sorting and Classification</h3>
                <p className={styles.serviceDescription}>
                  Sorting of debris materials for recycling, mulching, or disposal according to Broward County 
                  waste classifications. Construction and demolition debris must be kept separate from other waste 
                  types. Material sorting maximizes recycling opportunities and ensures proper disposal, with 
                  Statement of Responsibilities Regarding Asbestos (SRRA) compliance where applicable.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Waste Management Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at approved Broward County waste management facilities. Proper waste 
                  management ensures compliance with local regulations and efficient disposal operations, with 
                  attention to Broward County waste management ordinances.
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
                  vegetation, with attention to Broward County recycling program requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Disposal Facility Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at approved facilities for materials that cannot be recycled. Disposal 
                  coordination ensures compliance with Broward County regulations and efficient operations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Clean Yard Trash Handling</h3>
                <p className={styles.serviceDescription}>
                  Proper handling of clean yard trash according to Broward County requirements. Clean yard trash 
                  must be properly sorted and prepared for disposal or recycling, with compliance with local 
                  regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Site Cleanup</h3>
                <p className={styles.serviceDescription}>
                  Final cleanup of sites to remove all remaining debris, materials, and waste. Final cleanup ensures 
                  sites are clean and ready for construction activities including grading and foundation work, with 
                  compliance with Broward County waste management regulations and storm event protection requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Compliance and Permitting</h3>
                <p className={styles.serviceDescription}>
                  Coordination of all required permits and compliance with Broward County waste management 
                  regulations, building and development permits, and disposal facility requirements. Compliance 
                  ensures proper waste management and avoids penalties for illegal dumping, with Statement of 
                  Responsibilities Regarding Asbestos (SRRA) compliance where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Debris and Disposal Methods in Broward County</h2>
            <p className={styles.text}>
              Different types of debris require different disposal methods according to Broward County regulations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Construction and Demolition Debris:</strong> Defined as discarded material generally not 
                considered water-soluble or hazardous, including steel, concrete, glass, brick, asphalt roofing 
                material, and lumber. Must be kept separate from other waste types for proper disposal, with 
                Statement of Responsibilities Regarding Asbestos (SRRA) compliance where applicable.
              </li>
              <li>
                <strong>Clean Yard Trash:</strong> Must be free of other forms of solid waste and properly sorted 
                for disposal or recycling. Can be disposed of at approved Broward County facilities or recycled 
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
                Broward County requirements, with Statement of Responsibilities Regarding Asbestos (SRRA) compliance 
                where applicable.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Debris Disposal Considerations</h2>
            <p className={styles.text}>
              Debris hauling and site cleanup in Broward County requires attention to local regulations and 
              disposal requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Waste Classification Requirements:</strong> Broward County distinguishes between 
                construction and demolition debris, clean yard trash, bulky waste, and other waste types. 
                Proper classification ensures compliance and proper disposal, with Statement of Responsibilities 
                Regarding Asbestos (SRRA) compliance where applicable.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for debris hauling and site cleanup projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Debris hauling and site cleanup 
                typically requires Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with the 
                Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource Protection 
                Code (Chapter 27) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas. Debris disposal must comply with these requirements, with proper 
                environmental protection measures.
              </li>
              <li>
                <strong>Statement of Responsibilities Regarding Asbestos (SRRA):</strong> For demolition or 
                renovation projects, Statement of Responsibilities Regarding Asbestos (SRRA) forms may be required. 
                These forms ensure proper handling and disposal of asbestos-containing materials, with compliance 
                with Broward County requirements.
              </li>
              <li>
                <strong>Illegal Dumping Prohibition:</strong> Dumping is prohibited under Broward County Code. 
                Public Works and Waste Management enforce specialized codes pertaining to illegal dumping and 
                solid waste concerns. Proper disposal coordination prevents violations.
              </li>
              <li>
                <strong>Building and Development Permits:</strong> Building and development permits are required for 
                construction projects in Broward County. Uniform Building Permit Applications (updated November 14, 
                2025) are required. Debris disposal coordination may be required as part of permit compliance. 
                Permits are valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Hauling Distance and Facility Access:</strong> Hauling distance affects costs and efficiency. 
                Coordination of hauling routes and disposal facilities minimizes distance and costs. With waste 
                management regulations, coordination with approved facilities is essential.
              </li>
              <li>
                <strong>Volume Management:</strong> Large debris volumes require efficient hauling operations and 
                disposal coordination. Volume management ensures efficient removal and cost control, with attention 
                to Broward County disposal facility capacity and requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Debris Hauling and Cleanup Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your debris hauling and site cleanup in Broward County is 
              completed efficiently and in compliance with all regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Debris Assessment:</strong> We assess your site to identify debris types, volumes, and 
                disposal requirements. Assessment determines hauling needs, disposal methods, and Broward County 
                waste classifications to ensure proper handling.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits as 
                described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for debris hauling and site cleanup projects in Broward County.
              </li>
              <li>
                <strong>Material Sorting and Classification:</strong> Debris materials are sorted for recycling, 
                mulching, or disposal according to Broward County waste classifications. Construction and 
                demolition debris is kept separate from other waste types. Material sorting maximizes recycling 
                opportunities and ensures proper disposal, with Statement of Responsibilities Regarding Asbestos 
                (SRRA) compliance where applicable.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits including 
                Uniform Building Permit Applications (updated November 14, 2025), Development & Environmental 
                Review (DER) through ePermits OneStop, Natural Resource Protection Code compliance, and coordinate 
                with regulatory agencies. All DER submittals are only accepted electronically. Permits are valid for 
                180 days from the date of issuance.
              </li>
              <li>
                <strong>Disposal Facility Coordination:</strong> We coordinate disposal at approved facilities or 
                waste management companies. Disposal coordination ensures compliance with regulations and efficient 
                operations, with attention to Broward County waste management requirements.
              </li>
              <li>
                <strong>Contractor and Hauler Selection:</strong> We match your project with licensed contractors 
                and haulers who have the right equipment and experience for debris removal in Broward County, with 
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
                management with compliance to Broward County recycling program requirements.
              </li>
              <li>
                <strong>Final Site Cleanup:</strong> Final cleanup removes all remaining debris and prepares sites 
                for construction. Final cleanup ensures sites are clean and ready for development, with compliance 
                with Broward County waste management regulations and storm event protection requirements.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Service Areas</h2>
            <p className={styles.text}>
              We coordinate debris hauling and site cleanup services across Broward County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Broward County Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>Fort Lauderdale</li>
                <li>Hollywood</li>
                <li>Weston</li>
                <li>Plantation</li>
                <li>Pembroke Pines</li>
                <li>Coral Springs</li>
                <li>Parkland</li>
                <li>Davie</li>
                <li>Miramar</li>
                <li>Victoria Park</li>
                <li>Coral Ridge</li>
                <li>Harbor Beach</li>
                <li>Pompano Beach</li>
                <li>Deerfield Beach</li>
                <li>Lauderdale-by-the-Sea</li>
                <li>Las Olas Boulevard</li>
                <li>Downtown Fort Lauderdale</li>
                <li>Fort Lauderdale Beach</li>
                <li>Hollywood Beach</li>
                <li>Pompano Beach</li>
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
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and debris in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and debris in Broward County are managed according to local regulations and 
                  material types. Many materials can be recycled or mulched for reuse, while others require disposal 
                  at approved facilities. Construction and demolition debris must be kept separate from other waste 
                  types. We coordinate debris management to maximize recycling opportunities and ensure compliance 
                  with Broward County regulations, with Statement of Responsibilities Regarding Asbestos (SRRA) 
                  compliance where applicable.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does debris hauling and cleanup cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup costs in Broward County vary based on debris volume, hauling distance, 
                  disposal requirements, and facility access. Typical residential lots range from $15,000 to $50,000, 
                  while large commercial sites can range from $50,000 to $180,000+ depending on scope. Factors 
                  affecting cost include debris volume, hauling distance, recycling opportunities, and disposal 
                  facility access. Broward County permit processing through ePermits OneStop can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can cleared vegetation be recycled or mulched in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, many cleared vegetation materials can be recycled or mulched for reuse in Broward County. 
                  Mulching creates useful products while reducing disposal costs and environmental impact. Clean yard 
                  trash can be disposed of at approved facilities if properly sorted. We coordinate recycling and 
                  mulching services to maximize resource recovery and minimize waste, with attention to Broward County 
                  recycling program requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for debris disposal in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Debris disposal in Broward County requires compliance with local waste management regulations and 
                  may require building and development permits for construction projects. Development permits (Florida 
                  Statute 380.04) may be required for projects involving development work. Uniform Building Permit 
                  Applications (updated November 14, 2025) are required. Development & Environmental Review (DER) 
                  through ePermits OneStop may be required. All DER submittals are only accepted electronically. 
                  Permits are valid for 180 days from the date of issuance. We help identify and coordinate all 
                  required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is Statement of Responsibilities Regarding Asbestos (SRRA)?</h3>
                <p className={styles.faqAnswer}>
                  Statement of Responsibilities Regarding Asbestos (SRRA) forms may be required for demolition or 
                  renovation projects in Broward County. These forms ensure proper handling and disposal of 
                  asbestos-containing materials, with compliance with Broward County requirements. SRRA compliance 
                  is essential for projects involving demolition or renovation work.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does debris hauling and cleanup take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup timelines in Broward County vary based on debris volume, hauling 
                  distance, disposal requirements, and permit processing times. Typical residential lots take 1-3 
                  days, while large commercial sites may take 1-2 weeks depending on scope. Broward County permit 
                  processing through ePermits OneStop may affect timelines. Weather conditions and disposal facility 
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
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clean Up Your Site in Broward County?"
        description="Get a free quote for your debris hauling and site cleanup project. We'll coordinate licensed contractors and haulers to efficiently remove debris and prepare your site for construction, with full compliance to Broward County waste management regulations, Natural Resource Protection Code compliance, and Statement of Responsibilities Regarding Asbestos (SRRA) requirements."
        showPhone={true}
      />
    </main>
  )
}

