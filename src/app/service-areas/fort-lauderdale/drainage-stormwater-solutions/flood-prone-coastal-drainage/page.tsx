import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Flood-Prone & Coastal Property Drainage in Fort Lauderdale, FL | Broward County',
  description: 'Specialized drainage solutions for flood-prone and coastal properties in Broward County. Elevated systems, flood-resistant materials, and storm surge protection.',
  openGraph: {
    title: 'Flood-Prone & Coastal Property Drainage in Fort Lauderdale, FL | Broward County',
    description: 'Specialized drainage solutions for flood-prone and coastal properties in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/drainage-stormwater-solutions/flood-prone-coastal-drainage/`,
  },
}

export default function FortLauderdaleFloodProneCoastalDrainagePage() {
  return (
    <main>
      <HeroWithQuote
        title="Flood-Prone and Coastal Property Drainage in Fort Lauderdale, FL"
        subtitle="Specialized drainage solutions for flood-prone properties and coastal areas across Broward County, including elevated drainage systems, flood-resistant materials, and designs that account for high water tables and storm surge"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Flood-prone and coastal property drainage solutions in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Flood-prone and coastal property drainage services in Broward County are essential for 
              property owners, homeowners, commercial property managers, and anyone with properties in 
              flood zones or coastal areas that require specialized drainage solutions throughout Broward 
              County, including Fort Lauderdale, Hollywood, Weston, Plantation, and other communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with flooding from storm surge in Fort Lauderdale Beach, high water 
              tables in Hollywood, or coastal conditions in Pompano Beach, specialized drainage systems can 
              protect your property. We coordinate contractors with expertise in Broward County drainage 
              requirements, Development & Environmental Review (DER), Natural Resource Protection Code 
              compliance, FEMA flood zone compliance, Base Flood Elevation (BFE) requirements, storm event 
              protection, and storm surge protection to design and install drainage systems that account 
              for flood zones, coastal conditions, and regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Flood-prone and coastal property drainage projects in Broward County typically range 
                from <strong> $50,000 to $150,000</strong> for residential properties, and 
                <strong> $150,000 to $500,000+</strong> for commercial properties or large-scale systems 
                depending on property size, flood zone requirements, Base Flood Elevation (BFE) compliance 
                needs, storm event protection requirements (100-year, 3-day storm event for structures), 
                storm surge protection requirements, and drainage system complexity. Projects requiring 
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
          <h2 className={styles.heading}>What Flood-Prone and Coastal Property Drainage Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood Zone Assessment</h3>
              <p className={styles.serviceDescription}>
                Assessment of flood zone designation, Base Flood Elevation (BFE), and drainage 
                requirements specific to Broward County conditions. Assessment identifies flood risks and 
                determines drainage system design requirements to protect properties, with consideration 
                of storm event protection (100-year, 3-day storm event for structures) and climate 
                resilience and sea level rise considerations (50-year planning horizon, ~2 feet 
                projection).
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Elevated Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of elevated drainage systems that function during flood events, 
                meeting Base Flood Elevation (BFE) requirements, storm event protection (100-year, 3-day 
                storm event for structures), and Broward County building codes. Elevated systems ensure 
                drainage continues to operate when water levels rise, protecting properties from flood 
                damage, especially important in Coastal High Hazard Areas (V Zones) requiring buildings 
                on piles or columns.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood-Resistant Materials</h3>
              <p className={styles.serviceDescription}>
                Use of flood-resistant materials including corrosion-resistant pipes, elevated structures, 
                and materials designed for saltwater exposure, meeting Broward County Natural Resource 
                Protection Code requirements. Materials ensure drainage systems withstand flood conditions 
                and coastal environments, especially important in areas along the Atlantic Ocean and 
                Intracoastal Waterway.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Storm Surge Protection</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that account for storm surge and wave action, 
                meeting Broward County&apos;s Coastal High Hazard Area (V Zone) requirements and climate 
                resilience considerations. Storm surge protection ensures drainage systems function during 
                extreme weather events and protect properties from coastal flooding, with special 
                floodplain management requirements in V Zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>High Water Table Management</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that effectively manage high water tables 
                common in coastal areas, especially important given Broward County&apos;s high water table 
                which can be within 2-3 feet of the surface. High water table management prevents water 
                from rising to the surface and protects properties from groundwater flooding, especially 
                in areas like Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>FEMA Compliance</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that comply with FEMA requirements and 
                Broward County building codes, including Base Flood Elevation (BFE) compliance, storm 
                event protection (100-year, 3-day storm event for structures), and elevation 
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
            <h2 className={styles.heading}>Broward County Flood Zone and Coastal Considerations</h2>
            <p className={styles.text}>
              Flood-prone and coastal property drainage in Broward County requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>FEMA Flood Zone Classifications:</strong> Broward County properties are 
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
                above BFE to comply with FEMA requirements and Broward County building codes, with storm 
                event protection (100-year, 3-day storm event for structures). Compliance may reduce 
                flood insurance costs and protect properties from flood damage.
              </li>
              <li>
                <strong>Coastal High Hazard Areas (V Zones):</strong> Areas within Broward County along 
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
                projects in Broward County.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Flood-prone and coastal 
                property drainage projects typically require Development & Environmental Review through 
                ePermits OneStop for applicable building permits. All DER submittals are only accepted 
                electronically. Broward County&apos;s Planning and Development Management Division ensures 
                that proposed developments comply with the Broward County Land Development Code and 
                Natural Resource Protection Code.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
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
                <strong>High Water Tables:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects coastal drainage design and may 
                require deeper excavation or dewatering systems (SFWMD Environmental Resource Permits). 
                Water table conditions determine drainage feature depths and may affect system function, 
                especially in coastal areas like Fort Lauderdale Beach, Hollywood Beach, Pompano Beach, 
                and Deerfield Beach.
              </li>
              <li>
                <strong>Saltwater Intrusion:</strong> Coastal drainage systems must resist saltwater 
                corrosion and intrusion, especially important in areas along the Atlantic Ocean and 
                Intracoastal Waterway. Materials and designs must account for saltwater exposure and 
                maintain function in coastal environments, with corrosion-resistant materials required.
              </li>
              <li>
                <strong>Storm Event Protection Requirements:</strong> Broward County requires that first 
                floor elevations of all structures within drainage districts must protect structures from 
                a 100-year, 3-day storm event, while roadway and parking lot elevations must be 
                protected from a 10-year, 3-day storm event. Coastal drainage systems must be designed to 
                meet these requirements and integrate with Broward County&apos;s three-tier infrastructure 
                framework.
              </li>
              <li>
                <strong>Climate Resilience and Sea Level Rise:</strong> Broward County has implemented a 
                50-year planning horizon for sea level rise, with projections of approximately 2 feet of 
                sea level rise. Coastal drainage design must account for climate resilience and sea level 
                rise considerations, ensuring long-term functionality and compliance with regulatory 
                requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Flood-Prone and Coastal Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate flood-prone and coastal property drainage throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal High Hazard Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale Beach</li>
                  <li>Hollywood Beach</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood Zone AE Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Las Olas Boulevard</li>
                  <li>Downtown Fort Lauderdale</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                  <li>Davie</li>
                  <li>Miramar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Coastal Drainage Installation Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your flood-prone or coastal property drainage system is 
              designed and installed properly and meets all Broward County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Flood Zone Assessment:</strong> We assess your property&apos;s flood zone 
                designation, Base Flood Elevation (BFE), and drainage requirements specific to Broward 
                County conditions. Assessment identifies flood risks and determines system design 
                requirements, with consideration of storm event protection (100-year, 3-day storm event 
                for structures) and climate resilience and sea level rise considerations (50-year 
                planning horizon, ~2 feet projection).
              </li>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design drainage systems 
                that account for flood zones, coastal conditions, storm event protection requirements 
                (100-year, 3-day storm event for structures; 10-year, 3-day storm event for roadways and 
                parking lots), Natural Resource Protection Code compliance, and regulatory requirements. 
                Design includes elevated structures, flood-resistant materials, storm surge protection, 
                and Base Flood Elevation (BFE) compliance, with special considerations for Coastal High 
                Hazard Areas (V Zones) and integration with Broward County&apos;s three-tier infrastructure 
                framework.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for flood-prone and coastal property drainage projects in 
                Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits 
                including Uniform Building Permit Applications (updated November 14, 2025), Development 
                & Environmental Review (DER) through ePermits OneStop, FEMA compliance and elevation 
                certificates, SFWMD Environmental Resource Permits for coastal drainage projects, Natural 
                Resource Protection Code compliance, and coordinate with regulatory agencies. All DER 
                submittals are only accepted electronically. Permits are valid for 180 days from the date 
                of issuance. Permits ensure compliance with regulatory requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in coastal drainage installation, FEMA compliance, and Broward County 
                requirements, including experience with high water table conditions, storm surge 
                protection, Base Flood Elevation (BFE) compliance, and storm event protection.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including elevated 
                structures, flood-resistant materials, and storm surge protection, meeting Base Flood 
                Elevation (BFE) requirements, storm event protection (100-year, 3-day storm event for 
                structures), and Broward County building codes. Installation ensures systems function 
                during flood events and protect properties, with special attention to Coastal High Hazard 
                Areas (V Zones) and integration with Broward County&apos;s three-tier infrastructure 
                framework.
              </li>
              <li>
                <strong>FEMA Compliance Verification:</strong> We coordinate elevation certificates and 
                FEMA compliance verification to ensure properties meet flood zone requirements, with 
                mandatory flood insurance requirements in flood zones. Compliance may reduce flood 
                insurance costs and protect properties from flood damage, with storm event protection 
                (100-year, 3-day storm event for structures) compliance.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with SFWMD, FEMA, 
                Broward County Building Code Division or municipal building departments, and drainage 
                districts where applicable to ensure drainage systems meet specifications and regulatory 
                requirements including Base Flood Elevation (BFE) compliance, storm event protection, and 
                Natural Resource Protection Code standards. Systems are ready for operation after final 
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
                <h3 className={styles.faqQuestion}>What is Base Flood Elevation (BFE) and why does it matter in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Base Flood Elevation (BFE) is the elevation to which floodwater is anticipated to rise 
                  during a base flood (1% annual chance flood). BFE data is derived from detailed analyses 
                  for zones where such information is available, particularly in AE and AO zones where BFE 
                  or average flood depths are shown at selected intervals. Properties in flood zones must 
                  have structures and drainage features elevated above BFE to comply with FEMA requirements 
                  and Broward County building codes, with storm event protection (100-year, 3-day storm 
                  event for structures). Compliance may reduce flood insurance costs and protect 
                  properties from flood damage. BFE data is critical for permit applications for coastal 
                  properties and development projects in Broward County.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the different flood zones in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Broward County properties are classified by FEMA Flood Insurance Rate Maps (FIRMs). 
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
                <h3 className={styles.faqQuestion}>What are Coastal High Hazard Areas (V Zones) in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Areas within Broward County along the Atlantic Ocean, Intracoastal Waterway, and other 
                  coastal zones are classified as Coastal High Hazard Areas (V Zones), which require that 
                  all buildings be elevated on piles or columns. Special floodplain management 
                  requirements apply in these zones to mitigate storm surge and wave action risks. 
                  Drainage systems must be designed to function in these challenging environments, with 
                  elevated structures and flood-resistant materials required. Properties in V Zones face 
                  at least a one-in-four chance of flooding during a 30-year mortgage period, with 
                  mandatory flood insurance requirements. Climate resilience and sea level rise 
                  considerations (50-year planning horizon, ~2 feet projection) are incorporated into 
                  design.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does coastal drainage installation cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Coastal drainage installation costs in Broward County vary based on property size, 
                  flood zone requirements, Base Flood Elevation (BFE) compliance needs, storm event 
                  protection requirements (100-year, 3-day storm event for structures), storm surge 
                  protection requirements, and system complexity. Typical residential properties range 
                  from $50,000 to $150,000, while commercial properties or large-scale systems can range 
                  from $150,000 to $500,000+ depending on scope. Factors affecting cost include elevation 
                  requirements, flood-resistant materials, storm surge protection, dewatering needs, and 
                  permit complexity. Projects requiring significant elevation adjustments or meeting 
                  Coastal High Hazard Area (V Zone) requirements often cost more due to additional permit 
                  requirements (SFWMD Environmental Resource Permits) and specialized design. Broward 
                  County permit processing, including DER review through ePermits OneStop, can add time 
                  and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do I know if my property is in a flood zone in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Flood zone designations are available through FEMA Flood Maps or your local building 
                  department. For official confirmation of a property&apos;s flood zone designation, 
                  residents can consult their insurance agent or contact Broward County Building Code 
                  Division. Common flood zones include AE, VE, AH, AO, A, and X zones, each with 
                  specific requirements. We can help assess your property&apos;s flood zone and determine 
                  drainage system requirements, with consideration of storm event protection (100-year, 
                  3-day storm event for structures) and climate resilience and sea level rise 
                  considerations (50-year planning horizon, ~2 feet projection).
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
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Fort Lauderdale Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Fort Lauderdale Flood-Prone or Coastal Property?"
        description="Get a free quote for your flood-prone or coastal property drainage in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Natural Resource Protection Code compliance, FEMA flood zone compliance, Base Flood Elevation (BFE) requirements, Coastal High Hazard Area (V Zone) standards, storm event protection, storm surge protection, DER requirements, and regulatory compliance to design and install specialized drainage systems that protect your property from flooding and storm surge."
        showPhone={true}
      />
    </main>
  )
}

