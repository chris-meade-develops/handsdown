/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1'],
    loader: 'custom',
    loaderFile: './helpers/nextImageLoader.ts'
  },
}

module.exports = nextConfig
