import { GetServerSideProps, NextPage } from "next"
import Link from "$components/link"
import { getSession } from "next-auth/react"
import BaseLayout from "$layouts/base-layout"

const Home: NextPage = () => (
  <BaseLayout className={"bg-white"}>
    <nav className="sticky top-0 flex items-center border-b border-opacity-25 p-4">
      <Link href="/">
        <a>Leonidas</a>
      </Link>

      <Link href="/app/auth/login">
        <a className="ml-auto rounded-lg border px-3 py-1 text-sm">Log in</a>
      </Link>
    </nav>
  </BaseLayout>
)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  if (session) {
    return {
      redirect: {
        destination: "/app/home",
      },
      props: {},
    }
  }

  return { props: {} }
}

export default Home
