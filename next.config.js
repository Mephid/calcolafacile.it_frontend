/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

module.exports = withMDX(nextConfig)
