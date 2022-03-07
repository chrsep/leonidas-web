const composePlugins = require("next-compose-plugins")

const withPWA = [
  require("next-pwa"),
  {
    pwa: {
      publicExcludes: ["!**/*"],
      buildExcludes: [/.*/],
      dest: "public",
      runtimeCaching: require("./sw-cache.js"),
    },
  },
]

const plugins = [require("next-plugin-preact"), withPWA]

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';  
`

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
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
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
