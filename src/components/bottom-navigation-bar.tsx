import Link from "next/link"
import { FC } from "react"
import Icon from "$components/icon"
import { useRouter } from "next/router"
import clsx from "clsx"

const BottomNavigationBar = () => (
  <nav className="fixed inset-x-0 bottom-0 border-t md:hidden">
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
        "relative mx-4 flex w-1/4 items-center justify-center ",
        "after:absolute after:inset-x-0 after:top-[-1px] after:h-[4px] after:scale-x-0 after:rounded-bl-lg after:rounded-br-lg after:bg-black after:transition-all after:duration-500 after:ease-out after:will-change-transform after:content-['']",
        asPath === href && "after:scale-x-100"
      )}
    >
      <Link href={href}>
        <a className={"flex w-full flex-col items-center py-3"}>
          <Icon className={"mb-0.5 h-[24px] w-[24px]"} src={iconUrl} />
          <p className={"text-xs opacity-70"}>{text}</p>
        </a>
      </Link>
    </li>
  )
}

export default BottomNavigationBar
