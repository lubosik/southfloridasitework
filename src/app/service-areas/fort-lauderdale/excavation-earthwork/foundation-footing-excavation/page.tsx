import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Foundation & Footing Excavation in Fort Lauderdale, FL | Broward County',
  description: 'Precision foundation and footing excavation in Broward County. Exact depth and dimension control for building foundations with proper soil preparation.',
  openGraph: {
    title: 'Foundation & Footing Excavation in Fort Lauderdale, FL | Broward County',
    description: 'Precision foundation and footing excavation to exact specifications in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/excavation-earthwork/foundation-footing-excavation/`,
  },
}

export default function FortLauderdaleFoundationFootingExcavationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Foundation and Footing Excavation in Fort Lauderdale, FL"
        subtitle="Precision excavation for building foundations and footings to exact depths and dimensions across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Foundation and footing excavation services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Foundation and footing excavation services in Broward County are essential for general 
              contractors, custom home builders, commercial developers, and anyone constructing buildings 
              that require precise foundation preparation throughout Broward County, including Fort 
              Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home in Victoria Park, commercial structure in Plantation, 
              or any building requiring foundations in Fort Lauderdale, proper excavation is critical for 
              structural integrity. We coordinate licensed contractors with precision equipment and 
              expertise to excavate foundations to exact engineering specifications, navigating Broward 
              County Building Code Division, Development & Environmental Review (DER), flood zone requirements, 
              storm event protection, and high water table conditions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Foundation and footing excavation in Broward County typically ranges from 
                <strong> $25,000 to $75,000</strong> for residential foundations, and 
                <strong> $75,000 to $200,000+</strong> for commercial foundations depending on foundation 
                size, depth, soil conditions, dewatering requirements, and flood zone considerations. 
                Projects requiring extensive dewatering or working in flood zones often cost more due to 
                additional permit requirements and specialized techniques. Projects involving development 
                work as described in Florida Statute 380.04 require a development permit prior to the 
                issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Foundation and Footing Excavation Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Drawing Review</h3>
              <p className={styles.serviceDescription}>
                Review of engineering drawings to understand foundation dimensions, depths, and 
                specifications specific to Broward County building codes, flood zone requirements, and 
                storm event protection. Drawing review ensures excavation meets exact requirements for 
                foundation type, building loads, Base Flood Elevation (BFE) compliance, and storm event 
                protection (100-year, 3-day storm event for structures) where applicable.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Precision Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation to exact depths and dimensions specified in engineering drawings, meeting 
                Florida Building Code minimum footing depth requirements (12 inches below finished grade 
                minimum). Precision excavation ensures foundations are properly sized and positioned, with 
                careful attention to depth control and wall verticality, accounting for Broward County&apos;s 
                high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Soil Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of foundation soils to proper grade and compaction, meeting Broward County 
                building code requirements for foundation support. Soil preparation ensures stable foundation 
                support, with removal of unsuitable material and preparation of bearing surfaces, 
                especially important given Broward County&apos;s sandy and limestone soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Dewatering Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of dewatering systems when excavations encounter Broward County&apos;s high water 
                table, requiring SFWMD Environmental Resource Permits for dewatering activities affecting 
                state waters. Dewatering prevents water intrusion during excavation and foundation placement, 
                ensuring dry working conditions, especially important in areas like Fort Lauderdale, 
                Hollywood, and coastal neighborhoods where the water table is particularly high.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Foundation Inspection Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of excavations for Broward County Building Code Division inspections. 
                Excavations are prepared to exact specifications, with proper dimensions and soil conditions 
                ready for inspection before foundation placement. Plan review by Broward County plans 
                processing staff ensures compliance with Florida Building Code standards, storm event 
                protection requirements, and county-specific flood mitigation requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
              <p className={styles.serviceDescription}>
                Coordination of backfill operations after foundation placement, with proper compaction to 
                support foundation walls, meeting Broward County building code requirements. Backfill ensures 
                proper support and drainage around foundations, especially important given Broward County&apos;s 
                high water table and potential for water intrusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Foundation Excavation Considerations</h2>
            <p className={styles.text}>
              Foundation excavation in Broward County requires specialized knowledge of local 
              conditions and building code requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Minimum Footing Depth Requirements:</strong> Florida Building Code requires 
                exterior footings to be placed not less than 12 inches below the finished grade of the 
                ground surface. However, this baseline requirement must be adapted based on site-specific 
                conditions including elevations of nearby roads and water bodies, property undulations, 
                surrounding terrain, and flood-prone designations. In areas with high water tables, the 
                finished floor height should be set appropriately higher than the likely height of any 
                water intrusion.
              </li>
              <li>
                <strong>Flood Zone Requirements and Base Flood Elevation (BFE):</strong> Broward County 
                has implemented enhanced building standards requiring new structures in flood-designated 
                areas to be built at or above the Base Flood Elevation (BFE). Foundation excavations must 
                account for flood zone regulations and foundation elevation requirements, often requiring 
                significant fill material to meet BFE. Storm event protection requires that first floor 
                elevations of all structures within drainage districts must protect structures from a 
                100-year, 3-day storm event.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Broward County&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, often requires dewatering systems for 
                foundation excavations. SFWMD Environmental Resource Permits are required for dewatering 
                activities affecting state waters. The applicant must have all applicable SFWMD permits 
                before proceeding with dewatering operations. Proper dewatering prevents water intrusion and 
                ensures stable excavation walls and dry foundation placement, especially in areas like Fort 
                Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for foundation excavation projects in Broward County.
              </li>
              <li>
                <strong>Broward County Building Permits and Plan Review:</strong> Foundation excavation requires 
                Uniform Building Permit Applications (updated November 14, 2025) from Broward County Building 
                Code Division or municipal building departments. Permit applications can be submitted through 
                ePermits OneStop. Permits are valid for 180 days from the date of issuance. Plan review by 
                plans processing staff ensures compliance with Florida Building Code standards, storm event 
                protection requirements, and county-specific flood mitigation requirements.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Foundation excavation projects 
                typically require Development & Environmental Review through ePermits OneStop for applicable 
                building permits. All DER submittals are only accepted electronically. Broward County&apos;s 
                Planning and Development Management Division ensures that proposed developments comply with 
                the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County including Fort 
                Lauderdale, Hollywood, Pompano Beach, and Deerfield Beach have unique soil characteristics 
                including sand, limestone bedrock, and organic materials that affect foundation excavation 
                and bearing capacity. Soil conditions determine excavation methods and foundation design, 
                requiring specialized techniques for limestone bedrock removal when encountered.
              </li>
              <li>
                <strong>Limestone Bedrock:</strong> Broward County&apos;s limestone bedrock may require 
                specialized excavation equipment and techniques. Bedrock conditions affect excavation depth 
                and may require rock removal or foundation design adjustments. When excavations encounter 
                limestone bedrock, we coordinate with engineers to determine the best approach, which may 
                include rock removal, foundation design changes, or foundation placement on bedrock.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep foundation excavations require proper shoring, 
                sloping, or benching to prevent cave-ins and ensure worker safety per OSHA requirements. 
                Broward County&apos;s high water table and coastal soil conditions require specialized shoring 
                techniques to prevent excavation collapse and ensure worker safety.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Foundation Excavation Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate foundation and footing excavation throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Las Olas Isles</li>
                  <li>Rio Vista</li>
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
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Weston</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
                  <li>Sunrise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Foundation Excavation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your foundation excavation is completed precisely and meets 
              all Broward County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Drawing Review:</strong> We review engineering drawings to understand 
                foundation dimensions, depths, and specifications specific to Broward County building 
                codes, flood zone requirements, and storm event protection. Drawing review ensures 
                excavation meets exact requirements for foundation type, building loads, Base Flood 
                Elevation (BFE) compliance, and storm event protection (100-year, 3-day storm event for 
                structures) where applicable.
              </li>
              <li>
                <strong>Site Layout and Staking:</strong> Foundation locations are staked and marked 
                according to survey data and engineering drawings, accounting for flood zone requirements, 
                storm event protection, and elevation adjustments. Layout ensures foundations are positioned 
                correctly on the site and meet Broward County requirements.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for foundation excavation projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for dewatering activities affecting state waters if required, and coordinate with 
                building departments. All DER submittals are only accepted electronically. Permits are 
                valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, compactors, dewatering systems) and experience for 
                precision foundation excavation in Broward County, including expertise with high water 
                table conditions, coastal soils, flood zone requirements, and storm event protection.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set up 
                dewatering systems in compliance with SFWMD Environmental Resource Permit requirements for 
                activities affecting state waters, ensuring proper water quality management and discharge 
                compliance. The applicant must have all applicable SFWMD permits before proceeding with 
                dewatering operations. This is especially important given Broward County&apos;s high water table.
              </li>
              <li>
                <strong>Precision Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, meeting Florida Building Code minimum footing depth requirements (12 inches 
                below finished grade minimum), with careful attention to depth control and wall verticality. 
                Excavation prepares foundation areas for concrete placement, accounting for Broward County&apos;s 
                high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Soil Preparation:</strong> Foundation soils are prepared to proper grade and 
                compaction, meeting Broward County building code requirements for foundation support. 
                Unsuitable material is removed, and bearing surfaces are prepared for foundation support, 
                especially important given Broward County&apos;s sandy and limestone soil conditions.
              </li>
              <li>
                <strong>Inspection and Foundation Placement:</strong> Excavations are inspected by Broward 
                County Building Code Division or municipal building departments before foundation placement. 
                After approval, foundations are placed, and backfill operations begin with proper compaction 
                to meet Broward County building code requirements, storm event protection requirements, and 
                engineering specifications.
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
                <h3 className={styles.faqQuestion}>How deep do foundations need to be in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Florida Building Code requires exterior footings to be placed not less than 12 inches 
                  below the finished grade of the ground surface. However, this baseline requirement must 
                  be adapted based on site-specific conditions including elevations of nearby roads and water 
                  bodies, property undulations, surrounding terrain, and flood-prone designations. In areas 
                  with high water tables, the finished floor height should be set appropriately higher than 
                  the likely height of any water intrusion. Flood zones may require additional elevation 
                  requirements to meet Base Flood Elevation (BFE) and storm event protection (100-year, 
                  3-day storm event for structures).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for foundation excavation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation requires development permits (Florida Statute 380.04) obtained prior 
                  to building permit issuance, Uniform Building Permit Applications from Broward County 
                  Building Code Division, Development & Environmental Review (DER) through ePermits OneStop 
                  for applicable projects, SFWMD Environmental Resource Permits for dewatering activities 
                  affecting state waters if required, and FEMA compliance permits for properties in flood 
                  zones. All DER submittals are only accepted electronically. Permits are valid for 180 days 
                  from the date of issuance. We help identify and coordinate all required permits and 
                  inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need dewatering for foundation excavation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Dewatering is often required in Broward County due to the high water table, which can be 
                  within 2-3 feet of the surface in many areas. If excavations encounter water, dewatering 
                  systems prevent water intrusion and ensure dry working conditions. SFWMD Environmental 
                  Resource Permits are required for dewatering activities affecting state waters. The 
                  applicant must have all applicable SFWMD permits before proceeding with dewatering 
                  operations. This is especially important in areas like Fort Lauderdale, Hollywood, and 
                  coastal neighborhoods where the water table is particularly high. We coordinate dewatering 
                  when needed to ensure proper foundation excavation and placement.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does foundation excavation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation costs in Broward County vary based on foundation size, depth, 
                  soil conditions, dewatering requirements, and flood zone considerations. Typical residential 
                  foundations range from $25,000 to $75,000, while commercial foundations can range from 
                  $75,000 to $200,000+ depending on scope. Factors affecting cost include excavation depth, 
                  soil conditions, dewatering complexity, and flood zone elevation requirements. Projects 
                  requiring extensive dewatering or working in flood zones often cost more due to additional 
                  permit requirements (SFWMD Environmental Resource Permits) and specialized techniques. 
                  Broward County permit processing, including DER review through ePermits OneStop, can add 
                  time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens if we hit limestone bedrock in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  If excavations encounter limestone bedrock in Broward County, specialized equipment may be 
                  needed for rock removal, or foundation design may need adjustment. Bedrock conditions are 
                  assessed during excavation, and we coordinate with engineers to determine the best 
                  approach, which may include rock removal, foundation design changes, or foundation placement 
                  on bedrock. Broward County&apos;s limestone bedrock is common in coastal areas and may require 
                  specialized excavation techniques.
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
              <a href="/services/excavation-earthwork/foundation-footing-excavation/" className={styles.backLink}>
                ← View Foundation and Footing Excavation (All Areas)
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
        title="Ready to Start Your Fort Lauderdale Foundation Excavation?"
        description="Get a free quote for your foundation and footing excavation in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, high water table dewatering, SFWMD Environmental Resource Permits, building codes, storm event protection, and regulatory compliance to excavate your foundations to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

