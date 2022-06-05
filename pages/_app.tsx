import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'

import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import Script from 'next/script'

import Layout from '../components/layout'
import ErrorLogger from '../components/shared/ErrorLogger'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ErrorLogger>
            <Script
                id="CookiebotEventListener"
                dangerouslySetInnerHTML={{
                    __html: `<script>
                    window.addEventListener('CookiebotOnAccept', function () {
                         if (Cookiebot.changed){
                                document.location.reload();
                                console.log("Cookie changed");
                            }
                    )
                    </script>`,
                }}
            />
            <Script
                id="GTM-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    <!-- Google Tag Manager -->
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NH8M5H7');
                    <!-- End Google Tag Manager -->  `,
                }}
            />
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6022625362781420"
                crossOrigin="anonymous"
                type="text/plain"
                data-cookieconsent="marketing"
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ErrorLogger>
    )
}

export default MyApp
