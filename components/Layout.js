import Head from 'next/head'
import {useRouter} from 'next/router'
import Footer from './Footer'
import styles from './layout.module.css'
import Header from "./Header";
import { Analytics } from '@vercel/analytics/react';

const Layout = ({children}) => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>Cathelijne de Man</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header>
            </Header>
            {children}
            <Analytics />
        </div>
    )
}

export default Layout