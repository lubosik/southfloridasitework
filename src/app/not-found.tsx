import { siteConfig } from '@/lib/site-config'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-primary-900)' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary-700)' }}>
        Page Not Found
      </h2>
      <p style={{ marginBottom: '2rem', color: 'var(--color-grey-600)', maxWidth: '600px' }}>
        The page you are looking for does not exist. It may have been moved or deleted.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--color-accent-500)',
          color: 'var(--color-black)',
          fontWeight: '600',
          borderRadius: 'var(--radius-lg)',
          textDecoration: 'none',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-accent-600)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-accent-500)'
        }}
      >
        Return to Homepage
      </a>
      <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--color-grey-500)' }}>
        Need help? Call us at{' '}
        <a href={siteConfig.phone.href} style={{ color: 'var(--color-accent-600)', fontWeight: '600' }}>
          {siteConfig.phone.display}
        </a>
      </p>
    </div>
  )
}

