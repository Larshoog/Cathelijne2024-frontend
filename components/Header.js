import {
    CalendarMonth as CalendarMonthIcon,
    Home as HomeIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    Mail as MailIcon,
    Menu as MenuIcon,
    MusicNote as MusicNoteIcon,
    Person as PersonIcon,
    SmartDisplay as SmartDisplayIcon,
    ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material'
import {
    Box,
    Drawer,
    Fab,
    Grow,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import {useState} from 'react'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import NavItem from './NavItem'


const nav = [
    {url: '/', label: 'Home', icon: <HomeIcon/>},
    {url: '/about', label: 'Over', icon: <PersonIcon/>},
    {url: '/shop', label: 'Webshop', icon: <ShoppingCartIcon/>},
    {url: '/contact', label: 'Contact', icon: <MailIcon/>},
]

const Header = ({imageUrl, name, pagetype, imageCredits}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setDrawerOpen(open)
    }

    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <header className={styles.header}>
            <div className={utilStyles.mobilemenu}>
                <IconButton color="primary" variant="contained" aria-label="open drawer" onClick={toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Box
                        sx={{width: 250}}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            {nav.map((navItem) => (
                                <Link href={navItem.url} key={navItem.url} legacyBehavior>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>{navItem.icon}</ListItemIcon>
                                            <ListItemText primary={navItem.label}/>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>
            <div className={utilStyles.navbarcontainer}>
                <div className={utilStyles.logocontainer}>
                    <h1 className={utilStyles.headingLg}>Cathelijne de Man</h1>
                </div>
                <div className={utilStyles.navbar}>
                    {nav.map((navItem) => (
                        <NavItem text={navItem.label} href={navItem.url} key={navItem.url}/>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
