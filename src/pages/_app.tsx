import { AppPropsWithLayout } from "$lib/next"
import "@fontsource/karla/variable.css"
import "../global.css"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
