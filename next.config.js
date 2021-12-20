/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    async redirects() {
        return [
            {
                source: '/bollo-auto/come-calcolare-il-bollo-auto-tabelle-kw-e-verifica-del-pagamento',
                destination: '/calcoli/calcolo-bollo-auto',
                permanent: true,
            },
            {
                source: '/contatti',
                destination: '/#contatti',
                permanent: true,
            },
        ]
    },
}

module.exports = withMDX(nextConfig)
