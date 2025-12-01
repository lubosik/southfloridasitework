import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Flood-Prone & Coastal Property Drainage in West Palm Beach, FL | Palm Beach County',
  description: 'Specialized drainage solutions for flood-prone and coastal properties in Palm Beach County. Elevated systems, flood-resistant materials, and storm surge protection.',
  openGraph: {
    title: 'Flood-Prone & Coastal Property Drainage in West Palm Beach, FL | Palm Beach County',
    description: 'Specialized drainage solutions for flood-prone and coastal properties in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/drainage-stormwater-solutions/flood-prone-coastal-drainage/`,
  },
}

export default function WestPalmBeachFloodProneCoastalDrainagePage() {
  return (
    <main>
      <HeroWithQuote
        title="Flood-Prone and Coastal Property Drainage in West Palm Beach, FL"
        subtitle="Specialized drainage solutions for flood-prone properties and coastal areas across Palm Beach County, including elevated drainage systems, flood-resistant materials, and designs that account for high water tables and storm surge"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Flood-prone and coastal property drainage solutions in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Flood-prone and coastal property drainage services in Palm Beach County are essential for 
              property owners, homeowners, commercial property managers, and anyone with properties in 
              flood zones or coastal areas that require specialized drainage solutions throughout Palm Beach 
              County, including West Palm Beach, Palm Beach, Jupiter, Wellington, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with flooding from storm surge in Palm Beach, high water 
              tables in Jupiter, or coastal conditions in Juno Beach, specialized drainage systems can 
              protect your property. We coordinate contractors with expertise in Palm Beach County drainage 
              requirements, Building Division permits, Environmental Resources Management (ERM) 
              review, Unified Land Development Code (ULDC) compliance, FEMA flood zone compliance, Base Flood Elevation (BFE) requirements, and storm surge protection to design and install drainage systems that account 
              for flood zones, coastal conditions, and regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Flood-prone and coastal property drainage projects in Palm Beach County typically range 
                from <strong> $50,000 to $150,000</strong> for residential properties, and 
                <strong> $150,000 to $500,000+</strong> for commercial properties or large-scale systems 
                depending on property size, flood zone requirements, Base Flood Elevation (BFE) compliance 
                needs, storm surge protection requirements, and drainage system complexity. Projects requiring 
                significant elevation adjustments or meeting Coastal High Hazard Area (V Zone) 
                requirements often cost more due to additional permit requirements and specialized design. 
                Projects involving development work as described in Florida Statute 380.04 require a 
                development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Flood-Prone and Coastal Property Drainage Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood Zone Assessment</h3>
              <p className={styles.serviceDescription}>
                Assessment of flood zone designation, Base Flood Elevation (BFE), and drainage 
                requirements specific to Palm Beach County conditions. Assessment identifies flood risks and 
                determines drainage system design requirements to protect properties, with consideration 
                of hurricane preparedness.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Elevated Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of elevated drainage systems that function during flood events, 
                meeting Base Flood Elevation (BFE) requirements and Palm Beach County building codes. Elevated systems ensure 
                drainage continues to operate when water levels rise, protecting properties from flood 
                damage, especially important in Coastal High Hazard Areas (V Zones) requiring buildings 
                on piles or columns.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood-Resistant Materials</h3>
              <p className={styles.serviceDescription}>
                Use of flood-resistant materials including corrosion-resistant pipes, elevated structures, 
                and materials designed for saltwater exposure, meeting Palm Beach County Unified Land Development Code (ULDC) 
                requirements. Materials ensure drainage systems withstand flood conditions 
                and coastal environments, especially important in areas along the Atlantic Ocean and 
                Intracoastal Waterway.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Storm Surge Protection</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that account for storm surge and wave action, 
                meeting Palm Beach County&apos;s Coastal High Hazard Area (V Zone) requirements and hurricane 
                preparedness considerations. Storm surge protection ensures drainage systems function during 
                extreme weather events and protect properties from coastal flooding, with special 
                floodplain management requirements in V Zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>High Water Table Management</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that effectively manage high water tables 
                common in coastal areas, especially important given Palm Beach County&apos;s high water table 
                which can be within 2-3 feet of the surface. High water table management prevents water 
                from rising to the surface and protects properties from groundwater flooding, especially 
                in areas like Palm Beach, Jupiter, and coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>FEMA Compliance</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that comply with FEMA requirements and 
                Palm Beach County building codes, including Base Flood Elevation (BFE) compliance and elevation 
                certificates. FEMA compliance ensures properties meet flood zone regulations and may 
                reduce flood insurance costs, with mandatory flood insurance requirements in flood zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Flood Zone and Coastal Considerations</h2>
            <p className={styles.text}>
              Flood-prone and coastal property drainage in Palm Beach County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>FEMA Flood Zone Classifications:</strong> Palm Beach County properties are 
                classified by FEMA Flood Insurance Rate Maps (FIRMs). Zone AE (Moderate to High Flooding 
                Risk) corresponds to areas with flood depths greater than three feet, with a 26% chance 
                of flooding over a 30-year mortgage. Zone VE (High Flooding Risk) applies to coastal 
                areas with additional hazards from storm waves and velocity wave action, with at least a 
                one-in-four chance of flooding during a 30-year mortgage. Zone AH (Moderate to High 
                Flooding Risk) designates areas with a 1% annual chance of shallow flooding, typically 
                from ponding, with average depths ranging from one to three feet. Zone AO (Sheet Flow) 
                represents areas with a 1% or greater chance of shallow flooding, usually sheet flow, 
                with average depths of one to three feet. Zone A includes areas where detailed flood 
                analysis has not been performed. Zone X designates properties outside the floodplain or 
                with average flood depths less than one foot.
              </li>
              <li>
                <strong>Base Flood Elevation (BFE) Requirements:</strong> Base Flood Elevation (BFE) data 
                is derived from detailed analyses for zones where such information is available, 
                particularly in AE and AO zones where BFE or average flood depths are shown at selected 
                intervals. Properties in flood zones must have structures and drainage features elevated 
                above BFE to comply with FEMA requirements and Palm Beach County building codes. Compliance may reduce 
                flood insurance costs and protect properties from flood damage.
              </li>
              <li>
                <strong>Coastal High Hazard Areas (V Zones):</strong> Areas within Palm Beach County along 
                the Atlantic Ocean, Intracoastal Waterway, and other coastal zones are classified as 
                Coastal High Hazard Areas (V Zones), which require that all buildings be elevated on 
                piles or columns. Special floodplain management requirements apply in these zones to 
                mitigate storm surge and wave action risks. Drainage systems must be designed to function 
                in these challenging environments.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building 
                permit. This is a critical prerequisite for flood-prone and coastal property drainage 
                projects in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Flood-prone and coastal 
                property drainage projects typically requires Building Division permits from Palm Beach County 
                Building Division. Building permits must be obtained before beginning construction, and the Building Division reviews plans to ensure compliance with the 
                Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Flood-prone and coastal 
                property drainage projects may require Environmental Resources Management (ERM) review for 
                projects affecting wetlands, protected species, or environmentally sensitive areas. ERM ensures that proposed projects comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land 
                Development Code (ULDC) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including wetlands and stormwater 
                management systems. Coastal drainage projects must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Coastal drainage projects may 
                require SFWMD Environmental Resource Permits for land disturbance and stormwater 
                management, especially for systems connecting to surface waters. As of June 28, 2024, new 
                water quality performance standards were implemented. We coordinate all required SFWMD 
                permits.
              </li>
              <li>
                <strong>Storm Surge and Wave Action:</strong> Coastal properties face storm surge during 
                hurricanes and tropical storms, with V Zones requiring special protection. Drainage 
                systems must be designed to function during surge events and protect properties from 
                saltwater intrusion, with mitigation measures including floodproofing critical facilities 
                and commercial buildings, as well as elevating homes in high-risk areas.
              </li>
              <li>
                <strong>High Water Tables:</strong> Palm Beach County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects coastal drainage design and may 
                require deeper excavation or dewatering systems (SFWMD Environmental Resource Permits). 
                Water table conditions determine drainage feature depths and may affect system function, 
                especially in coastal areas like Palm Beach, Jupiter, Juno Beach, and Tequesta.
              </li>
              <li>
                <strong>Saltwater Intrusion:</strong> Coastal drainage systems must resist saltwater 
                corrosion and intrusion, especially important in areas along the Atlantic Ocean and 
                Intracoastal Waterway. Materials and designs must account for saltwater exposure and 
                maintain function in coastal environments, with corrosion-resistant materials required.
              </li>
              <li>
                <strong>Hurricane Preparedness:</strong> Palm Beach County&apos;s location makes it vulnerable to 
                hurricanes and tropical storms. Coastal drainage design must account for hurricane-force 
                winds, storm surge, and heavy rainfall, ensuring long-term functionality and compliance with 
                regulatory requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Flood-Prone and Coastal Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate flood-prone and coastal property drainage throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal High Hazard Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                  <li>Juno Beach</li>
                  <li>Tequesta</li>
                  <li>Riviera Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood Zone AE Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown West Palm Beach</li>
                  <li>El Cid</li>
                  <li>Grandview Heights</li>
                  <li>Palm Beach</li>
                  <li>Jupiter</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Downtown West Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Palm Beach Gardens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Coastal Drainage Installation Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your flood-prone or coastal property drainage system is 
              designed and installed properly and meets all Palm Beach County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Flood Zone Assessment:</strong> We assess your property&apos;s flood zone 
                designation, Base Flood Elevation (BFE), and drainage requirements specific to Palm Beach 
                County conditions. Assessment identifies flood risks and determines system design 
                requirements, with consideration of hurricane preparedness.
              </li>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design drainage systems 
                that account for flood zones, coastal conditions, Unified Land Development Code (ULDC) compliance, and regulatory requirements. 
                Design includes elevated structures, flood-resistant materials, storm surge protection, 
                and Base Flood Elevation (BFE) compliance, with special considerations for Coastal High 
                Hazard Areas (V Zones).
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for flood-prone and coastal property drainage projects in 
                Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County Permit Coordination:</strong> We help identify required permits 
                including Building Division permits, Environmental Resources Management (ERM) review for 
                projects affecting wetlands or environmentally sensitive areas, FEMA compliance and elevation 
                certificates, SFWMD Environmental Resource Permits for coastal drainage projects, Unified Land Development Code (ULDC) compliance, and coordinate with regulatory agencies. Permits ensure compliance with regulatory requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in coastal drainage installation, FEMA compliance, and Palm Beach County 
                requirements, including experience with high water table conditions, storm surge 
                protection, Base Flood Elevation (BFE) compliance, and hurricane preparedness.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including elevated 
                structures, flood-resistant materials, and storm surge protection, meeting Base Flood 
                Elevation (BFE) requirements and Palm Beach County building codes. Installation ensures systems function 
                during flood events and protect properties, with special attention to Coastal High Hazard 
                Areas (V Zones).
              </li>
              <li>
                <strong>FEMA Compliance Verification:</strong> We coordinate elevation certificates and 
                FEMA compliance verification to ensure properties meet flood zone requirements, with 
                mandatory flood insurance requirements in flood zones. Compliance may reduce flood 
                insurance costs and protect properties from flood damage.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, FEMA, 
                Palm Beach County Building Division or municipal building departments, and Environmental Resources Management (ERM) 
                where applicable to ensure drainage systems meet specifications and regulatory 
                requirements including Base Flood Elevation (BFE) compliance and Unified Land Development Code (ULDC) standards. Systems are ready for operation after final 
                approval.
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
                <h3 className={styles.faqQuestion}>What is Base Flood Elevation (BFE) and why does it matter in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Base Flood Elevation (BFE) is the elevation to which floodwater is anticipated to rise 
                  during a base flood (1% annual chance flood). BFE data is derived from detailed analyses 
                  for zones where such information is available, particularly in AE and AO zones where BFE 
                  or average flood depths are shown at selected intervals. Properties in flood zones must 
                  have structures and drainage features elevated above BFE to comply with FEMA requirements 
                  and Palm Beach County building codes. Compliance may reduce flood insurance costs and protect 
                  properties from flood damage. BFE data is critical for permit applications for coastal 
                  properties and development projects in Palm Beach County.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the different flood zones in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County properties are classified by FEMA Flood Insurance Rate Maps (FIRMs). 
                  Zone AE (Moderate to High Flooding Risk) corresponds to areas with flood depths greater 
                  than three feet, with a 26% chance of flooding over a 30-year mortgage. Zone VE (High 
                  Flooding Risk) applies to coastal areas with additional hazards from storm waves and 
                  velocity wave action, with at least a one-in-four chance of flooding. Zone AH 
                  (Moderate to High Flooding Risk) designates areas with a 1% annual chance of shallow 
                  flooding, typically from ponding, with average depths ranging from one to three feet. 
                  Zone AO (Sheet Flow) represents areas with a 1% or greater chance of shallow flooding, 
                  usually sheet flow, with average depths of one to three feet. Zone A includes areas 
                  where detailed flood analysis has not been performed. Zone X designates properties 
                  outside the floodplain or with average flood depths less than one foot.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Coastal High Hazard Areas (V Zones) in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Areas within Palm Beach County along the Atlantic Ocean, Intracoastal Waterway, and other 
                  coastal zones are classified as Coastal High Hazard Areas (V Zones), which require that 
                  all buildings be elevated on piles or columns. Special floodplain management 
                  requirements apply in these zones to mitigate storm surge and wave action risks. 
                  Drainage systems must be designed to function in these challenging environments, with 
                  elevated structures and flood-resistant materials required. Properties in V Zones face 
                  at least a one-in-four chance of flooding during a 30-year mortgage period, with 
                  mandatory flood insurance requirements. Hurricane preparedness considerations are incorporated into 
                  design.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does coastal drainage installation cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Coastal drainage installation costs in Palm Beach County vary based on property size, 
                  flood zone requirements, Base Flood Elevation (BFE) compliance needs, storm surge 
                  protection requirements, and system complexity. Typical residential properties range 
                  from $50,000 to $150,000, while commercial properties or large-scale systems can range 
                  from $150,000 to $500,000+ depending on scope. Factors affecting cost include elevation 
                  requirements, flood-resistant materials, storm surge protection, dewatering needs, and 
                  permit complexity. Projects requiring significant elevation adjustments or meeting 
                  Coastal High Hazard Area (V Zone) requirements often cost more due to additional permit 
                  requirements (SFWMD Environmental Resource Permits) and specialized design. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do I know if my property is in a flood zone in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Flood zone designations are available through FEMA Flood Maps or your local building 
                  department. For official confirmation of a property&apos;s flood zone designation, 
                  residents can consult their insurance agent or contact Palm Beach County Building Division. Common flood zones include AE, VE, AH, AO, A, and X zones, each with 
                  specific requirements. We can help assess your property&apos;s flood zone and determine 
                  drainage system requirements, with consideration of hurricane preparedness.
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
              <a href="/services/drainage-stormwater-solutions/flood-prone-coastal-drainage/" className={styles.backLink}>
                ← View Flood-Prone and Coastal Property Drainage (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/west-palm-beach/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to West Palm Beach Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your West Palm Beach Flood-Prone or Coastal Property?"
        description="Get a free quote for your flood-prone or coastal property drainage in Palm Beach County. We'll coordinate licensed contractors experienced in Palm Beach County conditions, Unified Land Development Code (ULDC) compliance, FEMA flood zone compliance, Base Flood Elevation (BFE) requirements, Coastal High Hazard Area (V Zone) standards, storm surge protection, Building Division permits, Environmental Resources Management (ERM) review, and regulatory compliance to design and install specialized drainage systems that protect your property from flooding and storm surge."
        showPhone={true}
      />
    </main>
  )
}

