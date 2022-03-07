const composePlugins = require("next-compose-plugins")

const withPWA = [
  require("next-pwa"),
  {
    pwa: {
      buildExcludes: [/.*/],
      dest: "public",
    },
  },
]

const plugins = [require("next-plugin-preact"), withPWA]

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

module.exports = composePlugins(plugins, nextConfig)
