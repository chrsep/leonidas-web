import { FC } from "react"
import Image from "next/image"
import BaseLayout from "$layouts/base-layout"

const AuthLayout: FC<{
  title?: string
  description?: string
  className?: string
}> = ({ description, title, className, children }) => (
  <BaseLayout title={title} description={description} className={className}>
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          layout={"fill"}
          alt=""
        />
      </div>
    </div>
  </BaseLayout>
)

export default AuthLayout
