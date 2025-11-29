'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface StaticLinkProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
  prefetch?: boolean
}

export default function StaticLink({ href, className, children, onClick, prefetch = false }: StaticLinkProps) {
  return (
    <Link href={href} className={className} onClick={onClick} prefetch={prefetch}>
      {children}
    </Link>
  )
}

