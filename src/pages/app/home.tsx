import AppLayout from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"

const Home: SSR<typeof getServerSideProps> = ({}) => {
  return <div>test</div>
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return {
    props: {},
  }
})

Home.getLayout = AppLayout.getLayout({ className: "bg-white" })

export default Home
