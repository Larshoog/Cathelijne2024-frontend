// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import {PortableText} from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url'
import Layout from "../components/Layout";
import SectionWhite from "../components/SectionWhite";
import utilStyles from "../styles/utils.module.css";
import TextBlock from "../components/TextBlock";
import Image from "next/image";

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

const Index = ({posts}) => (
    <Layout>
        {/*<SectionWhite>*/}
        {/*<div>*/}
        {/*    {posts.length > 0 && posts.map(*/}
        {/*        ({_id, name = '', slug = '', bio = '', image = ''}) =>*/}
        {/*            slug && (*/}
        {/*                <div key={_id}>*/}
        {/*                    {name}*/}
        {/*                    <PortableText*/}
        {/*                        value={bio}*/}
        {/*                        components={ptComponents}*/}
        {/*                    />*/}
        {/*                    <div>*/}
        {/*                        <img*/}
        {/*                            src={urlFor(image)*/}
        {/*                                .width(50)*/}
        {/*                                .url()}*/}
        {/*                            alt={`${name}'s picture`}*/}
        {/*                        />*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            )*/}
        {/*    )}*/}
        {/*</div>*/}
        {/*</SectionWhite>*/}
        <SectionWhite>
            {posts.length > 0 && posts.map(
                ({_id, name = '', bio = '', image = ''}) =>
                    name && (
                        <div key={_id} className={utilStyles.textcontainercontainer}>
                            <TextBlock title={name} body={bio}/>
                            <div className={utilStyles.cardimage}>
                                <Image src={urlFor(image).url()} layout="fill" objectFit="contain" alt={"Cathelijne de Man"}/>
                            </div>
                        </div>
                    )
            )}

        </SectionWhite>
    </Layout>
)


export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "author" ] | order(name desc)
    `)
    return {
        props: {
            posts
        }
    }
}

export default Index