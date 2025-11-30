import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Excavation & Earthwork in Fort Lauderdale, FL | Broward County',
  description: 'Professional excavation and earthwork services in Broward County. Mass excavation, cut and fill, utility trenches, retention ponds, and fill import/export.',
  openGraph: {
    title: 'Excavation & Earthwork in Fort Lauderdale, FL | Broward County',
    description: 'Professional excavation and earthwork services in Broward County. Mass excavation, cut and fill, utility trenches.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/excavation-earthwork/`,
  },
}

export default function FortLauderdaleExcavationEarthworkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Excavation and Earthwork in Fort Lauderdale, FL"
        subtitle="Mass excavation, cut and fill operations, utility trenching, and earthmoving services across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Excavation and earthwork services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our excavation and earthwork services in Broward County serve general contractors, 
              developers, custom home builders, commercial property owners, and infrastructure projects 
              that require significant earthmoving and excavation work throughout Broward County, including 
              Fort Lauderdale, Hollywood, Weston, Plantation, Pembroke Pines, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you need mass excavation for a large development in Weston, utility trenching for 
              infrastructure in Plantation, or cut and fill operations to balance site elevations in 
              Pembroke Pines, we coordinate licensed contractors with the right equipment and expertise for 
              your project scope, navigating Broward County Building Code Division, Development & 
              Environmental Review (DER), Natural Resource Protection Code compliance, and SFWMD 
              Environmental Resource Permits with specialized knowledge of high water table conditions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Excavation and earthwork projects in Broward County typically start around 
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
          <h2 className={styles.heading}>What Excavation and Earthwork Includes in Broward County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive excavation services cover all aspects of earthwork in Broward County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Cut/Fill</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation and earthmoving for commercial and residential developments, 
                including cut and fill operations to balance site elevations throughout Broward County. 
                Specialized techniques for Broward County&apos;s high water table conditions, including 
                dewatering systems where required, with compliance to SFWMD Environmental Resource Permit 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Foundation and Footing Excavation</h3>
              <p className={styles.serviceDescription}>
                Precision excavation for building foundations and footings, accounting for Broward County&apos;s 
                high water table and coastal soil conditions throughout Broward County. Includes proper 
                dewatering and shoring to ensure stable excavation walls, with SFWMD Environmental Resource 
                Permits required for dewatering activities affecting state waters.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Trench Excavation</h3>
              <p className={styles.serviceDescription}>
                Trenching for water, sewer, electrical, and telecommunications utilities throughout 
                Broward County. Coordination with utility companies and proper utility location before 
                excavation, meeting Broward County requirements for utility installation and Natural Resource 
                Protection Code compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retention and Detention Ponds</h3>
              <p className={styles.serviceDescription}>
                Excavation and construction of stormwater management ponds to meet SFWMD Environmental 
                Resource Permit requirements and Broward County Natural Resource Protection Code standards 
                throughout Broward County. Includes proper pond shaping, depth control, and integration with 
                drainage systems, with compliance to storm event protection requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swales and Drainage Features</h3>
              <p className={styles.serviceDescription}>
                Excavation of swales, ditches, and drainage features to direct water flow and manage 
                stormwater throughout Broward County. Essential for flood-prone properties, meeting SFWMD 
                Environmental Resource Permit requirements and Broward County Natural Resource Protection 
                Code standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Import, Export and Hauling</h3>
              <p className={styles.serviceDescription}>
                Coordination of fill material import, export, and hauling operations for site balancing 
                and elevation adjustments throughout Broward County. Especially important for properties in 
                flood zones requiring significant fill material to meet Base Flood Elevation (BFE) 
                requirements and storm event protection (100-year, 3-day storm event for structures).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Excavation Considerations</h2>
            <p className={styles.text}>
              Excavation in Broward County presents unique challenges that require specialized 
              expertise and equipment. Our coordinated network of licensed contractors understands the 
              specific requirements for working in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table and Dewatering:</strong> Broward County&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, requires dewatering systems 
                for deep excavations. SFWMD Environmental Resource Permits are required for dewatering 
                activities affecting state waters. Proper dewatering prevents water intrusion and ensures 
                stable excavation walls, especially in areas like Fort Lauderdale, Hollywood, and coastal 
                neighborhoods.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Excavation projects typically 
                require Development & Environmental Review through ePermits OneStop for applicable building 
                permits. All DER submittals are only accepted electronically. Broward County&apos;s Planning 
                and Development Management Division ensures that proposed developments comply with the Broward 
                County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for excavation projects in Broward County.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Excavation projects must comply with these requirements.
              </li>
              <li>
                <strong>Broward County Building Permits:</strong> Excavation projects require Uniform Building 
                Permit Applications (updated November 14, 2025) from Broward County Building Code Division 
                or municipal building departments. Permit applications can be submitted through ePermits 
                OneStop. Permits are valid for 180 days from the date of issuance.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County including Fort 
                Lauderdale, Hollywood, Pompano Beach, and Deerfield Beach have unique soil characteristics 
                including limestone bedrock, sandy soils, and organic materials that affect excavation 
                techniques and equipment selection. Our contractors are experienced with these conditions.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Excavations in flood zones must comply with FEMA 
                requirements and may require specific elevations and drainage features. Properties in 
                flood zones often require significant fill material to meet Base Flood Elevation (BFE) 
                requirements and storm event protection (100-year, 3-day storm event for structures), 
                affecting excavation depth and fill import needs.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Large-scale excavations or those near 
                wetlands may require SFWMD Environmental Resource Permits for land disturbance, especially 
                near surface waters. As of June 28, 2024, new water quality performance standards were 
                implemented. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Excavation requires careful coordination with 
                utility companies to locate and protect existing utilities before digging. Broward County 
                requires proper utility location and marking to prevent damage to water, sewer, electrical, 
                and telecommunications infrastructure. Sunshine 811 utility location requirements apply 
                throughout Florida.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep excavations require proper shoring, sloping, or 
                benching to prevent cave-ins and ensure worker safety per OSHA requirements. Broward 
                County&apos;s high water table and coastal soil conditions require specialized shoring techniques.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Excavation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your excavation project is completed safely, efficiently, 
              and in compliance with all Broward County requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment and Planning:</strong> We review engineering drawings, survey 
                data, and site conditions to plan excavation sequences and identify potential challenges, 
                including flood zone analysis, water table assessment, and wetland identification specific 
                to Broward County conditions, including storm event protection requirements.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for excavation projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed excavation projects comply 
                with the Broward County Land Development Code and Natural Resource Protection Code. All 
                DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), DER through 
                ePermits OneStop, SFWMD Environmental Resource Permits for activities affecting state waters 
                and wetlands, Natural Resource Protection Code compliance, and coordinate with regulatory 
                agencies. We coordinate with Broward County Building Code Division, SFWMD, and other 
                regulatory agencies as needed.
              </li>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies to locate and 
                mark all underground utilities before excavation begins, ensuring compliance with Broward 
                County requirements for utility protection and Sunshine 811 utility location requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, haul trucks, dewatering systems) 
                and experience for your specific Broward County needs, including expertise with high water 
                table conditions, coastal soils, flood zone requirements, and storm event protection.
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
                Broward County&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure excavations meet depth, 
                width, and slope specifications and that soil conditions are suitable for intended use. 
                Final inspections are coordinated with Broward County Building Code Division or municipal 
                building departments to ensure compliance with all permit conditions, storm event protection 
                requirements, and engineering specifications.
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
                <h3 className={styles.faqQuestion}>What permits are required for excavation in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Excavation projects in Broward County require development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from 
                  Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for 
                  activities affecting state waters and wetlands, Natural Resource Protection Code compliance, 
                  and FEMA compliance permits for properties in flood zones. All DER submittals are only 
                  accepted electronically. Permits are valid for 180 days from the date of issuance. We 
                  help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are SFWMD Environmental Resource Permits for dewatering?</h3>
                <p className={styles.faqAnswer}>
                  SFWMD Environmental Resource Permits are required in Broward County for dewatering 
                  activities affecting state waters. These permits ensure proper water quality management 
                  and discharge compliance. As of June 28, 2024, new water quality performance standards 
                  were implemented. This is especially important given Broward County&apos;s high water table, 
                  which often requires dewatering for deep excavations. We coordinate all SFWMD permit 
                  requirements for excavation projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect excavation?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires dewatering systems for deep excavations. Proper dewatering prevents 
                  water intrusion and ensures stable excavation walls. SFWMD Environmental Resource 
                  Permits are required for dewatering activities affecting state waters. This is especially 
                  important in areas like Fort Lauderdale, Hollywood, and coastal neighborhoods where the 
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
                  Broward County, cut and fill operations must account for high water table conditions, 
                  flood zone requirements, storm event protection (100-year, 3-day storm event for 
                  structures), and may require SFWMD Environmental Resource Permits and Natural Resource 
                  Protection Code compliance for significant land disturbance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs in Broward County vary significantly based on volume, soil 
                  conditions, dewatering requirements, and site access. Typical costs range from $5-15 
                  per cubic yard for simple excavation to $20-40+ per cubic yard for complex projects 
                  with dewatering, difficult access, flood zone considerations, or special handling 
                  requirements. Projects requiring extensive dewatering or working in wetlands often cost 
                  more due to additional permit requirements (SFWMD Environmental Resource Permits) and 
                  specialized techniques. Broward County permit processing, including DER review through 
                  ePermits OneStop, can add time and costs.
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
              Explore our specialized excavation and earthwork services in Broward County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/mass-excavation-cut-fill/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Mass Excavation and Cut/Fill</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale excavation and earthmoving for commercial and residential developments in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/foundation-footing-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Foundation and Footing Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Precision excavation for building foundations and footings in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/utility-trench-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Utility Trench Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Trenching for water, sewer, electrical, and telecommunications utilities in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/retention-detention-ponds/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Ponds</h3>
                <p className={styles.subServiceDescription}>
                  Excavation and construction of stormwater management ponds in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/swales-drainage-features/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales and Drainage Features</h3>
                <p className={styles.subServiceDescription}>
                  Excavation of swales, ditches, and drainage features in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/fill-import-export-hauling/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Fill Import, Export and Hauling</h3>
                <p className={styles.subServiceDescription}>
                  Coordination of fill material import, export, and hauling operations in Broward County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Excavation Project?"
        description="Get a free quote for your excavation or earthwork project in Broward County. We'll connect you with licensed contractors experienced in Broward County conditions, high water table dewatering, SFWMD Environmental Resource Permits, Natural Resource Protection Code compliance, DER requirements, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

