// [slug].tsx

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import TextBlock from "../../components/TextBlock";
import Image from "next/image";
import SectionWhite from "../../components/SectionWhite";
import TextBlockShop from "../../components/TextBlockShop";
import SectionWhiteLargeImage from "../../components/SectionWhiteLargeImage";

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Post = ({post}) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        mainImage,
        body = [],
        price = []
    } = post
    return (
        <Layout>
            <SectionWhiteLargeImage>
                    <TextBlockShop title={title} body1={body} body2={price}/>
                    <div className={utilStyles.shopimage}>
                        <Image src={urlFor(mainImage).url()} layout="fill" objectFit="contain"/>
                    </div>
            </SectionWhiteLargeImage>
        </Layout>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  price
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const {slug = ""} = context.params
    const post = await client.fetch(query, {slug})
    return {
        props: {
            post
        }
    }
}

export default Post