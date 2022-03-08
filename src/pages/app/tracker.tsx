import { GetServerSideProps, NextPage } from "next"
import { getSession } from "next-auth/react"
import AppLayout, { createAppLayoutGetter } from "$layouts/app-layout"
import Settings from "./settings"
import { SSR } from "$lib/next"

const Tracker: SSR = () => {
  return <div>test</div>
}

Tracker.getLayout = createAppLayoutGetter("bg-white")

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: "/app/auth/login",
      },
      props: {},
    }
  }

  return { props: {} }
}

export default Tracker
