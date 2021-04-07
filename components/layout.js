
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
        <img src = "powered-by-vercel.svg">
        </img>
      </footer>
      </div>
  )
}