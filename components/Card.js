import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'
import Image from 'next/legacy/image'

const ContentImage = ({title, linkUrl, imageUrl}) => (
    <Link href={linkUrl}>
        <div className={utilStyles.cardcontainer}>
            <div className={utilStyles.cardimage}>
                <Image src={imageUrl} layout="fill" objectFit="contain"/>
            </div>

            <div className={utilStyles.cardtext}>
                <h2 className={utilStyles.heading}>{title}</h2>
            </div>
        </div>
    </Link>
)

export default ContentImage