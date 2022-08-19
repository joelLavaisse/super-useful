import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super Useful App</title>
        <meta name="description" content="This app has a lot of super useful tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Super duper useful tools
        </h1>

        <p className={styles.description}>
          Las herramientas mas copadas del viejo oeste
        </p>

        <div className={styles.grid}>
          <Link href="/contra">
            <a className={styles.card}>
              <h2>Lo contrario &rarr;</h2>
              <p>Esta página no está de acuerdo con lo que decís.</p>
            </a>
          </Link>

          <Link href="/metricas">
            <a className={styles.card}>
              <h2>Métricas &rarr;</h2>
              <p>Acá se mide de todo... salvo eso que necesitas.</p>
            </a>
          </Link>

          <Link href="/si">
            <a className={styles.card}>
              <h2>Si &rarr;</h2>
              <p>Todos necesitamos que nos validen de vez en cuando.</p>
            </a>
          </Link>

          <Link href="/no">
            <a className={styles.card}>
              <h2>No &rarr;</h2>
              <p>Para esa persona que no merece ser validada.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
