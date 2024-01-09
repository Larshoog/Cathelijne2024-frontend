// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Layout from "../components/Layout";
import Section from "../components/Section";
import utilStyles from '../styles/utils.module.css'
import Image from "next/image";

const Index = ({posts}) => (
    <Layout>
        <Image src={'/images/IMG_8479.jpeg'} width={0} height={0} sizes="100vw"
               style={{ width: '100%', height: '500px', objectFit:'cover'}}/>
        <Section>
            {posts.length > 0 && posts.map(
                ({_id, title = '', slug = '', publishedAt = ''}) =>
                    slug && (
                        <li key={_id}>
                            <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                                {title}
                            </Link>{' '}
                            ({new Date(publishedAt).toDateString()})
                        </li>
                    )
            )}
        </Section>
    </Layout>
)

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
        props: {
            posts
        }
    }
}

export default Index