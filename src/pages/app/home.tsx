import { createAppLayoutGetter } from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"

const Home: SSR<typeof getServerSideProps> = ({}) => {
  return <div>test</div>
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return {
    notFound: true,
    props: {
      tets: "test",
    },
  }
})

Home.getLayout = createAppLayoutGetter("bg-white")

export default Home
