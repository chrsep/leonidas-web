const withPWA = require("next-pwa")
const withPreact = require("next-plugin-preact")
const withTypeSafeRoutes = require("next-type-safe-routes/plugin")

/** @type {import("next").NextConfig} */
let config = {
  pwa: {
    scope: "/app",
    dest: "public",
    // buildExcludes: [
    //   /middleware-manifest\.json$/,
    //   /_middleware\.js$/,
    //   /middleware-chunks/,
    //   /_middleware\.js\.map$/,
    //   /middleware-runtime\.js$/,
    //   /server\/pages\/_middleware\.js$/,
    // ],
    buildExcludes: [/.*/],
    publicExcludes: ["!**/*"],
  },
  experimental: {
    outputStandalone: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    minimumCacheTTL: 60 * 60 * 24 * 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

config = withPreact(config)
config = withTypeSafeRoutes(config)

if (process.env.NODE_ENV === "production") {
  config = withPWA(config)
}

module.exports = config
