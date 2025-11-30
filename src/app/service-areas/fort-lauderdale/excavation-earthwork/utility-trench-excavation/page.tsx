import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Utility Trench Excavation in Fort Lauderdale, FL | Broward County',
  description: 'Precision utility trench excavation for water, sewer, electrical, and telecommunications in Broward County. Proper depth and code compliance.',
  openGraph: {
    title: 'Utility Trench Excavation in Fort Lauderdale, FL | Broward County',
    description: 'Precision utility trench excavation for water, sewer, electrical, and telecommunications utilities in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/excavation-earthwork/utility-trench-excavation/`,
  },
}

export default function FortLauderdaleUtilityTrenchExcavationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Utility Trench Excavation in Fort Lauderdale, FL"
        subtitle="Precision trenching for utilities including water, sewer, electrical, and telecommunications across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Utility trench excavation services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Utility trench excavation services in Broward County are essential for general contractors, 
              developers, utility companies, infrastructure projects, and anyone installing or upgrading utility 
              systems that require underground trenching throughout Broward County, including Fort Lauderdale, 
              Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re installing new utilities in Plantation, upgrading existing systems in Weston, 
              or connecting to municipal utility lines in Fort Lauderdale, proper trench excavation is critical 
              for utility installation. We coordinate licensed contractors with precision equipment and expertise 
              to excavate utility trenches to exact specifications, navigating Broward County Building Code 
              Division, Development & Environmental Review (DER), utility company requirements, and SFWMD 
              Environmental Resource Permits with specialized knowledge of high water table conditions and 
              regulatory compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Utility trench excavation in Broward County typically ranges from 
                <strong> $15,000 to $50,000</strong> for residential utility connections, and 
                <strong> $50,000 to $200,000+</strong> for commercial or infrastructure projects depending on 
                trench length, depth, utility type, site conditions, and dewatering requirements. Projects 
                requiring extensive dewatering, working in flood zones, or involving right-of-way access 
                often cost more due to additional permit requirements and specialized techniques. Projects 
                involving development work as described in Florida Statute 380.04 require a development permit 
                prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Utility Trench Excavation Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Location and Marking</h3>
              <p className={styles.serviceDescription}>
                Coordination with utility companies through Sunshine 811 to locate and mark existing 
                underground utilities before excavation, as required by Florida law. Utility location prevents 
                damage to existing utilities and ensures safe excavation operations, especially important in 
                Broward County where utility infrastructure is extensive.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Precision Trenching</h3>
              <p className={styles.serviceDescription}>
                Excavation of trenches to exact depths and widths specified for utility installation, meeting 
                Broward County and utility company requirements. Precision trenching ensures proper utility 
                placement, with careful attention to depth control and trench width for utility clearance, 
                accounting for Broward County&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Depth and Slope Control</h3>
              <p className={styles.serviceDescription}>
                Excavation to proper depths and slopes required for utility installation and code compliance 
                specific to Broward County requirements. Depth requirements vary by utility type and local 
                codes, with proper slopes for drainage where applicable, especially important for sewer lines 
                requiring gravity flow.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Trench Bedding Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of trench beds with proper bedding material for utility placement, meeting 
                Broward County and utility company specifications. Bedding preparation ensures stable 
                utility support and proper drainage, with material selection based on utility type and 
                Broward County&apos;s sandy and limestone soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Safety and Shoring</h3>
              <p className={styles.serviceDescription}>
                Installation of proper shoring, sloping, or benching for deep trenches to prevent cave-ins 
                and ensure worker safety per OSHA requirements. Safety measures protect workers and prevent 
                trench collapse, especially important given Broward County&apos;s high water table and coastal 
                soil conditions that can affect trench stability.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
              <p className={styles.serviceDescription}>
                Coordination of backfill operations after utility installation, with proper compaction to 
                support utilities and prevent settlement, meeting Broward County requirements. Backfill 
                ensures proper utility support and surface restoration, especially important given 
                Broward County&apos;s high water table and potential for settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Utility Trench Considerations</h2>
            <p className={styles.text}>
              Utility trench excavation in Broward County requires specialized knowledge of local 
              conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Utility Connection Permits:</strong> Broward County requires Utility Connection 
                Permits for construction involving water, wastewater, or reclaimed water systems. This is a 
                four-part process that includes Plan Approval, Request for Permit, the Permit itself, and 
                Release for Service. Contractors are required to obtain a Utility Connection Bond to proceed 
                with these permits.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for utility trench excavation projects in Broward 
                County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Utility trench excavation projects 
                typically require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Broward County Building Permits:</strong> Utility trench excavation requires Uniform 
                Building Permit Applications (updated November 14, 2025) from Broward County Building Code 
                Division or municipal building departments. Permit applications can be submitted through 
                ePermits OneStop. Permits are valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Utility trench excavation affecting 
                state waters or wetlands may require SFWMD Environmental Resource Permits. As of June 28, 
                2024, new water quality performance standards were implemented. SFWMD permits are required for 
                dewatering activities affecting state waters. The applicant must have all applicable SFWMD 
                permits before proceeding with dewatering operations.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Utility trench projects must comply with these requirements.
              </li>
              <li>
                <strong>Sunshine 811 Utility Location:</strong> Florida law requires utility location before 
                excavation to prevent damage to existing utilities. We coordinate with utility companies 
                through the Sunshine 811 system to locate and mark all underground utilities. Utility 
                location is required and protects both existing utilities and excavation workers, especially 
                important in Broward County where utility infrastructure is extensive.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Broward County&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, may require dewatering for deep trenches. 
                SFWMD Environmental Resource Permits are required for dewatering activities affecting state 
                waters. The applicant must have all applicable SFWMD permits before proceeding with dewatering 
                operations. Water management ensures dry working conditions and prevents trench collapse, 
                especially in areas like Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County including Fort 
                Lauderdale, Hollywood, Pompano Beach, and Deerfield Beach have unique soil characteristics 
                including sand, limestone bedrock, and organic materials that affect trenching methods and 
                stability. Soil conditions determine shoring requirements and trenching techniques.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Utility Trench Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate utility trench excavation throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Hollywood Beach</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
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
            <h2 className={styles.heading}>The Utility Trench Excavation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your utility trench excavation is completed safely and meets 
              all Broward County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies through Sunshine 811 
                to locate and mark all existing underground utilities before excavation begins, as required by 
                Florida law. Utility location prevents damage and ensures safe excavation, especially important 
                in Broward County where utility infrastructure is extensive.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for utility trench excavation projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits including 
                Utility Connection Permits for water, wastewater, or reclaimed water systems (four-part process: 
                Plan Approval, Request for Permit, the Permit itself, and Release for Service), Uniform Building 
                Permit Applications (updated November 14, 2025), Development & Environmental Review (DER) 
                through ePermits OneStop, SFWMD Environmental Resource Permits for dewatering activities 
                affecting state waters if required, Natural Resource Protection Code compliance, and coordinate 
                with regulatory agencies. All DER submittals are only accepted electronically. Permits are valid 
                for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (trenchers, excavators, dewatering systems) and experience for utility 
                trench excavation in Broward County, including expertise with high water table conditions, 
                coastal soils, utility coordination, and storm event protection.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For trenches requiring dewatering, contractors set up 
                dewatering systems in compliance with SFWMD Environmental Resource Permit requirements for 
                activities affecting state waters, ensuring proper water quality management and discharge 
                compliance. The applicant must have all applicable SFWMD permits before proceeding with 
                dewatering operations. This is especially important given Broward County&apos;s high water table.
              </li>
              <li>
                <strong>Precision Trenching:</strong> Contractors perform trench excavation to exact depths 
                and widths, meeting Broward County and utility company requirements, with proper safety 
                measures. Trenching prepares areas for utility installation with proper depth control, accounting 
                for Broward County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Trench Bedding:</strong> Trench beds are prepared with proper bedding material for 
                utility placement, meeting Broward County and utility company specifications. Bedding ensures 
                stable utility support and proper drainage, especially important given Broward County&apos;s sandy 
                and limestone soil conditions.
              </li>
              <li>
                <strong>Utility Installation:</strong> Utilities are installed in prepared trenches by utility 
                contractors or specialized installers. Installation follows utility company specifications and 
                code requirements, with coordination for inspections as required.
              </li>
              <li>
                <strong>Backfill and Restoration:</strong> Trenches are backfilled with proper compaction and 
                surface restoration, meeting Broward County requirements. Backfill ensures proper utility 
                support and restores surface conditions, especially important given Broward County&apos;s high water 
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
                <h3 className={styles.faqQuestion}>What permits are required for utility trenching in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Utility trenching in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Utility Connection Permits for water, wastewater, 
                  or reclaimed water systems (four-part process: Plan Approval, Request for Permit, the Permit 
                  itself, and Release for Service), Uniform Building Permit Applications from Broward County 
                  Building Code Division, Development & Environmental Review (DER) through ePermits OneStop 
                  for applicable projects, SFWMD Environmental Resource Permits for dewatering activities 
                  affecting state waters if required, Natural Resource Protection Code compliance, and FEMA 
                  compliance permits for properties in flood zones. All DER submittals are only accepted 
                  electronically. Permits are valid for 180 days from the date of issuance. We help identify 
                  and coordinate all required permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need to locate utilities before trenching in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, Florida law requires utility location before excavation to prevent damage to existing 
                  utilities. We coordinate with utility companies through the Sunshine 811 system to locate 
                  and mark all underground utilities. Utility location is required and protects both existing 
                  utilities and excavation workers, especially important in Broward County where utility 
                  infrastructure is extensive.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep do utility trenches need to be in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench depths in Broward County vary by utility type and local codes. Typical 
                  minimum depths are 18-24 inches for water, sewer, electrical, and telecommunications lines, 
                  with deeper depths for commercial or high-voltage applications. Sewer lines require proper 
                  slope for gravity flow (typically 1/4 inch per foot minimum). We coordinate with utility 
                  companies and building departments to determine exact depth requirements specific to 
                  Broward County conditions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect utility trenching?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, may require dewatering for deep trenches. SFWMD Environmental Resource Permits are 
                  required for dewatering activities affecting state waters. The applicant must have all 
                  applicable SFWMD permits before proceeding with dewatering operations. Water management 
                  ensures dry working conditions and prevents trench collapse, especially in areas like Fort 
                  Lauderdale, Hollywood, and coastal neighborhoods where the water table is particularly 
                  high. This adds complexity and cost to utility trench projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does utility trench excavation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Utility trench excavation costs in Broward County vary based on trench length, depth, 
                  utility type, site conditions, and dewatering requirements. Typical costs range from $10-30 
                  per linear foot for simple trenches to $50-100+ per linear foot for complex projects with 
                  difficult access, deep depths, dewatering requirements, or special requirements. Factors 
                  affecting cost include trench depth, soil conditions, utility coordination requirements, 
                  and permit complexity. Projects requiring extensive dewatering or working in flood zones 
                  often cost more due to additional permit requirements (SFWMD Environmental Resource Permits) 
                  and specialized techniques. Broward County permit processing, including DER review through 
                  ePermits OneStop, can add time and costs.
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
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/" className={styles.backLink}>
                ← Back to Fort Lauderdale Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Utility Trench Project?"
        description="Get a free quote for your utility trench excavation in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, utility coordination, high water table dewatering, SFWMD Environmental Resource Permits, Natural Resource Protection Code compliance, DER requirements, and regulatory compliance to excavate utility trenches to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

