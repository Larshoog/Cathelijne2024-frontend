import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const NavItem = ({ text, href, active }) => {
    return (
        <Link href={href} className={utilStyles.navitem}>
            {text}
        </Link>
    )
}

export default NavItem
