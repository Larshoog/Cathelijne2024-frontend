// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Layout from "../components/Layout";
import Section from "../components/Section";
import utilStyles from '../styles/utils.module.css'
import Image from "next/image";
import Card from "../components/Card";
import imageUrlBuilder from "@sanity/image-url";

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Index = ({posts}) => (
    <Layout>
        <Image src={'/images/IMG_8479.jpeg'} width={0} height={0} sizes="100vw"
               style={{ width: '100%', height: '60vh', objectFit:'cover'}}/>
        {/*<Section>*/}
        {/*    {posts.length > 0 && posts.map(*/}
        {/*        ({_id, title = '', slug = '', publishedAt = ''}) =>*/}
        {/*            slug && (*/}
        {/*                <li key={_id}>*/}
        {/*                    <Link href={`/post/${encodeURIComponent(slug.current)}`}>*/}
        {/*                        {title}*/}
        {/*                    </Link>{' '}*/}
        {/*                    ({new Date(publishedAt).toDateString()})*/}
        {/*                </li>*/}
        {/*            )*/}
        {/*    )}*/}
        {/*</Section>*/}
        <Section>
            {posts.length > 0 && posts.map(
                ({_id, title = '', slug = '', publishedAt = '', mainImage = '',}) =>
                    slug && (
            <Card key={_id} title={title} imageUrl={urlFor(mainImage).url()} linkUrl={`/shop/${encodeURIComponent(slug.current)}`}/>
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