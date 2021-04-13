
import styles from './layout.module.css'
import Nav from './nav.js'
import home_styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
      <div className={styles.container}>
        <Head>
          <title>Community Insight & Impact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main>{children}</main>
        <footer className={home_styles.footer}>
          <h3>Community Insight & Impact</h3>
          <a href="https://vercel.com/?utm_source=community-insight-impact&utm_campaign=oss">
            <img 
              src="/images/powered-by-vercel.svg" 
              alt="Powered by Vercel"
            />
          </a>
        </footer>
      </div>
  )
}