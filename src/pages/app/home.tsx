import { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import { getSession } from "next-auth/react"

const Home: NextPage = () => {
  return (
    <div className={"bg-white"}>
      <nav className="sticky top-0 flex items-center border-b border-opacity-25 p-4">
        <Link href="/">
          <a>Leonidas</a>
        </Link>
      </nav>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
      },
      props: {},
    }
  }

  return { props: {} }
}

export default Home
