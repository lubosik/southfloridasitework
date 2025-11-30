import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Utility Trench Excavation in Miami, FL | Miami-Dade County',
  description: 'Precision utility trench excavation for water, sewer, electrical, and telecommunications in Miami-Dade County. Proper depth and code compliance.',
  openGraph: {
    title: 'Utility Trench Excavation in Miami, FL | Miami-Dade County',
    description: 'Precision utility trench excavation for water, sewer, electrical, and telecommunications utilities in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/excavation-earthwork/utility-trench-excavation/`,
  },
}

export default function MiamiUtilityTrenchExcavationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Utility Trench Excavation in Miami, FL"
        subtitle="Precision trenching for utilities including water, sewer, electrical, and telecommunications across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Utility trench excavation services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Utility trench excavation services in Miami-Dade County are essential for general contractors, 
              developers, utility companies, infrastructure projects, and anyone installing or upgrading utility 
              systems that require underground trenching in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re installing new utilities in Doral, upgrading existing systems in Aventura, 
              or connecting to municipal utility lines in Coral Gables, proper trench excavation is critical 
              for utility installation. We coordinate licensed contractors with precision equipment and expertise 
              to excavate utility trenches to exact specifications, navigating Miami-Dade RER, Public Works, 
              and utility company requirements with specialized knowledge of high water table conditions and 
              regulatory compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Utility trench excavation in Miami-Dade County typically ranges from 
                <strong> $15,000 to $50,000</strong> for residential utility connections, and 
                <strong> $50,000 to $200,000+</strong> for commercial or infrastructure projects depending on 
                trench length, depth, utility type, site conditions, and dewatering requirements. Projects 
                requiring extensive dewatering, working in flood zones, or involving right-of-way access 
                often cost more due to additional permit requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Utility Trench Excavation Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Location and Marking</h3>
              <p className={styles.serviceDescription}>
                Coordination with utility companies through Sunshine 811 to locate and mark existing 
                underground utilities before excavation, as required by Florida law. Utility location prevents 
                damage to existing utilities and ensures safe excavation operations, especially important in 
                Miami-Dade County where utility infrastructure is extensive.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Precision Trenching</h3>
              <p className={styles.serviceDescription}>
                Excavation of trenches to exact depths and widths specified for utility installation, meeting 
                Miami-Dade County and utility company requirements. Precision trenching ensures proper utility 
                placement, with careful attention to depth control and trench width for utility clearance, 
                accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Depth and Slope Control</h3>
              <p className={styles.serviceDescription}>
                Excavation to proper depths and slopes required for utility installation and code compliance 
                specific to Miami-Dade County requirements. Depth requirements vary by utility type and local 
                codes, with proper slopes for drainage where applicable, especially important for sewer lines 
                requiring gravity flow.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Trench Bedding Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of trench beds with proper bedding material for utility placement, meeting 
                Miami-Dade County and utility company specifications. Bedding preparation ensures stable 
                utility support and proper drainage, with material selection based on utility type and 
                Miami-Dade&apos;s sandy and limestone soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Safety and Shoring</h3>
              <p className={styles.serviceDescription}>
                Installation of proper shoring, sloping, or benching for deep trenches to prevent cave-ins 
                and ensure worker safety per OSHA requirements. Safety measures protect workers and prevent 
                trench collapse, especially important given Miami-Dade&apos;s high water table and coastal 
                soil conditions that can affect trench stability.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
              <p className={styles.serviceDescription}>
                Coordination of backfill operations after utility installation, with proper compaction to 
                support utilities and prevent settlement, meeting Miami-Dade County requirements. Backfill 
                ensures proper utility support and surface restoration, especially important given 
                Miami-Dade&apos;s high water table and potential for settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Utility Trench Considerations</h2>
            <p className={styles.text}>
              Utility trench excavation in Miami-Dade County requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Utility Permits for Public Rights-of-Way:</strong> For utility trench excavation 
                work involving water, sewer, and electrical systems in Miami-Dade County&apos;s public 
                rights-of-way, utilities must obtain a Utility Permit prior to starting any construction. 
                The utility must comply with all Miami-Dade County policies, procedures, and directives for 
                the installation, placement, or removal of conduits, cables, poles, pole lines, facilities, 
                and appurtenances.
              </li>
              <li>
                <strong>Public Works Right-of-Way Permits:</strong> Utility trenches in roadways or 
                public rights-of-way require Public Works Right-of-Way Permits from Miami-Dade County. 
                As of October 1, 2025, Miami-Dade has implemented electronic permitting systems that allow 
                customers to submit applications, upload documents and drawings online, pay fees, and track 
                applications throughout the review process.
              </li>
              <li>
                <strong>Water & Sewer Permits:</strong> Water and sewer utility infrastructure work requires 
                Water & Sewer permits from Miami-Dade County and may require hydraulic analysis requests. 
                Unlike electrical utilities, water and sewer utilities are not exempt from Florida Building 
                Code permit requirements and must obtain proper permits for infrastructure work.
              </li>
              <li>
                <strong>RER Department Approval:</strong> When permits require review and approval by the 
                Miami-Dade County RER (Regulatory and Environmental Resources) Department, applicants must 
                seek approval from the County before proceeding with their projects. This review process is 
                a required step for projects that fall under RER jurisdiction.
              </li>
              <li>
                <strong>Electrical Utility Exemptions:</strong> Electric utilities&apos; structures or 
                facilities directly involved in the generation, transmission, or distribution of electricity 
                are exempt from Florida Building Code permit requirements in unincorporated Miami-Dade County. 
                However, this exemption does not apply to water and sewer utilities, which typically require 
                permits for their infrastructure work.
              </li>
              <li>
                <strong>Sunshine 811 Utility Location:</strong> Florida law requires utility location before 
                excavation to prevent damage to existing utilities. We coordinate with utility companies 
                through the Sunshine 811 system to locate and mark all underground utilities. Utility 
                location is required and protects both existing utilities and excavation workers.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Miami-Dade&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, may require dewatering for deep trenches. 
                DERM Class V Permits are required for temporary dewatering to ensure that sediment, turbidity, 
                and contaminants are removed before discharge. Water management ensures dry working conditions 
                and prevents trench collapse, especially in areas like Miami Beach, Aventura, and coastal 
                neighborhoods.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including Miami Beach, 
                Key Biscayne, Bal Harbour, and Aventura have unique soil characteristics including sand, 
                limestone bedrock, and organic materials that affect trenching methods and stability. Soil 
                conditions determine shoring requirements and trenching techniques.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Utility Trench Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate utility trench excavation throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Westchester</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Coral Gables</li>
                  <li>Pinecrest</li>
                  <li>Coconut Grove</li>
                  <li>Palmetto Bay</li>
                  <li>South Miami</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Aventura</li>
                  <li>Surfside</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Hialeah</li>
                  <li>Miami Lakes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Utility Trench Excavation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your utility trench excavation is completed safely and meets 
              all Miami-Dade County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies through Sunshine 811 
                to locate and mark all existing underground utilities before excavation begins, as required by 
                Florida law. Utility location prevents damage and ensures safe excavation, especially important 
                in Miami-Dade County where utility infrastructure is extensive.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits including 
                Utility Permits for public rights-of-way, Public Works Right-of-Way Permits for trenches in 
                roadways, Water & Sewer permits for water and sewer infrastructure, RER Department approval 
                when required, DERM Class V Permits for dewatering if needed, and coordinate with regulatory 
                agencies. As of October 1, 2025, permits can be submitted through Miami-Dade&apos;s electronic 
                permitting system.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (trenchers, excavators, dewatering systems) and experience for utility 
                trench excavation in Miami-Dade County, including expertise with high water table conditions, 
                coastal soils, and utility coordination.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For trenches requiring dewatering, contractors set up 
                dewatering systems in compliance with DERM Class V Permit requirements, ensuring sediment, 
                turbidity, and contaminants are removed before discharge. This is especially important given 
                Miami-Dade&apos;s high water table.
              </li>
              <li>
                <strong>Precision Trenching:</strong> Contractors perform trench excavation to exact depths 
                and widths, meeting Miami-Dade County and utility company requirements, with proper safety 
                measures. Trenching prepares areas for utility installation with proper depth control, accounting 
                for Miami-Dade&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Trench Bedding:</strong> Trench beds are prepared with proper bedding material for 
                utility placement, meeting Miami-Dade County and utility company specifications. Bedding ensures 
                stable utility support and proper drainage, especially important given Miami-Dade&apos;s sandy 
                and limestone soil conditions.
              </li>
              <li>
                <strong>Utility Installation:</strong> Utilities are installed in prepared trenches by utility 
                contractors or specialized installers. Installation follows utility company specifications and 
                code requirements, with coordination for inspections as required.
              </li>
              <li>
                <strong>Backfill and Restoration:</strong> Trenches are backfilled with proper compaction and 
                surface restoration, meeting Miami-Dade County requirements. Backfill ensures proper utility 
                support and restores surface conditions, especially important given Miami-Dade&apos;s high water 
                table and potential for settlement.
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
                <h3 className={styles.faqQuestion}>What permits are required for utility trenching in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Utility trenching in Miami-Dade County requires Utility Permits for work in public 
                  rights-of-way, Public Works Right-of-Way Permits for trenches in roadways, and Water & 
                  Sewer permits for water and sewer infrastructure work. When permits require RER Department 
                  approval, applicants must seek approval from the County before proceeding. DERM Class V 
                  Permits are required for dewatering if excavations encounter water. As of October 1, 2025, 
                  permits can be submitted through Miami-Dade&apos;s electronic permitting system. We help 
                  identify and coordinate all required permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need to locate utilities before trenching in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, Florida law requires utility location before excavation to prevent damage to existing 
                  utilities. We coordinate with utility companies through the Sunshine 811 system to locate 
                  and mark all underground utilities. Utility location is required and protects both existing 
                  utilities and excavation workers, especially important in Miami-Dade County where utility 
                  infrastructure is extensive.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep do utility trenches need to be in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench depths in Miami-Dade County vary by utility type and local codes. Typical 
                  minimum depths are 18-24 inches for water, sewer, electrical, and telecommunications lines, 
                  with deeper depths for commercial or high-voltage applications. Sewer lines require proper 
                  slope for gravity flow (typically 1/4 inch per foot minimum). We coordinate with utility 
                  companies and building departments to determine exact depth requirements specific to 
                  Miami-Dade County conditions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect utility trenching?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, may require dewatering for deep trenches. DERM Class V Permits are required for 
                  temporary dewatering to ensure that sediment, turbidity, and contaminants are removed 
                  before discharge. Water management ensures dry working conditions and prevents trench 
                  collapse, especially in areas like Miami Beach, Aventura, and coastal neighborhoods where 
                  the water table is particularly high. This adds complexity and cost to utility trench 
                  projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does utility trench excavation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench excavation costs in Miami-Dade County vary based on trench length, depth, 
                  utility type, site conditions, and dewatering requirements. Typical costs range from $10-30 
                  per linear foot for simple trenches to $50-100+ per linear foot for complex projects with 
                  difficult access, deep depths, dewatering requirements, or special requirements. Factors 
                  affecting cost include trench depth, soil conditions, utility coordination requirements, 
                  and permit complexity. Projects requiring extensive dewatering or working in flood zones 
                  often cost more due to additional permit requirements and specialized techniques.
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
              <a href="/services/excavation-earthwork/utility-trench-excavation/" className={styles.backLink}>
                ← View Utility Trench Excavation (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/miami/excavation-earthwork/" className={styles.backLink}>
                ← Back to Miami Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Utility Trench Project?"
        description="Get a free quote for your utility trench excavation in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, utility coordination, high water table dewatering, and regulatory compliance to excavate utility trenches to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

