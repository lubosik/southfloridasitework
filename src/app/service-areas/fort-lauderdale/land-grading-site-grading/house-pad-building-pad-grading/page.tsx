import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'House Pad & Building Pad Grading in Fort Lauderdale, FL | Broward County',
  description: 'Precision building pad grading for residential and commercial projects in Broward County. Proper elevations, BFE compliance, and compaction for code compliance.',
  openGraph: {
    title: 'House Pad & Building Pad Grading in Fort Lauderdale, FL | Broward County',
    description: 'Precision building pad grading for residential and commercial projects in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-grading-site-grading/house-pad-building-pad-grading/`,
  },
}

export default function FortLauderdaleHousePadBuildingPadGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="House Pad Grading and Building Pads in Fort Lauderdale, FL"
        subtitle="Precision building pad grading for residential and commercial projects across Broward County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="House pad and building pad grading services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Building pad grading services in Broward County are essential for general contractors, 
              custom home builders, developers, commercial property owners, and anyone preparing a site 
              for new construction throughout Broward County, including Weston, Plantation, Pembroke Pines, 
              Coral Springs, and other growing communities.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a single-family home in Fort Lauderdale, a commercial building 
              in Weston, or a multi-unit development in Plantation, proper building pad grading ensures your 
              foundation will be stable, code-compliant, and properly drained. We coordinate licensed 
              contractors with the right equipment and expertise for your specific Broward County project 
              requirements, including Base Flood Elevation (BFE) compliance and 100-year, 3-day storm event 
              protection for properties in flood zones.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Building pad grading projects in Broward County typically range from 
                <strong> $25,000 to $75,000</strong> for residential pads, and 
                <strong> $50,000 to $200,000+</strong> for commercial building pads depending on size, 
                site conditions, flood zone requirements, required earthwork, and compaction requirements. 
                Projects in flood zones requiring significant fill material often cost more due to 
                additional material and elevation requirements. Projects involving development work as 
                described in Florida Statute 380.04 require a development permit prior to the issuance 
                of a building permit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Building Pad Grading Includes in Broward County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Survey and Elevation Verification</h3>
              <p className={styles.serviceDescription}>
                Review of engineering drawings, survey data, and site conditions to determine exact 
                grading requirements, Base Flood Elevation (BFE) compliance, and identify any challenges 
                or constraints specific to Broward County conditions, including flood zones, high water 
                table, and climate resilience considerations.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading</h3>
              <p className={styles.serviceDescription}>
                Initial earthmoving to achieve approximate elevations and slopes. Rough grading removes 
                excess material or adds fill to bring the site to within a few inches of final elevations, 
                accounting for Broward County&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fine Grading</h3>
              <p className={styles.serviceDescription}>
                Precise grading work using laser-guided equipment to achieve exact elevations specified 
                in engineering drawings, typically within 0.1 feet of specified elevations. Fine grading 
                creates the exact slopes and contours required, ensuring Base Flood Elevation (BFE) 
                compliance and 100-year, 3-day storm event protection for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Soil Compaction</h3>
              <p className={styles.serviceDescription}>
                Proper compaction of building pad soils to meet Broward County building code requirements 
                for foundation support. Compaction testing ensures soils meet specified density requirements, 
                accounting for Broward County&apos;s unique soil characteristics including limestone bedrock 
                and sandy soils.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading includes proper slopes and drainage features to direct water away from the 
                building pad and prevent water accumulation around foundations, essential given Broward 
                County&apos;s high water table and frequent heavy rainfall, with compliance to SFWMD 
                Environmental Resource Permit requirements.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Inspection Preparation</h3>
              <p className={styles.serviceDescription}>
                Coordination of final grading inspections with Broward County Building Code Division or 
                municipal building departments to ensure the building pad meets all engineering 
                specifications, Base Flood Elevation (BFE) requirements, 100-year, 3-day storm event 
                protection, and is ready for foundation construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Building Pad Considerations</h2>
            <p className={styles.text}>
              Building pad grading in Broward County requires specialized knowledge of local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Base Flood Elevation (BFE) and Storm Event Protection:</strong> Properties in 
                flood zones (AE, VE, or X) must have building pads graded to specific elevations above 
                Base Flood Elevation (BFE) as required by FEMA and Broward County building codes. First 
                floor elevations of all structures must be protected from a 100-year, 3-day storm event. 
                Many Broward County properties are in flood zones, particularly in coastal areas like 
                Fort Lauderdale, Hollywood, and Pompano Beach. Updated flood maps effective July 31, 2024, 
                established new elevation requirements that must be used for all new construction.
              </li>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects grading depth and compaction. Proper 
                dewatering may be required, and building pads may need to be elevated above the water 
                table for foundation stability. SFWMD Environmental Resource Permits are required for 
                dewatering activities affecting state waters. This is especially important in areas like 
                Fort Lauderdale, Hollywood, and coastal neighborhoods.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County including Fort 
                Lauderdale, Hollywood, Pompano Beach, and Deerfield Beach have unique soil characteristics 
                including limestone bedrock, sandy soils, and organic materials. Building pad grading must 
                account for these conditions and may require specialized compaction techniques.
              </li>
              <li>
                <strong>Development & Environmental Review (DER):</strong> Building pad grading typically 
                requires Development & Environmental Review through ePermits OneStop for applicable building 
                permits. All DER submittals are only accepted electronically. Broward County&apos;s Planning 
                and Development Management Division ensures that proposed developments comply with the Broward 
                County Land Development Code and Natural Resource Protection Code.
              </li>
              <li>
                <strong>Development Permits:</strong> Projects involving development work as described in 
                Florida Statute 380.04 require a development permit prior to the issuance of a building permit. 
                This is a critical prerequisite for building pad grading projects in Broward County.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource 
                Protection Code (Chapter 27) regulates environmental activities and enforces requirements 
                for development in environmentally sensitive areas, including flood zones and stormwater 
                management systems. Building pad grading must comply with these requirements.
              </li>
              <li>
                <strong>SFWMD Environmental Resource Permits:</strong> Building pad grading affecting state 
                waters and wetlands requires SFWMD Environmental Resource Permits. As of June 28, 2024, 
                new water quality performance standards were implemented. We coordinate permit applications 
                and ensure compliance throughout operations.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Building pad grading must incorporate proper 
                drainage and stormwater management to meet SFWMD Environmental Resource Permit requirements 
                and Broward County Natural Resource Protection Code standards. Pads must be graded to direct 
                water away from structures, essential given Broward County&apos;s flat topography and heavy 
                rainfall.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> Building pads must be graded to exact elevations 
                and slopes specified in engineering drawings, typically within 0.1 feet of specified grades. 
                A site plan and grading plan, prepared by a licensed surveyor or engineer, must be submitted 
                with the building permit application showing proposed pad elevation relative to BFE and 
                100-year, 3-day storm event protection.
              </li>
              <li>
                <strong>Climate Resilience:</strong> Broward County&apos;s Land Use Plan incorporates 
                long-term resilience planning, including requirements that all land use and planning decisions 
                within Priority Planning Areas consider and effectively address future climate predictions 
                for a 50-year planning horizon, accounting for approximately 2 feet of sea level rise. Building 
                pad grading should consider these long-term resilience requirements.
              </li>
              <li>
                <strong>Permit Validity:</strong> Broward County permits are valid for 180 days from the 
                date of issuance. If work doesn&apos;t begin within this period, the permit will expire, 
                though extensions can be requested by contacting the Broward County permit department.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Building Pad Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate building pad grading services throughout Broward County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Luxury Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Victoria Park</li>
                  <li>Coral Ridge</li>
                  <li>Harbor Beach</li>
                  <li>Las Olas</li>
                  <li>Rio Vista</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Fort Lauderdale</li>
                  <li>Hollywood</li>
                  <li>Pompano Beach</li>
                  <li>Deerfield Beach</li>
                  <li>Lauderdale-by-the-Sea</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Growing Suburban Communities</h3>
                <ul className={styles.locationItems}>
                  <li>Weston</li>
                  <li>Plantation</li>
                  <li>Pembroke Pines</li>
                  <li>Coral Springs</li>
                  <li>Parkland</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Districts</h3>
                <ul className={styles.locationItems}>
                  <li>Davie</li>
                  <li>Sunrise</li>
                  <li>Tamarac</li>
                  <li>Miramar</li>
                  <li>Cooper City</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Building Pad Grading Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your building pad meets all specifications and regulatory 
              requirements in Broward County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, survey data, and 
                site plans to understand grading requirements, identify challenges, and determine the 
                scope of work needed, including Base Flood Elevation (BFE) analysis and 100-year, 3-day 
                storm event protection for properties in flood zones.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development 
                permits as described in Florida Statute 380.04, which must be obtained prior to the 
                issuance of building permits for building pad grading projects in Broward County.
              </li>
              <li>
                <strong>Broward County DER Coordination:</strong> We help identify required Development 
                & Environmental Review (DER) through ePermits OneStop and coordinate with Broward County 
                Planning and Development Management Division to ensure proposed building pad grading 
                projects comply with the Broward County Land Development Code and Natural Resource Protection 
                Code. All DER submittals are only accepted electronically.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required grading 
                permits including Uniform Building Permit Applications (updated November 14, 2025), DER 
                through ePermits OneStop, SFWMD Environmental Resource Permits for activities affecting 
                state waters and wetlands, Natural Resource Protection Code compliance, and coordinate 
                with regulatory agencies. We coordinate with Broward County Building Code Division, SFWMD, 
                and other regulatory agencies as needed.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (graders, compactors, laser-guided systems) and experience 
                for precise building pad grading in Broward County, including expertise with high water 
                table conditions, flood zone requirements, and climate resilience considerations.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations. This may involve cut and fill operations to balance site grades 
                and bring the pad area to approximate final elevations, accounting for Broward County&apos;s 
                high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings, typically within 0.1 feet of 
                specified grades. Fine grading ensures Base Flood Elevation (BFE) compliance and 100-year, 
                3-day storm event protection for properties in flood zones.
              </li>
              <li>
                <strong>Compaction:</strong> Proper soil compaction using rollers and compactors to achieve 
                required density for foundation support. Compaction testing ensures soils meet Broward County 
                building code requirements, accounting for unique soil characteristics including limestone 
                bedrock and sandy soils.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Broward 
                County Building Code Division or municipal building departments and engineers to ensure the 
                building pad meets all specifications, Base Flood Elevation (BFE) requirements, 100-year, 
                3-day storm event protection, and is ready for foundation construction.
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
                <h3 className={styles.faqQuestion}>What is Base Flood Elevation (BFE) and why is it important for building pads in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Base Flood Elevation (BFE) is the elevation to which floodwater is anticipated to rise 
                  during a base flood (1% annual chance flood). Properties in flood zones (AE, VE, or X) 
                  must have building pads graded to elevations above BFE as required by FEMA and Broward 
                  County building codes. First floor elevations of all structures must be protected from 
                  a 100-year, 3-day storm event. Many Broward County properties, particularly in coastal 
                  areas like Fort Lauderdale, Hollywood, and Pompano Beach, are in flood zones. Updated 
                  flood maps effective July 31, 2024, established new elevation requirements that must be 
                  used for all new construction. This is critical for flood insurance and code compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs in Broward County vary based on pad size, site conditions, 
                  flood zone requirements, required earthwork, and compaction requirements. Typical 
                  residential building pads range from $25,000 to $75,000, while commercial pads can range 
                  from $50,000 to $200,000+ depending on scope. Flood zone requirements, high water table 
                  conditions, and the need for significant fill material can increase costs. Projects in 
                  areas like Fort Lauderdale or Hollywood often require more extensive work due to elevation 
                  requirements. Broward County permit processing, including DER review through ePermits 
                  OneStop, can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for building pad grading in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading in Broward County requires development permits (Florida Statute 380.04) 
                  obtained prior to building permit issuance, Uniform Building Permit Applications from Broward 
                  County Building Code Division, Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable projects, SFWMD Environmental Resource Permits for activities affecting 
                  state waters and wetlands, Natural Resource Protection Code compliance, and FEMA compliance 
                  permits for properties in flood zones. All DER submittals are only accepted electronically. 
                  We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does building pad grading need to be in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading in Broward County must achieve elevations within 0.1 feet (1.2 
                  inches) of specified elevations in engineering drawings. Slopes must match specified grades 
                  exactly. This precision is critical for foundation stability and code compliance. For 
                  properties in flood zones, the building pad must be graded to at least the Base Flood 
                  Elevation (BFE) plus any required freeboard, with first floor elevations protected from 
                  a 100-year, 3-day storm event. Our contractors use laser-guided grading equipment to 
                  achieve this precision.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Broward County&apos;s high water table affect building pad grading?</h3>
                <p className={styles.faqAnswer}>
                  Broward County&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized dewatering techniques and foundation design. Building pads may 
                  need to be elevated above the water table for foundation stability. SFWMD Environmental 
                  Resource Permits are required for dewatering activities affecting state waters. Proper 
                  drainage systems are essential to prevent water accumulation around foundations. This is 
                  especially important in areas like Fort Lauderdale, Hollywood, and coastal neighborhoods 
                  where the water table is particularly high.
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
              <a href="/services/land-grading-site-grading/house-pad-building-pad-grading/" className={styles.backLink}>
                ← View House Pad Grading (All Areas)
              </a>
              {' | '}
              <a href="/service-areas/fort-lauderdale/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Fort Lauderdale Building Pad Grading Project?"
        description="Get a free quote for your house pad or building pad grading project in Broward County. We'll coordinate licensed contractors experienced in Broward County conditions, Base Flood Elevation (BFE) compliance, 100-year, 3-day storm event protection, DER requirements, Natural Resource Protection Code compliance, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

