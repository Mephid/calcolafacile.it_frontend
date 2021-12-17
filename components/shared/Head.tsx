import NextHead from 'next/head'
import { useRouter } from 'next/router'

import config from '../../website.config'

interface IHeadProps {
    pageTitle: string
    metaDesc: string
}

const Head = ({ pageTitle, metaDesc }: IHeadProps) => {
    const isHome = useRouter().pathname === '/'
    const canonicalUrl = config.BASE_URL + useRouter().pathname

    const title = isHome ? pageTitle : pageTitle + ' | ' + config.SITE_NAME

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content={metaDesc} />
            <link rel="canonical" href={canonicalUrl} />
        </NextHead>
    )
}

export default Head
