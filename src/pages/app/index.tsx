import { NextPage } from "next"
import Link from "next/link"

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

export default Home
