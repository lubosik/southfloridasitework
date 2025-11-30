import { siteConfig } from '@/lib/site-config'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = siteConfig.primaryServices.map((service) => ({
    href: `/services/${service.slug}/`,
    label: service.name,
  }))

  const areaLinks = siteConfig.serviceAreas.map((area) => ({
    href: `/service-areas/${area.slug}/`,
    label: `${area.name}, ${area.county}`,
  }))

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>South Florida Site Work</h3>
            <p className={styles.description}>
              Professional site work, earthwork, and land grading services across South Florida.
            </p>
            <div className={styles.contact}>
              <a href={siteConfig.phone.href} className={styles.phone}>
                {siteConfig.phone.display}
              </a>
              <a href={siteConfig.email.href} className={styles.email}>
                {siteConfig.email.display}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h4 className={styles.subheading}>Services</h4>
            <ul className={styles.linkList}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className={styles.section}>
            <h4 className={styles.subheading}>Service Areas</h4>
            <ul className={styles.linkList}>
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.subheading}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="/" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="/services/" className={styles.link}>
                  All Services
                </a>
              </li>
              <li>
                <a href="/service-areas/" className={styles.link}>
                  Service Areas
                </a>
              </li>
              <li>
                <a href="/projects/" className={styles.link}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/about/" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/resources/" className={styles.link}>
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact/" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            <strong>Service Area Business:</strong> {siteConfig.businessModel.description} 
            This is a dispatch office. No walk-ins. Scheduling and support by phone and online.
          </p>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

