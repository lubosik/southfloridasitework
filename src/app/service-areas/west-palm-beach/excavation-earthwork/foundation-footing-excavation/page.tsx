import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Foundation & Footing Excavation in West Palm Beach, FL | Palm Beach County',
  description: 'Precision foundation and footing excavation in Palm Beach County. Exact depth and dimension control for building foundations with proper soil preparation.',
  openGraph: {
    title: 'Foundation & Footing Excavation in West Palm Beach, FL | Palm Beach County',
    description: 'Precision foundation and footing excavation to exact specifications in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/excavation-earthwork/foundation-footing-excavation/`,
  },
}

export default function WestPalmBeachFoundationFootingExcavationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Foundation and Footing Excavation in West Palm Beach, FL"
        subtitle="Precision excavation for building foundations and footings to exact depths and dimensions across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Foundation and footing excavation services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Foundation and footing excavation services in Palm Beach County are essential for general 
              contractors, custom home builders, commercial developers, and anyone constructing buildings 
              that require precise foundation preparation throughout Palm Beach County, including West Palm 
              Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home in El Cid, commercial structure in Royal Palm Beach, 
              or any building requiring foundations in Palm Beach, proper excavation is critical for 
              structural integrity. We coordinate licensed contractors with precision equipment and 
              expertise to excavate foundations to exact engineering specifications, navigating Palm Beach 
              County Building Division, Environmental Resources Management (ERM) review, flood zone requirements, 
              and high water table conditions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Foundation and footing excavation in Palm Beach County typically ranges from 
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
          <h2 className={styles.heading}>What Foundation and Footing Excavation Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Drawing Review</h3>
              <p className={styles.serviceDescription}>
                Review of engineering drawings to understand foundation dimensions, depths, and 
                specifications specific to Palm Beach County building codes, flood zone requirements, and 
                building loads. Drawing review ensures excavation meets exact requirements for 
                foundation type, building loads, Base Flood Elevation (BFE) compliance where applicable.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Precision Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation to exact depths and dimensions specified in engineering drawings, meeting 
                Florida Building Code minimum footing depth requirements (12 inches below finished grade 
                minimum). Precision excavation ensures foundations are properly sized and positioned, with 
                careful attention to depth control and wall verticality, accounting for Palm Beach County&apos;s 
                high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Soil Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of foundation soils to proper grade and compaction, meeting Palm Beach County 
                building code requirements for foundation support. Soil preparation ensures stable foundation 
                support, with removal of unsuitable material and preparation of bearing surfaces, 
                especially important given Palm Beach County&apos;s sandy and limestone soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Dewatering Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of dewatering systems when excavations encounter Palm Beach County&apos;s high water 
                table, requiring SFWMD Environmental Resource Permits for dewatering activities affecting 
                state waters. Dewatering prevents water intrusion during excavation and foundation placement, 
                ensuring dry working conditions, especially important in areas like Palm Beach, Jupiter, and 
                coastal neighborhoods where the water table is particularly high.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Foundation Inspection Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of excavations for Palm Beach County Building Division inspections. 
                Excavations are prepared to exact specifications, with proper dimensions and soil conditions 
                ready for inspection before foundation placement. Plan review by Palm Beach County Building 
                Division ensures compliance with Florida Building Code standards and county-specific requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
              <p className={styles.serviceDescription}>
                Coordination of backfill operations after foundation placement, with proper compaction to 
                support foundation walls, meeting Palm Beach County building code requirements. Backfill ensures 
                proper support and drainage around foundations, especially important given Palm Beach County&apos;s 
                high water table and potential for water intrusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Foundation Excavation Considerations</h2>
            <p className={styles.text}>
              Foundation excavation in Palm Beach County requires specialized knowledge of local 
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
                <strong>Flood Zone Requirements and Base Flood Elevation (BFE):</strong> Palm Beach County 
                requires new structures in flood-designated areas to be built at or above the Base Flood 
                Elevation (BFE). Foundation excavations must account for flood zone regulations and foundation 
                elevation requirements, often requiring significant fill material to meet BFE.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Palm Beach County&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, often requires dewatering systems for 
                foundation excavations. SFWMD Environmental Resource Permits are required for dewatering 
                activities affecting state waters. The applicant must have all applicable SFWMD permits 
                before proceeding with dewatering operations. Proper dewatering prevents water intrusion and 
                ensures stable excavation walls and dry foundation placement, especially in areas like Palm 
                Beach, Jupiter, and coastal neighborhoods.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for foundation excavation projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Building Permits and Plan Review:</strong> Foundation excavation requires 
                Building Division permits from Palm Beach County Building Division. Building permits must be 
                obtained before beginning construction, and the Building Division reviews plans to ensure 
                compliance with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Foundation excavation projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Palm Beach County including Palm 
                Beach, Jupiter, and Juno Beach have unique soil characteristics 
                including sand, limestone bedrock, and organic materials that affect foundation excavation 
                and bearing capacity. Soil conditions determine excavation methods and foundation design, 
                requiring specialized techniques for limestone bedrock removal when encountered.
              </li>
              <li>
                <strong>Limestone Bedrock:</strong> Palm Beach County&apos;s limestone bedrock may require 
                specialized excavation equipment and techniques. Bedrock conditions affect excavation depth 
                and may require rock removal or foundation design adjustments. When excavations encounter 
                limestone bedrock, we coordinate with engineers to determine the best approach, which may 
                include rock removal, foundation design changes, or foundation placement on bedrock.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep foundation excavations require proper shoring, 
                sloping, or benching to prevent cave-ins and ensure worker safety per OSHA requirements. 
                Palm Beach County&apos;s high water table and coastal soil conditions require specialized shoring 
                techniques to prevent excavation collapse and ensure worker safety.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. Building 
                Division and ERM review can add time to projects. We coordinate permit applications to minimize 
                delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Foundation Excavation Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate foundation and footing excavation throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Boca Raton</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Wellington</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                  <li>Lantana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Foundation Excavation Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your foundation excavation is completed precisely and meets 
              all Palm Beach County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Drawing Review:</strong> We review engineering drawings to understand 
                foundation dimensions, depths, and specifications specific to Palm Beach County building 
                codes, flood zone requirements, and building loads. Drawing review ensures 
                excavation meets exact requirements for foundation type, building loads, Base Flood 
                Elevation (BFE) compliance where applicable.
              </li>
              <li>
                <strong>Site Layout and Staking:</strong> Foundation locations are staked and marked 
                according to survey data and engineering drawings, accounting for flood zone requirements 
                and elevation adjustments. Layout ensures foundations are positioned 
                correctly on the site and meet Palm Beach County requirements.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for foundation excavation projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for dewatering activities affecting state waters if required, and coordinate with 
                building departments.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, compactors, dewatering systems) and experience for 
                precision foundation excavation in Palm Beach County, including expertise with high water 
                table conditions, coastal soils, flood zone requirements, and tree protection.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set up 
                dewatering systems in compliance with SFWMD Environmental Resource Permit requirements for 
                activities affecting state waters, ensuring proper water quality management and discharge 
                compliance. The applicant must have all applicable SFWMD permits before proceeding with 
                dewatering operations. This is especially important given Palm Beach County&apos;s high water table.
              </li>
              <li>
                <strong>Precision Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, meeting Florida Building Code minimum footing depth requirements (12 inches 
                below finished grade minimum), with careful attention to depth control and wall verticality. 
                Excavation prepares foundation areas for concrete placement, accounting for Palm Beach County&apos;s 
                high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Soil Preparation:</strong> Foundation soils are prepared to proper grade and 
                compaction, meeting Palm Beach County building code requirements for foundation support. 
                Unsuitable material is removed, and bearing surfaces are prepared for foundation support, 
                especially important given Palm Beach County&apos;s sandy and limestone soil conditions.
              </li>
              <li>
                <strong>Inspection and Foundation Placement:</strong> Excavations are inspected by Palm Beach 
                County Building Division or municipal building departments before foundation placement. 
                After approval, foundations are placed, and backfill operations begin with proper compaction 
                to meet Palm Beach County building code requirements and engineering specifications.
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
                <h3 className={styles.faqQuestion}>How deep do foundations need to be in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Florida Building Code requires exterior footings to be placed not less than 12 inches 
                  below the finished grade of the ground surface. However, this baseline requirement must 
                  be adapted based on site-specific conditions including elevations of nearby roads and water 
                  bodies, property undulations, surrounding terrain, and flood-prone designations. In areas 
                  with high water tables, the finished floor height should be set appropriately higher than 
                  the likely height of any water intrusion. Flood zones may require additional elevation 
                  requirements to meet Base Flood Elevation (BFE).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for foundation excavation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation requires development permits (Florida Statute 380.04) obtained prior 
                  to building permit issuance, Building Division permits from Palm Beach County Building 
                  Division, Environmental Resources Management (ERM) review for projects affecting wetlands 
                  or environmentally sensitive areas, SFWMD Environmental Resource Permits for dewatering activities 
                  affecting state waters if required, and FEMA compliance permits for properties in flood 
                  zones. We help identify and coordinate all required permits and 
                  inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need dewatering for foundation excavation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Dewatering is often required in Palm Beach County due to the high water table, which can be 
                  within 2-3 feet of the surface in many areas. If excavations encounter water, dewatering 
                  systems prevent water intrusion and ensure dry working conditions. SFWMD Environmental 
                  Resource Permits are required for dewatering activities affecting state waters. The 
                  applicant must have all applicable SFWMD permits before proceeding with dewatering 
                  operations. This is especially important in areas like Palm Beach, Jupiter, and 
                  coastal neighborhoods where the water table is particularly high. We coordinate dewatering 
                  when needed to ensure proper foundation excavation and placement.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does foundation excavation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation costs in Palm Beach County vary based on foundation size, depth, 
                  soil conditions, dewatering requirements, and flood zone considerations. Typical residential 
                  foundations range from $25,000 to $75,000, while commercial foundations can range from 
                  $75,000 to $200,000+ depending on scope. Factors affecting cost include excavation depth, 
                  soil conditions, dewatering complexity, and flood zone elevation requirements. Projects 
                  requiring extensive dewatering or working in flood zones often cost more due to additional 
                  permit requirements (SFWMD Environmental Resource Permits) and specialized techniques. 
                  Palm Beach County permit processing, including ERM review, can add 
                  time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens if we hit limestone bedrock in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  If excavations encounter limestone bedrock in Palm Beach County, specialized equipment may be 
                  needed for rock removal, or foundation design may need adjustment. Bedrock conditions are 
                  assessed during excavation, and we coordinate with engineers to determine the best 
                  approach, which may include rock removal, foundation design changes, or foundation placement 
                  on bedrock. Palm Beach County&apos;s limestone bedrock is common in coastal areas and may require 
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
              <a href="/service-areas/west-palm-beach/excavation-earthwork/" className={styles.backLink}>
                ← Back to West Palm Beach Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Foundation Excavation?"
        description="Get a free quote for your foundation and footing excavation in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, high water table dewatering, SFWMD Environmental Resource Permits, building codes, Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, and regulatory compliance to excavate your foundations to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

