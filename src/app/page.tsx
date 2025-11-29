import type { Metadata } from 'next'
import HeroWithQuote from '@/components/HeroWithQuote'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { heroBackgroundImage } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'South Florida Site Work | Earthwork & Land Grading',
  description: 'Professional site work, earthwork and land grading services across Miami-Dade, Broward, Palm Beach and Monroe Counties. Licensed contractors for commercial and custom home projects starting at $25,000.',
  openGraph: {
    title: 'South Florida Site Work | Earthwork & Land Grading',
    description: 'Professional site work, earthwork and land grading services across South Florida. Licensed contractors for commercial and custom home projects.',
    url: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroWithQuote
        title="South Florida Site Work, Earthwork and Land Grading"
        subtitle="We deliver large-scale site work, land grading and drainage for commercial projects and custom homes across South Florida."
        backgroundImageUrl={heroBackgroundImage}
        backgroundImageAlt="Heavy machinery performing site work and earthmoving on a construction site in South Florida"
        overlayStrength={0.7}
        showQuoteForm={true}
        formOnRight={true}
      />

      {/* Service Categories */}
      <section className={styles.section} aria-labelledby="services-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="services-heading" className={styles.sectionTitle}>
              Complete Site Work & Earthwork Services
            </h2>
            <p className={styles.sectionDescription}>
              We coordinate a vetted network of licensed contractors to deliver comprehensive site work solutions across South Florida.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {siteConfig.primaryServices.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="audience-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="audience-heading" className={styles.sectionTitle}>
              Who We Work With
            </h2>
            <p className={styles.sectionDescription}>
              We serve general contractors, developers, custom home builders, commercial property owners, and high-end homeowners across South Florida.
            </p>
          </div>
          <div className={styles.audienceGrid}>
            {siteConfig.projectInfo.targetAudience.map((audience, index) => (
              <div key={index} className={styles.audienceCard}>
                <h3 className={styles.audienceTitle}>{audience}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className={styles.section} aria-labelledby="areas-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="areas-heading" className={styles.sectionTitle}>
              Service Areas
            </h2>
            <p className={styles.sectionDescription}>
              We coordinate licensed contractors across all of South Florida, from Miami to the Florida Keys.
            </p>
          </div>
          <div className={styles.areasGrid}>
            {siteConfig.serviceAreas.map((area) => (
              <div key={area.slug} className={styles.areaCard}>
                <h3 className={styles.areaName}>{area.name}</h3>
                <p className={styles.areaCounty}>{area.county}</p>
                <p className={styles.areaCities}>
                  Serving: {area.cities.slice(0, 3).join(', ')}
                  {area.cities.length > 3 && ' and more'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="why-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="why-heading" className={styles.sectionTitle}>
              Why Choose South Florida Site Work
            </h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Integrity & Professionalism</h3>
              <p className={styles.featureDescription}>
                We maintain the highest standards of integrity in every project. Our vetted network of licensed contractors is committed to professional service and transparent communication throughout your project.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Safety First</h3>
              <p className={styles.featureDescription}>
                Safety is paramount on every job site. All contractors in our network maintain current safety certifications, proper insurance coverage, and adhere to strict safety protocols.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Reliability & Experience</h3>
              <p className={styles.featureDescription}>
                With extensive experience coordinating large-scale site work projects, we understand the complexities of South Florida conditions including high water tables, flood zones, and coastal soil challenges.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Local Expertise</h3>
              <p className={styles.featureDescription}>
                Our deep knowledge of South Florida&apos;s unique conditions—from Miami-Dade&apos;s flood zones to the Florida Keys&apos; coastal requirements—ensures your project meets all local regulations and environmental standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Projects */}
      <section className={styles.section} aria-labelledby="projects-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="projects-heading" className={styles.sectionTitle}>
              Representative Projects
            </h2>
            <p className={styles.sectionDescription}>
              Examples of the types of projects we coordinate across South Florida.
            </p>
          </div>
          <div className={styles.projectsGrid}>
            <ProjectCard
              title="Commercial Retail Pad Site"
              city="Miami, FL"
              problem="New retail development required complete site development including grading, drainage, and utility preparation."
              solution="Coordinated full site work package including mass excavation, cut and fill operations, stormwater drainage system installation, and final grading to building pad specifications."
              outcome="Site ready for building construction on schedule, with all permits and inspections completed. Proper drainage prevents future flooding issues."
              imagePath="/images/projects/commercial-retail-pad.png"
              isRepresentative={true}
            />
            <ProjectCard
              title="Custom Home Building Pad"
              city="West Palm Beach, FL"
              problem="High-end custom home required precise grading for building pad on sloped lot with drainage challenges."
              solution="Performed detailed site grading, created proper building pad elevation, installed French drain system, and implemented erosion control measures."
              outcome="Perfect building pad elevation achieved. Drainage system handles heavy South Florida rains. Home construction proceeded without delays."
              imagePath="/images/projects/custom-home-pad.png"
              isRepresentative={true}
            />
            <ProjectCard
              title="Drainage & Regrading Solution"
              city="Fort Lauderdale, FL"
              problem="Existing commercial property experiencing flooding and drainage issues during heavy rains."
              solution="Regraded site to improve water flow, installed new stormwater inlets and piping, created retention swales, and improved outfall connections."
              outcome="Eliminated flooding issues. Property now handles stormwater effectively. Improved property value and usability."
              imagePath="/images/projects/drainage-regrading.png"
              isRepresentative={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Start Your Project?"
        description="Get a free, fast quote for your site work, earthwork or land grading project. We'll connect you with the right licensed contractor for your needs."
        showPhone={true}
      />
    </main>
  )
}
