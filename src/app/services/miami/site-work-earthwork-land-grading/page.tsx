import type { Metadata } from 'next'
import Image from 'next/image'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work, Earthwork & Land Grading in Miami, FL',
  description: 'Complete site work, earthwork, and land grading services in Miami-Dade County. Licensed contractors for commercial and residential projects.',
  openGraph: {
    title: 'Site Work, Earthwork & Land Grading in Miami, FL',
    description: 'Complete site work, earthwork, and land grading services in Miami-Dade County.',
    url: `${siteConfig.url}/services/miami/site-work-earthwork-land-grading/`,
  },
}

export default function MiamiSiteWorkEarthworkLandGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Site Work, Earthwork and Land Grading in Miami, FL"
        subtitle="Complete site development, earthwork, and grading services for commercial and residential projects across Miami-Dade County"
        backgroundImage="/images/hero/hero-background.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Site Work Services in Miami-Dade County</h2>
            <p className={styles.intro}>
              Miami-Dade County presents unique challenges for site work, earthwork, and land 
              grading projects. With high water tables, extensive flood zones, coastal soils, 
              and strict permitting requirements, successful site development requires specialized 
              expertise and local knowledge.
            </p>
            <p className={styles.text}>
              Our network of licensed contractors has extensive experience working throughout 
              Miami-Dade County, from Miami Beach and Coral Gables to Homestead and the Redland. 
              We understand the local conditions, regulatory requirements, and best practices 
              needed to complete your project successfully.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Miami-Dade County Expertise</h3>
              <p className={styles.highlightText}>
                Our contractors are familiar with Miami-Dade RER (Regulatory and Economic Resources) 
                and DERM (Department of Environmental Resources Management) requirements, flood 
                zone compliance, coastal construction standards, and the unique soil conditions 
                found throughout the county.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Specific Site Work Challenges</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>High Water Table</h3>
                <p className={styles.serviceDescription}>
                  Miami-Dade&apos;s high water table requires specialized dewatering techniques 
                  and foundation design. Our contractors understand local groundwater conditions 
                  and employ appropriate methods for excavation and site preparation.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Flood Zone Compliance</h3>
                <p className={styles.serviceDescription}>
                  Many Miami properties are located in FEMA flood zones requiring specific 
                  elevation requirements and flood-resistant construction. We coordinate projects 
                  to meet Base Flood Elevation (BFE) requirements and obtain necessary permits.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Coastal Soils</h3>
                <p className={styles.serviceDescription}>
                  Coastal areas feature unique soil conditions including limestone bedrock, 
                  sandy soils, and organic materials. Our contractors adapt grading and 
                  excavation techniques to local soil characteristics.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>RER and DERM Permitting</h3>
                <p className={styles.serviceDescription}>
                  Miami-Dade RER and DERM have specific requirements for site work, tree 
                  removal, and environmental protection. We coordinate all necessary permits 
                  and ensure compliance with county regulations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Stormwater Management</h3>
                <p className={styles.serviceDescription}>
                  Miami&apos;s heavy rainfall and flat topography require comprehensive 
                  stormwater management. We design and implement drainage systems that meet 
                  county requirements and protect properties from flooding.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Hurricane Preparedness</h3>
                <p className={styles.serviceDescription}>
                  Site work must account for hurricane-force winds and storm surge. Our 
                  contractors implement erosion control, proper drainage, and site preparation 
                  that enhances property resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Miami Service Areas</h2>
            <p className={styles.text}>
              We coordinate site work, earthwork, and land grading services throughout Miami-Dade 
              County, including:
            </p>
            <div className={styles.locationsList}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Key Biscayne</li>
                  <li>Aventura</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Urban Core</h3>
                <ul className={styles.locationItems}>
                  <li>Downtown Miami</li>
                  <li>Brickell</li>
                  <li>Coral Gables</li>
                  <li>Coconut Grove</li>
                  <li>Little Havana</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Kendall</li>
                  <li>Doral</li>
                  <li>Westchester</li>
                  <li>Palmetto Bay</li>
                  <li>Cutler Bay</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>South Miami-Dade</h3>
                <ul className={styles.locationItems}>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                  <li>Pinecrest</li>
                  <li>South Miami</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami Site Work Services</h2>
            <p className={styles.text}>
              Our Miami contractors provide comprehensive site work services:
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceCategory}>
                <h3 className={styles.serviceCategoryTitle}>Site Work and Site Development</h3>
                <ul className={styles.serviceLinks}>
                  <li><a href="/services/miami/site-work-site-development/complete-site-development-packages/">Complete Site Development Packages</a></li>
                  <li><a href="/services/miami/site-work-site-development/commercial-site-work/">Commercial Site Work</a></li>
                  <li><a href="/services/miami/site-work-site-development/custom-home-site-work/">Custom Home Site Work</a></li>
                  <li><a href="/services/miami/site-work-site-development/subdivision-infrastructure/">Subdivision and Infrastructure</a></li>
                  <li><a href="/services/miami/site-work-site-development/cut-fill-mass-earthmoving/">Cut and Fill and Mass Earthmoving</a></li>
                  <li><a href="/services/miami/site-work-site-development/value-engineering-preconstruction/">Value Engineering and Pre-Construction</a></li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3 className={styles.serviceCategoryTitle}>Land Grading and Site Grading</h3>
                <ul className={styles.serviceLinks}>
                  <li><a href="/services/miami/land-grading-site-grading/house-pad-building-pad-grading/">House Pad and Building Pad Grading</a></li>
                  <li><a href="/services/miami/land-grading-site-grading/parking-lot-driveway-grading/">Parking Lot and Driveway Grading</a></li>
                  <li><a href="/services/miami/land-grading-site-grading/road-access-drive-grading/">Road and Access Drive Grading</a></li>
                  <li><a href="/services/miami/land-grading-site-grading/rough-final-grading-developments/">Rough and Final Grading for Developments</a></li>
                  <li><a href="/services/miami/land-grading-site-grading/regrading-drainage-problems/">Regrading for Drainage Problems</a></li>
                  <li><a href="/services/miami/land-grading-site-grading/slope-stabilization-erosion-control/">Slope Stabilization and Erosion Control</a></li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3 className={styles.serviceCategoryTitle}>Excavation and Earthwork</h3>
                <ul className={styles.serviceLinks}>
                  <li><a href="/services/miami/excavation-earthwork/mass-excavation-cut-fill/">Mass Excavation and Cut/Fill</a></li>
                  <li><a href="/services/miami/excavation-earthwork/foundation-footing-excavation/">Foundation and Footing Excavation</a></li>
                  <li><a href="/services/miami/excavation-earthwork/utility-trench-excavation/">Utility Trench Excavation</a></li>
                  <li><a href="/services/miami/excavation-earthwork/retention-detention-ponds/">Retention and Detention Ponds</a></li>
                  <li><a href="/services/miami/excavation-earthwork/swales-drainage-features/">Swales and Drainage Features</a></li>
                  <li><a href="/services/miami/excavation-earthwork/fill-import-export-hauling/">Fill Import, Export and Hauling</a></li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3 className={styles.serviceCategoryTitle}>Drainage and Stormwater Solutions</h3>
                <ul className={styles.serviceLinks}>
                  <li><a href="/services/miami/drainage-stormwater-solutions/site-regrading-drainage/">Site Regrading for Drainage</a></li>
                  <li><a href="/services/miami/drainage-stormwater-solutions/french-drains-underdrain-systems/">French Drains and Underdrain Systems</a></li>
                  <li><a href="/services/miami/drainage-stormwater-solutions/stormwater-inlets-piping/">Stormwater Inlets and Piping</a></li>
                  <li><a href="/services/miami/drainage-stormwater-solutions/swales-ditches-outfalls/">Swales, Ditches and Outfalls</a></li>
                  <li><a href="/services/miami/drainage-stormwater-solutions/retention-detention-basins/">Retention and Detention Basins</a></li>
                  <li><a href="/services/miami/drainage-stormwater-solutions/flood-prone-coastal-drainage/">Flood-Prone and Coastal Property Drainage</a></li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3 className={styles.serviceCategoryTitle}>Land Clearing and Lot Preparation</h3>
                <ul className={styles.serviceLinks}>
                  <li><a href="/services/miami/land-clearing-lot-preparation/vegetation-tree-clearing/">Vegetation and Tree Clearing</a></li>
                  <li><a href="/services/miami/land-clearing-lot-preparation/stump-removal-grubbing/">Stump Removal and Grubbing</a></li>
                  <li><a href="/services/miami/land-clearing-lot-preparation/debris-hauling-site-cleanup/">Debris Hauling and Site Cleanup</a></li>
                  <li><a href="/services/miami/land-clearing-lot-preparation/rough-grading-after-clearing/">Rough Grading After Clearing</a></li>
                  <li><a href="/services/miami/land-clearing-lot-preparation/demolition-coordination/">Demolition Coordination</a></li>
                  <li><a href="/services/miami/land-clearing-lot-preparation/site-access-preparation/">Site Access Preparation</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Permitting and Compliance</h2>
            <p className={styles.text}>
              Site work in Miami-Dade County requires coordination with multiple regulatory agencies:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Miami-Dade RER (Regulatory and Economic Resources):</strong> Handles building 
                permits, site plan review, and code compliance. RER review ensures projects meet 
                building code requirements and zoning regulations.
              </li>
              <li>
                <strong>DERM (Department of Environmental Resources Management):</strong> Reviews 
                environmental impacts, tree removal, and wetland protection. DERM approval is required 
                for projects affecting protected areas or requiring tree removal permits.
              </li>
              <li>
                <strong>Flood Zone Compliance:</strong> Properties in Special Flood Hazard Areas 
                (SFHA) must meet Base Flood Elevation (BFE) requirements. We coordinate elevation 
                certificates and flood zone compliance.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Miami-Dade requires stormwater management 
                plans for new development. We design drainage systems that meet county requirements 
                and protect properties from flooding.
              </li>
              <li>
                <strong>Tree Protection:</strong> Miami-Dade has strict tree protection ordinances. 
                We coordinate tree removal permits and replacement requirements with DERM.
              </li>
              <li>
                <strong>Coastal Construction:</strong> Coastal areas have additional requirements 
                for erosion control and storm surge protection. We ensure projects meet coastal 
                construction standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Why Choose Us for Miami Site Work</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <h3 className={styles.benefitTitle}>Local Expertise</h3>
                <p className={styles.benefitDescription}>
                  Our contractors have extensive experience working throughout Miami-Dade County 
                  and understand local conditions, regulations, and best practices.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <h3 className={styles.benefitTitle}>Permit Coordination</h3>
                <p className={styles.benefitDescription}>
                  We coordinate all necessary permits with RER, DERM, and other agencies to ensure 
                  smooth project execution and regulatory compliance.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <h3 className={styles.benefitTitle}>Flood Zone Experience</h3>
                <p className={styles.benefitDescription}>
                  Our contractors are experienced with flood zone requirements and Base Flood 
                  Elevation compliance throughout Miami-Dade County.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <h3 className={styles.benefitTitle}>Licensed and Insured</h3>
                <p className={styles.benefitDescription}>
                  All contractors in our network are licensed, insured, and vetted for quality, 
                  safety, and compliance with Miami-Dade County requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Site Work Project?"
        description="Get a free quote for your site work, earthwork, or land grading project in Miami-Dade County. We'll coordinate licensed contractors who understand local conditions and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

