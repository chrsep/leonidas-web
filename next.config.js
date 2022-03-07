const composePlugins = require("next-compose-plugins")

const withPWA = [
  require("next-pwa"),
  {
    pwa: {
      publicExcludes: ["!**/*"],
      buildExcludes: [
        /.*/,
        /middleware-manifest\.json$/,
        /_middleware\.js$/,
        /_middleware\.js\.map$/,
        /middleware-runtime\.js$/,
        /server\/pages\/_middleware\.js$/,
      ],
      dest: "public",
      runtimeCaching: require("./sw-cache.js"),
    },
  },
]

const plugins = [require("next-plugin-preact"), withPWA]

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
]

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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = composePlugins(plugins, nextConfig)
