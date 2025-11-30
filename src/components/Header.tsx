'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus trapping for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            lastFocusableRef.current?.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            firstFocusableRef.current?.focus()
            e.preventDefault()
          }
        }
      }
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menuOpen')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('menuOpen')
      document.body.style.overflow = ''
    }
    return () => {
      document.body.classList.remove('menuOpen')
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

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
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services/', label: 'Services' },
    { href: '/service-areas/', label: 'Service Areas' },
    { href: '/projects/', label: 'Projects' },
    { href: '/about/', label: 'About' },
    { href: '/resources/', label: 'Resources' },
    { href: '/contact/', label: 'Contact' },
  ]

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
      role="banner"
    >
      <div className={styles.container}>
        <a href="/" className={styles.logo} aria-label="South Florida Site Work Home">
          <Image
            src="/images/logo.png"
            alt="South Florida Site Work"
            width={200}
            height={60}
            className={styles.logoImage}
            priority
          />
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#quote-form"
          onClick={handleQuoteClick}
          className={styles.quoteButton}
          aria-label="Get Free Quote"
        >
          Get Free Quote
        </a>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburger}>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={styles.mobileMenuOverlay}
          aria-hidden={!isMobileMenuOpen}
          onClick={(e) => {
            // Close menu when clicking on overlay background
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false)
            }
          }}
        >
          <div className={styles.mobileMenuPanel}>
            {/* Close Button */}
            <button
              className={styles.mobileMenuClose}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <span className={styles.closeIcon}>×</span>
            </button>

            {/* Logo */}
            <div className={styles.mobileMenuLogo}>
              <Image
                src="/images/logo.png"
                alt="South Florida Site Work"
                width={200}
                height={60}
                className={styles.mobileLogoImage}
                priority
              />
            </div>

            {/* Navigation Links */}
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              <ul className={styles.mobileNavList}>
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                      ref={index === 0 ? firstFocusableRef : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#quote-form"
                onClick={handleQuoteClick}
                className={styles.mobileQuoteButton}
                ref={lastFocusableRef}
              >
                Get Free Quote
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

