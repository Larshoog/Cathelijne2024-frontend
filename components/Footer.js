import utilStyles from '../styles/utils.module.css'
import { Facebook as FacebookIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material'
import { Fab } from '@mui/material'

const Footer = () => (
    <div className={utilStyles.footer}>
        <div className={utilStyles.fabcontainer}>
            <Fab color="white" href="https://www.instagram.com/_cathelijne/">
                <InstagramIcon />
            </Fab>
        </div>
        {/*<div className={utilStyles.fabcontainer}>*/}
        {/*    <Fab color="white" href="https://www.facebook.com/lars.hoogland/">*/}
        {/*        <FacebookIcon />*/}
        {/*    </Fab>*/}
        {/*</div>*/}
        <div className={utilStyles.fabcontainer}>
            <Fab color="white" href="https://nl.linkedin.com/in/cathelijne-de-man-09058a231">
                <LinkedInIcon />
            </Fab>
        </div>
    </div>
)

export default Footer
