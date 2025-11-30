import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mass Excavation & Cut/Fill in Fort Lauderdale, FL | Broward County',
  description: 'Large-scale mass excavation and cut/fill operations in Broward County. Site balancing and earthmoving for commercial and residential developments.',
  openGraph: {
    title: 'Mass Excavation & Cut/Fill in Fort Lauderdale, FL | Broward County',
    description: 'Large-scale mass excavation and cut/fill operations for site balancing in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/excavation-earthwork/mass-excavation-cut-fill/`,
  },
}

export default function FortLauderdaleMassExcavationCutFillPage() {
  return (
    <main>
      <HeroWithQuote
        title="Mass Excavation and Cut/Fill in Fort Lauderdale, FL"
        subtitle="Large-scale excavation and earthmoving for commercial and residential developments across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Mass excavation and cut/fill operations in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Mass excavation and cut/fill services in Broward County are essential for developers, 
              general contractors, subdivision developers, and anyone preparing large sites that require 
              significant earthmoving to achieve proper elevations throughout Broward County, including 
              Fort Lauderdale, Weston, Plantation, Pembroke Pines, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Weston, commercial complex in Plantation, 
              or preparing a large site for construction in Pembroke Pines, mass excavation and cut/fill 
              operations balance site elevations efficiently. We coordinate licensed contractors with heavy 
              equipment to handle large-scale earthmoving projects, navigating Broward County Development 
              & Environmental Review (DER), Natural Resource Protection Code compliance, SFWMD Environmental 
              Resource Permits, and development permits (Florida Statute 380.04) with specialized knowledge 
              of high water table conditions and regulatory restrictions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Mass excavation and cut/fill projects in Broward County typically range from 
                <strong> $50,000 to $200,000</strong> for smaller developments, and 
                <strong> $200,000 to $1,000,000+</strong> for large-scale commercial or subdivision 
                projects depending on earthwork volume, site conditions, dewatering requirements, and 
                required balancing operations. Projects requiring extensive dewatering, working in flood 
                zones, or involving wetlands often cost more due to additional permit requirements and 
                specialized techniques. Projects involving development work as described in Florida Statute 
                380.04 require a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Mass Excavation and Cut/Fill Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Survey and Volume Calculations</h3>
              <p className={styles.serviceDescription}>
                Survey and calculation of cut and fill volumes to determine earthwork requirements 
                specific to Broward County conditions. Volume calculations identify areas that need 
                excavation (cut) and areas that need fill material to achieve proper site elevations, 
                accounting for flood zone requirements, storm event protection (100-year, 3-day storm 
                event for structures), and high water table considerations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cut Operations</h3>
              <p className={styles.serviceDescription}>
                Excavation of material from higher elevations to lower elevations, with proper dewatering 
                systems where required due to Broward County&apos;s high water table. Cut operations remove 
                excess material from areas that are too high, preparing material for use as fill in lower 
                areas or for export off-site, in compliance with SFWMD Environmental Resource Permit 
                requirements and Natural Resource Protection Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Operations</h3>
              <p className={styles.serviceDescription}>
                Placement of fill material in low-lying areas to achieve proper elevations, with proper 
                compaction for stability. Fill operations use material from cut areas or imported fill to 
                raise low areas to required elevations, meeting Base Flood Elevation (BFE) requirements 
                and storm event protection (100-year, 3-day storm event for structures) for properties 
                in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Balancing</h3>
              <p className={styles.serviceDescription}>
                Coordinated cut and fill operations to balance site elevations while minimizing import and 
                export of material. Site balancing maximizes use of on-site material, reducing costs and 
                environmental impact, while meeting Broward County stormwater management and drainage 
                requirements, including Natural Resource Protection Code compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Material Handling</h3>
              <p className={styles.serviceDescription}>
                Coordination of material movement, stockpiling, and placement in compliance with Broward 
                County requirements. Material handling ensures cut material is efficiently moved to fill 
                areas or prepared for export, with proper sequencing to minimize double-handling and 
                environmental impact, meeting SFWMD Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Compaction and Final Grading</h3>
              <p className={styles.serviceDescription}>
                Proper compaction of fill material and final grading to achieve exact elevations per 
                engineering specifications. Compaction ensures fill stability, especially important given 
                Broward County&apos;s high water table, while final grading creates precise elevations specified 
                in engineering drawings. Final as-built surveys prepared by Florida-licensed surveyors or 
                professional engineers are required upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Mass Excavation Considerations</h2>
            <p className={styles.text}>
              Mass excavation and cut/fill operations in Broward County require specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits (Florida Statute 380.04):</strong> Projects involving 
                development work as described in Florida Statute 380.04 require a development permit prior 
                to the issuance of a building permit. This is a critical prerequisite for mass excavation 
                projects in Broward County.
              </li>
              <li>
                <strong>Fill, Excavation and Site Grading Permits:</strong> Broward County requires Fill, 
                Excavation and Site Grading Permits for development projects involving excavation or 
                substantial fill work. The permitting process operates on three levels (Level 1, Level 2, 
                Level 3), each with different complexity and review requirements, with permit fees ranging 
                from $75 to $150 depending on project scope and environmental impact.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> All DER submittals are only 
                accepted electronically through ePermits OneStop. Broward County&apos;s Planning and Development 
                Management Division ensures that proposed developments comply with the Broward County Land 
                Development Code and Natural Resource Protection Code. Environmental Resource Assessment is 
                essential to determine whether protected environmental components exist on the site.
              </li>
              <li>
                <strong>Wetland Delineation:</strong> The first critical step is obtaining a Wetland 
                Delineation through Broward County&apos;s environmental review approval process. This assessment 
                identifies any wetland habitat, submerged aquatic vegetation (SAV), or protected habitat 
                within or adjacent to the project area. Wetland survey requirements should be completed 
                before topographic surveys.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Broward County&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, affects excavation depth and 
                requires dewatering systems for deep excavations. SFWMD Environmental Resource Permits are 
                required for dewatering activities affecting state waters. The applicant must have all 
                applicable SFWMD permits before proceeding with dewatering operations. Cut operations may 
                encounter water, requiring proper dewatering and water management, especially in areas like 
                Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Elevation requirements for structures 
                are strict: the first floor elevations of all structures within drainage districts must 
                protect structures from a 100-year, 3-day storm event, while roadway and parking lot 
                elevations must be protected from a 10-year, 3-day storm event. These requirements affect 
                cut and fill operations and elevation adjustments.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Cut and fill operations in flood zones must comply 
                with FEMA requirements. Fill placement may be restricted, and elevations must meet flood 
                zone regulations, including Base Flood Elevation (BFE) requirements. Properties in flood 
                zones often require significant fill material to meet elevation requirements and storm event 
                protection.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Large-scale mass excavation may require 
                SFWMD Environmental Resource Permits for land disturbance, especially near wetlands or surface 
                waters. As of June 28, 2024, new water quality performance standards were implemented. Permits 
                may restrict cut and fill operations in sensitive areas. We coordinate all required SFWMD 
                permits.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Mass excavation projects must comply with these requirements.
              </li>
              <li>
                <strong>Drainage District Requirements:</strong> For projects in areas governed by drainage 
                districts (Central Broward Water Control District for areas east of Volunteer Road or South 
                Broward Drainage District for areas west), Paving & Drainage (P&D) Permits are required. 
                Level 2 and Level 3 fill permits involve drainage district review.
              </li>
              <li>
                <strong>Final As-Built Surveys:</strong> Projects must submit final as-built surveys 
                prepared by Florida-licensed surveyors or professional engineers upon completion, showing 
                final elevations, cut and fill volumes, and compliance with engineering specifications and 
                permit conditions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Mass Excavation Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate mass excavation and cut/fill operations throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
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
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale Lakes</li>
                  <li>Oakland Park</li>
                  <li>Wilton Manors</li>
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
            <h2 className={styles.heading}>The Mass Excavation and Cut/Fill Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your mass excavation and cut/fill project is completed 
              efficiently and meets all Broward County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review engineering drawings, survey data, and site 
                conditions to understand cut and fill requirements specific to Broward County. Volume 
                calculations determine earthwork scope and identify opportunities for site balancing, 
                including flood zone analysis, water table assessment, and wetland identification. Wetland 
                delineation is completed before topographic surveys.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for mass excavation projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed excavation projects comply 
                with the Broward County Land Development Code and Natural Resource Protection Code. All 
                DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Fill, Excavation and Site Grading Permit Coordination:</strong> We help identify 
                required Fill, Excavation and Site Grading Permits (Level 1, Level 2, or Level 3 depending 
                on project scope), SFWMD Environmental Resource Permits for activities affecting state 
                waters and wetlands, drainage district approvals (CBWCD or SBDD) where applicable, and 
                coordinate with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, bulldozers, scrapers, haul trucks, dewatering systems) 
                and experience for large-scale earthmoving in Broward County, including expertise with high 
                water table conditions, coastal soils, flood zone requirements, and storm event protection.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set up 
                dewatering systems in compliance with SFWMD Environmental Resource Permit requirements 
                for activities affecting state waters, ensuring proper water quality management and discharge 
                compliance. The applicant must have all applicable SFWMD permits before proceeding with 
                dewatering operations.
              </li>
              <li>
                <strong>Cut Operations:</strong> Contractors perform excavation from high areas, removing 
                material for use as fill or export, in compliance with Broward County requirements. Cut 
                operations establish general site grades and prepare material for placement, ensuring 
                compliance with storm event protection requirements and environmental regulations.
              </li>
              <li>
                <strong>Fill Operations:</strong> Fill material is placed in low areas with proper compaction 
                to achieve required elevations, meeting Base Flood Elevation (BFE) requirements and storm 
                event protection (100-year, 3-day storm event for structures) for properties in flood 
                zones. Fill operations use material from cut areas or imported fill, with proper sequencing 
                for efficiency and environmental compliance.
              </li>
              <li>
                <strong>Site Balancing:</strong> Coordinated cut and fill operations balance site elevations 
                while minimizing material import and export, meeting Broward County stormwater management 
                requirements and Natural Resource Protection Code compliance. Site balancing maximizes use 
                of on-site material while ensuring proper drainage and compliance with regulatory requirements.
              </li>
              <li>
                <strong>Final Grading and As-Built Survey:</strong> Final grading operations achieve exact 
                elevations specified in engineering drawings, meeting storm event protection requirements. 
                Final as-built surveys prepared by Florida-licensed surveyors or professional engineers are 
                submitted upon completion, showing final elevations, cut and fill volumes, and compliance 
                with all permit conditions.
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
                <h3 className={styles.faqQuestion}>What permits are required for mass excavation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation projects in Broward County require development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Fill, Excavation and Site Grading 
                  Permits (Level 1, Level 2, or Level 3 depending on project scope), Development & 
                  Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                  Permits for activities affecting state waters and wetlands, Natural Resource Protection 
                  Code compliance, drainage district approvals (CBWCD or SBDD) where applicable, and FEMA 
                  compliance permits for properties in flood zones. All DER submittals are only accepted 
                  electronically. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the different levels of Fill, Excavation and Site Grading Permits in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s Fill, Excavation and Site Grading Permits operate on three levels. 
                  Level 1 involves no permit fee but has a $75 penalty if violations occur, applies to 
                  minimal filling activities, and requires Broward County Development and Environmental 
                  Regulation Division approval. Level 2 requires a $75 permit fee with a $150 penalty and 
                  involves both Broward County and the applicable drainage authority review. Level 3 requires 
                  a $150 permit fee with a $300 per day penalty and involves comprehensive review by Broward 
                  County, the applicable drainage authority, and town engineering for projects with 
                  significant environmental or drainage impacts.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires dewatering systems for deep excavations. SFWMD Environmental Resource 
                  Permits are required for dewatering activities affecting state waters. The applicant must 
                  have all applicable SFWMD permits before proceeding with dewatering operations. Cut 
                  operations may encounter water, requiring proper dewatering and water management, especially 
                  in areas like Fort Lauderdale, Hollywood, and coastal neighborhoods. This adds complexity 
                  and cost to mass excavation projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill in mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding earth to 
                  lower elevations. Cut and fill operations balance site elevations by moving earth from high 
                  areas to low areas. Site balancing maximizes use of on-site material, minimizing the need 
                  to import or export material. In Broward County, cut and fill operations must account for 
                  high water table conditions, flood zone requirements, storm event protection (100-year, 
                  3-day storm event for structures), and may require SFWMD Environmental Resource Permits 
                  and Natural Resource Protection Code compliance for significant land disturbance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs in Broward County vary significantly based on volume, soil conditions, 
                  dewatering requirements, and site access. Typical costs range from $5-15 per cubic yard for 
                  simple excavation to $20-40+ per cubic yard for complex projects with dewatering, difficult 
                  access, flood zone considerations, or special handling requirements. Projects requiring 
                  extensive dewatering or working in wetlands often cost more due to additional permit 
                  requirements (SFWMD Environmental Resource Permits) and specialized techniques. Broward 
                  County permit processing, including DER review through ePermits OneStop, can add time and 
                  costs. Large projects may have volume discounts.
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
              <a href="/services/excavation-earthwork/mass-excavation-cut-fill/" className={styles.backLink}>
                ← View Mass Excavation and Cut/Fill (All Areas)
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
        title="Ready to Start Your Fort Lauderdale Mass Excavation Project?"
        description="Get a free quote for your mass excavation or cut/fill project in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, high water table dewatering, SFWMD Environmental Resource Permits, Natural Resource Protection Code compliance, DER requirements, and regulatory compliance to balance your site elevations efficiently."
        showPhone={true}
      />
    </main>
  )
}

