import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_grid}>
                <Link href="/">
                    <img 
                        src="/images/CII-logo.png"
                        alt="Logo"
                        className={`${styles.logo}`}
                    />
                </Link>
               <div className={styles.nav_dropdown}>
                            <button className={styles.nav_dropdown_bttn}>
                            About Us
                            </button>
                            <div className={styles.nav_dropdown_content}>
                                <Link href="/mission_values">
                                    <a>Mission and Values</a>
                                </Link>
                                <Link href="/team">
                                    <a>Team</a>
                                </Link>
                                <Link href="/join">
                                    <a>Join</a>
                                </Link>
                            </div>
                    </div>       
                    <div className={styles.nav_dropdown}>
                            <button className={styles.nav_dropdown_bttn}>
                            CVI
                            </button>
                            <div className={styles.nav_dropdown_content}>
                                <Link href="/project_background">
                                    <a>Project Background</a>
                                </Link>
                                <Link href="https://docs.google.com/document/d/1G2lxL7wix6CXUufJdwgME5hWS07h3udkccy0nKDB4Ps/edit#">
                                    <a>Methodology</a>
                                </Link>
                            </div>
                    </div>     
                    <a href="https://github.com/community-insight-impact/covid_community_vulnerability">
                        <img
                            src="/images/GitHub-Mark-64px.png"
                            alt="GitHub"
                            className={`${styles.socials}`}
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/community-insight-impact/mycompany/">
                        <img
                            src="/images/LI-In-Bug.png"
                            alt="LinkedIn"
                            className={`${styles.socials}`}
                        />
                    </a>
                    <Link href="/donate">
                        <button className={styles.donate}>
                            Donate
                        </button>
                    </Link>     
            </div>    
        </nav>
    )
}