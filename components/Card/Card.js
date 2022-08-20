import Link from 'next/link'
import styles from './Card.module.css'

const CardContent = ({ title, content, children }) => (
  <>
    <h2>{title}</h2>
    <p>{content}</p>
    {children}
  </>
)

export default function Card(props) {
  const { href } = props
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.card}>
          <CardContent {...props} />
        </a>
      </Link>
    )
  }

  return (
    <div className={styles.card}>
      <CardContent {...props} />
    </div>
  )
} 