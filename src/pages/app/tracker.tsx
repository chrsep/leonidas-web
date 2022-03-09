import AppLayout from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"

const Tracker: SSR = () => {
  return <div>test</div>
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return { props: {} }
})

Tracker.getLayout = AppLayout.getLayout({ className: "bg-white" })

export default Tracker
