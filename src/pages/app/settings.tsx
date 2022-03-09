import AppLayout from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"
import Link from "next/link"
import { FC } from "react"

const Settings: SSR = () => {
  return (
    <main>
      <div className={"m-4 mt-16"}>
        <h1 className={"text-3xl font-black"}>Settings</h1>
      </div>

      <div className={"m-4 rounded-xl border bg-gray-50"}>
        <NavigationItems href={"/settings/account"}>Account</NavigationItems>
        <NavigationItems href={"/settings/exercises"}>
          Exercises
        </NavigationItems>
      </div>
    </main>
  )
}

const NavigationItems: FC<{
  href: string
}> = ({ href, children }) => (
  <Link href={href}>
    <a className={"block border-b p-4 last:border-b-0"}>{children}</a>
  </Link>
)

export const getServerSideProps = withAuth(async ({ req }) => {
  return { props: {} }
})

Settings.getLayout = AppLayout.getLayout({ className: "bg-white" })

export default Settings
