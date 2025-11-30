import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stump Removal & Grubbing | South Florida',
  description: 'Complete stump removal and grubbing services across South Florida. Remove tree stumps and root systems to prevent foundation settling issues.',
  openGraph: {
    title: 'Stump Removal & Grubbing | South Florida',
    description: 'Complete stump removal and grubbing to remove tree stumps and root systems across South Florida.',
    url: `${siteConfig.url}/services/land-clearing-lot-preparation/stump-removal-grubbing/`,
  },
}

export default function StumpRemovalGrubbingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Stump Removal and Grubbing</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Complete removal of tree stumps and root systems (grubbing) to ensure sites are 
                free of organic material that could decompose and cause settling issues under 
                foundations or paved areas across South Florida.
              </p>
              <p className={styles.description}>
                Stump removal and grubbing is essential for complete site preparation. Our network 
                of licensed contractors has the equipment and expertise to remove stumps and root 
                systems completely, preventing future settling problems and preparing sites for 
                construction.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/stump-removal.jpg"
                alt="Stump removal and grubbing services in South Florida"
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
              Stump removal and grubbing services are essential for developers, custom home builders, 
              general contractors, and property owners who need complete site preparation after tree 
              removal.
            </p>
            <p className={styles.text}>
              Whether you&apos;ve cleared trees from your site or inherited a property with existing 
              stumps, complete stump removal and grubbing ensures sites are ready for construction. 
              We coordinate contractors with the right equipment to remove stumps and root systems 
              completely, preventing future settling problems.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Stump removal and grubbing typically ranges from <strong>$10,000 to $40,000</strong> for 
                residential lots, and <strong>$40,000 to $150,000+</strong> for large commercial sites 
                or properties with many large stumps depending on stump quantity, size, and root 
                system complexity.
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
                  Evaluation of stumps and root systems to determine removal requirements. Assessment 
                  identifies stump sizes, root system extent, and removal methods needed for complete 
                  removal.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Stump Grinding</h3>
                <p className={styles.serviceDescription}>
                  Grinding of stumps below ground level using specialized stump grinding equipment. 
                  Stump grinding removes stumps efficiently and prepares areas for root system removal.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Root System Removal</h3>
                <p className={styles.serviceDescription}>
                  Complete removal of root systems (grubbing) to eliminate all organic material. Root 
                  system removal prevents decomposition that could cause settling under foundations or 
                  paved areas.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Excavation and Removal</h3>
                <p className={styles.serviceDescription}>
                  Excavation and removal of large stumps and root systems using excavators and heavy 
                  equipment. Excavation ensures complete removal of all organic material from sites.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Debris Removal</h3>
                <p className={styles.serviceDescription}>
                  Removal and disposal of ground stumps, roots, and organic debris. Debris removal 
                  ensures sites are clean and ready for construction activities.
                </p>
              </div>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Site Preparation</h3>
                <p className={styles.serviceDescription}>
                  Preparation of grubbed sites for subsequent construction activities. Site preparation 
                  includes backfilling stump holes, rough grading, and coordination with grading and 
                  construction activities.
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
              Complete stump removal and grubbing is critical for preventing future problems:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Foundation Protection:</strong> Decomposing organic material from stumps and 
                roots can cause settling under foundations, leading to structural problems. Complete 
                grubbing eliminates this risk and ensures stable foundation support.
              </li>
              <li>
                <strong>Pavement Protection:</strong> Organic material under paved areas can decompose 
                and cause settling, leading to cracks and pavement failure. Grubbing prevents these 
                problems and ensures stable pavement support.
              </li>
              <li>
                <strong>Site Stability:</strong> Complete removal of root systems ensures stable 
                site conditions for construction. Grubbing eliminates voids and organic material that 
                could affect site stability.
              </li>
              <li>
                <strong>Drainage Improvement:</strong> Removing stumps and roots improves site drainage 
                by eliminating obstructions. Improved drainage prevents water accumulation and related 
                problems.
              </li>
              <li>
                <strong>Construction Readiness:</strong> Complete grubbing prepares sites for 
                construction activities including grading, foundation work, and infrastructure 
                installation. Sites are ready for development after grubbing.
              </li>
              <li>
                <strong>Long-Term Stability:</strong> Grubbing prevents long-term settling problems 
                that could affect structures and paved areas. Complete removal ensures sites remain 
                stable over time.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>South Florida Grubbing Considerations</h2>
            <p className={styles.text}>
              Stump removal and grubbing in South Florida requires attention to local conditions and 
              regulatory requirements:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>High Water Table:</strong> South Florida&apos;s high water table can affect 
                grubbing operations and may require dewatering. Water table conditions determine 
                grubbing methods and may affect root system removal.
              </li>
              <li>
                <strong>Coastal Soil Conditions:</strong> Coastal areas have unique soil 
                characteristics that affect grubbing operations. Soil conditions determine equipment 
                requirements and grubbing methods.
              </li>
              <li>
                <strong>Root System Extent:</strong> South Florida trees often have extensive root 
                systems that require thorough grubbing. Complete root system removal ensures no 
                organic material remains.
              </li>
              <li>
                <strong>Debris Disposal:</strong> Proper disposal of ground stumps, roots, and organic 
                debris must comply with local regulations. Debris may be recycled, mulched, or disposed 
                of at approved facilities.
              </li>
              <li>
                <strong>Site Restoration:</strong> After grubbing, sites require backfilling and 
                restoration. Site restoration ensures proper site conditions for subsequent construction 
                activities.
              </li>
              <li>
                <strong>Permit Requirements:</strong> Grubbing operations may require permits from 
                local municipalities, especially for large-scale operations. We help identify and 
                coordinate all required permits.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Stump Removal and Grubbing Process</h2>
            <p className={styles.text}>
              Our coordinated approach ensures your stump removal and grubbing project is completed 
              thoroughly and efficiently:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Stump Assessment:</strong> We assess your site to identify stumps and root 
                systems requiring removal. Assessment includes reviewing stump sizes, root system 
                extent, and removal methods needed.
              </li>
              <li>
                <strong>Permit Coordination:</strong> We help identify required permits for grubbing 
                operations and coordinate with local municipalities. Permits ensure compliance with 
                regulations.
              </li>
              <li>
                <strong>Contractor Selection:</strong> We match your project with licensed contractors 
                who have the right equipment (stump grinders, excavators, bulldozers) and experience 
                for stump removal and grubbing.
              </li>
              <li>
                <strong>Stump Removal:</strong> Contractors remove stumps using grinding or excavation 
                methods. Stump removal eliminates above-ground stumps and prepares areas for root 
                system removal.
              </li>
              <li>
                <strong>Root System Grubbing:</strong> Contractors perform grubbing to remove root 
                systems completely. Grubbing eliminates all organic material and prevents future 
                settling problems.
              </li>
              <li>
                <strong>Debris Removal:</strong> All ground stumps, roots, and organic debris are 
                removed from sites. Debris removal ensures sites are clean and ready for construction.
              </li>
              <li>
                <strong>Site Restoration:</strong> After grubbing, sites are backfilled and restored. 
                Site restoration prepares areas for subsequent construction activities including 
                grading and foundation work.
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
                <h3 className={styles.faqQuestion}>What is the difference between stump removal and grubbing?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal refers to removing the visible stump above or at ground level, while 
                  grubbing refers to removing the entire root system below ground. Complete site 
                  preparation requires both stump removal and grubbing to eliminate all organic material 
                  that could decompose and cause settling problems.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Why is grubbing important for construction?</h3>
                <p className={styles.faqAnswer}>
                  Grubbing is important because decomposing organic material from roots can cause 
                  settling under foundations and paved areas, leading to structural problems and 
                  pavement failure. Complete grubbing eliminates this risk and ensures stable site 
                  conditions for construction.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does stump removal and grubbing cost?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal and grubbing costs vary based on stump quantity, size, and root system 
                  complexity. Typical residential lots range from $10,000 to $40,000, while large 
                  commercial sites or properties with many large stumps can range from $40,000 to 
                  $150,000+ depending on scope. Factors affecting cost include stump sizes, root system 
                  extent, and site access.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How deep do root systems need to be removed?</h3>
                <p className={styles.faqAnswer}>
                  Root systems should be removed to a depth that eliminates all organic material in areas 
                  where foundations or paved areas will be constructed. Typical grubbing removes roots 
                  to depths of 2-4 feet, with deeper removal for large trees or areas with specific 
                  requirements. Engineering specifications may specify exact grubbing depths.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does stump removal and grubbing take?</h3>
                <p className={styles.faqAnswer}>
                  Stump removal and grubbing timelines vary based on stump quantity, size, and root 
                  system complexity. Typical residential lots take 2-5 days, while large commercial 
                  sites may take 1-2 weeks depending on scope. Weather conditions and site access can 
                  affect timelines. We coordinate with contractors to complete projects efficiently.
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
              We coordinate stump removal and grubbing across all of South Florida. Select your 
              location to learn more about grubbing services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/land-clearing-lot-preparation/stump-removal-grubbing/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/stump-removal-grubbing/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/stump-removal-grubbing/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/land-clearing-lot-preparation/stump-removal-grubbing/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/land-clearing-lot-preparation/" className={styles.backLink}>
                ← Back to Land Clearing and Lot Preparation
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Remove Stumps and Grub Your Site?"
        description="Get a free quote for your stump removal and grubbing project. We'll coordinate licensed contractors to completely remove stumps and root systems, preventing future settling problems."
        showPhone={true}
      />
    </main>
  )
}

