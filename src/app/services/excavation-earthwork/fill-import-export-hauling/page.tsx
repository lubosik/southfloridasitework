import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Fill Import, Export & Hauling | South Florida',
  description: 'Coordination of fill material import, export, and hauling operations across South Florida. Sourcing, transportation, placement, and compaction services.',
  openGraph: {
    title: 'Fill Import, Export & Hauling | South Florida',
    description: 'Coordination of fill material import, export, and hauling operations across South Florida.',
    url: `${siteConfig.url}/services/excavation-earthwork/fill-import-export-hauling/`,
  },
}

export default function FillImportExportHaulingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Fill Import, Export and Hauling</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Coordination of fill import and export operations, including sourcing suitable fill 
                material, transportation, placement, and compaction to meet project specifications 
                and regulatory requirements across South Florida.
              </p>
              <p className={styles.description}>
                Fill import, export, and hauling operations are essential for projects that require 
                additional fill material or need to remove excess material. Our network of licensed 
                contractors and material suppliers coordinates efficient fill operations that meet 
                engineering specifications and regulatory requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/fill-hauling.jpg"
                alt="Fill import, export, and hauling coordination in South Florida"
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
              Fill import, export, and hauling services are essential for developers, general 
              contractors, property owners, and anyone with projects that require additional fill 
              material or need to remove excess material from site.
            </p>
            <p className={styles.text}>
              Whether you need to import fill for site elevation, export excess material from 
              excavation, or coordinate hauling operations, proper material management is critical 
              for project success. We coordinate contractors and material suppliers to efficiently 
              handle fill operations.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Fill import, export, and hauling projects typically range from <strong>$30,000 to $100,000</strong> for 
                smaller residential projects, and <strong>$100,000 to $500,000+</strong> for large-scale 
                commercial or subdivision projects depending on material volume, transportation 
                distance, and placement requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Fill Import, Export and Hauling Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Sourcing</h3>
                <p className={styles.serviceDescription}>
                  Identification and sourcing of suitable fill material that meets engineering 
                  specifications. Material sourcing includes testing and verification of material 
                  quality, gradation, and suitability for intended use.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Fill Import Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of fill material import operations including material sourcing, 
                  transportation, and delivery to project sites. Import coordination ensures 
                  material arrives on schedule and meets specifications.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Fill Export Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of excess material export operations including material removal, 
                  transportation, and disposal or sale. Export coordination ensures material is 
                  removed efficiently and disposed of properly.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Hauling Operations</h3>
                <p className={styles.serviceDescription}>
                  Coordination of hauling operations using dump trucks, trailers, and specialized 
                  equipment to transport fill material. Hauling operations ensure efficient material 
                  transport with proper scheduling and routing.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Material Placement</h3>
                <p className={styles.serviceDescription}>
                  Placement of fill material in specified locations with proper spreading and 
                  grading. Material placement ensures proper distribution and prepares areas for 
                  compaction.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Compaction and Quality Control</h3>
                <p className={styles.serviceDescription}>
                  Proper compaction of fill material to meet engineering specifications and 
                  regulatory requirements. Compaction ensures fill stability and prevents settlement, 
                  with quality control testing to verify compaction density.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Fill Material</h2>
            <p className={styles.text}>
              Different types of fill material serve specific purposes in construction projects:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Structural Fill:</strong> High-quality fill material with specific 
                gradation and compaction requirements for structural support. Structural fill is 
                used for building pads, foundations, and areas requiring high bearing capacity.
              </li>
              <li>
                <strong>General Fill:</strong> Standard fill material for general site elevation 
                and grading. General fill is suitable for non-structural areas and provides 
                adequate support for landscaping and surface improvements.
              </li>
              <li>
                <strong>Select Fill:</strong> Specially selected fill material meeting specific 
                engineering requirements. Select fill is used for areas requiring specific 
                properties such as drainage, stability, or bearing capacity.
              </li>
              <li>
                <strong>Limestone Fill:</strong> Limestone-based fill material common in South 
                Florida for structural support and drainage. Limestone fill provides good bearing 
                capacity and drainage properties.
              </li>
              <li>
                <strong>Sand Fill:</strong> Sand-based fill material for areas requiring good 
                drainage and compaction. Sand fill is common in South Florida and provides 
                excellent drainage properties.
              </li>
              <li>
                <strong>Recycled Material:</strong> Recycled concrete, asphalt, or other materials 
                processed for use as fill. Recycled material provides cost-effective fill options 
                while meeting engineering specifications.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Fill Operations Considerations</h2>
            <p className={styles.text}>
              Fill import, export, and hauling operations in South Florida require specialized 
              knowledge of local conditions and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Material Quality Requirements:</strong> Fill material must meet engineering 
                specifications for gradation, compaction, and suitability. Material testing ensures 
                fill meets project requirements and regulatory standards.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> Fill operations must comply with county and 
                state regulations for material sourcing, transportation, and placement. Permits may 
                be required for large-scale fill operations or material disposal.
              </li>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table affects 
                fill placement and compaction. Proper compaction is critical to prevent settlement, 
                especially in areas with high water tables.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Fill placement in flood zones must comply 
                with FEMA requirements and may require specific elevations or permits. Flood zone 
                regulations affect fill placement and may restrict certain operations.
              </li>
              <li>
                <strong>Transportation and Access:</strong> Fill operations require proper site 
                access for haul trucks and equipment. Access considerations affect hauling efficiency 
                and may require temporary roads or access improvements.
              </li>
              <li>
                <strong>Environmental Considerations:</strong> Fill operations must consider 
                environmental impacts including dust control, erosion, and water quality. Proper 
                environmental controls ensure compliance and minimize impacts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Fill Import, Export and Hauling Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your fill operations are completed efficiently and 
              meet all specifications:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Assessment:</strong> We assess your project to determine fill 
                requirements, material specifications, and operational needs. Assessment identifies 
                material volume, quality requirements, and placement locations.
              </li>
              <li>
                <strong>Material Sourcing:</strong> We identify and source suitable fill material 
                that meets engineering specifications. Material sourcing includes testing and 
                verification of material quality and suitability.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for fill 
                operations and coordinate with regulatory agencies. Permits ensure compliance with 
                regulations and may be required for large-scale operations.
              </li>
              <li>
                <strong>Contractor and Supplier Selection:</strong> We match your project with 
                licensed contractors and material suppliers who have the right equipment and 
                experience for fill operations.
              </li>
              <li>
                <strong>Hauling Operations:</strong> Hauling operations transport fill material 
                to project sites using dump trucks and specialized equipment. Hauling is 
                coordinated for efficiency with proper scheduling and routing.
              </li>
              <li>
                <strong>Material Placement:</strong> Fill material is placed in specified locations 
                with proper spreading and grading. Placement ensures proper distribution and 
                prepares areas for compaction.
              </li>
              <li>
                <strong>Compaction and Quality Control:</strong> Fill material is compacted to meet 
                engineering specifications with quality control testing to verify compaction density. 
                Compaction ensures fill stability and prevents settlement.
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
                <h3 className={styles.faqQuestion}>What types of fill material are available?</h3>
                <p className={styles.faqAnswer}>
                  Fill material types include structural fill, general fill, select fill, limestone 
                  fill, sand fill, and recycled materials. Material selection depends on engineering 
                  specifications, intended use, and project requirements. We coordinate material 
                  sourcing to ensure fill meets specifications and is suitable for intended use.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does fill import cost?</h3>
                <p className={styles.faqAnswer}>
                  Fill import costs vary based on material type, volume, transportation distance, 
                  and placement requirements. Typical costs range from $15-30 per cubic yard for 
                  general fill to $30-60+ per cubic yard for structural or select fill, including 
                  material, transportation, placement, and compaction. Factors affecting cost include 
                  material quality, hauling distance, and compaction requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for fill operations?</h3>
                <p className={styles.faqAnswer}>
                  Fill operations may require permits from county building departments, especially 
                  for large-scale operations or fill placement in flood zones. Permits ensure 
                  compliance with regulations and may require specific material specifications or 
                  placement requirements. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How is fill material tested for quality?</h3>
                <p className={styles.faqAnswer}>
                  Fill material is tested for gradation, compaction, moisture content, and 
                  suitability for intended use. Testing ensures material meets engineering 
                  specifications and regulatory requirements. Quality control testing during 
                  placement verifies compaction density and ensures fill stability.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long do fill operations take?</h3>
                <p className={styles.faqAnswer}>
                  Fill operation timelines vary based on material volume, transportation distance, 
                  and placement requirements. Typical residential projects take 1-2 weeks, while 
                  large-scale commercial or subdivision projects may take 2-6 weeks depending on 
                  scope. Weather conditions and material availability can affect timelines. We 
                  coordinate operations to complete projects efficiently.
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
              We coordinate fill import, export, and hauling operations across all of South Florida. 
              Select your location to learn more about fill services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/excavation-earthwork/fill-import-export-hauling/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/service-areas/fort-lauderdale/excavation-earthwork/fill-import-export-hauling/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/excavation-earthwork/fill-import-export-hauling/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/excavation-earthwork/fill-import-export-hauling/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/excavation-earthwork/" className={styles.backLink}>
                ← Back to Excavation and Earthwork
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Coordinate Your Fill Operations?"
        description="Get a free quote for your fill import, export, or hauling project. We'll coordinate licensed contractors and material suppliers to efficiently handle your fill operations."
        showPhone={true}
      />
    </main>
  )
}

