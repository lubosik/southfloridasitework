import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Clearing & Lot Preparation in Miami, FL | Miami-Dade County',
  description: 'Professional land clearing and lot preparation services in Miami-Dade County. Vegetation clearing, stump removal, grubbing, and site cleanup.',
  openGraph: {
    title: 'Land Clearing & Lot Preparation in Miami, FL | Miami-Dade County',
    description: 'Professional land clearing and lot preparation services in Miami-Dade County. Vegetation clearing, stump removal, grubbing.',
    url: `${siteConfig.url}/service-areas/miami/land-clearing-lot-preparation/`,
  },
}

export default function MiamiLandClearingLotPreparationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Land Clearing and Lot Preparation in Miami, FL"
        subtitle="Complete land clearing and lot preparation services for construction projects across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Land clearing and lot preparation services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land clearing and lot preparation services in Miami-Dade County serve developers, 
              custom home builders, general contractors, and property owners who need to prepare raw 
              land or overgrown properties for construction in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Doral, building a custom home on a 
              wooded lot in Coral Gables, or preparing a commercial site in Aventura, we coordinate 
              contractors with the right equipment and expertise to clear your site efficiently and 
              safely, navigating Miami-Dade RER, DERM, and environmental protection requirements with 
              specialized knowledge of tree removal permits, Natural Forest Community (NFC) permits, 
              and wetland protection regulations.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Land clearing projects in Miami-Dade County typically start around 
                <strong> $25,000</strong> for residential lots and can range from $50,000 to $200,000+ 
                for large commercial sites, subdivisions, or heavily wooded properties requiring extensive 
                clearing and debris removal. Projects requiring Natural Forest Community (NFC) permits, 
                wetland protection measures, or extensive tree removal permits often cost more due to 
                additional permit requirements and specialized techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Land Clearing and Lot Preparation Includes in Miami-Dade County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive land clearing services cover all aspects of lot preparation in Miami-Dade County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Vegetation and Tree Clearing</h3>
              <p className={styles.serviceDescription}>
                Removal of trees, shrubs, and vegetation to prepare sites for construction, meeting 
                Miami-Dade County tree removal permit requirements (Tree Removal or Relocation Permit 
                required for any tree not specifically exempt under Chapter 24-49). Coordination with 
                DERM&apos;s Division of Environmental Resource Management for permit review.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stump Removal and Grubbing</h3>
              <p className={styles.serviceDescription}>
                Complete removal of tree stumps and root systems, ensuring all organic material is 
                removed from the site. Grubbing operations must comply with Miami-Dade County 
                environmental protection requirements and may require Natural Forest Community (NFC) 
                permits if the property is designated as NFC.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Debris Hauling and Site Cleanup</h3>
              <p className={styles.serviceDescription}>
                Removal and disposal of cleared vegetation and debris, meeting Miami-Dade County 
                regulations for proper disposal. Some materials may be recycled or mulched, while others 
                require disposal at approved facilities, with compliance with local regulations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading After Clearing</h3>
              <p className={styles.serviceDescription}>
                Initial rough grading to establish site elevations after clearing, meeting Miami-Dade 
                County building code requirements. Rough grading prepares sites for subsequent 
                construction activities, with consideration of high water table conditions and flood zone 
                requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Demolition Coordination</h3>
              <p className={styles.serviceDescription}>
                Coordination with demolition contractors for structure removal, meeting Miami-Dade County 
                building permit requirements. Demolition coordination ensures proper structure removal 
                and site preparation, with compliance with RER building codes.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Access Preparation</h3>
              <p className={styles.serviceDescription}>
                Clearing and preparation of access roads and staging areas, meeting Miami-Dade County 
                requirements. Site access preparation ensures proper equipment access and staging areas 
                for construction activities, with consideration of environmental protection requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Land Clearing Considerations</h2>
            <p className={styles.text}>
              Land clearing in Miami-Dade County requires specialized knowledge of local regulations and 
              environmental considerations. Our coordinated network of licensed contractors understands 
              the specific requirements for working in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Tree Removal or Relocation Permits:</strong> A tree removal/relocation permit is 
                required for the approved removal or relocation of any tree within Miami-Dade County that 
                is not specifically exempt under the Environmental Code of Miami-Dade County (Chapter 
                24-49). The application process includes reviews from DERM&apos;s Division of Environmental 
                Resource Management. We help identify and coordinate all required tree removal permits.
              </li>
              <li>
                <strong>Natural Forest Community (NFC) Permits:</strong> If your property is designated as 
                a Natural Forest Community (NFC), any activity resulting in the removal or damage to 
                vegetation—including impacts to trees, shrubs, or groundcover plants—requires a Natural 
                Forest Community Permit. The permitting process is designed to eliminate avoidable impacts 
                and minimize unavoidable impacts to trees and associated understory plant communities, 
                maintaining their health and ecological benefits. Contact the Tree and Forest Resources 
                Section at 305-372-6574 for questions about NFC permits.
              </li>
              <li>
                <strong>DERM Environmental Permits:</strong> Depending on your lot&apos;s characteristics, 
                you may need additional one-time environmental permits. Class I Permits are required for 
                work in, on, over, or upon tidal waters or coastal wetlands, as well as most mangrove 
                trimming, alteration, or removal (as of December 1st, 2025, Class I permit applications 
                can be submitted online). Class IV Permits are required for work in freshwater wetlands 
                that don&apos;t meet Short Form criteria; these are subject to a full public hearing before 
                the Board of County Commissioners. Class V Permits are needed for temporary dewatering or 
                water removal from excavations.
              </li>
              <li>
                <strong>Zoning Verification and Pre-Construction Requirements:</strong> Before beginning 
                any land clearing or lot preparation project, you must request a Zoning Verification Letter 
                (ZVL) to confirm what&apos;s allowed on your property. All construction and land clearing 
                must be reviewed and approved before breaking ground to ensure compliance with zoning and 
                building codes. Violations of environmental codes, building codes, or zoning requirements 
                can result in stop-work orders or fines.
              </li>
              <li>
                <strong>Protected Species:</strong> South Florida is home to protected plant and animal 
                species. Clearing may require environmental surveys and permits to ensure compliance with 
                state and federal regulations. DERM coordinates with state and federal agencies to ensure 
                protected species are not impacted.
              </li>
              <li>
                <strong>Wetland Protection:</strong> Properties with wetlands require special permits and 
                may have restrictions on clearing activities. DERM and SFWMD regulate wetland impacts, 
                with Class IV Permits required for freshwater wetlands that don&apos;t meet Short Form 
                criteria. We help identify wetland areas and coordinate required permits.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Proper disposal of cleared vegetation and debris must 
                comply with Miami-Dade County regulations. Some materials may be recycled or mulched, 
                while others require disposal at approved facilities. We coordinate proper disposal 
                methods that meet county requirements.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion, 
                especially important given Miami-Dade&apos;s frequent heavy rains. Temporary erosion control 
                measures may be required until permanent drainage and stabilization systems are installed, 
                meeting DERM requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Land Clearing Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your land clearing project is completed efficiently and 
              in compliance with all Miami-Dade County regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, and 
                structures to be removed, and identify any environmental concerns or permit requirements 
                specific to Miami-Dade County conditions including Natural Forest Community (NFC) 
                designation, wetland areas, and protected species.
              </li>
              <li>
                <strong>Zoning Verification:</strong> We help coordinate Zoning Verification Letter (ZVL) 
                requests to confirm what&apos;s allowed on your property before beginning any land clearing 
                activities. Zoning verification ensures compliance with Miami-Dade County zoning 
                requirements.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including Tree Removal or Relocation Permits (for any tree not specifically exempt under 
                Chapter 24-49), Natural Forest Community (NFC) Permits (if property is designated as NFC), 
                DERM Class I Permits (for work in tidal waters or coastal wetlands, mangrove trimming), 
                DERM Class IV Permits (for freshwater wetlands, subject to public hearing), DERM Class V 
                Permits (for temporary dewatering), RER building permits, and coordinate with regulatory 
                agencies. Permits ensure compliance with environmental protection requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, mulchers) and experience for your 
                specific clearing needs in Miami-Dade County, including expertise with tree removal 
                permits, NFC permits, and environmental protection requirements.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree removal, 
                stump removal, and grubbing according to project specifications and permit conditions, 
                meeting Miami-Dade County requirements. Clearing operations comply with tree removal 
                permits and NFC permit conditions where applicable.
              </li>
              <li>
                <strong>Debris Removal:</strong> All cleared vegetation, stumps, and debris are removed 
                from the site and disposed of or recycled according to Miami-Dade County regulations. 
                Proper disposal ensures compliance with county requirements and environmental protection.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors perform rough grading and 
                site cleanup to prepare for subsequent construction activities, meeting Miami-Dade County 
                building code requirements. Erosion control measures are installed as required by DERM.
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
                <h3 className={styles.faqQuestion}>What permits are required for land clearing in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing in Miami-Dade County requires Tree Removal or Relocation Permits for any 
                  tree not specifically exempt under the Environmental Code of Miami-Dade County (Chapter 
                  24-49). If your property is designated as a Natural Forest Community (NFC), a Natural 
                  Forest Community Permit is required. Additional permits may include DERM Class I Permits 
                  (for work in tidal waters or coastal wetlands, mangrove trimming), DERM Class IV 
                  Permits (for freshwater wetlands, subject to public hearing), DERM Class V Permits (for 
                  temporary dewatering), and RER building permits. A Zoning Verification Letter (ZVL) 
                  must be obtained before beginning any land clearing activities. We help identify and 
                  coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is a Natural Forest Community (NFC) and why does it matter?</h3>
                <p className={styles.faqAnswer}>
                  If your property is designated as a Natural Forest Community (NFC), any activity 
                  resulting in the removal or damage to vegetation—including impacts to trees, shrubs, or 
                  groundcover plants—requires a Natural Forest Community Permit. The permitting process 
                  is designed to eliminate avoidable impacts and minimize unavoidable impacts to trees 
                  and associated understory plant communities, maintaining their health and ecological 
                  benefits. Contact the Tree and Forest Resources Section at 305-372-6574 for questions 
                  about NFC permits or Field Notices of Violation related to Natural Forest Communities.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does land clearing cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing costs in Miami-Dade County vary significantly based on vegetation density, 
                  tree sizes, site access, and permit requirements. Typical costs range from $2,000 to 
                  $10,000 per acre for light clearing to $10,000 to $30,000+ per acre for heavy clearing 
                  with large trees. Projects typically start around $25,000 for residential lots and can 
                  range from $50,000 to $200,000+ for large commercial sites or subdivisions. Factors 
                  affecting cost include permit complexity (NFC permits, Class IV permits subject to 
                  public hearing), debris disposal requirements, and environmental protection measures. 
                  Projects requiring Natural Forest Community (NFC) permits, wetland protection measures, 
                  or extensive tree removal permits often cost more due to additional permit requirements 
                  and specialized techniques.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between clearing and grubbing in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Clearing refers to removing above-ground vegetation including trees and shrubs, requiring 
                  Tree Removal or Relocation Permits for any tree not specifically exempt under Chapter 
                  24-49. Grubbing refers to removing below-ground root systems and stumps, which may 
                  require Natural Forest Community (NFC) Permits if the property is designated as NFC. 
                  Complete lot preparation typically includes both clearing and grubbing to ensure all 
                  organic material is removed, with compliance with Miami-Dade County environmental 
                  protection requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible, especially important 
                  in Natural Forest Community (NFC) areas where the permitting process is designed to 
                  eliminate avoidable impacts and minimize unavoidable impacts. We coordinate with 
                  contractors to identify trees worth preserving and plan clearing activities to protect 
                  them, with consideration of NFC permit requirements. However, some trees may need to be 
                  removed due to construction requirements, disease, or safety concerns, requiring proper 
                  Tree Removal or Relocation Permits.
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
              Explore our specialized land clearing and lot preparation services in Miami-Dade County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/miami/land-clearing-lot-preparation/vegetation-tree-clearing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Vegetation and Tree Clearing</h3>
                <p className={styles.subServiceDescription}>
                  Removal of trees, shrubs, and vegetation to prepare sites for construction in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-clearing-lot-preparation/stump-removal-grubbing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Stump Removal and Grubbing</h3>
                <p className={styles.subServiceDescription}>
                  Complete removal of tree stumps and root systems in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-clearing-lot-preparation/debris-hauling-site-cleanup/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Debris Hauling and Site Cleanup</h3>
                <p className={styles.subServiceDescription}>
                  Removal and disposal of cleared vegetation and debris in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-clearing-lot-preparation/rough-grading-after-clearing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Rough Grading After Clearing</h3>
                <p className={styles.subServiceDescription}>
                  Initial rough grading to establish site elevations after clearing in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-clearing-lot-preparation/demolition-coordination/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Demolition Coordination</h3>
                <p className={styles.subServiceDescription}>
                  Coordination with demolition contractors for structure removal in Miami-Dade County
                </p>
              </a>
              <a href="/service-areas/miami/land-clearing-lot-preparation/site-access-preparation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Site Access Preparation</h3>
                <p className={styles.subServiceDescription}>
                  Clearing and preparation of access roads and staging areas in Miami-Dade County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clear Your Miami Site?"
        description="Get a free quote for your land clearing or lot preparation project in Miami-Dade County. We'll connect you with licensed contractors experienced in Miami-Dade County conditions, DERM requirements, tree removal permits, Natural Forest Community (NFC) permits, wetland protection, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

