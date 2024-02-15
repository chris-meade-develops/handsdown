/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', "scontent.cdninstagram.com"],
    // loader: 'custom',
    // loaderFile: './helpers/nextImageLoader.ts'
  },
}

module.exports = nextConfig
