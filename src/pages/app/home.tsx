import AppLayout from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"

const Home: SSR<typeof getServerSideProps> = ({}) => {
  return (
    <div>
      <h2 className={"m-4 text-2xl font-black"}>Welcome Back</h2>
    </div>
  )
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return {
    props: {},
  }
})

Home.getLayout = AppLayout.getLayout({ className: "bg-white" })

export default Home
