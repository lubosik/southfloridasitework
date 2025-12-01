import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Clearing & Lot Preparation in West Palm Beach, FL | Palm Beach County',
  description: 'Professional land clearing and lot preparation services in Palm Beach County. Vegetation clearing, stump removal, grubbing, and site cleanup.',
  openGraph: {
    title: 'Land Clearing & Lot Preparation in West Palm Beach, FL | Palm Beach County',
    description: 'Professional land clearing and lot preparation services in Palm Beach County. Vegetation clearing, stump removal, grubbing.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/land-clearing-lot-preparation/`,
  },
}

export default function WestPalmBeachLandClearingLotPreparationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Land Clearing and Lot Preparation in West Palm Beach, FL"
        subtitle="Complete land clearing and lot preparation services for construction projects across Palm Beach County, tailored to local regulations and environmental considerations"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Land clearing and lot preparation services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land clearing and lot preparation services in Palm Beach County serve developers, 
              custom home builders, general contractors, and property owners who need to prepare raw 
              land or overgrown properties for construction throughout Palm Beach County, including West 
              Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Royal Palm Beach, building a custom home on a 
              wooded lot in Palm Beach, or preparing a commercial site in West Palm Beach, we coordinate 
              contractors with the right equipment and expertise to clear your site efficiently and 
              safely. We navigate Palm Beach County&apos;s Building Division permits, Environmental Resources 
              Management (ERM) review, Unified Land Development Code (ULDC) compliance, tree protection 
              requirements, and environmental protection requirements with specialized knowledge of SFWMD 
              Environmental Resource Permits and regulatory compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Land clearing projects in Palm Beach County typically start around 
                <strong> $25,000</strong> for residential lots and can range from $50,000 to $200,000+ 
                for large commercial sites, subdivisions, or heavily wooded properties requiring extensive 
                clearing and debris removal. Projects requiring tree protection requirements, wetland 
                protection measures, or extensive environmental permits often cost more due to additional 
                permit requirements and specialized techniques. Projects involving development work as 
                described in Florida Statute 380.04 require a development permit prior to the issuance of 
                a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Land Clearing and Lot Preparation Includes in Palm Beach County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive land clearing services cover all aspects of lot preparation in Palm Beach County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Vegetation and Tree Clearing</h3>
              <p className={styles.serviceDescription}>
                Removal of trees, shrubs, and vegetation to prepare sites for construction, meeting 
                Palm Beach County tree protection requirements. Coordination with Building Division permits 
                and Environmental Resources Management (ERM) review for permit review.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stump Removal and Grubbing</h3>
              <p className={styles.serviceDescription}>
                Complete removal of tree stumps and root systems, ensuring all organic material is 
                removed from the site. Grubbing operations must comply with Palm Beach County Unified Land 
                Development Code (ULDC) requirements and may require SFWMD Environmental Resource Permits for 
                wetland impacts.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Debris Hauling and Site Cleanup</h3>
              <p className={styles.serviceDescription}>
                Removal and disposal of cleared vegetation and debris, meeting Palm Beach County 
                regulations for proper disposal. Some materials may be recycled or mulched, while others 
                require disposal at approved facilities, with compliance with local regulations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading After Clearing</h3>
              <p className={styles.serviceDescription}>
                Initial rough grading to establish site elevations after clearing, meeting Palm Beach County 
                building code requirements. Rough grading 
                prepares sites for subsequent construction activities, with consideration of high water 
                table conditions and flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Demolition Coordination</h3>
              <p className={styles.serviceDescription}>
                Coordination with demolition contractors for structure removal, meeting Palm Beach County 
                building permit requirements. Demolition coordination ensures proper structure removal and site 
                preparation, with compliance with Building Division permits and Unified Land Development Code (ULDC) requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Access Preparation</h3>
              <p className={styles.serviceDescription}>
                Clearing and preparation of access roads and staging areas, meeting Palm Beach County 
                requirements. Site access preparation ensures proper equipment access and staging areas 
                for construction activities, with consideration of environmental protection requirements 
                and Unified Land Development Code (ULDC) compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Land Clearing Considerations</h2>
            <p className={styles.text}>
              Land clearing in Palm Beach County requires specialized knowledge of local regulations and 
              environmental considerations. Our coordinated network of licensed contractors understands 
              the specific requirements for working in Palm Beach County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Tree Protection Requirements:</strong> Palm Beach County has tree protection 
                requirements that must be followed during land clearing activities. Tree removal and 
                clearing activities must comply with these requirements, with proper 
                protection measures in place during construction activities. We help coordinate tree 
                protection measures and ensure compliance with county requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for land clearing and lot preparation projects in 
                Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Land clearing and lot preparation 
                typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Land clearing and lot preparation 
                may require Environmental Resources Management (ERM) review for 
                projects affecting wetlands, protected species, or environmentally sensitive areas. ERM ensures that proposed projects 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and tree protection. 
                Land clearing projects must comply with these requirements, with proper environmental 
                protection measures.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Land clearing activities may require 
                SFWMD Environmental Resource Permits for wetland impacts, especially for projects involving 
                significant land disturbance or wetland areas. We coordinate all required SFWMD permits.
              </li>
              <li>
                <strong>Wetland Delineation:</strong> Properties with wetlands require special permits and 
                may have restrictions on clearing activities. Wetland Delineation may be required to 
                identify wetland boundaries and determine permit requirements. SFWMD and Palm Beach County 
                regulate wetland impacts, with Unified Land Development Code (ULDC) compliance required.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Proper disposal of cleared vegetation and debris must 
                comply with Palm Beach County regulations. Some materials may be recycled or mulched, while 
                others require disposal at approved facilities. We coordinate proper disposal methods that 
                meet county requirements.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion, 
                especially important given Palm Beach County&apos;s frequent heavy rains and hurricane 
                preparedness requirements. Temporary erosion control measures may be required until permanent 
                drainage and stabilization systems are installed, meeting Unified Land Development Code (ULDC) 
                requirements.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Land clearing and site preparation must account for 
                hurricane-force winds, storm surge, and heavy rainfall, ensuring long-term functionality and 
                compliance with regulatory requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects clearing operations and may require 
                special considerations for dewatering or drainage. Water table conditions determine clearing 
                depths and may affect site preparation, especially in coastal areas like Palm Beach, Jupiter, 
                and Juno Beach.
              </li>
              <li>
                <strong>Coastal Conditions:</strong> Coastal properties in Palm Beach County including Palm 
                Beach, Jupiter, Juno Beach, and Tequesta face additional 
                challenges including saltwater intrusion, storm surge, and unique soil conditions that affect 
                clearing operations and site preparation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Land Clearing Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your land clearing project is completed efficiently and 
              in compliance with all Palm Beach County regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, and 
                structures to be removed, and identify any environmental concerns or permit requirements 
                specific to Palm Beach County conditions including wetland areas, tree protection requirements, 
                and protected species.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for land clearing and lot preparation projects in Palm Beach 
                County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource 
                Permits for wetland impacts, Unified Land Development Code (ULDC) compliance, tree protection 
                requirements, and coordinate with regulatory agencies. Permits ensure 
                compliance with environmental protection requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, mulchers) and experience for your 
                specific clearing needs in Palm Beach County, including expertise with tree protection 
                requirements, Unified Land Development Code (ULDC) compliance, and environmental protection 
                requirements.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree removal, 
                stump removal, and grubbing according to project specifications and permit conditions, 
                meeting Palm Beach County requirements. Clearing operations comply with tree protection 
                requirements and Unified Land Development Code (ULDC) requirements where applicable.
              </li>
              <li>
                <strong>Debris Removal:</strong> All cleared vegetation, stumps, and debris are removed 
                from the site and disposed of or recycled according to Palm Beach County regulations. Proper 
                disposal ensures compliance with county requirements and environmental protection.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors perform rough grading and 
                site cleanup to prepare for subsequent construction activities, meeting Palm Beach County 
                building code requirements. Erosion control 
                measures are installed as required by Unified Land Development Code (ULDC).
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
                <h3 className={styles.faqQuestion}>What permits are required for land clearing in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing in Palm Beach County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Building Division permits from Palm Beach County 
                  Building Division, Environmental Resources Management (ERM) review for 
                  projects affecting wetlands or environmentally sensitive areas, SFWMD Environmental Resource Permits for 
                  wetland impacts, Unified Land Development Code (ULDC) compliance, tree protection 
                  requirements, and FEMA compliance permits for properties in flood zones. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Palm Beach County&apos;s tree protection requirements?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County has tree protection requirements that must be followed during land 
                  clearing activities. Tree removal and clearing activities must 
                  comply with these requirements, with proper protection measures in place during construction 
                  activities. These requirements ensure that trees are protected during development, maintaining the county&apos;s tree canopy 
                  and environmental benefits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does land clearing cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing costs in Palm Beach County vary significantly based on vegetation density, 
                  tree sizes, site access, and permit requirements. Typical costs range from $2,000 to 
                  $10,000 per acre for light clearing to $10,000 to $30,000+ per acre for heavy clearing 
                  with large trees. Projects typically start around $25,000 for residential lots and can 
                  range from $50,000 to $200,000+ for large commercial sites or subdivisions. Factors 
                  affecting cost include permit complexity (SFWMD Environmental Resource Permits, Unified Land Development Code (ULDC) compliance), debris disposal requirements, tree protection 
                  requirements, and environmental protection measures. Projects requiring tree protection 
                  requirements, wetland protection measures, or extensive environmental permits often cost 
                  more due to additional permit requirements and specialized techniques. Palm Beach County 
                  permit processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between clearing and grubbing in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Clearing refers to removing above-ground vegetation including trees and shrubs, requiring 
                  compliance with Palm Beach County tree protection requirements. Grubbing refers to removing 
                  below-ground root systems and stumps, which may require SFWMD Environmental Resource 
                  Permits for wetland impacts and Unified Land Development Code (ULDC) compliance. Complete lot 
                  preparation typically includes both clearing and grubbing to ensure all organic material 
                  is removed, with compliance with Palm Beach County environmental protection requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible, especially important 
                  given Palm Beach County&apos;s tree protection requirements. We coordinate with contractors to identify trees 
                  worth preserving and plan clearing activities to protect them, with consideration of 
                  tree protection requirements. However, some trees may need to be removed due to construction 
                  requirements, disease, or safety concerns, requiring proper permits and compliance with 
                  tree protection requirements.
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
              Explore our specialized land clearing and lot preparation services in Palm Beach County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/vegetation-tree-clearing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Vegetation and Tree Clearing</h3>
                <p className={styles.subServiceDescription}>
                  Removal of trees, shrubs, and vegetation to prepare sites for construction in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/stump-removal-grubbing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Stump Removal and Grubbing</h3>
                <p className={styles.subServiceDescription}>
                  Complete removal of tree stumps and root systems in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/debris-hauling-site-cleanup/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Debris Hauling and Site Cleanup</h3>
                <p className={styles.subServiceDescription}>
                  Removal and disposal of cleared vegetation and debris in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/rough-grading-after-clearing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Rough Grading After Clearing</h3>
                <p className={styles.subServiceDescription}>
                  Initial rough grading to establish site elevations after clearing in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/demolition-coordination/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Demolition Coordination</h3>
                <p className={styles.subServiceDescription}>
                  Coordination with demolition contractors for structure removal in Palm Beach County
                </p>
              </a>
              <a href="/service-areas/west-palm-beach/land-clearing-lot-preparation/site-access-preparation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Site Access Preparation</h3>
                <p className={styles.subServiceDescription}>
                  Clearing and preparation of access roads and staging areas in Palm Beach County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clear Your West Palm Beach Site?"
        description="Get a free quote for your land clearing or lot preparation project in Palm Beach County. We'll connect you with licensed contractors experienced in Palm Beach County conditions, Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, tree protection requirements, SFWMD Environmental Resource Permits, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

