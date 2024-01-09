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

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    types: {
        image: ({value}) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(320).height(240).fit('max').auto('format')}
                />
            )
        }
    }
}

const Post = ({post}) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        mainImage,
        body = []
    } = post
    return (
        <Layout>
            <SectionWhite>
                <div className={utilStyles.textcontainercontainer}>
                    <TextBlock title={title} body={body}/>
                    <div className={utilStyles.cardimage}>
                        <Image src={urlFor(mainImage).url()} layout="fill" objectFit="contain"/>
                    </div>
                </div>
            </SectionWhite>
        </Layout>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
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