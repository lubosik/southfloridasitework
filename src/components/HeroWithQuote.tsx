'use client'

import { useState } from 'react'
import Image from 'next/image'
import QuoteForm from './QuoteForm'
import { siteConfig } from '@/lib/site-config'
import styles from './HeroWithQuote.module.css'

interface HeroWithQuoteProps {
  title: string
  subtitle?: string
  backgroundImageUrl: string
  backgroundImageAlt: string
  overlayStrength?: number // 0-1, default 0.6
  showQuoteForm?: boolean
  formOnRight?: boolean // Desktop: form on right, mobile: always below
}

export default function HeroWithQuote({
  title,
  subtitle,
  backgroundImageUrl,
  backgroundImageAlt,
  overlayStrength = 0.6,
  showQuoteForm = true,
  formOnRight = true,
}: HeroWithQuoteProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.backgroundWrapper}>
        {!imageError ? (
          <Image
            src={backgroundImageUrl}
            alt={backgroundImageAlt}
            fill
            priority
            className={styles.backgroundImage}
            onError={() => setImageError(true)}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.backgroundFallback} />
        )}
        <div
          className={styles.overlay}
          style={{ opacity: overlayStrength }}
          aria-hidden="true"
        />
      </div>

      <div className={styles.container}>
        <div className={`${styles.content} ${formOnRight && showQuoteForm ? styles.contentWithForm : ''}`}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {showQuoteForm && (
              <div className={styles.heroCTAs}>
                <a href={siteConfig.phone.href} className={styles.phoneCTA}>
                  Call Now: {siteConfig.phone.display}
                </a>
                <a
                  href="#quote-form"
                  onClick={(e) => {
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
                  }}
                  className={styles.quoteCTA}
                >
                  Get Instant Quote
                </a>
              </div>
            )}
          </div>

          {showQuoteForm && (
            <div className={`${styles.formWrapper} ${formOnRight ? styles.formRight : styles.formBelow}`}>
              <QuoteForm />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

