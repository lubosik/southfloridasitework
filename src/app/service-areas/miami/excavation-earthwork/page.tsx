import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Excavation & Earthwork in Miami, FL | Miami-Dade County',
  description: 'Professional excavation and earthwork services in Miami-Dade County. Mass excavation, cut and fill, utility trenches, retention ponds, and fill import/export.',
  openGraph: {
    title: 'Excavation & Earthwork in Miami, FL | Miami-Dade County',
    description: 'Professional excavation and earthwork services in Miami-Dade County. Mass excavation, cut and fill, utility trenches.',
    url: `${siteConfig.url}/service-areas/miami/excavation-earthwork/`,
  },
}

export default function MiamiExcavationEarthworkPage() {
  return (
    <main>
      <HeroWithQuote
        title="Excavation and Earthwork in Miami, FL"
        subtitle="Mass excavation, cut and fill operations, utility trenching, and earthmoving services across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Excavation and earthwork services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our excavation and earthwork services in Miami-Dade County serve general contractors, 
              developers, custom home builders, commercial property owners, and infrastructure projects 
              that require significant earthmoving and excavation work in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you need mass excavation for a large development in Doral, utility trenching for 
              infrastructure in Aventura, or cut and fill operations to balance site elevations in Coral 
              Gables, we coordinate licensed contractors with the right equipment and expertise for your 
              project scope, navigating Miami-Dade RER, DERM, and SFWMD requirements with specialized 
              knowledge of high water table conditions.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Excavation and earthwork projects in Miami-Dade County typically start around 
                <strong> $25,000</strong> for residential foundation work and can range from 
                $50,000 to $500,000+ for large-scale commercial mass excavation, cut and fill operations, 
                or infrastructure projects. Projects requiring extensive dewatering, working in flood zones, 
                or involving freshwater wetlands often cost more due to additional permit requirements 
                and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Excavation and Earthwork Includes in Miami-Dade County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive excavation services cover all aspects of earthwork in Miami-Dade County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Excavation and Cut/Fill</h3>
              <p className={styles.serviceDescription}>
                Large-scale excavation and earthmoving for commercial and residential developments, 
                including cut and fill operations to balance site elevations. Specialized techniques for 
                Miami-Dade&apos;s high water table conditions, including dewatering systems where required.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Foundation and Footing Excavation</h3>
              <p className={styles.serviceDescription}>
                Precision excavation for building foundations and footings, accounting for Miami-Dade&apos;s 
                high water table and coastal soil conditions. Includes proper dewatering and shoring to 
                ensure stable excavation walls.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Utility Trench Excavation</h3>
              <p className={styles.serviceDescription}>
                Trenching for water, sewer, electrical, and telecommunications utilities throughout 
                Miami-Dade County. Coordination with utility companies and proper utility location before 
                excavation, meeting Miami-Dade requirements for utility installation.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Retention and Detention Ponds</h3>
              <p className={styles.serviceDescription}>
                Excavation and construction of stormwater management ponds to meet South Florida Water 
                Management District (SFWMD) and Miami-Dade County requirements. Includes proper pond 
                shaping, depth control, and integration with drainage systems.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Swales and Drainage Features</h3>
              <p className={styles.serviceDescription}>
                Excavation of swales, ditches, and drainage features to direct water flow and manage 
                stormwater. Essential for flood-prone properties in Miami-Dade County, meeting SFWMD 
                and county stormwater management requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Import, Export and Hauling</h3>
              <p className={styles.serviceDescription}>
                Coordination of fill material import, export, and hauling operations for site balancing 
                and elevation adjustments. Especially important for properties in flood zones requiring 
                significant fill material to meet Base Flood Elevation (BFE) requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Excavation Considerations</h2>
            <p className={styles.text}>
              Excavation in Miami-Dade County presents unique challenges that require specialized 
              expertise and equipment. Our coordinated network of licensed contractors understands the 
              specific requirements for working in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table and Dewatering:</strong> Miami-Dade&apos;s high water table, 
                which can be within 2-3 feet of the surface in many areas, requires dewatering systems 
                for deep excavations. DERM Class V Permits are required for temporary dewatering or 
                whenever water is removed from an excavation to ensure that sediment, turbidity, and 
                contaminants are removed before discharge. Proper dewatering prevents water intrusion 
                and ensures stable excavation walls, especially in areas like Miami Beach, Aventura, 
                and coastal neighborhoods.
              </li>
              <li>
                <strong>DERM Environmental Permits:</strong> Excavation projects requiring Miami-Dade 
                Review under Miami-Dade County Code of Ordinances Chapter 24 must obtain DERM Plan 
                Review Approval prior to issuance of a building permit. Projects involving freshwater 
                wetlands require DERM Class IV Permits, which may be subject to a full public hearing 
                before the Board of County Commissioners if they don&apos;t meet short form criteria.
              </li>
              <li>
                <strong>RER Building Permits:</strong> Excavation projects require building permits from 
                Miami-Dade RER (for unincorporated areas) or municipal building departments (for 
                incorporated areas like Coral Gables or Pinecrest). Effective October 1, 2025, Miami-Dade 
                implemented updated permit fees. Permit applications can be submitted online through the 
                Miami-Dade ePermitting system.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including Miami 
                Beach, Key Biscayne, Bal Harbour, and Aventura have unique soil characteristics including 
                limestone bedrock, sandy soils, and organic materials that affect excavation techniques 
                and equipment selection. Our contractors are experienced with these conditions.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Excavations in flood zones must comply with FEMA 
                requirements and may require specific elevations and drainage features. Properties in 
                flood zones often require significant fill material to meet Base Flood Elevation (BFE) 
                requirements, affecting excavation depth and fill import needs.
              </li>
              <li>
                <strong>SFWMD Environmental Permits:</strong> Large-scale excavations or those near 
                wetlands may require SFWMD environmental resource permits for land disturbance, especially 
                near surface waters. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Utility Coordination:</strong> Excavation requires careful coordination with 
                utility companies to locate and protect existing utilities before digging. Miami-Dade 
                requires proper utility location and marking to prevent damage to water, sewer, electrical, 
                and telecommunications infrastructure.
              </li>
              <li>
                <strong>Safety and Shoring:</strong> Deep excavations require proper shoring, sloping, or 
                benching to prevent cave-ins and ensure worker safety per OSHA requirements. Miami-Dade&apos;s 
                high water table and coastal soil conditions require specialized shoring techniques.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Excavation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your excavation project is completed safely, efficiently, 
              and in compliance with all Miami-Dade County requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment and Planning:</strong> We review engineering drawings, survey 
                data, and site conditions to plan excavation sequences and identify potential challenges, 
                including flood zone analysis, water table assessment, and freshwater wetland 
                identification specific to Miami-Dade County conditions.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including Miami-Dade RER building permits, DERM Plan Review Approval (for projects 
                requiring Miami-Dade Review under Chapter 24), DERM Class V Permits for dewatering, 
                DERM Class IV Permits for freshwater wetlands, SFWMD environmental resource permits, 
                and coordinate with regulatory agencies. Permit applications can be submitted online 
                through the Miami-Dade ePermitting system.
              </li>
              <li>
                <strong>Utility Location:</strong> We coordinate with utility companies to locate and 
                mark all underground utilities before excavation begins, ensuring compliance with 
                Miami-Dade requirements for utility protection.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, haul trucks, dewatering systems) 
                and experience for your specific Miami-Dade County needs, including expertise with high 
                water table conditions, coastal soils, and flood zone requirements.
              </li>
              <li>
                <strong>Dewatering Setup:</strong> For excavations requiring dewatering, contractors set 
                up dewatering systems in compliance with DERM Class V Permit requirements, ensuring 
                sediment, turbidity, and contaminants are removed before discharge.
              </li>
              <li>
                <strong>Excavation Execution:</strong> Contractors perform excavation with proper 
                safety measures, dewatering if needed, and precise depth control per specifications. 
                Proper shoring, sloping, or benching is implemented to prevent cave-ins, accounting for 
                Miami-Dade&apos;s high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress to ensure excavations meet depth, 
                width, and slope specifications and that soil conditions are suitable for intended use. 
                Final inspections are coordinated with Miami-Dade RER or municipal building departments 
                to ensure compliance with all permit conditions.
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
                <h3 className={styles.faqQuestion}>What permits are required for excavation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Excavation projects in Miami-Dade County require building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas). 
                  Projects requiring Miami-Dade Review under Chapter 24 must obtain DERM Plan Review 
                  Approval. DERM Class V Permits are required for temporary dewatering. Projects involving 
                  freshwater wetlands require DERM Class IV Permits. Large-scale excavations may require 
                  SFWMD environmental resource permits. Permit applications can be submitted online through 
                  the Miami-Dade ePermitting system. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is a DERM Class V Permit for dewatering?</h3>
                <p className={styles.faqAnswer}>
                  DERM Class V Permits are required in Miami-Dade County for temporary dewatering or 
                  whenever water is removed from an excavation, from the ground, or existing structure. 
                  These permits ensure that sediment, turbidity, and contaminants are removed before 
                  discharge. This is especially important given Miami-Dade&apos;s high water table, which 
                  often requires dewatering for deep excavations. We coordinate all DERM permit 
                  requirements for excavation projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect excavation?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires dewatering systems for deep excavations. Proper dewatering prevents 
                  water intrusion and ensures stable excavation walls. DERM Class V Permits are required 
                  for dewatering operations. This is especially important in areas like Miami Beach, 
                  Aventura, and coastal neighborhoods where the water table is particularly high. 
                  Excavation techniques must account for saturated soils and potential water intrusion.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between cut and fill in excavation?</h3>
                <p className={styles.faqAnswer}>
                  Cut refers to removing earth from higher elevations, while fill refers to adding earth 
                  to lower elevations. Cut and fill operations balance site elevations by moving earth 
                  from high areas to low areas, minimizing the need to import or export material. In 
                  Miami-Dade County, cut and fill operations must account for high water table 
                  conditions, flood zone requirements, and may require DERM and SFWMD permits for 
                  significant land disturbance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does mass excavation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Mass excavation costs in Miami-Dade County vary significantly based on volume, soil 
                  conditions, dewatering requirements, and site access. Typical costs range from $5-15 
                  per cubic yard for simple excavation to $20-40+ per cubic yard for complex projects 
                  with dewatering, difficult access, flood zone considerations, or special handling 
                  requirements. Projects requiring extensive dewatering or working in freshwater 
                  wetlands often cost more due to additional permit requirements and specialized techniques.
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
              Explore our specialized excavation and earthwork services in Miami-Dade County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/miami/excavation-earthwork/mass-excavation-cut-fill/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Mass Excavation and Cut/Fill</h3>
                <p className={styles.subServiceDescription}>
                  Large-scale excavation and earthmoving for commercial and residential developments in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/excavation-earthwork/foundation-footing-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Foundation and Footing Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Precision excavation for building foundations and footings in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/excavation-earthwork/utility-trench-excavation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Utility Trench Excavation</h3>
                <p className={styles.subServiceDescription}>
                  Trenching for water, sewer, electrical, and telecommunications utilities in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/excavation-earthwork/retention-detention-ponds/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Retention and Detention Ponds</h3>
                <p className={styles.subServiceDescription}>
                  Excavation and construction of stormwater management ponds in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/excavation-earthwork/swales-drainage-features/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Swales and Drainage Features</h3>
                <p className={styles.subServiceDescription}>
                  Excavation of swales, ditches, and drainage features in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/excavation-earthwork/fill-import-export-hauling/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Fill Import, Export and Hauling</h3>
                <p className={styles.subServiceDescription}>
                  Coordination of fill material import, export, and hauling operations in Miami-Dade County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Excavation Project?"
        description="Get a free quote for your excavation or earthwork project in Miami-Dade County. We'll connect you with licensed contractors experienced in Miami-Dade County conditions, high water table dewatering, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

