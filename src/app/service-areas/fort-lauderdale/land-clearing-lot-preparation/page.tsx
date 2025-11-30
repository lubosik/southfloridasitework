import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Land Clearing & Lot Preparation in Fort Lauderdale, FL | Broward County',
  description: 'Professional land clearing and lot preparation services in Broward County. Vegetation clearing, stump removal, grubbing, and site cleanup.',
  openGraph: {
    title: 'Land Clearing & Lot Preparation in Fort Lauderdale, FL | Broward County',
    description: 'Professional land clearing and lot preparation services in Broward County. Vegetation clearing, stump removal, grubbing.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-clearing-lot-preparation/`,
  },
}

export default function FortLauderdaleLandClearingLotPreparationPage() {
  return (
    <main>
      <HeroWithQuote
        title="Land Clearing and Lot Preparation in Fort Lauderdale, FL"
        subtitle="Complete land clearing and lot preparation services for construction projects across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Land clearing and lot preparation services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our land clearing and lot preparation services in Broward County serve developers, 
              custom home builders, general contractors, and property owners who need to prepare raw 
              land or overgrown properties for construction throughout Broward County, including Fort 
              Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a new subdivision in Plantation, building a custom home on a 
              wooded lot in Victoria Park, or preparing a commercial site in Fort Lauderdale, we coordinate 
              contractors with the right equipment and expertise to clear your site efficiently and 
              safely, navigating Broward County Development & Environmental Review (DER), Natural Resource 
              Protection Code compliance, tree protection standards, and environmental protection 
              requirements with specialized knowledge of SFWMD Environmental Resource Permits and 
              regulatory compliance.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Land clearing projects in Broward County typically start around 
                <strong> $25,000</strong> for residential lots and can range from $50,000 to $200,000+ 
                for large commercial sites, subdivisions, or heavily wooded properties requiring extensive 
                clearing and debris removal. Projects requiring tree protection standards, wetland 
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
          <h2 className={styles.heading}>What Land Clearing and Lot Preparation Includes in Broward County</h2>
          <p className={styles.sectionDescription}>
            Our comprehensive land clearing services cover all aspects of lot preparation in Broward County:
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Vegetation and Tree Clearing</h3>
              <p className={styles.serviceDescription}>
                Removal of trees, shrubs, and vegetation to prepare sites for construction, meeting 
                Broward County tree protection standards including barriers, hand clearing, and double 
                replacement for damaged trees. Coordination with Development & Environmental Review (DER) 
                through ePermits OneStop for permit review.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Stump Removal and Grubbing</h3>
              <p className={styles.serviceDescription}>
                Complete removal of tree stumps and root systems, ensuring all organic material is 
                removed from the site. Grubbing operations must comply with Broward County Natural Resource 
                Protection Code requirements and may require SFWMD Environmental Resource Permits for 
                wetland impacts.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Debris Hauling and Site Cleanup</h3>
              <p className={styles.serviceDescription}>
                Removal and disposal of cleared vegetation and debris, meeting Broward County 
                regulations for proper disposal. Some materials may be recycled or mulched, while others 
                require disposal at approved facilities, with compliance with local regulations and 
                Statement of Responsibilities Regarding Asbestos (SRRA) requirements where applicable.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading After Clearing</h3>
              <p className={styles.serviceDescription}>
                Initial rough grading to establish site elevations after clearing, meeting Broward County 
                building code requirements and storm event protection (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots). Rough grading 
                prepares sites for subsequent construction activities, with consideration of high water 
                table conditions and flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Demolition Coordination</h3>
              <p className={styles.serviceDescription}>
                Coordination with demolition contractors for structure removal, meeting Broward County 
                building permit requirements including Statement of Responsibilities Regarding Asbestos 
                (SRRA) forms. Demolition coordination ensures proper structure removal and site 
                preparation, with compliance with Natural Resource Protection Code requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Access Preparation</h3>
              <p className={styles.serviceDescription}>
                Clearing and preparation of access roads and staging areas, meeting Broward County 
                requirements. Site access preparation ensures proper equipment access and staging areas 
                for construction activities, with consideration of environmental protection requirements 
                and Natural Resource Protection Code compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Land Clearing Considerations</h2>
            <p className={styles.text}>
              Land clearing in Broward County requires specialized knowledge of local regulations and 
              environmental considerations. Our coordinated network of licensed contractors understands 
              the specific requirements for working in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Tree Protection Standards:</strong> Broward County has implemented tree protection 
                standards including barriers, hand clearing, and double replacement for damaged trees. 
                Tree removal and clearing activities must comply with these standards, with proper 
                protection measures in place during construction activities. We help coordinate tree 
                protection measures and ensure compliance with county requirements.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for land clearing and lot preparation projects in 
                Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Land clearing and lot preparation 
                typically requires Development & Environmental Review through ePermits OneStop for 
                applicable building permits. All DER submittals are only accepted electronically. Broward 
                County&apos;s Planning and Development Management Division ensures that proposed developments 
                comply with the Broward County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>Statement of Responsibilities Regarding Asbestos (SRRA):</strong> For demolition 
                or renovation projects, Statement of Responsibilities Regarding Asbestos (SRRA) forms may 
                be required. These forms ensure proper handling and disposal of asbestos-containing 
                materials, with compliance with Broward County requirements.
              </li>
              <li>
                <strong>Wetland Delineation:</strong> Properties with wetlands require special permits and 
                may have restrictions on clearing activities. Wetland Delineation may be required to 
                identify wetland boundaries and determine permit requirements. SFWMD and Broward County 
                regulate wetland impacts, with Natural Resource Protection Code compliance required.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Proper disposal of cleared vegetation and debris must 
                comply with Broward County regulations. Some materials may be recycled or mulched, while 
                others require disposal at approved facilities. We coordinate proper disposal methods that 
                meet county requirements.
              </li>
              <li>
                <strong>Erosion Control:</strong> After clearing, sites are vulnerable to erosion, 
                especially important given Broward County&apos;s frequent heavy rains and storm event 
                protection requirements. Temporary erosion control measures may be required until permanent 
                drainage and stabilization systems are installed, meeting Natural Resource Protection Code 
                requirements.
              </li>
              <li>
                <strong>Brownfield Designation:</strong> Broward County offers Brownfield designation 
                incentives for properties with environmental concerns. Brownfield designation can provide 
                tax incentives and streamlined permitting for redevelopment projects. We can help assess 
                whether your property qualifies for Brownfield designation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Land Clearing Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your land clearing project is completed efficiently and 
              in compliance with all Broward County regulations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Assessment:</strong> We assess your site to identify vegetation, trees, and 
                structures to be removed, and identify any environmental concerns or permit requirements 
                specific to Broward County conditions including wetland areas, tree protection standards, 
                and protected species.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for land clearing and lot preparation projects in Broward 
                County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, SFWMD Environmental Resource 
                Permits for wetland impacts, Natural Resource Protection Code compliance, tree protection 
                standards, Statement of Responsibilities Regarding Asbestos (SRRA) forms for demolition 
                projects, and coordinate with regulatory agencies. All DER submittals are only accepted 
                electronically. Permits are valid for 180 days from the date of issuance. Permits ensure 
                compliance with environmental protection requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (excavators, bulldozers, mulchers) and experience for your 
                specific clearing needs in Broward County, including expertise with tree protection 
                standards, Natural Resource Protection Code compliance, and environmental protection 
                requirements.
              </li>
              <li>
                <strong>Clearing Execution:</strong> Contractors perform vegetation clearing, tree removal, 
                stump removal, and grubbing according to project specifications and permit conditions, 
                meeting Broward County requirements. Clearing operations comply with tree protection 
                standards and Natural Resource Protection Code requirements where applicable.
              </li>
              <li>
                <strong>Debris Removal:</strong> All cleared vegetation, stumps, and debris are removed 
                from the site and disposed of or recycled according to Broward County regulations. Proper 
                disposal ensures compliance with county requirements and environmental protection, with 
                Statement of Responsibilities Regarding Asbestos (SRRA) compliance where applicable.
              </li>
              <li>
                <strong>Site Preparation:</strong> After clearing, contractors perform rough grading and 
                site cleanup to prepare for subsequent construction activities, meeting Broward County 
                building code requirements and storm event protection (100-year, 3-day storm event for 
                structures; 10-year, 3-day storm event for roadways and parking lots). Erosion control 
                measures are installed as required by Natural Resource Protection Code.
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
                <h3 className={styles.faqQuestion}>What permits are required for land clearing in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from 
                  Broward County Building Code Division, Development & Environmental Review (DER) through 
                  ePermits OneStop for applicable projects, SFWMD Environmental Resource Permits for 
                  wetland impacts, Natural Resource Protection Code compliance, tree protection standards, 
                  and Statement of Responsibilities Regarding Asbestos (SRRA) forms for demolition 
                  projects. All DER submittals are only accepted electronically. Permits are valid for 180 
                  days from the date of issuance. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Broward County&apos;s tree protection standards?</h3>
                <p className={styles.faqAnswer}>
                  Broward County has implemented tree protection standards including barriers, hand clearing, 
                  and double replacement for damaged trees. Tree removal and clearing activities must 
                  comply with these standards, with proper protection measures in place during construction 
                  activities. These standards ensure that trees are protected during development and that 
                  damaged trees are replaced at double the number, maintaining the county&apos;s tree canopy 
                  and environmental benefits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does land clearing cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Land clearing costs in Broward County vary significantly based on vegetation density, 
                  tree sizes, site access, and permit requirements. Typical costs range from $2,000 to 
                  $10,000 per acre for light clearing to $10,000 to $30,000+ per acre for heavy clearing 
                  with large trees. Projects typically start around $25,000 for residential lots and can 
                  range from $50,000 to $200,000+ for large commercial sites or subdivisions. Factors 
                  affecting cost include permit complexity (SFWMD Environmental Resource Permits, Natural 
                  Resource Protection Code compliance), debris disposal requirements, tree protection 
                  standards, and environmental protection measures. Projects requiring tree protection 
                  standards, wetland protection measures, or extensive environmental permits often cost 
                  more due to additional permit requirements and specialized techniques. Broward County 
                  permit processing, including DER review through ePermits OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between clearing and grubbing in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Clearing refers to removing above-ground vegetation including trees and shrubs, requiring 
                  compliance with Broward County tree protection standards. Grubbing refers to removing 
                  below-ground root systems and stumps, which may require SFWMD Environmental Resource 
                  Permits for wetland impacts and Natural Resource Protection Code compliance. Complete lot 
                  preparation typically includes both clearing and grubbing to ensure all organic material 
                  is removed, with compliance with Broward County environmental protection requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can trees be preserved during clearing in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, selective clearing can preserve desirable trees when possible, especially important 
                  given Broward County&apos;s tree protection standards including barriers, hand clearing, and 
                  double replacement for damaged trees. We coordinate with contractors to identify trees 
                  worth preserving and plan clearing activities to protect them, with consideration of 
                  tree protection standards. However, some trees may need to be removed due to construction 
                  requirements, disease, or safety concerns, requiring proper permits and compliance with 
                  tree protection standards.
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
              Explore our specialized land clearing and lot preparation services in Broward County:
            </p>
            <div className={styles.subServicesGrid}>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/vegetation-tree-clearing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Vegetation and Tree Clearing</h3>
                <p className={styles.subServiceDescription}>
                  Removal of trees, shrubs, and vegetation to prepare sites for construction in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/stump-removal-grubbing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Stump Removal and Grubbing</h3>
                <p className={styles.subServiceDescription}>
                  Complete removal of tree stumps and root systems in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/debris-hauling-site-cleanup/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Debris Hauling and Site Cleanup</h3>
                <p className={styles.subServiceDescription}>
                  Removal and disposal of cleared vegetation and debris in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/rough-grading-after-clearing/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Rough Grading After Clearing</h3>
                <p className={styles.subServiceDescription}>
                  Initial rough grading to establish site elevations after clearing in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/demolition-coordination/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Demolition Coordination</h3>
                <p className={styles.subServiceDescription}>
                  Coordination with demolition contractors for structure removal in Broward County
                </p>
              </a>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/site-access-preparation/" className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>Site Access Preparation</h3>
                <p className={styles.subServiceDescription}>
                  Clearing and preparation of access roads and staging areas in Broward County
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Clear Your Fort Lauderdale Site?"
        description="Get a free quote for your land clearing or lot preparation project in Broward County. We'll connect you with licensed contractors experienced in Broward County conditions, Development & Environmental Review (DER) requirements, Natural Resource Protection Code compliance, tree protection standards, SFWMD Environmental Resource Permits, and regulatory compliance."
        showPhone={true}
      />
    </main>
  )
}

