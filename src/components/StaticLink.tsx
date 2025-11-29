import { ReactNode } from 'react'

interface StaticLinkProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

// For static export, use regular anchor tags instead of Next.js Link
// to avoid serialization issues with event handlers
export default function StaticLink({ href, className, children, onClick }: StaticLinkProps) {
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

