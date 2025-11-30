import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Access Preparation in Miami, FL | Miami-Dade County',
  description: 'Clearing and preparation of access roads and staging areas for construction equipment in Miami-Dade County. DTPW permits and Public Works compliance.',
  openGraph: {
    title: 'Site Access Preparation in Miami, FL | Miami-Dade County',
    description: 'Clearing and preparation of access roads and staging areas for construction equipment in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-clearing-lot-preparation/site-access-preparation/`,
  },
}

export default function MiamiSiteAccessPreparationPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Site Access Preparation in Miami, FL</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Clearing and preparation of access roads and staging areas for construction equipment 
                and operations across Miami-Dade County, from Coconut Grove to Pinecrest, Coral Gables 
                to Key Biscayne. We coordinate licensed contractors to efficiently clear and prepare 
                access roads and staging areas with full compliance to Miami-Dade County DTPW (Department 
                of Transportation & Public Works) permits, Public Works Right-of-Way permits, and 
                driveway access requirements.
              </p>
              <p className={styles.description}>
                Site access preparation in Miami-Dade County ensures proper access for construction 
                equipment and operations. Our network of licensed contractors coordinates efficient clearing 
                and preparation of access roads and staging areas that support construction activities, 
                with attention to Miami-Dade County DTPW standards, Public Works Right-of-Way requirements, 
                and high water table conditions.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/site-access-preparation.jpg"
                alt="Site access preparation services in Miami-Dade County"
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
              Site access preparation in Miami-Dade County is essential for developers, general contractors, 
              property owners, and anyone who needs access roads and staging areas prepared for construction 
              equipment and operations across Miami neighborhoods including Coconut Grove, Pinecrest, 
              Palmetto Bay, Coral Gables, Key Biscayne, Doral, Aventura, and throughout Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re preparing a new construction site or need improved access for existing 
              projects, site access preparation ensures proper access for equipment and operations. We 
              coordinate contractors to efficiently clear and prepare access roads and staging areas, with 
              full compliance to Miami-Dade County DTPW permits, Public Works Right-of-Way requirements, 
              and driveway access regulations.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Site access preparation in Miami-Dade County typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $180,000+</strong> for large commercial sites 
                or properties with extensive access requirements depending on road length, staging area 
                size, preparation requirements, and Miami-Dade County DTPW permit requirements. Projects 
                requiring Public Works Right-of-Way permits may have additional permit processing costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Site Access Preparation Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>DTPW Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County DTPW (Department of Transportation & Public Works) 
                  permits for roadway construction projects on County-owned or maintained rights-of-way. 
                  DTPW holds exclusive permitting jurisdiction over County-owned or maintained rights-of-way 
                  within municipalities, as well as certain public works construction projects on municipal 
                  rights-of-way under Ordinance No. 21-99.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Public Works Right-of-Way Permits</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County Public Works Right-of-Way permits for driveways, 
                  sidewalks, curbs and gutters, parking lot and street paving, drainage, and utility 
                  installations. Owners constructing on a right-of-way must complete Construction Within 
                  Right-of-Way Permit Covenant for an Individual forms.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Access Road Clearing</h3>
                <p className={styles.serviceDescription}>
                  Clearing of vegetation, trees, and obstacles to establish access roads in Miami-Dade 
                  County. Access road clearing ensures proper routes for construction equipment and vehicles, 
                  with attention to DERM tree removal permits and environmental requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Road Grading and Compaction</h3>
                <p className={styles.serviceDescription}>
                  Grading and compaction of access roads to support construction equipment according to 
                  Miami-Dade County DTPW standards. Road grading and compaction ensure stable surfaces for 
                  heavy equipment and vehicles, with attention to high water table conditions and coastal 
                  soil characteristics.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Staging Area Preparation</h3>
                <p className={styles.serviceDescription}>
                  Clearing and preparation of staging areas for equipment, materials, and operations in 
                  Miami-Dade County. Staging area preparation ensures adequate space for construction 
                  activities, with attention to flood zone requirements and environmental protection.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Drainage for Access Roads</h3>
                <p className={styles.serviceDescription}>
                  Installation of drainage features for access roads according to Miami-Dade County DERM 
                  25-year, 72-hour storm minimum design requirements. Drainage installation ensures access 
                  roads remain usable during wet conditions and prevents water accumulation.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Temporary Road Surfacing</h3>
                <p className={styles.serviceDescription}>
                  Installation of temporary road surfacing materials including gravel or crushed stone for 
                  access roads in Miami-Dade County. Temporary surfacing ensures access roads remain usable 
                  during construction, with attention to high water table conditions and wet season 
                  requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Driveway Access Permits</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Miami-Dade County Public Works permits for driveway access, including 
                  driveways, sidewalks, curbs and gutters, and parking lot paving. Driveway access permits 
                  ensure proper access and compliance with county requirements.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Safety and Traffic Control</h3>
                <p className={styles.serviceDescription}>
                  Coordination of safety measures and traffic control for access roads in Miami-Dade County. 
                  Safety coordination ensures proper protection for workers and the public, with compliance 
                  to county traffic management requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Types of Access Preparation in Miami-Dade County</h2>
            <p className={styles.text}>
              Site access preparation covers various types of access and staging needs in Miami-Dade County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Primary Access Roads:</strong> Main access routes from public roads to construction 
                sites. Primary access roads provide routes for heavy equipment and material delivery, with 
                DTPW permits required for County-owned or maintained rights-of-way. Primary access roads 
                must comply with Miami-Dade County DTPW standards.
              </li>
              <li>
                <strong>Secondary Access Roads:</strong> Additional access routes within construction sites. 
                Secondary access roads provide routes for equipment movement and material distribution, with 
                attention to Miami-Dade County drainage requirements and high water table conditions.
              </li>
              <li>
                <strong>Driveway Access:</strong> Driveway access from public roads to private properties. 
                Driveway access requires Miami-Dade County Public Works permits for driveways, sidewalks, 
                curbs and gutters, and parking lot paving. Construction Within Right-of-Way Permit Covenant 
                forms must be completed.
              </li>
              <li>
                <strong>Equipment Staging Areas:</strong> Areas for equipment storage and maintenance. 
                Equipment staging areas ensure adequate space for construction equipment, with attention to 
                flood zone requirements and environmental protection in Miami-Dade County.
              </li>
              <li>
                <strong>Material Staging Areas:</strong> Areas for material storage and distribution. 
                Material staging areas ensure adequate space for construction materials, with compliance to 
                Miami-Dade County zoning and environmental requirements.
              </li>
              <li>
                <strong>Temporary Parking Areas:</strong> Areas for worker and visitor parking. Temporary 
                parking areas ensure adequate space for vehicles during construction, with attention to 
                Miami-Dade County traffic management and safety requirements.
              </li>
              <li>
                <strong>Emergency Access Routes:</strong> Routes for emergency vehicles and equipment. 
                Emergency access routes ensure proper access for safety and emergency response, with 
                compliance to Miami-Dade County emergency access requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Access Preparation Considerations</h2>
            <p className={styles.text}>
              Site access preparation in Miami-Dade County requires attention to local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>DTPW Permitting Authority:</strong> Miami-Dade County DTPW (Department of 
                Transportation & Public Works) holds exclusive permitting jurisdiction over County-owned or 
                maintained rights-of-way within municipalities, as well as certain public works construction 
                projects on municipal rights-of-way under Ordinance No. 21-99, adopted on October 5, 2021. 
                DTPW maintains an online permitting system for roadway construction projects.
              </li>
              <li>
                <strong>Public Works Right-of-Way Permits:</strong> Miami-Dade County Public Works permits 
                are required for driveways, sidewalks, curbs and gutters, parking lot and street paving, 
                seal coating, drainage, and utility installations. Owners constructing on a right-of-way must 
                complete Construction Within Right-of-Way Permit Covenant for an Individual forms.
              </li>
              <li>
                <strong>Wet Season Conditions:</strong> Miami-Dade County&apos;s wet season requires access 
                roads and staging areas that remain usable during heavy rainfall. Drainage and surfacing 
                ensure access during wet conditions, with compliance to DERM 25-year, 72-hour storm minimum 
                design requirements.
              </li>
              <li>
                <strong>High Water Table:</strong> High water table conditions in Miami-Dade County may 
                require specialized road construction and drainage techniques. High water table considerations 
                ensure stable access roads and may require dewatering with DERM Class V Permits.
              </li>
              <li>
                <strong>Flood Zone Requirements:</strong> Properties in flood zones (AE, VE, AH, AO, X zones) 
                may have specific requirements for access road elevations and drainage, including Base Flood 
                Elevation (BFE) compliance. Flood zone compliance ensures proper access and regulatory 
                compliance.
              </li>
              <li>
                <strong>Coastal Soils:</strong> Coastal soils in Miami-Dade County may require specialized 
                road construction and compaction techniques. Soil considerations ensure stable access roads 
                and staging areas, with attention to limestone bedrock and sandy soil conditions.
              </li>
              <li>
                <strong>Traffic Management:</strong> Access roads may require traffic management plans and 
                coordination with Miami-Dade County DTPW and local authorities. Traffic management ensures 
                proper access and safety, with compliance to county requirements.
              </li>
              <li>
                <strong>Environmental Protection:</strong> Access preparation must protect wetlands, water 
                bodies, and environmentally sensitive areas in Miami-Dade County. Environmental protection 
                ensures compliance with DERM regulations and environmental stewardship, with attention to 
                Natural Forest Community (NFC) permits and wetland protection.
              </li>
              <li>
                <strong>Permit Processing:</strong> Effective October 1, 2025, Miami-Dade County implemented 
                a revised fee schedule for building permits. Standardized forms are required for all permit 
                applications submitted or permits issued on or after August 5, 2024. Contact DTPW at 
                (786)469-5244 or javier.bustamante@miamidade.gov for roadway permit questions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Site Access Preparation Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your site access preparation in Miami-Dade County is completed 
              efficiently and supports construction operations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Access Assessment:</strong> We assess your site to identify access requirements, 
                staging area needs, and preparation requirements. Assessment determines access preparation 
                needs, establishes work scope, and identifies Miami-Dade County DTPW permit requirements 
                and Public Works Right-of-Way permit needs.
              </li>
              <li>
                <strong>DTPW Permit Coordination:</strong> We coordinate DTPW permits for roadway construction 
                projects on County-owned or maintained rights-of-way. DTPW permits are required for certain 
                public works construction projects, with online permitting system access.
              </li>
              <li>
                <strong>Public Works Right-of-Way Permit Coordination:</strong> We coordinate Public Works 
                Right-of-Way permits for driveways, sidewalks, curbs and gutters, parking lot and street 
                paving, drainage, and utility installations. Construction Within Right-of-Way Permit Covenant 
                forms must be completed for owners constructing on a right-of-way.
              </li>
              <li>
                <strong>Access Road Planning:</strong> We plan access road routes and staging area locations 
                with attention to Miami-Dade County DTPW standards, flood zone requirements, and environmental 
                protection. Access planning ensures proper routes and adequate space for construction 
                activities.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who 
                have the right equipment and experience for access preparation in Miami-Dade County, with 
                knowledge of DTPW standards, high water table conditions, and coastal soil characteristics.
              </li>
              <li>
                <strong>Clearing Operations:</strong> Contractors clear vegetation, trees, and obstacles to 
                establish access roads and staging areas, with attention to DERM tree removal permits and 
                environmental requirements. Clearing operations ensure proper routes and adequate space.
              </li>
              <li>
                <strong>Grading and Compaction:</strong> Access roads and staging areas are graded and 
                compacted to support construction equipment according to Miami-Dade County DTPW standards. 
                Grading and compaction ensure stable surfaces for equipment and vehicles, with attention to 
                high water table conditions and coastal soil characteristics.
              </li>
              <li>
                <strong>Drainage Installation:</strong> Drainage features are installed for access roads 
                according to Miami-Dade County DERM 25-year, 72-hour storm minimum design requirements. 
                Drainage installation ensures access roads remain usable during wet conditions and prevents 
                water accumulation.
              </li>
              <li>
                <strong>Surfacing Installation:</strong> Temporary road surfacing materials are installed as 
                needed for access roads in Miami-Dade County. Surfacing installation ensures access roads 
                remain usable during construction, with attention to high water table conditions and wet 
                season requirements.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Service Areas</h2>
            <p className={styles.text}>
              We coordinate site access preparation services across Miami-Dade County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Miami Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>Coconut Grove</li>
                <li>Pinecrest</li>
                <li>Palmetto Bay</li>
                <li>Coral Gables</li>
                <li>Key Biscayne</li>
                <li>Doral</li>
                <li>Aventura</li>
                <li>Brickell</li>
                <li>South Beach</li>
                <li>Mid-Beach</li>
                <li>North Beach</li>
                <li>Bal Harbour</li>
                <li>Sunny Isles Beach</li>
                <li>Miami Beach</li>
                <li>Homestead</li>
                <li>Cutler Bay</li>
                <li>Kendall</li>
                <li>Westchester</li>
                <li>Hialeah</li>
                <li>Miami Gardens</li>
              </ul>
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
                <h3 className={styles.faqQuestion}>What is included in site access preparation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Site access preparation in Miami-Dade County includes clearing of access roads, grading 
                  and compaction of road surfaces according to DTPW standards, preparation of staging areas, 
                  installation of drainage features meeting DERM 25-year, 72-hour storm minimum design 
                  requirements, temporary road surfacing, and coordination of safety measures. Access 
                  preparation ensures proper access for construction equipment and operations, with full 
                  compliance to DTPW permits and Public Works Right-of-Way requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does site access preparation cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Site access preparation costs in Miami-Dade County vary based on road length, staging area 
                  size, preparation requirements, and permit requirements. Typical residential lots range from 
                  $15,000 to $50,000, while large commercial sites can range from $50,000 to $180,000+ 
                  depending on scope. Projects requiring DTPW permits and Public Works Right-of-Way permits 
                  may have additional permit processing costs. Factors affecting cost include road length, 
                  staging area size, drainage requirements, surfacing needs, and Miami-Dade County permit 
                  requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for access road preparation in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Access road preparation in Miami-Dade County may require DTPW permits for roadway 
                  construction projects on County-owned or maintained rights-of-way, as well as Public Works 
                  Right-of-Way permits for driveways, sidewalks, curbs and gutters, parking lot and street 
                  paving, drainage, and utility installations. DTPW holds exclusive permitting jurisdiction 
                  over County-owned or maintained rights-of-way within municipalities under Ordinance No. 
                  21-99. We help identify and coordinate all required permits and compliance requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is DTPW permitting authority in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade County DTPW (Department of Transportation & Public Works) holds exclusive 
                  permitting jurisdiction over County-owned or maintained rights-of-way within municipalities, 
                  as well as certain public works construction projects on municipal rights-of-way under 
                  Ordinance No. 21-99, adopted on October 5, 2021. DTPW maintains an online permitting system 
                  for roadway construction projects. Contact DTPW at (786)469-5244 or 
                  javier.bustamante@miamidade.gov for roadway permit questions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does site access preparation take in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Site access preparation timelines in Miami-Dade County vary based on road length, staging 
                  area size, preparation requirements, and permit processing times. Typical residential lots 
                  take 2-5 days after permit approval, while large commercial sites may take 1-2 weeks 
                  depending on scope. DTPW permit processing and Public Works Right-of-Way permit processing 
                  may add time to projects. Weather conditions, high water table conditions, and site access 
                  can affect timelines. We coordinate operations to complete projects efficiently.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens to access roads after construction in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Temporary access roads in Miami-Dade County may be removed after construction, while 
                  permanent access roads may be incorporated into final site development. Access road 
                  disposition depends on project requirements, site plans, and DTPW permit conditions. We 
                  coordinate access road planning to support both construction and final site development, with 
                  compliance to Miami-Dade County requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Related Services</h2>
            <p className={styles.text}>
              <a href="/services/land-clearing-lot-preparation/site-access-preparation/" className={styles.backLink}>
                ← View General Site Access Preparation Services
              </a>
            </p>
            <p className={styles.text}>
              <a href="/service-areas/miami/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Miami Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Prepare Site Access in Miami-Dade County?"
        description="Get a free quote for your site access preparation project. We'll coordinate licensed contractors to efficiently clear and prepare access roads and staging areas for your construction project, with full compliance to Miami-Dade County DTPW permits, Public Works Right-of-Way requirements, and driveway access regulations."
        showPhone={true}
      />
    </main>
  )
}

