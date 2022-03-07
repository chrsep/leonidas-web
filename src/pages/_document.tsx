// noinspection HtmlRequiredTitleElement
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="min-h-screen">
      <Head>
        {/* App description */}
        <meta name="application-name" content="Leonidas" />
        <meta name="description" content="Leonidas" />
        <meta name="theme-color" content="#fff" />

        {/* WebApp meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />

        {/* Icons */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
