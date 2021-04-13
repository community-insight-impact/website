import Layout from '../components/layout'
import Head from 'next/head'
import contributors from '../contents/contributors.js'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Team({contentHtml}) {
    return (
        <Layout>
            <ul className={styles.team_list}>
            {contributors.map(({ id, name, title, source, out }) => (
                <li className={styles.listItem} key={id}>
                    <Link href={out}>
                    <a>
                        <img className={styles.team_img}
                            src={source}
                            alt={id}
                        />
                        <div className={styles.team_details}>
                            {name}
                            <div className={styles.team_name}>{title}</div>
                        </div>
                    </a>
                    </Link>
                </li>
                ))}
            </ul>
        </Layout>
    )

}