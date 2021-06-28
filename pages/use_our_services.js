import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import Layout from '../components/layout'

const contentDirectory = path.join(process.cwd(), 'contents')

export async function getStaticProps() {
    const fullPath = path.join(contentDirectory, `use_our_services.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        props: {
            contentHtml
        }
    }
}    

export default function Partnerships({contentHtml}) {
    return (
        <Layout>
            <article>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
        </Layout>
    )

}
