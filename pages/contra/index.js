import Head from 'next/head'
import Image from 'next/image'

export default function Contra() {
  return (
    <div className="container">
      <Head>
        <title>Super Useful App</title>
        <meta name="description" content="This app has a lot of super useful tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Lo contrario
        </h1>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
