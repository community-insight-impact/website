import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
               <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>       
                <li>
                    <Link href="/contributors">
                        <a>Contributors</a>
                    </Link>
                </li>          
                <li>
                    <Link href="/get_involved">
                        <a>Get Involved!</a>
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/community-insight-impact/covid_community_vulnerability">
                        <img
                            src="/GitHub-Mark-64px.png"
                            alt="GitHub"
                            className={`${styles.logo}`}
                        />
                    </a>
                </li>
            </ul>
            <a href="https://pumagic.maps.arcgis.com/apps/opsdashboard/index.html#/be9712cf50f843f5a346ea145e82e01c"
                    className={styles.dash}>
                    Dashboard
                </a>
        </nav>
    )
}