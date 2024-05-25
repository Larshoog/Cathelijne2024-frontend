import {createTheme, ThemeProvider} from '@mui/material'
import React from 'react'
import '../styles/global.css'
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F28C28',
        },
        secondary: {
            main: '#3ABEFF',
        },
        tertiary: {
            main: '#26FFE6',
        },
        white: {
            main: '#FFFFFF'
        }
    },
})

const App = ({Component, pageProps}) => (
    <ThemeProvider theme={theme}>
        <main>
            <Component {...pageProps} />
            <Analytics/>
        </main>
        <Footer/>
    </ThemeProvider>
)

export default App