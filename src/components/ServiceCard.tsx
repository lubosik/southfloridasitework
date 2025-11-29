import StaticLink from './StaticLink'
import Image from 'next/image'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  name: string
  slug: string
  description: string
  imageQuery?: string
}

export default function ServiceCard({ name, slug, description, imageQuery }: ServiceCardProps) {
  const imageUrl = getServiceImagePath(slug)

  return (
    <StaticLink href={`/services/${slug}/`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={`${name} services in South Florida`}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.link}>Learn More →</span>
      </div>
    </StaticLink>
  )
}

