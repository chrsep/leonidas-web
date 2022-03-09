import { GetServerSideProps, NextPage } from "next"
import { getSession } from "next-auth/react"
import AppLayout, { createAppLayoutGetter } from "$layouts/app-layout"
import Settings from "./settings"
import { SSR, withAuth } from "$lib/next"

const Tracker: SSR = () => {
  return <div>test</div>
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return { props: {} }
})

Tracker.getLayout = createAppLayoutGetter("bg-white")

export default Tracker
