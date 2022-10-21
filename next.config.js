/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos({
  basePath: '..public/src/components/assets/videoBg.mp4',

  webpack(config, options) {
    return config
  }
})
