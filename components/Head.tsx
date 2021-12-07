import NextHead from 'next/head'

interface IHeadProps {
    pageTitle: string
    metaDesc: string
    canonicalURL: string
}

const Head = ({ pageTitle, metaDesc, canonicalURL }: IHeadProps) => {
    return (
        <NextHead>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDesc} />
            <link rel="canonical" href={canonicalURL} />
        </NextHead>
    )
}

export default Head
