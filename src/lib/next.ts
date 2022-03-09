import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"
import { getSession } from "next-auth/react"
import { ParsedUrlQuery } from "querystring"
import { PreviewData } from "next/types"

type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type SSR<P = {}> = NextPageWithLayout<InferGetServerSidePropsType<P>>

export const withAuth = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
>(
  getServerSideProps: GetServerSideProps<P, Q, D>
): GetServerSideProps<Partial<P>, Q, D> => {
  return async (ctx) => {
    const session = await getSession({ req: ctx.req })
    if (!session) {
      return {
        redirect: {
          destination: "/app/auth/login",
        },
        props: {},
      }
    }

    return getServerSideProps(ctx)
  }
}
