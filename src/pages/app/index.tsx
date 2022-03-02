import { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className={"bg-white"}>
      <nav className="sticky top-0 flex items-center border-b border-opacity-25 p-4">
        <Link href="/">
          <a>Leonidas</a>
        </Link>

        <Link href={"/login"}>
          <a className="ml-auto rounded-lg border px-3 py-1 text-sm">Log in</a>
        </Link>
      </nav>
    </div>
  )
}

export default Home
