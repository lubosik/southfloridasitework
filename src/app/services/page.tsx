import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import ServiceCard from '@/components/ServiceCard'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Site Work Services | South Florida Earthwork & Grading',
  description: 'Complete site work and earthwork services across South Florida. Site development, land grading, excavation, drainage, and land clearing for commercial and residential projects.',
  openGraph: {
    title: 'Site Work Services | South Florida Earthwork & Grading',
    description: 'Complete site work and earthwork services across South Florida. Site development, land grading, excavation, drainage, and land clearing.',
    url: `${siteConfig.url}/services/`,
  },
}

export default function ServicesIndexPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Complete Site Work & Earthwork Services</h1>
          <p className={styles.intro}>
            South Florida Site Work coordinates a vetted network of licensed contractors to deliver 
            comprehensive site work and earthwork services across Miami-Dade, Broward, Palm Beach, 
            and Monroe Counties. From initial site development to final grading, we handle the 
            coordination, scheduling, and quality assurance for projects of all sizes.
          </p>
          <p className={styles.description}>
            Our complete site work services encompass everything needed to prepare land for 
            construction, from clearing and grubbing to final site preparation. Whether you&apos;re 
            building a custom home, developing a commercial property, or working on infrastructure, 
            we coordinate the right licensed contractors with the proper equipment and certifications 
            for your specific project needs.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Site Work Services</h2>
          <p className={styles.sectionDescription}>
            Explore our primary service categories to learn more about what we coordinate for 
            commercial and residential projects across South Florida.
          </p>
          
          <div className={styles.servicesGrid}>
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

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>What is Site Work?</h3>
              <p className={styles.infoText}>
                Site work encompasses all the earthwork, grading, excavation, and preparation 
                activities required before building construction begins. This includes land 
                clearing, mass excavation, cut and fill operations, grading for building pads 
                and roads, drainage system installation, and utility preparation.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Service Area Business Model</h3>
              <p className={styles.infoText}>
                We operate as a service-area business, coordinating work through a network of 
                vetted, licensed contractors. We handle project intake, scoping, scheduling, 
                and ongoing support, then dispatch the nearest qualified contractor with the 
                right equipment and certifications to perform the field work.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Typical Project Sizes</h3>
              <p className={styles.infoText}>
                Our services are designed for larger-scale projects, with typical project sizes 
                starting around $25,000. We work with general contractors, developers, custom 
                home builders, commercial property owners, and high-end homeowners who require 
                comprehensive site work solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Discuss Your Project?</h2>
          <p className={styles.ctaDescription}>
            Contact us today for a free quote on your site work, earthwork, or land grading project. 
            We&apos;ll connect you with the right licensed contractor for your needs.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact/" className={styles.primaryButton}>
              Request a Quote
            </a>
            <a href={siteConfig.phone.href} className={styles.secondaryButton}>
              Call {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

