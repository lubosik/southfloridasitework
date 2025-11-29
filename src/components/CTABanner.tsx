'use client'

import { siteConfig } from '@/lib/site-config'
import styles from './CTABanner.module.css'

interface CTABannerProps {
  title?: string
  description?: string
  showPhone?: boolean
}

export default function CTABanner({
  title = 'Ready to Get Started?',
  description = 'Get a free quote for your site work, earthwork or land grading project today.',
  showPhone = true,
}: CTABannerProps) {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const form = document.getElementById('quote-form')
    if (form) {
      const headerHeight = 80
      const formPosition = form.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: formPosition - headerHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          <div className={styles.actions}>
            <a
              href="#quote-form"
              onClick={handleQuoteClick}
              className={styles.primaryButton}
            >
              Get Free Quote
            </a>
            {showPhone && (
              <a href={siteConfig.phone.href} className={styles.secondaryButton}>
                Call {siteConfig.phone.display}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

