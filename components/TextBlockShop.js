import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'
import Image from 'next/legacy/image'
import {PortableText} from "@portabletext/react";

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
const TextBlockShop = ({title, body1, body2}) => (
    <div className={utilStyles.textblockcontainer}>
        <div className={utilStyles.textblockheader}>
            {title}
        </div>
        <div className={utilStyles.textblockshoptext}>
            <PortableText
                value={body1}
                components={ptComponents}
            />
        </div>
        <div className={utilStyles.textblockshopprice}>
            <PortableText
                value={body2}
                components={ptComponents}
            />
        </div>
    </div>
)

export default TextBlockShop