import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Foundation & Footing Excavation in Miami, FL | Miami-Dade County',
  description: 'Precision foundation and footing excavation in Miami-Dade County. Exact depth and dimension control for building foundations with proper soil preparation.',
  openGraph: {
    title: 'Foundation & Footing Excavation in Miami, FL | Miami-Dade County',
    description: 'Precision foundation and footing excavation to exact specifications in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/excavation-earthwork/foundation-footing-excavation/`,
  },
}

export default function MiamiFoundationFootingExcavationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Foundation and Footing Excavation in Miami, FL"
        subtitle="Precision excavation for building foundations and footings to exact depths and dimensions across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Foundation and footing excavation services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Foundation and footing excavation services in Miami-Dade County are essential for general 
              contractors, custom home builders, commercial developers, and anyone constructing buildings 
              that require precise foundation preparation in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a custom home in Coral Gables, commercial structure in Doral, 
              or any building requiring foundations in Miami Beach, proper excavation is critical for 
              structural integrity. We coordinate licensed contractors with precision equipment and 
              expertise to excavate foundations to exact engineering specifications, navigating Miami-Dade 
              RER building codes, flood zone requirements, and high water table conditions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Foundation and footing excavation in Miami-Dade County typically ranges from 
                <strong> $25,000 to $75,000</strong> for residential foundations, and 
                <strong> $75,000 to $200,000+</strong> for commercial foundations depending on foundation 
                size, depth, soil conditions, dewatering requirements, and flood zone considerations. 
                Projects requiring extensive dewatering or working in flood zones often cost more due to 
                additional permit requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Foundation and Footing Excavation Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Engineering Drawing Review</h3>
              <p className={styles.serviceDescription}>
                Review of engineering drawings to understand foundation dimensions, depths, and 
                specifications specific to Miami-Dade County building codes and flood zone requirements. 
                Drawing review ensures excavation meets exact requirements for foundation type, building 
                loads, and Base Flood Elevation (BFE) compliance where applicable.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Precision Excavation</h3>
              <p className={styles.serviceDescription}>
                Excavation to exact depths and dimensions specified in engineering drawings, meeting 
                Florida Building Code minimum footing depth requirements (12 inches below finished grade 
                minimum). Precision excavation ensures foundations are properly sized and positioned, with 
                careful attention to depth control and wall verticality, accounting for Miami-Dade&apos;s 
                high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Soil Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of foundation soils to proper grade and compaction, meeting Miami-Dade building 
                code requirements for foundation support. Soil preparation ensures stable foundation 
                support, with removal of unsuitable material and preparation of bearing surfaces, 
                especially important given Miami-Dade&apos;s sandy and limestone soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Dewatering Systems</h3>
              <p className={styles.serviceDescription}>
                Installation of dewatering systems when excavations encounter Miami-Dade&apos;s high water 
                table, requiring DERM Class V Permits for temporary dewatering. Dewatering prevents water 
                intrusion during excavation and foundation placement, ensuring dry working conditions, 
                especially important in areas like Miami Beach, Aventura, and coastal neighborhoods where 
                the water table is particularly high.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Foundation Inspection Preparation</h3>
              <p className={styles.serviceDescription}>
                Preparation of excavations for Miami-Dade RER building department inspections. 
                Excavations are prepared to exact specifications, with proper dimensions and soil conditions 
                ready for inspection before foundation placement. Plan review by Miami-Dade plans processing 
                staff ensures compliance with Florida Building Code standards and county-specific flood 
                mitigation requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Backfill and Compaction</h3>
              <p className={styles.serviceDescription}>
                Coordination of backfill operations after foundation placement, with proper compaction to 
                support foundation walls, meeting Miami-Dade building code requirements. Backfill ensures 
                proper support and drainage around foundations, especially important given Miami-Dade&apos;s 
                high water table and potential for water intrusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Foundation Excavation Considerations</h2>
            <p className={styles.text}>
              Foundation excavation in Miami-Dade County requires specialized knowledge of local 
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
                <strong>Flood Zone Requirements and Base Flood Elevation (BFE):</strong> Miami-Dade County 
                has implemented enhanced building standards requiring new structures in flood-designated 
                areas to be built at or above the Base Flood Elevation (BFE). Updated County Flood Criteria 
                Maps require that lands be filled and graded to match existing roads fronting the property. 
                Foundation excavations must account for flood zone regulations and foundation elevation 
                requirements, often requiring significant fill material to meet BFE.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Miami-Dade&apos;s high water table, which 
                can be within 2-3 feet of the surface in many areas, often requires dewatering systems for 
                foundation excavations. DERM Class V Permits are required for temporary dewatering to 
                ensure that sediment, turbidity, and contaminants are removed before discharge. Proper 
                dewatering prevents water intrusion and ensures stable excavation walls and dry foundation 
                placement, especially in areas like Miami Beach, Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>RER Building Permits and Plan Review:</strong> Foundation excavation requires building 
                permits from Miami-Dade RER (for unincorporated areas) or municipal building departments 
                (for incorporated areas). For structures exceeding 30 inches in height or 200 square feet, 
                detailed plans must be submitted to the Miami-Dade County building department. Plan review 
                by plans processing staff ensures compliance with Florida Building Code standards and 
                county-specific flood mitigation requirements.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including Miami Beach, 
                Key Biscayne, Bal Harbour, and Aventura have unique soil characteristics including sand, 
                limestone bedrock, and organic materials that affect foundation excavation and bearing 
                capacity. Soil conditions determine excavation methods and foundation design, requiring 
                specialized techniques for limestone bedrock removal when encountered.
              </li>
              <li>
                <strong>Limestone Bedrock:</strong> Miami-Dade&apos;s limestone bedrock may require 
                specialized excavation equipment and techniques. Bedrock conditions affect excavation depth 
                and may require rock removal or foundation design adjustments. When excavations encounter 
                limestone bedrock, we coordinate with engineers to determine the best approach, which may 
                include rock removal, foundation design changes, or foundation placement on bedrock.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep foundation excavations require proper shoring, 
                sloping, or benching to prevent cave-ins and ensure worker safety per OSHA requirements. 
                Miami-Dade&apos;s high water table and coastal soil conditions require specialized shoring 
                techniques to prevent excavation collapse and ensure worker safety.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Foundation Excavation Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate foundation and footing excavation throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
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
            <h2 className={styles.heading}>The Foundation Excavation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your foundation excavation is completed precisely and meets 
              all Miami-Dade County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Engineering Drawing Review:</strong> We review engineering drawings to understand 
                foundation dimensions, depths, and specifications specific to Miami-Dade County building 
                codes and flood zone requirements. Drawing review ensures excavation meets exact requirements 
                for foundation type, building loads, and Base Flood Elevation (BFE) compliance where applicable.
              </li>
              <li>
                <strong>Site Layout and Staking:</strong> Foundation locations are staked and marked 
                according to survey data and engineering drawings, accounting for flood zone requirements 
                and elevation adjustments. Layout ensures foundations are positioned correctly on the site 
                and meet Miami-Dade County requirements.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits including 
                Miami-Dade RER building permits (for unincorporated areas) or municipal building department 
                permits (for incorporated areas), DERM Class V Permits for dewatering if required, and 
                coordinate with building departments. For structures exceeding 30 inches in height or 200 
                square feet, detailed plans must be submitted for plan review.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, compactors, dewatering systems) and experience for 
                precision foundation excavation in Miami-Dade County, including expertise with high water 
                table conditions, coastal soils, and flood zone requirements.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set up 
                dewatering systems in compliance with DERM Class V Permit requirements, ensuring sediment, 
                turbidity, and contaminants are removed before discharge. This is especially important given 
                Miami-Dade&apos;s high water table.
              </li>
              <li>
                <strong>Precision Excavation:</strong> Contractors perform excavation to exact depths and 
                dimensions, meeting Florida Building Code minimum footing depth requirements (12 inches 
                below finished grade minimum), with careful attention to depth control and wall verticality. 
                Excavation prepares foundation areas for concrete placement, accounting for Miami-Dade&apos;s 
                high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Soil Preparation:</strong> Foundation soils are prepared to proper grade and 
                compaction, meeting Miami-Dade building code requirements for foundation support. Unsuitable 
                material is removed, and bearing surfaces are prepared for foundation support, especially 
                important given Miami-Dade&apos;s sandy and limestone soil conditions.
              </li>
              <li>
                <strong>Inspection and Foundation Placement:</strong> Excavations are inspected by Miami-Dade 
                RER or municipal building departments before foundation placement. After approval, foundations 
                are placed, and backfill operations begin with proper compaction to meet Miami-Dade building 
                code requirements.
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
                <h3 className={styles.faqQuestion}>How deep do foundations need to be in Miami-Dade County?</h3>
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
                <h3 className={styles.faqQuestion}>What permits are required for foundation excavation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation requires building permits from Miami-Dade RER (for unincorporated 
                  areas) or municipal building departments (for incorporated areas). For structures exceeding 
                  30 inches in height or 200 square feet, detailed plans must be submitted to the Miami-Dade 
                  County building department for plan review. DERM Class V Permits are required for temporary 
                  dewatering if excavations encounter water. We help identify and coordinate all required 
                  permits and inspections.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need dewatering for foundation excavation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Dewatering is often required in Miami-Dade County due to the high water table, which can 
                  be within 2-3 feet of the surface in many areas. If excavations encounter water, dewatering 
                  systems prevent water intrusion and ensure dry working conditions. DERM Class V Permits 
                  are required for temporary dewatering to ensure that sediment, turbidity, and contaminants 
                  are removed before discharge. This is especially important in areas like Miami Beach, 
                  Aventura, and coastal neighborhoods where the water table is particularly high. We coordinate 
                  dewatering when needed to ensure proper foundation excavation and placement.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does foundation excavation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Foundation excavation costs in Miami-Dade County vary based on foundation size, depth, 
                  soil conditions, dewatering requirements, and flood zone considerations. Typical residential 
                  foundations range from $25,000 to $75,000, while commercial foundations can range from 
                  $75,000 to $200,000+ depending on scope. Factors affecting cost include excavation depth, 
                  soil conditions, dewatering complexity, and flood zone elevation requirements. Projects 
                  requiring extensive dewatering or working in flood zones often cost more due to additional 
                  permit requirements and specialized techniques.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens if we hit limestone bedrock in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  If excavations encounter limestone bedrock in Miami-Dade County, specialized equipment 
                  may be needed for rock removal, or foundation design may need adjustment. Bedrock conditions 
                  are assessed during excavation, and we coordinate with engineers to determine the best 
                  approach, which may include rock removal, foundation design changes, or foundation placement 
                  on bedrock. Miami-Dade&apos;s limestone bedrock is common in coastal areas and may require 
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
              <a href="/service-areas/miami/excavation-earthwork/" className={styles.backLink}>
                ← Back to Miami Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Foundation Excavation?"
        description="Get a free quote for your foundation and footing excavation in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, high water table dewatering, building codes, and regulatory compliance to excavate your foundations to exact specifications."
        showPhone={true}
      />
    </main>
  )
}

