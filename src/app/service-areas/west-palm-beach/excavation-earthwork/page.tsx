import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Excavation & Earthwork in West Palm Beach, FL | Palm Beach County',
  description: 'Professional excavation and earthwork services in Palm Beach County. Mass excavation, cut and fill, utility trenches, retention ponds, and fill import/export.',
  openGraph: {
    title: 'Excavation & Earthwork in West Palm Beach, FL | Palm Beach County',
    description: 'Professional excavation and earthwork services in Palm Beach County. Mass excavation, cut and fill, utility trenches.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/excavation-earthwork/`,
  },
}

export default function WestPalmBeachExcavationEarthworkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Excavation and Earthwork in West Palm Beach, FL"
        subtitle="Mass excavation, cut and fill operations, utility trenching, and earthmoving services across Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Excavation and earthwork services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our excavation and earthwork services in Palm Beach County serve general contractors, 
              developers, custom home builders, commercial property owners, and infrastructure projects 
              that require significant earthmoving and excavation work throughout Palm Beach County, including 
              West Palm Beach, Palm Beach, Jupiter, Wellington, Royal Palm Beach, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you need mass excavation for a large development in Wellington, utility trenching for 
              infrastructure in Royal Palm Beach, or cut and fill operations to balance site elevations in 
              Palm Beach, we coordinate licensed contractors with the right equipment and expertise for 
              your project scope, navigating Palm Beach County Building Division, Environmental Resources 
              Management (ERM) review, Unified Land Development Code (ULDC) compliance, and SFWMD 
              Environmental Resource Permits with specialized knowledge of high water table conditions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Excavation and earthwork projects in Palm Beach County typically start around 
                <strong> $25,000</strong> for residential foundation work and can range from 
                $50,000 to $500,000+ for large-scale commercial mass excavation, cut and fill operations, 
                or infrastructure projects. Projects requiring extensive dewatering, working in flood zones, 
                or involving wetlands often cost more due to additional permit requirements and specialized 
                techniques. Projects involving development work as described in Florida Statute 380.04 
                require a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Excavation and Earthwork Includes in Palm Beach County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive excavation services cover all aspects of earthwork in Palm Beach County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Cut/Fill</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation and earthmoving for commercial and residential developments, 
                including cut and fill operations to balance site elevations throughout Palm Beach County. 
                Specialized techniques for Palm Beach County&apos;s high water table conditions, including 
                dewatering systems where required, with compliance to SFWMD Environmental Resource Permit 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Foundation and Footing Excavation</h3>
              <p className={styles.serviceDescription}>
                Precision excavation for building foundations and footings, accounting for Palm Beach County&apos;s 
                high water table and coastal soil conditions throughout Palm Beach County. Includes proper 
                dewatering and shoring to ensure stable excavation walls, with SFWMD Environmental Resource 
                Permits required for dewatering activities affecting state waters.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Trench Excavation</h3>
              <p className={styles.serviceDescription}>
                Trenching for water, sewer, electrical, and telecommunications utilities throughout 
                Palm Beach County. Coordination with utility companies and proper utility location before 
                excavation, meeting Palm Beach County requirements for utility installation and Unified Land 
                Development Code (ULDC) compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retention and Detention Ponds</h3>
              <p className={styles.serviceDescription}>
                Excavation and construction of stormwater management ponds to meet SFWMD Environmental 
                Resource Permit requirements and Palm Beach County Unified Land Development Code (ULDC) standards 
                throughout Palm Beach County. Includes proper pond shaping, depth control, and integration with 
                drainage systems.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swales and Drainage Features</h3>
              <p className={styles.serviceDescription}>
                Excavation of swales, ditches, and drainage features to direct water flow and manage 
                stormwater throughout Palm Beach County. Essential for flood-prone properties, meeting SFWMD 
                Environmental Resource Permit requirements and Palm Beach County Unified Land Development 
                Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Import, Export and Hauling</h3>
              <p className={styles.serviceDescription}>
                Coordination of fill material import, export, and hauling operations for site balancing 
                and elevation adjustments throughout Palm Beach County. Especially important for properties in 
                flood zones requiring significant fill material to meet Base Flood Elevation (BFE) 
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Excavation Considerations</h2>
            <p className={styles.text}>
              Excavation in Palm Beach County presents unique challenges that require specialized 
              expertise and equipment. Our coordinated network of licensed contractors understands the 
              specific requirements for working in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table and Dewatering:</strong> Palm Beach County&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, requires dewatering systems 
                for deep excavations. SFWMD Environmental Resource Permits are required for dewatering 
                activities affecting state waters. Proper dewatering prevents water intrusion and ensures 
                stable excavation walls, especially in areas like Palm Beach, Jupiter, and coastal 
                neighborhoods.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Excavation projects typically require Building 
                Division permits from Palm Beach County Building Division. Building permits must be obtained 
                before beginning construction, and the Building Division reviews plans to ensure compliance 
                with the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Excavation projects may require 
                Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for excavation projects in Palm Beach County.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Excavation projects must comply with these requirements.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Palm Beach County including Palm 
                Beach, Jupiter, and Juno Beach have unique soil characteristics 
                including limestone bedrock, sandy soils, and organic materials that affect excavation 
                techniques and equipment selection. Our contractors are experienced with these conditions.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Excavations in flood zones must comply with FEMA 
                requirements and may require specific elevations and drainage features. Properties in 
                flood zones often require significant fill material to meet Base Flood Elevation (BFE) 
                requirements, affecting excavation depth and fill import needs.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Large-scale excavations or those near 
                wetlands may require SFWMD Environmental Resource Permits for land disturbance, especially 
                near surface waters. As of June 28, 2024, new water quality performance standards were 
                implemented. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Excavation requires careful coordination with 
                utility companies to locate and protect existing utilities before digging. Palm Beach County 
                requires proper utility location and marking to prevent damage to water, sewer, electrical, 
                and telecommunications infrastructure. Sunshine 811 utility location requirements apply 
                throughout Florida.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep excavations require proper shoring, sloping, or 
                benching to prevent cave-ins and ensure worker safety per OSHA requirements. Palm Beach 
                County&apos;s high water table and coastal soil conditions require specialized shoring techniques.
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
            <h2 className={styles.heading}>The Excavation Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your excavation project is completed safely, efficiently, 
              and in compliance with all Palm Beach County requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment and Planning:</strong> We review engineering drawings, survey 
                data, and site conditions to plan excavation sequences and identify potential challenges, 
                including flood zone analysis, water table assessment, and wetland identification specific 
                to Palm Beach County conditions.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for excavation projects in Palm Beach County.
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
                coordinate with regulatory agencies. We coordinate with Palm Beach County Building Division, 
                ERM, SFWMD, and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies to locate and 
                mark all underground utilities before excavation begins, ensuring compliance with Palm Beach 
                County requirements for utility protection and Sunshine 811 utility location requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, haul trucks, dewatering systems) 
                and experience for your specific Palm Beach County needs, including expertise with high water 
                table conditions, coastal soils, flood zone requirements, and tree protection.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set 
                up dewatering systems in compliance with SFWMD Environmental Resource Permit requirements 
                for activities affecting state waters, ensuring proper water quality management and 
                discharge compliance.
              </li>
              <li>
                <strong>Excavation Execution:</strong> Contractors perform excavation with proper 
                safety measures, dewatering if needed, and precise depth control per specifications. 
                Proper shoring, sloping, or benching is implemented to prevent cave-ins, accounting for 
                Palm Beach County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure excavations meet depth, 
                width, and slope specifications and that soil conditions are suitable for intended use. 
                Final inspections are coordinated with Palm Beach County Building Division or municipal 
                building departments to ensure compliance with all permit conditions and engineering specifications.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for excavation in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Excavation projects in Palm Beach County require development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for projects affecting 
                  wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for 
                  activities affecting state waters and wetlands, Unified Land Development Code (ULDC) compliance, 
                  and FEMA compliance permits for properties in flood zones. We 
                  help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are SFWMD Environmental Resource Permits for dewatering?</h3>
                <p className={styles.faqAnswer}>
                  SFWMD Environmental Resource Permits are required in Palm Beach County for dewatering 
                  activities affecting state waters. These permits ensure proper water quality management 
                  and discharge compliance. As of June 28, 2024, new water quality performance standards 
                  were implemented. This is especially important given Palm Beach County&apos;s high water table, 
                  which often requires dewatering for deep excavations. We coordinate all SFWMD permit 
                  requirements for excavation projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Palm Beach County&apos;s high water table affect excavation?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires dewatering systems for deep excavations. Proper dewatering prevents 
                  water intrusion and ensures stable excavation walls. SFWMD Environmental Resource 
                  Permits are required for dewatering activities affecting state waters. This is especially 
                  important in areas like Palm Beach, Jupiter, and coastal neighborhoods where the 
                  water table is particularly high. Excavation techniques must account for saturated soils 
                  and potential water intrusion.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill in excavation?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding earth 
                  to lower elevations. Cut and fill operations balance site elevations by moving earth 
                  from high areas to low areas, minimizing the need to import or export material. In 
                  Palm Beach County, cut and fill operations must account for high water table conditions, 
                  flood zone requirements, and may require SFWMD Environmental Resource Permits and Unified Land 
                  Development Code (ULDC) compliance for significant land disturbance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs in Palm Beach County vary significantly based on volume, soil 
                  conditions, dewatering requirements, and site access. Typical costs range from $5-15 
                  per cubic yard for simple excavation to $20-40+ per cubic yard for complex projects 
                  with dewatering, difficult access, flood zone considerations, or special handling 
                  requirements. Projects requiring extensive dewatering or working in wetlands often cost 
                  more due to additional permit requirements (SFWMD Environmental Resource Permits) and 
                  specialized techniques. Palm Beach County permit processing, including ERM review, can add 
                  time and costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sub-Services</h2>
            <p className={styles.text}>
              Explore our specialized excavation and earthwork services in Palm Beach County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/west-palm-beach/excavation-earthwork/mass-excavation-cut-fill/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Mass Excavation and Cut/Fill</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale excavation and earthmoving for commercial and residential developments in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/excavation-earthwork/foundation-footing-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Foundation and Footing Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Precision excavation for building foundations and footings in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/excavation-earthwork/utility-trench-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Utility Trench Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Trenching for water, sewer, electrical, and telecommunications utilities in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/excavation-earthwork/retention-detention-ponds/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Ponds</h3>
                <p className={styles.subServiceDescription}>
                  Excavation and construction of stormwater management ponds in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/excavation-earthwork/swales-drainage-features/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales and Drainage Features</h3>
                <p className={styles.subServiceDescription}>
                  Excavation of swales, ditches, and drainage features in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/excavation-earthwork/fill-import-export-hauling/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Fill Import, Export and Hauling</h3>
                <p className={styles.subServiceDescription}>
                  Coordination of fill material import, export, and hauling operations in Palm Beach County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Excavation Project?"
        description="Get a free quote for your excavation or earthwork project in Palm Beach County. We'll connect you with licensed contractors experienced in Palm Beach County conditions, high water table dewatering, SFWMD Environmental Resource Permits, Unified Land Development Code (ULDC) compliance, Building Division permits, Environmental Resources Management (ERM) review, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

