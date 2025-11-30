import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Cut and Fill and Mass Earthmoving in West Palm Beach, FL | Palm Beach County',
  description: 'Large-scale earthmoving and cut/fill operations for site balancing in Palm Beach County. Mass earthmoving services for commercial and residential projects.',
  openGraph: {
    title: 'Cut and Fill and Mass Earthmoving in West Palm Beach, FL | Palm Beach County',
    description: 'Large-scale earthmoving and cut/fill operations for site balancing in Palm Beach County.',
    url: `${siteConfig.url}/service-areas/west-palm-beach/site-work-site-development/cut-fill-mass-earthmoving/`,
  },
}

export default function WestPalmBeachCutFillMassEarthmovingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Cut and Fill and Mass Earthmoving in West Palm Beach, FL"
        subtitle="Large-scale earthmoving and cut/fill operations for site balancing throughout Palm Beach County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Cut and fill and mass earthmoving services in West Palm Beach, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our cut and fill and mass earthmoving services in Palm Beach County serve developers, general 
              contractors, commercial property owners, and custom home builders who need large-scale earthmoving 
              operations for site balancing and elevation adjustments throughout Palm Beach County, including 
              Wellington, Royal Palm Beach, The Acreage, Loxahatchee, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re developing a large commercial site in West Palm Beach, preparing a subdivision 
              in Wellington, or need significant elevation changes for a custom home in Palm Beach, we coordinate 
              contractors with the heavy equipment and expertise to handle mass earthmoving efficiently, navigating 
              Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, Unified 
              Land Development Code (ULDC) compliance, and SFWMD Environmental Resource Permits.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Palm Beach County</h3>
              <p className={styles.highlightText}>
                Cut and fill and mass earthmoving projects in Palm Beach County typically range from 
                <strong> $50,000</strong> for moderate site balancing to <strong>$500,000+</strong> for 
                large-scale earthmoving operations requiring extensive cut and fill volumes and specialized 
                equipment. Projects involving development work as described in Florida Statute 380.04 require 
                a development permit prior to the issuance of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Cut and Fill and Mass Earthmoving Includes in Palm Beach County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Balancing</h3>
              <p className={styles.serviceDescription}>
                Cut and fill operations to balance site elevations throughout Palm Beach County, moving earth from 
                high areas to low areas to achieve proper grades and drainage slopes. Coordination of mass 
                earthmoving to minimize import/export of materials, accounting for high water table conditions 
                and flood zone requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Mass Grading</h3>
              <p className={styles.serviceDescription}>
                Large-scale grading operations using heavy equipment to achieve site-wide elevations and grades 
                throughout Palm Beach County. Includes rough grading for entire sites and fine grading for specific 
                areas requiring precise elevations, with compliance to Palm Beach County building code requirements 
                and Unified Land Development Code (ULDC) standards.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cut Operations</h3>
              <p className={styles.serviceDescription}>
                Excavation and removal of earth from high areas to achieve required elevations throughout Palm Beach 
                County. Includes proper handling of cut materials for use as fill or export, with attention to 
                soil quality, compaction requirements, and SFWMD Environmental Resource Permit compliance for 
                activities affecting state waters and wetlands.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fill Operations</h3>
              <p className={styles.serviceDescription}>
                Placement and compaction of fill materials in low areas to achieve required elevations throughout 
                Palm Beach County. Includes proper soil selection, placement, and compaction to meet engineering 
                specifications, Base Flood Elevation (BFE) compliance, and ensure stability in high water table 
                conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Import/Export Coordination</h3>
              <p className={styles.serviceDescription}>
                Coordination of soil import when additional fill is needed or export when excess cut materials 
                must be removed throughout Palm Beach County. Includes sourcing quality fill materials meeting Palm 
                Beach County building codes, proper disposal of excess materials, and compliance with Unified Land 
                Development Code (ULDC) requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Compaction and Testing</h3>
              <p className={styles.serviceDescription}>
                Proper compaction of fill materials using heavy equipment and compaction testing to ensure fill 
                meets engineering specifications throughout Palm Beach County. Includes density testing and quality 
                control to ensure long-term stability, with particular attention to areas supporting structures 
                and flood zone compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Cut and Fill Considerations</h2>
            <p className={styles.text}>
              Cut and fill and mass earthmoving operations in Palm Beach County require specialized planning and 
              execution:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in Florida 
                Statute 380.04 require a development permit prior to the issuance of a building permit. This is 
                a critical prerequisite for large-scale earthmoving operations in Palm Beach County.
              </li>
              <li>
                <strong>Building Division Permits:</strong> Large-scale earthmoving projects require Building 
                Division permits from Palm Beach County Building Division. Building permits must be obtained 
                before beginning construction, and the Building Division reviews plans to ensure compliance with 
                the Florida Building Code and Palm Beach County requirements.
              </li>
              <li>
                <strong>Environmental Resources Management (ERM):</strong> Large-scale earthmoving projects may 
                require Environmental Resources Management (ERM) review for projects affecting wetlands, protected 
                species, or environmentally sensitive areas. ERM ensures that proposed developments comply with the 
                Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Large-scale earthmoving operations affecting 
                state waters and wetlands require SFWMD Environmental Resource Permits. As of June 28, 2024, new 
                water quality performance standards were implemented. We coordinate permit applications and ensure 
                compliance throughout operations.
              </li>
              <li>
                <strong>Unified Land Development Code (ULDC):</strong> Palm Beach County&apos;s Unified Land Development 
                Code (ULDC) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas, including flood zones and stormwater management systems. Large-scale 
                earthmoving must comply with these requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> Palm Beach County&apos;s high water table requires specialized 
                dewatering techniques and foundation design for cut and fill operations, with SFWMD Environmental 
                Resource Permits required for dewatering activities affecting state waters.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Many sites in Palm Beach County are in FEMA flood zones requiring 
                specific elevation requirements and Base Flood Elevation (BFE) compliance for cut and fill operations. 
                Fill placement must meet flood zone regulations.
              </li>
              <li>
                <strong>Soil Analysis:</strong> Understanding soil types and properties is critical for cut and fill 
                operations in Palm Beach County. Different soils have different compaction characteristics and may require 
                special handling or treatment, particularly in coastal areas with sandy soils.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> Cut and fill operations must meet engineering specifications 
                for elevations, slopes, and compaction. Our contractors work closely with engineers to ensure compliance 
                with Palm Beach County building code requirements.
              </li>
              <li>
                <strong>Drainage Planning:</strong> Proper cut and fill operations must account for drainage requirements, 
                ensuring water flows away from structures and toward appropriate drainage systems, meeting SFWMD 
                Environmental Resource Permit requirements and Unified Land Development Code (ULDC) standards.
              </li>
              <li>
                <strong>Permit Processing:</strong> Palm Beach County permit processing times vary based on 
                project complexity and Environmental Resources Management (ERM) review requirements. Building 
                Division and ERM review can add time to projects. We coordinate permit applications to minimize 
                delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Cut and Fill Process in Palm Beach County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures efficient and effective cut and fill operations in Palm Beach County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Site Analysis:</strong> We review engineering drawings, survey data, and site conditions to 
                understand cut and fill requirements in Palm Beach County and develop an efficient earthmoving plan that 
                minimizes import/export, accounting for flood zones, high water table, and environmental considerations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits as 
                described in Florida Statute 380.04, which must be obtained prior to the issuance of building permits 
                for large-scale earthmoving operations in Palm Beach County.
              </li>
              <li>
                <strong>Palm Beach County ERM Coordination:</strong> We help identify required Environmental Resources 
                Management (ERM) review and coordinate with Palm Beach County ERM to ensure proposed earthmoving operations 
                comply with the Unified Land Development Code (ULDC) and environmental protection requirements.
              </li>
              <li>
                <strong>Soil Testing:</strong> We coordinate soil testing to understand soil properties and determine 
                appropriate handling, compaction, and treatment requirements for cut and fill materials in Palm Beach County, 
                with particular attention to coastal soil conditions and high water table considerations.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify and coordinate required permits including Building 
                Division permits, SFWMD Environmental Resource Permits for activities affecting state waters and wetlands, 
                Unified Land Development Code (ULDC) compliance, and local approvals for large-scale earthmoving operations. 
                We coordinate with Palm Beach County Building Division, ERM, SFWMD, and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have the heavy 
                equipment and expertise to handle mass earthmoving efficiently in Palm Beach County and meet engineering 
                specifications, including high water table conditions and flood zone requirements.
              </li>
              <li>
                <strong>Execution:</strong> Contractors perform cut and fill operations following the earthmoving plan, 
                with careful attention to elevations, compaction, and quality control to ensure long-term stability, 
                accounting for Palm Beach County weather patterns and permit processing timelines.
              </li>
              <li>
                <strong>Quality Control:</strong> We monitor progress and coordinate testing to ensure fill materials meet 
                compaction requirements and engineering specifications, with particular attention to areas supporting structures, 
                flood zone compliance, and Base Flood Elevation (BFE) requirements.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Palm Beach County Mass Earthmoving Areas</h2>
            <p className={styles.text}>
              We coordinate cut and fill and mass earthmoving services throughout Palm Beach County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Growing Suburban Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Wellington</li>
                  <li>Royal Palm Beach</li>
                  <li>The Acreage</li>
                  <li>Loxahatchee</li>
                  <li>Greenacres</li>
                  <li>Lake Worth</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Western Palm Beach County Development</h3>
                <ul className={styles.locationItems}>
                  <li>Belle Glade</li>
                  <li>Pahokee</li>
                  <li>South Bay</li>
                  <li>Clewiston</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Urban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>West Palm Beach</li>
                  <li>Palm Beach</li>
                  <li>Palm Beach Gardens</li>
                  <li>Jupiter</li>
                  <li>Boynton Beach</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Project Types</h3>
                <ul className={styles.locationItems}>
                  <li>Commercial Site Balancing</li>
                  <li>Subdivision Development</li>
                  <li>Custom Home Elevations</li>
                  <li>Infrastructure Projects</li>
                  <li>Flood Zone Elevations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for cut and fill operations in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Cut and fill operations in Palm Beach County may require development permits as described in Florida Statute 
                  380.04 (obtained prior to building permit issuance), Building Division permits from Palm Beach County Building 
                  Division, Environmental Resources Management (ERM) review for projects affecting wetlands or environmentally 
                  sensitive areas, SFWMD Environmental Resource Permits for activities affecting state waters and wetlands, 
                  Unified Land Development Code (ULDC) compliance, and flood zone approvals. We help identify and coordinate all 
                  required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does cut and fill cost in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Cut and fill costs in Palm Beach County vary based on the volume of earth moved, site conditions, high water 
                  table considerations, flood zone requirements, and equipment requirements. Projects typically range from 
                  $50,000 for moderate operations to $500,000+ for large-scale mass earthmoving. Palm Beach County permit 
                  processing, including ERM review, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about high water table considerations for cut and fill in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Palm Beach County&apos;s high water table requires specialized dewatering techniques and foundation design for 
                  cut and fill operations. SFWMD Environmental Resource Permits are required for dewatering activities 
                  affecting state waters. Fill placement must account for groundwater conditions and may require special 
                  compaction techniques. We coordinate with contractors experienced in high water table conditions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you handle soil import or export in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we coordinate soil import when additional fill is needed or export when excess cut materials must be 
                  removed throughout Palm Beach County. We work to minimize import/export by maximizing on-site material use, 
                  reducing costs and environmental impact. All materials must meet Palm Beach County building code requirements 
                  and Unified Land Development Code (ULDC) standards.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about flood zone compliance for cut and fill in Palm Beach County?</h3>
                <p className={styles.faqAnswer}>
                  Many sites in Palm Beach County are in FEMA flood zones requiring specific elevation requirements and Base 
                  Flood Elevation (BFE) compliance for cut and fill operations. Fill placement must meet flood zone 
                  regulations, and cut operations must not lower elevations below required BFE. We ensure all operations 
                  comply with flood zone requirements and coordinate elevation certificates as needed.
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
              <a href="/services/site-work-site-development/cut-fill-mass-earthmoving/" className={styles.backLink}>
                ← View Cut and Fill and Mass Earthmoving (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/west-palm-beach/site-work-site-development/" className={styles.backLink}>
                ← Back to West Palm Beach Site Work Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your West Palm Beach Cut and Fill Project?"
        description="Get a free quote for your cut and fill or mass earthmoving project in Palm Beach County. We'll coordinate licensed contractors with heavy equipment who understand Palm Beach County Building Division permits, Environmental Resources Management (ERM) review, Unified Land Development Code (ULDC) compliance, SFWMD Environmental Resource Permits, development permits, and high water table conditions."
        showPhone={true}
      />
    </main>
  )
}

