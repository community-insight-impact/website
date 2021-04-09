
import styles from './layout.module.css'
import Nav from './nav.js'
import home_styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
      <div className={styles.container}>
      <Nav />
      <main>{children}</main>
      <footer className={home_styles.footer}>
        <h3>Community Insight & Impact</h3>
        <a href="https://vercel.com/?utm_source=community-insight-impact&utm_campaign=oss">
          <img 
            src="powered-by-vercel.svg" 
            alt="Powered by Vercel"/>
        </a>
      </footer>
      </div>
  )
}