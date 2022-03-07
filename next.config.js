const withPWA = require("next-pwa")
const withPreact = require("next-plugin-preact")

/** @type {import("next").NextConfig} */
let config = {
  pwa: {
    dest: "public",
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware\.js$/,
      /middleware-chunks/,
      /_middleware\.js\.map$/,
      /middleware-runtime\.js$/,
      /server\/pages\/_middleware\.js$/,
    ],
  },
  experimental: {
    outputStandalone: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

config = withPWA(config)
config = withPreact(config)

module.exports = config
