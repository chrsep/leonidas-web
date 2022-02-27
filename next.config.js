const withPreact = require("next-plugin-preact")
/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = withPreact(nextConfig)
