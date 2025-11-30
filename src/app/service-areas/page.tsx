import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Service Areas | South Florida Site Work',
  description: 'Site work, earthwork, and land grading services in Miami-Dade, Broward, Palm Beach, and Monroe Counties.',
  openGraph: {
    title: 'Service Areas | South Florida Site Work',
    description: 'Site work, earthwork, and land grading services across South Florida.',
    url: `${siteConfig.url}/service-areas/`,
  },
}

export default function ServiceAreasPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Service Areas</h1>
          <p className={styles.subtitle}>
            We coordinate licensed contractors for site work, earthwork, and land grading 
            projects throughout South Florida.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.intro}>
              Our network of licensed contractors serves commercial and residential projects 
              across Miami-Dade, Broward, Palm Beach, and Monroe Counties. Select your location 
              to view available services in your area.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.locationsGrid}>
            {siteConfig.serviceAreas.map((area) => (
              <a
                key={area.slug}
                href={`/service-areas/${area.slug}/`}
                className={styles.locationCard}
              >
                <h2 className={styles.locationTitle}>{area.name}</h2>
                <p className={styles.locationCounty}>{area.county}</p>
                <p className={styles.locationDescription}>
                  View all site work, earthwork, and land grading services available in {area.name}.
                </p>
                <span className={styles.locationLink}>View Services →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

