import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mass Excavation & Cut/Fill in West Palm Beach, FL | Palm Beach County',
  description: 'Large-scale mass excavation and cut/fill operations in Palm Beach County. Site balancing and earthmoving for commercial and residential developments.',
  openGraph: {
    title: 'Mass Excavation & Cut/Fill in West Palm Beach, FL | Palm Beach County',
    description: 'Large-scale mass excavation and cut/fill operations for site balancing in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/excavation-earthwork/mass-excavation-cut-fill/`,
  },
}

export default function WestPalmBeachMassExcavationCutFillPage() {
  return (
    <main>
      <HeroWithQuote
        title="Mass Excavation and Cut/Fill in West Palm Beach, FL"
        subtitle="Large-scale excavation and earthmoving for commercial and residential developments across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Mass excavation and cut/fill operations in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Mass excavation and cut/fill services in Palm Beach County are essential for developers, 
              general contractors, subdivision developers, and anyone preparing large sites that require 
              significant earthmoving to achieve proper elevations throughout Palm Beach County, including 
              West Palm Beach, Palm Beach, Jupiter, Wellington, Royal Palm Beach, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Wellington, commercial complex in Royal Palm 
              Beach, or preparing a large site for construction in Palm Beach, mass excavation and cut/fill 
              operations balance site elevations efficiently. We coordinate licensed contractors with heavy 
              equipment to handle large-scale earthmoving projects, navigating Palm Beach County Building 
              Division, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) 
              compliance, SFWMD Environmental Resource Permits, and development permits (Florida Statute 380.04) 
              with specialized knowledge of high water table conditions and regulatory restrictions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Mass excavation and cut/fill projects in Palm Beach County typically range from 
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
          <h2 className={styles.heading}>What Mass Excavation and Cut/Fill Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Survey and Volume Calculations</h3>
              <p className={styles.serviceDescription}>
                Survey and calculation of cut and fill volumes to determine earthwork requirements 
                specific to Palm Beach County conditions. Volume calculations identify areas that need 
                excavation (cut) and areas that need fill material to achieve proper site elevations, 
                accounting for flood zone requirements and high water table considerations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cut Operations</h3>
              <p className={styles.serviceDescription}>
                Excavation of material from higher elevations to lower elevations, with proper dewatering 
                systems where required due to Palm Beach County&apos;s high water table. Cut operations remove 
                excess material from areas that are too high, preparing material for use as fill in lower 
                areas or for export off-site, in compliance with SFWMD Environmental Resource Permit 
                requirements and Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Operations</h3>
              <p className={styles.serviceDescription}>
                Placement of fill material in low-lying areas to achieve proper elevations, with proper 
                compaction for stability. Fill operations use material from cut areas or imported fill to 
                raise low areas to required elevations, meeting Base Flood Elevation (BFE) requirements 
                for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Balancing</h3>
              <p className={styles.serviceDescription}>
                Coordinated cut and fill operations to balance site elevations while minimizing import and 
                export of material. Site balancing maximizes use of on-site material, reducing costs and 
                environmental impact, while meeting Palm Beach County stormwater management and drainage 
                requirements, including Unified Land Development Code (ULDC) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Material Handling</h3>
              <p className={styles.serviceDescription}>
                Coordination of material movement, stockpiling, and placement in compliance with Palm Beach 
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
                Palm Beach County&apos;s high water table, while final grading creates precise elevations specified 
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
            <h2 className={styles.heading}>Palm Beach County Mass Excavation Considerations</h2>
            <p className={styles.text}>
              Mass excavation and cut/fill operations in Palm Beach County require specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for mass excavation projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Mass excavation requires Building Division permits 
                from Palm Beach County Building Division. Building permits must be obtained before beginning 
                construction, and the Building Division reviews plans to ensure compliance with the Florida 
                Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Mass excavation projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements. Environmental 
                Resource Assessment is essential to determine whether protected environmental components exist 
                on the site.
              </li>
              <li>
                <strong>Wetland Delineation:</strong> The first critical step is obtaining a Wetland 
                Delineation through Palm Beach County&apos;s environmental review approval process. This assessment 
                identifies any wetland habitat, submerged aquatic vegetation (SAV), or protected habitat 
                within or adjacent to the project area. Wetland survey requirements should be completed 
                before topographic surveys.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Palm Beach County&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, affects excavation depth and 
                requires dewatering systems for deep excavations. SFWMD Environmental Resource Permits are 
                required for dewatering activities affecting state waters. The applicant must have all 
                applicable SFWMD permits before proceeding with dewatering operations. Cut operations may 
                encounter water, requiring proper dewatering and water management, especially in areas like 
                Palm Beach, Jupiter, and coastal neighborhoods.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Cut and fill operations in flood zones must comply 
                with FEMA requirements. Fill placement may be restricted, and elevations must meet flood 
                zone regulations, including Base Flood Elevation (BFE) requirements. Properties in flood 
                zones often require significant fill material to meet elevation requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Large-scale mass excavation may require 
                SFWMD Environmental Resource Permits for land disturbance, especially near wetlands or surface 
                waters. As of June 28, 2024, new water quality performance standards were implemented. Permits 
                may restrict cut and fill operations in sensitive areas. We coordinate all required SFWMD 
                permits.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Mass excavation projects must comply with these requirements.
              </li>
              <li>
                <strong>Soil Analysis and Compaction Requirements:</strong> Palm Beach County requires proper 
                soil analysis and compaction testing for fill operations. Fill material must meet specified 
                quality requirements and be properly compacted to support intended uses, accounting for Palm 
                Beach County&apos;s unique soil characteristics including limestone bedrock and sandy soils.
              </li>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County requires tree protection 
                for development activities, particularly important in established neighborhoods. Protected 
                trees must be identified and preserved according to county standards, with Environmental 
                Resources Management (ERM) review required for tree removal in environmentally sensitive areas.
              </li>
              <li>
                <strong>Final As-Built Surveys:</strong> Projects must submit final as-built surveys 
                prepared by Florida-licensed surveyors or professional engineers upon completion, showing 
                final elevations, cut and fill volumes, and compliance with engineering specifications and 
                permit conditions.
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
            <h2 className={styles.heading}>Palm Beach County Mass Excavation Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate mass excavation and cut/fill operations throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Northwood</li>
                  <li>Jupiter</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Boynton Beach</li>
                  <li>Lake Worth</li>
                  <li>Lantana</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Mass Excavation and Cut/Fill Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your mass excavation and cut/fill project is completed 
              efficiently and meets all Palm Beach County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review engineering drawings, survey data, and site 
                conditions to understand cut and fill requirements specific to Palm Beach County. Volume 
                calculations determine earthwork scope and identify opportunities for site balancing, 
                including flood zone analysis, water table assessment, and wetland identification. Wetland 
                delineation is completed before topographic surveys.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for mass excavation projects in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental 
                Resources Management (ERM) review and coordinate with Palm Beach County ERM to ensure 
                proposed excavation projects comply with the Unified Land Development Code (ULDC) and 
                environmental protection requirements.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, SFWMD Environmental Resource Permits for activities 
                affecting state waters and wetlands, Unified Land Development Code (ULDC) compliance, and 
                coordinate with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, bulldozers, scrapers, haul trucks, dewatering systems) 
                and experience for large-scale earthmoving in Palm Beach County, including expertise with high 
                water table conditions, coastal soils, flood zone requirements, and tree protection.
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
                material for use as fill or export, in compliance with Palm Beach County requirements. Cut 
                operations establish general site grades and prepare material for placement, ensuring 
                compliance with environmental regulations.
              </li>
              <li>
                <strong>Fill Operations:</strong> Fill material is placed in low areas with proper compaction 
                to achieve required elevations, meeting Base Flood Elevation (BFE) requirements for properties 
                in flood zones. Fill operations use material from cut areas or imported fill, with proper 
                sequencing for efficiency and environmental compliance.
              </li>
              <li>
                <strong>Site Balancing:</strong> Coordinated cut and fill operations balance site elevations 
                while minimizing material import and export, meeting Palm Beach County stormwater management 
                requirements and Unified Land Development Code (ULDC) compliance. Site balancing maximizes use 
                of on-site material while ensuring proper drainage and compliance with regulatory requirements.
              </li>
              <li>
                <strong>Final Grading and As-Built Survey:</strong> Final grading operations achieve exact 
                elevations specified in engineering drawings. Final as-built surveys prepared by Florida-licensed 
                surveyors or professional engineers are submitted upon completion, showing final elevations, 
                cut and fill volumes, and compliance with all permit conditions.
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
                <h3 className={styles.faqQuestion}>What permits are required for mass excavation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation projects in Palm Beach County require development permits (Florida Statute 
                  380.04) obtained prior to building permit issuance, Building Division permits from Palm Beach 
                  County Building Division, Environmental Resources Management (ERM) review for projects 
                  affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                  Permits for activities affecting state waters and wetlands, Unified Land Development Code 
                  (ULDC) compliance, and FEMA compliance permits for properties in flood zones. We help 
                  identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires dewatering systems for deep excavations. SFWMD Environmental Resource 
                  Permits are required for dewatering activities affecting state waters. The applicant must 
                  have all applicable SFWMD permits before proceeding with dewatering operations. Cut 
                  operations may encounter water, requiring proper dewatering and water management, especially 
                  in areas like Palm Beach, Jupiter, and coastal neighborhoods. This adds complexity 
                  and cost to mass excavation projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill in mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding earth to 
                  lower elevations. Cut and fill operations balance site elevations by moving earth from high 
                  areas to low areas. Site balancing maximizes use of on-site material, minimizing the need 
                  to import or export material. In Palm Beach County, cut and fill operations must account for 
                  high water table conditions, flood zone requirements, and may require SFWMD Environmental Resource Permits 
                  and Unified Land Development Code (ULDC) compliance for significant land disturbance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs in Palm Beach County vary significantly based on volume, soil conditions, 
                  dewatering requirements, and site access. Typical costs range from $5-15 per cubic yard for 
                  simple excavation to $20-40+ per cubic yard for complex projects with dewatering, difficult 
                  access, flood zone considerations, or special handling requirements. Projects requiring 
                  extensive dewatering or working in wetlands often cost more due to additional permit 
                  requirements (SFWMD Environmental Resource Permits) and specialized techniques. Palm Beach 
                  County permit processing, including ERM review, can add time and costs. Large projects may 
                  have volume discounts.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about wetland delineation for mass excavation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Wetland delineation is the first critical step in Palm Beach County&apos;s environmental review 
                  approval process. This assessment identifies any wetland habitat, submerged aquatic vegetation 
                  (SAV), or protected habitat within or adjacent to the project area. Wetland survey 
                  requirements should be completed before topographic surveys. Environmental Resources 
                  Management (ERM) review ensures that proposed projects comply with the Unified Land Development 
                  Code (ULDC) and environmental protection requirements. We coordinate wetland delineation and 
                  ERM review for all mass excavation projects.
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
              <a href="/service-areas/west-palm-beach/excavation-earthwork/" className={styles.backLink}>
                ← Back to West Palm Beach Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Mass Excavation Project?"
        description="Get a free quote for your mass excavation or cut/fill project in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, high water table dewatering, SFWMD Environmental Resource Permits, Unified Land Development Code (ULDC) compliance, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to balance your site elevations efficiently."
        showPhone={true}
      />
    </main>
  )
}

