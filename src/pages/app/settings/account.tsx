import AppLayout from "$layouts/app-layout"
import { SSR, withAuth } from "$lib/next"
import Link from "$components/link"

const Account: SSR = () => {
  return (
    <main>
      <div className={"m-4"}>
        <h1 className={"text-3xl font-black"}>Settings</h1>
      </div>

      <div className={"bg-gray-600"}>
        <Link href={"/app/settings/exercises"}>
          <a className={"text-lg text-white"}>Account</a>
        </Link>
      </div>
    </main>
  )
}

export const getServerSideProps = withAuth(async ({ req }) => {
  return { props: {} }
})

Account.getLayout = AppLayout.getLayout({ className: "bg-white" })

export default Account
