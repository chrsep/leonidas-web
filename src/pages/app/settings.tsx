import { createAppLayoutGetter } from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"

const Settings: SSR = () => {
  return <div>test</div>
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return { props: {} }
})

Settings.getLayout = createAppLayoutGetter("bg-white")

export default Settings
