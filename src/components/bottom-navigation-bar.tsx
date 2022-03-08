import Link from "next/link"
import { FC } from "react"

const BottomNavigationBar = () => (
  <nav className="fixed inset-x-0 bottom-0 border-t backdrop-blur backdrop-filter md:hidden">
    <ul className={"flex"}>
      <Item text={"Home"} href={"/app/home"} />
      <Item text={"Logs"} href={"/app/settings"} />
      <Item text={"Tracker"} href={"/app/settings"} />
      <Item text={"Settings"} href={"/app/settings"} />
    </ul>
  </nav>
)

const Item: FC<{
  text: string
  href: string
}> = ({ text, href }) => (
  <li className={"flex w-1/4 items-center justify-center py-4"}>
    <Link href={href}>
      <a>{text}</a>
    </Link>
  </li>
)

export default BottomNavigationBar
