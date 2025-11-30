import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stump Removal & Grubbing in Fort Lauderdale, FL | Broward County',
  description: 'Complete stump removal and grubbing services in Broward County. Remove tree stumps and root systems to prevent foundation settling issues.',
  openGraph: {
    title: 'Stump Removal & Grubbing in Fort Lauderdale, FL | Broward County',
    description: 'Complete stump removal and grubbing to remove tree stumps and root systems in Broward County.',
    url: `${siteConfig.url}/service-areas/fort-lauderdale/land-clearing-lot-preparation/stump-removal-grubbing/`,
  },
}

export default function FortLauderdaleStumpRemovalGrubbingPage() {
  return (
    <main>
      <HeroWithQuote
        title="Stump Removal and Grubbing in Fort Lauderdale, FL"
        subtitle="Complete removal of tree stumps and root systems across Broward County, from Fort Lauderdale to Hollywood, Weston to Plantation, Coral Ridge to Victoria Park"
        backgroundImageUrl="/images/hero/hero-background.png"
        backgroundImageAlt="Stump removal and grubbing services in Fort Lauderdale, Florida"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Stump removal and grubbing services in Broward County are essential for developers, custom 
              home builders, general contractors, and property owners who need complete site preparation after 
              tree removal across Broward County neighborhoods including Fort Lauderdale, Hollywood, Weston, 
              Plantation, Pembroke Pines, Coral Springs, Parkland, Davie, Victoria Park, Coral Ridge, Harbor 
              Beach, and throughout Broward County.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve cleared trees from your site or inherited a property with existing 
              stumps, complete stump removal and grubbing ensures sites are ready for construction. We 
              coordinate contractors with the right equipment to remove stumps and root systems completely, 
              preventing future settling problems, with attention to Broward County high water table 
              conditions and coastal soil characteristics.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes in Broward County</h3>
              <p className={styles.highlightText}>
                Stump removal and grubbing in Broward County typically ranges from <strong>$15,000 to $50,000</strong> for 
                residential lots, and <strong>$50,000 to $180,000+</strong> for large commercial sites 
                or properties with many large stumps depending on stump quantity, size, root system 
                complexity, and Broward County high water table conditions which may require additional 
                dewatering during grubbing operations (SFWMD Environmental Resource Permits).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>What Stump Removal and Grubbing Includes</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Stump Assessment</h3>
                <p className={styles.serviceDescription}>
                  Evaluation of stumps and root systems to determine removal requirements in Broward County. 
                  Assessment identifies stump sizes, root system extent, removal methods needed, and high water 
                  table considerations that may affect grubbing operations.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>DER Permit Coordination</h3>
                <p className={styles.serviceDescription}>
                  Coordination of Broward County Development & Environmental Review (DER) through ePermits 
                  OneStop for applicable building permits. Stump removal may require tree removal permits if 
                  associated with tree removal, and grubbing operations may require additional permits 
                  depending on scope and site conditions. All DER submittals are only accepted electronically.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Stump Grinding</h3>
                <p className={styles.serviceDescription}>
                  Grinding of stumps below ground level using specialized stump grinding equipment. Stump grinding 
                  removes stumps efficiently and prepares areas for root system removal, with attention to 
                  Broward County high water table conditions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Root System Removal</h3>
                <p className={styles.serviceDescription}>
                  Complete removal of root systems (grubbing) to eliminate all organic material. Root system 
                  removal prevents decomposition that could cause settling under foundations or paved areas, with 
                  thorough grubbing to depths appropriate for Broward County soil conditions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Excavation and Removal</h3>
                <p className={styles.serviceDescription}>
                  Excavation and removal of large stumps and root systems using excavators and heavy equipment. 
                  Excavation ensures complete removal of all organic material from sites, with attention to 
                  Broward County coastal soil characteristics and high water table conditions.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Dewatering for High Water Table</h3>
                <p className={styles.serviceDescription}>
                  Dewatering operations for grubbing in areas with high water table conditions. Broward County&apos;s 
                  high water table may require dewatering during grubbing operations, and may require SFWMD 
                  Environmental Resource Permits for dewatering activities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Removal</h3>
                <p className={styles.serviceDescription}>
                  Removal and disposal of ground stumps, roots, and organic debris according to Broward County 
                  regulations. Debris removal ensures sites are clean and ready for construction activities, with 
                  proper disposal at approved facilities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Preparation</h3>
                <p className={styles.serviceDescription}>
                  Preparation of grubbed sites for subsequent construction activities. Site preparation includes 
                  backfilling stump holes, rough grading, and coordination with grading and construction 
                  activities, with attention to Broward County soil compaction requirements and storm event 
                  protection (100-year, 3-day storm event for structures; 10-year, 3-day storm event for 
                  roadways and parking lots).
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Coastal Soil Considerations</h3>
                <p className={styles.serviceDescription}>
                  Specialized grubbing techniques for Broward County coastal soil conditions. Coastal areas 
                  have unique soil characteristics that affect grubbing operations, requiring appropriate 
                  equipment and methods for complete root system removal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Why Stump Removal and Grubbing Is Important</h2>
            <p className={styles.text}>
              Complete stump removal and grubbing is critical for preventing future problems in Broward County:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Foundation Protection:</strong> Decomposing organic material from stumps and roots can 
                cause settling under foundations, leading to structural problems. Complete grubbing eliminates 
                this risk and ensures stable foundation support, critical in Broward County with high water 
                table conditions that can accelerate decomposition.
              </li>
              <li>
                <strong>Pavement Protection:</strong> Organic material under paved areas can decompose and 
                cause settling, leading to cracks and pavement failure. Grubbing prevents these problems and 
                ensures stable pavement support, essential for Broward County roads and driveways with storm 
                event protection (10-year, 3-day storm event for roadways and parking lots).
              </li>
              <li>
                <strong>Site Stability:</strong> Complete removal of root systems ensures stable site conditions 
                for construction. Grubbing eliminates voids and organic material that could affect site stability, 
                particularly important in Broward County with high water table and coastal soil conditions.
              </li>
              <li>
                <strong>Drainage Improvement:</strong> Removing stumps and roots improves site drainage by 
                eliminating obstructions. Improved drainage prevents water accumulation and related problems, 
                critical in Broward County with frequent heavy rainfall, storm event protection requirements, 
                and flood zone considerations.
              </li>
              <li>
                <strong>Construction Readiness:</strong> Complete grubbing prepares sites for construction 
                activities including grading, foundation work, and infrastructure installation. Sites are ready 
                for development after grubbing, with proper attention to Broward County permit requirements and 
                storm event protection.
              </li>
              <li>
                <strong>Long-Term Stability:</strong> Grubbing prevents long-term settling problems that could 
                affect structures and paved areas. Complete removal ensures sites remain stable over time, 
                essential in Broward County with high water table and coastal conditions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Grubbing Considerations</h2>
            <p className={styles.text}>
              Stump removal and grubbing in Broward County requires attention to local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> Broward County&apos;s high water table can affect grubbing 
                operations and may require dewatering. Water table conditions determine grubbing methods and may 
                affect root system removal, with SFWMD Environmental Resource Permits required for dewatering 
                activities. High water table conditions can make grubbing more challenging and may require 
                specialized equipment.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas in Broward County have unique soil 
                characteristics including sandy soils, limestone bedrock, and organic material that affect grubbing 
                operations. Soil conditions determine equipment requirements and grubbing methods, with attention 
                to complete root system removal in coastal environments.
              </li>
              <li>
                <strong>Root System Extent:</strong> South Florida trees often have extensive root systems that 
                require thorough grubbing. Complete root system removal ensures no organic material remains, with 
                typical grubbing depths of 2-4 feet, and deeper removal for large trees or areas with specific 
                requirements. Broward County&apos;s tropical climate results in extensive root systems that 
                require comprehensive grubbing.
              </li>
              <li>
                <strong>DER Permit Requirements:</strong> Stump removal and grubbing operations may require Broward 
                County Development & Environmental Review (DER) through ePermits OneStop, especially if associated 
                with tree removal or involving dewatering. Tree removal permits may cover stump removal, and SFWMD 
                Environmental Resource Permits may be required for dewatering during grubbing operations. All DER 
                submittals are only accepted electronically. Permits are valid for 180 days from the date of 
                issuance. We help identify and coordinate all required permits.
              </li>
              <li>
                <strong>Natural Resource Protection Code:</strong> Broward County&apos;s Natural Resource Protection 
                Code (Chapter 27) regulates environmental activities and enforces requirements for development in 
                environmentally sensitive areas. Grubbing operations must comply with these requirements, with proper 
                environmental protection measures.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Proper disposal of ground stumps, roots, and organic debris must 
                comply with Broward County regulations. Debris may be recycled, mulched, or disposed of at 
                approved facilities, with attention to local waste management requirements.
              </li>
              <li>
                <strong>Site Restoration:</strong> After grubbing, sites require backfilling and restoration. Site 
                restoration ensures proper site conditions for subsequent construction activities, with attention 
                to Broward County soil compaction requirements, drainage considerations, and storm event 
                protection (100-year, 3-day storm event for structures; 10-year, 3-day storm event for roadways 
                and parking lots).
              </li>
              <li>
                <strong>Flood Zone Considerations:</strong> Properties in flood zones may have additional 
                requirements for grubbing operations. Flood zone compliance ensures proper site preparation and 
                may affect grubbing depths and methods, with storm event protection requirements.
              </li>
              <li>
                <strong>Limestone Bedrock:</strong> Broward County&apos;s limestone bedrock can affect grubbing 
                operations, requiring specialized equipment and techniques. Limestone bedrock may limit grubbing 
                depths and require alternative methods for root system removal.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Stump Removal and Grubbing Process in Broward County</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your stump removal and grubbing project in Broward County is 
              completed thoroughly and efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Stump Assessment:</strong> We assess your site to identify stumps and root systems 
                requiring removal. Assessment includes reviewing stump sizes, root system extent, removal methods 
                needed, and Broward County high water table and soil conditions that may affect grubbing 
                operations.
              </li>
              <li>
                <strong>Development Permit Coordination:</strong> We help identify required development permits as 
                described in Florida Statute 380.04, which must be obtained prior to the issuance of building 
                permits for stump removal and grubbing projects in Broward County.
              </li>
              <li>
                <strong>Broward County Permit Coordination:</strong> We help identify required permits including 
                Uniform Building Permit Applications (updated November 14, 2025), Development & Environmental 
                Review (DER) through ePermits OneStop, SFWMD Environmental Resource Permits for dewatering during 
                grubbing operations, Natural Resource Protection Code compliance, and coordinate with regulatory 
                agencies. All DER submittals are only accepted electronically. Permits are valid for 180 days 
                from the date of issuance. Permits ensure compliance with Broward County regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors who have the 
                right equipment (stump grinders, excavators, bulldozers, dewatering equipment) and experience for 
                stump removal and grubbing in Broward County conditions.
              </li>
              <li>
                <strong>Dewatering (if required):</strong> For sites with high water table conditions, contractors 
                perform dewatering operations with SFWMD Environmental Resource Permits. Dewatering ensures proper 
                grubbing conditions and prevents water-related complications.
              </li>
              <li>
                <strong>Stump Removal:</strong> Contractors remove stumps using grinding or excavation methods. 
                Stump removal eliminates above-ground stumps and prepares areas for root system removal, with 
                attention to Broward County soil conditions.
              </li>
              <li>
                <strong>Root System Grubbing:</strong> Contractors perform grubbing to remove root systems completely. 
                Grubbing eliminates all organic material and prevents future settling problems, with typical depths 
                of 2-4 feet, and deeper removal for large trees or areas with specific requirements.
              </li>
              <li>
                <strong>Debris Removal:</strong> All ground stumps, roots, and organic debris are removed from sites 
                according to Broward County regulations. Debris removal ensures sites are clean and ready for 
                construction, with proper disposal at approved facilities.
              </li>
              <li>
                <strong>Site Restoration:</strong> After grubbing, sites are backfilled and restored. Site restoration 
                prepares areas for subsequent construction activities including grading and foundation work, with 
                attention to Broward County soil compaction requirements, drainage considerations, and storm event 
                protection (100-year, 3-day storm event for structures; 10-year, 3-day storm event for roadways 
                and parking lots).
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Broward County Service Areas</h2>
            <p className={styles.text}>
              We coordinate stump removal and grubbing services across Broward County, including:
            </p>
            <div className={styles.locationGroup}>
              <h3 className={styles.locationGroupTitle}>Broward County Neighborhoods</h3>
              <ul className={styles.locationItems}>
                <li>Fort Lauderdale</li>
                <li>Hollywood</li>
                <li>Weston</li>
                <li>Plantation</li>
                <li>Pembroke Pines</li>
                <li>Coral Springs</li>
                <li>Parkland</li>
                <li>Davie</li>
                <li>Miramar</li>
                <li>Victoria Park</li>
                <li>Coral Ridge</li>
                <li>Harbor Beach</li>
                <li>Pompano Beach</li>
                <li>Deerfield Beach</li>
                <li>Lauderdale-by-the-Sea</li>
                <li>Las Olas Boulevard</li>
                <li>Downtown Fort Lauderdale</li>
                <li>Fort Lauderdale Beach</li>
                <li>Hollywood Beach</li>
                <li>Pompano Beach</li>
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
                <h3 className={styles.faqQuestion}>What is the difference between stump removal and grubbing?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal refers to removing the visible stump above or at ground level, while grubbing 
                  refers to removing the entire root system below ground. Complete site preparation requires both 
                  stump removal and grubbing to eliminate all organic material that could decompose and cause 
                  settling problems. In Broward County, thorough grubbing is essential due to high water table 
                  conditions that can accelerate decomposition.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Why is grubbing important for construction in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Grubbing is important because decomposing organic material from roots can cause settling under 
                  foundations and paved areas, leading to structural problems and pavement failure. Complete grubbing 
                  eliminates this risk and ensures stable site conditions for construction. Broward County&apos;s 
                  high water table and frequent heavy rainfall can accelerate decomposition, making thorough grubbing 
                  even more critical, especially with storm event protection requirements (100-year, 3-day storm event 
                  for structures; 10-year, 3-day storm event for roadways and parking lots).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does stump removal and grubbing cost in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal and grubbing costs in Broward County vary based on stump quantity, size, root system 
                  complexity, and high water table conditions. Typical residential lots range from $15,000 to $50,000, 
                  while large commercial sites or properties with many large stumps can range from $50,000 to $180,000+ 
                  depending on scope. High water table conditions may require additional dewatering costs (SFWMD 
                  Environmental Resource Permits). Factors affecting cost include stump sizes, root system extent, site 
                  access, and Broward County soil conditions. Broward County permit processing through ePermits OneStop 
                  can add time and costs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep do root systems need to be removed in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Root systems should be removed to a depth that eliminates all organic material in areas where 
                  foundations or paved areas will be constructed. Typical grubbing removes roots to depths of 2-4 feet, 
                  with deeper removal for large trees or areas with specific requirements. Engineering specifications 
                  may specify exact grubbing depths. Broward County&apos;s high water table and coastal soil 
                  conditions may affect grubbing depths and methods, with consideration of storm event protection 
                  requirements.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need permits for stump removal and grubbing?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal and grubbing operations may require Broward County Development & Environmental Review 
                  (DER) through ePermits OneStop, especially if associated with tree removal or involving dewatering. 
                  Tree removal permits may cover stump removal, and SFWMD Environmental Resource Permits may be required 
                  for dewatering during grubbing operations in areas with high water table conditions. Development 
                  permits (Florida Statute 380.04) may be required for projects involving development work. All DER 
                  submittals are only accepted electronically. Permits are valid for 180 days from the date of 
                  issuance. We help identify and coordinate all required permits.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does stump removal and grubbing take in Broward County?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal and grubbing timelines in Broward County vary based on stump quantity, size, root 
                  system complexity, and high water table conditions. Typical residential lots take 2-5 days, while large 
                  commercial sites may take 1-2 weeks depending on scope. High water table conditions requiring 
                  dewatering may add time to projects. Weather conditions, permit processing through ePermits OneStop, 
                  and site access can affect timelines. We coordinate with contractors to complete projects efficiently.
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
              <a href="/services/land-clearing-lot-preparation/stump-removal-grubbing/" className={styles.backLink}>
                ← View General Stump Removal and Grubbing Services
              </a>
            </p>
            <p className={styles.text}>
              <a href="/service-areas/fort-lauderdale/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Fort Lauderdale Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Remove Stumps and Grub Your Site in Broward County?"
        description="Get a free quote for your stump removal and grubbing project. We'll coordinate licensed contractors to completely remove stumps and root systems, preventing future settling problems, with full Broward County permit compliance, Natural Resource Protection Code compliance, and SFWMD Environmental Resource Permit coordination."
        showPhone={true}
      />
    </main>
  )
}

