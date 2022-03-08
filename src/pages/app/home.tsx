import { GetServerSideProps, NextPage } from "next"
import { getSession } from "next-auth/react"
import AppLayout from "$layouts/app-layout"

const Home: NextPage = () => {
  return <AppLayout className={"bg-white"}>test</AppLayout>
}

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

export default Home
