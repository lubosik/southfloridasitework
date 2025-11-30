import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Flood-Prone & Coastal Property Drainage | South FL',
  description: 'Specialized drainage solutions for flood-prone and coastal properties across South Florida. Elevated systems, flood-resistant materials, and storm surge protection.',
  openGraph: {
    title: 'Flood-Prone & Coastal Property Drainage | South FL',
    description: 'Specialized drainage solutions for flood-prone and coastal properties across South Florida.',
    url: `${siteConfig.url}/services/drainage-stormwater-solutions/flood-prone-coastal-drainage/`,
  },
}

export default function FloodProneCoastalDrainagePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Flood-Prone and Coastal Property Drainage</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Specialized drainage solutions for flood-prone properties and coastal areas across 
                South Florida, including elevated drainage systems, flood-resistant materials, and 
                designs that account for high water tables and storm surge.
              </p>
              <p className={styles.description}>
                Flood-prone and coastal properties face unique drainage challenges including storm 
                surge, high water tables, and saltwater intrusion. Our network of licensed contractors 
                has the expertise to design and install drainage systems that protect properties in 
                these challenging environments.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/flood-prone-coastal.jpg"
                alt="Flood-prone and coastal property drainage solutions in South Florida"
                fill
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Flood-prone and coastal property drainage services are essential for property owners, 
              homeowners, commercial property managers, and anyone with properties in flood zones or 
              coastal areas that require specialized drainage solutions.
            </p>
            <p className={styles.text}>
              Whether you&apos;re dealing with flooding from storm surge, high water tables, or 
              coastal conditions, specialized drainage systems can protect your property. We coordinate 
              contractors with the expertise to design and install drainage systems that account for 
              flood zones, coastal conditions, and regulatory requirements.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Flood-prone and coastal property drainage projects typically range from <strong>$50,000 to $150,000</strong> for 
                residential properties, and <strong>$150,000 to $500,000+</strong> for commercial properties 
                or large-scale systems depending on property size, flood zone requirements, and 
                drainage system complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Flood-Prone and Coastal Property Drainage Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Flood Zone Assessment</h3>
                <p className={styles.serviceDescription}>
                  Assessment of flood zone designation, base flood elevation, and drainage 
                  requirements. Assessment identifies flood risks and determines drainage system 
                  design requirements to protect properties.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Elevated Drainage Systems</h3>
                <p className={styles.serviceDescription}>
                  Design and installation of elevated drainage systems that function during flood 
                  events. Elevated systems ensure drainage continues to operate when water levels 
                  rise, protecting properties from flood damage.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Flood-Resistant Materials</h3>
                <p className={styles.serviceDescription}>
                  Use of flood-resistant materials including corrosion-resistant pipes, elevated 
                  structures, and materials designed for saltwater exposure. Materials ensure 
                  drainage systems withstand flood conditions and coastal environments.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Storm Surge Protection</h3>
                <p className={styles.serviceDescription}>
                  Design and installation of drainage systems that account for storm surge and 
                  wave action. Storm surge protection ensures drainage systems function during 
                  extreme weather events and protect properties from coastal flooding.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>High Water Table Management</h3>
                <p className={styles.serviceDescription}>
                  Design and installation of drainage systems that effectively manage high water 
                  tables common in coastal areas. High water table management prevents water from 
                  rising to the surface and protects properties from groundwater flooding.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>FEMA Compliance</h3>
                <p className={styles.serviceDescription}>
                  Design and installation of drainage systems that comply with FEMA requirements 
                  and local building codes. FEMA compliance ensures properties meet flood zone 
                  regulations and may reduce flood insurance costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Flood Zone and Coastal Considerations</h2>
            <p className={styles.text}>
              Flood-prone and coastal properties require specialized drainage solutions:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Flood Zone Designations:</strong> Properties in flood zones (A, AE, V, VE) 
                require drainage systems that comply with FEMA requirements and local building codes. 
                Systems must account for base flood elevations and may require elevated structures.
              </li>
              <li>
                <strong>Storm Surge:</strong> Coastal properties face storm surge during hurricanes 
                and tropical storms. Drainage systems must be designed to function during surge 
                events and protect properties from saltwater intrusion.
              </li>
              <li>
                <strong>High Water Tables:</strong> Coastal areas often have very high water tables 
                that can cause groundwater flooding. Drainage systems must effectively manage high 
                water tables and prevent water from rising to the surface.
              </li>
              <li>
                <strong>Saltwater Intrusion:</strong> Coastal drainage systems must resist saltwater 
                corrosion and intrusion. Materials and designs must account for saltwater exposure 
                and maintain function in coastal environments.
              </li>
              <li>
                <strong>Elevation Requirements:</strong> FEMA requirements may specify minimum 
                elevations for structures and drainage features. Drainage systems must comply with 
                elevation requirements and may need to be elevated above base flood elevations.
              </li>
              <li>
                <strong>Erosion Control:</strong> Coastal properties face additional erosion risks 
                from wave action and storm surge. Drainage systems must include erosion control 
                measures to protect properties and maintain function.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Coastal Drainage Considerations</h2>
            <p className={styles.text}>
              Flood-prone and coastal property drainage in South Florida requires specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>FEMA Requirements:</strong> Properties in flood zones must comply with FEMA 
                requirements including base flood elevations, elevation certificates, and drainage 
                system specifications. Compliance may reduce flood insurance costs and protect 
                properties.
              </li>
              <li>
                <strong>Coastal Building Codes:</strong> Coastal properties must comply with 
                Florida Building Code requirements for coastal construction including wind loads, 
                flood loads, and corrosion resistance. Drainage systems must meet code requirements.
              </li>
              <li>
                <strong>SFWMD Permits:</strong> Coastal drainage projects may require SFWMD 
                environmental resource permits, especially those involving connections to surface 
                waters or significant land disturbance. Permits ensure compliance with water 
                management requirements.
              </li>
              <li>
                <strong>Material Selection:</strong> Coastal drainage systems require materials 
                resistant to saltwater corrosion including stainless steel, PVC, or specialized 
                coatings. Material selection affects system longevity and performance in coastal 
                environments.
              </li>
              <li>
                <strong>Maintenance Requirements:</strong> Coastal drainage systems require more 
                frequent maintenance due to saltwater exposure and storm damage. Maintenance 
                includes cleaning, inspection, and replacement of corroded components.
              </li>
              <li>
                <strong>Emergency Preparedness:</strong> Coastal drainage systems must be designed 
                to function during extreme weather events. Emergency preparedness includes backup 
                systems, elevated structures, and storm-resistant designs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Coastal Drainage Installation Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your flood-prone or coastal property drainage system 
              is designed and installed properly:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Flood Zone Assessment:</strong> We assess your property&apos;s flood zone 
                designation, base flood elevation, and drainage requirements. Assessment identifies 
                flood risks and determines system design requirements.
              </li>
              <li>
                <strong>System Design:</strong> We coordinate with engineers to design drainage 
                systems that account for flood zones, coastal conditions, and regulatory 
                requirements. Design includes elevated structures, flood-resistant materials, and 
                storm surge protection.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required FEMA, SFWMD, and 
                county permits for coastal drainage projects and coordinate the permit application 
                process. Permits ensure compliance with regulatory requirements.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have expertise in coastal drainage installation and FEMA compliance.
              </li>
              <li>
                <strong>Installation:</strong> Contractors install drainage systems including 
                elevated structures, flood-resistant materials, and storm surge protection. 
                Installation ensures systems function during flood events and protect properties.
              </li>
              <li>
                <strong>FEMA Compliance Verification:</strong> We coordinate elevation certificates 
                and FEMA compliance verification to ensure properties meet flood zone requirements. 
                Compliance may reduce flood insurance costs.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final inspections to ensure 
                drainage systems meet specifications and regulatory requirements. Systems are ready 
                for operation after final approval.
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
                <h3 className={styles.faqQuestion}>What is base flood elevation and why does it matter?</h3>
                <p className={styles.faqAnswer}>
                  Base flood elevation (BFE) is the elevation to which floodwater is anticipated 
                  to rise during a base flood (1% annual chance flood). Properties in flood zones 
                  must have structures and drainage features elevated above BFE to comply with 
                  FEMA requirements. Compliance may reduce flood insurance costs and protect 
                  properties from flood damage.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does coastal drainage installation cost?</h3>
                <p className={styles.faqAnswer}>
                  Coastal drainage installation costs vary based on property size, flood zone 
                  requirements, and system complexity. Typical residential properties range from 
                  $50,000 to $150,000, while commercial properties or large-scale systems can range 
                  from $150,000 to $500,000+ depending on scope. Factors affecting cost include 
                  elevation requirements, flood-resistant materials, and storm surge protection.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need FEMA permits for coastal drainage?</h3>
                <p className={styles.faqAnswer}>
                  Properties in flood zones may require FEMA compliance and elevation certificates 
                  for drainage systems. Coastal drainage projects may also require SFWMD 
                  environmental resource permits. We help identify and coordinate all required 
                  permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can drainage systems protect against storm surge?</h3>
                <p className={styles.faqAnswer}>
                  Drainage systems can help protect properties from storm surge by managing water 
                  flow and preventing flooding. However, extreme storm surge may overwhelm drainage 
                  systems. Proper design including elevated structures, flood-resistant materials, 
                  and storm surge protection can improve protection. We assess your specific 
                  situation and recommend the best approach.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do I know if my property is in a flood zone?</h3>
                <p className={styles.faqAnswer}>
                  Flood zone designations are available through FEMA Flood Maps or your local 
                  building department. Common flood zones include A, AE, V, and VE zones, each with 
                  specific requirements. We can help assess your property&apos;s flood zone and 
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
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We coordinate flood-prone and coastal property drainage across all of South Florida. 
              Select your location to learn more about specialized drainage services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/drainage-stormwater-solutions/flood-prone-coastal-drainage/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/service-areas/fort-lauderdale/drainage-stormwater-solutions/flood-prone-coastal-drainage/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/flood-prone-coastal-drainage/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/drainage-stormwater-solutions/flood-prone-coastal-drainage/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/drainage-stormwater-solutions/" className={styles.backLink}>
                ← Back to Drainage and Stormwater Solutions
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Flood-Prone or Coastal Property?"
        description="Get a free quote for your flood-prone or coastal property drainage. We'll coordinate licensed contractors to design and install specialized drainage systems that protect your property from flooding and storm surge."
        showPhone={true}
      />
    </main>
  )
}

