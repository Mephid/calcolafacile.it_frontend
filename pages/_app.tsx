import '../styles/globals.scss'

import type { AppProps } from 'next/app'

import SSRProvider from 'react-bootstrap/SSRProvider'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    )
}

export default MyApp
