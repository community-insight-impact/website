
import styles from './layout.module.css'
import Nav from './nav.js'
import home_styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
      <div className={styles.container}>
      <Nav />
      <main>{children}</main>
      <footer className={home_styles.footer}>
        <img 
          src = "CVI-Logo.png"
          alt = "Logo"
          >
        </img>
        <h3>Community Insight Impact</h3>
      </footer>
      </div>
  )
}