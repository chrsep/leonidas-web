import Link from "next/link"
import { FC } from "react"
import Icon from "$components/icon"
import { useRouter } from "next/router"
import clsx from "clsx"

const BottomNavigationBar = () => (
  <nav className="fixed inset-x-0 bottom-0 border-t backdrop-blur backdrop-filter md:hidden">
    <ul className={"flex"}>
      <Item text={"Home"} href={"/app/home"} iconUrl={"/icons/home.svg"} />
      <Item text={"Logs"} href={"/app/logs"} iconUrl={"/icons/notebook.svg"} />
      <Item
        text={"Tracker"}
        href={"/app/tracker"}
        iconUrl={"/icons/alarm_clock.svg"}
      />
      <Item
        text={"Settings"}
        href={"/app/settings"}
        iconUrl={"/icons/settings.svg"}
      />
    </ul>
  </nav>
)

const Item: FC<{
  text: string
  href: string
  iconUrl: string
}> = ({ text, href, iconUrl }) => {
  const { asPath } = useRouter()

  return (
    <li
      className={clsx(
        "relative mx-2 flex w-1/4 items-center justify-center",
        asPath === href &&
          "after:height-px after:absolute after:inset-x-0 after:top-0 after:h-[4px] after:rounded-bl-lg after:rounded-br-lg after:bg-black after:content-['']"
      )}
    >
      <Link href={href}>
        <a className={"flex w-full flex-col items-center py-3"}>
          <Icon className={"mb-1 h-6 w-6"} src={iconUrl} />
          <p className={"text-xs opacity-70"}>{text}</p>
        </a>
      </Link>
    </li>
  )
}

export default BottomNavigationBar
