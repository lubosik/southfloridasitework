import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Debris Hauling & Site Cleanup in Miami, FL | Miami-Dade County',
  description: 'Removal and disposal of cleared vegetation, stumps, and debris in Miami-Dade County. Coordination of hauling to disposal sites or recycling facilities.',
  openGraph: {
    title: 'Debris Hauling & Site Cleanup in Miami, FL | Miami-Dade County',
    description: 'Removal and disposal of cleared vegetation, stumps, and debris in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-clearing-lot-preparation/debris-hauling-site-cleanup/`,
  },
}

export default function MiamiDebrisHaulingSiteCleanupPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Debris Hauling and Site Cleanup in Miami, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Removal and disposal of cleared vegetation, stumps, and debris across Miami-Dade County, from 
                Coconut Grove to Pinecrest, Coral Gables to Key Biscayne. We coordinate hauling to appropriate 
                disposal sites, recycling facilities, and Miami-Dade County Neighborhood Trash and Recycling 
                Centers.
              </p>
              <p className={styles.description}>
                Proper debris hauling and site cleanup in Miami-Dade County is essential for complete site 
                preparation. Our network of licensed contractors coordinates efficient debris removal and disposal 
                that complies with Miami-Dade County waste management regulations, construction and demolition 
                debris requirements, and recycling ordinances.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/debris-hauling.jpg"
                alt="Debris hauling and site cleanup services in Miami-Dade County"
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
              Debris hauling and site cleanup services in Miami-Dade County are essential for developers, general 
              contractors, property owners, and anyone who has completed land clearing and needs debris removed 
              and sites cleaned for construction across Miami neighborhoods including Coconut Grove, Pinecrest, 
              Palmetto Bay, Coral Gables, Key Biscayne, Doral, Aventura, and throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve completed vegetation clearing, stump removal, or demolition work, proper debris 
              hauling and site cleanup prepares your site for construction. We coordinate contractors and hauling 
              services to efficiently remove debris and clean sites, with full compliance with Miami-Dade County 
              waste management regulations and disposal facility requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Debris hauling and site cleanup in Miami-Dade County typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $180,000+</strong> for large commercial sites 
                or properties with extensive debris depending on debris volume, hauling distance, disposal 
                requirements, and Miami-Dade County disposal facility access. As of 2025, Miami-Dade County 
                faces capacity challenges with publicly owned landfills, requiring coordination with contracted 
                waste management companies.
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
                  in Miami-Dade County. Debris collection ensures all materials are gathered and prepared for 
                  removal and disposal according to Miami-Dade County waste classifications.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Sorting and Classification</h3>
                <p className={styles.serviceDescription}>
                  Sorting of debris materials for recycling, mulching, or disposal according to Miami-Dade County 
                  waste classifications. Construction and demolition debris must be kept separate from other waste 
                  types, as commingling causes reclassification. Material sorting maximizes recycling opportunities 
                  and ensures proper disposal.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Neighborhood Center Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at Miami-Dade County Neighborhood Trash and Recycling Centers for 
                  residents of unincorporated Miami-Dade County and municipalities served by the county. These 
                  centers accept household-generated bulky waste, clean yard trash, and construction and demolition 
                  debris.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Hauling Operations</h3>
                <p className={styles.serviceDescription}>
                  Coordination of hauling operations using dump trucks, trailers, and specialized equipment to 
                  transport debris to disposal sites, recycling facilities, or contracted waste management 
                  companies. Hauling operations ensure efficient debris removal with proper scheduling and routing 
                  to approved facilities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Recycling and Mulching</h3>
                <p className={styles.serviceDescription}>
                  Coordination of recycling and mulching services for suitable materials. Recycling and mulching 
                  reduce disposal costs and environmental impact while creating useful products from cleared 
                  vegetation, with attention to Miami-Dade County single-stream recycling program requirements 
                  and contamination control.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Disposal Facility Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of disposal at approved facilities or contracted waste management companies for 
                  materials that cannot be recycled. As of 2025, Miami-Dade County has contracted with waste 
                  management companies including WM and Waste Connections for disposal capacity. Disposal 
                  coordination ensures compliance with regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Clean Yard Trash Handling</h3>
                <p className={styles.serviceDescription}>
                  Proper handling of clean yard trash according to Miami-Dade County requirements. Clean yard trash 
                  must be free of other forms of solid waste, and when bundled, each bundle cannot exceed three feet 
                  in length or weigh more than fifty pounds.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Final Site Cleanup</h3>
                <p className={styles.serviceDescription}>
                  Final cleanup of sites to remove all remaining debris, materials, and waste. Final cleanup ensures 
                  sites are clean and ready for construction activities including grading and foundation work, with 
                  compliance with Miami-Dade County waste management regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Compliance and Permitting</h3>
                <p className={styles.serviceDescription}>
                  Coordination of all required permits and compliance with Miami-Dade County waste management 
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
            <h2 className={styles.heading}>Types of Debris and Disposal Methods in Miami-Dade County</h2>
            <p className={styles.text}>
              Different types of debris require different disposal methods according to Miami-Dade County regulations:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Construction and Demolition Debris:</strong> Defined as discarded material generally not 
                considered water-soluble or hazardous, including steel, concrete, glass, brick, asphalt roofing 
                material, and lumber. Critical requirement: commingling construction and demolition debris with 
                any amount of other types of solid waste causes it to be reclassified. Must be kept separate 
                for proper disposal.
              </li>
              <li>
                <strong>Clean Yard Trash:</strong> Must be free of other forms of solid waste. When bundled, each 
                bundle cannot exceed three feet in length or weigh more than fifty pounds. Can be disposed of at 
                Miami-Dade County Neighborhood Trash and Recycling Centers.
              </li>
              <li>
                <strong>Vegetation and Brush:</strong> Cleared vegetation and brush can often be recycled or 
                mulched for reuse. Mulching creates useful products while reducing disposal costs and environmental 
                impact. Can be disposed of at Neighborhood Centers if clean and properly bundled.
              </li>
              <li>
                <strong>Tree Stumps and Roots:</strong> Large stumps and roots may require specialized disposal or 
                can be ground and recycled. Stump grinding creates mulch while reducing disposal volume. Must be 
                properly classified and disposed of at approved facilities.
              </li>
              <li>
                <strong>Bulky Waste:</strong> Defined as less than one cubic yard of construction and demolition 
                debris or large discarded items, including appliances, furniture, yard trash, and corrugated 
                cardboard. Can be disposed of at Neighborhood Centers for residents.
              </li>
              <li>
                <strong>Mixed Debris:</strong> Mixed debris requires sorting and appropriate disposal methods. 
                Material sorting ensures proper disposal and maximizes recycling opportunities. Commingling must 
                be avoided to maintain waste classifications.
              </li>
              <li>
                <strong>Hazardous Materials:</strong> Hazardous materials require specialized disposal at approved 
                facilities. Hazardous material disposal ensures compliance with environmental regulations and 
                Miami-Dade County requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Debris Disposal Considerations</h2>
            <p className={styles.text}>
              Debris hauling and site cleanup in Miami-Dade County requires attention to local regulations and 
              disposal requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Waste Classification Requirements:</strong> Miami-Dade County distinguishes between 
                construction and demolition debris, clean yard trash, bulky waste, and other waste types. 
                Commingling construction and demolition debris with other waste types causes reclassification. 
                Proper classification ensures compliance and proper disposal.
              </li>
              <li>
                <strong>Neighborhood Trash and Recycling Centers:</strong> Miami-Dade County maintains Neighborhood 
                Trash and Recycling Centers where residents of unincorporated Miami-Dade County can deposit 
                household-generated bulky waste, clean yard trash, and construction and demolition debris. These 
                centers are also available to municipalities served by Miami-Dade County and landscaping businesses 
                with current permits.
              </li>
              <li>
                <strong>Landfill Capacity Challenges:</strong> As of 2025, Miami-Dade County faces capacity challenges 
                with its publicly owned landfills running out of space. The county has contracted with waste 
                management companies including WM and Waste Connections to substantially grow contracted capacity to 
                more than 3 million tons as an interim measure. County commissioners have set a deadline of February 
                2026 for deciding on a long-term disposal path.
              </li>
              <li>
                <strong>Recycling Program Requirements:</strong> In April 2023, Miami-Dade County passed an 
                ordinance to reduce contamination in its single-stream recycling program. Department enforcement 
                officers are authorized to inspect the contents of recycling carts placed at the curb to ensure 
                compliance. Proper sorting and recycling coordination ensures compliance.
              </li>
              <li>
                <strong>Illegal Dumping Prohibition:</strong> Dumping—defined as throwing, discarding, placing, 
                depositing, or burying solid waste in an unpermitted manner—is prohibited under Miami-Dade County 
                Code. Public Works and Waste Management enforce specialized codes pertaining to illegal dumping and 
                solid waste concerns. Proper disposal coordination prevents violations.
              </li>
              <li>
                <strong>Building and Development Permits:</strong> Building and development permits are required for 
                construction projects in unincorporated Miami-Dade County. As of August 5, 2024, standardized forms 
                are required for permit applications submitted to Private Providers. Debris disposal coordination 
                may be required as part of permit compliance.
              </li>
              <li>
                <strong>Hauling Distance and Facility Access:</strong> Hauling distance affects costs and efficiency. 
                Coordination of hauling routes and disposal facilities minimizes distance and costs. With landfill 
                capacity challenges, coordination with contracted waste management companies is essential.
              </li>
              <li>
                <strong>Volume Management:</strong> Large debris volumes require efficient hauling operations and 
                disposal coordination. Volume management ensures efficient removal and cost control, with attention 
                to Miami-Dade County disposal facility capacity and requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Debris Hauling and Cleanup Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your debris hauling and site cleanup in Miami-Dade County is 
              completed efficiently and in compliance with all regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Debris Assessment:</strong> We assess your site to identify debris types, volumes, and 
                disposal requirements. Assessment determines hauling needs, disposal methods, and Miami-Dade County 
                waste classifications to ensure proper handling.
              </li>
              <li>
                <strong>Material Sorting and Classification:</strong> Debris materials are sorted for recycling, 
                mulching, or disposal according to Miami-Dade County waste classifications. Construction and 
                demolition debris is kept separate from other waste types. Material sorting maximizes recycling 
                opportunities and ensures proper disposal.
              </li>
              <li>
                <strong>Disposal Facility Coordination:</strong> We coordinate disposal at approved facilities, 
                Neighborhood Trash and Recycling Centers, or contracted waste management companies (WM, Waste 
                Connections). Disposal coordination ensures compliance with regulations and efficient operations, 
                with attention to landfill capacity challenges.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required building and development permits 
                and coordinate compliance with Miami-Dade County waste management regulations. Permits ensure 
                compliance and proper waste management.
              </li>
              <li>
                <strong>Contractor and Hauler Selection:</strong> We match your project with licensed contractors 
                and haulers who have the right equipment and experience for debris removal in Miami-Dade County, 
                with knowledge of local disposal facilities and regulations.
              </li>
              <li>
                <strong>Hauling Operations:</strong> Haulers transport debris to disposal sites, recycling 
                facilities, or Neighborhood Centers using dump trucks and specialized equipment. Hauling operations 
                ensure efficient debris removal with proper routing to approved facilities.
              </li>
              <li>
                <strong>Recycling and Disposal:</strong> Suitable materials are recycled or mulched, while other 
                materials are disposed of at approved facilities or contracted waste management companies. Recycling 
                and disposal ensure proper waste management with compliance to Miami-Dade County single-stream 
                recycling program requirements.
              </li>
              <li>
                <strong>Final Site Cleanup:</strong> Final cleanup removes all remaining debris and prepares sites 
                for construction. Final cleanup ensures sites are clean and ready for development, with compliance 
                with Miami-Dade County waste management regulations.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Service Areas</h2>
            <p className={styles.text}>
              We coordinate debris hauling and site cleanup services across Miami-Dade County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Miami Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>Coconut Grove</li>
                <li>Pinecrest</li>
                <li>Palmetto Bay</li>
                <li>Coral Gables</li>
                <li>Key Biscayne</li>
                <li>Doral</li>
                <li>Aventura</li>
                <li>Brickell</li>
                <li>South Beach</li>
                <li>Mid-Beach</li>
                <li>North Beach</li>
                <li>Bal Harbour</li>
                <li>Sunny Isles Beach</li>
                <li>Miami Beach</li>
                <li>Homestead</li>
                <li>Cutler Bay</li>
                <li>Kendall</li>
                <li>Westchester</li>
                <li>Hialeah</li>
                <li>Miami Gardens</li>
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
                <h3 className={styles.faqQuestion}>What happens to cleared vegetation and debris in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Cleared vegetation and debris in Miami-Dade County are managed according to local regulations and 
                  material types. Many materials can be recycled or mulched for reuse, while others require disposal 
                  at approved facilities, Neighborhood Trash and Recycling Centers, or contracted waste management 
                  companies (WM, Waste Connections). Construction and demolition debris must be kept separate from 
                  other waste types. We coordinate debris management to maximize recycling opportunities and ensure 
                  compliance with Miami-Dade County regulations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does debris hauling and cleanup cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup costs in Miami-Dade County vary based on debris volume, hauling distance, 
                  disposal requirements, and landfill capacity challenges. Typical residential lots range from 
                  $15,000 to $50,000, while large commercial sites can range from $50,000 to $180,000+ depending on 
                  scope. As of 2025, Miami-Dade County faces landfill capacity challenges, requiring coordination with 
                  contracted waste management companies. Factors affecting cost include debris volume, hauling distance, 
                  recycling opportunities, and disposal facility access.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can cleared vegetation be recycled or mulched in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, many cleared vegetation materials can be recycled or mulched for reuse in Miami-Dade County. 
                  Mulching creates useful products while reducing disposal costs and environmental impact. Clean yard 
                  trash can be disposed of at Neighborhood Trash and Recycling Centers if properly bundled (each bundle 
                  cannot exceed three feet in length or weigh more than fifty pounds). We coordinate recycling and 
                  mulching services to maximize resource recovery and minimize waste, with attention to Miami-Dade 
                  County single-stream recycling program requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for debris disposal in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Debris disposal in Miami-Dade County requires compliance with local waste management regulations and 
                  may require building and development permits for construction projects. As of August 5, 2024, 
                  standardized forms are required for permit applications submitted to Private Providers. Landscaping 
                  businesses require current permits (Section 15-17.1 of the Code) to use Neighborhood Centers. We help 
                  identify and coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Miami-Dade County Neighborhood Trash and Recycling Centers?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County Neighborhood Trash and Recycling Centers are facilities where residents of 
                  unincorporated Miami-Dade County can deposit household-generated bulky waste, clean yard trash, and 
                  construction and demolition debris. These centers are also available to municipalities served by 
                  Miami-Dade County and landscaping businesses with current permits. Clean yard trash must be properly 
                  bundled (three feet maximum length, fifty pounds maximum weight per bundle).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does debris hauling and cleanup take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Debris hauling and cleanup timelines in Miami-Dade County vary based on debris volume, hauling 
                  distance, disposal requirements, and landfill capacity challenges. Typical residential lots take 1-3 
                  days, while large commercial sites may take 1-2 weeks depending on scope. With landfill capacity 
                  challenges requiring coordination with contracted waste management companies, disposal coordination 
                  may affect timelines. Weather conditions and disposal facility access can affect timelines. We 
                  coordinate operations to complete projects efficiently.
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
              <a href="/service-areas/miami/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Miami Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clean Up Your Site in Miami-Dade County?"
        description="Get a free quote for your debris hauling and site cleanup project. We'll coordinate licensed contractors and haulers to efficiently remove debris and prepare your site for construction, with full compliance to Miami-Dade County waste management regulations."
        showPhone={true}
      />
    </main>
  )
}

