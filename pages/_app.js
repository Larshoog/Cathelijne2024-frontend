import {createTheme, ThemeProvider} from '@mui/material'
import React from 'react'
import '../styles/global.css'

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
        <Component {...pageProps} />
    </ThemeProvider>
)

export default App