import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mass Excavation & Cut/Fill in Miami, FL | Miami-Dade County',
  description: 'Large-scale mass excavation and cut/fill operations in Miami-Dade County. Site balancing and earthmoving for commercial and residential developments.',
  openGraph: {
    title: 'Mass Excavation & Cut/Fill in Miami, FL | Miami-Dade County',
    description: 'Large-scale mass excavation and cut/fill operations for site balancing in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/excavation-earthwork/mass-excavation-cut-fill/`,
  },
}

export default function MiamiMassExcavationCutFillPage() {
  return (
    <main>
      <HeroWithQuote
        title="Mass Excavation and Cut/Fill in Miami, FL"
        subtitle="Large-scale excavation and earthmoving for commercial and residential developments across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Mass excavation and cut/fill operations in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Mass excavation and cut/fill services in Miami-Dade County are essential for developers, 
              general contractors, subdivision developers, and anyone preparing large sites that require 
              significant earthmoving to achieve proper elevations in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Doral, commercial complex in Aventura, 
              or preparing a large site for construction in Coral Gables, mass excavation and cut/fill 
              operations balance site elevations efficiently. We coordinate licensed contractors with heavy 
              equipment to handle large-scale earthmoving projects, navigating Miami-Dade DERM, RER, and 
              SFWMD requirements with specialized knowledge of high water table conditions and regulatory 
              restrictions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Mass excavation and cut/fill projects in Miami-Dade County typically range from 
                <strong> $50,000 to $200,000</strong> for smaller developments, and 
                <strong> $200,000 to $1,000,000+</strong> for large-scale commercial or subdivision 
                projects depending on earthwork volume, site conditions, dewatering requirements, and 
                required balancing operations. Projects requiring extensive dewatering, working in flood 
                zones, or involving freshwater wetlands often cost more due to additional permit 
                requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Mass Excavation and Cut/Fill Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Survey and Volume Calculations</h3>
              <p className={styles.serviceDescription}>
                Survey and calculation of cut and fill volumes to determine earthwork requirements 
                specific to Miami-Dade County conditions. Volume calculations identify areas that need 
                excavation (cut) and areas that need fill material to achieve proper site elevations, 
                accounting for flood zone requirements and high water table considerations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cut Operations</h3>
              <p className={styles.serviceDescription}>
                Excavation of material from higher elevations to lower elevations, with proper dewatering 
                systems where required due to Miami-Dade&apos;s high water table. Cut operations remove 
                excess material from areas that are too high, preparing material for use as fill in lower 
                areas or for export off-site, in compliance with DERM Source Removal/Soil Management Plans.
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
                environmental impact, while meeting Miami-Dade County stormwater management and drainage 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Material Handling</h3>
              <p className={styles.serviceDescription}>
                Coordination of material movement, stockpiling, and placement in compliance with Miami-Dade 
                County operational restrictions (7:00 a.m. to 5:00 p.m. on weekdays). Material handling 
                ensures cut material is efficiently moved to fill areas or prepared for export, with proper 
                sequencing to minimize double-handling and environmental impact.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Compaction and Final Grading</h3>
              <p className={styles.serviceDescription}>
                Proper compaction of fill material and final grading to achieve exact elevations per 
                engineering specifications. Compaction ensures fill stability, especially important given 
                Miami-Dade&apos;s high water table, while final grading creates precise elevations specified 
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
            <h2 className={styles.heading}>Miami-Dade County Mass Excavation Considerations</h2>
            <p className={styles.text}>
              Mass excavation and cut/fill operations in Miami-Dade County require specialized knowledge 
              of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DERM Permitting and Source Removal Plans:</strong> Large-scale earthmoving 
                operations in Miami-Dade County must comply with DERM letters and Source Removal/Soil 
                Management Plans to ensure environmental protection. DERM letter guidance dated May 15, 
                2025, specifically addresses compliance requirements for excavation and soil management 
                operations. Projects requiring Miami-Dade Review under Chapter 24 must obtain DERM Plan 
                Review Approval prior to issuance of a building permit.
              </li>
              <li>
                <strong>High Water Table and Dewatering:</strong> Miami-Dade&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, affects excavation depth and 
                requires dewatering systems for deep excavations. DERM Class V Permits are required for 
                temporary dewatering to ensure that sediment, turbidity, and contaminants are removed 
                before discharge. Cut operations may encounter water, requiring proper dewatering and 
                water management, especially in areas like Miami Beach, Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>Salt Barrier Line and Depth Restrictions:</strong> Excavation depths in Miami-Dade 
                County are constrained by the salt barrier line and aquiclude penetration limits. Lake 
                excavations cannot penetrate the aquiclude as determined by the Director of Environmental 
                Resources Management, and minimum excavation depths must be at least 10 feet below mean 
                low water elevation. The maximum depth is limited to depths that would contain water with 
                250 ppm chlorides as projected to the year 2000.
              </li>
              <li>
                <strong>Public Hearing Requirements:</strong> Excavations below street level in Miami-Dade 
                County require public hearing approval, with specific exceptions for certain project types. 
                Lake excavations west of the salt barrier line are allowed without a public hearing in areas 
                within the developable boundaries of the adopted metropolitan development pattern map, 
                whereas lake excavations east of the salt barrier line require public hearings.
              </li>
              <li>
                <strong>Operational Restrictions:</strong> Large-scale earthmoving projects must implement 
                strict operational controls, including restricted operating hours of 7:00 a.m. to 5:00 p.m. 
                on weekdays, with weekend and extended-hour operations permitted only if the Director 
                determines they do not become objectionable to surrounding areas.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Cut and fill operations in flood zones must comply 
                with FEMA requirements. Fill placement may be restricted, and elevations must meet flood 
                zone regulations, including Base Flood Elevation (BFE) requirements. Properties in flood 
                zones often require significant fill material to meet elevation requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Permits:</strong> Large-scale mass excavation may require SFWMD 
                environmental resource permits for land disturbance, especially near wetlands or surface 
                waters. Permits may restrict cut and fill operations in sensitive areas. We coordinate all 
                required SFWMD permits.
              </li>
              <li>
                <strong>Final As-Built Surveys:</strong> Projects must submit final as-built surveys 
                prepared by Florida-licensed surveyors or professional engineers upon completion, showing 
                final elevations, cut and fill volumes, and compliance with engineering specifications.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Mass Excavation Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate mass excavation and cut/fill operations throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Westchester</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Subdivision Development</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Cutler Bay</li>
                  <li>Palmetto Bay</li>
                  <li>Pinecrest</li>
                  <li>South Miami</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Residential Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Coral Gables</li>
                  <li>Aventura</li>
                  <li>Coconut Grove</li>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Hialeah</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Miami Lakes</li>
                  <li>Sweetwater</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Mass Excavation and Cut/Fill Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your mass excavation and cut/fill project is completed 
              efficiently and meets all Miami-Dade County specifications and regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We review engineering drawings, survey data, and site 
                conditions to understand cut and fill requirements specific to Miami-Dade County. Volume 
                calculations determine earthwork scope and identify opportunities for site balancing, 
                including flood zone analysis, water table assessment, and salt barrier line considerations.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits including 
                Miami-Dade RER building permits, DERM Plan Review Approval (for projects requiring Miami-Dade 
                Review under Chapter 24), DERM Class V Permits for dewatering, DERM Source Removal/Soil 
                Management Plans, SFWMD environmental resource permits, and coordinate with regulatory agencies. 
                Public hearing approval may be required for excavations below street level or lake excavations 
                east of the salt barrier line.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment (excavators, bulldozers, scrapers, haul trucks, dewatering systems) 
                and experience for large-scale earthmoving in Miami-Dade County, including expertise with high 
                water table conditions, coastal soils, and regulatory compliance.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set up 
                dewatering systems in compliance with DERM Class V Permit requirements, ensuring sediment, 
                turbidity, and contaminants are removed before discharge. This is especially important given 
                Miami-Dade&apos;s high water table.
              </li>
              <li>
                <strong>Cut Operations:</strong> Contractors perform excavation from high areas, removing 
                material for use as fill or export, in compliance with operational restrictions (7:00 a.m. 
                to 5:00 p.m. on weekdays). Cut operations establish general site grades and prepare material 
                for placement, ensuring compliance with salt barrier line and aquiclude penetration limits.
              </li>
              <li>
                <strong>Fill Operations:</strong> Fill material is placed in low areas with proper compaction 
                to achieve required elevations, meeting Base Flood Elevation (BFE) requirements for properties 
                in flood zones. Fill operations use material from cut areas or imported fill, with proper 
                sequencing for efficiency and environmental compliance.
              </li>
              <li>
                <strong>Site Balancing:</strong> Coordinated cut and fill operations balance site elevations 
                while minimizing material import and export, meeting Miami-Dade County stormwater management 
                requirements. Site balancing maximizes use of on-site material while ensuring proper drainage 
                and compliance with regulatory requirements.
              </li>
              <li>
                <strong>Final Grading and As-Built Survey:</strong> Final grading operations achieve exact 
                elevations specified in engineering drawings. Final as-built surveys prepared by 
                Florida-licensed surveyors or professional engineers are submitted upon completion, showing 
                final elevations, cut and fill volumes, and compliance with all permit conditions.
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
                <h3 className={styles.faqQuestion}>What permits are required for mass excavation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation projects in Miami-Dade County require building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas). 
                  Projects requiring Miami-Dade Review under Chapter 24 must obtain DERM Plan Review Approval. 
                  DERM Class V Permits are required for dewatering. Large-scale operations may require SFWMD 
                  environmental resource permits. Excavations below street level or lake excavations east of 
                  the salt barrier line may require public hearing approval. We help identify and coordinate 
                  all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the operational restrictions for mass excavation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Large-scale earthmoving projects in Miami-Dade County must implement strict operational 
                  controls, including restricted operating hours of 7:00 a.m. to 5:00 p.m. on weekdays. 
                  Weekend and extended-hour operations are permitted only if the Director determines they do 
                  not become objectionable to surrounding areas. These restrictions help minimize noise and 
                  environmental impact on neighboring properties.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires dewatering systems for deep excavations. DERM Class V Permits are required 
                  for temporary dewatering to ensure that sediment, turbidity, and contaminants are removed 
                  before discharge. Cut operations may encounter water, requiring proper dewatering and water 
                  management, especially in areas like Miami Beach, Aventura, and coastal neighborhoods. 
                  This adds complexity and cost to mass excavation projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill in mass excavation?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding earth to 
                  lower elevations. Cut and fill operations balance site elevations by moving earth from high 
                  areas to low areas. Site balancing maximizes use of on-site material, minimizing the need 
                  to import or export material. In Miami-Dade County, cut and fill operations must account for 
                  high water table conditions, flood zone requirements, and may require DERM and SFWMD permits 
                  for significant land disturbance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs in Miami-Dade County vary significantly based on volume, soil conditions, 
                  dewatering requirements, and site access. Typical costs range from $5-15 per cubic yard for 
                  simple excavation to $20-40+ per cubic yard for complex projects with dewatering, difficult 
                  access, flood zone considerations, or special handling requirements. Projects requiring extensive 
                  dewatering, working in flood zones, or involving freshwater wetlands often cost more due to 
                  additional permit requirements and specialized techniques. Large projects may have volume discounts.
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
              <a href="/service-areas/miami/excavation-earthwork/" className={styles.backLink}>
                ← Back to Miami Excavation Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Mass Excavation Project?"
        description="Get a free quote for your mass excavation or cut/fill project in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, high water table dewatering, DERM requirements, and regulatory compliance to balance your site elevations efficiently."
        showPhone={true}
      />
    </main>
  )
}

