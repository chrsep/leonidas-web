import { createAppLayoutGetter } from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"

const Logs: SSR = () => {
  return <div>test</div>
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return { props: {} }
})

Logs.getLayout = createAppLayoutGetter("bg-white")

export default Logs
