// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Layout from "../components/Layout";

import utilStyles from '../styles/utils.module.css'
import Image from "next/image";
import Card from "../components/Card";
import imageUrlBuilder from "@sanity/image-url";
import SectionWhite from "../components/SectionWhite";

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Index = ({posts}) => (
    <Layout>
        <SectionWhite>
            {posts.length > 0 && posts.map(
                ({_id, title = '', slug = '', publishedAt = '', mainImage = '',}) =>
                    slug && (
                        <Card key={_id} title={title} imageUrl={urlFor(mainImage).url()} linkUrl={`/projects/${encodeURIComponent(slug.current)}`}/>
                    )
            )}
        </SectionWhite>
    </Layout>
)

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "project" && publishedAt < now()] | order(title asc)
    `)
    return {
        props: {
            posts
        }
    }
}

export default Index