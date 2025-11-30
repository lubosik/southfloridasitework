import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'House Pad & Building Pad Grading in Miami, FL | Miami-Dade County',
  description: 'Precision building pad grading for residential and commercial projects in Miami-Dade County. Proper elevations, BFE compliance, and compaction for code compliance.',
  openGraph: {
    title: 'House Pad & Building Pad Grading in Miami, FL | Miami-Dade County',
    description: 'Precision building pad grading for residential and commercial projects in Miami-Dade County.',
    url: `${siteConfig.url}/service-areas/miami/land-grading-site-grading/house-pad-building-pad-grading/`,
  },
}

export default function MiamiHousePadBuildingPadGradingPage() {
  return (
    <main>
      <HeroWithQuote
        title="House Pad Grading and Building Pads in Miami, FL"
        subtitle="Precision building pad grading for residential and commercial projects across Miami-Dade County"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="House pad and building pad grading services in Miami, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Building pad grading services in Miami-Dade County are essential for general contractors, 
              custom home builders, developers, commercial property owners, and anyone preparing a site 
              for new construction in Miami-Dade County.
            </p>
            <p className={styles.text}>
              Whether you&apos;re building a single-family home in Coral Gables, a commercial building 
              in Doral, or a multi-unit development in Aventura, proper building pad grading ensures your 
              foundation will be stable, code-compliant, and properly drained. We coordinate licensed 
              contractors with the right equipment and expertise for your specific Miami-Dade County project 
              requirements, including Base Flood Elevation (BFE) compliance for properties in flood zones.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Miami-Dade County</h3>
              <p className={styles.highlightText}>
                Building pad grading projects in Miami-Dade County typically range from 
                <strong> $25,000 to $75,000</strong> for residential pads, and 
                <strong> $50,000 to $200,000+</strong> for commercial building pads depending on size, 
                site conditions, flood zone requirements, required earthwork, and compaction requirements. 
                Projects in flood zones requiring significant fill material often cost more due to 
                additional material and elevation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Building Pad Grading Includes in Miami-Dade County</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Survey and Elevation Verification</h3>
              <p className={styles.serviceDescription}>
                Review of engineering drawings, survey data, and site conditions to determine exact 
                grading requirements, Base Flood Elevation (BFE) compliance, and identify any challenges 
                or constraints specific to Miami-Dade County conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Rough Grading</h3>
              <p className={styles.serviceDescription}>
                Initial earthmoving to achieve approximate elevations and slopes. Rough grading removes 
                excess material or adds fill to bring the site to within a few inches of final elevations, 
                accounting for Miami-Dade&apos;s high water table and coastal soil conditions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Fine Grading</h3>
              <p className={styles.serviceDescription}>
                Precise grading work using laser-guided equipment to achieve exact elevations specified 
                in engineering drawings, typically within 0.1 feet of specified elevations. Fine grading 
                creates the exact slopes and contours required, ensuring Base Flood Elevation (BFE) 
                compliance for properties in flood zones.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Soil Compaction</h3>
              <p className={styles.serviceDescription}>
                Proper compaction of building pad soils to meet Miami-Dade building code requirements 
                for foundation support. Compaction testing ensures soils meet specified density requirements, 
                accounting for Miami-Dade&apos;s unique soil characteristics including limestone bedrock 
                and sandy soils.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Drainage Preparation</h3>
              <p className={styles.serviceDescription}>
                Grading includes proper slopes and drainage features to direct water away from the 
                building pad and prevent water accumulation around foundations, essential given Miami-Dade&apos;s 
                high water table and frequent heavy rainfall.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Final Inspection Preparation</h3>
              <p className={styles.serviceDescription}>
                Coordination of final grading inspections with Miami-Dade RER or municipal building 
                departments to ensure the building pad meets all engineering specifications, Base Flood 
                Elevation (BFE) requirements, and is ready for foundation construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade County Building Pad Considerations</h2>
            <p className={styles.text}>
              Building pad grading in Miami-Dade County requires specialized knowledge of local conditions 
              and regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Base Flood Elevation (BFE) Compliance:</strong> Properties in flood zones (AE, 
                VE, or X) must have building pads graded to specific elevations above Base Flood Elevation 
                (BFE) as required by FEMA and Miami-Dade building codes. Many Miami-Dade properties are in 
                flood zones, particularly in coastal areas like Miami Beach, Key Biscayne, and Aventura. 
                Some municipalities like Coral Gables may require additional freeboard (typically 1 foot 
                above BFE) for new construction.
              </li>
              <li>
                <strong>High Water Table:</strong> Miami-Dade&apos;s high water table, which can be 
                within 2-3 feet of the surface in many areas, affects grading depth and compaction. Proper 
                dewatering may be required, and building pads may need to be elevated above the water 
                table for foundation stability. This is especially important in areas like Miami Beach, 
                Aventura, and coastal neighborhoods.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Miami-Dade including Miami 
                Beach, Key Biscayne, Bal Harbour, and Aventura have unique soil characteristics including 
                limestone bedrock, sandy soils, and organic materials. Building pad grading must account for 
                these conditions and may require specialized compaction techniques.
              </li>
              <li>
                <strong>RER and DERM Permits:</strong> Building pad grading typically requires permits 
                from Miami-Dade RER (Regulatory and Economic Resources) for unincorporated areas, or municipal 
                building departments for incorporated areas like Coral Gables, Pinecrest, or Aventura. 
                Projects involving significant land disturbance may require DERM environmental resource 
                permits. Effective October 1, 2025, Miami-Dade implemented updated permit fees.
              </li>
              <li>
                <strong>Stormwater Management:</strong> Building pad grading must incorporate proper 
                drainage and stormwater management to meet South Florida Water Management District (SFWMD) 
                and Miami-Dade County requirements. Pads must be graded to direct water away from structures, 
                essential given Miami-Dade&apos;s flat topography and heavy rainfall.
              </li>
              <li>
                <strong>Engineering Specifications:</strong> Building pads must be graded to exact elevations 
                and slopes specified in engineering drawings, typically within 0.1 feet of specified grades. 
                A site plan and grading plan, prepared by a licensed surveyor or engineer, must be submitted 
                with the building permit application showing proposed pad elevation relative to BFE.
              </li>
              <li>
                <strong>Miami 21 Zoning Code:</strong> For projects in the City of Miami, building pad 
                grading must comply with Miami 21 Zoning Code and its Transect Zone classifications, 
                including setbacks, height limits, and lot coverage restrictions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Miami-Dade Building Pad Grading Neighborhoods</h2>
            <p className={styles.text}>
              We coordinate building pad grading services throughout Miami-Dade County, including:
            </p>
            <div className={styles.locationsGrid}>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Luxury Residential Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Pinecrest</li>
                  <li>Coral Gables</li>
                  <li>Coconut Grove</li>
                  <li>South Miami</li>
                  <li>Palmetto Bay</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Coastal and Waterfront</h3>
                <ul className={styles.locationItems}>
                  <li>Miami Beach</li>
                  <li>Key Biscayne</li>
                  <li>Bal Harbour</li>
                  <li>Surfside</li>
                  <li>Aventura</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Commercial Districts</h3>
                <ul className={styles.locationItems}>
                  <li>Doral</li>
                  <li>Brickell</li>
                  <li>Downtown Miami</li>
                  <li>Midtown Miami</li>
                  <li>Westchester</li>
                </ul>
              </div>
              <div className={styles.locationGroup}>
                <h3 className={styles.locationGroupTitle}>Suburban Areas</h3>
                <ul className={styles.locationItems}>
                  <li>Kendall</li>
                  <li>Cutler Bay</li>
                  <li>Homestead</li>
                  <li>Florida City</li>
                  <li>Redland</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Building Pad Grading Process in Miami-Dade County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your building pad meets all specifications and regulatory 
              requirements in Miami-Dade County:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your engineering drawings, survey data, and 
                site plans to understand grading requirements, identify challenges, and determine the 
                scope of work needed, including Base Flood Elevation (BFE) analysis for properties in 
                flood zones.
              </li>
              <li>
                <strong>Miami-Dade Permit Coordination:</strong> We help identify required grading permits 
                including Miami-Dade RER building permits (for unincorporated areas) or municipal building 
                department permits (for incorporated areas like Coral Gables or Pinecrest), DERM 
                environmental resource permits for land disturbance, SFWMD permits if needed, and 
                coordinate with regulatory agencies.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (graders, compactors, laser-guided systems) and experience 
                for precise building pad grading in Miami-Dade County, including expertise with high 
                water table conditions and flood zone requirements.
              </li>
              <li>
                <strong>Rough Grading:</strong> Contractors perform initial earthmoving to achieve 
                approximate elevations. This may involve cut and fill operations to balance site grades 
                and bring the pad area to approximate final elevations, accounting for Miami-Dade&apos;s 
                high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Fine Grading:</strong> Precise grading work using laser-guided equipment to achieve 
                exact elevations and slopes specified in engineering drawings, typically within 0.1 feet of 
                specified grades. Fine grading ensures Base Flood Elevation (BFE) compliance for properties 
                in flood zones.
              </li>
              <li>
                <strong>Compaction:</strong> Proper soil compaction using rollers and compactors to achieve 
                required density for foundation support. Compaction testing ensures soils meet Miami-Dade 
                building code requirements, accounting for unique soil characteristics including limestone 
                bedrock and sandy soils.
              </li>
              <li>
                <strong>Final Inspection:</strong> We coordinate final grading inspections with Miami-Dade 
                RER or municipal building departments and engineers to ensure the building pad meets all 
                specifications, Base Flood Elevation (BFE) requirements, and is ready for foundation 
                construction.
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
                <h3 className={styles.faqQuestion}>What is Base Flood Elevation (BFE) and why is it important for building pads in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Base Flood Elevation (BFE) is the elevation to which floodwater is anticipated to rise 
                  during a base flood (1% annual chance flood). Properties in flood zones (AE, VE, or X) 
                  must have building pads graded to elevations above BFE as required by FEMA and Miami-Dade 
                  building codes. Many Miami-Dade properties, particularly in coastal areas like Miami Beach, 
                  Key Biscayne, and Aventura, are in flood zones. Some municipalities like Coral Gables may 
                  require additional freeboard (typically 1 foot above BFE) for new construction. This is 
                  critical for flood insurance and code compliance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does building pad grading cost in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading costs in Miami-Dade County vary based on pad size, site conditions, 
                  flood zone requirements, required earthwork, and compaction requirements. Typical 
                  residential building pads range from $25,000 to $75,000, while commercial pads can range 
                  from $50,000 to $200,000+ depending on scope. Flood zone requirements, high water table 
                  conditions, and the need for significant fill material can increase costs. Projects in 
                  areas like Miami Beach or Key Biscayne often require more extensive work due to elevation 
                  requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What permits are required for building pad grading in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading in Miami-Dade County requires building permits from Miami-Dade RER 
                  (for unincorporated areas) or municipal building departments (for incorporated areas like 
                  Coral Gables, Pinecrest, or Aventura). Projects in flood zones require FEMA compliance 
                  permits. Projects involving significant land disturbance may require DERM environmental 
                  resource permits and SFWMD environmental resource permits. Effective October 1, 2025, 
                  Miami-Dade implemented updated permit fees. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How precise does building pad grading need to be in Miami-Dade County?</h3>
                <p className={styles.faqAnswer}>
                  Building pad grading in Miami-Dade County must achieve elevations within 0.1 feet (1.2 
                  inches) of specified elevations in engineering drawings. Slopes must match specified grades 
                  exactly. This precision is critical for foundation stability and code compliance. For 
                  properties in flood zones, the building pad must be graded to at least the Base Flood 
                  Elevation (BFE) plus any required freeboard. Our contractors use laser-guided grading 
                  equipment to achieve this precision.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How does Miami-Dade&apos;s high water table affect building pad grading?</h3>
                <p className={styles.faqAnswer}>
                  Miami-Dade&apos;s high water table, which can be within 2-3 feet of the surface in many 
                  areas, requires specialized dewatering techniques and foundation design. Building pads may 
                  need to be elevated above the water table for foundation stability. Proper drainage systems 
                  are essential to prevent water accumulation around foundations. This is especially important 
                  in areas like Miami Beach, Aventura, and coastal neighborhoods where the water table is 
                  particularly high.
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
              <a href="/service-areas/miami/land-grading-site-grading/" className={styles.backLink}>
                ← Back to Miami Land Grading Services
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Miami Building Pad Grading Project?"
        description="Get a free quote for your house pad or building pad grading project in Miami-Dade County. We'll coordinate licensed contractors experienced in Miami-Dade County conditions, Base Flood Elevation (BFE) compliance, and regulatory requirements."
        showPhone={true}
      />
    </main>
  )
}

