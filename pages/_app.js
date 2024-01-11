import {createTheme, ThemeProvider} from '@mui/material'
import React from 'react'
import '../styles/global.css'
import Footer from "../components/Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: '#EA9E8D',
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
        </main>
        <Footer/>
    </ThemeProvider>
)

export default App