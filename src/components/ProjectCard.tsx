import Image from 'next/image'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  city: string
  problem: string
  solution: string
  outcome: string
  imagePath: string
  isRepresentative?: boolean
}

export default function ProjectCard({
  title,
  city,
  problem,
  solution,
  outcome,
  imagePath,
  isRepresentative = true,
}: ProjectCardProps) {

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagePath}
          alt={`${title} project in ${city}`}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {isRepresentative && (
          <div className={styles.badge}>Representative Project</div>
        )}
        <div className={styles.cityTag}>{city}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <strong>Challenge:</strong> {problem}
          </div>
          <div className={styles.detailItem}>
            <strong>Work Completed:</strong> {solution}
          </div>
          <div className={styles.detailItem}>
            <strong>Outcome:</strong> {outcome}
          </div>
        </div>
      </div>
    </article>
  )
}

