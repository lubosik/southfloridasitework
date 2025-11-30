import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Flood-Prone & Coastal Property Drainage in Miami, FL | Miami-Dade County',
  description: 'Specialized drainage solutions for flood-prone and coastal properties in Miami-Dade County. Elevated systems, flood-resistant materials, and storm surge protection.',
  openGraph: {
    title: 'Flood-Prone & Coastal Property Drainage in Miami, FL | Miami-Dade County',
    description: 'Specialized drainage solutions for flood-prone and coastal properties in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/drainage-stormwater-solutions/flood-prone-coastal-drainage/`,
  },
}

export default function MiamiFloodProneCoastalDrainagePage() {
  return (
    <main>
      <HeroWithQuote
        title="Flood-Prone and Coastal Property Drainage in Miami, FL"
        subtitle="Specialized drainage solutions for flood-prone properties and coastal areas across Miami-Dade County, including elevated drainage systems, flood-resistant materials, and designs that account for high water tables and storm surge"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Flood-prone and coastal property drainage solutions in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Flood-prone and coastal property drainage services in Miami-Dade County are essential for 
              property owners, homeowners, commercial property managers, and anyone with properties in 
              flood zones or coastal areas that require specialized drainage solutions in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with flooding from storm surge in Miami Beach, high water tables 
              in Aventura, or coastal conditions in Key Biscayne, specialized drainage systems can protect 
              your property. We coordinate contractors with expertise in Miami-Dade County drainage 
              requirements, DERM regulations, FEMA flood zone compliance, Base Flood Elevation (BFE) 
              requirements, and storm surge protection to design and install drainage systems that account 
              for flood zones, coastal conditions, and regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Flood-prone and coastal property drainage projects in Miami-Dade County typically range 
                from <strong> $50,000 to $150,000</strong> for residential properties, and 
                <strong> $150,000 to $500,000+</strong> for commercial properties or large-scale systems 
                depending on property size, flood zone requirements (AE, VE, AH, AO), Base Flood 
                Elevation (BFE) compliance needs, storm surge protection requirements, and drainage 
                system complexity. Projects requiring significant elevation adjustments or meeting 
                Coastal High Hazard Area (V Zone) requirements often cost more due to additional permit 
                requirements and specialized design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Flood-Prone and Coastal Property Drainage Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood Zone Assessment</h3>
              <p className={styles.serviceDescription}>
                Assessment of flood zone designation (AE, VE, AH, AO, A, X), Base Flood Elevation (BFE), 
                and drainage requirements specific to Miami-Dade County conditions. Assessment identifies 
                flood risks and determines drainage system design requirements to protect properties, 
                with approximately 30% of Miami-Dade properties already in flood risk categories.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Elevated Drainage Systems</h3>
              <p className={styles.serviceDescription}>
                Design and installation of elevated drainage systems that function during flood events, 
                meeting Base Flood Elevation (BFE) requirements and Miami-Dade building codes. Elevated 
                systems ensure drainage continues to operate when water levels rise, protecting 
                properties from flood damage, especially important in Coastal High Hazard Areas (V 
                Zones) requiring buildings on piles or columns.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Flood-Resistant Materials</h3>
              <p className={styles.serviceDescription}>
                Use of flood-resistant materials including corrosion-resistant pipes, elevated structures, 
                and materials designed for saltwater exposure, meeting Miami-Dade County requirements. 
                Materials ensure drainage systems withstand flood conditions and coastal environments, 
                especially important in areas along Biscayne Bay and other coastal zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Storm Surge Protection</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that account for storm surge and wave action, 
                meeting Miami-Dade County&apos;s Coastal High Hazard Area (V Zone) requirements. Storm 
                surge protection ensures drainage systems function during extreme weather events and 
                protect properties from coastal flooding, with special floodplain management requirements 
                in V Zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>High Water Table Management</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that effectively manage high water tables 
                common in coastal areas, especially important given Miami-Dade&apos;s high water table 
                which can be within 2-3 feet of the surface. High water table management prevents water 
                from rising to the surface and protects properties from groundwater flooding, especially 
                in areas like Miami Beach, Aventura, and coastal neighborhoods.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>FEMA Compliance</h3>
              <p className={styles.serviceDescription}>
                Design and installation of drainage systems that comply with FEMA requirements and 
                Miami-Dade building codes, including Base Flood Elevation (BFE) compliance and elevation 
                certificates. FEMA compliance ensures properties meet flood zone regulations and may 
                reduce flood insurance costs, with mandatory flood insurance requirements in AE, VE, AH, 
                and AO zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Flood Zone and Coastal Considerations</h2>
            <p className={styles.text}>
              Flood-prone and coastal property drainage in Miami-Dade County requires specialized 
              knowledge of local conditions and regulatory requirements. Approximately 30% of Miami-Dade 
              County properties are already in flood risk categories, with this percentage expected to 
              increase by nearly 10% over the next 30 years:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>FEMA Flood Zone Classifications:</strong> Miami-Dade County properties are 
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
                above BFE to comply with FEMA requirements and Miami-Dade building codes. Compliance 
                may reduce flood insurance costs and protect properties from flood damage.
              </li>
              <li>
                <strong>Coastal High Hazard Areas (V Zones):</strong> Areas within Miami-Dade County 
                along Biscayne Bay and other coastal zones are classified as Coastal High Hazard Areas 
                (V Zones), which require that all buildings be elevated on piles or columns. Special 
                floodplain management requirements apply in these zones to mitigate storm surge and wave 
                action risks. Drainage systems must be designed to function in these challenging 
                environments.
              </li>
              <li>
                <strong>DERM Permits for Coastal Properties:</strong> DERM (Department of Environmental 
                Resources Management) permits are required for coastal properties and development 
                projects, with BFE data critical for permit applications. DERM Plan Review Approval is 
                required for projects requiring Miami-Dade Review under Chapter 24. Coastal drainage 
                projects must account for environmental protection requirements and may require additional 
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
                <strong>High Water Tables:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects coastal drainage design and may 
                require deeper excavation or dewatering systems (DERM Class V Permits). Water table 
                conditions determine drainage feature depths and may affect system function, especially in 
                coastal areas like Miami Beach, Key Biscayne, Bal Harbour, and Aventura.
              </li>
              <li>
                <strong>Saltwater Intrusion:</strong> Coastal drainage systems must resist saltwater 
                corrosion and intrusion, especially important in areas along Biscayne Bay. Materials and 
                designs must account for saltwater exposure and maintain function in coastal environments, 
                with corrosion-resistant materials required.
              </li>
              <li>
                <strong>FPLOS and WQLOS Standards:</strong> Miami-Dade County&apos;s stormwater management 
                criteria include Flood Protection Level of Service (FPLOS) and Water Quality Level of 
                Service (WQLOS) standards. Coastal drainage systems must be designed to meet both 
                components, with proper sizing for the 25-year, 3-day storm event and priority on on-site 
                retention and groundwater recharge.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Flood-Prone and Coastal Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate flood-prone and coastal property drainage throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal High Hazard Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Aventura</li>
                  <li>Surfside</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Flood Zone AE Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Coral Gables</li>
                  <li>Pinecrest</li>
                  <li>Coconut Grove</li>
                  <li>Palmetto Bay</li>
                  <li>South Miami</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Development</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Westchester</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Hialeah</li>
                  <li>Miami Lakes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Coastal Drainage Installation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your flood-prone or coastal property drainage system is 
              designed and installed properly and meets all Miami-Dade County regulatory requirements:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Flood Zone Assessment:</strong> We assess your property&apos;s flood zone 
                designation (AE, VE, AH, AO, A, X), Base Flood Elevation (BFE), and drainage 
                requirements specific to Miami-Dade County conditions. Assessment identifies flood risks 
                and determines system design requirements, with access to Miami-Dade County&apos;s 
                interactive web tool or FEMA Flood Maps for official confirmation.
              </li>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design drainage systems 
                that account for flood zones, coastal conditions, the 25-year, 3-day storm event design 
                criteria, FPLOS/WQLOS standards, and regulatory requirements. Design includes elevated 
                structures, flood-resistant materials, storm surge protection, and Base Flood Elevation 
                (BFE) compliance, with special considerations for Coastal High Hazard Areas (V Zones).
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required permits 
                including DERM Plan Review Approval (for projects requiring Miami-Dade Review under 
                Chapter 24), FEMA compliance and elevation certificates, SFWMD environmental resource 
                permits for coastal drainage projects, RER building permits, and coordinate with 
                regulatory agencies. Permits ensure compliance with regulatory requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in coastal drainage installation, FEMA compliance, and Miami-Dade 
                County requirements, including experience with high water table conditions, storm surge 
                protection, and Base Flood Elevation (BFE) compliance.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including elevated 
                structures, flood-resistant materials, and storm surge protection, meeting Base Flood 
                Elevation (BFE) requirements and Miami-Dade building codes. Installation ensures systems 
                function during flood events and protect properties, with special attention to Coastal 
                High Hazard Areas (V Zones).
              </li>
              <li>
                <strong>FEMA Compliance Verification:</strong> We coordinate elevation certificates and 
                FEMA compliance verification to ensure properties meet flood zone requirements, with 
                mandatory flood insurance requirements in AE, VE, AH, and AO zones. Compliance may 
                reduce flood insurance costs and protect properties from flood damage.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections with DERM, FEMA, 
                SFWMD, and Miami-Dade RER or municipal building departments to ensure drainage systems 
                meet specifications and regulatory requirements including Base Flood Elevation (BFE) 
                compliance and FPLOS/WQLOS standards. Systems are ready for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is Base Flood Elevation (BFE) and why does it matter in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Base Flood Elevation (BFE) is the elevation to which floodwater is anticipated to rise 
                  during a base flood (1% annual chance flood). BFE data is derived from detailed analyses 
                  for zones where such information is available, particularly in AE and AO zones where BFE 
                  or average flood depths are shown at selected intervals. Properties in flood zones must 
                  have structures and drainage features elevated above BFE to comply with FEMA requirements 
                  and Miami-Dade building codes. Compliance may reduce flood insurance costs and protect 
                  properties from flood damage. BFE data is critical for DERM permit applications for 
                  coastal properties and development projects.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the different flood zones in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County properties are classified by FEMA Flood Insurance Rate Maps (FIRMs). 
                  Zone AE (Moderate to High Flooding Risk) corresponds to areas with flood depths greater 
                  than three feet, with a 26% chance of flooding over a 30-year mortgage. Zone VE (High 
                  Flooding Risk) applies to coastal areas with additional hazards from storm waves and 
                  velocity wave action, with at least a one-in-four chance of flooding. Zone AH 
                  (Moderate to High Flooding Risk) designates areas with a 1% annual chance of shallow 
                  flooding, typically from ponding, with average depths ranging from one to three feet. 
                  Zone AO (Sheet Flow) represents areas with a 1% or greater chance of shallow flooding, 
                  usually sheet flow, with average depths of one to three feet. Zone A includes areas 
                  where detailed flood analysis has not been performed. Zone X designates properties 
                  outside the floodplain or with average flood depths less than one foot. Approximately 
                  30% of Miami-Dade properties are already in flood risk categories.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are Coastal High Hazard Areas (V Zones) in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Areas within Miami-Dade County along Biscayne Bay and other coastal zones are classified 
                  as Coastal High Hazard Areas (V Zones), which require that all buildings be elevated 
                  on piles or columns. Special floodplain management requirements apply in these zones 
                  to mitigate storm surge and wave action risks. Drainage systems must be designed to 
                  function in these challenging environments, with elevated structures and flood-resistant 
                  materials required. Properties in V Zones face at least a one-in-four chance of 
                  flooding during a 30-year mortgage period, with mandatory flood insurance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does coastal drainage installation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Coastal drainage installation costs in Miami-Dade County vary based on property size, 
                  flood zone requirements (AE, VE, AH, AO), Base Flood Elevation (BFE) compliance needs, 
                  storm surge protection requirements, and system complexity. Typical residential 
                  properties range from $50,000 to $150,000, while commercial properties or large-scale 
                  systems can range from $150,000 to $500,000+ depending on scope. Factors affecting cost 
                  include elevation requirements, flood-resistant materials, storm surge protection, 
                  dewatering needs, and permit complexity. Projects requiring significant elevation 
                  adjustments or meeting Coastal High Hazard Area (V Zone) requirements often cost more 
                  due to additional permit requirements and specialized design.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do I know if my property is in a flood zone in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Flood zone designations are available through Miami-Dade County&apos;s interactive web 
                  tool, FEMA Flood Maps, or your local building department. For official confirmation of 
                  a property&apos;s flood zone designation, residents can call 305-372-6466 or consult 
                  their insurance agent. Common flood zones include AE, VE, AH, AO, A, and X zones, each 
                  with specific requirements. Approximately 30% of Miami-Dade County properties are 
                  already in flood risk categories, with this percentage expected to increase by nearly 
                  10% over the next 30 years. We can help assess your property&apos;s flood zone and 
                  determine drainage system requirements.
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
              <a href="/service-areas/miami/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Miami Drainage Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Miami Flood-Prone or Coastal Property?"
        description="Get a free quote for your flood-prone or coastal property drainage in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, DERM requirements, FEMA flood zone compliance, Base Flood Elevation (BFE) requirements, Coastal High Hazard Area (V Zone) standards, storm surge protection, and regulatory compliance to design and install specialized drainage systems that protect your property from flooding and storm surge."
        showPhone={true}
      />
    </main>
  )
}

