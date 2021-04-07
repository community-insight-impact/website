import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Community Insight & Impact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Empowering communities through equitable data analytics
        </h1>

        <p className={styles.description}>
        Community Insight & Impact aims to provide a variety of indices 
        to assess community vulnerability due to the impact of COVID-19 
        across the US at the county level.
        </p>
      </main>
      <footer className={styles.footer}>
        <h3>Community Insight & Impact</h3>
        <img src = "powered-by-vercel.svg">
        </img>
      </footer>
      </div>
  )
}
