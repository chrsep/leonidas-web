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
        iconClassName={"!w-[26px] !h-[26px] !mb-0"}
      />
    </ul>
  </nav>
)

const Item: FC<{
  text: string
  href: string
  iconUrl: string
  iconClassName?: string
}> = ({ text, href, iconUrl, iconClassName }) => {
  const { asPath } = useRouter()
  const selected = asPath === href

  return (
    <li
      className={clsx(
        "relative flex w-1/4 items-center justify-center font-medium transition-opacity duration-500 ease-out",
        "after:absolute after:inset-x-0 after:top-[-1px] after:mx-4 after:h-[4px] after:scale-x-0 after:rounded-bl-lg after:rounded-br-lg after:bg-primary-600 after:transition-all after:duration-500 after:ease-out after:will-change-transform after:content-['']",
        selected && "text-primary-800 after:scale-x-100",
        !selected && "opacity-60"
      )}
    >
      <Link href={href}>
        <a className={"flex w-full flex-col items-center py-2"}>
          <Icon
            className={clsx(iconClassName, "mb-0.5 h-[26px] w-[26px]")}
            src={iconUrl}
            color={selected ? "bg-primary-700" : "bg-black"}
          />
          <p className={"text-xs"}>{text}</p>
        </a>
      </Link>
    </li>
  )
}

export default BottomNavigationBar
