import { InferGetServerSidePropsType, NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"

type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type SSR<P = {}> = NextPageWithLayout<InferGetServerSidePropsType<P>>
